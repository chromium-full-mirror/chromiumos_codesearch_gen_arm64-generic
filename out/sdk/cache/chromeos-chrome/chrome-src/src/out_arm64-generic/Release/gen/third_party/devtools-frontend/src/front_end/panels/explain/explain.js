import*as e from"../../core/host/host.js";import*as t from"../../core/i18n/i18n.js";import*as n from"../../core/sdk/sdk.js";import*as o from"../../third_party/marked/marked.js";import*as s from"../../ui/components/buttons/buttons.js";import*as i from"../../ui/components/helpers/helpers.js";import*as r from"../../ui/components/icon_button/icon_button.js";import*as a from"../../ui/components/markdown_view/markdown_view.js";import*as l from"../../ui/legacy/legacy.js";import*as c from"../../ui/lit-html/lit-html.js";import*as d from"../../ui/visual_logging/visual_logging.js";import*as h from"../../models/bindings/bindings.js";import*as u from"../../models/formatter/formatter.js";import*as g from"../../models/logs/logs.js";import*as p from"../../ui/legacy/components/utils/utils.js";import*as m from"../console/console.js";import*as f from"../../core/root/root.js";const v=1e3;var y;!function(e){e.MESSAGE="message",e.STACKTRACE="stacktrace",e.NETWORK_REQUEST="networkRequest",e.RELATED_CODE="relatedCode"}(y||(y={}));class x{#e;constructor(e){this.#e=e}async getNetworkRequest(){const e=this.#e.consoleMessage().getAffectedResources()?.requestId;if(!e)return;return g.NetworkLog.NetworkLog.instance().requestsForId(e)[0]}async getMessageSourceCode(){const e=this.#e.consoleMessage().stackTrace?.callFrames[0],t=this.#e.consoleMessage().runtimeModel(),o=t?.debuggerModel();if(!o||!t||!e)return{text:"",columnNumber:0,lineNumber:0};const s=new n.DebuggerModel.Location(o,e.scriptId,e.lineNumber,e.columnNumber),i=await h.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().rawLocationToUILocation(s),r=await(i?.uiSourceCode.requestContent()),a=!r?.isEncoded&&r?.content?r.content:"",l=a.indexOf("\n");if(a.length>v&&(l<0||l>v)){const{formattedContent:e,formattedMapping:t}=await u.ScriptFormatter.formatScriptContent(i?.uiSourceCode.mimeType()??"text/javascript",a),[n,o]=t.originalToFormatted(i?.lineNumber??0,i?.columnNumber??0);return{text:e,columnNumber:o,lineNumber:n}}return{text:a,columnNumber:i?.columnNumber??0,lineNumber:i?.lineNumber??0}}async buildPrompt(e=Object.values(y)){const[t,n]=await Promise.all([e.includes(y.RELATED_CODE)?this.getMessageSourceCode():void 0,e.includes(y.NETWORK_REQUEST)?this.getNetworkRequest():void 0]),o=t?.text?b(t):"",s=n?T(n):"",i=e.includes(y.STACKTRACE)?M(this.#e):"",r=$(this.#e),a=this.formatPrompt({message:[r,i].join("\n").trim(),relatedCode:o,relatedRequest:s}),l=[{type:y.MESSAGE,value:r}];return i&&l.push({type:y.STACKTRACE,value:i}),o&&l.push({type:y.RELATED_CODE,value:o}),s&&l.push({type:y.NETWORK_REQUEST,value:s}),{prompt:a,sources:l}}formatPrompt({message:e,relatedCode:t,relatedRequest:n}){let o=`Why does browser show an error\n${e}`;return t&&(o+=`\nFor the following code in my web app\n\n\`\`\`\n${t}\n\`\`\``),n&&(o+=`\nFor the following network request in my web app\n\n\`\`\`\n${n}\n\`\`\``),o}}function w(e){const t=e.name.toLowerCase().trim();return!t.startsWith("x-")&&("cookie"!==t&&"set-cookie"!==t&&"authorization"!==t)}function k(e){const t=/^\s*/.exec(e);if(!t||!t.length)return null;const n=t[0];return n===e?null:n}function b({text:e,columnNumber:t,lineNumber:n},o=1e3){const s=e.split("\n");if(s[n].length>=o/2){const e=Math.max(t-o/2,0),i=Math.min(t+o/2,s[n].length);return s[n].substring(e,i)}let i=0,r=n,a=k(s[n]);const l=new Map;for(;void 0!==s[r]&&i+s[r].length<=o/2;){const e=k(s[r]);null===e||null===a||e!==a&&e.startsWith(a)||(/^\s*[\}\)\]]/.exec(s[r])||l.set(e,r),a=e),i+=s[r].length+1,r--}r=n+1;let c=n,d=n;for(a=k(s[n]);void 0!==s[r]&&i+s[r].length<=o;){i+=s[r].length;const e=k(s[r]);if(null!==e&&null!==a&&(e===a||!e.startsWith(a))){const t=s[r+1],n=t?k(t):null;n&&n!==e&&n.startsWith(e)||l.has(e)&&(c=l.get(e)??0,d=r),a=e}r++}return s.slice(c,d+1).join("\n")}function T(e){return`Request: ${e.url()}\n\nRequest headers:\n${e.requestHeaders().filter(w).map((e=>`${e.name}: ${e.value}`)).join("\n")}\n\nResponse headers:\n${e.responseHeaders.filter(w).map((e=>`${e.name}: ${e.value}`)).join("\n")}\n\nResponse status: ${e.statusCode} ${e.statusText}`}function $(e){return e.toMessageTextString()}function M(e){const t=e.contentElement().querySelector(".stack-preview-container");if(!t)return"";const n=t.shadowRoot?.querySelector(".stack-preview-container");return n.childTextNodes().filter((e=>!e.parentElement?.closest(".show-all-link,.show-less-link,.hidden-row"))).map(p.Linkifier.Linkifier.untruncatedNodeText).join("").trim()}const E=new CSSStyleSheet;E.replaceSync('*{padding:0;margin:0;box-sizing:border-box}:host{--max-height:2000px;--loading-max-height:140px;font-family:var(--default-font-family);font-size:inherit;display:block;overflow:hidden;max-height:0}:host-context(.opening){animation:expand-to-loading var(--sys-motion-duration-medium2) var(--sys-motion-easing-emphasized);animation-fill-mode:forwards}:host-context(.loaded){animation:expand-to-full var(--sys-motion-duration-medium2) var(--sys-motion-easing-emphasized);animation-fill-mode:forwards}:host-context(.closing){animation:collapse var(--sys-motion-duration-medium2) var(--sys-motion-easing-emphasized);animation-fill-mode:forwards}@keyframes expand-to-loading{from{max-height:0}to{max-height:var(--loading-max-height)}}@keyframes expand-to-full{from{max-height:var(--actual-height,var(--loading-max-height))}to{max-height:var(--max-height)}}@keyframes collapse{from{max-height:var(--actual-height,var(--max-height))}to{max-height:0;margin-top:0;margin-bottom:0}}.wrapper{padding:16px 20px;background-color:var(--sys-color-cdt-base-container);border-radius:16px}.wrapper.top{border-radius:16px 16px 4px 4px}.wrapper.bottom{margin-top:5px;border-radius:4px 4px 16px 16px}header{display:flex;flex-direction:row;gap:6px;color:var(--sys-color-on-surface);font-size:14px;font-style:normal;font-weight:500;line-height:20px;height:20px}header > .filler{flex:1}main{--override-markdown-view-message-color:var(--sys-color-on-surface);margin:20px 0 0;color:var(--sys-color-on-surface);font-size:13px;font-style:normal;font-weight:400;line-height:20px}devtools-markdown-view{margin-bottom:12px}footer{display:flex;flex-direction:row;align-items:flex-end;color:var(--sys-color-on-surface);font-style:normal;font-weight:400;line-height:normal;margin-top:16px}footer > .filler{flex:1}footer .rating{display:flex;flex-direction:row;gap:10px}textarea{height:84px;padding:10px;border-radius:8px;border:1px solid var(--sys-color-neutral-outline);width:100%;font-family:var(--default-font-family);font-size:inherit}.buttons{margin-bottom:16px}.disclaimer{display:flex;gap:2px;color:var(--sys-color-on-surface-subtle);font-size:12px;align-items:flex-start;flex-direction:column}.link{color:var(--sys-color-primary);text-decoration-line:underline;devtools-icon{color:var(--sys-color-primary);width:14px;height:14px}}.loader{background:linear-gradient(130deg,transparent 0%,var(--sys-color-gradient-tertiary) 20%,var(--sys-color-gradient-primary) 40%,transparent 60%,var(--sys-color-gradient-tertiary) 80%,var(--sys-color-gradient-primary) 100%);background-position:0% 0%;background-size:250% 250%;animation:gradient 5s infinite linear}@keyframes gradient{0%{background-position:0 0}100%{background-position:100% 100%}}summary{font-size:13px;font-style:normal;font-weight:400;line-height:20px}details{--collapsed-height:20px;overflow:hidden;height:var(--collapsed-height)}details[open]{height:calc(var(--list-height) + var(--collapsed-height) + 8px);transition:height var(--sys-motion-duration-short4) var(--sys-motion-easing-emphasized)}h2{display:block;font-size:inherit;margin:0;font-weight:inherit}.info{width:20px;height:20px}devtools-icon[name="spark"]{color:var(--sys-color-primary-bright)}devtools-icon[name="dog-paw"]{width:16px;height:16px}\n/*# sourceURL=./components/consoleInsight.css */\n');const N=new CSSStyleSheet;N.replaceSync("*{padding:0;margin:0;box-sizing:border-box}:host{display:block}ul{padding-left:1em;color:var(--sys-color-primary);font-size:13px;font-style:normal;font-weight:400;line-height:20px;margin-top:8px}ul .link{color:var(--sys-color-primary);display:inline-flex!important;align-items:center;gap:4px;text-decoration-line:underline}\n/*# sourceURL=./components/consoleInsightSourcesList.css */\n");const S={consoleMessage:"Console message",stackTrace:"Stacktrace",networkRequest:"Network request",relatedCode:"Related code",generating:"Coming up with an explanation…",insight:"Insight",closeInsight:"Close insight",inputData:"Data used to create this insight",thumbsUp:"Thumbs up",thumbsDown:"Thumbs down",submitFeedback:"Submit feedback",error:"Something went wrong…",opensInNewTab:"(opens in a new tab)",disclaimer:"The following data will be sent to Google to find an explanation for the console message. They may be reviewed by humans and used to improve products.",consentButton:"Continue",learnMore:"Learn more about AI in DevTools",notAvailable:"Console insights is not available",notLoggedIn:"This feature is only available if you are signed into Chrome with your Google account.",syncIsOff:"This feature is only available if you have Chrome sync turned on.",goToSettings:"Go to settings",finePrint:"This is an experimental AI insights tool and won’t always get it right."},I=t.i18n.registerUIStrings("panels/explain/components/ConsoleInsight.ts",S),R=t.i18n.getLocalizedString.bind(void 0,I),{render:C,html:A,Directives:L}=c;class j extends Event{static eventName="close";constructor(){super(j.eventName,{composed:!0,bubbles:!0})}}function B(e){switch(e){case y.MESSAGE:return R(S.consoleMessage);case y.STACKTRACE:return R(S.stackTrace);case y.NETWORK_REQUEST:return R(S.networkRequest);case y.RELATED_CODE:return R(S.relatedCode)}}const F="http://go/console-insights-experiment";class P extends HTMLElement{static async create(t,n,o){const s=await new Promise((t=>{e.InspectorFrontendHost.InspectorFrontendHostInstance.getSyncInformation((e=>{t(e)}))}));return new P(t,n,o,s)}static litTagName=c.literal`devtools-console-insight`;#t=this.attachShadow({mode:"open"});#n="";#o;#s;#i=new U;#r;#a;constructor(e,t,n,o){super(),this.#o=e,this.#s=t,this.#n=n??"",this.#r={type:"not-logged-in"},o?.accountEmail&&o.isSyncActive?this.#r={type:"loading",consentGiven:!1}:o?.accountEmail?o?.isSyncActive||(this.#r={type:"sync-is-off"}):this.#r={type:"not-logged-in"},this.#l(),this.addEventListener("keydown",(e=>{e.stopPropagation()})),this.addEventListener("keyup",(e=>{e.stopPropagation()})),this.addEventListener("keypress",(e=>{e.stopPropagation()})),this.addEventListener("click",(e=>{e.stopPropagation()})),this.tabIndex=0,this.focus(),this.addEventListener("animationend",(()=>{this.style.setProperty("--actual-height",`${this.offsetHeight}px`)}))}connectedCallback(){this.#t.adoptedStyleSheets=[E],this.classList.add("opening"),this.#c()}#d(e){const t=this.#r;this.#r=e,e.type!==t.type&&"loading"===t.type&&this.classList.add("loaded"),this.#l()}async#c(){if("loading"!==this.#r.type)return;if(this.#r.consentGiven)return;const{sources:e}=await this.#o.buildPrompt();this.#d({type:"consent",sources:e})}#h(){this.dispatchEvent(new j),this.classList.add("closing")}#u(){if("insight"!==this.#r.type)throw new Error("Unexpected state");const t=function(e,t,n,o,s,i,r){const a="Negative"===e?{"entry.1465663861":e,"entry.1232404632":n,"entry.37285503":s,"entry.542010749":o,"entry.420621380":i,"entry.822323774":r}:{"entry.1465663861":e,"entry.1805879004":n,"entry.720239045":s,"entry.623054399":o,"entry.1520357991":i,"entry.1966708581":r};return`http://go/console-insights-experiment-rating?usp=pp_url&${Object.keys(a).map((e=>`${e}=${encodeURIComponent(a[e])}`)).join("&")}`}(this.#a?"Positive":"Negative",this.#t.querySelector("textarea")?.value,this.#r.explanation,this.#r.sources.filter((e=>e.type===y.MESSAGE)).map((e=>e.value)).join("\n"),this.#r.sources.filter((e=>e.type===y.STACKTRACE)).map((e=>e.value)).join("\n"),this.#r.sources.filter((e=>e.type===y.RELATED_CODE)).map((e=>e.value)).join("\n"),this.#r.sources.filter((e=>e.type===y.NETWORK_REQUEST)).map((e=>e.value)).join("\n"));e.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab(t)}#g(t){this.#a="true"===t.target.dataset.rating,this.#a?e.userMetrics.actionTaken(e.UserMetrics.Action.InsightRatedPositive):e.userMetrics.actionTaken(e.UserMetrics.Action.InsightRatedNegative),this.#u()}async#p(){this.#d({type:"loading",consentGiven:!0});try{const{sources:t,explanation:n}=await this.#m(),o=this.#f(n),s=!1!==o;this.#d({type:"insight",tokens:s?o:[],validMarkdown:s,explanation:n,sources:t}),e.userMetrics.actionTaken(e.UserMetrics.Action.InsightGenerated)}catch(t){e.userMetrics.actionTaken(e.UserMetrics.Action.InsightErrored),this.#d({type:"error",error:t.message})}}#f(t){try{const e=o.Marked.lexer(t);for(const t of e)this.#i.renderToken(t);return e}catch{return e.userMetrics.actionTaken(e.UserMetrics.Action.InsightErroredMarkdown),!1}}async#m(){try{const{prompt:e,sources:t}=await this.#o.buildPrompt();return{sources:t,explanation:await this.#s.getInsights(e)}}catch(t){throw e.userMetrics.actionTaken(e.UserMetrics.Action.InsightErroredApi),t}}#v(){const t=n.TargetManager.TargetManager.instance().rootTarget();if(null===t)return;const o="chrome://settings";t.targetAgent().invoke_createTarget({url:o}).then((t=>{t.getError()&&e.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab(o)}))}#y(){switch(this.#r.type){case"loading":return A`<main>
            <div role="presentation" class="loader" style="clip-path: url('#clipPath');">
              <svg width="100%" height="64">
                <clipPath id="clipPath">
                  <rect x="0" y="0" width="100%" height="16" rx="8"></rect>
                  <rect x="0" y="24" width="100%" height="16" rx="8"></rect>
                  <rect x="0" y="48" width="100%" height="16" rx="8"></rect>
                </clipPath>
              </svg>
            </div>
          </main>`;case"insight":return A`
        <main>
          ${this.#r.validMarkdown?A`<${a.MarkdownView.MarkdownView.litTagName}
              .data=${{tokens:this.#r.tokens,renderer:this.#i}}>
            </${a.MarkdownView.MarkdownView.litTagName}>`:this.#r.explanation}
          <details style="--list-height: ${20*this.#r.sources.length}px;">
            <summary>${R(S.inputData)}</summary>
            <${q.litTagName} .sources=${this.#r.sources}>
            </${q.litTagName}>
          </details>
        </main>`;case"error":return A`
        <main>
          <div class="error">${this.#r.error}</div>
        </main>`;case"consent":return A`
          <main>
            <p>${R(S.disclaimer)}</p>
            <${q.litTagName} .sources=${this.#r.sources}>
            </${q.litTagName}>
          </main>
        `;case"not-logged-in":return A`
          <main>
            <div class="error">${R(S.notLoggedIn)}</div>
          </main>`;case"sync-is-off":return A`
          <main>
            <div class="error">${R(S.syncIsOff)}</div>
          </main>`}}#x(){switch(this.#r.type){case"loading":case"error":return c.nothing;case"not-logged-in":case"sync-is-off":return A`<footer>
        <div class="filler"></div>
        <div>
          <${s.Button.Button.litTagName}
            @click=${this.#v}
            .data=${{variant:"primary"}}
          >
            ${S.goToSettings}
          </${s.Button.Button.litTagName}>
        </div>
      </footer>`;case"consent":return A`<footer>
          <div class="disclaimer">
            <span>${R(S.finePrint)}</span>
            <span><x-link href=${F} class="link">${R(S.learnMore)}</x-link></span>
          </div>
          <div class="filler"></div>
          <div>
            <${s.Button.Button.litTagName}
              class="consent-button"
              @click=${this.#p}
              .data=${{variant:"primary",iconName:"lightbulb-spark"}}
            >
              ${S.consentButton}
            </${s.Button.Button.litTagName}>
          </div>
        </footer>`;case"insight":return A`<footer>
        <div class="disclaimer">
          <span>${R(S.finePrint)}</span>
          <span><x-link href=${F} class="link">${R(S.learnMore)}</x-link> - <x-link href=${"http://go/console-insights-experiment-general-feedback"} class="link">${R(S.submitFeedback)}</x-link></span>
        </div>
        <div class="filler"></div>
        <div class="rating">
          <${s.Button.Button.litTagName}
            data-rating=${"true"}
            .data=${{variant:"round",size:"SMALL",iconName:"thumb-up",active:this.#a,title:R(S.thumbsUp)}}
            @click=${this.#g}
          ></${s.Button.Button.litTagName}>
          <${s.Button.Button.litTagName}
            data-rating=${"false"}
            .data=${{variant:"round",size:"SMALL",iconName:"thumb-down",active:void 0!==this.#a&&!this.#a,title:R(S.thumbsDown)}}
            @click=${this.#g}
          ></${s.Button.Button.litTagName}>
        </div>

      </footer>`}}#w(){switch(this.#r.type){case"sync-is-off":case"not-logged-in":return R(S.notAvailable);case"loading":return R(S.generating);case"insight":return R(S.insight);case"error":return R(S.error);case"consent":return this.#n}}#l(){C(A`
      <div class="wrapper">
        <header>
          <div class="filler">
            <h2>
              ${this.#w()}
            </h2>
          </div>
          <div>
            <${s.Button.Button.litTagName}
              .data=${{variant:"round",size:"SMALL",iconName:"cross",title:R(S.closeInsight)}}
              jslog=${d.close().track({click:!0})}
              @click=${this.#h}
            ></${s.Button.Button.litTagName}>
          </div>
        </header>
        ${this.#y()}
        ${this.#x()}
      </div>
    `,this.#t,{host:this})}}class q extends HTMLElement{static litTagName=c.literal`devtools-console-insight-sources-list`;#t=this.attachShadow({mode:"open"});#k=[];constructor(){super(),this.#t.adoptedStyleSheets=[N]}#l(){C(A`
      <ul>
        ${L.repeat(this.#k,(e=>e.value),(e=>A`<li><x-link class="link" title="${B(e.type)} ${R(S.opensInNewTab)}" href=${`data:text/plain,${encodeURIComponent(e.value)}`}>
            ${B(e.type)}
            <${r.Icon.Icon.litTagName} name="open-externally">
            </${r.Icon.Icon.litTagName}>
          </x-link></li>`))}
      </ul>
    `,this.#t,{host:this})}set sources(e){this.#k=e,this.#l()}}i.CustomElements.defineComponent("devtools-console-insight",P),i.CustomElements.defineComponent("devtools-console-insight-sources-list",q);class U extends a.MarkdownView.MarkdownLitRenderer{renderToken(e){const t=this.templateForToken(e);return null===t?c.html`${e.raw}`:t}templateForToken(e){switch(e.type){case"heading":return A`<strong>${this.renderText(e)}</strong>`;case"link":case"image":return c.html`${l.XLink.XLink.create(e.href,e.text,void 0,void 0,"token")}`}return super.templateForToken(e)}}class D{static buildApiRequest(e){const t={input:e,client:"CHROME_DEVTOOLS"},n=parseFloat(f.Runtime.Runtime.queryParam("aidaTemperature")||"");isNaN(n)||(t.options??={},t.options.temperature=n);const o=f.Runtime.Runtime.queryParam("aidaModelId");return o&&(t.options??={},t.options.model_id=o),t}async getInsights(t){return new Promise(((n,o)=>{if(!e.InspectorFrontendHost.InspectorFrontendHostInstance.doAidaConversation)return o(new Error("doAidaConversation is not available"));console.time("request"),e.InspectorFrontendHost.InspectorFrontendHostInstance.doAidaConversation(JSON.stringify(D.buildApiRequest(t)),(e=>{console.timeEnd("request");try{const t=JSON.parse(e.response),o=[];let s=!1;const i="\n`````\n";for(const e of t)if("textChunk"in e)s&&(o.push(i),s=!1),o.push(e.textChunk.text);else{if(!("codeChunk"in e)){if("error"in e){if(403===e.detail?.[0]?.error?.code)throw new Error("Server responded: permission denied");throw new Error(`Server responded: ${JSON.stringify(e)}`)}throw new Error("Unknown chunk result")}s||(o.push(i),s=!0),o.push(e.codeChunk.code)}s&&(o.push(i),s=!1),n(o.join(""))}catch(e){o(e)}}))}))}}class O{handleAction(t,n){switch(n){case"explain.consoleMessage:context":case"explain.console-message.context.error":case"explain.console-message.context.warning":case"explain.console-message.context.other":case"explain.console-message.hover":{const o=l.ActionRegistry.ActionRegistry.instance().getAction(n),s=t.flavor(m.ConsoleViewMessage.ConsoleViewMessage);if(s){n.startsWith("explain.consoleMessage:context")?e.userMetrics.actionTaken(e.UserMetrics.Action.InsightRequestedViaContextMenu):"explain.console-message.hover"===n&&e.userMetrics.actionTaken(e.UserMetrics.Action.InsightRequestedViaHoverButton);const t=new x(s),i=new D;return P.create(t,i,o?.title()).then((e=>{s.setInsight(e)})),!0}return!1}}return!1}}export{O as ActionDelegate,j as CloseEvent,P as ConsoleInsight,D as InsightProvider,U as MarkdownRenderer,x as PromptBuilder,y as SourceType,w as allowHeader,$ as formatConsoleMessage,T as formatNetworkRequest,b as formatRelatedCode,M as formatStackTrace,k as lineWhitespace};
