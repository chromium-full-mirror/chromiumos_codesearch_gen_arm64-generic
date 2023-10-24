import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style>:host{background:var(--emoji-picker-container-color);border-radius:8px;box-shadow:var(--cros-elevation-2-shadow,--cr-elevation-2);display:grid;grid-template-columns:max-content max-content max-content;grid-template-rows:max-content max-content;height:fit-content;padding:4px;position:relative;width:fit-content;z-index:100}#grid-base-emoji{display:flex;flex-direction:column-reverse;grid-column:1;grid-row:1/span 2}#grid-skin-tone-top{display:flex;flex-direction:row;gap:var(--emoji-spacing);grid-column:3;grid-row:1}#grid-skin-tone-left{display:flex;flex-direction:column;grid-column:2;grid-row:2}.skin-tone>emoji-button{clip-path:circle(4px)}#grid-variants{display:flex;flex-direction:column;grid-column:3;grid-row:2;width:fit-content}.variant-row{display:flex;flex-direction:row;gap:var(--emoji-spacing);height:var(--emoji-size)}</style>



<div id="grid-base-emoji">
  <template is="dom-if" if="[[showBaseEmoji]]">
    <emoji-button emoji="[[baseEmoji]]"></emoji-button>
  </template>
</div>

<div id="grid-skin-tone-top" class="skin-tone">
  <template is="dom-if" if="[[showSkinTones]]">
    
    <emoji-button emoji="&#x1F3FB;" disabled="disabled"></emoji-button>
    <emoji-button emoji="&#x1F3FC;" disabled="disabled"></emoji-button>
    <emoji-button emoji="&#x1F3FD;" disabled="disabled"></emoji-button>
    <emoji-button emoji="&#x1F3FE;" disabled="disabled"></emoji-button>
    <emoji-button emoji="&#x1F3FF;" disabled="disabled"></emoji-button>
  </template>
</div>

<div id="grid-skin-tone-left" class="skin-tone">
  <template is="dom-if" if="[[showSkinTones]]">
    <emoji-button emoji="&#x1F3FB;" disabled="disabled"></emoji-button>
    <emoji-button emoji="&#x1F3FC;" disabled="disabled"></emoji-button>
    <emoji-button emoji="&#x1F3FD;" disabled="disabled"></emoji-button>
    <emoji-button emoji="&#x1F3FE;" disabled="disabled"></emoji-button>
    <emoji-button emoji="&#x1F3FF;" disabled="disabled"></emoji-button>
  </template>
</div>

<div id="grid-variants">
  <div id="fakeFocusTarget" tabindex="-1"></div>
  <template is="dom-repeat" items="[[variantRows]]" as="row">
    <div class="variant-row">
      <template is="dom-repeat" items="[[row]]" as="emoji">
        <emoji-button emoji="[[emoji.string]]" variant base="[[baseEmoji]]" all-variants="[[variants]]" tooltip="[[tooltip]]">
        </emoji-button>
      </template>
    </div>
  </template>
</div>
<!--_html_template_end_-->`;
}
