// Copyright 2013 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview App install/launch splash screen implementation.
 */

import '//resources/js/action_link.js';
import '../../components/throbber_notice.js';

import {announceAccessibleMessage, ensureTransitionEndEvent} from '//resources/ash/common/util.js';
import {html, mixinBehaviors, Polymer, PolymerElement} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {LoginScreenBehavior, LoginScreenBehaviorInterface} from '../../components/behaviors/login_screen_behavior.js';
import {OobeI18nBehavior, OobeI18nBehaviorInterface} from '../../components/behaviors/oobe_i18n_behavior.js';
import {OOBE_UI_STATE} from '../../components/display_manager_types.js';



/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {LoginScreenBehaviorInterface}
 */
const AppLaunchSplashBase =
    mixinBehaviors([OobeI18nBehavior, LoginScreenBehavior], PolymerElement);

/**
 * @typedef {{
 *   configNetworkContainer:  HTMLElement,
 *   configNetwork:  HTMLElement,
 *   shortcutInfo:  HTMLElement,
 *   header:  HTMLElement,
 * }}
 */
AppLaunchSplashBase.$;

/**
 * @polymer
 */
class AppLaunchSplash extends AppLaunchSplashBase {

  static get is() {
    return 'app-launch-splash-element';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<!--
Copyright 2020 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->
<style>
  #content {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 100%;
    height: 100%;
    position: relative;
  }

  #header {
    background: left center no-repeat;
    background-size: 96px;
    display: flex;
    flex-direction: column;
    height: 96px;
    justify-content: center;
    max-width: 100%;
    padding-inline-start: 108px;
  }

  #appName {
    color: #666;
    font-size: 48px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;
  }

  #appUrl {
    color: #666;
    font-size: 18px;
    font-style: italic;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;
  }

  #launchText {
    color: #666;
    font-size: 18px;
    padding-top: 50px;
  }

  #configNetworkContainer {
    height : 30px;
    opacity: 1;
    padding-bottom: 20px;
    transition: 1s opacity;
  }

  #configNetworkContainer.faded {
    opacity: 0;
  }

  #configNetwork {
    font-size: 10px;
    font-weight: bold;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  #configNetwork:hover {
    color: rgb(202, 67, 100)
  }

  #shortcutInfo {
    bottom: 50px;
    color: rgb(102, 102, 102);  /* #666 */
    left: 0;
    position: absolute;
    right: 0;
    text-align: center;
  }
</style>

<div id="content">
  <div id="header">
    <div id="appName">[[appName]]</div>
    <div id="appUrl">[[appUrl]]</div>
  </div>
  <div id="launchText">[[launchText]]</div>
  <div id="configNetworkContainer" class="faded">
    <a id="configNetwork" class="oobe-local-link"
          is="action-link" on-click='onConfigNetwork_'>
      [[i18nDynamic(locale, 'configureNetwork')]]
    </a>
  </div>
  <throbber-notice>
  </throbber-notice>
</div>
<p id="shortcutInfo">
  [[i18nDynamic(locale, 'shortcutInfo')]]
</p>
<!--_html_template_end_-->`;
  }

  static get properties() {
    return {
      appName: {type: String, value: ''},
      appUrl: {type: String, value: ''},
      launchText: {type: String, value: ''},
    };
  }


  get EXTERNAL_API() {
    return ['toggleNetworkConfig',
            'updateApp',
            'updateMessage'];
  }

  ready() {
    super.ready();
    this.initializeLoginScreen('AppLaunchSplashScreen');

    const networkContainer = this.$.configNetworkContainer;
    networkContainer.addEventListener(
        'transitionend', this.onConfigNetworkTransitionend_.bind(this));

    // Ensure the transitionend event gets called after a wait time.
    // The wait time should be inline with the transition duration time
    // defined in css file. The current value in css is 1000ms. To avoid
    // the emulated transitionend firing before real one, a 1050ms
    // delay is used.
    ensureTransitionEndEvent(/** @type {!HTMLElement} */(networkContainer), 1050);
  }

  /** Initial UI State for screen */
  getOobeUIInitialState() {
    return OOBE_UI_STATE.KIOSK;
  }

  onConfigNetwork_(e) {
    chrome.send('configureNetwork');
  }

  onConfigNetworkTransitionend_(e) {
    if (this.$.configNetworkContainer.classList.contains('faded')) {
      this.$.configNetwork.hidden = true;
    }
  }

  /**
   * Event handler that is invoked just before the frame is shown.
   * @param {string} data Screen init payload.
   */
  onBeforeShow(data) {
    this.$.configNetwork.hidden = true;
    this.toggleNetworkConfig(false);
    this.updateApp(data['appInfo']);

    this.$.shortcutInfo.hidden = !data['shortcutEnabled'];
  }

  /**
   * Toggles visibility of the network configuration option.
   * @param {boolean} visible Whether to show the option.
   */
  toggleNetworkConfig(visible) {
    var currVisible =
        !this.$.configNetworkContainer.classList.contains('faded');
    if (currVisible == visible) {
      return;
    }

    if (visible) {
      this.$.configNetwork.hidden = false;
      this.$.configNetworkContainer.classList.remove('faded');
    } else {
      this.$.configNetworkContainer.classList.add('faded');
    }
  }

  /**
   * Updates the app name and icon.
   * @param {Object} app Details of app being launched.
   * @suppress {missingProperties}
   */
  updateApp(app) {
    this.appName = app.name;
    this.appUrl = app.url;
    this.$.header.style.backgroundImage = 'url(' + app.iconURL + ')';
  }

  /**
   * Updates the message for the current launch state.
   * @param {string} message Description for current launch state.
   */
  updateMessage(message) {
    this.launchText = message;
  }
}

customElements.define(AppLaunchSplash.is, AppLaunchSplash);
