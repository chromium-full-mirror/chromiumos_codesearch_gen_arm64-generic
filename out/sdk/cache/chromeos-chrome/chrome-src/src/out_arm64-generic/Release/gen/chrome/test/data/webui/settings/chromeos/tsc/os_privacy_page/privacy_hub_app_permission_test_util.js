// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { AppType } from 'chrome://resources/cr_components/app_management/app_management.mojom-webui.js';
import { createTriStatePermission } from 'chrome://resources/cr_components/app_management/permission_util.js';
import { flush } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { FakeMetricsPrivate } from '../fake_metrics_private.js';
export function createApp(id, name, permissionType, permissionValue) {
    const app = { id, name, type: AppType.kWeb, permissions: {} };
    app.permissions[permissionType] = createTriStatePermission(permissionType, permissionValue, /*is_managed=*/ false);
    return app;
}
export function createFakeMetricsPrivate() {
    const metrics = new FakeMetricsPrivate();
    chrome.metricsPrivate = metrics;
    flush();
    return metrics;
}
export function getSystemServicesFromSubpage(subpage) {
    return subpage.shadowRoot.querySelectorAll('settings-privacy-hub-system-service-row');
}
export function getSystemServicePermissionText(systemService) {
    return systemService.shadowRoot
        .querySelector('#permissionState').innerText.trim();
}
export function getSystemServiceName(systemService) {
    return systemService.shadowRoot.querySelector('#serviceName').innerText.trim();
}
