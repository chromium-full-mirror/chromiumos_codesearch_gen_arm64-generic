// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {html} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';

const styleElement = document.createElement('dom-module');
styleElement.setAttribute('assetpath', 'chrome://resources/');
styleElement.appendChild(html`<!--_html_template_start_-->

  <template>
    <style>
      cr-icon-button {
        --cr-icon-button-fill-color: rgb(82, 101, 162);
        margin: 0;
      }

      cr-input {
        display: inline-block;
        margin: 0 15px;
        vertical-align: top;
        width: 200px;
      }

      cr-radio-button {
        display: inline-flex;
      }

      .element-label {
        color: rgb(82, 101, 162);
        display: block;
        font-size: 24px;
        font-weight: normal;
        height: 80px;
        letter-spacing: 0.05em;
        line-height: 80px;
        padding-inline-start: 0;
      }

      .form-label {
        display: block;
      }

      .form-field-section {
        margin-top: 30px;
      }

      .form-field-section:first-of-type {
        margin-top: 0;
      }

      .icon-cell {
        text-align: center;
        width: 45%;
      }

      .devices-table {
        border-collapse: collapse;
        padding: 20px 0;
      }

      .devices-table.custom {
        margin-top: 40px;
      }

      .devices-table .icon-cell {
        width: 45%;
      }

      .devices-table .center-cell-label {
        text-align: center;
      }

      .devices-table .control-cell {
        text-align: center;
      }

      .devices-table td {
        padding: 10px;
      }

      .devices-table td.centered-cell-label {
        text-align: center;
      }

      .bold {
        font-weight: bold;
      }

      .devices-table tr.table-section-header {
        font-weight: bold;
      }

      .devices-table tbody:first-of-type::before {
        height: 0;
      }

      .devices-table tbody:last-of-type::before {
        content: '';
        display: block;
        height: 30px;
      }

      .devices-table tbody tr {
        border-bottom: 1px solid #dadada;
      }

      .devices-table tbody tr:last-of-type {
        border-bottom: 0;
      }

      .add-device-container {
        margin: 15px;
        text-align: end;
      }

      .add-device-container cr-button {
        color: rgb(82, 101, 162);
      }
    </style>
  </template>
<!--_html_template_end_-->`.content);
styleElement.register('device-emulator-shared-styles');
