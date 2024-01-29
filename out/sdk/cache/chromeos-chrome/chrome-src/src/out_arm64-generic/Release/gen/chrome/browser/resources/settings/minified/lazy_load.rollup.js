import{aR as PaperRippleMixin,E as EventTracker,b as assert,h as CrPolicyPrefMixin,I as I18nMixin,g as focusWithoutInk,G as getInstance,a as assertNotReached,aS as AnchorAlignment,O as OpenWindowProxyImpl,M as MetricsBrowserProxyImpl,aA as PrivacyElementInteractions,ay as CvcDeletionUserAction,aT as SettingsBooleanControlMixin,y as sanitizeInnerHtml,e as RouteObserverMixin,W as WebUiListenerMixin,P as PrefsMixin,aU as ClearBrowsingDataBrowserProxyImpl,L as SyncBrowserProxyImpl,a2 as FocusOutlineManager,r as routes,ad as StatusAction,_ as SearchEnginesBrowserProxyImpl,$ as ChoiceMadeLocation,K as FocusRowMixin,aa as ExtensionControlBrowserProxyImpl,aV as GlobalScrollTargetMixin,aP as SearchEnginesInteractions,aW as SiteSettingsMixin,q as ContentSettingsTypes,aX as ContentSettingProvider,s as ContentSetting,H as HatsBrowserProxyImpl,T as TrustSafetyInteraction,aM as PrivacySandboxBrowserProxyImpl,f as Router,w as PluralStringProxyImpl,aY as CardState,R as RelaunchMixin,o as SafetyHubBrowserProxyImpl,aI as SafetyHubSurfaces,u as SafetyHubEvent,A as PasswordManagerImpl,F as PasswordManagerPage,c as RestartType,aH as SafetyHubModuleType,B as BaseMixin,aZ as AllSitesAction2,a_ as SortMethod,az as DeleteBrowsingDataAction,a$ as AllSitesDialog,V as TooltipMixin,b0 as SiteSettingSource,aF as SafetyCheckUnusedSitePermissionsModuleInteractions,b1 as MODEL_UPDATE_DELAY_MS,b2 as isUndoKeyboardEvent,v as SafetyHubEntryPoint,b3 as CookiesExceptionType,b4 as SITE_EXCEPTION_WILDCARD,S as SiteSettingsPrefsBrowserProxyImpl,t as ChooserType,U as ListPropertyUpdateMixin,b5 as INVALID_CATEGORY_SUBTYPE,ae as syncPrefsIndividualDataTypes,b6 as HelpBubbleMixin,n as PrivacyPageBrowserProxyImpl,ac as PageStatus,b7 as CrPolicyIndicatorType,j as PrefControlMixin,l as listenOnce,Z as ResetBrowserProxyImpl,b8 as CookiePrimarySetting,x as CookieControlsMode,X as NetworkPredictionOptions,aE as SafetyCheckNotificationsModuleInteractions,p as SettingsState}from"./shared.rollup.js";export{b9 as CrCheckboxElement,an as CrDialogElement,ba as CrIconButtonElement,bb as CrInputElement,bc as CrLazyRenderElement,bd as CrTextareaElement,bx as HttpsFirstModeSetting,bl as PreloadingPageElement,bn as PrivacyGuideCompletionFragmentElement,bo as PrivacyGuideCookiesFragmentElement,bp as PrivacyGuideDescriptionItemElement,br as PrivacyGuideHistorySyncFragmentElement,bs as PrivacyGuideMsbbFragmentElement,bu as PrivacyGuideSafeBrowsingFragmentElement,bv as PrivacyGuideSearchSuggestionsFragmentElement,bm as PrivacyGuideStep,bw as PrivacyGuideWelcomeFragmentElement,by as SafeBrowsingSetting,bi as SecureDnsInputElement,bf as SecureDnsResolverType,bD as SettingsCategoryDefaultRadioGroupElement,bk as SettingsCollapseRadioButtonElement,bj as SettingsPageContentPageElement,bq as SettingsPrivacyGuideDialogElement,bt as SettingsPrivacyGuidePageElement,be as SettingsRadioGroupElement,bA as SettingsSafetyHubEntryPointElement,bB as SettingsSafetyHubModuleElement,bh as SettingsSecureDnsDialogElement,bg as SettingsSecureDnsElement,bz as SettingsSecurityPageElement,bC as SettingsSimpleConfirmationDialogElement,av as SettingsToggleButtonElement}from"./shared.rollup.js";import{html,PolymerElement,Debouncer,microTask,flush,afterNextRender}from"chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js";import{loadTimeData}from"chrome://resources/js/load_time_data.js";import{sendWithPromise}from"chrome://resources/js/cr.js";import"./strings.m.js";import"chrome://resources/mojo/mojo/public/js/bindings.js";function getTemplate$1A(){return html`<!--_html_template_start_-->    <style include="cr-hidden-style">:host{--cr-slider-active-color:var(--google-blue-600);--cr-slider-container-color:rgba(var(--google-blue-600-rgb), .24);--cr-slider-container-disabled-color:rgba(var(--google-grey-600-rgb), .24);--cr-slider-disabled-color:var(--google-grey-600);--cr-slider-knob-color-rgb:var(--google-blue-600-rgb);--cr-slider-knob-disabled-color:white;--cr-slider-marker-active-color:rgba(255, 255, 255, .54);--cr-slider-marker-color:rgba(26, 115, 232, .54);--cr-slider-marker-disabled-color:rgba(128, 134, 139, .54);--cr-slider-position-transition:80ms ease;--cr-slider-ripple-color:rgba(var(--cr-slider-knob-color-rgb), .25);-webkit-tap-highlight-color:transparent;cursor:default;height:32px;isolation:isolate;outline:0;padding:0 16px;user-select:none}@media (prefers-color-scheme:dark){:host{--cr-slider-active-color:var(--google-blue-300);--cr-slider-container-color:rgba(var(--google-blue-500-rgb), .48);--cr-slider-container-disabled-color:rgba(var(--google-grey-600-rgb), .48);--cr-slider-knob-color-rgb:var(--google-blue-300-rgb);--cr-slider-knob-disabled-color:var(--google-grey-900-white-4-percent);--cr-slider-marker-active-color:var(--google-blue-300);--cr-slider-marker-color:var(--google-blue-300);--cr-slider-marker-disabled-color:rgba(255, 255, 255, .54);--cr-slider-ripple-color:rgba(var(--cr-slider-knob-color-rgb), .4)}}:host,:host>#container{touch-action:none}#bar,#container{border-top-style:solid;border-top-width:2px}#container{border-top-color:var(--cr-slider-container-color);position:relative;top:16px}#container>div{position:absolute}#bar,#markers{top:-2px}#markers{display:flex;flex-direction:row;left:0;pointer-events:none;right:0}.active-marker,.inactive-marker{flex:1}#markers::after,#markers::before,.active-marker::after,.inactive-marker::after{border-radius:50%;content:'';display:block;height:2px;margin-inline-start:-1px;width:2px}#markers::before,.active-marker::after{background-color:var(--cr-slider-marker-active-color)}#markers::after,.inactive-marker::after{background-color:var(--cr-slider-marker-color)}#bar{border-top-color:var(--cr-slider-active-color)}:host([transiting_]) #bar{transition:width var(--cr-slider-position-transition)}#knobAndLabel{top:-1px}:host([transiting_]) #knobAndLabel{transition:margin-inline-start var(--cr-slider-position-transition)}#knob{background-color:rgb(var(--cr-slider-knob-color-rgb));border-radius:50%;box-shadow:0 1px 3px 0 rgba(0,0,0,.4);height:10px;outline:0;position:relative;transform:translate(-50%,-50%);width:10px}:host([is-rtl_]) #knob{transform:translate(50%,-50%)}#label{background:rgb(var(--cr-slider-knob-color-rgb));border-radius:.75em;bottom:22px;color:#fff;font-size:12px;line-height:1.5em;opacity:0;outline:1px transparent solid;padding:0 .67em;position:absolute;transform:translateX(-50%);transition:opacity 80ms ease-in-out;white-space:nowrap}:host([is-rtl_]) #label{transform:translateX(50%)}:host(:hover) #label,:host([show-label_]) #label{opacity:1}paper-ripple{--paper-ripple-opacity:var(--cr-slider-ripple-opacity, 1);color:var(--cr-slider-ripple-color);height:var(--cr-slider-ripple-size,32px);pointer-events:none;transition:color linear 80ms;transform:translate(-50%,-50%);top:50%;left:50%;width:var(--cr-slider-ripple-size,32px);z-index:var(--cr-slider-ripple-z-index,auto)}:host([disabled_]){pointer-events:none}:host([disabled_]) #container{border-top-color:var(--cr-slider-container-disabled-color)}:host([disabled_]) #bar{border-top-color:var(--cr-slider-disabled-color)}:host([disabled_]) #markers::after,:host([disabled_]) .inactive-marker::after{background-color:var(--cr-slider-marker-disabled-color)}:host([disabled_]) #knob{background-color:var(--cr-slider-disabled-color);border:2px solid var(--cr-slider-knob-disabled-color);box-shadow:unset}</style>
    <div id="container" hidden part="container">
      <div id="bar"></div>
      <div id="markers" hidden$="[[!markerCount]]">
        <template is="dom-repeat" items="[[getMarkers_(markerCount)]]">
          <div class$="[[getMarkerClass_(index, value, min, max,
                                         markerCount)]]"></div>
        </template>
      </div>
      <div id="knobAndLabel" on-transitionend="onTransitionEnd_">
        <div id="knob" part="knob"></div>
        <div id="label" part="label">[[label_]]</div>
      </div>
    </div>
<!--_html_template_end_-->`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function clamp(min,max,value){return Math.min(max,Math.max(min,value))}function getAriaValue(tick){if(Number.isFinite(tick)){return tick}const sliderTick=tick;return sliderTick.ariaValue!==undefined?sliderTick.ariaValue:sliderTick.value}const CrSliderElementBase=PaperRippleMixin(PolymerElement);class CrSliderElement extends CrSliderElementBase{constructor(){super(...arguments);this.deltaKeyMap_=null;this.draggingEventTracker_=null}static get is(){return"cr-slider"}static get template(){return getTemplate$1A()}static get properties(){return{disabled:{type:Boolean,value:false},disabled_:{type:Boolean,computed:"computeDisabled_(disabled, ticks.*)",reflectToAttribute:true,observer:"onDisabledChanged_"},dragging:{type:Boolean,value:false,notify:true},updatingFromKey:{type:Boolean,value:false,notify:true},keyPressSliderIncrement:{type:Number,value:1},markerCount:{type:Number,value:0},max:{type:Number,value:100},min:{type:Number,value:0},noKeybindings:{type:Boolean,value:false},snaps:{type:Boolean,value:false},ticks:{type:Array,value:()=>[]},value:Number,label_:{type:String,value:""},showLabel_:{type:Boolean,value:false,reflectToAttribute:true},isRtl_:{type:Boolean,value:false,reflectToAttribute:true},transiting_:{type:Boolean,value:false,reflectToAttribute:true}}}static get observers(){return["onTicksChanged_(ticks.*)","updateUi_(ticks.*, value, min, max)","onValueMinMaxChange_(value, min, max)","buildDeltaKeyMap_(isRtl_, keyPressSliderIncrement)"]}ready(){super.ready();this.setAttribute("role","slider");this.addEventListener("blur",this.hideRipple_);this.addEventListener("focus",this.showRipple_);this.addEventListener("keydown",this.onKeyDown_);this.addEventListener("keyup",this.onKeyUp_);this.addEventListener("pointerdown",this.onPointerDown_.bind(this))}connectedCallback(){super.connectedCallback();this.isRtl_=window.getComputedStyle(this)["direction"]==="rtl";this.draggingEventTracker_=new EventTracker}fire_(eventName,detail){this.dispatchEvent(new CustomEvent(eventName,{bubbles:true,composed:true,detail:detail}))}computeDisabled_(){return this.disabled||this.ticks.length===1}getMarkers_(){return new Array(Math.max(0,this.markerCount-1))}getMarkerClass_(index){const currentStep=(this.markerCount-1)*this.getRatio();return index<currentStep?"active-marker":"inactive-marker"}getRatio(){return(this.value-this.min)/(this.max-this.min)}stopDragging_(pointerId){this.draggingEventTracker_.removeAll();this.releasePointerCapture(pointerId);this.dragging=false;this.hideRipple_()}hideRipple_(){if(this.noink){return}this.getRipple().clear();this.showLabel_=false}showRipple_(){if(this.noink){return}if(!this.getRipple().holdDown){this.getRipple().showAndHoldDown()}this.showLabel_=true}onDisabledChanged_(){this.setAttribute("tabindex",this.disabled_?"-1":"0");this.blur()}onKeyDown_(event){if(this.disabled_||this.noKeybindings){return}if(event.metaKey||event.shiftKey||event.altKey||event.ctrlKey){return}let newValue;if(event.key==="Home"){newValue=this.min}else if(event.key==="End"){newValue=this.max}else if(this.deltaKeyMap_.has(event.key)){newValue=this.value+this.deltaKeyMap_.get(event.key)}if(newValue===undefined){return}this.updatingFromKey=true;if(this.updateValue_(newValue)){this.fire_("cr-slider-value-changed")}event.preventDefault();event.stopPropagation();this.showRipple_()}onKeyUp_(event){if(event.key==="Home"||event.key==="End"||this.deltaKeyMap_.has(event.key)){setTimeout((()=>{this.updatingFromKey=false}))}}onPointerDown_(event){if(this.disabled_||event.buttons!==1&&event.pointerType==="mouse"){return}this.dragging=true;this.transiting_=true;this.updateValueFromClientX_(event.clientX);this.showRipple_();this.setPointerCapture(event.pointerId);const stopDragging=this.stopDragging_.bind(this,event.pointerId);assert(!!this.draggingEventTracker_);this.draggingEventTracker_.add(this,"pointermove",(e=>{e.preventDefault();if(e.buttons!==1&&e.pointerType==="mouse"){stopDragging();return}this.updateValueFromClientX_(e.clientX)}));this.draggingEventTracker_.add(this,"pointercancel",stopDragging);this.draggingEventTracker_.add(this,"pointerdown",stopDragging);this.draggingEventTracker_.add(this,"pointerup",stopDragging);this.draggingEventTracker_.add(this,"keydown",(e=>{if(e.key==="Escape"||e.key==="Tab"||e.key==="Home"||e.key==="End"||this.deltaKeyMap_.has(e.key)){stopDragging()}}))}onTicksChanged_(){if(this.ticks.length>1){this.snaps=true;this.max=this.ticks.length-1;this.min=0}if(this.value!==undefined){this.updateValue_(this.value)}}onTransitionEnd_(){this.transiting_=false}onValueMinMaxChange_(){this.debouncer_=Debouncer.debounce(this.debouncer_,microTask,(()=>{if(this.value===undefined||this.min===undefined||this.max===undefined){return}this.updateValue_(this.value)}))}updateUi_(){const percent=`${this.getRatio()*100}%`;this.$.bar.style.width=percent;this.$.knobAndLabel.style.marginInlineStart=percent;const ticks=this.ticks;const value=this.value;if(ticks&&ticks.length>0&&Number.isInteger(value)&&value>=0&&value<ticks.length){const tick=ticks[this.value];this.label_=Number.isFinite(tick)?"":tick.label;const ariaValueNow=getAriaValue(tick);this.setAttribute("aria-valuetext",String(this.label_||ariaValueNow));this.setAttribute("aria-valuenow",ariaValueNow.toString());this.setAttribute("aria-valuemin",getAriaValue(ticks[0]).toString());this.setAttribute("aria-valuemax",getAriaValue(ticks.slice(-1)[0]).toString())}else{this.setAttribute("aria-valuetext",value!==undefined?value.toString():"");this.setAttribute("aria-valuenow",value!==undefined?value.toString():"");this.setAttribute("aria-valuemin",this.min.toString());this.setAttribute("aria-valuemax",this.max.toString())}}updateValue_(value){this.$.container.hidden=false;if(this.snaps){if(Math.abs(this.value-value)<.8){return false}value=Math.round(value)}value=clamp(this.min,this.max,value);if(this.value===value){return false}this.value=value;return true}updateValueFromClientX_(clientX){const rect=this.$.container.getBoundingClientRect();let ratio=(clientX-rect.left)/rect.width;if(this.isRtl_){ratio=1-ratio}if(this.updateValue_(ratio*(this.max-this.min)+this.min)){this.fire_("cr-slider-value-changed")}}buildDeltaKeyMap_(){const increment=this.keyPressSliderIncrement;const decrement=-this.keyPressSliderIncrement;this.deltaKeyMap_=new Map([["ArrowDown",decrement],["ArrowUp",increment],["PageDown",decrement],["PageUp",increment],["ArrowLeft",this.isRtl_?increment:decrement],["ArrowRight",this.isRtl_?decrement:increment]])}_createRipple(){this._rippleContainer=this.$.knob;const ripple=super._createRipple();ripple.id="ink";ripple.setAttribute("recenters","");ripple.classList.add("circle","toggle-ink");return ripple}}customElements.define(CrSliderElement.is,CrSliderElement);function getTemplate$1z(){return html`<!--_html_template_start_--><style include="cros-color-overrides">:host{display:inline-flex}cr-policy-pref-indicator{align-self:center;margin-inline-start:var(--cr-controlled-by-spacing)}#labels[disabled]{color:var(--cros-sys-disabled)}div.outer{align-items:stretch;display:flex;flex-direction:column;margin:8px 0;min-width:200px}#labels{display:flex;flex-direction:row;justify-content:space-between;margin:-4px 16px 0 16px}#labels>div{font-size:12px}#label-begin{margin-inline-end:4px}#label-end{margin-inline-start:4px}</style>
<template is="dom-if" if="[[pref.controlledBy]]" restamp>
  <cr-policy-pref-indicator pref="[[pref]]"></cr-policy-pref-indicator>
</template>
<div class="outer">
  <cr-slider id="slider" disabled$="[[disableSlider_]]" ticks="[[ticks]]" on-cr-slider-value-changed="onSliderChanged_" max="[[max]]" min="[[min]]" on-dragging-changed="onSliderChanged_" on-updating-from-key="onSliderChanged_" aria-roledescription$="[[getRoleDescription_()]]" aria-label$="[[labelAria]]" aria-disabled="[[ariaDisabled]]">
  </cr-slider>
  
  <div id="labels" disabled$="[[disableSlider_]]" aria-hidden="true">
    <div id="label-begin">[[labelMin]]</div>
    <div id="label-end">[[labelMax]]</div>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsSliderElementBase=CrPolicyPrefMixin(PolymerElement);class SettingsSliderElement extends SettingsSliderElementBase{static get is(){return"settings-slider"}static get template(){return getTemplate$1z()}static get properties(){return{pref:Object,ticks:{type:Array,value:()=>[]},scale:{type:Number,value:1},min:Number,max:Number,labelAria:String,labelMin:String,labelMax:String,disabled:Boolean,ariaDisabled:String,showMarkers:Boolean,disableSlider_:{computed:"computeDisableSlider_(pref.*, disabled, ticks.*)",type:Boolean},updateValueInstantly:{type:Boolean,value:true,observer:"onSliderChanged_"},loaded_:Boolean}}static get observers(){return["valueChanged_(pref.*, ticks.*, loaded_)"]}connectedCallback(){super.connectedCallback();this.loaded_=true}focus(){this.$.slider.focus()}getTickValue_(tick){return typeof tick==="object"?tick.value:tick}getTickValueAtIndex_(index){return this.getTickValue_(this.ticks[index])}onSliderChanged_(){if(!this.loaded_){return}if(this.$.slider.dragging&&!this.updateValueInstantly){return}const sliderValue=this.$.slider.value;let newValue;if(this.ticks&&this.ticks.length>0){newValue=this.getTickValueAtIndex_(sliderValue)}else{newValue=sliderValue/this.scale}this.set("pref.value",newValue)}computeDisableSlider_(){return this.disabled||this.isPrefEnforced()}valueChanged_(){if(this.pref===undefined||!this.loaded_||this.$.slider.dragging||this.$.slider.updatingFromKey){return}const numTicks=this.ticks.length;if(numTicks===1){this.$.slider.disabled=true;return}const prefValue=this.pref.value;if(numTicks===0){this.$.slider.value=prefValue*this.scale;return}assert(this.scale===1);const MAX_TICKS=10;this.$.slider.markerCount=this.showMarkers||numTicks<=MAX_TICKS?numTicks:0;const index=this.ticks.map((tick=>Math.abs(this.getTickValue_(tick)-prefValue))).reduce(((acc,diff,index)=>diff<acc.diff?{index:index,diff:diff}:acc),{index:-1,diff:Number.MAX_VALUE}).index;assert(index!==-1);if(this.$.slider.value!==index){this.$.slider.value=index}const tickValue=this.getTickValueAtIndex_(index);if(this.pref.value!==tickValue){this.set("pref.value",tickValue)}}getRoleDescription_(){return loadTimeData.getStringF("settingsSliderRoleDescription",this.labelMin,this.labelMax)}}customElements.define(SettingsSliderElement.is,SettingsSliderElement);
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class FontsBrowserProxyImpl{fetchFontsData(){return sendWithPromise("fetchFontsData")}static getInstance(){return instance$8||(instance$8=new FontsBrowserProxyImpl)}static setInstance(obj){instance$8=obj}}let instance$8=null;function getTemplate$1y(){return html`<!--_html_template_start_-->    <style include="cr-shared-style settings-shared iron-flex">#minimumSize{align-items:flex-end;display:flex;flex-direction:column}#minimumSizeFontPreview{text-align:end}div[id$=FontPreview]{line-height:initial}</style>
    <div class="cr-row first">
      <div class="flex cr-padded-text" aria-hidden="true">
        $i18n{fontSize}
      </div>
      <settings-slider id="sizeSlider" pref="{{prefs.webkit.webprefs.default_font_size}}" ticks="[[fontSizeRange_]]" label-aria="$i18n{fontSize}" label-min="$i18n{tiny}" label-max="$i18n{huge}">
      </settings-slider>
    </div>
    <div class="cr-row">
      <div class="flex cr-padded-text" aria-hidden="true">
        $i18n{minimumFont}
      </div>
      <div id="minimumSize">
        <settings-slider pref="{{prefs.webkit.webprefs.minimum_font_size}}" ticks="[[minimumFontSizeRange_]]" label-aria="$i18n{minimumFont}" label-min="$i18n{tiny}" label-max="$i18n{huge}">
        </settings-slider>
        <div id="minimumSizeFontPreview" style="font-size:[[computeMinimumFontSize_(prefs.webkit.webprefs.minimum_font_size.value) ]]px;font-family:'[[prefs.webkit.webprefs.fonts.standard.Zyyy.value]]'" hidden>
          [[computeMinimumFontSize_(
                  prefs.webkit.webprefs.minimum_font_size.value)]]:
          $i18n{quickBrownFox}
        </div>
      </div>
    </div>
    <div class="cr-row" aria-hidden="true">
      <h2>$i18n{standardFont}</h2>
    </div>
    <div class="list-frame">
      <div class="list-item">
        <settings-dropdown-menu class="start" label="$i18n{standardFont}" pref="{{prefs.webkit.webprefs.fonts.standard.Zyyy}}" menu-options="[[fontOptions_]]">
        </settings-dropdown-menu>
      </div>
      <div id="standardFontPreview" class="list-item cr-padded-text" style="font-size:[[prefs.webkit.webprefs.default_font_size.value]]px;font-family:'[[prefs.webkit.webprefs.fonts.standard.Zyyy.value]]'">
        [[prefs.webkit.webprefs.default_font_size.value]]:
        $i18n{quickBrownFox}
      </div>
    </div>
    <div class="cr-row" aria-hidden="true">
      <h2>$i18n{serifFont}</h2>
    </div>
    <div class="list-frame">
      <div class="list-item">
        <settings-dropdown-menu class="start" label="$i18n{serifFont}" pref="{{prefs.webkit.webprefs.fonts.serif.Zyyy}}" menu-options="[[fontOptions_]]">
        </settings-dropdown-menu>
      </div>
      <div id="serifFontPreview" class="list-item cr-padded-text" style="font-size:[[prefs.webkit.webprefs.default_font_size.value]]px;font-family:'[[prefs.webkit.webprefs.fonts.serif.Zyyy.value]]'">
        [[prefs.webkit.webprefs.default_font_size.value]]:
        $i18n{quickBrownFox}
      </div>
    </div>
    <div class="cr-row" aria-hidden="true">
      <h2>$i18n{sansSerifFont}</h2>
    </div>
    <div class="list-frame">
      <div class="list-item">
        <settings-dropdown-menu class="start" label="$i18n{sansSerifFont}" pref="{{prefs.webkit.webprefs.fonts.sansserif.Zyyy}}" menu-options="[[fontOptions_]]">
        </settings-dropdown-menu>
      </div>
      <div id="sansSerifFontPreview" class="list-item cr-padded-text" style="font-size:[[prefs.webkit.webprefs.default_font_size.value]]px;font-family:'[[prefs.webkit.webprefs.fonts.sansserif.Zyyy.value]]'">
        [[prefs.webkit.webprefs.default_font_size.value]]:
        $i18n{quickBrownFox}
      </div>
    </div>
    <div class="cr-row" aria-hidden="true">
      <h2>$i18n{fixedWidthFont}</h2>
    </div>
    <div class="list-frame">
      <div class="list-item">
        <settings-dropdown-menu class="start" label="$i18n{fixedWidthFont}" pref="{{prefs.webkit.webprefs.fonts.fixed.Zyyy}}" menu-options="[[fontOptions_]]">
        </settings-dropdown-menu>
      </div>
      <div id="fixedFontPreview" class="list-item cr-padded-text" style="font-size:[[prefs.webkit.webprefs.default_fixed_font_size.value]]px;font-family:'[[prefs.webkit.webprefs.fonts.fixed.Zyyy.value]]'">
        [[prefs.webkit.webprefs.default_fixed_font_size.value]]:
        $i18n{quickBrownFox}
      </div>
    </div>
    <div class="cr-row" aria-hidden="true">
      <h2>$i18n{mathFont}</h2>
    </div>
    <div class="list-frame">
      <div class="list-item">
        <settings-dropdown-menu class="start" label="$i18n{mathFont}" pref="{{prefs.webkit.webprefs.fonts.math.Zyyy}}" menu-options="[[fontOptions_]]">
        </settings-dropdown-menu>
      </div>
      
      <div id="mathFontPreview" class="list-item cr-padded-text" style="font-size:[[prefs.webkit.webprefs.default_font_size.value]]px;font-family:'[[prefs.webkit.webprefs.fonts.math.Zyyy.value]]'">
        [[prefs.webkit.webprefs.default_font_size.value]]:
        <math style="font:inherit" displaystyle="true">
          <mrow>
            <msqrt>
              <mrow>
                <munderover>
                  <mo>∑</mo>
                  <mrow>
                    <mi>n</mi>
                    <mo>=</mo>
                    <mn>1</mn>
                  </mrow>
                  <mn>∞</mn>
                </munderover>
                <mfrac>
                  <mn>10</mn>
                  <msup>
                    <mi>n</mi>
                    <mn>4</mn>
                  </msup>
                </mfrac>
              </mrow>
            </msqrt>
            <mo>=</mo>
            <mrow>
              <msubsup>
                <mo>∫</mo>
                <mn>0</mn>
                <mn>∞</mn>
              </msubsup>
              <mfrac>
                <mrow>
                  <mn>2</mn>
                  <mi>x</mi>
                  <mrow>
                    <mi>d</mi>
                    <mi>x</mi>
                  </mrow>
                </mrow>
                <mrow>
                  <msup>
                    <mi>e</mi>
                    <mi>x</mi>
                  </msup>
                  <mo>−</mo>
                  <mn>1</mn>
                </mrow>
              </mfrac>
            </mrow>
            <mo>=</mo>
            <mfrac>
              <msup>
                <mi>π</mi>
                <mn>2</mn>
              </msup>
              <mn>3</mn>
            </mfrac>
            <mo>∊</mo>
            <mi>ℝ</mi>
          </mrow>
        </math>
      </div>
    </div>

<!--_html_template_end_-->`}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const FONT_SIZE_RANGE=[9,10,11,12,13,14,15,16,17,18,20,22,24,26,28,30,32,34,36,40,44,48,56,64,72];const MINIMUM_FONT_SIZE_RANGE=[0,6,7,8,9,10,11,12,13,14,15,16,17,18,20,22,24];function ticksWithLabels(ticks){return ticks.map((x=>({label:`${x}`,value:x,ariaValue:undefined})))}class SettingsAppearanceFontsPageElement extends PolymerElement{constructor(){super(...arguments);this.browserProxy_=FontsBrowserProxyImpl.getInstance()}static get is(){return"settings-appearance-fonts-page"}static get template(){return getTemplate$1y()}static get properties(){return{fontOptions_:Object,fontSizeRange_:{readOnly:true,type:Array,value:ticksWithLabels(FONT_SIZE_RANGE)},minimumFontSizeRange_:{readOnly:true,type:Array,value:ticksWithLabels(MINIMUM_FONT_SIZE_RANGE)},prefs:{type:Object,notify:true}}}static get observers(){return["onMinimumSizeChange_(prefs.webkit.webprefs.minimum_font_size.value)"]}ready(){super.ready();this.browserProxy_.fetchFontsData().then(this.setFontsData_.bind(this))}setFontsData_(response){const fontMenuOptions=[];for(const fontData of response.fontList){fontMenuOptions.push({value:fontData[0],name:fontData[1]})}this.fontOptions_=fontMenuOptions}computeMinimumFontSize_(){const prefValue=this.get("prefs.webkit.webprefs.minimum_font_size.value");return prefValue||MINIMUM_FONT_SIZE_RANGE[0]}onMinimumSizeChange_(){this.$.minimumSizeFontPreview.hidden=this.computeMinimumFontSize_()<=0}}customElements.define(SettingsAppearanceFontsPageElement.is,SettingsAppearanceFontsPageElement);function getTemplate$1x(){return html`<!--_html_template_start_-->    <style include="cr-shared-style settings-shared md-select">:host{white-space:nowrap}.address-row{display:flex}.address-column{margin-inline-end:16px;width:calc((var(--cr-default-input-max-width) - 16px)/ 2)}#select-row{display:block;outline:0;transform:translate3d(0,0,0)}.md-select{--md-select-width:var(--cr-default-input-max-width)}.long{width:var(--cr-default-input-max-width)}cr-input{--cr-input-error-display:none}.md-select,cr-input:not(.last-row),cr-textarea{margin-bottom:var(--cr-form-field-bottom-spacing)}#dialog::part(body-container){max-height:550px}@media all and (max-height:714px){#dialog::part(body-container){max-height:270px}}#notices{margin-bottom:4px;margin-top:20px;white-space:initial}#validationError{color:var(--google-red-600)}@media (prefers-color-scheme:dark){#validationError{color:var(--google-red-300)}}</style>
    <cr-dialog id="dialog" close-text="$i18n{close}">
      <div slot="title">[[title_]]</div>
      <div slot="body">
        <div id="select-row" class="address-row">
          <label id="select-label" class="cr-form-field-label">
            $i18n{addressCountry}
          </label>
          <select id="country" class="md-select" aria-labelledby="select-label" value="[[countryCode_]]" on-change="onCountryCodeSelectChange_" autofocus>
            <option value="" hidden="[[isAccountAddress_]]"></option>
            <template is="dom-repeat" items="[[countries_]]">
              <option value="[[getCode_(item)]]" disabled="[[isDivision_(item)]]">
                [[getName_(item)]]
              </option>
            </template>
          </select>
        </div>
        <template is="dom-repeat" items="[[components_]]">
          <div class="address-row">
            <template is="dom-repeat" items="[[item]]">
              <template is="dom-if" if="[[item.isTextarea]]">
                <cr-textarea label="[[item.label]]" value="{{item.value}}" class$="address-column [[item.additionalClassName]]" spellcheck="false" maxlength="1000" required="[[item.isRequired]]" invalid="[[isVisuallyInvalid_(item.isValidatable,
                                                  item.isValid)]]">
                </cr-textarea>
              </template>
              <template is="dom-if" if="[[!item.isTextarea]]">
                <cr-input type="text" label="[[item.label]]" value="{{item.value}}" spellcheck="false" maxlength="1000" class$="address-column [[item.additionalClassName]]" required="[[item.isRequired]]" invalid="[[isVisuallyInvalid_(item.isValidatable,
                                                  item.isValid)]]">
                </cr-input>
              </template>
            </template>
          </div>
        </template>
        <div id="notices" hidden="[[!isAccountAddress_]]">
          <div id="validationError">
            [[validationError_]]<wbr>
          </div>
          <div id="accountSourceNotice">
            [[accountAddressSourceNotice_]]
          </div>
        </div>
      </div>
      <div slot="button-container">
        <cr-button id="cancelButton" class="cancel-button" on-click="onCancelClick_">
          $i18n{cancel}
        </cr-button>
        <cr-button id="saveButton" class="action-button" disabled="[[!canSave_]]" on-click="onSaveButtonClick_">
          $i18n{save}
        </cr-button>
      </div>
    </cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function isValueEmpty(value){return value===undefined||value===""}class AddressComponentUi{constructor(addressFields,originalFields,fieldType,label,additionalClassName="",isTextarea=false,skipValidation=false,isRequired=false){this.addressFields_=addressFields;this.existingAddress_=originalFields!==undefined;this.originalValue_=originalFields?.get(fieldType);this.fieldType_=fieldType;this.label=label;this.additionalClassName=additionalClassName;this.isTextarea=isTextarea;this.isRequired=isRequired;this.skipValidation_=skipValidation;this.isValidatable_=false}get isValidatable(){return this.isValidatable_}get isValid(){if(this.skipValidation_){return true}if(this.existingAddress_){if(this.originalValue_===this.value||isValueEmpty(this.originalValue_)&&isValueEmpty(this.value)){return true}}return!this.isRequired||!!this.value}get value(){return this.addressFields_.get(this.fieldType_)}set value(value){const changed=value!==this.value;this.addressFields_.set(this.fieldType_,value);if(changed){this.onValueUpdateListener?.()}}get hasValue(){return!isValueEmpty(this.value)}get fieldType(){return this.fieldType_}makeValidatable(){this.isValidatable_=true}}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SANCTOINED_COUNTRY_CODES=Object.freeze(["CU","IR","KP","SD","SY"]);const AddressSource=chrome.autofillPrivate.AddressSource;const FieldType=chrome.autofillPrivate.FieldType;const SettingsAddressEditDialogElementBase=I18nMixin(PolymerElement);class SettingsAddressEditDialogElement extends SettingsAddressEditDialogElementBase{constructor(){super(...arguments);this.addressFields_=new Map;this.components_=[];this.countryInfo_=CountryDetailManagerImpl.getInstance()}static get is(){return"settings-address-edit-dialog"}static get template(){return getTemplate$1x()}static get properties(){return{address:Object,accountInfo:Object,title_:String,validationError_:String,countries_:Array,countryCode_:{type:String,observer:"onCountryCodeChanged_"},components_:Array,phoneNumber_:String,email_:String,canSave_:Boolean,isAccountAddress_:{type:Boolean,computed:"isAddressStoredInAccount_(address, accountInfo)",value:false},accountAddressSourceNotice_:{type:String,computed:"getAccountAddressSourceNotice_(address, accountInfo)"}}}connectedCallback(){super.connectedCallback();assert(this.address);for(const entry of this.address.fields){this.addressFields_.set(entry.type,entry.value)}this.countryInfo_.getCountryList().then((countryList=>{if(this.address.guid&&this.address.metadata!==undefined&&this.address.metadata.source===AddressSource.ACCOUNT){countryList=countryList.filter((country=>!!country.countryCode&&!SANCTOINED_COUNTRY_CODES.includes(country.countryCode)))}this.countries_=countryList;const isEditingExistingAddress=!!this.address.guid;this.title_=this.i18n(isEditingExistingAddress?"editAddressTitle":"addAddressTitle");this.originalAddressFields_=isEditingExistingAddress?new Map(this.addressFields_):undefined;microTask.run((()=>{const countryField=this.addressFields_.get(FieldType.ADDRESS_HOME_COUNTRY);if(!countryField){assert(countryList.length>0);this.addressFields_.set(FieldType.ADDRESS_HOME_COUNTRY,countryList[0].countryCode)}this.countryCode_=this.addressFields_.get(FieldType.ADDRESS_HOME_COUNTRY)}))}))}fire_(eventName,detail){this.dispatchEvent(new CustomEvent(eventName,{bubbles:true,composed:true,detail:detail}))}updateAddressComponents_(){const countryCode=this.countryCode_||this.countries_[0].countryCode;this.countryInfo_.getAddressFormat(countryCode).then((format=>{this.address.languageCode=format.languageCode;const skipValidation=!this.isAccountAddress_;this.components_=[];for(const row of format.components){this.components_.push(row.row.map((component=>new AddressComponentUi(this.addressFields_,this.originalAddressFields_,component.field,component.fieldName,component.isLongField?"long":"",component.field===FieldType.ADDRESS_HOME_STREET_ADDRESS,skipValidation,component.isRequired))))}this.components_.push([new AddressComponentUi(this.addressFields_,this.originalAddressFields_,FieldType.PHONE_HOME_WHOLE_NUMBER,this.i18n("addressPhone"),"last-row"),new AddressComponentUi(this.addressFields_,this.originalAddressFields_,FieldType.EMAIL_ADDRESS,this.i18n("addressEmail"),"long last-row")]);for(let rowIndex=0;rowIndex<this.components_.length;++rowIndex){const row=this.components_[rowIndex];for(let colIndex=0;colIndex<row.length;++colIndex){this.components_[rowIndex][colIndex].onValueUpdateListener=this.notifyComponentValidity_.bind(this,rowIndex,colIndex)}}flush();this.updateCanSave_();this.fire_("on-update-address-wrapper");if(!this.$.dialog.open){this.$.dialog.showModal()}}))}isVisuallyInvalid_(isValidatable,isValid){return isValidatable&&!isValid}notifyComponentValidity_(row,col){this.components_[row][col].makeValidatable();const componentReference=`components_.${row}.${col}`;this.notifyPath(componentReference+".isValidatable");this.notifyPath(componentReference+".isValid");this.updateCanSave_()}notifyValidity_(){this.components_.forEach(((row,i)=>{row.forEach(((_col,j)=>this.notifyComponentValidity_(i,j)))}))}updateCanSave_(){this.validationError_="";if(!this.countryCode_&&this.hasAnyValue_()||this.countryCode_&&(!this.hasInvalidComponent_()||this.hasUncoveredInvalidComponent_())){this.canSave_=true;this.fire_("on-update-can-save");return}if(this.isAccountAddress_){const nInvalid=this.countInvalidComponent_();if(nInvalid===1){this.validationError_=this.i18n("editAddressRequiredFieldError")}else if(nInvalid>1){this.validationError_=this.i18n("editAddressRequiredFieldsError")}}this.canSave_=false;this.fire_("on-update-can-save")}getCode_(country){return country.countryCode||"SPACER"}getName_(country){return country.name||"------"}isDivision_(country){return!country.countryCode}isAddressStoredInAccount_(){if(this.address.guid){return this.address.metadata!==undefined&&this.address.metadata.source===AddressSource.ACCOUNT}return!!this.accountInfo?.isEligibleForAddressAccountStorage}getAccountAddressSourceNotice_(){if(this.accountInfo){return this.i18n(this.address.guid?"editAccountAddressSourceNotice":"newAccountAddressSourceNotice",this.accountInfo.email)}return undefined}hasAnyValue_(){return this.components_.flat().some((component=>component.hasValue))}hasInvalidComponent_(){return this.countInvalidComponent_()>0}countInvalidComponent_(){return this.components_.flat().filter((component=>!component.isValid)).length}hasUncoveredInvalidComponent_(){return this.components_.flat().some((component=>!component.isValid&&!component.isValidatable))}onCancelClick_(){this.$.dialog.cancel()}onSaveButtonClick_(){this.notifyValidity_();this.updateCanSave_();if(!this.canSave_){return}this.address.fields=[];this.addressFields_.forEach(((value,key,_map)=>{this.address.fields.push({type:key,value:value})}));this.fire_("save-address",this.address);this.$.dialog.close()}onCountryCodeChanged_(){this.updateAddressComponents_()}onCountryCodeSelectChange_(){this.addressFields_.set(FieldType.ADDRESS_HOME_COUNTRY,this.$.country.value);this.countryCode_=this.$.country.value}}customElements.define(SettingsAddressEditDialogElement.is,SettingsAddressEditDialogElement);class CountryDetailManagerImpl{getCountryList(){return chrome.autofillPrivate.getCountryList()}getAddressFormat(countryCode){return chrome.autofillPrivate.getAddressComponents(countryCode)}static getInstance(){return instance$7||(instance$7=new CountryDetailManagerImpl)}static setInstance(obj){instance$7=obj}}let instance$7=null;function getTemplate$1w(){return html`<!--_html_template_start_--><cr-dialog show-on-attach id="dialog" close-text="$i18n{close}">
  <div slot="title">$i18n{removeAddressConfirmationTitle}</div>
  <div slot="body" id="body">
    <span hidden="[[isAccountAddress_]]">
      <span id="syncAddressDescription" hidden="[[!isProfileSyncEnabled_]]">
        $i18n{removeSyncAddressConfirmationDescription}
      </span>
      <span id="localAddressDescription" hidden="[[isProfileSyncEnabled_]]">
        $i18n{removeLocalAddressConfirmationDescription}
      </span>
    </span>
    <span id="accountAddressDescription" hidden="[[!isAccountAddress_]]">
      [[i18n('deleteAccountAddressSourceNotice', accountInfo.email)]]
    </span>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" on-click="onCancelClick" id="cancel">
      $i18n{cancel}
    </cr-button>
    <cr-button class="action-button" on-click="onRemoveClick" id="remove">
      $i18n{removeAddress}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsAddressRemoveConfirmationDialogBase=I18nMixin(PolymerElement);class SettingsAddressRemoveConfirmationDialogElement extends SettingsAddressRemoveConfirmationDialogBase{static get is(){return"settings-address-remove-confirmation-dialog"}static get template(){return getTemplate$1w()}static get properties(){return{address:Object,accountInfo:Object,isAccountAddress_:{type:Boolean,computed:"computeIsAccountAddress_(address)"},isProfileSyncEnabled_:{type:Boolean,computed:"computeIsProfileSyncEnabled_(accountInfo)",value:false}}}wasConfirmed(){return this.$.dialog.getNative().returnValue==="success"}computeIsAccountAddress_(address){return address.metadata!==undefined&&address.metadata.source===chrome.autofillPrivate.AddressSource.ACCOUNT}computeIsProfileSyncEnabled_(accountInfo){return!!accountInfo?.isSyncEnabledForAutofillProfiles}onRemoveClick(){this.$.dialog.close()}onCancelClick(){this.$.dialog.cancel()}}customElements.define(SettingsAddressRemoveConfirmationDialogElement.is,SettingsAddressRemoveConfirmationDialogElement);const styleMod$5=document.createElement("dom-module");styleMod$5.appendChild(html`
  <template>
    <style>
:host{display:flex;flex-direction:column}.dialog-title{color:var(--cr-primary-text-color);font-size:15px;font-weight:400;line-height:22px;margin:0;padding-block-end:16px;padding-block-start:16px}.list-with-header>div:first-of-type{border-top:var(--cr-separator-line)}.website-column{align-items:center;display:flex;flex:1}.website-column .text-elide{color:var(--cr-primary-text-color)}.username-column{display:flex;flex:1;margin:0 8px}.password-column{align-items:center;display:flex;flex:1}.password-field{background-color:transparent;border:none;flex:1;height:20px;width:0}.type-column{align-items:center;display:flex;flex:2;overflow:hidden}.ellipses{flex:1;max-width:fit-content;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.elide-left{direction:rtl}.elide-left>span{direction:ltr;unicode-bidi:bidi-override}site-favicon{margin-inline-end:16px;min-width:16px}#leakedPassword,cr-input.password-input::part(input),input.password-input{font-family:'DejaVu Sans Mono',monospace}
    </style>
  </template>
`.content);styleMod$5.register("passwords-shared");
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class AutofillManagerImpl{getAccountInfo(){return chrome.autofillPrivate.getAccountInfo()}setPersonalDataManagerListener(listener){chrome.autofillPrivate.onPersonalDataChanged.addListener(listener)}removePersonalDataManagerListener(listener){chrome.autofillPrivate.onPersonalDataChanged.removeListener(listener)}getAddressList(){return chrome.autofillPrivate.getAddressList()}saveAddress(address){chrome.autofillPrivate.saveAddress(address)}removeAddress(guid){chrome.autofillPrivate.removeEntry(guid)}setAutofillSyncToggleEnabled(enabled){chrome.autofillPrivate.setAutofillSyncToggleEnabled(enabled)}static getInstance(){return instance$6||(instance$6=new AutofillManagerImpl)}static setInstance(obj){instance$6=obj}}let instance$6=null;function getTemplate$1v(){return html`<!--_html_template_start_-->    <style include="cr-shared-style settings-shared passwords-shared iron-flex">#addressList .start{display:flex;overflow:hidden}#addressSummary{display:flex;flex:1;overflow:hidden}</style>
    <settings-toggle-button id="autofillProfileToggle" no-extension-indicator label="$i18n{enableProfilesLabel}" sub-label="$i18n{enableProfilesSublabel}" pref="{{prefs.autofill.profile_enabled}}">
    </settings-toggle-button>
    <settings-toggle-button id="autofillSyncToggle" hidden$="[[!isAutofillSyncToggleVisible_(accountInfo_)]]" checked="[[accountInfo_.isAutofillSyncToggleEnabled]]" label="$i18n{autofillSyncToggleLabel}" sub-label="[[accountInfo_.email]]" on-change="onAutofillSyncEnabledChange_" no-extension-indicator no-set-pref>
    </settings-toggle-button>
    <template is="dom-if" if="[[prefs.autofill.profile_enabled.extensionId]]">
      <div class="cr-row continuation">
        <extension-controlled-indicator class="flex" id="autofillExtensionIndicator" extension-id="[[prefs.autofill.profile_enabled.extensionId]]" extension-name="[[prefs.autofill.profile_enabled.controlledByName]]" extension-can-be-disabled="[[
                prefs.autofill.profile_enabled.extensionCanBeDisabled]]">
        </extension-controlled-indicator>
      </div>
    </template>
    <div class="cr-row continuation">
      <h2 class="flex">$i18n{addresses}</h2>
      <cr-button id="addAddress" class="header-aligned-button" on-click="onAddAddressClick_" aria-label="$i18n{addAddressTitle}" hidden$="[[!prefs.autofill.profile_enabled.value]]">
        $i18n{add}
      </cr-button>
    </div>
    <div class="list-frame" aria-label="$i18n{addressesTableAriaLabel}">
      <div id="addressList" class="vertical-list">
        <template is="dom-repeat" items="[[addresses]]">
          <div class="list-item">
            <div class="start">
              <span id="addressSummary">
                <span class="ellipses">
                  [[item.metadata.summaryLabel]]
                </span>
                <span class="ellipses">
                  [[item.metadata.summarySublabel]]
                </span>
              </span>
              <iron-icon icon="cr20:cloud-off" hidden$="[[!isCloudOffVisible_(item, accountInfo_)]]" aria-label="$i18n{localAddressIconA11yLabel}" role="img">
              </iron-icon>
            </div>
            <cr-icon-button class="icon-more-vert address-menu" on-click="onAddressMenuClick_" title="[[moreActionsTitle_(item.metadata.summaryLabel,
                 item.metadata.summarySublabel)]]">
            </cr-icon-button>
          </div>
        </template>
      </div>
      <div id="noAddressesLabel" class="list-item" hidden$="[[hasSome_(addresses)]]">
        $i18n{noAddressesFound}
      </div>
    </div>
    <cr-action-menu id="addressSharedMenu" role-description="$i18n{menu}">
      <button id="menuEditAddress" class="dropdown-item" on-click="onMenuEditAddressClick_">$i18n{edit}</button>
      <button id="menuRemoveAddress" class="dropdown-item" on-click="onMenuRemoveAddressClick_">$i18n{removeAddress}</button>
    </cr-action-menu>
    <template is="dom-if" if="[[showAddressDialog_]]" restamp>
      <settings-address-edit-dialog address="[[activeAddress]]" account-info="[[accountInfo_]]" on-close="onAddressDialogClose_">
      </settings-address-edit-dialog>
    </template>
    <template is="dom-if" if="[[showAddressRemoveConfirmationDialog_]]" restamp>
      <settings-address-remove-confirmation-dialog address="[[activeAddress]]" account-info="[[accountInfo_]]" on-close="onAddressRemoveConfirmationDialogClose_">
      </settings-address-remove-confirmation-dialog>
    </template>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsAutofillSectionElementBase=I18nMixin(PolymerElement);class SettingsAutofillSectionElement extends SettingsAutofillSectionElementBase{constructor(){super(...arguments);this.accountInfo_=null;this.autofillManager_=AutofillManagerImpl.getInstance();this.setPersonalDataListener_=null}static get is(){return"settings-autofill-section"}static get template(){return getTemplate$1v()}static get properties(){return{accountInfo_:Object,addresses:Array,activeAddress:Object,showAddressDialog_:Boolean,showAddressRemoveConfirmationDialog_:Boolean}}ready(){super.ready();this.addEventListener("save-address",this.saveAddress_)}connectedCallback(){super.connectedCallback();const setAddressesListener=addressList=>{this.addresses=addressList};const setAccountListener=accountInfo=>{this.accountInfo_=accountInfo||null};const setPersonalDataListener=(addressList,_cardList,_ibans,accountInfo)=>{this.addresses=addressList;this.accountInfo_=accountInfo||null};this.setPersonalDataListener_=setPersonalDataListener;this.autofillManager_.getAddressList().then(setAddressesListener);this.autofillManager_.getAccountInfo().then(setAccountListener);this.autofillManager_.setPersonalDataManagerListener(setPersonalDataListener);chrome.metricsPrivate.recordUserAction("AutofillAddressesViewed")}disconnectedCallback(){super.disconnectedCallback();this.autofillManager_.removePersonalDataManagerListener(this.setPersonalDataListener_);this.setPersonalDataListener_=null}onAddressMenuClick_(e){const item=e.model.item;this.activeAddress=Object.assign({},item);const dotsButton=e.target;this.$.addressSharedMenu.showAt(dotsButton)}onAddAddressClick_(e){e.preventDefault();this.activeAddress={fields:[]};this.showAddressDialog_=true}onAddressDialogClose_(){this.showAddressDialog_=false}onMenuEditAddressClick_(e){e.preventDefault();this.showAddressDialog_=true;this.$.addressSharedMenu.close()}onAddressRemoveConfirmationDialogClose_(){const wasDeletionConfirmed=this.shadowRoot.querySelector("settings-address-remove-confirmation-dialog").wasConfirmed();if(wasDeletionConfirmed){if(this.addresses.length===1){focusWithoutInk(this.$.addAddress)}else{const lastIndex=this.addresses.length-1;if(this.activeAddress.guid===this.addresses[lastIndex].guid){focusWithoutInk(this.$.addressList.querySelectorAll(".address-menu")[lastIndex-1])}}this.autofillManager_.removeAddress(this.activeAddress.guid);getInstance().announce(loadTimeData.getString("addressRemovedMessage"))}chrome.metricsPrivate.recordBoolean("Autofill.ProfileDeleted.Settings",wasDeletionConfirmed);chrome.metricsPrivate.recordBoolean("Autofill.ProfileDeleted.Any",wasDeletionConfirmed);this.showAddressRemoveConfirmationDialog_=false}onMenuRemoveAddressClick_(){this.showAddressRemoveConfirmationDialog_=true;this.$.addressSharedMenu.close()}hasSome_(list){return!!(list&&list.length)}saveAddress_(event){this.autofillManager_.saveAddress(event.detail)}isCloudOffVisible_(address,accountInfo){if(address.metadata?.source===chrome.autofillPrivate.AddressSource.ACCOUNT){return false}if(!accountInfo){return false}if(accountInfo.isSyncEnabledForAutofillProfiles){return false}if(!loadTimeData.getBoolean("syncEnableContactInfoDataTypeInTransportMode")){return false}return true}moreActionsTitle_(label,sublabel){return this.i18n("moreActionsForAddress",label+(sublabel?sublabel:""))}isAutofillSyncToggleVisible_(accountInfo){return!!accountInfo?.isAutofillSyncToggleAvailable}onAutofillSyncEnabledChange_(){assert(this.accountInfo_&&this.accountInfo_.isAutofillSyncToggleAvailable);this.autofillManager_.setAutofillSyncToggleEnabled(this.$.autofillSyncToggle.checked)}}customElements.define(SettingsAutofillSectionElement.is,SettingsAutofillSectionElement);function getTemplate$1u(){return html`<!--_html_template_start_-->    <style include="cr-shared-style settings-shared md-select">cr-input{--cr-input-error-display:block;margin-bottom:0;width:var(--cr-default-input-max-width)}.md-select+.md-select{margin-inline-start:8px}#month{width:70px}#cvcInput{width:132px}#cvcImage{margin-inline-start:10px}#saved-to-this-device-only-label{margin-bottom:10px;margin-top:0}#year{width:100px}#nicknameInput{--cr-input-width:var(--cr-default-input-max-width);width:fit-content}#charCount{font-size:var(--cr-form-field-label-font-size);line-height:var(--cr-form-field-label-line-height);padding-inline-start:8px}#nicknameInput:not(:focus-within) #charCount{display:none}#expiredError{display:block;font-size:var(--cr-form-field-label-font-size);height:var(--cr-form-field-label-height);line-height:var(--cr-form-field-label-line-height);margin:8px 0;visibility:hidden}:host([expired_]) #expiredError{visibility:visible}#expiredError,:host([expired_]) #expiration{color:var(--google-red-600)}@media (prefers-color-scheme:dark){#expiredError,:host([expired_]) #expiration{color:var(--google-red-300)}}</style>
    <cr-dialog id="dialog" close-text="$i18n{close}">
      <div slot="title">[[title_]]</div>
      <div slot="body">
        <cr-input id="numberInput" label="$i18n{creditCardNumber}" value="{{cardNumber_}}" autofocus>
        </cr-input>
        
        <label id="expiration" class="cr-form-field-label" aria-hidden="true">
          $i18n{creditCardExpiration}
        </label>
        <select class="md-select" id="month" value="[[expirationMonth_]]" on-change="onMonthChange_" aria-label="$i18n{creditCardExpirationMonth}" aria-invalid$="[[getExpirationAriaInvalid_(expired_)]]">
          <template is="dom-repeat" items="[[monthList_]]">
            <option>[[item]]</option>
          </template>
        </select>
        <select class="md-select" id="year" value="[[expirationYear_]]" on-change="onYearChange_" aria-label="$i18n{creditCardExpirationYear}" aria-invalid$="[[getExpirationAriaInvalid_(expired_)]]">
          <template is="dom-repeat" items="[[yearList_]]">
            <option>[[item]]</option>
          </template>
        </select>
        <div id="expiredError">$i18n{creditCardExpired}</div>
        <template is="dom-if" if="[[checkIfCvcStorageIsAvailable_(
                  prefs.autofill.payment_cvc_storage.value,
                  cvcStorageAvailable_)]]">
          <cr-input id="cvcInput" label="$i18n{creditCardCvcInputTitle}" placeholder="$i18n{creditCardCvcInputPlaceholder}" value="{{cvc_}}">
            <img slot="suffix" id="cvcImage" src="[[getCvcImageSource_(cardNumber_)]]" title="[[getCvcImageTooltip_(cardNumber_)]]">
            
          </cr-input>
        </template>
        
        <cr-input id="nameInput" label="$i18n{creditCardName}" value="{{name_}}" spellcheck="false">
        </cr-input>
        <cr-input id="nicknameInput" label="$i18n{creditCardNickname}" value="{{nickname_}}" spellcheck="false" maxlength="25" on-input="validateNickname_" invalid="[[nicknameInvalid_]]" error-message="$i18n{creditCardNicknameInvalid}">
            <div id="charCount" slot="suffix" aria-hidden="true">
              [[computeNicknameCharCount_(nickname_)]]/25
            </div>
        </cr-input>
        <div id="saved-to-this-device-only-label">
          $i18n{savedToThisDeviceOnly}
        </div>
      </div>
      <div slot="button-container">
        <cr-button id="cancelButton" class="cancel-button" on-click="onCancelButtonClick_">$i18n{cancel}</cr-button>
        <cr-button id="saveButton" class="action-button" on-click="onSaveButtonClick_" disabled="[[!saveEnabled_(nicknameInvalid_,
                expired_, name_, cardNumber_, nickname_)]]">
          $i18n{save}
        </cr-button>
      </div>
    </cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const NICKNAME_INVALID_REGEX=new RegExp(".*\\d+.*");const SettingsCreditCardEditDialogElementBase=I18nMixin(PolymerElement);class SettingsCreditCardEditDialogElement extends SettingsCreditCardEditDialogElementBase{static get is(){return"settings-credit-card-edit-dialog"}static get template(){return getTemplate$1u()}static get properties(){return{prefs:Object,creditCard:Object,title_:String,monthList_:{type:Array,value:["01","02","03","04","05","06","07","08","09","10","11","12"]},yearList_:Array,name_:String,cardNumber_:String,cvc_:String,nickname_:String,expirationYear_:String,expirationMonth_:String,nicknameInvalid_:{type:Boolean,value:false},expired_:{type:Boolean,computed:"computeExpired_(expirationMonth_, expirationYear_)",reflectToAttribute:true,observer:"onExpiredChanged_"},cvcStorageAvailable_:{type:Boolean,value(){return loadTimeData.getBoolean("cvcStorageAvailable")}}}}computeExpired_(){if(this.expirationYear_===undefined||this.expirationMonth_===undefined){return false}const now=new Date;const expirationYear=parseInt(this.expirationYear_,10);const expirationMonth=parseInt(this.expirationMonth_,10);return expirationYear<now.getFullYear()||expirationYear===now.getFullYear()&&expirationMonth<=now.getMonth()}connectedCallback(){super.connectedCallback();this.title_=this.i18n(this.creditCard.guid?"editCreditCardTitle":"addCreditCardTitle");if(this.creditCard.expirationMonth.length===1){this.creditCard.expirationMonth="0"+this.creditCard.expirationMonth}const date=new Date;let firstYear=date.getFullYear();let lastYear=firstYear+19;let selectedYear=parseInt(this.creditCard.expirationYear,10);if(!selectedYear){selectedYear=firstYear}else if(selectedYear<firstYear){firstYear=selectedYear}else if(selectedYear>lastYear){lastYear=selectedYear}const yearList=[];for(let i=firstYear;i<=lastYear;++i){yearList.push(i.toString())}this.yearList_=yearList;microTask.run((()=>{this.expirationYear_=selectedYear.toString();this.expirationMonth_=this.creditCard.expirationMonth;this.cvc_=this.creditCard.cvc;this.name_=this.creditCard.name;this.cardNumber_=this.creditCard.cardNumber||"";this.nickname_=this.creditCard.nickname;this.$.dialog.showModal()}))}close(){this.$.dialog.close()}onCancelButtonClick_(){this.$.dialog.cancel()}onSaveButtonClick_(){if(!this.saveEnabled_()){return}this.creditCard.expirationYear=this.expirationYear_;this.creditCard.expirationMonth=this.expirationMonth_;this.creditCard.name=this.name_;this.creditCard.cardNumber=this.cardNumber_;this.creditCard.nickname=this.nickname_;this.creditCard.cvc=this.cvc_;this.trimCreditCard_();this.dispatchEvent(new CustomEvent("save-credit-card",{bubbles:true,composed:true,detail:this.creditCard}));this.close()}onMonthChange_(){this.expirationMonth_=this.monthList_[this.$.month.selectedIndex]}onYearChange_(){this.expirationYear_=this.yearList_[this.$.year.selectedIndex]}saveEnabled_(){return(this.name_&&this.name_.trim()||this.cardNumber_&&this.cardNumber_.trim())&&!this.expired_&&!this.nicknameInvalid_}onExpiredChanged_(){const errorElement=this.$.expiredError;const ERROR_ID=errorElement.id;if(this.expired_){errorElement.setAttribute("role","alert");this.shadowRoot.querySelector(`#month`).setAttribute("aria-errormessage",ERROR_ID);this.shadowRoot.querySelector(`#year`).setAttribute("aria-errormessage",ERROR_ID)}else{errorElement.removeAttribute("role");this.shadowRoot.querySelector(`#month`).removeAttribute("aria-errormessage");this.shadowRoot.querySelector(`#year`).removeAttribute("aria-errormessage")}}validateNickname_(){this.nicknameInvalid_=NICKNAME_INVALID_REGEX.test(this.nickname_)}computeNicknameCharCount_(nickname){return(nickname||"").length}getExpirationAriaInvalid_(){return this.expired_?"true":"false"}trimCreditCard_(){if(this.creditCard.name){this.creditCard.name=this.creditCard.name.trim()}if(this.creditCard.cardNumber){this.creditCard.cardNumber=this.creditCard.cardNumber.trim()}if(this.creditCard.nickname){this.creditCard.nickname=this.creditCard.nickname.trim()}}isCardAmex_(){return!!this.cardNumber_&&this.cardNumber_.length>=2&&!!this.cardNumber_.match("^(34|37)")}getCvcImageTooltip_(){return this.i18n(this.isCardAmex_()?"creditCardCvcAmexImageTitle":"creditCardCvcImageTitle")}getCvcImageSource_(){return this.isCardAmex_()?"chrome://settings/images/cvc_amex.svg":"chrome://settings/images/cvc.svg"}checkIfCvcStorageIsAvailable_(cvcStorageToggleEnabled){return this.cvcStorageAvailable_&&cvcStorageToggleEnabled}}customElements.define(SettingsCreditCardEditDialogElement.is,SettingsCreditCardEditDialogElement);function getTemplate$1t(){return html`<!--_html_template_start_--><style include="cr-shared-style settings-shared">cr-input{--cr-input-error-display:block;margin-bottom:0;width:var(--cr-default-input-max-width)}div[slot=button-container]{padding-top:0}#saved-to-this-device-only-label{margin-bottom:26px;margin-top:0}#charCount{font-size:var(--cr-form-field-label-font-size);line-height:var(--cr-form-field-label-line-height);padding-inline-start:8px}#nicknameInput:not(:focus-within) #charCount{--cr-input-width:var(--cr-default-input-max-width);display:none;width:fit-content}</style>
<cr-dialog id="dialog" close-text="$i18n{close}">
  <div slot="title">[[title_]]</div>
  <div slot="body">
    <cr-input id="valueInput" label="$i18n{addPaymentMethodIban}" on-input="updateSaveIbanButtonEnablement_" value="{{value_}}" autofocus>
    </cr-input>
    <cr-input id="nicknameInput" label="$i18n{ibanNickname}" value="{{nickname_}}" spellcheck="false" maxlength="25">
      <div id="charCount" slot="suffix">
        [[computeNicknameCharCount_(nickname_)]]/25
      </div>
    </cr-input>
    <div id="saved-to-this-device-only-label">
      $i18n{ibanSavedToThisDeviceOnly}
    </div>
  </div>
  <div slot="button-container">
    <cr-button id="cancelButton" class="cancel-button" on-click="onCancelButtonClick_">$i18n{cancel}</cr-button>
    <cr-button id="saveButton" class="action-button" on-click="onIbanSaveButtonClick_">
      $i18n{save}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class PaymentsManagerImpl{setPersonalDataManagerListener(listener){chrome.autofillPrivate.onPersonalDataChanged.addListener(listener)}removePersonalDataManagerListener(listener){chrome.autofillPrivate.onPersonalDataChanged.removeListener(listener)}getCreditCardList(){return chrome.autofillPrivate.getCreditCardList()}getIbanList(){return chrome.autofillPrivate.getIbanList()}isValidIban(ibanValue){return chrome.autofillPrivate.isValidIban(ibanValue)}removeCreditCard(guid){chrome.autofillPrivate.removeEntry(guid)}clearCachedCreditCard(guid){chrome.autofillPrivate.maskCreditCard(guid)}saveCreditCard(creditCard){chrome.autofillPrivate.saveCreditCard(creditCard)}saveIban(iban){chrome.autofillPrivate.saveIban(iban)}removeIban(guid){chrome.autofillPrivate.removeEntry(guid)}migrateCreditCards(){chrome.autofillPrivate.migrateCreditCards()}logServerCardLinkClicked(){chrome.autofillPrivate.logServerCardLinkClicked()}logServerIbanLinkClicked(){chrome.autofillPrivate.logServerIbanLinkClicked()}setCreditCardFidoAuthEnabledState(enabled){chrome.autofillPrivate.setCreditCardFIDOAuthEnabledState(enabled)}addVirtualCard(cardId){chrome.autofillPrivate.addVirtualCard(cardId)}removeVirtualCard(serverId){chrome.autofillPrivate.removeVirtualCard(serverId)}isUserVerifyingPlatformAuthenticatorAvailable(){if(!window.PublicKeyCredential){return Promise.resolve(null)}return window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()}authenticateUserAndFlipMandatoryAuthToggle(){chrome.autofillPrivate.authenticateUserAndFlipMandatoryAuthToggle()}getLocalCard(guid){return chrome.autofillPrivate.getLocalCard(guid)}bulkDeleteAllCvcs(){chrome.autofillPrivate.bulkDeleteAllCvcs()}static getInstance(){return instance$5||(instance$5=new PaymentsManagerImpl)}static setInstance(obj){instance$5=obj}}let instance$5=null;
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsIbanEditDialogElementBase=I18nMixin(PolymerElement);class SettingsIbanEditDialogElement extends SettingsIbanEditDialogElementBase{constructor(){super(...arguments);this.paymentsManager_=PaymentsManagerImpl.getInstance()}static get is(){return"settings-iban-edit-dialog"}static get template(){return getTemplate$1t()}static get properties(){return{iban:{type:Object,value:null},title_:String,value_:String,nickname_:String}}connectedCallback(){super.connectedCallback();if(this.iban){this.value_=this.iban.value;this.nickname_=this.iban.nickname;this.title_=this.i18n("editIbanTitle")}else{this.title_=this.i18n("addIbanTitle");this.$.saveButton.disabled=true}this.$.dialog.showModal()}close(){this.$.dialog.close()}onCancelButtonClick_(){this.$.dialog.cancel()}onIbanSaveButtonClick_(){const iban={guid:this.iban?.guid,value:this.value_.trim(),nickname:this.nickname_?this.nickname_.trim():""};this.dispatchEvent(new CustomEvent("save-iban",{bubbles:true,composed:true,detail:iban}));this.close()}updateSaveIbanButtonEnablement_(){this.isValidIban().then((isValid=>{this.$.saveButton.disabled=!isValid}))}async isValidIban(){if(!this.value_){return Promise.resolve(false)}const isValid=await this.paymentsManager_.isValidIban(this.value_.replace(/\s/g,""));return isValid}computeNicknameCharCount_(){return(this.nickname_||"").length}}customElements.define(SettingsIbanEditDialogElement.is,SettingsIbanEditDialogElement);const styleMod$4=document.createElement("dom-module");styleMod$4.appendChild(html`
  <template>
    <style>
.cr-screen-reader-only{clip-path:inset(100%);position:fixed}.cr-screen-reader-only-host-node{position:relative}.cr-screen-reader-only-host-node .cr-screen-reader-only{height:100%;overflow:hidden;position:absolute;width:100%}
    </style>
  </template>
`.content);styleMod$4.register("cr-screen-reader-only");function getTemplate$1s(){return html`<!--_html_template_start_-->    <style include="settings-shared passwords-shared cr-screen-reader-only">.expiration-column,.misc-column{align-items:center;display:flex;flex:1}.misc-column{justify-content:flex-end}.list-item{margin-bottom:8px;margin-top:8px}.sub-label{color:var(--cr-secondary-text-color)}#paymentsIcon{vertical-align:middle}#cardImage{margin-inline-end:16px;vertical-align:middle}</style>
    <div class="list-item" role="row">
      <div class="type-column" role="cell">
        <img id="cardImage" src="[[creditCard.imageSrc]]" alt="">
        <div class="summary-column cr-screen-reader-only-host-node">
          <div class="cr-screen-reader-only">
            [[getSummaryAriaLabel_(creditCard)]],
            [[getSummaryAriaSublabel_(creditCard)]]
          </div>
          <div id="summaryLabel" class="ellipses" aria-hidden="true">
            [[creditCard.metadata.summaryLabel]]
          </div>
          <div id="summarySublabel" class="ellipses sub-label" aria-hidden="true">
            [[getSummarySublabel_(creditCard)]]
          </div>
        </div>
      </div>
      <div class="expiration-column">
        <div role="cell" class="misc-column">
          <div id="paymentsIndicator" hidden$="[[!shouldShowPaymentsIndicator_(creditCard.metadata)]]">
            
            
              <span class="sub-label">
                [[getPaymentsLabel_(creditCard.metadata)]]
              </span>
            
          </div>
          <template is="dom-if" if="[[showDots_(creditCard.metadata)]]">
            <cr-icon-button class="icon-more-vert" id="creditCardMenu" title="[[moreActionsTitle_(creditCard)]]" on-click="onDotsMenuClick_">
            </cr-icon-button>
          </template>
          <template is="dom-if" if="[[!showDots_(creditCard.metadata)]]">
            <cr-icon-button class="icon-external" id="remoteCreditCardLink" title="$i18n{remotePaymentMethodsLinkLabel}" role="link" on-click="onRemoteEditClick_"></cr-icon-button>
          </template>
        </div>
      </div>
    </div>
<!--_html_template_end_-->`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsCreditCardListEntryElementBase=I18nMixin(PolymerElement);class SettingsCreditCardListEntryElement extends SettingsCreditCardListEntryElementBase{static get is(){return"settings-credit-card-list-entry"}static get template(){return getTemplate$1s()}static get properties(){return{creditCard:Object}}get dotsMenu(){return this.shadowRoot.getElementById("creditCardMenu")}onDotsMenuClick_(){this.dispatchEvent(new CustomEvent("dots-card-menu-click",{bubbles:true,composed:true,detail:{creditCard:this.creditCard,anchorElement:this.shadowRoot.querySelector("#creditCardMenu")}}))}onRemoteEditClick_(){this.dispatchEvent(new CustomEvent("remote-card-menu-click",{bubbles:true,composed:true,detail:{creditCard:this.creditCard,anchorElement:this.shadowRoot.querySelector("#creditCardMenu")}}))}getCardNumberDescription_(creditCard){const cardNumber=creditCard.cardNumber;if(cardNumber){const lastFourDigits=cardNumber.substring(Math.max(0,cardNumber.length-4));if(lastFourDigits){const network=creditCard.network||this.i18n("genericCreditCard");return this.i18n("creditCardDescription",network,lastFourDigits)}}return undefined}moreActionsTitle_(){const cardDescription=this.creditCard.nickname||this.getCardNumberDescription_(this.creditCard)||this.creditCard.name;return this.i18n("moreActionsForCreditCard",cardDescription)}showDots_(){return!!(this.creditCard.metadata.isLocal||this.creditCard.metadata.isCached||this.isVirtualCardEnrollmentEligible_())}isVirtualCardEnrollmentEligible_(){return this.creditCard.metadata.isVirtualCardEnrollmentEligible}isVirtualCardEnrolled_(){return this.creditCard.metadata.isVirtualCardEnrolled}getSummaryAriaLabel_(){const cardNumberDescription=this.getCardNumberDescription_(this.creditCard);if(cardNumberDescription){return this.i18n("creditCardA11yLabeled",cardNumberDescription)}return this.creditCard.metadata.summaryLabel}getCardExpiryDate_(){assert(this.creditCard.expirationMonth);assert(this.creditCard.expirationYear);return this.creditCard.expirationMonth+"/"+this.creditCard.expirationYear.toString().substring(2)}getCardSublabelType(){if(this.isVirtualCardEnrolled_()){return 0}if(loadTimeData.getBoolean("cvcStorageAvailable")&&!!this.creditCard.cvc){return 2}return 1}getSummarySublabel_(){switch(this.getCardSublabelType()){case 0:return this.i18n("virtualCardTurnedOn");case 2:return this.getCardExpiryDate_()+" | "+this.i18n("cvcTagForCreditCardListEntry");case 1:return this.getCardExpiryDate_();default:assertNotReached()}}getSummaryAriaSublabel_(){switch(this.getCardSublabelType()){case 0:return this.getSummarySublabel_();case 2:case 1:return this.i18n("creditCardExpDateA11yLabeled",this.getSummarySublabel_());default:assertNotReached()}}shouldShowVirtualCardSecondarySublabel_(){return this.creditCard.metadata.summarySublabel.trim()!==""||this.isVirtualCardEnrolled_()||this.isVirtualCardEnrollmentEligible_()}shouldShowPaymentsIndicator_(){return!this.creditCard.metadata.isLocal}getPaymentsLabel_(){if(this.creditCard.metadata.isCached){return this.i18n("googlePaymentsCached")}return this.i18n("googlePayments")}}customElements.define(SettingsCreditCardListEntryElement.is,SettingsCreditCardListEntryElement);function getTemplate$1r(){return html`<!--_html_template_start_--><style include="settings-shared passwords-shared cr-screen-reader-only">.second-column{align-items:center;display:flex;flex:1;justify-content:flex-end}.list-item{margin-bottom:8px;margin-top:8px}.sub-label{color:var(--cr-secondary-text-color)}#ibanImage{margin-inline-end:16px;vertical-align:middle}</style>
<div class="list-item type-column" role="row">
  <img id="ibanImage" src="chrome://settings/images/iban.svg" alt="">
  <div class="summary-column cr-screen-reader-only-host-node" role="cell">
    <div class="cr-screen-reader-only">
      [[getA11yIbanDescription_(iban)]], [[iban.nickname]]
    </div>
    <div id="value" class="ellipses" aria-hidden="true">
      [[iban.metadata.summaryLabel]]
    </div>
    <div id="nickname" class="ellipses sub-label" aria-hidden="true">
      [[iban.nickname]]
    </div>
  </div>
  <div role="cell" class="second-column">
    <div id="paymentsIndicator" hidden$="[[!shouldShowGooglePaymentsIndicator_(iban.metadata)]]">


        <span class="sub-label">$i18n{googlePayments}</span>

    </div>
    <template is="dom-if" if="[[showDotsMenu_(iban.metadata)]]">
      <cr-icon-button class="icon-more-vert" id="ibanMenu" title="[[getMoreActionsTitle_(iban)]]" on-click="onDotsMenuClick_">
      </cr-icon-button>
    </template>
    <template is="dom-if" if="[[!showDotsMenu_(iban.metadata)]]">
      <cr-icon-button class="icon-external" id="remoteIbanLink" title="$i18n{remotePaymentMethodsLinkLabel}" role="link" on-click="onRemoteEditClick_"></cr-icon-button>
    </template>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsIbanListEntryElementBase=I18nMixin(PolymerElement);class SettingsIbanListEntryElement extends SettingsIbanListEntryElementBase{static get is(){return"settings-iban-list-entry"}static get template(){return getTemplate$1r()}static get properties(){return{iban:Object}}get dotsMenu(){return this.shadowRoot.getElementById("ibanMenu")}showDotsMenu_(){return!!this.iban.metadata.isLocal}shouldShowGooglePaymentsIndicator_(){return!this.iban.metadata.isLocal}onDotsMenuClick_(){this.dispatchEvent(new CustomEvent("dots-iban-menu-click",{bubbles:true,composed:true,detail:{iban:this.iban,anchorElement:this.dotsMenu}}))}onRemoteEditClick_(){this.dispatchEvent(new CustomEvent("remote-iban-menu-click",{bubbles:true,composed:true}))}getA11yIbanDescription_(iban){const strippedSummaryLabel=iban.metadata?iban.metadata.summaryLabel.replace(/\s/g,""):"";const lastFourDigits=strippedSummaryLabel.substring(Math.max(0,strippedSummaryLabel.length-4));return this.i18n("a11yIbanDescription",lastFourDigits)}getMoreActionsTitle_(iban){return this.i18n("moreActionsForIban",iban.nickname||this.getA11yIbanDescription_(iban))}}customElements.define(SettingsIbanListEntryElement.is,SettingsIbanListEntryElement);function getTemplate$1q(){return html`<!--_html_template_start_-->    <style include="settings-shared passwords-shared">.expiration-column{align-items:center;display:flex;flex:1}.list-separator{border-top:var(--cr-separator-line);width:100%}</style>
    <div role="table">
      <div class="vertical-list list-with-header" role="rowgroup">
        <template is="dom-repeat" items="[[creditCards]]">
          <settings-credit-card-list-entry id="[[getCreditCardId_(index)]]" class="payment-method" credit-card="[[item]]">
          </settings-credit-card-list-entry>
        </template>
      </div>
      <div class="list-separator" hidden$="[[!showCreditCardIbanSeparator_]]">
      </div>
      <div class="vertical-list list-with-header" role="rowgroup">
        <template is="dom-repeat" items="[[ibans]]">
          <settings-iban-list-entry id="[[getIbanId_(index)]]" class="payment-method" iban="[[item]]">
          </settings-iban-list-entry>
        </template>
      </div>
    </div>
    <div id="noPaymentMethodsLabel" class="list-item" hidden$="[[showAnyPaymentMethods_]]">
      $i18n{noPaymentMethodsFound}
    </div>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SettingsPaymentsListElement extends PolymerElement{static get is(){return"settings-payments-list"}static get template(){return getTemplate$1q()}static get properties(){return{creditCards:Array,ibans:Array,enableIbans_:{type:Boolean,value(){return loadTimeData.getBoolean("showIbansSettings")}},showCreditCardIbanSeparator_:{type:Boolean,value:false,computed:"computeShowCreditCardIbanSeparator_("+"creditCards, ibans, enableIbans_)"},showAnyPaymentMethods_:{type:Boolean,value:false,computed:"computeShowAnyPaymentMethods_("+"creditCards, ibans, enableIbans_)"}}}updateFocusBeforeCreditCardRemoval(cardIndex){if(cardIndex===this.creditCards.length-1){return this.updateFocusBeforeRemoval_(this.getCreditCardId_(cardIndex))}else{return true}}updateFocusBeforeIbanRemoval(ibanIndex){if(ibanIndex===this.ibans.length-1){return this.updateFocusBeforeRemoval_(this.getIbanId_(ibanIndex))}else{return true}}updateFocusBeforeRemoval_(id){const paymentMethods=this.shadowRoot.querySelectorAll(".payment-method");if(paymentMethods.length<=1){return false}const index=[...paymentMethods].findIndex((element=>element.id===id));const isLastItem=index===paymentMethods.length-1;const indexToFocus=index+(isLastItem?-1:+1);const menu=paymentMethods[indexToFocus].dotsMenu;if(menu){focusWithoutInk(menu);return true}return false}getCreditCardId_(index){return`card-${index}`}getIbanId_(index){return`iban-${index}`}hasSome_(list){return!!(list&&list.length)}showCreditCards_(){return this.hasSome_(this.creditCards)}showIbans_(){return this.enableIbans_&&this.hasSome_(this.ibans)}computeShowCreditCardIbanSeparator_(){return this.showCreditCards_()&&this.showIbans_()}computeShowAnyPaymentMethods_(){return this.showCreditCards_()||this.showIbans_()}}customElements.define(SettingsPaymentsListElement.is,SettingsPaymentsListElement);function getTemplate$1p(){return html`<!--_html_template_start_--><style include="cr-shared-style settings-shared"></style>
<cr-dialog id="dialog" show-on-attach close-text="$i18n{close}">
  <div slot="title">$i18n{unenrollVirtualCardDialogTitle}</div>
  <div slot="body">
    <div class="cr-padded-text">$i18nRaw{unenrollVirtualCardDialogLabel}</div>
  </div>
  <div slot="button-container">
    <cr-button id="cancelButton" class="cancel-button" on-click="onCancelButtonClick_">$i18n{cancel}</cr-button>
    <cr-button id="confirmButton" class="action-button" on-click="onConfirmButtonClick_">
      $i18n{unenrollVirtualCardDialogConfirm}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SettingsVirtualCardUnenrollDialogElement extends PolymerElement{static get is(){return"settings-virtual-card-unenroll-dialog"}static get template(){return getTemplate$1p()}static get properties(){return{creditCard:Object}}close(){this.$.dialog.close()}onCancelButtonClick_(){this.$.dialog.cancel()}onConfirmButtonClick_(){this.dispatchEvent(new CustomEvent("unenroll-virtual-card",{bubbles:true,composed:true,detail:this.creditCard.guid}));this.close()}}customElements.define(SettingsVirtualCardUnenrollDialogElement.is,SettingsVirtualCardUnenrollDialogElement);function getTemplate$1o(){return html`<!--_html_template_start_--><style include="cr-shared-style settings-shared iron-flex passwords-shared">.expiration-column{align-items:center;display:flex;flex:1}.arrow-icon-down{fill:var(--text-color);flex-shrink:0;margin-inline-start:6px;margin-inline-end:-6px;width:var(--cr-icon-size)}.payment-list-margin-start{padding-inline-start:20px}#migrateCreditCards{border-bottom:var(--cr-separator-line);border-top:none}#migrateCreditCardsButton{margin:0 auto}</style>
<settings-toggle-button id="autofillCreditCardToggle" no-extension-indicator label="$i18n{enableCreditCardsLabel}" sub-label="$i18n{enableCreditCardsSublabel}" pref="{{prefs.autofill.credit_card_enabled}}">
</settings-toggle-button>

<template is="dom-if" if="[[cvcStorageAvailable_]]">
  <settings-toggle-button id="cvcStorageToggle" no-extension-indicator label="$i18n{enableCvcStorageLabel}" sub-label-with-link="[[getCvcStorageSublabel_(creditCards)]]" disabled="[[!prefs.autofill.credit_card_enabled.value]]" on-sub-label-link-clicked="onBulkRemoveCvcClick_" pref="{{prefs.autofill.payment_cvc_storage}}">
    </settings-toggle-button>
</template>
<settings-toggle-button id="canMakePaymentToggle" aria-label="$i18n{canMakePaymentToggleLabel}" label="$i18n{canMakePaymentToggleLabel}" pref="{{prefs.payments.can_make_payment_enabled}}" on-settings-boolean-control-change="onCanMakePaymentChange_">
</settings-toggle-button>
<template is="dom-if" if="[[shouldShowFidoToggle_(
        prefs.autofill.credit_card_enabled.value,
        userIsFidoVerifiable_, mandatoryReauthFeatureEnabled_)]]">
  <settings-toggle-button id="autofillCreditCardFIDOAuthToggle" aria-label="$i18n{creditCards}" no-extension-indicator label="$i18n{enableCreditCardFIDOAuthLabel}" sub-label="$i18n{enableCreditCardFIDOAuthSublabel}" pref="{{prefs.autofill.credit_card_fido_auth_enabled}}" on-change="setFidoAuthenticationEnabledState_">
  </settings-toggle-button>
</template>
<template is="dom-if" if="[[prefs.autofill.credit_card_enabled.extensionId]]">
  <div class="cr-row continuation">
    <extension-controlled-indicator class="flex" id="autofillExtensionIndicator" extension-id="[[prefs.autofill.credit_card_enabled.extensionId]]" extension-name="[[
            prefs.autofill.credit_card_enabled.controlledByName]]" extension-can-be-disabled="[[
            prefs.autofill.credit_card_enabled.extensionCanBeDisabled]]">
    </extension-controlled-indicator>
  </div>
</template>

<div id="manageLink" class="cr-row first">
  
  <div class="cr-padded-text">$i18nRaw{manageCreditCardsLabel}</div>
</div>

<div class="cr-row continuation">
  <h2 class="flex">$i18n{creditCards}</h2>
  <template is="dom-if" if="[[!shouldShowIbanSettings_(showIbanSettingsEnabled_)]]">
    <cr-button id="addCreditCard" class="header-aligned-button" on-click="onAddCreditCardClick_" aria-label="$i18n{addCreditCardTitle}" hidden$="[[!prefs.autofill.credit_card_enabled.value]]">
      $i18n{add}
    </cr-button>
  </template>
  <template is="dom-if" if="[[shouldShowIbanSettings_(showIbanSettingsEnabled_)]]">
    <cr-button class="header-aligned-button" id="addPaymentMethods" on-click="onAddPaymentMethodClick_" aria-label="$i18n{addPaymentMethods}" hidden$="[[!prefs.autofill.credit_card_enabled.value]]">
      $i18n{add}
      <iron-icon icon="cr:arrow-drop-down" class="arrow-icon-down"></iron-icon>
    </cr-button>
    <cr-lazy-render id="paymentMethodsActionMenu">
      <template>
        <cr-action-menu role-description="$i18n{menu}">
          <button id="addCreditCard" class="dropdown-item" on-click="onAddCreditCardClick_">
            $i18n{addPaymentMethodCreditOrDebitCard}
          </button>
          <button id="addIban" class="dropdown-item" on-click="onAddIbanClick_">
            $i18n{addPaymentMethodIban}
          </button>
        </cr-action-menu>
      </template>
    </cr-lazy-render>
  </template>
</div>
<cr-link-row id="migrateCreditCards" hidden$="[[!checkIfMigratable_(creditCards,
        prefs.autofill.credit_card_enabled.value)]]" on-click="onMigrateCreditCardsClick_" label="$i18n{migrateCreditCardsLabel}" sub-label="[[migratableCreditCardsInfo_]]"></cr-link-row>
<settings-payments-list id="paymentsList" class="list-frame payment-list-margin-start" credit-cards="[[creditCards]]" ibans="[[ibans]]" on-dots-iban-menu-click="onDotsIbanMenuClick_" on-remote-iban-menu-click="onRemoteEditIbanMenuClick_" on-dots-card-menu-click="onCreditCardDotsMenuClick_" on-remote-card-menu-click="onRemoteEditCreditCardClick_" aria-label="$i18n{paymentsMethodsTableAriaLabel}">
</settings-payments-list>

<cr-action-menu id="creditCardSharedMenu" role-description="$i18n{menu}">
  <button id="menuEditCreditCard" class="dropdown-item" on-click="onMenuEditCreditCardClick_">
    [[getMenuEditCardText_(activeCreditCard_.metadata.isLocal)]]
  </button>

  <button id="menuRemoveCreditCard" class="dropdown-item" hidden$="[[!activeCreditCard_.metadata.isLocal]]" on-click="onMenuRemoveCreditCardClick_">$i18n{delete}</button>
  <button id="menuClearCreditCard" class="dropdown-item" on-click="onMenuClearCreditCardClick_" hidden$="[[!activeCreditCard_.metadata.isCached]]">
    $i18n{clearCreditCard}
  </button>

  <button id="menuAddVirtualCard" class="dropdown-item" on-click="onMenuAddVirtualCardClick_" hidden$="[[!shouldShowAddVirtualCardButton_(activeCreditCard_)]]">
    $i18n{addVirtualCard}
  </button>
  <button id="menuRemoveVirtualCard" class="dropdown-item" on-click="onMenuRemoveVirtualCardClick_" hidden$="[[!shouldShowRemoveVirtualCardButton_(activeCreditCard_)]]">
    $i18n{removeVirtualCard}
  </button>
</cr-action-menu>

<cr-lazy-render id="ibanSharedActionMenu">
  <template>
    <cr-action-menu id="ibanSharedMenu" role-description="$i18n{menu}">
      <button id="menuEditIban" class="dropdown-item" on-click="onMenuEditIbanClick_">
        $i18n{editIban}
      </button>
      <button id="menuRemoveIban" class="dropdown-item" on-click="onMenuRemoveIbanClick_">
        $i18n{delete}
      </button>
    </cr-action-menu>
  </template>
</cr-lazy-render>

<template is="dom-if" if="[[showCreditCardDialog_]]" restamp>
  <settings-credit-card-edit-dialog credit-card="[[activeCreditCard_]]" on-close="onCreditCardDialogClose_" on-save-credit-card="saveCreditCard_" prefs="{{prefs}}">
  </settings-credit-card-edit-dialog>
</template>
<template is="dom-if" if="[[showIbanDialog_]]" restamp>
  <settings-iban-edit-dialog iban="[[activeIban_]]" on-close="onIbanDialogClose_" on-save-iban="onSaveIban_">
  </settings-iban-edit-dialog>
</template>

<template is="dom-if" if="[[showVirtualCardUnenrollDialog_]]" restamp>
  <settings-virtual-card-unenroll-dialog credit-card="[[activeCreditCard_]]" on-close="onVirtualCardUnenrollDialogClose_" on-unenroll-virtual-card="unenrollVirtualCard_">
  </settings-virtual-card-unenroll-dialog>
</template>

<template is="dom-if" if="[[showLocalCreditCardRemoveConfirmationDialog_]]" restamp>
  <settings-simple-confirmation-dialog id="localCardDeleteConfirmDialog" title-text="$i18n{removeLocalCreditCardConfirmationTitle}" body-text="$i18n{removeLocalPaymentMethodConfirmationDescription}" confirm-text="$i18n{delete}" on-close="onLocalCreditCardRemoveConfirmationDialogClose_">
  </settings-simple-confirmation-dialog>
</template>

<template is="dom-if" if="[[showLocalIbanRemoveConfirmationDialog_]]" restamp>
  <settings-simple-confirmation-dialog id="localIbanDeleteConfirmationDialog" title-text="$i18n{removeLocalIbanConfirmationTitle}" body-text="$i18n{removeLocalPaymentMethodConfirmationDescription}" confirm-text="$i18n{delete}" on-close="onLocalIbanRemoveConfirmationDialogClose_">
  </settings-simple-confirmation-dialog>
</template>

<template is="dom-if" if="[[showBulkRemoveCvcConfirmationDialog_]]" restamp>
  <settings-simple-confirmation-dialog id="bulkDeleteCvcConfirmDialog" title-text="$i18n{bulkRemoveCvcConfirmationTitle}" body-text="$i18n{bulkRemoveCvcConfirmationDescription}" confirm-text="$i18n{delete}" on-close="onShowBulkRemoveCvcConfirmationDialogClose_">
  </settings-simple-confirmation-dialog>
</template>
<!--_html_template_end_-->`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsPaymentsSectionElementBase=I18nMixin(PolymerElement);class SettingsPaymentsSectionElement extends SettingsPaymentsSectionElementBase{constructor(){super(...arguments);this.paymentsManager_=PaymentsManagerImpl.getInstance();this.setPersonalDataListener_=null}static get is(){return"settings-payments-section"}static get template(){return getTemplate$1o()}static get properties(){return{prefs:Object,creditCards:{type:Array,value:()=>[]},ibans:{type:Array,value:()=>[]},userIsFidoVerifiable_:{type:Boolean,value(){return loadTimeData.getBoolean("fidoAuthenticationAvailableForAutofill")}},showIbanSettingsEnabled_:{type:Boolean,value(){return loadTimeData.getBoolean("showIbansSettings")},readOnly:true},updateChromeSettingsLinkToGPayWebEnabled_:{type:Boolean,value(){return loadTimeData.getBoolean("updateChromeSettingsLinkToGPayWebEnabled")},readOnly:true},activeCreditCard_:Object,activeIban_:Object,showCreditCardDialog_:Boolean,showIbanDialog_:Boolean,showLocalCreditCardRemoveConfirmationDialog_:Boolean,showLocalIbanRemoveConfirmationDialog_:Boolean,showVirtualCardUnenrollDialog_:Boolean,migratableCreditCardsInfo_:String,showBulkRemoveCvcConfirmationDialog_:Boolean,migrationEnabled_:{type:Boolean,value(){return loadTimeData.getBoolean("migrationEnabled")},readOnly:true},mandatoryReauthFeatureEnabled_:{type:Boolean,value(){return loadTimeData.getBoolean("autofillEnablePaymentsMandatoryReauth")}},cvcStorageAvailable_:{type:Boolean,value(){return loadTimeData.getBoolean("cvcStorageAvailable")}}}}connectedCallback(){super.connectedCallback();const setCreditCardsListener=cardList=>{this.creditCards=cardList};this.paymentsManager_.isUserVerifyingPlatformAuthenticatorAvailable().then((r=>{if(r===null){return}this.userIsFidoVerifiable_=this.userIsFidoVerifiable_&&r}));const setPersonalDataListener=(_addressList,cardList,ibanList)=>{this.creditCards=cardList;this.ibans=ibanList};const setIbansListener=ibanList=>{this.ibans=ibanList};this.setPersonalDataListener_=setPersonalDataListener;this.paymentsManager_.getCreditCardList().then(setCreditCardsListener);this.paymentsManager_.getIbanList().then(setIbansListener);this.paymentsManager_.setPersonalDataManagerListener(setPersonalDataListener);chrome.metricsPrivate.recordUserAction("AutofillCreditCardsViewed")}disconnectedCallback(){super.disconnectedCallback();this.paymentsManager_.removePersonalDataManagerListener(this.setPersonalDataListener_);this.setPersonalDataListener_=null}shouldShowIbanSettings_(){return this.showIbanSettingsEnabled_}onAddPaymentMethodClick_(e){const target=e.currentTarget;const menu=this.shadowRoot.querySelector("#paymentMethodsActionMenu").get();assert(menu);menu.showAt(target,{anchorAlignmentX:AnchorAlignment.BEFORE_END,anchorAlignmentY:AnchorAlignment.AFTER_END,noOffset:true})}onCreditCardDotsMenuClick_(e){this.activeCreditCard_=e.detail.creditCard;this.$.creditCardSharedMenu.showAt(e.detail.anchorElement)}onDotsIbanMenuClick_(e){this.activeIban_=e.detail.iban;this.$.ibanSharedActionMenu.get().showAt(e.detail.anchorElement)}onAddCreditCardClick_(e){e.preventDefault();const date=new Date;const expirationMonth=date.getMonth()+1;this.activeCreditCard_={expirationMonth:expirationMonth.toString(),expirationYear:date.getFullYear().toString()};this.showCreditCardDialog_=true;if(this.showIbanSettingsEnabled_){const menu=this.shadowRoot.querySelector("#paymentMethodsActionMenu").get();assert(menu);menu.close()}}onCreditCardDialogClose_(){this.showCreditCardDialog_=false;this.activeCreditCard_=null}onAddIbanClick_(e){e.preventDefault();this.showIbanDialog_=true;const menu=this.shadowRoot.querySelector("#paymentMethodsActionMenu").get();assert(menu);menu.close()}onIbanDialogClose_(){this.showIbanDialog_=false;this.activeIban_=null}async onMenuEditCreditCardClick_(e){e.preventDefault();assert(this.activeCreditCard_);if(this.activeCreditCard_.metadata.isLocal){const unmaskedCreditCard=await this.paymentsManager_.getLocalCard(this.activeCreditCard_.guid);assert(unmaskedCreditCard);this.activeCreditCard_=unmaskedCreditCard;this.showCreditCardDialog_=true}else{this.onRemoteCreditCardUrlClick_()}this.$.creditCardSharedMenu.close()}onRemoteEditCreditCardClick_(e){this.activeCreditCard_=e.detail.creditCard;this.onRemoteCreditCardUrlClick_()}onRemoteCreditCardUrlClick_(){this.paymentsManager_.logServerCardLinkClicked();const url=new URL(loadTimeData.getString("managePaymentMethodsUrl"));assert(this.activeCreditCard_);if(this.updateChromeSettingsLinkToGPayWebEnabled_&&this.activeCreditCard_.instrumentId){url.searchParams.append("id",this.activeCreditCard_.instrumentId)}OpenWindowProxyImpl.getInstance().openUrl(url.toString())}onRemoteEditIbanMenuClick_(){this.paymentsManager_.logServerIbanLinkClicked();OpenWindowProxyImpl.getInstance().openUrl(loadTimeData.getString("managePaymentMethodsUrl"))}onLocalCreditCardRemoveConfirmationDialogClose_(){const confirmationDialog=this.shadowRoot.querySelector("#localCardDeleteConfirmDialog");assert(confirmationDialog);if(confirmationDialog.wasConfirmed()){assert(this.activeCreditCard_);assert(this.activeCreditCard_.guid);const index=this.creditCards.findIndex((card=>card.guid===this.activeCreditCard_.guid));if(!this.$.paymentsList.updateFocusBeforeCreditCardRemoval(index)){this.focusHeaderControls_()}this.paymentsManager_.removeCreditCard(this.activeCreditCard_.guid);this.activeCreditCard_=null}this.showLocalCreditCardRemoveConfirmationDialog_=false}onMenuRemoveCreditCardClick_(){this.showLocalCreditCardRemoveConfirmationDialog_=true;this.$.creditCardSharedMenu.close()}onMenuEditIbanClick_(e){e.preventDefault();this.showIbanDialog_=true;this.$.ibanSharedActionMenu.get().close()}onLocalIbanRemoveConfirmationDialogClose_(){const confirmationDialog=this.shadowRoot.querySelector("#localIbanDeleteConfirmationDialog");assert(confirmationDialog);if(confirmationDialog.wasConfirmed()){assert(this.activeIban_);assert(this.activeIban_.guid);const index=this.ibans.findIndex((iban=>iban.guid===this.activeIban_.guid));if(!this.$.paymentsList.updateFocusBeforeIbanRemoval(index)){this.focusHeaderControls_()}this.paymentsManager_.removeIban(this.activeIban_.guid);this.activeIban_=null}this.showLocalIbanRemoveConfirmationDialog_=false}onMenuRemoveIbanClick_(){assert(this.activeIban_);this.showLocalIbanRemoveConfirmationDialog_=true;this.$.ibanSharedActionMenu.get().close()}onMenuClearCreditCardClick_(){this.paymentsManager_.clearCachedCreditCard(this.activeCreditCard_.guid);this.$.creditCardSharedMenu.close();this.activeCreditCard_=null}onMenuAddVirtualCardClick_(){this.paymentsManager_.addVirtualCard(this.activeCreditCard_.guid);this.$.creditCardSharedMenu.close();this.activeCreditCard_=null}onMenuRemoveVirtualCardClick_(){this.showVirtualCardUnenrollDialog_=true;this.$.creditCardSharedMenu.close()}onVirtualCardUnenrollDialogClose_(){this.showVirtualCardUnenrollDialog_=false;this.activeCreditCard_=null}onMigrateCreditCardsClick_(){this.paymentsManager_.migrateCreditCards()}onCanMakePaymentChange_(){MetricsBrowserProxyImpl.getInstance().recordSettingsPageHistogram(PrivacyElementInteractions.PAYMENT_METHOD)}saveCreditCard_(event){this.paymentsManager_.saveCreditCard(event.detail)}onSaveIban_(event){this.paymentsManager_.saveIban(event.detail)}shouldShowFidoToggle_(creditCardEnabled){return creditCardEnabled&&this.userIsFidoVerifiable_&&!this.mandatoryReauthFeatureEnabled_}setFidoAuthenticationEnabledState_(){this.paymentsManager_.setCreditCardFidoAuthEnabledState(this.shadowRoot.querySelector("#autofillCreditCardFIDOAuthToggle").checked)}checkIfMigratable_(creditCards,creditCardEnabled){if(!this.migrationEnabled_){return false}if(!creditCardEnabled){return false}const numberOfMigratableCreditCard=creditCards.filter((card=>card.metadata.isMigratable)).length;if(numberOfMigratableCreditCard===0){return false}this.migratableCreditCardsInfo_=numberOfMigratableCreditCard===1?this.i18n("migratableCardsInfoSingle"):this.i18n("migratableCardsInfoMultiple");return true}getMenuEditCardText_(isLocalCard){return this.i18n(isLocalCard?"edit":"editServerCard")}shouldShowAddVirtualCardButton_(){if(this.activeCreditCard_===null||!this.activeCreditCard_.metadata){return false}return!!this.activeCreditCard_.metadata.isVirtualCardEnrollmentEligible&&!this.activeCreditCard_.metadata.isVirtualCardEnrolled}shouldShowRemoveVirtualCardButton_(){if(this.activeCreditCard_===null||!this.activeCreditCard_.metadata){return false}return!!this.activeCreditCard_.metadata.isVirtualCardEnrollmentEligible&&!!this.activeCreditCard_.metadata.isVirtualCardEnrolled}unenrollVirtualCard_(event){this.paymentsManager_.removeVirtualCard(event.detail)}focusHeaderControls_(){const element=this.shadowRoot.querySelector(".header-aligned-button");if(element){focusWithoutInk(element)}}onMandatoryAuthToggleChange_(e){const mandatoryAuthToggle=e.target;assert(mandatoryAuthToggle);mandatoryAuthToggle.checked=!mandatoryAuthToggle.checked;this.paymentsManager_.authenticateUserAndFlipMandatoryAuthToggle()}onBulkRemoveCvcClick_(){assert(this.cvcStorageAvailable_);MetricsBrowserProxyImpl.getInstance().recordAction(CvcDeletionUserAction.HYPERLINK_CLICKED);this.showBulkRemoveCvcConfirmationDialog_=true}onShowBulkRemoveCvcConfirmationDialogClose_(){assert(this.cvcStorageAvailable_);const confirmationDialog=this.shadowRoot.querySelector("#bulkDeleteCvcConfirmDialog");assert(confirmationDialog);MetricsBrowserProxyImpl.getInstance().recordAction(confirmationDialog.wasConfirmed()?CvcDeletionUserAction.DIALOG_ACCEPTED:CvcDeletionUserAction.DIALOG_CANCELLED);if(confirmationDialog.wasConfirmed()){this.paymentsManager_.bulkDeleteAllCvcs()}this.showBulkRemoveCvcConfirmationDialog_=false}getCvcStorageSublabel_(){const card=this.creditCards.find((cc=>!!cc.cvc));return this.i18nAdvanced(card===undefined?"enableCvcStorageSublabel":"enableCvcStorageDeleteDataSublabel")}}customElements.define(SettingsPaymentsSectionElement.is,SettingsPaymentsSectionElement);function getTemplate$1n(){return html`<!--_html_template_start_--><style include="settings-shared"></style>

<cr-dialog id="dialog" close-text="$i18n{close}" show-on-attach>
  <div slot="title">$i18n{historyDeletionDialogTitle}</div>
  <div slot="body">$i18nRaw{historyDeletionDialogBody}</div>
  <div slot="button-container">
    <cr-button class="action-button" on-click="onOkClick_">
      $i18n{historyDeletionDialogOK}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SettingsHistoryDeletionDialogElement extends PolymerElement{static get is(){return"settings-history-deletion-dialog"}static get template(){return getTemplate$1n()}onOkClick_(){this.$.dialog.close()}}customElements.define(SettingsHistoryDeletionDialogElement.is,SettingsHistoryDeletionDialogElement);function getTemplate$1m(){return html`<!--_html_template_start_--><cr-dialog id="dialog" close-text="$i18n{close}" show-on-attach>
  <div slot="title">$i18n{passwordsDeletionDialogTitle}</div>
  <div slot="body">$i18nRaw{passwordsDeletionDialogBody}</div>
  <div slot="button-container">
    <cr-button class="action-button" on-click="onOkClick_">
      $i18n{ok}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SettingsPasswordsDeletionDialogElement extends PolymerElement{static get is(){return"settings-passwords-deletion-dialog"}static get template(){return getTemplate$1m()}onOkClick_(){this.$.dialog.close()}}customElements.define(SettingsPasswordsDeletionDialogElement.is,SettingsPasswordsDeletionDialogElement);function getTemplate$1l(){return html`<!--_html_template_start_--><style include="cr-shared-style cros-color-overrides">#outerRow{align-items:center;display:flex;min-height:var(--cr-section-two-line-min-height);width:100%}#outerRow[noSubLabel]{min-height:var(--cr-section-min-height)}cr-checkbox{margin-bottom:4px;margin-top:var(--settings-checkbox-margin-top,4px);width:100%}cr-policy-pref-indicator{margin-inline-start:var(--cr-controlled-by-spacing)}a{color:var(--cr-link-color)}</style>
<div id="outerRow" nosublabel$="[[!hasSubLabel_(subLabel, subLabelHtml)]]">
  <cr-checkbox id="checkbox" checked="{{checked}}" on-change="notifyChangedByUserInteraction" disabled="[[controlDisabled(disabled, pref.*)]]" aria-label="[[label]]">
    <div id="label">[[label]] <slot></slot></div>
    <div id="subLabel" class="cr-secondary-text">
      <div inner-h-t-m-l="[[sanitizeInnerHtml_(subLabelHtml)]]"></div>
      [[subLabel]]
    </div>
  </cr-checkbox>
  <template is="dom-if" if="[[pref.controlledBy]]">
    <cr-policy-pref-indicator pref="[[pref]]" icon-aria-label="[[label]]">
    </cr-policy-pref-indicator>
  </template>
</div>
<!--_html_template_end_-->`}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsCheckboxElementBase=SettingsBooleanControlMixin(PolymerElement);class SettingsCheckboxElement extends SettingsCheckboxElementBase{static get is(){return"settings-checkbox"}static get template(){return getTemplate$1l()}static get properties(){return{subLabelHtml:{type:String,value:"",observer:"onSubLabelHtmlChanged_"}}}static get observers(){return["onSubLabelChanged_(subLabel, subLabelHtml)"]}onSubLabelChanged_(){this.$.checkbox.ariaDescription=this.$.subLabel.textContent}onSubLabelHtmlChanged_(){const links=this.$.subLabel.querySelectorAll("a");links.forEach((link=>{link.addEventListener("click",this.stopPropagation_.bind(this))}))}stopPropagation_(event){event.stopPropagation()}hasSubLabel_(subLabel,subLabelHtml){return!!subLabel||!!subLabelHtml}sanitizeInnerHtml_(rawString){return sanitizeInnerHtml(rawString)}}customElements.define(SettingsCheckboxElement.is,SettingsCheckboxElement);function getTemplate$1k(){return html`<!--_html_template_start_-->    <style include="settings-shared">:host{--body-container-height:322px}#clearBrowsingDataDialog{--border-top-color:var(--paper-grey-300);--cr-dialog-top-container-min-height:42px;--cr-dialog-body-border-top:1px solid var(--border-top-color)}@media (prefers-color-scheme:dark){#clearBrowsingDataDialog{--border-top-color:var(--cr-separator-color)}}#clearBrowsingDataDialog:not(.fully-rendered){visibility:hidden}#clearBrowsingDataDialog [slot=title]{padding-bottom:8px}#clearBrowsingDataDialog::part(body-container){height:var(--body-container-height);min-height:200px}#clearBrowsingDataDialog [slot=body]{padding-top:8px}#clearBrowsingDataDialog [slot=footer]{background:var(--paper-grey-50);border-top:none;padding:0}@media (prefers-color-scheme:dark){#clearBrowsingDataDialog [slot=footer]{background:#323639}}.row{align-items:center;display:flex;min-height:40px}paper-spinner-lite{margin-bottom:auto;margin-inline-end:16px;margin-top:auto}settings-checkbox{--cr-section-two-line-min-height:48px}#basic-tab settings-checkbox+settings-checkbox{--settings-checkbox-margin-top:12px}cr-tabs{--cr-tabs-font-size:100%;--cr-tabs-height:40px}.time-range-row{margin-bottom:12px}.time-range-select{margin-inline-start:12px}[slot=title] .secondary{font-size:calc(13 / 15 * 100%);padding-top:8px}.divider{border-top:var(--cr-separator-line);margin:0 16px}#footer-description{color:var(--cr-secondary-text-color);padding:16px}#clearingDataAlert{clip:rect(0,0,0,0);position:fixed}.search-history-box{background-color:var(--google-grey-50);border:1px solid var(--google-grey-200);border-radius:4px;display:flex;margin-top:12px;padding:8px}@media (prefers-color-scheme:dark){.search-history-box{background-color:rgba(0,0,0,.3);border-color:transparent}}.search-history-box-icon{--iron-icon-fill-color:var(--cr-link-row-start-icon-color,
            var(--google-grey-700));display:flex;flex-shrink:0;margin:auto;padding-inline-end:10px;width:var(--cr-link-row-icon-width,var(--cr-icon-size))}@media (prefers-color-scheme:dark){.search-history-box-icon{--iron-icon-fill-color:var(--cr-link-row-start-icon-color,
              var(--google-grey-500))}}#nonGoogleSearchHistoryBox{margin-bottom:16px}</style>

    <cr-dialog id="clearBrowsingDataDialog" close-text="$i18n{close}" ignore-popstate has-tabs ignore-enter-key>
      <div slot="title">
        <div>$i18n{clearBrowsingData}</div>
      </div>
      <div slot="header">
        <cr-tabs tab-names="[[tabsNames_]]" selected="{{prefs.browser.last_clear_browsing_data_tab.value}}" on-selected-changed="recordTabChange_"></cr-tabs>
      </div>
      <div slot="body">
        <iron-pages id="tabs" selected="[[prefs.browser.last_clear_browsing_data_tab.value]]" on-selected-item-changed="updateClearButtonState_">
          <div id="basic-tab">
            <div class="row time-range-row">
              <span class="time-range-label" aria-hidden="true">
                $i18n{clearTimeRange}
              </span>
              <template is="dom-if" if="[[!enableCbdTimeframeRequired_]]">
                <settings-dropdown-menu id="clearFromBasic" class="time-range-select" label="$i18n{clearTimeRange}" pref="{{prefs.browser.clear_data.time_period_basic}}" menu-options="[[clearFromOptions_]]">
                </settings-dropdown-menu>
              </template>
              <template is="dom-if" if="[[enableCbdTimeframeRequired_]]">
                <settings-dropdown-menu id="clearFromBasic" class="time-range-select" label="$i18n{clearTimeRange}" pref="{{prefs.browser.clear_data.time_period_v2_basic}}" menu-options="[[clearFromOptionsV2_]]">
                </settings-dropdown-menu>
              </template>
            </div>
            
            <settings-checkbox id="browsingCheckboxBasic" pref="{{prefs.browser.clear_data.browsing_history_basic}}" label="$i18n{clearBrowsingHistory}" sub-label-html="[[browsingCheckboxLabel_(isSyncingHistory_,
                    '$i18nPolymer{clearBrowsingHistorySummary}',
                    '$i18nPolymer{clearBrowsingHistorySummarySignedInNoLink}'
                    )]]" disabled="[[clearingInProgress_]]" no-set-pref>
            </settings-checkbox>
            <settings-checkbox id="cookiesCheckboxBasic" class="cookies-checkbox" pref="{{prefs.browser.clear_data.cookies_basic}}" label="$i18n{clearCookies}" sub-label="[[cookiesCheckboxLabel_(
                    isSignedIn_,
                    shouldShowCookieException_,
                    '$i18nPolymer{clearCookiesSummary}',
                    '$i18nPolymer{clearCookiesSummarySignedIn}',
                    '$i18nPolymer{clearCookiesSummarySyncing}',
                    '$i18nPolymer{clearCookiesSummarySignedInSupervisedProfile}'
                    )]]" disabled="[[clearingInProgress_]]" no-set-pref>
            </settings-checkbox>
            <settings-checkbox id="cacheCheckboxBasic" class="cache-checkbox" pref="{{prefs.browser.clear_data.cache_basic}}" label="$i18n{clearCache}" sub-label="[[counters_.cache_basic]]" disabled="[[clearingInProgress_]]" no-set-pref>
            </settings-checkbox>
            <div class="search-history-box" hidden="[[!isSignedIn_]]">
              <iron-icon class="search-history-box-icon" aria-hidden="true" icon="settings20:googleg">
              </iron-icon>
              <div id="googleSearchHistoryLabel" inner-h-t-m-l="[[googleSearchHistoryString_]]">
              </div>
            </div>
            <div id="nonGoogleSearchHistoryBox" class="search-history-box" hidden="[[!isNonGoogleDse_]]">
              <iron-icon class="search-history-box-icon" aria-hidden="true" icon="cr:search">
              </iron-icon>
              <div id="nonGoogleSearchHistoryLabel" inner-h-t-m-l="[[nonGoogleSearchHistoryString_]]">
              </div>
            </div>
          </div>
          <div id="advanced-tab">
            <div class="row time-range-row">
              <span class="time-range-label" aria-hidden="true">
                $i18n{clearTimeRange}
              </span>
              <template is="dom-if" if="[[!enableCbdTimeframeRequired_]]">
                <settings-dropdown-menu id="clearFrom" class="time-range-select" label="$i18n{clearTimeRange}" pref="{{prefs.browser.clear_data.time_period}}" menu-options="[[clearFromOptions_]]">
                </settings-dropdown-menu>
              </template>
              <template is="dom-if" if="[[enableCbdTimeframeRequired_]]">
                <settings-dropdown-menu id="clearFrom" class="time-range-select" label="$i18n{clearTimeRange}" pref="{{prefs.browser.clear_data.time_period_v2}}" menu-options="[[clearFromOptionsV2_]]">
                </settings-dropdown-menu>
              </template>
            </div>
            <settings-checkbox id="browsingCheckbox" pref="{{prefs.browser.clear_data.browsing_history}}" label="$i18n{clearBrowsingHistory}" sub-label="[[counters_.browsing_history]]" disabled="[[clearingInProgress_]]" no-set-pref>
            </settings-checkbox>
            <settings-checkbox id="downloadCheckbox" pref="{{prefs.browser.clear_data.download_history}}" label="$i18n{clearDownloadHistory}" sub-label="[[counters_.download_history]]" disabled="[[clearingInProgress_]]" no-set-pref>
            </settings-checkbox>
            <settings-checkbox id="cookiesCheckbox" class="cookies-checkbox" pref="{{prefs.browser.clear_data.cookies}}" label="$i18n{clearCookies}" sub-label="[[counters_.cookies]]" disabled="[[clearingInProgress_]]" no-set-pref>
            </settings-checkbox>
            <settings-checkbox id="cacheCheckbox" class="cache-checkbox" pref="{{prefs.browser.clear_data.cache}}" label="$i18n{clearCache}" sub-label="[[counters_.cache]]" disabled="[[clearingInProgress_]]" no-set-pref>
            </settings-checkbox>
            <settings-checkbox pref="{{prefs.browser.clear_data.passwords}}" label="$i18n{clearPasswords}" sub-label="[[counters_.passwords]]" disabled="[[clearingInProgress_]]" no-set-pref>
            </settings-checkbox>
            <settings-checkbox pref="{{prefs.browser.clear_data.form_data}}" label="$i18n{clearFormData}" sub-label="[[counters_.form_data]]" disabled="[[clearingInProgress_]]" no-set-pref>
            </settings-checkbox>
            <settings-checkbox pref="{{prefs.browser.clear_data.site_settings}}" label="$i18nPolymer{siteSettings}" sub-label="[[counters_.site_settings]]" disabled="[[clearingInProgress_]]" no-set-pref>
            </settings-checkbox>
            <settings-checkbox pref="{{prefs.browser.clear_data.hosted_apps_data}}" label="$i18n{clearHostedAppData}" sub-label="[[counters_.hosted_apps_data]]" disabled="[[clearingInProgress_]]" no-set-pref>
            </settings-checkbox>
          </div>
        </iron-pages>
      </div>
      <div slot="button-container">
        <paper-spinner-lite active="[[clearingInProgress_]]">
        </paper-spinner-lite>
        <cr-button class="cancel-button" autofocus disabled="[[clearingInProgress_]]" on-click="onCancelClick_">$i18n{cancel}</cr-button>
        <cr-button id="clearBrowsingDataConfirm" class="action-button" on-click="clearBrowsingData_" disabled="[[isClearButtonDisabled_(clearingInProgress_,
                                               clearButtonDisabled_)]]">
            $i18n{clearData}
        </cr-button>

        
        <div id="clearingDataAlert" role="alert">
          [[clearingDataAlertString_]]
        </div>
      </div>
      <template is="dom-if" if="[[shouldShowFooter_(isSignedIn_, syncStatus.signedIn)]]" restamp>
        <div slot="footer">
          <settings-sync-account-control sync-status="[[syncStatus]]" prefs="{{prefs}}" hide-buttons hide-banner>
          </settings-sync-account-control>
          <div class="divider"></div>
          <div id="footer-description" on-click="onSyncDescriptionLinkClicked_">
            <span id="signin-info" hidden="[[!showSigninInfo_(isSignedIn_, syncStatus.signedIn)]]">
              $i18nRaw{clearBrowsingDataSignedIn}
            </span>
            <span id="sync-info" hidden="[[!showSyncInfo_(isSignedIn_, syncStatus.signedIn)]]">
              $i18nRaw{clearBrowsingDataWithSync}
            </span>
            <span id="sync-paused-info" hidden="[[!isSyncPaused_]]">
              $i18nRaw{clearBrowsingDataWithSyncPaused}
            </span>
            <span id="sync-passphrase-error-info" hidden="[[!hasPassphraseError_]]">
              $i18nRaw{clearBrowsingDataWithSyncPassphraseError}
            </span>
            <span id="sync-other-error-info" hidden="[[!hasOtherSyncError_]]">
              $i18nRaw{clearBrowsingDataWithSyncError}
            </span>
          </div>
        </div>
      </template>
    </cr-dialog>

    <template is="dom-if" if="[[showHistoryDeletionDialog_]]" restamp>
      <settings-history-deletion-dialog id="historyNotice" on-close="onHistoryDeletionDialogClose_">
      </settings-history-deletion-dialog>
    </template>

    <template is="dom-if" if="[[showPasswordsDeletionDialog_]]" restamp>
      <settings-passwords-deletion-dialog id="passwordsNotice" on-close="onPasswordsDeletionDialogClose_">
      </settings-passwords-deletion-dialog>
    </template>
<!--_html_template_end_-->`}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function closeDialog(dialog,isLast){if(!isLast){dialog.addEventListener("close",(e=>{e.stopPropagation()}),{once:true})}dialog.close()}var TimePeriod;(function(TimePeriod){TimePeriod[TimePeriod["LAST_HOUR"]=0]="LAST_HOUR";TimePeriod[TimePeriod["LAST_DAY"]=1]="LAST_DAY";TimePeriod[TimePeriod["LAST_WEEK"]=2]="LAST_WEEK";TimePeriod[TimePeriod["FOUR_WEEKS"]=3]="FOUR_WEEKS";TimePeriod[TimePeriod["ALL_TIME"]=4]="ALL_TIME";TimePeriod[TimePeriod["TIME_PERIOD_LAST"]=4]="TIME_PERIOD_LAST"})(TimePeriod||(TimePeriod={}));var TimePeriodExperiment;(function(TimePeriodExperiment){TimePeriodExperiment[TimePeriodExperiment["NOT_SELECTED"]=-1]="NOT_SELECTED";TimePeriodExperiment[TimePeriodExperiment["LAST_HOUR"]=0]="LAST_HOUR";TimePeriodExperiment[TimePeriodExperiment["LAST_DAY"]=1]="LAST_DAY";TimePeriodExperiment[TimePeriodExperiment["LAST_WEEK"]=2]="LAST_WEEK";TimePeriodExperiment[TimePeriodExperiment["FOUR_WEEKS"]=3]="FOUR_WEEKS";TimePeriodExperiment[TimePeriodExperiment["ALL_TIME"]=4]="ALL_TIME";TimePeriodExperiment[TimePeriodExperiment["OLDER_THAN_30_DAYS"]=5]="OLDER_THAN_30_DAYS";TimePeriodExperiment[TimePeriodExperiment["LAST_15_MINUTES"]=6]="LAST_15_MINUTES";TimePeriodExperiment[TimePeriodExperiment["TIME_PERIOD_LAST"]=6]="TIME_PERIOD_LAST"})(TimePeriodExperiment||(TimePeriodExperiment={}));const SettingsClearBrowsingDataDialogElementBase=RouteObserverMixin(WebUiListenerMixin(PrefsMixin(I18nMixin(PolymerElement))));class SettingsClearBrowsingDataDialogElement extends SettingsClearBrowsingDataDialogElementBase{constructor(){super(...arguments);this.browserProxy_=ClearBrowsingDataBrowserProxyImpl.getInstance();this.syncBrowserProxy_=SyncBrowserProxyImpl.getInstance()}static get is(){return"settings-clear-browsing-data-dialog"}static get template(){return getTemplate$1k()}static get properties(){return{prefs:{type:Object,notify:true},syncStatus:Object,counters_:{type:Object,value(){return{}}},clearFromOptions_:{readOnly:true,type:Array,value:[{value:TimePeriod.LAST_HOUR,name:loadTimeData.getString("clearPeriodHour")},{value:TimePeriod.LAST_DAY,name:loadTimeData.getString("clearPeriod24Hours")},{value:TimePeriod.LAST_WEEK,name:loadTimeData.getString("clearPeriod7Days")},{value:TimePeriod.FOUR_WEEKS,name:loadTimeData.getString("clearPeriod4Weeks")},{value:TimePeriod.ALL_TIME,name:loadTimeData.getString("clearPeriodEverything")}]},enableCbdTimeframeRequired_:{type:Boolean,value(){return loadTimeData.getBoolean("enableCbdTimeframeRequired")}},unoDesktopEnabled_:{type:Boolean,value(){return loadTimeData.getBoolean("unoDesktopEnabled")}},clearFromOptionsV2_:{readOnly:true,type:Array,value:[{value:TimePeriodExperiment.NOT_SELECTED,name:loadTimeData.getString("clearPeriodNotSelected"),hidden:true},{value:TimePeriodExperiment.LAST_15_MINUTES,name:loadTimeData.getString("clearPeriod15Minutes")},{value:TimePeriodExperiment.LAST_HOUR,name:loadTimeData.getString("clearPeriodHour")},{value:TimePeriodExperiment.LAST_DAY,name:loadTimeData.getString("clearPeriod24Hours")},{value:TimePeriodExperiment.LAST_WEEK,name:loadTimeData.getString("clearPeriod7Days")},{value:TimePeriodExperiment.FOUR_WEEKS,name:loadTimeData.getString("clearPeriod4Weeks")},{value:TimePeriodExperiment.ALL_TIME,name:loadTimeData.getString("clearPeriodEverything")}]},clearingInProgress_:{type:Boolean,value:false},clearingDataAlertString_:{type:String,value:""},clearButtonDisabled_:{type:Boolean,value:false},showHistoryDeletionDialog_:{type:Boolean,value:false},showPasswordsDeletionDialogLater_:{type:Boolean,value:false},showPasswordsDeletionDialog_:{type:Boolean,value:false},isSignedIn_:{type:Boolean,value:false},isSyncConsented_:{type:Boolean,value:false},isSyncingHistory_:{type:Boolean,value:false},shouldShowCookieException_:{type:Boolean,value:false},isSyncPaused_:{type:Boolean,value:false,computed:"computeIsSyncPaused_(syncStatus)"},hasPassphraseError_:{type:Boolean,value:false,computed:"computeHasPassphraseError_(syncStatus)"},hasOtherSyncError_:{type:Boolean,value:false,computed:"computeHasOtherError_(syncStatus, isSyncPaused_, hasPassphraseError_)"},tabsNames_:{type:Array,value:()=>[loadTimeData.getString("basicPageTitle"),loadTimeData.getString("advancedPageTitle")]},googleSearchHistoryString_:{type:String,computed:"computeGoogleSearchHistoryString_(isNonGoogleDse_)"},isNonGoogleDse_:{type:Boolean,value:false},nonGoogleSearchHistoryString_:String}}static get observers(){return[`onTimePeriodAdvancedPrefUpdated_(\n          prefs.browser.clear_data.time_period.value)`,`onTimePeriodBasicPrefUpdated_(\n          prefs.browser.clear_data.time_period_basic.value)`]}ready(){super.ready();this.syncBrowserProxy_.getSyncStatus().then(this.handleSyncStatus_.bind(this));this.addWebUiListener("sync-status-changed",this.handleSyncStatus_.bind(this));this.addWebUiListener("update-sync-state",this.updateSyncState_.bind(this));this.addWebUiListener("update-counter-text",this.updateCounterText_.bind(this));this.addEventListener("settings-boolean-control-change",this.updateClearButtonState_)}connectedCallback(){super.connectedCallback();this.browserProxy_.initialize().then((()=>{this.$.clearBrowsingDataDialog.showModal();this.focusOutlineManager_=FocusOutlineManager.forDocument(document);this.focusOutlineManager_.visible=true;document.addEventListener("mousedown",(()=>{this.focusOutlineManager_.visible=false}),{once:true})}))}handleSyncStatus_(syncStatus){this.syncStatus=syncStatus}isClearButtonDisabled_(clearingInProgress,clearButtonDisabled){return clearingInProgress||clearButtonDisabled}updateClearButtonState_(){const tab=this.$.tabs.selectedItem;if(!tab){return}this.clearButtonDisabled_=this.getSelectedDataTypes_(tab).length===0}currentRouteChanged(currentRoute){if(currentRoute===routes.CLEAR_BROWSER_DATA){chrome.metricsPrivate.recordUserAction("ClearBrowsingData_DialogCreated")}}updateSyncState_(event){this.isSignedIn_=event.signedIn;this.isSyncConsented_=event.syncConsented;this.isSyncingHistory_=event.syncingHistory;this.shouldShowCookieException_=event.shouldShowCookieException;this.$.clearBrowsingDataDialog.classList.add("fully-rendered");this.isNonGoogleDse_=event.isNonGoogleDse;this.nonGoogleSearchHistoryString_=sanitizeInnerHtml(event.nonGoogleSearchHistoryString)}browsingCheckboxLabel_(isSyncingHistory,historySummary,historySummarySignedInNoLink){return isSyncingHistory?historySummarySignedInNoLink:historySummary}cookiesCheckboxLabel_(isSignedIn,shouldShowCookieException,cookiesSummary,clearCookiesSummarySignedIn,clearCookiesSummarySyncing,clearCookiesSummarySignedInSupervisedProfile){if(loadTimeData.getBoolean("isChildAccount")&&loadTimeData.getBoolean("clearingCookiesKeepsSupervisedUsersSignedIn")){return clearCookiesSummarySignedInSupervisedProfile}if(this.unoDesktopEnabled_&&isSignedIn){return clearCookiesSummarySignedIn}if(shouldShowCookieException){return clearCookiesSummarySyncing}return cookiesSummary}updateCounterText_(prefName,text){const matches=prefName.match(/^browser\.clear_data\.(\w+)$/);assert(matches[1]);this.set("counters_."+matches[1],text)}getSelectedDataTypes_(tab){const checkboxes=tab.querySelectorAll("settings-checkbox");const dataTypes=[];checkboxes.forEach((checkbox=>{if(checkbox.checked&&!checkbox.hidden){dataTypes.push(checkbox.pref.key)}}));return dataTypes}async clearBrowsingData_(){this.clearingInProgress_=true;this.clearingDataAlertString_=loadTimeData.getString("clearingData");const tab=this.$.tabs.selectedItem;const dataTypes=this.getSelectedDataTypes_(tab);const dropdownMenu=tab.querySelector(".time-range-select");assert(dropdownMenu);const timePeriod=dropdownMenu.pref.value;if(tab.id==="basic-tab"){chrome.metricsPrivate.recordUserAction("ClearBrowsingData_BasicTab")}else{chrome.metricsPrivate.recordUserAction("ClearBrowsingData_AdvancedTab")}this.shadowRoot.querySelectorAll("settings-checkbox[no-set-pref]").forEach((checkbox=>checkbox.sendPrefChange()));const{showHistoryNotice:showHistoryNotice,showPasswordsNotice:showPasswordsNotice}=await this.browserProxy_.clearBrowsingData(dataTypes,timePeriod);this.clearingInProgress_=false;getInstance().announce(loadTimeData.getString("clearedData"));this.showHistoryDeletionDialog_=showHistoryNotice;this.showPasswordsDeletionDialog_=showPasswordsNotice&&!showHistoryNotice;this.showPasswordsDeletionDialogLater_=showPasswordsNotice&&showHistoryNotice;const isLastDialog=!showHistoryNotice&&!showPasswordsNotice;if(this.$.clearBrowsingDataDialog.open){closeDialog(this.$.clearBrowsingDataDialog,isLastDialog)}}onCancelClick_(){this.$.clearBrowsingDataDialog.cancel()}onHistoryDeletionDialogClose_(e){this.showHistoryDeletionDialog_=false;if(this.showPasswordsDeletionDialogLater_){e.stopPropagation();this.showPasswordsDeletionDialogLater_=false;this.showPasswordsDeletionDialog_=true}}onPasswordsDeletionDialogClose_(){this.showPasswordsDeletionDialog_=false}recordTabChange_(event){if(event.detail.value===0){chrome.metricsPrivate.recordUserAction("ClearBrowsingData_SwitchTo_BasicTab")}else{chrome.metricsPrivate.recordUserAction("ClearBrowsingData_SwitchTo_AdvancedTab")}}computeIsSyncPaused_(){return!!this.syncStatus.hasError&&!this.syncStatus.hasUnrecoverableError&&this.syncStatus.statusAction===StatusAction.REAUTHENTICATE}computeHasPassphraseError_(){return!!this.syncStatus.hasError&&this.syncStatus.statusAction===StatusAction.ENTER_PASSPHRASE}computeHasOtherError_(){return this.syncStatus!==undefined&&!!this.syncStatus.hasError&&!this.isSyncPaused_&&!this.hasPassphraseError_}computeGoogleSearchHistoryString_(isNonGoogleDse){return isNonGoogleDse?this.i18nAdvanced("clearGoogleSearchHistoryNonGoogleDse"):this.i18nAdvanced("clearGoogleSearchHistoryGoogleDse")}shouldShowFooter_(){let showFooter=false;return showFooter}showSigninInfo_(){return this.unoDesktopEnabled_&&this.isSignedIn_&&(!this.syncStatus||!this.syncStatus.signedIn)}showSyncInfo_(){return!this.showSigninInfo_()&&!!this.syncStatus&&!this.syncStatus.hasError}onTimePeriodAdvancedPrefUpdated_(){this.onTimePeriodPrefUpdated_(false)}onTimePeriodBasicPrefUpdated_(){this.onTimePeriodPrefUpdated_(true)}onTimePeriodPrefUpdated_(basic){const timePeriodPref=basic?"browser.clear_data.time_period_basic":"browser.clear_data.time_period";const timePeriodValue=this.getPref(timePeriodPref).value;if(!(timePeriodValue in TimePeriod)){this.setPrefValue(timePeriodPref,TimePeriod.LAST_HOUR)}}}customElements.define(SettingsClearBrowsingDataDialogElement.is,SettingsClearBrowsingDataDialogElement);function getTemplate$1j(){return html`<!--_html_template_start_-->    <style include="settings-shared"></style>
    <cr-dialog id="dialog" close-text="$i18n{close}">
      <div slot="title">[[dialogTitle_]]</div>
      <div slot="body" spellcheck="false">
         <cr-input id="searchEngine" label="$i18n{searchEnginesSearchEngine}" readonly="[[readonly_]]" error-message="$i18n{notValid}" value="{{searchEngine_}}" on-input="validate_" autofocus>
        </cr-input>
        <cr-input id="keyword" label="$i18n{searchEnginesShortcut}" readonly="[[readonly_]]" error-message="$i18n{notValid}" value="{{keyword_}}" on-focus="validate_" on-input="validate_">
        </cr-input>
        <cr-input id="queryUrl" label="$i18n{searchEnginesQueryURLExplanation}" readonly="[[urlIsReadonly_]]" error-message="$i18n{notValid}" value="{{queryUrl_}}" on-focus="validate_" on-input="validate_">
        </cr-input>
      </div>
      <div slot="button-container">
        <cr-button class="cancel-button" on-click="cancel_" id="cancel" hidden="[[cancelButtonHidden_]]">
          $i18n{cancel}</cr-button>
        <cr-button id="actionButton" class="action-button" on-click="onActionButtonClick_">
          [[actionButtonText_]]
        </cr-button>
      </div>
    </cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const DEFAULT_MODEL_INDEX=-1;const SettingsSearchEngineEditDialogElementBase=WebUiListenerMixin(PolymerElement);class SettingsSearchEngineEditDialogElement extends SettingsSearchEngineEditDialogElementBase{constructor(){super(...arguments);this.browserProxy_=SearchEnginesBrowserProxyImpl.getInstance()}static get is(){return"settings-search-engine-edit-dialog"}static get template(){return getTemplate$1j()}static get properties(){return{model:Object,searchEngine_:String,keyword_:String,queryUrl_:String,dialogTitle_:String,actionButtonText_:String,cancelButtonHidden_:Boolean,readonly_:Boolean,urlIsReadonly_:{type:Boolean,computed:"computeUrlIsReadonly_(model, readonly_)"}}}ready(){super.ready();if(this.model){this.dialogTitle_=loadTimeData.getString(this.model.isManaged?"searchEnginesViewSearchEngine":"searchEnginesEditSearchEngine");this.actionButtonText_=loadTimeData.getString(this.model.isManaged?"done":"save");this.cancelButtonHidden_=this.model.isManaged;this.searchEngine_=this.model.name;this.keyword_=this.model.keyword;this.queryUrl_=this.model.url;this.readonly_=this.model.isManaged}else{this.dialogTitle_=loadTimeData.getString("searchEnginesAddSearchEngine");this.actionButtonText_=loadTimeData.getString("add");this.readonly_=false}this.addEventListener("cancel",(()=>{this.browserProxy_.searchEngineEditCancelled()}));this.addWebUiListener("search-engines-changed",this.enginesChanged_.bind(this))}connectedCallback(){super.connectedCallback();microTask.run((()=>this.updateActionButtonState_()));this.browserProxy_.searchEngineEditStarted(this.model?this.model.modelIndex:DEFAULT_MODEL_INDEX);this.$.dialog.showModal()}enginesChanged_(searchEnginesInfo){if(this.model){const engineWasRemoved=["defaults","actives","others","extensions"].every((engineType=>searchEnginesInfo[engineType].every((e=>e.id!==this.model.id))));if(engineWasRemoved){this.cancel_();return}}[this.$.searchEngine,this.$.keyword,this.$.queryUrl].forEach((element=>this.validateElement_(element)))}cancel_(){this.$.dialog.cancel()}onActionButtonClick_(){this.browserProxy_.searchEngineEditCompleted(this.searchEngine_,this.keyword_,this.queryUrl_);this.$.dialog.close()}validateElement_(inputElement){if(inputElement.value===""){inputElement.invalid=false;this.updateActionButtonState_();return}this.browserProxy_.validateSearchEngineInput(inputElement.id,inputElement.value).then((isValid=>{inputElement.invalid=!isValid;this.updateActionButtonState_()}))}validate_(event){const inputElement=event.target;this.validateElement_(inputElement)}updateActionButtonState_(){const allValid=[this.$.searchEngine,this.$.keyword,this.$.queryUrl].every((function(inputElement){return!inputElement.invalid&&inputElement.value.length>0}));this.$.actionButton.disabled=!allValid}computeUrlIsReadonly_(){return this.readonly_||!!this.model&&this.model.urlLocked}}customElements.define(SettingsSearchEngineEditDialogElement.is,SettingsSearchEngineEditDialogElement);const styleMod$3=document.createElement("dom-module");styleMod$3.appendChild(html`
  <template>
    <style>
site-favicon{margin-inline-end:8px;min-width:16px}
    </style>
  </template>
`.content);styleMod$3.register("search-engine-entry");function getTemplate$1i(){return html`<!--_html_template_start_-->    <style include="settings-shared search-engine-entry">:host([is-default]) .list-item{font-weight:500}.additional-info-column-group{align-items:center;display:flex;flex:6}#controls-column-group{flex:auto;margin-left:auto;display:flex;justify-content:end;align-items:center}cr-policy-indicator{display:inline-flex;justify-content:center;margin-inline-start:16px;vertical-align:middle;width:36px}#name-column{align-items:center;display:flex;flex:3;word-break:break-word}#shortcut-column{word-break:break-word}#shortcut-column,#url-column{flex:auto;margin-inline-end:10px;max-width:200px}</style>

    <div class="list-item cr-row" role="row">
      <span role="cell" id="name-column">
        <site-favicon favicon-url="[[engine.iconURL]]" url="[[engine.url]]" icon-path="[[engine.iconPath]]">
        </site-favicon>
        <div>[[engine.displayName]]</div>
      </span>
      <span class="additional-info-column-group">
        <span role="cell" id="shortcut-column" hidden="[[!showShortcut]]">
          <div>[[engine.keyword]]</div>
        </span>
        <span role="cell" id="url-column" hidden="[[!showQueryUrl]]">
          <div class="text-elide">[[engine.url]]</div>
        </span>
        <span role="cell" id="controls-column-group">
          <cr-button class="secondary-button" on-click="onActivateClick_" hidden="[[!engine.canBeActivated]]" id="activate">
            $i18n{searchEnginesActivate}
          </cr-button>
          <cr-icon-button class="icon-edit" on-click="onViewOrEditClick_" title="$i18n{edit}" hidden="[[!showEditIcon_]]" disabled$="[[!engine.canBeEdited]]" id="editIconButton">
          </cr-icon-button>
          <cr-button class="secondary-button" on-click="onViewOrEditClick_" hidden="[[!engine.isManaged]]" id="viewDetailsButton">
            $i18n{searchEnginesViewDetails}
          </cr-button>
          <cr-icon-button class="icon-more-vert" on-click="onDotsClick_" disabled$="[[engine.default]]" title="$i18n{moreActions}" hidden="[[engine.isManaged]]">
          </cr-icon-button>
          <cr-action-menu role-description="$i18n{menu}">
            <button class="dropdown-item" on-click="onMakeDefaultClick_" disabled$="[[!engine.canBeDefault]]" id="makeDefault">
              $i18n{searchEnginesMakeDefault}
            </button>
            <button class="dropdown-item" on-click="onDeactivateClick_" hidden="[[!engine.canBeDeactivated]]" id="deactivate">
              $i18n{searchEnginesDeactivate}
            </button>
            <button class="dropdown-item" on-click="onDeleteClick_" hidden="[[!engine.canBeRemoved]]" id="delete">
              $i18n{delete}
            </button>
          </cr-action-menu>
          <template is="dom-if" if="[[engine.isManaged]]">
            <cr-policy-indicator indicator-type="userPolicy">
            </cr-policy-indicator>
          
        </template></span>
      </span>
    </div>
    <template is="dom-if" if="[[engine.extension]]">
      <extension-controlled-indicator extension-id="[[engine.extension.id]]" extension-name="[[engine.extension.name]]" extension-can-be-disabled="[[engine.extension.canBeDisabled]]">
      </extension-controlled-indicator>
    </template>
<!--_html_template_end_-->`}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SettingsSearchEngineEntryElement extends PolymerElement{constructor(){super(...arguments);this.browserProxy_=SearchEnginesBrowserProxyImpl.getInstance()}static get is(){return"settings-search-engine-entry"}static get template(){return getTemplate$1i()}static get properties(){return{engine:Object,showShortcut:{type:Boolean,value:false,reflectToAttribute:true},showQueryUrl:{type:Boolean,value:false,reflectToAttribute:true},isDefault:{reflectToAttribute:true,type:Boolean,computed:"computeIsDefault_(engine)"},showEditIcon_:{type:Boolean,computed:"computeShowEditIcon_(engine)"}}}closePopupMenu_(){this.shadowRoot.querySelector("cr-action-menu").close()}computeIsDefault_(){return this.engine.default}computeShowEditIcon_(){return!this.engine.canBeActivated&&!this.engine.isManaged}onDeleteClick_(e){e.preventDefault();this.closePopupMenu_();if(!this.engine.shouldConfirmDeletion){this.browserProxy_.removeSearchEngine(this.engine.modelIndex);return}const dots=this.shadowRoot.querySelector("cr-icon-button.icon-more-vert");assert(dots);this.dispatchEvent(new CustomEvent("delete-search-engine",{bubbles:true,composed:true,detail:{engine:this.engine,anchorElement:dots}}))}onDotsClick_(){const dots=this.shadowRoot.querySelector("cr-icon-button.icon-more-vert");assert(dots);this.shadowRoot.querySelector("cr-action-menu").showAt(dots,{anchorAlignmentY:AnchorAlignment.AFTER_END})}onViewOrEditClick_(e){e.preventDefault();this.closePopupMenu_();const anchor=this.shadowRoot.querySelector("cr-icon-button");assert(anchor);this.dispatchEvent(new CustomEvent("view-or-edit-search-engine",{bubbles:true,composed:true,detail:{engine:this.engine,anchorElement:anchor}}))}onMakeDefaultClick_(){this.closePopupMenu_();this.browserProxy_.setDefaultSearchEngine(this.engine.modelIndex,ChoiceMadeLocation.SEARCH_ENGINE_SETTINGS)}onActivateClick_(){this.closePopupMenu_();this.browserProxy_.setIsActiveSearchEngine(this.engine.modelIndex,true)}onDeactivateClick_(){this.closePopupMenu_();this.browserProxy_.setIsActiveSearchEngine(this.engine.modelIndex,false)}}customElements.define(SettingsSearchEngineEntryElement.is,SettingsSearchEngineEntryElement);function getTemplate$1h(){return html`<!--_html_template_start_-->    <style include="settings-shared">#headers{display:flex;padding:10px 0}#headers .additional-info-column-group{align-items:center;display:flex;flex:6}#headers .controls-group{flex:auto;margin-left:auto;display:flex;justify-content:end;align-items:center}#headers .name{flex:3}#headers .shortcut,#headers .url{flex:auto;margin-inline-end:40px}settings-search-engine-entry{border-top:var(--cr-separator-line)}:host([fixed-height]) #container{max-height:calc((var(--cr-section-min-height) + var(--cr-separator-height)) * 6)}.icon-placeholder{margin-inline-end:0;margin-inline-start:var(--cr-icon-button-margin-start);width:var(--cr-icon-ripple-size)}.cr-row{padding-inline-end:7px;padding-inline-start:0}</style>
    <div id="outer" class="list-frame" role="table">
      <div role="rowgroup">
        <div role="row" id="headers" class="column-header">
          <span class="name" role="columnheader">[[nameColumnHeader]]</span>
          <span class="additional-info-column-group">
            <span class="shortcut" role="columnheader" hidden="[[!showShortcut]]">
              $i18n{searchEnginesShortcut}
            </span>
            <span class="url" role="columnheader" hidden="[[!showQueryUrl]]">
              $i18n{searchEnginesQueryURL}
            </span>
            <span class="controls-group">
              <span class="icon-placeholder"></span>
              <span class="icon-placeholder"></span>
            </span>
          </span>
        </div>
      </div>
      <template is="dom-if" if="[[!collapseList]]">
        <div id="container" class="scroll-container" scrollable$="[[fixedHeight]]">
          <div role="rowgroup">
            <dom-repeat items="[[engines]]">
              <template>
                <settings-search-engine-entry engine="[[item]]" show-query-url="[[showQueryUrl]]" show-shortcut="[[showShortcut]]">
                </settings-search-engine-entry>
              </template>
            </dom-repeat>
          </div>
        </div>
      </template>

      <template is="dom-if" if="[[collapseList]]">
        <div id="containerWithCollapsibleSection" class="scroll-container" hidden="[[!collapseList]]" scrollable$="[[fixedHeight]]">
          <div role="rowgroup">
            <dom-repeat items="[[visibleEngines]]">
              <template>
                <settings-search-engine-entry engine="[[item]]" show-shortcut="[[showShortcut]]" show-query-url="[[showQueryUrl]]">
                </settings-search-engine-entry>
              </template>
            </dom-repeat>
          </div>

          <cr-expand-button no-hover class="cr-row" hidden="[[!collapsedEngines.length]]" expanded="{{enginesListExpanded_}}">
            <div>[[expandListText]]</div>
          </cr-expand-button>
          <iron-collapse opened="[[enginesListExpanded_]]">
            <div role="rowgroup">
              <dom-repeat items="[[collapsedEngines]]">
                <template>
                  <settings-search-engine-entry engine="[[item]]" show-shortcut="[[showShortcut]]" show-query-url="[[showQueryUrl]]">
                  </settings-search-engine-entry>
                </template>
              </dom-repeat>
            </div>
          </iron-collapse>
        </div>
      </template>
    </div>
<!--_html_template_end_-->`}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SettingsSearchEnginesListElement extends PolymerElement{static get is(){return"settings-search-engines-list"}static get template(){return getTemplate$1h()}static get properties(){return{engines:Array,showShortcut:{type:Boolean,value:false,reflectToAttribute:true},showQueryUrl:{type:Boolean,value:false,reflectToAttribute:true},collapseList:{type:Boolean,value:false,reflectToAttribute:true},nameColumnHeader:{type:String,reflectToAttribute:true},visibleEnginesSize:{type:Number,value:5},visibleEngines:{type:Array,computed:"computeVisibleEngines_(engines)"},collapsedEngines:{type:Array,computed:"computeCollapsedEngines_(engines)"},scrollOffset:Number,lastFocused_:Object,listBlurred_:Boolean,expandListText:{type:String,reflectToAttribute:true},fixedHeight:{type:Boolean,value:false,reflectToAttribute:true}}}computeVisibleEngines_(engines){if(!engines||!engines.length){return}return engines.slice(0,this.visibleEnginesSize)}computeCollapsedEngines_(engines){if(!engines||!engines.length){return}return engines.slice(this.visibleEnginesSize)}}customElements.define(SettingsSearchEnginesListElement.is,SettingsSearchEnginesListElement);function getTemplate$1g(){return html`<!--_html_template_start_-->    <style include="settings-shared search-engine-entry">.name-column{align-items:center;display:flex;flex:3;word-break:break-word}.keyword-column{flex:7}</style>
    <div class="list-item" focus-row-container>
      <div class="name-column">
        <site-favicon favicon-url="[[engine.iconURL]]"></site-favicon>
        <span>[[engine.displayName]]</span>
      </div>
      <div class="keyword-column">[[engine.keyword]]</div>
      <cr-icon-button class="icon-more-vert" on-click="onDotsClick_" title="$i18n{moreActions}" focus-row-control focus-type="menu">
      </cr-icon-button>
      <cr-action-menu role-description="$i18n{menu}">
        <button class="dropdown-item" on-click="onManageClick_" id="manage">
          $i18n{searchEnginesManageExtension}
        </button>
        <button class="dropdown-item" on-click="onDisableClick_" id="disable">
          $i18n{disable}
        </button>
      </cr-action-menu>
    </div>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsOmniboxExtensionEntryElementBase=FocusRowMixin(PolymerElement);class SettingsOmniboxExtensionEntryElement extends SettingsOmniboxExtensionEntryElementBase{constructor(){super(...arguments);this.browserProxy_=ExtensionControlBrowserProxyImpl.getInstance()}static get is(){return"settings-omnibox-extension-entry"}static get template(){return getTemplate$1g()}static get properties(){return{engine:Object}}onManageClick_(){this.closePopupMenu_();this.browserProxy_.manageExtension(this.engine.extension.id)}onDisableClick_(){this.closePopupMenu_();this.browserProxy_.disableExtension(this.engine.extension.id)}closePopupMenu_(){this.shadowRoot.querySelector("cr-action-menu").close()}onDotsClick_(){const dots=this.shadowRoot.querySelector("cr-icon-button");assert(dots);this.shadowRoot.querySelector("cr-action-menu").showAt(dots,{anchorAlignmentY:AnchorAlignment.AFTER_END})}}customElements.define(SettingsOmniboxExtensionEntryElement.is,SettingsOmniboxExtensionEntryElement);function getTemplate$1f(){return html`<!--_html_template_start_-->    <style include="cr-shared-style settings-shared iron-flex">settings-omnibox-extension-entry{border-top:var(--cr-separator-line)}</style>
    <div class="cr-row first">
      <div class="secondary">$i18n{searchEnginesPageExplanation}</div>
    </div>
    <div class="cr-row first">
      <div class="flex cr-padded-text">
        <div id="keyboardShortcutsTitle">
          $i18n{searchEnginesKeyboardShortcutsTitle}
        </div>
        <div class="secondary">
          $i18n{searchEnginesKeyboardShortcutsDescription}
        </div>
      </div>
    </div>
    <div class="list-frame">
      <settings-radio-group id="keyboardShortcutSettingGroup" pref="{{prefs.omnibox.keyword_space_triggering_enabled}}" on-change="onKeyboardShortcutSettingChange_">
        <controlled-radio-button class="list-item" name="true" pref="{{prefs.omnibox.keyword_space_triggering_enabled}}" label="$i18n{searchEnginesKeyboardShortcutsSpaceOrTab}" aria-labelledby="keyboardShortcutsTitle" no-extension-indicator>
        </controlled-radio-button>
        <controlled-radio-button class="list-item" name="false" pref="{{prefs.omnibox.keyword_space_triggering_enabled}}" label="$i18n{searchEnginesKeyboardShortcutsTab}" aria-labelledby="keyboardShortcutsTitle" no-extension-indicator>
        </controlled-radio-button>
      </settings-radio-group>
    </div>

    <div class="cr-row first">
      <div class="flex cr-padded-text">
        <h2>$i18n{searchEnginesSearchEngines}</h2>
        <div class="secondary">
          $i18n{searchEnginesSearchEnginesExplanation}
        </div>
      </div>
    </div>
    <settings-search-engines-list hidden="[[!matchingDefaultEngines_.length]]" engines="[[matchingDefaultEngines_]]" show-shortcut name-column-header="$i18n{searchEnginesSearchEngine}">
    </settings-search-engines-list>

    <div class="no-search-results list-frame" hidden="[[matchingDefaultEngines_.length]]">
      $i18n{searchNoResults}
    </div>

    <template is="dom-if" if="[[showEditDialog_]]" restamp>
      <settings-search-engine-edit-dialog model="[[dialogModel_]]" on-close="onCloseEditDialog_">
      </settings-search-engine-edit-dialog>
    </template>

    <template is="dom-if" if="[[showDeleteConfirmationDialog_]]" restamp>
      <settings-simple-confirmation-dialog id="deleteConfirmDialog" title-text="$i18n{searchEnginesDeleteConfirmationTitle}" body-text="$i18n{searchEnginesDeleteConfirmationDescription}" confirm-text="$i18n{delete}" on-close="onCloseDeleteConfirmationDialog_">
      </settings-simple-confirmation-dialog>
    </template>

    <div class="cr-row first">
        <div class="flex cr-padded-text">
          <h2>$i18n{searchEnginesSiteSearch}</h2>
          <div class="secondary">$i18n{searchEnginesSiteSearchExplanation}</div>
        </div>
        <cr-button class="secondary-button header-aligned-button" on-click="onAddSearchEngineClick_" id="addSearchEngine">
          $i18n{add}
        </cr-button>
    </div>
    <div id="noActiveEngines" class="list-frame" hidden="[[activeEngines.length]]">
          $i18n{searchEnginesNoSitesAdded}
    </div>
    <div class="no-search-results list-frame" hidden="[[!showNoResultsMessage_(
          activeEngines, matchingActiveEngines_)]]">
          $i18n{searchNoResults}
    </div>
    <settings-search-engines-list id="activeEngines" hidden="[[!matchingActiveEngines_.length]]" engines="[[matchingActiveEngines_]]" scroll-target="[[subpageScrollTarget]]" show-shortcut collapse-list expand-list-text="$i18n{searchEnginesAdditionalSites}" name-column-header="$i18n{searchEnginesSiteOrPage}">
    </settings-search-engines-list>

    <div class="cr-row first">
        <h2>$i18n{searchEnginesInactiveShortcuts}</h2>
    </div>
    <settings-search-engines-list hidden="[[!matchingOtherEngines_.length]]" engines="[[matchingOtherEngines_]]" scroll-target="[[subpageScrollTarget]]" show-query-url collapse-list expand-list-text="$i18n{searchEnginesAdditionalInactiveSites}" name-column-header="$i18n{searchEnginesSiteOrPage}">
    </settings-search-engines-list>

    <div id="noOtherEngines" class="list-frame" hidden="[[otherEngines.length]]">
      $i18n{searchEnginesNoOtherEngines}
    </div>
    <div class="no-search-results list-frame" hidden="[[!showNoResultsMessage_(
            otherEngines, matchingOtherEngines_)]]">
      $i18n{searchNoResults}
    </div>

    <template is="dom-if" if="[[showExtensionsList_]]">
      <div class="cr-row first">
        <div class="flex cr-padded-text">
          <h2 class="flex">$i18n{searchEnginesExtension}</h2>
          <div class="secondary"> $i18n{searchEnginesExtensionExplanation}</div>
        </div>
      </div>
      <div class="no-search-results list-frame" hidden="[[matchingExtensions_.length]]">
        $i18n{searchNoResults}
      </div>
      <iron-list id="extensions" class="extension-engines list-frame" items="[[matchingExtensions_]]" preserve-focus risk-selection>
        <template>
          <settings-omnibox-extension-entry engine="[[item]]" focus-row-index="[[index]]" tabindex$="[[tabIndex]]" iron-list-tab-index="[[tabIndex]]" last-focused="{{omniboxExtensionlastFocused_}}" list-blurred="{{omniboxExtensionListBlurred_}}">
          </settings-omnibox-extension-entry>
        </template>
      </iron-list>
    </template>
<!--_html_template_end_-->`}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsSearchEnginesPageElementBase=GlobalScrollTargetMixin(WebUiListenerMixin(PolymerElement));class SettingsSearchEnginesPageElement extends SettingsSearchEnginesPageElementBase{constructor(){super(...arguments);this.browserProxy_=SearchEnginesBrowserProxyImpl.getInstance()}static get is(){return"settings-search-engines-page"}static get template(){return getTemplate$1f()}static get properties(){return{prefs:{type:Object,notify:true},defaultEngines:Array,activeEngines:Array,otherEngines:Array,extensions:Array,subpageRoute:{type:Object,value:routes.SEARCH_ENGINES},showExtensionsList_:{type:Boolean,computed:"computeShowExtensionsList_(extensions)"},filter:{type:String,value:""},matchingDefaultEngines_:{type:Array,computed:"computeMatchingEngines_(defaultEngines, filter)"},matchingActiveEngines_:{type:Array,computed:"computeMatchingEngines_(activeEngines, filter)"},matchingOtherEngines_:{type:Array,computed:"computeMatchingEngines_(otherEngines, filter)"},matchingExtensions_:{type:Array,computed:"computeMatchingEngines_(extensions, filter)"},omniboxExtensionlastFocused_:Object,omniboxExtensionListBlurred_:Boolean,dialogModel_:{type:Object,value:null},dialogAnchorElement_:{type:Object,value:null},showEditDialog_:{type:Boolean,value:false},showDeleteConfirmationDialog_:{type:Boolean,value:false}}}static get observers(){return["extensionsChanged_(extensions, showExtensionsList_)"]}ready(){super.ready();this.browserProxy_.getSearchEnginesList().then(this.enginesChanged_.bind(this));this.addWebUiListener("search-engines-changed",this.enginesChanged_.bind(this));this.addEventListener("view-or-edit-search-engine",(e=>this.onEditSearchEngine_(e)));this.addEventListener("delete-search-engine",(e=>this.onDeleteSearchEngine_(e)))}openEditDialog_(searchEngine,anchorElement){this.dialogModel_=searchEngine;this.dialogAnchorElement_=anchorElement;this.showEditDialog_=true}openDeleteConfirmationDialog_(searchEngine,anchorElement){this.dialogModel_=searchEngine;this.dialogAnchorElement_=anchorElement;this.showDeleteConfirmationDialog_=true}onCloseEditDialog_(){this.showEditDialog_=false;focusWithoutInk(this.dialogAnchorElement_);this.dialogModel_=null;this.dialogAnchorElement_=null}onCloseDeleteConfirmationDialog_(){const dialog=this.shadowRoot.querySelector("settings-simple-confirmation-dialog");assert(dialog);const confirmed=dialog.wasConfirmed();this.showDeleteConfirmationDialog_=false;if(confirmed){assert(this.dialogModel_);this.browserProxy_.removeSearchEngine(this.dialogModel_.modelIndex);this.dialogAnchorElement_=null}this.dialogModel_=null}onEditSearchEngine_(e){this.openEditDialog_(e.detail.engine,e.detail.anchorElement)}onDeleteSearchEngine_(e){this.openDeleteConfirmationDialog_(e.detail.engine,e.detail.anchorElement)}extensionsChanged_(){if(this.showExtensionsList_&&this.$.extensions){this.$.extensions.notifyResize()}}enginesChanged_(searchEnginesInfo){this.defaultEngines=searchEnginesInfo.defaults;this.activeEngines=searchEnginesInfo.actives;this.otherEngines=searchEnginesInfo.others;this.extensions=searchEnginesInfo.extensions}onAddSearchEngineClick_(e){e.preventDefault();this.openEditDialog_(null,this.shadowRoot.querySelector("#addSearchEngine"))}computeShowExtensionsList_(){return this.extensions.length>0}computeMatchingEngines_(list){if(this.filter===""){return list}const filter=this.filter.toLowerCase();return list.filter((e=>[e.displayName,e.name,e.keyword,e.url].some((term=>term.toLowerCase().includes(filter)))))}showNoResultsMessage_(list,filteredList){return list.length>0&&filteredList.length===0}onKeyboardShortcutSettingChange_(){const spaceEnabled=this.$.keyboardShortcutSettingGroup.selected==="true";this.browserProxy_.recordSearchEnginesPageHistogram(spaceEnabled?SearchEnginesInteractions.KEYBOARD_SHORTCUT_SPACE_OR_TAB:SearchEnginesInteractions.KEYBOARD_SHORTCUT_TAB)}}customElements.define(SettingsSearchEnginesPageElement.is,SettingsSearchEnginesPageElement);function getTemplate$1e(){return html`<!--_html_template_start_--><style include="settings-shared">.info-container{color:var(--cr-secondary-text-color);display:flex;padding:10px}.info-section{flex:1}.info-header{color:var(--google-blue-600);font-weight:500;padding-block-end:0;padding-block-start:0;padding-inline-start:10px}@media (prefers-color-scheme:dark){.info-header{color:var(--google-blue-300)}}.info-text-container{display:flex;gap:18px;padding:10px}</style>
<settings-toggle-button id="toggleButton" pref="{{pref_}}" no-set-pref label="$i18n{siteSettingsAntiAbuse}" sub-label="$i18n{siteSettingsAntiAbuseDescription}" disabled="[[toggleDisabled_]]" on-settings-boolean-control-change="onToggleChange_">
</settings-toggle-button>
<div class="info-container">
  <div class="info-section">
    <h2 class="info-header">$i18n{antiAbuseWhenOnHeader}</h2>
    <div class="info-text-container">
      <iron-icon icon="settings20:archive" aria-hidden="true"></iron-icon>
      <div>$i18n{antiAbuseWhenOnSectionOne}</div>
    </div>
    <div class="info-text-container">
      <iron-icon icon="settings20:dashboard" aria-hidden="true">
      </iron-icon>
      <div>$i18n{antiAbuseWhenOnSectionTwo}</div>
    </div>
    <div class="info-text-container">
      <iron-icon icon="settings20:timer" aria-hidden="true">
      </iron-icon>
      <div>$i18n{antiAbuseWhenOnSectionThree}</div>
    </div>
  </div>
  <div class="info-section">
    <h2 class="info-header">$i18n{antiAbuseThingsToConsiderHeader}</h2>
    <div class="info-text-container">
      <iron-icon icon="settings20:background-replace" aria-hidden="true">
      </iron-icon>
      <div>$i18n{antiAbuseThingsToConsiderSectionOne}</div>
    </div>
  </div>
</div><!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const AntiAbuseElementBase=SiteSettingsMixin(WebUiListenerMixin(PolymerElement));class SettingsAntiAbusePageElement extends AntiAbuseElementBase{static get is(){return"settings-anti-abuse-page"}static get template(){return getTemplate$1e()}static get properties(){return{pref_:{type:Object,value(){return{type:chrome.settingsPrivate.PrefType.BOOLEAN}}},toggleDisabled_:Boolean}}static get observers(){return["onEnforcementChanged_(pref_.enforcement)"]}ready(){super.ready();this.addWebUiListener("contentSettingCategoryChanged",(category=>this.onCategoryChanged_(category)));this.updateToggleValue_()}onCategoryChanged_(category){if(category!==ContentSettingsTypes.ANTI_ABUSE){return}this.updateToggleValue_()}onEnforcementChanged_(enforcement){this.toggleDisabled_=enforcement===chrome.settingsPrivate.Enforcement.ENFORCED}async updateToggleValue_(){const defaultValue=await this.browserProxy.getDefaultValueForContentType(ContentSettingsTypes.ANTI_ABUSE);if(defaultValue.source!==undefined&&defaultValue.source!==ContentSettingProvider.PREFERENCE){this.set("pref_.enforcement",chrome.settingsPrivate.Enforcement.ENFORCED);let controlledBy=chrome.settingsPrivate.ControlledBy.USER_POLICY;switch(defaultValue.source){case ContentSettingProvider.POLICY:controlledBy=chrome.settingsPrivate.ControlledBy.DEVICE_POLICY;break;case ContentSettingProvider.SUPERVISED_USER:controlledBy=chrome.settingsPrivate.ControlledBy.PARENT;break;case ContentSettingProvider.EXTENSION:controlledBy=chrome.settingsPrivate.ControlledBy.EXTENSION;break}this.set("pref_.controlledBy",controlledBy)}else{this.set("pref_.enforcement",null);this.set("pref_.controlledBy",null)}this.set("pref_.value",this.computeIsSettingEnabled(defaultValue.setting))}onToggleChange_(){this.browserProxy.setDefaultValueForContentType(ContentSettingsTypes.ANTI_ABUSE,this.$.toggleButton.checked?ContentSetting.ALLOW:ContentSetting.BLOCK)}}customElements.define(SettingsAntiAbusePageElement.is,SettingsAntiAbusePageElement);function getTemplate$1d(){return html`<!--_html_template_start_--><style include="settings-shared settings-columned-section">.settings-columned-section{padding-top:4px}</style>
<settings-toggle-button id="adMeasurementToggle" pref="{{prefs.privacy_sandbox.m1.ad_measurement_enabled}}" label="$i18n{adMeasurementPageToggleLabel}" sub-label="$i18n{adMeasurementPageToggleSubLabel}" on-settings-boolean-control-change="onToggleChange_">
</settings-toggle-button>
<div class="settings-columned-section">
  <div class="column">
    <h2 class="description-header">$i18n{adMeasurementPageEnabledHeading}</h2>
    <ul class="icon-bulleted-list">
      <li>
        <iron-icon icon="settings20:bar-chart" aria-hidden="true"></iron-icon>
        <div class="secondary">$i18n{adMeasurementPageEnabledBullet1}</div>
      </li>
      <li>
        <iron-icon icon="settings20:auto-delete" aria-hidden="true"></iron-icon>
        <div class="secondary">$i18n{adMeasurementPageEnabledBullet2}</div>
      </li>
      <li>
        <iron-icon icon="settings20:background-replace" aria-hidden="true">
        </iron-icon>
        <div class="secondary">$i18n{adMeasurementPageEnabledBullet3}</div>
      </li>
    </ul>
  </div>
  <div class="column">
    <h2 class="description-header">$i18n{adMeasurementPageConsiderHeading}</h2>
    <ul class="icon-bulleted-list">
      <li>
        <iron-icon icon="settings20:delete" aria-hidden="true"></iron-icon>
        <div class="secondary">$i18n{adMeasurementPageConsiderBullet1}</div>
      </li>
      <li>
        <iron-icon icon="settings20:filter-list" aria-hidden="true"></iron-icon>
        <div class="secondary">$i18n{adMeasurementPageConsiderBullet2}</div>
      </li>
    </ul>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsPrivacySandboxAdMeasurementSubpageElementBase=RouteObserverMixin(PrefsMixin(PolymerElement));class SettingsPrivacySandboxAdMeasurementSubpageElement extends SettingsPrivacySandboxAdMeasurementSubpageElementBase{constructor(){super(...arguments);this.metricsBrowserProxy_=MetricsBrowserProxyImpl.getInstance()}static get is(){return"settings-privacy-sandbox-ad-measurement-subpage"}static get template(){return getTemplate$1d()}static get properties(){return{prefs:{type:Object,notify:true}}}currentRouteChanged(newRoute){if(newRoute===routes.PRIVACY_SANDBOX_AD_MEASUREMENT){HatsBrowserProxyImpl.getInstance().trustSafetyInteractionOccurred(TrustSafetyInteraction.OPENED_AD_MEASUREMENT_SUBPAGE)}}onToggleChange_(e){const target=e.target;this.metricsBrowserProxy_.recordAction(target.checked?"Settings.PrivacySandbox.AdMeasurement.Enabled":"Settings.PrivacySandbox.AdMeasurement.Disabled")}}customElements.define(SettingsPrivacySandboxAdMeasurementSubpageElement.is,SettingsPrivacySandboxAdMeasurementSubpageElement);function getTemplate$1c(){return html`<!--_html_template_start_--><style include="cr-shared-style settings-shared">.interest-item{min-height:auto;padding-block-end:16px;padding-block-start:16px}#label{flex:1}site-favicon{margin-inline-end:16px}</style>
<div class="list-item interest-item" focus-row-container>
  <site-favicon hidden$="[[interest.topic]]" url="[[interest.site]]">
  </site-favicon>
  <div id="label">[[getDisplayString_(interest)]]</div>
  <cr-button role="button" on-click="onInterestChanged_" aria-label$="[[getButtonAriaLabel_(interest.removed)]]">
    [[getButtonLabel_(interest.removed)]]
  </cr-button>
</div>
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PrivacySandboxInterestItemElementBase=I18nMixin(PolymerElement);class PrivacySandboxInterestItemElement extends PrivacySandboxInterestItemElementBase{static get is(){return"privacy-sandbox-interest-item"}static get template(){return getTemplate$1c()}static get properties(){return{interest:Object}}getDisplayString_(){if(this.interest.topic!==undefined){assert(!this.interest.site);return this.interest.topic.displayString}else{assert(!this.interest.topic);return this.interest.site}}getButtonLabel_(){if(this.interest.topic!==undefined){assert(!this.interest.site);return this.i18n(this.interest.removed?"topicsPageAllowTopic":"topicsPageBlockTopic")}else{assert(!this.interest.topic);return this.i18n(this.interest.removed?"fledgePageAllowSite":"fledgePageBlockSite")}}getButtonAriaLabel_(){if(this.interest.topic!==undefined){assert(!this.interest.site);return this.i18n(this.interest.removed?"topicsPageAllowTopicA11yLabel":"topicsPageBlockTopicA11yLabel",this.interest.topic.displayString)}else{assert(!this.interest.topic);return this.i18n(this.interest.removed?"fledgePageAllowSiteA11yLabel":"fledgePageBlockSiteA11yLabel",this.interest.site)}}onInterestChanged_(e){e.stopPropagation();this.dispatchEvent(new CustomEvent("interest-changed",{bubbles:true,composed:true,detail:this.interest}))}}customElements.define(PrivacySandboxInterestItemElement.is,PrivacySandboxInterestItemElement);function getTemplate$1b(){return html`<!--_html_template_start_--><style include="cr-shared-style">#currentSitesSection{align-items:center;display:flex;padding:0 var(--cr-section-padding)}#currentSitesSectionWrapper{width:100%}#currentSitesHeading{color:var(--cr-secondary-text-color);font-size:100%;font-weight:500;margin:0;padding-block-start:var(--cr-section-vertical-padding)}#currentSitesDescription{padding-block-end:var(--cr-section-vertical-padding)}#learnMoreLink{background:0 0;border:none;color:var(--cr-link-color);cursor:pointer;margin:0;padding:0;text-decoration:underline}.no-sites{padding-block-end:32px;padding-block-start:16px;padding-inline-start:40px}#blockedSitesDescription{min-height:auto;padding-block-end:16px;padding-block-start:16px}.no-blocked-sites{padding-inline-start:60px}#blockedSitesList{padding:0 var(--cr-section-padding)}#footer{padding-block-end:16px;padding-block-start:16px}#dialog p{margin:0;padding-block-end:16px;padding-block-start:4px}#footer{padding:16px var(--cr-section-padding)}a{color:var(--cr-link-color)}</style>

<settings-toggle-button id="fledgeToggle" pref="{{prefs.privacy_sandbox.m1.fledge_enabled}}" label="$i18n{fledgePageToggleLabel}" sub-label="$i18n{fledgePageToggleSubLabel}" on-settings-boolean-control-change="onToggleChange_">
</settings-toggle-button>
<template is="dom-if" if="[[!isFledgePrefManaged_(
    prefs.privacy_sandbox.m1.fledge_enabled.enforcement)]]" restamp>
  <div id="currentSitesSection">
    <div id="currentSitesSectionWrapper" class="hr">
      <h2 id="currentSitesHeading">
        $i18n{fledgePageCurrentSitesHeading}
      </h2>
      <div id="currentSitesDescription" class="cr-secondary-text">
        $i18n{fledgePageCurrentSitesDescription}
        
        <button id="learnMoreLink" on-click="onLearnMoreClick_" aria-label="$i18n{fledgePageCurrentSitesDescriptionLearnMoreA11yLabel}">
          $i18n{fledgePageCurrentSitesDescriptionLearnMore}
        </button>
      </div>
      <template is="dom-if" if="[[isFledgeEnabledAndLoaded_(
          prefs.privacy_sandbox.m1.fledge_enabled.value, isSitesListLoaded_)]]" restamp>
        <div role="region" aria-label="$i18n{fledgePageCurrentSitesRegionA11yDescription}">
          <template is="dom-repeat" items="[[mainSitesList_]]">
            <privacy-sandbox-interest-item interest="[[item]]" on-interest-changed="onInterestChanged_">
            </privacy-sandbox-interest-item>
          </template>
        </div>
        <template is="dom-if" if="[[!isRemainingSitesListEmpty_(
            remainingSitesList_.length)]]" restamp>
          <cr-expand-button id="seeAllSites" expanded="{{seeAllSitesExpanded_}}">
            $i18n{fledgePageSeeAllSitesLabel}
          </cr-expand-button>
          <iron-collapse opened="[[seeAllSitesExpanded_]]">
            <div role="region" aria-label="$i18n{fledgePageCurrentSitesRegionA11yDescription}">
              <template is="dom-repeat" items="[[remainingSitesList_]]">
                <privacy-sandbox-interest-item interest="[[item]]" on-interest-changed="onInterestChanged_">
                </privacy-sandbox-interest-item>
              </template>
            </div>
          </iron-collapse>
        </template>
        <div id="currentSitesDescriptionEmpty" class="no-sites cr-secondary-text" hidden="[[!isSitesListEmpty_(sitesList_.length)]]">
          $i18n{fledgePageCurrentSitesDescriptionEmpty}
        </div>
      </template>
      <div id="currentSitesDescriptionDisabled" class="no-sites cr-secondary-text" hidden="[[prefs.privacy_sandbox.m1.fledge_enabled.value]]">
        $i18n{fledgePageCurrentSitesDescriptionDisabled}
      </div>
    </div>
  </div>
</template>
<cr-expand-button id="blockedSitesRow" class="cr-row" expanded="{{blockedSitesExpanded_}}">
  $i18n{fledgePageBlockedSitesHeading}
</cr-expand-button>
<iron-collapse opened="[[blockedSitesExpanded_]]">
  <div id="blockedSitesDescription" class$="[[getBlockedSitesDescriptionClass_(blockedSitesList_.length)]]">
    [[computeBlockedSitesDescription_(blockedSitesList_.length)]]
  </div>
  <div id="blockedSitesList" role="region" aria-label="$i18n{fledgePageBlockedSitesRegionA11yDescription}">
    <template is="dom-repeat" items="[[blockedSitesList_]]">
      <privacy-sandbox-interest-item interest="[[item]]" on-interest-changed="onInterestChanged_">
      </privacy-sandbox-interest-item>
    </template>
  </div>
</iron-collapse>
<div id="footer" class="cr-secondary-text hr">
  $i18nRaw{fledgePageFooter}
</div>

<template is="dom-if" if="[[isLearnMoreDialogOpen_]]" restamp>
  <cr-dialog id="dialog" on-close="onCloseDialog_" show-on-attach>
    <div slot="title">$i18n{fledgePageLearnMoreHeading}</div>
    <div slot="body">
      <p>$i18n{fledgePageLearnMoreBullet1}</p>
      <p>$i18n{fledgePageLearnMoreBullet2}</p>
      <p>$i18nRaw{fledgePageLearnMoreBullet3}</p>
    </div>
    <div slot="button-container">
      <cr-button id="closeButton" class="cancel-button" autofocus on-click="onCloseDialog_">
        $i18n{close}
      </cr-button>
    </div>
  </cr-dialog>
</template>
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const maxFledgeSitesCount=15;const SettingsPrivacySandboxFledgeSubpageElementBase=RouteObserverMixin(I18nMixin(PrefsMixin(PolymerElement)));class SettingsPrivacySandboxFledgeSubpageElement extends SettingsPrivacySandboxFledgeSubpageElementBase{constructor(){super(...arguments);this.privacySandboxBrowserProxy_=PrivacySandboxBrowserProxyImpl.getInstance();this.metricsBrowserProxy_=MetricsBrowserProxyImpl.getInstance()}static get is(){return"settings-privacy-sandbox-fledge-subpage"}static get template(){return getTemplate$1b()}static get properties(){return{prefs:{type:Object,notify:true},sitesList_:{type:Array,observer:"onSitesListChanged_",value(){return[]}},mainSitesList_:{type:Array,value(){return[]}},remainingSitesList_:{type:Array,value(){return[]}},blockedSitesList_:{type:Array,value(){return[]}},isSitesListLoaded_:{type:Boolean,value:false},isLearnMoreDialogOpen_:{type:Boolean,value:false},seeAllSitesExpanded_:{type:Boolean,value:false,observer:"onSeeAllSitesExpanded_"},blockedSitesExpanded_:{type:Boolean,value:false,observer:"onBlockedSitesExpanded_"}}}static get maxFledgeSites(){return maxFledgeSitesCount}ready(){super.ready();this.privacySandboxBrowserProxy_.getFledgeState().then((state=>this.onFledgeStateChanged_(state)));this.$.footer.querySelectorAll("a").forEach((link=>link.setAttribute("aria-description",this.i18n("opensInNewTab"))))}currentRouteChanged(newRoute){if(newRoute===routes.PRIVACY_SANDBOX_FLEDGE){HatsBrowserProxyImpl.getInstance().trustSafetyInteractionOccurred(TrustSafetyInteraction.OPENED_FLEDGE_SUBPAGE)}}isFledgePrefManaged_(){const fledgeEnabledPref=this.getPref("privacy_sandbox.m1.fledge_enabled");if(fledgeEnabledPref.enforcement===chrome.settingsPrivate.Enforcement.ENFORCED){assert(!fledgeEnabledPref.value);return true}return false}onFledgeStateChanged_(state){this.sitesList_=state.joiningSites.map((site=>({site:site,removed:false})));this.blockedSitesList_=state.blockedSites.map((site=>({site:site,removed:true})));this.isSitesListLoaded_=true}onSitesListChanged_(){this.mainSitesList_=this.sitesList_.slice(0,maxFledgeSitesCount);this.remainingSitesList_=this.sitesList_.slice(maxFledgeSitesCount)}isFledgeEnabledAndLoaded_(){return this.getPref("privacy_sandbox.m1.fledge_enabled").value&&this.isSitesListLoaded_}isSitesListEmpty_(){return this.sitesList_.length===0}isRemainingSitesListEmpty_(){return this.remainingSitesList_.length===0}computeBlockedSitesDescription_(){return this.i18n(this.blockedSitesList_.length===0?"fledgePageBlockedSitesDescriptionEmpty":"fledgePageBlockedSitesDescription")}getBlockedSitesDescriptionClass_(){const defaultClass="cr-row continuation cr-secondary-text";return this.blockedSitesList_.length===0?`${defaultClass} no-blocked-sites`:defaultClass}onToggleChange_(e){const target=e.target;this.metricsBrowserProxy_.recordAction(target.checked?"Settings.PrivacySandbox.Fledge.Enabled":"Settings.PrivacySandbox.Fledge.Disabled");this.sitesList_=[]}onLearnMoreClick_(){this.metricsBrowserProxy_.recordAction("Settings.PrivacySandbox.Fledge.LearnMoreClicked");this.isLearnMoreDialogOpen_=true}onCloseDialog_(){this.isLearnMoreDialogOpen_=false;afterNextRender(this,(async()=>{this.shadowRoot.querySelector("#learnMoreLink")?.focus()}))}onInterestChanged_(e){const interest=e.detail;assert(!interest.topic);if(interest.removed){this.blockedSitesList_.splice(this.blockedSitesList_.indexOf(interest),1)}else{this.sitesList_.splice(this.sitesList_.indexOf(interest),1);this.blockedSitesList_.push({site:interest.site,removed:true});this.blockedSitesList_.sort(((first,second)=>first.site<second.site?-1:1))}this.sitesList_=this.sitesList_.slice();this.blockedSitesList_=this.blockedSitesList_.slice();this.privacySandboxBrowserProxy_.setFledgeJoiningAllowed(interest.site,interest.removed);this.metricsBrowserProxy_.recordAction(interest.removed?"Settings.PrivacySandbox.Fledge.SiteAdded":"Settings.PrivacySandbox.Fledge.SiteRemoved");afterNextRender(this,(async()=>{if(!this.shadowRoot.activeElement){this.shadowRoot.querySelector("#blockedSitesRow")?.focus()}}))}onSeeAllSitesExpanded_(){if(this.seeAllSitesExpanded_){this.metricsBrowserProxy_.recordAction("Settings.PrivacySandbox.Fledge.AllSitesOpened")}}onBlockedSitesExpanded_(){if(this.blockedSitesExpanded_){this.metricsBrowserProxy_.recordAction("Settings.PrivacySandbox.Fledge.BlockedSitesOpened")}}}customElements.define(SettingsPrivacySandboxFledgeSubpageElement.is,SettingsPrivacySandboxFledgeSubpageElement);function getTemplate$1a(){return html`<!--_html_template_start_--><style include="cr-shared-style">img{width:100%}</style>

<picture>
  <source srcset="chrome://settings/images/ad_privacy_banner_dark.svg" media="(prefers-color-scheme: dark)">
  <img id="banner" alt="" src="chrome://settings/images/ad_privacy_banner.svg">
</picture>
<template is="dom-if" if="[[!isPrivacySandboxRestricted_]]">
  <cr-link-row id="privacySandboxTopicsLinkRow" start-icon="settings20:interests" label="$i18n{adPrivacyPageTopicsLinkRowLabel}" sub-label="[[computePrivacySandboxTopicsSublabel_(
          prefs.privacy_sandbox.m1.topics_enabled.value)]]" on-click="onPrivacySandboxTopicsClick_"></cr-link-row>
  <cr-link-row id="privacySandboxFledgeLinkRow" start-icon="settings20:checklist" class="hr" label="$i18n{adPrivacyPageFledgeLinkRowLabel}" sub-label="[[computePrivacySandboxFledgeSublabel_(
          prefs.privacy_sandbox.m1.fledge_enabled.value)]]" on-click="onPrivacySandboxFledgeClick_"></cr-link-row>
</template>
<cr-link-row id="privacySandboxAdMeasurementLinkRow" start-icon="settings20:bar-chart" class="hr" label="$i18n{adPrivacyPageAdMeasurementLinkRowLabel}" sub-label="[[computePrivacySandboxAdMeasurementSublabel_(
        prefs.privacy_sandbox.m1.ad_measurement_enabled.value)]]" on-click="onPrivacySandboxAdMeasurementClick_"></cr-link-row>
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsPrivacySandboxPageElementBase=RouteObserverMixin(I18nMixin(PrefsMixin(PolymerElement)));class SettingsPrivacySandboxPageElement extends SettingsPrivacySandboxPageElementBase{constructor(){super(...arguments);this.metricsBrowserProxy_=MetricsBrowserProxyImpl.getInstance()}static get is(){return"settings-privacy-sandbox-page"}static get template(){return getTemplate$1a()}static get properties(){return{prefs:{type:Object,notify:true},focusConfig:{type:Object,observer:"focusConfigChanged_"},isPrivacySandboxRestricted_:{type:Boolean,value:()=>loadTimeData.getBoolean("isPrivacySandboxRestricted")}}}currentRouteChanged(newRoute){if(newRoute===routes.PRIVACY_SANDBOX){HatsBrowserProxyImpl.getInstance().trustSafetyInteractionOccurred(TrustSafetyInteraction.OPENED_AD_PRIVACY)}}focusConfigChanged_(_newConfig,oldConfig){assert(!oldConfig);if(routes.PRIVACY_SANDBOX_TOPICS){this.focusConfig.set(routes.PRIVACY_SANDBOX_TOPICS.path,(()=>{const toFocus=this.shadowRoot.querySelector("#privacySandboxTopicsLinkRow");assert(toFocus);focusWithoutInk(toFocus)}))}if(routes.PRIVACY_SANDBOX_FLEDGE){this.focusConfig.set(routes.PRIVACY_SANDBOX_FLEDGE.path,(()=>{const toFocus=this.shadowRoot.querySelector("#privacySandboxFledgeLinkRow");assert(toFocus);focusWithoutInk(toFocus)}))}if(routes.PRIVACY_SANDBOX_AD_MEASUREMENT){this.focusConfig.set(routes.PRIVACY_SANDBOX_AD_MEASUREMENT.path,(()=>{const toFocus=this.shadowRoot.querySelector("#privacySandboxAdMeasurementLinkRow");assert(toFocus);focusWithoutInk(toFocus)}))}}computePrivacySandboxTopicsSublabel_(){const enabled=this.getPref("privacy_sandbox.m1.topics_enabled").value;return this.i18n(enabled?"adPrivacyPageTopicsLinkRowSubLabelEnabled":"adPrivacyPageTopicsLinkRowSubLabelDisabled")}computePrivacySandboxFledgeSublabel_(){const enabled=this.getPref("privacy_sandbox.m1.fledge_enabled").value;return this.i18n(enabled?"adPrivacyPageFledgeLinkRowSubLabelEnabled":"adPrivacyPageFledgeLinkRowSubLabelDisabled")}computePrivacySandboxAdMeasurementSublabel_(){const enabled=this.getPref("privacy_sandbox.m1.ad_measurement_enabled").value;return this.i18n(enabled?"adPrivacyPageAdMeasurementLinkRowSubLabelEnabled":"adPrivacyPageAdMeasurementLinkRowSubLabelDisabled")}onPrivacySandboxTopicsClick_(){this.metricsBrowserProxy_.recordAction("Settings.PrivacySandbox.Topics.Opened");Router.getInstance().navigateTo(routes.PRIVACY_SANDBOX_TOPICS)}onPrivacySandboxFledgeClick_(){this.metricsBrowserProxy_.recordAction("Settings.PrivacySandbox.Fledge.Opened");Router.getInstance().navigateTo(routes.PRIVACY_SANDBOX_FLEDGE)}onPrivacySandboxAdMeasurementClick_(){this.metricsBrowserProxy_.recordAction("Settings.PrivacySandbox.AdMeasurement.Opened");Router.getInstance().navigateTo(routes.PRIVACY_SANDBOX_AD_MEASUREMENT)}}customElements.define(SettingsPrivacySandboxPageElement.is,SettingsPrivacySandboxPageElement);function getTemplate$19(){return html`<!--_html_template_start_--><style include="cr-shared-style">#currentTopicsSection{align-items:center;display:flex;padding:0 var(--cr-section-padding)}#currentTopicsDescriptionEmpty{align-items:center}#currentTopicsSectionWrapper{width:100%}#currentTopicsHeading{color:var(--cr-secondary-text-color);font-size:100%;font-weight:500;margin:0;padding-block-start:var(--cr-section-vertical-padding)}#currentTopicsDescription{padding-block-end:var(--cr-section-vertical-padding)}#disclaimer{padding:0 var(--cr-section-padding);padding-bottom:var(--cr-section-vertical-padding);color:var(--cr-secondary-text-color)}#learnMoreLink{background:0 0;border:none;color:var(--cr-link-color);cursor:pointer;margin:0;padding:0;text-decoration:underline}.no-topics{padding-block-end:32px;padding-block-start:16px;padding-inline-start:40px}#blockedTopicsDescription{min-height:auto;padding-block-end:16px;padding-block-start:16px}#blockedTopicsDescriptionPTB{color:var(--cr-secondary-text-color)}.no-blocked-topics{padding-inline-start:60px}#blockedTopicsList{padding:0 var(--cr-section-padding)}#footer,#footerPTB{padding:16px var(--cr-section-padding)}a{color:var(--cr-link-color)}#dialog p{margin:0;padding-block-end:16px;padding-block-start:4px}</style>

<settings-toggle-button id="topicsToggle" pref="{{prefs.privacy_sandbox.m1.topics_enabled}}" label="$i18n{topicsPageToggleLabel}" sub-label="[[computeTopicsPageToggleSubLabel_(
      isProactiveTopicsBlockingEnabled_)]]" on-settings-boolean-control-change="onToggleChange_">
</settings-toggle-button>
<template is="dom-if" if="[[isProactiveTopicsBlockingEnabled_]]">
  <div id="disclaimer">
    $i18n{topicsPageDisclaimer}
  </div>
</template>
<template is="dom-if" if="[[!isTopicsPrefManaged_(
    prefs.privacy_sandbox.m1.topics_enabled.enforcement)]]" restamp>
  <div id="currentTopicsSection">
    <div id="currentTopicsSectionWrapper" class="hr">
      <h2 id="currentTopicsHeading">
       [[computeTopicsPageCurrentTopicsHeading_(
          isProactiveTopicsBlockingEnabled_)]]
      </h2>
      <div id="currentTopicsDescription" class="cr-secondary-text">
        [[computeTopicsPageCurrentTopicsDescription_(
            isProactiveTopicsBlockingEnabled_)]]
        
        <button id="learnMoreLink" on-click="onLearnMoreClick_" aria-label="$i18n{topicsPageCurrentTopicsDescriptionLearnMoreA11yLabel}" hidden="[[isProactiveTopicsBlockingEnabled_]]">
          $i18n{topicsPageCurrentTopicsDescriptionLearnMoreLink}
        </button>
      </div>
      <template is="dom-if" if="[[isTopicsEnabledAndLoaded_(
          prefs.privacy_sandbox.m1.topics_enabled.value, isTopicsListLoaded_)]]" restamp>
          <div role="region" aria-label="$i18n{topicsPageCurrentTopicsRegionA11yDescription}">
            <template is="dom-repeat" items="[[topicsList_]]">
              <privacy-sandbox-interest-item interest="[[item]]" on-interest-changed="onInterestChanged_">
              </privacy-sandbox-interest-item>
            </template>
          </div>
          <div id="currentTopicsDescriptionEmpty" class="no-topics cr-secondary-text" hidden="[[!isTopicsListEmpty_(topicsList_.length)]]">
            [[computeTopicsPageCurrentTopicsDescriptionEmpty_(
                isProactiveTopicsBlockingEnabled_)]]
          </div>
      </template>
      <div id="currentTopicsDescriptionDisabled" class="no-topics cr-secondary-text" hidden="[[prefs.privacy_sandbox.m1.topics_enabled.value]]">
        $i18n{topicsPageCurrentTopicsDescriptionDisabled}
      </div>
    </div>
  </div>
</template>
<cr-expand-button id="blockedTopicsRow" class="cr-row" expanded="{{blockedTopicsExpanded_}}">
  [[computeTopicsPageBlockedTopicsHeading_(isProactiveTopicsBlockingEnabled_)]]
  <template is="dom-if" if="[[isProactiveTopicsBlockingEnabled_]]">
    <div id="blockedTopicsDescriptionPTB">
      $i18n{topicsPageBlockedTopicsDescriptionPTB}
    </div>
  </template>
</cr-expand-button>
<iron-collapse opened="[[blockedTopicsExpanded_]]">
  <div id="blockedTopicsDescription" class$="[[getBlockedTopicsDescriptionClass_(blockedTopicsList_.length)]]" hidden="[[isProactiveTopicsBlockingEnabled_]]">
      [[computeBlockedTopicsDescription_(blockedTopicsList_.length)]]
  </div>
  <div id="blockedTopicsList" role="region" aria-label="$i18n{topicsPageBlockedTopicsRegionA11yDescription}">
    <template is="dom-repeat" items="[[blockedTopicsList_]]">
      <privacy-sandbox-interest-item interest="[[item]]" on-interest-changed="onInterestChanged_">
      </privacy-sandbox-interest-item>
    </template>
  </div>
</iron-collapse>
<div id="manageTopicsSection" class="hr">
  <template is="dom-if" if="[[shouldShowManageTopics_(
      isProactiveTopicsBlockingEnabled_)]]">
    <cr-link-row id="privacySandboxManageTopicsLinkRow" label="$i18n{manageTopicsHeading}" sub-label="$i18n{manageTopicsDescription}" on-click="onPrivacySandboxManageTopicsClick_">
    </cr-link-row>
  </template>
</div>
<div id="footer" class="cr-secondary-text hr" hidden="[[isProactiveTopicsBlockingEnabled_]]">
  $i18nRaw{topicsPageFooter}
</div>
<div id="footerPTB" class="cr-secondary-text hr" hidden="[[!isProactiveTopicsBlockingEnabled_]]">
  $i18nRaw{topicsPageFooterPTB}
</div>
<template is="dom-if" if="[[isLearnMoreDialogOpen_]]" restamp>
  <cr-dialog id="dialog" on-close="onCloseDialog_" show-on-attach>
    <div slot="title">$i18n{topicsPageLearnMoreHeading}</div>
    <div slot="body">
      <p>$i18n{topicsPageLearnMoreBullet1}</p>
      <p>$i18n{topicsPageLearnMoreBullet2}</p>
      <p>$i18nRaw{topicsPageLearnMoreBullet3}</p>
    </div>
    <div slot="button-container">
      <cr-button id="closeButton" class="cancel-button" autofocus on-click="onCloseDialog_">
        $i18n{close}
      </cr-button>
    </div>
  </cr-dialog>
</template>
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsPrivacySandboxTopicsSubpageElementBase=RouteObserverMixin(I18nMixin(PrefsMixin(PolymerElement)));class SettingsPrivacySandboxTopicsSubpageElement extends SettingsPrivacySandboxTopicsSubpageElementBase{constructor(){super(...arguments);this.privacySandboxBrowserProxy_=PrivacySandboxBrowserProxyImpl.getInstance();this.metricsBrowserProxy_=MetricsBrowserProxyImpl.getInstance()}static get is(){return"settings-privacy-sandbox-topics-subpage"}static get template(){return getTemplate$19()}static get properties(){return{prefs:{type:Object,notify:true},topicsList_:{type:Array,value(){return[]}},blockedTopicsList_:{type:Array,value(){return[]}},isTopicsListLoaded_:{type:Boolean,value:false},isLearnMoreDialogOpen_:{type:Boolean,value:false},blockedTopicsExpanded_:{type:Boolean,value:false,observer:"onBlockedTopicsExpanded_"},focusConfig:{type:Object,observer:"focusConfigChanged_"},isProactiveTopicsBlockingEnabled_:{type:Boolean,value:()=>loadTimeData.getBoolean("isProactiveTopicsBlockingEnabled")}}}ready(){super.ready();this.privacySandboxBrowserProxy_.getTopicsState().then((state=>this.onTopicsStateChanged_(state)));this.$.footer.querySelectorAll("a").forEach((link=>link.setAttribute("aria-description",this.i18n("opensInNewTab"))));this.$.footerPTB.querySelectorAll("a").forEach((link=>link.setAttribute("aria-description",this.i18n("opensInNewTab"))))}currentRouteChanged(newRoute){if(newRoute===routes.PRIVACY_SANDBOX_TOPICS){HatsBrowserProxyImpl.getInstance().trustSafetyInteractionOccurred(TrustSafetyInteraction.OPENED_TOPICS_SUBPAGE)}}isTopicsPrefManaged_(){const topicsEnabledPref=this.getPref("privacy_sandbox.m1.topics_enabled");if(topicsEnabledPref.enforcement===chrome.settingsPrivate.Enforcement.ENFORCED){assert(!topicsEnabledPref.value);return true}return false}onTopicsStateChanged_(state){this.topicsList_=state.topTopics.map((topic=>({topic:topic,removed:false})));this.blockedTopicsList_=state.blockedTopics.map((topic=>({topic:topic,removed:true})));this.isTopicsListLoaded_=true}isTopicsEnabledAndLoaded_(){return this.getPref("privacy_sandbox.m1.topics_enabled").value&&this.isTopicsListLoaded_}isTopicsListEmpty_(){return this.topicsList_.length===0}computeBlockedTopicsDescription_(){return this.i18n(this.blockedTopicsList_.length===0?"topicsPageBlockedTopicsDescriptionEmpty":"topicsPageBlockedTopicsDescription")}getBlockedTopicsDescriptionClass_(){const defaultClass="cr-row continuation cr-secondary-text";return this.blockedTopicsList_.length===0?`${defaultClass} no-blocked-topics`:defaultClass}onToggleChange_(e){const target=e.target;this.metricsBrowserProxy_.recordAction(target.checked?"Settings.PrivacySandbox.Topics.Enabled":"Settings.PrivacySandbox.Topics.Disabled");this.privacySandboxBrowserProxy_.topicsToggleChanged(target.checked);this.topicsList_=[]}onLearnMoreClick_(){this.metricsBrowserProxy_.recordAction("Settings.PrivacySandbox.Topics.LearnMoreClicked");this.isLearnMoreDialogOpen_=true}onCloseDialog_(){this.isLearnMoreDialogOpen_=false;afterNextRender(this,(async()=>{this.shadowRoot.querySelector("#learnMoreLink")?.focus()}))}onInterestChanged_(e){const interest=e.detail;assert(!interest.site);if(interest.removed){this.blockedTopicsList_.splice(this.blockedTopicsList_.indexOf(interest),1)}else{this.topicsList_.splice(this.topicsList_.indexOf(interest),1);this.blockedTopicsList_.push({topic:interest.topic,removed:true});this.blockedTopicsList_.sort(((first,second)=>first.topic.displayString<second.topic.displayString?-1:1))}this.topicsList_=this.topicsList_.slice();this.blockedTopicsList_=this.blockedTopicsList_.slice();this.privacySandboxBrowserProxy_.setTopicAllowed(interest.topic,interest.removed);this.metricsBrowserProxy_.recordAction(interest.removed?"Settings.PrivacySandbox.Topics.TopicAdded":"Settings.PrivacySandbox.Topics.TopicRemoved");afterNextRender(this,(async()=>{if(!this.shadowRoot.activeElement){this.shadowRoot.querySelector("#blockedTopicsRow")?.focus()}}))}onBlockedTopicsExpanded_(){if(this.blockedTopicsExpanded_){this.metricsBrowserProxy_.recordAction("Settings.PrivacySandbox.Topics.BlockedTopicsOpened")}}onPrivacySandboxManageTopicsClick_(){Router.getInstance().navigateTo(routes.PRIVACY_SANDBOX_MANAGE_TOPICS)}focusConfigChanged_(_newConfig,oldConfig){assert(!oldConfig);if(routes.PRIVACY_SANDBOX_MANAGE_TOPICS){this.focusConfig.set(routes.PRIVACY_SANDBOX_MANAGE_TOPICS.path,(()=>{const toFocus=this.shadowRoot.querySelector("#privacySandboxManageTopicsLinkRow");assert(toFocus);focusWithoutInk(toFocus)}))}}computeTopicsPageToggleSubLabel_(){return this.i18n(this.isProactiveTopicsBlockingEnabled_?"topicsPageToggleSubLabelPTB":"topicsPageToggleSubLabel")}computeTopicsPageCurrentTopicsHeading_(){return this.i18n(this.isProactiveTopicsBlockingEnabled_?"topicsPageCurrentTopicsHeadingPTB":"topicsPageCurrentTopicsHeading")}computeTopicsPageCurrentTopicsDescription_(){return this.i18n(this.isProactiveTopicsBlockingEnabled_?"topicsPageCurrentTopicsDescriptionPTB":"topicsPageCurrentTopicsDescription")}computeTopicsPageCurrentTopicsDescriptionEmpty_(){return this.i18n(this.isProactiveTopicsBlockingEnabled_?"topicsPageCurrentTopicsDescriptionEmptyPTB":"topicsPageCurrentTopicsDescriptionEmpty")}computeTopicsPageBlockedTopicsHeading_(){return this.i18n(this.isProactiveTopicsBlockingEnabled_?"topicsPageBlockedTopicsHeadingPTB":"topicsPageBlockedTopicsHeading")}shouldShowManageTopics_(){return this.isProactiveTopicsBlockingEnabled_&&!loadTimeData.getBoolean("isPrivacySandboxRestricted")}}customElements.define(SettingsPrivacySandboxTopicsSubpageElement.is,SettingsPrivacySandboxTopicsSubpageElement);function getTemplate$18(){return html`<!--_html_template_start_-->    <style include="settings-shared">cr-input{display:inline-block;padding-inline-end:2em;--cr-input-width:8em}</style>

    <p>$i18n{securityKeysPINPrompt}</p>
    <cr-input id="pin" value="{{value_}}" min-length="[[minPinLength]]" max-length="255" spellcheck="false" on-input="onPinInput_" invalid="[[isNonEmpty_(error_)]]" label="$i18n{securityKeysPIN}" type$="[[inputType_(inputVisible_)]]" error-message="[[error_]]">
      <cr-icon-button slot="suffix" id="showButton" class$="[[showButtonClass_(inputVisible_)]]" title="[[showButtonTitle_(inputVisible_)]]" focus-row-control focus-type="showPassword" on-click="showButtonClick_"></cr-icon-button>
    </cr-input>
<!--_html_template_end_-->`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsSecurityKeysPinFieldElementBase=I18nMixin(PolymerElement);class SettingsSecurityKeysPinFieldElement extends SettingsSecurityKeysPinFieldElementBase{static get is(){return"settings-security-keys-pin-field"}static get template(){return getTemplate$18()}static get properties(){return{minPinLength:{value:4,type:Number},error_:{type:String,observer:"errorChanged_"},value_:String,inputVisible_:{type:Boolean,value:false}}}focus(){this.$.pin.focus()}validate_(){const error=this.isValidPin_(this.value_);if(error!==""){this.error_=error;return false}return true}trySubmit(submitFunc){if(!this.validate_()){this.focus();return Promise.reject()}return submitFunc(this.value_).then((retries=>{if(retries!==null){this.showIncorrectPinError_(retries);this.focus();return Promise.reject()}return}))}showIncorrectPinError_(retries){let error;if(1<retries&&retries<=3){error=this.i18n("securityKeysPINIncorrectRetriesPl",retries.toString())}else if(retries===1){error=this.i18n("securityKeysPINIncorrectRetriesSin")}else{error=this.i18n("securityKeysPINIncorrect")}this.error_=error}onPinInput_(){this.error_=""}isNonEmpty_(s){return s!==""}inputType_(){return this.inputVisible_?"text":"password"}showButtonClass_(){return"icon-visibility"+(this.inputVisible_?"-off":"")}showButtonTitle_(){return this.i18n(this.inputVisible_?"securityKeysHidePINs":"securityKeysShowPINs")}showButtonClick_(){this.inputVisible_=!this.inputVisible_}isValidPin_(pin){const utf8Encoded=(new TextEncoder).encode(pin);if(utf8Encoded.length<this.minPinLength){return this.i18n("securityKeysPINTooShort")}if(utf8Encoded.length>63||utf8Encoded[utf8Encoded.length-1]===0){return this.i18n("securityKeysPINTooLong")}let length=0;for(const _codepoint of pin){length++}if(length<this.minPinLength){return this.i18n("securityKeysPINTooShort")}return""}errorChanged_(){getInstance().announce(this.error_)}}customElements.define(SettingsSecurityKeysPinFieldElement.is,SettingsSecurityKeysPinFieldElement);
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var Ctap2Status;(function(Ctap2Status){Ctap2Status[Ctap2Status["OK"]=0]="OK";Ctap2Status[Ctap2Status["ERR_FP_DATABASE_FULL"]=23]="ERR_FP_DATABASE_FULL";Ctap2Status[Ctap2Status["ERR_INVALID_OPTION"]=44]="ERR_INVALID_OPTION";Ctap2Status[Ctap2Status["ERR_KEEPALIVE_CANCEL"]=45]="ERR_KEEPALIVE_CANCEL"})(Ctap2Status||(Ctap2Status={}));var SampleStatus;(function(SampleStatus){SampleStatus[SampleStatus["OK"]=0]="OK"})(SampleStatus||(SampleStatus={}));class SecurityKeysPinBrowserProxyImpl{startSetPin(){return sendWithPromise("securityKeyStartSetPIN")}setPin(oldPIN,newPIN){return sendWithPromise("securityKeySetPIN",oldPIN,newPIN)}close(){return chrome.send("securityKeyPINClose")}static getInstance(){return pinBrowserProxyInstance||(pinBrowserProxyInstance=new SecurityKeysPinBrowserProxyImpl)}static setInstance(obj){pinBrowserProxyInstance=obj}}let pinBrowserProxyInstance=null;class SecurityKeysCredentialBrowserProxyImpl{startCredentialManagement(){return sendWithPromise("securityKeyCredentialManagementStart")}providePin(pin){return sendWithPromise("securityKeyCredentialManagementPIN",pin)}enumerateCredentials(){return sendWithPromise("securityKeyCredentialManagementEnumerate")}deleteCredentials(ids){return sendWithPromise("securityKeyCredentialManagementDelete",ids)}updateUserInformation(credentialId,userHandle,newUsername,newDisplayname){return sendWithPromise("securityKeyCredentialManagementUpdate",credentialId,userHandle,newUsername,newDisplayname)}close(){return chrome.send("securityKeyCredentialManagementClose")}static getInstance(){return credentialBrowserProxyInstance||(credentialBrowserProxyInstance=new SecurityKeysCredentialBrowserProxyImpl)}static setInstance(obj){credentialBrowserProxyInstance=obj}}let credentialBrowserProxyInstance=null;class SecurityKeysResetBrowserProxyImpl{reset(){return sendWithPromise("securityKeyReset")}completeReset(){return sendWithPromise("securityKeyCompleteReset")}close(){return chrome.send("securityKeyResetClose")}static getInstance(){return resetBrowserProxyInstance||(resetBrowserProxyInstance=new SecurityKeysResetBrowserProxyImpl)}static setInstance(obj){resetBrowserProxyInstance=obj}}let resetBrowserProxyInstance=null;class SecurityKeysBioEnrollProxyImpl{startBioEnroll(){return sendWithPromise("securityKeyBioEnrollStart")}providePin(pin){return sendWithPromise("securityKeyBioEnrollProvidePIN",pin)}getSensorInfo(){return sendWithPromise("securityKeyBioEnrollGetSensorInfo")}enumerateEnrollments(){return sendWithPromise("securityKeyBioEnrollEnumerate")}startEnrolling(){return sendWithPromise("securityKeyBioEnrollStartEnrolling")}cancelEnrollment(){return chrome.send("securityKeyBioEnrollCancel")}deleteEnrollment(id){return sendWithPromise("securityKeyBioEnrollDelete",id)}renameEnrollment(id,name){return sendWithPromise("securityKeyBioEnrollRename",id,name)}close(){return chrome.send("securityKeyBioEnrollClose")}static getInstance(){return bioEnrollProxyInstance||(bioEnrollProxyInstance=new SecurityKeysBioEnrollProxyImpl)}static setInstance(obj){bioEnrollProxyInstance=obj}}let bioEnrollProxyInstance=null;class SecurityKeysPhonesBrowserProxyImpl{enumerate(){return sendWithPromise("securityKeyPhonesEnumerate")}delete(name){return sendWithPromise("securityKeyPhonesDelete",name)}rename(publicKey,newName){return sendWithPromise("securityKeyPhonesRename",publicKey,newName)}static getInstance(){return phonesProxyInstance||(phonesProxyInstance=new SecurityKeysPhonesBrowserProxyImpl)}static setInstance(obj){phonesProxyInstance=obj}}let phonesProxyInstance=null;function getTemplate$17(){return html`<!--_html_template_start_-->    <style include="settings-shared">paper-spinner-lite{padding-bottom:12px}#header{display:flex;justify-content:flex-start}site-favicon{margin-inline-end:2px;min-width:16px}.icon-placeholder{margin-inline-end:var(--cr-icon-button-margin-end);margin-inline-start:var(--cr-icon-button-margin-start);width:var(--cr-icon-ripple-size)}.site{flex:1}.user-name{flex:1}.user-display-name{flex:.8}.site,.user-display-name,.user-name{align-items:center;display:inline-block;overflow:hidden;overflow-wrap:break-word;padding-inline-start:.3rem;text-align:start}#site-header,#user-display-name-header,#user-name-header{font-weight:700}#site-header{margin-inline-start:1rem}.edit{display:flex;flex-direction:column}#title{user-select:none}</style>

    <cr-dialog id="dialog" close-text="$i18n{cancel}" ignore-popstate on-close="onDialogClosed_">
      <div id="title" slot="title">[[dialogTitle_]]</div>

      <div slot="body">
        <iron-pages attr-for-selected="id" selected="[[dialogPage_]]" on-iron-select="onIronSelect_">
          <div id="initial">
            <p>$i18n{securityKeysTouchToContinue}</p>
            <paper-spinner-lite active></paper-spinner-lite>
          </div>

          <div id="pinPrompt">
            <settings-security-keys-pin-field id="pin" min-pin-length="[[minPinLength_]]">
            </settings-security-keys-pin-field>
          </div>

          <div id="credentials">
            <div id="header" class="list-item column-header">
              <div class="site" id="site-header">
                $i18n{securityKeysCredentialWebsiteLabel}
              </div>
              <div class="user-display-name" id="user-display-name-header">
                $i18n{securityKeysCredentialDisplayNameLabel}
              </div>
              <div class="user-name" id="user-name-header">
                $i18n{securityKeysCredentialUsernameLabel}
              </div>
              <div class="icon-placeholder"></div>
              <div class="icon-placeholder"></div>
            </div>

            <div id="container">
              <iron-list id="credentialList" items="[[credentials_]]" class="cr-separators list-with-header">
                <template>
                  <div class="list-item">
                    <site-favicon url="[[item.relyingPartyId]]"></site-favicon>
                    <div class="site">[[item.relyingPartyId]]</div>
                    <div class="user-display-name">
                      [[item.userDisplayName]]
                    </div>
                    <div class="user-name">[[item.userName]]</div>
                    <cr-icon-button iron-icon="cr:create" aria-label="$i18n{edit}" class="edit-button" on-click="onUpdateButtonClick_" hidden="[[!editButtonVisible_]]" data-credentialid$="[[item.credentialId]]">
                    </cr-icon-button>
                    <cr-icon-button iron-icon="cr:delete" aria-label="$i18n{delete}" class="delete-button" on-click="onDeleteButtonClick_" data-credentialid$="[[item.credentialId]]">
                    </cr-icon-button>
                  </div>
                </template>
              </iron-list>
            </div>
          </div>

          <div id="edit">
            <div class="edit-item">
              <cr-input id="displayNameInput" value="{{newDisplayName_}}" spellcheck="false" on-input="validateInput_" label="$i18n{securityKeysCredentialDisplayNameLabel}" error-message="[[displayNameInputError_]]" invalid="[[!isEmpty_(displayNameInputError_)]]">
              </cr-input>
            </div>
            <div class="edit-item">
              <cr-input id="userNameInput" value="{{newUsername_}}" spellcheck="false" on-input="validateInput_" label="$i18n{securityKeysCredentialUsernameLabel}" error-message="[[userNameInputError_]]" invalid="[[!isEmpty_(userNameInputError_)]]">
              </cr-input>
            </div>
          </div>
          <div id="pinError">[[errorMsg_]]</div>
          <div id="error">[[errorMsg_]]</div>
          <div id="confirm">[[confirmMsg_]]</div>
        </iron-pages>
      </div>

      <div slot="button-container">
        <cr-button id="cancelButton" class="cancel-button" on-click="onCancelButtonClick_" hidden="[[!cancelButtonVisible_]]">
          $i18n{cancel}
        </cr-button>
        <cr-button id="confirmButton" class="action-button" on-click="onConfirmButtonClick_" disabled="[[confirmButtonDisabled_]]" hidden="[[!confirmButtonVisible_]]">
          [[confirmButtonLabel_]]
        </cr-button>
        <cr-button id="closeButton" class="action-button" on-click="close_" hidden="[[!closeButtonVisible_]]">
          $i18n{close}
        </cr-button>
      </div>
    </cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var CredentialManagementDialogPage;(function(CredentialManagementDialogPage){CredentialManagementDialogPage["INITIAL"]="initial";CredentialManagementDialogPage["PIN_PROMPT"]="pinPrompt";CredentialManagementDialogPage["PIN_ERROR"]="pinError";CredentialManagementDialogPage["CREDENTIALS"]="credentials";CredentialManagementDialogPage["EDIT"]="edit";CredentialManagementDialogPage["ERROR"]="error";CredentialManagementDialogPage["CONFIRM"]="confirm"})(CredentialManagementDialogPage||(CredentialManagementDialogPage={}));const SettingsSecurityKeysCredentialManagementDialogElementBase=WebUiListenerMixin(I18nMixin(PolymerElement));const MAX_INPUT_LENGTH=62;class SettingsSecurityKeysCredentialManagementDialogElement extends SettingsSecurityKeysCredentialManagementDialogElementBase{constructor(){super(...arguments);this.browserProxy_=SecurityKeysCredentialBrowserProxyImpl.getInstance();this.showSetPINButton_=false}static get is(){return"settings-security-keys-credential-management-dialog"}static get template(){return getTemplate$17()}static get properties(){return{dialogPage_:{type:String,value:CredentialManagementDialogPage.INITIAL,observer:"dialogPageChanged_"},credentials_:{type:Array,notify:true},errorMsg_:String,cancelButtonVisible_:Boolean,closeButtonVisible_:Boolean,confirmButtonDisabled_:Boolean,confirmButtonLabel_:String,confirmButtonVisible_:Boolean,confirmMsg_:String,credentialIdToDelete_:String,displayNameInputError_:String,editingCredential_:Object,editButtonVisible_:Boolean,minPinLength_:Number,newDisplayName_:String,newUsername_:String,userHandle_:String,userNameInputError_:String}}connectedCallback(){super.connectedCallback();this.$.dialog.showModal();this.addWebUiListener("security-keys-credential-management-finished",((error,requiresPINChange=false)=>this.onPinError_(error,requiresPINChange)));this.browserProxy_.startCredentialManagement().then((response=>{this.minPinLength_=response.minPinLength;this.editButtonVisible_=response.supportsUpdateUserInformation;this.dialogPage_=CredentialManagementDialogPage.PIN_PROMPT}))}onPinError_(error,requiresPINChange=false){this.errorMsg_=error;this.showSetPINButton_=requiresPINChange;this.dialogPage_=CredentialManagementDialogPage.PIN_ERROR}onError_(error){this.errorMsg_=error;this.dialogPage_=CredentialManagementDialogPage.ERROR}submitPin_(){this.confirmButtonDisabled_=true;this.$.pin.trySubmit((pin=>this.browserProxy_.providePin(pin))).then((()=>{this.browserProxy_.enumerateCredentials().then((credentials=>this.onCredentials_(credentials)))}),(()=>{this.confirmButtonDisabled_=false}))}onCredentials_(credentials){this.credentials_=credentials;this.$.credentialList.fire("iron-resize");this.dialogPage_=CredentialManagementDialogPage.CREDENTIALS}dialogPageChanged_(){switch(this.dialogPage_){case CredentialManagementDialogPage.INITIAL:this.cancelButtonVisible_=true;this.confirmButtonVisible_=false;this.closeButtonVisible_=false;this.dialogTitle_=this.i18n("securityKeysCredentialManagementDialogTitle");break;case CredentialManagementDialogPage.PIN_PROMPT:this.cancelButtonVisible_=false;this.confirmButtonLabel_=this.i18n("continue");this.confirmButtonDisabled_=false;this.confirmButtonVisible_=true;this.closeButtonVisible_=false;this.dialogTitle_=this.i18n("securityKeysCredentialManagementDialogTitle");this.$.pin.focus();break;case CredentialManagementDialogPage.PIN_ERROR:this.cancelButtonVisible_=true;this.confirmButtonLabel_=this.i18n("securityKeysSetPinButton");this.confirmButtonVisible_=this.showSetPINButton_;this.confirmButtonDisabled_=false;this.closeButtonVisible_=false;this.dialogTitle_=this.i18n("securityKeysCredentialManagementDialogTitle");break;case CredentialManagementDialogPage.CREDENTIALS:this.cancelButtonVisible_=false;this.confirmButtonLabel_=this.i18n("done");this.confirmButtonDisabled_=false;this.confirmButtonVisible_=true;this.closeButtonVisible_=false;this.dialogTitle_=this.i18n("securityKeysCredentialManagementDialogTitle");break;case CredentialManagementDialogPage.EDIT:this.cancelButtonVisible_=true;this.confirmButtonLabel_=this.i18n("save");this.confirmButtonDisabled_=false;this.confirmButtonVisible_=true;this.closeButtonVisible_=false;this.dialogTitle_=this.i18n("securityKeysUpdateCredentialDialogTitle");break;case CredentialManagementDialogPage.ERROR:this.cancelButtonVisible_=false;this.confirmButtonLabel_=this.i18n("continue");this.confirmButtonDisabled_=false;this.confirmButtonVisible_=true;this.closeButtonVisible_=false;this.dialogTitle_=this.i18n("securityKeysCredentialManagementDialogTitle");break;case CredentialManagementDialogPage.CONFIRM:this.cancelButtonVisible_=true;this.confirmButtonLabel_=this.i18n("delete");this.confirmButtonVisible_=true;this.closeButtonVisible_=false;this.dialogTitle_=this.i18n("securityKeysCredentialManagementConfirmDeleteTitle");break;default:assertNotReached()}this.dispatchEvent(new CustomEvent("credential-management-dialog-ready-for-testing",{bubbles:true,composed:true}))}onConfirmButtonClick_(){switch(this.dialogPage_){case CredentialManagementDialogPage.PIN_PROMPT:this.submitPin_();break;case CredentialManagementDialogPage.PIN_ERROR:this.$.dialog.close();this.dispatchEvent(new CustomEvent("credential-management-set-pin",{bubbles:true,composed:true}));break;case CredentialManagementDialogPage.CREDENTIALS:this.$.dialog.close();break;case CredentialManagementDialogPage.EDIT:this.updateUserInformation_();break;case CredentialManagementDialogPage.ERROR:this.dialogPage_=CredentialManagementDialogPage.CREDENTIALS;break;case CredentialManagementDialogPage.CONFIRM:this.deleteCredential_();break;default:assertNotReached()}}onCancelButtonClick_(){switch(this.dialogPage_){case CredentialManagementDialogPage.INITIAL:case CredentialManagementDialogPage.PIN_PROMPT:case CredentialManagementDialogPage.PIN_ERROR:case CredentialManagementDialogPage.CREDENTIALS:this.$.dialog.close();break;case CredentialManagementDialogPage.EDIT:case CredentialManagementDialogPage.ERROR:case CredentialManagementDialogPage.CONFIRM:this.dialogPage_=CredentialManagementDialogPage.CREDENTIALS;break;default:assertNotReached()}}onDialogClosed_(){this.browserProxy_.close()}close_(){this.$.dialog.close()}isEmpty_(str){return!str||str.length===0}onIronSelect_(e){e.stopPropagation()}onDeleteButtonClick_(e){const target=e.target;this.credentialIdToDelete_=target.dataset["credentialid"];assert(!this.isEmpty_(this.credentialIdToDelete_));this.confirmMsg_=this.i18n("securityKeysCredentialManagementConfirmDeleteCredential");this.dialogPage_=CredentialManagementDialogPage.CONFIRM}deleteCredential_(){this.browserProxy_.deleteCredentials([this.credentialIdToDelete_]).then((response=>{if(!response.success){this.onError_(response.message);return}for(let i=0;i<this.credentials_.length;i++){if(this.credentials_[i].credentialId===this.credentialIdToDelete_){this.credentials_.splice(i,1);break}}this.dialogPage_=CredentialManagementDialogPage.CREDENTIALS}))}validateInput_(){this.displayNameInputError_=this.newDisplayName_.length>MAX_INPUT_LENGTH?this.i18n("securityKeysInputTooLong"):"";this.userNameInputError_=this.newUsername_.length>MAX_INPUT_LENGTH?this.i18n("securityKeysInputTooLong"):"";this.confirmButtonDisabled_=!this.isEmpty_(this.displayNameInputError_+this.userNameInputError_)}onUpdateButtonClick_(e){const target=e.target;for(const credential of this.credentials_){if(credential.credentialId===target.dataset["credentialid"]){this.editingCredential_=credential;break}}this.newDisplayName_=this.editingCredential_.userDisplayName;this.newUsername_=this.editingCredential_.userName;this.dialogPage_=CredentialManagementDialogPage.EDIT}updateUserInformation_(){assert(this.dialogPage_===CredentialManagementDialogPage.EDIT);if(this.isEmpty_(this.newUsername_)){this.newUsername_=this.editingCredential_.userName}if(this.isEmpty_(this.newDisplayName_)){this.newDisplayName_=this.editingCredential_.userDisplayName}this.browserProxy_.updateUserInformation(this.editingCredential_.credentialId,this.editingCredential_.userHandle,this.newUsername_,this.newDisplayName_).then((response=>{if(!response.success){this.onError_(response.message);return}for(let i=0;i<this.credentials_.length;i++){if(this.credentials_[i].credentialId===this.editingCredential_.credentialId){const newCred=Object.assign({},this.credentials_[i]);newCred.userName=this.newUsername_;newCred.userDisplayName=this.newDisplayName_;this.credentials_.splice(i,1,newCred);this.$.credentialList.fire("iron-resize");break}}}));this.dialogPage_=CredentialManagementDialogPage.CREDENTIALS}}customElements.define(SettingsSecurityKeysCredentialManagementDialogElement.is,SettingsSecurityKeysCredentialManagementDialogElement);const template$2=html`<iron-iconset-svg name="cr-fingerprint-icon" size="32">
  <svg>
    <defs>
      <g id="fingerprint-scanned-dark" viewBox="0 0 93 104">
        <path fill="#669df6" d="M75.346031,12.4513714 C65.426031,7.33637143 56.8487739,5.16637143 46.5674024,5.16637143 C36.3374024,5.16637143 26.6237739,7.595 17.7896596,12.4513714 C16.5487739,13.1227429 14.9987739,12.6577429 14.276031,11.4177429 C13.6046596,10.1777429 14.0696596,8.57637143 15.3096596,7.905 C24.9196596,2.68637143 35.4596596,0 46.5674024,0 C57.5732882,0 67.1824024,2.42774286 77.7232882,7.85274286 C79.0146596,8.525 79.4796596,10.075 78.8074024,11.315 C78.3424024,12.245 77.4646596,12.7613714 76.5346596,12.7613714 C76.121031,12.7613714 75.7074024,12.6577429 75.346031,12.4513714 Z">
        </path>
        <path fill="#5bb974" d="M1.10147387,39.4213714 C-0.0871547017,38.595 -0.344897559,36.9927429 0.480588155,35.805 C5.59647387,28.5713714 12.1055882,22.8877429 19.8555882,18.91 C36.0801024,10.54 56.8492167,10.4877429 73.1242167,18.8577429 C80.8742167,22.8363714 87.3851024,28.4677429 92.4992167,35.65 C93.3264739,36.7863714 93.0678453,38.44 91.8801024,39.2663714 C90.6914739,40.0927429 89.0892167,39.835 88.2628453,38.6463714 C83.6128453,32.1363714 77.7228453,27.0213714 70.7478453,23.4563714 C55.9192167,15.8613714 36.9578453,15.8613714 22.1805882,23.5077429 C15.1551024,27.125 9.26421673,32.2913714 4.61421673,38.8013714 C4.20147387,39.525 3.42647387,39.8863714 2.59921673,39.8863714 C2.0828453,39.8863714 1.56647387,39.7313714 1.10147387,39.4213714 Z">
        </path>
        <path fill="#fcc934" d="M33.0827567,101.473097 C28.5877567,96.9780971 26.1600139,94.0844686 22.6977567,87.8330971 C19.1327567,81.4780971 17.2727567,73.7280971 17.2727567,65.4094686 C17.2727567,50.0644686 30.3963853,37.5617257 46.5163853,37.5617257 C62.6354996,37.5617257 75.7600139,50.0644686 75.7600139,65.4094686 C75.7600139,66.8567257 74.6227567,67.9930971 73.1763853,67.9930971 C71.7300139,67.9930971 70.5927567,66.8567257 70.5927567,65.4094686 C70.5927567,52.9067257 59.7941282,42.7280971 46.5163853,42.7280971 C33.2377567,42.7280971 22.4391282,52.9067257 22.4391282,65.4094686 C22.4391282,72.8494686 24.0927567,79.7217257 27.2441282,85.3017257 C30.5513853,91.2430971 32.8241282,93.7744686 36.8027567,97.8044686 C37.7850139,98.8380971 37.7850139,100.439469 36.8027567,101.473097 C36.2350139,101.989469 35.5627567,102.248097 34.8913853,102.248097 C34.2191282,102.248097 33.5477567,101.989469 33.0827567,101.473097 Z">
        </path>
        <path fill="#ea4335" d="M55.9193939,88.0911057 C48.221651,82.8733629 43.6230224,74.3997343 43.6230224,65.4097343 C43.6230224,63.9633629 44.7593939,62.8261057 46.2057653,62.8261057 C47.6530224,62.8261057 48.7893939,63.9633629 48.7893939,65.4097343 C48.7893939,72.6947343 52.5093939,79.5661057 58.8130224,83.8033629 C62.4807653,86.2833629 66.7693939,87.4711057 71.9357653,87.4711057 C73.1757653,87.4711057 75.2421367,87.3161057 77.3093939,86.9547343 C78.7052796,86.6961057 80.0480224,87.6261057 80.3057653,89.0733629 C80.5643939,90.4683629 79.6343939,91.8111057 78.1880224,92.0697343 C75.2421367,92.6383629 72.6593939,92.6897343 71.9357653,92.6897343 C65.7880224,92.6897343 60.3630224,91.1397343 55.9193939,88.0911057 Z">
        </path>
        <path fill="#669df6" d="M60.8797482,103.229557 C52.6647482,100.955929 47.2911196,97.9081857 41.6597482,92.3795571 C34.4261196,85.1981857 30.4483767,75.6395571 30.4483767,65.4095571 C30.4483767,57.0395571 37.5783767,50.2195571 46.3611196,50.2195571 C55.1447482,50.2195571 62.2738624,57.0395571 62.2738624,65.4095571 C62.2738624,70.9381857 67.0797482,75.4331857 73.0211196,75.4331857 C78.962491,75.4331857 83.767491,70.9381857 83.767491,65.4095571 C83.767491,45.9309286 66.9761196,30.1218143 46.3097482,30.1218143 C31.6361196,30.1218143 18.2033767,38.2845571 12.157491,50.9431857 C10.142491,55.1281857 9.10974816,60.0359286 9.10974816,65.4095571 C9.10974816,69.4395571 9.47111958,75.7945571 12.5711196,84.0609286 C13.087491,85.4045571 12.4161196,86.9031857 11.0733767,87.3681857 C9.72974816,87.8845571 8.23111958,87.1609286 7.76611958,85.8695571 C5.23474816,79.1018143 3.99474816,72.3845571 3.99474816,65.4095571 C3.99474816,59.2095571 5.18249101,53.5781857 7.50749101,48.6695571 C14.3797482,34.2545571 29.6211196,24.9031857 46.3097482,24.9031857 C69.817491,24.9031857 88.9347482,43.0381857 88.9347482,65.3581857 C88.9347482,73.7281857 81.8047482,80.5481857 73.0211196,80.5481857 C64.237491,80.5481857 57.107491,73.7281857 57.107491,65.3581857 C57.107491,59.8295571 52.3033767,55.3345571 46.3611196,55.3345571 C40.4197482,55.3345571 35.6147482,59.8295571 35.6147482,65.3581857 C35.6147482,74.1931857 39.0238624,82.4595571 45.2761196,88.6595571 C50.1847482,93.5168143 54.8861196,96.2031857 62.1711196,98.2181857 C63.5661196,98.5795571 64.3411196,100.026814 63.9797482,101.369557 C63.7211196,102.558186 62.6361196,103.333186 61.5511196,103.333186 C61.3447482,103.333186 61.0861196,103.280929 60.8797482,103.229557 Z">
        </path>
      </g>
      <g id="fingerprint-scanned-light" viewBox="0 0 93 104">
        <path fill="#4285f4" d="M75.346031,12.4513714 C65.426031,7.33637143 56.8487739,5.16637143 46.5674024,5.16637143 C36.3374024,5.16637143 26.6237739,7.595 17.7896596,12.4513714 C16.5487739,13.1227429 14.9987739,12.6577429 14.276031,11.4177429 C13.6046596,10.1777429 14.0696596,8.57637143 15.3096596,7.905 C24.9196596,2.68637143 35.4596596,0 46.5674024,0 C57.5732882,0 67.1824024,2.42774286 77.7232882,7.85274286 C79.0146596,8.525 79.4796596,10.075 78.8074024,11.315 C78.3424024,12.245 77.4646596,12.7613714 76.5346596,12.7613714 C76.121031,12.7613714 75.7074024,12.6577429 75.346031,12.4513714 Z">
        </path>
        <path fill="#34a853" d="M1.10147387,39.4213714 C-0.0871547017,38.595 -0.344897559,36.9927429 0.480588155,35.805 C5.59647387,28.5713714 12.1055882,22.8877429 19.8555882,18.91 C36.0801024,10.54 56.8492167,10.4877429 73.1242167,18.8577429 C80.8742167,22.8363714 87.3851024,28.4677429 92.4992167,35.65 C93.3264739,36.7863714 93.0678453,38.44 91.8801024,39.2663714 C90.6914739,40.0927429 89.0892167,39.835 88.2628453,38.6463714 C83.6128453,32.1363714 77.7228453,27.0213714 70.7478453,23.4563714 C55.9192167,15.8613714 36.9578453,15.8613714 22.1805882,23.5077429 C15.1551024,27.125 9.26421673,32.2913714 4.61421673,38.8013714 C4.20147387,39.525 3.42647387,39.8863714 2.59921673,39.8863714 C2.0828453,39.8863714 1.56647387,39.7313714 1.10147387,39.4213714 Z">
        </path>
        <path fill="#fbbc04" d="M33.0827567,101.473097 C28.5877567,96.9780971 26.1600139,94.0844686 22.6977567,87.8330971 C19.1327567,81.4780971 17.2727567,73.7280971 17.2727567,65.4094686 C17.2727567,50.0644686 30.3963853,37.5617257 46.5163853,37.5617257 C62.6354996,37.5617257 75.7600139,50.0644686 75.7600139,65.4094686 C75.7600139,66.8567257 74.6227567,67.9930971 73.1763853,67.9930971 C71.7300139,67.9930971 70.5927567,66.8567257 70.5927567,65.4094686 C70.5927567,52.9067257 59.7941282,42.7280971 46.5163853,42.7280971 C33.2377567,42.7280971 22.4391282,52.9067257 22.4391282,65.4094686 C22.4391282,72.8494686 24.0927567,79.7217257 27.2441282,85.3017257 C30.5513853,91.2430971 32.8241282,93.7744686 36.8027567,97.8044686 C37.7850139,98.8380971 37.7850139,100.439469 36.8027567,101.473097 C36.2350139,101.989469 35.5627567,102.248097 34.8913853,102.248097 C34.2191282,102.248097 33.5477567,101.989469 33.0827567,101.473097 Z">
        </path>
        <path fill="#ea4335" d="M55.9193939,88.0911057 C48.221651,82.8733629 43.6230224,74.3997343 43.6230224,65.4097343 C43.6230224,63.9633629 44.7593939,62.8261057 46.2057653,62.8261057 C47.6530224,62.8261057 48.7893939,63.9633629 48.7893939,65.4097343 C48.7893939,72.6947343 52.5093939,79.5661057 58.8130224,83.8033629 C62.4807653,86.2833629 66.7693939,87.4711057 71.9357653,87.4711057 C73.1757653,87.4711057 75.2421367,87.3161057 77.3093939,86.9547343 C78.7052796,86.6961057 80.0480224,87.6261057 80.3057653,89.0733629 C80.5643939,90.4683629 79.6343939,91.8111057 78.1880224,92.0697343 C75.2421367,92.6383629 72.6593939,92.6897343 71.9357653,92.6897343 C65.7880224,92.6897343 60.3630224,91.1397343 55.9193939,88.0911057 Z">
        </path>
        <path fill="#4285f4" d="M60.8797482,103.229557 C52.6647482,100.955929 47.2911196,97.9081857 41.6597482,92.3795571 C34.4261196,85.1981857 30.4483767,75.6395571 30.4483767,65.4095571 C30.4483767,57.0395571 37.5783767,50.2195571 46.3611196,50.2195571 C55.1447482,50.2195571 62.2738624,57.0395571 62.2738624,65.4095571 C62.2738624,70.9381857 67.0797482,75.4331857 73.0211196,75.4331857 C78.962491,75.4331857 83.767491,70.9381857 83.767491,65.4095571 C83.767491,45.9309286 66.9761196,30.1218143 46.3097482,30.1218143 C31.6361196,30.1218143 18.2033767,38.2845571 12.157491,50.9431857 C10.142491,55.1281857 9.10974816,60.0359286 9.10974816,65.4095571 C9.10974816,69.4395571 9.47111958,75.7945571 12.5711196,84.0609286 C13.087491,85.4045571 12.4161196,86.9031857 11.0733767,87.3681857 C9.72974816,87.8845571 8.23111958,87.1609286 7.76611958,85.8695571 C5.23474816,79.1018143 3.99474816,72.3845571 3.99474816,65.4095571 C3.99474816,59.2095571 5.18249101,53.5781857 7.50749101,48.6695571 C14.3797482,34.2545571 29.6211196,24.9031857 46.3097482,24.9031857 C69.817491,24.9031857 88.9347482,43.0381857 88.9347482,65.3581857 C88.9347482,73.7281857 81.8047482,80.5481857 73.0211196,80.5481857 C64.237491,80.5481857 57.107491,73.7281857 57.107491,65.3581857 C57.107491,59.8295571 52.3033767,55.3345571 46.3611196,55.3345571 C40.4197482,55.3345571 35.6147482,59.8295571 35.6147482,65.3581857 C35.6147482,74.1931857 39.0238624,82.4595571 45.2761196,88.6595571 C50.1847482,93.5168143 54.8861196,96.2031857 62.1711196,98.2181857 C63.5661196,98.5795571 64.3411196,100.026814 63.9797482,101.369557 C63.7211196,102.558186 62.6361196,103.333186 61.5511196,103.333186 C61.3447482,103.333186 61.0861196,103.280929 60.8797482,103.229557 Z">
        </path>
      </g>
    </defs>
  </svg>
</iron-iconset-svg>
`;document.head.appendChild(template$2.content);function getTemplate$16(){return html`<!--_html_template_start_-->    <style>canvas{height:100%;width:100%}</style>
    <canvas id="canvas" hidden="[[hidden]]"></canvas>
<!--_html_template_end_-->`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let workerLoaderPolicy=null;function getLottieWorkerURL(){if(workerLoaderPolicy===null){workerLoaderPolicy=window.trustedTypes.createPolicy("lottie-worker-script-loader",{createScriptURL:_ignore=>{const script=`import 'chrome://resources/lottie/lottie_worker.min.js';`;const blob=new Blob([script],{type:"text/javascript"});return URL.createObjectURL(blob)},createHTML:()=>assertNotReached(),createScript:()=>assertNotReached()})}return workerLoaderPolicy.createScriptURL("")}class CrLottieElement extends PolymerElement{constructor(){super(...arguments);this.canvasElement_=null;this.isAnimationLoaded_=false;this.offscreenCanvas_=null;this.hasTransferredCanvas_=false;this.resizeObserver_=null;this.playState_=false;this.workerNeedsSizeUpdate_=false;this.workerNeedsPlayControlUpdate_=false;this.worker_=null;this.xhr_=null}static get is(){return"cr-lottie"}static get template(){return getTemplate$16()}static get properties(){return{animationUrl:{type:String,value:"",observer:"animationUrlChanged_"},autoplay:{type:Boolean,value:false},hidden:{type:Boolean,value:false},singleLoop:{type:Boolean,value:false}}}connectedCallback(){super.connectedCallback();this.worker_=new Worker(getLottieWorkerURL(),{type:"module"});this.worker_.onmessage=this.onMessage_.bind(this);this.initialize_()}disconnectedCallback(){super.disconnectedCallback();if(this.resizeObserver_){this.resizeObserver_.disconnect()}if(this.worker_){this.worker_.terminate();this.worker_=null}if(this.xhr_){this.xhr_.abort();this.xhr_=null}}setPlay(shouldPlay){this.playState_=shouldPlay;if(this.isAnimationLoaded_){this.sendPlayControlInformationToWorker_()}else{this.workerNeedsPlayControlUpdate_=true}}sendPlayControlInformationToWorker_(){assert(this.worker_);this.worker_.postMessage({control:{play:this.playState_}})}initialize_(){this.canvasElement_=this.$.canvas;this.offscreenCanvas_=this.canvasElement_.transferControlToOffscreen();this.resizeObserver_=new ResizeObserver(this.onCanvasElementResized_.bind(this));this.resizeObserver_.observe(this.canvasElement_);if(this.isAnimationLoaded_){return}this.sendXmlHttpRequest_(this.animationUrl,"json",this.initAnimation_.bind(this))}animationUrlChanged_(){if(!this.worker_){return}if(this.xhr_){this.xhr_.abort();this.xhr_=null}if(this.isAnimationLoaded_){this.worker_.postMessage({control:{stop:true}});this.isAnimationLoaded_=false}this.sendXmlHttpRequest_(this.animationUrl,"json",this.initAnimation_.bind(this))}getCanvasDrawBufferSize_(){const canvasElement=this.$.canvas;const devicePixelRatio=window.devicePixelRatio;const clientRect=canvasElement.getBoundingClientRect();const drawSize={width:clientRect.width*devicePixelRatio,height:clientRect.height*devicePixelRatio};return drawSize}isValidUrl_(maybeValidUrl){const url=new URL(maybeValidUrl,document.location.href);return url.protocol==="chrome:"||url.protocol==="data:"&&url.pathname.startsWith("application/json;")}sendXmlHttpRequest_(url,responseType,successCallback){assert(this.isValidUrl_(url),"Invalid scheme or data url used.");assert(!this.xhr_);this.xhr_=new XMLHttpRequest;this.xhr_.open("GET",url,true);this.xhr_.responseType=responseType;this.xhr_.send();this.xhr_.onreadystatechange=()=>{assert(this.xhr_);if(this.xhr_.readyState===4&&this.xhr_.status===200){const response=this.xhr_.response;this.xhr_=null;successCallback(response)}}}onCanvasElementResized_(){if(this.isAnimationLoaded_){this.sendCanvasSizeToWorker_()}else{this.workerNeedsSizeUpdate_=true}}sendCanvasSizeToWorker_(){assert(this.worker_);this.worker_.postMessage({drawSize:this.getCanvasDrawBufferSize_()})}initAnimation_(animationData){const message={animationData:animationData,drawSize:this.getCanvasDrawBufferSize_(),params:{loop:!this.singleLoop,autoplay:this.autoplay}};assert(this.worker_);if(!this.hasTransferredCanvas_){message.canvas=this.offscreenCanvas_;this.hasTransferredCanvas_=true;this.worker_.postMessage(message,[this.offscreenCanvas_])}else{this.worker_.postMessage(message)}}fire_(eventName,eventData){this.dispatchEvent(new CustomEvent(eventName,{bubbles:true,composed:true,detail:eventData}))}onMessage_(event){if(event.data.name==="initialized"&&event.data.success){this.isAnimationLoaded_=true;this.sendPendingInfo_();this.fire_("cr-lottie-initialized")}else if(event.data.name==="playing"){this.fire_("cr-lottie-playing")}else if(event.data.name==="paused"){this.fire_("cr-lottie-paused")}else if(event.data.name==="stopped"){this.fire_("cr-lottie-stopped")}else if(event.data.name==="resized"){this.fire_("cr-lottie-resized",event.data.size)}}sendPendingInfo_(){if(this.workerNeedsSizeUpdate_){this.workerNeedsSizeUpdate_=false;this.sendCanvasSizeToWorker_()}if(this.workerNeedsPlayControlUpdate_){this.workerNeedsPlayControlUpdate_=false;this.sendPlayControlInformationToWorker_()}}}customElements.define(CrLottieElement.is,CrLottieElement);function getTemplate$15(){return html`<!--_html_template_start_-->    <style>:host{user-select:none}.translucent{opacity:.3}#canvasDiv{height:240px;overflow:hidden;position:relative;width:460px}cr-lottie{display:inline-block;position:absolute}#fingerprintScanned{position:absolute}</style>

    <div id="canvasDiv">
      <canvas id="canvas" height="240" width="460"></canvas>
      <iron-media-query query="(prefers-color-scheme: dark)" query-matches="{{isDarkModeActive_}}">
      </iron-media-query>
      <cr-lottie id="scanningAnimation" aria-hidden="true" autoplay="[[autoplay]]">
      </cr-lottie>
      <iron-icon id="fingerprintScanned" hidden></iron-icon>
    </div>
<!--_html_template_end_-->`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const FINGERPRINT_SCANNED_ICON_DARK="cr-fingerprint-icon:fingerprint-scanned-dark";const FINGERPRINT_SCANNED_ICON_LIGHT="cr-fingerprint-icon:fingerprint-scanned-light";const FINGERPRINT_CHECK_DARK_URL="chrome://theme/IDR_FINGERPRINT_COMPLETE_CHECK_DARK";const FINGERPRINT_CHECK_LIGHT_URL="chrome://theme/IDR_FINGERPRINT_COMPLETE_CHECK_LIGHT";const PROGRESS_CIRCLE_BACKGROUND_COLOR_DARK="rgba(95, 99, 104, 1.0)";const PROGRESS_CIRCLE_BACKGROUND_COLOR_LIGHT="rgba(232, 234, 237, 1.0)";const PROGRESS_CIRCLE_FILL_COLOR_DARK="rgba(102, 157, 246, 1.0)";const PROGRESS_CIRCLE_FILL_COLOR_LIGHT="rgba(66, 133, 244, 1.0)";const ANIMATE_TICKS_MS=20;const ANIMATE_DURATION_MS=200;const DEFAULT_PROGRESS_CIRCLE_RADIUS=114;const ICON_HEIGHT=118;const ICON_WIDTH=106;const CHECK_MARK_SIZE=53;const FINGERPRINT_SCAN_SUCCESS_MS=500;const PROGRESS_CIRCLE_STROKE_WIDTH=4;class CrFingerprintProgressArcElement extends PolymerElement{constructor(){super(...arguments);this.progressAnimationIntervalId_=undefined;this.progressPercentDrawn_=0;this.updateTimerId_=undefined}static get is(){return"cr-fingerprint-progress-arc"}static get template(){return getTemplate$15()}static get properties(){return{circleRadius:{type:Number,value:DEFAULT_PROGRESS_CIRCLE_RADIUS},autoplay:{type:Boolean,value:false},scale_:{type:Number,value:1},isComplete_:Boolean,isDarkModeActive_:{type:Boolean,value:false,observer:"onDarkModeChanged_"}}}onDarkModeChanged_(){this.clearCanvas_();this.drawProgressCircle_(this.progressPercentDrawn_);this.updateAnimationAsset_();this.updateIconAsset_()}connectedCallback(){super.connectedCallback();this.scale_=this.circleRadius/DEFAULT_PROGRESS_CIRCLE_RADIUS;this.updateIconAsset_();this.updateImages_()}reset(){this.cancelAnimations_();this.clearCanvas_();this.isComplete_=false;this.drawProgressCircle_(0);this.$.fingerprintScanned.hidden=true;const scanningAnimation=this.$.scanningAnimation;scanningAnimation.singleLoop=false;scanningAnimation.classList.add("translucent");this.updateAnimationAsset_();this.resizeAndCenterIcon_(scanningAnimation);scanningAnimation.hidden=false}setProgress(prevPercentComplete,currPercentComplete,isComplete){if(this.isComplete_){return}this.isComplete_=isComplete;this.cancelAnimations_();let nextPercentToDraw=prevPercentComplete;const endPercent=isComplete?100:Math.min(100,currPercentComplete);const step=(endPercent-prevPercentComplete)/(ANIMATE_DURATION_MS/ANIMATE_TICKS_MS);const doAnimate=()=>{if(nextPercentToDraw>=endPercent){if(this.progressAnimationIntervalId_){clearInterval(this.progressAnimationIntervalId_);this.progressAnimationIntervalId_=undefined}nextPercentToDraw=endPercent}this.clearCanvas_();this.drawProgressCircle_(nextPercentToDraw);if(!this.progressAnimationIntervalId_){this.dispatchEvent(new CustomEvent("cr-fingerprint-progress-arc-drawn",{bubbles:true,composed:true}))}nextPercentToDraw+=step};this.progressAnimationIntervalId_=setInterval(doAnimate,ANIMATE_TICKS_MS);if(isComplete){this.animateScanComplete_()}else{this.animateScanProgress_()}}setPlay(shouldPlay){this.$.scanningAnimation.setPlay(shouldPlay)}isComplete(){return this.isComplete_}drawArc_(startAngle,endAngle,color){const c=this.$.canvas;const ctx=c.getContext("2d");assert(!!ctx);ctx.beginPath();ctx.arc(c.width/2,c.height/2,this.circleRadius,startAngle,endAngle);ctx.lineWidth=PROGRESS_CIRCLE_STROKE_WIDTH;ctx.strokeStyle=color;ctx.stroke()}drawProgressCircle_(currentPercent){const start=3*Math.PI/2;const currentAngle=2*Math.PI*currentPercent/100;this.drawArc_(start,start+currentAngle,this.isDarkModeActive_?PROGRESS_CIRCLE_FILL_COLOR_DARK:PROGRESS_CIRCLE_FILL_COLOR_LIGHT);this.drawArc_(start+currentAngle,currentAngle<=0?7*Math.PI/2:start,this.isDarkModeActive_?PROGRESS_CIRCLE_BACKGROUND_COLOR_DARK:PROGRESS_CIRCLE_BACKGROUND_COLOR_LIGHT);this.progressPercentDrawn_=currentPercent}updateAnimationAsset_(){const scanningAnimation=this.$.scanningAnimation;if(this.isComplete_){scanningAnimation.animationUrl=this.isDarkModeActive_?FINGERPRINT_CHECK_DARK_URL:FINGERPRINT_CHECK_LIGHT_URL;return}scanningAnimation.animationUrl=this.isDarkModeActive_?"chrome://theme/IDR_FINGERPRINT_ICON_ANIMATION_DARK":"chrome://theme/IDR_FINGERPRINT_ICON_ANIMATION_LIGHT"}updateIconAsset_(){this.$.fingerprintScanned.icon=this.isDarkModeActive_?FINGERPRINT_SCANNED_ICON_DARK:FINGERPRINT_SCANNED_ICON_LIGHT}cancelAnimations_(){this.progressPercentDrawn_=0;if(this.progressAnimationIntervalId_){clearInterval(this.progressAnimationIntervalId_);this.progressAnimationIntervalId_=undefined}if(this.updateTimerId_){window.clearTimeout(this.updateTimerId_);this.updateTimerId_=undefined}}animateScanComplete_(){const scanningAnimation=this.$.scanningAnimation;scanningAnimation.singleLoop=true;scanningAnimation.autoplay=true;scanningAnimation.classList.remove("translucent");this.updateAnimationAsset_();this.resizeCheckMark_(scanningAnimation);this.$.fingerprintScanned.hidden=false}animateScanProgress_(){this.$.fingerprintScanned.hidden=false;this.$.scanningAnimation.hidden=true;this.updateTimerId_=window.setTimeout((()=>{this.$.scanningAnimation.hidden=false;this.$.fingerprintScanned.hidden=true}),FINGERPRINT_SCAN_SUCCESS_MS)}clearCanvas_(){const c=this.$.canvas;const ctx=c.getContext("2d");assert(!!ctx);ctx.clearRect(0,0,c.width,c.height)}updateImages_(){this.resizeAndCenterIcon_(this.$.scanningAnimation);this.resizeAndCenterIcon_(this.$.fingerprintScanned)}resizeAndCenterIcon_(target){target.style.width=ICON_WIDTH*this.scale_+"px";target.style.height=ICON_HEIGHT*this.scale_+"px";const left=this.$.canvas.width/2-ICON_WIDTH*this.scale_/2;const top=this.$.canvas.height/2-ICON_HEIGHT*this.scale_/2;target.style.left=left+"px";target.style.top=top+"px"}resizeCheckMark_(target){target.style.width=CHECK_MARK_SIZE*this.scale_+"px";target.style.height=CHECK_MARK_SIZE*this.scale_+"px";const top=this.$.canvas.height/2+this.circleRadius-CHECK_MARK_SIZE*this.scale_;const left=this.$.canvas.width/2+this.circleRadius-CHECK_MARK_SIZE*this.scale_;target.style.left=left+"px";target.style.top=top+"px"}}customElements.define(CrFingerprintProgressArcElement.is,CrFingerprintProgressArcElement);function getTemplate$14(){return html`<!--_html_template_start_-->    <style include="settings-shared">div[slot=body]{padding-inline-end:16px}#header{display:flex}#header .header-label{flex:auto}h3{font-size:inherit;font-weight:500;margin:0;padding-bottom:12px;padding-top:32px}iron-icon{padding-inline-end:12px}.list-item .name{word-break:break-word}.name{flex:3}#container{padding-inline-start:var(--cr-section-padding)}@media (prefers-color-scheme:dark){#lightIcon{display:none}}@media (prefers-color-scheme:light){#darkIcon{display:none}}</style>

    <cr-dialog id="dialog" close-text="$i18n{cancel}" ignore-popstate on-close="onDialogClosed_">
      <div slot="title">[[dialogTitle_(dialogPage_)]]</div>

      <div slot="body">
        <iron-pages attr-for-selected="id" selected="[[dialogPage_]]" on-iron-select="onIronSelect_">
          <div id="initial">
            <p>$i18n{securityKeysTouchToContinue}</p>
            <paper-spinner-lite style="padding-bottom:16px" active>
            </paper-spinner-lite>
          </div>

          <div id="pinPrompt">
            <settings-security-keys-pin-field id="pin" min-pin-length="[[minPinLength_]]">
            </settings-security-keys-pin-field>
          </div>

          <div id="enrollments">
            <div id="header" class="list-item column-header">
              <h3 class="header-label">[[enrollmentsHeader_(enrollments_)]]</h3>
              <cr-button id="addButton" on-click="addButtonClick_" class="secondary-button header-aligned-button">
                $i18n{add}
              </cr-button>
            </div>

            <div id="container">
              <iron-list id="enrollmentList" items="[[enrollments_]]" class="cr-separators">
                <template>
                  <div class="list-item" first$="[[!index]]">
                    <iron-icon id="darkIcon" icon="cr-fingerprint-icon:fingerprint-scanned-dark">
                    </iron-icon>
                    <iron-icon id="lightIcon" icon="cr-fingerprint-icon:fingerprint-scanned-light">
                    </iron-icon>
                    <div class="name" aria-label="[[item.name]]">
                      [[item.name]]
                    </div>
                    <cr-icon-button class="icon-clear" aria-label="$i18n{securityKeysBioEnrollmentDelete}" on-click="deleteEnrollment_" disabled="[[deleteInProgress_]]">
                    </cr-icon-button>
                  </div>
                </template>
              </iron-list>
            </div>
          </div>

          <div id="enroll">
            <p>[[progressArcLabel_]]</p>
            <cr-fingerprint-progress-arc id="arc" autoplay>
            </cr-fingerprint-progress-arc>
          </div>

          <div id="chooseName">
            <p>$i18n{securityKeysBioEnrollmentChooseName}</p>
            <cr-input type="text" id="enrollmentName" max-length="[[enrollmentNameMaxUtf8Length_]]" value="{{recentEnrollmentName_}}" label="$i18n{securityKeysBioEnrollmentNameLabel}" on-input="onEnrollmentNameInput_" error-message="[[enrollmentNameError_]]" invalid="[[!isNullOrEmpty_(enrollmentNameError_)]]" spellcheck="false">
            </cr-input>
          </div>

          <div id="error">[[errorMsg_]]</div>
        </iron-pages>
      </div>

      <div slot="button-container">
        <cr-button id="cancelButton" class="cancel-button" on-click="cancel_" hidden="[[!cancelButtonVisible_]]" disabled="[[cancelButtonDisabled_]]">
          $i18n{cancel}
        </cr-button>
        <cr-button id="confirmButton" class="action-button" hidden="[[!confirmButtonVisible_]]" disabled="[[confirmButtonDisabled_]]" on-click="confirmButtonClick_">
          [[confirmButtonLabel_]]
        </cr-button>
        <cr-button id="doneButton" class="action-button" on-click="done_" hidden="[[!doneButtonVisible_]]">
          $i18n{done}
        </cr-button>
      </div>
    </cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var BioEnrollDialogPage;(function(BioEnrollDialogPage){BioEnrollDialogPage["INITIAL"]="initial";BioEnrollDialogPage["PIN_PROMPT"]="pinPrompt";BioEnrollDialogPage["ENROLLMENTS"]="enrollments";BioEnrollDialogPage["ENROLL"]="enroll";BioEnrollDialogPage["CHOOSE_NAME"]="chooseName";BioEnrollDialogPage["ERROR"]="error"})(BioEnrollDialogPage||(BioEnrollDialogPage={}));const SettingsSecurityKeysBioEnrollDialogElementBase=WebUiListenerMixin(I18nMixin(PolymerElement));class SettingsSecurityKeysBioEnrollDialogElement extends SettingsSecurityKeysBioEnrollDialogElementBase{constructor(){super(...arguments);this.browserProxy_=SecurityKeysBioEnrollProxyImpl.getInstance();this.maxSamples_=-1;this.recentEnrollmentId_="";this.showSetPINButton_=false}static get is(){return"settings-security-keys-bio-enroll-dialog"}static get template(){return getTemplate$14()}static get properties(){return{cancelButtonDisabled_:Boolean,cancelButtonVisible_:Boolean,confirmButtonDisabled_:Boolean,confirmButtonVisible_:Boolean,confirmButtonLabel_:String,deleteInProgress_:Boolean,dialogPage_:{type:String,value:BioEnrollDialogPage.INITIAL,observer:"dialogPageChanged_"},doneButtonVisible_:Boolean,enrollments_:Array,minPinLength_:Number,progressArcLabel_:String,recentEnrollmentName_:String,enrollmentNameError_:String,enrollmentNameMaxUtf8Length_:Number,errorMsg_:String}}connectedCallback(){super.connectedCallback();this.$.dialog.showModal();this.addWebUiListener("security-keys-bio-enroll-error",((error,requiresPINChange=false)=>this.onError_(error,requiresPINChange)));this.addWebUiListener("security-keys-bio-enroll-status",(response=>this.onEnrollmentSample_(response)));this.browserProxy_.startBioEnroll().then((([minPinLength])=>{this.minPinLength_=minPinLength;this.dialogPage_=BioEnrollDialogPage.PIN_PROMPT}))}setDialogPageForTesting(page){this.dialogPage_=page}fire_(eventName,detail){this.dispatchEvent(new CustomEvent(eventName,{bubbles:true,composed:true,detail:detail}))}onError_(error,requiresPINChange=false){this.errorMsg_=error;this.showSetPINButton_=requiresPINChange;this.dialogPage_=BioEnrollDialogPage.ERROR}submitPin_(){this.confirmButtonDisabled_=true;this.$.pin.trySubmit((pin=>this.browserProxy_.providePin(pin))).then((()=>{this.browserProxy_.getSensorInfo().then((sensorInfo=>{this.enrollmentNameMaxUtf8Length_=sensorInfo.maxTemplateFriendlyName;this.showEnrollmentsPage_()}))}),(()=>{this.confirmButtonDisabled_=false}))}onEnrollments_(enrollments){this.enrollments_=enrollments.slice().sort(((a,b)=>a.name.localeCompare(b.name)));this.$.enrollmentList.fire("iron-resize");this.dialogPage_=BioEnrollDialogPage.ENROLLMENTS}setCancelButtonDisabledForTesting(disabled){this.cancelButtonDisabled_=disabled}dialogPageChanged_(){switch(this.dialogPage_){case BioEnrollDialogPage.INITIAL:this.cancelButtonVisible_=true;this.cancelButtonDisabled_=false;this.confirmButtonVisible_=false;this.doneButtonVisible_=false;break;case BioEnrollDialogPage.PIN_PROMPT:this.cancelButtonVisible_=true;this.cancelButtonDisabled_=false;this.confirmButtonVisible_=true;this.confirmButtonLabel_=this.i18n("continue");this.confirmButtonDisabled_=false;this.doneButtonVisible_=false;this.$.pin.focus();break;case BioEnrollDialogPage.ENROLLMENTS:this.cancelButtonVisible_=false;this.confirmButtonVisible_=false;this.doneButtonVisible_=true;break;case BioEnrollDialogPage.ENROLL:this.cancelButtonVisible_=true;this.cancelButtonDisabled_=false;this.confirmButtonVisible_=false;this.doneButtonVisible_=false;break;case BioEnrollDialogPage.CHOOSE_NAME:this.cancelButtonVisible_=false;this.confirmButtonVisible_=true;this.confirmButtonLabel_=this.i18n("continue");this.confirmButtonDisabled_=!this.recentEnrollmentName_.length;this.doneButtonVisible_=false;this.$.enrollmentName.focus();break;case BioEnrollDialogPage.ERROR:this.cancelButtonVisible_=true;this.confirmButtonVisible_=this.showSetPINButton_;this.confirmButtonLabel_=this.i18n("securityKeysSetPinButton");this.doneButtonVisible_=false;break;default:assertNotReached()}this.fire_("bio-enroll-dialog-ready-for-testing")}addButtonClick_(){assert(this.dialogPage_===BioEnrollDialogPage.ENROLLMENTS);this.maxSamples_=-1;this.$.arc.reset();this.progressArcLabel_=this.i18n("securityKeysBioEnrollmentEnrollingLabel");this.recentEnrollmentId_="";this.recentEnrollmentName_="";this.dialogPage_=BioEnrollDialogPage.ENROLL;this.browserProxy_.startEnrolling().then((response=>{this.onEnrollmentComplete_(response)}))}onEnrollmentSample_(response){if(response.status!==SampleStatus.OK){this.progressArcLabel_=this.i18n("securityKeysBioEnrollmentTryAgainLabel");getInstance().announce(this.progressArcLabel_);return}this.progressArcLabel_=this.i18n("securityKeysBioEnrollmentEnrollingLabel");assert(response.remaining>=0);if(this.maxSamples_===-1){this.maxSamples_=response.remaining+1}this.$.arc.setProgress(100*(this.maxSamples_-response.remaining-1)/this.maxSamples_,100*(this.maxSamples_-response.remaining)/this.maxSamples_,false)}onEnrollmentComplete_(response){switch(response.code){case Ctap2Status.OK:break;case Ctap2Status.ERR_KEEPALIVE_CANCEL:this.showEnrollmentsPage_();return;case Ctap2Status.ERR_FP_DATABASE_FULL:this.onError_(this.i18n("securityKeysBioEnrollmentStorageFullLabel"));return;default:this.onError_(this.i18n("securityKeysBioEnrollmentEnrollingFailedLabel"));return}this.maxSamples_=Math.max(this.maxSamples_,1);this.$.arc.setProgress(100*(this.maxSamples_-1)/this.maxSamples_,100,true);assert(response.enrollment);this.recentEnrollmentId_=response.enrollment.id;this.recentEnrollmentName_=response.enrollment.name;this.cancelButtonVisible_=false;this.confirmButtonVisible_=true;this.confirmButtonDisabled_=false;this.progressArcLabel_=this.i18n("securityKeysBioEnrollmentEnrollingCompleteLabel");this.$.confirmButton.focus();this.fire_("iron-announce",{text:this.progressArcLabel_});this.fire_("bio-enroll-dialog-ready-for-testing")}confirmButtonClick_(){switch(this.dialogPage_){case BioEnrollDialogPage.PIN_PROMPT:this.submitPin_();break;case BioEnrollDialogPage.ENROLL:assert(!!this.recentEnrollmentId_.length);this.dialogPage_=BioEnrollDialogPage.CHOOSE_NAME;break;case BioEnrollDialogPage.CHOOSE_NAME:this.renameNewEnrollment_();break;case BioEnrollDialogPage.ERROR:this.$.dialog.close();this.fire_("bio-enroll-set-pin");break;default:assertNotReached()}}renameNewEnrollment_(){assert(this.dialogPage_===BioEnrollDialogPage.CHOOSE_NAME);if((new TextEncoder).encode(this.recentEnrollmentName_).length>this.enrollmentNameMaxUtf8Length_){this.enrollmentNameError_=this.i18n("securityKeysBioEnrollmentNameLabelTooLong");return}this.enrollmentNameError_=null;this.confirmButtonDisabled_=true;this.browserProxy_.renameEnrollment(this.recentEnrollmentId_,this.recentEnrollmentName_).then((enrollments=>{this.onEnrollments_(enrollments)}))}showEnrollmentsPage_(){this.browserProxy_.enumerateEnrollments().then((enrollments=>{this.onEnrollments_(enrollments)}))}cancel_(){if(this.dialogPage_===BioEnrollDialogPage.ENROLL){this.cancelButtonDisabled_=true;this.browserProxy_.cancelEnrollment()}else{this.done_()}}done_(){this.$.dialog.close()}onDialogClosed_(){this.browserProxy_.close()}onIronSelect_(e){e.stopPropagation()}deleteEnrollment_(event){if(this.deleteInProgress_){return}this.deleteInProgress_=true;const enrollment=this.enrollments_[event.model.index];this.browserProxy_.deleteEnrollment(enrollment.id).then((enrollments=>{this.deleteInProgress_=false;this.onEnrollments_(enrollments)}))}onEnrollmentNameInput_(){this.confirmButtonDisabled_=!this.recentEnrollmentName_.length}dialogTitle_(dialogPage){if(dialogPage===BioEnrollDialogPage.ENROLL||dialogPage===BioEnrollDialogPage.CHOOSE_NAME){return this.i18n("securityKeysBioEnrollmentAddTitle")}return this.i18n("securityKeysBioEnrollmentDialogTitle")}enrollmentsHeader_(enrollments){return this.i18n(enrollments&&enrollments.length?"securityKeysBioEnrollmentEnrollmentsLabel":"securityKeysBioEnrollmentNoEnrollmentsLabel")}isNullOrEmpty_(s){return s===""||!s}}customElements.define(SettingsSecurityKeysBioEnrollDialogElement.is,SettingsSecurityKeysBioEnrollDialogElement);function getTemplate$13(){return html`<!--_html_template_start_-->    <style include="settings-shared">cr-input{display:inline-block;--cr-input-width:8em}#newPIN{padding-inline-end:2em}#newPINRow{display:flex;flex-direction:row}#newPINRow cr-input{width:8em;--cr-input-error-white-space:nowrap}paper-spinner-lite{padding-bottom:12px}</style>

    <cr-dialog id="dialog" close-text="$i18n{close}" ignore-popstate on-close="closeDialog_">
      <div slot="title">[[title_]]</div>
      <div slot="body">
        <iron-pages attr-for-selected="id" selected="[[shown_]]" on-iron-select="onIronSelect_">
          <div id="initial">
            <p>$i18n{securityKeysTouchToContinue}</p>
            <paper-spinner-lite active></paper-spinner-lite>
          </div>

          <div id="noPINSupport">
            <p>$i18n{securityKeysNoPIN}</p>
          </div>

          <div id="pinPrompt">
            <div id="currentPINEntry" hidden="[[!showCurrentEntry_]]">
              <p>$i18nRaw{securityKeysCurrentPINIntro}</p>

              <div id="currentPINRow">
                <cr-input id="currentPIN" value="{{currentPIN_}}" min-length="[[currentMinPinLength_]]" max-length="255" spellcheck="false" on-input="onCurrentPinInput_" invalid="[[isNonEmpty_(currentPINError_)]]" label="$i18n{securityKeysCurrentPIN}" type$="[[inputType_(pinsVisible_)]]" error-message="[[currentPINError_]]">
                  <cr-icon-button slot="suffix" id="showPINsButton" class$="[[showPinsClass_(pinsVisible_)]]" title="[[showPinsTitle_(pinsVisible_)]]" focus-row-control focus-type="showPassword" on-click="showPinsClick_"></cr-icon-button>
                </cr-input>

              </div>
            </div>

            <p>[[newPINDialogDescription_]]</p>

            <div id="newPINRow">
              <cr-input id="newPIN" value="{{newPIN_}}" min-length="[[newMinPinLength_]]" max-length="255" spellcheck="false" on-input="onNewPinInput_" label="$i18n{securityKeysPIN}" type$="[[inputType_(pinsVisible_)]]" invalid="[[isNonEmpty_(newPINError_)]]" error-message="[[newPINError_]]">
                
                <div style="height:36px" slot="suffix" hidden="[[showCurrentEntry_]]"></div>
              </cr-input>
              <cr-input id="confirmPIN" value="{{confirmPIN_}}" min-length="[[newMinPinLength_]]" max-length="255" spellcheck="false" on-input="onConfirmPinInput_" label="$i18n{securityKeysConfirmPIN}" invalid="[[isNonEmpty_(confirmPINError_)]]" type$="[[inputType_(pinsVisible_)]]" error-message="[[confirmPINError_]]">
                <cr-icon-button slot="suffix" class$="[[showPinsClass_(pinsVisible_)]]" title="[[showPinsTitle_(pinsVisible_)]]" hidden="[[showCurrentEntry_]]" focus-row-control focus-type="showPassword" on-click="showPinsClick_"></cr-icon-button>
              </cr-input>
            </div>
          </div>

          <div id="success">
            <p>$i18n{securityKeysPINSuccess}</p>
          </div>

          <div id="error">
            <p>[[pinFailed_(errorCode_)]]</p>
          </div>

          <div id="locked">
            <p>$i18n{securityKeysPINHardLock}</p>
          </div>

          <div id="reinsert">
            <p>$i18n{securityKeysPINSoftLock}</p>
          </div>
        </iron-pages>
      </div>

      <div slot="button-container">
        <cr-button id="closeButton" class$="[[maybeActionButton_(complete_)]]" on-click="closeDialog_">
          [[closeText_(complete_)]]
        </cr-button>
        <cr-button id="pinSubmit" class="action-button" on-click="pinSubmitNew_" disabled="[[!setPINButtonValid_]]" hidden="[[complete_]]">
          $i18n{securityKeysSetPINConfirm}
        </cr-button>
      </div>
    </cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var SetPinDialogPage;(function(SetPinDialogPage){SetPinDialogPage["INITIAL"]="initial";SetPinDialogPage["NO_PIN_SUPPORT"]="noPINSupport";SetPinDialogPage["REINSERT"]="reinsert";SetPinDialogPage["LOCKED"]="locked";SetPinDialogPage["ERROR"]="error";SetPinDialogPage["PIN_PROMPT"]="pinPrompt";SetPinDialogPage["SUCCESS"]="success"})(SetPinDialogPage||(SetPinDialogPage={}));const SettingsSecurityKeysSetPinDialogElementBase=I18nMixin(PolymerElement);class SettingsSecurityKeysSetPinDialogElement extends SettingsSecurityKeysSetPinDialogElementBase{constructor(){super(...arguments);this.browserProxy_=SecurityKeysPinBrowserProxyImpl.getInstance()}static get is(){return"settings-security-keys-set-pin-dialog"}static get template(){return getTemplate$13()}static get properties(){return{currentPINValid_:Boolean,newPINValid_:Boolean,confirmPINValid_:Boolean,setPINButtonValid_:{type:Boolean,value:false},newPIN_:{type:String,value:""},confirmPIN_:{type:String,value:""},currentPIN_:{type:String,value:""},currentMinPinLength_:Number,newMinPinLength_:{type:Number,observer:"newMinPinLengthChanged_"},retries_:Number,errorCode_:Number,showCurrentEntry_:{type:Boolean,value:false},currentPINError_:{type:String,value:""},newPINError_:{type:String,value:""},confirmPINError_:{type:String,value:""},complete_:{type:Boolean,value:false},shown_:{type:String,value:SetPinDialogPage.INITIAL},pinsVisible_:{type:Boolean,value:false},title_:String,newPINDialogDescription_:String}}connectedCallback(){super.connectedCallback();this.title_=this.i18n("securityKeysSetPINInitialTitle");this.$.dialog.showModal();this.browserProxy_.startSetPin().then((({done:done,error:error,currentMinPinLength:currentMinPinLength,newMinPinLength:newMinPinLength,retries:retries})=>{if(done){if(error===1){this.shown_=SetPinDialogPage.NO_PIN_SUPPORT;this.finish_()}else if(error===52){this.shown_=SetPinDialogPage.REINSERT;this.finish_()}else if(error===50){this.shown_=SetPinDialogPage.LOCKED;this.finish_()}else{this.errorCode_=error;this.shown_=SetPinDialogPage.ERROR;this.finish_()}}else if(retries===0){this.shown_=SetPinDialogPage.LOCKED;this.finish_()}else{this.currentPINValid_=true;this.newPINValid_=true;this.confirmPINValid_=true;this.setPINButtonValid_=true;this.currentMinPinLength_=currentMinPinLength;this.newMinPinLength_=newMinPinLength;this.retries_=retries;let focusTarget;if(this.retries_===null){this.showCurrentEntry_=false;focusTarget=this.$.newPIN;this.title_=this.i18n("securityKeysSetPINCreateTitle")}else{this.showCurrentEntry_=true;focusTarget=this.$.currentPIN;this.title_=this.i18n("securityKeysSetPINChangeTitle")}this.shown_=SetPinDialogPage.PIN_PROMPT;window.setTimeout((function(){focusTarget.focus()}),0);this.fire_("ui-ready")}}))}fire_(eventName,detail){this.dispatchEvent(new CustomEvent(eventName,{bubbles:true,composed:true,detail:detail}))}closeDialog_(){this.$.dialog.close();this.finish_()}finish_(){if(this.complete_){return}this.complete_=true;this.$.dialog.focus();this.browserProxy_.close()}onIronSelect_(e){e.stopPropagation()}onCurrentPinInput_(){this.currentPINError_=""}onNewPinInput_(){this.newPINError_=""}onConfirmPinInput_(){this.confirmPINError_=""}isValidPin_(pin,minLength){const utf8Encoded=(new TextEncoder).encode(pin);if(utf8Encoded.length<minLength){return this.i18n("securityKeysPINTooShort")}if(utf8Encoded.length>63||utf8Encoded[utf8Encoded.length-1]===0){return this.i18n("securityKeysPINTooLong")}let length=0;for(const _codepoint of pin){length++}if(length<minLength){return this.i18n("securityKeysPINTooShort")}return""}mismatchError_(retries){if(1<retries&&retries<=3){return this.i18n("securityKeysPINIncorrectRetriesPl",retries.toString())}if(retries===1){return this.i18n("securityKeysPINIncorrectRetriesSin")}return this.i18n("securityKeysPINIncorrect")}focusOn_(focusTarget){let preFocusTarget=this.$.newPIN;if(preFocusTarget===focusTarget){preFocusTarget=this.$.currentPIN}window.setTimeout((function(){preFocusTarget.focus();focusTarget.focus()}),0)}pinSubmitNew_(){if(this.showCurrentEntry_){this.currentPINError_=this.isValidPin_(this.currentPIN_,this.currentMinPinLength_);if(this.currentPINError_!==""){this.focusOn_(this.$.currentPIN);this.fire_("ui-ready");return}}this.newPINError_=this.isValidPin_(this.newPIN_,this.newMinPinLength_);if(this.newPINError_!==""){this.focusOn_(this.$.newPIN);this.fire_("ui-ready");return}if(this.newPIN_!==this.confirmPIN_){this.confirmPINError_=this.i18n("securityKeysPINMismatch");this.focusOn_(this.$.confirmPIN);this.fire_("ui-ready");return}if(this.newPIN_===this.currentPIN_){this.newPINError_=this.i18n("securityKeysSamePINAsCurrent");this.focusOn_(this.$.newPIN);this.fire_("ui-ready");return}this.setPINButtonValid_=false;this.browserProxy_.setPin(this.currentPIN_,this.newPIN_).then((response=>{const error=response.error;if(error===0){this.shown_=SetPinDialogPage.SUCCESS;this.finish_()}else if(error===52){this.shown_=SetPinDialogPage.REINSERT;this.finish_()}else if(error===50){this.shown_=SetPinDialogPage.LOCKED;this.finish_()}else if(error===49){this.currentPINValid_=false;this.retries_--;this.currentPINError_=this.mismatchError_(this.retries_);this.setPINButtonValid_=true;this.focusOn_(this.$.currentPIN);this.fire_("ui-ready")}else{this.errorCode_=error;this.shown_=SetPinDialogPage.ERROR;this.finish_()}}))}showPinsClick_(){this.pinsVisible_=!this.pinsVisible_}isNonEmpty_(s){return s!==""}pinFailed_(){if(this.errorCode_===null){return""}return this.i18n("securityKeysPINError",this.errorCode_.toString())}maybeActionButton_(){return this.complete_?"action-button":"cancel-button"}closeText_(){return this.i18n(this.complete_?"ok":"cancel")}newMinPinLengthChanged_(){PluralStringProxyImpl.getInstance().getPluralString("securityKeysNewPIN",this.newMinPinLength_).then((string=>this.newPINDialogDescription_=string))}showPinsClass_(){return"icon-visibility"+(this.pinsVisible_?"-off":"")}showPinsTitle_(){return this.i18n(this.pinsVisible_?"securityKeysHidePINs":"securityKeysShowPINs")}inputType_(){return this.pinsVisible_?"text":"password"}}customElements.define(SettingsSecurityKeysSetPinDialogElement.is,SettingsSecurityKeysSetPinDialogElement);function getTemplate$12(){return html`<!--_html_template_start_-->    <style include="settings-shared">paper-spinner-lite{padding-bottom:12px}</style>
    <cr-dialog id="dialog" close-text="$i18n{close}" ignore-popstate on-close="closeDialog_">
      <div slot="title">[[title_]]</div>
      <div slot="body">
        <iron-pages attr-for-selected="id" selected="[[shown_]]" on-iron-select="onIronSelect_">
          <div id="initial">
            <p>$i18n{securityKeysResetStep1}</p>
            <paper-spinner-lite active></paper-spinner-lite>
          </div>

          <div id="noReset">
            <p>$i18n{securityKeysNoReset}</p>
          </div>

          <div id="resetFailed">
            <p>[[resetFailed_(errorCode_)]]</p>
          </div>

          <div id="resetConfirm">
            <p>$i18n{securityKeysResetStep2}</p>
          </div>

          <div id="resetSuccess">
            <p>$i18n{securityKeysResetSuccess}</p>
          </div>

          <div id="resetNotAllowed">
            <p>$i18n{securityKeysResetNotAllowed}</p>
          </div>
        </iron-pages>
      </div>
      <div slot="button-container">
        <cr-button id="button" class$="[[maybeActionButton_(complete_)]]" on-click="closeDialog_">
          [[closeText_(complete_)]]
        </cr-button>
      </div>
    </cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var ResetDialogPage;(function(ResetDialogPage){ResetDialogPage["INITIAL"]="initial";ResetDialogPage["NO_RESET"]="noReset";ResetDialogPage["RESET_FAILED"]="resetFailed";ResetDialogPage["RESET_CONFIRM"]="resetConfirm";ResetDialogPage["RESET_SUCCESS"]="resetSuccess";ResetDialogPage["RESET_NOT_ALLOWED"]="resetNotAllowed"})(ResetDialogPage||(ResetDialogPage={}));const SettingsSecurityKeysResetDialogElementBase=I18nMixin(PolymerElement);class SettingsSecurityKeysResetDialogElement extends SettingsSecurityKeysResetDialogElementBase{constructor(){super(...arguments);this.browserProxy_=SecurityKeysResetBrowserProxyImpl.getInstance()}static get is(){return"settings-security-keys-reset-dialog"}static get template(){return getTemplate$12()}static get properties(){return{errorCode_:Number,complete_:{type:Boolean,value:false},shown_:{type:String,value:ResetDialogPage.INITIAL},title_:String}}connectedCallback(){super.connectedCallback();this.title_=this.i18n("securityKeysResetTitle");this.$.dialog.showModal();this.browserProxy_.reset().then((code=>{if(code===1){this.shown_=ResetDialogPage.NO_RESET;this.finish_()}else if(code!==0){this.errorCode_=code;this.shown_=ResetDialogPage.RESET_FAILED;this.finish_()}else{this.title_=this.i18n("securityKeysResetConfirmTitle");this.shown_=ResetDialogPage.RESET_CONFIRM;this.browserProxy_.completeReset().then((code=>{this.title_=this.i18n("securityKeysResetTitle");if(code===0){this.shown_=ResetDialogPage.RESET_SUCCESS}else if(code===48){this.shown_=ResetDialogPage.RESET_NOT_ALLOWED}else{this.errorCode_=code;this.shown_=ResetDialogPage.RESET_FAILED}this.finish_()}))}}))}closeDialog_(){this.$.dialog.close();this.finish_()}finish_(){if(this.complete_){return}this.complete_=true;this.browserProxy_.close()}onIronSelect_(e){e.stopPropagation()}resetFailed_(code){if(code===null){return""}return this.i18n("securityKeysResetError",code.toString())}closeText_(complete){return this.i18n(complete?"ok":"cancel")}maybeActionButton_(complete){return complete?"action-button":"cancel-button"}}customElements.define(SettingsSecurityKeysResetDialogElement.is,SettingsSecurityKeysResetDialogElement);function getTemplate$11(){return html`<!--_html_template_start_--><style include="settings-shared"></style>

<cr-link-row id="managePhonesButton" label="$i18n{securityKeysPhonesManage}" sub-label="$i18n{securityKeysPhonesManageDesc}" on-click="onManagePhonesClick_"></cr-link-row>
<cr-link-row id="setPINButton" class="hr" label="$i18n{securityKeysSetPIN}" sub-label="$i18n{securityKeysSetPINDesc}" on-click="onSetPin_"></cr-link-row>
<cr-link-row id="credentialManagementButton" class="hr" label="$i18n{securityKeysCredentialManagementLabel}" sub-label="$i18n{securityKeysCredentialManagementDesc}" on-click="onCredentialManagement_"></cr-link-row>
<template is="dom-if" if="[[enableBioEnrollment_]]">
  <cr-link-row id="bioEnrollButton" class="hr" label="$i18n{securityKeysBioEnrollmentSubpageLabel}" sub-label="$i18n{securityKeysBioEnrollmentSubpageDescription}" on-click="onBioEnroll_"></cr-link-row>
</template>
<cr-link-row id="resetButton" class="hr" label="$i18n{securityKeysReset}" sub-label="$i18n{securityKeysResetDesc}" on-click="onReset_"></cr-link-row>

<template is="dom-if" if="[[showSetPINDialog_]]" restamp>
  <settings-security-keys-set-pin-dialog on-close="onSetPinDialogClosed_">
  </settings-security-keys-set-pin-dialog>
</template>

<template is="dom-if" if="[[showCredentialManagementDialog_]]" restamp>
  <settings-security-keys-credential-management-dialog on-credential-management-set-pin="onSetPin_" on-close="onCredentialManagementDialogClosed_">
  </settings-security-keys-credential-management-dialog>
</template>

<template is="dom-if" if="[[showResetDialog_]]" restamp>
  <settings-security-keys-reset-dialog on-close="onResetDialogClosed_">
  </settings-security-keys-reset-dialog>
</template>

<template is="dom-if" if="[[showBioEnrollDialog_]]" restamp>
  <settings-security-keys-bio-enroll-dialog on-bio-enroll-set-pin="onSetPin_" on-close="onBioEnrollDialogClosed_">
  </settings-security-keys-bio-enroll-dialog>
</template>

<!--_html_template_end_-->`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SecurityKeysSubpageElement extends PolymerElement{static get is(){return"security-keys-subpage"}static get template(){return getTemplate$11()}static get properties(){return{enableBioEnrollment_:{type:Boolean,readOnly:true,value(){return loadTimeData.getBoolean("enableSecurityKeysBioEnrollment")}},showSetPINDialog_:{type:Boolean,value:false},showCredentialManagementDialog_:{type:Boolean,value:false},showResetDialog_:{type:Boolean,value:false},showBioEnrollDialog_:{type:Boolean,value:false}}}onManagePhonesClick_(){Router.getInstance().navigateTo(routes.SECURITY_KEYS_PHONES)}onSetPin_(){this.showSetPINDialog_=true}onSetPinDialogClosed_(){this.showSetPINDialog_=false;focusWithoutInk(this.$.setPINButton)}onCredentialManagement_(){this.showCredentialManagementDialog_=true}onCredentialManagementDialogClosed_(){this.showCredentialManagementDialog_=false;const toFocus=this.shadowRoot.querySelector("#credentialManagementButton");assert(toFocus);focusWithoutInk(toFocus)}onReset_(){this.showResetDialog_=true}onResetDialogClosed_(){this.showResetDialog_=false;focusWithoutInk(this.$.resetButton)}onBioEnroll_(){this.showBioEnrollDialog_=true}onBioEnrollDialogClosed_(){this.showBioEnrollDialog_=false;const toFocus=this.shadowRoot.querySelector("#bioEnrollButton");assert(toFocus);focusWithoutInk(toFocus)}}customElements.define(SecurityKeysSubpageElement.is,SecurityKeysSubpageElement);function getTemplate$10(){return html`<!--_html_template_start_--><style include="cr-shared-style settings-shared"></style>

<style>h2:first-of-type{padding-top:0}</style>

<div class="cr-row first">
  <div class="flex cr-padded-text">
    <h2>$i18n{securityKeysPhonesYourDevices}</h2>
    <div class="secondary">$i18n{securityKeysPhonesSyncedDesc}</div>
  </div>
</div>

<security-keys-phones-list id="syncedPhonesList" immutable phones="[[syncedPhones_]]">
</security-keys-phones-list>

<div class="cr-row first">
  <div class="flex cr-padded-text">
    <h2>$i18n{securityKeysPhonesLinkedDevices}</h2>
    <div class="secondary">$i18n{securityKeysPhonesLinkedDesc}</div>
  </div>
</div>

<security-keys-phones-list id="linkedPhonesList" phones="[[linkedPhones_]]">
</security-keys-phones-list>

<template is="dom-if" if="[[showDialog_]]" restamp>
  <security-keys-phones-dialog name="[[dialogName_]]" public-key="[[dialogPublicKey_]]" on-close="onDialogClose_">
  </security-keys-phones-dialog>
</template>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SecurityKeysPhonesSubpageElement extends PolymerElement{constructor(){super(...arguments);this.browserProxy_=SecurityKeysPhonesBrowserProxyImpl.getInstance()}static get is(){return"security-keys-phones-subpage"}static get template(){return getTemplate$10()}ready(){super.ready();this.addEventListener("edit-security-key-phone",this.editPhone_.bind(this));this.addEventListener("delete-security-key-phone",this.deletePhone_.bind(this));this.browserProxy_.enumerate().then(this.onEnumerateComplete_.bind(this))}onEnumerateComplete_([syncedPhones,linkedPhones]){this.syncedPhones_=syncedPhones;this.linkedPhones_=linkedPhones}editPhone_(e){this.dialogPublicKey_=e.detail;this.dialogName_=this.nameFromPublicKey_(e.detail);this.showDialog_=true}onDialogClose_(){this.showDialog_=false;this.browserProxy_.enumerate().then(this.onEnumerateComplete_.bind(this))}deletePhone_(e){this.browserProxy_.delete(e.detail).then(this.onEnumerateComplete_.bind(this))}nameFromPublicKey_(publicKey){const matchingPhones=this.linkedPhones_.filter((phone=>phone.publicKey===publicKey));assert(matchingPhones.length!==0);return matchingPhones[0].name}}customElements.define(SecurityKeysPhonesSubpageElement.is,SecurityKeysPhonesSubpageElement);function getTemplate$$(){return html`<!--_html_template_start_--><style include="settings-shared">.list-item{justify-content:space-between}#table .cr-row:first-child{border-top:none}</style>
<div id="outer" class="list-frame" role="table">
  <div role="rowgroup" id="table">
    <template is="dom-repeat" items="[[phones]]">
      <div class="list-item cr-row" role="row">
        <span role="cell" class="name-column">[[item.name]]</span>
        <template is="dom-if" if="[[!immutable]]">
          <span role="cell">
            <cr-icon-button class="icon-more-vert" on-click="onDotsClick_" data-phone-public-key$="[[item.publicKey]]" title="$i18n{moreActions}">
            </cr-icon-button>
          </span>
        </template>
      </div>
    </template>

    <cr-action-menu id="menu" role-description="$i18n{menu}">
      <button class="dropdown-item" on-click="onEditClick_" id="edit">
        $i18n{edit}
      </button>
      <button class="dropdown-item" on-click="onDeleteClick_" id="delete">
        $i18n{delete}
      </button>
    </cr-action-menu>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SecurityKeysPhonesListElement extends PolymerElement{static get is(){return"security-keys-phones-list"}static get template(){return getTemplate$$()}static get properties(){return{immutable:{type:Boolean,value:false},phones:{type:Array,value:[]}}}onDotsClick_(e){this.publicKeyForActionMenu_=e.target.dataset["phonePublicKey"];this.shadowRoot.querySelector("cr-action-menu").showAt(e.target,{anchorAlignmentY:AnchorAlignment.AFTER_END})}onEditClick_(e){this.handleClick_(e,"edit-security-key-phone")}onDeleteClick_(e){this.handleClick_(e,"delete-security-key-phone")}handleClick_(e,eventName){e.stopPropagation();this.closePopupMenu_();this.dispatchEvent(new CustomEvent(eventName,{bubbles:true,composed:true,detail:this.publicKeyForActionMenu_}))}closePopupMenu_(){this.shadowRoot.querySelector("cr-action-menu").close()}}customElements.define(SecurityKeysPhonesListElement.is,SecurityKeysPhonesListElement);function getTemplate$_(){return html`<!--_html_template_start_--><style include="settings-shared"></style>
<cr-dialog id="dialog" close-text="$i18n{close}" show-on-attach>
  <div slot="title">$i18n{securityKeysPhoneEditDialogTitle}</div>
  <div slot="body">
    <cr-input id="name" spellcheck="false" label="$i18n{securityKeysCredentialDisplayNameLabel}" value="[[name]]" on-input="validate_" autofocus>
    </cr-input>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" on-click="onCancelClick_" id="cancel">
        $i18n{cancel}</cr-button>
    <cr-button id="actionButton" class="action-button" on-click="onSaveClick_">
        $i18n{save}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SecurityKeysPhonesDialog extends PolymerElement{constructor(){super(...arguments);this.browserProxy_=SecurityKeysPhonesBrowserProxyImpl.getInstance()}static get is(){return"security-keys-phones-dialog"}static get template(){return getTemplate$_()}static get properties(){return{name:String,publicKey:String}}onCancelClick_(){this.$.dialog.cancel()}onSaveClick_(){const newName=this.$.name.value;if(newName===this.name){this.$.dialog.close();return}this.browserProxy_.rename(this.publicKey,newName).then((()=>this.$.dialog.close()))}validate_(event){const input=event.target;input.invalid=input.value==="";this.$.actionButton.disabled=input.invalid}}customElements.define(SecurityKeysPhonesDialog.is,SecurityKeysPhonesDialog);function getTemplate$Z(){return html`<!--_html_template_start_--><style include="cr-shared-style settings-shared">:host{flex-direction:column;display:flex;flex:1;padding:14px 16px}#header{font-weight:500;font-size:.75rem;user-select:none}#subheader{font-size:.6875rem;line-height:18px;user-select:none}iron-icon{height:var(--cr-icon-size);margin-bottom:10px;width:var(--cr-icon-size)}iron-icon.green{--iron-icon-fill-color:var(--google-green-700)}iron-icon.yellow{--iron-icon-fill-color:var(--google-yellow-700)}iron-icon.red{--iron-icon-fill-color:var(--google-red-600)}@media (prefers-color-scheme:dark){iron-icon.green{--iron-icon-fill-color:var(--google-green-300)}iron-icon.yellow{--iron-icon-fill-color:var(--google-yellow-300)}iron-icon.red{--iron-icon-fill-color:var(--google-red-300)}}</style>

<iron-icon id="icon" icon$="[[getStatusIcon(data.state)]]" class$="[[getColorClass(data.state)]]">
</iron-icon>
<div id="header">[[data.header]]</div>
<div id="subheader" class="cr-secondary-text">[[data.subheader]]</div>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SettingsSafetyHubCardElement extends PolymerElement{static get is(){return"settings-safety-hub-card"}static get template(){return getTemplate$Z()}static get properties(){return{data:Object}}getStatusIcon(state){switch(state){case CardState.WARNING:case CardState.WEAK:return"cr:error";case CardState.INFO:return"cr:info";case CardState.SAFE:return"cr:check-circle";default:assertNotReached()}}getColorClass(state){switch(state){case CardState.WARNING:return"red";case CardState.WEAK:return"yellow";case CardState.INFO:return"grey";case CardState.SAFE:return"green";default:assertNotReached()}}}customElements.define(SettingsSafetyHubCardElement.is,SettingsSafetyHubCardElement);function getTemplate$Y(){return html`<!--_html_template_start_--><style include="cr-shared-style">:host{display:flex;flex-direction:column}.box{background-color:var(--cr-card-background-color);border-radius:var(--cr-card-border-radius);box-shadow:var(--cr-card-shadow)}.card-container{align-items:stretch;display:flex;gap:16px;justify-content:space-between;width:100%}.card:hover{background-color:var(--cr-hover-background-color);cursor:pointer}.module{height:fit-content;margin-bottom:16px;padding:12px 20px}.section-header{color:var(--cr-primary-text-color);flex:1;font-size:108%;font-weight:400;letter-spacing:.25px;margin-bottom:16px;margin-top:30px;width:100%;user-select:none}.section-header.first{margin-top:0}</style>

<h2 class="section-header cr-secondary-text first">
  $i18n{safetyHubPageCardSectionHeader}
</h2>
<div class="card-container">
  <settings-safety-hub-card id="passwords" class="card box" data="[[passwordCardData_]]" on-click="onPasswordsClick_" tabindex="0" on-keydown="onPasswordsKeyPress_">
  </settings-safety-hub-card>
  <settings-safety-hub-card id="version" class="card box" data="[[versionCardData_]]" on-click="onVersionClick_" tabindex="0" on-keydown="onVersionKeyPress_">
  </settings-safety-hub-card>
  <settings-safety-hub-card id="safeBrowsing" class="card box" data="[[safeBrowsingCardData_]]" on-click="onSafeBrowsingClick_" tabindex="0" on-keydown="onSafeBrowsingKeyPress_">
  </settings-safety-hub-card>
</div>
<h2 class="section-header cr-secondary-text">
  $i18n{safetyHubPageModuleSectionHeader}
</h2>
<template is="dom-if" if="[[showNotificationPermissions_]]">
  <settings-safety-hub-notification-permissions-module class="module box">
  </settings-safety-hub-notification-permissions-module>
</template>
<template is="dom-if" if="[[showUnusedSitePermissions_]]">
  <settings-safety-hub-unused-site-permissions class="module box">
  </settings-safety-hub-unused-site-permissions>
</template>
<template is="dom-if" if="[[showExtensions_]]">
  <settings-safety-hub-extensions-module class="module box">
  </settings-safety-hub-extensions-module>
</template>
<template is="dom-if" if="[[showNoRecommendationsState_]]">
  <settings-safety-hub-module id="emptyStateModule" class="module box" header="$i18n{safetyHubEmptyStateModuleHeader}" subheader="$i18n{safetyHubEmptyStateModuleSubheader}" header-icon="cr:check">
  </settings-safety-hub-module>
  <settings-safety-hub-module id="userEducationModule" class="module box" header="$i18n{safetyHubUserEduModuleHeader}" header-icon="settings20:lightbulb" sites="[[userEducationItemList_]]">
  </settings-safety-hub-module>
</template>


<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsSafetyHubPageElementBase=RouteObserverMixin(RelaunchMixin(WebUiListenerMixin(I18nMixin(PolymerElement))));class SettingsSafetyHubPageElement extends SettingsSafetyHubPageElementBase{constructor(){super(...arguments);this.shouldRecordMetric_=false;this.browserProxy_=SafetyHubBrowserProxyImpl.getInstance();this.metricsBrowserProxy_=MetricsBrowserProxyImpl.getInstance()}static get is(){return"settings-safety-hub-page"}static get template(){return getTemplate$Y()}static get properties(){return{passwordCardData_:Object,versionCardData_:Object,safeBrowsingCardData_:Object,showNotificationPermissions_:{type:Boolean,value:false},showUnusedSitePermissions_:{type:Boolean,value:false},showExtensions_:{type:Boolean,value:false},showNoRecommendationsState_:{type:Boolean,computed:"computeShowNoRecommendationsState_(showUnusedSitePermissions_.*, showExtensions_.*, showNotificationPermissions_.*)"},userEducationItemList_:Array,hasDataForNotificationPermissions_:Boolean,hasDataForUnusedPermissions_:Boolean,hasDataForExtensions_:Boolean}}static get observers(){return["onAllModulesLoaded_(passwordCardData_, versionCardData_, safeBrowsingCardData_, hasDataForUnusedPermissions_, hasDataForNotificationPermissions_, hasDataForExtensions_)"]}connectedCallback(){this.initializeCards_();this.initializeModules_();this.initializeUserEducation_();super.connectedCallback()}currentRouteChanged(){if(Router.getInstance().getCurrentRoute()!==routes.SAFETY_HUB){return}this.browserProxy_.dismissActiveMenuNotification();this.metricsBrowserProxy_.recordSafetyHubImpression(SafetyHubSurfaces.SAFETY_HUB_PAGE);this.metricsBrowserProxy_.recordSafetyHubInteraction(SafetyHubSurfaces.SAFETY_HUB_PAGE);this.shouldRecordMetric_=true;this.onAllModulesLoaded_()}initializeCards_(){this.browserProxy_.getPasswordCardData().then((data=>{this.passwordCardData_=data}));this.browserProxy_.getSafeBrowsingCardData().then((data=>{this.safeBrowsingCardData_=data}));this.browserProxy_.getVersionCardData().then((data=>{this.versionCardData_=data}))}initializeModules_(){this.addWebUiListener(SafetyHubEvent.NOTIFICATION_PERMISSIONS_MAYBE_CHANGED,(sites=>this.onNotificationPermissionListChanged_(sites)));this.addWebUiListener(SafetyHubEvent.UNUSED_PERMISSIONS_MAYBE_CHANGED,(sites=>this.onUnusedSitePermissionListChanged_(sites)));this.addWebUiListener(SafetyHubEvent.EXTENSIONS_CHANGED,(num=>this.onExtensionsChanged_(num)));this.browserProxy_.getNotificationPermissionReview().then((sites=>this.onNotificationPermissionListChanged_(sites)));this.browserProxy_.getRevokedUnusedSitePermissionsList().then((sites=>this.onUnusedSitePermissionListChanged_(sites)));this.browserProxy_.getNumberOfExtensionsThatNeedReview().then((num=>this.onExtensionsChanged_(num)))}initializeUserEducation_(){this.userEducationItemList_=[{origin:this.i18n("safetyHubUserEduDataHeader"),detail:this.i18nAdvanced("safetyHubUserEduDataSubheader"),icon:"settings20:chrome-filled"},{origin:this.i18n("safetyHubUserEduIncognitoHeader"),detail:this.i18nAdvanced("safetyHubUserEduIncognitoSubheader"),icon:"settings20:incognito-unfilled"},{origin:this.i18n("safetyHubUserEduSafeBrowsingHeader"),detail:this.i18nAdvanced("safetyHubUserEduSafeBrowsingSubheader"),icon:"cr:security"}]}onPasswordsClick_(){this.metricsBrowserProxy_.recordSafetyHubCardStateClicked("Settings.SafetyHub.PasswordsCard.StatusOnClick",this.passwordCardData_.state);PasswordManagerImpl.getInstance().showPasswordManager(PasswordManagerPage.CHECKUP)}onPasswordsKeyPress_(e){e.stopPropagation();if(this.isEnterOrSpaceClicked_(e)){this.onPasswordsClick_()}}onVersionClick_(){this.metricsBrowserProxy_.recordSafetyHubCardStateClicked("Settings.SafetyHub.VersionCard.StatusOnClick",this.versionCardData_.state);if(this.versionCardData_.state===CardState.WARNING){this.performRestart(RestartType.RELAUNCH)}else{Router.getInstance().navigateTo(routes.ABOUT,undefined,true)}}onVersionKeyPress_(e){e.stopPropagation();if(this.isEnterOrSpaceClicked_(e)){this.onVersionClick_()}}onSafeBrowsingClick_(){this.metricsBrowserProxy_.recordSafetyHubCardStateClicked("Settings.SafetyHub.SafeBrowsingCard.StatusOnClick",this.safeBrowsingCardData_.state);Router.getInstance().navigateTo(routes.SECURITY,undefined,true)}onSafeBrowsingKeyPress_(e){e.stopPropagation();if(this.isEnterOrSpaceClicked_(e)){this.onSafeBrowsingClick_()}}onNotificationPermissionListChanged_(permissions){this.showNotificationPermissions_=permissions.length>0||this.showNotificationPermissions_;this.hasDataForNotificationPermissions_=true}onUnusedSitePermissionListChanged_(permissions){this.showUnusedSitePermissions_=permissions.length>0||this.showUnusedSitePermissions_;this.hasDataForUnusedPermissions_=true}computeShowNoRecommendationsState_(){return!(this.showUnusedSitePermissions_||this.showNotificationPermissions_||this.showExtensions_)}onExtensionsChanged_(numberOfExtensions){this.showExtensions_=!!numberOfExtensions;this.hasDataForExtensions_=true}isEnterOrSpaceClicked_(e){return e.key==="Enter"||e.key===" "}onAllModulesLoaded_(){if(!this.shouldRecordMetric_){return}if(!this.passwordCardData_||!this.safeBrowsingCardData_||!this.versionCardData_){return}if(!this.hasDataForUnusedPermissions_||!this.hasDataForNotificationPermissions_||!this.hasDataForExtensions_){return}this.shouldRecordMetric_=false;let hasAnyWarning=false;if(this.passwordCardData_.state!==CardState.SAFE){this.metricsBrowserProxy_.recordSafetyHubModuleWarningImpression(SafetyHubModuleType.PASSWORDS);hasAnyWarning=true}if(this.safeBrowsingCardData_.state!==CardState.SAFE){this.metricsBrowserProxy_.recordSafetyHubModuleWarningImpression(SafetyHubModuleType.SAFE_BROWSING);hasAnyWarning=true}if(this.versionCardData_.state!==CardState.SAFE){this.metricsBrowserProxy_.recordSafetyHubModuleWarningImpression(SafetyHubModuleType.VERSION);hasAnyWarning=true}if(this.showNotificationPermissions_){this.metricsBrowserProxy_.recordSafetyHubModuleWarningImpression(SafetyHubModuleType.NOTIFICATIONS);hasAnyWarning=true}if(this.showUnusedSitePermissions_){this.metricsBrowserProxy_.recordSafetyHubModuleWarningImpression(SafetyHubModuleType.PERMISSIONS);hasAnyWarning=true}if(this.showExtensions_){this.metricsBrowserProxy_.recordSafetyHubModuleWarningImpression(SafetyHubModuleType.EXTENSIONS);hasAnyWarning=true}this.metricsBrowserProxy_.recordSafetyHubDashboardAnyWarning(hasAnyWarning)}}customElements.define(SettingsSafetyHubPageElement.is,SettingsSafetyHubPageElement);const template$1=html`<iron-iconset-svg name="all-sites" size="20">
  <svg>
    <defs>
      <g id="logout" width="24px" height="24px" viewBox="0 0 24 24" fill="#757575"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path><path d="M0 0h24v24H0z" fill="none"></path></g>
      <g id="offline" viewBox="0 0 24 24" width="24px" height="24px" fill="#757575"><path clip-path="url(#b)" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 16H7v-2h10v2zm-6.7-4L7 10.7l1.4-1.4 1.9 1.9 5.3-5.3L17 7.3 10.3 14z"></path></g>
      <g id="tag" width="24px" height="24px" viewBox="0 0 24 24"><path transform="scale(-1, 1) translate(-24, 0)" d="M14.25 21.4q-.575.575-1.425.575-.85 0-1.425-.575l-8.8-8.8q-.275-.275-.437-.65Q2 11.575 2 11.15V4q0-.825.588-1.413Q3.175 2 4 2h7.15q.425 0 .8.162.375.163.65.438l8.8 8.825q.575.575.575 1.412 0 .838-.575 1.413ZM12.825 20l7.15-7.15L11.15 4H4v7.15ZM6.5 8q.625 0 1.062-.438Q8 7.125 8 6.5t-.438-1.062Q7.125 5 6.5 5t-1.062.438Q5 5.875 5 6.5t.438 1.062Q5.875 8 6.5 8ZM4 4Z"></path></g>
    </defs>
  </svg>
</iron-iconset-svg>
`;document.head.appendChild(template$1.content);const styleMod$2=document.createElement("dom-module");styleMod$2.appendChild(html`
  <template>
    <style>
.detail-list{margin-top:12px}.detail{align-items:center;display:flex;margin-top:8px}.detail iron-icon{margin-inline-end:16px}
    </style>
  </template>
`.content);styleMod$2.register("clear-storage-dialog-shared");function getTemplate$X(){return html`<!--_html_template_start_-->    <style include="cr-shared-style settings-shared">:host{padding:0 var(--cr-section-padding)}.row-aligned{align-items:center;display:flex}#toggleButton{min-height:var(--cr-section-min-height)}.site-representation{display:flex}.second-line{margin-top:.1em;min-height:1.54em}.data-unit{direction:ltr;unicode-bidi:isolate}.list-frame{padding-inline-end:0}.origin-link{overflow:hidden}.spacing{padding-inline-start:1ch}</style>
    <div id="collapseParent" focus-row-container>
      <div class$="list-item [[getClassForIndex_(listIndex)]]">
        <div id="toggleButton" class="start row-aligned two-line text-elide" on-click="onSiteEntryClick_" actionable aria-expanded="false">
          <site-favicon url="[[getSiteGroupIcon_(siteGroup)]]"></site-favicon>
          <div class="middle text-elide" id="displayName">
            <div class="site-representation">
              <span class="url-directionality text-elide">
                [[displayName_]]
              </span>
              <span class="secondary" hidden$="[[!siteGroupScheme_(siteGroup)]]">
                &nbsp;$i18nPolymer{siteSettingsSiteRepresentationSeparator}&nbsp;
              </span>
              <span class="secondary" hidden$="[[!siteGroupScheme_(siteGroup)]]">
                [[siteGroupScheme_(siteGroup)]]
              </span>
            </div>
            <div class="second-line secondary">
              <span class="data-unit">[[overallUsageString_]]</span>
              <span id="cookies" hidden$="[[!siteGroup.numCookies]]">
                &middot; [[cookieString_]]
              </span>
              <span id="fpsMembership" hidden$="[[!isFpsMember_(siteGroup.fpsOwner)]]">
                &middot; [[fpsMembershipLabel_]]
              </span>
              <span id="extensionIdDescription" hidden$="[[!isExtension_(siteGroup)]]">
                &middot; [[extensionIdDescription_(siteGroup)]]
              </span>
            </div>
          </div>
          <template is="dom-if" restamp if="[[shouldShowPolicyPrefIndicator_(
                            siteGroup.fpsEnterpriseManaged)]]">
            <cr-policy-pref-indicator id="fpsPolicy" pref="[[fpsEnterprisePref_]]" icon-aria-label="[[label]]" focus-row-control focus-type="policy">
            </cr-policy-pref-indicator>
          </template>
          <cr-icon-button id="expandIcon" class="icon-expand-more" hidden$="[[!grouped_(siteGroup)]]" aria-label$="[[displayName_]]" aria-describedby="displayName" aria-expanded="false" focus-row-control focus-type="expand"></cr-icon-button>
          <cr-icon-button class="subpage-arrow" hidden$="[[grouped_(siteGroup)]]" aria-label$="[[getSubpageLabel_(siteGroup.displayName)]]" aria-roledescription="$i18n{subpageArrowRoleDescription}" focus-row-control focus-type="show-detail"></cr-icon-button>
        </div>
        <div class="row-aligned">
          <template is="dom-if" if="[[shouldShowOverflowMenu(siteGroup.fpsOwner, isFpsFiltered)]]">
            <div class="separator"></div>
            <cr-icon-button class="icon-more-vert" id="fpsOverflowMenuButton" title="$i18n{moreActions}" on-click="showOverflowMenu_" focus-row-control focus-type="more-actions" aria-label$="[[getMoreActionsLabel_(siteGroup)]]">
            </cr-icon-button>
          </template>
          <template is="dom-if" if="[[!shouldShowOverflowMenu(siteGroup.fpsOwner, isFpsFiltered)]]">
            <div class="separator"></div>
            <cr-icon-button class="icon-delete-gray" id="removeSiteButton" title$="[[i18n('siteSettingsCookieRemoveSite', displayName_)]]" on-click="onRemove_" focus-row-control focus-type="remove">
            </cr-icon-button>
          </template>
        </div>
      </div>

      <cr-lazy-render id="originList">
        <template>
          <iron-collapse id="collapseChild" no-animation>
            <div class="list-frame">
              <template is="dom-repeat" items="[[siteGroup.origins]]">
                <div class="list-item hr">
                  <div class="start row-aligned list-item origin-link" on-click="onOriginClick_" actionable$="[[!item.isPartitioned]]">
                    <site-favicon url="[[item.origin]]"></site-favicon>
                    <div class="site-representation middle text-elide">
                      <span id="originSiteRepresentation" class="url-directionality text-elide">
                        [[originRepresentation(item.origin)]]
                      </span>
                      <span class="secondary" hidden$="[[!originScheme_(item)]]">
                        &nbsp;
                        $i18nPolymer{siteSettingsSiteRepresentationSeparator}
                        &nbsp;
                      </span>
                      <span class="secondary" hidden$="[[!originScheme_(item)]]">
                        [[originScheme_(item)]]
                      </span>
                      
                      <span class="spacing" hidden$="[[!item.usage]]"></span>
                      <span class="secondary data-unit" hidden$="[[!item.usage]]">
                        [[originUsagesItem_(originUsages_.*, index)]]
                      </span>
                      <span class="secondary" hidden$="[[!item.numCookies]]">
                          &nbsp;&middot;
                          [[originCookiesItem_(cookiesNum_.*, index)]]
                      </span>
                      <span class="secondary" hidden$="[[!item.isPartitioned]]">
                          &nbsp;&middot;
                          $i18n{siteSettingsSiteEntryPartitionedLabel}
                      </span>
                    </div>
                    <cr-icon-button class="subpage-arrow" hidden$="[[item.isPartitioned]]" aria-label$="[[getSubpageLabel_(item.origin)]]" aria-roledescription="$i18n{subpageArrowRoleDescription}" focus-row-control focus-type="detailed-sites">
                    </cr-icon-button>
                  </div>
                  <div class="row-aligned">
                    <div class="separator"></div>
                    <cr-icon-button class="icon-delete-gray" id="removeOriginButton" title$="[[getRemoveOriginButtonTitle_(item.origin)]]" data-origin$="[[item.origin]]" data-context="origin" data-partitioned$="[[item.isPartitioned]]" on-click="onRemove_" focus-row-control focus-type="remove">
                    </cr-icon-button>
                  </div>
                </div>
              </template>
            </div>
          </iron-collapse>
      </template>
    </cr-lazy-render>
    </div>
<!--_html_template_end_-->`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SiteEntryElementBase=FocusRowMixin(BaseMixin(SiteSettingsMixin(I18nMixin(PolymerElement))));class SiteEntryElement extends SiteEntryElementBase{constructor(){super(...arguments);this.button_=null;this.eventTracker_=new EventTracker}static get is(){return"site-entry"}static get template(){return getTemplate$X()}static get properties(){return{siteGroup:{type:Object,observer:"onSiteGroupChanged_"},displayName_:String,cookieString_:String,fpsMembershipLabel_:{type:String,value:""},fpsEnterprisePref_:Object,isFpsFiltered:Boolean,listIndex:{type:Number,value:-1},overallUsageString_:String,originUsages_:{type:Array,value(){return[]}},cookiesNum_:{type:Array,value(){return[]}},sortMethod:{type:String,observer:"updateOrigins_"}}}static get observers(){return["updateFpsMembershipLabel_(siteGroup.fpsNumMembers, siteGroup.fpsOwner)","updatePolicyPref_(siteGroup.fpsEnterpriseManaged)","updateFocus_(siteGroup.fpsOwner)"]}disconnectedCallback(){super.disconnectedCallback();if(this.button_){this.eventTracker_.remove(this.button_,"keydown")}}onButtonKeydown_(e){if(e.shiftKey&&e.key==="Tab"){this.focus()}}grouped_(siteGroup){if(!siteGroup){return false}if(siteGroup.origins.length>1||siteGroup.numCookies>siteGroup.origins[0].numCookies||siteGroup.origins.some((o=>o.isPartitioned))){return true}return false}siteGroupRepresentation_(siteGroup){if(!siteGroup){return""}return siteGroup.displayName}onSiteGroupChanged_(siteGroup){if(this.button_){this.eventTracker_.remove(this.button_,"keydown")}this.button_=this.shadowRoot.querySelector("#toggleButton *:not([hidden])");assert(this.button_);this.eventTracker_.add(this.button_,"keydown",(e=>this.onButtonKeydown_(e)));if(!this.grouped_(siteGroup)){const collapseChild=this.$.originList.getIfExists();if(collapseChild&&collapseChild.opened){this.toggleCollapsible_()}}if(!siteGroup){return}this.calculateUsageInfo_(siteGroup);this.getCookieNumString_(siteGroup.numCookies).then((string=>{this.cookieString_=string}));this.updateOrigins_(this.sortMethod);this.displayName_=this.siteGroupRepresentation_(siteGroup)}siteGroupScheme_(siteGroup){if(!siteGroup||this.grouped_(siteGroup)){return""}return this.originScheme_(siteGroup.origins[0])}originScheme_(origin){const url=this.toUrl(origin.origin);const scheme=url.protocol.replace(new RegExp(":*$"),"");const HTTPS_SCHEME="https";if(scheme===HTTPS_SCHEME){return""}return scheme}getSiteGroupIcon_(siteGroup){const origins=siteGroup.origins;assert(origins);assert(origins.length>=1);if(origins.length===1){return origins[0].origin}for(const originInfo of origins){if(siteGroup.etldPlus1&&this.toUrl(originInfo.origin).host==="www."+siteGroup.etldPlus1){return originInfo.origin}}const getMaxStorage=(max,originInfo)=>max.usage>originInfo.usage||max.usage===originInfo.usage&&max.numCookies>originInfo.numCookies?max:originInfo;return origins.reduce(getMaxStorage,origins[0]).origin}calculateUsageInfo_(siteGroup){let overallUsage=0;siteGroup.origins.forEach((originInfo=>{overallUsage+=originInfo.usage}));this.browserProxy.getFormattedBytes(overallUsage).then((string=>{this.overallUsageString_=string}))}isFpsMember_(){return!!this.siteGroup&&this.siteGroup.fpsOwner!==undefined}shouldShowOverflowMenu(){return this.isFpsMember_()&&!this.isFpsFiltered}getCookieNumString_(numCookies){if(numCookies===0){return Promise.resolve("")}return this.browserProxy.getNumCookiesString(numCookies)}updateFpsMembershipLabel_(){if(!this.siteGroup.fpsOwner){this.fpsMembershipLabel_=""}else{this.browserProxy.getFpsMembershipLabel(this.siteGroup.fpsNumMembers,this.siteGroup.fpsOwner).then((label=>this.fpsMembershipLabel_=label))}}shouldShowPolicyPrefIndicator_(){return!!this.siteGroup.fpsEnterpriseManaged}updatePolicyPref_(){this.fpsEnterprisePref_=this.siteGroup.fpsEnterpriseManaged?Object.assign({enforcement:chrome.settingsPrivate.Enforcement.ENFORCED,controlledBy:chrome.settingsPrivate.ControlledBy.DEVICE_POLICY}):Object.assign({enforcement:undefined,controlledBy:undefined})}updateFocus_(){const isCurrentlyFocused=this.isFocused;afterNextRender(this,(()=>{if(isCurrentlyFocused){(this.shouldShowOverflowMenu()?this.$$("#fpsOverflowMenuButton"):this.$$("#removeSiteButton")).focus()}}))}originUsagesItem_(change,index){return change.base[index]}originCookiesItem_(change,index){return change.base[index]}navigateToSiteDetails_(origin){this.fire("site-entry-selected",{item:this.siteGroup,index:this.listIndex});Router.getInstance().navigateTo(routes.SITE_SETTINGS_SITE_DETAILS,new URLSearchParams("site="+origin))}onOriginClick_(e){if(this.siteGroup.origins[e.model.index].isPartitioned){return}this.navigateToSiteDetails_(this.siteGroup.origins[e.model.index].origin);this.browserProxy.recordAction(AllSitesAction2.ENTER_SITE_DETAILS);chrome.metricsPrivate.recordUserAction("AllSites_EnterSiteDetails")}onSiteEntryClick_(){if(!this.grouped_(this.siteGroup)){this.navigateToSiteDetails_(this.siteGroup.origins[0].origin);this.browserProxy.recordAction(AllSitesAction2.ENTER_SITE_DETAILS);chrome.metricsPrivate.recordUserAction("AllSites_EnterSiteDetails");return}this.toggleCollapsible_();this.scrollIntoViewIfNeeded()}toggleCollapsible_(){const collapseChild=this.$.originList.get();collapseChild.toggle();this.$.toggleButton.setAttribute("aria-expanded",collapseChild.opened?"true":"false");this.$.expandIcon.setAttribute("aria-expanded",collapseChild.opened?"true":"false");this.$.expandIcon.toggleClass("icon-expand-more");this.$.expandIcon.toggleClass("icon-expand-less");this.fire("iron-resize")}showOverflowMenu_(e){this.fire("open-menu",{target:e.target,index:this.listIndex,item:this.siteGroup,origin:e.target.dataset["origin"],isPartitioned:e.target.dataset["partitioned"],actionScope:e.target.dataset["context"]})}onRemove_(e){this.fire("remove-site",{target:e.target,index:this.listIndex,item:this.siteGroup,origin:e.target.dataset["origin"],isPartitioned:e.target.dataset["partitioned"]!==undefined,actionScope:e.target.dataset["context"]})}getClassForIndex_(index){return index>0?"hr":""}getSubpageLabel_(target){return this.i18n("siteSettingsSiteDetailsSubpageAccessibilityLabel",target)}getRemoveOriginButtonTitle_(origin){return this.i18n("siteSettingsCookieRemoveSite",this.originRepresentation(origin))}getMoreActionsLabel_(){return this.i18n("firstPartySetsMoreActionsTitle",this.siteGroup.displayName)}updateOrigins_(sortMethod){if(!sortMethod||!this.siteGroup||!this.grouped_(this.siteGroup)){return}const origins=this.siteGroup.origins.slice();origins.sort(this.sortFunction_(sortMethod));this.set("siteGroup.origins",origins);this.originUsages_=new Array(origins.length);origins.forEach(((originInfo,i)=>{this.browserProxy.getFormattedBytes(originInfo.usage).then((string=>{this.set(`originUsages_.${i}`,string)}))}));this.cookiesNum_=new Array(this.siteGroup.origins.length);origins.forEach(((originInfo,i)=>{this.getCookieNumString_(originInfo.numCookies).then((string=>{this.set(`cookiesNum_.${i}`,string)}))}))}sortFunction_(sortMethod){if(sortMethod===SortMethod.MOST_VISITED){return(origin1,origin2)=>(origin1.isPartitioned?1:0)-(origin2.isPartitioned?1:0)||origin2.engagement-origin1.engagement}else if(sortMethod===SortMethod.STORAGE){return(origin1,origin2)=>(origin1.isPartitioned?1:0)-(origin2.isPartitioned?1:0)||origin2.usage-origin1.usage||origin2.numCookies-origin1.numCookies}else if(sortMethod===SortMethod.NAME){return(origin1,origin2)=>(origin1.isPartitioned?1:0)-(origin2.isPartitioned?1:0)||origin1.origin.localeCompare(origin2.origin)}assertNotReached()}extensionIdDescription_(siteGroup){const id=this.originRepresentation(siteGroup.origins[0].origin);return loadTimeData.getStringF("siteSettingsExtensionIdDescription",id)}isExtension_(siteGroup){return this.siteGroupScheme_(siteGroup)==="chrome-extension"}}customElements.define(SiteEntryElement.is,SiteEntryElement);function getTemplate$W(){return html`<!--_html_template_start_-->    <style include="settings-shared md-select clear-storage-dialog-shared">cr-dialog div[slot=title]{line-height:20px}#sort{align-items:center;display:flex;margin:0 var(--cr-icon-button-margin-start);margin-bottom:8px;padding:0 var(--cr-section-padding)}#sortMethod{margin-inline-start:1em}.list-frame.without-heading{padding-inline-start:var(--cr-section-padding)}#clearAllContainer{align-items:center;display:flex;height:var(--cr-section-two-line-min-height);justify-content:space-between;margin:0 var(--cr-icon-button-margin-start);padding-inline-end:var(--cr-section-padding);padding-inline-start:var(--cr-section-padding)}#fpsLearnMore{margin:0 var(--cr-icon-button-margin-start);padding-bottom:16px;padding-inline-end:var(--cr-section-padding);padding-inline-start:var(--cr-section-padding);width:60%}</style>
    <div id="sort">
      <label id="sortLabel">$i18n{siteSettingsAllSitesSort}</label>
      <select id="sortMethod" class="md-select" aria-labelledby="sortLabel" on-change="onSortMethodChanged_">
        <option value="[[sortMethods_.MOST_VISITED]]">
          $i18n{siteSettingsAllSitesSortMethodMostVisited}
        </option>
        <option value="[[sortMethods_.STORAGE]]">
          $i18n{siteSettingsAllSitesSortMethodStorage}
        </option>
        <option value="[[sortMethods_.NAME]]">
          $i18n{siteSettingsAllSitesSortMethodName}
        </option>
      </select>
    </div>
    <div id="clearAllContainer">
      <div id="clearLabel">
          [[getClearStorageDescription_(totalUsage_, filter)]]
      </div>
      <div id="clearAllButton">
        <cr-button type="button" on-click="onConfirmClearAllData_">
          [[getClearDataButtonString_(filter)]]
        </cr-button>
      </div>
    </div>
    <div id="fpsLearnMore" hidden$="[[!shouldShowFpsLearnMore_(filter, filteredList_)]]">
      [[getFpsLearnMoreLabel_(filter)]]
      <a href="$i18n{firstPartySetsLearnMoreURL}" aria-label="$i18n{siteSettingsFirstPartySetsLearnMoreAccessibility}">
        $i18n{learnMore}
      </a>
    </div>
    <div class="list-frame" hidden$="[[!siteGroupMapEmpty_(siteGroupMap)]]">
      <div class="list-item secondary">$i18n{emptyAllSitesPage}</div>
    </div>
    <div id="noSitesFoundText" class="list-frame" hidden$="[[!noSearchResultFound_(filteredList_)]]">
      <div class="list-item secondary">$i18n{noSitesFound}</div>
    </div>
    <div class="list-frame without-heading" id="listContainer">
      <iron-list id="allSitesList" items="[[filteredList_]]" scroll-target="[[subpageScrollTarget]]">
        <template>
          <site-entry site-group="[[item]]" list-index="[[index]]" iron-list-tab-index="[[tabIndex]]" focus-row-index="[[index]]" tabindex$="[[tabIndex]]" last-focused="{{lastFocused_}}" list-blurred="{{listBlurred_}}" sort-method="[[sortMethod_]]" is-fps-filtered="[[isFpsFiltered_(filter)]]">
          </site-entry>
        </template>
      </iron-list>
    </div>

    
    <cr-lazy-render id="menu">
      <template>
        <cr-action-menu role-description="$i18n{menu}">
          <button class="dropdown-item" role="menuitem" on-click="onShowRelatedSites_">
            $i18n{firstPartySetsShowRelatedSitesButton}
          </button>
          <button class="dropdown-item" role="menuitem" on-click="onRemove_">
            $i18n{firstPartySetsSiteDeleteStorageButton}
          </button>
        </cr-action-menu>
      </template>
    </cr-lazy-render>

    
    <cr-lazy-render id="confirmRemoveSite">
      <template>
        <cr-dialog close-text="$i18n{close}">
          <div id="removeSiteTitle" slot="title">
            [[getRemoveSiteTitle_(actionMenuModel_)]]
          </div>
          <div slot="body">
            <div id="logoutBulletPoint" class="detail">
              <iron-icon icon="all-sites:logout" aria-hidden="true" role="presentation"></iron-icon>
              [[getRemoveSiteLogoutBulletPoint_(actionMenuModel_)]]
            </div>
            <div class="detail">
              <iron-icon icon="all-sites:offline" aria-hidden="true" role="presentation"></iron-icon>
              $i18n{siteSettingsRemoveSiteOfflineData}
            </div>
            <div id="permissionsBulletPoint" class="detail" hidden$="[[!showPermissionsBulletPoint_(actionMenuModel_)]]">
              <iron-icon icon="settings:permissions"></iron-icon>
              $i18n{siteSettingsRemoveSitePermissions}
            </div>
          </div>
          <div slot="button-container">
            <cr-button class="cancel-button" on-click="onCloseDialog_">
              $i18n{cancel}
            </cr-button>
            <cr-button class="action-button" on-click="onConfirmRemoveSite_">
              $i18n{siteSettingsRemoveSiteConfirm}
            </cr-button>
          </div>
        </cr-dialog>
      </template>
    </cr-lazy-render>

    
    <cr-lazy-render id="confirmClearAllData">
      <template>
        <cr-dialog close-text="$i18n{close}">
          <div slot="title">[[getClearAllStorageDialogTitle_(filter)]]</div>
          <div slot="body">
            <div id="clearAllStorageDialogDescription">
              [[getClearAllStorageDialogDescription_(totalUsage_,
                  filteredList_)]]
            </div>
            <div class="detail-list">
              <div id="clearAllStorageDialogSignOutLabel" class="detail">
                <iron-icon icon="all-sites:logout" aria-hidden="true" role="presentation"></iron-icon>
                [[getClearAllStorageDialogSignOutLabel_(filter)]]
              </div>
              <div class="detail">
                <iron-icon icon="all-sites:offline" aria-hidden="true" role="presentation"></iron-icon>
                $i18n{siteSettingsSiteGroupDeleteOfflineData}
              </div>
            </div>
          </div>
          <div slot="button-container">
            <cr-button class="cancel-button" on-click="onCloseDialog_">
              $i18n{cancel}
            </cr-button>
            <cr-button class="action-button" on-click="onClearAllData_">
              $i18n{siteSettingsSiteClearStorage}
            </cr-button>
          </div>
        </cr-dialog>
      </template>
    </cr-lazy-render>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const AllSitesElementBase=GlobalScrollTargetMixin(RouteObserverMixin(WebUiListenerMixin(I18nMixin(SiteSettingsMixin(PolymerElement)))));const FPS_RELATED_SEARCH_PREFIX="related:";class AllSitesElement extends AllSitesElementBase{constructor(){super(...arguments);this.metricsBrowserProxy=MetricsBrowserProxyImpl.getInstance()}static get is(){return"all-sites"}static get template(){return getTemplate$W()}static get properties(){return{siteGroupMap:{type:Object,value(){return new Map}},filteredList_:{type:Array},subpageRoute:{type:Object,value:routes.SITE_SETTINGS_ALL,readOnly:true},filter:{type:String,value:"",observer:"forceListUpdate_"},sortMethods_:{type:Object,value:SortMethod,readOnly:true},selectedItem_:Object,lastFocused_:Object,listBlurred_:Boolean,actionMenuModel_:Object,clearAllData_:Boolean,sortMethod_:String,totalUsage_:{type:String,value:"0 B"}}}ready(){super.ready();this.addWebUiListener("onStorageListFetched",this.onStorageListFetched.bind(this));this.addEventListener("site-entry-selected",(e=>{this.selectedItem_=e.detail}));this.addEventListener("open-menu",this.onOpenMenu_.bind(this));this.addEventListener("remove-site",this.onRemoveSite_.bind(this));const sortParam=Router.getInstance().getQueryParameters().get("sort");if(sortParam!==null&&Object.values(SortMethod).includes(sortParam)){this.$.sortMethod.value=sortParam}this.sortMethod_=this.$.sortMethod.value}connectedCallback(){super.connectedCallback();afterNextRender(this,(()=>{this.$.allSitesList.scrollOffset=this.$.allSitesList.offsetTop}))}currentRouteChanged(currentRoute,oldRoute){super.currentRouteChanged(currentRoute);if(currentRoute===routes.SITE_SETTINGS_ALL&&currentRoute!==oldRoute){this.populateList_()}}populateList_(){this.browserProxy.getAllSites().then((response=>{const newMap=new Map(this.siteGroupMap);response.forEach((siteGroup=>{newMap.set(siteGroup.groupingKey,siteGroup)}));this.siteGroupMap=newMap;this.forceListUpdate_()}))}onStorageListFetched(list){const newMap=new Map(this.siteGroupMap);list.forEach((storageSiteGroup=>{newMap.set(storageSiteGroup.groupingKey,storageSiteGroup)}));this.siteGroupMap=newMap;this.forceListUpdate_();this.focusOnLastSelectedEntry_()}updateTotalUsage_(){let usageSum=0;for(const siteGroup of this.filteredList_){siteGroup.origins.forEach((origin=>{usageSum+=origin.usage}))}this.browserProxy.getFormattedBytes(usageSum).then((totalUsage=>{this.totalUsage_=totalUsage}))}filterPopulatedList_(siteGroupMap,searchQuery){const result=[];for(const[_groupingKey,siteGroup]of siteGroupMap){if(this.isFpsFiltered_()){const fpsOwnerFilter=this.filter.substring(this.filter.indexOf(":")+1);if(siteGroup.fpsOwner&&siteGroup.fpsOwner===fpsOwnerFilter){result.push(siteGroup)}}else{if(siteGroup.origins.find((originInfo=>originInfo.origin.includes(searchQuery)))){result.push(siteGroup)}}}return this.sortSiteGroupList_(result)}sortSiteGroupList_(siteGroupList){const sortMethod=this.$.sortMethod.value;if(!sortMethod){return siteGroupList}if(sortMethod===SortMethod.MOST_VISITED){siteGroupList.sort(this.mostVisitedComparator_)}else if(sortMethod===SortMethod.STORAGE){siteGroupList.sort(this.storageComparator_)}else if(sortMethod===SortMethod.NAME){siteGroupList.sort(this.nameComparator_)}return siteGroupList}mostVisitedComparator_(siteGroup1,siteGroup2){const getMaxEngagement=(max,originInfo)=>max>originInfo.engagement?max:originInfo.engagement;const score1=siteGroup1.origins.reduce(getMaxEngagement,0);const score2=siteGroup2.origins.reduce(getMaxEngagement,0);return score2-score1}storageComparator_(siteGroup1,siteGroup2){const getOverallUsage=siteGroup=>{let usage=0;siteGroup.origins.forEach((originInfo=>{usage+=originInfo.usage}));return usage};const siteGroup1Size=getOverallUsage(siteGroup1);const siteGroup2Size=getOverallUsage(siteGroup2);return siteGroup2Size-siteGroup1Size||siteGroup2.numCookies-siteGroup1.numCookies}nameComparator_(siteGroup1,siteGroup2){return siteGroup1.displayName.localeCompare(siteGroup2.displayName)}onSortMethodChanged_(){this.sortMethod_=this.$.sortMethod.value;this.filteredList_=this.sortSiteGroupList_(this.filteredList_);this.$.allSitesList.fire("iron-resize")}forceListUpdate_(){this.filteredList_=this.filterPopulatedList_(this.siteGroupMap,this.filter);this.updateTotalUsage_();this.$.allSitesList.fire("iron-resize")}forceListUpdateForTesting(){this.forceListUpdate_()}siteGroupMapEmpty_(){return!this.siteGroupMap.size}noSearchResultFound_(){return!this.filteredList_.length&&!this.siteGroupMapEmpty_()}focusOnLastSelectedEntry_(){if(!this.selectedItem_||this.siteGroupMap.size===0){return}const index=Math.max(0,Math.min(this.selectedItem_.index,this.siteGroupMap.size));this.$.allSitesList.focusItem(index);this.selectedItem_=null}onOpenMenu_(e){const index=e.detail.index;const list=this.$.allSitesList;if(index<list.firstVisibleIndex||index>list.lastVisibleIndex){list.scrollToIndex(index)}const target=e.detail.target;this.actionMenuModel_=e.detail;this.$.menu.get().showAt(target)}shouldShowFpsLearnMore_(){return this.isFpsFiltered_()&&this.filteredList_&&this.filteredList_.length>0}onShowRelatedSites_(){this.browserProxy.recordAction(AllSitesAction2.FILTER_BY_FPS_OWNER);this.$.menu.get().close();const siteGroup=this.filteredList_[this.actionMenuModel_.index];const searchParams=new URLSearchParams("searchSubpage="+encodeURIComponent(FPS_RELATED_SEARCH_PREFIX+siteGroup.fpsOwner));const currentRoute=Router.getInstance().getCurrentRoute();Router.getInstance().navigateTo(currentRoute,searchParams)}onRemoveSite_(e){this.actionMenuModel_=e.detail;this.$.confirmRemoveSite.get().showModal()}onRemove_(){this.$.confirmRemoveSite.get().showModal()}generatePlaceholderOrigin_(numCookies,origin,etldPlus1){return{origin:etldPlus1?`http://${etldPlus1}/`:origin,engagement:0,usage:0,numCookies:numCookies,hasPermissionSettings:false,isInstalled:false,isPartitioned:false}}onConfirmRemoveSite_(e){const{index:index,actionScope:actionScope,origin:origin,isPartitioned:isPartitioned}=this.actionMenuModel_;const siteGroupToUpdate=this.filteredList_[index];const updatedSiteGroup={groupingKey:siteGroupToUpdate.groupingKey,displayName:siteGroupToUpdate.displayName,hasInstalledPWA:siteGroupToUpdate.hasInstalledPWA,numCookies:siteGroupToUpdate.numCookies,fpsOwner:siteGroupToUpdate.fpsOwner,fpsNumMembers:siteGroupToUpdate.fpsNumMembers,origins:[]};this.metricsBrowserProxy.recordDeleteBrowsingDataAction(DeleteBrowsingDataAction.SITES_SETTINGS_PAGE);if(actionScope==="origin"){if(isPartitioned){this.browserProxy.recordAction(AllSitesAction2.REMOVE_ORIGIN_PARTITIONED);this.browserProxy.clearPartitionedOriginDataAndCookies(this.toUrl(origin).href,siteGroupToUpdate.groupingKey)}else{this.browserProxy.recordAction(AllSitesAction2.REMOVE_ORIGIN);this.browserProxy.clearUnpartitionedOriginDataAndCookies(this.toUrl(origin).href);this.resetPermissionsForOrigin_(origin)}updatedSiteGroup.origins=siteGroupToUpdate.origins.filter((o=>o.isPartitioned!==isPartitioned||o.origin!==origin));updatedSiteGroup.hasInstalledPWA=updatedSiteGroup.origins.some((o=>o.isInstalled));updatedSiteGroup.numCookies-=siteGroupToUpdate.origins.find((o=>o.isPartitioned===isPartitioned&&o.origin===origin)).numCookies;if(updatedSiteGroup.origins.length===0&&updatedSiteGroup.numCookies>0){const originPlaceHolder=this.generatePlaceholderOrigin_(updatedSiteGroup.numCookies,origin,updatedSiteGroup.etldPlus1);updatedSiteGroup.origins.push(originPlaceHolder)}}else{this.browserProxy.recordAction(AllSitesAction2.REMOVE_SITE_GROUP);this.browserProxy.clearSiteGroupDataAndCookies(siteGroupToUpdate.groupingKey);siteGroupToUpdate.origins.forEach((originEntry=>{this.resetPermissionsForOrigin_(originEntry.origin)}));if(updatedSiteGroup.fpsOwner){this.decrementFpsNumMembers_(updatedSiteGroup.fpsOwner)}}this.updateSiteGroup_(index,updatedSiteGroup);this.$.allSitesList.fire("iron-resize");this.updateTotalUsage_();this.onCloseDialog_(e)}isFiltered_(){return this.filter!==""}isFpsFiltered_(){return this.filter.startsWith(FPS_RELATED_SEARCH_PREFIX)}getFpsLearnMoreLabel_(){const fpsOwner=this.filter.substring(this.filter.indexOf(":")+1);return loadTimeData.getStringF("siteSettingsFirstPartySetsLearnMore",fpsOwner)}getClearDataButtonString_(){const buttonStringId=this.isFiltered_()?"siteSettingsDeleteDisplayedStorageLabel":"siteSettingsDeleteAllStorageLabel";return this.i18n(buttonStringId)}getClearStorageDescription_(){const descriptionId=this.isFiltered_()?"siteSettingsClearDisplayedStorageDescription":"siteSettingsClearAllStorageDescription";return loadTimeData.substituteString(this.i18n(descriptionId),this.totalUsage_)}onConfirmClearAllData_(e){e.preventDefault();this.clearAllData_=true;const anyAppsInstalled=this.filteredList_.some((g=>g.hasInstalledPWA));const scopes=[AllSitesDialog.CLEAR_DATA,"All"];const installed=anyAppsInstalled?"Installed":"";this.recordUserAction_([...scopes,installed,"DialogOpened"]);this.$.confirmClearAllData.get().showModal()}onCloseDialog_(e){chrome.metricsPrivate.recordUserAction("AllSites_DialogClosed");e.target.closest("cr-dialog").close();this.actionMenuModel_=null;this.$.menu.get().close()}getRemoveSiteTitle_(){if(this.actionMenuModel_===null){return""}const originScoped=this.actionMenuModel_.actionScope==="origin";const singleOriginSite=!originScoped&&this.actionMenuModel_.item.origins.length===1;if(this.actionMenuModel_.isPartitioned){assert(originScoped);return loadTimeData.substituteString(this.i18n("siteSettingsRemoveSiteOriginPartitionedDialogTitle",this.originRepresentation(this.actionMenuModel_.origin),this.actionMenuModel_.item.displayName))}const numInstalledApps=this.actionMenuModel_.item.origins.filter((o=>!originScoped||this.actionMenuModel_.origin===o.origin)).filter((o=>o.isInstalled)).length;let messageId;if(originScoped||singleOriginSite){if(numInstalledApps===1){messageId="siteSettingsRemoveSiteOriginAppDialogTitle"}else{assert(numInstalledApps===0);messageId="siteSettingsRemoveSiteOriginDialogTitle"}}else{if(numInstalledApps>1){messageId="siteSettingsRemoveSiteGroupAppPluralDialogTitle"}else if(numInstalledApps===1){messageId="siteSettingsRemoveSiteGroupAppDialogTitle"}else{messageId="siteSettingsRemoveSiteGroupDialogTitle"}}let displayOrigin;if(originScoped){displayOrigin=this.actionMenuModel_.origin}else if(singleOriginSite){displayOrigin=this.actionMenuModel_.item.origins[0].origin}else{displayOrigin=this.actionMenuModel_.item.displayName}return loadTimeData.substituteString(this.i18n(messageId),this.originRepresentation(displayOrigin))}getRemoveSiteLogoutBulletPoint_(){if(this.actionMenuModel_===null){return""}const originScoped=this.actionMenuModel_.actionScope==="origin";const singleOriginSite=!originScoped&&this.actionMenuModel_.item.origins.length===1;return originScoped||singleOriginSite?this.i18n("siteSettingsRemoveSiteOriginLogout"):this.i18n("siteSettingsRemoveSiteGroupLogout")}showPermissionsBulletPoint_(){if(this.actionMenuModel_===null){return false}return this.actionMenuModel_.item.origins.filter((o=>this.actionMenuModel_.actionScope!=="origin"||this.actionMenuModel_.origin===o.origin)).some((o=>o.hasPermissionSettings))}getClearAllStorageDialogTitle_(){const titleId=this.isFiltered_()?"siteSettingsDeleteDisplayedStorageDialogTitle":"siteSettingsDeleteAllStorageDialogTitle";return loadTimeData.substituteString(this.i18n(titleId),this.totalUsage_)}getClearAllStorageDialogDescription_(){const anyAppsInstalled=this.filteredList_.some((g=>g.hasInstalledPWA));let messageId;if(anyAppsInstalled){messageId=this.isFiltered_()?"siteSettingsDeleteDisplayedStorageConfirmationInstalled":"siteSettingsDeleteAllStorageConfirmationInstalled"}else{messageId=this.isFiltered_()?"siteSettingsDeleteDisplayedStorageConfirmation":"siteSettingsDeleteAllStorageConfirmation"}return loadTimeData.substituteString(this.i18n(messageId),this.totalUsage_)}getClearAllStorageDialogSignOutLabel_(){const signOutLabelId=this.isFiltered_()?"siteSettingsClearDisplayedStorageSignOut":"siteSettingsClearAllStorageSignOut";return this.i18n(signOutLabelId)}recordUserAction_(scopes){chrome.metricsPrivate.recordUserAction(["AllSites",...scopes].filter(Boolean).join("_"))}decrementFpsNumMembers_(fpsOwner){this.filteredList_.forEach(((siteGroup,index)=>{if(siteGroup.fpsOwner===fpsOwner){this.set("filteredList_."+index+".fpsNumMembers",siteGroup.fpsNumMembers-1)}}))}resetPermissionsForOrigin_(origin){this.browserProxy.setOriginPermissions(origin,null,ContentSetting.DEFAULT)}clearDataForSiteGroupIndex_(index){const siteGroupToUpdate=this.filteredList_[index];const updatedSiteGroup={groupingKey:siteGroupToUpdate.groupingKey,displayName:siteGroupToUpdate.displayName,hasInstalledPWA:siteGroupToUpdate.hasInstalledPWA,numCookies:0,fpsOwner:siteGroupToUpdate.fpsOwner,fpsNumMembers:siteGroupToUpdate.fpsNumMembers,origins:[]};this.browserProxy.clearSiteGroupDataAndCookies(siteGroupToUpdate.groupingKey);for(let i=0;i<siteGroupToUpdate.origins.length;++i){const updatedOrigin=Object.assign({},siteGroupToUpdate.origins[i]);if(updatedOrigin.hasPermissionSettings){updatedOrigin.numCookies=0;updatedOrigin.usage=0;updatedSiteGroup.origins.push(updatedOrigin)}}this.updateSiteGroup_(index,updatedSiteGroup)}updateSiteGroup_(index,updatedSiteGroup){if(updatedSiteGroup.origins.length>0){this.set("filteredList_."+index,updatedSiteGroup);this.siteGroupMap.set(updatedSiteGroup.groupingKey,updatedSiteGroup)}else{this.splice("filteredList_",index,1);this.siteGroupMap.delete(updatedSiteGroup.groupingKey)}}onClearAllData_(e){this.browserProxy.recordAction(AllSitesAction2.CLEAR_ALL_DATA);const scopes=[AllSitesDialog.CLEAR_DATA,"All"];const anyAppsInstalled=this.filteredList_.some((g=>g.hasInstalledPWA));const installed=anyAppsInstalled?"Installed":"";this.recordUserAction_([...scopes,installed,"Confirm"]);this.metricsBrowserProxy.recordDeleteBrowsingDataAction(DeleteBrowsingDataAction.SITES_SETTINGS_PAGE);if(this.isFpsFiltered_()){this.browserProxy.recordAction(AllSitesAction2.DELETE_FOR_ENTIRE_FPS)}for(let index=this.filteredList_.length-1;index>=0;index--){this.clearDataForSiteGroupIndex_(index)}this.forceListUpdate_();this.totalUsage_="0 B";this.onCloseDialog_(e)}}customElements.define(AllSitesElement.is,AllSitesElement);function getTemplate$V(){return html`<!--_html_template_start_--><style include="cr-shared-style settings-shared">.file-system{padding-inline-start:20px;padding-inline-end:20px}</style>
<div class="list-item file-system">
  <div id="fileTypeIcon" class$="cr-icon [[getClassForListItem_(grant)]]">
  </div>
  <div class="site-representation middle text-elide">
    <span class="display-name url-directionality text-elide">
        [[grant.displayName]]
    </span>
  </div>
  <cr-icon-button id="removeGrant" class="icon-delete-gray" on-click="onRemoveGrantClick_" aria-label="$i18n{siteSettingsFileSystemSiteListRemoveGrantLabel}">
  <cr-icon-button>
</cr-icon-button></cr-icon-button></div><!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const FileSystemSiteEntryItemElementBase=BaseMixin(PolymerElement);class FileSystemSiteEntryItemElement extends FileSystemSiteEntryItemElementBase{static get is(){return"file-system-site-entry-item"}static get template(){return getTemplate$V()}static get properties(){return{grant:Object}}getClassForListItem_(){return this.grant.isDirectory?"icon-folder-open":"icon-file"}onRemoveGrantClick_(){this.fire("revoke-grant",this.grant)}}customElements.define(FileSystemSiteEntryItemElement.is,FileSystemSiteEntryItemElement);function getTemplate$U(){return html`<!--_html_template_start_--><style>.grants-list-header{padding-inline-start:20px;padding-bottom:20px}.view-grants{padding-top:20px}</style>

<div class="grants-list-header" hidden$="[[!grantsPerOrigin.editGrants.length]]">
  $i18n{siteSettingsFileSystemSiteListEditHeader}
</div>
<template is="dom-repeat" items="[[grantsPerOrigin.editGrants]]" as="editGrant">
  <file-system-site-entry-item grant="[[editGrant]]" on-revoke-grant="onRevokeGrant_">
  </file-system-site-entry-item>
</template>
<div class="grants-list-header view-grants" hidden$="[[!grantsPerOrigin.viewGrants.length]]">
  $i18n{siteSettingsFileSystemSiteListViewHeader}
</div>
<template is="dom-repeat" items="[[grantsPerOrigin.viewGrants]]" as="viewGrant">
  <file-system-site-entry-item grant="[[viewGrant]]" on-revoke-grant="onRevokeGrant_">
  </file-system-site-entry-item>
</template><!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const FileSystemSiteDetailsElementBase=WebUiListenerMixin(BaseMixin(RouteObserverMixin(SiteSettingsMixin(I18nMixin(PolymerElement)))));class FileSystemSiteDetailsElement extends FileSystemSiteDetailsElementBase{static get is(){return"file-system-site-details"}static get template(){return getTemplate$U()}static get properties(){return{pageTitle:{type:String,notify:true},origin_:String,grantsPerOrigin:Object}}connectedCallback(){super.connectedCallback();this.addWebUiListener("contentSettingChooserPermissionChanged",(category=>{if(category===ContentSettingsTypes.FILE_SYSTEM_WRITE){this.populateList_()}}))}currentRouteChanged(route){if(route!==routes.SITE_SETTINGS_FILE_SYSTEM_WRITE_DETAILS){return}const site=Router.getInstance().getQueryParameters().get("site");if(!site){return}this.browserProxy.isOriginValid(site).then((valid=>{if(!valid){Router.getInstance().navigateToPreviousRoute()}this.origin_=site;this.pageTitle=this.origin_}));this.populateList_()}async populateList_(){const response=await this.browserProxy.getFileSystemGrants();const originFileSystemGrantsObj=response.find((grantObj=>grantObj.origin===this.origin_));if(!originFileSystemGrantsObj){Router.getInstance().navigateTo(routes.SITE_SETTINGS_FILE_SYSTEM_WRITE);return}this.grantsPerOrigin=originFileSystemGrantsObj}onRevokeGrant_(e){this.browserProxy.revokeFileSystemGrant(e.detail.origin,e.detail.filePath)}}customElements.define(FileSystemSiteDetailsElement.is,FileSystemSiteDetailsElement);function getTemplate$T(){return html`<!--_html_template_start_--><style include="cr-shared-style settings-shared">.origin{flex-grow:1;padding-inline-start:20px}.origin-row{align-items:center;display:flex;padding-bottom:5px;padding-inline-end:10px;padding-top:5px}.subpage-arrow{margin-inline-end:2px}.separator{padding-inline-end:25px}</style>

<div class="list-frame">
  <div class="origin-row">
    <site-favicon url="[[grantsPerOrigin.origin]]"></site-favicon>
    <div class="origin">[[grantsPerOrigin.origin]]</div>
    <cr-icon-button id="fileSystemSiteDetails" class="subpage-arrow" aria-label$="[[grantsPerOrigin.origin]]" aria-roledescription="$i18n{subpageArrowRoleDescription}" on-click="onNavigateToDetailsPageClick_">
    </cr-icon-button>
    <div class="separator"></div>
    <cr-icon-button class="icon-delete-gray" id="removeGrants" on-click="onRemoveGrantsClick_">
      $i18n{siteSettingsFileSystemSiteListRemoveGrants}
    </cr-icon-button>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const FileSystemSiteEntryElementBase=BaseMixin(PolymerElement);class FileSystemSiteEntryElement extends FileSystemSiteEntryElementBase{static get is(){return"file-system-site-entry"}static get template(){return getTemplate$T()}static get properties(){return{grantsPerOrigin:Object}}onNavigateToDetailsPageClick_(){Router.getInstance().navigateTo(routes.SITE_SETTINGS_FILE_SYSTEM_WRITE_DETAILS,new URLSearchParams("site="+this.grantsPerOrigin.origin))}onRemoveGrantsClick_(){this.fire("revoke-grants",this.grantsPerOrigin)}}customElements.define(FileSystemSiteEntryElement.is,FileSystemSiteEntryElement);function getTemplate$S(){return html`<!--_html_template_start_--><style include="cr-shared-style settings-shared"></style>

<div class="cr-row first">
  <h2 class="cr-secondary-text">
    $i18n{siteSettingsFileSystemSiteListHeader}
  </h2>
</div>
<div class="list-frame" hidden$="[[hasAllowedGrants_(allowedGrants_.*)]]">
  <div class="list-item cr-secondary-text">$i18n{noSitesAdded}</div>
</div>
<template is="dom-repeat" items="[[allowedGrants_]]" as="grantsPerOrigin">
  <file-system-site-entry grants-per-origin="[[grantsPerOrigin]]" on-revoke-grant="onRevokeGrant_" on-revoke-grants="onRevokeGrants_">
  </file-system-site-entry>
</template><!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const FileSystemSiteListElementBase=WebUiListenerMixin(RouteObserverMixin(SiteSettingsMixin(PolymerElement)));class FileSystemSiteListElement extends FileSystemSiteListElementBase{static get is(){return"file-system-site-list"}static get template(){return getTemplate$S()}static get properties(){return{allowedGrants_:{type:Array,value:()=>[]}}}connectedCallback(){super.connectedCallback();this.addWebUiListener("contentSettingChooserPermissionChanged",(category=>{if(category===ContentSettingsTypes.FILE_SYSTEM_WRITE){this.populateList_()}}))}disconnectedCallback(){super.disconnectedCallback()}currentRouteChanged(currentRoute,oldRoute){if(currentRoute===routes.SITE_SETTINGS_FILE_SYSTEM_WRITE&&currentRoute!==oldRoute){this.populateList_()}}async populateList_(){const response=await this.browserProxy.getFileSystemGrants();this.set("allowedGrants_",response)}hasAllowedGrants_(){return this.allowedGrants_.length>0}onRevokeGrant_(e){this.browserProxy.revokeFileSystemGrant(e.detail.origin,e.detail.filePath)}onRevokeGrants_(e){this.browserProxy.revokeFileSystemGrants(e.detail.origin)}}customElements.define(FileSystemSiteListElement.is,FileSystemSiteListElement);function getTemplate$R(){return html`<!--_html_template_start_-->    <style include="cr-shared-style settings-shared">site-favicon{padding-inline-end:24px}.link-button[disabled]{cursor:auto;pointer-events:none}.incognito-icon{cursor:auto;pointer-events:auto}.display-name{flex:1;max-width:100%}</style>
    <div id="noPermissionsText" class="list-frame" hidden$="[[!noRecentPermissions]]">
      <div class="list-item secondary">$i18n{noRecentPermissions}</div>
    </div>
    <template is="dom-repeat" id="recentPermissionsList" items="[[recentSitePermissionsList_]]" on-dom-change="onDomChange_">
      <div class$="cr-row link-button [[getClassForIndex_(index)]]" on-click="onRecentSitePermissionClick_" actionable disabled$="[[item.incognito]]">
        <site-favicon url="[[item.origin]]"></site-favicon>
        <div id="displayName_[[index]]" class="display-name cr-padded-text">
          <div class="site-representation">
            <span class="url-directionality">[[getDisplayName_(item)]]</span>
            <span class="secondary" hidden$="[[!getSiteScheme_(item)]]">
            &nbsp;$i18nPolymer{siteSettingsSiteRepresentationSeparator}&nbsp;
            </span>
            <span class="secondary" hidden$="[[!getSiteScheme_(item)]]">
              [[getSiteScheme_(item)]]
            </span>
          </div>
          <div class="second-line secondary">
              [[getPermissionsText_(item)]]
          </div>
        </div>
        <cr-icon-button id="siteEntryButton_[[index]]" class="subpage-arrow" hidden$="[[item.incognito]]" aria-label$="[[getDisplayName_(item)]]" aria-describedby$="displayName_[[index]]" focus-row-control focus-type="show-detail"></cr-icon-button>
        <cr-tooltip-icon id="incognitoInfoIcon_[[index]]" class="incognito-icon" hidden$="[[!item.incognito]]" disabled$="[[item.incognito]]" icon-aria-label="$i18n{incognitoSiteExceptionDesc}" icon-class="settings20:incognito" on-click="onShowIncognitoTooltip_" on-mouseenter="onShowIncognitoTooltip_" on-focus="onShowIncognitoTooltip_"></cr-tooltip-icon>
      </div>
    </template>
    <paper-tooltip id="tooltip" fit-to-visible-bounds manual-mode position="top">
      $i18n{incognitoSiteExceptionDesc}
    </paper-tooltip>
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getLocalizationStringForContentType(contentSettingsType){switch(contentSettingsType){case ContentSettingsTypes.ADS:return"siteSettingsAdsMidSentence";case ContentSettingsTypes.AR:return"siteSettingsArMidSentence";case ContentSettingsTypes.AUTO_PICTURE_IN_PICTURE:return"siteSettingsAutoPictureInPictureMidSentence";case ContentSettingsTypes.AUTOMATIC_DOWNLOADS:return"siteSettingsAutomaticDownloadsMidSentence";case ContentSettingsTypes.BACKGROUND_SYNC:return"siteSettingsBackgroundSyncMidSentence";case ContentSettingsTypes.BLUETOOTH_DEVICES:return"siteSettingsBluetoothDevicesMidSentence";case ContentSettingsTypes.BLUETOOTH_SCANNING:return"siteSettingsBluetoothScanningMidSentence";case ContentSettingsTypes.CAMERA:return"siteSettingsCameraMidSentence";case ContentSettingsTypes.CLIPBOARD:return"siteSettingsClipboardMidSentence";case ContentSettingsTypes.COOKIES:return"siteSettingsCookiesMidSentence";case ContentSettingsTypes.FEDERATED_IDENTITY_API:return"siteSettingsFederatedIdentityApiMidSentence";case ContentSettingsTypes.FILE_SYSTEM_WRITE:return"siteSettingsFileSystemWriteMidSentence";case ContentSettingsTypes.GEOLOCATION:return"siteSettingsLocationMidSentence";case ContentSettingsTypes.HID_DEVICES:return"siteSettingsHidDevicesMidSentence";case ContentSettingsTypes.IDLE_DETECTION:return"siteSettingsIdleDetectionMidSentence";case ContentSettingsTypes.IMAGES:return"siteSettingsImagesMidSentence";case ContentSettingsTypes.JAVASCRIPT:return"siteSettingsJavascriptMidSentence";case ContentSettingsTypes.LOCAL_FONTS:return"siteSettingsFontAccessMidSentence";case ContentSettingsTypes.MIC:return"siteSettingsMicMidSentence";case ContentSettingsTypes.MIDI:case ContentSettingsTypes.MIDI_DEVICES:return"siteSettingsMidiDevicesMidSentence";case ContentSettingsTypes.MIXEDSCRIPT:return"siteSettingsInsecureContentMidSentence";case ContentSettingsTypes.NOTIFICATIONS:return"siteSettingsNotificationsMidSentence";case ContentSettingsTypes.PAYMENT_HANDLER:return"siteSettingsPaymentHandlerMidSentence";case ContentSettingsTypes.POPUPS:return"siteSettingsPopupsMidSentence";case ContentSettingsTypes.PROTECTED_CONTENT:return"siteSettingsProtectedContentMidSentence";case ContentSettingsTypes.PROTOCOL_HANDLERS:return"siteSettingsHandlersMidSentence";case ContentSettingsTypes.SENSORS:return"siteSettingsSensorsMidSentence";case ContentSettingsTypes.SERIAL_PORTS:return"siteSettingsSerialPortsMidSentence";case ContentSettingsTypes.SOUND:return"siteSettingsSoundMidSentence";case ContentSettingsTypes.STORAGE_ACCESS:return"siteSettingsStorageAccessMidSentence";case ContentSettingsTypes.USB_DEVICES:return"siteSettingsUsbDevicesMidSentence";case ContentSettingsTypes.WEB_PRINTING:return"siteSettingsWebPrintingMidSentence";case ContentSettingsTypes.VR:return"siteSettingsVrMidSentence";case ContentSettingsTypes.WINDOW_MANAGEMENT:return"siteSettingsWindowManagementMidSentence";case ContentSettingsTypes.ZOOM_LEVELS:return"siteSettingsZoomLevelsMidSentence";case ContentSettingsTypes.ANTI_ABUSE:case ContentSettingsTypes.JAVASCRIPT_JIT:case ContentSettingsTypes.PDF_DOCUMENTS:case ContentSettingsTypes.PERFORMANCE:case ContentSettingsTypes.PRIVATE_NETWORK_DEVICES:case ContentSettingsTypes.SITE_DATA:return null;default:assertNotReached()}}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsRecentSitePermissionsElementBase=TooltipMixin(RouteObserverMixin(SiteSettingsMixin(WebUiListenerMixin(I18nMixin(PolymerElement)))));class SettingsRecentSitePermissionsElement extends SettingsRecentSitePermissionsElementBase{static get is(){return"settings-recent-site-permissions"}static get template(){return getTemplate$R()}static get properties(){return{noRecentPermissions:{type:Boolean,computed:"computeNoRecentPermissions_(recentSitePermissionsList_)",notify:true},shouldFocusAfterPopulation_:Boolean,recentSitePermissionsList_:{type:Array,value:()=>[]},focusConfig:{type:Object,observer:"focusConfigChanged_"}}}constructor(){super();this.lastSelected_=null}focusConfigChanged_(_newConfig,oldConfig){assert(!oldConfig);this.focusConfig.set(routes.SITE_SETTINGS_SITE_DETAILS.path+"_"+routes.SITE_SETTINGS.path,(()=>{this.shouldFocusAfterPopulation_=true}))}currentRouteChanged(currentRoute){if(currentRoute.path===routes.SITE_SETTINGS.path){this.populateList_()}}ready(){super.ready();this.addWebUiListener("onIncognitoStatusChanged",(hasIncognito=>this.onIncognitoStatusChanged_(hasIncognito)));this.browserProxy.updateIncognitoStatus()}getDisplayName_(recentSitePermissions){return recentSitePermissions.displayName}getSiteScheme_({origin:origin}){const scheme=this.toUrl(origin).protocol.slice(0,-1);return scheme==="https"?"":scheme}getPermissionsText_({recentPermissions:recentPermissions}){const groupSentences=[this.getPermissionGroupText_("Allowed",recentPermissions.filter((exception=>exception.setting===ContentSetting.ALLOW))),this.getPermissionGroupText_("AutoBlocked",recentPermissions.filter((exception=>exception.source===SiteSettingSource.EMBARGO))),this.getPermissionGroupText_("Blocked",recentPermissions.filter((exception=>exception.setting===ContentSetting.BLOCK&&exception.source!==SiteSettingSource.EMBARGO)))].filter((string=>string.length>0));let finalText="";for(const sentence of groupSentences){if(finalText.length>0){finalText+=`${this.i18n("sentenceEnd")} ${sentence}`}else{finalText=sentence}}if(groupSentences.length>1){finalText+=this.i18n("sentenceEnd")}return finalText}getPermissionGroupText_(setting,exceptions){if(exceptions.length===0){return""}const typeStrings=exceptions.map((exception=>{const localizationString=getLocalizationStringForContentType(exception.type);return localizationString?this.i18n(localizationString):""}));if(exceptions.length===1){return this.i18n(`recentPermission${setting}OneItem`,...typeStrings)}if(exceptions.length===2){return this.i18n(`recentPermission${setting}TwoItems`,...typeStrings)}return this.i18n(`recentPermission${setting}MoreThanTwoItems`,typeStrings[0],exceptions.length-1)}getClassForIndex_(index){return index===0?"first":""}computeNoRecentPermissions_(){return this.recentSitePermissionsList_.length===0}onIncognitoStatusChanged_(hasIncognito){if(hasIncognito===false&&this.recentSitePermissionsList_.some((p=>p.incognito))){this.populateList_()}}onRecentSitePermissionClick_(e){const origin=this.recentSitePermissionsList_[e.model.index].origin;Router.getInstance().navigateTo(routes.SITE_SETTINGS_SITE_DETAILS,new URLSearchParams({site:origin}));this.browserProxy.recordAction(AllSitesAction2.ENTER_SITE_DETAILS);this.lastSelected_={index:e.model.index,origin:e.model.item.origin,incognito:e.model.item.incognito}}onShowIncognitoTooltip_(e){e.stopPropagation();this.showTooltipAtTarget(this.$.tooltip,e.target)}focusLastSelected_(){if(this.noRecentPermissions){return}const currentIndex=this.recentSitePermissionsList_.findIndex((permissions=>permissions.origin===this.lastSelected_.origin&&permissions.incognito===this.lastSelected_.incognito));const fallbackIndex=Math.min(this.lastSelected_.index,this.recentSitePermissionsList_.length-1);const index=currentIndex>-1?currentIndex:fallbackIndex;if(this.recentSitePermissionsList_[index].incognito){const icon=this.shadowRoot.querySelector(`#incognitoInfoIcon_${index}`);assert(!!icon);const toFocus=icon.getFocusableElement();assert(!!toFocus);focusWithoutInk(toFocus)}else{const toFocus=this.shadowRoot.querySelector(`#siteEntryButton_${index}`);assert(!!toFocus);focusWithoutInk(toFocus)}}async populateList_(){this.recentSitePermissionsList_=await this.browserProxy.getRecentSitePermissions(3)}onDomChange_(){if(this.shouldFocusAfterPopulation_){this.focusLastSelected_();this.shouldFocusAfterPopulation_=false}}}customElements.define(SettingsRecentSitePermissionsElement.is,SettingsRecentSitePermissionsElement);const styleMod$1=document.createElement("dom-module");styleMod$1.appendChild(html`
  <template>
    <style>
paper-tooltip{--paper-tooltip-min-width:max-content}site-favicon{padding-inline-end:24px}.bulk-action-button{margin-inline-start:auto}.display-name{flex:1;max-width:100%}.header-group-wrapper{flex:1;margin-inline-start:15px}.header-with-icon{align-items:center;display:flex;padding-top:15px}.header-with-icon h2{padding-bottom:5px;padding-top:0}.header-with-icon iron-icon{border-radius:50%;height:var(--cr-icon-size);padding:6px;width:var(--cr-icon-size)}.site-list{margin-inline-start:48px}.site-list .list-item{--cr-icon-button-margin-end:initial}iron-icon[icon='cr:check']{background-color:var(--google-green-50);fill:var(--google-green-700)}@media (prefers-color-scheme:dark){iron-icon[icon='cr:check']{background-color:var(--google-green-300);fill:var(--grey-900-white-4-percent)}}.header-icon{background-color:var(--google-blue-50);fill:var(--google-blue-600)}@media (prefers-color-scheme:dark){.header-icon{background-color:var(--google-blue-300);fill:var(--grey-900-white-4-percent)}}@keyframes removed-animation{0%{max-height:calc(1.6 * 2em + 2 * var(--cr-section-vertical-padding));opacity:1}20%{max-height:calc(1.6 * 2em + 2 * var(--cr-section-vertical-padding));opacity:0}100%{max-height:0;opacity:0;visibility:hidden}}.removed{animation-duration:.3s;animation-fill-mode:forwards;animation-iteration-count:1;animation-name:removed-animation;min-height:0}
    </style>
  </template>
`.content);styleMod$1.register("site-review-shared");function getTemplate$Q(){return html`<!--_html_template_start_--><style include="cr-shared-style settings-shared site-review-shared">:host{display:block;padding:0 var(--cr-section-padding)}</style>
<template is="dom-if" if="[[!shouldShowCompletionInfo_]]">
  <div class="header-with-icon">
    <iron-icon role="img" icon="cr:info-outline" class="header-icon">
    </iron-icon>
    <cr-expand-button class="header-group-wrapper" no-hover expanded="{{unusedSitePermissionsReviewListExpanded_}}">
      <h2>[[headerString_]]</h2>
      <div class="secondary">[[subtitleString_]]</div>
    </cr-expand-button>
  </div>
  <iron-collapse class="site-list" opened="[[unusedSitePermissionsReviewListExpanded_]]">
    <template is="dom-repeat" items="[[sites_]]">
      <div class$="list-item site-entry [[getRowClass_(item.visible)]]">
        <site-favicon url="[[item.origin]]"></site-favicon>
        <div class="display-name cr-padded-text">
          <div class="site-representation">[[item.origin]]</div>
          <div class="secondary">[[getPermissionsText_(item.permissions)]]</div>
        </div>
        <cr-icon-button iron-icon="settings20:undo" on-focus="onShowTooltip_" actionable on-mouseenter="onShowTooltip_" aria-label="[[getAllowAgainAriaLabelForOrigin_(item.origin)]]" on-click="onAllowAgainClick_">
        </cr-icon-button>
      </div>
    </template>
    <div class="list-item first">
      <cr-button class="action-button bulk-action-button" on-click="onGotItClick_">
        $i18n{safetyCheckUnusedSitePermissionsGotItLabel}
      </cr-button>
    </div>
  </iron-collapse>
  <paper-tooltip fit-to-visible-bounds manual-mode position="top" offset="3">
    $i18n{safetyCheckUnusedSitePermissionsAllowAgainLabel}
  </paper-tooltip>
</template>
<template is="dom-if" if="[[shouldShowCompletionInfo_]]">
  <div class="header-with-icon">
    <iron-icon role="img" icon="cr:check"></iron-icon>
    <div class="header-group-wrapper">
      $i18n{safetyCheckUnusedSitePermissionsDoneLabel}
    </div>
  </div>
</template>
<cr-toast id="undoToast" duration="5000">
  <div>[[toastText_]]</div>
  <cr-button on-click="onUndoClick_">
    $i18n{safetyCheckUnusedSitePermissionsUndoLabel}
  </cr-button>
</cr-toast>
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var Action$1;(function(Action){Action["ALLOW_AGAIN"]="allow_again";Action["GOT_IT"]="got_it"})(Action$1||(Action$1={}));const SettingsUnusedSitePermissionsElementBase=TooltipMixin(I18nMixin(RouteObserverMixin(WebUiListenerMixin(SiteSettingsMixin(PolymerElement)))));class SettingsUnusedSitePermissionsElement extends SettingsUnusedSitePermissionsElementBase{constructor(){super(...arguments);this.browserProxy_=SafetyHubBrowserProxyImpl.getInstance();this.eventTracker_=new EventTracker;this.modelUpdateDelayMsForTesting_=null;this.metricsBrowserProxy_=MetricsBrowserProxyImpl.getInstance();this.shouldRefocusExpandButton_=false}static get is(){return"settings-unused-site-permissions"}static get template(){return getTemplate$Q()}static get properties(){return{headerString_:String,lastUnusedSitePermissionsAllowedAgain_:{type:Object,value:null},lastUnusedSitePermissionsListAcknowledged_:{type:Array,value:null},lastUserAction_:{type:Action$1,value:null},sites_:{type:Array,value:null,observer:"onSitesChanged_"},shouldShowCompletionInfo_:{type:Boolean,computed:"computeShouldShowCompletionInfo_(sites_.*)"},subtitleString_:String,toastText_:String,unusedSitePermissionsReviewListExpanded_:{type:Boolean,value:true,observer:"onListExpandedChanged_"}}}async connectedCallback(){this.addWebUiListener(SafetyHubEvent.UNUSED_PERMISSIONS_MAYBE_CHANGED,(sites=>this.onUnusedSitePermissionListChanged_(sites)));const sites=await this.browserProxy_.getRevokedUnusedSitePermissionsList();this.onUnusedSitePermissionListChanged_(sites);super.connectedCallback()}currentRouteChanged(currentRoute){if(currentRoute!==routes.SITE_SETTINGS){this.eventTracker_.remove(document,"keydown");return}assert(this.sites_);this.metricsBrowserProxy_.recordSafetyCheckUnusedSitePermissionsListCountHistogram(this.sites_.length);this.metricsBrowserProxy_.recordSafetyCheckUnusedSitePermissionsModuleInteractionsHistogram(SafetyCheckUnusedSitePermissionsModuleInteractions.OPEN_REVIEW_UI);this.eventTracker_.add(document,"keydown",(e=>this.onKeyDown_(e)))}computeShouldShowCompletionInfo_(){return this.sites_!==null&&this.sites_.length===0}getAllowAgainAriaLabelForOrigin_(origin){return this.i18n("safetyCheckUnusedSitePermissionsAllowAgainAriaLabel",origin)}getModelUpdateDelayMs_(){return this.modelUpdateDelayMsForTesting_===null?MODEL_UPDATE_DELAY_MS:this.modelUpdateDelayMsForTesting_}getPermissionsText_(permissions){assert(permissions.length>0,"There is no permission for the user to review.");const permissionsI18n=permissions.map((permission=>{const localizationString=getLocalizationStringForContentType(permission);return localizationString?this.i18n(localizationString):""}));if(permissionsI18n.length===1){return this.i18n("safetyCheckUnusedSitePermissionsRemovedOnePermissionLabel",...permissionsI18n)}if(permissionsI18n.length===2){return this.i18n("safetyCheckUnusedSitePermissionsRemovedTwoPermissionsLabel",...permissionsI18n)}if(permissionsI18n.length===3){return this.i18n("safetyCheckUnusedSitePermissionsRemovedThreePermissionsLabel",...permissionsI18n)}return this.i18n("safetyCheckUnusedSitePermissionsRemovedFourOrMorePermissionsLabel",permissionsI18n[0],permissionsI18n[1],permissionsI18n.length-2)}getRowClass_(visible){return visible?"":"removed"}hideItem_(origin){assert(this.sites_!==null);for(const[index,site]of this.sites_.entries()){if(!origin||site.origin===origin){this.set(["sites_",index,"visible"],false);if(origin){break}}}}onAllowAgainClick_(event){event.stopPropagation();const item=event.model.item;this.lastUserAction_=Action$1.ALLOW_AGAIN;this.lastUnusedSitePermissionsAllowedAgain_=item;this.showUndoToast_(this.i18n("safetyCheckUnusedSitePermissionsToastLabel",item.origin));this.hideItem_(item.origin);setTimeout(this.browserProxy_.allowPermissionsAgainForUnusedSite.bind(this.browserProxy_,item.origin),this.getModelUpdateDelayMs_());this.metricsBrowserProxy_.recordSafetyCheckUnusedSitePermissionsModuleInteractionsHistogram(SafetyCheckUnusedSitePermissionsModuleInteractions.ALLOW_AGAIN)}async onGotItClick_(e){e.stopPropagation();assert(this.sites_!==null);this.lastUserAction_=Action$1.GOT_IT;this.lastUnusedSitePermissionsListAcknowledged_=this.sites_;this.browserProxy_.acknowledgeRevokedUnusedSitePermissionsList();const toastText=await PluralStringProxyImpl.getInstance().getPluralString("safetyCheckUnusedSitePermissionsToastBulkLabel",this.sites_.length);this.showUndoToast_(toastText);this.metricsBrowserProxy_.recordSafetyCheckUnusedSitePermissionsModuleInteractionsHistogram(SafetyCheckUnusedSitePermissionsModuleInteractions.ACKNOWLEDGE_ALL)}onUnusedSitePermissionListChanged_(sites){this.sites_=sites.map((site=>({...site,visible:true})))}onShowTooltip_(e){e.stopPropagation();const tooltip=this.shadowRoot.querySelector("paper-tooltip");assert(tooltip);this.showTooltipAtTarget(tooltip,e.target)}async onSitesChanged_(){if(this.sites_===null){return}this.headerString_=await PluralStringProxyImpl.getInstance().getPluralString("safetyCheckUnusedSitePermissionsPrimaryLabel",this.sites_.length);this.subtitleString_=await PluralStringProxyImpl.getInstance().getPluralString("safetyCheckUnusedSitePermissionsSecondaryLabel",this.sites_.length);if(this.shouldRefocusExpandButton_){this.shouldRefocusExpandButton_=false;const expandButton=this.shadowRoot.querySelector("cr-expand-button");assert(expandButton);expandButton.focus()}}onListExpandedChanged_(isExpanded){if(!isExpanded){this.metricsBrowserProxy_.recordSafetyCheckUnusedSitePermissionsModuleInteractionsHistogram(SafetyCheckUnusedSitePermissionsModuleInteractions.MINIMIZE)}}onUndoClick_(e){e.stopPropagation();this.undoLastAction_()}undoLastAction_(){switch(this.lastUserAction_){case Action$1.ALLOW_AGAIN:assert(this.lastUnusedSitePermissionsAllowedAgain_!==null);this.browserProxy_.undoAllowPermissionsAgainForUnusedSite(this.lastUnusedSitePermissionsAllowedAgain_);this.lastUnusedSitePermissionsAllowedAgain_=null;this.metricsBrowserProxy_.recordSafetyCheckUnusedSitePermissionsModuleInteractionsHistogram(SafetyCheckUnusedSitePermissionsModuleInteractions.UNDO_ALLOW_AGAIN);break;case Action$1.GOT_IT:assert(this.lastUnusedSitePermissionsListAcknowledged_!==null);this.browserProxy_.undoAcknowledgeRevokedUnusedSitePermissionsList(this.lastUnusedSitePermissionsListAcknowledged_);this.lastUnusedSitePermissionsListAcknowledged_=null;this.metricsBrowserProxy_.recordSafetyCheckUnusedSitePermissionsModuleInteractionsHistogram(SafetyCheckUnusedSitePermissionsModuleInteractions.UNDO_ACKNOWLEDGE_ALL);break;default:assertNotReached()}this.lastUserAction_=null;this.shouldRefocusExpandButton_=true;this.$.undoToast.hide()}onKeyDown_(e){if(!this.$.undoToast.open){return}if(isUndoKeyboardEvent(e)){this.undoLastAction_()}}showUndoToast_(text){this.toastText_=text;if(this.$.undoToast.open){this.$.undoToast.hide()}this.$.undoToast.show()}setModelUpdateDelayMsForTesting(delayMs){this.modelUpdateDelayMsForTesting_=delayMs}}customElements.define(SettingsUnusedSitePermissionsElement.is,SettingsUnusedSitePermissionsElement);function getTemplate$P(){return html`<!--_html_template_start_-->    <style include="cr-shared-style settings-shared">.no-min-height{min-height:0}img{width:100%}#safetyHubModule{padding:0 var(--cr-section-padding)}</style>
    <picture>
      <source srcset="chrome://settings/images/permissions_banner_dark.svg" media="(prefers-color-scheme: dark)">
      <img id="banner" alt="" src="chrome://settings/images/permissions_banner.svg">
    </picture>
    <template is="dom-if" if="[[showUnusedSitePermissions_]]">
      <template is="dom-if" if="[[enableSafetyHub_]]">
        <div class="cr-row first">
          <h2>$i18n{safetyHub}</h2>
        </div>
        <settings-safety-hub-module id="safetyHubModule" header="[[unusedSitePermissionsHeader_]]" subheader="[[unusedSitePermissionsSubheader_]]" header-icon="cr:security" header-icon-color="blue">
          <cr-button id="safetyHubButton" slot="button-container" class="action-button" on-click="onSafetyHubButtonClick_">
            $i18n{safetyHubEntryPointButton}
          </cr-button>
        </settings-safety-hub-module>
      </template>
      
      <template is="dom-if" if="[[!enableSafetyHub_]]">
        <settings-unused-site-permissions>
        </settings-unused-site-permissions>
      </template>
    </template>
    <div class="cr-row first">
      <h2>$i18n{siteSettingsRecentPermissionsSectionLabel}</h2>
    </div>
    <settings-recent-site-permissions id="recentSitePermissions" no-recent-permissions="{{noRecentSitePermissions_}}" focus-config="[[focusConfig]]">
    </settings-recent-site-permissions>

    <cr-link-row data-route="SITE_SETTINGS_ALL" id="allSites" class$="[[getClassForSiteSettingsAllLink_(noRecentSitePermissions_)]]" label="$i18n{siteSettingsAllSitesDescription}" on-click="onSiteSettingsAllClick_" role-description="$i18n{subpageArrowRoleDescription}"></cr-link-row>
    <div class="cr-row first line-only">
      <h2>$i18n{siteSettingsPermissions}</h2>
    </div>

    <settings-site-settings-list id="basicPermissionsList" prefs="{{prefs}}" category-list="[[lists_.permissionsBasic]]" focus-config="[[focusConfig]]">
    </settings-site-settings-list>
    <cr-expand-button class="cr-row" expanded="{{permissionsExpanded_}}">
      <div>$i18n{siteSettingsPermissionsMore}</div>
    </cr-expand-button>
    <iron-collapse opened="[[permissionsExpanded_]]">
      <settings-site-settings-list id="advancedPermissionsList" category-list="[[lists_.permissionsAdvanced]]" focus-config="[[focusConfig]]">
      </settings-site-settings-list>
    </iron-collapse>

    <div class="cr-row first line-only">
      <h2>$i18n{siteSettingsContent}</h2>
    </div>
    <settings-site-settings-list id="basicContentList" prefs="{{prefs}}" category-list="[[lists_.contentBasic]]" focus-config="[[focusConfig]]">
    </settings-site-settings-list>
    <cr-expand-button id="expandContent" class="cr-row" expanded="{{contentExpanded_}}">
      <div>$i18n{siteSettingsContentMore}</div>
    </cr-expand-button>
    <iron-collapse opened="[[contentExpanded_]]">
      <settings-site-settings-list id="advancedContentList" prefs="{{prefs}}" category-list="[[lists_.contentAdvanced]]" focus-config="[[focusConfig]]">
      </settings-site-settings-list>
    </iron-collapse>
    <template is="dom-if" if="[[enableSafetyHub_]]">
      <settings-toggle-button id="unusedSitePermissionsRevocationToggle" pref="{{
              prefs.safety_hub.unused_site_permissions_revocation.enabled}}" label="$i18n{safetyCheckUnusedSitePermissionsSettingLabel}" sub-label="$i18n{safetyCheckUnusedSitePermissionsSettingSublabel}">
      </settings-toggle-button>
    </template>
<!--_html_template_end_-->`}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const Id=ContentSettingsTypes;let categoryItemMap=null;function getCategoryItemMap(){if(categoryItemMap!==null){return categoryItemMap}const categoryList=[{route:routes.SITE_SETTINGS_ADS,id:Id.ADS,label:"siteSettingsAds",icon:"settings:ads",enabledLabel:"siteSettingsAdsAllowed",disabledLabel:"siteSettingsAdsBlocked",shouldShow:()=>loadTimeData.getBoolean("enableSafeBrowsingSubresourceFilter")},{route:routes.SITE_SETTINGS_AUTO_PICTURE_IN_PICTURE,id:Id.AUTO_PICTURE_IN_PICTURE,label:"siteSettingsAutoPictureInPicture",icon:"settings:picture-in-picture",enabledLabel:"siteSettingsAutoPictureInPictureAllowed",disabledLabel:"siteSettingsAutoPictureInPictureBlocked",shouldShow:()=>loadTimeData.getBoolean("autoPictureInPictureEnabled")},{route:routes.SITE_SETTINGS_AUTO_VERIFY,id:Id.ANTI_ABUSE,label:"siteSettingsAntiAbuse",icon:"settings20:account-attention",enabledLabel:"siteSettingsAntiAbuseEnabledSubLabel",disabledLabel:"siteSettingsAntiAbuseDisabledSubLabel",shouldShow:()=>loadTimeData.getBoolean("privateStateTokensEnabled")},{route:routes.SITE_SETTINGS_AR,id:Id.AR,label:"siteSettingsAr",icon:"settings:vr-headset",enabledLabel:"siteSettingsArAsk",disabledLabel:"siteSettingsArBlock"},{route:routes.SITE_SETTINGS_AUTOMATIC_DOWNLOADS,id:Id.AUTOMATIC_DOWNLOADS,label:"siteSettingsAutomaticDownloads",icon:"cr:file-download",enabledLabel:"siteSettingsAutomaticDownloadsAllowed",disabledLabel:"siteSettingsAutomaticDownloadsBlocked"},{route:routes.SITE_SETTINGS_BACKGROUND_SYNC,id:Id.BACKGROUND_SYNC,label:"siteSettingsBackgroundSync",icon:"cr:sync",enabledLabel:"siteSettingsBackgroundSyncAllowed",disabledLabel:"siteSettingsBackgroundSyncBlocked"},{route:routes.SITE_SETTINGS_BLUETOOTH_DEVICES,id:Id.BLUETOOTH_DEVICES,label:"siteSettingsBluetoothDevices",icon:"settings:bluetooth",enabledLabel:"siteSettingsBluetoothDevicesAllowed",disabledLabel:"siteSettingsBluetoothDevicesBlocked",shouldShow:()=>loadTimeData.getBoolean("enableWebBluetoothNewPermissionsBackend")},{route:routes.SITE_SETTINGS_BLUETOOTH_SCANNING,id:Id.BLUETOOTH_SCANNING,label:"siteSettingsBluetoothScanning",icon:"settings:bluetooth-scanning",enabledLabel:"siteSettingsBluetoothScanningAsk",disabledLabel:"siteSettingsBluetoothScanningBlock",shouldShow:()=>loadTimeData.getBoolean("enableExperimentalWebPlatformFeatures")},{route:routes.SITE_SETTINGS_CAMERA,id:Id.CAMERA,label:"siteSettingsCamera",icon:"cr:videocam",enabledLabel:"siteSettingsCameraAllowed",disabledLabel:"siteSettingsCameraBlocked"},{route:routes.SITE_SETTINGS_CLIPBOARD,id:Id.CLIPBOARD,label:"siteSettingsClipboard",icon:"settings:clipboard",enabledLabel:"siteSettingsClipboardAllowed",disabledLabel:"siteSettingsClipboardBlocked"},{route:routes.SITE_SETTINGS_LOCATION,id:Id.GEOLOCATION,label:"siteSettingsLocation",icon:"settings:location-on",enabledLabel:"siteSettingsLocationAllowed",disabledLabel:"siteSettingsLocationBlocked"},{route:routes.SITE_SETTINGS_WEB_PRINTING,id:Id.WEB_PRINTING,label:"siteSettingsWebPrinting",icon:"settings:printer",enabledLabel:"siteSettingsWebPrintingAsk",disabledLabel:"siteSettingsWebPrintingBlock",shouldShow:()=>loadTimeData.getBoolean("enableWebPrintingContentSetting")},{route:routes.SITE_SETTINGS_HID_DEVICES,id:Id.HID_DEVICES,label:"siteSettingsHidDevices",icon:"settings:hid-device",enabledLabel:"siteSettingsHidDevicesAsk",disabledLabel:"siteSettingsHidDevicesBlock"},{route:routes.SITE_SETTINGS_IDLE_DETECTION,id:Id.IDLE_DETECTION,label:"siteSettingsIdleDetection",icon:"settings:devices",enabledLabel:"siteSettingsDeviceUseAllowed",disabledLabel:"siteSettingsDeviceUseBlocked"},{route:routes.SITE_SETTINGS_IMAGES,id:Id.IMAGES,label:"siteSettingsImages",icon:"settings:photo",enabledLabel:"siteSettingsImagesAllowed",disabledLabel:"siteSettingsImagesBlocked"},{route:routes.SITE_SETTINGS_JAVASCRIPT,id:Id.JAVASCRIPT,label:"siteSettingsJavascript",icon:"settings:code",enabledLabel:"siteSettingsJavascriptAllowed",disabledLabel:"siteSettingsJavascriptBlocked"},{route:routes.SITE_SETTINGS_JAVASCRIPT_JIT,id:Id.JAVASCRIPT_JIT,label:"siteSettingsJavascriptJit",icon:"settings:lock-outline",enabledLabel:"siteSettingsJavascriptJitAllowed",disabledLabel:"siteSettingsJavascriptJitBlocked"},{route:routes.SITE_SETTINGS_MICROPHONE,id:Id.MIC,label:"siteSettingsMic",icon:"cr:mic",enabledLabel:"siteSettingsMicAllowed",disabledLabel:"siteSettingsMicBlocked"},{route:routes.SITE_SETTINGS_MIDI_DEVICES,id:Id.MIDI_DEVICES,label:"siteSettingsMidiDevices",icon:"settings:midi",enabledLabel:"siteSettingsMidiAllowed",disabledLabel:"siteSettingsMidiBlocked"},{route:routes.SITE_SETTINGS_MIXEDSCRIPT,id:Id.MIXEDSCRIPT,label:"siteSettingsInsecureContent",icon:"settings:insecure-content",disabledLabel:"siteSettingsInsecureContentBlock"},{route:routes.SITE_SETTINGS_FEDERATED_IDENTITY_API,id:Id.FEDERATED_IDENTITY_API,label:"siteSettingsFederatedIdentityApi",icon:"settings:federated-identity-api",enabledLabel:"siteSettingsFederatedIdentityApiAllowed",disabledLabel:"siteSettingsFederatedIdentityApiBlocked",shouldShow:()=>loadTimeData.getBoolean("enableFederatedIdentityApiContentSetting")},{route:routes.SITE_SETTINGS_FILE_SYSTEM_WRITE,id:Id.FILE_SYSTEM_WRITE,label:"siteSettingsFileSystemWrite",icon:"settings:save-original",enabledLabel:"siteSettingsFileSystemWriteAllowed",disabledLabel:"siteSettingsFileSystemWriteBlocked"},{route:routes.SITE_SETTINGS_LOCAL_FONTS,id:Id.LOCAL_FONTS,label:"fonts",icon:"settings:local-fonts",enabledLabel:"siteSettingsFontsAllowed",disabledLabel:"siteSettingsFontsBlocked"},{route:routes.SITE_SETTINGS_NOTIFICATIONS,id:Id.NOTIFICATIONS,label:"siteSettingsNotifications",icon:"settings:notifications"},{route:routes.SITE_SETTINGS_PAYMENT_HANDLER,id:Id.PAYMENT_HANDLER,label:"siteSettingsPaymentHandler",icon:"settings:payment-handler",enabledLabel:"siteSettingsPaymentHandlersAllowed",disabledLabel:"siteSettingsPaymentHandlersBlocked",shouldShow:()=>loadTimeData.getBoolean("enablePaymentHandlerContentSetting")},{route:routes.SITE_SETTINGS_PDF_DOCUMENTS,id:Id.PDF_DOCUMENTS,label:"siteSettingsPdfDocuments",icon:"settings:pdf",enabledLabel:"siteSettingsPdfsAllowed",disabledLabel:"siteSettingsPdfsBlocked"},{route:routes.SITE_SETTINGS_POPUPS,id:Id.POPUPS,label:"siteSettingsPopups",icon:"cr:open-in-new",enabledLabel:"siteSettingsPopupsAllowed",disabledLabel:"siteSettingsPopupsBlocked"},{route:routes.SITE_SETTINGS_PROTECTED_CONTENT,id:Id.PROTECTED_CONTENT,label:"siteSettingsProtectedContent",icon:"settings:protected-content",enabledLabel:"siteSettingsProtectedContentAllowed",disabledLabel:"siteSettingsProtectedContentBlocked"},{route:routes.SITE_SETTINGS_HANDLERS,id:Id.PROTOCOL_HANDLERS,label:"siteSettingsHandlers",icon:"settings:protocol-handler",enabledLabel:"siteSettingsProtocolHandlersAllowed",disabledLabel:"siteSettingsProtocolHandlersBlocked",shouldShow:()=>!loadTimeData.getBoolean("isGuest")},{route:routes.SITE_SETTINGS_SENSORS,id:Id.SENSORS,label:"siteSettingsSensors",icon:"settings:sensors",enabledLabel:"siteSettingsMotionSensorsAllowed",disabledLabel:"siteSettingsMotionSensorsBlocked"},{route:routes.SITE_SETTINGS_SERIAL_PORTS,id:Id.SERIAL_PORTS,label:"siteSettingsSerialPorts",icon:"settings:serial-port",enabledLabel:"siteSettingsSerialPortsAllowed",disabledLabel:"siteSettingsSerialPortsBlocked"},{route:routes.SITE_SETTINGS_SITE_DATA,id:Id.SITE_DATA,label:"siteDataPageTitle",icon:"settings:database"},{route:routes.SITE_SETTINGS_SOUND,id:Id.SOUND,label:"siteSettingsSound",icon:"settings:volume-up",enabledLabel:"siteSettingsSoundAllowed",disabledLabel:"siteSettingsSoundBlocked"},{route:routes.SITE_SETTINGS_STORAGE_ACCESS,id:Id.STORAGE_ACCESS,label:"siteSettingsStorageAccess",icon:"settings:storage-access",enabledLabel:"storageAccessAllowed",disabledLabel:"storageAccessBlocked",shouldShow:()=>loadTimeData.getBoolean("enablePermissionStorageAccessApi")},{route:routes.SITE_SETTINGS_USB_DEVICES,id:Id.USB_DEVICES,label:"siteSettingsUsbDevices",icon:"settings:usb",enabledLabel:"siteSettingsUsbAllowed",disabledLabel:"siteSettingsUsbBlocked"},{route:routes.SITE_SETTINGS_VR,id:Id.VR,label:"siteSettingsVr",icon:"settings:vr-headset",enabledLabel:"siteSettingsVrAllowed",disabledLabel:"siteSettingsVrBlocked"},{route:routes.SITE_SETTINGS_WINDOW_MANAGEMENT,id:Id.WINDOW_MANAGEMENT,label:"siteSettingsWindowManagement",icon:"settings:window-management",enabledLabel:"siteSettingsWindowManagementAsk",disabledLabel:"siteSettingsWindowManagementBlocked"},{route:routes.SITE_SETTINGS_ZOOM_LEVELS,id:Id.ZOOM_LEVELS,label:"siteSettingsZoomLevels",icon:"settings:zoom-in"},{route:routes.PERFORMANCE,id:Id.PERFORMANCE,label:"siteSettingsPerformance",icon:"settings:performance",enabledLabel:"siteSettingsPerformanceSublabel",disabledLabel:"siteSettingsPerformanceSublabel"}];if(loadTimeData.getBoolean("is3pcdCookieSettingsRedesignEnabled")){categoryList.push({route:routes.TRACKING_PROTECTION,id:Id.COOKIES,label:"trackingProtectionLinkRowLabel",icon:"settings:visibility-off",enabledLabel:"siteSettingsCookiesAllowed",disabledLabel:"siteSettingsBlocked"})}else{categoryList.push({route:routes.COOKIES,id:Id.COOKIES,label:"thirdPartyCookiesLinkRowLabel",icon:"settings:cookie",enabledLabel:"trackingProtectionLinkRowSubLabel",disabledLabel:"trackingProtectionLinkRowSubLabel"})}categoryItemMap=new Map(categoryList.map((item=>[item.id,item])));return categoryItemMap}function buildItemListFromIds(orderedIdList){const map=getCategoryItemMap();const orderedList=[];for(const id of orderedIdList){const item=map.get(id);if(item.shouldShow===undefined||item.shouldShow()){orderedList.push(item)}}return orderedList}const SettingsSiteSettingsPageElementBase=RouteObserverMixin(WebUiListenerMixin(PolymerElement));class SettingsSiteSettingsPageElement extends SettingsSiteSettingsPageElementBase{constructor(){super(...arguments);this.safetyHubBrowserProxy_=SafetyHubBrowserProxyImpl.getInstance();this.metricsBrowserProxy_=MetricsBrowserProxyImpl.getInstance()}static get is(){return"settings-site-settings-page"}static get template(){return getTemplate$P()}static get properties(){return{prefs:{type:Object,notify:true},lists_:{type:Object,value:function(){const enablePermissionStorageAccessApi=loadTimeData.getBoolean("enablePermissionStorageAccessApi");const basic=enablePermissionStorageAccessApi?Id.STORAGE_ACCESS:Id.BACKGROUND_SYNC;const advanced=enablePermissionStorageAccessApi?[Id.BACKGROUND_SYNC]:[];return{permissionsBasic:buildItemListFromIds([Id.GEOLOCATION,Id.CAMERA,Id.MIC,Id.NOTIFICATIONS,basic]),permissionsAdvanced:buildItemListFromIds([...advanced,...[Id.SENSORS,Id.AUTOMATIC_DOWNLOADS,Id.PROTOCOL_HANDLERS,Id.MIDI_DEVICES,Id.USB_DEVICES,Id.SERIAL_PORTS,Id.BLUETOOTH_DEVICES,Id.FILE_SYSTEM_WRITE,Id.HID_DEVICES,Id.CLIPBOARD,Id.PAYMENT_HANDLER,Id.BLUETOOTH_SCANNING,Id.AR,Id.VR,Id.IDLE_DETECTION,Id.WEB_PRINTING,Id.WINDOW_MANAGEMENT,Id.LOCAL_FONTS,Id.AUTO_PICTURE_IN_PICTURE]]),contentBasic:buildItemListFromIds([Id.COOKIES,Id.JAVASCRIPT,Id.IMAGES,Id.POPUPS]),contentAdvanced:buildItemListFromIds([Id.SOUND,Id.ADS,Id.ZOOM_LEVELS,Id.PDF_DOCUMENTS,Id.PROTECTED_CONTENT,Id.MIXEDSCRIPT,Id.FEDERATED_IDENTITY_API,Id.ANTI_ABUSE,Id.SITE_DATA,Id.PERFORMANCE,Id.JAVASCRIPT_JIT])}}},focusConfig:{type:Object,observer:"focusConfigChanged_"},permissionsExpanded_:Boolean,contentExpanded_:Boolean,noRecentSitePermissions_:Boolean,showUnusedSitePermissions_:{type:Boolean,value:false},unusedSitePermissionsEnabled_:{type:Boolean,value(){return loadTimeData.getBoolean("safetyCheckUnusedSitePermissionsEnabled")}},enableSafetyHub_:{type:Boolean,value(){return loadTimeData.getBoolean("enableSafetyHub")}},unusedSitePermissionsHeader_:String,unusedSitePermissionsSubeader_:String}}connectedCallback(){super.connectedCallback();this.addWebUiListener(SafetyHubEvent.UNUSED_PERMISSIONS_MAYBE_CHANGED,(sites=>this.onUnusedSitePermissionListChanged_(sites)));this.safetyHubBrowserProxy_.getRevokedUnusedSitePermissionsList().then((sites=>this.onUnusedSitePermissionListChanged_(sites)))}currentRouteChanged(){if(Router.getInstance().getCurrentRoute()!==routes.SITE_SETTINGS){return}if(this.showUnusedSitePermissions_){this.metricsBrowserProxy_.recordSafetyHubEntryPointShown(SafetyHubEntryPoint.SITE_SETTINGS)}}focusConfigChanged_(_newConfig,oldConfig){assert(!oldConfig);this.focusConfig.set(routes.SITE_SETTINGS_ALL.path,(()=>{const allSites=this.shadowRoot.querySelector("#allSites");assert(!!allSites);focusWithoutInk(allSites)}))}onSiteSettingsAllClick_(){Router.getInstance().navigateTo(routes.SITE_SETTINGS_ALL)}async onUnusedSitePermissionListChanged_(permissions){if(this.showUnusedSitePermissions_){return}this.showUnusedSitePermissions_=this.unusedSitePermissionsEnabled_&&permissions.length>0&&!loadTimeData.getBoolean("isGuest");this.unusedSitePermissionsHeader_=await PluralStringProxyImpl.getInstance().getPluralString("safetyCheckUnusedSitePermissionsPrimaryLabel",permissions.length);this.unusedSitePermissionsSubheader_=await PluralStringProxyImpl.getInstance().getPluralString("safetyCheckUnusedSitePermissionsSecondaryLabel",permissions.length)}getClassForSiteSettingsAllLink_(){return this.noRecentSitePermissions_?"":"hr"}onSafetyHubButtonClick_(){this.metricsBrowserProxy_.recordSafetyHubEntryPointClicked(SafetyHubEntryPoint.SITE_SETTINGS);Router.getInstance().navigateTo(routes.SAFETY_HUB)}}customElements.define(SettingsSiteSettingsPageElement.is,SettingsSiteSettingsPageElement);function getTemplate$O(){return html`<!--_html_template_start_-->    <style include="settings-shared">#incognito{padding-bottom:10px}</style>
    <cr-dialog id="dialog" close-text="$i18n{close}">
      <div slot="title">$i18n{addSiteTitle}</div>
      <div slot="body">
        <cr-input id="site" label="$i18n{addSite}" placeholder="$i18n{addSiteExceptionPlaceholder}" value="{{site_}}" on-input="validate_" error-message="{{errorMessage_}}" spellcheck="false" autofocus></cr-input>
        <cr-checkbox id="incognito" hidden$="[[!showIncognitoSessionOnly_(hasIncognito,
                contentSetting)]]">
          $i18n{incognitoSiteOnly}
        </cr-checkbox>
      </div>
      <div slot="button-container">
        <cr-button class="cancel-button" on-click="onCancelClick_">
          $i18n{cancel}
        </cr-button>
        <cr-button class="action-button" id="add" on-click="onSubmit_" disabled="disabled">
          $i18n{add}
        </cr-button>
      </div>
    </cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const AddSiteDialogElementBase=SiteSettingsMixin(PolymerElement);class AddSiteDialogElement extends AddSiteDialogElementBase{static get is(){return"add-site-dialog"}static get template(){return getTemplate$O()}static get properties(){return{contentSetting:String,hasIncognito:{type:Boolean,observer:"hasIncognitoChanged_"},cookiesExceptionType:String,site_:String,errorMessage_:String}}connectedCallback(){super.connectedCallback();assert(this.category);assert(this.contentSetting);assert(typeof this.hasIncognito!=="undefined");this.$.dialog.showModal()}validate_(){if(this.$.site.value.trim()===""){this.$.site.invalid=false;this.$.add.disabled=true;return}this.browserProxy.isPatternValidForType(this.site_,this.category).then((({isValid:isValid,reason:reason})=>{this.$.site.invalid=!isValid;this.$.add.disabled=!isValid;this.errorMessage_=reason||""}))}onCancelClick_(){this.$.dialog.cancel()}onSubmit_(){assert(!this.$.add.disabled);let primaryPattern=this.site_;let secondaryPattern=SITE_EXCEPTION_WILDCARD;if(this.cookiesExceptionType===CookiesExceptionType.THIRD_PARTY){primaryPattern=SITE_EXCEPTION_WILDCARD;secondaryPattern=this.site_}this.browserProxy.setCategoryPermissionForPattern(primaryPattern,secondaryPattern,this.category,this.contentSetting,this.$.incognito.checked);this.$.dialog.close()}showIncognitoSessionOnly_(){return this.hasIncognito&&!loadTimeData.getBoolean("isGuest")&&this.contentSetting!==ContentSetting.SESSION_ONLY}hasIncognitoChanged_(){if(!this.hasIncognito){this.$.incognito.checked=false}}}customElements.define(AddSiteDialogElement.is,AddSiteDialogElement);function getTemplate$N(){return html`<!--_html_template_start_-->    <style include="settings-shared"></style>
    <cr-dialog id="dialog">
      <div slot="title">$i18n{editSiteTitle}</div>
      <div slot="body">
        <cr-input label="$i18n{addSite}" value="{{origin_}}" placeholder="$i18n{addSiteExceptionPlaceholder}" on-input="validate_" error-message="{{errorMessage_}}" invalid="[[invalid_]]" autofocus spellcheck="false">
        </cr-input>
      </div>
      <div slot="button-container">
        <cr-button class="cancel-button" on-click="onCancelClick_" id="cancel">$i18n{cancel}</cr-button>
        <cr-button id="actionButton" class="action-button" on-click="onActionButtonClick_" disabled="[[invalid_]]">
          $i18n{save}
        </cr-button>
      </div>
    </cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SettingsEditExceptionDialogElement extends PolymerElement{constructor(){super(...arguments);this.browserProxy_=SiteSettingsPrefsBrowserProxyImpl.getInstance()}static get is(){return"settings-edit-exception-dialog"}static get template(){return getTemplate$N()}static get properties(){return{model:{type:Object,observer:"modelChanged_"},origin_:String,errorMessage_:String,invalid_:{type:Boolean,value:false}}}connectedCallback(){super.connectedCallback();this.origin_=this.model.origin;this.$.dialog.showModal()}onCancelClick_(){this.$.dialog.close()}onActionButtonClick_(){if(this.model.origin!==this.origin_){this.browserProxy_.resetCategoryPermissionForPattern(this.model.origin,this.model.embeddingOrigin,this.model.category,this.model.incognito);this.browserProxy_.setCategoryPermissionForPattern(this.origin_,SITE_EXCEPTION_WILDCARD,this.model.category,this.model.setting,this.model.incognito)}this.$.dialog.close()}validate_(){if(this.shadowRoot.querySelector("cr-input").value.trim()===""){this.invalid_=true;return}this.browserProxy_.isPatternValidForType(this.origin_,this.model.category).then((({isValid:isValid,reason:reason})=>{this.invalid_=!isValid;this.errorMessage_=reason||""}))}modelChanged_(){if(!this.model){this.$.dialog.cancel()}}}customElements.define(SettingsEditExceptionDialogElement.is,SettingsEditExceptionDialogElement);function getTemplate$M(){return html`<!--_html_template_start_-->    <style include="settings-shared">:host{padding-inline-end:4px}.settings-row{flex:1}cr-policy-pref-indicator::part(tooltip){clip:rect(0 0 0 0);height:1px;overflow:hidden;width:1px}</style>
    <div class="list-item" focus-row-container>
      <div class="settings-row" actionable$="[[allowNavigateToSiteDetail_]]" on-click="onOriginClick_">
        <site-favicon url="[[computeFaviconOrigin_(model)]]"></site-favicon>
        <div class="middle no-min-width">
          <div class="text-elide">
            <span class="url-directionality">
              [[computeDisplayName_(model)]]</span>
          </div>

          
          <div class="secondary" id="siteDescription">[[computeSiteDescription_(model)]]</div>
        </div>
        <template is="dom-if" if="[[allowNavigateToSiteDetail_]]">
          <cr-icon-button class="subpage-arrow" aria-label$="[[computeDisplayName_(model)]]" aria-describedby="siteDescription" aria-roledescription="$i18n{subpageArrowRoleDescription}" focus-type="site-details" focus-row-control></cr-icon-button>
          <div class="separator"></div>
        </template>
      </div>
      <template is="dom-if" if="[[showPolicyPrefIndicator_]]">
        <cr-policy-pref-indicator pref="[[model]]" on-mouseenter="onShowTooltip_" on-focus="onShowTooltip_" focus-row-control focus-type="policy">
        </cr-policy-pref-indicator>
      </template>
      <template is="dom-if" if="[[model.incognito]]">
        <cr-tooltip-icon id="incognitoTooltip" icon-aria-label="$i18n{incognitoSiteExceptionDesc}" icon-class="settings20:incognito" focus-row-control focus-type="incognito" on-mouseenter="onShowIncognitoTooltip_" on-focus="onShowIncognitoTooltip_"></cr-tooltip-icon>
      </template>
      <cr-icon-button id="resetSite" class="icon-delete-gray" hidden="[[!shouldShowResetButton_(model, readOnlyList)]]" on-click="onResetButtonClick_" aria-label="$i18n{siteSettingsActionReset}
              [[computeDisplayName_(model)]]" focus-row-control focus-type="reset"></cr-icon-button>
      <cr-icon-button id="actionMenuButton" class="icon-more-vert" hidden="[[!shouldShowActionMenu_(model, readOnlyList)]]" on-click="onShowActionMenuClick_" title="$i18n{moreActions}" focus-row-control focus-type="menu"></cr-icon-button>
    </div>
<!--_html_template_end_-->`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SiteListEntryElementBase=FocusRowMixin(BaseMixin(SiteSettingsMixin(PolymerElement)));class SiteListEntryElement extends SiteListEntryElementBase{static get is(){return"site-list-entry"}static get template(){return getTemplate$M()}static get properties(){return{readOnlyList:{type:Boolean,value:false},model:{type:Object,observer:"onModelChanged_"},chooserType:{type:String,value:ChooserType.NONE},chooserObject:{type:Object,value:null},showPolicyPrefIndicator_:{type:Boolean,computed:"computeShowPolicyPrefIndicator_(model)"},allowNavigateToSiteDetail_:{type:Boolean,value:false},cookiesExceptionType:String}}onShowTooltip_(){const indicator=this.shadowRoot.querySelector("cr-policy-pref-indicator");assert(!!indicator);const text=indicator.indicatorTooltip;this.fire("show-tooltip",{target:indicator,text:text})}onShowIncognitoTooltip_(){const tooltip=this.shadowRoot.querySelector("#incognitoTooltip");const text=loadTimeData.getString("incognitoSiteExceptionDesc");this.fire("show-tooltip",{target:tooltip,text:text})}isIsolatedWebApp_(){return this.model.origin.startsWith("isolated-app://")}isUserEditable_(){return!this.readOnlyList&&!this.model.embeddingOrigin&&!this.isIsolatedWebApp_()}shouldShowResetButton_(){if(this.model===undefined){return false}return this.model.enforcement!==chrome.settingsPrivate.Enforcement.ENFORCED&&!this.isUserEditable_()}shouldShowActionMenu_(){if(this.model===undefined){return false}return this.model.enforcement!==chrome.settingsPrivate.Enforcement.ENFORCED&&this.isUserEditable_()}onOriginClick_(){if(!this.allowNavigateToSiteDetail_){return}Router.getInstance().navigateTo(routes.SITE_SETTINGS_SITE_DETAILS,new URLSearchParams("site="+this.model.origin))}computeDisplayName_(){if(this.model.embeddingOrigin&&this.model.category===ContentSettingsTypes.COOKIES&&this.model.origin.trim()===SITE_EXCEPTION_WILDCARD){return this.model.embeddingOrigin}return this.model.displayName}computeFaviconOrigin_(){if(this.model.origin.trim()!==SITE_EXCEPTION_WILDCARD){return this.model.origin.trim()}if(this.model.embeddingOrigin.trim()!==SITE_EXCEPTION_WILDCARD){return this.model.embeddingOrigin.trim()}assertNotReached()}computeSiteDescription_(){let description="";if(this.model.description){description=this.model.description}else if(this.model.isEmbargoed){assert(!this.model.embeddingOrigin,"Embedding origin should be empty for embargoed origin.");description=loadTimeData.getString("siteSettingsSourceEmbargo")}else if(this.model.embeddingOrigin){if(this.model.category===ContentSettingsTypes.COOKIES&&this.model.origin.trim()===SITE_EXCEPTION_WILDCARD){if(this.cookiesExceptionType===CookiesExceptionType.COMBINED){description=loadTimeData.getString("siteSettingsCookiesThirdPartyExceptionLabel")}}else{description=loadTimeData.getStringF("embeddedOnHost",this.sanitizePort(this.model.embeddingOrigin))}}else if(this.model.category===ContentSettingsTypes.GEOLOCATION){description=loadTimeData.getString("embeddedOnAnyHost")}try{const url=new URL(this.model.origin);if(url.protocol==="chrome-extension:"){description=loadTimeData.getStringF("siteSettingsExtensionIdDescription",url.hostname)}}finally{return description}}computeShowPolicyPrefIndicator_(){return this.model.enforcement===chrome.settingsPrivate.Enforcement.ENFORCED&&!!this.model.controlledBy}onResetButtonClick_(){if(this.chooserType!==ChooserType.NONE&&this.chooserObject!==null){this.browserProxy.resetChooserExceptionForSite(this.chooserType,this.model.origin,this.chooserObject);return}this.browserProxy.resetCategoryPermissionForPattern(this.model.origin,this.model.embeddingOrigin,this.model.category,this.model.incognito)}onShowActionMenuClick_(){if(this.chooserType!==ChooserType.NONE){return}this.fire("show-action-menu",{anchor:this.$.actionMenuButton,model:this.model})}onModelChanged_(){if(!this.model){this.allowNavigateToSiteDetail_=false;return}this.browserProxy.isOriginValid(this.model.origin).then((valid=>{this.allowNavigateToSiteDetail_=valid}))}}customElements.define(SiteListEntryElement.is,SiteListEntryElement);function getTemplate$L(){return html`<!--_html_template_start_-->    <style include="cr-shared-style settings-shared iron-flex"></style>
    <div id="category">
      <div class="cr-row first">
        <h2 class="flex secondary">
          [[categoryHeader]]
        </h2>
        <cr-button id="addSite" class="header-aligned-button" hidden$="[[!showAddSiteButton_]]" on-click="onAddSiteClick_">
          $i18n{add}
        </cr-button>
      </div>

      <cr-action-menu role-description="$i18n{menu}">
        <button class="dropdown-item" id="allow" on-click="onAllowClick_" hidden$="[[!showAllowAction_]]">
          $i18n{siteSettingsActionAllow}
        </button>
        <button class="dropdown-item" id="block" on-click="onBlockClick_" hidden$="[[!showBlockAction_]]">
          $i18n{siteSettingsActionBlock}
        </button>
        <button class="dropdown-item" id="sessionOnly" on-click="onSessionOnlyClick_" hidden$="[[!showSessionOnlyActionForSite_(actionMenuSite_)]]">
          $i18n{siteSettingsActionSessionOnly}
        </button>
        <button class="dropdown-item" id="edit" on-click="onEditClick_">
          $i18n{edit}
        </button>
        <button class="dropdown-item" id="reset" on-click="onResetClick_">
          $i18n{siteSettingsActionReset}
        </button>
      </cr-action-menu>

      <div class="list-frame" hidden$="[[hasSites_(sites.*)]]">
        <div class="list-item secondary">$i18n{noSitesAdded}</div>
      </div>
      <div class="list-frame" hidden$="[[!showNoSearchResults_(searchFilter, sites.*)]]">
        <div class="list-item secondary">$i18n{searchNoResults}</div>
      </div>
      <div class="list-frame menu-content vertical-list" id="listContainer" hidden$="[[!hasSites_(sites.*)]]">
        <iron-list items="[[getFilteredSites_(searchFilter, sites.*)]]" preserve-focus risk-selection>
          <template>
            <site-list-entry model="[[item]]" read-only-list="[[readOnlyList]]" on-show-action-menu="onShowActionMenu_" tabindex$="[[tabIndex]]" first$="[[!index]]" iron-list-tab-index="[[tabIndex]]" last-focused="{{lastFocused_}}" list-blurred="{{listBlurred_}}" on-show-tooltip="onShowTooltip_" focus-row-index="[[index]]" cookies-exception-type="[[cookiesExceptionType]]">
            </site-list-entry>
          </template>
        </iron-list>
      </div>
    </div>
    <paper-tooltip id="tooltip" hidden="[[!tooltipText_]]" fit-to-visible-bounds manual-mode position="top">
      [[tooltipText_]]
    </paper-tooltip>
    <template is="dom-if" if="[[showEditExceptionDialog_]]" restamp>
      <settings-edit-exception-dialog model="[[actionMenuSite_]]" on-close="onEditExceptionDialogClosed_">
      </settings-edit-exception-dialog>
    </template>
    <template is="dom-if" if="[[showAddSiteDialog_]]" restamp>
      <add-site-dialog has-incognito="[[hasIncognito_]]" category="[[category]]" content-setting="[[categorySubtype]]" on-close="onAddSiteDialogClosed_" cookies-exception-type="[[cookiesExceptionType]]">
      </add-site-dialog>
    </template>
<!--_html_template_end_-->`}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SiteListElementBase=TooltipMixin(ListPropertyUpdateMixin(SiteSettingsMixin(WebUiListenerMixin(PolymerElement))));class SiteListElement extends SiteListElementBase{static get is(){return"site-list"}static get template(){return getTemplate$L()}static get properties(){return{readOnlyList:{type:Boolean,value:false},categoryHeader:String,actionMenuSite_:Object,showEditExceptionDialog_:Boolean,sites:{type:Array,value(){return[]}},categorySubtype:{type:String,value:INVALID_CATEGORY_SUBTYPE},cookiesExceptionType:String,hasIncognito_:Boolean,showAddSiteButton_:{type:Boolean,computed:"computeShowAddSiteButton_(readOnlyList, category, "+"categorySubtype)"},showAddSiteDialog_:Boolean,showAllowAction_:Boolean,showBlockAction_:Boolean,showSessionOnlyAction_:Boolean,actions_:{readOnly:true,type:Object,values:{ALLOW:"Allow",BLOCK:"Block",RESET:"Reset",SESSION_ONLY:"SessionOnly"}},lastFocused_:Object,listBlurred_:Boolean,tooltipText_:String,searchFilter:String}}static get observers(){return["configureWidget_(category, categorySubtype)"]}constructor(){super();this.browserProxy_=SiteSettingsPrefsBrowserProxyImpl.getInstance();this.activeDialogAnchor_=null}ready(){super.ready();this.addWebUiListener("contentSettingSitePermissionChanged",(category=>this.siteWithinCategoryChanged_(category)));this.addWebUiListener("contentSettingCategoryChanged",(category=>this.siteWithinCategoryChanged_(category)));this.addWebUiListener("onIncognitoStatusChanged",(hasIncognito=>this.onIncognitoStatusChanged_(hasIncognito)));this.browserProxy.updateIncognitoStatus()}siteWithinCategoryChanged_(category){if(category===this.category){this.configureWidget_()}}onIncognitoStatusChanged_(hasIncognito){this.hasIncognito_=hasIncognito;if(this.categorySubtype===ContentSetting.SESSION_ONLY){return}this.populateList_()}configureWidget_(){if(this.category===undefined){return}this.setUpActionMenu_();this.populateList_();if(this.categorySubtype===ContentSetting.SESSION_ONLY){this.$.category.hidden=this.category!==ContentSettingsTypes.COOKIES}}hasSites_(){return this.sites.length>0}computeShowAddSiteButton_(){return!(this.readOnlyList||this.category===ContentSettingsTypes.FILE_SYSTEM_WRITE&&this.categorySubtype===ContentSetting.ALLOW)}showNoSearchResults_(){return this.sites.length>0&&this.getFilteredSites_().length===0}onAddSiteClick_(){assert(!this.readOnlyList);this.showAddSiteDialog_=true}onAddSiteDialogClosed_(){this.showAddSiteDialog_=false;focusWithoutInk(this.$.addSite)}onShowTooltip_(e){this.tooltipText_=e.detail.text;this.showTooltipAtTarget(this.$.tooltip,e.detail.target)}populateList_(){this.browserProxy_.getExceptionList(this.category).then((exceptionList=>{this.processExceptions_(exceptionList);this.closeActionMenu_()}))}processExceptions_(exceptionList){const sites=exceptionList.filter((site=>site.setting!==ContentSetting.DEFAULT&&site.setting===this.categorySubtype)).filter((site=>{if(this.category!==ContentSettingsTypes.COOKIES){return true}assert(this.cookiesExceptionType!==undefined);switch(this.cookiesExceptionType){case CookiesExceptionType.THIRD_PARTY:return site.origin===SITE_EXCEPTION_WILDCARD;case CookiesExceptionType.SITE_DATA:return site.origin!==SITE_EXCEPTION_WILDCARD;case CookiesExceptionType.COMBINED:return true}})).map((site=>this.expandSiteException(site)));this.updateList("sites",(x=>x.origin),sites)}setUpActionMenu_(){this.showAllowAction_=this.categorySubtype!==ContentSetting.ALLOW;this.showBlockAction_=this.categorySubtype!==ContentSetting.BLOCK;this.showSessionOnlyAction_=this.categorySubtype!==ContentSetting.SESSION_ONLY&&this.category===ContentSettingsTypes.COOKIES}showSessionOnlyActionForSite_(){if(!this.actionMenuSite_||this.actionMenuSite_.incognito){return false}return this.showSessionOnlyAction_}setContentSettingForActionMenuSite_(contentSetting){assert(this.actionMenuSite_);this.browserProxy.setCategoryPermissionForPattern(this.actionMenuSite_.origin,this.actionMenuSite_.embeddingOrigin,this.category,contentSetting,this.actionMenuSite_.incognito)}onAllowClick_(){this.setContentSettingForActionMenuSite_(ContentSetting.ALLOW);this.closeActionMenu_()}onBlockClick_(){this.setContentSettingForActionMenuSite_(ContentSetting.BLOCK);this.closeActionMenu_()}onSessionOnlyClick_(){this.setContentSettingForActionMenuSite_(ContentSetting.SESSION_ONLY);this.closeActionMenu_()}onEditClick_(){this.shadowRoot.querySelector("cr-action-menu").close();this.showEditExceptionDialog_=true}onEditExceptionDialogClosed_(){this.showEditExceptionDialog_=false;this.actionMenuSite_=null;if(this.activeDialogAnchor_){this.activeDialogAnchor_.focus();this.activeDialogAnchor_=null}}onResetClick_(){assert(this.actionMenuSite_);this.browserProxy.resetCategoryPermissionForPattern(this.actionMenuSite_.origin,this.actionMenuSite_.embeddingOrigin,this.category,this.actionMenuSite_.incognito);this.closeActionMenu_()}onShowActionMenu_(e){this.activeDialogAnchor_=e.detail.anchor;this.actionMenuSite_=e.detail.model;this.shadowRoot.querySelector("cr-action-menu").showAt(this.activeDialogAnchor_)}closeActionMenu_(){this.actionMenuSite_=null;this.activeDialogAnchor_=null;const actionMenu=this.shadowRoot.querySelector("cr-action-menu");if(actionMenu.open){actionMenu.close()}}getFilteredSites_(){if(!this.searchFilter){return this.sites.slice()}const propNames=["displayName","origin","embeddingOrigin"];const searchFilter=this.searchFilter.toLowerCase();return this.sites.filter((site=>propNames.some((propName=>site[propName].toLowerCase().includes(searchFilter)))))}}customElements.define(SiteListElement.is,SiteListElement);function getTemplate$K(){return html`<!--_html_template_start_-->    <style include="settings-shared">#exceptionHeader{padding:0 var(--cr-section-padding)}</style>
    <div id="exceptionHeader">
      <h2>$i18n{siteSettingsCustomizedBehaviors}</h2>
      <div id="exceptionHeaderSubLabel" class="secondary">
        [[description]]
      </div>
    </div>
    <site-list category="[[category]]" category-subtype="[[contentSettingEnum_.BLOCK]]" category-header="[[blockHeader]]" read-only-list="[[getReadOnlyList_(readOnlyList, defaultManaged_)]]" search-filter="[[searchFilter]]">
    </site-list>
    <site-list category="[[category]]" category-subtype="[[contentSettingEnum_.SESSION_ONLY]]" category-header="$i18n{siteSettingsSessionOnly}" read-only-list="[[getReadOnlyList_(readOnlyList, defaultManaged_)]]" search-filter="[[searchFilter]]">
    </site-list>
    <site-list category="[[category]]" category-subtype="[[contentSettingEnum_.ALLOW]]" category-header="[[allowHeader]]" read-only-list="[[getReadOnlyList_(readOnlyList, defaultManaged_)]]" search-filter="[[searchFilter]]" hidden$="[[!showAllowSiteList_]]">
    </site-list>
<!--_html_template_end_-->`}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CategorySettingExceptionsElementBase=SiteSettingsMixin(WebUiListenerMixin(PolymerElement));class CategorySettingExceptionsElement extends CategorySettingExceptionsElementBase{static get is(){return"category-setting-exceptions"}static get template(){return getTemplate$K()}static get properties(){return{description:{type:String,value:function(){return loadTimeData.getString("siteSettingsCustomizedBehaviorsDescription")}},readOnlyList:{type:Boolean,value:false},defaultManaged_:Boolean,blockHeader:String,allowHeader:String,searchFilter:String,showAllowSiteList_:{type:Boolean,computed:"computeShowAllowSiteList_(category)"},contentSettingEnum_:{type:Object,value:ContentSetting}}}static get observers(){return["updateDefaultManaged_(category)"]}ready(){super.ready();this.addWebUiListener("contentSettingCategoryChanged",(()=>this.updateDefaultManaged_()))}computeShowAllowSiteList_(){return this.category!==ContentSettingsTypes.FILE_SYSTEM_WRITE}updateDefaultManaged_(){if(this.category===undefined){return}this.browserProxy.getDefaultValueForContentType(this.category).then((update=>{this.defaultManaged_=update.source===ContentSettingProvider.POLICY}))}getReadOnlyList_(){return this.readOnlyList||this.defaultManaged_}}customElements.define(CategorySettingExceptionsElement.is,CategorySettingExceptionsElement);function getTemplate$J(){return html`<!--_html_template_start_-->    <style include="cr-shared-style settings-shared iron-flex"></style>

    <div class="cr-row first">
      <h2 class="flex">[[exception.displayName]]</h2>
    </div>

    <div class="list-frame menu-content vertical-list" id="listContainer">
      <iron-list items="[[exception.sites]]" preserve-focus risk-selection>
        <template>
          <site-list-entry model="[[item]]" tabindex$="[[tabIndex]]" first$="[[!index]]" focus-row-index="[[index]]" iron-list-tab-index="[[tabIndex]]" last-focused="{{lastFocused_}}" chooser-type="[[exception.chooserType]]" chooser-object="[[exception.object]]" read-only-list>
          </site-list-entry>
        </template>
      </iron-list>
    </div>
<!--_html_template_end_-->`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ChooserExceptionListEntryElement extends PolymerElement{static get is(){return"chooser-exception-list-entry"}static get template(){return getTemplate$J()}static get properties(){return{exception:Object,lastFocused_:Object}}}customElements.define(ChooserExceptionListEntryElement.is,ChooserExceptionListEntryElement);function getTemplate$I(){return html`<!--_html_template_start_-->    <style include="cr-shared-style settings-shared">#empty-list-message{padding:0 var(--cr-section-padding);padding-top:30px}#exception-list{padding-top:0}#resetSettingsButton{margin:0 var(--cr-section-padding);margin-top:24px}</style>

    
    <cr-dialog id="confirmResetSettings" close-text="$i18n{close}">
      <div slot="body">[[resetPermissionsMessage_]]</div>
      <div slot="button-container">
        <cr-button class="cancel-button" on-click="onCloseDialog_">
          $i18n{cancel}
        </cr-button>
        <cr-button class="action-button" on-click="onResetSettings_">
          $i18n{siteSettingsSiteResetAll}
        </cr-button>
      </div>
    </cr-dialog>

    <div id="empty-list-message" hidden$="[[hasExceptions_(chooserExceptions.*)]]">
      <div class="secondary">[[emptyListMessage_]]</div>
    </div>

    <div hidden$="[[!hasExceptions_(chooserExceptions.*)]]">
      <cr-button id="resetSettingsButton" role="button" aria-disabled="false" on-click="onConfirmClearSettings_">
        $i18n{siteSettingsReset}
      </cr-button>
    </div>

    <template id="exception-list" is="dom-repeat" items="[[chooserExceptions]]">
      <chooser-exception-list-entry exception="[[item]]" on-show-tooltip="onShowTooltip_">
      </chooser-exception-list-entry>
    </template>

    <paper-tooltip id="tooltip" manual-mode position="top">
      [[tooltipText_]]
    </paper-tooltip>
<!--_html_template_end_-->`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ChooserExceptionListElementBase=TooltipMixin(ListPropertyUpdateMixin(SiteSettingsMixin(WebUiListenerMixin(I18nMixin(PolymerElement)))));class ChooserExceptionListElement extends ChooserExceptionListElementBase{static get is(){return"chooser-exception-list"}static get template(){return getTemplate$I()}static get properties(){return{chooserExceptions:{type:Array,value(){return[]}},chooserType:{observer:"chooserTypeChanged_",type:String,value:ChooserType.NONE},emptyListMessage_:{type:String,value:""},hasIncognito_:Boolean,resetPermissionsMessage_:{type:String,value:""},tooltipText_:String}}connectedCallback(){super.connectedCallback();this.addWebUiListener("contentSettingChooserPermissionChanged",((category,chooserType)=>{this.objectWithinChooserTypeChanged_(category,chooserType)}));this.addWebUiListener("onIncognitoStatusChanged",(hasIncognito=>this.onIncognitoStatusChanged_(hasIncognito)));this.browserProxy.updateIncognitoStatus()}objectWithinChooserTypeChanged_(category,chooserType){if(category===this.category&&chooserType===this.chooserType){this.chooserTypeChanged_()}}onIncognitoStatusChanged_(hasIncognito){this.hasIncognito_=hasIncognito;this.populateList_()}chooserTypeChanged_(){if(this.chooserType===ChooserType.NONE){return}switch(this.chooserType){case ChooserType.USB_DEVICES:this.emptyListMessage_=this.i18n("noUsbDevicesFound");this.resetPermissionsMessage_=this.i18n("resetUsbConfirmation");break;case ChooserType.SERIAL_PORTS:this.emptyListMessage_=this.i18n("noSerialPortsFound");this.resetPermissionsMessage_=this.i18n("resetSerialPortsConfirmation");break;case ChooserType.HID_DEVICES:this.emptyListMessage_=this.i18n("noHidDevicesFound");this.resetPermissionsMessage_=this.i18n("resetHidConfirmation");break;case ChooserType.BLUETOOTH_DEVICES:this.emptyListMessage_=this.i18n("noBluetoothDevicesFound");this.resetPermissionsMessage_=this.i18n("resetBluetoothConfirmation");break;default:this.emptyListMessage_="";this.resetPermissionsMessage_=""}this.populateList_()}hasExceptions_(){return this.chooserExceptions.length>0}onShowTooltip_(e){this.tooltipText_=e.detail.text;this.showTooltipAtTarget(this.$.tooltip,e.detail.target)}populateList_(){this.browserProxy.getChooserExceptionList(this.chooserType).then((exceptionList=>this.processExceptions_(exceptionList)))}processExceptions_(exceptionList){const exceptions=exceptionList.map((exception=>{const sites=exception.sites.map((site=>this.expandSiteException(site)));return Object.assign(exception,{sites:sites})}));if(!this.updateList("chooserExceptions",(x=>x.displayName),exceptions,true)){const siteUidGetter=x=>x.origin+x.embeddingOrigin+x.incognito;exceptions.forEach(((exception,index)=>{const propertyPath="chooserExceptions."+index+".sites";this.updateList(propertyPath,siteUidGetter,exception.sites)}),this)}}onConfirmClearSettings_(e){e.preventDefault();this.$.confirmResetSettings.showModal()}onCloseDialog_(e){e.target.closest("cr-dialog").close()}onResetSettings_(e){this.chooserExceptions.forEach((exception=>{exception.sites.forEach((site=>{this.browserProxy.resetChooserExceptionForSite(exception.chooserType,site.origin,exception.object)}))}));this.onCloseDialog_(e)}}customElements.define(ChooserExceptionListElement.is,ChooserExceptionListElement);function getTemplate$H(){return html`<!--_html_template_start_--><style include="settings-shared">:host{align-items:center;position:relative;vertical-align:middle}.policy-icon{margin-inline-start:16px;padding:8px}.settings-row{flex:1}</style>

<div class="list-item focus-row-active">
  <div class="settings-row middle no-min-width text-elide">
    <span class="url-directionality">[[exception.displayName]]</span>
  </div>
  <template is="dom-if" if="[[shouldShowPolicyPrefIndicator_(exception)]]">
    <cr-policy-pref-indicator class="policy-icon" pref="[[getPolicyPref_(exception)]]" icon-aria-label="[[label]]">
    </cr-policy-pref-indicator>
  </template>
  <cr-icon-button id="resetSite" class="icon-delete-gray" hidden="[[shouldShowPolicyPrefIndicator_(exception)]]" on-click="onResetButtonClick_" aria-label="$i18n{siteSettingsActionReset}">
  </cr-icon-button>
</div>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SiteDetailsPermissionDeviceEntryElement extends PolymerElement{static get is(){return"site-details-permission-device-entry"}static get template(){return getTemplate$H()}static get properties(){return{exception:Object}}getPolicyPref_(){return this.exception.sites.find((site=>site.enforcement===chrome.settingsPrivate.Enforcement.ENFORCED&&!!site.controlledBy))||null}shouldShowPolicyPrefIndicator_(){return!!this.getPolicyPref_()}onResetButtonClick_(){assert(this.exception.sites.length>0);SiteSettingsPrefsBrowserProxyImpl.getInstance().resetChooserExceptionForSite(this.exception.chooserType,this.exception.sites[0].origin,this.exception.object)}}customElements.define(SiteDetailsPermissionDeviceEntryElement.is,SiteDetailsPermissionDeviceEntryElement);function getTemplate$G(){return html`<!--_html_template_start_-->    <style include="settings-shared md-select">:host{display:block}</style>
    <div class="cr-row first" id="picker" hidden>
      <select id="mediaPicker" class="md-select" on-change="onChange_" aria-label$="[[label]]">
        <template is="dom-repeat" items="[[devices]]">
          <option value$="[[item.id]]">[[item.name]]</option>
        </template>
      </select>
    </div>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const MediaPickerElementBase=SiteSettingsMixin(WebUiListenerMixin(PolymerElement));class MediaPickerElement extends MediaPickerElementBase{static get is(){return"media-picker"}static get template(){return getTemplate$G()}static get properties(){return{type:String,label:String,devices:Array}}ready(){super.ready();this.addWebUiListener("updateDevicesMenu",((type,devices,defaultDevice)=>this.updateDevicesMenu_(type,devices,defaultDevice)));this.browserProxy.getDefaultCaptureDevices(this.type)}updateDevicesMenu_(type,devices,defaultDevice){if(type!==this.type){return}this.$.picker.hidden=devices.length===0;if(devices.length>0){this.devices=devices;microTask.run((()=>{this.$.mediaPicker.value=defaultDevice}))}}onChange_(){this.browserProxy.setDefaultCaptureDevice(this.type,this.$.mediaPicker.value)}}customElements.define(MediaPickerElement.is,MediaPickerElement);function getTemplate$F(){return html`<!--_html_template_start_-->    <style include="settings-shared">.secondary{margin-top:0}</style>
    <settings-toggle-button id="toggle" class="two-line" label="$i18n{siteSettingsPdfDownloadPdfs}" pref="{{prefs.plugins.always_open_pdf_externally}}">
    </settings-toggle-button>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SettingsPdfDocumentsElement extends PolymerElement{static get is(){return"settings-pdf-documents"}static get template(){return getTemplate$F()}static get properties(){return{prefs:{type:Object,notify:true}}}}customElements.define(SettingsPdfDocumentsElement.is,SettingsPdfDocumentsElement);function getTemplate$E(){return html`<!--_html_template_start_-->    <style include="cr-shared-style settings-shared iron-flex">:host{display:block}.column-header{margin-bottom:15px;margin-inline-start:20px;margin-top:15px}#radioGroup{padding:0 var(--cr-section-padding)}#radioGroupSubHeading{padding-bottom:10px}#appHandlerSubHeading{padding-bottom:10px}#appIcon{width:16px;height:16px;background-repeat:no-repeat;background-size:contain}settings-collapse-radio-button{--settings-collapse-toggle-min-height:var(--cr-section-min-height)}settings-collapse-radio-button:not(:first-of-type){--settings-collapse-separator-line:var(--cr-separator-line)}</style>
    <div id="radioGroup">
      <div class="secondary">
        $i18n{siteSettingsProtocolHandlersDescription}
      </div>
      <h2>$i18n{siteSettingsDefaultBehavior}</h2>
      <div id="radioSubHeading" class="secondary">
        $i18n{siteSettingsDefaultBehaviorDescription}
      </div>
      <settings-radio-group id="protcolHandlersRadio" pref="[[handlersEnabledPref_]]" on-change="onToggleChange_" selectable-elements="settings-collapse-radio-button">
        <settings-collapse-radio-button no-collapse id="protcolHandlersRadioAllow" pref="[[handlersEnabledPref_]]" label="$i18n{siteSettingsProtocolHandlersAllowed}" name="true" disabled$="[[isGuest_]]" icon="settings:protocol-handler">
        </settings-collapse-radio-button>
        <settings-collapse-radio-button no-collapse id="protcolHandlersRadioBlock" pref="[[handlersEnabledPref_]]" label="$i18n{siteSettingsProtocolHandlersBlocked}" name="false" disabled$="[[isGuest_]]" icon="settings:protocol-handler-off">
        </settings-collapse-radio-button>
      </settings-radio-group>
    </div>

    <template is="dom-repeat" items="[[protocols]]" as="protocol">
      <div class="column-header">[[protocol.protocol_display_name]]</div>

      <div class="list-frame menu-content vertical-list">
        <template is="dom-repeat" items="[[protocol.handlers]]">

          <div class="list-item">
            <site-favicon url="[[item.host]]"></site-favicon>
            <div class="middle">
              <div class="protocol-host">
                <span class="url-directionality">[[item.host]]</span>
              </div>
              <div class="secondary protocol-default" hidden$="[[!item.is_default]]">
                $i18n{handlerIsDefault}
              </div>
            </div>

            <cr-icon-button class="icon-more-vert" on-click="showMenu_" title="$i18n{moreActions}"></cr-icon-button>
          </div>
        </template>
      </div>
    </template>

    <cr-action-menu role-description="$i18n{menu}">
      <button class="dropdown-item" on-click="onDefaultClick_" id="defaultButton" disabled$="[[actionMenuModel_.is_default]]">
        $i18n{handlerSetDefault}
      </button>
      <button class="dropdown-item" on-click="onRemoveClick_" id="removeButton">
        $i18n{handlerRemove}
      </button>
    </cr-action-menu>

    <template is="dom-if" if="[[ignoredProtocols.length]]">
      <div class="column-header">
        $i18n{siteSettingsProtocolHandlersBlockedExceptions}
      </div>
      <div class="list-frame menu-content vertical-list">
        <template is="dom-repeat" items="[[ignoredProtocols]]">
          <div class="list-item">
            <site-favicon url="[[item.host]]"></site-favicon>
            <div class="middle">
              <div class="protocol-host">
                <span class="url-directionality">[[item.host]]</span></div>
              <div class="secondary protocol-protocol">
                [[item.protocol_display_name]]
              </div>
            </div>
            <cr-icon-button class="icon-clear" id="removeIgnoredButton" on-click="onRemoveIgnored_" title="$i18n{handlerRemove}">
            </cr-icon-button>
          </div>
        </template>
      </div>
    </template>

    <div class="column-header" hidden$="[[!showAppsProtocolHandlersTitle_]]">
      <h2>$i18n{siteSettingsAppProtocolHandlers}</h2>
    </div>

    <div class="column-header" hidden$="[[!appAllowedProtocols.length]]">
      <div id="appHandlerSubHeading" class="secondary">
        $i18n{siteSettingsAppAllowedProtocolHandlersDescription}
      </div>
    </div>

    <template is="dom-repeat" items="[[appAllowedProtocols]]" as="appProtocol">
      <div class="column-header">[[appProtocol.protocol_display_name]]</div>
      <div class="list-frame menu-content vertical-list">
        <template is="dom-repeat" items="[[appProtocol.handlers]]">
          <div class="list-item">
            <div id="appIcon" style="background-image:url(chrome://app-icon/[[item.app_id]]/16)">
            </div>
            <div class="middle protocol-host">
              <span class="url-directionality">[[item.host]]</span>
            </div>
            <cr-icon-button class="icon-clear" id="removeAppHandlerButton" on-click="onRemoveAppAllowedHandlerButtonClick_" title="$i18n{handlerRemove}">
            </cr-icon-button>
          </div>
        </template>
      </div>
    </template>

    <div class="column-header" hidden$="[[!appDisallowedProtocols.length]]">
      <div id="appHandlerSubHeading" class="secondary">
        $i18n{siteSettingsAppDisallowedProtocolHandlersDescription}
      </div>
    </div>

    <template is="dom-repeat" items="[[appDisallowedProtocols]]" as="appProtocol">
      <div class="column-header">[[appProtocol.protocol_display_name]]</div>
      <div class="list-frame menu-content vertical-list">
        <template is="dom-repeat" items="[[appProtocol.handlers]]">
          <div class="list-item">
            <div id="appIcon" style="background-image:url(chrome://app-icon/[[item.app_id]]/16)">
            </div>
            <div class="middle protocol-host">
              <span class="url-directionality">[[item.host]]</span>
            </div>
            <cr-icon-button class="icon-clear" id="removeAppHandlerButton" on-click="onRemoveAppDisallowedHandlerButtonClick_" title="$i18n{handlerRemove}">
            </cr-icon-button>
          </div>
        </template>
      </div>
    </template>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ProtocolHandlersElementBase=WebUiListenerMixin(SiteSettingsMixin(PolymerElement));class ProtocolHandlersElement extends ProtocolHandlersElementBase{static get is(){return"protocol-handlers"}static get template(){return getTemplate$E()}static get properties(){return{protocols:Array,appAllowedProtocols:{type:Array,value(){return[]}},appDisallowedProtocols:{type:Array,value(){return[]}},showAppsProtocolHandlersTitle_:{type:Boolean,value:false},actionMenuModel_:Object,toggleOffLabel:String,toggleOnLabel:String,ignoredProtocols:Array,handlersEnabledPref_:{type:Object,value(){return{type:chrome.settingsPrivate.PrefType.BOOLEAN,value:false}}}}}ready(){super.ready();this.addWebUiListener("setHandlersEnabled",(enabled=>this.setHandlersEnabled_(enabled)));this.addWebUiListener("setProtocolHandlers",(protocols=>this.setProtocolHandlers_(protocols)));this.addWebUiListener("setIgnoredProtocolHandlers",(ignoredProtocols=>this.setIgnoredProtocolHandlers_(ignoredProtocols)));this.browserProxy.observeProtocolHandlers();this.addWebUiListener("setAppAllowedProtocolHandlers",this.setAppAllowedProtocolHandlers_.bind(this));this.addWebUiListener("setAppDisallowedProtocolHandlers",this.setAppDisallowedProtocolHandlers_.bind(this));this.browserProxy.observeAppProtocolHandlers()}computeHandlersDescription_(){return this.handlersEnabledPref_.value?this.toggleOnLabel:this.toggleOffLabel}setHandlersEnabled_(enabled){this.set("handlersEnabledPref_.value",enabled)}setProtocolHandlers_(protocols){this.protocols=protocols}setIgnoredProtocolHandlers_(ignoredProtocols){this.ignoredProtocols=ignoredProtocols}setAppAllowedProtocolHandlers_(appAllowedProtocols){this.appAllowedProtocols=appAllowedProtocols;this.updateShowAppsProtocolHandlersTitle_()}setAppDisallowedProtocolHandlers_(appDisallowedProtocols){this.appDisallowedProtocols=appDisallowedProtocols;this.updateShowAppsProtocolHandlersTitle_()}updateShowAppsProtocolHandlersTitle_(){this.showAppsProtocolHandlersTitle_=this.appAllowedProtocols&&this.appAllowedProtocols.length>0||this.appDisallowedProtocols&&this.appDisallowedProtocols.length>0}closeActionMenu_(){this.shadowRoot.querySelector("cr-action-menu").close();this.actionMenuModel_=null}onToggleChange_(){this.browserProxy.setProtocolHandlerDefault(!!this.handlersEnabledPref_.value)}onDefaultClick_(){const item=this.actionMenuModel_;this.browserProxy.setProtocolDefault(item.protocol,item.spec);this.closeActionMenu_()}onRemoveClick_(){const item=this.actionMenuModel_;this.browserProxy.removeProtocolHandler(item.protocol,item.spec);this.closeActionMenu_()}onRemoveAppAllowedHandlerButtonClick_(event){const item=event.model.item;this.browserProxy.removeAppAllowedHandler(item.protocol,item.spec,item.app_id)}onRemoveAppDisallowedHandlerButtonClick_(event){const item=event.model.item;this.browserProxy.removeAppDisallowedHandler(item.protocol,item.spec,item.app_id)}onRemoveIgnored_(event){const item=event.model.item;this.browserProxy.removeProtocolHandler(item.protocol,item.spec)}showMenu_(event){this.actionMenuModel_=event.model.item;this.shadowRoot.querySelector("cr-action-menu").showAt(event.target)}}customElements.define(ProtocolHandlersElement.is,ProtocolHandlersElement);function getTemplate$D(){return html`<!--_html_template_start_--><style include="settings-shared">.content-settings-header,.radio-group{padding:0 var(--cr-section-padding)}.radio-group-sub-heading{padding-bottom:10px}settings-collapse-radio-button{--settings-collapse-toggle-min-height:var(--cr-section-min-height)}settings-collapse-radio-button.two-line{--settings-collapse-toggle-min-height:var(--cr-section-two-line-min-height)}settings-collapse-radio-button:not(:first-of-type){--settings-collapse-separator-line:var(--cr-separator-line)}#exceptionHeader{padding:0 var(--cr-section-padding)}#exceptionHeaderSubLabel{padding-bottom:10px}</style>
<div class="content-settings-header secondary">
  $i18n{siteDataPageDescription}
</div>
<div class="radio-group">
  <h2>$i18n{siteDataPageDefaultBehavior}</h2>
  <div class="secondary radio-group-sub-heading">
    $i18n{siteDataPagedefaultBehaviorDescription}
  </div>
  <settings-radio-group id="defaultGroup" no-set-pref pref="{{prefs.generated.cookie_default_content_setting}}" selectable-elements="cr-radio-button, settings-collapse-radio-button" on-change="onDefaultRadioChange_">
    <settings-collapse-radio-button id="defaultAllow" no-collapse name="[[contentSettingEnum_.ALLOW]]" pref="[[prefs.generated.cookie_default_content_setting]]" label="$i18n{siteDataPageAllowRadioLabel}" sub-label="$i18n{siteDataPageAllowRadioSubLabel}" icon="settings:database">
    </settings-collapse-radio-button>
    <settings-collapse-radio-button id="defaultSessionOnly" no-collapse class="two-line" name="[[contentSettingEnum_.SESSION_ONLY]]" pref="[[prefs.generated.cookie_default_content_setting]]" label="$i18n{siteDataPageClearOnExitRadioLabel}" sub-label="$i18n{siteDataPageClearOnExitRadioSubLabel}" icon="settings:database">
    </settings-collapse-radio-button>
    <settings-collapse-radio-button id="defaultBlock" no-collapse class="two-line" name="[[contentSettingEnum_.BLOCK]]" pref="[[prefs.generated.cookie_default_content_setting]]" label="$i18n{siteDataPageBlockRadioLabel}" sub-label="$i18n{siteDataPageBlockRadioSublabel}" icon="settings:database-off">
    </settings-collapse-radio-button>
  </settings-radio-group>
</div>
<div id="exceptionHeader">
  <h2>$i18n{siteDataPageCustomizedBehaviorHeading}</h2>
  <div id="exceptionHeaderSubLabel" class="secondary">
    $i18n{siteDataPageCustomizedBehaviorDescription}
  </div>
</div>
<site-list id="allowExceptionsList" category="[[cookiesContentSettingType_]]" category-subtype="[[contentSettingEnum_.ALLOW]]" category-header="$i18n{siteDataPageAllowExceptionsSubHeading}" read-only-list="[[exceptionListsReadOnly_]]" search-filter="[[searchTerm]]" cookies-exception-type="site-data">
</site-list>
<site-list id="sessionOnlyExceptionsList" category="[[cookiesContentSettingType_]]" category-subtype="[[contentSettingEnum_.SESSION_ONLY]]" category-header="$i18n{siteDataPageDeleteOnExitExceptionsSubHeading}" read-only-list="[[exceptionListsReadOnly_]]" search-filter="[[searchTerm]]" cookies-exception-type="site-data">
</site-list>

<site-list id="blockExceptionsList" category="[[cookiesContentSettingType_]]" category-subtype="[[contentSettingEnum_.BLOCK]]" category-header="$i18n{siteDataPageBlockExceptionsSubHeading}" read-only-list="[[exceptionListsReadOnly_]]" search-filter="[[searchTerm]]" cookies-exception-type="combined">
</site-list>
<template is="dom-if" if="[[showDefaultBlockDialog_]]" restamp>
  <cr-dialog id="defaultBlockDialog" show-on-attach>
    <div slot="title">$i18n{siteDataPageBlockConfirmDialogTitle}</div>
    <div slot="body">$i18n{siteDataPageBlockConfirmDialogDescription}</div>
    <div slot="button-container">
    <cr-button id="defaultBlockDialogCancel" class="cancel-button" on-click="onDefaultBlockDialogCancel_">
        $i18n{siteDataPageBlockConfirmDialogCancelButton}
    </cr-button>
    <cr-button id="defaultBlockDialogConfirm" class="action-button" on-click="onDefaultBlockDialogConfirm_">
        $i18n{siteDataPageBlockConfirmDialogConfirmButton}
    </cr-button>
    </div>
  </cr-dialog>
</template><!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsSiteDataElementBase=PrefsMixin(PolymerElement);class SettingsSiteDataElement extends SettingsSiteDataElementBase{static get is(){return"settings-site-data"}static get template(){return getTemplate$D()}static get properties(){return{prefs:{type:Object,notify:true},searchTerm:{type:String,notify:true,value:""},cookiesContentSettingType_:{type:String,value:ContentSettingsTypes.COOKIES},contentSettingEnum_:{type:Object,value:ContentSetting},exceptionListsReadOnly_:{type:Boolean,value:false},showDefaultBlockDialog_:Boolean}}static get observers(){return[`onGeneratedPrefsUpdated_(\n        prefs.generated.cookie_default_content_setting)`]}onGeneratedPrefsUpdated_(){const pref=this.getPref("generated.cookie_default_content_setting");this.exceptionListsReadOnly_=pref.enforcement===chrome.settingsPrivate.Enforcement.ENFORCED}onDefaultRadioChange_(){const selected=this.$.defaultGroup.selected;if(selected===ContentSetting.BLOCK){this.showDefaultBlockDialog_=true}else{this.$.defaultGroup.sendPrefChange()}}onDefaultBlockDialogCancel_(){this.$.defaultGroup.resetToPrefValue();this.showDefaultBlockDialog_=false;focusWithoutInk(this.$.defaultBlock)}onDefaultBlockDialogConfirm_(){this.$.defaultGroup.sendPrefChange();this.showDefaultBlockDialog_=false;focusWithoutInk(this.$.defaultBlock)}}customElements.define(SettingsSiteDataElement.is,SettingsSiteDataElement);function getTemplate$C(){return html`<!--_html_template_start_-->    <style include="settings-shared md-select"></style>
    <div id="details" hidden$="[[shouldHideCategory_(site)]]">
      <div id="permissionItem" class$="list-item [[permissionInfoStringClass_(site.source,
                                                         category,
                                                         site.setting)]]">
        <div>
          <iron-icon icon="[[icon]]" aria-hidden="true" role="presentation">
          </iron-icon>
        </div>
        <div class="middle" id="permissionHeader">
          [[label]]
          <div class="secondary" id="permissionSecondary" hidden$="[[!hasPermissionInfoString_(site.source,
                                                   category,
                                                   site.setting)]]" inner-h-t-m-l="[[permissionInfoString_(
                site.source,
                category,
                site.setting,
                '$i18nPolymer{siteSettingsAllowlisted}',
                '$i18nPolymer{siteSettingsAdsBlockBlocklistedSingular}',
                '$i18nPolymer{siteSettingsAdsBlockNotBlocklistedSingular}',
                '$i18nPolymer{siteSettingsSourceEmbargo}',
                '$i18nPolymer{siteSettingsSourceInsecureOrigin}',
                '$i18nPolymer{siteSettingsSourceKillSwitch}',

                '$i18nPolymer{siteSettingsSourceExtensionAllow}',
                '$i18nPolymer{siteSettingsSourceExtensionBlock}',
                '$i18nPolymer{siteSettingsSourceExtensionAsk}',
                '$i18nPolymer{siteSettingsSourcePolicyAllow}',
                '$i18nPolymer{siteSettingsSourcePolicyBlock}',
                '$i18nPolymer{siteSettingsSourcePolicyAsk}')]]">
          </div>
        </div>
        <select id="permission" class="md-select" aria-label$="[[label]]" aria-describedby="permissionSecondary" on-change="onPermissionSelectionChange_" disabled$="[[!isPermissionUserControlled_(site.source, category,
                                                      site.setting)]]">
          <option id="default" value$="[[contentSettingEnum_.DEFAULT]]">
            [[defaultSettingString_(
                defaultSetting_,
                category,
                useAutomaticLabel)]]
          </option>
          <option id="allow" value$="[[contentSettingEnum_.ALLOW]]" hidden$="[[!showAllowedSetting_(category)]]">
            $i18n{siteSettingsActionAllow}
          </option>
          <option id="block" value$="[[contentSettingEnum_.BLOCK]]">
            [[blockSettingString_(
                category,
                '$i18n{siteSettingsActionBlock}',
                '$i18n{siteSettingsActionMute}')]]
          </option>
          <option id="ask" value$="[[contentSettingEnum_.ASK]]" hidden$="[[!showAskSetting_(category, site.setting,
                                          site.source)]]">
            $i18n{siteSettingsActionAsk}
          </option>
        </select>
      </div>

      <div class="list-frame" role="table">
        <template is="dom-repeat" items="[[chooserExceptions_]]">
          <site-details-permission-device-entry exception="[[item]]">
          </site-details-permission-device-entry>
        </template>
      </div>
    </div>
<!--_html_template_end_-->`}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SiteDetailsPermissionElementBase=ListPropertyUpdateMixin(SiteSettingsMixin(WebUiListenerMixin(I18nMixin(PolymerElement))));class SiteDetailsPermissionElement extends SiteDetailsPermissionElementBase{static get is(){return"site-details-permission"}static get template(){return getTemplate$C()}static get properties(){return{useAutomaticLabel:{type:Boolean,value:false},site:Object,defaultSetting_:String,label:String,icon:String,contentSettingEnum_:{type:Object,value:ContentSetting},chooserExceptions_:{type:Array,value(){return[]}},chooserType:{type:String,value:ChooserType.NONE}}}static get observers(){return["siteChanged_(site)","updateChooserExceptions_(site, chooserType)"]}connectedCallback(){super.connectedCallback();this.addWebUiListener("contentSettingCategoryChanged",(category=>this.onDefaultSettingChanged_(category)));this.addWebUiListener("contentSettingChooserPermissionChanged",((category,chooserType)=>{if(category===this.category&&chooserType===this.chooserType){this.updateChooserExceptions_()}}))}updateChooserExceptions_(){if(!this.site||this.chooserType===ChooserType.NONE){return}this.browserProxy.getChooserExceptionList(this.chooserType).then((exceptionList=>this.processChooserExceptions_(exceptionList)))}processChooserExceptions_(exceptionList){const siteFilter=site=>{const url=this.toUrl(site.origin);const targetUrl=this.toUrl(this.site.origin);if(!url||!targetUrl){return false}return site.incognito===this.site.incognito&&url.origin===targetUrl.origin};const exceptions=exceptionList.filter((exception=>exception.sites.some((site=>siteFilter(site))))).map((exception=>{const sites=exception.sites.filter((site=>siteFilter(site))).map((site=>this.expandSiteException(site)));return Object.assign(exception,{sites:sites})}));this.updateList("chooserExceptions_",(x=>x.displayName),exceptions,true)}siteChanged_(site){if(!site){return}if(site.source===SiteSettingSource.DEFAULT){this.defaultSetting_=site.setting;this.$.permission.value=ContentSetting.DEFAULT}else{this.updateDefaultPermission_();this.$.permission.value=site.setting}if(this.isNonDefaultAsk_(site.setting,site.source)){assert(this.$.permission.value===ContentSetting.ASK,"'Ask' should only show up when it's currently selected.")}}updateDefaultPermission_(){this.browserProxy.getDefaultValueForContentType(this.category).then((defaultValue=>{this.defaultSetting_=defaultValue.setting}))}onDefaultSettingChanged_(category){if(category===this.category){this.updateDefaultPermission_()}}onPermissionSelectionChange_(){this.browserProxy.setOriginPermissions(this.site.origin,this.category,this.$.permission.value)}useCustomSoundLabels_(category){return category===ContentSettingsTypes.SOUND}defaultSettingString_(defaultSetting,category,useAutomaticLabel){if(defaultSetting===undefined||category===undefined||useAutomaticLabel===undefined){return""}if(defaultSetting===ContentSetting.ASK||defaultSetting===ContentSetting.IMPORTANT_CONTENT){return this.i18n("siteSettingsActionAskDefault")}else if(defaultSetting===ContentSetting.ALLOW){if(this.useCustomSoundLabels_(category)&&useAutomaticLabel){return this.i18n("siteSettingsActionAutomaticDefault")}return this.i18n("siteSettingsActionAllowDefault")}else if(defaultSetting===ContentSetting.BLOCK){if(this.useCustomSoundLabels_(category)){return this.i18n("siteSettingsActionMuteDefault")}return this.i18n("siteSettingsActionBlockDefault")}assertNotReached(`No string for ${this.category}'s default of ${defaultSetting}`)}blockSettingString_(category,blockString,muteString){if(this.useCustomSoundLabels_(category)){return muteString}return blockString}shouldHideCategory_(){return!this.site}hasPermissionInfoString_(source,category,setting){return String(this.permissionInfoString_(source,category,setting,null,null,null,null,null,null,null,null,null,null,null,null))!==""}permissionInfoStringClass_(source,category,setting){return this.hasPermissionInfoString_(source,category,setting)?"two-line":""}isPermissionUserControlled_(source){return!(source===SiteSettingSource.ALLOWLIST||source===SiteSettingSource.POLICY||source===SiteSettingSource.EXTENSION||source===SiteSettingSource.KILL_SWITCH||source===SiteSettingSource.INSECURE_ORIGIN)}showAllowedSetting_(category){return!(category===ContentSettingsTypes.SERIAL_PORTS||category===ContentSettingsTypes.USB_DEVICES||category===ContentSettingsTypes.BLUETOOTH_SCANNING||category===ContentSettingsTypes.FILE_SYSTEM_WRITE||category===ContentSettingsTypes.HID_DEVICES||category===ContentSettingsTypes.BLUETOOTH_DEVICES)}showAskSetting_(category,setting,source){if(category===ContentSettingsTypes.SERIAL_PORTS||category===ContentSettingsTypes.USB_DEVICES||category===ContentSettingsTypes.HID_DEVICES||category===ContentSettingsTypes.BLUETOOTH_DEVICES){return true}if(category===ContentSettingsTypes.BLUETOOTH_SCANNING||category===ContentSettingsTypes.FILE_SYSTEM_WRITE){return true}return this.isNonDefaultAsk_(setting,source)}isNonDefaultAsk_(setting,source){if(setting!==ContentSetting.ASK||source===SiteSettingSource.DEFAULT){return false}assert(source===SiteSettingSource.EXTENSION||source===SiteSettingSource.POLICY||source===SiteSettingSource.PREFERENCE,"Only extensions, enterprise policy or preferences can change "+"the setting to ASK.");return true}permissionInfoString_(source,category,setting,allowlistString,adsBlocklistString,adsBlockString,embargoString,insecureOriginString,killSwitchString,extensionAllowString,extensionBlockString,extensionAskString,policyAllowString,policyBlockString,policyAskString){if(source===undefined||category===undefined||setting===undefined){return window.trustedTypes.emptyHTML}const extensionStrings={};extensionStrings[ContentSetting.ALLOW]=extensionAllowString;extensionStrings[ContentSetting.BLOCK]=extensionBlockString;extensionStrings[ContentSetting.ASK]=extensionAskString;const policyStrings={};policyStrings[ContentSetting.ALLOW]=policyAllowString;policyStrings[ContentSetting.BLOCK]=policyBlockString;policyStrings[ContentSetting.ASK]=policyAskString;function htmlOrNull(str){return str===null?null:sanitizeInnerHtml(str)}if(source===SiteSettingSource.ALLOWLIST){return htmlOrNull(allowlistString)}else if(source===SiteSettingSource.ADS_FILTER_BLACKLIST){assert(ContentSettingsTypes.ADS===category,"The ads filter blocklist only applies to Ads.");return htmlOrNull(adsBlocklistString)}else if(category===ContentSettingsTypes.ADS&&setting===ContentSetting.BLOCK){return htmlOrNull(adsBlockString)}else if(source===SiteSettingSource.EMBARGO){assert(ContentSetting.BLOCK===setting,"Embargo is only used to block permissions.");return htmlOrNull(embargoString)}else if(source===SiteSettingSource.EXTENSION){return htmlOrNull(extensionStrings[setting])}else if(source===SiteSettingSource.INSECURE_ORIGIN){assert(ContentSetting.BLOCK===setting,"Permissions can only be blocked due to insecure origins.");return htmlOrNull(insecureOriginString)}else if(source===SiteSettingSource.KILL_SWITCH){assert(ContentSetting.BLOCK===setting,"The permissions kill switch can only be used to block permissions.");return htmlOrNull(killSwitchString)}else if(source===SiteSettingSource.POLICY){return htmlOrNull(policyStrings[setting])}else if(source===SiteSettingSource.DEFAULT||source===SiteSettingSource.PREFERENCE){return window.trustedTypes.emptyHTML}assertNotReached(`No string for ${category} setting source '${source}'`)}}customElements.define(SiteDetailsPermissionElement.is,SiteDetailsPermissionElement);function getTemplate$B(){return html`<!--_html_template_start_-->    <style include="cr-shared-style settings-shared action-link iron-flex">.favicon-image{margin:2px}#storage{padding-inline-end:0}#storageText{display:flex}#resetSettingsButton{margin-top:24px}#usageHeader{padding:0 var(--cr-section-padding)}#usageDetails{align-items:center;display:flex;flex:1;flex-direction:row}#fpsPolicyContainer{display:flex;padding:8px}</style>

    
    <cr-dialog id="confirmResetSettings" close-text="$i18n{close}" on-close="onResetSettingsDialogClosed_">
      <div slot="body">
        [[i18n('siteSettingsSiteResetConfirmation', pageTitle)]]
      </div>
      <div slot="button-container">
        <cr-button class="cancel-button" on-click="onCloseDialog_">
          $i18n{cancel}
        </cr-button>
        <cr-button class="action-button" on-click="onResetSettings_">
          $i18n{siteSettingsSiteResetAll}
        </cr-button>
      </div>
    </cr-dialog>

    
    <cr-dialog id="confirmClearStorage" close-text="$i18n{close}" on-close="onClearStorageDialogClosed_">
      <style include="clear-storage-dialog-shared"></style>
      <div slot="title">
        $i18n{siteSettingsSiteDeleteStorageDialogTitle}
      </div>
      <div slot="body">
        [[i18n('siteSettingsSiteClearStorageConfirmationNew', pageTitle)]]
        <div class="detail-list">
          <div class="detail">
            <iron-icon icon="all-sites:logout" aria-hidden="true" role="presentation"></iron-icon>
            $i18n{siteSettingsSiteClearStorageSignOut}
          </div>
          <div class="detail">
            <iron-icon icon="all-sites:offline" aria-hidden="true" role="presentation"></iron-icon>
            $i18n{siteSettingsSiteDeleteStorageOfflineData}
          </div>
          <div class="detail" id="adPersonalization">
            <iron-icon icon="all-sites:tag" aria-hidden="true" role="presentation"></iron-icon>
            $i18n{siteSettingsRemoveSiteAdPersonalization}
          </div>
        </div>
      </div>
      <div slot="button-container">
        <cr-button class="cancel-button" on-click="onCloseDialog_">
          $i18n{cancel}
        </cr-button>
        <cr-button class="action-button" on-click="onClearStorage_">
          $i18n{siteSettingsSiteClearStorage}
        </cr-button>
      </div>
    </cr-dialog>

    <div id="usage">
      <div id="usageHeader">
        <h2 class="first">$i18n{siteSettingsUsage}</h2>
      </div>
      <div class="list-frame">
        <div class="list-item" id="noStorage" hidden$="[[hasUsage_(storedData_, numCookies_)]]">
          <div class="start">$i18n{siteSettingsUsageNone}</div>
        </div>
        <div class="list-item" id="storage" hidden$="[[!hasUsage_(storedData_, numCookies_)]]">
          <div id="usageDetails">
            <div>
              <div id="storageText">
                <div id="storedData" hidden$="[[!storedData_]]">
                  [[storedData_]]
                </div>
                <div hidden$="[[!hasDataAndCookies_(
                    storedData_,numCookies_)]]">
                  &nbsp;&middot;&nbsp;
                </div>
                <div id="numCookies" hidden$="[[!numCookies_]]">
                  [[numCookies_]]
                </div>
              </div>
              <div id="fpsMembership" class="secondary" hidden$="[[!fpsMembership_]]">
                [[fpsMembership_]]
              </div>
            </div>
            <template is="dom-if" if="[[fpsEnterprisePref_]]">
              <div id="fpsPolicyContainer">
                <cr-policy-pref-indicator id="fpsPolicy" pref="[[fpsEnterprisePref_]]" icon-aria-label="[[label]]" focus-row-control focus-type="policy">
                </cr-policy-pref-indicator>
              </div>
            </template>
          </div>
          <cr-button id="clearStorage" role="button" aria-disabled="false" on-click="onConfirmClearStorage_" aria-label="$i18n{siteSettingsDelete}">
            $i18n{siteSettingsDelete}
          </cr-button>
        </div>
      </div>
    </div>

    <div class="cr-row first">
      <h2 class="flex">$i18n{siteSettingsPermissions}</h2>
      <cr-button id="resetSettingsButton" class="header-aligned-button" role="button" aria-disabled="false" on-click="onConfirmClearSettings_">
        $i18n{siteSettingsReset}
      </cr-button>
    </div>

    <div class="list-frame">
      <site-details-permission category="[[contentSettingsTypesEnum_.GEOLOCATION]]" icon="settings:location-on" label="$i18n{siteSettingsLocation}">
      </site-details-permission>
      <site-details-permission category="[[contentSettingsTypesEnum_.CAMERA]]" icon="cr:videocam" label="$i18n{siteSettingsCamera}">
      </site-details-permission>
      <site-details-permission category="[[contentSettingsTypesEnum_.MIC]]" icon="cr:mic" label="$i18n{siteSettingsMic}">
      </site-details-permission>
      <site-details-permission category="[[contentSettingsTypesEnum_.SENSORS]]" icon="settings:sensors" label="$i18n{siteSettingsSensors}">
      </site-details-permission>
      <site-details-permission category="[[contentSettingsTypesEnum_.NOTIFICATIONS]]" icon="settings:notifications" label="$i18n{siteSettingsNotifications}">
      </site-details-permission>
      <site-details-permission category="[[contentSettingsTypesEnum_.JAVASCRIPT]]" icon="settings:code" label="$i18n{siteSettingsJavascript}">
      </site-details-permission>
      <site-details-permission category="[[contentSettingsTypesEnum_.IMAGES]]" icon="settings:photo" label="$i18n{siteSettingsImages}">
      </site-details-permission>
      <site-details-permission category="[[contentSettingsTypesEnum_.POPUPS]]" icon="cr:open-in-new" label="$i18n{siteSettingsPopups}">
      </site-details-permission>
      <site-details-permission category="[[contentSettingsTypesEnum_.ADS]]" icon="settings:ads" label="$i18n{siteSettingsAds}">
      </site-details-permission>
      <site-details-permission category="[[contentSettingsTypesEnum_.BACKGROUND_SYNC]]" icon="cr:sync" label="$i18n{siteSettingsBackgroundSync}">
      </site-details-permission>
      <site-details-permission category="[[contentSettingsTypesEnum_.SOUND]]" icon="settings:volume-up" label="$i18n{siteSettingsSound}" use-automatic-label="[[blockAutoplayEnabled]]">
      </site-details-permission>
      <site-details-permission category="[[contentSettingsTypesEnum_.AUTOMATIC_DOWNLOADS]]" icon="cr:file-download" label="$i18n{siteSettingsAutomaticDownloads}">
      </site-details-permission>
      <template is="dom-if" if="[[!blockMidiByDefault_]]">
        <site-details-permission category="[[contentSettingsTypesEnum_.MIDI_DEVICES]]" icon="settings:midi" label="$i18n{siteSettingsMidiDevices}">
        </site-details-permission>
      </template>
      <template is="dom-if" if="[[blockMidiByDefault_]]">
        <site-details-permission category="[[contentSettingsTypesEnum_.MIDI]]" icon="settings:midi" label="$i18n{siteSettingsMidiDevices}">
        </site-details-permission>
      </template>
      <site-details-permission category="[[contentSettingsTypesEnum_.USB_DEVICES]]" icon="settings:usb" label="$i18n{siteSettingsUsbDevices}" chooser-type="[[chooserTypeEnum_.USB_DEVICES]]">
      </site-details-permission>
      <site-details-permission category="[[contentSettingsTypesEnum_.SERIAL_PORTS]]" icon="settings:serial-port" label="$i18n{siteSettingsSerialPorts}" chooser-type="[[chooserTypeEnum_.SERIAL_PORTS]]">
      </site-details-permission>
      <site-details-permission category="[[contentSettingsTypesEnum_.WEB_PRINTING]]" icon="settings:printer" label="$i18n{siteSettingsWebPrinting}">
      </site-details-permission>
      <template is="dom-if" if="[[enableWebBluetoothNewPermissionsBackend_]]">
        <site-details-permission category="[[contentSettingsTypesEnum_.BLUETOOTH_DEVICES]]" icon="settings:bluetooth" chooser-type="[[chooserTypeEnum_.BLUETOOTH_DEVICES]]" label="$i18n{siteSettingsBluetoothDevices}">
        </site-details-permission>
      </template>
      <site-details-permission category="[[contentSettingsTypesEnum_.FILE_SYSTEM_WRITE]]" icon="settings:save-original" label="$i18n{siteSettingsFileSystemWrite}">
      </site-details-permission>
      <site-details-permission category="[[contentSettingsTypesEnum_.HID_DEVICES]]" chooser-type="[[chooserTypeEnum_.HID_DEVICES]]" icon="settings:hid-device" label="$i18n{siteSettingsHidDevices}">
      </site-details-permission>

      <site-details-permission category="[[contentSettingsTypesEnum_.PROTECTED_CONTENT]]" icon="settings:protected-content" label="$i18n{siteSettingsProtectedContentIdentifiers}">
      </site-details-permission>

      <site-details-permission category="[[contentSettingsTypesEnum_.CLIPBOARD]]" icon="settings:clipboard" label="$i18n{siteSettingsClipboard}">
      </site-details-permission>
      <site-details-permission category="[[contentSettingsTypesEnum_.PAYMENT_HANDLER]]" icon="settings:payment-handler" label="$i18n{siteSettingsPaymentHandler}">
      </site-details-permission>
      <template is="dom-if" if="[[enableExperimentalWebPlatformFeatures_]]">
        <site-details-permission category="[[contentSettingsTypesEnum_.BLUETOOTH_SCANNING]]" icon="settings:bluetooth-scanning" label="$i18n{siteSettingsBluetoothScanning}">
        </site-details-permission>
      </template>
      <site-details-permission category="[[contentSettingsTypesEnum_.MIXEDSCRIPT]]" icon="settings:insecure-content" label="$i18n{siteSettingsInsecureContent}">
      </site-details-permission>
      <site-details-permission category="[[contentSettingsTypesEnum_.JAVASCRIPT_JIT]]" icon="settings:lock-outline" label="$i18n{siteSettingsJavascriptJit}">
      </site-details-permission>
      <site-details-permission category="[[contentSettingsTypesEnum_.FEDERATED_IDENTITY_API]]" icon="settings:federated-identity-api" label="$i18n{siteSettingsFederatedIdentityApi}">
      </site-details-permission>
      <site-details-permission category="[[contentSettingsTypesEnum_.AR]]" icon="settings:vr-headset" label="$i18n{siteSettingsAr}">
      </site-details-permission>
      <site-details-permission category="[[contentSettingsTypesEnum_.VR]]" icon="settings:vr-headset" label="$i18n{siteSettingsVr}">
      </site-details-permission>
      <site-details-permission category="[[contentSettingsTypesEnum_.IDLE_DETECTION]]" icon="settings:devices" label="$i18n{siteSettingsIdleDetection}">
      </site-details-permission>
      <site-details-permission category="[[contentSettingsTypesEnum_.WINDOW_MANAGEMENT]]" icon="settings:window-management" label="$i18n{siteSettingsWindowManagement}">
      </site-details-permission>
      <site-details-permission category="[[contentSettingsTypesEnum_.LOCAL_FONTS]]" icon="settings:local-fonts" label="$i18n{fonts}">
      </site-details-permission>
      <template is="dom-if" if="[[autoPictureInPictureEnabled_]]">
        <site-details-permission category="[[contentSettingsTypesEnum_.AUTO_PICTURE_IN_PICTURE]]" icon="settings:picture-in-picture" label="$i18n{siteSettingsAutoPictureInPicture}">
        </site-details-permission>
      </template>
    </div>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class WebsiteUsageBrowserProxyImpl{fetchUsageTotal(host){chrome.send("fetchUsageTotal",[host])}clearUsage(origin){chrome.send("clearUnpartitionedUsage",[origin])}static getInstance(){return instance$4||(instance$4=new WebsiteUsageBrowserProxyImpl)}static setInstance(obj){instance$4=obj}}let instance$4=null;
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SiteDetailsElementBase=RouteObserverMixin(SiteSettingsMixin(WebUiListenerMixin(I18nMixin(PolymerElement))));class SiteDetailsElement extends SiteDetailsElementBase{constructor(){super(...arguments);this.websiteUsageProxy_=WebsiteUsageBrowserProxyImpl.getInstance()}static get is(){return"site-details"}static get template(){return getTemplate$B()}static get properties(){return{blockAutoplayEnabled:Boolean,pageTitle:{type:String,notify:true},origin_:String,storedData_:{type:String,value:""},numCookies_:{type:String,value:""},fpsMembership_:{type:String,value:""},fpsEnterprisePref_:Object,enableExperimentalWebPlatformFeatures_:{type:Boolean,value(){return loadTimeData.getBoolean("enableExperimentalWebPlatformFeatures")}},enableWebBluetoothNewPermissionsBackend_:{type:Boolean,value:()=>loadTimeData.getBoolean("enableWebBluetoothNewPermissionsBackend")},autoPictureInPictureEnabled_:{type:Boolean,value:()=>loadTimeData.getBoolean("autoPictureInPictureEnabled")},blockMidiByDefault_:{type:Boolean,value:()=>loadTimeData.getBoolean("blockMidiByDefault")},contentSettingsTypesEnum_:{type:Object,value:ContentSettingsTypes},chooserTypeEnum_:{type:Object,value:ChooserType}}}connectedCallback(){super.connectedCallback();this.addWebUiListener("usage-total-changed",((host,data,cookies,fps,fpsPolicy)=>{this.onUsageTotalChanged_(host,data,cookies,fps,fpsPolicy)}));this.addWebUiListener("contentSettingSitePermissionChanged",((category,origin)=>this.onPermissionChanged_(category,origin)));this.browserProxy.fetchBlockAutoplayStatus()}currentRouteChanged(route){if(route!==routes.SITE_SETTINGS_SITE_DETAILS){return}const site=Router.getInstance().getQueryParameters().get("site");if(!site){return}this.origin_=site;this.browserProxy.isOriginValid(this.origin_).then((valid=>{if(!valid){Router.getInstance().navigateToPreviousRoute()}else{this.storedData_="";this.websiteUsageProxy_.fetchUsageTotal(this.origin_);this.browserProxy.getCategoryList(this.origin_).then((categoryList=>{this.updatePermissions_(categoryList,true)}))}}))}onPermissionChanged_(category,origin){if(this.origin_===undefined||this.origin_===""||origin===undefined||origin===""){return}this.browserProxy.getCategoryList(this.origin_).then((categoryList=>{if(categoryList.includes(category)){this.updatePermissions_([category],false)}}))}onUsageTotalChanged_(origin,usage,cookies,fpsMembership,fpsPolicy){if(this.origin_===origin){this.storedData_=usage;this.numCookies_=cookies;this.fpsMembership_=fpsMembership;this.fpsEnterprisePref_=fpsPolicy?Object.assign({enforcement:chrome.settingsPrivate.Enforcement.ENFORCED,controlledBy:chrome.settingsPrivate.ControlledBy.DEVICE_POLICY}):undefined}}updatePermissions_(categoryList,hideOthers){const permissionsMap=Array.prototype.reduce.call(this.shadowRoot.querySelectorAll("site-details-permission"),((map,element)=>{if(categoryList.includes(element.category)){map[element.category]=element}else if(hideOthers){element.site=null}return map}),{});this.browserProxy.getOriginPermissions(this.origin_,categoryList).then((exceptionList=>{exceptionList.forEach(((exception,i)=>{if(permissionsMap[categoryList[i]]){permissionsMap[categoryList[i]].site=exception}}));assert(exceptionList.length>0);this.pageTitle=exceptionList[0].displayName}))}onCloseDialog_(e){e.target.closest("cr-dialog").close()}onConfirmClearSettings_(e){e.preventDefault();this.$.confirmResetSettings.showModal()}onConfirmClearStorage_(e){e.preventDefault();this.$.confirmClearStorage.showModal()}onResetSettings_(e){this.browserProxy.setOriginPermissions(this.origin_,null,ContentSetting.DEFAULT);this.onCloseDialog_(e)}onClearStorage_(e){MetricsBrowserProxyImpl.getInstance().recordSettingsPageHistogram(PrivacyElementInteractions.SITE_DETAILS_CLEAR_DATA);if(this.hasUsage_(this.storedData_,this.numCookies_)){this.websiteUsageProxy_.clearUsage(this.toUrl(this.origin_).href);this.storedData_="";this.numCookies_=""}this.onCloseDialog_(e)}hasUsage_(storage,cookies){return storage!==""||cookies!==""}hasDataAndCookies_(storage,cookies){return storage!==""&&cookies!==""}onResetSettingsDialogClosed_(){const toFocus=this.shadowRoot.querySelector("#resetSettingsButton");assert(toFocus);focusWithoutInk(toFocus)}onClearStorageDialogClosed_(){const toFocus=this.shadowRoot.querySelector("#clearStorage");assert(toFocus);focusWithoutInk(toFocus)}}customElements.define(SiteDetailsElement.is,SiteDetailsElement);function getTemplate$A(){return html`<!--_html_template_start_-->    <style include="settings-shared">:host{display:block}.zoom-label{color:var(--cr-secondary-text-color);margin-inline-end:16px}#empty{margin-top:15px}.list-item site-favicon{flex-shrink:0}.list-item .middle{overflow-x:hidden;text-overflow:ellipsis}</style>
    <div class="list-frame vertical-list" id="listContainer">
      <iron-list id="list" preserve-focus items="[[sites_]]" class="cr-separators" risk-selection>
        <template>
          <div class="list-item" first$="[[!index]]">
            <site-favicon url="[[item.originForFavicon]]"></site-favicon>
            <div class="middle">
              <span class="url-directionality">[[item.displayName]]</span>
            </div>
            <div class="zoom-label">[[item.zoom]]</div>
            <cr-icon-button class="icon-clear" on-click="removeZoomLevel_" title="$i18n{siteSettingsRemoveZoomLevel}" tabindex$="[[tabIndex]]"></cr-icon-button>
          </div>
        </template>
      </iron-list>
      <div id="empty" hidden$="[[!showNoSites_]]">
        $i18n{siteSettingsNoZoomedSites}
      </div>
    </div>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ZoomLevelsElementBase=ListPropertyUpdateMixin(SiteSettingsMixin(WebUiListenerMixin(PolymerElement)));class ZoomLevelsElement extends ZoomLevelsElementBase{static get is(){return"zoom-levels"}static get template(){return getTemplate$A()}static get properties(){return{sites_:{type:Array,value:()=>[]},showNoSites_:{type:Boolean,value:false}}}ready(){super.ready();this.addWebUiListener("onZoomLevelsChanged",(sites=>this.onZoomLevelsChanged_(sites)));this.browserProxy.fetchZoomLevels()}onZoomLevelsChanged_(sites){this.updateList("sites_",(item=>item.hostOrSpec),sites);this.showNoSites_=this.sites_.length===0}removeZoomLevel_(event){const site=this.sites_[event.model.index];this.browserProxy.removeZoomLevel(site.hostOrSpec)}}customElements.define(ZoomLevelsElement.is,ZoomLevelsElement);function getTemplate$z(){return html`<!--_html_template_start_-->    <style include="cr-shared-style settings-shared iron-flex">.delete-profile-warning{padding-bottom:10px;padding-inline-end:var(--cr-section-padding);padding-inline-start:calc(var(--cr-section-padding) + 32px);padding-top:10px}#wideFooter{padding:0}#dialog-body{padding-bottom:2px}</style>

    <cr-dialog id="dialog" ignore-enter-key close-text="$i18n{close}">
      <div slot="title">$i18n{syncDisconnectTitle}</div>
      <div id="dialog-body" slot="body">
        <div inner-h-t-m-l="[[
            getDisconnectExplanationHtml_(syncStatus.domain)]]">
        </div>
      </div>
      <div slot="button-container">
        <cr-button id="disconnectCancel" class="cancel-button" on-click="onDisconnectCancel_">
          $i18n{cancel}
        </cr-button>
        <cr-button id="disconnectConfirm" class="action-button" hidden="[[isClearProfileConfirmButtonVisible_(syncStatus.domain)]]" on-click="onDisconnectConfirm_">
          $i18n{syncDisconnect}
        </cr-button>
        <cr-button id="disconnectManagedProfileConfirm" class="action-button" hidden="[[!isClearProfileConfirmButtonVisible_(syncStatus.domain)]]" on-click="onDisconnectConfirm_">
          $i18n{syncDisconnectConfirm}
        </cr-button>
      </div>

    </cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsSignoutDialogElementBase=WebUiListenerMixin(PolymerElement);class SettingsSignoutDialogElement extends SettingsSignoutDialogElementBase{static get is(){return"settings-signout-dialog"}static get template(){return getTemplate$z()}static get properties(){return{syncStatus:{type:Object,observer:"syncStatusChanged_"},deleteProfile_:Boolean,deleteProfileWarningVisible_:Boolean,deleteProfileWarning_:String}}connectedCallback(){super.connectedCallback();this.addWebUiListener("profile-stats-count-ready",this.handleProfileStatsCount_.bind(this));microTask.run((()=>{this.$.dialog.showModal()}))}wasConfirmed(){return this.$.dialog.getNative().returnValue==="success"}handleProfileStatsCount_(count){const username=this.syncStatus.signedInUsername||"";if(count===0){this.deleteProfileWarning_=loadTimeData.getStringF("deleteProfileWarningWithoutCounts",username)}else if(count===1){this.deleteProfileWarning_=loadTimeData.getStringF("deleteProfileWarningWithCountsSingular",username)}else{this.deleteProfileWarning_=loadTimeData.getStringF("deleteProfileWarningWithCountsPlural",count,username)}}syncStatusChanged_(){if(!this.syncStatus.signedIn&&this.$.dialog.open){this.$.dialog.close()}}getDisconnectExplanationHtml_(_domain){return sanitizeInnerHtml(loadTimeData.getString("syncDisconnectExplanation"))}onDisconnectCancel_(){this.$.dialog.cancel()}onDisconnectConfirm_(){this.$.dialog.close();SyncBrowserProxyImpl.getInstance().turnOffSync()}isDeleteProfileFooterVisible_(){return!this.isClearProfileConfirmButtonVisible_()}isClearProfileConfirmButtonVisible_(){return!!this.syncStatus.domain&&!loadTimeData.getBoolean("turnOffSyncAllowedForManagedProfiles")}}customElements.define(SettingsSignoutDialogElement.is,SettingsSignoutDialogElement);function getTemplate$y(){return html`<!--_html_template_start_--><style include="cr-shared-style">:host{--cr-localized-link-display:inline;display:block}:host([link-disabled]){cursor:pointer;opacity:var(--cr-disabled-opacity);pointer-events:none}a{display:var(--cr-localized-link-display)}a[href]{color:var(--cr-link-color)}a[is=action-link]{user-select:none}#container{display:contents}</style>

<div id="container"></div>
<!--_html_template_end_-->`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class LocalizedLinkElement extends PolymerElement{static get is(){return"localized-link"}static get template(){return getTemplate$y()}static get properties(){return{localizedString:String,linkUrl:{type:String,value:""},linkDisabled:{type:Boolean,value:false,reflectToAttribute:true,observer:"updateAnchorTagTabIndex_"},containerInnerHTML_:{type:String,value:"",computed:"getAriaLabelledContent_(localizedString, linkUrl)",observer:"setContainerInnerHtml_"}}}getAriaLabelledContent_(localizedString,linkUrl){const tempEl=document.createElement("div");tempEl.innerHTML=sanitizeInnerHtml(localizedString,{attrs:["id"]});const ariaLabelledByIds=[];tempEl.childNodes.forEach(((node,index)=>{if(node.nodeType===Node.TEXT_NODE){const spanNode=document.createElement("span");spanNode.textContent=node.textContent;spanNode.id=`id${index}`;ariaLabelledByIds.push(spanNode.id);spanNode.setAttribute("aria-hidden","true");node.replaceWith(spanNode);return}if(node.nodeType===Node.ELEMENT_NODE&&node.nodeName==="A"){const element=node;element.id=`id${index}`;ariaLabelledByIds.push(element.id);return}assertNotReached("localized-link has invalid node types")}));const anchorTags=tempEl.querySelectorAll("a");if(anchorTags.length===0){return localizedString}assert(anchorTags.length===1,"localized-link should contain exactly one anchor tag");const anchorTag=anchorTags[0];anchorTag.setAttribute("aria-labelledby",ariaLabelledByIds.join(" "));anchorTag.tabIndex=this.linkDisabled?-1:0;if(linkUrl!==""){anchorTag.href=linkUrl;anchorTag.target="_blank"}return tempEl.innerHTML}setContainerInnerHtml_(){this.$.container.innerHTML=sanitizeInnerHtml(this.containerInnerHTML_,{attrs:["aria-hidden","aria-labelledby","id","tabindex"]});const anchorTag=this.shadowRoot.querySelector("a");if(anchorTag){anchorTag.addEventListener("click",(event=>this.onAnchorTagClick_(event)));anchorTag.addEventListener("auxclick",(event=>{if(event.button===1){this.onAnchorTagClick_(event)}}))}}onAnchorTagClick_(event){if(this.linkDisabled){event.preventDefault();return}this.dispatchEvent(new CustomEvent("link-clicked",{bubbles:true,composed:true,detail:{event:event}}));event.stopPropagation()}updateAnchorTagTabIndex_(){const anchorTag=this.shadowRoot.querySelector("a");if(!anchorTag){return}anchorTag.tabIndex=this.linkDisabled?-1:0}}customElements.define(LocalizedLinkElement.is,LocalizedLinkElement);function getTemplate$x(){return html`<!--_html_template_start_-->    <style include="cr-shared-style settings-shared iron-flex">#sync-data-types .list-item:not([hidden])~.list-item:not([hidden]){border-top:var(--cr-separator-line)}.list-item{display:flex}.list-item>div:not(.separator){flex:1}cr-policy-indicator{margin-inline-end:var(--cr-controlled-by-spacing)}</style>


    <div class="settings-box first">
      <localized-link class="secondary" localized-string="$i18n{browserSyncFeatureLabel}" link-url="$i18n{osSyncSettingsUrl}">
      </localized-link>
    </div>


    <div id="sync-data-radio" class="cr-row first">
      <cr-radio-group selected="[[selectedSyncDataRadio_(syncPrefs)]]" on-selected-changed="onSyncDataRadioSelectionChanged_">
        <cr-radio-button name="sync-everything">
          $i18n{syncEverythingCheckboxLabel}
        </cr-radio-button>
        <cr-radio-button name="customize-sync">
          $i18n{customizeSyncLabel}
        </cr-radio-button>
      </cr-radio-group>
    </div>

    <div class="cr-row first">
      <h2 class="cr-title-text flex">$i18n{syncData}</h2>
    </div>

    <div class="list-frame" id="sync-data-types">
      <div class="list-item" hidden="[[!syncPrefs.appsRegistered]]">

      <div id="appCheckboxLabel">$i18n{appCheckboxLabel}</div>
      <cr-policy-indicator indicator-type="userPolicy" hidden="[[!syncPrefs.appsManaged]]">
      </cr-policy-indicator>
      <cr-toggle checked="{{syncPrefs.appsSynced}}" on-change="onSingleSyncDataTypeChanged_" disabled="[[disableTypeCheckBox_(
              syncPrefs.syncAllDataTypes, syncPrefs.appsManaged)]]" aria-labelledby="appCheckboxLabel">
      </cr-toggle>


      </div>

      <div class="list-item" hidden="[[!syncPrefs.bookmarksRegistered]]">
        <div id="bookmarksCheckboxLabel">
          $i18n{bookmarksCheckboxLabel}
        </div>
        <cr-policy-indicator indicator-type="userPolicy" hidden="[[!syncPrefs.bookmarksManaged]]">
        </cr-policy-indicator>
        <cr-toggle checked="{{syncPrefs.bookmarksSynced}}" on-change="onSingleSyncDataTypeChanged_" disabled="[[disableTypeCheckBox_(
                syncPrefs.syncAllDataTypes, syncPrefs.bookmarksManaged)]]" aria-labelledby="bookmarksCheckboxLabel">
        </cr-toggle>
      </div>

      <div class="list-item" hidden="[[!syncPrefs.extensionsRegistered]]">
        <div id="extensionsCheckboxLabel">
          $i18n{extensionsCheckboxLabel}
        </div>
        <cr-policy-indicator indicator-type="userPolicy" hidden="[[!syncPrefs.extensionsManaged]]">
        </cr-policy-indicator>
        <cr-toggle checked="{{syncPrefs.extensionsSynced}}" on-change="onSingleSyncDataTypeChanged_" disabled="[[disableTypeCheckBox_(
                syncPrefs.syncAllDataTypes , syncPrefs.extensionsManaged)]]" aria-labelledby="extensionsCheckboxLabel">
        </cr-toggle>
      </div>

      <div class="list-item" hidden="[[!syncPrefs.typedUrlsRegistered]]">
        <div id="historyCheckboxLabel">
          $i18n{historyCheckboxLabel}
        </div>
        <cr-policy-indicator indicator-type="userPolicy" hidden="[[!syncPrefs.typedUrlsManaged]]">
        </cr-policy-indicator>
        <cr-toggle id="historyToggle" checked="{{syncPrefs.typedUrlsSynced}}" on-change="onSingleSyncDataTypeChanged_" disabled="[[disableTypeCheckBox_(
                syncPrefs.syncAllDataTypes , syncPrefs.typedUrlsManaged)]]" aria-labelledby="historyCheckboxLabel">
        </cr-toggle>
      </div>

      <div class="list-item" hidden="[[!syncPrefs.preferencesRegistered]]">
        <div id="settingsCheckboxLabel">
          $i18n{settingsCheckboxLabel}
        </div>
        <cr-policy-indicator indicator-type="userPolicy" hidden="[[!syncPrefs.preferencesManaged]]">
        </cr-policy-indicator>
        <cr-toggle checked="{{syncPrefs.preferencesSynced}}" on-change="onSingleSyncDataTypeChanged_" disabled="[[disableTypeCheckBox_(
                syncPrefs.syncAllDataTypes, syncPrefs.preferencesManaged)]]" aria-labelledby="settingsCheckboxLabel">
        </cr-toggle>
      </div>

      <div class="list-item" hidden="[[!syncPrefs.themesRegistered]]">
        <div id="themeCheckboxLabel">
          $i18n{themeCheckboxLabel}
        </div>
        <cr-policy-indicator indicator-type="userPolicy" hidden="[[!syncPrefs.themesManaged]]">
        </cr-policy-indicator>
        <cr-toggle checked="{{syncPrefs.themesSynced}}" on-change="onSingleSyncDataTypeChanged_" disabled="[[disableTypeCheckBox_(
                syncPrefs.syncAllDataTypes ,syncPrefs.themesManaged)]]" aria-labelledby="themeCheckboxLabel">
        </cr-toggle>
      </div>

      <div class="list-item" hidden="[[!syncPrefs.readingListRegistered]]">
        <div id="readingListCheckboxLabel">
          $i18n{readingListCheckboxLabel}
        </div>
        <cr-policy-indicator indicator-type="userPolicy" hidden="[[!syncPrefs.readingListManaged]]">
        </cr-policy-indicator>
        <cr-toggle checked="{{syncPrefs.readingListSynced}}" on-change="onSingleSyncDataTypeChanged_" disabled="[[disableTypeCheckBox_(
                syncPrefs.syncAllDataTypes ,syncPrefs.readingListManaged)]]" aria-labelledby="readingListCheckboxLabel">
        </cr-toggle>
      </div>

      <div class="list-item" hidden="[[!syncPrefs.tabsRegistered]]">
        <div id="openTabsCheckboxLabel">
          $i18n{openTabsCheckboxLabel}
        </div>
        <cr-policy-indicator indicator-type="userPolicy" hidden="[[!syncPrefs.tabsManaged]]">
        </cr-policy-indicator>
        <cr-toggle checked="{{syncPrefs.tabsSynced}}" on-change="onSingleSyncDataTypeChanged_" disabled="[[disableTypeCheckBox_(
              syncPrefs.syncAllDataTypes,syncPrefs.tabsManaged)]]" aria-labelledby="openTabsCheckboxLabel">
        </cr-toggle>
      </div>

      <div class="list-item" hidden="[[!syncPrefs.savedTabGroupsRegistered]]">
        <div id="savedTabGroupsCheckboxLabel">
          $i18n{savedTabGroupsCheckboxLabel}
        </div>
        <cr-policy-indicator indicator-type="userPolicy" hidden="[[!syncPrefs.savedTabGroupsManaged]]">
        </cr-policy-indicator>
        <cr-toggle checked="{{syncPrefs.savedTabGroupsSynced}}" on-change="onSingleSyncDataTypeChanged_" disabled="[[disableTypeCheckBox_(
              syncPrefs.syncAllDataTypes, syncPrefs.savedTabGroupsManaged)]]" aria-labelledby="savedTabGroupsCheckboxLabel">
        </cr-toggle>
      </div>

      <div class="list-item" hidden="[[!syncPrefs.passwordsRegistered]]">
        <div id="passwordsCheckboxLabel">
          $i18n{passwordsCheckboxLabel}
        </div>
        <cr-policy-indicator indicator-type="userPolicy" hidden="[[!syncPrefs.passwordsManaged]]">
        </cr-policy-indicator>
        <cr-toggle checked="{{syncPrefs.passwordsSynced}}" on-change="onSingleSyncDataTypeChanged_" disabled="[[disableTypeCheckBox_(
              syncPrefs.syncAllDataTypes, syncPrefs.passwordsManaged)]]" aria-labelledby="passwordsCheckboxLabel">
        </cr-toggle>
      </div>

      <div class="list-item" hidden="[[!syncPrefs.autofillRegistered]]">
        <div id="autofillCheckboxLabel">
          $i18n{autofillCheckboxLabel}
        </div>
        
        <cr-policy-indicator indicator-type="userPolicy" hidden="[[!syncPrefs.autofillManaged]]">
         </cr-policy-indicator>
        <cr-toggle id="autofillCheckbox" checked="{{syncPrefs.autofillSynced}}" on-change="onAutofillDataTypeChanged_" disabled="[[disableTypeCheckBox_(
              syncPrefs.syncAllDataTypes,syncPrefs.autofillManaged)]]" aria-labelledby="autofillCheckboxLabel">
        </cr-toggle>
      </div>
      <div class="list-item" hidden="[[shouldPaymentsCheckboxBeHidden_(
               syncPrefs.paymentsRegistered,
               syncPrefs.autofillRegistered)]]">
        
        <div>
          $i18n{paymentsCheckboxLabel}
        </div>
        <cr-policy-indicator indicator-type="userPolicy" hidden="[[!syncPrefs.paymentsManaged]]">
        </cr-policy-indicator>
        <cr-toggle id="paymentsCheckbox" checked="{{syncPrefs.paymentsSynced}}" on-change="onSingleSyncDataTypeChanged_" disabled="[[disablePaymentsCheckbox_(
                syncPrefs.syncAllDataTypes, syncPrefs.autofillSynced,
                syncPrefs.autofillManaged, syncPrefs.paymentsManaged)]]" aria-label="$i18n{paymentsCheckboxLabel}">
        </cr-toggle>
      </div>


      <div class="list-item" hidden="[[!syncPrefs.wifiConfigurationsRegistered]]">
        <div id="wifiConfigurationsCheckboxLabel">
          $i18n{wifiConfigurationsCheckboxLabel}
        </div>
        <cr-policy-indicator indicator-type="userPolicy" hidden="[[!syncPrefs.wifiConfigurationsManaged]]">
        </cr-policy-indicator>
        <cr-toggle checked="{{syncPrefs.wifiConfigurationsSynced}}" on-change="onSingleSyncDataTypeChanged_" disabled="[[disableTypeCheckBox_(
              syncPrefs.syncAllDataTypes,syncPrefs.wifiConfigurationsManaged)]]" aria-labelledby="wifiConfigurationsCheckboxLabel">
        </cr-toggle>
      </div>
    </div>

<!--_html_template_end_-->`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var RadioButtonNames$1;(function(RadioButtonNames){RadioButtonNames["SYNC_EVERYTHING"]="sync-everything";RadioButtonNames["CUSTOMIZE_SYNC"]="customize-sync"})(RadioButtonNames$1||(RadioButtonNames$1={}));const SYNC_DECOUPLE_ADDRESS_PAYMENT_SETTINGS_FEATURE="syncDecoupleAddressPaymentSettings";const SettingsSyncControlsElementBase=WebUiListenerMixin(PolymerElement);class SettingsSyncControlsElement extends SettingsSyncControlsElementBase{static get is(){return"settings-sync-controls"}static get template(){return getTemplate$x()}static get properties(){return{hidden:{type:Boolean,value:false,computed:"syncControlsHidden_("+"syncStatus.signedIn, syncStatus.disabled, syncStatus.hasError)",reflectToAttribute:true},syncPrefs:Object,syncStatus:{type:Object,observer:"syncStatusChanged_"}}}constructor(){super();this.browserProxy_=SyncBrowserProxyImpl.getInstance();this.cachedSyncPrefs_=null}connectedCallback(){super.connectedCallback();this.addWebUiListener("sync-prefs-changed",this.handleSyncPrefsChanged_.bind(this));const router=Router.getInstance();if(router.getCurrentRoute()===router.getRoutes().SYNC_ADVANCED){this.browserProxy_.didNavigateToSyncPage()}}handleSyncPrefsChanged_(syncPrefs){this.syncPrefs=syncPrefs;if(!loadTimeData.getBoolean(SYNC_DECOUPLE_ADDRESS_PAYMENT_SETTINGS_FEATURE)&&(!this.syncPrefs.autofillRegistered||!this.syncPrefs.autofillSynced)){this.set("syncPrefs.paymentsSynced",false)}}selectedSyncDataRadio_(){return this.syncPrefs.syncAllDataTypes?RadioButtonNames$1.SYNC_EVERYTHING:RadioButtonNames$1.CUSTOMIZE_SYNC}onSyncDataRadioSelectionChanged_(event){const syncAllDataTypes=event.detail.value===RadioButtonNames$1.SYNC_EVERYTHING;this.set("syncPrefs.syncAllDataTypes",syncAllDataTypes);this.handleSyncAllDataTypesChanged_(syncAllDataTypes)}handleSyncAllDataTypesChanged_(syncAllDataTypes){if(syncAllDataTypes){this.set("syncPrefs.syncAllDataTypes",true);this.cachedSyncPrefs_={};for(const dataType of syncPrefsIndividualDataTypes){this.cachedSyncPrefs_[dataType]=this.syncPrefs[dataType];this.set(["syncPrefs",dataType],true)}}else if(this.cachedSyncPrefs_){for(const dataType of syncPrefsIndividualDataTypes){this.set(["syncPrefs",dataType],this.cachedSyncPrefs_[dataType])}}chrome.metricsPrivate.recordUserAction(syncAllDataTypes?"Sync_SyncEverything":"Sync_CustomizeSync");this.onSingleSyncDataTypeChanged_()}onSingleSyncDataTypeChanged_(){assert(this.syncPrefs);this.browserProxy_.setSyncDatatypes(this.syncPrefs)}onAutofillDataTypeChanged_(){if(!loadTimeData.getBoolean(SYNC_DECOUPLE_ADDRESS_PAYMENT_SETTINGS_FEATURE)){this.set("syncPrefs.paymentsSynced",this.syncPrefs.autofillSynced)}this.onSingleSyncDataTypeChanged_()}shouldPaymentsCheckboxBeHidden_(paymentsRegistered,autofillRegistered){if(loadTimeData.getBoolean(SYNC_DECOUPLE_ADDRESS_PAYMENT_SETTINGS_FEATURE)){return!paymentsRegistered}else{return!paymentsRegistered||!autofillRegistered}}disablePaymentsCheckbox_(syncAllDataTypes,autofillSynced,autofillManaged,paymentsManaged){if(loadTimeData.getBoolean(SYNC_DECOUPLE_ADDRESS_PAYMENT_SETTINGS_FEATURE)){return this.disableTypeCheckBox_(syncAllDataTypes,paymentsManaged)}else{return this.disableTypeCheckBox_(syncAllDataTypes,paymentsManaged)||!autofillSynced||autofillManaged}}disableTypeCheckBox_(syncAllDataTypes,dataTypeManaged){return syncAllDataTypes||dataTypeManaged}syncStatusChanged_(){const router=Router.getInstance();const routes=router.getRoutes();if(router.getCurrentRoute()===routes.SYNC_ADVANCED&&this.syncControlsHidden_()){router.navigateTo(routes.SYNC)}}syncControlsHidden_(){if(!this.syncStatus){return false}if(!this.syncStatus.signedIn||this.syncStatus.disabled){return true}return!!this.syncStatus.hasError&&this.syncStatus.statusAction!==StatusAction.ENTER_PASSPHRASE&&this.syncStatus.statusAction!==StatusAction.RETRIEVE_TRUSTED_VAULT_KEYS}}customElements.define(SettingsSyncControlsElement.is,SettingsSyncControlsElement);function getTemplate$w(){return html`<!--_html_template_start_-->    <style include="cr-shared-style settings-shared">#create-password-box{margin-bottom:1em}#create-password-box .list-item{margin-bottom:var(--cr-form-field-bottom-spacing)}cr-input{--cr-input-width:var(--cr-default-input-max-width)}.passphrase-reset-icon{margin-inline-end:8px}cr-radio-button[name=encrypt-with-passphrase]{align-items:start}</style>

    <template is="dom-if" if="[[!syncPrefs.passphraseRequired]]">
      <div id="encryptionRadioGroupContainer" class="list-frame">
        <cr-radio-group id="encryptionRadioGroup" selected="[[selectedEncryptionRadio_(syncPrefs)]]" on-selected-changed="onEncryptionRadioSelectionChanged_" disabled$="[[disableEncryptionOptions_]]">
          <cr-radio-button name="encrypt-with-google" class="list-item" aria-label="$i18n{encryptWithGoogleCredentialsLabel}">
            $i18n{encryptWithGoogleCredentialsLabel}
          </cr-radio-button>
          <cr-radio-button name="encrypt-with-passphrase" class="list-item">
            <span hidden="[[!existingPassphraseLabel]]">
              [[existingPassphraseLabel]]
            </span>
            <span on-click="onLearnMoreClick_" hidden="[[existingPassphraseLabel]]">
              $i18nRaw{encryptWithSyncPassphraseLabel}
            </span>
            <template is="dom-if" if="[[creatingNewPassphrase_]]" restamp>
              <div id="create-password-box">
                <div class="list-item">
                  <span>$i18nRaw{passphraseExplanationText}</span>
                </div>
                <cr-input id="passphraseInput" type="password" value="{{passphrase_}}" placeholder="$i18n{passphrasePlaceholder}" error-message="$i18n{emptyPassphraseError}" on-keypress="onNewPassphraseInputKeypress_">
                </cr-input>
                <cr-input id="passphraseConfirmationInput" type="password" value="{{confirmation_}}" placeholder="$i18n{passphraseConfirmationPlaceholder}" error-message="$i18n{mismatchedPassphraseError}" on-keypress="onNewPassphraseInputKeypress_">
                </cr-input>
                <cr-button id="saveNewPassphrase" on-click="onSaveNewPassphraseClick_" class="action-button" disabled="[[!isSaveNewPassphraseEnabled_(
                                  passphrase_, confirmation_)]]">
                  $i18n{save}
                </cr-button>
              </div>
            </template>
          </cr-radio-button>
        </cr-radio-group>
      </div>
    </template>

<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var RadioButtonNames;(function(RadioButtonNames){RadioButtonNames["ENCRYPT_WITH_GOOGLE"]="encrypt-with-google";RadioButtonNames["ENCRYPT_WITH_PASSPHRASE"]="encrypt-with-passphrase"})(RadioButtonNames||(RadioButtonNames={}));class SettingsSyncEncryptionOptionsElement extends PolymerElement{static get is(){return"settings-sync-encryption-options"}static get template(){return getTemplate$w()}static get properties(){return{syncPrefs:{type:Object,notify:true},syncStatus:Object,existingPassphraseLabel:{type:String},creatingNewPassphrase_:{type:Boolean,value:false},passphrase_:{type:String,value:""},confirmation_:{type:String,value:""},disableEncryptionOptions_:{type:Boolean,computed:"computeDisableEncryptionOptions_("+"syncPrefs, syncStatus)",observer:"disableEncryptionOptionsChanged_"}}}constructor(){super();this.isSettingEncryptionPassphrase_=false}getEncryptionsRadioButtons(){return this.shadowRoot.querySelector("cr-radio-group")}computeDisableEncryptionOptions_(){return!!(this.syncPrefs&&(this.syncPrefs.encryptAllData||!this.syncPrefs.customPassphraseAllowed||this.syncPrefs.trustedVaultKeysRequired)||this.syncStatus&&this.syncStatus.supervisedUser)}disableEncryptionOptionsChanged_(){if(this.disableEncryptionOptions_){this.creatingNewPassphrase_=false}}isSaveNewPassphraseEnabled_(passphrase,confirmation){return passphrase!==""&&confirmation!==""}onNewPassphraseInputKeypress_(e){if(e.type==="keypress"&&e.key!=="Enter"){return}this.saveNewPassphrase_()}onSaveNewPassphraseClick_(){this.saveNewPassphrase_()}saveNewPassphrase_(){assert(this.creatingNewPassphrase_);chrome.metricsPrivate.recordUserAction("Sync_SaveNewPassphraseClicked");if(this.isSettingEncryptionPassphrase_){return}if(!this.validateCreatedPassphrases_()){return}this.isSettingEncryptionPassphrase_=true;SyncBrowserProxyImpl.getInstance().setEncryptionPassphrase(this.passphrase_).then((successfullySet=>{this.dispatchEvent(new CustomEvent("passphrase-changed",{bubbles:true,composed:true,detail:{didChange:successfullySet}}));this.isSettingEncryptionPassphrase_=false}))}onEncryptionRadioSelectionChanged_(event){this.creatingNewPassphrase_=event.detail.value===RadioButtonNames.ENCRYPT_WITH_PASSPHRASE}selectedEncryptionRadio_(){return this.syncPrefs.encryptAllData||this.creatingNewPassphrase_?RadioButtonNames.ENCRYPT_WITH_PASSPHRASE:RadioButtonNames.ENCRYPT_WITH_GOOGLE}validateCreatedPassphrases_(){const emptyPassphrase=!this.passphrase_;const mismatchedPassphrase=this.passphrase_!==this.confirmation_;this.shadowRoot.querySelector("#passphraseInput").invalid=emptyPassphrase;this.shadowRoot.querySelector("#passphraseConfirmationInput").invalid=!emptyPassphrase&&mismatchedPassphrase;return!emptyPassphrase&&!mismatchedPassphrase}onLearnMoreClick_(event){if(event.target.tagName==="A"){event.stopPropagation()}}}customElements.define(SettingsSyncEncryptionOptionsElement.is,SettingsSyncEncryptionOptionsElement);function getTemplate$v(){return html`<!--_html_template_start_-->    <style include="settings-shared">:host(.list-frame) settings-toggle-button{padding-inline-end:0;padding-inline-start:0}:host(.list-frame) settings-toggle-button:first-of-type{border-top:none}:host(.list-frame) cr-link-row{padding-inline-end:8px;padding-inline-start:0}</style>


    <settings-toggle-button id="urlCollectionToggle" class="hr" pref="{{prefs.url_keyed_anonymized_data_collection.enabled}}" label="$i18n{urlKeyedAnonymizedDataCollection}" sub-label="$i18n{urlKeyedAnonymizedDataCollectionDesc}">
    </settings-toggle-button>
    <template is="dom-if" if="[[enablePageContentSetting_]]">
      <cr-link-row id="pageContentRow" class="hr" label="$i18n{pageContentToggleLabel}" sub-label="[[computePageContentRowSublabel_(
              prefs.page_content_collection.enabled.value)]]" role-description="$i18n{subpageArrowRoleDescription}" on-click="onPageContentRowClick_">
      </cr-link-row>
    </template>

    <template is="dom-if" if="[[showSearchSuggestToggle_()]]" restamp>
      <settings-toggle-button id="searchSuggestToggle" class="hr" pref="{{prefs.search.suggest_enabled}}" label="$i18n{searchSuggestPref}" sub-label="$i18n{searchSuggestPrefDesc}">
      </settings-toggle-button>
    </template>
    <template is="dom-if" if="[[shouldShowDriveSuggest_(
        syncStatus, syncStatus.signedIn, syncStatus.statusAction)]]" restamp>
      <settings-toggle-button id="driveSuggestControl" class="hr" pref="{{prefs.documentsuggest.enabled}}" label="$i18n{driveSuggestPref}" sub-label="$i18n{driveSuggestPrefDesc}">
      </settings-toggle-button>
    </template>

    <template is="dom-if" if="[[showPriceEmailNotificationsToggle_(
        syncStatus, syncStatus.signedIn)]]" restamp>
      <settings-toggle-button id="priceEmailNotificationsToggle" class="hr" label="$i18n{priceEmailNotificationsPref}" sub-label="[[getPriceEmailNotificationsPrefDesc_(syncStatus)]]" pref="{{prefs.price_tracking.email_notifications_enabled}}">
      </settings-toggle-button>
    </template>

    <template is="dom-if" if="[[showSignoutDialog_]]" restamp>
      <settings-signout-dialog sync-status="[[syncStatus]]" on-close="onSignoutDialogClosed_">
      </settings-signout-dialog>
    </template>


<!--_html_template_end_-->`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsPersonalizationOptionsElementBase=HelpBubbleMixin(RelaunchMixin(WebUiListenerMixin(I18nMixin(PrefsMixin(PolymerElement)))));const ANONYMIZED_URL_COLLECTION_ID="kAnonymizedUrlCollectionPersonalizationSettingId";class SettingsPersonalizationOptionsElement extends SettingsPersonalizationOptionsElementBase{constructor(){super(...arguments);this.browserProxy_=PrivacyPageBrowserProxyImpl.getInstance()}static get is(){return"settings-personalization-options"}static get template(){return getTemplate$v()}static get properties(){return{prefs:{type:Object,notify:true},focusConfig:{type:Object,observer:"onFocusConfigChange_"},pageVisibility:Object,syncStatus:Object,showSignoutDialog_:Boolean,syncFirstSetupInProgress_:{type:Boolean,value:false,computed:"computeSyncFirstSetupInProgress_(syncStatus)"},enablePageContentSetting_:{type:Boolean,value(){return loadTimeData.getBoolean("enablePageContentSetting")}}}}onFocusConfigChange_(){if(!this.enablePageContentSetting_){return}this.focusConfig.set(Router.getInstance().getRoutes().PAGE_CONTENT.path,(()=>{const toFocus=this.shadowRoot.querySelector("#pageContentRow");assert(toFocus);focusWithoutInk(toFocus)}))}computeSyncFirstSetupInProgress_(){return!!this.syncStatus&&!!this.syncStatus.firstSetupInProgress}showPriceEmailNotificationsToggle_(){return loadTimeData.getBoolean("changePriceEmailNotificationsEnabled")&&!!this.syncStatus&&!!this.syncStatus.signedIn}getPriceEmailNotificationsPrefDesc_(){const username=this.syncStatus.signedInUsername||"";return loadTimeData.getStringF("priceEmailNotificationsPrefDesc",username)}ready(){super.ready();this.registerHelpBubble(ANONYMIZED_URL_COLLECTION_ID,this.$.urlCollectionToggle.getBubbleAnchor(),{anchorPaddingTop:10})}getSearchSuggestToggle(){return this.shadowRoot.querySelector("#searchSuggestToggle")}getUrlCollectionToggle(){return this.shadowRoot.querySelector("#urlCollectionToggle")}getDriveSuggestToggle(){return this.shadowRoot.querySelector("#driveSuggestControl")}showSearchSuggestToggle_(){if(this.pageVisibility===undefined){return true}return this.pageVisibility.searchPrediction}navigateTo_(url){window.location.href=url}onMetricsReportingLinkClick_(){if(loadTimeData.getBoolean("osDeprecateSyncMetricsToggle")){this.navigateTo_(loadTimeData.getString("osPrivacySettingsUrl"))}else{this.navigateTo_(loadTimeData.getString("osSyncSetupSettingsUrl"))}}shouldShowDriveSuggest_(){if(loadTimeData.getBoolean("driveSuggestNoSetting")){return false}if(!loadTimeData.getBoolean("driveSuggestAvailable")){return false}if(loadTimeData.getBoolean("driveSuggestNoSyncRequirement")){return true}return!!this.syncStatus&&!!this.syncStatus.signedIn&&this.syncStatus.statusAction!==StatusAction.REAUTHENTICATE}onSigninAllowedChange_(){if(this.syncStatus.signedIn&&!this.$.signinAllowedToggle.checked){this.$.signinAllowedToggle.checked=true;this.showSignoutDialog_=true}else{this.$.signinAllowedToggle.sendPrefChange();this.$.toast.show()}}onSignoutDialogClosed_(){if(this.shadowRoot.querySelector("settings-signout-dialog").wasConfirmed()){this.$.signinAllowedToggle.checked=false;this.$.signinAllowedToggle.sendPrefChange();this.$.toast.show()}this.showSignoutDialog_=false}onRestartClick_(e){e.stopPropagation();this.performRestart(RestartType.RESTART)}onPageContentRowClick_(){const router=Router.getInstance();router.navigateTo(router.getRoutes().PAGE_CONTENT)}computePageContentRowSublabel_(){return this.getPref("page_content_collection.enabled").value?this.i18n("pageContentLinkRowSublabelOn"):this.i18n("pageContentLinkRowSublabelOff")}}customElements.define(SettingsPersonalizationOptionsElement.is,SettingsPersonalizationOptionsElement);function getTemplate$u(){return html`<!--_html_template_start_-->    <style include="cr-shared-style settings-shared iron-flex">#sync-separator{border-bottom:var(--cr-separator-line)}#create-password-box{margin-inline-start:var(--cr-section-indent-width)}#create-password-box{margin-bottom:1em}#create-password-box .list-item{margin-bottom:var(--cr-form-field-bottom-spacing)}cr-input{--cr-input-width:var(--cr-default-input-max-width)}#existingPassphrase{border-bottom:var(--cr-separator-line);border-top:var(--cr-separator-line);padding-inline-start:var(--cr-section-padding)}#submitExistingPassphrase{margin-inline-start:16px}#passphraseRecoverHint{align-items:center}#other-sync-items{padding-bottom:8px}.passphrase-reset-icon{margin-inline-end:8px}#disabled-by-admin-icon{text-align:center;width:40px}#toast{left:0;z-index:1}:host-context([dir=rtl]) #toast{left:auto;right:0}cr-link-row{padding-inline-end:0;padding-inline-start:0}</style>

    <template is="dom-if" if="[[shouldShowSyncAccountControl_(
        syncStatus.syncSystemEnabled)]]">
      <settings-sync-account-control embedded-in-subpage sync-status="[[syncStatus]]" prefs="{{prefs}}" promo-label-with-account="$i18n{peopleSignInSyncPagePromptSecondaryWithAccount}" promo-label-with-no-account="$i18n{peopleSignInSyncPagePromptSecondaryWithNoAccount}" on-sync-setup-done="onSyncSetupDone_">
      </settings-sync-account-control>
    </template>
    <div class="cr-row first" hidden="[[!syncDisabledByAdmin_]]">
      <iron-icon id="disabled-by-admin-icon" icon="cr20:domain"></iron-icon>
      <div class="flex cr-padded-text">
        $i18n{syncDisabledByAdministrator}
      </div>
    </div>

    <template is="dom-if" if="[[showExistingPassphraseBelowAccount_]]" on-dom-change="focusPassphraseInput_">
      <div id="existingPassphrase" class="list-frame">
        <div id="existingPassphraseTitle" class="list-item">
            <div class="start cr-padded-text">
              <div>$i18n{existingPassphraseTitle}</div>
              <div id="enterPassphraseLabel" class="secondary" inner-h-t-m-l="[[enterPassphraseLabel_]]">
              </div>
            </div>
        </div>
        <div id="existingPassphraseContainer" class="list-item">
          <cr-input id="existingPassphraseInput" type="password" value="{{existingPassphrase_}}" placeholder="$i18n{passphrasePlaceholder}" error-message="$i18n{incorrectPassphraseError}" on-keypress="onSubmitExistingPassphraseClick_">
            <cr-button id="submitExistingPassphrase" slot="suffix" on-click="onSubmitExistingPassphraseClick_" class="action-button" disabled="[[!existingPassphrase_]]">
              $i18n{submitPassphraseButton}
            </cr-button>
          </cr-input>
        </div>
        <div id="passphraseRecoverHint" class="list-item">
          <div class="cr-padded-text">$i18nRaw{passphraseRecover}</div>
        </div>
      </div>
    </template>

    <div id="sync-separator" hidden="[[!syncSectionDisabled_]]"></div>

    <div id="sync-section" hidden="[[syncSectionDisabled_]]">
      <div class="cr-row first">
        <h2 class="cr-title-text">$i18n{sync}</h2>
      </div>

      <div id="[[pageStatusEnum_.SPINNER]]" class="cr-row first cr-padded-text" hidden$="[[!isStatus_(pageStatusEnum_.SPINNER, pageStatus_)]]">
        $i18n{syncLoading}
      </div>
      <div id="[[pageStatusEnum_.CONFIGURE]]" hidden$="[[!isStatus_(pageStatusEnum_.CONFIGURE, pageStatus_)]]">
        <div id="other-sync-items" class="list-frame">
          <cr-link-row id="sync-advanced-row" label="$i18n{syncAdvancedPageTitle}" role-description="$i18n{subpageArrowRoleDescription}" on-click="onSyncAdvancedClick_">
          </cr-link-row>



          <cr-link-row class="hr" label="$i18n{personalizeGoogleServicesTitle}" on-click="onActivityControlsClick_" external>
          </cr-link-row>

          <cr-link-row id="syncDashboardLink" class="hr" label="$i18n{manageSyncedDataTitle}" sub-label="[[getManageSyncedDataSubtitle_(
                      showSyncSettingsRevamp_)]]" on-click="onSyncDashboardLinkClick_" hidden="[[syncStatus.supervisedUser]]" external>
          </cr-link-row>

          <cr-expand-button id="encryptionDescription" hidden="[[syncPrefs.passphraseRequired]]" expanded="{{encryptionExpanded_}}" class="hr">
            $i18n{encryptionOptionsTitle}
            <div class="secondary">
              $i18n{syncDataEncryptedText}
              <div on-click="onResetSyncClick_" hidden="[[!syncPrefs.encryptAllData]]">
                <iron-icon icon="cr:info-outline" class="passphrase-reset-icon">
                </iron-icon>
                $i18nRaw{passphraseResetHintEncryption}
              </div>
            </div>
          </cr-expand-button>

          <iron-collapse id="encryptionCollapse" opened="[[encryptionExpanded_]]">
            <settings-sync-encryption-options sync-status="[[syncStatus]]" sync-prefs="{{syncPrefs}}" existing-passphrase-label="[[existingPassphraseLabel_]]" on-passphrase-changed="onPassphraseChanged_">
            </settings-sync-encryption-options>
          </iron-collapse>

        </div>
      </div>
    </div>

    <div class="cr-row first">
      <h2 class="cr-title-text">
        $i18n{nonPersonalizedServicesSectionLabel}
      </h2>
    </div>
    <settings-personalization-options class="list-frame" prefs="{{prefs}}" page-visibility="[[pageVisibility]]" sync-status="[[syncStatus]]" focus-config="[[focusConfig]]">
    </settings-personalization-options>


<!--_html_template_end_-->`}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsSyncPageElementBase=RouteObserverMixin(WebUiListenerMixin(I18nMixin(PolymerElement)));class SettingsSyncPageElement extends SettingsSyncPageElementBase{static get is(){return"settings-sync-page"}static get template(){return getTemplate$u()}static get properties(){return{prefs:{type:Object,notify:true},focusConfig:{type:Object,observer:"onFocusConfigChange_"},pageStatusEnum_:{type:Object,value:PageStatus,readOnly:true},pageStatus_:{type:String,value:PageStatus.CONFIGURE},pageVisibility:Object,syncPrefs:Object,syncStatus:Object,dataEncrypted_:{type:Boolean,computed:"computeDataEncrypted_(syncPrefs.encryptAllData)"},encryptionExpanded_:{type:Boolean,value:false},forceEncryptionExpanded:{type:Boolean,value:false},existingPassphrase_:{type:String,value:""},showExistingPassphraseBelowAccount_:{type:Boolean,value:false,computed:"computeShowExistingPassphraseBelowAccount_("+"syncStatus.signedIn, syncPrefs.passphraseRequired)"},signedIn_:{type:Boolean,value:true,computed:"computeSignedIn_(syncStatus.signedIn)"},syncDisabledByAdmin_:{type:Boolean,value:false,computed:"computeSyncDisabledByAdmin_(syncStatus.managed)"},syncSectionDisabled_:{type:Boolean,value:false,computed:"computeSyncSectionDisabled_("+"syncStatus.signedIn, syncStatus.disabled, "+"syncStatus.hasError, syncStatus.statusAction, "+"syncPrefs.trustedVaultKeysRequired)"},enterPassphraseLabel_:{type:String,computed:"computeEnterPassphraseLabel_(syncPrefs.encryptAllData,"+"syncPrefs.explicitPassphraseTime)"},existingPassphraseLabel_:{type:String,computed:"computeExistingPassphraseLabel_(syncPrefs.encryptAllData,"+"syncPrefs.explicitPassphraseTime)"}}}static get observers(){return["expandEncryptionIfNeeded_(dataEncrypted_, forceEncryptionExpanded)"]}constructor(){super();this.browserProxy_=SyncBrowserProxyImpl.getInstance();this.beforeunloadCallback_=null;this.unloadCallback_=null;this.collapsibleSectionsInitialized_=false;this.didAbort_=true;this.setupCancelConfirmed_=false}connectedCallback(){super.connectedCallback();this.addWebUiListener("page-status-changed",this.handlePageStatusChanged_.bind(this));this.addWebUiListener("sync-prefs-changed",this.handleSyncPrefsChanged_.bind(this));const router=Router.getInstance();if(router.getCurrentRoute()===router.getRoutes().SYNC){this.onNavigateToPage_()}}disconnectedCallback(){super.disconnectedCallback();const router=Router.getInstance();if(router.getRoutes().SYNC.contains(router.getCurrentRoute())){this.onNavigateAwayFromPage_()}if(this.beforeunloadCallback_){window.removeEventListener("beforeunload",this.beforeunloadCallback_);this.beforeunloadCallback_=null}if(this.unloadCallback_){window.removeEventListener("unload",this.unloadCallback_);this.unloadCallback_=null}}getEncryptionOptions(){return this.shadowRoot.querySelector("settings-sync-encryption-options")}getPersonalizationOptions(){return this.shadowRoot.querySelector("settings-personalization-options")}computeSignedIn_(){return!!this.syncStatus.signedIn}computeSyncSectionDisabled_(){return this.syncStatus!==undefined&&(!this.syncStatus.signedIn||!!this.syncStatus.disabled||!!this.syncStatus.hasError&&this.syncStatus.statusAction!==StatusAction.ENTER_PASSPHRASE&&this.syncStatus.statusAction!==StatusAction.RETRIEVE_TRUSTED_VAULT_KEYS)}computeSyncDisabledByAdmin_(){return this.syncStatus!==undefined&&!!this.syncStatus.managed}onFocusConfigChange_(){this.focusConfig.set(Router.getInstance().getRoutes().SYNC_ADVANCED.path,(()=>{const toFocus=this.shadowRoot.querySelector("#sync-advanced-row");assert(toFocus);focusWithoutInk(toFocus)}))}currentRouteChanged(){const router=Router.getInstance();if(router.getCurrentRoute()===router.getRoutes().SYNC){this.onNavigateToPage_();return}if(router.getRoutes().SYNC.contains(router.getCurrentRoute())){return}const searchParams=Router.getInstance().getQueryParameters().get("search");if(searchParams){this.onNavigateAwayFromPage_();return}this.onNavigateAwayFromPage_()}isStatus_(expectedPageStatus){return expectedPageStatus===this.pageStatus_}onNavigateToPage_(){const router=Router.getInstance();assert(router.getCurrentRoute()===router.getRoutes().SYNC);if(this.beforeunloadCallback_){return}this.collapsibleSectionsInitialized_=false;this.pageStatus_=PageStatus.SPINNER;this.browserProxy_.didNavigateToSyncPage();this.beforeunloadCallback_=event=>{if(this.syncStatus&&this.syncStatus.firstSetupInProgress){event.preventDefault();chrome.metricsPrivate.recordUserAction("Signin_Signin_AbortAdvancedSyncSettings")}};window.addEventListener("beforeunload",this.beforeunloadCallback_);this.unloadCallback_=this.onNavigateAwayFromPage_.bind(this);window.addEventListener("unload",this.unloadCallback_)}onNavigateAwayFromPage_(){if(!this.beforeunloadCallback_){return}this.pageStatus_=PageStatus.CONFIGURE;this.browserProxy_.didNavigateAwayFromSyncPage(this.didAbort_);window.removeEventListener("beforeunload",this.beforeunloadCallback_);this.beforeunloadCallback_=null;if(this.unloadCallback_){window.removeEventListener("unload",this.unloadCallback_);this.unloadCallback_=null}}handleSyncPrefsChanged_(syncPrefs){this.syncPrefs=syncPrefs;this.pageStatus_=PageStatus.CONFIGURE}onActivityControlsClick_(){chrome.metricsPrivate.recordUserAction("Sync_OpenActivityControlsPage");this.browserProxy_.openActivityControlsUrl();window.open(loadTimeData.getString("activityControlsUrl"))}onSyncDashboardLinkClick_(){window.open(loadTimeData.getString("syncDashboardUrl"))}computeDataEncrypted_(){return!!this.syncPrefs&&this.syncPrefs.encryptAllData}computeEnterPassphraseLabel_(){if(!this.syncPrefs||!this.syncPrefs.encryptAllData){return window.trustedTypes.emptyHTML}if(!this.syncPrefs.explicitPassphraseTime){return this.i18nAdvanced("enterPassphraseLabel")}return this.i18nAdvanced("enterPassphraseLabelWithDate",{tags:["a"],substitutions:[loadTimeData.getString("syncErrorsHelpUrl"),this.syncPrefs.explicitPassphraseTime]})}computeExistingPassphraseLabel_(){if(!this.syncPrefs||!this.syncPrefs.encryptAllData){return window.trustedTypes.emptyHTML}if(!this.syncPrefs.explicitPassphraseTime){return this.i18nAdvanced("existingPassphraseLabel")}return this.i18nAdvanced("existingPassphraseLabelWithDate",{substitutions:[this.syncPrefs.explicitPassphraseTime]})}expandEncryptionIfNeeded_(){if(this.forceEncryptionExpanded){this.forceEncryptionExpanded=false;this.encryptionExpanded_=true;return}this.encryptionExpanded_=this.dataEncrypted_}onResetSyncClick_(event){if(event.target.tagName==="A"){event.stopPropagation()}}onSubmitExistingPassphraseClick_(e){if(e.type==="keypress"&&e.key!=="Enter"){return}this.browserProxy_.setDecryptionPassphrase(this.existingPassphrase_).then((sucessfullySet=>this.handlePageStatusChanged_(this.computePageStatusAfterPassphraseChange_(sucessfullySet))));this.existingPassphrase_=""}onPassphraseChanged_(e){this.handlePageStatusChanged_(this.computePageStatusAfterPassphraseChange_(e.detail.didChange))}computePageStatusAfterPassphraseChange_(successfullyChanged){if(!successfullyChanged){return PageStatus.PASSPHRASE_FAILED}return this.syncStatus&&this.syncStatus.firstSetupInProgress?PageStatus.CONFIGURE:PageStatus.DONE}handlePageStatusChanged_(pageStatus){const router=Router.getInstance();switch(pageStatus){case PageStatus.SPINNER:case PageStatus.CONFIGURE:this.pageStatus_=pageStatus;return;case PageStatus.DONE:if(router.getCurrentRoute()===router.getRoutes().SYNC){router.navigateTo(router.getRoutes().PEOPLE)}return;case PageStatus.PASSPHRASE_FAILED:if(this.pageStatus_===PageStatus.CONFIGURE&&this.syncPrefs&&this.syncPrefs.passphraseRequired){const passphraseInput=this.shadowRoot.querySelector("#existingPassphraseInput");passphraseInput.invalid=true;passphraseInput.focusInput()}return;default:assertNotReached()}}onLearnMoreClick_(event){if(event.target.tagName==="A"){event.stopPropagation()}}shouldShowSyncAccountControl_(){return false}computeShowExistingPassphraseBelowAccount_(){return this.syncStatus!==undefined&&!!this.syncStatus.signedIn&&this.syncPrefs!==undefined&&!!this.syncPrefs.passphraseRequired}onSyncAdvancedClick_(){const router=Router.getInstance();router.navigateTo(router.getRoutes().SYNC_ADVANCED)}onSyncSetupDone_(e){if(e.detail){this.didAbort_=false;chrome.metricsPrivate.recordUserAction("Signin_Signin_ConfirmAdvancedSyncSettings")}else{this.setupCancelConfirmed_=true;chrome.metricsPrivate.recordUserAction("Signin_Signin_CancelAdvancedSyncSettings")}const router=Router.getInstance();router.navigateTo(router.getRoutes().BASIC)}focusPassphraseInput_(){const passphraseInput=this.shadowRoot.querySelector("#existingPassphraseInput");const router=Router.getInstance();if(passphraseInput&&router.getCurrentRoute()===router.getRoutes().SYNC){passphraseInput.focus()}}}customElements.define(SettingsSyncPageElement.is,SettingsSyncPageElement);const styleMod=document.createElement("dom-module");styleMod.appendChild(html`
  <template>
    <style include="cr-shared-style">
.list-frame{align-items:center;display:block;padding-inline-end:20px;padding-inline-start:60px}.list-item{align-items:center;display:flex;min-height:48px}.list-item.underbar{border-bottom:var(--cr-separator-line)}.list-item.selected{font-weight:500}.list-item>.start{flex:1}
    </style>
  </template>
`.content);styleMod.register("certificate-shared");function getTemplate$t(){return html`<!--_html_template_start_-->    <style include="certificate-shared">#description,cr-checkbox{margin:15px 0}</style>

    <cr-dialog id="dialog" close-text="[[i18n('close')]]">
      <div slot="title">
        [[i18n('certificateManagerCaTrustEditDialogTitle')]]
      </div>
      <div slot="body">
        <div>[[explanationText_]]</div>
        <div id="description">
          [[i18n('certificateManagerCaTrustEditDialogDescription')]]
        </div>
        <cr-checkbox id="ssl" checked="[[trustInfo_.ssl]]">
          [[i18n('certificateManagerCaTrustEditDialogSsl')]]
        </cr-checkbox>
        <cr-checkbox id="email" checked="[[trustInfo_.email]]">
          [[i18n('certificateManagerCaTrustEditDialogEmail')]]
        </cr-checkbox>
        <cr-checkbox id="objSign" checked="[[trustInfo_.objSign]]">
          [[i18n('certificateManagerCaTrustEditDialogObjSign')]]
        </cr-checkbox>
      </div>
      <div slot="button-container">
        <paper-spinner-lite id="spinner"></paper-spinner-lite>
        <cr-button class="cancel-button" on-click="onCancelClick_">
          [[i18n('cancel')]]
        </cr-button>
        <cr-button id="ok" class="action-button" on-click="onOkClick_">
          [[i18n('ok')]]
        </cr-button>
      </div>
    </cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var CertificateType;(function(CertificateType){CertificateType["CA"]="ca";CertificateType["OTHER"]="other";CertificateType["PERSONAL"]="personal";CertificateType["SERVER"]="server"})(CertificateType||(CertificateType={}));class CertificatesBrowserProxyImpl{refreshCertificates(){chrome.send("refreshCertificates")}viewCertificate(id){chrome.send("viewCertificate",[id])}exportCertificate(id){chrome.send("exportCertificate",[id])}deleteCertificate(id){return sendWithPromise("deleteCertificate",id)}exportPersonalCertificate(id){return sendWithPromise("exportPersonalCertificate",id)}exportPersonalCertificatePasswordSelected(password){return sendWithPromise("exportPersonalCertificatePasswordSelected",password)}importPersonalCertificate(useHardwareBacked){return sendWithPromise("importPersonalCertificate",useHardwareBacked)}importPersonalCertificatePasswordSelected(password){return sendWithPromise("importPersonalCertificatePasswordSelected",password)}getCaCertificateTrust(id){return sendWithPromise("getCaCertificateTrust",id)}editCaCertificateTrust(id,ssl,email,objSign){return sendWithPromise("editCaCertificateTrust",id,ssl,email,objSign)}importCaCertificateTrustSelected(ssl,email,objSign){return sendWithPromise("importCaCertificateTrustSelected",ssl,email,objSign)}cancelImportExportCertificate(){chrome.send("cancelImportExportCertificate")}importCaCertificate(){return sendWithPromise("importCaCertificate")}importServerCertificate(){return sendWithPromise("importServerCertificate")}static getInstance(){return instance$3||(instance$3=new CertificatesBrowserProxyImpl)}static setInstance(obj){instance$3=obj}}let instance$3=null;
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CaTrustEditDialogElementBase=I18nMixin(PolymerElement);class CaTrustEditDialogElement extends CaTrustEditDialogElementBase{constructor(){super(...arguments);this.browserProxy_=null}static get is(){return"ca-trust-edit-dialog"}static get template(){return getTemplate$t()}static get properties(){return{model:Object,trustInfo_:Object,explanationText_:String}}ready(){super.ready();this.browserProxy_=CertificatesBrowserProxyImpl.getInstance()}connectedCallback(){super.connectedCallback();this.explanationText_=loadTimeData.getStringF("certificateManagerCaTrustEditDialogExplanation",this.model.name);if(this.model.id){this.browserProxy_.getCaCertificateTrust(this.model.id).then((trustInfo=>{this.trustInfo_=trustInfo;this.$.dialog.showModal()}))}else{this.$.dialog.showModal()}}onCancelClick_(){this.$.dialog.close()}onOkClick_(){this.$.spinner.active=true;const whenDone=this.model.id?this.browserProxy_.editCaCertificateTrust(this.model.id,this.$.ssl.checked,this.$.email.checked,this.$.objSign.checked):this.browserProxy_.importCaCertificateTrustSelected(this.$.ssl.checked,this.$.email.checked,this.$.objSign.checked);whenDone.then((()=>{this.$.spinner.active=false;this.$.dialog.close()}),(error=>{if(error===null){return}this.$.dialog.close();this.dispatchEvent(new CustomEvent("certificates-error",{bubbles:true,composed:true,detail:{error:error,anchor:null}}))}))}}customElements.define(CaTrustEditDialogElement.is,CaTrustEditDialogElement);function getTemplate$s(){return html`<!--_html_template_start_-->    <style include="certificate-shared"></style>
    <cr-dialog id="dialog" show-on-attach close-text="[[i18n('close')]]">
      <div slot="title">
        [[getTitleText_(model, certificateType)]]
      </div>
      <div slot="body">
        <div>[[getDescriptionText_(model, certificateType)]]</div>
      </div>
      <div slot="button-container">
        <cr-button class="cancel-button" on-click="onCancelClick_">
          [[i18n('cancel')]]
        </cr-button>
        <cr-button id="ok" class="action-button" on-click="onOkClick_">
          [[i18n('ok')]]
        </cr-button>
      </div>
    </cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CertificateDeleteConfirmationDialogElementBase=I18nMixin(PolymerElement);class CertificateDeleteConfirmationDialogElement extends CertificateDeleteConfirmationDialogElementBase{static get is(){return"certificate-delete-confirmation-dialog"}static get template(){return getTemplate$s()}static get properties(){return{model:Object,certificateType:String}}getTitleText_(){const getString=localizedMessageId=>loadTimeData.getStringF(localizedMessageId,this.model.name);switch(this.certificateType){case CertificateType.PERSONAL:return getString("certificateManagerDeleteUserTitle");case CertificateType.SERVER:return getString("certificateManagerDeleteServerTitle");case CertificateType.CA:return getString("certificateManagerDeleteCaTitle");case CertificateType.OTHER:return getString("certificateManagerDeleteOtherTitle");default:assertNotReached()}}getDescriptionText_(){const getString=loadTimeData.getString.bind(loadTimeData);switch(this.certificateType){case CertificateType.PERSONAL:return getString("certificateManagerDeleteUserDescription");case CertificateType.SERVER:return getString("certificateManagerDeleteServerDescription");case CertificateType.CA:return getString("certificateManagerDeleteCaDescription");case CertificateType.OTHER:return"";default:assertNotReached()}}onCancelClick_(){this.$.dialog.close()}onOkClick_(){CertificatesBrowserProxyImpl.getInstance().deleteCertificate(this.model.id).then((()=>{this.$.dialog.close()}),(error=>{if(error===null){return}this.$.dialog.close();this.dispatchEvent(new CustomEvent("certificates-error",{bubbles:true,composed:true,detail:{error:error,anchor:null}}))}))}}customElements.define(CertificateDeleteConfirmationDialogElement.is,CertificateDeleteConfirmationDialogElement);
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var CertificateAction;(function(CertificateAction){CertificateAction[CertificateAction["DELETE"]=0]="DELETE";CertificateAction[CertificateAction["EDIT"]=1]="EDIT";CertificateAction[CertificateAction["EXPORT_PERSONAL"]=2]="EXPORT_PERSONAL";CertificateAction[CertificateAction["IMPORT"]=3]="IMPORT"})(CertificateAction||(CertificateAction={}));const CertificateActionEvent="certificate-action";const CertificateProvisioningViewDetailsActionEvent="certificate-provisioning-view-details-action";function getTemplate$r(){return html`<!--_html_template_start_-->    <style include="certificate-shared cr-icons">.name{flex:auto}.untrusted{color:var(--paper-red-700);font-weight:500;margin-inline-end:16px;text-transform:uppercase}:host([is-last]) .list-item{border-bottom:none}</style>
    <div class="list-item underbar">
      <div class="untrusted" hidden$="[[!model.untrusted]]">
        [[i18n('certificateManagerUntrusted')]]
      </div>
      <div class="name">[[model.name]]</div>
      <cr-policy-indicator indicator-type="[[getPolicyIndicatorType_(model)]]">
      </cr-policy-indicator>
      <cr-icon-button class="icon-more-vert" id="dots" title="[[i18n('moreActions')]]" on-click="onDotsClick_">
      </cr-icon-button>
      <cr-lazy-render id="menu">
        <template>
          <cr-action-menu role-description="[[i18n('menu')]]">
            <button class="dropdown-item" id="view" on-click="onViewClick_">
              [[i18n('certificateManagerView')]]
            </button>
            <button class="dropdown-item" id="edit" hidden$="[[!canEdit_(model)]]" on-click="onEditClick_">
              [[i18n('edit')]]
            </button>
            <button class="dropdown-item" id="export" hidden$="[[!canExport_(certificateType, model)]]" on-click="onExportClick_">
              [[i18n('certificateManagerExport')]]
            </button>
            <button class="dropdown-item" id="delete" hidden$="[[!canDelete_(model)]]" on-click="onDeleteClick_">
              [[i18n('certificateManagerDelete')]]
            </button>
          </cr-action-menu>
        </template>
      </cr-lazy-render>
    <div>
</div></div><!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CertificateSubentryElementBase=I18nMixin(PolymerElement);class CertificateSubentryElement extends CertificateSubentryElementBase{constructor(){super(...arguments);this.browserProxy_=CertificatesBrowserProxyImpl.getInstance()}static get is(){return"certificate-subentry"}static get template(){return getTemplate$r()}static get properties(){return{model:Object,certificateType:String}}dispatchCertificateActionEvent_(action){this.dispatchEvent(new CustomEvent(CertificateActionEvent,{bubbles:true,composed:true,detail:{action:action,subnode:this.model,certificateType:this.certificateType,anchor:this.$.dots}}))}onRejected_(error){if(error===null){return}this.dispatchEvent(new CustomEvent("certificates-error",{bubbles:true,composed:true,detail:{error:error,anchor:null}}))}onViewClick_(){this.closePopupMenu_();this.browserProxy_.viewCertificate(this.model.id)}onEditClick_(){this.closePopupMenu_();this.dispatchCertificateActionEvent_(CertificateAction.EDIT)}onDeleteClick_(){this.closePopupMenu_();this.dispatchCertificateActionEvent_(CertificateAction.DELETE)}onExportClick_(){this.closePopupMenu_();if(this.certificateType===CertificateType.PERSONAL){this.browserProxy_.exportPersonalCertificate(this.model.id).then((()=>{this.dispatchCertificateActionEvent_(CertificateAction.EXPORT_PERSONAL)}),this.onRejected_.bind(this))}else{this.browserProxy_.exportCertificate(this.model.id)}}canEdit_(model){return model.canBeEdited}canExport_(certificateType,model){if(certificateType===CertificateType.PERSONAL){return model.extractable}return true}canDelete_(model){return model.canBeDeleted}closePopupMenu_(){this.shadowRoot.querySelector("cr-action-menu").close()}onDotsClick_(){this.$.menu.get().showAt(this.$.dots)}getPolicyIndicatorType_(model){return model.policy?CrPolicyIndicatorType.USER_POLICY:CrPolicyIndicatorType.NONE}}customElements.define(CertificateSubentryElement.is,CertificateSubentryElement);function getTemplate$q(){return html`<!--_html_template_start_-->    <style include="certificate-shared iron-flex">.expand-box{align-items:center;border-top:var(--cr-separator-line);display:flex;min-height:48px;padding:0 20px}</style>
    <div class="expand-box">
      <div class="flex">[[model.id]]</div>
      <cr-policy-indicator indicator-type="[[getPolicyIndicatorType_(model)]]">
      </cr-policy-indicator>
      <cr-expand-button no-hover expanded="{{expanded_}}" aria-label="[[i18n('certificateManagerExpandA11yLabel')]]">
      </cr-expand-button>
    </div>
    <template is="dom-if" if="[[expanded_]]">
      <div class="list-frame">
        <template is="dom-repeat" items="[[model.subnodes]]">
          <certificate-subentry model="[[item]]" certificate-type="[[certificateType]]" is-last$="[[isLast_(index, model)]]">
          </certificate-subentry>
        </template>
      </div>
    </template>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CertificateEntryElementBase=I18nMixin(PolymerElement);class CertificateEntryElement extends CertificateEntryElementBase{static get is(){return"certificate-entry"}static get template(){return getTemplate$q()}static get properties(){return{model:Object,certificateType:String}}isLast_(index){return index===this.model.subnodes.length-1}getPolicyIndicatorType_(){return this.model.containsPolicyCerts?CrPolicyIndicatorType.USER_POLICY:CrPolicyIndicatorType.NONE}}customElements.define(CertificateEntryElement.is,CertificateEntryElement);function getTemplate$p(){return html`<!--_html_template_start_-->    <style include="certificate-shared iron-flex">.button-box{align-items:center;display:flex;margin-bottom:24px;min-height:48px;padding:0 20px}#importAndBind{margin-inline-start:8px}</style>
    <div class="button-box">
      <span class="flex">
          [[getDescription_(certificateType, certificates)]]</span>
      <cr-button id="import" on-click="onImportClick_" hidden="[[!canImport_(certificateType, importAllowed, isKiosk_)]]">
        [[i18n('certificateManagerImport')]]</cr-button>

      <cr-button id="importAndBind" on-click="onImportAndBindClick_" hidden="[[!canImportAndBind_(certificateType, importAllowed,
                 isGuest_)]]">
        [[i18n('certificateManagerImportAndBind')]]</cr-button>

    </div>
    <template is="dom-repeat" items="[[certificates]]">
      <certificate-entry model="[[item]]" certificate-type="[[certificateType]]">
      </certificate-entry>
    </template>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CertificateListElementBase=I18nMixin(PolymerElement);class CertificateListElement extends CertificateListElementBase{static get is(){return"certificate-list"}static get template(){return getTemplate$p()}static get properties(){return{certificates:{type:Array,value(){return[]}},certificateType:String,importAllowed:Boolean,isGuest_:{type:Boolean,value(){return loadTimeData.valueExists("isGuest")&&loadTimeData.getBoolean("isGuest")}},isKiosk_:{type:Boolean,value(){return loadTimeData.valueExists("isKiosk")&&loadTimeData.getBoolean("isKiosk")}}}}getDescription_(){if(this.certificates.length===0){return this.i18n("certificateManagerNoCertificates")}switch(this.certificateType){case CertificateType.PERSONAL:return this.i18n("certificateManagerYourCertificatesDescription");case CertificateType.SERVER:return this.i18n("certificateManagerServersDescription");case CertificateType.CA:return this.i18n("certificateManagerAuthoritiesDescription");case CertificateType.OTHER:return this.i18n("certificateManagerOthersDescription");default:assertNotReached()}}canImport_(){return!this.isKiosk_&&this.certificateType!==CertificateType.OTHER&&this.importAllowed}canImportAndBind_(){return!this.isGuest_&&this.certificateType===CertificateType.PERSONAL&&this.importAllowed}onRejected_(anchor,error){if(error===null){return}this.dispatchEvent(new CustomEvent("certificates-error",{bubbles:true,composed:true,detail:{error:error,anchor:anchor}}))}dispatchImportActionEvent_(subnode,anchor){this.dispatchEvent(new CustomEvent(CertificateActionEvent,{bubbles:true,composed:true,detail:{action:CertificateAction.IMPORT,subnode:subnode,certificateType:this.certificateType,anchor:anchor}}))}onImportClick_(e){this.handleImport_(false,e.target)}onImportAndBindClick_(e){this.handleImport_(true,e.target)}handleImport_(useHardwareBacked,anchor){const browserProxy=CertificatesBrowserProxyImpl.getInstance();if(this.certificateType===CertificateType.PERSONAL){browserProxy.importPersonalCertificate(useHardwareBacked).then((showPasswordPrompt=>{if(showPasswordPrompt){this.dispatchImportActionEvent_(null,anchor)}}),this.onRejected_.bind(this,anchor))}else if(this.certificateType===CertificateType.CA){browserProxy.importCaCertificate().then((certificateName=>{this.dispatchImportActionEvent_({name:certificateName},anchor)}),this.onRejected_.bind(this,anchor))}else if(this.certificateType===CertificateType.SERVER){browserProxy.importServerCertificate().catch(this.onRejected_.bind(this,anchor))}else{assertNotReached()}}}customElements.define(CertificateListElement.is,CertificateListElement);function getTemplate$o(){return html`<!--_html_template_start_-->    <style include="certificate-shared">cr-input{--cr-input-error-display:none}</style>
    <cr-dialog id="dialog" show-on-attach close-text="[[i18n('close')]]">
      <div slot="title">
        [[i18n('certificateManagerDecryptPasswordTitle')]]
      </div>
      <div slot="body">
        <cr-input type="password" id="password" label="[[i18n('certificateManagerPassword')]]" value="{{password_}}" autofocus>
        </cr-input>
      </div>
      <div slot="button-container">
        <cr-button class="cancel-button" on-click="onCancelClick_">
          [[i18n('cancel')]]
        </cr-button>
        <cr-button id="ok" class="action-button" on-click="onOkClick_">
          [[i18n('ok')]]
        </cr-button>
      </div>
    </cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CertificatePasswordDecryptionDialogElementBase=I18nMixin(PolymerElement);class CertificatePasswordDecryptionDialogElement extends CertificatePasswordDecryptionDialogElementBase{static get is(){return"certificate-password-decryption-dialog"}static get template(){return getTemplate$o()}static get properties(){return{password_:{type:String,value:""}}}onCancelClick_(){this.$.dialog.close()}onOkClick_(){CertificatesBrowserProxyImpl.getInstance().importPersonalCertificatePasswordSelected(this.password_).then((()=>{this.$.dialog.close()}),(error=>{if(error===null){return}this.$.dialog.close();this.dispatchEvent(new CustomEvent("certificates-error",{bubbles:true,composed:true,detail:{error:error,anchor:null}}))}))}}customElements.define(CertificatePasswordDecryptionDialogElement.is,CertificatePasswordDecryptionDialogElement);function getTemplate$n(){return html`<!--_html_template_start_-->    <style include="certificate-shared">cr-input{--cr-input-error-display:none;margin-top:var(--cr-form-field-bottom-spacing)}.password-buttons{margin-bottom:20px}</style>
    <cr-dialog id="dialog" close-text="[[i18n('close')]]">
      <div slot="title">
        [[i18n('certificateManagerEncryptPasswordTitle')]]
      </div>
      <div slot="body">
        <div>[[i18n('certificateManagerEncryptPasswordDescription')]]</div>
        <div class="password-buttons">
          <cr-input type="password" value="{{password_}}" id="password" label="[[i18n('certificateManagerPassword')]]" on-input="validate_" autofocus></cr-input>
          <cr-input type="password" value="{{confirmPassword_}}" id="confirmPassword" label="[[i18n('certificateManagerConfirmPassword')]]" on-input="validate_"></cr-input>
        </div>
      </div>
      <div slot="button-container">
        <cr-button class="cancel-button" on-click="onCancelClick_">
          [[i18n('cancel')]]
        </cr-button>
        <cr-button id="ok" class="action-button" on-click="onOkClick_" disabled="disabled">
          [[i18n('ok')]]
        </cr-button>
      </div>
    </cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CertificatePasswordEncryptionDialogElementBase=I18nMixin(PolymerElement);class CertificatePasswordEncryptionDialogElement extends CertificatePasswordEncryptionDialogElementBase{static get is(){return"certificate-password-encryption-dialog"}static get template(){return getTemplate$n()}static get properties(){return{password_:{type:String,value:""},confirmPassword_:{type:String,value:""}}}connectedCallback(){super.connectedCallback();this.$.dialog.showModal()}onCancelClick_(){this.$.dialog.close()}onOkClick_(){CertificatesBrowserProxyImpl.getInstance().exportPersonalCertificatePasswordSelected(this.password_).then((()=>{this.$.dialog.close()}),(error=>{if(error===null){return}this.$.dialog.close();this.dispatchEvent(new CustomEvent("certificates-error",{bubbles:true,composed:true,detail:{error:error,anchor:null}}))}))}validate_(){const isValid=this.password_!==""&&this.password_===this.confirmPassword_;this.$.ok.disabled=!isValid}}customElements.define(CertificatePasswordEncryptionDialogElement.is,CertificatePasswordEncryptionDialogElement);function getTemplate$m(){return html`<!--_html_template_start_-->    <style include="certificate-shared"></style>
    <cr-dialog id="dialog" show-on-attach close-text="[[i18n('close')]]">
      <div slot="title">[[model.title]]</div>
      <div slot="body">
        <div>[[model.description]]</div>
        <template is="dom-if" if="[[model.certificateErrors]]">
          <template is="dom-repeat" items="[[model.certificateErrors]]">
            <div>[[getCertificateErrorText_(item)]]</div>
          </template>
        </template>
      </div>
      <div slot="button-container">
        <cr-button id="ok" class="action-button" on-click="onOkClick_">
          [[i18n('ok')]]
        </cr-button>
      </div>
    </cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CertificatesErrorDialogElementBase=I18nMixin(PolymerElement);class CertificatesErrorDialogElement extends CertificatesErrorDialogElementBase{static get is(){return"certificates-error-dialog"}static get template(){return getTemplate$m()}static get properties(){return{model:Object}}onOkClick_(){this.$.dialog.close()}getCertificateErrorText_(importError){return loadTimeData.getStringF("certificateImportErrorFormat",importError.name,importError.error)}}customElements.define(CertificatesErrorDialogElement.is,CertificatesErrorDialogElement);
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CertificateProvisioningBrowserProxyImpl{refreshCertificateProvisioningProcesses(){chrome.send("refreshCertificateProvisioningProcessses")}triggerCertificateProvisioningProcessUpdate(certProfileId){chrome.send("triggerCertificateProvisioningProcessUpdate",[certProfileId])}triggerCertificateProvisioningProcessReset(certProfileId){chrome.send("triggerCertificateProvisioningProcessReset",[certProfileId])}static getInstance(){return instance$2||(instance$2=new CertificateProvisioningBrowserProxyImpl)}static setInstance(obj){instance$2=obj}}let instance$2=null;function getTemplate$l(){return html`<!--_html_template_start_--><style include="iron-flex">.button-box{align-items:center;display:flex;min-height:48px}.label{color:var(--cr-secondary-text-color);font-size:85%}.two-line{min-height:var(--settings-row-two-line-min-height)}.value{color:var(--cr-primary-text-color)}</style>
<cr-dialog id="dialog" show-on-attach show-close-button close-text="[[i18n('close')]]">
  <div slot="title">
    [[i18n('certificateProvisioningDetails')]]
  </div>
  <div slot="body">
    <div class="two-line">
      <div class="label" aria-describedby="certProfileName">
        [[i18n('certificateProvisioningProfileName')]]
      </div>
      <div class="value" id="certProfileName" aria-hidden="true">
        [[model.certProfileName]]
      </div>
    </div>
    <div class="two-line">
      <div class="label" aria-describedby="certProfileId">
        [[i18n('certificateProvisioningProfileId')]]
      </div>
      <div class="value" id="certProfileId" aria-hidden="true">
        [[model.certProfileId]]
      </div>
    </div>
    <div class="button-box">
      <div class="two-line flex">
        <div class="label" aria-describedby="status">
          [[i18n('certificateProvisioningStatus')]]
        </div>
        <span class="value" id="status" aria-hidden="true">
          [[model.status]]
        </span>
      </div>
      <cr-button id="refresh" role="button" on-click="onRefresh_">
        [[i18n('certificateProvisioningRefresh')]]
      </cr-button>
    </div>
    <div class="two-line">
      <div class="label" aria-describedby="timeSinceLastUpdate">
        [[i18n('certificateProvisioningLastUpdate')]]
      </div>
      <div class="value" id="timeSinceLastUpdate" aria-hidden="true">
        [[model.timeSinceLastUpdate]]
      </div>
    </div>
    <div class="two-line" hidden$="[[shouldHideLastFailedStatus_(model.lastUnsuccessfulMessage)]]">
      <div class="label" aria-describedby="lastFailedStatus">
        [[i18n('certificateProvisioningLastUnsuccessfulStatus')]]
      </div>
      <div class="value" id="lastFailedStatus" aria-hidden="true">
        [[model.lastUnsuccessfulMessage]]
      </div>
    </div>
    <cr-button id="reset" role="button" on-click="onReset_">
      [[i18n('certificateProvisioningReset')]]
    </cr-button>
    <hr>
    <cr-expand-button expanded="{{advancedExpanded_}}" aria-expanded$="[[boolToString_(advancedOpened)]]">
      <div>[[i18n('certificateProvisioningAdvancedSectionTitle')]]</div>
    </cr-expand-button>
    <iron-collapse id="advancedInfo" opened="[[advancedExpanded_]]">
      <div class="two-line">
        <div class="label" aria-describedby="stateId">
          [[i18n('certificateProvisioningStatusId')]]
        </div>
        <div class="value" id="stateId" aria-hidden="true">
          [[model.stateId]]
        </div>
      </div>
      <div class="two-line">
        <div class="label" aria-describedby="publicKey">
          [[i18n('certificateProvisioningPublicKey')]]
        </div>
        <div class="value" id="publicKey" aria-hidden="true">
          [[model.publicKey]]
        </div>
      </div>
    </iron-collapse>
  </div>
</cr-dialog><!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CertificateProvisioningDetailsDialogElementBase=I18nMixin(PolymerElement);class CertificateProvisioningDetailsDialogElement extends CertificateProvisioningDetailsDialogElementBase{static get is(){return"certificate-provisioning-details-dialog"}static get template(){return getTemplate$l()}static get properties(){return{model:Object,advancedExpanded_:Boolean}}close(){this.$.dialog.close()}onRefresh_(){CertificateProvisioningBrowserProxyImpl.getInstance().triggerCertificateProvisioningProcessUpdate(this.model.certProfileId)}onReset_(){CertificateProvisioningBrowserProxyImpl.getInstance().triggerCertificateProvisioningProcessReset(this.model.certProfileId)}shouldHideLastFailedStatus_(){return this.model.lastUnsuccessfulMessage.length===0}arrowState_(opened){return opened?"cr:arrow-drop-up":"cr:arrow-drop-down"}boolToString_(bool){return bool.toString()}}customElements.define(CertificateProvisioningDetailsDialogElement.is,CertificateProvisioningDetailsDialogElement);function getTemplate$k(){return html`<!--_html_template_start_--><style include="certificate-shared iron-flex">.cert-box{align-items:center;border-top:var(--cr-separator-line);display:flex;min-height:48px;padding:0 20px}</style>
<div class="cert-box">
  <div class="flex" tabindex="0">[[model.certProfileName]]</div>
  <cr-icon-button class="icon-more-vert" id="dots" title="[[i18n('moreActions')]]" on-click="onDotsClick_">
  </cr-icon-button>
  <cr-lazy-render id="menu">
    <template>
      <cr-action-menu role-description="[[i18n('menu')]]">
        <button class="dropdown-item" id="details" on-click="onDetailsClick_">
          [[i18n('certificateProvisioningDetails')]]
        </button>
      </cr-action-menu>
    </template>
  </cr-lazy-render>
</div>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CertificateProvisioningEntryElementBase=I18nMixin(PolymerElement);class CertificateProvisioningEntryElement extends CertificateProvisioningEntryElementBase{static get is(){return"certificate-provisioning-entry"}static get template(){return getTemplate$k()}static get properties(){return{model:Object}}closePopupMenu_(){this.shadowRoot.querySelector("cr-action-menu").close()}onDotsClick_(){this.$.menu.get().showAt(this.$.dots)}onDetailsClick_(){this.closePopupMenu_();this.dispatchEvent(new CustomEvent(CertificateProvisioningViewDetailsActionEvent,{bubbles:true,composed:true,detail:{model:this.model,anchor:this.$.dots}}))}}customElements.define(CertificateProvisioningEntryElement.is,CertificateProvisioningEntryElement);function getTemplate$j(){return html`<!--_html_template_start_--><style include="cr-shared-style iron-flex ">.header-box{align-items:center;display:flex;margin-top:16px;min-height:24px;padding:0 20px}.hidden{display:none}</style>

<template is="dom-if" if="[[showProvisioningDetailsDialog_]]" restamp>
  <certificate-provisioning-details-dialog model="[[provisioningDetailsDialogModel_]]" on-close="onDialogClose_">
  </certificate-provisioning-details-dialog>
</template>

<div class="header-box" aria-role="heading" aria-labelledby="headingLabel" hidden="[[!hasCertificateProvisioningEntries_(provisioningProcesses_)]]">
  <span id="headingLabel" class="flex">
    [[i18n('certificateProvisioningListHeader')]]
  </span>
</div>
<template is="dom-repeat" items="[[provisioningProcesses_]]">
  <certificate-provisioning-entry model="[[item]]">
  </certificate-provisioning-entry>
</template>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CertificateProvisioningListElementBase=WebUiListenerMixin(I18nMixin(PolymerElement));class CertificateProvisioningListElement extends CertificateProvisioningListElementBase{constructor(){super(...arguments);this.previousAnchor_=null}static get is(){return"certificate-provisioning-list"}static get template(){return getTemplate$j()}static get properties(){return{provisioningProcesses_:{type:Array,value(){return[]}},provisioningDetailsDialogModel_:Object,showProvisioningDetailsDialog_:Boolean}}hasCertificateProvisioningEntries_(provisioningProcesses){return provisioningProcesses.length!==0}onCertificateProvisioningProcessesChanged_(certProvisioningProcesses){this.provisioningProcesses_=certProvisioningProcesses;if(!this.provisioningDetailsDialogModel_){return}const certProfileId=this.provisioningDetailsDialogModel_.certProfileId;const newDialogModel=this.provisioningProcesses_.find((process=>process.certProfileId===certProfileId));if(newDialogModel){this.provisioningDetailsDialogModel_=newDialogModel}else{this.shadowRoot.querySelector("certificate-provisioning-details-dialog").close()}}connectedCallback(){super.connectedCallback();this.addWebUiListener("certificate-provisioning-processes-changed",this.onCertificateProvisioningProcessesChanged_.bind(this));CertificateProvisioningBrowserProxyImpl.getInstance().refreshCertificateProvisioningProcesses()}ready(){super.ready();this.addEventListener(CertificateProvisioningViewDetailsActionEvent,(event=>{const detail=event.detail;this.provisioningDetailsDialogModel_=detail.model;this.previousAnchor_=detail.anchor;this.showProvisioningDetailsDialog_=true;event.stopPropagation();CertificateProvisioningBrowserProxyImpl.getInstance().refreshCertificateProvisioningProcesses()}))}onDialogClose_(){this.showProvisioningDetailsDialog_=false;focusWithoutInk(this.previousAnchor_);this.previousAnchor_=null}}customElements.define(CertificateProvisioningListElement.is,CertificateProvisioningListElement);function getTemplate$i(){return html`<!--_html_template_start_-->    <style include="cr-hidden-style">cr-tabs{--cr-tabs-font-size:inherit;--cr-tabs-height:40px;margin-bottom:24px}</style>

    <template is="dom-if" if="[[showCaTrustEditDialog_]]" restamp>
      <ca-trust-edit-dialog model="[[dialogModel_]]">
      </ca-trust-edit-dialog>
    </template>
    <template is="dom-if" if="[[showDeleteConfirmationDialog_]]" restamp>
      <certificate-delete-confirmation-dialog model="[[dialogModel_]]" certificate-type="[[dialogModelCertificateType_]]">
      </certificate-delete-confirmation-dialog>
    </template>
    <template is="dom-if" if="[[showPasswordEncryptionDialog_]]" restamp>
      <certificate-password-encryption-dialog>
      </certificate-password-encryption-dialog>
    </template>
    <template is="dom-if" if="[[showPasswordDecryptionDialog_]]" restamp>
      <certificate-password-decryption-dialog>
      </certificate-password-decryption-dialog>
    </template>
    <template is="dom-if" if="[[showErrorDialog_]]" restamp>
      <certificates-error-dialog model="[[errorDialogModel_]]">
      </certificates-error-dialog>
    </template>

    <cr-tabs selected="{{selected}}" tab-names="[[tabNames_]]"></cr-tabs>
    <iron-pages selected="[[selected]]">
      <div>
        <certificate-list id="personalCerts" certificates="[[personalCerts]]" certificate-type="[[certificateTypeEnum_.PERSONAL]]" import-allowed="[[clientImportAllowed]]">
        </certificate-list>

        <certificate-provisioning-list></certificate-provisioning-list>

      </div>
      <div>
        <template is="dom-if" if="[[isTabSelected_(selected, 1)]]">
          <certificate-list id="serverCerts" certificates="[[serverCerts]]" certificate-type="[[certificateTypeEnum_.SERVER]]" import-allowed="true">
          </certificate-list>
        </template>
      </div>
      <div>
        <template is="dom-if" if="[[isTabSelected_(selected, 2)]]">
          <certificate-list id="caCerts" certificates="[[caCerts]]" certificate-type="[[certificateTypeEnum_.CA]]" import-allowed="[[caImportAllowed]]">
          </certificate-list>
        </template>
      </div>
      <div>
        <template is="dom-if" if="[[isTabSelected_(selected, 3)]]">
          <certificate-list id="otherCerts" certificates="[[otherCerts]]" certificate-type="[[certificateTypeEnum_.OTHER]]" import-allowed="false">
          </certificate-list>
        </template>
      </div>
    </iron-pages>
<!--_html_template_end_-->`}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CertificateManagerElementBase=WebUiListenerMixin(I18nMixin(PolymerElement));class CertificateManagerElement extends CertificateManagerElementBase{static get is(){return"certificate-manager"}static get template(){return getTemplate$i()}static get properties(){return{selected:{type:Number,value:0},personalCerts:{type:Array,value(){return[]}},serverCerts:{type:Array,value(){return[]}},caCerts:{type:Array,value(){return[]}},otherCerts:{type:Array,value(){return[]}},clientImportAllowed:{type:Boolean,value:false},caImportAllowed:{type:Boolean,value:false},certificateTypeEnum_:{type:Object,value:CertificateType,readOnly:true},showCaTrustEditDialog_:Boolean,showDeleteConfirmationDialog_:Boolean,showPasswordEncryptionDialog_:Boolean,showPasswordDecryptionDialog_:Boolean,showErrorDialog_:Boolean,dialogModel_:Object,dialogModelCertificateType_:String,errorDialogModel_:Object,activeDialogAnchor_:Object,isKiosk_:{type:Boolean,value(){return loadTimeData.valueExists("isKiosk")&&loadTimeData.getBoolean("isKiosk")}},tabNames_:{type:Array,computed:"computeTabNames_(isKiosk_)"}}}connectedCallback(){super.connectedCallback();this.addWebUiListener("certificates-changed",this.set.bind(this));this.addWebUiListener("client-import-allowed-changed",this.setClientImportAllowed.bind(this));this.addWebUiListener("ca-import-allowed-changed",this.setCaImportAllowed.bind(this));CertificatesBrowserProxyImpl.getInstance().refreshCertificates()}setClientImportAllowed(allowed){this.clientImportAllowed=allowed}setCaImportAllowed(allowed){this.caImportAllowed=allowed}isTabSelected_(selectedIndex,tabIndex){return selectedIndex===tabIndex}ready(){super.ready();this.addEventListener(CertificateActionEvent,(event=>{this.dialogModel_=event.detail.subnode;this.dialogModelCertificateType_=event.detail.certificateType;if(event.detail.action===CertificateAction.IMPORT){if(event.detail.certificateType===CertificateType.PERSONAL){this.openDialog_("certificate-password-decryption-dialog","showPasswordDecryptionDialog_",event.detail.anchor)}else if(event.detail.certificateType===CertificateType.CA){this.openDialog_("ca-trust-edit-dialog","showCaTrustEditDialog_",event.detail.anchor)}}else{if(event.detail.action===CertificateAction.EDIT){this.openDialog_("ca-trust-edit-dialog","showCaTrustEditDialog_",event.detail.anchor)}else if(event.detail.action===CertificateAction.DELETE){this.openDialog_("certificate-delete-confirmation-dialog","showDeleteConfirmationDialog_",event.detail.anchor)}else if(event.detail.action===CertificateAction.EXPORT_PERSONAL){this.openDialog_("certificate-password-encryption-dialog","showPasswordEncryptionDialog_",event.detail.anchor)}}event.stopPropagation()}));this.addEventListener("certificates-error",(event=>{const detail=event.detail;this.errorDialogModel_=detail.error;this.openDialog_("certificates-error-dialog","showErrorDialog_",detail.anchor);event.stopPropagation()}))}openDialog_(dialogTagName,domIfBooleanName,anchor){if(anchor){this.activeDialogAnchor_=anchor}this.set(domIfBooleanName,true);window.setTimeout((()=>{const dialog=this.shadowRoot.querySelector(dialogTagName);dialog.addEventListener("close",(()=>{this.set(domIfBooleanName,false);focusWithoutInk(this.activeDialogAnchor_)}))}),0)}computeTabNames_(){return[loadTimeData.getString("certificateManagerYourCertificates"),...this.isKiosk_?[]:[loadTimeData.getString("certificateManagerServers"),loadTimeData.getString("certificateManagerAuthorities")],loadTimeData.getString("certificateManagerOthers")]}}customElements.define(CertificateManagerElement.is,CertificateManagerElement);
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class AccessibilityBrowserProxyImpl{openTrackpadGesturesSettings(){chrome.send("openTrackpadGesturesSettings")}recordOverscrollHistoryNavigationChanged(enabled){chrome.metricsPrivate.recordBoolean("Settings.OverscrollHistoryNavigation.Enabled",enabled)}getScreenReaderState(){return sendWithPromise("getScreenReaderState")}static getInstance(){return instance$1||(instance$1=new AccessibilityBrowserProxyImpl)}static setInstance(obj){instance$1=obj}}let instance$1=null;function getTemplate$h(){return html`<!--_html_template_start_-->    <style include="settings-shared"></style>
    <settings-animated-pages id="pages" current-route="{{currentRoute}}" section="a11y" focus-config="[[focusConfig_]]">
      <div route-path="default">

        <cr-link-row label="$i18n{manageAccessibilityFeatures}" on-click="onManageSystemAccessibilityFeaturesClick_" sub-label="$i18n{moreFeaturesLinkDescription}" external>
        </cr-link-row>


        <settings-toggle-button class="hr" hidden$="[[!hasScreenReader_]]" pref="{{prefs.settings.a11y.enable_accessibility_image_labels}}" on-change="onA11yImageLabelsChange_" label="$i18n{accessibleImageLabelsTitle}" sub-label="$i18n{accessibleImageLabelsSubtitle}">
        </settings-toggle-button>



        <cr-link-row class="hr" label="$i18n{moreFeaturesLink}" on-click="onMoreFeaturesLinkClick_" sub-label="$i18n{a11yWebStore}" button-aria-description="$i18n{opensInNewTab}" external>
        </cr-link-row>
      </div>

    </settings-animated-pages>
<!--_html_template_end_-->`}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsA11yPageElementBase=PrefsMixin(WebUiListenerMixin(BaseMixin(PolymerElement)));class SettingsA11yPageElement extends SettingsA11yPageElementBase{constructor(){super(...arguments);this.browserProxy_=AccessibilityBrowserProxyImpl.getInstance()}static get is(){return"settings-a11y-page"}static get template(){return getTemplate$h()}static get properties(){return{currentRoute:{type:Object,notify:true},prefs:{type:Object,notify:true},hasScreenReader_:{type:Boolean,value:false},focusConfig_:{type:Object,value(){const map=new Map;if(routes.CAPTIONS){map.set(routes.CAPTIONS.path,"#captions")}return map}},captionSettingsOpensExternally_:{type:Boolean,value(){let opensExternally=false;return opensExternally}},showOverscrollHistoryNavigationToggle_:{type:Boolean,value:function(){let showOverscroll=false;return showOverscroll}}}}connectedCallback(){super.connectedCallback();const updateScreenReaderState=hasScreenReader=>{this.hasScreenReader_=hasScreenReader};this.browserProxy_.getScreenReaderState().then(updateScreenReaderState);this.addWebUiListener("screen-reader-state-changed",updateScreenReaderState)}onA11yCaretBrowsingChange_(event){if(event.target.checked){chrome.metricsPrivate.recordUserAction("Accessibility.CaretBrowsing.EnableWithSettings")}else{chrome.metricsPrivate.recordUserAction("Accessibility.CaretBrowsing.DisableWithSettings")}}onA11yImageLabelsChange_(event){const a11yImageLabelsOn=event.target.checked;if(a11yImageLabelsOn){chrome.send("confirmA11yImageLabels")}}onManageSystemAccessibilityFeaturesClick_(){window.location.href="chrome://os-settings/osAccessibility"}onMoreFeaturesLinkClick_(){window.open("https://chrome.google.com/webstore/category/collection/3p_accessibility_extensions")}onCaptionsClick_(){if(this.captionSettingsOpensExternally_);else{Router.getInstance().navigateTo(routes.CAPTIONS)}}}customElements.define(SettingsA11yPageElement.is,SettingsA11yPageElement);function getTemplate$g(){return html`<!--_html_template_start_--><style include="cros-color-overrides">:host{--justify-margin:8px;align-items:center;display:flex}:host([enforced_]){pointer-events:none}cr-policy-pref-indicator{pointer-events:all}:host(:not([end-justified])) cr-policy-pref-indicator{margin-inline-start:var(--cr-controlled-by-spacing)}:host([end-justified]) cr-policy-pref-indicator{margin-inline-end:var(--cr-controlled-by-spacing);margin-inline-start:calc(var(--cr-controlled-by-spacing) - var(--justify-margin));order:-1}</style>

<cr-button class$="[[actionClass_]]" disabled="[[!buttonEnabled_(enforced_, disabled)]]">
  [[label]]
</cr-button>

<template is="dom-if" if="[[hasPrefPolicyIndicator(pref.*)]]" restamp>
  <cr-policy-pref-indicator pref="[[pref]]" on-click="onIndicatorClick_" icon-aria-label="[[label]]">
  </cr-policy-pref-indicator>
</template>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ControlledButtonElementBase=CrPolicyPrefMixin(PrefControlMixin(PolymerElement));class ControlledButtonElement extends ControlledButtonElementBase{static get is(){return"controlled-button"}static get template(){return getTemplate$g()}static get properties(){return{endJustified:{type:Boolean,value:false,reflectToAttribute:true},label:String,disabled:{type:Boolean,value:false,reflectToAttribute:true},actionClass_:{type:String,value:""},enforced_:{type:Boolean,computed:"isPrefEnforced(pref.*)",reflectToAttribute:true}}}connectedCallback(){super.connectedCallback();if(this.classList.contains("action-button")){this.actionClass_="action-button"}}focus(){this.shadowRoot.querySelector("cr-button").focus()}onIndicatorClick_(e){e.preventDefault();e.stopPropagation()}buttonEnabled_(enforced,disabled){return!enforced&&!disabled}}customElements.define(ControlledButtonElement.is,ControlledButtonElement);
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class DownloadsBrowserProxyImpl{initializeDownloads(){chrome.send("initializeDownloads")}selectDownloadLocation(){chrome.send("selectDownloadLocation")}resetAutoOpenFileTypes(){chrome.send("resetAutoOpenFileTypes")}getDownloadLocationText(path){return sendWithPromise("getDownloadLocationText",path)}static getInstance(){return instance||(instance=new DownloadsBrowserProxyImpl)}static setInstance(obj){instance=obj}}let instance=null;function getTemplate$f(){return html`<!--_html_template_start_-->    <style include="cr-shared-style settings-shared iron-flex">#defaultDownloadPath{word-break:break-word}</style>
    <div class="cr-row first">
      <div class="flex cr-padded-text">
        <div id="locationLabel" aria-hidden="true">
          $i18n{downloadLocation}
        </div>
        <div class="secondary" id="defaultDownloadPath" aria-hidden="true">


          [[downloadLocation_]]

        </div>
      </div>
      <div class="separator"></div>
      <controlled-button id="changeDownloadsPath" label="$i18n{changeDownloadLocation}" aria-labelledby="locationLabel defaultDownloadPath" on-click="selectDownloadLocation_" pref="[[prefs.download.default_directory]]" end-justified>
      </controlled-button>
    </div>
    <settings-toggle-button class="hr" pref="{{prefs.download.prompt_for_download}}" label="$i18n{promptForDownload}">
    </settings-toggle-button>
    <template is="dom-if" if="[[autoOpenDownloads_]]" restamp>
      <div class="cr-row">
        <div class="flex">$i18n{openFileTypesAutomatically}</div>
        <div class="separator"></div>
        <cr-button id="resetAutoOpenFileTypes" on-click="onClearAutoOpenFileTypesClick_">
          $i18n{clear}
        </cr-button>
      </div>
    </template>
    <template is="dom-if" if="[[downloadBubblePartialViewControlledByPref_]]">
      <settings-toggle-button id="showDownloadsToggle" class="hr" pref="{{prefs.download_bubble.partial_view_enabled}}" label="$i18n{showDownloadsWhenFinished}">
      </settings-toggle-button>
    </template>
<!--_html_template_end_-->`}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsDownloadsPageElementBase=WebUiListenerMixin(PrefsMixin(PolymerElement));class SettingsDownloadsPageElement extends SettingsDownloadsPageElementBase{constructor(){super(...arguments);this.browserProxy_=DownloadsBrowserProxyImpl.getInstance()}static get is(){return"settings-downloads-page"}static get template(){return getTemplate$f()}static get properties(){return{prefs:{type:Object,notify:true},autoOpenDownloads_:{type:Boolean,value:false},downloadLocation_:String,downloadBubblePartialViewControlledByPref_:{type:Boolean,value(){return loadTimeData.getBoolean("downloadBubblePartialViewControlledByPref")}}}}static get observers(){return["handleDownloadLocationChanged_(prefs.download.default_directory.value)"]}ready(){super.ready();this.addWebUiListener("auto-open-downloads-changed",(autoOpen=>{this.autoOpenDownloads_=autoOpen}));this.browserProxy_.initializeDownloads()}selectDownloadLocation_(){listenOnce(this,"transitionend",(()=>{this.browserProxy_.selectDownloadLocation()}))}handleDownloadLocationChanged_(){this.browserProxy_.getDownloadLocationText(this.getPref("download.default_directory").value).then((text=>{this.downloadLocation_=text}))}onClearAutoOpenFileTypesClick_(){this.browserProxy_.resetAutoOpenFileTypes()}}customElements.define(SettingsDownloadsPageElement.is,SettingsDownloadsPageElement);function getTemplate$e(){return html`<!--_html_template_start_-->    <style include="settings-shared action-link">paper-spinner-lite{margin:0 8px}#dialog-body{padding-bottom:2px}</style>
    <cr-dialog id="dialog" close-text="$i18n{close}" ignore-popstate ignore-enter-key>
      <div slot="title">
        [[getPageTitle_(isTriggered_, triggeredResetToolName_)]]
      </div>
      <div id="dialog-body" slot="body">
        <span inner-h-t-m-l="[[getExplanationText_(
              isTriggered_, triggeredResetToolName_)]]">
        </span>
        <a href="$i18nRaw{resetPageLearnMoreUrl}" aria-label="$i18n{resetLearnMoreAccessibilityText}" target="_blank">$i18n{learnMore}</a>
      </div>
      <div slot="button-container">
        <paper-spinner-lite id="resetSpinner" active="[[clearingInProgress_]]">
        </paper-spinner-lite>
        <cr-button class="cancel-button" on-click="onCancelClick_" id="cancel" disabled="[[clearingInProgress_]]">
          $i18n{cancel}
        </cr-button>
        <cr-button class="action-button" on-click="onResetClick_" id="reset" disabled="[[clearingInProgress_]]">
          $i18n{resetDialogCommit}
        </cr-button>
      </div>
      <div slot="footer">
        <cr-checkbox id="sendSettings" checked="checked">
          $i18nRaw{resetPageFeedback}</cr-checkbox>
      </div>
    </cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsResetProfileDialogElementBase=I18nMixin(PolymerElement);class SettingsResetProfileDialogElement extends SettingsResetProfileDialogElementBase{constructor(){super(...arguments);this.browserProxy_=ResetBrowserProxyImpl.getInstance()}static get is(){return"settings-reset-profile-dialog"}static get template(){return getTemplate$e()}static get properties(){return{isTriggered_:{type:Boolean,value:false},triggeredResetToolName_:{type:String,value:""},resetRequestOrigin_:String,clearingInProgress_:{type:Boolean,value:false}}}getExplanationText_(){if(this.isTriggered_){return this.i18nAdvanced("triggeredResetPageExplanation",{substitutions:[this.triggeredResetToolName_]})}if(loadTimeData.getBoolean("showExplanationWithBulletPoints")){return this.i18nAdvanced("resetPageExplanationBulletPoints",{tags:["LINE_BREAKS","LINE_BREAK"]})}return this.i18nAdvanced("resetPageExplanation")}getPageTitle_(){if(this.isTriggered_){return loadTimeData.getStringF("triggeredResetPageTitle",this.triggeredResetToolName_)}return loadTimeData.getStringF("resetDialogTitle")}ready(){super.ready();this.addEventListener("cancel",(()=>{this.browserProxy_.onHideResetProfileDialog()}));this.shadowRoot.querySelector("cr-checkbox a").addEventListener("click",this.onShowReportedSettingsClick_.bind(this))}showDialog_(){if(!this.$.dialog.open){this.$.dialog.showModal()}this.browserProxy_.onShowResetProfileDialog()}show(){this.isTriggered_=Router.getInstance().getCurrentRoute()===routes.TRIGGERED_RESET_DIALOG;if(this.isTriggered_){this.browserProxy_.getTriggeredResetToolName().then((name=>{this.resetRequestOrigin_="triggeredreset";this.triggeredResetToolName_=name;this.showDialog_()}))}else{this.resetRequestOrigin_=Router.getInstance().getQueryParameters().get("origin")||"";this.showDialog_()}}onCancelClick_(){this.cancel()}cancel(){if(this.$.dialog.open){this.$.dialog.cancel()}}onResetClick_(){this.clearingInProgress_=true;this.browserProxy_.performResetProfileSettings(this.$.sendSettings.checked,this.resetRequestOrigin_).then((()=>{this.clearingInProgress_=false;if(this.$.dialog.open){this.$.dialog.close()}this.dispatchEvent(new CustomEvent("reset-done",{bubbles:true,composed:true}))}))}onShowReportedSettingsClick_(e){this.browserProxy_.showReportedSettings();e.stopPropagation()}}customElements.define(SettingsResetProfileDialogElement.is,SettingsResetProfileDialogElement);function getTemplate$d(){return html`<!--_html_template_start_-->    <style include="settings-shared"></style>
    <settings-animated-pages id="reset-pages" section="reset">
      <div route-path="default">
        <cr-link-row id="resetProfile" label="$i18n{resetTrigger}" on-click="onShowResetProfileDialog_"></cr-link-row>
        
        <cr-lazy-render id="resetProfileDialog">
          <template>
            <settings-reset-profile-dialog on-close="onResetProfileDialogClose_">
            </settings-reset-profile-dialog>
          </template>
        </cr-lazy-render>
      </div>

    </settings-animated-pages>
<!--_html_template_end_-->`}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsResetPageElementBase=RouteObserverMixin(BaseMixin(PolymerElement));class SettingsResetPageElement extends SettingsResetPageElementBase{static get is(){return"settings-reset-page"}static get template(){return getTemplate$d()}static get properties(){return{prefs:Object}}currentRouteChanged(route){const lazyRender=this.$.resetProfileDialog;if(route===routes.TRIGGERED_RESET_DIALOG||route===routes.RESET_DIALOG){lazyRender.get().show()}else{const dialog=lazyRender.getIfExists();if(dialog){dialog.cancel()}}}onShowResetProfileDialog_(){Router.getInstance().navigateTo(routes.RESET_DIALOG,new URLSearchParams("origin=userclick"))}onResetProfileDialogClose_(){Router.getInstance().navigateTo(routes.RESET_DIALOG.parent);focusWithoutInk(this.$.resetProfile)}}customElements.define(SettingsResetPageElement.is,SettingsResetPageElement);function getTemplate$c(){return html`<!--_html_template_start_-->    <style include="cr-hidden-style">#content{display:flex;flex:1}.collapsible{overflow:hidden;text-overflow:ellipsis}span{white-space:pre}.elided-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}</style>
    <cr-toast id="toast" duration="[[duration]]">
      <div id="content" class="elided-text"></div>
      <slot id="slotted"></slot>
    </cr-toast>
<!--_html_template_end_-->`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let toastManagerInstance=null;function getToastManager(){assert(toastManagerInstance);return toastManagerInstance}function setInstance(instance){assert(!instance||!toastManagerInstance);toastManagerInstance=instance}class CrToastManagerElement extends PolymerElement{static get is(){return"cr-toast-manager"}static get template(){return getTemplate$c()}static get properties(){return{duration:{type:Number,value:0}}}get isToastOpen(){return this.$.toast.open}get slottedHidden(){return this.$.slotted.hidden}connectedCallback(){super.connectedCallback();setInstance(this)}disconnectedCallback(){super.disconnectedCallback();setInstance(null)}show(label,hideSlotted=false){this.$.content.textContent=label;this.showInternal_(hideSlotted)}showForStringPieces(pieces,hideSlotted=false){const content=this.$.content;content.textContent="";pieces.forEach((function(p){if(p.value.length===0){return}const span=document.createElement("span");span.textContent=p.value;if(p.collapsible){span.classList.add("collapsible")}content.appendChild(span)}));this.showInternal_(hideSlotted)}showInternal_(hideSlotted){this.$.slotted.hidden=hideSlotted;this.$.toast.show()}hide(){this.$.toast.hide()}}customElements.define(CrToastManagerElement.is,CrToastManagerElement);function getTemplate$b(){return html`<!--_html_template_start_-->    <style include="settings-shared">.toggle{padding:0 var(--cr-section-padding);margin-bottom:var(--cr-section-vertical-padding)}</style>
    <template is="dom-if" if="[[!is3pcdRedesignEnabled_]]">
      <settings-toggle-button id="toggle" class="hr" label="$i18n{doNotTrack}" pref="{{prefs.enable_do_not_track}}" on-settings-boolean-control-change="onToggleChange_" no-set-pref>
      </settings-toggle-button>
    </template>
    <template is="dom-if" if="[[is3pcdRedesignEnabled_]]">
      <settings-toggle-button id="toggle" class="toggle" label="$i18n{doNotTrack}" pref="{{prefs.enable_do_not_track}}" on-settings-boolean-control-change="onToggleChange_" sub-label="$i18n{trackingProtectionDoNotTrackToggleSubLabel}" icon="settings:forward" no-set-pref>
      </settings-toggle-button>
    </template>
    <template is="dom-if" if="[[showDialog_]]" on-dom-change="onDomChange_" restamp>
      <cr-dialog id="confirmDialog" close-text="$i18n{close}" on-cancel="onDialogCancel_" on-close="onDialogClosed_">
        <div slot="title">$i18n{doNotTrackDialogTitle}</div>
        <div slot="body">$i18n{doNotTrackDialogMessage}
          <a href="$i18nRaw{doNotTrackLearnMoreURL}" target="_blank" aria-description="$i18n{opensInNewTab}" aria-label="$i18n{doNotTrackDialogLearnMoreA11yLabel}">
            $i18n{learnMore}
          </a>
        </div>
        <div slot="button-container">
          <cr-button class="cancel-button" on-click="onDialogCancel_">
            $i18n{cancel}
          </cr-button>
          <cr-button class="action-button" on-click="onDialogConfirm_">
            $i18n{confirm}
          </cr-button>
        </div>
      </cr-dialog>
    </template>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SettingsDoNotTrackToggleElement extends PolymerElement{static get is(){return"settings-do-not-track-toggle"}static get template(){return getTemplate$b()}static get properties(){return{prefs:{type:Object,notify:true},showDialog_:{type:Boolean,value:false},is3pcdRedesignEnabled_:{type:Boolean,value:()=>loadTimeData.getBoolean("is3pcdCookieSettingsRedesignEnabled")}}}onDomChange_(){if(this.showDialog_){this.shadowRoot.querySelector("cr-dialog").showModal()}}onToggleChange_(event){MetricsBrowserProxyImpl.getInstance().recordSettingsPageHistogram(PrivacyElementInteractions.DO_NOT_TRACK);const target=event.target;if(!target.checked){target.sendPrefChange();return}this.showDialog_=true}closeDialog_(){this.shadowRoot.querySelector("cr-dialog").close();this.showDialog_=false}onDialogClosed_(){focusWithoutInk(this.toggle_)}onDialogConfirm_(){this.toggle_.sendPrefChange();this.closeDialog_()}onDialogCancel_(){this.toggle_.resetToPrefValue();this.closeDialog_()}get toggle_(){return this.shadowRoot.querySelector("#toggle")}}customElements.define(SettingsDoNotTrackToggleElement.is,SettingsDoNotTrackToggleElement);function getTemplate$a(){return html`<!--_html_template_start_-->    <style include="settings-shared">img{width:100%}#exceptionHeader,#explanationText,#generalControls{padding:0 var(--cr-section-padding)}#exceptionHeader3pcd{padding:0 var(--cr-section-padding);margin-bottom:-32px}#explanationText{padding-top:16px;padding-bottom:var(--cr-section-vertical-padding)}#blockThirdPartyToggle{padding:0 var(--cr-section-padding)}#advancedHeader{padding-top:16px;padding-bottom:8px;padding-left:var(--cr-section-padding)}#rollbackNotice{padding:16px var(--cr-section-padding);background:var(--cr-hover-background-color)}#picture{display:flex}.radio-group-sub-heading{padding-bottom:10px}.bullet-row{align-items:center;display:flex;padding:var(--cr-section-vertical-padding) var(--cr-section-padding)}.bullet-row>div{padding-left:var(--cr-section-padding);padding-right:40px}.bullet-line{align-items:center;display:flex;min-height:var(--cr-section-two-line-min-height)}.bullet-line.one-line{min-height:var(--cr-section-min-height)}.bullet-line>div{padding-inline-start:var(--cr-radio-button-size)}settings-collapse-radio-button{--settings-collapse-toggle-min-height:var(--cr-section-min-height)}settings-collapse-radio-button:not(:first-of-type){--settings-collapse-separator-line:var(--cr-separator-line)}settings-collapse-radio-button .bullet-line:last-child{padding-bottom:12px}#firstPartySetsToggle{padding-inline-end:0;padding-inline-start:0}#toastText{align-items:center;display:flex;max-width:300px;min-height:var(--cr-section-two-line-min-height)}</style>
    <picture id="picture" hidden="[[is3pcdRedesignEnabled_]]">
      <source srcset="chrome://settings/images/cookies_banner_dark.svg" media="(prefers-color-scheme: dark)">
      <img id="banner" alt="" src="chrome://settings/images/cookies_banner.svg">
    </picture>
    <picture hidden="[[!is3pcdRedesignEnabled_]]">
      <source srcset="chrome://settings/images/tracking_protection_banner_dark.svg" media="(prefers-color-scheme: dark)">
        <img id="banner" alt="" src="chrome://settings/images/tracking_protection_banner.svg">
      
    </picture>
    <template is="dom-if" if="[[is3pcdRedesignEnabled_]]">
      <div id="explanationText" class="secondary">
        $i18n{trackingProtectionPageDescription}
      </div>
      <div>
        <div class="bullet-row">
          <iron-icon icon="settings:visibility-off" aria-hidden="true">
          </iron-icon>
          <div>
            $i18n{trackingProtectionBulletOne}
            <div class="secondary">
              $i18n{trackingProtectionBulletOneDescription}
            </div>
          </div>
        </div>
        <div class="bullet-row">
          <iron-icon icon="settings:domain-verification" aria-hidden="true">
          </iron-icon>
          <div>
            $i18n{trackingProtectionBulletTwo}
            <div class="secondary">
              $i18nRaw{trackingProtectionBulletTwoDescription}
            </div>
        </div>
      </div>
      <h2 id="advancedHeader">$i18n{trackingProtectionAdvancedLabel}</h2>
      <settings-toggle-button id="blockThirdPartyToggle" pref="{{prefs.tracking_protection.block_all_3pc_toggle_enabled}}" label="$i18n{trackingProtectionThirdPartyCookiesToggleLabel}" sub-label="
            $i18n{trackingProtectionThirdPartyCookiesToggleSubLabel}" learn-more-url="
            $i18n{trackingProtectionThirdPartyCookiesLearnMoreUrl}" learn-more-aria-label="
            $i18n{trackingProtectionThirdPartyCookiesLearnMoreAriaLabel}" on-settings-boolean-control-change="onBlockAll3pcToggleChanged_" icon="settings:visibility-off">
      </settings-toggle-button>
      <settings-do-not-track-toggle id="doNotTrack" prefs="{{prefs}}">
      </settings-do-not-track-toggle>
    </div></template>
    <template is="dom-if" if="[[!is3pcdRedesignEnabled_]]">
      <div id="rollbackNotice" hidden="[[!showTrackingProtectionRollbackNotice_]]">
        $i18nRaw{trackingProtectionRollbackNotice}
      </div>
      <div id="explanationText" class="secondary">
        $i18n{thirdPartyCookiesPageDescription}
      </div>
      <div id="generalControls">
        <h2>$i18n{thirdPartyCookiesPageDefaultBehaviorHeading}</h2>
        <div class="secondary radio-group-sub-heading">
          $i18n{thirdPartyCookiesPageDefaultBehaviorDescription}
        </div>
        <settings-radio-group id="primarySettingGroup" no-set-pref pref="{{prefs.profile.cookie_controls_mode}}" selectable-elements="
                cr-radio-button, settings-collapse-radio-button" on-change="onCookieControlsModeChanged_">
          <settings-collapse-radio-button id="allowThirdParty" pref="[[prefs.profile.cookie_controls_mode]]" name="[[cookieControlsModeEnum_.OFF]]" label="$i18n{thirdPartyCookiesPageAllowRadioLabel}" expand-aria-label="
                  $i18n{thirdPartyCookiesPageAllowExpandA11yLabel}">
            <div slot="collapse">
              <div class="bullet-line">
                <iron-icon icon="settings:cookie"></iron-icon>
                <div class="secondary">
                  $i18n{thirdPartyCookiesPageAllowBulOne}
                </div>
              </div>
              <div class="bullet-line">
                <iron-icon icon="settings:cookie"></iron-icon>
                <div class="secondary">
                  $i18n{thirdPartyCookiesPageAllowBulTwo}
                </div>
              </div>
            </div>
          </settings-collapse-radio-button>
          <settings-collapse-radio-button id="blockThirdPartyIncognito" pref="[[prefs.profile.cookie_controls_mode]]" name="[[cookieControlsModeEnum_.INCOGNITO_ONLY]]" label="$i18n{thirdPartyCookiesPageBlockIncognitoRadioLabel}" expand-aria-label="
                  $i18n{thirdPartyCookiesPageBlockIncognitoExpandA11yLabel}">
            <div slot="collapse">
              <div class="bullet-line">
                <iron-icon icon="settings:cookie"></iron-icon>
                <div class="secondary">
                  $i18n{thirdPartyCookiesPageBlockIncognitoBulOne}
                </div>
              </div>
              <div class="bullet-line" id="blockThirdPartyIncognitoBulTwo">
                <iron-icon icon="settings:block"></iron-icon>
                <div class="secondary">
                  [[getThirdPartyCookiesPageBlockThirdPartyIncognitoBulTwoLabel_()]]
                </div>
              </div>
            </div>
          </settings-collapse-radio-button>
          <settings-collapse-radio-button id="blockThirdParty" pref="[[prefs.profile.cookie_controls_mode]]" name="[[cookieControlsModeEnum_.BLOCK_THIRD_PARTY]]" label="$i18n{thirdPartyCookiesPageBlockRadioLabel}" expand-aria-label="
                  $i18n{thirdPartyCookiesPageBlockExpandA11yLabel}">
            <div slot="collapse">
              <div class="bullet-line">
                <iron-icon icon="settings:cookie"></iron-icon>
                <div class="secondary">
                  $i18n{thirdPartyCookiesPageBlockBulOne}
                </div>
              </div>
              <div class="bullet-line">
                <iron-icon icon="settings:block"></iron-icon>
                <div class="secondary">
                  $i18n{thirdPartyCookiesPageBlockBulTwo}
                </div>
              </div>
            </div>
            <template is="dom-if" if="[[enableFirstPartySetsUI_]]">
              <div slot="noSelectionCollapse">
                <settings-toggle-button id="firstPartySetsToggle" pref="{{prefs.privacy_sandbox.first_party_sets_enabled}}" label="$i18n{cookiePageFpsLabel}" sub-label="$i18n{cookiePageFpsSubLabel}" disabled="[[firstPartySetsToggleDisabled_(
                        prefs.profile.cookie_controls_mode.value)]]">
                </settings-toggle-button>
              </div>
            </template>
          </settings-collapse-radio-button>
        </settings-radio-group>
      </div>
    </template>
    <settings-do-not-track-toggle id="doNotTrack" prefs="{{prefs}}" hidden="[[is3pcdRedesignEnabled_]]">
    </settings-do-not-track-toggle>
    <cr-link-row id="site-data-trigger" class="hr" on-click="onSiteDataClick_" label="$i18n{cookiePageAllSitesLink}" role-description="$i18n{subpageArrowRoleDescription}">
    </cr-link-row>
    <template is="dom-if" if="[[!is3pcdRedesignEnabled_]]">
      <div id="exceptionHeader">
        <h2>$i18n{thirdPartyCookiesPageCustomizedBehaviorHeading}</h2>
        <div id="exceptionHeaderSubLabel" class="secondary">
          $i18n{thirdPartyCookiesPageCustomizedBehaviorDescription}
        </div>
      </div>
      <site-list id="allowExceptionsList" category="[[cookiesContentSettingType_]]" category-subtype="[[contentSetting_.ALLOW]]" category-header="
              $i18n{thirdPartyCookiesPageAllowExceptionsSubHeading}" read-only-list="[[exceptionListsReadOnly_]]" search-filter="[[searchTerm]]" cookies-exception-type="third-party">
      </site-list>
    </template>
    <template is="dom-if" if="[[is3pcdRedesignEnabled_]]">
      <div id="exceptionHeader3pcd">
        <h2>$i18n{trackingProtectionSitesAllowedCookiesTitle}</h2>
      </div>
      <site-list id="allowExceptionsList" category="[[cookiesContentSettingType_]]" category-subtype="[[contentSetting_.ALLOW]]" category-header="$i18n{trackingProtectionSitesAllowedCookiesDescription}" read-only-list="[[exceptionListsReadOnly_]]" search-filter="[[searchTerm]]" cookies-exception-type="third-party">
      </site-list>
    </template>
    <cr-toast id="toast">
      <div id="toastText">$i18n{privacySandboxCookiesDialog}</div>
      <cr-button on-click="onPrivacySandboxClick_">
        $i18n{privacySandboxCookiesDialogMore}
      </cr-button>
      <a id="privacySandboxLink" href="adPrivacy" target="_blank" tabindex="-1" aria-disabled="true" role="none"></a>
    </cr-toast>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsCookiesPageElementBase=RouteObserverMixin(WebUiListenerMixin(I18nMixin(PrefsMixin(PolymerElement))));class SettingsCookiesPageElement extends SettingsCookiesPageElementBase{constructor(){super(...arguments);this.metricsBrowserProxy_=MetricsBrowserProxyImpl.getInstance()}static get is(){return"settings-cookies-page"}static get template(){return getTemplate$a()}static get properties(){return{prefs:{type:Object,notify:true},searchTerm:{type:String,notify:true,value:""},cookiePrimarySettingEnum_:{type:Object,value:CookiePrimarySetting},cookieControlsModeEnum_:{type:Object,value:CookieControlsMode},contentSetting_:{type:Object,value:ContentSetting},cookiesContentSettingType_:{type:String,value:ContentSettingsTypes.COOKIES},exceptionListsReadOnly_:{type:Boolean,value:false},blockAllPref_:{type:Object,value(){return{}}},focusConfig:{type:Object,observer:"focusConfigChanged_"},enableFirstPartySetsUI_:{type:Boolean,value:()=>loadTimeData.getBoolean("firstPartySetsUIEnabled")},is3pcdRedesignEnabled_:{type:Boolean,value:()=>loadTimeData.getBoolean("is3pcdCookieSettingsRedesignEnabled")},showTrackingProtectionRollbackNotice_:{type:Boolean,value:()=>loadTimeData.getBoolean("showTrackingProtectionSettingsRollbackNotice")}}}static get observers(){return[`onGeneratedPrefsUpdated_(prefs.generated.cookie_session_only,\n        prefs.generated.cookie_primary_setting,\n        prefs.generated.cookie_default_content_setting)`]}focusConfigChanged_(_newConfig,oldConfig){assert(!oldConfig);const selectSiteDataLinkRow=()=>{const toFocus=this.shadowRoot.querySelector("#site-data-trigger");assert(toFocus);focusWithoutInk(toFocus)};if(this.is3pcdRedesignEnabled_){this.focusConfig.set(`${routes.SITE_SETTINGS_ALL.path}_${routes.TRACKING_PROTECTION.path}`,selectSiteDataLinkRow)}else{this.focusConfig.set(`${routes.SITE_SETTINGS_ALL.path}_${routes.COOKIES.path}`,selectSiteDataLinkRow)}}currentRouteChanged(route){if(this.is3pcdRedesignEnabled_){if(route!==routes.TRACKING_PROTECTION){this.$.toast.hide()}}else if(route!==routes.COOKIES){this.$.toast.hide()}}getThirdPartyCookiesPageBlockThirdPartyIncognitoBulTwoLabel_(){return this.i18n(this.enableFirstPartySetsUI_?"cookiePageBlockThirdIncognitoBulTwoFps":"thirdPartyCookiesPageBlockIncognitoBulTwo")}getCookiesPageBlockThirdPartyIncognitoBulTwoLabel_(){return this.i18n(this.enableFirstPartySetsUI_?"cookiePageBlockThirdIncognitoBulTwoFps":"cookiePageBlockThirdIncognitoBulTwo")}onSiteDataClick_(){Router.getInstance().navigateTo(routes.SITE_SETTINGS_ALL)}onGeneratedPrefsUpdated_(){const defaultContentSettingPref=this.getPref("generated.cookie_default_content_setting");this.exceptionListsReadOnly_=defaultContentSettingPref.enforcement===chrome.settingsPrivate.Enforcement.ENFORCED}onBlockAll3pcToggleChanged_(event){this.metricsBrowserProxy_.recordSettingsPageHistogram(PrivacyElementInteractions.BLOCK_ALL_THIRD_PARTY_COOKIES);const target=event.target;if(target.checked){this.metricsBrowserProxy_.recordAction("Settings.PrivacySandbox.Block3PCookies")}}onCookieControlsModeChanged_(){const primarySettingGroup=this.shadowRoot.querySelector("#primarySettingGroup");const selection=Number(primarySettingGroup.selected);if(selection===CookieControlsMode.OFF){this.metricsBrowserProxy_.recordSettingsPageHistogram(PrivacyElementInteractions.THIRD_PARTY_COOKIES_ALLOW)}else if(selection===CookieControlsMode.INCOGNITO_ONLY){this.metricsBrowserProxy_.recordSettingsPageHistogram(PrivacyElementInteractions.THIRD_PARTY_COOKIES_BLOCK_IN_INCOGNITO)}else{assert(selection===CookieControlsMode.BLOCK_THIRD_PARTY);this.metricsBrowserProxy_.recordSettingsPageHistogram(PrivacyElementInteractions.THIRD_PARTY_COOKIES_BLOCK)}const currentCookieControlsMode=this.getPref("profile.cookie_controls_mode").value;const areAnyPrivacySandboxApisEnabled=this.getPref("privacy_sandbox.m1.topics_enabled").value||this.getPref("privacy_sandbox.m1.fledge_enabled").value||this.getPref("privacy_sandbox.m1.ad_measurement_enabled").value;const areThirdPartyCookiesAllowed=currentCookieControlsMode===CookieControlsMode.OFF||currentCookieControlsMode===CookieControlsMode.INCOGNITO_ONLY;if(areAnyPrivacySandboxApisEnabled&&areThirdPartyCookiesAllowed&&selection===CookieControlsMode.BLOCK_THIRD_PARTY){if(!loadTimeData.getBoolean("isPrivacySandboxRestricted")){this.$.toast.show()}this.metricsBrowserProxy_.recordAction("Settings.PrivacySandbox.Block3PCookies")}else{this.$.toast.hide()}primarySettingGroup.sendPrefChange()}onClearOnExitChange_(){this.metricsBrowserProxy_.recordSettingsPageHistogram(PrivacyElementInteractions.COOKIES_SESSION)}onPrivacySandboxClick_(){this.metricsBrowserProxy_.recordAction("Settings.PrivacySandbox.OpenedFromCookiesPageToast");this.$.toast.hide();this.shadowRoot.querySelector("#privacySandboxLink").click()}firstPartySetsToggleDisabled_(){return this.getPref("profile.cookie_controls_mode").value!==CookieControlsMode.BLOCK_THIRD_PARTY}}customElements.define(SettingsCookiesPageElement.is,SettingsCookiesPageElement);function getTemplate$9(){return html`<!--_html_template_start_--><style include="privacy-guide-fragment-shared"></style>
<div class="header-phase2" focus-element tabindex="-1">
  <picture>
    <source srcset="./images/privacy_guide/preload_graphic_dark.svg" media="(prefers-color-scheme: dark)">
    <img alt="" src="./images/privacy_guide/preload_graphic.svg">
  </picture>
  <h2 class="header-label-phase2">$i18n{preloadingPageSummary}</h2>
</div>
<div class="fragment-content">
  <settings-radio-group id="preloadRadioGroup" pref="{{prefs.net.network_prediction_options}}" selectable-elements="settings-collapse-radio-button">
    <settings-collapse-radio-button id="preloadRadioStandard" pref="[[prefs.net.network_prediction_options]]" name="[[networkPredictionOptionsEnum_.STANDARD]]" label="$i18n{preloadingPageStandardPreloadingTitle}" sub-label="$i18n{preloadingPageStandardPreloadingSummary}">
      <div slot="collapse" class="settings-columned-section">
        <div class="column">
          <h3 class="description-header">
            $i18n{privacyGuideFeatureDescriptionHeader}
          </h3>
          <div role="list">
            <privacy-guide-description-item role="listitem" icon="settings20:bolt" label="$i18n{preloadingPageStandardPreloadingWhenOnBulletOne}">
            </privacy-guide-description-item>
            <privacy-guide-description-item role="listitem" icon="settings20:select-window" label="$i18n{preloadingPageStandardPreloadingWhenOnBulletTwo}">
            </privacy-guide-description-item>
          </div>
        </div>
        <div class="column">
          <h3 class="description-header">
            $i18n{privacyGuideThingsToConsider}
          </h3>
          <div role="list">
            <privacy-guide-description-item role="listitem" icon="settings:cookie" label="$i18n{preloadingPageThingsToConsiderBulletOne}">
            </privacy-guide-description-item>
          </div>
        </div>
      </div>
    </settings-collapse-radio-button>
    <settings-collapse-radio-button id="noPreloading" no-collapse pref="[[prefs.net.network_prediction_options]]" name="[[networkPredictionOptionsEnum_.DISABLED]]" label="$i18n{preloadingPageNoPreloadingTitle}" sub-label="$i18n{preloadingPageNoPreloadingSummary}">
    </settings-collapse-radio-button>
  </settings-radio-group>
</div>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PrivacyGuidePreloadFragmentBase=PrefsMixin(PolymerElement);class PrivacyGuidePreloadFragmentElement extends PrivacyGuidePreloadFragmentBase{static get is(){return"privacy-guide-preload-fragment"}static get template(){return getTemplate$9()}static get properties(){return{prefs:{type:Object,notify:true},networkPredictionOptionsEnum_:{type:Object,value:NetworkPredictionOptions}}}focus(){const focusElement=this.shadowRoot.querySelector("[focus-element]");assert(focusElement);focusElement.focus()}}customElements.define(PrivacyGuidePreloadFragmentElement.is,PrivacyGuidePreloadFragmentElement);const template=html`<iron-iconset-svg name="firstLevelTopics20" size="20">
    <svg>
      <defs>
        <g id="artist" viewBox="0 -960 960 960"><path d="M740-560h140v80h-80v220q0 42-29 71t-71 29q-42 0-71-29t-29-71q0-42 29-71t71-29q8 0 18 1.5t22 6.5v-208ZM120-160v-112q0-35 17.5-63t46.5-43q62-31 126-46.5T440-440q42 0 83.5 6.5T607-414q-20 12-36 29t-28 37q-26-6-51.5-9t-51.5-3q-57 0-112 14t-108 40q-9 5-14.5 14t-5.5 20v32h321q2 20 9.5 40t20.5 40H120Zm320-320q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T520-640q0-33-23.5-56.5T440-720q-33 0-56.5 23.5T360-640q0 33 23.5 56.5T440-560Zm0-80Zm0 400Z"></path></g>
        <g id="bigtop-updates" viewBox="0 -960 960 960"><path d="M198-278q-57-57-87.5-129.5T80-560q0-80 30.5-152.5T198-842l48 48q-47 47-72.5 107.5T148-560q0 66 25.5 126.5T246-326l-48 48Zm92-92q-38-38-58-87t-20-103q0-54 20-103t58-87l48 48q-29 29-43.5 65.5T280-560q0 40 14.5 76.5T338-418l-48 48Zm150 250v-348q-27-12-43.5-37T380-560q0-42 29-71t71-29q42 0 71 29t29 71q0 30-16.5 55T520-468v348h-80Zm230-250-48-48q29-29 43.5-65.5T680-560q0-40-14.5-76.5T622-702l48-48q38 38 58 87t20 103q0 54-20 103t-58 87Zm92 92-48-48q47-47 72.5-107.5T812-560q0-66-25.5-126.5T714-794l48-48q57 57 87.5 129.5T880-560q0 80-30.5 152.5T762-278Z"></path></g>
        <g id="business-center" viewBox="0 -960 960 960"><path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm240-600h160v-80H400v80Zm400 360H600v80H360v-80H160v160h640v-160Zm-360 0h80v-80h-80v80Zm-280-80h200v-80h240v80h200v-200H160v200Zm320 40Z"></path></g>
        <g id="category" viewBox="0 -960 960 960"><path d="m260-520 220-360 220 360H260ZM700-80q-75 0-127.5-52.5T520-260q0-75 52.5-127.5T700-440q75 0 127.5 52.5T880-260q0 75-52.5 127.5T700-80Zm-580-20v-320h320v320H120Zm580-60q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm-500-20h160v-160H200v160Zm202-420h156l-78-126-78 126Zm78 0ZM360-340Zm340 80Z"></path></g>
        <g id="communities" viewBox="0 -960 960 960"><path d="M360-320q33 0 56.5-23.5T440-400q0-33-23.5-56.5T360-480q-33 0-56.5 23.5T280-400q0 33 23.5 56.5T360-320Zm240 0q33 0 56.5-23.5T680-400q0-33-23.5-56.5T600-480q-33 0-56.5 23.5T520-400q0 33 23.5 56.5T600-320ZM480-520q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520Zm0 440q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></g>
        <g id="crowdsource" viewBox="0 -960 960 960"><path d="M660-570q-25 0-42.5-17.5T600-630q0-25 17.5-42.5T660-690q25 0 42.5 17.5T720-630q0 25-17.5 42.5T660-570Zm-360 0q-25 0-42.5-17.5T240-630q0-25 17.5-42.5T300-690q25 0 42.5 17.5T360-630q0 25-17.5 42.5T300-570Zm180 110q-25 0-42.5-17.5T420-520q0-25 17.5-42.5T480-580q25 0 42.5 17.5T540-520q0 25-17.5 42.5T480-460Zm0-220q-25 0-42.5-17.5T420-740q0-25 17.5-42.5T480-800q25 0 42.5 17.5T540-740q0 25-17.5 42.5T480-680Zm0 520q-20 0-40.5-3t-39.5-8v-143q0-35 23.5-60.5T480-400q33 0 56.5 25.5T560-314v143q-19 5-39.5 8t-40.5 3Zm-140-32q-20-8-38.5-18T266-232q-28-20-44.5-52T205-352q0-26-5.5-48.5T180-443q-10-13-37.5-39.5T92-532q-11-11-11-28t11-28q11-11 28-11t28 11l153 145q20 18 29.5 42.5T340-350v158Zm280 0v-158q0-26 10-51t29-42l153-145q12-11 28.5-11t27.5 11q11 11 11 28t-11 28q-23 23-50.5 49T780-443q-14 20-19.5 42.5T755-352q0 36-16.5 68.5T693-231q-16 11-34.5 21T620-192Z"></path></g>
        <g id="directions-car" viewBox="0 -960 960 960"><path d="M240-200v40q0 17-11.5 28.5T200-120h-40q-17 0-28.5-11.5T120-160v-320l84-240q6-18 21.5-29t34.5-11h440q19 0 34.5 11t21.5 29l84 240v320q0 17-11.5 28.5T800-120h-40q-17 0-28.5-11.5T720-160v-40H240Zm-8-360h496l-42-120H274l-42 120Zm-32 80v200-200Zm100 160q25 0 42.5-17.5T360-380q0-25-17.5-42.5T300-440q-25 0-42.5 17.5T240-380q0 25 17.5 42.5T300-320Zm360 0q25 0 42.5-17.5T720-380q0-25-17.5-42.5T660-440q-25 0-42.5 17.5T600-380q0 25 17.5 42.5T660-320Zm-460 40h560v-200H200v200Z"></path></g>
        <g id="keyboard" viewBox="0 -960 960 960"><path d="M160-200q-33 0-56.5-23.5T80-280v-400q0-33 23.5-56.5T160-760h640q33 0 56.5 23.5T880-680v400q0 33-23.5 56.5T800-200H160Zm0-80h640v-400H160v400Zm160-40h320v-80H320v80ZM200-440h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM200-560h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM160-280v-400 400Z"></path></g>
        <g id="menu-book" viewBox="0 -960 960 960"><path d="M560-564v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-600q-38 0-73 9.5T560-564Zm0 220v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-380q-38 0-73 9t-67 27Zm0-110v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-490q-38 0-73 9.5T560-454ZM260-320q47 0 91.5 10.5T440-278v-394q-41-24-87-36t-93-12q-36 0-71.5 7T120-692v396q35-12 69.5-18t70.5-6Zm260 42q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q46-24 96-36t102-12q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 102 12t96 36q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59ZM280-494Z"></path></g>
        <g id="fastfood" viewBox="0 -960 960 960"><path d="M533-440q-32-45-84.5-62.5T340-520q-56 0-108.5 17.5T147-440h386ZM40-360q0-109 91-174.5T340-600q118 0 209 65.5T640-360H40Zm0 160v-80h600v80H40ZM720-40v-80h56l56-560H450l-10-80h200v-160h80v160h200L854-98q-3 25-22 41.5T788-40h-68Zm0-80h56-56ZM80-40q-17 0-28.5-11.5T40-80v-40h600v40q0 17-11.5 28.5T600-40H80Zm260-400Z"></path></g>
        <g id="finance-mode" viewBox="0 -960 960 960"><path d="M320-414v-306h120v306l-60-56-60 56Zm200 60v-526h120v406L520-354ZM120-216v-344h120v224L120-216Zm0 98 258-258 142 122 224-224h-64v-80h200v200h-80v-64L524-146 382-268 232-118H120Z"></path></g>
        <g id="gavel" viewBox="0 -960 960 960"><path d="M160-120v-80h480v80H160Zm226-194L160-540l84-86 228 226-86 86Zm254-254L414-796l86-84 226 226-86 86Zm184 408L302-682l56-56 522 522-56 56Z"></path></g>
        <g id="health-and-beauty" viewBox="0 -960 960 960"><path d="M200-80 40-520l200-120v-240h160v240l200 120L440-80H200Zm480 0q-17 0-28.5-11.5T640-120q0-17 11.5-28.5T680-160h120v-80H680q-17 0-28.5-11.5T640-280q0-17 11.5-28.5T680-320h120v-80H680q-17 0-28.5-11.5T640-440q0-17 11.5-28.5T680-480h120v-80H680q-17 0-28.5-11.5T640-600q0-17 11.5-28.5T680-640h120v-80H680q-17 0-28.5-11.5T640-760q0-17 11.5-28.5T680-800h160q33 0 56.5 23.5T920-720v560q0 33-23.5 56.5T840-80H680Zm-424-80h128l118-326-124-74H262l-124 74 118 326Zm64-200Z"></path></g>
        <g id="home-and-garden" viewBox="0 -960 960 960"><path d="M641-26q-20 12-41.5 19T555 0q-64 0-109-45.5T401-156q0-23 6.5-44t19.5-40q-13-19-19.5-41t-6.5-45q0-64 45-109t109-45q23 0 45 6.5t41 19.5q19-13 41-19.5t45-6.5q64 0 109 44.5T881-328q0 23-6.5 45T855-242q13 20 19.5 42.5T881-154q0 64-45.5 109T725 0q-23 0-44-7t-40-19Zm134-183-36-32 40-34q11-9 16.5-22.5T801-326q0-31-21.5-52.5T727-400q-16 0-29.5 5.5T675-378l-35 40-34-40q-9-11-22.5-16.5T554-400q-30 0-51.5 22T481-324q0 15 6.5 28.5T506-271l36 30-40 34q-10 9-15.5 22t-5.5 29q0 32 21.5 54T554-80q15 0 29.5-7t26.5-21l30-34 35 40q9 11 22.5 16.5T727-80q31 0 52.5-22t21.5-54q0-14-6.5-28T775-209Zm-134 25q23 0 39.5-16.5T697-240q0-23-16.5-39.5T641-296q-23 0-39.5 16.5T585-240q0 23 16.5 39.5T641-184Zm-481 24v-402H40l440-358 440 358H800v42h-80v-102L480-818 240-622v382h120v80H160Zm481-80Z"></path></g>
        <g id="newsmode" viewBox="0 -960 960 960"><path d="M160-120q-33 0-56.5-23.5T80-200v-560q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v560q0 33-23.5 56.5T800-120H160Zm0-80h640v-560H160v560Zm80-80h480v-80H240v80Zm0-160h160v-240H240v240Zm240 0h240v-80H480v80Zm0-160h240v-80H480v80ZM160-200v-560 560Z"></path></g>
        <g id="pets" viewBox="0 -960 960 960"><path d="M180-475q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm180-160q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm240 0q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm180 160q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM266-75q-45 0-75.5-34.5T160-191q0-52 35.5-91t70.5-77q29-31 50-67.5t50-68.5q22-26 51-43t63-17q34 0 63 16t51 42q28 32 49.5 69t50.5 69q35 38 70.5 77t35.5 91q0 47-30.5 81.5T694-75q-54 0-107-9t-107-9q-54 0-107 9t-107 9Z"></path></g>
        <g id="real-estate-agent" viewBox="0 -960 960 960"><path d="M760-400v-260L560-800 360-660v60h-80v-100l280-200 280 200v300h-80ZM560-800Zm20 160h40v-40h-40v40Zm-80 0h40v-40h-40v40Zm80 80h40v-40h-40v40Zm-80 0h40v-40h-40v40ZM280-220l278 76 238-74q-5-9-14.5-15.5T760-240H558q-27 0-43-2t-33-8l-93-31 22-78 81 27q17 5 40 8t68 4q0-11-6.5-21T578-354l-234-86h-64v220ZM40-80v-440h304q7 0 14 1.5t13 3.5l235 87q33 12 53.5 42t20.5 66h80q50 0 85 33t35 87v40L560-60l-280-78v58H40Zm80-80h80v-280h-80v280Z"></path></g>
        <g id="sailing" viewBox="0 -960 960 960"><path d="m120-420 320-460v460H120Zm153-80h87v-125l-87 125Zm227 80q12-28 26-98t14-142q0-72-13.5-148T500-920q61 18 121.5 67t109 117q48.5 68 79 149.5T840-420H500Zm104-80h148q-17-77-55.5-141T615-750q2 21 3.5 43.5T620-660q0 47-4.5 87T604-500ZM360-200q-36 0-67-17t-53-43q-14 15-30.5 28T173-211q-35-26-59.5-64.5T80-360h800q-9 46-33.5 84.5T787-211q-20-8-36.5-21T720-260q-23 26-53.5 43T600-200q-36 0-67-17t-53-43q-22 26-53 43t-67 17ZM80-40v-80h40q32 0 62.5-10t57.5-30q27 20 57.5 29.5T360-121q32 0 62-9.5t58-29.5q27 20 57.5 29.5T600-121q32 0 62-9.5t58-29.5q28 20 58 30t62 10h40v80h-40q-31 0-61-7.5T720-70q-29 15-59 22.5T600-40q-31 0-61-7.5T480-70q-29 15-59 22.5T360-40q-31 0-61-7.5T240-70q-29 15-59 22.5T120-40H80Zm280-460Zm244 0Z"></path></g>
        <g id="school" viewBox="0 -960 960 960"><path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z"></path></g>
        <g id="shopping-bag" viewBox="0 -960 960 960"><path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z"></path></g>
        <g id="sports-and-outdoors" viewBox="0 -960 960 960"><path d="m414-168 12-56q3-13 12.5-21.5T462-256l124-10q13-2 24 5t16 19l16 38q39-23 70-55.5t52-72.5l-12-6q-11-8-16-19.5t-2-24.5l28-122q3-12 12.5-20t21.5-10q-5-25-12.5-48.5T764-628q-9 5-19.5 4.5T726-630l-106-64q-11-7-16-19t-2-25l8-34q-31-14-63.5-21t-66.5-7q-14 0-29 1.5t-29 4.5l30 68q5 12 2.5 25T442-680l-94 82q-10 9-23.5 10t-24.5-6l-92-56q-23 38-35.5 81.5T160-480q0 16 4 52l88-8q14-2 25.5 4.5T294-412l48 114q5 12 2.5 25T332-252l-38 32q27 20 57.5 33t62.5 19Zm72-172q-13 2-24-5t-16-19l-54-124q-5-12-1.5-25t13.5-21l102-86q9-9 22-10t24 6l112 66q11 7 17 19t3 25l-32 130q-3 13-12 21.5T618-352l-132 12Zm-6 260q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"></path></g>
        <g id="travel" viewBox="0 -960 960 960"><path d="m274-274-128-70 42-42 100 14 156-156-312-170 56-56 382 98 157-155q17-17 42.5-17t42.5 17q17 17 17 42.5T812-726L656-570l98 382-56 56-170-312-156 156 14 100-42 42-70-128Z"></path></g>
        <g id="videogame-asset" viewBox="0 -960 960 960"><path d="M160-240q-33 0-56.5-23.5T80-320v-320q0-33 23.5-56.5T160-720h640q33 0 56.5 23.5T880-640v320q0 33-23.5 56.5T800-240H160Zm0-80h640v-320H160v320Zm120-40h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80Zm300 0q25 0 42.5-17.5T640-420q0-25-17.5-42.5T580-480q-25 0-42.5 17.5T520-420q0 25 17.5 42.5T580-360Zm120-120q25 0 42.5-17.5T760-540q0-25-17.5-42.5T700-600q-25 0-42.5 17.5T640-540q0 25 17.5 42.5T700-480ZM160-320v-320 320Z"></path></g>
      </defs>
    </svg>
</iron-iconset-svg>`;document.head.appendChild(template.content);function getTemplate$8(){return html`<!--_html_template_start_--><style include="cr-shared-style settings-shared iron-flex">#explanationText{padding:0 var(--cr-section-padding)}.outer-row{align-items:center;display:flex;min-height:var(--cr-section-two-line-min-height);--cr-icon-button-margin-end:20px;padding:0 var(--cr-section-padding);width:100%}.topic-toggle{align-items:center;display:flex;width:100%}.icon{margin-inline-end:var(--cr-icon-button-margin-end)}.label-wrapper{padding:var(--cr-section-vertical-padding) 0;margin-inline-end:20px}</style>
<div id="explanationText">
  $i18nRaw{manageTopicsPageDescription}
</div>
<template is="dom-repeat" items="[[firstLevelTopicsList_]]">
  <div class="topic-toggle">
    <div class="outer-row">
      <span class="icon">
        <iron-icon slot="icon" icon="[[computeTopicIcon_(item.topic.topicId)]]">
        </iron-icon>
      </span>
      <div class="flex label-wrapper">
        <div class="label">[[item.topic.displayString]]</div>
        <div class="cr-secondary-text sub-label">
          <span class="sub-label-text">[[item.topic.description]]</span>
        </div>
      </div>
      <cr-toggle id="toggle-[[item.topic.topicId]]" on-change="onToggleChange_" checked="[[!item.removed]]"></cr-toggle>
    </div>
  </div>
</template>
<template is="dom-if" if="[[shouldShowBlockTopicDialog_]]" restamp>
  <settings-simple-confirmation-dialog id="blockTopicDialog" title-text="[[blockTopicDialogTitle_]]" body-text="[[blockTopicDialogBody_]]" confirm-text="$i18n{manageTopicDialogBlockButtonText}" on-close="onBlockTopicDialogClose_">
  </settings-simple-confirmation-dialog>
</template>
<!--_html_template_end_-->`}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsPrivacySandboxManageTopicsSubpageElementBase=I18nMixin(PolymerElement);const topicIdToIconName=new Map([[1,"firstLevelTopics20:artist"],[57,"firstLevelTopics20:directions-car"],[86,"firstLevelTopics20:health-and-beauty"],[100,"firstLevelTopics20:menu-book"],[103,"firstLevelTopics20:business-center"],[126,"firstLevelTopics20:keyboard"],[149,"firstLevelTopics20:finance-mode"],[172,"firstLevelTopics20:fastfood"],[180,"firstLevelTopics20:videogame-asset"],[196,"firstLevelTopics20:sailing"],[207,"firstLevelTopics20:home-and-garden"],[215,"firstLevelTopics20:bigtop-updates"],[226,"firstLevelTopics20:school"],[239,"firstLevelTopics20:gavel"],[243,"firstLevelTopics20:newsmode"],[250,"firstLevelTopics20:communities"],[254,"firstLevelTopics20:crowdsource"],[263,"firstLevelTopics20:pets"],[272,"firstLevelTopics20:real-estate-agent"],[289,"firstLevelTopics20:shopping-bag"],[299,"firstLevelTopics20:sports-and-outdoors"],[332,"firstLevelTopics20:travel"]]);class SettingsPrivacySandboxManageTopicsSubpageElement extends SettingsPrivacySandboxManageTopicsSubpageElementBase{constructor(){super(...arguments);this.privacySandboxBrowserProxy_=PrivacySandboxBrowserProxyImpl.getInstance()}static get is(){return"settings-privacy-sandbox-manage-topics-subpage"}static get template(){return getTemplate$8()}static get properties(){return{firstLevelTopicsList_:{type:Array,value(){return[]}},blockTopicDialogTitle_:{type:String,value:""},blockTopicDialogBody_:{type:String,value:""},shouldShowBlockTopicDialog_:{type:Boolean,value:false}}}ready(){super.ready();this.$.explanationText.querySelectorAll("a").forEach((link=>link.setAttribute("aria-description",this.i18n("opensInNewTab"))));this.privacySandboxBrowserProxy_.getFirstLevelTopics().then((state=>this.onFirstLevelTopicsStateChanged_(state)))}onFirstLevelTopicsStateChanged_(state){const blockedTopicsList=state.blockedTopics.map((topic=>({topic:topic,removed:true})));this.firstLevelTopicsList_=state.firstLevelTopics.map((firstLevelTopic=>({topic:firstLevelTopic,removed:blockedTopicsList.some((interest=>interest.topic?.topicId===firstLevelTopic.topicId))})))}async onToggleChange_(e){this.topicBeingToggled_=e.model.item;assert(this.topicBeingToggled_);assert(this.topicBeingToggled_.topic);const toggleId=`#toggle-${this.topicBeingToggled_.topic.topicId}`;const toggleBeingChanged=this.shadowRoot.querySelector(toggleId);assert(toggleBeingChanged);if(toggleBeingChanged.checked){this.updateTopicState_({blocked:false});return}const childTopics=await this.privacySandboxBrowserProxy_.getChildTopicsCurrentlyAssigned(this.topicBeingToggled_.topic);if(childTopics.length!==0){this.blockTopicDialogTitle_=loadTimeData.getStringF("manageTopicsDialogTitle",this.topicBeingToggled_.topic.displayString);this.blockTopicDialogBody_=loadTimeData.getStringF("manageTopicsDialogBody",this.topicBeingToggled_.topic.displayString);this.shouldShowBlockTopicDialog_=true;return}this.updateTopicState_({blocked:true})}updateTopicState_(blockedOptions){assert(this.topicBeingToggled_);assert(this.topicBeingToggled_.topic);this.topicBeingToggled_.removed=blockedOptions.blocked;this.firstLevelTopicsList_=this.firstLevelTopicsList_.slice();this.privacySandboxBrowserProxy_.setTopicAllowed(this.topicBeingToggled_.topic,!blockedOptions.blocked);this.topicBeingToggled_=undefined}onBlockTopicDialogClose_(){const dialog=this.shadowRoot.querySelector("settings-simple-confirmation-dialog");assert(dialog);if(dialog.wasConfirmed()){this.onBlockButtonDialogHandler_()}else{this.onCancelButtonDialogHandler_()}this.blockTopicDialogBody_="";this.blockTopicDialogTitle_="";this.topicBeingToggled_=undefined;this.shouldShowBlockTopicDialog_=false}onCancelButtonDialogHandler_(){this.firstLevelTopicsList_=this.firstLevelTopicsList_.map((topic=>({...topic})))}onBlockButtonDialogHandler_(){this.updateTopicState_({blocked:true})}computeTopicIcon_(topicId){return topicIdToIconName.get(topicId)||"firstLevelTopics20:category"}}customElements.define(SettingsPrivacySandboxManageTopicsSubpageElement.is,SettingsPrivacySandboxManageTopicsSubpageElement);function getTemplate$7(){return html`<!--_html_template_start_--><style include="cr-shared-style settings-shared">:host{display:block}.icon-blue{fill:var(--google-blue-600)}@media (prefers-color-scheme:dark){.icon-blue{fill:var(--google-blue-300)}}</style>

<settings-safety-hub-module header="[[headerString_]]" header-icon="settings20:my_extensions">
  <div slot="button-container">
    <cr-button id="reviewButton" on-click="onButtonClick_">
      $i18n{safetyCheckReview}
      <iron-icon icon="cr:open-in-new" class="icon-blue" slot="suffix-icon">
      </iron-icon>
    </cr-button>
  </div>
</settings-safety-hub-module><!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsSafetyHubExtensionsModuleElementBase=WebUiListenerMixin(PolymerElement);class SettingsSafetyHubExtensionsModuleElement extends SettingsSafetyHubExtensionsModuleElementBase{static get is(){return"settings-safety-hub-extensions-module"}static get template(){return getTemplate$7()}static get properties(){return{headerString_:String}}async connectedCallback(){super.connectedCallback();this.addWebUiListener(SafetyHubEvent.EXTENSIONS_CHANGED,(num=>this.onSafetyCheckExtensionsChanged_(num)));const numExtensions=await SafetyHubBrowserProxyImpl.getInstance().getNumberOfExtensionsThatNeedReview();this.onSafetyCheckExtensionsChanged_(numExtensions)}async onSafetyCheckExtensionsChanged_(numExtensions){this.headerString_=await PluralStringProxyImpl.getInstance().getPluralString("safetyCheckExtensionsReviewLabel",numExtensions)}onButtonClick_(){MetricsBrowserProxyImpl.getInstance().recordAction("Settings.SafetyCheck.ReviewExtensionsThroughSafetyCheck");OpenWindowProxyImpl.getInstance().openUrl("chrome://extensions")}}customElements.define(SettingsSafetyHubExtensionsModuleElement.is,SettingsSafetyHubExtensionsModuleElement);function getTemplate$6(){return html`<!--_html_template_start_--><style include="cr-shared-style settings-shared">paper-tooltip{--paper-tooltip-min-width:max-content}</style>
<settings-safety-hub-module id="module" animated on-sh-module-item-button-click="onBlockClick_" on-sh-module-more-action-button-click="onMoreActionClick_" header="[[headerString_]]" subheader="[[subheaderString_]]" header-icon="[[headerIconString_]]" button-aria-label-id="safetyCheckNotificationPermissionReviewDontAllowAriaLabel" button-icon="cr20:block" button-tooltip-text="$i18n{safetyCheckNotificationPermissionReviewDontAllowLabel}" more-action-visible more-button-aria-label-id="safetyCheckNotificationPermissionReviewMoreActionsAriaLabel" sites="[[sites_]]">
  <div slot="button-container">
    <cr-button id="blockAllButton" on-click="onBlockAllClick_" hidden$="[[shouldShowCompletionInfo_]]">
      $i18n{safetyCheckNotificationPermissionReviewBlockAllLabel}
    </cr-button>
    <cr-icon-button id="moreActionButton" class="icon-more-vert" on-click="onHeaderMoreActionClick_" hidden$="[[shouldShowCompletionInfo_]]" title="$i18n{moreActions}">
    </cr-icon-button>
    <cr-icon-button id="bulkUndoButton" iron-icon="settings20:undo" on-click="onUndoClick_" hidden$="[[!shouldShowCompletionInfo_]]" on-focus="showUndoTooltip_" on-mouseenter="showUndoTooltip_" aria-label$="$i18n{safetyCheckNotificationPermissionReviewUndo}">>
    </cr-icon-button>
  </div>
</settings-safety-hub-module>
<cr-action-menu id="actionMenu" role-description="$i18n{menu}">
  <button class="dropdown-item" id="ignore" on-click="onIgnoreClick_" aria-label$="[[getIgnoreAriaLabelForOrigins(lastOrigins_)]]">
    $i18n{safetyCheckNotificationPermissionReviewIgnoreLabel}
  </button>
  <button class="dropdown-item" id="reset" on-click="onResetClick_" aria-label$="[[getResetAriaLabelForOrigins(lastOrigins_)]]">
    $i18n{safetyCheckNotificationPermissionReviewResetLabel}
  </button>
</cr-action-menu>
<cr-action-menu id="headerActionMenu" role-description="$i18n{menu}">
  <button class="dropdown-item" id="goToSettings" on-click="onGoToSettingsClick_">
    $i18n{safetyHubGoNotificationSettingsItem}
  </button>
</cr-action-menu>
<cr-toast id="undoToast" duration="5000">
  <div id="undoNotification">[[toastText_]]</div>
  <cr-button id="toastUndoButton" on-click="onUndoClick_" aria-label="$i18n{safetyCheckNotificationPermissionReviewUndo}">
    $i18n{safetyCheckNotificationPermissionReviewUndo}
  </cr-button>
</cr-toast>
<paper-tooltip fit-to-visible-bounds manual-mode position="top" offset="3">
  $i18n{safetyCheckNotificationPermissionReviewUndo}
</paper-tooltip>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var Actions$1;(function(Actions){Actions["BLOCK"]="block";Actions["IGNORE"]="ignore";Actions["RESET"]="reset"})(Actions$1||(Actions$1={}));const SettingsSafetyHubNotificationPermissionsModuleElementBase=TooltipMixin(WebUiListenerMixin(RouteObserverMixin(BaseMixin(SiteSettingsMixin(I18nMixin(PolymerElement))))));class SettingsSafetyHubNotificationPermissionsModuleElement extends SettingsSafetyHubNotificationPermissionsModuleElementBase{constructor(){super(...arguments);this.lastOrigins_=[];this.renderedOrigins_=[];this.eventTracker_=new EventTracker;this.browserProxy_=SafetyHubBrowserProxyImpl.getInstance();this.metricsBrowserProxy_=MetricsBrowserProxyImpl.getInstance()}static get is(){return"settings-safety-hub-notification-permissions-module"}static get template(){return getTemplate$6()}static get properties(){return{headerString_:String,subheaderString_:String,headerIconString_:String,toastText_:String,lastUserAction_:String,lastOrigins_:Array,sites_:{type:Array,value:null},shouldShowCompletionInfo_:{type:Boolean,computed:"computeShouldShowCompletionInfo_(sites_.*)"}}}static get observers(){return["updateUndoNotificationText_(lastUserAction_, lastOrigins_)","onSitesChanged_(sites_, shouldShowCompletionInfo_)"]}async connectedCallback(){this.addWebUiListener(SafetyHubEvent.NOTIFICATION_PERMISSIONS_MAYBE_CHANGED,(sites=>this.onNotificationPermissionListChanged_(sites)));const sites=await this.browserProxy_.getNotificationPermissionReview();this.onNotificationPermissionListChanged_(sites);super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback();this.eventTracker_.removeAll()}currentRouteChanged(currentRoute){if(currentRoute!==routes.SAFETY_HUB){this.eventTracker_.removeAll();return}if(this.sites_!==null){this.metricsBrowserProxy_.recordSafetyHubNotificationPermissionsModuleListCountHistogram(this.sites_.length)}this.eventTracker_.add(document,"keydown",(e=>this.onKeyDown_(e)))}onNotificationPermissionListChanged_(sites){this.sites_=sites.map((site=>({...site,detail:site.notificationInfoString})))}async setHeaderToCompletionState_(){this.headerString_=this.toastText_?this.toastText_:this.i18n("safetyCheckNotificationPermissionReviewDoneLabel");this.subheaderString_="";this.headerIconString_="cr:check"}async onSitesChanged_(){if(this.sites_===null){return}this.$.module.animateShow(this.sites_.map((site=>site.origin)).filter((origin=>!this.renderedOrigins_.includes(origin))));this.renderedOrigins_=this.sites_.map((site=>site.origin));if(this.shouldShowCompletionInfo_){this.setHeaderToCompletionState_();return}this.headerString_=await PluralStringProxyImpl.getInstance().getPluralString("safetyHubNotificationPermissionsPrimaryLabel",this.sites_.length);this.subheaderString_=await PluralStringProxyImpl.getInstance().getPluralString("safetyHubNotificationPermissionsSecondaryLabel",this.sites_.length);this.headerIconString_="settings:notifications-none"}onBlockClick_(e){e.stopPropagation();this.lastOrigins_=[e.detail.origin];this.lastUserAction_=Actions$1.BLOCK;this.$.undoToast.show();this.$.module.animateHide(e.detail.origin,this.browserProxy_.blockNotificationPermissionForOrigins.bind(this.browserProxy_,this.lastOrigins_));this.metricsBrowserProxy_.recordSafetyHubNotificationPermissionsModuleInteractionsHistogram(SafetyCheckNotificationsModuleInteractions.BLOCK)}onMoreActionClick_(e){e.stopPropagation();this.lastOrigins_=[e.detail.origin];this.$.actionMenu.showAt(e.detail.target)}onIgnoreClick_(e){e.stopPropagation();this.lastUserAction_=Actions$1.IGNORE;this.$.undoToast.show();this.$.actionMenu.close();this.$.module.animateHide(this.lastOrigins_[0],this.browserProxy_.ignoreNotificationPermissionForOrigins.bind(this.browserProxy_,this.lastOrigins_));this.metricsBrowserProxy_.recordSafetyHubNotificationPermissionsModuleInteractionsHistogram(SafetyCheckNotificationsModuleInteractions.IGNORE)}onResetClick_(e){e.stopPropagation();this.lastUserAction_=Actions$1.RESET;this.$.undoToast.show();this.$.actionMenu.close();this.$.module.animateHide(this.lastOrigins_[0],this.browserProxy_.resetNotificationPermissionForOrigins.bind(this.browserProxy_,this.lastOrigins_));this.metricsBrowserProxy_.recordSafetyHubNotificationPermissionsModuleInteractionsHistogram(SafetyCheckNotificationsModuleInteractions.RESET)}onBlockAllClick_(e){e.stopPropagation();assert(this.sites_);this.lastOrigins_=this.sites_.map((site=>site.origin));this.$.module.animateHide(null,this.browserProxy_.blockNotificationPermissionForOrigins.bind(this.browserProxy_,this.lastOrigins_));this.lastUserAction_=Actions$1.BLOCK;this.$.undoToast.show();this.metricsBrowserProxy_.recordSafetyHubNotificationPermissionsModuleInteractionsHistogram(SafetyCheckNotificationsModuleInteractions.BLOCK_ALL)}onUndoClick_(e){e.stopPropagation();this.undoLastAction_()}onHeaderMoreActionClick_(e){e.stopPropagation();this.$.headerActionMenu.showAt(e.target)}onGoToSettingsClick_(e){e.stopPropagation();this.$.headerActionMenu.close();Router.getInstance().navigateTo(routes.SITE_SETTINGS_NOTIFICATIONS,undefined,true);this.metricsBrowserProxy_.recordSafetyHubNotificationPermissionsModuleInteractionsHistogram(SafetyCheckNotificationsModuleInteractions.GO_TO_SETTINGS)}async updateUndoNotificationText_(){if(!this.lastUserAction_||this.lastOrigins_.length===0){return}switch(this.lastUserAction_){case Actions$1.BLOCK:if(this.lastOrigins_.length===1){this.toastText_=this.i18n("safetyCheckNotificationPermissionReviewBlockedToastLabel",this.lastOrigins_[0])}else{this.toastText_=await PluralStringProxyImpl.getInstance().getPluralString("safetyCheckNotificationPermissionReviewBlockAllToastLabel",this.lastOrigins_.length)}break;case Actions$1.IGNORE:this.toastText_=this.i18n("safetyCheckNotificationPermissionReviewIgnoredToastLabel",this.lastOrigins_[0]);break;case Actions$1.RESET:this.toastText_=this.i18n("safetyCheckNotificationPermissionReviewResetToastLabel",this.lastOrigins_[0]);break;default:assertNotReached()}}undoLastAction_(){switch(this.lastUserAction_){case Actions$1.BLOCK:this.browserProxy_.allowNotificationPermissionForOrigins(this.lastOrigins_);if(this.lastOrigins_.length===1){this.metricsBrowserProxy_.recordSafetyHubNotificationPermissionsModuleInteractionsHistogram(SafetyCheckNotificationsModuleInteractions.UNDO_BLOCK)}else{this.metricsBrowserProxy_.recordSafetyHubNotificationPermissionsModuleInteractionsHistogram(SafetyCheckNotificationsModuleInteractions.UNDO_BLOCK_ALL)}break;case Actions$1.RESET:this.browserProxy_.allowNotificationPermissionForOrigins(this.lastOrigins_);this.metricsBrowserProxy_.recordSafetyHubNotificationPermissionsModuleInteractionsHistogram(SafetyCheckNotificationsModuleInteractions.UNDO_RESET);break;case Actions$1.IGNORE:this.browserProxy_.undoIgnoreNotificationPermissionForOrigins(this.lastOrigins_);this.metricsBrowserProxy_.recordSafetyHubNotificationPermissionsModuleInteractionsHistogram(SafetyCheckNotificationsModuleInteractions.UNDO_IGNORE);break;default:assertNotReached()}this.lastOrigins_=[];this.$.undoToast.hide()}onKeyDown_(e){if(!this.$.undoToast.open){return}if(isUndoKeyboardEvent(e)){this.undoLastAction_();e.stopPropagation()}}computeShouldShowCompletionInfo_(){return this.sites_!==null&&this.sites_.length===0}getIgnoreAriaLabelForOrigins(origins){if(origins.length!==1){return""}return this.i18n("safetyCheckNotificationPermissionReviewIgnoreAriaLabel",origins[0])}getResetAriaLabelForOrigins(origins){if(origins.length!==1){return""}return this.i18n("safetyCheckNotificationPermissionReviewResetAriaLabel",origins[0])}showUndoTooltip_(e){e.stopPropagation();const tooltip=this.shadowRoot.querySelector("paper-tooltip");assert(tooltip);this.showTooltipAtTarget(tooltip,e.target)}}customElements.define(SettingsSafetyHubNotificationPermissionsModuleElement.is,SettingsSafetyHubNotificationPermissionsModuleElement);function getTemplate$5(){return html`<!--_html_template_start_--><style include="cr-shared-style settings-shared">paper-tooltip{--paper-tooltip-min-width:max-content}</style>
<settings-safety-hub-module id="module" animated on-sh-module-item-button-click="onAllowAgainClick_" header="[[headerString_]]" subheader="[[subheaderString_]]" header-icon="[[headerIconString_]]" button-aria-label-id="safetyCheckUnusedSitePermissionsAllowAgainAriaLabel" button-icon="settings20:undo" button-tooltip-text="$i18n{safetyCheckUnusedSitePermissionsAllowAgainLabel}" sites="[[sites_]]">
  <div slot="button-container">
    <cr-button id="gotItButton" on-click="onGotItClick_" hidden$="[[shouldShowCompletionInfo_]]">
      $i18n{safetyCheckUnusedSitePermissionsGotItLabel}
    </cr-button>
    <cr-icon-button id="moreActionButton" class="icon-more-vert" on-click="onMoreActionClick_" hidden$="[[shouldShowCompletionInfo_]]" title="$i18n{moreActions}">
    </cr-icon-button>
    <cr-icon-button id="bulkUndoButton" iron-icon="settings20:undo" on-click="onUndoClick_" hidden$="[[!shouldShowCompletionInfo_]]" on-focus="showUndoTooltip_" on-mouseenter="showUndoTooltip_" aria-label$="$i18n{safetyCheckUnusedSitePermissionsUndoLabel}">
    </cr-icon-button>
  </div>
</settings-safety-hub-module>
<cr-toast id="undoToast" duration="5000">
  <div>[[toastText_]]</div>
  <cr-button id="toastUndoButton" on-click="onUndoClick_">
    $i18n{safetyCheckUnusedSitePermissionsUndoLabel}
  </cr-button>
</cr-toast>
<cr-action-menu id="headerActionMenu" role-description="$i18n{menu}">
  <button class="dropdown-item" id="goToSettings" on-click="onGoToSettingsClick_">
    $i18n{safetyHubGoSiteSettingsItem}
  </button>
</cr-action-menu>
<paper-tooltip fit-to-visible-bounds manual-mode position="top" offset="3">
  $i18n{safetyCheckUnusedSitePermissionsUndoLabel}
</paper-tooltip>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var Action;(function(Action){Action[Action["ALLOW_AGAIN"]=0]="ALLOW_AGAIN";Action[Action["GOT_IT"]=1]="GOT_IT"})(Action||(Action={}));const SettingsSafetyHubUnusedSitePermissionsModuleElementBase=TooltipMixin(I18nMixin(RouteObserverMixin(WebUiListenerMixin(SiteSettingsMixin(PolymerElement)))));class SettingsSafetyHubUnusedSitePermissionsModuleElement extends SettingsSafetyHubUnusedSitePermissionsModuleElementBase{constructor(){super(...arguments);this.eventTracker_=new EventTracker;this.browserProxy_=SafetyHubBrowserProxyImpl.getInstance();this.metricsBrowserProxy_=MetricsBrowserProxyImpl.getInstance()}static get is(){return"settings-safety-hub-unused-site-permissions"}static get template(){return getTemplate$5()}static get properties(){return{headerString_:String,subheaderString_:String,headerIconString_:String,lastUnusedSitePermissionsAllowedAgain_:{type:Object,value:null},lastUnusedSitePermissionsListAcknowledged_:{type:Array,value:null},renderedOrigins_:{type:Array,value:[]},lastUserAction_:{type:Object,value:null},sites_:{type:Array,value:null,observer:"onSitesChanged_"},toastText_:String,shouldShowCompletionInfo_:{type:Boolean,computed:"computeShouldShowCompletionInfo_(sites_.*)"}}}async connectedCallback(){this.addWebUiListener(SafetyHubEvent.UNUSED_PERMISSIONS_MAYBE_CHANGED,(sites=>this.onUnusedSitePermissionListChanged_(sites)));const sites=await this.browserProxy_.getRevokedUnusedSitePermissionsList();this.onUnusedSitePermissionListChanged_(sites);super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback();this.eventTracker_.removeAll()}currentRouteChanged(currentRoute){if(currentRoute!==routes.SAFETY_HUB){this.eventTracker_.removeAll();return}if(this.sites_!==null){this.metricsBrowserProxy_.recordSafetyHubUnusedSitePermissionsModuleListCountHistogram(this.sites_.length)}this.eventTracker_.add(document,"keydown",(e=>this.onKeyDown_(e)))}getPermissionsText_(permissions){assert(permissions.length>0,"There is no permission for the user to review.");const permissionsI18n=permissions.map((permission=>{const localizationString=getLocalizationStringForContentType(permission);return localizationString?this.i18n(localizationString):""}));switch(permissionsI18n.length){case 1:return this.i18n("safetyCheckUnusedSitePermissionsRemovedOnePermissionLabel",...permissionsI18n);case 2:return this.i18n("safetyCheckUnusedSitePermissionsRemovedTwoPermissionsLabel",...permissionsI18n);case 3:return this.i18n("safetyCheckUnusedSitePermissionsRemovedThreePermissionsLabel",...permissionsI18n);default:return this.i18n("safetyCheckUnusedSitePermissionsRemovedFourOrMorePermissionsLabel",permissionsI18n[0],permissionsI18n[1],permissionsI18n.length-2)}}onAllowAgainClick_(event){event.stopPropagation();const item=event.detail;this.lastUserAction_=Action.ALLOW_AGAIN;this.lastUnusedSitePermissionsAllowedAgain_=item;this.showUndoToast_(this.i18n("safetyCheckUnusedSitePermissionsToastLabel",item.origin));this.$.module.animateHide(item.origin,this.browserProxy_.allowPermissionsAgainForUnusedSite.bind(this.browserProxy_,item.origin));this.metricsBrowserProxy_.recordSafetyHubUnusedSitePermissionsModuleInteractionsHistogram(SafetyCheckUnusedSitePermissionsModuleInteractions.ALLOW_AGAIN)}async onGotItClick_(e){e.stopPropagation();assert(this.sites_!==null);this.lastUserAction_=Action.GOT_IT;this.lastUnusedSitePermissionsListAcknowledged_=this.sites_;this.$.module.animateHide(null,this.browserProxy_.acknowledgeRevokedUnusedSitePermissionsList.bind(this.browserProxy_));const toastText=await PluralStringProxyImpl.getInstance().getPluralString("safetyCheckUnusedSitePermissionsToastBulkLabel",this.sites_.length);this.showUndoToast_(toastText);this.metricsBrowserProxy_.recordSafetyHubUnusedSitePermissionsModuleInteractionsHistogram(SafetyCheckUnusedSitePermissionsModuleInteractions.ACKNOWLEDGE_ALL)}onMoreActionClick_(e){e.stopPropagation();this.$.headerActionMenu.showAt(e.target)}onGoToSettingsClick_(e){e.stopPropagation();this.$.headerActionMenu.close();Router.getInstance().navigateTo(routes.SITE_SETTINGS,undefined,true);this.metricsBrowserProxy_.recordSafetyHubUnusedSitePermissionsModuleInteractionsHistogram(SafetyCheckUnusedSitePermissionsModuleInteractions.GO_TO_SETTINGS)}onUnusedSitePermissionListChanged_(sites){this.sites_=sites.map((site=>({...site,detail:this.getPermissionsText_(site.permissions)})))}setHeaderToCompletionState_(){this.headerString_=this.toastText_?this.toastText_:this.i18n("safetyCheckUnusedSitePermissionsDoneLabel");this.subheaderString_="";this.headerIconString_="cr:check"}async onSitesChanged_(){if(this.sites_===null){return}this.$.module.animateShow(this.sites_.map((site=>site.origin)).filter((origin=>!this.renderedOrigins_.includes(origin))));this.renderedOrigins_=this.sites_.map((site=>site.origin));if(this.shouldShowCompletionInfo_){this.setHeaderToCompletionState_();return}this.headerString_=await PluralStringProxyImpl.getInstance().getPluralString("safetyCheckUnusedSitePermissionsPrimaryLabel",this.sites_.length);this.subheaderString_=await PluralStringProxyImpl.getInstance().getPluralString("safetyCheckUnusedSitePermissionsSecondaryLabel",this.sites_.length);this.headerIconString_="settings:permissions"}onUndoClick_(e){e.stopPropagation();this.undoLastAction_()}computeShouldShowCompletionInfo_(){return this.sites_!==null&&this.sites_.length===0}undoLastAction_(){switch(this.lastUserAction_){case Action.ALLOW_AGAIN:assert(this.lastUnusedSitePermissionsAllowedAgain_!==null);this.browserProxy_.undoAllowPermissionsAgainForUnusedSite(this.lastUnusedSitePermissionsAllowedAgain_);this.lastUnusedSitePermissionsAllowedAgain_=null;this.metricsBrowserProxy_.recordSafetyHubUnusedSitePermissionsModuleInteractionsHistogram(SafetyCheckUnusedSitePermissionsModuleInteractions.UNDO_ALLOW_AGAIN);break;case Action.GOT_IT:assert(this.lastUnusedSitePermissionsListAcknowledged_!==null);this.browserProxy_.undoAcknowledgeRevokedUnusedSitePermissionsList(this.lastUnusedSitePermissionsListAcknowledged_);this.lastUnusedSitePermissionsListAcknowledged_=null;this.metricsBrowserProxy_.recordSafetyHubUnusedSitePermissionsModuleInteractionsHistogram(SafetyCheckUnusedSitePermissionsModuleInteractions.UNDO_ACKNOWLEDGE_ALL);break;default:assertNotReached()}this.lastUserAction_=null;this.$.undoToast.hide()}onKeyDown_(e){if(!this.$.undoToast.open){return}if(isUndoKeyboardEvent(e)){this.undoLastAction_();e.stopPropagation()}}showUndoToast_(text){this.toastText_=text;this.$.undoToast.show()}showUndoTooltip_(e){e.stopPropagation();const tooltip=this.shadowRoot.querySelector("paper-tooltip");assert(tooltip);this.showTooltipAtTarget(tooltip,e.target)}}customElements.define(SettingsSafetyHubUnusedSitePermissionsModuleElement.is,SettingsSafetyHubUnusedSitePermissionsModuleElement);function getTemplate$4(){return html`<!--_html_template_start_--><style include="cr-shared-style settings-shared site-review-shared"></style>
<template is="dom-if" if="[[!shouldShowCompletionInfo_]]">
  <div id="review-header" class="header-with-icon">
    <iron-icon role="img" icon="settings:notifications-none" class="header-icon">
    </iron-icon>
    <div class="header-group-wrapper">
      <h2>[[headerString_]]</h2>
      <div class="secondary">[[subtitleString_]]</div>
    </div>
    <cr-expand-button no-hover expanded="{{notificationPermissionReviewListExpanded_}}">
    </cr-expand-button>
  </div>
  <iron-collapse class="site-list" opened="[[notificationPermissionReviewListExpanded_]]">
    <template is="dom-repeat" items="[[sites_]]">
      <div class="list-item site-entry">
        <site-favicon url="[[item.origin]]"></site-favicon>
        <div class="display-name cr-padded-text">
          <div class="site-representation">[[item.origin]]</div>
          <div class="second-line secondary">[[item.notificationInfoString]]
          </div>
        </div>
        <cr-icon-button iron-icon="cr20:block" id="block" on-click="onBlockNotificationPermissionClick_" aria-label$="[[getBlockAriaLabelForOrigin(item.origin)]]" on-mouseenter="onShowTooltip_" on-focus="onShowTooltip_" actionable>
        </cr-icon-button>
        <cr-icon-button id="actionMenuButton" class="icon-more-vert" on-click="onShowActionMenuClick_" aria-label$="[[getMoreActionsAriaLabel_(item.origin]]" title="$i18n{moreActions}">
        </cr-icon-button>
      </div>
    </template>
    <div class="list-item first">
      <cr-button id="blockAllButton" on-click="onBlockAllClick_" class="bulk-action-button">
        $i18n{safetyCheckNotificationPermissionReviewBlockAllLabel}
      </cr-button>
    </div>
  </iron-collapse>
  <paper-tooltip fit-to-visible-bounds manual-mode position="top" offset="3">
    $i18n{safetyCheckNotificationPermissionReviewDontAllowLabel}
  </paper-tooltip>
  <cr-action-menu role-description="$i18n{menu}">
    <button class="dropdown-item" id="ignore" on-click="onIgnoreClick_" aria-label$="[[getIgnoreAriaLabelForOrigins(lastOrigins_)]]">
      $i18n{safetyCheckNotificationPermissionReviewIgnoreLabel}
    </button>
    <button class="dropdown-item" id="reset" on-click="onResetClick_" aria-label$="[[getResetAriaLabelForOrigins(lastOrigins_)]]">
      $i18n{safetyCheckNotificationPermissionReviewResetLabel}
    </button>
  </cr-action-menu>
</template>
<cr-toast id="undoToast" duration="5000">
  <div id="undoNotification">[[toastText_]]</div>
  <cr-button aria-label="$i18n{safetyCheckNotificationPermissionReviewUndo}" on-click="onUndoButtonClick_">
    $i18n{safetyCheckNotificationPermissionReviewUndo}
  </cr-button>
</cr-toast>
<template is="dom-if" if="[[shouldShowCompletionInfo_]]">
  <div id="done-header" class="header-with-icon">
    <iron-icon role="img" icon="cr:check"></iron-icon>
    <div class="header-group-wrapper">
      $i18n{safetyCheckNotificationPermissionReviewDoneLabel}
    </div>
  </div>
</template>
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var Actions;(function(Actions){Actions["BLOCK"]="block";Actions["IGNORE"]="ignore";Actions["RESET"]="reset"})(Actions||(Actions={}));const SettingsReviewNotificationPermissionsElementBase=TooltipMixin(WebUiListenerMixin(RouteObserverMixin(BaseMixin(SiteSettingsMixin(I18nMixin(PolymerElement))))));class SettingsReviewNotificationPermissionsElement extends SettingsReviewNotificationPermissionsElementBase{constructor(){super(...arguments);this.lastOrigins_=[];this.sitesLoaded_=false;this.modelUpdateDelayMsForTesting_=null;this.eventTracker_=new EventTracker;this.shouldRefocusExpandButton_=false;this.browserProxy_=SafetyHubBrowserProxyImpl.getInstance();this.metricsBrowserProxy_=MetricsBrowserProxyImpl.getInstance()}static get is(){return"review-notification-permissions"}static get template(){return getTemplate$4()}static get properties(){return{sites_:{type:Array,value:[],observer:"onSitesChanged_"},notificationPermissionReviewListExpanded_:{type:Boolean,value:true,observer:"updateNotificationPermissionReviewListExpanded_"},lastUserAction_:{type:Actions,observer:"updateUndoNotificationText_"},lastOrigins_:{type:Array,observer:"updateUndoNotificationText_"},shouldShowCompletionInfo_:{type:Boolean,computed:"computeShouldShowCompletionInfo_(sites_.*)"},headerString_:String,subtitleString_:String,toastText_:String}}async connectedCallback(){this.addWebUiListener(SafetyHubEvent.NOTIFICATION_PERMISSIONS_MAYBE_CHANGED,(sites=>this.onReviewNotificationPermissionListChanged_(sites)));this.sites_=await this.browserProxy_.getNotificationPermissionReview();this.sitesLoaded_=true;this.eventTracker_.add(document,"keydown",(e=>this.onKeyDown_(e)));super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback();this.eventTracker_.removeAll()}currentRouteChanged(currentRoute){if(currentRoute!==routes.SITE_SETTINGS_NOTIFICATIONS){return}this.metricsBrowserProxy_.recordSafetyCheckNotificationsListCountHistogram(this.sites_.length);this.metricsBrowserProxy_.recordSafetyCheckNotificationsModuleInteractionsHistogram(SafetyCheckNotificationsModuleInteractions.OPEN_REVIEW_UI)}onShowActionMenuClick_(e){this.lastOrigins_=[e.model.item.origin];const actionMenu=this.shadowRoot.querySelector("cr-action-menu");assert(actionMenu);actionMenu.showAt(e.target)}onBlockNotificationPermissionClick_(event){event.stopPropagation();const item=event.model.item;this.lastOrigins_=[item.origin];this.lastUserAction_=Actions.BLOCK;this.showUndoToast_();this.hideItem_(this.lastOrigins_[0]);this.metricsBrowserProxy_.recordSafetyCheckNotificationsModuleInteractionsHistogram(SafetyCheckNotificationsModuleInteractions.BLOCK);setTimeout(this.browserProxy_.blockNotificationPermissionForOrigins.bind(this.browserProxy_,this.lastOrigins_),this.getModelUpdateDelayMs_())}onIgnoreClick_(e){e.stopPropagation();this.lastUserAction_=Actions.IGNORE;this.showUndoToast_();this.shadowRoot.querySelector("cr-action-menu").close();this.hideItem_(this.lastOrigins_[0]);this.metricsBrowserProxy_.recordSafetyCheckNotificationsModuleInteractionsHistogram(SafetyCheckNotificationsModuleInteractions.IGNORE);setTimeout(this.browserProxy_.ignoreNotificationPermissionForOrigins.bind(this.browserProxy_,this.lastOrigins_),this.getModelUpdateDelayMs_())}onResetClick_(e){e.stopPropagation();this.lastUserAction_=Actions.RESET;this.showUndoToast_();this.shadowRoot.querySelector("cr-action-menu").close();this.hideItem_(this.lastOrigins_[0]);this.metricsBrowserProxy_.recordSafetyCheckNotificationsModuleInteractionsHistogram(SafetyCheckNotificationsModuleInteractions.RESET);setTimeout(this.browserProxy_.resetNotificationPermissionForOrigins.bind(this.browserProxy_,this.lastOrigins_),this.getModelUpdateDelayMs_())}onBlockAllClick_(e){e.stopPropagation();this.lastOrigins_=this.sites_.map((site=>site.origin));this.browserProxy_.blockNotificationPermissionForOrigins(this.lastOrigins_);this.lastUserAction_=Actions.BLOCK;this.showUndoToast_();this.metricsBrowserProxy_.recordSafetyCheckNotificationsModuleInteractionsHistogram(SafetyCheckNotificationsModuleInteractions.BLOCK_ALL)}onReviewNotificationPermissionListChanged_(sites){this.sites_=sites;const rows=this.shadowRoot.querySelectorAll(".site-list .site-entry");for(const row of rows){row.classList.remove("removed")}}onShowTooltip_(e){e.stopPropagation();const tooltip=this.shadowRoot.querySelector("paper-tooltip");assert(tooltip);this.showTooltipAtTarget(tooltip,e.target)}async updateNotificationPermissionReviewListExpanded_(){if(!this.notificationPermissionReviewListExpanded_){this.metricsBrowserProxy_.recordSafetyCheckNotificationsModuleInteractionsHistogram(SafetyCheckNotificationsModuleInteractions.MINIMIZE)}}async updateUndoNotificationText_(){if(!this.lastUserAction_||this.lastOrigins_.length===0){return}switch(this.lastUserAction_){case Actions.BLOCK:if(this.lastOrigins_.length===1){this.toastText_=this.i18n("safetyCheckNotificationPermissionReviewBlockedToastLabel",this.lastOrigins_[0])}else{this.toastText_=await PluralStringProxyImpl.getInstance().getPluralString("safetyCheckNotificationPermissionReviewBlockAllToastLabel",this.lastOrigins_.length)}break;case Actions.IGNORE:this.toastText_=this.i18n("safetyCheckNotificationPermissionReviewIgnoredToastLabel",this.lastOrigins_[0]);break;case Actions.RESET:this.toastText_=this.i18n("safetyCheckNotificationPermissionReviewResetToastLabel",this.lastOrigins_[0]);break;default:assertNotReached()}}showUndoToast_(){if(this.$.undoToast.open){this.$.undoToast.hide()}this.$.undoToast.show()}onUndoButtonClick_(e){e.stopPropagation();this.undoLastAction_()}undoLastAction_(){switch(this.lastUserAction_){case Actions.BLOCK:this.browserProxy_.allowNotificationPermissionForOrigins(this.lastOrigins_);this.lastOrigins_=[];this.metricsBrowserProxy_.recordSafetyCheckNotificationsModuleInteractionsHistogram(SafetyCheckNotificationsModuleInteractions.UNDO_BLOCK);break;case Actions.RESET:this.browserProxy_.allowNotificationPermissionForOrigins(this.lastOrigins_);this.lastOrigins_=[];this.metricsBrowserProxy_.recordSafetyCheckNotificationsModuleInteractionsHistogram(SafetyCheckNotificationsModuleInteractions.UNDO_RESET);break;case Actions.IGNORE:this.browserProxy_.undoIgnoreNotificationPermissionForOrigins(this.lastOrigins_);this.lastOrigins_=[];this.metricsBrowserProxy_.recordSafetyCheckNotificationsModuleInteractionsHistogram(SafetyCheckNotificationsModuleInteractions.UNDO_IGNORE);break;default:assertNotReached()}this.shouldRefocusExpandButton_=true;this.$.undoToast.hide()}onKeyDown_(e){if(!this.$.undoToast.open){return}if(isUndoKeyboardEvent(e)){this.undoLastAction_()}}getBlockAriaLabelForOrigin(origin){return this.i18n("safetyCheckNotificationPermissionReviewDontAllowAriaLabel",origin)}getIgnoreAriaLabelForOrigins(origins){if(origins.length!==1){return null}return this.i18n("safetyCheckNotificationPermissionReviewIgnoreAriaLabel",origins[0])}getResetAriaLabelForOrigins(origins){if(origins.length!==1){return null}return this.i18n("safetyCheckNotificationPermissionReviewResetAriaLabel",origins[0])}hideItem_(origin){const rows=this.shadowRoot.querySelectorAll(".site-list .site-entry");for(let i=0;i<this.sites_.length;++i){if(!origin||this.sites_[i].origin===origin){rows[i].classList.add("removed");if(origin){break}}}}async onSitesChanged_(){assert(this.sites_);this.headerString_=await PluralStringProxyImpl.getInstance().getPluralString("safetyCheckNotificationPermissionReviewPrimaryLabel",this.sites_.length);this.subtitleString_=await PluralStringProxyImpl.getInstance().getPluralString("safetyCheckNotificationPermissionReviewSecondaryLabel",this.sites_.length);if(this.shouldRefocusExpandButton_){this.shouldRefocusExpandButton_=false;const expandButton=this.shadowRoot.querySelector("cr-expand-button");assert(expandButton);expandButton.focus()}}getMoreActionsAriaLabel_(origin){return this.i18n("safetyCheckNotificationPermissionReviewMoreActionsAriaLabel",origin)}computeShouldShowCompletionInfo_(){return this.sitesLoaded_&&this.sites_.length===0}getModelUpdateDelayMs_(){if(this.modelUpdateDelayMsForTesting_===null){return MODEL_UPDATE_DELAY_MS}else{return this.modelUpdateDelayMsForTesting_}}setModelUpdateDelayMsForTesting(delayMs){this.modelUpdateDelayMsForTesting_=delayMs}}customElements.define(SettingsReviewNotificationPermissionsElement.is,SettingsReviewNotificationPermissionsElement);function getTemplate$3(){return html`<!--_html_template_start_--><style include="cr-shared-style settings-shared"></style>
<div class="cr-row first">
  <h2 class="cr-secondary-text">[[categoryHeader]]</h2>
</div>
<div class="list-frame" hidden$="[[hasExceptions_(storageAccessExceptions_.*)]]">
  <div class="list-item cr-secondary-text">$i18n{noSitesAdded}</div>
</div>
<div class="list-frame" hidden$="[[!showNoSearchResults_(searchFilter, storageAccessExceptions_.*)]]">
  <div class="list-item cr-secondary-text">$i18n{searchNoResults}</div>
</div>
<div class="list-frame vertical-list" id="listContainer" hidden$="[[!hasExceptions_(storageAccessExceptions_.*)]]">
  <template is="dom-repeat" items="[[getFilteredExceptions_(searchFilter, storageAccessExceptions_.*)]]">
    <storage-access-site-list-entry model="[[item]]">
    </storage-access-site-list-entry>
  </template>
</div>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const StorageAccessSiteListElementBase=ListPropertyUpdateMixin(SiteSettingsMixin(WebUiListenerMixin(PolymerElement)));class StorageAccessSiteListElement extends StorageAccessSiteListElementBase{static get is(){return"storage-access-site-list"}static get template(){return getTemplate$3()}static get properties(){return{categoryHeader:String,storageAccessExceptions_:{type:Array,value(){return[]}},categorySubtype:{type:String,value:INVALID_CATEGORY_SUBTYPE},searchFilter:{type:String,observer:"getFilteredExceptions_"}}}static get observers(){return["populateList_(categorySubtype, storageAccessExceptions_)"]}connectedCallback(){super.connectedCallback();this.addWebUiListener("contentSettingSitePermissionChanged",(category=>{if(category!==ContentSettingsTypes.STORAGE_ACCESS){return}this.populateList_()}));this.addWebUiListener("onIncognitoStatusChanged",(()=>this.populateList_()));this.browserProxy.updateIncognitoStatus()}async populateList_(){if(this.categorySubtype===undefined){return}const exceptionList=await this.browserProxy.getStorageAccessExceptionList(this.categorySubtype);this.updateList("storageAccessExceptions_",(x=>x.origin),exceptionList)}showNoSearchResults_(){return this.storageAccessExceptions_.length>0&&this.getFilteredExceptions_().length===0}hasExceptions_(){return this.storageAccessExceptions_.length>0}getFilteredExceptions_(){if(!this.searchFilter){return this.storageAccessExceptions_.slice()}const searchFilter=this.searchFilter.toLowerCase();const propNames=["displayName","origin"];return this.storageAccessExceptions_.filter((site=>propNames.some((propName=>site[propName].toLowerCase().includes(searchFilter)||this.getFilteredEmbeddingExceptions_(site.exceptions,searchFilter).length))))}getFilteredEmbeddingExceptions_(exceptions,searchFilter){const propNamesEmbedding=["embeddingDisplayName","embeddingOrigin"];return exceptions.filter((embedding=>propNamesEmbedding.some((propNamesEmbedding=>embedding[propNamesEmbedding].toLowerCase().includes(searchFilter)))))}}customElements.define(StorageAccessSiteListElement.is,StorageAccessSiteListElement);function getTemplate$2(){return html`<!--_html_template_start_--><style include="cr-shared-style settings-shared">:host{padding-inline-end:4px;display:block}.row-aligned{align-items:center;display:flex}.site-representation{display:flex}.list-frame{padding-inline-end:0}.settings-row{flex:1}storage-access-static-site-list-entry{width:100%}cr-expand-button{width:100%;--cr-section-vertical-padding:0}</style>
<div id="collapseParent" focus-row-container>
  
  <template is="dom-if" if="[[shouldBeStatic_(model.*)]]" restamp>
    <storage-access-static-site-list-entry model="[[getStaticSiteEntryForModel_(model.*)]]">
    </storage-access-static-site-list-entry>
  </template>
  
  <template is="dom-if" if="[[shouldBeCollapsible_(model.*)]]" restamp>
    <div class="list-item">
      
      <cr-expand-button id="expandButton" no-hover expanded="{{expanded_}}" aria-label$="[[expandAriaLabel_]]" focus-type="embedded-site">
        <div class="settings-row">
          <site-favicon url="[[model.origin]]"></site-favicon>
          <div class="middle" id="displayName">
            <div class="site-representation url-directionality text-elide">
              [[model.displayName]]
            </div>
            <div class="second-line cr-secondary-text">[[description_]]</div>
          </div>
        </div>
      </cr-expand-button>
      
      <div class="row-aligned">
        <div class="separator"></div>
        <cr-icon-button id="resetAllButton" class="icon-delete-gray" aria-label$="[[getResetAllButtonAriaLabel_(model.*)]]" on-click="onResetAllButtonClick_" focus-type="reset-all">
        </cr-icon-button>
      </div>
    </div>
    <template is="dom-if" if="[[expanded_]]" id="originList">
      <div class="list-frame">
        <template is="dom-repeat" items="[[model.exceptions]]">
          
          <div class="hr">
            <storage-access-static-site-list-entry model="[[getStaticSiteEntryForException_(item)]]">
            </storage-access-static-site-list-entry>
          </div>
        </template>
      </div>
    </template>
  </template>
</div>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const StorageAccessSiteListEntryElementBase=FocusRowMixin(SiteSettingsMixin(I18nMixin(PolymerElement)));class StorageAccessSiteListEntryElement extends StorageAccessSiteListEntryElementBase{static get is(){return"storage-access-site-list-entry"}static get template(){return getTemplate$2()}static get properties(){return{model:{type:Object,observer:"onModelChanged_"},expanded_:{type:Boolean,observer:"onExpandedChanged_",notify:true,value:false}}}onResetAllButtonClick_(){for(const exception of this.model.exceptions){this.browserProxy.resetCategoryPermissionForPattern(this.model.origin,exception.embeddingOrigin,ContentSettingsTypes.STORAGE_ACCESS,exception.incognito)}}onModelChanged_(){this.description_=this.computeDescription_();this.expandAriaLabel_=this.computeExpandButtonAriaLabel_()}onExpandedChanged_(){if(!this.shouldBeCollapsible_()){return}this.description_=this.computeDescription_();this.expandAriaLabel_=this.computeExpandButtonAriaLabel_();if(!this.expanded_){return}this.shadowRoot.querySelector("#originList").render();this.scrollIntoViewIfNeeded()}getResetAllButtonAriaLabel_(){return this.i18n("storageAccessResetAll",this.model.displayName)}getResetButtonAriaLabel_(item){return this.i18n("storageAccessResetSite",this.model.displayName,item.embeddingDisplayName)}computeExpandButtonAriaLabel_(){return this.expanded_?this.i18n("storageAccessCloseExpand"):this.i18n("storageAccessOpenExpand")}computeDescription_(){if(!this.model||!this.model.openDescription||!this.model.closeDescription){return""}return this.expanded_?this.model.openDescription:this.model.closeDescription}shouldBeStatic_(){if(!this.model){return false}return this.model.exceptions.length===0}shouldBeCollapsible_(){if(!this.model){return false}return this.model.exceptions.length!==0}getStaticSiteEntryForModel_(){return{faviconOrigin:this.model.origin,displayName:this.model.displayName,description:this.model.description,resetAriaLabel:this.getResetAllButtonAriaLabel_(),origin:this.model.origin,embeddingOrigin:"",incognito:this.model.incognito||false}}getStaticSiteEntryForException_(item){return{faviconOrigin:item.embeddingOrigin,displayName:item.embeddingDisplayName,description:item.description,resetAriaLabel:this.getResetButtonAriaLabel_(item),origin:this.model.origin,embeddingOrigin:item.embeddingOrigin,incognito:item.incognito}}}customElements.define(StorageAccessSiteListEntryElement.is,StorageAccessSiteListEntryElement);function getTemplate$1(){return html`<!--_html_template_start_--><style include="cr-shared-style settings-shared">.row-aligned{align-items:center;display:flex}.site-representation{display:flex}.list-frame{padding-inline-end:0}.settings-row{flex:1}</style>
<div class="list-item">
  <div class="settings-row">
    <site-favicon url="[[model.faviconOrigin]]"></site-favicon>
    <div class="middle" id="displayName">
      <div class="site-representation url-directionality text-elide">
        [[model.displayName]]
      </div>
      <div class="second-line cr-secondary-text">
        [[model.description]]
      </div>
    </div>
  </div>
  
  <template is="dom-if" if="[[model.incognito]]">
    <cr-tooltip-icon id="incognitoTooltip" icon-aria-label="$i18n{incognitoSiteExceptionDesc}" icon-class="settings20:incognito" focus-type="incognito" tooltip-text="$i18n{incognitoSiteExceptionDesc}" focus-row-control focus-type="incognito">
    </cr-tooltip-icon>
  </template>
  
  <div class="row-aligned">
    <div class="separator"></div>
    <cr-icon-button id="resetButton" aria-label$="[[model.resetAriaLabel]]" class="icon-delete-gray" on-click="onResetButtonClick_" focus-row-control focus-type="reset">
    </cr-icon-button>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const StorageAccessStaticSiteListEntryElementBase=SiteSettingsMixin(PolymerElement);class StorageAccessStaticSiteListEntryElement extends StorageAccessStaticSiteListEntryElementBase{static get is(){return"storage-access-static-site-list-entry"}static get template(){return getTemplate$1()}static get properties(){return{model:Object}}onResetButtonClick_(){this.browserProxy.resetCategoryPermissionForPattern(this.model.origin,this.model.embeddingOrigin,ContentSettingsTypes.STORAGE_ACCESS,this.model.incognito)}}customElements.define(StorageAccessStaticSiteListEntryElement.is,StorageAccessStaticSiteListEntryElement);function getTemplate(){return html`<!--_html_template_start_-->    <style include="settings-shared">cr-link-row{--cr-icon-button-margin-start:20px}cr-link-row:first-of-type{border-top:none}</style>
    <template is="dom-repeat" items="[[categoryList]]">
      <cr-link-row class="hr two-line" data-route$="[[item.route]]" id="[[item.id]]" label="[[i18n(item.label)]]" on-click="onClick_" start-icon="[[item.icon]]" sub-label="[[item.subLabel]]" role-description="$i18n{subpageArrowRoleDescription}"></cr-link-row>
    </template>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function defaultSettingLabel(setting,enabled,disabled,other){if(setting===ContentSetting.BLOCK){return disabled}if(setting===ContentSetting.ALLOW){return enabled}return other||enabled}const SettingsSiteSettingsListElementBase=PrefsMixin(BaseMixin(WebUiListenerMixin(I18nMixin(PolymerElement))));class SettingsSiteSettingsListElement extends SettingsSiteSettingsListElementBase{constructor(){super(...arguments);this.browserProxy_=SiteSettingsPrefsBrowserProxyImpl.getInstance()}static get is(){return"settings-site-settings-list"}static get template(){return getTemplate()}static get properties(){return{categoryList:Array,focusConfig:{type:Object,observer:"focusConfigChanged_"}}}static get observers(){return["updateNotificationsLabel_(prefs.generated.notification.*)","updateLocationLabel_(prefs.generated.geolocation.*)","updateSiteDataLabel_(prefs.generated.cookie_default_content_setting.*)","updateThirdPartyCookiesLabel_(prefs.profile.cookie_controls_mode.*)"]}focusConfigChanged_(_newConfig,oldConfig){assert(!oldConfig);for(const item of this.categoryList){this.focusConfig.set(item.route.path,(()=>microTask.run((()=>{const toFocus=this.shadowRoot.querySelector(`#${item.id}`);assert(!!toFocus);focusWithoutInk(toFocus)}))))}}ready(){super.ready();Promise.all(this.categoryList.map((item=>this.refreshDefaultValueLabel_(item.id)))).then((()=>{this.fire("site-settings-list-labels-updated-for-testing")}));this.addWebUiListener("contentSettingCategoryChanged",(category=>this.refreshDefaultValueLabel_(category)));const hasProtocolHandlers=this.categoryList.some((item=>item.id===ContentSettingsTypes.PROTOCOL_HANDLERS));if(hasProtocolHandlers){this.addWebUiListener("setHandlersEnabled",(enabled=>{this.updateDefaultValueLabel_(ContentSettingsTypes.PROTOCOL_HANDLERS,enabled?ContentSetting.ALLOW:ContentSetting.BLOCK)}));this.browserProxy_.observeProtocolHandlersEnabledState()}}refreshDefaultValueLabel_(category){if(category===ContentSettingsTypes.ZOOM_LEVELS||category===ContentSettingsTypes.PROTECTED_CONTENT||category===ContentSettingsTypes.PDF_DOCUMENTS||category===ContentSettingsTypes.SITE_DATA){return Promise.resolve()}if(category===ContentSettingsTypes.COOKIES){if(loadTimeData.getBoolean("is3pcdCookieSettingsRedesignEnabled")){const index=this.categoryList.map((e=>e.id)).indexOf(ContentSettingsTypes.COOKIES);this.set(`categoryList.${index}.subLabel`,this.i18n("trackingProtectionLinkRowSubLabel"))}return Promise.resolve()}if(category===ContentSettingsTypes.NOTIFICATIONS){return Promise.resolve()}if(category===ContentSettingsTypes.PERFORMANCE){const index=this.categoryList.map((e=>e.id)).indexOf(ContentSettingsTypes.PERFORMANCE);this.set(`categoryList.${index}.subLabel`,this.i18n("siteSettingsPerformanceSublabel"));return Promise.resolve()}return this.browserProxy_.getDefaultValueForContentType(category).then((defaultValue=>{this.updateDefaultValueLabel_(category,defaultValue.setting)}))}updateDefaultValueLabel_(category,setting){const element=this.$$(`#${category}`);if(!element){return}const index=this.shadowRoot.querySelector("dom-repeat").indexForElement(element);const dataItem=this.categoryList[index];this.set(`categoryList.${index}.subLabel`,defaultSettingLabel(setting,dataItem.enabledLabel?this.i18n(dataItem.enabledLabel):"",dataItem.disabledLabel?this.i18n(dataItem.disabledLabel):"",dataItem.otherLabel?this.i18n(dataItem.otherLabel):undefined))}updateCookiesLabel_(label){const index=this.shadowRoot.querySelector("dom-repeat").indexForElement(this.shadowRoot.querySelector("#cookies"));this.set(`categoryList.${index}.subLabel`,label)}updateLocationLabel_(){if(!loadTimeData.getBoolean("permissionDedicatedCpssSettings")){return}const state=this.getPref("generated.geolocation").value;const index=this.categoryList.map((e=>e.id)).indexOf(ContentSettingsTypes.GEOLOCATION);if(index===-1){return}let label="siteSettingsLocationBlocked";if(state===SettingsState.LOUD){label="siteSettingsLocationAskLoud"}else if(state===SettingsState.QUIET){label="siteSettingsLocationAskQuiet"}else if(state===SettingsState.CPSS){label="siteSettingsLocationAskCPSS"}this.set(`categoryList.${index}.subLabel`,this.i18n(label))}updateNotificationsLabel_(){const state=this.getPref("generated.notification").value;const index=this.categoryList.map((e=>e.id)).indexOf(ContentSettingsTypes.NOTIFICATIONS);if(index===-1){return}let label="siteSettingsNotificationsBlocked";if(state===SettingsState.LOUD){label="siteSettingsNotificationsAskLoud"}else if(state===SettingsState.QUIET){label="siteSettingsNotificationsAskQuiet"}else if(state===SettingsState.CPSS){label="siteSettingsNotificationsAskCPSS"}this.set(`categoryList.${index}.subLabel`,this.i18n(label))}updateSiteDataLabel_(){const state=this.getPref("generated.cookie_default_content_setting").value;const index=this.categoryList.map((e=>e.id)).indexOf(ContentSettingsTypes.SITE_DATA);if(index===-1){return}let label;if(state===ContentSetting.ALLOW){label="siteSettingsSiteDataAllowedSubLabel"}else if(state===ContentSetting.SESSION_ONLY){label="siteSettingsSiteDataDeleteOnExitSubLabel"}else if(state===ContentSetting.BLOCK){label="siteSettingsSiteDataBlockedSubLabel"}assert(!!label);this.set(`categoryList.${index}.subLabel`,this.i18n(label))}updateThirdPartyCookiesLabel_(){if(loadTimeData.getBoolean("is3pcdCookieSettingsRedesignEnabled")){return}const state=this.getPref("profile.cookie_controls_mode").value;const index=this.categoryList.map((e=>e.id)).indexOf(ContentSettingsTypes.COOKIES);if(index===-1){return}let label;if(state===CookieControlsMode.OFF){label="thirdPartyCookiesLinkRowSublabelEnabled"}else if(state===CookieControlsMode.INCOGNITO_ONLY){label="thirdPartyCookiesLinkRowSublabelDisabledIncognito"}else if(state===CookieControlsMode.BLOCK_THIRD_PARTY){label="thirdPartyCookiesLinkRowSublabelDisabled"}assert(!!label);this.set(`categoryList.${index}.subLabel`,this.i18n(label))}onClick_(event){Router.getInstance().navigateTo(this.categoryList[event.model.index].route)}}customElements.define(SettingsSiteSettingsListElement.is,SettingsSiteSettingsListElement);export{AccessibilityBrowserProxyImpl,AddSiteDialogElement,AllSitesElement,AutofillManagerImpl,BioEnrollDialogPage,CardState,CategorySettingExceptionsElement,ChooserExceptionListElement,ChooserExceptionListEntryElement,ChooserType,ClearBrowsingDataBrowserProxyImpl,ContentSetting,ContentSettingProvider,ContentSettingsTypes,ControlledButtonElement,CookieControlsMode,CookiePrimarySetting,CookiesExceptionType,CountryDetailManagerImpl,CrSliderElement,CredentialManagementDialogPage,Ctap2Status,DownloadsBrowserProxyImpl,FileSystemSiteDetailsElement,FileSystemSiteEntryElement,FileSystemSiteEntryItemElement,FileSystemSiteListElement,FontsBrowserProxyImpl,NetworkPredictionOptions,PaymentsManagerImpl,PrivacyGuidePreloadFragmentElement,PrivacySandboxInterestItemElement,ProtocolHandlersElement,ResetDialogPage,SITE_EXCEPTION_WILDCARD,SafetyHubBrowserProxyImpl,SafetyHubEvent,SampleStatus,SecurityKeysBioEnrollProxyImpl,SecurityKeysCredentialBrowserProxyImpl,SecurityKeysPhonesBrowserProxyImpl,SecurityKeysPhonesSubpageElement,SecurityKeysPinBrowserProxyImpl,SecurityKeysResetBrowserProxyImpl,SetPinDialogPage,SettingsA11yPageElement,SettingsAddressEditDialogElement,SettingsAddressRemoveConfirmationDialogElement,SettingsAntiAbusePageElement,SettingsAppearanceFontsPageElement,SettingsAutofillSectionElement,SettingsCheckboxElement,SettingsClearBrowsingDataDialogElement,SettingsCookiesPageElement,SettingsCreditCardEditDialogElement,SettingsCreditCardListEntryElement,SettingsDoNotTrackToggleElement,SettingsDownloadsPageElement,SettingsEditExceptionDialogElement,SettingsHistoryDeletionDialogElement,SettingsIbanEditDialogElement,SettingsIbanListEntryElement,SettingsOmniboxExtensionEntryElement,SettingsPasswordsDeletionDialogElement,SettingsPaymentsSectionElement,SettingsPersonalizationOptionsElement,SettingsPrivacySandboxAdMeasurementSubpageElement,SettingsPrivacySandboxFledgeSubpageElement,SettingsPrivacySandboxManageTopicsSubpageElement,SettingsPrivacySandboxPageElement,SettingsPrivacySandboxTopicsSubpageElement,SettingsRecentSitePermissionsElement,SettingsResetPageElement,SettingsResetProfileDialogElement,SettingsReviewNotificationPermissionsElement,SettingsSafetyHubCardElement,SettingsSafetyHubExtensionsModuleElement,SettingsSafetyHubNotificationPermissionsModuleElement,SettingsSafetyHubPageElement,SettingsSafetyHubUnusedSitePermissionsModuleElement,SettingsSearchEngineEditDialogElement,SettingsSearchEngineEntryElement,SettingsSearchEnginesListElement,SettingsSearchEnginesPageElement,SettingsSecurityKeysBioEnrollDialogElement,SettingsSecurityKeysCredentialManagementDialogElement,SettingsSecurityKeysResetDialogElement,SettingsSecurityKeysSetPinDialogElement,SettingsSiteDataElement,SettingsSiteSettingsPageElement,SettingsSliderElement,SettingsState,SettingsSyncControlsElement,SettingsSyncEncryptionOptionsElement,SettingsSyncPageElement,SettingsUnusedSitePermissionsElement,SettingsVirtualCardUnenrollDialogElement,SiteDetailsElement,SiteDetailsPermissionDeviceEntryElement,SiteDetailsPermissionElement,SiteEntryElement,SiteListElement,SiteListEntryElement,SiteSettingSource,SiteSettingsPrefsBrowserProxyImpl,SortMethod,StorageAccessSiteListElement,StorageAccessSiteListEntryElement,StorageAccessStaticSiteListEntryElement,TimePeriod,TimePeriodExperiment,WebsiteUsageBrowserProxyImpl,ZoomLevelsElement,defaultSettingLabel,getToastManager};