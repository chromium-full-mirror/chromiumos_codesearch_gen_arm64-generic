// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import '../strings.m.js';
import '../shared_style.css.js';
import '../shared_vars.css.js';
import './site_permissions_edit_permissions_dialog.js';
import { assert } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './site_permissions_site_group.html.js';
import { getFaviconUrl, matchesSubdomains, SUBDOMAIN_SPECIFIER } from '../url_util.js';
export class SitePermissionsSiteGroupElement extends PolymerElement {
    static get is() {
        return 'site-permissions-site-group';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            data: Object,
            delegate: Object,
            extensions: Array,
            listIndex: {
                type: Number,
                value: -1,
            },
            expanded_: {
                type: Boolean,
                value: false,
            },
            isExpandable_: {
                type: Boolean,
                computed: 'computeIsExpandable_(data.sites)',
            },
            showEditSitePermissionsDialog_: {
                type: Boolean,
                value: false,
            },
            siteToEdit_: {
                type: Object,
                value: null,
            },
        };
    }
    getEtldOrSiteFaviconUrl_() {
        return getFaviconUrl(this.getDisplayUrl_());
    }
    getFaviconUrl_(url) {
        return getFaviconUrl(url);
    }
    computeIsExpandable_() {
        return this.data.sites.length > 1;
    }
    getClassForIndex_() {
        return this.listIndex > 0 ? 'hr' : '';
    }
    getDisplayUrl_() {
        return this.data.sites.length === 1 ?
            this.getSiteWithoutSubdomainSpecifier_(this.data.sites[0].site) :
            this.data.etldPlusOne;
    }
    getEtldOrSiteSubText_() {
        // TODO(crbug.com/1253673): Revisit what to show for this eTLD+1 group's
        // subtext. For now, default to showing no text if there is any mix of sites
        // under the group (i.e. user permitted/restricted/specified by extensions).
        const siteSet = this.data.sites[0].siteSet;
        const isSiteSetConsistent = this.data.sites.every(site => site.siteSet === siteSet);
        if (!isSiteSetConsistent) {
            return '';
        }
        if (siteSet === chrome.developerPrivate.SiteSet.USER_PERMITTED) {
            return loadTimeData.getString('permittedSites');
        }
        return siteSet === chrome.developerPrivate.SiteSet.USER_RESTRICTED ?
            loadTimeData.getString('restrictedSites') :
            this.getExtensionCountText_(this.data.numExtensions);
    }
    getSiteWithoutSubdomainSpecifier_(site) {
        return site.replace(SUBDOMAIN_SPECIFIER, '');
    }
    etldOrFirstSiteMatchesSubdomains_() {
        const site = this.data.sites.length === 1 ? this.data.sites[0].site :
            this.data.etldPlusOne;
        return matchesSubdomains(site);
    }
    matchesSubdomains_(site) {
        return matchesSubdomains(site);
    }
    getSiteSubtext_(siteInfo) {
        if (siteInfo.numExtensions > 0) {
            return this.getExtensionCountText_(siteInfo.numExtensions);
        }
        return loadTimeData.getString(siteInfo.siteSet === chrome.developerPrivate.SiteSet.USER_PERMITTED ?
            'permittedSites' :
            'restrictedSites');
    }
    // TODO(crbug.com/1402795): Use PluralStringProxyImpl to retrieve the
    // extension count text. However, this is non-trivial in this component as
    // some of the strings are nestled inside dom-repeats and plural strings are
    // currently retrieved asynchronously, and would need to be set directly on a
    // property when retrieved.
    getExtensionCountText_(numExtensions) {
        return numExtensions === 1 ?
            loadTimeData.getString('sitePermissionsAllSitesOneExtension') :
            loadTimeData.getStringF('sitePermissionsAllSitesExtensionCount', numExtensions);
    }
    onEditSiteClick_() {
        this.siteToEdit_ = this.data.sites[0];
        this.showEditSitePermissionsDialog_ = true;
    }
    onEditSiteInListClick_(e) {
        this.siteToEdit_ = e.model.item;
        this.showEditSitePermissionsDialog_ = true;
    }
    onEditSitePermissionsDialogClose_() {
        this.showEditSitePermissionsDialog_ = false;
        assert(this.siteToEdit_, 'Site To Edit');
        this.siteToEdit_ = null;
    }
    isUserSpecifiedSite_(siteSet) {
        return siteSet === chrome.developerPrivate.SiteSet.USER_PERMITTED ||
            siteSet === chrome.developerPrivate.SiteSet.USER_RESTRICTED;
    }
}
customElements.define(SitePermissionsSiteGroupElement.is, SitePermissionsSiteGroupElement);
