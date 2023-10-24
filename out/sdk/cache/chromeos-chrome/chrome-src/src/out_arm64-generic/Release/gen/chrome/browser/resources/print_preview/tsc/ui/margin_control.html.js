import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-input-style">:host{display:block;position:absolute;transition:opacity 150ms linear}:host([invisible]){opacity:0}:host([disabled]),:host([invisible]){pointer-events:none}:host([side=bottom]) #lineContainer,:host([side=top]) #lineContainer{cursor:ns-resize;padding:8px 0;width:100%}:host([side=left]) #lineContainer,:host([side=right]) #lineContainer{cursor:ew-resize;height:100%;padding:0 8px}#line{border:1px dashed var(--google-blue-500)}@media (prefers-color-scheme:dark){#line{border-color:var(--google-blue-300)}}:host([side=bottom]) #line,:host([side=top]) #line{width:100%}:host([side=left]) #line,:host([side=right]) #line{height:100%}#row-container{border-radius:4px;font-size:.8rem;min-height:25px;overflow:hidden;padding:1px;position:absolute}@media (prefers-color-scheme:light){#row-container{--cr-input-background-color:var(--cr-primary-text-color);--cr-input-color:white;background-color:var(--cr-primary-text-color);color:#fff}}@media (prefers-color-scheme:dark){#row-container{--cr-input-background-color:rgb(27, 28, 30);--cr-input-color:var(--cr-primary-text-color);background-color:#1b1c1e;color:var(--cr-primary-text-color)}}:host([side=top]) #row-container{left:50%;top:9px}:host([side=right]) #row-container{right:9px;top:50%}:host([side=bottom]) #row-container{bottom:9px;right:50%}:host([side=left]) #row-container{bottom:50%;left:9px}:host([disabled]) #row-container{opacity:var(--cr-disabled-opacity)}:host([invalid]) #input{caret-color:var(--cr-input-error-color)}:host([invalid]) #underline{border-color:var(--cr-input-error-color)}#input-container,#row-container{align-items:center;display:flex}#input-container{position:relative}#input{padding-inline-end:0;text-align:end;width:44px}#unit{padding-inline-end:8px}</style>
  <div id="lineContainer">
    <div id="line"></div>
  </div>
  <div id="row-container">
    <div id="input-container">
      <input id="input" disabled="[[disabled]]" aria-label$="[[i18n(side)]]" aria-hidden$="[[getAriaHidden_(invisible)]]" on-focus="onFocus_" on-blur="onBlur_" on-change="onInputChange_" data-timeout-delay="1000">
      <span id="unit">[[measurementSystem.unitSymbol]]</span>
    </div>
    <div id="underline"></div>
  </div>

<!--_html_template_end_-->`;
}
