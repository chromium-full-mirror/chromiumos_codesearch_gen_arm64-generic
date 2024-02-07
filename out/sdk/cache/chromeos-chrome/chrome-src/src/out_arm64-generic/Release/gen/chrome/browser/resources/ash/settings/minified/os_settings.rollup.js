import"./strings.m.js";import{a as assertNotReached,cl as listenOnce,N as NetworkListenerBehavior,W as WebUiListenerMixin,R as RouteObserverMixin,I as I18nMixin,cm as ABOUT_CHROME_OS_SECTION_PATH,m as isRevampWayfindingEnabled,b7 as getInputDeviceSettingsProvider,a4 as MultiDeviceBrowserProxyImpl,j as Router,cn as isAdvancedRoute,co as NETWORK_SECTION_PATH,cp as BLUETOOTH_SECTION_PATH,cq as MULTI_DEVICE_SECTION_PATH,cr as PEOPLE_SECTION_PATH,cs as KERBEROS_SECTION_PATH,ct as DEVICE_SECTION_PATH,cu as PERSONALIZATION_SECTION_PATH,cv as PRIVACY_AND_SECURITY_SECTION_PATH,cw as APPS_SECTION_PATH,cx as ACCESSIBILITY_SECTION_PATH,cy as SYSTEM_PREFERENCES_SECTION_PATH,cz as SEARCH_AND_ASSISTANT_SECTION_PATH,cA as DATE_AND_TIME_SECTION_PATH,cB as LANGUAGES_AND_INPUT_SECTION_PATH,cC as FILES_SECTION_PATH,cD as PRINTING_SECTION_PATH,cE as CROSTINI_SECTION_PATH,cF as RESET_SECTION_PATH,aq as AccountManagerBrowserProxyImpl,_ as assertExists,h as castExists,cG as getDeviceName,ax as MultiDeviceSettingsMode,b8 as FakeInputDeviceSettingsProvider,cH as KeyboardSettingsObserverReceiver,cI as MouseSettingsObserverReceiver,cJ as PointingStickSettingsObserverReceiver,cK as TouchpadSettingsObserverReceiver,cL as routesMojom,O as OncMojo,c as assert,D as DeepLinkingMixin,P as PrefsMixin,S as Setting,bd as AudioAndCaptionsPageBrowserProxyImpl,b as routes,d as cast,cM as getDisplayApi,cN as IronResizableBehavior,ae as DevicePageBrowserProxyImpl,cO as PaperRippleMixin,G as GeolocationAccessLevel,u as focusWithoutInk,cP as getDeviceStateChangesToAnnounce,K as getInstance,cQ as CrLinkRowElement,cR as Fkey,cS as ExtendedFkeysModifier,cT as TopRowActionKey,cU as MetaKey,cV as ModifierKey,cW as SixPackShortcutModifier,cX as SixPackKey,cY as PolicyStatus,i as RouteOriginMixin,n as Section$1,cZ as isInputDeviceSettingsSplitEnabled,c_ as isExternalStorageEnabled,c$ as GraphicsTabletSettingsObserverReceiver,b0 as ACCESSIBILITY_COMMON_IME_ID,d0 as Button,d1 as ButtonState,a1 as mojoString16ToString,a5 as getEuicc,a7 as getPendingESimProfiles,d2 as hasActiveCellularNetwork,a2 as CellularSetupPageName,d3 as getESimProfile,d4 as stringToMojoString16,M as CrPolicyNetworkBehaviorMojo,d5 as NetworkConfigElementBehavior,z as I18nBehavior,d6 as assertNotReached$1,E as assert$1,d7 as htmlEscape,r as recordSettingChange,a3 as ESimManagerListenerMixin,Y as InternetPageBrowserProxyImpl,a6 as getSimSlotCount,d8 as isConnectedToNonCellularNetwork,d9 as getNumESimProfiles,aw as MultiDeviceFeature,au as LockStateMixin,aD as recordLockScreenProgress,aE as LockScreenProgress,da as LockScreenUnlockType,at as fireAuthTokenInvalidEvent,db as PhoneHubPermissionsSetupFlowScreens,dc as PhoneHubPermissionsSetupAction,dd as PhoneHubPermissionsSetupFeatureCombination,de as getNearbyShareSettings,df as observeNearbyShareSettings,av as MultiDeviceFeatureMixin,dg as PhoneHubFeatureAccessStatus,a8 as MultiDeviceFeatureState,dh as OsBluetoothDevicesSubpageBrowserProxyImpl,di as ButtonState$1,dj as ButtonName,F as FocusRowMixin,dk as DeviceItemState,aJ as CrScrollableMixin,dl as PairingAuthType,dm as recordBluetoothUiSurfaceMetrics,dn as BluetoothUiSurface,y as isChild,ar as ParentalControlsBrowserProxyImpl,ab as getImage,as as assertInstanceof,dp as isAccountManagerEnabled,aG as SyncBrowserProxyImpl,dq as AUTH_TOKEN_INVALID_EVENT_TYPE,dr as PrivacyHubNavigationOrigin,ds as isQuickAnswersSupported,dt as isAssistantAllowed,du as shouldShowMultitasking,dv as isGuest,dw as isPowerwashAllowed,dx as shouldShowStartup,dy as isAboutRoute,dz as AndroidAppsBrowserProxyImpl,A as AboutPageBrowserProxyImpl,dA as isBasicRoute,dB as CrSearchFieldMixin,dC as SectionSpec,dD as SubpageSpec,dE as SettingSpec,s as sanitizeInnerHtml,dF as OpenWindowProxyImpl,dG as recordSearch,a$ as FindShortcutMixin,dH as CrContainerShadowMixin,dI as setGlobalScrollTarget,dJ as recordPageFocus,dK as recordPageBlur,dL as recordClick,dM as recordNavigation,dN as getPrefPolicyFields$1,dO as settingsAreEqual,aF as PluralStringProxyImpl,dP as CustomizationRestriction,dQ as SimulateRightClickModifier,dR as recordSavedDevicesUiEventMetrics,dS as FastPairSavedDevicesUiEvent,dT as ColorChangeUpdater}from"./shared.rollup.js";export{ed as ApnDetailDialog,aT as AppLanguageSelectionDialogEntryPoint,aX as AppManagementBrowserProxy,aa as AppManagementComponentBrowserProxy,f3 as AppManagementFileHandlingItemElement,en as AppManagementStore,aV as AppManagementStoreMixin,bY as AppManagementSupportedLinksItemElement,f5 as AppManagementToggleRowElement,al as BrowserChannel,ac as ChromeVoxSubpageBrowserProxyImpl,fe as ConfirmationDialogType,er as ControlledButtonElement,es as ControlledRadioButtonElement,aC as CrActionMenuElement,az as CrButtonElement,e2 as CrCardRadioButtonElement,e1 as CrCheckboxElement,aA as CrDialogElement,aB as CrIconButtonElement,ay as CrInputElement,eb as CrPolicyIndicatorElement,e3 as CrRadioButtonElement,e4 as CrRadioGroupElement,e5 as CrSearchFieldElement,e6 as CrSearchableDropDownElement,ef as CrSettingsPrefs,e7 as CrSliderElement,e8 as CrTextareaElement,e9 as CrToastElement,a9 as CrToggleElement,ec as CrTooltipIconElement,d_ as DEFAULT_CHECKED_VALUE,d$ as DEFAULT_UNCHECKED_VALUE,an as DeviceNameBrowserProxyImpl,ap as DeviceNameState,e0 as ExtensionControlBrowserProxyImpl,et as ExtensionControlledIndicatorElement,f8 as FastPairSavedDevicesOptInStatus,f9 as GoogleDriveBrowserProxy,fa as GoogleDrivePageCallbackRouter,fb as GoogleDrivePageHandlerRemote,fc as GoogleDrivePageRemote,ew as IdleBehavior,ep as LacrosExtensionControlBrowserProxyImpl,eq as LacrosExtensionControlledIndicatorElement,ex as LidClosedBehavior,L as LifetimeBrowserProxyImpl,ea as LocalizedLinkElement,fi as MetricsConsentBrowserProxyImpl,eX as NearbyAccountManagerBrowserProxyImpl,dX as NearbyProgressElement,eY as NearbyShareConfirmPageElement,f2 as NearbyShareDataUsage,eZ as NearbyShareHighVisibilityPageElement,ey as NoteAppLockScreenSupport,aU as OneDriveBrowserProxy,ff as OneDrivePageCallbackRouter,fg as OneDrivePageHandlerRemote,fh as OneDrivePageRemote,ci as OsResetBrowserProxyImpl,f7 as OsSettingsAppsPageElement,a_ as OsSettingsSubpageElement,aH as PageStatus,eV as PhoneHubFeatureAccessProhibitedReason,eW as PhoneHubPermissionsSetupMode,f4 as PluginVmBrowserProxyImpl,aQ as PrivacyHubSensorSubpageUserAction,b2 as PrivacyPageBrowserProxyImpl,fq as Route,fn as SearchEnginesBrowserProxyImpl,b3 as SecureDnsMode,b4 as SecureDnsUiManagementMode,ag as SelectToSpeakSubpageBrowserProxyImpl,ao as SetDeviceNameResult,fo as SettingsCardElement,eu as SettingsDropdownMenuElement,cb as SettingsGoogleDriveSubpageElement,ee as SettingsPrefsElement,fk as SettingsPrivacyHubAppPermissionRow,fl as SettingsPrivacyHubSystemServiceRow,fm as SettingsSearchEngineElement,ev as SettingsSliderElement,af as SettingsToggleButtonElement,fd as Stage,aI as StatusAction,eA as StorageSpaceState,ai as SwitchAccessSubpageBrowserProxyImpl,aj as TextToSpeechSubpageBrowserProxyImpl,ak as TtsVoiceSubpageBrowserProxyImpl,U as UpdateStatus,eP as Vkey,eg as addApp,eR as appNotificationHandlerMojom,eS as appPermissionHandlerMojom,eh as changeApp,fp as createRouterForTesting,f1 as dataUsageStringToEnum,eB as fakeGraphicsTabletButtonActions,eC as fakeGraphicsTablets,eD as fakeKeyboards,eE as fakeKeyboards2,eF as fakeMice,eG as fakeMice2,eH as fakeMouseButtonActions,eI as fakePointingSticks,eJ as fakePointingSticks2,eK as fakeStyluses,eL as fakeTouchpads,eM as fakeTouchpads2,dU as getContactManager,e_ as getReceiveManager,bb as getShortcutInputProvider,dY as nearbyShareMojom,dV as observeContactManager,e$ as observeReceiveManager,el as reduceAction,ei as removeApp,eo as resetGlobalScrollTargetForTesting,f6 as setAppNotificationProviderForTesting,fj as setAppPermissionProviderForTesting,dW as setContactManagerForTesting,ez as setDisplayApiForTesting,eN as setInputDeviceSettingsProviderForTesting,dZ as setNearbyShareSettingsForTesting,f0 as setReceiveManagerForTesting,eQ as setUserActionRecorderForTesting,eT as settingMojom,eO as setupFakeInputDeviceSettingsProvider,em as updateApps,ej as updateSelectedAppId,ek as updateSubAppToParentAppId,eU as userActionRecorderMojom}from"./shared.rollup.js";import{html,PolymerElement,mixinBehaviors,dedupingMixin,flush,afterNextRender,Polymer,beforeNextRender,templatize,microTask,Debouncer,timeOut}from"chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js";import{getBluetoothConfig}from"chrome://resources/ash/common/bluetooth/cros_bluetooth_config.js";import{MojoInterfaceProviderImpl}from"chrome://resources/ash/common/network/mojo_interface_provider.js";import{SystemPropertiesObserverReceiver,BluetoothSystemState,DeviceConnectionState,DeviceType,BluetoothDiscoveryDelegateReceiver,DevicePairingDelegateReceiver,PairingResult,KeyEnteredHandlerReceiver}from"chrome://resources/mojo/chromeos/ash/services/bluetooth_config/public/mojom/cros_bluetooth_config.mojom-webui.js";import{FilterType,NO_LIMIT,HiddenSsidMode,VpnType,SecurityType,CertificateType,StartConnectResult}from"chrome://resources/mojo/chromeos/services/network_config/public/mojom/cros_network_config.mojom-webui.js";import{NetworkType,ConnectionStateType,PolicySource,OncSource,IPConfigType,DeviceStateType,PortalState}from"chrome://resources/mojo/chromeos/services/network_config/public/mojom/network_types.mojom-webui.js";import{loadTimeData}from"chrome://resources/js/load_time_data.js";import{mojo}from"chrome://resources/mojo/mojo/public/js/bindings.js";import{ActivationResult,ActivationDelegateReceiver,CarrierPortalStatus}from"chrome://resources/mojo/chromeos/ash/services/cellular_setup/public/mojom/cellular_setup.mojom-webui.js";import{getCellularSetupRemote,getESimManagerRemote}from"chrome://resources/ash/common/cellular_setup/mojo_interface_provider.js";import{ProfileInstallResult,ESimOperationResult,ProfileState,ProfileInstallMethod}from"chrome://resources/mojo/chromeos/ash/services/cellular_setup/public/mojom/esim_manager.mojom-webui.js";import{getHotspotConfig}from"chrome://resources/ash/common/hotspot/cros_hotspot_config.js";import{WiFiBand,WiFiSecurityMode,SetHotspotConfigResult,HotspotState,HotspotAllowStatus,CrosHotspotConfigObserverReceiver}from"chrome://resources/ash/common/hotspot/cros_hotspot_config.mojom-webui.js";import{loadTimeData as loadTimeData$1}from"chrome://resources/ash/common/load_time_data.m.js";import{FactorObserverReceiver,AuthFactorConfig,AuthFactor,PinFactorEditor,ConfigureResult}from"chrome://resources/mojo/chromeos/ash/services/auth_factor_config/public/mojom/auth_factor_config.mojom-webui.js";import{Visibility}from"chrome://resources/mojo/chromeos/ash/services/nearby/public/mojom/nearby_share_settings.mojom-webui.js";import{sendWithPromise}from"chrome://resources/js/cr.js";import{String16Spec}from"chrome://resources/mojo/mojo/public/mojom/base/string16.mojom-webui.js";import"chrome://resources/mwc/lit/index.js";import"chrome://resources/cr_components/app_management/app_management.mojom-webui.js";import"chrome://resources/mojo/chromeos/ash/services/nearby/public/mojom/nearby_share_target_types.mojom-webui.js";import"chrome://resources/mojo/services/network/public/mojom/ip_address.mojom-webui.js";function getTemplate$1y(){return html`<!--_html_template_start_--><style>:host{--cr-drawer-width:256px}:host dialog{--transition-timing:200ms ease;background-color:var(--cr-drawer-background-color,#fff);border:none;border-start-end-radius:var(--cr-drawer-border-start-end-radius,0);border-end-end-radius:var(--cr-drawer-border-end-end-radius,0);bottom:0;left:calc(-1 * var(--cr-drawer-width));margin:0;max-height:initial;max-width:initial;overflow:hidden;padding:0;position:absolute;top:0;transition:left var(--transition-timing);width:var(--cr-drawer-width)}@media (prefers-color-scheme:dark){:host dialog{background:var(--cr-drawer-background-color,var(--google-grey-900)) linear-gradient(rgba(255,255,255,.04),rgba(255,255,255,.04))}}#container,:host dialog{height:100%;word-break:break-word}:host([show_]) dialog{left:0}:host([align=rtl]) dialog{left:auto;right:calc(-1 * var(--cr-drawer-width));transition:right var(--transition-timing)}:host([show_][align=rtl]) dialog{right:0}:host dialog::backdrop{background:rgba(0,0,0,.5);bottom:0;left:0;opacity:0;position:absolute;right:0;top:0;transition:opacity var(--transition-timing)}:host([show_]) dialog::backdrop{opacity:1}.drawer-header{align-items:center;border-bottom:var(--cr-separator-line);color:var(--cr-drawer-header-color,inherit);display:flex;font-size:123.08%;font-weight:var(--cr-drawer-header-font-weight,inherit);font:var(--cr-drawer-header-font,inherit);min-height:56px;padding-inline-start:var(--cr-drawer-header-padding,24px)}@media (prefers-color-scheme:dark){.drawer-header{color:var(--cr-primary-text-color)}}#heading{outline:0}:host ::slotted([slot=body]){height:calc(100% - 56px);overflow:auto}picture{margin-inline-end:16px}#product-logo,picture{height:24px;width:24px}</style>
<dialog id="dialog" on-cancel="onDialogCancel_" on-click="onDialogClick_" on-close="onDialogClose_">
  <div id="container" on-click="onContainerClick_">
    <div class="drawer-header">
      <slot name="header-icon">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="//resources/images/chrome_logo_dark.svg">
          <img id="product-logo" srcset="chrome://theme/current-channel-logo@1x, chrome://theme/current-channel-logo@2x 2x" role="presentation">
        </picture>
      </slot>
      <div id="heading" tabindex="-1">[[heading]]</div>
    </div>
    <slot name="body"></slot>
  </div>
</dialog>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrDrawerElement extends PolymerElement{static get is(){return"cr-drawer"}static get template(){return getTemplate$1y()}static get properties(){return{heading:String,show_:{type:Boolean,reflectToAttribute:true},align:{type:String,value:"ltr",reflectToAttribute:true}}}fire_(eventName,detail){this.dispatchEvent(new CustomEvent(eventName,{bubbles:true,composed:true,detail:detail}))}get open(){return this.$.dialog.open}set open(_value){assertNotReached("Cannot set |open|.")}toggle(){if(this.open){this.cancel()}else{this.openDrawer()}}openDrawer(){if(this.open){return}this.$.dialog.showModal();this.show_=true;this.fire_("cr-drawer-opening");listenOnce(this.$.dialog,"transitionend",(()=>{this.fire_("cr-drawer-opened")}))}dismiss_(cancel){if(!this.open){return}this.show_=false;listenOnce(this.$.dialog,"transitionend",(()=>{this.$.dialog.close(cancel?"canceled":"closed")}))}cancel(){this.dismiss_(true)}close(){this.dismiss_(false)}wasCanceled(){return!this.open&&this.$.dialog.returnValue==="canceled"}onContainerClick_(event){event.stopPropagation()}onDialogClick_(){this.cancel()}onDialogCancel_(event){event.preventDefault();this.cancel()}onDialogClose_(){this.fire_("close")}}customElements.define(CrDrawerElement.is,CrDrawerElement);const styleMod=document.createElement("dom-module");styleMod.appendChild(html`
  <template>
    <style>
:host{color:var(--cr-primary-text-color);line-height:154%;overflow:hidden;user-select:text}
    </style>
  </template>
`.content);styleMod.register("cr-page-host-style");function getTemplate$1x(){return html`<!--_html_template_start_--><style include="settings-shared">:host{--tap-target-padding:3px;align-items:center;background:0 0;border-color:transparent;border-style:solid;border-width:var(--settings-menu-item-border-width);color:var(--cros-text-color-primary);display:flex;flex-direction:row;font:var(--cros-button-1-font);text-decoration:none}:host-context(body:not(.revamp-wayfinding-enabled)):host{border-end-end-radius:20px;border-start-end-radius:20px;border-inline-start-width:0;min-height:32px;padding:var(--tap-target-padding) 0;padding-inline-start:20px}:host-context(body.revamp-wayfinding-enabled):host{border-radius:16px;box-sizing:border-box;height:60px;padding-inline-start:calc(12px - var(--settings-menu-item-border-width));padding-inline-end:calc(12px - var(--settings-menu-item-border-width));width:var(--settings-menu-item-width)}#labelWrapper{flex-grow:1;max-width:200px}#label,#sublabel{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#sublabel{color:var(--cros-sys-on_surface_variant);font:var(--cros-body-2-font)}iron-icon{pointer-events:none}:host-context(body:not(.revamp-wayfinding-enabled)) iron-icon{margin-inline-end:16px}:host-context(body.revamp-wayfinding-enabled) iron-icon{margin-inline-end:12px}:host-context(body.revamp-wayfinding-enabled):host(:not(.iron-selected)) iron-icon{--iron-icon-fill-color:var(--cros-sys-primary)}:host(:not(.iron-selected):hover){background-color:var(--cros-sys-hover_on_subtle)!important}:host-context(.focus-outline-visible):host(:focus){border-color:var(--cros-focus-ring-color)}:host(.iron-selected){background-color:var(--cros-sys-primary)!important;color:var(--cros-sys-on_primary)}:host(.iron-selected)>iron-icon{--iron-icon-fill-color:var(--cros-sys-on_primary)}:host(.iron-selected) #sublabel{color:var(--cros-sys-surface_variant)}</style>

<iron-icon icon="[[icon]]" hidden="[[!icon]]"></iron-icon>
<div id="labelWrapper">
  <slot id="label"></slot>
  <div id="sublabel">[[sublabel]]</div>
</div>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class OsSettingsMenuItemElement extends PolymerElement{static get is(){return"os-settings-menu-item"}static get template(){return getTemplate$1x()}static get properties(){return{path:{type:String,reflectToAttribute:true},icon:{type:String,value:""},sublabel:{type:String,value:""}}}ready(){super.ready();this.setAttribute("role","link");this.setAttribute("tabindex","0");this.addEventListener("keydown",this.onKeyDown_.bind(this))}onKeyDown_(event){if(event.key!==" "&&event.key!=="Enter"){return}event.preventDefault();event.stopPropagation();if(event.repeat){return}if(event.key==="Enter"){this.dispatchEvent(new CustomEvent("click",{bubbles:true,composed:true}))}}}customElements.define(OsSettingsMenuItemElement.is,OsSettingsMenuItemElement);function getTemplate$1w(){return html`<!--_html_template_start_--><style include="settings-shared">:host{box-sizing:border-box;display:block;padding-bottom:2px;padding-top:8px;width:var(--settings-menu-width)}:host-context(body.revamp-wayfinding-enabled):host{padding-inline-end:var(--settings-menu-padding-inline-end);padding-inline-start:var(--settings-menu-padding-inline-start);padding-top:var(--settings-menu-padding-top)}:host *{-webkit-tap-highlight-color:transparent}[selectable]>:focus{background-color:transparent}#advancedButton{--ink-color:var(--cros-text-color-primary);align-items:center;background:0 0;border:none;border-radius:initial;box-shadow:none;color:var(--cros-text-color-primary);display:flex;font:var(--cros-button-1-font);height:unset;margin-inline-end:2px;margin-top:8px;padding-inline-end:0;padding-inline-start:20px;text-transform:none}#advancedButton:focus{outline:0}:host-context(.focus-outline-visible) #advancedButton:focus{border-radius:0 20px 20px 0;outline:var(--settings-menu-item-border-width) solid var(--cros-focus-ring-color)}:host-context([dir=rtl]):host-context(.focus-outline-visible) #advancedButton:focus{border-radius:20px 0 0 20px}#advancedButton>span{flex:1}#advancedButton>iron-icon{height:var(--cr-icon-size);margin-inline-end:14px;width:var(--cr-icon-size)}#menuSeparator{border-bottom:var(--cr-separator-line);margin-bottom:8px;margin-top:8px}#topMenu>os-settings-menu-item{margin-bottom:8px}:host-context(body:not(.revamp-wayfinding-enabled)) #topMenu>os-settings-menu-item{margin-inline-end:2px}:host-context(body:not(.revamp-wayfinding-enabled)) #advancedSubmenu>os-settings-menu-item{margin-bottom:8px;margin-inline-end:2px}#topMenu>os-settings-menu-item:last-of-type{margin-bottom:calc(48px - calc(var(--tap-target-padding) + var(--settings-menu-item-border-width)))}</style>
<iron-selector id="topMenu" role="navigation" selectable="os-settings-menu-item" attr-for-selected="path" selected="[[selectedItemPath_]]" on-iron-activate="onItemActivated_" on-iron-select="onItemSelected_" on-iron-deselect="onItemDeselected_">
  <template id="topMenuRepeat" is="dom-repeat" items="[[basicMenuItems_]]">
    <os-settings-menu-item path="[[item.path]]" icon="[[item.icon]]" sublabel="[[item.sublabel]]">
      [[item.label]]
    </os-settings-menu-item>
  </template>

  <template is="dom-if" if="[[!isRevampWayfindingEnabled_]]">
    <cr-button id="advancedButton" aria-expanded$="[[boolToString_(advancedOpened)]]" on-click="onAdvancedButtonToggle_">
      <span>$i18n{advancedPageTitle}</span>
      <iron-icon icon="[[arrowState_(advancedOpened)]]" slot="suffix-icon">
      </iron-icon>
    </cr-button>
    <iron-collapse id="advancedCollapse" opened="[[advancedOpened]]">
      <iron-selector id="advancedSubmenu" role="navigation" selectable="os-settings-menu-item" attr-for-selected="path" selected="[[selectedItemPath_]]">
        <template is="dom-repeat" items="[[advancedMenuItems_]]">
          <os-settings-menu-item path="[[item.path]]" icon="[[item.icon]]" sublabel="[[item.sublabel]]">
            [[item.label]]
          </os-settings-menu-item>
        </template>
      </iron-selector>
    </iron-collapse>
    <div id="menuSeparator"></div>
    <os-settings-menu-item path="[[aboutMenuItemPath_]]">
      $i18n{aboutOsPageTitle}
    </os-settings-menu-item>
  </template>
</iron-selector>
<!--_html_template_end_-->`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const{Section:Section}=routesMojom;function capitalize(str){const firstChar=str.charAt(0).toLocaleUpperCase();const remainingStr=str.slice(1);return`${firstChar}${remainingStr}`}function getPrioritizedConnectedNetwork(networkStateList){const orderedNetworkTypes=[NetworkType.kEthernet,NetworkType.kWiFi,NetworkType.kCellular,NetworkType.kTether,NetworkType.kVPN];const networkStates={};for(const networkType of orderedNetworkTypes){networkStates[networkType]=[]}for(const networkState of networkStateList){networkStates[networkState.type].push(networkState)}for(const type of orderedNetworkTypes){for(const networkState of networkStates[type]){if(OncMojo.connectionStateIsConnected(networkState.connectionState)){return networkState}}}return null}const OsSettingsMenuElementBase=mixinBehaviors([NetworkListenerBehavior],WebUiListenerMixin(RouteObserverMixin(I18nMixin(PolymerElement))));class OsSettingsMenuElement extends OsSettingsMenuElementBase{static get is(){return"os-settings-menu"}static get template(){return getTemplate$1w()}static get properties(){return{pageAvailability:{type:Object},advancedOpened:{type:Boolean,value:false,notify:true},basicMenuItems_:{type:Array,computed:"computeBasicMenuItems_(pageAvailability.*,"+"accountsMenuItemDescription_,"+"bluetoothMenuItemDescription_,"+"deviceMenuItemDescription_,"+"internetMenuItemDescription_,"+"multideviceMenuItemDescription_)",readOnly:true},advancedMenuItems_:{type:Array,computed:"computeAdvancedMenuItems_(pageAvailability.*)",readOnly:true},selectedItemPath_:{type:String,value:""},aboutMenuItemPath_:{type:String,value:`/${ABOUT_CHROME_OS_SECTION_PATH}`},isRevampWayfindingEnabled_:{type:Boolean,value:()=>isRevampWayfindingEnabled(),readOnly:true},accountsMenuItemDescription_:{type:String,value(){return this.i18n("primaryUserEmail")}},bluetoothMenuItemDescription_:{type:String,value:""},hasKeyboard_:Boolean,hasMouse_:Boolean,hasPointingStick_:Boolean,hasTouchpad_:Boolean,deviceMenuItemDescription_:{type:String,value:"",computed:"computeDeviceMenuItemDescription_(hasKeyboard_,"+"hasMouse_, hasPointingStick_, hasTouchpad_, hasHapticTouchpad_)"},multideviceMenuItemDescription_:{type:String,value:""},internetMenuItemDescription_:{type:String,value:""}}}constructor(){super();this.inputDeviceSettingsProvider_=getInputDeviceSettingsProvider();this.multideviceBrowserProxy_=MultiDeviceBrowserProxyImpl.getInstance()}connectedCallback(){super.connectedCallback();if(this.isRevampWayfindingEnabled_){this.updateAccountsMenuItemDescription_();this.addWebUiListener("accounts-changed",this.updateAccountsMenuItemDescription_.bind(this));this.observeBluetoothProperties_();this.observeKeyboardSettings_();this.observeMouseSettings_();this.observePointingStickSettings_();this.observeTouchpadSettings_();this.networkConfig_=MojoInterfaceProviderImpl.getInstance().getMojoServiceRemote();this.computeIsDeviceCellularCapable_().then((()=>{this.updateInternetMenuItemDescription_()}));this.addWebUiListener("settings.updateMultidevicePageContentData",this.updateMultideviceMenuItemDescription_.bind(this))}}disconnectedCallback(){super.disconnectedCallback();this.bluetoothPropertiesObserverReceiver_?.$.close();this.keyboardSettingsObserverReceiver_?.$.close();this.mouseSettingsObserverReceiver_?.$.close();this.pointingStickSettingsObserverReceiver_?.$.close();this.touchpadSettingsObserverReceiver_?.$.close()}ready(){super.ready();this.$.topMenuRepeat.render();if(this.isRevampWayfindingEnabled_){this.multideviceBrowserProxy_.getPageContentData().then(this.updateMultideviceMenuItemDescription_.bind(this))}}currentRouteChanged(newRoute){const urlSearchQuery=Router.getInstance().getQueryParameters().get("search");if(urlSearchQuery&&isAdvancedRoute(newRoute)){this.advancedOpened=true}this.setSelectedItemPathForRoute_(newRoute)}setSelectedItemPathForRoute_(route){const menuItems=this.shadowRoot.querySelectorAll("os-settings-menu-item");for(const menuItem of menuItems){const matchingRoute=Router.getInstance().getRouteForPath(menuItem.path);if(matchingRoute?.contains(route)){this.setSelectedItemPath_(menuItem.path);return}}this.setSelectedItemPath_("")}computeBasicMenuItems_(){let basicMenuItems;if(this.isRevampWayfindingEnabled_){basicMenuItems=[{section:Section.kNetwork,path:`/${NETWORK_SECTION_PATH}`,icon:"os-settings:network-wifi",label:this.i18n("internetPageTitle"),sublabel:this.internetMenuItemDescription_},{section:Section.kBluetooth,path:`/${BLUETOOTH_SECTION_PATH}`,icon:"cr:bluetooth",label:this.i18n("bluetoothPageTitle"),sublabel:this.bluetoothMenuItemDescription_},{section:Section.kMultiDevice,path:`/${MULTI_DEVICE_SECTION_PATH}`,icon:"os-settings:connected-devices",label:this.i18n("multidevicePageTitle"),sublabel:this.multideviceMenuItemDescription_},{section:Section.kPeople,path:`/${PEOPLE_SECTION_PATH}`,icon:"os-settings:account",label:this.i18n("osPeoplePageTitle"),sublabel:this.accountsMenuItemDescription_},{section:Section.kKerberos,path:`/${KERBEROS_SECTION_PATH}`,icon:"os-settings:auth-key",label:this.i18n("kerberosPageTitle")},{section:Section.kDevice,path:`/${DEVICE_SECTION_PATH}`,icon:"os-settings:laptop-chromebook",label:this.i18n("devicePageTitle"),sublabel:this.deviceMenuItemDescription_},{section:Section.kPersonalization,path:`/${PERSONALIZATION_SECTION_PATH}`,icon:"os-settings:personalization",label:this.i18n("personalizationPageTitle"),sublabel:this.i18n("personalizationMenuItemDescription")},{section:Section.kPrivacyAndSecurity,path:`/${PRIVACY_AND_SECURITY_SECTION_PATH}`,icon:"cr:security",label:this.i18n("privacyPageTitle"),sublabel:this.i18n("privacyMenuItemDescription")},{section:Section.kApps,path:`/${APPS_SECTION_PATH}`,icon:"os-settings:apps",label:this.i18n("appsPageTitle"),sublabel:this.i18n("appsMenuItemDescription")},{section:Section.kAccessibility,path:`/${ACCESSIBILITY_SECTION_PATH}`,icon:"os-settings:accessibility-revamp",label:this.i18n("a11yPageTitle"),sublabel:this.i18n("a11yMenuItemDescription")},{section:Section.kSystemPreferences,path:`/${SYSTEM_PREFERENCES_SECTION_PATH}`,icon:"os-settings:system-preferences",label:this.i18n("systemPreferencesTitle"),sublabel:this.i18n("systemPreferencesMenuItemDescription")},{section:Section.kAboutChromeOs,path:this.aboutMenuItemPath_,icon:"os-settings:chrome",label:this.i18n("aboutOsPageTitle"),sublabel:this.i18n("aboutChromeOsMenuItemDescription")}]}else{basicMenuItems=[{section:Section.kNetwork,path:`/${NETWORK_SECTION_PATH}`,icon:"os-settings:network-wifi",label:this.i18n("internetPageTitle")},{section:Section.kBluetooth,path:`/${BLUETOOTH_SECTION_PATH}`,icon:"cr:bluetooth",label:this.i18n("bluetoothPageTitle")},{section:Section.kMultiDevice,path:`/${MULTI_DEVICE_SECTION_PATH}`,icon:"os-settings:multidevice-better-together-suite",label:this.i18n("multidevicePageTitle")},{section:Section.kPeople,path:`/${PEOPLE_SECTION_PATH}`,icon:"cr:person",label:this.i18n("osPeoplePageTitle")},{section:Section.kKerberos,path:`/${KERBEROS_SECTION_PATH}`,icon:"os-settings:auth-key",label:this.i18n("kerberosPageTitle")},{section:Section.kDevice,path:`/${DEVICE_SECTION_PATH}`,icon:"os-settings:laptop-chromebook",label:this.i18n("devicePageTitle")},{section:Section.kPersonalization,path:`/${PERSONALIZATION_SECTION_PATH}`,icon:"os-settings:paint-brush",label:this.i18n("personalizationPageTitle")},{section:Section.kSearchAndAssistant,path:`/${SEARCH_AND_ASSISTANT_SECTION_PATH}`,icon:"cr:search",label:this.i18n("osSearchPageTitle")},{section:Section.kPrivacyAndSecurity,path:`/${PRIVACY_AND_SECURITY_SECTION_PATH}`,icon:"cr:security",label:this.i18n("privacyPageTitle")},{section:Section.kApps,path:`/${APPS_SECTION_PATH}`,icon:"os-settings:apps",label:this.i18n("appsPageTitle")},{section:Section.kAccessibility,path:`/${ACCESSIBILITY_SECTION_PATH}`,icon:"os-settings:accessibility",label:this.i18n("a11yPageTitle")}]}return basicMenuItems.filter((({section:section})=>!!this.pageAvailability[section]))}computeAdvancedMenuItems_(){if(this.isRevampWayfindingEnabled_){return[]}const advancedMenuItems=[{section:Section.kDateAndTime,path:`/${DATE_AND_TIME_SECTION_PATH}`,icon:"os-settings:clock",label:this.i18n("dateTimePageTitle")},{section:Section.kLanguagesAndInput,path:`/${LANGUAGES_AND_INPUT_SECTION_PATH}`,icon:"os-settings:language",label:this.i18n("osLanguagesPageTitle")},{section:Section.kFiles,path:`/${FILES_SECTION_PATH}`,icon:"os-settings:folder-outline",label:this.i18n("filesPageTitle")},{section:Section.kPrinting,path:`/${PRINTING_SECTION_PATH}`,icon:"os-settings:print",label:this.i18n("printingPageTitle")},{section:Section.kCrostini,path:`/${CROSTINI_SECTION_PATH}`,icon:"os-settings:developer-tags",label:this.i18n("crostiniPageTitle")},{section:Section.kReset,path:`/${RESET_SECTION_PATH}`,icon:"os-settings:restore",label:this.i18n("resetPageTitle")}];return advancedMenuItems.filter((({section:section})=>!!this.pageAvailability[section]))}onAdvancedButtonToggle_(){this.advancedOpened=!this.advancedOpened}setSelectedItemPath_(path){this.selectedItemPath_=path}onItemActivated_(event){this.setSelectedItemPath_(event.detail.selected)}onItemSelected_(e){e.detail.item.setAttribute("aria-current","true")}onItemDeselected_(e){e.detail.item.removeAttribute("aria-current")}arrowState_(opened){return opened?"cr:arrow-drop-up":"cr:arrow-drop-down"}boolToString_(bool){return bool.toString()}async updateAccountsMenuItemDescription_(){const accounts=await AccountManagerBrowserProxyImpl.getInstance().getAccounts();if(accounts.length>1){this.accountsMenuItemDescription_=this.i18n("accountsMenuItemDescription",accounts.length);return}const deviceAccount=accounts.find((account=>account.isDeviceAccount));assertExists(deviceAccount,"No device account found.");this.accountsMenuItemDescription_=deviceAccount.email}observeBluetoothProperties_(){this.bluetoothPropertiesObserverReceiver_=new SystemPropertiesObserverReceiver(this);getBluetoothConfig().observeSystemProperties(this.bluetoothPropertiesObserverReceiver_.$.bindNewPipeAndPassRemote())}onPropertiesUpdated(properties){const isBluetoothOn=properties.systemState===BluetoothSystemState.kEnabled||properties.systemState===BluetoothSystemState.kEnabling;const connectedDevices=properties.pairedDevices.filter((device=>device.deviceProperties.connectionState===DeviceConnectionState.kConnected));this.updateBluetoothMenuItemDescription_(isBluetoothOn,connectedDevices)}updateBluetoothMenuItemDescription_(isBluetoothOn,connectedDevices){if(connectedDevices.length===0){this.bluetoothMenuItemDescription_=isBluetoothOn?this.i18n("deviceOn"):this.i18n("deviceOff");return}if(connectedDevices.length===1){const device=castExists(connectedDevices[0]);this.bluetoothMenuItemDescription_=getDeviceName(device);return}this.bluetoothMenuItemDescription_=this.i18n("bluetoothMenuItemDescriptionMultipleDevicesConnected",connectedDevices.length)}onNetworkStateListChanged(){this.updateInternetMenuItemDescription_()}onDeviceStateListChanged(){this.updateInternetMenuItemDescription_()}onActiveNetworksChanged(){this.updateInternetMenuItemDescription_()}async computeIsDeviceCellularCapable_(){const{result:deviceStateList}=await this.networkConfig_.getDeviceStateList();const cellularDeviceState=deviceStateList.find((deviceState=>deviceState.type===NetworkType.kCellular));this.isDeviceCellularCapable_=!!cellularDeviceState}async isInstantHotspotAvailable_(){const{result:deviceStateList}=await this.networkConfig_.getDeviceStateList();const tetherDeviceState=deviceStateList.find((deviceState=>deviceState.type===NetworkType.kTether));return!!tetherDeviceState}async updateInternetMenuItemDescription_(){if(!this.isRevampWayfindingEnabled_){return}const{result:networkStateList}=await this.networkConfig_.getNetworkStateList({filter:FilterType.kVisible,limit:NO_LIMIT,networkType:NetworkType.kAll});const prioritizedConnectedNetwork=getPrioritizedConnectedNetwork(networkStateList);if(prioritizedConnectedNetwork){this.internetMenuItemDescription_=prioritizedConnectedNetwork.name;return}const tetherNetworkState=networkStateList.find((networkState=>networkState.type===NetworkType.kTether));if(tetherNetworkState&&await this.isInstantHotspotAvailable_()){this.internetMenuItemDescription_=this.i18n("internetMenuItemDescriptionInstantHotspotAvailable");return}if(this.isDeviceCellularCapable_){this.internetMenuItemDescription_=this.i18n("internetMenuItemDescriptionWifiAndMobileData");return}this.internetMenuItemDescription_=this.i18n("internetMenuItemDescriptionWifi")}updateMultideviceMenuItemDescription_(pageContentData){if(!this.isRevampWayfindingEnabled_){return}if(pageContentData.mode===MultiDeviceSettingsMode.HOST_SET_VERIFIED){if(pageContentData.hostDeviceName){this.multideviceMenuItemDescription_=this.i18n("multideviceMenuItemDescriptionPhoneConnected",pageContentData.hostDeviceName)}else{this.multideviceMenuItemDescription_=this.i18n("multideviceMenuItemDescriptionDeviceNameMissing")}return}this.multideviceMenuItemDescription_=this.i18n("multideviceMenuItemDescription")}observeKeyboardSettings_(){if(this.inputDeviceSettingsProvider_ instanceof FakeInputDeviceSettingsProvider){this.inputDeviceSettingsProvider_.observeKeyboardSettings(this);return}this.keyboardSettingsObserverReceiver_=new KeyboardSettingsObserverReceiver(this);this.inputDeviceSettingsProvider_.observeKeyboardSettings(this.keyboardSettingsObserverReceiver_.$.bindNewPipeAndPassRemote())}onKeyboardListUpdated(keyboards){this.hasKeyboard_=keyboards.length>0}onKeyboardPoliciesUpdated(){}observeMouseSettings_(){if(this.inputDeviceSettingsProvider_ instanceof FakeInputDeviceSettingsProvider){this.inputDeviceSettingsProvider_.observeMouseSettings(this);return}this.mouseSettingsObserverReceiver_=new MouseSettingsObserverReceiver(this);this.inputDeviceSettingsProvider_.observeMouseSettings(this.mouseSettingsObserverReceiver_.$.bindNewPipeAndPassRemote())}onMouseListUpdated(mice){this.hasMouse_=mice.length>0}onMousePoliciesUpdated(){}observePointingStickSettings_(){if(this.inputDeviceSettingsProvider_ instanceof FakeInputDeviceSettingsProvider){this.inputDeviceSettingsProvider_.observePointingStickSettings(this);return}this.pointingStickSettingsObserverReceiver_=new PointingStickSettingsObserverReceiver(this);this.inputDeviceSettingsProvider_.observePointingStickSettings(this.pointingStickSettingsObserverReceiver_.$.bindNewPipeAndPassRemote())}onPointingStickListUpdated(pointingSticks){this.hasPointingStick_=pointingSticks.length>0}observeTouchpadSettings_(){if(this.inputDeviceSettingsProvider_ instanceof FakeInputDeviceSettingsProvider){this.inputDeviceSettingsProvider_.observeTouchpadSettings(this);return}this.touchpadSettingsObserverReceiver_=new TouchpadSettingsObserverReceiver(this);this.inputDeviceSettingsProvider_.observeTouchpadSettings(this.touchpadSettingsObserverReceiver_.$.bindNewPipeAndPassRemote())}onTouchpadListUpdated(touchpads){this.hasTouchpad_=touchpads.length>0}computeDeviceMenuItemDescription_(){if(!this.isRevampWayfindingEnabled_){return""}const wordOptions=[];if(this.hasKeyboard_){wordOptions.push(this.i18n("deviceMenuItemDescriptionKeyboard"))}if(this.hasMouse_||this.hasPointingStick_){wordOptions.push(this.i18n("deviceMenuItemDescriptionMouse"))}else if(this.hasTouchpad_){wordOptions.push(this.i18n("deviceMenuItemDescriptionTouchpad"))}wordOptions.push(this.i18n("deviceMenuItemDescriptionPrint"),this.i18n("deviceMenuItemDescriptionDisplay"));const words=wordOptions.slice(0,3);return capitalize(words.join(this.i18n("listSeparator")))}}customElements.define(OsSettingsMenuElement.is,OsSettingsMenuElement);function getTemplate$1v(){return html`<!--_html_template_start_-->    <style>:host{align-items:center;border-top:1px solid var(--cr-separator-color);color:var(--cr-secondary-text-color);display:none;font-size:.8125rem;justify-content:center;padding:0 24px}:host([is-managed_]){display:flex}a[href]{color:var(--cr-link-color)}iron-icon{align-self:flex-start;flex-shrink:0;height:20px;padding-inline-end:var(--managed-footnote-icon-padding,8px);width:20px}</style>

    <template is="dom-if" if="[[isManaged_]]">
      <iron-icon icon="[[managedByIcon_]]"></iron-icon>
      <div id="content" inner-h-t-m-l="[[getManagementString_(showDeviceInfo)]]">
      </div>
    </template>
<!--_html_template_end_-->`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ManagedFootnoteElementBase=I18nMixin(WebUiListenerMixin(PolymerElement));class ManagedFootnoteElement extends ManagedFootnoteElementBase{static get is(){return"managed-footnote"}static get template(){return getTemplate$1v()}static get properties(){return{isManaged_:{reflectToAttribute:true,type:Boolean,value(){return loadTimeData.getBoolean("isManaged")}},showDeviceInfo:{type:Boolean,value:false},managedByIcon_:{reflectToAttribute:true,type:String,value(){return loadTimeData.getString("managedByIcon")}}}}ready(){super.ready();this.addWebUiListener("is-managed-changed",(managed=>{loadTimeData.overrideValues({isManaged:managed});this.isManaged_=managed}))}getManagementString_(){if(this.showDeviceInfo){return this.i18nAdvanced("deviceManagedByOrg")}return this.i18nAdvanced("browserManagedByOrg")}}customElements.define(ManagedFootnoteElement.is,ManagedFootnoteElement);chrome.send("observeManagedUI");
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const AudioDeviceTypeSpec={$:mojo.internal.Enum()};var AudioDeviceType;(function(AudioDeviceType){AudioDeviceType[AudioDeviceType["MIN_VALUE"]=0]="MIN_VALUE";AudioDeviceType[AudioDeviceType["MAX_VALUE"]=16]="MAX_VALUE";AudioDeviceType[AudioDeviceType["kHeadphone"]=0]="kHeadphone";AudioDeviceType[AudioDeviceType["kMic"]=1]="kMic";AudioDeviceType[AudioDeviceType["kUsb"]=2]="kUsb";AudioDeviceType[AudioDeviceType["kBluetooth"]=3]="kBluetooth";AudioDeviceType[AudioDeviceType["kBluetoothNbMic"]=4]="kBluetoothNbMic";AudioDeviceType[AudioDeviceType["kHdmi"]=5]="kHdmi";AudioDeviceType[AudioDeviceType["kInternalSpeaker"]=6]="kInternalSpeaker";AudioDeviceType[AudioDeviceType["kInternalMic"]=7]="kInternalMic";AudioDeviceType[AudioDeviceType["kFrontMic"]=8]="kFrontMic";AudioDeviceType[AudioDeviceType["kRearMic"]=9]="kRearMic";AudioDeviceType[AudioDeviceType["kKeyboardMic"]=10]="kKeyboardMic";AudioDeviceType[AudioDeviceType["kHotword"]=11]="kHotword";AudioDeviceType[AudioDeviceType["kPostDspLoopback"]=12]="kPostDspLoopback";AudioDeviceType[AudioDeviceType["kPostMixLoopback"]=13]="kPostMixLoopback";AudioDeviceType[AudioDeviceType["kLineout"]=14]="kLineout";AudioDeviceType[AudioDeviceType["kAlsaLoopback"]=15]="kAlsaLoopback";AudioDeviceType[AudioDeviceType["kOther"]=16]="kOther"})(AudioDeviceType||(AudioDeviceType={}));const AudioEffectStateSpec={$:mojo.internal.Enum()};var AudioEffectState;(function(AudioEffectState){AudioEffectState[AudioEffectState["MIN_VALUE"]=0]="MIN_VALUE";AudioEffectState[AudioEffectState["MAX_VALUE"]=2]="MAX_VALUE";AudioEffectState[AudioEffectState["kNotSupported"]=0]="kNotSupported";AudioEffectState[AudioEffectState["kNotEnabled"]=1]="kNotEnabled";AudioEffectState[AudioEffectState["kEnabled"]=2]="kEnabled"})(AudioEffectState||(AudioEffectState={}));const MuteStateSpec={$:mojo.internal.Enum()};var MuteState;(function(MuteState){MuteState[MuteState["MIN_VALUE"]=0]="MIN_VALUE";MuteState[MuteState["MAX_VALUE"]=3]="MAX_VALUE";MuteState[MuteState["kNotMuted"]=0]="kNotMuted";MuteState[MuteState["kMutedByUser"]=1]="kMutedByUser";MuteState[MuteState["kMutedByPolicy"]=2]="kMutedByPolicy";MuteState[MuteState["kMutedExternally"]=3]="kMutedExternally"})(MuteState||(MuteState={}));class AudioSystemPropertiesObserverPendingReceiver{constructor(handle){this.handle=mojo.internal.interfaceSupport.getEndpointForReceiver(handle)}bindInBrowser(scope="context"){mojo.internal.interfaceSupport.bind(this.handle,"ash.audio_config.mojom.AudioSystemPropertiesObserver",scope)}}class AudioSystemPropertiesObserverRemote{constructor(handle){this.proxy=new mojo.internal.interfaceSupport.InterfaceRemoteBase(AudioSystemPropertiesObserverPendingReceiver,handle);this.$=new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);this.onConnectionError=this.proxy.getConnectionErrorEventRouter()}onPropertiesUpdated(properties){this.proxy.sendMessage(0,AudioSystemPropertiesObserver_OnPropertiesUpdated_ParamsSpec.$,null,[properties])}}class AudioSystemPropertiesObserverReceiver{constructor(impl){this.helper_internal_=new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(AudioSystemPropertiesObserverRemote);this.$=new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);this.helper_internal_.registerHandler(0,AudioSystemPropertiesObserver_OnPropertiesUpdated_ParamsSpec.$,null,impl.onPropertiesUpdated.bind(impl));this.onConnectionError=this.helper_internal_.getConnectionErrorEventRouter()}}class AudioSystemPropertiesObserver{static get $interfaceName(){return"ash.audio_config.mojom.AudioSystemPropertiesObserver"}static getRemote(){let remote=new AudioSystemPropertiesObserverRemote;remote.$.bindNewPipeAndPassReceiver().bindInBrowser();return remote}}class AudioSystemPropertiesObserverCallbackRouter{constructor(){this.helper_internal_=new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(AudioSystemPropertiesObserverRemote);this.$=new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);this.router_=new mojo.internal.interfaceSupport.CallbackRouter;this.onPropertiesUpdated=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(0,AudioSystemPropertiesObserver_OnPropertiesUpdated_ParamsSpec.$,null,this.onPropertiesUpdated.createReceiverHandler(false));this.onConnectionError=this.helper_internal_.getConnectionErrorEventRouter()}removeListener(id){return this.router_.removeListener(id)}}class CrosAudioConfigPendingReceiver{constructor(handle){this.handle=mojo.internal.interfaceSupport.getEndpointForReceiver(handle)}bindInBrowser(scope="context"){mojo.internal.interfaceSupport.bind(this.handle,"ash.audio_config.mojom.CrosAudioConfig",scope)}}class CrosAudioConfigRemote{constructor(handle){this.proxy=new mojo.internal.interfaceSupport.InterfaceRemoteBase(CrosAudioConfigPendingReceiver,handle);this.$=new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);this.onConnectionError=this.proxy.getConnectionErrorEventRouter()}observeAudioSystemProperties(observer){this.proxy.sendMessage(0,CrosAudioConfig_ObserveAudioSystemProperties_ParamsSpec.$,null,[observer])}setOutputMuted(muted){this.proxy.sendMessage(1,CrosAudioConfig_SetOutputMuted_ParamsSpec.$,null,[muted])}setOutputVolumePercent(volume){this.proxy.sendMessage(2,CrosAudioConfig_SetOutputVolumePercent_ParamsSpec.$,null,[volume])}setInputGainPercent(gain){this.proxy.sendMessage(3,CrosAudioConfig_SetInputGainPercent_ParamsSpec.$,null,[gain])}setActiveDevice(device){this.proxy.sendMessage(4,CrosAudioConfig_SetActiveDevice_ParamsSpec.$,null,[device])}setInputMuted(muted){this.proxy.sendMessage(5,CrosAudioConfig_SetInputMuted_ParamsSpec.$,null,[muted])}setNoiseCancellationEnabled(enabled){this.proxy.sendMessage(6,CrosAudioConfig_SetNoiseCancellationEnabled_ParamsSpec.$,null,[enabled])}setForceRespectUiGainsEnabled(enabled){this.proxy.sendMessage(7,CrosAudioConfig_SetForceRespectUiGainsEnabled_ParamsSpec.$,null,[enabled])}setHfpMicSrEnabled(enabled){this.proxy.sendMessage(8,CrosAudioConfig_SetHfpMicSrEnabled_ParamsSpec.$,null,[enabled])}}class CrosAudioConfigReceiver{constructor(impl){this.helper_internal_=new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(CrosAudioConfigRemote);this.$=new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);this.helper_internal_.registerHandler(0,CrosAudioConfig_ObserveAudioSystemProperties_ParamsSpec.$,null,impl.observeAudioSystemProperties.bind(impl));this.helper_internal_.registerHandler(1,CrosAudioConfig_SetOutputMuted_ParamsSpec.$,null,impl.setOutputMuted.bind(impl));this.helper_internal_.registerHandler(2,CrosAudioConfig_SetOutputVolumePercent_ParamsSpec.$,null,impl.setOutputVolumePercent.bind(impl));this.helper_internal_.registerHandler(3,CrosAudioConfig_SetInputGainPercent_ParamsSpec.$,null,impl.setInputGainPercent.bind(impl));this.helper_internal_.registerHandler(4,CrosAudioConfig_SetActiveDevice_ParamsSpec.$,null,impl.setActiveDevice.bind(impl));this.helper_internal_.registerHandler(5,CrosAudioConfig_SetInputMuted_ParamsSpec.$,null,impl.setInputMuted.bind(impl));this.helper_internal_.registerHandler(6,CrosAudioConfig_SetNoiseCancellationEnabled_ParamsSpec.$,null,impl.setNoiseCancellationEnabled.bind(impl));this.helper_internal_.registerHandler(7,CrosAudioConfig_SetForceRespectUiGainsEnabled_ParamsSpec.$,null,impl.setForceRespectUiGainsEnabled.bind(impl));this.helper_internal_.registerHandler(8,CrosAudioConfig_SetHfpMicSrEnabled_ParamsSpec.$,null,impl.setHfpMicSrEnabled.bind(impl));this.onConnectionError=this.helper_internal_.getConnectionErrorEventRouter()}}class CrosAudioConfig{static get $interfaceName(){return"ash.audio_config.mojom.CrosAudioConfig"}static getRemote(){let remote=new CrosAudioConfigRemote;remote.$.bindNewPipeAndPassReceiver().bindInBrowser();return remote}}class CrosAudioConfigCallbackRouter{constructor(){this.helper_internal_=new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(CrosAudioConfigRemote);this.$=new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);this.router_=new mojo.internal.interfaceSupport.CallbackRouter;this.observeAudioSystemProperties=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(0,CrosAudioConfig_ObserveAudioSystemProperties_ParamsSpec.$,null,this.observeAudioSystemProperties.createReceiverHandler(false));this.setOutputMuted=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(1,CrosAudioConfig_SetOutputMuted_ParamsSpec.$,null,this.setOutputMuted.createReceiverHandler(false));this.setOutputVolumePercent=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(2,CrosAudioConfig_SetOutputVolumePercent_ParamsSpec.$,null,this.setOutputVolumePercent.createReceiverHandler(false));this.setInputGainPercent=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(3,CrosAudioConfig_SetInputGainPercent_ParamsSpec.$,null,this.setInputGainPercent.createReceiverHandler(false));this.setActiveDevice=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(4,CrosAudioConfig_SetActiveDevice_ParamsSpec.$,null,this.setActiveDevice.createReceiverHandler(false));this.setInputMuted=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(5,CrosAudioConfig_SetInputMuted_ParamsSpec.$,null,this.setInputMuted.createReceiverHandler(false));this.setNoiseCancellationEnabled=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(6,CrosAudioConfig_SetNoiseCancellationEnabled_ParamsSpec.$,null,this.setNoiseCancellationEnabled.createReceiverHandler(false));this.setForceRespectUiGainsEnabled=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(7,CrosAudioConfig_SetForceRespectUiGainsEnabled_ParamsSpec.$,null,this.setForceRespectUiGainsEnabled.createReceiverHandler(false));this.setHfpMicSrEnabled=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(8,CrosAudioConfig_SetHfpMicSrEnabled_ParamsSpec.$,null,this.setHfpMicSrEnabled.createReceiverHandler(false));this.onConnectionError=this.helper_internal_.getConnectionErrorEventRouter()}removeListener(id){return this.router_.removeListener(id)}}const AudioDeviceSpec={$:{}};const AudioSystemPropertiesSpec={$:{}};const AudioSystemPropertiesObserver_OnPropertiesUpdated_ParamsSpec={$:{}};const CrosAudioConfig_ObserveAudioSystemProperties_ParamsSpec={$:{}};const CrosAudioConfig_SetOutputMuted_ParamsSpec={$:{}};const CrosAudioConfig_SetOutputVolumePercent_ParamsSpec={$:{}};const CrosAudioConfig_SetInputGainPercent_ParamsSpec={$:{}};const CrosAudioConfig_SetActiveDevice_ParamsSpec={$:{}};const CrosAudioConfig_SetInputMuted_ParamsSpec={$:{}};const CrosAudioConfig_SetNoiseCancellationEnabled_ParamsSpec={$:{}};const CrosAudioConfig_SetForceRespectUiGainsEnabled_ParamsSpec={$:{}};const CrosAudioConfig_SetHfpMicSrEnabled_ParamsSpec={$:{}};mojo.internal.Struct(AudioDeviceSpec.$,"AudioDevice",[mojo.internal.StructField("id",0,0,mojo.internal.Uint64,BigInt(0),false,0),mojo.internal.StructField("displayName",8,0,mojo.internal.String,null,false,0),mojo.internal.StructField("isActive",16,0,mojo.internal.Bool,false,false,0),mojo.internal.StructField("deviceType",20,0,AudioDeviceTypeSpec.$,0,false,0),mojo.internal.StructField("noiseCancellationState",24,0,AudioEffectStateSpec.$,0,false,0),mojo.internal.StructField("forceRespectUiGainsState",28,0,AudioEffectStateSpec.$,0,false,0),mojo.internal.StructField("hfpMicSrState",32,0,AudioEffectStateSpec.$,0,false,0)],[[0,48]]);mojo.internal.Struct(AudioSystemPropertiesSpec.$,"AudioSystemProperties",[mojo.internal.StructField("outputDevices",0,0,mojo.internal.Array(AudioDeviceSpec.$,false),null,false,0),mojo.internal.StructField("outputVolumePercent",8,0,mojo.internal.Uint8,0,false,0),mojo.internal.StructField("inputGainPercent",9,0,mojo.internal.Uint8,0,false,0),mojo.internal.StructField("outputMuteState",12,0,MuteStateSpec.$,0,false,0),mojo.internal.StructField("inputDevices",16,0,mojo.internal.Array(AudioDeviceSpec.$,false),null,false,0),mojo.internal.StructField("inputMuteState",24,0,MuteStateSpec.$,0,false,0)],[[0,40]]);mojo.internal.Struct(AudioSystemPropertiesObserver_OnPropertiesUpdated_ParamsSpec.$,"AudioSystemPropertiesObserver_OnPropertiesUpdated_Params",[mojo.internal.StructField("properties",0,0,AudioSystemPropertiesSpec.$,null,false,0)],[[0,16]]);mojo.internal.Struct(CrosAudioConfig_ObserveAudioSystemProperties_ParamsSpec.$,"CrosAudioConfig_ObserveAudioSystemProperties_Params",[mojo.internal.StructField("observer",0,0,mojo.internal.InterfaceProxy(AudioSystemPropertiesObserverRemote),null,false,0)],[[0,16]]);mojo.internal.Struct(CrosAudioConfig_SetOutputMuted_ParamsSpec.$,"CrosAudioConfig_SetOutputMuted_Params",[mojo.internal.StructField("muted",0,0,mojo.internal.Bool,false,false,0)],[[0,16]]);mojo.internal.Struct(CrosAudioConfig_SetOutputVolumePercent_ParamsSpec.$,"CrosAudioConfig_SetOutputVolumePercent_Params",[mojo.internal.StructField("volume",0,0,mojo.internal.Int8,0,false,0)],[[0,16]]);mojo.internal.Struct(CrosAudioConfig_SetInputGainPercent_ParamsSpec.$,"CrosAudioConfig_SetInputGainPercent_Params",[mojo.internal.StructField("gain",0,0,mojo.internal.Uint8,0,false,0)],[[0,16]]);mojo.internal.Struct(CrosAudioConfig_SetActiveDevice_ParamsSpec.$,"CrosAudioConfig_SetActiveDevice_Params",[mojo.internal.StructField("device",0,0,mojo.internal.Uint64,BigInt(0),false,0)],[[0,16]]);mojo.internal.Struct(CrosAudioConfig_SetInputMuted_ParamsSpec.$,"CrosAudioConfig_SetInputMuted_Params",[mojo.internal.StructField("muted",0,0,mojo.internal.Bool,false,false,0)],[[0,16]]);mojo.internal.Struct(CrosAudioConfig_SetNoiseCancellationEnabled_ParamsSpec.$,"CrosAudioConfig_SetNoiseCancellationEnabled_Params",[mojo.internal.StructField("enabled",0,0,mojo.internal.Bool,false,false,0)],[[0,16]]);mojo.internal.Struct(CrosAudioConfig_SetForceRespectUiGainsEnabled_ParamsSpec.$,"CrosAudioConfig_SetForceRespectUiGainsEnabled_Params",[mojo.internal.StructField("enabled",0,0,mojo.internal.Bool,false,false,0)],[[0,16]]);mojo.internal.Struct(CrosAudioConfig_SetHfpMicSrEnabled_ParamsSpec.$,"CrosAudioConfig_SetHfpMicSrEnabled_Params",[mojo.internal.StructField("enabled",0,0,mojo.internal.Bool,false,false,0)],[[0,16]]);var cros_audio_config_mojomWebui=Object.freeze({__proto__:null,AudioDeviceSpec:AudioDeviceSpec,get AudioDeviceType(){return AudioDeviceType},AudioDeviceTypeSpec:AudioDeviceTypeSpec,get AudioEffectState(){return AudioEffectState},AudioEffectStateSpec:AudioEffectStateSpec,AudioSystemPropertiesObserver:AudioSystemPropertiesObserver,AudioSystemPropertiesObserverCallbackRouter:AudioSystemPropertiesObserverCallbackRouter,AudioSystemPropertiesObserverPendingReceiver:AudioSystemPropertiesObserverPendingReceiver,AudioSystemPropertiesObserverReceiver:AudioSystemPropertiesObserverReceiver,AudioSystemPropertiesObserverRemote:AudioSystemPropertiesObserverRemote,AudioSystemPropertiesObserver_OnPropertiesUpdated_ParamsSpec:AudioSystemPropertiesObserver_OnPropertiesUpdated_ParamsSpec,AudioSystemPropertiesSpec:AudioSystemPropertiesSpec,CrosAudioConfig:CrosAudioConfig,CrosAudioConfigCallbackRouter:CrosAudioConfigCallbackRouter,CrosAudioConfigPendingReceiver:CrosAudioConfigPendingReceiver,CrosAudioConfigReceiver:CrosAudioConfigReceiver,CrosAudioConfigRemote:CrosAudioConfigRemote,CrosAudioConfig_ObserveAudioSystemProperties_ParamsSpec:CrosAudioConfig_ObserveAudioSystemProperties_ParamsSpec,CrosAudioConfig_SetActiveDevice_ParamsSpec:CrosAudioConfig_SetActiveDevice_ParamsSpec,CrosAudioConfig_SetForceRespectUiGainsEnabled_ParamsSpec:CrosAudioConfig_SetForceRespectUiGainsEnabled_ParamsSpec,CrosAudioConfig_SetHfpMicSrEnabled_ParamsSpec:CrosAudioConfig_SetHfpMicSrEnabled_ParamsSpec,CrosAudioConfig_SetInputGainPercent_ParamsSpec:CrosAudioConfig_SetInputGainPercent_ParamsSpec,CrosAudioConfig_SetInputMuted_ParamsSpec:CrosAudioConfig_SetInputMuted_ParamsSpec,CrosAudioConfig_SetNoiseCancellationEnabled_ParamsSpec:CrosAudioConfig_SetNoiseCancellationEnabled_ParamsSpec,CrosAudioConfig_SetOutputMuted_ParamsSpec:CrosAudioConfig_SetOutputMuted_ParamsSpec,CrosAudioConfig_SetOutputVolumePercent_ParamsSpec:CrosAudioConfig_SetOutputVolumePercent_ParamsSpec,get MuteState(){return MuteState},MuteStateSpec:MuteStateSpec});function getTemplate$1u(){return html`<!--_html_template_start_--><style include="settings-shared md-select">.audio-mute-button{margin-inline-end:8px}.audio-mute-button[disabled]{background-color:transparent;pointer-events:auto}.audio-options-container{align-items:center;display:flex;flex-direction:row}.audio-slider{margin-inline-end:16px;padding:0;width:142px}h2{padding-inline-start:var(--cr-section-padding)}.settings-box:first-of-type{border-top:none}.subsection{padding-inline-end:var(--cr-section-padding);padding-inline-start:var(--cr-section-indent-padding)}.subsection>.settings-box,.subsection>settings-toggle-button{padding-inline-end:0;padding-inline-start:0}:host([is-output-muted_]) #outputVolumeSlider{--cr-slider-active-color:var(--cros-slider-color-inactive);--cr-slider-container-color:var(--cros-slider-track-color-inactive);--cr-slider-knob-color-rgb:var(--cros-color-primary-rgb)}:host([is-output-muted_]) #audioOutputMuteButton{--cr-icon-button-fill-color:var(--cros-color-secondary)}:host(:not([is-output-muted_])) #audioOutputMuteButton{--cr-icon-button-fill-color:var(--cros-color-prominent)}:host([is-input-muted_]) #audioInputGainVolumeSlider{--cr-slider-active-color:var(--cros-slider-color-inactive);--cr-slider-container-color:var(--cros-slider-track-color-inactive);--cr-slider-knob-color-rgb:var(--cros-color-primary-rgb)}:host([is-input-muted_]) #audioInputGainMuteButton{--cr-icon-button-fill-color:var(--cros-color-secondary)}:host(:not([is-input-muted_])) #audioInputGainMuteButton{--cr-icon-button-fill-color:var(--cros-color-prominent)}paper-tooltip{--paper-tooltip-min-width:max-content}</style>


<div id="output" hidden="[[getOutputHidden_(audioSystemProperties_.outputDevices)]]">
  <h2 id="audioOutputTitle">$i18n{audioOutputTitle}</h2>
  <div id="audioOutputSubsection" class="subsection">
    <div id="outputDeviceSubsection" class="settings-box">
      <div class="start settings-box-text" id="audioOutputDeviceLabel">
        $i18n{audioOutputDeviceTitle}
      </div>
      <select id="audioOutputDeviceDropdown" class="md-select" on-change="onOutputDeviceChanged" aria-labelledby="audioOutputTitle audioOutputDeviceLabel">
        <template is="dom-repeat" items="[[audioSystemProperties_.outputDevices]]">
          <option value="[[item.id]]" selected="[[item.isActive]]">
            [[getDeviceName_(item)]]
          </option>
        </template>
      </select>
    </div>
    <div id="outputVolumeSubsection" class="settings-box">
      <div class="start settings-box-text" id="audioOutputVolumeLabel">
        $i18n{audioVolumeTitle}
      </div>
      <div class="audio-options-container">
        <template is="dom-if" if="[[isOutputMutedByPolicy_(
              audioSystemProperties_.outputMuteState
            )]]">
          <cr-policy-indicator id="audioOutputMuteByPolicyIndicator" indicator-type="userPolicy">
          </cr-policy-indicator>
        </template>
        <cr-icon-button class="audio-mute-button" id="audioOutputMuteButton" iron-icon="[[getOutputIcon_(isOutputMuted_, outputVolume_)]]" on-click="onOutputMuteButtonClicked" disabled="[[isOutputMutedByPolicy_(
                audioSystemProperties_.outputMuteState
              )]]" aria-description="[[getOutputMuteButtonAriaLabel(
                isOutputMuted_
              )]]" aria-labelledby="audioOutputVolumeLabel" aria-pressed="[[isOutputMuted_]]">
        </cr-icon-button>
        <paper-tooltip id="audioOutputMuteButtonTooltip" aria-hidden="true" for="audioOutputMuteButton">
          [[getMuteTooltip_(audioSystemProperties_.outputMuteState)]]
        </paper-tooltip>
        <cr-slider class="audio-slider" id="outputVolumeSlider" min="0" max="100" key-press-slider-increment="10" disabled="[[isOutputMutedByPolicy_(
                audioSystemProperties_.outputMuteState
              )]]" value="[[audioSystemProperties_.outputVolumePercent]]" on-cr-slider-value-changed="onOutputVolumeSliderChanged_" aria-labelledby="audioOutputTitle audioOutputVolumeLabel">
        </cr-slider>
      </div>
    </div>
  </div>
</div>

<div id="input" hidden="[[getInputHidden_(audioSystemProperties_.inputDevices)]]">
  <h2 id="audioInputTitle">$i18n{audioInputTitle}</h2>
  <div id="audioInputSection" class="subsection">
    <div id="audioInputDeviceSubsection" class="settings-box">
      <div id="audioInputDeviceLabel" class="start settings-box-text">
        $i18n{audioInputDeviceTitle}
      </div>
      <select id="audioInputDeviceDropdown" on-change="onInputDeviceChanged" class="md-select" aria-labelledby="audioInputTitle audioInputDeviceLabel">
        <template is="dom-repeat" items="[[audioSystemProperties_.inputDevices]]">
          <option value="[[item.id]]" selected="[[item.isActive]]">
            [[getDeviceName_(item)]]
          </option>
        </template>
      </select>
    </div>
    <div id="audioInputDeviceSubsection" class="settings-box">
      <div id="audioInputGainLabel" class="start settings-box-text">
        $i18n{audioInputGainTitle}
      </div>
      <div class="audio-options-container">
        <cr-icon-button id="audioInputGainMuteButton" iron-icon="[[getInputIcon_(isInputMuted_)]]" on-click="onInputMuteClicked" class="audio-mute-button" disabled="[[shouldDisableInputGainControls(isInputMuted_)]]" aria-description$="[[getInputMuteButtonAriaLabel(
                audioSystemProperties_.inputMuteState,
                isInputMuted_
              )]]" aria-labelledby="audioInputGainLabel" aria-pressed="[[isInputMuted_]]">
        </cr-icon-button>
        <paper-tooltip id="audioInputMuteButtonTooltip" aria-hidden="true" for="audioInputGainMuteButton">
          [[getMuteTooltip_(audioSystemProperties_.inputMuteState)]]
        </paper-tooltip>
        <cr-slider id="audioInputGainVolumeSlider" min="0" max="100" key-press-slider-increment="10" iron-icon="[[getInputIcon_(isInputMuted_)]]" value="[[audioSystemProperties_.inputGainPercent]]" on-cr-slider-value-changed="onInputVolumeSliderChanged" class="audio-slider" aria-labelledby="audioInputTitle audioInputGainLabel" disabled="[[shouldDisableInputGainControls(isInputMuted_)]]">
        </cr-slider>
      </div>
    </div>
    <div id="audioInputNoiseCancellationSubsection" class="settings-box" hidden="[[!isNoiseCancellationSupported_]]">
      <div id="audioInputNoiseCancellationLabel" class="settings-box-text start" aria-hidden="true">
        $i18n{audioInputNoiseCancellationTitle}
      </div>
      <cr-toggle id="audioInputNoiseCancellationToggle" checked="{{isNoiseCancellationEnabled_}}" aria-labelledby="audioInputNoiseCancellationLabel" on-change="toggleNoiseCancellationEnabled_">
      </cr-toggle>
    </div>
    <div id="audioInputAllowAGCSubsection" class="settings-box" hidden="[[!showAllowAGC]]">
      <div id="audioInputAllowAGCLabel" class="settings-box-text start">
        $i18n{audioInputAllowAGCTitle}
      </div>
      <cr-toggle id="audioInputAllowAGCToggle" checked="{{isAllowAGCEnabled}}">
      </cr-toggle>
    </div>
  </div>
</div>

<div id="deviceSounds">
  <h2>$i18n{deviceSoundsTitle}</h2>
  <div id="deviceSoundsSection" class="subsection">
    <settings-toggle-button id="lowBatterySoundToggle" pref="{{prefs.ash.low_battery_sound.enabled}}" label="$i18n{lowBatterySoundLabel}" deep-link-focus-id$="[[Setting.kLowBatterySound]]" hidden$="[[powerSoundsHidden_]]">
    </settings-toggle-button>
    <settings-toggle-button id="chargingSoundsToggle" pref="{{prefs.ash.charging_sounds.enabled}}" label="$i18n{chargingSoundsLabel}" deep-link-focus-id$="[[Setting.kChargingSounds]]" hidden$="[[powerSoundsHidden_]]">
    </settings-toggle-button>
    <div class="settings-box start-padding continuation">
      <div id="deviceStartupSoundEnabledLabel" class="start settings-box-text">
        $i18n{deviceStartupSoundLabel}
      </div>
      <cr-toggle id="deviceStartupSoundToggle" checked="[[startupSoundEnabled_]]" on-change="toggleStartupSoundEnabled_">
      </cr-toggle>
    </div>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const defaultFakeMicJack={id:BigInt(1),displayName:"Mic Jack",isActive:true,deviceType:AudioDeviceType.kInternalMic,noiseCancellationState:AudioEffectState.kNotSupported,forceRespectUiGainsState:AudioEffectState.kNotEnabled,hfpMicSrState:AudioEffectState.kNotSupported};const fakeSpeakerActive={id:BigInt(2),displayName:"Speaker",isActive:true,deviceType:AudioDeviceType.kInternalSpeaker,noiseCancellationState:AudioEffectState.kNotSupported,forceRespectUiGainsState:AudioEffectState.kNotSupported,hfpMicSrState:AudioEffectState.kNotSupported};const fakeMicJackInactive={id:BigInt(3),displayName:"Mic Jack",isActive:false,deviceType:AudioDeviceType.kInternalSpeaker,noiseCancellationState:AudioEffectState.kNotSupported,forceRespectUiGainsState:AudioEffectState.kNotSupported,hfpMicSrState:AudioEffectState.kNotSupported};const defaultFakeSpeaker={id:BigInt(4),displayName:"Speaker",isActive:false,deviceType:AudioDeviceType.kInternalSpeaker,noiseCancellationState:AudioEffectState.kNotSupported,forceRespectUiGainsState:AudioEffectState.kNotSupported,hfpMicSrState:AudioEffectState.kNotSupported};const fakeInternalFrontMic={id:BigInt(5),displayName:"FrontMic",isActive:true,deviceType:AudioDeviceType.kFrontMic,noiseCancellationState:AudioEffectState.kNotEnabled,forceRespectUiGainsState:AudioEffectState.kNotEnabled,hfpMicSrState:AudioEffectState.kNotSupported};const fakeBluetoothMic={id:BigInt(6),displayName:"Bluetooth Mic",isActive:false,deviceType:AudioDeviceType.kBluetoothNbMic,noiseCancellationState:AudioEffectState.kNotSupported,forceRespectUiGainsState:AudioEffectState.kNotEnabled,hfpMicSrState:AudioEffectState.kNotSupported};const fakeInternalMicActive={id:BigInt(7),displayName:"Internal Mic",isActive:true,deviceType:AudioDeviceType.kInternalMic,noiseCancellationState:AudioEffectState.kNotSupported,forceRespectUiGainsState:AudioEffectState.kNotEnabled,hfpMicSrState:AudioEffectState.kNotSupported};const defaultFakeAudioSystemProperties={outputDevices:[defaultFakeSpeaker,defaultFakeMicJack],outputVolumePercent:75,inputGainPercent:87,outputMuteState:MuteState.kNotMuted,inputDevices:[fakeInternalFrontMic,fakeBluetoothMic],inputMuteState:MuteState.kNotMuted};function createAudioDevice(baseDevice,isActive){assert(!!baseDevice);return{...baseDevice,isActive:isActive}}class FakeCrosAudioConfig{constructor(){this.audioSystemProperties=defaultFakeAudioSystemProperties;this.observers=[]}observeAudioSystemProperties(observer){this.observers.push(observer);this.notifyAudioSystemPropertiesUpdated()}setActiveDevice(deviceId){const isOutputDevice=!!this.audioSystemProperties.outputDevices.find((device=>device.id===deviceId));if(isOutputDevice){const devices=this.audioSystemProperties.outputDevices.map((device=>createAudioDevice(device,device.id===deviceId)));this.audioSystemProperties.outputDevices=devices}else{assert(this.audioSystemProperties.inputDevices.find((device=>device.id===deviceId)));const devices=this.audioSystemProperties.inputDevices.map((device=>createAudioDevice(device,device.id===deviceId)));this.audioSystemProperties.inputDevices=devices}this.notifyAudioSystemPropertiesUpdated()}setAudioSystemProperties(properties){this.audioSystemProperties=properties;this.notifyAudioSystemPropertiesUpdated()}setNoiseCancellationEnabled(enabled){if(!this.audioSystemProperties.inputDevices){return}const activeIndex=this.audioSystemProperties.inputDevices.findIndex((device=>device.isActive&&device.noiseCancellationState!==AudioEffectState.kNotSupported));if(activeIndex===-1){return}const nextState=enabled?AudioEffectState.kEnabled:AudioEffectState.kNotEnabled;this.audioSystemProperties.inputDevices[activeIndex].noiseCancellationState=nextState;this.notifyAudioSystemPropertiesUpdated()}setForceRespectUiGainsEnabled(enabled){if(!this.audioSystemProperties.inputDevices){return}const activeIndex=this.audioSystemProperties.inputDevices.findIndex((device=>device.isActive));if(activeIndex===-1){return}const nextState=enabled?AudioEffectState.kEnabled:AudioEffectState.kNotEnabled;this.audioSystemProperties.inputDevices[activeIndex].forceRespectUiGainsState=nextState;this.notifyAudioSystemPropertiesUpdated()}setHfpMicSrEnabled(enabled){if(!this.audioSystemProperties.inputDevices){return}const activeIndex=this.audioSystemProperties.inputDevices.findIndex((device=>device.isActive&&device.hfpMicSrState!==AudioEffectState.kNotSupported));if(activeIndex===-1){return}const nextState=enabled?AudioEffectState.kEnabled:AudioEffectState.kNotEnabled;this.audioSystemProperties.inputDevices[activeIndex].hfpMicSrState=nextState;this.notifyAudioSystemPropertiesUpdated()}setOutputMuted(muted){this.audioSystemProperties.outputMuteState=muted?MuteState.kMutedByUser:MuteState.kNotMuted;this.notifyAudioSystemPropertiesUpdated()}setInputMuted(muted){const muteState=muted?MuteState.kMutedByUser:MuteState.kNotMuted;this.audioSystemProperties.inputMuteState=muteState;this.notifyAudioSystemPropertiesUpdated()}setInputGainPercent(gain){assert(gain>=0&&gain<=100);this.audioSystemProperties.inputGainPercent=Math.round(gain);this.notifyAudioSystemPropertiesUpdated()}setOutputVolumePercent(volume){this.audioSystemProperties.outputVolumePercent=Math.round(volume);this.notifyAudioSystemPropertiesUpdated()}notifyAudioSystemPropertiesUpdated(){this.observers.forEach((observer=>{observer.onPropertiesUpdated(this.audioSystemProperties)}))}}var fake_cros_audio_config=Object.freeze({__proto__:null,FakeCrosAudioConfig:FakeCrosAudioConfig,createAudioDevice:createAudioDevice,defaultFakeAudioSystemProperties:defaultFakeAudioSystemProperties,defaultFakeMicJack:defaultFakeMicJack,defaultFakeSpeaker:defaultFakeSpeaker,fakeBluetoothMic:fakeBluetoothMic,fakeInternalFrontMic:fakeInternalFrontMic,fakeInternalMicActive:fakeInternalMicActive,fakeMicJackInactive:fakeMicJackInactive,fakeSpeakerActive:fakeSpeakerActive});
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let crosAudioConfig=null;const useFakeMojo=false;function setCrosAudioConfigForTesting(testCrosAudioConfig){crosAudioConfig=testCrosAudioConfig}function getCrosAudioConfig(){if(!crosAudioConfig&&useFakeMojo){crosAudioConfig=new FakeCrosAudioConfig}if(!crosAudioConfig){crosAudioConfig=CrosAudioConfig.getRemote()}return crosAudioConfig}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function clampPercent(percent){return Math.max(0,Math.min(percent,100))}const SettingsAudioElementBase=WebUiListenerMixin(DeepLinkingMixin(PrefsMixin(RouteObserverMixin(I18nMixin(PolymerElement)))));const VOLUME_ICON_OFF_LEVEL=0;const VOLUME_ICON_LOUD_LEVEL=34;const SETTINGS_20PX_ICON_PREFIX="settings20:";class SettingsAudioElement extends SettingsAudioElementBase{static get is(){return"settings-audio"}static get template(){return getTemplate$1u()}static get properties(){return{crosAudioConfig_:{type:Object},audioSystemProperties_:{type:Object},isOutputMuted_:{type:Boolean,reflectToAttribute:true},isInputMuted_:{type:Boolean,reflectToAttribute:true},isNoiseCancellationEnabled_:{type:Boolean},isNoiseCancellationSupported_:{type:Boolean},outputVolume_:{type:Number},powerSoundsHidden_:{type:Boolean,computed:"computePowerSoundsHidden_(batteryStatus_)"},startupSoundEnabled_:{type:Boolean,value:false},supportedSettingIds:{type:Object,value:()=>new Set([Setting.kChargingSounds,Setting.kLowBatterySound])},showAllowAGC:{type:Boolean,value:loadTimeData.getBoolean("enableForceRespectUiGainsToggle"),readonly:true},isAllowAGCEnabled:{type:Boolean,value:true,observer:SettingsAudioElement.prototype.onAllowAGCEnabledChanged}}}constructor(){super();this.crosAudioConfig_=getCrosAudioConfig();this.audioSystemPropertiesObserverReceiver_=new AudioSystemPropertiesObserverReceiver(this);this.audioAndCaptionsBrowserProxy_=AudioAndCaptionsPageBrowserProxyImpl.getInstance()}ready(){super.ready();this.observeAudioSystemProperties_();this.addWebUiListener("startup-sound-setting-retrieved",(startupSoundEnabled=>{this.startupSoundEnabled_=startupSoundEnabled}));this.addWebUiListener("battery-status-changed",this.set.bind(this,"batteryStatus_"))}onPropertiesUpdated(properties){this.audioSystemProperties_=properties;this.isOutputMuted_=this.audioSystemProperties_.outputMuteState!==MuteState.kNotMuted;this.isInputMuted_=this.audioSystemProperties_.inputMuteState!==MuteState.kNotMuted;const activeInputDevice=this.audioSystemProperties_.inputDevices.find((device=>device.isActive));this.isNoiseCancellationEnabled_=activeInputDevice?.noiseCancellationState===AudioEffectState.kEnabled;this.isNoiseCancellationSupported_=!(activeInputDevice?.noiseCancellationState===AudioEffectState.kNotSupported);this.isAllowAGCEnabled=activeInputDevice?.forceRespectUiGainsState===AudioEffectState.kNotEnabled;this.outputVolume_=this.audioSystemProperties_.outputVolumePercent}getIsOutputMutedForTest(){return this.isOutputMuted_}getIsInputMutedForTest(){return this.isInputMuted_}observeAudioSystemProperties_(){if(this.crosAudioConfig_ instanceof FakeCrosAudioConfig){this.crosAudioConfig_.observeAudioSystemProperties(this);return}this.crosAudioConfig_.observeAudioSystemProperties(this.audioSystemPropertiesObserverReceiver_.$.bindNewPipeAndPassRemote())}isOutputMutedByPolicy_(){return this.audioSystemProperties_.outputMuteState===MuteState.kMutedByPolicy}onInputMuteClicked(){this.crosAudioConfig_.setInputMuted(!this.isInputMuted_)}onInputDeviceChanged(){const inputDeviceSelect=this.shadowRoot.querySelector("#audioInputDeviceDropdown");assert(!!inputDeviceSelect);this.crosAudioConfig_.setActiveDevice(BigInt(inputDeviceSelect.value))}onAllowAGCEnabledChanged(enabled,previousEnabled){if(previousEnabled===undefined||previousEnabled===enabled){return}this.crosAudioConfig_.setForceRespectUiGainsEnabled(!enabled)}onInputVolumeSliderChanged(){const sliderValue=this.shadowRoot.querySelector("#audioInputGainVolumeSlider").value;this.crosAudioConfig_.setInputGainPercent(clampPercent(sliderValue))}onOutputVolumeSliderChanged_(){const sliderValue=this.shadowRoot.querySelector("#outputVolumeSlider").value;this.crosAudioConfig_.setOutputVolumePercent(clampPercent(sliderValue))}onOutputDeviceChanged(){const outputDeviceSelect=this.shadowRoot.querySelector("#audioOutputDeviceDropdown");assert(!!outputDeviceSelect);this.crosAudioConfig_.setActiveDevice(BigInt(outputDeviceSelect.value))}onOutputMuteButtonClicked(){this.crosAudioConfig_.setOutputMuted(!this.isOutputMuted_)}currentRouteChanged(route){if(route!==routes.AUDIO){return}this.audioAndCaptionsBrowserProxy_.getStartupSoundEnabled()}getInputIcon_(){return this.isInputMuted_?"settings:mic-off":"cr:mic"}getOutputIcon_(){if(this.isOutputMuted_){return SETTINGS_20PX_ICON_PREFIX+"volume-up-off"}if(this.outputVolume_===VOLUME_ICON_OFF_LEVEL){return SETTINGS_20PX_ICON_PREFIX+"volume-zero"}if(this.outputVolume_<VOLUME_ICON_LOUD_LEVEL){return SETTINGS_20PX_ICON_PREFIX+"volume-down"}return SETTINGS_20PX_ICON_PREFIX+"volume-up"}getOutputHidden_(){return this.audioSystemProperties_.outputDevices.length===0}getInputHidden_(){return this.audioSystemProperties_.inputDevices.length===0}shouldDisableInputGainControls(){return this.audioSystemProperties_.inputMuteState===MuteState.kMutedExternally}getDeviceName_(audioDevice){switch(audioDevice.deviceType){case AudioDeviceType.kHeadphone:return this.i18n("audioDeviceHeadphoneLabel");case AudioDeviceType.kMic:return this.i18n("audioDeviceMicJackLabel");case AudioDeviceType.kUsb:return this.i18n("audioDeviceUsbLabel",audioDevice.displayName);case AudioDeviceType.kBluetooth:case AudioDeviceType.kBluetoothNbMic:return this.i18n("audioDeviceBluetoothLabel",audioDevice.displayName);case AudioDeviceType.kHdmi:return this.i18n("audioDeviceHdmiLabel",audioDevice.displayName);case AudioDeviceType.kInternalSpeaker:return this.i18n("audioDeviceInternalSpeakersLabel");case AudioDeviceType.kInternalMic:return this.i18n("audioDeviceInternalMicLabel");case AudioDeviceType.kFrontMic:return this.i18n("audioDeviceFrontMicLabel");case AudioDeviceType.kRearMic:return this.i18n("audioDeviceRearMicLabel");default:return audioDevice.displayName}}getMuteTooltip_(muteState){switch(muteState){case MuteState.kNotMuted:return this.i18n("audioToggleToMuteTooltip");case MuteState.kMutedByUser:return this.i18n("audioToggleToUnmuteTooltip");case MuteState.kMutedByPolicy:return this.i18n("audioMutedByPolicyTooltip");case MuteState.kMutedExternally:return this.i18n("audioMutedExternallyTooltip");default:return""}}getInputMuteButtonAriaLabel(){if(this.audioSystemProperties_.inputMuteState===MuteState.kMutedExternally){return this.i18n("audioInputMuteButtonAriaLabelMutedByHardwareSwitch")}return this.isInputMuted_?this.i18n("audioInputMuteButtonAriaLabelMuted"):this.i18n("audioInputMuteButtonAriaLabelNotMuted")}getOutputMuteButtonAriaLabel(){return this.isOutputMuted_?this.i18n("audioOutputMuteButtonAriaLabelMuted"):this.i18n("audioOutputMuteButtonAriaLabelNotMuted")}toggleNoiseCancellationEnabled_(e){this.crosAudioConfig_.setNoiseCancellationEnabled(e.detail)}toggleStartupSoundEnabled_(e){this.audioAndCaptionsBrowserProxy_.setStartupSoundEnabled(e.detail)}computePowerSoundsHidden_(){return!this.batteryStatus_?.present}}customElements.define(SettingsAudioElement.is,SettingsAudioElement);function getTemplate$1t(){return html`<!--_html_template_start_--><style include="cr-hidden-style">:host{cursor:pointer;display:flex;flex-direction:row;font-size:var(--cr-tabs-font-size,14px);font-weight:500;height:var(--cr-tabs-height,48px);user-select:none}.tab{align-items:center;color:var(--cr-secondary-text-color);display:flex;flex:var(--cr-tabs-flex,auto);height:100%;justify-content:center;opacity:.8;outline:0;padding:0 var(--cr-tabs-tab-inline-padding,0);position:relative;transition:opacity .1s cubic-bezier(.4,0,1,1)}:host-context([chrome-refresh-2023]) .tab{opacity:1}:host-context(.focus-outline-visible) .tab:focus{outline:var(--cr-tabs-focus-outline,auto);outline-offset:var(--cr-tabs-focus-outline-offset,0)}.selected{color:var(--cr-tabs-selected-color,var(--google-blue-600));opacity:1}@media (prefers-color-scheme:dark){.selected{color:var(--cr-tabs-selected-color,var(--google-blue-300))}}.tab-icon{-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--cr-tabs-icon-size,var(--cr-icon-size));background-color:var(--cr-secondary-text-color);display:none;height:var(--cr-tabs-icon-size,var(--cr-icon-size));margin-inline-end:var(--cr-tabs-icon-margin-end,var(--cr-icon-size));width:var(--cr-tabs-icon-size,var(--cr-icon-size))}.selected .tab-icon{background-color:var(--cr-tabs-selected-color,var(--google-blue-600))}@media (prefers-color-scheme:dark){.selected .tab-icon{background-color:var(--cr-tabs-selected-color,var(--google-blue-300))}}.tab-indicator{background:var(--cr-tabs-unselected-color,var(--google-blue-600));border-top-left-radius:var(--cr-tabs-selection-bar-radius,var(--cr-tabs-selection-bar-width,2px));border-top-right-radius:var(--cr-tabs-selection-bar-radius,var(--cr-tabs-selection-bar-width,2px));bottom:0;height:var(--cr-tabs-selection-bar-width,2px);left:var(--cr-tabs-tab-inline-padding,0);opacity:var(--cr-tabs-selection-bar-unselected-opacity,0);position:absolute;right:var(--cr-tabs-tab-inline-padding,0);transform-origin:left center;transition:transform}.selected .tab-indicator{background:var(--cr-tabs-selected-color,var(--google-blue-600));opacity:1}.tab-indicator.expand{transition-duration:150ms;transition-timing-function:cubic-bezier(.4,0,1,1)}.tab-indicator.contract{transition-duration:180ms;transition-timing-function:cubic-bezier(0,0,.2,1)}@media (prefers-color-scheme:dark){.tab-indicator{background:var(--cr-tabs-unselected-color,var(--google-blue-300))}.selected .tab-indicator{background:var(--cr-tabs-selected-color,var(--google-blue-300))}}@media (forced-colors:active){.tab-indicator{background:SelectedItem}}</style>
<template is="dom-repeat" items="[[tabNames]]">
  <div role="tab" class$="tab [[getSelectedClass_(index, selected)]]" on-click="onTabClick_" aria-selected$="[[getAriaSelected_(index, selected)]]" tabindex$="[[getTabindex_(index, selected)]]">
    <div class="tab-icon" style$="[[getIconStyle_(index)]]">
    </div>
    [[item]]
    <div class="tab-indicator"></div>
  </div>
</template>
<!--_html_template_end_-->`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrTabsElement extends PolymerElement{constructor(){super(...arguments);this.isRtl_=false;this.lastSelected_=null}static get is(){return"cr-tabs"}static get template(){return getTemplate$1t()}static get properties(){return{tabIcons:{type:Array,value:()=>[]},tabNames:{type:Array,value:()=>[]},selected:{type:Number,notify:true,observer:"onSelectedChanged_"}}}connectedCallback(){super.connectedCallback();this.isRtl_=this.matches(":host-context([dir=rtl]) cr-tabs")}ready(){super.ready();this.setAttribute("role","tablist");this.addEventListener("keydown",this.onKeyDown_.bind(this))}getAriaSelected_(index){return index===this.selected?"true":"false"}getIconStyle_(index){const icon=this.tabIcons[index];return icon?`-webkit-mask-image: url(${icon}); display: block;`:""}getTabindex_(index){return index===this.selected?"0":"-1"}getSelectedClass_(index){return index===this.selected?"selected":""}onSelectedChanged_(newSelected,oldSelected){const tabs=this.shadowRoot.querySelectorAll(".tab");if(tabs.length===0||oldSelected===undefined||tabs.length<=newSelected||tabs.length<=oldSelected){return}const oldTabRect=tabs[oldSelected].getBoundingClientRect();const newTabRect=tabs[newSelected].getBoundingClientRect();const newIndicator=tabs[newSelected].querySelector(".tab-indicator");newIndicator.classList.remove("expand","contract");this.updateIndicator_(newIndicator,newTabRect,oldTabRect.left,oldTabRect.width);newIndicator.getBoundingClientRect();newIndicator.classList.add("expand");newIndicator.addEventListener("transitionend",(e=>this.onIndicatorTransitionEnd_(e)),{once:true});const leftmostEdge=Math.min(oldTabRect.left,newTabRect.left);const fullWidth=newTabRect.left>oldTabRect.left?newTabRect.right-oldTabRect.left:oldTabRect.right-newTabRect.left;this.updateIndicator_(newIndicator,newTabRect,leftmostEdge,fullWidth)}onKeyDown_(e){const count=this.tabNames.length;let newSelection;if(e.key==="Home"){newSelection=0}else if(e.key==="End"){newSelection=count-1}else if(e.key==="ArrowLeft"||e.key==="ArrowRight"){const delta=e.key==="ArrowLeft"?this.isRtl_?1:-1:this.isRtl_?-1:1;newSelection=(count+this.selected+delta)%count}else{return}e.preventDefault();e.stopPropagation();this.selected=newSelection;this.shadowRoot.querySelector(".tab.selected").focus()}onIndicatorTransitionEnd_(event){const indicator=event.target;indicator.classList.replace("expand","contract");indicator.style.transform=`translateX(0) scaleX(1)`}onTabClick_(e){this.selected=e.model.index}updateIndicator_(indicator,originRect,newLeft,newWidth){const leftDiff=100*(newLeft-originRect.left)/originRect.width;const widthRatio=newWidth/originRect.width;const transform=`translateX(${leftDiff}%) scaleX(${widthRatio})`;indicator.style.transform=transform}}customElements.define(CrTabsElement.is,CrTabsElement);
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
</custom-style>`;template$1.setAttribute("style","display: none;");document.head.appendChild(template$1.content);function getTemplate$1s(){return html`<!--_html_template_start_--><style include="settings-shared">#displayArea{height:100%;overflow:hidden;position:relative;width:100%}.display{align-items:center;background:var(--cros-textfield-background-color);color:var(--cros-text-color-secondary);cursor:default;display:flex;font-size:100%;font-weight:500;justify-content:center;margin:4px;padding:3px;position:absolute;text-align:center}.display[selected]{border:var(--cros-icon-color-prominent) solid 1px}.display.mirror{border:var(--cros-icon-color-prominent) solid 1px}.highlight-left{border-left:var(--cros-icon-color-prominent) solid 1px}.highlight-right{border-right:var(--cros-icon-color-prominent) solid 1px}.highlight-top{border-top:var(--cros-icon-color-prominent) solid 1px}.highlight-bottom{border-bottom:var(--cros-icon-color-prominent) solid 1px}.display.elevate{box-shadow:var(--cr-elevation-3)}</style>
<div id="displayArea" on-iron-resize="calculateVisualScale_">
  <template is="dom-repeat" items="[[mirroringDestinationIds_]]">
    <div id="_mirror_[[item]]" class="display mirror" hidden$="[[!mirroring]]" style$="[[getMirrorDivStyle_(index, mirroringDestinationIds_.length,
                                     displays, visualScale)]]">
    </div>
  </template>
  <template is="dom-repeat" items="[[displays]]">
    <div id="_[[item.id]]" class="display elevate" draggable="[[dragEnabled]]" on-focus="onFocus_" on-click="onSelectDisplayClick_" style$="[[getDivStyle_(item.id, item.bounds, visualScale)]]" selected$="[[isSelected_(item, selectedDisplay)]]" tabindex="0">
    </div>
  </template>
</div>
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var DragType;(function(DragType){DragType[DragType["NONE"]=0]="NONE";DragType[DragType["CURSOR"]=1]="CURSOR";DragType[DragType["KEYBOARD"]=2]="KEYBOARD"})(DragType||(DragType={}));const DragMixin=dedupingMixin((baseClass=>{class DragMixinInternal extends baseClass{constructor(){super(...arguments);this.dragId="";this.dragType_=DragType.NONE;this.dragStartLocation_={x:0,y:0};this.lastTouchLocation_=null;this.mouseDownListener_=this.onMouseDown_.bind(this);this.mouseMoveListener_=this.onMouseMove_.bind(this);this.touchStartListener_=this.onTouchStart_.bind(this);this.touchMoveListener_=this.onTouchMove_.bind(this);this.keyDownListener_=this.onKeyDown_.bind(this);this.endDragListener_=this.endCursorDrag_.bind(this)}static get properties(){return{dragEnabled:Boolean,keyboardDragEnabled:{type:Boolean,value:false},keyboardDragStepSize:{type:Number,value:20}}}initializeDrag(enabled,container,callback){this.dragEnabled=enabled;if(!enabled){this.removeListeners_();return}if(container){this.container_=container}if(callback){this.callback_=callback}this.addListeners_()}addListeners_(){const container=this.container_;if(!container){return}container.addEventListener("mousedown",this.mouseDownListener_);container.addEventListener("mousemove",this.mouseMoveListener_);container.addEventListener("touchstart",this.touchStartListener_);container.addEventListener("touchmove",this.touchMoveListener_);container.addEventListener("keydown",this.keyDownListener_);container.addEventListener("touchend",this.endDragListener_);window.addEventListener("mouseup",this.endDragListener_)}removeListeners_(){const container=this.container_;if(!container||!this.mouseDownListener_){return}container.removeEventListener("mousedown",this.mouseDownListener_);container.removeEventListener("mousemove",this.mouseMoveListener_);container.removeEventListener("touchstart",this.touchStartListener_);container.removeEventListener("touchmove",this.touchMoveListener_);container.removeEventListener("keydown",this.keyDownListener_);container.removeEventListener("touchend",this.endDragListener_);window.removeEventListener("mouseup",this.endDragListener_)}onMouseDown_(e){const target=cast(e.target,HTMLElement);if(e.button!==0||!target.getAttribute("draggable")){return true}e.preventDefault();return this.startCursorDrag_(target,{x:e.pageX,y:e.pageY})}onMouseMove_(e){e.preventDefault();return this.processCursorDrag_({x:e.pageX,y:e.pageY})}onTouchStart_(e){if(e.touches.length!==1){return false}e.preventDefault();const target=cast(e.target,HTMLElement);const touch=e.touches[0];this.lastTouchLocation_={x:touch.pageX,y:touch.pageY};return this.startCursorDrag_(target,this.lastTouchLocation_)}onTouchMove_(e){if(e.touches.length!==1){return true}const touchLocation={x:e.touches[0].pageX,y:e.touches[0].pageY};if(this.lastTouchLocation_){const IGNORABLE_TOUCH_MOVE_PX=1;const xDiff=Math.abs(touchLocation.x-this.lastTouchLocation_.x);const yDiff=Math.abs(touchLocation.y-this.lastTouchLocation_.y);if(xDiff<=IGNORABLE_TOUCH_MOVE_PX&&yDiff<=IGNORABLE_TOUCH_MOVE_PX){return true}}this.lastTouchLocation_=touchLocation;e.preventDefault();return this.processCursorDrag_(touchLocation)}onKeyDown_(e){if(this.keyboardDragEnabled===false){return true}const target=cast(e.target,HTMLElement);if(!target.getAttribute("draggable")){return true}if(this.dragType_===DragType.CURSOR){return true}let delta;switch(e.key){case"ArrowUp":delta={x:0,y:-this.keyboardDragStepSize};break;case"ArrowDown":delta={x:0,y:this.keyboardDragStepSize};break;case"ArrowLeft":delta={x:-this.keyboardDragStepSize,y:0};break;case"ArrowRight":delta={x:this.keyboardDragStepSize,y:0};break;case"Enter":e.preventDefault();this.endKeyboardDrag_();return false;default:return true}e.preventDefault();if(this.dragType_===DragType.NONE){this.startKeyboardDrag_(target)}this.dragOffset_.x+=delta.x;this.dragOffset_.y+=delta.y;this.processKeyboardDrag_(this.dragOffset_);return false}startCursorDrag_(target,eventLocation){assert(this.dragEnabled);if(this.dragType_===DragType.KEYBOARD){this.endKeyboardDrag_()}this.dragId=target.id;this.dragStartLocation_=eventLocation;this.dragType_=DragType.CURSOR;return false}endCursorDrag_(){assert(this.dragEnabled);if(this.dragType_===DragType.CURSOR&&this.callback_){this.callback_(this.dragId,null)}this.cleanupDrag_();return false}processCursorDrag_(eventLocation){assert(this.dragEnabled);if(this.dragType_!==DragType.CURSOR){return true}this.executeCallback_(eventLocation);return false}startKeyboardDrag_(target){assert(this.dragEnabled);if(this.dragType_===DragType.CURSOR){this.endCursorDrag_()}this.dragId=target.id;this.dragStartLocation_={x:0,y:0};this.dragOffset_={x:0,y:0};this.dragType_=DragType.KEYBOARD}endKeyboardDrag_(){assert(this.dragEnabled);if(this.dragType_===DragType.KEYBOARD&&this.callback_){this.callback_(this.dragId,null)}this.cleanupDrag_()}processKeyboardDrag_(dragPosition){assert(this.dragEnabled);if(this.dragType_!==DragType.KEYBOARD){return true}this.executeCallback_(dragPosition);return false}cleanupDrag_(){this.dragId="";this.dragStartLocation_={x:0,y:0};this.lastTouchLocation_=null;this.dragType_=DragType.NONE}executeCallback_(dragPosition){if(this.callback_){const delta={x:dragPosition.x-this.dragStartLocation_.x,y:dragPosition.y-this.dragStartLocation_.y};this.callback_(this.dragId,delta)}}}return DragMixinInternal}));
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var LayoutPosition=chrome.system.display.LayoutPosition;const LayoutMixin=dedupingMixin((superClass=>{const superClassBase=DragMixin(superClass);class LayoutMixinInternal extends superClassBase{constructor(){super(...arguments);this.calculatedBoundsMap_=new Map;this.displayBoundsMap_=new Map;this.displayLayoutMap_=new Map;this.dragBounds_=undefined;this.dragLayoutId_="";this.dragLayoutPosition_=undefined;this.dragParentId_=""}static get properties(){return{layouts:Array,mirroring:{type:Boolean,value:false}}}getDisplayLayoutMapForTesting(){return this.displayLayoutMap_}initializeDisplayLayout(displays,layouts){this.dragLayoutId_="";this.dragParentId_="";this.mirroring=displays.length>0&&!!displays[0].mirroringSourceId;this.displayBoundsMap_.clear();for(const display of displays){this.displayBoundsMap_.set(display.id,display.bounds)}this.displayLayoutMap_.clear();for(const layout of layouts){this.displayLayoutMap_.set(layout.id,layout)}this.calculatedBoundsMap_.clear();for(const display of displays){if(!this.calculatedBoundsMap_.has(display.id)){const bounds=display.bounds;this.calculateBounds_(display.id,bounds.width,bounds.height)}}}updateDisplayBounds(id,newBounds){this.dragLayoutId_=id;const closestId=this.findClosest_(id,newBounds);assert(closestId);const closestBounds=this.getCalculatedDisplayBounds(closestId);const layoutPosition=this.getLayoutPositionForBounds_(newBounds,closestBounds);const snapPos=this.snapBounds_(newBounds,closestId,layoutPosition);newBounds.left=snapPos.x;newBounds.top=snapPos.y;const oldBounds=this.dragBounds_||this.getCalculatedDisplayBounds(id);const deltaPos={x:newBounds.left-oldBounds.left,y:newBounds.top-oldBounds.top};this.collideAndModifyDelta_(id,oldBounds,deltaPos);if(layoutPosition!==this.dragLayoutPosition_||closestId!==this.dragParentId_){this.dragLayoutPosition_=layoutPosition;this.dragParentId_=closestId;this.highlightEdge_(closestId,layoutPosition)}newBounds.left=oldBounds.left+deltaPos.x;newBounds.top=oldBounds.top+deltaPos.y;this.dragBounds_=newBounds;return newBounds}finishUpdateDisplayBounds(id){this.highlightEdge_("",undefined);if(id!==this.dragLayoutId_||!this.dragBounds_||!this.dragLayoutPosition_){return}const layout=this.displayLayoutMap_.get(id);let orphanIds;if(!layout||layout.parentId===""){this.setCalculatedDisplayBounds_(id,this.dragBounds_);orphanIds=this.findChildren_(id,true);this.reparentOrphan_(this.dragParentId_,orphanIds);orphanIds.splice(orphanIds.indexOf(this.dragParentId_),1)}else{orphanIds=this.findChildren_(id,false);let topLayout=this.displayLayoutMap_.get(this.dragParentId_);while(topLayout&&topLayout.parentId!==""){if(topLayout.parentId===id){topLayout.parentId=layout.parentId;break}topLayout=this.displayLayoutMap_.get(topLayout.parentId)}layout.parentId=this.dragParentId_;this.updateOffsetAndPosition_(this.dragBounds_,this.dragLayoutPosition_,layout)}this.updateOrphans_(orphanIds);getDisplayApi().setDisplayLayout(this.layouts).then((()=>{if(chrome.runtime.lastError){console.error("setDisplayLayout Error: "+chrome.runtime.lastError.message)}}))}getCalculatedDisplayBounds(displayId,notest){const bounds=this.calculatedBoundsMap_.get(displayId);assert(notest||bounds);return bounds}setCalculatedDisplayBounds_(displayId,bounds){assert(bounds);this.calculatedBoundsMap_.set(displayId,{...bounds})}updateOrphans_(orphanIds){const orphans=orphanIds.slice();for(let i=0;i<orphanIds.length;++i){const orphan=orphanIds[i];const newOrphans=this.findChildren_(orphan,true);for(let j=0;j<newOrphans.length;++j){const o=newOrphans[j];if(!orphans.includes(o)){orphans.push(o)}}}while(orphans.length){const orphanId=orphans.shift();this.reparentOrphan_(orphanId,orphans)}}reparentOrphan_(orphanId,otherOrphanIds){const layout=this.displayLayoutMap_.get(orphanId);assert(layout);if(orphanId===this.dragId&&layout.parentId!==""){this.setCalculatedDisplayBounds_(orphanId,this.dragBounds_);return}const bounds=this.getCalculatedDisplayBounds(orphanId);const newParentId=this.findClosest_(orphanId,bounds,otherOrphanIds);assert(newParentId!=="");layout.parentId=newParentId;const parentBounds=this.getCalculatedDisplayBounds(newParentId);const layoutPosition=this.getLayoutPositionForBounds_(bounds,parentBounds);const cornerBounds=this.getCornerBounds_(bounds,parentBounds);const desiredPos=this.snapBounds_(bounds,newParentId,layoutPosition);const deltaPos={x:desiredPos.x-cornerBounds.left,y:desiredPos.y-cornerBounds.top};this.collideAndModifyDelta_(orphanId,cornerBounds,deltaPos);const desiredBounds={left:cornerBounds.left+deltaPos.x,top:cornerBounds.top+deltaPos.y,width:bounds.width,height:bounds.height};this.updateOffsetAndPosition_(desiredBounds,layoutPosition,layout)}findChildren_(parentId,recurse){let children=[];this.displayLayoutMap_.forEach(((value,key)=>{const childId=key;if(childId!==parentId&&value.parentId===parentId){children.unshift(childId);if(recurse){children=children.concat(this.findChildren_(childId,true))}}}));return children}calculateBounds_(id,width,height){let left;let top;const layout=this.displayLayoutMap_.get(id);if(this.mirroring||!layout||!layout.parentId){left=-width/2;top=-height/2}else{if(!this.calculatedBoundsMap_.has(layout.parentId)){const pbounds=this.displayBoundsMap_.get(layout.parentId);this.calculateBounds_(layout.parentId,pbounds.width,pbounds.height)}const parentBounds=this.getCalculatedDisplayBounds(layout.parentId);left=parentBounds.left;top=parentBounds.top;switch(layout.position){case LayoutPosition.TOP:left+=layout.offset;top-=height;break;case LayoutPosition.RIGHT:left+=parentBounds.width;top+=layout.offset;break;case LayoutPosition.BOTTOM:left+=layout.offset;top+=parentBounds.height;break;case LayoutPosition.LEFT:left-=width;top+=layout.offset;break}}const result={left:left,top:top,width:width,height:height};this.setCalculatedDisplayBounds_(id,result)}findClosest_(displayId,bounds,ignoreIds){const x=bounds.left+bounds.width/2;const y=bounds.top+bounds.height/2;let closestId="";let closestDelta2=0;const keys=this.calculatedBoundsMap_.keys();for(let iter=keys.next();!iter.done;iter=keys.next()){const otherId=iter.value;if(otherId===displayId){continue}if(ignoreIds&&ignoreIds.includes(otherId)){continue}const{left:left,top:top,width:width,height:height}=this.getCalculatedDisplayBounds(otherId);if(x>=left&&x<left+width&&y>=top&&y<top+height){return otherId}let dx;let dy;if(x<left){dx=left-x}else if(x>left+width){dx=x-(left+width)}else{dx=0}if(y<top){dy=top-y}else if(y>top+height){dy=y-(top+height)}else{dy=0}const delta2=dx*dx+dy*dy;if(closestId===""||delta2<closestDelta2){closestId=otherId;closestDelta2=delta2}}return closestId}getLayoutPositionForBounds_(bounds,parentBounds){const x=bounds.left+bounds.width/2;const y=bounds.top+bounds.height/2;const{left:left,top:top,width:width,height:height}=parentBounds;const dx=x-(left+width/2);const dy=y-(top+height/2);const distx=Math.abs(dx)-width/2;const disty=Math.abs(dy)-height/2;if(distx>disty){if(dx<0){return LayoutPosition.LEFT}return LayoutPosition.RIGHT}else{if(dy<0){return LayoutPosition.TOP}return LayoutPosition.BOTTOM}}snapBounds_(bounds,parentId,layoutPosition){const parentBounds=this.getCalculatedDisplayBounds(parentId);let x;if(layoutPosition===LayoutPosition.LEFT){x=parentBounds.left-bounds.width}else if(layoutPosition===LayoutPosition.RIGHT){x=parentBounds.left+parentBounds.width}else{x=this.snapToX_(bounds,parentBounds)}let y;if(layoutPosition===LayoutPosition.TOP){y=parentBounds.top-bounds.height}else if(layoutPosition===LayoutPosition.BOTTOM){y=parentBounds.top+parentBounds.height}else{y=this.snapToY_(bounds,parentBounds)}return{x:x,y:y}}snapToX_(newBounds,parentBounds,snapDistance){return this.snapToEdge_(newBounds.left,newBounds.width,parentBounds.left,parentBounds.width,snapDistance)}snapToY_(newBounds,parentBounds,snapDistance){return this.snapToEdge_(newBounds.top,newBounds.height,parentBounds.top,parentBounds.height,snapDistance)}snapToEdge_(point,width,basePoint,baseWidth,snapDistance){const SNAP_DISTANCE_PX=16;const snapDist=snapDistance!==undefined?snapDistance:SNAP_DISTANCE_PX;const startDiff=Math.abs(point-basePoint);const endDiff=Math.abs(point+width-(basePoint+baseWidth));if((!snapDist||startDiff<snapDist)&&startDiff<endDiff){return basePoint}else if(!snapDist||endDiff<snapDist){return basePoint+baseWidth-width}return point}collideAndModifyDelta_(id,bounds,deltaPos){const keys=this.calculatedBoundsMap_.keys();const others=new Set(keys);others.delete(id);let checkCollisions=true;while(checkCollisions){checkCollisions=false;const othersValues=others.values();for(let iter=othersValues.next();!iter.done;iter=othersValues.next()){const otherId=iter.value;const otherBounds=this.getCalculatedDisplayBounds(otherId);if(this.collideWithBoundsAndModifyDelta_(bounds,otherBounds,deltaPos)){if(deltaPos.x===0&&deltaPos.y===0){return}others.delete(otherId);checkCollisions=true;break}}}}collideWithBoundsAndModifyDelta_(bounds,otherBounds,deltaPos){const newX=bounds.left+deltaPos.x;const newY=bounds.top+deltaPos.y;if(newX+bounds.width<=otherBounds.left||newX>=otherBounds.left+otherBounds.width||newY+bounds.height<=otherBounds.top||newY>=otherBounds.top+otherBounds.height){return false}if(Math.abs(deltaPos.x)>Math.abs(deltaPos.y)){deltaPos.y=0;let snapDeltaX;if(deltaPos.x>0){snapDeltaX=Math.max(0,otherBounds.left-bounds.width-bounds.left)}else{snapDeltaX=Math.min(0,otherBounds.left+otherBounds.width-bounds.left)}deltaPos.x=snapDeltaX}else{deltaPos.x=0;let snapDeltaY;if(deltaPos.y>0){snapDeltaY=Math.min(0,otherBounds.top-bounds.height-bounds.top)}else if(deltaPos.y<0){snapDeltaY=Math.max(0,otherBounds.top+otherBounds.height-bounds.top)}else{snapDeltaY=0}deltaPos.y=snapDeltaY}return true}updateOffsetAndPosition_(bounds,position,layout){layout.position=position;if(!layout.parentId){layout.offset=0;return}const parentBounds=this.getCalculatedDisplayBounds(layout.parentId);let offset;let minOffset;let maxOffset;if(position===LayoutPosition.LEFT||position===LayoutPosition.RIGHT){offset=bounds.top-parentBounds.top;minOffset=-bounds.height;maxOffset=parentBounds.height}else{offset=bounds.left-parentBounds.left;minOffset=-bounds.width;maxOffset=parentBounds.width}const MIN_OFFSET_OVERLAP=50;minOffset+=MIN_OFFSET_OVERLAP;maxOffset-=MIN_OFFSET_OVERLAP;layout.offset=Math.max(minOffset,Math.min(offset,maxOffset));this.calculateBounds_(layout.id,bounds.width,bounds.height)}getCornerBounds_(bounds,parentBounds){let x;if(bounds.left>parentBounds.left+parentBounds.width/2){x=parentBounds.left+parentBounds.width}else{x=parentBounds.left-bounds.width}let y;if(bounds.top>parentBounds.top+parentBounds.height/2){y=parentBounds.top+parentBounds.height}else{y=parentBounds.top-bounds.height}return{left:x,top:y,width:bounds.width,height:bounds.height}}highlightEdge_(id,layoutPosition){for(let i=0;i<this.layouts.length;++i){const layout=this.layouts[i];const highlight=layout.id===id||layout.parentId===id?layoutPosition:undefined;const div=id?this.shadowRoot.getElementById(`_${id}`):this.shadowRoot.getElementById(`_${layout.id}`);assert(div);div.classList.toggle("highlight-right",highlight===LayoutPosition.RIGHT);div.classList.toggle("highlight-left",highlight===LayoutPosition.LEFT);div.classList.toggle("highlight-top",highlight===LayoutPosition.TOP);div.classList.toggle("highlight-bottom",highlight===LayoutPosition.BOTTOM)}}}return LayoutMixinInternal}));
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const MIN_VISUAL_SCALE=.01;const DisplayLayoutElementBase=mixinBehaviors([IronResizableBehavior],LayoutMixin(PolymerElement));class DisplayLayoutElement extends DisplayLayoutElementBase{static get is(){return"display-layout"}static get template(){return getTemplate$1s()}static get properties(){return{displays:Array,selectedDisplay:Object,visualScale:{type:Number,value:1},mirroringDestinationIds_:Array}}constructor(){super();this.visualOffset_={left:0,top:0};this.lastDragCoordinates_=null;this.browserProxy_=DevicePageBrowserProxyImpl.getInstance();this.allowDisplayAlignmentApi_=loadTimeData.getBoolean("allowDisplayAlignmentApi");this.invalidDisplayId_=loadTimeData.getString("invalidDisplayId");this.hasDragStarted_=false;this.mirroringDestinationIds_=[]}disconnectedCallback(){super.disconnectedCallback();this.initializeDrag(false)}updateDisplays(displays,layouts,mirroringDestinationIds){this.displays=displays;this.layouts=layouts;this.mirroringDestinationIds_=mirroringDestinationIds;this.initializeDisplayLayout(displays,layouts);const self=this;const retry=100;function tryCalcVisualScale(){if(!self.calculateVisualScale_()){setTimeout(tryCalcVisualScale,retry)}}tryCalcVisualScale();this.keyboardDragEnabled=true;this.initializeDrag(!this.mirroring,this.$.displayArea,((id,amount)=>this.onDrag_(id,amount)))}calculateVisualScale_(){const displayAreaDiv=this.$.displayArea;if(!displayAreaDiv||!displayAreaDiv.offsetWidth||!this.displays||!this.displays.length){return false}let display=this.displays[0];let bounds=this.getCalculatedDisplayBounds(display.id);const boundsBoundingBox={left:bounds.left,right:bounds.left+bounds.width,top:bounds.top,bottom:bounds.top+bounds.height};let maxWidth=bounds.width;let maxHeight=bounds.height;for(let i=1;i<this.displays.length;++i){display=this.displays[i];bounds=this.getCalculatedDisplayBounds(display.id);boundsBoundingBox.left=Math.min(boundsBoundingBox.left,bounds.left);boundsBoundingBox.right=Math.max(boundsBoundingBox.right,bounds.left+bounds.width);boundsBoundingBox.top=Math.min(boundsBoundingBox.top,bounds.top);boundsBoundingBox.bottom=Math.max(boundsBoundingBox.bottom,bounds.top+bounds.height);maxWidth=Math.max(maxWidth,bounds.width);maxHeight=Math.max(maxHeight,bounds.height)}const boundsWidth=boundsBoundingBox.right-boundsBoundingBox.left;const boundsHeight=boundsBoundingBox.bottom-boundsBoundingBox.top;const horizontalScale=displayAreaDiv.offsetWidth/(boundsWidth+maxWidth*2);const verticalScale=displayAreaDiv.offsetHeight/(boundsHeight+maxHeight*2);const scale=Math.min(horizontalScale,verticalScale);this.visualOffset_.left=(displayAreaDiv.offsetWidth-boundsWidth*scale)/2-boundsBoundingBox.left*scale;this.visualOffset_.top=(displayAreaDiv.offsetHeight-boundsHeight*scale)/2-boundsBoundingBox.top*scale;this.visualScale=Math.max(MIN_VISUAL_SCALE,scale);return true}getDivStyle_(id,_displayBounds,_visualScale,offset){const BORDER=1;const MARGIN=4;const OFFSET=offset||0;const PADDING=3;const bounds=this.getCalculatedDisplayBounds(id,true);if(!bounds){return""}const height=Math.round(bounds.height*this.visualScale)-BORDER*2-MARGIN*2-PADDING*2;const width=Math.round(bounds.width*this.visualScale)-BORDER*2-MARGIN*2-PADDING*2;const left=OFFSET+Math.round(this.visualOffset_.left+bounds.left*this.visualScale);const top=OFFSET+Math.round(this.visualOffset_.top+bounds.top*this.visualScale);return"height: "+height+"px; width: "+width+"px;"+" left: "+left+"px; top: "+top+"px"}getMirrorDivStyle_(mirroringDestinationIndex,mirroringDestinationDisplayNum,displays,visualScale){return this.getDivStyle_(displays[0].id,displays[0].bounds,visualScale,(mirroringDestinationDisplayNum-mirroringDestinationIndex)*-4)}isSelected_(display,selectedDisplay){return display.id===selectedDisplay.id}dispatchSelectDisplayEvent_(displayId){const selectDisplayEvent=new CustomEvent("select-display",{composed:true,detail:displayId});this.dispatchEvent(selectDisplayEvent)}onSelectDisplayClick_(e){this.dispatchSelectDisplayEvent_(e.model.item.id);e.target.focus()}onFocus_(e){this.dispatchSelectDisplayEvent_(e.model.item.id);e.target.focus()}onDrag_(id,amount){id=id.substr(1);let newBounds;if(!amount){this.finishUpdateDisplayBounds(id);newBounds=this.getCalculatedDisplayBounds(id);this.lastDragCoordinates_=null;this.browserProxy_.highlightDisplay(this.invalidDisplayId_)}else{this.browserProxy_.highlightDisplay(id);if(id!==this.selectedDisplay.id){this.dispatchSelectDisplayEvent_(id)}const calculatedBounds=this.getCalculatedDisplayBounds(id);newBounds={...calculatedBounds};newBounds.left+=Math.round(amount.x/this.visualScale);newBounds.top+=Math.round(amount.y/this.visualScale);if(this.displays.length>=2){newBounds=this.updateDisplayBounds(id,newBounds)}if(this.allowDisplayAlignmentApi_){if(!this.lastDragCoordinates_){this.hasDragStarted_=true;this.lastDragCoordinates_={x:calculatedBounds.left,y:calculatedBounds.top}}const deltaX=newBounds.left-this.lastDragCoordinates_.x;const deltaY=newBounds.top-this.lastDragCoordinates_.y;this.lastDragCoordinates_.x=newBounds.left;this.lastDragCoordinates_.y=newBounds.top;if(deltaX!==0||deltaY!==0){this.browserProxy_.dragDisplayDelta(id,Math.round(deltaX),Math.round(deltaY))}}}const left=this.visualOffset_.left+Math.round(newBounds.left*this.visualScale);const top=this.visualOffset_.top+Math.round(newBounds.top*this.visualScale);const div=castExists(this.shadowRoot.getElementById(`_${id}`));div.style.left=""+left+"px";div.style.top=""+top+"px";div.focus()}}customElements.define(DisplayLayoutElement.is,DisplayLayoutElement);function getTemplate$1r(){return html`<!--_html_template_start_--><style include="settings-shared iron-flex iron-flex-alignment">.subtitle{color:var(--cros-text-color-secondary);margin-top:10px}.instructions{color:var(--cros-text-color-secondary);margin-top:4px}.details{margin:40px}.label{margin-top:15px}iron-icon{--iron-icon-fill-color:var(--cros-icon-color-primary);--iron-icon-height:18px;--iron-icon-width:18px;background:var(--cros-bg-color-dropped-elevation-2);border-radius:2px;margin:5px;padding:4px}#move{align-items:center;display:flex;flex-direction:row}#move>div{color:var(--cros-text-color-secondary);flex:0 0 auto}#move>div:not(:first-child){margin-inline-start:8px}#move>div:not(:last-child){margin-inline-end:8px}#move>div.shift{background:var(--cros-bg-color-dropped-elevation-2);border-radius:2px;color:var(--cros-text-color-primary);font-size:100%;padding:7px 8px}</style>
<cr-dialog id="dialog" on-close="close" close-text="$i18n{close}">
  <div slot="title">$i18n{displayOverscanPageTitle}</div>
  <div slot="body">
    <div class="subtitle">$i18n{displayOverscanSubtitle}</div>
    <div class="instructions" hidden="[[isRevampWayfindingEnabled_]]">
      $i18n{displayOverscanInstructions}
    </div>
    <div class="details layout horizontal around-justified self-stretch">
      <div class="layout vertical center">
        <div class="layout horizontal">
          <iron-icon icon="cr:expand-less"></iron-icon>
        </div>
        <div class="layout horizontal">
          <iron-icon icon="os-settings:chevron-left"></iron-icon>
          <iron-icon icon="cr:expand-more"></iron-icon>
          <iron-icon icon="cr:chevron-right"></iron-icon>
        </div>
        <div class="label">$i18n{displayOverscanResize}</div>
      </div>
      <div class="layout vertical center">
        <div class="layout vertical center-justified flex">
          <div id="move" class="layout horizontal">
            
            
            <div>(</div><div>+</div><div class="shift">shift</div><div>)</div>
          </div>
        </div>
        <div class="label">$i18n{displayOverscanPosition}</div>
      </div>
    </div>
  </div>
  <div slot="button-container">
    <cr-button id="reset" class="cancel-button" on-click="onResetClick_">
      $i18n{displayOverscanReset}
    </cr-button>
    <cr-button class="action-button" on-click="onSaveClick_">
      $i18n{ok}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SettingsDisplayOverscanDialogElement extends PolymerElement{static get is(){return"settings-display-overscan-dialog"}static get template(){return getTemplate$1r()}static get properties(){return{displayId:{type:String,notify:true,observer:"displayIdChanged_"},committed_:Boolean,isRevampWayfindingEnabled_:{type:Boolean,value:()=>isRevampWayfindingEnabled()}}}constructor(){super();this.keyHandler_=this.handleKeyEvent_.bind(this)}open(){window.addEventListener("keydown",this.keyHandler_);this.committed_=false;this.$.dialog.showModal();this.shadowRoot.getElementById("reset").blur()}close(){window.removeEventListener("keydown",this.keyHandler_);this.displayId="";if(this.$.dialog.open){this.$.dialog.close()}}displayIdChanged_(newValue,oldValue){if(oldValue&&!this.committed_){getDisplayApi().overscanCalibrationReset(oldValue);getDisplayApi().overscanCalibrationComplete(oldValue)}if(!newValue){return}this.committed_=false;getDisplayApi().overscanCalibrationStart(newValue)}onResetClick_(){getDisplayApi().overscanCalibrationReset(this.displayId)}onSaveClick_(){getDisplayApi().overscanCalibrationComplete(this.displayId);this.committed_=true;this.close()}handleKeyEvent_(event){if(event.altKey||event.ctrlKey||event.metaKey){return}switch(event.keyCode){case 37:if(event.shiftKey){this.move_(-1,0)}else{this.resize_(1,0)}break;case 38:if(event.shiftKey){this.move_(0,-1)}else{this.resize_(0,-1)}break;case 39:if(event.shiftKey){this.move_(1,0)}else{this.resize_(-1,0)}break;case 40:if(event.shiftKey){this.move_(0,1)}else{this.resize_(0,1)}break;default:return}event.preventDefault()}move_(x,y){const delta={left:x,top:y,right:x?-x:0,bottom:y?-y:0};getDisplayApi().overscanCalibrationAdjust(this.displayId,delta)}resize_(x,y){const delta={left:x,top:y,right:x,bottom:y};getDisplayApi().overscanCalibrationAdjust(this.displayId,delta)}}customElements.define(SettingsDisplayOverscanDialogElement.is,SettingsDisplayOverscanDialogElement);function getTemplate$1q(){return html`<!--_html_template_start_--><style>:host{cursor:default;font-weight:500;text-align:center;user-select:none}#sliderContainer{display:inline-block;position:relative;user-select:none;width:100%}#sliderBar{background-color:rgba(var(--cros-button-background-color-primary-rgb),.24);background-size:100%;display:inline-block;height:2px;position:relative;width:inherit}.knob{height:32px;margin-inline-start:-16px;margin-top:-15px;position:absolute;width:32px;z-index:3}.knob:focus{outline:0}.knob-inner{background:var(--cros-button-background-color-primary);border-radius:6px;height:10px;left:0;margin:11px;position:absolute;width:10px;z-index:3}.knob-inner:focus{outline:0}#progressContainer{height:100%;overflow:hidden;position:absolute;width:100%}.progress{background:var(--cros-button-background-color-primary);height:100%;position:absolute;z-index:1}#labelContainer{height:1.75em}.label{background:var(--cros-button-background-color-primary);border-radius:14px;color:var(--cros-bg-color);font-size:12px;left:0;line-height:1.5em;margin-inline-start:-2.5em;position:absolute;text-align:center;transition:margin-top .2s cubic-bezier(0,0,.2,1);vertical-align:middle;width:5em}.end-label-overlap{margin-top:-2em}#markersContainer{display:flex;height:100%;left:0;position:absolute;width:100%}.active-marker,.inactive-marker{border-radius:50%;display:block;height:100%;margin-inline-start:-1px;padding:0;position:absolute;width:2PX;z-index:2}.active-marker{background-color:rgba(var(--cros-bg-color-rgb),.6)}.inactive-marker{--background-color-opacity:0.6;background-color:rgba(var(--cros-button-background-color-primary-rgb),var(--background-color-opacity))}@media(prefers-color-scheme:dark){.inactive-marker{--background-color-opacity:1}}#legendContainer{height:10px;margin-bottom:40px;position:relative;width:inherit}#legendContainer>div{color:var(--cros-text-color-secondary);font-size:12px;margin-inline-start:-2.5em;position:absolute;text-align:center;top:5px;width:5em}paper-ripple{color:var(--cros-button-background-color-primary)}</style>
<div id="sliderContainer">
  <div id="labelContainer">
    <div id="startLabel" class="label" aria-hidden="true">
      [[getTimeString_(prefStartTime.value, shouldUse24Hours_, prefs.*)]]
    </div>
    <div id="endLabel" class="label" aria-hidden="true">
      [[getTimeString_(prefEndTime.value, shouldUse24Hours_, prefs.*)]]
    </div>
  </div>
  <div id="sliderBar">
    <div id="progressContainer">
      <div id="endProgress" class="progress"></div>
      <div id="startProgress" class="progress"></div>
    </div>
    <div id="markersContainer">
    </div>
    <div id="startKnob" class="knob" tabindex="1" on-down="startDrag_" on-up="endDrag_" on-track="continueDrag_" aria-label="[[getAriaLabelStartTime_(
            prefStartTime, shouldUse24Hours_, prefs.*)]]">
      <div class="knob-inner" tabindex="-1"></div>
    </div>
    <div id="endKnob" class="knob" tabindex="2" on-down="startDrag_" on-up="endDrag_" on-track="continueDrag_" aria-label="[[getAriaLabelEndTime_(
            prefEndTime, shouldUse24Hours_, prefs.*)]]">
      <div class="knob-inner" tabindex="-1"></div>
    </div>
  </div>
  <div id="legendContainer">
    <div style$="[[getLegendStyle_(0, isRTL_)]]">
      [[getLocaleTimeString_(18, 0, shouldUse24Hours_)]]
    </div>
    <div style$="[[getLegendStyle_(25, isRTL_)]]">
      [[getLocaleTimeString_(0, 0, shouldUse24Hours_)]]
    </div>
    <div style$="[[getLegendStyle_(50, isRTL_)]]">
      [[getLocaleTimeString_(6, 0, shouldUse24Hours_)]]
    </div>
    <div style$="[[getLegendStyle_(75, isRTL_)]]">
      [[getLocaleTimeString_(12, 0, shouldUse24Hours_)]]
    </div>
    <div style$="[[getLegendStyle_(100, isRTL_)]]">
      [[getLocaleTimeString_(18, 0, shouldUse24Hours_)]]
    </div>
  </div>
  <div id="dummyRippleContainer" hidden></div>
</div>
<!--_html_template_end_-->`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const HOURS_PER_DAY=24;const MIN_KNOBS_DISTANCE_MINUTES=60;const OFFSET_MINUTES_6PM=18*60;const TOTAL_MINUTES_PER_DAY=24*60;const DEFAULT_CUSTOM_START_TIME=18*60;const DEFAULT_CUSTOM_END_TIME=6*60;function modulo(x,y){return(x%y+y)%y}const SettingsSchedulerSliderElementBase=mixinBehaviors([IronResizableBehavior],PaperRippleMixin(PrefsMixin(I18nMixin(PolymerElement))));class SettingsSchedulerSliderElement extends SettingsSchedulerSliderElementBase{static get is(){return"settings-scheduler-slider"}static get template(){return getTemplate$1q()}static get properties(){return{prefStartTime:{type:Object,notify:true,value(){return{key:"ash.fake_feature.custom_start_time",type:chrome.settingsPrivate.PrefType.NUMBER,value:DEFAULT_CUSTOM_START_TIME}}},prefEndTime:{type:Object,notify:true,value(){return{key:"ash.fake_feature.custom_end_time",type:chrome.settingsPrivate.PrefType.NUMBER,value:DEFAULT_CUSTOM_END_TIME}}},isReady_:Boolean,isRTL_:Boolean,shouldUse24Hours_:Boolean}}static get observers(){return["updateKnobs_(prefs.*, isRTL_, isReady_)","hourFormatChanged_(prefs.settings.clock.use_24hour_clock.*)","updateMarkers_(prefs.*, isRTL_, isReady_)"]}constructor(){super();this.dragObject_=null}ready(){super.ready();this.addEventListener("iron-resize",this.onResize_);this.addEventListener("focus",this.onFocus_);this.addEventListener("blur",this.onBlur_);this.addEventListener("keydown",this.onKeyDown_)}connectedCallback(){super.connectedCallback();this.isRTL_=window.getComputedStyle(this).direction==="rtl";this.$.sliderContainer.addEventListener("contextmenu",(e=>{e.preventDefault();return false}));setTimeout((()=>{this.isReady_=true}))}prefsAvailable_(){return[this.prefStartTime,this.prefEndTime].every((pref=>pref!==undefined))}updateMarkers_(){if(!this.isReady_||!this.prefsAvailable_()){return}const startHour=this.prefStartTime.value/60;const endHour=this.prefEndTime.value/60;const markersContainer=this.$.markersContainer;markersContainer.innerHTML=window.trustedTypes.emptyHTML;for(let i=0;i<=HOURS_PER_DAY;++i){const marker=document.createElement("div");const hourIndex=this.isRTL_?24-i:i;const hour=(hourIndex+18)%24;if(startHour<endHour){marker.className=hour>startHour&&hour<endHour?"active-marker":"inactive-marker"}else{marker.className=hour>endHour&&hour<startHour?"inactive-marker":"active-marker"}markersContainer.appendChild(marker);marker.style.left=i*100/HOURS_PER_DAY+"%"}}isStartKnobFocused_(){return this.shadowRoot.activeElement===this.$.startKnob}isEndKnobFocused_(){return this.shadowRoot.activeElement===this.$.endKnob}isEitherKnobFocused_(){return this.isStartKnobFocused_()||this.isEndKnobFocused_()}onResize_(){this.updateKnobs_()}hourFormatChanged_(){this.shouldUse24Hours_=this.getPref("settings.clock.use_24hour_clock").value}getLegendStyle_(percent,isRTL){const percentage=isRTL?100-percent:percent;return`left: ${percentage}%`}getAriaLabelStartTime_(){return this.i18n("startTime",this.getTimeString_(this.prefStartTime.value,this.shouldUse24Hours_))}getAriaLabelEndTime_(){return this.i18n("endTime",this.getTimeString_(this.prefEndTime.value,this.shouldUse24Hours_))}blurAnyFocusedKnob_(){if(this.isEitherKnobFocused_()){this.shadowRoot.activeElement.blur()}}startDrag_(event){event.preventDefault();if(event.target===this.$.startKnob||event.target===this.$.startKnob.firstElementChild){this.dragObject_=this.$.startKnob;this.valueAtDragStart_=this.prefStartTime.value}else if(event.target===this.$.endKnob||event.target===this.$.endKnob.firstElementChild){this.dragObject_=this.$.endKnob;this.valueAtDragStart_=this.prefEndTime.value}else{return}this.handleKnobEvent_(event,this.dragObject_)}continueDrag_(event){if(!this.dragObject_){return}event.stopPropagation();switch(event.detail.state){case"start":this.startDrag_(event);break;case"track":this.doKnobTracking_(event);break;case"end":this.endDrag_(event);break}}getDeltaMinutes_(deltaX){return(this.isRTL_?-1:1)*Math.floor(TOTAL_MINUTES_PER_DAY*deltaX/this.$.sliderBar.offsetWidth)}doKnobTracking_(event){const lastDeltaMinutes=this.getDeltaMinutes_(event.detail.ddx);if(Math.abs(lastDeltaMinutes)<1){return}this.updatePref_(this.valueAtDragStart_+this.getDeltaMinutes_(event.detail.dx),true)}endDrag_(event){event.preventDefault();this.dragObject_=null;this.removeRipple_()}getKnobRatio_(knob){return parseFloat(knob.style.left)/this.$.sliderBar.offsetWidth}getLocaleTimeString_(hour,minutes,shouldUse24Hours){const d=new Date;d.setHours(hour);d.setMinutes(minutes);d.setSeconds(0);d.setMilliseconds(0);return d.toLocaleTimeString(navigator.language,{hour:"numeric",minute:"numeric",hour12:!shouldUse24Hours})}getTimeString_(offsetMinutes,shouldUse24Hours){const hour=Math.floor(offsetMinutes/60);const minute=Math.floor(offsetMinutes%60);return this.getLocaleTimeString_(hour,minute,shouldUse24Hours)}updateKnobs_(){if(!this.isReady_||!this.prefsAvailable_()||this.$.sliderBar.offsetWidth===0){return}const startOffsetMinutes=this.prefStartTime.value;this.updateKnobLeft_(this.$.startKnob,startOffsetMinutes);const endOffsetMinutes=this.prefEndTime.value;this.updateKnobLeft_(this.$.endKnob,endOffsetMinutes);this.refresh_()}updateKnobLeft_(knob,offsetMinutes){const offsetAfter6pm=(offsetMinutes+TOTAL_MINUTES_PER_DAY-OFFSET_MINUTES_6PM)%TOTAL_MINUTES_PER_DAY;let ratio=offsetAfter6pm/TOTAL_MINUTES_PER_DAY;if(ratio===0){const currentKnobRatio=this.getKnobRatio_(knob);ratio=currentKnobRatio>.5?1:0}else{ratio=this.isRTL_?1-ratio:ratio}knob.style.left=ratio*this.$.sliderBar.offsetWidth+"px"}refresh_(){this.$.startLabel.style.left=this.$.startKnob.style.left;this.$.endLabel.style.left=this.$.endKnob.style.left;const rtl=this.isRTL_;const endKnob=rtl?this.$.startKnob:this.$.endKnob;const startKnob=rtl?this.$.endKnob:this.$.startKnob;const startProgress=rtl?this.$.endProgress:this.$.startProgress;const endProgress=rtl?this.$.startProgress:this.$.endProgress;const endProgressLeft=startKnob.offsetLeft>=endKnob.offsetLeft?0:parseFloat(startKnob.style.left);endProgress.style.left=`${endProgressLeft}px`;endProgress.style.width=`${parseFloat(endKnob.style.left)-endProgressLeft}px`;const startProgressRight=endKnob.offsetLeft<startKnob.offsetLeft?this.$.sliderBar.offsetWidth:parseFloat(endKnob.style.left);startProgress.style.left=startKnob.style.left;startProgress.style.width=`${startProgressRight-parseFloat(startKnob.style.left)}px`;this.fixLabelsOverlapIfAny_()}fixLabelsOverlapIfAny_(){const startLabel=this.$.startLabel;const endLabel=this.$.endLabel;const distance=Math.abs(parseFloat(startLabel.style.left)-parseFloat(endLabel.style.left));if(distance<=1.25*startLabel.offsetWidth){endLabel.classList.add("end-label-overlap")}else{endLabel.classList.remove("end-label-overlap")}}getOtherKnobPrefValue_(){if(this.isStartKnobFocused_()){return this.prefEndTime.value}return this.prefStartTime.value}updatePref_(updatedValue,fromUserGesture){const otherValue=this.getOtherKnobPrefValue_();const totalMinutes=TOTAL_MINUTES_PER_DAY;const minDistance=MIN_KNOBS_DISTANCE_MINUTES;if(modulo(otherValue-updatedValue,totalMinutes)<minDistance){updatedValue=otherValue+(fromUserGesture?-1:1)*minDistance}else if(modulo(updatedValue-otherValue,totalMinutes)<minDistance){updatedValue=otherValue+(fromUserGesture?1:-1)*minDistance}if(this.isStartKnobFocused_()){this.set("prefStartTime.value",modulo(updatedValue,TOTAL_MINUTES_PER_DAY))}else if(this.isEndKnobFocused_()){this.set("prefEndTime.value",modulo(updatedValue,TOTAL_MINUTES_PER_DAY))}}getPrefValue_(){if(this.isStartKnobFocused_()){return this.prefStartTime.value}else if(this.isEndKnobFocused_()){return this.prefEndTime.value}else{return null}}_createRipple(){if(this.isEitherKnobFocused_()){this._rippleContainer=this.shadowRoot.activeElement}else{this._rippleContainer=this.$.dummyRippleContainer}const ripple=super._createRipple();ripple.id="ink";ripple.setAttribute("recenters","");ripple.classList.add("circle","toggle-ink");return ripple}onFocus_(event){this.handleKnobEvent_(event)}handleKnobEvent_(event,overrideElement){const knob=overrideElement||event.composedPath().find((el=>el.classList?.contains("knob")));if(!knob){event.preventDefault();return}if(this._rippleContainer!==knob){this.removeRipple_();knob.focus()}this.ensureRipple();if(this.hasRipple()){this._ripple.style.display="";this._ripple.holdDown=true}}onBlur_(){this.removeRipple_()}removeRipple_(){if(this.hasRipple()){this._ripple.remove();this._ripple=null}}onKeyDown_(event){if(event.key==="Tab"){if(event.shiftKey&&this.isEndKnobFocused_()){event.preventDefault();this.handleKnobEvent_(event,this.$.startKnob);return}if(!event.shiftKey&&this.isStartKnobFocused_()){event.preventDefault();this.handleKnobEvent_(event,this.$.endKnob)}return}if(event.metaKey||event.shiftKey||event.altKey||event.ctrlKey){return}const deltaKeyMap={ArrowDown:-1,ArrowLeft:this.isRTL_?1:-1,ArrowRight:this.isRTL_?-1:1,ArrowUp:1,PageDown:-15,PageUp:15};if(event.key in deltaKeyMap){this.handleKnobEvent_(event);event.preventDefault();const value=this.getPrefValue_();if(value===null){return}const delta=deltaKeyMap[event.key];this.updatePref_(value+delta,false)}}}customElements.define(SettingsSchedulerSliderElement.is,SettingsSchedulerSliderElement);
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const DisplaySettingsTypeSpec={$:mojo.internal.Enum()};var DisplaySettingsType;(function(DisplaySettingsType){DisplaySettingsType[DisplaySettingsType["MIN_VALUE"]=0]="MIN_VALUE";DisplaySettingsType[DisplaySettingsType["MAX_VALUE"]=10]="MAX_VALUE";DisplaySettingsType[DisplaySettingsType["kResolution"]=0]="kResolution";DisplaySettingsType[DisplaySettingsType["kRefreshRate"]=1]="kRefreshRate";DisplaySettingsType[DisplaySettingsType["kScaling"]=2]="kScaling";DisplaySettingsType[DisplaySettingsType["kOrientation"]=3]="kOrientation";DisplaySettingsType[DisplaySettingsType["kOverscan"]=4]="kOverscan";DisplaySettingsType[DisplaySettingsType["kNightLight"]=5]="kNightLight";DisplaySettingsType[DisplaySettingsType["kNightLightSchedule"]=6]="kNightLightSchedule";DisplaySettingsType[DisplaySettingsType["kDisplayPage"]=7]="kDisplayPage";DisplaySettingsType[DisplaySettingsType["kMirrorMode"]=8]="kMirrorMode";DisplaySettingsType[DisplaySettingsType["kUnifiedMode"]=9]="kUnifiedMode";DisplaySettingsType[DisplaySettingsType["kPrimaryDisplay"]=10]="kPrimaryDisplay"})(DisplaySettingsType||(DisplaySettingsType={}));const DisplaySettingsNightLightScheduleOptionSpec={$:mojo.internal.Enum()};var DisplaySettingsNightLightScheduleOption;(function(DisplaySettingsNightLightScheduleOption){DisplaySettingsNightLightScheduleOption[DisplaySettingsNightLightScheduleOption["MIN_VALUE"]=0]="MIN_VALUE";DisplaySettingsNightLightScheduleOption[DisplaySettingsNightLightScheduleOption["MAX_VALUE"]=2]="MAX_VALUE";DisplaySettingsNightLightScheduleOption[DisplaySettingsNightLightScheduleOption["kNever"]=0]="kNever";DisplaySettingsNightLightScheduleOption[DisplaySettingsNightLightScheduleOption["kSunsetToSunrise"]=1]="kSunsetToSunrise";DisplaySettingsNightLightScheduleOption[DisplaySettingsNightLightScheduleOption["kCustom"]=2]="kCustom"})(DisplaySettingsNightLightScheduleOption||(DisplaySettingsNightLightScheduleOption={}));const DisplaySettingsOrientationOptionSpec={$:mojo.internal.Enum()};var DisplaySettingsOrientationOption;(function(DisplaySettingsOrientationOption){DisplaySettingsOrientationOption[DisplaySettingsOrientationOption["MIN_VALUE"]=0]="MIN_VALUE";DisplaySettingsOrientationOption[DisplaySettingsOrientationOption["MAX_VALUE"]=4]="MAX_VALUE";DisplaySettingsOrientationOption[DisplaySettingsOrientationOption["kAuto"]=0]="kAuto";DisplaySettingsOrientationOption[DisplaySettingsOrientationOption["k0Degree"]=1]="k0Degree";DisplaySettingsOrientationOption[DisplaySettingsOrientationOption["k90Degree"]=2]="k90Degree";DisplaySettingsOrientationOption[DisplaySettingsOrientationOption["k180Degree"]=3]="k180Degree";DisplaySettingsOrientationOption[DisplaySettingsOrientationOption["k270Degree"]=4]="k270Degree"})(DisplaySettingsOrientationOption||(DisplaySettingsOrientationOption={}));class TabletModeObserverPendingReceiver{constructor(handle){this.handle=mojo.internal.interfaceSupport.getEndpointForReceiver(handle)}bindInBrowser(scope="context"){mojo.internal.interfaceSupport.bind(this.handle,"ash.settings.mojom.TabletModeObserver",scope)}}class TabletModeObserverRemote{constructor(handle){this.proxy=new mojo.internal.interfaceSupport.InterfaceRemoteBase(TabletModeObserverPendingReceiver,handle);this.$=new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);this.onConnectionError=this.proxy.getConnectionErrorEventRouter()}onTabletModeChanged(isTabletMode){this.proxy.sendMessage(0,TabletModeObserver_OnTabletModeChanged_ParamsSpec.$,null,[isTabletMode])}}class TabletModeObserverReceiver{constructor(impl){this.helper_internal_=new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(TabletModeObserverRemote);this.$=new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);this.helper_internal_.registerHandler(0,TabletModeObserver_OnTabletModeChanged_ParamsSpec.$,null,impl.onTabletModeChanged.bind(impl));this.onConnectionError=this.helper_internal_.getConnectionErrorEventRouter()}}class TabletModeObserver{static get $interfaceName(){return"ash.settings.mojom.TabletModeObserver"}static getRemote(){let remote=new TabletModeObserverRemote;remote.$.bindNewPipeAndPassReceiver().bindInBrowser();return remote}}class TabletModeObserverCallbackRouter{constructor(){this.helper_internal_=new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(TabletModeObserverRemote);this.$=new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);this.router_=new mojo.internal.interfaceSupport.CallbackRouter;this.onTabletModeChanged=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(0,TabletModeObserver_OnTabletModeChanged_ParamsSpec.$,null,this.onTabletModeChanged.createReceiverHandler(false));this.onConnectionError=this.helper_internal_.getConnectionErrorEventRouter()}removeListener(id){return this.router_.removeListener(id)}}class DisplayConfigurationObserverPendingReceiver{constructor(handle){this.handle=mojo.internal.interfaceSupport.getEndpointForReceiver(handle)}bindInBrowser(scope="context"){mojo.internal.interfaceSupport.bind(this.handle,"ash.settings.mojom.DisplayConfigurationObserver",scope)}}class DisplayConfigurationObserverRemote{constructor(handle){this.proxy=new mojo.internal.interfaceSupport.InterfaceRemoteBase(DisplayConfigurationObserverPendingReceiver,handle);this.$=new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);this.onConnectionError=this.proxy.getConnectionErrorEventRouter()}onDisplayConfigurationChanged(){this.proxy.sendMessage(0,DisplayConfigurationObserver_OnDisplayConfigurationChanged_ParamsSpec.$,null,[])}}class DisplayConfigurationObserverReceiver{constructor(impl){this.helper_internal_=new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(DisplayConfigurationObserverRemote);this.$=new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);this.helper_internal_.registerHandler(0,DisplayConfigurationObserver_OnDisplayConfigurationChanged_ParamsSpec.$,null,impl.onDisplayConfigurationChanged.bind(impl));this.onConnectionError=this.helper_internal_.getConnectionErrorEventRouter()}}class DisplayConfigurationObserver{static get $interfaceName(){return"ash.settings.mojom.DisplayConfigurationObserver"}static getRemote(){let remote=new DisplayConfigurationObserverRemote;remote.$.bindNewPipeAndPassReceiver().bindInBrowser();return remote}}class DisplayConfigurationObserverCallbackRouter{constructor(){this.helper_internal_=new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(DisplayConfigurationObserverRemote);this.$=new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);this.router_=new mojo.internal.interfaceSupport.CallbackRouter;this.onDisplayConfigurationChanged=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(0,DisplayConfigurationObserver_OnDisplayConfigurationChanged_ParamsSpec.$,null,this.onDisplayConfigurationChanged.createReceiverHandler(false));this.onConnectionError=this.helper_internal_.getConnectionErrorEventRouter()}removeListener(id){return this.router_.removeListener(id)}}class DisplaySettingsProviderPendingReceiver{constructor(handle){this.handle=mojo.internal.interfaceSupport.getEndpointForReceiver(handle)}bindInBrowser(scope="context"){mojo.internal.interfaceSupport.bind(this.handle,"ash.settings.mojom.DisplaySettingsProvider",scope)}}class DisplaySettingsProviderRemote{constructor(handle){this.proxy=new mojo.internal.interfaceSupport.InterfaceRemoteBase(DisplaySettingsProviderPendingReceiver,handle);this.$=new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);this.onConnectionError=this.proxy.getConnectionErrorEventRouter()}observeTabletMode(observer){return this.proxy.sendMessage(0,DisplaySettingsProvider_ObserveTabletMode_ParamsSpec.$,DisplaySettingsProvider_ObserveTabletMode_ResponseParamsSpec.$,[observer])}observeDisplayConfiguration(observer){this.proxy.sendMessage(1,DisplaySettingsProvider_ObserveDisplayConfiguration_ParamsSpec.$,null,[observer])}recordChangingDisplaySettings(type,value){this.proxy.sendMessage(2,DisplaySettingsProvider_RecordChangingDisplaySettings_ParamsSpec.$,null,[type,value])}}class DisplaySettingsProviderReceiver{constructor(impl){this.helper_internal_=new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(DisplaySettingsProviderRemote);this.$=new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);this.helper_internal_.registerHandler(0,DisplaySettingsProvider_ObserveTabletMode_ParamsSpec.$,DisplaySettingsProvider_ObserveTabletMode_ResponseParamsSpec.$,impl.observeTabletMode.bind(impl));this.helper_internal_.registerHandler(1,DisplaySettingsProvider_ObserveDisplayConfiguration_ParamsSpec.$,null,impl.observeDisplayConfiguration.bind(impl));this.helper_internal_.registerHandler(2,DisplaySettingsProvider_RecordChangingDisplaySettings_ParamsSpec.$,null,impl.recordChangingDisplaySettings.bind(impl));this.onConnectionError=this.helper_internal_.getConnectionErrorEventRouter()}}class DisplaySettingsProvider{static get $interfaceName(){return"ash.settings.mojom.DisplaySettingsProvider"}static getRemote(){let remote=new DisplaySettingsProviderRemote;remote.$.bindNewPipeAndPassReceiver().bindInBrowser();return remote}}class DisplaySettingsProviderCallbackRouter{constructor(){this.helper_internal_=new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(DisplaySettingsProviderRemote);this.$=new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);this.router_=new mojo.internal.interfaceSupport.CallbackRouter;this.observeTabletMode=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(0,DisplaySettingsProvider_ObserveTabletMode_ParamsSpec.$,DisplaySettingsProvider_ObserveTabletMode_ResponseParamsSpec.$,this.observeTabletMode.createReceiverHandler(true));this.observeDisplayConfiguration=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(1,DisplaySettingsProvider_ObserveDisplayConfiguration_ParamsSpec.$,null,this.observeDisplayConfiguration.createReceiverHandler(false));this.recordChangingDisplaySettings=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(2,DisplaySettingsProvider_RecordChangingDisplaySettings_ParamsSpec.$,null,this.recordChangingDisplaySettings.createReceiverHandler(false));this.onConnectionError=this.helper_internal_.getConnectionErrorEventRouter()}removeListener(id){return this.router_.removeListener(id)}}const DisplaySettingsValueSpec={$:{}};const TabletModeObserver_OnTabletModeChanged_ParamsSpec={$:{}};const DisplayConfigurationObserver_OnDisplayConfigurationChanged_ParamsSpec={$:{}};const DisplaySettingsProvider_ObserveTabletMode_ParamsSpec={$:{}};const DisplaySettingsProvider_ObserveTabletMode_ResponseParamsSpec={$:{}};const DisplaySettingsProvider_ObserveDisplayConfiguration_ParamsSpec={$:{}};const DisplaySettingsProvider_RecordChangingDisplaySettings_ParamsSpec={$:{}};mojo.internal.Struct(DisplaySettingsValueSpec.$,"DisplaySettingsValue",[mojo.internal.StructField("is_internal_display_$flag",0,0,mojo.internal.Bool,false,false,0,{isPrimary:true,linkedValueFieldName:"is_internal_display_$value",originalFieldName:"isInternalDisplay"}),mojo.internal.StructField("is_internal_display_$value",0,1,mojo.internal.Bool,false,false,0,{isPrimary:false,originalFieldName:"isInternalDisplay"}),mojo.internal.StructField("display_id_$flag",0,2,mojo.internal.Bool,false,false,0,{isPrimary:true,linkedValueFieldName:"display_id_$value",originalFieldName:"displayId"}),mojo.internal.StructField("display_id_$value",8,0,mojo.internal.Int64,BigInt(0),false,0,{isPrimary:false,originalFieldName:"displayId"}),mojo.internal.StructField("orientation_$flag",0,3,mojo.internal.Bool,false,false,0,{isPrimary:true,linkedValueFieldName:"orientation_$value",originalFieldName:"orientation"}),mojo.internal.StructField("orientation_$value",4,0,DisplaySettingsOrientationOptionSpec.$,0,false,0,{isPrimary:false,originalFieldName:"orientation"}),mojo.internal.StructField("night_light_status_$flag",0,4,mojo.internal.Bool,false,false,0,{isPrimary:true,linkedValueFieldName:"night_light_status_$value",originalFieldName:"nightLightStatus"}),mojo.internal.StructField("night_light_status_$value",0,5,mojo.internal.Bool,false,false,0,{isPrimary:false,originalFieldName:"nightLightStatus"}),mojo.internal.StructField("night_light_schedule_$flag",0,6,mojo.internal.Bool,false,false,0,{isPrimary:true,linkedValueFieldName:"night_light_schedule_$value",originalFieldName:"nightLightSchedule"}),mojo.internal.StructField("night_light_schedule_$value",16,0,DisplaySettingsNightLightScheduleOptionSpec.$,0,false,0,{isPrimary:false,originalFieldName:"nightLightSchedule"}),mojo.internal.StructField("mirror_mode_status_$flag",0,7,mojo.internal.Bool,false,false,0,{isPrimary:true,linkedValueFieldName:"mirror_mode_status_$value",originalFieldName:"mirrorModeStatus"}),mojo.internal.StructField("mirror_mode_status_$value",1,0,mojo.internal.Bool,false,false,0,{isPrimary:false,originalFieldName:"mirrorModeStatus"}),mojo.internal.StructField("unified_mode_status_$flag",1,1,mojo.internal.Bool,false,false,0,{isPrimary:true,linkedValueFieldName:"unified_mode_status_$value",originalFieldName:"unifiedModeStatus"}),mojo.internal.StructField("unified_mode_status_$value",1,2,mojo.internal.Bool,false,false,0,{isPrimary:false,originalFieldName:"unifiedModeStatus"})],[[0,32]]);mojo.internal.Struct(TabletModeObserver_OnTabletModeChanged_ParamsSpec.$,"TabletModeObserver_OnTabletModeChanged_Params",[mojo.internal.StructField("isTabletMode",0,0,mojo.internal.Bool,false,false,0)],[[0,16]]);mojo.internal.Struct(DisplayConfigurationObserver_OnDisplayConfigurationChanged_ParamsSpec.$,"DisplayConfigurationObserver_OnDisplayConfigurationChanged_Params",[],[[0,8]]);mojo.internal.Struct(DisplaySettingsProvider_ObserveTabletMode_ParamsSpec.$,"DisplaySettingsProvider_ObserveTabletMode_Params",[mojo.internal.StructField("observer",0,0,mojo.internal.InterfaceProxy(TabletModeObserverRemote),null,false,0)],[[0,16]]);mojo.internal.Struct(DisplaySettingsProvider_ObserveTabletMode_ResponseParamsSpec.$,"DisplaySettingsProvider_ObserveTabletMode_ResponseParams",[mojo.internal.StructField("isTabletMode",0,0,mojo.internal.Bool,false,false,0)],[[0,16]]);mojo.internal.Struct(DisplaySettingsProvider_ObserveDisplayConfiguration_ParamsSpec.$,"DisplaySettingsProvider_ObserveDisplayConfiguration_Params",[mojo.internal.StructField("observer",0,0,mojo.internal.InterfaceProxy(DisplayConfigurationObserverRemote),null,false,0)],[[0,16]]);mojo.internal.Struct(DisplaySettingsProvider_RecordChangingDisplaySettings_ParamsSpec.$,"DisplaySettingsProvider_RecordChangingDisplaySettings_Params",[mojo.internal.StructField("type",0,0,DisplaySettingsTypeSpec.$,0,false,0),mojo.internal.StructField("value",8,0,DisplaySettingsValueSpec.$,null,false,0)],[[0,24]]);var display_settings_provider_mojomWebui=Object.freeze({__proto__:null,DisplayConfigurationObserver:DisplayConfigurationObserver,DisplayConfigurationObserverCallbackRouter:DisplayConfigurationObserverCallbackRouter,DisplayConfigurationObserverPendingReceiver:DisplayConfigurationObserverPendingReceiver,DisplayConfigurationObserverReceiver:DisplayConfigurationObserverReceiver,DisplayConfigurationObserverRemote:DisplayConfigurationObserverRemote,DisplayConfigurationObserver_OnDisplayConfigurationChanged_ParamsSpec:DisplayConfigurationObserver_OnDisplayConfigurationChanged_ParamsSpec,get DisplaySettingsNightLightScheduleOption(){return DisplaySettingsNightLightScheduleOption},DisplaySettingsNightLightScheduleOptionSpec:DisplaySettingsNightLightScheduleOptionSpec,get DisplaySettingsOrientationOption(){return DisplaySettingsOrientationOption},DisplaySettingsOrientationOptionSpec:DisplaySettingsOrientationOptionSpec,DisplaySettingsProvider:DisplaySettingsProvider,DisplaySettingsProviderCallbackRouter:DisplaySettingsProviderCallbackRouter,DisplaySettingsProviderPendingReceiver:DisplaySettingsProviderPendingReceiver,DisplaySettingsProviderReceiver:DisplaySettingsProviderReceiver,DisplaySettingsProviderRemote:DisplaySettingsProviderRemote,DisplaySettingsProvider_ObserveDisplayConfiguration_ParamsSpec:DisplaySettingsProvider_ObserveDisplayConfiguration_ParamsSpec,DisplaySettingsProvider_ObserveTabletMode_ParamsSpec:DisplaySettingsProvider_ObserveTabletMode_ParamsSpec,DisplaySettingsProvider_ObserveTabletMode_ResponseParamsSpec:DisplaySettingsProvider_ObserveTabletMode_ResponseParamsSpec,DisplaySettingsProvider_RecordChangingDisplaySettings_ParamsSpec:DisplaySettingsProvider_RecordChangingDisplaySettings_ParamsSpec,get DisplaySettingsType(){return DisplaySettingsType},DisplaySettingsTypeSpec:DisplaySettingsTypeSpec,DisplaySettingsValueSpec:DisplaySettingsValueSpec,TabletModeObserver:TabletModeObserver,TabletModeObserverCallbackRouter:TabletModeObserverCallbackRouter,TabletModeObserverPendingReceiver:TabletModeObserverPendingReceiver,TabletModeObserverReceiver:TabletModeObserverReceiver,TabletModeObserverRemote:TabletModeObserverRemote,TabletModeObserver_OnTabletModeChanged_ParamsSpec:TabletModeObserver_OnTabletModeChanged_ParamsSpec});function getTemplate$1p(){return html`<!--_html_template_start_--><style include="cr-shared-style settings-shared iron-flex
  iron-flex-alignment">.indented{align-self:stretch;margin-inline-start:var(--cr-section-indent-padding);padding:0}#nightLightTemperatureDiv[disabled]{opacity:.38;pointer-events:none}#NightLightLabelDiv{align-self:start}.text-area{margin:10px 0}#nightLightSlider{flex-grow:1;margin-top:20px}#nightLightDropDownDiv{width:200px;text-align:right;margin-top:8px}iron-collapse{width:100%}</style>

<settings-toggle-button id="nightLightToggleButton" class="settings-box first" label="$i18n{displayNightLightLabel}" pref="{{prefs.ash.night_light.enabled}}" sub-label="$i18n{displayNightLightText}" deep-link-focus-id$="[[Setting.kNightLight]]">
</settings-toggle-button>

<div id="nightLightSettingsDiv" class="settings-box continuation start layout vertical">
  
  <div id="nightLightTemperatureDiv" class="settings-box indented continuation" hidden$="[[!prefs.ash.night_light.enabled.value]]">
    <div class="start text-area" id="colorTemperatureLabel">
      $i18n{displayNightLightTemperatureLabel}
    </div>
    <settings-slider id="colorTemperatureSlider" aria-labelledby="colorTemperatureLabel" min="0" max="100" scale="100" label-min="$i18n{displayNightLightTempSliderMinLabel}" label-max="$i18n{displayNightLightTempSliderMaxLabel}" pref="{{prefs.ash.night_light.color_temperature}}" deep-link-focus-id$="[[Setting.kNightLightColorTemperature]]">
    </settings-slider>
  </div>
  
  <div class="settings-box indented">
    <div id="NightLightLabelDiv" class="start text-area" aria-hidden="true">
      <div id="nightLightScheduleLabel" class="label">
        $i18n{displayNightLightScheduleLabel}
      </div>
      <div id="nightLightScheduleSubLabel" class="secondary label" hidden$="[[!nightLightScheduleSubLabel_]]">
        [[nightLightScheduleSubLabel_]]
      </div>
    </div>
    <div id="nightLightDropDownDiv" class="cr-row-gap">
      <settings-dropdown-menu id="nightLightScheduleTypeDropDown" label="$i18n{displayNightLightScheduleLabel}" aria-describedby="nightLightScheduleSubLabel" pref="{{prefs.ash.night_light.schedule_type}}" menu-options="[[scheduleTypesList_]]">
      </settings-dropdown-menu>
      <template is="dom-if" if="[[shouldShowGeolocationWarningText_]]" restamp>
        <settings-privacy-hub-geolocation-warning-text id="warningText" warning-text-with-anchor="$i18n{displayNightLightGeolocationWarningText}" on-link-clicked="openGeolocationDialog_">
        </settings-privacy-hub-geolocation-warning-text>
      </template>
    </div>
  </div>
  
  <iron-collapse id="nightLightCustomScheduleCollapse" opened="[[shouldOpenCustomScheduleCollapse_]]">
    <div class="settings-box indented continuation">
      <div class="start text-area layout vertical">
        <div class="settings-box continuation self-stretch">
          <settings-scheduler-slider id="nightLightSlider" prefs="{{prefs}}" pref-start-time="{{prefs.ash.night_light.custom_start_time}}" pref-end-time="{{prefs.ash.night_light.custom_end_time}}">
          </settings-scheduler-slider>
        </div>
      </div>
    </div>
  </iron-collapse>
</div>


<template is="dom-if" if="[[shouldShowGeolocationDialog_]]" restamp>
  <settings-privacy-hub-geolocation-dialog id="geolocationDialog" on-close="onGeolocationDialogClose_" prefs="{{prefs}}">
  </settings-privacy-hub-geolocation-dialog>
</template>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let displaySettingsProvider;function getDisplaySettingsProvider(){if(!displaySettingsProvider){displaySettingsProvider=DisplaySettingsProvider.getRemote()}assert(displaySettingsProvider);return displaySettingsProvider}function setDisplaySettingsProviderForTesting(testProvider){displaySettingsProvider=testProvider}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var NightLightScheduleType;(function(NightLightScheduleType){NightLightScheduleType[NightLightScheduleType["NEVER"]=0]="NEVER";NightLightScheduleType[NightLightScheduleType["SUNSET_TO_SUNRISE"]=1]="SUNSET_TO_SUNRISE";NightLightScheduleType[NightLightScheduleType["CUSTOM"]=2]="CUSTOM"})(NightLightScheduleType||(NightLightScheduleType={}));const SettingsDisplayNightLightElementBase=DeepLinkingMixin(PrefsMixin(I18nMixin(PolymerElement)));class SettingsDisplayNightLightElement extends SettingsDisplayNightLightElementBase{constructor(){super(...arguments);this.displaySettingsProvider=getDisplaySettingsProvider()}static get is(){return"settings-display-night-light"}static get template(){return getTemplate$1p()}static get properties(){return{scheduleTypesList_:{type:Array,value(){return[{name:loadTimeData.getString("displayNightLightScheduleNever"),value:NightLightScheduleType.NEVER},{name:loadTimeData.getString("displayNightLightScheduleSunsetToSunRise"),value:NightLightScheduleType.SUNSET_TO_SUNRISE},{name:loadTimeData.getString("displayNightLightScheduleCustom"),value:NightLightScheduleType.CUSTOM}]}},shouldOpenCustomScheduleCollapse_:{type:Boolean,value:false},nightLightScheduleSubLabel_:String,supportedSettingIds:{type:Object,value:()=>new Set([Setting.kNightLight,Setting.kNightLightColorTemperature])},shouldShowGeolocationWarningText_:{type:Boolean,computed:"computeShouldShowGeolocationWarningText_("+"prefs.ash.night_light.schedule_type.value, "+"prefs.ash.user.geolocation_access_level.value),"},shouldShowEnableGeolocationDialog_:{type:Boolean,value:false},isInternalDisplay:Boolean,currentNightLightStatus:Boolean,currentScheduleType:NightLightScheduleType}}static get observers(){return["updateNightLightScheduleSettings_(prefs.ash.night_light.schedule_type.*,"+" prefs.ash.night_light.enabled.*),"]}updateNightLightScheduleSettings_(){const scheduleType=this.getPref("ash.night_light.schedule_type").value;this.shouldOpenCustomScheduleCollapse_=scheduleType===NightLightScheduleType.CUSTOM;const nightLightStatus=this.getPref("ash.night_light.enabled").value;if(scheduleType===NightLightScheduleType.SUNSET_TO_SUNRISE){this.nightLightScheduleSubLabel_=nightLightStatus?this.i18n("displayNightLightOffAtSunrise"):this.i18n("displayNightLightOnAtSunset")}else{this.nightLightScheduleSubLabel_=""}if(this.currentScheduleType!==scheduleType&&this.currentScheduleType!==undefined){this.recordChangingNightLightSchedule(this.isInternalDisplay,scheduleType)}if(this.currentNightLightStatus!==nightLightStatus&&this.currentNightLightStatus!==undefined){this.recordTogglingNightLightStatus(this.isInternalDisplay,nightLightStatus)}this.currentScheduleType=scheduleType;this.currentNightLightStatus=nightLightStatus}recordChangingNightLightSchedule(isInternalDisplay,nightLightSchedule){this.displaySettingsProvider.recordChangingDisplaySettings(DisplaySettingsType.kNightLightSchedule,{isInternalDisplay:isInternalDisplay,nightLightSchedule:nightLightSchedule})}recordTogglingNightLightStatus(isInternalDisplay,nightLightStatus){this.displaySettingsProvider.recordChangingDisplaySettings(DisplaySettingsType.kNightLight,{isInternalDisplay:isInternalDisplay,nightLightStatus:nightLightStatus})}computeShouldShowGeolocationWarningText_(){const scheduleType=this.prefs.ash.night_light.schedule_type.value;const geolocationAccessLevel=this.prefs.ash.user.geolocation_access_level.value;return scheduleType===NightLightScheduleType.SUNSET_TO_SUNRISE&&geolocationAccessLevel===GeolocationAccessLevel.DISALLOWED}openGeolocationDialog_(){this.shouldShowGeolocationDialog_=true}onGeolocationDialogClose_(){this.shouldShowGeolocationDialog_=false}}customElements.define(SettingsDisplayNightLightElement.is,SettingsDisplayNightLightElement);function getTemplate$1o(){return html`<!--_html_template_start_--><style include="cr-shared-style settings-shared md-select iron-flex
  iron-flex-alignment">.indented{align-self:stretch;margin-inline-start:var(--cr-section-indent-padding);padding:0}.display-tabs{width:100%}display-layout{align-self:stretch;flex:1 1 auto;height:300px;margin:10px;min-height:300px}.text-area{margin:10px 0}.settings-box>cr-button:first-child{padding-inline-start:0}.settings-box>cr-policy-pref-indicator{margin-inline-end:var(--cr-controlled-by-spacing)}.underbar{border-bottom:var(--cr-separator-line)}#controlsDiv>.settings-box:first-of-type{border-top:none}#mirrorDisplayToggleButton{display:flex;align-self:stretch;margin-bottom:20px}</style>


<template is="dom-if" if="[[isRevampWayfindingEnabled_]]" restamp>
  <settings-display-night-light prefs="{{prefs}}" is-internal-display="[[selectedDisplay.isInternal]]">
  </settings-display-night-light>
  <div class="hr"></div>
</template>


<template is="dom-if" if="[[shouldShowArrangementSection(displays)]]" restamp>
  <div class="settings-box first layout vertical self-stretch underbar" id="arrangement-section">
    <h2 class="layout self-start">
      $i18n{displayArrangementTitle}
    </h2>
    <div class="secondary layout self-start" hidden="[[isMirrored(displays)]]">
      $i18n{displayArrangementText}
    </div>
    <display-layout id="displayLayout" selected-display="[[selectedDisplay]]" on-select-display="onSelectDisplay_" deep-link-focus-id$="[[Setting.kDisplayArrangement]]">
    </display-layout>

    <template is="dom-if" if="[[showMirror(unifiedDesktopMode_, displays)]]" restamp>
      
      <template is="dom-if" if="[[isRevampWayfindingEnabled_]]">
        <div id="mirrorDisplayToggleButton" class="text-area">
          <div id="mirrorDisplayToggleLabel" class="start">
            [[getDisplayMirrorText_(displays)]]
          </div>
          <cr-toggle id="mirrorDisplayToggle" checked="[[isMirrored(displays)]]" on-click="onMirroredClick_" aria-label="[[getDisplayMirrorText_(displays)]]" deep-link-focus-id$="[[Setting.kDisplayMirroring]]">
          </cr-toggle>
        </div>
      </template>

      
      <template is="dom-if" if="[[!isRevampWayfindingEnabled_]]">
        <div class="secondary self-start">
          <cr-checkbox id="displayMirrorCheckbox" checked="[[isMirrored(displays)]]" on-click="onMirroredClick_" aria-label="[[getDisplayMirrorText_(displays)]]" deep-link-focus-id$="[[Setting.kDisplayMirroring]]">
            <div class="text-area">[[getDisplayMirrorText_(displays)]]</div>
          </cr-checkbox>
        </div>
      </template>
    </template>

  </div>
</template>


<div hidden="[[!hasMultipleDisplays_(displays)]]" class="settings-box first">
  <cr-tabs selected="[[selectedTab_]]" class="display-tabs" on-selected-changed="onSelectDisplayTab_" tab-names="[[displayTabNames_]]"></cr-tabs>
</div>

<div id="controlsDiv" class="settings-box layout vertical first">
  <h2>[[selectedDisplay.name]]</h2>
  <template is="dom-if" if="[[showUnifiedDesktop(unifiedDesktopAvailable_,
      unifiedDesktopMode_, displays, isTabletMode_)]]" restamp>
    <div class="settings-box indented two-line">
      <div class="start">
        <div id="displayUnifiedDesktopCheckboxLabel">
          $i18n{displayUnifiedDesktop}
        </div>
        <div class="secondary">
          [[getUnifiedDesktopText_(unifiedDesktopMode_)]]
        </div>
      </div>
      <cr-toggle id="displayUnifiedDesktopToggle" checked="[[unifiedDesktopMode_]]" on-click="onUnifiedDesktopClick_" aria-labelledby="displayUnifiedDesktopCheckboxLabel" deep-link-focus-id$="[[Setting.kAllowWindowsToSpanDisplays]]">
      </cr-toggle>
    </div>
  </template>

  <template is="dom-if" restamp if="[[showDisplaySelectMenu_(displays, selectedDisplay)]]">
    <div class="settings-box indented">
      <div id="displayScreenTitle" class="start" aria-hidden="true">
        $i18n{displayScreenTitle}
      </div>
      <select id="primaryDisplaySelect" class="md-select" on-change="updatePrimaryDisplay_" aria-labelledby="displayScreenTitle" value="[[getDisplaySelectMenuIndex_(
              selectedDisplay, primaryDisplayId)]]">
        <option value="0">$i18n{displayScreenPrimary}</option>
        <option value="1">$i18n{displayScreenExtended}</option>
      </select>
    </div>
  </template>

  
  <div class="settings-box indented two-line first">
    <div class="start text-area layout vertical">
      <div id="displayZoomLabel" aria-hidden="true">
        $i18n{displayZoomLabel}
      </div>
      <div id="displayZoomDescription" class="secondary self-start" aria-hidden="true">
        $i18n{displayZoomDescription}
      </div>
      <div id="logicalResolutionText" class="secondary self-start" hidden$="[[!logicalResolutionText_]]" aria-hidden="true">
        [[logicalResolutionText_]]
      </div>
    </div>
    <template is="dom-if" if="[[isDisplayScaleManagedByPolicy_(
        selectedDisplay, prefs.cros.device_display_resolution)]]">
      <cr-policy-pref-indicator pref="[[prefs.cros.device_display_resolution]]" icon-aria-label="$i18n{displayZoomLabel}">
      </cr-policy-pref-indicator>
    </template>
    <settings-slider id="displaySizeSlider" ticks="[[zoomValues_]]" pref="{{selectedZoomPref_}}" label-aria="$i18n{displayZoomLabel}" label-min="$i18n{displaySizeSliderMinLabel}" label-max="$i18n{displaySizeSliderMaxLabel}" disabled="[[isDisplayScaleMandatory_(
            selectedDisplay,
            prefs.cros.device_display_resolution)]]" on-cr-slider-value-changed="onDisplaySizeSliderDrag_" aria-describedby="displayZoomSublabel logicalResolutionText" deep-link-focus-id$="[[Setting.kDisplaySize]]">
    </settings-slider>
  </div>

  
  <template is="dom-if" if="[[showDropDownResolutionSetting_(selectedDisplay)]]" restamp>
    <div class="settings-box indented two-line">
      <div class="start text-area layout vertical" aria-hidden="true">
        <div>$i18n{displayResolutionTitle}</div>
        <div class="secondary self-start" id="displayResolutionSublabel">
          $i18n{displayResolutionSublabel}
        </div>
      </div>
      <template is="dom-if" if="[[isDisplayResolutionManagedByPolicy_(
          prefs.cros.device_display_resolution)]]">
        <cr-policy-pref-indicator pref="[[prefs.cros.device_display_resolution]]" icon-aria-label="$i18n{displayResolutionTitle}">
        </cr-policy-pref-indicator>
      </template>
      <settings-dropdown-menu id="displayModeSelector" pref="{{selectedParentModePref_}}" disabled="[[isDisplayResolutionMandatory_(
              prefs.cros.device_display_resolution)]]" label="$i18n{displayResolutionTitle}" aria-describedby="displayResolutionSublabel" menu-options="[[displayModeList_]]" deep-link-focus-id$="[[Setting.kDisplayResolution]]">
      </settings-dropdown-menu>
    </div>
  </template>

  
  <template is="dom-if" if="[[showRefreshRateSetting_(selectedDisplay)]]" restamp>
    <div class="settings-box indented two-line">
      <div class="start text-area layout vertical" aria-hidden="true">
        <div>$i18n{displayRefreshRateTitle}</div>
        <div class="secondary self-start" id="displayRefreshRateSublabel">
          $i18n{displayRefreshRateSublabel}
        </div>
      </div>
      <template is="dom-if" if="[[isDisplayResolutionManagedByPolicy_(
          prefs.cros.device_display_resolution)]]">
        <cr-policy-pref-indicator pref="[[prefs.cros.device_display_resolution]]" icon-aria-label="$i18n{displayResolutionText}">
        </cr-policy-pref-indicator>
      </template>
      <settings-dropdown-menu id="refreshRateSelector" pref="{{selectedModePref_}}" disabled="[[isDisplayResolutionMandatory_(
              prefs.cros.device_display_resolution)]]" label="Refresh Rate Menu" aria-describedby="displayRefreshRateSublabel" menu-options="[[refreshRateList_]]" deep-link-focus-id$="[[Setting.kDisplayRefreshRate]]">
      </settings-dropdown-menu>
    </div>
  </template>


  <template is="dom-if" if="[[!unifiedDesktopMode_]]" restamp>
    <div class="settings-box indented">
      <div id="displayOrientation" class="start text-area" aria-hidden="true">
        $i18n{displayOrientation}
      </div>
      <template is="dom-if" if="[[isDevicePolicyEnabled_(
          prefs.cros.display_rotation_default)]]">
        <cr-policy-pref-indicator pref="[[prefs.cros.display_rotation_default]]" icon-aria-label="$i18n{displayOrientation}">
        </cr-policy-pref-indicator>
      </template>
      <select id="orientationSelect" class="md-select" value="[[selectedDisplay.rotation]]" aria-labelledby="displayOrientation" on-change="onOrientationChange_" deep-link-focus-id$="[[Setting.kDisplayOrientation]]">
        <option value="-1" hidden$="[[!showAutoRotateOption_(selectedDisplay)]]">
          $i18n{displayOrientationAutoRotate}
        </option>
        <option value="0">$i18n{displayOrientationStandard}</option>
        <option value="90">90&deg;</option>
        <option value="180">180&deg;</option>
        <option value="270">270&deg;</option>
      </select>
    </div>
  </template>

  <template is="dom-if" if="[[showAmbientColorSetting(
      ambientColorAvailable_, selectedDisplay)]]">
    <settings-toggle-button id="ambientColor" class="indented hr" pref="{{prefs.ash.ambient_color.enabled}}" label="$i18n{displayAmbientColorTitle}" sub-label="$i18n{displayAmbientColorSubtitle}" deep-link-focus-id$="[[Setting.kAmbientColors]]">
    </settings-toggle-button>
  </template>

  <cr-link-row class="indented hr" id="overscan" label="$i18n{displayOverscanPageTitle}" sub-label="$i18n{displayOverscanPageText}" on-click="onOverscanClick_" hidden$="[[!showOverscanSetting_(selectedDisplay)]]" embedded deep-link-focus-id$="[[Setting.kDisplayOverscan]]">
  </cr-link-row>

  <settings-display-overscan-dialog id="displayOverscan" display-id="{{overscanDisplayId}}" on-close="onCloseOverscanDialog_">
  </settings-display-overscan-dialog>

  
  <cr-link-row class="indented hr" id="touchCalibration" label="$i18n{displayTouchCalibrationTitle}" sub-label="$i18n{displayTouchCalibrationText}" on-click="onTouchCalibrationClick_" hidden$="[[!showTouchCalibrationSetting_(selectedDisplay)]]" embedded deep-link-focus-id$="[[Setting.kTouchscreenCalibration]]">
  </cr-link-row>
</div>


<template is="dom-if" if="[[!isRevampWayfindingEnabled_]]" restamp>
  <div class="hr"></div>
  <settings-display-night-light prefs="{{prefs}}" is-internal-display="[[selectedDisplay.isInternal]]">
  </settings-display-night-light>
</template>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var MirrorMode=chrome.system.display.MirrorMode;const SettingsDisplayElementBase=DeepLinkingMixin(PrefsMixin(RouteObserverMixin(I18nMixin(PolymerElement))));class SettingsDisplayElement extends SettingsDisplayElementBase{static get is(){return"settings-display"}static get template(){return getTemplate$1o()}static get properties(){return{isRevampWayfindingEnabled_:{type:Boolean,value:()=>isRevampWayfindingEnabled(),readOnly:true},selectedModePref_:{type:Object,value(){return{key:"fakeDisplaySliderPref",type:chrome.settingsPrivate.PrefType.NUMBER,value:0}}},selectedZoomPref_:{type:Object,value(){return{key:"fakeDisplaySliderZoomPref",type:chrome.settingsPrivate.PrefType.NUMBER,value:0}}},displays:Array,layouts:Array,displayIds:{type:String,observer:"onDisplayIdsChanged_"},primaryDisplayId:String,selectedDisplay:Object,overscanDisplayId:{type:String,notify:true},mirroringDestinationIds:Array,modeValues_:Array,zoomValues_:Array,displayModeList_:{type:Array,value:[]},refreshRateList_:{type:Array,value:[]},unifiedDesktopAvailable_:{type:Boolean,value(){return loadTimeData.getBoolean("unifiedDesktopAvailable")}},ambientColorAvailable_:{type:Boolean,value(){return loadTimeData.getBoolean("deviceSupportsAmbientColor")}},listAllDisplayModes_:{type:Boolean,value(){return loadTimeData.getBoolean("listAllDisplayModes")}},unifiedDesktopMode_:{type:Boolean,value:false},isTabletMode_:{type:Boolean,value:false},selectedParentModePref_:{type:Object,value:function(){return{key:"fakeDisplayParentModePref",type:chrome.settingsPrivate.PrefType.NUMBER,value:0}}},logicalResolutionText_:String,displayTabNames_:Array,selectedTab_:Number,pendingSettingId_:{type:Number,value:null},supportedSettingIds:{type:Object,value:()=>new Set([Setting.kDisplaySize,Setting.kDisplayOrientation,Setting.kDisplayArrangement,Setting.kDisplayResolution,Setting.kDisplayRefreshRate,Setting.kDisplayMirroring,Setting.kAllowWindowsToSpanDisplays,Setting.kAmbientColors,Setting.kTouchscreenCalibration,Setting.kDisplayOverscan])}}}static get observers(){return["onSelectedModeChange_(selectedModePref_.value)","onSelectedParentModeChange_(selectedParentModePref_.value)","onSelectedZoomChange_(selectedZoomPref_.value)","onDisplaysChanged_(displays.*)"]}constructor(){super();this.currentSelectedParentModeIndex_=-1;this.currentSelectedModeIndex_=-1;this.displayChangedListener_=null;this.invalidDisplayId_=loadTimeData.getString("invalidDisplayId");this.currentRoute_=null;this.browserProxy_=DevicePageBrowserProxyImpl.getInstance();this.parentModeToRefreshRateMap_=new Map;this.modeToParentModeMap_=new Map;this.displaySettingsProvider=getDisplaySettingsProvider()}async connectedCallback(){super.connectedCallback();this.displayChangedListener_=this.displayChangedListener_||this.getDisplayInfo_.bind(this);getDisplayApi().onDisplayChanged.addListener(this.displayChangedListener_);this.getDisplayInfo_();this.$.displaySizeSlider.updateValueInstantly=false;const{isTabletMode:isTabletMode}=await this.displaySettingsProvider.observeTabletMode(new TabletModeObserverReceiver(this).$.bindNewPipeAndPassRemote());this.isTabletMode_=isTabletMode;this.displaySettingsProvider.observeDisplayConfiguration(new DisplayConfigurationObserverReceiver(this).$.bindNewPipeAndPassRemote());this.displaySettingsProvider.recordChangingDisplaySettings(DisplaySettingsType.kDisplayPage,{})}disconnectedCallback(){super.disconnectedCallback();getDisplayApi().onDisplayChanged.removeListener(castExists(this.displayChangedListener_));this.currentSelectedModeIndex_=-1;this.currentSelectedParentModeIndex_=-1}onTabletModeChanged(isTabletMode){this.isTabletMode_=isTabletMode}onDisplayConfigurationChanged(){this.getDisplayInfo_()}beforeDeepLinkAttempt(_settingId){if(!this.displays){return false}return true}currentRouteChanged(newRoute,oldRoute){this.currentRoute_=newRoute;if(newRoute!==routes.DISPLAY&&oldRoute===routes.DISPLAY){this.browserProxy_.highlightDisplay(this.invalidDisplayId_);return}if(newRoute!==routes.DISPLAY){this.pendingSettingId_=null;return}this.attemptDeepLink().then((result=>{if(!result.deepLinkShown&&result.pendingSettingId){this.pendingSettingId_=result.pendingSettingId}}))}showOverscanDialog_(showOverscan){if(showOverscan){this.$.displayOverscan.open();this.$.displayOverscan.focus()}else{this.$.displayOverscan.close()}}onDisplayIdsChanged_(){this.showOverscanDialog_(false)}getDisplayInfo_(){const flags={singleUnified:true};getDisplayApi().getInfo(flags).then((displays=>this.displayInfoFetched_(displays)))}displayInfoFetched_(displays){if(!displays.length){return}getDisplayApi().getDisplayLayout().then((layouts=>this.displayLayoutFetched_(displays,layouts)));if(this.isMirrored(displays)){this.mirroringDestinationIds=displays[0].mirroringDestinationIds}else{this.mirroringDestinationIds=[]}}displayLayoutFetched_(displays,layouts){this.layouts=layouts;this.displays=displays;this.displayTabNames_=displays.map((({name:name})=>name));this.updateDisplayInfo_()}getSelectedModeIndex_(selectedDisplay){for(let i=0;i<selectedDisplay.modes.length;++i){if(selectedDisplay.modes[i].isSelected){return i}}return 0}isDevicePolicyEnabled_(policyPref){return policyPref!==undefined&&policyPref.value!==null}isDisplayResolutionManagedByPolicy_(resolutionPref){return this.isDevicePolicyEnabled_(resolutionPref)&&(resolutionPref.value.external_use_native!==undefined||resolutionPref.value.external_width!==undefined&&resolutionPref.value.external_height!==undefined)}isDisplayResolutionMandatory_(resolutionPref){return this.isDisplayResolutionManagedByPolicy_(resolutionPref)&&!resolutionPref.value.recommended}isDisplayScaleManagedByPolicy_(selectedDisplay,resolutionPref){if(!this.isDevicePolicyEnabled_(resolutionPref)||!selectedDisplay){return false}if(selectedDisplay.isInternal){return resolutionPref.value.internal_scale_percentage!==undefined}return resolutionPref.value.external_scale_percentage!==undefined}isDisplayScaleMandatory_(selectedDisplay,resolutionPref){return this.isDisplayScaleManagedByPolicy_(selectedDisplay,resolutionPref)&&!resolutionPref.value.recommended}parseCompoundDisplayModes_(selectedDisplay){assert(!this.listAllDisplayModes_);const optionList=[];for(let i=0;i<selectedDisplay.modes.length;++i){const mode=selectedDisplay.modes[i];const id="displayResolutionMenuItem";const refreshRate=Math.round(mode.refreshRate*100)/100;const resolution=this.i18n(id,mode.width.toString(),mode.height.toString(),refreshRate.toString());optionList.push({name:resolution,value:i})}this.displayModeList_=optionList}createModeMap_(selectedDisplay){const modes=new Map;for(let i=0;i<selectedDisplay.modes.length;++i){const mode=selectedDisplay.modes[i];if(!modes.has(mode.width)){modes.set(mode.width,new Map)}if(!modes.get(mode.width).has(mode.height)){modes.get(mode.width).set(mode.height,new Map)}if(modes.get(mode.width).get(mode.height).has(mode.refreshRate)){const existingModeIndex=modes.get(mode.width).get(mode.height).get(mode.refreshRate);const existingMode=selectedDisplay.modes[existingModeIndex];if(existingMode.isNative||!mode.isNative){continue}}modes.get(mode.width).get(mode.height).set(mode.refreshRate,i)}return modes}parseSplitDisplayModes_(selectedDisplay){assert(this.listAllDisplayModes_);this.modeToParentModeMap_=new Map;this.parentModeToRefreshRateMap_=new Map;this.displayModeList_=[];const modes=this.createModeMap_(selectedDisplay);const widthsArr=Array.from(modes.keys()).sort();for(let i=0;i<widthsArr.length;i++){const width=widthsArr[i];const heightsMap=modes.get(width);const heightArr=Array.from(heightsMap.keys());for(let j=0;j<heightArr.length;j++){const height=heightArr[j];const refreshRates=heightsMap.get(height);const parentModeIndex=this.getParentModeIndex_(refreshRates);this.addResolution_(parentModeIndex,width,height);const refreshRatesArr=Array.from(refreshRates.keys());for(let k=0;k<refreshRatesArr.length;k++){const rate=refreshRatesArr[k];const modeIndex=refreshRates.get(rate);const isInterlaced=selectedDisplay.modes[modeIndex].isInterlaced;this.addRefreshRate_(parentModeIndex,modeIndex,rate,isInterlaced)}}}for(let i=0;i<selectedDisplay.modes.length;i++){const mode=selectedDisplay.modes[i];const parentModeIndex=this.getParentModeIndex_(modes.get(mode.width).get(mode.height));this.modeToParentModeMap_.set(i,parentModeIndex)}assert(this.modeToParentModeMap_.size===selectedDisplay.modes.length);this.sortResolutionList_()}getParentModeIndex_(refreshRates){const maxRefreshRate=Math.max(...refreshRates.keys());return refreshRates.get(maxRefreshRate)}addResolution_(parentModeIndex,width,height){assert(this.listAllDisplayModes_);this.parentModeToRefreshRateMap_.set(parentModeIndex,[]);const resolutionOption=this.i18n("displayResolutionOnlyMenuItem",width,height);this.push("displayModeList_",{name:resolutionOption,value:parentModeIndex})}addRefreshRate_(parentModeIndex,modeIndex,rate,isInterlaced){assert(this.listAllDisplayModes_);let refreshRate=Number(rate).toFixed(2);if(refreshRate.endsWith(".00")){refreshRate=refreshRate.substring(0,refreshRate.length-3)}const id=isInterlaced?"displayRefreshRateInterlacedMenuItem":"displayRefreshRateMenuItem";const refreshRateOption=this.i18n(id,refreshRate.toString());this.parentModeToRefreshRateMap_.get(parentModeIndex).push({name:refreshRateOption,value:modeIndex})}sortResolutionList_(){const getWidthFromResolutionString=str=>Number(str.substr(0,str.indexOf(" ")));this.displayModeList_=this.displayModeList_.sort(((first,second)=>getWidthFromResolutionString(first.name)-getWidthFromResolutionString(second.name))).reverse()}updateDisplayModeStructures_(selectedDisplay){if(this.listAllDisplayModes_){this.parseSplitDisplayModes_(selectedDisplay)}else{this.parseCompoundDisplayModes_(selectedDisplay)}}getSelectedDisplayZoom_(selectedDisplay){const selectedZoom=selectedDisplay.displayZoomFactor;let closestMatch=this.zoomValues_[0].value;let minimumDiff=Math.abs(closestMatch-selectedZoom);for(let i=0;i<this.zoomValues_.length;i++){const currentDiff=Math.abs(this.zoomValues_[i].value-selectedZoom);if(currentDiff<minimumDiff){closestMatch=this.zoomValues_[i].value;minimumDiff=currentDiff}}return closestMatch}getZoomValues_(selectedDisplay){return selectedDisplay.availableDisplayZoomFactors.map((value=>{const ariaValue=Math.round(value*100);return{value:value,ariaValue:ariaValue,label:this.i18n("displayZoomValue",ariaValue.toString())}}))}setSelectedDisplay_(selectedDisplay){this.currentSelectedModeIndex_=-1;this.currentSelectedParentModeIndex_=-1;const numModes=selectedDisplay.modes.length;this.modeValues_=numModes===0?[]:Array.from(Array(numModes).keys());this.zoomValues_=this.getZoomValues_(selectedDisplay);this.set("selectedZoomPref_.value",this.getSelectedDisplayZoom_(selectedDisplay));this.updateDisplayModeStructures_(selectedDisplay);this.selectedDisplay=selectedDisplay;this.selectedTab_=this.displays.indexOf(this.selectedDisplay);const currentModeIndex=this.getSelectedModeIndex_(selectedDisplay);this.currentSelectedModeIndex_=currentModeIndex;this.set("selectedModePref_.value",this.currentSelectedModeIndex_);if(this.listAllDisplayModes_){this.currentSelectedParentModeIndex_=this.modeToParentModeMap_.get(currentModeIndex);this.refreshRateList_=this.parentModeToRefreshRateMap_.get(this.currentSelectedParentModeIndex_)}else{this.currentSelectedParentModeIndex_=currentModeIndex}this.set("selectedParentModePref_.value",this.currentSelectedParentModeIndex_);this.updateLogicalResolutionText_(this.selectedZoomPref_.value)}showDropDownResolutionSetting_(display){return!display.isInternal}showRefreshRateSetting_(display){return this.listAllDisplayModes_&&this.showDropDownResolutionSetting_(display)}showTouchCalibrationSetting_(display){return!display.isInternal&&loadTimeData.getBoolean("enableTouchCalibrationSetting")}showOverscanSetting_(display){return!display.isInternal}showAmbientColorSetting(ambientColorAvailable,display){return ambientColorAvailable&&display&&display.isInternal}hasMultipleDisplays_(){return this.displays.length>1}showDisplaySelectMenu_(displays,selectedDisplay){if(selectedDisplay){return displays.length>1&&!selectedDisplay.isPrimary}return false}getDisplaySelectMenuIndex_(selectedDisplay,primaryDisplayId){if(selectedDisplay&&selectedDisplay.id===primaryDisplayId){return 0}return 1}getDisplayMirrorText_(displays){return this.i18n("displayMirror",displays[0].name)}showUnifiedDesktop(unifiedDesktopAvailable,unifiedDesktopMode,displays,isTabletMode){if(displays===undefined){return false}return unifiedDesktopMode||unifiedDesktopAvailable&&displays.length>1&&!this.isMirrored(displays)&&!isTabletMode}getUnifiedDesktopText_(unifiedDesktopMode){return this.i18n(unifiedDesktopMode?"displayUnifiedDesktopOn":"displayUnifiedDesktopOff")}showMirror(unifiedDesktopMode,displays){if(displays===undefined){return false}return this.isMirrored(displays)||!unifiedDesktopMode&&displays.length>1}isMirrored(displays){return displays!==undefined&&displays.length>0&&!!displays[0].mirroringSourceId}isSelected_(display,selectedDisplay){return display.id===selectedDisplay.id}enableSetResolution_(selectedDisplay){return selectedDisplay.modes.length>1}enableDisplayZoomSlider_(selectedDisplay){return selectedDisplay.availableDisplayZoomFactors.length>1}isBestMode_(selectedDisplay,mode){if(!selectedDisplay.isInternal){return mode.isNative}if(mode.heightInNativePixels===1080){return Math.abs(mode.uiScale-.8)<.001&&Math.abs(mode.deviceScaleFactor-1.25)<.001}return mode.uiScale===1}getResolutionText_(){assertExists(this.selectedDisplay);if(this.selectedDisplay.modes.length===0||this.currentSelectedModeIndex_===-1){return this.i18n("displayResolutionText",this.selectedDisplay.bounds.width.toString(),this.selectedDisplay.bounds.height.toString())}const mode=castExists(this.selectedDisplay.modes[this.selectedModePref_.value]);const widthStr=mode.width.toString();const heightStr=mode.height.toString();if(this.isBestMode_(this.selectedDisplay,mode)){return this.i18n("displayResolutionTextBest",widthStr,heightStr)}else if(mode.isNative){return this.i18n("displayResolutionTextNative",widthStr,heightStr)}return this.i18n("displayResolutionText",widthStr,heightStr)}updateLogicalResolutionText_(zoomFactor){assertExists(this.selectedDisplay);if(!this.selectedDisplay.isInternal){this.logicalResolutionText_="";return}const mode=this.selectedDisplay.modes[this.currentSelectedModeIndex_];const deviceScaleFactor=mode.deviceScaleFactor;const inverseZoomFactor=1/zoomFactor;let logicalResolutionStrId="displayZoomLogicalResolutionText";if(Math.abs(deviceScaleFactor-inverseZoomFactor)<.001){logicalResolutionStrId="displayZoomNativeLogicalResolutionNativeText"}else if(Math.abs(inverseZoomFactor-1)<.001){logicalResolutionStrId="displayZoomLogicalResolutionDefaultText"}let widthStr=Math.round(mode.widthInNativePixels/(deviceScaleFactor*zoomFactor)).toString();let heightStr=Math.round(mode.heightInNativePixels/(deviceScaleFactor*zoomFactor)).toString();if(this.shouldSwapLogicalResolutionText_()){const temp=widthStr;widthStr=heightStr;heightStr=temp}this.logicalResolutionText_=this.i18n(logicalResolutionStrId,widthStr,heightStr)}shouldSwapLogicalResolutionText_(){assertExists(this.selectedDisplay);const mode=this.selectedDisplay.modes[this.currentSelectedModeIndex_];const bounds=this.selectedDisplay.bounds;return bounds.width>bounds.height!==mode.widthInNativePixels>mode.heightInNativePixels}onDisplaySizeSliderDrag_(){if(!this.selectedDisplay){return}const slider=castExists(this.$.displaySizeSlider.shadowRoot.querySelector("#slider"));const zoomFactor=this.$.displaySizeSlider.ticks[slider.value].value;this.updateLogicalResolutionText_(zoomFactor)}onSelectDisplay_(e){const id=e.detail;for(let i=0;i<this.displays.length;++i){const display=this.displays[i];if(id===display.id){if(this.selectedDisplay!==display){this.setSelectedDisplay_(display)}return}}}onSelectDisplayTab_(){const{selected:selected}=castExists(this.shadowRoot.querySelector("cr-tabs"));if(this.selectedTab_!==selected){this.setSelectedDisplay_(this.displays[selected])}}onTouchCalibrationClick_(){getDisplayApi().showNativeTouchCalibration(this.selectedDisplay.id)}updatePrimaryDisplay_(e){if(!this.selectedDisplay){return}if(this.selectedDisplay.id===this.primaryDisplayId){return}if(!e.target.value){return}const properties={isPrimary:true};getDisplayApi().setDisplayProperties(this.selectedDisplay.id,properties).then((()=>this.setPropertiesCallback_()));this.displaySettingsProvider.recordChangingDisplaySettings(DisplaySettingsType.kPrimaryDisplay,{})}onSelectedParentModeChange_(newModeIndex){if(this.currentSelectedParentModeIndex_===newModeIndex){return}if(!this.hasNewParentModeBeenSet()){return}this.set("selectedModePref_.value",this.selectedParentModePref_.value)}hasNewParentModeBeenSet(){if(this.currentSelectedParentModeIndex_===-1){return false}return this.currentSelectedParentModeIndex_!==this.selectedParentModePref_.value}hasNewModeBeenSet(){if(this.currentSelectedModeIndex_===-1){return false}if(this.currentSelectedParentModeIndex_!==this.selectedParentModePref_.value){return true}return this.currentSelectedModeIndex_!==this.selectedModePref_.value}onSelectedModeChange_(newModeIndex){if(this.currentSelectedModeIndex_===newModeIndex){return}if(!this.hasNewModeBeenSet()){return}assertExists(this.selectedDisplay);const properties={displayMode:this.selectedDisplay.modes[this.selectedModePref_.value]};this.refreshRateList_=castExists(this.parentModeToRefreshRateMap_.get(this.selectedParentModePref_.value));getDisplayApi().setDisplayProperties(this.selectedDisplay.id,properties).then((()=>this.setPropertiesCallback_()));const currentMode=this.selectedDisplay.modes[this.currentSelectedModeIndex_];const newMode=this.selectedDisplay.modes[this.selectedModePref_.value];const displaySettingsType=currentMode.height===newMode.height&&currentMode.width===newMode.width?DisplaySettingsType.kRefreshRate:DisplaySettingsType.kResolution;this.displaySettingsProvider.recordChangingDisplaySettings(displaySettingsType,{isInternalDisplay:this.selectedDisplay.isInternal,displayId:BigInt(this.selectedDisplay.id)})}onSelectedZoomChange_(){if(this.currentSelectedModeIndex_===-1||!this.selectedDisplay){return}const properties={displayZoomFactor:this.selectedZoomPref_.value};getDisplayApi().setDisplayProperties(this.selectedDisplay.id,properties).then((()=>this.setPropertiesCallback_()));this.displaySettingsProvider.recordChangingDisplaySettings(DisplaySettingsType.kScaling,{isInternalDisplay:this.selectedDisplay.isInternal,displayId:BigInt(this.selectedDisplay.id)})}showAutoRotateOption_(selectedDisplay){return selectedDisplay.isAutoRotationAllowed}onOrientationChange_(event){const select=cast(event.target,HTMLSelectElement);const value=parseInt(select.value,10);assertExists(this.selectedDisplay);assert(value!==-1||this.selectedDisplay.isAutoRotationAllowed);const properties={rotation:value};getDisplayApi().setDisplayProperties(this.selectedDisplay.id,properties).then((()=>this.setPropertiesCallback_()));let orientation=DisplaySettingsOrientationOption.k0Degree;if(value===-1){orientation=DisplaySettingsOrientationOption.kAuto}else if(value===90){orientation=DisplaySettingsOrientationOption.k90Degree}else if(value===180){orientation=DisplaySettingsOrientationOption.k180Degree}else if(value===270){orientation=DisplaySettingsOrientationOption.k270Degree}this.displaySettingsProvider.recordChangingDisplaySettings(DisplaySettingsType.kOrientation,{isInternalDisplay:this.selectedDisplay.isInternal,orientation:orientation})}onMirroredClick_(event){event.currentTarget.blur();const mirrorModeInfo={mode:this.isMirrored(this.displays)?MirrorMode.OFF:MirrorMode.NORMAL};getDisplayApi().setMirrorMode(mirrorModeInfo).then((()=>{const error=chrome.runtime.lastError;if(error){console.error("setMirrorMode Error: "+error.message)}}));this.displaySettingsProvider.recordChangingDisplaySettings(DisplaySettingsType.kMirrorMode,{mirrorModeStatus:mirrorModeInfo.mode===MirrorMode.NORMAL})}onUnifiedDesktopClick_(){const properties={isUnified:!this.unifiedDesktopMode_};getDisplayApi().setDisplayProperties(this.primaryDisplayId,properties).then((()=>this.setPropertiesCallback_()));this.displaySettingsProvider.recordChangingDisplaySettings(DisplaySettingsType.kUnifiedMode,{unifiedModeStatus:properties.isUnified})}onOverscanClick_(e){e.preventDefault();assert(this.selectedDisplay);this.overscanDisplayId=this.selectedDisplay.id;this.showOverscanDialog_(true);this.displaySettingsProvider.recordChangingDisplaySettings(DisplaySettingsType.kOverscan,{isInternalDisplay:this.selectedDisplay.isInternal})}onCloseOverscanDialog_(){focusWithoutInk(castExists(this.shadowRoot.getElementById("overscan")))}updateDisplayInfo_(){let displayIds="";let primaryDisplay=undefined;let selectedDisplay=undefined;for(let i=0;i<this.displays.length;++i){const display=this.displays[i];if(displayIds){displayIds+=","}displayIds+=display.id;if(display.isPrimary&&!primaryDisplay){primaryDisplay=display}if(this.selectedDisplay&&display.id===this.selectedDisplay.id){selectedDisplay=display}}this.displayIds=displayIds;this.primaryDisplayId=primaryDisplay&&primaryDisplay.id||"";selectedDisplay=selectedDisplay||primaryDisplay||this.displays&&this.displays[0];this.setSelectedDisplay_(selectedDisplay);this.unifiedDesktopMode_=!!primaryDisplay&&primaryDisplay.isUnified;if(!this.pendingSettingId_){return}this.showDeepLink(this.pendingSettingId_).then((result=>{if(result.deepLinkShown){this.pendingSettingId_=null}}))}setPropertiesCallback_(){if(chrome.runtime.lastError){console.error("setDisplayProperties Error: "+chrome.runtime.lastError.message)}}shouldShowArrangementSection(){if(!this.displays){return false}return this.hasMultipleDisplays_()||this.isMirrored(this.displays)}onDisplaysChanged_(){flush();const displayLayout=this.shadowRoot.querySelector("display-layout");if(displayLayout){displayLayout.updateDisplays(this.displays,this.layouts,this.mirroringDestinationIds)}}getInvalidDisplayId(){return this.invalidDisplayId_}getRefreshRateList(){return this.refreshRateList_}getModeToParentModeMap(){return this.modeToParentModeMap_}getParentModeToRefreshRateMap(){return this.parentModeToRefreshRateMap_}getSelectedZoomPref(){return this.selectedZoomPref_}}customElements.define(SettingsDisplayElement.is,SettingsDisplayElement);function getTemplate$1n(){return html`<!--_html_template_start_--><style include="settings-shared input-device-settings-shared">#header{display:flex;height:24px;padding:12px 0}.subsection{margin-bottom:0;margin-top:8px}#description{color:var(--cr-secondary-text-color);margin-inline-start:20px}</style>
<template is="dom-repeat" items="[[graphicsTablets]]" as="graphicsTablet" index-as="index" restamp>
    <div class="device" data-evdev-id$="[[graphicsTablet.id]]">
      <h2 class="subsection-header" id="graphicsTabletName">
        [[graphicsTablet.name]]
      </h2>
      <div class="subsection">
        <cr-link-row id="customizeTabletButtons" class="bottom-divider" on-click="onCustomizeTabletButtonsClick" aria-describedby="graphicsTabletName" label="$i18n{customizeTabletButtonsLabel}">
        </cr-link-row>
        <cr-link-row id="customizePenButtons" class="hr bottom-divider" on-click="onCustomizePenButtonsClick" aria-describedby="graphicsTabletName" label="$i18n{customizePenButtonsLabel}">
        </cr-link-row>
      </div>
    </div>
</template>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsGraphicsTabletSubpageElementBase=RouteObserverMixin(I18nMixin(PolymerElement));class SettingsGraphicsTabletSubpageElement extends SettingsGraphicsTabletSubpageElementBase{static get is(){return"settings-graphics-tablet-subpage"}static get template(){return getTemplate$1n()}static get properties(){return{prefs:{type:Object,notify:true},graphicsTablets:{type:Array,observer:"onGraphicsTabletListUpdated"}}}currentRouteChanged(route){if(route!==routes.GRAPHICS_TABLET){return}}onGraphicsTabletListUpdated(newGraphicsTabletList,oldGraphicsTabletList){if(!oldGraphicsTabletList){return}const{msgId:msgId,deviceNames:deviceNames}=getDeviceStateChangesToAnnounce(newGraphicsTabletList,oldGraphicsTabletList);for(const deviceName of deviceNames){getInstance().announce(this.i18n(msgId,deviceName))}}onCustomizeTabletButtonsClick(e){Router.getInstance().navigateTo(routes.CUSTOMIZE_TABLET_BUTTONS,this.getSelectedGraphicsTabletUrl(e),true)}onCustomizePenButtonsClick(e){Router.getInstance().navigateTo(routes.CUSTOMIZE_PEN_BUTTONS,this.getSelectedGraphicsTabletUrl(e),true)}getSelectedGraphicsTabletUrl(e){const customizeTabletButton=cast(e.target,CrLinkRowElement);const closestTablet=castExists(customizeTabletButton.closest(".device"));return new URLSearchParams({graphicsTabletId:encodeURIComponent(closestTablet.getAttribute("data-evdev-id"))})}}customElements.define(SettingsGraphicsTabletSubpageElement.is,SettingsGraphicsTabletSubpageElement);function getTemplate$1m(){return html`<!--_html_template_start_--><style include="settings-shared input-device-settings-shared"></style>
<template is="dom-if" if="[[!hasKeyboards(keyboards.length)]]">
  <div id="noKeyboardsConnectedContainer" class="settings-box start first">
    <h2 id="noKeyboardsConnectedMessage">
      $i18n{noKeyboardsConnected}
    </h2>
  </div>
</template>
<template is="dom-if" if="[[hasKeyboards(keyboards.length)]]">
  <template is="dom-repeat" items="[[keyboards]]" as="keyboard" index-as="index" restamp>
    <settings-per-device-keyboard-subsection keyboard="[[keyboard]]" keyboard-policies="[[keyboardPolicies]]" keyboard-index="[[index]]" is-last-device="[[computeIsLastDevice(index, keyboards.length)]]">
    </settings-per-device-keyboard-subsection>
  </template>
</template>

<template is="dom-if" if="[[shouldShowDiacriticSetting]]">
<h2 class="subsection-header">$i18n{keyboardHoldingKeys}</h2>
<div class="subsection">
    <settings-toggle-button class="hr continuation" pref="{{prefs.settings.language.physical_keyboard_enable_diacritics_on_longpress}}" label="$i18n{keyboardAccentMarks}" sub-label="$i18n{keyboardAccentMarksSubLabel}" deep-link-focus-id$="[[Setting.kShowDiacritic]]">
    </settings-toggle-button>
  <settings-toggle-button class="hr continuation" pref="{{prefs.settings.language.xkb_auto_repeat_enabled_r2}}" label="$i18n{keyboardEnableAutoRepeat}" sub-label="$i18n{keyboardEnableAutoRepeatSubLabel}" deep-link-focus-id$="[[Setting.kKeyboardAutoRepeat]]">
  </settings-toggle-button>
  <iron-collapse opened="[[prefs.settings.language.xkb_auto_repeat_enabled_r2.value]]">
    <div class="settings-box continuation">
      <div class="start" id="repeatDelayLabel" aria-hidden="true">
        $i18n{keyRepeatDelay}
      </div>
      <settings-slider id="delaySlider" pref="{{prefs.settings.language.xkb_auto_repeat_delay_r2}}" ticks="[[autoRepeatDelays]]" disabled="[[
              !prefs.settings.language.xkb_auto_repeat_enabled_r2.value]]" label-aria="$i18n{keyRepeatDelay}" label-min="[[getRepeatDelaySliderLabelMin_()]]" label-max="[[getRepeatDelaySliderLabelMax_()]]">
      </settings-slider>
    </div>
    <div class="settings-box continuation">
      <div class="start" id="repeatRateLabel" aria-hidden="true">
        $i18n{keyRepeatRate}
      </div>
      <settings-slider id="repeatRateSlider" pref="{{
              prefs.settings.language.xkb_auto_repeat_interval_r2}}" ticks="[[autoRepeatIntervals]]" disabled="[[
              !prefs.settings.language.xkb_auto_repeat_enabled_r2.value]]" label-aria="$i18n{keyRepeatRate}" label-min="$i18n{keyRepeatRateSlow}" label-max="$i18n{keyRepeatRateFast}">
      </settings-slider>
    </div>
  </iron-collapse>
</div>
</template>
<template is="dom-if" if="[[!shouldShowDiacriticSetting]]">
  <settings-toggle-button class="hr" pref="{{prefs.settings.language.xkb_auto_repeat_enabled_r2}}" label="$i18n{keyboardEnableAutoRepeat}" deep-link-focus-id$="[[Setting.kKeyboardAutoRepeat]]">
  </settings-toggle-button>
  <iron-collapse opened="[[prefs.settings.language.xkb_auto_repeat_enabled_r2.value]]">
    <div class="settings-box continuation embedded">
      <div class="start" id="repeatDelayLabel" aria-hidden="true">
        $i18n{keyRepeatDelay}
      </div>
      <settings-slider id="delaySlider" pref="{{prefs.settings.language.xkb_auto_repeat_delay_r2}}" ticks="[[autoRepeatDelays]]" disabled="[[
              !prefs.settings.language.xkb_auto_repeat_enabled_r2.value]]" label-aria="$i18n{keyRepeatDelay}" label-min="[[getRepeatDelaySliderLabelMin_()]]" label-max="[[getRepeatDelaySliderLabelMax_()]]">
      </settings-slider>
    </div>
    <div class="settings-box continuation embedded">
      <div class="start" id="repeatRateLabel" aria-hidden="true">
        $i18n{keyRepeatRate}
      </div>
      <settings-slider id="repeatRateSlider" pref="{{prefs.settings.language.xkb_auto_repeat_interval_r2}}" ticks="[[autoRepeatIntervals]]" disabled="[[!prefs.settings.language.xkb_auto_repeat_enabled_r2.value]]" label-aria="$i18n{keyRepeatRate}" label-min="$i18n{keyRepeatRateSlow}" label-max="$i18n{keyRepeatRateFast}">
      </settings-slider>
    </div>
  </iron-collapse>
</template>
<cr-link-row id="keyboardShortcutViewer" class="hr" on-click="onShowKeyboardShortcutViewerClick" label="$i18n{showKeyboardShortcutViewer}" external deep-link-focus-id$="[[Setting.kKeyboardShortcuts]]">
</cr-link-row>
<cr-link-row id="inputRow" class="hr" on-click="onShowInputSettingsClick" label="$i18n{keyboardShowInputSettings}" role-description="$i18n{subpageArrowRoleDescription}">
</cr-link-row>
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsPerDeviceKeyboardElementBase=DeepLinkingMixin(RouteObserverMixin(I18nMixin(PolymerElement)));class SettingsPerDeviceKeyboardElement extends SettingsPerDeviceKeyboardElementBase{constructor(){super(...arguments);this.shouldShowDiacriticSetting=loadTimeData.getBoolean("allowDiacriticsOnPhysicalKeyboardLongpress");this.browserProxy=DevicePageBrowserProxyImpl.getInstance()}static get is(){return"settings-per-device-keyboard"}static get template(){return getTemplate$1m()}static get properties(){return{prefs:{type:Object,notify:true},keyboards:{type:Array,observer:"onKeyboardListUpdated"},keyboardPolicies:{type:Object},autoRepeatDelays:{type:Array,value(){const autoRepeatDelays=[2e3,1500,1e3,500,300,200,150];return isRevampWayfindingEnabled()?autoRepeatDelays.reverse():autoRepeatDelays},readOnly:true},autoRepeatIntervals:{type:Array,value:[2e3,1e3,500,300,200,100,50,30,20],readOnly:true},supportedSettingIds:{type:Object,value:()=>new Set([Setting.kKeyboardAutoRepeat,Setting.kKeyboardShortcuts])},isRevampWayfindingEnabled_:{type:Boolean,value:()=>isRevampWayfindingEnabled(),readOnly:true},shouldShowDiacriticSetting:Boolean}}connectedCallback(){super.connectedCallback();this.browserProxy.initializeKeyboard()}currentRouteChanged(route){if(route!==routes.PER_DEVICE_KEYBOARD){return}this.attemptDeepLink()}onKeyboardListUpdated(newKeyboardList,oldKeyboardList){if(!oldKeyboardList){return}const{msgId:msgId,deviceNames:deviceNames}=getDeviceStateChangesToAnnounce(newKeyboardList,oldKeyboardList);for(const deviceName of deviceNames){getInstance().announce(this.i18n(msgId,deviceName))}}onShowKeyboardShortcutViewerClick(){this.browserProxy.showKeyboardShortcutViewer()}onShowInputSettingsClick(){Router.getInstance().navigateTo(routes.OS_LANGUAGES_INPUT,undefined,true)}hasKeyboards(){return this.keyboards.length>0}computeIsLastDevice(index){return index===this.keyboards.length-1}getRepeatDelaySliderLabelMin_(){return this.i18n(this.isRevampWayfindingEnabled_?"keyRepeatDelayShort":"keyRepeatDelayLong")}getRepeatDelaySliderLabelMax_(){return this.i18n(this.isRevampWayfindingEnabled_?"keyRepeatDelayLong":"keyRepeatDelayShort")}}customElements.define(SettingsPerDeviceKeyboardElement.is,SettingsPerDeviceKeyboardElement);function getTemplate$1l(){return html`<!--_html_template_start_--><style include="settings-shared input-device-settings-shared">.settings-box{justify-content:space-between;padding-inline-start:0}</style>

<div class="settings-box" id="fkeyRow">
  <div>
    <div class="start key-container">
      <div id="keyLabel" aria-hidden="true">[[keyLabel]]</div>
    </div>
  </div>
  <settings-dropdown-menu id="keyDropdown" label="[[keyLabel]]" pref="{{pref}}" menu-options="[[shortcutOptions]]">
  </settings-dropdown-menu>
</div><!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getTopRowActionKeyString(topRowActionKey){switch(topRowActionKey){case TopRowActionKey.kBack:return loadTimeData.getString("backKeyLabel");case TopRowActionKey.kForward:return loadTimeData.getString("forwardKeyLabel");case TopRowActionKey.kRefresh:return loadTimeData.getString("refreshKeyLabel");case TopRowActionKey.kFullscreen:return loadTimeData.getString("fullscreenKeyLabel");case TopRowActionKey.kOverview:return loadTimeData.getString("overviewKeyLabel");case TopRowActionKey.kScreenshot:return loadTimeData.getString("screenshotKeyLabel");case TopRowActionKey.kScreenBrightnessDown:return loadTimeData.getString("screenBrightnessDownKeyLabel");case TopRowActionKey.kScreenBrightnessUp:return loadTimeData.getString("screenBrightnessUpKeyLabel");case TopRowActionKey.kMicrophoneMute:return loadTimeData.getString("microphoneMuteKeyLabel");case TopRowActionKey.kVolumeMute:return loadTimeData.getString("muteKeyLabel");case TopRowActionKey.kVolumeDown:return loadTimeData.getString("volumeDownKeyLabel");case TopRowActionKey.kVolumeUp:return loadTimeData.getString("volumeUpKeyLabel");case TopRowActionKey.kKeyboardBacklightToggle:return loadTimeData.getString("backlightToggleKeyLabel");case TopRowActionKey.kKeyboardBacklightDown:return loadTimeData.getString("backlightDownKeyLabel");case TopRowActionKey.kKeyboardBacklightUp:return loadTimeData.getString("backlightUpKeyLabel");case TopRowActionKey.kNextTrack:return loadTimeData.getString("trackNextKeyLabel");case TopRowActionKey.kPreviousTrack:return loadTimeData.getString("trackPreviousKeyLabel");case TopRowActionKey.kPlayPause:return loadTimeData.getString("playPauseKeyLabel");case TopRowActionKey.kAllApplications:return loadTimeData.getString("allApplicationsKeyLabel");case TopRowActionKey.kEmojiPicker:return loadTimeData.getString("emojiPickerKeyLabel");case TopRowActionKey.kDictation:return loadTimeData.getString("dicationKeyLabel");case TopRowActionKey.kPrivacyScreenToggle:return loadTimeData.getString("privacyScreenToggleKeyLabel");case TopRowActionKey.kNone:case TopRowActionKey.kUnknown:return"";default:assertNotReached()}}const fKeyLabels={[Fkey.F11]:loadTimeData.getString("f11KeyLabel"),[Fkey.F12]:loadTimeData.getString("f12KeyLabel")};const FkeyRowElementBase=RouteObserverMixin(I18nMixin(PolymerElement));class FkeyRowElement extends FkeyRowElementBase{static get is(){return"fkey-row"}static get template(){return getTemplate$1l()}static get properties(){return{key:{type:String},keyLabel:{type:String,computed:"computeKeyLabel(key)"},pref:{type:Object},keyboard:{type:Object},shortcutOptions:{type:Array}}}currentRouteChanged(route){if(route!==routes.PER_DEVICE_KEYBOARD_REMAP_KEYS){return}this.shortcutOptions=this.getMenuOptions()}getTopRowKeyLabel(){const fkeyIndex=this.key===Fkey.F11?0:1;assert(this.keyboard.topRowActionKeys);return getTopRowActionKeyString(this.keyboard.topRowActionKeys[fkeyIndex])}computeKeyLabel(){assert(this.key in fKeyLabels);return fKeyLabels[this.key]}getFkeyShortcutOptions(){const topRowKeyLabel=this.getTopRowKeyLabel();const messageIdSuffix=this.keyboard.settings.topRowAreFkeys?"":"Search";return[{value:ExtendedFkeysModifier.kShift,name:this.i18n(`fKeyShiftOption${messageIdSuffix}`,topRowKeyLabel)},{value:ExtendedFkeysModifier.kCtrlShift,name:this.i18n(`fKeyCtrlShiftOption${messageIdSuffix}`,topRowKeyLabel)},{value:ExtendedFkeysModifier.kAlt,name:this.i18n(`fKeyAltOption${messageIdSuffix}`,topRowKeyLabel)}]}getMenuOptions(){return[{value:ExtendedFkeysModifier.kDisabled,name:this.i18n("perDeviceKeyboardKeyDisabled")},...this.getFkeyShortcutOptions()]}}customElements.define(FkeyRowElement.is,FkeyRowElement);function getTemplate$1k(){return html`<!--_html_template_start_--><style include="settings-shared input-device-settings-shared">#header{display:flex}:host([key-state=default-remapping]) .key-container{background-color:var(--cros-bg-color-dropped-elevation-1);border:none;box-shadow:0 1px 1px var(--cros-bg-color-dropped-elevation-1)}:host([key-state=modifier-remapped]) .key-container{background-color:var(--cros-sys-highlight_shape);border:none;box-shadow:0 1px 1px var(--cros-sys-highlight_shape)}.settings-box{justify-content:space-between;padding-inline-start:0}iron-icon{--iron-icon-fill-color:var(--cros-icon-color-secondary);--iron-icon-height:20px;--iron-icon-width:20px;align-self:center;justify-self:center}:host([remove-top-border]) .settings-box{border-top:none}</style>
<div class="settings-box">
  <div>
    <div id="keyLabelContainer" class="start key-container">
      <template is="dom-if" if="[[!keyIcon]]" restamp>
        <div id="keyLabel" aria-hidden="true">[[keyLabel]]</div>
      </template>
      <template is="dom-if" if="[[keyIcon]]" restamp>
        <iron-icon icon="[[keyIcon]]"></iron-icon>
      </template>
    </div>
  </div>
  <settings-dropdown-menu id="keyDropdown" label="[[keyLabel]]" pref="{{pref}}" menu-options="[[keyMapTargets]]">
  </settings-dropdown-menu>
</div>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var KeyState;(function(KeyState){KeyState["DEFAULT_REMAPPING"]="default-remapping";KeyState["MODIFIER_REMAPPED"]="modifier-remapped"})(KeyState||(KeyState={}));const KeyboardRemapModifierKeyRowElementBase=I18nMixin(PolymerElement);class KeyboardRemapModifierKeyRowElement extends KeyboardRemapModifierKeyRowElementBase{static get is(){return"keyboard-remap-modifier-key-row"}static get properties(){return{keyLabel:{type:String,value:"",computed:"getKeyLabel(metaKey)"},metaKeyLabel:{type:String,value:"",computed:"getMetaKeyLabel(metaKey)"},keyState:{type:String,value:KeyState.DEFAULT_REMAPPING,reflectToAttribute:true,computed:"computeKeyState(pref.value)"},pref:{type:Object},metaKey:{type:Number},key:{type:Number},defaultRemappings:{type:Object},keyMapTargets:{type:Object},keyIcon:{type:String,value:"",computed:"getKeyIcon(key, metaKey)"},removeTopBorder:{type:Boolean,reflectToAttribute:true}}}ready(){super.ready();this.setUpKeyMapTargets()}static get template(){return getTemplate$1k()}computeKeyState(){return this.defaultRemappings[this.key]===this.pref.value?KeyState.DEFAULT_REMAPPING:KeyState.MODIFIER_REMAPPED}getMetaKeyLabel(){switch(this.metaKey){case MetaKey.kCommand:{return this.i18n("perDeviceKeyboardKeyCommand")}case MetaKey.kExternalMeta:{return this.i18n("perDeviceKeyboardKeyMeta")}case MetaKey.kLauncher:case MetaKey.kSearch:return this.i18n("perDeviceKeyboardKeySearch")}}getKeyLabel(){switch(this.key){case ModifierKey.kAlt:{return this.i18n("perDeviceKeyboardKeyAlt")}case ModifierKey.kAssistant:{return this.i18n("perDeviceKeyboardKeyAssistant")}case ModifierKey.kBackspace:{return this.i18n("perDeviceKeyboardKeyBackspace")}case ModifierKey.kCapsLock:{return this.i18n("perDeviceKeyboardKeyCapsLock")}case ModifierKey.kControl:{return this.i18n("perDeviceKeyboardKeyCtrl")}case ModifierKey.kEscape:{return this.i18n("perDeviceKeyboardKeyEscape")}case ModifierKey.kMeta:{return this.getMetaKeyLabel()}default:assertNotReached("Invalid modifier key: "+this.key)}}setUpKeyMapTargets(){this.keyMapTargets=[{value:ModifierKey.kMeta,name:this.i18n("perDeviceKeyboardKeySearch")},{value:ModifierKey.kControl,name:this.i18n("perDeviceKeyboardKeyCtrl")},{value:ModifierKey.kAlt,name:this.i18n("perDeviceKeyboardKeyAlt")},{value:ModifierKey.kCapsLock,name:this.i18n("perDeviceKeyboardKeyCapsLock")},{value:ModifierKey.kEscape,name:this.i18n("perDeviceKeyboardKeyEscape")},{value:ModifierKey.kBackspace,name:this.i18n("perDeviceKeyboardKeyBackspace")},{value:ModifierKey.kAssistant,name:this.i18n("perDeviceKeyboardKeyAssistant")},{value:ModifierKey.kVoid,name:this.i18n("perDeviceKeyboardKeyDisabled")}]}getKeyIcon(){if(this.key===ModifierKey.kMeta){if(this.metaKey===MetaKey.kSearch){return"cr:search"}if(this.metaKey===MetaKey.kLauncher){return"os-settings:launcher"}}else if(this.key===ModifierKey.kAssistant){return"os-settings:assistant"}return""}}customElements.define(KeyboardRemapModifierKeyRowElement.is,KeyboardRemapModifierKeyRowElement);function getTemplate$1j(){return html`<!--_html_template_start_--><style include="settings-shared input-device-settings-shared">.settings-box{justify-content:space-between;padding-inline-start:0}</style>
<div class="settings-box" id="sixPackKeyRow">
  <div>
    <div class="start key-container">
      <div id="keyLabel" aria-hidden="true">[[keyLabel]]</div>
    </div>
  </div>
  <settings-dropdown-menu id="keyDropdown" label="[[keyLabel]]" pref="{{pref}}" menu-options="[[computeMenuOptions(key)]]">
  </settings-dropdown-menu>
</div><!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const disabledMenuOption={value:SixPackShortcutModifier.kNone,name:loadTimeData.getString("sixPackKeyDisabled")};const sixPackKeyProperties={[SixPackKey.DELETE]:{menuOptions:[{value:SixPackShortcutModifier.kAlt,name:loadTimeData.getString("sixPackKeyDeleteAlt")},{value:SixPackShortcutModifier.kSearch,name:loadTimeData.getString("sixPackKeyDeleteSearch")},disabledMenuOption],label:loadTimeData.getString("sixPackKeyLabelDelete")},[SixPackKey.HOME]:{menuOptions:[{value:SixPackShortcutModifier.kAlt,name:loadTimeData.getString("sixPackKeyHomeAlt")},{value:SixPackShortcutModifier.kSearch,name:loadTimeData.getString("sixPackKeyHomeSearch")},disabledMenuOption],label:loadTimeData.getString("sixPackKeyLabelHome")},[SixPackKey.END]:{menuOptions:[{value:SixPackShortcutModifier.kAlt,name:loadTimeData.getString("sixPackKeyEndAlt")},{value:SixPackShortcutModifier.kSearch,name:loadTimeData.getString("sixPackKeyEndSearch")},disabledMenuOption],label:loadTimeData.getString("sixPackKeyLabelEnd")},[SixPackKey.INSERT]:{menuOptions:[{value:SixPackShortcutModifier.kSearch,name:loadTimeData.getString("sixPackKeyInsertSearch")},disabledMenuOption],label:loadTimeData.getString("sixPackKeyLabelInsert")},[SixPackKey.PAGE_DOWN]:{menuOptions:[{value:SixPackShortcutModifier.kAlt,name:loadTimeData.getString("sixPackKeyPageDownAlt")},{value:SixPackShortcutModifier.kSearch,name:loadTimeData.getString("sixPackKeyPageDownSearch")},disabledMenuOption],label:loadTimeData.getString("sixPackKeyLabelPageDown")},[SixPackKey.PAGE_UP]:{menuOptions:[{value:SixPackShortcutModifier.kAlt,name:loadTimeData.getString("sixPackKeyPageUpAlt")},{value:SixPackShortcutModifier.kSearch,name:loadTimeData.getString("sixPackKeyPageUpSearch")},disabledMenuOption],label:loadTimeData.getString("sixPackKeyLabelPageUp")}};class KeyboardSixPackKeyRowElement extends PolymerElement{static get is(){return"keyboard-six-pack-key-row"}static get template(){return getTemplate$1j()}static get properties(){return{key:{type:String},modifier:{type:Number},pref:{type:Object},keyLabel:{type:String,computed:"computeKeyLabel(key)"}}}computeMenuOptions(){assert(this.key in sixPackKeyProperties);return sixPackKeyProperties[this.key].menuOptions}computeKeyLabel(){assert(this.key in sixPackKeyProperties);return sixPackKeyProperties[this.key].label}}customElements.define(KeyboardSixPackKeyRowElement.is,KeyboardSixPackKeyRowElement);function getTemplate$1i(){return html`<!--_html_template_start_--><style include="settings-shared input-device-settings-shared">#header{display:flex;height:24px;margin-top:12px}.subsection{margin-bottom:0}#description{color:var(--cr-secondary-text-color);font:var(--cros-button-2-font);margin-inline-start:20px}.subsection-header{color:var(--cr-secondary-text-color);font:var(--cros-body-2-font);height:24px;margin:12px 0;padding-inline-start:0}#modifierKeysHeader{margin-bottom:0}</style>
<div id="header">
  <div id="description">[[computeKeyboardKeysDescription(keyboard.*)]]</div>
</div>
<div class="subsection">
  <template is="dom-if" if="[[!isAltClickAndSixPackCustomizationEnabled]]">
    <keyboard-remap-modifier-key-row default-remappings="[[defaultRemappings]]" key="[[modifierKey.kMeta]]" id="metaKey" meta-key="[[keyboard.metaKey]]" aria-label="$i18n{perDeviceKeyboardKeySearch}" pref="{{fakeMetaPref}}" remove-top-border>
    </keyboard-remap-modifier-key-row>
    <keyboard-remap-modifier-key-row default-remappings="[[defaultRemappings]]" key="[[modifierKey.kControl]]" id="ctrlKey" meta-key="[[keyboard.metaKey]]" aria-label="$i18n{perDeviceKeyboardKeyCtrl}" pref="{{fakeCtrlPref}}">
    </keyboard-remap-modifier-key-row>
    <keyboard-remap-modifier-key-row default-remappings="[[defaultRemappings]]" key="[[modifierKey.kAlt]]" id="altKey" meta-key="[[keyboard.metaKey]]" aria-label="$i18n{perDeviceKeyboardKeyAlt}" pref="{{fakeAltPref}}">
    </keyboard-remap-modifier-key-row>
    <keyboard-remap-modifier-key-row default-remappings="[[defaultRemappings]]" key="[[modifierKey.kEscape]]" id="escapeKey" meta-key="[[keyboard.metaKey]]" aria-label="$i18n{perDeviceKeyboardKeyEscape}" pref="{{fakeEscPref}}">
    </keyboard-remap-modifier-key-row>
    <keyboard-remap-modifier-key-row default-remappings="[[defaultRemappings]]" key="[[modifierKey.kBackspace]]" id="backspaceKey" meta-key="[[keyboard.metaKey]]" aria-label="$i18n{perDeviceKeyboardKeyBackspace}" pref="{{fakeBackspacePref}}">
    </keyboard-remap-modifier-key-row>
    <template is="dom-if" if="[[hasAssistantKey]]" restamp>
      <keyboard-remap-modifier-key-row default-remappings="[[defaultRemappings]]" key="[[modifierKey.kAssistant]]" id="assistantKey" meta-key="[[keyboard.metaKey]]" aria-label="$i18n{perDeviceKeyboardKeyAssistant}" pref="{{fakeAssistantPref}}">
      </keyboard-remap-modifier-key-row>
    </template>
    <template is="dom-if" if="[[hasCapsLockKey]]" restamp>
      <keyboard-remap-modifier-key-row default-remappings="[[defaultRemappings]]" key="[[modifierKey.kCapsLock]]" id="capsLockKey" meta-key="[[keyboard.metaKey]]" aria-label="$i18n{perDeviceKeyboardKeyCapsLock}" pref="{{fakeCapsLockPref}}">
      </keyboard-remap-modifier-key-row>
    </template>
  </template>
  <template is="dom-if" if="[[isAltClickAndSixPackCustomizationEnabled]]">
    <h2 class="subsection-header" id="modifierKeysHeader">
      $i18n{modifierKeysLabel}
    </h2>
    <div class="subsection">
      <keyboard-remap-modifier-key-row default-remappings="[[defaultRemappings]]" key="[[modifierKey.kMeta]]" id="metaKey" meta-key="[[keyboard.metaKey]]" aria-label="$i18n{perDeviceKeyboardKeySearch}" pref="{{fakeMetaPref}}" remove-top-border>
      </keyboard-remap-modifier-key-row>
      <keyboard-remap-modifier-key-row default-remappings="[[defaultRemappings]]" key="[[modifierKey.kControl]]" id="ctrlKey" meta-key="[[keyboard.metaKey]]" aria-label="$i18n{perDeviceKeyboardKeyCtrl}" pref="{{fakeCtrlPref}}">
      </keyboard-remap-modifier-key-row>
      <keyboard-remap-modifier-key-row default-remappings="[[defaultRemappings]]" key="[[modifierKey.kAlt]]" id="altKey" meta-key="[[keyboard.metaKey]]" aria-label="$i18n{perDeviceKeyboardKeyAlt}" pref="{{fakeAltPref}}">
      </keyboard-remap-modifier-key-row>
      <keyboard-remap-modifier-key-row default-remappings="[[defaultRemappings]]" key="[[modifierKey.kEscape]]" id="escapeKey" meta-key="[[keyboard.metaKey]]" aria-label="$i18n{perDeviceKeyboardKeyEscape}" pref="{{fakeEscPref}}">
      </keyboard-remap-modifier-key-row>
      <keyboard-remap-modifier-key-row default-remappings="[[defaultRemappings]]" key="[[modifierKey.kBackspace]]" id="backspaceKey" meta-key="[[keyboard.metaKey]]" aria-label="$i18n{perDeviceKeyboardKeyBackspace}" pref="{{fakeBackspacePref}}">
      </keyboard-remap-modifier-key-row>
      <template is="dom-if" if="[[hasAssistantKey]]" restamp>
        <keyboard-remap-modifier-key-row default-remappings="[[defaultRemappings]]" key="[[modifierKey.kAssistant]]" id="assistantKey" meta-key="[[keyboard.metaKey]]" aria-label="$i18n{perDeviceKeyboardKeyAssistant}" pref="{{fakeAssistantPref}}">
        </keyboard-remap-modifier-key-row>
      </template>
      <template is="dom-if" if="[[hasCapsLockKey]]" restamp>
        <keyboard-remap-modifier-key-row default-remappings="[[defaultRemappings]]" key="[[modifierKey.kCapsLock]]" id="capsLockKey" meta-key="[[keyboard.metaKey]]" aria-label="$i18n{perDeviceKeyboardKeyCapsLock}" pref="{{fakeCapsLockPref}}">
        </keyboard-remap-modifier-key-row>
      </template>
    </div>
    <h2 class="subsection-header" id="otherKeysHeader">
      $i18n{otherKeysLabel}
    </h2>
    <div class="subsection">
  <keyboard-six-pack-key-row modifier="[[keyboard.sixPackKeyRemappings.del]]" key="del" pref="{{deletePref}}" aria-label="$i18n{sixPackKeyLabelDelete}">
  </keyboard-six-pack-key-row>
  <keyboard-six-pack-key-row modifier="[[keyboard.sixPackKeyRemappings.pageDown]]" key="pageDown" pref="{{pageDownPref}}" aria-label="$i18n{sixPackKeyLabelPageDown}">
  </keyboard-six-pack-key-row>
  <keyboard-six-pack-key-row modifier="[[keyboard.sixPackKeyRemappings.pageUp]]" key="pageUp" pref="{{pageUpPref}}" aria-label="$i18n{sixPackKeyLabelPageUp}">
  </keyboard-six-pack-key-row>
  <keyboard-six-pack-key-row modifier="[[keyboard.sixPackKeyRemappings.end]]" key="end" pref="{{endPref}}" aria-label="$i18n{sixPackKeyLabelEnd}">
  </keyboard-six-pack-key-row>
  <keyboard-six-pack-key-row modifier="[[keyboard.sixPackKeyRemappings.home]]" key="home" pref="{{homePref}}" aria-label="$i18n{sixPackKeyLabelHome}">
  </keyboard-six-pack-key-row>
  <keyboard-six-pack-key-row modifier="[[keyboard.sixPackKeyRemappings.insert]]" key="insert" pref="{{insertPref}}" aria-label="$i18n{sixPackKeyLabelInsert}">
  </keyboard-six-pack-key-row>
  <template is="dom-if" if="[[shouldShowFkeys(keyboard.*)]]">
    <fkey-row key="f11" aria-label="$i18n{f11KeyLabel}" pref="{{f11KeyPref}}" keyboard="[[keyboard]]">
    </fkey-row>
    <fkey-row key="f12" aria-label="$i18n{f12KeyLabel}" pref="{{f12KeyPref}}" keyboard="[[keyboard]]">
    </fkey-row>
  </template>
</div></template></div><!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getPrefPolicyFields(policy){if(policy){const enforcement=policy.policyStatus===PolicyStatus.kManaged?chrome.settingsPrivate.Enforcement.ENFORCED:chrome.settingsPrivate.Enforcement.RECOMMENDED;return{controlledBy:chrome.settingsPrivate.ControlledBy.USER_POLICY,enforcement:enforcement,recommendedValue:policy.value}}return{controlledBy:undefined,enforcement:undefined,recommendedValue:undefined}}const SettingsPerDeviceKeyboardRemapKeysElementBase=RouteObserverMixin(I18nMixin(PolymerElement));class SettingsPerDeviceKeyboardRemapKeysElement extends SettingsPerDeviceKeyboardRemapKeysElementBase{constructor(){super(...arguments);this.defaultRemappings={[ModifierKey.kMeta]:ModifierKey.kMeta,[ModifierKey.kControl]:ModifierKey.kControl,[ModifierKey.kAlt]:ModifierKey.kAlt,[ModifierKey.kEscape]:ModifierKey.kEscape,[ModifierKey.kBackspace]:ModifierKey.kBackspace,[ModifierKey.kAssistant]:ModifierKey.kAssistant,[ModifierKey.kCapsLock]:ModifierKey.kCapsLock};this.inputDeviceSettingsProvider=getInputDeviceSettingsProvider()}static get is(){return"settings-per-device-keyboard-remap-keys"}static get template(){return getTemplate$1i()}static get properties(){return{fakeMetaPref:{type:Object,value(){return{key:"fakeMetaKeyRemapPref",type:chrome.settingsPrivate.PrefType.NUMBER,value:ModifierKey.kMeta}}},fakeCtrlPref:{type:Object,value(){return{key:"fakeCtrlKeyRemapPref",type:chrome.settingsPrivate.PrefType.NUMBER,value:ModifierKey.kControl}}},fakeAltPref:{type:Object,value(){return{key:"fakeAltKeyRemapPref",type:chrome.settingsPrivate.PrefType.NUMBER,value:ModifierKey.kAlt}}},fakeEscPref:{type:Object,value(){return{key:"fakeEscKeyRemapPref",type:chrome.settingsPrivate.PrefType.NUMBER,value:ModifierKey.kEscape}}},fakeBackspacePref:{type:Object,value(){return{key:"fakeBackspaceKeyRemapPref",type:chrome.settingsPrivate.PrefType.NUMBER,value:ModifierKey.kBackspace}}},fakeAssistantPref:{type:Object,value(){return{key:"fakeAssistantKeyRemapPref",type:chrome.settingsPrivate.PrefType.NUMBER,value:ModifierKey.kAssistant}}},fakeCapsLockPref:{type:Object,value(){return{key:"fakeCapsLockKeyRemapPref",type:chrome.settingsPrivate.PrefType.NUMBER,value:ModifierKey.kCapsLock}}},insertPref:{type:Object,value(){return{key:"insertPref",type:chrome.settingsPrivate.PrefType.NUMBER,value:SixPackShortcutModifier.kSearch}}},deletePref:{type:Object,value(){return{key:"deletePref",type:chrome.settingsPrivate.PrefType.NUMBER,value:SixPackShortcutModifier.kSearch}}},homePref:{type:Object,value(){return{key:"homePref",type:chrome.settingsPrivate.PrefType.NUMBER,value:SixPackShortcutModifier.kSearch}}},endPref:{type:Object,value(){return{key:"endPref",type:chrome.settingsPrivate.PrefType.NUMBER,value:SixPackShortcutModifier.kSearch}}},pageUpPref:{type:Object,value(){return{key:"pageUpPref",type:chrome.settingsPrivate.PrefType.NUMBER,value:SixPackShortcutModifier.kSearch}}},pageDownPref:{type:Object,value(){return{key:"pageDownPref",type:chrome.settingsPrivate.PrefType.NUMBER,value:SixPackShortcutModifier.kSearch}}},f11KeyPref:{type:Object,value(){return{key:"f11KeyPref",type:chrome.settingsPrivate.PrefType.NUMBER,value:ExtendedFkeysModifier.kDisabled}}},f12KeyPref:{type:Object,value(){return{key:"f12KeyPref",type:chrome.settingsPrivate.PrefType.NUMBER,value:ExtendedFkeysModifier.kDisabled}}},hasAssistantKey:{type:Boolean,value:false},hasCapsLockKey:{type:Boolean,value:false},keyboard:{type:Object},keyboards:{type:Array,value:undefined},metaKeyLabel:{type:String},defaultRemappings:{type:Object},isInitialized:{type:Boolean,value:false},keyboardId:{type:Number,value:-1},isAltClickAndSixPackCustomizationEnabled:{type:Boolean,value(){return loadTimeData.getBoolean("enableAltClickAndSixPackCustomization")},readOnly:true},areF11andF12KeyShortcutsEnabled:{type:Boolean,value(){return loadTimeData.getBoolean("enableF11AndF12KeyShortcuts")},readOnly:true},keyboardPolicies:{type:Object}}}static get observers(){return["onSettingsChanged(fakeMetaPref.value,"+"fakeCtrlPref.value,"+"fakeAltPref.value,"+"fakeEscPref.value,"+"fakeBackspacePref.value,"+"fakeAssistantPref.value,"+"insertPref.value,"+"pageUpPref.value,"+"pageDownPref.value,"+"endPref.value,"+"deletePref.value,"+"homePref.value,"+"f11KeyPref.value,"+"f12KeyPref.value,"+"fakeCapsLockPref.value)","onKeyboardListUpdated(keyboards.*)","onPoliciesChanged(keyboardPolicies)"]}get modifierKey(){return ModifierKey}currentRouteChanged(route){if(route!==routes.PER_DEVICE_KEYBOARD_REMAP_KEYS){return}if(this.hasKeyboards()&&this.keyboardId!==this.getKeyboardIdFromUrl()){this.initializeKeyboard()}}computeModifierRemappings(){const modifierRemappings=new Map;for(const modifier of Object.keys(this.keyboard.settings.modifierRemappings)){const from=Number(modifier);const to=this.keyboard.settings.modifierRemappings[from];if(to===undefined){continue}modifierRemappings.set(from,to)}return modifierRemappings}initializeKeyboard(){this.isInitialized=false;this.keyboardId=this.getKeyboardIdFromUrl();const searchedKeyboard=this.keyboards.find((keyboard=>keyboard.id===this.keyboardId));assert(!!searchedKeyboard);this.keyboard=searchedKeyboard;this.updateDefaultRemapping();this.initializePrefsToIdentity();this.hasAssistantKey=searchedKeyboard.modifierKeys.includes(ModifierKey.kAssistant);this.hasCapsLockKey=searchedKeyboard.modifierKeys.includes(ModifierKey.kCapsLock);Array.from(this.computeModifierRemappings().keys()).forEach((originalKey=>{this.setRemappedKey(originalKey)}));if(this.isAltClickAndSixPackCustomizationEnabled){this.setSixPackKeyRemappings();this.setSixPackKeyRemappingsForPolicies()}if(this.shouldShowFkeys()){this.set("f11KeyPref.value",searchedKeyboard.settings?.f11);this.set("f12KeyPref.value",searchedKeyboard.settings?.f12);this.f11KeyPref={...this.f11KeyPref,...getPrefPolicyFields(this.keyboardPolicies?.f11KeyPolicy)};this.f12KeyPref={...this.f12KeyPref,...getPrefPolicyFields(this.keyboardPolicies?.f12KeyPolicy)}}this.isInitialized=true}keyboardWasDisconnected(id){return!this.keyboards.find((keyboard=>keyboard.id===id))}onKeyboardListUpdated(){if(Router.getInstance().currentRoute!==routes.PER_DEVICE_KEYBOARD_REMAP_KEYS){return}if(!this.hasKeyboards()||this.keyboardWasDisconnected(this.getKeyboardIdFromUrl())){this.keyboardId=-1;Router.getInstance().navigateTo(routes.PER_DEVICE_KEYBOARD);return}this.initializeKeyboard()}setSixPackKeyRemappingsForPolicies(){const homeAndEndPrefPolicyFields=getPrefPolicyFields(this.keyboardPolicies?.homeAndEndKeysPolicy);this.homePref={...this.homePref,...homeAndEndPrefPolicyFields};this.endPref={...this.endPref,...homeAndEndPrefPolicyFields};const pageUpAndPageDownPrefPolicyFields=getPrefPolicyFields(this.keyboardPolicies?.pageUpAndPageDownKeysPolicy);this.pageUpPref={...this.pageUpPref,...pageUpAndPageDownPrefPolicyFields};this.pageDownPref={...this.pageDownPref,...pageUpAndPageDownPrefPolicyFields};this.deletePref={...this.deletePref,...getPrefPolicyFields(this.keyboardPolicies?.deleteKeyPolicy)};this.insertPref={...this.insertPref,...getPrefPolicyFields(this.keyboardPolicies?.insertKeyPolicy)}}initializePrefsToIdentity(){this.set("fakeAltPref.value",ModifierKey.kAlt);this.set("fakeAssitantPref.value",ModifierKey.kAssistant);this.set("fakeBackspacePref.value",ModifierKey.kBackspace);this.set("fakeCtrlPref.value",ModifierKey.kControl);this.set("fakeCapsLockPref.value",ModifierKey.kCapsLock);this.set("fakeEscPref.value",ModifierKey.kEscape);this.set("fakeMetaPref.value",ModifierKey.kMeta)}restoreDefaults(){this.inputDeviceSettingsProvider.restoreDefaultKeyboardRemappings(this.keyboardId)}setRemappedKey(originalKey){const targetKey=this.computeModifierRemappings().get(originalKey);switch(originalKey){case ModifierKey.kAlt:{this.set("fakeAltPref.value",targetKey);break}case ModifierKey.kAssistant:{this.set("fakeAssistantPref.value",targetKey);break}case ModifierKey.kBackspace:{this.set("fakeBackspacePref.value",targetKey);break}case ModifierKey.kCapsLock:{this.set("fakeCapsLockPref.value",targetKey);break}case ModifierKey.kControl:{this.set("fakeCtrlPref.value",targetKey);break}case ModifierKey.kEscape:{this.set("fakeEscPref.value",targetKey);break}case ModifierKey.kMeta:{this.set("fakeMetaPref.value",targetKey);break}}}onSettingsChanged(){if(!this.isInitialized){return}this.keyboard.settings={...this.keyboard.settings,modifierRemappings:this.getUpdatedRemappings()};if(this.isAltClickAndSixPackCustomizationEnabled){this.keyboard.settings={...this.keyboard.settings,sixPackKeyRemappings:this.getSixPackKeyRemappings()}}if(this.shouldShowFkeys()){this.keyboard.settings={...this.keyboard.settings,f11:this.f11KeyPref.value,f12:this.f12KeyPref.value}}this.inputDeviceSettingsProvider.setKeyboardSettings(this.keyboard.id,this.keyboard.settings)}getUpdatedRemappings(){const updatedRemappings={};if(ModifierKey.kAlt!==this.fakeAltPref.value){updatedRemappings[ModifierKey.kAlt]=this.fakeAltPref.value}if(ModifierKey.kAssistant!==this.fakeAssistantPref.value){updatedRemappings[ModifierKey.kAssistant]=this.fakeAssistantPref.value}if(ModifierKey.kBackspace!==this.fakeBackspacePref.value){updatedRemappings[ModifierKey.kBackspace]=this.fakeBackspacePref.value}if(ModifierKey.kCapsLock!==this.fakeCapsLockPref.value){updatedRemappings[ModifierKey.kCapsLock]=this.fakeCapsLockPref.value}if(ModifierKey.kControl!==this.fakeCtrlPref.value){updatedRemappings[ModifierKey.kControl]=this.fakeCtrlPref.value}if(ModifierKey.kEscape!==this.fakeEscPref.value){updatedRemappings[ModifierKey.kEscape]=this.fakeEscPref.value}if(ModifierKey.kMeta!==this.fakeMetaPref.value){updatedRemappings[ModifierKey.kMeta]=this.fakeMetaPref.value}return updatedRemappings}updateDefaultRemapping(){this.defaultRemappings={...this.defaultRemappings,[ModifierKey.kMeta]:this.keyboard.metaKey===MetaKey.kCommand?ModifierKey.kControl:ModifierKey.kMeta,[ModifierKey.kControl]:this.keyboard.metaKey===MetaKey.kCommand?ModifierKey.kMeta:ModifierKey.kControl}}getKeyboardIdFromUrl(){return Number(Router.getInstance().getQueryParameters().get("keyboardId"))}hasKeyboards(){return this.keyboards?.length>0}computeKeyboardKeysDescription(){if(!this.keyboard?.name){return""}const keyboardName=this.keyboard.isExternal?this.keyboard.name:this.i18n("builtInKeyboardName");if(this.isAltClickAndSixPackCustomizationEnabled){return keyboardName}return this.i18n("remapKeyboardKeysDescription",keyboardName)}setSixPackKeyRemappings(){const sixPackKeyRemappings=this.keyboard.settings?.sixPackKeyRemappings;if(!sixPackKeyRemappings){return}Object.entries(sixPackKeyRemappings).forEach((([key,modifier])=>{switch(key){case SixPackKey.DELETE:this.set("deletePref.value",modifier);break;case SixPackKey.INSERT:this.set("insertPref.value",modifier);break;case SixPackKey.HOME:this.set("homePref.value",modifier);break;case SixPackKey.END:this.set("endPref.value",modifier);break;case SixPackKey.PAGE_UP:this.set("pageUpPref.value",modifier);break;case SixPackKey.PAGE_DOWN:this.set("pageDownPref.value",modifier);break}}))}getSixPackKeyRemappings(){return{home:this.homePref.value,pageUp:this.pageUpPref.value,pageDown:this.pageDownPref.value,del:this.deletePref.value,insert:this.insertPref.value,end:this.endPref.value}}shouldShowFkeys(){return this.areF11andF12KeyShortcutsEnabled&&(this.keyboard?.settings?.f11!=null&&this.keyboard?.settings?.f12!=null)}onPoliciesChanged(){if(this.shouldShowFkeys()){this.f11KeyPref={...this.f11KeyPref,...getPrefPolicyFields(this.keyboardPolicies?.f11KeyPolicy)};this.f12KeyPref={...this.f12KeyPref,...getPrefPolicyFields(this.keyboardPolicies?.f12KeyPolicy)}}this.setSixPackKeyRemappingsForPolicies()}}customElements.define(SettingsPerDeviceKeyboardRemapKeysElement.is,SettingsPerDeviceKeyboardRemapKeysElement);function getTemplate$1h(){return html`<!--_html_template_start_--><template is="dom-repeat" items="[[mice]]" as="mouse" index-as="index" restamp>
  <settings-per-device-mouse-subsection mouse="[[mouse]]" mouse-policies="[[mousePolicies]]" mouse-index="[[index]]" is-last-device="[[computeIsLastDevice(index, mice.length)]]">
  </settings-per-device-mouse-subsection>
</template>
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsPerDeviceMouseElementBase=RouteObserverMixin(I18nMixin(PolymerElement));class SettingsPerDeviceMouseElement extends SettingsPerDeviceMouseElementBase{static get is(){return"settings-per-device-mouse"}static get template(){return getTemplate$1h()}static get properties(){return{mice:{type:Array,observer:"onMouseListUpdated"},mousePolicies:{type:Object}}}currentRouteChanged(route){if(route!==routes.PER_DEVICE_MOUSE){return}}onMouseListUpdated(newMouseList,oldMouseList){if(!oldMouseList){return}const{msgId:msgId,deviceNames:deviceNames}=getDeviceStateChangesToAnnounce(newMouseList,oldMouseList);for(const deviceName of deviceNames){getInstance().announce(this.i18n(msgId,deviceName))}}computeIsLastDevice(index){return index===this.mice.length-1}}customElements.define(SettingsPerDeviceMouseElement.is,SettingsPerDeviceMouseElement);function getTemplate$1g(){return html`<!--_html_template_start_--><template is="dom-repeat" items="[[pointingSticks]]" as="pointingStick" index-as="index" restamp>
  <settings-per-device-pointing-stick-subsection pointing-stick="[[pointingStick]]" pointing-stick-index="[[index]]" is-last-device="[[computeIsLastDevice(index, pointingSticks.length)]]">
  </settings-per-device-pointing-stick-subsection>
</template>
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsPerDevicePointingStickElementBase=RouteObserverMixin(I18nMixin(PolymerElement));class SettingsPerDevicePointingStickElement extends SettingsPerDevicePointingStickElementBase{static get is(){return"settings-per-device-pointing-stick"}static get template(){return getTemplate$1g()}static get properties(){return{pointingSticks:{type:Array,observer:"onPointingStickListUpdated"}}}currentRouteChanged(route){if(route!==routes.PER_DEVICE_POINTING_STICK){return}}onPointingStickListUpdated(newPointingStickList,oldPointingStickList){if(!oldPointingStickList){return}const{msgId:msgId,deviceNames:deviceNames}=getDeviceStateChangesToAnnounce(newPointingStickList,oldPointingStickList);for(const deviceName of deviceNames){getInstance().announce(this.i18n(msgId,deviceName))}}computeIsLastDevice(index){return index===this.pointingSticks.length-1}}customElements.define(SettingsPerDevicePointingStickElement.is,SettingsPerDevicePointingStickElement);function getTemplate$1f(){return html`<!--_html_template_start_--><template is="dom-repeat" items="[[touchpads]]" as="touchpad" index-as="index" restamp>
  <settings-per-device-touchpad-subsection touchpad="[[touchpad]]" touchpad-index="[[index]]" is-last-device="[[computeIsLastDevice(index, touchpads.length)]]">
  </settings-per-device-touchpad-subsection>
</template>
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsPerDeviceTouchpadElementBase=RouteObserverMixin(I18nMixin(PolymerElement));class SettingsPerDeviceTouchpadElement extends SettingsPerDeviceTouchpadElementBase{static get is(){return"settings-per-device-touchpad"}static get template(){return getTemplate$1f()}static get properties(){return{touchpads:{type:Array,observer:"onTouchpadListUpdated"}}}currentRouteChanged(route){if(route!==routes.PER_DEVICE_TOUCHPAD){return}}onTouchpadListUpdated(newTouchpadList,oldTouchpadList){if(!oldTouchpadList){return}const{msgId:msgId,deviceNames:deviceNames}=getDeviceStateChangesToAnnounce(newTouchpadList,oldTouchpadList);for(const deviceName of deviceNames){getInstance().announce(this.i18n(msgId,deviceName))}}computeIsLastDevice(index){return index===this.touchpads.length-1}}customElements.define(SettingsPerDeviceTouchpadElement.is,SettingsPerDeviceTouchpadElement);function getTemplate$1e(){return html`<!--_html_template_start_--><style include="settings-shared">cr-link-row:not(:last-of-type){border-bottom:var(--cr-separator-line)}.restore-defaults-button{border-radius:16px;height:32px;margin-inline:16px}.restore-defaults-icon{--iron-icon-fill-color:currentColor;margin-inline-end:8px}</style>

<os-settings-animated-pages id="pages" section="[[section_]]">
  <div id="main" route-path="default">
    <settings-card header-text="$i18n{devicePageTitle}">
      <template is="dom-if" if="[[showPointersRow_(hasMouse_, hasPointingStick_,
                                hasTouchpad_, isDeviceSettingsSplitEnabled_)]]">
        <cr-link-row id="pointersRow" start-icon="[[rowIcons_.pointingStick]]" label="[[getPointersTitle_(hasMouse_, hasPointingStick_,
                                      hasTouchpad_)]]" on-click="onPointersClick_" role-description="$i18n{subpageArrowRoleDescription}">
        </cr-link-row>
      </template>
      <template is="dom-if" if="[[showPerDeviceMouseRow_(mice,
                                      isDeviceSettingsSplitEnabled_)]]">
        <cr-link-row id="perDeviceMouseRow" start-icon="[[rowIcons_.mouse]]" label="$i18n{mouseTitle}" on-click="onPerDeviceMouseClick_" aria-label="$i18n{mouseTitle}" role-description="$i18n{subpageArrowRoleDescription}">
        </cr-link-row>
      </template>
      <template is="dom-if" if="[[showPerDeviceTouchpadRow_(touchpads,
                                          isDeviceSettingsSplitEnabled_)]]">
        <cr-link-row id="perDeviceTouchpadRow" start-icon="[[rowIcons_.touchpad]]" aria-label="$i18n{touchpadTitle}" label="$i18n{touchpadTitle}" on-click="onPerDeviceTouchpadClick_" role-description="$i18n{subpageArrowRoleDescription}">
        </cr-link-row>
      </template>
      <template is="dom-if" if="[[showPerDevicePointingStickRow_(pointingSticks,
                                              isDeviceSettingsSplitEnabled_)]]">
        <cr-link-row id="perDevicePointingStickRow" start-icon="[[rowIcons_.pointingStick]]" aria-label="$i18n{pointingStickTitle}" label="$i18n{pointingStickTitle}" on-click="onPerDevicePointingStickClick_" role-description="$i18n{subpageArrowRoleDescription}">
        </cr-link-row>
      </template>
      <template is="dom-if" if="[[isDeviceSettingsSplitEnabled_]]">
        <cr-link-row id="perDeviceKeyboardRow" start-icon="[[rowIcons_.keyboardAndInputs]]" label="$i18n{keyboardTitle}" aria-label="$i18n{keyboardTitle}" sub-label="[[inputMethodDisplayName_]]" on-click="onPerDeviceKeyboardClick_" role-description="$i18n{subpageArrowRoleDescription}">
        </cr-link-row>
      </template>
      <template is="dom-if" if="[[!isDeviceSettingsSplitEnabled_]]">
        <cr-link-row id="keyboardRow" start-icon="[[rowIcons_.keyboardAndInputs]]" label="$i18n{keyboardTitle}" sub-label="[[inputMethodDisplayName_]]" on-click="onKeyboardClick_" role-description="$i18n{subpageArrowRoleDescription}">
        </cr-link-row>
      </template>
      <template is="dom-if" if="[[hasStylus_]]">
        <cr-link-row id="stylusRow" start-icon="[[rowIcons_.stylus]]" label="$i18n{stylusTitle}" on-click="onStylusClick_" role-description="$i18n{subpageArrowRoleDescription}">
        </cr-link-row>
      </template>
      <template is="dom-if" if="[[showGraphicsTabletRow_(graphicsTablets,
          isPeripheralCustomizationEnabled)]]">
        <cr-link-row id="tabletRow" start-icon="[[rowIcons_.tablet]]" label="$i18n{tabletTitle}" on-click="onGraphicsTabletClick" role-description="$i18n{subpageArrowRoleDescription}">
        </cr-link-row>
      </template>
      <cr-link-row id="displayRow" start-icon="[[rowIcons_.display]]" label="$i18n{displayTitle}" on-click="onDisplayClick_" role-description="$i18n{subpageArrowRoleDescription}">
      </cr-link-row>
      <cr-link-row id="audioRow" start-icon="[[rowIcons_.audio]]" label="$i18n{audioTitle}" on-click="onAudioClick_" role-description="$i18n{subpageArrowRoleDescription}">
      </cr-link-row>
      <template is="dom-if" if="[[!isRevampWayfindingEnabled_]]">
        <template is="dom-if" if="[[!hideStorageInfo_]]">
          <cr-link-row id="storageRow" label="$i18n{storageTitle}" on-click="onStorageClick_" role-description="$i18n{subpageArrowRoleDescription}">
          </cr-link-row>
        </template>
        <cr-link-row id="powerRow" label="$i18n{powerTitle}" on-click="onPowerClick_" role-description="$i18n{subpageArrowRoleDescription}">
        </cr-link-row>
      </template>
    </settings-card>

    <template is="dom-if" if="[[isRevampWayfindingEnabled_]]">
      <printing-settings-card></printing-settings-card>
    </template>
  </div>

  <template is="dom-if" route-path="/pointer-overlay">
    <os-settings-subpage page-title="[[getPointersTitle_(hasMouse_, hasPointingStick_,
                                        hasTouchpad_)]]">
      <settings-pointers prefs="{{prefs}}" has-mouse="[[hasMouse_]]" has-pointing-stick="[[hasPointingStick_]]" has-touchpad="[[hasTouchpad_]]" has-haptic-touchpad="[[hasHapticTouchpad_]]">
      </settings-pointers>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/per-device-mouse">
    <os-settings-subpage page-title="$i18n{mouseTitle}">
      <settings-per-device-mouse mice="[[mice]]" mouse-policies="[[mousePolicies]]">
      </settings-per-device-mouse>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/per-device-keyboard">
    <os-settings-subpage page-title="$i18n{keyboardTitle}">
      <settings-per-device-keyboard prefs="{{prefs}}" keyboards="[[keyboards]]" keyboard-policies="[[keyboardPolicies]]">
      </settings-per-device-keyboard>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/per-device-touchpad">
    <os-settings-subpage page-title="$i18n{touchpadTitle}">
      <settings-per-device-touchpad touchpads="[[touchpads]]">
      </settings-per-device-touchpad>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/per-device-pointing-stick">
    <os-settings-subpage page-title="$i18n{pointingStickTitle}">
      <settings-per-device-pointing-stick pointing-sticks="[[pointingSticks]]">
      </settings-per-device-pointing-stick>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/keyboard-overlay">
    <os-settings-subpage page-title="$i18n{keyboardTitle}">
      <settings-keyboard prefs="{{prefs}}">
      </settings-keyboard>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/stylus">
    <os-settings-subpage page-title="$i18n{stylusTitle}">
      <settings-stylus prefs="{{prefs}}"></settings-stylus>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/graphics-tablet">
    <os-settings-subpage page-title="$i18n{tabletTitle}">
      <settings-graphics-tablet-subpage graphics-tablets="[[graphicsTablets]]">
      </settings-graphics-tablet-subpage>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/graphics-tablet/customizeTabletButtons">
    <os-settings-subpage id="customizeTabletButtonsSubpage" page-title="$i18n{customizeTabletButtonsLabel}">
      <settings-customize-tablet-buttons-subpage graphics-tablets="[[graphicsTablets]]">
      </settings-customize-tablet-buttons-subpage>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/graphics-tablet/customizePenButtons">
    <os-settings-subpage id="customizePenButtonsSubpage" page-title="$i18n{customizePenButtonsLabel}">
      <settings-customize-pen-buttons-subpage graphics-tablets="[[graphicsTablets]]">
      </settings-customize-pen-buttons-subpage>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/display">
    <os-settings-subpage page-title="$i18n{displayTitle}">
      <settings-display prefs="{{prefs}}"></settings-display>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/audio">
    <os-settings-subpage page-title="$i18n{audioTitle}">
      <settings-audio prefs="{{prefs}}">
      </settings-audio>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/per-device-keyboard/remap-keys">
    <os-settings-subpage id="perDeviceKeyboardRemapKeysRow" page-title="$i18n{remapKeyboardKeysRowLabel}">
        <cr-button id="restoreDefaultsButton" slot="subpage-title-extra" on-click="restoreDefaults" class="restore-defaults-button">
        <iron-icon icon="os-settings:refresh" class="restore-defaults-icon">
        </iron-icon>
        <span>$i18n{keyboardRemapRestoreDefaultsLabel}</span>
    </cr-button>
      <settings-per-device-keyboard-remap-keys keyboards="[[keyboards]]" keyboard-policies="[[keyboardPolicies]]" id="remap-keys">
      </settings-per-device-keyboard-remap-keys>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/per-device-mouse/customizeButtons">
    <os-settings-subpage id="customizeMouseButtonsRow" page-title="$i18n{customizeMouseButtonsTitle}">
      <settings-customize-mouse-buttons-subpage mouse-list="[[mice]]" mouse-policies="[[mousePolicies]]">
      </settings-customize-mouse-buttons-subpage>
    </os-settings-subpage>
  </template>

  <template is="dom-if" if="[[!isRevampWayfindingEnabled_]]">
    <template is="dom-if" route-path="/storage">
      <os-settings-subpage page-title="$i18n{storageTitle}">
        <settings-storage prefs="{{prefs}}">
        </settings-storage>
      </os-settings-subpage>
    </template>
    <template is="dom-if" if="[[isExternalStorageEnabled_]]">
      <template is="dom-if" route-path="/storage/externalStoragePreferences">
        <os-settings-subpage page-title="$i18n{storageExternal}">
          <settings-storage-external prefs="{{prefs}}">
          </settings-storage-external>
        </os-settings-subpage>
      </template>
    </template>
    <template is="dom-if" route-path="/power">
      <os-settings-subpage page-title="$i18n{powerTitle}">
        <settings-power prefs="{{prefs}}"></settings-power>
      </os-settings-subpage>
    </template>
  </template>

  <template is="dom-if" if="[[isRevampWayfindingEnabled_]]">
    
    <template is="dom-if" route-path="/osLanguages/input">
      <os-settings-subpage page-title="$i18n{inputPageTitle}">
        <os-settings-input-page prefs="{{prefs}}" languages="[[languages]]" language-helper="[[languageHelper]]">
        </os-settings-input-page>
      </os-settings-subpage>
    </template>

    <template is="dom-if" route-path="/osLanguages/inputMethodOptions">
      <os-settings-subpage>
        <settings-input-method-options-page prefs="{{prefs}}" language-helper="[[languageHelper]]">
        </settings-input-method-options-page>
      </os-settings-subpage>
    </template>

    <template is="dom-if" route-path="/osLanguages/editDictionary">
      <os-settings-subpage page-title="$i18n{editDictionaryLabel}">
        <os-settings-edit-dictionary-page></os-settings-edit-dictionary-page>
      </os-settings-subpage>
    </template>

    <template is="dom-if" route-path="/osLanguages/japaneseManageUserDictionary">
      <os-settings-subpage page-title="$i18n{japaneseManageUserDictionaryLabel}">
        <os-settings-japanese-manage-user-dictionary-page>
        </os-settings-japanese-manage-user-dictionary-page>
      </os-settings-subpage>
    </template>

    
    <template is="dom-if" route-path="/cupsPrinters">
      <os-settings-subpage page-title="$i18n{cupsPrintTitle}" search-label="$i18n{searchLabel}" search-term="{{searchTerm}}">
        <settings-cups-printers search-term="{{searchTerm}}" prefs="{{prefs}}">
        </settings-cups-printers>
      </os-settings-subpage>
    </template>
  </template>
</os-settings-animated-pages>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsDevicePageElementBase=RouteOriginMixin(I18nMixin(WebUiListenerMixin(PolymerElement)));class SettingsDevicePageElement extends SettingsDevicePageElementBase{static get is(){return"settings-device-page"}static get template(){return getTemplate$1e()}static get properties(){return{prefs:{type:Object,notify:true},section_:{type:Number,value:Section$1.kDevice,readOnly:true},hasMouse_:Boolean,hasPointingStick_:Boolean,hasTouchpad_:Boolean,hasHapticTouchpad_:Boolean,hasStylus_:{type:Boolean,value:false},isDeviceSettingsSplitEnabled_:{type:Boolean,value(){return isInputDeviceSettingsSplitEnabled()},readOnly:true},isPeripheralCustomizationEnabled:{type:Boolean,value(){return loadTimeData.getBoolean("enablePeripheralCustomization")},readOnly:true},isRevampWayfindingEnabled_:{type:Boolean,value:()=>isRevampWayfindingEnabled(),readOnly:true},hideStorageInfo_:{type:Boolean,value(){return loadTimeData.valueExists("isDemoSession")&&loadTimeData.getBoolean("isDemoSession")},readOnly:true},isExternalStorageEnabled_:{type:Boolean,value(){return isExternalStorageEnabled()}},pointingSticks:{type:Array},keyboards:{type:Array},keyboardPolicies:{type:Object},touchpads:{type:Array},mice:{type:Array},mousePolicies:{type:Object},graphicsTablets:{type:Array},languages:Object,languageHelper:Object,inputMethodDisplayName_:{type:String,computed:"computeInputMethodDisplayName_("+"languages.inputMethods.currentId, languageHelper)"},rowIcons_:{type:Object,value(){if(isRevampWayfindingEnabled()){return{mouse:"os-settings:device-mouse",touchpad:"os-settings:device-touchpad",pointingStick:"os-settings:device-pointing-stick",keyboardAndInputs:"os-settings:device-keyboard",stylus:"os-settings:device-stylus",tablet:"os-settings:device-tablet",display:"os-settings:device-display",audio:"os-settings:device-audio"}}return{mouse:"",touchpad:"",pointingStick:"",keyboardAndInputs:"",stylus:"",tablet:"",display:"",audio:""}}}}}static get observers(){return["pointersChanged_(hasMouse_, hasPointingStick_, hasTouchpad_)","mouseChanged_(mice)","touchpadChanged_(touchpads)","pointingStickChanged_(pointingSticks)","graphicsTabletChanged_(graphicsTablets)"]}constructor(){super();this.route=routes.DEVICE;this.browserProxy_=DevicePageBrowserProxyImpl.getInstance();if(this.isDeviceSettingsSplitEnabled_){this.inputDeviceSettingsProvider=getInputDeviceSettingsProvider();this.observePointingStickSettings();this.observeKeyboardSettings();this.observeTouchpadSettings();this.observeMouseSettings();if(this.isPeripheralCustomizationEnabled){this.observeGraphicsTabletSettings()}}}connectedCallback(){super.connectedCallback();if(!this.isDeviceSettingsSplitEnabled_){this.addWebUiListener("has-mouse-changed",this.set.bind(this,"hasMouse_"));this.addWebUiListener("has-pointing-stick-changed",this.set.bind(this,"hasPointingStick_"));this.addWebUiListener("has-touchpad-changed",this.set.bind(this,"hasTouchpad_"));this.addWebUiListener("has-haptic-touchpad-changed",this.set.bind(this,"hasHapticTouchpad_"));this.browserProxy_.initializePointers()}this.addWebUiListener("has-stylus-changed",this.set.bind(this,"hasStylus_"));this.browserProxy_.initializeStylus();this.addWebUiListener("storage-android-enabled-changed",this.set.bind(this,"isExternalStorageEnabled_"));this.browserProxy_.updateAndroidEnabled()}ready(){super.ready();this.addFocusConfig(routes.POINTERS,"#pointersRow");this.addFocusConfig(routes.PER_DEVICE_MOUSE,"#perDeviceMouseRow");this.addFocusConfig(routes.PER_DEVICE_TOUCHPAD,"#perDeviceTouchpadRow");this.addFocusConfig(routes.PER_DEVICE_POINTING_STICK,"#perDevicePointingStickRow");this.addFocusConfig(routes.PER_DEVICE_KEYBOARD,"#perDeviceKeyboardRow");this.addFocusConfig(routes.PER_DEVICE_KEYBOARD_REMAP_KEYS,"#perDeviceKeyboardRemapKeysRow");this.addFocusConfig(routes.KEYBOARD,"#keyboardRow");this.addFocusConfig(routes.STYLUS,"#stylusRow");this.addFocusConfig(routes.DISPLAY,"#displayRow");this.addFocusConfig(routes.AUDIO,"#audioRow");this.addFocusConfig(routes.GRAPHICS_TABLET,"#tabletRow");this.addFocusConfig(routes.CUSTOMIZE_MOUSE_BUTTONS,"#customizeMouseButtonsRow");this.addFocusConfig(routes.CUSTOMIZE_TABLET_BUTTONS,"#customizeTabletButtonsSubpage");this.addFocusConfig(routes.CUSTOMIZE_PEN_BUTTONS,"#customizePenButtonsSubpage");if(!this.isRevampWayfindingEnabled_){this.addFocusConfig(routes.STORAGE,"#storageRow");this.addFocusConfig(routes.POWER,"#powerRow")}}observePointingStickSettings(){if(this.inputDeviceSettingsProvider instanceof FakeInputDeviceSettingsProvider){this.inputDeviceSettingsProvider.observePointingStickSettings(this);return}this.pointingStickSettingsObserverReceiver=new PointingStickSettingsObserverReceiver(this);this.inputDeviceSettingsProvider.observePointingStickSettings(this.pointingStickSettingsObserverReceiver.$.bindNewPipeAndPassRemote())}onPointingStickListUpdated(pointingSticks){this.pointingSticks=pointingSticks}observeKeyboardSettings(){if(this.inputDeviceSettingsProvider instanceof FakeInputDeviceSettingsProvider){this.inputDeviceSettingsProvider.observeKeyboardSettings(this);return}this.keyboardSettingsObserverReceiver=new KeyboardSettingsObserverReceiver(this);this.inputDeviceSettingsProvider.observeKeyboardSettings(this.keyboardSettingsObserverReceiver.$.bindNewPipeAndPassRemote())}onKeyboardListUpdated(keyboards){this.keyboards=keyboards}onKeyboardPoliciesUpdated(keyboardPolicies){this.keyboardPolicies=keyboardPolicies}observeTouchpadSettings(){if(this.inputDeviceSettingsProvider instanceof FakeInputDeviceSettingsProvider){this.inputDeviceSettingsProvider.observeTouchpadSettings(this);return}this.touchpadSettingsObserverReceiver=new TouchpadSettingsObserverReceiver(this);this.inputDeviceSettingsProvider.observeTouchpadSettings(this.touchpadSettingsObserverReceiver.$.bindNewPipeAndPassRemote())}onTouchpadListUpdated(touchpads){this.touchpads=touchpads}observeMouseSettings(){if(this.inputDeviceSettingsProvider instanceof FakeInputDeviceSettingsProvider){this.inputDeviceSettingsProvider.observeMouseSettings(this);return}this.mouseSettingsObserverReceiver=new MouseSettingsObserverReceiver(this);this.inputDeviceSettingsProvider.observeMouseSettings(this.mouseSettingsObserverReceiver.$.bindNewPipeAndPassRemote())}onMouseListUpdated(mice){this.mice=mice}onMousePoliciesUpdated(mousePolicies){this.mousePolicies=mousePolicies}observeGraphicsTabletSettings(){if(this.inputDeviceSettingsProvider instanceof FakeInputDeviceSettingsProvider){this.inputDeviceSettingsProvider.observeGraphicsTabletSettings(this);return}this.graphicsTabletSettingsObserverReceiver=new GraphicsTabletSettingsObserverReceiver(this);this.inputDeviceSettingsProvider.observeGraphicsTabletSettings(this.graphicsTabletSettingsObserverReceiver.$.bindNewPipeAndPassRemote())}onGraphicsTabletListUpdated(graphicsTablets){this.graphicsTablets=graphicsTablets}getPointersTitle_(){const hasMouseOrPointingStick=this.hasMouse_||this.hasPointingStick_;if(hasMouseOrPointingStick&&this.hasTouchpad_){return this.i18n("mouseAndTouchpadTitle")}if(hasMouseOrPointingStick){return this.i18n("mouseTitle")}if(this.hasTouchpad_){return this.i18n("touchpadTitle")}return""}onPointersClick_(){Router.getInstance().navigateTo(routes.POINTERS)}onPerDeviceKeyboardClick_(){Router.getInstance().navigateTo(routes.PER_DEVICE_KEYBOARD)}onPerDeviceMouseClick_(){Router.getInstance().navigateTo(routes.PER_DEVICE_MOUSE)}onPerDeviceTouchpadClick_(){Router.getInstance().navigateTo(routes.PER_DEVICE_TOUCHPAD)}onPerDevicePointingStickClick_(){Router.getInstance().navigateTo(routes.PER_DEVICE_POINTING_STICK)}onKeyboardClick_(){Router.getInstance().navigateTo(routes.KEYBOARD)}onStylusClick_(){Router.getInstance().navigateTo(routes.STYLUS)}onGraphicsTabletClick(){Router.getInstance().navigateTo(routes.GRAPHICS_TABLET)}onDisplayClick_(){Router.getInstance().navigateTo(routes.DISPLAY)}onAudioClick_(){Router.getInstance().navigateTo(routes.AUDIO)}onStorageClick_(){Router.getInstance().navigateTo(routes.STORAGE)}onPowerClick_(){Router.getInstance().navigateTo(routes.POWER)}currentRouteChanged(newRoute,oldRoute){super.currentRouteChanged(newRoute,oldRoute);this.checkPointerSubpage_()}pointersChanged_(){this.checkPointerSubpage_()}mouseChanged_(){if((!this.mice||this.mice.length===0)&&Router.getInstance().currentRoute===routes.PER_DEVICE_MOUSE){getInstance().announce(this.i18n("allMiceDisconnectedA11yLabel"));Router.getInstance().navigateTo(routes.DEVICE)}}touchpadChanged_(){if((!this.touchpads||this.touchpads.length===0)&&Router.getInstance().currentRoute===routes.PER_DEVICE_TOUCHPAD){getInstance().announce(this.i18n("allTouchpadsDisconnectedA11yLabel"));Router.getInstance().navigateTo(routes.DEVICE)}}pointingStickChanged_(){if((!this.pointingSticks||this.pointingSticks.length===0)&&Router.getInstance().currentRoute===routes.PER_DEVICE_POINTING_STICK){getInstance().announce(this.i18n("allPointingSticksDisconnectedA11yLabel"));Router.getInstance().navigateTo(routes.DEVICE)}}graphicsTabletChanged_(){if((!this.graphicsTablets||this.graphicsTablets.length===0)&&Router.getInstance().currentRoute===routes.GRAPHICS_TABLET){getInstance().announce(this.i18n("allGraphicsTabletsDisconnectedA11yLabel"));Router.getInstance().navigateTo(routes.DEVICE)}}showPointersRow_(){return(this.hasMouse_||this.hasTouchpad_||this.hasPointingStick_)&&!this.isDeviceSettingsSplitEnabled_}showPerDeviceMouseRow_(){return this.isDeviceSettingsSplitEnabled_&&this.mice&&this.mice.length!==0}showPerDeviceTouchpadRow_(touchpads){return this.isDeviceSettingsSplitEnabled_&&touchpads&&touchpads.length!==0}showPerDevicePointingStickRow_(){return this.isDeviceSettingsSplitEnabled_&&this.pointingSticks&&this.pointingSticks.length!==0}showGraphicsTabletRow_(){return this.isPeripheralCustomizationEnabled&&this.graphicsTablets&&this.graphicsTablets.length!==0}restoreDefaults(){const remapKeysPage=this.shadowRoot.querySelector("#remap-keys");remapKeysPage.restoreDefaults()}checkPointerSubpage_(){if(this.hasMouse_===false&&this.hasPointingStick_===false&&this.hasTouchpad_===false&&Router.getInstance().currentRoute===routes.POINTERS){Router.getInstance().navigateTo(routes.DEVICE)}}computeInputMethodDisplayName_(){if(!this.isRevampWayfindingEnabled_){return""}const id=this.languages?.inputMethods?.currentId;if(!id||!this.languageHelper){return""}if(id===ACCESSIBILITY_COMMON_IME_ID){return""}return this.languageHelper.getInputMethodDisplayName(id)}}customElements.define(SettingsDevicePageElement.is,SettingsDevicePageElement);const template=html`

<iron-iconset-svg name="cellular-setup" size="20">
  <svg>
    <defs>
        <g id="camera" viewBox="0 0 20 20"><mask id="a" maskUnits="userSpaceOnUse" x="1" y="2" width="18" height="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.667 4.167h-2.642L12.5 2.5h-5L5.975 4.167H3.334c-.917 0-1.667.75-1.667 1.666v10c0 .917.75 1.667 1.667 1.667h13.333c.917 0 1.667-.75 1.667-1.667v-10c0-.916-.75-1.666-1.667-1.666zm0 11.666H3.334v-10h13.333v10zm-10-5A3.332 3.332 0 1 1 10 14.166a3.332 3.332 0 0 1-3.333-3.333z" fill="#fff"></path></mask><g mask="url(#a)"><path d="M0 0h20v20H0z"></path></g></g>
        <g id="checked" viewBox="0 0 20 20"><path d="M13.707 7.293a1 1 0 0 0-1.414 0L9 10.586 7.707 9.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 0-1.414z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-2a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path></g>
        <g id="error" viewBox="0 0 20 20"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 10h2V6H9v4zm1-8c-4.416 0-8 3.584-8 8s3.584 8 8 8 8-3.584 8-8-3.584-8-8-8zm0 14c-3.308 0-6-2.693-6-6 0-3.308 2.692-6 6-6 3.307 0 6 2.692 6 6 0 3.307-2.693 6-6 6zm-1-2h2v-2H9v2z"></path></g>
        <g id="switch-camera" viewBox="0 0 20 20"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 9V7H4.802A5.996 5.996 0 0 1 10 4a6 6 0 0 1 5.917 5h2.021c-.491-3.945-3.853-7-7.93-7a7.992 7.992 0 0 0-6.009 2.712L4 3H2v6h5zm5.938 2v2h2.198a5.996 5.996 0 0 1-5.198 3 6 6 0 0 1-5.917-5H2c.492 3.945 3.853 7 7.93 7a7.992 7.992 0 0 0 6.009-2.712V17h2v-6h-5zM10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path></g>
        <g id="try-again" viewBox="0 0 20 20"><path path fill-rule="evenodd" clip-rule="evenodd" d="M10 3C6.136 3 3 6.136 3 10C3 13.864 6.136 17 10 17C12.1865 17 14.1399 15.9959 15.4239 14.4239L13.9984 12.9984C13.0852 14.2129 11.6325 15 10 15C7.24375 15 5 12.7563 5 10C5 7.24375 7.24375 5 10 5C11.6318 5 13.0839 5.78641 13.9972 7H11V9H17V3H15V5.10253C13.7292 3.80529 11.9581 3 10 3Z"></path></g>
        <g id="warning" viewBox="0 0 20 20"><path d="M9 12H11V8H9V12Z"></path><path d="M11 15H9V13H11V15Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.13177 2.50386C9.51566 1.83205 10.4844 1.83205 10.8683 2.50386L18.8683 16.5039C19.2492 17.1705 18.7678 18 18 18H2.00001C1.23219 18 0.750823 17.1705 1.13177 16.5039L9.13177 2.50386ZM10 5.01556L3.72321 16H16.2768L10 5.01556Z"></path></g>
        <g id="info" viewBox="0 0 24 24"><path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"></path></g>
    </defs>
  </svg>
</iron-iconset-svg>


<iron-iconset-svg name="cellular-setup-illo" size="200">
  <svg>
    <defs>
      <g id="error" viewBox="0 0 201 200" fill="none">
        <path d="M122.984 41.38c-25.952 0-46.99 21.015-46.99 46.939s21.038 46.94 46.99 46.94 46.991-21.016 46.991-46.94-21.039-46.94-46.991-46.94Zm0 1.928c24.886 0 45.06 20.152 45.06 45.011s-20.174 45.011-45.06 45.011c-24.886 0-45.06-20.152-45.06-45.011s20.174-45.01 45.06-45.01Z" fill="var(--cros-sys-illo-color1-2)"/><path d="M133.249 89.338h-11.877v11.574h-13.557a.39.39 0 0 1-.272-.668l25.044-24.408a.39.39 0 0 1 .662.28v13.222Zm-1.288 3.1-1.815-1.814-2.691 2.688-2.69-2.688-1.816 1.813 2.691 2.688-2.691 2.688 1.816 1.813 2.69-2.675 2.691 2.675 1.815-1.813-2.677-2.688 2.677-2.688Z" fill="var(--cros-sys-illo-color1-2)"/><path fill-rule="evenodd" clip-rule="evenodd" d="M157.595 158.993c0-13.495-10.951-24.435-24.461-24.435-13.509 0-24.461 10.94-24.461 24.435" fill="var(--cros-sys-illo-secondary)"/><path fill-rule="evenodd" clip-rule="evenodd" d="m48.74 134.835 1.893 2.7a2.532 2.532 0 0 1-.62 3.527l-.002.002-24.851 17.382a2.533 2.533 0 0 1-3.525-.622l-1.893-2.7a2.532 2.532 0 0 1 .62-3.527l.002-.002 24.851-17.382a2.532 2.532 0 0 1 3.525.622Z" fill="var(--cros-sys-illo-color5)"/><path d="M50.548 159.017c4.33.999 8.65-1.697 9.648-6.022.999-4.326-1.702-8.643-6.032-9.642-4.33-1-8.649 1.696-9.647 6.022-.999 4.325 1.701 8.642 6.031 9.642Z" fill="var(--cros-sys-illo-secondary)"/><path d="M68.12 147.061c11.198 0 20.276-9.068 20.276-20.254 0-11.187-9.078-20.255-20.277-20.255-11.198 0-20.276 9.068-20.276 20.255 0 11.186 9.078 20.254 20.276 20.254Z" fill="var(--cros-sys-illo-color3)"/><path d="M69.88 130.279v-.746c0-.617.116-1.14.348-1.569.232-.429.64-.909 1.223-1.44.72-.669 1.296-1.334 1.725-1.994.43-.66.644-1.444.644-2.353 0-.909-.228-1.732-.683-2.469-.454-.738-1.09-1.321-1.905-1.749-.815-.429-1.746-.643-2.794-.643-1.407 0-2.566.394-3.476 1.183-.91.789-1.536 1.697-1.88 2.726l2.473 1.029c.223-.669.57-1.222 1.042-1.659.472-.437 1.095-.656 1.867-.656.807 0 1.442.219 1.906.656.463.437.695.99.695 1.659 0 .549-.133 1.02-.4 1.415-.266.394-.699.857-1.3 1.389-.858.771-1.454 1.448-1.79 2.031-.334.583-.501 1.295-.501 2.135v1.055h2.806Zm-1.416 6.018a1.82 1.82 0 0 0 1.352-.565c.369-.378.553-.832.553-1.364 0-.531-.184-.986-.553-1.363a1.82 1.82 0 0 0-1.352-.566c-.532 0-.987.185-1.364.553a1.846 1.846 0 0 0-.567 1.376c0 .532.189.986.567 1.364.377.377.832.565 1.364.565Z" fill="var(--cros-sys-illo-base)"/><path fill-rule="evenodd" clip-rule="evenodd" d="M62.197 156.996c-.52.906.13 2.039 1.17 2.039H73.98c1.039 0 1.688-1.133 1.169-2.039l-5.308-9.255a1.346 1.346 0 0 0-2.338 0l-5.307 9.255Z" fill="var(--cros-sys-illo-color4)"/><path d="M191.495 159.035a.965.965 0 0 1 .093 1.925l-.093.004H13.831a.965.965 0 0 1-.093-1.924l.093-.005h177.664Z" fill="var(--cros-sys-illo-color1-2)"/><path d="M97.578 158.993c7.638 0 13.83-6.192 13.83-13.83s-6.192-13.83-13.83-13.83-13.83 6.192-13.83 13.83 6.192 13.83 13.83 13.83Z" fill="var(--cros-sys-illo-color1)"/>
      </g>
      <g id="final-page-success" viewBox="0 0 201 200" fill="none">
        <path d="M100.366 109.293c-23.295 0-42.18 18.794-42.18 41.977 0 23.183 18.885 41.976 42.18 41.976 23.295 0 42.179-18.793 42.179-41.976s-18.884-41.977-42.179-41.977Zm0 1.908c22.236 0 40.262 17.939 40.262 40.069 0 22.129-18.026 40.068-40.262 40.068s-40.262-17.939-40.262-40.068c0-22.13 18.026-40.069 40.262-40.069Z" fill="var(--cros-sys-illo-color1-2)"/><path fill-rule="evenodd" clip-rule="evenodd" d="M72.382 80.903c0 15.456 12.528 27.985 27.984 27.985 15.455 0 27.984-12.53 27.984-27.985" fill="var(--cros-sys-illo-color1-2)"/><path d="M100.366 124.705c-14.784 0-26.768 11.984-26.768 26.768 0 14.783 11.984 26.767 26.768 26.767 14.783 0 26.767-11.984 26.767-26.767 0-14.784-11.984-26.768-26.767-26.768Zm0 2.549c13.375 0 24.218 10.843 24.218 24.219 0 13.375-10.843 24.218-24.218 24.218-13.376 0-24.219-10.843-24.219-24.218 0-13.376 10.843-24.219 24.219-24.219Z" fill="var(--cros-sys-illo-color1)"/><path d="M106.609 138.351h4.995v22.475h-4.995v-22.475Zm-17.48 12.486h4.994v9.989h-4.995v-9.989Zm8.74-6.243h4.994v16.232h-4.994v-16.232Z" fill="var(--cros-sys-illo-color1)"/><path fill-rule="evenodd" clip-rule="evenodd" d="m114.565 49.036 1.13 2.792a2.636 2.636 0 0 1-1.455 3.433l-.003.001-27.656 11.155a2.636 2.636 0 0 1-3.43-1.456l-1.13-2.792a2.636 2.636 0 0 1 1.455-3.433h.003l27.656-11.156a2.637 2.637 0 0 1 3.43 1.456Z" fill="var(--cros-sys-illo-color1)"/><path d="M100.366 50.643c8.96 0 16.223-7.264 16.223-16.223 0-8.96-7.263-16.223-16.223-16.223-8.96 0-16.223 7.263-16.223 16.223 0 8.96 7.263 16.223 16.223 16.223Z" fill="var(--cros-sys-illo-color2)"/><path fill-rule="evenodd" clip-rule="evenodd" d="m101.896 61.021 8.657 8.643c.476.475.477 1.245.002 1.72l-.002.002-8.657 8.643a1.216 1.216 0 0 1-1.719 0l-8.658-8.643a1.217 1.217 0 0 1-.002-1.72l.002-.002 8.658-8.643a1.217 1.217 0 0 1 1.719 0Z" fill="var(--cros-sys-illo-color3)"/><path fill-rule="evenodd" clip-rule="evenodd" d="M94.252 8.37c-.49-.86.123-1.934 1.104-1.934h10.02c.981 0 1.594 1.075 1.103 1.934l-5.01 8.778c-.49.859-1.716.859-2.207 0l-5.01-8.778Z" fill="var(--cros-sys-illo-color6)"/><path fill-rule="evenodd" clip-rule="evenodd" d="M111.439 25.828c.66.5.791 1.44.291 2.1L99.765 43.748a1.5 1.5 0 0 1-2.15.253l-7.03-5.79a1.5 1.5 0 1 1 1.907-2.316l5.824 4.796 11.022-14.57a1.5 1.5 0 0 1 2.101-.292Z" fill="var(--cros-sys-illo-base)"/>
      </g>
      <g id="sim-detect-error" viewBox="0 0 200 200" fill="none">
        <g clip-path="url(#a)"><path d="M250.017 151.141H98.165a6.753 6.753 0 0 1-6.752-6.752V40.862h165.419v103.465a6.764 6.764 0 0 1-1.978 4.837 6.748 6.748 0 0 1-4.837 1.977v0Z" fill="var(--cros-sys-illo-base)" stroke="var(--cros-sys-illo-color1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M149.866 141.888h48.45a2.562 2.562 0 0 0 2.563-2.563v-30.351a2.563 2.563 0 0 0-2.563-2.564h-48.45a2.563 2.563 0 0 0-2.563 2.564v30.351a2.562 2.562 0 0 0 2.563 2.563Z" fill="var(--cros-sys-illo-color1-2)"/><path d="M268.71 44.987H79.473a1.375 1.375 0 0 1-1.376-1.375V40.55a2.688 2.688 0 0 1 2.688-2.688h186.612a2.688 2.688 0 0 1 2.688 2.688v3.063a1.375 1.375 0 0 1-1.375 1.375v0Z" fill="var(--cros-sys-illo-base)" stroke="var(--cros-sys-illo-color1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M246.641 48.515h-145.1c-.587 0-1.063.505-1.063 1.127v45.68c0 .622.476 1.127 1.063 1.127h145.1c.587 0 1.063-.505 1.063-1.127v-45.68c0-.622-.476-1.127-1.063-1.127Z" fill="var(--cros-sys-illo-color1-2)"/><path d="M68.147 97.994H43.285a1.025 1.025 0 0 1-1.025-1.077V78.155a1.025 1.025 0 0 1 1.025-1.025h19.48l6.408 6.202v13.585a1.024 1.024 0 0 1-1.026 1.077Z" fill="var(--cros-sys-illo-color1)"/><path d="M52.65 89.142H46.5c-.615 0-1.113.498-1.113 1.113v3.796c0 .614.498 1.113 1.113 1.113h6.15c.615 0 1.113-.499 1.113-1.113v-3.796c0-.615-.498-1.113-1.113-1.113Z" fill="var(--cros-sys-illo-base)"/><path d="M52.65 89.142H46.5c-.615 0-1.113.498-1.113 1.113v3.796c0 .614.498 1.113 1.113 1.113h6.15c.615 0 1.113-.499 1.113-1.113v-3.796c0-.615-.498-1.113-1.113-1.113Z" fill="var(--cros-sys-illo-color1-2)"/><path d="M35.852 70.568v34.038" stroke="var(--cros-sys-illo-color1)" stroke-width="4" stroke-linecap="square" stroke-linejoin="round"/><path d="M35.852 73.797H71.12a2.307 2.307 0 0 1 2.307 2.307V99.02a2.307 2.307 0 0 1-2.307 2.307H35.85" stroke="var(--cros-sys-illo-color1)" stroke-width="2" stroke-linejoin="round"/><path d="M54.614 129.674c23.386 0 42.343-18.958 42.343-42.343 0-23.386-18.957-42.344-42.343-42.344-23.385 0-42.343 18.958-42.343 42.344 0 23.385 18.958 42.343 42.343 42.343Z" stroke="var(--cros-sys-illo-base)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M54.614 129.674c23.386 0 42.343-18.958 42.343-42.343 0-23.386-18.957-42.344-42.343-42.344-23.385 0-42.343 18.958-42.343 42.344 0 23.385 18.958 42.343 42.343 42.343Z" stroke="var(--cros-sys-illo-color1-2)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="a"><path fill="var(--cros-sys-illo-base)" d="M0 0h200v200H0z"/></clipPath></defs>
      </g>
      <g id="network-setup" viewBox="0 0 448 268" fill="none">
        <path fill="var(--cros-sys-illo-color1-2)" d="M161.515 66.264c8.231-8.384 21.739-8.384 29.97 0l2.126 2.165a21 21 0 0 0 18.462 5.999l2.992-.502c11.587-1.945 22.516 5.995 24.247 17.616l.447 3a20.998 20.998 0 0 0 11.409 15.705l2.716 1.353c10.518 5.237 14.692 18.084 9.262 28.504l-1.402 2.69a21 21 0 0 0 0 19.412l1.402 2.69c5.43 10.42 1.256 23.267-9.262 28.504l-2.716 1.353a20.998 20.998 0 0 0-11.409 15.704l-.447 3.001c-1.731 11.621-12.66 19.561-24.247 17.616l-2.992-.502a21 21 0 0 0-18.462 5.999l-2.126 2.165c-8.231 8.384-21.739 8.384-29.97 0l-2.126-2.165a21 21 0 0 0-18.462-5.999l-2.992.502c-11.587 1.945-22.516-5.995-24.247-17.616l-.447-3.001a20.998 20.998 0 0 0-11.409-15.704l-2.716-1.353c-10.518-5.237-14.692-18.085-9.262-28.504l1.402-2.69a21 21 0 0 0 0-19.412l-1.402-2.69c-5.43-10.42-1.256-23.267 9.262-28.504l2.716-1.353a20.998 20.998 0 0 0 11.409-15.704l.447-3c1.731-11.622 12.66-19.562 24.247-17.617l2.992.502a21 21 0 0 0 18.462-5.999l2.126-2.165Z"/><path stroke="var(--cros-sys-illo-color1-1)" stroke-width="2" d="m194.325 67.729-2.126-2.165c-8.623-8.784-22.775-8.784-31.398 0l-2.126 2.165a19.999 19.999 0 0 1-17.582 5.713l-2.992-.503c-12.139-2.037-23.588 6.281-25.402 18.456l-.447 3a20 20 0 0 1-10.866 14.957l-2.716 1.353c-11.018 5.486-15.392 18.946-9.703 29.861l1.403 2.69a20.001 20.001 0 0 1 0 18.488l-1.403 2.69c-5.689 10.915-1.315 24.375 9.703 29.861l2.716 1.353a20 20 0 0 1 10.866 14.956l.447 3.001c1.814 12.175 13.263 20.493 25.402 18.456l2.992-.503a20 20 0 0 1 17.582 5.713l2.126 2.165c8.623 8.784 22.775 8.784 31.398 0l2.126-2.165a20 20 0 0 1 17.582-5.713l2.992.503c12.139 2.037 23.588-6.281 25.402-18.456l.447-3.001a20 20 0 0 1 10.866-14.956l2.716-1.353c11.018-5.486 15.392-18.946 9.703-29.861l-1.403-2.69a20.002 20.002 0 0 1 0-18.488l1.403-2.69c5.689-10.915 1.315-24.375-9.703-29.861l-2.716-1.353a19.999 19.999 0 0 1-10.866-14.956l-.447-3.001c-1.814-12.175-13.263-20.493-25.402-18.456l-2.992.503a19.999 19.999 0 0 1-17.582-5.713Z"/><path fill="var(--cros-sys-illo-base)" fill-rule="evenodd" d="M135.851 231.34c-10.808.761-20.589-6.917-22.219-17.857l-.44-2.954a21 21 0 0 0-11.41-15.705l-2.673-1.331a21.17 21.17 0 0 1-3.062-1.862c.07-.843.127-1.316.127-1.316 10.877-22.149 37.395-36.852 67.662-37.796 2.732 0 5.332-.021 7.818-.04 27.89-.218 41.509-.325 67.279 29.623l18.963-32.618 13.701 6.683c.47.289.961.556 1.47.8l8.601 4.113 7.329 3.575s-18.205 51.582-49.306 51.582c-31.1 0-39.444-23.515-39.444-23.515l-4.778 33.68-41.395 3.185-2.653-1.593-4.776-15.921-5.838-14.859-15.657 12.196 10.701 21.93Z" clip-rule="evenodd"/><path stroke="var(--cros-sys-illo-color1)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m145.631 192.724-20.481 16.688 10.35 20.707m64.746-37.395s8.344 23.515 39.445 23.515 49.306-51.582 49.306-51.582l-31.101-15.171-18.964 32.618c-28.066-32.618-41.72-29.584-75.096-29.584-30.267.945-56.785 15.648-67.662 37.796"/><path stroke="var(--cros-sys-illo-color1)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M140.412 198.033s4.988 8.064 7.761 21.849c2.774 13.785 8.261 8.777 8.261 8.777M201.005 183.621l-5.309 41.909-38.51 3.123"/><path fill="var(--cros-sys-illo-color1-1)" d="M268.928 134.551c-5.748 4.252-9.928 14.351-9.928 14.351L279.379 159l6.271-3.189s17.243 4.252 23.514.532c3.633-2.156 5.904-5.654 4.336-8.843-6.271-2.126.889-2.319-1.723-5.508-1.045-2.657-10.904-2.641-14.631-3.189-6.477-.951-9.406-2.126-9.406-2.126s6.793.532 6.793-3.189c0-3.72-19.857-3.189-25.605 1.063Z"/><path stroke="var(--cros-sys-illo-color1)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M258.73 148.955s2.008-13.6 15.152-16.155c7.572-.927 16.105-2.244 18.401-1.694 2.297.55 3.94 2.576 2.268 4.3-1.672 1.724-8.44 1.265-8.44 1.265s4.536 1.622 10.13 2.273c5.595.651 11.55.373 13.762 1.273 2.212.9 2.924 1.613 2.287 3.457-.636 1.844-9.099 1.048-11.164.725"/><path stroke="var(--cros-sys-illo-color1)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M278.43 158.828s4.321-2.583 6.7-3.038c2.379-.455 11.788 2.857 16.26 2.615 4.472-.242 9.729-.666 8.796-3.608-.933-2.942-8.107-1.68-11.696-2.753-3.59-1.074-6.43-2.284-11.967-4.915-5.538-2.632-11.197-.846-11.197-.846"/><path stroke="var(--cros-sys-illo-color1)" stroke-linecap="round" stroke-width="2" d="M292.321 145.572s4.498 2.355 9.958 3.635c5.46 1.28 10.147-.226 10.774 3.006.221 1.139-1.028 1.815-2.83 2.186"/><path stroke="var(--cros-sys-illo-color1)" stroke-linecap="round" stroke-width="2" d="M294.33 142.364s2.297 1.175 8.454 2.918c6.158 1.742 12.415.216 11.287 4.5-.176.669-.846.833-1.554 1.275"/><path fill="var(--cros-sys-illo-color1-1)" fill-rule="evenodd" d="M181.206 129.366c-.506-1.269-1.02-2.559-1.396-3.842-2.225-7.594-9.958-12.013-17.271-9.87-7.313 2.143-11.437 10.037-9.211 17.631 1.115 3.807 3.615 6.816 6.752 8.601l2.258 5.268c1.213 2.83.607 4.953.607 4.953h15.011l-1.264-10.112c8.548-2.507 6.603-7.386 4.514-12.629Z" clip-rule="evenodd"/><path fill="var(--cros-sys-illo-color1)" d="m179.81 125.524.96-.281-.96.281Zm1.396 3.842.929-.37-.929.37Zm-18.667-13.712.282.96-.282-.96Zm-9.211 17.631-.96.281.96-.281Zm6.752 8.601.919-.394-.132-.309-.292-.166-.495.869Zm2.258 5.268.919-.394-.919.394Zm.607 4.953-.962-.275-.364 1.275h1.326v-1Zm15.011 0v1h1.133l-.141-1.124-.992.124Zm-1.264-10.112-.282-.959-.816.239.106.844.992-.124Zm2.159-16.19c.391 1.337.924 2.671 1.426 3.931l1.858-.74c-.509-1.277-1.005-2.523-1.365-3.753l-1.919.562Zm-16.03-9.191c6.749-1.978 13.949 2.093 16.03 9.191l1.919-.562c-2.371-8.09-10.635-12.857-18.512-10.549l.563 1.92Zm-8.534 16.39c-2.08-7.099 1.784-14.413 8.534-16.39l-.563-1.92c-7.877 2.309-12.261 10.782-9.89 18.872l1.919-.562Zm6.288 8.013c-2.916-1.659-5.246-4.46-6.288-8.013l-1.919.562c1.19 4.061 3.86 7.279 7.218 9.189l.989-1.738Zm2.682 5.743-2.258-5.268-1.838.788 2.258 5.268 1.838-.788Zm-.312 5.347.961.274.001-.001v-.002l.001-.004.004-.012.008-.032.024-.101c.019-.084.042-.2.064-.344.045-.288.088-.694.088-1.193 0-1-.172-2.375-.839-3.932l-1.838.788c.546 1.273.677 2.375.677 3.144 0 .385-.033.687-.064.885-.015.099-.03.172-.04.215l-.01.043-.001.005.001-.003v-.002l.001-.001v-.001l.962.274Zm15.011-1h-15.011v2h15.011v-2Zm-2.256-8.988 1.263 10.112 1.985-.248-1.264-10.112-1.984.248Zm4.577-12.383c.527 1.323 1.018 2.559 1.344 3.73.325 1.172.459 2.198.327 3.096-.127.866-.508 1.663-1.321 2.398-.836.755-2.162 1.473-4.217 2.076l.563 1.919c2.22-.651 3.856-1.483 4.994-2.511 1.161-1.049 1.766-2.269 1.96-3.592.19-1.291-.019-2.624-.379-3.921-.36-1.296-.895-2.636-1.413-3.935l-1.858.74Z"/><path fill="var(--cros-sys-illo-color1)" d="M175.036 107.905c4.916 2.217 1.328 11.297 1.328 11.297s-5.587.349-9.022 3.184c-3.436 2.836-2.758 8.085-2.758 8.085s-4.141-3.308-6.271-.6c-2.129 2.708 1.309 5.761 3.191 5.535 1.272-.321 2.523 2.332 3.199 4.084.33.855-.036 1.802-.823 2.274l-3.968 2.381s-7.43-3.715-12.737-10.614c-11.751-17.797 10.091-19.091 17.594-23.226 4.722-2.603 5.351-4.616 10.267-2.4Z"/><path stroke="var(--cros-sys-illo-color1)" stroke-linecap="round" stroke-width="2" d="M176.976 133.292s.678 1.139 2.566.959c1.887-.179 2.856-1.746 2.856-1.746"/><path fill="var(--cros-sys-illo-color1)" fill-rule="evenodd" d="M199.18 232.461a21.002 21.002 0 0 0-5.739 4.143l-2.092 2.131c-8.231 8.385-21.739 8.385-29.971 0l-2.092-2.131a20.996 20.996 0 0 0-9.043-5.43l.647-2.648 2.654 1.592 3.184-1.592 38.21-3.184 4.242 7.119Z" clip-rule="evenodd"/><path fill="var(--cros-sys-illo-color3)" d="M397.872 86.917c.805.4.716 1.575-.14 1.848L384.813 92.9c-.263.085-.48.275-.599.525l-5.883 12.437c-.391.829-1.599.738-1.861-.14l-3.948-13.18a.998.998 0 0 0-.513-.61l-12.151-6.027c-.805-.4-.716-1.575.139-1.849l12.919-4.134a.998.998 0 0 0 .599-.524l5.883-12.437c.392-.829 1.599-.738 1.862.14l3.947 13.18c.08.265.266.486.514.609l12.151 6.028Z"/><path fill="var(--cros-sys-illo-color1)" fill-rule="evenodd" d="m349.878 93.025-15.257-10.872-19.596 3.29-16.307 22.885a4.698 4.698 0 0 0 1.096 6.532l22.886 16.307c2.097 1.495 5.037 1.001 6.532-1.097l21.742-30.513a4.698 4.698 0 0 0-1.096-6.532Zm-28.419-2.279a1 1 0 0 0-1.394.234l-8.495 11.922a1 1 0 0 0 .234 1.395l1.947 1.387a1 1 0 0 0 1.395-.234l8.495-11.922a1 1 0 0 0-.235-1.395l-1.947-1.387Zm4.565 4.481a1 1 0 0 1 1.395-.234l1.947 1.387a1 1 0 0 1 .234 1.395L315.473 117.6a1 1 0 0 1-1.395.234l-1.947-1.387a1 1 0 0 1-.234-1.395l14.127-19.826Zm-1.283 14.41a1 1 0 0 1 1.395-.234l5.523 3.935a1 1 0 0 1 .234 1.395l-6.885 9.663a1 1 0 0 1-1.395.234l-5.523-3.935a1 1 0 0 1-.234-1.395l6.885-9.663Zm-14.546-3.082a1 1 0 0 0-1.395.234l-2.862 4.017a1 1 0 0 0 .234 1.395l1.947 1.387a1 1 0 0 0 1.395-.234l2.862-4.017a1 1 0 0 0-.234-1.395l-1.947-1.387Zm20.18-4.824a1 1 0 0 1 1.394-.234l5.523 3.935a1 1 0 0 1 .234 1.395l-2.862 4.017a1 1 0 0 1-1.395.234l-5.523-3.935a1.001 1.001 0 0 1-.234-1.395l2.863-4.017Z" clip-rule="evenodd"/><path fill="var(--cros-sys-illo-color2)" d="m357.021 183.351-20.762-16.266c-2.583-1.976-4.285-4.921-4.731-8.188a12.684 12.684 0 0 1 2.349-9.235 12.401 12.401 0 0 1 3.557-3.253 12.118 12.118 0 0 1 4.501-1.625 11.957 11.957 0 0 1 4.757.252 12.012 12.012 0 0 1 4.29 2.09l20.755 16.265c2.585 1.974 4.288 4.919 4.736 8.186a12.684 12.684 0 0 1-2.347 9.237c-1.952 2.646-4.85 4.4-8.058 4.876a11.996 11.996 0 0 1-9.047-2.339Z"/><path fill="var(--cros-sys-illo-color5)" d="m360.216 117.139-9.945 4.986a2.54 2.54 0 0 0-1.132 3.41l4.927 9.827a2.54 2.54 0 0 0 3.41 1.133l9.945-4.986a2.54 2.54 0 0 0 1.132-3.41l-4.927-9.827a2.54 2.54 0 0 0-3.41-1.133Z"/><circle cx="296.5" cy="59.5" r="9.25" stroke="var(--cros-sys-illo-color4)" stroke-width="2.5"/><path stroke="var(--cros-sys-illo-color1-2)" stroke-linecap="round" stroke-width="2" d="M373.354 32c-5.436 21.674-40.031 8.683-44.941 33.385"/>
      </g>
    </defs>
  </svg>
</iron-iconset-svg>
`;document.head.appendChild(template.content);function getTemplate$1d(){return html`<!--_html_template_start_--><style include="cros-color-overrides">:host{display:flex;justify-content:flex-end;padding:10px 0 20px 0}#forward:focus{box-shadow:0 0 0 2px var(--focus-shadow-color)}#flex{flex:1}</style>
<cr-button id="backward" class="cancel-button" on-click="onBackwardButtonClicked_" disabled="[[isButtonDisabled_(Button.BACKWARD, buttonState.*)]]" hidden$="[[isButtonHidden_(Button.BACKWARD, buttonState.*)]]">
  [[i18n('back')]]
</cr-button>
<div id="flex"></div>
<cr-button id="cancel" class="cancel-button" on-click="onCancelButtonClicked_" disabled="[[isButtonDisabled_(Button.CANCEL, buttonState.*)]]" hidden$="[[isButtonHidden_(Button.CANCEL, buttonState.*)]]">
  [[i18n('cancel')]]
</cr-button>
<cr-button id="forward" class="action-button" on-click="onForwardButtonClicked_" disabled="[[isButtonDisabled_(Button.FORWARD, buttonState.*)]]" hidden$="[[isButtonHidden_(Button.FORWARD, buttonState.*)]]">
  [[forwardButtonLabel]]
</cr-button>
<!--_html_template_end_-->`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ButtonBarElementBase=I18nMixin(PolymerElement);class ButtonBarElement extends ButtonBarElementBase{static get is(){return"button-bar"}static get template(){return getTemplate$1d()}static get properties(){return{buttonState:{type:Object,value:{}},Button:{type:Object,value:Button},forwardButtonLabel:{type:String,value:""}}}isButtonHidden_(buttonName){const state=this.getButtonBarState_(buttonName);return state===ButtonState.HIDDEN}isButtonDisabled_(buttonName){const state=this.getButtonBarState_(buttonName);return state===ButtonState.DISABLED}focusDefaultButton(){const buttons=this.shadowRoot.querySelectorAll("cr-button");for(let i=buttons.length-1;i>=0;i--){const button=buttons.item(i);if(!button.disabled&&!button.hidden){focusWithoutInk(button);return}}}onBackwardButtonClicked_(){this.dispatchEvent(new CustomEvent("backward-nav-requested",{bubbles:true,composed:true}))}onCancelButtonClicked_(){this.dispatchEvent(new CustomEvent("cancel-requested",{bubbles:true,composed:true}))}onForwardButtonClicked_(){this.dispatchEvent(new CustomEvent("forward-nav-requested",{bubbles:true,composed:true}))}getButtonBarState_(button){assert(this.buttonState);switch(button){case Button.BACKWARD:return this.buttonState.backward;case Button.CANCEL:return this.buttonState.cancel;case Button.FORWARD:return this.buttonState.forward;default:assertNotReached()}}}customElements.define(ButtonBarElement.is,ButtonBarElement);function getTemplate$1c(){return html`<!--_html_template_start_--><style include="iron-positioning cros-color-overrides">:host{display:flex;flex-direction:column;height:100%}#title{color:var(--cros-text-color-primary);font-weight:400;line-height:24px}#message{height:var(--base-page-message-height,auto);margin-bottom:20px}:host ::slotted([slot=page-body]){display:block;flex:1 1 auto}#message iron-icon{padding-inline-end:4px}</style>
<template is="dom-if" if="[[isTitleShown_(title)]]" restamp>
  <h3 id="title">[[getTitle_(title)]]</h3>
</template>
<div id="message" aria-live="polite" aria-atomic="true">
  <iron-icon icon$="cellular-setup:[[messageIcon]]" hidden$="[[!isMessageIconShown_(messageIcon)]]">
  </iron-icon>
  [[message]]
</div>
<slot name="page-body"></slot>
<!--_html_template_end_-->`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class BasePageElement extends PolymerElement{static get is(){return"base-page"}static get template(){return getTemplate$1c()}static get properties(){return{title:String,message:String,messageIcon:{type:String,value:""}}}getTitle_(){return this.title}isTitleShown_(){return!!this.title}isMessageIconShown_(){return!!this.messageIcon}}customElements.define(BasePageElement.is,BasePageElement);function getTemplate$1b(){return html`<!--_html_template_start_--><style include="iron-flex cr-hidden-style">#animationContainer{align-items:flex-end;display:flex;height:216px;justify-content:center;margin-bottom:54px}#simDetectError,#simDetectErrorJelly{height:100%;width:100%}#simDetectError{background-image:url(chrome://resources/ash/common/cellular_setup/sim_detect_error.svg);background-position:center center;background-repeat:no-repeat;background-size:contain}@media(prefers-color-scheme:dark){#simDetectError{background-image:url(chrome://resources/ash/common/cellular_setup/sim_detect_error_dark.svg)}}:host-context(body.jelly-enabled) #simDetectError{display:none}:host-context(body:not(.jelly-enabled)) #simDetectErrorJelly{display:none}#pageBody{height:222px}cros-lottie-renderer{height:85%}base-page{--base-page-message-height:40px}</style>
<base-page title="[[loadingTitle]]" message="[[loadingMessage]]">
  <div slot="page-body" id="pageBody" class="layout vertical center-center">
    <iron-media-query query="(prefers-color-scheme: dark)" query-matches="{{isDarkModeActive_}}">
    </iron-media-query>
    <template is="dom-if" if="[[!isSimDetectError]]" restamp>
      <div id="animationContainer">
        <cros-lottie-renderer id="spinner" asset-url="chrome://resources/ash/common/cellular_setup/spinner.json" autoplay dynamic aria-hidden>
        </cros-lottie-renderer>
      </div>
    </template>
    <div id="simDetectError" hidden$="[[!isSimDetectError]]">
    </div>
    <iron-icon id="simDetectErrorJelly" icon="cellular-setup-illo:sim-detect-error" hidden$="[[!isSimDetectError]]">
    </iron-icon>
  </div>
</base-page>
<!--_html_template_end_-->`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SetupLoadingPageElement extends PolymerElement{static get is(){return"setup-loading-page"}static get template(){return getTemplate$1b()}static get properties(){return{loadingMessage:{type:String,value:""},loadingTitle:{type:String,value:""},isSimDetectError:{type:Boolean,value:false}}}}customElements.define(SetupLoadingPageElement.is,SetupLoadingPageElement);function getTemplate$1a(){return html`<!--_html_template_start_--><style include="iron-flex cr-hidden-style">paper-spinner-lite{height:32px;width:32px}#portalContainer{height:100%;width:100%}#errorIllustration,#errorIllustrationJelly{height:100%;width:100%}#errorIllustration{background-image:url(chrome://resources/ash/common/cellular_setup/error.svg);background-position:center center;background-repeat:no-repeat;background-size:contain}@media(prefers-color-scheme:dark){#errorIllustration{background-image:url(chrome://resources/ash/common/cellular_setup/error_dark.svg)}}:host-context(body.jelly-enabled) #errorIllustration{display:none}:host-context(body:not(.jelly-enabled)) #errorIllustrationJelly{display:none}</style>
<base-page title="[[getPageTitle_(
                        showError, carrierName_, hasCarrierPortalLoaded_)]]" message="[[getPageMessage_(showError)]]">
  <div slot="page-body" class="layout horizontal center-center">
    <paper-spinner-lite active hidden$="[[!shouldShowSpinner_(
                        showError, hasCarrierPortalLoaded_)]]">
    </paper-spinner-lite>
    <div id="portalContainer" hidden$="[[!shouldShowPortal_(
                        showError, hasCarrierPortalLoaded_)]]">
    </div>
    <div id="errorIllustration" hidden$="[[!showError]]"></div>
    <iron-icon id="errorIllustrationJelly" icon="cellular-setup-illo:error" hidden$="[[!showError]]">
    </iron-icon>
  </div>
</base-page>
<!--_html_template_end_-->`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const WEBVIEW_REDIRECT_SCRIPT="(function(form, paymentUrl, postData) {"+"function addInputElement(form, name, value) {"+"  var input = document.createElement('input');"+"  input.type = 'hidden';"+"  input.name = name;"+"  input.value = value;"+"  form.appendChild(input);"+"}"+"function initFormFromPostData(form, postData) {"+"  if (!postData) return;"+"  var pairs = postData.split('&');"+"  pairs.forEach(pairStr => {"+"    var pair = pairStr.split('=');"+"    if (pair.length === 2)"+"      addInputElement(form, pair[0], pair[1]);"+"    else if (pair.length === 1)"+"      addInputElement(form, pair[0], true);"+"  });"+"}"+"form.action = unescape(paymentUrl);"+"form.method = 'POST';"+"initFormFromPostData(form, unescape(postData));"+"form.submit();"+"})";const WEBVIEW_REDIRECT_FORM_ID="redirectForm";const WEBVIEW_REDIRECT_HTML="<html><body>"+'<form id="'+WEBVIEW_REDIRECT_FORM_ID+'"></form>'+"</body></html>";function initializeWebviewRedirectForm(webview,paymentUrl,postData,webviewSrc,commitEvent){if(!commitEvent.isTopLevel||commitEvent.url!==webviewSrc){return}webview.executeScript({code:WEBVIEW_REDIRECT_SCRIPT+"("+"document.getElementById('"+WEBVIEW_REDIRECT_FORM_ID+"'),"+" '"+escape(paymentUrl)+"',"+" '"+escape(postData||"")+"');"})}function postDeviceDataToWebview(webview,paymentUrl,postData){const webviewSrc="data:text/html;charset=utf-8,"+encodeURIComponent(WEBVIEW_REDIRECT_HTML);webview.addEventListener("loadcommit",(commitEvent=>{initializeWebviewRedirectForm(webview,paymentUrl,postData,webviewSrc,commitEvent)}));webview.src=webviewSrc}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ProvisioningPageElementBase=I18nMixin(PolymerElement);class ProvisioningPageElement extends ProvisioningPageElementBase{static get is(){return"provisioning-page"}static get template(){return getTemplate$1a()}static get properties(){return{delegate:Object,showError:{type:Boolean,value:false,notify:true},cellularMetadata:{type:Object,value:null,observer:"onCellularMetadataChanged_"},hasCarrierPortalLoaded_:{type:Boolean,value:false},carrierName_:{type:String,value:""}}}getPageTitle_(){if(!this.delegate.shouldShowPageTitle()){return null}if(this.showError){return this.i18n("provisioningPageErrorTitle",this.carrierName_)}if(this.hasCarrierPortalLoaded_){return this.i18n("provisioningPageActiveTitle")}return this.i18n("provisioningPageLoadingTitle",this.carrierName_)}getPageMessage_(){if(this.showError){return this.i18n("provisioningPageErrorMessage",this.carrierName_)}return null}shouldShowSpinner_(){return!this.showError&&!this.hasCarrierPortalLoaded_}shouldShowPortal_(){return!this.showError&&this.hasCarrierPortalLoaded_}getPortalWebview(){return this.shadowRoot.querySelector("webview")}onCellularMetadataChanged_(){if(this.cellularMetadata){this.carrierName_=this.cellularMetadata.carrier;this.loadPortal_();return}this.resetPage_()}loadPortal_(){assert(!!this.cellularMetadata);assert(!this.getPortalWebview());const portalWebview=document.createElement("webview");this.$.portalContainer.appendChild(portalWebview);portalWebview.addEventListener("loadabort",this.onPortalLoadAbort_.bind(this));portalWebview.addEventListener("loadstop",this.onPortalLoadStop_.bind(this));window.addEventListener("message",this.onMessageReceived_.bind(this));if(this.cellularMetadata.paymentPostData){postDeviceDataToWebview(portalWebview,this.cellularMetadata.paymentUrl.url,this.cellularMetadata.paymentPostData);return}portalWebview.src=this.cellularMetadata.paymentUrl.url}resetPage_(){this.hasCarrierPortalLoaded_=false;const portalWebview=this.getPortalWebview();if(portalWebview){portalWebview.remove()}}onPortalLoadAbort_(){this.showError=true}onPortalLoadStop_(){if(this.hasCarrierPortalLoaded_){return}this.hasCarrierPortalLoaded_=true;this.dispatchEvent(new CustomEvent("carrier-portal-loaded",{bubbles:true,composed:true}));const portalWebview=this.getPortalWebview();assert(!!portalWebview);const contentWindow=portalWebview.contentWindow;assert(!!contentWindow);contentWindow.postMessage({msg:"loadedInWebview"},this.cellularMetadata.paymentUrl?.url)}onMessageReceived_(event){const messageType=event.data.type;const status=event.data.status;if(messageType==="requestDeviceInfoMsg"){const portalWebview=this.getPortalWebview();assert(!!portalWebview);const contentWindow=portalWebview.contentWindow;assert(!!contentWindow);contentWindow.postMessage({carrier:this.cellularMetadata.carrier,MEID:this.cellularMetadata.meid,IMEI:this.cellularMetadata.imei,MDN:this.cellularMetadata.mdn},this.cellularMetadata.paymentUrl?.url);return}if(messageType==="reportTransactionStatusMsg"){const success=status==="ok";this.dispatchEvent(new CustomEvent("on-carrier-portal-result",{bubbles:true,composed:true,detail:success}));return}}}customElements.define(ProvisioningPageElement.is,ProvisioningPageElement);function getTemplate$19(){return html`<!--_html_template_start_--><style>#illustration{background-image:url(chrome://resources/ash/common/cellular_setup/final_page_success.svg);background-position:center center;background-repeat:no-repeat;background-size:contain}#illustration.error{background-image:url(chrome://resources/ash/common/cellular_setup/error.svg);background-size:contain}@media(prefers-color-scheme:dark){#illustration{background-image:url(chrome://resources/ash/common/cellular_setup/final_page_success_dark.svg)}#illustration.error{background-image:url(chrome://resources/ash/common/cellular_setup/error_dark.svg)}}#illustrationJelly{height:242px;width:242px;align-self:center}:host-context(body.jelly-enabled) #illustration{display:none}:host-context(body:not(.jelly-enabled)) #illustrationJelly{display:none}</style>
<base-page title="[[getTitle_(showError)]]" message="[[getMessage_(showError)]]">
  <div id="illustration" class$="[[getPageBodyClass_(showError)]]" slot="page-body">
  </div>
  <iron-icon id="illustrationJelly" icon="[[getJellyIllustrationName_(showError)]]" slot="page-body">
  </iron-icon>
</base-page>
<!--_html_template_end_-->`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const FinalPageElementBase=I18nMixin(PolymerElement);class FinalPageElement extends FinalPageElementBase{static get is(){return"final-page"}static get template(){return getTemplate$19()}static get properties(){return{delegate:Object,showError:Boolean,message:String,errorMessage:String}}getTitle_(showError){if(this.delegate.shouldShowPageTitle()){return showError?this.i18n("finalPageErrorTitle"):this.i18n("finalPageTitle")}return null}getMessage_(showError){return showError?this.errorMessage:this.message}getPageBodyClass_(showError){return showError?"error":""}getJellyIllustrationName_(showError){return showError?"cellular-setup-illo:error":"cellular-setup-illo:final-page-success"}}customElements.define(FinalPageElement.is,FinalPageElement);function getTemplate$18(){return html`<!--_html_template_start_--><style>:host{display:flex;flex:1 1 auto;flex-direction:column}iron-pages{height:400px}</style>
<iron-pages attr-for-selected="id" selected="[[selectedPSimPageName_]]" selected-item="{{selectedPage_}}">
  <setup-loading-page id="simDetectPage" loading-title="[[getLoadingTitle_(state_)]]" loading-message="[[getLoadingMessage_(state_)]]" is-sim-detect-error="[[isSimDetectError_(state_)]]">
  </setup-loading-page>
  <provisioning-page id="provisioningPage" delegate="[[delegate]]" show-error="{{showError_}}" cellular-metadata="[[cellularMetadata_]]" on-carrier-portal-loaded="onCarrierPortalLoaded_" on-carrier-portal-result="onCarrierPortalResult_">
  </provisioning-page>
  <final-page id="finalPage" delegate="[[delegate]]" show-error="[[showError_]]" message="[[i18n('pSimfinalPageMessage')]]" error-message="[[i18n('finalPageErrorMessage')]]">
  </final-page>
</iron-pages>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SubflowMixin=dedupingMixin((superClass=>{class SubflowMixin extends superClass{static get properties(){return{buttonState:{type:Object,notify:true}}}initSubflow(){assertNotReached()}navigateForward(){assertNotReached()}navigateBackward(){assertNotReached()}}return SubflowMixin}));
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var PSimPageName;(function(PSimPageName){PSimPageName["SIM_DETECT"]="simDetectPage";PSimPageName["PROVISIONING"]="provisioningPage";PSimPageName["FINAL"]="finalPage"})(PSimPageName||(PSimPageName={}));var PSimUIState;(function(PSimUIState){PSimUIState["IDLE"]="idle";PSimUIState["STARTING_ACTIVATION"]="starting-activation";PSimUIState["WAITING_FOR_ACTIVATION_TO_START"]="waiting-for-activation-to-start";PSimUIState["TIMEOUT_START_ACTIVATION"]="timeout-start-activation";PSimUIState["FINAL_TIMEOUT_START_ACTIVATION"]="final-timeout-start-activation";PSimUIState["WAITING_FOR_PORTAL_TO_LOAD"]="waiting-for-portal-to-load";PSimUIState["TIMEOUT_PORTAL_LOAD"]="timeout-portal-load";PSimUIState["WAITING_FOR_USER_PAYMENT"]="waiting-for-user-payment";PSimUIState["WAITING_FOR_ACTIVATION_TO_FINISH"]="waiting-for-activation-to-finish";PSimUIState["TIMEOUT_FINISH_ACTIVATION"]="timeout-finish-activation";PSimUIState["ACTIVATION_SUCCESS"]="activation-success";PSimUIState["ALREADY_ACTIVATED"]="already-activated";PSimUIState["ACTIVATION_FAILURE"]="activation-failure"})(PSimUIState||(PSimUIState={}));var PSimSetupFlowResult;(function(PSimSetupFlowResult){PSimSetupFlowResult[PSimSetupFlowResult["SUCCESS"]=0]="SUCCESS";PSimSetupFlowResult[PSimSetupFlowResult["CANCELLED"]=1]="CANCELLED";PSimSetupFlowResult[PSimSetupFlowResult["CANCELLED_NO_SIM"]=2]="CANCELLED_NO_SIM";PSimSetupFlowResult[PSimSetupFlowResult["CANCELLED_COLD_SIM_DEFER"]=3]="CANCELLED_COLD_SIM_DEFER";PSimSetupFlowResult[PSimSetupFlowResult["CANCELLED_CARRIER_PORTAL"]=4]="CANCELLED_CARRIER_PORTAL";PSimSetupFlowResult[PSimSetupFlowResult["CANCELLED_PORTAL_ERROR"]=5]="CANCELLED_PORTAL_ERROR";PSimSetupFlowResult[PSimSetupFlowResult["CARRIER_PORTAL_TIMEOUT"]=6]="CARRIER_PORTAL_TIMEOUT";PSimSetupFlowResult[PSimSetupFlowResult["NETWORK_ERROR"]=7]="NETWORK_ERROR"})(PSimSetupFlowResult||(PSimSetupFlowResult={}));function getTimeoutMsForPSimUIState(state){if(state===PSimUIState.STARTING_ACTIVATION){return 1e4}if(state===PSimUIState.WAITING_FOR_PORTAL_TO_LOAD){return 1e4}if(state===PSimUIState.WAITING_FOR_ACTIVATION_TO_FINISH){return 1e3}return null}const MAX_START_ACTIVATION_ATTEMPTS=3;const PSIM_SETUP_RESULT_METRIC_NAME="Network.Cellular.PSim.SetupFlowResult";const SUCCESSFUL_PSIM_SETUP_DURATION_METRIC_NAME="Network.Cellular.PSim.CellularSetup.Success.Duration";const FAILED_PSIM_SETUP_DURATION_METRIC_NAME="Network.Cellular.PSim.CellularSetup.Failure.Duration";const PsimFlowUiElementBase=SubflowMixin(I18nMixin(PolymerElement));class PsimFlowUiElement extends PsimFlowUiElementBase{static get is(){return"psim-flow-ui"}static get template(){return getTemplate$18()}static get properties(){return{delegate:Object,nameOfCarrierPendingSetup:{type:String,notify:true,computed:"getCarrierText("+"selectedPSimPageName_, cellularMetadata_.*)"},forwardButtonLabel:{type:String,notify:true},state_:{type:String,value:PSimUIState.IDLE,observer:"handlePSimUIStateChange_"},selectedPSimPageName_:{type:String,value:PSimPageName.SIM_DETECT,notify:true},selectedPage_:Object,showError_:{type:Boolean,value:false},cellularMetadata_:{type:Object,value:null},startActivationAttempts_:{type:Number,value:0}}}constructor(){super();this.cellularSetupRemote_=null;this.activationDelegateReceiver_=null;this.currentTimeoutId_=null;this.carrierPortalHandler_=null;this.didCarrierPortalResultFail_=false;this.setTimeoutFunction_=setTimeout.bind(window);this.timeOnAttached_=null;this.cellularSetupRemote_=getCellularSetupRemote()}connectedCallback(){super.connectedCallback();this.timeOnAttached_=new Date}disconnectedCallback(){super.disconnectedCallback();let resultCode=null;switch(this.state_){case PSimUIState.IDLE:case PSimUIState.STARTING_ACTIVATION:resultCode=PSimSetupFlowResult.CANCELLED;break;case PSimUIState.WAITING_FOR_ACTIVATION_TO_START:resultCode=PSimSetupFlowResult.CANCELLED_COLD_SIM_DEFER;break;case PSimUIState.TIMEOUT_START_ACTIVATION:case PSimUIState.FINAL_TIMEOUT_START_ACTIVATION:resultCode=PSimSetupFlowResult.CANCELLED_NO_SIM;break;case PSimUIState.WAITING_FOR_PORTAL_TO_LOAD:resultCode=PSimSetupFlowResult.CANCELLED;break;case PSimUIState.TIMEOUT_PORTAL_LOAD:resultCode=PSimSetupFlowResult.CARRIER_PORTAL_TIMEOUT;break;case PSimUIState.WAITING_FOR_USER_PAYMENT:resultCode=PSimSetupFlowResult.CANCELLED_CARRIER_PORTAL;break;case PSimUIState.ACTIVATION_SUCCESS:case PSimUIState.WAITING_FOR_ACTIVATION_TO_FINISH:case PSimUIState.TIMEOUT_FINISH_ACTIVATION:case PSimUIState.ALREADY_ACTIVATED:resultCode=PSimSetupFlowResult.SUCCESS;break;case PSimUIState.ACTIVATION_FAILURE:resultCode=this.didCarrierPortalResultFail_?PSimSetupFlowResult.CANCELLED_PORTAL_ERROR:PSimSetupFlowResult.NETWORK_ERROR;break;default:assertNotReached()}assert(resultCode!==null);chrome.metricsPrivate.recordEnumerationValue(PSIM_SETUP_RESULT_METRIC_NAME,resultCode,Object.keys(PSimSetupFlowResult).length);const elapsedTimeMs=Date.now()-this.timeOnAttached_.getTime();if(resultCode===PSimSetupFlowResult.SUCCESS){chrome.metricsPrivate.recordLongTime(SUCCESSFUL_PSIM_SETUP_DURATION_METRIC_NAME,elapsedTimeMs);return}chrome.metricsPrivate.recordLongTime(FAILED_PSIM_SETUP_DURATION_METRIC_NAME,elapsedTimeMs)}onActivationStarted(metadata){this.clearTimer_();this.cellularMetadata_=metadata;this.state_=PSimUIState.WAITING_FOR_PORTAL_TO_LOAD}initSubflow(){this.state_=PSimUIState.STARTING_ACTIVATION;this.startActivationAttempts_=0;this.updateButtonBarState_();this.dispatchEvent(new CustomEvent("focus-default-button",{bubbles:true,composed:true}))}navigateForward(){switch(this.state_){case PSimUIState.WAITING_FOR_PORTAL_TO_LOAD:case PSimUIState.TIMEOUT_PORTAL_LOAD:case PSimUIState.WAITING_FOR_USER_PAYMENT:case PSimUIState.ACTIVATION_SUCCESS:this.state_=PSimUIState.WAITING_FOR_ACTIVATION_TO_FINISH;break;case PSimUIState.WAITING_FOR_ACTIVATION_TO_FINISH:case PSimUIState.TIMEOUT_FINISH_ACTIVATION:case PSimUIState.FINAL_TIMEOUT_START_ACTIVATION:case PSimUIState.ALREADY_ACTIVATED:case PSimUIState.ACTIVATION_FAILURE:this.dispatchEvent(new CustomEvent("exit-cellular-setup",{bubbles:true,composed:true}));break;case PSimUIState.TIMEOUT_START_ACTIVATION:this.state_=PSimUIState.STARTING_ACTIVATION;break;default:assertNotReached()}}setTimerFunctionForTest(timerFunction){this.setTimeoutFunction_=timerFunction}updateButtonBarState_(){let buttonState;switch(this.state_){case PSimUIState.IDLE:case PSimUIState.STARTING_ACTIVATION:case PSimUIState.WAITING_FOR_ACTIVATION_TO_START:case PSimUIState.WAITING_FOR_PORTAL_TO_LOAD:case PSimUIState.TIMEOUT_PORTAL_LOAD:case PSimUIState.WAITING_FOR_USER_PAYMENT:this.forwardButtonLabel=this.i18n("next");buttonState={backward:ButtonState.HIDDEN,cancel:ButtonState.ENABLED,forward:ButtonState.DISABLED};break;case PSimUIState.TIMEOUT_START_ACTIVATION:this.forwardButtonLabel=this.i18n("tryAgain");buttonState={backward:ButtonState.HIDDEN,cancel:ButtonState.ENABLED,forward:ButtonState.ENABLED};break;case PSimUIState.ACTIVATION_SUCCESS:this.forwardButtonLabel=this.i18n("next");buttonState={backward:ButtonState.HIDDEN,cancel:ButtonState.ENABLED,forward:ButtonState.ENABLED};break;case PSimUIState.ALREADY_ACTIVATED:case PSimUIState.ACTIVATION_FAILURE:case PSimUIState.FINAL_TIMEOUT_START_ACTIVATION:this.forwardButtonLabel=this.i18n("done");buttonState={backward:ButtonState.HIDDEN,cancel:ButtonState.ENABLED,forward:ButtonState.ENABLED};break;case PSimUIState.WAITING_FOR_ACTIVATION_TO_FINISH:case PSimUIState.TIMEOUT_FINISH_ACTIVATION:this.forwardButtonLabel=this.i18n("done");buttonState={backward:ButtonState.HIDDEN,cancel:ButtonState.HIDDEN,forward:ButtonState.ENABLED};break;default:assertNotReached()}this.set("buttonState",buttonState)}onActivationFinished(result){this.closeActivationConnection_();switch(result){case ActivationResult.kSuccessfullyStartedActivation:this.state_=PSimUIState.ACTIVATION_SUCCESS;break;case ActivationResult.kAlreadyActivated:this.state_=PSimUIState.ALREADY_ACTIVATED;break;case ActivationResult.kFailedToActivate:this.state_=PSimUIState.ACTIVATION_FAILURE;break;default:assertNotReached()}}getCarrierText(){if(this.selectedPSimPageName_===PSimPageName.PROVISIONING&&this.cellularMetadata_){return this.cellularMetadata_.carrier}return""}updateShowError_(){switch(this.state_){case PSimUIState.TIMEOUT_PORTAL_LOAD:case PSimUIState.TIMEOUT_FINISH_ACTIVATION:case PSimUIState.ACTIVATION_FAILURE:this.showError_=true;return;default:this.showError_=false;return}}updateSelectedPage_(){switch(this.state_){case PSimUIState.IDLE:case PSimUIState.STARTING_ACTIVATION:case PSimUIState.WAITING_FOR_ACTIVATION_TO_START:case PSimUIState.TIMEOUT_START_ACTIVATION:case PSimUIState.FINAL_TIMEOUT_START_ACTIVATION:this.selectedPSimPageName_=PSimPageName.SIM_DETECT;return;case PSimUIState.WAITING_FOR_PORTAL_TO_LOAD:case PSimUIState.TIMEOUT_PORTAL_LOAD:case PSimUIState.WAITING_FOR_USER_PAYMENT:case PSimUIState.ACTIVATION_SUCCESS:this.selectedPSimPageName_=PSimPageName.PROVISIONING;return;case PSimUIState.WAITING_FOR_ACTIVATION_TO_FINISH:case PSimUIState.TIMEOUT_FINISH_ACTIVATION:case PSimUIState.ALREADY_ACTIVATED:case PSimUIState.ACTIVATION_FAILURE:this.selectedPSimPageName_=PSimPageName.FINAL;return;default:assertNotReached()}}handlePSimUIStateChange_(){this.updateShowError_();this.updateSelectedPage_();this.clearTimer_();const timeoutMs=getTimeoutMsForPSimUIState(this.state_);if(timeoutMs!==null){this.currentTimeoutId_=this.setTimeoutFunction_(this.onTimeout_.bind(this),timeoutMs)}if(this.state_===PSimUIState.STARTING_ACTIVATION){this.startActivation_()}this.updateButtonBarState_()}onTimeout_(){this.closeActivationConnection_();switch(this.state_){case PSimUIState.STARTING_ACTIVATION:this.startActivationAttempts_++;if(this.startActivationAttempts_<MAX_START_ACTIVATION_ATTEMPTS){this.state_=PSimUIState.TIMEOUT_START_ACTIVATION}else{this.state_=PSimUIState.FINAL_TIMEOUT_START_ACTIVATION}return;case PSimUIState.WAITING_FOR_PORTAL_TO_LOAD:this.state_=PSimUIState.TIMEOUT_PORTAL_LOAD;return;case PSimUIState.WAITING_FOR_ACTIVATION_TO_FINISH:this.state_=PSimUIState.TIMEOUT_FINISH_ACTIVATION;return;default:assertNotReached()}}startActivation_(){assert(!this.activationDelegateReceiver_);this.activationDelegateReceiver_=new ActivationDelegateReceiver(this);this.cellularSetupRemote_.startActivation(this.activationDelegateReceiver_.$.bindNewPipeAndPassRemote()).then((params=>{this.carrierPortalHandler_=params.observer}))}closeActivationConnection_(){assert(!!this.activationDelegateReceiver_);this.activationDelegateReceiver_.$.close();this.activationDelegateReceiver_=null;this.carrierPortalHandler_=null;this.cellularMetadata_=null}clearTimer_(){if(this.currentTimeoutId_){clearTimeout(this.currentTimeoutId_)}this.currentTimeoutId_=null}onCarrierPortalLoaded_(){this.state_=PSimUIState.WAITING_FOR_USER_PAYMENT;this.carrierPortalHandler_.onCarrierPortalStatusChange(CarrierPortalStatus.kPortalLoadedWithoutPaidUser)}onCarrierPortalResult_(event){const success=event.detail;this.didCarrierPortalResultFail_=!success;this.state_=success?PSimUIState.ACTIVATION_SUCCESS:PSimUIState.ACTIVATION_FAILURE}getLoadingMessage_(){if(this.state_===PSimUIState.TIMEOUT_START_ACTIVATION){return this.i18n("simDetectPageErrorMessage")}else if(this.state_===PSimUIState.FINAL_TIMEOUT_START_ACTIVATION){return this.i18n("simDetectPageFinalErrorMessage")}return this.i18n("establishNetworkConnectionMessage")}isSimDetectError_(){return this.state_===PSimUIState.TIMEOUT_START_ACTIVATION||this.state_===PSimUIState.FINAL_TIMEOUT_START_ACTIVATION}getLoadingTitle_(){if(this.delegate.shouldShowPageTitle()&&this.isSimDetectError_()){return this.i18n("simDetectPageErrorTitle")}return""}}customElements.define(PsimFlowUiElement.is,PsimFlowUiElement);function getTemplate$17(){return html`<!--_html_template_start_--><style include="iron-positioning">:host([expanded_]) #pageBody{transition-duration:.2s}:host(:not([expanded_])) #pageBody{transition-duration:150ms}:host([expanded_]) #esimQrCodeDetection{height:190px;transition-duration:.2s}:host(:not([expanded_])) #esimQrCodeDetection{height:140px;transition-duration:150ms}:host cr-button{--ripple-opacity:0}#esimQrCodeDetection{background-color:var(--cros-bg-color-dropped-elevation-1);border-radius:4px;margin:20px 0 15px 0;overflow:hidden;position:relative}paper-spinner-lite{height:20px;margin-inline-end:6px;margin-top:6px;width:20px}cr-button:not(:focus){border:none;box-shadow:none}cr-button:hover{background-color:transparent}cr-button[disabled]{background-color:transparent}cr-button[disabled]>iron-icon{--iron-icon-fill-color:var(--cros-icon-color-disabled)}.animate{transition-property:height;transition-timing-function:cubic-bezier(0,0,.2,1)}.center{left:50%;position:absolute;top:50%;transform:translateY(-50%) translateX(-50%)}.width-92{width:92%}.label{font-weight:500}.button-image{margin-inline-end:8px}.scan-finish-image{position:absolute}.scan-finish-message{padding-inline-end:0;padding-inline-start:30px}.scan-finish-message:hover{cursor:default}.scan-error-header{--iron-icon-fill-color:var(--cros-icon-color-alert)}.scan-error-message{color:var(--cros-text-color-alert)}.blue-icon{--iron-icon-fill-color:var(--cros-icon-color-prominent)}.hidden{visibility:hidden}.visually-hidden{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}#scanSucessHeader{--iron-icon-fill-color:var(--cros-icon-color-positive);margin-bottom:8px}#scanSuccessMessage{color:var(--cros-text-color-positive);font-size:medium}#scanFailureHeader{margin-bottom:4px}#useCameraAgainButton{display:block;font-weight:500;text-align:center}#tryAgainButton{display:block;text-align:center}#switchCameraButton{background-color:var(--cros-tooltip-background-color);border-radius:16px;color:var(--cros-tooltip-label-color);margin:8px;padding:8px;position:absolute;right:0;z-index:2}#switchCameraButton iron-icon{--iron-icon-fill-color:var(--cros-tooltip-icon-color);filter:brightness(2.1)}#inputSubtitle{bottom:0;color:var(--cros-text-color-secondary);font-size:var(--cr-form-field-label-font-size);letter-spacing:.4px;line-height:var(--cr-form-field-label-line-height);margin-top:-16px}#video{height:inherit;transform:rotateY(180deg)}#pageBody{margin-top:-20px}#startScanningButton{max-width:470px;min-width:345px;text-align:center;width:auto}#carrierLockWarningContainer{display:flex;margin-bottom:24px;margin-top:20px}#carrierLockWarningIcon{--iron-icon-fill-color:var(--cros-icon-color-alert);--iron-icon-height:24px;--iron-icon-width:24px;margin-inline-end:4px}</style>
<base-page>
  <div slot="page-body" id="pageBody" class="animate">
    <span id="description" aria-live="polite">
      [[getDescription_(cameraCount_, qrCodeDetector_, showNoProfilesFound)]]
    </span>
    <template is="dom-if" if="[[shouldShowCarrierLockWarning_(isDeviceCarrierLocked_)]]" restamp>
      <div id="carrierLockWarningContainer" aria-live="alert">
          <iron-icon id="carrierLockWarningIcon" icon="cellular-setup:warning">
          </iron-icon>
        [[i18n('eSimCarrierLockedDevice')]]
      </div>
    </template>
    <template is="dom-if" if="[[isScanningAvailable_(cameraCount_, qrCodeDetector_.*)]]" restamp>
      <div id="esimQrCodeDetection" class="animate">
        <cr-button id="switchCameraButton" on-click="onSwitchCameraButtonPressed_" hidden$="[[isUiElementHidden_(UiElement.SWITCH_CAMERA, state_, cameraCount_)]]" disabled="[[isUiElementDisabled_(UiElement.SWITCH_CAMERA, state_, showBusy)]]">
          <iron-icon class="button-image" icon="cellular-setup:switch-camera"></iron-icon>
          [[i18n('switchCamera')]]
        </cr-button>
        <video id="video" autoplay muted hidden$="[[isUiElementHidden_(UiElement.VIDEO, state_)]]">
        </video>
        <template is="dom-if" if="[[qrCodeCameraA11yString_]]" restamp>
          <div class="visually-hidden" aria-live="polite">
            [[qrCodeCameraA11yString_]]
          </div>
        </template>
        <div class="center blue-icon" id="startScanningContainer" hidden$="[[isUiElementHidden_(UiElement.START_SCANNING, state_)]]">
          <cr-button class="label" id="startScanningButton" on-click="startScanning_" disabled="[[isUiElementDisabled_(UiElement.START_SCANNING, state_, showBusy)]]">
            <iron-icon class="button-image" icon="cellular-setup:camera"></iron-icon>
            [[i18n('useCamera')]]
          </cr-button>
        </div>
        <div class="center" id="scanFinishContainer" hidden$="[[isUiElementHidden_(UiElement.SCAN_FINISH, state_)]]">
          <div>
            <div id="scanSuccessContainer" hidden$="[[isUiElementHidden_(UiElement.SCAN_SUCCESS, state_)]]">
              <div id="scanSucessHeader" hidden$="[[isUiElementHidden_(UiElement.CODE_DETECTED, state_)]]">
                <iron-icon class="scan-finish-image" icon="cellular-setup:checked"></iron-icon>
                <span class="label scan-finish-message" id="scanSuccessMessage">
                  [[i18n('scanQRCodeSuccess')]]
                </span>
              </div>
              <div id="scanInstallFailureHeader" class="scan-error-header" hidden$="[[isUiElementHidden_(UiElement.SCAN_INSTALL_FAILURE, state_)]]">
                <iron-icon class="scan-finish-image" icon="cellular-setup:error"></iron-icon>
                <span class="label scan-finish-message scan-error-message">
                  [[i18n('scanQrCodeInvalid')]]
                </span>
              </div>
              <template is="dom-if" restamp if="[[!isUiElementHidden_(UiElement.SCAN_INSTALL_FAILURE, state_)]]">
                <cr-button id="useCameraAgainButton" class="blue-icon" on-click="startScanning_">
                  <iron-icon class="button-image" icon="cellular-setup:camera">
                  </iron-icon>
                  [[i18n('qrCodeUseCameraAgain')]]
                </cr-button>
              </template>
            </div>
            <div id="scanFailureContainer" hidden$="[[isUiElementHidden_(UiElement.SCAN_FAILURE, state_)]]">
              <div id="scanFailureHeader" class="scan-error-header">
                <iron-icon class="scan-finish-image" icon="cellular-setup:error"></iron-icon>
                <span class="label scan-finish-message scan-error-message">
                  [[i18n('scanQrCodeError')]]
                </span>
              </div>
              <cr-button id="tryAgainButton" class="blue-icon" on-click="startScanning_" disabled="[[isUiElementDisabled_(UiElement.SCAN_FAILURE, state_, showBusy)]]">
                <iron-icon class="button-image" icon="cellular-setup:try-again"></iron-icon>
                [[i18n('qrCodeRetry')]]
              </cr-button>
            </div>
          </div>
        </div>
      </div>
    </template>
    <div id="activationCodeContainer" class$="[[computeActivationCodeClass_(
          cameraCount_, qrCodeDetector_.*)]]">
      <cr-input id="activationCode" label="[[i18n('activationCode')]]" value="{{activationCode}}" disabled="[[showBusy]]" on-keydown="onKeyDown_" invalid="[[shouldActivationCodeInputBeInvalid_(state_,
              isActivationCodeInvalidFormat_)]]" error-message="[[getInputErrorMessage_()]]" aria-description="[[getInputSubtitle_(showBusy)]]">
        <template is="dom-if" if="[[showBusy]]">
          <div slot="suffix">
            <paper-spinner-lite active>
            </paper-spinner-lite>
          </div>
        </template>
      </cr-input>
      <div id="inputSubtitle" hidden$="[[shouldActivationCodeInputBeInvalid_(state_,
              isActivationCodeInvalidFormat_)]]">
        [[getInputSubtitle_(showBusy)]]
      </div>
    </div>
  </div>
</base-page>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const QR_CODE_DETECTION_INTERVAL_MS=1e3;var PageState;(function(PageState){PageState[PageState["MANUAL_ENTRY"]=1]="MANUAL_ENTRY";PageState[PageState["SCANNING_USER_FACING"]=2]="SCANNING_USER_FACING";PageState[PageState["SCANNING_ENVIRONMENT_FACING"]=3]="SCANNING_ENVIRONMENT_FACING";PageState[PageState["SWITCHING_CAM_USER_TO_ENVIRONMENT"]=4]="SWITCHING_CAM_USER_TO_ENVIRONMENT";PageState[PageState["SWITCHING_CAM_ENVIRONMENT_TO_USER"]=5]="SWITCHING_CAM_ENVIRONMENT_TO_USER";PageState[PageState["SCANNING_SUCCESS"]=6]="SCANNING_SUCCESS";PageState[PageState["SCANNING_FAILURE"]=7]="SCANNING_FAILURE";PageState[PageState["MANUAL_ENTRY_INSTALL_FAILURE"]=8]="MANUAL_ENTRY_INSTALL_FAILURE";PageState[PageState["SCANNING_INSTALL_FAILURE"]=9]="SCANNING_INSTALL_FAILURE"})(PageState||(PageState={}));var UiElement;(function(UiElement){UiElement[UiElement["START_SCANNING"]=1]="START_SCANNING";UiElement[UiElement["VIDEO"]=2]="VIDEO";UiElement[UiElement["SWITCH_CAMERA"]=3]="SWITCH_CAMERA";UiElement[UiElement["SCAN_FINISH"]=4]="SCAN_FINISH";UiElement[UiElement["SCAN_SUCCESS"]=5]="SCAN_SUCCESS";UiElement[UiElement["SCAN_FAILURE"]=6]="SCAN_FAILURE";UiElement[UiElement["CODE_DETECTED"]=7]="CODE_DETECTED";UiElement[UiElement["SCAN_INSTALL_FAILURE"]=8]="SCAN_INSTALL_FAILURE"})(UiElement||(UiElement={}));const QR_CODE_FORMAT="qr_code";const ACTIVATION_CODE_PREFIX="LPA:1$";const ActivationCodePageElementBase=I18nMixin(PolymerElement);class ActivationCodePageElement extends ActivationCodePageElementBase{static get is(){return"activation-code-page"}static get template(){return getTemplate$17()}static get properties(){return{activationCode:{type:String,notify:true,observer:"onActivationCodeChanged_"},showError:{type:Boolean,notify:true,observer:"onShowErrorChanged_"},isFromQrCode:{type:Boolean,notify:true,value:false},showBusy:{type:Boolean,value:false},showNoProfilesFound:{type:Boolean,notify:true},UiElement:{type:Object,value:UiElement},state_:{type:Object,value:PageState,observer:"onStateChanged_"},cameraCount_:{type:Number,value:0,observer:"onHasCameraCountChanged_"},qrCodeDetector_:{type:Object,value:null},expanded_:{type:Boolean,value:false,reflectToAttribute:true},qrCodeCameraA11yString_:{type:String,value:""},isDeviceCarrierLocked_:{type:Boolean,value:false},isCellularCarrierLockEnabled_:{type:Boolean,value(){return loadTimeData.valueExists("isCellularCarrierLockEnabled")&&loadTimeData.getBoolean("isCellularCarrierLockEnabled")}},isActivationCodeInvalidFormat_:{type:Boolean,value:false}}}constructor(){super();this.qrCodeDetector_=null;this.networkConfig_=null;this.mediaDevices_=null;this.stream_=null;this.qrCodeDetectorTimer_=null;this.setIntervalFunction_=setInterval.bind(window);this.barcodeDetectorClass_=BarcodeDetector;this.imageCaptureClass_=ImageCapture;if(!this.isCellularCarrierLockEnabled_){return}this.networkConfig_=MojoInterfaceProviderImpl.getInstance().getMojoServiceRemote();this.networkConfig_.getDeviceStateList().then((response=>{const devices=response.result;const deviceState=devices.find((device=>device.type==NetworkType.kCellular))||null;if(deviceState){this.isDeviceCarrierLocked_=deviceState.isCarrierLocked}}))}ready(){super.ready();this.setMediaDevices(navigator.mediaDevices);this.initBarcodeDetector_();this.state_=PageState.MANUAL_ENTRY}disconnectedCallback(){super.disconnectedCallback();this.stopStream_(this.stream_);if(this.qrCodeDetectorTimer_){this.clearQrCodeDetectorTimer_()}this.mediaDevices_.removeEventListener("devicechange",this.updateCameraCount_.bind(this))}playVideo_(){const videoElement=this.shadowRoot.querySelector("#video");if(videoElement){videoElement.play()}}stopStream_(stream){if(stream){stream.getTracks()[0].stop()}}isScanningAvailable_(){return this.cameraCount_>0&&!!this.qrCodeDetector_}shouldShowCarrierLockWarning_(){return this.isCellularCarrierLockEnabled_&&this.isDeviceCarrierLocked_}async initBarcodeDetector_(){const formats=await this.barcodeDetectorClass_.getSupportedFormats();if(!formats||formats.length===0){this.qrCodeDetector_=null;return}const qrCodeFormat=formats.find((format=>format===QR_CODE_FORMAT));if(qrCodeFormat){this.qrCodeDetector_=new this.barcodeDetectorClass_({formats:[QR_CODE_FORMAT]})}}setMediaDevices(mediaDevices){this.mediaDevices_=mediaDevices;this.updateCameraCount_();this.mediaDevices_.addEventListener("devicechange",this.updateCameraCount_.bind(this))}async setFakesForTesting(barcodeDetectorClass,imageCaptureClass,setIntervalFunction,playVideoFunction,stopStreamFunction){this.barcodeDetectorClass_=barcodeDetectorClass;await this.initBarcodeDetector_();this.imageCaptureClass_=imageCaptureClass;this.setIntervalFunction_=setIntervalFunction;this.playVideo_=playVideoFunction;this.stopStream_=stopStreamFunction}getQrCodeDetectorTimerForTest(){return this.qrCodeDetectorTimer_}computeActivationCodeClass_(){return this.isScanningAvailable_()?"relative":"center width-92"}updateCameraCount_(){if(!this.mediaDevices_||!this.mediaDevices_.enumerateDevices){this.cameraCount_=0;return}this.mediaDevices_.enumerateDevices().then((devices=>{this.cameraCount_=devices.filter((device=>device.kind==="videoinput")).length})).catch((()=>{this.cameraCount_=0}))}onHasCameraCountChanged_(){if(this.state_===PageState.SCANNING_ENVIRONMENT_FACING&&this.cameraCount_===1){this.state_=PageState.SWITCHING_CAM_ENVIRONMENT_TO_USER;this.startScanning_()}}startScanning_(){const oldStream=this.stream_;if(this.qrCodeDetectorTimer_){this.clearQrCodeDetectorTimer_()}const useUserFacingCamera=this.state_!==PageState.SWITCHING_CAM_USER_TO_ENVIRONMENT;this.mediaDevices_.getUserMedia({video:{height:130,width:482,facingMode:useUserFacingCamera?"user":"environment"},audio:false}).then((stream=>{this.stream_=stream;if(this.stream_){const videoElement=this.shadowRoot.querySelector("#video");if(videoElement){videoElement.srcObject=stream;this.playVideo_()}}this.stopStream_(oldStream);this.activationCode="";this.state_=useUserFacingCamera?PageState.SCANNING_USER_FACING:PageState.SCANNING_ENVIRONMENT_FACING;if(this.stream_){this.detectQrCode_()}})).catch((()=>{this.state_=PageState.SCANNING_FAILURE}))}async detectQrCode_(){try{this.qrCodeDetectorTimer_=this.setIntervalFunction_((async()=>{assert(!!this.stream_);const capturer=new this.imageCaptureClass_(this.stream_.getVideoTracks()[0]);const frame=await capturer.grabFrame();const activationCode=await this.detectActivationCode_(frame);if(activationCode){if(this.qrCodeDetectorTimer_){this.clearQrCodeDetectorTimer_()}this.activationCode=activationCode;this.stopStream_(this.stream_);if(this.validateActivationCode_(activationCode)){this.state_=PageState.SCANNING_SUCCESS}else{this.state_=PageState.SCANNING_INSTALL_FAILURE}}}),QR_CODE_DETECTION_INTERVAL_MS)}catch(error){this.state_=PageState.SCANNING_FAILURE}}async detectActivationCode_(frame){if(!this.qrCodeDetector_){return null}const qrCodes=await this.qrCodeDetector_.detect(frame);if(qrCodes.length>0){return qrCodes[0].rawValue}return null}onActivationCodeChanged_(){const event=new CustomEvent("activation-code-updated",{bubbles:true,composed:true,detail:{activationCode:this.validateActivationCode_(this.activationCode)?this.activationCode:null}});this.dispatchEvent(event)}clearQrCodeDetectorTimer_(){assert(!!this.qrCodeDetectorTimer_);clearTimeout(this.qrCodeDetectorTimer_);this.qrCodeDetectorTimer_=null}validateActivationCode_(activationCode){if(activationCode.length<=ACTIVATION_CODE_PREFIX.length){this.isActivationCodeInvalidFormat_=activationCode!==ACTIVATION_CODE_PREFIX.substring(0,activationCode.length);return false}else{this.isActivationCodeInvalidFormat_=activationCode.substring(0,ACTIVATION_CODE_PREFIX.length)!==ACTIVATION_CODE_PREFIX}if(this.isActivationCodeInvalidFormat_){return false}return true}onSwitchCameraButtonPressed_(){if(this.state_===PageState.SCANNING_USER_FACING){this.state_=PageState.SWITCHING_CAM_USER_TO_ENVIRONMENT}else if(this.state_===PageState.SCANNING_ENVIRONMENT_FACING){this.state_=PageState.SWITCHING_CAM_ENVIRONMENT_TO_USER}this.startScanning_()}onShowErrorChanged_(){if(this.showError){if(this.state_===PageState.MANUAL_ENTRY){this.state_=PageState.MANUAL_ENTRY_INSTALL_FAILURE;afterNextRender(this,(()=>{focusWithoutInk(this.$.activationCode)}))}else if(this.state_===PageState.SCANNING_SUCCESS){this.state_=PageState.SCANNING_INSTALL_FAILURE}}}onStateChanged_(){this.qrCodeCameraA11yString_="";if(this.state_!==PageState.MANUAL_ENTRY_INSTALL_FAILURE&&this.state_!==PageState.SCANNING_INSTALL_FAILURE){this.showError=false}if(this.state_===PageState.MANUAL_ENTRY){this.isFromQrCode=false;if(this.qrCodeDetectorTimer_){this.clearQrCodeDetectorTimer_()}afterNextRender(this,(()=>{this.stopStream_(this.stream_)}))}if(this.state_===PageState.SCANNING_USER_FACING||this.state_===PageState.SCANNING_ENVIRONMENT_FACING){this.qrCodeCameraA11yString_=this.i18n("qrCodeA11YCameraOn");this.expanded_=true;return}if(this.state_===PageState.SCANNING_SUCCESS){this.isFromQrCode=true;this.qrCodeCameraA11yString_=this.i18n("qrCodeA11YCameraScanSuccess");this.dispatchEvent(new CustomEvent("focus-default-button",{bubbles:true,composed:true}))}this.expanded_=false}onKeyDown_(e){if(e.key==="Enter"){this.dispatchEvent(new CustomEvent("forward-navigation-requested",{bubbles:true,composed:true}))}if(e.key==="Tab"){return}this.state_=PageState.MANUAL_ENTRY;e.stopPropagation()}isUiElementHidden_(uiElement,state){switch(uiElement){case UiElement.START_SCANNING:return state!==PageState.MANUAL_ENTRY&&state!==PageState.MANUAL_ENTRY_INSTALL_FAILURE;case UiElement.VIDEO:return state!==PageState.SCANNING_USER_FACING&&state!==PageState.SCANNING_ENVIRONMENT_FACING;case UiElement.SWITCH_CAMERA:const isScanning=state===PageState.SCANNING_USER_FACING||state===PageState.SCANNING_ENVIRONMENT_FACING;return!(isScanning&&this.cameraCount_>1);case UiElement.SCAN_FINISH:return state!==PageState.SCANNING_SUCCESS&&state!==PageState.SCANNING_FAILURE&&state!==PageState.SCANNING_INSTALL_FAILURE;case UiElement.SCAN_SUCCESS:return state!==PageState.SCANNING_SUCCESS&&state!==PageState.SCANNING_INSTALL_FAILURE;case UiElement.SCAN_FAILURE:return state!==PageState.SCANNING_FAILURE;case UiElement.CODE_DETECTED:return state!==PageState.SCANNING_SUCCESS;case UiElement.SCAN_INSTALL_FAILURE:return state!==PageState.SCANNING_INSTALL_FAILURE}}isUiElementDisabled_(uiElement,state,showBusy){if(showBusy){return true}switch(uiElement){case UiElement.SWITCH_CAMERA:return state===PageState.SWITCHING_CAM_USER_TO_ENVIRONMENT||state===PageState.SWITCHING_CAM_ENVIRONMENT_TO_USER;default:return false}}getDescription_(){if(!this.isScanningAvailable_()){if(this.showNoProfilesFound){return this.i18n("enterActivationCodeNoProfilesFound")}return this.i18n("enterActivationCode")}if(this.showNoProfilesFound){return this.i18n("scanQRCodeNoProfilesFound")}return this.i18n("scanQRCode")}shouldActivationCodeInputBeInvalid_(state){if(this.isActivationCodeInvalidFormat_){return true}return state===PageState.MANUAL_ENTRY_INSTALL_FAILURE}getInputSubtitle_(showBusy){if(showBusy){return this.i18n("scanQrCodeLoading")}return loadTimeData.getString("scanQrCodeInputSubtitle")}getInputErrorMessage_(){return loadTimeData.getString("scanQrCodeInputError")}}customElements.define(ActivationCodePageElement.is,ActivationCodePageElement);function getTemplate$16(){return html`<!--_html_template_start_--><style>#pageBody{height:282px;margin-top:-20px;overflow:hidden}#animationContainer{display:flex;height:216px;margin-bottom:30px;margin-top:24px}cros-lottie-renderer{margin:auto}</style>

<base-page>
  <div slot="page-body" id="pageBody" class="layout vertical center-center">
    <span>[[i18n('verifyingActivationCode')]]</span>
    <div id="animationContainer">
      <cros-lottie-renderer id="spinner" asset-url="chrome://resources/ash/common/cellular_setup/spinner.json" autoplay dynamic aria-hidden>
      </cros-lottie-renderer>
    </div>
  </div>
</base-page>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ActivationVerificationPageElementBase=I18nMixin(PolymerElement);class ActivationVerificationPageElement extends ActivationVerificationPageElementBase{static get is(){return"activation-verification-page"}static get template(){return getTemplate$16()}}customElements.define(ActivationVerificationPageElement.is,ActivationVerificationPageElement);function getTemplate$15(){return html`<!--_html_template_start_--><style include="cr-shared-style iron-flex">#pageBody{height:282px;margin-top:-20px;overflow:hidden}#illustration{height:216px;width:448px;align-self:center}</style>
<base-page>
  <div slot="page-body" id="pageBody">
    <localized-link id="shouldSkipDiscovery" localized-string="[[i18nAdvanced('profileDiscoveryConsentMessageWithLink')]]" on-link-clicked="shouldSkipDiscoveryClicked_">
    </localized-link>
    <iron-icon id="illustration" icon="cellular-setup-illo:network-setup">
    </iron-icon>
  </div>
</base-page>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ProfileDiscoveryConsentPageElementBase=I18nMixin(PolymerElement);class ProfileDiscoveryConsentPageElement extends ProfileDiscoveryConsentPageElementBase{static get is(){return"profile-discovery-consent-page"}static get template(){return getTemplate$15()}static get properties(){return{shouldSkipDiscovery:{type:Boolean,notify:true}}}shouldSkipDiscoveryClicked_(e){e.detail.event.preventDefault();e.stopPropagation();this.shouldSkipDiscovery=true;this.dispatchEvent(new CustomEvent("forward-navigation-requested",{bubbles:true,composed:true}))}}customElements.define(ProfileDiscoveryConsentPageElement.is,ProfileDiscoveryConsentPageElement);function getTemplate$14(){return html`<!--_html_template_start_--><style include="iron-flex iron-positioning">#details{align-items:center;display:flex;flex:auto;min-height:var(--cr-section-two-line-min-height)}#profileImage{margin-inline-end:16px}#profileTitleLabel{color:var(--cros-text-color-primary)}.icon{margin-inline-end:8px;padding-inline-end:var(--cr-section-padding)}#checkmark{--iron-icon-fill-color:var(--cros-icon-color-prominent)}paper-spinner-lite{height:16px;vertical-align:middle;width:16px}</style>
<div class="two-line no-padding" selectable>
  <div class="flex layout horizontal center link-wrapper">
    <div id="details">
      <iron-media-query query="(prefers-color-scheme: dark)" query-matches="{{isDarkModeActive_}}">
      </iron-media-query>
      
      <div class="flex settings-box-text">
        <div id="profileTitleLabel">
          [[getProfileName_(profileProperties_)]]
        </div>
      </div>
    </div>
    <div class="icon" hidden$="[[!selected]]">
      <iron-icon id="checkmark" icon="cellular-setup:checked" tabindex="-1" hidden$="[[showLoadingIndicator]]">
      </iron-icon>
      <paper-spinner-lite active hidden$="[[!showLoadingIndicator]]">
      </paper-spinner-lite>
    </div>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ProfileDiscoveryListItemLegacyElement extends PolymerElement{static get is(){return"profile-discovery-list-item-legacy"}static get template(){return getTemplate$14()}static get properties(){return{profile:{type:Object,value:null,observer:"onProfileChanged_"},selected:{type:Boolean,reflectToAttribute:true},showLoadingIndicator:Boolean,profileProperties_:{type:Object,value:null,notify:true},isDarkModeActive_:{type:Boolean,value:false}}}async onProfileChanged_(){if(!this.profile){this.profileProperties_=null;return}const response=await this.profile.getProperties();this.profileProperties_=response.properties}getProfileName_(){if(!this.profileProperties_){return""}return mojoString16ToString(this.profileProperties_.name)}}customElements.define(ProfileDiscoveryListItemLegacyElement.is,ProfileDiscoveryListItemLegacyElement);function getTemplate$13(){return html`<!--_html_template_start_--><style include="cr-shared-style iron-flex">[slot=page-body]{height:300px;margin-top:-20px}profile-discovery-list-item{height:64px}#container{height:230px;margin-top:20px;overflow-x:hidden;overflow-y:auto}iron-list>:not(:first-of-type){border-top:var(--cr-separator-line)}</style>
<base-page>
  <div slot="page-body">
    <div>[[i18n('profileListPageMessage')]]</div>
    <div id="container" class="layout vertical flex" scrollable>
      <iron-list id="profileList" items="[[pendingProfiles]]" scroll-target="container" selection-enabled="[[!showBusy]]" preserve-focus selected-item="{{selectedProfile}}" role="listbox">
        <template>
          <profile-discovery-list-item-legacy profile="[[item]]" selected="[[isProfileSelected_(item, selectedProfile)]]" tabindex="0" role="option" aria-selected="[[isProfileSelected_(item, selectedProfile)]]" show-loading-indicator="[[showBusy]]">
          </profile-discovery-list-item-legacy>
        </template>
      </iron-list>
    </div>
  </div>
</base-page>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ProfileDiscoveryListPageLegacyElementBase=I18nMixin(PolymerElement);class ProfileDiscoveryListPageLegacyElement extends ProfileDiscoveryListPageLegacyElementBase{static get is(){return"profile-discovery-list-page-legacy"}static get template(){return getTemplate$13()}static get properties(){return{pendingProfiles:Array,selectedProfile:{type:Object,notify:true},showBusy:{type:Boolean,value:false}}}isProfileSelected_(profile){return this.selectedProfile===profile}}customElements.define(ProfileDiscoveryListPageLegacyElement.is,ProfileDiscoveryListPageLegacyElement);function getTemplate$12(){return html`<!--_html_template_start_--><style include="iron-flex iron-positioning">#container{background-color:transparent;border-radius:12px;border-width:1px;border:var(--cr-separator-line);box-sizing:border-box;color:var(--cr-secondary-text-color);font:var(--cros-body-2-font);height:64px;margin-bottom:6px;margin-top:6px;padding-inline-start:12px}:host([selected]) #container{color:var(--cros-sys-on_primary_container);background-color:var(--cros-sys-primary_container);border-style:none;font:var(--cros-button-2-font)}:host(:not([selected]):focus) #container{border-width:3px;padding-inline-start:10px}#details{align-items:center;display:flex;flex:auto;min-height:var(--cr-section-two-line-min-height)}#profileTitleLabel{margin-inline-start:8px}#profileImage{margin-inline-end:8px}.icon{padding-inline-end:var(--cr-section-padding)}#checkmark{--iron-icon-fill-color:var(--cros-icon-color-prominent)}</style>
<div id="container" class="flex layout horizontal center" selectable>
  <div id="details">
    
    <div class="flex settings-box-text">
      <div id="profileTitleLabel">
        [[getProfileName_(profileProperties)]]
      </div>
    </div>
  </div>
  <div class="icon" hidden$="[[!selected]]">
    <iron-icon id="checkmark" icon="cellular-setup:checked" tabindex="-1">
    </iron-icon>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ProfileDiscoveryListItemElement extends PolymerElement{static get is(){return"profile-discovery-list-item"}static get template(){return getTemplate$12()}static get properties(){return{profileProperties:{type:Object,value:null,notify:true},selected:{type:Boolean,reflectToAttribute:true},isDarkModeActive_:{type:Boolean,value:false}}}getProfileName_(){if(!this.profileProperties){return""}return mojoString16ToString(this.profileProperties.name)}}customElements.define(ProfileDiscoveryListItemElement.is,ProfileDiscoveryListItemElement);function getTemplate$11(){return html`<!--_html_template_start_--><style include="cr-shared-style iron-flex">[slot=page-body]{height:282px;margin-top:-20px}#container{height:230px;margin-top:20px;overflow-x:hidden;overflow-y:auto}[scrollable] iron-list>:not(.no-outline):focus{background-color:transparent!important}</style>
  <base-page>
    <div slot="page-body">
      <localized-link id="profileListMessage" localized-string="[[i18nAdvanced('profileListPageMessageWithLink')]]" on-link-clicked="enterManuallyClicked_">
      </localized-link>
      <div id="container" class="layout vertical flex" scrollable>
        <iron-list id="profileList" items="[[pendingProfileProperties]]" scroll-target="container" preserve-focus selection-enabled selected-item="{{selectedProfileProperties}}" role="listbox">
          <template>
            <profile-discovery-list-item profile-properties="[[item]]" selected="[[isProfilePropertiesSelected_(item, selectedProfileProperties)]]" tabindex="0" role="option" aria-selected="[[isProfilePropertiesSelected_(item, selectedProfileProperties)]]">
            </profile-discovery-list-item>
          </template>
        </iron-list>
      </div>
    </div>
  </base-page>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ProfileDiscoveryListPageElementBase=I18nMixin(PolymerElement);class ProfileDiscoveryListPageElement extends ProfileDiscoveryListPageElementBase{static get is(){return"profile-discovery-list-page"}static get template(){return getTemplate$11()}static get properties(){return{pendingProfileProperties:Array,selectedProfileProperties:{type:Object,notify:true}}}isProfilePropertiesSelected_(profileProperties){return this.selectedProfileProperties===profileProperties}enterManuallyClicked_(e){e.detail.event.preventDefault();e.stopPropagation();this.selectedProfileProperties=null;this.dispatchEvent(new CustomEvent("forward-navigation-requested",{bubbles:true,composed:true}))}}customElements.define(ProfileDiscoveryListPageElement.is,ProfileDiscoveryListPageElement);function getTemplate$10(){return html`<!--_html_template_start_--><style include="iron-flex iron-positioning">[slot=page-body]{height:282px;margin-top:-20px}#outerDiv{height:236px}.container{width:472px}#details{align-items:center;color:var(--cros-text-color-primary);display:flex;margin-bottom:40px}#profileImage{margin-inline-end:16px}#confirmationCodeContainer{margin-inline-end:16px}paper-spinner-lite{height:20px;position:absolute;right:16px;top:24px;width:20px}#loadingMessage{bottom:0;color:var(--cros-text-color-disabled);font-size:var(--cr-form-field-label-font-size);letter-spacing:.4px;line-height:var(--cr-form-field-label-line-height);position:absolute}</style>
<base-page>
  <div slot="page-body">
    <div aria-live="polite">
      [[i18n('confirmationCodeMessage')]]
    </div>
    <div id="outerDiv" class="layout horizontal center">
      <div class="container">
        <div id="details" hidden$="[[!shouldShowProfileDetails_(profile)]]">
          <iron-media-query query="(prefers-color-scheme: dark)" query-matches="{{isDarkModeActive_}}">
          </iron-media-query>
          <img id="profileImage" src="[[getProfileImage_(isDarkModeActive_)]]">
          <div>
            [[getProfileName_(profileProperties_)]]
          </div>
        </div>
        <div id="confirmationCodeContainer" class="relative">
          <cr-input id="confirmationCode" label="[[i18n('confirmationCodeInput')]]" value="{{confirmationCode}}" error-message="[[i18n('confirmationCodeErrorLegacy')]]" invalid="[[showError]]" disabled="[[showBusy]]" on-keydown="onKeyDown_">
          </cr-input>
          <paper-spinner-lite active hidden$="[[!showBusy]]">
          </paper-spinner-lite>
          <div id="loadingMessage" hidden$="[[!showBusy]]">
            [[i18n('confirmationCodeLoading')]]
          </div>
        </div>
      </div>
    </div>
  </div>
</base-page>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ConfirmationCodePageLegacyElementBase=I18nMixin(PolymerElement);class ConfirmationCodePageLegacyElement extends ConfirmationCodePageLegacyElementBase{static get is(){return"confirmation-code-page-legacy"}static get template(){return getTemplate$10()}static get properties(){return{profile:{type:Object,observer:"onProfileChanged_"},confirmationCode:{type:String,notify:true},showError:Boolean,showBusy:{type:Boolean,value:false},profileProperties_:{type:Object,value:null},isDarkModeActive_:{type:Boolean,value:false}}}async onProfileChanged_(){if(!this.profile){this.profileProperties_=null;return}const response=await this.profile.getProperties();this.profileProperties_=response.properties}onKeyDown_(e){if(e.key==="Enter"){this.dispatchEvent(new CustomEvent("forward-navigation-requested",{bubbles:true,composed:true}))}e.stopPropagation()}shouldShowProfileDetails_(){return!!this.profile}getProfileName_(){if(!this.profileProperties_){return""}return mojoString16ToString(this.profileProperties_.name)}getProfileImage_(){return this.isDarkModeActive_?"chrome://resources/ash/common/cellular_setup/default_esim_profile_dark.svg":"chrome://resources/ash/common/cellular_setup/default_esim_profile.svg"}}customElements.define(ConfirmationCodePageLegacyElement.is,ConfirmationCodePageLegacyElement);function getTemplate$$(){return html`<!--_html_template_start_--><style include="iron-flex iron-positioning">[slot=page-body]{height:282px;margin-top:-20px}#outerDiv{height:236px}.container{width:472px}#details{align-items:center;color:var(--cros-text-color-primary);display:flex;margin-bottom:40px}#confirmationCodeContainer{margin-inline-end:16px}</style>
<base-page>
  <div slot="page-body">
    <div aria-live="polite">
      [[i18n('confirmationCodeMessage')]]
    </div>
    <div id="outerDiv" class="layout horizontal center">
      <div class="container">
        <div id="details">
          <div>
            [[getProfileName_(profileProperties)]]
          </div>
        </div>
        <div id="confirmationCodeContainer" class="relative">
          <cr-input id="confirmationCode" label="[[i18n('confirmationCodeInput')]]" value="{{confirmationCode}}" error-message="[[i18n('confirmationCodeError')]]" invalid="[[showError]]" on-keydown="onKeyDown_">
          </cr-input>
        </div>
      </div>
    </div>
  </div>
</base-page>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ConfirmationCodePageElementBase=I18nMixin(PolymerElement);class ConfirmationCodePageElement extends ConfirmationCodePageElementBase{static get is(){return"confirmation-code-page"}static get template(){return getTemplate$$()}static get properties(){return{profileProperties:Object,confirmationCode:{type:String,notify:true},showError:Boolean}}onKeyDown_(e){if(e.key==="Enter"){this.dispatchEvent(new CustomEvent("forward-navigation-requested",{bubbles:true,composed:true}))}e.stopPropagation()}getProfileName_(){if(!this.profileProperties){return""}return mojoString16ToString(this.profileProperties.name)}}customElements.define(ConfirmationCodePageElement.is,ConfirmationCodePageElement);function getTemplate$_(){return html`<!--_html_template_start_--><style include="iron-flex">:host{align-content:space-between;display:flex;flex:1 1 auto;flex-direction:column}</style>
<iron-pages attr-for-selected="id" selected="[[selectedESimPageName_]]">
  <setup-loading-page id="profileLoadingPage" loading-message="[[getLoadingMessage_(hasHadActiveCellularNetwork_)]]">
  </setup-loading-page>
  <template is="dom-if" if="[[smdsSupportEnabled_]]" restamp>
    <profile-discovery-consent-page id="profileDiscoveryConsentPage" should-skip-discovery="{{shouldSkipDiscovery_}}">
    </profile-discovery-consent-page>
  </template>
  <template is="dom-if" if="[[smdsSupportEnabled_]]" restamp>
      <profile-discovery-list-page id="profileDiscoveryPage" pending-profile-properties="[[pendingProfileProperties_]]" selected-profile-properties="{{selectedProfileProperties_}}">
      </profile-discovery-list-page>
  </template>
  <template is="dom-if" if="[[!smdsSupportEnabled_]]" restamp>
      <profile-discovery-list-page-legacy id="profileDiscoveryPageLegacy" pending-profiles="[[pendingProfiles_]]" selected-profile="{{selectedProfile_}}" show-busy="[[shouldShowSubpageBusy_(state_)]]">
      </profile-discovery-list-page-legacy>
  </template>
  <activation-code-page id="activationCodePage" is-from-qr-code="{{isActivationCodeFromQrCode_}}" activation-code="{{activationCode_}}" show-no-profiles-found="[[noProfilesFound_(pendingProfiles_, pendingProfileProperties_)]]" show-error="{{showError_}}" show-busy="[[shouldShowSubpageBusy_(state_)]]">
  </activation-code-page>
  <setup-loading-page id="profileInstallingPage" loading-message="[[i18n('profileInstallingMessage')]]">
  </setup-loading-page>
  <template is="dom-if" if="[[smdsSupportEnabled_]]" restamp>
      <confirmation-code-page id="confirmationCodePage" confirmation-code="{{confirmationCode_}}" profile-properties="[[selectedProfileProperties_]]" show-error="{{showError_}}">
      </confirmation-code-page>
  </template>
  <template is="dom-if" if="[[!smdsSupportEnabled_]]" restamp>
      <confirmation-code-page-legacy id="confirmationCodePageLegacy" confirmation-code="{{confirmationCode_}}" profile="[[selectedProfile_]]" show-error="{{showError_}}" show-busy="[[shouldShowSubpageBusy_(state_)]]">
      </confirmation-code-page-legacy>
  </template>
  <final-page id="finalPage" delegate="[[delegate]]" show-error="[[showError_]]" message="[[i18n('eSimFinalPageMessage')]]" error-message="[[i18n('eSimFinalPageErrorMessage')]]">
  </final-page>
</iron-pages>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var ESimPageName;(function(ESimPageName){ESimPageName["PROFILE_LOADING"]="profileLoadingPage";ESimPageName["PROFILE_DISCOVERY_CONSENT"]="profileDiscoveryConsentPage";ESimPageName["PROFILE_DISCOVERY"]="profileDiscoveryPage";ESimPageName["PROFILE_DISCOVERY_LEGACY"]="profileDiscoveryPageLegacy";ESimPageName["ACTIVATION_CODE"]="activationCodePage";ESimPageName["CONFIRMATION_CODE"]="confirmationCodePage";ESimPageName["CONFIRMATION_CODE_LEGACY"]="confirmationCodePageLegacy";ESimPageName["PROFILE_INSTALLING"]="profileInstallingPage";ESimPageName["FINAL"]="finalPage"})(ESimPageName||(ESimPageName={}));var ESimUiState;(function(ESimUiState){ESimUiState["PROFILE_SEARCH"]="profile-search";ESimUiState["PROFILE_SEARCH_CONSENT"]="profile-search-consent";ESimUiState["ACTIVATION_CODE_ENTRY"]="activation-code-entry";ESimUiState["ACTIVATION_CODE_ENTRY_READY"]="activation-code-entry-ready";ESimUiState["ACTIVATION_CODE_ENTRY_INSTALLING"]="activation-code-entry-installing";ESimUiState["CONFIRMATION_CODE_ENTRY"]="confirmation-code-entry";ESimUiState["CONFIRMATION_CODE_ENTRY_READY"]="confirmation-code-entry-ready";ESimUiState["CONFIRMATION_CODE_ENTRY_INSTALLING"]="confirmation-code-entry-installing";ESimUiState["PROFILE_SELECTION"]="profile-selection";ESimUiState["PROFILE_SELECTION_INSTALLING"]="profile-selection-installing";ESimUiState["SETUP_FINISH"]="setup-finish"})(ESimUiState||(ESimUiState={}));var ESimSetupFlowResult;(function(ESimSetupFlowResult){ESimSetupFlowResult[ESimSetupFlowResult["SUCCESS"]=0]="SUCCESS";ESimSetupFlowResult[ESimSetupFlowResult["INSTALL_FAIL"]=1]="INSTALL_FAIL";ESimSetupFlowResult[ESimSetupFlowResult["CANCELLED_NEEDS_CONFIRMATION_CODE"]=2]="CANCELLED_NEEDS_CONFIRMATION_CODE";ESimSetupFlowResult[ESimSetupFlowResult["CANCELLED_INVALID_ACTIVATION_CODE"]=3]="CANCELLED_INVALID_ACTIVATION_CODE";ESimSetupFlowResult[ESimSetupFlowResult["ERROR_FETCHING_PROFILES"]=4]="ERROR_FETCHING_PROFILES";ESimSetupFlowResult[ESimSetupFlowResult["CANCELLED_WITHOUT_ERROR"]=5]="CANCELLED_WITHOUT_ERROR";ESimSetupFlowResult[ESimSetupFlowResult["CANCELLED_NO_PROFILES"]=6]="CANCELLED_NO_PROFILES";ESimSetupFlowResult[ESimSetupFlowResult["NO_NETWORK"]=7]="NO_NETWORK"})(ESimSetupFlowResult||(ESimSetupFlowResult={}));const ESIM_SETUP_RESULT_METRIC_NAME="Network.Cellular.ESim.SetupFlowResult";const SUCCESSFUL_ESIM_SETUP_DURATION_METRIC_NAME="Network.Cellular.ESim.CellularSetup.Success.Duration";const FAILED_ESIM_SETUP_DURATION_METRIC_NAME="Network.Cellular.ESim.CellularSetup.Failure.Duration";const EsimFlowUiElementBase=mixinBehaviors([NetworkListenerBehavior],SubflowMixin(I18nMixin(PolymerElement)));class EsimFlowUiElement extends EsimFlowUiElementBase{static get is(){return"esim-flow-ui"}static get template(){return getTemplate$_()}static get properties(){return{delegate:Object,header:{type:String,notify:true,computed:"computeHeader_(selectedESimPageName_, showError_)"},forwardButtonLabel:{type:String,notify:true},state_:{type:String,value:function(){if(loadTimeData.valueExists("isSmdsSupportEnabled")&&loadTimeData.getBoolean("isSmdsSupportEnabled")){return ESimUiState.PROFILE_SEARCH_CONSENT}return ESimUiState.PROFILE_SEARCH},observer:"onStateChanged_"},selectedESimPageName_:String,hasConsentedForDiscovery_:{type:Boolean,value:false},shouldSkipDiscovery_:{type:Boolean,value:false},showError_:{type:Boolean,value:false},pendingProfiles_:Array,selectedProfile_:{type:Object,observer:"onSelectedProfileChanged_"},pendingProfileProperties_:Array,selectedProfileProperties_:{type:Object,observer:"onSelectedProfilePropertiesChanged_"},activationCode_:{type:String,value:""},confirmationCode_:{type:String,value:"",observer:"onConfirmationCodeUpdated_"},hasHadActiveCellularNetwork_:{type:Boolean,value:false},isActivationCodeFromQrCode_:Boolean,smdsSupportEnabled_:{type:Boolean,value(){return loadTimeData.valueExists("isSmdsSupportEnabled")&&loadTimeData.getBoolean("isSmdsSupportEnabled")}}}}constructor(){super();this.euicc_=null;this.lastProfileInstallResult_=null;this.hasFailedFetchingProfiles_=false;this.isOffline_=false;this.timeOnAttached_=null;this.eSimManagerRemote_=getESimManagerRemote();const networkConfig=MojoInterfaceProviderImpl.getInstance().getMojoServiceRemote();const filter={filter:FilterType.kActive,limit:NO_LIMIT,networkType:NetworkType.kAll};networkConfig.getNetworkStateList(filter).then((response=>{this.onActiveNetworksChanged(response.result)}))}connectedCallback(){super.connectedCallback();this.timeOnAttached_=new Date}disconnectedCallback(){super.disconnectedCallback();let resultCode=null;switch(this.lastProfileInstallResult_){case null:if(this.hasFailedFetchingProfiles_){resultCode=ESimSetupFlowResult.ERROR_FETCHING_PROFILES}else if(this.noProfilesFound_()){resultCode=ESimSetupFlowResult.CANCELLED_NO_PROFILES}else{resultCode=ESimSetupFlowResult.CANCELLED_WITHOUT_ERROR}break;case ProfileInstallResult.kSuccess:resultCode=ESimSetupFlowResult.SUCCESS;break;case ProfileInstallResult.kFailure:resultCode=ESimSetupFlowResult.INSTALL_FAIL;break;case ProfileInstallResult.kErrorNeedsConfirmationCode:resultCode=ESimSetupFlowResult.CANCELLED_NEEDS_CONFIRMATION_CODE;break;case ProfileInstallResult.kErrorInvalidActivationCode:resultCode=ESimSetupFlowResult.CANCELLED_INVALID_ACTIVATION_CODE;break}if(this.isOffline_&&resultCode!==ProfileInstallResult.kSuccess){resultCode=ESimSetupFlowResult.NO_NETWORK}assert(resultCode!==null);chrome.metricsPrivate.recordEnumerationValue(ESIM_SETUP_RESULT_METRIC_NAME,resultCode,Object.keys(ESimSetupFlowResult).length);const elapsedTimeMs=(new Date).getTime()-this.timeOnAttached_.getTime();if(resultCode===ESimSetupFlowResult.SUCCESS){chrome.metricsPrivate.recordLongTime(SUCCESSFUL_ESIM_SETUP_DURATION_METRIC_NAME,elapsedTimeMs);return}chrome.metricsPrivate.recordLongTime(FAILED_ESIM_SETUP_DURATION_METRIC_NAME,elapsedTimeMs)}ready(){super.ready();this.addEventListener("activation-code-updated",(event=>{this.onActivationCodeUpdated_(event)}));this.addEventListener("forward-navigation-requested",this.onForwardNavigationRequested_)}onActiveNetworksChanged(activeNetworks){this.isOffline_=!activeNetworks.some((network=>network.connectionState===ConnectionStateType.kOnline))}initSubflow(){if(!this.smdsSupportEnabled_){this.fetchProfiles_()}else{this.getEuicc_()}this.onNetworkStateListChanged()}async fetchProfiles_(){await this.getEuicc_();if(!this.euicc_){return}if(this.smdsSupportEnabled_){await this.getAvailableProfileProperties_()}else{await this.getPendingProfiles_()}if(this.noProfilesFound_()){this.state_=ESimUiState.ACTIVATION_CODE_ENTRY}else{this.state_=ESimUiState.PROFILE_SELECTION}}async getEuicc_(){const euicc=await getEuicc();if(!euicc){this.hasFailedFetchingProfiles_=true;this.showError_=true;this.state_=ESimUiState.SETUP_FINISH;console.warn("No Euiccs found");return}this.euicc_=euicc}async getAvailableProfileProperties_(){assert(this.euicc_);const requestAvailableProfilesResponse=await this.euicc_.requestAvailableProfiles();if(requestAvailableProfilesResponse.result===ESimOperationResult.kFailure){this.hasFailedFetchingProfiles_=true;console.warn("Error requesting available profiles: ",requestAvailableProfilesResponse);this.pendingProfileProperties_=[]}this.pendingProfileProperties_=requestAvailableProfilesResponse.profiles.filter((properties=>properties.state===ProfileState.kPending&&properties.activationCode))}async getPendingProfiles_(){assert(this.euicc_);const requestPendingProfilesResponse=await this.euicc_.requestPendingProfiles();if(requestPendingProfilesResponse.result===ESimOperationResult.kFailure){this.hasFailedFetchingProfiles_=true;console.warn("Error requesting pending profiles: ",requestPendingProfilesResponse);this.pendingProfiles_=[]}this.pendingProfiles_=await getPendingESimProfiles(this.euicc_)}handleProfileInstallResponse_(response){this.lastProfileInstallResult_=response.result;if(response.result===ProfileInstallResult.kErrorNeedsConfirmationCode){this.state_=ESimUiState.CONFIRMATION_CODE_ENTRY;return}this.showError_=response.result!==ProfileInstallResult.kSuccess;if(response.result===ProfileInstallResult.kFailure&&this.state_===ESimUiState.CONFIRMATION_CODE_ENTRY_INSTALLING){this.state_=ESimUiState.CONFIRMATION_CODE_ENTRY_READY;return}if(response.result===ProfileInstallResult.kErrorInvalidActivationCode&&(!this.smdsSupportEnabled_||this.state_!==ESimUiState.PROFILE_SELECTION_INSTALLING)){this.state_=ESimUiState.ACTIVATION_CODE_ENTRY_READY;return}if(response.result===ProfileInstallResult.kSuccess||response.result===ProfileInstallResult.kFailure){this.state_=ESimUiState.SETUP_FINISH}}onStateChanged_(newState,oldState){this.updateButtonBarState_();this.updateSelectedPage_();if(this.hasConsentedForDiscovery_&&newState===ESimUiState.PROFILE_SEARCH){this.fetchProfiles_()}this.initializePageState_(newState,oldState)}updateSelectedPage_(){const oldSelectedESimPageName=this.selectedESimPageName_;switch(this.state_){case ESimUiState.PROFILE_SEARCH:this.selectedESimPageName_=ESimPageName.PROFILE_LOADING;break;case ESimUiState.PROFILE_SEARCH_CONSENT:this.selectedESimPageName_=ESimPageName.PROFILE_DISCOVERY_CONSENT;break;case ESimUiState.ACTIVATION_CODE_ENTRY:case ESimUiState.ACTIVATION_CODE_ENTRY_READY:this.selectedESimPageName_=ESimPageName.ACTIVATION_CODE;break;case ESimUiState.ACTIVATION_CODE_ENTRY_INSTALLING:this.selectedESimPageName_=ESimPageName.PROFILE_INSTALLING;break;case ESimUiState.CONFIRMATION_CODE_ENTRY:case ESimUiState.CONFIRMATION_CODE_ENTRY_READY:if(this.smdsSupportEnabled_){this.selectedESimPageName_=ESimPageName.CONFIRMATION_CODE}else{this.selectedESimPageName_=ESimPageName.CONFIRMATION_CODE_LEGACY}break;case ESimUiState.CONFIRMATION_CODE_ENTRY_INSTALLING:if(this.smdsSupportEnabled_){this.selectedESimPageName_=ESimPageName.PROFILE_INSTALLING}else{this.selectedESimPageName_=ESimPageName.CONFIRMATION_CODE_LEGACY}break;case ESimUiState.PROFILE_SELECTION:if(this.smdsSupportEnabled_){this.selectedESimPageName_=ESimPageName.PROFILE_DISCOVERY}else{this.selectedESimPageName_=ESimPageName.PROFILE_DISCOVERY_LEGACY}break;case ESimUiState.PROFILE_SELECTION_INSTALLING:if(this.smdsSupportEnabled_){this.selectedESimPageName_=ESimPageName.PROFILE_INSTALLING}else{this.selectedESimPageName_=ESimPageName.PROFILE_DISCOVERY_LEGACY}break;case ESimUiState.SETUP_FINISH:this.selectedESimPageName_=ESimPageName.FINAL;break;default:assertNotReached()}if(oldSelectedESimPageName!==this.selectedESimPageName_){this.dispatchEvent(new CustomEvent("focus-default-button",{bubbles:true,composed:true}))}}generateButtonStateForActivationPage_(enableForwardBtn,cancelButtonStateIfEnabled,isInstalling){this.forwardButtonLabel=this.i18n("next");let backBtnState=ButtonState.HIDDEN;if(this.profilesFound_()&&!this.smdsSupportEnabled_){backBtnState=isInstalling?ButtonState.DISABLED:ButtonState.ENABLED}return{backward:backBtnState,cancel:cancelButtonStateIfEnabled,forward:enableForwardBtn?ButtonState.ENABLED:ButtonState.DISABLED}}generateButtonStateForConfirmationPage_(enableForwardBtn,cancelButtonStateIfEnabled,isInstalling){this.forwardButtonLabel=this.i18n("confirm");let backBtnState=isInstalling?ButtonState.DISABLED:ButtonState.ENABLED;if(this.smdsSupportEnabled_){backBtnState=ButtonState.HIDDEN}return{backward:backBtnState,cancel:cancelButtonStateIfEnabled,forward:enableForwardBtn?ButtonState.ENABLED:ButtonState.DISABLED}}updateButtonBarState_(){let buttonState;const cancelButtonStateIfEnabled=this.delegate.shouldShowCancelButton()?ButtonState.ENABLED:ButtonState.HIDDEN;const cancelButtonStateIfDisabled=this.delegate.shouldShowCancelButton()?ButtonState.DISABLED:ButtonState.HIDDEN;switch(this.state_){case ESimUiState.PROFILE_SEARCH:this.forwardButtonLabel=this.i18n("next");buttonState={backward:ButtonState.HIDDEN,cancel:cancelButtonStateIfEnabled,forward:ButtonState.DISABLED};break;case ESimUiState.PROFILE_SEARCH_CONSENT:this.forwardButtonLabel=this.i18n("profileDiscoveryConsentScan");buttonState={backward:ButtonState.HIDDEN,cancel:ButtonState.ENABLED,forward:ButtonState.ENABLED};break;case ESimUiState.ACTIVATION_CODE_ENTRY:buttonState=this.generateButtonStateForActivationPage_(false,cancelButtonStateIfEnabled,false);break;case ESimUiState.ACTIVATION_CODE_ENTRY_READY:buttonState=this.generateButtonStateForActivationPage_(true,cancelButtonStateIfEnabled,false);break;case ESimUiState.ACTIVATION_CODE_ENTRY_INSTALLING:buttonState=this.generateButtonStateForActivationPage_(false,cancelButtonStateIfDisabled,true);break;case ESimUiState.CONFIRMATION_CODE_ENTRY:buttonState=this.generateButtonStateForConfirmationPage_(false,cancelButtonStateIfEnabled,false);break;case ESimUiState.CONFIRMATION_CODE_ENTRY_READY:buttonState=this.generateButtonStateForConfirmationPage_(true,cancelButtonStateIfEnabled,false);break;case ESimUiState.CONFIRMATION_CODE_ENTRY_INSTALLING:buttonState=this.generateButtonStateForConfirmationPage_(false,cancelButtonStateIfDisabled,true);break;case ESimUiState.PROFILE_SELECTION:this.updateForwardButtonLabel_();buttonState={backward:ButtonState.HIDDEN,cancel:cancelButtonStateIfEnabled,forward:ButtonState.ENABLED};break;case ESimUiState.PROFILE_SELECTION_INSTALLING:buttonState={backward:ButtonState.HIDDEN,cancel:cancelButtonStateIfDisabled,forward:ButtonState.DISABLED};break;case ESimUiState.SETUP_FINISH:this.forwardButtonLabel=this.i18n("done");buttonState={backward:ButtonState.HIDDEN,cancel:ButtonState.HIDDEN,forward:ButtonState.ENABLED};break;default:assertNotReached()}this.set("buttonState",buttonState)}updateForwardButtonLabel_(){if(this.smdsSupportEnabled_){this.forwardButtonLabel=this.selectedProfileProperties_?this.i18n("next"):this.i18n("skipDiscovery")}else{this.forwardButtonLabel=this.selectedProfile_?this.i18n("next"):this.i18n("skipDiscovery")}}initializePageState_(newState,oldState){if(newState===ESimUiState.CONFIRMATION_CODE_ENTRY&&oldState!==ESimUiState.CONFIRMATION_CODE_ENTRY_READY){this.confirmationCode_=""}if(newState===ESimUiState.ACTIVATION_CODE_ENTRY&&oldState!==ESimUiState.ACTIVATION_CODE_ENTRY_READY){this.activationCode_=""}}onActivationCodeUpdated_(event){if(this.state_!==ESimUiState.ACTIVATION_CODE_ENTRY&&this.state_!==ESimUiState.ACTIVATION_CODE_ENTRY_READY){return}this.state_=event.detail.activationCode?ESimUiState.ACTIVATION_CODE_ENTRY_READY:ESimUiState.ACTIVATION_CODE_ENTRY}onSelectedProfileChanged_(){if(this.state_!==ESimUiState.PROFILE_SELECTION){return}if(this.smdsSupportEnabled_){return}this.updateForwardButtonLabel_()}onSelectedProfilePropertiesChanged_(){if(this.state_!==ESimUiState.PROFILE_SELECTION){return}if(!this.smdsSupportEnabled_){return}this.updateForwardButtonLabel_()}onConfirmationCodeUpdated_(){if(this.state_!==ESimUiState.CONFIRMATION_CODE_ENTRY&&this.state_!==ESimUiState.CONFIRMATION_CODE_ENTRY_READY){return}this.state_=this.confirmationCode_?ESimUiState.CONFIRMATION_CODE_ENTRY_READY:ESimUiState.CONFIRMATION_CODE_ENTRY}navigateForward(){this.showError_=false;switch(this.state_){case ESimUiState.PROFILE_SEARCH_CONSENT:if(this.shouldSkipDiscovery_){this.state_=ESimUiState.ACTIVATION_CODE_ENTRY;break}this.hasConsentedForDiscovery_=true;this.state_=ESimUiState.PROFILE_SEARCH;break;case ESimUiState.ACTIVATION_CODE_ENTRY_READY:assert(this.euicc_);const confirmationCode="";this.state_=ESimUiState.ACTIVATION_CODE_ENTRY_INSTALLING;this.euicc_.installProfileFromActivationCode(this.activationCode_,confirmationCode,this.computeProfileInstallMethod_()).then(this.handleProfileInstallResponse_.bind(this));break;case ESimUiState.PROFILE_SELECTION:if(this.smdsSupportEnabled_){if(this.selectedProfileProperties_){assert(this.euicc_);this.state_=ESimUiState.PROFILE_SELECTION_INSTALLING;const confirmationCode="";this.euicc_.installProfileFromActivationCode(this.selectedProfileProperties_.activationCode,confirmationCode,ProfileInstallMethod.kViaSmds).then(this.handleProfileInstallResponse_.bind(this))}else{this.state_=ESimUiState.ACTIVATION_CODE_ENTRY}}else{if(this.selectedProfile_){this.state_=ESimUiState.PROFILE_SELECTION_INSTALLING;this.selectedProfile_.installProfile("").then(this.handleProfileInstallResponse_.bind(this))}else{this.state_=ESimUiState.ACTIVATION_CODE_ENTRY}}break;case ESimUiState.CONFIRMATION_CODE_ENTRY_READY:this.state_=ESimUiState.CONFIRMATION_CODE_ENTRY_INSTALLING;if(this.smdsSupportEnabled_){assert(this.euicc_);const fromQrCode=this.selectedProfileProperties_?true:false;const activationCode=fromQrCode?this.selectedProfileProperties_.activationCode:this.activationCode_;this.euicc_.installProfileFromActivationCode(activationCode,this.confirmationCode_,this.computeProfileInstallMethod_()).then(this.handleProfileInstallResponse_.bind(this))}else{if(this.selectedProfile_){this.selectedProfile_.installProfile(this.confirmationCode_).then(this.handleProfileInstallResponse_.bind(this))}else{assert(this.euicc_);this.euicc_.installProfileFromActivationCode(this.activationCode_,this.confirmationCode_,this.computeProfileInstallMethod_()).then(this.handleProfileInstallResponse_.bind(this))}}break;case ESimUiState.SETUP_FINISH:this.dispatchEvent(new CustomEvent("exit-cellular-setup",{bubbles:true,composed:true}));break;default:assertNotReached()}}navigateBackward(){if(this.profilesFound_()&&(this.state_===ESimUiState.ACTIVATION_CODE_ENTRY||this.state_===ESimUiState.ACTIVATION_CODE_ENTRY_READY)){this.state_=ESimUiState.PROFILE_SELECTION;return}if(this.state_===ESimUiState.CONFIRMATION_CODE_ENTRY||this.state_===ESimUiState.CONFIRMATION_CODE_ENTRY_READY){if(this.activationCode_){this.state_=ESimUiState.ACTIVATION_CODE_ENTRY_READY;return}else if(this.profilesFound_()){this.state_=ESimUiState.PROFILE_SELECTION;return}}console.error("Navigate backward faled for : "+this.state_+" this state does not support backward navigation.");assertNotReached()}onForwardNavigationRequested_(){if(this.state_===ESimUiState.ACTIVATION_CODE_ENTRY_READY||this.state_===ESimUiState.CONFIRMATION_CODE_ENTRY_READY||this.state_===ESimUiState.PROFILE_SEARCH_CONSENT||this.state_===ESimUiState.PROFILE_SELECTION){this.navigateForward()}}async onNetworkStateListChanged(){const hasActive=await hasActiveCellularNetwork();if(hasActive){this.hasHadActiveCellularNetwork_=hasActive}}shouldShowSubpageBusy_(){return this.state_===ESimUiState.ACTIVATION_CODE_ENTRY_INSTALLING||this.state_===ESimUiState.CONFIRMATION_CODE_ENTRY_INSTALLING||this.state_===ESimUiState.PROFILE_SELECTION_INSTALLING}getLoadingMessage_(){if(this.smdsSupportEnabled_){return this.i18n("profileLoadingPageMessage")}return this.hasHadActiveCellularNetwork_?this.i18n("eSimProfileDetectDuringActiveCellularConnectionMessage"):this.i18n("eSimProfileDetectMessage")}computeHeader_(){if(this.selectedESimPageName_===ESimPageName.FINAL&&!this.showError_){return this.i18n("eSimFinalPageSuccessHeader")}if(this.selectedESimPageName_===ESimPageName.PROFILE_DISCOVERY_CONSENT){return this.i18n("profileDiscoveryConsentTitle")}if(this.smdsSupportEnabled_){if(this.selectedESimPageName_===ESimPageName.PROFILE_DISCOVERY){return this.i18n("profileDiscoveryPageTitle")}if(this.selectedESimPageName_==ESimPageName.CONFIRMATION_CODE){return this.i18n("confimationCodePageTitle")}if(this.selectedESimPageName_==ESimPageName.PROFILE_LOADING){return this.i18n("profileLoadingPageTitle")}}return""}computeProfileInstallMethod_(){if(this.isActivationCodeFromQrCode_){return this.hasConsentedForDiscovery_?ProfileInstallMethod.kViaQrCodeAfterSmds:ProfileInstallMethod.kViaQrCodeSkippedSmds}return this.hasConsentedForDiscovery_?ProfileInstallMethod.kViaActivationCodeAfterSmds:ProfileInstallMethod.kViaActivationCodeSkippedSmds}noProfilesFound_(){if(this.smdsSupportEnabled_){return this.hasConsentedForDiscovery_&&!!this.pendingProfileProperties_&&this.pendingProfileProperties_.length===0}else{return this.pendingProfiles_&&this.pendingProfiles_.length===0}}profilesFound_(){if(this.smdsSupportEnabled_){return this.hasConsentedForDiscovery_&&!!this.pendingProfileProperties_&&this.pendingProfileProperties_.length>0}else{return this.pendingProfiles_&&this.pendingProfiles_.length>0}}}customElements.define(EsimFlowUiElement.is,EsimFlowUiElement);function getTemplate$Z(){return html`<!--_html_template_start_--><iron-pages attr-for-selected="id" selected="[[currentPageName]]" selected-item="{{currentPage_}}">
  <template is="dom-if" if="[[shouldShowPsimFlow_(currentPageName)]]" restamp>
    <psim-flow-ui button-state="{{buttonState_}}" name-of-carrier-pending-setup="{{flowPsimBanner}}" delegate="[[delegate]]" id="psim-flow-ui" forward-button-label="{{forwardButtonLabel_}}">
    </psim-flow-ui>
  </template>
  <template is="dom-if" if="[[shouldShowEsimFlow_(currentPageName)]]" restamp>
    <esim-flow-ui button-state="{{buttonState_}}" delegate="[[delegate]]" id="esim-flow-ui" header="{{flowHeader}}" forward-button-label="{{forwardButtonLabel_}}">
    </esim-flow-ui>
  </template>
</iron-pages>
<button-bar id="buttonBar" button-state="[[buttonState_]]" forward-button-label="[[forwardButtonLabel_]]">
</button-bar>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CellularSetupElement extends PolymerElement{static get is(){return"cellular-setup"}static get template(){return getTemplate$Z()}static get properties(){return{delegate:Object,flowPsimBanner:{type:String,notify:true,value:""},flowHeader:{type:String,notify:true,value:""},currentPageName:String,selectedFlow_:{type:String,value:null},buttonState_:{type:Object,notify:true},currentPage_:{type:Object,observer:"onPageChange_"},forwardButtonLabel_:{type:String}}}connectedCallback(){super.connectedCallback();if(!this.currentPageName){this.currentPageName=CellularSetupPageName.ESIM_FLOW_UI}}ready(){super.ready();this.addEventListener("backward-nav-requested",this.onBackwardNavRequested_);this.addEventListener("retry-requested",this.onRetryRequested_);this.addEventListener("forward-nav-requested",this.onForwardNavRequested_);this.addEventListener("cancel-requested",this.onCancelRequested_);this.addEventListener("focus-default-button",this.onFocusDefaultButton_)}onPageChange_(){if(this.currentPage_){this.flowPsimBanner="";this.currentPage_.initSubflow()}}onBackwardNavRequested_(){this.currentPage_.navigateBackward()}onCancelRequested_(){this.dispatchEvent(new CustomEvent("exit-cellular-setup",{bubbles:true,composed:true}))}onRetryRequested_(){}onForwardNavRequested_(){this.currentPage_.navigateForward()}onFocusDefaultButton_(){this.$.buttonBar.focusDefaultButton()}shouldShowPsimFlow_(currentPage){return currentPage===CellularSetupPageName.PSIM_FLOW_UI}shouldShowEsimFlow_(currentPage){return currentPage===CellularSetupPageName.ESIM_FLOW_UI}}customElements.define(CellularSetupElement.is,CellularSetupElement);function getTemplate$Y(){return html`<!--_html_template_start_--><style include="settings-shared">@media (min-width:640px){:host{--cr-dialog-width:512px}}@media (max-width:640px){:host{--cr-dialog-width:320px}}:host{--cr-dialog-body-padding-horizontal:24px;--cr-dialog-title-slot-padding-bottom:0;--cr-dialog-title-slot-padding-end:0;--cr-dialog-title-slot-padding-start:0;--cr-dialog-title-slot-padding-top:0}#header{padding-bottom:8px;padding-inline-end:24px;padding-inline-start:24px;padding-top:24px}#title{align-items:center;background-color:var(--cros-dialog-title-background-color);display:flex;font-size:x-small;height:32px;justify-content:center}</style>

<cr-dialog id="dialog">
  <div slot="title">
    <template is="dom-if" if="[[shouldShowPsimBanner_(psimBanner_)]]" restamp>
      <div id="psim-banner">
        [[psimBanner_]]
      </div>
    </template>
    <div id="header">[[getDialogHeader_(dialogHeader_)]]</div>
  </div>
  <div slot="body">
    <cellular-setup flow-psim-banner="{{psimBanner_}}" flow-header="{{dialogHeader_}}" delegate="[[delegate_]]" current-page-name="[[pageName]]">
    </cellular-setup>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CellularSetupSettingsDelegate{shouldShowPageTitle(){return false}shouldShowCancelButton(){return true}}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const OsSettingsCellularSetupDialogElementBase=I18nMixin(PolymerElement);class OsSettingsCellularSetupDialogElement extends OsSettingsCellularSetupDialogElementBase{static get is(){return"os-settings-cellular-setup-dialog"}static get template(){return getTemplate$Y()}static get properties(){return{pageName:String,delegate_:Object,psimBanner_:{type:String},dialogHeader_:{type:String}}}constructor(){super();this.delegate_=new CellularSetupSettingsDelegate}ready(){super.ready();this.addEventListener("exit-cellular-setup",this.onExitCellularSetup_)}connectedCallback(){super.connectedCallback();this.$.dialog.showModal()}onExitCellularSetup_(){this.$.dialog.close()}shouldShowPsimBanner_(){return!!this.psimBanner_}getDialogHeader_(){if(this.dialogHeader_){return this.dialogHeader_}return this.i18n("cellularSetupDialogTitle")}}customElements.define(OsSettingsCellularSetupDialogElement.is,OsSettingsCellularSetupDialogElement);function getTemplate$X(){return html`<!--_html_template_start_--><style include="settings-shared iron-positioning">:host{--cr-dialog-width:416px;--cr-dialog-title-slot-padding-bottom:10px}#body{overflow:hidden;padding:0 20px 2px 20px}#warningMessage{--iron-icon-fill-color:var(--cros-icon-color-disabled);--iron-icon-height:16px;--iron-icon-width:16px;font-size:smaller;padding-bottom:12px}#warningMessage iron-icon{float:left;padding-inline-end:4px}:host-context([dir=rtl]) #warningMessage iron-icon{float:right}#warningMessage div{overflow:hidden}#inputContainer{margin-top:12px}#inputInfo{background-color:var(--cros-bg-color);color:var(--cros-text-color-secondary);font-size:var(--cr-form-field-label-font-size);font-weight:400;height:30px;line-height:var(--cr-form-field-label-line-height);padding-top:8px;position:absolute;top:50px;width:100%}@media (prefers-color-scheme:dark){#inputInfo{background-image:linear-gradient(rgba(255,255,255,.04),rgba(255,255,255,.04))}}#inputInfo.error{color:var(--cros-text-color-alert)}#inputSubtitle{display:block;width:260px}#inputCount{position:absolute;right:0;top:8px}:host-context([dir=rtl]) #inputCount{left:0;right:auto}#cancel{margin-inline-end:8px}</style>
<cr-dialog id="profileRenameDialog" show-on-attach>
  <div slot="title">$i18n{eSimRenameProfileDialogLabel}</div>
  <div id="body" slot="body">
    <div id="warningMessage" hidden$="[[!showCellularDisconnectWarning]]">
      <iron-icon icon="cr:info-outline"></iron-icon>
      <div>$i18n{eSimDialogConnectionWarning}</div>
    </div>
    <template is="dom-if" if="[[!errorMessage_]]" restamp>
      <div id="inputContainer" class="relative">
        
        <cr-input id="eSimprofileName" value="{{esimProfileName_}}" spellcheck="false" disabled="[[isRenameInProgress_]]" invalid="[[isInputInvalid_]]" label="$i18n{eSimRenameProfileInputTitle}" aria-label="[[i18n('eSimRenameProfileDialogLabel')]]" aria-description="[[i18n('eSimRenameProfileInputA11yLabel',
                maxInputLength)]]" error-message="[[i18n('eSimRenameProfileInputA11yLabel',
                maxInputLength)]]">
        </cr-input>
        <div id="inputInfo" class$="[[getInputInfoClass_(isInputInvalid_)]]" aria-hidden="true">
          <span id="inputSubtitle">$i18n{eSimRenameProfileInputSubtitle}</span>
          <span id="inputCount">
            [[getInputCountString_(esimProfileName_)]]
          </span>
        </div>
      </div>
    </template>
    <div id="errorMessage" aria-live="polite" hidden$="[[!errorMessage_]]">
      [[errorMessage_]]
    </div>
  </div>
  <div slot="button-container">
    <template is="dom-if" if="[[!errorMessage_]]" restamp>
      <cr-button id="cancel" on-click="onCancelClick_" disabled="[[isRenameInProgress_]]" class="cancel-button">
        $i18n{eSimRenameProfileDialogCancel}
      </cr-button>
    </template>
    <cr-button id="done" on-click="onRenameDialogDoneClick_" disabled="[[isDoneButtonDisabled_(isRenameInProgress_,
            esimProfileName_)]]" aria-label$="[[getDoneBtnA11yLabel_(esimProfileName_)]]" aria-describedby="warningMessage" class="action-button">
      $i18n{eSimRenameProfileDialogDone}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const MAX_INPUT_LENGTH=20;const MIN_INPUT_LENGTH=1;const EMOJI_REGEX_EXP=/(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gi;const EsimRenameDialogElementBase=I18nMixin(PolymerElement);class EsimRenameDialogElement extends EsimRenameDialogElementBase{static get is(){return"esim-rename-dialog"}static get template(){return getTemplate$X()}static get properties(){return{maxInputLength:{type:Number,value:MAX_INPUT_LENGTH,readonly:true},networkState:{type:Object,value:null},showCellularDisconnectWarning:{type:Boolean,value:false},errorMessage_:{type:String,value:""},esimProfileName_:{type:String,value:"",observer:"onEsimProfileNameChanged_"},isInputInvalid_:{type:Boolean,value:false},isRenameInProgress_:{type:Boolean,value:false}}}constructor(){super();this.esimProfileRemote_=null}connectedCallback(){super.connectedCallback();this.init_()}async init_(){if(!(this.networkState&&this.networkState.type===NetworkType.kCellular)){return}this.esimProfileRemote_=await getESimProfile(this.networkState.typeState.cellular.iccid);if(!this.esimProfileRemote_){this.errorMessage_=this.i18n("eSimRenameProfileDialogError")}this.esimProfileName_=this.networkState.name;if(!this.errorMessage_){this.shadowRoot.querySelector("#eSimprofileName").focus()}}async onRenameDialogDoneClick_(){if(this.errorMessage_){this.$.profileRenameDialog.close();return}this.isRenameInProgress_=true;const name=stringToMojoString16(this.esimProfileName_);const response=await this.esimProfileRemote_.setProfileNickname(name);this.handleSetProfileNicknameResponse_(response.result)}handleSetProfileNicknameResponse_(result){this.isRenameInProgress_=false;if(result===ESimOperationResult.kFailure){const showErrorToastEvent=new CustomEvent("show-error-toast",{bubbles:true,composed:true,detail:this.i18n("eSimRenameProfileDialogError")});this.dispatchEvent(showErrorToastEvent)}this.$.profileRenameDialog.close()}onCancelClick_(){this.$.profileRenameDialog.close()}onEsimProfileNameChanged_(_newValue,oldValue){if(oldValue){const sanitizedOldValue=oldValue.replace(EMOJI_REGEX_EXP,"");this.isInputInvalid_=sanitizedOldValue.length>MAX_INPUT_LENGTH}else{this.isInputInvalid_=false}const sanitizedProfileName=this.esimProfileName_.replace(EMOJI_REGEX_EXP,"");this.esimProfileName_=sanitizedProfileName.substring(0,MAX_INPUT_LENGTH)}getInputInfoClass_(isInputInvalid){return isInputInvalid?"error":""}getInputCountString_(esimProfileName){return this.i18n("eSimRenameProfileInputCharacterCount",esimProfileName.length.toLocaleString(undefined,{minimumIntegerDigits:2}),MAX_INPUT_LENGTH.toLocaleString())}isDoneButtonDisabled_(isRenameInProgress,esimProfileName){if(isRenameInProgress){return true}return esimProfileName.length<MIN_INPUT_LENGTH}getDoneBtnA11yLabel_(esimProfileName){return this.i18n("eSimRenameProfileDoneBtnA11yLabel",esimProfileName)}}customElements.define(EsimRenameDialogElement.is,EsimRenameDialogElement);function getTemplate$W(){return html`<!--_html_template_start_--><style include="settings-shared">:host{--cr-dialog-width:416px}#title{height:15px}#warningMessage{--iron-icon-fill-color:var(--cros-icon-color-disabled);--iron-icon-height:16px;--iron-icon-width:16px;font-size:smaller;margin-top:20px}#warningMessage iron-icon{float:left;padding-inline-end:4px}:host-context([dir=rtl]) #warningMessage iron-icon{float:right}#warningMessage div{overflow:hidden}#cancel{margin-inline-end:8px}#cancel:focus{box-shadow:0 0 0 2px var(--focus-shadow-color)}</style>
<cr-dialog id="dialog" show-on-attach>
  <div id="title" slot="title">
    [[getTitleString_(esimProfileName_)]]
  </div>
  <div slot="body">
    <div id="description">$i18n{eSimRemoveProfileDialogDescription}</div>
    <div id="warningMessage" hidden$="[[!showCellularDisconnectWarning]]">
      <iron-icon icon="cr:info-outline"></iron-icon>
      <div>$i18n{eSimDialogConnectionWarning}</div>
    </div>
  </div>
  <div slot="button-container">
    <cr-button id="cancel" aria-label="[[getCancelBtnA11yLabel_(esimProfileName_)]]" on-click="onCancelClick_" class="cancel-button">
      $i18n{eSimRemoveProfileDialogCancel}
    </cr-button>
    <cr-button id="remove" aria-label$="[[getRemoveBtnA11yLabel_(esimProfileName_)]]" aria-describedby="description warningMessage" on-click="onRemoveProfileClick_" class="action-button">
      $i18n{eSimRemoveProfileDialogRemove}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const EsimRemoveProfileDialogElementBase=I18nMixin(PolymerElement);class EsimRemoveProfileDialogElement extends EsimRemoveProfileDialogElementBase{static get is(){return"esim-remove-profile-dialog"}static get template(){return getTemplate$W()}static get properties(){return{networkState:{type:Object,value:null},showCellularDisconnectWarning:{type:Boolean,value:false},esimProfileName_:{type:String,value:""}}}constructor(){super();this.esimProfileRemote_=null}connectedCallback(){super.connectedCallback();this.init_()}async init_(){if(!(this.networkState&&this.networkState.type===NetworkType.kCellular)){return}this.esimProfileRemote_=await getESimProfile(this.networkState.typeState.cellular.iccid);if(!this.esimProfileRemote_){this.fireShowErrorToastEvent_();this.$.dialog.close();return}this.esimProfileName_=this.networkState.name;this.$.cancel.focus()}getTitleString_(){if(!this.esimProfileName_){return""}return this.i18n("esimRemoveProfileDialogTitle",this.esimProfileName_)}onRemoveProfileClick_(){this.esimProfileRemote_.uninstallProfile().then((response=>{if(response.result===ESimOperationResult.kFailure){this.fireShowErrorToastEvent_()}}));this.$.dialog.close();const params=new URLSearchParams;params.append("type",OncMojo.getNetworkTypeString(NetworkType.kCellular));Router.getInstance().setCurrentRoute(routes.INTERNET_NETWORKS,params,true)}onCancelClick_(){this.$.dialog.close()}getRemoveBtnA11yLabel_(esimProfileName){return this.i18n("eSimRemoveProfileRemoveA11yLabel",esimProfileName)}getCancelBtnA11yLabel_(esimProfileName){return this.i18n("eSimRemoveProfileCancelA11yLabel",esimProfileName)}fireShowErrorToastEvent_(){const showErrorToastEvent=new CustomEvent("show-error-toast",{bubbles:true,composed:true,detail:this.i18n("eSimRemoveProfileDialogError")});this.dispatchEvent(showErrorToastEvent)}}customElements.define(EsimRemoveProfileDialogElement.is,EsimRemoveProfileDialogElement);function getTemplate$V(){return html`<!--_html_template_start_--><style include="internet-shared iron-flex">:host{--cr-dialog-width:380px}#subtitle{font-size:.75rem;font-weight:500;height:40px;position:relative;left:20px;top:-10px;width:340px}#warningMessage{--iron-icon-fill-color:var(--cros-icon-color-disabled);--iron-icon-height:16px;--iron-icon-width:16px;font-size:smaller;margin-top:20px}#warningMessage iron-icon{float:left;padding-inline-end:4px}:host-context([dir=rtl]) #warningMessage iron-icon{float:right}#warningMessage div{overflow:hidden}network-config-toggle{color:var(--cr-primary-text-color)}.input-info{font-size:var(--cr-form-field-label-font-size);height:20px;position:relative;top:-16px}.error{color:var(--cros-text-color-alert)}#errorMessage{font-weight:500}</style>

<cr-dialog id="dialog" show-on-attach>
  <div slot="title">$i18n{hotspotSettingsTitle}</div>>
  <div slot="header" id="subtitle" class="secondary">
    <localized-link localized-string="[[i18nAdvanced('hotspotSettingsSubtitle')]]">
    </localized-link>
  </div>

  <div id="body" slot="body" aria-hidden="true">
    <network-config-input id="hotspotName" label="$i18n{hotspotConfigNameLabel}" value="{{hotspotSsid_}}" invalid="[[isSsidInvalid_]]">
    </network-config-input>
    <div id="hotspotNameInputInfo" class$="[[getSsidInputInfoClass_(isSsidInvalid_)]]" aria-hidden="true">
      [[getSsidInputInfo_(hotspotSsid_)]]
    </div>
    <network-password-input id="hotspotPassword" label="$i18n{hotspotConfigPasswordLabel}" value="{{hotspotPassword_}}" invalid="[[isPasswordInvalid_]]">
    </network-password-input>
    <div id="hotspotPasswordInputInfo" class$="[[getPasswordInputInfoClass_(isPasswordInvalid_)]]" aria-hidden="true">
      $i18n{hotspotConfigPasswordInfo}
    </div>
    <network-config-select id="security" label="$i18n{hotspotConfigSecurityLabel}" onc-prefix="Hotspot.WiFi.Security" value="{{securityType_}}" items="[[getSecurityItems_()]]">
    </network-config-select>
    <network-config-toggle id="hotspotBssidToggle" label="$i18n{hotspotConfigBssidToggleLabel}" sub-label="$i18n{hotspotConfigBssidToggleSublabel}" checked="{{isRandomizeBssidToggleOn_}}">
    </network-config-toggle>
    <network-config-toggle id="hotspotCompatibilityToggle" label="$i18n{hotspotConfigCompatibilityToggleLabel}" sub-label="$i18n{hotspotConfigCompatibilityToggleSublabel}" checked="{{isExtendCompatibilityToggleOn_}}">
    </network-config-toggle>
    <div id="warningMessage" aria-hidden="true">
      <iron-icon tabindex="0" icon="cr:info-outline" aria-labelledby="hotspotConfigWarningMessage">
      </iron-icon>
      <div id="hotspotConfigWarningMessage">
        $i18n{hotspotConfigWarningMessage}
      </div>
    </div>
  </div>

  <div class="layout horizontal center" slot="button-container">
    <template is="dom-if" if="[[error_]]" restamp>
      <div id="errorMessage" class="flex error">
        [[error_]]
      </div>
    </template>
    <cr-button id="cancelButton" class="cancel-button" on-click="onCancelClick_">
      $i18n{hotspotConfigCancelButton}
    </cr-button>
    <cr-button id="saveButton" class="action-button" on-click="onSaveClick_" disabled="[[isSaveButtonDisabled_(isSsidInvalid_, isPasswordInvalid_)]]">
      $i18n{hotspotConfigSaveButton}
    </cr-button>
  </div>
</cr-dialog><!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var WiFiSecurityType;(function(WiFiSecurityType){WiFiSecurityType["WPA2"]="WPA2";WiFiSecurityType["WPA3"]="WPA3";WiFiSecurityType["WPA2WPA3"]="WPA2WPA3"})(WiFiSecurityType||(WiFiSecurityType={}));const MIN_WIFI_PASSWORD_LENGTH=8;const MAX_WIFI_PASSWORD_LENGTH=63;const MAX_HOTSPOT_SSID_LENGTH=32;const HotspotConfigDialogElementBase=I18nMixin(PolymerElement);class HotspotConfigDialogElement extends HotspotConfigDialogElementBase{static get is(){return"hotspot-config-dialog"}static get template(){return getTemplate$V()}static get properties(){return{hotspotInfo:{type:Object},hotspotSsid_:{type:String,value:"",observer:"onSsidChanged_"},isSsidInvalid_:{type:Boolean,value:false},hotspotPassword_:{type:String,value:"",observer:"onPasswordChanged_"},isPasswordInvalid_:{type:Boolean,value:false},securityType_:{type:String,value:""},isRandomizeBssidToggleOn_:{type:Boolean,value:true},isExtendCompatibilityToggleOn_:{type:Boolean,value:false},error_:{type:String,value:""}}}connectedCallback(){super.connectedCallback();this.init_()}init_(){this.hotspotSsid_=castExists(this.hotspotInfo.config.ssid);this.hotspotPassword_=castExists(this.hotspotInfo.config.passphrase);this.isRandomizeBssidToggleOn_=castExists(this.hotspotInfo.config.bssidRandomization);this.isExtendCompatibilityToggleOn_=this.hotspotInfo.config.band===WiFiBand.k2_4GHz;this.securityType_=this.getWifiSecurityTypeString_(castExists(this.hotspotInfo.config.security))}onSsidChanged_(){this.isSsidInvalid_=this.hotspotSsid_.length===0||this.hotspotSsid_.length>MAX_HOTSPOT_SSID_LENGTH}onPasswordChanged_(){this.isPasswordInvalid_=this.hotspotPassword_.length<MIN_WIFI_PASSWORD_LENGTH||this.hotspotPassword_.length>MAX_WIFI_PASSWORD_LENGTH}getWifiSecurityTypeString_(security){if(security===WiFiSecurityMode.kWpa2){return WiFiSecurityType.WPA2}if(security===WiFiSecurityMode.kWpa3){return WiFiSecurityType.WPA3}if(security===WiFiSecurityMode.kWpa2Wpa3){return WiFiSecurityType.WPA2WPA3}assertNotReached()}getSecurityModeFromString_(security){if(security===WiFiSecurityType.WPA2){return WiFiSecurityMode.kWpa2}if(security===WiFiSecurityType.WPA3){return WiFiSecurityMode.kWpa3}if(security===WiFiSecurityType.WPA2WPA3){return WiFiSecurityMode.kWpa2Wpa3}assertNotReached()}getSecurityItems_(){return this.hotspotInfo.allowedWifiSecurityModes.map((security=>this.getWifiSecurityTypeString_(security)))}getSsidInputInfoClass_(){if(!this.isSsidInvalid_){return"input-info"}return"input-info error"}getSsidInputInfo_(){if(this.hotspotSsid_.length===0){return this.i18n("hotspotConfigNameEmptyInfo")}if(this.hotspotSsid_.length>MAX_HOTSPOT_SSID_LENGTH){return this.i18n("hotspotConfigNameTooLongInfo")}return this.i18n("hotspotConfigNameInfo")}getPasswordInputInfoClass_(){if(!this.isPasswordInvalid_){return"input-info"}return"input-info error"}isSaveButtonDisabled_(){return this.isSsidInvalid_||this.isPasswordInvalid_}onCancelClick_(){this.$.dialog.close()}async onSaveClick_(){const configToSet={ssid:this.hotspotSsid_,passphrase:this.hotspotPassword_,security:this.getSecurityModeFromString_(this.securityType_),band:this.isExtendCompatibilityToggleOn_?WiFiBand.k2_4GHz:WiFiBand.kAutoChoose,bssidRandomization:this.isRandomizeBssidToggleOn_,autoDisable:castExists(this.hotspotInfo.config.autoDisable)};const response=await getHotspotConfig().setHotspotConfig(configToSet);if(response.result===SetHotspotConfigResult.kSuccess){this.$.dialog.close();return}if(response.result===SetHotspotConfigResult.kFailedInvalidConfiguration){this.error_=this.i18n("hotspotConfigInvalidConfigurationErrorMessage")}else if(response.result===SetHotspotConfigResult.kFailedNotLogin){this.error_=this.i18n("hotspotConfigNotLoginErrorMessage")}else{this.error_=this.i18n("hotspotConfigGeneralErrorMessage")}}}customElements.define(HotspotConfigDialogElement.is,HotspotConfigDialogElement);function getTemplate$U(){return html`<!--_html_template_start_--><style include="network-shared">
  #container {
    align-items: center;
    display: flex;
    flex-direction: row;
  }

  cr-input {
    width: 100%;
  }

  cr-policy-network-indicator-mojo {
    --cr-tooltip-icon-margin-start: var(--cr-controlled-by-spacing);
  }
</style>

<div id="container">
  <cr-input label="[[label]]" value="{{value}}"
      hidden="[[hidden]]" readonly="[[readonly]]"
      disabled="[[getDisabled_(disabled, property)]]"
      invalid="[[invalid]]"
      on-keypress="onKeypress_">
  </cr-input>
  <cr-policy-network-indicator-mojo
      property="[[property]]" tooltip-position="left">
  </cr-policy-network-indicator>
</div>
<!--_html_template_end_-->`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Polymer({_template:getTemplate$U(),is:"network-config-input",behaviors:[CrPolicyNetworkBehaviorMojo,NetworkConfigElementBehavior],properties:{label:String,hidden:{type:Boolean,reflectToAttribute:true},invalid:{type:Boolean,value:false}},focus(){this.$$("cr-input").focus()},onKeypress_(event){if(event.key!=="Enter"){return}event.stopPropagation();this.fire("enter")}});function getTemplate$T(){return html`<!--_html_template_start_--><style include="cr-shared-style network-shared md-select">
  .md-select {
    color: var(--cr-primary-text-color);
    width: 100%;
  }

  #outer {
    align-items: stretch;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: var(--cr-form-field-bottom-spacing);
    padding: 0;
  }

  #inner {
    align-items: center;
    display: flex;
    flex-direction: row;
  }

  cr-policy-network-indicator-mojo {
    --cr-tooltip-icon-margin-start: var(--cr-controlled-by-spacing);
  }
</style>

<div id="outer">
  <div id="label" class="cr-form-field-label">[[label]]</div>
  <div id="inner">
    <select class="md-select"
        disabled="[[getDisabled_(disabled, property)]]"
        value="{{value::change}}" aria-label$="[[label]]">
      <template is="dom-repeat" items="[[items]]">
        <option value="[[getItemValue_(item)]]"
            disabled="[[!getItemEnabled_(item, deviceCertsOnly)]]">
          [[getItemLabel_(item, key, oncPrefix)]]
        </option>
      </template>
    </select>
    <cr-policy-network-indicator-mojo
        property="[[property]]" tooltip-position="left">
    </cr-policy-network-indicator-mojo>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Polymer({_template:getTemplate$T(),is:"network-config-select",behaviors:[I18nBehavior,CrPolicyNetworkBehaviorMojo,NetworkConfigElementBehavior],properties:{label:String,certList:Boolean,deviceCertsOnly:Boolean,items:Array,key:String,oncPrefix:{type:String,value:""}},observers:["updateSelected_(items, value)"],focus(){this.$$("select").focus()},updateSelected_(){this.async((function(){const select=this.$$("select");if(select.value!==this.value){select.value=this.value}}))},getItemLabel_(item){if(this.certList){return this.getCertificateName_(item)}let value;if(this.key){value=OncMojo.getTypeString(this.key,item)}else{value=item}const oncValue="Onc"+this.oncPrefix.replace(/\./g,"-")+"_"+value;if(this.i18nExists(oncValue)){return this.i18n(oncValue)}assertNotReached$1("ONC value not found: "+oncValue);return value},getItemValue_(item){if(this.certList){return item.hash}return item},getItemEnabled_(item){if(this.certList){const cert=item;if(this.deviceCertsOnly&&!cert.deviceWide){return false}return!!cert.hash}return true},getCertificateName_(certificate){if(certificate.hardwareBacked){return this.i18n("networkCertificateNameHardwareBacked",certificate.issuedBy,certificate.issuedTo)}if(certificate.issuedTo){return this.i18n("networkCertificateName",certificate.issuedBy,certificate.issuedTo)}return certificate.issuedBy},isPrefilledValueValid(){if(this.prefilledValue===undefined||this.prefilledValue===null){return false}return this.items.includes(this.prefilledValue)}});function getTemplate$S(){return html`<!--_html_template_start_--><style include="network-shared action-link iron-flex">
  #spinner-container {
    height: 200px;
  }

  .inline-text {
    margin-bottom: 12px;
  }

  .peer-card {
    background-color: var(--cr-card-background-color);
    border-radius: var(--cr-card-border-radius);
    box-shadow: var(--cr-card-shadow);
    flex: 1;
    margin-bottom: 8px;
    padding-inline-end: 10px;
    padding-inline-start: 10px;
    padding-top: 6px;
  }
</style>

<template is="dom-if" if="[[!managedProperties_]]" restamp>
  <div id="spinner-container" class="layout vertical center-center">
    <paper-spinner-lite active></paper-spinner-lite>
  </div>
</template>

<template is="dom-if" if="[[managedProperties_]]" restamp>
  <!-- SSID (WiFi) -->
  <template is="dom-if" if="[[isWiFi_(mojoType_)]]" restamp>
    <network-config-input id="ssid" label="[[i18n('OncWiFi-SSID')]]"
        value="{{configProperties_.typeConfig.wifi.ssid}}"
        prefilled-value="{{prefilledProperties.typeConfig.wifi.ssid}}"
        readonly="[[hasGuid_(guid)]]">
    </network-config-input>
  </template>

  <!-- Security (WiFi and Ethernet) -->
  <template is="dom-if" if="[[securityIsVisible_(mojoType_)]]" restamp>
    <network-config-select id="security"
        label="[[i18n('OncWiFi-Security')]]"
        value="{{securityType_}}" key="security"
        disabled="[[!securityIsEnabled_(guid, mojoType_)]]"
        prefilled-value="{{prefilledProperties.typeConfig.wifi.security}}"
        items="[[getSecurityItems_(mojoType_)]]"
        onc-prefix="WiFi.Security"
        property="[[getManagedSecurity_(managedProperties_)]]">
    </network-config-select>
  </template>

  <!-- Passphrase (WiFi) -->
  <template is="dom-if" restamp if="[[configRequiresPassphrase_]]">
    <network-password-input id="wifi-passphrase"
        on-keypress="onWifiPasswordInputKeypress_"
        label="[[i18n('OncWiFi-Passphrase')]]"
        value="{{configProperties_.typeConfig.wifi.passphrase}}"
        prefilled-value="{{prefilledProperties.typeConfig.wifi.passphrase}}"
        property="[[managedProperties_.typeProperties.wifi.passphrase]]">
    </network-password-input>
  </template>

  <!-- VPN -->
  <template is="dom-if" if="[[showVpn_]]" restamp>
    <network-config-input label="[[i18n('OncName')]]"
        value="{{configProperties_.name}}"
        readonly="[[hasGuid_(guid)]]">
    </network-config-input>
    <network-config-select id="outer" label="[[i18n('OncVPN-Type')]]"
        value="{{vpnType_}}" items="[[vpnTypeItems_]]"
        onc-prefix="VPN.Type" disabled="[[hasGuid_(guid)]]">
    </network-config-select>
    <template is="dom-if" if="[[!showVpn_.WireGuard]]">
      <network-config-input label="[[i18n('OncVPN-Host')]]"
          value="{{configProperties_.typeConfig.vpn.host}}"
          property="[[managedProperties_.typeProperties.vpn.host]]">
      </network-config-input>
    </template>
    <template is="dom-if" if="[[showVpn_.IPsec]]" restamp>
      <network-config-select label="[[i18n('OncVPN-IPsec-AuthType')]]"
          id="ipsec-auth-type" value="{{ipsecAuthType_}}"
          items="[[ipsecAuthTypeItems_]]" onc-prefix="VPN.IPsec.AuthType"
          disabled="[[hasGuid_(guid)]]">
      </network-config-select>
      <template is="dom-if" if="[[showVpn_.IPsecEAP]]" restamp>
        <network-config-input label="[[i18n('OncVPN-IPsec-Username')]]"
            id="ipsec-eap-username-input"
            value="{{eapProperties_.identity}}"
            property="[[managedEapProperties_.identity]]">
        </network-config-input>
        <network-password-input label="[[i18n('OncVPN-IPsec-Password')]]"
            id="ipsec-eap-password-input"
            value="{{eapProperties_.password}}"
            property="[[managedEapProperties_.password]]">
        </network-password-input>
      </template>
      <template is="dom-if" if="[[!showVpn_.IKEv2]]" restamp>
        <network-config-input label="[[i18n('OncVPN-L2TP-Username')]]"
            id="l2tp-username-input"
            value="{{configProperties_.typeConfig.vpn.l2tp.username}}"
            property="[[managedProperties_.typeProperties.vpn.l2tp.username]]">
        </network-config-input>
        <network-password-input label="[[i18n('OncVPN-L2TP-Password')]]"
            value="{{configProperties_.typeConfig.vpn.l2tp.password}}"
            property="[[managedProperties_.typeProperties.vpn.l2tp.password]]">
        </network-password-input>
        <network-config-input label="[[i18n('OncVPN-IPsec-Group')]]"
            value="{{configProperties_.typeConfig.vpn.ipSec.group}}"
            property="[[managedProperties_.typeProperties.vpn.ipSec.group]]">
        </network-config-input>
      </template>
      <template is="dom-if" if="[[showVpn_.IPsecPSK]]" restamp>
        <network-password-input label="[[i18n('OncVPN-IPsec-PSK')]]"
            id="ipsec-psk-input"
            value="{{configProperties_.typeConfig.vpn.ipSec.psk}}"
            property="[[managedProperties_.typeProperties.vpn.ipSec.psk]]">
        </network-password-input>
      </template>
      <template is="dom-if" if="[[showVpn_.IKEv2]]" restamp>
        <network-config-input label="[[i18n('OncVPN-IPsec-LocalIdentity')]]"
            id="ipsec-local-id-input"
            value="{{configProperties_.typeConfig.vpn.ipSec.localIdentity}}"
            property="[[managedProperties_.typeProperties.vpn.ipSec.localIdentity]]">
        </network-config-input>
        <network-config-input label="[[i18n('OncVPN-IPsec-RemoteIdentity')]]"
            id="ipsec-remote-id-input"
            value="{{configProperties_.typeConfig.vpn.ipSec.remoteIdentity}}"
            property="[[managedProperties_.typeProperties.vpn.ipSec.remoteIdentity]]">
        </network-config-input>
      </template>
    </template>
    <template is="dom-if" if="[[showVpn_.OpenVPN]]" restamp>
      <network-config-input label="[[i18n('OncVPN-OpenVPN-Username')]]"
          id="openvpn-username-input"
          value="{{configProperties_.typeConfig.vpn.openVpn.username}}"
          property="[[managedProperties_.typeProperties.vpn.openVpn.username]]">
      </network-config-input>
      <network-password-input label="[[i18n('OncVPN-OpenVPN-Password')]]"
          value="{{configProperties_.typeConfig.vpn.openVpn.password}}"
          property="[[managedProperties_.typeProperties.vpn.openVpn.password]]">
      </network-password-input>
      <network-config-input label="[[i18n('OncVPN-OpenVPN-OTP')]]"
          value="{{configProperties_.typeConfig.vpn.openVpn.otp}}"
          property="[[managedProperties_.typeProperties.vpn.openVpn.otp]]">
      </network-config-input>
    </template>
    <template is="dom-if" if="[[showVpn_.ServerCA]]" restamp>
      <network-config-select id="vpnServerCa"
          label="[[i18n('OncEAP-ServerCA')]]"
          value="{{selectedServerCaHash_}}" items="[[serverCaCerts_]]"
          cert-list
          property="[[getManagedVpnServerCaRefs_(managedProperties_)]]">
      </network-config-select>
    </template>
    <template is="dom-if" if="[[showVpn_.UserCert]]" restamp>
      <network-config-select id="vpnUserCert"
          label="[[i18n('OncEAP-UserCert')]]"
          value="{{selectedUserCertHash_}}" items="[[userCerts_]]"
          cert-list
          property="[[getManagedVpnClientCertType_(managedProperties_)]]">
      </network-config-select>
    </template>
    <template is="dom-if" if="[[showVpn_.WireGuard]]">
      <network-config-input label="[[i18n('OncVPN-WireGuard-IPAddress')]]"
          id="wireguard-ip-input"
          value="{{ipAddressInput_}}"
          property="[[managedProperties_.typeProperties.vpn.wireguard.ipAddresses]]">
      </network-config-input>
      <network-config-input label="[[i18n('OncVPN-WireGuard-DNS')]]"
          value="{{nameServersInput_}}"
          property="[[managedProperties_.staticIpConfig.nameServers]]">
      </network-config-input>
      <network-config-select label="[[i18n('OncVPN-WireGuard-Key')]]"
          value="{{wireguardKeyType_}}" items="[[wireguardKeyTypeItems_]]"
          onc-prefix="VPN.WireGuard.Key">
      </network-config-select>
      <template is="dom-if" if="[[isWireGuardUserPrivateKeyInputActive_]]">
        <network-password-input label="[[i18n('OncVPN-WireGuard-PrivateKey')]]"
            id="wireguardPrivateKeyInput"
            value="{{configProperties_.typeConfig.vpn.wireguard.privateKey}}"
            property="[[managedProperties_.typeProperties.vpn.wireguard.privateKey]]">
        </network-password-input>
      </template>
      <div class="peer-card">
        <div class="inline-text">[[i18n('OncVPN-WireGuard-Peer')]]</div>
        <network-config-input label="[[i18n('OncVPN-WireGuard-Peer-PublicKey')]]"
            value="{{configProperties_.typeConfig.vpn.wireguard.peers.0.publicKey}}">
        </network-config-input>
        <network-password-input label="[[i18n('OncVPN-WireGuard-Peer-PresharedKey')]]"
            value="{{configProperties_.typeConfig.vpn.wireguard.peers.0.presharedKey}}">
        </network-password-input>
        <network-config-input label="[[i18n('OncVPN-WireGuard-Peer-Endpoint')]]"
            value="{{configProperties_.typeConfig.vpn.wireguard.peers.0.endpoint}}">
        </network-config-input>
        <network-config-input label="[[i18n('OncVPN-WireGuard-Peer-AllowedIP')]]"
            value="{{configProperties_.typeConfig.vpn.wireguard.peers.0.allowedIps}}">
        </network-config-input>
        <network-config-input label="[[i18n('OncVPN-WireGuard-Peer-PersistentKeepalive')]]"
            value="{{configProperties_.typeConfig.vpn.wireguard.peers.0.persistentKeepalive}}">
        </network-config-input>
      </div>
    </template>
    <template is="dom-if" if="[[!showVpn_.WireGuard]]">
      <network-config-toggle label="[[i18n('networkConfigSaveCredentials')]]"
          checked="{{vpnSaveCredentials_}}"
          property="[[getManagedVpnSaveCredentials_(managedProperties_)]]">
      </network-config-toggle>
    </template>
  </template>

  <!-- EAP (WiFi, Ethernet) -->
  <template is="dom-if" if="[[showEap_]]" restamp>
    <network-config-select id="outer" label="[[i18n('OncEAP-Outer')]]"
        value="{{eapProperties_.outer}}" items="[[eapOuterItems_]]"
        prefilled-value="{{prefilledProperties.typeConfig.wifi.eap.outer}}"
        onc-prefix="EAP.Outer" hidden="[[!showEap_.Outer]]"
        property="[[managedEapProperties_.outer]]">
    </network-config-select>
    <network-config-select id="inner" label="[[i18n('OncEAP-Inner')]]"
        value="{{eapProperties_.inner}}"
        prefilled-value="{{prefilledProperties.typeConfig.wifi.eap.inner}}"
        items="[[getEapInnerItems_(eapProperties_.outer)]]"
        onc-prefix="EAP.Inner" hidden="[[!showEap_.Inner]]"
        property="[[managedEapProperties_.inner]]">
    </network-config-select>
    <network-config-select id="serverCa" label="[[i18n('OncEAP-ServerCA')]]"
        value="{{selectedServerCaHash_}}" items="[[serverCaCerts_]]"
        hidden="[[!showEap_.ServerCA]]" cert-list
        property="[[managedEapProperties_.useSystemCAs]]"
        device-certs-only="[[deviceCertsOnly_]]">
    </network-config-select>
    <network-config-input label="[[i18n('OncEAP-SubjectMatch')]]"
        value="{{eapProperties_.subjectMatch}}"
        hidden="[[!showEap_.EapServerCertMatch]]"
        property="[[managedEapProperties_.subjectMatch]]">
    </network-config-input>
    <network-config-input label="[[i18n('OncEAP-SubjectAltNameMatch')]]"
        value="{{serializedSubjectAltNameMatch_}}"
        hidden="[[!showEap_.EapServerCertMatch]]"
        property="[[managedEapProperties_.subjectAltNameMatch]]">
    </network-config-input>
    <network-config-input label="[[i18n('OncEAP-DomainSuffixMatch')]]"
        value="{{serializedDomainSuffixMatch_}}"
        hidden="[[!showEap_.EapServerCertMatch]]"
        property="[[managedEapProperties_.domainSuffixMatch]]">
    </network-config-input>
    <network-config-select id="userCert" label="[[i18n('OncEAP-UserCert')]]"
        value="{{selectedUserCertHash_}}" items="[[userCerts_]]"
        hidden="[[!showEap_.UserCert]]" cert-list
        property="[[managedEapProperties_.clientCertType]]"
        device-certs-only="[[deviceCertsOnly_]]">
    </network-config-select>
    <network-config-input id="oncEAPIdentity" label="[[i18n('OncEAP-Identity')]]"
        prefilled-value="{{prefilledProperties.typeConfig.wifi.eap.identity}}"
        value="{{eapProperties_.identity}}" hidden="[[!showEap_.Identity]]"
        property="[[managedEapProperties_.identity]]">
    </network-config-input>
    <network-password-input id="eapPassword" label="[[i18n('OncEAP-Password')]]"
        prefilled-value="{{prefilledProperties.typeConfig.wifi.eap.password}}"
        value="{{eapProperties_.password}}" hidden="[[!showEap_.Password]]"
        property="[[managedEapProperties_.password]]">
    </network-password-input>
    <network-config-input id="oncEAPAnonymousIdentity" label="[[i18n('OncEAP-AnonymousIdentity')]]"
        prefilled-value="{{prefilledProperties.typeConfig.wifi.eap.anonymousIdentity}}"
        value="{{eapProperties_.anonymousIdentity}}"
        hidden="[[!showEap_.AnonymousIdentity]]"
        property="[[managedEapProperties_.anonymousIdentity]]">
    </network-config-input>
    <network-config-toggle label="[[i18n('networkConfigSaveCredentials')]]"
        checked="{{eapProperties_.saveCredentials}}"
        property="[[managedEapProperties_.saveCredentials]]">
    </network-config-toggle>
  </template>

  <!-- Share (WiFi) -->
  <template is="dom-if" if="[[shareIsVisible_(managedProperties_, globalPolicy_)]]" restamp>
    <!-- TODO: b/302726243 - Reuse just one network-config-toggle -->
    <template is="dom-if" if="[[!networkIsEphemeral_(managedProperties_, globalPolicy_)]]" restamp>
      <network-config-toggle id="share" label="[[i18n('networkConfigShare')]]"
          checked="{{shareNetwork_}}" on-change="onShareChanged_"
          disabled="[[!shareIsEnabled_(configProperties_.*,
                    eapProperties_.*, shareAllowEnable)]]">
      </network-config-toggle>
    </template>
    <template is="dom-if" if="[[networkIsEphemeral_(managedProperties_, globalPolicy_)]]" restamp>
      <network-config-toggle id="shareEphemeralDisabled" label="[[i18n('networkConfigShare')]]"
          property="{{shareNetworkEphemeralDisabled_}}">
      </network-config-toggle>
    </template>
  </template>

  <!-- AutoConnect (WiFi) -->
  <template is="dom-if" if="[[configCanAutoConnect_(mojoType_)]]" restamp>
    <div class="property-box">
      <div id="autoConnectLabel" class="start">
        [[i18n('networkAutoConnect')]]
      </div>
      <template is="dom-if"
          if="[[isAutoConnectEnforcedByPolicy_(globalPolicy_)]]" restamp>
        <cr-policy-indicator indicator-type="devicePolicy">
        </cr-policy-indicator>
      </template>
      <cr-toggle id="autoConnect" checked="{{autoConnect_}}"
          disabled="[[autoConnectDisabled_(globalPolicy_)]]"
          aria-labeledby="autoConnectLabel">
      </cr-toggle>
    </div>
  </template>

  <!-- Hidden Network Warning -->
  <template is="dom-if" if="{{hiddenNetworkWarning_}}" restamp>
    <div>
      <iron-icon icon="cr:warning"></iron-icon>
      [[i18nAdvanced('hiddenNetworkWarning')]]
    </div>
  </template>
</template>
<!--_html_template_end_-->`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const VPNConfigType={IKEV2:"IKEv2",L2TP_IPSEC:"L2TP_IPsec",OPEN_VPN:"OpenVPN",WIREGUARD:"WireGuard"};const IpsecAuthType={PSK:"PSK",CERT:"Cert",EAP:"EAP"};const WireGuardKeyConfigType={USE_CURRENT:"UseCurrent",GENERATE_NEW:"GenerateNew",USER_INPUT:"UserInput"};const DEFAULT_HASH="default";const DO_NOT_CHECK_HASH="do-not-check";const NO_CERTS_HASH="no-certs";const NO_USER_CERT_HASH="no-user-cert";const DEFAULT_EAP_OUTER_PROTOCOL="PEAP";const PLACEHOLDER_CREDENTIAL="(credential)";const IPV4_ADDR_REGEX=/^([0-9]+\.){3}[0-9]+$/i;const IPV6_ADDR_REGEX=/^(\:?[0-9a-f]{0,4}){2,8}$/i;const IP_CIDR_REGEX=/^[0-9a-f\.\:]+\/[0-9]+?$/i;Polymer({_template:getTemplate$S(),is:"network-config",behaviors:[NetworkListenerBehavior,I18nBehavior],properties:{globalPolicy_:Object,guid:String,type:String,mojoType_:Number,shareAllowEnable:Boolean,shareDefault:Boolean,enableConnect:{type:Boolean,notify:true,value:false},enableSave:{type:Boolean,notify:true,value:false},connectOnEnter:{type:Boolean,value:false},error:{type:String,notify:true},prefilledProperties:Object,managedProperties_:{type:Object,value:null},managedEapProperties_:{type:Object,value:null},propertiesSent_:Boolean,configProperties_:Object,eapProperties_:{type:Object,value:null},cachedServerCaCerts_:Array,cachedUserCerts_:Array,serverCaCerts_:{type:Array,value(){return[]}},selectedServerCaHash_:String,userCerts_:{type:Array,value(){return[]}},selectedUserCertHash_:{type:String,observer:"updateIsConfigured_"},isConfigured_:{type:Boolean,value:false},shareNetwork_:{type:Boolean,value:true},shareNetworkEphemeralDisabled_:{type:Object,value:{activeValue:false,policySource:PolicySource.kDevicePolicyEnforced,policyValue:false}},autoConnect_:{type:Boolean,observer:"updateHiddenNetworkWarning_"},hiddenNetworkWarning_:Boolean,securityType_:Number,vpnSaveCredentials_:{type:Boolean,value:false},vpnType_:{type:String,observer:"updateVpnIPsecAuthTypeItems_"},ipsecAuthType_:{type:String,value:IpsecAuthType.PSK},wireguardKeyType_:String,ipAddressInput_:{type:String,observer:"updateIsConfigured_"},nameServersInput_:String,showEap_:{type:Object,value:null},showVpn_:{type:Object,value:null},isWireGuardUserPrivateKeyInputActive_:{type:Boolean,computed:"updateWireGuardKeyType_(wireguardKeyType_)"},eapOuterItems_:{type:Array,readOnly:true,value:["PEAP","EAP-TLS","EAP-TTLS","LEAP"]},eapInnerItemsPeap_:{type:Array,readOnly:true,value:()=>{const values=["Automatic","MD5","MSCHAPv2"];if(loadTimeData$1.getBoolean("eapGtcWifiAuthentication")){values.push("GTC")}return values}},eapInnerItemsTtls_:{type:Array,readOnly:true,value:["Automatic","MD5","MSCHAP","MSCHAPv2","PAP","CHAP","GTC"]},vpnTypeItems_:{type:Array,value:[VPNConfigType.L2TP_IPSEC,VPNConfigType.OPEN_VPN]},ipsecAuthTypeItems_:{type:Array,value:[]},wireguardKeyTypeItems_:{type:Array,value:[]},deviceCertsOnly_:{type:Boolean,value:false},configRequiresPassphrase_:{type:Boolean,computed:"computeConfigRequiresPassphrase_(mojoType_, securityType_)"},serializedDomainSuffixMatch_:{type:String,value:""},serializedSubjectAltNameMatch_:{type:String,value:""}},observers:["setEnableConnect_(isConfigured_, propertiesSent_)","setEnableSave_(isConfigured_, managedProperties_)","setShareNetwork_(mojoType_, managedProperties_, securityType_,"+"shareDefault, shareAllowEnable)","updateConfigProperties_(mojoType_, managedProperties_)","updateSecurity_(configProperties_, securityType_)","updateCertItems_(cachedServerCaCerts_, cachedUserCerts_, vpnType_, "+"securityType_, eapProperties_.outer)","updateEapOuter_(eapProperties_.outer)","updateEapCerts_(eapProperties_.*, serverCaCerts_, userCerts_)","updateShowEap_(configProperties_.*, eapProperties_.*, securityType_)","updateVpnType_(configProperties_, vpnType_, ipsecAuthType_)","updateVpnIPsecCerts_(vpnType_, ipsecAuthType_,"+"configProperties_.typeConfig.vpn.ipSec.*, serverCaCerts_, userCerts_)","updateOpenVPNCerts_(vpnType_,"+"configProperties_.typeConfig.vpn.openVpn.*,"+"serverCaCerts_, userCerts_)","updateIsConfigured_(configProperties_.*, securityType_)","updateIsConfigured_(configProperties_, eapProperties_.*)","updateIsConfigured_(configProperties_.typeConfig.wifi.*)","updateIsConfigured_(configProperties_.typeConfig.vpn.*, vpnType_,"+"ipsecAuthType_)"],listeners:{enter:"onEnterEvent_"},MIN_PASSPHRASE_LENGTH:5,networkConfig_:null,created(){this.networkConfig_=MojoInterfaceProviderImpl.getInstance().getMojoServiceRemote()},attached(){this.networkConfig_.getGlobalPolicy().then((response=>{this.globalPolicy_=response.result}))},init(){this.mojoType_=undefined;this.vpnType_=undefined;this.managedProperties_=null;this.configProperties_=undefined;this.propertiesSent_=false;this.cachedServerCaCerts_=undefined;this.cachedUserCerts_=undefined;this.selectedServerCaHash_=undefined;this.selectedUserCertHash_=undefined;this.networkConfig_.getSupportedVpnTypes().then((response=>{this.updateVpnTypeItems_(response.vpnTypes)}));this.initWireGuardKeyConfigType_();if(this.guid){this.networkConfig_.getManagedProperties(this.guid).then((response=>{this.getManagedPropertiesCallback_(response.result)}))}else{const mojoType=OncMojo.getNetworkTypeFromString(this.type);const managedProperties=OncMojo.getDefaultManagedProperties(mojoType,this.guid,this.name);if(mojoType===NetworkType.kWiFi&&this.securityType_!==undefined){managedProperties.typeProperties.wifi.security=this.securityType_}this.managedProperties_=managedProperties;this.mojoType_=mojoType;setTimeout((()=>{this.focusFirstInput_()}))}if(this.mojoType_===NetworkType.kVPN||this.globalPolicy_&&this.globalPolicy_.allowOnlyPolicyWifiNetworksToConnect){this.autoConnect_=false}else{this.autoConnect_=true}this.hiddenNetworkWarning_=this.showHiddenNetworkWarning_();this.updateIsConfigured_()},save(){this.saveAndConnect_(false)},connect(){this.saveAndConnect_(true)},focusPassphrase_(){const passphraseInput=this.$$("#wifi-passphrase");if(passphraseInput){passphraseInput.focus()}},saveAndConnect_(connect){if(!this.managedProperties_||this.propertiesSent_){return}this.propertiesSent_=true;this.error="";if(this.eapProperties_){const dsm=OncMojo.deserializeDomainSuffixMatch(this.serializedDomainSuffixMatch_);if(!dsm){this.setError_("invalidDomainSuffixMatchEntry");this.propertiesSent_=false;return}this.eapProperties_.domainSuffixMatch=dsm;const sanm=OncMojo.deserializeSubjectAltNameMatch(this.serializedSubjectAltNameMatch_);if(!sanm){this.setError_("invalidSubjectAlternativeNameMatchEntry");this.propertiesSent_=false;return}this.eapProperties_.subjectAltNameMatch=sanm;if(!this.eapConfigServerCaCertAllowed_()){this.setError_("missingEapDefaultServerCaSubjectVerification");this.propertiesSent_=false;return}}const propertiesToSet=this.getPropertiesToSet_();if(this.managedProperties_.source===OncSource.kNone){if(this.mojoType_===NetworkType.kWiFi){propertiesToSet.typeConfig.wifi.hiddenSsid=HiddenSsidMode.kDisabled}if(!this.autoConnect_){propertiesToSet.autoConnect={value:false}}this.networkConfig_.configureNetwork(propertiesToSet,this.shareNetwork_).then((response=>{this.createNetworkCallback_(response.guid,response.errorMessage,connect)}))}else{this.networkConfig_.setProperties(this.guid,propertiesToSet).then((response=>{this.setPropertiesCallback_(response.success,response.errorMessage,connect)}))}this.fire("properties-set")},focusFirstInput_(){flush();const e=this.$$("network-config-input:not([readonly]),"+"network-password-input:not([disabled]),"+"network-config-select:not([disabled])");if(e){e.focus()}},onEnterEvent_(event){if(event.composedPath()[0].localName==="network-config-input"||event.composedPath()[0].localName==="network-password-input"){this.onEnterPressedInInput_();event.stopPropagation()}},onEnterPressedInInput_(){if(!this.isConfigured_){return}if(this.connectOnEnter){this.connect()}else{this.save()}},close_(){this.guid="";this.type="";this.securityType_=undefined;this.fire("close")},hasGuid_(){return!!this.guid},isIkev2Supported_(){return this.vpnTypeItems_.includes(VPNConfigType.IKEV2)},isWireGuardSupported_(){return this.vpnTypeItems_.includes(VPNConfigType.WIREGUARD)},updateVpnTypeItems_(responseTypes){this.vpnTypeItems_=[VPNConfigType.L2TP_IPSEC,VPNConfigType.OPEN_VPN];if(responseTypes.includes("ikev2")){this.vpnTypeItems_.unshift(VPNConfigType.IKEV2)}if(responseTypes.includes("wireguard")){this.vpnTypeItems_.push(VPNConfigType.WIREGUARD)}},initWireGuardKeyConfigType_(){let items=[WireGuardKeyConfigType.GENERATE_NEW,WireGuardKeyConfigType.USER_INPUT];if(this.hasGuid_()){items=[...items,WireGuardKeyConfigType.USE_CURRENT];this.wireguardKeyType_=WireGuardKeyConfigType.USE_CURRENT}else{this.wireguardKeyType_=WireGuardKeyConfigType.GENERATE_NEW}this.wireguardKeyTypeItems_=items},onNetworkCertificatesChanged(){this.networkConfig_.getNetworkCertificates().then((response=>{this.set("cachedServerCaCerts_",response.serverCas.slice());this.set("cachedUserCerts_",response.userCerts.slice())}))},getDefaultCert_(type,desc,hash){return{type:type,hash:hash,issuedBy:desc,issuedTo:"",pemOrId:"",availableForNetworkAuth:false,hardwareBacked:false,deviceWide:true}},getActiveBoolean_(property){if(!property){return false}return property.activeValue},getActiveInt32_(property){if(!property){return 0}return property.activeValue},getActiveStringList_(property){if(!property){return undefined}return property.activeValue},getManagedPropertiesCallback_(managedProperties){if(!managedProperties){console.warn("Network no longer exists: "+this.guid);this.close_();return}this.managedProperties_=managedProperties;this.managedEapProperties_=this.getManagedEap_(managedProperties);this.mojoType_=managedProperties.type;if(this.mojoType_===NetworkType.kVPN){let saveCredentials=false;const vpn=managedProperties.typeProperties.vpn;if(vpn.type===VpnType.kOpenVPN){saveCredentials=this.getActiveBoolean_(vpn.openVpn.saveCredentials)}else if(vpn.type===VpnType.kIKEv2){saveCredentials=this.getActiveBoolean_(vpn.ipSec.saveCredentials)}else if(vpn.type===VpnType.kL2TPIPsec){saveCredentials=this.getActiveBoolean_(vpn.ipSec.saveCredentials)||this.getActiveBoolean_(vpn.l2tp.saveCredentials)}else if(vpn.type===VpnType.kWireGuard){saveCredentials=true}this.vpnSaveCredentials_=saveCredentials}this.setError_(managedProperties.errorState);this.updateCertError_();this.focusFirstInput_()},getSecurityItems_(){if(this.mojoType_===NetworkType.kWiFi){return[SecurityType.kNone,SecurityType.kWepPsk,SecurityType.kWpaPsk,SecurityType.kWpaEap]}return[SecurityType.kNone,SecurityType.kWpaEap]},setShareNetwork_(){if(this.mojoType_===undefined||!this.managedProperties_||!this.securityType_===undefined){return}const source=this.managedProperties_.source;if(source!==OncSource.kNone){this.shareNetwork_=source===OncSource.kDevice||source===OncSource.kDevicePolicy;return}if(!this.shareIsVisible_()){this.shareNetwork_=this.shareDefault;return}if(this.shareAllowEnable){if(this.mojoType_===NetworkType.kWiFi){this.shareNetwork_=this.securityType_===SecurityType.kNone;return}}this.shareNetwork_=this.shareDefault},onShareChanged_(event){this.updateSelectedCerts_()},getEAPConfigProperties_(eap){return{anonymousIdentity:OncMojo.getActiveString(eap.anonymousIdentity),clientCertType:OncMojo.getActiveString(eap.clientCertType),clientCertPkcs11Id:OncMojo.getActiveString(eap.clientCertPkcs11Id),domainSuffixMatch:this.getActiveStringList_(eap.domainSuffixMatch)||[],identity:OncMojo.getActiveString(eap.identity),inner:OncMojo.getActiveString(eap.inner),outer:OncMojo.getActiveString(eap.outer)||DEFAULT_EAP_OUTER_PROTOCOL,password:OncMojo.getActiveString(eap.password),saveCredentials:this.getActiveBoolean_(eap.saveCredentials),serverCaPems:this.getActiveStringList_(eap.serverCaPems),subjectAltNameMatch:OncMojo.getActiveValue(eap.subjectAltNameMatch)||[],subjectMatch:OncMojo.getActiveString(eap.subjectMatch),useSystemCas:this.getActiveBoolean_(eap.useSystemCas)}},getIPSecConfigProperties_(ipSec){return{authenticationType:OncMojo.getActiveString(ipSec.authenticationType)||"PSK",clientCertPkcs11Id:OncMojo.getActiveString(ipSec.clientCertPkcs11Id),clientCertType:OncMojo.getActiveString(ipSec.clientCertType),eap:ipSec.eap?this.getEAPConfigProperties_(ipSec.eap):null,group:OncMojo.getActiveString(ipSec.group),ikeVersion:this.getActiveInt32_(ipSec.ikeVersion),localIdentity:OncMojo.getActiveString(ipSec.localIdentity),psk:OncMojo.getActiveString(ipSec.psk),remoteIdentity:OncMojo.getActiveString(ipSec.remoteIdentity),saveCredentials:this.getActiveBoolean_(ipSec.saveCredentials),serverCaPems:this.getActiveStringList_(ipSec.serverCaPems),serverCaRefs:this.getActiveStringList_(ipSec.serverCaRefs)}},getL2TPConfigProperties_(l2tp){return{lcpEchoDisabled:this.getActiveBoolean_(l2tp.lcpEchoDisabled),password:OncMojo.getActiveString(l2tp.password),saveCredentials:this.getActiveBoolean_(l2tp.saveCredentials),username:OncMojo.getActiveString(l2tp.username)}},getOpenVPNConfigProperties_(openVpn){return{clientCertPkcs11Id:OncMojo.getActiveString(openVpn.clientCertPkcs11Id),clientCertType:OncMojo.getActiveString(openVpn.clientCertType),extraHosts:this.getActiveStringList_(openVpn.extraHosts),otp:"",password:OncMojo.getActiveString(openVpn.password),saveCredentials:this.getActiveBoolean_(openVpn.saveCredentials),serverCaPems:this.getActiveStringList_(openVpn.serverCaPems),serverCaRefs:this.getActiveStringList_(openVpn.serverCaRefs),userAuthenticationType:OncMojo.getActiveString(openVpn.userAuthenticationType),username:OncMojo.getActiveString(openVpn.username)}},getWireGuardConfigProperties_(wireguard){const config={ipAddresses:this.getActiveStringList_(wireguard.ipAddresses)??[],privateKey:OncMojo.getActiveString(wireguard.privateKey),peers:[]};if(wireguard.peers&&wireguard.peers.activeValue){for(const peer of wireguard.peers.activeValue){const peerCopied=Object.assign({},peer);if(this.hasGuid_()){peerCopied.presharedKey=PLACEHOLDER_CREDENTIAL}config.peers.push(peerCopied)}}return config},updateConfigProperties_(){if(this.mojoType_===undefined||!this.managedProperties_){return}this.showEap_=null;this.showVpn_=null;this.vpnType_=undefined;const managedProperties=this.managedProperties_;const configProperties=OncMojo.getDefaultConfigProperties(managedProperties.type);configProperties.name=OncMojo.getActiveString(managedProperties.name);let autoConnect;let security=SecurityType.kNone;switch(managedProperties.type){case NetworkType.kWiFi:const wifi=managedProperties.typeProperties.wifi;const configWifi=configProperties.typeConfig.wifi;autoConnect=this.getActiveBoolean_(wifi.autoConnect);configWifi.passphrase=OncMojo.getActiveString(wifi.passphrase);configWifi.ssid=OncMojo.getActiveString(wifi.ssid);if(wifi.eap){configWifi.eap=this.getEAPConfigProperties_(wifi.eap)}security=wifi.security;configWifi.security=security;break;case NetworkType.kEthernet:const eap=managedProperties.typeProperties.ethernet.eap?this.getEAPConfigProperties_(managedProperties.typeProperties.ethernet.eap):undefined;security=eap?SecurityType.kWpaEap:SecurityType.kNone;const auth=security===SecurityType.kWpaEap?"8021X":"None";configProperties.typeConfig.ethernet.authentication=auth;configProperties.typeConfig.ethernet.eap=eap;break;case NetworkType.kVPN:const vpn=managedProperties.typeProperties.vpn;const vpnType=vpn.type;const configVpn=configProperties.typeConfig.vpn;configVpn.host=OncMojo.getActiveString(vpn.host);configVpn.type={value:vpnType};if(vpnType===VpnType.kIKEv2){if(!this.isIkev2Supported_()){break}assert$1(vpn.ipSec);configVpn.ipSec=this.getIPSecConfigProperties_(vpn.ipSec)}else if(vpnType===VpnType.kL2TPIPsec){assert$1(vpn.ipSec);configVpn.ipSec=this.getIPSecConfigProperties_(vpn.ipSec);assert$1(vpn.l2tp);configVpn.l2tp=this.getL2TPConfigProperties_(vpn.l2tp)}else if(vpnType===VpnType.kOpenVPN){assert$1(vpn.openVpn);configVpn.openVpn=this.getOpenVPNConfigProperties_(vpn.openVpn)}else if(vpnType===VpnType.kWireGuard){if(!this.isWireGuardSupported_()){break}assert$1(vpn.wireguard);configVpn.wireguard=this.getWireGuardConfigProperties_(vpn.wireguard);this.ipAddressInput_=configVpn.wireguard.ipAddresses.join(",");const staticIpConfig=managedProperties.staticIpConfig;if(staticIpConfig&&staticIpConfig.nameServers){this.nameServersInput_=staticIpConfig.nameServers.activeValue.join(",")}}else{assertNotReached$1()}security=SecurityType.kNone;break}if(autoConnect!==undefined){configProperties.autoConnect={value:autoConnect}}const requestCertificates=this.configProperties_===undefined;this.configProperties_=configProperties;this.securityType_=security;this.set("eapProperties_",this.getEap_(this.configProperties_));if(!this.eapProperties_){this.showEap_=null}else{this.serializedDomainSuffixMatch_=OncMojo.serializeDomainSuffixMatch(this.eapProperties_.domainSuffixMatch);this.serializedSubjectAltNameMatch_=OncMojo.serializeSubjectAltNameMatch(this.eapProperties_.subjectAltNameMatch)}if(managedProperties.type===NetworkType.kVPN){this.vpnType_=this.getVpnTypeFromProperties_(this.configProperties_);this.ipsecAuthType_=this.getIpsecAuthTypeFromProperties_(this.configProperties_)}if(requestCertificates){this.onNetworkCertificatesChanged()}},updateSecurity_(){if(this.securityType_===undefined||!this.configProperties_){return}const type=this.mojoType_;if(typeof this.securityType_==="string"){this.securityType_=Number.parseInt(this.securityType_,10)}const security=this.securityType_;if(type===NetworkType.kWiFi){this.configProperties_.typeConfig.wifi.security=security}else if(type===NetworkType.kEthernet){const auth=security===SecurityType.kWpaEap?"8021X":"None";this.configProperties_.typeConfig.ethernet.authentication=auth}let eap;if(security===SecurityType.kWpaEap){eap=this.getEap_(this.configProperties_,true);eap.outer=eap.outer||DEFAULT_EAP_OUTER_PROTOCOL}this.setEap_(eap)},updateEapOuter_(){const eap=this.eapProperties_;if(!eap||!eap.outer){return}const innerItems=this.getEapInnerItems_(eap.outer);if(innerItems.length>0){if(!eap.inner||innerItems.indexOf(eap.inner)<0){this.set("eapProperties_.inner",innerItems[0])}}else{this.set("eapProperties_.inner",undefined)}if(eap.outer!=="EAP-TLS"){this.set("eapProperties_.clientCertType","None");this.set("eapProperties_.clientCertPkcs11Id","");this.selectedUserCertHash_=NO_USER_CERT_HASH}},updateEapCerts_(){if(this.mojoType_===NetworkType.kVPN){return}const eap=this.eapProperties_;const pem=eap&&eap.serverCaPems?eap.serverCaPems[0]:"";const certId=eap&&eap.clientCertType==="PKCS11Id"?eap.clientCertPkcs11Id:"";this.setSelectedCerts_(pem,certId)},updateShowEap_(){if(!this.eapProperties_||this.securityType_===SecurityType.kNone){this.showEap_=null;this.updateCertError_();return}const outer=this.eapProperties_.outer;switch(this.mojoType_){case NetworkType.kWiFi:case NetworkType.kEthernet:this.showEap_={Outer:true,Inner:outer==="PEAP"||outer==="EAP-TTLS",ServerCA:outer!=="LEAP",EapServerCertMatch:outer==="EAP-TLS"||outer==="EAP-TTLS"||outer==="PEAP",UserCert:outer==="EAP-TLS",Identity:true,Password:outer!=="EAP-TLS",AnonymousIdentity:outer==="PEAP"||outer==="EAP-TTLS"};break}this.updateCertError_()},getEap_(properties,opt_create){let eap;if(properties.typeConfig.wifi){eap=properties.typeConfig.wifi.eap}else if(properties.typeConfig.ethernet){eap=properties.typeConfig.ethernet.eap}else if(properties.typeConfig.vpn&&properties.typeConfig.vpn.ipSec){eap=properties.typeConfig.vpn.ipSec.eap}if(opt_create){return eap||{saveCredentials:false,useSystemCas:false,domainSuffixMatch:[],subjectAltNameMatch:[]}}return eap||null},setEap_(eapProperties){switch(this.mojoType_){case NetworkType.kWiFi:this.configProperties_.typeConfig.wifi.eap=eapProperties;break;case NetworkType.kEthernet:this.configProperties_.typeConfig.ethernet.eap=eapProperties;break}this.set("eapProperties_",eapProperties)},getManagedEap_(managedProperties){let managedEap;switch(managedProperties.type){case NetworkType.kWiFi:managedEap=managedProperties.typeProperties.wifi.eap;break;case NetworkType.kEthernet:managedEap=managedProperties.typeProperties.ethernet.eap;break;case NetworkType.kVPN:if(managedProperties.typeProperties.vpn.ipSec){managedEap=managedProperties.typeProperties.vpn.ipSec.eap}break}return managedEap||null},getVpnTypeFromProperties_(properties){const vpn=properties.typeConfig.vpn;assert$1(vpn);if(!!vpn.type&&vpn.type.value===VpnType.kIKEv2){return VPNConfigType.IKEV2}else if(!!vpn.type&&vpn.type.value===VpnType.kL2TPIPsec){return VPNConfigType.L2TP_IPSEC}else if(!!vpn.type&&vpn.type.value===VpnType.kWireGuard){return VPNConfigType.WIREGUARD}return VPNConfigType.OPEN_VPN},getIpsecAuthTypeFromProperties_(properties){const vpn=properties.typeConfig.vpn;assert$1(vpn);if(!vpn.type||!(vpn.type.value===VpnType.kL2TPIPsec||vpn.type.value===VpnType.kIKEv2)){return IpsecAuthType.PSK}if(vpn.ipSec.authenticationType===IpsecAuthType.PSK){return IpsecAuthType.PSK}else if(vpn.ipSec.authenticationType===IpsecAuthType.CERT){return IpsecAuthType.CERT}else if(vpn.ipSec.authenticationType===IpsecAuthType.EAP){return IpsecAuthType.EAP}assertNotReached$1()},updateWireGuardKeyType_(){return this.wireguardKeyType_===WireGuardKeyConfigType.USER_INPUT},updateCertItems_(){if(this.configProperties_===undefined||this.cachedServerCaCerts_===undefined||this.cachedUserCerts_===undefined){return}const isOpenVpn=this.vpnType_===VPNConfigType.OPEN_VPN;const isIpsec=this.vpnType_===VPNConfigType.L2TP_IPSEC||this.vpnType_===VPNConfigType.IKEV2;let caCerts=this.cachedServerCaCerts_.slice();if(!isOpenVpn&&!isIpsec){caCerts.unshift(this.getDefaultCert_(CertificateType.kServerCA,this.i18n("networkCAUseDefault"),DEFAULT_HASH))}if(!isIpsec){caCerts.push(this.getDefaultCert_(CertificateType.kServerCA,this.i18n("networkCADoNotCheck"),DO_NOT_CHECK_HASH))}if(!caCerts.length){caCerts=[this.getDefaultCert_(CertificateType.kServerCA,this.i18n("networkCertificateNoneInstalled"),NO_CERTS_HASH)]}this.set("serverCaCerts_",caCerts);let userCerts=this.cachedUserCerts_.slice();userCerts.forEach((function(cert){if(!cert.availableForNetworkAuth){cert.hash=""}}));const isEap=this.securityType_===SecurityType.kWpaEap;const isEapTls=isEap&&this.eapProperties_.outer==="EAP-TLS";const isUserCertOptional=isOpenVpn||isEap&&!isEapTls;if(isUserCertOptional){userCerts.unshift(this.getDefaultCert_(CertificateType.kUserCert,this.i18n("networkNoUserCert"),NO_USER_CERT_HASH))}if(!userCerts.length){userCerts=[this.getDefaultCert_(CertificateType.kUserCert,this.i18n("networkCertificateNoneInstalled"),NO_CERTS_HASH)]}this.set("userCerts_",userCerts);this.updateSelectedCerts_();this.updateCertError_()},updateVpnType_(){if(this.configProperties_===undefined||this.vpnType_===undefined){return}const vpn=this.configProperties_.typeConfig.vpn;if(!vpn){this.showVpn_=null;this.updateCertError_();return}switch(this.vpnType_){case VPNConfigType.IKEV2:vpn.type={value:VpnType.kIKEv2};if(!vpn.ipSec){this.ipsecAuthType_=IpsecAuthType.EAP;vpn.ipSec={authenticationType:this.ipsecAuthType_,ikeVersion:2,saveCredentials:false}}if(this.ipsecAuthType_===IpsecAuthType.EAP&&!vpn.ipSec.eap){vpn.ipSec.eap={domainSuffixMatch:[],outer:"MSCHAPv2",saveCredentials:false,subjectAltNameMatch:[],useSystemCas:false};this.eapProperties_=vpn.ipSec.eap}break;case VPNConfigType.L2TP_IPSEC:vpn.type={value:VpnType.kL2TPIPsec};if(this.ipsecAuthType_!==IpsecAuthType.PSK&&this.ipsecAuthType_!==IpsecAuthType.CERT){this.ipsecAuthType_=IpsecAuthType.PSK}if(!vpn.ipSec){vpn.ipSec={authenticationType:this.ipsecAuthType_,ikeVersion:1,saveCredentials:false}}break;case VPNConfigType.OPEN_VPN:vpn.type={value:VpnType.kOpenVPN};vpn.openVpn=vpn.openVpn||{saveCredentials:false};break;case VPNConfigType.WIREGUARD:vpn.type={value:VpnType.kWireGuard};vpn.wireguard=vpn.wireguard||{peers:[{}]};break;default:assertNotReached$1()}const isIpsec=this.vpnType_===VPNConfigType.L2TP_IPSEC||this.vpnType_===VPNConfigType.IKEV2;const ipsecAuthIsPsk=this.ipsecAuthType_===IpsecAuthType.PSK;const ipsecAuthIsEap=this.ipsecAuthType_===IpsecAuthType.EAP;const ipsecAuthIsCert=this.ipsecAuthType_===IpsecAuthType.CERT;const isOpenvpn=this.vpnType_===VPNConfigType.OPEN_VPN;this.showVpn_={IPsec:isIpsec,IPsecPSK:isIpsec&&ipsecAuthIsPsk,IPsecEAP:isIpsec&&ipsecAuthIsEap,IKEv2:this.vpnType_===VPNConfigType.IKEV2,OpenVPN:isOpenvpn,WireGuard:this.vpnType_===VPNConfigType.WIREGUARD,ServerCA:isIpsec&&!ipsecAuthIsPsk||isOpenvpn,UserCert:isIpsec&&ipsecAuthIsCert||isOpenvpn};if(vpn.type.value===VpnType.kL2TPIPsec&&!vpn.l2tp){vpn.l2tp={lcpEchoDisabled:false,password:"",saveCredentials:false,username:""}}if(vpn.type.value!==VpnType.kL2TPIPsec&&vpn.type.value!==VpnType.kIKEv2){delete vpn.ipSec}if(vpn.type.value!==VpnType.kL2TPIPsec){delete vpn.l2tp}if(vpn.type.value!==VpnType.kOpenVPN){delete vpn.openVpn}if(vpn.type.value!==VpnType.kWireGuard){delete vpn.wireguard}this.updateCertError_()},updateVpnIPsecAuthTypeItems_(){this.ipsecAuthTypeItems_=[IpsecAuthType.PSK,IpsecAuthType.CERT];if(this.vpnType_===VPNConfigType.IKEV2){this.ipsecAuthTypeItems_.push(IpsecAuthType.EAP)}},updateVpnIPsecCerts_(){if(this.vpnType_!==VPNConfigType.L2TP_IPSEC&&this.vpnType_!==VPNConfigType.IKEV2){return}if(this.ipsecAuthType_===IpsecAuthType.PSK){return}const ipSec=this.configProperties_.typeConfig.vpn.ipSec;if(!ipSec){return}const pem=ipSec.serverCaPems?ipSec.serverCaPems[0]:undefined;const certId=ipSec.clientCertType==="PKCS11Id"?ipSec.clientCertPkcs11Id:"";this.setSelectedCerts_(pem,certId)},updateOpenVPNCerts_(){if(this.vpnType_!==VPNConfigType.OPEN_VPN){return}const openVpn=this.configProperties_.typeConfig.vpn.openVpn;if(!openVpn){return}const pem=openVpn.serverCaPems?openVpn.serverCaPems[0]:undefined;const certId=openVpn.clientCertType==="PKCS11Id"?openVpn.clientCertPkcs11Id:"";this.setSelectedCerts_(pem,certId)},updateCertError_(){const noCertsError="networkErrorNoUserCertificate";const noValidCertsError="networkErrorNotAvailableForNetworkAuth";if(this.error&&this.error!==noCertsError&&this.error!==noValidCertsError){return}const requireCerts=this.showEap_&&this.showEap_.UserCert||this.showVpn_&&this.showVpn_.UserCert;if(!requireCerts){this.setError_("");return}if(!this.userCerts_.length||this.userCerts_[0].hash===NO_CERTS_HASH){this.setError_(noCertsError);return}const validUserCert=this.userCerts_.find((function(cert){return!!cert.hash}));if(!validUserCert){this.setError_(noValidCertsError);return}this.setError_("");return},setSelectedCerts_(pem,certId){if(pem){const serverCa=this.serverCaCerts_.find((function(cert){return cert.pemOrId===pem}));if(serverCa){this.selectedServerCaHash_=serverCa.hash}}if(certId){const userCert=this.userCerts_.find((function(cert){return cert.pemOrId.indexOf(certId)>=0}));if(userCert){this.selectedUserCertHash_=userCert.hash}}this.updateSelectedCerts_();this.updateIsConfigured_()},findCert_(certs,hash){if(!hash){return undefined}return certs.find((cert=>cert.hash===hash))},updateSelectedCerts_(){if(!this.serverCaCerts_.length||!this.userCerts_.length){return}const eap=this.eapProperties_;this.deviceCertsOnly_=this.shareNetwork_&&!!eap&&eap.outer==="EAP-TLS";const caCert=this.findCert_(this.serverCaCerts_,this.selectedServerCaHash_);if(!caCert||this.deviceCertsOnly_&&!caCert.deviceWide){this.selectedServerCaHash_=undefined}if(!this.selectedServerCaHash_){if(eap&&eap.useSystemCas){this.selectedServerCaHash_=DEFAULT_HASH}else if(!this.guid&&this.serverCaCerts_[0]){let cert=this.serverCaCerts_[0];if(cert.hash===DEFAULT_HASH&&this.isRealCertUsableForNetworkAuth_(this.serverCaCerts_[1])){cert=this.serverCaCerts_[1]}this.selectedServerCaHash_=cert.hash}else{this.selectedServerCaHash_=DO_NOT_CHECK_HASH}}const userCert=this.findCert_(this.userCerts_,this.selectedUserCertHash_);if(!userCert||this.deviceCertsOnly_&&!userCert.deviceWide){this.selectedUserCertHash_=undefined}if(!this.selectedUserCertHash_){for(let i=0;i<this.userCerts_.length;++i){const userCert=this.userCerts_[i];if(userCert&&(!this.deviceCertsOnly_||userCert.deviceWide)){this.selectedUserCertHash_=userCert.hash;break}}}},isRealCertUsableForNetworkAuth_(cert){return!!cert&&cert.hash!==DO_NOT_CHECK_HASH&&cert.hash!==DEFAULT_HASH},getIsConfigured_(){if(this.securityType_===undefined||!this.configProperties_){return false}const typeConfig=this.configProperties_.typeConfig;if(typeConfig.vpn){if(this.vpnType_===VPNConfigType.IKEV2&&!this.isIkev2Supported_()){return false}return this.vpnIsConfigured_()}if(typeConfig.wifi){if(!typeConfig.wifi.ssid){return false}if(this.configRequiresPassphrase_){const passphrase=typeConfig.wifi.passphrase;if(!passphrase||passphrase.length<this.MIN_PASSPHRASE_LENGTH){return false}}}if(this.securityType_===SecurityType.kWpaEap){return this.eapIsConfigured_()}return true},updateIsConfigured_(){this.isConfigured_=this.getIsConfigured_()},isWiFi_(networkType){return networkType===NetworkType.kWiFi},setEnableSave_(){this.enableSave=this.isConfigured_&&!!this.managedProperties_},setEnableConnect_(){this.enableConnect=this.isConfigured_&&!this.propertiesSent_},securityIsVisible_(networkType){return networkType===NetworkType.kWiFi||networkType===NetworkType.kEthernet},securityIsEnabled_(){return!this.guid||this.mojoType_===NetworkType.kEthernet},shareIsVisible_(){if(!this.managedProperties_){return false}return this.managedProperties_.source===OncSource.kNone&&this.managedProperties_.type===NetworkType.kWiFi},shareIsEnabled_(){if(!this.managedProperties_){return false}if(!this.shareAllowEnable||this.managedProperties_.source!==OncSource.kNone){return false}return true},networkIsEphemeral_(){if(!loadTimeData$1.getBoolean("ephemeralNetworkPoliciesEnabled")){return false}if(!this.globalPolicy_||!this.globalPolicy_.userCreatedNetworkConfigurationsAreEphemeral){return false}if(!this.managedProperties_){return false}return this.managedProperties_.source===OncSource.kNone},configCanAutoConnect_(){return loadTimeData$1.getBoolean("showHiddenNetworkWarning")&&this.mojoType_===NetworkType.kWiFi},autoConnectDisabled_(){return this.isAutoConnectEnforcedByPolicy_()},isAutoConnectEnforcedByPolicy_(){return!!this.globalPolicy_&&!!this.globalPolicy_.allowOnlyPolicyNetworksToAutoconnect},showHiddenNetworkWarning_(){flush();return loadTimeData$1.getBoolean("showHiddenNetworkWarning")&&this.autoConnect_&&!this.hasGuid_()},updateHiddenNetworkWarning_(){this.hiddenNetworkWarning_=this.showHiddenNetworkWarning_()},selectedServerCaHashIsValid_(){return!!this.selectedServerCaHash_&&this.selectedServerCaHash_!==NO_CERTS_HASH},selectedUserCertHashIsValid_(){return!!this.selectedUserCertHash_&&this.selectedUserCertHash_!==NO_CERTS_HASH},eapIsConfigured_(){if(!this.configProperties_){return false}const eap=this.getEap_(this.configProperties_);if(!eap){return false}if(eap.outer!=="EAP-TLS"){return true}if(this.deviceCertsOnly_){let cert=this.findCert_(this.userCerts_,this.selectedUserCertHash_);if(!cert||!cert.deviceWide){return false}cert=this.findCert_(this.serverCaCerts_,this.selectedServerCaHash_);if(!cert.deviceWide){return false}}return this.selectedUserCertHashIsValid_()},ikev2IsConfigured_(){const vpn=this.configProperties_.typeConfig.vpn;switch(this.ipsecAuthType_){case IpsecAuthType.PSK:return!!vpn.ipSec.psk;case IpsecAuthType.CERT:return this.selectedServerCaHashIsValid_()&&this.selectedUserCertHashIsValid_();case IpsecAuthType.EAP:return this.selectedServerCaHashIsValid_()&&!!this.eapProperties_.identity;default:assertNotReached$1()}},l2tpIpsecIsConfigured_(){const vpn=this.configProperties_.typeConfig.vpn;switch(this.ipsecAuthType_){case IpsecAuthType.PSK:return!!vpn.l2tp.username&&!!vpn.ipSec.psk;case IpsecAuthType.CERT:return!!vpn.l2tp.username&&this.selectedServerCaHashIsValid_()&&this.selectedUserCertHashIsValid_();default:assertNotReached$1()}},isValidWireGuardKey_(input){return!!input&&input.length===44&&input.charAt(43)==="="&&!!input.match(/^[a-z0-9+/=]+$/i)},isValidWireGuardIpAddresses_(ipAddresses){if(!ipAddresses){return false}let v4Count=0;let v6Count=0;for(const ipAddress of ipAddresses.split(",")){if(ipAddress.match(IPV4_ADDR_REGEX)){v4Count++}else if(ipAddress.match(IPV6_ADDR_REGEX)){v6Count++}else{return false}}if(v4Count>1||v6Count>1){return false}return v4Count+v6Count>0},isWireGuardConfigurationValid_(wireguard,ipAddresses){if(!wireguard){return false}if(!this.isValidWireGuardIpAddresses_(ipAddresses)){return false}if(this.isWireGuardUserPrivateKeyInputActive_&&!this.isValidWireGuardKey_(wireguard.privateKey)){return false}const peer=wireguard.peers[0];if(!this.isValidWireGuardKey_(peer.publicKey)){return false}if(!!peer.presharedKey&&peer.presharedKey!==PLACEHOLDER_CREDENTIAL&&!this.isValidWireGuardKey_(peer.presharedKey)){return false}if(!peer.endpoint||!peer.endpoint.match(/^\[?[a-zA-Z0-9\-\.:]+\]?:[0-9]+$/i)){return false}if(!peer.allowedIps||!peer.allowedIps.split(",").every((s=>s.match(IP_CIDR_REGEX)))){return false}return true},vpnIsConfigured_(){const vpn=this.configProperties_.typeConfig.vpn;if(!this.configProperties_.name||!vpn||!vpn.host&&this.vpnType_!==VPNConfigType.WIREGUARD){return false}switch(this.vpnType_){case VPNConfigType.IKEV2:return this.ikev2IsConfigured_();case VPNConfigType.L2TP_IPSEC:return this.l2tpIpsecIsConfigured_();case VPNConfigType.OPEN_VPN:return true;case VPNConfigType.WIREGUARD:return this.isWireGuardConfigurationValid_(vpn.wireguard,this.ipAddressInput_)}return false},getPropertiesToSet_(){const propertiesToSet=Object.assign({},this.configProperties_);delete propertiesToSet.autoConnect;if(this.guid){propertiesToSet.guid=this.guid}const eap=this.getEap_(propertiesToSet);if(eap){this.setEapProperties_(eap)}if(this.mojoType_===NetworkType.kVPN){const vpnConfig=propertiesToSet.typeConfig.vpn;if(vpnConfig.host!==undefined){vpnConfig.host=vpnConfig.host.trim()}const vpnType=vpnConfig.type.value;if(vpnType===VpnType.kOpenVPN){this.setOpenVPNProperties_(propertiesToSet)}else{delete propertiesToSet.typeConfig.vpn.openVpn}if(vpnType===VpnType.kIKEv2){this.setVpnIkev2Properties_(propertiesToSet)}else if(vpnType===VpnType.kL2TPIPsec){this.setVpnL2tpIpsecProperties_(propertiesToSet)}else{delete propertiesToSet.typeConfig.vpn.ipSec;delete propertiesToSet.typeConfig.vpn.l2tp}if(vpnType===VpnType.kWireGuard){this.setWireGuardProperties_(propertiesToSet)}else{delete propertiesToSet.typeConfig.vpn.wireguard}}return propertiesToSet},getServerCaPems_(){const caHash=this.selectedServerCaHash_||"";if(!caHash||caHash===DO_NOT_CHECK_HASH||caHash===DEFAULT_HASH){return[]}const serverCa=this.findCert_(this.serverCaCerts_,caHash);return serverCa&&serverCa.pemOrId?[serverCa.pemOrId]:[]},getUserCertPkcs11Id_(){const userCertHash=this.selectedUserCertHash_||"";if(!this.selectedUserCertHashIsValid_()||userCertHash===NO_USER_CERT_HASH){return""}const userCert=this.findCert_(this.userCerts_,userCertHash);return userCert&&userCert.pemOrId||""},setEapProperties_(eap){eap.useSystemCas=this.selectedServerCaHash_===DEFAULT_HASH;eap.serverCaPems=this.getServerCaPems_();const pkcs11Id=this.getUserCertPkcs11Id_();eap.clientCertType=pkcs11Id?"PKCS11Id":"None";eap.clientCertPkcs11Id=pkcs11Id||""},setVpnIkev2Properties_(propertiesToSet){const ipsec=propertiesToSet.typeConfig.vpn.ipSec;assert$1(!!ipsec);ipsec.authenticationType=this.ipsecAuthType_;if(ipsec.authenticationType!==IpsecAuthType.PSK){ipsec.psk="";ipsec.serverCaPems=this.getServerCaPems_()}if(ipsec.authenticationType===IpsecAuthType.CERT){ipsec.clientCertType="PKCS11Id";ipsec.clientCertPkcs11Id=this.getUserCertPkcs11Id_()}else{delete ipsec.clientCertType;delete ipsec.clientCertPkcs11Id}if(ipsec.authenticationType===IpsecAuthType.EAP){const eap=ipsec.eap;ipsec.eap={domainSuffixMatch:[],identity:eap.identity,outer:"MSCHAPv2",password:eap.password,saveCredentials:this.vpnSaveCredentials_,subjectAltNameMatch:[],useSystemCas:false}}else{delete ipsec.eap}ipsec.ikeVersion=2;ipsec.saveCredentials=this.vpnSaveCredentials_},setOpenVPNProperties_(propertiesToSet){const openVpn=propertiesToSet.typeConfig.vpn.openVpn;assert$1(!!openVpn);openVpn.serverCaPems=this.getServerCaPems_();const pkcs11Id=this.getUserCertPkcs11Id_();openVpn.clientCertType=pkcs11Id?"PKCS11Id":"None";openVpn.clientCertPkcs11Id=pkcs11Id||"";if(openVpn.password){openVpn.userAuthenticationType=openVpn.otp?"PasswordAndOTP":"Password"}else if(openVpn.otp){openVpn.userAuthenticationType="OTP"}else{openVpn.userAuthenticationType="None"}openVpn.saveCredentials=this.vpnSaveCredentials_;propertiesToSet.typeConfig.vpn.openVpn=openVpn},setWireGuardProperties_(propertiesToSet){const wireguard=propertiesToSet.typeConfig.vpn.wireguard;assert$1(!!wireguard);propertiesToSet.typeConfig.vpn.host="wireguard";propertiesToSet.ipAddressConfigType="Static";wireguard.ipAddresses=this.ipAddressInput_.split(",");propertiesToSet.staticIpConfig={gateway:this.ipAddressInput_,routingPrefix:32,type:IPConfigType.kIPv4};if(this.nameServersInput_){propertiesToSet.nameServersConfigType="Static";propertiesToSet.staticIpConfig.nameServers=this.nameServersInput_.split(",")}if(this.wireguardKeyType_===WireGuardKeyConfigType.USE_CURRENT){delete wireguard.privateKey}else if(this.wireguardKeyType_===WireGuardKeyConfigType.GENERATE_NEW){wireguard.privateKey=""}assert$1(!!wireguard.peers);for(const peer of wireguard.peers){if(peer.presharedKey===PLACEHOLDER_CREDENTIAL){delete peer.presharedKey}else if(peer.presharedKey===undefined){peer.presharedKey=""}}},setVpnL2tpIpsecProperties_(propertiesToSet){const vpn=propertiesToSet.typeConfig.vpn;assert$1(vpn.ipSec);assert$1(vpn.l2tp);vpn.ipSec.authenticationType=this.ipsecAuthType_;if(vpn.ipSec.authenticationType===IpsecAuthType.CERT){vpn.ipSec.clientCertType="PKCS11Id";vpn.ipSec.clientCertPkcs11Id=this.getUserCertPkcs11Id_();vpn.ipSec.serverCaPems=this.getServerCaPems_()}vpn.ipSec.ikeVersion=1;vpn.ipSec.saveCredentials=this.vpnSaveCredentials_;vpn.l2tp.saveCredentials=this.vpnSaveCredentials_;delete vpn.ipSec.eap;delete vpn.ipSec.localIdentity;delete vpn.ipSec.remoteIdentity},setPropertiesCallback_(success,errorMessage,connect){if(!success){console.warn("Unable to set properties for: "+this.guid+" Error: "+errorMessage);this.propertiesSent_=false;this.setError_(errorMessage);this.focusPassphrase_();return}if(connect&&this.managedProperties_.connectionState===ConnectionStateType.kNotConnected){this.startConnect_(this.guid)}else{this.close_()}},createNetworkCallback_(guid,errorMessage,connect){if(!guid){console.warn("Unable to configure network: "+guid+" Error: "+errorMessage);this.propertiesSent_=false;this.setError_(errorMessage);this.focusPassphrase_();return}if(connect){this.startConnect_(guid)}else{this.close_()}},startConnect_(guid){this.networkConfig_.startConnect(guid).then((response=>{const result=response.result;if(result===StartConnectResult.kSuccess||result===StartConnectResult.kInvalidGuid||result===StartConnectResult.kInvalidState||result===StartConnectResult.kCanceled){this.close_();return}this.setError_(response.message);console.warn("Error connecting to network: "+guid+": "+result.toString()+" Message: "+response.message);this.propertiesSent_=false}))},computeConfigRequiresPassphrase_(mojoType,securityType){return mojoType===NetworkType.kWiFi&&(securityType===SecurityType.kWepPsk||securityType===SecurityType.kWpaPsk)},getEapInnerItems_(outer){if(outer==="PEAP"){return this.eapInnerItemsPeap_}if(outer==="EAP-TTLS"){return this.eapInnerItemsTtls_}return[]},setError_(error){this.error=error||""},getManagedSecurity_(managedProperties){const policySource=OncMojo.getEnforcedPolicySourceFromOncSource(managedProperties.source);if(policySource===PolicySource.kNone){return undefined}switch(managedProperties.type){case NetworkType.kWiFi:return{activeValue:OncMojo.getSecurityTypeString(managedProperties.typeProperties.wifi.security),policySource:policySource};case NetworkType.kEthernet:return{activeValue:OncMojo.getActiveString(managedProperties.typeProperties.ethernet.authentication),policySource:policySource}}return undefined},getManagedVpnSaveCredentials_(managedProperties){const vpn=managedProperties.typeProperties.vpn;switch(vpn.type){case VpnType.kIKEv2:return vpn.ipSec.saveCredentials||OncMojo.createManagedBool(false);case VpnType.kOpenVPN:return vpn.openVpn.saveCredentials||OncMojo.createManagedBool(false);case VpnType.kL2TPIPsec:return vpn.ipSec.saveCredentials||vpn.l2tp.saveCredentials||OncMojo.createManagedBool(false);case VpnType.kWireGuard:return OncMojo.createManagedBool(true)}assertNotReached$1();return undefined},getManagedVpnServerCaRefs_(managedProperties){const vpn=managedProperties.typeProperties.vpn;switch(vpn.type){case VpnType.kOpenVPN:return vpn.openVpn.serverCaRefs;case VpnType.kIKEv2:case VpnType.kL2TPIPsec:return vpn.ipSec.serverCaRefs}assertNotReached$1();return undefined},getManagedVpnClientCertType_(managedProperties){const vpn=managedProperties.typeProperties.vpn;switch(vpn.type){case VpnType.kOpenVPN:return vpn.openVpn.clientCertType||OncMojo.createManagedString("");case VpnType.kIKEv2:case VpnType.kL2TPIPsec:return vpn.ipSec.clientCertType||OncMojo.createManagedString("")}assertNotReached$1();return undefined},onWifiPasswordInputKeypress_(){if(this.error==="bad-passphrase"){this.setError_("")}},eapConfigServerCaCertAllowed_(){if(loadTimeData$1.getBoolean("eapDefaultCasWithoutSubjectVerificationAllowed")){return true}const outer=this.eapProperties_.outer;if(!(outer==="EAP-TLS"||outer==="EAP-TTLS"||outer==="PEAP")){return true}if(this.selectedServerCaHash_!==DEFAULT_HASH){return true}const isPropertyManaged=!!this.managedEapProperties_&&!!this.managedEapProperties_.useSystemCas&&this.managedEapProperties_.useSystemCas.policySource!==PolicySource.kNone;if(isPropertyManaged){return true}if(this.eapProperties_.domainSuffixMatch.length!=0||this.eapProperties_.subjectAltNameMatch.length!=0){return true}return false}});function getTemplate$R(){return html`<!--_html_template_start_--><style include="internet-shared iron-flex">cr-dialog::part(dialog){width:460px}.error{color:var(--cros-text-color-alert);font-weight:500}</style>

<cr-dialog id="dialog" close-text="$i18n{close}">
  <div slot="title">[[getDialogTitle_(name, type, showConnect)]]</div>
  <div slot="body">
    <network-config id="networkConfig" class="flex" guid="[[guid]]" name="{{name}}" type="{{type}}" enable-connect="{{enableConnect_}}" enable-save="{{enableSave_}}" share-allow-enable="[[shareAllowEnable_]]" share-default="[[shareDefault_]]" error="{{error_}}" on-close="onClose_" connect-on-enter="[[showConnect]]" on-properties-set="onPropertiesSet_">
    </network-config>
  </div>

  <div class="layout horizontal center" slot="button-container">
    <template is="dom-if" if="[[error_]]" restamp>
      <div class="flex error">[[getError_(error_)]]</div>
    </template>
    <cr-button class="cancel-button" on-click="onCancelClick_">
      $i18n{cancel}
    </cr-button>
    <template is="dom-if" if="[[!showConnect]]">
      <cr-button id="saveButton" class="action-button" on-click="onSaveClick_" disabled="[[!enableSave_]]">
        $i18n{save}
      </cr-button>
    </template>
    <template is="dom-if" if="[[showConnect]]">
      <cr-button id="connectButton" class="action-button" on-click="onConnectClick_" disabled="[[!enableConnect_]]">
        $i18n{networkButtonConnect}
      </cr-button>
    </template>
  </div>

</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const InternetConfigElementBase=I18nMixin(PolymerElement);class InternetConfigElement extends InternetConfigElementBase{static get is(){return"internet-config"}static get template(){return getTemplate$R()}static get properties(){return{shareAllowEnable_:{type:Boolean,value(){return loadTimeData.getBoolean("shareNetworkAllowEnable")}},shareDefault_:{type:Boolean,value(){return loadTimeData.getBoolean("shareNetworkDefault")}},guid:{type:String,value:""},type:String,name:String,showConnect:Boolean,enableConnect_:Boolean,enableSave_:Boolean,error_:{type:String,value:""}}}open(){const dialog=this.$.dialog;if(!dialog.open){dialog.showModal()}this.$.networkConfig.init()}close(){const dialog=this.$.dialog;if(dialog.open){dialog.close()}}onClose_(){this.close()}getDialogTitle_(){if(this.name&&!this.showConnect){return this.i18n("internetConfigName",htmlEscape(this.name))}const type=this.i18n("OncType"+this.type);return this.i18n("internetJoinType",type)}getError_(){if(this.i18nExists(this.error_)){return this.i18n(this.error_)}return this.i18n("networkErrorUnknown")}onCancelClick_(){this.close()}onSaveClick_(){this.$.networkConfig.save()}onConnectClick_(){this.$.networkConfig.connect()}onPropertiesSet_(){if(this.type===OncMojo.getNetworkTypeString(NetworkType.kWiFi)){recordSettingChange(Setting.kWifiAddNetwork,{stringValue:this.guid})}else{recordSettingChange()}}}customElements.define(InternetConfigElement.is,InternetConfigElement);function getTemplate$Q(){return html`<!--_html_template_start_--><style include="cr-shared-style settings-shared iron-flex">cr-action-menu.dropdown-item{min-height:36px}cr-action-menu hr{border:none;border-top:var(--cr-separator-line);margin:6px 0 0 0}</style>
<template is="dom-if" if="[[shouldShowDotsMenuButton_(eSimNetworkState_, isGuest_)]]" restamp>
  <cr-icon-button class="icon-more-vert" title="$i18n{moreActions}" id="moreNetworkDetail" on-click="onDotsClick_" disabled="[[isDotsMenuButtonDisabled_(eSimNetworkState_, deviceState.*)]]">
  </cr-icon-button>
</template>
<cr-lazy-render id="menu">
  <template>
    <cr-action-menu role-description="$i18n{menu}">
      <button class="dropdown-item" id="renameBtn" on-click="onRenameEsimProfileClick_" role="menuitem">
        $i18n{networkDetailMenuRenameESim}
      </button>
      <hr>
      <button class="dropdown-item" on-click="onRemoveEsimProfileClick_" role="menuitem" id="removeBtn">
        $i18n{networkDetailMenuRemoveESim}
      </button>
    </cr-action-menu>
  </template>
</cr-lazy-render>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsInternetDetailMenuElementBase=ESimManagerListenerMixin(DeepLinkingMixin(RouteObserverMixin(PolymerElement)));class SettingsInternetDetailMenuElement extends SettingsInternetDetailMenuElementBase{static get is(){return"settings-internet-detail-menu"}static get template(){return getTemplate$Q()}static get properties(){return{deviceState:Object,eSimNetworkState_:{type:Object,value:null},isGuest_:{type:Boolean,value(){return loadTimeData.getBoolean("isGuest")}},guid_:{type:String,value:""},supportedSettingIds:{type:Object,value:()=>new Set([Setting.kCellularRenameESimNetwork,Setting.kCellularRemoveESimNetwork])}}}beforeDeepLinkAttempt(settingId){afterNextRender(this,(()=>{const menu=this.$.menu.get();const menuTarget=castExists(this.shadowRoot.getElementById("moreNetworkDetail"));menu.showAt(menuTarget);afterNextRender(this,(()=>{let element=null;if(settingId===Setting.kCellularRenameESimNetwork){element=this.shadowRoot.getElementById("renameBtn")}else{element=this.shadowRoot.getElementById("removeBtn")}if(!element){console.warn("Deep link element could not be found");return}this.showDeepLinkElement(element);return}))}));return false}currentRouteChanged(route){this.eSimNetworkState_=null;this.guid_="";if(route!==routes.NETWORK_DETAIL){return}const queryParams=Router.getInstance().getQueryParameters();const guid=queryParams.get("guid")||"";if(!guid){console.error("No guid specified for page:"+route);return}this.guid_=guid;this.setEsimNetworkState_();this.attemptDeepLink()}onProfileChanged(){this.setEsimNetworkState_()}async setEsimNetworkState_(){const networkConfig=MojoInterfaceProviderImpl.getInstance().getMojoServiceRemote();const response=await networkConfig.getNetworkState(this.guid_);if(!response.result||response.result.type!==NetworkType.kCellular||!response.result.typeState.cellular.eid||!response.result.typeState.cellular.iccid){this.eSimNetworkState_=null;return}this.eSimNetworkState_=response.result}onDotsClick_(e){const menu=this.$.menu.get();menu.showAt(e.target)}shouldShowDotsMenuButton_(){if(this.isGuest_){return false}return!!this.eSimNetworkState_}isDotsMenuButtonDisabled_(){if(this.eSimNetworkState_&&this.eSimNetworkState_.source===OncSource.kDevicePolicy){return true}if(!this.deviceState){return false}return OncMojo.deviceIsInhibited(this.deviceState)}onRenameEsimProfileClick_(){this.closeMenu_();const event=new CustomEvent("show-esim-profile-rename-dialog",{bubbles:true,composed:true,detail:{networkState:this.eSimNetworkState_}});this.dispatchEvent(event)}onRemoveEsimProfileClick_(){this.closeMenu_();const event=new CustomEvent("show-esim-remove-profile-dialog",{bubbles:true,composed:true,detail:{networkState:this.eSimNetworkState_}});this.dispatchEvent(event)}closeMenu_(){const actionMenu=castExists(this.shadowRoot.querySelector("cr-action-menu"));actionMenu.close()}}customElements.define(SettingsInternetDetailMenuElement.is,SettingsInternetDetailMenuElement);function getTemplate$P(){return html`<!--_html_template_start_--><style include="internet-shared iron-flex">.settings-box{border-top:var(--network-summary-item-border-top,var(--cr-separator-line))}#hotspotPageTitle{padding-inline-start:0}</style>

<div class="settings-box two-line no-padding">
  <div id="hotspotSummaryItemRow" actionable$="[[shouldShowArrowButton_(hotspotInfo.allowStatus)]]" on-click="navigateToDetailPage_" class="flex layout horizontal center link-wrapper">
      <network-icon id="hotspotIcon" hotspot-info="[[hotspotInfo]]">
      </network-icon>

    <div id="hotspotPageTitle" class="middle settings-box-text">
      $i18n{hotspotPageTitle}
      <div class="secondary" id="hotspotStateSublabel" hidden="[[shouldHideHotspotStateSublabel_(
              hotspotInfo.allowStatus, hotspotInfo.state)]]">
        [[getHotspotStateSublabel_(hotspotInfo.state)]]
      </div>
      <localized-link class="secondary" id="hotspotDisabledSublabelLink" hidden="[[!shouldHideHotspotStateSublabel_(
              hotspotInfo.allowStatus, hotspotInfo.state)]]" localized-string="[[getHotspotDisabledSublabelLink_(
              hotspotInfo.allowStatus)]]">
      </localized-link>
    </div>

    <template is="dom-if" if="[[shouldShowPolicyIndicator_(
        hotspotInfo.allowStatus)]]" restamp>
      <cr-policy-indicator id="policyIndicator" indicator-type="[[getPolicyIndicatorType_()]]">
      </cr-policy-indicator>
    </template>

    <template is="dom-if" if="[[shouldShowArrowButton_(
        hotspotInfo.allowStatus, hotspotInfo.state)]]" restamp>
      <cr-icon-button id="hotspotSummaryItemRowArrowIcon" class="subpage-arrow layout end" aria-label="$i18n{hotspotPageTitle}" aria-description$="[[getHotspotStateSublabel_(hotspotInfo.state)]]" aria-roledescription="$i18n{subpageArrowRoleDescription}" on-click="navigateToDetailPage_">
      </cr-icon-button>
    </template>
  </div>

  <div class="separator"></div>
  <cr-toggle id="enableHotspotToggle" class="margin-matches-padding" checked="{{isHotspotToggleOn_}}" disabled$="[[isToggleDisabled_(hotspotInfo.allowStatus,
          hotspotInfo.state)]]" on-change="onHotspotToggleChange_" aria-label="$i18n{hotspotToggleA11yLabel}">
  </cr-toggle>
</div>
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const HotspotSummaryItemElementBase=mixinBehaviors([CrPolicyNetworkBehaviorMojo],I18nMixin(PolymerElement));class HotspotSummaryItemElement extends HotspotSummaryItemElementBase{static get is(){return"hotspot-summary-item"}static get template(){return getTemplate$P()}static get properties(){return{hotspotInfo:{type:Object,observer:"onHotspotInfoChanged_"},isHotspotToggleOn_:{type:Boolean,value:false}}}onHotspotInfoChanged_(newValue,_oldValue){this.isHotspotToggleOn_=newValue.state===HotspotState.kEnabled||newValue.state===HotspotState.kEnabling}navigateToDetailPage_(){if(!this.shouldShowArrowButton_()){return}Router.getInstance().navigateTo(routes.HOTSPOT_DETAIL)}getHotspotStateSublabel_(){if(this.hotspotInfo.state===HotspotState.kEnabling){return this.i18n("hotspotSummaryStateTurningOn")}if(this.hotspotInfo.state===HotspotState.kEnabled){return this.i18n("hotspotSummaryStateOn")}if(this.hotspotInfo.state===HotspotState.kDisabling){return this.i18n("hotspotSummaryStateTurningOff")}return this.i18n("hotspotSummaryStateOff")}shouldHideHotspotStateSublabel_(){if(this.hotspotInfo.state===HotspotState.kEnabling||this.hotspotInfo.state===HotspotState.kEnabled){return false}return this.hotspotInfo.allowStatus===HotspotAllowStatus.kDisallowedReadinessCheckFail||this.hotspotInfo.allowStatus===HotspotAllowStatus.kDisallowedNoMobileData}getHotspotDisabledSublabelLink_(allowStatus){if(allowStatus===HotspotAllowStatus.kDisallowedNoMobileData){return this.i18nAdvanced("hotspotNoMobileDataSublabelWithLink").toString()}if(allowStatus===HotspotAllowStatus.kDisallowedReadinessCheckFail){return this.i18nAdvanced("hotspotMobileDataNotSupportedSublabelWithLink").toString()}return""}setHotspotEnabledState_(enabled){if(enabled){getHotspotConfig().enableHotspot();return}getHotspotConfig().disableHotspot()}isToggleDisabled_(){if(this.hotspotInfo.state===HotspotState.kDisabling){return true}if(this.hotspotInfo.state===HotspotState.kEnabling||this.hotspotInfo.state===HotspotState.kEnabled){return false}return this.hotspotInfo.allowStatus!==HotspotAllowStatus.kAllowed}shouldShowArrowButton_(){return this.hotspotInfo.allowStatus===HotspotAllowStatus.kAllowed||this.hotspotInfo.state===HotspotState.kEnabling||this.hotspotInfo.state===HotspotState.kEnabled}getIconClass_(isHotspotToggleOn){if(isHotspotToggleOn){return"os-settings:hotspot-enabled"}return"os-settings:hotspot-disabled"}shouldShowPolicyIndicator_(allowStatus){return allowStatus===HotspotAllowStatus.kDisallowedByPolicy}getPolicyIndicatorType_(){return this.getIndicatorTypeForSource(OncSource.kDevicePolicy)}onHotspotToggleChange_(){this.setHotspotEnabledState_(this.isHotspotToggleOn_);getInstance().announce(this.isHotspotToggleOn_?this.i18n("hotspotEnabledA11yLabel"):this.i18n("hotspotDisabledA11yLabel"))}}customElements.define(HotspotSummaryItemElement.is,HotspotSummaryItemElement);function getTemplate$O(){return html`<!--_html_template_start_--><style include="internet-shared iron-flex">.settings-box{border-top:var(--network-summary-item-border-top,var(--cr-separator-line))}#outerBox{padding:0 var(--cr-section-padding)}#details{align-items:center;display:flex;flex:auto}.network-state{color:var(--cr-secondary-text-color);font-size:inherit}.warning-message{color:var(--cros-text-color-warning);font-size:inherit}:host-context(body.revamp-wayfinding-enabled) network-icon{padding-inline-end:16px;padding-inline-start:0;--network-icon-fill-color:var(--cros-sys-primary)}</style>
<div class="settings-box two-line no-padding">
  <div id="networkSummaryItemRow" actionable$="[[isItemActionable_(activeNetworkState,
                        deviceState, networkStateList)]]" class="flex layout horizontal center link-wrapper" on-click="onShowDetailsClick_">
    <div id="details" aria-hidden="true">
      <network-icon id="networkIcon" show-technology-badge="[[showTechnologyBadge_]]" network-state="[[activeNetworkState]]" device-state="[[deviceState]]">
      </network-icon>
      <div class="flex settings-box-text">
        <div id="networkTitleText">
          [[getTitleText_(activeNetworkState, deviceState)]]
        </div>
        <div id="networkState" class$="[[getNetworkStateClass_(activeNetworkState)]]">
          [[getNetworkStateText_(activeNetworkState, deviceState.*)]]
        </div>
      </div>
    </div>

    <template is="dom-if" if="[[showPolicyIndicator_(activeNetworkState)]]">
      <cr-policy-indicator id="policyIndicator" icon-aria-label="[[getTitleText_(activeNetworkState, deviceState)]]" indicator-type="[[getPolicyIndicatorType_(activeNetworkState)]]" on-click="doNothing_">
      </cr-policy-indicator>
    </template>

    <template is="dom-if" if="[[showArrowButton_(activeNetworkState,
                                  deviceState, networkStateList)]]">
      <cr-icon-button id="networkSummaryItemRowArrowIcon" class="subpage-arrow" aria-labelledby="networkTitleText" aria-describedby="networkState networkIcon" aria-roledescription="$i18n{subpageArrowRoleDescription}" on-click="onShowDetailsArrowClick_">
      </cr-icon-button>
    </template>
  </div>

  <template is="dom-if" if="[[enableToggleIsVisible_(deviceState)]]">
    <div class="separator"></div>
    <cr-toggle id="deviceEnabledButton" class="margin-matches-padding" aria-label$="[[getToggleA11yString_(deviceState)]]" aria-describedby$="[[getToggleA11yDescribedBy_(deviceState)]]" checked="[[deviceIsEnabledOrEnabling_(deviceState)]]" disabled="[[!enableToggleIsEnabled_(deviceState)]]" on-change="onDeviceEnabledChange_">
    </cr-toggle>
  </template>
</div>
<!--_html_template_end_-->`}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const NetworkSummaryItemElementBase=mixinBehaviors([CrPolicyNetworkBehaviorMojo],I18nMixin(PolymerElement));class NetworkSummaryItemElement extends NetworkSummaryItemElementBase{static get is(){return"network-summary-item"}static get template(){return getTemplate$O()}static get properties(){return{deviceState:{type:Object,notify:true},tetherDeviceState:Object,activeNetworkState:Object,networkStateList:{type:Array,value(){return[]}},networkTitleText:String,showTechnologyBadge_:{type:Boolean,value(){return loadTimeData.valueExists("showTechnologyBadge")&&loadTimeData.getBoolean("showTechnologyBadge")}},globalPolicy:Object}}constructor(){super();this.browserProxy_=InternetPageBrowserProxyImpl.getInstance()}getDeviceEnabledToggle(){return this.shadowRoot.querySelector("#deviceEnabledButton")}getNetworkStateText_(){if(OncMojo.deviceIsInhibited(this.deviceState)){return this.i18n("internetDeviceBusy")}if(this.isPortalState_(this.activeNetworkState.portalState)){return this.i18n("networkListItemSignIn")}const stateText=this.getConnectionStateText_(this.activeNetworkState);if(stateText){return stateText}const deviceState=this.deviceState;if(deviceState){if(deviceState.type===NetworkType.kTether){if(deviceState.deviceState===DeviceStateType.kUninitialized){return this.i18n("tetherEnableBluetooth")}}if(deviceState.deviceState===DeviceStateType.kEnabled){return this.networkStateList.length>0?this.i18n("networkListItemNotConnected"):this.i18n("networkListItemNoNetwork")}if(deviceState.deviceState===DeviceStateType.kEnabling){return this.i18n("networkDeviceTurningOn")}}return this.i18n("deviceOff")}getConnectionStateText_(networkState){if(!networkState||!networkState.guid){return""}const connectionState=networkState.connectionState;const name=OncMojo.getNetworkStateDisplayNameUnsafe(networkState);if(OncMojo.connectionStateIsConnected(connectionState)){return networkState.type===NetworkType.kEthernet?this.i18n("networkListItemConnected"):name}if(connectionState===ConnectionStateType.kConnecting){return name?loadTimeData.getStringF("networkListItemConnectingTo",name):this.i18n("networkListItemConnecting")}return this.i18n("networkListItemNotConnected")}showPolicyIndicator_(activeNetworkState){return activeNetworkState!==undefined&&OncMojo.connectionStateIsConnected(activeNetworkState.connectionState)||this.isPolicySource(activeNetworkState.source)||this.isProhibitedVpn_()}getPolicyIndicatorType_(activeNetworkState){if(this.isProhibitedVpn_()){return this.getIndicatorTypeForSource(OncSource.kDevicePolicy)}return this.getIndicatorTypeForSource(activeNetworkState.source)}getNetworkStateClass_(activeNetworkState){if(this.isPortalState_(activeNetworkState.portalState)){return"warning-message"}return"network-state"}deviceIsEnabled_(deviceState){return!!deviceState&&(deviceState.type===NetworkType.kVPN||deviceState.deviceState===DeviceStateType.kEnabled||OncMojo.deviceIsInhibited(deviceState))}deviceIsEnabling_(deviceState){return!!deviceState&&deviceState.deviceState===DeviceStateType.kEnabling}deviceIsEnabledOrEnabling_(deviceState){return this.deviceIsEnabled_(deviceState)||this.deviceIsEnabling_(deviceState)}enableToggleIsVisible_(deviceState){if(!deviceState){return false}switch(deviceState.type){case NetworkType.kEthernet:case NetworkType.kVPN:return false;case NetworkType.kTether:return!this.isInstantHotspotRebrandEnabled_();case NetworkType.kWiFi:case NetworkType.kCellular:return deviceState.deviceState!==DeviceStateType.kUninitialized}assertNotReached()}enableToggleIsEnabled_(deviceState){return this.enableToggleIsVisible_(deviceState)&&deviceState.deviceState!==DeviceStateType.kProhibited&&!OncMojo.deviceIsInhibited(deviceState)&&!OncMojo.deviceStateIsIntermediate(deviceState.deviceState)}getToggleA11yString_(deviceState){if(!this.enableToggleIsVisible_(deviceState)){return""}switch(deviceState.type){case NetworkType.kTether:return this.i18n("internetToggleTetherA11yLabel");case NetworkType.kCellular:return this.i18n("internetToggleMobileA11yLabel");case NetworkType.kWiFi:return this.i18n("internetToggleWiFiA11yLabel")}assertNotReached()}getToggleA11yDescribedBy_(deviceState){if(this.enableToggleIsVisible_(deviceState)&&deviceState.type===NetworkType.kTether&&deviceState.deviceState===DeviceStateType.kUninitialized){return"networkState"}return""}isInstantHotspotRebrandEnabled_(){return loadTimeData.valueExists("isInstantHotspotRebrandEnabled")&&loadTimeData.getBoolean("isInstantHotspotRebrandEnabled")}isProhibitedVpn_(){return!!this.deviceState&&this.deviceState.type===NetworkType.kVPN&&this.builtInVpnProhibited_(this.deviceState)}isBuiltInVpnType_(vpnType){return vpnType===VpnType.kL2TPIPsec||vpnType===VpnType.kOpenVPN}hasNonBuiltInVpn_(networkStateList){const nonBuiltInVpnIndex=networkStateList.findIndex((networkState=>!this.isBuiltInVpnType_(networkState.typeState.vpn.type)));return nonBuiltInVpnIndex!==-1}builtInVpnProhibited_(deviceState){return!!deviceState&&deviceState.deviceState===DeviceStateType.kProhibited}anyVpnExists_(deviceState,networkStateList){return this.hasNonBuiltInVpn_(networkStateList)||!this.builtInVpnProhibited_(deviceState)&&networkStateList.length>0}shouldShowDetails_(activeNetworkState,deviceState,networkStateList){if(!!deviceState&&deviceState.type===NetworkType.kVPN){return this.anyVpnExists_(deviceState,networkStateList)}return this.deviceIsEnabled_(deviceState)&&(!!activeNetworkState.guid||networkStateList.length>0)}shouldShowSubpage_(deviceState,networkStateList){if(!deviceState){return false}const type=deviceState.type;if(type===NetworkType.kTether||type===NetworkType.kCellular&&this.tetherDeviceState){return true}if(type===NetworkType.kCellular){if(OncMojo.deviceIsInhibited(deviceState)){return true}const{pSimSlots:pSimSlots,eSimSlots:eSimSlots}=getSimSlotCount(deviceState);if(eSimSlots>0||pSimSlots>0){return true}}if(type===NetworkType.kVPN){return this.anyVpnExists_(deviceState,networkStateList)}let minlen;if(type===NetworkType.kWiFi){minlen=0}else{minlen=2}return networkStateList.length>=minlen}onShowDetailsClick_(event){if(!this.deviceIsEnabled_(this.deviceState)){if(this.enableToggleIsEnabled_(this.deviceState)){const type=this.deviceState.type;const deviceEnabledToggledEvent=new CustomEvent("device-enabled-toggled",{bubbles:true,composed:true,detail:{enabled:true,type:type}});this.dispatchEvent(deviceEnabledToggledEvent)}}else if(this.isPortalState_(this.activeNetworkState.portalState)){this.browserProxy_.showPortalSignin(this.activeNetworkState.guid)}else if(this.shouldShowSubpage_(this.deviceState,this.networkStateList)){const showNetworksEvent=new CustomEvent("show-networks",{bubbles:true,composed:true,detail:this.deviceState.type});this.dispatchEvent(showNetworksEvent)}else if(this.shouldShowDetails_(this.activeNetworkState,this.deviceState,this.networkStateList)){if(this.activeNetworkState.guid){const showDetailEvent=new CustomEvent("show-detail",{bubbles:true,composed:true,detail:this.activeNetworkState});this.dispatchEvent(showDetailEvent)}else if(this.networkStateList.length>0){const showDetailEvent=new CustomEvent("show-detail",{bubbles:true,composed:true,detail:this.networkStateList[0]});this.dispatchEvent(showDetailEvent)}}event.stopPropagation()}onShowDetailsArrowClick_(event){if(this.shouldShowSubpage_(this.deviceState,this.networkStateList)){const showNetworksEvent=new CustomEvent("show-networks",{bubbles:true,composed:true,detail:this.deviceState.type});this.dispatchEvent(showNetworksEvent)}else if(this.shouldShowDetails_(this.activeNetworkState,this.deviceState,this.networkStateList)){if(this.activeNetworkState.guid){const showDetailEvent=new CustomEvent("show-detail",{bubbles:true,composed:true,detail:this.activeNetworkState});this.dispatchEvent(showDetailEvent)}else if(this.networkStateList.length>0){const showDetailEvent=new CustomEvent("show-detail",{bubbles:true,composed:true,detail:this.networkStateList[0]});this.dispatchEvent(showDetailEvent)}}event.stopPropagation()}isItemActionable_(activeNetworkState,deviceState,networkStateList){if(!this.deviceIsEnabled_(this.deviceState)){return this.enableToggleIsEnabled_(this.deviceState)}if(this.isPortalState_(this.activeNetworkState.portalState)){return true}return this.shouldShowSubpage_(this.deviceState,this.networkStateList)||this.shouldShowDetails_(activeNetworkState,deviceState,networkStateList)}showArrowButton_(activeNetworkState,deviceState,networkStateList){if(!this.deviceIsEnabled_(deviceState)){return false}return this.shouldShowSubpage_(deviceState,networkStateList)||this.shouldShowDetails_(activeNetworkState,deviceState,networkStateList)}onDeviceEnabledChange_(){assert(this.deviceState);const deviceIsEnabled=this.deviceIsEnabled_(this.deviceState);const deviceEnabledToggledEvent=new CustomEvent("device-enabled-toggled",{bubbles:true,composed:true,detail:{enabled:!deviceIsEnabled,type:this.deviceState.type}});this.dispatchEvent(deviceEnabledToggledEvent);this.deviceState.deviceState=deviceIsEnabled?DeviceStateType.kDisabling:DeviceStateType.kEnabling}getTitleText_(){if(this.networkTitleText){return this.networkTitleText}if(this.isPortalState_(this.activeNetworkState.portalState)){const stateText=this.getConnectionStateText_(this.activeNetworkState);if(stateText){return stateText}}return this.getNetworkTypeString_(this.activeNetworkState.type)}doNothing_(event){event.stopPropagation()}getNetworkTypeString_(type){if(type===NetworkType.kCellular||type===NetworkType.kTether&&!this.isInstantHotspotRebrandEnabled_()){type=NetworkType.kMobile}return this.i18n("OncType"+OncMojo.getNetworkTypeString(type))}isPortalState_(portalState){return portalState===PortalState.kPortal||portalState===PortalState.kProxyAuthRequired}}customElements.define(NetworkSummaryItemElement.is,NetworkSummaryItemElement);function getTemplate$N(){return html`<!--_html_template_start_--><style>network-summary-item:first-child{--network-summary-item-border-top:0}</style>
<div id="summary">
  <template is="dom-repeat" items="[[activeNetworkStates_]]">
    <network-summary-item id="[[getTypeString_(item)]]" active-network-state="[[item]]" device-state="[[get(item.type, deviceStates)]]" global-policy="[[globalPolicy_]]" network-state-list="[[get(item.type, networkStateLists_)]]" tether-device-state="[[getTetherDeviceState_(deviceStates)]]">
    </network-summary-item>
  </template>
  <template is="dom-if" if="[[shouldShowHotspotSummary_(
      isHotspotFeatureEnabled_, hotspotInfo, hotspotInfo.allowStatus)]]">
    <hotspot-summary-item hotspot-info="[[hotspotInfo]]">
    </hotspot-summary-item>
  </template>
</div>
<!--_html_template_end_-->`}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const NetworkSummaryElementBase=mixinBehaviors([NetworkListenerBehavior],PolymerElement);class NetworkSummaryElement extends NetworkSummaryElementBase{static get is(){return"network-summary"}static get template(){return getTemplate$N()}static get properties(){return{defaultNetwork:{type:Object,value:null,notify:true},deviceStates:{type:Object,value(){return{[NetworkType.kWiFi]:{deviceState:DeviceStateType.kDisabled,type:NetworkType.kWiFi}}},notify:true},hotspotInfo:{type:Object,notify:true},activeNetworkStates_:{type:Array,value(){return[OncMojo.getDefaultNetworkState(NetworkType.kWiFi)]}},networkStateLists_:{type:Object,value(){return{[NetworkType.kWiFi]:[]}}},globalPolicy_:Object,isHotspotFeatureEnabled_:{type:Boolean,value(){return loadTimeData.valueExists("isHotspotEnabled")&&loadTimeData.getBoolean("isHotspotEnabled")}},isInstantHotspotRebrandEnabled_:{type:Boolean,value(){return loadTimeData.valueExists("isInstantHotspotRebrandEnabled")&&loadTimeData.getBoolean("isInstantHotspotRebrandEnabled")}}}}constructor(){super();this.activeNetworkIds_=null;this.networkConfig_=MojoInterfaceProviderImpl.getInstance().getMojoServiceRemote();if(this.isHotspotFeatureEnabled_){this.crosHotspotConfig_=getHotspotConfig();this.crosHotspotConfigObserverReceiver_=new CrosHotspotConfigObserverReceiver(this)}}ready(){super.ready();if(this.isHotspotFeatureEnabled_){this.crosHotspotConfig_.addObserver(this.crosHotspotConfigObserverReceiver_.$.bindNewPipeAndPassRemote())}}connectedCallback(){super.connectedCallback();this.getNetworkLists_();this.onPoliciesApplied("");if(this.isHotspotFeatureEnabled_){this.onHotspotInfoChanged()}}async onHotspotInfoChanged(){const response=await this.crosHotspotConfig_.getHotspotInfo();this.hotspotInfo=response.hotspotInfo}async onPoliciesApplied(_userhash){const response=await this.networkConfig_.getGlobalPolicy();this.globalPolicy_=response.result}onActiveNetworksChanged(networks){if(!this.activeNetworkIds_){return}networks.forEach((network=>{const index=this.activeNetworkStates_.findIndex((state=>state.guid===network.guid));if(index!==-1){this.set(["activeNetworkStates_",index],network)}}))}onNetworkStateListChanged(){this.getNetworkLists_()}onDeviceStateListChanged(){this.getNetworkLists_()}getNetworkRow(networkType){const networkTypeString=OncMojo.getNetworkTypeString(networkType);return this.shadowRoot.querySelector(`#${networkTypeString}`)}async getNetworkLists_(){const response=await this.networkConfig_.getDeviceStateList();this.getNetworkStates_(response.result)}async getNetworkStates_(deviceStateList){const filter={filter:FilterType.kVisible,limit:NO_LIMIT,networkType:NetworkType.kAll};const response=await this.networkConfig_.getNetworkStateList(filter);this.updateNetworkStates_(response.result,deviceStateList)}updateNetworkStates_(networkStates,deviceStateList){const newDeviceStates={};for(const device of deviceStateList){newDeviceStates[device.type]=device}const orderedNetworkTypes=[NetworkType.kEthernet,NetworkType.kWiFi,NetworkType.kCellular,NetworkType.kTether,NetworkType.kVPN];const activeNetworkStatesByType=new Map;const newNetworkStateLists={};for(const type of orderedNetworkTypes){newNetworkStateLists[type]=[]}let firstConnectedNetwork=null;networkStates.forEach((networkState=>{const type=networkState.type;if(!activeNetworkStatesByType.has(type)){activeNetworkStatesByType.set(type,networkState);if(!firstConnectedNetwork&&networkState.type!==NetworkType.kVPN&&OncMojo.connectionStateIsConnected(networkState.connectionState)){firstConnectedNetwork=networkState}}newNetworkStateLists[type].push(networkState)}),this);this.defaultNetwork=firstConnectedNetwork;const newActiveNetworkStates=[];this.activeNetworkIds_=new Set;for(const type of orderedNetworkTypes){const device=newDeviceStates[type];if(!device){continue}if(device.type===NetworkType.kVPN&&!activeNetworkStatesByType.has(device.type)){continue}if(type===NetworkType.kTether&&newDeviceStates[NetworkType.kCellular]&&!this.isInstantHotspotRebrandEnabled_){newNetworkStateLists[NetworkType.kCellular]=newNetworkStateLists[NetworkType.kCellular].concat(newNetworkStateLists[NetworkType.kTether]);continue}const networkState=castExists(this.getActiveStateForType_(activeNetworkStatesByType,type));if(networkState.source===OncSource.kNone&&device.deviceState===DeviceStateType.kProhibited){networkState.source=OncSource.kDevicePolicy}newActiveNetworkStates.push(networkState);this.activeNetworkIds_.add(networkState.guid)}this.deviceStates=newDeviceStates;this.networkStateLists_=newNetworkStateLists;this.activeNetworkStates_=newActiveNetworkStates;const activeNetworksUpdatedEvent=new CustomEvent("active-networks-updated",{bubbles:true,composed:true});this.dispatchEvent(activeNetworksUpdatedEvent)}getActiveStateForType_(activeStatesByType,type){let activeState=activeStatesByType.get(type);if(!activeState&&type===NetworkType.kCellular&&!this.isInstantHotspotRebrandEnabled_){activeState=activeStatesByType.get(NetworkType.kTether)}return activeState||OncMojo.getDefaultNetworkState(type)}getTypeString_(network){return OncMojo.getNetworkTypeString(network.type)}getTetherDeviceState_(deviceStates){return deviceStates[NetworkType.kTether]}shouldShowHotspotSummary_(){if(!this.isHotspotFeatureEnabled_||!this.hotspotInfo){return false}return this.hotspotInfo.allowStatus!==HotspotAllowStatus.kDisallowedNoCellularUpstream&&this.hotspotInfo.allowStatus!==HotspotAllowStatus.kDisallowedNoWiFiDownstream&&this.hotspotInfo.allowStatus!==HotspotAllowStatus.kDisallowedNoWiFiSecurityModes}}customElements.define(NetworkSummaryElement.is,NetworkSummaryElement);function getTemplate$M(){return html`<!--_html_template_start_--><style include="os-settings-icons settings-shared">iron-icon.policy{height:24px;margin-inline-end:12px;margin-inline-start:4px;width:24px}cr-toast iron-icon{--iron-icon-fill-color:var(--cros-toast-icon-color-warning);margin-inline-end:16px}#apnTooltip{--paper-tooltip-background:var(--cros-tooltip-background-color);--paper-tooltip-text-color:var(--cros-tooltip-label-color);text-align:center}#hotspotSubtitle{color:var(--cr-secondary-text-color);font-size:inherit;left:56px;padding-inline-end:210px;position:relative;top:-22px}</style>
<os-settings-animated-pages id="pages" section="[[section_]]">
  <div route-path="default">
    <settings-card header-text="$i18n{internetPageTitle}">
      <network-summary default-network="{{defaultNetwork}}" device-states="{{deviceStates}}" hotspot-info="{{hotspotInfo}}" on-active-networks-updated="attemptDeepLink">
      </network-summary>
      <template is="dom-if" if="[[allowAddConnection_(globalPolicy_,
          managedNetworkAvailable)]]">
        <cr-expand-button aria-label="$i18n{internetAddConnectionExpandA11yLabel}" class="settings-box two-line" expanded="{{addConnectionExpanded_}}" id="expandAddConnections">
          <span aria-hidden="true">
            $i18n{internetAddConnection}
          </span>
        </cr-expand-button>
        <template is="dom-if" if="[[addConnectionExpanded_]]">
          <div class="list-frame vertical-list">
            <template is="dom-if" if="[[shouldShowAddWiFiRow_(globalPolicy_,
                managedNetworkAvailable, deviceStates)]]">
              <div actionable class="list-item" on-click="onAddWiFiClick_">
                <div class="start settings-box-text" id="add-wifi-label" aria-hidden="true">
                  $i18n{internetAddWiFi}
                </div>
                <cr-icon-button class="icon-add-wifi" aria-labelledby="add-wifi-label"></cr-icon-button>
              </div>
            </template>
            <div actionable$="[[!disableVpnUi_]]" class="list-item" on-click="onAddVpnClick_">
              <div class="start settings-box-text" id="add-vpn-label" aria-hidden="true">
                $i18n{internetAddVPN}
              </div>
              <template is="dom-if" if="[[disableVpnUi_]]">
                <cr-policy-indicator id="vpnPolicyIndicator" icon-aria-label="$i18n{networkVpnBuiltin}" indicator-type="devicePolicy" on-click="doNothing_">
                </cr-policy-indicator>
              </template>
              <cr-icon-button id="add-vpn-button" class="icon-add-circle" aria-labelledby="add-vpn-label" disabled="[[disableVpnUi_]]">
              </cr-icon-button>
            </div>
            <template is="dom-repeat" items="[[vpnProviders_]]">
              <div actionable class="list-item" on-click="onAddThirdPartyVpnClick_">
                <div class="start settings-box-text">
                  [[getAddThirdPartyVpnLabel_(item)]]
                </div>
                <cr-icon-button class="icon-external" aria-label$="[[getAddThirdPartyVpnLabel_(item)]]">
                </cr-icon-button>
              </div>
            </template>
          </div>
        </template>
      </template>
      <template is="dom-if" if="[[!allowAddConnection_(globalPolicy_,
          managedNetworkAvailable)]]">
        <div class="settings-box">
          <iron-icon class="policy" icon="cr20:domain"></iron-icon>
          <div class="settings-box-text">
            $i18n{internetAddConnectionNotAllowed}
          </div>
        </div>
      </template>
    </settings-card>
  </div>

  <template is="dom-if" route-path="/networkDetail" restamp>
    <os-settings-subpage page-title="$i18n{internetDetailPageTitle}">
      <settings-internet-detail-menu slot="subpage-title-extra" device-state="[[getDeviceState_(subpageType_, deviceStates)]]">
      </settings-internet-detail-menu>
      <settings-internet-detail-subpage prefs="{{prefs}}" default-network="[[defaultNetwork]]" global-policy="[[globalPolicy_]]" managed-network-available="[[managedNetworkAvailable]]">
      </settings-internet-detail-subpage>
    </os-settings-subpage>
  </template>

  <template is="dom-if" route-path="/knownNetworks" restamp>
    <os-settings-subpage page-title="$i18n{internetKnownNetworksPageTitle}">
      <settings-internet-known-networks-subpage network-type="[[knownNetworksType_]]">
      </settings-internet-known-networks-subpage>
    </os-settings-subpage>
  </template>

  <template is="dom-if" route-path="/apn" restamp>
    <os-settings-subpage page-title="$i18n{internetApnPageTitle}">
      <div slot="subpage-title-extra">
        <div id="apnButtonTitle">
          <cr-button id="createCustomApnButton" on-click="onCreateCustomApnClicked_" class="cancel-button" deep-link-focus-id$="[[Setting.kCellularAddApn]]" disabled="[[isCreateCustomApnButtonDisabled_]]">
            <iron-icon icon="cr:add" slot="prefix-icon"></iron-icon>
            $i18n{apnPageAddNewApn}
          </cr-button>
        </div>
        
        <template is="dom-if" if="[[isCreateCustomApnButtonDisabled_]]" restamp>
          <paper-tooltip id="apnTooltip" for="apnButtonTitle">
            $i18n{customApnLimitReached}
          </paper-tooltip>
        </template>
      </div>
      <apn-subpage id="apnSubpage" is-num-custom-apns-limit-reached="{{isCreateCustomApnButtonDisabled_}}">
      </apn-subpage>
    </os-settings-subpage>
  </template>

  <template is="dom-if" route-path="/networks" restamp>
    <os-settings-subpage page-title="[[getNetworksPageTitle_(subpageType_)]]" show-spinner="[[showSpinner_]]" spinner-title="$i18n{networkScanningLabel}">
      <settings-internet-subpage-menu slot="subpage-title-extra" device-state="[[getDeviceState_(subpageType_, deviceStates)]]">
      </settings-internet-subpage-menu>
      <template is="dom-if" if="[[isProviderLocked_(subpageType_)]]">
        
        <div class="settings-box first">
          <div class="settings-box-text">
            <localized-link localized-string="[[i18nAdvanced('cellularSubpageSubtitle')]]">
            </localized-link>
          </div>
        </div>
      </template>
      <settings-internet-subpage default-network="[[defaultNetwork]]" device-state="[[getDeviceState_(subpageType_, deviceStates)]]" tether-device-state="[[getTetherDeviceState_(deviceStates)]]" global-policy="[[globalPolicy_]]" vpn-providers="[[vpnProviders_]]" show-spinner="{{showSpinner_}}" is-connected-to-non-cellular-network="[[isConnectedToNonCellularNetwork_]]" is-cellular-setup-active="[[showCellularSetupDialog_]]">
      </settings-internet-subpage>
    </os-settings-subpage>
  </template>

  <template is="dom-if" route-path="/hotspotDetail" restamp>
    <os-settings-subpage id="hotspotSubpage" page-title="$i18n{hotspotPageTitle}" show-spinner="[[showHotspotSpinner_(hotspotInfo.state)]]">
      <div id="hotspotSubtitle">
        <localized-link localized-string="[[i18nAdvanced('hotspotSubpageSubtitle')]]">
        </localized-link>
      </div>
      <settings-hotspot-subpage hotspot-info="[[hotspotInfo]]">
      </settings-hotspot-subpage>
    </os-settings-subpage>
  </template>

  <template is="dom-if" route-path="/passpointDetail" restamp>
    <os-settings-subpage page-title="[[getPasspointSubscriptionName_(passpointSubscription_)]]">
      <settings-passpoint-subpage>
      </settings-passpoint-subpage>
    </os-settings-subpage>
  </template>

</os-settings-animated-pages>

<template is="dom-if" if="[[showInternetConfig_]]" restamp>
  <internet-config id="configDialog" on-close="onInternetConfigClose_">
  </internet-config>
</template>

<template is="dom-if" if="[[showCellularSetupDialog_]]" restamp>
  <os-settings-cellular-setup-dialog id="cellularSetupDialog" on-close="onCloseCellularSetupDialog_" page-name="[[cellularSetupDialogPageName_]]">
  </os-settings-cellular-setup-dialog>
</template>

<template is="dom-if" if="[[showESimProfileRenameDialog_]]" restamp>
  <esim-rename-dialog id="esimRenameDialog" on-close="onCloseEsimProfileRenameDialog_" network-state="[[eSimNetworkState_]]" show-cellular-disconnect-warning="[[hasActiveCellularNetwork_]]">
  </esim-rename-dialog>
</template>

<template is="dom-if" if="[[showESimRemoveProfileDialog_]]" restamp>
  <esim-remove-profile-dialog id="esimRemoveProfileDialog" on-close="onCloseEsimRemoveProfileDialog_" on-show-error-toast="onShowErrorToast_" network-state="[[eSimNetworkState_]]" show-cellular-disconnect-warning="[[hasActiveCellularNetwork_]]">
  </esim-remove-profile-dialog>
</template>

<template is="dom-if" if="[[showSimLockDialog_]]" restamp>
  <sim-lock-dialogs global-policy="[[globalPolicy_]]" is-dialog-open="{{showSimLockDialog_}}" device-state="[[getDeviceState_(subpageType_, deviceStates)]]">
  </sim-lock-dialogs>
</template>

<template is="dom-if" if="[[showHotspotConfigDialog_]]" restamp>
  <hotspot-config-dialog id="hotspotConfigDialog" on-close="onCloseHotspotConfigDialog_" hotspot-info="[[hotspotInfo]]">
  </hotspot-config-dialog>
</template>

<cr-toast id="errorToast" duration="5000">
  <span id="errorToastMessage">[[errorToastMessage_]]</span>
</cr-toast>
<!--_html_template_end_-->`}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ESIM_PROFILE_LIMIT=5;const SettingsInternetPageElementBase=mixinBehaviors([NetworkListenerBehavior],DeepLinkingMixin(PrefsMixin(RouteOriginMixin(WebUiListenerMixin(I18nMixin(PolymerElement))))));class SettingsInternetPageElement extends SettingsInternetPageElementBase{static get is(){return"settings-internet-page"}static get template(){return getTemplate$M()}static get properties(){return{section_:{type:Number,value:Section$1.kNetwork,readOnly:true},deviceStates:{type:Object,notify:true,observer:"onDeviceStatesChanged_"},defaultNetwork:{type:Object,notify:true},hotspotInfo:{type:Object,notify:true},showSpinner_:Boolean,subpageType_:Number,knownNetworksType_:Number,addConnectionExpanded_:{type:Boolean,value:false},vpnIsProhibited_:{type:Boolean,value:false},disableVpnUi_:{type:Boolean,computed:"shouldDisableVpnUi_(vpnIsProhibited_,"+"prefs.vpn_config_allowed.*"+"prefs.arc.vpn.*,"+"prefs.arc.vpn.always_on.*)"},globalPolicy_:Object,managedNetworkAvailable:{type:Boolean,value:false},vpnProviders_:{type:Array,value(){return[]}},showInternetConfig_:{type:Boolean,value:false},isApnRevampEnabled_:{type:Boolean,value(){return loadTimeData.valueExists("isApnRevampEnabled")&&loadTimeData.getBoolean("isApnRevampEnabled")}},isCellularCarrierLockEnabled_:{type:Boolean,value(){return loadTimeData.valueExists("isCellularCarrierLockEnabled")&&loadTimeData.getBoolean("isCellularCarrierLockEnabled")}},isInstantHotspotRebrandEnabled_:{type:Boolean,value(){return loadTimeData.valueExists("isInstantHotspotRebrandEnabled")&&loadTimeData.getBoolean("isInstantHotspotRebrandEnabled")}},pendingShowCellularSetupDialogAttemptPageName_:{type:String,value:null},showCellularSetupDialog_:{type:Boolean,value:false},cellularSetupDialogPageName_:String,hasActiveCellularNetwork_:{type:Boolean,value:false},isConnectedToNonCellularNetwork_:{type:Boolean,value:false},showESimProfileRenameDialog_:{type:Boolean,value:false},showESimRemoveProfileDialog_:{type:Boolean,value:false},showHotspotConfigDialog_:{type:Boolean,value:false},pendingShowSimLockDialog_:{type:Boolean,value:false},showSimLockDialog_:{type:Boolean,value:false},eSimNetworkState_:{type:Object,value:""},supportedSettingIds:{type:Object,value:()=>new Set([Setting.kWifiOnOff,Setting.kMobileOnOff,Setting.kCellularAddApn])},errorToastMessage_:{type:String,value:""},isHotspotFeatureEnabled_:{type:Boolean,value(){return loadTimeData.valueExists("isHotspotEnabled")&&loadTimeData.getBoolean("isHotspotEnabled")}},isCreateCustomApnButtonDisabled_:{type:Boolean},passpointSubscription_:{type:Object,notify:true}}}constructor(){super();this.route=routes.INTERNET;this.detailType_=null;this.browserProxy_=InternetPageBrowserProxyImpl.getInstance();this.networkConfig_=MojoInterfaceProviderImpl.getInstance().getMojoServiceRemote()}ready(){super.ready();this.addEventListener("device-enabled-toggled",(event=>{this.onDeviceEnabledToggled_(event)}));this.addEventListener("network-connect",(event=>{this.onNetworkConnect_(event)}));this.addEventListener("show-cellular-setup",(event=>{this.onShowCellularSetupDialog_(event)}));this.addEventListener("show-config",(event=>{this.onShowConfig_(event)}));this.addEventListener("show-detail",(event=>{this.onShowDetail_(event)}));this.addEventListener("show-known-networks",(event=>{this.onShowKnownNetworks_(event)}));this.addEventListener("show-networks",(event=>{this.onShowNetworks_(event)}));this.addEventListener("show-esim-profile-rename-dialog",(event=>{this.onShowEsimProfileRenameDialog_(event)}));this.addEventListener("show-esim-remove-profile-dialog",(event=>{this.onShowEsimRemoveProfileDialog_(event)}));this.addEventListener("show-hotspot-config-dialog",(()=>{this.onShowHotspotConfigDialog_()}));this.addEventListener("show-passpoint-detail",(event=>{this.onShowPasspointDetails_(event)}));this.addEventListener("show-error-toast",(event=>{this.onShowErrorToast_(event)}));[routes.INTERNET_NETWORKS,routes.NETWORK_DETAIL,routes.KNOWN_NETWORKS,routes.HOTSPOT_DETAIL,routes.APN,routes.PASSPOINT_DETAIL].forEach((route=>{this.addFocusConfig(route,(()=>{if(this.detailType_!==null){const rowForDetailType=this.shadowRoot.querySelector("network-summary").getNetworkRow(this.detailType_);if(rowForDetailType){return rowForDetailType.shadowRoot.querySelector(".subpage-arrow")}}return null}))}))}connectedCallback(){super.connectedCallback();this.onPoliciesApplied("");this.onVpnProvidersChanged();this.onNetworkStateListChanged()}beforeDeepLinkAttempt(settingId){let networkType=null;if(settingId===Setting.kWifiOnOff){networkType=NetworkType.kWiFi}else if(settingId===Setting.kMobileOnOff){networkType=NetworkType.kCellular}else{return true}afterNextRender(this,(()=>{const networkRow=this.shadowRoot.querySelector("network-summary").getNetworkRow(networkType);if(networkRow){const toggleEl=networkRow.getDeviceEnabledToggle();if(toggleEl){this.showDeepLinkElement(toggleEl);return}}console.warn(`Element with deep link id ${settingId} not focusable.`)}));return false}currentRouteChanged(newRoute,oldRoute){super.currentRouteChanged(newRoute,oldRoute);if(newRoute===this.route||newRoute===routes.APN){this.attemptDeepLink()}else if(newRoute===routes.INTERNET_NETWORKS){const queryParams=Router.getInstance().getQueryParameters();const type=queryParams.get("type");if(type){this.subpageType_=OncMojo.getNetworkTypeFromString(type)}if(!oldRoute&&queryParams.get("showCellularSetup")==="true"){const pageName=queryParams.get("showPsimFlow")==="true"?CellularSetupPageName.PSIM_FLOW_UI:CellularSetupPageName.ESIM_FLOW_UI;this.pendingShowCellularSetupDialogAttemptPageName_=pageName}this.pendingShowSimLockDialog_=!oldRoute&&!!queryParams.get("showSimLockDialog")&&this.subpageType_===NetworkType.kCellular}else if(newRoute===routes.KNOWN_NETWORKS){const queryParams=Router.getInstance().getQueryParameters();const type=queryParams.get("type");if(type){this.knownNetworksType_=OncMojo.getNetworkTypeFromString(type)}else{this.knownNetworksType_=NetworkType.kWiFi}}}onNetworkStateListChanged(){hasActiveCellularNetwork().then((hasActive=>{this.hasActiveCellularNetwork_=hasActive}));this.updateIsConnectedToNonCellularNetwork_()}async onVpnProvidersChanged(){const response=await this.networkConfig_.getVpnProviders();const providers=response.providers;providers.sort(this.compareVpnProviders_);this.vpnProviders_=providers}async onPoliciesApplied(_userhash){const response=await this.networkConfig_.getGlobalPolicy();this.globalPolicy_=response.result}async updateIsConnectedToNonCellularNetwork_(){const isConnected=await isConnectedToNonCellularNetwork();this.isConnectedToNonCellularNetwork_=isConnected;return isConnected}onDeviceEnabledToggled_(event){this.networkConfig_.setNetworkTypeEnabledState(event.detail.type,event.detail.enabled);recordSettingChange()}onShowConfig_(event){const type=OncMojo.getNetworkTypeFromString(event.detail.type);if(!event.detail.guid){this.showConfig_(true,type)}else{this.showConfig_(false,type,event.detail.guid,event.detail.name)}}onShowCellularSetupDialog_(event){this.attemptShowCellularSetupDialog_(event.detail.pageName)}attemptShowCellularSetupDialog_(pageName){const cellularDeviceState=this.getDeviceState_(NetworkType.kCellular,this.deviceStates);if(!cellularDeviceState||cellularDeviceState.deviceState!==DeviceStateType.kEnabled){this.showErrorToast_(this.i18n("eSimMobileDataNotEnabledErrorToast"));return}if(pageName===CellularSetupPageName.PSIM_FLOW_UI){this.showCellularSetupDialog_=true;this.cellularSetupDialogPageName_=pageName}else{this.attemptShowEsimSetupDialog_()}}async attemptShowEsimSetupDialog_(){const numProfiles=await getNumESimProfiles();if(numProfiles>=ESIM_PROFILE_LIMIT){this.showErrorToast_(this.i18n("eSimProfileLimitReachedErrorToast",ESIM_PROFILE_LIMIT));return}const isConnected=await this.updateIsConnectedToNonCellularNetwork_();this.showCellularSetupDialog_=isConnected||loadTimeData.getBoolean("bypassConnectivityCheck");if(!this.showCellularSetupDialog_){this.showErrorToast_(this.i18n("eSimNoConnectionErrorToast"));return}this.cellularSetupDialogPageName_=CellularSetupPageName.ESIM_FLOW_UI}onShowErrorToast_(event){this.showErrorToast_(event.detail)}showErrorToast_(message){this.errorToastMessage_=message;this.$.errorToast.show()}onCloseCellularSetupDialog_(){this.showCellularSetupDialog_=false}showConfig_(configAndConnect,type,guid,name){assert(type!==NetworkType.kCellular&&type!==NetworkType.kTether);if(this.showInternetConfig_){return}this.showInternetConfig_=true;setTimeout((()=>{const configDialog=castExists(this.shadowRoot.querySelector("#configDialog"));configDialog.type=OncMojo.getNetworkTypeString(type);configDialog.guid=guid||"";configDialog.name=name||"";configDialog.showConnect=configAndConnect;configDialog.open()}))}onInternetConfigClose_(){this.showInternetConfig_=false}onShowDetail_(event){const networkState=event.detail;this.detailType_=networkState.type;const params=new URLSearchParams;params.append("guid",networkState.guid);params.append("type",OncMojo.getNetworkTypeString(networkState.type));params.append("name",OncMojo.getNetworkStateDisplayNameUnsafe(networkState));Router.getInstance().navigateTo(routes.NETWORK_DETAIL,params)}onShowEsimProfileRenameDialog_(event){this.eSimNetworkState_=event.detail.networkState;this.showESimProfileRenameDialog_=true}onCloseEsimProfileRenameDialog_(){this.showESimProfileRenameDialog_=false}onShowEsimRemoveProfileDialog_(event){this.eSimNetworkState_=event.detail.networkState;this.showESimRemoveProfileDialog_=true}onCloseEsimRemoveProfileDialog_(){this.showESimRemoveProfileDialog_=false}onShowHotspotConfigDialog_(){this.showHotspotConfigDialog_=true}onCloseHotspotConfigDialog_(){this.showHotspotConfigDialog_=false}onShowNetworks_(event){this.showNetworksSubpage_(event.detail)}getNetworksPageTitle_(){if(this.subpageType_===NetworkType.kCellular||this.subpageType_===NetworkType.kTether&&!this.isInstantHotspotRebrandEnabled_){return this.i18n("OncTypeMobile")}return this.i18n("OncType"+OncMojo.getNetworkTypeString(this.subpageType_))}isProviderLocked_(){if(!this.isCellularCarrierLockEnabled_){return false}if(this.subpageType_!==NetworkType.kCellular){return false}const cellularDeviceState=this.getDeviceState_(NetworkType.kCellular,this.deviceStates);if(!cellularDeviceState||!cellularDeviceState.isCarrierLocked){return false}return true}getDeviceState_(subpageType,deviceStates){if(subpageType===undefined){return undefined}if(subpageType===NetworkType.kTether&&this.deviceStates[NetworkType.kCellular]&&!this.isInstantHotspotRebrandEnabled_){subpageType=NetworkType.kCellular}return deviceStates[subpageType]}getTetherDeviceState_(deviceStates){return deviceStates[NetworkType.kTether]}onDeviceStatesChanged_(newValue,_oldValue){const wifiDeviceState=this.getDeviceState_(NetworkType.kWiFi,newValue);let managedNetworkAvailable=false;if(wifiDeviceState){managedNetworkAvailable=!!wifiDeviceState.managedNetworkAvailable}if(this.managedNetworkAvailable!==managedNetworkAvailable){this.managedNetworkAvailable=managedNetworkAvailable}assert(this.deviceStates);const vpn=this.deviceStates[NetworkType.kVPN];this.vpnIsProhibited_=!!vpn&&vpn.deviceState===DeviceStateType.kProhibited;if(this.detailType_&&!this.deviceStates[this.detailType_]){const detailPage=this.shadowRoot.querySelector("settings-internet-detail-subpage");if(detailPage){detailPage.close()}}if(this.pendingShowCellularSetupDialogAttemptPageName_){this.attemptShowCellularSetupDialog_(this.pendingShowCellularSetupDialogAttemptPageName_);this.pendingShowCellularSetupDialogAttemptPageName_=null}if(this.pendingShowSimLockDialog_){this.showSimLockDialog_=true;this.pendingShowSimLockDialog_=false}}onShowKnownNetworks_(event){const type=event.detail;this.detailType_=type;this.knownNetworksType_=type;const params=new URLSearchParams;params.append("type",OncMojo.getNetworkTypeString(type));Router.getInstance().navigateTo(routes.KNOWN_NETWORKS,params)}onAddWiFiClick_(){this.showConfig_(true,NetworkType.kWiFi)}onAddVpnClick_(){if(!this.disableVpnUi_){this.showConfig_(true,NetworkType.kVPN)}}onAddThirdPartyVpnClick_(event){const provider=event.model.item;this.browserProxy_.addThirdPartyVpn(provider.appId);recordSettingChange()}showNetworksSubpage_(type){this.detailType_=type;const params=new URLSearchParams;params.append("type",OncMojo.getNetworkTypeString(type));this.subpageType_=type;Router.getInstance().navigateTo(routes.INTERNET_NETWORKS,params)}compareVpnProviders_(vpnProvider1,vpnProvider2){if(vpnProvider1.type<vpnProvider2.type){return-1}if(vpnProvider1.type>vpnProvider2.type){return 1}if(vpnProvider1.lastLaunchTime.internalValue>vpnProvider2.lastLaunchTime.internalValue){return-1}if(vpnProvider1.lastLaunchTime.internalValue<vpnProvider2.lastLaunchTime.internalValue){return 1}return 0}wifiIsEnabled_(deviceStates){const wifi=deviceStates[NetworkType.kWiFi];return!!wifi&&wifi.deviceState===DeviceStateType.kEnabled}shouldShowAddWiFiRow_(globalPolicy,managedNetworkAvailable,deviceStates){return this.allowAddWiFiConnection_(globalPolicy,managedNetworkAvailable)&&this.wifiIsEnabled_(deviceStates)}allowAddWiFiConnection_(globalPolicy,managedNetworkAvailable){if(!globalPolicy){return true}return!globalPolicy.allowOnlyPolicyWifiNetworksToConnect&&(!globalPolicy.allowOnlyPolicyWifiNetworksToConnectIfAvailable||!managedNetworkAvailable)}allowAddConnection_(globalPolicy,managedNetworkAvailable){if(!this.vpnIsProhibited_){return true}return this.allowAddWiFiConnection_(globalPolicy,managedNetworkAvailable)}shouldDisableVpnUi_(){if(this.vpnIsProhibited_){return true}if(!this.prefs){return false}const isVpnConfigProhibited=this.prefs.vpn_config_allowed&&!this.prefs.vpn_config_allowed.value;const hasAlwaysOnVpnWithLockdown=this.prefs.arc&&this.prefs.arc.vpn&&this.prefs.arc.vpn.always_on&&this.prefs.arc.vpn.always_on.lockdown&&this.prefs.arc.vpn.always_on.lockdown.value;return isVpnConfigProhibited&&hasAlwaysOnVpnWithLockdown}getAddThirdPartyVpnLabel_(provider){return this.i18n("internetAddThirdPartyVPN",provider.providerName||"")}async onNetworkConnect_(event){const networkState=event.detail.networkState;const type=networkState.type;const displayName=OncMojo.getNetworkStateDisplayNameUnsafe(networkState);if(!event.detail.bypassConnectionDialog&&type===NetworkType.kTether&&!networkState.typeState.tether.hasConnectedToHost){const params=new URLSearchParams;params.append("guid",networkState.guid);params.append("type",OncMojo.getNetworkTypeString(type));params.append("name",displayName);params.append("showConfigure",true.toString());Router.getInstance().navigateTo(routes.NETWORK_DETAIL,params);return}if(OncMojo.networkTypeHasConfigurationFlow(type)&&(!OncMojo.isNetworkConnectable(networkState)||!!networkState.errorState)){this.showConfig_(true,type,networkState.guid,displayName);return}const response=await this.networkConfig_.startConnect(networkState.guid);switch(response.result){case StartConnectResult.kSuccess:return;case StartConnectResult.kInvalidGuid:case StartConnectResult.kInvalidState:case StartConnectResult.kCanceled:return;case StartConnectResult.kNotConfigured:if(OncMojo.networkTypeHasConfigurationFlow(type)){this.showConfig_(true,type,networkState.guid,displayName)}return;case StartConnectResult.kBlocked:case StartConnectResult.kUnknown:console.warn("startConnect failed for: "+networkState.guid+" Error: "+response.message);return}assertNotReached()}onCreateCustomApnClicked_(){if(this.isCreateCustomApnButtonDisabled_){return}const apnSubpage=castExists(this.shadowRoot.querySelector("#apnSubpage"));apnSubpage.openApnDetailDialogInCreateMode()}onShowPasspointDetails_(event){this.passpointSubscription_=event.detail;const params=new URLSearchParams;params.append("id",this.passpointSubscription_.id);Router.getInstance().navigateTo(routes.PASSPOINT_DETAIL,params)}getPasspointSubscriptionName_(subscription){if(!subscription){return""}if(subscription.friendlyName&&subscription.friendlyName!==""){return subscription.friendlyName}return subscription.domains[0]}showHotspotSpinner_(){if(!this.hotspotInfo){return false}return this.hotspotInfo.state===HotspotState.kEnabling||this.hotspotInfo.state===HotspotState.kDisabling}}customElements.define(SettingsInternetPageElement.is,SettingsInternetPageElement);function getTemplate$L(){return html`<!--_html_template_start_--><style include="settings-shared iron-flex"></style>
<os-settings-animated-pages id="pages" section="[[section_]]">
  <div route-path="default">
    <settings-card header-text="$i18n{kerberosPageTitle}">
      <cr-link-row id="kerberosAccountsSubpageTrigger" on-click="onKerberosAccountsClick_" label="$i18n{kerberosAccountsSubMenuLabel}" role-description="$i18n{subpageArrowRoleDescription}">
        <cr-policy-indicator indicator-type="userPolicy">
        </cr-policy-indicator>
      </cr-link-row>
    </settings-card>
  </div>

  <template is="dom-if" route-path="/kerberos/kerberosAccounts">
    <os-settings-subpage page-title="$i18n{kerberosAccountsPageTitle}">
      <settings-kerberos-accounts-subpage></settings-kerberos-accounts-subpage>
    </os-settings-subpage>
  </template>
</os-settings-animated-pages>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsKerberosPageElementBase=RouteOriginMixin(WebUiListenerMixin(I18nMixin(PolymerElement)));class SettingsKerberosPageElement extends SettingsKerberosPageElementBase{static get is(){return"settings-kerberos-page"}static get template(){return getTemplate$L()}static get properties(){return{section_:{type:Number,value:Section$1.kKerberos,readOnly:true}}}constructor(){super();this.route=routes.KERBEROS}ready(){super.ready();this.addFocusConfig(routes.KERBEROS_ACCOUNTS_V2,"#kerberosAccountsSubpageTrigger")}onKerberosAccountsClick_(){Router.getInstance().navigateTo(routes.KERBEROS_ACCOUNTS_V2)}}customElements.define(SettingsKerberosPageElement.is,SettingsKerberosPageElement);function getTemplate$K(){return html`<!--_html_template_start_--><style include="cr-shared-style cros-color-overrides">cr-dialog::part(dialog){width:320px}#passwordInput{margin-top:20px}</style>
<cr-dialog id="dialog" close-text="$i18n{close}">
  <div slot="title">$i18n{passwordPromptTitle}</div>
  <div slot="body">
    <div id="passwordPrompt" hidden="[[!passwordPromptText]]">
      [[passwordPromptText]]
    </div>
    <cr-input id="passwordInput" type="password" placeholder="$i18n{passwordPromptPasswordLabel}" invalid="[[passwordInvalid_]]" error-message="$i18n{passwordPromptInvalidPassword}" value="{{inputValue_}}" aria-disabled="false">
    </cr-input>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" on-click="onCancelClick_">
      $i18n{cancel}
    </cr-button>

    <cr-button id="confirmButton" class="action-button" disabled$="[[!isConfirmEnabled_(inputValue_, passwordInvalid_,
            waitingForPasswordCheck_)]]" on-click="submitPassword_">
      $i18n{confirm}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SettingsPasswordPromptDialogElement extends PolymerElement{static get is(){return"settings-password-prompt-dialog"}static get template(){return getTemplate$K()}static get properties(){return{passwordPromptText:{type:String,notify:true,value:""},inputValue_:{type:String,value:"",observer:"onInputValueChange_"},passwordInvalid_:{type:Boolean,value:false},quickUnlockPrivate:{type:Object,value:chrome.quickUnlockPrivate},waitingForPasswordCheck_:{type:Boolean,value:false}}}get passwordInput(){return this.shadowRoot.querySelector("cr-input")}connectedCallback(){super.connectedCallback();this.$.dialog.showModal();window.setTimeout((()=>{this.passwordInput.focus()}),1)}onCancelClick_(){if(this.$.dialog.open){this.$.dialog.close()}}submitPassword_(){this.waitingForPasswordCheck_=true;const password=this.passwordInput.value;if(!password){this.passwordInvalid_=false;this.waitingForPasswordCheck_=false;return}this.quickUnlockPrivate.getAuthToken(password,(tokenInfo=>{this.waitingForPasswordCheck_=false;if(chrome.runtime.lastError){this.passwordInvalid_=true;this.passwordInput.select();return}this.dispatchEvent(new CustomEvent("token-obtained",{bubbles:true,composed:true,detail:tokenInfo}));this.passwordInvalid_=false;if(this.$.dialog.open){this.$.dialog.close()}}))}onInputValueChange_(){this.passwordInvalid_=false}isConfirmEnabled_(){return!this.waitingForPasswordCheck_&&!this.passwordInvalid_&&!!this.inputValue_}}customElements.define(SettingsPasswordPromptDialogElement.is,SettingsPasswordPromptDialogElement);function getTemplate$J(){return html`<!--_html_template_start_--><style include="cr-shared-style settings-shared">cr-dialog::part(dialog){width:512px}div[slot=title]{flex-direction:column;height:auto}div[slot=body]{align-items:center;display:flex;flex-direction:column;height:auto;justify-content:center;width:464px}iron-icon{--iron-icon-fill-color:var(--cros-icon-color-alert);padding-bottom:13px}#description{display:flex;flex-direction:column;gap:12px}:host(:not([did-setup-attempt-fail_])) #description{height:93px}:host([did-setup-attempt-fail_]) #description{height:60px}#illustration{background-position:center center;background-repeat:no-repeat;background-size:contain;height:200px;margin-bottom:24px;margin-top:24px;width:100%}:host([has-not-started-setup-attempt_]) #illustration{background-image:url(chrome://os-settings/images/notification_access_setup.svg)}:host([is-setup-attempt-in-progress_]) #illustration{background-image:url(chrome://os-settings/images/notification_access_connecting.svg)}:host([did-setup-attempt-fail_]) #illustration{background-image:url(chrome://os-settings/images/notification_access_error.svg)}:host([has-completed-setup-successfully_]) #illustration{background-image:url(chrome://os-settings/images/notification_access_finished.svg)}@media(prefers-color-scheme:dark){:host([has-not-started-setup-attempt_]) #illustration{background-image:url(chrome://os-settings/images/notification_access_setup_dark.svg)}:host([is-setup-attempt-in-progress_]) #illustration{background-image:url(chrome://os-settings/images/notification_access_connecting_dark.svg)}:host([did-setup-attempt-fail_]) #illustration{background-image:url(chrome://os-settings/images/notification_access_error_dark.svg)}:host([has-completed-setup-successfully_]) #illustration{background-image:url(chrome://os-settings/images/notification_access_finished_dark.svg)}}</style>
<cr-dialog id="dialog" close-text="$i18n{close}">
  <div id="dialogTitle" slot="title">
    <template is="dom-if" if="[[didSetupAttemptFail_]]" restamp>
      <iron-icon id="failureIcon" icon="os-settings:failure-alert">
      </iron-icon>
    </template>
    <div id="title">[[title_]]</div>
  </div>
  <div id="dialogBody" slot="body">
    <div id="illustration"></div>
    <div id="description">
      <template is="dom-if" if="[[description_]]" restamp>
        <localized-link localized-string="[[description_]]">
        </localized-link>
      </template>
      <div hidden="[[!shouldShowSetupInstructionsSeparately_]]">
        $i18n{multideviceNotificationAccessSetupInstructions}
      </div>
    </div>
  </div>
  <div id="buttonContainer" slot="button-container">
    <template is="dom-if" if="[[shouldShowCancelButton_(setupState_)]]" restamp>
      <cr-button id="cancelButton" class="cancel-button" on-click="onCancelClicked_">
        $i18n{cancel}
      </cr-button>
    </template>
    <template is="dom-if" if="[[hasCompletedSetupSuccessfully_]]" restamp>
      <cr-button id="doneButton" class="action-button" on-click="onDoneOrCloseButtonClicked_">
        $i18n{done}
      </cr-button>
    </template>
    <template is="dom-if" if="[[isNotificationAccessProhibited_]]" restamp>
      <cr-button id="closeButton" class="action-button" on-click="onDoneOrCloseButtonClicked_">
        $i18n{close}
      </cr-button>
    </template>
    <template is="dom-if" if="[[hasNotStartedSetupAttempt_]]" restamp>
      <cr-button id="getStartedButton" class="action-button" on-click="attemptNotificationSetup_">
        $i18n{multideviceNotificationAccessSetupGetStarted}
      </cr-button>
    </template>
    <template is="dom-if" if="[[shouldShowTryAgainButton_(setupState_)]]" restamp>
      <cr-button id="tryAgainButton" class="action-button" on-click="attemptNotificationSetup_">
        $i18n{multideviceNotificationAccessSetupTryAgain}
      </cr-button>
    </template>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var NotificationAccessSetupOperationStatus;(function(NotificationAccessSetupOperationStatus){NotificationAccessSetupOperationStatus[NotificationAccessSetupOperationStatus["CONNECTION_REQUESTED"]=0]="CONNECTION_REQUESTED";NotificationAccessSetupOperationStatus[NotificationAccessSetupOperationStatus["CONNECTING"]=1]="CONNECTING";NotificationAccessSetupOperationStatus[NotificationAccessSetupOperationStatus["TIMED_OUT_CONNECTING"]=2]="TIMED_OUT_CONNECTING";NotificationAccessSetupOperationStatus[NotificationAccessSetupOperationStatus["CONNECTION_DISCONNECTED"]=3]="CONNECTION_DISCONNECTED";NotificationAccessSetupOperationStatus[NotificationAccessSetupOperationStatus["SENT_MESSAGE_TO_PHONE_AND_WAITING_FOR_RESPONSE"]=4]="SENT_MESSAGE_TO_PHONE_AND_WAITING_FOR_RESPONSE";NotificationAccessSetupOperationStatus[NotificationAccessSetupOperationStatus["COMPLETED_SUCCESSFULLY"]=5]="COMPLETED_SUCCESSFULLY";NotificationAccessSetupOperationStatus[NotificationAccessSetupOperationStatus["NOTIFICATION_ACCESS_PROHIBITED"]=6]="NOTIFICATION_ACCESS_PROHIBITED"})(NotificationAccessSetupOperationStatus||(NotificationAccessSetupOperationStatus={}));const SettingsMultideviceNotificationAccessSetupDialogElementBase=WebUiListenerMixin(I18nMixin(PolymerElement));class SettingsMultideviceNotificationAccessSetupDialogElement extends SettingsMultideviceNotificationAccessSetupDialogElementBase{static get is(){return"settings-multidevice-notification-access-setup-dialog"}static get template(){return getTemplate$J()}static get properties(){return{setupState_:{type:Number,value:null},title_:{type:String,computed:"getTitle_(setupState_)"},description_:{type:String,computed:"getDescription_(setupState_)"},hasNotStartedSetupAttempt_:{type:Boolean,computed:"computeHasNotStartedSetupAttempt_(setupState_)",reflectToAttribute:true},isSetupAttemptInProgress_:{type:Boolean,computed:"computeIsSetupAttemptInProgress_(setupState_)",reflectToAttribute:true},didSetupAttemptFail_:{type:Boolean,computed:"computeDidSetupAttemptFail_(setupState_)",reflectToAttribute:true},hasCompletedSetupSuccessfully_:{type:Boolean,computed:"computeHasCompletedSetupSuccessfully_(setupState_)",reflectToAttribute:true},isNotificationAccessProhibited_:{type:Boolean,computed:"computeIsNotificationAccessProhibited_(setupState_)"},shouldShowSetupInstructionsSeparately_:{type:Boolean,computed:"computeShouldShowSetupInstructionsSeparately_("+"setupState_)",reflectToAttribute:true}}}constructor(){super();this.browserProxy_=MultiDeviceBrowserProxyImpl.getInstance()}connectedCallback(){super.connectedCallback();this.addWebUiListener("settings.onNotificationAccessSetupStatusChanged",this.onSetupStateChanged_.bind(this));this.$.dialog.showModal()}onSetupStateChanged_(setupState){this.setupState_=setupState;if(this.setupState_===NotificationAccessSetupOperationStatus.COMPLETED_SUCCESSFULLY){this.browserProxy_.setFeatureEnabledState(MultiDeviceFeature.PHONE_HUB_NOTIFICATIONS,true)}}computeHasNotStartedSetupAttempt_(){return this.setupState_===null}computeIsSetupAttemptInProgress_(){return this.setupState_===NotificationAccessSetupOperationStatus.SENT_MESSAGE_TO_PHONE_AND_WAITING_FOR_RESPONSE||this.setupState_===NotificationAccessSetupOperationStatus.CONNECTING||this.setupState_===NotificationAccessSetupOperationStatus.CONNECTION_REQUESTED}computeHasCompletedSetupSuccessfully_(){return this.setupState_===NotificationAccessSetupOperationStatus.COMPLETED_SUCCESSFULLY}computeIsNotificationAccessProhibited_(){return this.setupState_===NotificationAccessSetupOperationStatus.NOTIFICATION_ACCESS_PROHIBITED}computeDidSetupAttemptFail_(){return this.setupState_===NotificationAccessSetupOperationStatus.TIMED_OUT_CONNECTING||this.setupState_===NotificationAccessSetupOperationStatus.CONNECTION_DISCONNECTED||this.setupState_===NotificationAccessSetupOperationStatus.NOTIFICATION_ACCESS_PROHIBITED}computeShouldShowSetupInstructionsSeparately_(){return this.setupState_===null||this.setupState_===NotificationAccessSetupOperationStatus.CONNECTION_REQUESTED||this.setupState_===NotificationAccessSetupOperationStatus.SENT_MESSAGE_TO_PHONE_AND_WAITING_FOR_RESPONSE||this.setupState_===NotificationAccessSetupOperationStatus.CONNECTING}attemptNotificationSetup_(){this.browserProxy_.attemptNotificationSetup();this.setupState_=NotificationAccessSetupOperationStatus.CONNECTION_REQUESTED}onCancelClicked_(){this.browserProxy_.cancelNotificationSetup();this.$.dialog.close()}onDoneOrCloseButtonClicked_(){this.$.dialog.close()}getTitle_(){if(this.setupState_===null){return this.i18n("multideviceNotificationAccessSetupAckTitle")}const Status=NotificationAccessSetupOperationStatus;switch(this.setupState_){case Status.CONNECTION_REQUESTED:case Status.CONNECTING:return this.i18n("multideviceNotificationAccessSetupConnectingTitle");case Status.SENT_MESSAGE_TO_PHONE_AND_WAITING_FOR_RESPONSE:return this.i18n("multideviceNotificationAccessSetupAwaitingResponseTitle");case Status.COMPLETED_SUCCESSFULLY:return this.i18n("multideviceNotificationAccessSetupCompletedTitle");case Status.TIMED_OUT_CONNECTING:return this.i18n("multideviceNotificationAccessSetupCouldNotEstablishConnectionTitle");case Status.CONNECTION_DISCONNECTED:return this.i18n("multideviceNotificationAccessSetupConnectionLostWithPhoneTitle");case Status.NOTIFICATION_ACCESS_PROHIBITED:return this.i18n("multideviceNotificationAccessSetupAccessProhibitedTitle");default:return""}}getDescription_(){if(this.setupState_===null){return this.i18n("multideviceNotificationAccessSetupAckSummary")}const Status=NotificationAccessSetupOperationStatus;switch(this.setupState_){case Status.COMPLETED_SUCCESSFULLY:return this.i18n("multideviceNotificationAccessSetupCompletedSummary");case Status.TIMED_OUT_CONNECTING:return this.i18n("multideviceNotificationAccessSetupEstablishFailureSummary");case Status.CONNECTION_DISCONNECTED:return this.i18n("multideviceNotificationAccessSetupMaintainFailureSummary");case Status.NOTIFICATION_ACCESS_PROHIBITED:return this.i18nAdvanced("multideviceNotificationAccessSetupAccessProhibitedSummary");case Status.SENT_MESSAGE_TO_PHONE_AND_WAITING_FOR_RESPONSE:return this.i18n("multideviceNotificationAccessSetupAwaitingResponseSummary");case Status.CONNECTION_REQUESTED:case Status.CONNECTING:default:return""}}shouldShowCancelButton_(){return this.setupState_!==NotificationAccessSetupOperationStatus.COMPLETED_SUCCESSFULLY&&this.setupState_!==NotificationAccessSetupOperationStatus.NOTIFICATION_ACCESS_PROHIBITED}shouldShowTryAgainButton_(){return this.setupState_===NotificationAccessSetupOperationStatus.TIMED_OUT_CONNECTING||this.setupState_===NotificationAccessSetupOperationStatus.CONNECTION_DISCONNECTED}}customElements.define(SettingsMultideviceNotificationAccessSetupDialogElement.is,SettingsMultideviceNotificationAccessSetupDialogElement);function getTemplate$I(){return html`<!--_html_template_start_--><settings-password-prompt-dialog id="passwordPrompt" password-prompt-text="[[selectPasswordPromptEnterPasswordString_(hasPinLogin)]]" on-token-obtained="onTokenObtained_">
</settings-password-prompt-dialog>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsLockScreenPasswordPromptDialogElementBase=LockStateMixin(PolymerElement);class SettingsLockScreenPasswordPromptDialogElement extends SettingsLockScreenPasswordPromptDialogElementBase{static get is(){return"settings-lock-screen-password-prompt-dialog"}static get template(){return getTemplate$I()}static get properties(){return{}}connectedCallback(){super.connectedCallback();recordLockScreenProgress(LockScreenProgress.START_SCREEN_LOCK)}onTokenObtained_({detail:detail}){recordLockScreenProgress(LockScreenProgress.ENTER_PASSWORD_CORRECTLY);const authTokenObtainedEvent=new CustomEvent("auth-token-obtained",{bubbles:true,composed:true,detail:detail});this.dispatchEvent(authTokenObtainedEvent)}selectPasswordPromptEnterPasswordString_(hasPinLogin){if(hasPinLogin){return this.i18n("passwordPromptEnterPasswordLoginLock")}return this.i18n("passwordPromptEnterPasswordLock")}}customElements.define(SettingsLockScreenPasswordPromptDialogElement.is,SettingsLockScreenPasswordPromptDialogElement);function getTemplate$H(){return html`<!--_html_template_start_--><style include="cr-shared-style settings-shared">#screen-lock-description{align-items:center;display:flex;flex-direction:row;height:auto;justify-content:center}#half-container{flex:1;height:216px}#illustration{background-image:url(chrome://os-settings/images/multidevice_permission_setup_connecting.svg);background-position:center center;background-repeat:no-repeat;background-size:contain;height:200px;margin-bottom:8px;margin-top:8px;width:100%}@media(prefers-color-scheme:dark){#illustration{background-image:url(chrome://os-settings/images/multidevice_permission_setup_connecting_dark.svg)}}#radio-button-container{padding-top:20px}#passwordRadioButton{--cr-radio-button-label-spacing:20px;--cr-radio-button-size:20px;color:var(--cr-primary-text-color);min-height:20px;padding-inline-start:8px;padding-top:24px}#pinRadioButton{--cr-radio-button-label-spacing:20px;--cr-radio-button-size:20px;color:var(--cr-primary-text-color);min-height:20px;padding-inline-start:8px;padding-top:44px}#subtext{color:var(--cr-secondary-text-color);padding-inline-start:48px}</style>
<div id="screen-lock-description">
  <div id="half-container">
    <div id="illustration"></div>
  </div>
  <div id="half-container">
    <template is="dom-if" if="[[authTokenInfo_]]">
      <cr-radio-group id="radio-button-container" disabled$="[[quickUnlockDisabledByPolicy_]]" selected="{{selectedUnlockType}}" deep-link-focus-id$="[[Setting.kChangeAuthPinV2]]">
        <cr-radio-button id="passwordRadioButton" name="password" label="$i18n{lockScreenPasswordOnly}">
        </cr-radio-button>
        <cr-radio-button id="pinRadioButton" name="pin+password" label="$i18n{lockScreenPinOrPassword}">
        </cr-radio-button>
      </cr-radio-group>
    </template>
  </div>
</div>
<template is="dom-if" if="[[shouldPromptPasswordDialog_]]" restamp>
  <settings-lock-screen-password-prompt-dialog id="passwordDialog" on-close="onPasswordPromptDialogClose_" on-auth-token-obtained="onAuthTokenObtained_">
  </settings-lock-screen-password-prompt-dialog>
</template>
<template is="dom-if" if="[[showSetupPinDialog]]" restamp>
  <settings-setup-pin-dialog id="setupPin" auth-token="[[authTokenInfo_.token]]" on-close="onSetupPinDialogClose_">
  </settings-setup-pin-dialog>
</template>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsMultideviceScreenLockSubpageElementBase=LockStateMixin(PolymerElement);class SettingsMultideviceScreenLockSubpageElement extends SettingsMultideviceScreenLockSubpageElementBase{static get is(){return"settings-multidevice-screen-lock-subpage"}static get template(){return getTemplate$H()}static get properties(){return{authTokenInfo_:Object,quickUnlockDisabledByPolicy_:{type:Boolean,value(){return loadTimeData.getBoolean("quickUnlockDisabledByPolicy")},readOnly:true},shouldPromptPasswordDialog_:Boolean,isScreenLockEnabled:{type:Boolean,value:false,notify:true},isPasswordDialogShowing:{type:Boolean,value:false,notify:true},showSetupPinDialog:{type:Boolean,value:false,notify:true},hasPin:{type:Boolean,value:false}}}static get observers(){return["selectedUnlockTypeChanged_(selectedUnlockType)","updatePinState_(authTokenInfo_)"]}constructor(){super();if(this.authTokenInfo_===undefined){this.shouldPromptPasswordDialog_=true}}ready(){super.ready();const receiver=new FactorObserverReceiver(this);const remote=receiver.$.bindNewPipeAndPassRemote();AuthFactorConfig.getRemote().observeFactorChanges(remote)}async onFactorChanged(factor){if(factor!==AuthFactor.kPin){return}if(!this.authTokenInfo_){return}await this.updatePinState_(this.authTokenInfo_,true)}async updatePinState_(authTokenInfo,factorChanged=false){if(!authTokenInfo){return}const authToken=authTokenInfo.token;assert(this.authTokenInfo_&&this.authTokenInfo_.token===authToken);const{configured:configured}=await AuthFactorConfig.getRemote().isConfigured(authToken,AuthFactor.kPin);if(configured){this.hasPin=true;this.selectedUnlockType=LockScreenUnlockType.PIN_PASSWORD;return}assert(!configured);if(factorChanged&&!this.hasPin&&this.selectedUnlockType===LockScreenUnlockType.PIN_PASSWORD){return}this.hasPin=false;this.selectedUnlockType=LockScreenUnlockType.PASSWORD}async selectedUnlockTypeChanged_(selected){const pinNumberEvent=new CustomEvent("pin-number-selected",{bubbles:true,composed:true,detail:{isPinNumberSelected:selected===LockScreenUnlockType.PIN_PASSWORD}});this.dispatchEvent(pinNumberEvent);if(selected===LockScreenUnlockType.PASSWORD&&this.authTokenInfo_){this.hasPin=false;const{result:result}=await PinFactorEditor.getRemote().removePin(this.authTokenInfo_.token);if(result!==ConfigureResult.kSuccess){this.hasPin=true}switch(result){case ConfigureResult.kSuccess:break;case ConfigureResult.kInvalidTokenError:fireAuthTokenInvalidEvent(this);break;case ConfigureResult.kFatalError:console.error("Error removing PIN");break}}}onPasswordPromptDialogClose_(){this.shouldPromptPasswordDialog_=false}onAuthTokenObtained_(e){this.authTokenInfo_=e.detail;this.setLockScreenEnabled(this.authTokenInfo_.token,true,(_success=>{}));this.isScreenLockEnabled=true;this.isPasswordDialogShowing=true}showConfigurePinButton_(selectedUnlockType){return selectedUnlockType===LockScreenUnlockType.PIN_PASSWORD}onSetupPinDialogClose_(){this.showSetupPinDialog=false}}customElements.define(SettingsMultideviceScreenLockSubpageElement.is,SettingsMultideviceScreenLockSubpageElement);function getTemplate$G(){return html`<!--_html_template_start_--><style include="cr-shared-style settings-shared">cr-dialog::part(dialog){width:512px}#dialogTitle{--cr-dialog-title-slot-padding-bottom:24px;--cr-dialog-title-slot-padding-end:24px;--cr-dialog-title-slot-padding-start:24px;--cr-dialog-title-slot-padding-top:24px}:host(:not([has-started-setup-attempt_])) #dialogTitle{--cr-dialog-title-slot-padding-bottom:20px}:host([is-setup-screen-lock-in-progress_]) #dialogTitle{--cr-dialog-title-slot-padding-bottom:20px}#title{align-items:center;color:var(--cros-text-color-primary);display:flex;flex-direction:row;font:var(--cros-title-1-font);gap:8px;justify-content:flex-start}#subtitle{color:var(--cros-text-color-secondary);font:var(--cros-body-1-font)}#dialogBody{display:flex;flex-direction:column;padding-inline-end:24px;padding-inline-start:24px}:host([has-started-setup-attempt_]) #dialogBody{height:296px}:host([is-setup-screen-lock-in-progress_]) #dialogBody{height:260px}:host([did-setup-attempt-fail_]) #dialogBody{height:288px}:host([should-show-setup-instructions-separately_]) #dialogBody{justify-content:space-between}#buttonContainer{align-items:center;display:flex;flex-direction:row;justify-content:space-between;padding-bottom:20px;padding-inline-end:24px;padding-inline-start:24px;padding-top:0}#failure-icon{--iron-icon-fill-color:var(--cros-icon-color-warning);height:32px;width:32px}#feature-icon{--iron-icon-fill-color:var(--cros-icon-color-prominent);height:20px;width:20px}#instruction-icon{--iron-icon-fill-color:var(--cros-icon-color-secondary);height:16px;width:16px}#screen-lock-instruction-icon{--iron-icon-fill-color:var(--cros-icon-color-secondary);height:20px;width:20px}#button-detail{align-items:flex-end;display:flex;flex-direction:row;gap:8px;justify-content:right}#description{color:var(--cros-text-color-secondary);font:var(--cros-body-2-font);padding-top:24px}#feature-description{align-items:flex-start;display:flex;flex-direction:column;width:252px}#start-setup-description{align-items:flex-start;display:flex;flex-direction:row;height:auto;justify-content:center}#feature-details-container{align-items:flex-start;color:var(--cros-text-color-secondary);display:flex;flex-direction:row;font:var(--cros-body-2-font);gap:20px;justify-content:start;padding-bottom:16px}#half-container{flex:1}#instruction{align-items:flex-end;color:var(--cros-text-color-secondary);display:flex;flex-direction:row;font:var(--cros-annotation-2-font);gap:6px;justify-content:start;padding-bottom:24px}#screen-lock-instruction{align-items:flex-start;color:var(--cros-text-color-secondary);display:flex;flex-direction:row;font:var(--cros-body-2-font);gap:8px;justify-content:start;padding-bottom:24px}#illustration{background-position:center center;background-repeat:no-repeat;background-size:contain;height:200px;width:100%}:host(:not([has-started-setup-attempt_])) #illustration{background-image:url(chrome://os-settings/images/notification_access_setup.svg);padding-bottom:8px;padding-top:8px;width:200px}:host([is-setup-attempt-in-progress_]) #illustration{background-image:url(chrome://os-settings/images/notification_access_connecting.svg)}:host([did-setup-attempt-fail_]) #illustration{background-image:url(chrome://os-settings/images/notification_access_error.svg)}:host([has-completed-setup_]) #illustration{background-image:url(chrome://os-settings/images/notification_access_finished.svg)}@media(prefers-color-scheme:dark){:host(:not([has-started-setup-attempt_])) #illustration{background-image:url(chrome://os-settings/images/notification_access_setup_dark.svg)}:host([is-setup-attempt-in-progress_]) #illustration{background-image:url(chrome://os-settings/images/notification_access_connecting_dark.svg)}:host([did-setup-attempt-fail_]) #illustration{background-image:url(chrome://os-settings/images/notification_access_error_dark.svg)}:host([has-completed-setup-successfully_]) #illustration{background-image:url(chrome://os-settings/images/notification_access_finished_dark.svg)}}</style>
<cr-dialog id="dialog" close-text="$i18n{close}">
  <div id="dialogTitle" slot="title">
    <div id="title" aria-live="[[getLiveStatus_(setupState_)]]" aria-labelledby="title" aria-describedby="description">
      <template is="dom-if" if="[[didSetupAttemptFail_]]" restamp>
        <iron-icon id="failure-icon" icon="os-settings:multidevice-error">
        </iron-icon>
      </template>
      [[title_]]
    </div>
    <template is="dom-if" if="[[hasStartedSetupAttempt_]]" restamp>
      <template is="dom-if" if="[[shouldShowScreenLockInstructions_(flowState_)]]" restamp>
        <div id="subtitle">
          $i18n{multideviceNotificationAccessSetupScreenLockSubtitle}
        </div>
      </template>
    </template>
    <template is="dom-if" if="[[!hasStartedSetupAttempt_]]" restamp>
      <div id="subtitle">
        $i18n{multidevicePermissionsSetupAckSubtitle}
      </div>
    </template>
  </div>
  <div id="dialogBody" slot="body">
    <template is="dom-if" if="[[!hasStartedSetupAttempt_]]" restamp>
      <div id="start-setup-description">
        <div id="half-container">
          <div id="illustration"></div>
        </div>
        <div id="half-container">
          <div id="feature-description">
            <template is="dom-if" if="[[showCameraRoll]]" restamp>
              <div id="feature-details-container">
                <iron-icon id="feature-icon" icon="os-settings:multidevice-recent-photos">
                </iron-icon>
                $i18n{multidevicePermissionsSetupCameraRollSummary}
              </div>
            </template>
            <template is="dom-if" if="[[showNotifications]]" restamp>
              <div id="feature-details-container">
                <iron-icon id="feature-icon" icon="os-settings:multidevice-notifications">
                </iron-icon>
                $i18n{multidevicePermissionsSetupNotificationsSummary}
              </div>
            </template>
            <template is="dom-if" if="[[showAppStreaming]]" restamp>
              <div id="feature-details-container">
                <iron-icon id="feature-icon" icon="os-settings:multidevice-app-streaming">
                </iron-icon>
                $i18n{multidevicePermissionsSetupAppsSummary}
              </div>
            </template>
          </div>
        </div>
      </div>
      <div id="instruction">
        <iron-icon id="instruction-icon" icon="os-settings:failure-alert">
        </iron-icon>
        $i18n{multidevicePermissionsSetupInstructions}
      </div>
    </template>
    <template is="dom-if" if="[[hasStartedSetupAttempt_]]" restamp>
      <template is="dom-if" if="[[shouldShowScreenLockInstructions_(flowState_)]]" restamp>
        <settings-multidevice-screen-lock-subpage id="screen-lock-subpage" is-screen-lock-enabled="{{isScreenLockEnabled_}}" on-pin-number-selected="onPinNumberSelected_" show-setup-pin-dialog="{{showSetupPinDialog_}}" is-password-dialog-showing="{{isPasswordDialogShowing}}">
        </settings-multidevice-screen-lock-subpage>
        <div id="screen-lock-instruction">
          <iron-icon id="screen-lock-instruction-icon" icon="os-settings:failure-alert">
          </iron-icon>
          $i18n{multideviceNotificationAccessSetupScreenLockIconInstruction}
        </div>
      </template>
      <template is="dom-if" if="[[!shouldShowScreenLockInstructions_(flowState_)]]" restamp>
        <div id="illustration"></div>
        <template is="dom-if" if="[[description_]]" restamp>
          <div id="description">
            <localized-link localized-string="[[description_]]">
            </localized-link>
          </div>
        </template>
      </template>
    </template>
  </div>
  <div id="buttonContainer" slot="button-container">
    <div id="half-container">
      <template is="dom-if" if="[[shouldShowLearnMoreButton_]]" restamp>
        <cr-button id="learnMore" on-click="onLearnMoreClicked_" aria-label$="[[learnMoreButtonAriaLabel_]]">
          $i18n{multideviceLearnMoreWithoutURL}
        </cr-button>
      </template>
    </div>
    <div id="button-detail">
      <template is="dom-if" if="[[shouldShowCancelButton_(setupState_)]]" restamp>
        <cr-button id="cancelButton" on-click="onCancelClicked_">
          $i18n{cancel}
        </cr-button>
      </template>
      <template is="dom-if" if="[[shouldShowDisabledDoneButton_]]" restamp>
        <cr-button id="doneButton" class="action-button" disabled="disabled">
          $i18n{done}
        </cr-button>
      </template>
      <template is="dom-if" if="[[hasCompletedSetup_]]" restamp>
        <cr-button id="doneButton" class="action-button" on-click="onDoneOrCloseButtonClicked_" autofocus>
          $i18n{done}
        </cr-button>
      </template>
      <template is="dom-if" if="[[isNotificationAccessProhibited_]]" restamp>
        <cr-button id="closeButton" class="action-button" on-click="onDoneOrCloseButtonClicked_">
          $i18n{close}
        </cr-button>
      </template>
      <template is="dom-if" if="[[!hasStartedSetupAttempt_]]" restamp>
        <cr-button id="getStartedButton" class="action-button" on-click="nextPage_">
          $i18n{next}
        </cr-button>
      </template>
      <template is="dom-if" if="[[hasStartedSetupAttempt_]]" restamp>
        <template is="dom-if" if="[[shouldShowScreenLockInstructions_(flowState_)]]" restamp>
          <cr-button id="getStartedButton" class="action-button" on-click="nextPage_">
            $i18n{next}
          </cr-button>
        </template>
      </template>
      <template is="dom-if" if="[[shouldShowTryAgainButton_(setupState_)]]" restamp>
        <cr-button id="tryAgainButton" class="action-button" on-click="nextPage_">
          $i18n{multideviceNotificationAccessSetupTryAgain}
        </cr-button>
      </template>
    </div>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var PermissionsSetupStatus;(function(PermissionsSetupStatus){PermissionsSetupStatus[PermissionsSetupStatus["CONNECTION_REQUESTED"]=0]="CONNECTION_REQUESTED";PermissionsSetupStatus[PermissionsSetupStatus["CONNECTING"]=1]="CONNECTING";PermissionsSetupStatus[PermissionsSetupStatus["TIMED_OUT_CONNECTING"]=2]="TIMED_OUT_CONNECTING";PermissionsSetupStatus[PermissionsSetupStatus["CONNECTION_DISCONNECTED"]=3]="CONNECTION_DISCONNECTED";PermissionsSetupStatus[PermissionsSetupStatus["SENT_MESSAGE_TO_PHONE_AND_WAITING_FOR_RESPONSE"]=4]="SENT_MESSAGE_TO_PHONE_AND_WAITING_FOR_RESPONSE";PermissionsSetupStatus[PermissionsSetupStatus["COMPLETED_SUCCESSFULLY"]=5]="COMPLETED_SUCCESSFULLY";PermissionsSetupStatus[PermissionsSetupStatus["NOTIFICATION_ACCESS_PROHIBITED"]=6]="NOTIFICATION_ACCESS_PROHIBITED";PermissionsSetupStatus[PermissionsSetupStatus["COMPLETED_USER_REJECTED"]=7]="COMPLETED_USER_REJECTED";PermissionsSetupStatus[PermissionsSetupStatus["FAILED_OR_CANCELLED"]=8]="FAILED_OR_CANCELLED";PermissionsSetupStatus[PermissionsSetupStatus["CAMERA_ROLL_GRANTED_NOTIFICATION_REJECTED"]=9]="CAMERA_ROLL_GRANTED_NOTIFICATION_REJECTED";PermissionsSetupStatus[PermissionsSetupStatus["CAMERA_ROLL_REJECTED_NOTIFICATION_GRANTED"]=10]="CAMERA_ROLL_REJECTED_NOTIFICATION_GRANTED";PermissionsSetupStatus[PermissionsSetupStatus["CONNECTION_ESTABLISHED"]=11]="CONNECTION_ESTABLISHED"})(PermissionsSetupStatus||(PermissionsSetupStatus={}));var SetupFlowStatus;(function(SetupFlowStatus){SetupFlowStatus[SetupFlowStatus["INTRO"]=0]="INTRO";SetupFlowStatus[SetupFlowStatus["SET_LOCKSCREEN"]=1]="SET_LOCKSCREEN";SetupFlowStatus[SetupFlowStatus["WAIT_FOR_PHONE_NOTIFICATION"]=2]="WAIT_FOR_PHONE_NOTIFICATION";SetupFlowStatus[SetupFlowStatus["WAIT_FOR_PHONE_APPS"]=3]="WAIT_FOR_PHONE_APPS";SetupFlowStatus[SetupFlowStatus["WAIT_FOR_PHONE_COMBINED"]=4]="WAIT_FOR_PHONE_COMBINED";SetupFlowStatus[SetupFlowStatus["WAIT_FOR_CONNECTION"]=5]="WAIT_FOR_CONNECTION";SetupFlowStatus[SetupFlowStatus["FINISHED"]=6]="FINISHED"})(SetupFlowStatus||(SetupFlowStatus={}));const NOTIFICATION_FEATURE=1<<0;const CAMERA_ROLL_FEATURE=1<<1;const APPS_FEATURE=1<<2;const SettingsMultidevicePermissionsSetupDialogElementBase=LockStateMixin(PolymerElement);class SettingsMultidevicePermissionsSetupDialogElement extends SettingsMultidevicePermissionsSetupDialogElementBase{static get is(){return"settings-multidevice-permissions-setup-dialog"}static get template(){return getTemplate$G()}static get properties(){return{setupScreen_:{type:Number,computed:"getCurrentScreen_(setupState_, flowState_)"},setupState_:{type:Number,value:null},title_:{type:String,computed:"getTitle_(setupState_, flowState_)"},description_:{type:String,computed:"getDescription_(setupState_, flowState_)"},hasStartedSetupAttempt_:{type:Boolean,computed:"computeHasStartedSetupAttempt_(flowState_)",reflectToAttribute:true},isSetupAttemptInProgress_:{type:Boolean,computed:"computeIsSetupAttemptInProgress_(setupState_)",reflectToAttribute:true},isSetupScreenLockInProgress_:{type:Boolean,computed:"computeIsSetupScreenLockInProgress_(flowState_)",reflectToAttribute:true},didSetupAttemptFail_:{type:Boolean,computed:"computeDidSetupAttemptFail_(setupState_)",reflectToAttribute:true},hasCompletedSetup_:{type:Boolean,computed:"computeHasCompletedSetup_(setupState_)",reflectToAttribute:true},isNotificationAccessProhibited_:{type:Boolean,computed:"computeIsNotificationAccessProhibited_(setupState_)"},flowState_:{type:Number,value:SetupFlowStatus.INTRO},isScreenLockEnabled_:{type:Boolean,value:false},isPasswordDialogShowing:{type:Boolean,value:false,notify:true},isChromeosScreenLockEnabled:{type:Boolean,value:false},isPhoneScreenLockEnabled:{type:Boolean,value:false},showCameraRoll:{type:Boolean,value:false,observer:"onAccessStateChanged_"},showNotifications:{type:Boolean,value:false,observer:"onAccessStateChanged_"},showAppStreaming:{type:Boolean,value:false,observer:"onAccessStateChanged_"},setupMode_:{type:Number,value:0},completedMode_:{type:Number,value:0},shouldShowLearnMoreButton_:{type:Boolean,computed:"computeShouldShowLearnMoreButton_(setupState_, flowState_)",reflectToAttribute:true},shouldShowDisabledDoneButton_:{type:Boolean,computed:"computeShouldShowDisabledDoneButton_(setupState_)",reflectToAttribute:true},isPinNumberSelected_:{type:Boolean,value:false},isPinSet_:{type:Boolean,value:false},showSetupPinDialog_:{type:Boolean,value:false},combinedSetupSupported:{type:Boolean,value:false},learnMoreButtonAriaLabel_:{type:String,computed:"getLearnMoreButtonAriaLabel_()"}}}constructor(){super();this.browserProxy_=MultiDeviceBrowserProxyImpl.getInstance()}ready(){super.ready();this.addEventListener("set-pin-done",this.onSetPinDone_)}connectedCallback(){super.connectedCallback();this.addWebUiListener("settings.onNotificationAccessSetupStatusChanged",this.onNotificationSetupStateChanged_.bind(this));this.addWebUiListener("settings.onAppsAccessSetupStatusChanged",this.onAppsSetupStateChanged_.bind(this));this.addWebUiListener("settings.onCombinedAccessSetupStatusChanged",this.onCombinedSetupStateChanged_.bind(this));this.addWebUiListener("settings.onFeatureSetupConnectionStatusChanged",this.onFeatureSetupConnectionStatusChanged_.bind(this));this.$.dialog.showModal();this.browserProxy_.logPhoneHubPermissionSetUpScreenAction(PhoneHubPermissionsSetupFlowScreens.INTRO,PhoneHubPermissionsSetupAction.SHOWN)}onNotificationSetupStateChanged_(notificationSetupState){if(this.flowState_!==SetupFlowStatus.WAIT_FOR_PHONE_NOTIFICATION){return}switch(notificationSetupState){case PermissionsSetupStatus.FAILED_OR_CANCELLED:case PermissionsSetupStatus.TIMED_OUT_CONNECTING:case PermissionsSetupStatus.CONNECTION_DISCONNECTED:case PermissionsSetupStatus.NOTIFICATION_ACCESS_PROHIBITED:this.flowState_=SetupFlowStatus.FINISHED;break;case PermissionsSetupStatus.CONNECTION_REQUESTED:case PermissionsSetupStatus.CONNECTING:case PermissionsSetupStatus.SENT_MESSAGE_TO_PHONE_AND_WAITING_FOR_RESPONSE:this.setupState_=notificationSetupState;return}if(notificationSetupState===PermissionsSetupStatus.COMPLETED_SUCCESSFULLY){if(this.setupMode_&NOTIFICATION_FEATURE&&!this.showNotifications){this.completedMode_|=NOTIFICATION_FEATURE;this.browserProxy_.setFeatureEnabledState(MultiDeviceFeature.PHONE_HUB_NOTIFICATIONS,true)}}if(this.showAppStreaming){this.browserProxy_.attemptAppsSetup();this.flowState_=SetupFlowStatus.WAIT_FOR_PHONE_APPS;this.setupState_=PermissionsSetupStatus.CONNECTION_REQUESTED}else{this.setupState_=notificationSetupState;this.flowState_=SetupFlowStatus.FINISHED;this.logCompletedSetupModeMetrics_()}}onAppsSetupStateChanged_(appsSetupResult){if(this.flowState_!==SetupFlowStatus.WAIT_FOR_PHONE_APPS){return}if(appsSetupResult===PermissionsSetupStatus.COMPLETED_SUCCESSFULLY&&!this.showAppStreaming){this.completedMode_|=APPS_FEATURE;this.browserProxy_.setFeatureEnabledState(MultiDeviceFeature.ECHE,true)}this.setupState_=appsSetupResult;if(appsSetupResult!==PermissionsSetupStatus.SENT_MESSAGE_TO_PHONE_AND_WAITING_FOR_RESPONSE&&appsSetupResult!==PermissionsSetupStatus.CONNECTING&&appsSetupResult!==PermissionsSetupStatus.CONNECTION_REQUESTED){this.flowState_=SetupFlowStatus.FINISHED}if(this.computeHasCompletedSetup_()){this.logCompletedSetupModeMetrics_()}}onCombinedSetupStateChanged_(combinedSetupResult){if(this.flowState_!==SetupFlowStatus.WAIT_FOR_PHONE_COMBINED){return}switch(combinedSetupResult){case PermissionsSetupStatus.COMPLETED_SUCCESSFULLY:case PermissionsSetupStatus.COMPLETED_USER_REJECTED:case PermissionsSetupStatus.CAMERA_ROLL_GRANTED_NOTIFICATION_REJECTED:case PermissionsSetupStatus.CAMERA_ROLL_REJECTED_NOTIFICATION_GRANTED:break;case PermissionsSetupStatus.FAILED_OR_CANCELLED:this.updateCamearRollSetupResultIfNeeded_();case PermissionsSetupStatus.TIMED_OUT_CONNECTING:case PermissionsSetupStatus.CONNECTION_DISCONNECTED:case PermissionsSetupStatus.NOTIFICATION_ACCESS_PROHIBITED:this.flowState_=SetupFlowStatus.FINISHED;case PermissionsSetupStatus.CONNECTION_REQUESTED:case PermissionsSetupStatus.CONNECTING:case PermissionsSetupStatus.SENT_MESSAGE_TO_PHONE_AND_WAITING_FOR_RESPONSE:this.setupState_=combinedSetupResult;return}if(combinedSetupResult===PermissionsSetupStatus.COMPLETED_SUCCESSFULLY){this.updateCamearRollSetupResultIfNeeded_();this.updateNotificationsSetupResultIfNeeded_()}if(combinedSetupResult===PermissionsSetupStatus.CAMERA_ROLL_GRANTED_NOTIFICATION_REJECTED){this.updateCamearRollSetupResultIfNeeded_()}if(combinedSetupResult===PermissionsSetupStatus.CAMERA_ROLL_REJECTED_NOTIFICATION_GRANTED){this.updateNotificationsSetupResultIfNeeded_()}if(this.showAppStreaming){this.browserProxy_.attemptAppsSetup();this.flowState_=SetupFlowStatus.WAIT_FOR_PHONE_APPS;this.setupState_=PermissionsSetupStatus.CONNECTION_REQUESTED}else{this.setupState_=combinedSetupResult;this.flowState_=SetupFlowStatus.FINISHED;this.logCompletedSetupModeMetrics_()}}logSetupModeMetrics_(){if(this.showCameraRoll){this.setupMode_|=CAMERA_ROLL_FEATURE}if(this.showNotifications){this.setupMode_|=NOTIFICATION_FEATURE}if(this.showAppStreaming){this.setupMode_|=APPS_FEATURE}this.browserProxy_.logPhoneHubPermissionOnboardingSetupMode(this.computePhoneHubPermissionsSetupMode_(this.setupMode_))}logCompletedSetupModeMetrics_(){this.browserProxy_.logPhoneHubPermissionSetUpScreenAction(this.setupScreen_,PhoneHubPermissionsSetupAction.SHOWN);this.browserProxy_.logPhoneHubPermissionOnboardingSetupResult(this.computePhoneHubPermissionsSetupMode_(this.completedMode_))}onFeatureSetupConnectionStatusChanged_(connectionResult){if(this.flowState_!==SetupFlowStatus.WAIT_FOR_CONNECTION){return}switch(connectionResult){case PermissionsSetupStatus.TIMED_OUT_CONNECTING:case PermissionsSetupStatus.CONNECTION_DISCONNECTED:this.setupState_=connectionResult;case PermissionsSetupStatus.COMPLETED_SUCCESSFULLY:return;case PermissionsSetupStatus.CONNECTION_ESTABLISHED:this.browserProxy_.cancelFeatureSetupConnection();if(this.isScreenLockRequired_()){this.flowState_=SetupFlowStatus.SET_LOCKSCREEN;return}this.startSetupProcess_();return;default:return}}updateCamearRollSetupResultIfNeeded_(){if(this.setupMode_&CAMERA_ROLL_FEATURE&&!this.showCameraRoll){this.completedMode_|=CAMERA_ROLL_FEATURE;this.browserProxy_.setFeatureEnabledState(MultiDeviceFeature.PHONE_HUB_CAMERA_ROLL,true)}}updateNotificationsSetupResultIfNeeded_(){if(this.setupMode_&NOTIFICATION_FEATURE&&!this.showNotifications){this.completedMode_|=NOTIFICATION_FEATURE;this.browserProxy_.setFeatureEnabledState(MultiDeviceFeature.PHONE_HUB_NOTIFICATIONS,true)}}computeHasStartedSetupAttempt_(){return this.flowState_!==SetupFlowStatus.INTRO}computeIsSetupAttemptInProgress_(){return this.setupState_===PermissionsSetupStatus.SENT_MESSAGE_TO_PHONE_AND_WAITING_FOR_RESPONSE||this.setupState_===PermissionsSetupStatus.CONNECTING||this.setupState_===PermissionsSetupStatus.CONNECTION_REQUESTED}computeIsSetupScreenLockInProgress_(){return this.flowState_===SetupFlowStatus.SET_LOCKSCREEN}computeHasCompletedSetup_(){return this.setupState_===PermissionsSetupStatus.COMPLETED_SUCCESSFULLY||this.someFeaturesHaveBeenSetupWhenCompleted_()||this.setupState_===PermissionsSetupStatus.CAMERA_ROLL_GRANTED_NOTIFICATION_REJECTED||this.setupState_===PermissionsSetupStatus.CAMERA_ROLL_REJECTED_NOTIFICATION_GRANTED}computeIsNotificationAccessProhibited_(){return this.setupState_===PermissionsSetupStatus.NOTIFICATION_ACCESS_PROHIBITED}computeDidSetupAttemptFail_(){return this.setupState_===PermissionsSetupStatus.TIMED_OUT_CONNECTING||this.setupState_===PermissionsSetupStatus.CONNECTION_DISCONNECTED||this.setupState_===PermissionsSetupStatus.NOTIFICATION_ACCESS_PROHIBITED||this.noFeatureHasBeenSetupWhenCompleted_()}someFeaturesHaveBeenSetupWhenCompleted_(){return(this.setupState_===PermissionsSetupStatus.COMPLETED_USER_REJECTED||this.setupState_===PermissionsSetupStatus.FAILED_OR_CANCELLED)&&this.completedMode_!==0}noFeatureHasBeenSetupWhenCompleted_(){return(this.setupState_===PermissionsSetupStatus.COMPLETED_USER_REJECTED||this.setupState_===PermissionsSetupStatus.FAILED_OR_CANCELLED)&&this.completedMode_===0}hasPin_(){assert(this.shadowRoot!==null);const screenLockSubpage=this.shadowRoot.getElementById("screen-lock-subpage");assert(screenLockSubpage instanceof SettingsMultideviceScreenLockSubpageElement);return screenLockSubpage.hasPin}nextPage_(){this.browserProxy_.logPhoneHubPermissionSetUpScreenAction(this.getCurrentScreen_(),PhoneHubPermissionsSetupAction.NEXT_OR_TRY_AGAIN);this.$.dialog.focus();switch(this.flowState_){case SetupFlowStatus.INTRO:this.logSetupModeMetrics_();case SetupFlowStatus.FINISHED:this.flowState_=SetupFlowStatus.WAIT_FOR_CONNECTION;case SetupFlowStatus.WAIT_FOR_CONNECTION:this.browserProxy_.attemptFeatureSetupConnection();this.setupState_=PermissionsSetupStatus.CONNECTION_REQUESTED;return;case SetupFlowStatus.SET_LOCKSCREEN:if(!this.isScreenLockEnabled_){return}if(this.isPinNumberSelected_&&!this.isPinSet_&&!this.hasPin_()){this.showSetupPinDialog_=true;this.propagatePinNumberSelected_(true);return}this.propagatePinNumberSelected_(false);this.isPasswordDialogShowing=false;break}this.startSetupProcess_()}startSetupProcess_(){if((this.showCameraRoll||this.showNotifications)&&this.combinedSetupSupported){this.browserProxy_.attemptCombinedFeatureSetup(this.showCameraRoll,this.showNotifications);this.flowState_=SetupFlowStatus.WAIT_FOR_PHONE_COMBINED;this.setupState_=PermissionsSetupStatus.CONNECTION_REQUESTED}else if(this.showNotifications&&!this.combinedSetupSupported){this.browserProxy_.attemptNotificationSetup();this.flowState_=SetupFlowStatus.WAIT_FOR_PHONE_NOTIFICATION;this.setupState_=PermissionsSetupStatus.CONNECTION_REQUESTED}else if(this.showAppStreaming){this.browserProxy_.attemptAppsSetup();this.flowState_=SetupFlowStatus.WAIT_FOR_PHONE_APPS;this.setupState_=PermissionsSetupStatus.CONNECTION_REQUESTED}}onCancelClicked_(){if(this.flowState_===SetupFlowStatus.WAIT_FOR_PHONE_NOTIFICATION){this.browserProxy_.cancelNotificationSetup()}else if(this.flowState_===SetupFlowStatus.WAIT_FOR_PHONE_APPS){this.browserProxy_.cancelAppsSetup()}else if(this.flowState_===SetupFlowStatus.WAIT_FOR_PHONE_COMBINED){this.browserProxy_.cancelCombinedFeatureSetup()}else if(this.flowState_===SetupFlowStatus.WAIT_FOR_CONNECTION){this.browserProxy_.cancelFeatureSetupConnection()}if(this.noFeatureHasBeenSetupWhenCompleted_()){this.logCompletedSetupModeMetrics_()}this.browserProxy_.logPhoneHubPermissionSetUpScreenAction(this.setupScreen_,PhoneHubPermissionsSetupAction.CANCEL);this.$.dialog.close()}onDoneOrCloseButtonClicked_(){this.browserProxy_.logPhoneHubPermissionSetUpScreenAction(this.setupScreen_,PhoneHubPermissionsSetupAction.DONE);this.$.dialog.close()}onLearnMoreClicked_(){this.browserProxy_.logPhoneHubPermissionSetUpScreenAction(this.setupScreen_,PhoneHubPermissionsSetupAction.LEARN_MORE);window.open(this.i18n("multidevicePhoneHubPermissionsLearnMoreURL"))}onPinNumberSelected_(e){e.stopPropagation();assert(typeof e.detail.isPinNumberSelected==="boolean");this.isPinNumberSelected_=e.detail.isPinNumberSelected}onSetPinDone_(){this.isPinSet_=true;this.nextPage_()}propagatePinNumberSelected_(selected){const pinNumberEvent=new CustomEvent("pin-number-selected",{bubbles:true,composed:true,detail:{isPinNumberSelected:selected}});this.dispatchEvent(pinNumberEvent)}getCurrentScreen_(){if(this.flowState_===SetupFlowStatus.INTRO){return PhoneHubPermissionsSetupFlowScreens.INTRO}if(this.flowState_===SetupFlowStatus.SET_LOCKSCREEN){return PhoneHubPermissionsSetupFlowScreens.SET_A_PIN_OR_PASSWORD}const Status=PermissionsSetupStatus;switch(this.setupState_){case Status.CONNECTION_REQUESTED:case Status.CONNECTING:return PhoneHubPermissionsSetupFlowScreens.CONNECTING;case Status.SENT_MESSAGE_TO_PHONE_AND_WAITING_FOR_RESPONSE:return PhoneHubPermissionsSetupFlowScreens.FINISH_SET_UP_ON_PHONE;case Status.COMPLETED_SUCCESSFULLY:case Status.COMPLETED_USER_REJECTED:case Status.FAILED_OR_CANCELLED:case Status.CAMERA_ROLL_GRANTED_NOTIFICATION_REJECTED:case Status.CAMERA_ROLL_REJECTED_NOTIFICATION_GRANTED:return PhoneHubPermissionsSetupFlowScreens.CONNECTED;case Status.TIMED_OUT_CONNECTING:return PhoneHubPermissionsSetupFlowScreens.CONNECTION_TIME_OUT;case Status.CONNECTION_DISCONNECTED:return PhoneHubPermissionsSetupFlowScreens.CONNECTION_ERROR;default:return PhoneHubPermissionsSetupFlowScreens.NOT_APPLICABLE}}getTitle_(){if(this.flowState_===SetupFlowStatus.INTRO){return this.i18n("multidevicePermissionsSetupAckTitle")}if(this.flowState_===SetupFlowStatus.SET_LOCKSCREEN){return this.i18n("multideviceNotificationAccessSetupScreenLockTitle")}const Status=PermissionsSetupStatus;switch(this.setupState_){case Status.CONNECTION_REQUESTED:case Status.CONNECTING:return this.i18n("multideviceNotificationAccessSetupConnectingTitle");case Status.SENT_MESSAGE_TO_PHONE_AND_WAITING_FOR_RESPONSE:case Status.COMPLETED_SUCCESSFULLY:case Status.COMPLETED_USER_REJECTED:case Status.FAILED_OR_CANCELLED:case Status.CAMERA_ROLL_GRANTED_NOTIFICATION_REJECTED:case Status.CAMERA_ROLL_REJECTED_NOTIFICATION_GRANTED:return this.getSetupCompleteTitle_();case Status.TIMED_OUT_CONNECTING:return this.i18n("multidevicePermissionsSetupCouldNotEstablishConnectionTitle");case Status.CONNECTION_DISCONNECTED:return this.i18n("multideviceNotificationAccessSetupConnectionLostWithPhoneTitle");case Status.NOTIFICATION_ACCESS_PROHIBITED:return this.i18n("multidevicePermissionsSetupNotificationAccessProhibitedTitle");default:return""}}getDescription_(){if(this.flowState_===SetupFlowStatus.INTRO){return""}if(this.flowState_===SetupFlowStatus.SET_LOCKSCREEN){return""}const Status=PermissionsSetupStatus;switch(this.setupState_){case Status.COMPLETED_USER_REJECTED:case Status.FAILED_OR_CANCELLED:return this.completedMode_===0?"":this.i18n("multidevicePermissionsSetupCompletedMoreFeaturesSummary");case Status.COMPLETED_SUCCESSFULLY:case Status.CAMERA_ROLL_GRANTED_NOTIFICATION_REJECTED:case Status.CAMERA_ROLL_REJECTED_NOTIFICATION_GRANTED:return this.setupMode_===this.completedMode_?"":this.i18n("multidevicePermissionsSetupCompletedMoreFeaturesSummary");case Status.TIMED_OUT_CONNECTING:return this.i18n("multidevicePermissionsSetupEstablishFailureSummary");case Status.CONNECTION_DISCONNECTED:return this.i18n("multidevicePermissionsSetupMaintainFailureSummary");case Status.NOTIFICATION_ACCESS_PROHIBITED:return this.i18nAdvanced("multidevicePermissionsSetupNotificationAccessProhibitedSummary");case Status.SENT_MESSAGE_TO_PHONE_AND_WAITING_FOR_RESPONSE:return this.i18n("multidevicePermissionsSetupOperationsInstructions");case Status.CONNECTION_REQUESTED:case Status.CONNECTING:return this.i18n("multidevicePermissionsSetupInstructions");default:return""}}getLiveStatus_(){if(this.setupState_===PermissionsSetupStatus.SENT_MESSAGE_TO_PHONE_AND_WAITING_FOR_RESPONSE){return"polite"}return"off"}computeShouldShowLearnMoreButton_(){return this.flowState_===SetupFlowStatus.INTRO||this.flowState_===SetupFlowStatus.SET_LOCKSCREEN||this.setupState_===PermissionsSetupStatus.SENT_MESSAGE_TO_PHONE_AND_WAITING_FOR_RESPONSE}shouldShowCancelButton_(){return this.setupState_!==PermissionsSetupStatus.COMPLETED_SUCCESSFULLY&&this.setupState_!==PermissionsSetupStatus.NOTIFICATION_ACCESS_PROHIBITED&&this.setupState_!==PermissionsSetupStatus.CAMERA_ROLL_GRANTED_NOTIFICATION_REJECTED&&this.setupState_!==PermissionsSetupStatus.CAMERA_ROLL_REJECTED_NOTIFICATION_GRANTED&&this.setupState_!==PermissionsSetupStatus.COMPLETED_USER_REJECTED&&this.setupState_!==PermissionsSetupStatus.FAILED_OR_CANCELLED||this.noFeatureHasBeenSetupWhenCompleted_()}computeShouldShowDisabledDoneButton_(){return this.setupState_===PermissionsSetupStatus.SENT_MESSAGE_TO_PHONE_AND_WAITING_FOR_RESPONSE}shouldShowTryAgainButton_(){return this.setupState_===PermissionsSetupStatus.TIMED_OUT_CONNECTING||this.setupState_===PermissionsSetupStatus.CONNECTION_DISCONNECTED||this.noFeatureHasBeenSetupWhenCompleted_()}shouldShowScreenLockInstructions_(){return this.flowState_===SetupFlowStatus.SET_LOCKSCREEN}isScreenLockRequired_(){return loadTimeData.getBoolean("isEcheAppEnabled")&&this.isPhoneScreenLockEnabled&&!this.isChromeosScreenLockEnabled&&this.showAppStreaming}getLearnMoreButtonAriaLabel_(){return this.i18n("multidevicePhoneHubLearnMoreAriaLabel")}getSetupCompleteTitle_(){switch(this.completedMode_){case NOTIFICATION_FEATURE:return this.i18n("multidevicePermissionsSetupNotificationsCompletedTitle");case CAMERA_ROLL_FEATURE:return this.i18n("multidevicePermissionsSetupCameraRollCompletedTitle");case NOTIFICATION_FEATURE|CAMERA_ROLL_FEATURE:return this.i18n("multidevicePermissionsSetupCameraRollAndNotificationsCompletedTitle");case APPS_FEATURE:return this.i18n("multidevicePermissionsSetupAppssCompletedTitle");case NOTIFICATION_FEATURE|APPS_FEATURE:return this.i18n("multidevicePermissionsSetupNotificationsAndAppsCompletedTitle");case CAMERA_ROLL_FEATURE|APPS_FEATURE:return this.i18n("multidevicePermissionsSetupCameraRollAndAppsCompletedTitle");case NOTIFICATION_FEATURE|CAMERA_ROLL_FEATURE|APPS_FEATURE:return this.i18n("multidevicePermissionsSetupAllCompletedTitle");default:return this.i18n("multidevicePermissionsSetupAppssCompletedFailedTitle")}}computePhoneHubPermissionsSetupMode_(mode){switch(mode){case NOTIFICATION_FEATURE:return PhoneHubPermissionsSetupFeatureCombination.NOTIFICATION;case CAMERA_ROLL_FEATURE:return PhoneHubPermissionsSetupFeatureCombination.CAMERA_ROLL;case NOTIFICATION_FEATURE|CAMERA_ROLL_FEATURE:return PhoneHubPermissionsSetupFeatureCombination.NOTIFICATION_AND_CAMERA_ROLL;case APPS_FEATURE:return PhoneHubPermissionsSetupFeatureCombination.MESSAGING_APP;case NOTIFICATION_FEATURE|APPS_FEATURE:return PhoneHubPermissionsSetupFeatureCombination.NOTIFICATION_AND_MESSAGING_APP;case CAMERA_ROLL_FEATURE|APPS_FEATURE:return PhoneHubPermissionsSetupFeatureCombination.MESSAGING_APP_AND_CAMERA_ROLL;case NOTIFICATION_FEATURE|CAMERA_ROLL_FEATURE|APPS_FEATURE:return PhoneHubPermissionsSetupFeatureCombination.ALL_PERMISSONS;default:return PhoneHubPermissionsSetupFeatureCombination.NONE}}onAccessStateChanged_(){if(this.flowState_===SetupFlowStatus.INTRO&&!this.showCameraRoll&&!this.showNotifications&&!this.showAppStreaming){this.$.dialog.close()}}}customElements.define(SettingsMultidevicePermissionsSetupDialogElement.is,SettingsMultidevicePermissionsSetupDialogElement);
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const NearbyShareSettingsMixin=dedupingMixin((superClass=>{class NearbyShareSettingsMixinInternal extends superClass{static get properties(){return{settings:{type:Object,notify:true,value:{}}}}static get observers(){return["settingsChanged_(settings.*)"]}constructor(...args){super(...args);this.nearbyShareSettings_=null;this.observerReceiver_=null}connectedCallback(){super.connectedCallback();this.nearbyShareSettings_=getNearbyShareSettings();this.observerReceiver_=observeNearbyShareSettings(this);Promise.all([this.nearbyShareSettings_.getEnabled(),this.nearbyShareSettings_.getDeviceName(),this.nearbyShareSettings_.getDataUsage(),this.nearbyShareSettings_.getVisibility(),this.nearbyShareSettings_.getAllowedContacts(),this.nearbyShareSettings_.isOnboardingComplete(),this.nearbyShareSettings_.getFastInitiationNotificationState(),this.nearbyShareSettings_.getIsFastInitiationHardwareSupported()]).then((results=>{this.set("settings.enabled",results[0].enabled);this.set("settings.deviceName",results[1].deviceName);this.set("settings.dataUsage",results[2].dataUsage);this.set("settings.visibility",results[3].visibility);this.set("settings.allowedContacts",results[4].allowedContacts);this.set("settings.isOnboardingComplete",results[5].completed);this.set("settings.fastInitiationNotificationState",results[6].state);this.set("settings.isFastInitiationHardwareSupported",results[7].supported);this.onSettingsRetrieved()}))}disconnectedCallback(){super.disconnectedCallback();if(this.observerReceiver_){this.observerReceiver_.$.close()}if(this.nearbyShareSettings_){this.nearbyShareSettings_.$.close()}}onEnabledChanged(enabled){this.set("settings.enabled",enabled)}onIsFastInitiationHardwareSupportedChanged(supported){this.set("settings.isFastInitiationHardwareSupported",supported)}onFastInitiationNotificationStateChanged(state){this.set("settings.fastInitiationNotificationState",state)}onDeviceNameChanged(deviceName){this.set("settings.deviceName",deviceName)}onDataUsageChanged(dataUsage){this.set("settings.dataUsage",dataUsage)}onVisibilityChanged(visibility){this.set("settings.visibility",visibility)}onAllowedContactsChanged(allowedContacts){this.set("settings.allowedContacts",allowedContacts)}onIsOnboardingCompleteChanged(isComplete){this.set("settings.isOnboardingComplete",isComplete)}settingsChanged_(change){switch(change.path){case"settings.enabled":this.nearbyShareSettings_.setEnabled(change.value);break;case"settings.fastInitiationNotificationState":this.nearbyShareSettings_.setFastInitiationNotificationState(change.value);break;case"settings.deviceName":this.nearbyShareSettings_.setDeviceName(change.value);break;case"settings.dataUsage":this.nearbyShareSettings_.setDataUsage(change.value);break;case"settings.visibility":this.nearbyShareSettings_.setVisibility(change.value);break;case"settings.allowedContacts":this.nearbyShareSettings_.setAllowedContacts(change.value);break;case"settings.isOnboardingComplete":this.nearbyShareSettings_.setIsOnboardingComplete(change.value);break}}onSettingsRetrieved(){}}return NearbyShareSettingsMixinInternal}));function getTemplate$F(){return html`<!--_html_template_start_--><style include="settings-shared">cr-policy-indicator{padding:0 var(--cr-controlled-by-spacing)}:host-context(body.revamp-wayfinding-enabled) #betterTogetherSuiteIcon,:host-context(body.revamp-wayfinding-enabled) #nearbyShareIcon{--iron-icon-fill-color:var(--cros-sys-primary)}</style>

<os-settings-animated-pages id="pages" section="[[section_]]">
  <div route-path="default">
    <settings-card header-text="$i18n{multidevicePageTitle}">
      <div id="multideviceItem" class="settings-box first two-line no-padding">
        <div class="link-wrapper" id="suiteLinkWrapper" actionable$="[[doesClickOpenSubpage_(pageContentData)]]" on-click="handleItemClick_">
          <iron-icon id="betterTogetherSuiteIcon" icon="[[getIconName(MultiDeviceFeature.BETTER_TOGETHER_SUITE)]]">
          </iron-icon>
          <div class="middle settings-box-text" aria-hidden$="[[getTextAriaHidden_(pageContentData)]]">
            <div id="multideviceLabel">
              [[getLabelText_(pageContentData)]]
            </div>
            <localized-link id="multideviceSubLabel" class="secondary" localized-string="[[getSubLabelInnerHtml_(pageContentData)]]">
            </localized-link>
          </div>
          <template is="dom-if" if="[[doesClickOpenSubpage_(pageContentData)]]" restamp>
            <cr-icon-button class="subpage-arrow" aria-labelledby="multideviceLabel" aria-describedby="multideviceSubLabel" aria-roledescription="$i18n{subpageArrowRoleDescription}">
            </cr-icon-button>
          </template>
        </div>
        <template is="dom-if" if="[[!isSuiteAllowedByPolicy(pageContentData)]]" restamp>
          <cr-policy-indicator id="suitePolicyIndicator" indicator-type="userPolicy">
          </cr-policy-indicator>
          <settings-multidevice-feature-toggle class="margin-matches-padding" toggle-aria-label="$i18n{multideviceSuiteToggleA11yLabel}" feature="[[MultiDeviceFeature.BETTER_TOGETHER_SUITE]]" page-content-data="[[pageContentData]]" deep-link-focus-id$="[[Setting.kMultiDeviceOnOff]]">
          </settings-multidevice-feature-toggle>
        </template>
        <template is="dom-if" if="[[shouldShowSeparatorAndSubpageArrow_(pageContentData)]]" restamp>
          <div class="separator"></div>
        </template>
        <template is="dom-if" if="[[shouldShowButton_(pageContentData)]]" restamp>
          <cr-button class="margin-matches-padding" on-click="handleButtonClick_" aria-label="[[getButtonA11yLabel_(pageContentData)]]" deep-link-focus-id$="[[Setting.kSetUpMultiDevice]]
                  [[Setting.kVerifyMultiDeviceSetup]]">
            [[getButtonText_(pageContentData)]]
          </cr-button>
        </template>
        <template is="dom-if" if="[[shouldShowToggle_(pageContentData)]]" restamp>
          <settings-multidevice-feature-toggle class="margin-matches-padding" toggle-aria-label="$i18n{multideviceSuiteToggleA11yLabel}" feature="[[MultiDeviceFeature.BETTER_TOGETHER_SUITE]]" page-content-data="[[pageContentData]]" deep-link-focus-id$="[[Setting.kMultiDeviceOnOff]]">
          </settings-multidevice-feature-toggle>
        </template>
      </div>
      <template is="dom-if" if="[[isNearbyShareSupported_]]" restamp>
        <div id="nearbyshare-item" class="settings-box two-line no-padding">
          <div class="link-wrapper" id="nearbyLinkWrapper" actionable$="[[!isNearbyShareDisallowedByPolicy_(pageContentData)]]" on-click="nearbyShareClick_">
            
            
              <iron-icon id="nearbyShareIcon" icon="os-settings:nearby-share">
              </iron-icon>
            
            <div class="middle settings-box-text">
              <div id="nearbyShareLabel" aria-hidden="true">
                $i18n{nearbyShareTitle}
              </div>
              <template is="dom-if" if="[[showNearbyShareOnOffString_(
                        prefs.nearby_sharing.onboarding_complete.value,
                        pageContentData)]]" restamp>
                  <template is="dom-if" if="[[prefs.nearby_sharing.enabled.value]]">
                    <div class="secondary" id="nearbyShareSecondary">
                    [[getNearbyShareDescription_(settings.visibility)]]
                  </div>
                  </template>
                  <template is="dom-if" if="[[!prefs.nearby_sharing.enabled.value]]">
                    <div class="secondary" id="nearbyShareSecondary">
                      <localized-link localized-string="$i18n{nearbyShareDescriptionOff}" link-url="$i18n{nearbyShareLearnMoreLink}">
                      </localized-link>
                    </div>
                  </template>
              </template>
              <template is="dom-if" if="[[showNearbyShareSetUpDescription_(
                        prefs.nearby_sharing.onboarding_complete.value,
                        pageContentData)]]" restamp>
                <div class="secondary" id="nearbyShareSecondary">
                  <localized-link id="setupDescription" localized-string="$i18n{nearbyShareDescription}" link-url="$i18n{nearbyShareLearnMoreLink}">
                  </localized-link>
                </div>
              </template>
            </div>
            <template is="dom-if" if="[[shouldShowNearbyShareSubpageArrow_(
                prefs.nearby_sharing.enabled.value,
                shouldEnableNearbyShareBackgroundScanningRevamp_,
                pageContentData)]]" restamp>
              <cr-icon-button id="nearbyShareSubpageArrow" class="subpage-arrow" aria-labelledby="nearbyShareLabel" aria-describedby="nearbyShareSecondary" aria-roledescription="$i18n{subpageArrowRoleDescription}">
              </cr-icon-button>
            </template>
          </div>
          <template is="dom-if" if="[[isNearbyShareDisallowedByPolicy_(pageContentData)]]" restamp>
            <cr-policy-indicator id="nearbyPolicyIndicator" indicator-type="userPolicy">
            </cr-policy-indicator>
          </template>
          <template is="dom-if" if="[[!isNearbyShareDisallowedByPolicy_(pageContentData)]]" restamp>
            <div class="separator"></div>
          </template>
          <template is="dom-if" if="[[showNearbyShareToggle_(
                    prefs.nearby_sharing.onboarding_complete.value,
                    pageContentData)]]" restamp>
            <cr-toggle id="nearbySharingToggleButton" class="margin-matches-padding" aria-label="$i18n{nearbyShareTitle}" checked="{{prefs.nearby_sharing.enabled.value}}" disabled="[[isNearbyShareDisallowedByPolicy_(pageContentData)]]" deep-link-focus-id$="[[Setting.kNearbyShareOnOff]]">
            </cr-toggle>
          </template>
          <template is="dom-if" if="[[showNearbyShareSetupButton_(
                    prefs.nearby_sharing.onboarding_complete.value,
                    pageContentData)]]" restamp>
            <cr-button class="margin-matches-padding" id="nearbySetUp" on-click="handleNearbySetUpClick_" disabled="[[isNearbyShareDisallowedByPolicy_(pageContentData)]]">
              $i18n{nearbyShareSetUpButtonTitle}
            </cr-button>
          </template>
        </div>
      </template>
    </settings-card></div>
  

  <template is="dom-if" route-path="/multidevice/features" restamp>
    <os-settings-subpage page-title="[[getMultideviceSubpageTitle_(pageContentData)]]">
      <template is="dom-if" if="[[isRevampWayfindingEnabled_]]">
        <div slot="subpage-title-extra">
          <cr-button id="forgetDeviceButton" on-click="showForgetDeviceDialog_" deep-link-focus-id$="[[Setting.kForgetPhone]]">
            $i18n{multideviceForgetDeviceDisconnect}
          </cr-button>
        </div>
      </template>
      <settings-multidevice-subpage tabindex="-1" page-content-data="[[pageContentData]]">
      </settings-multidevice-subpage>
    </os-settings-subpage>
  </template>
  <template is="dom-if" if="[[isNearbyShareSupported_]]" restamp>
    <template is="dom-if" route-path="/multidevice/nearbyshare" restamp>
      <os-settings-subpage page-title="$i18n{nearbyShareTitle}">
        <settings-nearby-share-subpage settings="{{settings}}" prefs="{{prefs}}" is-settings-retreived="[[isSettingsRetreived]]">
        </settings-nearby-share-subpage>
      </os-settings-subpage>
    </template>
  </template>
</os-settings-animated-pages>
<template is="dom-if" if="[[showPasswordPromptDialog_]]" restamp>
  <settings-password-prompt-dialog id="multidevicePasswordPrompt" on-token-obtained="onTokenObtained_">
  </settings-password-prompt-dialog>
</template>
<template is="dom-if" if="[[showPermissionsSetupDialog_(
    showPhonePermissionSetupDialog_)]]" restamp>
  <settings-multidevice-notification-access-setup-dialog is-password-dialog-showing="{{isPasswordDialogShowing_}}" on-close="onHidePhonePermissionsSetupDialog_">
  </settings-multidevice-notification-access-setup-dialog>
</template>
<template is="dom-if" if="[[showNewPermissionsSetupDialog_(
    showPhonePermissionSetupDialog_)]]" restamp>
  <settings-multidevice-permissions-setup-dialog is-password-dialog-showing="{{isPasswordDialogShowing_}}" on-pin-number-selected="onPinNumberSelected_" is-chromeos-screen-lock-enabled="[[isChromeosScreenLockEnabled_]]" is-phone-screen-lock-enabled="[[isPhoneScreenLockEnabled_]]" show-camera-roll="[[isPhoneHubCameraRollSetupRequired(
                                        pageContentData)]]" show-notifications="[[isPhoneHubNotificationsSetupRequired(
                                          pageContentData)]]" show-app-streaming="[[isPhoneHubAppsSetupRequired(
                                          pageContentData)]]" combined-setup-supported="[[isCombinedSetupSupported_(
                                          pageContentData)]]" on-close="onHidePhonePermissionsSetupDialog_">
  </settings-multidevice-permissions-setup-dialog>
</template>

<template is="dom-if" if="[[isRevampWayfindingEnabled_]]">
  <template is="dom-if" if="[[shouldShowForgetDeviceDialog_]]" restamp>
    <settings-multidevice-forget-device-dialog on-close="closeForgetDeviceDialog_">
    </settings-multidevice-forget-device-dialog>
  </template>
</template>
<!--_html_template_end_-->`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsMultidevicePageElementBase=NearbyShareSettingsMixin(MultiDeviceFeatureMixin(RouteOriginMixin(DeepLinkingMixin(PrefsMixin(WebUiListenerMixin(PolymerElement))))));class SettingsMultidevicePageElement extends SettingsMultidevicePageElementBase{static get is(){return"settings-multidevice-page"}static get template(){return getTemplate$F()}static get properties(){return{section_:{type:Number,value:Section$1.kMultiDevice,readOnly:true},authToken_:{type:Object},featureToBeEnabledOnceAuthenticated_:{type:Number,value:null},showPasswordPromptDialog_:{type:Boolean,value:false},showPhonePermissionSetupDialog_:{type:Boolean,value:false},isNearbyShareSupported_:{type:Boolean,value:function(){return loadTimeData.getBoolean("isNearbyShareSupported")}},shouldEnableNearbyShareBackgroundScanningRevamp_:{type:Boolean,computed:`computeShouldEnableNearbyShareBackgroundScanningRevamp_(\n            settings.isFastInitiationHardwareSupported)`},isSettingsRetreived:{type:Boolean,value:false},supportedSettingIds:{type:Object,value:()=>new Set([Setting.kSetUpMultiDevice,Setting.kVerifyMultiDeviceSetup,Setting.kMultiDeviceOnOff,Setting.kNearbyShareDeviceVisibility,Setting.kNearbyShareOnOff])},isPasswordDialogShowing_:{type:Boolean,value:false},isPinNumberDialogShowing_:{type:Boolean,value:false},isChromeosScreenLockEnabled_:{type:Boolean,value:function(){return loadTimeData.getBoolean("isChromeosScreenLockEnabled")}},isPhoneScreenLockEnabled_:{type:Boolean,value:function(){return loadTimeData.getBoolean("isPhoneScreenLockEnabled")}},isRevampWayfindingEnabled_:{type:Boolean,value:()=>isRevampWayfindingEnabled()},isNameEnabled_:{type:Boolean,value:()=>loadTimeData.getBoolean("isNameEnabled")},shouldShowForgetDeviceDialog_:{type:Boolean,value:false}}}constructor(){super();this.route=routes.MULTIDEVICE;this.browserProxy_=MultiDeviceBrowserProxyImpl.getInstance()}ready(){super.ready();this.addEventListener("close",this.onDialogClose_);this.addEventListener("feature-toggle-clicked",(event=>{this.onFeatureToggleClicked_(event)}));this.addEventListener("forget-device-requested",this.onForgetDeviceRequested_);this.addEventListener("permission-setup-requested",this.onPermissionSetupRequested_);this.addWebUiListener("settings.updateMultidevicePageContentData",this.onPageContentDataChanged_.bind(this));this.addWebUiListener("settings.OnEnableScreenLockChanged",this.onEnableScreenLockChanged_.bind(this));this.addWebUiListener("settings.OnScreenLockStatusChanged",this.onScreenLockStatusChanged_.bind(this));this.addFocusConfig(routes.MULTIDEVICE_FEATURES,"#multideviceItem .subpage-arrow");this.browserProxy_.getPageContentData().then((data=>this.onInitialPageContentDataFetched_(data)))}onSettingsRetrieved(){this.isSettingsRetreived=true}currentRouteChanged(newRoute,oldRoute){super.currentRouteChanged(newRoute,oldRoute);this.leaveNestedPageIfNoHostIsSet_();if(newRoute!==this.route){return}this.attemptDeepLink()}getLabelText_(){if(this.isRevampWayfindingEnabled_){return this.i18n("multideviceSetupItemHeading")}return this.pageContentData.hostDeviceName||this.i18n("multideviceSetupItemHeading")}getSubLabelInnerHtml_(){if(!this.isSuiteAllowedByPolicy()){return this.i18nAdvanced("multideviceSetupSummary")}switch(this.pageContentData.mode){case MultiDeviceSettingsMode.NO_ELIGIBLE_HOSTS:return this.i18nAdvanced("multideviceNoHostText");case MultiDeviceSettingsMode.NO_HOST_SET:return this.i18nAdvanced("multideviceSetupSummary");case MultiDeviceSettingsMode.HOST_SET_WAITING_FOR_SERVER:case MultiDeviceSettingsMode.HOST_SET_WAITING_FOR_VERIFICATION:return this.i18nAdvanced("multideviceVerificationText");case MultiDeviceSettingsMode.HOST_SET_VERIFIED:if(this.isRevampWayfindingEnabled_){assertExists(this.pageContentData.hostDeviceName);return this.pageContentData.hostDeviceName}return this.isSuiteOn()?this.i18n("multideviceEnabled"):this.i18n("multideviceDisabled");default:assertNotReached()}}getButtonText_(){switch(this.pageContentData.mode){case MultiDeviceSettingsMode.NO_HOST_SET:return this.i18n("multideviceSetupButton");case MultiDeviceSettingsMode.HOST_SET_WAITING_FOR_SERVER:case MultiDeviceSettingsMode.HOST_SET_WAITING_FOR_VERIFICATION:return this.i18n("multideviceVerifyButton");default:return""}}getButtonA11yLabel_(){switch(this.pageContentData.mode){case MultiDeviceSettingsMode.NO_HOST_SET:return this.i18n("multideviceSetupButtonA11yLabel");case MultiDeviceSettingsMode.HOST_SET_WAITING_FOR_SERVER:case MultiDeviceSettingsMode.HOST_SET_WAITING_FOR_VERIFICATION:return this.i18n("multideviceVerifyButtonA11yLabel");default:return""}}getTextAriaHidden_(){return String(this.pageContentData.mode===MultiDeviceSettingsMode.HOST_SET_VERIFIED)}shouldShowButton_(){return[MultiDeviceSettingsMode.NO_HOST_SET,MultiDeviceSettingsMode.HOST_SET_WAITING_FOR_SERVER,MultiDeviceSettingsMode.HOST_SET_WAITING_FOR_VERIFICATION].includes(this.pageContentData.mode)}shouldShowToggle_(){return this.pageContentData.mode===MultiDeviceSettingsMode.HOST_SET_VERIFIED}shouldShowSeparatorAndSubpageArrow_(){return this.pageContentData.mode!==MultiDeviceSettingsMode.NO_ELIGIBLE_HOSTS}doesClickOpenSubpage_(){return this.isHostSet()}handleItemClick_(event){if(event.composedPath()[0].tagName==="A"){event.stopPropagation();return}if(!this.isHostSet()){return}Router.getInstance().navigateTo(routes.MULTIDEVICE_FEATURES)}handleButtonClick_(event){event.stopPropagation();switch(this.pageContentData.mode){case MultiDeviceSettingsMode.NO_HOST_SET:this.browserProxy_.showMultiDeviceSetupDialog();return;case MultiDeviceSettingsMode.HOST_SET_WAITING_FOR_SERVER:case MultiDeviceSettingsMode.HOST_SET_WAITING_FOR_VERIFICATION:this.browserProxy_.retryPendingHostSetup()}}openPasswordPromptDialog_(){this.showPasswordPromptDialog_=true}onDialogClose_(event){event.stopPropagation();if(event.composedPath().some((element=>element.id==="multidevicePasswordPrompt"))){this.onPasswordPromptDialogClose_()}}onPasswordPromptDialogClose_(){assert(this.featureToBeEnabledOnceAuthenticated_!==null);if(this.authToken_){this.browserProxy_.setFeatureEnabledState(this.featureToBeEnabledOnceAuthenticated_,true,this.authToken_.token);recordSettingChange();this.authToken_=undefined}this.featureToBeEnabledOnceAuthenticated_=null;this.showPasswordPromptDialog_=false}onFeatureToggleClicked_(event){const feature=event.detail.feature;const enabled=event.detail.enabled;if(enabled&&this.isAuthenticationRequiredToEnable_(feature)){this.featureToBeEnabledOnceAuthenticated_=feature;this.openPasswordPromptDialog_();return}if(feature===MultiDeviceFeature.PHONE_HUB_NOTIFICATIONS&&enabled){switch(this.pageContentData.notificationAccessStatus){case PhoneHubFeatureAccessStatus.PROHIBITED:assertNotReached("Cannot enable notification access; prohibited");case PhoneHubFeatureAccessStatus.AVAILABLE_BUT_NOT_GRANTED:this.showPhonePermissionSetupDialog_=true;return}}this.browserProxy_.setFeatureEnabledState(feature,enabled);recordSettingChange()}isAuthenticationRequiredToEnable_(feature){if(feature===MultiDeviceFeature.SMART_LOCK){return true}if(feature!==MultiDeviceFeature.BETTER_TOGETHER_SUITE){return false}const smartLockState=this.getFeatureState(MultiDeviceFeature.SMART_LOCK);return smartLockState===MultiDeviceFeatureState.UNAVAILABLE_SUITE_DISABLED||smartLockState===MultiDeviceFeatureState.UNAVAILABLE_INSUFFICIENT_SECURITY}onForgetDeviceRequested_(){this.browserProxy_.removeHostDevice();recordSettingChange();Router.getInstance().navigateTo(routes.MULTIDEVICE)}onPermissionSetupRequested_(){this.showPhonePermissionSetupDialog_=true}leaveNestedPageIfNoHostIsSet_(){if(!this.pageContentData){return}if(routes.NEARBY_SHARE===Router.getInstance().currentRoute){return}if(routes.MULTIDEVICE!==Router.getInstance().currentRoute&&routes.MULTIDEVICE.contains(Router.getInstance().currentRoute)&&!this.isHostSet()){beforeNextRender(this,(()=>{Router.getInstance().navigateTo(routes.MULTIDEVICE)}))}}onInitialPageContentDataFetched_(newData){this.onPageContentDataChanged_(newData);const urlParams=Router.getInstance().getQueryParameters();if(urlParams.get("showPhonePermissionSetupDialog")!==null){this.showPhonePermissionSetupDialog_=true;Router.getInstance().navigateTo(routes.MULTIDEVICE_FEATURES)}}onPageContentDataChanged_(newData){this.pageContentData=newData;this.leaveNestedPageIfNoHostIsSet_()}onTokenObtained_(e){this.authToken_=e.detail}isNearbyShareDisallowedByPolicy_(){if(!this.pageContentData){return false}return this.pageContentData.isNearbyShareDisallowedByPolicy}getNearbyShareDescription_(visibility){if(visibility===undefined){return this.i18n("nearbyShareDescriptionHidden")}switch(visibility){case Visibility.kAllContacts:return this.i18n("nearbyShareDescriptionVisibleToAllContacts");case Visibility.kSelectedContacts:return this.i18n("nearbyShareDescriptionVisibleToSelectedContacts");case Visibility.kYourDevices:return this.i18n("nearbyShareDescriptionVisibleToYourDevices");case Visibility.kNoOne:case Visibility.kUnknown:return this.i18n("nearbyShareDescriptionHidden");default:assertNotReached()}}showNearbyShareToggle_(isOnboardingComplete){return isOnboardingComplete||this.isNearbyShareDisallowedByPolicy_()}showNearbyShareSetupButton_(isOnboardingComplete){return!isOnboardingComplete&&!this.isNearbyShareDisallowedByPolicy_()}showNearbyShareOnOffString_(isOnboardingComplete){return isOnboardingComplete&&!this.isNearbyShareDisallowedByPolicy_()}showNearbyShareSetUpDescription_(isOnboardingComplete){return!isOnboardingComplete||this.isNearbyShareDisallowedByPolicy_()}nearbyShareClick_(){if(this.isNearbyShareDisallowedByPolicy_()){return}const nearbyEnabled=this.getPref("nearby_sharing.enabled").value;const onboardingComplete=this.getPref("nearby_sharing.onboarding_complete").value;if(this.shouldEnableNearbyShareBackgroundScanningRevamp_){Router.getInstance().navigateTo(routes.NEARBY_SHARE);return}let params=undefined;if(!nearbyEnabled){if(onboardingComplete){this.setPrefValue("nearby_sharing.enabled",true);return}params=new URLSearchParams;params.set("entrypoint","settings");params.set("onboarding","")}Router.getInstance().navigateTo(routes.NEARBY_SHARE,params)}showPermissionsSetupDialog_(){if(!this.showPhonePermissionSetupDialog_){return false}return!this.pageContentData.isPhoneHubPermissionsDialogSupported}showNewPermissionsSetupDialog_(){if(!this.showPhonePermissionSetupDialog_){return false}return this.pageContentData.isPhoneHubPermissionsDialogSupported}onHidePhonePermissionsSetupDialog_(){if(this.isPinNumberDialogShowing_){this.isPinNumberDialogShowing_=false;return}if(this.isPasswordDialogShowing_){this.isPasswordDialogShowing_=false;return}this.showPhonePermissionSetupDialog_=false;this.shadowRoot.querySelector("settings-multidevice-subpage").focus()}onPinNumberSelected_(e){assert(typeof e.detail.isPinNumberSelected==="boolean");this.isPinNumberDialogShowing_=e.detail.isPinNumberSelected}handleNearbySetUpClick_(){const params=new URLSearchParams;params.set("onboarding","");params.set("entrypoint","settings");Router.getInstance().navigateTo(routes.NEARBY_SHARE,params)}shouldShowNearbyShareSubpageArrow_(isNearbySharingEnabled,shouldEnableNearbyShareBackgroundScanningRevamp){return(shouldEnableNearbyShareBackgroundScanningRevamp||isNearbySharingEnabled)&&!this.isNearbyShareDisallowedByPolicy_()}computeShouldEnableNearbyShareBackgroundScanningRevamp_(isHardwareSupported){return isHardwareSupported}isCombinedSetupSupported_(){return this.pageContentData.isPhoneHubFeatureCombinedSetupSupported}onEnableScreenLockChanged_(enabled){this.isChromeosScreenLockEnabled_=enabled}onScreenLockStatusChanged_(enabled){this.isPhoneScreenLockEnabled_=enabled}getMultideviceSubpageTitle_(){if(this.isRevampWayfindingEnabled_){const deviceName=this.pageContentData.hostDeviceName||"";return this.i18n("multideviceSubpageTitle",deviceName)}return this.pageContentData.hostDeviceName||this.i18n("multideviceSetupItemHeading")}showForgetDeviceDialog_(){this.shouldShowForgetDeviceDialog_=true}closeForgetDeviceDialog_(){this.shouldShowForgetDeviceDialog_=false}}customElements.define(SettingsMultidevicePageElement.is,SettingsMultidevicePageElement);function getTemplate$E(){return html`<!--_html_template_start_--><style include="settings-shared">:host-context(body.revamp-wayfinding-enabled) settings-toggle-button{--cr-icon-button-margin-end:16px;--iron-icon-fill-color:var(--cros-sys-primary)}</style>

<os-settings-animated-pages id="pages" current-route="{{currentRoute}}" section="[[section_]]">
  <div route-path="default">
    <settings-card header-text="$i18n{a11yPageTitle}">
      <settings-toggle-button id="a11yImageLabelsToggle" icon="[[rowIcons_.imageDescription]]" hidden="[[!hasScreenReader_]]" pref="{{prefs.settings.a11y.enable_accessibility_image_labels}}" on-change="onToggleAccessibilityImageLabels_" label="$i18n{accessibleImageLabelsTitle}" sub-label="$i18n{accessibleImageLabelsSubtitle}" deep-link-focus-id$="[[Setting.kGetImageDescriptionsFromGoogle]]">
      </settings-toggle-button>
      <div class="hr" hidden="[[!hasScreenReader_]]"></div>
      <settings-toggle-button id="optionsInMenuToggle" icon="[[rowIcons_.showInQuickSettings]]" label="$i18n{optionsInMenuLabel}" sub-label="$i18n{optionsInMenuDescription}" pref="{{prefs.settings.a11y.enable_menu}}" deep-link-focus-id$="[[Setting.kA11yQuickSettings]]">
      </settings-toggle-button>
      <div class="hr"></div>
      <cr-link-row id="textToSpeechSubpageTrigger" start-icon="[[rowIcons_.textToSpeech]]" label="$i18n{textToSpeechLinkTitle}" on-click="onTextToSpeechClick_" sub-label="$i18n{textToSpeechLinkDescription}" role-description="$i18n{subpageArrowRoleDescription}">
      </cr-link-row>
      <div class="hr"></div>
      <cr-link-row id="displayAndMagnificationPageTrigger" start-icon="[[rowIcons_.displayAndMagnification]]" label="$i18n{displayAndMagnificationLinkTitle}" on-click="onDisplayAndMagnificationClick_" sub-label="$i18n{displayAndMagnificationLinkDescription}" role-description="$i18n{subpageArrowRoleDescription}">
      </cr-link-row>
      <div class="hr"></div>
      <cr-link-row id="keyboardAndTextInputPageTrigger" start-icon="[[rowIcons_.keyboardAndTextInput]]" label="$i18n{keyboardAndTextInputLinkTitle}" on-click="onKeyboardAndTextInputClick_" sub-label="$i18n{keyboardAndTextInputLinkDescription}" role-description="$i18n{subpageArrowRoleDescription}">
      </cr-link-row>
      <div class="hr"></div>
      <cr-link-row id="cursorAndTouchpadPageTrigger" start-icon="[[rowIcons_.cursorAndTouchpad]]" label="$i18n{cursorAndTouchpadLinkTitle}" on-click="onCursorAndTouchpadClick_" sub-label="$i18n{cursorAndTouchpadLinkDescription}" role-description="$i18n{subpageArrowRoleDescription}">
      </cr-link-row>
      <div class="hr"></div>
      <cr-link-row id="audioAndCaptionsPageTrigger" start-icon="[[rowIcons_.audioAndCaptions]]" label="$i18n{audioAndCaptionsLinkTitle}" on-click="onAudioAndCaptionsClick_" sub-label="$i18n{audioAndCaptionsLinkDescription}" role-description="$i18n{subpageArrowRoleDescription}">
      </cr-link-row>
      <template is="dom-if" if="[[!isGuest_]]">
        <cr-link-row id="additionalFeaturesLink" class="hr" start-icon="[[rowIcons_.findMore]]" label="$i18n{additionalFeaturesTitle}" on-click="onAdditionalFeaturesClick_" external>
        </cr-link-row>
      </template>
    </settings-card>
  </div>

  <template is="dom-if" route-path="/manageAccessibility">
    <os-settings-subpage page-title="$i18n{manageAccessibilityFeatures}" hide-back-button>
      <settings-toggle-button id="a11yImageLabelsToggle" hidden="[[!hasScreenReader_]]" pref="{{prefs.settings.a11y.enable_accessibility_image_labels}}" on-change="onToggleAccessibilityImageLabels_" label="$i18n{accessibleImageLabelsTitle}" sub-label="$i18n{accessibleImageLabelsSubtitle}" deep-link-focus-id$="[[Setting.kGetImageDescriptionsFromGoogle]]">
      </settings-toggle-button>
      <div class="hr" hidden="[[!hasScreenReader_]]"></div>
      <cr-link-row id="textToSpeechSubpageTrigger" label="$i18n{textToSpeechLinkTitle}" on-click="onTextToSpeechClick_" sub-label="$i18n{textToSpeechLinkDescription}" role-description="$i18n{subpageArrowRoleDescription}">
      </cr-link-row>
      <div class="hr"></div>
      <cr-link-row id="displayAndMagnificationPageTrigger" label="$i18n{displayAndMagnificationLinkTitle}" on-click="onDisplayAndMagnificationClick_" sub-label="$i18n{displayAndMagnificationLinkDescription}" role-description="$i18n{subpageArrowRoleDescription}">
      </cr-link-row>
      <div class="hr"></div>
      <cr-link-row id="keyboardAndTextInputPageTrigger" label="$i18n{keyboardAndTextInputLinkTitle}" on-click="onKeyboardAndTextInputClick_" sub-label="$i18n{keyboardAndTextInputLinkDescription}" role-description="$i18n{subpageArrowRoleDescription}">
      </cr-link-row>
      <div class="hr"></div>
      <cr-link-row id="cursorAndTouchpadPageTrigger" label="$i18n{cursorAndTouchpadLinkTitle}" on-click="onCursorAndTouchpadClick_" sub-label="$i18n{cursorAndTouchpadLinkDescription}" role-description="$i18n{subpageArrowRoleDescription}">
      </cr-link-row>
      <div class="hr"></div>
      <cr-link-row id="audioAndCaptionsPageTrigger" label="$i18n{audioAndCaptionsLinkTitle}" on-click="onAudioAndCaptionsClick_" sub-label="$i18n{audioAndCaptionsLinkDescription}" role-description="$i18n{subpageArrowRoleDescription}">
      </cr-link-row>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/textToSpeech">
    <os-settings-subpage page-title="$i18n{textToSpeechLinkTitle}">
      <settings-text-to-speech-subpage prefs="{{prefs}}" has-screen-reader="[[hasScreenReader_]]">
      </settings-text-to-speech-subpage>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/textToSpeech/chromeVox">
    <os-settings-subpage page-title="$i18n{chromeVoxLabel}">
      <settings-chromevox-subpage prefs="{{prefs}}">
      </settings-chromevox-subpage>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/textToSpeech/selectToSpeak">
    <os-settings-subpage page-title="$i18n{selectToSpeakLinkTitle}">
      <settings-select-to-speak-subpage prefs="{{prefs}}">
      </settings-select-to-speak-subpage>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/displayAndMagnification">
    <os-settings-subpage page-title="$i18n{displayAndMagnificationLinkTitle}">
      <settings-display-and-magnification-subpage prefs="{{prefs}}">
      </settings-display-and-magnification-subpage>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/keyboardAndTextInput">
    <os-settings-subpage page-title="$i18n{keyboardAndTextInputLinkTitle}">
      <settings-keyboard-and-text-input-page prefs="{{prefs}}">
      </settings-keyboard-and-text-input-page>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/cursorAndTouchpad">
    <os-settings-subpage page-title="$i18n{cursorAndTouchpadLinkTitle}">
      <settings-cursor-and-touchpad-page prefs="{{prefs}}">
      </settings-cursor-and-touchpad-page>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/audioAndCaptions">
    <os-settings-subpage page-title="$i18n{audioAndCaptionsLinkTitle}">
      <settings-audio-and-captions-page prefs="{{prefs}}">
      </settings-audio-and-captions-page>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/manageAccessibility/tts">
    <os-settings-subpage page-title="$i18n{manageTtsSettings}">
      <settings-tts-voice-subpage prefs="{{prefs}}">
      </settings-tts-voice-subpage>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/manageAccessibility/captions">
    <os-settings-subpage page-title="$i18n{captionsTitle}">
      <settings-captions prefs="{{prefs}}"></settings-captions>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/manageAccessibility/switchAccess">
    <os-settings-subpage page-title="$i18n{manageSwitchAccessSettings}">
      <settings-switch-access-subpage prefs="{{prefs}}">
      </settings-switch-access-subpage>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/manageAccessibility/faceGazeCursor">
    <os-settings-subpage page-title="$i18n{facegazeCursorSettings}">
      <settings-facegaze-cursor-subpage prefs="{{prefs}}">
      </settings-facegaze-cursor-subpage>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/manageAccessibility/faceGazeExpressions">
    <os-settings-subpage page-title="$i18n{facegazeFacialExpressionSettings}">
      <settings-facegaze-facial-expression-subpage prefs="{{prefs}}">
      </settings-facegaze-facial-expression-subpage>
    </os-settings-subpage>
  </template>
</os-settings-animated-pages>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let instance$5=null;class OsA11yPageBrowserProxyImpl{static getInstance(){return instance$5||(instance$5=new OsA11yPageBrowserProxyImpl)}static setInstanceForTesting(obj){instance$5=obj}confirmA11yImageLabels(){chrome.send("confirmA11yImageLabels")}getScreenReaderState(){return sendWithPromise("getScreenReaderState")}}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const OsSettingsA11yPageElementBase=DeepLinkingMixin(RouteOriginMixin(PrefsMixin(WebUiListenerMixin(PolymerElement))));class OsSettingsA11yPageElement extends OsSettingsA11yPageElementBase{static get is(){return"os-settings-a11y-page"}static get template(){return getTemplate$E()}static get properties(){return{currentRoute:{type:Object,notify:true},section_:{type:Number,value:Section$1.kAccessibility,readOnly:true},hasScreenReader_:{type:Boolean,value:false},isKioskModeActive_:{type:Boolean,value(){return loadTimeData.getBoolean("isKioskModeActive")}},isGuest_:{type:Boolean,value(){return loadTimeData.getBoolean("isGuest")}},supportedSettingIds:{type:Object,value:()=>new Set([Setting.kA11yQuickSettings,Setting.kGetImageDescriptionsFromGoogle,Setting.kLiveCaption])},rowIcons_:{type:Object,value(){if(isRevampWayfindingEnabled()){return{imageDescription:"os-settings:a11y-image-description",showInQuickSettings:"os-settings:accessibility-revamp",textToSpeech:"os-settings:text-to-speech",displayAndMagnification:"os-settings:zoom-in",keyboardAndTextInput:"os-settings:a11y-keyboard-and-text-input",cursorAndTouchpad:"os-settings:cursor-click",audioAndCaptions:"os-settings:a11y-hearing",findMore:"os-settings:a11y-find-more"}}return{imageDescription:"",showInQuickSettings:"",textToSpeech:"",displayAndMagnification:"",keyboardAndTextInput:"",cursorAndTouchpad:"",audioAndCaptions:"",findMore:""}}}}}constructor(){super();this.route=routes.OS_ACCESSIBILITY;this.browserProxy_=OsA11yPageBrowserProxyImpl.getInstance()}ready(){super.ready();if(routes.A11Y_TEXT_TO_SPEECH){this.addFocusConfig(routes.A11Y_TEXT_TO_SPEECH,"#textToSpeechSubpageTrigger")}if(routes.A11Y_DISPLAY_AND_MAGNIFICATION){this.addFocusConfig(routes.A11Y_DISPLAY_AND_MAGNIFICATION,"#displayAndMagnificationPageTrigger")}if(routes.A11Y_KEYBOARD_AND_TEXT_INPUT){this.addFocusConfig(routes.A11Y_KEYBOARD_AND_TEXT_INPUT,"#keyboardAndTextInputPageTrigger")}if(routes.A11Y_CURSOR_AND_TOUCHPAD){this.addFocusConfig(routes.A11Y_CURSOR_AND_TOUCHPAD,"#cursorAndTouchpadPageTrigger")}if(routes.A11Y_AUDIO_AND_CAPTIONS){this.addFocusConfig(routes.A11Y_AUDIO_AND_CAPTIONS,"#audioAndCaptionsPageTrigger")}}connectedCallback(){super.connectedCallback();const updateScreenReaderState=hasScreenReader=>{this.hasScreenReader_=hasScreenReader};this.browserProxy_.getScreenReaderState().then(updateScreenReaderState);this.addWebUiListener("screen-reader-state-changed",updateScreenReaderState)}currentRouteChanged(newRoute,prevRoute){super.currentRouteChanged(newRoute,prevRoute);if(newRoute===this.route){this.attemptDeepLink()}}onToggleAccessibilityImageLabels_(){const a11yImageLabelsOn=this.$.a11yImageLabelsToggle.checked;if(a11yImageLabelsOn){this.browserProxy_.confirmA11yImageLabels()}}onTextToSpeechClick_(){Router.getInstance().navigateTo(routes.A11Y_TEXT_TO_SPEECH)}onDisplayAndMagnificationClick_(){Router.getInstance().navigateTo(routes.A11Y_DISPLAY_AND_MAGNIFICATION)}onKeyboardAndTextInputClick_(){Router.getInstance().navigateTo(routes.A11Y_KEYBOARD_AND_TEXT_INPUT)}onCursorAndTouchpadClick_(){Router.getInstance().navigateTo(routes.A11Y_CURSOR_AND_TOUCHPAD)}onAudioAndCaptionsClick_(){Router.getInstance().navigateTo(routes.A11Y_AUDIO_AND_CAPTIONS)}onAdditionalFeaturesClick_(){window.open("https://chrome.google.com/webstore/category/collection/3p_accessibility_extensions")}}customElements.define(OsSettingsA11yPageElement.is,OsSettingsA11yPageElement);function getTemplate$D(){return html`<!--_html_template_start_--><style include="settings-shared os-settings-icons">#pairNewDeviceBtn{margin-inline-end:20px}:host-context(body.revamp-wayfinding-enabled) #statusIcon{--iron-icon-fill-color:var(--cros-sys-primary)}</style>
<template is="dom-if" if="[[!isSecondaryUser_]]">
  <div id="bluetoothSummary" class="settings-box two-line first no-padding">
    <div class="link-wrapper" actionable on-click="onWrapperClick_">
      <iron-icon id="statusIcon" icon="[[getBluetoothStatusIconName_(
            systemProperties.*, isBluetoothToggleOn_)]]">
      </iron-icon>
      <div id="bluetoothPageTitle" class="middle settings-box-text" aria-hidden="true">
        $i18n{bluetoothPageTitle}
        <div class="secondary" id="bluetoothSecondaryLabel">
          [[getSecondaryLabel_(
            LabelType.DISPLAYED_TEXT, systemProperties.*, isBluetoothToggleOn_)]]
        </div>
      </div>
      <template is="dom-if" if="[[shouldShowSubpageArrow_(
            systemProperties.*, isBluetoothToggleOn_)]]" restamp>
        <cr-icon-button id="arrowIconButton" class="subpage-arrow layout end" on-click="onSubpageArrowClick_" aria-label="$i18n{bluetoothPageTitle}" aria-description$="[[getSecondaryLabel_(
              LabelType.A11Y, systemProperties.*, isBluetoothToggleOn)]]" aria-roledescription="$i18n{subpageArrowRoleDescription}">
        </cr-icon-button>
      </template>
    </div>
    <div class="separator"></div>
    <cr-toggle id="enableBluetoothToggle" class="margin-matches-padding" checked="{{isBluetoothToggleOn_}}" on-change="onBluetoothToggleChange_" disabled$="[[isToggleDisabled_(systemProperties.systemState)]]" aria-label="$i18n{bluetoothToggleA11yLabel}">
    </cr-toggle>
  </div>

  <template is="dom-if" if="[[shouldShowPairNewDevice_(systemProperties.*)]]" restamp>
    <div id="pairNewDevice" class="settings-box no-padding" actionable on-click="onPairNewDeviceBtnClick_">
      <div id="pairNewDeviceLabel" class="middle settings-box-text" aria-hidden="true">
        $i18n{bluetoothPairNewDevice}
      </div>
      <cr-icon-button id="pairNewDeviceBtn" on-click="onPairNewDeviceBtnClick_" class="icon-pair-bluetooth layout end" aria-labelledby="pairNewDeviceLabel">
      </cr-icon-button>
    </div>
  </template>
</template>

<template is="dom-if" if="[[isSecondaryUser_]]">
  <div id="bluetoothSummarySeconday" class="settings-box two-line">
    <iron-icon class="policy" icon="cr:group"></iron-icon>
    <div id="bluetoothSummarySecondayText" class="middle settings-box-text">
      [[i18n('bluetoothPrimaryUserControlled', primaryUserEmail_)]]
    </div>
  </div>
</template>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var LabelType;(function(LabelType){LabelType[LabelType["A11Y"]=1]="A11Y";LabelType[LabelType["DISPLAYED_TEXT"]=2]="DISPLAYED_TEXT"})(LabelType||(LabelType={}));const SettingsBluetoothSummaryElementBase=RouteOriginMixin(I18nMixin(PolymerElement));class SettingsBluetoothSummaryElement extends SettingsBluetoothSummaryElementBase{static get is(){return"os-settings-bluetooth-summary"}static get template(){return getTemplate$D()}static get properties(){return{systemProperties:{type:Object,observer:"onSystemPropertiesChanged_"},isBluetoothToggleOn_:{type:Boolean,observer:"onBluetoothToggleChanged_"},LabelType:{type:Object,value:LabelType},isSecondaryUser_:{type:Boolean,value(){return loadTimeData.getBoolean("isSecondaryUser")},readOnly:true},primaryUserEmail_:{type:String,value(){return loadTimeData.getString("primaryUserEmail")},readOnly:true}}}constructor(){super();this.route=routes.BLUETOOTH;this.browserProxy_=OsBluetoothDevicesSubpageBrowserProxyImpl.getInstance()}ready(){super.ready();this.addFocusConfig(routes.BLUETOOTH_DEVICES,".subpage-arrow")}currentRouteChanged(newRoute,oldRoute){super.currentRouteChanged(newRoute,oldRoute);if(newRoute===this.route){this.browserProxy_.showBluetoothRevampHatsSurvey()}}onSystemPropertiesChanged_(){this.isBluetoothToggleOn_=this.systemProperties.systemState===BluetoothSystemState.kEnabled||this.systemProperties.systemState===BluetoothSystemState.kEnabling}onBluetoothToggleChanged_(_newValue,oldValue){if(oldValue===undefined){return}if(this.isToggleDisabled_()){return}getBluetoothConfig().setBluetoothEnabledState(this.isBluetoothToggleOn_)}isToggleDisabled_(){if(!this.systemProperties){return false}return this.systemProperties.systemState===BluetoothSystemState.kUnavailable}getSecondaryLabel_(labelType){if(!this.isBluetoothToggleOn_){return this.i18n("bluetoothSummaryPageOff")}const connectedDevices=this.getConnectedDevices_();if(!connectedDevices.length){return this.i18n("bluetoothSummaryPageOn")}const isA11yLabel=labelType===LabelType.A11Y;const firstConnectedDeviceName=getDeviceName(connectedDevices[0]);if(connectedDevices.length===1){return isA11yLabel?this.i18n("bluetoothSummaryPageConnectedA11yOneDevice",firstConnectedDeviceName):firstConnectedDeviceName}if(connectedDevices.length===2){const secondConnectedDeviceName=getDeviceName(connectedDevices[1]);return isA11yLabel?this.i18n("bluetoothSummaryPageConnectedA11yTwoDevices",firstConnectedDeviceName,secondConnectedDeviceName):this.i18n("bluetoothSummaryPageTwoDevicesDescription",firstConnectedDeviceName,secondConnectedDeviceName)}return isA11yLabel?this.i18n("bluetoothSummaryPageConnectedA11yTwoOrMoreDevices",firstConnectedDeviceName,connectedDevices.length-1):this.i18n("bluetoothSummaryPageTwoOrMoreDevicesDescription",firstConnectedDeviceName,connectedDevices.length-1)}getConnectedDevices_(){const pairedDevices=this.systemProperties.pairedDevices;if(!pairedDevices){return[]}return pairedDevices.filter((device=>device.deviceProperties.connectionState===DeviceConnectionState.kConnected))}getBluetoothStatusIconName_(){if(!this.isBluetoothToggleOn_){return"os-settings:bluetooth-disabled"}if(this.getConnectedDevices_().length){return"os-settings:bluetooth-connected"}return"cr:bluetooth"}shouldShowSubpageArrow_(){if(this.isToggleDisabled_()){return false}return this.isBluetoothToggleOn_}onSubpageArrowClick_(e){this.navigateToBluetoothDevicesSubpage_();e.stopPropagation()}navigateToBluetoothDevicesSubpage_(){Router.getInstance().navigateTo(routes.BLUETOOTH_DEVICES)}onWrapperClick_(){if(this.isToggleDisabled_()){return}if(this.systemProperties.systemState===BluetoothSystemState.kDisabled||this.systemProperties.systemState===BluetoothSystemState.kDisabling){this.isBluetoothToggleOn_=true;return}this.navigateToBluetoothDevicesSubpage_()}onPairNewDeviceBtnClick_(){this.dispatchEvent(new CustomEvent("start-pairing",{bubbles:true,composed:true}))}onBluetoothToggleChange_(){getInstance().announce(this.isBluetoothToggleOn_?this.i18n("bluetoothEnabledA11YLabel"):this.i18n("bluetoothDisabledA11YLabel"));this.browserProxy_.showBluetoothRevampHatsSurvey()}shouldShowPairNewDevice_(){if(!this.systemProperties){return false}return this.systemProperties.systemState===BluetoothSystemState.kEnabled}}customElements.define(SettingsBluetoothSummaryElement.is,SettingsBluetoothSummaryElement);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const IronRangeBehavior={properties:{value:{type:Number,value:0,notify:true,reflectToAttribute:true},min:{type:Number,value:0,notify:true},max:{type:Number,value:100,notify:true},step:{type:Number,value:1,notify:true},ratio:{type:Number,value:0,readOnly:true,notify:true}},observers:["_update(value, min, max, step)"],_calcRatio:function(value){return(this._clampValue(value)-this.min)/(this.max-this.min)},_clampValue:function(value){return Math.min(this.max,Math.max(this.min,this._calcStep(value)))},_calcStep:function(value){value=parseFloat(value);if(!this.step){return value}var numSteps=Math.round((value-this.min)/this.step);if(this.step<1){return numSteps/(1/this.step)+this.min}else{return numSteps*this.step+this.min}},_validateValue:function(){var v=this._clampValue(this.value);this.value=this.oldValue=isNaN(v)?this.oldValue:v;return this.value!==v},_update:function(){this._validateValue();this._setRatio(this._calcRatio(this.value)*100)}};
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
        width: 200px;
        position: relative;
        overflow: hidden;
      }

      :host([hidden]), [hidden] {
        display: none !important;
      }

      #progressContainer {
        position: relative;
      }

      #progressContainer,
      /* the stripe for the indeterminate animation*/
      .indeterminate::after {
        height: var(--paper-progress-height, 4px);
      }

      #primaryProgress,
      #secondaryProgress,
      .indeterminate::after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }

      #progressContainer,
      .indeterminate::after {
        background: var(--paper-progress-container-color, var(--google-grey-300));
      }

      :host(.transiting) #primaryProgress,
      :host(.transiting) #secondaryProgress {
        transition-property: transform;

        /* Duration */
        transition-duration: var(--paper-progress-transition-duration, 0.08s);

        /* Timing function */
        transition-timing-function: var(--paper-progress-transition-timing-function, ease);

        /* Delay */
        transition-delay: var(--paper-progress-transition-delay, 0s);
      }

      #primaryProgress,
      #secondaryProgress {
        transform-origin: left center;
        transform: scaleX(0);
        will-change: transform;
      }

      #primaryProgress {
        background: var(--paper-progress-active-color, var(--google-green-500));
      }

      #secondaryProgress {
        background: var(--paper-progress-secondary-color, var(--google-green-100));
      }

      :host([disabled]) #primaryProgress {
        background: var(--paper-progress-disabled-active-color, var(--google-grey-500));
      }

      :host([disabled]) #secondaryProgress {
        background: var(--paper-progress-disabled-secondary-color, var(--google-grey-300));
      }

      :host(:not([disabled])) #primaryProgress.indeterminate {
        transform-origin: right center;
        animation: indeterminate-bar var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
      }

      :host(:not([disabled])) #primaryProgress.indeterminate::after {
        content: "";
        transform-origin: center center;

        animation: indeterminate-splitter var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
      }

      @-webkit-keyframes indeterminate-bar {
        0% {
        }
        50% {
        }
        75% {
        }
        100% {
        }
      }

      @-webkit-keyframes indeterminate-splitter {
        0% {
        }
        30% {
        }
        90% {
        }
        100% {
        }
      }

      @keyframes indeterminate-bar {
        0% {
          transform: scaleX(1) translateX(-100%);
        }
        50% {
          transform: scaleX(1) translateX(0%);
        }
        75% {
          transform: scaleX(1) translateX(0%);
          animation-timing-function: cubic-bezier(.28,.62,.37,.91);
        }
        100% {
          transform: scaleX(0) translateX(0%);
        }
      }

      @keyframes indeterminate-splitter {
        0% {
          transform: scaleX(.75) translateX(-125%);
        }
        30% {
          transform: scaleX(.75) translateX(-125%);
          animation-timing-function: cubic-bezier(.42,0,.6,.8);
        }
        90% {
          transform: scaleX(.75) translateX(125%);
        }
        100% {
          transform: scaleX(.75) translateX(125%);
        }
      }
    </style>

    <div id="progressContainer">
      <div id="secondaryProgress" hidden\$="[[_hideSecondaryProgress(secondaryRatio)]]"></div>
      <div id="primaryProgress"></div>
    </div>
`,is:"paper-progress",behaviors:[IronRangeBehavior],properties:{secondaryProgress:{type:Number,value:0},secondaryRatio:{type:Number,value:0,readOnly:true},indeterminate:{type:Boolean,value:false,observer:"_toggleIndeterminate"},disabled:{type:Boolean,value:false,reflectToAttribute:true,observer:"_disabledChanged"}},observers:["_progressChanged(secondaryProgress, value, min, max, indeterminate)"],hostAttributes:{role:"progressbar"},_toggleIndeterminate:function(indeterminate){this.toggleClass("indeterminate",indeterminate,this.$.primaryProgress)},_transformProgress:function(progress,ratio){var transform="scaleX("+ratio/100+")";progress.style.transform=progress.style.webkitTransform=transform},_mainRatioChanged:function(ratio){this._transformProgress(this.$.primaryProgress,ratio)},_progressChanged:function(secondaryProgress,value,min,max,indeterminate){secondaryProgress=this._clampValue(secondaryProgress);value=this._clampValue(value);var secondaryRatio=this._calcRatio(secondaryProgress)*100;var mainRatio=this._calcRatio(value)*100;this._setSecondaryRatio(secondaryRatio);this._transformProgress(this.$.secondaryProgress,secondaryRatio);this._transformProgress(this.$.primaryProgress,mainRatio);this.secondaryProgress=secondaryProgress;if(indeterminate){this.removeAttribute("aria-valuenow")}else{this.setAttribute("aria-valuenow",value)}this.setAttribute("aria-valuemin",min);this.setAttribute("aria-valuemax",max)},_disabledChanged:function(disabled){this.setAttribute("aria-disabled",disabled?"true":"false")},_hideSecondaryProgress:function(secondaryRatio){return secondaryRatio===0}});function getTemplate$C(){return html`<!--_html_template_start_--><style include="iron-positioning cros-color-overrides">
  :host ::slotted([slot='page-body']) {
    color: var(--cr-primary-text-color);
    height: 292px;
  }

  paper-progress {
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    --paper-progress-active-color: var(--cros-icon-color-prominent);
    --paper-progress-container-color: rgba(var(--cros-icon-color-prominent-rgb),
                                           var(--cros-second-tone-opacity));
  }

  :host-context(body.jelly-enabled) paper-progress {
    --paper-progress-active-color: var(--cros-color-primary);
    --paper-progress-container-color: var(--cros-highlight-color);
  }

  #buttonBar {
    align-self: flex-end;
    margin-top: 30px;
  }

  #container {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0 8px 8px 8px;
  }

  #title {
    color: var(--cr-primary-text-color);
    font-weight: normal;
    line-height: 24px;
    margin: 24px 0 8px 0;
  }

  .cancel-button {
    margin-inline-end: 0;
  }

  .action-button {
    margin-inline-end: 0;
    margin-inline-start: 8px;
  }
</style>
<div id="container">
  <template is="dom-if" if="[[showScanProgress]]" restamp>
    <paper-progress indeterminate>
    </paper-progress>
  </template>
  <h3 id="title">[[i18n('bluetoothPairNewDevice')]]</h3>
  <slot name="page-body" id="pageBody"></slot>
  <div id="buttonBar">
    <template  is="dom-if"
        if="[[shouldShowButton_(ButtonName.CANCEL, buttonBarState.*)]]" restamp>
      <cr-button
          id="cancel"
          class="cancel-button"
          on-click="onCancelClick_"
          disabled$="[[isButtonDisabled_(ButtonName.CANCEL, buttonBarState.*)]]">
        [[i18n('cancel')]]
      </cr-button>
    </template>
    <template is="dom-if"
        if="[[shouldShowButton_(ButtonName.PAIR, buttonBarState.*)]]" restamp>
      <cr-button
          id="pair"
          class="action-button"
          on-click="onPairClick_"
          disabled$="[[isButtonDisabled_(ButtonName.PAIR, buttonBarState.*)]]">
        [[i18n('bluetoothPair')]]
      </cr-button>
    </template>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsBluetoothBasePageElementBase=I18nMixin(PolymerElement);class SettingsBluetoothBasePageElement extends SettingsBluetoothBasePageElementBase{static get is(){return"bluetooth-base-page"}static get template(){return getTemplate$C()}static get properties(){return{buttonBarState:{type:Object,value:{cancel:ButtonState$1.ENABLED,pair:ButtonState$1.HIDDEN}},showScanProgress:{type:Boolean,value:false},ButtonName:{type:Object,value:ButtonName},focusDefault:{type:Boolean,value:false}}}connectedCallback(){super.connectedCallback();afterNextRender(this,(()=>this.focus()))}focus(){super.focus();if(!this.focusDefault){return}const buttons=this.shadowRoot.querySelectorAll("cr-button");for(let i=buttons.length-1;i>=0;i--){const button=buttons.item(i);if(!button.disabled){focusWithoutInk(button);return}}}onCancelClick_(){this.dispatchEvent(new CustomEvent("cancel",{bubbles:true,composed:true}))}onPairClick_(){this.dispatchEvent(new CustomEvent("pair",{bubbles:true,composed:true}))}shouldShowButton_(buttonName){const state=this.getButtonBarState_(buttonName);return state!==ButtonState$1.HIDDEN}isButtonDisabled_(buttonName){const state=this.getButtonBarState_(buttonName);return state===ButtonState$1.DISABLED}getButtonBarState_(buttonName){switch(buttonName){case ButtonName.CANCEL:return this.buttonBarState.cancel;case ButtonName.PAIR:return this.buttonBarState.pair;default:return ButtonState$1.ENABLED}}}customElements.define(SettingsBluetoothBasePageElement.is,SettingsBluetoothBasePageElement);function getTemplate$B(){return html`<!--_html_template_start_--><style include="cr-shared-style">
  :host([pairing-failed_]) #secondaryLabel {
    color: var(--cros-text-color-alert);
  }

  bluetooth-icon {
    align-self: center;
    justify-self: center;
  }

  #deviceName {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 404px;
  }

  #container:hover {
    background-color: var(--cr-hover-background-color);
    cursor: pointer;
  }

  .text-row {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-inline-start: 24px;
    max-height: 48px;
  }

  .cr-row {
    padding: 0;
  }

  .secondary {
    color: var(--cros-text-color-disabled);
    font-size: 11px;
  }

</style>
<div id="wrapper" focus-row-container>
  <div id="container"
      class="cr-row continuation"
      actionable
      focus-row-control
      selectable
      aria-label$="[[getAriaLabel_(device.*, itemIndex, listSize)]]"
      role="button"
      focus-type="rowWrapper"
      on-keydown="onKeydown_"
      on-click="onSelected_">
    <bluetooth-icon device="[[device]]"></bluetooth-icon>
    <div aria-live="polite"
        aria-label="[[getSecondaryAriaLabel_(
          secondaryLabel_, pairingFailed_, device.*)]]"
        class="text-row">
      <div id="deviceName" aria-hidden="true">
        [[getDeviceName_(device.*)]]
      </div>
      <div id="secondaryLabel"
          aria-hidden="true"
          class="secondary">
        [[secondaryLabel_]]
      </div>
    </div>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsBluetoothPairingDeviceItemElementBase=FocusRowMixin(I18nMixin(PolymerElement));class SettingsBluetoothPairingDeviceItemElement extends SettingsBluetoothPairingDeviceItemElementBase{static get is(){return"bluetooth-pairing-device-item"}static get template(){return getTemplate$B()}static get properties(){return{device:Object,deviceItemState:{type:Object,value:DeviceItemState.DEFAULT},itemIndex:Number,listSize:Number,secondaryLabel_:{type:String,computed:"computeSecondaryLabel_(deviceItemState)"},pairingFailed_:{reflectToAttribute:true,type:Boolean,computed:"computePairingFailed_(deviceItemState)"}}}focus(){this.$.container.focus({preventScroll:true})}computePairingFailed_(){return this.deviceItemState===DeviceItemState.FAILED}getDeviceName_(){if(!this.device){return""}return mojoString16ToString(this.device.publicName)}onSelected_(event){this.dispatchPairDeviceEvent_();event.stopPropagation()}onKeydown_(event){if(event.key!=="Enter"&&event.key!==" "){return}this.dispatchPairDeviceEvent_();event.stopPropagation()}computeSecondaryLabel_(){switch(this.deviceItemState){case DeviceItemState.FAILED:return this.i18n("bluetoothPairingFailed");case DeviceItemState.PAIRING:return this.i18n("bluetoothPairing");case DeviceItemState.DEFAULT:return"";default:return""}}dispatchPairDeviceEvent_(){this.dispatchEvent(new CustomEvent("pair-device",{bubbles:true,composed:true,detail:{device:this.device}}))}getAriaLabel_(){if(!this.device){return""}return this.i18n("bluetoothA11yDeviceName",this.itemIndex+1,this.listSize,this.getDeviceName_())+" "+this.i18n(this.getA11yDeviceTypeTextName_())}getA11yDeviceTypeTextName_(){switch(this.device.deviceType){case DeviceType.kUnknown:return"bluetoothA11yDeviceTypeUnknown";case DeviceType.kComputer:return"bluetoothA11yDeviceTypeComputer";case DeviceType.kPhone:return"bluetoothA11yDeviceTypePhone";case DeviceType.kHeadset:return"bluetoothA11yDeviceTypeHeadset";case DeviceType.kVideoCamera:return"bluetoothA11yDeviceTypeVideoCamera";case DeviceType.kGameController:return"bluetoothA11yDeviceTypeGameController";case DeviceType.kKeyboard:return"bluetoothA11yDeviceTypeKeyboard";case DeviceType.kKeyboardMouseCombo:return"bluetoothA11yDeviceTypeKeyboardMouseCombo";case DeviceType.kMouse:return"bluetoothA11yDeviceTypeMouse";case DeviceType.kTablet:return"bluetoothA11yDeviceTypeTablet";default:return""}}getSecondaryAriaLabel_(){const deviceName=this.getDeviceName_();switch(this.deviceItemState){case DeviceItemState.FAILED:return this.i18n("bluetoothPairingDeviceItemSecondaryErrorA11YLabel",deviceName);case DeviceItemState.PAIRING:return this.i18n("bluetoothPairingDeviceItemSecondaryPairingA11YLabel",deviceName);case DeviceItemState.DEFAULT:return"";default:assertNotReached()}}}customElements.define(SettingsBluetoothPairingDeviceItemElement.is,SettingsBluetoothPairingDeviceItemElement);function getTemplate$A(){return html`<!--_html_template_start_--><style include="cr-shared-style">
  localized-link,
  #learn-more-description {
    color: var(--cros-text-color-secondary);
  }

  #container {
    height: 200px;
  }

  #deviceListTitle {
    color: var(--cros-text-color-secondary);
    font-size: 14px;
    font-weight: 500;
    margin: 20px 0 8px 0;
  }
</style>
<bluetooth-base-page
    show-scan-progress="[[isBluetoothEnabled]]"
    button-bar-state="[[buttonBarState_]]">
  <div slot="page-body" id="pageBody">
    <template is="dom-if" if="[[!shouldOmitLinks]]" restamp>
      <localized-link
          localized-string="[[i18nAdvanced('bluetoothPairingLearnMoreLabel')]]">
      </localized-link>
    </template>
    <template is="dom-if" if="[[shouldOmitLinks]]" restamp>
      <div id="learn-more-description" aria-live="polite">
        [[i18n('bluetoothPairingDescription')]]
      </div>
    </template>
    <h2 id="deviceListTitle" aria-live="polite">
      [[getDeviceListTitle_(devices.*, isBluetoothEnabled, devicePendingPairing.*)]]
    </h2>
    <template  is="dom-if" if="[[shouldShowDeviceList_(devices.*,
        isBluetoothEnabled)]]" restamp>
      <div id="container" class="layout vertical flex" scrollable
          no-bottom-scroll-border>
          <iron-list items="[[devices]]"
              preserve-focus>
            <template>
              <bluetooth-pairing-device-item
                  item="[[item]]"
                  device="[[item]]"
                  device-item-state="[[getDeviceItemState_(
                      item, devicePendingPairing.*, failedPairingDeviceId)]]"
                  tabindex$="[[tabIndex]]"
                  focus-row-index="[[index]]"
                  iron-list-tab-index="[[tabIndex]]"
                  last-focused="{{lastFocused_}}"
                  list-blurred="{{listBlurred_}}"
                  item-index="[[index]]"
                  list-size="[[devices.length]]" >
              </bluetooth-pairing-device-item>
            </template>
          </iron-list>
      </div>
    </template>
  </div>
</bluetooth-base-page>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsBluetoothPairingDeviceSelectionPageElementBase=I18nMixin(CrScrollableMixin(PolymerElement));class SettingsBluetoothPairingDeviceSelectionPageElement extends SettingsBluetoothPairingDeviceSelectionPageElementBase{static get is(){return"bluetooth-pairing-device-selection-page"}static get template(){return getTemplate$A()}static get properties(){return{devices:{type:Array,value:[],observer:"onDevicesChanged_"},failedPairingDeviceId:{type:String,value:""},devicePendingPairing:{type:Object,value:null,observer:"onDevicePendingPairingChanged_"},isBluetoothEnabled:{type:Boolean,value:false},shouldOmitLinks:{type:Boolean,value:false},buttonBarState_:{type:Object,value:{cancel:ButtonState$1.ENABLED,pair:ButtonState$1.HIDDEN}},lastFocused_:Object,listBlurred_:Boolean}}constructor(){super();this.lastSelectedDevice_=null}attemptFocusLastSelectedItem(){if(!this.lastSelectedDevice_){return}const index=this.devices.findIndex((device=>device.id===this.lastSelectedDevice_.id));if(index<0){return}afterNextRender(this,(()=>{const items=this.shadowRoot.querySelectorAll("bluetooth-pairing-device-item");if(index>=items.length){return}items[index].focus()}))}onDevicesChanged_(){this.updateScrollableContents()}onDevicePendingPairingChanged_(){if(!this.devicePendingPairing){return}this.lastSelectedDevice_=this.devicePendingPairing}shouldShowDeviceList_(){return this.isBluetoothEnabled&&this.devices&&this.devices.length>0}getDeviceListTitle_(){if(!this.isBluetoothEnabled){return this.i18n("bluetoothDisabled")}if(!this.devicePendingPairing&&!this.shouldShowDeviceList_()){return this.i18n("bluetoothNoAvailableDevices")}if(this.shouldShowDeviceList_()||this.devicePendingPairing){return this.i18n("bluetoothAvailableDevices")}return this.i18n("bluetoothNoAvailableDevices")}getDeviceItemState_(device){if(!device){return DeviceItemState.DEFAULT}if(device.id===this.failedPairingDeviceId){return DeviceItemState.FAILED}if(this.devicePendingPairing&&device.id===this.devicePendingPairing.id){return DeviceItemState.PAIRING}return DeviceItemState.DEFAULT}}customElements.define(SettingsBluetoothPairingDeviceSelectionPageElement.is,SettingsBluetoothPairingDeviceSelectionPageElement);function getTemplate$z(){return html`<!--_html_template_start_--><style include="cr-hidden-style iron-flex">
  span {
    background-color: var(--cros-bg-color-dropped-elevation-2);
    border-radius: 4px;
    font-size: 20px;
    height: 40px;
    text-align: center;
  }

  span.next {
    background-color: var(--cros-text-color-secondary);
    color: var(--cros-slider-label-text-color);
  }

  span.typed {
    background: var(--cros-bg-color-dropped-elevation-1);
    color: var(--cros-text-color-secondary);
  }

  #code {
    display: flex;
    flex-wrap: wrap;
    margin-inline: 30px;
  }

  #message {
    margin-bottom: 24px;
  }

  .center {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .enter {
    font-weight: 500;
    margin-bottom: 8px;
    padding: 0 12px;
  }

  .key {
    border-radius: 4px;
    font-weight: 400;
    margin-bottom: 16px;
    margin-inline-end: 8px;
    margin-top: 8px;
    width: 40px;
  }
</style>
<bluetooth-base-page
    on-pair="onPairClicked_"
    focus-default
    button-bar-state="[[buttonBarState_]]">
  <div slot="page-body" id="pageBody" class="center" aria-live="polite">
    <div id="message">
      [[getMessage_(deviceName)]]
    </div>
    <div id="code" class="layout horizontal center center-justified">
      <dom-repeat items="[[keys_]]">
        <template>
          <span class$="center key [[getKeyClass_(index, numKeysEntered)]]">
            [[getKeyAt_(index, keys_)]]
          </span>
        </template>
      </dom-repeat>
      <span id="enter"
          class$="center enter [[getEnterClass_(numKeysEntered, keys_)]]">
        [[i18n('bluetoothEnterKey')]]
      </span>
    </div>
  </div>
</bluetooth-base-page>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const MAX_CODE_LENGTH=16;const SettingsBluetoothPairingEnterCodeElementBase=I18nMixin(PolymerElement);class SettingsBluetoothPairingEnterCodeElement extends SettingsBluetoothPairingEnterCodeElementBase{static get is(){return"bluetooth-pairing-enter-code-page"}static get template(){return getTemplate$z()}static get properties(){return{deviceName:{type:String,value:""},code:{type:String,value:""},numKeysEntered:{type:Number,value:0},buttonBarState_:{type:Object,value:{cancel:ButtonState$1.ENABLED,pair:ButtonState$1.HIDDEN}},keys_:{type:Array,computed:"computeKeys_(code)"}}}focus(){super.focus();const elem=this.shadowRoot?.querySelector("bluetooth-base-page");if(elem){elem.focus()}}computeKeys_(){if(!this.code){return[]}assert(this.code.length<=MAX_CODE_LENGTH);return this.code.split("")}getKeyAt_(index){return this.keys_[index]}getKeyClass_(index){if(!this.keys_||!this.numKeysEntered){return""}if(index===this.numKeysEntered){return"next"}else if(index<this.numKeysEntered){return"typed"}return""}getEnterClass_(){if(!this.keys_||!this.numKeysEntered){return""}if(this.numKeysEntered>=this.keys_.length){return"next"}return""}getMessage_(){return this.i18n("bluetoothPairingEnterKeys",this.deviceName)}}customElements.define(SettingsBluetoothPairingEnterCodeElement.is,SettingsBluetoothPairingEnterCodeElement);function getTemplate$y(){return html`<!--_html_template_start_--><style>
  #pageBody {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  #message {
    margin-bottom: 56px;
  }

  #pin {
    width: 336px;
  }
</style>
<bluetooth-base-page
    on-pair="onPairClicked_"
    button-bar-state="[[buttonBarState_]]">
  <div slot="page-body" id="pageBody">
    <div id="message">
      [[getMessage_(device.*)]]
    </div>
    <cr-input
        id="pin"
        minlength="1"
        maxlength="[[getMaxlength_(authType)]]"
        type="text"
        aria-label="[[getMessage_(device.*)]]"
        value="{{pinCode_}}"
        auto-validate >
    </cr-input>
  </div>
</bluetooth-base-page>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PIN_CODE_MAX_LENGTH=6;const PASSKEY_MAX_LENGTH=16;const SettingsBluetoothPairingRequestCodePageElementBase=I18nMixin(PolymerElement);class SettingsBluetoothRequestCodePageElement extends SettingsBluetoothPairingRequestCodePageElementBase{static get is(){return"bluetooth-pairing-request-code-page"}static get template(){return getTemplate$y()}static get properties(){return{device:{type:Object,value:null},authType:{type:Object,value:null},buttonBarState_:{type:Object,computed:"computeButtonBarState_(pinCode_)"},pinCode_:{type:String,value:""}}}connectedCallback(){super.connectedCallback();afterNextRender(this,(()=>{this.$.pin.focus()}))}getMessage_(){return this.i18n("bluetoothEnterPin",this.getDeviceName_())}getDeviceName_(){if(!this.device){return""}return mojoString16ToString(this.device.publicName)}computeButtonBarState_(){const pairButtonState=!this.pinCode_?ButtonState$1.DISABLED:ButtonState$1.ENABLED;return{cancel:ButtonState$1.ENABLED,pair:pairButtonState}}onPairClicked_(event){event.stopPropagation();if(!this.pinCode_){return}this.dispatchEvent(new CustomEvent("request-code-entered",{bubbles:true,composed:true,detail:{code:this.pinCode_}}))}getMaxlength_(){if(this.authType===PairingAuthType.REQUEST_PIN_CODE){return PIN_CODE_MAX_LENGTH}return PASSKEY_MAX_LENGTH}}customElements.define(SettingsBluetoothRequestCodePageElement.is,SettingsBluetoothRequestCodePageElement);function getTemplate$x(){return html`<!--_html_template_start_--><style>
   #code {
    font-size: 24px;
    margin-top: 40px;
  }

  #pageBody {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
<bluetooth-base-page
    on-pair="onPairClicked_"
    focus-default
    button-bar-state="[[buttonBarState_]]">
  <div slot="page-body" id="pageBody">
    <div id="message" aria-live="polite">
      [[i18n('bluetoothConfirmCodeMessage')]]
    </div>
    <div id="code">[[code]]</div>
  </div>
</bluetooth-base-page><!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsBluetoothPairingConfirmCodePageElementBase=I18nMixin(PolymerElement);class SettingsBluetoothPairingConfirmCodePageElement extends SettingsBluetoothPairingConfirmCodePageElementBase{static get is(){return"bluetooth-pairing-confirm-code-page"}static get template(){return getTemplate$x()}static get properties(){return{code:{type:String,value:""},buttonBarState_:{type:Object,value:{cancel:ButtonState$1.ENABLED,pair:ButtonState$1.ENABLED}}}}onPairClicked_(event){event.stopPropagation();this.dispatchEvent(new CustomEvent("confirm-code",{bubbles:true,composed:true}))}}customElements.define(SettingsBluetoothPairingConfirmCodePageElement.is,SettingsBluetoothPairingConfirmCodePageElement);function getTemplate$w(){return html`<!--_html_template_start_--><style>
  #pageBody {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  paper-spinner-lite {
    height: 190px;
    width: 190px;
  }
</style>
<bluetooth-base-page  button-bar-state="[[buttonBarState_]]">
  <div slot="page-body" id="pageBody">
    <paper-spinner-lite active>
    </paper-spinner-lite>
  </div>
</bluetooth-base-page>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SettingsBluetoothSpinnerPageElement extends PolymerElement{static get is(){return"bluetooth-spinner-page"}static get template(){return getTemplate$w()}static get properties(){return{buttonBarState_:{type:Object,value:{cancel:ButtonState$1.ENABLED,pair:ButtonState$1.DISABLED}}}}}customElements.define(SettingsBluetoothSpinnerPageElement.is,SettingsBluetoothSpinnerPageElement);function getTemplate$v(){return html`<!--_html_template_start_--><style>
  #container {
    height: 408px;
  }
</style>
<div id="container">
  <iron-pages
      attr-for-selected="id"
      on-cancel="onCancelClick_"
      selected="[[selectedPageId_]]">
    <template is="dom-if" if="[[shouldShowSubpage_(
        SubpageId.DEVICE_SELECTION_PAGE, selectedPageId_)]]">
      <bluetooth-pairing-device-selection-page
          failed-pairing-device-id="[[lastFailedPairingDeviceId_]]"
          devices="[[discoveredDevices_]]"
          device-pending-pairing="[[devicePendingPairing_]]"
          on-pair-device="onPairDevice_"
          is-bluetooth-enabled="[[isBluetoothEnabled_]]"
          should-omit-links="[[shouldOmitLinks]]"
          id="deviceSelectionPage">
      </bluetooth-pairing-device-selection-page>
    </template>
    <template is="dom-if" if="[[shouldShowSubpage_(
        SubpageId.DEVICE_REQUEST_CODE_PAGE, selectedPageId_)]]" restamp>
      <bluetooth-pairing-request-code-page
          auth-type="pairingAuthType_"
          on-request-code-entered="onRequestCodeEntered_"
          device="[[devicePendingPairing_]]"
          id="deviceRequestCodePage">
      </bluetooth-pairing-request-code-page>
    </template>
    <template is="dom-if" if="[[shouldShowSubpage_(
        SubpageId.DEVICE_CONFIRM_CODE_PAGE, selectedPageId_)]]" restamp>
      <bluetooth-pairing-confirm-code-page
          on-confirm-code="onConfirmCode_"
          code="[[pairingCode_]]"
          id="deviceConfirmCodePage">
      </bluetooth-pairing-confirm-code-page>
    </template>
    <template is="dom-if" if="[[shouldShowSubpage_(
        SubpageId.DEVICE_ENTER_CODE_PAGE, selectedPageId_)]]" restamp>
      <bluetooth-pairing-enter-code-page
          code="[[pairingCode_]]"
          num-keys-entered="[[numKeysEntered_]]"
          device-name="[[getDeviceName_(devicePendingPairing_.*)]]"
          id="deviceEnterCodePage">
      </bluetooth-pairing-enter-code-page>
    </template>
    <template is="dom-if" if="[[shouldShowSubpage_(
        SubpageId.SPINNER_PAGE, selectedPageId_)]]" restamp>
      <bluetooth-spinner-page id="spinnerPage">
      </bluetooth-spinner-page>
    </template>
  </iron-pages>
</div>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class KeyEnteredHandler{constructor(page,keyEnteredHandlerReceiver){this.page_=page;this.keyEnteredHandlerReceiver_=new KeyEnteredHandlerReceiver(this);this.keyEnteredHandlerReceiver_.$.bindHandle(keyEnteredHandlerReceiver.handle)}handleKeyEntered(numKeysEntered){this.page_.handleKeyEntered(numKeysEntered)}close(){this.keyEnteredHandlerReceiver_.$.close()}}var BluetoothPairingSubpageId;(function(BluetoothPairingSubpageId){BluetoothPairingSubpageId["DEVICE_SELECTION_PAGE"]="deviceSelectionPage";BluetoothPairingSubpageId["DEVICE_ENTER_CODE_PAGE"]="deviceEnterCodePage";BluetoothPairingSubpageId["DEVICE_REQUEST_CODE_PAGE"]="deviceRequestCodePage";BluetoothPairingSubpageId["DEVICE_CONFIRM_CODE_PAGE"]="deviceConfirmCodePage";BluetoothPairingSubpageId["SPINNER_PAGE"]="spinnerPage"})(BluetoothPairingSubpageId||(BluetoothPairingSubpageId={}));class SettingsBluetoothPairingUiElement extends PolymerElement{static get is(){return"bluetooth-pairing-ui"}static get template(){return getTemplate$v()}static get properties(){return{pairingDeviceAddress:{type:String,value:null},shouldOmitLinks:{type:Boolean,value:false},selectedPageId_:{type:String,value:BluetoothPairingSubpageId.DEVICE_SELECTION_PAGE,observer:"onSelectedPageIdChanged_"},discoveredDevices_:{type:Array,value:[]},devicePendingPairing_:{type:Object,value:null},pairingAuthType_:{type:Object,value:null},pairingCode_:{type:String,value:""},numKeysEntered_:{type:Number,value:0},lastFailedPairingDeviceId_:{type:String,value:""},isBluetoothEnabled_:{type:Boolean,value:false},SubpageId:{type:Object,value:BluetoothPairingSubpageId}}}constructor(){super();this.pairingDelegateReceiver_=null;this.requestCodeCallback_=null;this.keyEnteredReceiver_=null;this.confirmCodeCallback_=null;this.onBluetoothDiscoveryStartedCallbackForTest_=null;this.handlePairDeviceResultCallbackForTest_=null;this.systemPropertiesObserverReceiver_=new SystemPropertiesObserverReceiver(this);this.bluetoothDiscoveryDelegateReceiver_=new BluetoothDiscoveryDelegateReceiver(this)}ready(){super.ready();if(this.pairingDeviceAddress){this.selectedPageId_=BluetoothPairingSubpageId.SPINNER_PAGE}}connectedCallback(){super.connectedCallback();getBluetoothConfig().observeSystemProperties(this.systemPropertiesObserverReceiver_.$.bindNewPipeAndPassRemote())}disconnectedCallback(){super.disconnectedCallback();if(this.systemPropertiesObserverReceiver_){this.systemPropertiesObserverReceiver_.$.close()}if(this.bluetoothDiscoveryDelegateReceiver_){this.bluetoothDiscoveryDelegateReceiver_.$.close()}if(this.pairingDelegateReceiver_){this.pairingDelegateReceiver_.$.close()}if(this.keyEnteredReceiver_){this.keyEnteredReceiver_.close()}}onPropertiesUpdated(properties){const wasBluetoothEnabled=this.isBluetoothEnabled_;this.isBluetoothEnabled_=properties.systemState===BluetoothSystemState.kEnabled;if(!wasBluetoothEnabled&&this.isBluetoothEnabled_){this.lastFailedPairingDeviceId_="";getBluetoothConfig().startDiscovery(this.bluetoothDiscoveryDelegateReceiver_.$.bindNewPipeAndPassRemote())}}onDiscoveredDevicesListChanged(discoveredDevices){this.discoveredDevices_=discoveredDevices;this.updateLastFailedPairingDeviceId_(discoveredDevices);if(!this.pairingDeviceAddress){return}if(this.pairingDelegateReceiver_){return}this.attemptPairDeviceByAddress_()}updateLastFailedPairingDeviceId_(devices){if(devices.some((device=>device.id===this.lastFailedPairingDeviceId_))){return}this.lastFailedPairingDeviceId_=""}onBluetoothDiscoveryStarted(handler){this.devicePairingHandler_=handler;if(this.onBluetoothDiscoveryStartedCallbackForTest_){this.onBluetoothDiscoveryStartedCallbackForTest_()}}onBluetoothDiscoveryStopped(){this.bluetoothDiscoveryDelegateReceiver_.$.close();this.selectedPageId_=BluetoothPairingSubpageId.DEVICE_SELECTION_PAGE;this.devicePairingHandler_=null}waitForOnBluetoothDiscoveryStartedForTest(){return new Promise((resolve=>{this.onBluetoothDiscoveryStartedCallbackForTest_=resolve}))}waitForHandlePairDeviceResultForTest(){return new Promise((resolve=>{this.handlePairDeviceResultCallbackForTest_=resolve}))}onPairDevice_(event){if(!event.detail.device){return}if(this.pairingDelegateReceiver_){this.queuedDevicePendingPairing_=event.detail.device;this.pairingDelegateReceiver_.$.close();return}this.pairDevice_(event.detail.device)}attemptPairDeviceByAddress_(){assert(this.pairingDeviceAddress);assert(!this.pairingDelegateReceiver_);if(!this.devicePairingHandler_){console.error("Attempted pairing with no device pairing handler.");return}this.devicePairingHandler_.fetchDevice(this.pairingDeviceAddress).then((result=>{if(!result.device){console.warn("Attempted pairing with a device that was not found, address: "+this.pairingDeviceAddress);return}this.pairDevice_(result.device)}))}pairDevice_(device){assert(this.devicePairingHandler_,"devicePairingHandler_ has not been set.");this.pairingDelegateReceiver_=new DevicePairingDelegateReceiver(this);this.devicePendingPairing_=device;assert(this.devicePendingPairing_);this.lastFailedPairingDeviceId_="";this.devicePairingHandler_.pairDevice(this.devicePendingPairing_.id,this.pairingDelegateReceiver_.$.bindNewPipeAndPassRemote()).then((result=>{this.handlePairDeviceResult_(result.result)})).catch((()=>{this.handlePairDeviceResult_(PairingResult.kNonAuthFailure)}))}handlePairDeviceResult_(result){if(this.pairingDelegateReceiver_){this.pairingDelegateReceiver_.$.close()}this.pairingAuthType_=null;if(this.keyEnteredReceiver_){this.keyEnteredReceiver_.close();this.keyEnteredReceiver_=null}this.pairingDelegateReceiver_=null;if(result===PairingResult.kSuccess){this.closeDialog_();return}this.pairingDeviceAddress=null;this.selectedPageId_=BluetoothPairingSubpageId.DEVICE_SELECTION_PAGE;if(this.devicePendingPairing_){this.lastFailedPairingDeviceId_=this.devicePendingPairing_.id}this.devicePendingPairing_=null;if(this.queuedDevicePendingPairing_&&this.devicePairingHandler_){this.pairDevice_(this.queuedDevicePendingPairing_)}this.queuedDevicePendingPairing_=null;if(this.handlePairDeviceResultCallbackForTest_){this.handlePairDeviceResultCallbackForTest_()}}requestPinCode(){return this.requestCode_(PairingAuthType.REQUEST_PIN_CODE)}requestPasskey(){return this.requestCode_(PairingAuthType.REQUEST_PASSKEY)}requestCode_(authType){this.pairingAuthType_=authType;this.selectedPageId_=BluetoothPairingSubpageId.DEVICE_REQUEST_CODE_PAGE;this.requestCodeCallback_={reject:null,resolve:null};const promise=new Promise(((resolve,reject)=>{this.requestCodeCallback_.resolve=code=>{if(authType===PairingAuthType.REQUEST_PIN_CODE){resolve({pinCode:code});return}if(authType===PairingAuthType.REQUEST_PASSKEY){resolve({passkey:code});return}assertNotReached()};this.requestCodeCallback_.reject=reject}));return promise}onRequestCodeEntered_(event){this.selectedPageId_=BluetoothPairingSubpageId.SPINNER_PAGE;event.stopPropagation();assert(this.pairingAuthType_);assert(this.requestCodeCallback_&&this.requestCodeCallback_.resolve);this.requestCodeCallback_.resolve(event.detail.code)}displayPinCode(pinCode,handler){this.displayCode_(handler,pinCode)}displayPasskey(passkey,handler){this.displayCode_(handler,passkey)}displayCode_(handler,code){this.pairingCode_=code;this.selectedPageId_=BluetoothPairingSubpageId.DEVICE_ENTER_CODE_PAGE;this.keyEnteredReceiver_=new KeyEnteredHandler(this,handler)}handleKeyEntered(numKeysEntered){this.numKeysEntered_=numKeysEntered}confirmPasskey(passkey){this.pairingAuthType_=PairingAuthType.CONFIRM_PASSKEY;this.selectedPageId_=BluetoothPairingSubpageId.DEVICE_CONFIRM_CODE_PAGE;this.pairingCode_=passkey;this.confirmCodeCallback_={resolve:null,reject:null};return new Promise(((resolve,reject)=>{this.confirmCodeCallback_.resolve=()=>{resolve({confirmed:true})};this.confirmCodeCallback_.reject=reject}))}onConfirmCode_(event){this.selectedPageId_=BluetoothPairingSubpageId.SPINNER_PAGE;event.stopPropagation();assert(this.pairingAuthType_);assert(this.confirmCodeCallback_&&this.confirmCodeCallback_.resolve);this.confirmCodeCallback_.resolve()}authorizePairing(){return new Promise((()=>{}))}shouldShowSubpage_(subpageId){return this.selectedPageId_===subpageId}onCancelClick_(event){event.stopPropagation();this.devicePendingPairing_=null;if(this.pairingDelegateReceiver_){this.pairingDelegateReceiver_.$.close();this.finishPendingCallbacksForTest_();this.pairingDelegateReceiver_=null;return}this.closeDialog_()}closeDialog_(){this.dispatchEvent(new CustomEvent("finished",{bubbles:true,composed:true}))}onSelectedPageIdChanged_(){if(this.selectedPageId_!==BluetoothPairingSubpageId.DEVICE_SELECTION_PAGE){return}const deviceSelectionPage=this.shadowRoot.querySelector("#deviceSelectionPage");if(!deviceSelectionPage){return}deviceSelectionPage.attemptFocusLastSelectedItem()}finishPendingCallbacksForTest_(){if(this.requestCodeCallback_&&this.requestCodeCallback_.reject){this.requestCodeCallback_.reject()}if(this.confirmCodeCallback_&&this.confirmCodeCallback_.reject){this.confirmCodeCallback_.reject()}}getDeviceName_(){if(!this.devicePendingPairing_){return""}return mojoString16ToString(this.devicePendingPairing_.publicName)}}customElements.define(SettingsBluetoothPairingUiElement.is,SettingsBluetoothPairingUiElement);function getTemplate$u(){return html`<!--_html_template_start_--><style include="settings-shared">#dialog{--cr-dialog-top-container-min-height:0}div[slot=body]{height:426px}</style>
<cr-dialog id="dialog" show-on-attach>
  <div slot="body">
    <bluetooth-pairing-ui on-finished="closeDialog_">
    </bluetooth-pairing-ui>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SettingsBluetoothPairingDialogElement extends PolymerElement{static get is(){return"os-settings-bluetooth-pairing-dialog"}static get template(){return getTemplate$u()}connectedCallback(){super.connectedCallback();recordBluetoothUiSurfaceMetrics(BluetoothUiSurface.SETTINGS_PAIRING_DIALOG)}closeDialog_(e){this.$.dialog.close();e.stopPropagation()}}customElements.define(SettingsBluetoothPairingDialogElement.is,SettingsBluetoothPairingDialogElement);function getTemplate$t(){return html`<!--_html_template_start_--><style include="settings-shared iron-flex"></style>
<os-settings-animated-pages id="pages" section="[[section_]]">
  <div route-path="default">
    <settings-card header-text="$i18n{bluetoothPageTitle}">
      <os-settings-bluetooth-summary on-start-pairing="onStartPairing_" system-properties="[[systemProperties_]]">
      </os-settings-bluetooth-summary>
    </settings-card>
  </div>

  <template is="dom-if" route-path="/bluetoothDevices">
    <os-settings-subpage page-title="$i18n{bluetoothPageTitle}">
      <div slot="subpage-title-extra">
        <template is="dom-if" if="[[shouldShowPairNewDevice_(systemProperties_.*)]]" restamp>
          <cr-button id="pairNewDevice" on-click="onStartPairing_" class="cancel-button">
            <iron-icon icon="cr:add" slot="prefix-icon">
            </iron-icon>
            $i18n{bluetoothPairNewDevice}
          </cr-button>
        </template>
      </div>
      <os-settings-bluetooth-devices-subpage prefs="{{prefs}}" system-properties="[[systemProperties_]]">
      </os-settings-bluetooth-devices-subpage>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/bluetoothDeviceDetail">
    <os-settings-subpage>
      <os-settings-bluetooth-device-detail-subpage system-properties="[[systemProperties_]]">
      </os-settings-bluetooth-device-detail-subpage>
    </os-settings-subpage>
  </template>
  <os-settings-subpage route-path="/bluetoothSavedDevices" show-spinner="[[showSavedDevicesLoadingIndicators_]]">
    <os-settings-bluetooth-saved-devices-subpage show-saved-devices-loading-label="{{showSavedDevicesLoadingIndicators_}}">
    </os-settings-bluetooth-saved-devices-subpage>
  </os-settings-subpage>
</os-settings-animated-pages>

<template is="dom-if" if="[[shouldShowPairingDialog_]]" restamp>
  <os-settings-bluetooth-pairing-dialog on-close="onClosePairingDialog_">
  </os-settings-bluetooth-pairing-dialog>
</template>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsBluetoothPageElementBase=PrefsMixin(I18nMixin(PolymerElement));class SettingsBluetoothPageElement extends SettingsBluetoothPageElementBase{static get is(){return"os-settings-bluetooth-page"}static get template(){return getTemplate$t()}static get properties(){return{section_:{type:Number,value:Section$1.kBluetooth,readOnly:true},systemProperties_:Object,shouldShowPairingDialog_:{type:Boolean,value:false},showSavedDevicesLoadingIndicators_:Boolean}}constructor(){super();this.systemPropertiesObserverReceiver_=new SystemPropertiesObserverReceiver(this);this.browserProxy_=OsBluetoothDevicesSubpageBrowserProxyImpl.getInstance()}ready(){super.ready();getBluetoothConfig().observeSystemProperties(this.systemPropertiesObserverReceiver_.$.bindNewPipeAndPassRemote())}onPropertiesUpdated(properties){this.systemProperties_=properties}onStartPairing_(){this.shouldShowPairingDialog_=true;this.browserProxy_.showBluetoothRevampHatsSurvey()}onClosePairingDialog_(){this.shouldShowPairingDialog_=false}shouldShowPairNewDevice_(){if(!this.systemProperties_){return false}return this.systemProperties_.systemState===BluetoothSystemState.kEnabled}}customElements.define(SettingsBluetoothPageElement.is,SettingsBluetoothPageElement);function getTemplate$s(){return html`<!--_html_template_start_--><style include="settings-shared">cr-link-row{--cr-section-padding:0}.start-icon{width:var(--cr-link-row-icon-width,var(--cr-icon-size))}</style>
<div id="parental-controls-item" class="settings-box two-line">
  <template is="dom-if" if="[[isChild_]]">
    <cr-link-row on-click="handleFamilyLinkButtonClick_" start-icon="cr20:kite" label="$i18n{parentalControlsPageTitle}" sub-label="$i18n{parentalControlsPageViewSettingsLabel}" external>
    </cr-link-row>
  </template>
  <template is="dom-if" if="[[!isChild_]]">
    <iron-icon class="start-icon" icon="cr20:kite"></iron-icon>
    <div class="middle settings-box-text">
      <div id="label" aria-hidden="true">
        $i18n{parentalControlsPageTitle}
      </div>
      <div class="secondary" id="sub-label" aria-hidden="true">
        [[getSetupLabelText_(online_)]]
      </div>
    </div>
    <div class="separator"></div>
    <cr-button id="setupButton" on-click="handleSetupButtonClick_" disabled$="[[!online_]]" aria-labelledby="label" aria-describedby="sub-label" aria-roledescription="$i18n{parentalControlsSetUpButtonRole}">
      $i18n{parentalControlsSetUpButtonLabel}
    </cr-button>
  </template>
</div>
<!--_html_template_end_-->`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsParentalControlsPageElementBase=I18nMixin(PolymerElement);class SettingsParentalControlsPageElement extends SettingsParentalControlsPageElementBase{static get is(){return"settings-parental-controls-page"}static get template(){return getTemplate$s()}static get properties(){return{isChild_:{type:Boolean,value(){return isChild()}},online_:{type:Boolean,value(){return navigator.onLine}}}}constructor(){super();this.browserProxy_=ParentalControlsBrowserProxyImpl.getInstance()}ready(){super.ready();window.addEventListener("offline",this.onOffline_.bind(this));window.addEventListener("online",this.onOnline_.bind(this))}getSetupButton(){return castExists(this.shadowRoot.querySelector("#setupButton"))}onOffline_(){this.online_=false}onOnline_(){this.online_=true}getSetupLabelText_(online){if(online){return this.i18n("parentalControlsPageSetUpLabel")}else{return this.i18n("parentalControlsPageConnectToInternetLabel")}}handleSetupButtonClick_(event){event.stopPropagation();this.browserProxy_.showAddSupervisionDialog()}handleFamilyLinkButtonClick_(event){event.stopPropagation();this.browserProxy_.launchFamilyLinkSettings()}}customElements.define(SettingsParentalControlsPageElement.is,SettingsParentalControlsPageElement);function getTemplate$r(){return html`<!--_html_template_start_--><style include="settings-shared">:host-context(body.revamp-wayfinding-enabled) #parentalControlRowIcon{--iron-icon-fill-color:var(--cros-sys-primary)}cr-link-row{--cr-section-padding:0}</style>

<settings-card header-text="$i18n{parentalControlsPageTitle}">
  <div id="parentalControlsItem" class="settings-box two-line first">
    <template is="dom-if" if="[[isChild_]]">
      <cr-link-row on-click="handleFamilyLinkButtonClick_" start-icon="cr20:kite" label="$i18n{parentalControlsPageTitle}" sub-label="$i18n{parentalControlsPageViewSettingsLabel}" external>
      </cr-link-row>
    </template>
    <template is="dom-if" if="[[!isChild_]]">
      <iron-icon id="parentalControlRowIcon" class="start-icon" icon="cr20:kite">
      </iron-icon>
      <div class="middle settings-box-text">
        <div id="label" aria-hidden="true">
          $i18n{parentalControlsPageTitle}
        </div>
        <div class="secondary" id="subLabel" aria-hidden="true">
          [[getSetupLabelText_(online_)]]
        </div>
      </div>
      <cr-button id="setupButton" on-click="handleSetupButtonClick_" disabled$="[[!online_]]" aria-labelledby="label" aria-describedby="subLabel" aria-roledescription="$i18n{parentalControlsSetUpButtonRole}" deep-link-focus-id$="[[Setting.kSetUpParentalControls]]">
        $i18n{parentalControlsSetUpButtonLabel}
      </cr-button>
    </template>
  </div>
</settings-card>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ParentalControlsSettingsCardElementBase=DeepLinkingMixin(RouteObserverMixin(I18nMixin(PolymerElement)));class ParentalControlsSettingsCardElement extends ParentalControlsSettingsCardElementBase{static get is(){return"parental-controls-settings-card"}static get template(){return getTemplate$r()}static get properties(){return{supportedSettingIds:{type:Object,value:()=>new Set([Setting.kSetUpParentalControls])},isChild_:{type:Boolean,value(){return isChild()},readOnly:true},online_:{type:Boolean,value(){return navigator.onLine}}}}constructor(){super();this.browserProxy_=ParentalControlsBrowserProxyImpl.getInstance()}ready(){super.ready();window.addEventListener("offline",this.onOffline_.bind(this));window.addEventListener("online",this.onOnline_.bind(this))}currentRouteChanged(newRoute,_oldRoute){if(newRoute!==routes.OS_PEOPLE){return}this.attemptDeepLink()}getSetupButton(){return castExists(this.shadowRoot.querySelector("#setupButton"))}onOffline_(){this.online_=false}onOnline_(){this.online_=true}getSetupLabelText_(online){if(online){return this.i18n("parentalControlsPageSetUpLabel")}return this.i18n("parentalControlsPageConnectToInternetLabel")}handleSetupButtonClick_(event){event.stopPropagation();this.browserProxy_.showAddSupervisionDialog()}handleFamilyLinkButtonClick_(event){event.stopPropagation();this.browserProxy_.launchFamilyLinkSettings()}}customElements.define(ParentalControlsSettingsCardElement.is,ParentalControlsSettingsCardElement);function getTemplate$q(){return html`<!--_html_template_start_--><style include="settings-shared">.account-manager-description{color:var(--cr-secondary-text-color);display:block;max-width:560px;padding-top:8px;padding-bottom:8px}.account-manager-description.full-width{max-width:none}.profile-icon{--profile-icon-size:40px;background:center/cover no-repeat;border-radius:50%;flex-shrink:0;height:var(--profile-icon-size);width:var(--profile-icon-size)}.profile-icon.device-account-icon{--profile-icon-size:60px;margin-top:8px}.device-account-container{align-items:center;display:flex;flex-direction:column;margin-bottom:16px}.device-account-container .primary{font-weight:500;margin-top:8px}.managed-badge{--badge-offset:calc(100% - var(--badge-size)
                         - 2 * var(--padding-size));--badge-size:10px;--padding-size:4px;background:var(--cros-icon-color-prominent);border-radius:50%;height:var(--badge-size);left:var(--badge-offset);padding:var(--padding-size);position:relative;top:var(--badge-offset);width:var(--badge-size)}.managed-badge>iron-icon{--iron-icon-fill-color:var(--cros-bg-color-elevation-1);--iron-icon-height:var(--badge-size);--iron-icon-width:var(--badge-size);display:block}.managed-message{color:var(--cr-secondary-text-color);justify-content:center;margin-top:16px}.managed-message>cr-icon-button,.managed-message>iron-icon{margin-inline-end:5px}:host-context([dir=rtl]) .managed-badge{left:auto;right:var(--badge-offset)}:host-context(body.revamp-wayfinding-enabled) #managedUserIcon{--iron-icon-fill-color:var(--cros-sys-secondary)}</style>

<settings-card header-text="$i18n{accountManagerPageTitle}">
  <div class="settings-box first account-manager-description full-width">
    <localized-link localized-string="[[getAccountManagerDescription_()]]" link-url="$i18nRaw{accountManagerLearnMoreUrl}">
    </localized-link>
  </div>

   
   <template is="dom-if" if="[[isDeviceAccountManaged_]]">
    <div class="settings-box managed-message">
      <template is="dom-if" if="[[!isChildUser_]]">
        <iron-icon id="managedUserIcon" icon="[[managedByIcon_]]"></iron-icon>
      </template>
      <template is="dom-if" if="[[isChildUser_]]">
        <cr-icon-button iron-icon="cr20:kite" on-click="onManagedIconClick_">
        </cr-icon-button>
      </template>
      <localized-link localized-string="[[getManagementDescription_(isChildUser_, deviceAccount)]]" link-url="$i18nRaw{accountManagerChromeUIManagementURL}">
      </localized-link>
    </div>
  </template>

  
  <div class="device-account-container hr" aria-labelledby="deviceAccountFullName" aria-describedby="deviceAccountEmail">
    <div class="profile-icon device-account-icon" aria-hidden="true" style="background-image:[[getIconImageSet_(deviceAccount) ]]">
      <template is="dom-if" if="[[shouldShowManagedBadge_(isDeviceAccountManaged_,
                isChildUser_)]]">
        <div class="managed-badge">
          <iron-icon icon="cr:work"></iron-icon>
        </div>
      </template>
    </div>
    <span id="deviceAccountFullName" class="primary" aria-hidden="true">
      [[deviceAccount.fullName]]
    </span>
    <span id="deviceAccountEmail" class="secondary" aria-hidden="true">
      [[deviceAccount.email]]
    </span>
  </div>
</settings-card>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const AccountManagerSettingsCardElementBase=WebUiListenerMixin(I18nMixin(PolymerElement));class AccountManagerSettingsCardElement extends AccountManagerSettingsCardElementBase{static get is(){return"account-manager-settings-card"}static get template(){return getTemplate$q()}static get properties(){return{deviceAccount:Object,isChildUser_:{type:Boolean,value(){return isChild()},readOnly:true},isDeviceAccountManaged_:{type:Boolean,value(){return loadTimeData.getBoolean("isDeviceAccountManaged")},readOnly:true},isSecondaryGoogleAccountSigninAllowed_:{type:Boolean,value(){return loadTimeData.getBoolean("secondaryGoogleAccountSigninAllowed")},readOnly:true},managedByIcon_:{type:String,value(){return loadTimeData.getString("managedByIcon")}}}}onManagedIconClick_(){if(this.isChildUser_){ParentalControlsBrowserProxyImpl.getInstance().launchFamilyLinkSettings()}}getAccountManagerDescription_(){if(this.isChildUser_&&this.isSecondaryGoogleAccountSigninAllowed_){return this.i18nAdvanced("accountManagerChildDescription")}return this.i18nAdvanced("accountManagerDescription")}getManagementDescription_(){if(this.isChildUser_){return this.i18nAdvanced("accountManagerManagementDescription")}if(!this.deviceAccount){return""}assertExists(this.deviceAccount.organization);if(!this.deviceAccount.organization){if(this.isDeviceAccountManaged_){console.error("The device account is managed, but the organization is not set.")}return""}return this.i18nAdvanced("accountManagerManagementDescription",{substitutions:[this.deviceAccount.organization]})}shouldShowManagedBadge_(){return this.isDeviceAccountManaged_&&!this.isChildUser_}getIconImageSet_(){if(!this.deviceAccount){return""}return getImage(this.deviceAccount.pic)}}customElements.define(AccountManagerSettingsCardElement.is,AccountManagerSettingsCardElement);function getTemplate$p(){return html`<!--_html_template_start_--><style include="settings-shared iron-flex iron-flex-alignment">:host{--add-account-margin-top:16px;--account-item-padding-size:8px}.settings-box-text{padding-inline-start:var(--cr-section-padding)}#addAccountButtonContainer{padding-top:8px;padding-bottom:8px}.profile-icon{--profile-icon-size:40px;background:center/cover no-repeat;border-radius:50%;flex-shrink:0;height:var(--profile-icon-size);width:var(--profile-icon-size)}.profile-icon.device-account-icon{--profile-icon-size:60px;margin-top:16px}.middle .secondary{overflow:hidden;text-overflow:ellipsis}.middle.two-line-or-more{min-height:calc(var(--cr-section-two-line-min-height) - 2*var(--account-item-padding-size));padding-bottom:var(--account-item-padding-size);padding-top:var(--account-item-padding-size)}.middle.two-line-or-more>.flex{display:flex;flex-direction:column;justify-content:center;min-height:calc(var(--cr-section-two-line-min-height) - 2*var(--account-item-padding-size))}.secondary-accounts-policy-indicator{margin-inline-end:12px}.settings-box.user-message{align-items:flex-end}.secondary-accounts-tooltip{margin-inline-start:5px;width:15px}.settings-box.secondary-accounts-box{align-items:flex-end}.secondary-accounts-disabled-tooltip{padding-inline-end:12px}cr-policy-indicator{margin-inline-end:1em;margin-top:var(--add-account-margin-top)}.secondary-accounts-box>#addAccountButton{margin-bottom:12px;margin-top:12px}#addAccountIcon{-webkit-mask-image:url(chrome://resources/images/add.svg);background-color:currentColor;height:24px;width:24px}.signed-out-text{color:var(--cros-text-color-alert)}.error-badge{background:url(chrome://os-settings/images/error_badge.svg) center/cover no-repeat;display:block;height:20px;left:60%;position:relative;top:60%;width:20px}@media (prefers-color-scheme:dark){.error-badge{background:url(chrome://os-settings/images/error_badge_dark.svg) center/cover no-repeat}}:host-context([dir=rtl]) .error-badge{left:auto;right:60%}.edu-account-label{margin-inline-start:12px}#removeConfirmationButton{--active-shadow-action-rgb:var(--cros-color-alert-rgb);--bg-action:var(--cros-color-alert);--focus-shadow-color:var(--cros-highlight-color-error);--hover-bg-action:var(--cros-sys-hover_on_prominent);--hover-shadow-action-rgb:var(--cros-color-alert-rgb)}</style>

<settings-card header-text="[[getAccountListHeader_(isChildUser_)]]">
  
  <div class="settings-box-text first secondary">
    [[getAccountListDescription_(isChildUser_)]]
  </div>

  
  <template is="dom-repeat" id="accountList" items="[[getSecondaryAccounts_(accounts)]]">
    <div class="settings-box" role="listitem">
      <div class="profile-icon" style="background-image:[[getIconImageSet_(item.pic) ]]">
        <template is="dom-if" if="[[!item.isSignedIn]]">
          <span class="error-badge"></span>
        </template>
      </div>
      <div class="middle two-line-or-more no-min-width">
        <div class="flex text-elide">
          
          <template is="dom-if" if="[[item.isSignedIn]]">
            <span id="fullName_[[index]]" aria-hidden="true">[[item.fullName]]</span>
          </template>
          
          <template is="dom-if" if="[[!item.isSignedIn]]">
            <span class="signed-out-text">
              [[getAccountManagerSignedOutName_(item.unmigrated)]]
            </span>
          </template>
          
          <div class="secondary" id="email_[[index]]" aria-hidden="true">[[item.email]]</div>
          
          <template is="dom-if" if="[[isArcAccountRestrictionsEnabled_]]">
            <span class="arc-availability secondary" id="arcStatus_[[index]]" aria-hidden="true" hidden$="[[item.isAvailableInArc]]">
              $i18n{accountNotUsedInArcLabel}
            </span>
          </template>
        </div>
      </div>
      <template is="dom-if" if="[[shouldShowReauthenticationButton_(item)]]">
        <cr-button title="[[getAccountManagerSignedOutTitle_(item)]]" class="reauth-button" on-click="onReauthenticationClick_" aria-labelledby$="fullName_[[index]] email_[[index]]">
          [[getAccountManagerSignedOutLabel_(item.unmigrated)]]
        </cr-button>
      </template>
      
      <cr-icon-button class="icon-more-vert" title="[[getMoreActionsTitle_(item)]]" aria-label="[[getMoreActionsTitle_(item)]]" aria-describedby$="fullName_[[index]]
                              arcStatus_[[index]]
                              eduAccountLabel_[[index]]" on-click="onAccountActionsMenuButtonClick_" deep-link-focus-id$="[[Setting.kRemoveAccount]]">
      </cr-icon-button>
    </div>
  </template>
  <cr-action-menu role-description="$i18n{menu}">
    <button class="dropdown-item" on-click="onRemoveAccountClick_">
      $i18n{removeAccountLabel}
    </button>
    <template is="dom-if" if="[[isArcAccountRestrictionsEnabled_]]">
      <button class="dropdown-item" on-click="onChangeArcAvailability_">
        [[getChangeArcAvailabilityLabel_(actionMenuAccount_)]]
      </button>
    </template>
  </cr-action-menu>

  
  <div id="addAccountButtonContainer" class="settings-box">
    <template is="dom-if" if="[[!isSecondaryGoogleAccountSigninAllowed_]]">
      <cr-tooltip-icon class="secondary-accounts-disabled-tooltip" icon-class="[[getManagedAccountTooltipIcon_(isChildUser_)]]" tooltip-text="[[getSecondaryAccountsDisabledUserMessage_(
                              isChildUser_)]]" icon-aria-label="[[getSecondaryAccountsDisabledUserMessage_(
                                isChildUser_)]]">
      </cr-tooltip-icon>
    </template>
    <cr-button disabled="[[!isSecondaryGoogleAccountSigninAllowed_]]" id="addAccountButton" on-click="addAccount_" deep-link-focus-id$="[[Setting.kAddAccount]]">
      <div id="addAccountIcon" slot="prefix-icon"></div>
      [[getAddAccountLabel_(isChildUser_,
          isSecondaryGoogleAccountSigninAllowed_)]]
    </cr-button>
  </div>

  <cr-dialog id="removeConfirmationDialog">
    <div slot="title" class="key-text">
      $i18n{removeLacrosAccountDialogTitle}
    </div>
    <div slot="body" class="warning-message">
      $i18n{removeLacrosAccountDialogBody}
    </div>
    <div slot="button-container">
      <cr-button class="cancel-button" on-click="onRemoveAccountDialogCancelClick_">
        $i18n{removeLacrosAccountDialogCancel}
      </cr-button>
      <cr-button id="removeConfirmationButton" class="action-button" on-click="onRemoveAccountDialogRemoveClick_">
        $i18n{removeLacrosAccountDialogRemove}
      </cr-button>
    </div>
  </cr-dialog>
</settings-card>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const AdditionalAccountsSettingsCardElementBase=RouteObserverMixin(WebUiListenerMixin(I18nMixin(DeepLinkingMixin(PolymerElement))));class AdditionalAccountsSettingsCardElement extends AdditionalAccountsSettingsCardElementBase{static get is(){return"additional-accounts-settings-card"}static get template(){return getTemplate$p()}static get properties(){return{accounts:{type:Array,value(){return[]}},actionMenuAccount_:Object,isChildUser_:{type:Boolean,value(){return isChild()},readOnly:true},isDeviceAccountManaged_:{type:Boolean,value(){return loadTimeData.getBoolean("isDeviceAccountManaged")},readOnly:true},isSecondaryGoogleAccountSigninAllowed_:{type:Boolean,value(){return loadTimeData.getBoolean("secondaryGoogleAccountSigninAllowed")},readOnly:true},isArcAccountRestrictionsEnabled_:{type:Boolean,value(){return loadTimeData.getBoolean("arcAccountRestrictionsEnabled")},readOnly:true},supportedSettingIds:{type:Object,value:()=>new Set([Setting.kAddAccount,Setting.kRemoveAccount])}}}constructor(){super();this.browserProxy_=AccountManagerBrowserProxyImpl.getInstance()}currentRouteChanged(newRoute){if(newRoute!==routes.OS_PEOPLE){return}this.attemptDeepLink()}getAccountListHeader_(){return this.isChildUser_?this.i18n("accountListHeaderChild"):this.i18n("accountListHeader")}getAccountListDescription_(){return this.isChildUser_?this.i18n("accountListChildDescription"):this.i18n("accountListDescription")}getSecondaryAccountsDisabledUserMessage_(){return this.isChildUser_?this.i18n("accountManagerSecondaryAccountsDisabledChildText"):this.i18n("accountManagerSecondaryAccountsDisabledText")}getIconImageSet_(iconUrl){return getImage(iconUrl)}addAccount_(){recordSettingChange(Setting.kAddAccount,{intValue:this.accounts.length+1});this.browserProxy_.addAccount()}shouldShowReauthenticationButton_(account){return!account.isDeviceAccount&&!account.isSignedIn}getManagedAccountTooltipIcon_(){if(this.isChildUser_){return"cr20:kite"}if(this.isDeviceAccountManaged_){return"cr20:domain"}return""}getAccountManagerSignedOutName_(unmigrated){return this.i18n(unmigrated?"accountManagerUnmigratedAccountName":"accountManagerSignedOutAccountName")}getAccountManagerSignedOutLabel_(unmigrated){return this.i18n(unmigrated?"accountManagerMigrationLabel":"accountManagerReauthenticationLabel")}getAccountManagerSignedOutTitle_(account){const label=account.unmigrated?"accountManagerMigrationTooltip":"accountManagerReauthenticationTooltip";return this.i18n(label,account.email)}getMoreActionsTitle_(account){return this.i18n("accountManagerMoreActionsTooltip",account.email)}shouldShowSecondaryAccountsList_(){return this.getSecondaryAccounts_().length===0}getSecondaryAccounts_(){return this.accounts.filter((account=>!account.isDeviceAccount))}getAddAccountLabel_(){if(this.isChildUser_&&this.isSecondaryGoogleAccountSigninAllowed_){return this.i18n("addSchoolAccountLabel")}return this.i18n("addAccountLabel")}onReauthenticationClick_(event){if(event.model.item.unmigrated){this.browserProxy_.migrateAccount(event.model.item.email)}else{this.browserProxy_.reauthenticateAccount(event.model.item.email)}}onAccountActionsMenuButtonClick_(event){this.actionMenuAccount_=event.model.item;assertInstanceof(event.target,HTMLElement);this.shadowRoot.querySelector("cr-action-menu").showAt(event.target)}onRemoveAccountClick_(){this.shadowRoot.querySelector("cr-action-menu").close();assertExists(this.actionMenuAccount_);if(loadTimeData.getBoolean("lacrosEnabled")&&this.actionMenuAccount_.isManaged){this.$.removeConfirmationDialog.showModal()}else{this.browserProxy_.removeAccount(this.actionMenuAccount_);this.actionMenuAccount_=null;this.shadowRoot.querySelector("#addAccountButton").focus()}}onRemoveAccountDialogCancelClick_(){this.actionMenuAccount_=null;this.$.removeConfirmationDialog.cancel();this.shadowRoot.querySelector("#addAccountButton").focus()}onRemoveAccountDialogRemoveClick_(){assertExists(this.actionMenuAccount_);this.browserProxy_.removeAccount(this.actionMenuAccount_);this.actionMenuAccount_=null;this.$.removeConfirmationDialog.close();this.shadowRoot.querySelector("#addAccountButton").focus()}getChangeArcAvailabilityLabel_(){if(!this.actionMenuAccount_){return""}return this.actionMenuAccount_.isAvailableInArc?this.i18n("accountStopUsingInArcButtonLabel"):this.i18n("accountUseInArcButtonLabel")}onChangeArcAvailability_(){assertExists(this.actionMenuAccount_);this.shadowRoot.querySelector("cr-action-menu").close();const newArcAvailability=!this.actionMenuAccount_.isAvailableInArc;this.browserProxy_.changeArcAvailability(this.actionMenuAccount_,newArcAvailability);const actionMenuAccountIndex=this.shadowRoot.querySelector("#account-list").items.indexOf(this.actionMenuAccount_);if(actionMenuAccountIndex>=0){this.shadowRoot.querySelectorAll(".icon-more-vert")[actionMenuAccountIndex].focus()}else{console.error("Couldn't find active account in the list: ",this.actionMenuAccount_);this.shadowRoot.querySelector("#add-account-button").focus()}this.actionMenuAccount_=null}}customElements.define(AdditionalAccountsSettingsCardElement.is,AdditionalAccountsSettingsCardElement);
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ProfileInfoBrowserProxyImpl{getProfileInfo(){return sendWithPromise("getProfileInfo")}getProfileStatsCount(){chrome.send("getProfileStatsCount")}static getInstance(){return instance$4||(instance$4=new ProfileInfoBrowserProxyImpl)}static setInstance(obj){instance$4=obj}}let instance$4=null;
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PNG_FRAME_DELAY_NUMERATOR=1;const PNG_FRAME_DELAY_DENOMINATOR=20;const PNG_SIGNATURE=[137,80,78,71,13,10,26,10];const PNG_BIT_DEPTH=8;const PNG_COMPRESSION_METHOD=0;const PNG_FILTER_METHOD=0;const PNG_INTERLACE_METHOD=0;const PNG_CRC_TABLE=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117];function convertDataUrlsToCrPng(images){const png={frames:0,sequences:0,chunks:[]};png.chunks.push(new Uint8Array(PNG_SIGNATURE));const IHDR=new Uint8Array(12+13);writeUInt32(IHDR,13,0);writeFourCC(IHDR,"IHDR",4);writeUInt8(IHDR,PNG_BIT_DEPTH,16);writeUInt8(IHDR,PNG_COMPRESSION_METHOD,18);writeUInt8(IHDR,PNG_FILTER_METHOD,19);writeUInt8(IHDR,PNG_INTERLACE_METHOD,20);png.chunks.push(IHDR);const acTL=new Uint8Array(12+8);writeUInt32(acTL,8,0);writeFourCC(acTL,"acTL",4);writeUInt32(acTL,images.length,8);writeUInt32(acTL,0,12);writeUInt32(acTL,getCRC(acTL,4,16),16);png.chunks.push(acTL);for(let i=0;i<images.length;++i){appendFrameFromDataURL(images[i],png)}writeUInt32(IHDR,png.width,8);writeUInt32(IHDR,png.height,12);writeUInt8(IHDR,png.colour,17);writeUInt32(IHDR,getCRC(IHDR,4,8+13),8+13);const IEND=new Uint8Array(12);writeUInt32(IEND,0,0);writeFourCC(IEND,"IEND",4);writeUInt32(IEND,getCRC(IEND,4,8),8);png.chunks.push(IEND);return png}function convertImageSequenceToPng(images){const png=convertDataUrlsToCrPng(images);return"data:image/png;base64,"+btoa(png.chunks.map((function(chunk){return String.fromCharCode.apply(null,chunk)})).join(""))}function readUInt32(buffer,offset){return(buffer[offset+0]<<24)+(buffer[offset+1]<<16)+(buffer[offset+2]<<8)+(buffer[offset+3]<<0)}function readString(buffer,offset,length){let str="";for(let i=0;i<length;i++){str+=String.fromCharCode(buffer[offset+i])}return str}function writeBytes(buffer,bytes,offset){for(let i=0;i<bytes.length;i++){buffer[offset+i]=bytes[i]&255}}function writeUInt8(buffer,u8,offset){buffer[offset]=u8&255}function writeUInt16(buffer,u16,offset){buffer[offset+0]=u16>>8&255;buffer[offset+1]=u16>>0&255}function writeUInt32(buffer,u32,offset){buffer[offset+0]=u32>>24&255;buffer[offset+1]=u32>>16&255;buffer[offset+2]=u32>>8&255;buffer[offset+3]=u32>>0&255}function writeString(buffer,string,offset){for(let i=0;i<string.length;i++){buffer[offset+i]=string.charCodeAt(i)}}function writeFourCC(buffer,fourcc,offset){buffer[offset+0]=fourcc.charCodeAt(0);buffer[offset+1]=fourcc.charCodeAt(1);buffer[offset+2]=fourcc.charCodeAt(2);buffer[offset+3]=fourcc.charCodeAt(3)}function getCRC(buffer,start,end){let crc=4294967295;for(let i=start;i<end;i++){const crcTableIndex=(crc^buffer[i])&255;crc=PNG_CRC_TABLE[crcTableIndex]^crc>>>8}return crc^4294967295}function appendFrameFromDataURL(dataURL,png){const byteString=atob(dataURL.split(",")[1]);const bytes=new Uint8Array(byteString.length);writeString(bytes,byteString,0);const signature=bytes.subarray(0,PNG_SIGNATURE.length);if(signature.toString()!==PNG_SIGNATURE.toString()){console.error("Bad PNG signature")}const fcTL=new Uint8Array(12+26);writeUInt32(fcTL,26,0);writeFourCC(fcTL,"fcTL",4);writeUInt32(fcTL,png.sequences,8);writeUInt32(fcTL,0,20);writeUInt32(fcTL,0,24);writeUInt16(fcTL,PNG_FRAME_DELAY_NUMERATOR,28);writeUInt16(fcTL,PNG_FRAME_DELAY_DENOMINATOR,30);writeUInt8(fcTL,0,32);writeUInt8(fcTL,0,33);png.sequences+=1;png.chunks.push(fcTL);let i=PNG_SIGNATURE.length;while(i+12<=bytes.length){const length=readUInt32(bytes,i);const type=readString(bytes,i+4,4);const chunk=bytes.subarray(i+8,i+8+length);if(length!==chunk.length){console.error("Unexpectedly reached end of file")}switch(type){case"IHDR":const width=readUInt32(chunk,0);const height=readUInt32(chunk,4);const depth=chunk[8];const colour=chunk[9];const compression=chunk[10];const filter=chunk[11];const interlace=chunk[12];if(png.frames===0){png.width=width;png.height=height;png.colour=colour}if(width!==png.width){console.error("Bad PNG width: "+width)}if(height!==png.height){console.error("Bad PNG height: "+height)}if(depth!==PNG_BIT_DEPTH){console.error("Bad PNG bit depth: "+depth)}if(colour!==png.colour){console.error("Bad PNG colour type: "+colour)}if(compression!==PNG_COMPRESSION_METHOD){console.error("Bad PNG compression method: "+compression)}if(filter!==PNG_FILTER_METHOD){console.error("Bad PNG filter method: "+filter)}if(interlace!==PNG_INTERLACE_METHOD){console.error("Bad PNG interlace method: "+interlace)}break;case"IDAT":if(png.frames===0){const IDAT=new Uint8Array(12+length);writeUInt32(IDAT,length,0);writeFourCC(IDAT,"IDAT",4);writeBytes(IDAT,chunk,8);writeUInt32(IDAT,getCRC(IDAT,4,8+length),8+length);png.chunks.push(IDAT)}else{const fdAT=new Uint8Array(12+4+length);writeUInt32(fdAT,4+length,0);writeFourCC(fdAT,"fdAT",4);writeUInt32(fdAT,png.sequences,8);writeBytes(fdAT,chunk,12);writeUInt32(fdAT,getCRC(fdAT,4,12+length),12+length);png.sequences+=1;png.chunks.push(fdAT)}break;case"PLTE":const PLTE=new Uint8Array(12+length);writeUInt32(PLTE,length,0);writeFourCC(PLTE,"PLTE",4);writeBytes(PLTE,chunk,8);writeUInt32(PLTE,getCRC(PLTE,4,8+length),8+length);png.chunks.push(PLTE);break;case"IEND":writeUInt32(fcTL,png.width,12);writeUInt32(fcTL,png.height,16);writeUInt32(fcTL,getCRC(fcTL,4,34),34);png.frames+=1;return}i+=12+length}console.error("Unexpectedly reached end of file")}function getTemplate$o(){return html`<!--_html_template_start_--><style include="settings-shared iron-flex">:host{--icon-width:40px}.sync-row{align-items:center;flex:auto}#profile-icon{background:center/cover no-repeat;border-radius:20px;flex-shrink:0;height:40px;width:40px}#syncSetupRow{--cr-secondary-text-color:var(--cros-sys-error)}cr-link-row{--cr-link-row-icon-width:var(--icon-width);border-top:var(--cr-separator-line)}settings-parental-controls-page{--cr-link-row-icon-width:var(--icon-width)}parental-controls-settings-card{--cr-link-row-icon-width:var(--icon-width)}.icon-container{display:flex;flex-shrink:0;justify-content:center;width:40px}</style>

<os-settings-animated-pages id="pages" section="[[section_]]">
  <template is="dom-if" if="[[isRevampWayfindingEnabled_]]">
    <div route-path="default">
      <account-manager-settings-card prefs="{{prefs}}" device-account="[[deviceAccount_]]">
      </account-manager-settings-card>
      <additional-accounts-settings-card prefs="{{prefs}}" accounts="[[accounts_]]">
      </additional-accounts-settings-card>
      <template is="dom-if" if="[[showParentalControls_]]">
        <parental-controls-settings-card prefs="{{prefs}}">
        </parental-controls-settings-card>
      </template>
    </div>
  </template>

  <template is="dom-if" if="[[!isRevampWayfindingEnabled_]]">
    <div route-path="default">
      <settings-card header-text="$i18n{osPeoplePageTitle}">
        <div class="settings-box first two-line">
          <template is="dom-if" if="[[syncStatus]]">
            
            <div id="profile-icon" style="background-image:[[getIconImageSet_(profileIconUrl_) ]]" on-click="onAccountManagerClick_" actionable$="[[isAccountManagerEnabled_]]">
            </div>
            <div class="middle two-line no-min-width" id="profile-row" on-click="onAccountManagerClick_" actionable$="[[isAccountManagerEnabled_]]">
              <div class="flex text-elide settings-box-text">
                <span id="profile-name" aria-hidden="true">
                  [[getProfileName_(profileName_)]]
                </span>
                <div id="profile-label" class="secondary" aria-hidden="true">
                  [[profileLabel_]]
                </div>
              </div>
              <cr-icon-button class="subpage-arrow" hidden="[[!isAccountManagerEnabled_]]" id="accountManagerSubpageTrigger" aria-label="$i18n{accountManagerSubMenuLabel}" aria-describedby="profile-name profile-label" aria-roledescription="$i18n{subpageArrowRoleDescription}">
              </cr-icon-button>
            </div>
          </template>
        </div>
        <cr-link-row id="syncSetupRow" start-icon="cr:sync" label="$i18n{syncAndNonPersonalizedServices}" sub-label="[[getSyncAndGoogleServicesSubtext_(syncStatus)]]" on-click="onSyncClick_" role-description="$i18n{subpageArrowRoleDescription}">
        </cr-link-row>
        <template is="dom-if" if="[[showParentalControls_]]">
          <settings-parental-controls-page>
          </settings-parental-controls-page>
        </template>
      </settings-card>
    </div>

    <template is="dom-if" route-path="/osSyncSetup">
      <os-settings-subpage page-title="$i18n{syncPageTitle}" learn-more-url="$i18n{syncAndGoogleServicesLearnMoreURL}">
        <os-settings-sync-subpage sync-status="[[syncStatus]]" prefs="{{prefs}}">
        </os-settings-sync-subpage>
      </os-settings-subpage>
    </template>
    <template is="dom-if" route-path="/osSync">
      <os-settings-subpage page-title="[[getSyncAdvancedTitle_()]]" learn-more-url="$i18n{syncAndGoogleServicesLearnMoreURL}">
        <os-sync-controls-subpage>
        </os-sync-controls-subpage>
      </os-settings-subpage>
    </template>
    <template is="dom-if" route-path="/accountManager">
      <os-settings-subpage page-title="$i18n{accountManagerPageTitle}">
        <settings-account-manager-subpage prefs="[[prefs]]">
        </settings-account-manager-subpage>
      </os-settings-subpage>
    </template>
  </template>
</os-settings-animated-pages>
<!--_html_template_end_-->`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const OsSettingsPeoplePageElementBase=LockStateMixin(RouteOriginMixin(DeepLinkingMixin(PolymerElement)));class OsSettingsPeoplePageElement extends OsSettingsPeoplePageElementBase{static get is(){return"os-settings-people-page"}static get template(){return getTemplate$o()}static get properties(){return{prefs:{type:Object,notify:true},section_:{type:Number,value:Section$1.kPeople,readOnly:true},syncStatus:Object,accounts_:{type:Array,value(){return[]}},deviceAccount_:{type:Object,value(){return null}},authTokenInfo_:{type:Object,observer:"onAuthTokenChanged_"},profileIconUrl_:String,profileName_:String,profileEmail_:String,profileLabel_:String,fingerprintUnlockEnabled_:{type:Boolean,value(){return loadTimeData.getBoolean("fingerprintUnlockEnabled")},readOnly:true},isAccountManagerEnabled_:{type:Boolean,value(){return isAccountManagerEnabled()},readOnly:true},isRevampWayfindingEnabled_:{type:Boolean,value:()=>isRevampWayfindingEnabled(),readOnly:true},showParentalControls_:{type:Boolean,value(){return loadTimeData.valueExists("showParentalControls")&&loadTimeData.getBoolean("showParentalControls")}},showPasswordPromptDialog_:{type:Boolean,value:false},supportedSettingIds:{type:Object,value:()=>new Set([Setting.kSetUpParentalControls,Setting.kNonSplitSyncEncryptionOptions,Setting.kImproveSearchSuggestions,Setting.kMakeSearchesAndBrowsingBetter,Setting.kGoogleDriveSearchSuggestions])},showSyncSettingsRevamp_:{type:Boolean,value:loadTimeData.getBoolean("showSyncSettingsRevamp"),readOnly:true}}}constructor(){super();this.route=routes.OS_PEOPLE;this.syncBrowserProxy_=SyncBrowserProxyImpl.getInstance();this.clearAccountPasswordTimeoutId_=undefined}connectedCallback(){super.connectedCallback();if(this.isAccountManagerEnabled_){this.addWebUiListener("accounts-changed",this.updateAccounts_.bind(this));this.updateAccounts_()}else{ProfileInfoBrowserProxyImpl.getInstance().getProfileInfo().then(this.handleProfileInfo_.bind(this));this.addWebUiListener("profile-info-changed",this.handleProfileInfo_.bind(this))}this.syncBrowserProxy_.getSyncStatus().then(this.handleSyncStatus_.bind(this));this.addWebUiListener("sync-status-changed",this.handleSyncStatus_.bind(this))}ready(){super.ready();this.addFocusConfig(routes.SYNC,"#syncSetupRow");this.addFocusConfig(routes.ACCOUNT_MANAGER,"#accountManagerSubpageTrigger")}onPasswordRequested_(){this.showPasswordPromptDialog_=true}onInvalidateTokenRequested_(){this.authTokenInfo_=undefined}onPasswordPromptDialogClose_(){this.showPasswordPromptDialog_=false;if(!this.authTokenInfo_){Router.getInstance().navigateToPreviousRoute()}}getSyncAdvancedTitle_(){if(this.showSyncSettingsRevamp_){return this.i18n("syncAdvancedDevicePageTitle")}return this.i18n("syncAdvancedPageTitle")}afterRenderShowDeepLink_(settingId,getElementCallback){afterNextRender(this,(()=>{const deepLinkElement=getElementCallback();if(!deepLinkElement||deepLinkElement.hidden){console.warn(`Element with deep link id ${settingId} not focusable.`);return}this.showDeepLinkElement(deepLinkElement)}))}beforeDeepLinkAttempt(settingId){switch(settingId){case Setting.kSetUpParentalControls:this.afterRenderShowDeepLink_(settingId,(()=>{const parentalPage=this.shadowRoot.querySelector("settings-parental-controls-page");return parentalPage&&parentalPage.getSetupButton()}));return false;case Setting.kNonSplitSyncEncryptionOptions:this.afterRenderShowDeepLink_(settingId,(()=>{const syncPage=this.shadowRoot.querySelector("os-settings-sync-subpage");syncPage.forceEncryptionExpanded=true;flush();return syncPage&&syncPage.getEncryptionOptions()&&syncPage.getEncryptionOptions().getEncryptionsRadioButtons()}));return false;case Setting.kImproveSearchSuggestions:this.afterRenderShowDeepLink_(settingId,(()=>{const syncPage=this.shadowRoot.querySelector("os-settings-sync-subpage");return syncPage&&syncPage.getPersonalizationOptions()&&syncPage.getPersonalizationOptions().getSearchSuggestToggle()}));return false;case Setting.kMakeSearchesAndBrowsingBetter:this.afterRenderShowDeepLink_(settingId,(()=>{const syncPage=this.shadowRoot.querySelector("os-settings-sync-subpage");return syncPage&&syncPage.getPersonalizationOptions()&&syncPage.getPersonalizationOptions().getUrlCollectionToggle()}));return false;case Setting.kGoogleDriveSearchSuggestions:this.afterRenderShowDeepLink_(settingId,(()=>{const syncPage=this.shadowRoot.querySelector("os-settings-sync-subpage");return syncPage&&syncPage.getPersonalizationOptions()&&syncPage.getPersonalizationOptions().getDriveSuggestToggle()}));return false;default:return true}}currentRouteChanged(newRoute,oldRoute){super.currentRouteChanged(newRoute,oldRoute);if(newRoute===routes.SYNC||newRoute===this.route){this.attemptDeepLink()}}onAuthTokenObtained_(e){this.authTokenInfo_=e.detail}getSyncAndGoogleServicesSubtext_(){if(this.syncStatus&&this.syncStatus.hasError&&this.syncStatus.statusText){return this.syncStatus.statusText}return""}handleProfileInfo_(info){this.profileName_=info.name;if(info.iconUrl.startsWith("data:image/png;base64")){this.profileIconUrl_=convertImageSequenceToPng([info.iconUrl]);return}this.profileIconUrl_=info.iconUrl}async updateAccounts_(){const accounts=await AccountManagerBrowserProxyImpl.getInstance().getAccounts();this.accounts_=accounts;if(accounts.length===0){return}assert(accounts[0].isDeviceAccount,"The device account should always be first.");this.deviceAccount_=accounts[0];this.profileName_=this.deviceAccount_.fullName;this.profileEmail_=this.deviceAccount_.email;this.profileIconUrl_=this.deviceAccount_.pic;const labelTemplate=await sendWithPromise("getPluralString","profileLabel",this.accounts_.length);this.profileLabel_=loadTimeData.substituteString(labelTemplate,this.profileEmail_,this.accounts_.length)}handleSyncStatus_(syncStatus){this.syncStatus=syncStatus;if(!this.isAccountManagerEnabled_&&syncStatus&&syncStatus.signedIn&&syncStatus.signedInUsername){this.profileLabel_=syncStatus.signedInUsername}}onSyncClick_(){Router.getInstance().navigateTo(routes.SYNC)}onAccountManagerClick_(){if(this.isAccountManagerEnabled_){Router.getInstance().navigateTo(routes.ACCOUNT_MANAGER)}}getIconImageSet_(iconUrl){return getImage(iconUrl)}getProfileName_(){if(this.isAccountManagerEnabled_){return loadTimeData.getString("osProfileName")}return this.profileName_}showSignin_(syncStatus){return loadTimeData.getBoolean("signinAllowed")&&!syncStatus.signedIn}onAuthTokenChanged_(){if(this.clearAccountPasswordTimeoutId_){clearTimeout(this.clearAccountPasswordTimeoutId_)}if(this.authTokenInfo_===undefined){return}const IPC_SECONDS=2;const lifetimeMs=this.authTokenInfo_.lifetimeSeconds>IPC_SECONDS?(this.authTokenInfo_.lifetimeSeconds-IPC_SECONDS)*1e3:0;this.clearAccountPasswordTimeoutId_=setTimeout((()=>{this.authTokenInfo_=undefined}),lifetimeMs)}}customElements.define(OsSettingsPeoplePageElement.is,OsSettingsPeoplePageElement);function getTemplate$n(){return html`<!--_html_template_start_--><style include="settings-shared">#dataAccesProtectionDialogSubDescription{padding-top:10px}cr-dialog::part(dialog){width:370px}</style>

<cr-dialog id="warningDialog" show-on-attach>
  <div slot="title">
    $i18n{peripheralDataAccessProtectionWarningTitle}
  </div>
  <div slot="body">
    <div>$i18n{peripheralDataAccessProtectionWarningDescription}</div>
    <div id="dataAccesProtectionDialogSubDescription">
      $i18n{peripheralDataAccessProtectionWarningSubDescription}
    </div>
  </div>
  <div slot="button-container">
    <cr-button id="cancelButton" class="cancel-button" on-click="onCancelButtonClicked_">
      $i18n{peripheralDataAccessProtectionCancelButton}
    </cr-button>
    <cr-button id="disableConfirmation" class="action-button" on-click="onDisableClicked_">
      $i18n{peripheralDataAccessProtectionDisableButton}
    </cr-button>
  </div>
</cr-dialog>

<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsPeripheralDataAccessProtectionDialogElementBase=PrefsMixin(PolymerElement);class SettingsPeripheralDataAccessProtectionDialogElement extends SettingsPeripheralDataAccessProtectionDialogElementBase{static get is(){return"settings-peripheral-data-access-protection-dialog"}static get template(){return getTemplate$n()}static get properties(){return{prefName:{type:String}}}onDisableClicked_(){this.setPrefValue(this.prefName,true);this.getWarningDialog_().close()}onCancelButtonClicked_(){this.getWarningDialog_().close()}getWarningDialog_(){return castExists(this.shadowRoot.querySelector("#warningDialog"))}}customElements.define(SettingsPeripheralDataAccessProtectionDialogElement.is,SettingsPeripheralDataAccessProtectionDialogElement);function getTemplate$m(){return html`<!--_html_template_start_--><style include="settings-shared">:host([is-user-configurable_]) .peripheral-data-access-protection{--cr-disabled-opacity:1;cursor:pointer;opacity:1}#dataAccessProtectionWrapper:focus{outline:0}:host-context(body.revamp-wayfinding-enabled) settings-toggle-button{--cr-icon-button-margin-end:16px;--iron-icon-fill-color:var(--cros-sys-primary)}</style>

<os-settings-animated-pages id="pages" section="[[section_]]">
  <div route-path="default">
    <settings-card header-text="$i18n{privacyPageTitle}">
      <template is="dom-if" if="[[showPrivacyHubPage_]]" restamp>
        <template is="dom-if" if="[[isRevampWayfindingEnabled_]]">
          <cr-link-row id="privacyHubSubpageTrigger" start-icon="[[rowIcons_.privacyHub]]" on-click="onPrivacyHubClick_" label="$i18n{privacyHubTitle}" sub-label="$i18n{privacyHubSubtext}" role-description="$i18n{subpageArrowRoleDescription}">
          </cr-link-row>
          <div class="hr"></div>
        </template>
      </template>
      <template is="dom-if" if="[[!isGuestMode_]]" restamp>
        <template is="dom-if" if="[[isRevampWayfindingEnabled_]]">
          <cr-link-row id="syncSetupRow" start-icon="[[rowIcons_.sync]]" label="$i18n{syncAndNonPersonalizedServices}" sub-label="[[getSyncAndGoogleServicesSubtext_(syncStatus)]]" on-click="onSyncClick_" role-description="$i18n{subpageArrowRoleDescription}">
          </cr-link-row>
          <div class="hr"></div>
        </template>
        <cr-link-row id="lockScreenRow" start-icon="[[rowIcons_.lockScreen]]" on-click="onConfigureLockClick_" label="[[selectLockScreenTitleString_(hasPinLogin)]]" sub-label="[[getPasswordState_(hasPin,
                prefs.settings.enable_screen_lock.value)]]" role-description="$i18n{subpageArrowRoleDescription}">
        </cr-link-row>
        <cr-link-row id="manageOtherPeopleRow" class="hr" start-icon="[[rowIcons_.manageOtherPeople]]" label="$i18n{manageOtherPeople}" on-click="onManageOtherPeople_" role-description="$i18n{subpageArrowRoleDescription}">
        </cr-link-row>
        <div class="hr"></div>
        <template is="dom-if" if="[[isSmartPrivacyEnabled_]]" restamp>
          <cr-link-row id="smartPrivacySubpageTrigger" start-icon="[[rowIcons_.smartPrivacy]]" on-click="onSmartPrivacy_" label="$i18n{smartPrivacyTitle}" role-description="$i18n{subpageArrowRoleDescription}">
          </cr-link-row>
          <div class="hr"></div>
        </template>
      </template>


      <template is="dom-if" if="[[!showPrivacyHubPage_]]" restamp>
        <settings-toggle-button id="contentRecommendationsToggle" icon="[[rowIcons_.suggestedContent]]" pref="{{prefs.settings.suggested_content_enabled}}" label="$i18n{enableSuggestedContent}" sub-label="$i18n{enableSuggestedContentDesc}" learn-more-url="$i18n{suggestedContentLearnMoreURL}">
        </settings-toggle-button>
        <div class="hr"></div>
      </template>
      <settings-toggle-button id="verifiedAccessToggle" icon="[[rowIcons_.verifiedAccess]]" pref="{{
            prefs.cros.device.attestation_for_content_protection_enabled}}" label="$i18n{enableContentProtectionAttestation}" on-settings-boolean-control-change="onVerifiedAccessChange_" deep-link-focus-id$="[[Setting.kVerifiedAccess]]">
      </settings-toggle-button>
      <template is="dom-if" if="[[showPrivacyHubPage_]]" restamp>
        <template is="dom-if" if="[[!isRevampWayfindingEnabled_]]">
          <cr-link-row id="privacyHubSubpageTrigger" class="hr" on-click="onPrivacyHubClick_" label="$i18n{privacyHubTitle}" sub-label="$i18n{privacyHubSubtext}" role-description="$i18n{subpageArrowRoleDescription}">
          </cr-link-row>
        </template>
      </template>
      <template is="dom-if" if="[[isThunderboltSupported_]]">
        <div class="hr"></div>
        
        <div id="dataAccessProtectionWrapper" tabindex="0" on-focus="onDataAccessToggleFocus_" on-keypress="onDataAccessToggleKeyPress_">
          <settings-toggle-button id="crosSettingDataAccessToggle" class="peripheral-data-access-protection" icon="[[rowIcons_.dataAccessProtection]]" pref="{{prefs.cros.device.peripheral_data_access_enabled}}" label="$i18n{peripheralDataAccessProtectionToggleTitle}" sub-label="$i18n{peripheralDataAccessProtectionToggleDescription}" deep-link-focus-id$="[[Setting.kPeripheralDataAccessProtection]]" on-click="onPeripheralProtectionClick_" learn-more-url="$i18n{peripheralDataAccessLearnMoreURL}" hidden$="[[isLocalStateDataAccessPref_(
                  dataAccessProtectionPrefName_)]]" disabled="disabled" inverted>
          </settings-toggle-button>
          <settings-toggle-button id="localStateDataAccessToggle" class="peripheral-data-access-protection" icon="[[rowIcons_.dataAccessProtection]]" pref="{{prefs.settings.local_state_device_pci_data_access_enabled}}" label="$i18n{peripheralDataAccessProtectionToggleTitle}" sub-label="$i18n{peripheralDataAccessProtectionToggleDescription}" deep-link-focus-id$="[[Setting.kPeripheralDataAccessProtection]]" on-click="onPeripheralProtectionClick_" learn-more-url="$i18n{peripheralDataAccessLearnMoreURL}" hidden$="[[isCrosSettingDataAccessPref_(
                  dataAccessProtectionPrefName_)]]" disabled="disabled" inverted>
          </settings-toggle-button>
        </div>
      </template>
      <template is="dom-if" if="[[showSecureDnsSetting_]]">
        <settings-secure-dns prefs="{{prefs}}"></settings-secure-dns>
      </template>
    </settings-card>
  </div>

  <template is="dom-if" if="[[!isGuestMode_]]" restamp>
    <template is="dom-if" if="[[isRevampWayfindingEnabled_]]">
      <template is="dom-if" route-path="/osSyncSetup">
        <os-settings-subpage page-title="$i18n{syncPageTitle}" learn-more-url="$i18n{syncAndGoogleServicesLearnMoreURL}">
          <os-settings-sync-subpage sync-status="[[syncStatus]]" prefs="{{prefs}}">
          </os-settings-sync-subpage>
        </os-settings-subpage>
      </template>
      <template is="dom-if" route-path="/osSync">
        <os-settings-subpage page-title="[[getSyncAdvancedTitle_()]]" learn-more-url="$i18n{syncAndGoogleServicesLearnMoreURL}">
          <os-sync-controls-subpage>
          </os-sync-controls-subpage>
        </os-settings-subpage>
      </template>
    </template>
    <template is="dom-if" route-path="/osPrivacy/lockScreen">
      <os-settings-subpage page-title="[[selectLockScreenTitleString_(hasPinLogin)]]">
        <settings-lock-screen-subpage id="lockScreen" prefs="{{prefs}}" auth-token="[[authTokenInfo_.token]]" on-invalidate-auth-token-requested="onInvalidateTokenRequested_" on-password-requested="onPasswordRequested_">
        </settings-lock-screen-subpage>
      </os-settings-subpage>
    </template>
    <template is="dom-if" route-path="/osPrivacy/lockScreen/fingerprint">
      <os-settings-subpage page-title="$i18n{lockScreenFingerprintTitle}">
        <settings-fingerprint-list-subpage id="fingerprint-list" auth-token="[[authTokenInfo_.token]]" on-password-requested="onPasswordRequested_">
        </settings-fingerprint-list-subpage>
      </os-settings-subpage>
    </template>
    <template is="dom-if" route-path="/osPrivacy/accounts">
      <os-settings-subpage page-title="$i18n{manageOtherPeople}">
        <settings-manage-users-subpage prefs="{{prefs}}">
        </settings-manage-users-subpage>
      </os-settings-subpage>
    </template>
    <template is="dom-if" route-path="/osPrivacy/smartPrivacy">
      <os-settings-subpage page-title="$i18n{smartPrivacyTitle}">
        <settings-smart-privacy-subpage prefs="{{prefs}}">
        </settings-smart-privacy-subpage>
      </os-settings-subpage>
    </template>
    <template is="dom-if" route-path="/osPrivacy/privacyHub">
      <os-settings-subpage page-title="$i18n{privacyHubTitle}">
        <settings-privacy-hub-subpage prefs="{{prefs}}">
        </settings-privacy-hub-subpage>
      </os-settings-subpage>
    </template>
    <template is="dom-if" route-path="/osPrivacy/privacyHub/microphone">
      <os-settings-subpage page-title="$i18n{microphoneToggleTitle}">
        <settings-privacy-hub-microphone-subpage prefs="{{prefs}}">
        </settings-privacy-hub-microphone-subpage>
      </os-settings-subpage>
    </template>
    <template is="dom-if" route-path="/osPrivacy/privacyHub/camera">
      <os-settings-subpage page-title="$i18n{cameraToggleTitle}">
        <settings-privacy-hub-camera-subpage prefs="{{prefs}}">
        </settings-privacy-hub-camera-subpage>
      </os-settings-subpage>
    </template>
    <template is="dom-if" route-path="/osPrivacy/privacyHub/geolocation">
      <os-settings-subpage page-title="$i18n{geolocationAreaTitle}">
        <settings-privacy-hub-geolocation-subpage prefs="{{prefs}}">
        </settings-privacy-hub-geolocation-subpage>
      </os-settings-subpage>
    </template>
  </template>

</os-settings-animated-pages>

<template is="dom-if" if="[[showPasswordPromptDialog_]]" restamp>
  <settings-lock-screen-password-prompt-dialog id="passwordDialog" on-close="onPasswordPromptDialogClose_" on-auth-token-obtained="onAuthTokenObtained_">
  </settings-lock-screen-password-prompt-dialog>
</template>

<template is="dom-if" if="[[showDisableProtectionDialog_]]" restamp>
  <settings-peripheral-data-access-protection-dialog id="protectionDialog" on-close="onDisableProtectionDialogClosed_" prefs="{{prefs}}" pref-name="[[dataAccessProtectionPrefName_]]">
  </settings-peripheral-data-access-protection-dialog>
</template>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let instance$3=null;class PeripheralDataAccessBrowserProxyImpl{static getInstance(){return instance$3||(instance$3=new PeripheralDataAccessBrowserProxyImpl)}static setInstanceForTesting(obj){instance$3=obj}isThunderboltSupported(){return sendWithPromise("isThunderboltSupported")}getPolicyState(){return sendWithPromise("getPolicyState")}}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const OsSettingsPrivacyPageElementBase=PrefsMixin(LockStateMixin(RouteOriginMixin(DeepLinkingMixin(PolymerElement))));class OsSettingsPrivacyPageElement extends OsSettingsPrivacyPageElementBase{static get is(){return"os-settings-privacy-page"}static get template(){return getTemplate$m()}static get properties(){return{section_:{type:Number,value:Section$1.kPrivacyAndSecurity,readOnly:true},authTokenInfo_:{type:Object,observer:"onAuthTokenChanged_"},showPasswordPromptDialog_:{type:Boolean,value:false},syncStatus:Object,supportedSettingIds:{type:Object,value:()=>new Set([Setting.kVerifiedAccess,Setting.kUsageStatsAndCrashReports])},fingerprintUnlockEnabled_:{type:Boolean,value(){return loadTimeData.getBoolean("fingerprintUnlockEnabled")},readOnly:true},isSmartPrivacyEnabled_:{type:Boolean,value(){return loadTimeData.getBoolean("isSnoopingProtectionEnabled")||loadTimeData.getBoolean("isQuickDimEnabled")},readOnly:true},isRevenBranding_:{type:Boolean,value(){return loadTimeData.getBoolean("isRevenBranding")},readOnly:true},isGuestMode_:{type:Boolean,value(){return loadTimeData.getBoolean("isGuest")},readOnly:true},showDisableProtectionDialog_:{type:Boolean,value:false},isThunderboltSupported_:{type:Boolean,value:false},dataAccessProtectionPrefName_:{type:String,value:""},isUserConfigurable_:{type:Boolean,value:false,reflectToAttribute:true},dataAccessShiftTabPressed_:{type:Boolean,value:false},profileLabel_:String,showSecureDnsSetting_:{type:Boolean,value:function(){return loadTimeData.getBoolean("showSecureDnsSetting")},readOnly:true},showPrivacyHubPage_:{type:Boolean,value:function(){return loadTimeData.getBoolean("showPrivacyHubPage")&&!loadTimeData.getBoolean("isGuest")},readOnly:true},isHatsSurveyEnabled_:{type:Boolean,value:function(){return loadTimeData.getBoolean("isPrivacyHubHatsEnabled")},readOnly:true},isAccountManagerEnabled_:{type:Boolean,value(){return isAccountManagerEnabled()},readOnly:true},isRevampWayfindingEnabled_:{type:Boolean,value:()=>isRevampWayfindingEnabled(),readOnly:true},showSyncSettingsRevamp_:{type:Boolean,value:loadTimeData.getBoolean("showSyncSettingsRevamp"),readOnly:true},rowIcons_:{type:Object,value(){if(isRevampWayfindingEnabled()){return{privacyHub:"os-settings:privacy-controls",sync:"os-settings:sync-revamp",lockScreen:"os-settings:lock-revamp",manageOtherPeople:"os-settings:privacy-manage-people",smartPrivacy:"os-settings:privacy-smart-privacy",suggestedContent:"os-settings:content-recommend",verifiedAccess:"os-settings:privacy-verified-access",dataAccessProtection:"os-settings:privacy-data-access-protection"}}return{privacyHub:"",sync:"",lockScreen:"",manageOtherPeople:"",smartPrivacy:"",suggestedContent:"",verifiedAccess:"",dataAccessProtection:""}}}}}static get observers(){return["onDataAccessFlagsSet_(isThunderboltSupported_.*)"]}constructor(){super();this.clearAccountPasswordTimeoutId_=undefined;this.route=routes.OS_PRIVACY;this.browserProxy_=PeripheralDataAccessBrowserProxyImpl.getInstance();this.syncBrowserProxy_=SyncBrowserProxyImpl.getInstance();if(isRevampWayfindingEnabled()){this.supportedSettingIds.add(Setting.kNonSplitSyncEncryptionOptions);this.supportedSettingIds.add(Setting.kImproveSearchSuggestions);this.supportedSettingIds.add(Setting.kMakeSearchesAndBrowsingBetter);this.supportedSettingIds.add(Setting.kGoogleDriveSearchSuggestions)}this.browserProxy_.isThunderboltSupported().then((enabled=>{this.isThunderboltSupported_=enabled;if(this.isThunderboltSupported_){this.supportedSettingIds.add(Setting.kPeripheralDataAccessProtection)}}))}connectedCallback(){super.connectedCallback();if(this.isRevampWayfindingEnabled_){this.syncBrowserProxy_.getSyncStatus().then(this.handleSyncStatus_.bind(this));this.addWebUiListener("sync-status-changed",this.handleSyncStatus_.bind(this))}}ready(){super.ready();this.addEventListener(AUTH_TOKEN_INVALID_EVENT_TYPE,this.onAuthTokenInvalid_);this.addFocusConfig(routes.ACCOUNTS,"#manageOtherPeopleRow");this.addFocusConfig(routes.LOCK_SCREEN,"#lockScreenRow");if(this.isRevampWayfindingEnabled_){this.addFocusConfig(routes.SYNC,"#syncSetupRow")}}afterRenderShowDeepLink_(settingId,getElementCallback){afterNextRender(this,(()=>{const deepLinkElement=getElementCallback();if(!deepLinkElement||deepLinkElement.hidden){console.warn(`Element with deep link id ${settingId} not focusable.`);return}this.showDeepLinkElement(deepLinkElement)}))}beforeDeepLinkAttempt(settingId){switch(settingId){case Setting.kNonSplitSyncEncryptionOptions:this.afterRenderShowDeepLink_(settingId,(()=>{const syncPage=this.shadowRoot.querySelector("os-settings-sync-subpage");syncPage.forceEncryptionExpanded=true;flush();return syncPage&&syncPage.getEncryptionOptions()&&syncPage.getEncryptionOptions().getEncryptionsRadioButtons()}));return false;case Setting.kImproveSearchSuggestions:this.afterRenderShowDeepLink_(settingId,(()=>{const syncPage=this.shadowRoot.querySelector("os-settings-sync-subpage");return syncPage&&syncPage.getPersonalizationOptions()&&syncPage.getPersonalizationOptions().getSearchSuggestToggle()}));return false;case Setting.kMakeSearchesAndBrowsingBetter:this.afterRenderShowDeepLink_(settingId,(()=>{const syncPage=this.shadowRoot.querySelector("os-settings-sync-subpage");return syncPage&&syncPage.getPersonalizationOptions()&&syncPage.getPersonalizationOptions().getUrlCollectionToggle()}));return false;case Setting.kGoogleDriveSearchSuggestions:this.afterRenderShowDeepLink_(settingId,(()=>{const syncPage=this.shadowRoot.querySelector("os-settings-sync-subpage");return syncPage&&syncPage.getPersonalizationOptions()&&syncPage.getPersonalizationOptions().getDriveSuggestToggle()}));return false;default:return true}}currentRouteChanged(newRoute,oldRoute){super.currentRouteChanged(newRoute,oldRoute);if(newRoute===routes.SYNC||newRoute===this.route){this.attemptDeepLink()}}selectLockScreenTitleString_(hasPinLogin){if(hasPinLogin){return this.i18n("lockScreenTitleLoginLock")}return this.i18n("lockScreenTitleLock")}getPasswordState_(hasPin,enableScreenLock){if(!enableScreenLock){return this.i18n("lockScreenNone")}if(hasPin){return this.i18n("lockScreenPinOrPassword")}return this.i18n("lockScreenPasswordOnly")}getSyncAdvancedTitle_(){if(this.showSyncSettingsRevamp_){return this.i18n("syncAdvancedDevicePageTitle")}return this.i18n("syncAdvancedPageTitle")}getSyncAndGoogleServicesSubtext_(){if(this.syncStatus&&this.syncStatus.hasError&&this.syncStatus.statusText){return this.syncStatus.statusText}return""}onPasswordRequested_(){this.showPasswordPromptDialog_=true}onInvalidateTokenRequested_(){this.authTokenInfo_=undefined}onPasswordPromptDialogClose_(){this.showPasswordPromptDialog_=false;if(!this.authTokenInfo_){Router.getInstance().navigateToPreviousRoute()}}onAuthTokenObtained_(e){this.authTokenInfo_=e.detail}onAuthTokenInvalid_(){this.authTokenInfo_=undefined}onConfigureLockClick_(e){e.preventDefault();Router.getInstance().navigateTo(routes.LOCK_SCREEN)}onManageOtherPeople_(){Router.getInstance().navigateTo(routes.ACCOUNTS)}onSmartPrivacy_(){Router.getInstance().navigateTo(routes.SMART_PRIVACY)}handleSyncStatus_(syncStatus){this.syncStatus=syncStatus;if(!this.isAccountManagerEnabled_&&syncStatus&&syncStatus.signedIn&&syncStatus.signedInUsername){this.profileLabel_=syncStatus.signedInUsername}}onSyncClick_(){Router.getInstance().navigateTo(routes.SYNC)}onPrivacyHubClick_(){chrome.metricsPrivate.recordEnumerationValue("ChromeOS.PrivacyHub.Opened",PrivacyHubNavigationOrigin.SYSTEM_SETTINGS,Object.keys(PrivacyHubNavigationOrigin).length);Router.getInstance().navigateTo(routes.PRIVACY_HUB)}onAuthTokenChanged_(){if(this.clearAccountPasswordTimeoutId_){clearTimeout(this.clearAccountPasswordTimeoutId_)}if(this.authTokenInfo_===undefined){return}const IPC_SECONDS=2;const lifetimeMs=this.authTokenInfo_.lifetimeSeconds>IPC_SECONDS?(this.authTokenInfo_.lifetimeSeconds-IPC_SECONDS)*1e3:0;this.clearAccountPasswordTimeoutId_=setTimeout((()=>{this.authTokenInfo_=undefined}),lifetimeMs)}onDisableProtectionDialogClosed_(){this.showDisableProtectionDialog_=false}onPeripheralProtectionClick_(){if(!this.isUserConfigurable_){return}if(!this.getPref(this.dataAccessProtectionPrefName_).value){this.showDisableProtectionDialog_=true;return}this.setPrefValue(this.dataAccessProtectionPrefName_,false)}onDataAccessToggleFocus_(){if(!this.isUserConfigurable_){return}if(this.dataAccessShiftTabPressed_){this.dataAccessShiftTabPressed_=false;this.$.verifiedAccessToggle.focus();return}this.shadowRoot.querySelector(".peripheral-data-access-protection").focus()}onDataAccessToggleKeyPress_(event){if(event.shiftKey&&event.key==="Tab"){this.dataAccessShiftTabPressed_=true;return}if(event.key!=="Enter"&&event.key!==" "||!this.isUserConfigurable_){return}event.stopPropagation();if(!this.getPref(this.dataAccessProtectionPrefName_).value){this.showDisableProtectionDialog_=true;return}this.setPrefValue(this.dataAccessProtectionPrefName_,false)}onDataAccessFlagsSet_(){if(this.isThunderboltSupported_){this.browserProxy_.getPolicyState().then((policy=>{this.dataAccessProtectionPrefName_=policy.prefName;this.isUserConfigurable_=policy.isUserConfigurable})).then((()=>{afterNextRender(this,(()=>{this.shadowRoot.querySelector(".peripheral-data-access-protection").shadowRoot.querySelector("#control").addEventListener("keydown",this.onDataAccessToggleKeyPress_.bind(this))}))}))}}onVerifiedAccessChange_(){const enabled=this.$.verifiedAccessToggle.checked;recordSettingChange(Setting.kVerifiedAccess,{boolValue:enabled})}isLocalStateDataAccessPref_(){return this.dataAccessProtectionPrefName_==="settings.local_state_device_pci_data_access_enabled"}isCrosSettingDataAccessPref_(){return this.dataAccessProtectionPrefName_==="cros.device.peripheral_data_access_enabled"}}customElements.define(OsSettingsPrivacyPageElement.is,OsSettingsPrivacyPageElement);function getTemplate$l(){return html`<!--_html_template_start_--><style include="settings-shared">:host-context(body.revamp-wayfinding-enabled) settings-toggle-button{--cr-icon-button-margin-end:16px;--iron-icon-fill-color:var(--cros-sys-primary)}</style>

<settings-card header-text="$i18n{osSearchPageTitle}">
  
  <template is="dom-if" if="[[!isQuickAnswersSupported_]]">
    <settings-search-engine deep-link-focus-id$="[[Setting.kPreferredSearchEngine]]">
    </settings-search-engine>
  </template>
  <template is="dom-if" if="[[isQuickAnswersSupported_]]">
    <cr-link-row id="searchRow" start-icon="[[rowIcons_.searchEngine]]" label="$i18n{searchSubpageTitle}" on-click="onSearchClick_" role-description="$i18n{subpageArrowRoleDescription}">
    </cr-link-row>
  </template>

  
  <template is="dom-if" if="[[isAssistantAllowed_]]">
    <cr-link-row id="assistantRow" start-icon="[[rowIcons_.assistant]]" class="hr" label="$i18n{searchGoogleAssistant}" sub-label="[[getAssistantEnabledDisabledLabel_(
            prefs.settings.voice_interaction.enabled.value)]]" on-click="onGoogleAssistantClick_" role-description="$i18n{subpageArrowRoleDescription}">
    </cr-link-row>
  </template>
  <template is="dom-if" if="[[isRevampWayfindingEnabled_]]">
    <settings-toggle-button id="contentRecommendationsToggle" class="hr" icon="[[rowIcons_.contentRecommendations]]" pref="{{prefs.settings.suggested_content_enabled}}" label="$i18n{enableSuggestedContent}" sub-label="$i18n{enableSuggestedContentDesc}" learn-more-url="$i18n{suggestedContentLearnMoreURL}">
    </settings-toggle-button>
  </template>
</settings-card>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SearchAndAssistantSettingsCardElementBase=DeepLinkingMixin(RouteOriginMixin(I18nMixin(PolymerElement)));class SearchAndAssistantSettingsCardElement extends SearchAndAssistantSettingsCardElementBase{static get is(){return"search-and-assistant-settings-card"}static get template(){return getTemplate$l()}static get properties(){return{prefs:{type:Object,notify:true},isQuickAnswersSupported_:{type:Boolean,value:()=>isQuickAnswersSupported()},isAssistantAllowed_:{type:Boolean,value:()=>isAssistantAllowed()},supportedSettingIds:{type:Object,value:()=>new Set([Setting.kPreferredSearchEngine])},isRevampWayfindingEnabled_:{type:Boolean,value(){return isRevampWayfindingEnabled()},readOnly:true},rowIcons_:{type:Object,value(){if(isRevampWayfindingEnabled()){return{searchEngine:"os-settings:explore",assistant:"os-settings:assistant",contentRecommendations:"os-settings:content-recommend"}}return{searchEngine:"",assistant:"",contentRecommendations:""}}}}}constructor(){super();this.route=this.isRevampWayfindingEnabled_?routes.SYSTEM_PREFERENCES:routes.OS_SEARCH}ready(){super.ready();this.addFocusConfig(routes.SEARCH_SUBPAGE,"#searchRow");this.addFocusConfig(routes.GOOGLE_ASSISTANT,"#assistantRow")}currentRouteChanged(newRoute,oldRoute){super.currentRouteChanged(newRoute,oldRoute);if(newRoute!==this.route){return}this.attemptDeepLink()}onSearchClick_(){assert(this.isQuickAnswersSupported_);Router.getInstance().navigateTo(routes.SEARCH_SUBPAGE)}onGoogleAssistantClick_(){assert(this.isAssistantAllowed_);Router.getInstance().navigateTo(routes.GOOGLE_ASSISTANT)}getAssistantEnabledDisabledLabel_(isAssistantEnabled){return this.i18n(isAssistantEnabled?"searchGoogleAssistantEnabled":"searchGoogleAssistantDisabled")}}customElements.define(SearchAndAssistantSettingsCardElement.is,SearchAndAssistantSettingsCardElement);function getTemplate$k(){return html`<!--_html_template_start_--><style include="settings-shared"></style>

<os-settings-animated-pages section="[[section_]]">
  <div route-path="default">
    <search-and-assistant-settings-card prefs="{{prefs}}">
    </search-and-assistant-settings-card>
  </div>

  <template is="dom-if" if="[[isQuickAnswersSupported_]]">
    <template is="dom-if" route-path="/osSearch/search">
      <os-settings-subpage page-title="$i18n{searchSubpageTitle}">
        <settings-search-subpage prefs="{{prefs}}">
        </settings-search-subpage>
      </os-settings-subpage>
    </template>
  </template>
  <template is="dom-if" if="[[isAssistantAllowed_]]">
    <template is="dom-if" route-path="/googleAssistant">
      <os-settings-subpage page-title="$i18n{googleAssistantPageTitle}">
        <settings-google-assistant-subpage prefs="{{prefs}}">
        </settings-google-assistant-subpage>
      </os-settings-subpage>
    </template>
  </template>
</os-settings-animated-pages>
<!--_html_template_end_-->`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class OsSettingsSearchPageElement extends PolymerElement{static get is(){return"os-settings-search-page"}static get template(){return getTemplate$k()}static get properties(){return{prefs:{type:Object,notify:true},section_:{type:Number,value:Section$1.kSearchAndAssistant,readOnly:true},isQuickAnswersSupported_:{type:Boolean,value:()=>isQuickAnswersSupported()},isAssistantAllowed_:{type:Boolean,value:()=>isAssistantAllowed()}}}}customElements.define(OsSettingsSearchPageElement.is,OsSettingsSearchPageElement);
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let instance$2=null;class PersonalizationHubBrowserProxyImpl{static getInstance(){return instance$2||(instance$2=new PersonalizationHubBrowserProxyImpl)}static setInstanceForTesting(obj){instance$2=obj}openPersonalizationHub(){chrome.send("openPersonalizationHub")}}function getTemplate$j(){return html`<!--_html_template_start_--><style include="settings-shared"></style>
<os-settings-animated-pages id="pages" section="[[section_]]">
  <div route-path="default">
    <settings-card header-text="$i18n{personalizationPageTitle}">
      <cr-link-row id="personalizationHubButton" start-icon="[[getPersonalizationRowIcon_()]]" label="$i18n{personalizationHubTitle}" sub-label="$i18n{personalizationHubSubtitle}" on-click="openPersonalizationHub_" external>
      </cr-link-row>
    </settings-card>
  </div>

</os-settings-animated-pages>
<!--_html_template_end_-->`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsPersonalizationPageElementBase=I18nMixin(PolymerElement);class SettingsPersonalizationPageElement extends SettingsPersonalizationPageElementBase{static get is(){return"settings-personalization-page"}static get template(){return getTemplate$j()}static get properties(){return{section_:{type:Number,value:Section$1.kPersonalization,readOnly:true},isRevampWayfindingEnabled_:{type:Boolean,value(){return isRevampWayfindingEnabled()}}}}constructor(){super();this.personalizationHubBrowserProxy_=PersonalizationHubBrowserProxyImpl.getInstance()}getPersonalizationRowIcon_(){return this.isRevampWayfindingEnabled_?"os-settings:personalization-revamp":""}openPersonalizationHub_(){this.personalizationHubBrowserProxy_.openPersonalizationHub()}}customElements.define(SettingsPersonalizationPageElement.is,SettingsPersonalizationPageElement);function getTemplate$i(){return html`<!--_html_template_start_--><style include="settings-shared">:host-context(body.revamp-wayfinding-enabled) settings-toggle-button{--cr-icon-button-margin-end:16px;--iron-icon-fill-color:var(--cros-sys-primary)}</style>

<settings-card header-text="[[getHeaderText_()]]">
  <settings-toggle-button id="snapWindowSuggestionsToggle" icon="os-settings:multitasking" pref="{{prefs.ash.snap_window_suggestions.enabled}}" label="[[getLabelText_()]]" sub-label="[[getDescriptionText_()]]" deep-link-focus-id$="[[Setting.kSnapWindowSuggestions]]">
  </settings-toggle-button>
</settings-card><!--_html_template_end_-->`}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const MultitaskingSettingsCardElementBase=RouteObserverMixin(DeepLinkingMixin(I18nMixin(PolymerElement)));class MultitaskingSettingsCardElement extends MultitaskingSettingsCardElementBase{static get is(){return"multitasking-settings-card"}static get template(){return getTemplate$i()}static get properties(){return{prefs:{type:Object,notify:true},supportedSettingIds:{type:Object,value:()=>new Set([Setting.kSnapWindowSuggestions])},shouldShowMultitasking_:{type:Boolean,value(){return shouldShowMultitasking()},readOnly:true}}}currentRouteChanged(newRoute){if(newRoute!==routes.SYSTEM_PREFERENCES){return}this.attemptDeepLink()}getHeaderText_(){return this.i18n("multitaskingSettingsCardTitle")}getLabelText_(){return this.i18n("snapWindowLabel")}getDescriptionText_(){return this.i18n("snapWindowDescription")}}customElements.define(MultitaskingSettingsCardElement.is,MultitaskingSettingsCardElement);function getTemplate$h(){return html`<!--_html_template_start_--><style include="settings-shared">#restoreIcon{fill:var(--cros-sys-primary);margin-inline-end:16px}#textContainer{padding-inline-end:var(--cr-section-padding)}</style>

<settings-card header-text="$i18n{onStartupSettingsCardTitle}">
  <div class="settings-box first two-line">
    <template is="dom-if" if="[[isRevampWayfindingEnabled_]]">
      <iron-icon id="restoreIcon" icon="os-settings:restore-revamp">
      </iron-icon>
    </template>
    <div id="textContainer" class="start settings-box-text" aria-hidden="true">
      $i18n{onStartupTitle}
      <div class="secondary">$i18n{onStartupDescription}</div>
    </div>
    <settings-dropdown-menu id="onStartupDropdown" label="$i18n{onStartupTitle}" pref="{{prefs.settings.restore_apps_and_pages}}" menu-options="[[onStartupDropdownOptions_]]" deep-link-focus-id$="[[Setting.kRestoreAppsAndPages]]">
    </settings-dropdown-menu>
  </div>
</settings-card>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const StartupSettingsCardElementBase=RouteObserverMixin(DeepLinkingMixin(PolymerElement));class StartupSettingsCardElement extends StartupSettingsCardElementBase{static get is(){return"startup-settings-card"}static get template(){return getTemplate$h()}static get properties(){return{prefs:{type:Object,notify:true},supportedSettingIds:{type:Object,value:()=>new Set([Setting.kRestoreAppsAndPages])},isRevampWayfindingEnabled_:{type:Boolean,value(){return isRevampWayfindingEnabled()},readOnly:true},onStartupDropdownOptions_:{type:Array,value:()=>[{value:1,name:loadTimeData.getString("onStartupAlways")},{value:2,name:loadTimeData.getString("onStartupAskEveryTime")},{value:3,name:loadTimeData.getString("onStartupDoNotRestore")}],readOnly:true}}}currentRouteChanged(newRoute){if(newRoute!==routes.SYSTEM_PREFERENCES){return}this.attemptDeepLink()}}customElements.define(StartupSettingsCardElement.is,StartupSettingsCardElement);function getTemplate$g(){return html`<!--_html_template_start_--><style include="settings-shared"></style>

<settings-card header-text="[[getHeaderText_()]]">
  <template is="dom-if" if="[[shouldShowStorageRow_]]">
    <cr-link-row id="storageRow" start-icon="[[rowIcons_.storage]]" label="$i18n{storageTitle}" on-click="showStorageSubpage_" role-description="$i18n{subpageArrowRoleDescription}">
    </cr-link-row>
  </template>
  <cr-link-row id="powerRow" start-icon="[[rowIcons_.power]]" class="hr" label="$i18n{powerTitle}" on-click="showPowerSubpage_" role-description="$i18n{subpageArrowRoleDescription}">
  </cr-link-row>
</settings-card>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const StorageAndPowerSettingsCardElementBase=RouteOriginMixin(I18nMixin(PolymerElement));class StorageAndPowerSettingsCardElement extends StorageAndPowerSettingsCardElementBase{static get is(){return"storage-and-power-settings-card"}static get template(){return getTemplate$g()}static get properties(){return{shouldShowStorageRow_:{type:Boolean,value:()=>!loadTimeData.getBoolean("isDemoSession"),readOnly:true},rowIcons_:{type:Object,value(){if(isRevampWayfindingEnabled()){return{storage:"os-settings:storage",power:"os-settings:power"}}return{storage:"",power:""}}}}}constructor(){super();this.route=routes.SYSTEM_PREFERENCES}ready(){super.ready();this.addFocusConfig(routes.STORAGE,"#storageRow");this.addFocusConfig(routes.POWER,"#powerRow")}getHeaderText_(){return this.i18n("storageAndPowerTitle")}showStorageSubpage_(){Router.getInstance().navigateTo(routes.STORAGE)}showPowerSubpage_(){Router.getInstance().navigateTo(routes.POWER)}}customElements.define(StorageAndPowerSettingsCardElement.is,StorageAndPowerSettingsCardElement);function getTemplate$f(){return html`<!--_html_template_start_--><style include="settings-shared"></style>

<os-settings-animated-pages id="pages" section="[[section_]]">
  <div route-path="default">
    <storage-and-power-settings-card></storage-and-power-settings-card>

    <language-settings-card prefs="{{prefs}}" languages="[[languages]]" language-helper="[[languageHelper]]">
    </language-settings-card>

    <date-time-settings-card prefs="{{prefs}}" active-time-zone-display-name="{{activeTimeZoneDisplayName_}}">
    </date-time-settings-card>

    <template is="dom-if" if="[[shouldShowFilesSettingsCard_]]">
      <files-settings-card prefs="{{prefs}}"></files-settings-card>
    </template>

    <search-and-assistant-settings-card prefs="{{prefs}}">
    </search-and-assistant-settings-card>

    <template is="dom-if" if="[[shouldShowStartupSettingsCard_]]">
      <startup-settings-card prefs="{{prefs}}"></startup-settings-card>
    </template>

    <template is="dom-if" if="[[shouldShowMultitaskingCard_]]">
      <multitasking-settings-card prefs="{{prefs}}">
      </multitasking-settings-card>
    </template>

    <template is="dom-if" if="[[shouldShowResetSettingsCard_]]">
      <reset-settings-card></reset-settings-card>
    </template>
  </div>

  
  <template is="dom-if" route-path="/dateTime/timeZone">
    <os-settings-subpage page-title="$i18n{timeZoneSubpageTitle}">
      <timezone-subpage prefs="{{prefs}}" active-time-zone-display-name="{{activeTimeZoneDisplayName_}}">
      </timezone-subpage>
    </os-settings-subpage>
  </template>

  
  <template is="dom-if" route-path="/smbShares">
    <os-settings-subpage page-title="$i18n{smbSharesTitle}">
      <settings-smb-shares-page prefs="{{prefs}}">
      </settings-smb-shares-page>
    </os-settings-subpage>
  </template>

  <template is="dom-if" if="[[shouldStampGoogleDriveSubpage_]]">
    <template is="dom-if" route-path="/googleDrive">
      <os-settings-subpage page-title="$i18n{googleDriveLabel}" show-spinner="[[showSpinner_]]">
        <settings-google-drive-subpage prefs="{{prefs}}" show-spinner="{{showSpinner_}}">
        </settings-google-drive-subpage>
      </os-settings-subpage>
    </template>
  </template>

  <template is="dom-if" if="[[shouldStampOfficeSubpage_]]">
    <template is="dom-if" route-path="/officeFiles">
      <os-settings-subpage page-title="$i18n{officeSubpageTitle}">
        <settings-office-page prefs="{{prefs}}">
        </settings-office-page>
      </os-settings-subpage>
    </template>

    <template is="dom-if" route-path="/oneDrive">
      <os-settings-subpage page-title="$i18n{oneDriveLabel}">
        <settings-one-drive-subpage prefs="{{prefs}}">
        </settings-one-drive-subpage>
      </os-settings-subpage>
    </template>
  </template>

  
  <template is="dom-if" route-path="/osLanguages/languages">
    <os-settings-subpage page-title="$i18n{languagesPageTitle}">
      <os-settings-languages-page-v2 prefs="{{prefs}}" languages="[[languages]]" language-helper="[[languageHelper]]">
      </os-settings-languages-page-v2>
    </os-settings-subpage>
  </template>

  
  <template is="dom-if" route-path="/osLanguages/languages/appLanguages">
    <os-settings-subpage page-title="$i18n{appLanguagesTitle}">
      <os-settings-app-languages-page prefs="{{prefs}}">
      </os-settings-app-languages-page>
    </os-settings-subpage>
  </template>

  
  <template is="dom-if" if="[[isQuickAnswersSupported_]]">
    <template is="dom-if" route-path="/osSearch/search">
      <os-settings-subpage page-title="$i18n{searchSubpageTitle}">
        <settings-search-subpage prefs="{{prefs}}">
        </settings-search-subpage>
      </os-settings-subpage>
    </template>
  </template>

  <template is="dom-if" if="[[isAssistantAllowed_]]">
    <template is="dom-if" route-path="/googleAssistant">
      <os-settings-subpage page-title="$i18n{googleAssistantPageTitle}">
        <settings-google-assistant-subpage prefs="{{prefs}}">
        </settings-google-assistant-subpage>
      </os-settings-subpage>
    </template>
  </template>

  
  <template is="dom-if" route-path="/storage">
    <os-settings-subpage page-title="$i18n{storageTitle}">
      <settings-storage prefs="{{prefs}}">
      </settings-storage>
    </os-settings-subpage>
  </template>

  <template is="dom-if" if="[[isExternalStorageEnabled_]]">
    <template is="dom-if" route-path="/storage/externalStoragePreferences">
      <os-settings-subpage page-title="$i18n{storageExternal}">
        <settings-storage-external prefs="{{prefs}}">
        </settings-storage-external>
      </os-settings-subpage>
    </template>
  </template>

  <template is="dom-if" route-path="/power">
    <os-settings-subpage page-title="$i18n{powerTitle}">
      <settings-power prefs="{{prefs}}">
      </settings-power>
    </os-settings-subpage>
  </template>
</os-settings-animated-pages>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsSystemPreferencesPageElementBase=I18nMixin(PolymerElement);class SettingsSystemPreferencesPageElement extends SettingsSystemPreferencesPageElementBase{static get is(){return"settings-system-preferences-page"}static get template(){return getTemplate$f()}static get properties(){return{section_:{type:Number,value:Section$1.kSystemPreferences,readOnly:true},prefs:{type:Object,notify:true},languages:Object,languageHelper:Object,activeTimeZoneDisplayName_:{type:String,value:loadTimeData.getString("timeZoneName")},shouldShowFilesSettingsCard_:{type:Boolean,value:()=>!isGuest()},shouldShowMultitaskingCard_:{type:Boolean,value:()=>shouldShowMultitasking()},shouldShowResetSettingsCard_:{type:Boolean,value:()=>isPowerwashAllowed()},isQuickAnswersSupported_:{type:Boolean,value:()=>isQuickAnswersSupported()},isAssistantAllowed_:{type:Boolean,value:()=>isAssistantAllowed()},isExternalStorageEnabled_:{type:Boolean,value:()=>isExternalStorageEnabled()},shouldStampGoogleDriveSubpage_:{type:Boolean,value:()=>!!routes.GOOGLE_DRIVE},shouldStampOfficeSubpage_:{type:Boolean,value:()=>!!routes.OFFICE},shouldShowStartupSettingsCard_:{type:Boolean,value:()=>shouldShowStartup(),readOnly:true}}}connectedCallback(){super.connectedCallback();assert(isRevampWayfindingEnabled(),"OsSettingsRevampWayfinding feature must be enabled.")}}customElements.define(SettingsSystemPreferencesPageElement.is,SettingsSystemPreferencesPageElement);
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function isValidArray(arr){if(arr instanceof Array&&Object.isFrozen(arr)){return true}return false}function getStaticString(literal){const isStaticString=isValidArray(literal)&&!!literal.raw&&isValidArray(literal.raw)&&literal.length===literal.raw.length&&literal.length===1;assert(isStaticString,"static_types.js only allows static strings");return literal.join("")}function createTypes(_ignore,literal){return getStaticString(literal)}const rules={createHTML:createTypes,createScript:createTypes,createScriptURL:createTypes};let staticPolicy;if(window.trustedTypes){staticPolicy=window.trustedTypes.createPolicy("static-types",rules)}else{staticPolicy=rules}function getTrustedScriptURL(literal){return staticPolicy.createScriptURL("",literal)}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ADVANCED_SECTION_PAGES=["settings-crostini-page","settings-date-time-page","os-settings-files-page","os-settings-languages-section","os-settings-printing-page","os-settings-reset-page"];let lazyLoadPromise=null;function ensureLazyLoaded(){if(!lazyLoadPromise){const script=document.createElement("script");script.type="module";script.src=getTrustedScriptURL`./lazy_load.js`;document.body.appendChild(script);lazyLoadPromise=Promise.all(ADVANCED_SECTION_PAGES.map((name=>customElements.whenDefined(name))))}return lazyLoadPromise}function getTemplate$e(){return html`<!--_html_template_start_--><slot></slot>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SettingsIdleLoadElement extends PolymerElement{static get is(){return"settings-idle-load"}static get template(){return getTemplate$e()}static get properties(){return{}}constructor(){super();this.child_=null;this.instance_=null;this.loading_=null;this.idleCallback_=0}connectedCallback(){super.connectedCallback();this.idleCallback_=requestIdleCallback((()=>{this.get()}))}disconnectedCallback(){super.disconnectedCallback();window.cancelIdleCallback(this.idleCallback_)}requestLazyModule_(){return new Promise(((resolve,reject)=>{ensureLazyLoaded().then((()=>{const slot=this.shadowRoot.querySelector("slot");assert(slot);const template=slot.assignedNodes({flatten:true}).filter((n=>n.nodeType===Node.ELEMENT_NODE))[0];const TemplateClass=templatize(template,this,{mutableData:false,forwardHostProp:this._forwardHostPropV2});this.instance_=new TemplateClass;assert(!this.child_);this.child_=this.instance_.root.firstElementChild;assert(this.child_);this.parentNode.insertBefore(this.instance_.root,this);resolve(this.child_);const event=new CustomEvent("lazy-loaded",{bubbles:true,composed:true});this.dispatchEvent(event)}),reject)}))}get(){if(this.loading_){return this.loading_}this.loading_=this.requestLazyModule_();return this.loading_}_forwardHostPropV2(prop,value){if(this.instance_){this.instance_.forwardHostProp(prop,value)}}}customElements.define(SettingsIdleLoadElement.is,SettingsIdleLoadElement);function getTemplate$d(){return html`<!--_html_template_start_--><style>:host{outline:0}:host-context(body.revamp-wayfinding-enabled):host(:not([active])){display:none}</style>

<div id="focusHost" tabindex="-1"></div>
<slot></slot>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class PageDisplayerElement extends PolymerElement{static get is(){return"page-displayer"}static get template(){return getTemplate$d()}static get properties(){return{active:{type:Boolean,value:false,reflectToAttribute:true},section:{type:Number,reflectToAttribute:true}}}ready(){super.ready();assert(this.section in Section$1,`Invalid section: ${this.section}.`)}focus(){this.shadowRoot.getElementById("focusHost").focus()}}customElements.define(PageDisplayerElement.is,PageDisplayerElement);function getTemplate$c(){return html`<!--_html_template_start_--><style include="cr-hidden-style settings-shared">:host-context(body.revamp-wayfinding-enabled):host{--page-backdrop-bg-color:var(--cros-sys-surface1);background-color:var(--page-backdrop-bg-color);border-radius:20px;box-sizing:border-box;padding-bottom:16px;padding-inline-end:16px;padding-inline-start:16px}@media (prefers-color-scheme:dark){:host-context(body.revamp-wayfinding-enabled):host{--page-backdrop-bg-color:var(--cros-sys-app_base)}}:host-context(body.revamp-wayfinding-enabled):host(:not(.showing-subpage)){padding-top:8px}:host([is-subpage-animating]){overflow:hidden}:host(.showing-subpage) page-displayer:not([active]){display:none}.banner{align-items:center;background-color:var(--cros-bg-color);border:var(--cr-hairline);border-radius:var(--cr-card-border-radius);display:flex;margin-bottom:var(--cr-section-vertical-margin);margin-top:var(--cr-section-vertical-margin)}.eol-warning-icon{align-items:center;background:rgba(var(--cros-icon-color-warning-rgb),var(--cros-second-tone-opacity));border-radius:50%;display:flex;flex:0 0 auto;height:40px;justify-content:center;margin-inline-end:var(--cr-section-padding);width:40px}.eol-warning-icon iron-icon{--iron-icon-fill-color:var(--cros-icon-color-warning);margin:0}#advancedToggle{--ink-color:currentColor;align-items:center;background:0 0;border:none;box-shadow:none;color:currentColor;display:flex;font-weight:400;margin-bottom:3px;margin-top:12px;min-height:32px;padding:0 12px}:host-context(.focus-outline-visible) #advancedToggle:focus{outline:2px solid var(--cros-focus-ring-color)}#openInNewBrowserSettingsIcon{fill:var(--cros-link-color);margin-inline-start:0}#secondaryUserIcon{align-items:center;background:rgba(var(--cros-icon-color-prominent-rgb),var(--cros-second-tone-opacity));border-radius:50%;display:flex;flex:0 0 auto;height:40px;justify-content:center;margin-inline-end:var(--cr-section-padding);width:40px}#secondaryUserIcon iron-icon{--iron-icon-fill-color:var(--cros-icon-color-prominent);margin:0}#toggleContainer{align-items:center;color:var(--cros-text-color-primary);display:flex;font:inherit;justify-content:center;margin-bottom:0;margin-top:0;padding:0}#toggleSpacer{padding-top:33px}iron-icon{margin-inline-start:16px}eol-offer-section{margin-top:20px}</style>


<settings-languages prefs="{{prefs}}" languages="{{languages_}}" language-helper="{{languageHelper_}}">
</settings-languages>

<div id="basicPageContainer" hidden$="[[!shouldShowBasicPageContainer_]]">
    <template is="dom-if" if="[[computeShowUpdateRequiredEolBanner_(
        isShowingSubpage_, showUpdateRequiredEolBanner_,
        showEOLIncentive_)]]">
      <div id="updateRequiredEolBanner" class="settings-box two-line banner">
        <div class="eol-warning-icon">
          <iron-icon icon="cr20:banner-warning"></iron-icon>
        </div>
        <localized-link id="bannerText" class="start" localized-string="$i18n{updateRequiredEolBannerText}">
        </localized-link>
        <cr-icon-button title="$i18n{close}" id="closeUpdateRequiredEol" class="icon-clear" on-click="onCloseEolBannerClicked_" aria-describedby="bannerText">
        </cr-icon-button>
      </div>
    </template>
    <template is="dom-if" if="[[computeShowEolIncentive_(isShowingSubpage_,
        showEolIncentive_)]]">
      <eol-offer-section should-show-offer-text="[[shouldShowOfferText_]]">
      </eol-offer-section>
    </template>
    <div id="secondaryUserBanner" class="settings-box two-line banner" hidden="[[!showSecondaryUserBanner_]]">
      <div id="secondaryUserIcon">
        <iron-icon icon="os-settings:social-group"></iron-icon>
      </div>
      <div class="flex">$i18n{secondaryUserBannerText}</div>
    </div>

    <template is="dom-if" if="[[shouldStampPage_(pageAvailability, Section.kNetwork)]]" restamp>
      <page-displayer section="[[Section.kNetwork]]">
        <settings-internet-page prefs="{{prefs}}">
        </settings-internet-page>
      </page-displayer>
    </template>
    <template is="dom-if" if="[[shouldStampPage_(pageAvailability, Section.kBluetooth)]]" restamp>
      <page-displayer section="[[Section.kBluetooth]]">
        <os-settings-bluetooth-page prefs="{{prefs}}">
        </os-settings-bluetooth-page>
      </page-displayer>
    </template>
    <template is="dom-if" if="[[shouldStampPage_(pageAvailability, Section.kMultiDevice)]]" restamp>
      <page-displayer section="[[Section.kMultiDevice]]">
        <settings-multidevice-page prefs="{{prefs}}">
        </settings-multidevice-page>
      </page-displayer>
    </template>
    <template is="dom-if" if="[[shouldStampPage_(pageAvailability, Section.kPeople)]]" restamp>
      <page-displayer section="[[Section.kPeople]]">
        <os-settings-people-page prefs="{{prefs}}">
        </os-settings-people-page>
      </page-displayer>
    </template>
    <template is="dom-if" if="[[shouldStampPage_(pageAvailability, Section.kKerberos)]]" restamp>
      <page-displayer section="[[Section.kKerberos]]">
        <settings-kerberos-page></settings-kerberos-page>
      </page-displayer>
    </template>
    <template is="dom-if" if="[[shouldStampPage_(pageAvailability, Section.kDevice)]]" restamp>
      <page-displayer section="[[Section.kDevice]]">
        <settings-device-page prefs="{{prefs}}" languages="[[languages_]]" language-helper="[[languageHelper_]]">
        </settings-device-page>
      </page-displayer>
    </template>
    <template is="dom-if" if="[[shouldStampPage_(pageAvailability, Section.kPersonalization)]]" restamp>
      <page-displayer section="[[Section.kPersonalization]]">
        <settings-personalization-page prefs="{{prefs}}">
        </settings-personalization-page>
      </page-displayer>
    </template>
    <template is="dom-if" if="[[shouldStampPage_(pageAvailability, Section.kSearchAndAssistant)]]" restamp>
      <page-displayer section="[[Section.kSearchAndAssistant]]">
        <os-settings-search-page prefs="{{prefs}}">
        </os-settings-search-page>
      </page-displayer>
    </template>
    <template is="dom-if" if="[[shouldStampPage_(pageAvailability, Section.kPrivacyAndSecurity)]]" restamp>
      <page-displayer section="[[Section.kPrivacyAndSecurity]]">
        <os-settings-privacy-page prefs="{{prefs}}">
        </os-settings-privacy-page>
      </page-displayer>
    </template>
    <template is="dom-if" if="[[shouldStampPage_(pageAvailability, Section.kApps)]]" restamp>
      <page-displayer section="[[Section.kApps]]">
        <os-settings-apps-page prefs="{{prefs}}" android-apps-info="[[androidAppsInfo]]">
        </os-settings-apps-page>
      </page-displayer>
    </template>
    <template is="dom-if" if="[[shouldStampPage_(pageAvailability, Section.kAccessibility)]]" restamp>
      <page-displayer section="[[Section.kAccessibility]]">
        <os-settings-a11y-page prefs="{{prefs}}">
        </os-settings-a11y-page>
      </page-displayer>
    </template>
    <template is="dom-if" if="[[shouldStampPage_(pageAvailability, Section.kSystemPreferences)]]" restamp>
      <page-displayer section="[[Section.kSystemPreferences]]">
        <settings-system-preferences-page prefs="{{prefs}}" languages="[[languages_]]" language-helper="[[languageHelper_]]">
        </settings-system-preferences-page>
      </page-displayer>
    </template>
</div>

<template is="dom-if" if="[[shouldShowAdvancedToggle_]]">
  <div id="toggleSpacer"></div>
  <h2 id="toggleContainer">
    <cr-button id="advancedToggle" on-click="advancedToggleClicked_" aria-expanded$="[[boolToString_(advancedToggleExpanded)]]">
      <span>$i18n{advancedPageTitle}</span>
      <iron-icon icon="[[getArrowIcon_(advancedToggleExpanded)]]" slot="suffix-icon">
      </iron-icon>
    </cr-button>
  </h2>
</template>

<settings-idle-load id="advancedPageTemplate">
  <template>
    <div id="advancedPageContainer" hidden$="[[!shouldShowAdvancedPageContainer_]]">
      <template is="dom-if" if="[[shouldStampPage_(pageAvailability, Section.kDateAndTime)]]" restamp>
        <page-displayer section="[[Section.kDateAndTime]]">
          <settings-date-time-page prefs="{{prefs}}">
          </settings-date-time-page>
        </page-displayer>
      </template>
      <template is="dom-if" if="[[shouldStampPage_(pageAvailability,
              Section.kLanguagesAndInput)]]" restamp>
        <page-displayer section="[[Section.kLanguagesAndInput]]">
          <os-settings-languages-section prefs="{{prefs}}" languages="[[languages_]]" language-helper="[[languageHelper_]]">
          </os-settings-languages-section>
        </page-displayer>
      </template>
      <template is="dom-if" if="[[shouldStampPage_(pageAvailability, Section.kFiles)]]" restamp>
        <page-displayer section="[[Section.kFiles]]">
          <os-settings-files-page prefs="{{prefs}}">
          </os-settings-files-page>
        </page-displayer>
      </template>
      <template is="dom-if" if="[[shouldStampPage_(pageAvailability, Section.kPrinting)]]" restamp>
        <page-displayer section="[[Section.kPrinting]]">
          <os-settings-printing-page prefs="{{prefs}}">
          </os-settings-printing-page>
        </page-displayer>
      </template>
      <template is="dom-if" if="[[shouldStampPage_(pageAvailability, Section.kCrostini)]]" restamp>
        <page-displayer section="[[Section.kCrostini]]">
          <settings-crostini-page prefs="{{prefs}}">
          </settings-crostini-page>
        </page-displayer>
      </template>
      <template is="dom-if" if="[[shouldStampPage_(pageAvailability, Section.kReset)]]" restamp>
        <page-displayer section="[[Section.kReset]]">
          <os-settings-reset-page></os-settings-reset-page>
        </page-displayer>
      </template>
    </div>

    <div id="aboutPageContainer" hidden$="[[!shouldShowAboutPageContainer_]]">
      <template is="dom-if" if="[[shouldStampPage_(pageAvailability, Section.kAboutChromeOs)]]" restamp>
        <page-displayer section="[[Section.kAboutChromeOs]]">
          <os-about-page prefs="{{prefs}}"></os-about-page>
        </page-displayer>
      </template>
    </div>
  </template>
</settings-idle-load>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var RouteState;(function(RouteState){RouteState["INITIAL"]="initial";RouteState["ROOT"]="root";RouteState["SECTION"]="section";RouteState["SUBPAGE"]="subpage";RouteState["DIALOG"]="dialog"})(RouteState||(RouteState={}));function classifyRoute(route){if(!route){return RouteState.INITIAL}if(route===routes.BASIC){return RouteState.ROOT}if(route.isSubpage()){return RouteState.SUBPAGE}if(route.isNavigableDialog){return RouteState.DIALOG}return RouteState.SECTION}const ALL_STATES=new Set([RouteState.DIALOG,RouteState.SECTION,RouteState.SUBPAGE,RouteState.ROOT]);const VALID_TRANSITIONS=new Map([[RouteState.INITIAL,ALL_STATES],[RouteState.DIALOG,new Set([RouteState.SECTION,RouteState.SUBPAGE,RouteState.ROOT])],[RouteState.SECTION,ALL_STATES],[RouteState.SUBPAGE,ALL_STATES],[RouteState.ROOT,ALL_STATES]]);const FIRST_PAGE_ROUTE=routes.INTERNET;const MainPageMixin=dedupingMixin((superClass=>{const superclassBase=RouteObserverMixin(superClass);class MainPageMixinInternal extends superclassBase{constructor(){super(...arguments);this.lastScrollTop_=0}get scroller_(){const hostEl=this.getRootNode().host;return castExists(hostEl?hostEl.closest("#container"):document.body)}containsRoute(_route){assertNotReached()}loadAdvancedPage(){return this.shadowRoot.querySelector("#advancedPageTemplate").get()}async enterSubpage(route){this.lastScrollTop_=this.scroller_.scrollTop;await this.activatePage(route);this.scroller_.scrollTop=0;this.classList.add("showing-subpage");this.dispatchCustomEvent_("showing-subpage");ensureLazyLoaded();this.dispatchCustomEvent_("show-container")}enterMainPage(){this.classList.remove("showing-subpage");return new Promise((resolve=>{requestAnimationFrame((()=>{if(Router.getInstance().lastRouteChangeWasPopstate()){this.scroller_.scrollTop=this.lastScrollTop_}this.dispatchCustomEvent_("showing-main-page");resolve()}))}))}showPage(route){if(isRevampWayfindingEnabled()){this.activatePage(route,{focus:true})}else{this.scrollToSection(route)}}async scrollToSection(route){const page=await this.ensurePageForRoute(route);this.dispatchCustomEvent_("showing-section",{detail:page});this.dispatchCustomEvent_("show-container")}async activatePage(route,options={}){const page=await this.ensurePageForRoute(route);const previouslyActive=this.shadowRoot.querySelectorAll("page-displayer[active]");for(const prevPage of previouslyActive){prevPage.active=false}page.active=true;if(options.focus){page.focus()}this.dispatchCustomEvent_("show-container")}activateInitialPage(){if(isRevampWayfindingEnabled()){this.activatePage(FIRST_PAGE_ROUTE,{focus:false})}}getStateTransition_(newRoute,oldRoute){const containsNew=this.containsRoute(newRoute);const containsOld=this.containsRoute(oldRoute);if(!containsNew&&!containsOld){return null}if(containsOld&&!containsNew){return[classifyRoute(oldRoute),RouteState.ROOT]}if(!containsOld&&containsNew){return[RouteState.ROOT,classifyRoute(newRoute)]}return[classifyRoute(oldRoute),classifyRoute(newRoute)]}currentRouteChanged(newRoute,oldRoute){const transition=this.getStateTransition_(newRoute,oldRoute);if(transition===null){return}const[oldState,newState]=transition;assert(VALID_TRANSITIONS.get(oldState).has(newState));if(oldState===RouteState.INITIAL){switch(newState){case RouteState.SECTION:this.showPage(newRoute);return;case RouteState.SUBPAGE:this.enterSubpage(newRoute);return;case RouteState.ROOT:this.activateInitialPage();return;case RouteState.DIALOG:default:return}}if(oldState===RouteState.ROOT){switch(newState){case RouteState.SECTION:this.showPage(newRoute);return;case RouteState.SUBPAGE:this.enterSubpage(newRoute);return;case RouteState.ROOT:this.activateInitialPage();return;case RouteState.DIALOG:default:return}}if(oldState===RouteState.SECTION){switch(newState){case RouteState.SECTION:this.showPage(newRoute);return;case RouteState.SUBPAGE:this.enterSubpage(newRoute);return;case RouteState.ROOT:this.scroller_.scrollTop=0;this.activateInitialPage();return;case RouteState.DIALOG:default:return}}if(oldState===RouteState.SUBPAGE){assert(oldRoute);switch(newState){case RouteState.SECTION:if(isRevampWayfindingEnabled()){this.enterMainPage().then((()=>{this.activatePage(newRoute,{focus:true})}))}else{this.enterMainPage();if(!Router.getInstance().lastRouteChangeWasPopstate()){this.scrollToSection(newRoute)}}return;case RouteState.SUBPAGE:if(!oldRoute.contains(newRoute)&&!newRoute.contains(oldRoute)){this.enterMainPage().then((()=>{this.enterSubpage(newRoute)}));return}if(oldRoute.contains(newRoute)){this.scroller_.scrollTop=0;return}return;case RouteState.ROOT:this.enterMainPage().then((()=>{this.activateInitialPage()}));return;case RouteState.DIALOG:this.enterMainPage();return;default:return}}if(oldState===RouteState.DIALOG){switch(newState){case RouteState.SUBPAGE:this.enterSubpage(newRoute);return;case RouteState.ROOT:case RouteState.SECTION:case RouteState.DIALOG:default:return}}}ensurePageForRoute(route){const section=this.queryPage(route.section);if(section){return Promise.resolve(section)}const waitFn=beforeNextRender.bind(null,this);return new Promise((resolve=>{if(isAdvancedRoute(route)||isAboutRoute(route)){this.dispatchCustomEvent_("hide-container");waitFn((async()=>{await this.loadAdvancedPage();resolve(castExists(this.queryPage(route.section)))}))}else{waitFn((()=>{resolve(castExists(this.queryPage(route.section)))}))}}))}queryPage(section){if(section===null){return null}return this.shadowRoot.querySelector(`page-displayer[section="${section}"]`)}dispatchCustomEvent_(name,options){const event=new CustomEvent(name,{bubbles:true,composed:true,...options});this.dispatchEvent(event)}}return MainPageMixinInternal}));
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const MainPageContainerElementBase=MainPageMixin(WebUiListenerMixin(PolymerElement));class MainPageContainerElement extends MainPageContainerElementBase{static get is(){return"main-page-container"}static get template(){return getTemplate$c()}static get properties(){return{prefs:{type:Object,notify:true},Section:{type:Object,value:Section$1},androidAppsInfo:Object,pageAvailability:{type:Object},advancedToggleExpanded:{type:Boolean,value:false,notify:true,observer:"advancedToggleExpandedChanged_"},isShowingSubpage_:{type:Boolean,value:false},showSecondaryUserBanner_:{type:Boolean,computed:"computeShowSecondaryUserBanner_(isShowingSubpage_)"},showUpdateRequiredEolBanner_:{type:Boolean,value:!!loadTimeData.getString("updateRequiredEolBannerText")},currentRoute_:{type:Object,value:null},showEolIncentive_:{type:Boolean,value:false},shouldShowOfferText_:{type:Boolean,value:false},isRevampWayfindingEnabled_:{type:Boolean,value:()=>isRevampWayfindingEnabled()},shouldShowBasicPageContainer_:{type:Boolean,computed:"computeShouldShowBasicPageContainer_("+"currentRoute_, isShowingSubpage_, isRevampWayfindingEnabled_)"},shouldShowAdvancedPageContainer_:{type:Boolean,computed:"computeShouldShowAdvancedPageContainer("+"advancedToggleExpanded, currentRoute_, isShowingSubpage_, "+"isRevampWayfindingEnabled_)"},shouldShowAdvancedToggle_:{type:Boolean,computed:"computeShouldShowAdvancedToggle("+"currentRoute_, isShowingSubpage_, isRevampWayfindingEnabled_)"},shouldShowAboutPageContainer_:{type:Boolean,computed:"computeShouldShowAboutPageContainer("+"currentRoute_, isRevampWayfindingEnabled_)"},languages_:Object,languageHelper_:Object}}constructor(){super();this.advancedTogglingInProgress_=false}ready(){super.ready();this.setAttribute("role","main");this.addEventListener("showing-subpage",this.onShowingSubpage)}connectedCallback(){super.connectedCallback();this.currentRoute_=Router.getInstance().currentRoute;this.addWebUiListener("android-apps-info-update",this.androidAppsInfoUpdate_.bind(this));AndroidAppsBrowserProxyImpl.getInstance().requestAndroidAppsInfo();AboutPageBrowserProxyImpl.getInstance().pageReady();AboutPageBrowserProxyImpl.getInstance().getEndOfLifeInfo().then((result=>{this.showEolIncentive_=!!result.shouldShowEndOfLifeIncentive;this.shouldShowOfferText_=!!result.shouldShowOfferText}))}currentRouteChanged(newRoute,oldRoute){this.currentRoute_=newRoute;if(isAdvancedRoute(newRoute)){this.advancedToggleExpanded=true}if(oldRoute?.isSubpage()){if(!newRoute.isSubpage()||newRoute.section!==oldRoute.section){this.isShowingSubpage_=false}}else{assert(!this.isShowingSubpage_)}super.currentRouteChanged(newRoute,oldRoute)}containsRoute(_route){return true}shouldStampPage_(pageAvailability,pageName){return!!pageAvailability[pageName]}computeShowSecondaryUserBanner_(){return!this.isShowingSubpage_&&loadTimeData.getBoolean("isSecondaryUser")}computeShowUpdateRequiredEolBanner_(){return!this.isShowingSubpage_&&this.showUpdateRequiredEolBanner_&&!this.showEolIncentive_}computeShowEolIncentive_(){return!this.isShowingSubpage_&&this.showEolIncentive_}androidAppsInfoUpdate_(info){this.androidAppsInfo=info}onCloseEolBannerClicked_(){this.showUpdateRequiredEolBanner_=false}onShowingSubpage(){this.isShowingSubpage_=true}advancedToggleExpandedChanged_(){if(!this.advancedToggleExpanded){return}beforeNextRender(this,(()=>{this.loadAdvancedPage()}))}advancedToggleClicked_(){if(this.advancedTogglingInProgress_){return}this.advancedTogglingInProgress_=true;const toggle=castExists(this.shadowRoot.getElementById("toggleContainer"));if(!this.advancedToggleExpanded){this.advancedToggleExpanded=true;microTask.run((()=>{this.loadAdvancedPage().then((()=>{const event=new CustomEvent("scroll-to-top",{bubbles:true,composed:true,detail:{top:toggle.offsetTop,callback:()=>{this.advancedTogglingInProgress_=false}}});this.dispatchEvent(event)}))}))}else{const event=new CustomEvent("scroll-to-bottom",{bubbles:true,composed:true,detail:{bottom:toggle.offsetTop+toggle.offsetHeight+24,callback:()=>{this.advancedToggleExpanded=false;this.advancedTogglingInProgress_=false}}});this.dispatchEvent(event)}}computeShouldShowBasicPageContainer_(){if(this.isRevampWayfindingEnabled_){return isBasicRoute(this.currentRoute_)}if(isAboutRoute(this.currentRoute_)){return false}if(this.isShowingSubpage_){return isBasicRoute(this.currentRoute_)}return true}computeShouldShowAdvancedPageContainer(){if(this.isRevampWayfindingEnabled_){return isAdvancedRoute(this.currentRoute_)}if(isAboutRoute(this.currentRoute_)){return false}if(this.isShowingSubpage_){return isAdvancedRoute(this.currentRoute_)}return this.advancedToggleExpanded}computeShouldShowAdvancedToggle(){if(this.isRevampWayfindingEnabled_){return false}if(isAboutRoute(this.currentRoute_)){return false}return!this.isShowingSubpage_}computeShouldShowAboutPageContainer(){return isAboutRoute(this.currentRoute_)}getArrowIcon_(opened){return opened?"cr:arrow-drop-up":"cr:arrow-drop-down"}boolToString_(bool){return bool.toString()}}customElements.define(MainPageContainerElement.is,MainPageContainerElement);function getTemplate$b(){return html`<!--_html_template_start_--><style include="cr-hidden-style settings-shared">:host-context(body.revamp-wayfinding-enabled):host{display:flex;flex-direction:column}:host-context(body.revamp-wayfinding-enabled) #mainPageContainer{flex:1;margin-bottom:16px}#overscroll{margin-top:64px}.showing-subpage~#overscroll{display:none}:host-context(body.revamp-wayfinding-enabled) #overscroll{display:none}#noSearchResults{margin-top:80px;text-align:center}#noSearchResults div:first-child{font-size:123%;margin-bottom:10px}#managedHeader{border-top:none;font:var(--cros-body-2-font);margin-bottom:calc(-21px - 8px);padding-bottom:14px;padding-top:14px;position:relative;z-index:1;--cr-link-color:var(--cros-sys-primary);--cr-secondary-text-color:var(--cros-sys-secondary);--iron-icon-fill-color:var(--cros-sys-secondary)}:host-context(body.revamp-wayfinding-enabled) #managedHeader{margin-bottom:8px}</style>
<template is="dom-if" if="[[showManagedHeader_(isShowingSubpage_, isShowingAboutPage_)]]" restamp>
  <managed-footnote id="managedHeader" show-device-info></managed-footnote>
</template>
<main-page-container id="mainPageContainer" class="cr-centered-card-container" prefs="{{prefs}}" page-availability="[[pageAvailability]]" advanced-toggle-expanded="{{advancedToggleExpanded}}">
</main-page-container>
<div id="overscroll" style="padding-bottom:[[overscroll_]]px"></div>
<!--_html_template_end_-->`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const OsSettingsMainElementBase=RouteObserverMixin(PolymerElement);class OsSettingsMainElement extends OsSettingsMainElementBase{static get is(){return"os-settings-main"}static get template(){return getTemplate$b()}static get properties(){return{prefs:{type:Object,notify:true},advancedToggleExpanded:{type:Boolean,notify:true},overscroll_:{type:Number,observer:"overscrollChanged_"},isShowingAboutPage_:{type:Object,value:false},isShowingSubpage_:Boolean,toolbarSpinnerActive:{type:Boolean,value:false,notify:true},pageAvailability:Object}}constructor(){super();this.boundScroll_=null}ready(){super.ready();this.addEventListener("showing-main-page",this.onShowingMainPage);this.addEventListener("showing-subpage",this.onShowingSubpage);this.addEventListener("showing-section",this.onShowingSection)}overscrollChanged_(){assertExists(this.offsetParent);if(!this.overscroll_&&this.boundScroll_){this.offsetParent.removeEventListener("scroll",this.boundScroll_);window.removeEventListener("resize",this.boundScroll_);this.boundScroll_=null}else if(this.overscroll_&&!this.boundScroll_){this.boundScroll_=()=>{if(!this.isShowingSubpage_){this.setOverscroll_(0)}};this.offsetParent.addEventListener("scroll",this.boundScroll_);window.addEventListener("resize",this.boundScroll_)}}setOverscroll_(minHeight){const scroller=this.offsetParent;if(!scroller){return}const overscroll=this.$.overscroll;const visibleBottom=scroller.scrollTop+scroller.clientHeight;const overscrollBottom=overscroll.offsetTop+overscroll.scrollHeight;const visibleOverscroll=overscroll.scrollHeight-(overscrollBottom-visibleBottom);this.overscroll_=Math.max(minHeight||0,Math.ceil(visibleOverscroll))}currentRouteChanged(newRoute){const inAbout=isAboutRoute(newRoute);this.isShowingAboutPage_=inAbout;if(!newRoute.isSubpage()){document.title=inAbout?loadTimeData.getStringF("settingsAltPageTitle",loadTimeData.getString("aboutPageTitle")):loadTimeData.getString("settings")}}onShowingMainPage(){this.isShowingSubpage_=false}onShowingSubpage(){this.isShowingSubpage_=true}onShowingSection(e){const section=e.detail;const sectionTop=section.offsetParent.offsetTop+section.offsetTop;const distance=this.$.overscroll.offsetTop-sectionTop;const overscroll=Math.max(0,this.offsetParent.clientHeight-distance);this.setOverscroll_(overscroll);section.scrollIntoView();section.focus()}showManagedHeader_(){return!this.isShowingSubpage_&&!this.isShowingAboutPage_}}customElements.define(OsSettingsMainElement.is,OsSettingsMainElement);function getTemplate$a(){return html`<!--_html_template_start_--><style include="cr-shared-style cr-icons">:host{display:block;height:40px;transition:background-color 150ms cubic-bezier(.4,0,.2,1),width 150ms cubic-bezier(.4,0,.2,1);width:44px}:host-context([chrome-refresh-2023]):host{--cr-toolbar-search-field-hover-background:var(--color-toolbar-search-field-background-hover,
            var(--cr-hover-background-color)) isolation: isolate}:host([disabled]){opacity:var(--cr-disabled-opacity)}[hidden]{display:none!important}cr-icon-button{--cr-icon-button-size:var(--cr-toolbar-icon-container-size, 32px);margin:var(--cr-toolbar-icon-margin,6px)}:host-context([chrome-refresh-2023]) cr-icon-button{--cr-icon-button-fill-color:var(--cr-toolbar-search-field-icon-color,
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
const CrToolbarSearchFieldElementBase=CrSearchFieldMixin(PolymerElement);class CrToolbarSearchFieldElement extends CrToolbarSearchFieldElementBase{static get is(){return"cr-toolbar-search-field"}static get template(){return getTemplate$a()}static get properties(){return{narrow:{type:Boolean,reflectToAttribute:true},showingSearch:{type:Boolean,value:false,notify:true,observer:"showingSearchChanged_",reflectToAttribute:true},disabled:{type:Boolean,value:false,reflectToAttribute:true},autofocus:{type:Boolean,value:false,reflectToAttribute:true},spinnerActive:{type:Boolean,reflectToAttribute:true},isSpinnerShown_:{type:Boolean,computed:"computeIsSpinnerShown_(spinnerActive, showingSearch)"},searchFocused_:{reflectToAttribute:true,type:Boolean,value:false}}}ready(){super.ready();this.addEventListener("click",(e=>this.showSearch_(e)))}getSearchInput(){return this.$.searchInput}isSearchFocused(){return this.searchFocused_}showAndFocus(){this.showingSearch=true;this.focus_()}onSearchTermInput(){super.onSearchTermInput();this.showingSearch=this.hasSearchText||this.isSearchFocused()}onSearchIconClicked_(){this.dispatchEvent(new CustomEvent("search-icon-clicked",{bubbles:true,composed:true}))}focus_(){this.getSearchInput().focus()}computeIconTabIndex_(narrow){return narrow&&!this.hasSearchText?0:-1}computeIconAriaHidden_(narrow){return Boolean(!narrow||this.hasSearchText).toString()}computeIsSpinnerShown_(){const showSpinner=this.spinnerActive&&this.showingSearch;if(showSpinner){this.$.spinnerTemplate.if=true}return showSpinner}onInputFocus_(){this.searchFocused_=true}onInputBlur_(){this.searchFocused_=false;if(!this.hasSearchText){this.showingSearch=false}}onSearchTermKeydown_(e){if(e.key==="Escape"){this.showingSearch=false}}showSearch_(e){if(e.target!==this.shadowRoot.querySelector("#clearSearch")){this.showingSearch=true}}clearSearch_(){this.setValue("");this.focus_();this.spinnerActive=false}showingSearchChanged_(_current,previous){if(previous===undefined){return}if(this.showingSearch){this.focus_();return}this.setValue("");this.getSearchInput().blur()}}customElements.define(CrToolbarSearchFieldElement.is,CrToolbarSearchFieldElement);
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SearchResultIconSpec={$:mojo.internal.Enum()};var SearchResultIcon;(function(SearchResultIcon){SearchResultIcon[SearchResultIcon["MIN_VALUE"]=0]="MIN_VALUE";SearchResultIcon[SearchResultIcon["MAX_VALUE"]=69]="MAX_VALUE";SearchResultIcon[SearchResultIcon["kA11y"]=0]="kA11y";SearchResultIcon[SearchResultIcon["kAndroid"]=1]="kAndroid";SearchResultIcon[SearchResultIcon["kAppsGrid"]=2]="kAppsGrid";SearchResultIcon[SearchResultIcon["kAssistant"]=3]="kAssistant";SearchResultIcon[SearchResultIcon["kAudio"]=4]="kAudio";SearchResultIcon[SearchResultIcon["kAuthKey"]=5]="kAuthKey";SearchResultIcon[SearchResultIcon["kAutoclick"]=6]="kAutoclick";SearchResultIcon[SearchResultIcon["kAvatar"]=7]="kAvatar";SearchResultIcon[SearchResultIcon["kBluetooth"]=8]="kBluetooth";SearchResultIcon[SearchResultIcon["kCamera"]=9]="kCamera";SearchResultIcon[SearchResultIcon["kCellular"]=10]="kCellular";SearchResultIcon[SearchResultIcon["kCheckForUpdate"]=11]="kCheckForUpdate";SearchResultIcon[SearchResultIcon["kChrome"]=12]="kChrome";SearchResultIcon[SearchResultIcon["kClock"]=13]="kClock";SearchResultIcon[SearchResultIcon["kContrast"]=14]="kContrast";SearchResultIcon[SearchResultIcon["kCursorClick"]=15]="kCursorClick";SearchResultIcon[SearchResultIcon["kDetailedBuild"]=16]="kDetailedBuild";SearchResultIcon[SearchResultIcon["kDeveloperTags"]=17]="kDeveloperTags";SearchResultIcon[SearchResultIcon["kDiagnostics"]=18]="kDiagnostics";SearchResultIcon[SearchResultIcon["kDictation"]=19]="kDictation";SearchResultIcon[SearchResultIcon["kDisplay"]=20]="kDisplay";SearchResultIcon[SearchResultIcon["kDockedMagnifier"]=21]="kDockedMagnifier";SearchResultIcon[SearchResultIcon["kEthernet"]=22]="kEthernet";SearchResultIcon[SearchResultIcon["kFingerprint"]=23]="kFingerprint";SearchResultIcon[SearchResultIcon["kFirmwareUpdates"]=24]="kFirmwareUpdates";SearchResultIcon[SearchResultIcon["kFolder"]=25]="kFolder";SearchResultIcon[SearchResultIcon["kFolderShared"]=26]="kFolderShared";SearchResultIcon[SearchResultIcon["kFullscreenMagnifier"]=27]="kFullscreenMagnifier";SearchResultIcon[SearchResultIcon["kGeolocation"]=28]="kGeolocation";SearchResultIcon[SearchResultIcon["kGoogleDrive"]=29]="kGoogleDrive";SearchResultIcon[SearchResultIcon["kGooglePlay"]=30]="kGooglePlay";SearchResultIcon[SearchResultIcon["kHearing"]=31]="kHearing";SearchResultIcon[SearchResultIcon["kHelp"]=32]="kHelp";SearchResultIcon[SearchResultIcon["kHotspot"]=33]="kHotspot";SearchResultIcon[SearchResultIcon["kInstantTethering"]=34]="kInstantTethering";SearchResultIcon[SearchResultIcon["kKeyboard"]=35]="kKeyboard";SearchResultIcon[SearchResultIcon["kLanguage"]=36]="kLanguage";SearchResultIcon[SearchResultIcon["kLaptop"]=37]="kLaptop";SearchResultIcon[SearchResultIcon["kLock"]=38]="kLock";SearchResultIcon[SearchResultIcon["kMicrophone"]=39]="kMicrophone";SearchResultIcon[SearchResultIcon["kMouse"]=40]="kMouse";SearchResultIcon[SearchResultIcon["kNearbyShare"]=41]="kNearbyShare";SearchResultIcon[SearchResultIcon["kNotifications"]=42]="kNotifications";SearchResultIcon[SearchResultIcon["kOneDrive"]=43]="kOneDrive";SearchResultIcon[SearchResultIcon["kOnScreenKeyboard"]=44]="kOnScreenKeyboard";SearchResultIcon[SearchResultIcon["kPaintbrush"]=45]="kPaintbrush";SearchResultIcon[SearchResultIcon["kPenguin"]=46]="kPenguin";SearchResultIcon[SearchResultIcon["kPhone"]=47]="kPhone";SearchResultIcon[SearchResultIcon["kPluginVm"]=48]="kPluginVm";SearchResultIcon[SearchResultIcon["kPointingStick"]=49]="kPointingStick";SearchResultIcon[SearchResultIcon["kPower"]=50]="kPower";SearchResultIcon[SearchResultIcon["kPrinter"]=51]="kPrinter";SearchResultIcon[SearchResultIcon["kPrivacyControls"]=52]="kPrivacyControls";SearchResultIcon[SearchResultIcon["kReleaseNotes"]=53]="kReleaseNotes";SearchResultIcon[SearchResultIcon["kReset"]=54]="kReset";SearchResultIcon[SearchResultIcon["kRestore"]=55]="kRestore";SearchResultIcon[SearchResultIcon["kScanner"]=56]="kScanner";SearchResultIcon[SearchResultIcon["kSearch"]=57]="kSearch";SearchResultIcon[SearchResultIcon["kSelectToSpeak"]=58]="kSelectToSpeak";SearchResultIcon[SearchResultIcon["kShield"]=59]="kShield";SearchResultIcon[SearchResultIcon["kStorage"]=60]="kStorage";SearchResultIcon[SearchResultIcon["kStylus"]=61]="kStylus";SearchResultIcon[SearchResultIcon["kSwitchAccess"]=62]="kSwitchAccess";SearchResultIcon[SearchResultIcon["kSync"]=63]="kSync";SearchResultIcon[SearchResultIcon["kSystemPreferences"]=64]="kSystemPreferences";SearchResultIcon[SearchResultIcon["kTextToSpeech"]=65]="kTextToSpeech";SearchResultIcon[SearchResultIcon["kTouchpad"]=66]="kTouchpad";SearchResultIcon[SearchResultIcon["kWallpaper"]=67]="kWallpaper";SearchResultIcon[SearchResultIcon["kWifi"]=68]="kWifi";SearchResultIcon[SearchResultIcon["kZoomIn"]=69]="kZoomIn"})(SearchResultIcon||(SearchResultIcon={}));var search_result_icon_mojomWebui=Object.freeze({__proto__:null,get SearchResultIcon(){return SearchResultIcon},SearchResultIconSpec:SearchResultIconSpec});
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SearchResultTypeSpec={$:mojo.internal.Enum()};var SearchResultType;(function(SearchResultType){SearchResultType[SearchResultType["MIN_VALUE"]=0]="MIN_VALUE";SearchResultType[SearchResultType["MAX_VALUE"]=2]="MAX_VALUE";SearchResultType[SearchResultType["kSection"]=0]="kSection";SearchResultType[SearchResultType["kSubpage"]=1]="kSubpage";SearchResultType[SearchResultType["kSetting"]=2]="kSetting"})(SearchResultType||(SearchResultType={}));const SearchResultDefaultRankSpec={$:mojo.internal.Enum()};var SearchResultDefaultRank;(function(SearchResultDefaultRank){SearchResultDefaultRank[SearchResultDefaultRank["MIN_VALUE"]=0]="MIN_VALUE";SearchResultDefaultRank[SearchResultDefaultRank["MAX_VALUE"]=2]="MAX_VALUE";SearchResultDefaultRank[SearchResultDefaultRank["kHigh"]=0]="kHigh";SearchResultDefaultRank[SearchResultDefaultRank["kMedium"]=1]="kMedium";SearchResultDefaultRank[SearchResultDefaultRank["kLow"]=2]="kLow"})(SearchResultDefaultRank||(SearchResultDefaultRank={}));const ParentResultBehaviorSpec={$:mojo.internal.Enum()};var ParentResultBehavior;(function(ParentResultBehavior){ParentResultBehavior[ParentResultBehavior["MIN_VALUE"]=0]="MIN_VALUE";ParentResultBehavior[ParentResultBehavior["MAX_VALUE"]=1]="MAX_VALUE";ParentResultBehavior[ParentResultBehavior["kAllowParentResults"]=0]="kAllowParentResults";ParentResultBehavior[ParentResultBehavior["kDoNotIncludeParentResults"]=1]="kDoNotIncludeParentResults"})(ParentResultBehavior||(ParentResultBehavior={}));let SearchResultsObserverPendingReceiver$1=class SearchResultsObserverPendingReceiver{constructor(handle){this.handle=mojo.internal.interfaceSupport.getEndpointForReceiver(handle)}bindInBrowser(scope="context"){mojo.internal.interfaceSupport.bind(this.handle,"ash.settings.mojom.SearchResultsObserver",scope)}};let SearchResultsObserverRemote$1=class SearchResultsObserverRemote{constructor(handle){this.proxy=new mojo.internal.interfaceSupport.InterfaceRemoteBase(SearchResultsObserverPendingReceiver$1,handle);this.$=new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);this.onConnectionError=this.proxy.getConnectionErrorEventRouter()}onSearchResultsChanged(){this.proxy.sendMessage(0,SearchResultsObserver_OnSearchResultsChanged_ParamsSpec$1.$,null,[])}};let SearchResultsObserverReceiver$1=class SearchResultsObserverReceiver{constructor(impl){this.helper_internal_=new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(SearchResultsObserverRemote$1);this.$=new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);this.helper_internal_.registerHandler(0,SearchResultsObserver_OnSearchResultsChanged_ParamsSpec$1.$,null,impl.onSearchResultsChanged.bind(impl));this.onConnectionError=this.helper_internal_.getConnectionErrorEventRouter()}};let SearchResultsObserver$1=class SearchResultsObserver{static get $interfaceName(){return"ash.settings.mojom.SearchResultsObserver"}static getRemote(){let remote=new SearchResultsObserverRemote$1;remote.$.bindNewPipeAndPassReceiver().bindInBrowser();return remote}};let SearchResultsObserverCallbackRouter$1=class SearchResultsObserverCallbackRouter{constructor(){this.helper_internal_=new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(SearchResultsObserverRemote$1);this.$=new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);this.router_=new mojo.internal.interfaceSupport.CallbackRouter;this.onSearchResultsChanged=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(0,SearchResultsObserver_OnSearchResultsChanged_ParamsSpec$1.$,null,this.onSearchResultsChanged.createReceiverHandler(false));this.onConnectionError=this.helper_internal_.getConnectionErrorEventRouter()}removeListener(id){return this.router_.removeListener(id)}};let SearchHandlerPendingReceiver$1=class SearchHandlerPendingReceiver{constructor(handle){this.handle=mojo.internal.interfaceSupport.getEndpointForReceiver(handle)}bindInBrowser(scope="context"){mojo.internal.interfaceSupport.bind(this.handle,"ash.settings.mojom.SearchHandler",scope)}};let SearchHandlerRemote$1=class SearchHandlerRemote{constructor(handle){this.proxy=new mojo.internal.interfaceSupport.InterfaceRemoteBase(SearchHandlerPendingReceiver$1,handle);this.$=new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);this.onConnectionError=this.proxy.getConnectionErrorEventRouter()}search(query,maxNumResults,parentResultBehavior){return this.proxy.sendMessage(0,SearchHandler_Search_ParamsSpec$1.$,SearchHandler_Search_ResponseParamsSpec$1.$,[query,maxNumResults,parentResultBehavior])}observe(observer){this.proxy.sendMessage(1,SearchHandler_Observe_ParamsSpec.$,null,[observer])}};let SearchHandlerReceiver$1=class SearchHandlerReceiver{constructor(impl){this.helper_internal_=new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(SearchHandlerRemote$1);this.$=new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);this.helper_internal_.registerHandler(0,SearchHandler_Search_ParamsSpec$1.$,SearchHandler_Search_ResponseParamsSpec$1.$,impl.search.bind(impl));this.helper_internal_.registerHandler(1,SearchHandler_Observe_ParamsSpec.$,null,impl.observe.bind(impl));this.onConnectionError=this.helper_internal_.getConnectionErrorEventRouter()}};let SearchHandler$1=class SearchHandler{static get $interfaceName(){return"ash.settings.mojom.SearchHandler"}static getRemote(){let remote=new SearchHandlerRemote$1;remote.$.bindNewPipeAndPassReceiver().bindInBrowser();return remote}};let SearchHandlerCallbackRouter$1=class SearchHandlerCallbackRouter{constructor(){this.helper_internal_=new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(SearchHandlerRemote$1);this.$=new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);this.router_=new mojo.internal.interfaceSupport.CallbackRouter;this.search=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(0,SearchHandler_Search_ParamsSpec$1.$,SearchHandler_Search_ResponseParamsSpec$1.$,this.search.createReceiverHandler(true));this.observe=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(1,SearchHandler_Observe_ParamsSpec.$,null,this.observe.createReceiverHandler(false));this.onConnectionError=this.helper_internal_.getConnectionErrorEventRouter()}removeListener(id){return this.router_.removeListener(id)}};const SearchResultSpec$1={$:{}};const SearchResultsObserver_OnSearchResultsChanged_ParamsSpec$1={$:{}};const SearchHandler_Search_ParamsSpec$1={$:{}};const SearchHandler_Search_ResponseParamsSpec$1={$:{}};const SearchHandler_Observe_ParamsSpec={$:{}};const SearchResultIdentifierSpec={$:{}};mojo.internal.Struct(SearchResultSpec$1.$,"SearchResult",[mojo.internal.StructField("text",0,0,String16Spec.$,null,false,0),mojo.internal.StructField("canonicalText",8,0,String16Spec.$,null,false,0),mojo.internal.StructField("urlPathWithParameters",16,0,mojo.internal.String,null,false,0),mojo.internal.StructField("icon",24,0,SearchResultIconSpec.$,0,false,0),mojo.internal.StructField("relevanceScore",32,0,mojo.internal.Double,0,false,0),mojo.internal.StructField("settingsPageHierarchy",40,0,mojo.internal.Array(String16Spec.$,false),null,false,0),mojo.internal.StructField("defaultRank",28,0,SearchResultDefaultRankSpec.$,0,false,0),mojo.internal.StructField("wasGeneratedFromTextMatch",48,0,mojo.internal.Bool,false,false,0),mojo.internal.StructField("type",52,0,SearchResultTypeSpec.$,0,false,0),mojo.internal.StructField("id",56,0,SearchResultIdentifierSpec.$,null,false,0)],[[0,80]]);mojo.internal.Struct(SearchResultsObserver_OnSearchResultsChanged_ParamsSpec$1.$,"SearchResultsObserver_OnSearchResultsChanged_Params",[],[[0,8]]);mojo.internal.Struct(SearchHandler_Search_ParamsSpec$1.$,"SearchHandler_Search_Params",[mojo.internal.StructField("query",0,0,String16Spec.$,null,false,0),mojo.internal.StructField("maxNumResults",8,0,mojo.internal.Uint32,0,false,0),mojo.internal.StructField("parentResultBehavior",12,0,ParentResultBehaviorSpec.$,0,false,0)],[[0,24]]);mojo.internal.Struct(SearchHandler_Search_ResponseParamsSpec$1.$,"SearchHandler_Search_ResponseParams",[mojo.internal.StructField("results",0,0,mojo.internal.Array(SearchResultSpec$1.$,false),null,false,0)],[[0,16]]);mojo.internal.Struct(SearchHandler_Observe_ParamsSpec.$,"SearchHandler_Observe_Params",[mojo.internal.StructField("observer",0,0,mojo.internal.InterfaceProxy(SearchResultsObserverRemote$1),null,false,0)],[[0,16]]);mojo.internal.Union(SearchResultIdentifierSpec.$,"SearchResultIdentifier",{section:{ordinal:0,type:SectionSpec.$},subpage:{ordinal:1,type:SubpageSpec.$},setting:{ordinal:2,type:SettingSpec.$}});var search_mojomWebui=Object.freeze({__proto__:null,get ParentResultBehavior(){return ParentResultBehavior},ParentResultBehaviorSpec:ParentResultBehaviorSpec,SearchHandler:SearchHandler$1,SearchHandlerCallbackRouter:SearchHandlerCallbackRouter$1,SearchHandlerPendingReceiver:SearchHandlerPendingReceiver$1,SearchHandlerReceiver:SearchHandlerReceiver$1,SearchHandlerRemote:SearchHandlerRemote$1,SearchHandler_Observe_ParamsSpec:SearchHandler_Observe_ParamsSpec,SearchHandler_Search_ParamsSpec:SearchHandler_Search_ParamsSpec$1,SearchHandler_Search_ResponseParamsSpec:SearchHandler_Search_ResponseParamsSpec$1,get SearchResultDefaultRank(){return SearchResultDefaultRank},SearchResultDefaultRankSpec:SearchResultDefaultRankSpec,SearchResultIdentifierSpec:SearchResultIdentifierSpec,SearchResultSpec:SearchResultSpec$1,get SearchResultType(){return SearchResultType},SearchResultTypeSpec:SearchResultTypeSpec,SearchResultsObserver:SearchResultsObserver$1,SearchResultsObserverCallbackRouter:SearchResultsObserverCallbackRouter$1,SearchResultsObserverPendingReceiver:SearchResultsObserverPendingReceiver$1,SearchResultsObserverReceiver:SearchResultsObserverReceiver$1,SearchResultsObserverRemote:SearchResultsObserverRemote$1,SearchResultsObserver_OnSearchResultsChanged_ParamsSpec:SearchResultsObserver_OnSearchResultsChanged_ParamsSpec$1});function getTemplate$9(){return html`<!--_html_template_start_--><style include="settings-shared">:host{width:100%}:host([selected]) [focus-row-container]{background-color:var(--cros-sys-highlight_shape)}:host(:not([selected])) [focus-row-container]:hover{background-color:var(--cros-sys-hover_on_subtle)}[focus-row-control][selectable]:focus{background-color:var(--cros-sys-ripple_neutral_on_subtle)}:host-context([dir=rtl]) #actionTypeIcon{transform:scaleX(-1)}[focus-row-container]{width:inherit}#searchResultContainer{align-items:center;display:flex;height:48px;justify-content:center;font:var(--cros-body-2-font)}#resultText{flex-grow:1;margin:var(--cr-toolbar-search-field-term-margin)}iron-icon{margin:var(--cr-toolbar-icon-margin);width:var(--cr-toolbar-icon-container-size)}b{color:var(--cros-sys-on_surface)}</style>
<div focus-row-container>
  
  <div focus-row-control focus-type="rowWrapper" id="searchResultContainer" on-click="onSearchResultSelected" on-keypress="onKeyPress_" aria-disabled="true" selectable>
    <iron-icon id="resultIcon" icon="[[getResultIcon_(searchResult)]]">
    </iron-icon>
    <div id="resultText" aria-hidden="true" inner-h-t-m-l="[[getResultInnerHtml_(searchResult)]]">
    </div>
    <iron-icon id="actionTypeIcon" icon="[[getActionTypeIcon_(searchResult)]]">
    </iron-icon>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function longestCommonSubstrings(string1,string2){let maxLength=0;let string1StartingIndices=[];const dp=Array(string1.length+1).fill([]).map((()=>Array(string2.length+1).fill(0)));for(let i=string1.length-1;i>=0;i--){for(let j=string2.length-1;j>=0;j--){if(string1[i]!==string2[j]){continue}dp[i][j]=dp[i+1][j+1]+1;if(maxLength===dp[i][j]){string1StartingIndices.unshift(i)}if(maxLength<dp[i][j]){maxLength=dp[i][j];string1StartingIndices=[i]}}}return string1StartingIndices.map((idx=>string1.substr(idx,maxLength)))}function isPersonalizationSearchResult(result){return!!result&&typeof result.relativeUrl==="string"}const DELOCALIZED_HYPHEN="-";const HYPHENS=["-","~","֊","־","᠆","‐","‑","‒","–","—","―","⁓","⁻","₋","−","⸺","⸻","〜","〰","゠","﹘","﹣","－"];const HYPHENS_REGEX_STR=`[${HYPHENS.join("")}]`;const HYPHENS_REGEX=new RegExp(HYPHENS_REGEX_STR,"g");function removeAccents(sourceString){return sourceString.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")}function normalizeString(sourceString){return removeAccents(sourceString).replace(HYPHENS_REGEX,"")}function boldSubStrings(sourceString,substringsToBold){if(!substringsToBold||!substringsToBold.length){return sourceString}const subStrRegex=new RegExp("()("+substringsToBold.join("|")+")()","ig");return sourceString.replace(subStrRegex,(match=>match.bold()))}const OsSearchResultRowElementBase=FocusRowMixin(I18nMixin(PolymerElement));class OsSearchResultRowElement extends OsSearchResultRowElementBase{static get is(){return"os-search-result-row"}static get template(){return getTemplate$9()}static get properties(){return{selected:{type:Boolean,reflectToAttribute:true,observer:"makeA11yAnnouncementIfSelectedAndUnfocused_"},ariaLabel:{type:String,computed:"computeAriaLabel_(searchResult)",reflectToAttribute:true},searchQuery:String,searchResult:Object,listLength:Number,resultText_:{type:String,computed:"computeResultText_(searchResult)"}}}makeA11yAnnouncementIfSelectedAndUnfocused_(){if(!this.selected||this.lastFocused){return}getInstance().announce(this.ariaLabel)}computeResultText_(){return mojoString16ToString(this.searchResult.text)}getMatchingIndividualCharsBolded_(){return boldSubStrings(this.resultText_,this.searchQuery.split(""))}getModifiedInnerHtmlToken_(innerHtmlToken,normalizedQuery,queryTokens){const normalizedToken=normalizeString(innerHtmlToken);if(normalizedQuery.includes(normalizedToken)){return normalizedToken?innerHtmlToken.bold():innerHtmlToken}const queryTokenFilter=queryToken=>!!queryToken&&normalizedToken.includes(queryToken);const queryTokenToSegment=queryToken=>{const regExpStr=queryToken.split("").join(`${HYPHENS_REGEX_STR}*`);const innerHtmlTokenNoAccents=removeAccents(innerHtmlToken);const matchesNoAccents=innerHtmlTokenNoAccents.match(new RegExp(regExpStr,"g"))||[];return matchesNoAccents.map((match=>innerHtmlToken.toLocaleLowerCase().substr(innerHtmlTokenNoAccents.indexOf(match),match.length)))};const matches=queryTokens.filter(queryTokenFilter).map(queryTokenToSegment).flat();if(!matches.length){return innerHtmlToken}const maxStrLen=matches.reduce(((a,b)=>a.length>b.length?a:b)).length;const bolded=matches.filter((sourceString=>sourceString.length===maxStrLen));return boldSubStrings(innerHtmlToken,bolded)}generateQueryTokens_(normalizedQuery){const normalizedResultText=normalizeString(this.resultText_);const segmentToTokenMap=new Map;normalizedQuery.split(/\s/).forEach((querySegment=>{const queryTokens=longestCommonSubstrings(querySegment,normalizedResultText);if(segmentToTokenMap.has(querySegment)){const segmentTokens=segmentToTokenMap.get(querySegment).concat(queryTokens);segmentToTokenMap.set(querySegment,segmentTokens);return}segmentToTokenMap.set(querySegment,queryTokens)}));const getLongestTokensPerSegment=([querySegment,queryTokens])=>{if(!queryTokens.length){return[]}const maxLengthQueryToken=Math.max(...queryTokens.map((queryToken=>queryToken.length)));if(maxLengthQueryToken===1&&querySegment.length>1){return[]}return queryTokens.filter((queryToken=>queryToken.length===maxLengthQueryToken))};const inOrderTokenGroups=Array.from(segmentToTokenMap).map(getLongestTokensPerSegment);const inOrderTokens=[...new Set(inOrderTokenGroups.flat())];return this.mergeValidTokensToCompounded_(inOrderTokens)}mergeValidTokensToCompounded_(inOrderQueryTokens){const longestCompoundWordTokens=[];const hyphenatedResultText=removeAccents(this.resultText_).replace(HYPHENS_REGEX,DELOCALIZED_HYPHEN);let i=0;while(i<inOrderQueryTokens.length){let prefixToken=inOrderQueryTokens[i];i++;while(i<inOrderQueryTokens.length){const compoundToken=prefixToken+DELOCALIZED_HYPHEN+inOrderQueryTokens[i];if(!hyphenatedResultText.includes(compoundToken)){break}prefixToken=compoundToken;i++}longestCompoundWordTokens.push(prefixToken)}return longestCompoundWordTokens.map((token=>normalizeString(token)))}getTokenizeMatchedBoldTagged_(){const normalizedQuery=normalizeString(this.searchQuery);const queryTokens=this.generateQueryTokens_(normalizedQuery);const innerHtmlTokensWithBoldTags=this.resultText_.split(/\s/).map((innerHtmlToken=>this.getModifiedInnerHtmlToken_(innerHtmlToken,normalizedQuery,queryTokens)));const blankspaces=this.resultText_.match(/\s/g);if(!blankspaces){return innerHtmlTokensWithBoldTags.join("")}return innerHtmlTokensWithBoldTags.map(((token,idx)=>idx!==blankspaces.length?token+blankspaces[idx]:token)).join("")}getResultInnerHtml_(){if(!this.searchResult.wasGeneratedFromTextMatch){return sanitizeInnerHtml(this.resultText_)}if(this.resultText_.match(/\s/)||this.resultText_.toLocaleLowerCase()!==this.resultText_.toLocaleUpperCase()){return sanitizeInnerHtml(this.getTokenizeMatchedBoldTagged_())}return sanitizeInnerHtml(this.getMatchingIndividualCharsBolded_())}computeAriaLabel_(){assert(typeof this.focusRowIndex==="number");return this.i18n("searchResultSelected",this.focusRowIndex+1,this.listLength,this.computeResultText_())}onKeyPress_(e){if(e.key==="Enter"){e.stopPropagation();this.onSearchResultSelected()}}recordSearchResultMetrics_(){if(isPersonalizationSearchResult(this.searchResult)){chrome.metricsPrivate.recordSparseValue("ChromeOS.Settings.SearchResultPersonalizationSelected",this.searchResult.searchConceptId);chrome.metricsPrivate.recordEnumerationValue("Ash.Personalization.EntryPoint",loadTimeData.getInteger("settingsSearchEntryPoint"),loadTimeData.getInteger("entryPointEnumSize"));return}const settingsSearchResult=this.searchResult;chrome.metricsPrivate.recordEnumerationValue("ChromeOS.Settings.SearchResultTypeSelected",settingsSearchResult.type,SearchResultType.MAX_VALUE);const metricArgs=(type,id)=>{switch(type){case SearchResultType.kSection:return{metricName:"ChromeOS.Settings.SearchResultSectionSelected",value:id.section};case SearchResultType.kSubpage:return{metricName:"ChromeOS.Settings.SearchResultSubpageSelected",value:id.subpage};case SearchResultType.kSetting:return{metricName:"ChromeOS.Settings.SearchResultSettingSelected",value:id.setting};default:assertNotReached("Search Result Type not specified.")}};const args=metricArgs(settingsSearchResult.type,settingsSearchResult.id);if(args.value){chrome.metricsPrivate.recordSparseValue(args.metricName,args.value)}}onSearchResultSelected(){if(isPersonalizationSearchResult(this.searchResult)){this.recordSearchResultMetrics_();OpenWindowProxyImpl.getInstance().openUrl(loadTimeData.getString("personalizationAppUrl")+this.searchResult.relativeUrl);return}const settingsSearchResult=this.searchResult;assert(settingsSearchResult.urlPathWithParameters,"Url path is empty.");this.recordSearchResultMetrics_();const pathAndOptParams=settingsSearchResult.urlPathWithParameters.split("?");assert(pathAndOptParams.length<=2,"Path and params format error.");const route=Router.getInstance().getRouteForPath("/"+pathAndOptParams[0]);assert(route,"Supplied path does not map to an existing route: "+pathAndOptParams[0]);const paramsString=`search=${encodeURIComponent(this.searchQuery)}`+(pathAndOptParams.length===2?`&${pathAndOptParams[1]}`:``);const params=new URLSearchParams(paramsString);Router.getInstance().navigateTo(route,params);const event=new CustomEvent("navigated-to-result-route",{bubbles:true,composed:true});this.dispatchEvent(event)}getResultIcon_(){const isRevampEnabled=isRevampWayfindingEnabled();if(isPersonalizationSearchResult(this.searchResult)){return isRevampEnabled?"os-settings:personalization-revamp":"os-settings:paint-brush"}const settingsSearchResult=this.searchResult;switch(settingsSearchResult.icon){case SearchResultIcon.kA11y:return isRevampEnabled?"os-settings:accessibility-revamp":"os-settings:accessibility";case SearchResultIcon.kAndroid:return"os-settings:android";case SearchResultIcon.kAppsGrid:return"os-settings:apps";case SearchResultIcon.kAssistant:return"os-settings:assistant";case SearchResultIcon.kAudio:return isRevampEnabled?"os-settings:device-audio":"os-settings:audio";case SearchResultIcon.kAuthKey:return"os-settings:auth-key";case SearchResultIcon.kAutoclick:return"os-settings:autoclick";case SearchResultIcon.kSwitchAccess:return"os-settings:switch-access";case SearchResultIcon.kAvatar:return isRevampEnabled?"os-settings:privacy-manage-people":"cr:person";case SearchResultIcon.kBluetooth:return"cr:bluetooth";case SearchResultIcon.kCamera:return"os-settings:camera";case SearchResultIcon.kCellular:return"os-settings:cellular";case SearchResultIcon.kCheckForUpdate:return"os-settings:about-update-complete";case SearchResultIcon.kChrome:return"os-settings:chrome";case SearchResultIcon.kClock:return"os-settings:clock";case SearchResultIcon.kContrast:return"os-settings:contrast";case SearchResultIcon.kCursorClick:return"os-settings:cursor-click";case SearchResultIcon.kDetailedBuild:return"os-settings:about-additional-details";case SearchResultIcon.kDeveloperTags:return"os-settings:developer-tags";case SearchResultIcon.kDiagnostics:return"os-settings:about-diagnostics";case SearchResultIcon.kDictation:return"os-settings:dictation";case SearchResultIcon.kDisplay:return isRevampEnabled?"os-settings:device-display":"os-settings:display";case SearchResultIcon.kDockedMagnifier:return"os-settings:docked-magnifier";case SearchResultIcon.kEthernet:return"os-settings:settings-ethernet";case SearchResultIcon.kFingerprint:return"os-settings:fingerprint";case SearchResultIcon.kFirmwareUpdates:return"os-settings:about-firmware-updates";case SearchResultIcon.kFolder:return"os-settings:folder-outline";case SearchResultIcon.kFolderShared:return"os-settings:folder-shared";case SearchResultIcon.kFullscreenMagnifier:return"os-settings:fullscreen-magnifier";case SearchResultIcon.kGeolocation:return"os-settings:geolocation";case SearchResultIcon.kGoogleDrive:return isRevampEnabled?"os-settings:google-drive-revamp":"os-settings:google-drive";case SearchResultIcon.kGooglePlay:return isRevampEnabled?"os-settings:google-play-revamp":"os-settings:google-play";case SearchResultIcon.kHearing:return"os-settings:a11y-hearing";case SearchResultIcon.kHelp:return"os-settings:about-help";case SearchResultIcon.kHotspot:return"os-settings:hotspot";case SearchResultIcon.kInstantTethering:return"os-settings:magic-tethering";case SearchResultIcon.kKeyboard:return isRevampEnabled?"os-settings:device-keyboard":"os-settings:keyboard";case SearchResultIcon.kLanguage:return isRevampEnabled?"os-settings:language-revamp":"os-settings:language";case SearchResultIcon.kLaptop:return"os-settings:laptop-chromebook";case SearchResultIcon.kLock:return isRevampEnabled?"os-settings:lock-revamp":"os-settings:lock";case SearchResultIcon.kMicrophone:return"os-settings:microphone";case SearchResultIcon.kMouse:return isRevampEnabled?"os-settings:device-mouse":"os-settings:mouse";case SearchResultIcon.kNearbyShare:return"os-settings:nearby-share";case SearchResultIcon.kNotifications:return"os-settings:apps-notifications";case SearchResultIcon.kOneDrive:return"settings20:onedrive";case SearchResultIcon.kOnScreenKeyboard:return"os-settings:on-screen-keyboard";case SearchResultIcon.kPaintbrush:return isRevampEnabled?"os-settings:personalization-revamp":"os-settings:paint-brush";case SearchResultIcon.kPenguin:return"os-settings:crostini-mascot";case SearchResultIcon.kPhone:return isRevampEnabled?"os-settings:connected-devices-android-phone":"os-settings:multidevice-better-together-suite";case SearchResultIcon.kPluginVm:return"os-settings:plugin-vm";case SearchResultIcon.kPointingStick:return"os-settings:device-pointing-stick";case SearchResultIcon.kPower:return"os-settings:power";case SearchResultIcon.kPrinter:return isRevampEnabled?"os-settings:device-print":"os-settings:print";case SearchResultIcon.kPrivacyControls:return"os-settings:privacy-controls";case SearchResultIcon.kReleaseNotes:return"os-settings:about-release-notes";case SearchResultIcon.kReset:return isRevampEnabled?"os-settings:startup":"os-settings:restore";case SearchResultIcon.kRestore:return isRevampEnabled?"os-settings:restore-revamp":"os-settings:startup";case SearchResultIcon.kScanner:return"os-settings:device-scan";case SearchResultIcon.kSearch:return isRevampEnabled?"os-settings:explore":"cr:search";case SearchResultIcon.kSelectToSpeak:return"os-settings:select-to-speak";case SearchResultIcon.kShield:return"cr:security";case SearchResultIcon.kStorage:return isRevampEnabled?"os-settings:storage":"os-settings:hard-drive";case SearchResultIcon.kStylus:return isRevampEnabled?"os-settings:device-stylus":"os-settings:stylus";case SearchResultIcon.kSync:return isRevampEnabled?"os-settings:sync-revamp":"os-settings:sync";case SearchResultIcon.kSystemPreferences:return"os-settings:system-preferences";case SearchResultIcon.kTextToSpeech:return"os-settings:text-to-speech";case SearchResultIcon.kTouchpad:return"os-settings:device-touchpad";case SearchResultIcon.kWallpaper:return"os-settings:wallpaper";case SearchResultIcon.kWifi:return"os-settings:network-wifi";case SearchResultIcon.kZoomIn:return"os-settings:zoom-in";default:return"os-settings:settings-general"}}getActionTypeIcon_(){return isPersonalizationSearchResult(this.searchResult)?"cr:open-in-new":"cr:arrow-forward"}}customElements.define(OsSearchResultRowElement.is,OsSearchResultRowElement);
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SearchConceptIdSpec={$:mojo.internal.Enum()};var SearchConceptId;(function(SearchConceptId){SearchConceptId[SearchConceptId["MIN_VALUE"]=0]="MIN_VALUE";SearchConceptId[SearchConceptId["MAX_VALUE"]=500]="MAX_VALUE";SearchConceptId[SearchConceptId["kPersonalization"]=0]="kPersonalization";SearchConceptId[SearchConceptId["kChangeWallpaper"]=100]="kChangeWallpaper";SearchConceptId[SearchConceptId["kTimeOfDayWallpaper"]=101]="kTimeOfDayWallpaper";SearchConceptId[SearchConceptId["kChangeDeviceAccountImage"]=200]="kChangeDeviceAccountImage";SearchConceptId[SearchConceptId["kAmbientMode"]=300]="kAmbientMode";SearchConceptId[SearchConceptId["kAmbientModeChooseSource"]=301]="kAmbientModeChooseSource";SearchConceptId[SearchConceptId["kAmbientModeTurnOff"]=302]="kAmbientModeTurnOff";SearchConceptId[SearchConceptId["kAmbientModeGooglePhotos"]=303]="kAmbientModeGooglePhotos";SearchConceptId[SearchConceptId["kAmbientModeArtGallery"]=304]="kAmbientModeArtGallery";SearchConceptId[SearchConceptId["kAmbientModeTurnOn"]=305]="kAmbientModeTurnOn";SearchConceptId[SearchConceptId["kAmbientModeTimeOfDay"]=306]="kAmbientModeTimeOfDay";SearchConceptId[SearchConceptId["kDarkMode"]=400]="kDarkMode";SearchConceptId[SearchConceptId["kDarkModeSchedule"]=401]="kDarkModeSchedule";SearchConceptId[SearchConceptId["kDarkModeTurnOff"]=402]="kDarkModeTurnOff";SearchConceptId[SearchConceptId["kDarkModeTurnOn"]=403]="kDarkModeTurnOn";SearchConceptId[SearchConceptId["kDynamicColor"]=404]="kDynamicColor";SearchConceptId[SearchConceptId["kKeyboardBacklight"]=500]="kKeyboardBacklight"})(SearchConceptId||(SearchConceptId={}));class SearchResultsObserverPendingReceiver{constructor(handle){this.handle=mojo.internal.interfaceSupport.getEndpointForReceiver(handle)}bindInBrowser(scope="context"){mojo.internal.interfaceSupport.bind(this.handle,"ash.personalization_app.mojom.SearchResultsObserver",scope)}}class SearchResultsObserverRemote{constructor(handle){this.proxy=new mojo.internal.interfaceSupport.InterfaceRemoteBase(SearchResultsObserverPendingReceiver,handle);this.$=new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);this.onConnectionError=this.proxy.getConnectionErrorEventRouter()}onSearchResultsChanged(){this.proxy.sendMessage(0,SearchResultsObserver_OnSearchResultsChanged_ParamsSpec.$,null,[])}}class SearchResultsObserverReceiver{constructor(impl){this.helper_internal_=new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(SearchResultsObserverRemote);this.$=new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);this.helper_internal_.registerHandler(0,SearchResultsObserver_OnSearchResultsChanged_ParamsSpec.$,null,impl.onSearchResultsChanged.bind(impl));this.onConnectionError=this.helper_internal_.getConnectionErrorEventRouter()}}class SearchResultsObserver{static get $interfaceName(){return"ash.personalization_app.mojom.SearchResultsObserver"}static getRemote(){let remote=new SearchResultsObserverRemote;remote.$.bindNewPipeAndPassReceiver().bindInBrowser();return remote}}class SearchResultsObserverCallbackRouter{constructor(){this.helper_internal_=new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(SearchResultsObserverRemote);this.$=new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);this.router_=new mojo.internal.interfaceSupport.CallbackRouter;this.onSearchResultsChanged=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(0,SearchResultsObserver_OnSearchResultsChanged_ParamsSpec.$,null,this.onSearchResultsChanged.createReceiverHandler(false));this.onConnectionError=this.helper_internal_.getConnectionErrorEventRouter()}removeListener(id){return this.router_.removeListener(id)}}class SearchHandlerPendingReceiver{constructor(handle){this.handle=mojo.internal.interfaceSupport.getEndpointForReceiver(handle)}bindInBrowser(scope="context"){mojo.internal.interfaceSupport.bind(this.handle,"ash.personalization_app.mojom.SearchHandler",scope)}}class SearchHandlerRemote{constructor(handle){this.proxy=new mojo.internal.interfaceSupport.InterfaceRemoteBase(SearchHandlerPendingReceiver,handle);this.$=new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);this.onConnectionError=this.proxy.getConnectionErrorEventRouter()}search(query,maxNumResults){return this.proxy.sendMessage(0,SearchHandler_Search_ParamsSpec.$,SearchHandler_Search_ResponseParamsSpec.$,[query,maxNumResults])}addObserver(observer){this.proxy.sendMessage(1,SearchHandler_AddObserver_ParamsSpec.$,null,[observer])}}class SearchHandlerReceiver{constructor(impl){this.helper_internal_=new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(SearchHandlerRemote);this.$=new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);this.helper_internal_.registerHandler(0,SearchHandler_Search_ParamsSpec.$,SearchHandler_Search_ResponseParamsSpec.$,impl.search.bind(impl));this.helper_internal_.registerHandler(1,SearchHandler_AddObserver_ParamsSpec.$,null,impl.addObserver.bind(impl));this.onConnectionError=this.helper_internal_.getConnectionErrorEventRouter()}}class SearchHandler{static get $interfaceName(){return"ash.personalization_app.mojom.SearchHandler"}static getRemote(){let remote=new SearchHandlerRemote;remote.$.bindNewPipeAndPassReceiver().bindInBrowser();return remote}}class SearchHandlerCallbackRouter{constructor(){this.helper_internal_=new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(SearchHandlerRemote);this.$=new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);this.router_=new mojo.internal.interfaceSupport.CallbackRouter;this.search=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(0,SearchHandler_Search_ParamsSpec.$,SearchHandler_Search_ResponseParamsSpec.$,this.search.createReceiverHandler(true));this.addObserver=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(1,SearchHandler_AddObserver_ParamsSpec.$,null,this.addObserver.createReceiverHandler(false));this.onConnectionError=this.helper_internal_.getConnectionErrorEventRouter()}removeListener(id){return this.router_.removeListener(id)}}const SearchResultSpec={$:{}};const SearchResultsObserver_OnSearchResultsChanged_ParamsSpec={$:{}};const SearchHandler_Search_ParamsSpec={$:{}};const SearchHandler_Search_ResponseParamsSpec={$:{}};const SearchHandler_AddObserver_ParamsSpec={$:{}};mojo.internal.Struct(SearchResultSpec.$,"SearchResult",[mojo.internal.StructField("searchConceptId",0,0,SearchConceptIdSpec.$,0,false,0),mojo.internal.StructField("text",8,0,String16Spec.$,null,false,0),mojo.internal.StructField("relativeUrl",16,0,mojo.internal.String,null,false,0),mojo.internal.StructField("relevanceScore",24,0,mojo.internal.Double,0,false,0)],[[0,40]]);mojo.internal.Struct(SearchResultsObserver_OnSearchResultsChanged_ParamsSpec.$,"SearchResultsObserver_OnSearchResultsChanged_Params",[],[[0,8]]);mojo.internal.Struct(SearchHandler_Search_ParamsSpec.$,"SearchHandler_Search_Params",[mojo.internal.StructField("query",0,0,String16Spec.$,null,false,0),mojo.internal.StructField("maxNumResults",8,0,mojo.internal.Uint32,0,false,0)],[[0,24]]);mojo.internal.Struct(SearchHandler_Search_ResponseParamsSpec.$,"SearchHandler_Search_ResponseParams",[mojo.internal.StructField("results",0,0,mojo.internal.Array(SearchResultSpec.$,false),null,false,0)],[[0,16]]);mojo.internal.Struct(SearchHandler_AddObserver_ParamsSpec.$,"SearchHandler_AddObserver_Params",[mojo.internal.StructField("observer",0,0,mojo.internal.InterfaceProxy(SearchResultsObserverRemote),null,false,0)],[[0,16]]);var personalization_search_mojomWebui=Object.freeze({__proto__:null,get SearchConceptId(){return SearchConceptId},SearchConceptIdSpec:SearchConceptIdSpec,SearchHandler:SearchHandler,SearchHandlerCallbackRouter:SearchHandlerCallbackRouter,SearchHandlerPendingReceiver:SearchHandlerPendingReceiver,SearchHandlerReceiver:SearchHandlerReceiver,SearchHandlerRemote:SearchHandlerRemote,SearchHandler_AddObserver_ParamsSpec:SearchHandler_AddObserver_ParamsSpec,SearchHandler_Search_ParamsSpec:SearchHandler_Search_ParamsSpec,SearchHandler_Search_ResponseParamsSpec:SearchHandler_Search_ResponseParamsSpec,SearchResultSpec:SearchResultSpec,SearchResultsObserver:SearchResultsObserver,SearchResultsObserverCallbackRouter:SearchResultsObserverCallbackRouter,SearchResultsObserverPendingReceiver:SearchResultsObserverPendingReceiver,SearchResultsObserverReceiver:SearchResultsObserverReceiver,SearchResultsObserverRemote:SearchResultsObserverRemote,SearchResultsObserver_OnSearchResultsChanged_ParamsSpec:SearchResultsObserver_OnSearchResultsChanged_ParamsSpec});
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let personalizationSearchHandler=null;function setPersonalizationSearchHandlerForTesting(testSearchHandler){personalizationSearchHandler=testSearchHandler}function getPersonalizationSearchHandler(){if(!personalizationSearchHandler){personalizationSearchHandler=SearchHandler.getRemote()}return personalizationSearchHandler}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let settingsSearchHandler=null;function setSettingsSearchHandlerForTesting(testSearchHandler){settingsSearchHandler=testSearchHandler}function getSettingsSearchHandler(){if(settingsSearchHandler){return settingsSearchHandler}settingsSearchHandler=SearchHandler$1.getRemote();return settingsSearchHandler}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function mergeResults(a,b,maxNumResults){return a.concat(b).sort(((x,y)=>y.relevanceScore-x.relevanceScore)).slice(0,maxNumResults)}async function combinedSearch(query,maxNumResults,parentResultBehavior){const[settingsResponse,personalizationResponse]=await Promise.all([getSettingsSearchHandler().search(query,maxNumResults,parentResultBehavior),getPersonalizationSearchHandler().search(query,maxNumResults)]);return{results:mergeResults(settingsResponse.results,personalizationResponse.results,maxNumResults)}}function getTemplate$8(){return html`<!--_html_template_start_--><style include="settings-shared">:host{--cr-toolbar-search-field-background:var(--cros-sys-input_field_on_shaded);--cr-toolbar-focused-min-height:40px;--cr-toolbar-icon-container-size:32px;--cr-toolbar-icon-margin:8px 16px;--cr-toolbar-search-field-icon-opacity:1;--cr-toolbar-search-field-narrow-mode-prompt-opacity:1;--cr-toolbar-search-field-prompt-opacity:1;--cr-toolbar-search-icon-margin-inline-start:16px;--cr-toolbar-query-exists-min-height:var(--cr-toolbar-focused-min-height);--separator-height:8px;-webkit-tap-highlight-color:transparent;display:flex;flex-basis:var(--cr-toolbar-field-width);transition:width 150ms cubic-bezier(.4,0,.2,1);width:var(--cr-toolbar-field-width)}@media (prefers-color-scheme:dark){:host{--cr-toolbar-search-field-narrow-mode-prompt-opacity:1}}:host([narrow]:not([showing-search])){flex-direction:row;justify-content:flex-end}:host([narrow][showing-search]){justify-content:center}cr-toolbar-search-field{--cr-toolbar-search-field-term-margin:0;--cr-toolbar-search-field-border-radius:var(--settings-toolbar-search-field-border-radius);--cr-toolbar-search-field-paper-spinner-margin:0 12px;--cr-toolbar-search-field-input-icon-color:var(--cros-icon-color-primary);--cr-toolbar-search-field-input-text-color:var(--cros-text-color-primary);--cr-toolbar-search-field-input-caret-color:currentColor;--cr-toolbar-search-field-prompt-color:var(--cros-text-color-secondary);--cr-toolbar-icon-button-focus-outline-color:var(--cros-focus-ring-color);--cr-toolbar-field-max-width:var(--cr-toolbar-field-width);font:var(--cros-body-2-font);height:var(--settings-toolbar-search-box-height)}:host([narrow][showing-search]) cr-toolbar-search-field{background-color:var(--cr-toolbar-search-field-background)}:host([narrow]:not([showing-search])) cr-toolbar-search-field{padding-inline-end:var(--settings-toolbar-padding-inline-end)}:host([showing-search]:focus-within) cr-toolbar-search-field{--cr-toolbar-search-field-background:var(--cros-bg-color-elevation-3);box-shadow:var(--cr-elevation-1);min-height:var(--cr-toolbar-focused-min-height)}:host([has-search-query]) cr-toolbar-search-field{min-height:var(--cr-toolbar-query-exists-min-height)}:host(:not(:focus-within)) cr-toolbar-search-field{--cr-toolbar-search-field-cursor:pointer}:host([should-show-dropdown_]:focus-within) cr-toolbar-search-field{--cr-toolbar-search-field-border-radius:20px 20px 0 0;box-shadow:var(--cr-elevation-3);height:56px;margin-top:var(--separator-height);padding-bottom:var(--separator-height)}:host-context([chrome-refresh-2023]):host([should-show-dropdown_]:focus-within) cr-toolbar-search-field{--cr-toolbar-search-field-border-radius:20px 20px 0 0;outline:0}iron-dropdown{margin-top:72px}iron-dropdown [slot=dropdown-content]{background-color:var(--cros-bg-color-elevation-3);border-radius:0 0 20px 20px;box-shadow:var(--cr-elevation-3);display:table;padding-bottom:8px;width:var(--cr-toolbar-field-width)}iron-list{max-height:50vh}.pill-button-with-icon{--border-color:transparent;--cr-button-height:24px;--hover-bg-color:var(--cros-highlight-color);--text-color:var(--cros-text-color-secondary);border-radius:24px;margin-inline-end:8px;padding:4px 8px}.pill-button-with-icon:hover{--text-color:var(--cros-text-color-prominent)}#noSearchResultsContainer{height:32px;line-height:32px;margin-inline-start:24px;font:var(--cros-body-2-font)}#reportSearchResult{display:flex;justify-content:flex-end;margin-inline-start:8px}.separator{background-color:var(--cros-bg-color-elevation-3);border-top:1px solid var(--cros-sys-separator);height:var(--separator-height);margin-inline-end:0;margin-inline-start:0;margin-top:-9px}</style>
<cr-toolbar-search-field id="search" narrow="[[narrow]]" on-search-icon-clicked="onSearchIconClicked_" label="$i18n{searchPrompt}" clear-label="$i18n{clearSearch}" showing-search="{{showingSearch}}" spinner-active="[[spinnerActive]]">
</cr-toolbar-search-field>
<iron-dropdown id="searchResults" opened="[[shouldShowDropdown_]]" allow-outside-scroll no-cancel-on-outside-click>
  
  <div slot="dropdown-content">
    <div class="separator"></div>
    <iron-list id="searchResultList" selection-enabled risk-selection items="[[searchResults_]]" selected-item="{{selectedItem_}}" on-selected-item-changed="onSelectedItemChanged_">
      <template>
        <os-search-result-row actionable search-result="[[item]]" search-query="[[getCurrentQuery_(searchResults_)]]" selected="[[isItemSelected_(item, selectedItem_)]]" tabindex$="[[getRowTabIndex_(item, selectedItem_,
                shouldShowDropdown_)]]" iron-list-tab-index$="[[getRowTabIndex_(item, selectedItem_,
                shouldShowDropdown_)]]" on-navigated-to-result-route="onNavigatedToResultRowRoute_" last-focused="{{lastFocused_}}" list-blurred="{{listBlurred_}}" list-length="[[getListLength_(searchResults_)]]" focus-row-index="[[index]]" first$="[[!index]]">
        </os-search-result-row>
      </template>
    </iron-list>
  
    <div id="noSearchResultsContainer" aria-hidden="true" hidden="[[searchResultsExist_]]">
        $i18n{searchNoResults}
    </div>
    
  </div>
</iron-dropdown>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let instance$1=null;class OsSettingsSearchBoxBrowserProxyImpl{static getInstance(){return instance$1||(instance$1=new OsSettingsSearchBoxBrowserProxyImpl)}static setInstanceForTesting(obj){instance$1=obj}}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const MAX_NUM_SEARCH_RESULTS=5;const SEARCH_REQUEST_METRIC_NAME="ChromeOS.Settings.SearchRequests";const USER_ACTION_ON_SEARCH_RESULTS_SHOWN_METRIC_NAME="ChromeOS.Settings.UserActionOnSearchResultsShown";var OsSettingSearchRequestTypes;(function(OsSettingSearchRequestTypes){OsSettingSearchRequestTypes[OsSettingSearchRequestTypes["ANY_SEARCH_REQUEST"]=0]="ANY_SEARCH_REQUEST";OsSettingSearchRequestTypes[OsSettingSearchRequestTypes["DISCARED_RESULTS_SEARCH_REQUEST"]=1]="DISCARED_RESULTS_SEARCH_REQUEST";OsSettingSearchRequestTypes[OsSettingSearchRequestTypes["SHOWN_RESULTS_SEARCH_REQUEST"]=2]="SHOWN_RESULTS_SEARCH_REQUEST"})(OsSettingSearchRequestTypes||(OsSettingSearchRequestTypes={}));var OsSettingSearchBoxUserAction;(function(OsSettingSearchBoxUserAction){OsSettingSearchBoxUserAction[OsSettingSearchBoxUserAction["SEARCH_RESULT_CLICKED"]=0]="SEARCH_RESULT_CLICKED";OsSettingSearchBoxUserAction[OsSettingSearchBoxUserAction["CLICKED_OUT_OF_SEARCH_BOX"]=1]="CLICKED_OUT_OF_SEARCH_BOX"})(OsSettingSearchBoxUserAction||(OsSettingSearchBoxUserAction={}));const OsSettingsSearchBoxElementBase=I18nMixin(PolymerElement);class OsSettingsSearchBoxElement extends OsSettingsSearchBoxElementBase{static get is(){return"os-settings-search-box"}static get template(){return getTemplate$8()}static get properties(){return{narrow:{type:Boolean,reflectToAttribute:true},showingSearch:{type:Boolean,value:false,notify:true,reflectToAttribute:true},hasSearchQuery:{type:Boolean,value:false,reflectToAttribute:true},spinnerActive:Boolean,selectedItem_:{type:Object},lastSelectedItem_:{type:Object},searchResults_:{type:Array,value:[],observer:"onSearchResultsChanged_"},shouldShowDropdown_:{type:Boolean,value:false,reflectToAttribute:true},searchResultsExist_:{type:Boolean,value:false,computed:"computeSearchResultsExist_(searchResults_)"},shouldHideFeedbackButton_:{type:Boolean,computed:"computeShouldHideFeedbackButton_("+"hasSearchQuery, searchResultsExist_)"},lastFocused_:Object,listBlurred_:Boolean,searchRequestCount_:{type:Number,value:0}}}constructor(){super();this.settingsSearchResultObserverReceiver_=null;this.personalizationSearchResultObserverReceiver_=null;this.osSettingsSearchBoxBrowserProxy_=OsSettingsSearchBoxBrowserProxyImpl.getInstance()}ready(){super.ready();this.addEventListener("blur",this.onBlur_);this.addEventListener("keydown",this.onKeyDown_);this.addEventListener("search-changed",this.onSearchChanged_)}connectedCallback(){super.connectedCallback();const toolbarSearchField=this.$.search;const searchInput=toolbarSearchField.getSearchInput();if(Router.getInstance().currentRoute===routes.BASIC){toolbarSearchField.showAndFocus()}searchInput.addEventListener("focus",this.onSearchInputFocused_.bind(this));searchInput.addEventListener("mousedown",this.onSearchInputMousedown_.bind(this));const urlSearchQuery=Router.getInstance().getQueryParameters().get("search")||"";toolbarSearchField.setValue(urlSearchQuery,true);window.addEventListener("beforeunload",(()=>{chrome.metricsPrivate.recordSparseValue("ChromeOS.Settings.SearchRequestsPerSession",this.searchRequestCount_)}));this.personalizationSearchResultObserverReceiver_=new SearchResultsObserverReceiver(this);getPersonalizationSearchHandler().addObserver(this.personalizationSearchResultObserverReceiver_.$.bindNewPipeAndPassRemote());this.settingsSearchResultObserverReceiver_=new SearchResultsObserverReceiver$1(this);getSettingsSearchHandler().observe(this.settingsSearchResultObserverReceiver_.$.bindNewPipeAndPassRemote())}disconnectedCallback(){super.disconnectedCallback();assert(this.personalizationSearchResultObserverReceiver_,"Personalization search observer should be initialized");this.personalizationSearchResultObserverReceiver_.$.close();assert(this.settingsSearchResultObserverReceiver_,"Settings search observer should be initialized");this.settingsSearchResultObserverReceiver_.$.close()}onSearchResultsChanged(){this.fetchSearchResults_()}getSelectedOsSearchResultRow_(){return castExists(this.$.searchResultList.querySelector("os-search-result-row[selected]"),"No OsSearchResultRow is selected.")}getCurrentQuery_(){return this.$.search.getSearchInput().value}computeShouldHideFeedbackButton_(){return this.searchResultsExist_||!this.hasSearchQuery}computeSearchResultsExist_(){return this.searchResults_.length!==0}onSearchChanged_(){this.hasSearchQuery=this.getCurrentQuery_().trim().length!==0;this.fetchSearchResults_()}fetchSearchResults_(){const query=this.getCurrentQuery_();if(query===""){this.searchResults_=[];return}this.spinnerActive=true;const queryMojoString16=stringToMojoString16(query);const timeOfSearchRequest=Date.now();combinedSearch(queryMojoString16,MAX_NUM_SEARCH_RESULTS,ParentResultBehavior.kAllowParentResults).then((response=>{const latencyMs=Date.now()-timeOfSearchRequest;chrome.metricsPrivate.recordTime("ChromeOS.Settings.SearchLatency",latencyMs);this.onSearchResultsReceived_(query,response.results);const event=new CustomEvent("search-results-fetched",{bubbles:true,composed:true});this.dispatchEvent(event)}));++this.searchRequestCount_;chrome.metricsPrivate.recordEnumerationValue(SEARCH_REQUEST_METRIC_NAME,OsSettingSearchRequestTypes.ANY_SEARCH_REQUEST,Object.keys(OsSettingSearchRequestTypes).length);chrome.metricsPrivate.recordSparseValue("ChromeOS.Settings.NumCharsOfQueries",query.length)}onSearchResultsReceived_(query,results){chrome.metricsPrivate.recordSparseValue("ChromeOS.Settings.NumSearchResultsFetched",results.length);const shouldDiscardResults=query!==this.getCurrentQuery_();chrome.metricsPrivate.recordEnumerationValue(SEARCH_REQUEST_METRIC_NAME,shouldDiscardResults?OsSettingSearchRequestTypes.DISCARED_RESULTS_SEARCH_REQUEST:OsSettingSearchRequestTypes.SHOWN_RESULTS_SEARCH_REQUEST,Object.keys(OsSettingSearchRequestTypes).length);if(shouldDiscardResults){return}this.spinnerActive=false;this.lastFocused_=null;this.searchResults_=results;recordSearch()}onNavigatedToResultRowRoute_(){this.$.search.blur();this.shouldShowDropdown_=false;chrome.metricsPrivate.recordEnumerationValue(USER_ACTION_ON_SEARCH_RESULTS_SHOWN_METRIC_NAME,OsSettingSearchBoxUserAction.SEARCH_RESULT_CLICKED,Object.keys(OsSettingSearchBoxUserAction).length)}onBlur_(event){event.stopPropagation();if(event.sourceCapabilities&&this.searchResultsExist_){chrome.metricsPrivate.recordEnumerationValue(USER_ACTION_ON_SEARCH_RESULTS_SHOWN_METRIC_NAME,OsSettingSearchBoxUserAction.CLICKED_OUT_OF_SEARCH_BOX,Object.keys(OsSettingSearchBoxUserAction).length)}this.shouldShowDropdown_=false}onSearchInputFocused_(){this.lastFocused_=null;if(this.searchResultsExist_){this.shouldShowDropdown_=true;return}this.fetchSearchResults_()}onSearchInputMousedown_(){if(!this.shouldShowDropdown_){const searchInput=this.$.search.getSearchInput();afterNextRender(this,(()=>searchInput.select()))}}isItemSelected_(item){return this.searchResults_.indexOf(item)===this.searchResults_.indexOf(this.selectedItem_)}getListLength_(){return this.searchResults_.length}getRowTabIndex_(item){return this.isItemSelected_(item)&&this.shouldShowDropdown_?0:-1}onSearchResultsChanged_(){if(this.searchResultsExist_){this.selectedItem_=this.searchResults_[0]}this.shouldShowDropdown_=this.$.search.isSearchFocused()&&!!this.getCurrentQuery_();if(!this.shouldShowDropdown_){return}if(!this.searchResultsExist_){getInstance().announce(this.i18n("searchNoResults"));return}}onSelectedItemChanged_(){if(!this.$.searchResultList.selectedItem&&this.lastSelectedItem_){this.$.searchResultList.selectItem(this.lastSelectedItem_)}this.lastSelectedItem_=this.$.searchResultList.selectedItem}selectRowViaKeys_(key){assert(key==="ArrowDown"||key==="ArrowUp","Only arrow keys.");assert(!!this.selectedItem_,"There should be a selected item already.");const selectedRowIndex=this.searchResults_.indexOf(this.selectedItem_);const numRows=this.searchResults_.length;const delta=key==="ArrowUp"?-1:1;const indexOfNewRow=(numRows+selectedRowIndex+delta)%numRows;this.selectedItem_=this.searchResults_[indexOfNewRow];if(this.lastFocused_){this.getSelectedOsSearchResultRow_().focus()}this.getSelectedOsSearchResultRow_().scrollIntoViewIfNeeded()}onKeyDown_(e){if(!this.searchResultsExist_||!this.$.search.isSearchFocused()&&!this.lastFocused_){return}if(e.key==="Enter"){this.getSelectedOsSearchResultRow_().onSearchResultSelected();return}if(e.key==="ArrowUp"||e.key==="ArrowDown"){e.preventDefault();this.selectRowViaKeys_(e.key);return}}onSearchIconClicked_(){this.$.search.getSearchInput().select();if(this.getCurrentQuery_()){this.shouldShowDropdown_=true}}}customElements.define(OsSettingsSearchBoxElement.is,OsSettingsSearchBoxElement);function getTemplate$7(){return html`<!--_html_template_start_--><style include="cr-icons cr-hidden-style settings-shared">:host{align-items:center;background-color:var(--settings-base-bg-color);color:var(--cros-text-color-secondary);display:flex;height:var(--settings-toolbar-height);padding-top:var(--settings-toolbar-padding-top)}h1{flex:1;font-size:123%;font-weight:500;letter-spacing:.25px;line-height:normal;margin-inline-start:8px;padding-inline-end:12px}:host-context(body.revamp-wayfinding-enabled) h1{color:var(--cros-sys-primary);font:var(--cros-title-1-font)}#leftContent{position:relative;transition:opacity .1s}#leftSpacer{align-items:center;box-sizing:border-box;display:flex;padding-inline-start:var(--settings-toolbar-padding-inline-start);width:var(--settings-menu-width)}:host([narrow]) #leftSpacer{width:20px;padding-inline-start:var(--settings-toolbar-padding-inline-start-narrow)}cr-icon-button{--cr-icon-button-fill-color:currentColor;--cr-icon-button-size:32px;min-width:32px}#centeredContent{display:flex;flex:1 1 0;justify-content:center}#rightSpacer{padding-inline-end:8px}:host([narrow]) #centeredContent{position:absolute;width:100%;z-index:-1}:host([narrow]:not([showing-search_])) #centeredContent{justify-content:flex-end}:host([has-overlay]){transition:visibility var(--cr-toolbar-overlay-animation-duration);visibility:hidden}:host([narrow][showing-search_]) #settingsTitle{display:none}:host([showing-search_][is-search-box-cutoff_]) os-settings-search-box{--cr-toolbar-field-width:min(80vw,
      var(--settings-toolbar-search-box-width));margin-inline-start:48px}:host([showing-search_][is-search-box-cutoff_][narrow]) os-settings-search-box{--cr-toolbar-field-width:min(80vw,
      var(--settings-toolbar-narrow-search-box-width))}:host([showing-search_][narrow]:not([is-search-box-cutoff_])) os-settings-search-box{--cr-toolbar-field-width:var(--settings-toolbar-narrow-search-box-width)}:host(:not([narrow]):not([is-search-box-cutoff_])) os-settings-search-box{--cr-toolbar-field-width:var(--settings-toolbar-search-box-width)}:host(:not([narrow])) #leftContent{flex:1 1 0}:host(:not([narrow])) #centeredContent{flex-basis:var(--settings-main-basis)}:host([narrow][showing-search_]) #rightContent{display:none}:host(:not([narrow])) #rightContent{flex:1 1 0;text-align:end}</style>
<iron-media-query query="(max-width: 780px)" query-matches="{{isSearchBoxCutoff_}}">
</iron-media-query>
<div id="leftContent">
  <div id="leftSpacer">
    <template is="dom-if" if="[[showMenu]]">
      <cr-icon-button id="menuButton" class="no-overlap" iron-icon="cr20:menu" on-click="onMenuClick_" aria-label="$i18n{menuButtonLabel}" title="$i18n{menuButtonLabel}">
      </cr-icon-button>
    </template>
    <h1 id="settingsTitle">$i18n{settings}</h1>
  </div>
</div>

<div id="centeredContent" hidden$="[[!showSearch]]">
  <os-settings-search-box id="searchBox" narrow="[[narrow]]" showing-search="{{showingSearch_}}">
  </os-settings-search-box>
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
class OsToolbarElement extends PolymerElement{static get is(){return"os-toolbar"}static get template(){return getTemplate$7()}static get properties(){return{spinnerActive:Boolean,showMenu:{type:Boolean,value:false},showSearch:{type:Boolean,value:true},narrow:{type:Boolean,value:false,reflectToAttribute:true},isSearchBoxCutoff_:{type:Boolean,reflectToAttribute:true},showingSearch_:{type:Boolean,reflectToAttribute:true}}}getSearchField(){const searchBox=castExists(this.shadowRoot.querySelector("os-settings-search-box"));return castExists(searchBox.shadowRoot.querySelector("cr-toolbar-search-field"))}onMenuClick_(){const event=new CustomEvent("os-toolbar-menu-tap",{bubbles:true,composed:true});this.dispatchEvent(event)}}customElements.define(OsToolbarElement.is,OsToolbarElement);
/* Copyright 2020 The Chromium Authors
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file. */const PrefType=chrome.settingsPrivate.PrefType;const PREF_TO_SETTING_MAP={"settings.clock.use_24hour_clock":{setting:Setting.k24HourClock,type:PrefType.BOOLEAN},"generated.resolve_timezone_by_geolocation_on_off":{setting:Setting.kChangeTimeZone,type:PrefType.BOOLEAN},"settings.restore_apps_and_pages":{setting:Setting.kRestoreAppsAndPages,type:PrefType.NUMBER},"ash.low_battery_sound.enabled":{setting:Setting.kLowBatterySound,type:PrefType.BOOLEAN},"ash.charging_sounds.enabled":{setting:Setting.kChargingSounds,type:PrefType.BOOLEAN},"settings.language.send_function_keys":{setting:Setting.kKeyboardFunctionKeys,type:PrefType.BOOLEAN},"settings.touchpad.sensitivity2":{setting:Setting.kTouchpadSpeed,type:PrefType.NUMBER},"settings.a11y.screen_magnifier_focus_following":{setting:Setting.kFullscreenMagnifierFocusFollowing,type:PrefType.BOOLEAN},"settings.a11y.screen_magnifier_mouse_following_mode":{setting:Setting.kFullscreenMagnifierMouseFollowingMode,type:PrefType.NUMBER},"settings.a11y.color_filtering.enabled":{setting:Setting.kColorCorrectionEnabled,type:PrefType.BOOLEAN},"settings.a11y.color_filtering.color_vision_deficiency_type":{setting:Setting.kColorCorrectionFilterType,type:PrefType.NUMBER},"settings.a11y.color_filtering.color_vision_correction_amount":{setting:Setting.kColorCorrectionFilterAmount,type:PrefType.NUMBER},"cros.device.peripheral_data_access_enabled":{setting:Setting.kPeripheralDataAccessProtection,type:PrefType.BOOLEAN},"cros.reven.enable_hw_data_usage":{setting:Setting.kRevenEnableHwDataUsage,type:PrefType.BOOLEAN}};function convertPrefToSettingMetric(prefKey,prefValue){const settingAndType=PREF_TO_SETTING_MAP[prefKey];if(!settingAndType){return null}const{type:type,setting:setting}=settingAndType;switch(type){case PrefType.BOOLEAN:assert(typeof prefValue==="boolean");return{setting:setting,value:{boolValue:prefValue}};case PrefType.NUMBER:assert(typeof prefValue==="number");return{setting:setting,value:{intValue:prefValue}};default:return null}}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function createPageAvailability(){return{[Section$1.kAboutChromeOs]:!!routes.ABOUT,[Section$1.kAccessibility]:!!routes.OS_ACCESSIBILITY,[Section$1.kApps]:!!routes.APPS,[Section$1.kBluetooth]:!!routes.BLUETOOTH,[Section$1.kDevice]:!!routes.DEVICE,[Section$1.kKerberos]:!!routes.KERBEROS,[Section$1.kMultiDevice]:!!routes.MULTIDEVICE,[Section$1.kNetwork]:!!routes.INTERNET,[Section$1.kPeople]:!!routes.OS_PEOPLE,[Section$1.kPersonalization]:!!routes.PERSONALIZATION,[Section$1.kPrivacyAndSecurity]:!!routes.OS_PRIVACY,[Section$1.kSystemPreferences]:!!routes.SYSTEM_PREFERENCES,[Section$1.kCrostini]:!!routes.CROSTINI,[Section$1.kDateAndTime]:!!routes.DATETIME,[Section$1.kFiles]:!!routes.FILES,[Section$1.kLanguagesAndInput]:!!routes.OS_LANGUAGES,[Section$1.kPrinting]:!!routes.OS_PRINTING,[Section$1.kReset]:!!routes.OS_RESET,[Section$1.kSearchAndAssistant]:!!routes.OS_SEARCH}}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let instance=null;class OsSettingsHatsBrowserProxyImpl{static getInstance(){return instance||(instance=new OsSettingsHatsBrowserProxyImpl)}static setInstanceForTesting(obj){instance=obj}sendSettingsHats(){chrome.send("sendSettingsHats")}settingsUsedSearch(){chrome.send("settingsUsedSearch")}}function getTemplate$6(){return html`<!--_html_template_start_--><style include="cr-page-host-style settings-shared">:host{display:flex;flex-direction:column;height:100%;--settings-main-basis:calc(var(--cr-centered-card-max-width) /
        var(--cr-centered-card-width-percentage));--cr-card-border-radius:4px;--cr-card-shadow:var(--cr-elevation-1);--cr-toolbar-padding-top:8px}os-toolbar{min-height:56px;z-index:3}cr-drawer{--cr-separator-line:none;--cr-drawer-header-color:var(--cros-text-color-secondary);--cr-drawer-header-font-weight:500;--cr-drawer-header-padding:20px}#cr-container-shadow-top{z-index:2}#container{align-items:flex-start;display:flex;flex:1;overflow:overlay;position:relative}:host-context(body.revamp-wayfinding-enabled) #container{padding-top:8px}#center,#left,#right{flex:1 1 0}#left{height:100%;position:sticky;top:0}#left os-settings-menu{height:100%;overflow:auto;overscroll-behavior:contain}:host-context(body.revamp-wayfinding-enabled) #drawer{--cr-drawer-border-start-end-radius:12px;--cr-drawer-border-end-end-radius:12px;--cr-drawer-header-color:var(--cros-sys-primary);--cr-drawer-header-font:var(--cros-title-1-font);--cr-drawer-header-padding:22px;--cr-drawer-width:var(--settings-menu-width)}#center{flex-basis:var(--settings-main-basis)}:host-context(body.revamp-wayfinding-enabled) #center{height:100%}:host-context(body.revamp-wayfinding-enabled) #center>os-settings-main{min-height:100%}@media (max-width:980px){#left,#right{display:none}#center{min-width:auto;padding:0 3px}}#drawerIcon{cursor:pointer;margin-inline-end:14px;margin-inline-start:0;outline:0}:host-context(body.revamp-wayfinding-enabled) #drawerIcon{--iron-icon-fill-color:var(--cros-sys-primary);margin-inline-end:6px}</style>
<settings-prefs id="prefs" prefs="{{prefs}}"></settings-prefs>
<iron-media-query query="(max-width: [[narrowThreshold_]]px)" query-matches="{{isNarrow}}">
</iron-media-query>
<template is="dom-if" if="[[showToolbar_]]">
  <os-toolbar on-os-toolbar-menu-tap="onMenuButtonClick_" spinner-active="[[toolbarSpinnerActive_]]" role="banner" narrow="[[isNarrow]]" narrow-threshold="980" show-menu="[[isNarrow]]">
  </os-toolbar>
</template>
<template is="dom-if" if="[[showNavMenu_]]">
  <cr-drawer id="drawer" on-close="onMenuClose_" heading="$i18n{settings}" align="$i18n{textdirection}">
    <div slot="header-icon">
      
      <cr-icon-button id="drawerIcon" iron-icon="cr20:menu" on-click="onDrawerIconClick_" title="$i18n{close}" aria-hidden="true">
      </cr-icon-button>
    </div>
    <div slot="body">
      <template is="dom-if" id="drawerTemplate">
        <os-settings-menu page-availability="[[pageAvailability_]]" on-iron-activate="onMenuItemSelected_" advanced-opened="{{advancedOpenedInMenu_}}">
        </os-settings-menu>
      </template>
    </div>
  </cr-drawer>
</template>

<div id="container" class="no-outline">
  <div id="left">
    <template is="dom-if" if="[[showNavMenu_]]">
      <os-settings-menu page-availability="[[pageAvailability_]]" on-iron-activate="onMenuItemSelected_" advanced-opened="{{advancedOpenedInMenu_}}">
      </os-settings-menu>
    </template>
  </div>
  <div id="center">
    <os-settings-main prefs="{{prefs}}" toolbar-spinner-active="{{toolbarSpinnerActive_}}" page-availability="[[pageAvailability_]]" advanced-toggle-expanded="{{advancedOpenedInMain_}}">
    </os-settings-main>
  </div>
  
  <div id="right"></div>
</div>
<!--_html_template_end_-->`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let defaultResourceLoaded=true;assert(!window.settings||!defaultResourceLoaded,"os_settings_ui.js was executed twice. You probably have an invalid import.");const OsSettingsUiElementBase=RouteObserverMixin(FindShortcutMixin(CrContainerShadowMixin(PolymerElement)));class OsSettingsUiElement extends OsSettingsUiElementBase{static get is(){return"os-settings-ui"}static get template(){return getTemplate$6()}static get properties(){return{prefs:Object,advancedOpenedInMain_:{type:Boolean,value:false,notify:true,observer:"onAdvancedOpenedInMainChanged_"},advancedOpenedInMenu_:{type:Boolean,value:false,notify:true,observer:"onAdvancedOpenedInMenuChanged_"},toolbarSpinnerActive_:{type:Boolean,value:false},isNarrow:{type:Boolean,value:false,readonly:true,notify:true,observer:"onNarrowChanged_"},pageAvailability_:{type:Object,value:()=>createPageAvailability()},showToolbar_:Boolean,showNavMenu_:Boolean,narrowThreshold_:{type:Number,value:980}}}constructor(){super();this.isRevampWayfindingEnabled_=isRevampWayfindingEnabled();this.activeRoute_=null;this.scrollEndDebouncer_=null;Router.getInstance().initializeRouteFromUrl();this.osSettingsHatsBrowserProxy_=OsSettingsHatsBrowserProxyImpl.getInstance();this.boundTriggerSettingsHats_=this.triggerSettingsHats_.bind(this)}ready(){super.ready();window.CrPolicyStrings={controlledSettingExtension:loadTimeData.getString("controlledSettingExtension"),controlledSettingExtensionWithoutName:loadTimeData.getString("controlledSettingExtensionWithoutName"),controlledSettingPolicy:loadTimeData.getString("controlledSettingPolicy"),controlledSettingRecommendedMatches:loadTimeData.getString("controlledSettingRecommendedMatches"),controlledSettingRecommendedDiffers:loadTimeData.getString("controlledSettingRecommendedDiffers"),controlledSettingShared:loadTimeData.getString("controlledSettingShared"),controlledSettingWithOwner:loadTimeData.getString("controlledSettingWithOwner"),controlledSettingNoOwner:loadTimeData.getString("controlledSettingNoOwner"),controlledSettingParent:loadTimeData.getString("controlledSettingParent"),controlledSettingChildRestriction:loadTimeData.getString("controlledSettingChildRestriction")};this.showNavMenu_=!loadTimeData.getBoolean("isKioskModeActive");this.showToolbar_=!loadTimeData.getBoolean("isKioskModeActive");this.addEventListener("show-container",(()=>{this.$.container.style.visibility="visible"}));this.addEventListener("hide-container",(()=>{this.$.container.style.visibility="hidden"}));this.addEventListener("refresh-pref",this.onRefreshPref_);this.addEventListener("user-action-setting-change",this.onSettingChange_);this.addEventListener("search-changed",(()=>{this.osSettingsHatsBrowserProxy_.settingsUsedSearch()}),{once:true});this.listenForDrawerOpening_();this.enableShadowBehavior(true)}connectedCallback(){super.connectedCallback();document.documentElement.classList.remove("loading");setTimeout((()=>{this.recordTimeUntilInteractive_()}));document.fonts.load("bold 12px Roboto");setGlobalScrollTarget(this.$.container);const scrollToTop=top=>new Promise((resolve=>{if(this.$.container.scrollTop===top){resolve();return}this.$.container.scrollTo({top:top,behavior:"auto"});const onScroll=()=>{this.scrollEndDebouncer_=Debouncer.debounce(this.scrollEndDebouncer_,timeOut.after(75),(()=>{this.$.container.removeEventListener("scroll",onScroll);resolve()}))};this.$.container.addEventListener("scroll",onScroll)}));this.addEventListener("scroll-to-top",(e=>{scrollToTop(e.detail.top).then(e.detail.callback)}));this.addEventListener("scroll-to-bottom",(e=>{scrollToTop(e.detail.bottom-this.$.container.clientHeight).then(e.detail.callback)}));if(document.hasFocus()){recordPageFocus()}window.addEventListener("focus",recordPageFocus);window.addEventListener("blur",recordPageBlur);window.addEventListener("blur",this.boundTriggerSettingsHats_);window.addEventListener("click",recordClick,true);if(this.isRevampWayfindingEnabled_){document.body.classList.add("revamp-wayfinding-enabled")}}disconnectedCallback(){super.disconnectedCallback();window.removeEventListener("focus",recordPageFocus);window.removeEventListener("blur",recordPageBlur);window.removeEventListener("blur",this.boundTriggerSettingsHats_);window.removeEventListener("click",recordClick);Router.getInstance().resetRouteForTesting()}currentRouteChanged(newRoute,oldRoute){if(oldRoute&&newRoute!==oldRoute){recordNavigation()}if(!this.isRevampWayfindingEnabled_){if(newRoute.isSubpage()){this.enableShadowBehavior(false);this.showDropShadows()}else{this.enableShadowBehavior(true)}}}handleFindShortcut(modalContextOpen){if(modalContextOpen||!this.showToolbar_){return false}const toolbar=this.getToolbar_();toolbar.getSearchField().showAndFocus();toolbar.getSearchField().getSearchInput().select();return true}searchInputHasFocus(){if(!this.showToolbar_){return false}return this.getToolbar_().getSearchField().isSearchFocused()}listenForDrawerOpening_(){if(!this.showNavMenu_){return}microTask.run((()=>{const drawer=this.getDrawer_();listenOnce(drawer,"cr-drawer-opening",(()=>{const drawerTemplate=castExists(this.shadowRoot.querySelector("#drawerTemplate"));drawerTemplate.if=true}));window.addEventListener("popstate",(()=>{drawer.cancel()}))}))}getDrawer_(){return castExists(this.shadowRoot.querySelector("cr-drawer"))}getToolbar_(){return castExists(this.shadowRoot.querySelector("os-toolbar"))}onRefreshPref_(e){this.$.prefs.refresh(e.detail)}onSettingChange_(e){const{prefKey:prefKey,prefValue:prefValue}=e.detail;const settingMetric=convertPrefToSettingMetric(prefKey,prefValue);if(!settingMetric){recordSettingChange();return}recordSettingChange(settingMetric.setting,settingMetric.value)}onMenuItemSelected_(e){assert(this.showNavMenu_);const path=e.detail.selected;const route=Router.getInstance().getRouteForPath(path);assert(route,`os-settings-menu-item with invalid route: ${path}`);this.activeRoute_=route;if(this.isNarrow){this.getDrawer_().close();return}this.navigateToActiveRoute_()}onMenuButtonClick_(){if(!this.showNavMenu_){return}this.getDrawer_().toggle()}navigateToActiveRoute_(){if(this.activeRoute_){Router.getInstance().navigateTo(this.activeRoute_,undefined,true);this.activeRoute_=null}}onMenuClose_(){if(!this.getDrawer_().wasCanceled()){this.navigateToActiveRoute_();return}this.$.container.setAttribute("tabindex","-1");this.$.container.focus();listenOnce(this.$.container,["blur","pointerdown"],(()=>{this.$.container.removeAttribute("tabindex")}))}onAdvancedOpenedInMainChanged_(){if(this.advancedOpenedInMain_){this.advancedOpenedInMenu_=true}}onAdvancedOpenedInMenuChanged_(){if(this.advancedOpenedInMenu_){this.advancedOpenedInMain_=true}}onNarrowChanged_(){if(this.showNavMenu_){const drawer=this.getDrawer_();if(drawer.open&&!this.isNarrow){drawer.close()}}}onDrawerIconClick_(){this.getDrawer_().cancel()}recordTimeUntilInteractive_(){const METRIC_NAME="ChromeOS.Settings.TimeUntilInteractive";const timeMs=Math.round(window.performance.now());chrome.metricsPrivate.recordTime(METRIC_NAME,timeMs)}triggerSettingsHats_(){this.osSettingsHatsBrowserProxy_.sendSettingsHats()}}customElements.define(OsSettingsUiElement.is,OsSettingsUiElement);function getTemplate$5(){return html`<!--_html_template_start_--><style include="settings-shared input-device-settings-shared"></style>
<h2 class="subsection-header" id="keyboardName">
  [[getKeyboardName(keyboard.name)]]
</h2>
<div class="subsection">
  <template is="dom-if" if="[[!isChromeOsKeyboard(keyboard)]]" restamp>
    <settings-toggle-button inverted="true" id="externalTopRowAreFunctionKeysButton" pref="{{topRowAreFunctionKeysPref}}" aria-describedby="keyboardName" label="$i18n{keyboardSendInvertedFunctionKeys}" sub-label="$i18n{keyboardSendInvertedFunctionKeysDescription}" deep-link-focus-id$="[[Setting.kKeyboardFunctionKeys]]">
    </settings-toggle-button>
    <settings-toggle-button inverted="true" class="hr" id="blockMetaFunctionKeyRewritesButton" pref="{{blockMetaFunctionKeyRewritesPref}}" aria-describedby="keyboardName" label="$i18n{keyboardBlockMetaFunctionKeyRewrites}" sub-label="$i18n{keyboardBlockMetaFunctionKeyRewritesDescription}" deep-link-focus-id$="[[Setting.kKeyboardBlockMetaFkeyRewrites]]">
    </settings-toggle-button>
  </template>
  <template is="dom-if" if="[[isChromeOsKeyboard(keyboard)]]" restamp>
    <settings-toggle-button id="internalTopRowAreFunctionKeysButton" pref="{{topRowAreFunctionKeysPref}}" aria-describedby="keyboardName" label="$i18n{keyboardSendFunctionKeys}" sub-label="$i18n{keyboardSendFunctionKeysDescription}" deep-link-focus-id$="[[Setting.kKeyboardFunctionKeys]]">
    </settings-toggle-button>
  </template>
  <cr-link-row id="remapKeyboardKeys" class$="[[getRemapKeyboardKeysClass(keyboard)]]" on-click="onRemapKeyboardKeysClick" aria-describedby="keyboardName" label="$i18n{remapKeyboardKeysRowLabel}" sub-label="[[remapKeyboardKeysSublabel]]" deep-link-focus-id$="[[Setting.kKeyboardRemapKeys]]">
  </cr-link-row>
</div>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsPerDeviceKeyboardSubsectionElementBase=DeepLinkingMixin(I18nMixin(RouteObserverMixin(PolymerElement)));class SettingsPerDeviceKeyboardSubsectionElement extends SettingsPerDeviceKeyboardSubsectionElementBase{constructor(){super(...arguments);this.isInitialized=false;this.inputDeviceSettingsProvider=getInputDeviceSettingsProvider()}static get is(){return"settings-per-device-keyboard-subsection"}static get template(){return getTemplate$5()}static get properties(){return{topRowAreFunctionKeysPref:{type:Object,value(){return{key:"fakeTopRowAreFunctionKeysPref",type:chrome.settingsPrivate.PrefType.BOOLEAN,value:false}}},blockMetaFunctionKeyRewritesPref:{type:Object,value(){return{key:"fakeBlockMetaFunctionKeyRewritesPref",type:chrome.settingsPrivate.PrefType.BOOLEAN,value:false}}},keyboard:{type:Object},keyboardPolicies:{type:Object},remapKeyboardKeysSublabel:{type:String,value:""},supportedSettingIds:{type:Object,value:()=>new Set([Setting.kKeyboardFunctionKeys,Setting.kKeyboardRemapKeys])},keyboardIndex:{type:Number},isLastDevice:{type:Boolean,reflectToAttribute:true}}}static get observers(){return["onSettingsChanged(topRowAreFunctionKeysPref.value,"+"blockMetaFunctionKeyRewritesPref.value,"+"enableAutoRepeatPref.value,"+"autoRepeatDelaysPref.value,"+"autoRepeatIntervalsPref.value)","onPoliciesChanged(keyboardPolicies)","onKeyboardRemappingsChanged(keyboard.*)","updateSettingsToCurrentPrefs(keyboard)"]}currentRouteChanged(newRoute){if(newRoute!==routes.PER_DEVICE_KEYBOARD){return}if(this.keyboard.isExternal){this.supportedSettingIds.add(Setting.kKeyboardBlockMetaFkeyRewrites)}if(this.keyboardIndex===0){this.attemptDeepLink()}}updateSettingsToCurrentPrefs(){this.isInitialized=false;this.set("topRowAreFunctionKeysPref.value",this.keyboard.settings.topRowAreFkeys);this.set("blockMetaFunctionKeyRewritesPref.value",this.keyboard.settings.suppressMetaFkeyRewrites);this.isInitialized=true}onPoliciesChanged(){this.topRowAreFunctionKeysPref={...this.topRowAreFunctionKeysPref,...getPrefPolicyFields$1(this.keyboardPolicies.topRowAreFkeysPolicy)};this.blockMetaFunctionKeyRewritesPref={...this.blockMetaFunctionKeyRewritesPref,...getPrefPolicyFields$1(this.keyboardPolicies.enableMetaFkeyRewritesPolicy)}}onLearnMoreLinkClicked_(event){const path=event.composedPath();if(!Array.isArray(path)||!path.length){return}if(path[0].tagName==="A"){event.stopPropagation()}}onSettingsChanged(){if(!this.isInitialized){return}const newSettings={...this.keyboard.settings,topRowAreFkeys:this.topRowAreFunctionKeysPref.value,suppressMetaFkeyRewrites:this.blockMetaFunctionKeyRewritesPref.value};if(settingsAreEqual(newSettings,this.keyboard.settings)){return}this.keyboard.settings=newSettings;this.inputDeviceSettingsProvider.setKeyboardSettings(this.keyboard.id,this.keyboard.settings)}getNumRemappedSixPackKeys(){return Object.values(this.keyboard.settings.sixPackKeyRemappings).filter((modifier=>modifier!==SixPackShortcutModifier.kSearch)).length}async onKeyboardRemappingsChanged(){let numRemappedKeys=Object.keys(this.keyboard.settings.modifierRemappings).length;if(loadTimeData.getBoolean("enableAltClickAndSixPackCustomization")){numRemappedKeys+=this.getNumRemappedSixPackKeys()}this.remapKeyboardKeysSublabel=await PluralStringProxyImpl.getInstance().getPluralString("remapKeyboardKeysRowSubLabel",numRemappedKeys)}onRemapKeyboardKeysClick(){const url=new URLSearchParams("keyboardId="+encodeURIComponent(this.keyboard.id));Router.getInstance().navigateTo(routes.PER_DEVICE_KEYBOARD_REMAP_KEYS,url,true)}getKeyboardName(){return this.keyboard.isExternal?this.keyboard.name:this.i18n("builtInKeyboardName")}isChromeOsKeyboard(){return this.keyboard.metaKey===MetaKey.kLauncher||this.keyboard.metaKey===MetaKey.kSearch}getRemapKeyboardKeysClass(){return`hr bottom-divider ${this.keyboard.isExternal?"":"remap-keyboard-keys-row-internal"}`}}customElements.define(SettingsPerDeviceKeyboardSubsectionElement.is,SettingsPerDeviceKeyboardSubsectionElement);function getTemplate$4(){return html`<!--_html_template_start_--><style include="settings-shared input-device-settings-shared">.settings-box:first-of-type{border-top:none}#mouseControlledScrolling,:host([allow-scroll-settings_]) #mouseAcceleration,:host([allow-scroll-settings_]) .settings-box{margin-left:var(--cr-section-indent-width)}:host([allow-scroll-settings_]) #mouseReverseScrollRow{border-top:none}.subsection-subtitle{padding-top:15px}</style>
<div id="mouse">
  <h2 class="subsection-header" id="mouseName">[[mouse.name]]</h2>
  <template is="dom-if" if="[[showSwapToggleButton(
      customizationRestriction, isPeripheralCustomizationEnabled_)]]">
    <settings-toggle-button id="mouseSwapToggleButton" label="$i18n{mouseSwapButtonsLabel}" pref="{{primaryRightPref}}">
    </settings-toggle-button>
  </template>
  <div class="subsection">
    <template is="dom-if" if="[[allowScrollSettings_]]">
      <h2 class="subsection-subtitle">$i18n{mouseCursor}</h2>
    </template>
    <template is="dom-if" if="[[!isPeripheralCustomizationEnabled_]]">
      <div class="settings-box">
        <div class="start settings-box-text" id="mouseSwapButtonLabel">
          $i18n{mouseSwapButtonsLabel}
        </div>
        <settings-dropdown-menu id="mouseSwapButtonDropdown" aria-describedby="mouseName" label="$i18n{mouseSwapButtonsLabel}" pref="{{primaryRightPref}}" menu-options="[[swapPrimaryOptions]]" deep-link-focus-id$="[[Setting.kMouseSwapPrimaryButtons]]">
        </settings-dropdown-menu>
      </div>
    </template>
    <settings-toggle-button id="mouseAcceleration" class="hr" pref="{{accelerationPref}}" label="[[getCursorAccelerationString()]]" sub-label="[[getMouseAccelerationDescription()]]" aria-describedby="mouseName" deep-link-focus-id$="[[Setting.kMouseAcceleration]]">
    </settings-toggle-button>
    <div class="settings-box">
      <div class="start" id="mouseSpeedLabel" aria-hidden="true">
        [[getCursorSpeedString()]]
      </div>
      <settings-slider id="mouseSpeedSlider" pref="{{sensitivityPref}}" ticks="[[sensitivityValues_]]" aria-describedby="mouseName" label-aria="[[getCursorSpeedString()]]" label-min="$i18n{pointerSlow}" label-max="$i18n{pointerFast}" deep-link-focus-id$="[[Setting.kMouseSpeed]]">
      </settings-slider>
    </div>
    <template is="dom-if" if="[[allowScrollSettings_]]">
      <h2 class="hr">$i18n{mouseScrolling}</h2>
    </template>
    <div class="settings-box bottom-divider" id="mouseReverseScrollRow" on-click="onMouseReverseScrollRowClicked_">
      <div class="start settings-box-text">
        <localized-link aria-describedby="mouseName" on-click="onLearnMoreLinkClicked_" id="enableMouseReverseScrollingLabel" localized-string="$i18n{mouseReverseScrollLabel}" link-url="$i18n{naturalScrollLearnMoreLink}">
        </localized-link>
        <div class="secondary" hidden="[[!isRevampWayfindingEnabled_]]">
          $i18n{mouseReverseScrollDescription}
        </div>
      </div>
      <cr-toggle id="mouseReverseScroll" checked="{{reverseScrollValue}}" aria-describedby="mouseName" aria-label="[[getLabelWithoutLearnMore('mouseReverseScrollLabel')]]" deep-link-focus-id$="[[Setting.kMouseReverseScrolling]]">
      </cr-toggle>
    </div>
    <template is="dom-if" if="[[allowScrollSettings_]]" restamp>
      <div class="settings-box bottom-divider" id="mouseControlledScrollingRow" on-click="onMouseControlledScrollingRowClicked_">
        <div class="start settings-box-text">
          <localized-link aria-describedby="mouseName" on-click="onLearnMoreLinkClicked_" id="enableMouseControlledScrollingLabel" localized-string="$i18n{mouseControlledScrollingLabel}" link-url="$i18n{controlledScrollingLearnMoreLink}">
          </localized-link>
        </div>
        <cr-toggle id="mouseControlledScrolling" checked="{{!scrollAccelerationValue}}" aria-describedby="mouseName" aria-label="[[getLabelWithoutLearnMore('mouseControlledScrollingLabel')]]" deep-link-focus-id$="[[Setting.kMouseScrollAcceleration]]">
        </cr-toggle>
      </div>
      <div class="settings-box">
        <div class="start" id="mouseScrollSpeedLabel" aria-hidden="true">
          $i18n{mouseScrollSpeed}
        </div>
        <settings-slider id="mouseScrollSpeedSlider" pref="{{scrollSensitivityPref}}" ticks="[[sensitivityValues_]]" aria-describedby="mouseName" label-aria="$i18n{mouseScrollSpeed}" label-min="$i18n{pointerSlow}" label-max="$i18n{pointerFast}" disabled="[[mouse.settings.scrollAcceleration]]" aria-disabled="[[mouse.settings.scrollAcceleration]]">
        </settings-slider>
      </div>
    </template>
    <template is="dom-if" if="[[showCustomizeButtonRow(
        customizationRestriction,isPeripheralCustomizationEnabled_)]]">
      <cr-link-row id="customizeMouseButtons" class="hr bottom-divider" on-click="onCustomizeButtonsClick" aria-describedby="mouseName" label="$i18n{customizeMouseButtonsTitle}">
      </cr-link-row>
    </template>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsPerDeviceMouseSubsectionElementBase=DeepLinkingMixin(RouteObserverMixin(I18nMixin(PolymerElement)));class SettingsPerDeviceMouseSubsectionElement extends SettingsPerDeviceMouseSubsectionElementBase{constructor(){super(...arguments);this.isInitialized=false;this.inputDeviceSettingsProvider=getInputDeviceSettingsProvider()}static get is(){return"settings-per-device-mouse-subsection"}static get template(){return getTemplate$4()}static get properties(){return{isPeripheralCustomizationEnabled_:{type:Boolean,value(){return loadTimeData.getBoolean("enablePeripheralCustomization")},readOnly:true},primaryRightPref:{type:Object,value(){return{key:"fakePrimaryRightPref",type:chrome.settingsPrivate.PrefType.BOOLEAN,value:false}}},accelerationPref:{type:Object,value(){return{key:"fakeAccelerationPref",type:chrome.settingsPrivate.PrefType.BOOLEAN,value:true}}},sensitivityPref:{type:Object,value(){return{key:"fakeSensitivityPref",type:chrome.settingsPrivate.PrefType.NUMBER,value:3}}},scrollSensitivityPref:{type:Object,value(){return{key:"fakeScrollSensitivityPref",type:chrome.settingsPrivate.PrefType.NUMBER,value:3}}},reverseScrollValue:{type:Boolean,value:false},scrollAccelerationValue:{type:Boolean,value:true},swapPrimaryOptions:{readOnly:true,type:Array,value(){return[{value:false,name:loadTimeData.getString("primaryMouseButtonLeft")},{value:true,name:loadTimeData.getString("primaryMouseButtonRight")}]}},allowScrollSettings_:{type:Boolean,value(){return loadTimeData.getBoolean("allowScrollSettings")},reflectToAttribute:true},sensitivityValues_:{type:Array,value:[1,2,3,4,5],readOnly:true},isRevampWayfindingEnabled_:{type:Boolean,value:()=>isRevampWayfindingEnabled()},mouse:{type:Object},mousePolicies:{type:Object},supportedSettingIds:{type:Object,value:()=>new Set([Setting.kMouseSwapPrimaryButtons,Setting.kMouseReverseScrolling,Setting.kMouseAcceleration,Setting.kMouseScrollAcceleration,Setting.kMouseSpeed])},mouseIndex:{type:Number},isLastDevice:{type:Boolean,reflectToAttribute:true},customizationRestriction:{type:Object}}}static get observers(){return["onSettingsChanged(primaryRightPref.value,"+"accelerationPref.value,"+"sensitivityPref.value,"+"scrollSensitivityPref.value,"+"reverseScrollValue,"+"scrollAccelerationValue)","onPoliciesChanged(mousePolicies)","updateSettingsToCurrentPrefs(mouse)"]}currentRouteChanged(route){if(route!==routes.PER_DEVICE_MOUSE){return}if(this.mouseIndex===0){this.attemptDeepLink()}}showCustomizeButtonRow(){return this.customizationRestriction!==CustomizationRestriction.kDisallowCustomizations&&this.isPeripheralCustomizationEnabled_}showSwapToggleButton(){return this.customizationRestriction===CustomizationRestriction.kDisallowCustomizations&&this.isPeripheralCustomizationEnabled_}updateSettingsToCurrentPrefs(){this.isInitialized=false;this.set("primaryRightPref.value",this.mouse.settings.swapRight);this.set("accelerationPref.value",this.mouse.settings.accelerationEnabled);this.set("sensitivityPref.value",this.mouse.settings.sensitivity);this.set("scrollSensitivityPref.value",this.mouse.settings.scrollSensitivity);this.reverseScrollValue=this.mouse.settings.reverseScrolling;this.scrollAccelerationValue=this.mouse.settings.scrollAcceleration;this.customizationRestriction=this.mouse.customizationRestriction;this.isInitialized=true}onPoliciesChanged(){this.primaryRightPref={...this.primaryRightPref,...getPrefPolicyFields$1(this.mousePolicies.swapRightPolicy)}}onLearnMoreLinkClicked_(event){const path=event.composedPath();if(!Array.isArray(path)||!path.length){return}if(path[0].tagName==="A"){event.stopPropagation()}}onMouseReverseScrollRowClicked_(){this.reverseScrollValue=!this.reverseScrollValue}onMouseControlledScrollingRowClicked_(){this.scrollAccelerationValue=!this.scrollAccelerationValue}onSettingsChanged(){if(!this.isInitialized){return}const newSettings={...this.mouse.settings,swapRight:this.primaryRightPref.value,accelerationEnabled:this.accelerationPref.value,sensitivity:this.sensitivityPref.value,scrollSensitivity:this.scrollSensitivityPref.value,reverseScrolling:this.reverseScrollValue,scrollAcceleration:this.scrollAccelerationValue};if(settingsAreEqual(newSettings,this.mouse.settings)){return}this.mouse.settings=newSettings;this.inputDeviceSettingsProvider.setMouseSettings(this.mouse.id,this.mouse.settings)}getLabelWithoutLearnMore(stringName){const tempEl=document.createElement("div");const localizedString=this.i18nAdvanced(stringName);tempEl.innerHTML=localizedString;const nodesToDelete=[];tempEl.childNodes.forEach((node=>{if(node.nodeType===Node.ELEMENT_NODE&&node.nodeName==="A"){nodesToDelete.push(node);return}}));nodesToDelete.forEach((node=>{tempEl.removeChild(node)}));return tempEl.innerHTML}getCursorSpeedString(){return this.i18nAdvanced(loadTimeData.getBoolean("allowScrollSettings")?"cursorSpeed":"mouseSpeed")}getCursorAccelerationString(){return this.i18nAdvanced(loadTimeData.getBoolean("allowScrollSettings")?"cursorAccelerationLabel":"mouseAccelerationLabel")}onCustomizeButtonsClick(){const url=new URLSearchParams(`mouseId=${encodeURIComponent(this.mouse.id)}`);Router.getInstance().navigateTo(routes.CUSTOMIZE_MOUSE_BUTTONS,url,true)}getMouseAccelerationDescription(){if(this.isRevampWayfindingEnabled_){return this.i18n("mouseAccelerationDescription")}return""}}customElements.define(SettingsPerDeviceMouseSubsectionElement.is,SettingsPerDeviceMouseSubsectionElement);function getTemplate$3(){return html`<!--_html_template_start_--><style include="settings-shared input-device-settings-shared">.settings-box:first-of-type{border-top:none}</style>
<div id="pointingStick">
  <h2 class="subsection-header" id="pointingStickName">
    [[getPointingStickName(pointingStick.name)]]
  </h2>
  <div class="subsection">
    <div class="settings-box">
      <div class="start settings-box-text" id="pointingStickSwapButtonLabel">
        $i18n{pointingStickPrimaryButton}
      </div>
      <settings-dropdown-menu id="pointingStickSwapButtonDropdown" aria-describedby="pointingStickName" label="$i18n{pointingStickPrimaryButton}" pref="{{primaryRightPref}}" menu-options="[[swapPrimaryOptions]]" deep-link-focus-id$="[[Setting.kPointingStickSwapPrimaryButtons]]">
      </settings-dropdown-menu>
      </div>
      <settings-toggle-button id="pointingStickAcceleration" aria-describedby="pointingStickName" class="hr" pref="{{accelerationPref}}" label="$i18n{pointingStickAccelerationLabel}" deep-link-focus-id$="[[Setting.kPointingStickAcceleration]]">
      </settings-toggle-button>
      <div class="settings-box bottom-divider">
      <div class="start" id="pointingStickSpeedLabel" aria-hidden="true">
        $i18n{pointingStickSpeed}
      </div>
      <settings-slider id="pointingStickSpeedSlider" pref="{{sensitivityPref}}" ticks="[[sensitivityValues]]" aria-describedby="pointingStickName" label-aria="$i18n{pointingStickSpeed}" label-min="$i18n{pointerSlow}" label-max="$i18n{pointerFast}" deep-link-focus-id$="[[Setting.kPointingStickSpeed]]">
      </settings-slider>
    </div>
  </div>
</div><!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsPerDevicePointingStickSubsectionElementBase=DeepLinkingMixin(RouteObserverMixin(I18nMixin(PolymerElement)));class SettingsPerDevicePointingStickSubsectionElement extends SettingsPerDevicePointingStickSubsectionElementBase{constructor(){super(...arguments);this.isInitialized=false;this.inputDeviceSettingsProvider=getInputDeviceSettingsProvider()}static get is(){return"settings-per-device-pointing-stick-subsection"}static get template(){return getTemplate$3()}static get properties(){return{primaryRightPref:{type:Object,value(){return{key:"fakePrimaryRightPref",type:chrome.settingsPrivate.PrefType.BOOLEAN,value:false}}},accelerationPref:{type:Object,value(){return{key:"fakeAccelerationPref",type:chrome.settingsPrivate.PrefType.BOOLEAN,value:true}}},sensitivityPref:{type:Object,value(){return{key:"fakeSensitivityPref",type:chrome.settingsPrivate.PrefType.NUMBER,value:3}}},swapPrimaryOptions:{readOnly:true,type:Array,value(){return[{value:false,name:loadTimeData.getString("primaryMouseButtonLeft")},{value:true,name:loadTimeData.getString("primaryMouseButtonRight")}]}},sensitivityValues:{type:Array,value:[1,2,3,4,5],readOnly:true},pointingStick:{type:Object},supportedSettingIds:{type:Object,value:()=>new Set([Setting.kPointingStickAcceleration,Setting.kPointingStickSpeed,Setting.kPointingStickSwapPrimaryButtons])},pointingStickIndex:{type:Number},isLastDevice:{type:Boolean,reflectToAttribute:true}}}static get observers(){return["onSettingsChanged(primaryRightPref.value,"+"accelerationPref.value,"+"sensitivityPref.value)","updateSettingsToCurrentPrefs(pointingStick)"]}currentRouteChanged(route){if(route!==routes.PER_DEVICE_POINTING_STICK){return}if(this.pointingStickIndex===0){this.attemptDeepLink()}}updateSettingsToCurrentPrefs(){this.isInitialized=false;this.set("primaryRightPref.value",this.pointingStick.settings.swapRight);this.set("accelerationPref.value",this.pointingStick.settings.accelerationEnabled);this.set("sensitivityPref.value",this.pointingStick.settings.sensitivity);this.isInitialized=true}onLearnMoreLinkClicked_(event){const path=event.composedPath();if(!Array.isArray(path)||!path.length){return}if(path[0].tagName==="A"){event.stopPropagation()}}onSettingsChanged(){if(!this.isInitialized){return}const newSettings={...this.pointingStick.settings,swapRight:this.primaryRightPref.value,accelerationEnabled:this.accelerationPref.value,sensitivity:this.sensitivityPref.value};if(settingsAreEqual(newSettings,this.pointingStick.settings)){return}this.pointingStick.settings=newSettings;this.inputDeviceSettingsProvider.setPointingStickSettings(this.pointingStick.id,this.pointingStick.settings)}getPointingStickName(){return this.pointingStick.isExternal?this.pointingStick.name:this.i18n("builtInPointingStickName")}}customElements.define(SettingsPerDevicePointingStickSubsectionElement.is,SettingsPerDevicePointingStickSubsectionElement);function getTemplate$2(){return html`<!--_html_template_start_--><style include="settings-shared input-device-settings-shared"></style>
<div id="touchpad">
  <h2 class="subsection-header" id="touchpadName">[[getTouchpadName(touchpad.name)]]</h2>
  <div class="subsection">
    <settings-toggle-button id="enableTapToClick" pref="{{enableTapToClickPref}}" label="$i18n{touchpadTapToClickEnabledLabel}" sub-label="[[getTouchpadTapToClickDescription()]]" aria-describedby="touchpadName" deep-link-focus-id$="[[Setting.kTouchpadTapToClick]]">
    </settings-toggle-button>
    <template is="dom-if" if="[[isAltClickAndSixPackCustomizationEnabled]]">
      <div id="simulateRightClickContainer" class="settings-box">
        <div id="simulateRightClickLabel" aria-hidden="true" class="start settings-box-text">
          $i18n{touchpadSimulateRightClickLabel}
        </div>
        <settings-dropdown-menu id="simulateRightClickDropdown" label="$i18n{touchpadSimulateRightClickLabel}" pref="{{simulateRightClickPref}}" aria-describedby="touchpadName" menu-options="[[simulateRightClickOptions]]">
        </settings-dropdown-menu>
      </div>
    </template>
    <settings-toggle-button id="enableTapDragging" class="hr" pref="{{enableTapDraggingPref}}" label="$i18n{tapDraggingLabel}" sub-label="[[getTouchpadTapDraggingDescription()]]" aria-describedby="touchpadName" deep-link-focus-id$="[[Setting.kTouchpadTapDragging]]">
    </settings-toggle-button>
    <settings-toggle-button id="touchpadAcceleration" class="hr" pref="{{accelerationPref}}" label="$i18n{touchpadAccelerationLabel}" sub-label="[[getTouchpadAccelerationDescription()]]" aria-describedby="touchpadName" deep-link-focus-id$="[[Setting.kTouchpadAcceleration]]">
    </settings-toggle-button>
    <div class="settings-box">
      <div class="start" id="touchpadSpeedLabel" aria-hidden="true">
        $i18n{touchpadSpeed}
      </div>
        <settings-slider id="touchpadSensitivity" pref="{{sensitivityPref}}" ticks="[[sensitivityValues_]]" aria-describedby="touchpadName" label-aria="$i18n{touchpadSpeed}" label-min="$i18n{pointerSlow}" label-max="$i18n{pointerFast}" deep-link-focus-id$="[[Setting.kTouchpadSpeed]]">
        </settings-slider>
    </div>
    <template is="dom-if" if="[[touchpad.isHaptic]]" restamp>
      <div class="settings-box">
        <div class="start" id="touchpadHapticClickSensitivityLabel" aria-hidden="true">
          $i18n{touchpadHapticClickSensitivityLabel}
        </div>
        <settings-slider id="touchpadHapticClickSensitivity" pref="{{hapticClickSensitivityPref}}" ticks="[[hapticClickSensitivityValues_]]" aria-describedby="touchpadName" label-aria="$i18n{touchpadHapticClickSensitivityLabel}" label-min="$i18n{touchpadHapticLightClickLabel}" label-max="$i18n{touchpadHapticFirmClickLabel}" deep-link-focus-id$="[[Setting.kTouchpadHapticClickSensitivity]]">
        </settings-slider>
      </div>
      <div class="settings-box two-line" id="touchpadHapticFeedbackRow" on-click="onTouchpadHapticFeedbackRowClicked_">
        <div class="start settings-box-text">
          <div>$i18n{touchpadHapticFeedbackTitle}</div>
          <div class="secondary">
            <localized-link aria-describedby="touchpadName" on-click="onLearnMoreLinkClicked_" id="touchpadHapticFeedbackSecondary" localized-string="$i18n{touchpadHapticFeedbackSecondaryText}" link-url="$i18n{hapticFeedbackLearnMoreLink}">
            </localized-link>
          </div>
        </div>
        <cr-toggle id="touchpadHapticFeedbackToggle" checked="{{hapticFeedbackValue}}" aria-describedby="touchpadName" aria-label="[[getLabelWithoutLearnMore('touchpadHapticFeedbackTitle')]]" deep-link-focus-id$="[[Setting.kTouchpadHapticFeedback]]">
        </cr-toggle>
      </div>
    </template>
    <div class="settings-box bottom-divider" id="reverseScrollRow" on-click="onTouchpadReverseScrollRowClicked_">
      <div class="start settings-box-text">
        <localized-link aria-describedby="touchpadName" on-click="onLearnMoreLinkClicked_" id="enableReverseScrollingLabel" localized-string="$i18n{touchpadScrollLabel}" link-url="$i18n{naturalScrollLearnMoreLink}">
        </localized-link>
        <div class="secondary" hidden="[[!isRevampWayfindingEnabled_]]">
          $i18n{touchpadScrollDescription}
        </div>
      </div>
      <cr-toggle id="enableReverseScrollingToggle" checked="{{reverseScrollValue}}" aria-describedby="touchpadName" aria-label="[[getLabelWithoutLearnMore('touchpadScrollLabel')]]" deep-link-focus-id$="[[Setting.kTouchpadReverseScrolling]]">
      </cr-toggle>
    </div>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsPerDeviceTouchpadSubsectionElementBase=DeepLinkingMixin(RouteObserverMixin(I18nMixin(PolymerElement)));class SettingsPerDeviceTouchpadSubsectionElement extends SettingsPerDeviceTouchpadSubsectionElementBase{constructor(){super(...arguments);this.isInitialized=false;this.inputDeviceSettingsProvider=getInputDeviceSettingsProvider()}static get is(){return"settings-per-device-touchpad-subsection"}static get template(){return getTemplate$2()}static get properties(){return{enableTapToClickPref:{type:Object,value(){return{key:"fakeEnableTapToClickPref",type:chrome.settingsPrivate.PrefType.BOOLEAN,value:true}}},enableTapDraggingPref:{type:Object,value(){return{key:"fakeEnableTapDraggingPref",type:chrome.settingsPrivate.PrefType.BOOLEAN,value:false}}},accelerationPref:{type:Object,value(){return{key:"fakeAccelerationPref",type:chrome.settingsPrivate.PrefType.BOOLEAN,value:true}}},sensitivityPref:{type:Object,value(){return{key:"fakeSensitivityPref",type:chrome.settingsPrivate.PrefType.NUMBER,value:3}}},hapticClickSensitivityPref:{type:Object,value(){return{key:"fakeHapticClickSensitivityPref",type:chrome.settingsPrivate.PrefType.NUMBER,value:3}}},simulateRightClickPref:{type:Object,value(){return{key:"fakeSimulateRightClickPref",type:chrome.settingsPrivate.PrefType.NUMBER,value:SimulateRightClickModifier.kNone}}},simulateRightClickOptions:{readOnly:true,type:Array,value(){return[{value:SimulateRightClickModifier.kNone,name:loadTimeData.getString("touchpadSimulateRightClickOptionDisabled")},{value:SimulateRightClickModifier.kSearch,name:loadTimeData.getString("touchpadSimulateRightClickOptionSearch")},{value:SimulateRightClickModifier.kAlt,name:loadTimeData.getString("touchpadSimulateRightClickOptionAlt")}]}},sensitivityValues_:{type:Array,value:[1,2,3,4,5],readOnly:true},hapticClickSensitivityValues_:{type:Array,value(){return[{value:1,ariaValue:1},{value:3,ariaValue:2},{value:5,ariaValue:3}]},readOnly:true},isRevampWayfindingEnabled_:{type:Boolean,value:()=>isRevampWayfindingEnabled()},reverseScrollValue:{type:Boolean,value:false},hapticFeedbackValue:{type:Boolean,value:true},touchpad:{type:Object},supportedSettingIds:{type:Object,value:()=>new Set([Setting.kTouchpadTapToClick,Setting.kTouchpadTapDragging,Setting.kTouchpadReverseScrolling,Setting.kTouchpadAcceleration,Setting.kTouchpadScrollAcceleration,Setting.kTouchpadSpeed,Setting.kTouchpadHapticFeedback,Setting.kTouchpadHapticClickSensitivity])},touchpadIndex:{type:Number},isLastDevice:{type:Boolean,reflectToAttribute:true},isAltClickAndSixPackCustomizationEnabled:{type:Boolean,value(){return loadTimeData.getBoolean("enableAltClickAndSixPackCustomization")},readOnly:true}}}static get observers(){return["onSettingsChanged(enableTapToClickPref.value,"+"enableTapDraggingPref.value,"+"accelerationPref.value,"+"sensitivityPref.value,"+"hapticClickSensitivityPref.value,"+"simulateRightClickPref.value,"+"reverseScrollValue,"+"hapticFeedbackValue)","updateSettingsToCurrentPrefs(touchpad)"]}currentRouteChanged(route){if(route!==routes.PER_DEVICE_TOUCHPAD){return}if(this.touchpadIndex===0){this.attemptDeepLink()}}updateSettingsToCurrentPrefs(){this.isInitialized=false;this.set("enableTapToClickPref.value",this.touchpad.settings.tapToClickEnabled);this.set("simulateRightClickPref.value",this.touchpad.settings.simulateRightClick);this.set("enableTapDraggingPref.value",this.touchpad.settings.tapDraggingEnabled);this.set("accelerationPref.value",this.touchpad.settings.accelerationEnabled);this.set("sensitivityPref.value",this.touchpad.settings.sensitivity);this.set("hapticClickSensitivityPref.value",this.touchpad.settings.hapticSensitivity);this.reverseScrollValue=this.touchpad.settings.reverseScrolling;this.hapticFeedbackValue=this.touchpad.settings.hapticEnabled;this.isInitialized=true}onLearnMoreLinkClicked_(event){const path=event.composedPath();if(!Array.isArray(path)||!path.length){return}if(path[0].tagName==="A"){event.stopPropagation()}}onTouchpadReverseScrollRowClicked_(){this.reverseScrollValue=!this.reverseScrollValue}onTouchpadHapticFeedbackRowClicked_(){this.hapticFeedbackValue=!this.hapticFeedbackValue}onSettingsChanged(){if(!this.isInitialized){return}const newSettings={...this.touchpad.settings,tapToClickEnabled:this.enableTapToClickPref.value,tapDraggingEnabled:this.enableTapDraggingPref.value,accelerationEnabled:this.accelerationPref.value,sensitivity:this.sensitivityPref.value,hapticSensitivity:this.hapticClickSensitivityPref.value,simulateRightClick:this.simulateRightClickPref.value,reverseScrolling:this.reverseScrollValue,hapticEnabled:this.hapticFeedbackValue};if(settingsAreEqual(newSettings,this.touchpad.settings)){return}this.touchpad.settings=newSettings;this.inputDeviceSettingsProvider.setTouchpadSettings(this.touchpad.id,this.touchpad.settings)}getTouchpadName(){return this.touchpad.isExternal?this.touchpad.name:this.i18n("builtInTouchpadName")}getLabelWithoutLearnMore(stringName){const tempEl=document.createElement("div");const localizedString=this.i18nAdvanced(stringName);tempEl.innerHTML=localizedString;const nodesToDelete=[];tempEl.childNodes.forEach((node=>{if(node.nodeType===Node.ELEMENT_NODE&&node.nodeName==="A"){nodesToDelete.push(node);return}}));nodesToDelete.forEach((node=>{tempEl.removeChild(node)}));return tempEl.innerHTML}getTouchpadAccelerationDescription(){if(this.isRevampWayfindingEnabled_){return this.i18n("touchpadAccelerationDescription")}return""}getTouchpadTapDraggingDescription(){if(this.isRevampWayfindingEnabled_){return this.i18n("tapDraggingDescription")}return""}getTouchpadTapToClickDescription(){if(this.isRevampWayfindingEnabled_){return this.i18n("touchpadTapToClickDescription")}return""}}customElements.define(SettingsPerDeviceTouchpadSubsectionElement.is,SettingsPerDeviceTouchpadSubsectionElement);function getTemplate$1(){return html`<!--_html_template_start_--><style include="settings-shared">:host{--cr-dialog-width:320px}[slot=button-container]{display:flex;justify-content:flex-end;margin:40px 0 20px 0;padding-bottom:0;padding-top:0}</style>
<cr-dialog id="dialog" show-on-attach>
  <div slot="body">
    [[getRemoveDeviceDialogBodyText_()]]
  </div>
  <div slot="button-container">
    <cr-button id="cancel" class="cancel-button" on-click="onCancelClick_">
      $i18n{savedDevicesDialogCancel}
    </cr-button>
    <cr-button id="remove" class="action-button" on-click="onRemoveClick_" aria-label="[[getRemoveDeviceDialogBodyText_()]]" autofocus>
      $i18n{savedDevicesDialogRemove}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsBluetoothRemoveSavedDeviceDialogElementBase=WebUiListenerMixin(I18nMixin(PolymerElement));class SettingsBluetoothRemoveSavedDeviceDialogElement extends SettingsBluetoothRemoveSavedDeviceDialogElementBase{static get is(){return"os-settings-bluetooth-remove-saved-device-dialog"}static get template(){return getTemplate$1()}static get properties(){return{device_:{type:Object}}}getRemoveDeviceDialogBodyText_(){return this.i18n("savedDevicesDialogLabel",this.device_.name,loadTimeData.getString("primaryUserEmail"))}onRemoveClick_(event){recordSavedDevicesUiEventMetrics(FastPairSavedDevicesUiEvent.SETTINGS_SAVED_DEVICE_LIST_REMOVE);const fireEvent=new CustomEvent("remove-saved-device",{bubbles:true,composed:true,detail:{key:this.device_.accountKey}});this.dispatchEvent(fireEvent);this.$.dialog.close();event.preventDefault();event.stopPropagation()}onCancelClick_(){this.$.dialog.close()}}customElements.define(SettingsBluetoothRemoveSavedDeviceDialogElement.is,SettingsBluetoothRemoveSavedDeviceDialogElement);function getTemplate(){return html`<!--_html_template_start_--><style include="settings-shared">:host{--cr-dialog-width:320px}[slot=button-container]{display:flex;justify-content:flex-end;margin:40px 0 20px 0;padding-bottom:0;padding-top:0}</style>
<cr-dialog id="dialog" show-on-attach>
  <div id="title" slot="title">
    $i18n{bluetoothDevicesDialogTitle}
  </div>
  <div slot="body">
    [[getForgetDeviceDialogBodyText_()]]
  </div>
  <div slot="button-container">
    <cr-button id="cancel" class="cancel-button" on-click="onCancelClick_">
      $i18n{bluetoothDevicesDialogCancel}
    </cr-button>
    <cr-button id="forget" class="action-button" on-click="onForgetClick_">
      $i18n{bluetoothDevicesDialogForget}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsBluetoothForgetDeviceDialogElementBase=I18nMixin(PolymerElement);class SettingsBluetoothForgetDeviceDialogElement extends SettingsBluetoothForgetDeviceDialogElementBase{static get is(){return"os-settings-bluetooth-forget-device-dialog"}static get template(){return getTemplate()}static get properties(){return{device_:{type:Object}}}getForgetDeviceDialogBodyText_(){return this.i18n("bluetoothDevicesDialogLabel",this.getDeviceName_(),loadTimeData.getString("primaryUserEmail"))}getDeviceName_(){return getDeviceName(this.device_)}onForgetClick_(event){const fireEvent=new CustomEvent("forget-bluetooth-device",{bubbles:true,composed:true});this.dispatchEvent(fireEvent);this.$.dialog.close();event.stopPropagation()}onCancelClick_(){this.$.dialog.close()}}customElements.define(SettingsBluetoothForgetDeviceDialogElement.is,SettingsBluetoothForgetDeviceDialogElement);
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
window.addEventListener("load",(()=>{ColorChangeUpdater.forDocument().start()}));export{AboutPageBrowserProxyImpl,AccountManagerSettingsCardElement,AdditionalAccountsSettingsCardElement,AndroidAppsBrowserProxyImpl,CrDrawerElement,CrLinkRowElement,CrToolbarSearchFieldElement,DevicePageBrowserProxyImpl,DisplayLayoutElement,EsimRenameDialogElement,FakeInputDeviceSettingsProvider,Fkey,FkeyRowElement,GeolocationAccessLevel,HotspotConfigDialogElement,HotspotSummaryItemElement,InternetConfigElement,InternetPageBrowserProxyImpl,KeyboardRemapModifierKeyRowElement,KeyboardSixPackKeyRowElement,MainPageContainerElement,ManagedFootnoteElement,MetaKey,ModifierKey,MultiDeviceBrowserProxyImpl,MultiDeviceFeature,MultiDeviceFeatureState,MultiDeviceSettingsMode,MultitaskingSettingsCardElement,NearbyShareSettingsMixin,NetworkSummaryElement,NetworkSummaryItemElement,NotificationAccessSetupOperationStatus,OpenWindowProxyImpl,OsA11yPageBrowserProxyImpl,OsBluetoothDevicesSubpageBrowserProxyImpl,OsSettingsA11yPageElement,OsSettingsCellularSetupDialogElement,OsSettingsHatsBrowserProxyImpl,OsSettingsMainElement,OsSettingsMenuElement,OsSettingsMenuItemElement,OsSettingsPeoplePageElement,OsSettingsPrivacyPageElement,OsSettingsSearchBoxBrowserProxyImpl,OsSettingsSearchBoxElement,OsSettingsSearchPageElement,OsSettingsUiElement,OsToolbarElement,PageDisplayerElement,ParentalControlsBrowserProxyImpl,ParentalControlsSettingsCardElement,PeripheralDataAccessBrowserProxyImpl,PermissionsSetupStatus,PersonalizationHubBrowserProxyImpl,PhoneHubFeatureAccessStatus,PhoneHubPermissionsSetupAction,PhoneHubPermissionsSetupFeatureCombination,PhoneHubPermissionsSetupFlowScreens,PolicyStatus,ProfileInfoBrowserProxyImpl,Router,SearchAndAssistantSettingsCardElement,SettingsAudioElement,SettingsBluetoothPageElement,SettingsBluetoothPairingDialogElement,SettingsBluetoothSummaryElement,SettingsDevicePageElement,SettingsDisplayElement,SettingsGraphicsTabletSubpageElement,SettingsIdleLoadElement,SettingsInternetDetailMenuElement,SettingsKerberosPageElement,SettingsMultideviceNotificationAccessSetupDialogElement,SettingsMultidevicePageElement,SettingsMultidevicePermissionsSetupDialogElement,SettingsParentalControlsPageElement,SettingsPerDeviceKeyboardElement,SettingsPerDeviceKeyboardRemapKeysElement,SettingsPerDeviceKeyboardSubsectionElement,SettingsPerDeviceMouseElement,SettingsPerDeviceMouseSubsectionElement,SettingsPerDevicePointingStickElement,SettingsPerDevicePointingStickSubsectionElement,SettingsPerDeviceTouchpadElement,SettingsPerDeviceTouchpadSubsectionElement,SettingsPersonalizationPageElement,SettingsSchedulerSliderElement,SettingsSystemPreferencesPageElement,SetupFlowStatus,SimulateRightClickModifier,SixPackKey,SixPackShortcutModifier,StartupSettingsCardElement,StorageAndPowerSettingsCardElement,SyncBrowserProxyImpl,TopRowActionKey,WiFiSecurityType,createPageAvailability as createPageAvailabilityForTesting,cros_audio_config_mojomWebui as crosAudioConfigMojom,display_settings_provider_mojomWebui as displaySettingsProviderMojom,ensureLazyLoaded,fake_cros_audio_config as fakeCrosAudioConfig,getDisplaySettingsProvider,getInputDeviceSettingsProvider,getNearbyShareSettings,getPersonalizationSearchHandler,getSettingsSearchHandler,observeNearbyShareSettings,personalization_search_mojomWebui as personalizationSearchMojom,recordClick,recordNavigation,recordPageBlur,recordPageFocus,recordSearch,recordSettingChange,routes,routesMojom,search_mojomWebui as searchMojom,search_result_icon_mojomWebui as searchResultIconMojom,setCrosAudioConfigForTesting,setDisplaySettingsProviderForTesting,setGlobalScrollTarget as setGlobalScrollTargetForTesting,setPersonalizationSearchHandlerForTesting,setSettingsSearchHandlerForTesting,sixPackKeyProperties};