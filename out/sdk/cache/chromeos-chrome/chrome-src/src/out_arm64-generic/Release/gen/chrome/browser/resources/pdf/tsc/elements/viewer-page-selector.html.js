import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_-->    <style>#content{align-items:center;color:#fff;direction:ltr;display:flex;font-size:.81rem;text-align:center;--page-selector-spacing:4px}#pageSelector::selection{background-color:var(--viewer-text-input-selection-color)}#pagelength,input{width:calc(max(2,var(--page-length-digits)) * 1ch + 1px)}input{background:rgba(0,0,0,.5);border:none;color:#fff;font-family:inherit;line-height:inherit;outline:0;padding:0 var(--page-selector-spacing);text-align:center}#divider{margin:0 var(--page-selector-spacing)}</style>
    <div id="content">
      <input part="input" type="text" id="pageSelector" value="[[pageNo]]" on-pointerup="select" on-input="onInput_" on-change="pageNoCommitted" aria-label="$i18n{labelPageNumber}">
      <span id="divider">/</span>
      <span id="pagelength">[[docLength]]</span>
    </div>
<!--_html_template_end_-->`;
}
