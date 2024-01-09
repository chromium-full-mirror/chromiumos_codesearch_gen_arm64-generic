// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_icons.css.js';
import 'chrome://resources/cr_elements/mwb_shared_icons.html.js';
import 'chrome://resources/cr_elements/mwb_shared_vars.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import './strings.m.js';
import { MouseHoverableMixin } from 'chrome://resources/cr_elements/mouse_hoverable_mixin.js';
import { getFaviconForPageURL } from 'chrome://resources/js/icon.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { get as deepGet, PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { ariaLabel, TabItemType } from './tab_data.js';
import { colorName } from './tab_group_color_helper.js';
import { getTemplate } from './tab_search_item.html.js';
import { highlightText, tabHasMediaAlerts } from './tab_search_utils.js';
import { TabAlertState } from './tabs.mojom-webui.js';
const TabSearchItemBase = MouseHoverableMixin(PolymerElement);
export class TabSearchItem extends TabSearchItemBase {
    static get is() {
        return 'tab-search-item';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            data: {
                type: Object,
                observer: 'dataChanged_',
            },
            buttonRipples_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('useRipples'),
            },
            index: Number,
            inSuggestedGroup: {
                type: Boolean,
                value: false,
            },
        };
    }
    /**
     * @return Whether a close action can be performed on the item.
     */
    isCloseable_(type) {
        return type === TabItemType.OPEN_TAB;
    }
    /**
     * @return the class name for the close button including a second class to
     *     preallocate space for the close button even while hidden if the tab
     *     will display a media alert.
     */
    getButtonContainerStyles_(tabData) {
        return 'button-container' +
            (this.isOpenTabAndHasMediaAlert_(tabData) ?
                ' allocate-space-while-hidden' :
                '');
    }
    onItemClose_(e) {
        this.dispatchEvent(new CustomEvent('close'));
        e.stopPropagation();
    }
    faviconUrl_(tab) {
        return tab.faviconUrl ?
            `url("${tab.faviconUrl.url}")` :
            getFaviconForPageURL(tab.isDefaultFavicon ? 'chrome://newtab' : tab.url.url, false);
    }
    /**
     * Determines the display attribute value for the group SVG element.
     */
    groupSvgDisplay_(tabData) {
        return tabData.tabGroup ? 'block' : 'none';
    }
    isOpenTabAndHasMediaAlert_(tabData) {
        return tabData.type === TabItemType.OPEN_TAB &&
            tabHasMediaAlerts(tabData.tab);
    }
    /**
     * Determines the display attribute value for the media indicator.
     */
    mediaAlertVisibility_(tabData) {
        return this.isOpenTabAndHasMediaAlert_(tabData) ? 'block' : 'none';
    }
    /**
     * Returns the correct media alert indicator class name.
     */
    getMediaAlertImageClass_(tabData) {
        if (!this.isOpenTabAndHasMediaAlert_(tabData)) {
            return '';
        }
        // GetTabAlertStatesForContents adds alert indicators in the order of their
        // priority. Only relevant media alerts are sent over mojo so the first
        // element in alertStates will be the highest priority media alert to
        // display.
        const alert = tabData.tab.alertStates[0];
        switch (alert) {
            case TabAlertState.kMediaRecording:
                return 'media-recording';
            case TabAlertState.kAudioRecording:
                return 'audio-recording';
            case TabAlertState.kVideoRecording:
                return 'video-recording';
            case TabAlertState.kAudioPlaying:
                return 'audio-playing';
            case TabAlertState.kAudioMuting:
                return 'audio-muting';
            default:
                return '';
        }
    }
    hasTabGroupWithTitle_(tabData) {
        return !!(tabData.tabGroup && tabData.tabGroup.title);
    }
    dataChanged_(data) {
        [
            ['tab.title', this.$.primaryText],
            ['hostname', this.$.secondaryText],
            ['tabGroup.title', this.$.groupTitle],
        ]
            .forEach(([path, element]) => {
            if (element) {
                const highlightRanges = data.highlightRanges ? data.highlightRanges[path] : undefined;
                highlightText(element, deepGet(data, path), highlightRanges);
            }
        });
        // Show chrome:// if it's a chrome internal url
        const protocol = new URL(data.tab.url.url).protocol;
        if (protocol === 'chrome:') {
            this.$.secondaryText.prepend(document.createTextNode('chrome://'));
        }
        if (data.tabGroup) {
            this.style.setProperty('--group-dot-color', `var(--tab-group-color-${colorName(data.tabGroup.color)})`);
        }
    }
    ariaLabelForText_(tabData) {
        return ariaLabel(tabData);
    }
    ariaLabelForButton_(title) {
        if (this.inSuggestedGroup) {
            return loadTimeData.getStringF('tabOrganizationCloseTabAriaLabel', title);
        }
        return `${loadTimeData.getString('closeTab')} ${title}`;
    }
    tooltipForButton_() {
        if (this.inSuggestedGroup) {
            return loadTimeData.getString('tabOrganizationCloseTabTooltip');
        }
        return loadTimeData.getString('closeTab');
    }
}
customElements.define(TabSearchItem.is, TabSearchItem);
