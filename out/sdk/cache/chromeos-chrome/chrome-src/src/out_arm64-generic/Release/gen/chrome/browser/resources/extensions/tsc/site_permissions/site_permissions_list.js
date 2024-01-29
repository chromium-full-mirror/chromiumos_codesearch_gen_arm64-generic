// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import '../strings.m.js';
import '../shared_style.css.js';
import '../shared_vars.css.js';
import './site_permissions_edit_permissions_dialog.js';
import './site_permissions_edit_url_dialog.js';
import { assert } from 'chrome://resources/js/assert.js';
import { focusWithoutInk } from 'chrome://resources/js/focus_without_ink.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './site_permissions_list.html.js';
import { getFaviconUrl } from '../url_util.js';
export class ExtensionsSitePermissionsListElement extends PolymerElement {
    constructor() {
        super(...arguments);
        // The element to return focus to once the site input dialog closes. If
        // specified, this is the 3 dots menu for the site just edited, otherwise it's
        // the add site button.
        this.siteToEditAnchorElement_ = null;
    }
    static get is() {
        return 'site-permissions-list';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            delegate: Object,
            extensions: Array,
            header: String,
            siteSet: String,
            sites: Array,
            showEditSiteUrlDialog_: {
                type: Boolean,
                value: false,
            },
            showEditSitePermissionsDialog_: {
                type: Boolean,
                value: false,
            },
            /**
             * The site currently being edited if the user has opened the action menu
             * for a given site.
             */
            siteToEdit_: {
                type: String,
                value: null,
            },
        };
    }
    hasSites_() {
        return !!this.sites.length;
    }
    getFaviconUrl_(url) {
        return getFaviconUrl(url);
    }
    focusOnAnchor_() {
        // Return focus to the three dots menu once a site has been edited.
        // TODO(crbug.com/1298326): If the edited site is the only site in the
        // list, focus is not on the three dots menu.
        assert(this.siteToEditAnchorElement_, 'Site Anchor');
        focusWithoutInk(this.siteToEditAnchorElement_);
        this.siteToEditAnchorElement_ = null;
    }
    onAddSiteClick_() {
        assert(!this.showEditSitePermissionsDialog_);
        this.siteToEdit_ = null;
        this.showEditSiteUrlDialog_ = true;
    }
    onEditSiteUrlDialogClose_() {
        this.showEditSiteUrlDialog_ = false;
        if (this.siteToEdit_ !== null) {
            this.focusOnAnchor_();
        }
        this.siteToEdit_ = null;
    }
    onEditSitePermissionsDialogClose_() {
        this.showEditSitePermissionsDialog_ = false;
        assert(this.siteToEdit_, 'Site To Edit');
        this.focusOnAnchor_();
        this.siteToEdit_ = null;
    }
    onDotsClick_(e) {
        this.siteToEdit_ = e.model.item;
        assert(!this.showEditSitePermissionsDialog_);
        this.$.siteActionMenu.showAt(e.target);
        this.siteToEditAnchorElement_ = e.target;
    }
    onEditSitePermissionsClick_() {
        this.closeActionMenu_();
        assert(this.siteToEdit_ !== null);
        this.showEditSitePermissionsDialog_ = true;
    }
    onEditSiteUrlClick_() {
        this.closeActionMenu_();
        assert(this.siteToEdit_ !== null);
        this.showEditSiteUrlDialog_ = true;
    }
    onRemoveSiteClick_() {
        assert(this.siteToEdit_, 'Site To Edit');
        this.delegate.removeUserSpecifiedSites(this.siteSet, [this.siteToEdit_])
            .then(() => {
            this.closeActionMenu_();
            this.siteToEdit_ = null;
        });
    }
    closeActionMenu_() {
        const menu = this.$.siteActionMenu;
        assert(menu.open);
        menu.close();
    }
}
customElements.define(ExtensionsSitePermissionsListElement.is, ExtensionsSitePermissionsListElement);
