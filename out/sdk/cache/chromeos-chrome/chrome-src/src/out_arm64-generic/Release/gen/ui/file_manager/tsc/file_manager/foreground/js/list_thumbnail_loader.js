// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
import { FilesEventTarget } from '../../common/js/files_event_target.js';
import { LruCache } from '../../common/js/lru_cache.js';
import { isNullOrUndefined } from '../../common/js/util.js';
import { Source, VolumeType } from '../../common/js/volume_manager_types.js';
import { FillMode, LoaderType, LoadTarget, ThumbnailLoader } from './thumbnail_loader.js';
/**
 * A thumbnail loader for list style UI.
 *
 * ListThumbnailLoader is a thumbnail loader designed for list style ui. List
 * thumbnail loader loads thumbnail in a viewport of the UI. ListThumbnailLoader
 * is responsible to return dataUrls of thumbnails and fetch them with proper
 * priority.
 */
export class ListThumbnailLoader extends FilesEventTarget {
    /**
     * @param directoryModel A directory model.
     * @param thumbnailModel Thumbnail metadata model.
     * @param volumeManager Volume manager.
     * @param opt_thumbnailLoaderConstructor A constructor of thumbnail loader.
     *     This argument is used for testing.
     */
    constructor(directoryModel_, thumbnailModel_, volumeManager_, thumbnailLoaderConstructor, cacheSize) {
        super();
        this.directoryModel_ = directoryModel_;
        this.thumbnailModel_ = thumbnailModel_;
        this.volumeManager_ = volumeManager_;
        this.active_ = {};
        this.beginIndex_ = 0;
        this.endIndex_ = 0;
        this.cursor_ = 0;
        /**
         * Current volume type.
         */
        this.currentVolumeType_ = null;
        /**
         * Number of maximum active tasks for testing.
         */
        this.numOfMaxActiveTasksForTest_ = 2;
        /**
         * Constructor of thumbnail loader.
         */
        this.thumbnailLoaderConstructor_ =
            thumbnailLoaderConstructor || ThumbnailLoader;
        this.dataModel_ = this.directoryModel_.getFileList();
        /**
         * Cache size. Cache size must be larger than sum of high priority range
         * size and number of prefetch tasks.
         */
        this.cache_ = new LruCache(cacheSize ?? 500);
        this.directoryModel_.addEventListener('scan-completed', this.onScanCompleted_.bind(this));
        this.dataModel_.addEventListener('splice', this.onSplice_.bind(this));
        this.dataModel_.addEventListener('sorted', this.onSorted_.bind(this));
        this.dataModel_.addEventListener('change', this.onChange_.bind(this));
    }
    /**
     * Gets number of prefetch requests. This number changes based on current
     * volume type.
     * @return Number of prefetch requests.
     */
    getNumOfPrefetch_() {
        switch (this.currentVolumeType_) {
            case VolumeType.MTP:
                return 0;
            case TEST_VOLUME_TYPE:
                return 1;
            default:
                return 20;
        }
    }
    /**
     * Gets maximum number of active thumbnail fetch tasks. This number changes
     * based on current volume type.
     * @return Maximum number of active thumbnail fetch tasks.
     */
    getNumOfMaxActiveTasks_() {
        switch (this.currentVolumeType_) {
            case VolumeType.MTP:
                return 1;
            case TEST_VOLUME_TYPE:
                return this.numOfMaxActiveTasksForTest_;
            default:
                return 10;
        }
    }
    /**
     * An event handler for scan-completed event of directory model. When
     * directory scan is running, we don't fetch thumbnail in order not to block
     * IO for directory scan. i.e. modification events during directory scan is
     * ignored. We need to check thumbnail loadings after directory scan is
     * completed.
     */
    onScanCompleted_(_event) {
        this.cursor_ = this.beginIndex_;
        this.continue_();
    }
    /**
     * An event handler for splice event of data model. When list is changed,
     * start to rescan items.
     */
    onSplice_(_event) {
        this.cursor_ = this.beginIndex_;
        this.continue_();
    }
    /**
     * An event handler for sorted event of data model. When list is sorted, start
     * to rescan items.
     */
    onSorted_(_event) {
        this.cursor_ = this.beginIndex_;
        this.continue_();
    }
    /**
     * An event handler for change event of data model.
     */
    onChange_(event) {
        // Mark the thumbnail in cache as invalid.
        const entry = isNullOrUndefined(event.detail.index) ?
            null :
            this.dataModel_.item(event.detail.index);
        const cachedThumbnail = this.cache_.peek(entry?.toURL() || '');
        if (cachedThumbnail) {
            cachedThumbnail.outdated = true;
        }
        this.cursor_ = this.beginIndex_;
        this.continue_();
    }
    /**
     * Sets high priority range in the list.
     *
     * @param beginIndex Begin index of the range, inclusive.
     * @param endIndex End index of the range, exclusive.
     */
    setHighPriorityRange(beginIndex, endIndex) {
        if (!(beginIndex < endIndex)) {
            return;
        }
        this.beginIndex_ = beginIndex;
        this.endIndex_ = endIndex;
        this.cursor_ = this.beginIndex_;
        this.continue_();
    }
    /**
     * Returns a thumbnail of an entry if it is in cache. This method returns
     * thumbnail even if the thumbnail is outdated.
     *
     * @return If the thumbnail is not in cache, this returns null.
     */
    getThumbnailFromCache(entry) {
        // Since we want to evict cache based on high priority range, we use peek
        // here instead of get.
        return this.cache_.peek(entry.toURL()) || null;
    }
    /**
     * Enqueues tasks if available.
     */
    continue_() {
        // If directory scan is running or all items are scanned, do nothing.
        if (this.directoryModel_.isScanning() ||
            !(this.cursor_ < this.dataModel_.length)) {
            return;
        }
        const entry = this.dataModel_.item(this.cursor_);
        // Check volume type for optimizing the parameters.
        const volumeInfo = this.volumeManager_.getVolumeInfo(entry);
        this.currentVolumeType_ = volumeInfo ? volumeInfo.volumeType : null;
        // If tasks are running full or all items are scanned, do nothing.
        if (!(Object.keys(this.active_).length < this.getNumOfMaxActiveTasks_()) ||
            !(this.cursor_ < this.endIndex_ + this.getNumOfPrefetch_())) {
            return;
        }
        // If the entry is a directory, already in cache as valid or fetching, skip.
        const thumbnail = this.cache_.get(entry.toURL());
        if (entry.isDirectory || (thumbnail && !thumbnail.outdated) ||
            this.active_[entry.toURL()]) {
            this.cursor_++;
            this.continue_();
            return;
        }
        this.enqueue_(this.cursor_, entry);
        this.cursor_++;
        this.continue_();
    }
    /**
     * Enqueues a thumbnail fetch task for an entry.
     *
     * @param index Index of an entry in current data model.
     * @param entry An entry.
     */
    enqueue_(index, entry) {
        const task = new ListThumbnailLoaderTask(entry, this.volumeManager_, this.thumbnailModel_, this.thumbnailLoaderConstructor_);
        const url = entry.toURL();
        this.active_[url] = task;
        task.fetch().then(thumbnail => {
            delete this.active_[url];
            this.cache_.put(url, thumbnail);
            this.dispatchThumbnailLoaded_(index, thumbnail);
            this.continue_();
        });
    }
    /**
     * Dispatches thumbnail loaded event.
     *
     * @param index Index of an original image in the data model.
     * @param thumbnail Thumbnail.
     */
    dispatchThumbnailLoaded_(index, thumbnail) {
        // Update index if it's already invalid, i.e. index may be invalid if some
        // change had happened in the data model during thumbnail fetch.
        const item = this.dataModel_.item(index);
        if (item && item.toURL() !== thumbnail.fileUrl) {
            index = -1;
            for (let i = 0; i < this.dataModel_.length; i++) {
                if (this.dataModel_.item(i).toURL() === thumbnail.fileUrl) {
                    index = i;
                    break;
                }
            }
        }
        if (index > -1) {
            this.dispatchEvent(new CustomEvent('thumbnailLoaded', {
                detail: {
                    index,
                    fileUrl: thumbnail.fileUrl,
                    dataUrl: thumbnail.dataUrl,
                    width: thumbnail.width,
                    height: thumbnail.height,
                },
            }));
        }
    }
    set numOfMaxActiveTasksForTest(num) {
        this.numOfMaxActiveTasksForTest_ = num;
    }
}
/**
 * Volume type for testing.
 */
export const TEST_VOLUME_TYPE = 'test_volume_type';
/**
 * A class to represent thumbnail data.
 */
class ThumbnailData {
    /**
     * @param fileUrl File url of an original image.
     * @param dataUrl Data url of thumbnail.
     * @param width Width of thumbnail.
     * @param height Height of thumbnail.
     */
    constructor(fileUrl, dataUrl, width, height) {
        this.fileUrl = fileUrl;
        this.dataUrl = dataUrl;
        this.width = width;
        this.height = height;
        this.outdated = false;
    }
}
/**
 * A task to load thumbnail.
 */
export class ListThumbnailLoaderTask {
    /**
     *
     * @param entry An entry.
     * @param volumeManager Volume manager.
     * @param thumbnailModel Metadata cache.
     * @param thumbnailLoaderConstructor A constructor of thumbnail loader.
     */
    constructor(entry_, volumeManager_, thumbnailModel_, thumbnailLoaderConstructor_) {
        this.entry_ = entry_;
        this.volumeManager_ = volumeManager_;
        this.thumbnailModel_ = thumbnailModel_;
        this.thumbnailLoaderConstructor_ = thumbnailLoaderConstructor_;
    }
    /**
     * Fetches thumbnail.
     *
     * @return A promise which is resolved when thumbnail data is fetched with
     *     either a success or an error.
     */
    async fetch() {
        let ioError = false;
        return this.thumbnailModel_.get([this.entry_])
            .then(metadatas => {
            assert(metadatas[0]);
            // When it failed to read exif header with an IO error, do not
            // generate thumbnail at this time since it may success in the second
            // try. If it failed to read at 0 byte, it would be an IO error.
            if (metadatas[0].thumbnail.urlError &&
                metadatas[0].thumbnail.urlError.errorDescription ===
                    'Error: Unexpected EOF @0') {
                ioError = true;
                return Promise.reject();
            }
            return metadatas[0];
        })
            .then(metadata => {
            const loadTargets = [
                LoadTarget.CONTENT_METADATA,
                LoadTarget.EXTERNAL_METADATA,
            ];
            // If the file is on a network filesystem, don't generate thumbnails
            // from file entry, as it could cause very high network traffic.
            // Allow Drive to do so however, as ThumbnailLoader tries to generate
            // thumbnails of Drive files from file entry only if cached locally.
            const volumeInfo = this.volumeManager_.getVolumeInfo(this.entry_);
            if (volumeInfo &&
                (volumeInfo.source !== Source.NETWORK ||
                    volumeInfo.volumeType === VolumeType.DRIVE)) {
                loadTargets.push(LoadTarget.FILE_ENTRY);
            }
            return new this
                .thumbnailLoaderConstructor_(this.entry_, LoaderType.IMAGE, metadata, undefined /* mediaType */, loadTargets)
                .loadAsDataUrl(FillMode.OVER_FILL);
        })
            .then(result => {
            return new ThumbnailData(this.entry_.toURL(), result.data ?? null, result.width ?? null, result.height ?? null);
        })
            .catch(() => {
            // If an error happens during generating of a thumbnail, then return
            // an empty object, so we don't retry the thumbnail over and over
            // again.
            const thumbnailData = new ThumbnailData(this.entry_.toURL(), null, null, null);
            if (ioError) {
                // If fetching a thumbnail from EXIF fails due to an IO error, then
                // try to refetch it in the future, but not earlier than in 3
                // second.
                setTimeout(() => {
                    thumbnailData.outdated = true;
                }, EXIF_IO_ERROR_DELAY);
            }
            return thumbnailData;
        });
    }
}
/**
 * Minimum delay of milliseconds before another retry for fetching a
 * thumbnmail from EXIF after failing with an IO error. In milliseconds.
 *
 */
const EXIF_IO_ERROR_DELAY = 3000;
