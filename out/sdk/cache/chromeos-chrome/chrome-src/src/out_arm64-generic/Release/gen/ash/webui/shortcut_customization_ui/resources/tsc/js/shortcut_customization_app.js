// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './accelerator_edit_dialog.js';
import './bottom_nav_content.js';
import './shortcuts_page.js';
import '../strings.m.js';
import './search/search_box.js';
import '../css/shortcut_customization_shared.css.js';
import 'chrome://resources/ash/common/navigation_view_panel.js';
import 'chrome://resources/ash/common/page_toolbar.js';
import 'chrome://resources/mojo/mojo/public/js/mojo_bindings_lite.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import 'chrome://resources/cr_elements/policy/cr_policy_indicator.js';
import { loadTimeData } from 'chrome://resources/ash/common/load_time_data.m.js';
import { strictQuery } from 'chrome://resources/ash/common/typescript_utils/strict_query.js';
import { ColorChangeUpdater } from 'chrome://resources/cr_components/color_change_listener/colors_css_updater.js';
import { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { CrToolbarSearchFieldElement } from 'chrome://resources/cr_elements/cr_toolbar/cr_toolbar_search_field.js';
import { FindShortcutMixin } from 'chrome://resources/cr_elements/find_shortcut_mixin.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { AcceleratorsUpdatedObserverReceiver, PolicyUpdatedObserverReceiver, UserAction } from '../mojom-webui/shortcut_customization.mojom-webui.js';
import { AcceleratorLookupManager } from './accelerator_lookup_manager.js';
import { getShortcutProvider } from './mojo_interface_provider.js';
import { Router } from './router.js';
import { SearchBoxElement } from './search/search_box.js';
import { getTemplate } from './shortcut_customization_app.html.js';
import { AcceleratorConfigResult } from './shortcut_types.js';
import { getAcceleratorId, getCategoryNameStringId, isCustomizationAllowed } from './shortcut_utils.js';
const oldKeyboardSettingsLink = 'chrome://os-settings/keyboard-overlay';
const newKeyboardSettingsLink = 'chrome://os-settings/per-device-keyboard';
/**
 * @fileoverview
 * 'shortcut-customization-app' is the main landing page for the shortcut
 * customization app.
 */
const ShortcutCustomizationAppElementBase = I18nMixin(FindShortcutMixin(PolymerElement));
export class ShortcutCustomizationAppElement extends ShortcutCustomizationAppElementBase {
    constructor() {
        super(...arguments);
        this.acceleratorUpdateInProgress = false;
        this.shortcutProvider = getShortcutProvider();
        this.acceleratorlookupManager = AcceleratorLookupManager.getInstance();
    }
    static get is() {
        return 'shortcut-customization-app';
    }
    static get properties() {
        return {
            dialogShortcutTitle: {
                type: String,
                value: '',
            },
            dialogAccelerators: {
                type: Array,
                value: () => [],
            },
            dialogAction: {
                type: Number,
                value: 0,
            },
            dialogSource: {
                type: Number,
                value: 0,
            },
            showEditDialog: {
                type: Boolean,
                value: false,
            },
            showRestoreAllDialog: {
                type: Boolean,
                value: false,
            },
            isCustomizationAllowedByPolicy: {
                type: Boolean,
                value: true,
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        if (loadTimeData.getBoolean('isJellyEnabledForShortcutCustomization')) {
            // Use dynamic color CSS and start listening to `ColorProvider` updates.
            // TODO(b/276493795): After the Jelly experiment is launched, replace
            // `cros_styles.css` with `theme/colors.css` directly in `index.html`.
            // Also add `theme/typography.css` to `index.html`.
            document.querySelector('link[href*=\'cros_styles.css\']')
                ?.setAttribute('href', 'chrome://theme/colors.css?sets=legacy,sys');
            const typographyLink = document.createElement('link');
            typographyLink.href = 'chrome://theme/typography.css';
            typographyLink.rel = 'stylesheet';
            document.head.appendChild(typographyLink);
            document.body.classList.add('jelly-enabled');
            ColorChangeUpdater.forDocument().start();
        }
        this.policyUpdatedReceiver = new PolicyUpdatedObserverReceiver(this);
        this.shortcutProvider.addPolicyObserver(this.policyUpdatedReceiver.$.bindNewPipeAndPassRemote());
        this.shortcutProvider.isCustomizationAllowedByPolicy().then(({ isCustomizationAllowedByPolicy }) => {
            this.isCustomizationAllowedByPolicy = isCustomizationAllowedByPolicy;
        });
        this.fetchAccelerators();
        this.addEventListener('show-edit-dialog', this.showDialog);
        this.addEventListener('edit-dialog-closed', this.onDialogClosed);
        this.addEventListener('accelerator-update-in-progress', this.acceleratorUpdating);
        this.addEventListener('request-update-accelerator', this.onRequestUpdateAccelerators);
        this.addEventListener('scroll-to-top', this.onScollToTop);
        this.keyboardSettingsLink =
            loadTimeData.getBoolean('isInputDeviceSettingsSplitEnabled') ?
                newKeyboardSettingsLink :
                oldKeyboardSettingsLink;
        Router.getInstance().addObserver(this);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.policyUpdatedReceiver.$.close();
        this.acceleratorsUpdatedReceiver.$.close();
        this.removeEventListener('show-edit-dialog', this.showDialog);
        this.removeEventListener('edit-dialog-closed', this.onDialogClosed);
        this.removeEventListener('request-update-accelerator', this.onRequestUpdateAccelerators);
        this.removeEventListener('scroll-to-top', this.onScollToTop);
        Router.getInstance().removeObserver(this);
    }
    fetchAccelerators() {
        // Kickoff fetching accelerators by first fetching the accelerator configs.
        this.shortcutProvider.getAccelerators().then(({ config }) => this.onAcceleratorConfigFetched(config));
        // Fetch the hasLauncherButton value.
        this.shortcutProvider.hasLauncherButton().then(({ hasLauncherButton }) => {
            this.acceleratorlookupManager.setHasLauncherButton(hasLauncherButton);
        });
    }
    onAcceleratorConfigFetched(config) {
        this.acceleratorlookupManager.setAcceleratorLookup(config);
        // After fetching the config infos, fetch the layout infos next.
        this.shortcutProvider.getAcceleratorLayoutInfos().then(({ layoutInfos }) => this.onLayoutInfosFetched(layoutInfos));
    }
    onLayoutInfosFetched(layoutInfos) {
        this.addNavigationSelectors(layoutInfos);
        this.acceleratorlookupManager.setAcceleratorLayoutLookup(layoutInfos);
        // Notify pages to update their accelerators.
        this.$.navigationPanel.notifyEvent('updateAccelerators');
        // After fetching initial accelerators, start observing for any changes.
        this.acceleratorsUpdatedReceiver =
            new AcceleratorsUpdatedObserverReceiver(this);
        this.shortcutProvider.addObserver(this.acceleratorsUpdatedReceiver.$.bindNewPipeAndPassRemote());
        // Navigate to the selected shortcuts if one was set from the launcher
        // search. If the url does not contain action or category info, the
        // onRouteChanged does not do anything.
        this.onRouteChanged(new URL(window.location.href));
    }
    // AcceleratorsUpdatedObserverInterface:
    onAcceleratorsUpdated(config) {
        this.acceleratorlookupManager.setAcceleratorLookup(config);
        // Update subsections.
        this.$.navigationPanel.notifyEvent('updateSubsections');
        // Check if an accelerator update is currently in progress and update
        // dialog. This ensures the dialog isn't updated before receiving the
        // AcceleratorConfigResult. Note: The dialog will get updated in
        // onRequestUpdateAccelerators() when the accelerator is modified. The
        // onAcceleratorsUpdated() handles dialog update for other types of changes
        // like input, keyboard, and pref change.
        if (!this.acceleratorUpdateInProgress && this.showEditDialog) {
            this.updateDialogAccelerators(this.dialogSource, this.dialogAction);
        }
        // Update the hasLauncherButton value every time accelerators are updated.
        this.shortcutProvider.hasLauncherButton().then(({ hasLauncherButton }) => {
            this.acceleratorlookupManager.setHasLauncherButton(hasLauncherButton);
        });
    }
    // PolicyUpdatedObserverInterface:
    onCustomizationPolicyUpdated() {
        // Reload the page to apply the changes.
        window.location.reload();
    }
    addNavigationSelectors(layoutInfos) {
        // A Set is used here to remove duplicates from the array of categories.
        const uniqueCategoriesInOrder = new Set(layoutInfos.map(layoutInfo => layoutInfo.category));
        const pages = Array.from(uniqueCategoriesInOrder).map(category => {
            const categoryNameStringId = getCategoryNameStringId(category);
            const categoryName = this.i18n(categoryNameStringId);
            return this.$.navigationPanel.createSelectorItem(categoryName, 'shortcuts-page', '', `category-${category}`, { category });
        });
        this.$.navigationPanel.addSelectors(pages);
    }
    showDialog(e) {
        this.dialogShortcutTitle = e.detail.description;
        this.dialogAccelerators = e.detail.accelerators;
        this.dialogAction = e.detail.action;
        this.dialogSource = e.detail.source;
        this.showEditDialog = true;
    }
    onDialogClosed() {
        this.showEditDialog = false;
        this.dialogShortcutTitle = '';
        this.dialogAccelerators = [];
    }
    onScollToTop() {
        strictQuery('#topNavigationBody', this.shadowRoot, HTMLDivElement)
            .scrollIntoView();
    }
    acceleratorUpdating() {
        this.acceleratorUpdateInProgress = true;
    }
    onRouteChanged(url) {
        const action = url.searchParams.get('action');
        const category = url.searchParams.get('category');
        if (!action || !category) {
            // This route change did not include the params that would cause the page
            // to be changed.
            return;
        }
        // Select the correct page based on the category from the URL.
        // Scrolling to the specific shortcut from the URL is handled
        // in shortcuts_page.ts.
        this.$.navigationPanel.selectPageById(`category-${category}`);
    }
    onRequestUpdateAccelerators(e) {
        // Update subsections.
        this.$.navigationPanel.notifyEvent('updateSubsections');
        // Update dialog accelerators.
        if (this.showEditDialog) {
            this.updateDialogAccelerators(e.detail.source, e.detail.action);
        }
        // Set acceleratorUpdateInProgress back to false.
        this.acceleratorUpdateInProgress = false;
    }
    onRestoreAllDefaultClicked() {
        this.showRestoreAllDialog = true;
    }
    onCancelRestoreButtonClicked() {
        strictQuery('#restoreDialog', this.shadowRoot, CrDialogElement).close();
    }
    onConfirmRestoreButtonClicked() {
        this.shortcutProvider.restoreAllDefaults().then(({ result }) => {
            // TODO(jimmyxgong): Explore error state with restore all.
            if (result.result === AcceleratorConfigResult.kSuccess) {
                this.shortcutProvider.recordUserAction(UserAction.kResetAll);
                strictQuery('#restoreDialog', this.shadowRoot, CrDialogElement).close();
            }
        });
    }
    closeRestoreAllDialog() {
        this.showRestoreAllDialog = false;
    }
    shouldHideRestoreAllButton() {
        return !isCustomizationAllowed();
    }
    updateDialogAccelerators(source, action) {
        assert(this.acceleratorlookupManager.isStandardAcceleratorById(getAcceleratorId(source, action)));
        const updatedAccels = this.acceleratorlookupManager.getStandardAcceleratorInfos(source, action);
        this.shadowRoot.querySelector('#editDialog')
            .updateDialogAccelerators(updatedAccels);
    }
    // Override FindShortcutMixin methods.
    handleFindShortcut(modalContextOpen) {
        if (modalContextOpen) {
            return false;
        }
        this.getSearchFieldElement().getSearchInput().focus();
        return true;
    }
    // Override FindShortcutMixin methods.
    searchInputHasFocus() {
        return this.getSearchFieldElement().isSearchFocused();
    }
    getSearchFieldElement() {
        const searchBox = strictQuery('search-box', this.shadowRoot, SearchBoxElement);
        const searchField = strictQuery('#search', searchBox.shadowRoot, CrToolbarSearchFieldElement);
        return searchField;
    }
    setAcceleratorUpdateInProgressForTesting(acceleratorUpdateInProgress) {
        this.acceleratorUpdateInProgress = acceleratorUpdateInProgress;
    }
    static get template() {
        return getTemplate();
    }
}
customElements.define(ShortcutCustomizationAppElement.is, ShortcutCustomizationAppElement);
