import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cros-color-overrides">:host{align-items:center;border:1px solid var(--cr-separator-color);border-radius:8px;column-gap:12px;display:flex;flex-shrink:0;margin:4px;outline-width:0;padding:12px}#keyboardShortcutIcon{height:48px;width:48px}#text{flex:1}h2{color:var(--cr-primary-text-color);font:var(--cros-headline-1-font);margin:0}.reminder-message{color:var(--cr-secondary-text-color);margin-top:4px}kbd{font-family:Roboto,sans-serif;font-weight:500}kbd>kbd{background-color:var(--cros-sys-surface_variant);background-image:linear-gradient(var(--cros-shortcut-background-gradient-color),var(--cros-shortcut-background-gradient-color));border-radius:12px;color:var(--cros-text-color-secondary);font:var(--cros-button-2-font);display:inline-block;height:20px;margin:0 4px;padding:0 6px}:not(kbd)>kbd{color:var(--cros-text-color-prominent)}</style>

<iron-icon id="keyboardShortcutIcon" icon="os-settings:keyboard-shortcut">
</iron-icon>

<div id="text">
  <h2>[[header]]</h2>
  <template is="dom-repeat" items="[[body]]" as="message">
    <div id="[[getIdForIndex_(index)]]" aria-hidden="true" class="reminder-message" inner-h-t-m-l="[[message]]">
    </div>
  </template>
</div>

<cr-button on-click="onDismissClick_" id="dismiss" aria-describedby="dismiss" aria-labelledby$="[[getBodyIds_(body)]]">
  $i18n{dismiss}
</cr-button>
<!--_html_template_end_-->`;
}
