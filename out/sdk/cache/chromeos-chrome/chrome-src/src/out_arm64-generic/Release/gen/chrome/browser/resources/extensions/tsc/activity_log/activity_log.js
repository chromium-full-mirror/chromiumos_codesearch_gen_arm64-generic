// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_icons.css.js';
import 'chrome://resources/cr_elements/cr_tabs/cr_tabs.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/polymer/v3_0/iron-pages/iron-pages.js';
import './activity_log_stream.js';
import './activity_log_history.js';
import '../strings.m.js';
import '../shared_style.css.js';
import '../shared_vars.css.js';
import { focusWithoutInk } from 'chrome://resources/js/focus_without_ink.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { afterNextRender, PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { navigation, Page } from '../navigation_helper.js';
import { getTemplate } from './activity_log.html.js';
const ExtensionsActivityLogElementBase = I18nMixin(PolymerElement);
export class ExtensionsActivityLogElement extends ExtensionsActivityLogElementBase {
    static get is() {
        return 'extensions-activity-log';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * The underlying ExtensionInfo for the details being displayed.
             */
            extensionInfo: Object,
            delegate: Object,
            selectedSubpage_: {
                type: Number,
                value: -1 /* ActivityLogSubpage.NONE */,
                observer: 'onSelectedSubpageChanged_',
            },
            tabNames_: {
                type: Array,
                value: () => ([
                    loadTimeData.getString('activityLogHistoryTabHeading'),
                    loadTimeData.getString('activityLogStreamTabHeading'),
                ]),
            },
        };
    }
    ready() {
        super.ready();
        this.addEventListener('view-enter-start', this.onViewEnterStart_);
        this.addEventListener('view-exit-finish', this.onViewExitFinish_);
    }
    /**
     * Focuses the back button when page is loaded and set the activie view to
     * be HISTORY when we navigate to the page.
     */
    onViewEnterStart_() {
        this.selectedSubpage_ = 0 /* ActivityLogSubpage.HISTORY */;
        afterNextRender(this, () => focusWithoutInk(this.$.closeButton));
    }
    /**
     * Set |selectedSubpage_| to NONE to remove the active view from the DOM.
     */
    onViewExitFinish_() {
        this.selectedSubpage_ = -1 /* ActivityLogSubpage.NONE */;
        // clear the stream if the user is exiting the activity log page.
        const activityLogStream = this.shadowRoot.querySelector('activity-log-stream');
        if (activityLogStream) {
            activityLogStream.clearStream();
        }
    }
    getActivityLogHeading_() {
        const headingName = this.extensionInfo.isPlaceholder ?
            this.i18n('missingOrUninstalledExtension') :
            this.extensionInfo.name;
        return this.i18n('activityLogPageHeading', headingName);
    }
    isHistoryTabSelected_() {
        return this.selectedSubpage_ === 0 /* ActivityLogSubpage.HISTORY */;
    }
    isStreamTabSelected_() {
        return this.selectedSubpage_ === 1 /* ActivityLogSubpage.STREAM */;
    }
    onSelectedSubpageChanged_(newTab, oldTab) {
        const activityLogStream = this.shadowRoot.querySelector('activity-log-stream');
        if (activityLogStream) {
            if (newTab === 1 /* ActivityLogSubpage.STREAM */) {
                // Start the stream if the user is switching to the real-time tab.
                // This will not handle the first tab switch to the real-time tab as
                // the stream has not been attached to the DOM yet, and is handled
                // instead by the stream's |connectedCallback| method.
                activityLogStream.startStream();
            }
            else if (oldTab === 1 /* ActivityLogSubpage.STREAM */) {
                // Pause the stream if the user is navigating away from the real-time
                // tab.
                activityLogStream.pauseStream();
            }
        }
    }
    onCloseButtonClick_() {
        if (this.extensionInfo.isPlaceholder) {
            navigation.navigateTo({ page: Page.LIST });
        }
        else {
            navigation.navigateTo({ page: Page.DETAILS, extensionId: this.extensionInfo.id });
        }
    }
}
customElements.define(ExtensionsActivityLogElement.is, ExtensionsActivityLogElement);
