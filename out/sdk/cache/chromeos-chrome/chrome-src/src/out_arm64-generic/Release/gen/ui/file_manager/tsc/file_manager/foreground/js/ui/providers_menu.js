// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { crInjectTypeAndInit } from '../../../common/js/cr_ui.js';
import { iconSetToCSSBackgroundImageValue } from '../../../common/js/util.js';
import { ProvidersModel } from '../providers_model.js';
import { FilesMenuItem } from './files_menu.js';
import { Menu } from './menu.js';
/** Fills out the menu for mounting or installing new providers. */
export class ProvidersMenu {
    constructor(model_, menu_) {
        this.model_ = model_;
        this.menu_ = menu_;
        this.menu_.addEventListener('update', this.onUpdate_.bind(this));
    }
    clearProviders_() {
        while (this.menu_.lastChild) {
            this.menu_.removeChild(this.menu_.lastChild);
        }
    }
    addMenuItem_() {
        const menuItem = this.menu_.addMenuItem({});
        crInjectTypeAndInit(menuItem, FilesMenuItem);
        return menuItem;
    }
    /**
     * @param providerId ID of the provider.
     * @param iconSet Set of icons for the provider.
     * @param name Already localized name of the provider.
     */
    addProvider_(providerId, iconSet, name) {
        const item = this.addMenuItem_();
        item.label = name;
        const iconImage = iconSetToCSSBackgroundImageValue(iconSet);
        if (iconImage === 'none' && providerId === '@smb') {
            item.iconStartFileType = 'smb';
        }
        else {
            item.iconStartImage = iconImage;
        }
        item.addEventListener('activate', this.onItemActivate_.bind(this, providerId));
    }
    onUpdate_(_event) {
        this.model_.getMountableProviders().then(providers => {
            this.clearProviders_();
            providers.forEach(provider => {
                this.addProvider_(provider.providerId, provider.iconSet, provider.name);
            });
        });
    }
    onItemActivate_(providerId, _event) {
        this.model_.requestMount(providerId);
    }
    /**
     *  Sends an update event to the sub menu to trigger a reload of its content.
     */
    updateSubMenu() {
        this.menu_.dispatchEvent(new Event('update'));
    }
}
