import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="common cr-shared-style cr-radio-button-style">#container{align-items:center;display:flex;flex:1;flex-flow:row nowrap;height:100%;justify-content:space-between;padding-inline-end:var(--cr-icon-ripple-padding);padding-inline-start:14px}#labelWrapper{margin-inline-start:var(--cr-radio-button-label-spacing,20px)}.primary-text{color:var(--cros-text-color-primary);font:var(--cros-body-2-font)}iron-icon{height:20px;width:20px}</style>

<div id="container">
  
  <div class="disc-wrapper" aria-hidden="true">
    <div class="disc-border"></div>
    <div class="disc"></div>
  </div>

  <div id="labelWrapper" aria-hidden="true">
    <div class="primary-text">[[getItemName_(topicSource)]]</div>
    <div class="cr-secondary-text">
      [[getItemDescription_(topicSource, hasGooglePhotosAlbums)]]
    </div>
  </div>

  <iron-icon icon="cr:chevron-right" aria-hidden="true"></iron-icon>
</div>
<!--_html_template_end_-->`;
}
