/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import '@material/web/menu/menu-item.js';
import '../switch/switch';
import { css, html, LitElement } from 'lit';
import { ifDefined } from 'lit/directives/if-defined';
const CHECKED_ICON = html `
  <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.7071 7.29289C13.3166 6.90237 12.6834 6.90237 12.2929 7.29289L9 10.5858L7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L8.29289 12.7071C8.68342 13.0976 9.31658 13.0976 9.70711 12.7071L13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289Z"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16Z"/>
  </svg>
`;
/**
 * A cros compliant menu-item component for use in cros-menu.
 */
export class MenuItem extends LitElement {
    // TODO: b/198759625 - Remove negative margin-inline-end when mwc token
    // available (padding 16px)
    /** @nocollapse */
    static { this.styles = css `
    md-menu-item {
      --md-menu-item-disabled-label-text-opacity: var(--cros-sys-opacity-disabled);
      --md-menu-item-disabled-leading-icon-opacity: var(--cros-sys-opacity-disabled);
      --md-menu-item-disabled-trailing-icon-opacity: var(--cros-sys-opacity-disabled);
      --md-menu-item-disabled-label-text-color: var(--cros-sys-on_surface);
      --md-menu-item-focus-label-text-color: var(--cros-sys-on_surface);
      --md-menu-item-hover-label-text-color: var(--cros-sys-on_surface);
      --md-menu-item-hover-state-layer-color: var(--cros-sys-hover_on_subtle);
      --md-menu-item-hover-state-layer-opacity: 1;
      --md-menu-item-label-text-color: var(--cros-sys-on_surface);
      --md-menu-item-label-text-font: var(--cros-button-2-font-family);
      --md-menu-item-label-text-size: var(--cros-button-2-font-size);
      --md-menu-item-label-text-line-height: var(--cros-button-2-line-height);
      --md-menu-item-label-text-weight: var(--cros-button-2-font-weight);
      --md-menu-item-leading-icon-color: var(--cros-sys-on_surface);
      --md-menu-item-pressed-label-text-color: var(--cros-sys-on_surface);
      --md-menu-item-pressed-state-layer-color: var(--cros-sys-ripple_neutral_on_subtle);
      --md-menu-item-pressed-state-layer-opacity: 1;
      --md-menu-item-trailing-element-headline-trailing-element-space: 48px;
      --md-menu-item-trailing-space: 16px;
      --md-menu-item-selected-container-color: var(--cros-sys-hover_on_subtle);
      --md-menu-item-selected-label-text-color: var(--cros-sys-on_surface);
    }
    md-menu-item([itemEnd=null]) {
      --md-menu-item-trailing-space: 48px;
    }
    :host([itemEnd="icon"]) md-menu-item {
      --md-menu-item-trailing-space: 12px;
    }
    :host([checked]) md-menu-item {
      --md-menu-item-trailing-space: 12px;
    }
    md-menu-item::part(focus-ring) {
      --md-focus-ring-active-width: 2px;
      --md-focus-ring-color: var(--cros-sys-focus_ring);
      --md-focus-ring-duration: 0s;
      --md-focus-ring-width: 2px;
    }

    :host([checked]) #checked-icon {
      display: inline-block;
      fill: var(--cros-sys-primary);
      height: 20px;
      width: 20px;
    }

    md-menu-item[selected]:hover::part(ripple) {
      --md-ripple-hover-opacity: 0;
    }

    ::slotted(:is(
      [slot="start"],
      [slot="end"],
    )) {
      color: var(--cros-sys-on_surface);
      height: 20px;
      width: 20px;
    }

    ::slotted(ea-icon) {
      --ea-icon-size: 20px;
    }

    cros-switch {
      height: 18px;
      width: 32px;
    }

    .slot-end:not(cros-switch) {
      font: var(--cros-button-2-font);
      width: unset;
      height: unset;
    }

    #shortcut {
      color: var(--cros-sys-secondary);
    }

    #headline {
      white-space: nowrap;
    }

    :host-context([dir=rtl]) ::slotted(:is(
      [slot="start"],
      [slot="end"]
    )) {
      transform: scaleX(-1);
    }

    :host-context([dir=rtl]) #checked-icon {
      transform: scaleX(1);
    }
  `; }
    static { this.shadowRootOptions = {
        mode: 'open',
        delegatesFocus: true,
    }; }
    /** @nocollapse */
    static { this.properties = {
        headline: { type: String },
        itemStart: { type: String },
        itemEnd: { type: String },
        tabIndex: { type: Number, reflect: true },
        disabled: { type: Boolean },
        keepOpen: { type: Boolean, attribute: 'keep-open' },
        isMenuItem: { type: Boolean, reflect: true, attribute: 'md-menu-item' },
        checked: { type: Boolean, reflect: true },
        shortcutText: { type: String },
        typeaheadText: { type: String, attribute: 'typeahead-text' },
        selected: { type: Boolean },
        type: { type: String },
    }; }
    /** @nocollapse */
    static { this.events = {
        /** Triggers when an item is clicked or equivalent. */
        MENU_ITEM_TRIGGERED: 'cros-menu-item-triggered',
    }; }
    constructor() {
        super();
        /**
         * For properties menu-item proxies to a child element via a setter, any
         * attempt to set the value before firstUpdated() will cause the value to be
         * dropped since there is no md-menu-item to send the value to. To prevent
         * this we cache these values and set them on first render.
         */
        this.missedPropertySets = {};
        this.headline = '';
        this.itemStart = '';
        this.itemEnd = '';
        this.keepOpen = false;
        this.disabled = false;
        this.isMenuItem = true;
        this.tabIndex = 0;
        this.checked = false;
        this.shortcutText = 'Shortcut';
        this.type = 'menuitem';
    }
    // Start slot should exist when `itemStart` is  `icon`.
    get startSlot() {
        return this.renderRoot.querySelector('slot[name="start"]');
    }
    // End slot should exist when `itemEnd` is `icon`.
    get endSlot() {
        return this.renderRoot.querySelector('slot[name="end"]');
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('keepOpen') && this.keepOpen) {
            this.addEventListener('keydown', this.keyDownListener);
            this.addEventListener('click', this.clickListener);
        }
        if (changedProperties.has('itemEnd') && this.itemEnd === 'switch') {
            this.addEventListener('keydown', this.keyDownListener);
            this.setAttribute('role', 'menuitemcheckbox');
            this.setAttribute('aria-checked', 'false');
            this.addEventListener('click', this.clickListener);
        }
        if (changedProperties.has('itemStart') && this.itemStart === 'icon' &&
            this.startSlot) {
            const startItems = this.startSlot.assignedElements();
            startItems.forEach((startItem) => {
                startItem.setAttribute('slot', 'start');
            });
        }
        if (changedProperties.has('itemEnd') && this.itemEnd === 'icon' &&
            this.endSlot) {
            const endItems = this.endSlot.assignedElements();
            endItems.forEach((endItem) => {
                endItem.setAttribute('slot', 'end');
            });
        }
    }
    /**
     * The text that is selectable via typeahead. If not set, defaults to the
     * `headline` property.
     */
    get typeaheadText() {
        return this.renderRoot?.querySelector('md-menu-item')?.typeaheadText ?? '';
    }
    set typeaheadText(text) {
        const item = this.renderRoot?.querySelector('md-menu-item');
        if (!item) {
            this.missedPropertySets.typeaheadText = text;
        }
        else {
            item.typeaheadText = text;
        }
    }
    /**
     * Whether or not to display the menu item in the selected visual state.
     */
    get selected() {
        return this.renderRoot?.querySelector('md-menu-item')?.selected ?? false;
    }
    set selected(selected) {
        const item = this.renderRoot?.querySelector('md-menu-item');
        if (!item) {
            this.missedPropertySets.selected = selected;
        }
        else {
            item.selected = selected;
        }
    }
    get switchSelected() {
        return this.renderRoot?.querySelector('cros-switch')?.selected ?? false;
    }
    set switchSelected(value) {
        if (!this.renderRoot)
            return;
        const crosSwitch = this.renderRoot.querySelector('cros-switch');
        if (!crosSwitch) {
            this.missedPropertySets.switchSelected = value;
        }
        else {
            crosSwitch.selected = value;
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.itemEnd === 'switch' || this.keepOpen) {
            this.removeEventListener('keydown', this.keyDownListener);
            this.removeEventListener('click', this.clickListener);
        }
    }
    keyDownListener(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.onTrigger();
        }
    }
    clickListener() {
        this.onTrigger();
    }
    onTrigger() {
        if (this.itemEnd === 'switch') {
            const crosSwitch = this.renderRoot.querySelector('cros-switch');
            if (this.disabled)
                return;
            crosSwitch.selected = !crosSwitch.selected;
            if (crosSwitch.selected) {
                this.setAttribute('aria-checked', 'true');
            }
            else {
                this.setAttribute('aria-checked', 'false');
            }
        }
        this.fireTriggerEvent();
    }
    // Set item to be placed in `end` slot of menu item (if any).
    // Checked property (check mark) will always take precedence over any icon
    // placed in end slot (if both are specified the checked icon will be used).
    // `switch` enforces cros-switch to be placed into the md-menu-item end slot,
    // `shortcut` uses a span that uses `shortcutText` as a label in the
    // md-menu-item end slot. `icon` exposes a slot so the user can pass in a
    // slotted element via cros-menu-item.
    getEndSlot() {
        if (this.checked) {
            return html `<div id="checked-icon" slot="end">${CHECKED_ICON}</div>`;
        }
        let endSlot;
        switch (this.itemEnd) {
            case 'shortcut':
                endSlot = html `
          <span
              slot="end"
              class="slot-end"
              id="shortcut">
            ${this.shortcutText}
          </span>`;
                break;
            case 'icon':
                endSlot = html `
          <slot
              name="end"
              slot="end"
              class="slot-end"
              aria-hidden="true">
          </slot>`;
                break;
            case 'switch':
                endSlot = html `
          <cros-switch
              slot="end"
              class="slot-end"
              ?selected=${!!this.missedPropertySets.switchSelected}>
          </cros-switch>`;
                break;
            default:
                endSlot = html ``;
                break;
        }
        // md-list-item has a ::slotted(*) selector which will never select
        // the children of a <slot> or a <slot> itself which is why default
        // content is not set as children of slot.
        // i.e. <slot slot="end">${slotEnd}</slot>
        return [html `<slot name="end" slot="end"></slot>`, endSlot];
    }
    fireTriggerEvent(e) {
        const reason = e?.detail.reason;
        if (reason && reason.kind === 'keydown' && reason.key === 'Escape') {
            return;
        }
        this.dispatchEvent(new CustomEvent(MenuItem.events.MENU_ITEM_TRIGGERED, { bubbles: true, composed: true }));
    }
    render() {
        const endSlot = this.getEndSlot();
        // `keep-open` property needs to be true in switch case so cros-switch can
        // be selected/unselected without menu closing.
        const keepOpen = this.itemEnd === 'switch' || this.keepOpen;
        let startSlot = null;
        if (this.itemStart === 'icon') {
            startSlot = html `
        <slot name="start" slot="start" aria-hidden="true"></slot>
      `;
        }
        return html `
      <md-menu-item
          @close-menu=${(e) => void this.fireTriggerEvent(e)}
          .keepOpen=${keepOpen}
          .disabled=${this.disabled}
          .tabIndex=${this.tabIndex}
           ?selected=${!!this.missedPropertySets.selected}
           typeahead-text=${ifDefined(this.missedPropertySets.typeaheadText)}
          .type=${this.type}>
        <div slot="headline" id="headline">${this.headline}</div>
        ${startSlot}
        ${endSlot}
      </md-menu-item>
      `;
    }
    // This is just in case `delegatesFocus` doesn't do what is intended (which
    // is unfortunately often across browser updates).
    focus() {
        this.renderRoot.querySelector('md-menu-item')?.focus();
    }
}
customElements.define('cros-menu-item', MenuItem);
