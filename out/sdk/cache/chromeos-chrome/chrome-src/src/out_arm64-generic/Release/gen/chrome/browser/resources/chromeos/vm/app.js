// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import './strings.m.js';

import {loadTimeData} from 'chrome://resources/ash/common/load_time_data.m.js';
import {html, PolymerElement} from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {DiagnosticEntry_Status as Status} from './guest_os_diagnostics.mojom-webui.js';
import {VmDiagnosticsProvider} from './vm.mojom-webui.js';

class VmApp extends PolymerElement {
  static get properties() {
    return {
      title_: {type: String},
      // If the url is recognized, we show the diagnostics. Otherwise, we show
      // the contents page.
      showContentsPage_: {type: Boolean},
      diagnostics_: {type: Object},
    };
  }

  static get template() {
    return html`<!--_html_template_start_-->
<style>
  table {
    border-collapse: collapse;
    margin-top: 12px;
  }

  thead {
    background-color: rgb(240, 240, 240);
    border-bottom: 1px solid rgba(0, 0, 0, .06);
  }

  th:first-child,
  td:first-child {
    border-inline-end: 1px solid rgba(0, 0, 0, .06);
  }

  th,
  td {
    padding: 12px;
    text-align: start;
  }

  th:nth-child(2) {
    min-width: 100px;
  }

  th:nth-child(3) {
    min-width: 500px;
  }

  tbody tr:hover {
    background-color: rgb(250, 250, 250);
  }

  td.pass {
    color: green;
  }

  td.fail {
    color: red;
  }

</style>

<div>
  <h1 id="title">[[title_]]</h1>

  <template is="dom-if" if="[[showContentsPage_]]">
    <ul>
      <li><a href="/parallels">[[getTitle("pluginVmAppName")]]</a></li>
    </ul>
  </template>

  <template is="dom-if" if="[[!showContentsPage_]]">
    <template is="dom-if" if="[[diagnostics_.topError]]">
      <div id="top-error">
        [[formatTopErrorMessage(diagnostics_.topError.message)]]
        <a href$="[[diagnostics_.topError.learnMoreLink.url]]"
            hidden$="[[!diagnostics_.topError.learnMoreLink]]">
          $i18n{learnMoreLabel}
        </a>
      </div>
    </template>
    <table>
      <thead>
        <tr>
          <th>$i18n{requirementLabel}</th>
          <th>$i18n{statusLabel}</th>
          <th>$i18n{explanationLabel}</th>
        </tr>
      </thead>
      <tbody>
        <template is="dom-repeat" items="[[diagnostics_.entries]]">
          <tr>
            <td>[[item.requirement]]</td>
            <td class$="[[statusToClass(item.status)]]">
              [[statusToString(item.status)]]
            </td>
            <td>
              <template is="dom-if" if="[[item.explanation]]">
                [[item.explanation.message]]
                <a href$="[[item.explanation.learnMoreLink.url]]"
                   hidden$="[[!item.explanation.learnMoreLink]]">
                  $i18n{learnMoreLabel}
                </a>
              </template>
            </td>
          </tr>
        </dom-repeat>
      </tbody>
    </table>
  </template>
</div>
<!--_html_template_end_-->`;
  }

  ready() {
    super.ready();

    this.init();
  }

  async init() {
    const url = new URL(window.location.href);
    switch (url.pathname) {
      case '/parallels':
        this.setTitle_(this.getTitle('pluginVmAppName'));
        this.showContentsPage_ = false;
        this.diagnostics_ =
            (await VmDiagnosticsProvider.getRemote().getPluginVmDiagnostics())
                .diagnostics;
        break;
      default:
        // Show the contents page if the url is unknown.
        this.setTitle_(loadTimeData.getString('contentsPageTitle'));
        this.showContentsPage_ = true;
        break;
    }
  }

  /** @private */
  setTitle_(title) {
    this.title_ = title;
    document.title = this.title_;
  }

  statusToString(statusValue) {
    let stringId = '';
    switch (statusValue) {
      case Status.kPass:
        stringId = 'passLabel';
        break;
      case Status.kFail:
        stringId = 'failLabel';
        break;
      case Status.kNotApplicable:
        stringId = 'notApplicableLabel';
        break;
    }
    return loadTimeData.getString(stringId);
  }

  statusToClass(statusValue) {
    switch (statusValue) {
      case Status.kPass:
        return 'pass';
      case Status.kFail:
        return 'fail';
      case Status.kNotApplicable:
        return '';
    }
  }

  getTitle(appNameId) {
    return loadTimeData.getStringF(
        'pageTitle', loadTimeData.getString(appNameId));
  }

  formatTopErrorMessage(topErrorMessage) {
    return loadTimeData.getStringF('notEnabledMessage', topErrorMessage);
  }
}

customElements.define('vm-app', VmApp);
