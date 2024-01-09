import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import './shared_vars.css.js';
const styleMod = document.createElement('dom-module');
styleMod.appendChild(html `
  <template>
    <style include="cr-shared-style">
a[href]{color:var(--cr-link-color)}.activity-message{color:var(--md-loading-message-color);font-size:123%;font-weight:500;margin-top:80px;text-align:center}.activity-subpage-header{display:flex;justify-content:flex-end;padding:12px 12px}.activity-table-headings{align-items:center;display:flex;flex-direction:row;font-weight:500;margin-inline-end:auto;min-height:calc(var(--cr-section-min-height) - var(--separator-gap));padding:0 var(--cr-section-padding)}.clear-activities-button{margin:0 8px}.safety-check-wrapper{flex:1;margin-inline-start:15px}.matching-restricted-sites-warning{align-items:flex-start;display:flex;flex-direction:row}.matching-restricted-sites-warning iron-icon{fill:var(--warning-color);margin-inline-end:8px;min-height:var(--cr-icon-size);min-width:var(--cr-icon-size)}.page-container{height:100%}.page-content{background-color:var(--cr-card-background-color);box-shadow:var(--cr-card-shadow);box-sizing:border-box;margin:auto;min-height:100%;padding-bottom:64px;width:var(--cr-toolbar-field-width)}.page-header{align-items:center;display:flex;height:40px;margin-bottom:12px;padding:8px 12px 0}.link-icon-button{align-items:center;display:flex;justify-content:center}.separator{border-inline-start:var(--cr-separator-line);flex-shrink:0;height:calc(var(--cr-section-min-height) - var(--separator-gap));margin-inline-end:var(--cr-section-padding);margin-inline-start:0}.site-favicon{background-size:100% 100%;height:var(--cr-icon-size);min-width:var(--cr-icon-size)}
    </style>
  </template>
`.content);
styleMod.register('shared-style');
