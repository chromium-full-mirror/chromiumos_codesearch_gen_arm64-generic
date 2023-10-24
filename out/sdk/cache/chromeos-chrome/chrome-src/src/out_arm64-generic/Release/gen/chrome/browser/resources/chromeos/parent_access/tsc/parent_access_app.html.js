import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cros-color-overrides"></style>
<cr-view-manager id="viewManager">
    <parent-access-before id="parent-access-before" slot="view">
    </parent-access-before>
    <parent-access-ui id="parent-access-ui" slot="view">
    </parent-access-ui>
    <parent-access-after id="parent-access-after" slot="view">
    </parent-access-after>
    <parent-access-disabled id="parent-access-disabled" slot="view">
    </parent-access-disabled>
    <parent-access-error id="parent-access-error" slot="view">
    </parent-access-error>
    <parent-access-offline id="parent-access-offline" slot="view">
    </parent-access-offline>
</cr-view-manager>
<!--_html_template_end_-->`;
}
