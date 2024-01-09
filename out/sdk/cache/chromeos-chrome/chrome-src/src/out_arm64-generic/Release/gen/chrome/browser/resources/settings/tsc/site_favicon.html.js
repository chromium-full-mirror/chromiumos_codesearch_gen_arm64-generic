import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_-->    <style>#favicon{background-repeat:no-repeat;background-size:contain;border-radius:var(--site-favicon-border-radius,inherit);display:block;height:var(--site-favicon-height,16px);width:var(--site-favicon-width,16px)}</style>
    <div id="favicon" style="background-image:[[getBackgroundImage_(faviconUrl,url,iconPath) ]]">
    </div>
<!--_html_template_end_-->`;
}
