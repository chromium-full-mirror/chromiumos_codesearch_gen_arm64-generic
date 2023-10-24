import{html}from"//resources/polymer/v3_0/polymer/polymer_bundled.min.js";export function getTemplate(){return html`<!--_html_template_start_-->
    <webview id="webView" src="{__data_url__}" on-contentload="onWebViewReady_" allowscaling>
    </webview>
<!--_html_template_end_-->`}