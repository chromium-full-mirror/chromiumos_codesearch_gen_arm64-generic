// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import '//resources/ash/common/cr_elements/cr_toggle/cr_toggle.js';
import '../components/common_styles/oobe_common_styles.css.js';
import './assistant_common_styles.css.js';

import {html, PolymerElement} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {AssistantNativeIconType} from './utils.js';


/** @polymer */
class SettingZippy extends PolymerElement {
  static get is() {
    return 'setting-zippy';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<!--
Copyright 2018 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->

<style include="oobe-common-styles assistant-common-styles">
  #container {
    padding-top: 8px;
  }

  .sub-title {
    color: var(--cros-text-color-primary);
  }

  .content {
    padding-top: 4px;
  }

  #description {
    padding: 4px 0 16px 0;
  }

  .icon {
    color: var(--cros-icon-color-secondary);
    display: flex;
    min-width: 36px;
  }

  .icon-view {
    display: block;
    height: 20px;
    width: 20px;
  }

  .line {
    background-color: var(--cros-button-icon-color-primary);
  }

  .toggle {
    padding-inline-end: 20px;
  }

  .indent {
    padding: 0 0 6px 36px;
  }

  #container[cardStyle] {
    border-radius: 8px;
    box-shadow: var(--cr-elevation-1);
    margin: 10px 10px 10px 0;
    padding: 20px 0 20px 16px;
  }

  #container[cardStyle] .sub-title {
    font-family: var(--oobe-header-font-family);
    font-size: 15px;
    font-weight: 500;
    line-height: 22px;
  }

  #container[cardStyle] #description {
    line-height: 20px;
    padding: 0;
  }

  #container[cardStyle] .icon svg {
    margin: auto;
  }

  #container[cardStyle] .icon {
    background: var(--cros-highlight-color);
    border-radius: 50%;
    color: var(--cros-icon-color-blue);
    height: 40px;
    margin-inline-end: 16px;
    margin-top: 4px;
    min-width: 40px;
  }

  #container[cardStyle] .icon-view {
    margin: 10px;
  }
</style>
<div id="container" class="flex layout horizontal"
    cardStyle$="[[cardStyle]]">
  <div class="icon">
    <template is="dom-if"
        if="[[shouldUseWebviewIcon_(iconSrc, nativeIconType)]]">
      <webview class="icon-view" src="[[iconSrc]]" tabindex="-1">
      </webview>
    </template>
    <template is="dom-if" if="[[shouldUseWAANativeIcon_(nativeIconType)]]">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 9V7h3.198A5.996 5.996 0 0 0 10 4c-3.315 0-6 2.685-6 6s2.685 6 6 6a6 6 0 0 0 5.917-4.999h2.02A8.007 8.007 0 0 1 9.993 18C5.576 18 2 14.416 2 10s3.576-8 7.992-8a7.992 7.992 0 0 1 6.009 2.712L16 3h2v6h-6Zm-1.5-3v4l2.5 2.5-1.5 1.5-3-3V6h2Z"fill="currentColor"></path>
      </svg>
    </template>
    <template is="dom-if" if="[[shouldUseDANativeIcon_(nativeIconType)]]">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18 15h1a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2h1V4a1 1 0 0 1 1-1h14a.997.997 0 0 1 1 1v11Zm-2-3V5H4v7h12Zm-8 2v1h4v-1H8Z" fill="currentColor"></path>
      </svg>
    </template>
    <template is="dom-if" if="[[shouldUseInfoNativeIcon_(nativeIconType)]]">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 14h2v-4H9v4Zm1-12c-4.416 0-8 3.584-8 8s3.584 8 8 8 8-3.584 8-8-3.584-8-8-8Zm0 14c-3.308 0-6-2.693-6-6 0-3.308 2.692-6 6-6 3.307 0 6 2.692 6 6 0 3.307-2.693 6-6 6ZM9 8h2V6H9v2Z" fill="currentColor"></path>
      </svg>
    </template>
  </div>
  <div>
    <div class="sub-title">
      <slot name="title"></slot>
    </div>
    <div id="description" class="content">
      <slot name="content"></slot>
    </div>
  </div>
  <div class="toggle">
    <slot name="toggle"></slot>
  </div>
</div>
<div class="line" hidden="[[hideLine]]"></div>
<!--_html_template_end_-->`;
  }

  static get properties() {
    return {
      iconSrc: {
        type: String,
        value: null,
      },

      hideLine: {
        type: Boolean,
        value: false,
      },

      cardStyle: {
        type: Boolean,
        value: false,
      },

      nativeIconType: {
        type: Number,
        value: AssistantNativeIconType.NONE,
      },

      nativeIconLabel: {
        type: String,
        value: null,
      },
    };
  }

  /**
   * Wrap the icon as a image into a html snippet.
   *
   * @param {string} iconUri the icon uri to be wrapped.
   * @param {string} imageLabel the aria label of the image.
   * @param {string} background the background color of the icon, default to
   * white if unspecified.
   * @return {string} wrapped html snippet.
   *
   * @private
   */
  getWrappedIcon(iconUri, imageLabel, background) {
    return String.raw`
    <html>
      <style>
        body {
          margin: 0;
        }
        #icon {
          background: ` +
        (background || 'white') + `;
          width: 20px;
          height: 20px;
          user-select: none;
        }
      </style>
    <body><img id="icon" aria-label="` +
        imageLabel + `" src="` + iconUri + '"></body></html>';
  }

  shouldUseWebviewIcon_(iconSrc, nativeIconType) {
    return iconSrc !== null && nativeIconType === AssistantNativeIconType.NONE;
  }

  shouldUseWAANativeIcon_(nativeIconType) {
    return nativeIconType === AssistantNativeIconType.WAA;
  }

  shouldUseDANativeIcon_(nativeIconType) {
    return nativeIconType === AssistantNativeIconType.DA;
  }

  shouldUseInfoNativeIcon_(nativeIconType) {
    return nativeIconType === AssistantNativeIconType.INFO;
  }
}

customElements.define(SettingZippy.is, SettingZippy);
