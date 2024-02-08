// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/ash/common/cr_elements/icons.html.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '//resources/polymer/v3_0/paper-spinner/paper-spinner-lite.js';
import './common_styles/oobe_common_styles.css.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { OobeI18nBehavior } from './behaviors/oobe_i18n_behavior.js';
import { getTemplate } from './progress_list_item.html.js';
const ProgressListItemBase = mixinBehaviors([OobeI18nBehavior], PolymerElement);
export class ProgressListItem extends ProgressListItemBase {
    static get is() {
        return 'progress-list-item';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /* The ID of the localized string to be used as button text.
             */
            textKey: {
                type: String,
            },
            /* The ID of the localized string to be displayed when item is in
             * the 'active' state. If not specified, the textKey is used instead.
             */
            activeKey: {
                type: String,
                value: '',
            },
            /* The ID of the localized string to be displayed when item is in the
             * 'completed' state. If not specified, the textKey is used instead.
             */
            completedKey: {
                type: String,
                value: '',
            },
            /* Indicates if item is in "active" state. Has higher priority than
             * "completed" below.
             */
            active: {
                type: Boolean,
                value: false,
            },
            /* Indicates if item is in "completed" state. Has lower priority than
             * "active" state above.
             */
            completed: {
                type: Boolean,
                value: false,
            },
        };
    }
    hidePending(active, completed) {
        return active || completed;
    }
    hideCompleted(active, completed) {
        return active || !completed;
    }
    fallbackText(locale, key, fallbackKey) {
        if (key === null || key === '') {
            return this.i18nDynamic(locale, fallbackKey);
        }
        return this.i18nDynamic(locale, key);
    }
}
customElements.define(ProgressListItem.is, ProgressListItem);
