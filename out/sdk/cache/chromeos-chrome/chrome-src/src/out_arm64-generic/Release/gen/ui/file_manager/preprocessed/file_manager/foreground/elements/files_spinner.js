// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import {html} from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';

/** @type {!HTMLTemplateElement} */
const htmlTemplate = html`<!--_html_template_start_-->
<!--
Copyright 2020 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->

<style>
  :host([hidden]) {
    display: none !important;
  }

  :host {
    display: flex;
    height: 24px;
    margin: 12px;
    width: 24px;
  }

  svg {
    animation: rotate 1.67s linear infinite;
    transform-origin: 50% 50%;
  }

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }

  circle {
    animation: spin 1.34s ease infinite;
    stroke: var(--cros-sys-primary);
    stroke-dasharray: 65;
    stroke-linecap: round;
    stroke-width: 3px;
    transform-origin: 50% 50%;
  }

  @keyframes spin {
    0% {
      stroke-dashoffset: 64;
    }

    58% {
      stroke-dashoffset: 19;
      transform: rotate(50deg);
    }

    to {
      stroke-dashoffset: 64;
      transform: rotate(360deg);
    }
  }
</style>

<svg width='24' height='24' viewBox='0 0 24 24'>
  <circle cx='12' cy='12' r='10' fill='none'></circle>
</svg>
<!--_html_template_end_-->`;

/**
 * FilesSpinner.
 */
export class FilesSpinner extends HTMLElement {
  constructor() {
    super();

    const fragment = htmlTemplate.content.cloneNode(true);
    this.attachShadow({mode: 'open'}).appendChild(fragment);
  }

  /**
   * DOM connected: set aria attributes.
   */
  connectedCallback() {
    if (!this.shadowRoot) {
      return;
    }
    const host = /** @type {!HTMLElement} */ (this.shadowRoot.host);

    host.setAttribute('role', 'progressbar');
    host.setAttribute('aria-disabled', 'false');
    host.setAttribute('aria-valuemin', '0');
    host.setAttribute('aria-valuemax', '1');
  }
}

customElements.define('files-spinner', FilesSpinner);

//# sourceURL=//ui/file_manager/file_manager/foreground/elements/files_spinner.js
