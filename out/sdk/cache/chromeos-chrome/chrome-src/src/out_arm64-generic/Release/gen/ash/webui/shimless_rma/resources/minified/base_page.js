// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import"./shimless_rma_shared.css.js";import{PolymerElement}from"chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js";import{getTemplate}from"./base_page.html.js";export class BasePageElement extends PolymerElement{static get is(){return"base-page"}static get template(){return getTemplate()}}customElements.define(BasePageElement.is,BasePageElement);