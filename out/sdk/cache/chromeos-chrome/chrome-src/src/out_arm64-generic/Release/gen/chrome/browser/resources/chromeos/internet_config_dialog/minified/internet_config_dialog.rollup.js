import{html,Polymer,Base,dom,dedupingMixin,PolymerElement,flush}from"chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js";import{css,html as html$1,nothing,CrLitElement}from"chrome://resources/lit/v3_0/lit.rollup.js";import{ActivationStateType,InhibitReason,SecurityType,VpnType,ProxyMode,AuthenticationType,MatchType,HiddenSsidMode,SubjectAltName_Type,CrosNetworkConfig,CrosNetworkConfigObserverReceiver,CertificateType,StartConnectResult,ConfigProperties}from"chrome://resources/mojo/chromeos/services/network_config/public/mojom/cros_network_config.mojom-webui.js";import{PortalState,ConnectionStateType,DeviceStateType,NetworkType,OncSource,PolicySource,IPConfigType}from"chrome://resources/mojo/chromeos/services/network_config/public/mojom/network_types.mojom-webui.js";import{loadTimeData}from"chrome://resources/ash/common/load_time_data.m.js";import"chrome://resources/mojo/services/network/public/mojom/ip_address.mojom-webui.js";import{HotspotState}from"chrome://resources/ash/common/hotspot/cros_hotspot_config.mojom-webui.js";import"./strings.m.js";import{mojo}from"chrome://resources/mojo/mojo/public/js/bindings.js";import{loadTimeData as loadTimeData$1}from"chrome://resources/js/load_time_data.js";
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const template$6=html`
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
`;template$6.setAttribute("style","display: none;");document.head.appendChild(template$6.content);const template$5=html`
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
`;document.head.appendChild(template$5.content);const styleMod$8=document.createElement("dom-module");styleMod$8.appendChild(html`
  <template>
    <style>
[is=action-link]{cursor:pointer;display:inline-block;text-decoration:underline}[is=action-link],[is=action-link]:active,[is=action-link]:hover,[is=action-link]:visited{color:var(--cr-link-color)}[is=action-link][disabled]{color:var(--paper-grey-600);cursor:default;opacity:.65;pointer-events:none}[is=action-link].no-outline{outline:0}
    </style>
  </template>
`.content);styleMod$8.register("action-link");
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
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PaperRippleMixin=dedupingMixin((superClass=>{class PaperRippleMixin extends superClass{static get properties(){return{noink:{type:Boolean,observer:"_noinkChanged"},_rippleContainer:{type:Object}}}_buttonStateChanged(){if(this.focused){this.ensureRipple()}}_downHandler(event){IronButtonStateImpl._downHandler.call(this,event);if(this.pressed){this.ensureRipple(event)}}ensureRipple(optTriggeringEvent){if(!this.hasRipple()){this._ripple=this._createRipple();this._ripple.noink=this.noink;var rippleContainer=this._rippleContainer||this.root;if(rippleContainer){dom(rippleContainer).appendChild(this._ripple)}if(optTriggeringEvent){var domContainer=dom(this._rippleContainer||this);var target=dom(optTriggeringEvent).rootTarget;if(domContainer.deepContains(target)){this._ripple.uiDownAction(optTriggeringEvent)}}}}getRipple(){this.ensureRipple();return this._ripple}hasRipple(){return Boolean(this._ripple)}_createRipple(){var element=document.createElement("paper-ripple");return element}_noinkChanged(noink){if(this.hasRipple()){this._ripple.noink=noink}}}return PaperRippleMixin}));function getTemplate$d(){return html`<!--_html_template_start_-->    <style>:host{--cr-icon-button-fill-color:var(--google-grey-700);--cr-icon-button-icon-start-offset:0;--cr-icon-button-icon-size:20px;--cr-icon-button-size:36px;--cr-icon-button-height:var(--cr-icon-button-size);--cr-icon-button-transition:150ms ease-in-out;--cr-icon-button-width:var(--cr-icon-button-size);-webkit-tap-highlight-color:transparent;border-radius:50%;color:var(--cr-icon-button-stroke-color,var(--cr-icon-button-fill-color));cursor:pointer;display:inline-flex;flex-shrink:0;height:var(--cr-icon-button-height);margin-inline-end:var(--cr-icon-button-margin-end,var(--cr-icon-ripple-margin));margin-inline-start:var(--cr-icon-button-margin-start);outline:0;overflow:hidden;user-select:none;vertical-align:middle;width:var(--cr-icon-button-width)}:host-context([chrome-refresh-2023]):host{--cr-icon-button-fill-color:currentColor;--cr-icon-button-size:32px;position:relative}:host(:hover){background-color:var(--cr-icon-button-hover-background-color,var(--cr-hover-background-color))}:host(:focus-visible:focus){box-shadow:inset 0 0 0 2px var(--cr-icon-button-focus-outline-color,var(--cr-focus-outline-color))}@media (forced-colors:active){:host(:focus-visible:focus){outline:var(--cr-focus-outline-hcm)}}:host-context(html:not([chrome-refresh-2023])) :host(:active){background-color:var(--cr-icon-button-active-background-color,var(--cr-active-background-color))}paper-ripple{display:none}:host-context([chrome-refresh-2023]) paper-ripple{--paper-ripple-opacity:1;color:var(--cr-active-background-color);display:block}:host([disabled]){cursor:initial;opacity:var(--cr-disabled-opacity);pointer-events:none}:host(.no-overlap){--cr-icon-button-margin-end:0;--cr-icon-button-margin-start:0}:host-context([dir=rtl]):host(:not([dir=ltr]):not([multiple-icons_])){transform:scaleX(-1)}:host-context([dir=rtl]):host(:not([dir=ltr])[multiple-icons_]) iron-icon{transform:scaleX(-1)}:host(:not([iron-icon])) #maskedImage{-webkit-mask-image:var(--cr-icon-image);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--cr-icon-button-icon-size);-webkit-transform:var(--cr-icon-image-transform,none);background-color:var(--cr-icon-button-fill-color);height:100%;transition:background-color var(--cr-icon-button-transition);width:100%}@media (forced-colors:active){:host(:not([iron-icon])) #maskedImage{background-color:ButtonText}}#icon{align-items:center;border-radius:4px;display:flex;height:100%;justify-content:center;padding-inline-start:var(--cr-icon-button-icon-start-offset);position:relative;width:100%}iron-icon{--iron-icon-fill-color:var(--cr-icon-button-fill-color);--iron-icon-stroke-color:var(--cr-icon-button-stroke-color, none);--iron-icon-height:var(--cr-icon-button-icon-size);--iron-icon-width:var(--cr-icon-button-icon-size);transition:fill var(--cr-icon-button-transition),stroke var(--cr-icon-button-transition)}@media (prefers-color-scheme:dark){:host{--cr-icon-button-fill-color:var(--google-grey-500)}}</style>
    <div id="icon">
      <div id="maskedImage"></div>
    </div>
<!--_html_template_end_-->`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrIconbuttonElementBase=PaperRippleMixin(PolymerElement);class CrIconButtonElement extends CrIconbuttonElementBase{static get is(){return"cr-icon-button"}static get template(){return getTemplate$d()}static get properties(){return{disabled:{type:Boolean,value:false,reflectToAttribute:true,observer:"disabledChanged_"},customTabIndex:{type:Number,observer:"applyTabIndex_"},ironIcon:{type:String,observer:"onIronIconChanged_",reflectToAttribute:true},multipleIcons_:{type:Boolean,reflectToAttribute:true}}}constructor(){super();this.spaceKeyDown_=false;this.addEventListener("blur",this.onBlur_.bind(this));this.addEventListener("click",this.onClick_.bind(this));this.addEventListener("keydown",this.onKeyDown_.bind(this));this.addEventListener("keyup",this.onKeyUp_.bind(this));if(document.documentElement.hasAttribute("chrome-refresh-2023")){this.addEventListener("pointerdown",this.onPointerDown_.bind(this))}}ready(){super.ready();this.setAttribute("aria-disabled",this.disabled?"true":"false");if(!this.hasAttribute("role")){this.setAttribute("role","button")}if(!this.hasAttribute("tabindex")){this.setAttribute("tabindex","0")}}toggleClass(className){this.classList.toggle(className)}disabledChanged_(newValue,oldValue){if(!newValue&&oldValue===undefined){return}if(this.disabled){this.blur()}this.setAttribute("aria-disabled",this.disabled?"true":"false");this.applyTabIndex_()}applyTabIndex_(){let value=this.customTabIndex;if(value===undefined){value=this.disabled?-1:0}this.setAttribute("tabindex",value.toString())}onBlur_(){this.spaceKeyDown_=false}onClick_(e){if(this.disabled){e.stopImmediatePropagation()}}onIronIconChanged_(){this.shadowRoot.querySelectorAll("iron-icon").forEach((el=>el.remove()));if(!this.ironIcon){return}const icons=(this.ironIcon||"").split(",");this.multipleIcons_=icons.length>1;icons.forEach((icon=>{const ironIcon=document.createElement("iron-icon");ironIcon.icon=icon;this.$.icon.appendChild(ironIcon);if(ironIcon.shadowRoot){ironIcon.shadowRoot.querySelectorAll("svg, img").forEach((child=>child.setAttribute("role","none")))}}))}onKeyDown_(e){if(e.key!==" "&&e.key!=="Enter"){return}e.preventDefault();e.stopPropagation();if(e.repeat){return}if(e.key==="Enter"){this.click()}else if(e.key===" "){this.spaceKeyDown_=true}}onKeyUp_(e){if(e.key===" "||e.key==="Enter"){e.preventDefault();e.stopPropagation()}if(this.spaceKeyDown_&&e.key===" "){this.spaceKeyDown_=false;this.click()}}onPointerDown_(){this.ensureRipple()}}customElements.define(CrIconButtonElement.is,CrIconButtonElement);
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function assert$1(value,message){if(value){return}throw new Error("Assertion failed"+(message?`: ${message}`:""))}function assertNotReached$1(message="Unreachable code hit"){assert$1(false,message)}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var CrContainerShadowSide;(function(CrContainerShadowSide){CrContainerShadowSide["TOP"]="top";CrContainerShadowSide["BOTTOM"]="bottom"})(CrContainerShadowSide||(CrContainerShadowSide={}));const CrContainerShadowMixinLit=superClass=>{class CrContainerShadowMixinLit extends superClass{constructor(){super(...arguments);this.intersectionObserver_=null;this.dropShadows_=new Map;this.intersectionProbes_=new Map;this.sides_=null}connectedCallback(){super.connectedCallback();const hasBottomShadow=this.getContainer_().hasAttribute("show-bottom-shadow");this.sides_=hasBottomShadow?[CrContainerShadowSide.TOP,CrContainerShadowSide.BOTTOM]:[CrContainerShadowSide.TOP];this.sides_.forEach((side=>{const shadow=document.createElement("div");shadow.id=`cr-container-shadow-${side}`;shadow.classList.add("cr-container-shadow");this.dropShadows_.set(side,shadow);this.intersectionProbes_.set(side,document.createElement("div"))}));this.getContainer_().parentNode.insertBefore(this.dropShadows_.get(CrContainerShadowSide.TOP),this.getContainer_());this.getContainer_().prepend(this.intersectionProbes_.get(CrContainerShadowSide.TOP));if(hasBottomShadow){this.getContainer_().parentNode.insertBefore(this.dropShadows_.get(CrContainerShadowSide.BOTTOM),this.getContainer_().nextSibling);this.getContainer_().append(this.intersectionProbes_.get(CrContainerShadowSide.BOTTOM))}this.enableShadowBehavior(true)}disconnectedCallback(){super.disconnectedCallback();this.enableShadowBehavior(false)}getContainer_(){return this.shadowRoot.querySelector("#container")}getIntersectionObserver_(){const callback=entries=>{for(const entry of entries){const target=entry.target;this.sides_.forEach((side=>{if(target===this.intersectionProbes_.get(side)){this.dropShadows_.get(side).classList.toggle("has-shadow",entry.intersectionRatio===0)}}))}};return new IntersectionObserver(callback,{root:this.getContainer_(),threshold:0})}enableShadowBehavior(enable){if(enable===!!this.intersectionObserver_){return}if(!enable){this.intersectionObserver_.disconnect();this.intersectionObserver_=null;return}this.intersectionObserver_=this.getIntersectionObserver_();window.setTimeout((()=>{if(this.intersectionObserver_){this.intersectionProbes_.forEach((probe=>{this.intersectionObserver_.observe(probe)}))}}))}showDropShadows(){assert$1(!this.intersectionObserver_);assert$1(this.sides_);for(const side of this.sides_){this.dropShadows_.get(side).classList.toggle("has-shadow",true)}}}return CrContainerShadowMixinLit};function getCss$2(){return css`:host([hidden]),[hidden]{display:none!important}`}function getCss$1(){return css`.icon-arrow-back{--cr-icon-image:url(chrome://resources/images/icon_arrow_back.svg)}.icon-arrow-dropdown{--cr-icon-image:url(chrome://resources/images/icon_arrow_dropdown.svg)}.icon-arrow-drop-down-cr23{--cr-icon-image:url(chrome://resources/images/icon_arrow_drop_down_cr23.svg)}.icon-arrow-drop-up-cr23{--cr-icon-image:url(chrome://resources/images/icon_arrow_drop_up_cr23.svg)}.icon-cancel{--cr-icon-image:url(chrome://resources/images/icon_cancel.svg)}.icon-clear{--cr-icon-image:url(chrome://resources/images/icon_clear.svg)}.icon-copy-content{--cr-icon-image:url(chrome://resources/images/icon_copy_content.svg)}.icon-delete-gray{--cr-icon-image:url(chrome://resources/images/icon_delete_gray.svg)}.icon-edit{--cr-icon-image:url(chrome://resources/images/icon_edit.svg)}.icon-file{--cr-icon-image:url(chrome://resources/images/icon_filetype_generic.svg)}.icon-folder-open{--cr-icon-image:url(chrome://resources/images/icon_folder_open.svg)}.icon-picture-delete{--cr-icon-image:url(chrome://resources/images/icon_picture_delete.svg)}.icon-expand-less{--cr-icon-image:url(chrome://resources/images/icon_expand_less.svg)}.icon-expand-more{--cr-icon-image:url(chrome://resources/images/icon_expand_more.svg)}.icon-external{--cr-icon-image:url(chrome://resources/images/open_in_new.svg)}.icon-more-vert{--cr-icon-image:url(chrome://resources/images/icon_more_vert.svg)}.icon-refresh{--cr-icon-image:url(chrome://resources/images/icon_refresh.svg)}.icon-search{--cr-icon-image:url(chrome://resources/images/icon_search.svg)}.icon-settings{--cr-icon-image:url(chrome://resources/images/icon_settings.svg)}.icon-visibility{--cr-icon-image:url(chrome://resources/images/icon_visibility.svg)}.icon-visibility-off{--cr-icon-image:url(chrome://resources/images/icon_visibility_off.svg)}.subpage-arrow{--cr-icon-image:url(chrome://resources/images/arrow_right.svg)}.cr-icon{-webkit-mask-image:var(--cr-icon-image);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--cr-icon-size);background-color:var(--cr-icon-color,var(--google-grey-700));flex-shrink:0;height:var(--cr-icon-ripple-size);margin-inline-end:var(--cr-icon-ripple-margin);margin-inline-start:var(--cr-icon-button-margin-start);user-select:none;width:var(--cr-icon-ripple-size)}:host-context([dir=rtl]) .cr-icon{transform:scaleX(-1)}.cr-icon.no-overlap{margin-inline-end:0;margin-inline-start:0}@media (prefers-color-scheme:dark){.cr-icon{background-color:var(--cr-icon-color,var(--google-grey-500))}}`}function getCss(){return css`dialog{--scroll-border-color:var(--paper-grey-300);--scroll-border:1px solid var(--scroll-border-color);background-color:var(--cr-dialog-background-color,#fff);border:0;border-radius:var(--cr-dialog-border-radius,8px);bottom:50%;box-shadow:0 0 16px rgba(0,0,0,.12),0 16px 16px rgba(0,0,0,.24);color:inherit;max-height:initial;max-width:initial;overflow-y:hidden;padding:0;position:absolute;top:50%;width:var(--cr-dialog-width,512px)}@media (prefers-color-scheme:dark){dialog{--scroll-border-color:var(--google-grey-700);background-color:var(--cr-dialog-background-color,var(--google-grey-900));background-image:linear-gradient(rgba(255,255,255,.04),rgba(255,255,255,.04))}}@media (forced-colors:active){dialog{border:var(--cr-border-hcm)}}dialog[open] #content-wrapper{display:flex;flex-direction:column;max-height:100vh;overflow:auto}.top-container,:host ::slotted([slot=button-container]),:host ::slotted([slot=footer]){flex-shrink:0}dialog::backdrop{background-color:rgba(0,0,0,.6);bottom:0;left:0;position:fixed;right:0;top:0}:host ::slotted([slot=body]){color:var(--cr-secondary-text-color);padding:0 var(--cr-dialog-body-padding-horizontal,20px)}:host ::slotted([slot=title]){color:var(--cr-primary-text-color);flex:1;font-family:var(--cr-dialog-font-family,inherit);font-size:var(--cr-dialog-title-font-size,calc(15 / 13 * 100%));line-height:1;padding-bottom:var(--cr-dialog-title-slot-padding-bottom,16px);padding-inline-end:var(--cr-dialog-title-slot-padding-end,20px);padding-inline-start:var(--cr-dialog-title-slot-padding-start,20px);padding-top:var(--cr-dialog-title-slot-padding-top,20px)}:host ::slotted([slot=button-container]){display:flex;justify-content:flex-end;padding-bottom:var(--cr-dialog-button-container-padding-bottom,16px);padding-inline-end:var(--cr-dialog-button-container-padding-horizontal,16px);padding-inline-start:var(--cr-dialog-button-container-padding-horizontal,16px);padding-top:var(--cr-dialog-button-container-padding-top,16px)}:host ::slotted([slot=footer]){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;border-top:1px solid #dbdbdb;margin:0;padding:16px 20px}:host([hide-backdrop]) dialog::backdrop{opacity:0}@media (prefers-color-scheme:dark){:host ::slotted([slot=footer]){border-top-color:var(--cr-separator-color)}}.body-container{box-sizing:border-box;display:flex;flex-direction:column;min-height:1.375rem;overflow:auto}:host{--transparent-border:1px solid transparent}#cr-container-shadow-top{border-bottom:var(--cr-dialog-body-border-top,var(--transparent-border))}#cr-container-shadow-bottom{border-bottom:var(--cr-dialog-body-border-bottom,var(--transparent-border))}#cr-container-shadow-bottom.has-shadow,#cr-container-shadow-top.has-shadow{border-bottom:var(--scroll-border)}.top-container{align-items:flex-start;display:flex;min-height:var(--cr-dialog-top-container-min-height,31px)}.title-container{display:flex;flex:1;font-size:inherit;font-weight:inherit;margin:0;outline:0}#close{align-self:flex-start;margin-inline-end:4px;margin-top:4px}`}function getHtml(){return html$1`<!--_html_template_start_-->
<dialog id="dialog" @close="${this.onNativeDialogClose_}" @cancel="${this.onNativeDialogCancel_}" part="dialog" aria-labelledby="title" aria-description="${this.ariaDescriptionText||nothing}">

  <div id="content-wrapper" part="wrapper">
    <div class="top-container">
      <h2 id="title" class="title-container" tabindex="-1">
        <slot name="title"></slot>
      </h2>
      <cr-icon-button id="close" class="icon-clear" ?hidden="${!this.showCloseButton}" aria-label="${this.closeText||nothing}" @click="${this.cancel}" @keypress="${this.onCloseKeypress_}">
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
const CrDialogElementBase=CrContainerShadowMixinLit(CrLitElement);class CrDialogElement extends CrDialogElementBase{constructor(){super(...arguments);this.consumeKeydownEvent=false;this.ignoreEnterKey=false;this.ignorePopstate=false;this.noCancel=false;this.open=false;this.showCloseButton=false;this.showOnAttach=false;this.intersectionObserver_=null;this.mutationObserver_=null;this.boundKeydown_=null}static get is(){return"cr-dialog"}static get styles(){return[getCss$2(),getCss$1(),getCss()]}render(){return getHtml.bind(this)()}static get properties(){return{open:{type:Boolean,reflect:true},closeText:{type:String},ignorePopstate:{type:Boolean},ignoreEnterKey:{type:Boolean},consumeKeydownEvent:{type:Boolean},noCancel:{type:Boolean},showCloseButton:{type:Boolean},showOnAttach:{type:Boolean},ariaDescriptionText:{type:String}}}firstUpdated(){window.addEventListener("popstate",(()=>{if(!this.ignorePopstate&&this.$.dialog.open){this.cancel()}}));if(!this.ignoreEnterKey){this.addEventListener("keypress",this.onKeypress_.bind(this))}this.addEventListener("pointerdown",(e=>this.onPointerdown_(e)))}connectedCallback(){super.connectedCallback();const mutationObserverCallback=()=>{if(this.$.dialog.open){this.enableShadowBehavior(true);this.addKeydownListener_()}else{this.enableShadowBehavior(false);this.removeKeydownListener_()}};this.mutationObserver_=new MutationObserver(mutationObserverCallback);this.mutationObserver_.observe(this.$.dialog,{attributes:true,attributeFilter:["open"]});mutationObserverCallback();if(this.showOnAttach){this.showModal()}}disconnectedCallback(){super.disconnectedCallback();this.removeKeydownListener_();if(this.mutationObserver_){this.mutationObserver_.disconnect();this.mutationObserver_=null}}addKeydownListener_(){if(!this.consumeKeydownEvent){return}this.boundKeydown_=this.boundKeydown_||this.onKeydown_.bind(this);this.addEventListener("keydown",this.boundKeydown_);document.body.addEventListener("keydown",this.boundKeydown_)}removeKeydownListener_(){if(!this.boundKeydown_){return}this.removeEventListener("keydown",this.boundKeydown_);document.body.removeEventListener("keydown",this.boundKeydown_);this.boundKeydown_=null}async showModal(){this.$.dialog.showModal();assert$1(this.$.dialog.open);this.open=true;await this.updateComplete;this.fire("cr-dialog-open")}cancel(){this.fire("cancel");this.$.dialog.close();assert$1(!this.$.dialog.open);this.open=false}close(){this.$.dialog.close("success");assert$1(!this.$.dialog.open);this.open=false}setTitleAriaLabel(title){this.$.dialog.removeAttribute("aria-labelledby");this.$.dialog.setAttribute("aria-label",title)}onCloseKeypress_(e){e.stopPropagation()}onNativeDialogClose_(e){if(e.target!==this.getNative()){return}this.fire("close")}async onNativeDialogCancel_(e){if(e.target!==this.getNative()){return}if(this.noCancel){e.preventDefault();return}this.open=false;await this.updateComplete;this.fire("cancel")}getNative(){return this.$.dialog}onKeypress_(e){if(e.key!=="Enter"){return}const accept=e.target===this||e.composedPath().some((el=>el.tagName==="CR-INPUT"&&el.type!=="search"));if(!accept){return}const actionButton=this.querySelector(".action-button:not([disabled]):not([hidden])");if(actionButton){actionButton.click();e.preventDefault()}}onKeydown_(e){assert$1(this.consumeKeydownEvent);if(!this.getNative().open){return}if(this.ignoreEnterKey&&e.key==="Enter"){return}e.stopPropagation()}onPointerdown_(e){if(e.button!==0||e.composedPath()[0].tagName!=="DIALOG"){return}this.$.dialog.animate([{transform:"scale(1)",offset:0},{transform:"scale(1.02)",offset:.4},{transform:"scale(1.02)",offset:.6},{transform:"scale(1)",offset:1}],{duration:180,easing:"ease-in-out",iterations:1});e.preventDefault()}focus(){const titleContainer=this.shadowRoot.querySelector(".title-container");assert$1(titleContainer);titleContainer.focus()}}customElements.define(CrDialogElement.is,CrDialogElement);function getTemplate$c(){return html`<!--_html_template_start_-->    <style>:host{--cr-toggle-checked-bar-color:var(--google-blue-600);--cr-toggle-checked-button-color:var(--google-blue-600);--cr-toggle-checked-ripple-color:rgba(var(--google-blue-600-rgb), .2);--cr-toggle-ripple-diameter:40px;--cr-toggle-unchecked-bar-color:var(--google-grey-400);--cr-toggle-unchecked-button-color:white;--cr-toggle-unchecked-ripple-color:rgba(var(--google-grey-600-rgb), .15);-webkit-tap-highlight-color:transparent;cursor:pointer;display:block;min-width:34px;outline:0;position:relative;width:34px}:host-context([chrome-refresh-2023]):host{--cr-toggle-checked-bar-color:var(--color-toggle-button-track-on,
                var(--cr-fallback-color-primary));--cr-toggle-checked-button-color:var(--color-toggle-button-thumb-on,
                var(--cr-fallback-color-on-primary));--cr-toggle-unchecked-bar-color:var(--color-toggle-button-track-off,
                var(--cr-fallback-color-surface-variant));--cr-toggle-unchecked-button-color:var(--color-toggle-button-thumb-off,
                var(--cr-fallback-color-outline));--cr-toggle-disabled-opacity:1;--cr-toggle-checked-ripple-color:var(--cr-active-background-color);--cr-toggle-unchecked-ripple-color:var(--cr-active-background-color);--cr-toggle-ripple-diameter:20px;--cr-toggle-bar-border-color:var(--cr-toggle-unchecked-button-color);--cr-toggle-bar-border:1px solid var(--cr-toggle-bar-border-color);--cr-toggle-bar-width:26px;--cr-toggle-knob-diameter:8px;height:fit-content;isolation:isolate;min-width:initial;width:fit-content}@media (forced-colors:active){:host{forced-color-adjust:none}}@media (prefers-color-scheme:dark){:host{--cr-toggle-checked-bar-color:var(--google-blue-300);--cr-toggle-checked-button-color:var(--google-blue-300);--cr-toggle-checked-ripple-color:rgba(var(--google-blue-300-rgb), .4);--cr-toggle-unchecked-bar-color:var(--google-grey-500);--cr-toggle-unchecked-button-color:var(--google-grey-300);--cr-toggle-unchecked-ripple-color:rgba(var(--google-grey-300-rgb), .4)}}:host([dark]){--cr-toggle-checked-bar-color:var(--google-blue-300);--cr-toggle-checked-button-color:var(--google-blue-300);--cr-toggle-checked-ripple-color:rgba(var(--google-blue-300-rgb), .4);--cr-toggle-unchecked-bar-color:var(--google-grey-500);--cr-toggle-unchecked-button-color:var(--google-grey-300);--cr-toggle-unchecked-ripple-color:rgba(var(--google-grey-300-rgb), .4)}:host-context([chrome-refresh-2023]):host(:active){--cr-toggle-knob-diameter:10px}:host-context([chrome-refresh-2023]):host([checked]){--cr-toggle-bar-border-color:var(--cr-toggle-checked-bar-color);--cr-toggle-knob-diameter:12px}:host-context([chrome-refresh-2023]):host([checked]:active){--cr-toggle-knob-diameter:14px}:host([disabled]){cursor:initial;opacity:var(--cr-disabled-opacity);pointer-events:none}:host-context([chrome-refresh-2023]):host([disabled]){--cr-toggle-checked-bar-color:var(--color-toggle-button-track-on-disabled,
                var(--cr-fallback-color-disabled-background));--cr-toggle-checked-button-color:var(--color-toggle-button-thumb-on-disabled, var(--cr-fallback-color-surface));--cr-toggle-unchecked-bar-color:transparent;--cr-toggle-unchecked-button-color:var(--color-toggle-button-thumb-off-disabled,
                var(--cr-fallback-color-disabled-foreground));--cr-toggle-bar-border-color:var(--cr-toggle-unchecked-button-color);opacity:var(--cr-toggle-disabled-opacity)}:host-context([chrome-refresh-2023]):host([checked][disabled]){--cr-toggle-bar-border:none}#bar{background-color:var(--cr-toggle-unchecked-bar-color);border-radius:8px;height:12px;left:3px;position:absolute;top:2px;transition:background-color linear 80ms;width:28px;z-index:0}:host([checked]) #bar{background-color:var(--cr-toggle-checked-bar-color);opacity:var(--cr-toggle-checked-bar-opacity,.5)}:host-context([chrome-refresh-2023]) #bar{border:var(--cr-toggle-bar-border);border-radius:50px;box-sizing:border-box;display:block;height:16px;opacity:1;position:initial;width:var(--cr-toggle-bar-width)}:host-context([chrome-refresh-2023]):host(:focus-visible) #bar{outline:2px solid var(--cr-toggle-checked-bar-color);outline-offset:2px}#knob{background-color:var(--cr-toggle-unchecked-button-color);border-radius:50%;box-shadow:var(--cr-toggle-box-shadow,0 1px 3px 0 rgba(0,0,0,.4));display:block;height:16px;position:relative;transition:transform linear 80ms,background-color linear 80ms;width:16px;z-index:1}:host([checked]) #knob{background-color:var(--cr-toggle-checked-button-color);transform:translate3d(18px,0,0)}:host-context([dir=rtl]):host([checked]) #knob{transform:translate3d(-18px,0,0)}:host-context([chrome-refresh-2023]) #knob{--cr-toggle-knob-center-edge-distance_:8px;--cr-toggle-knob-direction_:1;--cr-toggle-knob-travel-distance_:calc(
            0.5 * var(--cr-toggle-bar-width) -
            var(--cr-toggle-knob-center-edge-distance_));--cr-toggle-knob-position-center_:calc(
            0.5 * var(--cr-toggle-bar-width) + -50%);--cr-toggle-knob-position-start_:calc(
            var(--cr-toggle-knob-position-center_) -
            var(--cr-toggle-knob-direction_) *
            var(--cr-toggle-knob-travel-distance_));--cr-toggle-knob-position-end_:calc(
            var(--cr-toggle-knob-position-center_) +
            var(--cr-toggle-knob-direction_) *
            var(--cr-toggle-knob-travel-distance_));box-shadow:none;height:var(--cr-toggle-knob-diameter);position:absolute;top:50%;transform:translate(var(--cr-toggle-knob-position-start_),-50%);transition:transform linear 80ms,background-color linear 80ms,width linear 80ms,height linear 80ms;width:var(--cr-toggle-knob-diameter)}:host-context([dir=rtl][chrome-refresh-2023]) #knob{left:0;--cr-toggle-knob-direction_:-1}:host-context([chrome-refresh-2023]):host([checked]) #knob{transform:translate(var(--cr-toggle-knob-position-end_),-50%)}:host-context([chrome-refresh-2023]):host([checked]:active) #knob,:host-context([chrome-refresh-2023]):host([checked]:hover) #knob{--cr-toggle-checked-button-color:var(--color-toggle-button-thumb-on-hover,
                var(--cr-fallback-color-primary-container))}:host-context([chrome-refresh-2023]):host(:hover) #knob::before{background-color:var(--cr-hover-background-color);border-radius:50%;content:'';height:var(--cr-toggle-ripple-diameter);left:calc(var(--cr-toggle-knob-diameter)/ 2);position:absolute;top:calc(var(--cr-toggle-knob-diameter)/ 2);transform:translate(-50%,-50%);width:var(--cr-toggle-ripple-diameter)}paper-ripple{--paper-ripple-opacity:1;color:var(--cr-toggle-unchecked-ripple-color);height:var(--cr-toggle-ripple-diameter);left:50%;outline:var(--cr-toggle-ripple-ring,none);pointer-events:none;position:absolute;top:50%;transform:translate(-50%,-50%);transition:color linear 80ms;width:var(--cr-toggle-ripple-diameter)}:host([checked]) paper-ripple{color:var(--cr-toggle-checked-ripple-color)}:host-context([dir=rtl]) paper-ripple{left:auto;right:50%;transform:translate(50%,-50%)}</style>
    <span id="bar"></span>
    <span id="knob"></span>
<!--_html_template_end_-->`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const MOVE_THRESHOLD_PX=5;const CrToggleElementBase=PaperRippleMixin(PolymerElement);class CrToggleElement extends CrToggleElementBase{constructor(){super(...arguments);this.boundPointerMove_=null;this.handledInPointerMove_=false;this.pointerDownX_=0}static get is(){return"cr-toggle"}static get template(){return getTemplate$c()}static get properties(){return{checked:{type:Boolean,value:false,reflectToAttribute:true,observer:"checkedChanged_",notify:true},dark:{type:Boolean,value:false,reflectToAttribute:true},disabled:{type:Boolean,value:false,reflectToAttribute:true,observer:"disabledChanged_"}}}ready(){super.ready();if(!this.hasAttribute("role")){this.setAttribute("role","button")}if(!this.hasAttribute("tabindex")){this.setAttribute("tabindex","0")}this.setAttribute("aria-pressed",this.checked?"true":"false");this.setAttribute("aria-disabled",this.disabled?"true":"false");if(!document.documentElement.hasAttribute("chrome-refresh-2023")){this.addEventListener("blur",this.hideRipple_.bind(this));this.addEventListener("focus",this.onFocus_.bind(this))}this.addEventListener("click",this.onClick_.bind(this));this.addEventListener("keydown",this.onKeyDown_.bind(this));this.addEventListener("keyup",this.onKeyUp_.bind(this));this.addEventListener("pointerdown",this.onPointerDown_.bind(this));this.addEventListener("pointerup",this.onPointerUp_.bind(this))}connectedCallback(){super.connectedCallback();const direction=this.matches(":host-context([dir=rtl]) cr-toggle")?-1:1;this.boundPointerMove_=e=>{e.preventDefault();const diff=e.clientX-this.pointerDownX_;if(Math.abs(diff)<MOVE_THRESHOLD_PX){return}this.handledInPointerMove_=true;const shouldToggle=diff*direction<0&&this.checked||diff*direction>0&&!this.checked;if(shouldToggle){this.toggleState_(false)}}}checkedChanged_(){this.setAttribute("aria-pressed",this.checked?"true":"false")}disabledChanged_(){this.setAttribute("tabindex",this.disabled?"-1":"0");this.setAttribute("aria-disabled",this.disabled?"true":"false")}onFocus_(){this.getRipple().showAndHoldDown()}hideRipple_(){this.getRipple().clear()}onPointerUp_(){assert$1(this.boundPointerMove_);this.removeEventListener("pointermove",this.boundPointerMove_);this.hideRipple_()}onPointerDown_(e){if(e.button!==0){return}this.setPointerCapture(e.pointerId);this.pointerDownX_=e.clientX;this.handledInPointerMove_=false;assert$1(this.boundPointerMove_);this.addEventListener("pointermove",this.boundPointerMove_)}onClick_(e){e.stopPropagation();e.preventDefault();if(this.handledInPointerMove_){return}this.toggleState_(false)}toggleState_(fromKeyboard){if(this.disabled){return}if(!fromKeyboard){this.hideRipple_()}this.checked=!this.checked;this.dispatchEvent(new CustomEvent("change",{bubbles:true,composed:true,detail:this.checked}))}onKeyDown_(e){if(e.key!==" "&&e.key!=="Enter"){return}e.preventDefault();e.stopPropagation();if(e.repeat){return}if(e.key==="Enter"){this.toggleState_(true)}}onKeyUp_(e){if(e.key!==" "&&e.key!=="Enter"){return}e.preventDefault();e.stopPropagation();if(e.key===" "){this.toggleState_(true)}}_createRipple(){this._rippleContainer=this.$.knob;const ripple=super._createRipple();ripple.id="ink";ripple.setAttribute("recenters","");ripple.classList.add("circle","toggle-ink");return ripple}}customElements.define(CrToggleElement.is,CrToggleElement);const styleMod$7=document.createElement("dom-module");styleMod$7.appendChild(html`
  <template>
    <style>
:host([hidden]),[hidden]{display:none!important}
    </style>
  </template>
`.content);styleMod$7.register("cr-hidden-style");
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
      <g id="password">
        <path d="M5.833 11.667c.458 0 .847-.16 1.167-.479.333-.333.5-.729.5-1.188s-.167-.847-.5-1.167a1.555 1.555 0 0 0-1.167-.5c-.458 0-.854.167-1.188.5A1.588 1.588 0 0 0 4.166 10c0 .458.16.854.479 1.188.333.319.729.479 1.188.479Zm0 3.333c-1.389 0-2.569-.486-3.542-1.458C1.319 12.569.833 11.389.833 10c0-1.389.486-2.569 1.458-3.542C3.264 5.486 4.444 5 5.833 5c.944 0 1.813.243 2.604.729a4.752 4.752 0 0 1 1.833 1.979h7.23c.458 0 .847.167 1.167.5.333.319.5.708.5 1.167v3.958c0 .458-.167.854-.5 1.188A1.588 1.588 0 0 1 17.5 15h-3.75a1.658 1.658 0 0 1-1.188-.479 1.658 1.658 0 0 1-.479-1.188v-1.042H10.27a4.59 4.59 0 0 1-1.813 2A5.1 5.1 0 0 1 5.833 15Zm3.292-4.375h4.625v2.708H15v-1.042a.592.592 0 0 1 .167-.438.623.623 0 0 1 .458-.188c.181 0 .327.063.438.188a.558.558 0 0 1 .188.438v1.042H17.5V9.375H9.125a3.312 3.312 0 0 0-1.167-1.938 3.203 3.203 0 0 0-2.125-.77 3.21 3.21 0 0 0-2.354.979C2.827 8.298 2.5 9.083 2.5 10s.327 1.702.979 2.354a3.21 3.21 0 0 0 2.354.979c.806 0 1.514-.25 2.125-.75.611-.514 1-1.167 1.167-1.958Z"></path>
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
      <g id="thumbs-down-filled">
        <path d="M6 3h10v13l-7 7-1.25-1.25a1.336 1.336 0 0 1-.29-.477 1.66 1.66 0 0 1-.108-.574v-.347L8.449 16H3c-.535 0-1-.2-1.398-.602C1.199 15 1 14.535 1 14v-2c0-.117.012-.242.04-.375.022-.133.062-.258.108-.375l3-7.05c.153-.333.403-.618.75-.848A1.957 1.957 0 0 1 6 3Zm12 13V3h4v13Zm0 0">
        </path>
      </g>
      <g id="thumbs-up">
        <path d="M18 21H7V8l7-7 1.25 1.25c.117.117.208.275.275.475.083.2.125.392.125.575v.35L14.55 8H21c.533 0 1 .2 1.4.6.4.4.6.867.6 1.4v2c0 .117-.017.242-.05.375s-.067.258-.1.375l-3 7.05c-.15.333-.4.617-.75.85-.35.233-.717.35-1.1.35Zm-9-2h9l3-7v-2h-9l1.35-5.5L9 8.85V19ZM9 8.85V19 8.85ZM7 8v2H4v9h3v2H2V8h5Z">
        </path>
      </g>
      <g id="thumbs-up-filled">
        <path d="M18 21H8V8l7-7 1.25 1.25c.117.117.21.273.29.477.073.199.108.39.108.574v.347L15.551 8H21c.535 0 1 .2 1.398.602C22.801 9 23 9.465 23 10v2c0 .117-.012.242-.04.375a1.897 1.897 0 0 1-.108.375l-3 7.05a2.037 2.037 0 0 1-.75.848A1.957 1.957 0 0 1 18 21ZM6 8v13H2V8Zm0 0">
      </path></g>
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
`;document.head.appendChild(template$4.content);const styleMod$6=document.createElement("dom-module");styleMod$6.appendChild(html`
  <template>
    <style>
.icon-arrow-back{--cr-icon-image:url(chrome://resources/images/icon_arrow_back.svg)}.icon-arrow-dropdown{--cr-icon-image:url(chrome://resources/images/icon_arrow_dropdown.svg)}.icon-arrow-drop-down-cr23{--cr-icon-image:url(chrome://resources/images/icon_arrow_drop_down_cr23.svg)}.icon-arrow-drop-up-cr23{--cr-icon-image:url(chrome://resources/images/icon_arrow_drop_up_cr23.svg)}.icon-cancel{--cr-icon-image:url(chrome://resources/images/icon_cancel.svg)}.icon-clear{--cr-icon-image:url(chrome://resources/images/icon_clear.svg)}.icon-copy-content{--cr-icon-image:url(chrome://resources/images/icon_copy_content.svg)}.icon-delete-gray{--cr-icon-image:url(chrome://resources/images/icon_delete_gray.svg)}.icon-edit{--cr-icon-image:url(chrome://resources/images/icon_edit.svg)}.icon-file{--cr-icon-image:url(chrome://resources/images/icon_filetype_generic.svg)}.icon-folder-open{--cr-icon-image:url(chrome://resources/images/icon_folder_open.svg)}.icon-picture-delete{--cr-icon-image:url(chrome://resources/images/icon_picture_delete.svg)}.icon-expand-less{--cr-icon-image:url(chrome://resources/images/icon_expand_less.svg)}.icon-expand-more{--cr-icon-image:url(chrome://resources/images/icon_expand_more.svg)}.icon-external{--cr-icon-image:url(chrome://resources/images/open_in_new.svg)}.icon-more-vert{--cr-icon-image:url(chrome://resources/images/icon_more_vert.svg)}.icon-refresh{--cr-icon-image:url(chrome://resources/images/icon_refresh.svg)}.icon-search{--cr-icon-image:url(chrome://resources/images/icon_search.svg)}.icon-settings{--cr-icon-image:url(chrome://resources/images/icon_settings.svg)}.icon-visibility{--cr-icon-image:url(chrome://resources/images/icon_visibility.svg)}.icon-visibility-off{--cr-icon-image:url(chrome://resources/images/icon_visibility_off.svg)}.subpage-arrow{--cr-icon-image:url(chrome://resources/images/arrow_right.svg)}.cr-icon{-webkit-mask-image:var(--cr-icon-image);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--cr-icon-size);background-color:var(--cr-icon-color,var(--google-grey-700));flex-shrink:0;height:var(--cr-icon-ripple-size);margin-inline-end:var(--cr-icon-ripple-margin);margin-inline-start:var(--cr-icon-button-margin-start);user-select:none;width:var(--cr-icon-ripple-size)}:host-context([dir=rtl]) .cr-icon{transform:scaleX(-1)}.cr-icon.no-overlap{margin-inline-end:0;margin-inline-start:0}@media (prefers-color-scheme:dark){.cr-icon{background-color:var(--cr-icon-color,var(--google-grey-500))}}
    </style>
  </template>
`.content);styleMod$6.register("cr-icons");const styleMod$5=document.createElement("dom-module");styleMod$5.appendChild(html`
  <template>
    <style include="cr-hidden-style cr-icons">
:host,html{--scrollable-border-color:var(--google-grey-300)}@media (prefers-color-scheme:dark){:host,html{--scrollable-border-color:var(--google-grey-700)}}[actionable]{cursor:pointer}.hr{border-top:var(--cr-separator-line)}iron-list.cr-separators>:not([first]){border-top:var(--cr-separator-line)}[scrollable]{border-color:transparent;border-style:solid;border-width:1px 0;overflow-y:auto}[scrollable].is-scrolled{border-top-color:var(--scrollable-border-color)}[scrollable].can-scroll:not(.scrolled-to-bottom){border-bottom-color:var(--scrollable-border-color)}[scrollable] iron-list>:not(.no-outline):focus,[selectable]:focus,[selectable]>:focus{background-color:var(--cr-focused-item-color);outline:0}.scroll-container{display:flex;flex-direction:column;min-height:1px}[selectable]>*{cursor:pointer}.cr-centered-card-container{box-sizing:border-box;display:block;height:inherit;margin:0 auto;max-width:var(--cr-centered-card-max-width);min-width:550px;position:relative;width:calc(100% * var(--cr-centered-card-width-percentage))}.cr-container-shadow{box-shadow:inset 0 5px 6px -3px rgba(0,0,0,.4);height:var(--cr-container-shadow-height);left:0;margin:0 0 var(--cr-container-shadow-margin);opacity:0;pointer-events:none;position:relative;right:0;top:0;transition:opacity .5s;z-index:1}#cr-container-shadow-bottom{margin-bottom:0;margin-top:var(--cr-container-shadow-margin);transform:scaleY(-1)}#cr-container-shadow-bottom.has-shadow,#cr-container-shadow-top.has-shadow{opacity:var(--cr-container-shadow-max-opacity)}.cr-row{align-items:center;border-top:var(--cr-separator-line);display:flex;min-height:var(--cr-section-min-height);padding:0 var(--cr-section-padding)}.cr-row.continuation,.cr-row.first{border-top:none}.cr-row-gap{padding-inline-start:16px}.cr-button-gap{margin-inline-start:8px}paper-tooltip::part(tooltip){border-radius:var(--paper-tooltip-border-radius,2px);font-size:92.31%;font-weight:500;max-width:330px;min-width:var(--paper-tooltip-min-width,200px);padding:var(--paper-tooltip-padding,10px 8px)}.cr-padded-text{padding-block-end:var(--cr-section-vertical-padding);padding-block-start:var(--cr-section-vertical-padding)}.cr-title-text{color:var(--cr-title-text-color);font-size:107.6923%;font-weight:500}.cr-secondary-text{color:var(--cr-secondary-text-color);font-weight:400}.cr-form-field-label{color:var(--cr-form-field-label-color);display:block;font-size:var(--cr-form-field-label-font-size);font-weight:500;letter-spacing:.4px;line-height:var(--cr-form-field-label-line-height);margin-bottom:8px}.cr-vertical-tab{align-items:center;display:flex}.cr-vertical-tab::before{border-radius:0 3px 3px 0;content:'';display:block;flex-shrink:0;height:var(--cr-vertical-tab-height,100%);width:4px}.cr-vertical-tab.selected::before{background:var(--cr-vertical-tab-selected-color,var(--cr-checked-color))}:host-context([dir=rtl]) .cr-vertical-tab::before{transform:scaleX(-1)}.iph-anchor-highlight{background-color:var(--cr-iph-anchor-highlight-color)}
    </style>
  </template>
`.content);styleMod$5.register("cr-shared-style");
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
`,is:"paper-tooltip",hostAttributes:{role:"tooltip",tabindex:-1},properties:{for:{type:String,observer:"_findTarget"},manualMode:{type:Boolean,value:false,observer:"_manualModeChanged"},position:{type:String,value:"bottom"},fitToVisibleBounds:{type:Boolean,value:false},offset:{type:Number,value:14},marginTop:{type:Number,value:14},animationDelay:{type:Number,value:500,observer:"_delayChange"},animationEntry:{type:String,value:""},animationExit:{type:String,value:""},animationConfig:{type:Object,value:function(){return{entry:[{name:"fade-in-animation",node:this,timing:{delay:0}}],exit:[{name:"fade-out-animation",node:this}]}}},_showing:{type:Boolean,value:false}},listeners:{webkitAnimationEnd:"_onAnimationEnd"},get target(){if(this._manualTarget)return this._manualTarget;var parentNode=dom(this).parentNode;var ownerRoot=dom(this).getOwnerRoot();var target;if(this.for){target=dom(ownerRoot).querySelector("#"+this.for)}else{target=parentNode.nodeType==Node.DOCUMENT_FRAGMENT_NODE?ownerRoot.host:parentNode}return target},set target(target){this._manualTarget=target;this._findTarget()},attached:function(){this._findTarget()},detached:function(){if(!this.manualMode)this._removeListeners()},playAnimation:function(type){if(type==="entry"){this.show()}else if(type==="exit"){this.hide()}},cancelAnimation:function(){this.$.tooltip.classList.add("cancel-animation")},show:function(){if(this._showing)return;if(dom(this).textContent.trim()===""){var allChildrenEmpty=true;var effectiveChildren=dom(this).getEffectiveChildNodes();for(var i=0;i<effectiveChildren.length;i++){if(effectiveChildren[i].textContent.trim()!==""){allChildrenEmpty=false;break}}if(allChildrenEmpty){return}}this._showing=true;this.$.tooltip.classList.remove("hidden");this.$.tooltip.classList.remove("cancel-animation");this.$.tooltip.classList.remove(this._getAnimationType("exit"));this.updatePosition();this._animationPlaying=true;this.$.tooltip.classList.add(this._getAnimationType("entry"))},hide:function(){if(!this._showing){return}if(this._animationPlaying){this._showing=false;this._cancelAnimation();return}else{this._onAnimationFinish()}this._showing=false;this._animationPlaying=true},updatePosition:function(){if(!this._target)return;var offsetParent=this._composedOffsetParent();if(!offsetParent)return;var offset=this.offset;if(this.marginTop!=14&&this.offset==14)offset=this.marginTop;var parentRect=offsetParent.getBoundingClientRect();var targetRect=this._target.getBoundingClientRect();var thisRect=this.getBoundingClientRect();var horizontalCenterOffset=(targetRect.width-thisRect.width)/2;var verticalCenterOffset=(targetRect.height-thisRect.height)/2;var targetLeft=targetRect.left-parentRect.left;var targetTop=targetRect.top-parentRect.top;var tooltipLeft,tooltipTop;switch(this.position){case"top":tooltipLeft=targetLeft+horizontalCenterOffset;tooltipTop=targetTop-thisRect.height-offset;break;case"bottom":tooltipLeft=targetLeft+horizontalCenterOffset;tooltipTop=targetTop+targetRect.height+offset;break;case"left":tooltipLeft=targetLeft-thisRect.width-offset;tooltipTop=targetTop+verticalCenterOffset;break;case"right":tooltipLeft=targetLeft+targetRect.width+offset;tooltipTop=targetTop+verticalCenterOffset;break}if(this.fitToVisibleBounds){if(parentRect.left+tooltipLeft+thisRect.width>window.innerWidth){this.style.right="0px";this.style.left="auto"}else{this.style.left=Math.max(0,tooltipLeft)+"px";this.style.right="auto"}if(parentRect.top+tooltipTop+thisRect.height>window.innerHeight){this.style.bottom=parentRect.height-targetTop+offset+"px";this.style.top="auto"}else{this.style.top=Math.max(-parentRect.top,tooltipTop)+"px";this.style.bottom="auto"}}else{this.style.left=tooltipLeft+"px";this.style.top=tooltipTop+"px"}},_addListeners:function(){if(this._target){this.listen(this._target,"mouseenter","show");this.listen(this._target,"focus","show");this.listen(this._target,"mouseleave","hide");this.listen(this._target,"blur","hide");this.listen(this._target,"tap","hide")}this.listen(this.$.tooltip,"animationend","_onAnimationEnd");this.listen(this,"mouseenter","hide")},_findTarget:function(){if(!this.manualMode)this._removeListeners();this._target=this.target;if(!this.manualMode)this._addListeners()},_delayChange:function(newValue){if(newValue!==500){this.updateStyles({"--paper-tooltip-delay-in":newValue+"ms"})}},_manualModeChanged:function(){if(this.manualMode)this._removeListeners();else this._addListeners()},_cancelAnimation:function(){this.$.tooltip.classList.remove(this._getAnimationType("entry"));this.$.tooltip.classList.remove(this._getAnimationType("exit"));this.$.tooltip.classList.remove("cancel-animation");this.$.tooltip.classList.add("hidden")},_onAnimationFinish:function(){if(this._showing){this.$.tooltip.classList.remove(this._getAnimationType("entry"));this.$.tooltip.classList.remove("cancel-animation");this.$.tooltip.classList.add(this._getAnimationType("exit"))}},_onAnimationEnd:function(){this._animationPlaying=false;if(!this._showing){this.$.tooltip.classList.remove(this._getAnimationType("exit"));this.$.tooltip.classList.add("hidden")}},_getAnimationType:function(type){if(type==="entry"&&this.animationEntry!==""){return this.animationEntry}if(type==="exit"&&this.animationExit!==""){return this.animationExit}if(this.animationConfig[type]&&typeof this.animationConfig[type][0].name==="string"){if(this.animationConfig[type][0].timing&&this.animationConfig[type][0].timing.delay&&this.animationConfig[type][0].timing.delay!==0){var timingDelay=this.animationConfig[type][0].timing.delay;if(type==="entry"){this.updateStyles({"--paper-tooltip-delay-in":timingDelay+"ms"})}else if(type==="exit"){this.updateStyles({"--paper-tooltip-delay-out":timingDelay+"ms"})}}return this.animationConfig[type][0].name}},_removeListeners:function(){if(this._target){this.unlisten(this._target,"mouseenter","show");this.unlisten(this._target,"focus","show");this.unlisten(this._target,"mouseleave","hide");this.unlisten(this._target,"blur","hide");this.unlisten(this._target,"tap","hide")}this.unlisten(this.$.tooltip,"animationend","_onAnimationEnd");this.unlisten(this,"mouseenter","hide")},_composedOffsetParent:function(){for(let ancestor=this;ancestor;ancestor=flatTreeParent(ancestor)){if(!(ancestor instanceof Element))continue;if(getComputedStyle(ancestor).display==="none")return null}for(let ancestor=flatTreeParent(this);ancestor;ancestor=flatTreeParent(ancestor)){if(!(ancestor instanceof Element))continue;const style=getComputedStyle(ancestor);if(style.display==="contents"){continue}if(style.position!=="static"){return ancestor}if(ancestor.tagName==="BODY")return ancestor}return null;function flatTreeParent(element){if(element.assignedSlot){return element.assignedSlot}if(element.parentNode instanceof ShadowRoot){return element.parentNode.host}return element.parentNode}}});function getTemplate$b(){return html`<!--_html_template_start_-->    <style include="cr-shared-style">:host{display:flex}iron-icon{--iron-icon-width:var(--cr-icon-size);--iron-icon-height:var(--cr-icon-size);--iron-icon-fill-color:var(--cr-tooltip-icon-fill-color, var(--google-grey-700))}@media (prefers-color-scheme:dark){iron-icon{--iron-icon-fill-color:var(--cr-tooltip-icon-fill-color, var(--google-grey-500))}}</style>
    <iron-icon id="indicator" tabindex="0" aria-label$="[[iconAriaLabel]]" aria-describedby="tooltip" icon="[[iconClass]]" role="img"></iron-icon>
    <paper-tooltip id="tooltip" for="indicator" position="[[tooltipPosition]]" fit-to-visible-bounds part="tooltip">
      <slot name="tooltip-text">[[tooltipText]]</slot>
    </paper-tooltip>
<!--_html_template_end_-->`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrTooltipIconElement extends PolymerElement{static get is(){return"cr-tooltip-icon"}static get template(){return getTemplate$b()}static get properties(){return{iconAriaLabel:String,iconClass:String,tooltipText:String,tooltipPosition:{type:String,value:"top"}}}getFocusableElement(){return this.$.indicator}}customElements.define(CrTooltipIconElement.is,CrTooltipIconElement);function getTemplate$a(){return html`<!--_html_template_start_-->    <style include="cr-hidden-style"></style>
    <cr-tooltip-icon hidden$="[[!indicatorVisible]]" tooltip-text="[[indicatorTooltip_]]" icon-class="[[indicatorIcon]]" icon-aria-label="[[iconAriaLabel]]">
    </cr-tooltip-icon>
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var CrPolicyIndicatorType$1;(function(CrPolicyIndicatorType){CrPolicyIndicatorType["DEVICE_POLICY"]="devicePolicy";CrPolicyIndicatorType["EXTENSION"]="extension";CrPolicyIndicatorType["NONE"]="none";CrPolicyIndicatorType["OWNER"]="owner";CrPolicyIndicatorType["PRIMARY_USER"]="primary_user";CrPolicyIndicatorType["RECOMMENDED"]="recommended";CrPolicyIndicatorType["USER_POLICY"]="userPolicy";CrPolicyIndicatorType["PARENT"]="parent";CrPolicyIndicatorType["CHILD_RESTRICTION"]="childRestriction"})(CrPolicyIndicatorType$1||(CrPolicyIndicatorType$1={}));const CrPolicyIndicatorMixin=dedupingMixin((superClass=>{class CrPolicyIndicatorMixin extends superClass{static get properties(){return{indicatorType:{type:String,value:CrPolicyIndicatorType$1.NONE},indicatorSourceName:{type:String,value:""},indicatorVisible:{type:Boolean,computed:"getIndicatorVisible_(indicatorType)"},indicatorIcon:{type:String,computed:"getIndicatorIcon_(indicatorType)"}}}getIndicatorVisible_(type){return type!==CrPolicyIndicatorType$1.NONE}getIndicatorIcon_(type){switch(type){case CrPolicyIndicatorType$1.EXTENSION:return"cr:extension";case CrPolicyIndicatorType$1.NONE:return"";case CrPolicyIndicatorType$1.PRIMARY_USER:return"cr:group";case CrPolicyIndicatorType$1.OWNER:return"cr:person";case CrPolicyIndicatorType$1.USER_POLICY:case CrPolicyIndicatorType$1.DEVICE_POLICY:case CrPolicyIndicatorType$1.RECOMMENDED:return"cr20:domain";case CrPolicyIndicatorType$1.PARENT:case CrPolicyIndicatorType$1.CHILD_RESTRICTION:return"cr20:kite";default:assertNotReached$1()}}getIndicatorTooltip(type,name,matches){if(!window.CrPolicyStrings){return""}const CrPolicyStrings=window.CrPolicyStrings;switch(type){case CrPolicyIndicatorType$1.EXTENSION:return name.length>0?CrPolicyStrings.controlledSettingExtension.replace("$1",name):CrPolicyStrings.controlledSettingExtensionWithoutName;case CrPolicyIndicatorType$1.PRIMARY_USER:return CrPolicyStrings.controlledSettingShared.replace("$1",name);case CrPolicyIndicatorType$1.OWNER:return name.length>0?CrPolicyStrings.controlledSettingWithOwner.replace("$1",name):CrPolicyStrings.controlledSettingNoOwner;case CrPolicyIndicatorType$1.USER_POLICY:case CrPolicyIndicatorType$1.DEVICE_POLICY:return CrPolicyStrings.controlledSettingPolicy;case CrPolicyIndicatorType$1.RECOMMENDED:return matches?CrPolicyStrings.controlledSettingRecommendedMatches:CrPolicyStrings.controlledSettingRecommendedDiffers;case CrPolicyIndicatorType$1.PARENT:return CrPolicyStrings.controlledSettingParent;case CrPolicyIndicatorType$1.CHILD_RESTRICTION:return CrPolicyStrings.controlledSettingChildRestriction}return""}}return CrPolicyIndicatorMixin}));
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrPolicyIndicatorElementBase=CrPolicyIndicatorMixin(PolymerElement);class CrPolicyIndicatorElement extends CrPolicyIndicatorElementBase{static get is(){return"cr-policy-indicator"}static get template(){return getTemplate$a()}static get properties(){return{iconAriaLabel:String,indicatorTooltip_:{type:String,computed:"getIndicatorTooltip_(indicatorType, indicatorSourceName)"}}}getIndicatorTooltip_(indicatorType,indicatorSourceName){return this.getIndicatorTooltip(indicatorType,indicatorSourceName)}}customElements.define(CrPolicyIndicatorElement.is,CrPolicyIndicatorElement);
// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ActionLink extends HTMLAnchorElement{boundOnKeyDown_=null;boundOnMouseDown_=null;boundOnBlur_=null;connectedCallback(){this.tabIndex=this.disabled?-1:0;if(!this.hasAttribute("role")){this.setAttribute("role","link")}this.boundOnKeyDown_=e=>{if(!this.disabled&&e.key==="Enter"&&!this.href){window.setTimeout((()=>this.click()),0)}};this.addEventListener("keydown",this.boundOnKeyDown_);function preventDefault(e){e.preventDefault()}function removePreventDefault(){document.removeEventListener("selectstart",preventDefault);document.removeEventListener("mouseup",removePreventDefault)}this.boundOnMouseDown_=()=>{document.addEventListener("selectstart",preventDefault);document.addEventListener("mouseup",removePreventDefault);if(document.activeElement!==this){this.classList.add("no-outline")}};this.addEventListener("mousedown",this.boundOnMouseDown_);this.boundOnBlur_=()=>this.classList.remove("no-outline");this.addEventListener("blur",this.boundOnBlur_)}disconnectedCallback(){this.removeEventListener("keydown",this.boundOnKeyDown_);this.boundOnKeyDown_=null;this.removeEventListener("mousedown",this.boundOnMouseDown_);this.boundOnMouseDown_=null;this.removeEventListener("blur",this.boundOnBlur_);this.boundOnBlur_=null}set disabled(disabled){if(disabled){HTMLAnchorElement.prototype.setAttribute.call(this,"disabled","")}else{HTMLAnchorElement.prototype.removeAttribute.call(this,"disabled")}this.tabIndex=disabled?-1:0}get disabled(){return this.hasAttribute("disabled")}setAttribute(attr,val){if(attr.toLowerCase()==="disabled"){this.disabled=true}else{super.setAttribute(attr,val)}}removeAttribute(attr){if(attr.toLowerCase()==="disabled"){this.disabled=false}else{super.removeAttribute(attr)}}}customElements.define("action-link",ActionLink,{extends:"a"});
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
`;template$3.setAttribute("style","display: none;");document.head.appendChild(template$3.content);
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
`;template$1.setAttribute("strip-whitespace","");Polymer({_template:template$1,is:"paper-spinner-lite",behaviors:[PaperSpinnerBehavior]});const styleMod$4=document.createElement("dom-module");styleMod$4.appendChild(html`
  <template>
    <style>
:host{--cr-input-background-color:var(--google-grey-100);--cr-input-color:var(--cr-primary-text-color);--cr-input-error-color:var(--google-red-600);--cr-input-focus-color:var(--google-blue-600);display:block;outline:0}:host-context([chrome-refresh-2023]):host{--cr-input-background-color:var(--color-textfield-filled-background,
            var(--cr-fallback-color-surface-variant));--cr-input-border-bottom:1px solid var(--color-textfield-filled-underline,
                var(--cr-fallback-color-outline));--cr-input-border-radius:8px 8px 0 0;--cr-input-error-color:var(--color-textfield-filled-error,
            var(--cr-fallback-color-error));--cr-input-focus-color:var(--color-textfield-filled-underline-focused,
            var(--cr-fallback-color-primary));--cr-input-hover-background-color:var(--cr-hover-background-color);--cr-input-label-color:var(--color-textfield-foreground-label,
            var(--cr-fallback-color-on-surface-subtle));--cr-input-padding-bottom:10px;--cr-input-padding-end:10px;--cr-input-padding-start:10px;--cr-input-padding-top:10px;--cr-input-placeholder-color:var(--color-textfield-foreground-placeholder,
                var(--cr-fallback-on-surface-subtle));isolation:isolate}:host-context([chrome-refresh-2023]):host([readonly]){--cr-input-border-radius:8px 8px}@media (prefers-color-scheme:dark){:host{--cr-input-background-color:rgba(0, 0, 0, .3);--cr-input-error-color:var(--google-red-300);--cr-input-focus-color:var(--google-blue-300)}}:host-context(html:not([chrome-refresh-2023])):host([focused_]:not([readonly]):not([invalid])) #label{color:var(--cr-input-focus-color)}:host-context([chrome-refresh-2023]) #label{color:var(--cr-input-label-color);font-size:11px;line-height:16px}:host-context([chrome-refresh-2023]):host([focused_]:not([readonly]):not([invalid])) #label{color:var(--cr-input-focus-label-color,var(--cr-input-label-color))}#input-container{border-radius:var(--cr-input-border-radius,4px);overflow:hidden;position:relative;width:var(--cr-input-width,100%)}:host-context([chrome-refresh-2023]):host([focused_]) #input-container{outline:var(--cr-input-focus-outline,none)}#inner-input-container{background-color:var(--cr-input-background-color);box-sizing:border-box;padding:0}:host-context([chrome-refresh-2023]) #inner-input-content ::slotted(*){--cr-icon-button-fill-color:var(--color-textfield-foreground-icon,
            var(--cr-fallback-color-on-surface-subtle));--cr-icon-button-icon-size:16px;--cr-icon-button-size:24px;--cr-icon-button-margin-start:0;--cr-icon-color:var(--color-textfield-foreground-icon,
            var(--cr-fallback-color-on-surface-subtle))}:host-context([chrome-refresh-2023]) #inner-input-content ::slotted([slot=inline-prefix]){--cr-icon-button-margin-start:-8px}:host-context([chrome-refresh-2023]) #inner-input-content ::slotted([slot=inline-suffix]){--cr-icon-button-margin-end:-4px}:host-context([chrome-refresh-2023]):host([invalid]) #inner-input-content ::slotted(*){--cr-icon-color:var(--cr-input-error-color);--cr-icon-button-fill-color:var(--cr-input-error-color)}#hover-layer{display:none}:host-context([chrome-refresh-2023]) #hover-layer{background-color:var(--cr-input-hover-background-color);inset:0;pointer-events:none;position:absolute;z-index:0}:host-context([chrome-refresh-2023]):host(:not([readonly]):not([disabled])) #input-container:hover #hover-layer{display:block}#input{-webkit-appearance:none;background-color:transparent;border:none;box-sizing:border-box;caret-color:var(--cr-input-focus-color);color:var(--cr-input-color);font-family:inherit;font-size:inherit;font-weight:inherit;line-height:inherit;min-height:var(--cr-input-min-height,auto);outline:0;padding-bottom:var(--cr-input-padding-bottom,6px);padding-inline-end:var(--cr-input-padding-end,8px);padding-inline-start:var(--cr-input-padding-start,8px);padding-top:var(--cr-input-padding-top,6px);text-align:inherit;text-overflow:ellipsis;width:100%}:host-context([chrome-refresh-2023]) #input{font-size:12px;line-height:16px;padding:0}:host-context([chrome-refresh-2023]) #inner-input-content{padding-bottom:var(--cr-input-padding-bottom);padding-inline-end:var(--cr-input-padding-end);padding-inline-start:var(--cr-input-padding-start);padding-top:var(--cr-input-padding-top)}#underline{border-bottom:2px solid var(--cr-input-focus-color);border-radius:var(--cr-input-underline-border-radius,0);bottom:0;box-sizing:border-box;display:var(--cr-input-underline-display);height:var(--cr-input-underline-height,0);left:0;margin:auto;opacity:0;position:absolute;right:0;transition:opacity 120ms ease-out,width 0s linear 180ms;width:0}:host([focused_]) #underline,:host([force-underline]) #underline,:host([invalid]) #underline{opacity:1;transition:opacity 120ms ease-in,width 180ms ease-out;width:100%}#underline-base{display:none}:host-context([chrome-refresh-2023]):host([readonly]) #underline{display:none}:host-context([chrome-refresh-2023]):host(:not([readonly])) #underline-base{border-bottom:var(--cr-input-border-bottom);bottom:0;display:block;left:0;position:absolute;right:0}:host-context([chrome-refresh-2023]):host([disabled]){color:var(--color-textfield-foreground-disabled,var(--cr-fallback-color-disabled-foreground));--cr-input-border-bottom:1px solid currentColor;--cr-input-placeholder-color:currentColor;--cr-input-color:currentColor;--cr-input-background-color:var(--color-textfield-background-disabled,
            var(--cr-fallback-color-disabled-background))}:host-context([chrome-refresh-2023]):host([disabled]) #inner-input-content ::slotted(*){--cr-icon-color:currentColor;--cr-icon-button-fill-color:currentColor}:host-context([chrome-refresh-2023]):host(.stroked){--cr-input-background-color:transparent;--cr-input-border:1px solid var(--color-side-panel-textfield-border,
            var(--cr-fallback-color-neutral-outline));--cr-input-border-bottom:none;--cr-input-border-radius:8px;--cr-input-padding-bottom:9px;--cr-input-padding-end:9px;--cr-input-padding-start:9px;--cr-input-padding-top:9px;--cr-input-underline-display:none;--cr-input-min-height:36px;line-height:16px}:host-context([chrome-refresh-2023]):host(.stroked[focused_]){--cr-input-border:2px solid var(--cr-focus-outline-color);--cr-input-padding-bottom:8px;--cr-input-padding-end:8px;--cr-input-padding-start:8px;--cr-input-padding-top:8px}:host-context([chrome-refresh-2023]):host(.stroked[invalid]){--cr-input-border:1px solid var(--cr-input-error-color)}:host-context([chrome-refresh-2023]):host(.stroked[focused_][invalid]){--cr-input-border:2px solid var(--cr-input-error-color)}
    </style>
  </template>
`.content);styleMod$4.register("cr-input-style");function getTemplate$9(){return html`<!--_html_template_start_-->    <style include="cr-hidden-style cr-input-style cr-shared-style">:host([disabled]) :-webkit-any(#label,#error,#input-container){opacity:var(--cr-disabled-opacity);pointer-events:none}:host-context([chrome-refresh-2023]):host([disabled]) :is(#label,#error,#input-container){opacity:1}:host ::slotted(cr-button[slot=suffix]){margin-inline-start:var(--cr-button-edge-spacing)!important}:host([invalid]) #label{color:var(--cr-input-error-color)}#input{border-bottom:var(--cr-input-border-bottom,none);letter-spacing:var(--cr-input-letter-spacing)}:host-context([chrome-refresh-2023]) #input{border-bottom:none}:host-context([chrome-refresh-2023]) #input-container{border:var(--cr-input-border,none)}#input::placeholder{color:var(--cr-input-placeholder-color,var(--cr-secondary-text-color));letter-spacing:var(--cr-input-placeholder-letter-spacing)}:host([invalid]) #input{caret-color:var(--cr-input-error-color)}:host([readonly]) #input{opacity:var(--cr-input-readonly-opacity,.6)}:host([invalid]) #underline{border-color:var(--cr-input-error-color)}#error{color:var(--cr-input-error-color);display:var(--cr-input-error-display,block);font-size:var(--cr-form-field-label-font-size);height:var(--cr-form-field-label-height);line-height:var(--cr-form-field-label-line-height);margin:8px 0;visibility:hidden;white-space:var(--cr-input-error-white-space)}:host-context([chrome-refresh-2023]) #error{font-size:11px;line-height:16px;margin:4px 10px}:host([invalid]) #error{visibility:visible}#inner-input-content,#row-container{align-items:center;display:flex;justify-content:space-between;position:relative}:host-context([chrome-refresh-2023]) #inner-input-content{gap:4px;height:16px;z-index:1}#input[type=search]::-webkit-search-cancel-button{display:none}:host-context([dir=rtl]) #input[type=url]{text-align:right}#input[type=url]{direction:ltr}</style>
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
const SUPPORTED_INPUT_TYPES=new Set(["number","password","search","text","url"]);class CrInputElement extends PolymerElement{static get is(){return"cr-input"}static get template(){return getTemplate$9()}static get properties(){return{ariaDescription:{type:String},ariaLabel:{type:String,value:""},autofocus:{type:Boolean,value:false,reflectToAttribute:true},autoValidate:Boolean,disabled:{type:Boolean,value:false,reflectToAttribute:true},errorMessage:{type:String,value:"",observer:"onInvalidOrErrorMessageChanged_"},displayErrorMessage_:{type:String,value:""},focused_:{type:Boolean,value:false,reflectToAttribute:true},invalid:{type:Boolean,value:false,notify:true,reflectToAttribute:true,observer:"onInvalidOrErrorMessageChanged_"},max:{type:Number,reflectToAttribute:true},min:{type:Number,reflectToAttribute:true},maxlength:{type:Number,reflectToAttribute:true},minlength:{type:Number,reflectToAttribute:true},pattern:{type:String,reflectToAttribute:true},inputmode:String,label:{type:String,value:""},placeholder:{type:String,value:null,observer:"placeholderChanged_"},readonly:{type:Boolean,reflectToAttribute:true},required:{type:Boolean,reflectToAttribute:true},inputTabindex:{type:Number,value:0,observer:"onInputTabindexChanged_"},type:{type:String,value:"text",observer:"onTypeChanged_"},value:{type:String,value:"",notify:true,observer:"onValueChanged_"}}}ready(){super.ready();assert$1(!this.hasAttribute("tabindex"))}onInputTabindexChanged_(){assert$1(this.inputTabindex===0||this.inputTabindex===-1)}onTypeChanged_(){assert$1(SUPPORTED_INPUT_TYPES.has(this.type))}get inputElement(){return this.$.input}getAriaLabel_(ariaLabel,label,placeholder){return ariaLabel||label||placeholder}getAriaInvalid_(invalid){return invalid?"true":"false"}onInvalidOrErrorMessageChanged_(){this.displayErrorMessage_=this.invalid?this.errorMessage:"";const ERROR_ID="error";const errorElement=this.shadowRoot.querySelector(`#${ERROR_ID}`);assert$1(errorElement);if(this.invalid){errorElement.setAttribute("role","alert");this.inputElement.setAttribute("aria-errormessage",ERROR_ID)}else{errorElement.removeAttribute("role");this.inputElement.removeAttribute("aria-errormessage")}}placeholderChanged_(){if(this.placeholder||this.placeholder===""){this.inputElement.setAttribute("placeholder",this.placeholder)}else{this.inputElement.removeAttribute("placeholder")}}focus(){this.focusInput()}focusInput(){if(this.shadowRoot.activeElement===this.inputElement){return false}this.inputElement.focus();return true}onValueChanged_(newValue,oldValue){if(!newValue&&!oldValue){return}if(this.autoValidate){this.validate()}}onInputChange_(e){this.dispatchEvent(new CustomEvent("change",{bubbles:true,composed:true,detail:{sourceEvent:e}}))}onInputFocus_(){this.focused_=true}onInputBlur_(){this.focused_=false}select(start,end){this.inputElement.focus();if(start!==undefined&&end!==undefined){this.inputElement.setSelectionRange(start,end)}else{assert$1(start===undefined&&end===undefined);this.inputElement.select()}}validate(){this.invalid=!this.inputElement.checkValidity();return!this.invalid}}customElements.define(CrInputElement.is,CrInputElement);
// Copyright 2013 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function assert(condition,opt_message){if(!condition){let message="Assertion failed";if(opt_message){message=message+": "+opt_message}const error=new Error(message);const global=function(){const thisOrSelf=this||self;thisOrSelf.traceAssertionsForTesting;return thisOrSelf}();if(global.traceAssertionsForTesting){console.warn(error.stack)}throw error}return condition}function assertNotReached(message){assert(false,message||"Unreachable code hit")}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var CrPolicyStrings;const CrPolicyIndicatorType={DEVICE_POLICY:"devicePolicy",EXTENSION:"extension",NONE:"none",OWNER:"owner",PRIMARY_USER:"primary_user",RECOMMENDED:"recommended",USER_POLICY:"userPolicy",PARENT:"parent",CHILD_RESTRICTION:"childRestriction"};const CrPolicyIndicatorBehavior={properties:{indicatorType:{type:String,value:CrPolicyIndicatorType.NONE},indicatorSourceName:{type:String,value:""},indicatorVisible:{type:Boolean,computed:"getIndicatorVisible_(indicatorType)"},indicatorIcon:{type:String,computed:"getIndicatorIcon_(indicatorType)"}},getIndicatorVisible_(type){return type!==CrPolicyIndicatorType.NONE},getIndicatorIcon_(type){switch(type){case CrPolicyIndicatorType.EXTENSION:return"cr:extension";case CrPolicyIndicatorType.NONE:return"";case CrPolicyIndicatorType.PRIMARY_USER:return"cr:group";case CrPolicyIndicatorType.OWNER:return"cr:person";case CrPolicyIndicatorType.USER_POLICY:case CrPolicyIndicatorType.DEVICE_POLICY:case CrPolicyIndicatorType.RECOMMENDED:return"cr20:domain";case CrPolicyIndicatorType.PARENT:case CrPolicyIndicatorType.CHILD_RESTRICTION:return"cr20:kite";default:assertNotReached()}},getIndicatorTooltip(type,name,matches){if(!window["CrPolicyStrings"]){return""}CrPolicyStrings=window["CrPolicyStrings"];switch(type){case CrPolicyIndicatorType.EXTENSION:return name.length>0?CrPolicyStrings.controlledSettingExtension.replace("$1",name):CrPolicyStrings.controlledSettingExtensionWithoutName;case CrPolicyIndicatorType.PRIMARY_USER:return CrPolicyStrings.controlledSettingShared.replace("$1",name);case CrPolicyIndicatorType.OWNER:return name.length>0?CrPolicyStrings.controlledSettingWithOwner.replace("$1",name):CrPolicyStrings.controlledSettingNoOwner;case CrPolicyIndicatorType.USER_POLICY:case CrPolicyIndicatorType.DEVICE_POLICY:return CrPolicyStrings.controlledSettingPolicy;case CrPolicyIndicatorType.RECOMMENDED:return matches?CrPolicyStrings.controlledSettingRecommendedMatches:CrPolicyStrings.controlledSettingRecommendedDiffers;case CrPolicyIndicatorType.PARENT:return CrPolicyStrings.controlledSettingParent;case CrPolicyIndicatorType.CHILD_RESTRICTION:return CrPolicyStrings.controlledSettingChildRestriction}return""}};
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const FAKE_CREDENTIAL="FAKE_CREDENTIAL_VPaJDV9x";const VALID_DNS_CHARS_REGEX=RegExp("^[a-zA-Z0-9-\\.]*$");class OncMojo{static getEnumString(value){if(value===undefined){return"undefined"}return value.toString()}static getActivationStateTypeString(value){switch(value){case ActivationStateType.kUnknown:return"Unknown";case ActivationStateType.kNotActivated:return"NotActivated";case ActivationStateType.kActivating:return"Activating";case ActivationStateType.kPartiallyActivated:return"PartiallyActivated";case ActivationStateType.kActivated:return"Activated";case ActivationStateType.kNoService:return"NoService"}assertNotReached("Unexpected enum value: "+OncMojo.getEnumString(value));return""}static getActivationStateTypeFromString(value){switch(value){case"Unknown":return ActivationStateType.kUnknown;case"NotActivated":return ActivationStateType.kNotActivated;case"Activating":return ActivationStateType.kActivating;case"PartiallyActivated":return ActivationStateType.kPartiallyActivated;case"Activated":return ActivationStateType.kActivated;case"NoService":return ActivationStateType.kNoService}assertNotReached("Unexpected value: "+value);return ActivationStateType.kUnknown}static getPortalStateString(value){switch(value){case PortalState.kUnknown:return"Unknown";case PortalState.kOnline:return"Online";case PortalState.kPortalSuspected:return"PortalSuspected";case PortalState.kPortal:return"Portal";case PortalState.kProxyAuthRequired:return"ProxyAuthRequired";case PortalState.kNoInternet:return"NoInternet"}assertNotReached("Unexpected enum value: "+OncMojo.getEnumString(value));return""}static getConnectionStateTypeString(value){switch(value){case ConnectionStateType.kOnline:return"Online";case ConnectionStateType.kConnected:return"Connected";case ConnectionStateType.kPortal:return"Portal";case ConnectionStateType.kConnecting:return"Connecting";case ConnectionStateType.kNotConnected:return"NotConnected"}assertNotReached("Unexpected enum value: "+OncMojo.getEnumString(value));return""}static getConnectionStateTypeFromString(value){switch(value){case"Online":return ConnectionStateType.kOnline;case"Connected":return ConnectionStateType.kConnected;case"Portal":return ConnectionStateType.kPortal;case"Connecting":return ConnectionStateType.kConnecting;case"NotConnected":return ConnectionStateType.kNotConnected}assertNotReached("Unexpected value: "+value);return ConnectionStateType.kNotConnected}static connectionStateIsConnected(value){switch(value){case ConnectionStateType.kOnline:case ConnectionStateType.kConnected:case ConnectionStateType.kPortal:return true;case ConnectionStateType.kConnecting:case ConnectionStateType.kNotConnected:return false}assertNotReached("Unexpected enum value: "+OncMojo.getEnumString(value));return false}static getDeviceStateTypeString(value){switch(value){case DeviceStateType.kUninitialized:return"Uninitialized";case DeviceStateType.kDisabled:return"Disabled";case DeviceStateType.kDisabling:return"Disabling";case DeviceStateType.kEnabling:return"Enabling";case DeviceStateType.kEnabled:return"Enabled";case DeviceStateType.kProhibited:return"Prohibited";case DeviceStateType.kUnavailable:return"Unavailable"}assertNotReached("Unexpected enum value: "+OncMojo.getEnumString(value));return""}static deviceStateIsIntermediate(value){switch(value){case DeviceStateType.kUninitialized:case DeviceStateType.kDisabling:case DeviceStateType.kEnabling:case DeviceStateType.kUnavailable:return true;case DeviceStateType.kDisabled:case DeviceStateType.kEnabled:case DeviceStateType.kProhibited:return false}assertNotReached("Unexpected enum value: "+OncMojo.getEnumString(value));return false}static deviceIsInhibited(device){if(!device){return false}return device.inhibitReason!==InhibitReason.kNotInhibited}static getNetworkTypeString(value){switch(value){case NetworkType.kAll:return"All";case NetworkType.kCellular:return"Cellular";case NetworkType.kEthernet:return"Ethernet";case NetworkType.kMobile:return"Mobile";case NetworkType.kTether:return"Tether";case NetworkType.kVPN:return"VPN";case NetworkType.kWireless:return"Wireless";case NetworkType.kWiFi:return"WiFi"}assertNotReached("Unexpected enum value: "+OncMojo.getEnumString(value));return""}static networkTypeIsMobile(value){switch(value){case NetworkType.kCellular:case NetworkType.kMobile:case NetworkType.kTether:return true;case NetworkType.kAll:case NetworkType.kEthernet:case NetworkType.kVPN:case NetworkType.kWireless:case NetworkType.kWiFi:return false}assertNotReached("Unexpected enum value: "+OncMojo.getEnumString(value));return false}static networkTypeHasConfigurationFlow(value){return!OncMojo.networkTypeIsMobile(value)}static getNetworkTypeFromString(value){switch(value){case"All":return NetworkType.kAll;case"Cellular":return NetworkType.kCellular;case"Ethernet":return NetworkType.kEthernet;case"Mobile":return NetworkType.kMobile;case"Tether":return NetworkType.kTether;case"VPN":return NetworkType.kVPN;case"Wireless":return NetworkType.kWireless;case"WiFi":return NetworkType.kWiFi}assertNotReached("Unexpected value: "+value);return NetworkType.kAll}static getOncSourceString(value){switch(value){case OncSource.kNone:return"None";case OncSource.kDevice:return"Device";case OncSource.kDevicePolicy:return"DevicePolicy";case OncSource.kUser:return"User";case OncSource.kUserPolicy:return"UserPolicy"}assertNotReached("Unexpected enum value: "+OncMojo.getEnumString(value));return""}static getSecurityTypeString(value){switch(value){case SecurityType.kNone:return"None";case SecurityType.kWep8021x:return"WEP-8021X";case SecurityType.kWepPsk:return"WEP-PSK";case SecurityType.kWpaEap:return"WPA-EAP";case SecurityType.kWpaPsk:return"WPA-PSK"}assertNotReached("Unexpected enum value: "+OncMojo.getEnumString(value));return""}static getSecurityTypeFromString(value){switch(value){case"None":return SecurityType.kNone;case"WEP-8021X":return SecurityType.kWep8021x;case"WEP-PSK":return SecurityType.kWepPsk;case"WPA-EAP":return SecurityType.kWpaEap;case"WPA-PSK":return SecurityType.kWpaPsk}assertNotReached("Unexpected value: "+value);return SecurityType.kNone}static getVpnTypeString(value){switch(value){case VpnType.kIKEv2:return"IKEv2";case VpnType.kL2TPIPsec:return"L2TP-IPsec";case VpnType.kOpenVPN:return"OpenVPN";case VpnType.kWireGuard:return"WireGuard";case VpnType.kExtension:return"ThirdPartyVPN";case VpnType.kArc:return"ARCVPN"}assertNotReached("Unexpected enum value: "+OncMojo.getEnumString(value));return""}static getTypeString(key,value){if(key==="activationState"){return OncMojo.getActivationStateTypeString(value)}if(key==="connectionState"){return OncMojo.getConnectionStateTypeString(value)}if(key==="deviceState"){return OncMojo.getDeviceStateTypeString(value)}if(key==="type"){return OncMojo.getNetworkTypeString(value)}if(key==="source"){return OncMojo.getOncSourceString(value)}if(key==="security"){return OncMojo.getSecurityTypeString(value)}return value}static getEnforcedPolicySourceFromOncSource(source){switch(source){case OncSource.kNone:case OncSource.kDevice:case OncSource.kUser:return PolicySource.kNone;case OncSource.kDevicePolicy:return PolicySource.kDevicePolicyEnforced;case OncSource.kUserPolicy:return PolicySource.kUserPolicyEnforced}assert(source!==undefined,"OncSource undefined");assertNotReached("Invalid OncSource: "+source.toString());return PolicySource.kNone}static getNetworkTypeDisplayName(type){return loadTimeData.getStringF("OncType"+OncMojo.getNetworkTypeString(type))}static getNetworkStateDisplayNameUnsafe(network){if(!network.name){return OncMojo.getNetworkTypeDisplayName(network.type)}if(network.type===NetworkType.kVPN&&network.typeState.vpn.providerName){return loadTimeData.getStringF("vpnNameTemplate",network.typeState.vpn.providerName,network.name)}return network.name}static getNetworkNameUnsafe(network){if(!network.name||!network.name.activeValue){return OncMojo.getNetworkTypeDisplayName(network.type)}if(network.type===NetworkType.kVPN&&network.typeProperties.vpn.providerName){return loadTimeData.getStringF("vpnNameTemplate",network.typeProperties.vpn.providerName,network.name.activeValue)}return network.name.activeValue}static getSignalStrength(network){switch(network.type){case NetworkType.kCellular:return network.typeState.cellular.signalStrength;case NetworkType.kTether:return network.typeState.tether.signalStrength;case NetworkType.kWiFi:return network.typeState.wifi.signalStrength}assertNotReached();return 0}static isNetworkConnectable(network){if(!OncMojo.networkTypeHasConfigurationFlow(network.type)){return true}return network.connectable}static isTypeKey(key){return key.startsWith("cellular")||key.startsWith("ethernet")||key.startsWith("tether")||key.startsWith("vpn")||key.startsWith("wifi")}static getManagedPropertyKey(key){if(OncMojo.isTypeKey(key)){key="typeProperties."+key}return key}static getDefaultNetworkState(type,opt_name){const result={connectable:false,connectRequested:false,connectionState:ConnectionStateType.kNotConnected,guid:opt_name?opt_name+"_guid":"",name:opt_name||"",portalState:PortalState.kUnknown,priority:0,proxyMode:ProxyMode.kDirect,prohibitedByPolicy:false,source:OncSource.kNone,type:type,typeState:{}};switch(type){case NetworkType.kCellular:result.typeState.cellular={iccid:"",eid:"",activationState:ActivationStateType.kUnknown,networkTechnology:"",roaming:false,signalStrength:0,simLockEnabled:false,simLocked:false,simLockType:"",hasNickName:false,networkOperator:""};break;case NetworkType.kEthernet:result.typeState.ethernet={authentication:AuthenticationType.kNone};break;case NetworkType.kTether:result.typeState.tether={batteryPercentage:0,carrier:"",hasConnectedToHost:false,signalStrength:0};break;case NetworkType.kVPN:result.typeState.vpn={type:VpnType.kOpenVPN,providerId:"",providerName:""};break;case NetworkType.kWiFi:result.typeState.wifi={bssid:"",frequency:0,hexSsid:opt_name||"",hiddenSsid:false,security:SecurityType.kNone,signalStrength:0,ssid:"",passpointId:""};break;default:assertNotReached()}return result}static managedPropertiesToNetworkState(properties){const networkState=OncMojo.getDefaultNetworkState(properties.type);networkState.connectable=properties.connectable;networkState.connectionState=properties.connectionState;networkState.guid=properties.guid;if(properties.name){networkState.name=properties.name.activeValue}if(properties.priority){networkState.priority=properties.priority.activeValue}networkState.source=properties.source;switch(properties.type){case NetworkType.kCellular:const cellularProperties=properties.typeProperties.cellular;networkState.typeState.cellular.iccid=cellularProperties.iccid||"";networkState.typeState.cellular.eid=cellularProperties.eid||"";networkState.typeState.cellular.activationState=cellularProperties.activationState;networkState.typeState.cellular.networkTechnology=cellularProperties.networkTechnology||"";networkState.typeState.cellular.roaming=cellularProperties.roamingState==="Roaming";networkState.typeState.cellular.signalStrength=cellularProperties.signalStrength;networkState.typeState.cellular.simLocked=cellularProperties.simLocked;break;case NetworkType.kEthernet:networkState.typeState.ethernet.authentication=OncMojo.getActiveValue(properties.typeProperties.ethernet.authentication)==="8021X"?AuthenticationType.k8021x:AuthenticationType.kNone;break;case NetworkType.kTether:if(properties.typeProperties.tether){networkState.typeState.tether=Object.assign({},properties.typeProperties.tether)}break;case NetworkType.kVPN:networkState.typeState.vpn.providerName=properties.typeProperties.vpn.providerName;networkState.typeState.vpn.type=properties.typeProperties.vpn.type;break;case NetworkType.kWiFi:const wifiProperties=properties.typeProperties.wifi;networkState.typeState.wifi.bssid=wifiProperties.bssid||"";networkState.typeState.wifi.frequency=wifiProperties.frequency;networkState.typeState.wifi.hexSsid=OncMojo.getActiveString(wifiProperties.hexSsid);networkState.typeState.wifi.security=wifiProperties.security;networkState.typeState.wifi.signalStrength=wifiProperties.signalStrength;networkState.typeState.wifi.ssid=OncMojo.getActiveString(wifiProperties.ssid);break}return networkState}static getDefaultManagedProperties(type,guid,name){const result={connectionState:ConnectionStateType.kNotConnected,source:OncSource.kNone,type:type,connectable:false,guid:guid,name:OncMojo.createManagedString(name),ipAddressConfigType:OncMojo.createManagedString("DHCP"),nameServersConfigType:OncMojo.createManagedString("DHCP"),portalState:PortalState.kUnknown,trafficCounterProperties:OncMojo.createTrafficCounterProperties()};switch(type){case NetworkType.kCellular:result.typeProperties={cellular:{activationState:ActivationStateType.kUnknown,signalStrength:0,simLocked:false,supportNetworkScan:false}};break;case NetworkType.kEthernet:result.typeProperties={ethernet:{}};break;case NetworkType.kTether:result.typeProperties={tether:{batteryPercentage:0,carrier:"",hasConnectedToHost:false,signalStrength:0}};break;case NetworkType.kVPN:result.typeProperties={vpn:{providerName:"",type:VpnType.kOpenVPN,openVpn:{}}};break;case NetworkType.kWiFi:result.typeProperties={wifi:{bssid:"",frequency:0,ssid:OncMojo.createManagedString(""),security:SecurityType.kNone,signalStrength:0,isSyncable:false,isConfiguredByActiveUser:false,passpointId:"",passpointMatchType:MatchType.kNoMatch}};break}return result}static getDefaultConfigProperties(type){switch(type){case NetworkType.kCellular:return{typeConfig:{cellular:{}}};case NetworkType.kEthernet:return{typeConfig:{ethernet:{}}};case NetworkType.kVPN:return{typeConfig:{vpn:{}}};case NetworkType.kWiFi:return{typeConfig:{wifi:{security:SecurityType.kNone,hiddenSsid:HiddenSsidMode.kAutomatic}}}}assertNotReached("Unexpected type: "+type.toString());return{typeConfig:{}}}static setConfigProperty(config,key,value){if(OncMojo.isTypeKey(key)){key="typeConfig."+key}while(true){const index=key.indexOf(".");if(index<0){break}const keyComponent=key.substr(0,index);if(!config.hasOwnProperty(keyComponent)){config[keyComponent]={}}config=config[keyComponent];key=key.substr(index+1)}config[key]=value}static getActiveValue(property){if(!property){return undefined}return property.activeValue}static getActiveString(property){if(!property){return""}return property.activeValue}static getIPConfigForType(properties,desiredType){const ipConfigs=properties.ipConfigs;let ipConfig;if(ipConfigs){ipConfig=ipConfigs.find((ipconfig=>ipconfig.type===desiredType));if(ipConfig&&desiredType!==IPConfigType.kIPv4){return ipConfig}}if(desiredType!==IPConfigType.kIPv4){return undefined}if(!ipConfig){ipConfig={routingPrefix:0}}const staticIpConfig=properties.staticIpConfig;if(!staticIpConfig){return ipConfig}if(properties.ipAddressConfigType&&properties.ipAddressConfigType.activeValue==="Static"){if(staticIpConfig.gateway){ipConfig.gateway=staticIpConfig.gateway.activeValue}if(staticIpConfig.ipAddress){ipConfig.ipAddress=staticIpConfig.ipAddress.activeValue}if(staticIpConfig.routingPrefix){ipConfig.routingPrefix=staticIpConfig.routingPrefix.activeValue}ipConfig.type=staticIpConfig.type}if(properties.nameServersConfigType&&properties.nameServersConfigType.activeValue==="Static"){if(staticIpConfig.nameServers){ipConfig.nameServers=staticIpConfig.nameServers.activeValue}}return ipConfig}static ipConfigPropertiesMatch(staticValue,newValue){if(staticValue.type!==newValue.type){return false}if(newValue.gateway!==undefined&&staticValue.gateway!==newValue.gateway){return false}if(newValue.ipAddress!==undefined&&staticValue.ipAddress!==newValue.ipAddress){return false}if(staticValue.routingPrefix!==newValue.routingPrefix){return false}return true}static getUpdatedIPConfigProperties(managedProperties,field,newValue){let ipConfigType=OncMojo.getActiveString(managedProperties.ipAddressConfigType)||"DHCP";let nsConfigType=OncMojo.getActiveString(managedProperties.nameServersConfigType)||"DHCP";let staticIpConfig=OncMojo.getIPConfigForType(managedProperties,IPConfigType.kIPv4);let nameServers=staticIpConfig?staticIpConfig.nameServers:undefined;if(field==="ipAddressConfigType"){const newIpConfigType=newValue;if(newIpConfigType===ipConfigType){return null}ipConfigType=newIpConfigType}else if(field==="nameServersConfigType"){const newNsConfigType=newValue;if(newNsConfigType===nsConfigType){return null}nsConfigType=newNsConfigType}else if(field==="staticIpConfig"){const ipConfigValue=newValue;if(!ipConfigValue.ipAddress){console.error("Invalid StaticIPConfig: "+JSON.stringify(newValue));return null}if(ipConfigType==="Static"&&staticIpConfig&&OncMojo.ipConfigPropertiesMatch(staticIpConfig,ipConfigValue)){return null}ipConfigType="Static";staticIpConfig=ipConfigValue}else if(field==="nameServers"){const newNameServers=newValue;if(!newNameServers||!newNameServers.length){console.error("Invalid NameServers: "+JSON.stringify(newValue))}if(nsConfigType==="Static"&&JSON.stringify(nameServers)===JSON.stringify(newNameServers)){return null}nsConfigType="Static";nameServers=newNameServers}else{console.error("Unexpected field: "+field);return null}const config=OncMojo.getDefaultConfigProperties(managedProperties.type);config.ipAddressConfigType=ipConfigType;config.nameServersConfigType=nsConfigType;if(ipConfigType==="Static"){assert(staticIpConfig&&staticIpConfig.ipAddress);config.staticIpConfig=staticIpConfig}if(nsConfigType==="Static"){assert(nameServers&&nameServers.length);config.staticIpConfig=config.staticIpConfig||{routingPrefix:0};config.staticIpConfig.nameServers=nameServers}return config}static getManagedAutoConnect(properties){const type=properties.type;switch(type){case NetworkType.kCellular:return properties.typeProperties.cellular.autoConnect;case NetworkType.kVPN:return properties.typeProperties.vpn.autoConnect;case NetworkType.kWiFi:return properties.typeProperties.wifi.autoConnect}return undefined}static createManagedString(s){return{activeValue:s,policySource:PolicySource.kNone,policyValue:undefined}}static createManagedInt(n){return{activeValue:n,policySource:PolicySource.kNone,policyValue:0}}static createManagedBool(b){return{activeValue:b,policySource:PolicySource.kNone,policyValue:false}}static createTrafficCounterProperties(){return{lastResetTime:null,autoReset:false,userSpecifiedResetDay:1}}static getConnectionStateString(connectionState){switch(connectionState){case ConnectionStateType.kOnline:case ConnectionStateType.kConnected:case ConnectionStateType.kPortal:return"OncConnected";case ConnectionStateType.kConnecting:return"OncConnecting";case ConnectionStateType.kNotConnected:return"OncNotConnected"}assertNotReached();return"OncNotConnected"}static ipAddressMatch(a,b){if(!a||!b){return!!a===!!b}const abytes=a.addressBytes;const bbytes=b.addressBytes;if(abytes.length!==bbytes.length){return false}for(let i=0;i<abytes.length;++i){if(abytes[i]!==bbytes[i]){return false}}return true}static simLockStatusMatch(a,b){if(!a||!b){return!!a===!!b}return a.lockType===b.lockType&&a.lockEnabled===b.lockEnabled&&a.retriesLeft===b.retriesLeft}static simInfosMatch(a,b){if(!a||!b){return!!a===!!b}if(a.length!==b.length){return false}for(let i=0;i<a.length;i++){const acurrent=a[i];const bcurrent=b[i];if(acurrent.slotId!==bcurrent.slotId||acurrent.eid!==bcurrent.eid||acurrent.iccid!==bcurrent.iccid||acurrent.isPrimary!==bcurrent.isPrimary){return false}}return true}static apnMatch(a,b){if(!a||!b){return!!a===!!b}return a.accessPointName===b.accessPointName&&a.name===b.name&&a.username===b.username&&a.password===b.password}static apnListMatch(a,b){if(!a||!b){return!!a===!!b}if(a.length!==b.length){return false}return a.every(((apn,index)=>OncMojo.apnMatch(apn,b[index])))}static isRestrictedConnectivity(portal){if(portal===undefined){return false}switch(portal){case PortalState.kUnknown:case PortalState.kOnline:return false;case PortalState.kPortalSuspected:case PortalState.kPortal:case PortalState.kProxyAuthRequired:case PortalState.kNoInternet:return true}assertNotReached();return false}static serializeDomainSuffixMatch(domainSuffixMatch){if(!domainSuffixMatch||domainSuffixMatch.length===0){return""}return domainSuffixMatch.join(";")}static deserializeDomainSuffixMatch(domainSuffixMatch){const entries=domainSuffixMatch.trim().split(";");const result=[];for(const e of entries){const value=VALID_DNS_CHARS_REGEX.exec(e);if(!value||value.length!==1){console.warn("Invalid Domain Suffix Match entry: "+e);return null}const entry=value[0].trim();if(entry!==""){result.push(value[0])}}return result}static serializeSubjectAltNameMatch(subjectAltNameMatch){if(!subjectAltNameMatch||subjectAltNameMatch.length===0){return""}const result=[];for(const e of subjectAltNameMatch){let type;switch(e.type){case SubjectAltName_Type.kEmail:type="EMAIL";break;case SubjectAltName_Type.kDns:type="DNS";break;case SubjectAltName_Type.kUri:type="URI";break;default:assertNotReached("Unknown subjectAltNameMatchType "+e.type)}result.push(type+":"+e.value)}return result.join(";")}static deserializeSubjectAltNameMatch(subjectAltNameMatch){const regValidEmailChars=RegExp("^[a-zA-Z0-9-\\.\\+_~@]*$");const regValidUriChars=RegExp("^[a-zA-Z0-9-\\._~:/?#\\[\\]@!$&'()\\*\\+,;=]*$");const entries=subjectAltNameMatch.trim().split(";");const result=[];for(const entry of entries){if(entry===""){continue}let type;let value;if(entry.toUpperCase().startsWith("EMAIL:")){type=SubjectAltName_Type.kEmail;value=regValidEmailChars.exec(entry.substring(6))}else if(entry.toUpperCase().startsWith("DNS:")){type=SubjectAltName_Type.kDns;value=VALID_DNS_CHARS_REGEX.exec(entry.substring(4))}else if(entry.toUpperCase().startsWith("URI:")){type=SubjectAltName_Type.kUri;value=regValidUriChars.exec(entry.substring(4))}else{console.warn("Invalid Subject Alternative Name Match type "+entry);return null}if(!value||value.length!==1){console.warn("Invalid Subject Alternative Name Match value "+entry);return null}result.push({type:type,value:value[0]})}return result}}OncMojo.USE_ATTACH_APN_NAME="attach";
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrPolicyNetworkBehaviorMojo={isNetworkPolicyControlled(property){if(!property){return false}return property.policySource!==PolicySource.kNone&&property.policySource!==PolicySource.kActiveExtension},isExtensionControlled(property){if(!property){return false}return property.policySource===PolicySource.kActiveExtension},isControlled(property){if(!property){return false}return property.policySource!==PolicySource.kNone},isEditable(property){if(!property){return false}return property.policySource!==PolicySource.kUserPolicyEnforced&&property.policySource!==PolicySource.kDevicePolicyEnforced&&property.policySource!==PolicySource.kActiveExtension},isNetworkPolicyEnforced(property){if(!property){return false}return property.policySource===PolicySource.kUserPolicyEnforced||property.policySource===PolicySource.kDevicePolicyEnforced},isNetworkPolicyRecommended(property){if(!property){return false}return property.policySource===PolicySource.kUserPolicyRecommended||property.policySource===PolicySource.kDevicePolicyRecommended},getEnforcedPolicyValue(property){if(!property||!this.isNetworkPolicyEnforced(property)){return null}return property.policyValue===undefined?null:property.policyValue},getRecommendedPolicyValue(property){if(!property||!this.isNetworkPolicyRecommended(property)){return null}return property.policyValue===undefined?null:property.policyValue},isPolicySource(source){return source===OncSource.kDevicePolicy||source===OncSource.kUserPolicy},getIndicatorTypeForSource(source){if(source===OncSource.kDevicePolicy){return CrPolicyIndicatorType.DEVICE_POLICY}if(source===OncSource.kUserPolicy){return CrPolicyIndicatorType.USER_POLICY}return CrPolicyIndicatorType.NONE},getPolicyIndicatorType(property){if(!property){return CrPolicyIndicatorType.NONE}if(property.policySource===PolicySource.kUserPolicyEnforced||property.policySource===PolicySource.kUserPolicyRecommended){return CrPolicyIndicatorType.USER_POLICY}if(property.policySource===PolicySource.kDevicePolicyEnforced||property.policySource===PolicySource.kDevicePolicyRecommended){return CrPolicyIndicatorType.DEVICE_POLICY}if(property.policySource===PolicySource.kActiveExtension){return CrPolicyIndicatorType.EXTENSION}return CrPolicyIndicatorType.NONE}};function getTemplate$8(){return html`<!--_html_template_start_--><style include="cr-hidden-style">
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
Polymer({_template:getTemplate$8(),is:"cr-policy-network-indicator-mojo",behaviors:[CrPolicyIndicatorBehavior,CrPolicyNetworkBehaviorMojo],properties:{property:Object,tooltipPosition:String,indicatorTooltip_:{type:String,computed:"getNetworkIndicatorTooltip_(indicatorType, property.*)"}},observers:["propertyChanged_(property.*)"],propertyChanged_(){const property=this.property;if(property===null||property===undefined||!this.isControlled(property)){this.indicatorType=CrPolicyIndicatorType.NONE;return}switch(property.policySource){case PolicySource.kNone:this.indicatorType=CrPolicyIndicatorType.NONE;break;case PolicySource.kUserPolicyEnforced:this.indicatorType=CrPolicyIndicatorType.USER_POLICY;break;case PolicySource.kDevicePolicyEnforced:this.indicatorType=CrPolicyIndicatorType.DEVICE_POLICY;break;case PolicySource.kUserPolicyRecommended:case PolicySource.kDevicePolicyRecommended:this.indicatorType=CrPolicyIndicatorType.RECOMMENDED;break;case PolicySource.kActiveExtension:this.indicatorType=CrPolicyIndicatorType.EXTENSION;break}},getNetworkIndicatorTooltip_(){if(this.property===undefined){return""}const matches=!!this.property&&this.property.activeValue===this.property.policyValue;return this.getIndicatorTooltip(this.indicatorType,"",matches)}});const styleMod$3=document.createElement("dom-module");styleMod$3.appendChild(html`
  <template>
    <style>
:host-context([cros]) a:not(.item)[href]{color:var(--cros-link-color)}:host-context([cros]) cr-button[has-prefix-icon_],:host-context([cros]) cr-button[has-suffix-icon_]{--iron-icon-fill-color:currentColor}:host-context([cros]) cr-dialog::part(dialog){--cr-dialog-background-color:var(--cros-bg-color-elevation-3);background-image:none;box-shadow:var(--cros-elevation-3-shadow)}:host-context([cros]) cr-radio-button{--cr-radio-button-checked-color:var(--cros-radio-button-color);--cr-radio-button-checked-ripple-color:var(--cros-radio-button-ripple-color);--cr-radio-button-unchecked-color:var(--cros-radio-button-color-unchecked);--cr-radio-button-unchecked-ripple-color:var(--cros-radio-button-ripple-color-unchecked)}:host-context([cros]) cr-toast{--cr-toast-background-color:var(--cros-toast-background-color);--cr-toast-background:var(--cros-toast-background-color);--cr-toast-text-color:var(--cros-toast-text-color);--iron-icon-fill-color:var(--cros-toast-icon-color)}:host-context([cros]) cr-toast .error-message{color:var(--cros-toast-text-color)}:host-context([cros]) cr-toggle{--cr-toggle-checked-bar-color:var(--cros-switch-track-color-active);--cr-toggle-checked-bar-opacity:100%;--cr-toggle-checked-button-color:var(--cros-switch-knob-color-active);--cr-toggle-checked-ripple-color:var(--cros-focus-aura-color);--cr-toggle-unchecked-bar-color:var(--cros-switch-track-color-inactive);--cr-toggle-unchecked-button-color:var(--cros-switch-knob-color-inactive);--cr-toggle-unchecked-ripple-color:var(--cros-ripple-color);--cr-toggle-box-shadow:var(--cros-elevation-1-shadow);--cr-toggle-ripple-diameter:32px}:host-context([cros]):host-context(.focus-outline-visible) cr-toggle:focus{--cr-toggle-ripple-ring:2px solid var(--cros-focus-ring-color)}:host-context([cros]) paper-spinner-lite{--paper-spinner-color:var(--cros-icon-color-prominent)}:host-context([cros]) cr-tooltip-icon{--cr-link-color:var(--cros-tooltip-link-color)}:host-context(body.jelly-enabled){--cros-button-label-color-primary:var(--cros-sys-on_primary);--cros-link-color:var(--cros-sys-primary);--cros-separator-color:var(--cros-sys-separator);--cros-tab-slider-track-color:var(--cros-sys-surface_variant, 80%);--cr-form-field-label-color:var(--cros-sys-on_surface);--cr-link-color:var(--cros-sys-primary);--cr-primary-text-color:var(--cros-sys-on_surface);--cr-secondary-text-color:var(--cros-sys-on_surface_variant)}:host-context([cros][chrome-refresh-2023]){--cr-focus-outline-color:var(--cros-sys-focus_ring);--cr-disabled-opacity:var(--cros-disabled-opacity)}:host-context(body.jelly-enabled) cr-button{--text-color:var(--cros-sys-on_primary_container);--ink-color:var(--cros-sys-ripple_primary);--iron-icon-fill-color:currentColor;--hover-bg-color:var(--cros-sys-hover_on_subtle);--ripple-opacity:.1;--bg-action:var(--cros-sys-primary);--ink-color-action:var(--cros-sys-ripple_primary);--text-color-action:var(--cros-sys-on_primary);--hover-bg-action:var(--cros-sys-hover_on_prominent);--ripple-opacity-action:1;--disabled-bg:var(--cros-sys-disabled_container);--disabled-bg-action:var(--cros-sys-disabled_container);--disabled-text-color:var(--cros-sys-disabled);background-color:var(--cros-sys-primary_container);border:none}:host-context(body.jelly-enabled) cr-button:hover::part(hoverBackground){background-color:var(--hover-bg-color);display:block}:host-context(body.jelly-enabled) cr-button.action-button:not(:active):hover,:host-context(body.jelly-enabled) cr-button:active{box-shadow:none}:host-context(body.jelly-enabled) cr-button.action-button{background-color:var(--bg-action)}:host-context(body.jelly-enabled) cr-button.action-button:hover::part(hoverBackground){background-color:var(--hover-bg-action)}:host-context(body.jelly-enabled) cr-button[disabled]{background-color:var(--cros-sys-disabled_container)}:host-context(body.jelly-enabled):host-context(.focus-outline-visible) cr-button:focus{box-shadow:none;outline:2px solid var(--cros-sys-focus_ring)}:host-context(body.jelly-enabled) cr-checkbox{--cr-checkbox-checked-box-color:var(--cros-sys-primary);--cr-checkbox-ripple-checked-color:var(--cros-sys-ripple_primary);--cr-checkbox-checked-ripple-opacity:1;--cr-checkbox-mark-color:var(--cros-sys-inverse_on_surface);--cr-checkbox-ripple-unchecked-color:var(--cros-sys-ripple_primary);--cr-checkbox-unchecked-box-color:var(--cros-sys-on_surface);--cr-checkbox-unchecked-ripple-opacity:1}:host-context([cros][chrome-refresh-2023]) cr-checkbox{--cr-checkbox-focus-outline:none}:host-context([cros][chrome-refresh-2023]) cr-checkbox[disabled]{opacity:var(--cros-disabled-opacity)}:host-context([cros][chrome-refresh-2023]):host-context(.focus-outline-visible) cr-checkbox:focus{--cr-checkbox-ripple-ring:2px solid var(--cros-sys-focus_ring)}:host-context(body.jelly-enabled) cr-dialog::part(dialog){--cr-dialog-background-color:var(--cros-sys-base_elevated);background-image:none;box-shadow:0 0 12px 0 var(--cros-sys-shadow)}:host-context(body.jelly-enabled) cr-dialog>[slot=title]{font:var(--cros-display-7-font)}:host-context(body.jelly-enabled) cr-drawer{--cr-drawer-background-color:var(--cros-sys-app_base_shaded)}:host-context(body.jelly-enabled) cr-expand-button::part(icon),:host-context(body.jelly-enabled) cr-icon-button,:host-context(body.jelly-enabled) cr-link-row::part(icon){--cr-icon-button-fill-color:var(--cros-sys-secondary)}:host-context(body.jelly-enabled) cr-input,:host-context(body.jelly-enabled) cr-search-field::part(searchInput),:host-context(body.jelly-enabled) cr-searchable-drop-down::part(input),:host-context(body.jelly-enabled) cr-textarea{--cr-input-background-color:var(--cros-sys-input_field_on_base);--cr-input-error-color:var(--cros-sys-error);--cr-input-focus-color:var(--cros-sys-primary);--cr-input-placeholder-color:var(--cros-sys-secondary)}:host-context([cros][chrome-refresh-2023]) cr-input,:host-context([cros][chrome-refresh-2023]) cr-search-field::part(searchInput),:host-context([cros][chrome-refresh-2023]) cr-searchable-drop-down::part(input){--cr-input-background-color:var(--cros-sys-input_field_on_base);--cr-input-border:none;--cr-input-border-bottom:none;--cr-input-border-radius:8px;--cr-input-label-color:var(--cros-sys-on-surface);--cr-input-padding-start:16px;--cr-input-padding-end:16px;--cr-input-placeholder-color:var(--cros-sys-secondary);--cr-input-underline-display:none;font:var(--cros-body-2-font);--cr-input-focus-color:var(--cros-sys-primary);--cr-input-focus-label-color:var(--cros-sys-primary);--cr-input-focus-outline:2px solid var(--cros-sys-focus_ring);--cr-input-hover-background-color:transparent;--cr-input-error-color:var(--cros-sys-error)}:host-context([cros][chrome-refresh-2023]) cr-input[disabled]{color:currentColor;opacity:var(--cros-disabled-opacity)}:host-context([cros][chrome-refresh-2023]) cr-input[invalid]{--cr-input-focus-outline:2px solid var(--cros-sys-error)}:host-context([cros][chrome-refresh-2023]) cr-toolbar-search-field{--cr-toolbar-search-field-hover-background:none}:host-context(body.jelly-enabled) .md-select{--md-select-bg-color:var(--cros-sys-input_field_on_base);--md-select-focus-shadow-color:var(--cros-sys-primary);--md-select-option-bg-color:var(--cros-sys-base_elevated);--md-select-text-color:var(--cros-sys-on_surface)}:host-context([cros][chrome-refresh-2023]) .md-select{--md-arrow-width:7px;--md-select-bg-color:var(--cros-sys-input_field_on_base);--md-select-focus-shadow-color:transparent;--md-select-option-bg-color:var(--cros-sys-base_elevated);--md-select-side-padding:16px;--md-select-text-color:var(--cros-sys-on_surface);border:none;border-radius:8px;font:var(--cros-body-2-font);height:36px;line-height:36px}:host-context([cros][chrome-refresh-2023]) .md-select:hover{background-color:var(--md-select-bg-color)}:host-context([cros][chrome-refresh-2023]) .md-select[disabled]{background-color:var(--md-select-bg-color);border-color:transparent;color:var(--md-select-text-color);opacity:var(--cros-disabled-opacity)}:host-context(body.jelly-enabled) cr-action-menu{--cr-menu-background-color:var(--cros-sys-base_elevated);--cr-menu-background-focus-color:var(--cros-sys-hover_on_subtle)}:host-context(body.jelly-enabled),:host-context(body.jelly-enabled) cr-radio-button{--cr-radio-button-checked-color:var(--cros-sys-primary);--cr-radio-button-checked-ripple-color:var(--cros-sys-ripple_primary);--cr-radio-button-unchecked-color:var(--cros-sys-on_surface);--cr-radio-button-unchecked-ripple-color:var(--cros-sys-ripple_neutral_on_subtle)}:host-context([cros][chrome-refresh-2023]),:host-context([cros][chrome-refresh-2023]) cr-radio-button{--cr-radio-button-checked-color:var(--cros-sys-primary);--cr-radio-button-checked-ripple-color:var(--cros-sys-ripple_primary);--cr-radio-button-unchecked-color:var(--cros-sys-on_surface);--cr-radio-button-unchecked-ripple-color:var(--cros-sys-ripple_neutral_on_subtle);--cr-radio-button-ink-size:40px}:host-context([cros][chrome-refresh-2023]) cr-radio-button[disabled]{--cr-radio-button-checked-color:var(--cros-sys-disabled);--cr-radio-button-unchecked-color:var(--cros-sys-disabled)}:host-context(body.jelly-enabled) cr-card-radio-button{--cr-card-background-color:var(--cros-sys-app_base);--cr-checked-color:var(--cros-sys-primary);--cr-radio-button-checked-ripple-color:var(--cros-sys-ripple_primary);--hover-bg-color:var(--cros-sys-hover_on_subtle)}:host-context(body.jelly-enabled) cr-search-field{--cr-search-field-clear-icon-fill:var(--cros-sys-primary);--cr-search-field-clear-icon-margin-end:6px;--cr-search-field-input-border-bottom:none;--cr-search-field-input-padding-start:8px;--cr-search-field-input-underline-border-radius:4px;--cr-search-field-search-icon-display:none;--cr-search-field-search-icon-fill:var(--cros-sys-primary);--cr-search-field-search-icon-inline-display:block;--cr-search-field-search-icon-inline-margin-start:6px;border-radius:4px}:host-context([cros][chrome-refresh-2023]) cr-search-field{--cr-search-field-search-icon-fill:var(--cros-sys-secondary);--cr-search-field-search-icon-inline-margin-start:0;--cr-search-field-clear-icon-fill:var(--cros-sys-secondary);--cr-search-field-clear-icon-margin-end:6px;--cr-search-field-clear-icon-size:16px}:host-context([cros][chrome-refresh-2023]) cr-search-field::part(searchInput){--cr-input-padding-bottom:10px;--cr-input-padding-end:28px;--cr-input-padding-start:8px;--cr-input-padding-top:10px}:host-context([cros][chrome-refresh-2023]) cr-searchable-drop-down,:host-context(body.jelly-enabled) cr-searchable-drop-down{--cr-searchable-drop-down-bg-color:var(--cros-sys-base_elevated);--cr-searchable-drop-down-icon-color-focus:var(--cros-sys-primary);--cr-searchable-drop-down-list-bg-color-selected:var(--cros-sys-base_highlight);--cr-searchable-drop-down-list-item-color:var(--cros-sys-on_surface);--cr-searchable-drop-down-shadow:var(--cros-elevation-3-shadow)}:host-context(body.jelly-enabled) cr-slider{--cr-slider-active-color:var(--cros-sys-primary);--cr-slider-container-color:var(--cros-sys-primary_container);--cr-slider-container-disabled-color:var(--cros-sys-disabled_container);--cr-slider-disabled-color:var(--cros-sys-disabled);--cr-slider-knob-active-color:var(--cros-sys-primary);--cr-slider-knob-disabled-color:var(--cros-sys-disabled);--cr-slider-marker-active-color:var(--cros-sys-primary_container);--cr-slider-marker-color:var(--cros-sys-primary);--cr-slider-marker-disabled-color:var(--cros-sys-disabled);--cr-slider-ripple-color:var(--cros-sys-hover_on_prominent)}:host-context(body.jelly-enabled) cr-slider:not([disabled])::part(knob){background-color:var(--cros-sys-primary)}:host-context(body.jelly-enabled) cr-slider[disabled]::part(knob){border:none}:host-context(body.jelly-enabled) cr-slider::part(label){background:var(--cros-sys-primary);color:var(--cros-sys-on_primary)}:host-context(body.jelly-enabled) cr-tabs{--cr-tabs-selected-color:var(--cros-sys-primary)}:host-context(body.jelly-enabled) cr-toggle{--cr-toggle-checked-bar-color:var(--cros-sys-primary_container);--cr-toggle-checked-bar-opacity:100%;--cr-toggle-checked-button-color:var(--cros-sys-primary);--cr-toggle-checked-ripple-color:var(--cros-sys-hover_on_prominent);--cr-toggle-unchecked-bar-color:var(--cros-sys-secondary);--cr-toggle-unchecked-button-color:var(--cros-sys-surface_variant);--cr-toggle-unchecked-ripple-color:var(--cros-sys-hover_on_prominent);--cr-toggle-box-shadow:var(--cros-elevation-1-shadow);--cr-toggle-ripple-diameter:32px}:host-context(body.jelly-enabled):host-context(.focus-outline-visible) cr-toggle:focus{--cr-toggle-ripple-ring:2px solid var(--cros-sys-focus_ring)}:host-context([cros][chrome-refresh-2023]) cr-toggle{--cr-toggle-bar-width:32px;--cr-toggle-knob-diameter:12px;--cr-toggle-bar-border:none;--cr-toggle-checked-bar-color:var(--cros-sys-primary);--cr-toggle-checked-button-color:var(--cros-sys-on_primary);--cr-toggle-unchecked-bar-color:var(--cros-sys-secondary);--cr-toggle-unchecked-button-color:var(--cros-sys-on_secondary);--color-toggle-button-thumb-on-hover:var(--cros-sys-on_primary);--cr-toggle-disabled-opacity:var(--cros-disabled-opacity)}:host-context([cros][chrome-refresh-2023]):host-context(.focus-outline-visible) cr-toggle:focus{--cr-toggle-ripple-ring:none}:host-context([cros][chrome-refresh-2023]) cr-policy-indicator,:host-context([cros][chrome-refresh-2023]) cr-policy-pref-indicator,:host-context([cros][chrome-refresh-2023]) cr-tooltip-icon::part(tooltip),:host-context(body.jelly-enabled) cr-policy-indicator,:host-context(body.jelly-enabled) cr-policy-pref-indicator,:host-context(body.jelly-enabled) cr-tooltip-icon::part(tooltip){--paper-tooltip-background:var(--cros-sys-on_surface);--paper-tooltip-padding:5px 8px;--paper-tooltip-text-color:var(--cros-sys-inverse_on_surface);font:var(--cros-annotation-1-font)}
    </style>
  </template>
`.content);styleMod$3.register("cros-color-overrides");const styleMod$2=document.createElement("dom-module");styleMod$2.appendChild(html`
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
`.content);styleMod$2.register("network-shared");
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const NetworkConfigElementBehavior={properties:{disabled:{type:Boolean,value:false,reflectToAttribute:true},readonly:{type:Boolean,value:false,reflectToAttribute:true},property:{type:Object,value:null},value:{type:Object,notify:true},prefilledValue:{type:Object,value:null}},observers:["maybeLockByPrefilledValue(readonly, disabled, value, prefilledValue)"],getDisabled_(disabled,property){return disabled||!!property&&this.isNetworkPolicyEnforced(property)},isPrefilledValueValid(){return true},maybeLockByPrefilledValue(){if(this.prefilledValue===undefined||this.prefilledValue===null){return}if(!this.isPrefilledValueValid()){return}this.value=this.prefilledValue;this.readonly=true;this.disabled=true}};function getTemplate$7(){return html`<!--_html_template_start_--><style include="network-shared">
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
Polymer({_template:getTemplate$7(),is:"network-config-input",behaviors:[CrPolicyNetworkBehaviorMojo,NetworkConfigElementBehavior],properties:{label:String,hidden:{type:Boolean,reflectToAttribute:true},invalid:{type:Boolean,value:false}},focus(){this.$$("cr-input").focus()},onKeypress_(event){if(event.key!=="Enter"){return}event.stopPropagation();this.fire("enter")}});const styleMod$1=document.createElement("dom-module");styleMod$1.appendChild(html`
  <template>
    <style>
.md-select{--md-arrow-width:10px;--md-select-bg-color:var(--google-grey-100);--md-select-focus-shadow-color:rgba(var(--google-blue-600-rgb), .4);--md-select-option-bg-color:white;--md-select-side-padding:8px;--md-select-text-color:var(--cr-primary-text-color);-webkit-appearance:none;background:url(//resources/images/arrow_down.svg) calc(100% - var(--md-select-side-padding)) center no-repeat;background-color:var(--md-select-bg-color);background-size:var(--md-arrow-width);border:none;border-radius:4px;color:var(--md-select-text-color);cursor:pointer;font-family:inherit;font-size:inherit;line-height:inherit;max-width:100%;outline:0;padding-bottom:6px;padding-inline-end:calc(var(--md-select-side-padding) + var(--md-arrow-width) + 3px);padding-inline-start:var(--md-select-side-padding);padding-top:6px;width:var(--md-select-width,200px)}@media (prefers-color-scheme:dark){.md-select{--md-select-bg-color:rgba(0, 0, 0, .3);--md-select-focus-shadow-color:rgba(var(--google-blue-300-rgb), .5);--md-select-option-bg-color:var(--google-grey-900-white-4-percent);background-image:url(//resources/images/dark/arrow_down.svg)}}:host-context([chrome-refresh-2023]) .md-select{--md-select-bg-color:transparent;--md-arrow-width:7px;--md-select-side-padding:10px;--md-select-text-color:inherit;border:solid 1px var(--color-combobox-container-outline,var(--cr-fallback-color-neutral-outline));border-radius:8px;box-sizing:border-box;font-size:12px;height:36px;line-height:36px;padding-bottom:0;padding-top:0}:host-context([chrome-refresh-2023]) .md-select:hover{background-color:var(--color-comboxbox-ink-drop-hovered,var(--cr-hover-on-subtle-background-color))}.md-select :-webkit-any(option,optgroup){background-color:var(--md-select-option-bg-color)}.md-select[disabled]{opacity:var(--cr-disabled-opacity);pointer-events:none}:host-context([chrome-refresh-2023]) .md-select[disabled]{background-color:var(--color-combobox-background-disabled,var(--cr-fallback-color-disabled-background));border-color:transparent;color:var(--color-textfield-foreground-disabled,var(--cr-fallback-color-disabled-foreground));opacity:1}.md-select:focus{box-shadow:0 0 0 2px var(--md-select-focus-shadow-color)}:host-context([chrome-refresh-2023]) .md-select:focus{box-shadow:none;outline:solid 2px var(--cr-focus-outline-color);outline-offset:-1px}@media (forced-colors:active){.md-select:focus{outline:var(--cr-focus-outline-hcm)}}.md-select:active{box-shadow:none}:host-context([dir=rtl]) .md-select{background-position-x:var(--md-select-side-padding)}
    </style>
  </template>
`.content);styleMod$1.register("md-select");
// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const sanitizeInnerHtmlInternal$1=function(rawString,opts){opts=opts||{};return parseHtmlSubset$1(`<b>${rawString}</b>`,opts.tags,opts.attrs).firstChild.innerHTML};let sanitizedPolicy$1=null;function sanitizeInnerHtml$1(rawString,opts){assert(window.trustedTypes);if(sanitizedPolicy$1===null){sanitizedPolicy$1=window.trustedTypes.createPolicy("ash-deprecated-sanitize-inner-html",{createHTML:(string,...opts)=>sanitizeInnerHtmlInternal$1(string,opts[0]),createScript:message=>assertNotReached(message),createScriptURL:message=>assertNotReached(message)})}return sanitizedPolicy$1.createHTML(rawString,opts)}const parseHtmlSubset$1=function(){const allowAttribute=(node,value)=>true;const allowedAttributes=new Map([["href",(node,value)=>node.tagName==="A"&&(value.startsWith("chrome://")||value.startsWith("https://")||value==="#")],["target",(node,value)=>node.tagName==="A"&&value==="_blank"]]);const allowedOptionalAttributes=new Map([["class",allowAttribute],["id",allowAttribute],["is",(node,value)=>value==="action-link"||value===""],["role",(node,value)=>value==="link"],["src",(node,value)=>node.tagName==="IMG"&&value.startsWith("chrome://")],["tabindex",allowAttribute],["aria-hidden",allowAttribute],["aria-labelledby",allowAttribute]]);const allowedTags=new Set(["A","B","I","BR","DIV","EM","KBD","P","PRE","SPAN","STRONG"]);const allowedOptionalTags=new Set(["IMG","LI","UL"]);let unsanitizedPolicy;function mergeTags(optTags){const clone=new Set(allowedTags);optTags.forEach((str=>{const tag=str.toUpperCase();if(allowedOptionalTags.has(tag)){clone.add(tag)}}));return clone}function mergeAttrs(optAttrs){const clone=new Map([...allowedAttributes]);optAttrs.forEach((key=>{if(allowedOptionalAttributes.has(key)){clone.set(key,allowedOptionalAttributes.get(key))}}));return clone}function walk(n,f){f(n);for(let i=0;i<n.childNodes.length;i++){walk(n.childNodes[i],f)}}function assertElement(tags,node){if(!tags.has(node.tagName)){throw Error(node.tagName+" is not supported")}}function assertAttribute(attrs,attrNode,node){const n=attrNode.nodeName;const v=attrNode.nodeValue;if(!attrs.has(n)||!attrs.get(n)(node,v)){throw Error(node.tagName+"["+n+'="'+v+'"] is not supported')}}return function(s,extraTags,extraAttrs){const tags=extraTags?mergeTags(extraTags):allowedTags;const attrs=extraAttrs?mergeAttrs(extraAttrs):allowedAttributes;const doc=document.implementation.createHTMLDocument("");const r=doc.createRange();r.selectNode(doc.body);if(window.trustedTypes){if(!unsanitizedPolicy){unsanitizedPolicy=trustedTypes.createPolicy("ash-deprecated-parse-html-subset",{createHTML:untrustedHTML=>untrustedHTML})}s=unsanitizedPolicy.createHTML(s)}const df=r.createContextualFragment(s);walk(df,(function(node){switch(node.nodeType){case Node.ELEMENT_NODE:assertElement(tags,node);const nodeAttrs=node.attributes;for(let i=0;i<nodeAttrs.length;++i){assertAttribute(attrs,nodeAttrs[i],node)}break;case Node.COMMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:case Node.TEXT_NODE:break;default:throw Error("Node type "+node.nodeType+" is not supported")}}));return df}}();
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const I18nBehavior={properties:{locale:{type:String,value:""}},i18nUpdateLocale(){this.locale=loadTimeData.getString("app_locale")},i18nRaw_(id,varArgs){return arguments.length===1?loadTimeData.getString(id):loadTimeData.getStringF.apply(loadTimeData,arguments)},i18n(id,varArgs){const rawString=this.i18nRaw_.apply(this,arguments);return parseHtmlSubset$1("<b>"+rawString+"</b>").firstChild.textContent},i18nAdvanced(id,opts){opts=opts||{};const args=[id].concat(opts.substitutions||[]);const rawString=this.i18nRaw_.apply(this,args);return sanitizeInnerHtml$1(rawString,opts)},i18nDynamic(locale,id,varArgs){return this.i18n.apply(this,Array.prototype.slice.call(arguments,1))},i18nRecursive(locale,id,varArgs){let args=Array.prototype.slice.call(arguments,2);if(args.length>0){const self=this;args=args.map((function(str){return self.i18nExists(str)?loadTimeData.getString(str):str}))}return this.i18nDynamic.apply(this,[locale,id].concat(args))},i18nExists(id){return loadTimeData.valueExists(id)}};function getTemplate$6(){return html`<!--_html_template_start_--><style include="cr-shared-style network-shared md-select">
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
Polymer({_template:getTemplate$6(),is:"network-config-select",behaviors:[I18nBehavior,CrPolicyNetworkBehaviorMojo,NetworkConfigElementBehavior],properties:{label:String,certList:Boolean,deviceCertsOnly:Boolean,items:Array,key:String,oncPrefix:{type:String,value:""}},observers:["updateSelected_(items, value)"],focus(){this.$$("select").focus()},updateSelected_(){this.async((function(){const select=this.$$("select");if(select.value!==this.value){select.value=this.value}}))},getItemLabel_(item){if(this.certList){return this.getCertificateName_(item)}let value;if(this.key){value=OncMojo.getTypeString(this.key,item)}else{value=item}const oncValue="Onc"+this.oncPrefix.replace(/\./g,"-")+"_"+value;if(this.i18nExists(oncValue)){return this.i18n(oncValue)}assertNotReached("ONC value not found: "+oncValue);return value},getItemValue_(item){if(this.certList){return item.hash}return item},getItemEnabled_(item){if(this.certList){const cert=item;if(this.deviceCertsOnly&&!cert.deviceWide){return false}return!!cert.hash}return true},getCertificateName_(certificate){if(certificate.hardwareBacked){return this.i18n("networkCertificateNameHardwareBacked",certificate.issuedBy,certificate.issuedTo)}if(certificate.issuedTo){return this.i18n("networkCertificateName",certificate.issuedBy,certificate.issuedTo)}return certificate.issuedBy},isPrefilledValueValid(){if(this.prefilledValue===undefined||this.prefilledValue===null){return false}return this.items.includes(this.prefilledValue)}});function getTemplate$5(){return html`<!--_html_template_start_--><style include="network-shared">
  :host {
    cursor: pointer;
  }
  :host([disabled]) {
    cursor: initial;
  }
  cr-policy-network-indicator-mojo {
    --cr-tooltip-icon-margin-start: var(--cr-controlled-by-spacing);
  }
  cr-policy-network-indicator-mojo.left {
    margin-inline-end: var(--cr-controlled-by-spacing);
  }
  div.property-box {
    width: 100%;
  }
  #sub-label {
    font-size: 0.75rem;
  }
</style>

<div class="property-box">
  <div class="start">
    <div aria-hidden="true">[[label]]</div>
    <div id="sub-label" class="cr-secondary-text" aria-hidden="true">
      [[subLabel]]
    </div>
  </div>
  <template is="dom-if" if="[[policyOnLeft]]">
    <cr-policy-network-indicator-mojo class="left"
        property="[[property]]" tooltip-position="left">
    </cr-policy-network-indicator-mojo>
  </template>
  <cr-toggle checked="{{checked}}"
      disabled="[[getDisabled_(disabled, property)]]"
      aria-label$="[[label]]" aria-describedby="sub-label">
  </cr-toggle>
  <template is="dom-if" if="[[!policyOnLeft]]">
    <cr-policy-network-indicator-mojo
        property="[[property]]" tooltip-position="left">
    </cr-policy-network-indicator-mojo>
  </template>
</div>
<!--_html_template_end_-->`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Polymer({_template:getTemplate$5(),is:"network-config-toggle",behaviors:[CrPolicyNetworkBehaviorMojo,NetworkConfigElementBehavior],properties:{label:String,subLabel:String,checked:{type:Boolean,value:false,reflectToAttribute:true,notify:true},policyOnLeft:{type:Boolean,value:false,reflectToAttribute:true}},listeners:{click:"onHostTap_"},focus(){this.$$("cr-toggle").focus()},onHostTap_(e){e.stopPropagation();if(this.getDisabled_(this.disabled,this.property)){return}this.checked=!this.checked;this.fire("change")}});function getTemplate$4(){return html`<!--_html_template_start_--><style include="network-shared">
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
      readonly="[[readonly]]"
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
Polymer({_template:getTemplate$4(),is:"network-password-input",behaviors:[I18nBehavior,CrPolicyNetworkBehaviorMojo,NetworkConfigElementBehavior],properties:{label:{type:String,reflectToAttribute:true},showPassword:{type:Boolean,value:false},invalid:{type:Boolean,value:false},allowErrorMessage:{type:Boolean,value:false},errorMessage:{type:String,value:""},tooltipPosition_:{type:String,value:""},showPolicyIndicator_:{type:Boolean,value:false,computed:"getDisabled_(disabled, property)"}},attached(){this.tooltipPosition_=window.getComputedStyle(this).direction==="rtl"?"right":"left"},focus(){this.$$("cr-input").focus();this.$$("cr-input").select()},getInputType_(){return this.showPassword?"text":"password"},isShowingPlaceholder_(){return this.value===FAKE_CREDENTIAL},getIconClass_(){return this.showPassword?"icon-visibility-off":"icon-visibility"},getShowPasswordTitle_(){return this.showPassword?this.i18n("hidePassword"):this.i18n("showPassword")},onShowPasswordTap_(event){if(event.type==="touchend"&&event.cancelable){event.preventDefault()}if(this.isShowingPlaceholder_()){this.value="";this.focus()}this.showPassword=!this.showPassword;event.stopPropagation()},onKeydown_(event){if(event.target.id==="input"&&event.key==="Enter"){event.stopPropagation();this.fire("enter");return}if(!this.isShowingPlaceholder_()){return}if(event.key.indexOf("Arrow")<0&&event.key!=="Home"&&event.key!=="End"){return}if(event.cancelable){event.preventDefault()}},onMousedown_(event){if(!this.isShowingPlaceholder_()){return}if(document.activeElement!==event.target){this.focus()}if(event.cancelable){event.preventDefault()}}});
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class MojoInterfaceProviderImpl{constructor(){this.remote_=null}getMojoServiceRemote(){if(!this.remote_){this.remote_=CrosNetworkConfig.getRemote()}return this.remote_}setMojoServiceRemoteForTest(remote){this.remote_=remote}static getInstance(){return instance$1||(instance$1=new MojoInterfaceProviderImpl)}static setInstanceForTest(obj){instance$1=obj}}let instance$1=null;function getTemplate$3(){return html`<!--_html_template_start_--><style include="network-shared action-link iron-flex">
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
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const NetworkListenerBehavior={observer_:null,attached(){this.observer_=new CrosNetworkConfigObserverReceiver(this);MojoInterfaceProviderImpl.getInstance().getMojoServiceRemote().addObserver(this.observer_.$.bindNewPipeAndPassRemote())},onActiveNetworksChanged(activeNetworks){},onNetworkStateChanged(network){},onNetworkStateListChanged(){},onDeviceStateListChanged(){},onVpnProvidersChanged(){},onNetworkCertificatesChanged(){},onPoliciesApplied(userhash){}};
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const VPNConfigType={IKEV2:"IKEv2",L2TP_IPSEC:"L2TP_IPsec",OPEN_VPN:"OpenVPN",WIREGUARD:"WireGuard"};const IpsecAuthType={PSK:"PSK",CERT:"Cert",EAP:"EAP"};const WireGuardKeyConfigType={USE_CURRENT:"UseCurrent",GENERATE_NEW:"GenerateNew",USER_INPUT:"UserInput"};const DEFAULT_HASH="default";const DO_NOT_CHECK_HASH="do-not-check";const NO_CERTS_HASH="no-certs";const NO_USER_CERT_HASH="no-user-cert";const DEFAULT_EAP_OUTER_PROTOCOL="PEAP";const PLACEHOLDER_CREDENTIAL="(credential)";const IPV4_ADDR_REGEX=/^([0-9]+\.){3}[0-9]+$/i;const IPV6_ADDR_REGEX=/^(\:?[0-9a-f]{0,4}){2,8}$/i;const IP_CIDR_REGEX=/^[0-9a-f\.\:]+\/[0-9]+?$/i;Polymer({_template:getTemplate$3(),is:"network-config",behaviors:[NetworkListenerBehavior,I18nBehavior],properties:{globalPolicy_:Object,guid:String,type:String,mojoType_:Number,shareAllowEnable:Boolean,shareDefault:Boolean,enableConnect:{type:Boolean,notify:true,value:false},enableSave:{type:Boolean,notify:true,value:false},connectOnEnter:{type:Boolean,value:false},error:{type:String,notify:true},prefilledProperties:Object,managedProperties_:{type:Object,value:null},managedEapProperties_:{type:Object,value:null},propertiesSent_:Boolean,configProperties_:Object,eapProperties_:{type:Object,value:null},cachedServerCaCerts_:Array,cachedUserCerts_:Array,serverCaCerts_:{type:Array,value(){return[]}},selectedServerCaHash_:String,userCerts_:{type:Array,value(){return[]}},selectedUserCertHash_:{type:String,observer:"updateIsConfigured_"},isConfigured_:{type:Boolean,value:false},shareNetwork_:{type:Boolean,value:true},shareNetworkEphemeralDisabled_:{type:Object,value:{activeValue:false,policySource:PolicySource.kDevicePolicyEnforced,policyValue:false}},autoConnect_:{type:Boolean,observer:"updateHiddenNetworkWarning_"},hiddenNetworkWarning_:Boolean,securityType_:Number,vpnSaveCredentials_:{type:Boolean,value:false},vpnType_:{type:String,observer:"updateVpnIPsecAuthTypeItems_"},ipsecAuthType_:{type:String,value:IpsecAuthType.PSK},wireguardKeyType_:String,ipAddressInput_:{type:String,observer:"updateIsConfigured_"},nameServersInput_:String,showEap_:{type:Object,value:null},showVpn_:{type:Object,value:null},isWireGuardUserPrivateKeyInputActive_:{type:Boolean,computed:"updateWireGuardKeyType_(wireguardKeyType_)"},eapOuterItems_:{type:Array,readOnly:true,value:["PEAP","EAP-TLS","EAP-TTLS","LEAP"]},eapInnerItemsPeap_:{type:Array,readOnly:true,value:()=>{const values=["Automatic","MD5","MSCHAPv2"];if(loadTimeData.getBoolean("eapGtcWifiAuthentication")){values.push("GTC")}return values}},eapInnerItemsTtls_:{type:Array,readOnly:true,value:["Automatic","MD5","MSCHAP","MSCHAPv2","PAP","CHAP","GTC"]},vpnTypeItems_:{type:Array,value:[VPNConfigType.L2TP_IPSEC,VPNConfigType.OPEN_VPN]},ipsecAuthTypeItems_:{type:Array,value:[]},wireguardKeyTypeItems_:{type:Array,value:[]},deviceCertsOnly_:{type:Boolean,value:false},configRequiresPassphrase_:{type:Boolean,computed:"computeConfigRequiresPassphrase_(mojoType_, securityType_)"},serializedDomainSuffixMatch_:{type:String,value:""},serializedSubjectAltNameMatch_:{type:String,value:""}},observers:["setEnableConnect_(isConfigured_, propertiesSent_)","setEnableSave_(isConfigured_, managedProperties_)","setShareNetwork_(mojoType_, managedProperties_, securityType_,"+"shareDefault, shareAllowEnable)","updateConfigProperties_(mojoType_, managedProperties_)","updateSecurity_(configProperties_, securityType_)","updateCertItems_(cachedServerCaCerts_, cachedUserCerts_, vpnType_, "+"securityType_, eapProperties_.outer)","updateEapOuter_(eapProperties_.outer)","updateEapCerts_(eapProperties_.*, serverCaCerts_, userCerts_)","updateShowEap_(configProperties_.*, eapProperties_.*, securityType_)","updateVpnType_(configProperties_, vpnType_, ipsecAuthType_)","updateVpnIPsecCerts_(vpnType_, ipsecAuthType_,"+"configProperties_.typeConfig.vpn.ipSec.*, serverCaCerts_, userCerts_)","updateOpenVPNCerts_(vpnType_,"+"configProperties_.typeConfig.vpn.openVpn.*,"+"serverCaCerts_, userCerts_)","updateIsConfigured_(configProperties_.*, securityType_)","updateIsConfigured_(configProperties_, eapProperties_.*)","updateIsConfigured_(configProperties_.typeConfig.wifi.*)","updateIsConfigured_(configProperties_.typeConfig.vpn.*, vpnType_,"+"ipsecAuthType_)"],listeners:{enter:"onEnterEvent_"},MIN_PASSPHRASE_LENGTH:5,networkConfig_:null,created(){this.networkConfig_=MojoInterfaceProviderImpl.getInstance().getMojoServiceRemote()},attached(){this.networkConfig_.getGlobalPolicy().then((response=>{this.globalPolicy_=response.result}))},init(){this.mojoType_=undefined;this.vpnType_=undefined;this.managedProperties_=null;this.configProperties_=undefined;this.propertiesSent_=false;this.cachedServerCaCerts_=undefined;this.cachedUserCerts_=undefined;this.selectedServerCaHash_=undefined;this.selectedUserCertHash_=undefined;this.networkConfig_.getSupportedVpnTypes().then((response=>{this.updateVpnTypeItems_(response.vpnTypes)}));this.initWireGuardKeyConfigType_();if(this.guid){this.networkConfig_.getManagedProperties(this.guid).then((response=>{this.getManagedPropertiesCallback_(response.result)}))}else{const mojoType=OncMojo.getNetworkTypeFromString(this.type);const managedProperties=OncMojo.getDefaultManagedProperties(mojoType,this.guid,this.name);if(mojoType===NetworkType.kWiFi&&this.securityType_!==undefined){managedProperties.typeProperties.wifi.security=this.securityType_}this.managedProperties_=managedProperties;this.mojoType_=mojoType;setTimeout((()=>{this.focusFirstInput_()}))}if(this.mojoType_===NetworkType.kVPN||this.globalPolicy_&&this.globalPolicy_.allowOnlyPolicyWifiNetworksToConnect){this.autoConnect_=false}else{this.autoConnect_=true}this.hiddenNetworkWarning_=this.showHiddenNetworkWarning_();this.updateIsConfigured_()},save(){this.saveAndConnect_(false)},connect(){this.saveAndConnect_(true)},focusPassphrase_(){const passphraseInput=this.$$("#wifi-passphrase");if(passphraseInput){passphraseInput.focus()}},saveAndConnect_(connect){if(!this.managedProperties_||this.propertiesSent_){return}this.propertiesSent_=true;this.error="";if(this.eapProperties_){const dsm=OncMojo.deserializeDomainSuffixMatch(this.serializedDomainSuffixMatch_);if(!dsm){this.setError_("invalidDomainSuffixMatchEntry");this.propertiesSent_=false;return}this.eapProperties_.domainSuffixMatch=dsm;const sanm=OncMojo.deserializeSubjectAltNameMatch(this.serializedSubjectAltNameMatch_);if(!sanm){this.setError_("invalidSubjectAlternativeNameMatchEntry");this.propertiesSent_=false;return}this.eapProperties_.subjectAltNameMatch=sanm;if(!this.eapConfigServerCaCertAllowed_()){this.setError_("missingEapDefaultServerCaSubjectVerification");this.propertiesSent_=false;return}}const propertiesToSet=this.getPropertiesToSet_();if(this.managedProperties_.source===OncSource.kNone){if(this.mojoType_===NetworkType.kWiFi){propertiesToSet.typeConfig.wifi.hiddenSsid=HiddenSsidMode.kDisabled}if(!this.autoConnect_){propertiesToSet.autoConnect={value:false}}this.networkConfig_.configureNetwork(propertiesToSet,this.shareNetwork_).then((response=>{this.createNetworkCallback_(response.guid,response.errorMessage,connect)}))}else{this.networkConfig_.setProperties(this.guid,propertiesToSet).then((response=>{this.setPropertiesCallback_(response.success,response.errorMessage,connect)}))}this.fire("properties-set")},focusFirstInput_(){flush();const e=this.$$("network-config-input:not([readonly]),"+"network-password-input:not([disabled]),"+"network-config-select:not([disabled])");if(e){e.focus()}},onEnterEvent_(event){if(event.composedPath()[0].localName==="network-config-input"||event.composedPath()[0].localName==="network-password-input"){this.onEnterPressedInInput_();event.stopPropagation()}},onEnterPressedInInput_(){if(!this.isConfigured_){return}if(this.connectOnEnter){this.connect()}else{this.save()}},close_(){this.guid="";this.type="";this.securityType_=undefined;this.fire("close")},hasGuid_(){return!!this.guid},isIkev2Supported_(){return this.vpnTypeItems_.includes(VPNConfigType.IKEV2)},isWireGuardSupported_(){return this.vpnTypeItems_.includes(VPNConfigType.WIREGUARD)},updateVpnTypeItems_(responseTypes){this.vpnTypeItems_=[VPNConfigType.L2TP_IPSEC,VPNConfigType.OPEN_VPN];if(responseTypes.includes("ikev2")){this.vpnTypeItems_.unshift(VPNConfigType.IKEV2)}if(responseTypes.includes("wireguard")){this.vpnTypeItems_.push(VPNConfigType.WIREGUARD)}},initWireGuardKeyConfigType_(){let items=[WireGuardKeyConfigType.GENERATE_NEW,WireGuardKeyConfigType.USER_INPUT];if(this.hasGuid_()){items=[...items,WireGuardKeyConfigType.USE_CURRENT];this.wireguardKeyType_=WireGuardKeyConfigType.USE_CURRENT}else{this.wireguardKeyType_=WireGuardKeyConfigType.GENERATE_NEW}this.wireguardKeyTypeItems_=items},onNetworkCertificatesChanged(){this.networkConfig_.getNetworkCertificates().then((response=>{this.set("cachedServerCaCerts_",response.serverCas.slice());this.set("cachedUserCerts_",response.userCerts.slice())}))},getDefaultCert_(type,desc,hash){return{type:type,hash:hash,issuedBy:desc,issuedTo:"",pemOrId:"",availableForNetworkAuth:false,hardwareBacked:false,deviceWide:true}},getActiveBoolean_(property){if(!property){return false}return property.activeValue},getActiveInt32_(property){if(!property){return 0}return property.activeValue},getActiveStringList_(property){if(!property){return undefined}return property.activeValue},getManagedPropertiesCallback_(managedProperties){if(!managedProperties){console.warn("Network no longer exists: "+this.guid);this.close_();return}this.managedProperties_=managedProperties;this.managedEapProperties_=this.getManagedEap_(managedProperties);this.mojoType_=managedProperties.type;if(this.mojoType_===NetworkType.kVPN){let saveCredentials=false;const vpn=managedProperties.typeProperties.vpn;if(vpn.type===VpnType.kOpenVPN){saveCredentials=this.getActiveBoolean_(vpn.openVpn.saveCredentials)}else if(vpn.type===VpnType.kIKEv2){saveCredentials=this.getActiveBoolean_(vpn.ipSec.saveCredentials)}else if(vpn.type===VpnType.kL2TPIPsec){saveCredentials=this.getActiveBoolean_(vpn.ipSec.saveCredentials)||this.getActiveBoolean_(vpn.l2tp.saveCredentials)}else if(vpn.type===VpnType.kWireGuard){saveCredentials=true}this.vpnSaveCredentials_=saveCredentials}this.setError_(managedProperties.errorState);this.updateCertError_();this.focusFirstInput_()},getSecurityItems_(){if(this.mojoType_===NetworkType.kWiFi){return[SecurityType.kNone,SecurityType.kWepPsk,SecurityType.kWpaPsk,SecurityType.kWpaEap]}return[SecurityType.kNone,SecurityType.kWpaEap]},setShareNetwork_(){if(this.mojoType_===undefined||!this.managedProperties_||!this.securityType_===undefined){return}const source=this.managedProperties_.source;if(source!==OncSource.kNone){this.shareNetwork_=source===OncSource.kDevice||source===OncSource.kDevicePolicy;return}if(!this.shareIsVisible_()){this.shareNetwork_=this.shareDefault;return}if(this.shareAllowEnable){if(this.mojoType_===NetworkType.kWiFi){this.shareNetwork_=this.securityType_===SecurityType.kNone;return}}this.shareNetwork_=this.shareDefault},onShareChanged_(event){this.updateSelectedCerts_()},getEAPConfigProperties_(eap){return{anonymousIdentity:OncMojo.getActiveString(eap.anonymousIdentity),clientCertType:OncMojo.getActiveString(eap.clientCertType),clientCertPkcs11Id:OncMojo.getActiveString(eap.clientCertPkcs11Id),domainSuffixMatch:this.getActiveStringList_(eap.domainSuffixMatch)||[],identity:OncMojo.getActiveString(eap.identity),inner:OncMojo.getActiveString(eap.inner),outer:OncMojo.getActiveString(eap.outer)||DEFAULT_EAP_OUTER_PROTOCOL,password:OncMojo.getActiveString(eap.password),saveCredentials:this.getActiveBoolean_(eap.saveCredentials),serverCaPems:this.getActiveStringList_(eap.serverCaPems),subjectAltNameMatch:OncMojo.getActiveValue(eap.subjectAltNameMatch)||[],subjectMatch:OncMojo.getActiveString(eap.subjectMatch),useSystemCas:this.getActiveBoolean_(eap.useSystemCas)}},getIPSecConfigProperties_(ipSec){return{authenticationType:OncMojo.getActiveString(ipSec.authenticationType)||"PSK",clientCertPkcs11Id:OncMojo.getActiveString(ipSec.clientCertPkcs11Id),clientCertType:OncMojo.getActiveString(ipSec.clientCertType),eap:ipSec.eap?this.getEAPConfigProperties_(ipSec.eap):null,group:OncMojo.getActiveString(ipSec.group),ikeVersion:this.getActiveInt32_(ipSec.ikeVersion),localIdentity:OncMojo.getActiveString(ipSec.localIdentity),psk:OncMojo.getActiveString(ipSec.psk),remoteIdentity:OncMojo.getActiveString(ipSec.remoteIdentity),saveCredentials:this.getActiveBoolean_(ipSec.saveCredentials),serverCaPems:this.getActiveStringList_(ipSec.serverCaPems),serverCaRefs:this.getActiveStringList_(ipSec.serverCaRefs)}},getL2TPConfigProperties_(l2tp){return{lcpEchoDisabled:this.getActiveBoolean_(l2tp.lcpEchoDisabled),password:OncMojo.getActiveString(l2tp.password),saveCredentials:this.getActiveBoolean_(l2tp.saveCredentials),username:OncMojo.getActiveString(l2tp.username)}},getOpenVPNConfigProperties_(openVpn){return{clientCertPkcs11Id:OncMojo.getActiveString(openVpn.clientCertPkcs11Id),clientCertType:OncMojo.getActiveString(openVpn.clientCertType),extraHosts:this.getActiveStringList_(openVpn.extraHosts),otp:"",password:OncMojo.getActiveString(openVpn.password),saveCredentials:this.getActiveBoolean_(openVpn.saveCredentials),serverCaPems:this.getActiveStringList_(openVpn.serverCaPems),serverCaRefs:this.getActiveStringList_(openVpn.serverCaRefs),userAuthenticationType:OncMojo.getActiveString(openVpn.userAuthenticationType),username:OncMojo.getActiveString(openVpn.username)}},getWireGuardConfigProperties_(wireguard){const config={ipAddresses:this.getActiveStringList_(wireguard.ipAddresses)??[],privateKey:OncMojo.getActiveString(wireguard.privateKey),peers:[]};if(wireguard.peers&&wireguard.peers.activeValue){for(const peer of wireguard.peers.activeValue){const peerCopied=Object.assign({},peer);if(this.hasGuid_()){peerCopied.presharedKey=PLACEHOLDER_CREDENTIAL}config.peers.push(peerCopied)}}return config},updateConfigProperties_(){if(this.mojoType_===undefined||!this.managedProperties_){return}this.showEap_=null;this.showVpn_=null;this.vpnType_=undefined;const managedProperties=this.managedProperties_;const configProperties=OncMojo.getDefaultConfigProperties(managedProperties.type);configProperties.name=OncMojo.getActiveString(managedProperties.name);let autoConnect;let security=SecurityType.kNone;switch(managedProperties.type){case NetworkType.kWiFi:const wifi=managedProperties.typeProperties.wifi;const configWifi=configProperties.typeConfig.wifi;autoConnect=this.getActiveBoolean_(wifi.autoConnect);configWifi.passphrase=OncMojo.getActiveString(wifi.passphrase);configWifi.ssid=OncMojo.getActiveString(wifi.ssid);if(wifi.eap){configWifi.eap=this.getEAPConfigProperties_(wifi.eap)}security=wifi.security;configWifi.security=security;break;case NetworkType.kEthernet:const eap=managedProperties.typeProperties.ethernet.eap?this.getEAPConfigProperties_(managedProperties.typeProperties.ethernet.eap):undefined;security=eap?SecurityType.kWpaEap:SecurityType.kNone;const auth=security===SecurityType.kWpaEap?"8021X":"None";configProperties.typeConfig.ethernet.authentication=auth;configProperties.typeConfig.ethernet.eap=eap;break;case NetworkType.kVPN:const vpn=managedProperties.typeProperties.vpn;const vpnType=vpn.type;const configVpn=configProperties.typeConfig.vpn;configVpn.host=OncMojo.getActiveString(vpn.host);configVpn.type={value:vpnType};if(vpnType===VpnType.kIKEv2){if(!this.isIkev2Supported_()){break}assert(vpn.ipSec);configVpn.ipSec=this.getIPSecConfigProperties_(vpn.ipSec)}else if(vpnType===VpnType.kL2TPIPsec){assert(vpn.ipSec);configVpn.ipSec=this.getIPSecConfigProperties_(vpn.ipSec);assert(vpn.l2tp);configVpn.l2tp=this.getL2TPConfigProperties_(vpn.l2tp)}else if(vpnType===VpnType.kOpenVPN){assert(vpn.openVpn);configVpn.openVpn=this.getOpenVPNConfigProperties_(vpn.openVpn)}else if(vpnType===VpnType.kWireGuard){if(!this.isWireGuardSupported_()){break}assert(vpn.wireguard);configVpn.wireguard=this.getWireGuardConfigProperties_(vpn.wireguard);this.ipAddressInput_=configVpn.wireguard.ipAddresses.join(",");const staticIpConfig=managedProperties.staticIpConfig;if(staticIpConfig&&staticIpConfig.nameServers){this.nameServersInput_=staticIpConfig.nameServers.activeValue.join(",")}}else{assertNotReached()}security=SecurityType.kNone;break}if(autoConnect!==undefined){configProperties.autoConnect={value:autoConnect}}const requestCertificates=this.configProperties_===undefined;this.configProperties_=configProperties;this.securityType_=security;this.set("eapProperties_",this.getEap_(this.configProperties_));if(!this.eapProperties_){this.showEap_=null}else{this.serializedDomainSuffixMatch_=OncMojo.serializeDomainSuffixMatch(this.eapProperties_.domainSuffixMatch);this.serializedSubjectAltNameMatch_=OncMojo.serializeSubjectAltNameMatch(this.eapProperties_.subjectAltNameMatch)}if(managedProperties.type===NetworkType.kVPN){this.vpnType_=this.getVpnTypeFromProperties_(this.configProperties_);this.ipsecAuthType_=this.getIpsecAuthTypeFromProperties_(this.configProperties_)}if(requestCertificates){this.onNetworkCertificatesChanged()}},updateSecurity_(){if(this.securityType_===undefined||!this.configProperties_){return}const type=this.mojoType_;if(typeof this.securityType_==="string"){this.securityType_=Number.parseInt(this.securityType_,10)}const security=this.securityType_;if(type===NetworkType.kWiFi){this.configProperties_.typeConfig.wifi.security=security}else if(type===NetworkType.kEthernet){const auth=security===SecurityType.kWpaEap?"8021X":"None";this.configProperties_.typeConfig.ethernet.authentication=auth}let eap;if(security===SecurityType.kWpaEap){eap=this.getEap_(this.configProperties_,true);eap.outer=eap.outer||DEFAULT_EAP_OUTER_PROTOCOL}this.setEap_(eap)},updateEapOuter_(){const eap=this.eapProperties_;if(!eap||!eap.outer){return}const innerItems=this.getEapInnerItems_(eap.outer);if(innerItems.length>0){if(!eap.inner||innerItems.indexOf(eap.inner)<0){this.set("eapProperties_.inner",innerItems[0])}}else{this.set("eapProperties_.inner",undefined)}if(eap.outer!=="EAP-TLS"){this.set("eapProperties_.clientCertType","None");this.set("eapProperties_.clientCertPkcs11Id","");this.selectedUserCertHash_=NO_USER_CERT_HASH}},updateEapCerts_(){if(this.mojoType_===NetworkType.kVPN){return}const eap=this.eapProperties_;const pem=eap&&eap.serverCaPems?eap.serverCaPems[0]:"";const certId=eap&&eap.clientCertType==="PKCS11Id"?eap.clientCertPkcs11Id:"";this.setSelectedCerts_(pem,certId)},updateShowEap_(){if(!this.eapProperties_||this.securityType_===SecurityType.kNone){this.showEap_=null;this.updateCertError_();return}const outer=this.eapProperties_.outer;switch(this.mojoType_){case NetworkType.kWiFi:case NetworkType.kEthernet:this.showEap_={Outer:true,Inner:outer==="PEAP"||outer==="EAP-TTLS",ServerCA:outer!=="LEAP",EapServerCertMatch:outer==="EAP-TLS"||outer==="EAP-TTLS"||outer==="PEAP",UserCert:outer==="EAP-TLS",Identity:true,Password:outer!=="EAP-TLS",AnonymousIdentity:outer==="PEAP"||outer==="EAP-TTLS"};break}this.updateCertError_()},getEap_(properties,opt_create){let eap;if(properties.typeConfig.wifi){eap=properties.typeConfig.wifi.eap}else if(properties.typeConfig.ethernet){eap=properties.typeConfig.ethernet.eap}else if(properties.typeConfig.vpn&&properties.typeConfig.vpn.ipSec){eap=properties.typeConfig.vpn.ipSec.eap}if(opt_create){return eap||{saveCredentials:false,useSystemCas:false,domainSuffixMatch:[],subjectAltNameMatch:[]}}return eap||null},setEap_(eapProperties){switch(this.mojoType_){case NetworkType.kWiFi:this.configProperties_.typeConfig.wifi.eap=eapProperties;break;case NetworkType.kEthernet:this.configProperties_.typeConfig.ethernet.eap=eapProperties;break}this.set("eapProperties_",eapProperties)},getManagedEap_(managedProperties){let managedEap;switch(managedProperties.type){case NetworkType.kWiFi:managedEap=managedProperties.typeProperties.wifi.eap;break;case NetworkType.kEthernet:managedEap=managedProperties.typeProperties.ethernet.eap;break;case NetworkType.kVPN:if(managedProperties.typeProperties.vpn.ipSec){managedEap=managedProperties.typeProperties.vpn.ipSec.eap}break}return managedEap||null},getVpnTypeFromProperties_(properties){const vpn=properties.typeConfig.vpn;assert(vpn);if(!!vpn.type&&vpn.type.value===VpnType.kIKEv2){return VPNConfigType.IKEV2}else if(!!vpn.type&&vpn.type.value===VpnType.kL2TPIPsec){return VPNConfigType.L2TP_IPSEC}else if(!!vpn.type&&vpn.type.value===VpnType.kWireGuard){return VPNConfigType.WIREGUARD}return VPNConfigType.OPEN_VPN},getIpsecAuthTypeFromProperties_(properties){const vpn=properties.typeConfig.vpn;assert(vpn);if(!vpn.type||!(vpn.type.value===VpnType.kL2TPIPsec||vpn.type.value===VpnType.kIKEv2)){return IpsecAuthType.PSK}if(vpn.ipSec.authenticationType===IpsecAuthType.PSK){return IpsecAuthType.PSK}else if(vpn.ipSec.authenticationType===IpsecAuthType.CERT){return IpsecAuthType.CERT}else if(vpn.ipSec.authenticationType===IpsecAuthType.EAP){return IpsecAuthType.EAP}assertNotReached()},updateWireGuardKeyType_(){return this.wireguardKeyType_===WireGuardKeyConfigType.USER_INPUT},updateCertItems_(){if(this.configProperties_===undefined||this.cachedServerCaCerts_===undefined||this.cachedUserCerts_===undefined){return}const isOpenVpn=this.vpnType_===VPNConfigType.OPEN_VPN;const isIpsec=this.vpnType_===VPNConfigType.L2TP_IPSEC||this.vpnType_===VPNConfigType.IKEV2;let caCerts=this.cachedServerCaCerts_.slice();if(!isOpenVpn&&!isIpsec){caCerts.unshift(this.getDefaultCert_(CertificateType.kServerCA,this.i18n("networkCAUseDefault"),DEFAULT_HASH))}if(!isIpsec){caCerts.push(this.getDefaultCert_(CertificateType.kServerCA,this.i18n("networkCADoNotCheck"),DO_NOT_CHECK_HASH))}if(!caCerts.length){caCerts=[this.getDefaultCert_(CertificateType.kServerCA,this.i18n("networkCertificateNoneInstalled"),NO_CERTS_HASH)]}this.set("serverCaCerts_",caCerts);let userCerts=this.cachedUserCerts_.slice();userCerts.forEach((function(cert){if(!cert.availableForNetworkAuth){cert.hash=""}}));const isEap=this.securityType_===SecurityType.kWpaEap;const isEapTls=isEap&&this.eapProperties_.outer==="EAP-TLS";const isUserCertOptional=isOpenVpn||isEap&&!isEapTls;if(isUserCertOptional){userCerts.unshift(this.getDefaultCert_(CertificateType.kUserCert,this.i18n("networkNoUserCert"),NO_USER_CERT_HASH))}if(!userCerts.length){userCerts=[this.getDefaultCert_(CertificateType.kUserCert,this.i18n("networkCertificateNoneInstalled"),NO_CERTS_HASH)]}this.set("userCerts_",userCerts);this.updateSelectedCerts_();this.updateCertError_()},updateVpnType_(){if(this.configProperties_===undefined||this.vpnType_===undefined){return}const vpn=this.configProperties_.typeConfig.vpn;if(!vpn){this.showVpn_=null;this.updateCertError_();return}switch(this.vpnType_){case VPNConfigType.IKEV2:vpn.type={value:VpnType.kIKEv2};if(!vpn.ipSec){this.ipsecAuthType_=IpsecAuthType.EAP;vpn.ipSec={authenticationType:this.ipsecAuthType_,ikeVersion:2,saveCredentials:false}}if(this.ipsecAuthType_===IpsecAuthType.EAP&&!vpn.ipSec.eap){vpn.ipSec.eap={domainSuffixMatch:[],outer:"MSCHAPv2",saveCredentials:false,subjectAltNameMatch:[],useSystemCas:false};this.eapProperties_=vpn.ipSec.eap}break;case VPNConfigType.L2TP_IPSEC:vpn.type={value:VpnType.kL2TPIPsec};if(this.ipsecAuthType_!==IpsecAuthType.PSK&&this.ipsecAuthType_!==IpsecAuthType.CERT){this.ipsecAuthType_=IpsecAuthType.PSK}if(!vpn.ipSec){vpn.ipSec={authenticationType:this.ipsecAuthType_,ikeVersion:1,saveCredentials:false}}break;case VPNConfigType.OPEN_VPN:vpn.type={value:VpnType.kOpenVPN};vpn.openVpn=vpn.openVpn||{saveCredentials:false};break;case VPNConfigType.WIREGUARD:vpn.type={value:VpnType.kWireGuard};vpn.wireguard=vpn.wireguard||{peers:[{}]};break;default:assertNotReached()}const isIpsec=this.vpnType_===VPNConfigType.L2TP_IPSEC||this.vpnType_===VPNConfigType.IKEV2;const ipsecAuthIsPsk=this.ipsecAuthType_===IpsecAuthType.PSK;const ipsecAuthIsEap=this.ipsecAuthType_===IpsecAuthType.EAP;const ipsecAuthIsCert=this.ipsecAuthType_===IpsecAuthType.CERT;const isOpenvpn=this.vpnType_===VPNConfigType.OPEN_VPN;this.showVpn_={IPsec:isIpsec,IPsecPSK:isIpsec&&ipsecAuthIsPsk,IPsecEAP:isIpsec&&ipsecAuthIsEap,IKEv2:this.vpnType_===VPNConfigType.IKEV2,OpenVPN:isOpenvpn,WireGuard:this.vpnType_===VPNConfigType.WIREGUARD,ServerCA:isIpsec&&!ipsecAuthIsPsk||isOpenvpn,UserCert:isIpsec&&ipsecAuthIsCert||isOpenvpn};if(vpn.type.value===VpnType.kL2TPIPsec&&!vpn.l2tp){vpn.l2tp={lcpEchoDisabled:false,password:"",saveCredentials:false,username:""}}if(vpn.type.value!==VpnType.kL2TPIPsec&&vpn.type.value!==VpnType.kIKEv2){delete vpn.ipSec}if(vpn.type.value!==VpnType.kL2TPIPsec){delete vpn.l2tp}if(vpn.type.value!==VpnType.kOpenVPN){delete vpn.openVpn}if(vpn.type.value!==VpnType.kWireGuard){delete vpn.wireguard}this.updateCertError_()},updateVpnIPsecAuthTypeItems_(){this.ipsecAuthTypeItems_=[IpsecAuthType.PSK,IpsecAuthType.CERT];if(this.vpnType_===VPNConfigType.IKEV2){this.ipsecAuthTypeItems_.push(IpsecAuthType.EAP)}},updateVpnIPsecCerts_(){if(this.vpnType_!==VPNConfigType.L2TP_IPSEC&&this.vpnType_!==VPNConfigType.IKEV2){return}if(this.ipsecAuthType_===IpsecAuthType.PSK){return}const ipSec=this.configProperties_.typeConfig.vpn.ipSec;if(!ipSec){return}const pem=ipSec.serverCaPems?ipSec.serverCaPems[0]:undefined;const certId=ipSec.clientCertType==="PKCS11Id"?ipSec.clientCertPkcs11Id:"";this.setSelectedCerts_(pem,certId)},updateOpenVPNCerts_(){if(this.vpnType_!==VPNConfigType.OPEN_VPN){return}const openVpn=this.configProperties_.typeConfig.vpn.openVpn;if(!openVpn){return}const pem=openVpn.serverCaPems?openVpn.serverCaPems[0]:undefined;const certId=openVpn.clientCertType==="PKCS11Id"?openVpn.clientCertPkcs11Id:"";this.setSelectedCerts_(pem,certId)},updateCertError_(){const noCertsError="networkErrorNoUserCertificate";const noValidCertsError="networkErrorNotAvailableForNetworkAuth";if(this.error&&this.error!==noCertsError&&this.error!==noValidCertsError){return}const requireCerts=this.showEap_&&this.showEap_.UserCert||this.showVpn_&&this.showVpn_.UserCert;if(!requireCerts){this.setError_("");return}if(!this.userCerts_.length||this.userCerts_[0].hash===NO_CERTS_HASH){this.setError_(noCertsError);return}const validUserCert=this.userCerts_.find((function(cert){return!!cert.hash}));if(!validUserCert){this.setError_(noValidCertsError);return}this.setError_("");return},setSelectedCerts_(pem,certId){if(pem){const serverCa=this.serverCaCerts_.find((function(cert){return cert.pemOrId===pem}));if(serverCa){this.selectedServerCaHash_=serverCa.hash}}if(certId){const userCert=this.userCerts_.find((function(cert){return cert.pemOrId.indexOf(certId)>=0}));if(userCert){this.selectedUserCertHash_=userCert.hash}}this.updateSelectedCerts_();this.updateIsConfigured_()},findCert_(certs,hash){if(!hash){return undefined}return certs.find((cert=>cert.hash===hash))},updateSelectedCerts_(){if(!this.serverCaCerts_.length||!this.userCerts_.length){return}const eap=this.eapProperties_;this.deviceCertsOnly_=this.shareNetwork_&&!!eap&&eap.outer==="EAP-TLS";const caCert=this.findCert_(this.serverCaCerts_,this.selectedServerCaHash_);if(!caCert||this.deviceCertsOnly_&&!caCert.deviceWide){this.selectedServerCaHash_=undefined}if(!this.selectedServerCaHash_){if(eap&&eap.useSystemCas){this.selectedServerCaHash_=DEFAULT_HASH}else if(!this.guid&&this.serverCaCerts_[0]){let cert=this.serverCaCerts_[0];if(cert.hash===DEFAULT_HASH&&this.isRealCertUsableForNetworkAuth_(this.serverCaCerts_[1])){cert=this.serverCaCerts_[1]}this.selectedServerCaHash_=cert.hash}else{this.selectedServerCaHash_=DO_NOT_CHECK_HASH}}const userCert=this.findCert_(this.userCerts_,this.selectedUserCertHash_);if(!userCert||this.deviceCertsOnly_&&!userCert.deviceWide){this.selectedUserCertHash_=undefined}if(!this.selectedUserCertHash_){for(let i=0;i<this.userCerts_.length;++i){const userCert=this.userCerts_[i];if(userCert&&(!this.deviceCertsOnly_||userCert.deviceWide)){this.selectedUserCertHash_=userCert.hash;break}}}},isRealCertUsableForNetworkAuth_(cert){return!!cert&&cert.hash!==DO_NOT_CHECK_HASH&&cert.hash!==DEFAULT_HASH},getIsConfigured_(){if(this.securityType_===undefined||!this.configProperties_){return false}const typeConfig=this.configProperties_.typeConfig;if(typeConfig.vpn){if(this.vpnType_===VPNConfigType.IKEV2&&!this.isIkev2Supported_()){return false}return this.vpnIsConfigured_()}if(typeConfig.wifi){if(!typeConfig.wifi.ssid){return false}if(this.configRequiresPassphrase_){const passphrase=typeConfig.wifi.passphrase;if(!passphrase||passphrase.length<this.MIN_PASSPHRASE_LENGTH){return false}}}if(this.securityType_===SecurityType.kWpaEap){return this.eapIsConfigured_()}return true},updateIsConfigured_(){this.isConfigured_=this.getIsConfigured_()},isWiFi_(networkType){return networkType===NetworkType.kWiFi},setEnableSave_(){this.enableSave=this.isConfigured_&&!!this.managedProperties_},setEnableConnect_(){this.enableConnect=this.isConfigured_&&!this.propertiesSent_},securityIsVisible_(networkType){return networkType===NetworkType.kWiFi||networkType===NetworkType.kEthernet},securityIsEnabled_(){return!this.guid||this.mojoType_===NetworkType.kEthernet},shareIsVisible_(){if(!this.managedProperties_){return false}return this.managedProperties_.source===OncSource.kNone&&this.managedProperties_.type===NetworkType.kWiFi},shareIsEnabled_(){if(!this.managedProperties_){return false}if(!this.shareAllowEnable||this.managedProperties_.source!==OncSource.kNone){return false}return true},networkIsEphemeral_(){if(!loadTimeData.getBoolean("ephemeralNetworkPoliciesEnabled")){return false}if(!this.globalPolicy_||!this.globalPolicy_.userCreatedNetworkConfigurationsAreEphemeral){return false}if(!this.managedProperties_){return false}return this.managedProperties_.source===OncSource.kNone},configCanAutoConnect_(){return loadTimeData.getBoolean("showHiddenNetworkWarning")&&this.mojoType_===NetworkType.kWiFi},autoConnectDisabled_(){return this.isAutoConnectEnforcedByPolicy_()},isAutoConnectEnforcedByPolicy_(){return!!this.globalPolicy_&&!!this.globalPolicy_.allowOnlyPolicyNetworksToAutoconnect},showHiddenNetworkWarning_(){flush();return loadTimeData.getBoolean("showHiddenNetworkWarning")&&this.autoConnect_&&!this.hasGuid_()},updateHiddenNetworkWarning_(){this.hiddenNetworkWarning_=this.showHiddenNetworkWarning_()},selectedServerCaHashIsValid_(){return!!this.selectedServerCaHash_&&this.selectedServerCaHash_!==NO_CERTS_HASH},selectedUserCertHashIsValid_(){return!!this.selectedUserCertHash_&&this.selectedUserCertHash_!==NO_CERTS_HASH},eapIsConfigured_(){if(!this.configProperties_){return false}const eap=this.getEap_(this.configProperties_);if(!eap){return false}if(eap.outer!=="EAP-TLS"){return true}if(this.deviceCertsOnly_){let cert=this.findCert_(this.userCerts_,this.selectedUserCertHash_);if(!cert||!cert.deviceWide){return false}cert=this.findCert_(this.serverCaCerts_,this.selectedServerCaHash_);if(!cert.deviceWide){return false}}return this.selectedUserCertHashIsValid_()},ikev2IsConfigured_(){const vpn=this.configProperties_.typeConfig.vpn;switch(this.ipsecAuthType_){case IpsecAuthType.PSK:return!!vpn.ipSec.psk;case IpsecAuthType.CERT:return this.selectedServerCaHashIsValid_()&&this.selectedUserCertHashIsValid_();case IpsecAuthType.EAP:return this.selectedServerCaHashIsValid_()&&!!this.eapProperties_.identity;default:assertNotReached()}},l2tpIpsecIsConfigured_(){const vpn=this.configProperties_.typeConfig.vpn;switch(this.ipsecAuthType_){case IpsecAuthType.PSK:return!!vpn.l2tp.username&&!!vpn.ipSec.psk;case IpsecAuthType.CERT:return!!vpn.l2tp.username&&this.selectedServerCaHashIsValid_()&&this.selectedUserCertHashIsValid_();default:assertNotReached()}},isValidWireGuardKey_(input){return!!input&&input.length===44&&input.charAt(43)==="="&&!!input.match(/^[a-z0-9+/=]+$/i)},isValidWireGuardIpAddresses_(ipAddresses){if(!ipAddresses){return false}let v4Count=0;let v6Count=0;for(const ipAddress of ipAddresses.split(",")){if(ipAddress.match(IPV4_ADDR_REGEX)){v4Count++}else if(ipAddress.match(IPV6_ADDR_REGEX)){v6Count++}else{return false}}if(v4Count>1||v6Count>1){return false}return v4Count+v6Count>0},isWireGuardConfigurationValid_(wireguard,ipAddresses){if(!wireguard){return false}if(!this.isValidWireGuardIpAddresses_(ipAddresses)){return false}if(this.isWireGuardUserPrivateKeyInputActive_&&!this.isValidWireGuardKey_(wireguard.privateKey)){return false}const peer=wireguard.peers[0];if(!this.isValidWireGuardKey_(peer.publicKey)){return false}if(!!peer.presharedKey&&peer.presharedKey!==PLACEHOLDER_CREDENTIAL&&!this.isValidWireGuardKey_(peer.presharedKey)){return false}if(!peer.endpoint||!peer.endpoint.match(/^\[?[a-zA-Z0-9\-\.:]+\]?:[0-9]+$/i)){return false}if(!peer.allowedIps||!peer.allowedIps.split(",").every((s=>s.match(IP_CIDR_REGEX)))){return false}return true},vpnIsConfigured_(){const vpn=this.configProperties_.typeConfig.vpn;if(!this.configProperties_.name||!vpn||!vpn.host&&this.vpnType_!==VPNConfigType.WIREGUARD){return false}switch(this.vpnType_){case VPNConfigType.IKEV2:return this.ikev2IsConfigured_();case VPNConfigType.L2TP_IPSEC:return this.l2tpIpsecIsConfigured_();case VPNConfigType.OPEN_VPN:return true;case VPNConfigType.WIREGUARD:return this.isWireGuardConfigurationValid_(vpn.wireguard,this.ipAddressInput_)}return false},getPropertiesToSet_(){const propertiesToSet=Object.assign({},this.configProperties_);delete propertiesToSet.autoConnect;if(this.guid){propertiesToSet.guid=this.guid}const eap=this.getEap_(propertiesToSet);if(eap){this.setEapProperties_(eap)}if(this.mojoType_===NetworkType.kVPN){const vpnConfig=propertiesToSet.typeConfig.vpn;if(vpnConfig.host!==undefined){vpnConfig.host=vpnConfig.host.trim()}const vpnType=vpnConfig.type.value;if(vpnType===VpnType.kOpenVPN){this.setOpenVPNProperties_(propertiesToSet)}else{delete propertiesToSet.typeConfig.vpn.openVpn}if(vpnType===VpnType.kIKEv2){this.setVpnIkev2Properties_(propertiesToSet)}else if(vpnType===VpnType.kL2TPIPsec){this.setVpnL2tpIpsecProperties_(propertiesToSet)}else{delete propertiesToSet.typeConfig.vpn.ipSec;delete propertiesToSet.typeConfig.vpn.l2tp}if(vpnType===VpnType.kWireGuard){this.setWireGuardProperties_(propertiesToSet)}else{delete propertiesToSet.typeConfig.vpn.wireguard}}return propertiesToSet},getServerCaPems_(){const caHash=this.selectedServerCaHash_||"";if(!caHash||caHash===DO_NOT_CHECK_HASH||caHash===DEFAULT_HASH){return[]}const serverCa=this.findCert_(this.serverCaCerts_,caHash);return serverCa&&serverCa.pemOrId?[serverCa.pemOrId]:[]},getUserCertPkcs11Id_(){const userCertHash=this.selectedUserCertHash_||"";if(!this.selectedUserCertHashIsValid_()||userCertHash===NO_USER_CERT_HASH){return""}const userCert=this.findCert_(this.userCerts_,userCertHash);return userCert&&userCert.pemOrId||""},setEapProperties_(eap){eap.useSystemCas=this.selectedServerCaHash_===DEFAULT_HASH;eap.serverCaPems=this.getServerCaPems_();const pkcs11Id=this.getUserCertPkcs11Id_();eap.clientCertType=pkcs11Id?"PKCS11Id":"None";eap.clientCertPkcs11Id=pkcs11Id||""},setVpnIkev2Properties_(propertiesToSet){const ipsec=propertiesToSet.typeConfig.vpn.ipSec;assert(!!ipsec);ipsec.authenticationType=this.ipsecAuthType_;if(ipsec.authenticationType!==IpsecAuthType.PSK){ipsec.psk="";ipsec.serverCaPems=this.getServerCaPems_()}if(ipsec.authenticationType===IpsecAuthType.CERT){ipsec.clientCertType="PKCS11Id";ipsec.clientCertPkcs11Id=this.getUserCertPkcs11Id_()}else{delete ipsec.clientCertType;delete ipsec.clientCertPkcs11Id}if(ipsec.authenticationType===IpsecAuthType.EAP){const eap=ipsec.eap;ipsec.eap={domainSuffixMatch:[],identity:eap.identity,outer:"MSCHAPv2",password:eap.password,saveCredentials:this.vpnSaveCredentials_,subjectAltNameMatch:[],useSystemCas:false}}else{delete ipsec.eap}ipsec.ikeVersion=2;ipsec.saveCredentials=this.vpnSaveCredentials_},setOpenVPNProperties_(propertiesToSet){const openVpn=propertiesToSet.typeConfig.vpn.openVpn;assert(!!openVpn);openVpn.serverCaPems=this.getServerCaPems_();const pkcs11Id=this.getUserCertPkcs11Id_();openVpn.clientCertType=pkcs11Id?"PKCS11Id":"None";openVpn.clientCertPkcs11Id=pkcs11Id||"";if(openVpn.password){openVpn.userAuthenticationType=openVpn.otp?"PasswordAndOTP":"Password"}else if(openVpn.otp){openVpn.userAuthenticationType="OTP"}else{openVpn.userAuthenticationType="None"}openVpn.saveCredentials=this.vpnSaveCredentials_;propertiesToSet.typeConfig.vpn.openVpn=openVpn},setWireGuardProperties_(propertiesToSet){const wireguard=propertiesToSet.typeConfig.vpn.wireguard;assert(!!wireguard);propertiesToSet.typeConfig.vpn.host="wireguard";propertiesToSet.ipAddressConfigType="Static";wireguard.ipAddresses=this.ipAddressInput_.split(",");propertiesToSet.staticIpConfig={gateway:this.ipAddressInput_,routingPrefix:32,type:IPConfigType.kIPv4};if(this.nameServersInput_){propertiesToSet.nameServersConfigType="Static";propertiesToSet.staticIpConfig.nameServers=this.nameServersInput_.split(",")}if(this.wireguardKeyType_===WireGuardKeyConfigType.USE_CURRENT){delete wireguard.privateKey}else if(this.wireguardKeyType_===WireGuardKeyConfigType.GENERATE_NEW){wireguard.privateKey=""}assert(!!wireguard.peers);for(const peer of wireguard.peers){if(peer.presharedKey===PLACEHOLDER_CREDENTIAL){delete peer.presharedKey}else if(peer.presharedKey===undefined){peer.presharedKey=""}}},setVpnL2tpIpsecProperties_(propertiesToSet){const vpn=propertiesToSet.typeConfig.vpn;assert(vpn.ipSec);assert(vpn.l2tp);vpn.ipSec.authenticationType=this.ipsecAuthType_;if(vpn.ipSec.authenticationType===IpsecAuthType.CERT){vpn.ipSec.clientCertType="PKCS11Id";vpn.ipSec.clientCertPkcs11Id=this.getUserCertPkcs11Id_();vpn.ipSec.serverCaPems=this.getServerCaPems_()}vpn.ipSec.ikeVersion=1;vpn.ipSec.saveCredentials=this.vpnSaveCredentials_;vpn.l2tp.saveCredentials=this.vpnSaveCredentials_;delete vpn.ipSec.eap;delete vpn.ipSec.localIdentity;delete vpn.ipSec.remoteIdentity},setPropertiesCallback_(success,errorMessage,connect){if(!success){console.warn("Unable to set properties for: "+this.guid+" Error: "+errorMessage);this.propertiesSent_=false;this.setError_(errorMessage);this.focusPassphrase_();return}if(connect&&this.managedProperties_.connectionState===ConnectionStateType.kNotConnected){this.startConnect_(this.guid)}else{this.close_()}},createNetworkCallback_(guid,errorMessage,connect){if(!guid){console.warn("Unable to configure network: "+guid+" Error: "+errorMessage);this.propertiesSent_=false;this.setError_(errorMessage);this.focusPassphrase_();return}if(connect){this.startConnect_(guid)}else{this.close_()}},startConnect_(guid){this.networkConfig_.startConnect(guid).then((response=>{const result=response.result;if(result===StartConnectResult.kSuccess||result===StartConnectResult.kInvalidGuid||result===StartConnectResult.kInvalidState||result===StartConnectResult.kCanceled){this.close_();return}this.setError_(response.message);console.warn("Error connecting to network: "+guid+": "+result.toString()+" Message: "+response.message);this.propertiesSent_=false}))},computeConfigRequiresPassphrase_(mojoType,securityType){return mojoType===NetworkType.kWiFi&&(securityType===SecurityType.kWepPsk||securityType===SecurityType.kWpaPsk)},getEapInnerItems_(outer){if(outer==="PEAP"){return this.eapInnerItemsPeap_}if(outer==="EAP-TTLS"){return this.eapInnerItemsTtls_}return[]},setError_(error){this.error=error||""},getManagedSecurity_(managedProperties){const policySource=OncMojo.getEnforcedPolicySourceFromOncSource(managedProperties.source);if(policySource===PolicySource.kNone){return undefined}switch(managedProperties.type){case NetworkType.kWiFi:return{activeValue:OncMojo.getSecurityTypeString(managedProperties.typeProperties.wifi.security),policySource:policySource};case NetworkType.kEthernet:return{activeValue:OncMojo.getActiveString(managedProperties.typeProperties.ethernet.authentication),policySource:policySource}}return undefined},getManagedVpnSaveCredentials_(managedProperties){const vpn=managedProperties.typeProperties.vpn;switch(vpn.type){case VpnType.kIKEv2:return vpn.ipSec.saveCredentials||OncMojo.createManagedBool(false);case VpnType.kOpenVPN:return vpn.openVpn.saveCredentials||OncMojo.createManagedBool(false);case VpnType.kL2TPIPsec:return vpn.ipSec.saveCredentials||vpn.l2tp.saveCredentials||OncMojo.createManagedBool(false);case VpnType.kWireGuard:return OncMojo.createManagedBool(true)}assertNotReached();return undefined},getManagedVpnServerCaRefs_(managedProperties){const vpn=managedProperties.typeProperties.vpn;switch(vpn.type){case VpnType.kOpenVPN:return vpn.openVpn.serverCaRefs;case VpnType.kIKEv2:case VpnType.kL2TPIPsec:return vpn.ipSec.serverCaRefs}assertNotReached();return undefined},getManagedVpnClientCertType_(managedProperties){const vpn=managedProperties.typeProperties.vpn;switch(vpn.type){case VpnType.kOpenVPN:return vpn.openVpn.clientCertType||OncMojo.createManagedString("");case VpnType.kIKEv2:case VpnType.kL2TPIPsec:return vpn.ipSec.clientCertType||OncMojo.createManagedString("")}assertNotReached();return undefined},onWifiPasswordInputKeypress_(){if(this.error==="bad-passphrase"){this.setError_("")}},eapConfigServerCaCertAllowed_(){if(loadTimeData.getBoolean("eapDefaultCasWithoutSubjectVerificationAllowed")){return true}const outer=this.eapProperties_.outer;if(!(outer==="EAP-TLS"||outer==="EAP-TTLS"||outer==="PEAP")){return true}if(this.selectedServerCaHash_!==DEFAULT_HASH){return true}const isPropertyManaged=!!this.managedEapProperties_&&!!this.managedEapProperties_.useSystemCas&&this.managedEapProperties_.useSystemCas.policySource!==PolicySource.kNone;if(isPropertyManaged){return true}if(this.eapProperties_.domainSuffixMatch.length!=0||this.eapProperties_.subjectAltNameMatch.length!=0){return true}return false}});const template=html`<!-- These icons were converted from source .svg files. -->

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
`;document.head.appendChild(template.content);function getTemplate$2(){return html`<!--_html_template_start_--><style include="cr-hidden-style">
  :host {
    display: inline-flex;
    overflow: hidden;
    padding: 2px;
    position: relative;
  }

  #icon {
    background: var(--network-icon-fill-color, var(--cros-icon-color-primary, rgba(0, 0, 0, 0.65)));
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

  #icon.cellular-carrier-locked {
    -webkit-mask: url(chrome://resources/ash/common/network/cellular_carrier_locked.svg);
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
Polymer({_template:getTemplate$2(),is:"network-icon",behaviors:[I18nBehavior],properties:{networkState:Object,hotspotInfo:Object,deviceState:{type:Object,value:null},isListItem:{type:Boolean,value:false},showTechnologyBadge:{type:Boolean,value:true},ariaLabel:{type:String,reflectToAttribute:true,computed:"computeAriaLabel_(locale, networkState, hotspotInfo)"},isUserLoggedIn_:{type:Boolean,value(){return loadTimeData.valueExists("isUserLoggedIn")&&loadTimeData.getBoolean("isUserLoggedIn")}},isCellularCarrierLockEnabled_:{type:Boolean,value(){return loadTimeData.valueExists("isCellularCarrierLockEnabled")&&loadTimeData.getBoolean("isCellularCarrierLockEnabled")}}},networkIconCount_:5,getIconClass_(){if(!this.networkState&&!this.hotspotInfo){return""}if(this.hotspotInfo){if(this.hotspotInfo.state===HotspotState.kEnabled){return"hotspot-on"}if(this.hotspotInfo.state===HotspotState.kEnabling){return"hotspot-connecting"}return"hotspot-off"}const type=this.networkState.type;if(type===NetworkType.kEthernet){return"ethernet"}if(type===NetworkType.kVPN){return"vpn"}const prefix=OncMojo.networkTypeIsMobile(type)?"cellular-":"wifi-";if(this.isPSimPendingActivationWhileLoggedOut_()){return prefix+"not-activated"}if(this.networkState.type===NetworkType.kCellular&&this.networkState.typeState.cellular.simLocked){if(this.isCellularCarrierLockEnabled_&&this.networkState.typeState.cellular.simLockType==="network-pin"){return prefix+"carrier-locked"}return prefix+"locked"}if(!this.isListItem&&!this.networkState.guid){const device=this.deviceState;if(!device||device.deviceState===DeviceStateType.kEnabled||device.deviceState===DeviceStateType.kEnabling){return prefix+"no-network"}return prefix+"off"}const connectionState=this.networkState.connectionState;if(connectionState===ConnectionStateType.kConnecting){return prefix+"connecting"}if(!this.isListItem&&connectionState===ConnectionStateType.kNotConnected){return prefix+"not-connected"}const strength=OncMojo.getSignalStrength(this.networkState);return prefix+this.strengthToIndex_(strength).toString(10)},computeAriaLabel_(locale,networkState){if(this.hotspotInfo){return"hotspot"}if(!this.networkState){return""}const type=this.networkState.type;if(type===NetworkType.kEthernet){return this.i18nDynamic(locale,"networkIconLabelEthernet")}if(type===NetworkType.kVPN){return this.i18nDynamic(locale,"networkIconLabelVpn")}let networkTypeString="";if(type===NetworkType.kTether){networkTypeString=this.i18nDynamic(locale,"OncTypeTether")}else if(OncMojo.networkTypeIsMobile(type)){networkTypeString=this.i18nDynamic(locale,"OncTypeCellular")}else{networkTypeString=this.i18nDynamic(locale,"OncTypeWiFi")}if(!this.isListItem&&!this.networkState.guid){const device=this.deviceState;if(!device||device.deviceState===DeviceStateType.kEnabled||device.deviceState===DeviceStateType.kEnabling){return this.i18nDynamic(locale,"networkIconLabelNoNetwork",networkTypeString)}return this.i18nDynamic(locale,"networkIconLabelOff",networkTypeString)}const connectionState=this.networkState.connectionState;if(connectionState===ConnectionStateType.kConnecting){return this.i18nDynamic(locale,"networkIconLabelConnecting",networkTypeString)}if(!this.isListItem&&connectionState===ConnectionStateType.kNotConnected){return this.i18nDynamic(locale,"networkIconLabelNotConnected",networkTypeString)}const strength=OncMojo.getSignalStrength(this.networkState);return this.i18nDynamic(locale,"networkIconLabelSignalStrength",networkTypeString,strength.toString(10))},strengthToIndex_(strength){if(strength<=0){return 0}if(strength>=100){return this.networkIconCount_-1}const zeroBasedIndex=Math.trunc((strength-1)*(this.networkIconCount_-1)/100);return zeroBasedIndex+1},showTechnology_(){if(!this.networkState||this.hotspotInfo){return false}return!this.showRoaming_()&&OncMojo.connectionStateIsConnected(this.networkState.connectionState)&&this.getTechnology_()!==""&&this.showTechnologyBadge},getTechnology_(){if(!this.networkState||this.hotspotInfo){return""}if(this.networkState.type===NetworkType.kCellular){const technology=this.getTechnologyId_(this.networkState.typeState.cellular.networkTechnology);if(technology!==""){return"network:"+technology}}return""},getTechnologyId_(networkTechnology){switch(networkTechnology){case"CDMA1XRTT":return"badge-1x";case"EDGE":return"badge-edge";case"EVDO":return"badge-evdo";case"GPRS":case"GSM":return"badge-gsm";case"HSPA":return"badge-hspa";case"HSPAPlus":return"badge-hspa-plus";case"LTE":return"badge-lte";case"LTEAdvanced":return"badge-lte-advanced";case"UMTS":return"badge-3g";case"5GNR":return"badge-5g"}return""},showSecure_(){if(!this.networkState||this.hotspotInfo){return false}if(!this.isListItem&&this.networkState.connectionState===ConnectionStateType.kNotConnected){return false}return this.networkState.type===NetworkType.kWiFi&&this.networkState.typeState.wifi.security!==SecurityType.kNone},showRoaming_(){if(!this.networkState){return false}return this.networkState.type===NetworkType.kCellular&&this.networkState.typeState.cellular.roaming},showIcon_(){return!!this.networkState||!!this.hotspotInfo},isPSimPendingActivationWhileLoggedOut_(){const cellularProperties=this.networkState.typeState.cellular;if(!cellularProperties||cellularProperties.eid||this.isUserLoggedIn_){return false}return cellularProperties.activationState==ActivationStateType.kNotActivated}});
// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CLASS_NAME="focus-outline-visible";const docsToManager=new Map;class FocusOutlineManager{focusByKeyboard_=true;classList_;constructor(doc){this.classList_=doc.documentElement.classList;doc.addEventListener("keydown",(e=>this.onEvent_(true,e)),true);doc.addEventListener("mousedown",(e=>this.onEvent_(false,e)),true);this.updateVisibility()}onEvent_(focusByKeyboard,e){if(this.focusByKeyboard_===focusByKeyboard){return}if(e instanceof KeyboardEvent&&e.repeat){return}this.focusByKeyboard_=focusByKeyboard;this.updateVisibility()}updateVisibility(){this.visible=this.focusByKeyboard_}set visible(visible){this.classList_.toggle(CLASS_NAME,visible)}get visible(){return this.classList_.contains(CLASS_NAME)}static forDocument(doc){let manager=docsToManager.get(doc);if(!manager){manager=new FocusOutlineManager(doc);docsToManager.set(doc,manager)}return manager}}function getTemplate$1(){return html`<!--_html_template_start_-->    <style include="cr-hidden-style">:host{--active-shadow-rgb:var(--google-grey-800-rgb);--active-shadow-action-rgb:var(--google-blue-500-rgb);--bg-action:var(--google-blue-600);--border-color:var(--google-grey-300);--disabled-bg-action:var(--google-grey-100);--disabled-bg:white;--disabled-border-color:var(--google-grey-100);--disabled-text-color:var(--google-grey-600);--focus-shadow-color:rgba(var(--google-blue-600-rgb), .4);--hover-bg-action:rgba(var(--google-blue-600-rgb), .9);--hover-bg-color:rgba(var(--google-blue-500-rgb), .04);--hover-border-color:var(--google-blue-100);--hover-shadow-action-rgb:var(--google-blue-500-rgb);--ink-color-action:white;--ink-color:var(--google-blue-600);--ripple-opacity-action:.32;--ripple-opacity:.1;--text-color-action:white;--text-color:var(--google-blue-600)}@media (prefers-color-scheme:dark){:host{--active-bg:black linear-gradient(rgba(255, 255, 255, .06),
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
const CrButtonElementBase=PaperRippleMixin(PolymerElement);class CrButtonElement extends CrButtonElementBase{static get is(){return"cr-button"}static get template(){return getTemplate$1()}static get properties(){return{disabled:{type:Boolean,value:false,reflectToAttribute:true,observer:"disabledChanged_"},customTabIndex:{type:Number,observer:"applyTabIndex_"},circleRipple:{type:Boolean,value:false},hasPrefixIcon_:{type:Boolean,reflectToAttribute:true,value:false},hasSuffixIcon_:{type:Boolean,reflectToAttribute:true,value:false}}}constructor(){super();this.spaceKeyDown_=false;this.timeoutIds_=new Set;this.addEventListener("blur",this.onBlur_.bind(this));this.addEventListener("click",this.onClick_.bind(this));this.addEventListener("keydown",this.onKeyDown_.bind(this));this.addEventListener("keyup",this.onKeyUp_.bind(this));this.addEventListener("pointerdown",this.onPointerDown_.bind(this))}ready(){super.ready();if(!this.hasAttribute("role")){this.setAttribute("role","button")}if(!this.hasAttribute("tabindex")){this.setAttribute("tabindex","0")}if(!this.hasAttribute("aria-disabled")){this.setAttribute("aria-disabled",this.disabled?"true":"false")}FocusOutlineManager.forDocument(document)}disconnectedCallback(){super.disconnectedCallback();this.timeoutIds_.forEach(clearTimeout);this.timeoutIds_.clear()}setTimeout_(fn,delay){if(!this.isConnected){return}const id=setTimeout((()=>{this.timeoutIds_.delete(id);fn()}),delay);this.timeoutIds_.add(id)}disabledChanged_(newValue,oldValue){if(!newValue&&oldValue===undefined){return}if(this.disabled){this.blur()}this.setAttribute("aria-disabled",this.disabled?"true":"false");this.applyTabIndex_()}applyTabIndex_(){let value=this.customTabIndex;if(value===undefined){value=this.disabled?-1:0}this.setAttribute("tabindex",value.toString())}onBlur_(){this.spaceKeyDown_=false;this.setTimeout_((()=>this.getRipple().uiUpAction()),100)}onClick_(e){if(this.disabled){e.stopImmediatePropagation()}}onPrefixIconSlotChanged_(){this.hasPrefixIcon_=this.$.prefixIcon.assignedElements().length>0}onSuffixIconSlotChanged_(){this.hasSuffixIcon_=this.$.suffixIcon.assignedElements().length>0}onKeyDown_(e){if(e.key!==" "&&e.key!=="Enter"){return}e.preventDefault();e.stopPropagation();if(e.repeat){return}this.getRipple().uiDownAction();if(e.key==="Enter"){this.click();this.setTimeout_((()=>this.getRipple().uiUpAction()),100)}else if(e.key===" "){this.spaceKeyDown_=true}}onKeyUp_(e){if(e.key!==" "&&e.key!=="Enter"){return}e.preventDefault();e.stopPropagation();if(this.spaceKeyDown_&&e.key===" "){this.spaceKeyDown_=false;this.click();this.getRipple().uiUpAction()}}onPointerDown_(){this.ensureRipple()}_createRipple(){const ripple=super._createRipple();if(this.circleRipple){ripple.setAttribute("center","");ripple.classList.add("circle")}return ripple}}customElements.define(CrButtonElement.is,CrButtonElement);const styleMod=document.createElement("dom-module");styleMod.appendChild(html`
  <template>
    <style>
:host{color:var(--cr-primary-text-color);line-height:154%;overflow:hidden;user-select:text}
    </style>
  </template>
`.content);styleMod.register("cr-page-host-style");
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class PageHandlerPendingReceiver{handle;constructor(handle){this.handle=mojo.internal.interfaceSupport.getEndpointForReceiver(handle)}bindInBrowser(scope="context"){mojo.internal.interfaceSupport.bind(this.handle,"color_change_listener.mojom.PageHandler",scope)}}class PageHandlerRemote{proxy;$;onConnectionError;constructor(handle){this.proxy=new mojo.internal.interfaceSupport.InterfaceRemoteBase(PageHandlerPendingReceiver,handle);this.$=new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);this.onConnectionError=this.proxy.getConnectionErrorEventRouter()}setPage(page){this.proxy.sendMessage(0,PageHandler_SetPage_ParamsSpec.$,null,[page])}}class PageHandler{static get $interfaceName(){return"color_change_listener.mojom.PageHandler"}static getRemote(){let remote=new PageHandlerRemote;remote.$.bindNewPipeAndPassReceiver().bindInBrowser();return remote}}class PagePendingReceiver{handle;constructor(handle){this.handle=mojo.internal.interfaceSupport.getEndpointForReceiver(handle)}bindInBrowser(scope="context"){mojo.internal.interfaceSupport.bind(this.handle,"color_change_listener.mojom.Page",scope)}}class PageRemote{proxy;$;onConnectionError;constructor(handle){this.proxy=new mojo.internal.interfaceSupport.InterfaceRemoteBase(PagePendingReceiver,handle);this.$=new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);this.onConnectionError=this.proxy.getConnectionErrorEventRouter()}onColorProviderChanged(){this.proxy.sendMessage(0,Page_OnColorProviderChanged_ParamsSpec.$,null,[])}}class PageCallbackRouter{helper_internal_;$;router_;onColorProviderChanged;onConnectionError;constructor(){this.helper_internal_=new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(PageRemote);this.$=new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);this.router_=new mojo.internal.interfaceSupport.CallbackRouter;this.onColorProviderChanged=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(0,Page_OnColorProviderChanged_ParamsSpec.$,null,this.onColorProviderChanged.createReceiverHandler(false));this.onConnectionError=this.helper_internal_.getConnectionErrorEventRouter()}removeListener(id){return this.router_.removeListener(id)}}const PageHandler_SetPage_ParamsSpec={$:{}};const Page_OnColorProviderChanged_ParamsSpec={$:{}};mojo.internal.Struct(PageHandler_SetPage_ParamsSpec.$,"PageHandler_SetPage_Params",[mojo.internal.StructField("page",0,0,mojo.internal.InterfaceProxy(PageRemote),null,false,0)],[[0,16]]);mojo.internal.Struct(Page_OnColorProviderChanged_ParamsSpec.$,"Page_OnColorProviderChanged_Params",[],[[0,8]]);
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let instance=null;class BrowserProxy{callbackRouter;constructor(){this.callbackRouter=new PageCallbackRouter;const pageHandlerRemote=PageHandler.getRemote();pageHandlerRemote.setPage(this.callbackRouter.$.bindNewPipeAndPassRemote())}static getInstance(){return instance||(instance=new BrowserProxy)}static setInstance(newInstance){instance=newInstance}}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const COLORS_CSS_SELECTOR="link[href*='//theme/colors.css']";let documentInstance=null;const COLOR_PROVIDER_CHANGED="color-provider-changed";class ColorChangeUpdater{listenerId_=null;root_;eventTarget=new EventTarget;constructor(root){assert$1(documentInstance===null||root!==document);this.root_=root}start(){if(this.listenerId_!==null){return}this.listenerId_=BrowserProxy.getInstance().callbackRouter.onColorProviderChanged.addListener(this.onColorProviderChanged.bind(this))}async onColorProviderChanged(){await this.refreshColorsCss();this.eventTarget.dispatchEvent(new CustomEvent(COLOR_PROVIDER_CHANGED))}async refreshColorsCss(){const colorCssNode=this.root_.querySelector(COLORS_CSS_SELECTOR);if(!colorCssNode){return false}const href=colorCssNode.getAttribute("href");if(!href){return false}const hrefURL=new URL(href,location.href);const params=new URLSearchParams(hrefURL.search);params.set("version",(new Date).getTime().toString());const newHref=`${hrefURL.origin}${hrefURL.pathname}?${params.toString()}`;const newColorsCssLink=document.createElement("link");newColorsCssLink.setAttribute("href",newHref);newColorsCssLink.rel="stylesheet";newColorsCssLink.type="text/css";const newColorsLoaded=new Promise((resolve=>{newColorsCssLink.onload=resolve}));if(this.root_===document){document.getElementsByTagName("body")[0].appendChild(newColorsCssLink)}else{this.root_.appendChild(newColorsCssLink)}await newColorsLoaded;const oldColorCssNode=document.querySelector(COLORS_CSS_SELECTOR);if(oldColorCssNode){oldColorCssNode.remove()}return true}static forDocument(){return documentInstance||(documentInstance=new ColorChangeUpdater(document))}}
// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function sanitizeInnerHtmlInternal(rawString,opts){opts=opts||{};const html=parseHtmlSubset(`<b>${rawString}</b>`,opts.tags,opts.attrs).firstElementChild;return html.innerHTML}let sanitizedPolicy=null;function sanitizeInnerHtml(rawString,opts){assert$1(window.trustedTypes);if(sanitizedPolicy===null){sanitizedPolicy=window.trustedTypes.createPolicy("sanitize-inner-html",{createHTML:sanitizeInnerHtmlInternal,createScript:()=>assertNotReached$1(),createScriptURL:()=>assertNotReached$1()})}return sanitizedPolicy.createHTML(rawString,opts)}const allowAttribute=(_node,_value)=>true;const allowedAttributes=new Map([["href",(node,value)=>node.tagName==="A"&&(value.startsWith("chrome://")||value.startsWith("https://")||value==="#")],["target",(node,value)=>node.tagName==="A"&&value==="_blank"]]);const allowedOptionalAttributes=new Map([["class",allowAttribute],["id",allowAttribute],["is",(_node,value)=>value==="action-link"||value===""],["role",(_node,value)=>value==="link"],["src",(node,value)=>node.tagName==="IMG"&&value.startsWith("chrome://")],["tabindex",allowAttribute],["aria-hidden",allowAttribute],["aria-label",allowAttribute],["aria-labelledby",allowAttribute]]);const allowedTags=new Set(["A","B","I","BR","DIV","EM","KBD","P","PRE","SPAN","STRONG"]);const allowedOptionalTags=new Set(["IMG","LI","UL"]);let unsanitizedPolicy;function mergeTags(optTags){const clone=new Set(allowedTags);optTags.forEach((str=>{const tag=str.toUpperCase();if(allowedOptionalTags.has(tag)){clone.add(tag)}}));return clone}function mergeAttrs(optAttrs){const clone=new Map(allowedAttributes);optAttrs.forEach((key=>{if(allowedOptionalAttributes.has(key)){clone.set(key,allowedOptionalAttributes.get(key))}}));return clone}function walk(n,f){f(n);for(let i=0;i<n.childNodes.length;i++){walk(n.childNodes[i],f)}}function assertElement(tags,node){if(!tags.has(node.tagName)){throw Error(node.tagName+" is not supported")}}function assertAttribute(attrs,attrNode,node){const n=attrNode.nodeName;const v=attrNode.nodeValue||"";if(!attrs.has(n)||!attrs.get(n)(node,v)){throw Error(node.tagName+"["+n+'="'+v+'"] is not supported')}}function parseHtmlSubset(s,extraTags,extraAttrs){const tags=extraTags?mergeTags(extraTags):allowedTags;const attrs=extraAttrs?mergeAttrs(extraAttrs):allowedAttributes;const doc=document.implementation.createHTMLDocument("");const r=doc.createRange();r.selectNode(doc.body);if(window.trustedTypes){if(!unsanitizedPolicy){unsanitizedPolicy=window.trustedTypes.createPolicy("parse-html-subset",{createHTML:untrustedHTML=>untrustedHTML,createScript:()=>assertNotReached$1(),createScriptURL:()=>assertNotReached$1()})}s=unsanitizedPolicy.createHTML(s)}const df=r.createContextualFragment(s);walk(df,(function(node){switch(node.nodeType){case Node.ELEMENT_NODE:assertElement(tags,node);const nodeAttrs=node.attributes;for(let i=0;i<nodeAttrs.length;++i){assertAttribute(attrs,nodeAttrs[i],node)}break;case Node.COMMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:case Node.TEXT_NODE:break;default:throw Error("Node type "+node.nodeType+" is not supported")}}));return df}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const I18nMixin=dedupingMixin((superClass=>{class I18nMixin extends superClass{i18nRaw_(id,...varArgs){return varArgs.length===0?loadTimeData$1.getString(id):loadTimeData$1.getStringF(id,...varArgs)}i18n(id,...varArgs){const rawString=this.i18nRaw_(id,...varArgs);return parseHtmlSubset(`<b>${rawString}</b>`).firstChild.textContent}i18nAdvanced(id,opts){opts=opts||{};const rawString=this.i18nRaw_(id,...opts.substitutions||[]);return sanitizeInnerHtml(rawString,opts)}i18nDynamic(_locale,id,...varArgs){return this.i18n(id,...varArgs)}i18nRecursive(locale,id,...varArgs){let args=varArgs;if(args.length>0){args=args.map((str=>this.i18nExists(str)?loadTimeData$1.getString(str):str))}return this.i18nDynamic(locale,id,...args)}i18nExists(id){return loadTimeData$1.valueExists(id)}}return I18nMixin}));function getTemplate(){return html`<!--_html_template_start_--><style include="cr-page-host-style cr-shared-style network-shared
    iron-flex cros-color-overrides">cr-dialog::part(dialog){border-radius:0;height:100%;width:100%}:host-context(body.jelly-enabled) cr-dialog::part(dialog){--cr-dialog-background-color:var(--cros-bg-color)}cr-dialog [slot=body]{height:480px}.error{color:var(--cros-text-color-alert);font-weight:500}</style>
<cr-dialog id="dialog" no-cancel>
  <div slot="title">[[getDialogTitle_(type_)]]</div>
  <div slot="body">
    <network-config id="networkConfig" class="flex" guid="[[guid_]]" type="{{type_}}" prefilled-properties="[[prefilledProperties_]]" enable-connect="{{enableConnect_}}" share-allow-enable="[[shareAllowEnable_]]" share-default="[[shareDefault_]]" error="{{error_}}" on-close="close_" connect-on-enter>
    </network-config>
  </div>
  <div class="layout horizontal center" slot="button-container">
    <template is="dom-if" if="[[error_]]" restamp>
      <div class="flex error">[[getError_(error_)]]</div>
    </template>
    <cr-button class="cancel-button" on-click="onCancelClick_">
      $i18n{cancel}
    </cr-button>
    <cr-button class="action-button" on-click="onConnectClick_" disabled="[[!enableConnect_]]">
      $i18n{networkButtonConnect}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const InternetConfigDialogElementBase=I18nMixin(PolymerElement);class InternetConfigDialogElement extends InternetConfigDialogElementBase{static get is(){return"internet-config-dialog"}static get template(){return getTemplate()}static get properties(){return{shareAllowEnable_:{type:Boolean,value(){return loadTimeData.getBoolean("shareNetworkAllowEnable")}},shareDefault_:{type:Boolean,value(){return loadTimeData.getBoolean("shareNetworkDefault")}},guid_:String,type_:String,prefilledProperties_:ConfigProperties,enableConnect_:Boolean,error_:{type:String,value:""}}}connectedCallback(){super.connectedCallback();const isJellyEnabled=loadTimeData.valueExists("isJellyEnabled")&&loadTimeData.getBoolean("isJellyEnabled");const dialogArgs=chrome.getVariableValue("dialogArguments");if(dialogArgs){const args=JSON.parse(dialogArgs);this.type_=args.type;assert$1(this.type_);this.guid_=args.guid||"";this.prefilledProperties_=args.prefilledProperties||null}else{const params=new URLSearchParams(document.location.search.substring(1));this.type_=params.get("type")||"WiFi";this.guid_=params.get("guid")||"";this.prefilledProperties_=null}if(isJellyEnabled){const link=document.createElement("link");link.rel="stylesheet";link.href="chrome://theme/colors.css?sets=legacy,sys";document.head.appendChild(link);document.body.classList.add("jelly-enabled");(function(){ColorChangeUpdater.forDocument().start()})()}this.$.networkConfig.init();this.$.dialog.showModal()}close_(){chrome.send("dialogClose")}getDialogTitle_(){const type=this.i18n("OncType"+this.type_);return this.i18n("internetJoinType",type)}getError_(){if(this.i18nExists(this.error_)){return this.i18n(this.error_)}return this.i18n("networkErrorUnknown")}onCancelClick_(){this.close_()}onConnectClick_(){this.$.networkConfig.connect()}}customElements.define(InternetConfigDialogElement.is,InternetConfigDialogElement);export{InternetConfigDialogElement};