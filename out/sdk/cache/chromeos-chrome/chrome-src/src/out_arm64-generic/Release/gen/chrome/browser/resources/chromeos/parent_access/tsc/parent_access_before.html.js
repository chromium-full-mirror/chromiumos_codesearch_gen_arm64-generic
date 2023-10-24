import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cros-color-overrides">#action-button,#action-button-jelly{margin-inline-start:8px}#before-screen{box-sizing:border-box;display:flex;flex-direction:column;height:100%;justify-content:flex-start;padding:26px 24px 20px}#before-screen-buttons,#before-screen-buttons-jelly{display:flex;flex-direction:row-reverse;margin-top:auto;width:100%}#illustration{height:96px;width:96px}:host-context(body.jelly-enabled) #before-screen-buttons{display:none}:host-context(body:not(.jelly-enabled)) #before-screen-buttons-jelly{display:none}</style>

<parent-access-template>
  <span slot="main">
    <div id="before-screen">
      <picture>
        <source srcset="images/request_approval_dark.svg" media="(prefers-color-scheme: dark)">
        <img src="images/request_approval.svg" id="illustration" alt="">
      </picture>
      <div id="before-screen-body" aria-live="polite"></div>
      <div id="before-screen-buttons">
        <cr-button class="action-button" id="action-button" on-click="showParentAccessUi">
          $i18n{askInPersonButtonText}
        </cr-button>
      </div>
      <div id="before-screen-buttons-jelly">
        <cros-button button-style="primary" label="$i18n{askInPersonButtonText}" id="action-button-jelly" on-click="showParentAccessUi">
        </cros-button>
      </div>
    </div>
  </span>
</parent-access-template>
<!--_html_template_end_-->`;
}
