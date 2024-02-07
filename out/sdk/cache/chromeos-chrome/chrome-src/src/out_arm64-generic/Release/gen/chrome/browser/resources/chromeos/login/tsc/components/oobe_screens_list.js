// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/ash/common/cr_elements/cros_color_overrides.css.js';
import '//resources/ash/common/cr_elements/icons.html.js';
import { html, mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { OobeI18nBehavior, OobeI18nBehaviorInterface } from './behaviors/oobe_i18n_behavior.js';
/**
 *  A single screen item.
 * @typedef {{
 *   icon: String,
 *   title: String,
 *   screenID: String,
 *   selected: Boolean,
 * }}
 */
export let ScreenItem;
/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {OobeI18nBehaviorInterface}
 */
const OobeScreensListBase = mixinBehaviors([OobeI18nBehavior], PolymerElement);
/**
 * @polymer
 */
export class OobeScreensList extends OobeScreensListBase {
    static get is() {
        return 'oobe-screens-list';
    }
    static get template() {
        return html `<!--_html_template_start_-->
<!-- Copyright 2022 The Chromium Authors
     Use of this source code is governed by a BSD-style license that can be
     found in the LICENSE file. -->


<!--
  OOBE polymer element which is used to show a list of optional screens
  that would be displayed in CHOOBE.
  It has all styling for the screen_item element and can display
  for each screen : Icon and a title.
-->

<style include="oobe-dialog-host-styles cros-color-overrides">
  :host {
    --cr-card-button-height: 150px;
  }

  #screensList {
    overflow-y: auto;
    width: 100%;
  }

  .screen-title {
    color: var(--cros-text-color-primary);
    font-weight: var(--oobe-header-font-weight);
  }

  :host-context(.jelly-enabled) .screen-title {
    color: var(--cros-sys-on_surface);
    font-weight: var(--cros-button-1-font-weight);
  }

  .screen-subtitle {
    color: var(--cros-text-color-secondary);
    font-weight: var(--oobe-default-font-weight);
  }

  :host-context(.jelly-enabled) .screen-subtitle {
    color: var(--cros-sys-on_surface_variant);
    font: var(--cros-body-2-font);
  }

  .screen-item {
    background-color: var(--cros-bg-color-elevation-1);
    border-radius: 16px;
    border-width: 0;
    box-shadow: var(--cr-elevation-1);
    height: 80px;
    margin-bottom: 8px;
    margin-inline-end: 4px;
    margin-inline-start: 4px;
    margin-top: 8px;
    padding: 0;
    transition: color 250ms linear, background-color 250ms linear;
    width: calc(100% - 8px);
  }

  :host-context(.jelly-enabled) .screen-item {
    background-color: var(--cros-sys-base_elevated);
    box-shadow: none;
  }

  :host-context(.jelly-enabled) .screen-item:hover {
    background-color: var(--cros-sys-app_base_shaded);
  }

  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-inline-end: 16px;
  }

  .screen-item:focus {
    border: 2px solid var(--cros-focus-ring-color);
  }

  :root.jelly-enabled .screen-item:focus {
    border: 2px solid var(--cros-sys-focus_ring);
  }

  .screen-item[checked=true] {
    background-color: var(--cros-button-background-color-secondary-hover);
  }

  :host-context(.jelly-enabled) .screen-item[checked=true] {
    background-color: var(--cros-sys-primary_container);
  }

  .screen-item[checked=true] .screen-title,
  .screen-item[checked=true] .screen-subtitle {
    color: var(--cros-color-prominent);
  }

  :host-context(.jelly-enabled) .screen-item[checked=true] .screen-title {
    color: var(--cros-sys-on_surface);
  }

  :host-context(.jelly-enabled) .screen-item[checked=true] .screen-subtitle {
    color: var(--cros-sys-on_surface_variant);
  }

  .info-icon {
    align-self: center;
    margin-inline-end: 30px;
    margin-inline-start: auto;
  }

  .screen-item[visited] {
    --cros-second-tone-opacity: 1;
    background-color: var(--cros-button-background-color-primary-disabled);
  }

  :host-context(.jelly-enabled) .screen-item[visited] {
    background-color: var(--cros-sys-hover_on_subtle);
  }

  .screen-item[visited] .screen-title {
    color: var(--cros-text-color-secondary);
  }

  :host-context(.jelly-enabled) .screen-item[visited] .screen-title {
    color: var(--cros-sys-on_surface);
  }

  .screen-item[visited] .screen-subtitle {
    color: var(--cros-text-color-secondary);
  }

  :host-context(.jelly-enabled) .screen-item[visited] .screen-subtitle {
    color: var(--cros-sys-on_surface_variant);
  }

  .screen-item[disabled] {
    background-color: var(--disabled-bg-action);
  }

  :host-context(.jelly-enabled) .screen-item[disabled] {
    background-color: var(--cros-sys-disabled_container);
  }

  .screen-item[disabled] .screen-title,
  .screen-item[disabled] .screen-subtitle {
    color: var(--cros-color-disabled);
  }

  :host-context(.jelly-enabled) .screen-item[disabled] .screen-title,
  :host-context(.jelly-enabled) .screen-item[disabled] .screen-subtitle {
    color: var(--cros-sys-disabled);
  }

  .sync {
    --iron-icon-fill-color: var(--cros-color-secondary);
  }

  /* Styles of icons in screen cards */
  .screen-icon  {
    align-items: center;
    align-self: center;
    display: flex;
    height: 32px;
    margin-inline-end: 16px;
    margin-inline-start: 16px ;
    width: 32px;
    --oobe-duotone-primary: var(--oobe-adaptive-dialog-icon-fill-color);
    --oobe-duotone-secondary: var(--oobe-adaptive-dialog-icon-fill-color);
    --oobe-duotone-secondary-opacity: 0.3;
    --oobe-duotone-bg: var(--oobe-adaptive-dialog-icon-fill-color);
  }

  :host-context(.jelly-enabled) .screen-icon {
    --oobe-duotone-primary: var(--cros-sys-primary);
    --oobe-duotone-secondary: var(--cros-sys-inverse_primary);
    --oobe-duotone-cut-out: var(--cros-sys-primary);
    --oobe-duotone-secondary-opacity: 1;
  }

  .screen-item[visited] .screen-icon {
    --oobe-duotone-primary: var(--cros-icon-color-secondary);
    --oobe-duotone-secondary: var(--cros-icon-color-secondary);
    --oobe-duotone-cut-out: var(--oobe-bg-color);
    --oobe-duotone-secondary-opacity: 1;
  }

  :host-context(.jelly-enabled) .screen-item[visited] .screen-icon {
    --oobe-duotone-primary: var(--cros-sys-secondary);
    --oobe-duotone-secondary: var(--cros-sys-secondary);
    --oobe-duotone-cut-out: var(--cros-sys-base_elevated);
  }

  .screen-item[disabled] .screen-icon {
    --oobe-duotone-primary: var(--cros-color-disabled);
    --oobe-duotone-secondary: var(--cros-color-disabled);
    --oobe-duotone-cut-out: var(--cros-color-disabled);
  }

  :host-context(.jelly-enabled) .screen-item[disabled] .screen-icon {
    --oobe-duotone-primary: var(--cros-sys-disabled);
    --oobe-duotone-secondary: var(--cros-sys-disabled);
    --oobe-duotone-cut-out: var(--cros-sys-base_elevated);
    --oobe-duotone-secondary-opacity: 1;
  }
</style>
<div id="screensList">
  <template is="dom-repeat" items="{{screensList_}}" as="screen">
    <cr-button id="[[getScreenID(screen.screenID)]]"
        visited$="[[isScreenVisited(screen.selected , screen.is_completed)]]"
        disabled="[[isScreenDisabled(screen.is_revisitable , screen.is_completed)]]"
        class="screen-item"
        role="checkbox"
        aria-checked="[[screen.selected]]"
        aria-label$="[[getAriaLabelToggleButtons_(locale,
                  screen.title ,
                  screen.subtitle ,
                  screen.is_synced ,
                  screen.is_completed,
                  screen.screenID,
                  screen.selected)]]"
        on-click="onClick_">
      <div class="flex horizontal layout">
        <div class="icon">
          <iron-icon class="screen-icon" icon="[[screen.icon]]"></iron-icon>
        </div>
        <div class="text-container" aria-hidden="true">
          <div class="screen-title"> [[i18nDynamic(locale, screen.title)]]</div>
          <div class="screen-subtitle">[[getSubtitle_(locale, screen.subtitle,
                                              screen.screenID )]]</div>
        </div>
        <div class="info-icon" aria-hidden="true">
          <iron-icon id="sync-icon"
              hidden="[[isSyncedIconHidden(screen.is_synced ,
                                            screen.is_completed ,
                                            screen.selected)]]"
              class="sync" icon="oobe-20:sync"></iron-icon>
          <paper-tooltip id="tooltip-element" position="left"
              aria-hidden="true"
              for="sync-icon"
              animation-delay="0">
            [[i18nDynamic(locale, 'choobeSyncedTile')]]
          </paper-tooltip>
          <iron-icon hidden="[[!screen.selected]]"
              class="selected" icon="oobe-20:selected"></iron-icon>
        </div>
      </div>
    </cr-button>
  </template>
</div>
<!--_html_template_end_-->`;
    }
    static get properties() {
        return {
            /**
             * List of screens to display.
             * @type {!Array<ScreenItem>}
             */
            screensList_: {
                type: Array,
                value: [],
                notify: true,
            },
            /**
             * List of selected screens.
             */
            screensSelected: {
                type: Array,
                value: [],
            },
            /**
             * Number of selected screens.
             */
            selectedScreensCount: {
                type: Number,
                value: 0,
                notify: true,
            },
        };
    }
    /**
     * Initialize the list of screens.
     */
    init(screens) {
        this.screensList_ = screens;
        this.screensSelected = [];
        this.selectedScreensCount = 0;
    }
    /**
     * Return the list of selected screens.
     */
    getScreenSelected() {
        return this.screensSelected;
    }
    onClick_(e) {
        const clickedScreen = e.model.screen;
        const previousSelectedState = clickedScreen.selected;
        const currentSelectedState = !previousSelectedState;
        const path = `screensList_.${this.screensList_.indexOf(clickedScreen)}.selected`;
        this.set(path, currentSelectedState);
        e.currentTarget.setAttribute('checked', currentSelectedState);
        if (currentSelectedState) {
            this.selectedScreensCount++;
            this.screensSelected.push(clickedScreen.screenID);
        }
        else {
            this.selectedScreensCount--;
            this.screensSelected.splice(this.screensSelected.indexOf(clickedScreen.screenID), 1);
        }
        this.notifyPath('screensList_');
    }
    getSubtitle_(locale, screen_subtitle, screen_id) {
        if (screen_subtitle) {
            // display size screen is special case as the subtitle include directly
            // the percentage  and will be placed in the message placeholder.
            if (screen_id === 'display-size') {
                return this.i18nDynamic(locale, 'choobeDisplaySizeSubtitle', screen_subtitle);
            }
            return this.i18nDynamic(locale, screen_subtitle);
        }
        return '';
    }
    isScreenDisabled(is_revisitable, is_completed) {
        return (!is_revisitable) && is_completed;
    }
    isSyncedIconHidden(is_synced, is_completed, is_selected) {
        return (!is_synced) || (is_selected) || (is_completed);
    }
    isScreenVisited(is_selected, is_completed) {
        return is_completed && !is_selected;
    }
    getScreenID(screen_id) {
        return 'cr-button-' + screen_id;
    }
    focus() {
        const screens = this.shadowRoot.querySelectorAll('.screen-item');
        if (screens.length < 1) {
            return;
        }
        // Focus the first enabled screen in the list
        for (let i = 0; i < screens.length; ++i) {
            const screen = screens[i];
            if (!this.isScreenDisabled(screen.hasAttribute('is_revisitable'), screen.hasAttribute('is_completed'))) {
                screen.focus();
                return;
            }
        }
        return;
    }
    getAriaLabelToggleButtons_(locale, screen_title, screen_subtitle, screen_is_synced, screen_is_completed, screen_id, screen_is_selected) {
        let ariaLabel = this.i18nDynamic(locale, screen_title);
        if (screen_subtitle) {
            if (screen_id === 'display-size') {
                ariaLabel = ariaLabel + '.' + screen_subtitle;
            }
            else {
                ariaLabel = ariaLabel + '.' + this.i18nDynamic(locale, screen_subtitle);
            }
        }
        if (!screen_is_selected && screen_is_completed) {
            ariaLabel =
                ariaLabel + '.' + this.i18nDynamic(locale, 'choobeVisitedTile');
        }
        if (!screen_is_selected && !screen_is_completed && screen_is_synced) {
            ariaLabel =
                ariaLabel + '.' + this.i18nDynamic(locale, 'choobeSyncedTile');
        }
        return ariaLabel;
    }
}
customElements.define(OobeScreensList.is, OobeScreensList);
