import {html} from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import '../oobe_vars/oobe_custom_vars.css.js';
import '../oobe_vars/oobe_shared_vars.css.js';
import './oobe_common_styles.css.js';

const styleMod = document.createElement('dom-module');
styleMod.appendChild(html`
  <template>
    <style include="oobe-common-styles">

        :host(:not([hidden])) {
          display: flex;
          min-height: 0;
        }

        :host {
          border-radius: 4px;
          box-shadow: unset;
          flex-direction: column;
          height: 100%;
          min-height: 0;
          position: relative;
          width: 100%;
        }

        .oobe-illustration {
          max-height: 100%;
          max-width: 100%;
          object-fit: contain;
        }

        .illustration-jelly {
          width: 100%;
          height: 100%;
        }

        .oobe-tos-webview {
          border: 1px solid var(--cros-app-shield-color);
          border-radius: 4px;
          padding: 13px 0;
        }
        :host-context(.jelly-enabled) .oobe-tos-webview {
          border: medium none white;
          border-radius: 16px;
          overflow: hidden;
          padding: 0;
        }

        /* Center-align both vertically and horizontally */
        .content-centered {
          margin: auto;
        }

        /* Center-align vertically in landscape mode */
        :host-context([orientation=horizontal]) .landscape-vertical-centered {
          margin: auto 0;
        }

        /* Align with header in landscape mode */
        :host-context([orientation=horizontal]) .landscape-header-aligned {
          padding-top: calc(var(--oobe-adaptive-dialog-header-top-padding)
              + var(--oobe-adaptive-dialog-icon-size)
              + var(--oobe-adaptive-dialog-title-top-padding));
        }
        :host-context(.jelly-enabled[orientation=horizontal])
        .landscape-header-aligned {
          padding-top: calc(var(--oobe-adaptive-dialog-icon-size)
              + var(--oobe-adaptive-dialog-item-vertical-padding));
        }
        :host-context(.jelly-enabled[orientation=vertical])
        .landscape-header-aligned {
          padding-top: var(--oobe-adaptive-dialog-item-vertical-padding);
        }

        /* TODO(b/268463435) Remove during Jelly cleanup */
        /* Center-align horizontally in portrait mode */
        :host-context([orientation=vertical]) .portrait-horizontal-centered {
          margin: 0 auto;
        }
    </style>
  </template>
`.content);
styleMod.register('oobe-dialog-host-styles');