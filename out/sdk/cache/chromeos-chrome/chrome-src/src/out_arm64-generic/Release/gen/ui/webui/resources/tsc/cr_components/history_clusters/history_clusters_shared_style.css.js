import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import './shared_vars.css.js';
const styleMod = document.createElement('dom-module');
styleMod.appendChild(html `
  <template>
    <style include="cr-shared-style cr-hidden-style">
.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pill{border:1px solid var(--border-color);border-radius:calc(var(--pill-height)/ 2);box-sizing:border-box;font-size:.875rem;height:var(--pill-height);line-height:1.5}:host-context([chrome-refresh-2023]) .pill{font-size:.75rem}.pill-icon-start{padding-inline-end:var(--pill-padding-text);padding-inline-start:var(--pill-padding-icon)}.pill-icon-start .icon{margin-inline-end:8px}:host-context([chrome-refresh-2023]) .pill-icon-start .icon{margin-inline-end:4px}.pill-icon-end{padding-inline-end:var(--pill-padding-icon);padding-inline-start:var(--pill-padding-text)}.pill-icon-end .icon{margin-inline-start:8px}.search-highlight-hit{--search-highlight-hit-background-color:none;--search-highlight-hit-color:none;font-weight:700}.timestamp-and-menu{align-items:center;display:flex;flex-shrink:0}.timestamp{color:var(--cr-secondary-text-color);flex-shrink:0}
    </style>
  </template>
`.content);
styleMod.register('history-clusters-shared-style');
