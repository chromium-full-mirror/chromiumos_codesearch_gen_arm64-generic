// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Asynchronous job queue that supports different queuing behavior, and
 * clearing all pending jobs.
 */
export class AsyncJobQueue {
    /**
     * Constructs a new `AsyncJobQueue`.
     *
     * See the documentation of `AsyncJobQueueMode` for possible modes.
     */
    constructor(mode = 'enqueue') {
        this.mode = mode;
        /**
         * The current "running" promise.
         *
         * This is null if no current job is running, and is set by the first job
         * pushed while the queue is not running. This is resolved and set to null
         * only when all the queued jobs are processed.
         */
        this.runningPromise = null;
        /**
         * The pending jobs.
         *
         * The first call to `push` when the queue is idle won't be included in this
         * array, but all other calls to `push` will add a job to this array.
         *
         * Depending on `mode`, this array will have a max size of 0 ("drop" mode), 1
         * ("keepLatest" mode), or infinity ("enqueue" mode).
         */
        this.pendingJobs = [];
    }
    /**
     * Handles all job in `queuedJobs`.
     *
     * This should only be called in the promise chain of `runningPromise`.
     */
    async handlePendingJobs() {
        while (true) {
            const pendingJob = this.pendingJobs.shift();
            if (pendingJob === undefined) {
                break;
            }
            try {
                await pendingJob.job();
                pendingJob.resolve();
            }
            catch (e) {
                pendingJob.reject(e);
            }
        }
        this.runningPromise = null;
    }
    /**
     * Pushes the given job into queue.
     *
     * Most of the caller don't wait for the job to complete, relies on the queue
     * itself for async operation sequencing and relies on unhandled promise
     * rejection for error handling. So the job result is not directly returned
     * as a promise to avoid triggering @typescript-eslint/no-floating-promises.
     *
     * @return Return The job info containing the `result` of the job.
     */
    push(job) {
        if (this.runningPromise === null) {
            const result = Promise.resolve(job());
            this.runningPromise =
                result.catch(() => { })
                    .then(() => this.handlePendingJobs());
            return { result };
        }
        if (this.mode === 'drop') {
            return { result: Promise.resolve() };
        }
        if (this.mode === 'keepLatest') {
            this.clearInternal();
        }
        const result = new Promise((resolve, reject) => {
            this.pendingJobs.push({ job, resolve, reject });
        });
        return { result };
    }
    /**
     * Flushes the job queue.
     *
     * @return Resolved when all jobs in the queue are finished.
     */
    flush() {
        if (this.runningPromise === null) {
            return Promise.resolve();
        }
        return this.runningPromise;
    }
    clearInternal() {
        for (const job of this.pendingJobs) {
            job.resolve();
        }
        this.pendingJobs = [];
    }
    /**
     * Clears all not-yet-scheduled jobs and waits for current job finished.
     */
    clear() {
        this.clearInternal();
        return this.flush();
    }
}
/**
 * Transform an asynchronous callback to a synchronous one.
 *
 * The callback will be queued in a single AsyncJobQueue with the given `mode`.
 */
export function queuedAsyncCallback(mode, callback) {
    const queue = new AsyncJobQueue(mode);
    return (...args) => queue.push(() => callback(...args));
}
/**
 * Asynchronous job queue that returns the value of job result. Use this only
 * when job needs return value.
 */
export class AsyncJobWithResultQueue {
    constructor() {
        this.promise = Promise.resolve();
    }
    /**
     * Pushes the given job into queue.
     *
     * @return Resolved with the job return value when the job is finished.
     */
    push(job) {
        const promise = this.promise.catch(() => { })
            .then(job);
        this.promise = promise;
        return promise;
    }
    /**
     * Flushes the job queue.
     *
     * @return Resolved when all jobs in the queue are finished.
     */
    async flush() {
        await this.promise;
    }
}
