import { getTrustedHTML } from '//resources/js/static_types.js';
export function getTemplate() {
    return getTrustedHTML `<!--_html_template_start_--><style>:host{--tabstrip-tab-group-title-height:22px;--tabstrip-tab-group-title-margin:var(--tabstrip-tab-spacing);--tab-thumbnail-height-in-group:calc(var(--tabstrip-tab-thumbnail-height) -
      var(--tabstrip-tab-group-title-height) -
      var(--tabstrip-tab-group-title-margin));--tab-thumbnail-width-in-group:calc(var(--tab-thumbnail-height-in-group) *
      var(--tabstrip-tab-thumbnail-aspect-ratio))}:host(:empty:not([dragging])){display:none}:host([dragged-out_]){display:none}#tabGroup{border-radius:8px;box-shadow:0 0 0 2px rgb(var(--tabstrip-tab-group-color-rgb));padding:var(--tabstrip-tab-spacing)}#chipContainer{min-width:100%;position:relative;width:0}#chip{display:inline-block;height:var(--tabstrip-tab-group-title-height);margin-bottom:var(--tabstrip-tab-group-title-margin);max-width:100%}#chip:focus{outline:0}#title{background:rgb(var(--tabstrip-tab-group-color-rgb));border-radius:4px;box-sizing:border-box;color:rgb(var(--tabstrip-tab-group-text-color-rgb));display:inline-block;height:var(--tabstrip-tab-group-title-height);line-height:var(--tabstrip-tab-group-title-height);max-width:100%;overflow:hidden;padding:0 6px;text-overflow:ellipsis;white-space:nowrap}#title:empty{border-radius:50%;height:16px;margin-top:4px;width:16px}#chip:focus #title{box-shadow:0 0 0 2px var(--color-web-ui-tab-strip-focus-outline);outline:0}#dragHandle{height:100%;position:absolute;top:0;width:var(--tab-thumbnail-width-in-group)}#tabs{display:flex;min-width:fit-content}:host ::slotted(tabstrip-tab){--tabstrip-tab-thumbnail-height:var(--tab-thumbnail-height-in-group);--tabstrip-tab-thumbnail-width:var(--tab-thumbnail-width-in-group);--tabstrip-tab-height:calc(var(--tabstrip-tab-title-height) +
                              var(--tabstrip-tab-thumbnail-height));--tabstrip-tab-width:var(--tabstrip-tab-thumbnail-width)}:host([getting-drag-image_]) #dragImage{--drag-image-padding:25px;padding:var(--drag-image-padding);transform:translate(calc(var(--drag-image-x-direction,-1) * var(--drag-image-padding)),calc(-1 * var(--drag-image-padding)))}:host-context([dir=rtl]):host([getting-drag-image_]) #dragImage{--drag-image-x-direction:1}:host([getting-drag-image_]) #tabGroup{background:var(--color-web-ui-tab-strip-background);border-radius:var(--tabstrip-tab-border-radius);box-shadow:var(--tabstrip-tab-dragging-shadow);height:var(--tabstrip-tab-height);overflow:hidden;transform:scale(var(--tabstrip-tab-drag-image-scale))}:host([getting-drag-image_]) ::slotted(tabstrip-tab){--tabstrip-tab-active-border-color:var(--color-web-ui-tab-strip-tab-separator)}:host([getting-drag-image_]) ::slotted(tabstrip-tab:first-child){z-index:4}:host([getting-drag-image_]) ::slotted(tabstrip-tab:nth-child(2)),:host([getting-drag-image_]) ::slotted(tabstrip-tab:nth-child(3)),:host([getting-drag-image_]) ::slotted(tabstrip-tab:nth-child(4)),:host([getting-drag-image_]) ::slotted(tabstrip-tab:nth-child(5)){margin-inline-start:calc(-1 * var(--tabstrip-tab-width))}:host([getting-drag-image_]) ::slotted(tabstrip-tab:nth-child(2)){z-index:3}:host([getting-drag-image_]) ::slotted(tabstrip-tab:nth-child(3)){z-index:2}:host([getting-drag-image_]) ::slotted(tabstrip-tab:nth-child(4)){z-index:1}:host([getting-drag-image_]) ::slotted(tabstrip-tab:nth-child(5)){padding:0;z-index:0}:host([getting-drag-image_]) ::slotted(tabstrip-tab:nth-child(n+6)){display:none}:host([dragging]) #dragPlaceholder{background:var(--color-web-ui-tab-strip-tab-background);border-radius:var(--tabstrip-tab-border-radius);height:var(--tabstrip-tab-height);opacity:.5;width:var(--tabstrip-tab-width)}:host([dragging]) #dragImage{position:absolute;top:calc(100vh + var(--drag-image-padding))}:host([touch_pressed_]) #dragImage{transform:scale(1.1);transform-origin:center;transition-duration:.3s}</style>

<div id="dragPlaceholder"></div>

<div id="dragImage">
  <div id="tabGroup">
    <div id="chipContainer">
      <div id="chip" tabindex="0" role="button" aria-describedby="tabs">
        <div id="title"></div>
        <div id="dragHandle" draggable="true"></div>
      </div>
    </div>
    <div id="tabs">
      <slot></slot>
    </div>
  </div>
</div>
<!--_html_template_end_-->`;
}
