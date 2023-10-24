// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import{I18nMixin}from"chrome://resources/cr_elements/i18n_mixin.js";import{dedupingMixin}from"chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js";export const SupportToolPageMixin=dedupingMixin((superClass=>{const superClassBase=I18nMixin(superClass);class SupportToolPageMixin extends superClassBase{$$(query){return this.shadowRoot.querySelector(query)}ensureFocusOnPageHeader(){this.$$("h1").focus()}}return SupportToolPageMixin}));