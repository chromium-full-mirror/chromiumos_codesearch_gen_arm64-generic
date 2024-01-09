/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import 'chrome://resources/mwc/@material/web/textfield/outlined-text-field.js';
import { css, html, LitElement, nothing } from '//resources/mwc/lit/index.js';
import { ifDefined } from '//resources/mwc/lit/index.js';
/**
 * Textfields have two variants that differ only by the container background,
 * designed to improve contrast depending on the color of the surface behind it:
 * 1) textfield-on-app-base (lighter background, app base)
 * 2) textfield-on-shaded (darker background, shaded base)
 *
 * Consumers of the component can use the `shaded` property to ensure that it
 * has the correct container color for their use case.
 */
const TEXTFIELD_CONTAINER_ON_BASE = css `var(--cros-sys-input_field_on_base)`;
const TEXTFIELD_CONTAINER_ON_SHADED = css `var(--cros-sys-input_field_on_shaded)`;
const ICON_COLOR = css `var(--cros-textfield-icon-color, var(--cros-sys-secondary))`;
/**
 * We need the outline to render on the outside of the textfield filled
 * container, which is an element we control. This adds an extra
 * 2px padding to the text to accomodate the extra space, as the
 * md-textfield does not support changing it's height, only line height.
 * These values are computed from the default values at
 * https://carbon.googleplex.com/google-material-3/pages/text-fields/specs
 * and adding on the outline width. Computed to
 */
const MD_TEXTFIELD_OUTLINE_WIDTH = 2;
const DEFAULT_TOP_BOTTOM_SPACE = 8;
const DEFAULT_LEFT_RIGHT_SPACE = 16;
const MD_FIELD_TOP_BOTTOM_SPACE_PX = css `${DEFAULT_TOP_BOTTOM_SPACE + MD_TEXTFIELD_OUTLINE_WIDTH}px`;
const MD_FIELD_LEFT_RIGHT_SPACE_PX = css `${DEFAULT_LEFT_RIGHT_SPACE + MD_TEXTFIELD_OUTLINE_WIDTH}px`;
/**
 * To account for the extra spacing around the textfield background and the
 * focus outline, we have to increase the corner radius by the outline width.
 */
const MD_TEXTFIELD_CONTAINER_CORNER_RADIUS = css `${8 + MD_TEXTFIELD_OUTLINE_WIDTH}px`;
/** Regex used for automatically stripping non numeric characters from input. */
const NON_INTEGER_REGEX = /\D/g;
/**
 * Textfield component. See the specs here:
 * https://www.figma.com/file/1XsFoZH868xLcLPfPZRxLh/CrOS-Next---Component-Library-%26-Spec?node-id=3227%3A25882&t=50tDpMdSJky6eT9O-0
 */
export class Textfield extends LitElement {
    /** @nocollapse */
    static { this.styles = css `
    :host {
      display: block;
    }

    :host(.focused) {
      outline: none;
    }

    :host([disabled]) .text-labels {
      opacity: var(--cros-disabled-opacity);
    }

    md-outlined-text-field {
      /** Base styles */
      --md-outlined-field-supporting-text-color: var(--cros-sys-on_surface);
      --md-outlined-field-supporting-text-leading-space: ${MD_TEXTFIELD_OUTLINE_WIDTH}px;
      --md-outlined-field-supporting-text-trailing-space: ${MD_TEXTFIELD_OUTLINE_WIDTH}px;
      --md-outlined-field-supporting-text-top-space: 8px;;
      --md-outlined-text-field-focus-caret-color: var(--cros-sys-primary);
      --md-outlined-text-field-container-shape-end-end: ${MD_TEXTFIELD_CONTAINER_CORNER_RADIUS};
      --md-outlined-text-field-container-shape-end-start: ${MD_TEXTFIELD_CONTAINER_CORNER_RADIUS};
      --md-outlined-text-field-container-shape-start-end: ${MD_TEXTFIELD_CONTAINER_CORNER_RADIUS};
      --md-outlined-text-field-container-shape-start-start: ${MD_TEXTFIELD_CONTAINER_CORNER_RADIUS};
      --md-outlined-text-field-bottom-space: 8px;
      --md-outlined-text-field-input-text-color: var(--cros-sys-on_surface);
      --md-outlined-text-field-input-text-placeholder-color: var(--cros-sys-secondary);
      --md-outlined-text-field-input-text-prefix-color: var(--cros-sys-on_surface);
      --md-outlined-text-field-input-text-suffix-color: var(--cros-sys-secondary);
      --md-outlined-text-field-input-text-suffix-leading-space: 8px;
      --md-outlined-text-field-input-text-font: var(--cros-body-2-font-family);
      --md-outlined-text-field-input-text-size: var(--cros-body-2-font-size);
      --md-outlined-text-field-input-text-line-height: var(--cros-body-2-line-height);
      --md-outlined-text-field-input-text-weight: var(--cros-body-2-font-weight);
      --md-outlined-text-field-outline-width: 0px;
      --md-outlined-text-field-supporting-text-font: var(--cros-label-2-font-family);
      --md-outlined-text-field-supporting-text-size: var(--cros-label-2-font-size);
      --md-outlined-text-field-supporting-text-line-height: var(--cros-label-2-line-height);
      --md-outlined-text-field-supporting-text-weight: var(--cros-label-2-font-weight);
      --md-outlined-text-field-top-space: 8px;
      --md-outlined-field-bottom-space: ${MD_FIELD_TOP_BOTTOM_SPACE_PX};
      --md-outlined-field-leading-space: ${MD_FIELD_LEFT_RIGHT_SPACE_PX};
      --md-outlined-field-top-space: ${MD_FIELD_TOP_BOTTOM_SPACE_PX};
      --md-outlined-field-trailing-space: ${MD_FIELD_LEFT_RIGHT_SPACE_PX};
      /** Disabled */
      --md-outlined-field-disabled-supporting-text-color: var(--cros-sys-on_surface);
      --md-outlined-text-field-disabled-input-text-color: var(--cros-sys-on_surface);
      --md-outlined-text-field-disabled-input-text-prefix-color: var(--cros-sys-on_surface);
      --md-outlined-text-field-disabled-input-text-suffix-color: var(--cros-sys-secondary);
      --md-outlined-text-field-disabled-outline-width: 0px;
      /** Error */
      --md-outlined-text-field-error-focus-caret-color: var(--cros-sys-primary);
      --md-outlined-text-field-error-focus-input-text-color: var(--cros-sys-on_surface);
      --md-outlined-text-field-error-focus-outline-color: var(--cros-sys-error);
      --md-outlined-text-field-error-hover-input-text-color: var(--cros-sys-on_surface);
      --md-outlined-text-field-error-hover-state-layer-opacity: 0;
      --md-outlined-text-field-error-hover-supporting-text-color: var(--cros-sys-error);
      --md-outlined-text-field-error-input-text-color: var(--cros-sys-on_surface);
      --md-outlined-text-field-error-supporting-text-color: var(--cros-sys-error);
      /** Focus */
      --md-outlined-field-focus-outline-color: var(--cros-sys-primary);
      --md-outlined-field-focus-outline-width: ${MD_TEXTFIELD_OUTLINE_WIDTH}px;
      --md-outlined-text-field-focus-outline-color: var(--cros-sys-primary);
      --md-outlined-text-field-focus-input-text-color: var(--cros-sys-on_surface);
      /** Hover */
      --md-outlined-text-field-hover-outline-width: 0px;
      --md-outlined-text-field-hover-supporting-text-color: var(--cros-sys-on_surface);
      --md-outlined-text-field-hover-input-text-color: var(--cros-sys-on_surface);
      --md-outlined-text-field-hover-state-layer-opacity: 0;
      width: 100%;
    }

    .text-labels {
      color: var(--cros-sys-on_surface);
    }

    :host(.focused) .text-labels {
      color: var(--cros-sys-primary);
    }

    /**
     * The .error class is applied on native constraint invalidation, and the
     * error attribute is set by clients, so we need to use both to style the
     * label correctly.
    */
    :host(:is(.error, [error])) .text-labels {
      color: var(--cros-sys-error);
    }

    #visible-label {
      font: var(--cros-label-1-font);
      padding-bottom: 8px;
      padding-inline-start: ${MD_TEXTFIELD_OUTLINE_WIDTH}px;
    }

    #main-container {
      position: relative;
    }

    #textfield-background {
      background-color: ${TEXTFIELD_CONTAINER_ON_BASE};
      border-radius: 8px;
      left: ${MD_TEXTFIELD_OUTLINE_WIDTH}px;
      min-height: 36px;
      position:absolute;
      right: ${MD_TEXTFIELD_OUTLINE_WIDTH}px;
      top: ${MD_TEXTFIELD_OUTLINE_WIDTH}px;
    }

    :host([shaded]) #textfield-background {
      background-color: ${TEXTFIELD_CONTAINER_ON_SHADED};
    }

    /**
     * Some md styling can override the color provided to the md-textfield, so
     * so we explicitly set it here as well.
     */
    ::slotted(cros-icon-button) {
      --cros-icon-button-color-override: ${ICON_COLOR};
    }

    ::slotted(svg) {
      fill: ${ICON_COLOR};
    }

    ::slotted(*) {
      color: ${ICON_COLOR};
    }
  `; }
    /** @nocollapse */
    static { this.shadowRootOptions = {
        ...LitElement.shadowRootOptions,
        delegatesFocus: true
    }; }
    /** @nocollapse */
    static { this.properties = {
        type: { type: String, attribute: true },
        shaded: { type: Boolean, reflect: true },
        value: { type: String, attribute: true },
        label: { type: String, attribute: true },
        ariaLabel: { type: String, reflect: true, attribute: 'aria-label' },
        suffix: { type: String, attribute: true },
        disabled: { type: Boolean, reflect: true },
        hint: { type: String, attribute: true },
        maxLength: { type: Number, attribute: true },
        placeholder: { type: String, attribute: true },
        min: { type: Number, attribute: true },
        max: { type: Number, attribute: true },
        autoValidate: { type: Boolean, attribute: true },
        errorMessage: { type: String, attribute: true },
        error: { type: Boolean, attribute: true },
        pattern: { type: String, attribute: true },
        autofix: { type: String, attribute: true },
        required: { type: Boolean, attribute: true },
    }; }
    /** @nocollapse */
    static { this.events = {
        /**
         * The textfield value changed via user input. Dispatched on blur/when a
         * changed value is committed.
         */
        CHANGE: 'change',
        /**
         * The textfield value changed via user input, but dispatched immediately on
         * keystroke/every value change.
         */
        INPUT: 'input',
        /** The entered textfield value is invalid.  */
        INVALID: 'invalid',
    }; }
    /** @export */
    get value() {
        return this.mdTextfield?.value || '';
    }
    set value(value) {
        // On first render the initial value is lost because mwcTextfield is not yet
        // rendered. Store it in `valueInitial` and set it in firstUpdated().
        this.valueInitial = value;
        if (this.mdTextfield) {
            this.mdTextfield.value = this.valueInitial;
            this.checkAndUpdateValidity();
        }
    }
    get mdTextfield() {
        return this.renderRoot?.querySelector('md-outlined-text-field') ||
            undefined;
    }
    constructor() {
        super();
        /**
         * When false, will use the darker container designed to sit on app-base. When
         * true, will use the lighter container colored designed for use with
         * app-base-shaded. Purely a cosmetic difference to improve contrast.
         * @export
         */
        this.shaded = false;
        /**
         * A copy of the value on initialization to ensure mdTextfield has the
         * correct value on first render.
         */
        this.valueInitial = '';
        /**
         * A copy of the last valid value we had, updated on change events. Used to
         * restore the textfield value when `autofix=preserve` is used.
         */
        this.lastValidValue = '';
        this.type = 'text';
        this.shaded = false;
        this.label = '';
        this.suffix = '';
        this.disabled = false;
        this.hint = '';
        this.maxLength = -1;
        this.autoValidate = false;
        this.min = -1;
        this.max = -1;
        this.errorMessage = '';
        this.error = false;
        this.pattern = '';
        this.placeholder = '';
        this.autofix = 'preserve';
        this.required = false;
    }
    async firstUpdated() {
        this.mdTextfield.value = this.valueInitial;
        // Run the logic to forward any slotted icons to the md-text-field internal
        // icon slots.
        this.handleIconChange();
    }
    update(changedProperties) {
        if (changedProperties.has('disabled')) {
            // Work around for b/315384008.
            this.renderRoot.querySelector('md-outlined-text-field')?.requestUpdate();
        }
        super.update(changedProperties);
    }
    render() {
        const ariaLabel = this.ariaLabel || this.label;
        const errorTextOrUndef = this.error && this.errorMessage ? this.errorMessage : undefined;
        const mdType = this.type === 'integer' ? 'number' : this.type;
        return html `
      ${this.maybeRenderLabel()}
      <div id="main-container">
        <div id="textfield-background"></div>
        <md-outlined-text-field
            ?disabled=${this.disabled}
            type=${mdType}
            aria-label=${ariaLabel}
            value=${this.value}
            suffix-text=${this.suffix}
            maxLength=${this.maxLength}
            min=${this.min > -1 ? this.min : nothing}
            max=${this.max > -1 ? this.max : nothing}
            ?required=${this.required}
            supporting-text=${this.hint}
            ?error=${this.error ?? nothing}
            error-text=${ifDefined(errorTextOrUndef)}
            pattern=${this.pattern}
            step=1
            placeholder=${this.placeholder}
            @focus=${this.toggleFocusStyle}
            @blur=${this.toggleFocusStyle}
            @change=${this.onChange}
            @input=${this.onInput}
            @invalid=${this.onInvalid}>
          <slot name="leading" @slotchange=${this.handleIconChange}></slot>
          <slot
              name="trailing"
              @slotchange=${this.handleIconChange}>
          </slot>
        </md-outlined-text-field>
      </div>
    `;
    }
    focusTextfield() {
        this.mdTextfield.focus();
    }
    blurTextfield() {
        this.mdTextfield.blur();
    }
    reportValidity() {
        const valid = this.mdTextfield.reportValidity();
        this.toggleErrorStyles(!valid);
        return valid;
    }
    maybeRenderLabel() {
        return this.label ?
            html `<div id="visible-label" class="text-labels">${this.label}</div>` :
            nothing;
    }
    handleIconChange() {
        const { leadingIcon, trailingIcon } = this.queryIconSlots();
        // When no icon in slot is given, we need to remove the slot attribute from
        // cros-icon-button, otherwise md-textfield will still render an empty
        // space.
        const leadingSlot = this.shadowRoot.querySelector('slot[name="leading"]');
        const trailingSlot = this.shadowRoot.querySelector('slot[name="trailing"]');
        if (leadingIcon) {
            leadingSlot.setAttribute('slot', 'leading-icon');
        }
        else {
            leadingSlot.removeAttribute('slot');
        }
        if (trailingIcon) {
            trailingSlot.setAttribute('slot', 'trailing-icon');
        }
        else {
            trailingSlot.removeAttribute('slot');
        }
    }
    checkAndUpdateValidity() {
        const valid = this.mdTextfield.reportValidity();
        this.toggleErrorStyles(!valid);
    }
    toggleErrorStyles(error) {
        this.classList.toggle('error', error);
    }
    toggleFocusStyle() {
        this.classList.toggle('focused');
    }
    // Sync the validity state here to ensure our visible label has the correct
    // styling, as there is no corresponding `valid` event dispatched.
    onChange() {
        // If the last committed value contained non numeric characters, we can
        // strip them out here.
        if (this.type === 'integer' && this.value.match(NON_INTEGER_REGEX)) {
            switch (this.autofix) {
                case 'clear':
                    this.value = '';
                    break;
                case 'strip':
                    this.value = this.value.replace(NON_INTEGER_REGEX, '');
                    break;
                case 'preserve':
                default:
                    this.value = this.lastValidValue;
            }
        }
        this.checkAndUpdateValidity();
        this.dispatchEvent(new Event('change', { bubbles: true }));
        this.lastValidValue = this.value;
    }
    onInput() {
        if (this.autoValidate) {
            this.checkAndUpdateValidity();
        }
    }
    onInvalid() {
        this.toggleErrorStyles(true);
        this.dispatchEvent(new Event('invalid', { bubbles: true }));
    }
    getSlottedIcon(slotName) {
        return this.querySelector(`*[slot="${slotName}"]`) !== null;
    }
    queryIconSlots() {
        return {
            leadingIcon: this.getSlottedIcon('leading'),
            trailingIcon: this.getSlottedIcon('trailing'),
        };
    }
}
customElements.define('cros-textfield', Textfield);
