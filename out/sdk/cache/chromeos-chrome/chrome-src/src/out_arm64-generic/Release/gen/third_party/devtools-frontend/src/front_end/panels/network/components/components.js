import*as e from"../../../ui/components/helpers/helpers.js";import*as t from"../../../ui/lit-html/lit-html.js";import*as r from"../../../core/sdk/sdk.js";import*as s from"../../../core/i18n/i18n.js";import*as i from"../../../core/host/host.js";import*as o from"../../../ui/components/icon_button/icon_button.js";import*as a from"../../../third_party/chromium/client-variations/client-variations.js";import*as n from"../../../core/platform/platform.js";import*as d from"../../../ui/components/buttons/buttons.js";import*as l from"../forward/forward.js";import*as h from"../../../core/common/common.js";import*as c from"../../../core/root/root.js";import*as u from"../../../models/persistence/persistence.js";import*as p from"../../../models/workspace/workspace.js";import*as m from"../../../ui/components/input/input.js";import*as g from"../../../ui/components/legacy_wrapper/legacy_wrapper.js";import*as v from"../../../ui/legacy/legacy.js";import*as f from"../../sources/sources.js";import*as w from"../../../models/issues_manager/issues_manager.js";import*as R from"../../../ui/components/report_view/report_view.js";const y=new CSSStyleSheet;y.replaceSync(":host{display:inline}.editable{cursor:text;overflow-wrap:anywhere;min-height:18px;line-height:18px;min-width:0.5em;background:transparent;border:none;border-radius:4px;outline:none;display:inline-block;font-family:var(--monospace-font-family);font-size:var(--monospace-font-size);&:hover{border:1px solid var(--sys-color-neutral-outline)}&:focus{border:1px solid var(--sys-color-state-focus-ring)}}.editable::selection{color:var(--sys-color-on-tonal-container);background-color:var(--sys-color-tonal-container)}\n/*# sourceURL=EditableSpan.css */\n");const{render:b,html:k}=t;class S extends HTMLElement{static litTagName=t.literal`devtools-editable-span`;#e=this.attachShadow({mode:"open"});#t=this.#r.bind(this);#s="";connectedCallback(){this.#e.adoptedStyleSheets=[y],this.#e.addEventListener("focusin",this.#i.bind(this)),this.#e.addEventListener("keydown",this.#o.bind(this)),this.#e.addEventListener("paste",this.#a.bind(this)),this.#e.addEventListener("input",this.#n.bind(this))}set data(t){this.#s=t.value,e.ScheduledRender.scheduleRender(this,this.#t)}get value(){return this.#e.querySelector("span")?.innerText||""}set value(e){this.#s=e;const t=this.#e.querySelector("span");t&&(t.innerText=e)}#o(e){"Enter"===e.key&&(e.preventDefault(),e.target?.blur())}#n(e){this.#s=e.target.innerText}#i(e){const t=e.target,r=window.getSelection(),s=document.createRange();s.selectNodeContents(t),r?.removeAllRanges(),r?.addRange(s)}#a(e){const t=e;if(e.preventDefault(),t.clipboardData){const e=t.clipboardData.getData("text/plain"),r=this.#e.getSelection()?.getRangeAt(0);if(!r)return;r.deleteContents();const s=document.createTextNode(e);r.insertNode(s),r.selectNodeContents(s),r.collapse(!1);const i=window.getSelection();i?.removeAllRanges(),i?.addRange(r)}}#r(){if(!e.ScheduledRender.isScheduledRender(this))throw new Error("HeaderSectionRow render was not scheduled");b(k`<span contenteditable="true" class="editable" tabindex="0" .innerText=${this.#s}></span>`,this.#e,{host:this})}focus(){requestAnimationFrame((()=>{const e=this.#e.querySelector(".editable");e?.focus()}))}}e.CustomElements.defineComponent("devtools-editable-span",S);var x=Object.freeze({__proto__:null,EditableSpan:S});const $=new CSSStyleSheet;$.replaceSync(':host{display:block}.row{display:flex;line-height:20px;padding-left:8px;gap:12px;user-select:text}.row.header-editable{font-family:var(--monospace-font-family);font-size:var(--monospace-font-size)}.header-name{color:var(--sys-color-on-surface);font-weight:400;width:30%;min-width:160px;max-width:240px;flex-shrink:0;text-transform:capitalize;overflow-wrap:break-word}.header-name,\n.header-value{&::selection{color:var(--sys-color-on-tonal-container);background-color:var(--sys-color-tonal-container)}}.header-name.pseudo-header{text-transform:none}.header-editable .header-name{color:var(--sys-color-token-property-special)}.row.header-deleted .header-name{color:var(--sys-color-token-subtle)}.header-value{display:flex;overflow-wrap:anywhere;margin-inline-end:14px}.header-badge-text{font-variant:small-caps;font-weight:500;white-space:pre-wrap;word-break:break-all;text-transform:none}.header-badge{display:inline;background-color:var(--sys-color-error);color:var(--sys-color-on-error);border-radius:100vh;padding-left:6px;padding-right:6px}.call-to-action{background-color:var(--sys-color-neutral-container);padding:8px;border-radius:5px;margin:4px}.call-to-action-body{padding:6px 0;margin-left:9.5px;border-left:2px solid var(--issue-color-yellow);padding-left:18px;line-height:20px}.call-to-action .explanation{font-weight:bold}.call-to-action code{font-size:90%}.call-to-action .example .comment::before{content:" — "}.link,\n.devtools-link{color:var(--sys-color-primary);text-decoration:underline;cursor:pointer;outline-offset:2px}.explanation .link{font-weight:normal}.inline-icon{vertical-align:middle}.row-flex-icon{margin:2px 5px 0}.header-value code{display:block;white-space:pre-wrap;font-size:90%;color:var(--sys-color-token-subtle)}x-link .inline-icon{padding-right:3px}.header-highlight{background-color:var(--sys-color-yellow-container)}.header-warning{color:var(--sys-color-error)}.header-overridden{background-color:var(--sys-color-tertiary-container);border-left:3px solid var(--sys-color-tertiary);padding-left:5px}.header-deleted{background-color:var(--sys-color-surface-error);border-left:3px solid var(--sys-color-error-bright);color:var(--sys-color-token-subtle);text-decoration:line-through}.header-highlight.header-overridden{background-color:var(--sys-color-yellow-container);border-left:3px solid var(--sys-color-tertiary);padding-left:5px}.inline-button{vertical-align:middle}.row .inline-button{opacity:0%;visibility:hidden;transition:opacity 200ms;padding-left:2px}.row.header-overridden:focus-within .inline-button,\n.row.header-overridden:hover .inline-button{opacity:100%;visibility:visible}.row:hover .inline-button.enable-editing{opacity:100%;visibility:visible}.flex-right{margin-left:auto}.flex-columns{flex-direction:column}\n/*# sourceURL=HeaderSectionRow.css */\n');const{render:T,html:H}=t,E={activeClientExperimentVariation:"Active `client experiment variation IDs`.",activeClientExperimentVariationIds:"Active `client experiment variation IDs` that trigger server-side behavior.",decoded:"Decoded:",editHeader:"Override header",headerNamesOnlyLetters:"Header names should contain only letters, digits, hyphens or underscores",learnMore:"Learn more",learnMoreInTheIssuesTab:"Learn more in the issues tab",reloadPrompt:"Refresh the page/request for these changes to take effect",removeOverride:"Remove this header override"},N=s.i18n.registerUIStrings("panels/network/components/HeaderSectionRow.ts",E),q=s.i18n.getLocalizedString.bind(void 0,N),C=new URL("../../../Images/bin.svg",import.meta.url).toString(),I=new URL("../../../Images/edit.svg",import.meta.url).toString(),O=e=>/^[a-z0-9_\-]+$/i.test(e),V=(e,t)=>e?.replaceAll(/\s/g," ")===t?.replaceAll(/\s/g," ");class L extends Event{static eventName="headeredited";headerName;headerValue;constructor(e,t){super(L.eventName,{}),this.headerName=e,this.headerValue=t}}class A extends Event{static eventName="headerremoved";headerName;headerValue;constructor(e,t){super(A.eventName,{}),this.headerName=e,this.headerValue=t}}class U extends Event{static eventName="enableheaderediting";constructor(){super(U.eventName,{})}}class D extends HTMLElement{static litTagName=t.literal`devtools-header-section-row`;#e=this.attachShadow({mode:"open"});#d=null;#t=this.#r.bind(this);#l=!1;#h=!0;connectedCallback(){this.#e.adoptedStyleSheets=[$]}set data(t){this.#d=t.header,this.#l=void 0!==this.#d.originalValue&&this.#d.value!==this.#d.originalValue,this.#h=O(this.#d.name),e.ScheduledRender.scheduleRender(this,this.#t)}#r(){if(!e.ScheduledRender.isScheduledRender(this))throw new Error("HeaderSectionRow render was not scheduled");if(!this.#d)return;const r=t.Directives.classMap({row:!0,"header-highlight":Boolean(this.#d.highlight),"header-overridden":Boolean(this.#d.isOverride)||this.#l,"header-editable":Boolean(this.#d.valueEditable),"header-deleted":Boolean(this.#d.isDeleted)}),a=t.Directives.classMap({"header-name":!0,"pseudo-header":this.#d.name.startsWith(":")}),n=t.Directives.classMap({"header-value":!0,"header-warning":Boolean(this.#d.headerValueIncorrect),"flex-columns":"x-client-data"===this.#d.name&&!this.#d.isResponseHeader}),d=this.#d.nameEditable&&this.#d.valueEditable,l=this.#d.nameEditable||this.#d.isDeleted||this.#l;T(H`
      <div class=${r}>
        <div class=${a}>
          ${this.#d.headerNotSet?H`<div class="header-badge header-badge-text">${s.i18n.lockedString("not-set")}</div> `:t.nothing}
          ${d&&!this.#h?H`<${o.Icon.Icon.litTagName} class="inline-icon disallowed-characters" title=${E.headerNamesOnlyLetters} .data=${{iconName:"cross-circle-filled",width:"16px",height:"16px",color:"var(--icon-error)"}}>
            </${o.Icon.Icon.litTagName}>`:t.nothing}
          ${d&&!this.#d.isDeleted?H`<${S.litTagName}
              @focusout=${this.#c}
              @keydown=${this.#o}
              @input=${this.#u}
              @paste=${this.#u}
              .data=${{value:this.#d.name}}
            ></${S.litTagName}>`:this.#d.name}:
        </div>
        <div
          class=${n}
          @copy=${()=>i.userMetrics.actionTaken(i.UserMetrics.Action.NetworkPanelCopyValue)}
        >
          ${this.#p()}
        </div>
        ${l?H`<${o.Icon.Icon.litTagName} class="row-flex-icon flex-right" title=${E.reloadPrompt} .data=${{iconName:"info",width:"16px",height:"16px",color:"var(--icon-default)"}}>
          </${o.Icon.Icon.litTagName}>`:t.nothing}
      </div>
      ${this.#m(this.#d.blockedDetails)}
    `,this.#e,{host:this}),this.#d.highlight&&this.scrollIntoView({behavior:"auto"})}#p(){return this.#d?"x-client-data"!==this.#d.name||this.#d.isResponseHeader?this.#d.isDeleted||!this.#d.valueEditable?H`
      ${this.#d.value||""}
      ${this.#g(this.#d)}
      ${this.#d.isResponseHeader&&!this.#d.isDeleted?H`
        <${d.Button.Button.litTagName}
          title=${q(E.editHeader)}
          .size=${"TINY"}
          .iconUrl=${I}
          .variant=${"round"}
          .iconWidth=${"16px"}
          .iconHeight=${"16px"}
          @click=${()=>{this.dispatchEvent(new U)}}
          class="enable-editing inline-button"
        ></${d.Button.Button.litTagName}>
      `:t.nothing}
    `:H`
      <${S.litTagName}
        @focusout=${this.#v}
        @input=${this.#f}
        @paste=${this.#f}
        @keydown=${this.#o}
        .data=${{value:this.#d.value||""}}
      ></${S.litTagName}>
      ${this.#g(this.#d)}
      <${d.Button.Button.litTagName}
        title=${q(E.removeOverride)}
        .size=${"TINY"}
        .iconUrl=${C}
        .variant=${"round"}
        .iconWidth=${"13px"}
        .iconHeight=${"13px"}
        class="remove-header inline-button"
        @click=${this.#w}
      ></${d.Button.Button.litTagName}>
    `:this.#R(this.#d):t.nothing}#R(e){const t=a.parseClientVariations(e.value||""),r=a.formatClientVariations(t,q(E.activeClientExperimentVariation),q(E.activeClientExperimentVariationIds));return H`
      <div>${e.value||""}</div>
      <div>${q(E.decoded)}</div>
      <code>${r}</code>
    `}focus(){requestAnimationFrame((()=>{const e=this.#e.querySelector(".header-name devtools-editable-span");e?.focus()}))}#g(e){if("set-cookie"===e.name&&e.setCookieBlockedReasons){const t=e.setCookieBlockedReasons.map(r.NetworkRequest.setCookieBlockedReasonToUiString).join("\n");return H`
        <${o.Icon.Icon.litTagName} class="row-flex-icon" title=${t} .data=${{iconName:"warning-filled",color:"var(--icon-warning)",width:"16px",height:"16px"}}>
        </${o.Icon.Icon.litTagName}>
      `}return t.nothing}#m(e){return e?H`
      <div class="call-to-action">
        <div class="call-to-action-body">
          <div class="explanation">${e.explanation()}</div>
          ${e.examples.map((e=>H`
            <div class="example">
              <code>${e.codeSnippet}</code>
              ${e.comment?H`
                <span class="comment">${e.comment()}</span>
              `:""}
            </div>
          `))}
          ${this.#y(e)}
        </div>
      </div>
    `:t.nothing}#y(e){return e?.reveal?H`
        <div class="devtools-link" @click=${e.reveal}>
          <${o.Icon.Icon.litTagName} class="inline-icon" .data=${{iconName:"issue-exclamation-filled",color:"var(--icon-warning)",width:"16px",height:"16px"}}>
          </${o.Icon.Icon.litTagName}
          >${q(E.learnMoreInTheIssuesTab)}
        </div>
      `:e?.link?H`
        <x-link href=${e.link.url} class="link">
          <${o.Icon.Icon.litTagName} class="inline-icon" .data=${{iconName:"open-externally",color:"var(--icon-link)",width:"20px",height:"20px"}}>
          </${o.Icon.Icon.litTagName}
          >${q(E.learnMore)}
        </x-link>
      `:t.nothing}#v(t){const r=t.target;if(!this.#d)return;const s=r.value.trim();V(s,this.#d.value?.trim())||(this.#d.value=s,this.dispatchEvent(new L(this.#d.name,s)),e.ScheduledRender.scheduleRender(this,this.#t));const i=window.getSelection();i?.removeAllRanges()}#c(t){const r=t.target;if(!this.#d)return;const s=n.StringUtilities.toLowerCaseString(r.value.trim());""===s?r.value=this.#d.name:V(s,this.#d.name.trim())||(this.#d.name=s,this.dispatchEvent(new L(s,this.#d.value||"")),e.ScheduledRender.scheduleRender(this,this.#t));const i=window.getSelection();i?.removeAllRanges()}#w(){if(!this.#d)return;const e=this.#e.querySelector(".header-value devtools-editable-span");this.#d.originalValue&&(e.value=this.#d?.originalValue),this.dispatchEvent(new A(this.#d.name,this.#d.value||""))}#o(e){const t=e,r=e.target;"Escape"===t.key&&(e.consume(),r.matches(".header-name devtools-editable-span")?(r.value=this.#d?.name||"",this.#u(e)):r.matches(".header-value devtools-editable-span")&&(r.value=this.#d?.value||"",this.#f(e)),r.blur())}#u(t){const r=t.target,s=O(r.value);this.#h!==s&&(this.#h=s,e.ScheduledRender.scheduleRender(this,this.#t))}#f(t){const r=t.target,s=void 0!==this.#d?.originalValue&&!V(this.#d?.originalValue||"",r.value);this.#l!==s&&(this.#l=s,this.#d&&(this.#d.highlight=!1),e.ScheduledRender.scheduleRender(this,this.#t))}}e.CustomElements.defineComponent("devtools-header-section-row",D);var F=Object.freeze({__proto__:null,isValidHeaderName:O,compareHeaders:V,HeaderEditedEvent:L,HeaderRemovedEvent:A,EnableHeaderEditingEvent:U,HeaderSectionRow:D});const M=new CSSStyleSheet;M.replaceSync(':host{display:block}devtools-header-section-row:last-of-type{margin-bottom:10px}devtools-header-section-row:first-of-type{margin-top:2px}.call-to-action{background-color:var(--sys-color-neutral-container);padding:8px;border-radius:5px;margin:4px}.call-to-action-body{padding:6px 0;margin-left:9.5px;border-left:2px solid var(--issue-color-yellow);padding-left:18px;line-height:20px}.call-to-action .explanation{font-weight:bold}.call-to-action code{font-size:90%}.call-to-action .example .comment::before{content:" — "}.link,\n.devtools-link{color:var(--sys-color-primary);text-decoration:underline;cursor:pointer;outline-offset:2px}.explanation .link{font-weight:normal}.inline-icon{vertical-align:middle}@media (forced-colors: active){.link,\n  .devtools-link{color:linktext;text-decoration-color:linktext}}\n/*# sourceURL=RequestHeaderSection.css */\n');const{render:P,html:_}=t,B={learnMore:"Learn more",provisionalHeadersAreShownDisableCache:"Provisional headers are shown. Disable cache to see full headers.",onlyProvisionalHeadersAre:"Only provisional headers are available because this request was not sent over the network and instead was served from a local cache, which doesn’t store the original request headers. Disable cache to see full request headers.",provisionalHeadersAreShown:"Provisional headers are shown."},W=s.i18n.registerUIStrings("panels/network/components/RequestHeaderSection.ts",B),z=s.i18n.getLocalizedString.bind(void 0,W);class j extends HTMLElement{static litTagName=t.literal`devtools-request-header-section`;#e=this.attachShadow({mode:"open"});#b;#k=[];connectedCallback(){this.#e.adoptedStyleSheets=[M]}set data(e){this.#b=e.request,this.#k=this.#b.requestHeaders().map((e=>({name:n.StringUtilities.toLowerCaseString(e.name),value:e.value}))),this.#k.sort(((e,t)=>n.StringUtilities.compare(e.name,t.name))),e.toReveal?.section===l.UIRequestLocation.UIHeaderSection.Request&&this.#k.filter((t=>t.name===e.toReveal?.header?.toLowerCase())).forEach((e=>{e.highlight=!0})),this.#r()}#r(){this.#b&&P(_`
      ${this.#S()}
      ${this.#k.map((e=>_`
        <${D.litTagName} .data=${{header:e}}></${D.litTagName}>
      `))}
    `,this.#e,{host:this})}#S(){if(!this.#b||void 0!==this.#b.requestHeadersText())return t.nothing;let e,r="";return this.#b.cachedInMemory()||this.#b.cached()?(e=z(B.provisionalHeadersAreShownDisableCache),r=z(B.onlyProvisionalHeadersAre)):e=z(B.provisionalHeadersAreShown),_`
      <div class="call-to-action">
        <div class="call-to-action-body">
          <div class="explanation" title=${r}>
            <${o.Icon.Icon.litTagName} class="inline-icon" .data=${{iconName:"warning-filled",color:"var(--icon-warning)",width:"16px",height:"16px"}}>
            </${o.Icon.Icon.litTagName}>
            ${e} <x-link href="https://developer.chrome.com/docs/devtools/network/reference/#provisional-headers" class="link">${z(B.learnMore)}</x-link>
          </div>
        </div>
      </div>
    `}}e.CustomElements.defineComponent("devtools-request-header-section",j);var K=Object.freeze({__proto__:null,RequestHeaderSection:j});const G=new CSSStyleSheet;G.replaceSync(":host{display:block}devtools-header-section-row:last-of-type{margin-bottom:10px}devtools-header-section-row:first-of-type{margin-top:2px}.add-header-button{margin:-4px 0 10px 5px}\n/*# sourceURL=ResponseHeaderSection.css */\n");const{render:Y,html:J}=t,X={addHeader:"Add header",chooseThisOptionIfTheResourceAnd:"Choose this option if the resource and the document are served from the same site.",onlyChooseThisOptionIfAn:"Only choose this option if an arbitrary website including this resource does not impose a security risk.",thisDocumentWasBlockedFrom:"The document was blocked from loading in a popup opened by a sandboxed iframe because this document specified a cross-origin opener policy.",toEmbedThisFrameInYourDocument:"To embed this frame in your document, the response needs to enable the cross-origin embedder policy by specifying the following response header:",toUseThisResourceFromADifferent:"To use this resource from a different origin, the server needs to specify a cross-origin resource policy in the response headers:",toUseThisResourceFromADifferentOrigin:"To use this resource from a different origin, the server may relax the cross-origin resource policy response header:",toUseThisResourceFromADifferentSite:"To use this resource from a different site, the server may relax the cross-origin resource policy response header:"},Q=s.i18n.registerUIStrings("panels/network/components/ResponseHeaderSection.ts",X),Z=s.i18n.getLocalizedString.bind(void 0,Q),ee=s.i18n.getLazilyComputedLocalizedString.bind(void 0,Q),te=new URL("../../../Images/plus.svg",import.meta.url).toString(),re="ResponseHeaderSection";class se extends HTMLElement{static litTagName=t.literal`devtools-response-header-section`;#e=this.attachShadow({mode:"open"});#b;#x=[];#$=[];#T=null;#H=[];#E=!1;connectedCallback(){this.#e.adoptedStyleSheets=[G]}set data(e){this.#b=e.request;const t=this.#b.sortedResponseHeaders.concat(this.#b.setCookieHeaders);t.sort((function(e,t){return n.StringUtilities.compare(e.name.toLowerCase(),t.name.toLowerCase())})),this.#x=t.map((e=>({name:n.StringUtilities.toLowerCaseString(e.name),value:e.value.replace(/\s/g," ")})));const r=[];if(this.#b.wasBlocked()){const e=ie.get(this.#b.blockedReason());if(e){if(w.RelatedIssue.hasIssueOfCategory(this.#b,w.Issue.IssueCategory.CrossOriginEmbedderPolicy)){const t=()=>{i.userMetrics.issuesPanelOpenedFrom(i.UserMetrics.IssueOpener.LearnMoreLinkCOEP),this.#b&&w.RelatedIssue.reveal(this.#b,w.Issue.IssueCategory.CrossOriginEmbedderPolicy)};e.blockedDetails&&(e.blockedDetails.reveal=t)}r.push(e)}}this.#x=function(e,t){let r=0,s=0;const i=[];for(;r<e.length&&s<t.length;)e[r].name<t[s].name?i.push({...e[r++],headerNotSet:!1}):e[r].name>t[s].name?i.push({...t[s++],headerNotSet:!0}):i.push({...t[s++],...e[r++],headerNotSet:!1});for(;r<e.length;)i.push({...e[r++],headerNotSet:!1});for(;s<t.length;)i.push({...t[s++],headerNotSet:!0});return i}(this.#x,r);const s=this.#b.blockedResponseCookies(),o=new Map(s?.map((e=>[e.cookieLine.replace(/\s/g," "),e.blockedReasons])));for(const e of this.#x)if("set-cookie"===e.name&&e.value){const t=o.get(e.value);t&&(e.setCookieBlockedReasons=t)}e.toReveal?.section===l.UIRequestLocation.UIHeaderSection.Response&&this.#x.filter((t=>V(t.name,e.toReveal?.header?.toLowerCase()))).forEach((e=>{e.highlight=!0}));const a=this.#b.getAssociatedData(re);a?this.#$=a:(this.#$=this.#x.map((e=>({name:e.name,value:e.value,originalValue:e.value}))),this.#N()),this.#q(),this.#b.setAssociatedData(re,this.#$),this.#r()}#C(){this.#b&&(this.#E=!1,this.#$=this.#x.map((e=>({name:e.name,value:e.value,originalValue:e.value}))),this.#N(),this.#b.setAssociatedData(re,this.#$))}async#q(){if(this.#b){if(this.#T=u.NetworkPersistenceManager.NetworkPersistenceManager.instance().getHeadersUISourceCodeFromUrl(this.#b.url()),!this.#T)return this.#C(),void this.#r();try{const e=await this.#T.requestContent();if(this.#H=JSON.parse(e.content||"[]"),!this.#H.every(u.NetworkPersistenceManager.isHeaderOverride))throw"Type mismatch after parsing";this.#E=c.Runtime.experiments.isEnabled(c.Runtime.ExperimentName.HEADER_OVERRIDES)&&h.Settings.Settings.instance().moduleSetting("persistenceNetworkOverridesEnabled").get();for(const e of this.#$)e.valueEditable=this.#E}catch(e){console.error("Failed to parse",this.#T?.url()||"source code file","for locally overriding headers."),this.#C()}finally{this.#r()}}}#N(){if(!this.#b||0===this.#b.originalResponseHeaders.length)return;const e=new Map;for(const t of this.#b?.originalResponseHeaders||[]){const r=n.StringUtilities.toLowerCaseString(t.name),s=e.get(r);s?s.push(t.value.replace(/\s/g," ")):e.set(r,[t.value.replace(/\s/g," ")])}const t=new Map;for(const e of this.#x){if(e.headerNotSet)continue;const r=t.get(e.name);r?r.push(e.value||""):t.set(e.name,[e.value||""])}const r=(e,t,r)=>{const s=t.get(e),i=r.get(e);if(!s||!i||s.length!==i.length)return!0;s.sort(),i.sort();for(let e=0;e<s.length;e++)if(!V(s[e],i[e]))return!0;return!1};for(const s of t.keys())"set-cookie"!==s&&r(s,t,e)&&this.#$.filter((e=>V(e.name,s))).forEach((e=>{e.isOverride=!0}));this.#$.filter((e=>"set-cookie"===e.name)).forEach((e=>{void 0===this.#b?.originalResponseHeaders.find((t=>"set-cookie"===n.StringUtilities.toLowerCaseString(t.name)&&V(t.value,e.value)))&&(e.isOverride=!0)}))}#I(e){const t=e.target;if(void 0===t.dataset.index)return;const r=Number(t.dataset.index);this.#O(e.headerName,e.headerValue,r),i.userMetrics.actionTaken(i.UserMetrics.Action.HeaderOverrideHeaderEdited)}#V(e){const t=u.NetworkPersistenceManager.NetworkPersistenceManager.instance().rawPathFromUrl(e,!0),r=t.lastIndexOf("/");return h.ParsedURL.ParsedURL.substring(t,r+1)}#L(){this.#T?.setWorkingCopy(JSON.stringify(this.#H,null,2)),this.#T?.commitWorkingCopy()}#A(e,t,r){for(let s=this.#H.length-1;s>=0;s--){const i=this.#H[s];if(i.applyTo!==e)continue;const o=i.headers.findIndex((e=>V(e.name,t)&&V(e.value,r)));if(!(o<0))return i.headers.splice(o,1),void(0===i.headers.length&&this.#H.splice(s,1))}}#U(e){const t=e.target;if(void 0===t.dataset.index||!this.#b)return;const r=Number(t.dataset.index),s=this.#V(this.#b.url());this.#A(s,e.headerName,e.headerValue),this.#L(),this.#$[r].isDeleted=!0,this.#r(),i.userMetrics.actionTaken(i.UserMetrics.Action.HeaderOverrideHeaderRemoved)}#O(e,t,r){if(!this.#b)return;0===this.#b.originalResponseHeaders.length&&(this.#b.originalResponseHeaders=this.#b.sortedResponseHeaders.map((e=>({...e}))));const s=this.#$[r].name,i=this.#$[r].value;this.#$[r].name=e,this.#$[r].value=t;let o=[];"set-cookie"===e?o.push({name:e,value:t}):o=this.#$.filter((t=>V(t.name,e)&&(!V(t.value,t.originalValue)||t.isOverride)));const a=this.#V(this.#b.url());let n=null;const[d]=this.#H.slice(-1);if(d?.applyTo===a?n=d:(n={applyTo:a,headers:[]},this.#H.push(n)),"set-cookie"===e){const e=n.headers.findIndex((e=>V(e.name,s)&&V(e.value,i)));e>=0&&n.headers.splice(e,1)}else n.headers=n.headers.filter((t=>!V(t.name,e)));if(!V(this.#$[r].name,s))for(let e=0;e<n.headers.length;++e)if(V(n.headers[e].name,s)&&V(n.headers[e].value,i)){n.headers.splice(e,1);break}for(const e of o)n.headers.push({name:e.name,value:e.value||""});0===n.headers.length&&this.#H.pop(),this.#L()}#D(){this.#$.push({name:n.StringUtilities.toLowerCaseString(s.i18n.lockedString("header-name")),value:s.i18n.lockedString("header value"),isOverride:!0,nameEditable:!0,valueEditable:!0});const e=this.#$.length-1;this.#O(this.#$[e].name,this.#$[e].value||"",e),this.#r();const t=this.#e.querySelectorAll("devtools-header-section-row"),[r]=Array.from(t).slice(-1);r?.focus(),i.userMetrics.actionTaken(i.UserMetrics.Action.HeaderOverrideHeaderAdded)}#r(){if(!this.#b)return;const e=this.#$.map(((e,t)=>({...this.#x[t],...e,isResponseHeader:!0})));Y(J`
      ${e.map(((e,t)=>J`
        <${D.litTagName} .data=${{header:e}} @headeredited=${this.#I} @headerremoved=${this.#U} @enableheaderediting=${this.#F} data-index=${t}></${D.litTagName}>
      `))}
      ${this.#E?J`
        <${d.Button.Button.litTagName}
          class="add-header-button"
          .variant=${"secondary"}
          .iconUrl=${te}
          .iconWidth=${"12px"}
          .iconHeight=${"12px"}
          @click=${this.#D}>
          ${Z(X.addHeader)}
        </${d.Button.Button.litTagName}>
      `:t.nothing}
    `,this.#e,{host:this})}async#F(){if(!this.#b)return;i.userMetrics.actionTaken(i.UserMetrics.Action.HeaderOverrideEnableEditingClicked);const e=this.#b.url(),t=u.NetworkPersistenceManager.NetworkPersistenceManager.instance();t.project()?(h.Settings.Settings.instance().moduleSetting("persistenceNetworkOverridesEnabled").set(!0),await t.getOrCreateHeadersUISourceCodeFromUrl(e)):v.InspectorView.InspectorView.instance().displaySelectOverrideFolderInfobar((async()=>{await f.SourcesNavigator.OverridesNavigatorView.instance().setupNewWorkspace(),await t.getOrCreateHeadersUISourceCodeFromUrl(e)}))}}e.CustomElements.defineComponent("devtools-response-header-section",se);const ie=new Map([["coep-frame-resource-needs-coep-header",{name:n.StringUtilities.toLowerCaseString("cross-origin-embedder-policy"),value:null,blockedDetails:{explanation:ee(X.toEmbedThisFrameInYourDocument),examples:[{codeSnippet:"Cross-Origin-Embedder-Policy: require-corp",comment:void 0}],link:{url:"https://web.dev/coop-coep/"}}}],["corp-not-same-origin-after-defaulted-to-same-origin-by-coep",{name:n.StringUtilities.toLowerCaseString("cross-origin-resource-policy"),value:null,blockedDetails:{explanation:ee(X.toUseThisResourceFromADifferent),examples:[{codeSnippet:"Cross-Origin-Resource-Policy: same-site",comment:ee(X.chooseThisOptionIfTheResourceAnd)},{codeSnippet:"Cross-Origin-Resource-Policy: cross-origin",comment:ee(X.onlyChooseThisOptionIfAn)}],link:{url:"https://web.dev/coop-coep/"}}}],["coop-sandboxed-iframe-cannot-navigate-to-coop-page",{name:n.StringUtilities.toLowerCaseString("cross-origin-opener-policy"),value:null,headerValueIncorrect:!1,blockedDetails:{explanation:ee(X.thisDocumentWasBlockedFrom),examples:[],link:{url:"https://web.dev/coop-coep/"}}}],["corp-not-same-site",{name:n.StringUtilities.toLowerCaseString("cross-origin-resource-policy"),value:null,headerValueIncorrect:!0,blockedDetails:{explanation:ee(X.toUseThisResourceFromADifferentSite),examples:[{codeSnippet:"Cross-Origin-Resource-Policy: cross-origin",comment:ee(X.onlyChooseThisOptionIfAn)}],link:null}}],["corp-not-same-origin",{name:n.StringUtilities.toLowerCaseString("cross-origin-resource-policy"),value:null,headerValueIncorrect:!0,blockedDetails:{explanation:ee(X.toUseThisResourceFromADifferentOrigin),examples:[{codeSnippet:"Cross-Origin-Resource-Policy: same-site",comment:ee(X.chooseThisOptionIfTheResourceAnd)},{codeSnippet:"Cross-Origin-Resource-Policy: cross-origin",comment:ee(X.onlyChooseThisOptionIfAn)}],link:null}}]]);var oe=Object.freeze({__proto__:null,RESPONSE_HEADER_SECTION_DATA_KEY:re,ResponseHeaderSection:se});const ae=new CSSStyleSheet;ae.replaceSync('.header{background-color:var(--sys-color-surface1);border-bottom:1px solid var(--sys-color-divider);border-top:1px solid var(--sys-color-divider);line-height:25px;padding:0 5px}.header::marker{color:var(--sys-color-state-disabled);font-size:11px;line-height:1}.header:focus{background-color:var(--sys-color-state-header-hover)}details[open] .header-count{display:none}details .hide-when-closed{display:none}details[open] .hide-when-closed{display:block}details summary input{vertical-align:middle}.row{display:flex;line-height:20px;padding-left:8px;gap:12px;user-select:text}div.raw-headers-row{display:block}.row:first-of-type{margin-top:2px}.row:last-child{margin-bottom:10px}.header-name{color:var(--sys-color-on-surface);font-weight:400;width:30%;min-width:160px;max-width:240px;flex-shrink:0;text-transform:capitalize}.header-value{word-break:break-all;display:flex;align-items:center;gap:2px}.header-name,\n.header-value{&::selection{color:var(--sys-color-on-tonal-container);background-color:var(--sys-color-tonal-container)}}.green-circle::before,\n.red-circle::before,\n.yellow-circle::before{content:"";display:inline-block;width:12px;height:12px;border-radius:6px;vertical-align:text-top;margin-right:2px}.green-circle::before{background-color:var(--sys-color-green-bright)}.red-circle::before{background-color:var(--sys-color-error-bright)}.yellow-circle::before{background-color:var(--issue-color-yellow)}.status-with-comment{color:var(--sys-color-token-subtle)}.raw-headers{font-family:var(--source-code-font-family);font-size:var(--source-code-font-size);white-space:pre-wrap;word-break:break-all}.link,\n.devtools-link{color:var(--sys-color-primary);text-decoration:underline;cursor:pointer;outline-offset:2px}.inline-icon{vertical-align:middle}.header-grid-container{display:inline-grid;grid-template-columns:156px 50px 1fr;grid-gap:4px;width:calc(100% - 15px)}.header-grid-container div:last-child{text-align:right}.header .devtools-link{color:var(--sys-color-on-surface)}x-link{position:relative}x-link .inline-icon{padding-right:3px}.purple.dot::before{background-color:var(--sys-color-purple-bright);content:url("Images/empty.svg");width:6px;height:6px;border-radius:50%;outline:1px solid var(--icon-gap-toolbar);left:9px;position:absolute;top:11px;z-index:1}summary label{color:var(--sys-color-token-subtle)}summary label:hover{color:var(--sys-color-on-surface)}\n/*# sourceURL=RequestHeadersView.css */\n');const{render:ne,html:de}=t,le={fromDiskCache:"(from disk cache)",fromMemoryCache:"(from memory cache)",fromPrefetchCache:"(from prefetch cache)",fromServiceWorker:"(from `service worker`)",fromSignedexchange:"(from signed-exchange)",fromWebBundle:"(from Web Bundle)",general:"General",raw:"Raw",referrerPolicy:"Referrer Policy",remoteAddress:"Remote Address",requestHeaders:"Request Headers",requestMethod:"Request Method",requestUrl:"Request URL",responseHeaders:"Response Headers",revealHeaderOverrides:"Reveal header override definitions",showMore:"Show more",statusCode:"Status Code"},he=s.i18n.registerUIStrings("panels/network/components/RequestHeadersView.ts",le),ce=s.i18n.getLocalizedString.bind(void 0,he);class ue extends g.LegacyWrapper.WrappableComponent{#b;static litTagName=t.literal`devtools-request-headers`;#e=this.attachShadow({mode:"open"});#M=!1;#P=!1;#_=!1;#B=!1;#W=void 0;#z=p.Workspace.WorkspaceImpl.instance();constructor(e){super(),this.#b=e}wasShown(){this.#b.addEventListener(r.NetworkRequest.Events.RemoteAddressChanged,this.#j,this),this.#b.addEventListener(r.NetworkRequest.Events.FinishedLoading,this.#j,this),this.#b.addEventListener(r.NetworkRequest.Events.RequestHeadersChanged,this.#j,this),this.#b.addEventListener(r.NetworkRequest.Events.ResponseHeadersChanged,this.#K,this),this.#W=void 0,this.#j()}willHide(){this.#b.removeEventListener(r.NetworkRequest.Events.RemoteAddressChanged,this.#j,this),this.#b.removeEventListener(r.NetworkRequest.Events.FinishedLoading,this.#j,this),this.#b.removeEventListener(r.NetworkRequest.Events.RequestHeadersChanged,this.#j,this),this.#b.removeEventListener(r.NetworkRequest.Events.ResponseHeadersChanged,this.#K,this)}#K(){this.#b.deleteAssociatedData(re),this.render()}#j(){this.render()}revealHeader(e,t){this.#W={section:e,header:t},this.render()}connectedCallback(){this.#e.adoptedStyleSheets=[ae],this.#z.addEventListener(p.Workspace.Events.UISourceCodeAdded,this.#G,this),this.#z.addEventListener(p.Workspace.Events.UISourceCodeRemoved,this.#G,this),h.Settings.Settings.instance().moduleSetting("persistenceNetworkOverridesEnabled").addChangeListener(this.render,this)}disconnectedCallback(){this.#z.removeEventListener(p.Workspace.Events.UISourceCodeAdded,this.#G,this),this.#z.removeEventListener(p.Workspace.Events.UISourceCodeRemoved,this.#G,this),h.Settings.Settings.instance().moduleSetting("persistenceNetworkOverridesEnabled").removeChangeListener(this.render,this)}#G(e){this.#Y()===e.data.url()&&this.render()}async render(){this.#b&&ne(de`
      ${this.#J()}
      ${this.#X()}
      ${this.#Q()}
    `,this.#e,{host:this})}#X(){if(!this.#b)return t.nothing;return de`
      <${me.litTagName}
        @togglerawevent=${()=>{this.#M=!this.#M,this.render()}}
        .data=${{name:"responseHeaders",title:ce(le.responseHeaders),headerCount:this.#b.sortedResponseHeaders.length,checked:this.#b.responseHeadersText?this.#M:void 0,additionalContent:this.#Z(),forceOpen:this.#W?.section===l.UIRequestLocation.UIHeaderSection.Response}}
        aria-label=${ce(le.responseHeaders)}
      >
        ${this.#M?this.#ee(this.#b.responseHeadersText,!0):de`
          <${se.litTagName} .data=${{request:this.#b,toReveal:this.#W}}></${se.litTagName}>
        `}
      </${me.litTagName}>
    `}#Z(){if(!c.Runtime.experiments.isEnabled(c.Runtime.ExperimentName.HEADER_OVERRIDES)||!this.#z.uiSourceCodeForURL(this.#Y()))return t.nothing;const e=h.Settings.Settings.instance().moduleSetting("persistenceNetworkOverridesEnabled"),r=de`
      <${o.Icon.Icon.litTagName} class=${e.get()?"inline-icon dot purple":"inline-icon"} .data=${{iconName:"document",color:"var(--icon-default)",width:"16px",height:"16px"}}>
      </${o.Icon.Icon.litTagName}>`;return de`
      <x-link href="https://goo.gle/devtools-override" class="link devtools-link">
        <${o.Icon.Icon.litTagName} class="inline-icon" .data=${{iconName:"help",color:"var(--icon-link)",width:"16px",height:"16px"}}>
        </${o.Icon.Icon.litTagName}
      ></x-link>
      <x-link @click=${e=>{e.preventDefault();const t=this.#z.uiSourceCodeForURL(this.#Y());t&&(f.SourcesPanel.SourcesPanel.instance().showUISourceCode(t),f.SourcesPanel.SourcesPanel.instance().revealInNavigator(t))}} class="link devtools-link" title=${le.revealHeaderOverrides}>
        ${r}${u.NetworkPersistenceManager.HEADERS_FILENAME}
      </x-link>
    `}#Y(){if(!this.#b)return n.DevToolsPath.EmptyUrlString;const e=u.NetworkPersistenceManager.NetworkPersistenceManager.instance().fileUrlFromNetworkUrl(this.#b.url(),!0);return e.substring(0,e.lastIndexOf("/"))+"/"+u.NetworkPersistenceManager.HEADERS_FILENAME}#Q(){if(!this.#b)return t.nothing;const e=this.#b.requestHeadersText();return de`
      <${me.litTagName}
        @togglerawevent=${()=>{this.#P=!this.#P,this.render()}}
        .data=${{name:"requestHeaders",title:ce(le.requestHeaders),headerCount:this.#b.requestHeaders().length,checked:e?this.#P:void 0,forceOpen:this.#W?.section===l.UIRequestLocation.UIHeaderSection.Request}}
        aria-label=${ce(le.requestHeaders)}
      >
        ${this.#P&&e?this.#ee(e,!1):de`
          <${j.litTagName} .data=${{request:this.#b,toReveal:this.#W}}></${j.litTagName}>
        `}
      </${me.litTagName}>
    `}#ee(r,s){const i=r.trim(),o=!(s?this.#_:this.#B)&&i.length>3e3,a=()=>{s?this.#_=!0:this.#B=!0,this.render()},n=e=>{if(!(s?this.#_:this.#B)){const t=new v.ContextMenu.ContextMenu(e);t.newSection().appendItem(ce(le.showMore),a),t.show()}};return de`
      <div class="row raw-headers-row" on-render=${e.Directives.nodeRenderedCallback((e=>{o&&e.addEventListener("contextmenu",n)}))}>
        <div class="raw-headers">${o?i.substring(0,3e3):i}</div>
        ${o?de`
          <${d.Button.Button.litTagName}
            .size=${"SMALL"}
            .variant=${"secondary"}
            @click=${a}
          >${ce(le.showMore)}</${d.Button.Button.litTagName}>
        `:t.nothing}
      </div>
    `}#J(){if(!this.#b)return t.nothing;const e=["status"];this.#b.statusCode<300||304===this.#b.statusCode?e.push("green-circle"):this.#b.statusCode<400?e.push("yellow-circle"):e.push("red-circle");let r="";this.#b.cachedInMemory()?r=ce(le.fromMemoryCache):this.#b.fetchedViaServiceWorker?r=ce(le.fromServiceWorker):this.#b.redirectSourceSignedExchangeInfoHasNoErrors()?r=ce(le.fromSignedexchange):this.#b.webBundleInnerRequestInfo()?r=ce(le.fromWebBundle):this.#b.fromPrefetchCache()?r=ce(le.fromPrefetchCache):this.#b.cached()&&(r=ce(le.fromDiskCache)),r&&e.push("status-with-comment");const s=[this.#b.statusCode,this.#b.getInferredStatusText(),r].join(" ");return de`
      <${me.litTagName}
        .data=${{name:"general",title:ce(le.general),forceOpen:this.#W?.section===l.UIRequestLocation.UIHeaderSection.General}}
        aria-label=${ce(le.general)}
      >
        ${this.#te(ce(le.requestUrl),this.#b.url())}
        ${this.#b.statusCode?this.#te(ce(le.requestMethod),this.#b.requestMethod):t.nothing}
        ${this.#b.statusCode?this.#te(ce(le.statusCode),s,e):t.nothing}
        ${this.#b.remoteAddress()?this.#te(ce(le.remoteAddress),this.#b.remoteAddress()):t.nothing}
        ${this.#b.referrerPolicy()?this.#te(ce(le.referrerPolicy),String(this.#b.referrerPolicy())):t.nothing}
      </${me.litTagName}>
    `}#te(e,t,r){const s=this.#W?.section===l.UIRequestLocation.UIHeaderSection.General&&e.toLowerCase()===this.#W?.header?.toLowerCase();return de`
      <div class="row ${s?"header-highlight":""}">
        <div class="header-name">${e}:</div>
        <div
          class="header-value ${r?.join(" ")}"
          @copy=${()=>i.userMetrics.actionTaken(i.UserMetrics.Action.NetworkPanelCopyValue)}
        >${t}</div>
      </div>
    `}}class pe extends Event{static eventName="togglerawevent";constructor(){super(pe.eventName,{})}}class me extends HTMLElement{static litTagName=t.literal`devtools-request-headers-category`;#e=this.attachShadow({mode:"open"});#re;#se=h.UIString.LocalizedEmptyString;#ie=void 0;#oe=void 0;#ae=void 0;#ne=void 0;connectedCallback(){this.#e.adoptedStyleSheets=[ae,m.checkboxStyles]}set data(e){this.#se=e.title,this.#re=h.Settings.Settings.instance().createSetting("request-info-"+e.name+"-category-expanded",!0),this.#ie=e.headerCount,this.#oe=e.checked,this.#ae=e.additionalContent,this.#ne=e.forceOpen,this.#r()}#de(){this.dispatchEvent(new pe)}#r(){const e=!this.#re||this.#re.get()||this.#ne;ne(de`
      <details ?open=${e} @toggle=${this.#le}>
        <summary class="header" @keydown=${this.#he}>
          <div class="header-grid-container">
            <div>
              ${this.#se}${void 0!==this.#ie?de`<span class="header-count"> (${this.#ie})</span>`:t.nothing}
            </div>
            <div class="hide-when-closed">
              ${void 0!==this.#oe?de`
                <label><input type="checkbox" .checked=${this.#oe} @change=${this.#de} />${ce(le.raw)}</label>
              `:t.nothing}
            </div>
            <div class="hide-when-closed">${this.#ae}</div>
        </summary>
        <slot></slot>
      </details>
    `,this.#e,{host:this})}#he(e){if(!e.target)return;const t=e.target.parentElement;if(!t)throw new Error("<details> element is not found for a <summary> element");switch(e.key){case"ArrowLeft":t.open=!1;break;case"ArrowRight":t.open=!0}}#le(e){this.#re?.set(e.target.open)}}e.CustomElements.defineComponent("devtools-request-headers",ue),e.CustomElements.defineComponent("devtools-request-headers-category",me);var ge=Object.freeze({__proto__:null,RequestHeadersView:ue,ToggleRawHeadersEvent:pe,Category:me});const ve=new CSSStyleSheet;ve.replaceSync(".code{font-family:var(--monospace-font-family);font-size:var(--monospace-font-size)}.issuers-list{display:flex;flex-direction:column;list-style-type:none;padding:0;margin:0}.status-icon{margin:0 0.3em 2px 0;vertical-align:middle}\n/*# sourceURL=RequestTrustTokensView.css */\n");const fe={parameters:"Parameters",type:"Type",refreshPolicy:"Refresh policy",issuers:"Issuers",topLevelOrigin:"Top level origin",issuer:"Issuer",result:"Result",status:"Status",numberOfIssuedTokens:"Number of issued tokens",success:"Success",failure:"Failure",theOperationsResultWasServedFrom:"The operations result was served from cache.",theOperationWasFulfilledLocally:"The operation was fulfilled locally, no request was sent.",theKeysForThisPSTIssuerAreUnavailable:"The keys for this PST issuer are unavailable. The issuer may need to be registered via the Chrome registration process.",aClientprovidedArgumentWas:"A client-provided argument was malformed or otherwise invalid.",eitherNoInputsForThisOperation:"Either no inputs for this operation are available or the output exceeds the operations quota.",theServersResponseWasMalformedOr:"The servers response was malformed or otherwise invalid.",theOperationFailedForAnUnknown:"The operation failed for an unknown reason."},we=s.i18n.registerUIStrings("panels/network/components/RequestTrustTokensView.ts",fe),Re=s.i18n.getLocalizedString.bind(void 0,we);class ye extends g.LegacyWrapper.WrappableComponent{static litTagName=t.literal`devtools-trust-token-report`;#e=this.attachShadow({mode:"open"});#b;constructor(e){super(),this.#b=e}wasShown(){this.#b.addEventListener(r.NetworkRequest.Events.TrustTokenResultAdded,this.render,this),this.render()}willHide(){this.#b.removeEventListener(r.NetworkRequest.Events.TrustTokenResultAdded,this.render,this)}connectedCallback(){this.#e.adoptedStyleSheets=[ve]}async render(){if(!this.#b)throw new Error("Trying to render a Trust Token report without providing data");t.render(t.html`<${R.ReportView.Report.litTagName}>
        ${this.#ce()}
        ${this.#ue()}
      </${R.ReportView.Report.litTagName}>
    `,this.#e,{host:this})}#ce(){const e=this.#b.trustTokenParams();return e?t.html`
      <${R.ReportView.ReportSectionHeader.litTagName}>${Re(fe.parameters)}</${R.ReportView.ReportSectionHeader.litTagName}>
      ${$e(Re(fe.type),e.operation.toString())}
      ${this.#pe(e)}
      ${this.#me(e)}
      ${this.#ge()}
      <${R.ReportView.ReportSectionDivider.litTagName}></${R.ReportView.ReportSectionDivider.litTagName}>
    `:t.nothing}#pe(e){return"Redemption"!==e.operation?t.nothing:$e(Re(fe.refreshPolicy),e.refreshPolicy.toString())}#me(e){return e.issuers&&0!==e.issuers.length?t.html`
      <${R.ReportView.ReportKey.litTagName}>${Re(fe.issuers)}</${R.ReportView.ReportKey.litTagName}>
      <${R.ReportView.ReportValue.litTagName}>
        <ul class="issuers-list">
          ${e.issuers.map((e=>t.html`<li>${e}</li>`))}
        </ul>
      </${R.ReportView.ReportValue.litTagName}>
    `:t.nothing}#ge(){const e=this.#b.trustTokenOperationDoneEvent();return e?t.html`
      ${xe(Re(fe.topLevelOrigin),e.topLevelOrigin)}
      ${xe(Re(fe.issuer),e.issuerOrigin)}`:t.nothing}#ue(){const e=this.#b.trustTokenOperationDoneEvent();return e?t.html`
      <${R.ReportView.ReportSectionHeader.litTagName}>${Re(fe.result)}</${R.ReportView.ReportSectionHeader.litTagName}>
      <${R.ReportView.ReportKey.litTagName}>${Re(fe.status)}</${R.ReportView.ReportKey.litTagName}>
      <${R.ReportView.ReportValue.litTagName}>
        <span>
          <${o.Icon.Icon.litTagName} class="status-icon"
            .data=${r=e.status,Se(r)?be:ke}>
          </${o.Icon.Icon.litTagName}>
          <strong>${function(e){return Se(e)?Re(fe.success):Re(fe.failure)}(e.status)}</strong>
          ${function(e){switch(e){case"Ok":return null;case"AlreadyExists":return Re(fe.theOperationsResultWasServedFrom);case"FulfilledLocally":return Re(fe.theOperationWasFulfilledLocally);case"InvalidArgument":return Re(fe.aClientprovidedArgumentWas);case"ResourceExhausted":return Re(fe.eitherNoInputsForThisOperation);case"BadResponse":return Re(fe.theServersResponseWasMalformedOr);case"MissingIssuerKeys":return Re(fe.theKeysForThisPSTIssuerAreUnavailable);case"FailedPrecondition":case"Unavailable":case"InternalError":case"Unauthorized":case"UnknownError":return Re(fe.theOperationFailedForAnUnknown)}}(e.status)}
        </span>
      </${R.ReportView.ReportValue.litTagName}>
      ${this.#ve(e)}
      <${R.ReportView.ReportSectionDivider.litTagName}></${R.ReportView.ReportSectionDivider.litTagName}>
      `:t.nothing;var r}#ve(e){return"Issuance"!==e.type?t.nothing:xe(Re(fe.numberOfIssuedTokens),e.issuedTokenCount)}}const be={color:"var(--icon-checkmark-green)",iconName:"check-circle",width:"16px",height:"16px"},ke={color:"var(--icon-error)",iconName:"cross-circle-filled",width:"16px",height:"16px"};function Se(e){return"Ok"===e||"AlreadyExists"===e||"FulfilledLocally"===e}function xe(e,r){return void 0===r?t.nothing:t.html`
    <${R.ReportView.ReportKey.litTagName}>${e}</${R.ReportView.ReportKey.litTagName}>
    <${R.ReportView.ReportValue.litTagName}>${r}</${R.ReportView.ReportValue.litTagName}>
  `}function $e(e,r){return t.html`
    <${R.ReportView.ReportKey.litTagName}>${e}</${R.ReportView.ReportKey.litTagName}>
    <${R.ReportView.ReportValue.litTagName} class="code">${r}</${R.ReportView.ReportValue.litTagName}>
  `}e.CustomElements.defineComponent("devtools-trust-token-report",ye);var Te=Object.freeze({__proto__:null,RequestTrustTokensView:ye,statusConsideredSuccess:Se});export{x as EditableSpan,F as HeaderSectionRow,K as RequestHeaderSection,ge as RequestHeadersView,Te as RequestTrustTokensView,oe as ResponseHeaderSection};
