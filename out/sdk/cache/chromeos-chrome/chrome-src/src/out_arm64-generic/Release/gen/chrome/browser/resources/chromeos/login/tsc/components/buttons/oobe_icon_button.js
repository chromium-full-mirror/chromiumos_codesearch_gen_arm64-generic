// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 *   @fileoverview
 *   Material design button that shows an icon and displays text.
 *
 *   Example:
 *     <oobe-icon-button icon="close" text-key="offlineLoginCloseBtn">
 *     </oobe-icon-button>
 *    or
 *     <oobe-icon-button icon="close"
 *         label-for-aria="[[i18nDynamic(locale, 'offlineLoginCloseBtn')]]">
 *       <div slot="text">[[i18nDynamic(locale, 'offlineLoginCloseBtn')]]</div>
 *     </oobe-icon-button>
 *
 *   Attributes:
 *     'text-key' - ID of localized string to be used as button text.
 *     1x and 2x icons:
 *       'icon1x' - a name of icon from material design set to show on button.
 *       'icon2x' - a name of icon from material design set to show on button.
 *     'label-for-aria' - accessibility label, override usual behavior
 *                        (string specified by text-key is used as aria-label).
 *                        Elements that use slot="text" must provide
 *                        label-for-aria value.
 *
 */
import '//resources/cr_elements/chromeos/cros_color_overrides.css.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_icons.css.js';
import '//resources/cr_elements/cr_shared_style.css.js';
import '../common_styles/oobe_common_styles.css.js';
import '../oobe_vars/oobe_custom_vars.css.js';
import '../hd_iron_icon.js';
import { OobeBaseButton } from './oobe_base_button.js';
import { getTemplate } from './oobe_icon_button.html.js';
export class OobeIconButton extends OobeBaseButton {
    static get is() {
        return 'oobe-icon-button';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            icon1x: { type: String, observer: 'updateIconVisibility' },
            icon2x: String,
        };
    }
    updateIconVisibility() {
        this.$.icon.hidden = (this.icon1x === undefined || this.icon1x.length == 0);
    }
}
customElements.define(OobeIconButton.is, OobeIconButton);
