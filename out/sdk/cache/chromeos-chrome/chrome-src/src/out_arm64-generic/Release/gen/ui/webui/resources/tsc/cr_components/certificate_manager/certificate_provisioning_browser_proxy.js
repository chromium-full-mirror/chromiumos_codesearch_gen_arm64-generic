// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class CertificateProvisioningBrowserProxyImpl {
    refreshCertificateProvisioningProcesses() {
        chrome.send('refreshCertificateProvisioningProcessses');
    }
    triggerCertificateProvisioningProcessUpdate(certProfileId) {
        chrome.send('triggerCertificateProvisioningProcessUpdate', [certProfileId]);
    }
    static getInstance() {
        return instance ||
            (instance = new CertificateProvisioningBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
// The singleton instance_ is replaced with a test version of this wrapper
// during testing.
let instance = null;
