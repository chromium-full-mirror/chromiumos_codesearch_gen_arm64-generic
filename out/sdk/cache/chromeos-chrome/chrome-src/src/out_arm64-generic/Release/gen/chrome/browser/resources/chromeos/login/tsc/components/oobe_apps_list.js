// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/chromeos/cros_color_overrides.css.js';
import '//resources/cr_elements/cr_checkbox/cr_checkbox.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/ash/common/cr_scrollable_behavior.js';
import '//resources/cr_elements/icons.html.js';
import { html, mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { OobeI18nBehavior, OobeI18nBehaviorInterface } from './behaviors/oobe_i18n_behavior.js';
const MAX_IMG_LOADING_TIME_SEC = 7;
/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {OobeI18nBehaviorInterface}
 */
const OobeAppsListBase = mixinBehaviors([OobeI18nBehavior], PolymerElement);
/**
 * @polymer
 */
export class OobeAppsList extends OobeAppsListBase {
    static get is() {
        return 'oobe-apps-list';
    }
    static get template() {
        return html `<!--_html_template_start_-->
<!--
Copyright 2022 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->

<!--
  OOBE polymer element which is used to show a list of recommended apps.
-->

<style include="cros-color-overrides">
  :host {
    --checkbox-column-width: 40px;
    --checkbox-size: 16px;
  }

  #appsListContainer {
    display: grid;
    gap: 8px 0;
    grid-auto-flow: row;
    grid-template-rows: 40px 1fr;
    height: 100%;
  }

  #appsList {
    height: 100%;
    /* Bug(b/294443311): Add logic to apply bottom border to the container only
    if there is an overflow. */
    overflow-y: auto;
  }

  #appsListContainer .app-item {
    display: grid;
    gap: 4px 16px;
    grid-template-areas:
      '.        .    title       .     '
      'checkbox icon category    .     '
      '.        .    description .     ';
    grid-auto-flow: column;
    grid-template-columns: var(--checkbox-column-width) 48px 1fr 26px;
    grid-template-rows: 22px 22px auto;
    padding-bottom: 16px;
    padding-top: 16px;
  }

  #appsListContainer .app-item:not(:first-child) {
    border-top: 1px solid var(--cros-color-primary-dark);
  }

  :host-context(.jelly-enabled) #appsListContainer .app-item:not(:first-child) {
    border-top: 1px solid var(--cros-sys-separator);
  }

  cr-checkbox {
    --cr-checkbox-mark-color: var(--cr-checked-color);
    --cr-checkbox-size: var(--checkbox-size);
  }

  #selectAll {
    margin-inline-start: calc(
      (var(--checkbox-column-width) - var(--checkbox-size)) / 2
    );
  }

  #unselectAll {
    border-bottom: solid 2px var(--cr-checked-color);
    height: 19px;
    margin-inline-start: calc(
      (var(--checkbox-column-width) - var(--checkbox-size)) / 2 + 4px
    );
    position: absolute;
    width: 8px;
  }

  :host-context(.jelly-enabled) #unselectAll {
    border-bottom: solid 2px var(--cros-sys-primary);
  }

  cr-checkbox.some-selected {
    --cr-checkbox-unchecked-box-color: var(--cr-checked-color);
  }

  .app-item cr-checkbox {
    align-self: center;
    grid-area: checkbox;
    height: var(--checkbox-size);
    justify-self: center;
    width: var(--checkbox-size);
  }

  webview.app-icon {
    align-items: center;
    align-self: center;
    grid-area: icon;
    height: 48px;
    user-select: none;
    width: 48px;
  }

  .app-title {
    color: var(--oobe-header-text-color);
    font-size: var(--oobe-modal-dialog-header-font-size);
    font-weight: var(--oobe-modal-dialog-header-font-weight);
    grid-area: title;
    line-height: 22px;
  }

  :host-context(.jelly-enabled) .app-title {
    font-family: var(--oobe-apps-list-app-title-font-family);
    font-size: var(--oobe-apps-list-app-title-font-size);
    font-weight: var(--oobe-apps-list-app-title-font-weight);
    line-height: var(--oobe-apps-list-app-title-line-height);
  }

  .secondary-text {
    color: var(--oobe-text-color);
    font-family: var(--oobe-default-font-family);
    font-size: 12px;
    font-weight: var(--oobe-default-font-weight);
    line-height: 18px;
  }

  :host-context(.jelly-enabled) .secondary-text {
    color: var(--oobe-subheader-text-color);
    font-family: var(--oobe-apps-list-secondary-text-font-family);
    font-size: var(--oobe-apps-list-secondary-text-font-size);
    font-weight: var(--oobe-apps-list-secondary-text-font-weight);
    line-height: var(--oobe-apps-list-secondary-text-line-height);
  }

  .app-tags {
    grid-area: category;
  }

  .app-tags ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .app-tags li {
    display: inline-block;
  }

  .app-tags ul > li::before {
    content: '|' / '';
    margin-inline-end: 6px;
    margin-inline-start: 6px;
  }

  :host-context(.jelly-enabled) .app-tags ul > li::before {
    color: var(--cros-sys-separator);
  }

  .app-tags ul > li:first-of-type::before {
    content: '';
    margin: 0;
  }

  .app-description {
    grid-area: description;
  }

  .truncated {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
<div id="appsListContainer">
  <div id="unselectAll" hidden="[[unselectSymbolHidden_(appsSelected)]]"></div>
  <cr-checkbox
    id="selectAll"
    checked="{{allSelected_}}"
    on-change="updateSelection_"
  >
    <slot name="selectAllTitle"></slot>
  </cr-checkbox>
  <div id="appsList">
    <template is="dom-repeat" items="[[appList]]">
      <div class="app-item">
        <cr-checkbox
          id="[[item.package_name]]"
          checked="{{item.checked}}"
          class="no-label"
          aria-description="[[item.title]]"
          on-change="updateCount_"
        >
        </cr-checkbox>
        <webview
          role="img"
          class="app-icon"
          src="[[getWrappedIcon_(item.icon_url)]]"
          aria-hidden="true"
          tabindex="-1"
          on-contentload="onImageLoaded_"
        >
        </webview>
        <div class="app-title">[[item.title]]</div>
        <div class="app-tags secondary-text truncated">
          <ul>
            <template is="dom-repeat" items="[[item.tags]]">
              <li>[[item]]</li>
            </template>
          </ul>
        </div>
        <div class="app-description secondary-text">
          [[item.description]]
        </div>
        </div>
      </div>
    </template>
  </div>
</div>
<!--_html_template_end_-->`;
    }
    static get properties() {
        return {
            /**
             * Apps list.
             */
            appList: {
                type: Array,
                value: [],
                observer: 'onAppListSet_',
            },
            appsSelected: {
                type: Number,
                value: 0,
                notify: true,
            },
        };
    }
    constructor() {
        super();
        /**
         * Timer id of pending load.
         * @type {number|undefined}
         * @private
         */
        this.loadingTimer_ = undefined;
        this.allSelected_ = false;
        this.loadedImagesCount_ = 0;
    }
    /**
     * Clears loading timer.
     * @private
     */
    clearLoadingTimer_() {
        if (this.loadingTimer_) {
            clearTimeout(this.loadingTimer_);
            this.loadingTimer_ = undefined;
        }
    }
    /**
     * Called when app list is changed. We assume that non-empty list is set only
     * once.
     * @private
     */
    onAppListSet_() {
        if (this.appList.length === 0) {
            return;
        }
        this.clearLoadingTimer_();
        // Wait a few seconds before at least some icons are downloaded. If it
        // happens faster we will exit waiting timer.
        this.loadingTimer_ = setTimeout(this.onLoadingTimeOut_.bind(this), MAX_IMG_LOADING_TIME_SEC * 1000);
    }
    /**
     * Handler for icons loading timeout.
     * @private
     */
    onLoadingTimeOut_() {
        this.loadingTimer_ = undefined;
        this.dispatchEvent(new CustomEvent('apps-list-loaded', { bubbles: true, composed: true }));
    }
    /**
     * Wrap the icon as a image into a html snippet.
     *
     * @param {string} iconUri the icon uri to be wrapped.
     * @return {string} wrapped html snippet.
     *
     * @private
     */
    getWrappedIcon_(iconUri) {
        return ('data:text/html;charset=utf-8,' + encodeURIComponent(String.raw `
    <html>
      <style>
        body {
          margin: 0;
        }
        #icon {
          width: 48px;
          height: 48px;
          user-select: none;
        }
      </style>
    <body><img id="icon" src="` + iconUri + '"></body></html>'));
    }
    /**
     * After any change in selection update current counter.
     * @private
     */
    updateCount_() {
        let appsSelected = 0;
        this.appList.forEach((app) => {
            appsSelected += app.checked;
        });
        this.appsSelected = appsSelected;
        this.allSelected_ = this.appsSelected === this.appList.length;
    }
    /**
     * Set all checkboxes to a new value.
     * @param {boolean} value new state for all checkboxes
     * @private
     */
    updateSelectionTo_(value) {
        this.appList.forEach((_, index) => {
            this.set('appList.' + index + '.checked', value);
        });
    }
    /**
     * Called when select all checkbox is clicked. It has 3 states:
     *  1) all are selected;
     *  2) some are selected;
     *  3) nothing is selected.
     * Clicking the button in states 1 and 2 leads to a state 3; from state 3 to
     * state 1.
     * @private
     */
    updateSelection_() {
        if (this.allSelected_ && this.appsSelected === 0) {
            this.updateSelectionTo_(true);
        }
        else {
            this.updateSelectionTo_(false);
        }
        // When there are selected apps clicking on this checkbox should unselect
        // them. Keep checkbox unchecked.
        if (this.allSelected_ && this.appsSelected > 0) {
            this.allSelected_ = false;
        }
        this.updateCount_();
    }
    /**
     * Called when single webview loads app icon.
     * @private
     */
    onImageLoaded_() {
        this.loadedImagesCount_ += 1;
        if (this.loadedImagesCount_ === this.appList.length) {
            this.clearLoadingTimer_();
            this.dispatchEvent(new CustomEvent('apps-list-loaded', { bubbles: true, composed: true }));
        }
    }
    /**
     * Return a list of selected apps.
     * @returns {!Array<String>}
     */
    getSelectedApps() {
        const packageNames = [];
        this.appList.forEach((app) => {
            if (app.checked) {
                packageNames.push(app.package_name);
            }
        });
        return packageNames;
    }
    unselectSymbolHidden_(appsSelected) {
        if (appsSelected > 0 && appsSelected < this.appList.length) {
            this.$.selectAll.classList.add('some-selected');
            return false;
        }
        else {
            this.$.selectAll.classList.remove('some-selected');
            return true;
        }
    }
}
customElements.define(OobeAppsList.is, OobeAppsList);
