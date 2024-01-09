// Copyright 2011 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// 
import 'chrome://resources/cr_elements/cr_tab_box/cr_tab_box.js';
import './about.js';
import './data.js';
import './sync_node_browser.js';
import './user_events.js';
import './traffic_log.js';
import './search.js';
import './strings.m.js';
import './invalidations.js';
import { assert } from 'chrome://resources/js/assert.js';
// 
import { sendWithPromise } from 'chrome://resources/js/cr.js';
import { $ } from 'chrome://resources/js/util.js';
// 
// Allow platform specific CSS rules.
//
// TODO(akalin): BMM and options page does something similar, too.
// Move this to util.js.
// 
const tabBox = document.querySelector('cr-tab-box');
assert(tabBox);
tabBox.hidden = false;
// 
// Updates the os-link-container so that it lets the user open
// os://sync-internals window if Lacros is enabled.
function updateOsLink() {
    sendWithPromise('isLacrosEnabled').then(function (isLacrosEnabled) {
        const osLinkContainer = $('os-link-container');
        if (osLinkContainer) {
            osLinkContainer.hidden = !isLacrosEnabled;
        }
    });
    const osLinkHref = $('os-link-href');
    if (osLinkHref) {
        const handleClick = function (event) {
            event.preventDefault();
            // Note: make sure this name matches the C++ constant
            // `kOpenLacrosSyncInternals`.
            chrome.send('openLacrosSyncInternals');
        };
        osLinkHref.onclick = handleClick;
        osLinkHref.onauxclick = function (event) {
            // Make middle-clicks have the same effects as Ctrl+clicks
            if (event.button === 1) {
                handleClick(event);
            }
        };
    }
}
updateOsLink();
// 
