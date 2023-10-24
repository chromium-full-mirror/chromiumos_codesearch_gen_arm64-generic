// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class OmniboxElement extends HTMLElement{constructor(templateId){super();this.attachShadow({mode:"open"});const template=OmniboxElement.getTemplate(templateId);this.shadowRoot.appendChild(template)}$(query){return this.shadowRoot.querySelector(query)}$all(query){return this.shadowRoot.querySelectorAll(query)}static getTemplate(templateId){return document.querySelector(`#${templateId}`).content.cloneNode(true)}}