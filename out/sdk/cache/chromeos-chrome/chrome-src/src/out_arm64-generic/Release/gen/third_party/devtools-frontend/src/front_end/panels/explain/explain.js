import*as e from"../../core/host/host.js";import*as t from"../../core/i18n/i18n.js";import*as o from"../../third_party/marked/marked.js";import*as n from"../../ui/components/buttons/buttons.js";import*as i from"../../ui/components/helpers/helpers.js";import*as s from"../../ui/components/icon_button/icon_button.js";import*as r from"../../ui/components/markdown_view/markdown_view.js";import*as a from"../../ui/legacy/legacy.js";import*as l from"../../ui/lit-html/lit-html.js";import*as c from"../../core/sdk/sdk.js";import*as d from"../../models/bindings/bindings.js";import*as h from"../../models/formatter/formatter.js";import*as p from"../../models/logs/logs.js";import*as u from"../../ui/legacy/components/utils/utils.js";import*as m from"../console/console.js";import*as g from"../../core/root/root.js";const f=1e3;var v;!function(e){e.MESSAGE="message",e.STACKTRACE="stacktrace",e.NETWORK_REQUEST="networkRequest",e.RELATED_CODE="relatedCode"}(v||(v={}));class y{#e;constructor(e){this.#e=e}async getNetworkRequest(){const e=this.#e.consoleMessage().getAffectedResources()?.requestId;if(!e)return;return p.NetworkLog.NetworkLog.instance().requestsForId(e)[0]}async getMessageSourceCode(){const e=this.#e.consoleMessage().stackTrace?.callFrames[0],t=this.#e.consoleMessage().runtimeModel(),o=t?.debuggerModel();if(!o||!t||!e)return{text:"",columnNumber:0,lineNumber:0};const n=new c.DebuggerModel.Location(o,e.scriptId,e.lineNumber,e.columnNumber),i=await d.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().rawLocationToUILocation(n),s=await(i?.uiSourceCode.requestContent()),r=!s?.isEncoded&&s?.content?s.content:"",a=r.indexOf("\n");if(r.length>f&&(a<0||a>f)){const{formattedContent:e,formattedMapping:t}=await h.ScriptFormatter.formatScriptContent(i?.uiSourceCode.mimeType()??"text/javascript",r),[o,n]=t.originalToFormatted(i?.lineNumber??0,i?.columnNumber??0);return{text:e,columnNumber:n,lineNumber:o}}return{text:r,columnNumber:i?.columnNumber??0,lineNumber:i?.lineNumber??0}}async buildPrompt(e=Object.values(v)){const[t,o]=await Promise.all([e.includes(v.RELATED_CODE)?this.getMessageSourceCode():void 0,e.includes(v.NETWORK_REQUEST)?this.getNetworkRequest():void 0]),n=t?.text?b(t):"",i=o?k(o):"",s=e.includes(v.STACKTRACE)?$(this.#e):"",r=E(this.#e),a=this.formatPrompt({message:[r,s].join("\n").trim(),relatedCode:n,relatedRequest:i}),l=[{type:v.MESSAGE,value:r}];return s&&l.push({type:v.STACKTRACE,value:s}),n&&l.push({type:v.RELATED_CODE,value:n}),i&&l.push({type:v.NETWORK_REQUEST,value:i}),{prompt:a,sources:l}}formatPrompt({message:e,relatedCode:t,relatedRequest:o}){let n=`Why does browser show an error\n${e}`;return t&&(n+=`\nFor the following code in my web app\n\n\`\`\`\n${t}\n\`\`\``),o&&(n+=`\nFor the following network request in my web app\n\n\`\`\`\n${o}\n\`\`\``),n}}function x(e){const t=e.name.toLowerCase().trim();return!t.startsWith("x-")&&("cookie"!==t&&"set-cookie"!==t&&"authorization"!==t)}function w(e){const t=/^\s*/.exec(e);if(!t||!t.length)return null;const o=t[0];return o===e?null:o}function b({text:e,columnNumber:t,lineNumber:o},n=1e3){const i=e.split("\n");if(i[o].length>=n/2){const e=Math.max(t-n/2,0),s=Math.min(t+n/2,i[o].length);return i[o].substring(e,s)}let s=0,r=o,a=w(i[o]);const l=new Map;for(;void 0!==i[r]&&s+i[r].length<=n/2;){const e=w(i[r]);null===e||null===a||e!==a&&e.startsWith(a)||(/^\s*[\}\)\]]/.exec(i[r])||l.set(e,r),a=e),s+=i[r].length+1,r--}r=o+1;let c=o,d=o;for(a=w(i[o]);void 0!==i[r]&&s+i[r].length<=n;){s+=i[r].length;const e=w(i[r]);if(null!==e&&null!==a&&(e===a||!e.startsWith(a))){const t=i[r+1],o=t?w(t):null;o&&o!==e&&o.startsWith(e)||l.has(e)&&(c=l.get(e)??0,d=r),a=e}r++}return i.slice(c,d+1).join("\n")}function k(e){return`Request: ${e.url()}\n\nRequest headers:\n${e.requestHeaders().filter(x).map((e=>`${e.name}: ${e.value}`)).join("\n")}\n\nResponse headers:\n${e.responseHeaders.filter(x).map((e=>`${e.name}: ${e.value}`)).join("\n")}\n\nResponse status: ${e.statusCode} ${e.statusText}`}function E(e){return e.toMessageTextString()}function $(e){const t=e.contentElement().querySelector(".stack-preview-container");if(!t)return"";const o=t.shadowRoot?.querySelector(".stack-preview-container");return o.childTextNodes().filter((e=>!e.parentElement?.closest(".show-all-link,.show-less-link,.hidden-row"))).map(u.Linkifier.Linkifier.untruncatedNodeText).join("").trim()}const R=new CSSStyleSheet;R.replaceSync('*{padding:0;margin:0;box-sizing:border-box}:host{--max-height:2000px;--loading-max-height:140px;font-family:var(--default-font-family);font-size:inherit;display:block;overflow:hidden;max-height:0}:host-context(.opening){animation:expand-to-loading var(--sys-motion-duration-medium2) var(--sys-motion-easing-emphasized);animation-fill-mode:forwards}:host-context(.loaded){animation:expand-to-full var(--sys-motion-duration-medium2) var(--sys-motion-easing-emphasized);animation-fill-mode:forwards}:host-context(.closing){animation:collapse var(--sys-motion-duration-medium2) var(--sys-motion-easing-emphasized);animation-fill-mode:forwards}@keyframes expand-to-loading{from{max-height:0}to{max-height:var(--loading-max-height)}}@keyframes expand-to-full{from{max-height:var(--actual-height,var(--loading-max-height))}to{max-height:var(--max-height)}}@keyframes collapse{from{max-height:var(--actual-height,var(--max-height))}to{max-height:0;margin-top:0;margin-bottom:0}}.wrapper{padding:16px 20px;background-color:var(--sys-color-cdt-base-container);border-radius:16px}.wrapper.top{border-radius:16px 16px 4px 4px}.wrapper.bottom{margin-top:5px;border-radius:4px 4px 16px 16px}header{display:flex;flex-direction:row;gap:6px;color:var(--sys-color-on-surface);font-size:14px;font-style:normal;font-weight:500;line-height:20px;height:20px}header > .filler{flex:1}main{--override-markdown-view-message-color:var(--sys-color-on-surface);margin:20px 0 0;color:var(--sys-color-on-surface);font-size:12px;font-style:normal;font-weight:400;line-height:20px}devtools-markdown-view{margin-bottom:12px}footer{display:flex;flex-direction:row;color:var(--sys-color-on-surface);font-size:12px;font-style:normal;font-weight:400;line-height:normal;margin-top:8px}footer > div:nth-child(1){display:flex;flex-direction:row;gap:10px}footer > .filler{flex:1}textarea{height:84px;padding:10px;border-radius:8px;border:1px solid var(--sys-color-neutral-outline);width:100%;font-family:var(--default-font-family);font-size:inherit}.buttons{margin-bottom:16px}.dogfood-feedback{display:flex;gap:2px;align-items:center}.link{color:var(--sys-color-primary);text-decoration-line:underline}.loader{background:linear-gradient(130deg,transparent 0%,var(--sys-color-gradient-tertiary) 20%,var(--sys-color-gradient-primary) 40%,transparent 60%,var(--sys-color-gradient-tertiary) 80%,var(--sys-color-gradient-primary) 100%);background-position:0% 0%;background-size:250% 250%;animation:gradient 5s infinite linear}@keyframes gradient{0%{background-position:0 0}100%{background-position:100% 100%}}summary{font-size:13px;font-style:normal;font-weight:400;line-height:20px}details{--collapsed-height:20px;overflow:hidden;height:var(--collapsed-height)}details[open]{height:calc(var(--list-height) + var(--collapsed-height) + 8px);transition:height var(--sys-motion-duration-short4) var(--sys-motion-easing-emphasized)}.refine-container{display:flex;flex-direction:row;margin-top:20px;margin-bottom:12px;gap:8px}h2{display:block;font-size:inherit;margin:0;font-weight:inherit}.info{width:20px;height:20px}devtools-icon[name="spark"]{color:var(--sys-color-primary-bright)}devtools-icon[name="dog-paw"]{width:16px;height:16px}\n/*# sourceURL=./components/consoleInsight.css */\n');const T=new CSSStyleSheet;T.replaceSync("*{padding:0;margin:0;box-sizing:border-box}:host{display:block}ul{padding-left:1em;color:var(--sys-color-primary);font-size:13px;font-style:normal;font-weight:400;line-height:20px;margin-top:8px}ul .link{color:var(--sys-color-primary);display:inline-flex!important;align-items:center;gap:4px;text-decoration-line:underline}\n/*# sourceURL=./components/consoleInsightSourcesList.css */\n");const N={inaccurate:"Inaccurate",irrelevant:"Irrelevant",inappropriate:"Inappropriate",notHelpful:"Not helpful",other:"Other",consoleMessage:"Console message",stackTrace:"Stacktrace",networkRequest:"Network request",relatedCode:"Related code",refineButtonHint:"Click this button to send the following data to the AI model running on Google's servers, so it can generate a more accurate and relevant response:",generating:"Generating…",insight:"Insight",close:"Close",closeInsight:"Close insight",sources:"Sources",refine:"Give context to personalize insight",refining:"Personalizing insight…",thumbUp:"Thumb up",thumbDown:"Thumb down",submitFeedback:"Submit feedback",dogfood:"Dogfood",reason:"Why did you choose this rating? (optional)",additionalFeedback:"Provide additional feedback (optional)",submit:"Submit",error:"Something went wrong…",refineInfo:"Learn how personalizing of insights works",opensInNewTab:"(opens in a new tab)"},S=t.i18n.registerUIStrings("panels/explain/components/ConsoleInsight.ts",N),M=t.i18n.getLocalizedString.bind(void 0,S),C=t.i18n.getLazilyComputedLocalizedString.bind(void 0,S),{render:I,html:B,Directives:L}=l;class A extends Event{static eventName="close";constructor(){super(A.eventName,{composed:!0,bubbles:!0})}}const F=[["inaccurate",C(N.inaccurate)],["irrelevant",C(N.irrelevant)],["inapproprate",C(N.inappropriate)],["not-helpful",C(N.notHelpful)],["other",C(N.other)]];function P(e){switch(e){case v.MESSAGE:return M(N.consoleMessage);case v.STACKTRACE:return M(N.stackTrace);case v.NETWORK_REQUEST:return M(N.networkRequest);case v.RELATED_CODE:return M(N.relatedCode)}}let q=0;class z extends HTMLElement{static litTagName=l.literal`devtools-console-insight`;#t=this.attachShadow({mode:"open"});#o=!0;#n=!1;#i;#s;#r=new D;#a={type:"loading"};#l=!1;#c;#d=new Set;#h;#p;#u=!1;constructor(e,t){super(),this.#i=e,this.#s=t,this.#m(),this.addEventListener("keydown",(e=>{e.stopPropagation()})),this.addEventListener("keyup",(e=>{e.stopPropagation()})),this.addEventListener("keypress",(e=>{e.stopPropagation()})),this.tabIndex=0,this.#p=q++,this.focus(),this.#h=new a.PopoverHelper.PopoverHelper(this,this.#g.bind(this)),this.#h.setTimeout(300),this.#h.setHasPadding(!0),this.addEventListener("animationend",(()=>{this.style.setProperty("--actual-height",`${this.offsetHeight}px`)}))}#g(e){const t=e.composedPath()[0];if(!t||!t.isSelfOrDescendant(this.#t.querySelector(".info")))return null;const o=this.#u||"mousemove"!==e.type;return{box:t.boxInWindow(),show:async e=>{const{sources:t}=await this.#i.buildPrompt(),n=`dialog-${this.#p}`,i=document.createElement("div");i.style.display="flex",i.style.flexDirection="column",i.style.fontSize="13px",i.style.lineHeight="20px",i.setAttribute("aria-modal","true"),i.tabIndex=-1,i.role="dialog",o&&i.addEventListener("keydown",(t=>{const o=t;if("Tab"===o.key){const o=function(e){const t=e.contentElement.getComponentRoot();if(!(t instanceof ShadowRoot))throw new Error("Expected a shadow root");const o=["x-link","[role=document]"],n=[];function i(e){const t=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT);do{const s=t.currentNode;s.shadowRoot&&i(s.shadowRoot),s instanceof ShadowRoot||s!==e&&o.some((e=>s.matches(e)))&&n.push(s)}while(t.nextNode())}return i(t.host),n}(e),n=function(e){const t=e.contentElement.getComponentRoot();if(!(t instanceof ShadowRoot))throw new Error("Expected a shadow root");let o=t.activeElement;for(;o&&o.shadowRoot?.activeElement;)o=o.shadowRoot?.activeElement;return o}(e);if(n){const e=o.indexOf(n);t.shiftKey&&0===e?(o.at(-1)?.focus(),t.preventDefault()):t.shiftKey||e!==o.length-1||(o.at(0)?.focus(),t.preventDefault())}}else"Escape"===o.key&&(t.consume(!0),this.#h.hidePopover(),this.#t.querySelector(".info")?.focus())}));const s=document.createElement("div");s.role="document",s.tabIndex=0,s.setAttribute("aria-describedby",n),i.append(s);const r=document.createElement("p");r.id=n,r.innerText=M(N.refineButtonHint),r.style.margin="0",s.append(r);const a=document.createElement("devtools-console-insight-sources-list");if(a.sources=t,s.append(a),e.contentElement.append(i),e.setAnchorBehavior("PreferBottom"),o){const t=e.show;e.show=o=>{t.call(e,o),e.contentElement.querySelector("[role=document]")?.focus()};const o=e.hide;e.hide=()=>{o.call(e),this.#t.querySelector(".info")?.focus()}}return!0}}}connectedCallback(){this.#t.adoptedStyleSheets=[R],this.classList.add("opening")}disonnectedCallback(){this.#h.dispose()}set dogfood(e){this.#o=e,this.#m()}get dogfood(){return this.#o}#f(e){const t=this.#a;this.#a=e,e.type!==t.type&&"loading"===t.type&&this.classList.add("loaded"),this.#m()}async update(t=this.#n){this.#f("insight"===this.#a.type?{...this.#a,type:"refining"}:{type:"loading"});try{const e=t?void 0:[v.MESSAGE],{prompt:n,sources:i}=await this.#i.buildPrompt(e),s=await this.#s.getInsights(n);this.#f({type:"insight",tokens:o.Marked.lexer(s),explanation:s,sources:i,refined:t})}catch(t){e.userMetrics.actionTaken(e.UserMetrics.Action.InsightErrored),this.#f({type:"error",error:t.message})}}#v(){this.dispatchEvent(new A),this.classList.add("closing")}#y(){this.#l=!1,this.#c=void 0,this.#d.clear(),this.#m()}#x(){this.#o&&this.#w(),this.#y()}#w(){if("insight"!==this.#a.type)throw new Error("Unexpected state");const t=function(e,t,o,n,i,s,r){const a="Negative"===e?{"entry.1465663861":e,"entry.1232404632":o,"entry.37285503":i,"entry.542010749":n,"entry.420621380":s,"entry.822323774":r}:{"entry.1465663861":e,"entry.1805879004":o,"entry.720239045":i,"entry.623054399":n,"entry.1520357991":s,"entry.1966708581":r};return`http://go/console-insights-experiment-rating?usp=pp_url&${Object.keys(a).map((e=>`${e}=${encodeURIComponent(a[e])}`)).join("&")}`}(this.#c?"Positive":"Negative",this.#t.querySelector("textarea")?.value,this.#a.explanation,this.#a.sources.filter((e=>e.type===v.MESSAGE)).map((e=>e.value)).join("\n"),this.#a.sources.filter((e=>e.type===v.STACKTRACE)).map((e=>e.value)).join("\n"),this.#a.sources.filter((e=>e.type===v.RELATED_CODE)).map((e=>e.value)).join("\n"),this.#a.sources.filter((e=>e.type===v.NETWORK_REQUEST)).map((e=>e.value)).join("\n"));e.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab(t)}#b(t){this.#c="true"===t.target.dataset.rating,this.#c?e.userMetrics.actionTaken(e.UserMetrics.Action.InsightRatedPositive):e.userMetrics.actionTaken(e.UserMetrics.Action.InsightRatedNegative),this.#o?this.#w():(this.#l=!0,this.#m())}#k(e){const t=e.target;t.active?this.#d.delete(t.dataset.reason):this.#d.add(t.dataset.reason),this.#m()}#E(){if("insight"!==this.#a.type)throw new Error("Unexpected state");e.userMetrics.actionTaken(e.UserMetrics.Action.InsightRefined),this.update(!0)}#$(e){if(e instanceof KeyboardEvent)switch(e.key){case"Escape":e.consume(!0),this.#h.hidePopover();break;case"Enter":case" ":e.consume(!0),this.#u=!0;try{e.target?.dispatchEvent(new MouseEvent("mousedown",{bubbles:!0,composed:!0,cancelable:!0,clientX:e.target.getBoundingClientRect().x,clientY:e.target.getBoundingClientRect().y}))}finally{this.#u=!1}}}#R(){switch(this.#a.type){case"loading":return B`<main>
            <div role="presentation" class="loader" style="clip-path: url('#clipPath');">
              <svg width="100%" height="64">
                <clipPath id="clipPath">
                  <rect x="0" y="0" width="100%" height="16" rx="8"></rect>
                  <rect x="0" y="24" width="100%" height="16" rx="8"></rect>
                  <rect x="0" y="48" width="100%" height="16" rx="8"></rect>
                </clipPath>
              </svg>
            </div>
          </main>`;case"refining":case"insight":return B`
        <main>
          <${r.MarkdownView.MarkdownView.litTagName}
            .data=${{tokens:this.#a.tokens,renderer:this.#r}}>
          </${r.MarkdownView.MarkdownView.litTagName}>
          <details style="--list-height: ${20*this.#a.sources.length}px;">
            <summary>${M(N.sources)}</summary>
            <${j.litTagName} .sources=${this.#a.sources}>
            </${j.litTagName}>
          </details>
          ${this.#a.refined?"":B`<div class="refine-container">
            <${n.Button.Button.litTagName}
                class="refine-button"
                .data=${{variant:"tonal",size:"MEDIUM",iconName:"spark"}}
                @click=${this.#E}
              >
              ${"refining"===this.#a.type?M(N.refining):M(N.refine)}
            </${n.Button.Button.litTagName}>
            <${n.Button.Button.litTagName}
              class="info"
              .data=${{variant:"round",size:"SMALL",iconName:"info",title:M(N.refineInfo)}}
              @keydown=${this.#$}
            ></${n.Button.Button.litTagName}>
          </div>
          `}
        </main>`;case"error":return B`
        <main>
          <div class="error">${this.#a.error}</div>
        </main>`}}#T(){switch(this.#a.type){case"loading":case"error":return l.nothing;case"insight":case"refining":return B`<footer>
        <div>
          <${n.Button.Button.litTagName}
            data-rating=${"true"}
            .data=${{variant:"round",size:"SMALL",iconName:"thumb-up",active:this.#c,title:M(N.thumbUp)}}
            @click=${this.#b}
          ></${n.Button.Button.litTagName}>
          <${n.Button.Button.litTagName}
            data-rating=${"false"}
            .data=${{variant:"round",size:"SMALL",iconName:"thumb-down",active:void 0!==this.#c&&!this.#c,title:M(N.thumbDown)}}
            @click=${this.#b}
          ></${n.Button.Button.litTagName}>
        </div>
        <div class="filler"></div>
        ${this.#o?B`<div class="dogfood-feedback">
            <${s.Icon.Icon.litTagName} name="dog-paw"></${s.Icon.Icon.litTagName}>
            <span>${M(N.dogfood)} - </span>
            <x-link href=${"http://go/console-insights-experiment-general-feedback"} class="link">${M(N.submitFeedback)}</x-link>
        </div>`:""}
      </footer>`}}#N(){switch(this.#a.type){case"loading":return M(N.generating);case"insight":case"refining":return M(N.insight);case"error":return M(N.error)}}#m(){const e=L.classMap({wrapper:!0,top:this.#l}),t=L.classMap({wrapper:!0,bottom:this.#l});I(B`
      <div class=${e}>
        <header>
          <div>
            <${s.Icon.Icon.litTagName} name="spark"></${s.Icon.Icon.litTagName}>
          </div>
          <div class="filler">
            <h2>
              ${this.#N()}
            </h2>
          </div>
          <div>
            <${n.Button.Button.litTagName}
              .data=${{variant:"round",size:"SMALL",iconName:"cross",title:M(N.closeInsight)}}
              @click=${this.#v}
            ></${n.Button.Button.litTagName}>
          </div>
        </header>
        ${this.#R()}
        ${this.#T()}
      </div>
      ${this.#l?B`
        <div class=${t}>
          <header>
            <div class="filler">${M(N.reason)}</div>
            <div>
              <${n.Button.Button.litTagName}
                .data=${{variant:"round",size:"SMALL",iconName:"cross",title:M(N.close)}}
                @click=${this.#y}
              ></${n.Button.Button.litTagName}>
            </div>
          </header>
          <main>
            ${this.#c?"":B`
                <div class="buttons">
                  ${L.repeat(F,(([e,t])=>B`
                      <${n.Button.Button.litTagName}
                        data-reason=${e}
                        @click=${this.#k}
                        .data=${{variant:"secondary",size:"MEDIUM",active:this.#d.has(e)}}
                      >
                        ${t()}
                      </${n.Button.Button.litTagName}>
                    `))}
                </div>
            `}
            <textarea placeholder=${M(N.additionalFeedback)}></textarea>
          </main>
          <footer>
            <div class="filler"></div>
            <div>
              <${n.Button.Button.litTagName}
                .data=${{variant:"primary",size:"MEDIUM",title:M(N.submit)}}
                @click=${this.#x}
              >
                ${M(N.submit)}
              </${n.Button.Button.litTagName}>
            </div>
          </footer>
        </div>
      `:""}
    `,this.#t,{host:this})}}class j extends HTMLElement{static litTagName=l.literal`devtools-console-insight-sources-list`;#t=this.attachShadow({mode:"open"});#S=[];constructor(){super(),this.#t.adoptedStyleSheets=[T]}#m(){I(B`
      <ul>
        ${L.repeat(this.#S,(e=>e.value),(e=>{const t=new s.Icon.Icon;return t.data={iconName:"open-externally",color:"var(--sys-color-primary)",width:"14px",height:"14px"},B`<li><x-link class="link" title="${P(e.type)} ${M(N.opensInNewTab)}" href=${`data:text/plain,${encodeURIComponent(e.value)}`}>${P(e.type)}${t}</x-link></li>`}))}
      </ul>
    `,this.#t,{host:this})}set sources(e){this.#S=e,this.#m()}}i.CustomElements.defineComponent("devtools-console-insight",z),i.CustomElements.defineComponent("devtools-console-insight-sources-list",j);class D extends r.MarkdownView.MarkdownLitRenderer{renderToken(e){const t=this.templateForToken(e);return null===t?(console.warn(`Markdown token type '${e.type}' not supported.`),l.html``):t}templateForToken(e){switch(e.type){case"heading":return B`<strong>${this.renderText(e)}</strong>`;case"link":case"image":return l.html`${a.XLink.XLink.create(e.href,e.text,void 0,void 0,"token")}`}return super.templateForToken(e)}}class O{static buildApiRequest(e){const t={input:e,client:"CHROME_DEVTOOLS"},o=parseFloat(g.Runtime.Runtime.queryParam("aidaTemperature")||"");isNaN(o)||(t.options??={},t.options.temperature=o);const n=g.Runtime.Runtime.queryParam("aidaModelId");return n&&(t.options??={},t.options.model_id=n),t}async getInsights(t){return new Promise(((o,n)=>{if(!e.InspectorFrontendHost.InspectorFrontendHostInstance.doAidaConversation)return n(new Error("doAidaConversation is not available"));console.time("request"),e.InspectorFrontendHost.InspectorFrontendHostInstance.doAidaConversation(JSON.stringify(O.buildApiRequest(t)),(e=>{console.timeEnd("request");try{const t=JSON.parse(e.response).map((e=>{if("textChunk"in e)return e.textChunk.text;if("codeChunk"in e)return"\n`````\n"+e.codeChunk.code+"\n`````\n";if("error"in e)throw new Error(`${e.error}: ${e.detail}`);throw new Error("Unknown chunk result")})).join("");o(t)}catch(e){n(e)}}))}))}}class U{handleAction(t,o){switch(o){case"explain.consoleMessage:context":case"explain.console-message.context.error":case"explain.console-message.context.warning":case"explain.console-message.context.other":case"explain.console-message.hover":{const n=t.flavor(m.ConsoleViewMessage.ConsoleViewMessage);if(n){o.startsWith("explain.consoleMessage:context")?e.userMetrics.actionTaken(e.UserMetrics.Action.InsightRequestedViaContextMenu):"explain.console-message.hover"===o&&e.userMetrics.actionTaken(e.UserMetrics.Action.InsightRequestedViaHoverButton);const t=new z(new y(n),new O);return n.setInsight(t),t.update(),!0}return!1}}return!1}}export{U as ActionDelegate,A as CloseEvent,z as ConsoleInsight,O as InsightProvider,D as MarkdownRenderer,y as PromptBuilder,v as SourceType,x as allowHeader,E as formatConsoleMessage,k as formatNetworkRequest,b as formatRelatedCode,$ as formatStackTrace,w as lineWhitespace};
