import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="md-select cr-shared-style">:host{height:100%}.shortcut-card{background-color:var(--cr-card-background-color);border-radius:var(--cr-card-border-radius);box-shadow:var(--cr-card-shadow);color:var(--cr-primary-text-color);margin:0 auto 16px auto;padding-bottom:8px;width:var(--cr-toolbar-field-width)}.shortcut-card:last-of-type{margin-bottom:64px}#container{box-sizing:border-box;height:100%;padding-top:24px}.command-entry{align-items:start;display:flex;margin-bottom:-8px;padding-top:16px}.command-name{flex:1;margin-top:6px}.command-entry .md-select{line-height:22px;margin-inline-start:var(--cr-section-padding)}.card-title{align-items:center;border-bottom:var(--cr-separator-line);display:flex;margin-bottom:9px;padding:16px var(--cr-section-padding)}.icon{height:20px;margin-inline-end:20px;width:20px}.card-controls{margin-inline-end:20px;margin-inline-start:60px}</style>
<div id="container">
  <template is="dom-repeat" items="[[calculateShownItems_(items.*)]]">
    <div class="shortcut-card">
      <div class="card-title cr-title-text">
        <img class="icon" src="[[item.iconUrl]]" alt="">
        <span role="heading" aria-level="2">[[item.name]]</span>
      </div>
      <div class="card-controls">
        <template is="dom-repeat" items="[[item.commands]]" as="command">
          <div class="command-entry" command="[[command]]">
            <span class="command-name">[[command.description]]</span>
            <extensions-shortcut-input delegate="[[delegate]]" item="[[item]]" shortcut="[[command.keybinding]]" command="[[command]]">
            </extensions-shortcut-input>
            
            <select class="md-select" on-change="onScopeChanged_" aria-label="[[computeScopeAriaLabel_(item, command)]]" disabled$="[[computeScopeDisabled_(command)]]" value="[[
                    triggerScopeChange_(command.scope, CommandScope_)]]">
              <option value$="[[CommandScope_.CHROME]]">
                $i18n{shortcutScopeInChrome}
              </option>
              <option value$="[[CommandScope_.GLOBAL]]">
                $i18n{shortcutScopeGlobal}
              </option>
            </select>
          </div>
        </template>
      </div>
    </div>
  </template>
</div>
<!--_html_template_end_-->`;
}
