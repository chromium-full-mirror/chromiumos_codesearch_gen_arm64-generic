import{b as assert,i as isRTL,e as FittingType,j as PdfViewerBaseElement,l as assertNotReached,c as PluginController,s as shouldIgnoreKeyEvents,k as hasCtrlModifier}from"./shared.rollup.js";export{C as CrIconButtonElement,O as OpenPdfParamsParser}from"./shared.rollup.js";import{html,PolymerElement}from"chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js";import{serializeKeyEvent,deserializeKeyEvent,LoadState}from"./pdf_scripting_api.js";export{BrowserApi}from"./browser_api.js";import"chrome://resources/js/load_time_data.js";function getTemplate$3(){return html`<!--_html_template_start_-->    <style>:host{display:flex;pointer-events:none;position:fixed;right:0;transition:opacity .4s ease-in-out}:host-context([dir=rtl]){left:0;right:auto}#text{background-color:rgba(0,0,0,.5);border-radius:5px;color:#fff;font-family:sans-serif;font-size:12px;font-weight:700;line-height:48px;text-align:center;text-shadow:1px 1px 1px rgba(0,0,0,.8);width:62px}#triangle-end{border-bottom:6px solid transparent;border-inline-start:8px solid rgba(0,0,0,.5);border-top:6px solid transparent;height:0;margin-top:18px;width:0}</style>
    <div id="text">[[label]]</div>
    <div id="triangle-end"></div>
<!--_html_template_end_-->`}
// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ViewerPageIndicatorElement extends PolymerElement{constructor(){super(...arguments);this.viewport_=null}static get is(){return"viewer-page-indicator"}static get template(){return getTemplate$3()}static get properties(){return{label:{type:String,value:"1"},index:{type:Number,observer:"indexChanged"},pageLabels:{type:Array,value:null,observer:"pageLabelsChanged"}}}ready(){super.ready();const callback=this.fadeIn_.bind(this);window.addEventListener("scroll",(function(){requestAnimationFrame(callback)}))}setViewport(viewport){this.viewport_=viewport}fadeIn_(){let percent=0;if(this.viewport_){percent=this.viewport_.position.y/(this.viewport_.contentSize.height-this.viewport_.size.height)}this.style.top=percent*(document.documentElement.clientHeight-this.offsetHeight)+"px";assert(document.documentElement.dir);let overlayScrollbarWidth=0;if(this.viewport_&&this.viewport_.documentHasScrollbars().vertical){overlayScrollbarWidth=this.viewport_.overlayScrollbarWidth}this.style[isRTL()?"left":"right"]=`${overlayScrollbarWidth}px`;this.style.opacity="1";clearTimeout(this.timerId);this.timerId=setTimeout((()=>{this.style.opacity="0";this.timerId=undefined}),2e3)}pageLabelsChanged(){this.indexChanged()}indexChanged(){if(this.pageLabels){this.label=String(this.pageLabels[this.index])}else{this.label=String(this.index+1)}}}customElements.define(ViewerPageIndicatorElement.is,ViewerPageIndicatorElement);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const template=html`
<custom-style>
  <style is="custom-style">
    html {

      --shadow-transition: {
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
      };

      --shadow-none: {
        box-shadow: none;
      };

      /* from http://codepen.io/shyndman/pen/c5394ddf2e8b2a5c9185904b57421cdb */

      --shadow-elevation-2dp: {
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                    0 1px 5px 0 rgba(0, 0, 0, 0.12),
                    0 3px 1px -2px rgba(0, 0, 0, 0.2);
      };

      --shadow-elevation-3dp: {
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
                    0 1px 8px 0 rgba(0, 0, 0, 0.12),
                    0 3px 3px -2px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-4dp: {
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
                    0 1px 10px 0 rgba(0, 0, 0, 0.12),
                    0 2px 4px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-6dp: {
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                    0 1px 18px 0 rgba(0, 0, 0, 0.12),
                    0 3px 5px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-8dp: {
        box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
                    0 3px 14px 2px rgba(0, 0, 0, 0.12),
                    0 5px 5px -3px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-12dp: {
        box-shadow: 0 12px 16px 1px rgba(0, 0, 0, 0.14),
                    0 4px 22px 3px rgba(0, 0, 0, 0.12),
                    0 6px 7px -4px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-16dp: {
        box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
                    0  6px 30px 5px rgba(0, 0, 0, 0.12),
                    0  8px 10px -5px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-24dp: {
        box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
                    0 9px 46px 8px rgba(0, 0, 0, 0.12),
                    0 11px 15px -7px rgba(0, 0, 0, 0.4);
      };
    }
  </style>
</custom-style>`;template.setAttribute("style","display: none;");document.head.appendChild(template.content);function getTemplate$2(){return html`<!--_html_template_start_-->    <style>cr-icon-button{--cr-icon-button-fill-color:white;--cr-icon-button-icon-size:20px;--cr-icon-button-size:32px;background-color:var(--google-grey-600);border-radius:50%;box-shadow:var(--cr-elevation-1);overflow:visible}cr-icon-button[disabled]{box-shadow:none}@media (prefers-color-scheme:light){cr-icon-button{--cr-icon-button-ripple-opacity:.5}}@media (prefers-color-scheme:dark){cr-icon-button{--cr-icon-button-fill-color:var(--google-grey-200);background-color:var(--google-grey-900)}}:host([keyboard-navigation-active]) cr-icon-button:focus{box-shadow:var(--cr-elevation-4),inset 0 0 0 2px var(--cr-focus-outline-color)}cr-icon-button:active{box-shadow:var(--cr-elevation-5)}</style>
    <cr-icon-button iron-icon="[[visibleIcon_]]" on-click="fireClick_" aria-label$="[[visibleTooltip_]]" title="[[visibleTooltip_]]" disabled="[[disabled]]">
    </cr-icon-button>
<!--_html_template_end_-->`}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ViewerZoomButtonElement extends PolymerElement{static get is(){return"viewer-zoom-button"}static get template(){return getTemplate$2()}static get properties(){return{activeIndex:{type:Number,value:0},disabled:{type:Boolean,value:false},icons:String,keyboardNavigationActive:{type:Boolean,reflectToAttribute:true},tooltips:String,icons_:{type:Array,value:[""],computed:"computeIconsArray_(icons)"},tooltips_:{type:Array,computed:"computeTooltipsArray_(tooltips)"},visibleIcon_:{type:String,computed:"computeVisibleIcon_(icons_, activeIndex)"},visibleTooltip_:{type:String,computed:"computeVisibleTooltip_(tooltips_, activeIndex)"}}}computeIconsArray_(){return this.icons.split(" ")}computeTooltipsArray_(){return this.tooltips.split(",")}computeVisibleIcon_(){return this.icons_[this.activeIndex]}computeVisibleTooltip_(){return this.tooltips_===undefined?"":this.tooltips_[this.activeIndex]}fireClick_(){this.dispatchEvent(new CustomEvent("fabclick",{bubbles:true,composed:true}));this.activeIndex=(this.activeIndex+1)%this.icons_.length}}customElements.define(ViewerZoomButtonElement.is,ViewerZoomButtonElement);function getTemplate$1(){return html`<!--_html_template_start_-->    <style include="cr-hidden-style">:host{--button-position-offset:24px;bottom:0;left:0;padding:48px 0;position:fixed;right:auto;user-select:none;z-index:3}:host-context([dir=rtl]){left:auto;right:0}#zoom-buttons{left:var(--button-position-offset);opacity:1;position:relative;right:auto;transition:opacity 250ms;transition-timing-function:cubic-bezier(0,0,.2,1)}:host-context([dir=rtl]) #zoom-buttons{left:auto;right:var(--button-position-offset)}:host(:not([visible_])) #zoom-buttons{opacity:0;transition-timing-function:cubic-bezier(.4,0,1,1)}viewer-zoom-button{display:block}#zoom-in-button{margin-top:24px}#zoom-out-button{margin-top:10px}</style>
    <div id="zoom-buttons">
      <viewer-zoom-button id="fitButton" on-fabclick="fitToggle" tooltips="$i18n{tooltipFitToPage},$i18n{tooltipFitToWidth}" keyboard-navigation-active="[[keyboardNavigationActive_]]" icons="pdf:fullscreen-exit cr:fullscreen">
      </viewer-zoom-button>
      <viewer-zoom-button id="zoom-in-button" icons="pdf:add" tooltips="$i18n{tooltipZoomIn}" keyboard-navigation-active="[[keyboardNavigationActive_]]" on-fabclick="zoomIn"></viewer-zoom-button>
      <viewer-zoom-button id="zoom-out-button" icons="pdf:remove" tooltips="$i18n{tooltipZoomOut}" keyboard-navigation-active="[[keyboardNavigationActive_]]" on-fabclick="zoomOut"></viewer-zoom-button>
    </div>
<!--_html_template_end_-->`}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const FIT_TO_PAGE_BUTTON_STATE=0;const FIT_TO_WIDTH_BUTTON_STATE=1;class ViewerZoomToolbarElement extends PolymerElement{static get is(){return"viewer-zoom-toolbar"}static get template(){return getTemplate$1()}static get properties(){return{keyboardNavigationActive_:{type:Boolean,value:false},visible_:{type:Boolean,reflectToAttribute:true}}}ready(){super.ready();this.addEventListener("focus",this.onFocus_);this.addEventListener("keyup",this.onKeyUp_);this.addEventListener("pointerdown",this.onPointerDown_)}fire_(eventName,detail){this.dispatchEvent(new CustomEvent(eventName,{bubbles:true,composed:true,detail:detail}))}isVisible(){return this.visible_}onFocus_(){if(this.visible_){return}this.fire_("keyboard-navigation-active",true);this.show()}onKeyUp_(){this.fire_("keyboard-navigation-active",true);this.keyboardNavigationActive_=true}onPointerDown_(){this.fire_("keyboard-navigation-active",false);this.keyboardNavigationActive_=false}fitToggle(){this.fireFitToChangedEvent_(this.$.fitButton.activeIndex===FIT_TO_WIDTH_BUTTON_STATE?FittingType.FIT_TO_WIDTH:FittingType.FIT_TO_PAGE)}fitToggleFromHotKey(){this.fitToggle();const button=this.$.fitButton;button.activeIndex=button.activeIndex===FIT_TO_WIDTH_BUTTON_STATE?FIT_TO_PAGE_BUTTON_STATE:FIT_TO_WIDTH_BUTTON_STATE}forceFit(fittingType){const nextButtonState=fittingType===FittingType.FIT_TO_WIDTH?FIT_TO_PAGE_BUTTON_STATE:FIT_TO_WIDTH_BUTTON_STATE;this.$.fitButton.activeIndex=nextButtonState}fireFitToChangedEvent_(fittingType){this.fire_("fit-to-changed",fittingType)}zoomIn(){this.fire_("zoom-in")}zoomOut(){this.fire_("zoom-out")}show(){this.visible_=true}hide(){this.visible_=false}shiftForScrollbars(hasScrollbars,scrollbarWidth){const verticalScrollbarWidth=hasScrollbars.vertical?scrollbarWidth:0;const horizontalScrollbarWidth=hasScrollbars.horizontal?scrollbarWidth:0;if(!isRTL()){this.style.right=-verticalScrollbarWidth+scrollbarWidth/2+"px"}this.style.bottom=-horizontalScrollbarWidth+"px"}}customElements.define(ViewerZoomToolbarElement.is,ViewerZoomToolbarElement);function getTemplate(){return html`<!--_html_template_start_--><style include="pdf-viewer-shared-style">viewer-page-indicator{opacity:0;visibility:hidden;z-index:2}@media(max-height:200px){viewer-zoom-toolbar{display:none}}@media(max-width:300px){viewer-zoom-toolbar{display:none}}</style>

<div id="sizer"></div>

<viewer-zoom-toolbar id="zoomToolbar" on-fit-to-changed="onFitToChanged" on-zoom-in="onZoomIn" on-zoom-out="onZoomOut">
</viewer-zoom-toolbar>

<viewer-page-indicator id="pageIndicator"></viewer-page-indicator>

<div id="content"></div>

<template is="dom-if" if="[[showErrorDialog]]">
  <viewer-error-dialog id="error-dialog"></viewer-error-dialog>
</template>
<!--_html_template_end_-->`}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const HIDE_TIMEOUT=2e3;const SHOW_VELOCITY=10;const TOOLBAR_REVEAL_DISTANCE_RIGHT=150;const TOOLBAR_REVEAL_DISTANCE_BOTTOM=250;function isMouseNearToolbar(e,window){const atSide=isRTL()?e.x>window.innerWidth-TOOLBAR_REVEAL_DISTANCE_RIGHT:e.x<TOOLBAR_REVEAL_DISTANCE_RIGHT;const atBottom=e.y>window.innerHeight-TOOLBAR_REVEAL_DISTANCE_BOTTOM;return atSide&&atBottom}class ToolbarManager{constructor(window,zoomToolbar){this.toolbarTimeout_=null;this.isMouseNearToolbar_=false;this.keyboardNavigationActive_=false;this.lastMovementTimestamp_=null;this.window_=window;this.zoomToolbar_=zoomToolbar;document.addEventListener("mousemove",(e=>this.handleMouseMove_(e)));document.addEventListener("mouseout",(()=>this.hideToolbarForMouseOut_()));this.zoomToolbar_.addEventListener("keyboard-navigation-active",(e=>{this.keyboardNavigationActive_=e.detail}))}handleMouseMove_(e){this.isMouseNearToolbar_=isMouseNearToolbar(e,this.window_);this.keyboardNavigationActive_=false;const touchInteractionActive=e.sourceCapabilities&&e.sourceCapabilities.firesTouchEvents;if(touchInteractionActive&&this.zoomToolbar_.isVisible()){this.hideToolbarIfAllowed_();return}if(this.isMouseNearToolbar_||this.isHighVelocityMouseMove_(e)||touchInteractionActive){this.zoomToolbar_.show()}this.hideToolbarAfterTimeout()}isHighVelocityMouseMove_(e){if(e.type==="mousemove"){if(this.lastMovementTimestamp_==null){this.lastMovementTimestamp_=this.getCurrentTimestamp()}else{const movement=Math.sqrt(e.movementX*e.movementX+e.movementY*e.movementY);const newTime=this.getCurrentTimestamp();const interval=newTime-this.lastMovementTimestamp_;this.lastMovementTimestamp_=newTime;if(interval!==0){return movement/interval>SHOW_VELOCITY}}}return false}getCurrentTimestamp(){return Date.now()}showToolbarForKeyboardNavigation(){this.keyboardNavigationActive_=true;this.zoomToolbar_.show()}hideToolbarForMouseOut_(){this.isMouseNearToolbar_=false;this.hideToolbarAfterTimeout()}hideToolbarIfAllowed_(){if(this.isMouseNearToolbar_||this.keyboardNavigationActive_){return}if(document.activeElement===this.zoomToolbar_){this.zoomToolbar_.blur()}this.zoomToolbar_.hide()}hideToolbarAfterTimeout(){if(this.toolbarTimeout_){this.window_.clearTimeout(this.toolbarTimeout_)}this.toolbarTimeout_=this.window_.setTimeout(this.hideToolbarIfAllowed_.bind(this),HIDE_TIMEOUT)}resetKeyboardNavigationAndHideToolbar(){this.keyboardNavigationActive_=false;this.hideToolbarAfterTimeout()}}
// Copyright 2013 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let pluginLoaderPolicy=null;class PdfViewerPrintElement extends PdfViewerBaseElement{constructor(){super(...arguments);this.isPrintPreviewLoadingFinished_=false;this.inPrintPreviewMode_=false;this.dark_=false;this.pluginController_=undefined;this.toolbarManager_=null}static get is(){return"pdf-viewer-print"}static get template(){return getTemplate()}isNewUiEnabled(){return false}getBackgroundColor(){return PRINT_PREVIEW_BACKGROUND_COLOR}getStreamUrl_(){if(pluginLoaderPolicy===null){pluginLoaderPolicy=window.trustedTypes.createPolicy("print-preview-plugin-loader",{createScriptURL:_ignore=>{const url=new URL(this.browserApi.getStreamInfo().streamUrl);assert(url.origin==="chrome-untrusted://print");if(url.pathname.endsWith("test.pdf")){return url.toString()}const paths=url.pathname.split("/");assert(paths.length===4);assert(paths[3]==="print.pdf");assert(!Number.isNaN(parseInt(paths[1])));assert(!Number.isNaN(parseInt(paths[2])));return url.toString()},createHTML:()=>assertNotReached(),createScript:()=>assertNotReached()})}return pluginLoaderPolicy.createScriptURL("")}setPluginSrc(plugin){plugin.src=this.getStreamUrl_()}init(browserApi){this.initInternal(browserApi,document.documentElement,this.$.sizer,this.$.content);this.pluginController_=PluginController.getInstance();this.$.pageIndicator.setViewport(this.viewport);this.toolbarManager_=new ToolbarManager(window,this.$.zoomToolbar)}handleKeyEvent(e){if(shouldIgnoreKeyEvents()||e.defaultPrevented){return}this.toolbarManager_.hideToolbarAfterTimeout();if(this.viewport.handleDirectionalKeyEvent(e,false)){return}switch(e.key){case"Tab":this.toolbarManager_.showToolbarForKeyboardNavigation();return;case"Escape":break;case"a":if(hasCtrlModifier(e)){this.pluginController_.selectAll();e.preventDefault()}return;case"\\":if(e.ctrlKey){this.$.zoomToolbar.fitToggleFromHotKey()}return}if(!e.fromScriptingAPI){this.sendScriptingMessage({type:"sendKeyEvent",keyEvent:serializeKeyEvent(e)})}else{if(!(e.shiftKey||e.ctrlKey||e.altKey)){this.$.zoomToolbar.show()}}}setBackgroundColorForPrintPreview_(){this.pluginController_.setBackgroundColor(this.dark_?PRINT_PREVIEW_DARK_BACKGROUND_COLOR:PRINT_PREVIEW_BACKGROUND_COLOR)}updateUiForViewportChange(){const hasScrollbars=this.viewport.documentHasScrollbars();const scrollbarWidth=this.viewport.scrollbarWidth;const verticalScrollbarWidth=hasScrollbars.vertical?scrollbarWidth:0;const horizontalScrollbarWidth=hasScrollbars.horizontal?scrollbarWidth:0;const zoomToolbar=this.$.zoomToolbar;if(isRTL()){zoomToolbar.style.right=-verticalScrollbarWidth+scrollbarWidth/2+"px"}zoomToolbar.style.bottom=-horizontalScrollbarWidth+"px";const visiblePage=this.viewport.getMostVisiblePage();const pageIndicator=this.$.pageIndicator;const lastIndex=pageIndicator.index;pageIndicator.index=visiblePage;if(this.documentDimensions.pageDimensions.length>1&&hasScrollbars.vertical&&lastIndex!==undefined){pageIndicator.style.visibility="visible"}else{pageIndicator.style.visibility="hidden"}this.pluginController_.viewportChanged()}handleScriptingMessage(message){if(super.handleScriptingMessage(message)){return true}if(this.handlePrintPreviewScriptingMessage_(message)){return true}if(this.delayScriptingMessage(message)){return true}switch(message.data.type.toString()){case"getSelectedText":this.pluginController_.getSelectedText().then(this.sendScriptingMessage.bind(this));break;case"selectAll":this.pluginController_.selectAll();break;default:return false}return true}handlePrintPreviewScriptingMessage_(message){const messageData=message.data;switch(messageData.type.toString()){case"loadPreviewPage":const loadData=messageData;this.pluginController_.loadPreviewPage(loadData.url,loadData.index);return true;case"resetPrintPreviewMode":const printPreviewData=messageData;this.setLoadState(LoadState.LOADING);if(!this.inPrintPreviewMode_){this.inPrintPreviewMode_=true;this.isUserInitiatedEvent=false;this.forceFit(FittingType.FIT_TO_PAGE);this.viewport.setFittingType(FittingType.FIT_TO_PAGE);this.isUserInitiatedEvent=true}this.lastViewportPosition=this.viewport.position;this.$.pageIndicator.pageLabels=printPreviewData.pageNumbers;this.pluginController_.resetPrintPreviewMode(printPreviewData);return true;case"sendKeyEvent":const keyEvent=deserializeKeyEvent(message.data.keyEvent);const extendedKeyEvent=keyEvent;extendedKeyEvent.fromScriptingAPI=true;this.handleKeyEvent(extendedKeyEvent);return true;case"hideToolbar":this.toolbarManager_.resetKeyboardNavigationAndHideToolbar();return true;case"darkModeChanged":this.dark_=message.data.darkMode;this.setBackgroundColorForPrintPreview_();return true;case"scrollPosition":const position=this.viewport.position;const positionData=message.data;position.y+=positionData.y;position.x+=positionData.x;this.viewport.setPosition(position);return true}return false}setLoadState(loadState){super.setLoadState(loadState);if(loadState===LoadState.FAILED){this.isPrintPreviewLoadingFinished_=true}}handlePluginMessage(e){const data=e.detail;switch(data.type.toString()){case"documentDimensions":this.setDocumentDimensions(data);return;case"loadProgress":this.updateProgress(data.progress);return;case"navigateToDestination":const destinationData=data;this.viewport.handleNavigateToDestination(destinationData.page,destinationData.x,destinationData.y,destinationData.zoom);return;case"printPreviewLoaded":this.handlePrintPreviewLoaded_();return;case"setIsSelecting":this.viewportScroller.setEnableScrolling(data.isSelecting);return;case"setSmoothScrolling":this.viewport.setSmoothScrolling(data.smoothScrolling);return;case"touchSelectionOccurred":this.sendScriptingMessage({type:"touchSelectionOccurred"});return;case"documentFocusChanged":return;case"sendKeyEvent":const keyEvent=deserializeKeyEvent(data.keyEvent);keyEvent.fromPlugin=true;this.handleKeyEvent(keyEvent);return;case"beep":case"formFocusChange":case"getPassword":case"metadata":case"navigate":case"setIsEditing":return}assertNotReached("Unknown message type received: "+data.type)}handlePrintPreviewLoaded_(){this.isPrintPreviewLoadingFinished_=true;this.sendDocumentLoadedMessage()}readyToSendLoadMessage(){return this.isPrintPreviewLoadingFinished_}forceFit(view){this.$.zoomToolbar.forceFit(view)}afterZoom(_viewportZoom){}handleStrings(strings){super.handleStrings(strings);if(!strings){return}this.setBackgroundColorForPrintPreview_()}updateProgress(progress){super.updateProgress(progress);if(progress===100){this.toolbarManager_.hideToolbarAfterTimeout()}}}const PRINT_PREVIEW_BACKGROUND_COLOR=4292533472;const PRINT_PREVIEW_DARK_BACKGROUND_COLOR=4284441448;customElements.define(PdfViewerPrintElement.is,PdfViewerPrintElement);export{FittingType,PdfViewerPrintElement,ToolbarManager,ViewerPageIndicatorElement,ViewerZoomButtonElement,ViewerZoomToolbarElement};