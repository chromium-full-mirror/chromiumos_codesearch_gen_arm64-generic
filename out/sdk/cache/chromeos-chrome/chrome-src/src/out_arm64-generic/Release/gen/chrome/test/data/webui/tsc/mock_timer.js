// Copyright 2013 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class MockTimer {
    /** Default versions of the timing functions. */
    originals_ = {};
    /**
     * Key to assign on the next creation of a scheduled timer. Each call to
     * setTimeout or setInterval returns a unique key that can be used for
     * clearing the timer.
     */
    nextTimerKey_ = 1;
    /** Details for active timers. */
    timers_ = [];
    /** List of scheduled tasks. */
    schedule_ = [];
    /** Virtual elapsed time in milliseconds. */
    now_ = 0;
    /**
     * Used to control when scheduled callbacks fire.  Calling the 'tick' method
     * inflates this parameter and triggers callbacks.
     */
    until_ = 0;
    /**
     * Replaces built-in functions for scheduled callbacks.
     */
    install() {
        this.replace_('setTimeout', this.setTimeout_.bind(this));
        this.replace_('clearTimeout', this.clearTimeout_.bind(this));
        this.replace_('setInterval', this.setInterval_.bind(this));
        this.replace_('clearInterval', this.clearInterval_.bind(this));
    }
    /**
     * Restores default behavior for scheduling callbacks.
     */
    uninstall() {
        if (this.originals_) {
            for (const key in this.originals_) {
                window[key] = this.originals_[key];
            }
        }
    }
    /**
     * Overrides a global function.
     * @param functionName The name of the function.
     * @param replacementFunction The function override.
     */
    replace_(functionName, replacementFunction) {
        this.originals_[functionName] = window[functionName];
        window[functionName] = replacementFunction;
    }
    /**
     * Creates a virtual timer.
     * @param callback The callback function.
     * @param delayInMs The virtual delay in milliseconds.
     * @param repeats Indicates if the timer repeats.
     * @return Identifier for the timer.
     */
    createTimer_(callback, delayInMs, repeats) {
        const key = this.nextTimerKey_++;
        const task = { callback: callback, delay: delayInMs, key: key, repeats: repeats };
        this.timers_[key] = task;
        this.scheduleTask_(task);
        return key;
    }
    /**
     * Schedules a callback for execution after a virtual time delay. The tasks
     * are sorted in descending order of time delay such that the next callback
     * to fire is at the end of the list.
     * @param details The timer details.
     */
    scheduleTask_(details) {
        const key = details.key;
        const when = this.now_ + details.delay;
        let index = this.schedule_.length;
        while (index > 0 && this.schedule_[index - 1].when < when) {
            index--;
        }
        this.schedule_.splice(index, 0, { when: when, key: key });
    }
    /**
     * Override of window.setInterval.
     * @param callback The callback function.
     * @param intervalInMs The repeat interval.
     */
    setInterval_(callback, intervalInMs) {
        return this.createTimer_(callback, intervalInMs, true);
    }
    /**
     * Override of window.clearInterval.
     * @param key The ID of the interval timer returned from setInterval.
     */
    clearInterval_(key) {
        this.timers_[key] = undefined;
    }
    /**
     * Override of window.setTimeout.
     * @param callback The callback function.
     * @param delayInMs The scheduled delay.
     */
    setTimeout_(callback, delayInMs) {
        return this.createTimer_(callback, delayInMs, false);
    }
    /**
     * Override of window.clearTimeout.
     * @param key The ID of the schedule timeout callback returned
     *     from setTimeout.
     */
    clearTimeout_(key) {
        this.timers_[key] = undefined;
    }
    /**
     * Simulates passage of time, triggering any scheduled callbacks whose timer
     * has elapsed.
     * @param elapsedMs The simulated elapsed time in milliseconds.
     */
    tick(elapsedMs) {
        this.until_ += elapsedMs;
        this.fireElapsedCallbacks_();
    }
    /**
     * Triggers any callbacks that should have fired based in the simulated
     * timing.
     */
    fireElapsedCallbacks_() {
        while (this.schedule_.length > 0) {
            const when = this.schedule_[this.schedule_.length - 1].when;
            if (when > this.until_) {
                break;
            }
            const task = this.schedule_.pop();
            const details = this.timers_[task.key];
            if (!details) {
                continue;
            } // Cancelled task.
            this.now_ = when;
            details.callback.apply(window);
            if (details.repeats) {
                this.scheduleTask_(details);
            }
            else {
                this.clearTimeout_(details.key);
            }
        }
        this.now_ = this.until_;
    }
}
