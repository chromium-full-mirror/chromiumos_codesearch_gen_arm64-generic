import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-shared-style settings-shared">:host{display:block;padding:8px 16px;--separator-line-height:16px;--animation-duration:300ms}#header-wrapper{align-items:center;display:flex}#header-text-wrapper{flex-direction:column;flex:1;margin-inline-end:16px}#header,#subheader,.display-name{font-size:.8125rem}#header{font-weight:500}#header-wrapper{min-height:calc(3em * 1.54)}iron-icon{--iron-icon-height:20px;--iron-icon-width:20px}iron-icon.green{--iron-icon-fill-color:var(--google-green-700)}iron-icon.blue{--iron-icon-fill-color:var(--google-blue-600)}@media (prefers-color-scheme:dark){iron-icon.green{--iron-icon-fill-color:var(--google-green-300)}iron-icon.blue{--iron-icon-fill-color:var(--google-blue-300)}}.list-item{--cr-icon-button-margin-end:initial;clip-path:polygon(0 0,0 100%,100% 100%,100% 0)}.display-name{flex:1;max-width:100%}#header-icon,.item-icon,site-favicon{padding-inline-end:16px}#line{box-sizing:border-box;height:var(--separator-line-height);border-bottom:1px solid var(--google-grey-300);flex:1}.link a[href]{text-decoration:none}@keyframes line-hiding-animation{0%{height:var(--separator-line-height);opacity:1}100%{height:0;opacity:0;visibility:hidden}}@keyframes item-hiding-animation{0%{max-height:calc(1.6 * 2em + 2 * var(--cr-section-vertical-padding));opacity:1}100%{max-height:0;opacity:0;visibility:hidden}}#line,#siteList .list-item{display:none}#line.hiding,#line.showing,#siteList .list-item.hiding,#siteList .list-item.showing{display:flex}.hiding,.showing{animation-duration:var(--animation-duration);animation-fill-mode:forwards;animation-iteration-count:1;animation-name:item-hiding-animation;animation-timing-function:cubic-bezier(0,.8,0,1);min-height:0}.showing{animation-direction:reverse;animation-timing-function:cubic-bezier(1,0,1,.4)}#line.hiding,#line.showing{animation-name:line-hiding-animation}paper-tooltip{--paper-tooltip-min-width:max-content}</style>

<div id="header-wrapper">
  <iron-icon id="header-icon" icon="[[headerIcon]]" class$="[[headerIconColor]]">
  </iron-icon>
  <div id="header-text-wrapper">
    <div id="header">[[header]]</div>
    <div id="subheader" class="cr-secondary-text">[[subheader]]</div>
  </div>
  <slot name="button-container"></slot>
</div>

<template is="dom-if" if="[[sites.length]]">
  <div id="line"></div>
  <div id="siteList">
    <template is="dom-repeat" items="[[sites]]">
      <div class="list-item site-entry">
        <template is="dom-if" if="[[item.icon]]">
          <iron-icon class="item-icon" icon="[[item.icon]]"></iron-icon>
        </template>
        <template is="dom-if" if="[[!item.icon]]">
          <site-favicon url="[[item.origin]]"></site-favicon>
        </template>
        <div class="display-name cr-padded-text">
          <div class="site-representation">[[item.origin]]</div>
          <div class="cr-secondary-text link" inner-h-t-m-l="[[sanitizeInnerHtml_(item.detail)]]">
          </div>
        </div>
        <template is="dom-if" if="[[buttonIcon]]">
          <cr-icon-button iron-icon="[[buttonIcon]]" id="mainButton" on-click="onItemButtonClick_" actionable aria-label$="[[getButtonAriaLabelForOrigin_(item.origin)]]" on-focus="onShowTooltip_" on-mouseenter="onShowTooltip_">
          </cr-icon-button>
        </template>
        <template is="dom-if" if="[[moreActionVisible]]">
          <cr-icon-button class="icon-more-vert" id="moreActionButton" on-click="onMoreActionClick_" title="$i18n{moreActions}" aria-label$="[[getMoreButtonAriaLabelForOrigin_(item.origin)]]" actionable>
          </cr-icon-button>
        </template>
      </div>
    </template>
  </div>
  <paper-tooltip fit-to-visible-bounds manual-mode position="top" offset="3">
    [[buttonTooltipText]]
  </paper-tooltip>
</template>
<!--_html_template_end_-->`;
}
