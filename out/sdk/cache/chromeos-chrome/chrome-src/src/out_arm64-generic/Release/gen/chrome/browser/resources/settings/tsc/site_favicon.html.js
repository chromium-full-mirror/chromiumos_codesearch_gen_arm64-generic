import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_-->    <style>:host{--site-favicon-height:16px;--site-favicon-width:16px}#favicon{background-repeat:no-repeat;background-size:contain;border-radius:inherit;display:block;height:var(--site-favicon-height);width:var(--site-favicon-width)}</style>
    <div id="favicon" style="background-image:[[getBackgroundImage_(faviconUrl,url) ]]">
    </div>
<!--_html_template_end_-->`;
}
