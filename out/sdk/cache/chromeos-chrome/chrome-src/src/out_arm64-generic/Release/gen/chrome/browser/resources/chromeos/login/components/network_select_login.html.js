import {html} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
  return html`<!--_html_template_start_--><!--
Copyright 2016 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->

<style>
  :host {
    display: inline-flex;
  }

  #networkSelect {
    flex: 1;
  }

  :host-context(.jelly-enabled) #networkSelect {
    font-family: var(--oobe-network-select-login-font-family);
    font-size: var(--oobe-network-select-login-font-size);
    font-weight: var(--oobe-network-select-login-font-weight);
    line-height: var(--oobe-network-select-login-line-height);
  }
</style>
<network-select id="networkSelect" class="focus-on-show"
    show-scan-progress
    enable-wifi-scans="[[enableWifiScans]]"
    custom-items="[[getNetworkCustomItems(isNetworkConnected,
        isQuickStartVisible)]]"
    on-default-network-changed="onDefaultNetworkChanged"
    on-network-connect-changed="onNetworkConnectChanged"
    on-network-list-changed="onNetworkListChanged"
    on-network-item-selected="onNetworkListNetworkItemSelected"
    on-custom-item-selected="onNetworkListCustomItemSelected"
    no-bottom-scroll-border="[[noBottomScrollBorder]]"
    show-technology-badge="[[showTechnologyBadge]]">
</network-select>
<!--_html_template_end_-->`;
}