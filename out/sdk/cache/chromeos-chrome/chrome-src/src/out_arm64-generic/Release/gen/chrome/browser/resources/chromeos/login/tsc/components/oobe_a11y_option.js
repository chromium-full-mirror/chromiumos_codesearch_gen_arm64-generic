// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/ash/common/cr_elements/cros_color_overrides.css.js';
import '//resources/ash/common/cr_elements/cr_toggle/cr_toggle.js';
import '//resources/ash/common/cr_elements/cr_shared_vars.css.js';
import './common_styles/oobe_common_styles.css.js';
import { html, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
/** @polymer */
export class OobeA11yOption extends PolymerElement {
    static get is() {
        return 'oobe-a11y-option';
    }
    static get template() {
        return html `<!--_html_template_start_-->
<!--
Copyright 2021 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->

<style include="oobe-common-styles cros-color-overrides">
  :host {
    display: flex;
    min-height: 0;
    width: 100%;
  }

  #elementBox {
    width: inherit;
  }

  cr-toggle {
    align-self: center;
    margin-inline-end: 12px;
  }

  #titleContainer ::slotted(*) {
    color: var(--cros-text-color-primary);
  }

  :host-context(.jelly-enabled) #titleContainer ::slotted(*) {
    color: var(--oobe-text-color);
  }

  .display-value ::slotted(*) {
    color: var(--cros-color-secondary);
  }

  :host-context(.jelly-enabled) .display-value ::slotted(*) {
    color: var(--oobe-subheader-text-color);
  }
</style>
<div id="elementBox" class="layout horizontal">
  <div class="flex layout vertical center-justified">
    <div id="titleContainer">
      <slot name="title"></slot>
    </div>
    <div class="display-value" hidden="[[!checked]]" aria-hidden="true">
      <slot name="checked-value"></slot>
    </div>
    <div class="display-value" hidden="[[checked]]" aria-hidden="true">
      <slot  name="unchecked-value"></slot>
    </div>
  </div>
  <cr-toggle id="button" checked="{{checked}}"
      aria-labeledby="titleContainer"
      aria-label$="[[labelForAria]]">
  </cr-toggle>
</div>
<!--_html_template_end_-->`;
    }
    static get properties() {
        return {
            /**
             * If cr-toggle is checked.
             */
            checked: {
                type: Boolean,
            },
            /**
             * Chrome message handling this option.
             */
            chromeMessage: {
                type: String,
            },
            /**
             * ARIA-label for the button.
             *
             * Note that we are not using "aria-label" property here, because
             * we want to pass the label value but not actually declare it as an
             * ARIA property anywhere but the actual target element.
             */
            labelForAria: {
                type: String,
            },
        };
    }
    focus() {
        this.$.button.focus();
    }
}
customElements.define(OobeA11yOption.is, OobeA11yOption);
