// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert, assertInstanceof } from '../assert.js';
import * as Comlink from '../lib/comlink.js';
import { MimeType, } from '../type.js';
import { getVideoProcessorHelper } from '../untrusted_scripts.js';
import { lazySingleton } from '../util.js';
import { WaitableEvent } from '../waitable_event.js';
import { AsyncWriter } from './async_writer.js';
import { createGifArgs, createMp4Args, createTimeLapseArgs, } from './ffmpeg/video_processor_args.js';
import { createPrivateTempVideoFile } from './file_system.js';
// This is used like a class constructor.
// We don't initialize this immediately to avoid side effect on module import.
const getFFMpegVideoProcessorConstructor = lazySingleton(async () => {
    const workerChannel = new MessageChannel();
    const videoProcessorHelper = await getVideoProcessorHelper();
    await videoProcessorHelper.connectToWorker(Comlink.transfer(workerChannel.port2, [workerChannel.port2]));
    return Comlink.wrap(workerChannel.port1);
});
/**
 * Creates a VideoProcessor instance for recording video.
 */
async function createVideoProcessor(output, videoRotation) {
    return new (await getFFMpegVideoProcessorConstructor())(Comlink.proxy(output), createMp4Args(videoRotation, output.seekable()));
}
/**
 * Creates a VideoProcessor instance for recording gif.
 */
async function createGifVideoProcessor(output, resolution) {
    return new (await getFFMpegVideoProcessorConstructor())(Comlink.proxy(output), createGifArgs(resolution));
}
/*
 * Creates a VideoProcessor instance for recording time-lapse.
 */
async function createTimeLapseProcessor(output, { resolution, fps, videoRotation }) {
    return new (await getFFMpegVideoProcessorConstructor())(Comlink.proxy(output), createTimeLapseArgs(resolution, fps, videoRotation));
}
/**
 * Creates an AsyncWriter that writes to the given intent.
 */
function createWriterForIntent(intent) {
    async function write(blob) {
        await intent.appendData(new Uint8Array(await blob.arrayBuffer()));
    }
    // TODO(crbug.com/1140852): Supports seek.
    return new AsyncWriter({ write, seek: null, close: null });
}
/**
 * Used to save captured video.
 */
export class VideoSaver {
    constructor(file, processor) {
        this.file = file;
        this.processor = processor;
    }
    /**
     * Writes video data to result video.
     */
    async write(blob) {
        await this.processor.write(blob);
    }
    /**
     * Cancels and drops all the written video data.
     */
    async cancel() {
        await this.processor.cancel();
        return this.file.remove();
    }
    /**
     * Finishes the write of video data parts and returns result video file.
     */
    async endWrite() {
        await this.processor.close();
        return this.file;
    }
    /**
     * Creates video saver which saves video into a temporary file.
     * TODO(b/184583382): Saves to the target file directly once the File System
     * Access API supports cleaning temporary file when leaving the page without
     * closing the file stream.
     */
    static async create(videoRotation) {
        const file = await createPrivateTempVideoFile();
        const writer = await file.getWriter();
        const processor = await createVideoProcessor(writer, videoRotation);
        return new VideoSaver(file, processor);
    }
    /**
     * Creates video saver for the given |intent|.
     */
    static async createForIntent(intent, videoRotation) {
        const file = await createPrivateTempVideoFile();
        const fileWriter = await file.getWriter();
        const intentWriter = createWriterForIntent(intent);
        const writer = AsyncWriter.combine(fileWriter, intentWriter);
        const processor = await createVideoProcessor(writer, videoRotation);
        return new VideoSaver(file, processor);
    }
}
/**
 * Used to save captured gif.
 */
export class GifSaver {
    constructor(blobs, processor) {
        this.blobs = blobs;
        this.processor = processor;
    }
    write(frame) {
        // processor.write does queuing internally.
        void this.processor.write(new Blob([frame]));
    }
    /**
     * Finishes the write of gif data parts and returns result gif blob.
     */
    async endWrite() {
        await this.processor.close();
        return new Blob(this.blobs, { type: MimeType.GIF });
    }
    /**
     * Creates video saver for the given file.
     */
    static async create(resolution) {
        const blobs = [];
        const writer = new AsyncWriter({
            write(blob) {
                blobs.push(blob);
            },
            seek: null,
            close: null,
        });
        const processor = await createGifVideoProcessor(writer, resolution);
        return new GifSaver(blobs, processor);
    }
}
class TimeLapseFixedSpeedSaver {
    constructor(speed, file, processor) {
        this.speed = speed;
        this.file = file;
        this.processor = processor;
        this.maxWrittenFrame = null;
    }
    write(blob, frameNo) {
        // processor.write does queuing internally.
        void this.processor.write(blob);
        this.maxWrittenFrame = frameNo;
    }
    getNextFrame() {
        return this.maxWrittenFrame === null ? 0 :
            this.maxWrittenFrame + this.speed;
    }
    includeFrameNo(frameNo) {
        return frameNo % this.speed === 0;
    }
    async cancel() {
        await this.processor.cancel();
        return this.file.remove();
    }
    async endWrite() {
        await this.processor.close();
    }
    static async create(speed, args) {
        const file = await createPrivateTempVideoFile(`tmp-video-${speed}x.mp4`);
        const writer = await file.getWriter();
        const processor = await createTimeLapseProcessor(writer, args);
        return new TimeLapseFixedSpeedSaver(speed, file, processor);
    }
}
/**
 * Maximum duration for the time-lapse video in seconds.
 */
export const TIME_LAPSE_MAX_DURATION = 30;
/**
 * Default number of fps in case it's not defined from the original video.
 */
const TIME_LAPSE_DEFAULT_FRAME_RATE = 30;
/**
 * Time interval to repeatedly call |manageSavers|.
 */
const SAVER_MANAGER_TIMEOUT_MS = 100;
/**
 * Used to save time-lapse video.
 */
export class TimeLapseSaver {
    constructor(encoderArgs) {
        this.encoderArgs = encoderArgs;
        /**
         * Maps a frame's timestamp with frameNo, only storing frames being
         * encoded.
         */
        this.frameNoMap = new Map();
        /**
         * Maps all encoded frames with their frame numbers.
         * TODO(b/236800499): Investigate if it is OK to store number of blobs in
         * memory.
         */
        this.frames = new Map();
        /**
         * Max frameNo that has been encoded and stored so far.
         */
        this.maxFrameNo = -1;
        /**
         * Whether the saving is canceled.
         */
        this.canceled = false;
        /**
         * Whether the saving is ended because users stop recording.
         */
        this.ended = false;
        /**
         * A waitable event which resolves when the saver finishes saving/canceling.
         */
        this.onFinished = new WaitableEvent();
        /**
         * Callback listening when there is an error in the saver.
         */
        this.onError = null;
        this.encoder = new VideoEncoder({
            error: (error) => {
                throw error;
            },
            output: (chunk) => this.onFrameEncoded(chunk),
        });
        this.encoder.configure(encoderArgs.encoderConfig);
    }
    /**
     * Initializes the saver with the given initial |speed|.
     */
    async init(speed) {
        this.initialSpeed = speed;
        this.currSpeedSaver = await this.createSaver(speed);
        this.nextSpeedSaver =
            await this.createSaver(TimeLapseSaver.getNextSpeed(speed));
        this.speedCheckpoint =
            speed * TIME_LAPSE_MAX_DURATION * this.encoderArgs.fps;
        setTimeout(() => this.manageSavers(), SAVER_MANAGER_TIMEOUT_MS);
    }
    setErrorCallback(callback) {
        this.onError = callback;
    }
    /**
     * Callback to be called when the frame is encoded. Converts an encoded
     * |chunk| to Blob and stores with its frame number.
     */
    onFrameEncoded(chunk) {
        const frameNo = this.frameNoMap.get(chunk.timestamp);
        assert(frameNo !== undefined);
        const chunkData = new Uint8Array(chunk.byteLength);
        chunk.copyTo(chunkData);
        this.frames.set(frameNo, new Blob([chunkData]));
        this.maxFrameNo = frameNo;
        this.frameNoMap.delete(chunk.timestamp);
    }
    /**
     * Sends the |frame| to the encoder.
     */
    write(frame, frameNo) {
        if (frame.timestamp === null || this.ended || this.canceled) {
            return;
        }
        this.frameNoMap.set(frame.timestamp, frameNo);
        // Frames that are only in the initial speed video don't have to be encoded
        // as key frames because they'll be dropped soon.
        const keyFrame = frameNo % (this.initialSpeed * 2) === 0;
        this.encoder.encode(frame, { keyFrame });
    }
    /**
     * Stops the encoder by flushing and closing it.
     */
    async closeEncoder() {
        await this.encoder.flush();
        this.encoder.close();
    }
    /**
     * Finishes the write of video and returns result video file.
     */
    async endWrite() {
        this.ended = true;
        await this.closeEncoder();
        await this.onFinished.wait();
        return this.currSpeedSaver.file;
    }
    /**
     * Cancels the write of video.
     */
    async cancel() {
        this.canceled = true;
        await this.closeEncoder();
        await this.onFinished.wait();
    }
    /**
     * Gets current or final time-lapse video speed.
     */
    get speed() {
        return this.currSpeedSaver.speed;
    }
    /**
     * Writes the next frame, if exists, to the saver. Returns a boolean
     * indicating if there are more frames to be written.
     */
    writeNextFrame(saver) {
        const frameNo = saver.getNextFrame();
        if (frameNo > this.maxFrameNo) {
            return true;
        }
        const blob = this.frames.get(frameNo);
        saver.write(assertInstanceof(blob, Blob), frameNo);
        return frameNo >= this.maxFrameNo;
    }
    /**
     * Updates savers and drops unused frames according to the new speed.
     */
    async updateSpeed() {
        // Updates savers and next speed checkpoint.
        await this.currSpeedSaver.cancel();
        this.currSpeedSaver = this.nextSpeedSaver;
        const speed = this.currSpeedSaver.speed;
        this.nextSpeedSaver =
            await this.createSaver(TimeLapseSaver.getNextSpeed(speed));
        this.speedCheckpoint =
            speed * TIME_LAPSE_MAX_DURATION * this.encoderArgs.fps;
        // Drops unused frames.
        for (const frameNo of Array.from(this.frames.keys())) {
            if (!this.currSpeedSaver.includeFrameNo(frameNo) &&
                !this.nextSpeedSaver.includeFrameNo(frameNo)) {
                this.frames.delete(frameNo);
            }
        }
    }
    /**
     * Manages initializing (of the new savers), writing, ending, and canceling of
     * |TimeLapseFixedSpeedSaver|. Most operations except encoding are supposed to
     * be done here to avoid race conditions.
     */
    async manageSavers() {
        try {
            if (this.ended) {
                await this.nextSpeedSaver.cancel();
                let done = false;
                while (!done) {
                    done = this.writeNextFrame(this.currSpeedSaver);
                }
                await this.currSpeedSaver.endWrite();
                this.onFinished.signal();
            }
            else if (this.canceled) {
                await Promise.all([
                    this.currSpeedSaver.cancel(),
                    this.nextSpeedSaver.cancel(),
                ]);
                this.onFinished.signal();
            }
            else {
                this.writeNextFrame(this.currSpeedSaver);
                this.writeNextFrame(this.nextSpeedSaver);
                if (this.maxFrameNo >= this.speedCheckpoint) {
                    await this.updateSpeed();
                }
            }
        }
        catch (e) {
            if (this.onError !== null) {
                this.onError(e);
            }
            else {
                throw e;
            }
        }
        // Repeatedly call this function until the saver is ended/canceled.
        if (!this.onFinished.isSignaled()) {
            setTimeout(() => this.manageSavers(), SAVER_MANAGER_TIMEOUT_MS);
        }
    }
    /**
     * Returns the next time-lapse speed after the given |speed|.
     */
    static getNextSpeed(speed) {
        return speed * 2;
    }
    /**
     * Creates a saver for the given |speed|.
     */
    async createSaver(speed) {
        return TimeLapseFixedSpeedSaver.create(speed, this.encoderArgs);
    }
    /**
     * Creates a video saver with encoder using given |encoderArgs| and the
     * initial |speed|.
     */
    static async create(encoderArgs, speed) {
        const encoderSupport = await VideoEncoder.isConfigSupported(encoderArgs.encoderConfig);
        if (encoderSupport.supported === null ||
            encoderSupport.supported === undefined || !encoderSupport.supported) {
            throw new Error('Video encoder is not supported.');
        }
        encoderArgs.fps =
            encoderArgs.fps > 0 ? encoderArgs.fps : TIME_LAPSE_DEFAULT_FRAME_RATE;
        const saver = new TimeLapseSaver(encoderArgs);
        await saver.init(speed);
        return saver;
    }
}
