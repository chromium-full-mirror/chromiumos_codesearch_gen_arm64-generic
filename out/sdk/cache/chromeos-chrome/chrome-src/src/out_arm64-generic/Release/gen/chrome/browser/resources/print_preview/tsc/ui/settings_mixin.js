// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { dedupingMixin } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getInstance } from '../data/model.js';
export const SettingsMixin = dedupingMixin((superClass) => {
    class SettingsMixin extends superClass {
        static get properties() {
            return {
                settings: Object,
            };
        }
        getSetting(settingName) {
            return getInstance().getSetting(settingName);
        }
        getSettingValue(settingName) {
            return getInstance().getSettingValue(settingName);
        }
        setSetting(settingName, value, noSticky) {
            getInstance().setSetting(settingName, value, noSticky);
        }
        setSettingSplice(settingName, start, end, newValue, noSticky) {
            getInstance().setSettingSplice(settingName, start, end, newValue, noSticky);
        }
        setSettingValid(settingName, valid) {
            getInstance().setSettingValid(settingName, valid);
        }
    }
    return SettingsMixin;
});
