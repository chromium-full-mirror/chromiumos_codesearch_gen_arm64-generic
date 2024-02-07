import {html} from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import 'chrome://resources/ash/common/cr_elements/cros_color_overrides.css.js';
import 'chrome://resources/ash/common/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/ash/common/cr_elements/cr_shared_vars.css.js';

const styleMod = document.createElement('dom-module');
styleMod.appendChild(html`
  <template>
    <style include="cr-shared-style cros-color-overrides">

/* Common styles for network elements. */

:host {
  /* Margin for the show/hide password icon */
  --network-control-margin: 40px;
}

.property-box {
  align-items: center;
  display: flex;
  min-height: var(--cr-section-min-height);
}

.property-box.hr {
  border-top: var(--cr-separator-line);
}

.property-box.indented {
  margin-inline-start: var(--cr-section-padding);
}

.property-box.single-column {
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}

.property-box.stretch {
  align-items: stretch;
}

.property-box.two-line {
  min-height: var(--cr-section-two-line-min-height);
}

.property-box > .start {
  align-items: center;
  flex: auto;
}

.property-box > .middle {
  align-items: center;
  flex: auto;
  padding-inline-start: 16px;
}

cr-input {
  --cr-input-error-display: none;
  margin-bottom: var(--cr-form-field-bottom-spacing);
}

.network-attribute-container {
  align-items: center;
  display: flex;
  margin: 5px;
}

.network-attribute-label {
  flex: 1;
  padding-inline-start: 10px;
}

.network-attribute-value {
  flex: 1;
}

.type-icon {
  height: var(--cr-icon-size);
  width: var(--cr-icon-size);
}
    </style>
  </template>
`.content);
styleMod.register('network-shared');