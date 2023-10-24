// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import 'chrome://resources/ash/common/network_health/network_diagnostics.js';
import 'chrome://resources/ash/common/network_health/network_health_summary.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import './strings.m.js';

import {sendWithPromise} from 'chrome://resources/ash/common/cr.m.js';
import {CrContainerShadowBehavior} from 'chrome://resources/ash/common/cr_container_shadow_behavior.js';
import {I18nBehavior} from 'chrome://resources/ash/common/i18n_behavior.js';
import {html, Polymer} from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';

/**
 * @fileoverview
 * Polymer element connectivity diagnostics UI.
 */

Polymer({
  is: 'connectivity-diagnostics',

  _template: html`<!--_html_template_start_-->
<style include="cr-shared-style">
  :host {
   font-family: Roboto, sans-serif;
   font-size: 75%;
   font-weight: 500;
  }

  #appTitle {
    font-family: 'Google Sans'
  }

  .app {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .button-group {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    padding: 5px;
  }

  .button-group > cr-button {
    margin-inline-start: 10px;
  }

  .content {
    height: 100%;
    overflow: scroll;
  }

  .section {
    margin-bottom: 25px;
  }
</style>

<div class="app">
  <h1 id="appTitle">[[i18n('appTitle')]]</h1>
  <div id="container" class="content" show-bottom-shadow>
    <div class="section">
      <h3>[[i18n('networkDevicesLabel')]]</h3>
      <network-health-summary id="network-health"></network-health-summary>
    </div>
    <div class="section">
      <h3>[[i18n('diagnosticRoutinesLabel')]]</h3>
      <network-diagnostics id="network-diagnostics"></network-diagnostics>
    </div>
  </div>
  <div class="button-group">
    <cr-button on-click="onCloseClick_">[[i18n('closeBtn')]]</cr-button>
    <cr-button on-click="onRunAllRoutinesClick_">
      [[i18n('rerunRoutinesBtn')]]
    </cr-button>
    <template is="dom-if" if="[[showFeedbackBtn_]]">
      <cr-button on-click="onSendFeedbackClick_">
        [[i18n('sendFeedbackBtn')]]
      </cr-button>
    </template>
  </div>
</div>
<!--_html_template_end_-->`,

  behaviors: [I18nBehavior, CrContainerShadowBehavior],

  /**
   * Boolean flag to show the feedback button in the app.
   * @private
   * @type {boolean}
   */
  showFeedbackBtn_: false,

  /** @override */
  attached() {
    this.getShowFeedbackBtn_();
    this.runAllRoutines_();
  },

  /**
   * Returns and typecasts the network diagnostics element
   * @returns {!NetworkDiagnosticsElement}
   * @private
   */
  getNetworkDiagnosticsElement_() {
    return /** @type {!NetworkDiagnosticsElement} */ (
        this.$$('#network-diagnostics'));
  },

  /** @private */
  runAllRoutines_() {
    this.getNetworkDiagnosticsElement_().runAllRoutines();
  },

  /** @private */
  onCloseClick_() {
    self.close();
  },

  /** @private */
  onRunAllRoutinesClick_() {
    this.runAllRoutines_();
  },

  /**
   * Handles requests to open the feedback report dialog. The provided string
   * in the event will be sent as a part of the feedback report.
   * @private
   */
  onSendFeedbackClick_() {
    chrome.send('sendFeedbackReport');
  },

  /** @private */
  getShowFeedbackBtn_() {
    sendWithPromise('getShowFeedbackButton').then(result => {
      this.set('showFeedbackBtn_', result[0]);
    });
  },
});
