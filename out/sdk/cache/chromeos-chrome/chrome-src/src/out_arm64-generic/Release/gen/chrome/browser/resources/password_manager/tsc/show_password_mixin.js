// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { dedupingMixin } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
/**
 * This mixin bundles functionality required to show a password to the user.
 */
export const ShowPasswordMixin = dedupingMixin((superClass) => {
    class ShowPasswordMixin extends superClass {
        static get properties() {
            return {
                isPasswordVisible: {
                    type: Boolean,
                    value: false,
                },
            };
        }
        getPasswordInputType() {
            return this.isPasswordVisible ? 'text' : 'password';
        }
        getShowHideButtonLabel() {
            return this.isPasswordVisible ?
                loadTimeData.getString('hidePassword') :
                loadTimeData.getString('showPassword');
        }
        getShowHideButtonIconClass() {
            return this.isPasswordVisible ? 'icon-visibility-off' :
                'icon-visibility';
        }
        /**
         * Handler for showing/hiding the passwords. This method should be
         * attached to on-click event of show/hide password button.
         */
        onShowHidePasswordButtonClick() {
            this.isPasswordVisible = !this.isPasswordVisible;
        }
    }
    return ShowPasswordMixin;
});
