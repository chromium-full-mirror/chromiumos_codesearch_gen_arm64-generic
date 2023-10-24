import*as e from"../../../core/host/host.js";import*as t from"../../../core/i18n/i18n.js";import*as a from"../../../core/sdk/sdk.js";import*as r from"../../../ui/components/buttons/buttons.js";import"../../../ui/components/dialogs/dialogs.js";import*as o from"../../../ui/components/icon_button/icon_button.js";import*as n from"../../../ui/components/menus/menus.js";import*as s from"../../../ui/components/suggestion_input/suggestion_input.js";import*as i from"../../../ui/legacy/legacy.js";import*as l from"../../../ui/lit-html/lit-html.js";import*as p from"../../elements/components/components.js";const d=new CSSStyleSheet;d.replaceSync("*{box-sizing:border-box;padding:0;margin:0;font-size:inherit}:host{display:block;height:100%}.target-select-menu{max-width:180px}.warning-icon{margin-left:-18px;margin-right:4px}.row{flex-wrap:wrap}.row,\n.row-icons{display:flex;flex-direction:row;color:var(--sys-color-token-property-special);font-family:var(--monospace-font-family);font-size:var(--monospace-font-size);align-items:center;line-height:18px;margin-top:3px}.separator{margin-right:0.5em;color:var(--sys-color-on-surface)}ul{padding-left:2em}.optional-parameter{color:var(--sys-color-token-attribute-value);--override-color-recorder-input:var(--sys-color-on-surface)}.undefined-parameter{color:var(--sys-color-state-disabled)}.wrapper{padding-left:1em;overflow-x:hidden;height:100%;width:100%;padding-bottom:50px;padding-top:0.5em}.clear-button,\n.add-button,\n.delete-button{opacity:0%;transition:opacity 0.3s ease-in-out}.clear-button,\n.delete-button{margin-left:5px}.row:focus-within .delete-button,\n.row:focus-within .add-button,\n.row:focus-within .clear-button,\n.row:hover .delete-button,\n.row:hover .add-button,\n.row:hover .clear-button{opacity:100%}\n/*# sourceURL=JSONEditor.css */\n");var c=self&&self.__decorate||function(e,t,a,r){var o,n=arguments.length,s=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(s=(n<3?o(s):n>3?o(t,a,s):o(t,a))||s);return n>3&&s&&Object.defineProperty(t,a,s),s};const{html:m,Decorators:u,LitElement:h,Directives:g,nothing:y}=l,{customElement:v,property:f,state:b}=u,{live:$,classMap:w,repeat:C}=g,P={deleteParameter:"Delete parameter",addParameter:"Add a parameter",resetDefaultValue:"Reset to default value",addCustomProperty:"Add custom property"},T=t.i18n.registerUIStrings("panels/protocol_monitor/components/JSONEditor.ts",P),I=t.i18n.getLocalizedString.bind(void 0,T);class S extends Event{static eventName="submiteditor";data;constructor(e){super(S.eventName),this.data=e}}const j=new Map([["string",""],["number",0],["boolean",!1]]),N="dummy",E="<empty_string>";function k(e,t){return e.toLowerCase().includes(t.toLowerCase())}let R=class extends h{static styles=[d];command="";targetId;#e;constructor(){super(),this.parameters=[],this.targets=[],this.addEventListener("keydown",(e=>{"Enter"===e.key&&(e.ctrlKey||e.metaKey)&&(this.#t(e),this.dispatchEvent(new S({command:this.command,parameters:this.getParameters(),targetId:this.targetId})))}))}connectedCallback(){super.connectedCallback(),this.#e=new i.PopoverHelper.PopoverHelper(this,(e=>this.#a(e))),this.#e.setDisableOnClick(!0),this.#e.setTimeout(300),this.#e.setHasPadding(!0);a.TargetManager.TargetManager.instance().addEventListener(a.TargetManager.Events.AvailableTargetsChanged,this.#r,this),this.#r()}disconnectedCallback(){super.disconnectedCallback(),this.#e?.hidePopover(),this.#e?.dispose();a.TargetManager.TargetManager.instance().removeEventListener(a.TargetManager.Events.AvailableTargetsChanged,this.#r,this)}#r(){this.targets=a.TargetManager.TargetManager.instance().targets(),this.targets.length&&void 0===this.targetId&&(this.targetId=this.targets[0].id())}getParameters(){const e=t=>{if(void 0!==t.value)switch(t.type){case"number":return Number(t.value);case"boolean":return Boolean(t.value);case"object":{const a={};for(const r of t.value){void 0!==e(r)&&(a[r.name]=e(r))}if(0===Object.keys(a).length)return;return a}case"array":{const a=[];for(const r of t.value)a.push(e(r));return 0===a.length?[]:a}default:return t.value}},t={};for(const a of this.parameters)t[a.name]=e(a);return e({type:"object",name:N,optional:!0,value:this.parameters,description:""})}displayCommand(e,t,a){this.targetId=a,this.command=e;const r=this.metadataByCommand.get(this.command);if(!r?.parameters)return;this.populateParametersForCommandWithDefaultValues();const o=this.#o("",t,{typeRef:N,type:"object",name:"",description:"",optional:!0,value:[]},r.parameters).value,n=new Map(this.parameters.map((e=>[e.name,e])));for(const e of o){const t=n.get(e.name);t&&(t.value=e.value)}this.requestUpdate()}#o(e,t,a,r){const o=a?.type||typeof t,n=a?.description??"",s=a?.optional??!0;switch(o){case"string":case"boolean":case"number":return this.#n(e,t,a);case"object":return this.#s(e,t,a,r);case"array":return this.#i(e,t,a)}return{type:o,name:e,optional:s,typeRef:a?.typeRef,value:t,description:n}}#n(e,t,a){const r=a?.type||typeof t,o=a?.description??"";return{type:r,name:e,optional:a?.optional??!0,typeRef:a?.typeRef,value:t,description:o,isCorrectType:!a||this.#l(a,String(t))}}#s(e,t,a,r){const o=a?.description??"";if("object"!=typeof t||null===t)throw Error("The value is not an object");const n=a?.typeRef;if(!n)throw Error("Every object parameters should have a type ref");const s=n===N?r:this.typesByName.get(n);if(!s)throw Error("No nested type for keys were found");const i=[];for(const e of Object.keys(t)){const a=s.find((t=>t.name===e));i.push(this.#o(e,t[e],a))}return{type:"object",name:e,optional:a.optional,typeRef:a.typeRef,value:i,description:o,isCorrectType:!0}}#i(e,t,a){const r=a?.description??"",o=a?.optional??!0,n=a?.typeRef;if(!n)throw Error("Every array parameters should have a type ref");if(!Array.isArray(t))throw Error("The value is not an array");const s=this.#p(n)?void 0:{optional:!0,type:"object",value:[],typeRef:n,description:"",name:""},i=[];for(let e=0;e<t.length;e++){const a=this.#o(`${e}`,t[e],s);i.push(a)}return{type:"array",name:e,optional:o,typeRef:a?.typeRef,value:i,description:r,isCorrectType:!0}}#a(e){const t=e.composedPath()[0],a=this.#d(t);if(!a?.description)return null;const[r,o]=(e=>{if(e.length>150){const[t,a]=e.split(".");return[t,a]}return[e,""]})(a.description),n=a.type,s=a.replyArgs;let i="";return i=s?o+`Returns: ${s}<br>`:n?o+`<br>Type: ${n}<br>`:o,{box:t.boxInWindow(),show:async e=>{const t=new p.CSSHintDetailsView.CSSHintDetailsView({getMessage:()=>`<code><span>${r}</span></code>`,getPossibleFixMessage:()=>i,getLearnMoreLink:()=>`https://chromedevtools.github.io/devtools-protocol/tot/${this.command.split(".")[0]}/`});return e.contentElement.appendChild(t),!0}}}#d(e){if(e.matches(".command")){const e=this.metadataByCommand.get(this.command);if(e)return{description:e.description,replyArgs:e.replyArgs}}if(e.matches(".parameter")){const t=e.dataset.paramid;if(!t)return;const a=t.split("."),{parameter:r}=this.#c(a);if(!r.description)return;return{description:r.description,type:r.type}}}getCommandJson(){return""!==this.command?JSON.stringify({command:this.command,parameters:this.getParameters()}):""}#m(){const t=this.getCommandJson();e.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(t)}#u(){this.dispatchEvent(new S({command:this.command,parameters:this.getParameters(),targetId:this.targetId}))}populateParametersForCommandWithDefaultValues(){const e=this.metadataByCommand.get(this.command)?.parameters;e&&(this.parameters=e.map((e=>this.#h(e))))}#h(e){if("object"===e.type){let t=e.typeRef;t||(t=N);const a=(this.typesByName.get(t)??[]).map((e=>this.#h(e)));return{...e,value:e.optional?void 0:a,isCorrectType:!0}}return"array"===e.type?{...e,value:e.value?.map((e=>this.#h(e)))||[],isCorrectType:!0}:{...e,value:e.optional?void 0:j.get(e.type),isCorrectType:!0}}#c(e){let t,a=this.parameters;for(let r=0;r<e.length;r++){const o=e[r],n=a.find((e=>e.name===o));if(r===e.length-1)return{parameter:n,parentParameter:t};if("array"!==n?.type&&"object"!==n?.type)throw new Error("Parameter on the path in not an object or an array");n.value&&(a=n.value),t=n}throw new Error("Not found")}#l(e,t){if("number"===e.type&&isNaN(Number(t)))return!1;const a=this.#g(e);return!(0!==a.length&&!a.includes(t))}#y=e=>{if(!(e.target instanceof s.SuggestionInput.SuggestionInput))return;let t;if(e instanceof KeyboardEvent){const a=e.target.renderRoot.querySelector("devtools-editable-content");if(!a)return;t=a.innerText}else t=e.target.value;const a=e.target.getAttribute("data-paramid");if(!a)return;const r=a.split("."),o=this.#c(r).parameter;""===t?o.value=j.get(o.type):(o.value=t,o.isCorrectType=this.#l(o,t)),this.requestUpdate()};#v=e=>{if(!(e.target instanceof s.SuggestionInput.SuggestionInput))return;const t=e.target.value,a=e.target.getAttribute("data-paramid");if(!a)return;const r=a.split("."),{parameter:o}=this.#c(r);o.name=t,this.requestUpdate()};#t=e=>{e.target instanceof s.SuggestionInput.SuggestionInput&&"Enter"===e.key&&(e.ctrlKey||e.metaKey)&&this.#y(e)};#f(e){if(!(e.target instanceof s.SuggestionInput.SuggestionInput))return;const t=e.target.getAttribute("data-paramid");if(!t)return;const a=t.split(".");this.#c(a).parameter.isCorrectType=!0,this.requestUpdate()}#b=async e=>{e.target instanceof s.SuggestionInput.SuggestionInput&&(this.command=e.target.value),this.populateParametersForCommandWithDefaultValues()};#$(e){if(e)return`${e.name()} (${e.inspectedURL()})`}#p(e){return"string"===e||"boolean"===e||"number"===e}#w(e,t){if("object"===e.type){let a=e.typeRef;a||(a=N);const r=(this.typesByName.get(a)??[]).map((e=>this.#w(e,e.name)));return{type:"object",name:t,optional:e.optional,typeRef:a,value:r,isCorrectType:!0,description:e.description}}return{type:e.type,name:t,optional:e.optional,isCorrectType:!0,typeRef:e.typeRef,value:e.optional?void 0:j.get(e.type),description:e.description}}#C(e){const t=e.split("."),{parameter:a,parentParameter:r}=this.#c(t);if(a){switch(a.type){case"array":{const e=a.typeRef;if(!e)throw Error("Every array parameter must have a typeRef");const t=this.typesByName.get(e)??[],r=t.map((e=>this.#w(e,e.name)));let o=this.#p(e)?e:"object";0===t.length&&this.enumsByName.get(e)&&(o="string"),a.value.push({type:o,name:String(a.value.length),optional:!0,typeRef:e,value:0!==r.length?r:j.get(a.type),description:"",isCorrectType:!0});break}case"object":{let e=a.typeRef;if(e||(e=N),a.value||(a.value=[]),!this.typesByName.get(e)){a.value.push({type:"string",name:"",optional:!0,value:"",isCorrectType:!0,description:"",isKeyEditable:!0});break}const t=this.typesByName.get(e)??[],o=t.map((e=>this.#w(e,e.name))),n=t.map((e=>this.#h(e)));r?a.value.push({type:"object",name:"",optional:!0,typeRef:e,value:o,isCorrectType:!0,description:""}):a.value=n;break}default:a.value=j.get(a.type)}this.requestUpdate()}}#P(e,t){if(e&&void 0!==e.value){switch(e.type){case"object":if(e.optional&&!t){e.value=void 0;break}e.typeRef&&this.typesByName.get(e.typeRef)?e.value.forEach((e=>this.#P(e,t))):e.value=[];break;case"array":e.value=[];break;default:e.value=e.optional?void 0:j.get(e.type),e.isCorrectType=!0}this.requestUpdate()}}#T(e,t){if(e&&Array.isArray(t.value)){if(t.value.splice(t.value.findIndex((t=>t===e)),1),"array"===t.type)for(let e=0;e<t.value.length;e++)t.value[e].name=String(e);this.requestUpdate()}}#I(){const e=this.targets.find((e=>e.id()===this.targetId)),t=e?this.#$(e):this.#$(this.targets[0]);return m`
    <div class="row attribute padded">
      <div>target<span class="separator">:</span></div>
      <${n.SelectMenu.SelectMenu.litTagName}
            class="target-select-menu"
            @selectmenuselected=${this.#S}
            .showDivider=${!0}
            .showArrow=${!0}
            .sideButton=${!1}
            .showSelectedItem=${!0}
            .showConnector=${!1}
            .position=${"bottom"}
            .buttonTitle=${t}
          >
          ${C(this.targets,(e=>l.html`
                <${n.Menu.MenuItem.litTagName}
                  .value=${e.id()}>
                    ${this.#$(e)}
                </${n.Menu.MenuItem.litTagName}>
              `))}
          </${n.SelectMenu.SelectMenu.litTagName}>
    </div>
  `}#S(e){this.targetId=e.itemValue,this.requestUpdate()}#g(e){if("string"===e.type){const t=this.enumsByName.get(`${e.typeRef}`)??{};return Object.values(t)}return"boolean"===e.type?["true","false"]:[]}#j(e){return m`
          <devtools-button
            title=${e.title}
            .size=${"SMALL"}
            .iconName=${e.iconName}
            .variant=${"round"}
            class=${w(e.classMap)}
            @click=${e.onClick}
          ></devtools-button>
        `}#N(){return l.html`<${o.Icon.Icon.litTagName}
    .data=${{iconName:"warning-filled",color:"var(--icon-warning)",width:"14px",height:"14px"}}
    class=${w({"warning-icon":!0})}
  >
  </${o.Icon.Icon.litTagName}>`}#E(e,t,a,r){return e.sort(((e,t)=>Number(e.optional)-Number(t.optional))),m`
      <ul>
        ${C(e,(e=>{const o=a?`${r}.${e.name}`:e.name,n="array"===e.type||"object"===e.type?e.value??[]:[],s=e=>{this.#y(e)},i=e=>{this.#t(e)},l=e=>{this.#f(e)},p=this.#p(e.type),d="array"===e.type,c=a&&"array"===a.type,u=a&&"object"===a.type,h="object"===e.type,g=void 0===e.value,v=e.optional,f=h&&e.typeRef&&void 0!==this.typesByName.get(e.typeRef),b=e.isKeyEditable,C=h&&!f,T="string"===e.type||"boolean"===e.type,S=d&&!g&&0!==e.value.length||h&&!g,N={"optional-parameter":e.optional,parameter:!0,"undefined-parameter":void 0===e.value&&e.optional};return m`
                <li class="row">
                  <div class="row-icons">
                      ${e.isCorrectType?y:m`${this.#N()}`}

                      <!-- If an object parameter has no predefined keys, show an input to enter the key, otherwise show the name of the parameter -->
                      <div class=${w(N)} data-paramId=${o}>
                          ${b?m`<devtools-suggestion-input
                              data-paramId=${o}
                              isKey=${!0}
                              .isCorrectInput=${$(e.isCorrectType)}
                              .options=${T?this.#g(e):[]}
                              .autocomplete=${!1}
                              .value=${$(e.name??"")}
                              .placeholder=${""===e.value?E:`<${j.get(e.type)}>`}
                              @blur=${e=>{this.#v(e)}}
                              @focus=${l}
                              @keydown=${i}
                            ></devtools-suggestion-input>`:m`${e.name}`} <span class="separator">:</span>
                      </div>

                      <!-- Render button to add values inside an array parameter -->
                      ${d?m`
                        ${this.#j({title:I(P.addParameter),iconName:"plus",onClick:()=>this.#C(o),classMap:{"add-button":!0}})}
                      `:y}

                      <!-- Render button to complete reset an array parameter or an object parameter-->
                      ${S?this.#j({title:I(P.resetDefaultValue),iconName:"clear",onClick:()=>this.#P(e,c),classMap:{"clear-button":!0}}):y}

                      <!-- Render the buttons to change the value from undefined to empty string for optional primitive parameters -->
                      ${p&&!c&&v&&g?m`  ${this.#j({title:I(P.addParameter),iconName:"plus",onClick:()=>this.#C(o),classMap:{"add-button":!0}})}`:y}

                      <!-- Render the buttons to change the value from undefined to populate the values inside object with their default values -->
                      ${h&&v&&g&&f?m`  ${this.#j({title:I(P.addParameter),iconName:"plus",onClick:()=>this.#C(o),classMap:{"add-button":!0}})}`:y}
                  </div>

                  <div class="row-icons">
                      <!-- If an object has no predefined keys, show an input to enter the value, and a delete icon to delete the whole key/value pair -->
                      ${b&&u?m`
                      <devtools-suggestion-input
                          data-paramId=${o}
                          .isCorrectInput=${$(e.isCorrectType)}
                          .options=${T?this.#g(e):[]}
                          .autocomplete=${!1}
                          .value=${$(e.value??"")}
                          .placeholder=${""===e.value?E:`<${j.get(e.type)}>`}
                          @blur=${s}
                          @focus=${l}
                          @keydown=${i}
                        ></devtools-suggestion-input>

                        ${this.#j({title:I(P.deleteParameter),iconName:"bin",onClick:()=>this.#T(e,a),classMap:{deleteButton:!0,deleteIcon:!0}})}`:y}

                    <!-- In case  the parameter is not optional or its value is not undefined render the input -->
                    ${!p||b||g&&v||c?y:m`
                        <devtools-suggestion-input
                          data-paramId=${o}
                          .strikethrough=${$(e.isCorrectType)}
                          .options=${T?this.#g(e):[]}
                          .autocomplete=${!1}
                          .value=${$(e.value??"")}
                          .placeholder=${""===e.value?E:`<${j.get(e.type)}>`}
                          @blur=${s}
                          @focus=${l}
                          @keydown=${i}
                        ></devtools-suggestion-input>`}

                    <!-- Render the buttons to change the value from empty string to undefined for optional primitive parameters -->
                    ${!p||b||c||!v||g?y:m`  ${this.#j({title:I(P.resetDefaultValue),iconName:"clear",onClick:()=>this.#P(e),classMap:{"clear-button":!0}})}`}

                    <!-- If the parameter is an object with no predefined keys, renders a button to add key/value pairs to it's value -->
                    ${C?m`
                      ${this.#j({title:I(P.addCustomProperty),iconName:"plus",onClick:()=>this.#C(o),classMap:{deleteButton:!0}})}
                    `:y}

                    <!-- In case the parameter is nested inside an array we render the input field as well as a delete button -->
                    ${c?m`
                    <!-- If the parameter is an object we don't want to display the input field we just want the delete button-->
                    ${h?y:m`
                    <devtools-suggestion-input
                      data-paramId=${o}
                      .options=${T?this.#g(e):[]}
                      .autocomplete=${!1}
                      .value=${$(e.value??"")}
                      .placeholder=${""===e.value?E:`<${j.get(e.type)}>`}
                      @blur=${s}
                      @keydown=${i}
                      class=${w({"json-input":!0})}
                    ></devtools-suggestion-input>`}

                    ${this.#j({title:I(P.deleteParameter),iconName:"bin",onClick:()=>this.#T(e,a),classMap:{"delete-button":!0}})}`:y}
                  </div>
                </li>
                ${this.#E(n,t,e,o)}
              `}))}
      </ul>
    `}render(){return m`
    <div class="wrapper">
      ${this.#I()}
      <div class="row attribute padded">
        <div class="command">command<span class="separator">:</span></div>
        <devtools-suggestion-input
          .options=${[...this.metadataByCommand.keys()]}
          .value=${this.command}
          .placeholder=${"Enter your command..."}
          .suggestionFilter=${k}
          @blur=${this.#b}
          class=${w({"json-input":!0})}
        ></devtools-suggestion-input>
      </div>
      ${this.parameters.length?m`
      <div class="row attribute padded">
        <div>parameters<span class="separator">:</span></div>
      </div>
        ${this.#E(this.parameters)}
      `:y}
    </div>
    <devtools-pm-toolbar @copycommand=${this.#m} @commandsent=${this.#u}></devtools-pm-toolbar>`}};c([f()],R.prototype,"metadataByCommand",void 0),c([f()],R.prototype,"typesByName",void 0),c([f()],R.prototype,"enumsByName",void 0),c([b()],R.prototype,"parameters",void 0),c([b()],R.prototype,"targets",void 0),c([b()],R.prototype,"command",void 0),c([b()],R.prototype,"targetId",void 0),R=c([v("devtools-json-editor")],R);var B=Object.freeze({__proto__:null,SubmitEditorEvent:S,suggestionFilter:k,get JSONEditor(){return R}});const x=new CSSStyleSheet;x.replaceSync("*{box-sizing:border-box;padding:0;margin:0;font-size:inherit}:host{display:block}.toolbar{align-items:center;display:flex;justify-content:space-between;padding-left:5px;padding-right:10px;padding-top:1px;height:27px;background-color:var(--sys-color-cdt-base-container);position:absolute;bottom:0;width:100%;border-top:1px solid var(--sys-color-divider)}.toolbar devtools-button{width:20px;height:20px}\n/*# sourceURL=toolbar.css */\n");var M=self&&self.__decorate||function(e,t,a,r){var o,n=arguments.length,s=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(s=(n<3?o(s):n>3?o(t,a,s):o(t,a))||s);return n>3&&s&&Object.defineProperty(t,a,s),s};const{html:D,Decorators:A,LitElement:O}=l,{customElement:L}=A,V={sendCommandCtrlEnter:"Send command - Ctrl+Enter",sendCommandCmdEnter:"Send command - ⌘+Enter",copyCommand:"Copy command"},_=t.i18n.registerUIStrings("panels/protocol_monitor/components/Toolbar.ts",V),U=t.i18n.getLocalizedString.bind(void 0,_),H=new URL("../../../Images/copy.svg",import.meta.url).toString(),z=new URL("../../../Images/send.svg",import.meta.url).toString();class K extends Event{static eventName="copycommand";constructor(){super(K.eventName,{bubbles:!0,composed:!0})}}class F extends Event{static eventName="commandsent";constructor(){super(F.eventName,{bubbles:!0,composed:!0})}}let q=class extends O{static styles=[x];#k=()=>{this.dispatchEvent(new K)};#R=()=>{this.dispatchEvent(new F)};render(){return D`
        <div class="toolbar">
          <${r.Button.Button.litTagName}
          title=${U(V.copyCommand)}
          .size=${"SMALL"}
          .iconUrl=${H}
          .variant=${"toolbar"}
          @click=${this.#k}
        ></${r.Button.Button.litTagName}>
        <${r.Button.Button.litTagName}
          .size=${"SMALL"}
          title=${e.Platform.isMac()?U(V.sendCommandCmdEnter):U(V.sendCommandCtrlEnter)}
          .iconUrl=${z}
          .variant=${"primary_toolbar"}
          @click=${this.#R}
        ></${r.Button.Button.litTagName}>
      </div>
    `}};q=M([L("devtools-pm-toolbar")],q);var J=Object.freeze({__proto__:null,CopyCommandEvent:K,SendCommandEvent:F,get Toolbar(){return q}});export{B as JSONEditor,J as Toolbar};
