import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="md-select">:host{display:block;position:relative}.md-select{text-align:start}#dropdown{display:none}:host([expanded_]) #dropdown{display:block;min-width:100%;position:absolute;z-index:999;background:#fff;border-radius:12px;box-shadow:var(--cr-elevation-3)}</style>

<button id="input" class="md-select" role="combobox" tabindex="0" aria-controls="dropdown" aria-expanded="[[expanded_]]" aria-haspopup="listbox" aria-activedescendant$="[[getAriaActiveDescendant_(highlightedElement_)]]" on-click="onInputClick_" on-focusout="onInputFocusout_">
  [[getInputLabel_(label, selectedElement_)]]
</button>
<div id="dropdown" role="listbox" on-click="onDropdownClick_" on-pointerdown="onDropdownPointerdown_">
  <slot></slot>
</div>
<!--_html_template_end_-->`;
}
