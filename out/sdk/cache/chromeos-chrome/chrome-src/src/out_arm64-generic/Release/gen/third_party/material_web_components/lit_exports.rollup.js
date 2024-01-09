/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$7=globalThis,e$c=t$7.ShadowRoot&&(void 0===t$7.ShadyCSS||t$7.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$6=Symbol(),o$i=new WeakMap;let n$a=class n{constructor(t,e,o){if(this._$cssResult$=!0,o!==s$6)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const s=this.t;if(e$c&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$i.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$i.set(s,t))}return t}toString(){return this.cssText}};const r$a=t=>new n$a("string"==typeof t?t:t+"",void 0,s$6),i$9=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,s,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1]),t[0]);return new n$a(o,t,s$6)},S$1=(s,o)=>{if(e$c)s.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t$7.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o)}},c$6=e$c?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$a(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;const{is:i$8,defineProperty:e$b,getOwnPropertyDescriptor:r$9,getOwnPropertyNames:h$7,getOwnPropertySymbols:o$h,getPrototypeOf:n$9}=Object,a$2=globalThis,c$5=a$2.trustedTypes,l$4=c$5?c$5.emptyScript:"",p$2=a$2.reactiveElementPolyfillSupport,d$2=(t,s)=>t,u$4={toAttribute(t,s){switch(s){case Boolean:t=t?l$4:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},f$3=(t,s)=>!i$8(t,s),y$1={attribute:!0,type:String,converter:u$4,reflect:!1,hasChanged:f$3};Symbol.metadata??=Symbol("metadata"),a$2.litPropertyMetadata??=new WeakMap;let b$1=class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=y$1){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,s);void 0!==r&&e$b(this.prototype,t,r)}}static getPropertyDescriptor(t,s,i){const{get:e,set:h}=r$9(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t}};return{get(){return e?.call(this)},set(s){const r=e?.call(this);h.call(this,s),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y$1}static _$Ei(){if(this.hasOwnProperty(d$2("elementProperties")))return;const t=n$9(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(d$2("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d$2("properties"))){const t=this.properties,s=[...h$7(t),...o$h(t)];for(const i of s)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$6(s))}else void 0!==s&&i.push(c$6(s));return i}static _$Eu(t,s){const i=s.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$E_??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$E_?.delete(t)}_$ES(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$E_?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,s,i){this._$AK(t,i)}_$EO(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:u$4).toAttribute(s,i.type);this._$Em=t,null==r?this.removeAttribute(e):this.setAttribute(e,r),this._$Em=null}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$4;this._$Em=e,this[e]=r.fromAttribute(s,t.type),this._$Em=null}}requestUpdate(t,s,i,e=!1,r){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??f$3)(e?r:this[t],s))return;this.C(t,s,i)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,s,i){this._$AL.has(t)||this._$AL.set(t,s),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t)!0!==i.wrapped||this._$AL.has(s)||void 0===this[s]||this.C(s,this[s],i)}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$E_?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$ET()}catch(s){throw t=!1,this._$ET(),s}t&&this._$AE(s)}willUpdate(t){}_$AE(t){this._$E_?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EO(t,this[t]))),this._$ET()}updated(t){}firstUpdated(t){}};b$1.elementStyles=[],b$1.shadowRootOptions={mode:"open"},b$1[d$2("elementProperties")]=new Map,b$1[d$2("finalized")]=new Map,p$2?.({ReactiveElement:b$1}),(a$2.reactiveElementVersions??=[]).push("2.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const t$6=globalThis,i$7=t$6.trustedTypes,s$5=i$7?i$7.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$a="$lit$",h$6=`lit$${(Math.random()+"").slice(9)}$`,o$g="?"+h$6,n$8=`<${o$g}>`,r$8=document,l$3=()=>r$8.createComment(""),c$4=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a$1=Array.isArray,u$3=t=>a$1(t)||"function"==typeof t?.[Symbol.iterator],d$1="[ \t\n\f\r]",f$2=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v$1=/-->/g,_=/>/g,m$2=RegExp(`>|${d$1}(?:([^\\s"'>=/]+)(${d$1}*=${d$1}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p$1=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),b=y(2),w=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r$8.createTreeWalker(r$8,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s$5?s$5.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f$2;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f$2?"!--"===u[1]?c=v$1:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m$2):void 0!==u[3]&&(c=m$2):c===m$2?">"===u[0]?(c=r??f$2,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m$2:'"'===u[3]?g:p$1):c===g||c===p$1?c=m$2:c===v$1||c===_?c=f$2:(c=m$2,r=void 0);const x=c===m$2&&t[i+1].startsWith("/>")?" ":"";l+=c===f$2?s+n$8:d>=0?(o.push(a),s.slice(0,d)+e$a+s.slice(d)+h$6+x):s+h$6+(-2===d?i:x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e$a)){const i=v[a++],s=r.getAttribute(t).split(h$6),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t)}else t.startsWith(h$6)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h$6),s=t.length-1;if(s>0){r.textContent=i$7?i$7.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l$3()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l$3())}}}else if(8===r.nodeType)if(r.data===o$g)d.push({type:2,index:c});else{let t=-1;for(;-1!==(t=r.data.indexOf(h$6,t+1));)d.push({type:7,index:c}),t+=h$6.length-1}c++}}static createElement(t,i){const s=r$8.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c$4(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r$8).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n]}o!==l?.index&&(h=E.nextNode(),o++)}return E.currentNode=r$8,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c$4(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u$3(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c$4(this._$AH)?this._$AA.nextSibling.data=t:this.$(r$8.createTextNode(t)),this._$AH=t}g(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else{const t=new S(e,this),s=t.u(this.options);t.p(i),this.$(s),this._$AH=t}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a$1(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.k(l$3()),this.k(l$3()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c$4(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else{const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c$4(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const z={j:e$a,P:h$6,A:o$g,C:1,M:P,L:S,R:u$3,V:N,D:M,I:R,H:H,N:I,U:k,B:L},Z=t$6.litHtmlPolyfillSupport;Z?.(V,M),(t$6.litHtmlVersions??=[]).push("3.1.0");const j$1=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new M(i.insertBefore(l$3(),t),t,void 0,s??{})}return h._$AI(t),h
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */};let s$4=class s extends b$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=j$1(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return w}};s$4._$litElement$=!0,s$4["finalized"]=!0,globalThis.litElementHydrateSupport?.({LitElement:s$4});const r$7=globalThis.litElementPolyfillSupport;r$7?.({LitElement:s$4});const o$f={_$AK:(t,e,i)=>{t._$AK(e,i)},_$AL:t=>t._$AL};(globalThis.litElementVersions??=[]).push("4.0.2");
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$e=!1;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const t$5=t=>(e,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;const o$d={attribute:!0,type:String,converter:u$4,reflect:!1,hasChanged:f$3},r$6=(t=o$d,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(r.name,t),"accessor"===n){const{name:o}=r;return{set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t)},init(e){return void 0!==e&&this.C(o,void 0,t),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t)}}throw Error("Unsupported decorator location: "+n)};function n$7(t){return(e,o)=>"object"==typeof o?r$6(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,r?{...t,wrapped:!0}:t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function r$5(r){return n$7({...r,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function t$4(t){return(n,o)=>{const c="function"==typeof n?n:n[o];Object.assign(c,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e$9=(e,t,c)=>(c.configurable=!0,c.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,c),c)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function e$8(e,r){return(n,s,i)=>{const o=t=>t.renderRoot?.querySelector(e)??null;if(r){const{get:e,set:r}="object"==typeof s?n:i??(()=>{const t=Symbol();return{get(){return this[t]},set(e){this[t]=e}}})();return e$9(n,s,{get(){let t=e.call(this);return void 0===t&&(t=o(this),(null!==t||this.hasUpdated)&&r.call(this,t)),t}})}return e$9(n,s,{get(){return o(this)}})}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let e$7;function r$4(r){return(n,o)=>e$9(n,o,{get(){return(this.renderRoot??(e$7??=document.createDocumentFragment())).querySelectorAll(r)}})
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function r$3(r){return(n,e)=>e$9(n,e,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(r)??null}})
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function o$c(o){return(e,n)=>{const{slot:r,selector:s}=o??{},c="slot"+(r?`[name=${r}]`:":not([name])");return e$9(e,n,{get(){const t=this.renderRoot?.querySelector(c),e=t?.assignedElements(o)??[];return void 0===s?e:e.filter((t=>t.matches(s)))}})}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function n$6(n){return(o,r)=>{const{slot:e}=n??{},s="slot"+(e?`[name=${e}]`:":not([name])");return e$9(o,r,{get(){const t=this.renderRoot?.querySelector(s);return t?.assignedNodes(n)??[]}})}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const t$3={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$6=t=>(...e)=>({_$litDirective$:t,values:e});let i$6=class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{D:t$2}=z,i$5=o=>null===o||"object"!=typeof o&&"function"!=typeof o,e$5=(o,t)=>void 0===t?void 0!==o?._$litType$:o?._$litType$===t,l$2=o=>null!=o?._$litType$?.h,f$1=o=>void 0===o.strings,s$3=()=>document.createComment(""),r$2=(o,i,n)=>{const e=o._$AA.parentNode,l=void 0===i?o._$AB:i._$AA;if(void 0===n){const i=e.insertBefore(s$3(),l),c=e.insertBefore(s$3(),l);n=new t$2(i,c,o,o.options)}else{const t=n._$AB.nextSibling,i=n._$AM,c=i!==o;if(c){let t;n._$AQ?.(o),n._$AM=o,void 0!==n._$AP&&(t=o._$AU)!==i._$AU&&n._$AP(t)}if(t!==l||c){let o=n._$AA;for(;o!==t;){const t=o.nextSibling;e.insertBefore(o,l),o=t}}}return n},v=(o,t,i=o)=>(o._$AI(t,i),o),u$2={},m$1=(o,t=u$2)=>o._$AH=t,p=o=>o._$AH,h$5=o=>{o._$AP?.(!1,!0);let t=o._$AA;const i=o._$AB.nextSibling;for(;t!==i;){const o=t.nextSibling;t.remove(),t=o}},j=o=>{o._$AR()};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s$2=(i,t)=>{const e=i._$AN;if(void 0===e)return!1;for(const i of e)i._$AO?.(t,!1),s$2(i,t);return!0},o$b=i=>{let t,e;do{if(void 0===(t=i._$AM))break;e=t._$AN,e.delete(i),i=t}while(0===e?.size)},r$1=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(void 0===e)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),c$3(t)}};function h$4(i){void 0!==this._$AN?(o$b(this),this._$AM=i,r$1(this)):this._$AM=i}function n$5(i,t=!1,e=0){const r=this._$AH,h=this._$AN;if(void 0!==h&&0!==h.size)if(t)if(Array.isArray(r))for(let i=e;i<r.length;i++)s$2(r[i],!1),o$b(r[i]);else null!=r&&(s$2(r,!1),o$b(r));else s$2(this,i)}const c$3=i=>{i.type==t$3.CHILD&&(i._$AP??=n$5,i._$AQ??=h$4)};class f extends i$6{constructor(){super(...arguments),this._$AN=void 0}_$AT(i,t,e){super._$AT(i,t,e),r$1(this),this.isConnected=i._$AU}_$AO(i,t=!0){i!==this.isConnected&&(this.isConnected=i,i?this.reconnected?.():this.disconnected?.()),t&&(s$2(this,i),o$b(this))}setValue(t){if(f$1(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const t$1=async(t,s)=>{for await(const i of t)if(!1===await s(i))return};let s$1=class s{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}};let i$4=class i{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise((t=>this.Z=t))}resume(){this.Z?.(),this.Y=this.Z=void 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let o$a=class o extends f{constructor(){super(...arguments),this._$Cq=new s$1(this),this._$CK=new i$4}render(i,s){return w}update(i,[s,r]){if(this.isConnected||this.disconnected(),s===this._$CX)return;this._$CX=s;let n=0;const{_$Cq:o,_$CK:h}=this;return t$1(s,(async t=>{for(;h.get();)await h.get();const i=o.deref();if(void 0!==i){if(i._$CX!==s)return!1;void 0!==r&&(t=r(t,n)),i.commitValue(t,n),n++}return!0})),w}commitValue(t,i){this.setValue(t)}disconnected(){this._$Cq.disconnect(),this._$CK.pause()}reconnected(){this._$Cq.reconnect(this),this._$CK.resume()}};const h$3=e$6(o$a);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const c$2=e$6(class extends o$a{constructor(r){if(super(r),r.type!==t$3.CHILD)throw Error("asyncAppend can only be used in child expressions")}update(r,e){return this._$CJ=r,super.update(r,e)}commitValue(r,e){0===e&&j(this._$CJ);const s=r$2(this._$CJ);v(s,r)}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const d=t=>l$2(t)?t._$litType$.h:t.strings,h$2=e$6(class extends i$6{constructor(t){super(t),this.tt=new WeakMap}render(t){return[t]}update(s,[e]){const u=e$5(this.et)?d(this.et):null,h=e$5(e)?d(e):null;if(null!==u&&(null===h||u!==h)){const e=p(s).pop();let o=this.tt.get(u);if(void 0===o){const s=document.createDocumentFragment();o=j$1(T,s),o.setConnected(!1),this.tt.set(u,o)}m$1(o,[e]),r$2(o,void 0,e)}if(null!==h){if(null===u||u!==h){const t=this.tt.get(h);if(void 0!==t){const i=p(t).pop();j(s),r$2(s,void 0,i),m$1(s,[i])}}this.et=e}else this.et=void 0;return this.render(e)}});
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const r=(r,o,t)=>{for(const t of o)if(t[0]===r)return(0,t[1])();return t?.()};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e$4=e$6(class extends i$6{constructor(t){if(super(t),t.type!==t$3.ATTRIBUTE||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((s=>t[s])).join(" ")+" "}update(s,[i]){if(void 0===this.it){this.it=new Set,void 0!==s.strings&&(this.st=new Set(s.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in i)i[t]&&!this.st?.has(t)&&this.it.add(t);return this.render(i)}const r=s.element.classList;for(const t of this.it)t in i||(r.remove(t),this.it.delete(t));for(const t in i){const s=!!i[t];s===this.it.has(t)||this.st?.has(t)||(s?(r.add(t),this.it.add(t)):(r.remove(t),this.it.delete(t)))}return w}});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e$3={},i$3=e$6(class extends i$6{constructor(){super(...arguments),this.nt=e$3}render(r,t){return t()}update(t,[s,e]){if(Array.isArray(s)){if(Array.isArray(this.nt)&&this.nt.length===s.length&&s.every(((r,t)=>r===this.nt[t])))return w}else if(this.nt===s)return w;return this.nt=Array.isArray(s)?Array.from(s):s,this.render(s,e)}});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$9=o=>o??T
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function*o$8(o,t){const f="function"==typeof t;if(void 0!==o){let i=-1;for(const n of o)i>-1&&(yield f?t(i):t),i++,yield n}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i$2=e$6(class extends i$6{constructor(){super(...arguments),this.key=T}render(r,t){return this.key=r,t}update(r,[t,e]){return t!==this.key&&(m$1(r),this.key=t),e}});
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l$1=e$6(class extends i$6{constructor(r){if(super(r),r.type!==t$3.PROPERTY&&r.type!==t$3.ATTRIBUTE&&r.type!==t$3.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!f$1(r))throw Error("`live` bindings can only contain a single expression")}render(r){return r}update(i,[t]){if(t===w||t===T)return t;const o=i.element,l=i.name;if(i.type===t$3.PROPERTY){if(t===o[l])return w}else if(i.type===t$3.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(l))return w}else if(i.type===t$3.ATTRIBUTE&&o.getAttribute(l)===t+"")return w;return m$1(i),t}});
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*o$7(o,f){if(void 0!==o){let i=0;for(const t of o)yield f(t,i++)}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*o$6(o,t,e=1){const i=void 0===t?0:o;t??=o;for(let o=i;e>0?o<t:t<o;o+=e)yield o}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e$2=()=>new h$1;let h$1=class h{};const o$5=new WeakMap,n$4=e$6(class extends f{render(i){return T}update(i,[s]){const e=s!==this.G;return e&&void 0!==this.G&&this.ot(void 0),(e||this.rt!==this.lt)&&(this.G=s,this.ct=i.options?.host,this.ot(this.lt=i.element)),T}ot(t){if("function"==typeof this.G){const i=this.ct??globalThis;let s=o$5.get(i);void 0===s&&(s=new WeakMap,o$5.set(i,s)),void 0!==s.get(this.G)&&this.G.call(this.ct,void 0),s.set(this.G,t),void 0!==t&&this.G.call(this.ct,t)}else this.G.value=t}get rt(){return"function"==typeof this.G?o$5.get(this.ct??globalThis)?.get(this.G):this.G?.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u$1=(e,s,t)=>{const r=new Map;for(let l=s;l<=t;l++)r.set(e[l],l);return r},c$1=e$6(class extends i$6{constructor(e){if(super(e),e.type!==t$3.CHILD)throw Error("repeat() can only be used in text expressions")}ht(e,s,t){let r;void 0===t?t=s:void 0!==s&&(r=s);const l=[],o=[];let i=0;for(const s of e)l[i]=r?r(s,i):i,o[i]=t(s,i),i++;return{values:o,keys:l}}render(e,s,t){return this.ht(e,s,t).values}update(s,[t,r,c]){const d=p(s),{values:p$1,keys:a}=this.ht(t,r,c);if(!Array.isArray(d))return this.dt=a,p$1;const h=this.dt??=[],v$1=[];let m,y,x=0,j=d.length-1,k=0,w$1=p$1.length-1;for(;x<=j&&k<=w$1;)if(null===d[x])x++;else if(null===d[j])j--;else if(h[x]===a[k])v$1[k]=v(d[x],p$1[k]),x++,k++;else if(h[j]===a[w$1])v$1[w$1]=v(d[j],p$1[w$1]),j--,w$1--;else if(h[x]===a[w$1])v$1[w$1]=v(d[x],p$1[w$1]),r$2(s,v$1[w$1+1],d[x]),x++,w$1--;else if(h[j]===a[k])v$1[k]=v(d[j],p$1[k]),r$2(s,d[x],d[j]),j--,k++;else if(void 0===m&&(m=u$1(a,k,w$1),y=u$1(h,x,j)),m.has(h[x]))if(m.has(h[j])){const e=y.get(a[k]),t=void 0!==e?d[e]:null;if(null===t){const e=r$2(s,d[x]);v(e,p$1[k]),v$1[k]=e}else v$1[k]=v(t,p$1[k]),r$2(s,d[x],t),d[e]=null;k++}else h$5(d[j]),j--;else h$5(d[x]),x++;for(;k<=w$1;){const e=r$2(s,v$1[w$1+1]);v(e,p$1[k]),v$1[k++]=e}for(;x<=j;){const e=d[x++];null!==e&&h$5(e)}return this.dt=a,m$1(s,v$1),w}});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const n$3="important",i$1=" !"+n$3,o$4=e$6(class extends i$6{constructor(t){if(super(t),t.type!==t$3.ATTRIBUTE||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const s=t[r];return null==s?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[r]){const{style:s}=e.element;if(void 0===this.ut)return this.ut=new Set(Object.keys(r)),this.render(r);for(const t of this.ut)null==r[t]&&(this.ut.delete(t),t.includes("-")?s.removeProperty(t):s[t]=null);for(const t in r){const e=r[t];if(null!=e){this.ut.add(t);const r="string"==typeof e&&e.endsWith(i$1);t.includes("-")||r?s.setProperty(t,r?e.slice(0,-11):e,r?n$3:""):s[t]=e}}return w}});
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$3=e$6(class extends i$6{constructor(t){if(super(t),t.type!==t$3.CHILD)throw Error("templateContent can only be used in child bindings")}render(r){return this.ft===r?w:(this.ft=r,document.importNode(r.content,!0))}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let e$1=class e extends i$6{constructor(i){if(super(i),this.et=T,i.type!==t$3.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===T||null==r)return this.vt=void 0,this.et=r;if(r===w)return r;if("string"!=typeof r)throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.et)return this.vt;this.et=r;const s=[r];return s.raw=s,this.vt={_$litType$:this.constructor.resultType,strings:s,values:[]}}};e$1.directiveName="unsafeHTML",e$1.resultType=1;const o$2=e$6(e$1);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class t extends e$1{}t.directiveName="unsafeSVG",t.resultType=2;const o$1=e$6(t);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const n$2=t=>!i$5(t)&&"function"==typeof t.then,h=1073741823;class c extends f{constructor(){super(...arguments),this._$C_t=h,this._$Cwt=[],this._$Cq=new s$1(this),this._$CK=new i$4}render(...s){return s.find((t=>!n$2(t)))??w}update(s,i){const e=this._$Cwt;let r=e.length;this._$Cwt=i;const o=this._$Cq,c=this._$CK;this.isConnected||this.disconnected();for(let t=0;t<i.length&&!(t>this._$C_t);t++){const s=i[t];if(!n$2(s))return this._$C_t=t,s;t<r&&s===e[t]||(this._$C_t=h,r=0,Promise.resolve(s).then((async t=>{for(;c.get();)await c.get();const i=o.deref();if(void 0!==i){const e=i._$Cwt.indexOf(s);e>-1&&e<i._$C_t&&(i._$C_t=e,i.setValue(t))}})))}return w}disconnected(){this._$Cq.disconnect(),this._$CK.pause()}reconnected(){this._$Cq.reconnect(this),this._$CK.resume()}}const m=e$6(c);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function n$1(n,r,t){return n?r(n):t?.(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e=Symbol.for(""),o=t=>{if(t?.r===e)return t?._$litStatic$},i=t=>({_$litStatic$:t,r:e}),s=(t,...r)=>({_$litStatic$:r.reduce(((r,e,o)=>r+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(e)+t[o+1]),t[0]),r:e}),a=new Map,l=t=>(r,...e)=>{const i=e.length;let s,l;const n=[],u=[];let c,$=0,f=!1;for(;$<i;){for(c=r[$];$<i&&void 0!==(l=e[$],s=o(l));)c+=s+r[++$],f=!0;$!==i&&u.push(l),n.push(c),$++}if($===i&&n.push(r[i]),f){const t=n.join("$$lit$$");void 0===(r=a.get(t))&&(n.raw=n,a.set(t,r=n)),e=u}return t(r,...e)},n=l(x),u=l(b);export{o$a as AsyncReplaceDirective,n$a as CSSResult,i$6 as Directive,s$4 as LitElement,t$3 as PartType,b$1 as ReactiveElement,e$1 as UnsafeHTMLDirective,c as UntilDirective,o$f as _$LE,z as _$LH,S$1 as adoptStyles,c$2 as asyncAppend,h$3 as asyncReplace,h$2 as cache,r as choose,e$4 as classMap,e$2 as createRef,i$9 as css,t$5 as customElement,u$4 as defaultConverter,e$6 as directive,t$4 as eventOptions,c$6 as getCompatibleStyle,i$3 as guard,x as html,o$9 as ifDefined,o$e as isServer,o$8 as join,i$2 as keyed,s as literal,l$1 as live,o$7 as map,w as noChange,f$3 as notEqual,T as nothing,n$7 as property,e$8 as query,r$4 as queryAll,o$c as queryAssignedElements,n$6 as queryAssignedNodes,r$3 as queryAsync,o$6 as range,n$4 as ref,j$1 as render,c$1 as repeat,r$6 as standardProperty,r$5 as state,n as staticHtml,u as staticSvg,o$4 as styleMap,e$c as supportsAdoptingStyleSheets,b as svg,o$3 as templateContent,r$a as unsafeCSS,o$2 as unsafeHTML,o$1 as unsafeSVG,i as unsafeStatic,m as until,n$1 as when,l as withStatic};