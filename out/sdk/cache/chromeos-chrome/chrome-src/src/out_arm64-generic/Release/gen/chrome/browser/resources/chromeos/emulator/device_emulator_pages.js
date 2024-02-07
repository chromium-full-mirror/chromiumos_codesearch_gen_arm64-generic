// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import 'chrome://resources/ash/common/cr_elements/cr_drawer/cr_drawer.js';
import 'chrome://resources/ash/common/cr_elements/cr_toolbar/cr_toolbar.js';
import 'chrome://resources/polymer/v3_0/iron-flex-layout/iron-flex-layout-classes.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import 'chrome://resources/polymer/v3_0/iron-selector/iron-selector.js';
import 'chrome://resources/polymer/v3_0/iron-pages/iron-pages.js';
import 'chrome://resources/polymer/v3_0/paper-styles/shadow.js';
import './audio_settings.js';
import './battery_settings.js';
import './bluetooth_settings.js';
import './icons.js';
import './input_device_settings.js';
import './shared_styles.js';

import {html, Polymer} from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';

Polymer({
  is: 'device-emulator-pages',

  _template: html`<!--_html_template_start_-->
    <style include="device-emulator-shared-styles iron-flex iron-flex-alignment
        iron-positioning">
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      iron-pages {
        max-width: 70%;
        min-width: 70%;
      }

      iron-pages > * {
        background-color: white;
        box-shadow: var(--cr-card-shadow);
        display: block;
        margin: 20px;
        padding: 0 20px 20px 20px;
        position: relative !important;
      }

      cr-toolbar {
        --cr-focus-outline-color: white;
        --iron-icon-fill-color: white;
        background-color: var(--google-blue-700);
        color: white;
        min-height: 56px;
        z-index: 2;
      }

      #container {
        align-items: center;
        background-color: lightgray;
        display: flex;
        flex: 1;
        flex-direction: column;
        overflow: overlay;
        position: relative;
      }

      iron-selector a {
        cursor: pointer;
        padding: 16px;
      }

      iron-selector a.iron-selected {
        font-weight: bold;
      }
    </style>

    <cr-toolbar page-name="Device Emulator"
        clear-label="clear"
        autofocus
        search-prompt="Search not working..."
        on-cr-toolbar-menu-click="onMenuButtonClick_"
        menu-label="Device Emulator"
        role="banner"
        show-menu>
    </cr-toolbar>
    <cr-drawer id="drawer" heading="Device Emulator">
      <div slot="body">
        <iron-selector selectable="a" class="layout vertical"
            selected="{{selectedPage}}">
          <a>
            <iron-icon icon="device-emulator:volume-up" item-icon></iron-icon>
            Audio
          </a>
          <a>
            <iron-icon icon="device-emulator:battery-charging-full" item-icon>
            </iron-icon>
            Battery/Power
          </a>
          <a>
            <iron-icon icon="device-emulator:bluetooth" item-icon></iron-icon>
            Bluetooth
          </a>
          <a>
            <iron-icon icon="device-emulator:mouse" item-icon></iron-icon>
            Input Devices
          </a>
        </iron-selector>
      </div>
    </cr-drawer>
    <div id="container" class="no-outline">
      <iron-pages selected="[[selectedPage]]">
        <audio-settings id="audioSettings"></audio-settings>
        <battery-settings id="batterySettings"></battery-settings>
        <bluetooth-settings id="bluetoothSettings"></bluetooth-settings>
        <input-device-settings id="inputDeviceSettings"></input-device-settings>
      </iron-pages>
    </div>
<!--_html_template_end_-->`,

  properties: {
    selectedPage: {
      type: Number,
      value: 0,
      observer: 'onSelectedPageChange_',
    },
  },

  /** @override */
  ready() {
    chrome.send('initializeDeviceEmulator');
  },

  /** @private */
  onMenuButtonClick_() {
    this.$.drawer.toggle();
  },

  /** @private */
  onSelectedPageChange_() {
    this.$.drawer.close();
  },
});
