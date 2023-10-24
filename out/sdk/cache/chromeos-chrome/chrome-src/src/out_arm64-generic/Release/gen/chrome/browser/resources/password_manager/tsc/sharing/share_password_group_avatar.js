// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_auto_img/cr_auto_img.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './share_password_group_avatar.html.js';
export class SharePasswordGroupAvatarElement extends PolymerElement {
    static get is() {
        return 'share-password-group-avatar';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            members: Array,
        };
    }
    isMembersCountLessThan_(count) {
        return this.members.length < count;
    }
    getProfileImageUrl_(index) {
        if (index < this.members.length) {
            return this.members[index].profileImageUrl;
        }
        return '';
    }
    getMoreCount_() {
        return this.members.length - 3;
    }
}
customElements.define(SharePasswordGroupAvatarElement.is, SharePasswordGroupAvatarElement);
