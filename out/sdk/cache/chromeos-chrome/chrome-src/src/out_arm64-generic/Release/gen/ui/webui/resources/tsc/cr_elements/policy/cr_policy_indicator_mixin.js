// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Mixin for policy controlled indicators.
 * TODO(michaelpg): Since extensions can also control settings and be indicated,
 * rework the "policy" naming scheme throughout this directory.
 */
import { assertNotReached } from '//resources/js/assert.js';
import { dedupingMixin } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
/**
 * Possible policy indicators that can be shown in settings.
 */
export var CrPolicyIndicatorType;
(function (CrPolicyIndicatorType) {
    CrPolicyIndicatorType["DEVICE_POLICY"] = "devicePolicy";
    CrPolicyIndicatorType["EXTENSION"] = "extension";
    CrPolicyIndicatorType["NONE"] = "none";
    CrPolicyIndicatorType["OWNER"] = "owner";
    CrPolicyIndicatorType["PRIMARY_USER"] = "primary_user";
    CrPolicyIndicatorType["RECOMMENDED"] = "recommended";
    CrPolicyIndicatorType["USER_POLICY"] = "userPolicy";
    CrPolicyIndicatorType["PARENT"] = "parent";
    CrPolicyIndicatorType["CHILD_RESTRICTION"] = "childRestriction";
})(CrPolicyIndicatorType || (CrPolicyIndicatorType = {}));
export const CrPolicyIndicatorMixin = dedupingMixin((superClass) => {
    class CrPolicyIndicatorMixin extends superClass {
        // Properties exposed to all policy indicators.
        static get properties() {
            return {
                /**
                 * Which indicator type to show (or NONE).
                 */
                indicatorType: {
                    type: String,
                    value: CrPolicyIndicatorType.NONE,
                },
                /**
                 * The name associated with the policy source. See
                 * chrome.settingsPrivate.PrefObject.controlledByName.
                 */
                indicatorSourceName: {
                    type: String,
                    value: '',
                },
                // Computed properties based on indicatorType and
                // indicatorSourceName. Override to provide different values.
                indicatorVisible: {
                    type: Boolean,
                    computed: 'getIndicatorVisible_(indicatorType)',
                },
                indicatorIcon: {
                    type: String,
                    computed: 'getIndicatorIcon_(indicatorType)',
                },
            };
        }
        /**
         * @return True if the indicator should be shown.
         */
        getIndicatorVisible_(type) {
            return type !== CrPolicyIndicatorType.NONE;
        }
        /**
         * @return {string} The iron-icon icon name.
         */
        getIndicatorIcon_(type) {
            switch (type) {
                case CrPolicyIndicatorType.EXTENSION:
                    return 'cr:extension';
                case CrPolicyIndicatorType.NONE:
                    return '';
                case CrPolicyIndicatorType.PRIMARY_USER:
                    return 'cr:group';
                case CrPolicyIndicatorType.OWNER:
                    return 'cr:person';
                case CrPolicyIndicatorType.USER_POLICY:
                case CrPolicyIndicatorType.DEVICE_POLICY:
                case CrPolicyIndicatorType.RECOMMENDED:
                    return 'cr20:domain';
                case CrPolicyIndicatorType.PARENT:
                case CrPolicyIndicatorType.CHILD_RESTRICTION:
                    return 'cr20:kite';
                default:
                    assertNotReached();
            }
        }
        /**
         * @param name The name associated with the indicator. See
         *     chrome.settingsPrivate.PrefObject.controlledByName
         * @param matches For RECOMMENDED only, whether the indicator
         *     value matches the recommended value.
         * @return The tooltip text for |type|.
         */
        getIndicatorTooltip(type, name, matches) {
            if (!window.CrPolicyStrings) {
                return '';
            } // Tooltips may not be defined, e.g. in OOBE.
            const CrPolicyStrings = window.CrPolicyStrings;
            switch (type) {
                case CrPolicyIndicatorType.EXTENSION:
                    return name.length > 0 ?
                        CrPolicyStrings.controlledSettingExtension.replace('$1', name) :
                        CrPolicyStrings.controlledSettingExtensionWithoutName;
                // 
                case CrPolicyIndicatorType.PRIMARY_USER:
                    return CrPolicyStrings.controlledSettingShared.replace('$1', name);
                case CrPolicyIndicatorType.OWNER:
                    return name.length > 0 ?
                        CrPolicyStrings.controlledSettingWithOwner.replace('$1', name) :
                        CrPolicyStrings.controlledSettingNoOwner;
                // 
                case CrPolicyIndicatorType.USER_POLICY:
                case CrPolicyIndicatorType.DEVICE_POLICY:
                    return CrPolicyStrings.controlledSettingPolicy;
                case CrPolicyIndicatorType.RECOMMENDED:
                    return matches ?
                        CrPolicyStrings.controlledSettingRecommendedMatches :
                        CrPolicyStrings.controlledSettingRecommendedDiffers;
                case CrPolicyIndicatorType.PARENT:
                    return CrPolicyStrings.controlledSettingParent;
                case CrPolicyIndicatorType.CHILD_RESTRICTION:
                    return CrPolicyStrings.controlledSettingChildRestriction;
            }
            return '';
        }
    }
    return CrPolicyIndicatorMixin;
});
