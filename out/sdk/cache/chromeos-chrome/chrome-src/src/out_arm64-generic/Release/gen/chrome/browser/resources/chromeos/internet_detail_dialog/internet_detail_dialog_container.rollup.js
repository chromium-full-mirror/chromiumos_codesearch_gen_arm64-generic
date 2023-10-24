import{Polymer,dom,html,Base,PolymerElement,mixinBehaviors,flush,dedupingMixin,useShadow,Templatizer,OptionalMutableDataBehavior,animationFrame,microTask,idlePeriod,Debouncer,enqueueDebouncer,matches,translate,FlattenedNodesObserver,afterNextRender}from"chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js";import{ActivationStateType,InhibitReason,SecurityType,VpnType,ProxyMode,AuthenticationType,MatchType,HiddenSsidMode,SubjectAltName_Type,ApnState,ApnAuthenticationType,ApnIpType,ApnType,NO_ROUTING_PREFIX,CrosNetworkConfigObserverReceiver,StartConnectResult,MAX_NUM_CUSTOM_APNS}from"chrome://resources/mojo/chromeos/services/network_config/public/mojom/cros_network_config.mojom-webui.js";import{PortalState,ConnectionStateType,DeviceStateType,NetworkType,OncSource,PolicySource,IPConfigType}from"chrome://resources/mojo/chromeos/services/network_config/public/mojom/network_types.mojom-webui.js";import{loadTimeData}from"chrome://resources/ash/common/load_time_data.m.js";import"chrome://resources/mojo/services/network/public/mojom/ip_address.mojom-webui.js";import{MojoInterfaceProviderImpl}from"chrome://resources/ash/common/network/mojo_interface_provider.js";import{HotspotState}from"chrome://resources/ash/common/hotspot/cros_hotspot_config.mojom-webui.js";import"./strings.m.js";import{mojo}from"chrome://resources/mojo/mojo/public/js/bindings.js";
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/class IronMeta{constructor(options){IronMeta[" "](options);this.type=options&&options.type||"default";this.key=options&&options.key;if(options&&"value"in options){this.value=options.value}}get value(){var type=this.type;var key=this.key;if(type&&key){return IronMeta.types[type]&&IronMeta.types[type][key]}}set value(value){var type=this.type;var key=this.key;if(type&&key){type=IronMeta.types[type]=IronMeta.types[type]||{};if(value==null){delete type[key]}else{type[key]=value}}}get list(){var type=this.type;if(type){var items=IronMeta.types[this.type];if(!items){return[]}return Object.keys(items).map((function(key){return metaDatas[this.type][key]}),this)}}byKey(key){this.key=key;return this.value}}IronMeta[" "]=function(){};IronMeta.types={};var metaDatas=IronMeta.types;Polymer({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:true},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:true},__computeMeta:function(type,key,value){var meta=new IronMeta({type:type,key:key});if(value!==undefined&&value!==meta.value){meta.value=value}else if(this.value!==meta.value){this.value=meta.value}return meta},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(self){if(self){this.value=this}},byKey:function(key){return new IronMeta({type:this.type,key:key}).value}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Polymer({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:false},useGlobalRtlAttribute:{type:Boolean,value:false}},created:function(){this._meta=new IronMeta({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){this._icons=this._createIconMap();return Object.keys(this._icons).map((function(n){return this.name+":"+n}),this)},applyIcon:function(element,iconName){this.removeIcon(element);var svg=this._cloneIcon(iconName,this.rtlMirroring&&this._targetIsRTL(element));if(svg){var pde=dom(element.root||element);pde.insertBefore(svg,pde.childNodes[0]);return element._svgIcon=svg}return null},createIcon:function(iconName,targetIsRTL){return this._cloneIcon(iconName,this.rtlMirroring&&targetIsRTL)},removeIcon:function(element){if(element._svgIcon){dom(element.root||element).removeChild(element._svgIcon);element._svgIcon=null}},_targetIsRTL:function(target){if(this.__targetIsRTL==null){if(this.useGlobalRtlAttribute){var globalElement=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL=globalElement.getAttribute("dir")==="rtl"}else{if(target&&target.nodeType!==Node.ELEMENT_NODE){target=target.host}this.__targetIsRTL=target&&window.getComputedStyle(target)["direction"]==="rtl"}}return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null;this._meta.key=this.name;this._meta.value=this;this.async((function(){this.fire("iron-iconset-added",this,{node:window})}))},_createIconMap:function(){var icons=Object.create(null);dom(this).querySelectorAll("[id]").forEach((function(icon){icons[icon.id]=icon}));return icons},_cloneIcon:function(id,mirrorAllowed){this._icons=this._icons||this._createIconMap();return this._prepareSvgClone(this._icons[id],this.size,mirrorAllowed)},_prepareSvgClone:function(sourceSvg,size,mirrorAllowed){if(sourceSvg){var content=sourceSvg.cloneNode(true),svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),viewBox=content.getAttribute("viewBox")||"0 0 "+size+" "+size,cssText="pointer-events: none; display: block; width: 100%; height: 100%;";if(mirrorAllowed&&content.hasAttribute("mirror-in-rtl")){cssText+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"}svg.setAttribute("viewBox",viewBox);svg.setAttribute("preserveAspectRatio","xMidYMid meet");svg.setAttribute("focusable","false");svg.style.cssText=cssText;svg.appendChild(content).removeAttribute("id");return svg}return null}});const template$4=html`
<iron-iconset-svg name="cr20" size="20">
  <svg>
    <defs>
      
      <g id="block">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM2 10C2 5.58 5.58 2 10 2C11.85 2 13.55 2.63 14.9 3.69L3.69 14.9C2.63 13.55 2 11.85 2 10ZM5.1 16.31C6.45 17.37 8.15 18 10 18C14.42 18 18 14.42 18 10C18 8.15 17.37 6.45 16.31 5.1L5.1 16.31Z">
        </path>
      </g>
      <g id="cloud-off">
        <path d="M16 18.125L13.875 16H5C3.88889 16 2.94444 15.6111 2.16667 14.8333C1.38889 14.0556 1 13.1111 1 12C1 10.9444 1.36111 10.0347 2.08333 9.27083C2.80556 8.50694 3.6875 8.09028 4.72917 8.02083C4.77083 7.86805 4.8125 7.72222 4.85417 7.58333C4.90972 7.44444 4.97222 7.30555 5.04167 7.16667L1.875 4L2.9375 2.9375L17.0625 17.0625L16 18.125ZM5 14.5H12.375L6.20833 8.33333C6.15278 8.51389 6.09722 8.70139 6.04167 8.89583C6 9.07639 5.95139 9.25694 5.89583 9.4375L4.83333 9.52083C4.16667 9.57639 3.61111 9.84028 3.16667 10.3125C2.72222 10.7708 2.5 11.3333 2.5 12C2.5 12.6944 2.74306 13.2847 3.22917 13.7708C3.71528 14.2569 4.30556 14.5 5 14.5ZM17.5 15.375L16.3958 14.2917C16.7153 14.125 16.9792 13.8819 17.1875 13.5625C17.3958 13.2431 17.5 12.8889 17.5 12.5C17.5 11.9444 17.3056 11.4722 16.9167 11.0833C16.5278 10.6944 16.0556 10.5 15.5 10.5H14.125L14 9.14583C13.9028 8.11806 13.4722 7.25694 12.7083 6.5625C11.9444 5.85417 11.0417 5.5 10 5.5C9.65278 5.5 9.31944 5.54167 9 5.625C8.69444 5.70833 8.39583 5.82639 8.10417 5.97917L7.02083 4.89583C7.46528 4.61806 7.93056 4.40278 8.41667 4.25C8.91667 4.08333 9.44444 4 10 4C11.4306 4 12.6736 4.48611 13.7292 5.45833C14.7847 6.41667 15.375 7.59722 15.5 9C16.4722 9 17.2986 9.34028 17.9792 10.0208C18.6597 10.7014 19 11.5278 19 12.5C19 13.0972 18.8611 13.6458 18.5833 14.1458C18.3194 14.6458 17.9583 15.0556 17.5 15.375Z">
        </path>
      </g>
      <g id="domain">
        <path d="M2,3 L2,17 L11.8267655,17 L13.7904799,17 L18,17 L18,7 L12,7 L12,3 L2,3 Z M8,13 L10,13 L10,15 L8,15 L8,13 Z M4,13 L6,13 L6,15 L4,15 L4,13 Z M8,9 L10,9 L10,11 L8,11 L8,9 Z M4,9 L6,9 L6,11 L4,11 L4,9 Z M12,9 L16,9 L16,15 L12,15 L12,9 Z M12,11 L14,11 L14,13 L12,13 L12,11 Z M8,5 L10,5 L10,7 L8,7 L8,5 Z M4,5 L6,5 L6,7 L4,7 L4,5 Z">
        </path>
      </g>
      <g id="kite">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.6327 8.00094L10.3199 2L16 8.00094L10.1848 16.8673C10.0995 16.9873 10.0071 17.1074 9.90047 17.2199C9.42417 17.7225 8.79147 18 8.11611 18C7.44076 18 6.80806 17.7225 6.33175 17.2199C5.85545 16.7173 5.59242 16.0497 5.59242 15.3371C5.59242 14.977 5.46445 14.647 5.22275 14.3919C4.98104 14.1369 4.66825 14.0019 4.32701 14.0019H4V12.6667H4.32701C5.00237 12.6667 5.63507 12.9442 6.11137 13.4468C6.58768 13.9494 6.85071 14.617 6.85071 15.3296C6.85071 15.6896 6.97867 16.0197 7.22038 16.2747C7.46209 16.5298 7.77488 16.6648 8.11611 16.6648C8.45735 16.6648 8.77014 16.5223 9.01185 16.2747C9.02396 16.2601 9.03607 16.246 9.04808 16.2319C9.08541 16.1883 9.12176 16.1458 9.15403 16.0947L9.55213 15.4946L4.6327 8.00094ZM10.3199 13.9371L6.53802 8.17116L10.3199 4.1814L14.0963 8.17103L10.3199 13.9371Z">
        </path>
      </g>
      <g id="menu">
        <path d="M2 4h16v2H2zM2 9h16v2H2zM2 14h16v2H2z"></path>
      </g>
      
        <g id="banner-warning">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.13177 1.50386C9.51566 0.832046 10.4844 0.832046 10.8683 1.50386L18.8683 15.5039C19.2492 16.1705 18.7678 17 18 17H2.00001C1.23219 17 0.750823 16.1705 1.13177 15.5039L9.13177 1.50386ZM10 4.01556L3.72321 15H16.2768L10 4.01556ZM9 11H11V7H9V11ZM11 14H9V12H11V14Z">
          </path>
        </g>
        <g id="warning">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.13177 1.50386C9.51566 0.832046 10.4844 0.832046 10.8683 1.50386L18.8683 15.5039C19.2492 16.1705 18.7678 17 18 17H2.00001C1.23219 17 0.750823 16.1705 1.13177 15.5039L9.13177 1.50386ZM10 4.01556L3.72321 15H16.2768L10 4.01556ZM9 11H11V7H9V11ZM11 14H9V12H11V14Z">
          </path>
        </g>
      
  </defs></svg>
</iron-iconset-svg>


<iron-iconset-svg name="cr" size="24">
  <svg>
    <defs>
      
      <g id="account-child-invert" viewBox="0 0 48 48">
        <path d="M24 4c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6z"></path>
        <path fill="none" d="M0 0h48v48H0V0z"></path>
        <circle fill="none" cx="24" cy="26" r="4"></circle>
        <path d="M24 18c-6.16 0-13 3.12-13 7.23v11.54c0 2.32 2.19 4.33 5.2 5.63 2.32 1 5.12 1.59 7.8 1.59.66 0 1.33-.06 2-.14v-5.2c-.67.08-1.34.14-2 .14-2.63 0-5.39-.57-7.68-1.55.67-2.12 4.34-3.65 7.68-3.65.86 0 1.75.11 2.6.29 2.79.62 5.2 2.15 5.2 4.04v4.47c3.01-1.31 5.2-3.31 5.2-5.63V25.23C37 21.12 30.16 18 24 18zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z">
        </path>
      </g>
      <g id="add">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
      </g>
      <g id="arrow-back">
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z">
        </path>
      </g>
      <g id="arrow-drop-up">
        <path d="M7 14l5-5 5 5z"></path>
      </g>
      <g id="arrow-drop-down">
        <path d="M7 10l5 5 5-5z"></path>
      </g>
      <g id="arrow-forward">
        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
        </path>
      </g>
      <g id="arrow-right">
        <path d="M10 7l5 5-5 5z"></path>
      </g>
      
        <g id="bluetooth">
          <path d="M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z">
          </path>
        </g>
        <g id="camera-alt">
          <circle cx="12" cy="12" r="3.2"></circle>
          <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z">
          </path>
        </g>
        <g id="work">
          <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z">
          </path>
        </g>
      
      <g id="cancel">
        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z">
        </path>
      </g>
      <g id="check">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
      </g>
      <g id="check-circle">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z">
        </path>
      </g>
      <g id="chevron-left">
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
      </g>
      <g id="chevron-right">
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
      </g>
      <g id="clear">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
        </path>
      </g>
      <g id="close">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
        </path>
      </g>
      <g id="computer">
        <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z">
        </path>
      </g>
      <g id="create">
        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z">
        </path>
      </g>
      <g id="delete">
        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z">
        </path>
      </g>
      <g id="domain">
        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z">
        </path>
      </g>
      <g id="error">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z">
        </path>
      </g>
      <g id="error-outline">
        <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z">
        </path>
      </g>
      <g id="expand-less">
        <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
      </g>
      <g id="expand-more">
        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
      </g>
      <g id="extension">
        <path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z">
        </path>
      </g>
      <g id="file-download">
        <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path>
      </g>
      
        <g id="folder-filled">
          <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z">
          </path>
        </g>
      
      <g id="fullscreen">
        <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z">
        </path>
      </g>
      <g id="group">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z">
        </path>
      </g>
      <g id="help-outline">
        <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
        </path>
      </g>
      <g id="history">
        <path d="M12.945312 22.75 C 10.320312 22.75 8.074219 21.839844 6.207031 20.019531 C 4.335938 18.199219 3.359375 15.972656 3.269531 13.34375 L 5.089844 13.34375 C 5.175781 15.472656 5.972656 17.273438 7.480469 18.742188 C 8.988281 20.210938 10.808594 20.945312 12.945312 20.945312 C 15.179688 20.945312 17.070312 20.164062 18.621094 18.601562 C 20.167969 17.039062 20.945312 15.144531 20.945312 12.910156 C 20.945312 10.714844 20.164062 8.855469 18.601562 7.335938 C 17.039062 5.816406 15.15625 5.054688 12.945312 5.054688 C 11.710938 5.054688 10.554688 5.339844 9.480469 5.902344 C 8.402344 6.46875 7.476562 7.226562 6.699219 8.179688 L 9.585938 8.179688 L 9.585938 9.984375 L 3.648438 9.984375 L 3.648438 4.0625 L 5.453125 4.0625 L 5.453125 6.824219 C 6.386719 5.707031 7.503906 4.828125 8.804688 4.199219 C 10.109375 3.566406 11.488281 3.25 12.945312 3.25 C 14.300781 3.25 15.570312 3.503906 16.761719 4.011719 C 17.949219 4.519531 18.988281 5.214844 19.875 6.089844 C 20.761719 6.964844 21.464844 7.992188 21.976562 9.167969 C 22.492188 10.34375 22.75 11.609375 22.75 12.964844 C 22.75 14.316406 22.492188 15.589844 21.976562 16.777344 C 21.464844 17.964844 20.761719 19.003906 19.875 19.882812 C 18.988281 20.765625 17.949219 21.464844 16.761719 21.976562 C 15.570312 22.492188 14.300781 22.75 12.945312 22.75 Z M 16.269531 17.460938 L 12.117188 13.34375 L 12.117188 7.527344 L 13.921875 7.527344 L 13.921875 12.601562 L 17.550781 16.179688 Z M 16.269531 17.460938">
        </path>
      </g>
      <g id="info">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z">
        </path>
      </g>
      <g id="info-outline">
        <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z">
        </path>
      </g>
      <g id="insert-drive-file">
        <path d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z">
        </path>
      </g>
      <g id="location-on">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z">
        </path>
      </g>
      <g id="mic">
        <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z">
        </path>
      </g>
      <g id="more-vert">
        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z">
        </path>
      </g>
      <g id="open-in-new">
        <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z">
        </path>
      </g>
      <g id="person">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z">
        </path>
      </g>
      <g id="phonelink">
        <path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z">
        </path>
      </g>
      <g id="print">
        <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z">
        </path>
      </g>
      <g id="schedule">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z">
        </path>
      </g>
      <g id="search">
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
        </path>
      </g>
      <g id="security">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z">
        </path>
      </g>
      
        <g id="sim-card-alert">
          <path d="M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 15h-2v-2h2v2zm0-4h-2V8h2v5z">
          </path>
        </g>
        <g id="sim-lock">
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z">
          </path>
        </g>
        <g id="sms-connect">
          <path d="M20,2C21.1,2 22,2.9 22,4L22,16C22,17.1 21.1,18 20,18L6,18L2,22L2.01,4C2.01,2.9 2.9,2 4,2L20,2ZM8,8L4,12L8,16L8,13L14,13L14,11L8,11L8,8ZM19.666,7.872L16.038,4.372L16.038,6.997L10,6.997L10,9L16.038,9L16.038,11.372L19.666,7.872Z">
          </path>
        </g>
      
      
      <g id="settings_icon">
        <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z">
        </path>
      </g>
      <g id="star">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
        </path>
      </g>
      <g id="sync">
        <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z">
        </path>
      </g>
      <g id="thumbs-down">
        <path d="M6 3h11v13l-7 7-1.25-1.25a1.454 1.454 0 0 1-.3-.475c-.067-.2-.1-.392-.1-.575v-.35L9.45 16H3c-.533 0-1-.2-1.4-.6-.4-.4-.6-.867-.6-1.4v-2c0-.117.017-.242.05-.375s.067-.258.1-.375l3-7.05c.15-.333.4-.617.75-.85C5.25 3.117 5.617 3 6 3Zm9 2H6l-3 7v2h9l-1.35 5.5L15 15.15V5Zm0 10.15V5v10.15Zm2 .85v-2h3V5h-3V3h5v13h-5Z">
        </path>
      </g>
      <g id="thumbs-up">
        <path d="M18 21H7V8l7-7 1.25 1.25c.117.117.208.275.275.475.083.2.125.392.125.575v.35L14.55 8H21c.533 0 1 .2 1.4.6.4.4.6.867.6 1.4v2c0 .117-.017.242-.05.375s-.067.258-.1.375l-3 7.05c-.15.333-.4.617-.75.85-.35.233-.717.35-1.1.35Zm-9-2h9l3-7v-2h-9l1.35-5.5L9 8.85V19ZM9 8.85V19 8.85ZM7 8v2H4v9h3v2H2V8h5Z">
        </path>
      </g>
      <g id="videocam">
        <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z">
        </path>
      </g>
      <g id="warning">
        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path>
      </g>
    </defs>
  </svg>
</iron-iconset-svg>
`;document.head.appendChild(template$4.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const template$3=html`
<custom-style>
  <style is="custom-style">
    html {

      /* Material Design color palette for Google products */

      --google-red-100-rgb: 244, 199, 195;  /* #f4c7c3 */
      --google-red-100: rgb(var(--google-red-100-rgb));
      --google-red-300-rgb: 230, 124, 115;  /* #e67c73 */
      --google-red-300: rgb(var(--google-red-300-rgb));
      --google-red-500-rgb: 219, 68, 55;  /* #db4437 */
      --google-red-500: rgb(var(--google-red-500-rgb));
      --google-red-700-rgb: 197, 57, 41;  /* #c53929 */
      --google-red-700: rgb(var(--google-red-700-rgb));

      --google-blue-100-rgb: 198, 218, 252;  /* #c6dafc */
      --google-blue-100: rgb(var(--google-blue-100-rgb));
      --google-blue-300-rgb: 123, 170, 247;  /* #7baaf7 */
      --google-blue-300: rgb(var(--google-blue-300-rgb));
      --google-blue-500-rgb: 66, 133, 244;  /* #4285f4 */
      --google-blue-500: rgb(var(--google-blue-500-rgb));
      --google-blue-700-rgb: 51, 103, 214;  /* #3367d6 */
      --google-blue-700: rgb(var(--google-blue-700-rgb));

      --google-green-100-rgb: 183, 225, 205;  /* #b7e1cd */
      --google-green-100: rgb(var(--google-green-100-rgb));
      --google-green-300-rgb: 87, 187, 138;  /* #57bb8a */
      --google-green-300: rgb(var(--google-green-300-rgb));
      --google-green-500-rgb: 15, 157, 88;  /* #0f9d58 */
      --google-green-500: rgb(var(--google-green-500-rgb));
      --google-green-700-rgb: 11, 128, 67;  /* #0b8043 */
      --google-green-700: rgb(var(--google-green-700-rgb));

      --google-yellow-100-rgb: 252, 232, 178;  /* #fce8b2 */
      --google-yellow-100: rgb(var(--google-yellow-100-rgb));
      --google-yellow-300-rgb: 247, 203, 77;  /* #f7cb4d */
      --google-yellow-300: rgb(var(--google-yellow-300-rgb));
      --google-yellow-500-rgb: 244, 180, 0;  /* #f4b400 */
      --google-yellow-500: rgb(var(--google-yellow-500-rgb));
      --google-yellow-700-rgb: 240, 147, 0;  /* #f09300 */
      --google-yellow-700: rgb(var(--google-yellow-700-rgb));

      --google-grey-100-rgb: 245, 245, 245;  /* #f5f5f5 */
      --google-grey-100: rgb(var(--google-grey-100-rgb));
      --google-grey-300-rgb: 224, 224, 224;  /* #e0e0e0 */
      --google-grey-300: rgb(var(--google-grey-300-rgb));
      --google-grey-500-rgb: 158, 158, 158;  /* #9e9e9e */
      --google-grey-500: rgb(var(--google-grey-500-rgb));
      --google-grey-700-rgb: 97, 97, 97;  /* #616161 */
      --google-grey-700: rgb(var(--google-grey-700-rgb));

      /* Material Design color palette from online spec document */

      --paper-red-50: #ffebee;
      --paper-red-100: #ffcdd2;
      --paper-red-200: #ef9a9a;
      --paper-red-300: #e57373;
      --paper-red-400: #ef5350;
      --paper-red-500: #f44336;
      --paper-red-600: #e53935;
      --paper-red-700: #d32f2f;
      --paper-red-800: #c62828;
      --paper-red-900: #b71c1c;
      --paper-red-a100: #ff8a80;
      --paper-red-a200: #ff5252;
      --paper-red-a400: #ff1744;
      --paper-red-a700: #d50000;

      --paper-light-blue-50: #e1f5fe;
      --paper-light-blue-100: #b3e5fc;
      --paper-light-blue-200: #81d4fa;
      --paper-light-blue-300: #4fc3f7;
      --paper-light-blue-400: #29b6f6;
      --paper-light-blue-500: #03a9f4;
      --paper-light-blue-600: #039be5;
      --paper-light-blue-700: #0288d1;
      --paper-light-blue-800: #0277bd;
      --paper-light-blue-900: #01579b;
      --paper-light-blue-a100: #80d8ff;
      --paper-light-blue-a200: #40c4ff;
      --paper-light-blue-a400: #00b0ff;
      --paper-light-blue-a700: #0091ea;

      --paper-yellow-50: #fffde7;
      --paper-yellow-100: #fff9c4;
      --paper-yellow-200: #fff59d;
      --paper-yellow-300: #fff176;
      --paper-yellow-400: #ffee58;
      --paper-yellow-500: #ffeb3b;
      --paper-yellow-600: #fdd835;
      --paper-yellow-700: #fbc02d;
      --paper-yellow-800: #f9a825;
      --paper-yellow-900: #f57f17;
      --paper-yellow-a100: #ffff8d;
      --paper-yellow-a200: #ffff00;
      --paper-yellow-a400: #ffea00;
      --paper-yellow-a700: #ffd600;

      --paper-orange-50: #fff3e0;
      --paper-orange-100: #ffe0b2;
      --paper-orange-200: #ffcc80;
      --paper-orange-300: #ffb74d;
      --paper-orange-400: #ffa726;
      --paper-orange-500: #ff9800;
      --paper-orange-600: #fb8c00;
      --paper-orange-700: #f57c00;
      --paper-orange-800: #ef6c00;
      --paper-orange-900: #e65100;
      --paper-orange-a100: #ffd180;
      --paper-orange-a200: #ffab40;
      --paper-orange-a400: #ff9100;
      --paper-orange-a700: #ff6500;

      --paper-grey-50: #fafafa;
      --paper-grey-100: #f5f5f5;
      --paper-grey-200: #eeeeee;
      --paper-grey-300: #e0e0e0;
      --paper-grey-400: #bdbdbd;
      --paper-grey-500: #9e9e9e;
      --paper-grey-600: #757575;
      --paper-grey-700: #616161;
      --paper-grey-800: #424242;
      --paper-grey-900: #212121;

      --paper-blue-grey-50: #eceff1;
      --paper-blue-grey-100: #cfd8dc;
      --paper-blue-grey-200: #b0bec5;
      --paper-blue-grey-300: #90a4ae;
      --paper-blue-grey-400: #78909c;
      --paper-blue-grey-500: #607d8b;
      --paper-blue-grey-600: #546e7a;
      --paper-blue-grey-700: #455a64;
      --paper-blue-grey-800: #37474f;
      --paper-blue-grey-900: #263238;

      /* opacity for dark text on a light background */
      --dark-divider-opacity: 0.12;
      --dark-disabled-opacity: 0.38; /* or hint text or icon */
      --dark-secondary-opacity: 0.54;
      --dark-primary-opacity: 0.87;

      /* opacity for light text on a dark background */
      --light-divider-opacity: 0.12;
      --light-disabled-opacity: 0.3; /* or hint text or icon */
      --light-secondary-opacity: 0.7;
      --light-primary-opacity: 1.0;

    }

  </style>
</custom-style>
`;template$3.setAttribute("style","display: none;");document.head.appendChild(template$3.content);const template$2=html`
<custom-style>
  <style>
html{--google-blue-50-rgb:232,240,254;--google-blue-50:rgb(var(--google-blue-50-rgb));--google-blue-100-rgb:210,227,252;--google-blue-100:rgb(var(--google-blue-100-rgb));--google-blue-200-rgb:174,203,250;--google-blue-200:rgb(var(--google-blue-200-rgb));--google-blue-300-rgb:138,180,248;--google-blue-300:rgb(var(--google-blue-300-rgb));--google-blue-400-rgb:102,157,246;--google-blue-400:rgb(var(--google-blue-400-rgb));--google-blue-500-rgb:66,133,244;--google-blue-500:rgb(var(--google-blue-500-rgb));--google-blue-600-rgb:26,115,232;--google-blue-600:rgb(var(--google-blue-600-rgb));--google-blue-700-rgb:25,103,210;--google-blue-700:rgb(var(--google-blue-700-rgb));--google-blue-800-rgb:24,90,188;--google-blue-800:rgb(var(--google-blue-800-rgb));--google-blue-900-rgb:23,78,166;--google-blue-900:rgb(var(--google-blue-900-rgb));--google-green-50-rgb:230,244,234;--google-green-50:rgb(var(--google-green-50-rgb));--google-green-200-rgb:168,218,181;--google-green-200:rgb(var(--google-green-200-rgb));--google-green-300-rgb:129,201,149;--google-green-300:rgb(var(--google-green-300-rgb));--google-green-400-rgb:91,185,116;--google-green-400:rgb(var(--google-green-400-rgb));--google-green-500-rgb:52,168,83;--google-green-500:rgb(var(--google-green-500-rgb));--google-green-600-rgb:30,142,62;--google-green-600:rgb(var(--google-green-600-rgb));--google-green-700-rgb:24,128,56;--google-green-700:rgb(var(--google-green-700-rgb));--google-green-800-rgb:19,115,51;--google-green-800:rgb(var(--google-green-800-rgb));--google-green-900-rgb:13,101,45;--google-green-900:rgb(var(--google-green-900-rgb));--google-grey-50-rgb:248,249,250;--google-grey-50:rgb(var(--google-grey-50-rgb));--google-grey-100-rgb:241,243,244;--google-grey-100:rgb(var(--google-grey-100-rgb));--google-grey-200-rgb:232,234,237;--google-grey-200:rgb(var(--google-grey-200-rgb));--google-grey-300-rgb:218,220,224;--google-grey-300:rgb(var(--google-grey-300-rgb));--google-grey-400-rgb:189,193,198;--google-grey-400:rgb(var(--google-grey-400-rgb));--google-grey-500-rgb:154,160,166;--google-grey-500:rgb(var(--google-grey-500-rgb));--google-grey-600-rgb:128,134,139;--google-grey-600:rgb(var(--google-grey-600-rgb));--google-grey-700-rgb:95,99,104;--google-grey-700:rgb(var(--google-grey-700-rgb));--google-grey-800-rgb:60,64,67;--google-grey-800:rgb(var(--google-grey-800-rgb));--google-grey-900-rgb:32,33,36;--google-grey-900:rgb(var(--google-grey-900-rgb));--google-grey-900-white-4-percent:#292a2d;--google-purple-200-rgb:215,174,251;--google-purple-200:rgb(var(--google-purple-200-rgb));--google-purple-900-rgb:104,29,168;--google-purple-900:rgb(var(--google-purple-900-rgb));--google-red-300-rgb:242,139,130;--google-red-300:rgb(var(--google-red-300-rgb));--google-red-500-rgb:234,67,53;--google-red-500:rgb(var(--google-red-500-rgb));--google-red-600-rgb:217,48,37;--google-red-600:rgb(var(--google-red-600-rgb));--google-yellow-50-rgb:254,247,224;--google-yellow-50:rgb(var(--google-yellow-50-rgb));--google-yellow-100-rgb:254,239,195;--google-yellow-100:rgb(var(--google-yellow-100-rgb));--google-yellow-200-rgb:253,226,147;--google-yellow-200:rgb(var(--google-yellow-200-rgb));--google-yellow-300-rgb:253,214,51;--google-yellow-300:rgb(var(--google-yellow-300-rgb));--google-yellow-400-rgb:252,201,52;--google-yellow-400:rgb(var(--google-yellow-400-rgb));--google-yellow-500-rgb:251,188,4;--google-yellow-500:rgb(var(--google-yellow-500-rgb));--cr-primary-text-color:var(--google-grey-900);--cr-secondary-text-color:var(--google-grey-700);--cr-card-background-color:white;--cr-shadow-color:var(--google-grey-800);--cr-shadow-key-color_:color-mix(in srgb, var(--cr-shadow-color) 30%, transparent);--cr-shadow-ambient-color_:color-mix(in srgb, var(--cr-shadow-color) 15%, transparent);--cr-elevation-1:var(--cr-shadow-key-color_) 0 1px 2px 0,var(--cr-shadow-ambient-color_) 0 1px 3px 1px;--cr-elevation-2:var(--cr-shadow-key-color_) 0 1px 2px 0,var(--cr-shadow-ambient-color_) 0 2px 6px 2px;--cr-elevation-3:var(--cr-shadow-key-color_) 0 1px 3px 0,var(--cr-shadow-ambient-color_) 0 4px 8px 3px;--cr-elevation-4:var(--cr-shadow-key-color_) 0 2px 3px 0,var(--cr-shadow-ambient-color_) 0 6px 10px 4px;--cr-elevation-5:var(--cr-shadow-key-color_) 0 4px 4px 0,var(--cr-shadow-ambient-color_) 0 8px 12px 6px;--cr-card-shadow:var(--cr-elevation-2);--cr-checked-color:var(--google-blue-600);--cr-focused-item-color:var(--google-grey-300);--cr-form-field-label-color:var(--google-grey-700);--cr-hairline-rgb:0,0,0;--cr-iph-anchor-highlight-color:rgba(var(--google-blue-600-rgb), 0.1);--cr-link-color:var(--google-blue-700);--cr-menu-background-color:white;--cr-menu-background-focus-color:var(--google-grey-400);--cr-menu-shadow:0 2px 6px var(--paper-grey-500);--cr-separator-color:rgba(0, 0, 0, .06);--cr-title-text-color:rgb(90, 90, 90);--cr-toolbar-background-color:white;--cr-hover-background-color:rgba(var(--google-grey-900-rgb), .1);--cr-active-background-color:rgba(var(--google-grey-900-rgb), .16);--cr-focus-outline-color:rgba(var(--google-blue-600-rgb), .4)}@media (prefers-color-scheme:dark){html{--cr-primary-text-color:var(--google-grey-200);--cr-secondary-text-color:var(--google-grey-500);--cr-card-background-color:var(--google-grey-900-white-4-percent);--cr-card-shadow-color-rgb:0,0,0;--cr-checked-color:var(--google-blue-300);--cr-focused-item-color:var(--google-grey-800);--cr-form-field-label-color:var(--dark-secondary-color);--cr-hairline-rgb:255,255,255;--cr-iph-anchor-highlight-color:rgba(var(--google-grey-100-rgb), 0.1);--cr-link-color:var(--google-blue-300);--cr-menu-background-color:var(--google-grey-900);--cr-menu-background-focus-color:var(--google-grey-700);--cr-menu-background-sheen:rgba(255, 255, 255, .06);--cr-menu-shadow:rgba(0, 0, 0, .3) 0 1px 2px 0,rgba(0, 0, 0, .15) 0 3px 6px 2px;--cr-separator-color:rgba(255, 255, 255, .1);--cr-title-text-color:var(--cr-primary-text-color);--cr-toolbar-background-color:var(--google-grey-900-white-4-percent);--cr-hover-background-color:rgba(255, 255, 255, .1);--cr-active-background-color:rgba(var(--google-grey-200-rgb), .16);--cr-focus-outline-color:rgba(var(--google-blue-300-rgb), .4)}}@media (forced-colors:active){html{--cr-focus-outline-hcm:2px solid transparent;--cr-border-hcm:2px solid transparent}}html{--cr-button-edge-spacing:12px;--cr-button-height:32px;--cr-controlled-by-spacing:24px;--cr-default-input-max-width:264px;--cr-icon-ripple-size:36px;--cr-icon-ripple-padding:8px;--cr-icon-size:20px;--cr-icon-button-margin-start:16px;--cr-icon-ripple-margin:calc(var(--cr-icon-ripple-padding) * -1);--cr-section-min-height:48px;--cr-section-two-line-min-height:64px;--cr-section-padding:20px;--cr-section-vertical-padding:12px;--cr-section-indent-width:40px;--cr-section-indent-padding:calc(
      var(--cr-section-padding) + var(--cr-section-indent-width));--cr-section-vertical-margin:21px;--cr-centered-card-max-width:680px;--cr-centered-card-width-percentage:0.96;--cr-hairline:1px solid rgba(var(--cr-hairline-rgb), .14);--cr-separator-height:1px;--cr-separator-line:var(--cr-separator-height) solid var(--cr-separator-color);--cr-toolbar-overlay-animation-duration:150ms;--cr-toolbar-height:56px;--cr-container-shadow-height:6px;--cr-container-shadow-margin:calc(-1 * var(--cr-container-shadow-height));--cr-container-shadow-max-opacity:1;--cr-card-border-radius:8px;--cr-disabled-opacity:.38;--cr-form-field-bottom-spacing:16px;--cr-form-field-label-font-size:.625rem;--cr-form-field-label-height:1em;--cr-form-field-label-line-height:1}html[chrome-refresh-2023]{--cr-fallback-color-outline:rgb(116, 119, 117);--cr-fallback-color-primary:rgb(11, 87, 208);--cr-fallback-color-on-primary:rgb(255, 255, 255);--cr-fallback-color-primary-container:rgb(211, 227, 253);--cr-fallback-color-on-primary-container:rgb(4, 30, 73);--cr-fallback-color-secondary-container:rgb(194, 231, 255);--cr-fallback-color-on-secondary-container:rgb(0, 29, 53);--cr-fallback-color-neutral-container:rgb(242, 242, 242);--cr-fallback-color-neutral-outline:rgb(199, 199, 199);--cr-fallback-color-surface:rgb(255, 255, 255);--cr-fallback-color-on-surface-rgb:31,31,31;--cr-fallback-color-on-surface:rgb(var(--cr-fallback-color-on-surface-rgb));--cr-fallback-color-surface-variant:rgb(225, 227, 225);--cr-fallback-color-on-surface-variant:rgb(68, 71, 70);--cr-fallback-color-on-surface-subtle:rgb(71, 71, 71);--cr-fallback-color-inverse-primary:rgb(168, 199, 250);--cr-fallback-color-inverse-surface:rgb(48, 48, 48);--cr-fallback-color-inverse-on-surface:rgb(242, 242, 242);--cr-fallback-color-tonal-container:rgb(211, 227, 253);--cr-fallback-color-on-tonal-container:rgb(4, 30, 73);--cr-fallback-color-tonal-outline:rgb(168, 199, 250);--cr-fallback-color-error:rgb(179, 38, 30);--cr-fallback-color-divider:rgb(211, 227, 253);--cr-fallback-color-state-hover-on-prominent_:rgba(253, 252, 251, .1);--cr-fallback-color-state-on-subtle-rgb_:31,31,31;--cr-fallback-color-state-hover-on-subtle_:rgba(
      var(--cr-fallback-color-state-on-subtle-rgb_), .06);--cr-fallback-color-state-ripple-neutral-on-subtle_:rgba(
      var(--cr-fallback-color-state-on-subtle-rgb_), .08);--cr-fallback-color-state-ripple-primary-rgb_:124,172,248;--cr-fallback-color-state-ripple-primary_:rgba(
      var(--cr-fallback-color-state-ripple-primary-rgb_), 0.32);--cr-fallback-color-base-container:rgba(105, 145, 214, .12);--cr-fallback-color-disabled-background:rgba(
      var(--cr-fallback-color-on-surface-rgb), .12);--cr-fallback-color-disabled-foreground:rgba(
      var(--cr-fallback-color-on-surface-rgb), var(--cr-disabled-opacity));--cr-hover-background-color:var(--color-sys-state-hover,
      rgba(var(--cr-fallback-color-on-surface-rgb), .08));--cr-hover-on-prominent-background-color:var(
      --color-sys-state-hover-on-prominent,
      var(--cr-fallback-color-state-hover-on-prominent_));--cr-hover-on-subtle-background-color:var(
      --color-sys-state-hover-on-subtle,
      var(--cr-fallback-color-state-hover-on-subtle_));--cr-active-background-color:var(--color-sys-state-pressed,
      rgba(var(--cr-fallback-color-on-surface-rgb), .12));--cr-active-on-primary-background-color:var(
      --color-sys-state-ripple-primary,
      var(--cr-fallback-color-state-ripple-primary_));--cr-active-neutral-on-subtle-background-color:var(
      --color-sys-state-ripple-neutral-on-subtle,
      var(--cr-fallback-color-state-ripple-neutral-on-subtle_));--cr-focus-outline-color:var(--color-sys-state-focus-ring,
      var(--cr-fallback-color-primary));--cr-primary-text-color:var(--color-primary-foreground,
      var(--cr-fallback-color-on-surface));--cr-secondary-text-color:var(--color-secondary-foreground,
      var(--cr-fallback-color-on-surface-variant));--cr-link-color:var(--color-link-foreground-default,
      var(--cr-fallback-color-primary));--cr-button-height:36px;--cr-shadow-color:var(--color-sys-shadow, rgb(0, 0, 0))}@media (prefers-color-scheme:dark){html[chrome-refresh-2023]{--cr-fallback-color-outline:rgb(142, 145, 143);--cr-fallback-color-primary:rgb(168, 199, 250);--cr-fallback-color-on-primary:rgb(6, 46, 111);--cr-fallback-color-primary-container:rgb(8, 66, 160);--cr-fallback-color-on-primary-container:rgb(211, 227, 253);--cr-fallback-color-secondary-container:rgb(0, 74, 119);--cr-fallback-color-on-secondary-container:rgb(194, 231, 255);--cr-fallback-color-neutral-container:rgb(42, 42, 42);--cr-fallback-color-neutral-outline:rgb(117, 117, 117);--cr-fallback-color-surface:rgb(26, 27, 30);--cr-fallback-color-on-surface-rgb:227,227,227;--cr-fallback-color-surface-variant:rgb(68, 71, 70);--cr-fallback-color-on-surface-variant:rgb(196, 199, 197);--cr-fallback-color-on-surface-subtle:rgb(199, 199, 199);--cr-fallback-color-inverse-primary:rgb(11, 87, 208);--cr-fallback-color-inverse-surface:rgb(227, 227, 227);--cr-fallback-color-inverse-on-surface:rgb(31, 31, 31);--cr-fallback-color-tonal-container:rgb(0, 74, 119);--cr-fallback-color-on-tonal-container:rgb(194, 231, 255);--cr-fallback-color-tonal-outline:rgb(0, 99, 155);--cr-fallback-color-error:rgb(242, 184, 181);--cr-fallback-color-divider:rgb(71, 71, 71);--cr-fallback-color-state-hover-on-prominent_:rgba(31, 31, 31, .06);--cr-fallback-color-state-on-subtle-rgb_:253,252,251;--cr-fallback-color-state-hover-on-subtle_:rgba(
        var(--cr-fallback-color-state-on-subtle-rgb_), .10);--cr-fallback-color-state-ripple-neutral-on-subtle_:rgba(
        var(--cr-fallback-color-state-on-subtle-rgb_), .16);--cr-fallback-color-state-ripple-primary-rgb_:76,141,246;--cr-fallback-color-base-container:rgba(40, 40, 40, 1)}}@media (forced-colors:active){html[chrome-refresh-2023]{--cr-fallback-color-disabled-background:Canvas;--cr-fallback-color-disabled-foreground:GrayText}}
  </style>
</custom-style>
`;document.head.appendChild(template$2.content);const styleMod$9=document.createElement("dom-module");styleMod$9.appendChild(html`
  <template>
    <style>
:host([hidden]),[hidden]{display:none!important}
    </style>
  </template>
`.content);styleMod$9.register("cr-hidden-style");const styleMod$8=document.createElement("dom-module");styleMod$8.appendChild(html`
  <template>
    <style>
.icon-arrow-back{--cr-icon-image:url(chrome://resources/images/icon_arrow_back.svg)}.icon-arrow-dropdown{--cr-icon-image:url(chrome://resources/images/icon_arrow_dropdown.svg)}.icon-cancel{--cr-icon-image:url(chrome://resources/images/icon_cancel.svg)}.icon-clear{--cr-icon-image:url(chrome://resources/images/icon_clear.svg)}.icon-copy-content{--cr-icon-image:url(chrome://resources/images/icon_copy_content.svg)}.icon-delete-gray{--cr-icon-image:url(chrome://resources/images/icon_delete_gray.svg)}.icon-edit{--cr-icon-image:url(chrome://resources/images/icon_edit.svg)}.icon-file{--cr-icon-image:url(chrome://resources/images/icon_filetype_generic.svg)}.icon-folder-open{--cr-icon-image:url(chrome://resources/images/icon_folder_open.svg)}.icon-picture-delete{--cr-icon-image:url(chrome://resources/images/icon_picture_delete.svg)}.icon-expand-less{--cr-icon-image:url(chrome://resources/images/icon_expand_less.svg)}.icon-expand-more{--cr-icon-image:url(chrome://resources/images/icon_expand_more.svg)}.icon-external{--cr-icon-image:url(chrome://resources/images/open_in_new.svg)}.icon-more-vert{--cr-icon-image:url(chrome://resources/images/icon_more_vert.svg)}.icon-refresh{--cr-icon-image:url(chrome://resources/images/icon_refresh.svg)}.icon-search{--cr-icon-image:url(chrome://resources/images/icon_search.svg)}.icon-settings{--cr-icon-image:url(chrome://resources/images/icon_settings.svg)}.icon-visibility{--cr-icon-image:url(chrome://resources/images/icon_visibility.svg)}.icon-visibility-off{--cr-icon-image:url(chrome://resources/images/icon_visibility_off.svg)}.subpage-arrow{--cr-icon-image:url(chrome://resources/images/arrow_right.svg)}.cr-icon{-webkit-mask-image:var(--cr-icon-image);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--cr-icon-size);background-color:var(--cr-icon-color,var(--google-grey-700));flex-shrink:0;height:var(--cr-icon-ripple-size);margin-inline-end:var(--cr-icon-ripple-margin);margin-inline-start:var(--cr-icon-button-margin-start);user-select:none;width:var(--cr-icon-ripple-size)}:host-context([dir=rtl]) .cr-icon{transform:scaleX(-1)}.cr-icon.no-overlap{margin-inline-end:0;margin-inline-start:0}@media (prefers-color-scheme:dark){.cr-icon{background-color:var(--cr-icon-color,var(--google-grey-500))}}
    </style>
  </template>
`.content);styleMod$8.register("cr-icons");const styleMod$7=document.createElement("dom-module");styleMod$7.appendChild(html`
  <template>
    <style include="cr-hidden-style cr-icons">
:host,html{--scrollable-border-color:var(--google-grey-300)}@media (prefers-color-scheme:dark){:host,html{--scrollable-border-color:var(--google-grey-700)}}[actionable]{cursor:pointer}.hr{border-top:var(--cr-separator-line)}iron-list.cr-separators>:not([first]){border-top:var(--cr-separator-line)}[scrollable]{border-color:transparent;border-style:solid;border-width:1px 0;overflow-y:auto}[scrollable].is-scrolled{border-top-color:var(--scrollable-border-color)}[scrollable].can-scroll:not(.scrolled-to-bottom){border-bottom-color:var(--scrollable-border-color)}[scrollable] iron-list>:not(.no-outline):focus,[selectable]:focus,[selectable]>:focus{background-color:var(--cr-focused-item-color);outline:0}.scroll-container{display:flex;flex-direction:column;min-height:1px}[selectable]>*{cursor:pointer}.cr-centered-card-container{box-sizing:border-box;display:block;height:inherit;margin:0 auto;max-width:var(--cr-centered-card-max-width);min-width:550px;position:relative;width:calc(100% * var(--cr-centered-card-width-percentage))}.cr-container-shadow{box-shadow:inset 0 5px 6px -3px rgba(0,0,0,.4);height:var(--cr-container-shadow-height);left:0;margin:0 0 var(--cr-container-shadow-margin);opacity:0;pointer-events:none;position:relative;right:0;top:0;transition:opacity .5s;z-index:1}#cr-container-shadow-bottom{margin-bottom:0;margin-top:var(--cr-container-shadow-margin);transform:scaleY(-1)}#cr-container-shadow-bottom.has-shadow,#cr-container-shadow-top.has-shadow{opacity:var(--cr-container-shadow-max-opacity)}.cr-row{align-items:center;border-top:var(--cr-separator-line);display:flex;min-height:var(--cr-section-min-height);padding:0 var(--cr-section-padding)}.cr-row.continuation,.cr-row.first{border-top:none}.cr-row-gap{padding-inline-start:16px}.cr-button-gap{margin-inline-start:8px}paper-tooltip::part(tooltip){border-radius:var(--paper-tooltip-border-radius,2px);font-size:92.31%;font-weight:500;max-width:330px;min-width:var(--paper-tooltip-min-width,200px);padding:var(--paper-tooltip-padding,10px 8px)}.cr-padded-text{padding-block-end:var(--cr-section-vertical-padding);padding-block-start:var(--cr-section-vertical-padding)}.cr-title-text{color:var(--cr-title-text-color);font-size:107.6923%;font-weight:500}.cr-secondary-text{color:var(--cr-secondary-text-color);font-weight:400}.cr-form-field-label{color:var(--cr-form-field-label-color);display:block;font-size:var(--cr-form-field-label-font-size);font-weight:500;letter-spacing:.4px;line-height:var(--cr-form-field-label-line-height);margin-bottom:8px}.cr-vertical-tab{align-items:center;display:flex}.cr-vertical-tab::before{border-radius:0 3px 3px 0;content:'';display:block;flex-shrink:0;height:var(--cr-vertical-tab-height,100%);width:4px}.cr-vertical-tab.selected::before{background:var(--cr-vertical-tab-selected-color,var(--cr-checked-color))}:host-context([dir=rtl]) .cr-vertical-tab::before{transform:scaleX(-1)}.iph-anchor-highlight{background-color:var(--cr-iph-anchor-highlight-color)}
    </style>
  </template>
`.content);styleMod$7.register("cr-shared-style");
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
        align-items: center;
        display: inline-flex;
        justify-content: center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:Base.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(icon){var parts=(icon||"").split(":");this._iconName=parts.pop();this._iconsetName=parts.pop()||this._DEFAULT_ICONSET;this._updateIcon()},_srcChanged:function(src){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){if(this._usesIconset()){if(this._img&&this._img.parentNode){dom(this.root).removeChild(this._img)}if(this._iconName===""){if(this._iconset){this._iconset.removeIcon(this)}}else if(this._iconsetName&&this._meta){this._iconset=this._meta.byKey(this._iconsetName);if(this._iconset){this._iconset.applyIcon(this,this._iconName,this.theme);this.unlisten(window,"iron-iconset-added","_updateIcon")}else{this.listen(window,"iron-iconset-added","_updateIcon")}}}else{if(this._iconset){this._iconset.removeIcon(this)}if(!this._img){this._img=document.createElement("img");this._img.style.width="100%";this._img.style.height="100%";this._img.draggable=false}this._img.src=this.src;dom(this.root).appendChild(this._img)}}});
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
        position: absolute;
        outline: none;
        z-index: 1002;
        user-select: none;
        cursor: default;
      }

      #tooltip {
        display: block;
        outline: none;
        font-size: 10px;
        line-height: 1;
        background-color: var(--paper-tooltip-background, #616161);
        color: var(--paper-tooltip-text-color, white);
        padding: 8px;
        border-radius: 2px;
      }

      @keyframes keyFrameScaleUp {
        0% {
          transform: scale(0.0);
        }
        100% {
          transform: scale(1.0);
        }
      }

      @keyframes keyFrameScaleDown {
        0% {
          transform: scale(1.0);
        }
        100% {
          transform: scale(0.0);
        }
      }

      @keyframes keyFrameFadeInOpacity {
        0% {
          opacity: 0;
        }
        100% {
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
      }

      @keyframes keyFrameFadeOutOpacity {
        0% {
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
        100% {
          opacity: 0;
        }
      }

      @keyframes keyFrameSlideDownIn {
        0% {
          transform: translateY(-2000px);
          opacity: 0;
        }
        10% {
          opacity: 0.2;
        }
        100% {
          transform: translateY(0);
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
      }

      @keyframes keyFrameSlideDownOut {
        0% {
          transform: translateY(0);
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
        10% {
          opacity: 0.2;
        }
        100% {
          transform: translateY(-2000px);
          opacity: 0;
        }
      }

      .fade-in-animation {
        opacity: 0;
        animation-delay: var(--paper-tooltip-delay-in, 500ms);
        animation-name: keyFrameFadeInOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-in, 500ms);
        animation-fill-mode: forwards;
      }

      .fade-out-animation {
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 0ms);
        animation-name: keyFrameFadeOutOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
      }

      .scale-up-animation {
        transform: scale(0);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-in, 500ms);
        animation-name: keyFrameScaleUp;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-in, 500ms);
        animation-fill-mode: forwards;
      }

      .scale-down-animation {
        transform: scale(1);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameScaleDown;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
      }

      .slide-down-animation {
        transform: translateY(-2000px);
        opacity: 0;
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameSlideDownIn;
        animation-iteration-count: 1;
        animation-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
      }

      .slide-down-animation-out {
        transform: translateY(0);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameSlideDownOut;
        animation-iteration-count: 1;
        animation-timing-function: cubic-bezier(0.4, 0.0, 1, 1);
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
      }

      .cancel-animation {
        animation-delay: -30s !important;
      }

      /* Thanks IE 10. */

      .hidden {
        display: none !important;
      }
    </style>

    <div id="tooltip" class="hidden" part="tooltip">
      <slot></slot>
    </div>
`,is:"paper-tooltip",hostAttributes:{role:"tooltip",tabindex:-1},properties:{for:{type:String,observer:"_findTarget"},manualMode:{type:Boolean,value:false,observer:"_manualModeChanged"},position:{type:String,value:"bottom"},fitToVisibleBounds:{type:Boolean,value:false},offset:{type:Number,value:14},marginTop:{type:Number,value:14},animationDelay:{type:Number,value:500,observer:"_delayChange"},animationEntry:{type:String,value:""},animationExit:{type:String,value:""},animationConfig:{type:Object,value:function(){return{entry:[{name:"fade-in-animation",node:this,timing:{delay:0}}],exit:[{name:"fade-out-animation",node:this}]}}},_showing:{type:Boolean,value:false}},listeners:{webkitAnimationEnd:"_onAnimationEnd"},get target(){if(this._manualTarget)return this._manualTarget;var parentNode=dom(this).parentNode;var ownerRoot=dom(this).getOwnerRoot();var target;if(this.for){target=dom(ownerRoot).querySelector("#"+this.for)}else{target=parentNode.nodeType==Node.DOCUMENT_FRAGMENT_NODE?ownerRoot.host:parentNode}return target},set target(target){this._manualTarget=target;this._findTarget()},attached:function(){this._findTarget()},detached:function(){if(!this.manualMode)this._removeListeners()},playAnimation:function(type){if(type==="entry"){this.show()}else if(type==="exit"){this.hide()}},cancelAnimation:function(){this.$.tooltip.classList.add("cancel-animation")},show:function(){if(this._showing)return;if(dom(this).textContent.trim()===""){var allChildrenEmpty=true;var effectiveChildren=dom(this).getEffectiveChildNodes();for(var i=0;i<effectiveChildren.length;i++){if(effectiveChildren[i].textContent.trim()!==""){allChildrenEmpty=false;break}}if(allChildrenEmpty){return}}this._showing=true;this.$.tooltip.classList.remove("hidden");this.$.tooltip.classList.remove("cancel-animation");this.$.tooltip.classList.remove(this._getAnimationType("exit"));this.updatePosition();this._animationPlaying=true;this.$.tooltip.classList.add(this._getAnimationType("entry"))},hide:function(){if(!this._showing){return}if(this._animationPlaying){this._showing=false;this._cancelAnimation();return}else{this._onAnimationFinish()}this._showing=false;this._animationPlaying=true},updatePosition:function(){if(!this._target)return;var offsetParent=this._composedOffsetParent();if(!offsetParent)return;var offset=this.offset;if(this.marginTop!=14&&this.offset==14)offset=this.marginTop;var parentRect=offsetParent.getBoundingClientRect();var targetRect=this._target.getBoundingClientRect();var thisRect=this.getBoundingClientRect();var horizontalCenterOffset=(targetRect.width-thisRect.width)/2;var verticalCenterOffset=(targetRect.height-thisRect.height)/2;var targetLeft=targetRect.left-parentRect.left;var targetTop=targetRect.top-parentRect.top;var tooltipLeft,tooltipTop;switch(this.position){case"top":tooltipLeft=targetLeft+horizontalCenterOffset;tooltipTop=targetTop-thisRect.height-offset;break;case"bottom":tooltipLeft=targetLeft+horizontalCenterOffset;tooltipTop=targetTop+targetRect.height+offset;break;case"left":tooltipLeft=targetLeft-thisRect.width-offset;tooltipTop=targetTop+verticalCenterOffset;break;case"right":tooltipLeft=targetLeft+targetRect.width+offset;tooltipTop=targetTop+verticalCenterOffset;break}if(this.fitToVisibleBounds){if(parentRect.left+tooltipLeft+thisRect.width>window.innerWidth){this.style.right="0px";this.style.left="auto"}else{this.style.left=Math.max(0,tooltipLeft)+"px";this.style.right="auto"}if(parentRect.top+tooltipTop+thisRect.height>window.innerHeight){this.style.bottom=parentRect.height-targetTop+offset+"px";this.style.top="auto"}else{this.style.top=Math.max(-parentRect.top,tooltipTop)+"px";this.style.bottom="auto"}}else{this.style.left=tooltipLeft+"px";this.style.top=tooltipTop+"px"}},_addListeners:function(){if(this._target){this.listen(this._target,"mouseenter","show");this.listen(this._target,"focus","show");this.listen(this._target,"mouseleave","hide");this.listen(this._target,"blur","hide");this.listen(this._target,"tap","hide")}this.listen(this.$.tooltip,"animationend","_onAnimationEnd");this.listen(this,"mouseenter","hide")},_findTarget:function(){if(!this.manualMode)this._removeListeners();this._target=this.target;if(!this.manualMode)this._addListeners()},_delayChange:function(newValue){if(newValue!==500){this.updateStyles({"--paper-tooltip-delay-in":newValue+"ms"})}},_manualModeChanged:function(){if(this.manualMode)this._removeListeners();else this._addListeners()},_cancelAnimation:function(){this.$.tooltip.classList.remove(this._getAnimationType("entry"));this.$.tooltip.classList.remove(this._getAnimationType("exit"));this.$.tooltip.classList.remove("cancel-animation");this.$.tooltip.classList.add("hidden")},_onAnimationFinish:function(){if(this._showing){this.$.tooltip.classList.remove(this._getAnimationType("entry"));this.$.tooltip.classList.remove("cancel-animation");this.$.tooltip.classList.add(this._getAnimationType("exit"))}},_onAnimationEnd:function(){this._animationPlaying=false;if(!this._showing){this.$.tooltip.classList.remove(this._getAnimationType("exit"));this.$.tooltip.classList.add("hidden")}},_getAnimationType:function(type){if(type==="entry"&&this.animationEntry!==""){return this.animationEntry}if(type==="exit"&&this.animationExit!==""){return this.animationExit}if(this.animationConfig[type]&&typeof this.animationConfig[type][0].name==="string"){if(this.animationConfig[type][0].timing&&this.animationConfig[type][0].timing.delay&&this.animationConfig[type][0].timing.delay!==0){var timingDelay=this.animationConfig[type][0].timing.delay;if(type==="entry"){this.updateStyles({"--paper-tooltip-delay-in":timingDelay+"ms"})}else if(type==="exit"){this.updateStyles({"--paper-tooltip-delay-out":timingDelay+"ms"})}}return this.animationConfig[type][0].name}},_removeListeners:function(){if(this._target){this.unlisten(this._target,"mouseenter","show");this.unlisten(this._target,"focus","show");this.unlisten(this._target,"mouseleave","hide");this.unlisten(this._target,"blur","hide");this.unlisten(this._target,"tap","hide")}this.unlisten(this.$.tooltip,"animationend","_onAnimationEnd");this.unlisten(this,"mouseenter","hide")},_composedOffsetParent:function(){for(let ancestor=this;ancestor;ancestor=flatTreeParent(ancestor)){if(!(ancestor instanceof Element))continue;if(getComputedStyle(ancestor).display==="none")return null}for(let ancestor=flatTreeParent(this);ancestor;ancestor=flatTreeParent(ancestor)){if(!(ancestor instanceof Element))continue;const style=getComputedStyle(ancestor);if(style.display==="contents"){continue}if(style.position!=="static"){return ancestor}if(ancestor.tagName==="BODY")return ancestor}return null;function flatTreeParent(element){if(element.assignedSlot){return element.assignedSlot}if(element.parentNode instanceof ShadowRoot){return element.parentNode.host}return element.parentNode}}});function getTemplate$t(){return html`<!--_html_template_start_-->    <style include="cr-shared-style">:host{display:flex}iron-icon{--iron-icon-width:var(--cr-icon-size);--iron-icon-height:var(--cr-icon-size);--iron-icon-fill-color:var(--cr-tooltip-icon-fill-color, var(--google-grey-700))}@media (prefers-color-scheme:dark){iron-icon{--iron-icon-fill-color:var(--cr-tooltip-icon-fill-color, var(--google-grey-500))}}</style>
    <iron-icon id="indicator" tabindex="0" aria-label$="[[iconAriaLabel]]" aria-describedby="tooltip" icon="[[iconClass]]" role="img"></iron-icon>
    <paper-tooltip id="tooltip" for="indicator" position="[[tooltipPosition]]" fit-to-visible-bounds part="tooltip">
      <slot name="tooltip-text">[[tooltipText]]</slot>
    </paper-tooltip>
<!--_html_template_end_-->`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrTooltipIconElement extends PolymerElement{static get is(){return"cr-tooltip-icon"}static get template(){return getTemplate$t()}static get properties(){return{iconAriaLabel:String,iconClass:String,tooltipText:String,tooltipPosition:{type:String,value:"top"}}}getFocusableElement(){return this.$.indicator}}customElements.define(CrTooltipIconElement.is,CrTooltipIconElement);
// Copyright 2013 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function assert$1(condition,opt_message){if(!condition){let message="Assertion failed";if(opt_message){message=message+": "+opt_message}const error=new Error(message);const global=function(){const thisOrSelf=this||self;thisOrSelf.traceAssertionsForTesting;return thisOrSelf}();if(global.traceAssertionsForTesting){console.warn(error.stack)}throw error}return condition}function assertNotReached$1(message){assert$1(false,message||"Unreachable code hit")}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var CrPolicyStrings;const CrPolicyIndicatorType$1={DEVICE_POLICY:"devicePolicy",EXTENSION:"extension",NONE:"none",OWNER:"owner",PRIMARY_USER:"primary_user",RECOMMENDED:"recommended",USER_POLICY:"userPolicy",PARENT:"parent",CHILD_RESTRICTION:"childRestriction"};const CrPolicyIndicatorBehavior={properties:{indicatorType:{type:String,value:CrPolicyIndicatorType$1.NONE},indicatorSourceName:{type:String,value:""},indicatorVisible:{type:Boolean,computed:"getIndicatorVisible_(indicatorType)"},indicatorIcon:{type:String,computed:"getIndicatorIcon_(indicatorType)"}},getIndicatorVisible_(type){return type!==CrPolicyIndicatorType$1.NONE},getIndicatorIcon_(type){switch(type){case CrPolicyIndicatorType$1.EXTENSION:return"cr:extension";case CrPolicyIndicatorType$1.NONE:return"";case CrPolicyIndicatorType$1.PRIMARY_USER:return"cr:group";case CrPolicyIndicatorType$1.OWNER:return"cr:person";case CrPolicyIndicatorType$1.USER_POLICY:case CrPolicyIndicatorType$1.DEVICE_POLICY:case CrPolicyIndicatorType$1.RECOMMENDED:return"cr20:domain";case CrPolicyIndicatorType$1.PARENT:case CrPolicyIndicatorType$1.CHILD_RESTRICTION:return"cr20:kite";default:assertNotReached$1()}},getIndicatorTooltip(type,name,matches){if(!window["CrPolicyStrings"]){return""}CrPolicyStrings=window["CrPolicyStrings"];switch(type){case CrPolicyIndicatorType$1.EXTENSION:return name.length>0?CrPolicyStrings.controlledSettingExtension.replace("$1",name):CrPolicyStrings.controlledSettingExtensionWithoutName;case CrPolicyIndicatorType$1.PRIMARY_USER:return CrPolicyStrings.controlledSettingShared.replace("$1",name);case CrPolicyIndicatorType$1.OWNER:return name.length>0?CrPolicyStrings.controlledSettingWithOwner.replace("$1",name):CrPolicyStrings.controlledSettingNoOwner;case CrPolicyIndicatorType$1.USER_POLICY:case CrPolicyIndicatorType$1.DEVICE_POLICY:return CrPolicyStrings.controlledSettingPolicy;case CrPolicyIndicatorType$1.RECOMMENDED:return matches?CrPolicyStrings.controlledSettingRecommendedMatches:CrPolicyStrings.controlledSettingRecommendedDiffers;case CrPolicyIndicatorType$1.PARENT:return CrPolicyStrings.controlledSettingParent;case CrPolicyIndicatorType$1.CHILD_RESTRICTION:return CrPolicyStrings.controlledSettingChildRestriction}return""}};
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const FAKE_CREDENTIAL="FAKE_CREDENTIAL_VPaJDV9x";const VALID_DNS_CHARS_REGEX=RegExp("^[a-zA-Z0-9-\\.]*$");class OncMojo{static getEnumString(value){if(value===undefined){return"undefined"}return value.toString()}static getActivationStateTypeString(value){switch(value){case ActivationStateType.kUnknown:return"Unknown";case ActivationStateType.kNotActivated:return"NotActivated";case ActivationStateType.kActivating:return"Activating";case ActivationStateType.kPartiallyActivated:return"PartiallyActivated";case ActivationStateType.kActivated:return"Activated";case ActivationStateType.kNoService:return"NoService"}assertNotReached$1("Unexpected enum value: "+OncMojo.getEnumString(value));return""}static getActivationStateTypeFromString(value){switch(value){case"Unknown":return ActivationStateType.kUnknown;case"NotActivated":return ActivationStateType.kNotActivated;case"Activating":return ActivationStateType.kActivating;case"PartiallyActivated":return ActivationStateType.kPartiallyActivated;case"Activated":return ActivationStateType.kActivated;case"NoService":return ActivationStateType.kNoService}assertNotReached$1("Unexpected value: "+value);return ActivationStateType.kUnknown}static getPortalStateString(value){switch(value){case PortalState.kUnknown:return"Unknown";case PortalState.kOnline:return"Online";case PortalState.kPortalSuspected:return"PortalSuspected";case PortalState.kPortal:return"Portal";case PortalState.kProxyAuthRequired:return"ProxyAuthRequired";case PortalState.kNoInternet:return"NoInternet"}assertNotReached$1("Unexpected enum value: "+OncMojo.getEnumString(value));return""}static getConnectionStateTypeString(value){switch(value){case ConnectionStateType.kOnline:return"Online";case ConnectionStateType.kConnected:return"Connected";case ConnectionStateType.kPortal:return"Portal";case ConnectionStateType.kConnecting:return"Connecting";case ConnectionStateType.kNotConnected:return"NotConnected"}assertNotReached$1("Unexpected enum value: "+OncMojo.getEnumString(value));return""}static getConnectionStateTypeFromString(value){switch(value){case"Online":return ConnectionStateType.kOnline;case"Connected":return ConnectionStateType.kConnected;case"Portal":return ConnectionStateType.kPortal;case"Connecting":return ConnectionStateType.kConnecting;case"NotConnected":return ConnectionStateType.kNotConnected}assertNotReached$1("Unexpected value: "+value);return ConnectionStateType.kNotConnected}static connectionStateIsConnected(value){switch(value){case ConnectionStateType.kOnline:case ConnectionStateType.kConnected:case ConnectionStateType.kPortal:return true;case ConnectionStateType.kConnecting:case ConnectionStateType.kNotConnected:return false}assertNotReached$1("Unexpected enum value: "+OncMojo.getEnumString(value));return false}static getDeviceStateTypeString(value){switch(value){case DeviceStateType.kUninitialized:return"Uninitialized";case DeviceStateType.kDisabled:return"Disabled";case DeviceStateType.kDisabling:return"Disabling";case DeviceStateType.kEnabling:return"Enabling";case DeviceStateType.kEnabled:return"Enabled";case DeviceStateType.kProhibited:return"Prohibited";case DeviceStateType.kUnavailable:return"Unavailable"}assertNotReached$1("Unexpected enum value: "+OncMojo.getEnumString(value));return""}static deviceStateIsIntermediate(value){switch(value){case DeviceStateType.kUninitialized:case DeviceStateType.kDisabling:case DeviceStateType.kEnabling:case DeviceStateType.kUnavailable:return true;case DeviceStateType.kDisabled:case DeviceStateType.kEnabled:case DeviceStateType.kProhibited:return false}assertNotReached$1("Unexpected enum value: "+OncMojo.getEnumString(value));return false}static deviceIsInhibited(device){if(!device){return false}return device.inhibitReason!==InhibitReason.kNotInhibited}static getNetworkTypeString(value){switch(value){case NetworkType.kAll:return"All";case NetworkType.kCellular:return"Cellular";case NetworkType.kEthernet:return"Ethernet";case NetworkType.kMobile:return"Mobile";case NetworkType.kTether:return"Tether";case NetworkType.kVPN:return"VPN";case NetworkType.kWireless:return"Wireless";case NetworkType.kWiFi:return"WiFi"}assertNotReached$1("Unexpected enum value: "+OncMojo.getEnumString(value));return""}static networkTypeIsMobile(value){switch(value){case NetworkType.kCellular:case NetworkType.kMobile:case NetworkType.kTether:return true;case NetworkType.kAll:case NetworkType.kEthernet:case NetworkType.kVPN:case NetworkType.kWireless:case NetworkType.kWiFi:return false}assertNotReached$1("Unexpected enum value: "+OncMojo.getEnumString(value));return false}static networkTypeHasConfigurationFlow(value){return!OncMojo.networkTypeIsMobile(value)}static getNetworkTypeFromString(value){switch(value){case"All":return NetworkType.kAll;case"Cellular":return NetworkType.kCellular;case"Ethernet":return NetworkType.kEthernet;case"Mobile":return NetworkType.kMobile;case"Tether":return NetworkType.kTether;case"VPN":return NetworkType.kVPN;case"Wireless":return NetworkType.kWireless;case"WiFi":return NetworkType.kWiFi}assertNotReached$1("Unexpected value: "+value);return NetworkType.kAll}static getOncSourceString(value){switch(value){case OncSource.kNone:return"None";case OncSource.kDevice:return"Device";case OncSource.kDevicePolicy:return"DevicePolicy";case OncSource.kUser:return"User";case OncSource.kUserPolicy:return"UserPolicy"}assertNotReached$1("Unexpected enum value: "+OncMojo.getEnumString(value));return""}static getSecurityTypeString(value){switch(value){case SecurityType.kNone:return"None";case SecurityType.kWep8021x:return"WEP-8021X";case SecurityType.kWepPsk:return"WEP-PSK";case SecurityType.kWpaEap:return"WPA-EAP";case SecurityType.kWpaPsk:return"WPA-PSK"}assertNotReached$1("Unexpected enum value: "+OncMojo.getEnumString(value));return""}static getSecurityTypeFromString(value){switch(value){case"None":return SecurityType.kNone;case"WEP-8021X":return SecurityType.kWep8021x;case"WEP-PSK":return SecurityType.kWepPsk;case"WPA-EAP":return SecurityType.kWpaEap;case"WPA-PSK":return SecurityType.kWpaPsk}assertNotReached$1("Unexpected value: "+value);return SecurityType.kNone}static getVpnTypeString(value){switch(value){case VpnType.kIKEv2:return"IKEv2";case VpnType.kL2TPIPsec:return"L2TP-IPsec";case VpnType.kOpenVPN:return"OpenVPN";case VpnType.kWireGuard:return"WireGuard";case VpnType.kExtension:return"ThirdPartyVPN";case VpnType.kArc:return"ARCVPN"}assertNotReached$1("Unexpected enum value: "+OncMojo.getEnumString(value));return""}static getTypeString(key,value){if(key==="activationState"){return OncMojo.getActivationStateTypeString(value)}if(key==="connectionState"){return OncMojo.getConnectionStateTypeString(value)}if(key==="deviceState"){return OncMojo.getDeviceStateTypeString(value)}if(key==="type"){return OncMojo.getNetworkTypeString(value)}if(key==="source"){return OncMojo.getOncSourceString(value)}if(key==="security"){return OncMojo.getSecurityTypeString(value)}return value}static getEnforcedPolicySourceFromOncSource(source){switch(source){case OncSource.kNone:case OncSource.kDevice:case OncSource.kUser:return PolicySource.kNone;case OncSource.kDevicePolicy:return PolicySource.kDevicePolicyEnforced;case OncSource.kUserPolicy:return PolicySource.kUserPolicyEnforced}assert$1(source!==undefined,"OncSource undefined");assertNotReached$1("Invalid OncSource: "+source.toString());return PolicySource.kNone}static getNetworkTypeDisplayName(type){return loadTimeData.getStringF("OncType"+OncMojo.getNetworkTypeString(type))}static getNetworkStateDisplayNameUnsafe(network){if(!network.name){return OncMojo.getNetworkTypeDisplayName(network.type)}if(network.type===NetworkType.kVPN&&network.typeState.vpn.providerName){return loadTimeData.getStringF("vpnNameTemplate",network.typeState.vpn.providerName,network.name)}return network.name}static getNetworkNameUnsafe(network){if(!network.name||!network.name.activeValue){return OncMojo.getNetworkTypeDisplayName(network.type)}if(network.type===NetworkType.kVPN&&network.typeProperties.vpn.providerName){return loadTimeData.getStringF("vpnNameTemplate",network.typeProperties.vpn.providerName,network.name.activeValue)}return network.name.activeValue}static getSignalStrength(network){switch(network.type){case NetworkType.kCellular:return network.typeState.cellular.signalStrength;case NetworkType.kTether:return network.typeState.tether.signalStrength;case NetworkType.kWiFi:return network.typeState.wifi.signalStrength}assertNotReached$1();return 0}static isNetworkConnectable(network){if(!OncMojo.networkTypeHasConfigurationFlow(network.type)){return true}return network.connectable}static isTypeKey(key){return key.startsWith("cellular")||key.startsWith("ethernet")||key.startsWith("tether")||key.startsWith("vpn")||key.startsWith("wifi")}static getManagedPropertyKey(key){if(OncMojo.isTypeKey(key)){key="typeProperties."+key}return key}static getDefaultNetworkState(type,opt_name){const result={connectable:false,connectRequested:false,connectionState:ConnectionStateType.kNotConnected,guid:opt_name?opt_name+"_guid":"",name:opt_name||"",portalState:PortalState.kUnknown,priority:0,proxyMode:ProxyMode.kDirect,prohibitedByPolicy:false,source:OncSource.kNone,type:type,typeState:{}};switch(type){case NetworkType.kCellular:result.typeState.cellular={iccid:"",eid:"",activationState:ActivationStateType.kUnknown,networkTechnology:"",roaming:false,signalStrength:0,simLockEnabled:false,simLocked:false,simLockType:"",hasNickName:false,networkOperator:""};break;case NetworkType.kEthernet:result.typeState.ethernet={authentication:AuthenticationType.kNone};break;case NetworkType.kTether:result.typeState.tether={batteryPercentage:0,carrier:"",hasConnectedToHost:false,signalStrength:0};break;case NetworkType.kVPN:result.typeState.vpn={type:VpnType.kOpenVPN,providerId:"",providerName:""};break;case NetworkType.kWiFi:result.typeState.wifi={bssid:"",frequency:0,hexSsid:opt_name||"",hiddenSsid:false,security:SecurityType.kNone,signalStrength:0,ssid:"",passpointId:""};break;default:assertNotReached$1()}return result}static managedPropertiesToNetworkState(properties){const networkState=OncMojo.getDefaultNetworkState(properties.type);networkState.connectable=properties.connectable;networkState.connectionState=properties.connectionState;networkState.guid=properties.guid;if(properties.name){networkState.name=properties.name.activeValue}if(properties.priority){networkState.priority=properties.priority.activeValue}networkState.source=properties.source;switch(properties.type){case NetworkType.kCellular:const cellularProperties=properties.typeProperties.cellular;networkState.typeState.cellular.iccid=cellularProperties.iccid||"";networkState.typeState.cellular.eid=cellularProperties.eid||"";networkState.typeState.cellular.activationState=cellularProperties.activationState;networkState.typeState.cellular.networkTechnology=cellularProperties.networkTechnology||"";networkState.typeState.cellular.roaming=cellularProperties.roamingState==="Roaming";networkState.typeState.cellular.signalStrength=cellularProperties.signalStrength;networkState.typeState.cellular.simLocked=cellularProperties.simLocked;break;case NetworkType.kEthernet:networkState.typeState.ethernet.authentication=OncMojo.getActiveValue(properties.typeProperties.ethernet.authentication)==="8021X"?AuthenticationType.k8021x:AuthenticationType.kNone;break;case NetworkType.kTether:if(properties.typeProperties.tether){networkState.typeState.tether=Object.assign({},properties.typeProperties.tether)}break;case NetworkType.kVPN:networkState.typeState.vpn.providerName=properties.typeProperties.vpn.providerName;networkState.typeState.vpn.type=properties.typeProperties.vpn.type;break;case NetworkType.kWiFi:const wifiProperties=properties.typeProperties.wifi;networkState.typeState.wifi.bssid=wifiProperties.bssid||"";networkState.typeState.wifi.frequency=wifiProperties.frequency;networkState.typeState.wifi.hexSsid=OncMojo.getActiveString(wifiProperties.hexSsid);networkState.typeState.wifi.security=wifiProperties.security;networkState.typeState.wifi.signalStrength=wifiProperties.signalStrength;networkState.typeState.wifi.ssid=OncMojo.getActiveString(wifiProperties.ssid);break}return networkState}static getDefaultManagedProperties(type,guid,name){const result={connectionState:ConnectionStateType.kNotConnected,source:OncSource.kNone,type:type,connectable:false,guid:guid,name:OncMojo.createManagedString(name),ipAddressConfigType:OncMojo.createManagedString("DHCP"),nameServersConfigType:OncMojo.createManagedString("DHCP"),portalState:PortalState.kUnknown,trafficCounterProperties:OncMojo.createTrafficCounterProperties()};switch(type){case NetworkType.kCellular:result.typeProperties={cellular:{activationState:ActivationStateType.kUnknown,signalStrength:0,simLocked:false,supportNetworkScan:false}};break;case NetworkType.kEthernet:result.typeProperties={ethernet:{}};break;case NetworkType.kTether:result.typeProperties={tether:{batteryPercentage:0,carrier:"",hasConnectedToHost:false,signalStrength:0}};break;case NetworkType.kVPN:result.typeProperties={vpn:{providerName:"",type:VpnType.kOpenVPN,openVpn:{}}};break;case NetworkType.kWiFi:result.typeProperties={wifi:{bssid:"",frequency:0,ssid:OncMojo.createManagedString(""),security:SecurityType.kNone,signalStrength:0,isSyncable:false,isConfiguredByActiveUser:false,passpointId:"",passpointMatchType:MatchType.kNoMatch}};break}return result}static getDefaultConfigProperties(type){switch(type){case NetworkType.kCellular:return{typeConfig:{cellular:{}}};case NetworkType.kEthernet:return{typeConfig:{ethernet:{}}};case NetworkType.kVPN:return{typeConfig:{vpn:{}}};case NetworkType.kWiFi:return{typeConfig:{wifi:{security:SecurityType.kNone,hiddenSsid:HiddenSsidMode.kAutomatic}}}}assertNotReached$1("Unexpected type: "+type.toString());return{typeConfig:{}}}static setConfigProperty(config,key,value){if(OncMojo.isTypeKey(key)){key="typeConfig."+key}while(true){const index=key.indexOf(".");if(index<0){break}const keyComponent=key.substr(0,index);if(!config.hasOwnProperty(keyComponent)){config[keyComponent]={}}config=config[keyComponent];key=key.substr(index+1)}config[key]=value}static getActiveValue(property){if(!property){return undefined}return property.activeValue}static getActiveString(property){if(!property){return""}return property.activeValue}static getIPConfigForType(properties,desiredType){const ipConfigs=properties.ipConfigs;let ipConfig;if(ipConfigs){ipConfig=ipConfigs.find((ipconfig=>ipconfig.type===desiredType));if(ipConfig&&desiredType!==IPConfigType.kIPv4){return ipConfig}}if(desiredType!==IPConfigType.kIPv4){return undefined}if(!ipConfig){ipConfig={routingPrefix:0}}const staticIpConfig=properties.staticIpConfig;if(!staticIpConfig){return ipConfig}if(properties.ipAddressConfigType&&properties.ipAddressConfigType.activeValue==="Static"){if(staticIpConfig.gateway){ipConfig.gateway=staticIpConfig.gateway.activeValue}if(staticIpConfig.ipAddress){ipConfig.ipAddress=staticIpConfig.ipAddress.activeValue}if(staticIpConfig.routingPrefix){ipConfig.routingPrefix=staticIpConfig.routingPrefix.activeValue}ipConfig.type=staticIpConfig.type}if(properties.nameServersConfigType&&properties.nameServersConfigType.activeValue==="Static"){if(staticIpConfig.nameServers){ipConfig.nameServers=staticIpConfig.nameServers.activeValue}}return ipConfig}static ipConfigPropertiesMatch(staticValue,newValue){if(staticValue.type!==newValue.type){return false}if(newValue.gateway!==undefined&&staticValue.gateway!==newValue.gateway){return false}if(newValue.ipAddress!==undefined&&staticValue.ipAddress!==newValue.ipAddress){return false}if(staticValue.routingPrefix!==newValue.routingPrefix){return false}return true}static getUpdatedIPConfigProperties(managedProperties,field,newValue){let ipConfigType=OncMojo.getActiveString(managedProperties.ipAddressConfigType)||"DHCP";let nsConfigType=OncMojo.getActiveString(managedProperties.nameServersConfigType)||"DHCP";let staticIpConfig=OncMojo.getIPConfigForType(managedProperties,IPConfigType.kIPv4);let nameServers=staticIpConfig?staticIpConfig.nameServers:undefined;if(field==="ipAddressConfigType"){const newIpConfigType=newValue;if(newIpConfigType===ipConfigType){return null}ipConfigType=newIpConfigType}else if(field==="nameServersConfigType"){const newNsConfigType=newValue;if(newNsConfigType===nsConfigType){return null}nsConfigType=newNsConfigType}else if(field==="staticIpConfig"){const ipConfigValue=newValue;if(!ipConfigValue.ipAddress){console.error("Invalid StaticIPConfig: "+JSON.stringify(newValue));return null}if(ipConfigType==="Static"&&staticIpConfig&&OncMojo.ipConfigPropertiesMatch(staticIpConfig,ipConfigValue)){return null}ipConfigType="Static";staticIpConfig=ipConfigValue}else if(field==="nameServers"){const newNameServers=newValue;if(!newNameServers||!newNameServers.length){console.error("Invalid NameServers: "+JSON.stringify(newValue))}if(nsConfigType==="Static"&&JSON.stringify(nameServers)===JSON.stringify(newNameServers)){return null}nsConfigType="Static";nameServers=newNameServers}else{console.error("Unexpected field: "+field);return null}const config=OncMojo.getDefaultConfigProperties(managedProperties.type);config.ipAddressConfigType=ipConfigType;config.nameServersConfigType=nsConfigType;if(ipConfigType==="Static"){assert$1(staticIpConfig&&staticIpConfig.ipAddress);config.staticIpConfig=staticIpConfig}if(nsConfigType==="Static"){assert$1(nameServers&&nameServers.length);config.staticIpConfig=config.staticIpConfig||{routingPrefix:0};config.staticIpConfig.nameServers=nameServers}return config}static getManagedAutoConnect(properties){const type=properties.type;switch(type){case NetworkType.kCellular:return properties.typeProperties.cellular.autoConnect;case NetworkType.kVPN:return properties.typeProperties.vpn.autoConnect;case NetworkType.kWiFi:return properties.typeProperties.wifi.autoConnect}return undefined}static createManagedString(s){return{activeValue:s,policySource:PolicySource.kNone,policyValue:undefined}}static createManagedInt(n){return{activeValue:n,policySource:PolicySource.kNone,policyValue:0}}static createManagedBool(b){return{activeValue:b,policySource:PolicySource.kNone,policyValue:false}}static createTrafficCounterProperties(){return{lastResetTime:null,autoReset:false,userSpecifiedResetDay:1}}static getConnectionStateString(connectionState){switch(connectionState){case ConnectionStateType.kOnline:case ConnectionStateType.kConnected:case ConnectionStateType.kPortal:return"OncConnected";case ConnectionStateType.kConnecting:return"OncConnecting";case ConnectionStateType.kNotConnected:return"OncNotConnected"}assertNotReached$1();return"OncNotConnected"}static ipAddressMatch(a,b){if(!a||!b){return!!a===!!b}const abytes=a.addressBytes;const bbytes=b.addressBytes;if(abytes.length!==bbytes.length){return false}for(let i=0;i<abytes.length;++i){if(abytes[i]!==bbytes[i]){return false}}return true}static simLockStatusMatch(a,b){if(!a||!b){return!!a===!!b}return a.lockType===b.lockType&&a.lockEnabled===b.lockEnabled&&a.retriesLeft===b.retriesLeft}static simInfosMatch(a,b){if(!a||!b){return!!a===!!b}if(a.length!==b.length){return false}for(let i=0;i<a.length;i++){const acurrent=a[i];const bcurrent=b[i];if(acurrent.slotId!==bcurrent.slotId||acurrent.eid!==bcurrent.eid||acurrent.iccid!==bcurrent.iccid||acurrent.isPrimary!==bcurrent.isPrimary){return false}}return true}static apnMatch(a,b){if(!a||!b){return!!a===!!b}return a.accessPointName===b.accessPointName&&a.name===b.name&&a.username===b.username&&a.password===b.password}static apnListMatch(a,b){if(!a||!b){return!!a===!!b}if(a.length!==b.length){return false}return a.every(((apn,index)=>OncMojo.apnMatch(apn,b[index])))}static isRestrictedConnectivity(portal){if(portal===undefined){return false}switch(portal){case PortalState.kUnknown:case PortalState.kOnline:return false;case PortalState.kPortalSuspected:case PortalState.kPortal:case PortalState.kProxyAuthRequired:case PortalState.kNoInternet:return true}assertNotReached$1();return false}static serializeDomainSuffixMatch(domainSuffixMatch){if(!domainSuffixMatch||domainSuffixMatch.length===0){return""}return domainSuffixMatch.join(";")}static deserializeDomainSuffixMatch(domainSuffixMatch){const entries=domainSuffixMatch.trim().split(";");const result=[];for(const e of entries){const value=VALID_DNS_CHARS_REGEX.exec(e);if(!value||value.length!==1){console.warn("Invalid Domain Suffix Match entry: "+e);return null}const entry=value[0].trim();if(entry!==""){result.push(value[0])}}return result}static serializeSubjectAltNameMatch(subjectAltNameMatch){if(!subjectAltNameMatch||subjectAltNameMatch.length===0){return""}const result=[];for(const e of subjectAltNameMatch){let type;switch(e.type){case SubjectAltName_Type.kEmail:type="EMAIL";break;case SubjectAltName_Type.kDns:type="DNS";break;case SubjectAltName_Type.kUri:type="URI";break;default:assertNotReached$1("Unknown subjectAltNameMatchType "+e.type)}result.push(type+":"+e.value)}return result.join(";")}static deserializeSubjectAltNameMatch(subjectAltNameMatch){const regValidEmailChars=RegExp("^[a-zA-Z0-9-\\.\\+_~@]*$");const regValidUriChars=RegExp("^[a-zA-Z0-9-\\._~:/?#\\[\\]@!$&'()\\*\\+,;=]*$");const entries=subjectAltNameMatch.trim().split(";");const result=[];for(const entry of entries){if(entry===""){continue}let type;let value;if(entry.toUpperCase().startsWith("EMAIL:")){type=SubjectAltName_Type.kEmail;value=regValidEmailChars.exec(entry.substring(6))}else if(entry.toUpperCase().startsWith("DNS:")){type=SubjectAltName_Type.kDns;value=VALID_DNS_CHARS_REGEX.exec(entry.substring(4))}else if(entry.toUpperCase().startsWith("URI:")){type=SubjectAltName_Type.kUri;value=regValidUriChars.exec(entry.substring(4))}else{console.warn("Invalid Subject Alternative Name Match type "+entry);return null}if(!value||value.length!==1){console.warn("Invalid Subject Alternative Name Match value "+entry);return null}result.push({type:type,value:value[0]})}return result}}OncMojo.USE_ATTACH_APN_NAME="attach";
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrPolicyNetworkBehaviorMojo={isNetworkPolicyControlled(property){if(!property){return false}return property.policySource!==PolicySource.kNone&&property.policySource!==PolicySource.kActiveExtension},isExtensionControlled(property){if(!property){return false}return property.policySource===PolicySource.kActiveExtension},isControlled(property){if(!property){return false}return property.policySource!==PolicySource.kNone},isEditable(property){if(!property){return false}return property.policySource!==PolicySource.kUserPolicyEnforced&&property.policySource!==PolicySource.kDevicePolicyEnforced&&property.policySource!==PolicySource.kActiveExtension},isNetworkPolicyEnforced(property){if(!property){return false}return property.policySource===PolicySource.kUserPolicyEnforced||property.policySource===PolicySource.kDevicePolicyEnforced},isNetworkPolicyRecommended(property){if(!property){return false}return property.policySource===PolicySource.kUserPolicyRecommended||property.policySource===PolicySource.kDevicePolicyRecommended},getEnforcedPolicyValue(property){if(!property||!this.isNetworkPolicyEnforced(property)){return null}return property.policyValue===undefined?null:property.policyValue},getRecommendedPolicyValue(property){if(!property||!this.isNetworkPolicyRecommended(property)){return null}return property.policyValue===undefined?null:property.policyValue},isPolicySource(source){return source===OncSource.kDevicePolicy||source===OncSource.kUserPolicy},getIndicatorTypeForSource(source){if(source===OncSource.kDevicePolicy){return CrPolicyIndicatorType$1.DEVICE_POLICY}if(source===OncSource.kUserPolicy){return CrPolicyIndicatorType$1.USER_POLICY}return CrPolicyIndicatorType$1.NONE},getPolicyIndicatorType(property){if(!property){return CrPolicyIndicatorType$1.NONE}if(property.policySource===PolicySource.kUserPolicyEnforced||property.policySource===PolicySource.kUserPolicyRecommended){return CrPolicyIndicatorType$1.USER_POLICY}if(property.policySource===PolicySource.kDevicePolicyEnforced||property.policySource===PolicySource.kDevicePolicyRecommended){return CrPolicyIndicatorType$1.DEVICE_POLICY}if(property.policySource===PolicySource.kActiveExtension){return CrPolicyIndicatorType$1.EXTENSION}return CrPolicyIndicatorType$1.NONE}};function getTemplate$s(){return html`<!--_html_template_start_--><style include="cr-hidden-style">
  /* CSS variable for controlling the margin of the icon outside the
    * indicator element (i.e. in the element including the indicator). */
  :host {
    --cr-tooltip-icon-margin-start: 0;
  }

  cr-tooltip-icon {
    margin-inline-start: var(--cr-tooltip-icon-margin-start);
  }
</style>
<cr-tooltip-icon hidden$="[[!indicatorVisible]]"
    tooltip-text="[[indicatorTooltip_]]" icon-class="[[indicatorIcon]]"
    tooltip-position="[[tooltipPosition]]">
</cr-tooltip-icon>
<!--_html_template_end_-->`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Polymer({_template:getTemplate$s(),is:"cr-policy-network-indicator-mojo",behaviors:[CrPolicyIndicatorBehavior,CrPolicyNetworkBehaviorMojo],properties:{property:Object,tooltipPosition:String,indicatorTooltip_:{type:String,computed:"getNetworkIndicatorTooltip_(indicatorType, property.*)"}},observers:["propertyChanged_(property.*)"],propertyChanged_(){const property=this.property;if(property===null||property===undefined||!this.isControlled(property)){this.indicatorType=CrPolicyIndicatorType$1.NONE;return}switch(property.policySource){case PolicySource.kNone:this.indicatorType=CrPolicyIndicatorType$1.NONE;break;case PolicySource.kUserPolicyEnforced:this.indicatorType=CrPolicyIndicatorType$1.USER_POLICY;break;case PolicySource.kDevicePolicyEnforced:this.indicatorType=CrPolicyIndicatorType$1.DEVICE_POLICY;break;case PolicySource.kUserPolicyRecommended:case PolicySource.kDevicePolicyRecommended:this.indicatorType=CrPolicyIndicatorType$1.RECOMMENDED;break;case PolicySource.kActiveExtension:this.indicatorType=CrPolicyIndicatorType$1.EXTENSION;break}},getNetworkIndicatorTooltip_(){if(this.property===undefined){return""}const matches=!!this.property&&this.property.activeValue===this.property.policyValue;return this.getIndicatorTooltip(this.indicatorType,"",matches)}});
// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CLASS_NAME="focus-outline-visible";const docsToManager=new Map;class FocusOutlineManager{constructor(doc){this.focusByKeyboard_=true;this.classList_=doc.documentElement.classList;doc.addEventListener("keydown",(()=>this.onEvent_(true)),true);doc.addEventListener("mousedown",(()=>this.onEvent_(false)),true);this.updateVisibility()}onEvent_(focusByKeyboard){if(this.focusByKeyboard_===focusByKeyboard){return}this.focusByKeyboard_=focusByKeyboard;this.updateVisibility()}updateVisibility(){this.visible=this.focusByKeyboard_}set visible(visible){this.classList_.toggle(CLASS_NAME,visible)}get visible(){return this.classList_.contains(CLASS_NAME)}static forDocument(doc){let manager=docsToManager.get(doc);if(!manager){manager=new FocusOutlineManager(doc);docsToManager.set(doc,manager)}return manager}}
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var KEY_IDENTIFIER={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"};var KEY_CODE={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"};var MODIFIER_KEYS={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"};var KEY_CHAR=/[a-z0-9*]/;var IDENT_CHAR=/U\+/;var ARROW_KEY=/^arrow/;var SPACE_KEY=/^space(bar)?/;var ESC_KEY=/^escape$/;function transformKey(key,noSpecialChars){var validKey="";if(key){var lKey=key.toLowerCase();if(lKey===" "||SPACE_KEY.test(lKey)){validKey="space"}else if(ESC_KEY.test(lKey)){validKey="esc"}else if(lKey.length==1){if(!noSpecialChars||KEY_CHAR.test(lKey)){validKey=lKey}}else if(ARROW_KEY.test(lKey)){validKey=lKey.replace("arrow","")}else if(lKey=="multiply"){validKey="*"}else{validKey=lKey}}return validKey}function transformKeyIdentifier(keyIdent){var validKey="";if(keyIdent){if(keyIdent in KEY_IDENTIFIER){validKey=KEY_IDENTIFIER[keyIdent]}else if(IDENT_CHAR.test(keyIdent)){keyIdent=parseInt(keyIdent.replace("U+","0x"),16);validKey=String.fromCharCode(keyIdent).toLowerCase()}else{validKey=keyIdent.toLowerCase()}}return validKey}function transformKeyCode(keyCode){var validKey="";if(Number(keyCode)){if(keyCode>=65&&keyCode<=90){validKey=String.fromCharCode(32+keyCode)}else if(keyCode>=112&&keyCode<=123){validKey="f"+(keyCode-112+1)}else if(keyCode>=48&&keyCode<=57){validKey=String(keyCode-48)}else if(keyCode>=96&&keyCode<=105){validKey=String(keyCode-96)}else{validKey=KEY_CODE[keyCode]}}return validKey}function normalizedKeyForEvent(keyEvent,noSpecialChars){if(keyEvent.key){return transformKey(keyEvent.key,noSpecialChars)}if(keyEvent.detail&&keyEvent.detail.key){return transformKey(keyEvent.detail.key,noSpecialChars)}return transformKeyIdentifier(keyEvent.keyIdentifier)||transformKeyCode(keyEvent.keyCode)||""}function keyComboMatchesEvent(keyCombo,event){var keyEvent=normalizedKeyForEvent(event,keyCombo.hasModifiers);return keyEvent===keyCombo.key&&(!keyCombo.hasModifiers||!!event.shiftKey===!!keyCombo.shiftKey&&!!event.ctrlKey===!!keyCombo.ctrlKey&&!!event.altKey===!!keyCombo.altKey&&!!event.metaKey===!!keyCombo.metaKey)}function parseKeyComboString(keyComboString){if(keyComboString.length===1){return{combo:keyComboString,key:keyComboString,event:"keydown"}}return keyComboString.split("+").reduce((function(parsedKeyCombo,keyComboPart){var eventParts=keyComboPart.split(":");var keyName=eventParts[0];var event=eventParts[1];if(keyName in MODIFIER_KEYS){parsedKeyCombo[MODIFIER_KEYS[keyName]]=true;parsedKeyCombo.hasModifiers=true}else{parsedKeyCombo.key=keyName;parsedKeyCombo.event=event||"keydown"}return parsedKeyCombo}),{combo:keyComboString.split(":").shift()})}function parseEventString(eventString){return eventString.trim().split(" ").map((function(keyComboString){return parseKeyComboString(keyComboString)}))}const IronA11yKeysBehavior={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:false},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(eventString,handlerName){this._imperativeKeyBindings[eventString]=handlerName;this._prepKeyBindings();this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={};this._prepKeyBindings();this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(event,eventString){var keyCombos=parseEventString(eventString);for(var i=0;i<keyCombos.length;++i){if(keyComboMatchesEvent(keyCombos[i],event)){return true}}return false},_collectKeyBindings:function(){var keyBindings=this.behaviors.map((function(behavior){return behavior.keyBindings}));if(keyBindings.indexOf(this.keyBindings)===-1){keyBindings.push(this.keyBindings)}return keyBindings},_prepKeyBindings:function(){this._keyBindings={};this._collectKeyBindings().forEach((function(keyBindings){for(var eventString in keyBindings){this._addKeyBinding(eventString,keyBindings[eventString])}}),this);for(var eventString in this._imperativeKeyBindings){this._addKeyBinding(eventString,this._imperativeKeyBindings[eventString])}for(var eventName in this._keyBindings){this._keyBindings[eventName].sort((function(kb1,kb2){var b1=kb1[0].hasModifiers;var b2=kb2[0].hasModifiers;return b1===b2?0:b1?-1:1}))}},_addKeyBinding:function(eventString,handlerName){parseEventString(eventString).forEach((function(keyCombo){this._keyBindings[keyCombo.event]=this._keyBindings[keyCombo.event]||[];this._keyBindings[keyCombo.event].push([keyCombo,handlerName])}),this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners();if(this.isAttached){this._listenKeyEventListeners()}},_listenKeyEventListeners:function(){if(!this.keyEventTarget){return}Object.keys(this._keyBindings).forEach((function(eventName){var keyBindings=this._keyBindings[eventName];var boundKeyHandler=this._onKeyBindingEvent.bind(this,keyBindings);this._boundKeyHandlers.push([this.keyEventTarget,eventName,boundKeyHandler]);this.keyEventTarget.addEventListener(eventName,boundKeyHandler)}),this)},_unlistenKeyEventListeners:function(){var keyHandlerTuple;var keyEventTarget;var eventName;var boundKeyHandler;while(this._boundKeyHandlers.length){keyHandlerTuple=this._boundKeyHandlers.pop();keyEventTarget=keyHandlerTuple[0];eventName=keyHandlerTuple[1];boundKeyHandler=keyHandlerTuple[2];keyEventTarget.removeEventListener(eventName,boundKeyHandler)}},_onKeyBindingEvent:function(keyBindings,event){if(this.stopKeyboardEventPropagation){event.stopPropagation()}if(event.defaultPrevented){return}for(var i=0;i<keyBindings.length;i++){var keyCombo=keyBindings[i][0];var handlerName=keyBindings[i][1];if(keyComboMatchesEvent(keyCombo,event)){this._triggerKeyHandler(keyCombo,handlerName,event);if(event.defaultPrevented){return}}}},_triggerKeyHandler:function(keyCombo,handlerName,keyboardEvent){var detail=Object.create(keyCombo);detail.keyboardEvent=keyboardEvent;var event=new CustomEvent(keyCombo.event,{detail:detail,cancelable:true});this[handlerName].call(this,event);if(event.defaultPrevented){keyboardEvent.preventDefault()}}};var MAX_RADIUS_PX=300;var MIN_DURATION_MS=800;var distance=function(x1,y1,x2,y2){var xDelta=x1-x2;var yDelta=y1-y2;return Math.sqrt(xDelta*xDelta+yDelta*yDelta)};Polymer({_template:html`
    <style>
      :host {
        bottom: 0;
        display: block;
        left: 0;
        overflow: hidden;
        pointer-events: none;
        position: absolute;
        right: 0;
        top: 0;
        /* For rounded corners: http://jsbin.com/temexa/4. */
        transform: translate3d(0, 0, 0);
      }

      .ripple {
        background-color: currentcolor;
        left: 0;
        opacity: var(--paper-ripple-opacity, 0.25);
        pointer-events: none;
        position: absolute;
        will-change: height, transform, width;
      }

      .ripple,
      :host(.circle) {
        border-radius: 50%;
      }
    </style>
`,is:"paper-ripple",behaviors:[IronA11yKeysBehavior],properties:{center:{type:Boolean,value:false},holdDown:{type:Boolean,value:false,observer:"_holdDownChanged"},recenters:{type:Boolean,value:false},noink:{type:Boolean,value:false}},keyBindings:{"enter:keydown":"_onEnterKeydown","space:keydown":"_onSpaceKeydown","space:keyup":"_onSpaceKeyup"},created:function(){this.ripples=[]},attached:function(){this.keyEventTarget=this.parentNode.nodeType==11?dom(this).getOwnerRoot().host:this.parentNode;this.keyEventTarget=this.keyEventTarget;this.listen(this.keyEventTarget,"up","uiUpAction");this.listen(this.keyEventTarget,"down","uiDownAction")},detached:function(){this.unlisten(this.keyEventTarget,"up","uiUpAction");this.unlisten(this.keyEventTarget,"down","uiDownAction");this.keyEventTarget=null},simulatedRipple:function(){this.downAction();this.async(function(){this.upAction()}.bind(this),1)},uiDownAction:function(e){if(!this.noink)this.downAction(e)},downAction:function(e){if(this.ripples.length&&this.holdDown)return;this.debounce("show ripple",(function(){this.__showRipple(e)}),1)},clear:function(){this.__hideRipple();this.holdDown=false},showAndHoldDown:function(){this.ripples.forEach((ripple=>{ripple.remove()}));this.ripples=[];this.holdDown=true},__showRipple:function(e){var rect=this.getBoundingClientRect();var roundedCenterX=function(){return Math.round(rect.width/2)};var roundedCenterY=function(){return Math.round(rect.height/2)};var centered=!e||this.center;if(centered){var x=roundedCenterX();var y=roundedCenterY()}else{var sourceEvent=e.detail.sourceEvent;var x=Math.round(sourceEvent.clientX-rect.left);var y=Math.round(sourceEvent.clientY-rect.top)}var corners=[{x:0,y:0},{x:rect.width,y:0},{x:0,y:rect.height},{x:rect.width,y:rect.height}];var cornerDistances=corners.map((function(corner){return Math.round(distance(x,y,corner.x,corner.y))}));var radius=Math.min(MAX_RADIUS_PX,Math.max.apply(Math,cornerDistances));var startTranslate=x-radius+"px, "+(y-radius)+"px";if(this.recenters&&!centered){var endTranslate=roundedCenterX()-radius+"px, "+(roundedCenterY()-radius)+"px"}else{var endTranslate=startTranslate}var ripple=document.createElement("div");ripple.classList.add("ripple");ripple.style.height=ripple.style.width=2*radius+"px";this.ripples.push(ripple);this.shadowRoot.appendChild(ripple);ripple.animate({transform:["translate("+startTranslate+") scale(0)","translate("+endTranslate+") scale(1)"]},{duration:Math.max(MIN_DURATION_MS,Math.log(radius)*radius)||0,easing:"cubic-bezier(.2, .9, .1, .9)",fill:"forwards"})},uiUpAction:function(e){if(!this.noink)this.upAction()},upAction:function(e){if(!this.holdDown)this.debounce("hide ripple",(function(){this.__hideRipple()}),1)},__hideRipple:function(){Promise.all(this.ripples.map((function(ripple){return new Promise((function(resolve){var removeRipple=function(){ripple.remove();resolve()};var opacity=getComputedStyle(ripple).opacity;if(!opacity.length){removeRipple()}else{var animation=ripple.animate({opacity:[opacity,0]},{duration:150,fill:"forwards"});animation.addEventListener("finish",removeRipple);animation.addEventListener("cancel",removeRipple)}}))}))).then(function(){this.fire("transitionend")}.bind(this));this.ripples=[]},_onEnterKeydown:function(){this.uiDownAction();this.async(this.uiUpAction,1)},_onSpaceKeydown:function(){this.uiDownAction()},_onSpaceKeyup:function(){this.uiUpAction()},_holdDownChanged:function(newHoldDown,oldHoldDown){if(oldHoldDown===undefined)return;if(newHoldDown)this.downAction();else this.upAction()}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const IronButtonStateImpl={properties:{pressed:{type:Boolean,readOnly:true,value:false,reflectToAttribute:true,observer:"_pressedChanged"},toggles:{type:Boolean,value:false,reflectToAttribute:true},active:{type:Boolean,value:false,notify:true,reflectToAttribute:true},pointerDown:{type:Boolean,readOnly:true,value:false},receivedFocusFromKeyboard:{type:Boolean,readOnly:true},ariaActiveAttribute:{type:String,value:"aria-pressed",observer:"_ariaActiveAttributeChanged"}},listeners:{down:"_downHandler",up:"_upHandler",tap:"_tapHandler"},observers:["_focusChanged(focused)","_activeChanged(active, ariaActiveAttribute)"],keyBindings:{"enter:keydown":"_asyncClick","space:keydown":"_spaceKeyDownHandler","space:keyup":"_spaceKeyUpHandler"},_mouseEventRe:/^mouse/,_tapHandler:function(){if(this.toggles){this._userActivate(!this.active)}else{this.active=false}},_focusChanged:function(focused){this._detectKeyboardFocus(focused);if(!focused){this._setPressed(false)}},_detectKeyboardFocus:function(focused){this._setReceivedFocusFromKeyboard(!this.pointerDown&&focused)},_userActivate:function(active){if(this.active!==active){this.active=active;this.fire("change")}},_downHandler:function(event){this._setPointerDown(true);this._setPressed(true);this._setReceivedFocusFromKeyboard(false)},_upHandler:function(){this._setPointerDown(false);this._setPressed(false)},_spaceKeyDownHandler:function(event){var keyboardEvent=event.detail.keyboardEvent;var target=dom(keyboardEvent).localTarget;if(this.isLightDescendant(target))return;keyboardEvent.preventDefault();keyboardEvent.stopImmediatePropagation();this._setPressed(true)},_spaceKeyUpHandler:function(event){var keyboardEvent=event.detail.keyboardEvent;var target=dom(keyboardEvent).localTarget;if(this.isLightDescendant(target))return;if(this.pressed){this._asyncClick()}this._setPressed(false)},_asyncClick:function(){this.async((function(){this.click()}),1)},_pressedChanged:function(pressed){this._changedButtonState()},_ariaActiveAttributeChanged:function(value,oldValue){if(oldValue&&oldValue!=value&&this.hasAttribute(oldValue)){this.removeAttribute(oldValue)}},_activeChanged:function(active,ariaActiveAttribute){if(this.toggles){this.setAttribute(this.ariaActiveAttribute,active?"true":"false")}else{this.removeAttribute(this.ariaActiveAttribute)}this._changedButtonState()},_controlStateChanged:function(){if(this.disabled){this._setPressed(false)}else{this._changedButtonState()}},_changedButtonState:function(){if(this._buttonStateChanged){this._buttonStateChanged()}}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const PaperRippleBehavior={properties:{noink:{type:Boolean,observer:"_noinkChanged"},_rippleContainer:{type:Object}},_buttonStateChanged:function(){if(this.focused){this.ensureRipple()}},_downHandler:function(event){IronButtonStateImpl._downHandler.call(this,event);if(this.pressed){this.ensureRipple(event)}},ensureRipple:function(optTriggeringEvent){if(!this.hasRipple()){this._ripple=this._createRipple();this._ripple.noink=this.noink;var rippleContainer=this._rippleContainer||this.root;if(rippleContainer){dom(rippleContainer).appendChild(this._ripple)}if(optTriggeringEvent){var domContainer=dom(this._rippleContainer||this);var target=dom(optTriggeringEvent).rootTarget;if(domContainer.deepContains(target)){this._ripple.uiDownAction(optTriggeringEvent)}}}},getRipple:function(){this.ensureRipple();return this._ripple},hasRipple:function(){return Boolean(this._ripple)},_createRipple:function(){var element=document.createElement("paper-ripple");return element},_noinkChanged:function(noink){if(this.hasRipple()){this._ripple.noink=noink}}};function getTemplate$r(){return html`<!--_html_template_start_-->    <style include="cr-hidden-style">:host{--active-shadow-rgb:var(--google-grey-800-rgb);--active-shadow-action-rgb:var(--google-blue-500-rgb);--bg-action:var(--google-blue-600);--border-color:var(--google-grey-300);--disabled-bg-action:var(--google-grey-100);--disabled-bg:white;--disabled-border-color:var(--google-grey-100);--disabled-text-color:var(--google-grey-600);--focus-shadow-color:rgba(var(--google-blue-600-rgb), .4);--hover-bg-action:rgba(var(--google-blue-600-rgb), .9);--hover-bg-color:rgba(var(--google-blue-500-rgb), .04);--hover-border-color:var(--google-blue-100);--hover-shadow-action-rgb:var(--google-blue-500-rgb);--ink-color-action:white;--ink-color:var(--google-blue-600);--ripple-opacity-action:.32;--ripple-opacity:.1;--text-color-action:white;--text-color:var(--google-blue-600)}@media (prefers-color-scheme:dark){:host{--active-bg:black linear-gradient(rgba(255, 255, 255, .06),
                                             rgba(255, 255, 255, .06));--active-shadow-rgb:0,0,0;--active-shadow-action-rgb:var(--google-blue-500-rgb);--bg-action:var(--google-blue-300);--border-color:var(--google-grey-700);--disabled-bg-action:var(--google-grey-800);--disabled-bg:transparent;--disabled-border-color:var(--google-grey-800);--disabled-text-color:var(--google-grey-500);--focus-shadow-color:rgba(var(--google-blue-300-rgb), .5);--hover-bg-action:var(--bg-action) linear-gradient(rgba(0, 0, 0, .08), rgba(0, 0, 0, .08));--hover-bg-color:rgba(var(--google-blue-300-rgb), .08);--ink-color-action:black;--ink-color:var(--google-blue-300);--ripple-opacity-action:.16;--ripple-opacity:.16;--text-color-action:var(--google-grey-900);--text-color:var(--google-blue-300)}}:host{--paper-ripple-opacity:var(--ripple-opacity);-webkit-tap-highlight-color:transparent;align-items:center;border:1px solid var(--border-color);border-radius:4px;box-sizing:border-box;color:var(--text-color);cursor:pointer;display:inline-flex;flex-shrink:0;font-weight:500;height:var(--cr-button-height);justify-content:center;min-width:5.14em;outline-width:0;overflow:hidden;padding:8px 16px;position:relative;user-select:none}:host-context([chrome-refresh-2023]):host{--border-color:var(--color-button-border,
            var(--cr-fallback-color-tonal-outline));--text-color:var(--color-button-foreground,
            var(--cr-fallback-color-primary));--hover-bg-color:transparent;--hover-border-color:var(--border-color);--active-bg:transparent;--active-shadow:none;--ink-color:var(--cr-active-background-color);--ripple-opacity:1;--disabled-bg:transparent;--disabled-border-color:var(--color-button-border-disabled,
            var(--cr-fallback-color-disabled-background));--disabled-text-color:var(--color-button-foreground-disabled,
            var(--cr-fallback-color-disabled-foreground));--bg-action:var(--color-button-background-prominent,
            var(--cr-fallback-color-primary));--text-color-action:var(--color-button-foreground-prominent,
            var(--cr-fallback-color-on-primary));--hover-bg-action:var(--bg-action);--active-shadow-action:none;--ink-color-action:var(--cr-active-background-color);--ripple-opacity-action:1;--disabled-bg-action:var(--color-button-background-prominent-disabled,
            var(--cr-fallback-color-disabled-background));background:0 0;border-radius:100px;isolation:isolate;line-height:20px}:host([has-prefix-icon_]),:host([has-suffix-icon_]){--iron-icon-height:16px;--iron-icon-width:16px;gap:8px;padding:8px}:host-context([chrome-refresh-2023]):host([has-prefix-icon_]),:host-context([chrome-refresh-2023]):host([has-suffix-icon_]){--iron-icon-height:20px;--iron-icon-width:20px;--icon-block-padding-large:16px;--icon-block-padding-small:12px;padding-block-end:8px;padding-block-start:8px}:host-context([chrome-refresh-2023]):host([has-prefix-icon_]){padding-inline-end:var(--icon-block-padding-large);padding-inline-start:var(--icon-block-padding-small)}:host-context([chrome-refresh-2023]):host([has-suffix-icon_]){padding-inline-end:var(--icon-block-padding-small);padding-inline-start:var(--icon-block-padding-large)}:host-context(.focus-outline-visible):host(:focus){box-shadow:0 0 0 2px var(--focus-shadow-color)}@media (forced-colors:active){:host-context(.focus-outline-visible):host(:focus){outline:var(--cr-focus-outline-hcm)}:host-context([chrome-refresh-2023]):host{forced-color-adjust:none}}:host-context([chrome-refresh-2023].focus-outline-visible):host(:focus){box-shadow:none;outline:2px solid var(--cr-focus-outline-color);outline-offset:2px}:host(:active){background:var(--active-bg);box-shadow:var(--active-shadow,0 1px 2px 0 rgba(var(--active-shadow-rgb),.3),0 3px 6px 2px rgba(var(--active-shadow-rgb),.15))}:host(:hover){background-color:var(--hover-bg-color)}@media (prefers-color-scheme:light){:host(:hover){border-color:var(--hover-border-color)}}#background{border-radius:inherit;inset:0;pointer-events:none;position:absolute;z-index:0}:host-context([chrome-refresh-2023]):host(:hover) #background{background-color:var(--hover-bg-color)}:host-context([chrome-refresh-2023].focus-outline-visible):host(:focus) #background{background-clip:padding-box}:host-context([chrome-refresh-2023]):host(.action-button) #background{background-color:var(--bg-action)}:host-context([chrome-refresh-2023]):host([disabled]) #background{background-color:var(--disabled-bg)}:host-context([chrome-refresh-2023]):host(.action-button[disabled]) #background{background-color:var(--disabled-bg-action)}:host-context([chrome-refresh-2023]):host(.floating-button) #background,:host-context([chrome-refresh-2023]):host(.tonal-button) #background{background-color:var(--color-button-background-tonal,var(--cr-fallback-color-secondary-container))}:host-context([chrome-refresh-2023]):host([disabled].floating-button) #background,:host-context([chrome-refresh-2023]):host([disabled].tonal-button) #background{background-color:var(--color-button-background-tonal-disabled,var(--cr-fallback-color-disabled-background))}#content{display:contents}:host-context([chrome-refresh-2023]) #content{display:inline;z-index:2}:host-context([chrome-refresh-2023]) ::slotted(*){z-index:2}#hoverBackground{content:'';display:none;inset:0;pointer-events:none;position:absolute;z-index:1}:host-context([chrome-refresh-2023]):host(:hover) #hoverBackground{background:var(--cr-hover-background-color);display:block}:host-context([chrome-refresh-2023]):host(.action-button:hover) #hoverBackground{background:var(--cr-hover-on-prominent-background-color)}:host(.action-button){--ink-color:var(--ink-color-action);--paper-ripple-opacity:var(--ripple-opacity-action);background-color:var(--bg-action);border:none;color:var(--text-color-action)}:host-context([chrome-refresh-2023]):host(.action-button){--ink-color:var(--cr-active-on-primary-background-color);background-color:transparent}:host(.action-button:active){box-shadow:var(--active-shadow-action,0 1px 2px 0 rgba(var(--active-shadow-action-rgb),.3),0 3px 6px 2px rgba(var(--active-shadow-action-rgb),.15))}:host(.action-button:hover){background:var(--hover-bg-action)}@media (prefers-color-scheme:light){:host(.action-button:not(:active):hover){box-shadow:0 1px 2px 0 rgba(var(--hover-shadow-action-rgb),.3),0 1px 3px 1px rgba(var(--hover-shadow-action-rgb),.15)}:host-context([chrome-refresh-2023]):host(.action-button:not(:active):hover){box-shadow:none}}:host([disabled]){background-color:var(--disabled-bg);border-color:var(--disabled-border-color);color:var(--disabled-text-color);cursor:auto;pointer-events:none}:host(.action-button[disabled]){background-color:var(--disabled-bg-action);border-color:transparent}:host(.cancel-button){margin-inline-end:8px}:host(.action-button),:host(.cancel-button){line-height:154%}:host-context([chrome-refresh-2023]):host(.floating-button),:host-context([chrome-refresh-2023]):host(.tonal-button){border:none;color:var(--color-button-foreground-tonal,var(--cr-fallback-color-on-tonal-container))}:host-context([chrome-refresh-2023]):host(.floating-button[disabled]),:host-context([chrome-refresh-2023]):host(.tonal-button[disabled]){border:none;color:var(--disabled-text-color)}:host-context([chrome-refresh-2023]):host(.floating-button){border-radius:8px;height:40px;transition:box-shadow 80ms linear}:host-context([chrome-refresh-2023]):host(.floating-button:hover){box-shadow:var(--cr-elevation-3)}paper-ripple{color:var(--ink-color);height:var(--paper-ripple-height);left:var(--paper-ripple-left,0);top:var(--paper-ripple-top,0);width:var(--paper-ripple-width)}:host-context([chrome-refresh-2023]) paper-ripple{z-index:1}</style>

    <div id="background"></div>
    <slot id="prefixIcon" name="prefix-icon" on-slotchange="onPrefixIconSlotChanged_">
    </slot>
    <span id="content"><slot></slot></span>
    <slot id="suffixIcon" name="suffix-icon" on-slotchange="onSuffixIconSlotChanged_">
    </slot>
    <div id="hoverBackground" part="hoverBackground"></div>
<!--_html_template_end_-->`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrButtonElementBase=mixinBehaviors([PaperRippleBehavior],PolymerElement);class CrButtonElement extends CrButtonElementBase{static get is(){return"cr-button"}static get template(){return getTemplate$r()}static get properties(){return{disabled:{type:Boolean,value:false,reflectToAttribute:true,observer:"disabledChanged_"},customTabIndex:{type:Number,observer:"applyTabIndex_"},circleRipple:{type:Boolean,value:false},hasPrefixIcon_:{type:Boolean,reflectToAttribute:true,value:false},hasSuffixIcon_:{type:Boolean,reflectToAttribute:true,value:false}}}constructor(){super();this.spaceKeyDown_=false;this.timeoutIds_=new Set;this.addEventListener("blur",this.onBlur_.bind(this));this.addEventListener("click",this.onClick_.bind(this));this.addEventListener("keydown",this.onKeyDown_.bind(this));this.addEventListener("keyup",this.onKeyUp_.bind(this));this.addEventListener("pointerdown",this.onPointerDown_.bind(this))}ready(){super.ready();if(!this.hasAttribute("role")){this.setAttribute("role","button")}if(!this.hasAttribute("tabindex")){this.setAttribute("tabindex","0")}if(!this.hasAttribute("aria-disabled")){this.setAttribute("aria-disabled",this.disabled?"true":"false")}FocusOutlineManager.forDocument(document)}disconnectedCallback(){super.disconnectedCallback();this.timeoutIds_.forEach(clearTimeout);this.timeoutIds_.clear()}setTimeout_(fn,delay){if(!this.isConnected){return}const id=setTimeout((()=>{this.timeoutIds_.delete(id);fn()}),delay);this.timeoutIds_.add(id)}disabledChanged_(newValue,oldValue){if(!newValue&&oldValue===undefined){return}if(this.disabled){this.blur()}this.setAttribute("aria-disabled",this.disabled?"true":"false");this.applyTabIndex_()}applyTabIndex_(){let value=this.customTabIndex;if(value===undefined){value=this.disabled?-1:0}this.setAttribute("tabindex",value.toString())}onBlur_(){this.spaceKeyDown_=false;this.setTimeout_((()=>this.getRipple().uiUpAction()),100)}onClick_(e){if(this.disabled){e.stopImmediatePropagation()}}onPrefixIconSlotChanged_(){this.hasPrefixIcon_=this.$.prefixIcon.assignedElements().length>0}onSuffixIconSlotChanged_(){this.hasSuffixIcon_=this.$.suffixIcon.assignedElements().length>0}onKeyDown_(e){if(e.key!==" "&&e.key!=="Enter"){return}e.preventDefault();e.stopPropagation();if(e.repeat){return}this.getRipple().uiDownAction();if(e.key==="Enter"){this.click();this.setTimeout_((()=>this.getRipple().uiUpAction()),100)}else if(e.key===" "){this.spaceKeyDown_=true}}onKeyUp_(e){if(e.key!==" "&&e.key!=="Enter"){return}e.preventDefault();e.stopPropagation();if(this.spaceKeyDown_&&e.key===" "){this.spaceKeyDown_=false;this.click();this.getRipple().uiUpAction()}}onPointerDown_(){this.ensureRipple()}_createRipple(){const ripple=super._createRipple();if(this.circleRipple){ripple.setAttribute("center","");ripple.classList.add("circle")}return ripple}}customElements.define(CrButtonElement.is,CrButtonElement);const styleMod$6=document.createElement("dom-module");styleMod$6.appendChild(html`
  <template>
    <style>
.md-select{--md-arrow-width:10px;--md-select-bg-color:var(--google-grey-100);--md-select-focus-shadow-color:rgba(var(--google-blue-600-rgb), .4);--md-select-option-bg-color:white;--md-select-side-padding:8px;--md-select-text-color:var(--cr-primary-text-color);-webkit-appearance:none;background:url(//resources/images/arrow_down.svg) calc(100% - var(--md-select-side-padding)) center no-repeat;background-color:var(--md-select-bg-color);background-size:var(--md-arrow-width);border:none;border-radius:4px;color:var(--md-select-text-color);cursor:pointer;font-family:inherit;font-size:inherit;line-height:inherit;max-width:100%;outline:0;padding-bottom:6px;padding-inline-end:calc(var(--md-select-side-padding) + var(--md-arrow-width) + 3px);padding-inline-start:var(--md-select-side-padding);padding-top:6px;width:var(--md-select-width,200px)}@media (prefers-color-scheme:dark){.md-select{--md-select-bg-color:rgba(0, 0, 0, .3);--md-select-focus-shadow-color:rgba(var(--google-blue-300-rgb), .5);--md-select-option-bg-color:var(--google-grey-900-white-4-percent);background-image:url(//resources/images/dark/arrow_down.svg)}}:host-context([chrome-refresh-2023]) .md-select{--md-select-bg-color:transparent;--md-arrow-width:7px;--md-select-side-padding:10px;--md-select-text-color:inherit;border:solid 1px var(--color-combobox-container-outline,var(--cr-fallback-color-neutral-outline));border-radius:8px;box-sizing:border-box;font-size:12px;height:36px;line-height:36px;padding-bottom:0;padding-top:0}:host-context([chrome-refresh-2023]) .md-select:hover{background-color:var(--color-comboxbox-ink-drop-hovered,var(--cr-hover-on-subtle-background-color))}.md-select :-webkit-any(option,optgroup){background-color:var(--md-select-option-bg-color)}.md-select[disabled]{opacity:var(--cr-disabled-opacity);pointer-events:none}:host-context([chrome-refresh-2023]) .md-select[disabled]{background-color:var(--color-combobox-background-disabled,var(--cr-fallback-color-disabled-background));border-color:transparent;color:var(--color-textfield-foreground-disabled,var(--cr-fallback-color-disabled-foreground));opacity:1}.md-select:focus{box-shadow:0 0 0 2px var(--md-select-focus-shadow-color)}:host-context([chrome-refresh-2023]) .md-select:focus{box-shadow:none;outline:solid 2px var(--cr-focus-outline-color);outline-offset:-1px}@media (forced-colors:active){.md-select:focus{outline:var(--cr-focus-outline-hcm)}}.md-select:active{box-shadow:none}:host-context([dir=rtl]) .md-select{background-position-x:var(--md-select-side-padding)}
    </style>
  </template>
`.content);styleMod$6.register("md-select");
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
/* Most common used flex styles*/
<dom-module id="iron-flex">
  <template>
    <style>
      .layout.horizontal,
      .layout.vertical {
        display: flex;
      }

      .layout.inline {
        display: inline-flex;
      }

      .layout.horizontal {
        flex-direction: row;
      }

      .layout.vertical {
        flex-direction: column;
      }

      .layout.wrap {
        flex-wrap: wrap;
      }

      .layout.no-wrap {
        flex-wrap: nowrap;
      }

      .layout.center,
      .layout.center-center {
        align-items: center;
      }

      .layout.center-justified,
      .layout.center-center {
        justify-content: center;
      }

      .flex {
        flex: 1;
        flex-basis: 0.000000001px;
      }

      .flex-auto {
        flex: 1 1 auto;
      }

      .flex-none {
        flex: none;
      }
    </style>
  </template>
</dom-module>
/* Basic flexbox reverse styles */
<dom-module id="iron-flex-reverse">
  <template>
    <style>
      .layout.horizontal-reverse,
      .layout.vertical-reverse {
        display: flex;
      }

      .layout.horizontal-reverse {
        flex-direction: row-reverse;
      }

      .layout.vertical-reverse {
        flex-direction: column-reverse;
      }

      .layout.wrap-reverse {
        flex-wrap: wrap-reverse;
      }
    </style>
  </template>
</dom-module>
/* Flexbox alignment */
<dom-module id="iron-flex-alignment">
  <template>
    <style>
      /**
       * Alignment in cross axis.
       */
      .layout.start {
        align-items: flex-start;
      }

      .layout.center,
      .layout.center-center {
        align-items: center;
      }

      .layout.end {
        align-items: flex-end;
      }

      .layout.baseline {
        align-items: baseline;
      }

      /**
       * Alignment in main axis.
       */
      .layout.start-justified {
        justify-content: flex-start;
      }

      .layout.center-justified,
      .layout.center-center {
        justify-content: center;
      }

      .layout.end-justified {
        justify-content: flex-end;
      }

      .layout.around-justified {
        justify-content: space-around;
      }

      .layout.justified {
        justify-content: space-between;
      }

      /**
       * Self alignment.
       */
      .self-start {
        align-self: flex-start;
      }

      .self-center {
        align-self: center;
      }

      .self-end {
        align-self: flex-end;
      }

      .self-stretch {
        align-self: stretch;
      }

      .self-baseline {
        align-self: baseline;
      }

      /**
       * multi-line alignment in main axis.
       */
      .layout.start-aligned {
        align-content: flex-start;
      }

      .layout.end-aligned {
        align-content: flex-end;
      }

      .layout.center-aligned {
        align-content: center;
      }

      .layout.between-aligned {
        align-content: space-between;
      }

      .layout.around-aligned {
        align-content: space-around;
      }
    </style>
  </template>
</dom-module>
/* Non-flexbox positioning helper styles */
<dom-module id="iron-flex-factors">
  <template>
    <style>
      .flex,
      .flex-1 {
        flex: 1;
        flex-basis: 0.000000001px;
      }

      .flex-2 {
        flex: 2;
      }

      .flex-3 {
        flex: 3;
      }

      .flex-4 {
        flex: 4;
      }

      .flex-5 {
        flex: 5;
      }

      .flex-6 {
        flex: 6;
      }

      .flex-7 {
        flex: 7;
      }

      .flex-8 {
        flex: 8;
      }

      .flex-9 {
        flex: 9;
      }

      .flex-10 {
        flex: 10;
      }

      .flex-11 {
        flex: 11;
      }

      .flex-12 {
        flex: 12;
      }
    </style>
  </template>
</dom-module>
<dom-module id="iron-positioning">
  <template>
    <style>
      .block {
        display: block;
      }

      [hidden] {
        display: none !important;
      }

      .invisible {
        visibility: hidden !important;
      }

      .relative {
        position: relative;
      }

      .fit {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }

      body.fullbleed {
        margin: 0;
        height: 100vh;
      }

      .scroll {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      }

      /* fixed position */
      .fixed-bottom,
      .fixed-left,
      .fixed-right,
      .fixed-top {
        position: fixed;
      }

      .fixed-top {
        top: 0;
        left: 0;
        right: 0;
      }

      .fixed-right {
        top: 0;
        right: 0;
        bottom: 0;
      }

      .fixed-bottom {
        right: 0;
        bottom: 0;
        left: 0;
      }

      .fixed-left {
        top: 0;
        bottom: 0;
        left: 0;
      }
    </style>
  </template>
</dom-module>
`;template$1.setAttribute("style","display: none;");document.head.appendChild(template$1.content);const styleMod$5=document.createElement("dom-module");styleMod$5.appendChild(html`
  <template>
    <style>
:host{--cr-input-background-color:var(--google-grey-100);--cr-input-color:var(--cr-primary-text-color);--cr-input-error-color:var(--google-red-600);--cr-input-focus-color:var(--google-blue-600);display:block;outline:0}:host-context([chrome-refresh-2023]):host{--cr-input-background-color:var(--color-textfield-filled-background,
            var(--cr-fallback-color-surface-variant));--cr-input-border-bottom:1px solid var(--color-textfield-filled-underline,
                var(--cr-fallback-color-outline));--cr-input-border-radius:8px 8px 0 0;--cr-input-error-color:var(--color-textfield-filled-error,
            var(--cr-fallback-color-error));--cr-input-focus-color:var(--color-textfield-filled-underline-focused,
            var(--cr-fallback-color-primary));--cr-input-hover-background-color:var(--cr-hover-background-color);--cr-input-padding-bottom:10px;--cr-input-padding-end:10px;--cr-input-padding-start:10px;--cr-input-padding-top:10px;--cr-input-placeholder-color:var(--color-textfield-foreground-placeholder,
                var(--cr-fallback-on-surface-subtle));isolation:isolate}:host-context([chrome-refresh-2023]):host([readonly]){--cr-input-border-radius:8px 8px}@media (prefers-color-scheme:dark){:host{--cr-input-background-color:rgba(0, 0, 0, .3);--cr-input-error-color:var(--google-red-300);--cr-input-focus-color:var(--google-blue-300)}}:host-context(html:not([chrome-refresh-2023])):host([focused_]:not([readonly]):not([invalid])) #label{color:var(--cr-input-focus-color)}:host-context([chrome-refresh-2023]) #label{color:var(--color-textfield-foreground-label,var(--cr-fallback-color-on-surface-subtle));font-size:11px;line-height:16px}#input-container{border-radius:var(--cr-input-border-radius,4px);overflow:hidden;position:relative;width:var(--cr-input-width,100%)}#inner-input-container{background-color:var(--cr-input-background-color);box-sizing:border-box;padding:0}:host-context([chrome-refresh-2023]) #inner-input-content ::slotted(*){--cr-icon-button-fill-color:var(--color-textfield-foreground-icon,
            var(--cr-fallback-color-on-surface-subtle));--cr-icon-button-icon-size:16px;--cr-icon-button-size:24px;--cr-icon-button-margin-start:0;--cr-icon-color:var(--color-textfield-foreground-icon,
            var(--cr-fallback-color-on-surface-subtle))}:host-context([chrome-refresh-2023]) #inner-input-content ::slotted([slot=inline-prefix]){--cr-icon-button-margin-start:-8px}:host-context([chrome-refresh-2023]) #inner-input-content ::slotted([slot=inline-suffix]){--cr-icon-button-margin-end:-4px}:host-context([chrome-refresh-2023]):host([invalid]) #inner-input-content ::slotted(*){--cr-icon-color:var(--cr-input-error-color);--cr-icon-button-fill-color:var(--cr-input-error-color)}#hover-layer{display:none}:host-context([chrome-refresh-2023]) #hover-layer{background-color:var(--cr-input-hover-background-color);inset:0;pointer-events:none;position:absolute;z-index:0}:host-context([chrome-refresh-2023]):host(:not([readonly]):not([disabled])) #input-container:hover #hover-layer{display:block}#input{-webkit-appearance:none;background-color:transparent;border:none;box-sizing:border-box;caret-color:var(--cr-input-focus-color);color:var(--cr-input-color);font-family:inherit;font-size:inherit;font-weight:inherit;line-height:inherit;min-height:var(--cr-input-min-height,auto);outline:0;padding-bottom:var(--cr-input-padding-bottom,6px);padding-inline-end:var(--cr-input-padding-end,8px);padding-inline-start:var(--cr-input-padding-start,8px);padding-top:var(--cr-input-padding-top,6px);text-align:inherit;text-overflow:ellipsis;width:100%}:host-context([chrome-refresh-2023]) #input{font-size:12px;line-height:16px;padding:0}:host-context([chrome-refresh-2023]) #inner-input-content{padding-bottom:var(--cr-input-padding-bottom);padding-inline-end:var(--cr-input-padding-end);padding-inline-start:var(--cr-input-padding-start);padding-top:var(--cr-input-padding-top)}#underline{border-bottom:2px solid var(--cr-input-focus-color);border-radius:var(--cr-input-underline-border-radius,0);bottom:0;box-sizing:border-box;display:var(--cr-input-underline-display);height:var(--cr-input-underline-height,0);left:0;margin:auto;opacity:0;position:absolute;right:0;transition:opacity 120ms ease-out,width 0s linear 180ms;width:0}:host([focused_]) #underline,:host([force-underline]) #underline,:host([invalid]) #underline{opacity:1;transition:opacity 120ms ease-in,width 180ms ease-out;width:100%}#underline-base{display:none}:host-context([chrome-refresh-2023]):host([readonly]) #underline{display:none}:host-context([chrome-refresh-2023]):host(:not([readonly])) #underline-base{border-bottom:var(--cr-input-border-bottom);bottom:0;display:block;left:0;position:absolute;right:0}:host-context([chrome-refresh-2023]):host([disabled]){color:var(--color-textfield-foreground-disabled,var(--cr-fallback-color-disabled-foreground));--cr-input-border-bottom:1px solid currentColor;--cr-input-placeholder-color:currentColor;--cr-input-color:currentColor;--cr-input-background-color:var(--color-textfield-background-disabled,
            var(--cr-fallback-color-disabled-background))}:host-context([chrome-refresh-2023]):host([disabled]) #inner-input-content ::slotted(*){--cr-icon-color:currentColor;--cr-icon-button-fill-color:currentColor}
    </style>
  </template>
`.content);styleMod$5.register("cr-input-style");
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function assert(value,message){if(value){return}throw new Error("Assertion failed"+(message?`: ${message}`:""))}function assertInstanceof(value,type,message){if(value instanceof type){return}throw new Error(message||`Value ${value} is not of type ${type.name||typeof type}`)}function assertNotReached(message="Unreachable code hit"){assert(false,message)}function getTemplate$q(){return html`<!--_html_template_start_-->    <style include="cr-hidden-style cr-input-style cr-shared-style">:host([disabled]) :-webkit-any(#label,#error,#input-container){opacity:var(--cr-disabled-opacity);pointer-events:none}:host-context([chrome-refresh-2023]):host([disabled]) :is(#label,#error,#input-container){opacity:1}:host ::slotted(cr-button[slot=suffix]){margin-inline-start:var(--cr-button-edge-spacing)!important}:host([invalid]) #label{color:var(--cr-input-error-color)}#input{border-bottom:var(--cr-input-border-bottom,none);letter-spacing:var(--cr-input-letter-spacing)}:host-context([chrome-refresh-2023]) #input{border-bottom:none}:host-context([chrome-refresh-2023]) #input-container{border:var(--cr-input-border,none)}#input::placeholder{color:var(--cr-input-placeholder-color,var(--cr-secondary-text-color));letter-spacing:var(--cr-input-placeholder-letter-spacing)}:host([invalid]) #input{caret-color:var(--cr-input-error-color)}:host([readonly]) #input{opacity:var(--cr-input-readonly-opacity,.6)}:host([invalid]) #underline{border-color:var(--cr-input-error-color)}#error{color:var(--cr-input-error-color);display:var(--cr-input-error-display,block);font-size:var(--cr-form-field-label-font-size);height:var(--cr-form-field-label-height);line-height:var(--cr-form-field-label-line-height);margin:8px 0;visibility:hidden;white-space:var(--cr-input-error-white-space)}:host-context([chrome-refresh-2023]) #error{font-size:11px;line-height:16px;margin:4px 10px}:host([invalid]) #error{visibility:visible}#inner-input-content,#row-container{align-items:center;display:flex;justify-content:space-between;position:relative}:host-context([chrome-refresh-2023]) #inner-input-content{gap:4px;height:16px;z-index:1}#input[type=search]::-webkit-search-cancel-button{display:none}:host-context([dir=rtl]) #input[type=url]{text-align:right}#input[type=url]{direction:ltr}</style>
    <div id="label" class="cr-form-field-label" hidden="[[!label]]" aria-hidden="true">
      [[label]]
    </div>
    <div id="row-container" part="row-container">
      <div id="input-container">
        <div id="inner-input-container">
          <div id="hover-layer"></div>
          <div id="inner-input-content">
            <slot name="inline-prefix"></slot>
            
            <input id="input" disabled="[[disabled]]" autofocus="[[autofocus]]" value="{{value::input}}" tabindex$="[[inputTabindex]]" type="[[type]]" readonly$="[[readonly]]" maxlength$="[[maxlength]]" pattern$="[[pattern]]" required="[[required]]" minlength$="[[minlength]]" inputmode$="[[inputmode]]" aria-description$="[[ariaDescription]]" aria-label$="[[getAriaLabel_(ariaLabel, label, placeholder)]]" aria-invalid$="[[getAriaInvalid_(invalid)]]" max="[[max]]" min="[[min]]" on-focus="onInputFocus_" on-blur="onInputBlur_" on-change="onInputChange_" part="input" autocomplete="off">
            <slot name="inline-suffix"></slot>
          </div>
        </div>
        <div id="underline-base"></div>
        <div id="underline"></div>
      </div>
      <slot name="suffix"></slot>
    </div>
    <div id="error" aria-live="assertive">[[displayErrorMessage_]]</div>
<!--_html_template_end_-->`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SUPPORTED_INPUT_TYPES=new Set(["number","password","search","text","url"]);class CrInputElement extends PolymerElement{static get is(){return"cr-input"}static get template(){return getTemplate$q()}static get properties(){return{ariaDescription:{type:String},ariaLabel:{type:String,value:""},autofocus:{type:Boolean,value:false,reflectToAttribute:true},autoValidate:Boolean,disabled:{type:Boolean,value:false,reflectToAttribute:true},errorMessage:{type:String,value:"",observer:"onInvalidOrErrorMessageChanged_"},displayErrorMessage_:{type:String,value:""},focused_:{type:Boolean,value:false,reflectToAttribute:true},invalid:{type:Boolean,value:false,notify:true,reflectToAttribute:true,observer:"onInvalidOrErrorMessageChanged_"},max:{type:Number,reflectToAttribute:true},min:{type:Number,reflectToAttribute:true},maxlength:{type:Number,reflectToAttribute:true},minlength:{type:Number,reflectToAttribute:true},pattern:{type:String,reflectToAttribute:true},inputmode:String,label:{type:String,value:""},placeholder:{type:String,value:null,observer:"placeholderChanged_"},readonly:{type:Boolean,reflectToAttribute:true},required:{type:Boolean,reflectToAttribute:true},inputTabindex:{type:Number,value:0,observer:"onInputTabindexChanged_"},type:{type:String,value:"text",observer:"onTypeChanged_"},value:{type:String,value:"",notify:true,observer:"onValueChanged_"}}}ready(){super.ready();assert(!this.hasAttribute("tabindex"))}onInputTabindexChanged_(){assert(this.inputTabindex===0||this.inputTabindex===-1)}onTypeChanged_(){assert(SUPPORTED_INPUT_TYPES.has(this.type))}get inputElement(){return this.$.input}getAriaLabel_(ariaLabel,label,placeholder){return ariaLabel||label||placeholder}getAriaInvalid_(invalid){return invalid?"true":"false"}onInvalidOrErrorMessageChanged_(){this.displayErrorMessage_=this.invalid?this.errorMessage:"";const ERROR_ID="error";const errorElement=this.shadowRoot.querySelector(`#${ERROR_ID}`);assert(errorElement);if(this.invalid){errorElement.setAttribute("role","alert");this.inputElement.setAttribute("aria-errormessage",ERROR_ID)}else{errorElement.removeAttribute("role");this.inputElement.removeAttribute("aria-errormessage")}}placeholderChanged_(){if(this.placeholder||this.placeholder===""){this.inputElement.setAttribute("placeholder",this.placeholder)}else{this.inputElement.removeAttribute("placeholder")}}focus(){this.focusInput()}focusInput(){if(this.shadowRoot.activeElement===this.inputElement){return false}this.inputElement.focus();return true}onValueChanged_(newValue,oldValue){if(!newValue&&!oldValue){return}if(this.autoValidate){this.validate()}}onInputChange_(e){this.dispatchEvent(new CustomEvent("change",{bubbles:true,composed:true,detail:{sourceEvent:e}}))}onInputFocus_(){this.focused_=true}onInputBlur_(){this.focused_=false}select(start,end){this.inputElement.focus();if(start!==undefined&&end!==undefined){this.inputElement.setSelectionRange(start,end)}else{assert(start===undefined&&end===undefined);this.inputElement.select()}}validate(){this.invalid=!this.inputElement.checkValidity();return!this.invalid}}customElements.define(CrInputElement.is,CrInputElement);const styleMod$4=document.createElement("dom-module");styleMod$4.appendChild(html`
  <template>
    <style>
:host-context([cros]) a:not(.item)[href]{color:var(--cros-link-color)}:host-context([cros]) cr-button[has-prefix-icon_],:host-context([cros]) cr-button[has-suffix-icon_]{--iron-icon-fill-color:currentColor}:host-context([cros]) cr-dialog::part(dialog){--cr-dialog-background-color:var(--cros-bg-color-elevation-3);background-image:none;box-shadow:var(--cros-elevation-3-shadow)}:host-context([cros]) cr-radio-button{--cr-radio-button-checked-color:var(--cros-radio-button-color);--cr-radio-button-checked-ripple-color:var(--cros-radio-button-ripple-color);--cr-radio-button-unchecked-color:var(--cros-radio-button-color-unchecked);--cr-radio-button-unchecked-ripple-color:var(--cros-radio-button-ripple-color-unchecked)}:host-context([cros]) cr-toast{--cr-toast-background-color:var(--cros-toast-background-color);--cr-toast-background:var(--cros-toast-background-color);--cr-toast-text-color:var(--cros-toast-text-color);--iron-icon-fill-color:var(--cros-toast-icon-color)}:host-context([cros]) cr-toast .error-message{color:var(--cros-toast-text-color)}:host-context([cros]) cr-toggle{--cr-toggle-checked-bar-color:var(--cros-switch-track-color-active);--cr-toggle-checked-bar-opacity:100%;--cr-toggle-checked-button-color:var(--cros-switch-knob-color-active);--cr-toggle-checked-ripple-color:var(--cros-focus-aura-color);--cr-toggle-unchecked-bar-color:var(--cros-switch-track-color-inactive);--cr-toggle-unchecked-button-color:var(--cros-switch-knob-color-inactive);--cr-toggle-unchecked-ripple-color:var(--cros-ripple-color);--cr-toggle-box-shadow:var(--cros-elevation-1-shadow);--cr-toggle-ripple-diameter:32px}:host-context([cros]) cr-toggle:focus{--cr-toggle-ripple-ring:2px solid var(--cros-focus-ring-color)}:host-context([cros]) .primary-toggle{color:var(--cros-text-color-secondary)}:host-context([cros]) .primary-toggle[checked]{color:var(--cros-text-color-prominent)}:host-context([cros]) paper-spinner-lite{--paper-spinner-color:var(--cros-icon-color-prominent)}:host-context([cros]) cr-tooltip-icon{--cr-link-color:var(--cros-tooltip-link-color)}:host-context(body.jelly-enabled){--cros-button-label-color-primary:var(--cros-sys-on_primary);--cros-link-color:var(--cros-sys-primary);--cros-separator-color:var(--cros-sys-separator);--cros-tab-slider-track-color:var(--cros-sys-surface_variant, 80%);--cr-form-field-label-color:var(--cros-sys-on_surface);--cr-link-color:var(--cros-sys-primary);--cr-primary-text-color:var(--cros-sys-on_surface);--cr-secondary-text-color:var(--cros-sys-on_surface_variant)}:host-context(body.jelly-enabled) cr-button{--text-color:var(--cros-sys-on_primary_container);--ink-color:var(--cros-sys-ripple_primary);--iron-icon-fill-color:currentColor;--hover-bg-color:var(--cros-sys-hover_on_subtle);--ripple-opacity:.1;--bg-action:var(--cros-sys-primary);--ink-color-action:var(--cros-sys-ripple_primary);--text-color-action:var(--cros-sys-on_primary);--hover-bg-action:var(--cros-sys-hover_on_prominent);--ripple-opacity-action:1;--disabled-bg:var(--cros-sys-disabled_container);--disabled-bg-action:var(--cros-sys-disabled_container);--disabled-text-color:var(--cros-sys-disabled);background-color:var(--cros-sys-primary_container);border:none}:host-context(body.jelly-enabled) cr-button:hover::part(hoverBackground){background-color:var(--hover-bg-color);display:block}:host-context(body.jelly-enabled) cr-button.action-button:not(:active):hover,:host-context(body.jelly-enabled) cr-button:active{box-shadow:none}:host-context(body.jelly-enabled) cr-button.action-button{background-color:var(--bg-action)}:host-context(body.jelly-enabled) cr-button.action-button:hover::part(hoverBackground){background-color:var(--hover-bg-action)}:host-context(body.jelly-enabled) cr-button[disabled]{background-color:var(--cros-sys-disabled_container)}:host-context(body.jelly-enabled):host-context(.focus-outline-visible) cr-button:focus{box-shadow:none;outline:2px solid var(--cros-sys-focus_ring)}:host-context(body.jelly-enabled) cr-checkbox{--cr-checkbox-checked-box-color:var(--cros-sys-primary);--cr-checkbox-ripple-checked-color:var(--cros-sys-ripple_primary);--cr-checkbox-checked-ripple-opacity:1;--cr-checkbox-mark-color:var(--cros-sys-inverse_on_surface);--cr-checkbox-ripple-unchecked-color:var(--cros-sys-ripple_primary);--cr-checkbox-unchecked-box-color:var(--cros-sys-on_surface);--cr-checkbox-unchecked-ripple-opacity:1}:host-context(body.jelly-enabled) cr-dialog::part(dialog){--cr-dialog-background-color:var(--cros-sys-base_elevated);background-image:none;box-shadow:0 0 12px 0 var(--cros-sys-shadow)}:host-context(body.jelly-enabled) cr-dialog>[slot=title]{font:var(--cros-display-7-font)}:host-context(body.jelly-enabled) cr-drawer{--cr-drawer-background-color:var(--cros-sys-app_base_shaded)}:host-context(body.jelly-enabled) cr-expand-button::part(icon),:host-context(body.jelly-enabled) cr-icon-button,:host-context(body.jelly-enabled) cr-link-row::part(icon){--cr-icon-button-fill-color:var(--cros-sys-secondary)}:host-context(body.jelly-enabled) cr-input,:host-context(body.jelly-enabled) cr-search-field::part(searchInput),:host-context(body.jelly-enabled) cr-textarea{--cr-input-background-color:var(--cros-sys-input_field_on_base);--cr-input-error-color:var(--cros-sys-error);--cr-input-focus-color:var(--cros-sys-primary);--cr-input-placeholder-color:var(--cros-sys-secondary)}:host-context(body.jelly-enabled) .md-select{--md-select-bg-color:var(--cros-sys-input_field_on_base);--md-select-focus-shadow-color:var(--cros-sys-primary);--md-select-option-bg-color:var(--cros-sys-base_elevated);--md-select-text-color:var(--cros-sys-on_surface)}:host-context(body.jelly-enabled) cr-action-menu{--cr-menu-background-color:var(--cros-sys-base_elevated);--cr-menu-background-focus-color:var(--cros-sys-hover_on_subtle)}:host-context(body.jelly-enabled),:host-context(body.jelly-enabled) cr-radio-button{--cr-radio-button-checked-color:var(--cros-sys-primary);--cr-radio-button-checked-ripple-color:var(--cros-sys-ripple_primary);--cr-radio-button-unchecked-color:var(--cros-sys-on_surface);--cr-radio-button-unchecked-ripple-color:var(--cros-sys-ripple_neutral_on_subtle)}:host-context(body.jelly-enabled) cr-card-radio-button{--cr-card-background-color:var(--cros-sys-app_base);--cr-checked-color:var(--cros-sys-primary);--cr-radio-button-checked-ripple-color:var(--cros-sys-ripple_primary);--hover-bg-color:var(--cros-sys-hover_on_subtle)}:host-context(body.jelly-enabled) cr-search-field{--cr-search-field-clear-icon-fill:var(--cros-sys-primary);--cr-search-field-clear-icon-margin-end:6px;--cr-search-field-input-border-bottom:none;--cr-search-field-input-padding-start:8px;--cr-search-field-input-underline-border-radius:4px;--cr-search-field-search-icon-display:none;--cr-search-field-search-icon-fill:var(--cros-sys-primary);--cr-search-field-search-icon-inline-display:block;--cr-search-field-search-icon-inline-margin-start:6px;border-radius:4px}:host-context(body.jelly-enabled) cr-slider{--cr-slider-active-color:var(--cros-sys-primary);--cr-slider-container-color:var(--cros-sys-primary_container);--cr-slider-container-disabled-color:var(--cros-sys-disabled_container);--cr-slider-disabled-color:var(--cros-sys-disabled);--cr-slider-knob-active-color:var(--cros-sys-primary);--cr-slider-knob-disabled-color:var(--cros-sys-disabled);--cr-slider-marker-active-color:var(--cros-sys-primary_container);--cr-slider-marker-color:var(--cros-sys-primary);--cr-slider-marker-disabled-color:var(--cros-sys-disabled);--cr-slider-ripple-color:var(--cros-sys-hover_on_prominent)}:host-context(body.jelly-enabled) cr-slider:not([disabled])::part(knob){background-color:var(--cros-sys-primary)}:host-context(body.jelly-enabled) cr-slider[disabled]::part(knob){border:none}:host-context(body.jelly-enabled) cr-slider::part(label){background:var(--cros-sys-primary);color:var(--cros-sys-on_primary)}:host-context(body.jelly-enabled) cr-tabs{--cr-tabs-selected-color:var(--cros-sys-primary)}:host-context(body.jelly-enabled) cr-toggle{--cr-toggle-checked-bar-color:var(--cros-sys-primary_container);--cr-toggle-checked-bar-opacity:100%;--cr-toggle-checked-button-color:var(--cros-sys-primary);--cr-toggle-checked-ripple-color:var(--cros-sys-hover_on_prominent);--cr-toggle-unchecked-bar-color:var(--cros-sys-secondary);--cr-toggle-unchecked-button-color:var(--cros-sys-surface_variant);--cr-toggle-unchecked-ripple-color:var(--cros-sys-hover_on_prominent);--cr-toggle-box-shadow:var(--cros-elevation-1-shadow);--cr-toggle-ripple-diameter:32px}:host-context(body.jelly-enabled) cr-toggle:focus{--cr-toggle-ripple-ring:2px solid var(--cros-sys-focus_ring)}
    </style>
  </template>
`.content);styleMod$4.register("cros-color-overrides");const styleMod$3=document.createElement("dom-module");styleMod$3.appendChild(html`
  <template>
    <style include="cr-shared-style cros-color-overrides">

/* Common styles for network elements. */

:host {
  /* Margin for the show/hide password icon */
  --network-control-margin: 40px;
}

.property-box {
  align-items: center;
  display: flex;
  min-height: var(--cr-section-min-height);
}

.property-box.hr {
  border-top: var(--cr-separator-line);
}

.property-box.indented {
  margin-inline-start: var(--cr-section-padding);
}

.property-box.single-column {
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}

.property-box.stretch {
  align-items: stretch;
}

.property-box.two-line {
  min-height: var(--cr-section-two-line-min-height);
}

.property-box > .start {
  align-items: center;
  flex: auto;
}

.property-box > .middle {
  align-items: center;
  flex: auto;
  padding-inline-start: 16px;
}

cr-input {
  --cr-input-error-display: none;
  margin-bottom: var(--cr-form-field-bottom-spacing);
}

.network-attribute-container {
  align-items: center;
  display: flex;
  margin: 5px;
}

.network-attribute-label {
  flex: 1;
  padding-inline-start: 10px;
}

.network-attribute-value {
  flex: 1;
}

.type-icon {
  height: var(--cr-icon-size);
  width: var(--cr-icon-size);
}
    </style>
  </template>
`.content);styleMod$3.register("network-shared");
// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const sanitizeInnerHtmlInternal$1=function(rawString,opts){opts=opts||{};return parseHtmlSubset$1(`<b>${rawString}</b>`,opts.tags,opts.attrs).firstChild.innerHTML};let sanitizedPolicy$1=null;function sanitizeInnerHtml$1(rawString,opts){assert$1(window.trustedTypes);if(sanitizedPolicy$1===null){sanitizedPolicy$1=window.trustedTypes.createPolicy("ash-deprecated-sanitize-inner-html",{createHTML:(string,...opts)=>sanitizeInnerHtmlInternal$1(string,opts[0]),createScript:message=>assertNotReached$1(message),createScriptURL:message=>assertNotReached$1(message)})}return sanitizedPolicy$1.createHTML(rawString,opts)}const parseHtmlSubset$1=function(){const allowAttribute=(node,value)=>true;const allowedAttributes=new Map([["href",(node,value)=>node.tagName==="A"&&(value.startsWith("chrome://")||value.startsWith("https://")||value==="#")],["target",(node,value)=>node.tagName==="A"&&value==="_blank"]]);const allowedOptionalAttributes=new Map([["class",allowAttribute],["id",allowAttribute],["is",(node,value)=>value==="action-link"||value===""],["role",(node,value)=>value==="link"],["src",(node,value)=>node.tagName==="IMG"&&value.startsWith("chrome://")],["tabindex",allowAttribute],["aria-hidden",allowAttribute],["aria-labelledby",allowAttribute]]);const allowedTags=new Set(["A","B","I","BR","DIV","EM","KBD","P","PRE","SPAN","STRONG"]);const allowedOptionalTags=new Set(["IMG","LI","UL"]);let unsanitizedPolicy;function mergeTags(optTags){const clone=new Set(allowedTags);optTags.forEach((str=>{const tag=str.toUpperCase();if(allowedOptionalTags.has(tag)){clone.add(tag)}}));return clone}function mergeAttrs(optAttrs){const clone=new Map([...allowedAttributes]);optAttrs.forEach((key=>{if(allowedOptionalAttributes.has(key)){clone.set(key,allowedOptionalAttributes.get(key))}}));return clone}function walk(n,f){f(n);for(let i=0;i<n.childNodes.length;i++){walk(n.childNodes[i],f)}}function assertElement(tags,node){if(!tags.has(node.tagName)){throw Error(node.tagName+" is not supported")}}function assertAttribute(attrs,attrNode,node){const n=attrNode.nodeName;const v=attrNode.nodeValue;if(!attrs.has(n)||!attrs.get(n)(node,v)){throw Error(node.tagName+"["+n+'="'+v+'"] is not supported')}}return function(s,extraTags,extraAttrs){const tags=extraTags?mergeTags(extraTags):allowedTags;const attrs=extraAttrs?mergeAttrs(extraAttrs):allowedAttributes;const doc=document.implementation.createHTMLDocument("");const r=doc.createRange();r.selectNode(doc.body);if(window.trustedTypes){if(!unsanitizedPolicy){unsanitizedPolicy=trustedTypes.createPolicy("ash-deprecated-parse-html-subset",{createHTML:untrustedHTML=>untrustedHTML})}s=unsanitizedPolicy.createHTML(s)}const df=r.createContextualFragment(s);walk(df,(function(node){switch(node.nodeType){case Node.ELEMENT_NODE:assertElement(tags,node);const nodeAttrs=node.attributes;for(let i=0;i<nodeAttrs.length;++i){assertAttribute(attrs,nodeAttrs[i],node)}break;case Node.COMMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:case Node.TEXT_NODE:break;default:throw Error("Node type "+node.nodeType+" is not supported")}}));return df}}();
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const I18nBehavior={properties:{locale:{type:String,value:""}},i18nUpdateLocale(){this.locale=loadTimeData.getString("app_locale")},i18nRaw_(id,varArgs){return arguments.length===1?loadTimeData.getString(id):loadTimeData.getStringF.apply(loadTimeData,arguments)},i18n(id,varArgs){const rawString=this.i18nRaw_.apply(this,arguments);return parseHtmlSubset$1("<b>"+rawString+"</b>").firstChild.textContent},i18nAdvanced(id,opts){opts=opts||{};const args=[id].concat(opts.substitutions||[]);const rawString=this.i18nRaw_.apply(this,args);return sanitizeInnerHtml$1(rawString,opts)},i18nDynamic(locale,id,varArgs){return this.i18n.apply(this,Array.prototype.slice.call(arguments,1))},i18nRecursive(locale,id,varArgs){let args=Array.prototype.slice.call(arguments,2);if(args.length>0){const self=this;args=args.map((function(str){return self.i18nExists(str)?loadTimeData.getString(str):str}))}return this.i18nDynamic.apply(this,[locale,id].concat(args))},i18nExists(id){return loadTimeData.valueExists(id)}};function getTemplate$p(){return html`<!--_html_template_start_--><style include="cr-shared-style network-shared iron-flex">
  /* Property lists are embedded; remove the padding. */
  .property-box {
    padding: 0;
    width: var(--cr-property-box-width, inherit);
  }

  cr-input[readonly] {
    --cr-input-background-color: transparent;
  }

  cr-policy-network-indicator-mojo {
    margin-inline-start: var(--settings-controlled-by-spacing);
  }

  .secure {
    -webkit-text-security: disc;
  }
</style>
<template is="dom-repeat" items="[[fields]]"
    filter="[[computeFilter_(prefix, editFieldTypes, propertyDict)]]">
  <div class="property-box single-column two-line stretch">
    <!-- Property label -->
    <div class="layout horizontal center">
      <div>[[getPropertyLabel_(item, prefix)]]</div>
      <template is="dom-if" restamp
          if="[[isEditType_(item, editFieldTypes)]]">
        <cr-policy-network-indicator-mojo
            property="[[getIndicatorProperty_(item, propertyDict)]]">
        </cr-policy-network-indicator-mojo>
      </template>
    </div>
    <!-- Uneditable property value -->
    <template is="dom-if" restamp
        if="[[!showEditable_(item, editFieldTypes, propertyDict)]]">
      <div class$="[[getPropertyValueCssClasses_(item, prefix, propertyDict)]]" data-key$="[[item]]">
        [[getPropertyValue_(item, prefix, propertyDict)]]
      </div>
    </template>
    <!-- Editable property value -->
    <template is="dom-if" restamp
        if="[[showEditable_(item, editFieldTypes, propertyDict)]]">
      <cr-input id="[[item]]"
          readonly="[[!isEditable_(item, editFieldTypes, propertyDict)]]"
          value="[[getPropertyValue_(item, prefix, propertyDict)]]"
          on-change="onValueChange_"
          type="[[getEditInputType_(item, editFieldTypes)]]"
          on-focus="onInputFocused_"
          edited="false"
          disabled="[[disabled]]">
      </cr-input>
    </template>
  </div>
</template>
<!--_html_template_end_-->`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Polymer({_template:getTemplate$p(),is:"network-property-list-mojo",behaviors:[I18nBehavior,CrPolicyNetworkBehaviorMojo],properties:{propertyDict:{type:Object,observer:"onPropertyDictChanged_"},fields:{type:Array,value(){return[]}},editFieldTypes:{type:Object,value(){return{}}},prefix:{type:String,value:""},allFieldsReadOnly:{type:Boolean,value:true,readonly:true,observer:"onAllFieldsReadOnlyChanged_"},disabled:{type:Boolean,value:false},hasAnyInputFocused_:{type:Boolean,value:false}},onAllFieldsReadOnlyChanged_(){if(this.allFieldsReadOnly){return}this.hasAnyInputFocused_=false;setTimeout((()=>{this.attemptToFocusFirstEditableCrInput_()}))},onPropertyDictChanged_(){if(this.allFieldsReadOnly||this.hasAnyInputFocused_){return}this.attemptToFocusFirstEditableCrInput_()},attemptToFocusFirstEditableCrInput_(){flush();const crInput=this.shadowRoot.querySelector("cr-input:not([readonly])");if(!crInput){return}crInput.focusInput()},onInputFocused_(e){if(this.allFieldsReadOnly){return}const crInput=e.target;if(crInput.getAttribute("edited")==="true"){return}crInput.setAttribute("edited",true);crInput.select();this.hasAnyInputFocused_=true},onValueChange_(event){if(!this.propertyDict){return}const key=event.target.id;let curValue=this.getProperty_(key);if(typeof curValue==="object"&&!Array.isArray(curValue)){curValue=OncMojo.getActiveValue(curValue)}const newValue=this.getValueFromEditField_(key,event.target.value);if(newValue===curValue){return}this.fire("property-change",{field:key,value:newValue})},getOncKey_(key,opt_prefix){if(opt_prefix){key=opt_prefix+key.charAt(0).toUpperCase()+key.slice(1)}let result="";const subKeys=key.split(".");subKeys.forEach((subKey=>{if(subKey==="ipv4"||subKey==="ipv6"){result+=subKey}else if(subKey==="apn"){result+="APN"}else if(subKey==="ipAddress"){result+="IPAddress"}else if(subKey==="ipSec"){result+="IPSec"}else if(subKey==="l2tp"){result+="L2TP"}else if(subKey==="modelId"){result+="ModelID"}else if(subKey==="openVpn"){result+="OpenVPN"}else if(subKey==="otp"){result+="OTP"}else if(subKey==="ssid"){result+="SSID"}else if(subKey==="bssid"){result+="BSSID"}else if(subKey==="serverCa"){result+="ServerCA"}else if(subKey==="vpn"){result+="VPN"}else if(subKey==="wifi"){result+="WiFi"}else if(subKey==="iccid"){result+="ICCID"}else if(subKey==="imei"){result+="IMEI"}else{result+=subKey.charAt(0).toUpperCase()+subKey.slice(1)}result+="-"}));return"Onc"+result.slice(0,result.length-1)},getPropertyLabel_(key){const oncKey=this.getOncKey_(key,this.prefix);if(this.i18nExists(oncKey)){return this.i18n(oncKey)}const result=this.prefix+key;for(const type of["cellular","ethernet","tether","vpn","wifi"]){if(result.startsWith(type+".")){return result.substr(type.length+1)}}return result},computeFilter_(){return key=>{if(this.editFieldTypes.hasOwnProperty(key)){return true}const value=this.getPropertyValue_(key);return value!==""}},isPropertyEditable_(key){if(!this.propertyDict){return false}const property=this.getProperty_(key);if(property===undefined||property===null){const source=this.propertyDict.source;return source!==OncSource.kUserPolicy&&source!==OncSource.kDevicePolicy}return!this.isNetworkPolicyEnforced(property)},isEditType_(key){const editType=this.editFieldTypes[key];return editType==="String"||editType==="StringArray"||editType==="Password"},isEditable_(key){return this.isEditType_(key)&&this.isPropertyEditable_(key)},showEditable_(key){return this.isEditable_(key)},getEditInputType_(key){return this.editFieldTypes[key]==="Password"?"password":"text"},getProperty_(key){if(!this.propertyDict){return undefined}key=OncMojo.getManagedPropertyKey(key);const property=this.get(key,this.propertyDict);if(property===null||property===undefined){return undefined}return property},getIndicatorProperty_(key){if(!this.propertyDict){return undefined}const property=this.getProperty_(key);if((property===undefined||property===null)&&this.propertyDict.source){const policySource=OncMojo.getEnforcedPolicySourceFromOncSource(this.propertyDict.source);if(policySource!==PolicySource.kNone){return{activeValue:"",policySource:policySource}}}return property},getPropertyValue_(key){let value=this.getProperty_(key);if(value===undefined||value===null){return""}if(typeof value==="object"&&!Array.isArray(value)){value=OncMojo.getActiveValue(value)}if(key==="wifi.eap.subjectAltNameMatch"){return OncMojo.serializeSubjectAltNameMatch(value)}if(key==="wifi.eap.domainSuffixMatch"){return OncMojo.serializeDomainSuffixMatch(value)}if(Array.isArray(value)){return value.join(", ")}const customValue=this.getCustomPropertyValue_(key,value);if(customValue){return customValue}if(typeof value==="boolean"){return value.toString()}let valueStr;if(typeof value==="number"){if(key==="cellular.activationState"){valueStr=OncMojo.getActivationStateTypeString(value)}else if(key==="portalState"){valueStr=OncMojo.getPortalStateString(value)}else if(key==="vpn.type"){valueStr=OncMojo.getVpnTypeString(value)}else if(key==="wifi.security"){valueStr=OncMojo.getSecurityTypeString(value)}else{return value.toString()}}else{assert$1(typeof value==="string");valueStr=value}const oncKey=this.getOncKey_(key,this.prefix)+"_"+valueStr;if(this.i18nExists(oncKey)){return this.i18n(oncKey)}return valueStr},getPropertyValueCssClasses_(key){const classes=["cr-secondary-text"];if(this.getPropertyValue_(key)===FAKE_CREDENTIAL){classes.push("secure")}return classes.join(" ")},getValueFromEditField_(key,fieldValue){const editType=this.editFieldTypes[key];if(editType==="StringArray"){return fieldValue.toString().split(/, */)}return fieldValue},getCustomPropertyValue_(key,value){if(key==="tether.batteryPercentage"){assert$1(typeof value==="number");return this.i18n("OncTether-BatteryPercentage_Value",value.toString())}if(key==="tether.signalStrength"){assert$1(typeof value==="number");if(value===0){return this.i18n("OncTether-SignalStrength_None")}if(value<=25){return this.i18n("OncTether-SignalStrength_Low")}if(value<=50){return this.i18n("OncTether-SignalStrength_Medium")}return this.i18n("OncTether-SignalStrength_Strong")}if(key==="tether.carrier"){assert$1(typeof value==="string");return!value||value==="unknown-carrier"?this.i18n("OncTether-Carrier_Unknown"):value}return""}});function getTemplate$o(){return html`<!--_html_template_start_--><style include="network-shared md-select">
  :host {
    --cr-property-box-width: 200px;
  }

  cr-button {
    margin: 4px 0;
  }

  #attachApnPropertyRow {
    display: flex;
    min-height: 0;
    padding-bottom: 20px;
    padding-top: 8px;
    width: var(--cr-property-box-width);
  }

  #attachApnDescription {
    display: flex;
  }

  #attachApnTooltip {
    --cr-icon-size: 16px;
    margin-inline-start: 6px;
  }
</style>
<div class="property-box">
  <div class="start">[[i18n('networkAccessPoint')]]</div>
  <select id="selectApn" class="md-select" on-change="onSelectApnChange_"
      value="[[selectedApn_]]"
      disabled="[[isDisabled_(disabled, selectedApn_)]]"
      aria-label="[[i18n('networkAccessPoint')]]">
    <template is="dom-repeat" items="[[apnSelectList_]]">
      <option value="[[item.name]]">
        [[apnDesc_(item)]]
      </option>
    </template>
  </select>
</div>

<template is="dom-if" if="[[showOtherApn_(selectedApn_)]]">
  <div id="otherApnProperties" class="property-box single-column indented">
    <network-property-list-mojo on-property-change="onOtherApnChange_"
        fields="[[otherApnFields_]]" property-dict="[[otherApn_]]"
        edit-field-types="[[otherApnEditTypes_]]" prefix="cellular.apn."
        disabled="[[disabled]]">
    </network-property-list-mojo>
    <div id="attachApnPropertyRow" class="property-box horizontal center">
      <div id="attachApnDescription" class="start" aria-hidden="true">
        <span id="attachApnTitle">[[i18n('OncCellular-APN-Attach')]]</span>
        <cr-tooltip-icon id="attachApnTooltip" tooltip-position="right"
            icon-class="cr:help-outline"
            tooltip-text="[[i18n('OncCellular-APN-Attach_TooltipText')]]">
        </cr-tooltip-icon>
      </div>
      <cr-toggle id="attachApnControl" aria-labelledby="attachApnTitle"
          aria-describedby="attachApnTooltip"
          checked="{{isAttachApnToggleEnabled_}}">
      </cr-toggle>
    </div>
    <cr-button id="saveButton" class="action-button"
        on-click="onSaveOtherTap_" disabled="[[disabled]]">
      [[i18n('save')]]
    </cr-button>
  </div>
</template>
<!--_html_template_end_-->`}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const kDefaultAccessPointName="NONE";const kOtherAccessPointName="Other";const USE_ATTACH_APN_ON_SAVE_METRIC_NAME="Network.Cellular.Apn.UseAttachApnOnSave";Polymer({_template:getTemplate$o(),is:"network-apnlist",behaviors:[I18nBehavior],properties:{disabled:{type:Boolean,value:false},managedProperties:{type:Object,observer:"managedPropertiesChanged_"},selectedApn_:{type:String,value:""},apnSelectList_:{type:Array,value(){return[]}},otherApn_:{type:Object,value(){return{accessPointName:kDefaultAccessPointName,name:kOtherAccessPointName,state:ApnState.kEnabled,authentication:ApnAuthenticationType.kAutomatic,ipType:ApnIpType.kAutomatic,apnTypes:[ApnType.kDefault]}}},otherApnFields_:{type:Array,value(){return["accessPointName","username","password"]},readOnly:true},otherApnEditTypes_:{type:Object,value(){return{accessPointName:"String",username:"String",password:"Password"}},readOnly:true},isAttachApnToggleEnabled_:{type:Boolean,value:false}},getApnSelect(){return this.$$("#selectApn")},getApnFromManaged_(apn){return{accessPointName:OncMojo.getActiveString(apn.accessPointName),localizedName:OncMojo.getActiveString(apn.localizedName),name:OncMojo.getActiveString(apn.name),password:OncMojo.getActiveString(apn.password),username:OncMojo.getActiveString(apn.username),authentication:ApnAuthenticationType.kAutomatic,state:ApnState.kEnabled,ipType:ApnIpType.kAutomatic,apnTypes:[ApnType.kDefault]}},getActiveApnFromProperties_(managedProperties){const cellular=managedProperties.typeProperties.cellular;let activeApn;if(cellular.selectedApn){activeApn=this.getApnFromManaged_(cellular.selectedApn)}else if(cellular.lastGoodApn&&cellular.lastGoodApn.accessPointName){activeApn=cellular.lastGoodApn}if(activeApn&&!activeApn.accessPointName){activeApn=undefined}return activeApn},shouldUpdateSelectList_(oldManagedProperties){if(!oldManagedProperties){return true}const newActiveApn=this.getActiveApnFromProperties_(this.managedProperties);const oldActiveApn=this.getActiveApnFromProperties_(oldManagedProperties);if(!OncMojo.apnMatch(newActiveApn,oldActiveApn)){return true}const newApnList=this.managedProperties.typeProperties.cellular.apnList;const oldApnList=oldManagedProperties.typeProperties.cellular.apnList;if(!OncMojo.apnListMatch(oldApnList&&oldApnList.activeValue,newApnList&&newApnList.activeValue)){return true}const newCustomApnList=this.managedProperties.typeProperties.cellular.customApnList;const oldCustomApnList=oldManagedProperties.typeProperties.cellular.customApnList;if(!OncMojo.apnListMatch(oldCustomApnList,newCustomApnList)){return true}return false},managedPropertiesChanged_(managedProperties,oldManagedProperties){if(!this.shouldUpdateSelectList_(oldManagedProperties)){return}this.setApnSelectList_(this.getActiveApnFromProperties_(managedProperties))},setApnSelectList_(activeApn){const apnList=this.generateApnList_();if(apnList===undefined||apnList.length===0){this.apnSelectList_=[this.otherApn_];this.set("selectedApn_",kOtherAccessPointName);return}let activeApnInList;if(activeApn){activeApnInList=apnList.find((a=>a.name===activeApn.name))}const customApnList=this.managedProperties.typeProperties.cellular.customApnList;let otherApn=this.otherApn_;if(customApnList&&customApnList.length){otherApn=customApnList[0]}else if(!activeApnInList&&activeApn&&activeApn.accessPointName){otherApn=activeApn}this.isAttachApnToggleEnabled_=otherApn.attach===OncMojo.USE_ATTACH_APN_NAME;this.otherApn_={accessPointName:otherApn.accessPointName,name:kOtherAccessPointName,username:otherApn.username,password:otherApn.password,authentication:ApnAuthenticationType.kAutomatic,state:ApnState.kEnabled,ipType:ApnIpType.kAutomatic,apnTypes:[ApnType.kDefault]};apnList.push(this.otherApn_);this.apnSelectList_=apnList;const selectedApn=activeApnInList?activeApnInList.name:kOtherAccessPointName;assert$1(selectedApn);this.set("selectedApn_",selectedApn);this.async((function(){this.$.selectApn.value=this.selectedApn_}))},generateApnList_(){if(!this.managedProperties){return undefined}const apnList=this.managedProperties.typeProperties.cellular.apnList;if(!apnList){return undefined}return apnList.activeValue.filter((apn=>!!apn.accessPointName)).map((apn=>({accessPointName:apn.accessPointName,localizedName:apn.localizedName,name:apn.name||apn.accessPointName,username:apn.username,password:apn.password})))},onSelectApnChange_(event){const target=event.target;const name=target.value;if(name===kOtherAccessPointName&&(!this.otherApn_.accessPointName||this.otherApn_.accessPointName===kDefaultAccessPointName)){this.selectedApn_=name;return}this.sendApnChange_(name)},onOtherApnChange_(event){const value=event.detail.field==="accessPointName"?event.detail.value.toUpperCase():event.detail.value;this.set("otherApn_."+event.detail.field,value)},onSaveOtherTap_(){if(this.sendApnChange_(this.selectedApn_)){chrome.metricsPrivate.recordBoolean(USE_ATTACH_APN_ON_SAVE_METRIC_NAME,this.isAttachApnToggleEnabled_)}},sendApnChange_(name){let apn;if(name===kOtherAccessPointName){if(!this.otherApn_.accessPointName||this.otherApn_.accessPointName===kDefaultAccessPointName){return false}apn={accessPointName:this.otherApn_.accessPointName,username:this.otherApn_.username,password:this.otherApn_.password,attach:this.isAttachApnToggleEnabled_?OncMojo.USE_ATTACH_APN_NAME:""}}else{apn=this.apnSelectList_.find((a=>a.name===name));if(apn===undefined){console.error("Selected APN not in list");return false}}apn.apnTypes=[ApnType.kDefault];this.fire("apn-change",apn);return true},isDisabled_(){return this.disabled||this.selectedApn_===""},showOtherApn_(){return this.selectedApn_===kOtherAccessPointName},apnDesc_(apn){assert$1(apn.name);return apn.localizedName||apn.name},isApnItemSelected_(item){return item.accessPointName===this.selectedApn_}});function getTemplate$n(){return html`<!--_html_template_start_--><style include="cr-shared-style network-shared md-select iron-flex">
  /* Leave some space between button and select. */
  select {
    margin-inline-start: 8px;
  }
</style>
<div class="property-box first two-line">
  <div class="flex layout vertical">
    <div>[[i18n('networkChooseMobile')]]</div>
    <div class="cr-secondary-text">
      [[getSecondaryText_(managedProperties, deviceState)]]
    </div>
  </div>
  <cr-button on-click="onScanTap_"
      disabled="[[!getEnableScanButton_(managedProperties,
          deviceState, disabled)]]">
    [[i18n('networkCellularScan')]]
  </cr-button>
  <select class="md-select" on-change="onChange_"
      value="[[selectedMobileNetworkId_]]"
      disabled="[[!getEnableSelectNetwork_(managedProperties,
          deviceState, disabled)]]"
      aria-label="[[i18n('networkChooseMobile')]]">
    <template is="dom-repeat" items="[[mobileNetworkList_]]">
      <option value="[[item.networkId]]"
          disabled="[[getMobileNetworkIsDisabled_(item)]]">
        [[getName_(item)]]
      </option>
    </template>
  </select>
</div>
<!--_html_template_end_-->`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Polymer({_template:getTemplate$n(),is:"network-choose-mobile",behaviors:[I18nBehavior],properties:{deviceState:{type:Object,value:null},disabled:{type:Boolean,value:false},managedProperties:{type:Object,observer:"managedPropertiesChanged_"},selectedMobileNetworkId_:{type:String,value:""},mobileNetworkList_:{type:Array,value(){return[]}}},scanRequested_:false,networkConfig_:null,attached(){this.scanRequested_=false},getNetworkConfig_(){if(!this.networkConfig_){this.networkConfig_=MojoInterfaceProviderImpl.getInstance().getMojoServiceRemote()}return this.networkConfig_},managedPropertiesChanged_(){const cellular=this.managedProperties.typeProperties.cellular;this.mobileNetworkList_=cellular.foundNetworks||[];if(!this.mobileNetworkList_.length){this.mobileNetworkList_=[{networkId:"none",longName:this.i18n("networkCellularNoNetworks")}]}this.async((()=>{let selected=this.mobileNetworkList_.find((function(mobileNetwork){return mobileNetwork.status==="current"}));if(!selected){selected=this.mobileNetworkList_[0]}this.selectedMobileNetworkId_=selected.networkId}))},getMobileNetworkIsDisabled_(foundNetwork){return foundNetwork.status!=="available"&&foundNetwork.status!=="current"},getEnableScanButton_(properties){return!this.disabled&&properties.connectionState===ConnectionStateType.kNotConnected&&!!this.deviceState&&!this.deviceState.scanning},getEnableSelectNetwork_(properties){return!this.disabled&&!!this.deviceState&&!this.deviceState.scanning&&properties.connectionState===ConnectionStateType.kNotConnected&&!!properties.typeProperties.cellular.foundNetworks&&properties.typeProperties.cellular.foundNetworks.length>0},getSecondaryText_(properties){if(!properties){return""}if(!!this.deviceState&&this.deviceState.scanning){return this.i18n("networkCellularScanning")}if(this.scanRequested_){return this.i18n("networkCellularScanCompleted")}if(properties.connectionState!==ConnectionStateType.kNotConnected){return this.i18n("networkCellularScanConnectedHelp")}return""},getName_(foundNetwork){return foundNetwork.longName||foundNetwork.shortName||foundNetwork.networkId},onScanTap_(){this.scanRequested_=true;this.getNetworkConfig_().requestNetworkScan(NetworkType.kCellular)},onChange_(event){const target=event.target;if(!target.value||target.value==="none"){return}this.getNetworkConfig_().selectCellularMobileNetwork(this.managedProperties.guid,target.value);this.fire("user-action-setting-change")}});const template=html`<!-- These icons were converted from source .svg files. -->

<iron-iconset-svg name="network" size="20">
  <svg>
    <defs>
      <!-- Badges -->
      <g id="badge-1x"><path d="M3.46612 7H4.45996V1H4.33265L2 1.85832V2.70021L3.46612 2.19918V7ZM9.04312 2.55647L8.19713 4.01848L7.36756 2.55647H6.26694L7.62218 4.74538L6.21766 7H7.32649L8.20945 5.48049L9.09651 7H10.1971L8.79261 4.74538L10.152 2.55647H9.04312Z"></path></g>
      <g id="badge-3g"><path d="M3.34091 3.55481H2.74733V4.32487H3.32086C3.67915 4.32487 3.9492 4.40775 4.13102 4.57353C4.31284 4.73931 4.40374 4.97593 4.40374 5.28342C4.40374 5.58824 4.31685 5.82085 4.14305 5.98128C3.96925 6.14171 3.73128 6.22193 3.42914 6.22193C3.1377 6.22193 2.90575 6.14171 2.73329 5.98128C2.56083 5.82085 2.4746 5.6123 2.4746 5.35561H1.5C1.5 5.85294 1.67914 6.25134 2.03743 6.5508C2.39572 6.85027 2.85561 7 3.41711 7C4.00268 7 4.47527 6.84492 4.83489 6.53476C5.19452 6.2246 5.37433 5.80749 5.37433 5.28342C5.37433 4.95722 5.29078 4.67647 5.12366 4.44118C4.95655 4.20588 4.71257 4.03342 4.39171 3.9238C4.65642 3.80615 4.87233 3.63169 5.03944 3.4004C5.20655 3.16912 5.29011 2.92246 5.29011 2.66043C5.29011 2.13903 5.12366 1.73195 4.79078 1.43917C4.45789 1.14639 4 1 3.41711 1C3.06417 1 2.74532 1.06885 2.46056 1.20655C2.1758 1.34425 1.95388 1.5361 1.79479 1.78209C1.63569 2.02808 1.55615 2.3008 1.55615 2.60027H2.53075C2.53075 2.35695 2.61497 2.15976 2.78342 2.00869C2.95187 1.85762 3.16711 1.78209 3.42914 1.78209C3.72861 1.78209 3.9512 1.85896 4.09692 2.0127C4.24265 2.16644 4.31551 2.38235 4.31551 2.66043C4.31551 2.9492 4.22794 3.16979 4.05281 3.32219C3.87767 3.4746 3.64038 3.55214 3.34091 3.55481ZM10.0428 6.78743C10.4171 6.64572 10.7099 6.43717 10.9211 6.16176V3.9238H8.70722V4.69385H9.91043V5.8369C9.69117 6.07219 9.32219 6.18984 8.80348 6.18984C8.33021 6.18984 7.96056 6.01538 7.69452 5.66644C7.42847 5.31751 7.29545 4.82754 7.29545 4.19652V3.74733C7.30348 3.11363 7.4258 2.63302 7.66243 2.30548C7.89907 1.97794 8.24465 1.81417 8.6992 1.81417C9.40241 1.81417 9.81016 2.16577 9.92246 2.86898H10.9171C10.8396 2.2647 10.6096 1.80214 10.2273 1.48128C9.84492 1.16043 9.32888 1 8.67914 1C7.92246 1 7.33289 1.24799 6.91043 1.74398C6.48797 2.23998 6.27674 2.92914 6.27674 3.8115V4.26872C6.28476 4.81952 6.39104 5.30147 6.59559 5.71457C6.80013 6.12768 7.09091 6.44519 7.46791 6.66711C7.84492 6.88904 8.27807 7 8.76738 7C9.24332 7 9.66845 6.92914 10.0428 6.78743Z"></path></g>
      <g id="badge-4g"><path d="M8.78743 1C8.03074 1 7.44118 1.24799 7.01872 1.74398C6.59625 2.23998 6.38503 2.92914 6.38503 3.8115V4.26872C6.39305 4.81952 6.49933 5.30147 6.70388 5.71457C6.90842 6.12768 7.1992 6.44519 7.5762 6.66711C7.95321 6.88904 8.38636 7 8.87567 7C9.35161 7 9.77674 6.92915 10.1511 6.78743C10.5254 6.64572 10.8182 6.43717 11.0294 6.16176V3.9238H8.81551V4.69385H10.0187V5.8369C9.79946 6.07219 9.43048 6.18984 8.91176 6.18984C8.4385 6.18984 8.06885 6.01538 7.80281 5.66644C7.53676 5.31751 7.40374 4.82754 7.40374 4.19652V3.74733C7.41176 3.11363 7.53409 2.63302 7.77072 2.30548C8.00735 1.97794 8.35294 1.81417 8.80749 1.81417C9.5107 1.81417 9.91845 2.16577 10.0307 2.86898H11.0254C10.9479 2.2647 10.7179 1.80214 10.3356 1.48128C9.95321 1.16043 9.43717 1 8.78743 1ZM5.0254 1.08021H4.01872L1.5 5.02674L1.52807 5.62032H4.0508V6.91979H5.0254V5.62032H5.75134V4.83824H5.0254V1.08021ZM4.0508 2.39973V4.83824H2.52273L3.97861 2.52807L4.0508 2.39973Z"></path></g>
      <g id="badge-edge"><path d="M3.04258 4.32143H5.50687V3.49725H3.04258V1.84066H5.89423V1H2V7H5.92308V6.16758H3.04258V4.32143Z"></path></g>
      <g id="badge-evdo"><path d="M2.54258 4.32143H5.00687V3.49725H2.54258V1.84066H5.39423V1H1.5V7H5.42308V6.16758H2.54258V4.32143ZM9.91071 1L8.38599 5.69368L6.87775 1H5.73626L7.88736 7H8.89698L11.0563 1H9.91071Z"></path></g>
      <g id="badge-gsm"><path d="M5.54012 6.78743C5.91445 6.64572 6.20723 6.43717 6.41846 6.16176V3.9238H4.20456V4.69385H5.40777V5.8369C5.18852 6.07219 4.81954 6.18984 4.30082 6.18984C3.82755 6.18984 3.4579 6.01538 3.19186 5.66644C2.92582 5.31751 2.79279 4.82754 2.79279 4.19652V3.74733C2.80082 3.11363 2.92314 2.63302 3.15977 2.30548C3.39641 1.97794 3.74199 1.81417 4.19654 1.81417C4.89975 1.81417 5.3075 2.16577 5.4198 2.86898H6.41445C6.33691 2.2647 6.10697 1.80214 5.72461 1.48128C5.34226 1.16043 4.82622 1 4.17648 1C3.4198 1 2.83023 1.24799 2.40777 1.74398C1.98531 2.23998 1.77408 2.92914 1.77408 3.8115V4.26872C1.7821 4.81952 1.88838 5.30147 2.09293 5.71457C2.29748 6.12768 2.58825 6.44519 2.96525 6.66711C3.34226 6.88904 3.77541 7 4.26472 7C4.74066 7 5.16579 6.92914 5.54012 6.78743Z"></path></g>
      <g id="badge-hspa"><path d="M5.22527 7H6.26374V1H5.22527V3.49725H2.54258V1H1.5V7H2.54258V4.33379H5.22527V7Z"></path></g>
      <g id="badge-hspa-plus"><path d="M5.22527 7H6.26374V1H5.22527V3.49725H2.54258V1H1.5V7H2.54258V4.33379H5.22527V7ZM11.2788 3.69918H9.71291V2.03022H8.74038V3.69918H7.16621V4.61401H8.74038V6.39835H9.71291V4.61401H11.2788V3.69918Z"></path></g>
      <g id="badge-lte"><path d="M2 1H3V5H5V6H2V1ZM10 1H13V2H11V3H12.5V4H11V5H13V6H10V1ZM5 1H9V2H7.5V6H6.5V2H5V1Z"></path></g>
      <g id="badge-lte-advanced"><path d="M2 1H3V5H5V6H2V1ZM10 1H13V2H11V3H12.5V4H11V5H13V6H10V1ZM5 1H9V2H7.5V6H6.5V2H5V1ZM14 2H15V1H16V2H17V3H16V4H15V3H14V2Z"></path></g>
      <g id="badge-5g"><path d="M0.982471 3.0564L1.28667 0.513428H4.19536V1.40894H2.22319L2.1104 2.39673C2.19243 2.34888 2.29953 2.30672 2.43169 2.27026C2.56613 2.23381 2.69715 2.21558 2.82476 2.21558C3.31922 2.21558 3.69862 2.36255 3.96294 2.65649C4.22954 2.94816 4.36284 3.35832 4.36284 3.88696C4.36284 4.20597 4.29107 4.49536 4.14751 4.75513C4.00623 5.01261 3.80685 5.21086 3.54937 5.34985C3.29188 5.48885 2.98768 5.55835 2.63677 5.55835C2.32459 5.55835 2.03179 5.49455 1.75835 5.36694C1.48491 5.23706 1.27072 5.06047 1.11577 4.83716C0.960824 4.61157 0.88449 4.3575 0.886768 4.07495H2.04204C2.05344 4.25724 2.11154 4.40194 2.21636 4.50903C2.32118 4.61613 2.45903 4.66968 2.62993 4.66968C3.0173 4.66968 3.21099 4.38257 3.21099 3.80835C3.21099 3.27743 2.97401 3.01196 2.50005 3.01196C2.23117 3.01196 2.03065 3.09855 1.89849 3.27173L0.982471 3.0564Z"></path><path d="M9.11382 4.87476C8.92925 5.07983 8.65923 5.24504 8.30376 5.37036C7.94829 5.49569 7.55864 5.55835 7.13482 5.55835C6.48312 5.55835 5.96245 5.35897 5.5728 4.96021C5.18316 4.56144 4.97466 4.00659 4.94732 3.29565L4.9439 2.86499C4.9439 2.37508 5.03049 1.94784 5.20366 1.58325C5.37684 1.21639 5.62407 0.934977 5.94536 0.739014C6.26893 0.540771 6.64263 0.44165 7.06646 0.44165C7.68625 0.44165 8.16704 0.584066 8.50884 0.868896C8.85291 1.15145 9.05344 1.57414 9.1104 2.13696H7.95513C7.91411 1.85897 7.82524 1.66073 7.68853 1.54224C7.55181 1.42375 7.35812 1.3645 7.10747 1.3645C6.80669 1.3645 6.57427 1.49211 6.41021 1.74731C6.24614 2.00252 6.16297 2.36711 6.16069 2.84106V3.14185C6.16069 3.63859 6.245 4.01229 6.41362 4.26294C6.58452 4.51131 6.85226 4.6355 7.21685 4.6355C7.52902 4.6355 7.76144 4.566 7.91411 4.427V3.65454H7.08013V2.83081H9.11382V4.87476Z"></path></g>

      <!-- Icons -->
      <!-- TODO(crbug.com/1157123) Update network_icon to use iron_icon
      and migrate the rest of the icons used by network_icon
      into this iconset. -->
      <g id="cellular-0"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.002 15.002V7.41622L7.41622 15.002H15.002ZM16.002 17.002C16.5543 17.002 17.002 16.5543 17.002 16.002V5.002C17.002 4.1111 15.9249 3.66493 15.2949 4.2949L4.2949 15.2949C3.66493 15.9249 4.1111 17.002 5.002 17.002H16.002Z" ></g>

      <g id="download" viewBox="0 0 20 20"><path d="M11 9.2L13.5 6.5L15 8L10 13L5 8L6.5 6.5L9 9.2V3H11V9.2Z"></path><path d="M6 15V13H4V15.375C4 16.2688 4.73125 17 5.625 17H14.375C15.2688 17 16 16.2688 16 15.375V13H14V15H6Z"></path></g>
    </defs>
  </svg>
</iron-iconset-svg>
<iron-iconset-svg name="network8" size="8">
  <svg>
    <defs>
      <g id="badge-secure" fill-rule="evenodd">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 3H2C1.44772 3 1 3.44772 1 4V7C1 7.55228 1.44772 8 2 8H6C6.55228 8 7 7.55228 7 7V4C7 3.44772 6.55228 3 6 3H5.75V2.25C5.75 1.2835 4.9665 0.5 4 0.5C3.0335 0.5 2.25 1.2835 2.25 2.25V3ZM3.25 3H4.75V2.25C4.75 1.83579 4.41421 1.5 4 1.5C3.58579 1.5 3.25 1.83579 3.25 2.25V3Z"></path>
      </g>
    </defs>
  </svg>
</iron-iconset-svg>
`;document.head.appendChild(template.content);function getTemplate$m(){return html`<!--_html_template_start_--><style include="cr-hidden-style">
  :host {
    display: inline-flex;
    overflow: hidden;
    padding: 2px;
    position: relative;
  }

  #icon {
    background: var(--cros-icon-color-primary, rgba(0, 0, 0, 0.65));
    height: 20px;
    width: 20px;
  }

  /* Upper-left corner */
  #technology {
    --iron-icon-fill-color: var(--cros-icon-color-secondary);
    height: 20px;
    left: 0;
    position: absolute;
    top: 1px;
    width: 20px;
  }

  :host-context([dir='rtl']) #technology {
    left: auto;
    right: 4px;
  }

  /* Lower-right corner */
  #secure {
    --iron-icon-fill-color: var(--cros-icon-color-secondary);
    height: 8px;
    left: 16px;
    position: absolute;
    top: 16px;
    width: 8px;
  }

  :host-context([dir='rtl']) #secure {
    left: auto;
    right: 0;
  }

  /* Upper-left corner */
  #roaming {
    -webkit-mask: url(chrome://resources/ash/common/network/roaming_badge.svg);
    background-color: var(--cros-icon-color-secondary);
    height: 8px;
    left: 3px;
    position: absolute;
    top: 4px;
    width: 8px;
  }

  :host-context([dir='rtl']) #roaming {
    left: auto;
    right: 16px;
  }

  /* Images */
  #icon.ethernet {
    -webkit-mask: url(chrome://resources/ash/common/network/ethernet.svg);
  }

  #icon.vpn {
    -webkit-mask: url(chrome://resources/ash/common/network/vpn.svg);
  }

  /* Wi-Fi images */
  #icon.wifi-not-connected {
    -webkit-mask: url(chrome://resources/ash/common/network/wifi_0_with_x.svg);
  }

  #icon.wifi-no-network,
  #icon.wifi-0 {
    -webkit-mask: url(chrome://resources/ash/common/network/wifi_0.svg);
  }

  #icon.wifi-1 {
    -webkit-mask: url(chrome://resources/ash/common/network/wifi_1.svg);
  }

  #icon.wifi-2 {
    -webkit-mask: url(chrome://resources/ash/common/network/wifi_2.svg);
  }

  #icon.wifi-3 {
    -webkit-mask: url(chrome://resources/ash/common/network/wifi_3.svg);
  }

  #icon.wifi-4 {
    -webkit-mask: url(chrome://resources/ash/common/network/wifi_4.svg);
  }

  #icon.wifi-off {
    -webkit-mask: url(chrome://resources/ash/common/network/wifi_off.svg);
  }

  #icon.wifi-connecting {
    animation: wifi-levels 750ms infinite;
    animation-direction: alternate;
    animation-timing-function: steps(4, end);
  }

  @keyframes wifi-levels {
    0% {
      -webkit-mask: url(chrome://resources/ash/common/network/wifi_0.svg);
    }
    25% {
      -webkit-mask: url(chrome://resources/ash/common/network/wifi_1.svg);
    }
    50% {
      -webkit-mask: url(chrome://resources/ash/common/network/wifi_2.svg);
    }
    75% {
      -webkit-mask: url(chrome://resources/ash/common/network/wifi_3.svg);
    }
    100% {
      -webkit-mask: url(chrome://resources/ash/common/network/wifi_4.svg);
    }
  }

  /* Hotspot images */
  #icon.hotspot-on {
    -webkit-mask: url(chrome://resources/ash/common/hotspot/hotspot.svg);
  }

  #icon.hotspot-off {
    -webkit-mask: url(chrome://resources/ash/common/hotspot/hotspot-off.svg);
  }

  #icon.hotspot-0 {
    -webkit-mask: url(chrome://resources/ash/common/hotspot/hotspot_dot.svg);
  }

  #icon.hotspot-1 {
    -webkit-mask: url(chrome://resources/ash/common/hotspot/hotspot_inner.svg);
  }

  #icon.hotspot-2 {
    -webkit-mask: url(chrome://resources/ash/common/hotspot/hotspot.svg);
  }

  #icon.hotspot-connecting {
    animation: hotspot-levels 1500ms infinite;
    animation-direction: alternate;
    animation-timing-function: steps(4, end);
  }

  @keyframes hotspot-levels {
    0% {
      -webkit-mask: url(chrome://resources/ash/common/hotspot/hotspot_dot.svg);
    }
    50% {
      -webkit-mask: url(chrome://resources/ash/common/hotspot/hotspot_inner.svg);
    }
    100% {
      -webkit-mask: url(chrome://resources/ash/common/hotspot/hotspot.svg);
    }
  }

  /* Cellular images */
  #icon.cellular-not-connected {
    -webkit-mask: url(chrome://resources/ash/common/network/cellular_0_with_x.svg);
  }

  #icon.cellular-not-activated {
    -webkit-mask: url(chrome://resources/ash/common/network/cellular_unactivated.svg);
  }

  #icon.cellular-no-network,
  #icon.cellular-0 {
    -webkit-mask: url(chrome://resources/ash/common/network/cellular_0.svg);
  }

  #icon.cellular-1 {
    -webkit-mask: url(chrome://resources/ash/common/network/cellular_1.svg);
  }

  #icon.cellular-2 {
    -webkit-mask: url(chrome://resources/ash/common/network/cellular_2.svg);
  }

  #icon.cellular-3 {
    -webkit-mask: url(chrome://resources/ash/common/network/cellular_3.svg);
  }

  #icon.cellular-4 {
    -webkit-mask: url(chrome://resources/ash/common/network/cellular_4.svg);
  }

  #icon.cellular-off {
    -webkit-mask: url(chrome://resources/ash/common/network/cellular_off.svg);
  }

  #icon.cellular-locked {
    -webkit-mask: url(chrome://resources/ash/common/network/cellular_locked.svg);
  }

  #icon.cellular-connecting {
    animation: cellular-levels 750ms infinite;
    animation-direction: alternate;
    animation-timing-function: steps(4, end);
  }

  @keyframes cellular-levels {
    0% {
      -webkit-mask: url(chrome://resources/ash/common/network/cellular_0.svg);
    }
    25% {
      -webkit-mask: url(chrome://resources/ash/common/network/cellular_1.svg);
    }
    50% {
      -webkit-mask: url(chrome://resources/ash/common/network/cellular_2.svg);
    }
    75% {
      -webkit-mask: url(chrome://resources/ash/common/network/cellular_3.svg);
    }
    100% {
      -webkit-mask: url(chrome://resources/ash/common/network/cellular_4.svg);
    }
  }
</style>
<template is="dom-if" if="[[showIcon_(networkState, hotspotInfo)]]" restamp>
  <div id="icon"
      class$="[[getIconClass_(networkState, deviceState, isListItem, hotspotInfo)]]">
  </div>
  <iron-icon id="technology"
      hidden="[[!showTechnology_(networkState, showTechnologyBadge, hotspotInfo)]]"
      icon="[[getTechnology_(networkState, hotspotInfo)]]">
  </iron-icon>
  <iron-icon id="secure" hidden="[[!showSecure_(networkState, hotspotInfo)]]"
      icon="network8:badge-secure">
  </iron-icon>
  <div id="roaming" hidden="[[!showRoaming_(networkState, hotspotInfo)]]"></div>
</template>
<!--_html_template_end_-->`}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Polymer({_template:getTemplate$m(),is:"network-icon",behaviors:[I18nBehavior],properties:{networkState:Object,hotspotInfo:Object,deviceState:{type:Object,value:null},isListItem:{type:Boolean,value:false},showTechnologyBadge:{type:Boolean,value:true},ariaLabel:{type:String,reflectToAttribute:true,computed:"computeAriaLabel_(locale, networkState, hotspotInfo)"},isUserLoggedIn_:{type:Boolean,value(){return loadTimeData.valueExists("isUserLoggedIn")&&loadTimeData.getBoolean("isUserLoggedIn")}}},networkIconCount_:5,getIconClass_(){if(!this.networkState&&!this.hotspotInfo){return""}if(this.hotspotInfo){if(this.hotspotInfo.state===HotspotState.kEnabled){return"hotspot-on"}if(this.hotspotInfo.state===HotspotState.kEnabling){return"hotspot-connecting"}return"hotspot-off"}const type=this.networkState.type;if(type===NetworkType.kEthernet){return"ethernet"}if(type===NetworkType.kVPN){return"vpn"}const prefix=OncMojo.networkTypeIsMobile(type)?"cellular-":"wifi-";if(this.isPSimPendingActivationWhileLoggedOut_()){return prefix+"not-activated"}if(this.networkState.type===NetworkType.kCellular&&this.networkState.typeState.cellular.simLocked){return prefix+"locked"}if(!this.isListItem&&!this.networkState.guid){const device=this.deviceState;if(!device||device.deviceState===DeviceStateType.kEnabled||device.deviceState===DeviceStateType.kEnabling){return prefix+"no-network"}return prefix+"off"}const connectionState=this.networkState.connectionState;if(connectionState===ConnectionStateType.kConnecting){return prefix+"connecting"}if(!this.isListItem&&connectionState===ConnectionStateType.kNotConnected){return prefix+"not-connected"}const strength=OncMojo.getSignalStrength(this.networkState);return prefix+this.strengthToIndex_(strength).toString(10)},computeAriaLabel_(locale,networkState){if(this.hotspotInfo){return"hotspot"}if(!this.networkState){return""}const type=this.networkState.type;if(type===NetworkType.kEthernet){return this.i18nDynamic(locale,"networkIconLabelEthernet")}if(type===NetworkType.kVPN){return this.i18nDynamic(locale,"networkIconLabelVpn")}let networkTypeString="";if(type===NetworkType.kTether){networkTypeString=this.i18nDynamic(locale,"OncTypeTether")}else if(OncMojo.networkTypeIsMobile(type)){networkTypeString=this.i18nDynamic(locale,"OncTypeCellular")}else{networkTypeString=this.i18nDynamic(locale,"OncTypeWiFi")}if(!this.isListItem&&!this.networkState.guid){const device=this.deviceState;if(!device||device.deviceState===DeviceStateType.kEnabled||device.deviceState===DeviceStateType.kEnabling){return this.i18nDynamic(locale,"networkIconLabelNoNetwork",networkTypeString)}return this.i18nDynamic(locale,"networkIconLabelOff",networkTypeString)}const connectionState=this.networkState.connectionState;if(connectionState===ConnectionStateType.kConnecting){return this.i18nDynamic(locale,"networkIconLabelConnecting",networkTypeString)}if(!this.isListItem&&connectionState===ConnectionStateType.kNotConnected){return this.i18nDynamic(locale,"networkIconLabelNotConnected",networkTypeString)}const strength=OncMojo.getSignalStrength(this.networkState);return this.i18nDynamic(locale,"networkIconLabelSignalStrength",networkTypeString,strength.toString(10))},strengthToIndex_(strength){if(strength<=0){return 0}if(strength>=100){return this.networkIconCount_-1}const zeroBasedIndex=Math.trunc((strength-1)*(this.networkIconCount_-1)/100);return zeroBasedIndex+1},showTechnology_(){if(!this.networkState||this.hotspotInfo){return false}return!this.showRoaming_()&&OncMojo.connectionStateIsConnected(this.networkState.connectionState)&&this.getTechnology_()!==""&&this.showTechnologyBadge},getTechnology_(){if(!this.networkState||this.hotspotInfo){return""}if(this.networkState.type===NetworkType.kCellular){const technology=this.getTechnologyId_(this.networkState.typeState.cellular.networkTechnology);if(technology!==""){return"network:"+technology}}return""},getTechnologyId_(networkTechnology){switch(networkTechnology){case"CDMA1XRTT":return"badge-1x";case"EDGE":return"badge-edge";case"EVDO":return"badge-evdo";case"GPRS":case"GSM":return"badge-gsm";case"HSPA":return"badge-hspa";case"HSPAPlus":return"badge-hspa-plus";case"LTE":return"badge-lte";case"LTEAdvanced":return"badge-lte-advanced";case"UMTS":return"badge-3g";case"5GNR":return"badge-5g"}return""},showSecure_(){if(!this.networkState||this.hotspotInfo){return false}if(!this.isListItem&&this.networkState.connectionState===ConnectionStateType.kNotConnected){return false}return this.networkState.type===NetworkType.kWiFi&&this.networkState.typeState.wifi.security!==SecurityType.kNone},showRoaming_(){if(!this.networkState){return false}return this.networkState.type===NetworkType.kCellular&&this.networkState.typeState.cellular.roaming},showIcon_(){return!!this.networkState||!!this.hotspotInfo},isPSimPendingActivationWhileLoggedOut_(){const cellularProperties=this.networkState.typeState.cellular;if(!cellularProperties||cellularProperties.eid||this.isUserLoggedIn_){return false}return cellularProperties.activationState==ActivationStateType.kNotActivated}});function getTemplate$l(){return html`<!--_html_template_start_-->    <style>:host{--cr-toggle-checked-bar-color:var(--google-blue-600);--cr-toggle-checked-button-color:var(--google-blue-600);--cr-toggle-checked-ripple-color:rgba(var(--google-blue-600-rgb), .2);--cr-toggle-ripple-diameter:40px;--cr-toggle-unchecked-bar-color:var(--google-grey-400);--cr-toggle-unchecked-button-color:white;--cr-toggle-unchecked-ripple-color:rgba(var(--google-grey-600-rgb), .15);-webkit-tap-highlight-color:transparent;cursor:pointer;display:block;min-width:34px;outline:0;position:relative;width:34px}:host-context([chrome-refresh-2023]):host{--cr-toggle-checked-bar-color:var(--color-toggle-button-track-on,
                var(--cr-fallback-color-primary));--cr-toggle-checked-button-color:var(--color-toggle-button-thumb-on,
                var(--cr-fallback-color-on-primary));--cr-toggle-unchecked-bar-color:var(--color-toggle-button-track-off,
                var(--cr-fallback-color-surface-variant));--cr-toggle-unchecked-button-color:var(--color-toggle-button-thumb-off,
                var(--cr-fallback-color-outline));--cr-toggle-checked-ripple-color:var(--cr-active-background-color);--cr-toggle-unchecked-ripple-color:var(--cr-active-background-color);--cr-toggle-ripple-diameter:20px;--cr-toggle-bar-width_:26px;height:fit-content;isolation:isolate;min-width:initial;width:fit-content}@media (forced-colors:active){:host{forced-color-adjust:none}}@media (prefers-color-scheme:dark){:host{--cr-toggle-checked-bar-color:var(--google-blue-300);--cr-toggle-checked-button-color:var(--google-blue-300);--cr-toggle-checked-ripple-color:rgba(var(--google-blue-300-rgb), .4);--cr-toggle-unchecked-bar-color:var(--google-grey-500);--cr-toggle-unchecked-button-color:var(--google-grey-300);--cr-toggle-unchecked-ripple-color:rgba(var(--google-grey-300-rgb), .4)}}:host([dark]){--cr-toggle-checked-bar-color:var(--google-blue-300);--cr-toggle-checked-button-color:var(--google-blue-300);--cr-toggle-checked-ripple-color:rgba(var(--google-blue-300-rgb), .4);--cr-toggle-unchecked-bar-color:var(--google-grey-500);--cr-toggle-unchecked-button-color:var(--google-grey-300);--cr-toggle-unchecked-ripple-color:rgba(var(--google-grey-300-rgb), .4)}:host([disabled]){cursor:initial;opacity:var(--cr-disabled-opacity);pointer-events:none}:host-context([chrome-refresh-2023]):host([disabled]){--cr-toggle-checked-bar-color:var(--color-toggle-button-track-on-disabled,
                var(--cr-fallback-color-disabled-background));--cr-toggle-checked-button-color:var(--color-toggle-button-thumb-on-disabled, var(--cr-fallback-color-surface));--cr-toggle-unchecked-bar-color:transparent;--cr-toggle-unchecked-button-color:var(--color-toggle-button-thumb-off-disabled,
                var(--cr-fallback-color-disabled-foreground));opacity:1}#bar{background-color:var(--cr-toggle-unchecked-bar-color);border-radius:8px;height:12px;left:3px;position:absolute;top:2px;transition:background-color linear 80ms;width:28px;z-index:0}:host([checked]) #bar{background-color:var(--cr-toggle-checked-bar-color);opacity:var(--cr-toggle-checked-bar-opacity,.5)}:host-context([chrome-refresh-2023]) #bar{border:1px solid var(--cr-toggle-unchecked-button-color);border-radius:50px;box-sizing:border-box;display:block;height:16px;opacity:1;position:initial;width:var(--cr-toggle-bar-width_)}:host-context([chrome-refresh-2023]):host([checked]) #bar{border-color:var(--cr-toggle-checked-bar-color)}:host-context([chrome-refresh-2023]):host([disabled]) #bar{border-color:var(--cr-toggle-unchecked-button-color)}:host-context([chrome-refresh-2023]):host([disabled][checked]) #bar{border:none}:host-context([chrome-refresh-2023]):host(:focus-visible) #bar{outline:2px solid var(--cr-toggle-checked-bar-color);outline-offset:2px}#knob{background-color:var(--cr-toggle-unchecked-button-color);border-radius:50%;box-shadow:var(--cr-toggle-box-shadow,0 1px 3px 0 rgba(0,0,0,.4));display:block;height:16px;position:relative;transition:transform linear 80ms,background-color linear 80ms;width:16px;z-index:1}:host([checked]) #knob{background-color:var(--cr-toggle-checked-button-color);transform:translate3d(18px,0,0)}:host-context([dir=rtl]):host([checked]) #knob{transform:translate3d(-18px,0,0)}:host-context([chrome-refresh-2023]) #knob{--cr-toggle-knob-diameter_:8px;--cr-toggle-knob-center-edge-distance_:8px;--cr-toggle-knob-direction_:1;--cr-toggle-knob-travel-distance_:calc(
            0.5 * var(--cr-toggle-bar-width_) -
            var(--cr-toggle-knob-center-edge-distance_));--cr-toggle-knob-position-center_:calc(
            0.5 * var(--cr-toggle-bar-width_) + -50%);--cr-toggle-knob-position-start_:calc(
            var(--cr-toggle-knob-position-center_) -
            var(--cr-toggle-knob-direction_) *
            var(--cr-toggle-knob-travel-distance_));--cr-toggle-knob-position-end_:calc(
            var(--cr-toggle-knob-position-center_) +
            var(--cr-toggle-knob-direction_) *
            var(--cr-toggle-knob-travel-distance_));box-shadow:none;height:var(--cr-toggle-knob-diameter_);position:absolute;top:50%;transform:translate(var(--cr-toggle-knob-position-start_),-50%);transition:transform linear 80ms,background-color linear 80ms,width linear 80ms,height linear 80ms;width:var(--cr-toggle-knob-diameter_)}:host-context([dir=rtl][chrome-refresh-2023]) #knob{left:0;--cr-toggle-knob-direction_:-1}:host-context([chrome-refresh-2023]):host(:active) #knob{--cr-toggle-knob-diameter_:10px}:host-context([chrome-refresh-2023]):host([checked]) #knob{--cr-toggle-knob-diameter_:12px;transform:translate(var(--cr-toggle-knob-position-end_),-50%)}:host-context([chrome-refresh-2023]):host([checked]:active) #knob{--cr-toggle-knob-diameter_:14px}:host-context([chrome-refresh-2023]):host([checked]:active) #knob,:host-context([chrome-refresh-2023]):host([checked]:hover) #knob{--cr-toggle-checked-button-color:var(--color-toggle-button-thumb-on-hover,
                var(--cr-fallback-color-primary-container))}:host-context([chrome-refresh-2023]):host(:hover) #knob::before{background-color:var(--cr-hover-background-color);border-radius:50%;content:'';height:var(--cr-toggle-ripple-diameter);left:calc(var(--cr-toggle-knob-diameter_)/ 2);position:absolute;top:calc(var(--cr-toggle-knob-diameter_)/ 2);transform:translate(-50%,-50%);width:var(--cr-toggle-ripple-diameter)}paper-ripple{--paper-ripple-opacity:1;color:var(--cr-toggle-unchecked-ripple-color);height:var(--cr-toggle-ripple-diameter);left:50%;outline:var(--cr-toggle-ripple-ring,none);pointer-events:none;position:absolute;top:50%;transform:translate(-50%,-50%);transition:color linear 80ms;width:var(--cr-toggle-ripple-diameter)}:host([checked]) paper-ripple{color:var(--cr-toggle-checked-ripple-color)}:host-context([dir=rtl]) paper-ripple{left:auto;right:50%;transform:translate(50%,-50%)}</style>
    <span id="bar"></span>
    <span id="knob"></span>
<!--_html_template_end_-->`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const MOVE_THRESHOLD_PX=5;const CrToggleElementBase=mixinBehaviors([PaperRippleBehavior],PolymerElement);class CrToggleElement extends CrToggleElementBase{constructor(){super(...arguments);this.boundPointerMove_=null;this.handledInPointerMove_=false;this.pointerDownX_=0}static get is(){return"cr-toggle"}static get template(){return getTemplate$l()}static get properties(){return{checked:{type:Boolean,value:false,reflectToAttribute:true,observer:"checkedChanged_",notify:true},dark:{type:Boolean,value:false,reflectToAttribute:true},disabled:{type:Boolean,value:false,reflectToAttribute:true,observer:"disabledChanged_"}}}ready(){super.ready();if(!this.hasAttribute("role")){this.setAttribute("role","button")}if(!this.hasAttribute("tabindex")){this.setAttribute("tabindex","0")}this.setAttribute("aria-pressed",this.checked?"true":"false");this.setAttribute("aria-disabled",this.disabled?"true":"false");if(!document.documentElement.hasAttribute("chrome-refresh-2023")){this.addEventListener("blur",this.hideRipple_.bind(this));this.addEventListener("focus",this.onFocus_.bind(this))}this.addEventListener("click",this.onClick_.bind(this));this.addEventListener("keydown",this.onKeyDown_.bind(this));this.addEventListener("keyup",this.onKeyUp_.bind(this));this.addEventListener("pointerdown",this.onPointerDown_.bind(this));this.addEventListener("pointerup",this.onPointerUp_.bind(this))}connectedCallback(){super.connectedCallback();const direction=this.matches(":host-context([dir=rtl]) cr-toggle")?-1:1;this.boundPointerMove_=e=>{e.preventDefault();const diff=e.clientX-this.pointerDownX_;if(Math.abs(diff)<MOVE_THRESHOLD_PX){return}this.handledInPointerMove_=true;const shouldToggle=diff*direction<0&&this.checked||diff*direction>0&&!this.checked;if(shouldToggle){this.toggleState_(false)}}}checkedChanged_(){this.setAttribute("aria-pressed",this.checked?"true":"false")}disabledChanged_(){this.setAttribute("tabindex",this.disabled?"-1":"0");this.setAttribute("aria-disabled",this.disabled?"true":"false")}onFocus_(){this.getRipple().showAndHoldDown()}hideRipple_(){this.getRipple().clear()}onPointerUp_(){assert(this.boundPointerMove_);this.removeEventListener("pointermove",this.boundPointerMove_);this.hideRipple_()}onPointerDown_(e){if(e.button!==0){return}this.setPointerCapture(e.pointerId);this.pointerDownX_=e.clientX;this.handledInPointerMove_=false;assert(this.boundPointerMove_);this.addEventListener("pointermove",this.boundPointerMove_)}onClick_(e){e.stopPropagation();e.preventDefault();if(this.handledInPointerMove_){return}this.toggleState_(false)}toggleState_(fromKeyboard){if(this.disabled){return}if(!fromKeyboard){this.hideRipple_()}this.checked=!this.checked;this.dispatchEvent(new CustomEvent("change",{bubbles:true,composed:true,detail:this.checked}))}onKeyDown_(e){if(e.key!==" "&&e.key!=="Enter"){return}e.preventDefault();e.stopPropagation();if(e.repeat){return}if(e.key==="Enter"){this.toggleState_(true)}}onKeyUp_(e){if(e.key!==" "&&e.key!=="Enter"){return}e.preventDefault();e.stopPropagation();if(e.key===" "){this.toggleState_(true)}}_createRipple(){this._rippleContainer=this.$.knob;const ripple=super._createRipple();ripple.id="ink";ripple.setAttribute("recenters","");ripple.classList.add("circle","toggle-ink");return ripple}}customElements.define(CrToggleElement.is,CrToggleElement);function getTemplate$k(){return html`<!--_html_template_start_-->    <style include="cr-hidden-style"></style>
    <cr-tooltip-icon hidden$="[[!indicatorVisible]]" tooltip-text="[[indicatorTooltip_]]" icon-class="[[indicatorIcon]]" icon-aria-label="[[iconAriaLabel]]">
    </cr-tooltip-icon>
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var CrPolicyIndicatorType;(function(CrPolicyIndicatorType){CrPolicyIndicatorType["DEVICE_POLICY"]="devicePolicy";CrPolicyIndicatorType["EXTENSION"]="extension";CrPolicyIndicatorType["NONE"]="none";CrPolicyIndicatorType["OWNER"]="owner";CrPolicyIndicatorType["PRIMARY_USER"]="primary_user";CrPolicyIndicatorType["RECOMMENDED"]="recommended";CrPolicyIndicatorType["USER_POLICY"]="userPolicy";CrPolicyIndicatorType["PARENT"]="parent";CrPolicyIndicatorType["CHILD_RESTRICTION"]="childRestriction"})(CrPolicyIndicatorType||(CrPolicyIndicatorType={}));const CrPolicyIndicatorMixin=dedupingMixin((superClass=>{class CrPolicyIndicatorMixin extends superClass{static get properties(){return{indicatorType:{type:String,value:CrPolicyIndicatorType.NONE},indicatorSourceName:{type:String,value:""},indicatorVisible:{type:Boolean,computed:"getIndicatorVisible_(indicatorType)"},indicatorIcon:{type:String,computed:"getIndicatorIcon_(indicatorType)"}}}getIndicatorVisible_(type){return type!==CrPolicyIndicatorType.NONE}getIndicatorIcon_(type){switch(type){case CrPolicyIndicatorType.EXTENSION:return"cr:extension";case CrPolicyIndicatorType.NONE:return"";case CrPolicyIndicatorType.PRIMARY_USER:return"cr:group";case CrPolicyIndicatorType.OWNER:return"cr:person";case CrPolicyIndicatorType.USER_POLICY:case CrPolicyIndicatorType.DEVICE_POLICY:case CrPolicyIndicatorType.RECOMMENDED:return"cr20:domain";case CrPolicyIndicatorType.PARENT:case CrPolicyIndicatorType.CHILD_RESTRICTION:return"cr20:kite";default:assertNotReached()}}getIndicatorTooltip(type,name,matches){if(!window.CrPolicyStrings){return""}const CrPolicyStrings=window.CrPolicyStrings;switch(type){case CrPolicyIndicatorType.EXTENSION:return name.length>0?CrPolicyStrings.controlledSettingExtension.replace("$1",name):CrPolicyStrings.controlledSettingExtensionWithoutName;case CrPolicyIndicatorType.PRIMARY_USER:return CrPolicyStrings.controlledSettingShared.replace("$1",name);case CrPolicyIndicatorType.OWNER:return name.length>0?CrPolicyStrings.controlledSettingWithOwner.replace("$1",name):CrPolicyStrings.controlledSettingNoOwner;case CrPolicyIndicatorType.USER_POLICY:case CrPolicyIndicatorType.DEVICE_POLICY:return CrPolicyStrings.controlledSettingPolicy;case CrPolicyIndicatorType.RECOMMENDED:return matches?CrPolicyStrings.controlledSettingRecommendedMatches:CrPolicyStrings.controlledSettingRecommendedDiffers;case CrPolicyIndicatorType.PARENT:return CrPolicyStrings.controlledSettingParent;case CrPolicyIndicatorType.CHILD_RESTRICTION:return CrPolicyStrings.controlledSettingChildRestriction}return""}}return CrPolicyIndicatorMixin}));
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrPolicyIndicatorElementBase=CrPolicyIndicatorMixin(PolymerElement);class CrPolicyIndicatorElement extends CrPolicyIndicatorElementBase{static get is(){return"cr-policy-indicator"}static get template(){return getTemplate$k()}static get properties(){return{iconAriaLabel:String,indicatorTooltip_:{type:String,computed:"getIndicatorTooltip_(indicatorType, indicatorSourceName)"}}}getIndicatorTooltip_(indicatorType,indicatorSourceName){return this.getIndicatorTooltip(indicatorType,indicatorSourceName)}}customElements.define(CrPolicyIndicatorElement.is,CrPolicyIndicatorElement);function getTemplate$j(){return html`<!--_html_template_start_--><style include="network-shared iron-flex">
  cr-toggle {
    margin-inline-start: var(--settings-control-label-spacing);
  }
</style>
<template is="dom-if" if="[[shouldShowAutoIpConfigToggle_]]" restamp>
  <div id="autoConfig" class="property-box">
    <div id="autoIPConfigLabel" class="start">
      [[i18n('networkIPConfigAuto')]]
    </div>
    <cr-policy-indicator indicator-type="[[getPolicyIndicatorType(
        managedProperties.ipAddressConfigType)]]">
    </cr-policy-indicator>
    <cr-toggle id="autoConfigIpToggle" checked="{{automatic_}}"
        disabled="[[!canChangeIPConfigType_(managedProperties, disabled)]]"
        on-change="onAutomaticChange_"
        aria-labelledby="autoIPConfigLabel">
    </cr-toggle>
  </div>
</template>
<template is="dom-if" if="[[hasIpConfigFields_(ipConfig_)]]">
  <div class$="[[getFieldsClassList_(shouldShowAutoIpConfigToggle_)]]">
    <network-property-list-mojo fields="[[ipConfigFields_]]"
        all-fields-read-only="[[automatic_]]"
        property-dict="[[ipConfig_]]"
        edit-field-types="[[getIPEditFields_(automatic_,
            managedProperties)]]"
        on-property-change="onIPChange_"
        disabled="[[disabled]]">
    </network-property-list-mojo>
  </div>
</template>
<!--_html_template_end_-->`}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const getRoutingPrefixAsNetmask=function(prefixLength){if(prefixLength<=0||prefixLength>32){return undefined}let netmask="";for(let i=0;i<4;++i){let remainder=8;if(prefixLength>=8){prefixLength-=8}else{remainder=prefixLength;prefixLength=0}if(i>0){netmask+="."}let value=0;if(remainder!==0){value=(2<<remainder-1)-1<<8-remainder}netmask+=value.toString()}return netmask};const getRoutingPrefixAsLength=function(netmask){if(!netmask){return NO_ROUTING_PREFIX}const tokens=netmask.split(".");if(tokens.length!==4){return NO_ROUTING_PREFIX}let prefixLength=0;for(let i=0;i<tokens.length;++i){const token=tokens[i];if(prefixLength/8!==i){if(token!=="0"){return NO_ROUTING_PREFIX}}else if(token==="255"){prefixLength+=8}else if(token==="254"){prefixLength+=7}else if(token==="252"){prefixLength+=6}else if(token==="248"){prefixLength+=5}else if(token==="240"){prefixLength+=4}else if(token==="224"){prefixLength+=3}else if(token==="192"){prefixLength+=2}else if(token==="128"){prefixLength+=1}else if(token==="0"){prefixLength+=0}else{return NO_ROUTING_PREFIX}}return prefixLength};Polymer({_template:getTemplate$j(),is:"network-ip-config",behaviors:[I18nBehavior,CrPolicyNetworkBehaviorMojo],properties:{disabled:{type:Boolean,value:false},managedProperties:{type:Object,observer:"managedPropertiesChanged_"},automatic_:{type:Boolean,value:true},ipConfig_:Object,ipConfigFields_:{type:Array,value(){return["ipv4.ipAddress","ipv4.netmask","ipv4.gateway","ipv6.ipAddress"]},readOnly:true},shouldShowAutoIpConfigToggle_:{type:Boolean,value:true,computed:"computeShouldShowAutoIpConfigToggle_(managedProperties)"}},getAutoConfigIpToggle(){return this.$$("#autoConfigIpToggle")},savedStaticIp_:undefined,managedPropertiesChanged_(newValue,oldValue){if(!this.managedProperties){return}const properties=this.managedProperties;if(newValue.guid!==(oldValue&&oldValue.guid)){this.savedStaticIp_=undefined}const ipConfigType=OncMojo.getActiveValue(properties.ipAddressConfigType);this.automatic_=ipConfigType!=="Static";if(properties.ipConfigs||properties.staticIpConfig){const ipv4=this.getIPConfigUIProperties_(OncMojo.getIPConfigForType(properties,IPConfigType.kIPv4));let ipv6=this.getIPConfigUIProperties_(OncMojo.getIPConfigForType(properties,IPConfigType.kIPv6));if(OncMojo.connectionStateIsConnected(properties.connectionState)&&this.automatic_&&ipv4&&ipv4.ipAddress){ipv6=ipv6||{type:IPConfigType.kIPv6};ipv6.ipAddress=ipv6.ipAddress||this.i18n("ipAddressNotAvailable")}this.ipConfig_={ipv4:ipv4,ipv6:ipv6}}else{this.ipConfig_=undefined}},canChangeIPConfigType_(managedProperties){if(this.disabled||!managedProperties){return false}if(managedProperties.type===NetworkType.kCellular){return false}const ipConfigType=managedProperties.ipAddressConfigType;return!ipConfigType||!this.isNetworkPolicyEnforced(ipConfigType)},setIpv4Defaults_(ipv4){if(!ipv4.gateway){ipv4.gateway="192.168.1.1"}if(!ipv4.ipAddress){ipv4.ipAddress="192.168.1.1"}if(!ipv4.netmask){ipv4.netmask="255.255.255.0"}},onAutomaticChange_(){if(!this.automatic_){if(!this.ipConfig_){this.ipConfig_={}}if(this.savedStaticIp_){this.ipConfig_.ipv4=this.savedStaticIp_}if(!this.ipConfig_.ipv4){this.ipConfig_.ipv4={type:IPConfigType.kIPv4}}this.setIpv4Defaults_(this.ipConfig_.ipv4);this.sendStaticIpConfig_();return}if(this.ipConfig_){this.savedStaticIp_=this.ipConfig_.ipv4}this.fire("ip-change",{field:"ipAddressConfigType",value:"DHCP"})},getIPConfigUIProperties_(ipconfig){if(!ipconfig){return undefined}const ipconfigUI={};ipconfigUI.gateway=ipconfig.gateway;ipconfigUI.ipAddress=ipconfig.ipAddress;ipconfigUI.nameServers=ipconfig.nameServers;ipconfigUI.type=ipconfig.type;ipconfigUI.webProxyAutoDiscoveryUrl=ipconfig.webProxyAutoDiscoveryUrl;if(ipconfig.routingPrefix!==NO_ROUTING_PREFIX){ipconfigUI.netmask=getRoutingPrefixAsNetmask(ipconfig.routingPrefix)}return ipconfigUI},getIPConfigProperties_(ipconfigUI){const ipconfig={};ipconfig.gateway=ipconfigUI.gateway;ipconfig.ipAddress=ipconfigUI.ipAddress;ipconfig.nameServers=ipconfigUI.nameServers;ipconfig.routingPrefix=getRoutingPrefixAsLength(ipconfigUI.netmask);ipconfig.type=ipconfigUI.type;ipconfig.webProxyAutoDiscoveryUrl=ipconfigUI.webProxyAutoDiscoveryUrl;return ipconfig},hasIpConfigFields_(){if(!this.ipConfig_){return false}for(let i=0;i<this.ipConfigFields_.length;++i){const key=this.ipConfigFields_[i];const value=this.get(key,this.ipConfig_);if(value!==undefined&&value!==""){return true}}return false},getIPFieldEditType_(property){return this.isNetworkPolicyEnforced(property)?undefined:"String"},getIPEditFields_(){const staticIpConfig=this.managedProperties&&this.managedProperties.staticIpConfig;if(this.automatic_||!staticIpConfig){return{}}return{"ipv4.ipAddress":this.getIPFieldEditType_(staticIpConfig.ipAddress),"ipv4.netmask":this.getIPFieldEditType_(staticIpConfig.routingPrefix),"ipv4.gateway":this.getIPFieldEditType_(staticIpConfig.gateway)}},onIPChange_(event){if(!this.ipConfig_){return}const field=event.detail.field;const value=event.detail.value;this.set("ipConfig_."+field,value);this.sendStaticIpConfig_()},sendStaticIpConfig_(){this.fire("ip-change",{field:"staticIpConfig",value:this.ipConfig_.ipv4?this.getIPConfigProperties_(this.ipConfig_.ipv4):{}})},computeShouldShowAutoIpConfigToggle_(){if(this.managedProperties.type===NetworkType.kCellular){return false}return true},getFieldsClassList_(){let classes="property-box single-column stretch";if(this.shouldShowAutoIpConfigToggle_){classes+=" indented"}return classes}});const styleMod$2=document.createElement("dom-module");styleMod$2.appendChild(html`
  <template>
    <style>
:host{--cr-radio-button-checked-color:var(--google-blue-600);--cr-radio-button-checked-ripple-color:rgba(var(--google-blue-600-rgb), .2);--cr-radio-button-ink-size:40px;--cr-radio-button-size:16px;--cr-radio-button-unchecked-color:var(--google-grey-700);--cr-radio-button-unchecked-ripple-color:rgba(var(--google-grey-600-rgb), .15);--ink-to-circle:calc((var(--cr-radio-button-ink-size) -
                               var(--cr-radio-button-size)) / 2);align-items:center;display:flex;flex-shrink:0;gap:var(--cr-radio-button-label-spacing,20px);outline:0}@media (prefers-color-scheme:dark){:host{--cr-radio-button-checked-color:var(--google-blue-300);--cr-radio-button-checked-ripple-color:rgba(var(--google-blue-300-rgb), .4);--cr-radio-button-unchecked-color:var(--google-grey-500);--cr-radio-button-unchecked-ripple-color:rgba(var(--google-grey-300-rgb), .4)}}:host-context([chrome-refresh-2023]):host{--cr-radio-button-ink-size:32px;--cr-radio-button-checked-color:var(--color-radio-button-foreground-checked,
                var(--cr-fallback-color-primary));--cr-radio-button-checked-ripple-color:var(--cr-active-background-color);--cr-radio-button-unchecked-color:var(--color-radio-button-foreground-unchecked,
                var(--cr-fallback-color-outline));--cr-radio-button-unchecked-ripple-color:var(--cr-active-background-color)}@media (forced-colors:active){:host{--cr-radio-button-checked-color:SelectedItem}}:host([disabled]){opacity:var(--cr-disabled-opacity);pointer-events:none}:host-context([chrome-refresh-2023]):host([disabled]){opacity:1;--cr-radio-button-checked-color:var(--color-radio-foreground-disabled,
            var(--cr-fallback-color-disabled-background));--cr-radio-button-unchecked-color:var(--color-radio-foreground-disabled,
                var(--cr-fallback-color-disabled-background))}:host(:not([disabled])){cursor:pointer}:host(.label-first){flex-direction:row-reverse}#labelWrapper{flex:1}:host-context([chrome-refresh-2023]):host([disabled]) #labelWrapper{opacity:var(--cr-disabled-opacity)}#label{color:inherit}:host([hide-label-text]) #label{clip:rect(0,0,0,0);display:block;position:fixed}.disc,.disc-border,.disc-wrapper,paper-ripple{border-radius:50%}.disc-wrapper{height:var(--cr-radio-button-size);margin-block-start:var(--cr-radio-button-disc-margin-block-start,0);position:relative;width:var(--cr-radio-button-size)}.disc,.disc-border{box-sizing:border-box;height:var(--cr-radio-button-size);width:var(--cr-radio-button-size)}.disc-border{border:2px solid var(--cr-radio-button-unchecked-color)}:host([checked]) .disc-border{border-color:var(--cr-radio-button-checked-color)}#button:focus{outline:0}.disc{background-color:transparent;position:absolute;top:0;transform:scale(0);transition:border-color .2s,transform .2s}:host([checked]) .disc{background-color:var(--cr-radio-button-checked-color);transform:scale(.5)}:host-context([chrome-refresh-2023]) #overlay{border-radius:50%;box-sizing:border-box;display:none;height:var(--cr-radio-button-ink-size);left:50%;pointer-events:none;position:absolute;top:50%;transform:translate(-50%,-50%);width:var(--cr-radio-button-ink-size)}:host-context([chrome-refresh-2023]) #button:hover #overlay{background-color:var(--cr-hover-background-color);display:block}:host-context([chrome-refresh-2023]) #button:focus-visible #overlay{border:2px solid var(--cr-focus-outline-color);display:block}paper-ripple{--paper-ripple-opacity:1;color:var(--cr-radio-button-unchecked-ripple-color);height:var(--cr-radio-button-ink-size);left:calc(-1 * var(--ink-to-circle));pointer-events:none;position:absolute;top:calc(-1 * var(--ink-to-circle));transition:color linear 80ms;width:var(--cr-radio-button-ink-size)}:host-context([dir=rtl]) paper-ripple{left:auto;right:calc(-1 * var(--ink-to-circle))}:host([checked]) paper-ripple{color:var(--cr-radio-button-checked-ripple-color)}
    </style>
  </template>
`.content);styleMod$2.register("cr-radio-button-style");function getTemplate$i(){return html`<!--_html_template_start_-->    <style include="cr-radio-button-style cr-hidden-style"></style>

    <div aria-checked$="[[getAriaChecked_(checked)]]" aria-describedby="slotted-content" aria-disabled$="[[getAriaDisabled_(disabled)]]" aria-labelledby="label" class="disc-wrapper" id="button" role="radio" tabindex$="[[buttonTabIndex_]]" on-keydown="onInputKeydown_">
      <div class="disc-border"></div>
      <div class="disc"></div>
      <div id="overlay"></div>
    </div>

    <div id="labelWrapper">
      <span id="label" hidden$="[[!label]]" aria-hidden="true">[[label]]</span>
      <span id="slotted-content">
        <slot></slot>
      </span>
    </div>
<!--_html_template_end_-->`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrRadioButtonMixin=dedupingMixin((superClass=>{class CrRadioButtonMixin extends superClass{static get properties(){return{checked:{type:Boolean,value:false,reflectToAttribute:true},disabled:{type:Boolean,value:false,reflectToAttribute:true,notify:true},focusable:{type:Boolean,value:false,observer:"onFocusableChanged_"},hideLabelText:{type:Boolean,value:false,reflectToAttribute:true},label:{type:String,value:""},name:{type:String,notify:true,reflectToAttribute:true},buttonTabIndex_:{type:Number,computed:"getTabIndex_(focusable)"}}}connectedCallback(){super.connectedCallback();this.addEventListener("blur",this.hideRipple_.bind(this));if(!document.documentElement.hasAttribute("chrome-refresh-2023")){this.addEventListener("focus",this.onFocus_.bind(this))}this.addEventListener("up",this.hideRipple_.bind(this))}focus(){const button=this.shadowRoot.querySelector("#button");assert(button);button.focus()}getPaperRipple(){assertNotReached()}onFocus_(){this.getPaperRipple().showAndHoldDown()}hideRipple_(){this.getPaperRipple().clear()}onFocusableChanged_(){const links=this.querySelectorAll("a");links.forEach((link=>{link.tabIndex=this.checked?0:-1}))}getAriaChecked_(){return this.checked?"true":"false"}getAriaDisabled_(){return this.disabled?"true":"false"}getTabIndex_(){return this.focusable?0:-1}onInputKeydown_(e){if(e.shiftKey&&e.key==="Tab"){this.focus()}}}return CrRadioButtonMixin}));
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrRadioButtonElementBase=mixinBehaviors([PaperRippleBehavior],CrRadioButtonMixin(PolymerElement));class CrRadioButtonElement extends CrRadioButtonElementBase{static get is(){return"cr-radio-button"}static get template(){return getTemplate$i()}getPaperRipple(){return this.getRipple()}_createRipple(){this._rippleContainer=this.shadowRoot.querySelector(".disc-wrapper");const ripple=super._createRipple();ripple.id="ink";ripple.setAttribute("recenters","");ripple.classList.add("circle","toggle-ink");return ripple}}customElements.define(CrRadioButtonElement.is,CrRadioButtonElement);
// Copyright 2011 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class EventTracker{constructor(){this.listeners_=[]}add(target,eventType,listener,capture=false){const h={target:target,eventType:eventType,listener:listener,capture:capture};this.listeners_.push(h);target.addEventListener(eventType,listener,capture)}remove(target,eventType){this.listeners_=this.listeners_.filter((listener=>{if(listener.target===target&&(!eventType||listener.eventType===eventType)){EventTracker.removeEventListener(listener);return false}return true}))}removeAll(){this.listeners_.forEach((listener=>EventTracker.removeEventListener(listener)));this.listeners_=[]}static removeEventListener(entry){entry.target.removeEventListener(entry.eventType,entry.listener,entry.capture)}}function getTemplate$h(){return html`<!--_html_template_start_-->    <style>:host{display:inline-block}:host ::slotted(*){padding:var(--cr-radio-group-item-padding,12px)}:host([disabled]){cursor:initial;pointer-events:none;user-select:none}:host([disabled]) ::slotted(*){opacity:var(--cr-disabled-opacity)}</style>
    <slot></slot>
<!--_html_template_end_-->`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function isEnabled(radio){return radio.matches(":not([disabled]):not([hidden])")&&radio.style.display!=="none"&&radio.style.visibility!=="hidden"}class CrRadioGroupElement extends PolymerElement{constructor(){super(...arguments);this.buttons_=null;this.buttonEventTracker_=new EventTracker;this.deltaKeyMap_=null;this.isRtl_=false;this.populateBound_=null}static get is(){return"cr-radio-group"}static get template(){return getTemplate$h()}static get properties(){return{disabled:{type:Boolean,value:false,reflectToAttribute:true,observer:"update_"},selected:{type:String,notify:true,observer:"update_"},selectableElements:{type:String,value:"cr-radio-button, cr-card-radio-button, controlled-radio-button"},nestedSelectable:{type:Boolean,value:false,observer:"populate_"},selectableRegExp_:{value:Object,computed:"computeSelectableRegExp_(selectableElements)"}}}ready(){super.ready();this.addEventListener("keydown",(e=>this.onKeyDown_(e)));this.addEventListener("click",this.onClick_.bind(this));if(!this.hasAttribute("role")){this.setAttribute("role","radiogroup")}this.setAttribute("aria-disabled","false")}connectedCallback(){super.connectedCallback();this.isRtl_=this.matches(":host-context([dir=rtl]) cr-radio-group");this.deltaKeyMap_=new Map([["ArrowDown",1],["ArrowLeft",this.isRtl_?1:-1],["ArrowRight",this.isRtl_?-1:1],["ArrowUp",-1],["PageDown",1],["PageUp",-1]]);this.populateBound_=()=>this.populate_();assert(this.populateBound_);this.shadowRoot.querySelector("slot").addEventListener("slotchange",this.populateBound_);this.populate_()}disconnectedCallback(){super.disconnectedCallback();assert(this.populateBound_);this.shadowRoot.querySelector("slot").removeEventListener("slotchange",this.populateBound_);this.buttonEventTracker_.removeAll()}focus(){if(this.disabled||!this.buttons_){return}const radio=this.buttons_.find((radio=>this.isButtonEnabledAndSelected_(radio)));if(radio){radio.focus()}}onKeyDown_(event){if(this.disabled){return}if(event.ctrlKey||event.shiftKey||event.metaKey||event.altKey){return}const targetElement=event.target;if(!this.buttons_||!this.buttons_.includes(targetElement)){return}if(event.key===" "||event.key==="Enter"){event.preventDefault();this.select_(targetElement);return}const enabledRadios=this.buttons_.filter(isEnabled);if(enabledRadios.length===0){return}assert(this.deltaKeyMap_);let selectedIndex;const max=enabledRadios.length-1;if(event.key==="Home"){selectedIndex=0}else if(event.key==="End"){selectedIndex=max}else if(this.deltaKeyMap_.has(event.key)){const delta=this.deltaKeyMap_.get(event.key);const lastSelection=enabledRadios.findIndex((radio=>radio.checked));selectedIndex=Math.max(0,lastSelection)+delta;if(selectedIndex>max){selectedIndex=0}else if(selectedIndex<0){selectedIndex=max}}else{return}const radio=enabledRadios[selectedIndex];const name=`${radio.name}`;if(this.selected!==name){event.preventDefault();event.stopPropagation();this.selected=name;radio.focus()}}computeSelectableRegExp_(){const tags=this.selectableElements.split(", ").join("|");return new RegExp(`^(${tags})$`,"i")}onClick_(event){const path=event.composedPath();if(path.some((target=>/^a$/i.test(target.tagName)))){return}const target=path.find((n=>this.selectableRegExp_.test(n.tagName)));if(target&&this.buttons_&&this.buttons_.includes(target)){this.select_(target)}}populate_(){const nodes=this.shadowRoot.querySelector("slot").assignedNodes({flatten:true});this.buttons_=Array.from(nodes).flatMap((node=>{if(node.nodeType!==Node.ELEMENT_NODE){return[]}const el=node;let result=[];if(el.matches(this.selectableElements)){result.push(el)}if(this.nestedSelectable){result=result.concat(Array.from(el.querySelectorAll(this.selectableElements)))}return result}));this.buttonEventTracker_.removeAll();this.buttons_.forEach((el=>{this.buttonEventTracker_.add(el,"disabled-changed",(()=>this.populate_()));this.buttonEventTracker_.add(el,"name-changed",(()=>this.populate_()))}));this.update_()}select_(button){if(!isEnabled(button)){return}const name=`${button.name}`;if(this.selected!==name){this.selected=name}}isButtonEnabledAndSelected_(button){return!this.disabled&&button.checked&&isEnabled(button)}update_(){if(!this.buttons_){return}let noneMadeFocusable=true;this.buttons_.forEach((radio=>{radio.checked=this.selected!==undefined&&`${radio.name}`===`${this.selected}`;const disabled=this.disabled||!isEnabled(radio);const canBeFocused=radio.checked&&!disabled;if(canBeFocused){radio.focusable=true;noneMadeFocusable=false}else{radio.focusable=false}radio.setAttribute("aria-disabled",`${disabled}`)}));this.setAttribute("aria-disabled",`${this.disabled}`);if(noneMadeFocusable&&!this.disabled){const radio=this.buttons_.find(isEnabled);if(radio){radio.focusable=true}}}}customElements.define(CrRadioGroupElement.is,CrRadioGroupElement);function getTemplate$g(){return html`<!--_html_template_start_--><style include="network-shared md-select iron-flex">
  a {
    margin-inline-start: 4px;
  }

  cr-input {
    margin-bottom: 4px;
    /* Aligns with the start of cr-radio-button's text. */
    margin-inline-start: 38px;
  }

  cr-radio-group {
    --cr-radio-group-item-padding: 12px;
    width: 100%;
  }

  .nameservers {
    /* Aligns with the start of cr-radio-button's text. */
    margin-inline-start: 38px;
    padding-bottom: 0;
    padding-top: 0;
  }

  .nameservers:not([changeable]) {
    opacity: var(--cr-disabled-opacity);
  }

  #radioGroupDiv {
    align-items: center;
    display: block;
    padding-inline-end: var(--cr-section-padding);
    padding-inline-start: var(--cr-section-padding);
  }

  cr-policy-indicator {
    /* Aligns with the other policy indicators. */
    margin-inline-end: calc(var(--settings-control-label-spacing) + 34px);
  }
</style>

<div class="property-box">
  <div class="start">
    [[i18n('networkNameservers')]]
  </div>
  <cr-policy-indicator indicator-type="[[getPolicyIndicatorType(
      managedProperties.nameServersConfigType)]]">
  </cr-policy-indicator>
</div>
<div id="radioGroupDiv">
  <cr-radio-group id="nameserverType" class="layout vertical"
      selected="[[nameserversType_]]"
      on-selected-changed="onTypeChange_"
      aria-label="[[i18n('networkNameservers')]]"
      disabled="[[disabled]]">
    <!-- Automatic nameservers -->
    <cr-radio-button name="[[nameserversTypeEnum_.AUTOMATIC]]"
      disabled="[[!canChangeConfigType_]]">
      [[i18n('networkNameserversAutomatic')]]
    </cr-radio-button>
    <template is="dom-if" if="[[showNameservers_(nameserversType_,
        nameserversTypeEnum_.AUTOMATIC, nameservers_)]]">
      <div class="nameservers" changeable$="[[canChangeConfigType_]]">
        [[getNameserversString_(nameservers_)]]
      </div>
    </template>

    <!-- Google nameservers -->
    <cr-radio-button name="[[nameserversTypeEnum_.GOOGLE]]"
      disabled="[[!canChangeConfigType_]]">
      [[i18n('networkNameserversGoogle')]]
      <template is="dom-if"
          if="[[i18nExists('networkGoogleNameserversLearnMoreUrl')]]">
        <a href="[[i18n('networkGoogleNameserversLearnMoreUrl')]]"
            target="_blank" on-click="doNothing_">
          [[i18n('networkNameserversLearnMore')]]
        </a>
      </template>
    </cr-radio-button>
    <template is="dom-if" if="[[showNameservers_(nameserversType_,
        nameserversTypeEnum_.GOOGLE, nameservers_)]]">
      <div class="nameservers" changeable$="[[canChangeConfigType_]]">
        [[getNameserversString_(nameservers_)]]
      </div>
    </template>

    <!-- Custom nameservers -->
    <cr-radio-button name="[[nameserversTypeEnum_.CUSTOM]]"
      disabled="[[!canChangeConfigType_]]">
      [[i18n('networkNameserversCustom')]]
    </cr-radio-button>
    <template is="dom-if" if="[[showNameservers_(nameserversType_,
        nameserversTypeEnum_.CUSTOM)]]">
      <div class="property-box single-column two-line">
        <template is="dom-repeat" items="[[nameservers_]]">
          <cr-input id="nameserver[[index]]" value="{{item}}"
              aria-label="[[getCustomNameServerInputA11yLabel_(index)]]"
              on-change="onValueChange_"
              disabled="[[!canEditCustomNameServers_(nameserversType_,
                  managedProperties)]]">
          </cr-input>
        </template>
      </div>
    </template>
  </cr-radio-group>
</div>
<!--_html_template_end_-->`}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const NameserversType={AUTOMATIC:"automatic",CUSTOM:"custom",GOOGLE:"google"};Polymer({_template:getTemplate$g(),is:"network-nameservers",behaviors:[I18nBehavior,CrPolicyNetworkBehaviorMojo],properties:{disabled:{type:Boolean,value:false},managedProperties:{type:Object,observer:"managedPropertiesChanged_"},nameservers_:{type:Array,value(){return[]}},nameserversType_:{type:String,value:NameserversType.AUTOMATIC},nameserversTypeEnum_:{readOnly:true,type:Object,value:NameserversType},googleNameserversText_:{type:String,value(){return this.i18nAdvanced("networkNameserversGoogle",{substitutions:[],tags:["a"]}).toString()}},canChangeConfigType_:{type:Boolean,computed:"computeCanChangeConfigType_(managedProperties)"}},GOOGLE_NAMESERVERS:["8.8.4.4","8.8.8.8"],EMPTY_NAMESERVER:"0.0.0.0",MAX_NAMESERVERS:4,savedCustomNameservers_:[],savedNameserversType_:null,getNameserverRadioButtons(){return this.$$("#nameserverType")},nameserversMatch_(nameservers1,nameservers2){const nonEmptySortedNameservers1=this.clearEmptyNameServers_(nameservers1).sort();const nonEmptySortedNameservers2=this.clearEmptyNameServers_(nameservers2).sort();if(nonEmptySortedNameservers1.length!==nonEmptySortedNameservers2.length){return false}for(let i=0;i<nonEmptySortedNameservers1.length;i++){if(nonEmptySortedNameservers1[i]!==nonEmptySortedNameservers2[i]){return false}}return true},isGoogleNameservers_(nameservers){return this.nameserversMatch_(nameservers,this.GOOGLE_NAMESERVERS)},getPolicyEnforcedNameservers_(){const staticIpConfig=this.managedProperties&&this.managedProperties.staticIpConfig;if(!staticIpConfig||!staticIpConfig.nameServers){return null}return this.getEnforcedPolicyValue(staticIpConfig.nameServers)},getPolicyRecommendedNameservers_(){const staticIpConfig=this.managedProperties&&this.managedProperties.staticIpConfig;if(!staticIpConfig||!staticIpConfig.nameServers){return null}return this.getRecommendedPolicyValue(staticIpConfig.nameServers)},managedPropertiesChanged_(newValue,oldValue){if(!this.managedProperties){return}if(!oldValue||newValue.guid!==oldValue.guid){this.savedCustomNameservers_=[];this.savedNameserversType_=null}let nameservers=[];const ipv4=OncMojo.getIPConfigForType(this.managedProperties,IPConfigType.kIPv4);if(ipv4&&ipv4.nameServers){nameservers=ipv4.nameServers.slice()}const configType=OncMojo.getActiveValue(this.managedProperties.nameServersConfigType);let type;if(configType==="Static"){if(this.isGoogleNameservers_(nameservers)&&this.savedNameserversType_!==NameserversType.CUSTOM){type=NameserversType.GOOGLE;nameservers=this.GOOGLE_NAMESERVERS}else{type=NameserversType.CUSTOM}}else{type=NameserversType.AUTOMATIC;nameservers=this.clearEmptyNameServers_(nameservers)}this.setNameservers_(type,nameservers,false)},setNameservers_(nameserversType,nameservers,sendNameservers){if(nameserversType===NameserversType.CUSTOM){for(let i=nameservers.length;i<this.MAX_NAMESERVERS;++i){nameservers[i]=this.EMPTY_NAMESERVER}}else{nameservers=this.clearEmptyNameServers_(nameservers)}this.nameservers_=nameservers;this.nameserversType_=nameserversType;if(sendNameservers){this.sendNameServers_()}},computeCanChangeConfigType_(managedProperties){if(!managedProperties){return false}if(this.isNetworkPolicyEnforced(managedProperties.nameServersConfigType)){return false}return true},canEditCustomNameServers_(nameserversType,managedProperties){if(!managedProperties){return false}if(nameserversType!==NameserversType.CUSTOM){return false}if(this.isNetworkPolicyEnforced(managedProperties.nameServersConfigType)){return false}if(managedProperties.staticIpConfig&&managedProperties.staticIpConfig.nameServers&&this.isNetworkPolicyEnforced(managedProperties.staticIpConfig.nameServers)){return false}return true},showNameservers_(nameserversType,type,nameservers){if(nameserversType!==type){return false}return type===NameserversType.CUSTOM||nameservers.length>0},getNameserversString_(nameservers){return nameservers.join(", ")},getCustomNameServers_(){const policyEnforcedNameservers=this.getPolicyEnforcedNameservers_();if(policyEnforcedNameservers!==null){return policyEnforcedNameservers.slice()}if(this.savedCustomNameservers_.length>0){return this.savedCustomNameservers_}const policyRecommendedNameservers=this.getPolicyRecommendedNameservers_();if(policyRecommendedNameservers!==null){return policyRecommendedNameservers.slice()}return this.nameservers_},onTypeChange_(){const type=this.$$("#nameserverType").selected;this.nameserversType_=type;this.savedNameserversType_=type;if(type===NameserversType.CUSTOM){this.setNameservers_(type,this.getCustomNameServers_(),true);return}this.sendNameServers_()},onValueChange_(){this.savedCustomNameservers_=this.nameservers_.slice();this.sendNameServers_()},sendNameServers_(){const type=this.nameserversType_;if(type===NameserversType.CUSTOM){this.fire("nameservers-change",{field:"nameServers",value:this.nameservers_})}else if(type===NameserversType.GOOGLE){this.nameservers_=this.GOOGLE_NAMESERVERS;this.fire("nameservers-change",{field:"nameServers",value:this.GOOGLE_NAMESERVERS})}else{if(!OncMojo.connectionStateIsConnected(this.managedProperties.connectionState)){this.nameservers_=[]}else{this.nameservers_=this.clearEmptyNameServers_(this.nameservers_)}this.fire("nameservers-change",{field:"nameServersConfigType",value:"DHCP"})}},clearEmptyNameServers_(nameservers){return nameservers.filter((nameserver=>!!nameserver&&nameserver!==this.EMPTY_NAMESERVER))},doNothing_(event){event.stopPropagation()},getCustomNameServerInputA11yLabel_(index){return this.i18n("networkNameserversCustomInputA11yLabel",index+1)}});function getTemplate$f(){return html`<!--_html_template_start_-->    <style>:host{--cr-icon-button-fill-color:var(--google-grey-700);--cr-icon-button-icon-start-offset:0;--cr-icon-button-icon-size:20px;--cr-icon-button-size:36px;--cr-icon-button-height:var(--cr-icon-button-size);--cr-icon-button-transition:150ms ease-in-out;--cr-icon-button-width:var(--cr-icon-button-size);-webkit-tap-highlight-color:transparent;border-radius:50%;color:var(--cr-icon-button-stroke-color,var(--cr-icon-button-fill-color));cursor:pointer;display:inline-flex;flex-shrink:0;height:var(--cr-icon-button-height);margin-inline-end:var(--cr-icon-button-margin-end,var(--cr-icon-ripple-margin));margin-inline-start:var(--cr-icon-button-margin-start);outline:0;overflow:hidden;user-select:none;vertical-align:middle;width:var(--cr-icon-button-width)}:host-context([chrome-refresh-2023]):host{--cr-icon-button-fill-color:currentColor;--cr-icon-button-size:32px;position:relative}:host(:hover){background-color:var(--cr-icon-button-hover-background-color,var(--cr-hover-background-color))}:host(:focus-visible:focus){box-shadow:inset 0 0 0 2px var(--cr-icon-button-focus-outline-color,var(--cr-focus-outline-color))}@media (forced-colors:active){:host(:focus-visible:focus){outline:var(--cr-focus-outline-hcm)}}:host-context(html:not([chrome-refresh-2023])) :host(:active){background-color:var(--cr-icon-button-active-background-color,var(--cr-active-background-color))}paper-ripple{display:none}:host-context([chrome-refresh-2023]) paper-ripple{--paper-ripple-opacity:1;color:var(--cr-active-background-color);display:block}:host([disabled]){cursor:initial;opacity:var(--cr-disabled-opacity);pointer-events:none}:host(.no-overlap){--cr-icon-button-margin-end:0;--cr-icon-button-margin-start:0}:host-context([dir=rtl]):host(:not([dir=ltr]):not([multiple-icons_])){transform:scaleX(-1)}:host-context([dir=rtl]):host(:not([dir=ltr])[multiple-icons_]) iron-icon{transform:scaleX(-1)}:host(:not([iron-icon])) #maskedImage{-webkit-mask-image:var(--cr-icon-image);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--cr-icon-button-icon-size);-webkit-transform:var(--cr-icon-image-transform,none);background-color:var(--cr-icon-button-fill-color);height:100%;transition:background-color var(--cr-icon-button-transition);width:100%}@media (forced-colors:active){:host(:not([iron-icon])) #maskedImage{background-color:ButtonText}}#icon{align-items:center;border-radius:4px;display:flex;height:100%;justify-content:center;padding-inline-start:var(--cr-icon-button-icon-start-offset);position:relative;width:100%}iron-icon{--iron-icon-fill-color:var(--cr-icon-button-fill-color);--iron-icon-stroke-color:var(--cr-icon-button-stroke-color, none);--iron-icon-height:var(--cr-icon-button-icon-size);--iron-icon-width:var(--cr-icon-button-icon-size);transition:fill var(--cr-icon-button-transition),stroke var(--cr-icon-button-transition)}@media (prefers-color-scheme:dark){:host{--cr-icon-button-fill-color:var(--google-grey-500)}}</style>
    <div id="icon">
      <div id="maskedImage"></div>
    </div>
<!--_html_template_end_-->`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrIconbuttonElementBase=mixinBehaviors([PaperRippleBehavior],PolymerElement);class CrIconButtonElement extends CrIconbuttonElementBase{static get is(){return"cr-icon-button"}static get template(){return getTemplate$f()}static get properties(){return{disabled:{type:Boolean,value:false,reflectToAttribute:true,observer:"disabledChanged_"},customTabIndex:{type:Number,observer:"applyTabIndex_"},ironIcon:{type:String,observer:"onIronIconChanged_",reflectToAttribute:true},multipleIcons_:{type:Boolean,reflectToAttribute:true}}}constructor(){super();this.spaceKeyDown_=false;this.addEventListener("blur",this.onBlur_.bind(this));this.addEventListener("click",this.onClick_.bind(this));this.addEventListener("keydown",this.onKeyDown_.bind(this));this.addEventListener("keyup",this.onKeyUp_.bind(this));if(document.documentElement.hasAttribute("chrome-refresh-2023")){this.addEventListener("pointerdown",this.onPointerDown_.bind(this))}}ready(){super.ready();this.setAttribute("aria-disabled",this.disabled?"true":"false");if(!this.hasAttribute("role")){this.setAttribute("role","button")}if(!this.hasAttribute("tabindex")){this.setAttribute("tabindex","0")}}toggleClass(className){this.classList.toggle(className)}disabledChanged_(newValue,oldValue){if(!newValue&&oldValue===undefined){return}if(this.disabled){this.blur()}this.setAttribute("aria-disabled",this.disabled?"true":"false");this.applyTabIndex_()}applyTabIndex_(){let value=this.customTabIndex;if(value===undefined){value=this.disabled?-1:0}this.setAttribute("tabindex",value.toString())}onBlur_(){this.spaceKeyDown_=false}onClick_(e){if(this.disabled){e.stopImmediatePropagation()}}onIronIconChanged_(){this.shadowRoot.querySelectorAll("iron-icon").forEach((el=>el.remove()));if(!this.ironIcon){return}const icons=(this.ironIcon||"").split(",");this.multipleIcons_=icons.length>1;icons.forEach((icon=>{const ironIcon=document.createElement("iron-icon");ironIcon.icon=icon;this.$.icon.appendChild(ironIcon);if(ironIcon.shadowRoot){ironIcon.shadowRoot.querySelectorAll("svg, img").forEach((child=>child.setAttribute("role","none")))}}))}onKeyDown_(e){if(e.key!==" "&&e.key!=="Enter"){return}e.preventDefault();e.stopPropagation();if(e.repeat){return}if(e.key==="Enter"){this.click()}else if(e.key===" "){this.spaceKeyDown_=true}}onKeyUp_(e){if(e.key===" "||e.key==="Enter"){e.preventDefault();e.stopPropagation()}if(this.spaceKeyDown_&&e.key===" "){this.spaceKeyDown_=false;this.click()}}onPointerDown_(){this.ensureRipple()}}customElements.define(CrIconButtonElement.is,CrIconButtonElement);function getTemplate$e(){return html`<!--_html_template_start_--><style include="network-shared cr-hidden-style iron-flex">
  #container {
    align-self: stretch;
    border: 1px solid lightgrey;
    height: 100px;
    margin-top: 10px;
    overflow-y: auto;
    padding: 5px;
  }

  cr-icon-button {
    --cr-icon-button-margin-end: 0;
  }
</style>
<div id="container">
  <template is="dom-repeat" items="[[exclusions]]">
    <div class="layout horizontal center">
      <div class="flex">[[item]]</div>
      <cr-icon-button class="icon-clear" hidden="[[!editable]]"
          title="[[i18n('networkProxyExceptionRemoveA11yLabel', item)]]"
          on-click="onRemoveTap_">
      </cr-icon-button>
    </div>
  </template>
</div>
<!--_html_template_end_-->`}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Polymer({_template:getTemplate$e(),is:"network-proxy-exclusions",behaviors:[I18nBehavior],properties:{editable:{type:Boolean,value:false},exclusions:{type:Array,value(){return[]},notify:true}},onRemoveTap_(event){const index=event.model.index;this.splice("exclusions",index,1);this.fire("proxy-exclusions-change")}});function getTemplate$d(){return html`<!--_html_template_start_--><style include="network-shared">
  cr-input {
    margin: 0 var(--cr-button-edge-spacing);
  }

  #container {
    align-items: center;
    display: flex;
    flex: 0 1 auto;
    flex-direction: row;
  }

  #label {
    flex: 1;
  }

  #host {
    width: 200px;
  }

  #port {
    width: 50px;
  }
</style>
<div id="container">
  <div id="label">[[label]]</div>
  <cr-input id="host" readonly="[[!editable]]"
      aria-label="[[i18n('networkProxyHostInputA11yLabel', label)]]"
      value="{{value.host.activeValue}}" on-change="onValueChange_">
  </cr-input>
  <div>[[i18n('networkProxyPort')]]</div>
  <cr-input id="port" readonly="[[!editable]]"
      aria-label="[[i18n('networkProxyPortInputA11yLabel', label)]]"
      value="{{value.port.activeValue}}" on-change="onValueChange_">
  </cr-input>
</div>
<!--_html_template_end_-->`}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Polymer({_template:getTemplate$d(),is:"network-proxy-input",behaviors:[I18nBehavior],properties:{editable:{type:Boolean,value:false},label:{type:String,value:"Proxy"},value:{type:Object,value(){return{host:OncMojo.createManagedString(""),port:OncMojo.createManagedInt(80)}},notify:true}},focus(){this.$$("cr-input").focus()},onValueChange_(){let port=parseInt(this.value.port.activeValue,10);if(isNaN(port)){port=80}this.value.port.activeValue=port;this.fire("proxy-input-change",this.value)}});function getTemplate$c(){return html`<!--_html_template_start_--><style include="network-shared cr-hidden-style iron-flex iron-flex-alignment md-select">
  network-proxy-input {
    margin-bottom: 10px;
  }

  network-proxy-exclusions {
    margin: 10px 0;
  }

  #addException {
    margin-top: 10px;
  }

  #manualProxy {
    padding-inline-start: var(--cr-section-padding);
  }

  #proxyType  {
    width: 320px;
  }

</style>

<!-- Proxy type dropdown -->
<div class="property-box">
  <div class="start">[[i18n('networkProxyConnectionType')]]</div>
  <select id="proxyType" class="md-select" on-change="onTypeChange_"
      value="[[proxy_.type.activeValue]]"
      disabled="[[!isEditable_('type', managedProperties, editable,
          useSharedProxies)]]"
      aria-label="[[i18n('networkProxyConnectionType')]]">
    <template is="dom-repeat" items="[[proxyTypes_]]">
      <option value="[[item]]">[[getProxyTypeDesc_(item)]]</option>
    </template>
  </select>
</div>

<!-- Autoconfiguration (PAC) -->
<div class="property-box indented"
    hidden$="[[!matches_(proxy_.type.activeValue, 'PAC')]]">
  <cr-input id="pacInput" class="flex"
      label="[[i18n('networkProxyAutoConfig')]]"
      value="{{proxy_.pac.activeValue}}" on-change="onPACChange_"
      disabled="[[!isEditable_('pac', managedProperties, editable,
          useSharedProxies)]]">
  </cr-input>
</div>

<!-- Web Proxy Auto Discovery (WPAD) -->
<div class="property-box indented"
    hidden$="[[!matches_(proxy_.type.activeValue, 'WPAD')]]">
  <div>[[i18n('networkProxyWpad')]]</div>
  <div class="middle">[[wpad_]]</div>
</div>

<!-- Manual -->
<div class="property-box indented"
    hidden$="[[!matches_(proxy_.type.activeValue, 'Manual')]]">
  <div id="networkProxyToggleLabel" class="flex">
    [[i18n('networkProxyUseSame')]]
  </div>
  <cr-toggle checked="{{useSameProxy_}}"
      disabled="[[!isEditable_('type', managedProperties, editable,
          useSharedProxies)]]"
      aria-labelledby="networkProxyToggleLabel">
  </cr-toggle>
</div>

<div id="manualProxy" class="layout vertical start"
    hidden$="[[!matches_(proxy_.type.activeValue, 'Manual')]]">
  <div hidden$="[[!useSameProxy_]]" class="layout vertical">
    <network-proxy-input
        id="sameProxyInput"
        on-proxy-input-change="onProxyInputChange_"
        editable="[[isEditable_('manual.httpProxy.host', managedProperties,
            editable, useSharedProxies)]]"
        value="{{proxy_.manual.httpProxy}}"
        label="[[i18n('networkProxy')]]">
    </network-proxy-input>
  </div>
  <div hidden$="[[useSameProxy_]]" class="layout vertical">
    <network-proxy-input
      id="httpProxyInput"
        on-proxy-input-change="onProxyInputChange_"
        editable="[[isEditable_('manual.httpProxy.host', managedProperties,
            editable, useSharedProxies)]]"
        value="{{proxy_.manual.httpProxy}}"
        label="[[i18n('networkProxyHttp')]]">
    </network-proxy-input>
    <network-proxy-input
        id="secureHttpProxyInput"
        on-proxy-input-change="onProxyInputChange_"
        editable="[[isEditable_('manual.secureHttpProxy.host',
            managedProperties, editable, useSharedProxies)]]"
        value="{{proxy_.manual.secureHttpProxy}}"
        label="[[i18n('networkProxyShttp')]]">
    </network-proxy-input>
    <network-proxy-input
        id="socksProxyInput"
        on-proxy-input-change="onProxyInputChange_"
        editable="[[isEditable_('manual.socks.host', managedProperties,
            editable, useSharedProxies)]]"
        value="{{proxy_.manual.socks}}"
        label="[[i18n('networkProxySocks')]]">
    </network-proxy-input>
  </div>

  <div hidden="[[!isEditable_('type', managedProperties, editable,
      useSharedProxies)]]">
    <div>[[i18n('networkProxyExceptionList')]]</div>
    <network-proxy-exclusions
        on-proxy-exclusions-change="onProxyExclusionsChange_"
        exclusions="{{proxy_.excludeDomains.activeValue}}"
        editable="[[isEditable_('excludeDomains', managedProperties,
            editable, useSharedProxies)]]">
    </network-proxy-exclusions>
    <div id="addException" class="layout horizontal center">
      <cr-input id="proxyExclusion" class="flex"
          value="{{proxyExclusionInputValue_}}"
          aria-label="[[i18n('networkProxyExceptionInputA11yLabel')]]"
          on-keypress="onAddProxyExclusionKeypress_">
        <cr-button id="proxyExclusionButton"
            on-click="onAddProxyExclusionTap_"
            slot="suffix"
            disabled="[[shouldProxyExclusionButtonBeDisabled_(
                proxyExclusionInputValue_)]]">
          [[i18n('networkProxyAddException')]]
        </cr-button>
      </cr-input>
    </div>
  </div>

  <cr-button id="saveManualProxy"
      on-click="onSaveProxyTap_" class="action-button"
      disabled="[[!isSaveManualProxyEnabled_(managedProperties,
          proxyIsUserModified_, proxy_.*)]]">
    [[i18n('save')]]
  </cr-button>
</div>
<!--_html_template_end_-->`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Polymer({_template:getTemplate$c(),is:"network-proxy",behaviors:[CrPolicyNetworkBehaviorMojo,I18nBehavior],properties:{editable:{type:Boolean,value:false},managedProperties:{type:Object,observer:"managedPropertiesChanged_"},useSharedProxies:{type:Boolean,value:false,observer:"updateProxy_"},proxy_:{type:Object,value(){return this.createDefaultProxySettings_()}},wpad_:{type:String,value:""},useSameProxy_:{type:Boolean,value:false,observer:"useSameProxyChanged_"},proxyTypes_:{type:Array,value:["Direct","PAC","WPAD","Manual"],readOnly:true},proxyExclusionInputValue_:{type:String,value:""}},savedManual_:undefined,savedExcludeDomains_:undefined,proxyIsUserModified_:false,attached(){this.reset()},reset(){this.proxyIsUserModified_=false;this.updateProxy_()},managedPropertiesChanged_(newValue,oldValue){if((newValue&&newValue.guid)!==(oldValue&&oldValue.guid)){this.savedManual_=undefined;this.savedExcludeDomains_=undefined}if(this.proxyIsUserModified_||this.isInputEditInProgress_()){return}this.updateProxy_()},isInputEditInProgress_:function(){if(!this.editable){return false}const activeElement=this.shadowRoot.activeElement;if(!activeElement){return false}let property=null;switch(activeElement.id){case"sameProxyInput":case"httpProxyInput":property="manual.httpProxy.host";break;case"secureHttpProxyInput":property="manual.secureHttpProxy.host";break;case"socksProxyInput":property="manual.socks.host";break;case"pacInput":property="pac";break}if(!property){return false}return this.isEditable_(property)},proxyMatches_(a,b){return!!a&&!!b&&a.host.activeValue===b.host.activeValue&&a.port.activeValue===b.port.activeValue},createDefaultProxyLocation_(port){return{host:OncMojo.createManagedString(""),port:OncMojo.createManagedInt(port)}},validateProxy_(inputProxy){const proxy=Object.assign({},inputProxy);const type=proxy.type.activeValue;if(type==="PAC"){if(!proxy.pac){proxy.pac=OncMojo.createManagedString("")}}else if(type==="Manual"){proxy.manual=proxy.manual||this.savedManual_||{};if(!proxy.manual.httpProxy){proxy.manual.httpProxy=this.createDefaultProxyLocation_(80)}if(!proxy.manual.secureHttpProxy){proxy.manual.secureHttpProxy=this.createDefaultProxyLocation_(80)}if(!proxy.manual.socks){proxy.manual.socks=this.createDefaultProxyLocation_(1080)}proxy.excludeDomains=proxy.excludeDomains||this.savedExcludeDomains_||{activeValue:[],policySource:PolicySource.kNone}}return proxy},updateProxy_(){if(!this.managedProperties){return}let proxySettings=this.managedProperties.proxySettings;if(this.isShared_()&&proxySettings&&!this.isControlled(proxySettings.type)&&!this.useSharedProxies){proxySettings=null}const proxy=proxySettings?this.validateProxy_(proxySettings):this.createDefaultProxySettings_();if(proxy.type.activeValue==="WPAD"){const ipv4=this.managedProperties?OncMojo.getIPConfigForType(this.managedProperties,IPConfigType.kIPv4):null;this.wpad_=ipv4&&ipv4.webProxyAutoDiscoveryUrl||this.i18n("networkProxyWpadNone")}this.async((()=>this.setProxy_(proxy)))},setProxy_(proxy){this.proxy_=proxy;if(proxy.manual){const manual=proxy.manual;const httpProxy=manual.httpProxy;if(this.proxyMatches_(httpProxy,manual.secureHttpProxy)&&this.proxyMatches_(httpProxy,manual.socks)){this.useSameProxy_=true}else if(!manual.secureHttpProxy.host.activeValue&&!manual.socks.host.activeValue){this.useSameProxy_=true}}this.proxyIsUserModified_=false},useSameProxyChanged_(){this.proxyIsUserModified_=true},createDefaultProxySettings_(){return{type:OncMojo.createManagedString("Direct")}},getProxyLocation_(location){if(!location){return undefined}return{host:location.host.activeValue,port:location.port.activeValue}},sendProxyChange_(){const proxyType=OncMojo.getActiveString(this.proxy_.type);if(!proxyType||proxyType==="PAC"&&!this.proxy_.pac){return}const proxy={type:proxyType,excludeDomains:OncMojo.getActiveValue(this.proxy_.excludeDomains)};if(proxyType==="Manual"){let manual={};if(this.proxy_.manual){this.savedManual_=Object.assign({},this.proxy_.manual);manual={httpProxy:this.getProxyLocation_(this.proxy_.manual.httpProxy),secureHttpProxy:this.getProxyLocation_(this.proxy_.manual.secureHttpProxy),socks:this.getProxyLocation_(this.proxy_.manual.socks)}}if(this.proxy_.excludeDomains){this.savedExcludeDomains_=Object.assign({},this.proxy_.excludeDomains)}const defaultProxy=manual.httpProxy||{host:"",port:80};if(this.useSameProxy_){manual.secureHttpProxy=Object.assign({},defaultProxy);manual.socks=Object.assign({},defaultProxy)}else{if(manual.httpProxy&&!manual.httpProxy.host){delete manual.httpProxy}if(manual.secureHttpProxy&&!manual.secureHttpProxy.host){delete manual.secureHttpProxy}if(manual.socks&&!manual.socks.host){delete manual.socks}}proxy.manual=manual}else if(proxyType==="PAC"){proxy.pac=OncMojo.getActiveString(this.proxy_.pac)}this.fire("proxy-change",proxy);this.proxyIsUserModified_=false},onTypeChange_(event){if(!this.proxy_||!this.proxy_.type){return}const target=event.target;const type=target.value;this.proxy_.type.activeValue=type;this.set("proxy_",this.validateProxy_(this.proxy_));let proxyTypeChangeIsReady;let elementToFocus;switch(type){case"Direct":case"WPAD":proxyTypeChangeIsReady=true;break;case"PAC":elementToFocus=this.$$("#pacInput");proxyTypeChangeIsReady=!!OncMojo.getActiveString(this.proxy_.pac);break;case"Manual":proxyTypeChangeIsReady=false;elementToFocus=this.$$("#manualProxy network-proxy-input");break}if(proxyTypeChangeIsReady){this.sendProxyChange_()}else{this.proxyIsUserModified_=true}if(elementToFocus){this.async((()=>{elementToFocus.focus()}))}},onPACChange_(){this.sendProxyChange_()},onProxyInputChange_(){this.proxyIsUserModified_=true},onAddProxyExclusionTap_(){assert$1(this.proxyExclusionInputValue_);this.push("proxy_.excludeDomains.activeValue",this.proxyExclusionInputValue_);this.proxyExclusionInputValue_="";this.proxyIsUserModified_=true},onAddProxyExclusionKeypress_(event){if(event.key!=="Enter"){return}event.stopPropagation();this.onAddProxyExclusionTap_()},shouldProxyExclusionButtonBeDisabled_(proxyExclusionInputValue){return!proxyExclusionInputValue},onProxyExclusionsChange_(event){this.proxyIsUserModified_=true},onSaveProxyTap_(){this.sendProxyChange_()},getProxyTypeDesc_(proxyType){if(proxyType==="Manual"){return this.i18n("networkProxyTypeManual")}if(proxyType==="PAC"){return this.i18n("networkProxyTypePac")}if(proxyType==="WPAD"){return this.i18n("networkProxyTypeWpad")}return this.i18n("networkProxyTypeDirect")},isEditable_(propertyName){if(!this.editable||this.isShared_()&&!this.useSharedProxies){return false}const property=this.get("proxySettings."+propertyName,this.managedProperties);if(!property){return true}return this.isPropertyEditable_(property)},isPropertyEditable_(property){return!!property&&!this.isNetworkPolicyEnforced(property)&&!this.isExtensionControlled(property)},isShared_(){if(!this.managedProperties){return false}const source=this.managedProperties.source;return source===OncSource.kDevice||source===OncSource.kDevicePolicy},isSaveManualProxyEnabled_(){if(!this.proxyIsUserModified_){return false}const manual=this.proxy_.manual;const httpHost=this.get("httpProxy.host.activeValue",manual);if(this.useSameProxy_){return!!httpHost}return!!httpHost||!!this.get("secureHttpProxy.host.activeValue",manual)||!!this.get("socks.host.activeValue",manual)},matches_(property,value){return property===value}});
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const NetworkConfigElementBehavior={properties:{disabled:{type:Boolean,value:false,reflectToAttribute:true},property:{type:Object,value:null}},getDisabled_(disabled,property){return disabled||!!property&&this.isNetworkPolicyEnforced(property)}};function getTemplate$b(){return html`<!--_html_template_start_--><style include="network-shared">
  :host {
    display: block;
  }

  :host([allow-error-message]) #input {
    --cr-input-error-display: block;
    margin-bottom: 0;
  }

  #container {
    align-items: center;
    display: flex;
    flex-direction: row;
  }

  cr-input {
    flex: 1;
  }

  paper-tooltip {
    --paper-tooltip-min-width: 0px;
  }

  cr-policy-network-indicator-mojo {
    --cr-tooltip-icon-margin-start: var(--cr-controlled-by-spacing);
  }
</style>

<div id="container">
  <cr-input id="input" label="[[label]]" value="{{value}}"
      disabled="[[getDisabled_(disabled, property)]]"
      type="[[getInputType_(showPassword)]]"
      on-mousedown="onMousedown_"
      on-touchstart="onMousedown_"
      on-keydown="onKeydown_"
      invalid="[[invalid]]"
      error-message="[[errorMessage]]">
    <template is="dom-if" if="[[!showPolicyIndicator_]]" restamp>
      <div slot="suffix">
        <cr-icon-button id="icon"
            class$="[[getIconClass_(showPassword)]]"
            aria-describedby="passwordVisibilityTooltip"
            on-click="onShowPasswordTap_"
            on-touchend="onShowPasswordTap_">
        </cr-icon-button>
        <paper-tooltip id="passwordVisibilityTooltip"
            for="icon"
            position="[[tooltipPosition_]]"
            fit-to-visible-bounds role="tooltip">
          [[getShowPasswordTitle_(showPassword)]]
        </paper-tooltip>
      </div>
    </template>
  </cr-input>
  <template is="dom-if" if="[[showPolicyIndicator_]]" restamp>
    <cr-policy-network-indicator-mojo
        property="[[property]]" tooltip-position="left">
    </cr-policy-network-indicator>
  </template>
</div>
<!--_html_template_end_-->`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Polymer({_template:getTemplate$b(),is:"network-password-input",behaviors:[I18nBehavior,CrPolicyNetworkBehaviorMojo,NetworkConfigElementBehavior],properties:{label:{type:String,reflectToAttribute:true},value:{type:String,notify:true},showPassword:{type:Boolean,value:false},invalid:{type:Boolean,value:false},allowErrorMessage:{type:Boolean,value:false},errorMessage:{type:String,value:""},tooltipPosition_:{type:String,value:""},showPolicyIndicator_:{type:Boolean,value:false,computed:"getDisabled_(disabled, property)"}},attached(){this.tooltipPosition_=window.getComputedStyle(this).direction==="rtl"?"right":"left"},focus(){this.$$("cr-input").focus();this.$$("cr-input").select()},getInputType_(){return this.showPassword?"text":"password"},isShowingPlaceholder_(){return this.value===FAKE_CREDENTIAL},getIconClass_(){return this.showPassword?"icon-visibility-off":"icon-visibility"},getShowPasswordTitle_(){return this.showPassword?this.i18n("hidePassword"):this.i18n("showPassword")},onShowPasswordTap_(event){if(event.type==="touchend"&&event.cancelable){event.preventDefault()}if(this.isShowingPlaceholder_()){this.value="";this.focus()}this.showPassword=!this.showPassword;event.stopPropagation()},onKeydown_(event){if(event.target.id==="input"&&event.key==="Enter"){event.stopPropagation();this.fire("enter");return}if(!this.isShowingPlaceholder_()){return}if(event.key.indexOf("Arrow")<0&&event.key!=="Home"&&event.key!=="End"){return}if(event.cancelable){event.preventDefault()}},onMousedown_(event){if(!this.isShowingPlaceholder_()){return}if(document.activeElement!==event.target){this.focus()}if(event.cancelable){event.preventDefault()}}});
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var CrContainerShadowSide;(function(CrContainerShadowSide){CrContainerShadowSide["TOP"]="top";CrContainerShadowSide["BOTTOM"]="bottom"})(CrContainerShadowSide||(CrContainerShadowSide={}));const CrContainerShadowMixin=dedupingMixin((superClass=>{class CrContainerShadowMixin extends superClass{constructor(){super(...arguments);this.intersectionObserver_=null;this.dropShadows_=new Map;this.intersectionProbes_=new Map;this.sides_=null}connectedCallback(){super.connectedCallback();const hasBottomShadow=this.getContainer_().hasAttribute("show-bottom-shadow");this.sides_=hasBottomShadow?[CrContainerShadowSide.TOP,CrContainerShadowSide.BOTTOM]:[CrContainerShadowSide.TOP];this.sides_.forEach((side=>{const shadow=document.createElement("div");shadow.id=`cr-container-shadow-${side}`;shadow.classList.add("cr-container-shadow");this.dropShadows_.set(side,shadow);this.intersectionProbes_.set(side,document.createElement("div"))}));this.getContainer_().parentNode.insertBefore(this.dropShadows_.get(CrContainerShadowSide.TOP),this.getContainer_());this.getContainer_().prepend(this.intersectionProbes_.get(CrContainerShadowSide.TOP));if(hasBottomShadow){this.getContainer_().parentNode.insertBefore(this.dropShadows_.get(CrContainerShadowSide.BOTTOM),this.getContainer_().nextSibling);this.getContainer_().append(this.intersectionProbes_.get(CrContainerShadowSide.BOTTOM))}this.enableShadowBehavior(true)}disconnectedCallback(){super.disconnectedCallback();this.enableShadowBehavior(false)}getContainer_(){return this.shadowRoot.querySelector("#container")}getIntersectionObserver_(){const callback=entries=>{for(const entry of entries){const target=entry.target;this.sides_.forEach((side=>{if(target===this.intersectionProbes_.get(side)){this.dropShadows_.get(side).classList.toggle("has-shadow",entry.intersectionRatio===0)}}))}};return new IntersectionObserver(callback,{root:this.getContainer_(),threshold:0})}enableShadowBehavior(enable){if(enable===!!this.intersectionObserver_){return}if(!enable){this.intersectionObserver_.disconnect();this.intersectionObserver_=null;return}this.intersectionObserver_=this.getIntersectionObserver_();window.setTimeout((()=>{if(this.intersectionObserver_){this.intersectionProbes_.forEach((probe=>{this.intersectionObserver_.observe(probe)}))}}))}showDropShadows(){assert(!this.intersectionObserver_);assert(this.sides_);for(const side of this.sides_){this.dropShadows_.get(side).classList.toggle("has-shadow",true)}}}return CrContainerShadowMixin}));function getTemplate$a(){return html`<!--_html_template_start_-->    <style include="cr-hidden-style cr-icons">dialog{--scroll-border-color:var(--paper-grey-300);--scroll-border:1px solid var(--scroll-border-color);background-color:var(--cr-dialog-background-color,#fff);border:0;border-radius:var(--cr-dialog-border-radius,8px);bottom:50%;box-shadow:0 0 16px rgba(0,0,0,.12),0 16px 16px rgba(0,0,0,.24);color:inherit;max-height:initial;max-width:initial;overflow-y:hidden;padding:0;position:absolute;top:50%;width:var(--cr-dialog-width,512px)}@media (prefers-color-scheme:dark){dialog{--scroll-border-color:var(--google-grey-700);background-color:var(--cr-dialog-background-color,var(--google-grey-900));background-image:linear-gradient(rgba(255,255,255,.04),rgba(255,255,255,.04))}}@media (forced-colors:active){dialog{border:var(--cr-border-hcm)}}dialog[open] #content-wrapper{display:flex;flex-direction:column;max-height:100vh;overflow:auto}.top-container,:host ::slotted([slot=button-container]),:host ::slotted([slot=footer]){flex-shrink:0}dialog::backdrop{background-color:rgba(0,0,0,.6);bottom:0;left:0;position:fixed;right:0;top:0}:host ::slotted([slot=body]){color:var(--cr-secondary-text-color);padding:0 var(--cr-dialog-body-padding-horizontal,20px)}:host ::slotted([slot=title]){color:var(--cr-primary-text-color);flex:1;font-family:var(--cr-dialog-font-family,inherit);font-size:var(--cr-dialog-title-font-size,calc(15 / 13 * 100%));line-height:1;padding-bottom:var(--cr-dialog-title-slot-padding-bottom,16px);padding-inline-end:var(--cr-dialog-title-slot-padding-end,20px);padding-inline-start:var(--cr-dialog-title-slot-padding-start,20px);padding-top:var(--cr-dialog-title-slot-padding-top,20px)}:host ::slotted([slot=button-container]){display:flex;justify-content:flex-end;padding-bottom:var(--cr-dialog-button-container-padding-bottom,16px);padding-inline-end:var(--cr-dialog-button-container-padding-horizontal,16px);padding-inline-start:var(--cr-dialog-button-container-padding-horizontal,16px);padding-top:var(--cr-dialog-button-container-padding-top,16px)}:host ::slotted([slot=footer]){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;border-top:1px solid #dbdbdb;margin:0;padding:16px 20px}:host([hide-backdrop]) dialog::backdrop{opacity:0}@media (prefers-color-scheme:dark){:host ::slotted([slot=footer]){border-top-color:var(--cr-separator-color)}}.body-container{box-sizing:border-box;display:flex;flex-direction:column;min-height:1.375rem;overflow:auto}:host{--transparent-border:1px solid transparent}#cr-container-shadow-top{border-bottom:var(--cr-dialog-body-border-top,var(--transparent-border))}#cr-container-shadow-bottom{border-bottom:var(--cr-dialog-body-border-bottom,var(--transparent-border))}#cr-container-shadow-bottom.has-shadow,#cr-container-shadow-top.has-shadow{border-bottom:var(--scroll-border)}.top-container{align-items:flex-start;display:flex;min-height:var(--cr-dialog-top-container-min-height,31px)}.title-container{display:flex;flex:1;font-size:inherit;font-weight:inherit;margin:0;outline:0}#close{align-self:flex-start;margin-inline-end:4px;margin-top:4px}</style>
    <dialog id="dialog" on-close="onNativeDialogClose_" on-cancel="onNativeDialogCancel_" part="dialog" aria-labelledby="title" aria-describedby="container">
    
      <div id="content-wrapper" part="wrapper">
        <div class="top-container">
          <h2 id="title" class="title-container" tabindex="-1">
            <slot name="title"></slot>
          </h2>
          <cr-icon-button id="close" class="icon-clear" hidden$="[[!showCloseButton]]" aria-label$="[[closeText]]" on-click="cancel" on-keypress="onCloseKeypress_">
          </cr-icon-button>
        </div>
        <slot name="header"></slot>
        <div class="body-container" id="container" show-bottom-shadow part="body-container">
          <slot name="body"></slot>
        </div>
        <slot name="button-container"></slot>
        <slot name="footer"></slot>
      </div>
    </dialog>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrDialogElementBase=CrContainerShadowMixin(PolymerElement);class CrDialogElement extends CrDialogElementBase{constructor(){super(...arguments);this.intersectionObserver_=null;this.mutationObserver_=null;this.boundKeydown_=null}static get is(){return"cr-dialog"}static get template(){return getTemplate$a()}static get properties(){return{open:{type:Boolean,value:false,reflectToAttribute:true},closeText:String,ignorePopstate:{type:Boolean,value:false},ignoreEnterKey:{type:Boolean,value:false},consumeKeydownEvent:{type:Boolean,value:false},noCancel:{type:Boolean,value:false},showCloseButton:{type:Boolean,value:false},showOnAttach:{type:Boolean,value:false}}}ready(){super.ready();window.addEventListener("popstate",(()=>{if(!this.ignorePopstate&&this.$.dialog.open){this.cancel()}}));if(!this.ignoreEnterKey){this.addEventListener("keypress",this.onKeypress_.bind(this))}this.addEventListener("pointerdown",(e=>this.onPointerdown_(e)))}connectedCallback(){super.connectedCallback();const mutationObserverCallback=()=>{if(this.$.dialog.open){this.enableShadowBehavior(true);this.addKeydownListener_()}else{this.enableShadowBehavior(false);this.removeKeydownListener_()}};this.mutationObserver_=new MutationObserver(mutationObserverCallback);this.mutationObserver_.observe(this.$.dialog,{attributes:true,attributeFilter:["open"]});mutationObserverCallback();if(this.showOnAttach){this.showModal()}}disconnectedCallback(){super.disconnectedCallback();this.removeKeydownListener_();if(this.mutationObserver_){this.mutationObserver_.disconnect();this.mutationObserver_=null}}addKeydownListener_(){if(!this.consumeKeydownEvent){return}this.boundKeydown_=this.boundKeydown_||this.onKeydown_.bind(this);this.addEventListener("keydown",this.boundKeydown_);document.body.addEventListener("keydown",this.boundKeydown_)}removeKeydownListener_(){if(!this.boundKeydown_){return}this.removeEventListener("keydown",this.boundKeydown_);document.body.removeEventListener("keydown",this.boundKeydown_);this.boundKeydown_=null}showModal(){this.$.dialog.showModal();assert(this.$.dialog.open);this.open=true;this.dispatchEvent(new CustomEvent("cr-dialog-open",{bubbles:true,composed:true}))}cancel(){this.dispatchEvent(new CustomEvent("cancel",{bubbles:true,composed:true}));this.$.dialog.close();assert(!this.$.dialog.open);this.open=false}close(){this.$.dialog.close("success");assert(!this.$.dialog.open);this.open=false}setTitleAriaLabel(title){this.$.dialog.removeAttribute("aria-labelledby");this.$.dialog.setAttribute("aria-label",title)}onCloseKeypress_(e){e.stopPropagation()}onNativeDialogClose_(e){if(e.target!==this.getNative()){return}this.dispatchEvent(new CustomEvent("close",{bubbles:true,composed:true}))}onNativeDialogCancel_(e){if(e.target!==this.getNative()){return}if(this.noCancel){e.preventDefault();return}this.open=false;this.dispatchEvent(new CustomEvent("cancel",{bubbles:true,composed:true}))}getNative(){return this.$.dialog}onKeypress_(e){if(e.key!=="Enter"){return}const accept=e.target===this||e.composedPath().some((el=>el.tagName==="CR-INPUT"&&el.type!=="search"));if(!accept){return}const actionButton=this.querySelector(".action-button:not([disabled]):not([hidden])");if(actionButton){actionButton.click();e.preventDefault()}}onKeydown_(e){assert(this.consumeKeydownEvent);if(!this.getNative().open){return}if(this.ignoreEnterKey&&e.key==="Enter"){return}e.stopPropagation()}onPointerdown_(e){if(e.button!==0||e.composedPath()[0].tagName!=="DIALOG"){return}this.$.dialog.animate([{transform:"scale(1)",offset:0},{transform:"scale(1.02)",offset:.4},{transform:"scale(1.02)",offset:.6},{transform:"scale(1)",offset:1}],{duration:180,easing:"ease-in-out",iterations:1});e.preventDefault()}focus(){const titleContainer=this.shadowRoot.querySelector(".title-container");assert(titleContainer);titleContainer.focus()}}customElements.define(CrDialogElement.is,CrDialogElement);function getTemplate$9(){return html`<!--_html_template_start_--><style>
  #enter-pin-description {
    margin-bottom: 16px;
  }

  .pinEntrySubtext {
    font-size: var(--cr-form-field-label-font-size);
    font-weight: 400;
    margin-top: -10px;
  }

  :host([has-error-text_]) .pinEntrySubtext {
    color: var(--cros-text-color-alert);
  }

  #changePinOld {
    margin-top: 24px;
  }

  #unlockPin {
    margin-top: 24px;
  }

  #puk-warning-container {
    display: flex;
    margin-bottom: 24px;
    margin-top: 20px;
  }

  #puk-warning-icon {
    --iron-icon-fill-color: var(--cros-icon-color-alert);
    --iron-icon-height: 24px;
    --iron-icon-width: 24px;
    margin-inline-end: 4px;
  }

  :host([has-error-text_]) #puk-warning-container {
    color: var(--cros-text-color-alert);
  }
</style>
<!-- Enter PIN dialog -->
<cr-dialog id="enterPinDialog"
    on-cancel="onCancel_"
    close-text="[[i18n('close')]]">
  <div slot="title">[[i18n('networkSimEnterPinTitle')]]</div>
  <div slot="body">
    <div id="enter-pin-description" aria-hidden="true">
      [[getEnterPinDescription_(isSimPinLockRestricted_)]]
    </div>
    <network-password-input id="enterPin"
        value="{{pin_}}"
        on-enter="sendEnterPin_"
        disabled="[[inProgress_]]"
        invalid="[[hasErrorText_]]"
        aria-labeledby="pinEntrySubtext">
    </network-password-input>
    <div class="pinEntrySubtext" aria-live="assertive">
      [[getPinEntrySubtext_(error_, deviceState)]]
    </div>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" on-click="onCancel_">
      [[i18n('cancel')]]
    </cr-button>
    <cr-button class="action-button"
        aria-describedby="enter-pin-description"
        on-click="sendEnterPin_"
        disabled="[[!enterPinEnabled_]]">
      [[i18n('networkSimEnter')]]
    </cr-button>
  </div>
</cr-dialog>

<!-- Change PIN dialog -->
<cr-dialog id="changePinDialog"
    on-cancel="onCancel_"
    close-text="[[i18n('close')]]">
  <div slot="title">[[i18n('networkSimChangePinTitle')]]</div>
  <div slot="body">
    <network-password-input id="changePinOld"
        value="{{pin_}}"
        label="[[i18n('networkSimEnterOldPin')]]"
        disabled="[[inProgress_]]"
        invalid="[[isOldPinInvalid_(error_, deviceState)]]"
        error-message="[[getOldPinErrorMessage_(error_, deviceState)]]"
        allow-error-message>
    </network-password-input>
    <network-password-input id="changePinNew1"
        value="{{pin_new1_}}"
        label="[[i18n('networkSimEnterNewPin')]]"
        disabled="[[inProgress_]]"
        allow-error-message>
    </network-password-input>
    <network-password-input id="changePinNew2"
        value="{{pin_new2_}}"
        label="[[i18n('networkSimReEnterNewPin')]]"
        on-enter="sendChangePin_"
        disabled="[[inProgress_]]"
        invalid="[[isSecondNewPinInvalid_(error_, deviceState)]]"
        error-message="[[getSecondNewPinErrorMessage_(error_, deviceState)]]"
        allow-error-message>
    </network-password-input>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" on-click="onCancel_">
      [[i18n('cancel')]]
    </cr-button>
    <cr-button class="action-button"
        on-click="sendChangePin_"
        disabled="[[!changePinEnabled_]]">
      [[i18n('networkSimChange')]]
    </cr-button>
  </div>
</cr-dialog>

<!-- Unlock PIN dialog -->
<cr-dialog id="unlockPinDialog"
    on-cancel="onCancel_"
    close-text="[[i18n('close')]]">
  <div slot="title" aria-live="polite">[[i18n('networkSimLockedTitle')]]</div>
  <div slot="body">
    <template is="dom-if" if="[[isSimPinLockRestricted_]]">
      <div id="adminSubtitle">
        [[i18n('networkSimLockPolicyAdminSubtitle')]]
      </div>
    </template>
    <network-password-input id="unlockPin"
        value="{{pin_}}"
        on-enter="sendUnlockPin_"
        disabled="[[inProgress_]]">
    </network-password-input>
    <div class="pinEntrySubtext" aria-live="polite">
      [[getPinEntrySubtext_(error_, deviceState)]]
    </div>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" on-click="onCancel_">
      [[i18n('cancel')]]
    </cr-button>
    <cr-button class="action-button"
        on-click="sendUnlockPin_"
        disabled="[[!enterPinEnabled_]]">
      [[i18n('networkSimUnlock')]]
    </cr-button>
  </div>
</cr-dialog>

<!-- Unlock PUK dialog -->
<cr-dialog id="unlockPukDialog"
    on-cancel="onCancel_"
    close-text="[[i18n('close')]]">
  <div slot="title" aria-live="polite">[[i18n('networkSimLockedTitle')]]</div>
  <div slot="body">
    <div id="puk-subtitle">
      [[getNetworkSimPukDialogString_(isSimPinLockRestricted_)]]
    </div>
    <div id="puk-warning-container">
      <template is="dom-if" if="[[hasErrorText_]]">
        <iron-icon id="puk-warning-icon" icon="cellular-setup:warning">
        </iron-icon>
      </template>
      <div aria-live="polite">
        [[getPukWarningMessage_(error_, deviceState,
            isSimPinLockRestricted_)]]
      </div>
    </div>
    <network-password-input id="unlockPuk"
        value="{{puk_}}"
        label="[[i18n('networkSimEnterPuk')]]"
        disabled="[[inProgress_]]"
        invalid="[[isPukInvalid_(error_, deviceState)]]"
        error-message="[[getPukErrorMessage_(error_, deviceState)]]"
        allow-error-message>
    </network-password-input>
    <!-- TODO(b/228093904): Use template dom-if instead of
      hidden for SIM PIN Lock Dialog refactor. -->
    <network-password-input id="unlockPin1"
        value="{{pin_new1_}}"
        label="[[i18n('networkSimEnterNewPin')]]"
        disabled="[[inProgress_]]"
        hidden="[[isSimPinLockRestricted_]]"
        allow-error-message>
    </network-password-input>
    <network-password-input id="unlockPin2"
        value="{{pin_new2_}}"
        label="[[i18n('networkSimReEnterNewPin')]]"
        on-enter="sendUnlockPuk_"
        disabled="[[inProgress_]]"
        invalid="[[isSecondNewPinInvalid_(error_, deviceState)]]"
        error-message="[[getSecondNewPinErrorMessage_(error_,
            deviceState)]]"
        hidden="[[isSimPinLockRestricted_]]"
        allow-error-message>
    </network-password-input>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" on-click="onCancel_">
      [[i18n('cancel')]]
    </cr-button>
    <cr-button class="action-button"
        on-click="sendUnlockPuk_"
        disabled="[[!enterPukEnabled_]]"
        aria-describedby="puk-subtitle">
      [[i18n('networkSimUnlock')]]
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ErrorType={NONE:"none",INCORRECT_PIN:"incorrect-pin",INCORRECT_PUK:"incorrect-puk",MISMATCHED_PIN:"mismatched-pin",INVALID_PIN:"invalid-pin",INVALID_PUK:"invalid-puk"};const DIGITS_ONLY_REGEX=/^[0-9]+$/;const PIN_MIN_LENGTH=4;const PUK_MIN_LENGTH=8;Polymer({_template:getTemplate$9(),is:"sim-lock-dialogs",behaviors:[I18nBehavior],properties:{deviceState:{type:Object,value:null,observer:"deviceStateChanged_"},globalPolicy:Object,isDialogOpen:{type:Boolean,value:false,notify:true},showChangePin:{type:Boolean,value:false},inProgress_:{type:Boolean,value:false,observer:"updateSubmitButtonEnabled_"},error_:{type:Object,value:ErrorType.NONE,observer:"updateSubmitButtonEnabled_"},hasErrorText_:{type:Boolean,computed:"computeHasErrorText_(error_, deviceState)",reflectToAttribute:true},pendingError_:{type:Object},enterPinEnabled_:Boolean,changePinEnabled_:Boolean,enterPukEnabled_:Boolean,pin_:{type:String,observer:"pinOrPukChange_"},pin_new1_:{type:String,observer:"pinOrPukChange_"},pin_new2_:{type:String,observer:"pinOrPukChange_"},puk_:{type:String,observer:"pinOrPukChange_"},isSimPinLockRestricted_:{type:Boolean,value:false,computed:"computeIsSimPinLockRestricted_(globalPolicy, globalPolicy.*)"},isCellularCarrierLockEnabled_:{type:Boolean,value(){return loadTimeData.valueExists("isCellularCarrierLockEnabled")&&loadTimeData.getBoolean("isCellularCarrierLockEnabled")}}},networkConfig_:null,created(){this.networkConfig_=MojoInterfaceProviderImpl.getInstance().getMojoServiceRemote()},attached(){if(!this.deviceState){return}this.updateDialogVisibility_()},deviceStateChanged_(newDeviceState,oldDeviceState){if(!oldDeviceState||!newDeviceState){return}if(this.pendingError_){this.error_=this.pendingError_;this.pendingError_=undefined}this.updateDialogVisibility_()},updateDialogVisibility_(){const simLockStatus=this.deviceState.simLockStatus;if(!simLockStatus){this.isDialogOpen=false;return}if(this.isCellularCarrierLockEnabled_&&simLockStatus.lockType==="network-pin"){this.isDialogOpen=false;return}if(!simLockStatus.lockEnabled){this.showEnterPinDialog_();this.isDialogOpen=true;return}if(simLockStatus.lockType==="sim-puk"){if(this.$.unlockPukDialog.open){return}this.closeDialogs_(true);this.showUnlockPukDialog_()}else if(simLockStatus.lockType==="sim-pin"){this.showUnlockPinDialog_()}else if(this.showChangePin){this.showChangePinDialog_()}else{this.showEnterPinDialog_()}this.isDialogOpen=true},showEnterPinDialog_(){if(this.$.enterPinDialog.open){return}this.$.enterPin.value="";this.$.enterPinDialog.showModal();requestAnimationFrame((()=>{this.focusDialogInput_()}))},showChangePinDialog_(){if(this.$.changePinDialog.open){return}this.$.changePinOld.value="";this.$.changePinNew1.value="";this.$.changePinNew2.value="";this.$.changePinDialog.showModal();requestAnimationFrame((()=>{this.focusDialogInput_()}))},showUnlockPukDialog_(){if(this.$.unlockPukDialog.open){return}this.error_=ErrorType.NONE;this.$.unlockPuk.value="";this.$.unlockPin1.value="";this.$.unlockPin2.value="";this.$.unlockPukDialog.showModal();requestAnimationFrame((()=>{this.$.unlockPuk.focus()}))},showUnlockPinDialog_(){if(this.$.unlockPinDialog.open){return}this.error_=ErrorType.NONE;this.$.unlockPin.value="";this.$.unlockPinDialog.showModal();requestAnimationFrame((()=>{this.$.unlockPin.focus()}))},computeIsSimPinLockRestricted_(){return!!this.globalPolicy&&!this.globalPolicy.allowCellularSimLock},pinOrPukChange_(){this.error_=ErrorType.NONE;this.updateSubmitButtonEnabled_()},sendEnterPin_(event){event.stopPropagation();if(!this.enterPinEnabled_){return}const pin=this.$.enterPin.value;if(!this.validatePin_(pin)){return}const isPinRequired=!!this.deviceState&&!!this.deviceState.simLockStatus&&!this.deviceState.simLockStatus.lockEnabled;const simState={currentPinOrPuk:pin,requirePin:isPinRequired};this.setCellularSimState_(simState)},sendChangePin_(event){event.stopPropagation();const newPin=this.$.changePinNew1.value;if(!this.validatePin_(newPin,this.$.changePinNew2.value)){return}const simState={currentPinOrPuk:this.$.changePinOld.value,newPin:newPin,requirePin:true};this.setCellularSimState_(simState)},sendUnlockPuk_(event){event.stopPropagation();const puk=this.$.unlockPuk.value;if(!this.validatePuk_(puk)){return}if(this.isSimPinLockRestricted_){this.unlockCellularSim_("",puk);return}const pin=this.$.unlockPin1.value;if(!this.validatePin_(pin,this.$.unlockPin2.value)){return}this.unlockCellularSim_(pin,puk)},sendUnlockPin_(event){event.stopPropagation();const pin=this.$.unlockPin.value;if(!this.validatePin_(pin)){return}this.unlockCellularSim_(pin)},setCellularSimState_(cellularSimState){this.setInProgress_();this.networkConfig_.setCellularSimState(cellularSimState).then((response=>{this.inProgress_=false;if(!response.success){this.pendingError_=ErrorType.INCORRECT_PIN;this.focusDialogInput_()}else{this.error_=ErrorType.NONE;this.closeDialogs_()}}));this.fire("user-action-setting-change")},closeDialogs_(skipIsDialogOpenUpdate){if(this.$.enterPinDialog.open){this.$.enterPinDialog.close()}if(this.$.changePinDialog.open){this.$.changePinDialog.close()}if(this.$.unlockPinDialog.open){this.$.unlockPinDialog.close()}if(this.$.unlockPukDialog.open){this.$.unlockPukDialog.close()}this.isDialogOpen=skipIsDialogOpenUpdate?skipIsDialogOpenUpdate:false},closeDialogsForTest(){this.closeDialogs_()},onCancel_(event){event.stopPropagation();this.closeDialogs_()},setInProgress_(){this.error_=ErrorType.NONE;this.pendingError_=ErrorType.NONE;this.inProgress_=true},updateSubmitButtonEnabled_(){const hasError=this.error_!==ErrorType.NONE;this.enterPinEnabled_=!this.inProgress_&&!!this.pin_&&!hasError;this.changePinEnabled_=!this.inProgress_&&!!this.pin_&&!!this.pin_new1_&&!!this.pin_new2_&&!hasError;this.enterPukEnabled_=!this.inProgress_&&!!this.puk_&&!hasError&&(this.isSimPinLockRestricted_||!!this.pin_new1_&&!!this.pin_new2_)},unlockCellularSim_(pin,opt_puk){this.setInProgress_();const cellularSimState={currentPinOrPuk:opt_puk||pin,requirePin:false};if(opt_puk){cellularSimState.newPin=pin}this.networkConfig_.setCellularSimState(cellularSimState).then((response=>{this.inProgress_=false;if(!response.success){this.pendingError_=opt_puk?ErrorType.INCORRECT_PUK:ErrorType.INCORRECT_PIN;this.focusDialogInput_()}else{this.error_=ErrorType.NONE;this.closeDialogs_()}}))},focusDialogInput_(){if(this.$.enterPinDialog.open){this.$.enterPin.focus()}else if(this.$.changePinDialog.open){if(this.isSecondNewPinInvalid_()){this.$.changePinNew2.focus()}else{this.$.changePinOld.focus()}}else if(this.$.unlockPinDialog.open){this.$.unlockPin.focus()}else if(this.$.unlockPukDialog.open){this.$.unlockPuk.focus()}},validatePin_(pin1,opt_pin2){if(!pin1.length){return false}if(pin1.length<PIN_MIN_LENGTH||!DIGITS_ONLY_REGEX.test(pin1)){this.error_=ErrorType.INVALID_PIN;this.focusDialogInput_();return false}if(opt_pin2!==undefined&&pin1!==opt_pin2){this.error_=ErrorType.MISMATCHED_PIN;this.focusDialogInput_();return false}return true},validatePuk_(puk){if(puk.length<PUK_MIN_LENGTH||!DIGITS_ONLY_REGEX.test(puk)){this.error_=ErrorType.INVALID_PUK;return false}return true},getEnterPinDescription_(){return this.isSimPinLockRestricted_?this.i18n("networkSimLockPolicyAdminSubtitle"):this.i18n("networkSimEnterPinDescription")},getErrorMsg_(){if(this.error_===ErrorType.NONE){return""}else if(this.error_===ErrorType.MISMATCHED_PIN){return this.i18n("networkSimErrorPinMismatch")}let errorStringId="";switch(this.error_){case ErrorType.INCORRECT_PIN:errorStringId="networkSimErrorIncorrectPin";break;case ErrorType.INCORRECT_PUK:errorStringId="networkSimErrorIncorrectPuk";break;case ErrorType.INVALID_PIN:errorStringId="networkSimErrorInvalidPin";break;case ErrorType.INVALID_PUK:errorStringId="networkSimErrorInvalidPuk";break;default:assertNotReached$1()}const retriesLeft=this.getNumRetriesLeft_();if(retriesLeft!==1&&(this.error_===ErrorType.INCORRECT_PIN||this.error_===ErrorType.INVALID_PIN)){errorStringId+="Plural"}return this.i18n(errorStringId,retriesLeft)},getNumRetriesLeft_(){if(!this.deviceState||!this.deviceState.simLockStatus){return 0}return this.deviceState.simLockStatus.retriesLeft},computeHasErrorText_(){return!!this.getErrorMsg_()},getPinEntrySubtext_(){const errorMessage=this.getErrorMsg_();if(errorMessage){return errorMessage}return this.i18n("networkSimEnterPinSubtext")},isOldPinInvalid_(){return this.error_===ErrorType.INCORRECT_PIN||this.error_===ErrorType.INVALID_PIN},getOldPinErrorMessage_(){if(this.isOldPinInvalid_()){return this.getErrorMsg_()}return""},isSecondNewPinInvalid_(){return this.error_===ErrorType.MISMATCHED_PIN},getSecondNewPinErrorMessage_(){if(this.isSecondNewPinInvalid_()){return this.getErrorMsg_()}return""},isPukInvalid_(){return this.error_===ErrorType.INCORRECT_PUK||this.error_===ErrorType.INVALID_PUK},getPukErrorMessage_(){if(this.isPukInvalid_()){return this.getErrorMsg_()}return""},getPukWarningMessage_(){return this.isSimPinLockRestricted_?this.getPukWarningSimPinRestrictedMessage_():this.getPukWarningSimPinUnrestrictedMessage_()},getNetworkSimPukDialogString_(){return this.isSimPinLockRestricted_?this.i18n("networkSimPukDialogManagedSubtitle"):this.i18n("networkSimPukDialogSubtitle")},getPukWarningSimPinUnrestrictedMessage_(){if(this.isPukInvalid_()){const retriesLeft=this.getNumRetriesLeft_();if(retriesLeft===1){return this.i18n("networkSimPukDialogWarningWithFailure",retriesLeft)}return this.i18n("networkSimPukDialogWarningWithFailures",retriesLeft)}return this.i18n("networkSimPukDialogWarningNoFailures")},getPukWarningSimPinRestrictedMessage_(){if(this.isPukInvalid_()){const retriesLeft=this.getNumRetriesLeft_();if(retriesLeft===1){return this.i18n("networkSimPukDialogManagedWarningWithFailure",retriesLeft)}return this.i18n("networkSimPukDialogManagedWarningWithFailures",retriesLeft)}return this.i18n("networkSimPukDialogManagedWarningNoFailures")}});
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ApnDetailDialogMode={CREATE:"create",EDIT:"edit",VIEW:"view"};function isActiveSim(networkState,deviceState){if(!networkState||networkState.type!==NetworkType.kCellular){return false}const iccid=networkState.typeState.cellular.iccid;if(!iccid||!deviceState||!deviceState.simInfos){return false}const isActiveSim=deviceState.simInfos.find((simInfo=>simInfo.iccid===iccid&&simInfo.isPrimary));return!!isActiveSim}function getApnDisplayName(i18nFunction,apn){const name=apn.name||apn.accessPointName;if(name){return name}return i18nFunction("apnNameModem")}function getTemplate$8(){return html`<!--_html_template_start_--><style include="network-shared iron-flex">
  :host {
    cursor: default
  }

  iron-icon {
    margin-inline-end: 10px;
  }

  cr-policy-indicator {
    margin-inline-end: var(--cr-button-edge-spacing);
  }

  cr-toggle {
    margin-inline-start: var(--cr-button-edge-spacing);
  }

  .separator {
    border-inline-start: var(--cr-separator-line);
    flex-shrink: 0;
    height: calc(var(--cr-section-min-height) - 9px);
    margin-inline-end: var(--cr-section-padding);
    margin-inline-start: var(--cr-section-padding);
  }

  .pin-required-subtext {
    color: var(--cros-text-color-secondary);
  }
</style>

<!-- SIM locked -->
<template is="dom-if" if="[[eq_(State.SIM_LOCKED, state_)]]" restamp>
  <template is="dom-if" if="[[!isSimCarrierLocked_(isActiveSim_,
      deviceState)]]" restamp>
    <div id="simLocked" class="property-box two-line">
      <cr-button id="unlockPinButton"
          on-click="onUnlockPinTap_"
          disabled="[[disabled]]">
        [[i18n('networkSimUnlock')]]
      </cr-button>
    </div>
  </template>
</template>

<!-- SIM unlocked -->
<template is="dom-if" if="[[eq_(State.SIM_UNLOCKED, state_)]]" restamp>
  <div class="property-box two-line">
    <div class="flex layout vertical"  aria-hidden="true">
      <div id="pinRequiredLabel">
        [[i18n('networkSimLockEnable')]]
      </div>
      <div id="pinRequiredSublabel" class="pin-required-subtext">
        [[i18n('networkSimLockEnableSublabel')]]
      </div>
    </div>
    <cr-button id="changePinButton" on-click="onChangePinTap_"
        hidden$="[[!showChangePinButton_(deviceState, isActiveSim_,
            isSimPinLockRestricted_)]]"
        disabled="[[disabled]]">
      [[i18n('networkSimChangePin')]]
    </cr-button>
    <template is="dom-if" if="[[!isActiveSim_]]" restamp>
      <iron-icon id="help-icon" tabindex="0" icon="cr:help-outline"
          aria-labelledby="pinRequiredLabel pinRequiredSublabel inActiveSimLockTooltip">
      </iron-icon>
      <paper-tooltip id="inActiveSimLockTooltip" for="help-icon" position="bottom"
          aria-hidden="true" fit-to-visible-bounds>
          [[i18n('networkSimLockedTooltip')]]
      </paper-tooltip>
      <div class="separator"></div>
    </template>
    <template is="dom-if" if="[[shouldShowPolicyIndicator_(isActiveSim_,
        isSimPinLockRestricted_)]]" restamp>
      <cr-policy-indicator id="simLockPolicyIcon" indicator-type="devicePolicy">
      </cr-policy-indicator>
    </template>
    <cr-toggle id="simLockButton"
        disabled="[[isSimLockButtonDisabled_(disabled, isActiveSim_,
            isSimPinLockRestricted_, lockEnabled_)]]"
        on-change="onSimLockEnabledChange_" checked="{{lockEnabled_}}"
        aria-labelledby="pinRequiredLabel pinRequiredSublabel">
    </cr-toggle>
  </div>
</template>

<template is="dom-if" if="[[isDialogOpen_]]" restamp>
  <sim-lock-dialogs
      global-policy="[[globalPolicy]]"
      show-change-pin="[[showChangePin_]]"
      is-dialog-open="{{isDialogOpen_}}"
      device-state="[[deviceState]]">
  </sim-lock-dialogs>
</template>
<!--_html_template_end_-->`}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const TOGGLE_DEBOUNCE_MS=500;const State={SIM_LOCKED:0,SIM_UNLOCKED:1};Polymer({_template:getTemplate$8(),is:"network-siminfo",behaviors:[I18nBehavior],properties:{deviceState:{type:Object,value:null,observer:"deviceStateChanged_"},networkState:{type:Object,value:null},globalPolicy:Object,disabled:{type:Boolean,value:false},State:{type:Object,value:State},lockEnabled_:{type:Boolean,value:false},isDialogOpen_:{type:Boolean,value:false,observer:"onDialogOpenChanged_"},showChangePin_:{type:Boolean,value:false},isActiveSim_:{type:Boolean,value:false,computed:"computeIsActiveSim_(networkState, deviceState)"},state_:{type:Number,value:State.SIM_UNLOCKED,computed:"computeState_(networkState, deviceState, deviceState.*,"+"isActiveSim_)"},isSimPinLockRestricted_:{type:Boolean,value:false,computed:"computeIsSimPinLockRestricted_(globalPolicy,"+"globalPolicy.*, lockEnabled_)"},isCellularCarrierLockEnabled_:{type:Boolean,value(){return loadTimeData.valueExists("isCellularCarrierLockEnabled")&&loadTimeData.getBoolean("isCellularCarrierLockEnabled")}}},setLockEnabled_:undefined,getSimLockToggle(){return this.$$("#simLockButton")},getUnlockButton(){return this.$$("#unlockPinButton")},onDialogOpenChanged_(){if(this.isDialogOpen_){return}this.delayUpdateLockEnabled_();this.updateFocus_()},updateFocus_(){const state=this.computeState_();switch(state){case State.SIM_LOCKED:if(this.$$("#unlockPinButton")){this.$$("#unlockPinButton").focus()}break;case State.SIM_UNLOCKED:if(this.$$("#simLockButton")){this.$$("#simLockButton").focus()}break}},deviceStateChanged_(){if(!this.deviceState){return}const simLockStatus=this.deviceState.simLockStatus;if(!simLockStatus){return}const lockEnabled=this.isActiveSim_&&simLockStatus.lockEnabled;if(lockEnabled!==this.lockEnabled_){this.setLockEnabled_=lockEnabled;this.updateLockEnabled_()}else{this.setLockEnabled_=undefined}},updateLockEnabled_(){if(this.setLockEnabled_===undefined||this.isDialogOpen_){return}this.lockEnabled_=this.setLockEnabled_;this.setLockEnabled_=undefined},delayUpdateLockEnabled_(){setTimeout((()=>{this.updateLockEnabled_()}),TOGGLE_DEBOUNCE_MS)},onSimLockEnabledChange_(event){if(!this.deviceState){return}this.lockEnabled_=!this.lockEnabled_;this.showSimLockDialog_(false)},onChangePinTap_(event){event.stopPropagation();if(!this.deviceState){return}this.showSimLockDialog_(true)},onUnlockPinTap_(event){event.stopPropagation();this.showSimLockDialog_(true)},showSimLockDialog_(showChangePin){this.showChangePin_=showChangePin;this.isDialogOpen_=true},computeIsActiveSim_(){return isActiveSim(this.networkState,this.deviceState)},showChangePinButton_(){if(this.isSimPinLockRestricted_){return false}if(!this.deviceState||!this.deviceState.simLockStatus){return false}return this.deviceState.simLockStatus.lockEnabled&&this.isActiveSim_},isSimLockButtonDisabled_(){if(this.isSimPinLockRestricted_&&!this.lockEnabled_){return true}return this.disabled||!this.isActiveSim_},computeState_(){const simLockStatus=this.deviceState&&this.deviceState.simLockStatus;if(this.isActiveSim_&&simLockStatus&&!!simLockStatus.lockType){return State.SIM_LOCKED}return State.SIM_UNLOCKED},isSimCarrierLocked_(){if(!this.isCellularCarrierLockEnabled_){return false}const simLockStatus=this.deviceState&&this.deviceState.simLockStatus;if(this.isActiveSim_&&simLockStatus&&simLockStatus.lockType==="network-pin"){return true}return false},shouldShowPolicyIndicator_(){return this.isSimPinLockRestricted_&&this.isActiveSim_},computeIsSimPinLockRestricted_(){return!!this.globalPolicy&&!this.globalPolicy.allowCellularSimLock},eq_(state1,state2){return state1===state2}});const styleMod$1=document.createElement("dom-module");styleMod$1.appendChild(html`
  <template>
    <style>
:host{align-items:center;align-self:stretch;display:flex;margin:0;outline:0}:host(:not([effectively-disabled_])){cursor:pointer}:host(:not([no-hover],[effectively-disabled_]):hover){background-color:var(--cr-hover-background-color)}:host(:not([no-hover],[effectively-disabled_]):active){background-color:var(--cr-active-background-color)}:host(:not([no-hover],[effectively-disabled_])) cr-icon-button{--cr-icon-button-hover-background-color:transparent;--cr-icon-button-active-background-color:transparent}
    </style>
  </template>
`.content);styleMod$1.register("cr-actionable-row-style");
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const isMac=/Mac/.test(navigator.platform);const isWindows=/Win/.test(navigator.platform);const isIOS=/CriOS/.test(navigator.userAgent);
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let hideInk=false;assert(!isIOS,"pointerdown doesn't work on iOS");document.addEventListener("pointerdown",(function(){hideInk=true}),true);document.addEventListener("keydown",(function(){hideInk=false}),true);function focusWithoutInk(toFocus){if(!("noink"in toFocus)||!hideInk){toFocus.focus();return}const toFocusWithNoInk=toFocus;assert(document===toFocusWithNoInk.ownerDocument);const{noink:noink}=toFocusWithNoInk;toFocusWithNoInk.noink=true;toFocusWithNoInk.focus();toFocusWithNoInk.noink=noink}function getTemplate$7(){return html`<!--_html_template_start_-->    <style include="cr-actionable-row-style">:host([disabled]){opacity:.65;pointer-events:none}:host([disabled]) cr-icon-button{display:var(--cr-expand-button-disabled-display,initial)}#label{flex:1;padding:var(--cr-section-vertical-padding) 0}cr-icon-button{--cr-icon-button-icon-size:var(--cr-expand-button-icon-size, 20px);--cr-icon-button-size:var(--cr-expand-button-size, 36px)}</style>

    <div id="label" aria-hidden="true"><slot></slot></div>
    <cr-icon-button id="icon" aria-labelledby="label" disabled="[[disabled]]" tabindex="[[tabIndex]]" part="icon"></cr-icon-button>
<!--_html_template_end_-->`}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrExpandButtonElement extends PolymerElement{static get is(){return"cr-expand-button"}static get template(){return getTemplate$7()}static get properties(){return{expanded:{type:Boolean,value:false,notify:true,observer:"onExpandedChange_"},disabled:{type:Boolean,value:false,reflectToAttribute:true},ariaLabel:{type:String,observer:"onAriaLabelChange_"},tabIndex:{type:Number,value:0},expandIcon:{type:String,value:"cr:expand-more",observer:"onIconChange_"},collapseIcon:{type:String,value:"cr:expand-less",observer:"onIconChange_"},expandTitle:String,collapseTitle:String,tooltipText_:{type:String,computed:"computeTooltipText_(expandTitle, collapseTitle, expanded)",observer:"onTooltipTextChange_"}}}static get observers(){return["updateAriaExpanded_(disabled, expanded)"]}ready(){super.ready();this.addEventListener("click",this.toggleExpand_)}computeTooltipText_(){return this.expanded?this.collapseTitle:this.expandTitle}onTooltipTextChange_(){this.title=this.tooltipText_}focus(){this.$.icon.focus()}onAriaLabelChange_(){if(this.ariaLabel){this.$.icon.removeAttribute("aria-labelledby");this.$.icon.setAttribute("aria-label",this.ariaLabel)}else{this.$.icon.removeAttribute("aria-label");this.$.icon.setAttribute("aria-labelledby","label")}}onExpandedChange_(){this.updateIcon_()}onIconChange_(){this.updateIcon_()}updateIcon_(){this.$.icon.ironIcon=this.expanded?this.collapseIcon:this.expandIcon}toggleExpand_(event){event.stopPropagation();event.preventDefault();this.scrollIntoViewIfNeeded();this.expanded=!this.expanded;focusWithoutInk(this.$.icon)}updateAriaExpanded_(){if(this.disabled){this.$.icon.removeAttribute("aria-expanded")}else{this.$.icon.setAttribute("aria-expanded",this.expanded?"true":"false")}}}customElements.define(CrExpandButtonElement.is,CrExpandButtonElement);const styleMod=document.createElement("dom-module");styleMod.appendChild(html`
  <template>
    <style>
:host{color:var(--cr-primary-text-color);line-height:154%;overflow:hidden;user-select:text}
    </style>
  </template>
`.content);styleMod.register("cr-page-host-style");function getTemplate$6(){return html`<!--_html_template_start_-->    <style>:host{--cr-toast-background:#323232;--cr-toast-button-color:var(--google-blue-300);--cr-toast-text-color:#fff}@media (prefers-color-scheme:dark){:host{--cr-toast-background:var(--google-grey-900) linear-gradient(rgba(255, 255, 255, .06), rgba(255, 255, 255, .06));--cr-toast-button-color:var(--google-blue-300);--cr-toast-text-color:var(--google-grey-200)}}:host{align-items:center;background:var(--cr-toast-background);border-radius:4px;bottom:0;box-shadow:0 2px 4px 0 rgba(0,0,0,.28);box-sizing:border-box;display:flex;margin:24px;max-width:568px;min-height:52px;min-width:288px;opacity:0;padding:0 24px;position:fixed;transform:translateY(100px);transition:opacity .3s,transform .3s;visibility:hidden;z-index:1}:host-context([chrome-refresh-2023]):host{--cr-toast-background:var(--color-toast-background,
            var(--cr-fallback-color-inverse-surface));--cr-toast-button-color:var(--color-toast-button,
            var(--cr-fallback-color-inverse-primary));--cr-toast-text-color:var(--color-toast-foreground,
            var(--cr-fallback-color-inverse-on-surface));border-radius:8px;line-height:20px;padding:0 16px}:host-context([dir=ltr]){left:0}:host-context([dir=rtl]){right:0}:host([open]){opacity:1;transform:translateY(0);visibility:visible}:host ::slotted(*){color:var(--cr-toast-text-color)}:host ::slotted(cr-button){background-color:transparent!important;border:none!important;color:var(--cr-toast-button-color)!important;margin-inline-start:32px!important;min-width:52px!important;padding:8px!important}:host ::slotted(cr-button:hover){background-color:transparent!important}:host-context([chrome-refresh-2023]) ::slotted(cr-button:last-of-type){margin-inline-end:-8px}</style>
    <slot></slot>
<!--_html_template_end_-->`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrToastElement extends PolymerElement{constructor(){super(...arguments);this.hideTimeoutId_=null}static get is(){return"cr-toast"}static get template(){return getTemplate$6()}static get properties(){return{duration:{type:Number,value:0},open:{readOnly:true,type:Boolean,value:false,reflectToAttribute:true}}}static get observers(){return["resetAutoHide_(duration, open)"]}resetAutoHide_(){if(this.hideTimeoutId_!==null){window.clearTimeout(this.hideTimeoutId_);this.hideTimeoutId_=null}if(this.open&&this.duration!==0){this.hideTimeoutId_=window.setTimeout((()=>{this.hide()}),this.duration)}}show(){const shouldResetAutohide=this.open;this.removeAttribute("role");this.removeAttribute("aria-hidden");this._setOpen(true);this.setAttribute("role","alert");if(shouldResetAutohide){this.resetAutoHide_()}}hide(){this.setAttribute("aria-hidden","true");this._setOpen(false)}}customElements.define(CrToastElement.is,CrToastElement);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var ORPHANS=new Set;const IronResizableBehavior={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:false}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[];this._boundNotifyResize=this.notifyResize.bind(this);this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){if(this._parentResizable){this._parentResizable.stopResizeNotificationsFor(this)}else{ORPHANS.delete(this);window.removeEventListener("resize",this._boundNotifyResize)}this._parentResizable=null},notifyResize:function(){if(!this.isAttached){return}this._interestedResizables.forEach((function(resizable){if(this.resizerShouldNotify(resizable)){this._notifyDescendant(resizable)}}),this);this._fireResize()},assignParentResizable:function(parentResizable){if(this._parentResizable){this._parentResizable.stopResizeNotificationsFor(this)}this._parentResizable=parentResizable;if(parentResizable&&parentResizable._interestedResizables.indexOf(this)===-1){parentResizable._interestedResizables.push(this);parentResizable._subscribeIronResize(this)}},stopResizeNotificationsFor:function(target){var index=this._interestedResizables.indexOf(target);if(index>-1){this._interestedResizables.splice(index,1);this._unsubscribeIronResize(target)}},_subscribeIronResize:function(target){target.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(target){target.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(element){return true},_onDescendantIronResize:function(event){if(this._notifyingDescendant){event.stopPropagation();return}if(!useShadow){this._fireResize()}},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:false})},_onIronRequestResizeNotifications:function(event){var target=dom(event).rootTarget;if(target===this){return}target.assignParentResizable(this);this._notifyDescendant(target);event.stopPropagation()},_parentResizableChanged:function(parentResizable){if(parentResizable){window.removeEventListener("resize",this._boundNotifyResize)}},_notifyDescendant:function(descendant){if(!this.isAttached){return}this._notifyingDescendant=true;descendant.notifyResize();this._notifyingDescendant=false},_requestResizeNotifications:function(){if(!this.isAttached){return}if(document.readyState==="loading"){var _requestResizeNotifications=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",(function readystatechanged(){document.removeEventListener("readystatechange",readystatechanged);_requestResizeNotifications()}))}else{this._findParent();if(!this._parentResizable){ORPHANS.forEach((function(orphan){if(orphan!==this){orphan._findParent()}}),this);window.addEventListener("resize",this._boundNotifyResize);this.notifyResize()}else{this._parentResizable._interestedResizables.forEach((function(resizable){if(resizable!==this){resizable._findParent()}}),this)}}},_findParent:function(){this.assignParentResizable(null);this.fire("iron-request-resize-notifications",null,{node:this,bubbles:true,cancelable:true});if(!this._parentResizable){ORPHANS.add(this)}else{ORPHANS.delete(this)}}};
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
        transition-duration: var(--iron-collapse-transition-duration, 300ms);
        /* Safari 10 needs this property prefixed to correctly apply the custom property */
        overflow: visible;
      }

      :host(.iron-collapse-closed) {
        display: none;
      }

      :host(:not(.iron-collapse-opened)) {
        overflow: hidden;
      }
    </style>

    <slot></slot>
`,is:"iron-collapse",behaviors:[IronResizableBehavior],properties:{horizontal:{type:Boolean,value:false,observer:"_horizontalChanged"},opened:{type:Boolean,value:false,notify:true,observer:"_openedChanged"},transitioning:{type:Boolean,notify:true,readOnly:true},noAnimation:{type:Boolean},_desiredSize:{type:String,value:""}},get dimension(){return this.horizontal?"width":"height"},get _dimensionMax(){return this.horizontal?"maxWidth":"maxHeight"},get _dimensionMaxCss(){return this.horizontal?"max-width":"max-height"},hostAttributes:{role:"group","aria-hidden":"true"},listeners:{transitionend:"_onTransitionEnd"},toggle:function(){this.opened=!this.opened},show:function(){this.opened=true},hide:function(){this.opened=false},updateSize:function(size,animated){size=size==="auto"?"":size;var willAnimate=animated&&!this.noAnimation&&this.isAttached&&this._desiredSize!==size;this._desiredSize=size;this._updateTransition(false);if(willAnimate){var startSize=this._calcSize();if(size===""){this.style[this._dimensionMax]="";size=this._calcSize()}this.style[this._dimensionMax]=startSize;this.scrollTop=this.scrollTop;this._updateTransition(true);willAnimate=size!==startSize}this.style[this._dimensionMax]=size;if(!willAnimate){this._transitionEnd()}},enableTransition:function(enabled){Base._warn("`enableTransition()` is deprecated, use `noAnimation` instead.");this.noAnimation=!enabled},_updateTransition:function(enabled){this.style.transitionDuration=enabled&&!this.noAnimation?"":"0s"},_horizontalChanged:function(){this.style.transitionProperty=this._dimensionMaxCss;var otherDimension=this._dimensionMax==="maxWidth"?"maxHeight":"maxWidth";this.style[otherDimension]="";this.updateSize(this.opened?"auto":"0px",false)},_openedChanged:function(){this.setAttribute("aria-hidden",!this.opened);this._setTransitioning(true);this.toggleClass("iron-collapse-closed",false);this.toggleClass("iron-collapse-opened",false);this.updateSize(this.opened?"auto":"0px",true);if(this.opened){this.focus()}},_transitionEnd:function(){this.style[this._dimensionMax]=this._desiredSize;this.toggleClass("iron-collapse-closed",!this.opened);this.toggleClass("iron-collapse-opened",this.opened);this._updateTransition(false);this.notifyResize();this._setTransitioning(false)},_onTransitionEnd:function(event){if(dom(event).rootTarget===this){this._transitionEnd()}},_calcSize:function(){return this.getBoundingClientRect()[this.dimension]+"px"}});
// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function sanitizeInnerHtmlInternal(rawString,opts){opts=opts||{};const html=parseHtmlSubset(`<b>${rawString}</b>`,opts.tags,opts.attrs).firstElementChild;return html.innerHTML}let sanitizedPolicy=null;function sanitizeInnerHtml(rawString,opts){assert(window.trustedTypes);if(sanitizedPolicy===null){sanitizedPolicy=window.trustedTypes.createPolicy("sanitize-inner-html",{createHTML:sanitizeInnerHtmlInternal,createScript:()=>assertNotReached(),createScriptURL:()=>assertNotReached()})}return sanitizedPolicy.createHTML(rawString,opts)}const allowAttribute=(_node,_value)=>true;const allowedAttributes=new Map([["href",(node,value)=>node.tagName==="A"&&(value.startsWith("chrome://")||value.startsWith("https://")||value==="#")],["target",(node,value)=>node.tagName==="A"&&value==="_blank"]]);const allowedOptionalAttributes=new Map([["class",allowAttribute],["id",allowAttribute],["is",(_node,value)=>value==="action-link"||value===""],["role",(_node,value)=>value==="link"],["src",(node,value)=>node.tagName==="IMG"&&value.startsWith("chrome://")],["tabindex",allowAttribute],["aria-hidden",allowAttribute],["aria-label",allowAttribute],["aria-labelledby",allowAttribute]]);const allowedTags=new Set(["A","B","I","BR","DIV","EM","KBD","P","PRE","SPAN","STRONG"]);const allowedOptionalTags=new Set(["IMG","LI","UL"]);let unsanitizedPolicy;function mergeTags(optTags){const clone=new Set(allowedTags);optTags.forEach((str=>{const tag=str.toUpperCase();if(allowedOptionalTags.has(tag)){clone.add(tag)}}));return clone}function mergeAttrs(optAttrs){const clone=new Map(allowedAttributes);optAttrs.forEach((key=>{if(allowedOptionalAttributes.has(key)){clone.set(key,allowedOptionalAttributes.get(key))}}));return clone}function walk(n,f){f(n);for(let i=0;i<n.childNodes.length;i++){walk(n.childNodes[i],f)}}function assertElement(tags,node){if(!tags.has(node.tagName)){throw Error(node.tagName+" is not supported")}}function assertAttribute(attrs,attrNode,node){const n=attrNode.nodeName;const v=attrNode.nodeValue||"";if(!attrs.has(n)||!attrs.get(n)(node,v)){throw Error(node.tagName+"["+n+'="'+v+'"] is not supported')}}function parseHtmlSubset(s,extraTags,extraAttrs){const tags=extraTags?mergeTags(extraTags):allowedTags;const attrs=extraAttrs?mergeAttrs(extraAttrs):allowedAttributes;const doc=document.implementation.createHTMLDocument("");const r=doc.createRange();r.selectNode(doc.body);if(window.trustedTypes){if(!unsanitizedPolicy){unsanitizedPolicy=window.trustedTypes.createPolicy("parse-html-subset",{createHTML:untrustedHTML=>untrustedHTML,createScript:()=>assertNotReached(),createScriptURL:()=>assertNotReached()})}s=unsanitizedPolicy.createHTML(s)}const df=r.createContextualFragment(s);walk(df,(function(node){switch(node.nodeType){case Node.ELEMENT_NODE:assertElement(tags,node);const nodeAttrs=node.attributes;for(let i=0;i<nodeAttrs.length;++i){assertAttribute(attrs,nodeAttrs[i],node)}break;case Node.COMMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:case Node.TEXT_NODE:break;default:throw Error("Node type "+node.nodeType+" is not supported")}}));return df}function getTemplate$5(){return html`<!--_html_template_start_--><style include="cr-shared-style">:host{--cr-localized-link-display:inline;display:block}:host([link-disabled]){cursor:pointer;opacity:var(--cr-disabled-opacity);pointer-events:none}a{display:var(--cr-localized-link-display)}a[href]{color:var(--cr-link-color)}a[is=action-link]{user-select:none}#container{display:contents}</style>

<div id="container"></div>
<!--_html_template_end_-->`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class LocalizedLinkElement extends PolymerElement{static get is(){return"localized-link"}static get template(){return getTemplate$5()}static get properties(){return{localizedString:String,linkUrl:{type:String,value:""},linkDisabled:{type:Boolean,value:false,reflectToAttribute:true,observer:"updateAnchorTagTabIndex_"},containerInnerHTML_:{type:String,value:"",computed:"getAriaLabelledContent_(localizedString, linkUrl)",observer:"setContainerInnerHtml_"}}}getAriaLabelledContent_(localizedString,linkUrl){const tempEl=document.createElement("div");tempEl.innerHTML=sanitizeInnerHtml(localizedString,{attrs:["id"]});const ariaLabelledByIds=[];tempEl.childNodes.forEach(((node,index)=>{if(node.nodeType===Node.TEXT_NODE){const spanNode=document.createElement("span");spanNode.textContent=node.textContent;spanNode.id=`id${index}`;ariaLabelledByIds.push(spanNode.id);spanNode.setAttribute("aria-hidden","true");node.replaceWith(spanNode);return}if(node.nodeType===Node.ELEMENT_NODE&&node.nodeName==="A"){const element=node;element.id=`id${index}`;ariaLabelledByIds.push(element.id);return}assertNotReached("localized-link has invalid node types")}));const anchorTags=tempEl.querySelectorAll("a");if(anchorTags.length===0){return localizedString}assert(anchorTags.length===1,"localized-link should contain exactly one anchor tag");const anchorTag=anchorTags[0];anchorTag.setAttribute("aria-labelledby",ariaLabelledByIds.join(" "));anchorTag.tabIndex=this.linkDisabled?-1:0;if(linkUrl!==""){anchorTag.href=linkUrl;anchorTag.target="_blank"}return tempEl.innerHTML}setContainerInnerHtml_(){this.$.container.innerHTML=sanitizeInnerHtml(this.containerInnerHTML_,{attrs:["aria-hidden","aria-labelledby","id","tabindex"]});const anchorTag=this.shadowRoot.querySelector("a");if(anchorTag){anchorTag.addEventListener("click",(event=>this.onAnchorTagClick_(event)));anchorTag.addEventListener("auxclick",(event=>{if(event.button===1){this.onAnchorTagClick_(event)}}))}}onAnchorTagClick_(event){if(this.linkDisabled){event.preventDefault();return}this.dispatchEvent(new CustomEvent("link-clicked",{bubbles:true,composed:true,detail:{event:event}}));event.stopPropagation()}updateAnchorTagTabIndex_(){const anchorTag=this.shadowRoot.querySelector("a");if(!anchorTag){return}anchorTag.tabIndex=this.linkDisabled?-1:0}}customElements.define(LocalizedLinkElement.is,LocalizedLinkElement);
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const IronScrollTargetBehavior={properties:{scrollTarget:{type:HTMLElement,value:function(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],_shouldHaveListener:true,_scrollTargetChanged:function(scrollTarget,isAttached){if(this._oldScrollTarget){this._toggleScrollListener(false,this._oldScrollTarget);this._oldScrollTarget=null}if(!isAttached){return}if(scrollTarget==="document"){this.scrollTarget=this._doc}else if(typeof scrollTarget==="string"){var domHost=this.domHost;this.scrollTarget=domHost&&domHost.$?domHost.$[scrollTarget]:dom(this.ownerDocument).querySelector("#"+scrollTarget)}else if(this._isValidScrollTarget()){this._oldScrollTarget=scrollTarget;this._toggleScrollListener(this._shouldHaveListener,scrollTarget)}},_scrollHandler:function scrollHandler(){},get _defaultScrollTarget(){return this._doc},get _doc(){return this.ownerDocument.documentElement},get _scrollTop(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop}return 0},get _scrollLeft(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft}return 0},set _scrollTop(top){if(this.scrollTarget===this._doc){window.scrollTo(window.pageXOffset,top)}else if(this._isValidScrollTarget()){this.scrollTarget.scrollTop=top}},set _scrollLeft(left){if(this.scrollTarget===this._doc){window.scrollTo(left,window.pageYOffset)}else if(this._isValidScrollTarget()){this.scrollTarget.scrollLeft=left}},scroll:function(leftOrOptions,top){var left;if(typeof leftOrOptions==="object"){left=leftOrOptions.left;top=leftOrOptions.top}else{left=leftOrOptions}left=left||0;top=top||0;if(this.scrollTarget===this._doc){window.scrollTo(left,top)}else if(this._isValidScrollTarget()){this.scrollTarget.scrollLeft=left;this.scrollTarget.scrollTop=top}},get _scrollTargetWidth(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth}return 0},get _scrollTargetHeight(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight}return 0},_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(yes,scrollTarget){var eventTarget=scrollTarget===this._doc?window:scrollTarget;if(yes){if(!this._boundScrollHandler){this._boundScrollHandler=this._scrollHandler.bind(this);eventTarget.addEventListener("scroll",this._boundScrollHandler)}}else{if(this._boundScrollHandler){eventTarget.removeEventListener("scroll",this._boundScrollHandler);this._boundScrollHandler=null}}},toggleScrollListener:function(yes){this._shouldHaveListener=yes;this._toggleScrollListener(yes,this.scrollTarget)}};
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var IOS=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/);var IOS_TOUCH_SCROLLING=IOS&&IOS[1]>=8;var DEFAULT_PHYSICAL_COUNT=3;var HIDDEN_Y="-10000px";var SECRET_TABINDEX=-100;Polymer({_template:html`
    <style>
      :host {
        display: block;
      }

      @media only screen and (-webkit-max-device-pixel-ratio: 1) {
        :host {
          will-change: transform;
        }
      }

      #items {
        position: relative;
      }

      :host(:not([grid])) #items > ::slotted(*) {
        width: 100%;
      }

      #items > ::slotted(*) {
        box-sizing: border-box;
        margin: 0;
        position: absolute;
        top: 0;
        will-change: transform;
      }
    </style>

    <array-selector id="selector" items="{{items}}" selected="{{selectedItems}}" selected-item="{{selectedItem}}"></array-selector>

    <div id="items">
      <slot></slot>
    </div>
`,is:"iron-list",properties:{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},selectedAs:{type:String,value:"selected"},grid:{type:Boolean,value:false,reflectToAttribute:true,observer:"_gridChanged"},selectionEnabled:{type:Boolean,value:false},selectedItem:{type:Object,notify:true},selectedItems:{type:Object,notify:true},multiSelection:{type:Boolean,value:false},scrollOffset:{type:Number,value:0},preserveFocus:{type:Boolean,value:false}},observers:["_itemsChanged(items.*)","_selectionEnabledChanged(selectionEnabled)","_multiSelectionChanged(multiSelection)","_setOverflow(scrollTarget, scrollOffset)"],behaviors:[Templatizer,IronResizableBehavior,IronScrollTargetBehavior,OptionalMutableDataBehavior],_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_focusedItem:null,_focusedVirtualIndex:-1,_focusedPhysicalIndex:-1,_offscreenFocusedItem:null,_focusBackfillItem:null,_itemsPerRow:1,_itemWidth:0,_rowHeight:0,_templateCost:0,_parentModel:true,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){var size=this.grid?this._physicalRows*this._rowHeight:this._physicalSize;return size-this._viewportHeight},get _itemsParent(){return dom(dom(this._userTemplate).parentNode)},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){var virtualCount=this._convertIndexToCompleteRow(this._virtualCount);return Math.max(0,virtualCount-this._physicalCount)},set _virtualStart(val){val=this._clamp(val,0,this._maxVirtualStart);if(this.grid){val=val-val%this._itemsPerRow}this._virtualStartVal=val},get _virtualStart(){return this._virtualStartVal||0},set _physicalStart(val){val=val%this._physicalCount;if(val<0){val=this._physicalCount+val}if(this.grid){val=val-val%this._itemsPerRow}this._physicalStartVal=val},get _physicalStart(){return this._physicalStartVal||0},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},set _physicalCount(val){this._physicalCountVal=val},get _physicalCount(){return this._physicalCountVal||0},get _optPhysicalSize(){return this._viewportHeight===0?Infinity:this._viewportHeight*this._maxPages},get _isVisible(){return Boolean(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){var idx=this._firstVisibleIndexVal;if(idx==null){var physicalOffset=this._physicalTop+this._scrollOffset;idx=this._iterateItems((function(pidx,vidx){physicalOffset+=this._getPhysicalSizeIncrement(pidx);if(physicalOffset>this._scrollPosition){return this.grid?vidx-vidx%this._itemsPerRow:vidx}if(this.grid&&this._virtualCount-1===vidx){return vidx-vidx%this._itemsPerRow}}))||0;this._firstVisibleIndexVal=idx}return idx},get lastVisibleIndex(){var idx=this._lastVisibleIndexVal;if(idx==null){if(this.grid){idx=Math.min(this._virtualCount,this.firstVisibleIndex+this._estRowsInView*this._itemsPerRow-1)}else{var physicalOffset=this._physicalTop+this._scrollOffset;this._iterateItems((function(pidx,vidx){if(physicalOffset<this._scrollBottom){idx=vidx}physicalOffset+=this._getPhysicalSizeIncrement(pidx)}))}this._lastVisibleIndexVal=idx}return idx},get _defaultScrollTarget(){return this},get _virtualRowCount(){return Math.ceil(this._virtualCount/this._itemsPerRow)},get _estRowsInView(){return Math.ceil(this._viewportHeight/this._rowHeight)},get _physicalRows(){return Math.ceil(this._physicalCount/this._itemsPerRow)},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},ready:function(){this.addEventListener("focus",this._didFocus.bind(this),true)},attached:function(){this._debounce("_render",this._render,animationFrame);this.listen(this,"iron-resize","_resizeHandler");this.listen(this,"keydown","_keydownHandler")},detached:function(){this.unlisten(this,"iron-resize","_resizeHandler");this.unlisten(this,"keydown","_keydownHandler")},_setOverflow:function(scrollTarget){this.style.webkitOverflowScrolling=scrollTarget===this?"touch":"";this.style.overflowY=scrollTarget===this?"auto":"";this._lastVisibleIndexVal=null;this._firstVisibleIndexVal=null;this._debounce("_render",this._render,animationFrame)},updateViewportBoundaries:function(){var styles=window.getComputedStyle(this);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(styles["padding-top"],10);this._isRTL=Boolean(styles.direction==="rtl");this._viewportWidth=this.$.items.offsetWidth;this._viewportHeight=this._scrollTargetHeight;this.grid&&this._updateGridMetrics()},_scrollHandler:function(){var scrollTop=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop));var delta=scrollTop-this._scrollPosition;var isScrollingDown=delta>=0;this._scrollPosition=scrollTop;this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null;if(Math.abs(delta)>this._physicalSize&&this._physicalSize>0){delta=delta-this._scrollOffset;var idxAdjustment=Math.round(delta/this._physicalAverage)*this._itemsPerRow;this._virtualStart=this._virtualStart+idxAdjustment;this._physicalStart=this._physicalStart+idxAdjustment;this._physicalTop=Math.min(Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage,this._scrollPosition);this._update()}else if(this._physicalCount>0){var reusables=this._getReusables(isScrollingDown);if(isScrollingDown){this._physicalTop=reusables.physicalTop;this._virtualStart=this._virtualStart+reusables.indexes.length;this._physicalStart=this._physicalStart+reusables.indexes.length}else{this._virtualStart=this._virtualStart-reusables.indexes.length;this._physicalStart=this._physicalStart-reusables.indexes.length}this._update(reusables.indexes,isScrollingDown?null:reusables.indexes);this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),microTask)}},_getReusables:function(fromTop){var ith,offsetContent,physicalItemHeight;var idxs=[];var protectedOffsetContent=this._hiddenContentSize*this._ratio;var virtualStart=this._virtualStart;var virtualEnd=this._virtualEnd;var physicalCount=this._physicalCount;var top=this._physicalTop+this._scrollOffset;var bottom=this._physicalBottom+this._scrollOffset;var scrollTop=this._scrollPosition;var scrollBottom=this._scrollBottom;if(fromTop){ith=this._physicalStart;this._physicalEnd;offsetContent=scrollTop-top}else{ith=this._physicalEnd;this._physicalStart;offsetContent=bottom-scrollBottom}while(true){physicalItemHeight=this._getPhysicalSizeIncrement(ith);offsetContent=offsetContent-physicalItemHeight;if(idxs.length>=physicalCount||offsetContent<=protectedOffsetContent){break}if(fromTop){if(virtualEnd+idxs.length+1>=this._virtualCount){break}if(top+physicalItemHeight>=scrollTop-this._scrollOffset){break}idxs.push(ith);top=top+physicalItemHeight;ith=(ith+1)%physicalCount}else{if(virtualStart-idxs.length<=0){break}if(top+this._physicalSize-physicalItemHeight<=scrollBottom){break}idxs.push(ith);top=top-physicalItemHeight;ith=ith===0?physicalCount-1:ith-1}}return{indexes:idxs,physicalTop:top-this._scrollOffset}},_update:function(itemSet,movingUp){if(itemSet&&itemSet.length===0||this._physicalCount===0){return}this._manageFocus();this._assignModels(itemSet);this._updateMetrics(itemSet);if(movingUp){while(movingUp.length){var idx=movingUp.pop();this._physicalTop-=this._getPhysicalSizeIncrement(idx)}}this._positionItems();this._updateScrollerSize()},_createPool:function(size){this._ensureTemplatized();var i,inst;var physicalItems=new Array(size);for(i=0;i<size;i++){inst=this.stamp(null);physicalItems[i]=inst.root.querySelector("*");this._itemsParent.appendChild(inst.root)}return physicalItems},_isClientFull:function(){return this._scrollBottom!=0&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded:function(count){var nextPhysicalCount=this._clamp(this._physicalCount+count,DEFAULT_PHYSICAL_COUNT,this._virtualCount-this._virtualStart);nextPhysicalCount=this._convertIndexToCompleteRow(nextPhysicalCount);if(this.grid){var correction=nextPhysicalCount%this._itemsPerRow;if(correction&&nextPhysicalCount-correction<=this._physicalCount){nextPhysicalCount+=this._itemsPerRow}nextPhysicalCount-=correction}var delta=nextPhysicalCount-this._physicalCount;var nextIncrease=Math.round(this._physicalCount*.5);if(delta<0){return}if(delta>0){var ts=window.performance.now();[].push.apply(this._physicalItems,this._createPool(delta));for(var i=0;i<delta;i++){this._physicalSizes.push(0)}this._physicalCount=this._physicalCount+delta;if(this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd){this._physicalStart=this._physicalStart+delta}this._update();this._templateCost=(window.performance.now()-ts)/delta;nextIncrease=Math.round(this._physicalCount*.5)}if(this._virtualEnd>=this._virtualCount-1||nextIncrease===0);else if(!this._isClientFull()){this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,nextIncrease),microTask)}else if(this._physicalSize<this._optPhysicalSize){this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,nextIncrease)),idlePeriod)}},_render:function(){if(!this.isAttached||!this._isVisible){return}if(this._physicalCount!==0){var reusables=this._getReusables(true);this._physicalTop=reusables.physicalTop;this._virtualStart=this._virtualStart+reusables.indexes.length;this._physicalStart=this._physicalStart+reusables.indexes.length;this._update(reusables.indexes);this._update();this._increasePoolIfNeeded(0)}else if(this._virtualCount>0){this.updateViewportBoundaries();this._increasePoolIfNeeded(DEFAULT_PHYSICAL_COUNT)}},_ensureTemplatized:function(){if(this.ctor){return}this._userTemplate=this.queryEffectiveChildren("template");if(!this._userTemplate){console.warn("iron-list requires a template to be provided in light-dom")}var instanceProps={};instanceProps.__key__=true;instanceProps[this.as]=true;instanceProps[this.indexAs]=true;instanceProps[this.selectedAs]=true;instanceProps.tabIndex=true;this._instanceProps=instanceProps;this.templatize(this._userTemplate,this.mutableData)},_gridChanged:function(newGrid,oldGrid){if(typeof oldGrid==="undefined")return;this.notifyResize();flush();newGrid&&this._updateGridMetrics()},_getFocusedElement:function(){function doSearch(node,query){let result=null;let type=node.nodeType;if(type==Node.ELEMENT_NODE||type==Node.DOCUMENT_FRAGMENT_NODE)result=node.querySelector(query);if(result)return result;let child=node.firstChild;while(child!==null&&result===null){result=doSearch(child,query);child=child.nextSibling}if(result)return result;const shadowRoot=node.shadowRoot;return shadowRoot?doSearch(shadowRoot,query):null}const focusWithin=doSearch(this,":focus-within");return focusWithin?doSearch(focusWithin,":focus"):null},_itemsChanged:function(change){var rendering=/^items(\.splices){0,1}$/.test(change.path);var lastFocusedIndex,focusedElement;if(rendering&&this.preserveFocus){lastFocusedIndex=this._focusedVirtualIndex;focusedElement=this._getFocusedElement()}var preservingFocus=rendering&&this.preserveFocus&&focusedElement;if(change.path==="items"){this._virtualStart=0;this._physicalTop=0;this._virtualCount=this.items?this.items.length:0;this._physicalIndexForKey={};this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null;this._physicalCount=this._physicalCount||0;this._physicalItems=this._physicalItems||[];this._physicalSizes=this._physicalSizes||[];this._physicalStart=0;if(this._scrollTop>this._scrollOffset&&!preservingFocus){this._resetScrollPosition(0)}this._removeFocusedItem();this._debounce("_render",this._render,animationFrame)}else if(change.path==="items.splices"){this._adjustVirtualIndex(change.value.indexSplices);this._virtualCount=this.items?this.items.length:0;var itemAddedOrRemoved=change.value.indexSplices.some((function(splice){return splice.addedCount>0||splice.removed.length>0}));if(itemAddedOrRemoved){var activeElement=this._getActiveElement();if(this.contains(activeElement)){activeElement.blur()}}var affectedIndexRendered=change.value.indexSplices.some((function(splice){return splice.index+splice.addedCount>=this._virtualStart&&splice.index<=this._virtualEnd}),this);if(!this._isClientFull()||affectedIndexRendered){this._debounce("_render",this._render,animationFrame)}}else if(change.path!=="items.length"){this._forwardItemPath(change.path,change.value)}if(preservingFocus){flush();focusedElement.blur();this._focusPhysicalItem(Math.min(this.items.length-1,lastFocusedIndex));if(!this._isIndexVisible(this._focusedVirtualIndex)){this.scrollToIndex(this._focusedVirtualIndex)}}},_forwardItemPath:function(path,value){path=path.slice(6);var dot=path.indexOf(".");if(dot===-1){dot=path.length}var isIndexRendered;var pidx;var inst;var offscreenInstance=this.modelForElement(this._offscreenFocusedItem);var vidx=parseInt(path.substring(0,dot),10);isIndexRendered=this._isIndexRendered(vidx);if(isIndexRendered){pidx=this._getPhysicalIndex(vidx);inst=this.modelForElement(this._physicalItems[pidx])}else if(offscreenInstance){inst=offscreenInstance}if(!inst||inst[this.indexAs]!==vidx){return}path=path.substring(dot+1);path=this.as+(path?"."+path:"");inst._setPendingPropertyOrPath(path,value,false,true);inst._flushProperties&&inst._flushProperties();if(isIndexRendered){this._updateMetrics([pidx]);this._positionItems();this._updateScrollerSize()}},_adjustVirtualIndex:function(splices){splices.forEach((function(splice){splice.removed.forEach(this._removeItem,this);if(splice.index<this._virtualStart){var delta=Math.max(splice.addedCount-splice.removed.length,splice.index-this._virtualStart);this._virtualStart=this._virtualStart+delta;if(this._focusedVirtualIndex>=0){this._focusedVirtualIndex=this._focusedVirtualIndex+delta}}}),this)},_removeItem:function(item){this.$.selector.deselect(item);if(this._focusedItem&&this.modelForElement(this._focusedItem)[this.as]===item){this._removeFocusedItem()}},_iterateItems:function(fn,itemSet){var pidx,vidx,rtn,i;if(arguments.length===2&&itemSet){for(i=0;i<itemSet.length;i++){pidx=itemSet[i];vidx=this._computeVidx(pidx);if((rtn=fn.call(this,pidx,vidx))!=null){return rtn}}}else{pidx=this._physicalStart;vidx=this._virtualStart;for(;pidx<this._physicalCount;pidx++,vidx++){if((rtn=fn.call(this,pidx,vidx))!=null){return rtn}}for(pidx=0;pidx<this._physicalStart;pidx++,vidx++){if((rtn=fn.call(this,pidx,vidx))!=null){return rtn}}}},_computeVidx:function(pidx){if(pidx>=this._physicalStart){return this._virtualStart+(pidx-this._physicalStart)}return this._virtualStart+(this._physicalCount-this._physicalStart)+pidx},_assignModels:function(itemSet){this._iterateItems((function(pidx,vidx){var el=this._physicalItems[pidx];var item=this.items&&this.items[vidx];if(item!=null){var inst=this.modelForElement(el);inst.__key__=null;this._forwardProperty(inst,this.as,item);this._forwardProperty(inst,this.selectedAs,this.$.selector.isSelected(item));this._forwardProperty(inst,this.indexAs,vidx);this._forwardProperty(inst,"tabIndex",this._focusedVirtualIndex===vidx?0:-1);this._physicalIndexForKey[inst.__key__]=pidx;inst._flushProperties&&inst._flushProperties(true);el.removeAttribute("hidden")}else{el.setAttribute("hidden","")}}),itemSet)},_updateMetrics:function(itemSet){flush();var newPhysicalSize=0;var oldPhysicalSize=0;var prevAvgCount=this._physicalAverageCount;var prevPhysicalAvg=this._physicalAverage;this._iterateItems((function(pidx,vidx){oldPhysicalSize+=this._physicalSizes[pidx];this._physicalSizes[pidx]=this._physicalItems[pidx].offsetHeight;newPhysicalSize+=this._physicalSizes[pidx];this._physicalAverageCount+=this._physicalSizes[pidx]?1:0}),itemSet);if(this.grid){this._updateGridMetrics();this._physicalSize=Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight}else{oldPhysicalSize=this._itemsPerRow===1?oldPhysicalSize:Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight;this._physicalSize=this._physicalSize+newPhysicalSize-oldPhysicalSize;this._itemsPerRow=1}if(this._physicalAverageCount!==prevAvgCount){this._physicalAverage=Math.round((prevPhysicalAvg*prevAvgCount+newPhysicalSize)/this._physicalAverageCount)}},_updateGridMetrics:function(){this._itemWidth=this._physicalCount>0?this._physicalItems[0].getBoundingClientRect().width:200;this._rowHeight=this._physicalCount>0?this._physicalItems[0].offsetHeight:200;this._itemsPerRow=this._itemWidth?Math.floor(this._viewportWidth/this._itemWidth):this._itemsPerRow},_positionItems:function(){this._adjustScrollPosition();var y=this._physicalTop;if(this.grid){var totalItemWidth=this._itemsPerRow*this._itemWidth;var rowOffset=(this._viewportWidth-totalItemWidth)/2;this._iterateItems((function(pidx,vidx){var modulus=vidx%this._itemsPerRow;var x=Math.floor(modulus*this._itemWidth+rowOffset);if(this._isRTL){x=x*-1}this.translate3d(x+"px",y+"px",0,this._physicalItems[pidx]);if(this._shouldRenderNextRow(vidx)){y+=this._rowHeight}}))}else{const order=[];this._iterateItems((function(pidx,vidx){const item=this._physicalItems[pidx];this.translate3d(0,y+"px",0,item);y+=this._physicalSizes[pidx];const itemId=item.id;if(itemId){order.push(itemId)}}));if(order.length){this.setAttribute("aria-owns",order.join(" "))}}},_getPhysicalSizeIncrement:function(pidx){if(!this.grid){return this._physicalSizes[pidx]}if(this._computeVidx(pidx)%this._itemsPerRow!==this._itemsPerRow-1){return 0}return this._rowHeight},_shouldRenderNextRow:function(vidx){return vidx%this._itemsPerRow===this._itemsPerRow-1},_adjustScrollPosition:function(){var deltaHeight=this._virtualStart===0?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(deltaHeight!==0){this._physicalTop=this._physicalTop-deltaHeight;var scrollTop=this._scrollPosition;if(!IOS_TOUCH_SCROLLING&&scrollTop>0){this._resetScrollPosition(scrollTop-deltaHeight)}}},_resetScrollPosition:function(pos){if(this.scrollTarget&&pos>=0){this._scrollTop=pos;this._scrollPosition=this._scrollTop}},_updateScrollerSize:function(forceUpdate){if(this.grid){this._estScrollHeight=this._virtualRowCount*this._rowHeight}else{this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage}forceUpdate=forceUpdate||this._scrollHeight===0;forceUpdate=forceUpdate||this._scrollPosition>=this._estScrollHeight-this._physicalSize;forceUpdate=forceUpdate||this.grid&&this.$.items.style.height<this._estScrollHeight;if(forceUpdate||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight){this.$.items.style.height=this._estScrollHeight+"px";this._scrollHeight=this._estScrollHeight}},scrollToItem:function(item){return this.scrollToIndex(this.items.indexOf(item))},scrollToIndex:function(idx){if(typeof idx!=="number"||idx<0||idx>this.items.length-1){return}flush();if(this._physicalCount===0){return}idx=this._clamp(idx,0,this._virtualCount-1);if(!this._isIndexRendered(idx)||idx>=this._maxVirtualStart){this._virtualStart=this.grid?idx-this._itemsPerRow*2:idx-1}this._manageFocus();this._assignModels();this._updateMetrics();this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage;var currentTopItem=this._physicalStart;var currentVirtualItem=this._virtualStart;var targetOffsetTop=0;var hiddenContentSize=this._hiddenContentSize;while(currentVirtualItem<idx&&targetOffsetTop<=hiddenContentSize){targetOffsetTop=targetOffsetTop+this._getPhysicalSizeIncrement(currentTopItem);currentTopItem=(currentTopItem+1)%this._physicalCount;currentVirtualItem++}this._updateScrollerSize(true);this._positionItems();this._resetScrollPosition(this._physicalTop+this._scrollOffset+targetOffsetTop);this._increasePoolIfNeeded(0);this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null},_resetAverage:function(){this._physicalAverage=0;this._physicalAverageCount=0},_resizeHandler:function(){this._debounce("_render",(function(){this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null;if(this._isVisible){this.updateViewportBoundaries();this.toggleScrollListener(true);this._resetAverage();this._render()}else{this.toggleScrollListener(false)}}),animationFrame)},selectItem:function(item){return this.selectIndex(this.items.indexOf(item))},selectIndex:function(index){if(index<0||index>=this._virtualCount){return}if(!this.multiSelection&&this.selectedItem){this.clearSelection()}if(this._isIndexRendered(index)){var model=this.modelForElement(this._physicalItems[this._getPhysicalIndex(index)]);if(model){model[this.selectedAs]=true}this.updateSizeForIndex(index)}this.$.selector.selectIndex(index)},deselectItem:function(item){return this.deselectIndex(this.items.indexOf(item))},deselectIndex:function(index){if(index<0||index>=this._virtualCount){return}if(this._isIndexRendered(index)){var model=this.modelForElement(this._physicalItems[this._getPhysicalIndex(index)]);model[this.selectedAs]=false;this.updateSizeForIndex(index)}this.$.selector.deselectIndex(index)},toggleSelectionForItem:function(item){return this.toggleSelectionForIndex(this.items.indexOf(item))},toggleSelectionForIndex:function(index){var isSelected=this.$.selector.isIndexSelected?this.$.selector.isIndexSelected(index):this.$.selector.isSelected(this.items[index]);isSelected?this.deselectIndex(index):this.selectIndex(index)},clearSelection:function(){this._iterateItems((function(pidx,vidx){this.modelForElement(this._physicalItems[pidx])[this.selectedAs]=false}));this.$.selector.clearSelection()},_selectionEnabledChanged:function(selectionEnabled){var handler=selectionEnabled?this.listen:this.unlisten;handler.call(this,this,"tap","_selectionHandler")},_selectionHandler:function(e){var model=this.modelForElement(e.target);if(!model){return}var modelTabIndex,activeElTabIndex;var target=dom(e).path[0];var activeEl=this._getActiveElement();var physicalItem=this._physicalItems[this._getPhysicalIndex(model[this.indexAs])];if(target.localName==="input"||target.localName==="button"||target.localName==="select"){return}modelTabIndex=model.tabIndex;model.tabIndex=SECRET_TABINDEX;activeElTabIndex=activeEl?activeEl.tabIndex:-1;model.tabIndex=modelTabIndex;if(activeEl&&physicalItem!==activeEl&&physicalItem.contains(activeEl)&&activeElTabIndex!==SECRET_TABINDEX){return}this.toggleSelectionForItem(model[this.as])},_multiSelectionChanged:function(multiSelection){this.clearSelection();this.$.selector.multi=multiSelection},updateSizeForItem:function(item){return this.updateSizeForIndex(this.items.indexOf(item))},updateSizeForIndex:function(index){if(!this._isIndexRendered(index)){return null}this._updateMetrics([this._getPhysicalIndex(index)]);this._positionItems();return null},_manageFocus:function(){var fidx=this._focusedVirtualIndex;if(fidx>=0&&fidx<this._virtualCount){if(this._isIndexRendered(fidx)){this._restoreFocusedItem()}else{this._createFocusBackfillItem()}}else if(this._virtualCount>0&&this._physicalCount>0){this._focusedPhysicalIndex=this._physicalStart;this._focusedVirtualIndex=this._virtualStart;this._focusedItem=this._physicalItems[this._physicalStart]}},_convertIndexToCompleteRow:function(idx){this._itemsPerRow=this._itemsPerRow||1;return this.grid?Math.ceil(idx/this._itemsPerRow)*this._itemsPerRow:idx},_isIndexRendered:function(idx){return idx>=this._virtualStart&&idx<=this._virtualEnd},_isIndexVisible:function(idx){return idx>=this.firstVisibleIndex&&idx<=this.lastVisibleIndex},_getPhysicalIndex:function(vidx){return(this._physicalStart+(vidx-this._virtualStart))%this._physicalCount},focusItem:function(idx){this._focusPhysicalItem(idx)},_focusPhysicalItem:function(idx){if(idx<0||idx>=this._virtualCount){return}this._restoreFocusedItem();if(!this._isIndexRendered(idx)){this.scrollToIndex(idx)}var physicalItem=this._physicalItems[this._getPhysicalIndex(idx)];var model=this.modelForElement(physicalItem);var focusable;model.tabIndex=SECRET_TABINDEX;if(physicalItem.tabIndex===SECRET_TABINDEX){focusable=physicalItem}if(!focusable){focusable=dom(physicalItem).querySelector('[tabindex="'+SECRET_TABINDEX+'"]')}model.tabIndex=0;this._focusedVirtualIndex=idx;focusable&&focusable.focus()},_removeFocusedItem:function(){if(this._offscreenFocusedItem){this._itemsParent.removeChild(this._offscreenFocusedItem)}this._offscreenFocusedItem=null;this._focusBackfillItem=null;this._focusedItem=null;this._focusedVirtualIndex=-1;this._focusedPhysicalIndex=-1},_createFocusBackfillItem:function(){var fpidx=this._focusedPhysicalIndex;if(this._offscreenFocusedItem||this._focusedVirtualIndex<0){return}if(!this._focusBackfillItem){var inst=this.stamp(null);this._focusBackfillItem=inst.root.querySelector("*");this._itemsParent.appendChild(inst.root)}this._offscreenFocusedItem=this._physicalItems[fpidx];this.modelForElement(this._offscreenFocusedItem).tabIndex=0;this._physicalItems[fpidx]=this._focusBackfillItem;this._focusedPhysicalIndex=fpidx;this.translate3d(0,HIDDEN_Y,0,this._offscreenFocusedItem)},_restoreFocusedItem:function(){if(!this._offscreenFocusedItem||this._focusedVirtualIndex<0){return}this._assignModels();var fpidx=this._focusedPhysicalIndex=this._getPhysicalIndex(this._focusedVirtualIndex);var onScreenItem=this._physicalItems[fpidx];if(!onScreenItem){return}var onScreenInstance=this.modelForElement(onScreenItem);var offScreenInstance=this.modelForElement(this._offscreenFocusedItem);if(onScreenInstance[this.as]===offScreenInstance[this.as]){this._focusBackfillItem=onScreenItem;onScreenInstance.tabIndex=-1;this._physicalItems[fpidx]=this._offscreenFocusedItem;this.translate3d(0,HIDDEN_Y,0,this._focusBackfillItem)}else{this._removeFocusedItem();this._focusBackfillItem=null}this._offscreenFocusedItem=null},_didFocus:function(e){var targetModel=this.modelForElement(e.target);var focusedModel=this.modelForElement(this._focusedItem);var hasOffscreenFocusedItem=this._offscreenFocusedItem!==null;var fidx=this._focusedVirtualIndex;if(!targetModel){return}if(focusedModel===targetModel){if(!this._isIndexVisible(fidx)){this.scrollToIndex(fidx)}}else{this._restoreFocusedItem();if(focusedModel){focusedModel.tabIndex=-1}targetModel.tabIndex=0;fidx=targetModel[this.indexAs];this._focusedVirtualIndex=fidx;this._focusedPhysicalIndex=this._getPhysicalIndex(fidx);this._focusedItem=this._physicalItems[this._focusedPhysicalIndex];if(hasOffscreenFocusedItem&&!this._offscreenFocusedItem){this._update()}}},_keydownHandler:function(e){switch(e.keyCode){case 40:if(this._focusedVirtualIndex<this._virtualCount-1)e.preventDefault();this._focusPhysicalItem(this._focusedVirtualIndex+(this.grid?this._itemsPerRow:1));break;case 39:if(this.grid)this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?-1:1));break;case 38:if(this._focusedVirtualIndex>0)e.preventDefault();this._focusPhysicalItem(this._focusedVirtualIndex-(this.grid?this._itemsPerRow:1));break;case 37:if(this.grid)this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?1:-1));break;case 13:this._focusPhysicalItem(this._focusedVirtualIndex);if(this.selectionEnabled)this._selectionHandler(e);break}},_clamp:function(v,min,max){return Math.min(max,Math.max(min,v))},_debounce:function(name,cb,asyncModule){this._debouncers=this._debouncers||{};this._debouncers[name]=Debouncer.debounce(this._debouncers[name],asyncModule,cb.bind(this));enqueueDebouncer(this._debouncers[name])},_forwardProperty:function(inst,name,value){inst._setPendingProperty(name,value)},_forwardHostPropV2:function(prop,value){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach((function(item){if(item){this.modelForElement(item).forwardHostProp(prop,value)}}),this)},_notifyInstancePropV2:function(inst,prop,value){if(matches(this.as,prop)){var idx=inst[this.indexAs];if(prop==this.as){this.items[idx]=value}this.notifyPath(translate(this.as,"items."+idx,prop),value)}},_getStampedChildren:function(){return this._physicalItems},_forwardInstancePath:function(inst,path,value){if(path.indexOf(this.as+".")===0){this.notifyPath("items."+inst.__key__+"."+path.slice(this.as.length+1),value)}},_forwardParentPath:function(path,value){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach((function(item){if(item){this.modelForElement(item).notifyPath(path,value)}}),this)},_forwardParentProp:function(prop,value){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach((function(item){if(item){this.modelForElement(item)[prop]=value}}),this)},_getActiveElement:function(){var itemsHost=this._itemsParent.node.domHost;return dom(itemsHost?itemsHost.root:document).activeElement}});
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getDeepActiveElement(){let a=document.activeElement;while(a&&a.shadowRoot&&a.shadowRoot.activeElement){a=a.shadowRoot.activeElement}return a}function isRTL(){return document.documentElement.dir==="rtl"}function hasKeyModifiers(e){return!!(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)}
// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ACTIVE_CLASS="focus-row-active";class FocusRow{constructor(root,boundary,delegate){this.eventTracker=new EventTracker;this.root=root;this.boundary_=boundary||document.documentElement;this.delegate=delegate}static isFocusable(element){if(!element||element.disabled){return false}let current=element;while(true){assertInstanceof(current,Element);const style=window.getComputedStyle(current);if(style.visibility==="hidden"||style.display==="none"){return false}const parent=current.parentNode;if(!parent){return false}if(parent===current.ownerDocument||parent instanceof DocumentFragment){return true}current=parent}}static getFocusableElement(element){const withFocusable=element;if(withFocusable.getFocusableElement){return withFocusable.getFocusableElement()}return element}addItem(type,selectorOrElement){assert(type);let element;if(typeof selectorOrElement==="string"){element=this.root.querySelector(selectorOrElement)}else{element=selectorOrElement}if(!element){return false}element.setAttribute("focus-type",type);element.tabIndex=this.isActive()?0:-1;this.eventTracker.add(element,"blur",this.onBlur_.bind(this));this.eventTracker.add(element,"focus",this.onFocus_.bind(this));this.eventTracker.add(element,"keydown",this.onKeydown_.bind(this));this.eventTracker.add(element,"mousedown",this.onMousedown_.bind(this));return true}destroy(){this.eventTracker.removeAll()}getCustomEquivalent(_sampleElement){const focusable=this.getFirstFocusable();assert(focusable);return focusable}getElements(){return Array.from(this.root.querySelectorAll("[focus-type]")).map(FocusRow.getFocusableElement)}getEquivalentElement(sampleElement){if(this.getFocusableElements().indexOf(sampleElement)>=0){return sampleElement}const sampleFocusType=this.getTypeForElement(sampleElement);if(sampleFocusType){const sameType=this.getFirstFocusable(sampleFocusType);if(sameType){return sameType}}return this.getCustomEquivalent(sampleElement)}getFirstFocusable(type){const element=this.getFocusableElements().find((el=>!type||el.getAttribute("focus-type")===type));return element||null}getFocusableElements(){return this.getElements().filter(FocusRow.isFocusable)}getTypeForElement(element){return element.getAttribute("focus-type")||""}isActive(){return this.root.classList.contains(ACTIVE_CLASS)}makeActive(active){if(active===this.isActive()){return}this.getElements().forEach((function(element){element.tabIndex=active?0:-1}));this.root.classList.toggle(ACTIVE_CLASS,active)}onBlur_(e){if(!this.boundary_.contains(e.relatedTarget)){return}const currentTarget=e.currentTarget;if(this.getFocusableElements().indexOf(currentTarget)>=0){this.makeActive(false)}}onFocus_(e){if(this.delegate){this.delegate.onFocus(this,e)}}onMousedown_(e){if(e.button){return}const target=e.currentTarget;if(!target.disabled){target.tabIndex=0}}onKeydown_(e){const elements=this.getFocusableElements();const currentElement=FocusRow.getFocusableElement(e.currentTarget);const elementIndex=elements.indexOf(currentElement);assert(elementIndex>=0);if(this.delegate&&this.delegate.onKeydown(this,e)){return}const isShiftTab=!e.altKey&&!e.ctrlKey&&!e.metaKey&&e.shiftKey&&e.key==="Tab";if(hasKeyModifiers(e)&&!isShiftTab){return}let index=-1;let shouldStopPropagation=true;if(isShiftTab){index=elementIndex-1;if(index<0){return}}else if(e.key==="ArrowLeft"){index=elementIndex+(isRTL()?1:-1)}else if(e.key==="ArrowRight"){index=elementIndex+(isRTL()?-1:1)}else if(e.key==="Home"){index=0}else if(e.key==="End"){index=elements.length-1}else{shouldStopPropagation=false}const elementToFocus=elements[index];if(elementToFocus){this.getEquivalentElement(elementToFocus).focus();e.preventDefault()}if(shouldStopPropagation){e.stopPropagation()}}}function getTemplate$4(){return html`<!--_html_template_start_-->    <style>:host dialog{background-color:var(--cr-menu-background-color);border:none;border-radius:var(--cr-menu-border-radius,4px);box-shadow:var(--cr-menu-shadow);margin:0;min-width:128px;outline:0;padding:0;position:absolute}@media (forced-colors:active){:host dialog{border:var(--cr-border-hcm)}}:host-context([chrome-refresh-2023]){--cr-hairline:1px solid var(--color-menu-separator,
            var(--cr-fallback-color-divider));--cr-action-menu-disabled-item-color:var(--color-menu-item-foreground-disabled,
                var(--cr-fallback-color-disabled-foreground));--cr-action-menu-disabled-item-opacity:1;--cr-menu-background-color:var(--color-menu-background,
            var(--cr-fallback-color-surface));--cr-menu-background-focus-color:var(--cr-hover-background-color);--cr-menu-shadow:var(--cr-elevation-2);--cr-primary-text-color:var(--color-menu-item-foreground,
            var(--cr-fallback-color-on-surface))}:host dialog::backdrop{background-color:transparent}:host ::slotted(.dropdown-item){-webkit-tap-highlight-color:transparent;background:0 0;border:none;border-radius:0;box-sizing:border-box;color:var(--cr-primary-text-color);font:inherit;min-height:32px;padding:8px 24px;text-align:start;user-select:none;width:100%}:host ::slotted(.dropdown-item:not([hidden])){align-items:center;display:flex}:host ::slotted(.dropdown-item[disabled]){color:var(--cr-action-menu-disabled-item-color,var(--cr-primary-text-color));opacity:var(--cr-action-menu-disabled-item-opacity,.65)}:host ::slotted(.dropdown-item:not([disabled])){cursor:pointer}:host ::slotted(.dropdown-item:focus){background-color:var(--cr-menu-background-focus-color);outline:0}@media (forced-colors:active){:host ::slotted(.dropdown-item:focus){outline:var(--cr-focus-outline-hcm)}}.item-wrapper{background:var(--cr-menu-background-sheen);outline:0;padding:8px 0}:host-context([chrome-refresh-2023]) .item-wrapper{background:0 0}</style>
    <dialog id="dialog" part="dialog" on-close="onNativeDialogClose_" role="application" aria-roledescription$="[[roleDescription]]">
      <div id="wrapper" class="item-wrapper" role="menu" tabindex="-1" aria-label$="[[accessibilityLabel]]">
        <slot id="contentNode"></slot>
      </div>
    </dialog>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var AnchorAlignment;(function(AnchorAlignment){AnchorAlignment[AnchorAlignment["BEFORE_START"]=-2]="BEFORE_START";AnchorAlignment[AnchorAlignment["AFTER_START"]=-1]="AFTER_START";AnchorAlignment[AnchorAlignment["CENTER"]=0]="CENTER";AnchorAlignment[AnchorAlignment["BEFORE_END"]=1]="BEFORE_END";AnchorAlignment[AnchorAlignment["AFTER_END"]=2]="AFTER_END"})(AnchorAlignment||(AnchorAlignment={}));const DROPDOWN_ITEM_CLASS="dropdown-item";const SELECTABLE_DROPDOWN_ITEM_QUERY=`.${DROPDOWN_ITEM_CLASS}:not([hidden]):not([disabled])`;const AFTER_END_OFFSET=10;function getStartPointWithAnchor(start,end,menuLength,anchorAlignment,min,max){let startPoint=0;switch(anchorAlignment){case AnchorAlignment.BEFORE_START:startPoint=start-menuLength;break;case AnchorAlignment.AFTER_START:startPoint=start;break;case AnchorAlignment.CENTER:startPoint=(start+end-menuLength)/2;break;case AnchorAlignment.BEFORE_END:startPoint=end-menuLength;break;case AnchorAlignment.AFTER_END:startPoint=end;break}if(startPoint+menuLength>max){startPoint=end-menuLength}if(startPoint<min){startPoint=start}startPoint=Math.max(min,Math.min(startPoint,max-menuLength));return startPoint}function getDefaultShowConfig(){return{top:0,left:0,height:0,width:0,anchorAlignmentX:AnchorAlignment.AFTER_START,anchorAlignmentY:AnchorAlignment.AFTER_START,minX:0,minY:0,maxX:0,maxY:0}}class CrActionMenuElement extends PolymerElement{constructor(){super(...arguments);this.boundClose_=null;this.contentObserver_=null;this.resizeObserver_=null;this.hasMousemoveListener_=false;this.anchorElement_=null;this.lastConfig_=null}static get is(){return"cr-action-menu"}static get template(){return getTemplate$4()}static get properties(){return{accessibilityLabel:String,autoReposition:{type:Boolean,value:false},open:{type:Boolean,notify:true,value:false},roleDescription:String}}ready(){super.ready();this.addEventListener("keydown",this.onKeyDown_.bind(this));this.addEventListener("mouseover",this.onMouseover_);this.addEventListener("click",this.onClick_)}disconnectedCallback(){super.disconnectedCallback();this.removeListeners_()}fire_(eventName,detail){this.dispatchEvent(new CustomEvent(eventName,{bubbles:true,composed:true,detail:detail}))}getDialog(){return this.$.dialog}removeListeners_(){window.removeEventListener("resize",this.boundClose_);window.removeEventListener("popstate",this.boundClose_);if(this.contentObserver_){this.contentObserver_.disconnect();this.contentObserver_=null}if(this.resizeObserver_){this.resizeObserver_.disconnect();this.resizeObserver_=null}}onNativeDialogClose_(e){if(e.target!==this.$.dialog){return}this.fire_("close")}onClick_(e){if(e.target===this){this.close();e.stopPropagation()}}onKeyDown_(e){e.stopPropagation();if(e.key==="Tab"||e.key==="Escape"){this.close();if(e.key==="Tab"){this.fire_("tabkeyclose",{shiftKey:e.shiftKey})}e.preventDefault();return}if(e.key!=="Enter"&&e.key!=="ArrowUp"&&e.key!=="ArrowDown"){return}const options=Array.from(this.querySelectorAll(SELECTABLE_DROPDOWN_ITEM_QUERY));if(options.length===0){return}const focused=getDeepActiveElement();const index=options.findIndex((option=>FocusRow.getFocusableElement(option)===focused));if(e.key==="Enter"){if(index!==-1){return}if(isWindows||isMac){this.close();e.preventDefault();return}}e.preventDefault();this.updateFocus_(options,index,e.key!=="ArrowUp");if(!this.hasMousemoveListener_){this.hasMousemoveListener_=true;this.addEventListener("mousemove",(e=>{this.onMouseover_(e);this.hasMousemoveListener_=false}),{once:true})}}onMouseover_(e){const item=e.composedPath().find((el=>el.matches&&el.matches(SELECTABLE_DROPDOWN_ITEM_QUERY)));(item||this.$.wrapper).focus()}updateFocus_(options,focusedIndex,next){const numOptions=options.length;assert(numOptions>0);let index;if(focusedIndex===-1){index=next?0:numOptions-1}else{const delta=next?1:-1;index=(numOptions+focusedIndex+delta)%numOptions}options[index].focus()}close(){this.removeListeners_();this.$.dialog.close();this.open=false;if(this.anchorElement_){assert(this.anchorElement_);focusWithoutInk(this.anchorElement_);this.anchorElement_=null}if(this.lastConfig_){this.lastConfig_=null}}showAt(anchorElement,config){this.anchorElement_=anchorElement;this.anchorElement_.scrollIntoViewIfNeeded();const rect=this.anchorElement_.getBoundingClientRect();let height=rect.height;if(config&&!config.noOffset&&config.anchorAlignmentY===AnchorAlignment.AFTER_END){height-=AFTER_END_OFFSET}this.showAtPosition(Object.assign({top:rect.top,left:rect.left,height:height,width:rect.width,anchorAlignmentX:AnchorAlignment.BEFORE_END},config));this.$.wrapper.focus()}showAtPosition(config){const doc=document.scrollingElement;const scrollLeft=doc.scrollLeft;const scrollTop=doc.scrollTop;this.resetStyle_();this.$.dialog.showModal();this.open=true;config.top+=scrollTop;config.left+=scrollLeft;this.positionDialog_(Object.assign({minX:scrollLeft,minY:scrollTop,maxX:scrollLeft+doc.clientWidth,maxY:scrollTop+doc.clientHeight},config));doc.scrollTop=scrollTop;doc.scrollLeft=scrollLeft;this.addListeners_();const openedByKey=FocusOutlineManager.forDocument(document).visible;if(openedByKey){const firstSelectableItem=this.querySelector(SELECTABLE_DROPDOWN_ITEM_QUERY);if(firstSelectableItem){requestAnimationFrame((()=>{firstSelectableItem.focus()}))}}}resetStyle_(){this.$.dialog.style.left="";this.$.dialog.style.right="";this.$.dialog.style.top="0"}positionDialog_(config){this.lastConfig_=config;const c=Object.assign(getDefaultShowConfig(),config);const top=c.top;const left=c.left;const bottom=top+c.height;const right=left+c.width;const rtl=getComputedStyle(this).direction==="rtl";if(rtl){c.anchorAlignmentX*=-1}const offsetWidth=this.$.dialog.offsetWidth;const menuLeft=getStartPointWithAnchor(left,right,offsetWidth,c.anchorAlignmentX,c.minX,c.maxX);if(rtl){const menuRight=document.scrollingElement.clientWidth-menuLeft-offsetWidth;this.$.dialog.style.right=menuRight+"px"}else{this.$.dialog.style.left=menuLeft+"px"}const menuTop=getStartPointWithAnchor(top,bottom,this.$.dialog.offsetHeight,c.anchorAlignmentY,c.minY,c.maxY);this.$.dialog.style.top=menuTop+"px"}addListeners_(){this.boundClose_=this.boundClose_||(()=>{if(this.$.dialog.open){this.close()}});window.addEventListener("resize",this.boundClose_);window.addEventListener("popstate",this.boundClose_);this.contentObserver_=new FlattenedNodesObserver(this.$.contentNode,(info=>{info.addedNodes.forEach((node=>{if(node.classList&&node.classList.contains(DROPDOWN_ITEM_CLASS)&&!node.getAttribute("role")){node.setAttribute("role","menuitem")}}))}));if(this.autoReposition){this.resizeObserver_=new ResizeObserver((()=>{if(this.lastConfig_){this.positionDialog_(this.lastConfig_);this.fire_("cr-action-menu-repositioned")}}));this.resizeObserver_.observe(this.$.dialog)}}}customElements.define(CrActionMenuElement.is,CrActionMenuElement);function getTemplate$3(){return html`<!--_html_template_start_--><style include="network-shared">
  :host {
    box-sizing: border-box;
    flex: 1;
    font-family: inherit;
    font-size: 100%;
    /* Specifically for Mac OSX, harmless elsewhere. */
    line-height: 154%;
    min-height: var(--cr-section-min-height);
    padding: 0;
  }

  :host(:not([embedded])) {
    padding: 0 var(--cr-section-padding);
  }

  :host([is-disabled_]) #apnName {
    opacity: var(--cr-disabled-opacity);
  }

  #labelWrapper {
    flex: 1;
    flex-basis: 0.000000001px;
    padding-bottom: var(--cr-section-vertical-padding);
    padding-top: var(--cr-section-vertical-padding);
    text-align: start;
  }

  #label,
  #subLabel {
    display: flex;
  }

  #subLabel {
    color: var(--cros-text-color-positive);
  }

  #autoDetected {
    color: var(--cr-secondary-text-color);
    margin-inline-start: 10px;
  }
</style>

<div id="labelWrapper">
  <div id="label" aria-hidden="true">
    <div id="apnName">[[getApnDisplayName_(apn)]]</div>
    <div id="autoDetected" hidden="[[apn.id]]">
      [[i18n('apnAutoDetected')]]
    </div>
  </div>
  <div id="subLabel" class="cr-secondary-text" aria-hidden="true"
      hidden="[[!isConnected]]">
    [[i18n('OncConnected')]]
  </div>
</div>
<cr-icon-button id="actionMenuButton" class="icon-more-vert"
    on-click="onMenuButtonClicked_"
    title="[[i18n('apnMoreActionsTitle', apn.accessPointName)]]"
    focus-row-control focus-type="menu"
    aria-label="[[getAriaLabel_(apn, itemIndex, listSize, isConnected,
        isDisabled_)]]">
</cr-icon-button>

<cr-action-menu id="dotsMenu">
  <button id="detailsButton" class="dropdown-item"
      on-click="onDetailsClicked_">
    [[getDetailsMenuItemLabel_(apn)]]
  </button>
  <template is="dom-if" if="[[shouldShowDisableMenuItem_(apn)]]" restamp>
    <button id="disableButton" class="dropdown-item"
        on-click="onDisableClicked_">
      [[i18n('apnMenuDisable')]]
    </button>
  </template>
  <template is="dom-if" if="[[shouldShowEnableMenuItem_(apn)]]" restamp>
    <button id="enableButton" class="dropdown-item"
        on-click="onEnableClicked_">
      [[i18n('apnMenuEnable')]]
    </button>
  </template>
  <template is="dom-if" if="[[shouldShowRemoveMenuItem_(apn)]]" restamp>
    <button id="removeButton" class="dropdown-item"
        on-click="onRemoveClicked_">
      [[i18n('apnMenuRemove')]]
    </button>
  </template>
</cr-action-menu><!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ApnListItemBase=mixinBehaviors([I18nBehavior],PolymerElement);class ApnListItem extends ApnListItemBase{static get is(){return"apn-list-item"}static get template(){return getTemplate$3()}static get properties(){return{guid:String,apn:{type:Object},isConnected:{type:Boolean,value:false},shouldDisallowDisablingRemoving:{type:Boolean,value:false},shouldDisallowEnabling:{type:Boolean,value:false},itemIndex:Number,listSize:Number,isDisabled_:{reflectToAttribute:true,type:Boolean,computed:"computeIsDisabled_(apn)"}}}constructor(){super();this.networkConfig_=MojoInterfaceProviderImpl.getInstance().getMojoServiceRemote()}getApnDisplayName_(apn){return getApnDisplayName(this.i18n.bind(this),apn)}onMenuButtonClicked_(event){this.$.dotsMenu.showAt(event.target)}closeMenu_(){this.$.dotsMenu.close()}onDetailsClicked_(){assert$1(!!this.apn);this.closeMenu_();this.dispatchEvent(new CustomEvent("show-apn-detail-dialog",{composed:true,bubbles:true,detail:{apn:this.apn,mode:this.apn.id?ApnDetailDialogMode.EDIT:ApnDetailDialogMode.VIEW}}))}onDisableClicked_(){assert$1(this.guid);assert$1(this.apn);this.closeMenu_();if(!this.apn.id){console.error("Only custom APNs can be disabled.");return}if(this.apn.state!==ApnState.kEnabled){console.error("Only an APN that is enabled can be disabled.");return}if(this.shouldDisallowDisablingRemoving){this.dispatchEvent(new CustomEvent("show-error-toast",{bubbles:true,composed:true,detail:this.i18n("apnWarningPromptForDisableRemove")}));return}const apn=Object.assign({},this.apn);apn.state=ApnState.kDisabled;this.networkConfig_.modifyCustomApn(this.guid,apn)}onEnableClicked_(){assert$1(this.guid);assert$1(this.apn);this.closeMenu_();if(!this.apn.id){console.error("Only custom APNs can be enabled.");return}if(this.apn.state!==ApnState.kDisabled){console.error("Only an APN that is disabled can be enabled.");return}if(this.shouldDisallowEnabling){this.dispatchEvent(new CustomEvent("show-error-toast",{bubbles:true,composed:true,detail:this.i18n("apnWarningPromptForEnable")}));return}const apn=Object.assign({},this.apn);apn.state=ApnState.kEnabled;this.networkConfig_.modifyCustomApn(this.guid,apn)}onRemoveClicked_(){assert$1(this.guid);assert$1(this.apn);this.closeMenu_();if(!this.apn.id){console.error("Only custom APNs can be removed.");return}if(this.shouldDisallowDisablingRemoving){this.dispatchEvent(new CustomEvent("show-error-toast",{bubbles:true,composed:true,detail:this.i18n("apnWarningPromptForDisableRemove")}));return}this.networkConfig_.removeCustomApn(this.guid,this.apn.id)}shouldShowDisableMenuItem_(){return!!this.apn.id&&this.apn.state===ApnState.kEnabled}shouldShowEnableMenuItem_(){return!!this.apn.id&&this.apn.state===ApnState.kDisabled}shouldShowRemoveMenuItem_(){return!!this.apn.id}computeIsDisabled_(){return!!this.apn.id&&this.apn.state===ApnState.kDisabled}getDetailsMenuItemLabel_(){return this.apn.id?this.i18n("apnMenuEdit"):this.i18n("apnMenuDetails")}getAriaLabel_(){if(!this.apn){return""}let a11yLabel=this.i18n("apnA11yName",this.itemIndex+1,this.listSize,this.getApnDisplayName_(this.apn));if(!this.apn.id){a11yLabel+=" "+this.i18n("apnA11yAutoDetected")}if(this.isConnected){a11yLabel+=" "+this.i18n("apnA11yConnected")}if(this.isDisabled_){a11yLabel+=" "+this.i18n("apnA11yDisabled")}return a11yLabel}}customElements.define(ApnListItem.is,ApnListItem);function getTemplate$2(){return html`<!--_html_template_start_-->    <style>:host{-webkit-tap-highlight-color:transparent;align-items:center;cursor:pointer;display:flex;outline:0;user-select:none;--cr-checkbox-border-size:2px;--cr-checkbox-size:16px;--cr-checkbox-ripple-size:40px;--cr-checkbox-ripple-offset:calc(var(--cr-checkbox-size)/2 -
            var(--cr-checkbox-ripple-size)/2 - var(--cr-checkbox-border-size));--cr-checkbox-checked-box-color:var(--cr-checked-color);--cr-checkbox-ripple-checked-color:var(--cr-checked-color);--cr-checkbox-checked-ripple-opacity:.2;--cr-checkbox-mark-color:white;--cr-checkbox-ripple-unchecked-color:var(--google-grey-900);--cr-checkbox-unchecked-box-color:var(--google-grey-700);--cr-checkbox-unchecked-ripple-opacity:.15}@media (prefers-color-scheme:dark){:host{--cr-checkbox-checked-ripple-opacity:.4;--cr-checkbox-mark-color:var(--google-grey-900);--cr-checkbox-ripple-unchecked-color:var(--google-grey-500);--cr-checkbox-unchecked-box-color:var(--google-grey-500);--cr-checkbox-unchecked-ripple-opacity:.4}}:host-context([chrome-refresh-2023]):host{--cr-checkbox-ripple-size:32px;--cr-checkbox-mark-color:var(--color-checkbox-check,
            var(--cr-fallback-color-on-primary));--cr-checkbox-checked-box-color:var(--color-checkbox-foreground-checked,
            var(--cr-fallback-color-primary));--cr-checkbox-unchecked-box-color:var(--color-checkbox-foreground-unchecked,
            var(--cr-fallback-color-outline));--cr-checkbox-ripple-checked-color:var(--cr-active-background-color);--cr-checkbox-ripple-unchecked-color:var(--cr-active-background-color);--cr-checkbox-ripple-offset:50%;--cr-checkbox-ripple-opacity:1}:host([disabled]){cursor:initial;opacity:var(--cr-disabled-opacity);pointer-events:none}:host-context([chrome-refresh-2023]):host([disabled]){opacity:1;--cr-checkbox-checked-box-color:var(
            --color-checkbox-container-disabled,
            var(--cr-fallback-color-disabled-background));--cr-checkbox-unchecked-box-color:var(
            --color-checkbox-outline-disabled,
            var(--cr-fallback-color-disabled-background));--cr-checkbox-mark-color:var(--color-checkbox-check-disabled,
            var(--cr-fallback-color-disabled-foreground))}#checkbox{background:0 0;border:var(--cr-checkbox-border-size) solid var(--cr-checkbox-unchecked-box-color);border-radius:2px;box-sizing:border-box;cursor:pointer;display:block;flex-shrink:0;height:var(--cr-checkbox-size);isolation:isolate;margin:0;outline:0;padding:0;position:relative;transform:none;width:var(--cr-checkbox-size)}:host-context([chrome-refresh-2023]):host([disabled][checked]) #checkbox{border-color:transparent}:host-context([chrome-refresh-2023]) #hover-layer{display:none}:host-context([chrome-refresh-2023]) #checkbox:hover #hover-layer{background-color:var(--cr-hover-background-color);border-radius:50%;display:block;height:32px;left:50%;overflow:hidden;pointer-events:none;position:absolute;top:50%;transform:translate(-50%,-50%);width:32px}@media (forced-colors:active){:host(:focus) #checkbox{outline:var(--cr-focus-outline-hcm)}}:host-context([chrome-refresh-2023]) #checkbox:focus-visible{outline:2px solid var(--cr-focus-outline-color);outline-offset:2px}#checkmark{display:block;forced-color-adjust:auto;position:relative;transform:scale(0);z-index:1}#checkmark path{fill:var(--cr-checkbox-mark-color)}:host([checked]) #checkmark{transform:scale(1);transition:transform 140ms ease-out}:host([checked]) #checkbox{background:var(--cr-checkbox-checked-box-background-color,var(--cr-checkbox-checked-box-color));border-color:var(--cr-checkbox-checked-box-color)}paper-ripple{--paper-ripple-opacity:var(--cr-checkbox-ripple-opacity,
            var(--cr-checkbox-unchecked-ripple-opacity));color:var(--cr-checkbox-ripple-unchecked-color);height:var(--cr-checkbox-ripple-size);left:var(--cr-checkbox-ripple-offset);outline:var(--cr-checkbox-ripple-ring,none);pointer-events:none;top:var(--cr-checkbox-ripple-offset);transition:color linear 80ms;width:var(--cr-checkbox-ripple-size)}:host([checked]) paper-ripple{--paper-ripple-opacity:var(--cr-checkbox-ripple-opacity,
            var(--cr-checkbox-checked-ripple-opacity));color:var(--cr-checkbox-ripple-checked-color)}:host-context([dir=rtl]) paper-ripple{left:auto;right:var(--cr-checkbox-ripple-offset)}:host-context([chrome-refresh-2023]) paper-ripple{transform:translate(-50%,-50%)}:host-context([dir=rtl][chrome-refresh-2023]) paper-ripple{transform:translate(50%,-50%)}#label-container{color:var(--cr-checkbox-label-color,var(--cr-primary-text-color));padding-inline-start:var(--cr-checkbox-label-padding-start,20px);white-space:normal}:host(.label-first) #label-container{order:-1;padding-inline-end:var(--cr-checkbox-label-padding-end,20px);padding-inline-start:0}:host(.no-label) #label-container{display:none}#ariaDescription{height:0;overflow:hidden;width:0}</style>
    <div id="checkbox" tabindex$="[[tabIndex]]" role="checkbox" on-keydown="onKeyDown_" on-keyup="onKeyUp_" aria-disabled="false" aria-checked="false" aria-labelledby="label-container" aria-describedby="ariaDescription">
      
      <svg id="checkmark" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="m10.192 2.121-6.01 6.01-2.121-2.12L1 7.07l2.121 2.121.707.707.354.354 7.071-7.071-1.06-1.06Z">
      </path></svg>
      <div id="hover-layer"></div>
    </div>
    <div id="label-container" aria-hidden="true" part="label-container">
      <slot></slot>
    </div>
    <div id="ariaDescription" aria-hidden="true">[[ariaDescription]]</div>
<!--_html_template_end_-->`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrCheckboxElementBase=mixinBehaviors([PaperRippleBehavior],PolymerElement);class CrCheckboxElement extends CrCheckboxElementBase{static get is(){return"cr-checkbox"}static get template(){return getTemplate$2()}static get properties(){return{checked:{type:Boolean,value:false,reflectToAttribute:true,observer:"checkedChanged_",notify:true},disabled:{type:Boolean,value:false,reflectToAttribute:true,observer:"disabledChanged_"},ariaDescription:String,tabIndex:{type:Number,value:0,observer:"onTabIndexChanged_"}}}ready(){super.ready();this.removeAttribute("unresolved");this.addEventListener("click",this.onClick_.bind(this));this.addEventListener("pointerup",this.hideRipple_.bind(this));if(document.documentElement.hasAttribute("chrome-refresh-2023")){this.addEventListener("pointerdown",this.showRipple_.bind(this));this.addEventListener("pointerleave",this.hideRipple_.bind(this))}else{this.addEventListener("blur",this.hideRipple_.bind(this));this.addEventListener("focus",this.showRipple_.bind(this))}}focus(){this.$.checkbox.focus()}getFocusableElement(){return this.$.checkbox}checkedChanged_(){this.$.checkbox.setAttribute("aria-checked",this.checked?"true":"false")}disabledChanged_(_current,previous){if(previous===undefined&&!this.disabled){return}this.tabIndex=this.disabled?-1:0;this.$.checkbox.setAttribute("aria-disabled",this.disabled?"true":"false")}showRipple_(){if(this.noink){return}this.getRipple().showAndHoldDown()}hideRipple_(){this.getRipple().clear()}onClick_(e){if(this.disabled||e.target.tagName==="A"){return}e.stopPropagation();e.preventDefault();this.checked=!this.checked;this.dispatchEvent(new CustomEvent("change",{bubbles:true,composed:true,detail:this.checked}))}onKeyDown_(e){if(e.key!==" "&&e.key!=="Enter"){return}e.preventDefault();e.stopPropagation();if(e.repeat){return}if(e.key==="Enter"){this.click()}}onKeyUp_(e){if(e.key===" "||e.key==="Enter"){e.preventDefault();e.stopPropagation()}if(e.key===" "){this.click()}}onTabIndexChanged_(){this.removeAttribute("tabindex")}_createRipple(){this._rippleContainer=this.$.checkbox;const ripple=super._createRipple();ripple.id="ink";ripple.setAttribute("recenters","");ripple.classList.add("circle","toggle-ink");return ripple}}customElements.define(CrCheckboxElement.is,CrCheckboxElement);function getTemplate$1(){return html`<!--_html_template_start_--><style include="cr-shared-style md-select">
  cr-dialog {
    --cr-dialog-width: 416px;
  }

  .advanced-settings {
    font-size: 0.625rem;
    font-weight: 500;
    line-height: 10px;
    --cr-section-padding: 4px;
    --cr-section-min-height: 45px;
  }

  .cr-row-line {
    --cr-section-min-height: 0px;
  }

  .dropdown-section {
    margin-bottom: var(--cr-form-field-bottom-spacing);
    padding-top: 13px;
  }

  .select-field {
    width: 100%;
  }

  .checkbox-section {
    --cr-checkbox-label-padding-start: 11px;
    margin-bottom: 14px;
  }

  .default-apn-info {
    display: flex;
    margin-bottom: -5px;
    padding-top: 10px;
  }

  .default-apn-info span {
    font-size: 0.6875rem; /* 11px */
  }

  .checkbox-text-area {
    margin: 5px 0;
  }

  iron-icon[icon='cr:info-outline'] {
    --iron-icon-width: 1rem;
    --iron-icon-height: 1rem;
    --iron-icon-fill-color: var(--cr-secondary-text-color);
    margin-inline-end: 8px;
  }

  .visually-hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
</style>
<cr-dialog id="apnDetailDialog" show-on-attach>
  <div id="apnDetailDialogTitle" slot="title" aria-live="polite">
    [[getDialogTitle_(mode)]]
  </div>
  <div slot="body">
    <cr-input id="apnInput" value="{{apn_}}" label="[[i18n('apn')]]"
        type="text" invalid="[[isApnInputInvalid_]]"
        error-message="[[getApnErrorMessage_(isApnInputInvalid_, apn_,
            isMaxApnInputLengthReached_)]]"
        disabled="[[isUiElementDisabled_(UiElement.INPUT, mode)]]">
    </cr-input>
    <cr-input id="usernameInput" value="{{username_}}"
        label="[[i18n('OncCellular-APN-Username')]]" type="text"
        disabled="[[isUiElementDisabled_(UiElement.INPUT, mode)]]">
    </cr-input>
    <cr-input id="passwordInput" value="{{password_}}"
        label="[[i18n('OncCellular-APN-Password')]]" type="password"
        disabled="[[isUiElementDisabled_(UiElement.INPUT, mode)]]">
    </cr-input>
    <cr-expand-button id="advancedSettingsBtn"
        class="advanced-settings cr-row"
        expanded="{{advancedSettingsExpanded_}}"
        aria-describedby="apnDetailDialogTitle">
      <div>[[i18n('apnDetailAdvancedSettings')]]</div>
    </cr-expand-button>
    <iron-collapse opened="[[advancedSettingsExpanded_]]">
      <div id="authenticationTypeSelection" class="dropdown-section">
        <div id="authenticationTypeLabel" class="cr-form-field-label">
          [[i18n('apnDetailAuthType')]]
        </div>
        <select id="authTypeDropDown" class="select-field md-select"
            value="{{selectedAuthType_::change}}"
            disabled="[[isUiElementDisabled_(UiElement.INPUT, mode)]]"
            aria-labelledby="authenticationTypeLabel">
          <template is="dom-repeat"
              items="[[AuthenticationTypes]]">
            <option value="[[item]]"
                selected="[[isSelectedAuthType_(item)]]">
              [[getAuthTypeLocalizedLabel_(item)]]
            </option>
          </template>
        </select>
      </div>
      <div id="apnDetailApnTypesLabel" class="cr-form-field-label">
        [[i18n('apnDetailApnTypes')]]
      </div>
      <div id="checkboxContainer" class="checkbox-section">
        <cr-checkbox id="apnDefaultTypeCheckbox"
            aria-describedby="apnDetailApnTypesLabel"
            disabled="[[isUiElementDisabled_(UiElement.INPUT, mode)]]"
            checked="{{isDefaultApnType_}}">
          <div id="apnDefaultTypelabel" class="checkbox-text-area">
            [[i18n('apnDetailApnTypeDefault')]]
          </div>
        </cr-checkbox>
        <cr-checkbox id="apnAttachTypeCheckbox"
            disabled="[[isUiElementDisabled_(UiElement.INPUT, mode)]]"
            aria-describedby="apnDetailApnTypesLabel"
            checked="{{isAttachApnType_}}">
          <div id="apnAttachTypeLabel" class="checkbox-text-area">
            [[i18n('apnDetailApnTypeAttach')]]
          </div>
        </cr-checkbox>
        <template is="dom-if" if="[[shouldShowApnTypeErrorMessage_]]" restamp>
          <div id="defaultApnRequiredInfo" class="default-apn-info">
            <iron-icon icon="cr:info-outline"></iron-icon>
            <span aria-live="polite">[[i18n('apnDetailDefaultApnRequired')]]</span>
          </div>
        </template>
      </div>
      <div id="ipTypeSelection" class="dropdown-section">
        <div id="ipTypeLabel" class="cr-form-field-label">
          [[i18n('apnDetailIpType')]]
        </div>
        <select id="ipTypeDropDown" class="md-select select-field"
            value="{{selectedIpType_::change}}"
            disabled="[[isUiElementDisabled_(UiElement.INPUT, mode)]]"
            aria-labelledby="ipTypeLabel">
          <template is="dom-repeat"
              items="[[IpTypes]]">
            <option value="[[item]]"
                selected="[[isSelectedIpType_(item)]]">
              [[getIpTypeLocalizedLabel_(item)]]
            </option>
          </template>
        </select>
      </div>
    </iron-collapse>
    <div class="cr-row-line cr-row"></div>
  </div>
  <div slot="button-container">
    <template is="dom-if"
        if="[[isUiElementVisible_(UiElement.ACTION_BUTTON, mode)]]" restamp>
      <cr-button id="apnDetailCancelBtn" class="cancel-button"
          on-click="onCancelClicked_">
        [[i18n('apnDetailDialogCancel')]]
      </cr-button>
      <cr-button id="apnDetailActionBtn" class="action-button"
          on-click="onActionButtonClicked_"
          disabled="[[isUiElementDisabled_(UiElement.ACTION_BUTTON, mode,
              apn_, isApnInputInvalid_, shouldShowApnTypeErrorMessage_,
              isDefaultApnType_, isAttachApnType_)]]">
        [[getActionButtonTitle_(mode)]]
      </cr-button>
      <template is="dom-if" if="[[shouldAnnounceA11yActionButtonState_]]"
          restamp>
        <span id="actionButtonEnabledA11yText"
            class="visually-hidden" role="alert">
          [[actionButtonEnabledA11yText_]]
        </span>
      </template>
    </template>
    <template is="dom-if"
        if="[[isUiElementVisible_(UiElement.DONE_BUTTON, mode)]]" restamp>
      <cr-button id="apnDoneBtn" class="action-button"
          aria-describedby="apnInput usernameInput
              authenticationTypeSelection checkboxContainer ipTypeSelection"
          on-click="onCancelClicked_">
        [[i18n('apnDetailDialogDone')]]
      </cr-button>
    </template>
  </div>
</cr-dialog><!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const AuthenticationTypes=[ApnAuthenticationType.kAutomatic,ApnAuthenticationType.kPap,ApnAuthenticationType.kChap];const IpTypes=[ApnIpType.kAutomatic,ApnIpType.kIpv4,ApnIpType.kIpv6,ApnIpType.kIpv4Ipv6];const UiElement={INPUT:0,ACTION_BUTTON:1,DONE_BUTTON:2};const APN_NON_ASCII_REGEX=/[^\x00-\x7f]+/;const MAX_APN_INPUT_LENGTH=63;const ApnDetailDialogElementBase=mixinBehaviors([I18nBehavior],PolymerElement);class ApnDetailDialog extends ApnDetailDialogElementBase{static get is(){return"apn-detail-dialog"}static get template(){return getTemplate$1()}static get properties(){return{apnProperties:{type:Object,observer:"onApnPropertiesUpdated_"},mode:{type:Object,value:ApnDetailDialogMode.CREATE},guid:{type:String},apnList:{type:Array,value:[]},advancedSettingsExpanded_:{type:Boolean,value:false},AuthenticationTypes:{type:Array,value:AuthenticationTypes,readOnly:true},IpTypes:{type:Array,value:IpTypes,readOnly:true},UiElement:{type:Object,value:UiElement},selectedAuthType_:{type:String,value:AuthenticationTypes[0].toString()},selectedIpType_:{type:String,value:IpTypes[0].toString()},apn_:{type:String,value:"",observer:"onApnValueChanged_"},username_:{type:String,value:""},password_:{type:String,value:""},isDefaultApnType_:{type:Boolean,value:true},isAttachApnType_:{type:Boolean,value:false},isApnInputInvalid_:{type:Boolean,value:false,computed:"computeIsApnInputInvalid_(apn_, isMaxApnInputLengthReached_)"},isMaxApnInputLengthReached_:{type:Boolean,value:false},shouldShowApnTypeErrorMessage_:{type:Boolean,value:false,computed:"computeShouldShowApnTypeErrorMessage_(apnList, "+"isDefaultApnType_, isAttachApnType_)"},shouldAnnounceA11yActionButtonState_:{type:Object,value:undefined},actionButtonEnabledA11yText_:{type:String,value:"",observer:"onActionButtonEnabledStateA11yTextChanged_",computed:"computeActionButtonEnabledStateA11yText_(apn_, "+"isMaxApnInputLengthReached_, shouldShowApnTypeErrorMessage_,"+"isDefaultApnType_, isAttachApnType_)"}}}constructor(){super();this.networkConfig_=MojoInterfaceProviderImpl.getInstance().getMojoServiceRemote()}connectedCallback(){super.connectedCallback();afterNextRender(this,(function(){let element;switch(this.mode){case ApnDetailDialogMode.CREATE:case ApnDetailDialogMode.EDIT:element=this.shadowRoot.querySelector("cr-input");break;case ApnDetailDialogMode.VIEW:element=this.shadowRoot.querySelector("#apnDoneBtn");break}focusWithoutInk(element);assert$1(this.shouldAnnounceA11yActionButtonState_===undefined);this.shouldAnnounceA11yActionButtonState_=false}))}onApnPropertiesUpdated_(){this.apn_=this.apnProperties.accessPointName;this.username_=this.apnProperties.username;this.password_=this.apnProperties.password;this.selectedIpType_=this.apnProperties.ipType.toString();this.selectedAuthType_=this.apnProperties.authentication.toString();this.isDefaultApnType_=false;this.isAttachApnType_=false;for(const apnType of this.apnProperties.apnTypes){if(apnType===ApnType.kDefault){this.isDefaultApnType_=true}else if(apnType===ApnType.kAttach){this.isAttachApnType_=true}}}onApnValueChanged_(newValue,oldValue){if(oldValue){this.isMaxApnInputLengthReached_=oldValue.length>MAX_APN_INPUT_LENGTH}else{this.isMaxApnInputLengthReached_=false}this.apn_=this.apn_.substring(0,MAX_APN_INPUT_LENGTH)}computeShouldShowApnTypeErrorMessage_(){if(this.isDefaultApnType_){return false}const enabledDefaultApns=this.apnList.filter((properties=>properties.state===ApnState.kEnabled&&properties.apnTypes.includes(ApnType.kDefault)));const enabledAttachApns=this.apnList.filter((properties=>properties.state===ApnState.kEnabled&&properties.apnTypes.includes(ApnType.kAttach)));switch(this.mode){case ApnDetailDialogMode.CREATE:return enabledDefaultApns.length===0&&this.isAttachApnType_;case ApnDetailDialogMode.EDIT:if(enabledDefaultApns.some((apn=>apn.id!==this.apnProperties.id))){return false}if(this.isAttachApnType_){return true}if(enabledAttachApns.some((apn=>apn.id!==this.apnProperties.id))){return true}}return false}computeIsApnInputInvalid_(){return this.isMaxApnInputLengthReached_||APN_NON_ASCII_REGEX.test(this.apn_)}getApnErrorMessage_(){if(!this.isApnInputInvalid_){return""}if(this.isMaxApnInputLengthReached_){return`APN cannot have more than 63 characters`}return"APN cannot have non-ASCII characters"}onCancelClicked_(event){event.stopPropagation();if(this.$.apnDetailDialog.open){this.$.apnDetailDialog.close()}}onActionButtonClicked_(event){assert$1(this.guid);assert$1(this.mode!==ApnDetailDialogMode.VIEW);if(this.mode===ApnDetailDialogMode.CREATE){assert$1(!this.apnProperties);this.networkConfig_.createCustomApn(this.guid,this.getApnProperties_())}else if(this.mode===ApnDetailDialogMode.EDIT){assert$1(!!this.apnProperties.id);this.networkConfig_.modifyCustomApn(this.guid,this.getApnProperties_(this.apnProperties))}this.$.apnDetailDialog.close()}getApnProperties_(apnProperties={}){apnProperties.accessPointName=this.apn_;apnProperties.username=this.username_;apnProperties.password=this.password_;apnProperties.authentication=Number(this.selectedAuthType_);apnProperties.ipType=Number(this.selectedIpType_);apnProperties.apnTypes=this.getSelectedApnTypes_();return apnProperties}getActionButtonTitle_(){if(this.mode===ApnDetailDialogMode.EDIT){return this.i18n("apnDetailDialogSave")}return this.i18n("apnDetailDialogAdd")}computeActionButtonEnabledStateA11yText_(){const isDisabled=this.isUiElementDisabled_(UiElement.ACTION_BUTTON);if(this.mode===ApnDetailDialogMode.EDIT){return isDisabled?this.i18n("apnDetailDialogA11ySaveDisabled"):this.i18n("apnDetailDialogA11ySaveEnabled")}else if(this.mode===ApnDetailDialogMode.CREATE){return isDisabled?this.i18n("apnDetailDialogA11yAddDisabled"):this.i18n("apnDetailDialogA11yAddEnabled")}return""}onActionButtonEnabledStateA11yTextChanged_(newVal,oldVal){if(this.shouldAnnounceA11yActionButtonState_===undefined){return}if(!newVal||!oldVal){this.shouldAnnounceA11yActionButtonState_=false;return}this.shouldAnnounceA11yActionButtonState_=oldVal!==newVal}getDialogTitle_(){switch(this.mode){case ApnDetailDialogMode.CREATE:return this.i18n("apnDetailAddApnDialogTitle");case ApnDetailDialogMode.VIEW:return this.i18n("apnDetailViewApnDialogTitle");case ApnDetailDialogMode.EDIT:return this.i18n("apnDetailEditApnDialogTitle")}}getSelectedApnTypes_(){const apnTypes=[];if(this.isDefaultApnType_){apnTypes.push(ApnType.kDefault)}if(this.isAttachApnType_){apnTypes.push(ApnType.kAttach)}return apnTypes}getAuthTypeLocalizedLabel_(type){switch(type){case ApnAuthenticationType.kAutomatic:return this.i18n("apnDetailTypeAuto");case ApnAuthenticationType.kChap:return this.i18n("apnDetailAuthTypeCHAP");case ApnAuthenticationType.kPap:return this.i18n("apnDetailAuthTypePAP")}}getIpTypeLocalizedLabel_(type){switch(type){case ApnIpType.kAutomatic:return this.i18n("apnDetailTypeAuto");case ApnIpType.kIpv4:return this.i18n("apnDetailIpTypeIpv4");case ApnIpType.kIpv6:return this.i18n("apnDetailIpTypeIpv6");case ApnIpType.kIpv4Ipv6:return this.i18n("apnDetailIpTypeIpv4_Ipv6")}}isSelectedIpType_(item){return Number(this.selectedIpType_)===item}isSelectedAuthType_(item){return Number(this.selectedAuthType_)===item}isUiElementDisabled_(uiElement){switch(uiElement){case UiElement.INPUT:return this.mode===ApnDetailDialogMode.VIEW;case UiElement.ACTION_BUTTON:return this.apn_.length===0||this.isApnInputInvalid_||this.shouldShowApnTypeErrorMessage_||!this.isDefaultApnType_&&!this.isAttachApnType_}return false}isUiElementVisible_(uiElement){switch(uiElement){case UiElement.DONE_BUTTON:return this.mode===ApnDetailDialogMode.VIEW;case UiElement.ACTION_BUTTON:return this.mode===ApnDetailDialogMode.CREATE||this.mode===ApnDetailDialogMode.EDIT}return true}}customElements.define(ApnDetailDialog.is,ApnDetailDialog);function getTemplate(){return html`<!--_html_template_start_--><style include="network-shared">
  div {
    color: var(--cr-secondary-text-color);
  }

  #apnDescription {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-inline-end: 40px;
    min-height: var(--cr-section-min-height);
    padding: 0 var(--cr-section-padding) 10px var(--cr-section-padding);
  }

  iron-list {
    display: block;
    padding: 0 0 0 var(--cr-section-padding);
  }

  apn-list-item {
    align-items: center;
    border-top: var(--cr-separator-line);
    display: flex;
    min-height: var(--settings-row-min-height);
    padding: 0 20px 0 0;
  }

  #errorMessage {
    display: flex;
    margin: 30px;
    margin-inline-end: 80px;
  }

  iron-icon[icon='cr20:warning'] {
    --iron-icon-width: 1rem;
    --iron-icon-height: 1rem;
    --iron-icon-fill-color: var(--cros-text-color-warning);
    margin-inline-end: 18px;
  }

  #zeroStateText {
    border-top: var(--cr-separator-line);
    display: flex;
    margin-inline-end: 40px;
    padding: 10px var(--cr-section-padding) 10px var(--cr-section-padding);
  }

  iron-icon[icon='cr:info-outline'] {
    --iron-icon-width: 1rem;
    --iron-icon-height: 1rem;
    --iron-icon-fill-color: var(--cr-secondary-text-color);
    margin-inline-end: 10px;
  }
</style>
<div id="apnDescription" class="property-box" aria-live="assertive">
  <template is="dom-if" if="[[!shouldOmitLinks]]" restamp>
    <localized-link
        localized-string="[[i18nAdvanced('apnSettingsDescriptionWithLink')]]"
        on-link-clicked="onLearnMoreClicked_">
    </localized-link>
  </template>
  <template is="dom-if" if="[[shouldOmitLinks]]" restamp>
    <div id="descriptionNoLink" aria-live="polite">
      [[i18n('apnSettingsDescriptionNoLink')]]
    </div>
  </template>
  <template is="dom-if"
      if="[[shouldShowErrorMessage_(managedCellularProperties,
          errorState)]]" restamp>
    <div id="errorMessage">
      <span><iron-icon icon="cr20:warning"></iron-icon></span>
      <localized-link
          localized-string="[[getErrorMessage_(managedCellularProperties,
              errorState)]]">
      </localized-link>
    </div>
  </template>
</div>

<template is="dom-if"
    if="[[shouldShowZeroStateText_(managedCellularProperties, errorState)]]"
    restamp>
  <div id="zeroStateText">
    <span><iron-icon icon="cr:info-outline"></iron-icon></span>
    <div>[[i18n('apnSettingsZeroStateDescription')]]</div>
  </div>
</template>

<iron-list items="[[apns_]]"
    on-show-apn-detail-dialog="onShowApnDetailDialog_">
  <template>
    <apn-list-item
        apn="[[item]]"
        is-connected="[[isApnConnected_(index, managedCellularProperties)]]"
        should-disallow-disabling-removing="[[shouldDisallowDisablingRemoving_(item)]]"
        should-disallow-enabling="[[shouldDisallowEnabling_(item)]]"
        guid="[[guid]]"
        item-index="[[index]]"
        list-size="[[apns_.length]]">
    </apn-list-item>
  </template>
</iron-list>

<template is="dom-if" if="[[shouldShowApnDetailDialog_]]" restamp>
  <apn-detail-dialog id="apnDetailDialog"
      mode="[[apnDetailDialogMode_]]"
      guid="[[guid]]"
      apn-list="[[getCustomApns_(managedCellularProperties)]]"
      on-close="onApnDetailDialogClose_">
  </apn-detail-dialog>
</template><!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SHILL_INVALID_APN_ERROR="invalid-apn";const ApnListBase=mixinBehaviors([I18nBehavior],PolymerElement);class ApnList extends ApnListBase{static get is(){return"apn-list"}static get template(){return getTemplate()}static get properties(){return{guid:String,managedCellularProperties:{type:Object},errorState:String,shouldOmitLinks:{type:Boolean,value:false},apns_:{type:Object,value:[],computed:"computeApns_(managedCellularProperties)"},shouldShowApnDetailDialog_:{type:Boolean,value:false},apnDetailDialogMode_:{type:Object,value:ApnDetailDialogMode.CREATE}}}openApnDetailDialogInCreateMode(){this.showApnDetailDialog_(ApnDetailDialogMode.CREATE,undefined)}shouldShowZeroStateText_(){if(!this.managedCellularProperties){return true}if(this.managedCellularProperties.connectedApn){return false}if(this.errorState===SHILL_INVALID_APN_ERROR){return false}const customApnList=this.managedCellularProperties.customApnList;return!customApnList||customApnList.length===0}shouldShowErrorMessage_(){if(this.managedCellularProperties&&this.managedCellularProperties.connectedApn){return false}return this.errorState===SHILL_INVALID_APN_ERROR}getErrorMessage_(){if(!this.managedCellularProperties||!this.errorState){return""}const customApnList=this.managedCellularProperties.customApnList;if(customApnList&&customApnList.some((apn=>apn.state===ApnState.kEnabled))){return this.i18n("apnSettingsCustomApnsErrorMessage")}return this.i18n("apnSettingsDatabaseApnsErrorMessage")}computeApns_(){if(!this.managedCellularProperties){return[]}const connectedApn=this.managedCellularProperties.connectedApn;const customApnList=this.managedCellularProperties.customApnList;if(!connectedApn){return customApnList||[]}if(!customApnList||customApnList.length===0){return[connectedApn]}const connectedApnIndex=customApnList.findIndex((apn=>apn.id===connectedApn.id));if(connectedApnIndex!=-1){customApnList.splice(connectedApnIndex,1)}return[connectedApn,...customApnList]}isApnConnected_(index){return!!this.managedCellularProperties&&!!this.managedCellularProperties.connectedApn&&index===0}shouldDisallowDisablingRemoving_(currentApn){assert$1(this.managedCellularProperties);if(!currentApn.id){return true}const customApnList=this.managedCellularProperties.customApnList;if(!customApnList){return false}if(!customApnList.some((apn=>!!apn.apnTypes&&apn.apnTypes.includes(ApnType.kAttach)&&!apn.apnTypes.includes(ApnType.kDefault)&&apn.state===ApnState.kEnabled))){return false}const defaultEnabledApnList=customApnList.filter((apn=>!!apn.apnTypes&&apn.apnTypes.includes(ApnType.kDefault)&&apn.state===ApnState.kEnabled));return defaultEnabledApnList.length===1&&currentApn.id===defaultEnabledApnList[0].id}shouldDisallowEnabling_(currentApn){assert$1(this.managedCellularProperties);if(!currentApn.id){return true}const customApnList=this.managedCellularProperties.customApnList;if(!customApnList){return false}if(customApnList.some((apn=>!!apn.apnTypes&&apn.apnTypes.includes(ApnType.kDefault)&&apn.state===ApnState.kEnabled))){return false}return!!currentApn.apnTypes&&currentApn.apnTypes.includes(ApnType.kAttach)&&!currentApn.apnTypes.includes(ApnType.kDefault)}onLearnMoreClicked_(){}onShowApnDetailDialog_(event){event.stopPropagation();if(this.shouldShowApnDetailDialog_){return}const eventData=event.detail;this.showApnDetailDialog_(eventData.mode,eventData.apn)}showApnDetailDialog_(mode,apn){this.shouldShowApnDetailDialog_=true;this.apnDetailDialogMode_=mode;afterNextRender(this,(()=>{const apnDetailDialog=this.shadowRoot.querySelector("#apnDetailDialog");assert$1(!!apnDetailDialog);apnDetailDialog.apnProperties=apn}))}onApnDetailDialogClose_(event){this.shouldShowApnDetailDialog_=false}getCustomApns_(){return this.managedCellularProperties.customApnList??[]}}customElements.define(ApnList.is,ApnList);
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const NetworkListenerBehavior={observer_:null,attached(){this.observer_=new CrosNetworkConfigObserverReceiver(this);MojoInterfaceProviderImpl.getInstance().getMojoServiceRemote().addObserver(this.observer_.$.bindNewPipeAndPassRemote())},onActiveNetworksChanged(activeNetworks){},onNetworkStateChanged(network){},onNetworkStateListChanged(){},onDeviceStateListChanged(){},onVpnProvidersChanged(){},onNetworkCertificatesChanged(){},onPoliciesApplied(userhash){}};
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class PageHandlerPendingReceiver{constructor(handle){this.handle=mojo.internal.interfaceSupport.getEndpointForReceiver(handle)}bindInBrowser(scope="context"){mojo.internal.interfaceSupport.bind(this.handle,"color_change_listener.mojom.PageHandler",scope)}}class PageHandlerRemote{constructor(handle){this.proxy=new mojo.internal.interfaceSupport.InterfaceRemoteBase(PageHandlerPendingReceiver,handle);this.$=new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);this.onConnectionError=this.proxy.getConnectionErrorEventRouter()}setPage(page){this.proxy.sendMessage(0,PageHandler_SetPage_ParamsSpec.$,null,[page])}}class PageHandler{static get $interfaceName(){return"color_change_listener.mojom.PageHandler"}static getRemote(){let remote=new PageHandlerRemote;remote.$.bindNewPipeAndPassReceiver().bindInBrowser();return remote}}class PagePendingReceiver{constructor(handle){this.handle=mojo.internal.interfaceSupport.getEndpointForReceiver(handle)}bindInBrowser(scope="context"){mojo.internal.interfaceSupport.bind(this.handle,"color_change_listener.mojom.Page",scope)}}class PageRemote{constructor(handle){this.proxy=new mojo.internal.interfaceSupport.InterfaceRemoteBase(PagePendingReceiver,handle);this.$=new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);this.onConnectionError=this.proxy.getConnectionErrorEventRouter()}onColorProviderChanged(){this.proxy.sendMessage(0,Page_OnColorProviderChanged_ParamsSpec.$,null,[])}}class PageCallbackRouter{constructor(){this.helper_internal_=new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(PageRemote);this.$=new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);this.router_=new mojo.internal.interfaceSupport.CallbackRouter;this.onColorProviderChanged=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(0,Page_OnColorProviderChanged_ParamsSpec.$,null,this.onColorProviderChanged.createReceiverHandler(false));this.onConnectionError=this.helper_internal_.getConnectionErrorEventRouter()}removeListener(id){return this.router_.removeListener(id)}}const PageHandler_SetPage_ParamsSpec={$:{}};const Page_OnColorProviderChanged_ParamsSpec={$:{}};mojo.internal.Struct(PageHandler_SetPage_ParamsSpec.$,"PageHandler_SetPage_Params",[mojo.internal.StructField("page",0,0,mojo.internal.InterfaceProxy(PageRemote),null,false,0)],[[0,16]]);mojo.internal.Struct(Page_OnColorProviderChanged_ParamsSpec.$,"Page_OnColorProviderChanged_Params",[],[[0,8]]);
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let instance$1=null;class BrowserProxy{constructor(){this.callbackRouter=new PageCallbackRouter;const pageHandlerRemote=PageHandler.getRemote();pageHandlerRemote.setPage(this.callbackRouter.$.bindNewPipeAndPassRemote())}static getInstance(){return instance$1||(instance$1=new BrowserProxy)}static setInstance(newInstance){instance$1=newInstance}}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const COLORS_CSS_SELECTOR="link[href*='//theme/colors.css']";let documentInstance=null;const COLOR_PROVIDER_CHANGED="color-provider-changed";class ColorChangeUpdater{constructor(root){this.listenerId_=null;this.eventTarget=new EventTarget;assert(documentInstance===null||root!==document);this.root_=root}start(){if(this.listenerId_!==null){return}this.listenerId_=BrowserProxy.getInstance().callbackRouter.onColorProviderChanged.addListener(this.onColorProviderChanged.bind(this))}async onColorProviderChanged(){await this.refreshColorsCss();this.eventTarget.dispatchEvent(new CustomEvent(COLOR_PROVIDER_CHANGED))}async refreshColorsCss(){const colorCssNode=this.root_.querySelector(COLORS_CSS_SELECTOR);if(!colorCssNode){return false}const href=colorCssNode.getAttribute("href");if(!href){return false}const hrefURL=new URL(href,location.href);const params=new URLSearchParams(hrefURL.search);params.set("version",(new Date).getTime().toString());const newHref=`${hrefURL.origin}${hrefURL.pathname}?${params.toString()}`;const newColorsCssLink=document.createElement("link");newColorsCssLink.setAttribute("href",newHref);newColorsCssLink.rel="stylesheet";newColorsCssLink.type="text/css";const newColorsLoaded=new Promise((resolve=>{newColorsCssLink.onload=resolve}));if(this.root_===document){document.getElementsByTagName("body")[0].appendChild(newColorsCssLink)}else{this.root_.appendChild(newColorsCssLink)}await newColorsLoaded;const oldColorCssNode=document.querySelector(COLORS_CSS_SELECTOR);if(oldColorCssNode){oldColorCssNode.remove()}return true}static forDocument(){return documentInstance||(documentInstance=new ColorChangeUpdater(document))}}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class InternetDetailDialogBrowserProxyImpl{getDialogArguments(){return chrome.getVariableValue("dialogArguments")}showPortalSignin(guid){chrome.send("showPortalSignin",[guid])}closeDialog(){chrome.send("dialogClose")}static getInstance(){return instance||(instance=new InternetDetailDialogBrowserProxyImpl)}static setInstance(obj){instance=obj}}let instance=null;
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Polymer({is:"internet-detail-dialog",_template:html`<!--_html_template_start_-->
<style include="cr-page-host-style cr-shared-style network-shared
    iron-flex cros-color-overrides">
  cr-policy-network-indicator-mojo {
    margin-inline-end: 10px;
  }

  .cr-row cr-button + cr-button {
    margin-inline-start: 8px;
  }

  .title {
    font-size: 107.69%;  /* 14px / 13px */
    font-weight: 500;
    margin-inline-start: 20px;
  }

  #networkState[connected] {
    color: var(--cros-text-color-positive);
  }

  #networkState[warning] {
    color: var(--cros-text-color-warning);
  }

  .signin-button {
    margin-inline-end: 8px;
    padding: 8px 16px 8px 8px;
  }

  .signin-icon {
    background-color: var(--text-color);
    margin-inline-end: 4px;
    margin-inline-start: 0;
  }

  #apnRow {
    height: var(--cr-section-two-line-min-height);
  }

  #apnRowSublabel {
    color: var(--cros-text-color-positive);
  }

  #createCustomApnButton {
    margin-bottom: 10px;
    margin-inline-start: 20px;
  }

  #createCustomApnButton iron-icon {
    --iron-icon-fill-color: var(--text-color);
    margin-inline-end: 8px;
  }

  #createCustomApnButton[disabled] iron-icon {
    --iron-icon-fill-color: var(--disabled);
  }

  #apnTooltip {
    --paper-tooltip-background: var(--cros-tooltip-background-color);
    --paper-tooltip-text-color: var(--cros-tooltip-label-color);
    text-align: center;
  }

  #apnButtonTitle {
    display: inline-block;
  }
</style>

<!-- Title section: Icon + name + connection state. -->
<div id="title" class="cr-row first">
  <network-icon
      show-technology-badge="[[showTechnologyBadge_]]"
      network-state="[[getNetworkState_(managedProperties_)]]">
  </network-icon>
  <div id="networkName" class="title">
    [[getNameText_(managedProperties_)]]
  </div>
  <div id="networkState" class="title flex"
      connected$="[[showConnectedState_(managedProperties_)]]"
      warning$="[[showRestrictedConnectivity_(managedProperties_)]]">
    [[getStateText_(managedProperties_)]]
  </div>
  <cr-button class="signin-button" id="signinButton" on-click="onSigninTap_"
      hidden$="[[!showSignin_(managedProperties_)]]"
      disabled="[[disableSignin_(managedProperties_, disabled_)]]">
    <div class="signin-icon cr-icon icon-external"></div>
    $i18n{networkButtonSignin}
  </cr-button>
  <cr-button on-click="onForgetTap_"
      hidden$="[[!showForget_(managedProperties_)]]"
      disabled="[[disabled_]]">
    $i18n{networkButtonForget}
  </cr-button>
  <cr-button id="connectDisconnect"
      class="action-button" on-click="onConnectDisconnectClick_"
      hidden$="[[!showConnectDisconnect_(managedProperties_)]]"
      disabled="[[!enableConnectDisconnect_(managedProperties_, disabled_)]]">
    [[getConnectDisconnectText_(managedProperties_)]]
  </cr-button>
</div>

<template is="dom-if" if="[[showConfigurableSections_]]" restamp>
  <!-- SIM Info (Cellular only). -->
  <template is="dom-if" if="[[showCellularSim_(managedProperties_)]]"
      restamp>
    <div class="cr-row">
      <network-siminfo class="flex"
          network-state="[[getNetworkState_(managedProperties_)]]"
          device-state="[[deviceState_]]"
          global-policy="[[globalPolicy_]]"
          disabled="[[disabled_]]">
      </network-siminfo>
    </div>
  </template>

  <!-- Choose Mobile Network (Cellular only) -->
  <template is="dom-if"
      if="[[showCellularChooseNetwork_(managedProperties_)]]">
    <div class="cr-row">
      <network-choose-mobile class="flex" device-state="[[deviceState_]]"
          managed-properties="[[managedProperties_]]"
          disabled="[[disabled_]]">
      </network-choose-mobile>
    </div>
  </template>

  <!-- APN (Cellular only) -->
  <template is="dom-if"
      if="[[shouldShowApnList_(managedProperties_,
          isApnRevampEnabled_)]]">
    <div class="cr-row">
      <network-apnlist class="flex" editable on-apn-change="onApnChange_"
          managed-properties="[[managedProperties_]]"
          disabled="[[disabled_]]">
      </network-apnlist>
    </div>
  </template>
  <template is="dom-if"
      if="[[shouldShowApnSection_(managedProperties_,
          isApnRevampEnabled_)]]">
    <cr-expand-button id="apnRow" class="settings-box cr-row"
        expanded="{{apnExpanded_}}">
      <div id="apnRowTitle">$i18n{internetApnPageTitle}</div>
      <div id="apnRowSublabel" class="cr-secondary-text">
        [[getApnRowSublabel_(managedProperties_, apnExpanded_)]]
      </div>
    </cr-expand-button>
    <iron-collapse opened="[[apnExpanded_]]">
      <apn-list
          id="apnList"
          managed-cellular-properties="[[managedProperties_.typeProperties.cellular]]"
          guid="[[guid]]"
          error-state="[[managedProperties_.errorState]]"
          should-omit-links>
      </apn-list>
      <div id="apnButtonTitle">
        <cr-button id="createCustomApnButton"
            on-click="onCreateCustomApnClicked_"
            class="cancel-button"
            disabled="[[isNumCustomApnsLimitReached_]]">
          <iron-icon icon="cr:add"></iron-icon>
          $i18n{apnPageAddNewApn}
        </cr-button>
      </div>
      <!-- TODO(b/162365553) Add a11y support-->
      <template is="dom-if" if="[[isNumCustomApnsLimitReached_]]" restamp>
        <paper-tooltip
            id="apnTooltip"
            for="apnButtonTitle"
            position="right">
          $i18n{customApnLimitReached}
        </paper-tooltip>
      </template>
    </iron-collapse>
  </template>

  <!-- Proxy -->
  <div class="hr">
    <template is="dom-if"
        if="[[shouldShowProxyPolicyIndicator_(managedProperties_)]]">
      <div class="cr-row continuation">
        <cr-policy-network-indicator-mojo
            property="[[managedProperties_.proxySettings.type]]">
        </cr-policy-network-indicator-mojo>
        <div>$i18n{networkProxyEnforcedPolicy}</div>
      </div>
    </template>
    <div class="cr-row continuation">
      <network-proxy class="flex" use-shared-proxies
          on-proxy-change="onProxyChange_"
          managed-properties="[[managedProperties_]]"
          editable="[[!disabled_]]">
      </network-proxy>
    </div>
  </div>

  <template is="dom-if" if="[[isRememberedOrConnected_(managedProperties_)]]">
    <!-- IP Config -->
    <div class="cr-row">
      <network-ip-config class="flex"
          editable on-ip-change="onIPConfigChange_"
          managed-properties="[[managedProperties_]]"
          disabled="[[disabled_]]">
      </network-ip-config>
    </div>

    <!-- Nameservers -->
    <div class="cr-row">
      <network-nameservers class="flex" editable
          on-nameservers-change="onIPConfigChange_"
          managed-properties="[[managedProperties_]]"
          disabled="[[disabled_]]">
      </network-nameservers>
    </div>
  </template>

  <div class="cr-row">
    <!-- MAC Address. -->
    <div class="property-box single-column two-line"
        hidden$="[[!deviceState_.macAddress]]">
      <div>$i18n{OncMacAddress}</div>
      <div class="secondary">[[deviceState_.macAddress]]</div>
    </div>
  </div>

  <!-- Other properties to show if present. -->
  <template is="dom-if" if="[[hasInfoFields_(managedProperties_)]]">
    <div class="cr-row continuation">
      <network-property-list-mojo class="flex"
          fields="[[getInfoFields_(managedProperties_)]]"
          property-dict="[[managedProperties_]]"
          disabled="[[disabled_]]">
      </network-property-list-mojo>
    </div>
  </template>
</template>

<template is="dom-if" if="[[isApnRevampEnabled_]]" restamp>
  <cr-toast id="errorToast" duration="5000">
    <span id="errorToastMessage">[[errorToastMessage_]]</span>
  </cr-toast>
</template>
<!--_html_template_end_-->`,behaviors:[NetworkListenerBehavior,CrPolicyNetworkBehaviorMojo,I18nBehavior],properties:{guid:String,managedProperties_:{type:Object,observer:"managedPropertiesChanged_"},deviceState_:{type:Object,value:null},showTechnologyBadge_:{type:Boolean,value(){return loadTimeData.valueExists("showTechnologyBadge")&&loadTimeData.getBoolean("showTechnologyBadge")}},showConfigurableSections_:{type:Boolean,value:true,computed:`computeShowConfigurableSections_(deviceState_.*,\n          managedProperties_.*)`},disabled_:{type:Boolean,value:false,computed:"computeDisabled_(deviceState_.*)"},globalPolicy_:Object,apnExpanded_:Boolean,isApnRevampEnabled_:{type:Boolean,value(){return loadTimeData.valueExists("apnRevamp")&&loadTimeData.getBoolean("apnRevamp")}},isJellyEnabled_:{type:Boolean,readOnly:true,value(){return loadTimeData.valueExists("isJellyEnabled")&&loadTimeData.getBoolean("isJellyEnabled")}},isNumCustomApnsLimitReached_:{type:Boolean,notify:true,value:false,computed:"computeIsNumCustomApnsLimitReached_(managedProperties_)"},errorToastMessage_:{type:String,value:""}},didSetFocus_:false,propertiesReceived_:false,networkConfig_:null,browserProxy_:null,created(){this.networkConfig_=MojoInterfaceProviderImpl.getInstance().getMojoServiceRemote();window.CrPolicyStrings={controlledSettingPolicy:loadTimeData.getString("controlledSettingPolicy")}},ready(){this.addEventListener("show-error-toast",(event=>{this.onShowErrorToast_(event)}))},attached(){this.browserProxy_=InternetDetailDialogBrowserProxyImpl.getInstance();const dialogArgs=this.browserProxy_.getDialogArguments();if(this.isJellyEnabled_){const link=document.createElement("link");link.rel="stylesheet";link.href="chrome://theme/colors.css?sets=legacy,sys";document.head.appendChild(link);document.body.classList.add("jelly-enabled");(function(){ColorChangeUpdater.forDocument().start()})()}let type;let name;if(dialogArgs){const args=JSON.parse(dialogArgs);this.guid=args.guid||"";type=args.type||"WiFi";name=args.name||type}else{const params=new URLSearchParams(document.location.search.substring(1));this.guid=params.get("guid")||"";type=params.get("type")||"WiFi";name=params.get("name")||type}if(!this.guid){console.error("Invalid guid");this.close_()}this.propertiesReceived_=false;this.deviceState_=null;this.managedProperties_=OncMojo.getDefaultManagedProperties(OncMojo.getNetworkTypeFromString(type),this.guid,name);this.getNetworkDetails_();this.onPoliciesApplied("")},managedPropertiesChanged_(){assert$1(this.managedProperties_);if(!this.didSetFocus_&&this.showConnectDisconnect_(this.managedProperties_)){const button=this.$$("#title .action-button:not([hidden])");if(button){button.focus();this.didSetFocus_=true}}},close_(){this.browserProxy_.closeDialog()},onPoliciesApplied(userhash){this.networkConfig_.getGlobalPolicy().then((response=>{this.globalPolicy_=response.result}))},onActiveNetworksChanged(networks){if(!this.guid||!this.managedProperties_){return}if(this.managedProperties_.connectionState!=ConnectionStateType.kNotConnected||networks.find((network=>network.guid==this.guid))){this.getNetworkDetails_()}},onNetworkStateChanged(network){if(!this.guid||!this.managedProperties_){return}if(network.guid==this.guid){this.getNetworkDetails_()}},onDeviceStateListChanged(){if(!this.guid||!this.managedProperties_){return}this.getDeviceState_();this.getNetworkDetails_()},getNetworkDetails_(){assert$1(this.guid);this.networkConfig_.getManagedProperties(this.guid).then((response=>{if(!response.result){this.close_();return}this.managedProperties_=response.result;this.propertiesReceived_=true;if(!this.deviceState_){this.getDeviceState_()}}))},getDeviceState_(){if(!this.managedProperties_){return}const type=this.managedProperties_.type;this.networkConfig_.getDeviceStateList().then((response=>{const devices=response.result;this.deviceState_=devices.find((device=>device.type==type))||null;if(!this.deviceState_){this.close_()}}))},getNetworkState_(managedProperties){return OncMojo.managedPropertiesToNetworkState(managedProperties)},getDefaultConfigProperties_(){return OncMojo.getDefaultConfigProperties(this.managedProperties_.type)},setMojoNetworkProperties_(config){if(!this.propertiesReceived_||!this.guid){return}this.networkConfig_.setProperties(this.guid,config).then((response=>{if(!response.success){console.error("Unable to set properties: "+JSON.stringify(config));this.getNetworkDetails_()}}))},getStateText_(managedProperties){if(!managedProperties){return""}if(OncMojo.connectionStateIsConnected(managedProperties.connectionState)){if(this.isPortalState_(managedProperties.portalState)){return this.i18n("networkListItemSignIn")}if(managedProperties.portalState===PortalState.kPortalSuspected){return this.i18n("networkListItemConnectedLimited")}if(managedProperties.portalState===PortalState.kNoInternet){return this.i18n("networkListItemConnectedNoConnectivity")}}return this.i18n(OncMojo.getConnectionStateString(managedProperties.connectionState))},getNameText_(managedProperties){return OncMojo.getNetworkNameUnsafe(managedProperties)},isConnectedState_(managedProperties){return!!managedProperties&&OncMojo.connectionStateIsConnected(managedProperties.connectionState)},isRestrictedConnectivity_(managedProperties){return!!managedProperties&&OncMojo.isRestrictedConnectivity(managedProperties.portalState)},showConnectedState_(managedProperties){return this.isConnectedState_(managedProperties)&&!this.isRestrictedConnectivity_(managedProperties)},showRestrictedConnectivity_(managedProperties){if(!managedProperties){return false}return this.isConnectedState_(managedProperties)&&this.isRestrictedConnectivity_(managedProperties)},isRemembered_(managedProperties){return managedProperties.source!=OncSource.kNone},isRememberedOrConnected_(managedProperties){return this.isRemembered_(managedProperties)||this.isConnectedState_(managedProperties)},shouldShowApnList_(managedProperties){return!this.isApnRevampEnabled_&&managedProperties.type==NetworkType.kCellular},shouldShowApnSection_(managedProperties){return this.isApnRevampEnabled_&&managedProperties.type===NetworkType.kCellular},getApnRowSublabel_(managedProperties,apnExpanded){if(managedProperties.type!==NetworkType.kCellular||!managedProperties.typeProperties.cellular.connectedApn){return""}if(apnExpanded){return""}return getApnDisplayName(this.i18n.bind(this),managedProperties.typeProperties.cellular.connectedApn)},showCellularSim_(managedProperties){return managedProperties.type==NetworkType.kCellular&&managedProperties.typeProperties.cellular.family!="CDMA"},showCellularChooseNetwork_(managedProperties){return managedProperties.type==NetworkType.kCellular&&managedProperties.typeProperties.cellular.supportNetworkScan},showForget_(managedProperties){if(!managedProperties||managedProperties.type!=NetworkType.kWiFi){return false}return managedProperties.source!=OncSource.kNone&&!this.isPolicySource(managedProperties.source)},onForgetTap_(){this.networkConfig_.forgetNetwork(this.guid).then((response=>{if(!response.success){console.error("Forget network failed for: "+this.guid)}this.close_()}))},showSignin_(managedProperties){if(!managedProperties){return false}if(OncMojo.connectionStateIsConnected(managedProperties.connectionState)&&this.isPortalState_(managedProperties.portalState)){return true}return false},disableSignin_(managedProperties){if(this.disabled_||!managedProperties){return true}if(!OncMojo.connectionStateIsConnected(managedProperties.connectionState)){return true}return!this.isPortalState_(managedProperties.portalState)},onSigninTap_(){this.browserProxy_.showPortalSignin(this.guid)},getConnectDisconnectText_(managedProperties){if(this.showConnect_(managedProperties)){return this.i18n("networkButtonConnect")}return this.i18n("networkButtonDisconnect")},showConnectDisconnect_(managedProperties){return this.showConnect_(managedProperties)||this.showDisconnect_(managedProperties)},showConnect_(managedProperties){if(!managedProperties){return false}return managedProperties.connectable&&managedProperties.type!=NetworkType.kEthernet&&managedProperties.connectionState==ConnectionStateType.kNotConnected},showDisconnect_(managedProperties){if(!managedProperties){return false}return managedProperties.type!=NetworkType.kEthernet&&managedProperties.connectionState!=ConnectionStateType.kNotConnected},shouldShowProxyPolicyIndicator_(managedProperties){if(!managedProperties.proxySettings){return false}return this.isNetworkPolicyEnforced(managedProperties.proxySettings.type)},enableConnectDisconnect_(managedProperties){if(this.disabled_){return false}if(!this.showConnectDisconnect_(managedProperties)){return false}if(this.showConnect_(managedProperties)){return this.enableConnect_(managedProperties)}return true},enableConnect_(managedProperties){return this.showConnect_(managedProperties)},onConnectDisconnectClick_(){if(!this.managedProperties_){return}if(!this.showConnect_(this.managedProperties_)){this.networkConfig_.startDisconnect(this.guid);return}const guid=this.managedProperties_.guid;this.networkConfig_.startConnect(this.guid).then((response=>{switch(response.result){case StartConnectResult.kSuccess:break;case StartConnectResult.kInvalidState:case StartConnectResult.kCanceled:break;case StartConnectResult.kInvalidGuid:case StartConnectResult.kNotConfigured:case StartConnectResult.kBlocked:case StartConnectResult.kUnknown:console.error("Unexpected startConnect error for: "+guid+" Result: "+response.result.toString()+" Message: "+response.message);break}}))},onApnChange_(event){if(!this.propertiesReceived_){return}const config=this.getDefaultConfigProperties_();const apn=event.detail;config.typeConfig.cellular={apn:apn};this.setMojoNetworkProperties_(config)},onIPConfigChange_(event){if(!this.managedProperties_){return}const config=OncMojo.getUpdatedIPConfigProperties(this.managedProperties_,event.detail.field,event.detail.value);if(config){this.setMojoNetworkProperties_(config)}},onProxyChange_(event){if(!this.propertiesReceived_){return}const config=this.getDefaultConfigProperties_();config.proxySettings=event.detail;this.setMojoNetworkProperties_(config)},hasVisibleFields_(fields){return fields.some((field=>{const key=OncMojo.getManagedPropertyKey(field);const value=this.get(key,this.managedProperties_);return value!==undefined&&value!==""}))},hasInfoFields_(){return this.hasVisibleFields_(this.getInfoFields_())},getInfoFields_(){const fields=[];const type=this.managedProperties_.type;if(type==NetworkType.kCellular){fields.push("cellular.activationState","cellular.servingOperator.name","cellular.networkTechnology")}if(OncMojo.isRestrictedConnectivity(this.managedProperties_.portalState)){fields.push("portalState")}if(type==NetworkType.kCellular){fields.push("cellular.homeProvider.name","cellular.homeProvider.country","cellular.firmwareRevision","cellular.hardwareRevision","cellular.esn","cellular.iccid","cellular.imei","cellular.meid","cellular.min")}return fields},computeShowConfigurableSections_(){if(!this.managedProperties_||!this.deviceState_){return true}if(this.managedProperties_.type!==NetworkType.kCellular){return true}const networkState=OncMojo.managedPropertiesToNetworkState(this.managedProperties_);assert$1(networkState);return isActiveSim(networkState,this.deviceState_)},computeDisabled_(){if(!this.deviceState_||this.deviceState_.type!==NetworkType.kCellular){return false}return OncMojo.deviceIsInhibited(this.deviceState_)},isPortalState_(portalState){return portalState===PortalState.kPortal||portalState===PortalState.kProxyAuthRequired},onCreateCustomApnClicked_(){if(this.isNumCustomApnsLimitReached_){return}assert$1(!!this.guid);const apnList=this.$$("#apnList");assert$1(!!apnList);apnList.openApnDetailDialogInCreateMode()},computeIsNumCustomApnsLimitReached_(){if(!this.managedProperties_||this.managedProperties_.type!==NetworkType.kCellular||!this.managedProperties_.typeProperties||!this.managedProperties_.typeProperties.cellular){return false}const customApnList=this.managedProperties_.typeProperties.cellular.customApnList;return!!customApnList&&customApnList.length>=MAX_NUM_CUSTOM_APNS},onShowErrorToast_(event){if(!this.isApnRevampEnabled_){return}this.errorToastMessage_=event.detail;this.shadowRoot.querySelector("#errorToast").show()}});export{InternetDetailDialogBrowserProxyImpl};