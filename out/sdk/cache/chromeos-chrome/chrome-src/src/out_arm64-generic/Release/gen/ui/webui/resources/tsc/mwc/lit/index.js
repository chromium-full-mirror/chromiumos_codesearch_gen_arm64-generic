/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$6=window,e$e=t$6.ShadowRoot&&(void 0===t$6.ShadyCSS||t$6.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$7=Symbol(),n$c=new WeakMap;let o$j=class o{constructor(t,e,n){if(this._$cssResult$=!0,n!==s$7)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const s=this.t;if(e$e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$c.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$c.set(s,t))}return t}toString(){return this.cssText}};const r$5=t=>new o$j("string"==typeof t?t:t+"",void 0,s$7),i$9=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o$j(n,t,s$7)},S$1=(s,n)=>{e$e?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$6.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n)}))},c$6=e$e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$5(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var s$6;const e$d=window,r$4=e$d.trustedTypes,h$6=r$4?r$4.emptyScript:"",o$i=e$d.reactiveElementPolyfillSupport,n$b={toAttribute(t,i){switch(i){case Boolean:t=t?h$6:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},a$3=(t,i)=>i!==t&&(i==i||t==t),l$8={attribute:!0,type:String,converter:n$b,reflect:!1,hasChanged:a$3},d$2="finalized";let u$4=class u extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e))})),t}static createProperty(t,i=l$8){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$8}static finalize(){if(this.hasOwnProperty(d$2))return!1;this[d$2]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c$6(i))}else void 0!==i&&s.push(c$6(i));return s}static _$Ep(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])}))}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$EO(t,i,s=l$8){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$b).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$b;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a$3)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek()}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s)}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};u$4[d$2]=!0,u$4.elementProperties=new Map,u$4.elementStyles=[],u$4.shadowRootOptions={mode:"open"},null==o$i||o$i({ReactiveElement:u$4}),(null!==(s$6=e$d.reactiveElementVersions)&&void 0!==s$6?s$6:e$d.reactiveElementVersions=[]).push("1.6.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var t$5;const i$8=window,s$5=i$8.trustedTypes,e$c=s$5?s$5.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$h="$lit$",n$a=`lit$${(Math.random()+"").slice(9)}$`,l$7="?"+n$a,h$5=`<${l$7}>`,r$3=document,d$1=()=>r$3.createComment(""),u$3=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c$5=Array.isArray,v=t=>c$5(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),a$2="[ \t\n\f\r]",f$1=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m$2=/>/g,p$1=RegExp(`>|${a$2}(?:([^\\s"'>=/]+)(${a$2}*=${a$2}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,w=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=w(1),b=w(2),T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),E=new WeakMap,C=r$3.createTreeWalker(r$3,129,null,!1),P=(t,i)=>{const s=t.length-1,l=[];let r,d=2===i?"<svg>":"",u=f$1;for(let i=0;i<s;i++){const s=t[i];let e,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f$1?"!--"===c[1]?u=_:void 0!==c[1]?u=m$2:void 0!==c[2]?(y.test(c[2])&&(r=RegExp("</"+c[2],"g")),u=p$1):void 0!==c[3]&&(u=p$1):u===p$1?">"===c[0]?(u=null!=r?r:f$1,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,e=c[1],u=void 0===c[3]?p$1:'"'===c[3]?$:g):u===$||u===g?u=p$1:u===_||u===m$2?u=f$1:(u=p$1,r=void 0);const w=u===p$1&&t[i+1].startsWith("/>")?" ":"";d+=u===f$1?s+h$5:v>=0?(l.push(e),s.slice(0,v)+o$h+s.slice(v)+n$a+w):s+n$a+(-2===v?(l.push(void 0),i):w)}const c=d+(t[s]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==e$c?e$c.createHTML(c):c,l]};class V{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,u=0;const c=t.length-1,v=this.parts,[a,f]=P(t,i);if(this.el=V.createElement(a,e),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(h=C.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(o$h)||i.startsWith(n$a)){const s=f[u++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+o$h).split(n$a),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?k:"?"===i[1]?I:"@"===i[1]?L:R})}else v.push({type:6,index:r})}for(const i of t)h.removeAttribute(i)}if(y.test(h.tagName)){const t=h.textContent.split(n$a),i=t.length-1;if(i>0){h.textContent=s$5?s$5.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],d$1()),C.nextNode(),v.push({type:2,index:++r});h.append(t[i],d$1())}}}else if(8===h.nodeType)if(h.data===l$7)v.push({type:2,index:r});else{let t=-1;for(;-1!==(t=h.data.indexOf(n$a,t+1));)v.push({type:7,index:r}),t+=n$a.length-1}r++}}static createElement(t,i){const s=r$3.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const d=u$3(i)?void 0:i._$litDirective$;return(null==r?void 0:r.constructor)!==d&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===d?r=void 0:(r=new d(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=N(t,r._$AS(t,i.values),r,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:r$3).importNode(s,!0);C.currentNode=o;let n=C.nextNode(),l=0,h=0,d=e[0];for(;void 0!==d;){if(l===d.index){let i;2===d.type?i=new M(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new z(n,this,t)),this._$AV.push(i),d=e[++h]}l!==(null==d?void 0:d.index)&&(n=C.nextNode(),l++)}return C.currentNode=r$3,o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class M{constructor(t,i,s,e){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),u$3(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==A&&u$3(this._$AH)?this._$AA.nextSibling.data=t:this.$(r$3.createTextNode(t)),this._$AH=t}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=V.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else{const t=new S(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t}}_$AC(t){let i=E.get(t.strings);return void 0===i&&E.set(t.strings,i=new V(t)),i}T(t){c$5(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new M(this.k(d$1()),this.k(d$1()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class R{constructor(t,i,s,e,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=N(this,t,i,0),n=!u$3(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else{const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=N(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!u$3(h)||h!==this._$AH[l]),h===A?t=A:t!==A&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h}n&&!e&&this.j(t)}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class k extends R{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===A?void 0:t}}const H=s$5?s$5.emptyScript:"";class I extends R{constructor(){super(...arguments),this.type=4}j(t){t&&t!==A?this.element.setAttribute(this.name,H):this.element.removeAttribute(this.name)}}class L extends R{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5}_$AI(t,i=this){var s;if((t=null!==(s=N(this,t,i,0))&&void 0!==s?s:A)===T)return;const e=this._$AH,o=t===A&&e!==A||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A&&(e===A||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const Z={O:o$h,P:n$a,A:l$7,C:1,M:P,L:S,D:v,R:N,I:M,V:R,H:I,N:L,U:k,F:z},j=i$8.litHtmlPolyfillSupport;null==j||j(V,M),(null!==(t$5=i$8.litHtmlVersions)&&void 0!==t$5?t$5:i$8.litHtmlVersions=[]).push("2.7.4");const B=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new M(i.insertBefore(d$1(),t),t,void 0,null!=s?s:{})}return l._$AI(t),l
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */};var l$6,o$g;const r$2=u$4;let s$4=class s extends u$4{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=B(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return T}};s$4.finalized=!0,s$4._$litElement$=!0,null===(l$6=globalThis.litElementHydrateSupport)||void 0===l$6||l$6.call(globalThis,{LitElement:s$4});const n$9=globalThis.litElementPolyfillSupport;null==n$9||n$9({LitElement:s$4});const h$4={_$AK:(t,e,i)=>{t._$AK(e,i)},_$AL:t=>t._$AL};(null!==(o$g=globalThis.litElementVersions)&&void 0!==o$g?o$g:globalThis.litElementVersions=[]).push("3.3.2");
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$f=!1;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e$b=e=>n=>"function"==typeof n?((e,n)=>(customElements.define(e,n),n))(e,n):((e,n)=>{const{kind:t,elements:s}=n;return{kind:t,elements:s,finisher(n){customElements.define(e,n)}}})(e,n)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;const i$7=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,i)}},e$a=(i,e,n)=>{e.constructor.createProperty(n,i)};function n$8(n){return(t,o)=>void 0!==o?e$a(n,t,o):i$7(n,t)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function t$4(t){return n$8({...t,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$e=({finisher:e,descriptor:t})=>(o,n)=>{var r;if(void 0===n){const n=null!==(r=o.originalKey)&&void 0!==r?r:o.key,i=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(i.finisher=function(t){e(t,n)}),i}{const r=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(r,n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function e$9(e){return o$e({finisher:(r,t)=>{Object.assign(r.prototype[t],e)}})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function i$6(i,n){return o$e({descriptor:o=>{const t={get(){var o,n;return null!==(n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==n?n:null},enumerable:!0,configurable:!0};if(n){const n="symbol"==typeof o?Symbol():"__"+o;t.get=function(){var o,t;return void 0===this[n]&&(this[n]=null!==(t=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==t?t:null),this[n]}}return t}})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function e$8(e){return o$e({descriptor:r=>({get(){var r,o;return null!==(o=null===(r=this.renderRoot)||void 0===r?void 0:r.querySelectorAll(e))&&void 0!==o?o:[]},enumerable:!0,configurable:!0})})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function e$7(e){return o$e({descriptor:r=>({async get(){var r;return await this.updateComplete,null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(e)},enumerable:!0,configurable:!0})})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n$7;const e$6=null!=(null===(n$7=window.HTMLSlotElement)||void 0===n$7?void 0:n$7.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));function l$5(n){const{slot:l,selector:t}=null!=n?n:{};return o$e({descriptor:o=>({get(){var o;const r="slot"+(l?`[name=${l}]`:":not([name])"),i=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(r),s=null!=i?e$6(i,n):[];return t?s.filter((o=>o.matches(t))):s},enumerable:!0,configurable:!0})})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function o$d(o,n,r){let l,s=o;return"object"==typeof o?(s=o.slot,l=o):l={flatten:n},r?l$5({slot:s,flatten:n,selector:r}):o$e({descriptor:e=>({get(){var e,t;const o="slot"+(s?`[name=${s}]`:":not([name])"),n=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(o);return null!==(t=null==n?void 0:n.assignedNodes(l))&&void 0!==t?t:[]},enumerable:!0,configurable:!0})})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const t$3={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$5=t=>(...e)=>({_$litDirective$:t,values:e});let i$5=class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:l$4}=Z,t$2=o=>null===o||"object"!=typeof o&&"function"!=typeof o,n$6=(o,l)=>void 0===l?void 0!==(null==o?void 0:o._$litType$):(null==o?void 0:o._$litType$)===l,e$4=o=>void 0===o.strings,c$4=()=>document.createComment(""),r$1=(o,t,i)=>{var n;const d=o._$AA.parentNode,v=void 0===t?o._$AB:t._$AA;if(void 0===i){const t=d.insertBefore(c$4(),v),n=d.insertBefore(c$4(),v);i=new l$4(t,n,o,o.options)}else{const l=i._$AB.nextSibling,t=i._$AM,e=t!==o;if(e){let l;null===(n=i._$AQ)||void 0===n||n.call(i,o),i._$AM=o,void 0!==i._$AP&&(l=o._$AU)!==t._$AU&&i._$AP(l)}if(l!==v||e){let o=i._$AA;for(;o!==l;){const l=o.nextSibling;d.insertBefore(o,v),o=l}}}return i},u$2=(o,l,t=o)=>(o._$AI(l,t),o),f={},s$3=(o,l=f)=>o._$AH=l,m$1=o=>o._$AH,p=o=>{var l;null===(l=o._$AP)||void 0===l||l.call(o,!1,!0);let t=o._$AA;const i=o._$AB.nextSibling;for(;t!==i;){const o=t.nextSibling;t.remove(),t=o}},a$1=o=>{o._$AR()};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s$2=(i,t)=>{var e,o;const r=i._$AN;if(void 0===r)return!1;for(const i of r)null===(o=(e=i)._$AO)||void 0===o||o.call(e,t,!1),s$2(i,t);return!0},o$c=i=>{let t,e;do{if(void 0===(t=i._$AM))break;e=t._$AN,e.delete(i),i=t}while(0===(null==e?void 0:e.size))},r=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(void 0===e)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),l$3(t)}};function n$5(i){void 0!==this._$AN?(o$c(this),this._$AM=i,r(this)):this._$AM=i}function h$3(i,t=!1,e=0){const r=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(t)if(Array.isArray(r))for(let i=e;i<r.length;i++)s$2(r[i],!1),o$c(r[i]);else null!=r&&(s$2(r,!1),o$c(r));else s$2(this,i)}const l$3=i=>{var t,s,o,r;i.type==t$3.CHILD&&(null!==(t=(o=i)._$AP)&&void 0!==t||(o._$AP=h$3),null!==(s=(r=i)._$AQ)&&void 0!==s||(r._$AQ=n$5))};let c$3=class c extends i$5{constructor(){super(...arguments),this._$AN=void 0}_$AT(i,t,e){super._$AT(i,t,e),r(this),this.isConnected=i._$AU}_$AO(i,t=!0){var e,r;i!==this.isConnected&&(this.isConnected=i,i?null===(e=this.reconnected)||void 0===e||e.call(this):null===(r=this.disconnected)||void 0===r||r.call(this)),t&&(s$2(this,i),o$c(this))}setValue(t){if(e$4(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}};
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const t$1=async(t,s)=>{for await(const i of t)if(!1===await s(i))return};let s$1=class s{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}};let i$4=class i{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){var t;null!==(t=this.Y)&&void 0!==t||(this.Y=new Promise((t=>this.Z=t)))}resume(){var t;null===(t=this.Z)||void 0===t||t.call(this),this.Y=this.Z=void 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let o$b=class o extends c$3{constructor(){super(...arguments),this._$Cq=new s$1(this),this._$CK=new i$4}render(i,s){return T}update(i,[s,r]){if(this.isConnected||this.disconnected(),s===this._$CX)return;this._$CX=s;let n=0;const{_$Cq:o,_$CK:h}=this;return t$1(s,(async t=>{for(;h.get();)await h.get();const i=o.deref();if(void 0!==i){if(i._$CX!==s)return!1;void 0!==r&&(t=r(t,n)),i.commitValue(t,n),n++}return!0})),T}commitValue(t,i){this.setValue(t)}disconnected(){this._$Cq.disconnect(),this._$CK.pause()}reconnected(){this._$Cq.reconnect(this),this._$CK.resume()}};const h$2=e$5(o$b);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const c$2=e$5(class extends o$b{constructor(r){if(super(r),r.type!==t$3.CHILD)throw Error("asyncAppend can only be used in child expressions")}update(r,e){return this._$CJ=r,super.update(r,e)}commitValue(r,e){0===e&&a$1(this._$CJ);const s=r$1(this._$CJ);u$2(s,r)}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const d=e$5(class extends i$5{constructor(t){super(t),this.tt=new WeakMap}render(t){return[t]}update(s,[e]){if(n$6(this.et)&&(!n$6(e)||this.et.strings!==e.strings)){const e=m$1(s).pop();let o=this.tt.get(this.et.strings);if(void 0===o){const s=document.createDocumentFragment();o=B(A,s),o.setConnected(!1),this.tt.set(this.et.strings,o)}s$3(o,[e]),r$1(o,void 0,e)}if(n$6(e)){if(!n$6(this.et)||this.et.strings!==e.strings){const t=this.tt.get(e.strings);if(void 0!==t){const i=m$1(t).pop();a$1(s),r$1(s,void 0,i),s$3(s,[i])}}this.et=e}else this.et=void 0;return this.render(e)}});
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$a=(o,r,n)=>{for(const n of r)if(n[0]===o)return(0,n[1])();return null==n?void 0:n()};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$9=e$5(class extends i$5{constructor(t){var i;if(super(t),t.type!==t$3.ATTRIBUTE||"class"!==t.name||(null===(i=t.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(i,[s]){var r,o;if(void 0===this.it){this.it=new Set,void 0!==i.strings&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in s)s[t]&&!(null===(r=this.nt)||void 0===r?void 0:r.has(t))&&this.it.add(t);return this.render(s)}const e=i.element.classList;this.it.forEach((t=>{t in s||(e.remove(t),this.it.delete(t))}));for(const t in s){const i=!!s[t];i===this.it.has(t)||(null===(o=this.nt)||void 0===o?void 0:o.has(t))||(i?(e.add(t),this.it.add(t)):(e.remove(t),this.it.delete(t)))}return T}});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e$3={},i$3=e$5(class extends i$5{constructor(){super(...arguments),this.st=e$3}render(r,t){return t()}update(t,[s,e]){if(Array.isArray(s)){if(Array.isArray(this.st)&&this.st.length===s.length&&s.every(((r,t)=>r===this.st[t])))return T}else if(this.st===s)return T;return this.st=Array.isArray(s)?Array.from(s):s,this.render(s,e)}});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l$2=l=>null!=l?l:A
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function*o$8(o,t){const f="function"==typeof t;if(void 0!==o){let i=-1;for(const n of o)i>-1&&(yield f?t(i):t),i++,yield n}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i$2=e$5(class extends i$5{constructor(){super(...arguments),this.key=A}render(r,t){return this.key=r,t}update(r,[t,e]){return t!==this.key&&(s$3(r),this.key=t),e}});
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l$1=e$5(class extends i$5{constructor(r){if(super(r),r.type!==t$3.PROPERTY&&r.type!==t$3.ATTRIBUTE&&r.type!==t$3.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!e$4(r))throw Error("`live` bindings can only contain a single expression")}render(r){return r}update(i,[t]){if(t===T||t===A)return t;const o=i.element,l=i.name;if(i.type===t$3.PROPERTY){if(t===o[l])return T}else if(i.type===t$3.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(l))return T}else if(i.type===t$3.ATTRIBUTE&&o.getAttribute(l)===t+"")return T;return s$3(i),t}});
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*o$7(o,f){if(void 0!==o){let i=0;for(const t of o)yield f(t,i++)}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*o$6(o,l,n=1){const t=void 0===l?0:o;null!=l||(l=o);for(let o=t;n>0?o<l:l<o;o+=n)yield o}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e$2=()=>new o$5;let o$5=class o{};const h$1=new WeakMap,n$4=e$5(class extends c$3{render(t){return A}update(t,[s]){var e;const o=s!==this.G;return o&&void 0!==this.G&&this.ot(void 0),(o||this.rt!==this.lt)&&(this.G=s,this.ct=null===(e=t.options)||void 0===e?void 0:e.host,this.ot(this.lt=t.element)),A}ot(i){var t;if("function"==typeof this.G){const s=null!==(t=this.ct)&&void 0!==t?t:globalThis;let e=h$1.get(s);void 0===e&&(e=new WeakMap,h$1.set(s,e)),void 0!==e.get(this.G)&&this.G.call(this.ct,void 0),e.set(this.G,i),void 0!==i&&this.G.call(this.ct,i)}else this.G.value=i}get rt(){var i,t,s;return"function"==typeof this.G?null===(t=h$1.get(null!==(i=this.ct)&&void 0!==i?i:globalThis))||void 0===t?void 0:t.get(this.G):null===(s=this.G)||void 0===s?void 0:s.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u$1=(e,s,t)=>{const r=new Map;for(let l=s;l<=t;l++)r.set(e[l],l);return r},c$1=e$5(class extends i$5{constructor(e){if(super(e),e.type!==t$3.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,s,t){let r;void 0===t?t=s:void 0!==s&&(r=s);const l=[],o=[];let i=0;for(const s of e)l[i]=r?r(s,i):i,o[i]=t(s,i),i++;return{values:o,keys:l}}render(e,s,t){return this.dt(e,s,t).values}update(s,[t,r,c]){var d;const a=m$1(s),{values:p$1,keys:v}=this.dt(t,r,c);if(!Array.isArray(a))return this.ht=v,p$1;const h=null!==(d=this.ht)&&void 0!==d?d:this.ht=[],m=[];let y,x,j=0,k=a.length-1,w=0,A=p$1.length-1;for(;j<=k&&w<=A;)if(null===a[j])j++;else if(null===a[k])k--;else if(h[j]===v[w])m[w]=u$2(a[j],p$1[w]),j++,w++;else if(h[k]===v[A])m[A]=u$2(a[k],p$1[A]),k--,A--;else if(h[j]===v[A])m[A]=u$2(a[j],p$1[A]),r$1(s,m[A+1],a[j]),j++,A--;else if(h[k]===v[w])m[w]=u$2(a[k],p$1[w]),r$1(s,a[j],a[k]),k--,w++;else if(void 0===y&&(y=u$1(v,w,A),x=u$1(h,j,k)),y.has(h[j]))if(y.has(h[k])){const e=x.get(v[w]),t=void 0!==e?a[e]:null;if(null===t){const e=r$1(s,a[j]);u$2(e,p$1[w]),m[w]=e}else m[w]=u$2(t,p$1[w]),r$1(s,a[j],t),a[e]=null;w++}else p(a[k]),k--;else p(a[j]),j++;for(;w<=A;){const e=r$1(s,m[A+1]);u$2(e,p$1[w]),m[w++]=e}for(;j<=k;){const e=a[j++];null!==e&&p(e)}return this.ht=v,s$3(s,m),T}});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i$1="important",n$3=" !"+i$1,o$4=e$5(class extends i$5{constructor(t){var e;if(super(t),t.type!==t$3.ATTRIBUTE||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const s=t[r];return null==s?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[r]){const{style:s}=e.element;if(void 0===this.ut){this.ut=new Set;for(const t in r)this.ut.add(t);return this.render(r)}this.ut.forEach((t=>{null==r[t]&&(this.ut.delete(t),t.includes("-")?s.removeProperty(t):s[t]="")}));for(const t in r){const e=r[t];if(null!=e){this.ut.add(t);const r="string"==typeof e&&e.endsWith(n$3);t.includes("-")||r?s.setProperty(t,r?e.slice(0,-11):e,r?i$1:""):s[t]=e}}return T}});
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$3=e$5(class extends i$5{constructor(t){if(super(t),t.type!==t$3.CHILD)throw Error("templateContent can only be used in child bindings")}render(r){return this.vt===r?T:(this.vt=r,document.importNode(r.content,!0))}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let e$1=class e extends i$5{constructor(i){if(super(i),this.et=A,i.type!==t$3.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===A||null==r)return this.ft=void 0,this.et=r;if(r===T)return r;if("string"!=typeof r)throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.et)return this.ft;this.et=r;const s=[r];return s.raw=s,this.ft={_$litType$:this.constructor.resultType,strings:s,values:[]}}};e$1.directiveName="unsafeHTML",e$1.resultType=1;const o$2=e$5(e$1);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class t extends e$1{}t.directiveName="unsafeSVG",t.resultType=2;const o$1=e$5(t);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const n$2=t=>!t$2(t)&&"function"==typeof t.then,h=1073741823;class c extends c$3{constructor(){super(...arguments),this._$C_t=h,this._$Cwt=[],this._$Cq=new s$1(this),this._$CK=new i$4}render(...s){var i;return null!==(i=s.find((t=>!n$2(t))))&&void 0!==i?i:T}update(s,i){const r=this._$Cwt;let e=r.length;this._$Cwt=i;const o=this._$Cq,c=this._$CK;this.isConnected||this.disconnected();for(let t=0;t<i.length&&!(t>this._$C_t);t++){const s=i[t];if(!n$2(s))return this._$C_t=t,s;t<e&&s===r[t]||(this._$C_t=h,e=0,Promise.resolve(s).then((async t=>{for(;c.get();)await c.get();const i=o.deref();if(void 0!==i){const r=i._$Cwt.indexOf(s);r>-1&&r<i._$C_t&&(i._$C_t=r,i.setValue(t))}})))}return T}disconnected(){this._$Cq.disconnect(),this._$CK.pause()}reconnected(){this._$Cq.reconnect(this),this._$CK.resume()}}const m=e$5(c);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function n$1(n,o,r){return n?o():null==r?void 0:r()}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e=Symbol.for(""),l=t=>{if((null==t?void 0:t.r)===e)return null==t?void 0:t._$litStatic$},o=t=>({_$litStatic$:t,r:e}),i=(t,...r)=>({_$litStatic$:r.reduce(((r,e,l)=>r+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(e)+t[l+1]),t[0]),r:e}),s=new Map,a=t=>(r,...e)=>{const o=e.length;let i,a;const n=[],u=[];let c,$=0,f=!1;for(;$<o;){for(c=r[$];$<o&&void 0!==(a=e[$],i=l(a));)c+=i+r[++$],f=!0;$!==o&&u.push(a),n.push(c),$++}if($===o&&n.push(r[o]),f){const t=n.join("$$lit$$");void 0===(r=s.get(t))&&(n.raw=n,s.set(t,r=n)),e=u}return t(r,...e)},n=a(x),u=a(b);export{o$b as AsyncReplaceDirective,o$j as CSSResult,i$5 as Directive,s$4 as LitElement,t$3 as PartType,u$4 as ReactiveElement,e$1 as UnsafeHTMLDirective,c as UntilDirective,r$2 as UpdatingElement,h$4 as _$LE,Z as _$LH,S$1 as adoptStyles,c$2 as asyncAppend,h$2 as asyncReplace,d as cache,o$a as choose,o$9 as classMap,e$2 as createRef,i$9 as css,e$b as customElement,n$b as defaultConverter,e$5 as directive,e$9 as eventOptions,c$6 as getCompatibleStyle,i$3 as guard,x as html,l$2 as ifDefined,o$f as isServer,o$8 as join,i$2 as keyed,i as literal,l$1 as live,o$7 as map,T as noChange,a$3 as notEqual,A as nothing,n$8 as property,i$6 as query,e$8 as queryAll,l$5 as queryAssignedElements,o$d as queryAssignedNodes,e$7 as queryAsync,o$6 as range,n$4 as ref,B as render,c$1 as repeat,t$4 as state,n as staticHtml,u as staticSvg,o$4 as styleMap,e$e as supportsAdoptingStyleSheets,b as svg,o$3 as templateContent,r$5 as unsafeCSS,o$2 as unsafeHTML,o$1 as unsafeSVG,o as unsafeStatic,m as until,n$1 as when,a as withStatic};