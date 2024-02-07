// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/polymer/v3_0/paper-spinner/paper-spinner-lite.js';
import '//resources/polymer/v3_0/paper-styles/color.js';
import '//resources/ash/common/cr_elements/cros_color_overrides.css.js';
import './common_styles/oobe_common_styles.css.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { OobeI18nBehavior } from './behaviors/oobe_i18n_behavior.js';
import { getTemplate } from './throbber_notice.html.js';
const ThrobberNoticeBase = mixinBehaviors([OobeI18nBehavior], PolymerElement);
export class ThrobberNotice extends ThrobberNoticeBase {
    static get is() {
        return 'throbber-notice';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return { textKey: String };
    }
    /**
     * Returns the a11y message to be shown on this throbber,
     * if the textkey is set.
     */
    getAriaLabel(locale) {
        return (!this.textKey) ? '' : this.i18nDynamic(locale, this.textKey);
    }
}
customElements.define(ThrobberNotice.is, ThrobberNotice);
