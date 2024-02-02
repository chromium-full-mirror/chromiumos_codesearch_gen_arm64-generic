import{html,dedupingMixin,PolymerElement,Polymer,dom,dashToCamelCase,afterNextRender,mixinBehaviors,Debouncer,microTask}from"chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js";import{a as assert,b as assertNotReached,E as EventTracker,P as PaperRippleMixin,g as getFaviconForPageURL,I as IronScrollTargetBehavior,F as FocusOutlineManager,c as IronResizableBehavior,d as FocusRow,f as focusWithoutInk,B as BrowserServiceImpl,e as getDeepActiveElement,h as BROWSING_GAP_TIME,i as IronA11yAnnouncer,j as isMac,k as hasKeyModifiers,H as HistoryPageViewHistogram}from"./shared.rollup.js";export{C as CrActionMenuElement,l as CrDialogElement,n as HistorySearchedLabelElement,o as HistorySyncedDeviceCardElement,p as HistorySyncedDeviceManagerElement,S as SYNCED_TABS_HISTOGRAM_NAME,m as SyncedTabsHistogram}from"./shared.rollup.js";import{loadTimeData}from"chrome://resources/js/load_time_data.js";import{mojo}from"chrome://resources/mojo/mojo/public/js/bindings.js";import"./strings.m.js";import{addWebUiListener,removeWebUiListener}from"chrome://resources/js/cr.js";import"chrome://resources/lit/v3_0/lit.rollup.js";const template$3=html`
<style>
html{--annotation-background-color:var(--google-green-50);--annotation-text-color:var(--google-green-600);--border-color:var(--google-grey-300);--entity-image-background-color:var(--google-grey-50);--icon-color:var(--google-grey-600);--url-color:var(--google-blue-600);--side-panel-url-color:var(--google-grey-700)}@media (prefers-color-scheme:dark){html{--annotation-background-color:var(--google-green-300);--annotation-text-color:var(--google-grey-900);--border-color:var(--google-grey-700);--entity-image-background-color:var(--google-grey-800);--icon-color:white;--url-color:var(--google-blue-300);--side-panel-url-color:var(--google-grey-500)}}html{--card-max-width:960px;--card-min-width:550px;--card-padding-between:16px;--card-padding-side:24px;--first-card-padding-top:24px;--cluster-max-width:var(--card-max-width);--cluster-min-width:var(--card-min-width);--cluster-padding-horizontal:var(--card-padding-side);--cluster-padding-vertical:var(--card-padding-between);--favicon-margin:16px;--favicon-size:16px;--first-cluster-padding-top:var(--first-card-padding-top);--pill-height:34px;--pill-padding-icon:12px;--pill-padding-text:16px;--top-visit-favicon-size:24px}
</style>
`;document.head.appendChild(template$3.content);const styleMod$1=document.createElement("dom-module");styleMod$1.appendChild(html`
  <template>
    <style include="cr-shared-style cr-hidden-style">
.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pill{border:1px solid var(--border-color);border-radius:calc(var(--pill-height)/ 2);box-sizing:border-box;font-size:.875rem;height:var(--pill-height);line-height:1.5}:host-context([chrome-refresh-2023]) .pill{font-size:.75rem}.pill-icon-start{padding-inline-end:var(--pill-padding-text);padding-inline-start:var(--pill-padding-icon)}.pill-icon-start .icon{margin-inline-end:8px}:host-context([chrome-refresh-2023]) .pill-icon-start .icon{margin-inline-end:4px}.pill-icon-end{padding-inline-end:var(--pill-padding-icon);padding-inline-start:var(--pill-padding-text)}.pill-icon-end .icon{margin-inline-start:8px}.search-highlight-hit{--search-highlight-hit-background-color:none;--search-highlight-hit-color:none;font-weight:700}.timestamp-and-menu{align-items:center;display:flex;flex-shrink:0}.timestamp{color:var(--cr-secondary-text-color);flex-shrink:0}
    </style>
  </template>
`.content);styleMod$1.register("history-clusters-shared-style");
// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function sanitizeInnerHtmlInternal(rawString,opts){opts=opts||{};const html=parseHtmlSubset(`<b>${rawString}</b>`,opts.tags,opts.attrs).firstElementChild;return html.innerHTML}let sanitizedPolicy=null;function sanitizeInnerHtml(rawString,opts){assert(window.trustedTypes);if(sanitizedPolicy===null){sanitizedPolicy=window.trustedTypes.createPolicy("sanitize-inner-html",{createHTML:sanitizeInnerHtmlInternal,createScript:()=>assertNotReached(),createScriptURL:()=>assertNotReached()})}return sanitizedPolicy.createHTML(rawString,opts)}const allowAttribute=(_node,_value)=>true;const allowedAttributes=new Map([["href",(node,value)=>node.tagName==="A"&&(value.startsWith("chrome://")||value.startsWith("https://")||value==="#")],["target",(node,value)=>node.tagName==="A"&&value==="_blank"]]);const allowedOptionalAttributes=new Map([["class",allowAttribute],["id",allowAttribute],["is",(_node,value)=>value==="action-link"||value===""],["role",(_node,value)=>value==="link"],["src",(node,value)=>node.tagName==="IMG"&&value.startsWith("chrome://")],["tabindex",allowAttribute],["aria-hidden",allowAttribute],["aria-label",allowAttribute],["aria-labelledby",allowAttribute]]);const allowedTags=new Set(["A","B","I","BR","DIV","EM","KBD","P","PRE","SPAN","STRONG"]);const allowedOptionalTags=new Set(["IMG","LI","UL"]);let unsanitizedPolicy;function mergeTags(optTags){const clone=new Set(allowedTags);optTags.forEach((str=>{const tag=str.toUpperCase();if(allowedOptionalTags.has(tag)){clone.add(tag)}}));return clone}function mergeAttrs(optAttrs){const clone=new Map(allowedAttributes);optAttrs.forEach((key=>{if(allowedOptionalAttributes.has(key)){clone.set(key,allowedOptionalAttributes.get(key))}}));return clone}function walk(n,f){f(n);for(let i=0;i<n.childNodes.length;i++){walk(n.childNodes[i],f)}}function assertElement(tags,node){if(!tags.has(node.tagName)){throw Error(node.tagName+" is not supported")}}function assertAttribute(attrs,attrNode,node){const n=attrNode.nodeName;const v=attrNode.nodeValue||"";if(!attrs.has(n)||!attrs.get(n)(node,v)){throw Error(node.tagName+"["+n+'="'+v+'"] is not supported')}}function parseHtmlSubset(s,extraTags,extraAttrs){const tags=extraTags?mergeTags(extraTags):allowedTags;const attrs=extraAttrs?mergeAttrs(extraAttrs):allowedAttributes;const doc=document.implementation.createHTMLDocument("");const r=doc.createRange();r.selectNode(doc.body);if(window.trustedTypes){if(!unsanitizedPolicy){unsanitizedPolicy=window.trustedTypes.createPolicy("parse-html-subset",{createHTML:untrustedHTML=>untrustedHTML,createScript:()=>assertNotReached(),createScriptURL:()=>assertNotReached()})}s=unsanitizedPolicy.createHTML(s)}const df=r.createContextualFragment(s);walk(df,(function(node){switch(node.nodeType){case Node.ELEMENT_NODE:assertElement(tags,node);const nodeAttrs=node.attributes;for(let i=0;i<nodeAttrs.length;++i){assertAttribute(attrs,nodeAttrs[i],node)}break;case Node.COMMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:case Node.TEXT_NODE:break;default:throw Error("Node type "+node.nodeType+" is not supported")}}));return df}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const I18nMixin=dedupingMixin((superClass=>{class I18nMixin extends superClass{i18nRaw_(id,...varArgs){return varArgs.length===0?loadTimeData.getString(id):loadTimeData.getStringF(id,...varArgs)}i18n(id,...varArgs){const rawString=this.i18nRaw_(id,...varArgs);return parseHtmlSubset(`<b>${rawString}</b>`).firstChild.textContent}i18nAdvanced(id,opts){opts=opts||{};const rawString=this.i18nRaw_(id,...opts.substitutions||[]);return sanitizeInnerHtml(rawString,opts)}i18nDynamic(_locale,id,...varArgs){return this.i18n(id,...varArgs)}i18nRecursive(locale,id,...varArgs){let args=varArgs;if(args.length>0){args=args.map((str=>this.i18nExists(str)?loadTimeData.getString(str):str))}return this.i18nDynamic(locale,id,...args)}i18nExists(id){return loadTimeData.valueExists(id)}}return I18nMixin}));function getTemplate$i(){return html`<!--_html_template_start_--><style include="history-clusters-shared-style">#actionMenuButton{--cr-icon-button-icon-size:20px;--cr-icon-button-margin-end:8px}:host([in-side-panel_]) #actionMenuButton{--cr-icon-button-icon-size:16px;--cr-icon-button-size:24px}</style>

<cr-icon-button id="actionMenuButton" class="icon-more-vert" title$="[[i18n('actionMenuDescription')]]" aria-haspopup="menu" on-click="onActionMenuButtonClick_">
</cr-icon-button>

<cr-lazy-render id="actionMenu">
  <template>
    <cr-action-menu role-description$="[[i18n('actionMenuDescription')]]">
      <button id="openAllButton" class="dropdown-item" on-click="onOpenAllButtonClick_">
        [[i18n('openAllInTabGroup')]]
      </button>
      <button id="hideAllButton" class="dropdown-item" on-click="onHideAllButtonClick_">
        [[i18n('hideAllVisits')]]
      </button>
      <button id="removeAllButton" class="dropdown-item" on-click="onRemoveAllButtonClick_" hidden="[[!allowDeletingHistory_]]">
        [[i18n('removeAllFromHistory')]]
      </button>
    </cr-action-menu>
  </template>
</cr-lazy-render>
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ClusterMenuElementBase$1=I18nMixin(PolymerElement);class ClusterMenuElement extends ClusterMenuElementBase$1{static get is(){return"cluster-menu"}static get template(){return getTemplate$i()}static get properties(){return{allowDeletingHistory_:{type:Boolean,value:()=>loadTimeData.getBoolean("allowDeletingHistory")},inSidePanel_:{type:Boolean,value:()=>loadTimeData.getBoolean("inSidePanel"),reflectToAttribute:true}}}onActionMenuButtonClick_(event){this.$.actionMenu.get().showAt(this.$.actionMenuButton);event.preventDefault()}onOpenAllButtonClick_(event){event.preventDefault();this.dispatchEvent(new CustomEvent("open-all-visits",{bubbles:true,composed:true}));this.$.actionMenu.get().close()}onHideAllButtonClick_(event){event.preventDefault();this.dispatchEvent(new CustomEvent("hide-all-visits",{bubbles:true,composed:true}));this.$.actionMenu.get().close()}onRemoveAllButtonClick_(event){event.preventDefault();this.dispatchEvent(new CustomEvent("remove-all-visits",{bubbles:true,composed:true}));this.$.actionMenu.get().close()}}customElements.define(ClusterMenuElement.is,ClusterMenuElement);function getTemplate$h(){return html`<!--_html_template_start_--><style include="history-clusters-shared-style cr-icons">:host{display:flex;isolation:isolate}:host-context([chrome-refresh-2023]){--cr-icon-button-margin-start:0px;--gradient-start:64px;--horizontal-carousel-pagination-button-center:calc(var(--horizontal-carousel-pagination-button-size) / 2
            + var(--horizontal-carousel-pagination-button-margin));--horizontal-carousel-pagination-button-margin:14px;--horizontal-carousel-pagination-button-size:28px;position:relative}:host-context([chrome-refresh-2023]):host(:hover) .carousel-button-container{display:block}:host-context([chrome-refresh-2023]):host([show-back-button_]:hover) #carouselContainer{-webkit-mask-image:linear-gradient(to right,transparent var(--horizontal-carousel-pagination-button-center),#000 var(--gradient-start))}:host-context([chrome-refresh-2023]):host([show-forward-button_]:hover) #carouselContainer{-webkit-mask-image:linear-gradient(to right,#000 calc(100% - var(--gradient-start)),transparent calc(100% - var(--horizontal-carousel-pagination-button-center)))}:host-context([chrome-refresh-2023]):host([show-back-button_][show-forward-button_]:hover) #carouselContainer{-webkit-mask-image:linear-gradient(to right,transparent var(--horizontal-carousel-pagination-button-center),#000 var(--gradient-start),#000 calc(100% - var(--gradient-start)),transparent calc(100% - var(--horizontal-carousel-pagination-button-center)))}:host-context([chrome-refresh-2023]) .carousel-button-container{--cr-icon-button-size:var(--horizontal-carousel-pagination-button-size);background-color:var(--color-button-background-tonal);border-radius:50%;display:none;margin:0;position:absolute;top:50%;transform:translateY(-50%);z-index:1}:host-context([chrome-refresh-2023]) #carouselForwardButton{right:var(--horizontal-carousel-pagination-button-margin)}:host-context([chrome-refresh-2023]) #carouselBackButton{left:var(--horizontal-carousel-pagination-button-margin)}#carouselContainer{display:flex;flex-wrap:wrap;min-width:0}:host-context([chrome-refresh-2023]) #carouselContainer{flex-wrap:nowrap;padding:2px;min-width:0;overflow-x:hidden}.hover-layer{display:none}:host-context([chrome-refresh-2023]) .hover-layer{background:var(--cr-hover-background-color);border-radius:50%;height:var(--horizontal-carousel-pagination-button-size);width:var(--horizontal-carousel-pagination-button-size);pointer-events:none;position:absolute;top:50%;transform:translateY(-50%);z-index:2}#hoverLayerForward{right:var(--horizontal-carousel-pagination-button-margin)}#carouselForwardButton:hover~#hoverLayerForward{display:block}#hoverLayerBack{left:var(--horizontal-carousel-pagination-button-margin)}#carouselBackButton:hover~#hoverLayerBack{display:block}</style>
<cr-icon-button id="carouselBackButton" class="carousel-button-container" on-click="onCarouselBackClick_" iron-icon="cr:chevron-left" hidden$="[[!showBackButton_]]" tabindex="-1">
</cr-icon-button>
<div id="hoverLayerBack" class="hover-layer"></div>

<cr-icon-button id="carouselForwardButton" class="carousel-button-container" on-click="onCarouselForwardClick_" iron-icon="cr:chevron-right" hidden$="[[!showForwardButton_]]" tabindex="-1">
</cr-icon-button>
<div id="hoverLayerForward" class="hover-layer"></div>

<div id="carouselContainer">
  <slot></slot>
</div>

<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const HorizontalCarouselElementBase=I18nMixin(PolymerElement);class HorizontalCarouselElement extends HorizontalCarouselElementBase{constructor(){super(...arguments);this.resizeObserver_=null;this.eventTracker_=new EventTracker}static get is(){return"horizontal-carousel"}static get template(){return getTemplate$h()}static get properties(){return{showForwardButton_:{type:Boolean,value:false,reflectToAttribute:true},showBackButton_:{type:Boolean,value:false,reflectToAttribute:true}}}connectedCallback(){super.connectedCallback();this.resizeObserver_=new ResizeObserver((()=>{this.setShowCarouselButtons_()}));this.resizeObserver_.observe(this.$.carouselContainer);this.eventTracker_.add(this,"keyup",this.onTabFocus_.bind(this))}disconnectedCallback(){super.disconnectedCallback();if(this.resizeObserver_){this.resizeObserver_.unobserve(this.$.carouselContainer);this.resizeObserver_=null}}onCarouselBackClick_(){const targetPosition=this.calculateTargetPosition_(-1);this.$.carouselContainer.scrollTo({left:targetPosition,behavior:"smooth"});this.showBackButton_=targetPosition>0;this.showForwardButton_=true}onCarouselForwardClick_(){const targetPosition=this.calculateTargetPosition_(1);this.$.carouselContainer.scrollTo({left:targetPosition,behavior:"smooth"});this.showForwardButton_=targetPosition+this.$.carouselContainer.clientWidth<this.$.carouselContainer.scrollWidth;this.showBackButton_=true}onTabFocus_(event){const element=event.target;if(event.code==="Tab"){this.$.carouselContainer.scrollTo({left:element.offsetLeft-2,behavior:"smooth"})}}setShowCarouselButtons_(){if(Math.round(this.$.carouselContainer.scrollLeft)+this.$.carouselContainer.clientWidth<this.$.carouselContainer.scrollWidth){this.showForwardButton_=true}else{this.showBackButton_=this.$.carouselContainer.scrollLeft>0;this.showForwardButton_=false}}calculateTargetPosition_(direction){const offset=this.$.carouselContainer.clientWidth/2*direction;const targetPosition=Math.floor(this.$.carouselContainer.scrollLeft+offset);return Math.max(0,Math.min(targetPosition,this.$.carouselContainer.scrollWidth-this.$.carouselContainer.clientWidth))}}customElements.define(HorizontalCarouselElement.is,HorizontalCarouselElement);
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const TimeSpec={$:{}};const TimeDeltaSpec={$:{}};const TimeTicksSpec={$:{}};mojo.internal.Struct(TimeSpec.$,"Time",[mojo.internal.StructField("internalValue",0,0,mojo.internal.Int64,BigInt(0),false,0)],[[0,16]]);mojo.internal.Struct(TimeDeltaSpec.$,"TimeDelta",[mojo.internal.StructField("microseconds",0,0,mojo.internal.Int64,BigInt(0),false,0)],[[0,16]]);mojo.internal.Struct(TimeTicksSpec.$,"TimeTicks",[mojo.internal.StructField("internalValue",0,0,mojo.internal.Int64,BigInt(0),false,0)],[[0,16]]);
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const UrlSpec={$:{}};mojo.internal.Struct(UrlSpec.$,"Url",[mojo.internal.StructField("url",0,0,mojo.internal.String,null,false,0)],[[0,16]]);
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const AnnotationSpec={$:mojo.internal.Enum()};var Annotation;(function(Annotation){Annotation[Annotation["MIN_VALUE"]=0]="MIN_VALUE";Annotation[Annotation["MAX_VALUE"]=1]="MAX_VALUE";Annotation[Annotation["kBookmarked"]=0]="kBookmarked";Annotation[Annotation["kSearchResultsPage"]=1]="kSearchResultsPage"})(Annotation||(Annotation={}));({$:mojo.internal.Enum()});var InteractionState;(function(InteractionState){InteractionState[InteractionState["MIN_VALUE"]=0]="MIN_VALUE";InteractionState[InteractionState["MAX_VALUE"]=2]="MAX_VALUE";InteractionState[InteractionState["kDefault"]=0]="kDefault";InteractionState[InteractionState["kHidden"]=1]="kHidden";InteractionState[InteractionState["kDone"]=2]="kDone"})(InteractionState||(InteractionState={}));const MatchPositionSpec={$:{}};const SearchQuerySpec={$:{}};const RawVisitDataSpec={$:{}};const URLVisitSpec={$:{}};const ClusterSpec={$:{}};mojo.internal.Struct(MatchPositionSpec.$,"MatchPosition",[mojo.internal.StructField("begin",0,0,mojo.internal.Uint32,0,false,0),mojo.internal.StructField("end",4,0,mojo.internal.Uint32,0,false,0)],[[0,16]]);mojo.internal.Struct(SearchQuerySpec.$,"SearchQuery",[mojo.internal.StructField("query",0,0,mojo.internal.String,null,false,0),mojo.internal.StructField("url",8,0,UrlSpec.$,null,false,0)],[[0,24]]);mojo.internal.Struct(RawVisitDataSpec.$,"RawVisitData",[mojo.internal.StructField("url",0,0,UrlSpec.$,null,false,0),mojo.internal.StructField("visitTime",8,0,TimeSpec.$,null,false,0)],[[0,24]]);mojo.internal.Struct(URLVisitSpec.$,"URLVisit",[mojo.internal.StructField("visitId",0,0,mojo.internal.Int64,BigInt(0),false,0),mojo.internal.StructField("normalizedUrl",8,0,UrlSpec.$,null,false,0),mojo.internal.StructField("urlForDisplay",16,0,mojo.internal.String,null,false,0),mojo.internal.StructField("pageTitle",24,0,mojo.internal.String,null,false,0),mojo.internal.StructField("titleMatchPositions",32,0,mojo.internal.Array(MatchPositionSpec.$,false),null,false,0),mojo.internal.StructField("urlForDisplayMatchPositions",40,0,mojo.internal.Array(MatchPositionSpec.$,false),null,false,0),mojo.internal.StructField("rawVisitData",48,0,RawVisitDataSpec.$,null,false,0),mojo.internal.StructField("duplicates",56,0,mojo.internal.Array(RawVisitDataSpec.$,false),null,false,0),mojo.internal.StructField("relativeDate",64,0,mojo.internal.String,null,false,0),mojo.internal.StructField("annotations",72,0,mojo.internal.Array(AnnotationSpec.$,false),null,false,0),mojo.internal.StructField("isKnownToSync",80,0,mojo.internal.Bool,false,false,0),mojo.internal.StructField("debugInfo",88,0,mojo.internal.Map(mojo.internal.String,mojo.internal.String,false),null,false,0),mojo.internal.StructField("hasUrlKeyedImage",80,1,mojo.internal.Bool,false,false,0)],[[0,104]]);mojo.internal.Struct(ClusterSpec.$,"Cluster",[mojo.internal.StructField("id",0,0,mojo.internal.Int64,BigInt(0),false,0),mojo.internal.StructField("visits",8,0,mojo.internal.Array(URLVisitSpec.$,false),null,false,0),mojo.internal.StructField("label",16,0,mojo.internal.String,null,false,0),mojo.internal.StructField("tabGroupName",24,0,mojo.internal.String,null,true,0),mojo.internal.StructField("labelMatchPositions",32,0,mojo.internal.Array(MatchPositionSpec.$,false),null,false,0),mojo.internal.StructField("relatedSearches",40,0,mojo.internal.Array(SearchQuerySpec.$,false),null,false,0),mojo.internal.StructField("imageUrl",48,0,UrlSpec.$,null,true,0),mojo.internal.StructField("fromPersistence",56,0,mojo.internal.Bool,false,false,0),mojo.internal.StructField("debugInfo",64,0,mojo.internal.String,null,true,0)],[[0,80]]);
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
({$:mojo.internal.Enum()});var WindowOpenDisposition;(function(WindowOpenDisposition){WindowOpenDisposition[WindowOpenDisposition["MIN_VALUE"]=0]="MIN_VALUE";WindowOpenDisposition[WindowOpenDisposition["MAX_VALUE"]=11]="MAX_VALUE";WindowOpenDisposition[WindowOpenDisposition["UNKNOWN"]=0]="UNKNOWN";WindowOpenDisposition[WindowOpenDisposition["CURRENT_TAB"]=1]="CURRENT_TAB";WindowOpenDisposition[WindowOpenDisposition["SINGLETON_TAB"]=2]="SINGLETON_TAB";WindowOpenDisposition[WindowOpenDisposition["NEW_FOREGROUND_TAB"]=3]="NEW_FOREGROUND_TAB";WindowOpenDisposition[WindowOpenDisposition["NEW_BACKGROUND_TAB"]=4]="NEW_BACKGROUND_TAB";WindowOpenDisposition[WindowOpenDisposition["NEW_POPUP"]=5]="NEW_POPUP";WindowOpenDisposition[WindowOpenDisposition["NEW_WINDOW"]=6]="NEW_WINDOW";WindowOpenDisposition[WindowOpenDisposition["SAVE_TO_DISK"]=7]="SAVE_TO_DISK";WindowOpenDisposition[WindowOpenDisposition["OFF_THE_RECORD"]=8]="OFF_THE_RECORD";WindowOpenDisposition[WindowOpenDisposition["IGNORE_ACTION"]=9]="IGNORE_ACTION";WindowOpenDisposition[WindowOpenDisposition["SWITCH_TO_TAB"]=10]="SWITCH_TO_TAB";WindowOpenDisposition[WindowOpenDisposition["NEW_PICTURE_IN_PICTURE"]=11]="NEW_PICTURE_IN_PICTURE"})(WindowOpenDisposition||(WindowOpenDisposition={}));const ClickModifiersSpec={$:{}};mojo.internal.Struct(ClickModifiersSpec.$,"ClickModifiers",[mojo.internal.StructField("middleButton",0,0,mojo.internal.Bool,false,false,0),mojo.internal.StructField("altKey",0,1,mojo.internal.Bool,false,false,0),mojo.internal.StructField("ctrlKey",0,2,mojo.internal.Bool,false,false,0),mojo.internal.StructField("metaKey",0,3,mojo.internal.Bool,false,false,0),mojo.internal.StructField("shiftKey",0,4,mojo.internal.Bool,false,false,0)],[[0,16]]);
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PointSpec={$:{}};const PointFSpec={$:{}};const Point3FSpec={$:{}};const SizeSpec={$:{}};const SizeFSpec={$:{}};const RectSpec={$:{}};const RectFSpec={$:{}};const InsetsSpec={$:{}};const InsetsFSpec={$:{}};const Vector2dSpec={$:{}};const Vector2dFSpec={$:{}};const Vector3dFSpec={$:{}};const QuaternionSpec={$:{}};const QuadFSpec={$:{}};mojo.internal.Struct(PointSpec.$,"Point",[mojo.internal.StructField("x",0,0,mojo.internal.Int32,0,false,0),mojo.internal.StructField("y",4,0,mojo.internal.Int32,0,false,0)],[[0,16]]);mojo.internal.Struct(PointFSpec.$,"PointF",[mojo.internal.StructField("x",0,0,mojo.internal.Float,0,false,0),mojo.internal.StructField("y",4,0,mojo.internal.Float,0,false,0)],[[0,16]]);mojo.internal.Struct(Point3FSpec.$,"Point3F",[mojo.internal.StructField("x",0,0,mojo.internal.Float,0,false,0),mojo.internal.StructField("y",4,0,mojo.internal.Float,0,false,0),mojo.internal.StructField("z",8,0,mojo.internal.Float,0,false,0)],[[0,24]]);mojo.internal.Struct(SizeSpec.$,"Size",[mojo.internal.StructField("width",0,0,mojo.internal.Int32,0,false,0),mojo.internal.StructField("height",4,0,mojo.internal.Int32,0,false,0)],[[0,16]]);mojo.internal.Struct(SizeFSpec.$,"SizeF",[mojo.internal.StructField("width",0,0,mojo.internal.Float,0,false,0),mojo.internal.StructField("height",4,0,mojo.internal.Float,0,false,0)],[[0,16]]);mojo.internal.Struct(RectSpec.$,"Rect",[mojo.internal.StructField("x",0,0,mojo.internal.Int32,0,false,0),mojo.internal.StructField("y",4,0,mojo.internal.Int32,0,false,0),mojo.internal.StructField("width",8,0,mojo.internal.Int32,0,false,0),mojo.internal.StructField("height",12,0,mojo.internal.Int32,0,false,0)],[[0,24]]);mojo.internal.Struct(RectFSpec.$,"RectF",[mojo.internal.StructField("x",0,0,mojo.internal.Float,0,false,0),mojo.internal.StructField("y",4,0,mojo.internal.Float,0,false,0),mojo.internal.StructField("width",8,0,mojo.internal.Float,0,false,0),mojo.internal.StructField("height",12,0,mojo.internal.Float,0,false,0)],[[0,24]]);mojo.internal.Struct(InsetsSpec.$,"Insets",[mojo.internal.StructField("top",0,0,mojo.internal.Int32,0,false,0),mojo.internal.StructField("left",4,0,mojo.internal.Int32,0,false,0),mojo.internal.StructField("bottom",8,0,mojo.internal.Int32,0,false,0),mojo.internal.StructField("right",12,0,mojo.internal.Int32,0,false,0)],[[0,24]]);mojo.internal.Struct(InsetsFSpec.$,"InsetsF",[mojo.internal.StructField("top",0,0,mojo.internal.Float,0,false,0),mojo.internal.StructField("left",4,0,mojo.internal.Float,0,false,0),mojo.internal.StructField("bottom",8,0,mojo.internal.Float,0,false,0),mojo.internal.StructField("right",12,0,mojo.internal.Float,0,false,0)],[[0,24]]);mojo.internal.Struct(Vector2dSpec.$,"Vector2d",[mojo.internal.StructField("x",0,0,mojo.internal.Int32,0,false,0),mojo.internal.StructField("y",4,0,mojo.internal.Int32,0,false,0)],[[0,16]]);mojo.internal.Struct(Vector2dFSpec.$,"Vector2dF",[mojo.internal.StructField("x",0,0,mojo.internal.Float,0,false,0),mojo.internal.StructField("y",4,0,mojo.internal.Float,0,false,0)],[[0,16]]);mojo.internal.Struct(Vector3dFSpec.$,"Vector3dF",[mojo.internal.StructField("x",0,0,mojo.internal.Float,0,false,0),mojo.internal.StructField("y",4,0,mojo.internal.Float,0,false,0),mojo.internal.StructField("z",8,0,mojo.internal.Float,0,false,0)],[[0,24]]);mojo.internal.Struct(QuaternionSpec.$,"Quaternion",[mojo.internal.StructField("x",0,0,mojo.internal.Double,0,false,0),mojo.internal.StructField("y",8,0,mojo.internal.Double,0,false,0),mojo.internal.StructField("z",16,0,mojo.internal.Double,0,false,0),mojo.internal.StructField("w",24,0,mojo.internal.Double,0,false,0)],[[0,40]]);mojo.internal.Struct(QuadFSpec.$,"QuadF",[mojo.internal.StructField("p1",0,0,PointFSpec.$,null,false,0),mojo.internal.StructField("p2",8,0,PointFSpec.$,null,false,0),mojo.internal.StructField("p3",16,0,PointFSpec.$,null,false,0),mojo.internal.StructField("p4",24,0,PointFSpec.$,null,false,0)],[[0,40]]);
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ClusterActionSpec={$:mojo.internal.Enum()};var ClusterAction;(function(ClusterAction){ClusterAction[ClusterAction["MIN_VALUE"]=0]="MIN_VALUE";ClusterAction[ClusterAction["MAX_VALUE"]=3]="MAX_VALUE";ClusterAction[ClusterAction["kDeleted"]=0]="kDeleted";ClusterAction[ClusterAction["kOpenedInTabGroup"]=1]="kOpenedInTabGroup";ClusterAction[ClusterAction["kRelatedSearchClicked"]=2]="kRelatedSearchClicked";ClusterAction[ClusterAction["kVisitClicked"]=3]="kVisitClicked"})(ClusterAction||(ClusterAction={}));const RelatedSearchActionSpec={$:mojo.internal.Enum()};var RelatedSearchAction;(function(RelatedSearchAction){RelatedSearchAction[RelatedSearchAction["MIN_VALUE"]=0]="MIN_VALUE";RelatedSearchAction[RelatedSearchAction["MAX_VALUE"]=0]="MAX_VALUE";RelatedSearchAction[RelatedSearchAction["kClicked"]=0]="kClicked"})(RelatedSearchAction||(RelatedSearchAction={}));const VisitActionSpec={$:mojo.internal.Enum()};var VisitAction;(function(VisitAction){VisitAction[VisitAction["MIN_VALUE"]=0]="MIN_VALUE";VisitAction[VisitAction["MAX_VALUE"]=2]="MAX_VALUE";VisitAction[VisitAction["kClicked"]=0]="kClicked";VisitAction[VisitAction["kHidden"]=1]="kHidden";VisitAction[VisitAction["kDeleted"]=2]="kDeleted"})(VisitAction||(VisitAction={}));const VisitTypeSpec={$:mojo.internal.Enum()};var VisitType;(function(VisitType){VisitType[VisitType["MIN_VALUE"]=0]="MIN_VALUE";VisitType[VisitType["MAX_VALUE"]=1]="MAX_VALUE";VisitType[VisitType["kSRP"]=0]="kSRP";VisitType[VisitType["kNonSRP"]=1]="kNonSRP"})(VisitType||(VisitType={}));class PageHandlerPendingReceiver{constructor(handle){this.handle=mojo.internal.interfaceSupport.getEndpointForReceiver(handle)}bindInBrowser(scope="context"){mojo.internal.interfaceSupport.bind(this.handle,"history_clusters.mojom.PageHandler",scope)}}class PageHandlerRemote{constructor(handle){this.proxy=new mojo.internal.interfaceSupport.InterfaceRemoteBase(PageHandlerPendingReceiver,handle);this.$=new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);this.onConnectionError=this.proxy.getConnectionErrorEventRouter()}openHistoryCluster(url,clickModifiers){this.proxy.sendMessage(0,PageHandler_OpenHistoryCluster_ParamsSpec.$,null,[url,clickModifiers])}setPage(page){this.proxy.sendMessage(1,PageHandler_SetPage_ParamsSpec.$,null,[page])}showContextMenuForSearchbox(query,point){this.proxy.sendMessage(2,PageHandler_ShowContextMenuForSearchbox_ParamsSpec.$,null,[query,point])}showContextMenuForURL(url,point){this.proxy.sendMessage(3,PageHandler_ShowContextMenuForURL_ParamsSpec.$,null,[url,point])}showSidePanelUI(){this.proxy.sendMessage(4,PageHandler_ShowSidePanelUI_ParamsSpec.$,null,[])}toggleVisibility(visible){return this.proxy.sendMessage(5,PageHandler_ToggleVisibility_ParamsSpec.$,PageHandler_ToggleVisibility_ResponseParamsSpec.$,[visible])}startQueryClusters(query,recluster){this.proxy.sendMessage(6,PageHandler_StartQueryClusters_ParamsSpec.$,null,[query,recluster])}loadMoreClusters(query){this.proxy.sendMessage(7,PageHandler_LoadMoreClusters_ParamsSpec.$,null,[query])}hideVisits(visits){return this.proxy.sendMessage(8,PageHandler_HideVisits_ParamsSpec.$,PageHandler_HideVisits_ResponseParamsSpec.$,[visits])}removeVisits(visits){return this.proxy.sendMessage(9,PageHandler_RemoveVisits_ParamsSpec.$,PageHandler_RemoveVisits_ResponseParamsSpec.$,[visits])}openVisitUrlsInTabGroup(visits,tabGroupName){this.proxy.sendMessage(10,PageHandler_OpenVisitUrlsInTabGroup_ParamsSpec.$,null,[visits,tabGroupName])}recordVisitAction(visitAction,visitIndex,visitType){this.proxy.sendMessage(11,PageHandler_RecordVisitAction_ParamsSpec.$,null,[visitAction,visitIndex,visitType])}recordRelatedSearchAction(action,visitIndex){this.proxy.sendMessage(12,PageHandler_RecordRelatedSearchAction_ParamsSpec.$,null,[action,visitIndex])}recordClusterAction(clusterAction,clusterIndex){this.proxy.sendMessage(13,PageHandler_RecordClusterAction_ParamsSpec.$,null,[clusterAction,clusterIndex])}recordToggledVisibility(visible){this.proxy.sendMessage(14,PageHandler_RecordToggledVisibility_ParamsSpec.$,null,[visible])}}class PageHandler{static get $interfaceName(){return"history_clusters.mojom.PageHandler"}static getRemote(){let remote=new PageHandlerRemote;remote.$.bindNewPipeAndPassReceiver().bindInBrowser();return remote}}class PagePendingReceiver{constructor(handle){this.handle=mojo.internal.interfaceSupport.getEndpointForReceiver(handle)}bindInBrowser(scope="context"){mojo.internal.interfaceSupport.bind(this.handle,"history_clusters.mojom.Page",scope)}}class PageRemote{constructor(handle){this.proxy=new mojo.internal.interfaceSupport.InterfaceRemoteBase(PagePendingReceiver,handle);this.$=new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);this.onConnectionError=this.proxy.getConnectionErrorEventRouter()}onClustersQueryResult(result){this.proxy.sendMessage(0,Page_OnClustersQueryResult_ParamsSpec.$,null,[result])}onClusterImageUpdated(clusterIndex,imageUrl){this.proxy.sendMessage(1,Page_OnClusterImageUpdated_ParamsSpec.$,null,[clusterIndex,imageUrl])}onVisitsHidden(hiddenVisits){this.proxy.sendMessage(2,Page_OnVisitsHidden_ParamsSpec.$,null,[hiddenVisits])}onVisitsRemoved(removedVisits){this.proxy.sendMessage(3,Page_OnVisitsRemoved_ParamsSpec.$,null,[removedVisits])}onHistoryDeleted(){this.proxy.sendMessage(4,Page_OnHistoryDeleted_ParamsSpec.$,null,[])}onQueryChangedByUser(query){this.proxy.sendMessage(5,Page_OnQueryChangedByUser_ParamsSpec.$,null,[query])}}class PageCallbackRouter{constructor(){this.helper_internal_=new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(PageRemote);this.$=new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);this.router_=new mojo.internal.interfaceSupport.CallbackRouter;this.onClustersQueryResult=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(0,Page_OnClustersQueryResult_ParamsSpec.$,null,this.onClustersQueryResult.createReceiverHandler(false));this.onClusterImageUpdated=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(1,Page_OnClusterImageUpdated_ParamsSpec.$,null,this.onClusterImageUpdated.createReceiverHandler(false));this.onVisitsHidden=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(2,Page_OnVisitsHidden_ParamsSpec.$,null,this.onVisitsHidden.createReceiverHandler(false));this.onVisitsRemoved=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(3,Page_OnVisitsRemoved_ParamsSpec.$,null,this.onVisitsRemoved.createReceiverHandler(false));this.onHistoryDeleted=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(4,Page_OnHistoryDeleted_ParamsSpec.$,null,this.onHistoryDeleted.createReceiverHandler(false));this.onQueryChangedByUser=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(5,Page_OnQueryChangedByUser_ParamsSpec.$,null,this.onQueryChangedByUser.createReceiverHandler(false));this.onConnectionError=this.helper_internal_.getConnectionErrorEventRouter()}removeListener(id){return this.router_.removeListener(id)}}const QueryResultSpec={$:{}};const PageHandler_OpenHistoryCluster_ParamsSpec={$:{}};const PageHandler_SetPage_ParamsSpec={$:{}};const PageHandler_ShowContextMenuForSearchbox_ParamsSpec={$:{}};const PageHandler_ShowContextMenuForURL_ParamsSpec={$:{}};const PageHandler_ShowSidePanelUI_ParamsSpec={$:{}};const PageHandler_ToggleVisibility_ParamsSpec={$:{}};const PageHandler_ToggleVisibility_ResponseParamsSpec={$:{}};const PageHandler_StartQueryClusters_ParamsSpec={$:{}};const PageHandler_LoadMoreClusters_ParamsSpec={$:{}};const PageHandler_HideVisits_ParamsSpec={$:{}};const PageHandler_HideVisits_ResponseParamsSpec={$:{}};const PageHandler_RemoveVisits_ParamsSpec={$:{}};const PageHandler_RemoveVisits_ResponseParamsSpec={$:{}};const PageHandler_OpenVisitUrlsInTabGroup_ParamsSpec={$:{}};const PageHandler_RecordVisitAction_ParamsSpec={$:{}};const PageHandler_RecordRelatedSearchAction_ParamsSpec={$:{}};const PageHandler_RecordClusterAction_ParamsSpec={$:{}};const PageHandler_RecordToggledVisibility_ParamsSpec={$:{}};const Page_OnClustersQueryResult_ParamsSpec={$:{}};const Page_OnClusterImageUpdated_ParamsSpec={$:{}};const Page_OnVisitsHidden_ParamsSpec={$:{}};const Page_OnVisitsRemoved_ParamsSpec={$:{}};const Page_OnHistoryDeleted_ParamsSpec={$:{}};const Page_OnQueryChangedByUser_ParamsSpec={$:{}};mojo.internal.Struct(QueryResultSpec.$,"QueryResult",[mojo.internal.StructField("query",0,0,mojo.internal.String,null,false,0),mojo.internal.StructField("clusters",8,0,mojo.internal.Array(ClusterSpec.$,false),null,false,0),mojo.internal.StructField("canLoadMore",16,0,mojo.internal.Bool,false,false,0),mojo.internal.StructField("isContinuation",16,1,mojo.internal.Bool,false,false,0)],[[0,32]]);mojo.internal.Struct(PageHandler_OpenHistoryCluster_ParamsSpec.$,"PageHandler_OpenHistoryCluster_Params",[mojo.internal.StructField("url",0,0,UrlSpec.$,null,false,0),mojo.internal.StructField("clickModifiers",8,0,ClickModifiersSpec.$,null,false,0)],[[0,24]]);mojo.internal.Struct(PageHandler_SetPage_ParamsSpec.$,"PageHandler_SetPage_Params",[mojo.internal.StructField("page",0,0,mojo.internal.InterfaceProxy(PageRemote),null,false,0)],[[0,16]]);mojo.internal.Struct(PageHandler_ShowContextMenuForSearchbox_ParamsSpec.$,"PageHandler_ShowContextMenuForSearchbox_Params",[mojo.internal.StructField("query",0,0,mojo.internal.String,null,false,0),mojo.internal.StructField("point",8,0,PointSpec.$,null,false,0)],[[0,24]]);mojo.internal.Struct(PageHandler_ShowContextMenuForURL_ParamsSpec.$,"PageHandler_ShowContextMenuForURL_Params",[mojo.internal.StructField("url",0,0,UrlSpec.$,null,false,0),mojo.internal.StructField("point",8,0,PointSpec.$,null,false,0)],[[0,24]]);mojo.internal.Struct(PageHandler_ShowSidePanelUI_ParamsSpec.$,"PageHandler_ShowSidePanelUI_Params",[],[[0,8]]);mojo.internal.Struct(PageHandler_ToggleVisibility_ParamsSpec.$,"PageHandler_ToggleVisibility_Params",[mojo.internal.StructField("visible",0,0,mojo.internal.Bool,false,false,0)],[[0,16]]);mojo.internal.Struct(PageHandler_ToggleVisibility_ResponseParamsSpec.$,"PageHandler_ToggleVisibility_ResponseParams",[mojo.internal.StructField("visible",0,0,mojo.internal.Bool,false,false,0)],[[0,16]]);mojo.internal.Struct(PageHandler_StartQueryClusters_ParamsSpec.$,"PageHandler_StartQueryClusters_Params",[mojo.internal.StructField("query",0,0,mojo.internal.String,null,false,0),mojo.internal.StructField("recluster",8,0,mojo.internal.Bool,false,false,0)],[[0,24]]);mojo.internal.Struct(PageHandler_LoadMoreClusters_ParamsSpec.$,"PageHandler_LoadMoreClusters_Params",[mojo.internal.StructField("query",0,0,mojo.internal.String,null,false,0)],[[0,16]]);mojo.internal.Struct(PageHandler_HideVisits_ParamsSpec.$,"PageHandler_HideVisits_Params",[mojo.internal.StructField("visits",0,0,mojo.internal.Array(URLVisitSpec.$,false),null,false,0)],[[0,16]]);mojo.internal.Struct(PageHandler_HideVisits_ResponseParamsSpec.$,"PageHandler_HideVisits_ResponseParams",[mojo.internal.StructField("success",0,0,mojo.internal.Bool,false,false,0)],[[0,16]]);mojo.internal.Struct(PageHandler_RemoveVisits_ParamsSpec.$,"PageHandler_RemoveVisits_Params",[mojo.internal.StructField("visits",0,0,mojo.internal.Array(URLVisitSpec.$,false),null,false,0)],[[0,16]]);mojo.internal.Struct(PageHandler_RemoveVisits_ResponseParamsSpec.$,"PageHandler_RemoveVisits_ResponseParams",[mojo.internal.StructField("success",0,0,mojo.internal.Bool,false,false,0)],[[0,16]]);mojo.internal.Struct(PageHandler_OpenVisitUrlsInTabGroup_ParamsSpec.$,"PageHandler_OpenVisitUrlsInTabGroup_Params",[mojo.internal.StructField("visits",0,0,mojo.internal.Array(URLVisitSpec.$,false),null,false,0),mojo.internal.StructField("tabGroupName",8,0,mojo.internal.String,null,true,0)],[[0,24]]);mojo.internal.Struct(PageHandler_RecordVisitAction_ParamsSpec.$,"PageHandler_RecordVisitAction_Params",[mojo.internal.StructField("visitAction",0,0,VisitActionSpec.$,0,false,0),mojo.internal.StructField("visitIndex",4,0,mojo.internal.Uint32,0,false,0),mojo.internal.StructField("visitType",8,0,VisitTypeSpec.$,0,false,0)],[[0,24]]);mojo.internal.Struct(PageHandler_RecordRelatedSearchAction_ParamsSpec.$,"PageHandler_RecordRelatedSearchAction_Params",[mojo.internal.StructField("action",0,0,RelatedSearchActionSpec.$,0,false,0),mojo.internal.StructField("visitIndex",4,0,mojo.internal.Uint32,0,false,0)],[[0,16]]);mojo.internal.Struct(PageHandler_RecordClusterAction_ParamsSpec.$,"PageHandler_RecordClusterAction_Params",[mojo.internal.StructField("clusterAction",0,0,ClusterActionSpec.$,0,false,0),mojo.internal.StructField("clusterIndex",4,0,mojo.internal.Uint32,0,false,0)],[[0,16]]);mojo.internal.Struct(PageHandler_RecordToggledVisibility_ParamsSpec.$,"PageHandler_RecordToggledVisibility_Params",[mojo.internal.StructField("visible",0,0,mojo.internal.Bool,false,false,0)],[[0,16]]);mojo.internal.Struct(Page_OnClustersQueryResult_ParamsSpec.$,"Page_OnClustersQueryResult_Params",[mojo.internal.StructField("result",0,0,QueryResultSpec.$,null,false,0)],[[0,16]]);mojo.internal.Struct(Page_OnClusterImageUpdated_ParamsSpec.$,"Page_OnClusterImageUpdated_Params",[mojo.internal.StructField("clusterIndex",0,0,mojo.internal.Int32,0,false,0),mojo.internal.StructField("imageUrl",8,0,UrlSpec.$,null,false,0)],[[0,24]]);mojo.internal.Struct(Page_OnVisitsHidden_ParamsSpec.$,"Page_OnVisitsHidden_Params",[mojo.internal.StructField("hiddenVisits",0,0,mojo.internal.Array(URLVisitSpec.$,false),null,false,0)],[[0,16]]);mojo.internal.Struct(Page_OnVisitsRemoved_ParamsSpec.$,"Page_OnVisitsRemoved_Params",[mojo.internal.StructField("removedVisits",0,0,mojo.internal.Array(URLVisitSpec.$,false),null,false,0)],[[0,16]]);mojo.internal.Struct(Page_OnHistoryDeleted_ParamsSpec.$,"Page_OnHistoryDeleted_Params",[],[[0,8]]);mojo.internal.Struct(Page_OnQueryChangedByUser_ParamsSpec.$,"Page_OnQueryChangedByUser_Params",[mojo.internal.StructField("query",0,0,mojo.internal.String,null,false,0)],[[0,16]]);
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class BrowserProxyImpl{constructor(handler,callbackRouter){this.handler=handler;this.callbackRouter=callbackRouter}static getInstance(){if(instance$2){return instance$2}const handler=PageHandler.getRemote();const callbackRouter=new PageCallbackRouter;handler.setPage(callbackRouter.$.bindNewPipeAndPassRemote());return instance$2=new BrowserProxyImpl(handler,callbackRouter)}static setInstance(obj){instance$2=obj}}let instance$2=null;
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class MetricsProxyImpl{recordClusterAction(action,index){BrowserProxyImpl.getInstance().handler.recordClusterAction(action,index)}recordRelatedSearchAction(action,index){BrowserProxyImpl.getInstance().handler.recordRelatedSearchAction(action,index)}recordToggledVisibility(visible){BrowserProxyImpl.getInstance().handler.recordToggledVisibility(visible)}recordVisitAction(action,index,type){BrowserProxyImpl.getInstance().handler.recordVisitAction(action,index,type)}static getInstance(){return instance$1||(instance$1=new MetricsProxyImpl)}static setInstance(obj){instance$1=obj}static getVisitType(visit){return visit.annotations.includes(Annotation.kSearchResultsPage)?VisitType.kSRP:VisitType.kNonSRP}}let instance$1=null;function getTemplate$g(){return html`<!--_html_template_start_--><style include="history-clusters-shared-style">:host{display:block;min-width:0}:host-context([chrome-refresh-2023]):host{--border-color:var(--color-suggestion-chip-border,
        var(--cr-fallback-color-tonal-outline));--icon-color:var(--color-suggestion-chip-icon,
        var(--cr-fallback-color-primary));--pill-padding-text:12px;--pill-padding-icon:8px;--pill-height:28px}a{align-items:center;color:inherit;display:flex;outline:0;text-decoration:none}:host-context([chrome-refresh-2023]) a{overflow:hidden;position:relative}:host(:hover) a{background-color:var(--cr-hover-background-color)}:host(:active) a{background-color:var(--cr-active-background-color)}:host-context([chrome-refresh-2023]):host(:hover) a{background-color:transparent}:host-context([chrome-refresh-2023]):host(:active) a{background-color:transparent}:host-context(.focus-outline-visible) a:focus{box-shadow:inset 0 0 0 2px var(--cr-focus-outline-color)}:host-context([chrome-refresh-2023].focus-outline-visible) a:focus{--pill-padding-icon:9px;--pill-padding-text:13px;border:none;box-shadow:none;outline:2px solid var(--cr-focus-outline-color);outline-offset:0}:host-context([chrome-refresh-2023]) span{position:relative;z-index:1}.icon{--cr-icon-button-margin-start:0;--cr-icon-color:var(--icon-color);--cr-icon-image:url(chrome://resources/images/icon_search.svg);--cr-icon-ripple-margin:0;--cr-icon-ripple-size:20px}:host-context([chrome-refresh-2023]) .icon{--cr-icon-ripple-size:16px;--cr-icon-size:16px}paper-ripple{display:none}:host-context([chrome-refresh-2023]) paper-ripple{--paper-ripple-opacity:1;color:var(--cr-active-background-color);display:block}#hover-layer{display:none}:host-context([chrome-refresh-2023]):host(:hover) #hover-layer{background:var(--cr-hover-background-color);content:'';display:block;inset:0;pointer-events:none;position:absolute}</style>
<a id="searchQueryLink" class="pill pill-icon-start" href$="[[searchQuery.url.url]]" on-click="onClick_" on-auxclick="onAuxClick_" on-keydown="onKeydown_">
  <div id="hover-layer"></div>
  <span class="icon cr-icon"></span>
  <span class="truncate">[[searchQuery.query]]</span>
</a>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SearchQueryElementBase=PaperRippleMixin(PolymerElement);class SearchQueryElement extends SearchQueryElementBase{static get is(){return"search-query"}static get template(){return getTemplate$g()}static get properties(){return{index:{type:Number,value:-1},searchQuery:Object}}ready(){super.ready();if(document.documentElement.hasAttribute("chrome-refresh-2023")){this.addEventListener("pointerdown",this.onPointerDown_.bind(this));this.addEventListener("pointercancel",this.onPointerCancel_.bind(this))}}onAuxClick_(){MetricsProxyImpl.getInstance().recordRelatedSearchAction(RelatedSearchAction.kClicked,this.index);this.dispatchEvent(new CustomEvent("related-search-clicked",{bubbles:true,composed:true}))}onClick_(event){event.preventDefault();this.onAuxClick_();this.openUrl_(event)}onKeydown_(e){this.noink=e.key===" ";if(e.key!=="Enter"){return}this.getRipple().uiDownAction();this.onAuxClick_();this.openUrl_(e);setTimeout((()=>this.getRipple().uiUpAction()),100)}onPointerDown_(){this.noink=false;this.ensureRipple()}onPointerCancel_(){this.getRipple().clear()}openUrl_(event){BrowserProxyImpl.getInstance().handler.openHistoryCluster(this.searchQuery.url,{middleButton:false,altKey:event.altKey,ctrlKey:event.ctrlKey,metaKey:event.metaKey,shiftKey:event.shiftKey})}_createRipple(){this._rippleContainer=this.$.searchQueryLink;const ripple=super._createRipple();return ripple}}customElements.define(SearchQueryElement.is,SearchQueryElement);
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const AUTO_SRC="auto-src";const CLEAR_SRC="clear-src";const IS_GOOGLE_PHOTOS="is-google-photos";const STATIC_ENCODE="static-encode";const ENCODE_TYPE="encode-type";class CrAutoImgElement extends HTMLImageElement{static get observedAttributes(){return[AUTO_SRC,IS_GOOGLE_PHOTOS,STATIC_ENCODE,ENCODE_TYPE]}attributeChangedCallback(name,oldValue,newValue){if(name!==AUTO_SRC&&name!==IS_GOOGLE_PHOTOS&&name!==STATIC_ENCODE&&name!==ENCODE_TYPE){return}if(name===IS_GOOGLE_PHOTOS&&oldValue===null===(newValue===null)){return}if(this.hasAttribute(CLEAR_SRC)){this.removeAttribute("src")}let url=null;try{url=new URL(this.getAttribute(AUTO_SRC)||"")}catch(_){}if(!url||url.protocol==="chrome-untrusted:"){this.removeAttribute("src");return}if(url.protocol==="data:"||url.protocol==="chrome:"){this.src=url.href;return}if(!this.hasAttribute(IS_GOOGLE_PHOTOS)&&!this.hasAttribute(STATIC_ENCODE)&&!this.hasAttribute(ENCODE_TYPE)){this.src="chrome://image?"+url.href;return}this.src=`chrome://image?url=${encodeURIComponent(url.href)}`;if(this.hasAttribute(IS_GOOGLE_PHOTOS)){this.src+=`&isGooglePhotos=true`}if(this.hasAttribute(STATIC_ENCODE)){this.src+=`&staticEncode=true`}if(this.hasAttribute(ENCODE_TYPE)){this.src+=`&encodeType=${this.getAttribute(ENCODE_TYPE)}`}}set autoSrc(src){this.setAttribute(AUTO_SRC,src)}get autoSrc(){return this.getAttribute(AUTO_SRC)||""}set clearSrc(_){this.setAttribute(CLEAR_SRC,"")}get clearSrc(){return this.getAttribute(CLEAR_SRC)||""}set isGooglePhotos(enabled){if(enabled){this.setAttribute(IS_GOOGLE_PHOTOS,"")}else{this.removeAttribute(IS_GOOGLE_PHOTOS)}}get isGooglePhotos(){return this.hasAttribute(IS_GOOGLE_PHOTOS)}set staticEncode(enabled){if(enabled){this.setAttribute(STATIC_ENCODE,"")}else{this.removeAttribute(STATIC_ENCODE)}}get staticEncode(){return this.hasAttribute(STATIC_ENCODE)}set encodeType(type){if(type){this.setAttribute(ENCODE_TYPE,type)}else{this.removeAttribute(ENCODE_TYPE)}}get encodeType(){return this.getAttribute(ENCODE_TYPE)||""}}customElements.define("cr-auto-img",CrAutoImgElement,{extends:"img"});
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ClientIdSpec={$:mojo.internal.Enum()};var ClientId;(function(ClientId){ClientId[ClientId["MIN_VALUE"]=0]="MIN_VALUE";ClientId[ClientId["MAX_VALUE"]=4]="MAX_VALUE";ClientId[ClientId["Journeys"]=0]="Journeys";ClientId[ClientId["JourneysSidePanel"]=1]="JourneysSidePanel";ClientId[ClientId["NtpRealbox"]=2]="NtpRealbox";ClientId[ClientId["NtpQuests"]=3]="NtpQuests";ClientId[ClientId["Bookmarks"]=4]="Bookmarks"})(ClientId||(ClientId={}));class PageImageServiceHandlerPendingReceiver{handle;constructor(handle){this.handle=mojo.internal.interfaceSupport.getEndpointForReceiver(handle)}bindInBrowser(scope="context"){mojo.internal.interfaceSupport.bind(this.handle,"page_image_service.mojom.PageImageServiceHandler",scope)}}class PageImageServiceHandlerRemote{proxy;$;onConnectionError;constructor(handle){this.proxy=new mojo.internal.interfaceSupport.InterfaceRemoteBase(PageImageServiceHandlerPendingReceiver,handle);this.$=new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);this.onConnectionError=this.proxy.getConnectionErrorEventRouter()}getPageImageUrl(clientId,pageUrl,options){return this.proxy.sendMessage(0,PageImageServiceHandler_GetPageImageUrl_ParamsSpec.$,PageImageServiceHandler_GetPageImageUrl_ResponseParamsSpec.$,[clientId,pageUrl,options])}}class PageImageServiceHandler{static get $interfaceName(){return"page_image_service.mojom.PageImageServiceHandler"}static getRemote(){let remote=new PageImageServiceHandlerRemote;remote.$.bindNewPipeAndPassReceiver().bindInBrowser();return remote}}const OptionsSpec={$:{}};const ImageResultSpec={$:{}};const PageImageServiceHandler_GetPageImageUrl_ParamsSpec={$:{}};const PageImageServiceHandler_GetPageImageUrl_ResponseParamsSpec={$:{}};mojo.internal.Struct(OptionsSpec.$,"Options",[mojo.internal.StructField("suggestImages",0,0,mojo.internal.Bool,true,false,0),mojo.internal.StructField("optimizationGuideImages",0,1,mojo.internal.Bool,true,false,0)],[[0,16]]);mojo.internal.Struct(ImageResultSpec.$,"ImageResult",[mojo.internal.StructField("imageUrl",0,0,UrlSpec.$,null,false,0)],[[0,16]]);mojo.internal.Struct(PageImageServiceHandler_GetPageImageUrl_ParamsSpec.$,"PageImageServiceHandler_GetPageImageUrl_Params",[mojo.internal.StructField("clientId",0,0,ClientIdSpec.$,0,false,0),mojo.internal.StructField("pageUrl",8,0,UrlSpec.$,null,false,0),mojo.internal.StructField("options",16,0,OptionsSpec.$,null,false,0)],[[0,32]]);mojo.internal.Struct(PageImageServiceHandler_GetPageImageUrl_ResponseParamsSpec.$,"PageImageServiceHandler_GetPageImageUrl_ResponseParams",[mojo.internal.StructField("result",0,0,ImageResultSpec.$,null,true,0)],[[0,16]]);
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class PageImageServiceBrowserProxy{handler;constructor(handler){this.handler=handler}static getInstance(){return instance||(instance=new PageImageServiceBrowserProxy(PageImageServiceHandler.getRemote()))}static setInstance(obj){instance=obj}}let instance=null;function getTemplate$f(){return html`<!--_html_template_start_--><style>:host{align-items:center;background-color:var(--entity-image-background-color);background-position:center;background-repeat:no-repeat;border-radius:5px;display:flex;flex-shrink:0;height:36px;justify-content:center;margin-inline:0 12px;width:36px}:host([in-side-panel_]){margin-inline:8px 16px}#page-image{border-radius:5px;max-height:100%;max-width:100%}:host([is-image-cover_]) #page-image{height:100%;object-fit:cover;width:100%}</style>

<template is="dom-if" if="[[imageUrl_]]">
  <img id="page-image" is="cr-auto-img" auto-src="[[imageUrl_.url]]">
</template>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class PageFavicon extends PolymerElement{static get is(){return"page-favicon"}static get template(){return getTemplate$f()}static get properties(){return{inSidePanel_:{type:Boolean,value:()=>loadTimeData.getBoolean("inSidePanel"),reflectToAttribute:true},style:{type:String,computed:`computeStyle_(url, imageUrl_)`,reflectToAttribute:true},url:Object,isKnownToSync:Boolean,imageUrl_:{type:Object,value:null},isImageCover_:{type:Boolean,value:()=>loadTimeData.getBoolean("isHistoryClustersImageCover"),reflectToAttribute:true}}}static get observers(){return["urlAndIsKnownToSyncChanged_(url, isKnownToSync)"]}getImageUrlForTesting(){return this.imageUrl_}computeStyle_(){if(this.imageUrl_&&this.imageUrl_.url){return""}if(!this.url){return""}return`background-image:${getFaviconForPageURL(this.url.url,this.isKnownToSync,"",16)}`}async urlAndIsKnownToSyncChanged_(){if(!this.url||!this.isKnownToSync||!loadTimeData.getBoolean("isHistoryClustersImagesEnabled")){this.imageUrl_=null;return}const{result:result}=await PageImageServiceBrowserProxy.getInstance().handler.getPageImageUrl(ClientId.Journeys,this.url,{suggestImages:true,optimizationGuideImages:true});if(result){this.imageUrl_=result.imageUrl}else{this.imageUrl_=null}}}customElements.define(PageFavicon.is,PageFavicon);function getTemplate$e(){return html`<!--_html_template_start_--><style include="history-clusters-shared-style cr-icons">:host{align-items:center;cursor:pointer;display:flex;min-height:64px}:host-context([chrome-refresh-2023]):host([in-side-panel_]){min-height:48px}:host(:hover){background-color:var(--cr-hover-background-color)}.suffix-icons{display:flex;opacity:0;position:absolute;--cr-icon-button-margin-end:8px}.suffix-icons:focus-within,:host(:hover) .suffix-icons{opacity:1;position:static}.hide-visit-icon{--cr-icon-image:url(chrome://resources/cr_components/history_clusters/hide_source_gm_grey_24dp.svg)}:host([in-side-panel_]) .hide-visit-icon{--cr-icon-button-icon-size:16px;--cr-icon-button-size:24px}.icon-more-vert{--cr-icon-button-margin-start:0}:host([in-side-panel_]) .icon-more-vert{--cr-icon-button-icon-size:16px;--cr-icon-button-size:24px}#header{align-items:center;display:flex;flex-grow:1;justify-content:space-between;min-width:0;padding-inline-start:var(--cluster-padding-horizontal)}:host([in-side-panel_]) #header{padding-inline-start:8px}a{color:inherit;text-decoration:none}#link-container{align-items:center;display:flex;margin-inline-end:var(--cluster-padding-horizontal);min-width:0;outline:0;padding-inline:2px}:host(:hover) #link-container{margin-inline-end:0}:host-context([chrome-refresh-2023]):host([in-side-panel_]) #icon{background-color:var(--color-list-item-url-favicon-background,var(--cr-fallback-color-neutral-container));height:40px;width:40px}:host-context(.focus-outline-visible) #link-container:focus{box-shadow:0 0 0 2px var(--cr-focus-outline-color)}#page-info{display:flex;flex-direction:column;min-width:0}#title-and-annotations{align-items:center;display:flex;line-height:2}.annotation{align-items:center;background-color:var(--annotation-background-color);border-radius:4px;color:var(--annotation-text-color);display:inline-flex;flex-shrink:0;font-weight:500;margin-inline-start:12px;padding:0 8px}.annotation+.annotation{margin-inline-start:8px}#title,#url{font-size:.875rem}:host([in-side-panel_]) #title{font-size:.8125rem;line-height:calc(20/13)}:host-context([chrome-refresh-2023]):host([in-side-panel_]) #title{font-size:.75rem;font-weight:500}#url{color:var(--url-color);line-height:1.5}:host([in-side-panel_]) #url{color:var(--side-panel-url-color);font-size:.75rem;line-height:calc(5/3)}:host-context([chrome-refresh-2023]):host([in-side-panel_]) #url{color:var(--color-history-clusters-side-panel-card-secondary-foreground);font-size:.6875rem}#debug-info{color:var(--cr-secondary-text-color)}</style>
<div id="header" on-click="onClick_" on-auxclick="onClick_" on-keydown="onKeydown_" on-contextmenu="onContextMenu_">
  <a id="link-container" href="[[visit.normalizedUrl.url]]">
    <page-favicon id="icon" url="[[visit.normalizedUrl]]" is-known-to-sync="[[visit.isKnownToSync]]">
    </page-favicon>
    <div id="page-info">
      <div id="title-and-annotations">
        <span id="title" class="truncate"></span>
        <template is="dom-repeat" items="[[annotations_]]">
          <span class="annotation">[[item]]</span>
        </template>
      </div>
      <span id="url" class="truncate"></span>
      <span id="debug-info" hidden="[[!debugInfo_]]">[[debugInfo_]]</span>
    </div>
  </a>
  <div class="suffix-icons">
    <cr-icon-button class="hide-visit-icon" title$="[[i18n('hideFromCluster')]]" on-click="onHideSelfButtonClick_" hidden="[[!fromPersistence]]"></cr-icon-button>
    <cr-icon-button id="actionMenuButton" class="icon-more-vert" title$="[[i18n('actionMenuDescription')]]" aria-haspopup="menu" on-click="onActionMenuButtonClick_" hidden="[[!allowDeletingHistory_]]">
    </cr-icon-button>
  </div>
</div>

<cr-lazy-render id="actionMenu">
  <template>
    <cr-action-menu role-description="[[i18n('actionMenuDescription')]]">
      <button id="removeSelfButton" class="dropdown-item" hidden="[[!allowDeletingHistory_]]" on-click="onRemoveSelfButtonClick_">
        [[i18n('removeFromHistory')]]
      </button>
    </cr-action-menu>
  </template>
</cr-lazy-render>
<!--_html_template_end_-->`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const WRAPPER_CSS_CLASS="search-highlight-wrapper";const ORIGINAL_CONTENT_CSS_CLASS="search-highlight-original-content";const HIT_CSS_CLASS="search-highlight-hit";function highlight(node,ranges){assert(ranges.length>0);const wrapper=document.createElement("span");wrapper.classList.add(WRAPPER_CSS_CLASS);assert(node.parentNode);node.parentNode.replaceChild(wrapper,node);const span=document.createElement("span");span.classList.add(ORIGINAL_CONTENT_CSS_CLASS);span.style.display="none";span.appendChild(node);wrapper.appendChild(span);const text=node.textContent;const tokens=[];for(let i=0;i<ranges.length;++i){const range=ranges[i];const prev=ranges[i-1]||{start:0,length:0};const start=prev.start+prev.length;const length=range.start-start;tokens.push(text.substr(start,length));tokens.push(text.substr(range.start,range.length))}const last=ranges.slice(-1)[0];tokens.push(text.substr(last.start+last.length));for(let i=0;i<tokens.length;++i){if(i%2===0){wrapper.appendChild(document.createTextNode(tokens[i]))}else{const hitSpan=document.createElement("span");hitSpan.classList.add(HIT_CSS_CLASS);hitSpan.style.backgroundColor="var(--search-highlight-hit-background-color, #ffeb3b)";hitSpan.style.color="var(--search-highlight-hit-color, #202124)";hitSpan.textContent=tokens[i];wrapper.appendChild(hitSpan)}}return wrapper}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function insertHighlightedTextWithMatchesIntoElement(container,text,matches){container.textContent="";const node=document.createTextNode(text);container.appendChild(node);const ranges=[];for(const match of matches){ranges.push({start:match.begin,length:match.end-match.begin})}if(ranges.length>0){highlight(node,ranges)}}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const annotationToStringId=new Map([[Annotation.kBookmarked,"bookmarked"]]);const ClusterMenuElementBase=I18nMixin(PolymerElement);class VisitRowElement extends ClusterMenuElementBase{static get is(){return"url-visit"}static get template(){return getTemplate$e()}static get properties(){return{query:String,visit:Object,fromPersistence:Boolean,annotations_:{type:Object,computed:"computeAnnotations_(visit)"},allowDeletingHistory_:{type:Boolean,value:()=>loadTimeData.getBoolean("allowDeletingHistory")},debugInfo_:{type:String,computed:"computeDebugInfo_(visit)"},inSidePanel_:{type:Boolean,value:()=>loadTimeData.getBoolean("inSidePanel"),reflectToAttribute:true},unusedTitle_:{type:String,computed:"computeTitle_(visit)"},unusedUrlForDisplay_:{type:String,computed:"computeUrlForDisplay_(visit)"}}}onAuxClick_(){this.dispatchEvent(new CustomEvent("visit-clicked",{bubbles:true,composed:true,detail:this.visit}))}onClick_(event){if(event.defaultPrevented){return}event.preventDefault();this.onAuxClick_();this.openUrl_(event)}onContextMenu_(event){if(!loadTimeData.getBoolean("inSidePanel")){return}BrowserProxyImpl.getInstance().handler.showContextMenuForURL(this.visit.normalizedUrl,{x:event.clientX,y:event.clientY})}onKeydown_(e){if(e.key!=="Enter"){return}this.onAuxClick_();this.openUrl_(e)}onActionMenuButtonClick_(event){this.$.actionMenu.get().showAt(this.$.actionMenuButton);event.preventDefault()}onHideSelfButtonClick_(event){this.emitMenuButtonClick_(event,"hide-visit")}onRemoveSelfButtonClick_(event){this.emitMenuButtonClick_(event,"remove-visit")}emitMenuButtonClick_(event,emitEventName){event.preventDefault();this.dispatchEvent(new CustomEvent(emitEventName,{bubbles:true,composed:true,detail:this.visit}));this.$.actionMenu.get().close()}computeAnnotations_(_visit){if(this.inSidePanel_){return[]}return this.visit.annotations.map((annotation=>annotationToStringId.get(annotation))).filter((id=>!!id)).map((id=>loadTimeData.getString(id)))}computeDebugInfo_(_visit){if(!loadTimeData.getBoolean("isHistoryClustersDebug")){return""}return JSON.stringify(this.visit.debugInfo)}computeTitle_(_visit){insertHighlightedTextWithMatchesIntoElement(this.$.title,this.visit.pageTitle,this.visit.titleMatchPositions);return this.visit.pageTitle}computeUrlForDisplay_(_visit){insertHighlightedTextWithMatchesIntoElement(this.$.url,this.visit.urlForDisplay,this.visit.urlForDisplayMatchPositions);return this.visit.urlForDisplay}openUrl_(event){BrowserProxyImpl.getInstance().handler.openHistoryCluster(this.visit.normalizedUrl,{middleButton:event.button===1,altKey:event.altKey,ctrlKey:event.ctrlKey,metaKey:event.metaKey,shiftKey:event.shiftKey})}}customElements.define(VisitRowElement.is,VisitRowElement);function getTemplate$d(){return html`<!--_html_template_start_--><style include="history-clusters-shared-style cr-icons">:host{--indentation:52px;--search-query-margin:10px;display:block;padding-bottom:var(--cluster-padding-vertical)}:host-context([chrome-refresh-2023]):host([in-side-panel]){--search-query-margin:4px}:host([in-side-panel]){--cr-icon-button-margin-start:8px;padding-bottom:0;padding-top:8px}:host-context([chrome-refresh-2023]):host([in-side-panel]) #container{background:var(--color-side-panel-card-background);border-radius:12px;overflow:hidden}:host([in-side-panel][is-first]){padding-top:0}:host-context(.focus-outline-visible):host(:focus) #container{box-shadow:inset 0 0 0 2px var(--cr-focus-outline-color)}:host([has-hidden-visits_]) #container{margin-bottom:var(--cluster-padding-vertical)}:host([in-side-panel]) #container url-visit:last-of-type{margin-bottom:8px}:host(:not([in-side-panel])) #container{background-color:var(--cr-card-background-color);border-radius:var(--cr-card-border-radius);box-shadow:var(--cr-card-shadow);padding:var(--cluster-padding-vertical) 0}.label-row{align-items:center;display:flex;flex-grow:1;justify-content:space-between;min-height:48px;min-width:0;padding-inline-start:var(--cluster-padding-horizontal)}:host([in-side-panel]) .label-row{min-height:44px;padding-inline-start:16px}#label{color:var(--cr-primary-text-color);font-size:1rem;font-weight:500}:host([in-side-panel]) #label{font-size:.875rem;line-height:calc(10/7);margin-inline-end:16px}:host([in-side-panel]) .timestamp{font-size:.75rem;line-height:calc(5/3)}:host-context([chrome-refresh-2023]):host([in-side-panel_]) .timestamp{font-size:.6875rem}.debug-info{color:var(--cr-secondary-text-color)}#related-searches-divider{display:none}:host-context([chrome-refresh-2023]):host([in-side-panel]) #related-searches-divider{display:block;background-color:var(--color-history-clusters-side-panel-divider);height:1px;margin:8px 16px}:host-context(html:not([chrome-refresh-2023])) #related-searches{margin:0 var(--cluster-padding-horizontal) 0}:host-context(html:not([chrome-refresh-2023])):host([in-side-panel]) #related-searches{margin:-8px 16px var(--cluster-padding-vertical)}:host-context([chrome-refresh-2023]) #related-searches{margin:16px var(--cluster-padding-horizontal) 0}:host-context([chrome-refresh-2023]):host([in-side-panel]) #related-searches{margin:16px 2px}:host-context([chrome-refresh-2023]):host([in-side-panel]) search-query{flex-shrink:0;margin-top:0}search-query:not(:last-of-type){margin-inline-end:var(--search-query-margin)}:host-context([chrome-refresh-2023]):host([in-side-panel]) search-query:first-of-type{margin-inline-start:16px}:host-context(html:not([chrome-refresh-2023])) search-query{margin-top:8px}</style>
<div id="container" on-visit-clicked="onVisitClicked_" on-open-all-visits="onOpenAllVisits_" on-hide-all-visits="onHideAllVisits_" on-remove-all-visits="onRemoveAllVisits_" on-hide-visit="onHideVisit_" on-remove-visit="onRemoveVisit_">
  <div class="label-row">
    <span id="label" class="truncate"></span>
    <img is="cr-auto-img" auto-src="[[imageUrl_]]">
    <div class="debug-info">[[cluster.debugInfo]]</div>
    <div class="timestamp-and-menu">
      <div class="timestamp">[[cluster.visits.0.relativeDate]]</div>
      <cluster-menu></cluster-menu>
    </div>
  </div>
  <template is="dom-repeat" items="[[cluster.visits]]">
    <url-visit visit="[[item]]" query="[[query]]" from-persistence="[[cluster.fromPersistence]]">
    </url-visit>
  </template>
  <div id="related-searches-divider" hidden="[[!cluster.relatedSearches.length]]"></div>
  <horizontal-carousel id="related-searches" hidden="[[!cluster.relatedSearches.length]]" role="list" aria-label$="[[i18n('relatedSearchesHeader')]]" on-related-search-clicked="onRelatedSearchClicked_" on-pointerdown="clearSelection_" in-side-panel$="[[inSidePanel]]">
    <template is="dom-repeat" items="[[relatedSearches_]]">
      <search-query search-query="[[item]]" index="[[index]]" role="listitem">
      </search-query>
    </template>
  </horizontal-carousel>
</div>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const HistoryClusterElementBase=I18nMixin(PolymerElement);class HistoryClusterElement extends HistoryClusterElementBase{static get is(){return"history-cluster"}static get template(){return getTemplate$d()}static get properties(){return{cluster:Object,index:{type:Number,value:-1},inSidePanel:{type:Boolean,value:()=>loadTimeData.getBoolean("inSidePanel"),reflectToAttribute:true},query:String,relatedSearches_:{type:Object,computed:`computeRelatedSearches_(cluster.relatedSearches.*)`},unusedLabel_:{type:String,computed:"computeLabel_(cluster.label)"},imageUrl_:{type:String,computed:`computeImageUrl_(cluster.imageUrl)`}}}constructor(){super();this.onVisitsHiddenListenerId_=null;this.onVisitsRemovedListenerId_=null;this.callbackRouter_=BrowserProxyImpl.getInstance().callbackRouter}connectedCallback(){super.connectedCallback();this.onVisitsHiddenListenerId_=this.callbackRouter_.onVisitsHidden.addListener(this.onVisitsRemovedOrHidden_.bind(this));this.onVisitsRemovedListenerId_=this.callbackRouter_.onVisitsRemoved.addListener(this.onVisitsRemovedOrHidden_.bind(this))}disconnectedCallback(){super.disconnectedCallback();assert(this.onVisitsHiddenListenerId_);this.callbackRouter_.removeListener(this.onVisitsHiddenListenerId_);this.onVisitsHiddenListenerId_=null;assert(this.onVisitsRemovedListenerId_);this.callbackRouter_.removeListener(this.onVisitsRemovedListenerId_);this.onVisitsRemovedListenerId_=null}onRelatedSearchClicked_(){MetricsProxyImpl.getInstance().recordClusterAction(ClusterAction.kRelatedSearchClicked,this.index)}clearSelection_(event){this.onBrowserIdle_().then((()=>{if(window.getSelection()&&!event.altKey){window.getSelection()?.empty()}}))}onVisitClicked_(event){MetricsProxyImpl.getInstance().recordClusterAction(ClusterAction.kVisitClicked,this.index);const visit=event.detail;MetricsProxyImpl.getInstance().recordVisitAction(VisitAction.kClicked,this.getVisitIndex_(visit),MetricsProxyImpl.getVisitType(visit))}onOpenAllVisits_(){BrowserProxyImpl.getInstance().handler.openVisitUrlsInTabGroup(this.cluster.visits,this.cluster.tabGroupName??null);MetricsProxyImpl.getInstance().recordClusterAction(ClusterAction.kOpenedInTabGroup,this.index)}onHideAllVisits_(){this.dispatchEvent(new CustomEvent("hide-visits",{bubbles:true,composed:true,detail:this.cluster.visits}))}onRemoveAllVisits_(){this.dispatchEvent(new CustomEvent("remove-visits",{bubbles:true,composed:true,detail:this.cluster.visits}))}onHideVisit_(event){const visit=event.detail;MetricsProxyImpl.getInstance().recordVisitAction(VisitAction.kHidden,this.getVisitIndex_(visit),MetricsProxyImpl.getVisitType(visit))}onRemoveVisit_(event){const visit=event.detail;MetricsProxyImpl.getInstance().recordVisitAction(VisitAction.kDeleted,this.getVisitIndex_(visit),MetricsProxyImpl.getVisitType(visit));this.dispatchEvent(new CustomEvent("remove-visits",{bubbles:true,composed:true,detail:[visit]}))}onBrowserIdle_(){return new Promise((resolve=>{requestIdleCallback((()=>{resolve()}))}))}onVisitsRemovedOrHidden_(removedVisits){const visitHasBeenRemoved=visit=>removedVisits.findIndex((removedVisit=>{if(visit.normalizedUrl.url!==removedVisit.normalizedUrl.url){return false}const rawVisitTime=visit.rawVisitData.visitTime.internalValue;return removedVisit.rawVisitData.visitTime.internalValue===rawVisitTime||removedVisit.duplicates.map((data=>data.visitTime.internalValue)).includes(rawVisitTime)}))!==-1;const allVisits=this.cluster.visits;const remainingVisits=allVisits.filter((v=>!visitHasBeenRemoved(v)));if(allVisits.length===remainingVisits.length){return}if(!remainingVisits.length){this.dispatchEvent(new CustomEvent("remove-cluster",{bubbles:true,composed:true,detail:this.index}));MetricsProxyImpl.getInstance().recordClusterAction(ClusterAction.kDeleted,this.index)}else{this.set("cluster.visits",remainingVisits)}this.dispatchEvent(new CustomEvent("iron-resize",{bubbles:true,composed:true}))}computeLabel_(){if(!this.cluster.label){return"no_label"}insertHighlightedTextWithMatchesIntoElement(this.$.label,this.cluster.label,this.cluster.labelMatchPositions);return this.cluster.label}computeRelatedSearches_(){return this.cluster.relatedSearches.filter(((query,index)=>query&&!(this.inSidePanel&&index>2)))}computeImageUrl_(){if(!this.cluster.imageUrl){return""}requestIdleCallback((()=>{this.dispatchEvent(new CustomEvent("iron-resize",{bubbles:true,composed:true}))}));return this.cluster.imageUrl.url}getVisitIndex_(visit){return this.cluster.visits.indexOf(visit)}}customElements.define(HistoryClusterElement.is,HistoryClusterElement);function getTemplate$c(){return html`<!--_html_template_start_-->    <style>:host{--cr-toast-background:#323232;--cr-toast-button-color:var(--google-blue-300);--cr-toast-text-color:#fff}@media (prefers-color-scheme:dark){:host{--cr-toast-background:var(--google-grey-900) linear-gradient(rgba(255, 255, 255, .06), rgba(255, 255, 255, .06));--cr-toast-button-color:var(--google-blue-300);--cr-toast-text-color:var(--google-grey-200)}}:host{align-items:center;background:var(--cr-toast-background);border-radius:4px;bottom:0;box-shadow:0 2px 4px 0 rgba(0,0,0,.28);box-sizing:border-box;display:flex;margin:24px;max-width:var(--cr-toast-max-width,568px);min-height:52px;min-width:288px;opacity:0;padding:0 24px;position:fixed;transform:translateY(100px);transition:opacity .3s,transform .3s;visibility:hidden;z-index:1}:host-context([chrome-refresh-2023]):host{--cr-toast-background:var(--color-toast-background,
            var(--cr-fallback-color-inverse-surface));--cr-toast-button-color:var(--color-toast-button,
            var(--cr-fallback-color-inverse-primary));--cr-toast-text-color:var(--color-toast-foreground,
            var(--cr-fallback-color-inverse-on-surface));border-radius:8px;line-height:20px;padding:0 16px}:host-context([dir=ltr]){left:0}:host-context([dir=rtl]){right:0}:host([open]){opacity:1;transform:translateY(0);visibility:visible}:host ::slotted(*){color:var(--cr-toast-text-color)}:host ::slotted(cr-button){background-color:transparent!important;border:none!important;color:var(--cr-toast-button-color)!important;margin-inline-start:32px!important;min-width:52px!important;padding:8px!important}:host ::slotted(cr-button:hover){background-color:transparent!important}:host-context([chrome-refresh-2023]) ::slotted(cr-button:last-of-type){margin-inline-end:-8px}</style>
    <slot></slot>
<!--_html_template_end_-->`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrToastElement extends PolymerElement{constructor(){super(...arguments);this.hideTimeoutId_=null}static get is(){return"cr-toast"}static get template(){return getTemplate$c()}static get properties(){return{duration:{type:Number,value:0},open:{readOnly:true,type:Boolean,value:false,reflectToAttribute:true}}}static get observers(){return["resetAutoHide_(duration, open)"]}resetAutoHide_(){if(this.hideTimeoutId_!==null){window.clearTimeout(this.hideTimeoutId_);this.hideTimeoutId_=null}if(this.open&&this.duration!==0){this.hideTimeoutId_=window.setTimeout((()=>{this.hide()}),this.duration)}}show(){const shouldResetAutohide=this.open;this.removeAttribute("role");this.removeAttribute("aria-hidden");this._setOpen(true);this.setAttribute("role","alert");if(shouldResetAutohide){this.resetAutoHide_()}}hide(){this.setAttribute("aria-hidden","true");this._setOpen(false)}}customElements.define(CrToastElement.is,CrToastElement);
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Polymer({_template:html`
    <style>
      :host {
        display: block;
      }
    </style>

    <slot></slot>
`,is:"iron-scroll-threshold",properties:{upperThreshold:{type:Number,value:100},lowerThreshold:{type:Number,value:100},upperTriggered:{type:Boolean,value:false,notify:true,readOnly:true},lowerTriggered:{type:Boolean,value:false,notify:true,readOnly:true},horizontal:{type:Boolean,value:false}},behaviors:[IronScrollTargetBehavior],observers:["_setOverflow(scrollTarget)","_initCheck(horizontal, isAttached)"],get _defaultScrollTarget(){return this},_setOverflow:function(scrollTarget){this.style.overflow=scrollTarget===this?"auto":"";this.style.webkitOverflowScrolling=scrollTarget===this?"touch":""},_scrollHandler:function(){var THROTTLE_THRESHOLD=200;if(!this.isDebouncerActive("_checkTheshold")){this.debounce("_checkTheshold",(function(){this.checkScrollThresholds()}),THROTTLE_THRESHOLD)}},_initCheck:function(horizontal,isAttached){if(isAttached){this.debounce("_init",(function(){this.clearTriggers();this.checkScrollThresholds()}))}},checkScrollThresholds:function(){if(!this.scrollTarget||this.lowerTriggered&&this.upperTriggered){return}var upperScrollValue=this.horizontal?this._scrollLeft:this._scrollTop;var lowerScrollValue=this.horizontal?this.scrollTarget.scrollWidth-this._scrollTargetWidth-this._scrollLeft:this.scrollTarget.scrollHeight-this._scrollTargetHeight-this._scrollTop;if(upperScrollValue<=this.upperThreshold&&!this.upperTriggered){this._setUpperTriggered(true);this.fire("upper-threshold")}if(lowerScrollValue<=this.lowerThreshold&&!this.lowerTriggered){this._setLowerTriggered(true);this.fire("lower-threshold")}},checkScrollThesholds:function(){this.checkScrollThresholds()},clearTriggers:function(){this._setUpperTriggered(false);this._setLowerTriggered(false)}});function getTemplate$b(){return html`<!--_html_template_start_--><style include="history-clusters-shared-style">:host{color:var(--cr-primary-text-color);display:block;font-size:.875rem;overflow-y:auto}cr-dialog::part(dialog){--cr-dialog-width:min(calc(100% - 32px), 512px)}:host([in-side-panel_]) cr-toast{margin:16px}#clusters{margin:0 auto;max-width:var(--cluster-max-width);min-width:var(--cluster-min-width);padding:var(--first-cluster-padding-top) var(--cluster-padding-horizontal) 0}:host([in-side-panel_]) #clusters{min-width:0;padding:8px 0 0}:host-context([chrome-refresh-2023]):host([in-side-panel_]) #clusters{padding:0}:host-context(.focus-outline-visible) history-cluster:focus,history-cluster:focus-visible{outline:0}:host([in-side-panel_]) history-cluster{border-bottom:4px solid var(--cr-separator-color)}:host-context([chrome-refresh-2023]):host([in-side-panel_]) history-cluster{border-bottom:none}:host([in-side-panel_]) history-cluster[is-last]{border-bottom:none}#placeholder{align-items:center;color:var(--md-loading-message-color);display:flex;flex:1;font-size:inherit;font-weight:500;height:100%;justify-content:center}#footer{display:flex;justify-content:center;padding:0 var(--cluster-padding-horizontal) var(--cluster-padding-vertical)}:host-context([chrome-refresh-2023]):host([in-side-panel_]) #footer{padding-top:var(--cluster-padding-vertical)}:host-context([chrome-refresh-2023]):host([in-side-panel_]) cr-dialog{--cr-dialog-background-color:var(--color-history-clusters-side-panel-dialog-background);--cr-primary-text-color:var(--color-history-clusters-side-panel-dialog-primary-foreground);--cr-secondary-text-color:var(
        --color-history-clusters-side-panel-dialog-secondary-foreground);--cr-dialog-title-font-size:16px;--cr-dialog-title-slot-padding-bottom:8px;font-weight:500}:host-context([chrome-refresh-2023]):host([in-side-panel_]) cr-dialog::part(dialog){--scroll-border-color:var(--color-history-clusters-side-panel-dialog-divider);border-radius:12px;box-shadow:var(--cr-elevation-3)}</style>
<div id="placeholder" hidden="[[!placeholderText_]]">
  [[placeholderText_]]
</div>
<iron-list id="clusters" items="[[result_.clusters]]" on-hide-visit="onHideVisit_" on-hide-visits="onHideVisits_" on-remove-visits="onRemoveVisits_" hidden="[[!result_.clusters.length]]">
  
  <template>
    <history-cluster cluster="[[item]]" index="[[index]]" query="[[result_.query]]" tabindex$="[[tabIndex]]" on-remove-cluster="onRemoveCluster_" is-first$="[[!index]]" is-last$="[[isLastCluster_(index, result_.clusters.*)]]">
    </history-cluster>
  </template>
</iron-list>
<div id="footer" hidden="[[getLoadMoreButtonHidden_(
    result_, result_.clusters.*, result_.canLoadMore)]]">
  <cr-button id="loadMoreButton" on-click="onLoadMoreButtonClick_" hidden$="[[showSpinner_]]">
    [[i18n('loadMoreButtonLabel')]]
  </cr-button>
  <iron-icon src="chrome://resources/images/throbber_small.svg" hidden$="[[!showSpinner_]]"></iron-icon>
</div>
<iron-scroll-threshold id="scrollThreshold" lower-threshold="500" on-lower-threshold="onScrolledToBottom_">
</iron-scroll-threshold>
<cr-lazy-render id="confirmationDialog">
  <template>
    <cr-dialog consume-keydown-event on-cancel="onConfirmationDialogCancel_">
      <div slot="title">[[i18n('removeSelected')]]</div>
      <div slot="body">[[i18n('deleteWarning')]]</div>
      <div slot="button-container">
        <cr-button class="cancel-button" on-click="onCancelButtonClick_">
          [[i18n('cancel')]]
        </cr-button>
        <cr-button class="action-button" on-click="onRemoveButtonClick_">
          [[i18n('deleteConfirm')]]
        </cr-button>
      </div>
    </cr-dialog>
  </template>
</cr-lazy-render>
<cr-lazy-render id="confirmationToast">
  <template>
    <cr-toast duration="5000">
      <div>[[i18n('removeFromHistoryToast')]]</div>
    </cr-toast>
  </template>
</cr-lazy-render>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const HistoryClustersElementBase=I18nMixin(PolymerElement);class HistoryClustersElement extends HistoryClustersElementBase{static get is(){return"history-clusters"}static get template(){return getTemplate$b()}static get properties(){return{inSidePanel_:{type:Boolean,value:()=>loadTimeData.getBoolean("inSidePanel"),reflectToAttribute:true},query:{type:String,observer:"onQueryChanged_",value:""},placeholderText_:{type:String,computed:`computePlaceholderText_(result_.*)`},result_:Object,showSpinner_:{type:Boolean,value:false},visitsToBeRemoved_:{type:Object,value:()=>[]}}}constructor(){super();this.onClustersQueryResultListenerId_=null;this.onClusterImageUpdatedListenerId_=null;this.onVisitsRemovedListenerId_=null;this.onHistoryDeletedListenerId_=null;this.onQueryChangedByUserListenerId_=null;this.pageHandler_=BrowserProxyImpl.getInstance().handler;this.callbackRouter_=BrowserProxyImpl.getInstance().callbackRouter}connectedCallback(){super.connectedCallback();FocusOutlineManager.forDocument(document);this.$.clusters.notifyResize();this.$.clusters.scrollTarget=this;this.$.scrollThreshold.scrollTarget=this;this.onClustersQueryResultListenerId_=this.callbackRouter_.onClustersQueryResult.addListener(this.onClustersQueryResult_.bind(this));this.onClusterImageUpdatedListenerId_=this.callbackRouter_.onClusterImageUpdated.addListener(this.onClusterImageUpdated_.bind(this));this.onVisitsRemovedListenerId_=this.callbackRouter_.onVisitsRemoved.addListener(this.onVisitsRemoved_.bind(this));this.onHistoryDeletedListenerId_=this.callbackRouter_.onHistoryDeleted.addListener(this.onHistoryDeleted_.bind(this));this.onQueryChangedByUserListenerId_=this.callbackRouter_.onQueryChangedByUser.addListener(this.onQueryChangedByUser_.bind(this));if(this.inSidePanel_){this.pageHandler_.showSidePanelUI()}}disconnectedCallback(){super.disconnectedCallback();assert(this.onClustersQueryResultListenerId_);this.callbackRouter_.removeListener(this.onClustersQueryResultListenerId_);this.onClustersQueryResultListenerId_=null;assert(this.onVisitsRemovedListenerId_);this.callbackRouter_.removeListener(this.onVisitsRemovedListenerId_);this.onVisitsRemovedListenerId_=null;assert(this.onHistoryDeletedListenerId_);this.callbackRouter_.removeListener(this.onHistoryDeletedListenerId_);this.onHistoryDeletedListenerId_=null;assert(this.onQueryChangedByUserListenerId_);this.callbackRouter_.removeListener(this.onQueryChangedByUserListenerId_);this.onQueryChangedByUserListenerId_=null}onCancelButtonClick_(){this.visitsToBeRemoved_=[];this.$.confirmationDialog.get().close()}onConfirmationDialogCancel_(){this.visitsToBeRemoved_=[]}onLoadMoreButtonClick_(){if(this.result_&&this.result_.canLoadMore){this.showSpinner_=true;this.set("result_.canLoadMore",false);this.pageHandler_.loadMoreClusters(this.result_.query)}}onRemoveButtonClick_(){this.pageHandler_.removeVisits(this.visitsToBeRemoved_).then((()=>{this.visitsToBeRemoved_=[]}));this.$.confirmationDialog.get().close()}onHideVisit_(event){this.pageHandler_.hideVisits([event.detail])}onHideVisits_(event){this.pageHandler_.hideVisits(event.detail)}onRemoveCluster_(event){const index=event.detail;this.splice("result_.clusters",index,1)}onRemoveVisits_(event){if(this.visitsToBeRemoved_.length){return}this.visitsToBeRemoved_=event.detail;if(this.visitsToBeRemoved_.length>1){this.$.confirmationDialog.get().showModal()}else{this.onRemoveButtonClick_()}}onScrolledToBottom_(){this.$.scrollThreshold.clearTriggers();if(this.shadowRoot.querySelector(":focus-visible")){return}this.onLoadMoreButtonClick_()}computePlaceholderText_(){if(!this.result_){return""}return this.result_.clusters.length?"":loadTimeData.getString(this.result_.query?"noSearchResults":"historyClustersNoResults")}getLoadMoreButtonHidden_(_result,_resultClusters,_resultCanLoadMore){return!this.result_||this.result_.clusters.length===0||!this.result_.canLoadMore}isLastCluster_(index){return index===this.result_.clusters.length-1}onBrowserIdle_(){return new Promise((resolve=>{requestIdleCallback((()=>{resolve()}))}))}onClustersQueryResult_(result){if(result.isContinuation){this.push("result_.clusters",...result.clusters);this.set("result_.canLoadMore",result.canLoadMore)}else{this.scrollTop=0;this.result_=result}this.onBrowserIdle_().then((()=>{if(this.scrollHeight<=this.clientHeight&&this.result_.canLoadMore){this.onLoadMoreButtonClick_()}}));this.showSpinner_=false}onClusterImageUpdated_(clusterIndex,imageUrl){this.set(`result_.clusters.${clusterIndex}.imageUrl`,imageUrl)}onQueryChanged_(){this.onBrowserIdle_().then((()=>{if(this.result_&&this.result_.canLoadMore){this.set("result_.canLoadMore",false)}this.pageHandler_.startQueryClusters(this.query.trim(),new URLSearchParams(window.location.search).has("recluster"))}))}onVisitsRemoved_(removedVisits){if(removedVisits.length===1){this.$.confirmationToast.get().show()}}onHistoryDeleted_(){this.onQueryChanged_()}onQueryChangedByUser_(query){this.dispatchEvent(new CustomEvent("query-changed-by-user",{bubbles:true,composed:true,detail:query}))}}customElements.define(HistoryClustersElement.is,HistoryClustersElement);function getTemplate$a(){return html`<!--_html_template_start_-->    <style include="cr-hidden-style">:host{cursor:pointer;display:flex;flex-direction:row;font-size:var(--cr-tabs-font-size,14px);font-weight:500;height:var(--cr-tabs-height,48px);user-select:none}.tab{align-items:center;color:var(--cr-secondary-text-color);display:flex;flex:var(--cr-tabs-flex,auto);height:100%;justify-content:center;opacity:.8;outline:0;padding:0 var(--cr-tabs-tab-inline-padding,0);position:relative;transition:opacity .1s cubic-bezier(.4,0,1,1)}:host-context([chrome-refresh-2023]) .tab{opacity:1}:host-context(.focus-outline-visible) .tab:focus{outline:var(--cr-tabs-focus-outline,auto);outline-offset:var(--cr-tabs-focus-outline-offset,0)}.selected{color:var(--cr-tabs-selected-color,var(--google-blue-600));opacity:1}@media (prefers-color-scheme:dark){.selected{color:var(--cr-tabs-selected-color,var(--google-blue-300))}}.tab-icon{-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--cr-tabs-icon-size,var(--cr-icon-size));background-color:var(--cr-secondary-text-color);display:none;height:var(--cr-tabs-icon-size,var(--cr-icon-size));margin-inline-end:var(--cr-tabs-icon-margin-end,var(--cr-icon-size));width:var(--cr-tabs-icon-size,var(--cr-icon-size))}.selected .tab-icon{background-color:var(--cr-tabs-selected-color,var(--google-blue-600))}@media (prefers-color-scheme:dark){.selected .tab-icon{background-color:var(--cr-tabs-selected-color,var(--google-blue-300))}}.tab-indicator,.tab-indicator-background{bottom:0;height:var(--cr-tabs-selection-bar-width,2px);left:var(--cr-tabs-tab-inline-padding,0);position:absolute;right:var(--cr-tabs-tab-inline-padding,0)}.tab-indicator{border-top-left-radius:var(--cr-tabs-selection-bar-radius,var(--cr-tabs-selection-bar-width,2px));border-top-right-radius:var(--cr-tabs-selection-bar-radius,var(--cr-tabs-selection-bar-width,2px));opacity:0;transform-origin:left center;transition:transform}.selected .tab-indicator{background:var(--cr-tabs-selected-color,var(--google-blue-600));opacity:1}.tab-indicator.expand{transition-duration:150ms;transition-timing-function:cubic-bezier(.4,0,1,1)}.tab-indicator.contract{transition-duration:180ms;transition-timing-function:cubic-bezier(0,0,.2,1)}.tab-indicator-background{background:var(--cr-tabs-unselected-color,var(--google-blue-600));opacity:var(--cr-tabs-selection-bar-unselected-opacity,0);z-index:-1}@media (prefers-color-scheme:dark){.tab-indicator-background{background:var(--cr-tabs-unselected-color,var(--google-blue-300))}.selected .tab-indicator{background:var(--cr-tabs-selected-color,var(--google-blue-300))}}@media (forced-colors:active){.tab-indicator{background:SelectedItem}}</style>

    <template is="dom-repeat" items="[[tabNames]]">
      <div role="tab" class$="tab [[getSelectedClass_(index, selected)]]" on-click="onTabClick_" aria-selected$="[[getAriaSelected_(index, selected)]]" tabindex$="[[getTabindex_(index, selected)]]">
        <div class="tab-icon" style$="[[getIconStyle_(index)]]">
        </div>
        [[item]]
        <div class="tab-indicator-background"></div>
        <div class="tab-indicator"></div>
      </div>
    </template>
<!--_html_template_end_-->`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrTabsElement extends PolymerElement{constructor(){super(...arguments);this.isRtl_=false;this.lastSelected_=null}static get is(){return"cr-tabs"}static get template(){return getTemplate$a()}static get properties(){return{tabIcons:{type:Array,value:()=>[]},tabNames:{type:Array,value:()=>[]},selected:{type:Number,notify:true,observer:"onSelectedChanged_"}}}connectedCallback(){super.connectedCallback();this.isRtl_=this.matches(":host-context([dir=rtl]) cr-tabs")}ready(){super.ready();this.setAttribute("role","tablist");this.addEventListener("keydown",this.onKeyDown_.bind(this))}getAriaSelected_(index){return index===this.selected?"true":"false"}getIconStyle_(index){const icon=this.tabIcons[index];return icon?`-webkit-mask-image: url(${icon}); display: block;`:""}getTabindex_(index){return index===this.selected?"0":"-1"}getSelectedClass_(index){return index===this.selected?"selected":""}onSelectedChanged_(newSelected,oldSelected){const tabs=this.shadowRoot.querySelectorAll(".tab");if(tabs.length===0||oldSelected===undefined||tabs.length<=newSelected||tabs.length<=oldSelected){return}const oldTabRect=tabs[oldSelected].getBoundingClientRect();const newTabRect=tabs[newSelected].getBoundingClientRect();const newIndicator=tabs[newSelected].querySelector(".tab-indicator");newIndicator.classList.remove("expand","contract");this.updateIndicator_(newIndicator,newTabRect,oldTabRect.left,oldTabRect.width);newIndicator.getBoundingClientRect();newIndicator.classList.add("expand");newIndicator.addEventListener("transitionend",(e=>this.onIndicatorTransitionEnd_(e)),{once:true});const leftmostEdge=Math.min(oldTabRect.left,newTabRect.left);const fullWidth=newTabRect.left>oldTabRect.left?newTabRect.right-oldTabRect.left:oldTabRect.right-newTabRect.left;this.updateIndicator_(newIndicator,newTabRect,leftmostEdge,fullWidth)}onKeyDown_(e){const count=this.tabNames.length;let newSelection;if(e.key==="Home"){newSelection=0}else if(e.key==="End"){newSelection=count-1}else if(e.key==="ArrowLeft"||e.key==="ArrowRight"){const delta=e.key==="ArrowLeft"?this.isRtl_?1:-1:this.isRtl_?-1:1;newSelection=(count+this.selected+delta)%count}else{return}e.preventDefault();e.stopPropagation();this.selected=newSelection;this.shadowRoot.querySelector(".tab.selected").focus()}onIndicatorTransitionEnd_(event){const indicator=event.target;indicator.classList.replace("expand","contract");indicator.style.transform=`translateX(0) scaleX(1)`}onTabClick_(e){this.selected=e.model.index}updateIndicator_(indicator,originRect,newLeft,newWidth){const leftDiff=100*(newLeft-originRect.left)/originRect.width;const widthRatio=newWidth/originRect.width;const transform=`translateX(${leftDiff}%) scaleX(${widthRatio})`;indicator.style.transform=transform}}customElements.define(CrTabsElement.is,CrTabsElement);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Polymer({is:"iron-media-query",properties:{queryMatches:{type:Boolean,value:false,readOnly:true,notify:true},query:{type:String,observer:"queryChanged"},full:{type:Boolean,value:false},_boundMQHandler:{value:function(){return this.queryHandler.bind(this)}},_mq:{value:null}},attached:function(){this.style.display="none";this.queryChanged()},detached:function(){this._remove()},_add:function(){if(this._mq){this._mq.addListener(this._boundMQHandler)}},_remove:function(){if(this._mq){this._mq.removeListener(this._boundMQHandler)}this._mq=null},queryChanged:function(){this._remove();var query=this.query;if(!query){return}if(!this.full&&query[0]!=="("){query="("+query+")"}this._mq=window.matchMedia(query);this._add();this.queryHandler(this._mq)},queryHandler:function(mq){this._setQueryMatches(mq.matches)}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/class IronSelection{constructor(selectCallback){this.selection=[];this.selectCallback=selectCallback}get(){return this.multi?this.selection.slice():this.selection[0]}clear(excludes){this.selection.slice().forEach((function(item){if(!excludes||excludes.indexOf(item)<0){this.setItemSelected(item,false)}}),this)}isSelected(item){return this.selection.indexOf(item)>=0}setItemSelected(item,isSelected){if(item!=null){if(isSelected!==this.isSelected(item)){if(isSelected){this.selection.push(item)}else{var i=this.selection.indexOf(item);if(i>=0){this.selection.splice(i,1)}}if(this.selectCallback){this.selectCallback(item,isSelected)}}}}select(item){if(this.multi){this.toggle(item)}else if(this.get()!==item){this.setItemSelected(this.get(),false);this.setItemSelected(item,true)}}toggle(item){this.setItemSelected(item,!this.isSelected(item))}}
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const IronSelectableBehavior={properties:{attrForSelected:{type:String,value:null},selected:{type:String,notify:true},selectedItem:{type:Object,readOnly:true,notify:true},activateEvent:{type:String,value:"tap",observer:"_activateEventChanged"},selectable:String,selectedClass:{type:String,value:"iron-selected"},selectedAttribute:{type:String,value:null},fallbackSelection:{type:String,value:null},items:{type:Array,readOnly:true,notify:true,value:function(){return[]}},_excludedLocalNames:{type:Object,value:function(){return{template:1,"dom-bind":1,"dom-if":1,"dom-repeat":1}}}},observers:["_updateAttrForSelected(attrForSelected)","_updateSelected(selected)","_checkFallback(fallbackSelection)"],created:function(){this._bindFilterItem=this._filterItem.bind(this);this._selection=new IronSelection(this._applySelection.bind(this))},attached:function(){this._observer=this._observeItems(this);this._addListener(this.activateEvent)},detached:function(){if(this._observer){dom(this).unobserveNodes(this._observer)}this._removeListener(this.activateEvent)},indexOf:function(item){return this.items?this.items.indexOf(item):-1},select:function(value){this.selected=value},selectPrevious:function(){var length=this.items.length;var index=length-1;if(this.selected!==undefined){index=(Number(this._valueToIndex(this.selected))-1+length)%length}this.selected=this._indexToValue(index)},selectNext:function(){var index=0;if(this.selected!==undefined){index=(Number(this._valueToIndex(this.selected))+1)%this.items.length}this.selected=this._indexToValue(index)},selectIndex:function(index){this.select(this._indexToValue(index))},forceSynchronousItemUpdate:function(){if(this._observer&&typeof this._observer.flush==="function"){this._observer.flush()}else{this._updateItems()}},get _shouldUpdateSelection(){return this.selected!=null},_checkFallback:function(){this._updateSelected()},_addListener:function(eventName){this.listen(this,eventName,"_activateHandler")},_removeListener:function(eventName){this.unlisten(this,eventName,"_activateHandler")},_activateEventChanged:function(eventName,old){this._removeListener(old);this._addListener(eventName)},_updateItems:function(){var nodes=dom(this).queryDistributedElements(this.selectable||"*");nodes=Array.prototype.filter.call(nodes,this._bindFilterItem);this._setItems(nodes)},_updateAttrForSelected:function(){if(this.selectedItem){this.selected=this._valueForItem(this.selectedItem)}},_updateSelected:function(){this._selectSelected(this.selected)},_selectSelected:function(selected){if(!this.items){return}var item=this._valueToItem(this.selected);if(item){this._selection.select(item)}else{this._selection.clear()}if(this.fallbackSelection&&this.items.length&&this._selection.get()===undefined){this.selected=this.fallbackSelection}},_filterItem:function(node){return!this._excludedLocalNames[node.localName]},_valueToItem:function(value){return value==null?null:this.items[this._valueToIndex(value)]},_valueToIndex:function(value){if(this.attrForSelected){for(var i=0,item;item=this.items[i];i++){if(this._valueForItem(item)==value){return i}}}else{return Number(value)}},_indexToValue:function(index){if(this.attrForSelected){var item=this.items[index];if(item){return this._valueForItem(item)}}else{return index}},_valueForItem:function(item){if(!item){return null}if(!this.attrForSelected){var i=this.indexOf(item);return i===-1?null:i}var propValue=item[dashToCamelCase(this.attrForSelected)];return propValue!=undefined?propValue:item.getAttribute(this.attrForSelected)},_applySelection:function(item,isSelected){if(this.selectedClass){this.toggleClass(this.selectedClass,isSelected,item)}if(this.selectedAttribute){this.toggleAttribute(this.selectedAttribute,isSelected,item)}this._selectionChange();this.fire("iron-"+(isSelected?"select":"deselect"),{item:item})},_selectionChange:function(){this._setSelectedItem(this._selection.get())},_observeItems:function(node){return dom(node).observeNodes((function(mutation){this._updateItems();this._updateSelected();this.fire("iron-items-changed",mutation,{bubbles:false,cancelable:false})}))},_activateHandler:function(e){var t=e.target;var items=this.items;while(t&&t!=this){var i=items.indexOf(t);if(i>=0){var value=this._indexToValue(i);this._itemActivate(value,t);return}t=t.parentNode}},_itemActivate:function(value,item){if(!this.fire("iron-activate",{selected:value,item:item},{cancelable:true}).defaultPrevented){this.select(value)}}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Polymer({_template:html`
    <style>
      :host {
        display: block;
      }

      :host > ::slotted(:not(slot):not(.iron-selected)) {
        display: none !important;
      }
    </style>

    <slot></slot>
`,is:"iron-pages",behaviors:[IronResizableBehavior,IronSelectableBehavior],properties:{activateEvent:{type:String,value:null}},observers:["_selectedPageChanged(selected)"],_selectedPageChanged:function(selected,old){this.async(this.notifyResize)}});
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class FocusRowMixinDelegate{constructor(listItem){this.listItem_=listItem}onFocus(_row,e){const element=e.composedPath()[0];const focusableElement=FocusRow.getFocusableElement(element);if(element!==focusableElement){focusableElement.focus()}this.listItem_.lastFocused=focusableElement}onKeydown(_row,e){if(e.key==="Enter"){e.stopPropagation()}return false}getCustomEquivalent(sampleElement){return this.listItem_.overrideCustomEquivalent?this.listItem_.getCustomEquivalent(sampleElement):null}}class VirtualFocusRow extends FocusRow{constructor(root,delegate){super(root,null,delegate)}getCustomEquivalent(sampleElement){const equivalent=this.delegate?this.delegate.getCustomEquivalent(sampleElement):null;return equivalent||super.getCustomEquivalent(sampleElement)}}const FocusRowMixin=dedupingMixin((superClass=>{class FocusRowMixin extends superClass{constructor(){super(...arguments);this.firstControl_=null;this.controlObservers_=[];this.boundOnFirstControlKeydown_=null}static get properties(){return{row_:Object,mouseFocused_:Boolean,id:{type:String,reflectToAttribute:true},isFocused:{type:Boolean,notify:true},focusRowIndex:{type:Number,observer:"focusRowIndexChanged"},lastFocused:{type:Object,notify:true},ironListTabIndex:{type:Number,observer:"ironListTabIndexChanged_"},listBlurred:{type:Boolean,notify:true}}}connectedCallback(){super.connectedCallback();this.classList.add("no-outline");this.boundOnFirstControlKeydown_=this.onFirstControlKeydown_.bind(this);afterNextRender(this,(()=>{const rowContainer=this.root.querySelector("[focus-row-container]");assert(rowContainer);this.row_=new VirtualFocusRow(rowContainer,new FocusRowMixinDelegate(this));this.addItems_();this.addEventListener("focus",this.onFocus_);this.addEventListener("dom-change",this.addItems_);this.addEventListener("mousedown",this.onMouseDown_);this.addEventListener("blur",this.onBlur_)}))}disconnectedCallback(){super.disconnectedCallback();this.removeEventListener("focus",this.onFocus_);this.removeEventListener("dom-change",this.addItems_);this.removeEventListener("mousedown",this.onMouseDown_);this.removeEventListener("blur",this.onBlur_);this.removeObservers_();if(this.firstControl_&&this.boundOnFirstControlKeydown_){this.firstControl_.removeEventListener("keydown",this.boundOnFirstControlKeydown_);this.boundOnFirstControlKeydown_=null}if(this.row_){this.row_.destroy()}}computeId_(index){return index!==undefined?`frb${index}`:undefined}focusRowIndexChanged(newIndex,oldIndex){this.setAttribute("aria-rowindex",(newIndex+1).toString());if(this.id===this.computeId_(oldIndex)){this.id=this.computeId_(newIndex)||""}}getFocusRow(){assert(this.row_);return this.row_}updateFirstControl_(){const newFirstControl=this.row_.getFirstFocusable();if(newFirstControl===this.firstControl_){return}if(this.firstControl_){this.firstControl_.removeEventListener("keydown",this.boundOnFirstControlKeydown_)}this.firstControl_=newFirstControl;if(this.firstControl_){this.firstControl_.addEventListener("keydown",this.boundOnFirstControlKeydown_)}}removeObservers_(){if(this.controlObservers_.length>0){this.controlObservers_.forEach((observer=>{observer.disconnect()}))}this.controlObservers_=[]}addItems_(){this.ironListTabIndexChanged_();if(this.row_){this.removeObservers_();this.row_.destroy();const controls=this.root.querySelectorAll("[focus-row-control]");controls.forEach((control=>{assert(control);this.row_.addItem(control.getAttribute("focus-type"),FocusRow.getFocusableElement(control));this.addMutationObservers_(control)}));this.updateFirstControl_()}}createObserver_(){return new MutationObserver((mutations=>{const mutation=mutations[0];if(mutation.attributeName==="style"&&mutation.oldValue){const newStyle=window.getComputedStyle(mutation.target);const oldDisplayValue=mutation.oldValue.match(/^display:(.*)(?=;)/);const oldVisibilityValue=mutation.oldValue.match(/^visibility:(.*)(?=;)/);if(oldDisplayValue&&newStyle.display===oldDisplayValue[1].trim()&&oldVisibilityValue&&newStyle.visibility===oldVisibilityValue[1].trim()){return}}this.updateFirstControl_()}))}addMutationObservers_(control){let current=control;while(current&&current!==this.root){const currentObserver=this.createObserver_();currentObserver.observe(current,{attributes:true,attributeFilter:["hidden","disabled","style"],attributeOldValue:true});this.controlObservers_.push(currentObserver);current=current.parentNode}}onFocus_(e){if(this.mouseFocused_){this.mouseFocused_=false;return}const restoreFocusToFirst=this.listBlurred&&e.composedPath()[0]===this;if(this.lastFocused&&!restoreFocusToFirst){focusWithoutInk(this.row_.getEquivalentElement(this.lastFocused))}else{assert(this.firstControl_);const firstFocusable=this.firstControl_;focusWithoutInk(firstFocusable)}this.listBlurred=false;this.isFocused=true}onFirstControlKeydown_(e){const keyEvent=e;if(keyEvent.shiftKey&&keyEvent.key==="Tab"){this.focus()}}ironListTabIndexChanged_(){if(this.row_){this.row_.makeActive(this.ironListTabIndex===0)}if(this.ironListTabIndex===0){this.listBlurred=false}}onMouseDown_(){this.mouseFocused_=true}onBlur_(e){this.mouseFocused_=false;this.isFocused=false;const node=e.relatedTarget?e.relatedTarget:null;if(!this.parentNode.contains(node)){this.listBlurred=true}}}return FocusRowMixin}));function getTemplate$9(){return html`<!--_html_template_start_-->    <style include="shared-style cr-icons">:host{display:block;outline:0;pointer-events:none}#main-container{position:relative}:host([is-card-end]) #main-container{margin-bottom:var(--card-padding-between)}:host([is-card-start][is-card-end]) #main-container{border-radius:var(--cr-card-border-radius)}#date-accessed{display:none}:host([is-card-start]) #date-accessed{display:block;font-size:123%;font-weight:400;letter-spacing:.25px;padding-bottom:4px;padding-top:8px}#item-container{align-items:center;display:flex;min-height:var(--item-height);padding-inline-start:10px;pointer-events:auto}:host([is-card-start]) #item-container{padding-top:var(--card-first-last-item-padding)}:host([is-card-end]) #item-container{padding-bottom:var(--card-first-last-item-padding)}#item-info{align-items:center;display:flex;flex:1;min-width:0}#title-and-domain{align-items:center;display:flex;flex:1;height:var(--item-height);margin-inline-end:auto;overflow:hidden;padding-inline-start:5px}#checkbox{margin:12px}#checkbox[unresolved]{border:2px solid var(--cr-secondary-text-color);border-radius:2px;content:'';display:block;height:12px;width:12px}#time-accessed{color:var(--history-item-time-color);margin-inline-start:6px;min-width:96px}#domain{color:var(--cr-secondary-text-color);margin-inline-start:16px;overflow:hidden;text-overflow:ellipsis}#menu-button{--cr-icon-button-margin-end:12px;--cr-icon-button-margin-start:12px}#bookmark-star{--cr-icon-button-fill-color:var(--interactive-color);--cr-icon-button-icon-size:16px;--cr-icon-button-margin-start:12px;--cr-icon-button-size:32px}#debug-container{color:var(--history-item-time-color);display:flex;padding-inline-start:22px;pointer-events:auto}.debug-info:not(:first-child){margin-inline-start:15px}#time-gap-separator{border-inline-start:1px solid #888;height:15px;margin-inline-start:77px}@media (prefers-color-scheme:dark){#time-gap-separator{border-color:var(--google-grey-500)}}#background-clip{bottom:-.4px;clip:rect(auto 999px auto -5px);left:0;position:absolute;right:0;top:0;z-index:-1}:host([is-card-end]) #background-clip{bottom:0;clip:rect(auto 999px 500px -5px)}:host([is-card-start]) #background-clip{clip:auto}#background{background-color:var(--cr-card-background-color);bottom:0;box-shadow:var(--cr-card-shadow);left:0;position:absolute;right:0;top:0}:host(:not([is-card-start])) #background{top:-5px}:host([is-card-start]) #background{border-radius:var(--cr-card-border-radius) var(--cr-card-border-radius) 0 0}:host([is-card-end]) #background{border-radius:0 0 var(--cr-card-border-radius) var(--cr-card-border-radius)}:host([is-card-start][is-card-end]) #background{border-radius:var(--cr-card-border-radius)}#options{align-items:center;display:flex}cr-checkbox::part(label-container){clip:rect(0,0,0,0);display:block;position:fixed}</style>

    <div id="main-container">
      <div id="background-clip" aria-hidden="true">
        <div id="background"></div>
      </div>
      <div id="date-accessed" class="card-title" role="row">
        <div role="rowheader">
          <div role="heading" aria-level="2">
            [[cardTitle_(numberOfItems, searchTerm, item.dateRelativeDay)]]
          </div>
        </div>
      </div>
      <div role="row" on-mousedown="onRowMousedown_" on-click="onRowClick_">
        <div id="item-container" focus-row-container>
          <div role="gridcell">
            <cr-checkbox id="checkbox" checked="[[selected]]" unresolved focus-row-control focus-type="cr-checkbox" on-mousedown="onCheckboxClick_" on-keydown="onCheckboxClick_" on-change="onCheckboxChange_" class="no-label" hidden="[[selectionNotAllowed_]]" disabled="[[selectionNotAllowed_]]">
              [[getEntrySummary_(item)]]
            </cr-checkbox>
          </div>
          
          <span id="time-accessed" aria-hidden="true">
            [[item.readableTimestamp]]
          </span>
          <div role="gridcell" id="item-info">
            <div id="title-and-domain">
              <a href="[[item.url]]" id="link" class="website-link" focus-row-control focus-type="link" title="[[item.title]]" on-click="onLinkClick_" on-contextmenu="onLinkRightClick_" aria-describedby$="[[ariaDescribedByForHeading_]]">
                <div class="website-icon" id="icon"></div>
                <history-searched-label class="website-title" title="[[item.title]]" search-term="[[searchTerm]]"></history-searched-label>
              </a>
              <span id="domain">[[item.domain]]</span>
            </div>
            <template is="dom-if" if="[[item.starred]]">
              <cr-icon-button id="bookmark-star" iron-icon="cr:star" on-click="onRemoveBookmarkClick_" title="$i18n{removeBookmark}" aria-hidden="true">
              </cr-icon-button>
            </template>
          </div>
          <div role="gridcell" id="options">
            <cr-icon-button id="menu-button" iron-icon="cr:more-vert" focus-row-control focus-type="cr-menu-button" title="$i18n{actionMenuDescription}" on-click="onMenuButtonClick_" on-keydown="onMenuButtonKeydown_" aria-haspopup="menu" aria-describedby$="[[ariaDescribedByForActions_]]">
            </cr-icon-button>
          </div>
        </div>
        <template is="dom-if" if="[[item.debug]]">
          <div id="debug-container" aria-hidden="true">
            <div class="debug-info">DEBUG</div>
            <div class="debug-info" hidden="[[!item.debug.isUrlInLocalDatabase]]">
              in local data
            </div>
            <div class="debug-info" hidden="[[!item.isUrlInRemoteUserData]]">
              in remote data
            </div>
            <div class="debug-info" hidden="[[!item.debug.isUrlInLocalDatabase]]">
              typed count: [[item.debug.typedCount]]
            </div>
            <div class="debug-info" hidden="[[!item.debug.isUrlInLocalDatabase]]">
              visit count: [[item.debug.visitCount]]
            </div>
          </div>
        </template>
        <div id="time-gap-separator" hidden="[[!hasTimeGap]]"></div>
      </div>
    </div>
<!--_html_template_end_-->`}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const HistoryItemElementBase=FocusRowMixin(PolymerElement);class HistoryItemElement extends HistoryItemElementBase{constructor(){super(...arguments);this.isShiftKeyDown_=false;this.selectionNotAllowed_=!loadTimeData.getBoolean("allowDeletingHistory");this.eventTracker_=new EventTracker}static get is(){return"history-item"}static get template(){return getTemplate$9()}static get properties(){return{item:{type:Object,observer:"itemChanged_"},selected:{type:Boolean,reflectToAttribute:true},isCardStart:{type:Boolean,reflectToAttribute:true},isCardEnd:{type:Boolean,reflectToAttribute:true},lastFocused:{type:Object,notify:true},listBlurred:{type:Boolean,notify:true},ironListTabIndex:{type:Number,observer:"ironListTabIndexChanged_"},selectionNotAllowed_:Boolean,hasTimeGap:Boolean,index:Number,numberOfItems:Number,searchTerm:String,overrideCustomEquivalent:{type:Boolean,value:true},ariaDescribedByForHeading_:{type:String,computed:"getAriaDescribedByForHeading_(isCardStart, isCardEnd)"},ariaDescribedByForActions_:{type:String,computed:"getAriaDescribedByForActions_(isCardStart, isCardEnd)"}}}connectedCallback(){super.connectedCallback();afterNextRender(this,(()=>{this.eventTracker_.add(this.$.checkbox,"keydown",(e=>this.onCheckboxKeydown_(e)))}))}disconnectedCallback(){super.disconnectedCallback();this.eventTracker_.remove(this.$.checkbox,"keydown")}fire_(eventName,detail){this.dispatchEvent(new CustomEvent(eventName,{bubbles:true,composed:true,detail:detail}))}focusOnMenuButton(){focusWithoutInk(this.$["menu-button"])}onCheckboxKeydown_(e){if(e.shiftKey&&e.key==="Tab"){this.focus()}}onRowClick_(e){const path=e.composedPath();let inItemContainer=false;for(let i=0;i<path.length;i++){const elem=path[i];if(elem.id!=="checkbox"&&(elem.nodeName==="A"||elem.nodeName==="CR-ICON-BUTTON")){return}if(!inItemContainer&&elem.id==="item-container"){inItemContainer=true}}if(this.selectionNotAllowed_||!inItemContainer){return}this.$.checkbox.focus();this.fire_("history-checkbox-select",{index:this.index,shiftKey:e.shiftKey})}onCheckboxClick_(e){this.isShiftKeyDown_=e.shiftKey}onCheckboxChange_(){this.fire_("history-checkbox-select",{index:this.index,shiftKey:this.isShiftKeyDown_});this.isShiftKeyDown_=false}onRowMousedown_(e){if(e.shiftKey){e.preventDefault()}}getEntrySummary_(){const item=this.item;return loadTimeData.getStringF("entrySummary",this.isCardStart||this.isCardEnd?this.cardTitle_(this.numberOfItems,this.searchTerm):"",item.dateTimeOfDay,item.starred?loadTimeData.getString("bookmarked"):"",item.title,item.domain)}getAriaDescribedByForHeading_(){return this.isCardStart||this.isCardEnd?"date-accessed":""}getAriaDescribedByForActions_(){return this.isCardStart||this.isCardEnd?"title-and-domain date-accessed":"title-and-domain"}getAriaChecked_(selected){return selected?"true":"false"}onRemoveBookmarkClick_(){if(!this.item.starred){return}if(this.shadowRoot.querySelector("#bookmark-star")===this.shadowRoot.activeElement){focusWithoutInk(this.$["menu-button"])}const browserService=BrowserServiceImpl.getInstance();browserService.removeBookmark(this.item.url);browserService.recordAction("BookmarkStarClicked");this.fire_("remove-bookmark-stars",this.item.url)}onMenuButtonClick_(e){this.fire_("open-menu",{target:e.target,index:this.index,item:this.item});e.stopPropagation()}onMenuButtonKeydown_(e){if(this.item.starred&&e.shiftKey&&e.key==="Tab"){e.stopImmediatePropagation()}}onLinkClick_(){const browserService=BrowserServiceImpl.getInstance();browserService.recordAction("EntryLinkClick");if(this.searchTerm){browserService.recordAction("SearchResultClick")}}onLinkRightClick_(){BrowserServiceImpl.getInstance().recordAction("EntryLinkRightClick")}itemChanged_(){this.$.icon.style.backgroundImage=getFaviconForPageURL(this.item.url,this.item.isUrlInRemoteUserData,this.item.remoteIconUrlForUma);this.eventTracker_.add(this.$["time-accessed"],"mouseover",(()=>this.addTimeTitle_()))}cardTitle_(numberOfItems,search){if(this.item===undefined){return""}if(!search){return this.item.dateRelativeDay}return searchResultsTitle(numberOfItems,search)}addTimeTitle_(){const el=this.$["time-accessed"];el.setAttribute("title",new Date(this.item.time).toString());this.eventTracker_.remove(el,"mouseover")}getCustomEquivalent(sampleElement){return sampleElement.getAttribute("focus-type")==="star"?this.$.link:null}}customElements.define(HistoryItemElement.is,HistoryItemElement);function searchResultsTitle(numberOfResults,searchTerm){const resultId=numberOfResults===1?"searchResult":"searchResults";return loadTimeData.getStringF("foundSearchResults",numberOfResults,loadTimeData.getString(resultId),searchTerm)}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function emptyHTML(){return window.trustedTypes?window.trustedTypes.emptyHTML:""}class CustomElement extends HTMLElement{static get template(){return emptyHTML()}constructor(){super();this.attachShadow({mode:"open"});const template=document.createElement("template");template.innerHTML=this.constructor.template||emptyHTML();this.shadowRoot.appendChild(template.content.cloneNode(true))}$(query){return this.shadowRoot.querySelector(query)}$all(query){return this.shadowRoot.querySelectorAll(query)}getRequiredElement(query){const el=this.shadowRoot.querySelector(query);assert(el);assert(el instanceof HTMLElement);return el}}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function isValidArray(arr){if(arr instanceof Array&&Object.isFrozen(arr)){return true}return false}function getStaticString(literal){const isStaticString=isValidArray(literal)&&!!literal.raw&&isValidArray(literal.raw)&&literal.length===literal.raw.length&&literal.length===1;assert(isStaticString,"static_types.js only allows static strings");return literal.join("")}function createTypes(_ignore,literal){return getStaticString(literal)}const rules={createHTML:createTypes,createScript:createTypes,createScriptURL:createTypes};let staticPolicy;if(window.trustedTypes){staticPolicy=window.trustedTypes.createPolicy("static-types",rules)}else{staticPolicy=rules}function getTrustedHTML(literal){return staticPolicy.createHTML("",literal)}function getTrustedScriptURL(literal){return staticPolicy.createScriptURL("",literal)}function getTemplate$8(){return getTrustedHTML`<!--_html_template_start_--><style>:host{clip:rect(0 0 0 0);height:1px;overflow:hidden;position:fixed;width:1px}</style>

<div id="messages" role="alert" aria-live="polite" aria-relevant="additions">
</div>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const TIMEOUT_MS=150;const instances=new Map;function getInstance(container=document.body){if(instances.has(container)){return instances.get(container)}assert(container.isConnected);const instance=new CrA11yAnnouncerElement;container.appendChild(instance);instances.set(container,instance);return instance}class CrA11yAnnouncerElement extends CustomElement{constructor(){super(...arguments);this.currentTimeout_=null;this.messages_=[]}static get is(){return"cr-a11y-announcer"}static get template(){return getTemplate$8()}disconnectedCallback(){if(this.currentTimeout_!==null){clearTimeout(this.currentTimeout_);this.currentTimeout_=null}for(const[parent,instance]of instances){if(instance===this){instances.delete(parent);break}}}announce(message){if(this.currentTimeout_!==null){clearTimeout(this.currentTimeout_);this.currentTimeout_=null}this.messages_.push(message);this.currentTimeout_=setTimeout((()=>{const messagesDiv=this.shadowRoot.querySelector("#messages");messagesDiv.innerHTML=window.trustedTypes.emptyHTML;for(const message of this.messages_){const div=document.createElement("div");div.textContent=message;messagesDiv.appendChild(div)}this.dispatchEvent(new CustomEvent("cr-a11y-announcer-messages-sent",{bubbles:true,detail:{messages:this.messages_.slice()}}));this.messages_.length=0;this.currentTimeout_=null}),TIMEOUT_MS)}}customElements.define(CrA11yAnnouncerElement.is,CrA11yAnnouncerElement);
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const WebUiListenerMixin=dedupingMixin((superClass=>{class WebUiListenerMixin extends superClass{constructor(){super(...arguments);this.webUiListeners_=[]}addWebUiListener(eventName,callback){this.webUiListeners_.push(addWebUiListener(eventName,callback))}disconnectedCallback(){super.disconnectedCallback();while(this.webUiListeners_.length>0){removeWebUiListener(this.webUiListeners_.pop())}}}return WebUiListenerMixin}));function getTemplate$7(){return html`<!--_html_template_start_-->    <style include="shared-style cr-shared-style">:host{box-sizing:border-box;display:block;overflow:auto}.history-cards{margin-block-start:var(--first-card-padding-top)}dialog [slot=body]{white-space:pre-wrap}</style>
    <div id="no-results" class="centered-message" hidden$="[[hasResults_(historyData_.length)]]">
      [[noResultsMessage_(searchedTerm)]]
    </div>

    <iron-list class="history-cards" items="[[historyData_]]" as="item" id="infinite-list" role="grid" aria-rowcount$="[[historyData_.length]]" hidden$="[[!hasResults_(historyData_.length)]]" preserve-focus>
      <template>
        <history-item tabindex$="[[tabIndex]]" item="[[item]]" selected="[[item.selected]]" is-card-start="[[isCardStart_(item, index, historyData_.length)]]" is-card-end="[[isCardEnd_(item, index, historyData_.length)]]" has-time-gap="[[needsTimeGap_(item, index, historyData_.length)]]" search-term="[[searchedTerm]]" number-of-items="[[historyData_.length]]" index="[[index]]" focus-row-index="[[index]]" iron-list-tab-index="[[tabIndex]]" last-focused="{{lastFocused_}}" list-blurred="{{listBlurred_}}">
        </history-item>
      </template>
    </iron-list>

    <iron-scroll-threshold id="scroll-threshold" scroll-target="infinite-list" lower-threshold="500" on-lower-threshold="onScrollToBottom_">
    </iron-scroll-threshold>

    <cr-lazy-render id="dialog">
      <template>
        <cr-dialog consume-keydown-event>
          <div slot="title" id="title">$i18n{removeSelected}</div>
          <div slot="body" id="body">$i18n{deleteWarning}</div>
          <div slot="button-container">
            <cr-button class="cancel-button" on-click="onDialogCancelClick_">
              $i18n{cancel}
            </cr-button>
            <cr-button class="action-button" on-click="onDialogConfirmClick_">
              $i18n{deleteConfirm}
            </cr-button>
          </div>
        </cr-dialog>
      </template>
    </cr-lazy-render>

    <cr-lazy-render id="sharedMenu">
      <template>
        <cr-action-menu role-description="$i18n{actionMenuDescription}">
          <button id="menuMoreButton" class="dropdown-item" hidden="[[!canSearchMoreFromSite_(
                  searchedTerm, actionMenuModel_.item.domain)]]" on-click="onMoreFromSiteClick_">
            $i18n{moreFromSite}
          </button>
          <button id="menuRemoveButton" class="dropdown-item" hidden="[[!canDeleteHistory_]]" disabled="[[pendingDelete]]" on-click="onRemoveFromHistoryClick_">
            $i18n{removeFromHistory}
          </button>
          <button id="menuRemoveBookmarkButton" class="dropdown-item" hidden="[[!actionMenuModel_.item.starred]]" on-click="onRemoveBookmarkClick_">
            $i18n{removeBookmark}
          </button>
        </cr-action-menu>
      </template>
    </cr-lazy-render>
<!--_html_template_end_-->`}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const HistoryListElementBase=WebUiListenerMixin(I18nMixin(PolymerElement));class HistoryListElement extends HistoryListElementBase{constructor(){super(...arguments);this.canDeleteHistory_=loadTimeData.getBoolean("allowDeletingHistory");this.actionMenuModel_=null;this.resultLoadingDisabled_=false;this.searchedTerm="";this.selectedItems=new Set;this.pendingDelete=false}static get is(){return"history-list"}static get template(){return getTemplate$7()}static get properties(){return{searchedTerm:String,resultLoadingDisabled_:Boolean,selectedItems:Object,canDeleteHistory_:Boolean,historyData_:{type:Array,observer:"onHistoryDataChanged_"},lastFocused_:Object,listBlurred_:Boolean,lastSelectedIndex:Number,pendingDelete:{notify:true,type:Boolean},queryState:Object,actionMenuModel_:Object}}connectedCallback(){super.connectedCallback();this.$["infinite-list"].notifyResize();this.$["infinite-list"].scrollTarget=this;this.$["scroll-threshold"].scrollTarget=this;this.setAttribute("aria-roledescription",this.i18n("ariaRoleDescription"));this.addWebUiListener("history-deleted",(()=>this.onHistoryDeleted_()))}ready(){super.ready();this.setAttribute("role","application");this.addEventListener("history-checkbox-select",this.onItemSelected_);this.addEventListener("open-menu",this.onOpenMenu_);this.addEventListener("remove-bookmark-stars",(e=>this.onRemoveBookmarkStars_(e)))}fire_(eventName,detail){this.dispatchEvent(new CustomEvent(eventName,{bubbles:true,composed:true,detail:detail}))}historyResult(info,results){this.initializeResults_(info,results);this.closeMenu_();if(info.term&&!this.queryState.incremental){getInstance().announce(searchResultsTitle(results.length,info.term))}this.addNewResults(results,this.queryState.incremental,info.finished)}addNewResults(historyResults,incremental,finished){const results=historyResults.slice();this.$["scroll-threshold"].clearTriggers();if(!incremental){this.resultLoadingDisabled_=false;if(this.historyData_){this.splice("historyData_",0,this.historyData_.length)}this.fire_("unselect-all");this.scrollTop=0}if(this.historyData_){this.push("historyData_",...results)}else{this.set("historyData_",results)}this.resultLoadingDisabled_=finished}onHistoryDeleted_(){if(this.getSelectedItemCount()>0){return}this.fire_("query-history",false)}selectOrUnselectAll(){if(this.historyData_.length===this.getSelectedItemCount()){this.unselectAllItems()}else{this.selectAllItems()}}selectAllItems(){if(this.historyData_.length===this.getSelectedItemCount()){return}this.historyData_.forEach(((_item,index)=>{this.changeSelection_(index,true)}))}unselectAllItems(){this.selectedItems.forEach((index=>{this.changeSelection_(index,false)}));assert(this.selectedItems.size===0)}getSelectedItemCount(){return this.selectedItems.size}deleteSelectedWithPrompt(){if(!this.canDeleteHistory_){return}const browserService=BrowserServiceImpl.getInstance();browserService.recordAction("RemoveSelected");if(this.queryState.searchTerm!==""){browserService.recordAction("SearchResultRemove")}this.$.dialog.get().showModal();const button=this.shadowRoot.querySelector(".action-button");assert(button);button.focus()}changeSelection_(index,selected){this.set(`historyData_.${index}.selected`,selected);if(selected){this.selectedItems.add(index)}else{this.selectedItems.delete(index)}}deleteSelected_(){assert(!this.pendingDelete);const toBeRemoved=Array.from(this.selectedItems.values()).map((index=>this.get(`historyData_.${index}`)));this.deleteItems_(toBeRemoved).then((()=>{this.pendingDelete=false;this.removeItemsByIndex_(Array.from(this.selectedItems));this.fire_("unselect-all");if(this.historyData_.length===0){this.fire_("query-history",false)}}))}removeItemsForTest(indices){this.removeItemsByIndex_(indices)}removeItemsByIndex_(indices){const splices=[];indices.sort((function(a,b){return b-a}));indices.forEach((index=>{const item=this.historyData_.splice(index,1);splices.push({index:index,removed:[item],addedCount:0,object:this.historyData_,type:"splice"})}));this.notifySplices("historyData_",splices)}removeItemsByIndexForTesting(indices){this.removeItemsByIndex_(indices)}closeMenu_(){const menu=this.$.sharedMenu.getIfExists();if(menu&&menu.open){this.actionMenuModel_=null;menu.close()}}onDialogConfirmClick_(){BrowserServiceImpl.getInstance().recordAction("ConfirmRemoveSelected");this.deleteSelected_();const dialog=this.$.dialog.getIfExists();assert(dialog);dialog.close()}onDialogCancelClick_(){BrowserServiceImpl.getInstance().recordAction("CancelRemoveSelected");const dialog=this.$.dialog.getIfExists();assert(dialog);dialog.close()}onRemoveBookmarkStars_(e){const url=e.detail;if(this.historyData_===undefined){return}for(let i=0;i<this.historyData_.length;i++){if(this.historyData_[i].url===url){this.set(`historyData_.${i}.starred`,false)}}}onScrollToBottom_(){if(this.resultLoadingDisabled_||this.queryState.querying){return}this.fire_("query-history",true)}onOpenMenu_(e){const index=e.detail.index;const list=this.$["infinite-list"];if(index<list.firstVisibleIndex||index>list.lastVisibleIndex){list.scrollToIndex(index)}const target=e.detail.target;this.actionMenuModel_=e.detail;this.$.sharedMenu.get().showAt(target)}onMoreFromSiteClick_(){BrowserServiceImpl.getInstance().recordAction("EntryMenuShowMoreFromSite");assert(this.$.sharedMenu.getIfExists());this.fire_("change-query",{search:"host:"+this.actionMenuModel_.item.domain});this.actionMenuModel_=null;this.closeMenu_()}deleteItems_(items){const removalList=items.map((item=>({url:item.url,timestamps:item.allTimestamps})));this.pendingDelete=true;return BrowserServiceImpl.getInstance().removeVisits(removalList)}onRemoveBookmarkClick_(){const browserService=BrowserServiceImpl.getInstance();browserService.removeBookmark(this.actionMenuModel_.item.url);this.fire_("remove-bookmark-stars",this.actionMenuModel_.item.url);this.closeMenu_()}onRemoveFromHistoryClick_(){const browserService=BrowserServiceImpl.getInstance();browserService.recordAction("EntryMenuRemoveFromHistory");assert(!this.pendingDelete);assert(this.$.sharedMenu.getIfExists());const itemData=this.actionMenuModel_;this.deleteItems_([itemData.item]).then((()=>{getInstance().announce(this.i18n("deleteSuccess",itemData.item.title));this.pendingDelete=false;this.fire_("unselect-all");this.removeItemsByIndex_([itemData.index]);const index=itemData.index;if(index===undefined){return}if(this.historyData_.length>0){setTimeout((()=>{this.$["infinite-list"].focusItem(Math.min(this.historyData_.length-1,index));const item=getDeepActiveElement();if(item&&item.focusOnMenuButton){item.focusOnMenuButton()}}),1)}}));this.closeMenu_()}onItemSelected_(e){const index=e.detail.index;const indices=[];if(e.detail.shiftKey&&this.lastSelectedIndex!==undefined){for(let i=Math.min(index,this.lastSelectedIndex);i<=Math.max(index,this.lastSelectedIndex);i++){indices.push(i)}}if(indices.length===0){indices.push(index)}const selected=!this.selectedItems.has(index);indices.forEach((index=>{this.changeSelection_(index,selected)}));this.lastSelectedIndex=index}needsTimeGap_(_item,index){const length=this.historyData_.length;if(index===undefined||index>=length-1||length===0){return false}const currentItem=this.historyData_[index];const nextItem=this.historyData_[index+1];if(this.searchedTerm){return currentItem.dateShort!==nextItem.dateShort}return currentItem.time-nextItem.time>BROWSING_GAP_TIME&&currentItem.dateRelativeDay===nextItem.dateRelativeDay}isCardStart_(_item,i){const length=this.historyData_.length;if(i===undefined||length===0||i>length-1){return false}return i===0||this.historyData_[i].dateRelativeDay!==this.historyData_[i-1].dateRelativeDay}isCardEnd_(_item,i){const length=this.historyData_.length;if(i===undefined||length===0||i>length-1){return false}return i===length-1||this.historyData_[i].dateRelativeDay!==this.historyData_[i+1].dateRelativeDay}hasResults_(){return this.historyData_.length>0}noResultsMessage_(searchedTerm){const messageId=searchedTerm!==""?"noSearchResults":"noResults";return loadTimeData.getString(messageId)}canSearchMoreFromSite_(searchedTerm,domain){return searchedTerm===""||searchedTerm!==domain}initializeResults_(info,results){if(results.length===0){return}let currentDate=results[0].dateRelativeDay;for(let i=0;i<results.length;i++){results[i].selected=false;results[i].readableTimestamp=info.term===""?results[i].dateTimeOfDay:results[i].dateShort;if(results[i].dateRelativeDay!==currentDate){currentDate=results[i].dateRelativeDay}}}onHistoryDataChanged_(){this.$["infinite-list"].fire("iron-resize")}}customElements.define(HistoryListElement.is,HistoryListElement);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const template$2=html`<dom-module id="paper-spinner-styles">
  <template>
    <style>
      /*
      /**************************/
      /* STYLES FOR THE SPINNER */
      /**************************/

      /*
       * Constants:
       *      ARCSIZE     = 270 degrees (amount of circle the arc takes up)
       *      ARCTIME     = 1333ms (time it takes to expand and contract arc)
       *      ARCSTARTROT = 216 degrees (how much the start location of the arc
       *                                should rotate each time, 216 gives us a
       *                                5 pointed star shape (it's 360/5 * 3).
       *                                For a 7 pointed star, we might do
       *                                360/7 * 3 = 154.286)
       *      SHRINK_TIME = 400ms
       */

      :host {
        display: inline-block;
        position: relative;
        width: 28px;
        height: 28px;

        /* 360 * ARCTIME / (ARCSTARTROT + (360-ARCSIZE)) */
        --paper-spinner-container-rotation-duration: 1568ms;

        /* ARCTIME */
        --paper-spinner-expand-contract-duration: 1333ms;

        /* 4 * ARCTIME */
        --paper-spinner-full-cycle-duration: 5332ms;

        /* SHRINK_TIME */
        --paper-spinner-cooldown-duration: 400ms;
      }

      #spinnerContainer {
        width: 100%;
        height: 100%;

        /* The spinner does not have any contents that would have to be
         * flipped if the direction changes. Always use ltr so that the
         * style works out correctly in both cases. */
        direction: ltr;
      }

      #spinnerContainer.active {
        animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite;
      }

      @-webkit-keyframes container-rotate {
        to { -webkit-transform: rotate(360deg) }
      }

      @keyframes container-rotate {
        to { transform: rotate(360deg) }
      }

      .spinner-layer {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        white-space: nowrap;
        color: var(--paper-spinner-color, var(--google-blue-500));
      }

      .layer-1 {
        color: var(--paper-spinner-layer-1-color, var(--google-blue-500));
      }

      .layer-2 {
        color: var(--paper-spinner-layer-2-color, var(--google-red-500));
      }

      .layer-3 {
        color: var(--paper-spinner-layer-3-color, var(--google-yellow-500));
      }

      .layer-4 {
        color: var(--paper-spinner-layer-4-color, var(--google-green-500));
      }

      /**
       * IMPORTANT NOTE ABOUT CSS ANIMATION PROPERTIES (keanulee):
       *
       * iOS Safari (tested on iOS 8.1) does not handle animation-delay very well - it doesn't
       * guarantee that the animation will start _exactly_ after that value. So we avoid using
       * animation-delay and instead set custom keyframes for each color (as layer-2undant as it
       * seems).
       */
      .active .spinner-layer {
        animation-name: fill-unfill-rotate;
        animation-duration: var(--paper-spinner-full-cycle-duration);
        animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
        animation-iteration-count: infinite;
        opacity: 1;
      }

      .active .spinner-layer.layer-1 {
        animation-name: fill-unfill-rotate, layer-1-fade-in-out;
      }

      .active .spinner-layer.layer-2 {
        animation-name: fill-unfill-rotate, layer-2-fade-in-out;
      }

      .active .spinner-layer.layer-3 {
        animation-name: fill-unfill-rotate, layer-3-fade-in-out;
      }

      .active .spinner-layer.layer-4 {
        animation-name: fill-unfill-rotate, layer-4-fade-in-out;
      }

      @-webkit-keyframes fill-unfill-rotate {
        12.5% { -webkit-transform: rotate(135deg) } /* 0.5 * ARCSIZE */
        25%   { -webkit-transform: rotate(270deg) } /* 1   * ARCSIZE */
        37.5% { -webkit-transform: rotate(405deg) } /* 1.5 * ARCSIZE */
        50%   { -webkit-transform: rotate(540deg) } /* 2   * ARCSIZE */
        62.5% { -webkit-transform: rotate(675deg) } /* 2.5 * ARCSIZE */
        75%   { -webkit-transform: rotate(810deg) } /* 3   * ARCSIZE */
        87.5% { -webkit-transform: rotate(945deg) } /* 3.5 * ARCSIZE */
        to    { -webkit-transform: rotate(1080deg) } /* 4   * ARCSIZE */
      }

      @keyframes fill-unfill-rotate {
        12.5% { transform: rotate(135deg) } /* 0.5 * ARCSIZE */
        25%   { transform: rotate(270deg) } /* 1   * ARCSIZE */
        37.5% { transform: rotate(405deg) } /* 1.5 * ARCSIZE */
        50%   { transform: rotate(540deg) } /* 2   * ARCSIZE */
        62.5% { transform: rotate(675deg) } /* 2.5 * ARCSIZE */
        75%   { transform: rotate(810deg) } /* 3   * ARCSIZE */
        87.5% { transform: rotate(945deg) } /* 3.5 * ARCSIZE */
        to    { transform: rotate(1080deg) } /* 4   * ARCSIZE */
      }

      @-webkit-keyframes layer-1-fade-in-out {
        0% { opacity: 1 }
        25% { opacity: 1 }
        26% { opacity: 0 }
        89% { opacity: 0 }
        90% { opacity: 1 }
        to { opacity: 1 }
      }

      @keyframes layer-1-fade-in-out {
        0% { opacity: 1 }
        25% { opacity: 1 }
        26% { opacity: 0 }
        89% { opacity: 0 }
        90% { opacity: 1 }
        to { opacity: 1 }
      }

      @-webkit-keyframes layer-2-fade-in-out {
        0% { opacity: 0 }
        15% { opacity: 0 }
        25% { opacity: 1 }
        50% { opacity: 1 }
        51% { opacity: 0 }
        to { opacity: 0 }
      }

      @keyframes layer-2-fade-in-out {
        0% { opacity: 0 }
        15% { opacity: 0 }
        25% { opacity: 1 }
        50% { opacity: 1 }
        51% { opacity: 0 }
        to { opacity: 0 }
      }

      @-webkit-keyframes layer-3-fade-in-out {
        0% { opacity: 0 }
        40% { opacity: 0 }
        50% { opacity: 1 }
        75% { opacity: 1 }
        76% { opacity: 0 }
        to { opacity: 0 }
      }

      @keyframes layer-3-fade-in-out {
        0% { opacity: 0 }
        40% { opacity: 0 }
        50% { opacity: 1 }
        75% { opacity: 1 }
        76% { opacity: 0 }
        to { opacity: 0 }
      }

      @-webkit-keyframes layer-4-fade-in-out {
        0% { opacity: 0 }
        65% { opacity: 0 }
        75% { opacity: 1 }
        90% { opacity: 1 }
        to { opacity: 0 }
      }

      @keyframes layer-4-fade-in-out {
        0% { opacity: 0 }
        65% { opacity: 0 }
        75% { opacity: 1 }
        90% { opacity: 1 }
        to { opacity: 0 }
      }

      .circle-clipper {
        display: inline-block;
        position: relative;
        width: 50%;
        height: 100%;
        overflow: hidden;
      }

      /**
       * Patch the gap that appear between the two adjacent div.circle-clipper while the
       * spinner is rotating (appears on Chrome 50, Safari 9.1.1, and Edge).
       */
      .spinner-layer::after {
        content: '';
        left: 45%;
        width: 10%;
        border-top-style: solid;
      }

      .spinner-layer::after,
      .circle-clipper .circle {
        box-sizing: border-box;
        position: absolute;
        top: 0;
        border-width: var(--paper-spinner-stroke-width, 3px);
        border-radius: 50%;
      }

      .circle-clipper .circle {
        bottom: 0;
        width: 200%;
        border-style: solid;
        border-bottom-color: transparent !important;
      }

      .circle-clipper.left .circle {
        left: 0;
        border-right-color: transparent !important;
        transform: rotate(129deg);
      }

      .circle-clipper.right .circle {
        left: -100%;
        border-left-color: transparent !important;
        transform: rotate(-129deg);
      }

      .active .gap-patch::after,
      .active .circle-clipper .circle {
        animation-duration: var(--paper-spinner-expand-contract-duration);
        animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
        animation-iteration-count: infinite;
      }

      .active .circle-clipper.left .circle {
        animation-name: left-spin;
      }

      .active .circle-clipper.right .circle {
        animation-name: right-spin;
      }

      @-webkit-keyframes left-spin {
        0% { -webkit-transform: rotate(130deg) }
        50% { -webkit-transform: rotate(-5deg) }
        to { -webkit-transform: rotate(130deg) }
      }

      @keyframes left-spin {
        0% { transform: rotate(130deg) }
        50% { transform: rotate(-5deg) }
        to { transform: rotate(130deg) }
      }

      @-webkit-keyframes right-spin {
        0% { -webkit-transform: rotate(-130deg) }
        50% { -webkit-transform: rotate(5deg) }
        to { -webkit-transform: rotate(-130deg) }
      }

      @keyframes right-spin {
        0% { transform: rotate(-130deg) }
        50% { transform: rotate(5deg) }
        to { transform: rotate(-130deg) }
      }

      #spinnerContainer.cooldown {
        animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite, fade-out var(--paper-spinner-cooldown-duration) cubic-bezier(0.4, 0.0, 0.2, 1);
      }

      @-webkit-keyframes fade-out {
        0% { opacity: 1 }
        to { opacity: 0 }
      }

      @keyframes fade-out {
        0% { opacity: 1 }
        to { opacity: 0 }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(template$2.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const PaperSpinnerBehavior={properties:{active:{type:Boolean,value:false,reflectToAttribute:true,observer:"__activeChanged"},alt:{type:String,value:"loading",observer:"__altChanged"},__coolingDown:{type:Boolean,value:false}},__computeContainerClasses:function(active,coolingDown){return[active||coolingDown?"active":"",coolingDown?"cooldown":""].join(" ")},__activeChanged:function(active,old){this.__setAriaHidden(!active);this.__coolingDown=!active&&old},__altChanged:function(alt){if(alt==="loading"){this.alt=this.getAttribute("aria-label")||alt}else{this.__setAriaHidden(alt==="");this.setAttribute("aria-label",alt)}},__setAriaHidden:function(hidden){var attr="aria-hidden";if(hidden){this.setAttribute(attr,"true")}else{this.removeAttribute(attr)}},__reset:function(){this.active=false;this.__coolingDown=false}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const template$1=html`
  <style include="paper-spinner-styles"></style>

  <div id="spinnerContainer" class-name="[[__computeContainerClasses(active, __coolingDown)]]" on-animationend="__reset" on-webkit-animation-end="__reset">
    <div class="spinner-layer">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>
`;template$1.setAttribute("strip-whitespace","");Polymer({_template:template$1,is:"paper-spinner-lite",behaviors:[PaperSpinnerBehavior]});
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrSearchFieldMixin=dedupingMixin((superClass=>{class CrSearchFieldMixin extends superClass{constructor(){super(...arguments);this.effectiveValue_="";this.searchDelayTimer_=-1}static get properties(){return{label:{type:String,value:""},clearLabel:{type:String,value:""},hasSearchText:{type:Boolean,reflectToAttribute:true,value:false}}}getSearchInput(){assertNotReached()}getValue(){return this.getSearchInput().value}fire_(eventName,detail){this.dispatchEvent(new CustomEvent(eventName,{bubbles:true,composed:true,detail:detail}))}setValue(value,noEvent){const updated=this.updateEffectiveValue_(value);this.getSearchInput().value=this.effectiveValue_;if(!updated){if(value===""&&this.hasSearchText){this.hasSearchText=false}return}this.onSearchTermInput();if(!noEvent){this.fire_("search-changed",this.effectiveValue_)}}scheduleSearch_(){if(this.searchDelayTimer_>=0){clearTimeout(this.searchDelayTimer_)}const length=this.getValue().length;const timeoutMs=length>0?500-100*(Math.min(length,4)-1):0;this.searchDelayTimer_=setTimeout((()=>{this.getSearchInput().dispatchEvent(new CustomEvent("search",{composed:true,detail:this.getValue()}));this.searchDelayTimer_=-1}),timeoutMs)}onSearchTermSearch(){this.onValueChanged_(this.getValue(),false)}onSearchTermInput(){this.hasSearchText=this.getSearchInput().value!=="";this.scheduleSearch_()}onValueChanged_(newValue,noEvent){const updated=this.updateEffectiveValue_(newValue);if(updated&&!noEvent){this.fire_("search-changed",this.effectiveValue_)}}updateEffectiveValue_(value){const effectiveValue=value.replace(/\s+/g," ").replace(/^\s/,"");if(effectiveValue===this.effectiveValue_){return false}this.effectiveValue_=effectiveValue;return true}}return CrSearchFieldMixin}));function getTemplate$6(){return html`<!--_html_template_start_-->    <style include="cr-shared-style cr-icons">:host{display:block;height:40px;transition:background-color 150ms cubic-bezier(.4,0,.2,1),width 150ms cubic-bezier(.4,0,.2,1);width:44px}:host-context([chrome-refresh-2023]):host{--cr-toolbar-search-field-hover-background:var(--color-toolbar-search-field-background-hover,
                var(--cr-hover-background-color));isolation:isolate}:host([disabled]){opacity:var(--cr-disabled-opacity)}[hidden]{display:none!important}cr-icon-button{--cr-icon-button-size:var(--cr-toolbar-icon-container-size, 32px);margin:var(--cr-toolbar-icon-margin,6px)}:host-context([chrome-refresh-2023]) cr-icon-button{--cr-icon-button-fill-color:var(--cr-toolbar-search-field-icon-color,
            var(--color-toolbar-search-field-icon,
            var(--cr-secondary-text-color)));--cr-icon-button-size:var(--cr-toolbar-icon-container-size, 28px);--cr-icon-button-icon-size:20px;margin:var(--cr-toolbar-icon-margin,0)}@media (prefers-color-scheme:light){cr-icon-button{--cr-icon-button-fill-color:var(
              --cr-toolbar-search-field-input-icon-color,
              var(--google-grey-700));--cr-icon-button-focus-outline-color:var(
              --cr-toolbar-icon-button-focus-outline-color,
              var(--cr-focus-outline-color))}}@media (prefers-color-scheme:dark){cr-icon-button{--cr-icon-button-fill-color:var(
              --cr-toolbar-search-field-input-icon-color,
              var(--google-grey-500))}}#icon{transition:margin 150ms,opacity .2s}#prompt{color:var(--cr-toolbar-search-field-prompt-color,var(--google-grey-700));opacity:0}@media (prefers-color-scheme:dark){#prompt{color:var(--cr-toolbar-search-field-prompt-color,#fff)}}@media (prefers-color-scheme:dark){#prompt{--cr-toolbar-search-field-prompt-opacity:1;color:var(--cr-secondary-text-color,#fff)}}:host-context([chrome-refresh-2023]) #prompt{color:var(--cr-toolbar-search-field-prompt-color,var(--color-toolbar-search-field-foreground-placeholder,var(--cr-secondary-text-color)))}paper-spinner-lite{--paper-spinner-color:var(--cr-toolbar-search-field-input-icon-color,
                var(--google-grey-700));height:var(--cr-icon-size);margin:var(--cr-toolbar-search-field-paper-spinner-margin,0 6px);opacity:0;padding:6px;position:absolute;width:var(--cr-icon-size)}@media (prefers-color-scheme:dark){paper-spinner-lite{--paper-spinner-color:var(
              --cr-toolbar-search-field-input-icon-color, white)}}:host-context([chrome-refresh-2023]) paper-spinner-lite{margin:0;padding:2px}paper-spinner-lite[active]{opacity:1}#prompt,paper-spinner-lite{transition:opacity .2s}#searchTerm{-webkit-font-smoothing:antialiased;flex:1;line-height:185%;margin:var(--cr-toolbar-search-field-term-margin,0 2px);position:relative}:host-context([chrome-refresh-2023]) #searchTerm{font-size:12px;font-weight:500;margin:var(--cr-toolbar-search-field-term-margin,0)}label{bottom:0;cursor:var(--cr-toolbar-search-field-cursor,text);left:0;overflow:hidden;position:absolute;right:0;top:0;white-space:nowrap}:host([has-search-text]) label{visibility:hidden}input{-webkit-appearance:none;background:0 0;border:none;caret-color:var(--cr-toolbar-search-field-input-caret-color,var(--google-blue-700));color:var(--cr-toolbar-search-field-input-text-color,var(--google-grey-900));cursor:var(--cr-toolbar-search-field-cursor,text);font:inherit;outline:0;padding:0;position:relative;width:100%}@media (prefers-color-scheme:dark){input{color:var(--cr-toolbar-search-field-input-text-color,#fff)}}:host-context([chrome-refresh-2023]) input{caret-color:var(--cr-toolbar-search-field-input-caret-color,currentColor);color:var(--cr-toolbar-search-field-input-text-color,var(--color-toolbar-search-field-foreground,var(--cr-fallback-color-on-surface)));font-size:12px;font-weight:500}input[type=search]::-webkit-search-cancel-button{display:none}:host([narrow]){border-radius:var(--cr-toolbar-search-field-border-radius,0)}:host(:not([narrow])){background:var(--cr-toolbar-search-field-background,var(--google-grey-100));border-radius:var(--cr-toolbar-search-field-border-radius,46px);cursor:var(--cr-toolbar-search-field-cursor,text);max-width:var(--cr-toolbar-field-max-width,none);padding-inline-end:0;width:var(--cr-toolbar-field-width,680px)}@media (prefers-color-scheme:dark){:host(:not([narrow])){background:var(--cr-toolbar-search-field-background,rgba(0,0,0,.22))}}:host-context([chrome-refresh-2023]):host(:not([narrow])){--cr-toolbar-search-field-border-radius:100px;background:0 0;height:36px;overflow:hidden;padding:0 6px;position:relative}#background,#stateBackground{display:none}:host-context([chrome-refresh-2023]):host(:not([narrow])) #background{background:var(--cr-toolbar-search-field-background,var(--color-toolbar-search-field-background,var(--cr-fallback-color-base-container)));border-radius:inherit;display:block;inset:0;pointer-events:none;position:absolute;z-index:0}:host-context([chrome-refresh-2023]):host([search-focused_]:not([narrow])){outline:2px solid var(--cr-focus-outline-color);outline-offset:2px}:host-context([chrome-refresh-2023]):host(:not([narrow])) #stateBackground{display:block;inset:0;pointer-events:none;position:absolute}:host-context([chrome-refresh-2023]):host(:hover:not([search-focused_],[narrow])) #stateBackground{background:var(--cr-toolbar-search-field-hover-background);z-index:1}:host(:not([narrow]):not([showing-search])) #icon{opacity:var(--cr-toolbar-search-field-icon-opacity,.7)}:host-context([chrome-refresh-2023]):host(:not([narrow]):not([showing-search])) #icon{opacity:var(--cr-toolbar-search-field-icon-opacity,1)}:host(:not([narrow])) #prompt{opacity:var(--cr-toolbar-search-field-prompt-opacity,1)}:host([narrow]) #prompt{opacity:var(--cr-toolbar-search-field-narrow-mode-prompt-opacity,0)}:host([narrow]:not([showing-search])) #searchTerm{display:none}:host([showing-search][spinner-active]) #icon{opacity:0}:host([narrow][showing-search]){width:100%}:host([narrow][showing-search]) #icon,:host([narrow][showing-search]) paper-spinner-lite{margin-inline-start:var(--cr-toolbar-search-icon-margin-inline-start,18px)}#content{align-items:center;display:flex;height:100%}:host-context([chrome-refresh-2023]) #content{position:relative;z-index:2}</style>
    <div id="background"></div>
    <div id="stateBackground"></div>
    <div id="content">
      <template is="dom-if" id="spinnerTemplate">
        <paper-spinner-lite active="[[isSpinnerShown_]]">
        </paper-spinner-lite>
      </template>
      <cr-icon-button id="icon" iron-icon="cr:search" title="[[label]]" dir="ltr" tabindex$="[[computeIconTabIndex_(narrow, hasSearchText)]]" aria-hidden$="[[computeIconAriaHidden_(narrow, hasSearchText)]]" on-click="onSearchIconClicked_" disabled="[[disabled]]">
      </cr-icon-button>
      <div id="searchTerm">
        <label id="prompt" for="searchInput" aria-hidden="true">[[label]]</label>
        <input id="searchInput" aria-labelledby="prompt" autocapitalize="off" autocomplete="off" type="search" on-input="onSearchTermInput" on-search="onSearchTermSearch" on-keydown="onSearchTermKeydown_" on-focus="onInputFocus_" on-blur="onInputBlur_" autofocus$="[[autofocus]]" spellcheck="false" disabled="[[disabled]]">
      </div>
      <template is="dom-if" if="[[hasSearchText]]">
        <cr-icon-button id="clearSearch" iron-icon="cr:cancel" title="[[clearLabel]]" on-click="clearSearch_" disabled="[[disabled]]"></cr-icon-button>
      </template>
    </div>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrToolbarSearchFieldElementBase=CrSearchFieldMixin(PolymerElement);class CrToolbarSearchFieldElement extends CrToolbarSearchFieldElementBase{static get is(){return"cr-toolbar-search-field"}static get template(){return getTemplate$6()}static get properties(){return{narrow:{type:Boolean,reflectToAttribute:true},showingSearch:{type:Boolean,value:false,notify:true,reflectToAttribute:true},disabled:{type:Boolean,value:false,reflectToAttribute:true},autofocus:{type:Boolean,value:false,reflectToAttribute:true},spinnerActive:{type:Boolean,reflectToAttribute:true},isSpinnerShown_:{type:Boolean,computed:"computeIsSpinnerShown_(spinnerActive, showingSearch)"},searchFocused_:{reflectToAttribute:true,type:Boolean,value:false}}}ready(){super.ready();this.addEventListener("click",(e=>this.showSearch_(e)))}getSearchInput(){return this.$.searchInput}isSearchFocused(){return this.searchFocused_}showAndFocus(){this.showingSearch=true;this.focus_()}onSearchTermInput(){super.onSearchTermInput();this.showingSearch=this.hasSearchText||this.isSearchFocused()}onSearchIconClicked_(){this.dispatchEvent(new CustomEvent("search-icon-clicked",{bubbles:true,composed:true}))}focus_(){this.getSearchInput().focus()}computeIconTabIndex_(narrow){return narrow&&!this.hasSearchText?0:-1}computeIconAriaHidden_(narrow){return Boolean(!narrow||this.hasSearchText).toString()}computeIsSpinnerShown_(){const showSpinner=this.spinnerActive&&this.showingSearch;if(showSpinner){this.$.spinnerTemplate.if=true}return showSpinner}onInputFocus_(){this.searchFocused_=true}onInputBlur_(){this.searchFocused_=false;if(!this.hasSearchText){this.showingSearch=false}}onSearchTermKeydown_(e){if(e.key==="Escape"){this.showingSearch=false;this.setValue("");this.getSearchInput().blur()}}showSearch_(e){if(e.target!==this.shadowRoot.querySelector("#clearSearch")){this.showingSearch=true}if(this.narrow){this.focus_()}}clearSearch_(){this.setValue("");this.focus_();this.spinnerActive=false}}customElements.define(CrToolbarSearchFieldElement.is,CrToolbarSearchFieldElement);function getTemplate$5(){return html`<!--_html_template_start_-->    <style include="cr-icons cr-hidden-style">:host{align-items:center;background-color:var(--cr-toolbar-background-color);color:var(--google-grey-900);display:flex;height:var(--cr-toolbar-height)}@media (prefers-color-scheme:dark){:host{border-bottom:var(--cr-separator-line);box-sizing:border-box;color:var(--cr-secondary-text-color)}:host-context([chrome-refresh-2023]):host{background-color:transparent;border-bottom:none}}h1{flex:1;font-size:170%;font-weight:var(--cr-toolbar-header-font-weight,500);letter-spacing:.25px;line-height:normal;margin-inline-start:6px;padding-inline-end:12px;white-space:var(--cr-toolbar-header-white-space,normal)}@media (prefers-color-scheme:dark){h1{color:var(--cr-primary-text-color)}}#leftContent{position:relative;transition:opacity .1s}#leftSpacer{align-items:center;box-sizing:border-box;display:flex;padding-inline-start:calc(12px + 6px);width:var(--cr-toolbar-left-spacer-width,auto)}cr-icon-button{--cr-icon-button-size:32px;min-width:32px}@media (prefers-color-scheme:light){cr-icon-button{--cr-icon-button-fill-color:currentColor;--cr-icon-button-focus-outline-color:var(--cr-focus-outline-color)}}#centeredContent{display:flex;flex:1 1 0;justify-content:center}#rightSpacer{padding-inline-end:12px}:host([narrow]) #centeredContent{justify-content:flex-end}:host([has-overlay]){transition:visibility var(--cr-toolbar-overlay-animation-duration);visibility:hidden}:host([narrow][showing-search_]) #leftContent{opacity:0;position:absolute}:host(:not([narrow])) #leftContent{flex:1 1 var(--cr-toolbar-field-margin,0)}:host(:not([narrow])) #centeredContent{flex-basis:var(--cr-toolbar-center-basis,0)}:host(:not([narrow])[disable-right-content-grow]) #centeredContent{justify-content:start;padding-inline-start:12px}:host(:not([narrow])) #rightContent{flex:1 1 0;text-align:end}:host(:not([narrow])[disable-right-content-grow]) #rightContent{flex:0 1 0}picture{display:none}#menuButton{margin-inline-end:9px}#menuButton~h1{margin-inline-start:0}:host(:not([narrow])) picture,:host([always-show-logo]) picture{display:initial;margin-inline-end:16px}:host(:not([narrow])) #leftSpacer,:host([always-show-logo]) #leftSpacer{padding-inline-start:calc(12px + 9px)}:host(:not([narrow])) :is(picture,#product-logo),:host([always-show-logo]) :is(picture,#product-logo){height:24px;width:24px}</style>
    <div id="leftContent">
      <div id="leftSpacer">
        <template is="dom-if" if="[[showMenu]]" restamp>
          <cr-icon-button id="menuButton" class="no-overlap" iron-icon="cr20:menu" on-click="onMenuClick_" aria-label$="[[menuLabel]]" title="[[menuLabel]]">
          </cr-icon-button>
        </template>
        <slot name="product-logo">
          <picture>
            <source media="(prefers-color-scheme: dark)" srcset="//resources/images/chrome_logo_dark.svg">
            <img id="product-logo" srcset="chrome://theme/current-channel-logo@1x, chrome://theme/current-channel-logo@2x 2x" role="presentation">
          </picture>
        </slot>
        <h1>[[pageName]]</h1>
      </div>
    </div>

    <div id="centeredContent" hidden$="[[!showSearch]]">
      <cr-toolbar-search-field id="search" narrow="[[narrow]]" label="[[searchPrompt]]" clear-label="[[clearLabel]]" spinner-active="[[spinnerActive]]" showing-search="{{showingSearch_}}" autofocus$="[[autofocus]]">
      </cr-toolbar-search-field>
      <iron-media-query query="(max-width: [[narrowThreshold]]px)" query-matches="{{narrow}}">
      </iron-media-query>
    </div>

    <div id="rightContent">
      <div id="rightSpacer">
        <slot></slot>
      </div>
    </div>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrToolbarElement extends PolymerElement{static get is(){return"cr-toolbar"}static get template(){return getTemplate$5()}static get properties(){return{pageName:String,searchPrompt:String,clearLabel:String,menuLabel:String,spinnerActive:Boolean,showMenu:{type:Boolean,value:false},showSearch:{type:Boolean,value:true},autofocus:{type:Boolean,value:false,reflectToAttribute:true},narrow:{type:Boolean,reflectToAttribute:true,readonly:true,notify:true},narrowThreshold:{type:Number,value:900},alwaysShowLogo:{type:Boolean,value:false,reflectToAttribute:true},showingSearch_:{type:Boolean,reflectToAttribute:true}}}getSearchField(){return this.$.search}onMenuClick_(){this.dispatchEvent(new CustomEvent("cr-toolbar-menu-click",{bubbles:true,composed:true}))}focusMenuButton(){requestAnimationFrame((()=>{const menuButton=this.shadowRoot.querySelector("#menuButton");if(menuButton){menuButton.focus()}}))}isMenuFocused(){return!!this.shadowRoot.activeElement&&this.shadowRoot.activeElement.id==="menuButton"}}customElements.define(CrToolbarElement.is,CrToolbarElement);function getTemplate$4(){return html`<!--_html_template_start_-->    <style include="shared-style">:host{display:flex;position:relative}cr-toolbar{--cr-toolbar-center-basis:var(--cluster-max-width);--cr-toolbar-left-spacer-width:var(--side-bar-width);--cr-toolbar-field-margin:var(--side-bar-width);flex:1}:host([has-drawer]) cr-toolbar,:host([has-drawer]) cr-toolbar-selection-overlay{--cr-toolbar-field-margin:0}cr-toolbar-selection-overlay{opacity:0;--cr-toolbar-selection-overlay-max-width:var(--card-max-width);--cr-toolbar-field-margin:var(--side-bar-width)}cr-toolbar-selection-overlay[show]{opacity:1}</style>
    <cr-toolbar id="mainToolbar" disable-right-content-grow has-overlay$="[[itemsSelected_]]" page-name="$i18n{title}" clear-label="$i18n{clearSearch}" search-prompt="$i18n{searchPrompt}" spinner-active="[[spinnerActive]]" autofocus show-menu="[[hasDrawer]]" menu-label="$i18n{historyMenuButton}" narrow-threshold="1023" on-search-changed="onSearchChanged_">
    </cr-toolbar>
    <cr-toolbar-selection-overlay show="[[itemsSelected_]]" cancel-label="$i18n{cancel}" selection-label="[[numberOfItemsSelected_(count)]]" on-clear-selected-items="clearSelectedItems">
      <cr-button on-click="deleteSelectedItems" disabled$="[[pendingDelete]]">
        $i18n{delete}
      </cr-button>
    </cr-toolbar-selection-overlay>
<!--_html_template_end_-->`}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class HistoryToolbarElement extends PolymerElement{constructor(){super(...arguments);this.count=0;this.itemsSelected_=false}static get is(){return"history-toolbar"}static get template(){return getTemplate$4()}static get properties(){return{count:{type:Number,observer:"changeToolbarView_"},itemsSelected_:Boolean,pendingDelete:Boolean,searchTerm:{type:String,observer:"searchTermChanged_"},spinnerActive:{type:Boolean,value:false},hasDrawer:{type:Boolean,reflectToAttribute:true},hasMoreResults:Boolean,querying:Boolean,queryInfo:Object,showMenuPromo:Boolean}}fire_(eventName,detail){this.dispatchEvent(new CustomEvent(eventName,{bubbles:true,composed:true,detail:detail}))}get searchField(){return this.$.mainToolbar.getSearchField()}deleteSelectedItems(){this.fire_("delete-selected")}clearSelectedItems(){this.fire_("unselect-all");IronA11yAnnouncer.requestAvailability();this.fire_("iron-announce",{text:loadTimeData.getString("itemsUnselected")})}changeToolbarView_(){this.itemsSelected_=this.count>0}searchTermChanged_(){if(this.searchField.getValue()!==this.searchTerm){this.searchField.showAndFocus();this.searchField.setValue(this.searchTerm)}}canShowMenuPromo_(){return this.showMenuPromo&&!loadTimeData.getBoolean("isGuestSession")}onSearchChanged_(event){this.fire_("change-query",{search:event.detail})}numberOfItemsSelected_(count){return count>0?loadTimeData.getStringF("itemsSelected",count):""}}customElements.define(HistoryToolbarElement.is,HistoryToolbarElement);
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class HistoryQueryManagerElement extends PolymerElement{static get is(){return"history-query-manager"}static get template(){return null}static get properties(){return{queryState:{type:Object,notify:true},queryResult:{type:Object,notify:true},router:Object}}static get observers(){return["searchTermChanged_(queryState.searchTerm)"]}constructor(){super();this.eventTracker_=new EventTracker;this.queryState={incremental:false,querying:true,searchTerm:""}}connectedCallback(){super.connectedCallback();this.eventTracker_.add(document,"change-query",this.onChangeQuery_.bind(this));this.eventTracker_.add(document,"query-history",this.onQueryHistory_.bind(this))}disconnectedCallback(){super.disconnectedCallback();this.eventTracker_.removeAll()}initialize(){this.queryHistory_(false)}queryHistory_(incremental){this.set("queryState.querying",true);this.set("queryState.incremental",incremental);const browserService=BrowserServiceImpl.getInstance();const promise=incremental?browserService.queryHistoryContinuation():browserService.queryHistory(this.queryState.searchTerm);promise.then((result=>this.onQueryResult_(result)),(()=>{}))}onChangeQuery_(e){const changes=e.detail;let needsUpdate=false;if(changes.search!==null&&changes.search!==this.queryState.searchTerm){this.set("queryState.searchTerm",changes.search);needsUpdate=true}if(needsUpdate){this.queryHistory_(false);if(this.router){this.router.serializeUrl()}}}onQueryHistory_(e){this.queryHistory_(e.detail);return false}onQueryResult_(results){this.set("queryState.querying",false);this.set("queryResult.info",results.info);this.set("queryResult.results",results.value);this.dispatchEvent(new CustomEvent("query-finished",{bubbles:true,composed:true}))}searchTermChanged_(){if(this.queryState.searchTerm){BrowserServiceImpl.getInstance().recordAction("Search")}}}customElements.define(HistoryQueryManagerElement.is,HistoryQueryManagerElement);function getTemplate$3(){return html`<!--_html_template_start_-->    <style>:host{align-items:center;border-top:1px solid var(--cr-separator-color);color:var(--cr-secondary-text-color);display:none;font-size:.8125rem;justify-content:center;padding:0 24px}:host([is-managed_]){display:flex}a[href]{color:var(--cr-link-color)}iron-icon{align-self:flex-start;flex-shrink:0;height:20px;padding-inline-end:var(--managed-footnote-icon-padding,8px);width:20px}</style>

    <template is="dom-if" if="[[isManaged_]]">
      <iron-icon icon="[[managedByIcon_]]"></iron-icon>
      <div id="content" inner-h-t-m-l="[[getManagementString_(showDeviceInfo)]]">
      </div>
    </template>
<!--_html_template_end_-->`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ManagedFootnoteElementBase=I18nMixin(WebUiListenerMixin(PolymerElement));class ManagedFootnoteElement extends ManagedFootnoteElementBase{static get is(){return"managed-footnote"}static get template(){return getTemplate$3()}static get properties(){return{isManaged_:{reflectToAttribute:true,type:Boolean,value(){return loadTimeData.getBoolean("isManaged")}},showDeviceInfo:{type:Boolean,value:false},managedByIcon_:{reflectToAttribute:true,type:String,value(){return loadTimeData.getString("managedByIcon")}}}}ready(){super.ready();this.addWebUiListener("is-managed-changed",(managed=>{loadTimeData.overrideValues({isManaged:managed});this.isManaged_=managed}))}getManagementString_(){if(this.showDeviceInfo){return this.i18nAdvanced("deviceManagedByOrg")}return this.i18nAdvanced("browserManagedByOrg")}}customElements.define(ManagedFootnoteElement.is,ManagedFootnoteElement);chrome.send("observeManagedUI");
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrMenuSelectorBase=mixinBehaviors([IronSelectableBehavior],PolymerElement);class CrMenuSelector extends CrMenuSelectorBase{static get is(){return"cr-menu-selector"}connectedCallback(){super.connectedCallback();this.focusOutlineManager_=FocusOutlineManager.forDocument(document)}ready(){super.ready();this.setAttribute("role","menu");this.addEventListener("focusin",this.onFocusin_.bind(this));this.addEventListener("keydown",this.onKeydown_.bind(this));this.addEventListener("iron-deselect",(e=>this.onIronDeselected_(e)));this.addEventListener("iron-select",(e=>this.onIronSelected_(e)))}getAllFocusableItems_(){return Array.from(this.querySelectorAll("[role=menuitem]:not([disabled]):not([hidden])"))}onFocusin_(e){const focusMovedWithKeyboard=this.focusOutlineManager_.visible;const focusMovedFromOutside=e.relatedTarget===null||!this.contains(e.relatedTarget);if(focusMovedWithKeyboard&&focusMovedFromOutside){this.getAllFocusableItems_()[0].focus()}}onIronDeselected_(e){e.detail.item.removeAttribute("aria-current")}onIronSelected_(e){e.detail.item.setAttribute("aria-current","page")}onKeydown_(event){const items=this.getAllFocusableItems_();assert(items.length>=1);const currentFocusedIndex=items.indexOf(this.querySelector(":focus"));let newFocusedIndex=currentFocusedIndex;switch(event.key){case"Tab":if(event.shiftKey){items[0].focus()}else{items[items.length-1].focus({preventScroll:true})}return;case"ArrowDown":newFocusedIndex=(currentFocusedIndex+1)%items.length;break;case"ArrowUp":newFocusedIndex=(currentFocusedIndex+items.length-1)%items.length;break;case"Home":newFocusedIndex=0;break;case"End":newFocusedIndex=items.length-1;break}if(newFocusedIndex===currentFocusedIndex){return}event.preventDefault();items[newFocusedIndex].focus()}}customElements.define(CrMenuSelector.is,CrMenuSelector);const styleMod=document.createElement("dom-module");styleMod.appendChild(html`
  <template>
    <style>
.cr-nav-menu-item{--iron-icon-fill-color:var(--google-grey-700);--iron-icon-height:20px;--iron-icon-width:20px;--cr-icon-ripple-size:20px;align-items:center;border-end-end-radius:100px;border-start-end-radius:100px;box-sizing:border-box;color:var(--google-grey-900);display:flex;font-size:14px;font-weight:500;line-height:14px;margin-inline-end:2px;margin-inline-start:1px;min-height:40px;overflow:hidden;padding-block-end:10px;padding-block-start:10px;padding-inline-start:23px;position:relative;text-decoration:none}:host-context(cr-drawer) .cr-nav-menu-item{margin-inline-end:8px}.cr-nav-menu-item:hover{background:var(--google-grey-200)}.cr-nav-menu-item[selected]{--iron-icon-fill-color:var(--google-blue-600);background:var(--google-blue-50);color:var(--google-blue-700)}@media (prefers-color-scheme:dark){.cr-nav-menu-item{--iron-icon-fill-color:var(--google-grey-500);color:#fff}.cr-nav-menu-item:hover{--iron-icon-fill-color:white;background:var(--google-grey-800)}.cr-nav-menu-item[selected]{--iron-icon-fill-color:black;background:var(--google-blue-300);color:var(--google-grey-900)}}.cr-nav-menu-item:focus{outline:auto 5px -webkit-focus-ring-color;z-index:1}.cr-nav-menu-item:focus:not([selected]):not(:hover){background:0 0}.cr-nav-menu-item iron-icon{flex-shrink:0;margin-inline-end:20px;pointer-events:none;vertical-align:top}
    </style>
  </template>
`.content);styleMod.register("cr-nav-menu-item-style");const template=html`<iron-iconset-svg name="history" size="24">
  <svg>
    <defs>
      
      <g id="journeys-on">
        <path d="M19 15c-1.3 0-2.4.84-2.82 2H11c-1.1 0-2-.9-2-2s.9-2 2-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4H7.82C7.4 3.84 6.3 3 5 3 3.34 3 2 4.34 2 6s1.34 3 3 3c1.3 0 2.4-.84 2.82-2H13c1.1 0 2 .9 2 2s-.9 2-2 2h-2c-2.21 0-4 1.79-4 4s1.79 4 4 4h5.18A2.996 2.996 0 0 0 22 18c0-1.66-1.34-3-3-3ZM5 7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Z"></path>
      </g>
      <g id="journeys-off">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.104 2.099.69 3.513l1.482 1.482A3.005 3.005 0 0 0 2 6a2.996 2.996 0 0 0 4.003 2.826l2.818 2.818A3.999 3.999 0 0 0 11 19h5.177l.005.004 1.827 1.828 2.48 2.48 1.414-1.414-19.799-19.8Zm8.2 11.027A2.008 2.008 0 0 0 9 15c0 1.1.9 2 2 2h3.177l-3.874-3.874Z"></path>
        <path d="M15 9c0 .852-.54 1.584-1.295 1.871l1.48 1.48A3.999 3.999 0 0 0 13 5H7.834l2 2H13c1.1 0 2 .9 2 2ZM21.831 18.997l-3.825-3.825A2.996 2.996 0 0 1 22 18c0 .35-.06.685-.169.997Z"></path>
      </g>
    </defs>
  </svg>
</iron-iconset-svg>
`;document.head.appendChild(template.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Polymer({is:"iron-location",properties:{path:{type:String,notify:true,value:function(){return window.decodeURIComponent(window.location.pathname)}},query:{type:String,notify:true,value:function(){return window.location.search.slice(1)}},hash:{type:String,notify:true,value:function(){return window.decodeURIComponent(window.location.hash.slice(1))}},dwellTime:{type:Number,value:2e3},urlSpaceRegex:{type:String,value:""},encodeSpaceAsPlusInQuery:{type:Boolean,value:false},_urlSpaceRegExp:{computed:"_makeRegExp(urlSpaceRegex)"},_lastChangedAt:{type:Number},_initialized:{type:Boolean,value:false}},hostAttributes:{hidden:true},observers:["_updateUrl(path, query, hash)"],created:function(){this.__location=window.location},attached:function(){this.listen(window,"hashchange","_hashChanged");this.listen(window,"location-changed","_urlChanged");this.listen(window,"popstate","_urlChanged");this.listen(document.body,"click","_globalOnClick");this._lastChangedAt=window.performance.now()-(this.dwellTime-200);this._initialized=true;this._urlChanged()},detached:function(){this.unlisten(window,"hashchange","_hashChanged");this.unlisten(window,"location-changed","_urlChanged");this.unlisten(window,"popstate","_urlChanged");this.unlisten(document.body,"click","_globalOnClick");this._initialized=false},_hashChanged:function(){this.hash=window.decodeURIComponent(this.__location.hash.substring(1))},_urlChanged:function(){this._dontUpdateUrl=true;this._hashChanged();this.path=window.decodeURIComponent(this.__location.pathname);this.query=this.__location.search.substring(1);this._dontUpdateUrl=false;this._updateUrl()},_getUrl:function(){var partiallyEncodedPath=window.encodeURI(this.path).replace(/\#/g,"%23").replace(/\?/g,"%3F");var partiallyEncodedQuery="";if(this.query){partiallyEncodedQuery="?"+this.query.replace(/\#/g,"%23");if(this.encodeSpaceAsPlusInQuery){partiallyEncodedQuery=partiallyEncodedQuery.replace(/\+/g,"%2B").replace(/ /g,"+").replace(/%20/g,"+")}else{partiallyEncodedQuery=partiallyEncodedQuery.replace(/\+/g,"%2B").replace(/ /g,"%20")}}var partiallyEncodedHash="";if(this.hash){partiallyEncodedHash="#"+window.encodeURI(this.hash)}return partiallyEncodedPath+partiallyEncodedQuery+partiallyEncodedHash},_updateUrl:function(){if(this._dontUpdateUrl||!this._initialized){return}if(this.path===window.decodeURIComponent(this.__location.pathname)&&this.query===this.__location.search.substring(1)&&this.hash===window.decodeURIComponent(this.__location.hash.substring(1))){return}var newUrl=this._getUrl();var fullNewUrl=new URL(newUrl,this.__location.protocol+"//"+this.__location.host).href;var now=window.performance.now();var shouldReplace=this._lastChangedAt+this.dwellTime>now;this._lastChangedAt=now;if(shouldReplace){window.history.replaceState({},"",fullNewUrl)}else{window.history.pushState({},"",fullNewUrl)}this.fire("location-changed",{},{node:window})},_globalOnClick:function(event){if(event.defaultPrevented){return}var href=this._getSameOriginLinkHref(event);if(!href){return}event.preventDefault();if(href===this.__location.href){return}window.history.pushState({},"",href);this.fire("location-changed",{},{node:window})},_getSameOriginLinkHref:function(event){if(event.button!==0){return null}if(event.metaKey||event.ctrlKey){return null}var eventPath=dom(event).path;var anchor=null;for(var i=0;i<eventPath.length;i++){var element=eventPath[i];if(element.tagName==="A"&&element.href){anchor=element;break}}if(!anchor){return null}if(anchor.target==="_blank"){return null}if((anchor.target==="_top"||anchor.target==="_parent")&&window.top!==window){return null}if(anchor.download){return null}var href=anchor.href;var url;if(document.baseURI!=null){url=new URL(href,document.baseURI)}else{url=new URL(href)}var origin;if(this.__location.origin){origin=this.__location.origin}else{origin=this.__location.protocol+"//"+this.__location.host}var urlOrigin;if(url.origin){urlOrigin=url.origin}else{var urlHost=url.host;var urlPort=url.port;var urlProtocol=url.protocol;var isExtraneousHTTPS=urlProtocol==="https:"&&urlPort==="443";var isExtraneousHTTP=urlProtocol==="http:"&&urlPort==="80";if(isExtraneousHTTPS||isExtraneousHTTP){urlHost=url.hostname}urlOrigin=urlProtocol+"//"+urlHost}if(urlOrigin!==origin){return null}var normalizedHref=url.pathname+url.search+url.hash;if(normalizedHref[0]!=="/"){normalizedHref="/"+normalizedHref}if(this._urlSpaceRegExp&&!this._urlSpaceRegExp.test(normalizedHref)){return null}var fullNormalizedHref=new URL(normalizedHref,this.__location.href).href;return fullNormalizedHref},_makeRegExp:function(urlSpaceRegex){return RegExp(urlSpaceRegex)}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Polymer({is:"iron-query-params",properties:{paramsString:{type:String,notify:true,observer:"paramsStringChanged"},paramsObject:{type:Object,notify:true},_dontReact:{type:Boolean,value:false}},hostAttributes:{hidden:true},observers:["paramsObjectChanged(paramsObject.*)"],paramsStringChanged:function(){this._dontReact=true;this.paramsObject=this._decodeParams(this.paramsString);this._dontReact=false},paramsObjectChanged:function(){if(this._dontReact){return}this.paramsString=this._encodeParams(this.paramsObject).replace(/%3F/g,"?").replace(/%2F/g,"/").replace(/'/g,"%27")},_encodeParams:function(params){var encodedParams=[];for(var key in params){var value=params[key];if(value===""){encodedParams.push(encodeURIComponent(key))}else if(value){encodedParams.push(encodeURIComponent(key)+"="+encodeURIComponent(value.toString()))}}return encodedParams.join("&")},_decodeParams:function(paramString){var params={};paramString=(paramString||"").replace(/\+/g,"%20");var paramList=paramString.split("&");for(var i=0;i<paramList.length;i++){var param=paramList[i].split("=");if(param[0]){params[decodeURIComponent(param[0])]=decodeURIComponent(param[1]||"")}}return params}});function getTemplate$2(){return html`<!--_html_template_start_-->    <iron-location query="{{urlQuery_}}" path="{{path_}}"></iron-location>
    <iron-query-params params-string="{{query_}}" params-object="{{queryParams_}}"></iron-query-params>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const Page={HISTORY:"history",HISTORY_CLUSTERS:loadTimeData.getBoolean("renameJourneys")?"grouped":"journeys",SYNCED_TABS:"syncedTabs"};const TABBED_PAGES=[Page.HISTORY,Page.HISTORY_CLUSTERS];class HistoryRouterElement extends PolymerElement{constructor(){super(...arguments);this.parsing_=false;this.debouncer_=null}static get is(){return"history-router"}static get template(){return getTemplate$2()}static get properties(){return{selectedPage:{type:String,notify:true,observer:"selectedPageChanged_"},queryState:Object,path_:String,queryParams_:Object,query_:{type:String,observer:"onQueryChanged_"},urlQuery_:{type:String,observer:"onUrlQueryChanged_"}}}static get observers(){return["onUrlChanged_(path_, queryParams_)"]}connectedCallback(){super.connectedCallback();if(window.location.hash){window.location.href=window.location.href.split("#")[0]+"?"+window.location.hash.substr(1)}}onQueryChanged_(_current,previous){if(previous!==undefined){this.urlQuery_=this.query_}}onUrlQueryChanged_(){this.query_=this.urlQuery_}serializeUrl(){let path=this.selectedPage;if(path===Page.HISTORY){path=""}this.path_="/"+path;this.set("queryParams_.q",this.queryState.searchTerm||null)}selectedPageChanged_(){if(!this.parsing_){this.serializeUrl()}}parseUrl_(){this.parsing_=true;const changes={search:""};const sections=this.path_.substr(1).split("/");const page=sections[0]||Page.HISTORY;changes.search=this.queryParams_.q||"";this.selectedPage=page;this.dispatchEvent(new CustomEvent("change-query",{bubbles:true,composed:true,detail:changes}));this.serializeUrl();this.parsing_=false}onUrlChanged_(){this.debouncer_=Debouncer.debounce(this.debouncer_,microTask,this.parseUrl_.bind(this))}getDebouncerForTesting(){return this.debouncer_}}customElements.define(HistoryRouterElement.is,HistoryRouterElement);function getTemplate$1(){return html`<!--_html_template_start_-->    <style include="cr-hidden-style cr-icons cr-nav-menu-item-style">:host{display:flex;flex-direction:column;height:100%;overflow-x:hidden;overflow-y:auto;width:var(--side-bar-width)}.separator{background-color:var(--separator-color);flex-shrink:0;height:1px;margin:8px 0}cr-menu-selector{padding-top:8px;user-select:none}cr-menu-selector>a[disabled]{opacity:.65;pointer-events:none}#spacer{flex:1}#footer{color:var(--sidebar-footer-text-color);width:var(--side-bar-width)}managed-footnote{--managed-footnote-icon-padding:12px;border:none;margin:24px 0;padding-inline-end:16px;padding-inline-start:24px}#google-account-footer{display:flex;margin:24px 0;padding-inline-end:16px;padding-inline-start:24px}#google-account-footer iron-icon{align-self:flex-start;flex-shrink:0;height:20px;padding-inline-end:12px;width:20px}#google-account-footer>div{overflow-x:hidden}iron-icon{display:block}#clear-browsing-data{justify-content:normal}#clear-browsing-data .cr-icon{margin-inline-end:0;margin-inline-start:9px}</style>

    <cr-menu-selector id="menu" selected="{{selectedPage}}" selectable=".page-item" attr-for-selected="path" on-iron-activate="onSelectorActivate_" selected-attribute="selected">
      <a id="history" role="menuitem" class="page-item cr-nav-menu-item" href="[[getHistoryItemHref_(selectedTab, showHistoryClusters_)]]" path$="[[getHistoryItemPath_(selectedTab, showHistoryClusters_)]]" on-click="onItemClick_">
        <iron-icon icon="cr:history"></iron-icon>
        $i18n{historyMenuItem}
        <paper-ripple></paper-ripple>
      </a>
      <a id="syncedTabs" role="menuitem" href="/syncedTabs" class="page-item cr-nav-menu-item" path="syncedTabs" on-click="onItemClick_">
        <iron-icon icon="cr:phonelink"></iron-icon>
        $i18n{openTabsMenuItem}
        <paper-ripple></paper-ripple>
      </a>
      
      <a role="menuitem" id="toggle-history-clusters" class="cr-nav-menu-item" tabindex="0" on-click="onToggleHistoryClustersClick_" on-keydown="onToggleHistoryClustersKeydown_" on-mousedown="onToggleHistoryClustersMousedown_" hidden="[[!showToggleHistoryClusters_]]">
        <iron-icon icon="[[getToggleHistoryClustersItemIcon_(
            historyClustersVisible)]]">
        </iron-icon>
        [[getToggleHistoryClustersItemLabel_(historyClustersVisible)]]
        <paper-ripple id="thc-ripple"></paper-ripple>
      </a>
      <a role="menuitem" id="clear-browsing-data" class="cr-nav-menu-item" href="chrome://settings/clearBrowserData" on-click="onClearBrowsingDataClick_" disabled$="[[guestSession_]]" tabindex$="[[computeClearBrowsingDataTabIndex_(guestSession_)]]">
        <iron-icon icon="cr:delete"></iron-icon>
        $i18n{clearBrowsingData}
        <div class="cr-icon icon-external"></div>
        <paper-ripple id="cbd-ripple"></paper-ripple>
      </a>
    </cr-menu-selector>

    <div id="spacer"></div>
    <div id="footer" hidden="[[!showFooter_]]">
      <div class="separator"></div>
      <managed-footnote></managed-footnote>
      <div id="google-account-footer" hidden="[[!footerInfo.otherFormsOfHistory]]">
        <iron-icon icon="cr:info-outline"></iron-icon>
        <div>$i18nRaw{sidebarFooter}</div>
      </div>
    </div>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class HistorySideBarElement extends PolymerElement{constructor(){super(...arguments);this.guestSession_=loadTimeData.getBoolean("isGuestSession")}static get is(){return"history-side-bar"}static get template(){return getTemplate$1()}static get properties(){return{footerInfo:Object,historyClustersEnabled:Boolean,historyClustersVisible:{type:Boolean,notify:true},selectedPage:{type:String,notify:true},selectedTab:{type:Number,notify:true},guestSession_:Boolean,historyClustersVisibleManagedByPolicy_:{type:Boolean,value:()=>loadTimeData.getBoolean("isHistoryClustersVisibleManagedByPolicy")},renameJourneys_:{type:Boolean,value:()=>loadTimeData.getBoolean("renameJourneys")},showFooter_:{type:Boolean,computed:"computeShowFooter_("+"footerInfo.otherFormsOfHistory, footerInfo.managed)"},showHistoryClusters_:{type:Boolean,computed:"computeShowHistoryClusters_("+"historyClustersEnabled, historyClustersVisible)"},showToggleHistoryClusters_:{type:Boolean,computed:"computeShowToggleHistoryClusters_("+"historyClustersEnabled, historyClustersVisibleManagedByPolicy_, "+"renameJourneys_)"}}}ready(){super.ready();this.addEventListener("keydown",(e=>this.onKeydown_(e)))}onKeydown_(e){if(e.key===" "){e.composedPath()[0].click()}}onSelectorActivate_(){this.dispatchEvent(new CustomEvent("history-close-drawer",{bubbles:true,composed:true}))}onClearBrowsingDataClick_(e){const browserService=BrowserServiceImpl.getInstance();browserService.recordAction("InitClearBrowsingData");browserService.openClearBrowsingData();this.$["cbd-ripple"].upAction();e.preventDefault()}computeClearBrowsingDataTabIndex_(){return this.guestSession_?"-1":""}onItemClick_(e){e.preventDefault()}getHistoryItemHref_(){return this.showHistoryClusters_&&TABBED_PAGES[this.selectedTab]===Page.HISTORY_CLUSTERS?"/"+Page.HISTORY_CLUSTERS:"/"}getHistoryItemPath_(){return this.showHistoryClusters_&&TABBED_PAGES[this.selectedTab]===Page.HISTORY_CLUSTERS?Page.HISTORY_CLUSTERS:Page.HISTORY}getToggleHistoryClustersItemIcon_(){return`history:journeys-${this.historyClustersVisible?"off":"on"}`}getToggleHistoryClustersItemLabel_(){return loadTimeData.getString(this.historyClustersVisible?"disableHistoryClusters":"enableHistoryClusters")}onToggleHistoryClustersClick_(){MetricsProxyImpl.getInstance().recordToggledVisibility(!this.historyClustersVisible);BrowserProxyImpl.getInstance().handler.toggleVisibility(!this.historyClustersVisible).then((({visible:visible})=>{this.historyClustersVisible=visible;this.selectedTab=TABBED_PAGES.indexOf(visible?Page.HISTORY_CLUSTERS:Page.HISTORY)}));this.$["thc-ripple"].upAction()}onToggleHistoryClustersKeydown_(e){if(e.key==="Enter"){this.onToggleHistoryClustersClick_()}}onToggleHistoryClustersMousedown_(e){e.preventDefault()}computeShowFooter_(includeOtherFormsOfBrowsingHistory,managed){return includeOtherFormsOfBrowsingHistory||managed}computeShowHistoryClusters_(){return this.historyClustersEnabled&&this.historyClustersVisible}computeShowToggleHistoryClusters_(){return this.historyClustersEnabled&&!this.historyClustersVisibleManagedByPolicy_&&!this.renameJourneys_}}customElements.define(HistorySideBarElement.is,HistorySideBarElement);
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class KeyboardShortcut{useKeyCode_=false;mods_={};key_=null;keyCode_=null;constructor(shortcut){shortcut.split("|").forEach((part=>{const partLc=part.toLowerCase();switch(partLc){case"alt":case"ctrl":case"meta":case"shift":this.mods_[partLc+"Key"]=true;break;default:if(this.key_){throw Error("Invalid shortcut")}this.key_=part;if(part.match(/^[a-z]$/)){this.useKeyCode_=true;this.keyCode_=part.toUpperCase().charCodeAt(0)}}}))}matchesEvent(e){if(this.useKeyCode_&&e.keyCode===this.keyCode_||e.key===this.key_){const mods=this.mods_;return["altKey","ctrlKey","metaKey","shiftKey"].every((function(k){return e[k]===!!mods[k]}))}return false}}class KeyboardShortcutList{shortcuts_;constructor(shortcuts){this.shortcuts_=shortcuts.split(/\s+/).map((function(shortcut){return new KeyboardShortcut(shortcut)}))}matchesEvent(e){return this.shortcuts_.some((function(keyboardShortcut){return keyboardShortcut.matchesEvent(e)}))}}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const FindShortcutManager=(()=>{const listeners=[];let modalContextOpen=false;const shortcutCtrlF=new KeyboardShortcutList(isMac?"meta|f":"ctrl|f");const shortcutSlash=new KeyboardShortcutList("/");window.addEventListener("keydown",(e=>{if(e.defaultPrevented||listeners.length===0){return}const element=e.composedPath()[0];if(!shortcutCtrlF.matchesEvent(e)&&(element.tagName==="INPUT"||element.tagName==="TEXTAREA"||!shortcutSlash.matchesEvent(e))){return}const focusIndex=listeners.findIndex((listener=>listener.searchInputHasFocus()));const index=focusIndex<=0?listeners.length-1:focusIndex-1;if(listeners[index].handleFindShortcut(modalContextOpen)){e.preventDefault()}}));window.addEventListener("cr-dialog-open",(()=>{modalContextOpen=true}));window.addEventListener("cr-drawer-opened",(()=>{modalContextOpen=true}));window.addEventListener("close",(e=>{if(["CR-DIALOG","CR-DRAWER"].includes(e.composedPath()[0].nodeName)){modalContextOpen=false}}));return Object.freeze({listeners:listeners})})();const FindShortcutMixin=dedupingMixin((superClass=>{class FindShortcutMixin extends superClass{constructor(){super(...arguments);this.findShortcutListenOnAttach=true}connectedCallback(){super.connectedCallback();if(this.findShortcutListenOnAttach){this.becomeActiveFindShortcutListener()}}disconnectedCallback(){super.disconnectedCallback();if(this.findShortcutListenOnAttach){this.removeSelfAsFindShortcutListener()}}becomeActiveFindShortcutListener(){const listeners=FindShortcutManager.listeners;assert(!listeners.includes(this),"Already listening for find shortcuts.");listeners.push(this)}handleFindShortcutInternal_(){assertNotReached("Must override handleFindShortcut()")}handleFindShortcut(_modalContextOpen){this.handleFindShortcutInternal_();return false}removeSelfAsFindShortcutListener(){const listeners=FindShortcutManager.listeners;const index=listeners.indexOf(this);assert(listeners.includes(this),"Find shortcut listener not found.");listeners.splice(index,1)}searchInputHasFocusInternal_(){assertNotReached("Must override searchInputHasFocus()")}searchInputHasFocus(){this.searchInputHasFocusInternal_();return false}}return FindShortcutMixin}));function getTemplate(){return html`<!--_html_template_start_-->    <style include="cr-shared-style shared-style">:host{color:var(--cr-primary-text-color);display:block;height:100%;line-height:1.54;overflow:hidden}#main-container{display:flex;height:calc(100% - var(--toolbar-height));position:relative}#content{flex:1;min-width:0}#content,#content>*{height:100%}#tabs-container{--cr-tabs-height:48px;--tabs-margin-top:16px}#tabs{--cr-tabs-icon-margin-end:12px;--cr-tabs-selection-bar-width:3px;--cr-tabs-tab-inline-padding:16px;border-bottom:1px solid var(--separator-color);display:flex;justify-content:start;margin:0 auto;max-width:var(--cluster-max-width)}#tabs-content,#tabs-content>*{height:100%}:host([show-history-clusters_]) #tabs-content{height:calc(100% - var(--cr-tabs-height))}:host([toolbar-shadow_]) #drop-shadow{opacity:var(--cr-container-shadow-max-opacity)}</style>
    <history-query-manager query-state="{{queryState_}}" query-result="{{queryResult_}}" router="[[$$('#router')]]" on-query-finished="onQueryFinished_">
    </history-query-manager>
    <history-router id="router" selected-page="{{selectedPage_}}" query-state="[[queryState_]]">
    </history-router>
    <history-toolbar id="toolbar" has-drawer="[[hasDrawer_]]" has-more-results="[[!queryResult_.info.finished]]" pending-delete="[[pendingDelete_]]" query-info="[[queryResult_.info]]" querying="[[queryState_.querying]]" search-term="[[queryState_.searchTerm]]" spinner-active="[[shouldShowSpinner_(queryState_.querying,
                                             queryState_.incremental,
                                             queryState_.searchTerm)]]">
    </history-toolbar>
    <div id="drop-shadow" class="cr-container-shadow"></div>
    <div id="main-container">
      <history-side-bar id="content-side-bar" selected-page="{{selectedPage_}}" selected-tab="{{selectedTab_}}" footer-info="[[footerInfo]]" history-clusters-enabled="[[historyClustersEnabled_]]" history-clusters-visible="{{historyClustersVisible_}}" hidden$="[[hasDrawer_]]">
      </history-side-bar>
      <iron-pages id="content" attr-for-selected="path" fallback-selection="history" selected="[[getSelectedPage_(selectedPage_, items)]]" on-selected-item-changed="updateScrollTarget_" items="{{items}}">
        <div id="tabs-container" path="history">
          <template is="dom-if" if="[[showHistoryClusters_]]">
            <div id="tabs">
              <cr-tabs tab-names="[[tabsNames_]]" tab-icons="[[tabsIcons_]]" selected="{{selectedTab_}}">
              </cr-tabs>
            </div>
          </template>
          <iron-pages id="tabs-content" attr-for-selected="path" fallback-selection="history" selected="[[getSelectedPage_(selectedPage_, items)]]" on-selected-item-changed="updateScrollTarget_" items="{{items}}">
            <history-list id="history" query-state="[[queryState_]]" searched-term="[[queryResult_.info.term]]" pending-delete="{{pendingDelete_}}" query-result="[[queryResult_]]" path="history">
            </history-list>
            <template is="dom-if" if="[[historyClustersSelected_(selectedPage_, showHistoryClusters_)]]">
              <history-clusters id="history-clusters" query="[[queryState_.searchTerm]]" path="[[historyClustersPath_]]">
              </history-clusters>
            </template>
          </iron-pages>
        </div>
        <template is="dom-if" if="[[syncedTabsSelected_(selectedPage_)]]">
          <history-synced-device-manager id="synced-devices" session-list="[[queryResult_.sessionList]]" search-term="[[queryState_.searchTerm]]" sign-in-state="[[isUserSignedIn_]]" path="syncedTabs">
          </history-synced-device-manager>
        </template>
      </iron-pages>
    </div>

    <cr-lazy-render id="drawer">
      <template>
        <cr-drawer heading="$i18n{title}" align="$i18n{textdirection}">
          <history-side-bar id="drawer-side-bar" slot="body" selected-page="{{selectedPage_}}" selected-tab="{{selectedTab_}}" history-clusters-enabled="[[historyClustersEnabled_]]" history-clusters-visible="{{historyClustersVisible_}}" footer-info="[[footerInfo]]">
          </history-side-bar>
        </cr-drawer>
      </template>
    </cr-lazy-render>

    <iron-media-query query="(max-width: 1023px)" query-matches="{{hasDrawer_}}">
    </iron-media-query>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let lazyLoadPromise=null;function ensureLazyLoaded(){if(!lazyLoadPromise){const script=document.createElement("script");script.type="module";script.src=getTrustedScriptURL`./lazy_load.js`;document.body.appendChild(script);lazyLoadPromise=Promise.all([customElements.whenDefined("history-synced-device-manager"),customElements.whenDefined("cr-action-menu"),customElements.whenDefined("cr-button"),customElements.whenDefined("cr-checkbox"),customElements.whenDefined("cr-dialog"),customElements.whenDefined("cr-drawer"),customElements.whenDefined("cr-icon-button"),customElements.whenDefined("cr-toolbar-selection-overlay")])}return lazyLoadPromise}function listenForPrivilegedLinkClicks(){["click","auxclick"].forEach((function(eventName){document.addEventListener(eventName,(function(evt){const e=evt;if(e.button>1||e.defaultPrevented){return}const eventPath=e.composedPath();let anchor=null;if(eventPath){for(let i=0;i<eventPath.length;i++){const element=eventPath[i];if(element.tagName==="A"&&element.href){anchor=element;break}}}let el=e.target;if(!anchor&&el.nodeType===Node.ELEMENT_NODE&&el.webkitMatchesSelector("A, A *")){while(el.tagName!=="A"){el=el.parentElement}anchor=el}if(!anchor){return}if((anchor.protocol==="file:"||anchor.protocol==="about:")&&(e.button===0||e.button===1)){BrowserServiceImpl.getInstance().navigateToUrl(anchor.href,anchor.target,e);e.preventDefault()}}))}))}const HistoryAppElementBase=mixinBehaviors([IronScrollTargetBehavior],FindShortcutMixin(WebUiListenerMixin(PolymerElement)));class HistoryAppElement extends HistoryAppElementBase{static get is(){return"history-app"}static get template(){return getTemplate()}static get properties(){return{selectedPage_:{type:String,observer:"selectedPageChanged_"},queryResult_:Object,isUserSignedIn_:Boolean,pendingDelete_:Boolean,toolbarShadow_:{type:Boolean,reflectToAttribute:true,notify:true},queryState_:Object,hasDrawer_:{type:Boolean,observer:"hasDrawerChanged_"},footerInfo:{type:Object,value(){return{managed:loadTimeData.getBoolean("isManaged"),otherFormsOfHistory:false}}},historyClustersEnabled_:{type:Boolean,value:()=>loadTimeData.getBoolean("isHistoryClustersEnabled")},historyClustersVisible_:{type:Boolean,value:()=>loadTimeData.getBoolean("isHistoryClustersVisible")},historyClustersPath_:{type:String,value:()=>loadTimeData.getBoolean("renameJourneys")?"grouped":"journeys"},showHistoryClusters_:{type:Boolean,computed:"computeShowHistoryClusters_(historyClustersEnabled_, historyClustersVisible_)",reflectToAttribute:true},selectedTab_:{type:Number,observer:"selectedTabChanged_"},tabsIcons_:{type:Array,value:()=>["images/list.svg","chrome://resources/images/icon_journeys.svg"]},tabsNames_:{type:Array,value:()=>[loadTimeData.getString("historyListTabLabel"),loadTimeData.getString("historyClustersTabLabel")]}}}constructor(){super();this.browserService_=BrowserServiceImpl.getInstance();this.eventTracker_=new EventTracker;this.isUserSignedIn_=loadTimeData.getBoolean("isUserSignedIn");this.historyClustersViewStartTime_=null;this.queryResult_={info:undefined,results:undefined,sessionList:undefined};listenForPrivilegedLinkClicks()}connectedCallback(){super.connectedCallback();this.eventTracker_.add(document,"keydown",(e=>this.onKeyDown_(e)));this.eventTracker_.add(document,"visibilitychange",this.onVisibilityChange_.bind(this));this.addWebUiListener("sign-in-state-changed",(signedIn=>this.onSignInStateChanged_(signedIn)));this.addWebUiListener("has-other-forms-changed",(hasOtherForms=>this.onHasOtherFormsChanged_(hasOtherForms)));this.addWebUiListener("foreign-sessions-changed",(sessionList=>this.setForeignSessions_(sessionList)));this.shadowRoot.querySelector("history-query-manager").initialize();this.browserService_.getForeignSessions().then((sessionList=>this.setForeignSessions_(sessionList)))}ready(){super.ready();this.addEventListener("cr-toolbar-menu-click",this.onCrToolbarMenuClick_);this.addEventListener("delete-selected",this.deleteSelected);this.addEventListener("history-checkbox-select",this.checkboxSelected);this.addEventListener("history-close-drawer",this.closeDrawer_);this.addEventListener("history-view-changed",this.historyViewChanged_);this.addEventListener("unselect-all",this.unselectAll);if(!window.location.search){this.selectedTab_=this.getDefaultSelectedTab_()}}disconnectedCallback(){super.disconnectedCallback();this.eventTracker_.removeAll()}fire_(eventName,detail){this.dispatchEvent(new CustomEvent(eventName,{bubbles:true,composed:true,detail:detail}))}getDefaultSelectedTab_(){if(window.location.pathname==="/"+this.historyClustersPath_){return TABBED_PAGES.indexOf(Page.HISTORY_CLUSTERS)}return loadTimeData.getInteger("lastSelectedTab")}computeShowHistoryClusters_(){return this.historyClustersEnabled_&&this.historyClustersVisible_}historyClustersSelected_(_selectedPage,_showHistoryClusters){return this.selectedPage_===Page.HISTORY_CLUSTERS&&this.showHistoryClusters_}onFirstRender_(){const searchField=this.$.toolbar.searchField;if(!searchField.narrow){searchField.getSearchInput().focus()}ensureLazyLoaded().then((function(){requestIdleCallback((function(){document.fonts.load("bold 12px Roboto")}))}))}_scrollHandler(){if(this.scrollTarget){this.toolbarShadow_=this.scrollTarget.scrollTop!==0&&(!this.showHistoryClusters_||this.syncedTabsSelected_(this.selectedPage_))}}onCrToolbarMenuClick_(){this.$.drawer.get().toggle()}checkboxSelected(){this.$.toolbar.count=this.$.history.getSelectedItemCount()}selectOrUnselectAll(){this.$.history.selectOrUnselectAll();this.$.toolbar.count=this.$.history.getSelectedItemCount()}unselectAll(){this.$.history.unselectAllItems();this.$.toolbar.count=0}deleteSelected(){this.$.history.deleteSelectedWithPrompt()}onQueryFinished_(){this.$.history.historyResult(this.queryResult_.info,this.queryResult_.results);if(document.body.classList.contains("loading")){document.body.classList.remove("loading");this.onFirstRender_()}}onKeyDown_(e){if((e.key==="Delete"||e.key==="Backspace")&&!hasKeyModifiers(e)){this.onDeleteCommand_();return}if(e.key==="a"&&!e.altKey&&!e.shiftKey){let hasTriggerModifier=e.ctrlKey&&!e.metaKey;if(hasTriggerModifier&&this.onSelectAllCommand_()){e.preventDefault()}}if(e.key==="Escape"){this.unselectAll();IronA11yAnnouncer.requestAvailability();this.fire_("iron-announce",{text:loadTimeData.getString("itemsUnselected")});e.preventDefault()}}onVisibilityChange_(){if(this.selectedPage_!==Page.HISTORY_CLUSTERS){return}if(document.visibilityState==="hidden"){this.recordHistoryClustersDuration_()}else if(document.visibilityState==="visible"&&this.historyClustersViewStartTime_===null){this.historyClustersViewStartTime_=new Date}}onDeleteCommand_(){if(this.$.toolbar.count===0||this.pendingDelete_){return}this.deleteSelected()}onSelectAllCommand_(){if(this.$.toolbar.searchField.isSearchFocused()||this.syncedTabsSelected_(this.selectedPage_)||this.historyClustersSelected_(this.selectedPage_,this.showHistoryClusters_)){return false}this.selectOrUnselectAll();return true}setForeignSessions_(sessionList){this.set("queryResult_.sessionList",sessionList)}onSignInStateChanged_(isUserSignedIn){this.isUserSignedIn_=isUserSignedIn}onHasOtherFormsChanged_(hasOtherForms){this.set("footerInfo.otherFormsOfHistory",hasOtherForms)}syncedTabsSelected_(_selectedPage){return this.selectedPage_===Page.SYNCED_TABS}shouldShowSpinner_(querying,incremental,searchTerm){return querying&&!incremental&&searchTerm!==""}selectedPageChanged_(newPage,oldPage){this.unselectAll();this.historyViewChanged_();this.maybeUpdateSelectedHistoryTab_();if(oldPage===Page.HISTORY_CLUSTERS&&newPage!==Page.HISTORY_CLUSTERS){this.recordHistoryClustersDuration_()}if(newPage===Page.HISTORY_CLUSTERS){this.historyClustersViewStartTime_=new Date}}updateScrollTarget_(){const topLevelIronPages=this.$["content"];const lowerLevelIronPages=this.$["tabs-content"];const topLevelHistoryPage=this.$["tabs-container"];if(topLevelIronPages.selectedItem&&topLevelIronPages.selectedItem===topLevelHistoryPage){this.scrollTarget=lowerLevelIronPages.selectedItem}else if(topLevelIronPages.selectedItem){this.scrollTarget=topLevelIronPages.selectedItem}else{this.scrollTarget=null}}selectedTabChanged_(){this.selectedPage_=TABBED_PAGES[this.selectedTab_];this.browserService_.setLastSelectedTab(this.selectedTab_)}maybeUpdateSelectedHistoryTab_(){if(TABBED_PAGES.includes(this.selectedPage_)){this.selectedTab_=TABBED_PAGES.indexOf(this.selectedPage_)}}historyViewChanged_(){requestAnimationFrame((()=>{this._scrollHandler()}));this.recordHistoryPageView_()}recordHistoryClustersDuration_(){assert(this.historyClustersViewStartTime_!==null);const duration=(new Date).getTime()-this.historyClustersViewStartTime_.getTime();this.browserService_.recordLongTime("History.Clusters.WebUISessionDuration",duration);this.historyClustersViewStartTime_=null}hasDrawerChanged_(){const drawer=this.$.drawer.getIfExists();if(!this.hasDrawer_&&drawer&&drawer.open){drawer.cancel()}}getSelectedPage_(selectedPage,_items){return selectedPage}closeDrawer_(){const drawer=this.$.drawer.get();if(drawer&&drawer.open){drawer.close()}}recordHistoryPageView_(){let histogramValue=HistoryPageViewHistogram.END;switch(this.selectedPage_){case Page.HISTORY_CLUSTERS:histogramValue=HistoryPageViewHistogram.JOURNEYS;break;case Page.SYNCED_TABS:histogramValue=this.isUserSignedIn_?HistoryPageViewHistogram.SYNCED_TABS:HistoryPageViewHistogram.SIGNIN_PROMO;break;default:histogramValue=HistoryPageViewHistogram.HISTORY;break}this.browserService_.recordHistogram("History.HistoryPageView",histogramValue,HistoryPageViewHistogram.END)}handleFindShortcut(modalContextOpen){if(modalContextOpen){return false}this.$.toolbar.searchField.showAndFocus();return true}searchInputHasFocus(){return this.$.toolbar.searchField.isSearchFocused()}setHasDrawerForTesting(enabled){this.hasDrawer_=enabled}}customElements.define(HistoryAppElement.is,HistoryAppElement);export{BrowserProxyImpl,BrowserServiceImpl,ClusterAction,HistoryAppElement,HistoryItemElement,HistoryListElement,HistoryPageViewHistogram,HistorySideBarElement,HistoryToolbarElement,MetricsProxyImpl,PageCallbackRouter,PageHandlerRemote,RelatedSearchAction,VisitAction,VisitType,ensureLazyLoaded,getTrustedHTML,listenForPrivilegedLinkClicks};