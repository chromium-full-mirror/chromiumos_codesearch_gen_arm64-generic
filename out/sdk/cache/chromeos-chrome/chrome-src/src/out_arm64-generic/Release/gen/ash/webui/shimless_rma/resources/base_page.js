// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import './shimless_rma_shared_css.js';

import {html, PolymerElement} from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';

/**
 * @fileoverview
 * 'base-page' is the main page for the shimless rma process modal dialog.
 */
export class BasePageElement extends PolymerElement {
  static get is() {
    return 'base-page';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<style include="cr-shared-style shimless-rma-shared">
  #pageWrapper {
    align-items: stretch;
    display: flex;
    flex-direction: row;
    height: var(--content-container-height);
    width: 100%;
  }

  :host([equal-panes]) #leftPane {
    width: 50%;
  }

  :host([equal-panes]) #rightPane {
    width: 50%;
  }

  :host([left-pane-only]) #leftPane {
    margin-inline-end: 0;
    width: 100%;
  }

  :host([left-pane-only]) #rightPane {
    width: 0;
  }

  #leftPane {
    box-sizing: border-box;
    margin-inline-end: 80px;
    margin-top: 112px;
    width: 40%;
  }

  #rightPane {
    box-sizing: border-box;
    width: 60%;
  }
</style>
<div id="pageWrapper">
  <div id="leftPane">
    <slot name="left-pane"></slot>
  </div>
  <div id="rightPane">
    <slot name="right-pane"></slot>
  </div>
</div><!--_html_template_end_-->`;
  }

  /** @override */
  constructor() {
    super();
  }

  /** @override */
  ready() {
    super.ready();
  }
}

customElements.define(BasePageElement.is, BasePageElement);
