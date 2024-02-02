import { html } from '//resources/lit/v3_0/lit.rollup.js';
import { nothing } from '//resources/lit/v3_0/lit.rollup.js';
export function getHtml() {
    return html `<!--_html_template_start_-->
<dialog id="dialog" part="dialog" @close="${this.onNativeDialogClose_}" role="application" aria-roledescription="${this.roleDescription || nothing}">
  <div id="wrapper" class="item-wrapper" role="menu" tabindex="-1" aria-label="${this.accessibilityLabel || nothing}">
    <slot id="contentNode" @slotchange="${this.onSlotchange_}"></slot>
  </div>
</dialog>
<!--_html_template_end_-->`;
}
