// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import"chrome://resources/cr_elements/cr_shared_vars.css.js";import{PolymerElement}from"chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js";import{getTemplate}from"./theme_icon.html.js";export class ThemeIconElement extends PolymerElement{static get is(){return"cr-theme-icon"}static get template(){return getTemplate()}}customElements.define(ThemeIconElement.is,ThemeIconElement);