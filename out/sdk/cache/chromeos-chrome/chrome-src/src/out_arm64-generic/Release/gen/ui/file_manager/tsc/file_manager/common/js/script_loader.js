// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { getSanitizedScriptUrl } from './trusted_script_url_policy_util.js';
/**
 * Used to load scripts at a runtime. Typical use:
 *
 * await new ScriptLoader('its_time.js').load();
 *
 * Optional parameters may be also specified:
 *
 * await new ScriptLoader('its_time.js', {type: 'module'}).load();
 */
export class ScriptLoader {
    /**
     * Creates a loader that loads the script specified by |src| once the load
     * method is called. Optional |params| can specify other script attributes.
     */
    constructor(src_, params = {}) {
        this.src_ = src_;
        this.type_ = params.type;
        this.defer_ = params.defer;
    }
    async load() {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            if (this.type_ !== undefined) {
                script.type = this.type_;
            }
            if (this.defer_ !== undefined) {
                script.defer = this.defer_;
            }
            script.onload = () => resolve(this.src_);
            script.onerror = (error) => reject(error);
            script.src = getSanitizedScriptUrl(this.src_);
            document.head.append(script);
        });
    }
}
