// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { highlight } from 'chrome://resources/js/search_highlight_utils.js';
export function highlightText(container, text, ranges) {
    container.textContent = '';
    const node = document.createTextNode(text);
    container.appendChild(node);
    if (ranges) {
        highlight(node, ranges);
    }
}
export function tabHasMediaAlerts(tab) {
    return tab.alertStates.length > 0;
}
