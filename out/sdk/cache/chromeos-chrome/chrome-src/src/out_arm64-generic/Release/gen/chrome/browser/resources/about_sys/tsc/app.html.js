import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style>h1,h2{margin:0}#header{background:#3c6feb;border:1px solid #3a75bd;border-radius:6px;margin-bottom:9px;overflow:hidden;padding:6px 0;text-shadow:0 0 2px #000}#header h1{color:#fff;display:inline;font-size:.92rem;font-weight:700}#header h1::before{-webkit-mask-image:url(chrome://resources/images/icon_settings.svg);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:24px;background-color:#fff;content:'';display:inline-block;height:20px;vertical-align:middle;width:37px}#header p{color:#fff;display:inline;font-size:.72rem;font-style:italic;padding-inline-start:6px}#second-row{display:flex;gap:.5rem}#second-row h2{color:#3a75bd;display:inline-block;font-size:.92rem;font-weight:400}#spinner{display:none;background-image:url(chrome://resources/images/throbber_small.svg);background-size:100%;height:20px;width:20px}:host([loading_]) #spinner{display:block}log-entry:nth-child(odd){background:#eff3ff}</style>

<div id="header">
  <h1>$i18n{title}</h1>
  <p>$i18n{description}</p>
</div>

<div id="second-row">
  <h2 id="tableTitle">$i18n{tableTitle}</h2>
  <button on-click="onExpandAllClick_">$i18n{expandAllBtn}</button>
  <button on-click="onCollapseAllClick_">$i18n{collapseAllBtn}</button>
</div>

<p id="status"></p>
<div id="spinner"></div>

<div>
  <template is="dom-repeat" items="[[logs_]]">
    <log-entry log="[[item]]" role="row"></log-entry>
  </template>
</div>
<!--_html_template_end_-->`;
}
