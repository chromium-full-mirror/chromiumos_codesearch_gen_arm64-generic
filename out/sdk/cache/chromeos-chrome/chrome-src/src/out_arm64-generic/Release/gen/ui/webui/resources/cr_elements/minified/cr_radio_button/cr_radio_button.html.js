import{html}from"//resources/polymer/v3_0/polymer/polymer_bundled.min.js";export function getTemplate(){return html`<!--_html_template_start_-->    <style include="cr-radio-button-style cr-hidden-style"></style>

    <div aria-checked$="[[getAriaChecked_(checked)]]" aria-describedby="slotted-content" aria-disabled$="[[getAriaDisabled_(disabled)]]" aria-labelledby="label" class="disc-wrapper" id="button" role="radio" tabindex$="[[buttonTabIndex_]]" on-keydown="onInputKeydown_">
      <div class="disc-border"></div>
      <div class="disc"></div>
      <div id="overlay"></div>
    </div>

    <div id="labelWrapper">
      <span id="label" hidden$="[[!label]]" aria-hidden="true">[[label]]</span>
      <span id="slotted-content">
        <slot></slot>
      </span>
    </div>
<!--_html_template_end_-->`}