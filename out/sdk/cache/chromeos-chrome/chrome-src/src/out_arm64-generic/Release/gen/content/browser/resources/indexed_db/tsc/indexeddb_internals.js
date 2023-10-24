// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/js/jstemplate_compiled.js';
import { assert } from 'chrome://resources/js/assert.js';
import { getRequiredElement } from 'chrome://resources/js/util_ts.js';
import { IdbTransactionMode, IdbTransactionState } from './indexed_db_bucket_types.mojom-webui.js';
import { IdbInternalsHandler } from './indexed_db_internals.mojom-webui.js';
// Methods to convert mojo values to strings or to objects with readable
// toString values. Accessible to jstemplate html code.
const stringifyMojo = {
    time(mojoTime) {
        // The JS Date() is based off of the number of milliseconds since
        // the UNIX epoch (1970-01-01 00::00:00 UTC), while |internalValue|
        // of the base::Time (represented in mojom.Time) represents the
        // number of microseconds since the Windows FILETIME epoch
        // (1601-01-01 00:00:00 UTC). This computes the final JS time by
        // computing the epoch delta and the conversion from microseconds to
        // milliseconds.
        const windowsEpoch = Date.UTC(1601, 0, 1, 0, 0, 0, 0);
        const unixEpoch = Date.UTC(1970, 0, 1, 0, 0, 0, 0);
        // |epochDeltaInMs| equals to
        // base::Time::kTimeTToMicrosecondsOffset.
        const epochDeltaInMs = unixEpoch - windowsEpoch;
        const timeInMs = Number(mojoTime.internalValue) / 1000;
        return new Date(timeInMs - epochDeltaInMs);
    },
    string16(mojoString16) {
        return String.fromCharCode(...mojoString16.data);
    },
    scope(mojoScope) {
        return `[${mojoScope.map(s => stringifyMojo.string16(s)).join(', ')}]`;
    },
    origin(mojoOrigin) {
        const { scheme, host, port } = mojoOrigin;
        const portSuf = (port === 0 ? '' : `:${port}`);
        return `${scheme}://${host}${portSuf}`;
    },
    schemefulSite(mojoSite) {
        return stringifyMojo.origin(mojoSite.siteAsOrigin);
    },
    transactionState(mojoState) {
        switch (mojoState) {
            case IdbTransactionState.kBlocked:
                return 'Blocked';
            case IdbTransactionState.kRunning:
                return 'Running';
            case IdbTransactionState.kStarted:
                return 'Started';
            case IdbTransactionState.kCommitting:
                return 'Comitting';
            case IdbTransactionState.kFinished:
                return 'Finished';
        }
    },
    transactionMode(mojoMode) {
        switch (mojoMode) {
            case IdbTransactionMode.kReadOnly:
                return 'ReadOnly';
            case IdbTransactionMode.kReadWrite:
                return 'ReadWrite';
            case IdbTransactionMode.kVersionChange:
                return 'VersionChange';
        }
    },
    partitionBucketCount(mojoPartition) {
        let count = 0;
        mojoPartition.originList.forEach(origin => origin.storageKeys.forEach(storageKey => count += storageKey.buckets.length));
        return count;
    },
};
function promisifyMojoResult(remotePromise, valueProp) {
    return new Promise((resolve, reject) => {
        remotePromise.then((response) => {
            if (response.error !== null) {
                reject(response.error);
            }
            else {
                resolve(response[valueProp]);
            }
        });
    });
}
class IdbInternalsRemote {
    constructor() {
        this.handler = IdbInternalsHandler.getRemote();
    }
    getAllBucketsAcrossAllStorageKeys() {
        return promisifyMojoResult(this.handler.getAllBucketsAcrossAllStorageKeys(), 'partitions');
    }
    downloadBucketData(bucketId) {
        return promisifyMojoResult(this.handler.downloadBucketData(bucketId), 'connectionCount');
    }
    forceClose(bucketId) {
        return promisifyMojoResult(this.handler.forceClose(bucketId), 'connectionCount');
    }
}
const internalsRemote = new IdbInternalsRemote();
function initialize() {
    internalsRemote.getAllBucketsAcrossAllStorageKeys()
        .then(onStorageKeysReady)
        .catch(errorMsg => console.error(errorMsg));
}
class BucketElement extends HTMLElement {
    constructor() {
        super();
        this.addControlListener('.download', internalsRemote.downloadBucketData);
        this.addControlListener('.force-close', internalsRemote.forceClose);
        this.progressNode = this.getNode('.download-status');
        this.connectionCountNode = this.getNode('.connection-count');
    }
    getNode(selector) {
        const controlNode = this.querySelector(`${selector}`);
        assert(controlNode);
        return controlNode;
    }
    addControlListener(selector, idbMojoFunc) {
        const eventHandler = () => {
            // Show loading
            this.progressNode.style.display = 'inline';
            idbMojoFunc.bind(internalsRemote)(this.idbBucketId)
                .then(this.onLoadComplete.bind(this))
                .catch(errorMsg => console.error(errorMsg));
        };
        const control = this.getNode(`.control${selector}`);
        control.addEventListener('click', eventHandler);
    }
    onLoadComplete(connectionCount) {
        this.progressNode.style.display = 'none';
        this.connectionCountNode.innerText = connectionCount.toString();
    }
}
function onStorageKeysReady(partitions) {
    const template = jstGetTemplate('indexeddb-list-template');
    getRequiredElement('indexeddb-list').appendChild(template);
    jstProcess(new JsEvalContext({
        partitions,
        stringifyMojo,
    }), template);
}
customElements.define('indexeddb-bucket', BucketElement);
document.addEventListener('DOMContentLoaded', initialize);
