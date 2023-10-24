import { html, Polymer, dom, mixinBehaviors, PolymerElement, afterNextRender, Base, useShadow, Templatizer, OptionalMutableDataBehavior, animationFrame, microTask, idlePeriod, flush, Debouncer, enqueueDebouncer, matches, translate, beforeNextRender, dedupingMixin } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { loadTimeData } from 'chrome://resources/ash/common/load_time_data.m.js';
import { DeviceType, SystemPropertiesObserverReceiver, BluetoothDiscoveryDelegateReceiver, BluetoothSystemState, DevicePairingDelegateReceiver, PairingResult, KeyEnteredHandlerReceiver } from 'chrome://resources/mojo/chromeos/ash/services/bluetooth_config/public/mojom/cros_bluetooth_config.mojom-webui.js';
import { getBluetoothConfig } from 'chrome://resources/ash/common/bluetooth/cros_bluetooth_config.js';
import './strings.m.js';
import { mojo } from 'chrome://resources/mojo/mojo/public/js/bindings.js';

const styleMod$5 = document.createElement('dom-module');
styleMod$5.appendChild(html `
  <template>
    <style>
:host([hidden]),[hidden]{display:none!important}
    </style>
  </template>
`.content);
styleMod$5.register('cr-hidden-style');

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

const template$5 = html`
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
`;
template$5.setAttribute('style', 'display: none;');
document.head.appendChild(template$5.content);

const template$4 = html `
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
`;
document.head.appendChild(template$4.content);

// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * The class name to set on the document element.
 */
const CLASS_NAME = 'focus-outline-visible';
const docsToManager = new Map();
/**
 * This class sets a CSS class name on the HTML element of |doc| when the user
 * presses a key. It removes the class name when the user clicks anywhere.
 *
 * This allows you to write CSS like this:
 *
 * html.focus-outline-visible my-element:focus {
 *   outline: 5px auto -webkit-focus-ring-color;
 * }
 *
 * And the outline will only be shown if the user uses the keyboard to get to
 * it.
 *
 */
class FocusOutlineManager {
    /**
     * @param doc The document to attach the focus outline manager to.
     */
    constructor(doc) {
        // Whether focus change is triggered by a keyboard event.
        this.focusByKeyboard_ = true;
        this.classList_ = doc.documentElement.classList;
        doc.addEventListener('keydown', () => this.onEvent_(true), true);
        doc.addEventListener('mousedown', () => this.onEvent_(false), true);
        this.updateVisibility();
    }
    onEvent_(focusByKeyboard) {
        if (this.focusByKeyboard_ === focusByKeyboard) {
            return;
        }
        this.focusByKeyboard_ = focusByKeyboard;
        this.updateVisibility();
    }
    updateVisibility() {
        this.visible = this.focusByKeyboard_;
    }
    /**
     * Whether the focus outline should be visible.
     */
    set visible(visible) {
        this.classList_.toggle(CLASS_NAME, visible);
    }
    get visible() {
        return this.classList_.contains(CLASS_NAME);
    }
    /**
     * Gets a per document singleton focus outline manager.
     * @param doc The document to get the |FocusOutlineManager| for.
     * @return The per document singleton focus outline manager.
     */
    static forDocument(doc) {
        let manager = docsToManager.get(doc);
        if (!manager) {
            manager = new FocusOutlineManager(doc);
            docsToManager.set(doc, manager);
        }
        return manager;
    }
}

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/**
 * Chrome uses an older version of DOM Level 3 Keyboard Events
 *
 * Most keys are labeled as text, but some are Unicode codepoints.
 * Values taken from:
 * http://www.w3.org/TR/2007/WD-DOM-Level-3-Events-20071221/keyset.html#KeySet-Set
 */
var KEY_IDENTIFIER = {
  'U+0008': 'backspace',
  'U+0009': 'tab',
  'U+001B': 'esc',
  'U+0020': 'space',
  'U+007F': 'del'
};

/**
 * Special table for KeyboardEvent.keyCode.
 * KeyboardEvent.keyIdentifier is better, and KeyBoardEvent.key is even better
 * than that.
 *
 * Values from:
 * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent.keyCode#Value_of_keyCode
 */
var KEY_CODE = {
  8: 'backspace',
  9: 'tab',
  13: 'enter',
  27: 'esc',
  33: 'pageup',
  34: 'pagedown',
  35: 'end',
  36: 'home',
  32: 'space',
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  46: 'del',
  106: '*'
};

/**
 * MODIFIER_KEYS maps the short name for modifier keys used in a key
 * combo string to the property name that references those same keys
 * in a KeyboardEvent instance.
 */
var MODIFIER_KEYS = {
  'shift': 'shiftKey',
  'ctrl': 'ctrlKey',
  'alt': 'altKey',
  'meta': 'metaKey'
};

/**
 * KeyboardEvent.key is mostly represented by printable character made by
 * the keyboard, with unprintable keys labeled nicely.
 *
 * However, on OS X, Alt+char can make a Unicode character that follows an
 * Apple-specific mapping. In this case, we fall back to .keyCode.
 */
var KEY_CHAR = /[a-z0-9*]/;

/**
 * Matches a keyIdentifier string.
 */
var IDENT_CHAR = /U\+/;

/**
 * Matches arrow keys in Gecko 27.0+
 */
var ARROW_KEY = /^arrow/;

/**
 * Matches space keys everywhere (notably including IE10's exceptional name
 * `spacebar`).
 */
var SPACE_KEY = /^space(bar)?/;

/**
 * Matches ESC key.
 *
 * Value from: http://w3c.github.io/uievents-key/#key-Escape
 */
var ESC_KEY = /^escape$/;

/**
 * Transforms the key.
 * @param {string} key The KeyBoardEvent.key
 * @param {Boolean} [noSpecialChars] Limits the transformation to
 * alpha-numeric characters.
 */
function transformKey(key, noSpecialChars) {
  var validKey = '';
  if (key) {
    var lKey = key.toLowerCase();
    if (lKey === ' ' || SPACE_KEY.test(lKey)) {
      validKey = 'space';
    } else if (ESC_KEY.test(lKey)) {
      validKey = 'esc';
    } else if (lKey.length == 1) {
      if (!noSpecialChars || KEY_CHAR.test(lKey)) {
        validKey = lKey;
      }
    } else if (ARROW_KEY.test(lKey)) {
      validKey = lKey.replace('arrow', '');
    } else if (lKey == 'multiply') {
      // numpad '*' can map to Multiply on IE/Windows
      validKey = '*';
    } else {
      validKey = lKey;
    }
  }
  return validKey;
}

function transformKeyIdentifier(keyIdent) {
  var validKey = '';
  if (keyIdent) {
    if (keyIdent in KEY_IDENTIFIER) {
      validKey = KEY_IDENTIFIER[keyIdent];
    } else if (IDENT_CHAR.test(keyIdent)) {
      keyIdent = parseInt(keyIdent.replace('U+', '0x'), 16);
      validKey = String.fromCharCode(keyIdent).toLowerCase();
    } else {
      validKey = keyIdent.toLowerCase();
    }
  }
  return validKey;
}

function transformKeyCode(keyCode) {
  var validKey = '';
  if (Number(keyCode)) {
    if (keyCode >= 65 && keyCode <= 90) {
      // ascii a-z
      // lowercase is 32 offset from uppercase
      validKey = String.fromCharCode(32 + keyCode);
    } else if (keyCode >= 112 && keyCode <= 123) {
      // function keys f1-f12
      validKey = 'f' + (keyCode - 112 + 1);
    } else if (keyCode >= 48 && keyCode <= 57) {
      // top 0-9 keys
      validKey = String(keyCode - 48);
    } else if (keyCode >= 96 && keyCode <= 105) {
      // num pad 0-9
      validKey = String(keyCode - 96);
    } else {
      validKey = KEY_CODE[keyCode];
    }
  }
  return validKey;
}

/**
 * Calculates the normalized key for a KeyboardEvent.
 * @param {KeyboardEvent} keyEvent
 * @param {Boolean} [noSpecialChars] Set to true to limit keyEvent.key
 * transformation to alpha-numeric chars. This is useful with key
 * combinations like shift + 2, which on FF for MacOS produces
 * keyEvent.key = @
 * To get 2 returned, set noSpecialChars = true
 * To get @ returned, set noSpecialChars = false
 */
function normalizedKeyForEvent(keyEvent, noSpecialChars) {
  // Fall back from .key, to .detail.key for artifical keyboard events,
  // and then to deprecated .keyIdentifier and .keyCode.
  if (keyEvent.key) {
    return transformKey(keyEvent.key, noSpecialChars);
  }
  if (keyEvent.detail && keyEvent.detail.key) {
    return transformKey(keyEvent.detail.key, noSpecialChars);
  }
  return transformKeyIdentifier(keyEvent.keyIdentifier) ||
      transformKeyCode(keyEvent.keyCode) || '';
}

function keyComboMatchesEvent(keyCombo, event) {
  // For combos with modifiers we support only alpha-numeric keys
  var keyEvent = normalizedKeyForEvent(event, keyCombo.hasModifiers);
  return keyEvent === keyCombo.key &&
      (!keyCombo.hasModifiers ||
       (!!event.shiftKey === !!keyCombo.shiftKey &&
        !!event.ctrlKey === !!keyCombo.ctrlKey &&
        !!event.altKey === !!keyCombo.altKey &&
        !!event.metaKey === !!keyCombo.metaKey));
}

function parseKeyComboString(keyComboString) {
  if (keyComboString.length === 1) {
    return {combo: keyComboString, key: keyComboString, event: 'keydown'};
  }
  return keyComboString.split('+')
      .reduce(function(parsedKeyCombo, keyComboPart) {
        var eventParts = keyComboPart.split(':');
        var keyName = eventParts[0];
        var event = eventParts[1];

        if (keyName in MODIFIER_KEYS) {
          parsedKeyCombo[MODIFIER_KEYS[keyName]] = true;
          parsedKeyCombo.hasModifiers = true;
        } else {
          parsedKeyCombo.key = keyName;
          parsedKeyCombo.event = event || 'keydown';
        }

        return parsedKeyCombo;
      }, {combo: keyComboString.split(':').shift()});
}

function parseEventString(eventString) {
  return eventString.trim().split(' ').map(function(keyComboString) {
    return parseKeyComboString(keyComboString);
  });
}

/**
 * `Polymer.IronA11yKeysBehavior` provides a normalized interface for processing
 * keyboard commands that pertain to [WAI-ARIA best
 * practices](http://www.w3.org/TR/wai-aria-practices/#kbd_general_binding). The
 * element takes care of browser differences with respect to Keyboard events and
 * uses an expressive syntax to filter key presses.
 *
 * Use the `keyBindings` prototype property to express what combination of keys
 * will trigger the callback. A key binding has the format
 * `"KEY+MODIFIER:EVENT": "callback"` (`"KEY": "callback"` or
 * `"KEY:EVENT": "callback"` are valid as well). Some examples:
 *
 *      keyBindings: {
 *        'space': '_onKeydown', // same as 'space:keydown'
 *        'shift+tab': '_onKeydown',
 *        'enter:keypress': '_onKeypress',
 *        'esc:keyup': '_onKeyup'
 *      }
 *
 * The callback will receive with an event containing the following information
 * in `event.detail`:
 *
 *      _onKeydown: function(event) {
 *        console.log(event.detail.combo); // KEY+MODIFIER, e.g. "shift+tab"
 *        console.log(event.detail.key); // KEY only, e.g. "tab"
 *        console.log(event.detail.event); // EVENT, e.g. "keydown"
 *        console.log(event.detail.keyboardEvent); // the original KeyboardEvent
 *      }
 *
 * Use the `keyEventTarget` attribute to set up event handlers on a specific
 * node.
 *
 * See the [demo source
 * code](https://github.com/PolymerElements/iron-a11y-keys-behavior/blob/master/demo/x-key-aware.html)
 * for an example.
 *
 * @demo demo/index.html
 * @polymerBehavior
 */
const IronA11yKeysBehavior = {
  properties: {
    /**
     * The EventTarget that will be firing relevant KeyboardEvents. Set it to
     * `null` to disable the listeners.
     * @type {?EventTarget}
     */
    keyEventTarget: {
      type: Object,
      value: function() {
        return this;
      }
    },

    /**
     * If true, this property will cause the implementing element to
     * automatically stop propagation on any handled KeyboardEvents.
     */
    stopKeyboardEventPropagation: {type: Boolean, value: false},

    _boundKeyHandlers: {
      type: Array,
      value: function() {
        return [];
      }
    },

    // We use this due to a limitation in IE10 where instances will have
    // own properties of everything on the "prototype".
    _imperativeKeyBindings: {
      type: Object,
      value: function() {
        return {};
      }
    }
  },

  observers: ['_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)'],


  /**
   * To be used to express what combination of keys  will trigger the relative
   * callback. e.g. `keyBindings: { 'esc': '_onEscPressed'}`
   * @type {!Object}
   */
  keyBindings: {},

  registered: function() {
    this._prepKeyBindings();
  },

  attached: function() {
    this._listenKeyEventListeners();
  },

  detached: function() {
    this._unlistenKeyEventListeners();
  },

  /**
   * Can be used to imperatively add a key binding to the implementing
   * element. This is the imperative equivalent of declaring a keybinding
   * in the `keyBindings` prototype property.
   *
   * @param {string} eventString
   * @param {string} handlerName
   */
  addOwnKeyBinding: function(eventString, handlerName) {
    this._imperativeKeyBindings[eventString] = handlerName;
    this._prepKeyBindings();
    this._resetKeyEventListeners();
  },

  /**
   * When called, will remove all imperatively-added key bindings.
   */
  removeOwnKeyBindings: function() {
    this._imperativeKeyBindings = {};
    this._prepKeyBindings();
    this._resetKeyEventListeners();
  },

  /**
   * Returns true if a keyboard event matches `eventString`.
   *
   * @param {KeyboardEvent} event
   * @param {string} eventString
   * @return {boolean}
   */
  keyboardEventMatchesKeys: function(event, eventString) {
    var keyCombos = parseEventString(eventString);
    for (var i = 0; i < keyCombos.length; ++i) {
      if (keyComboMatchesEvent(keyCombos[i], event)) {
        return true;
      }
    }
    return false;
  },

  _collectKeyBindings: function() {
    var keyBindings = this.behaviors.map(function(behavior) {
      return behavior.keyBindings;
    });

    if (keyBindings.indexOf(this.keyBindings) === -1) {
      keyBindings.push(this.keyBindings);
    }

    return keyBindings;
  },

  _prepKeyBindings: function() {
    this._keyBindings = {};

    this._collectKeyBindings().forEach(function(keyBindings) {
      for (var eventString in keyBindings) {
        this._addKeyBinding(eventString, keyBindings[eventString]);
      }
    }, this);

    for (var eventString in this._imperativeKeyBindings) {
      this._addKeyBinding(
          eventString, this._imperativeKeyBindings[eventString]);
    }

    // Give precedence to combos with modifiers to be checked first.
    for (var eventName in this._keyBindings) {
      this._keyBindings[eventName].sort(function(kb1, kb2) {
        var b1 = kb1[0].hasModifiers;
        var b2 = kb2[0].hasModifiers;
        return (b1 === b2) ? 0 : b1 ? -1 : 1;
      });
    }
  },

  _addKeyBinding: function(eventString, handlerName) {
    parseEventString(eventString).forEach(function(keyCombo) {
      this._keyBindings[keyCombo.event] =
          this._keyBindings[keyCombo.event] || [];

      this._keyBindings[keyCombo.event].push([keyCombo, handlerName]);
    }, this);
  },

  _resetKeyEventListeners: function() {
    this._unlistenKeyEventListeners();

    if (this.isAttached) {
      this._listenKeyEventListeners();
    }
  },

  _listenKeyEventListeners: function() {
    if (!this.keyEventTarget) {
      return;
    }
    Object.keys(this._keyBindings).forEach(function(eventName) {
      var keyBindings = this._keyBindings[eventName];
      var boundKeyHandler = this._onKeyBindingEvent.bind(this, keyBindings);

      this._boundKeyHandlers.push(
          [this.keyEventTarget, eventName, boundKeyHandler]);

      this.keyEventTarget.addEventListener(eventName, boundKeyHandler);
    }, this);
  },

  _unlistenKeyEventListeners: function() {
    var keyHandlerTuple;
    var keyEventTarget;
    var eventName;
    var boundKeyHandler;

    while (this._boundKeyHandlers.length) {
      // My kingdom for block-scope binding and destructuring assignment..
      keyHandlerTuple = this._boundKeyHandlers.pop();
      keyEventTarget = keyHandlerTuple[0];
      eventName = keyHandlerTuple[1];
      boundKeyHandler = keyHandlerTuple[2];

      keyEventTarget.removeEventListener(eventName, boundKeyHandler);
    }
  },

  _onKeyBindingEvent: function(keyBindings, event) {
    if (this.stopKeyboardEventPropagation) {
      event.stopPropagation();
    }

    // if event has been already prevented, don't do anything
    if (event.defaultPrevented) {
      return;
    }

    for (var i = 0; i < keyBindings.length; i++) {
      var keyCombo = keyBindings[i][0];
      var handlerName = keyBindings[i][1];
      if (keyComboMatchesEvent(keyCombo, event)) {
        this._triggerKeyHandler(keyCombo, handlerName, event);
        // exit the loop if eventDefault was prevented
        if (event.defaultPrevented) {
          return;
        }
      }
    }
  },

  _triggerKeyHandler: function(keyCombo, handlerName, keyboardEvent) {
    var detail = Object.create(keyCombo);
    detail.keyboardEvent = keyboardEvent;
    var event =
        new CustomEvent(keyCombo.event, {detail: detail, cancelable: true});
    this[handlerName].call(this, event);
    if (event.defaultPrevented) {
      keyboardEvent.preventDefault();
    }
  }
};

var MAX_RADIUS_PX = 300;
var MIN_DURATION_MS = 800;

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {number} The distance between (x1, y1) and (x2, y2).
 */
var distance = function(x1, y1, x2, y2) {
  var xDelta = x1 - x2;
  var yDelta = y1 - y2;
  return Math.sqrt(xDelta * xDelta + yDelta * yDelta);
};

Polymer({
  _template: html`
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
`,

  is: 'paper-ripple',
  behaviors: [IronA11yKeysBehavior],

  properties: {
    center: {type: Boolean, value: false},
    holdDown: {type: Boolean, value: false, observer: '_holdDownChanged'},
    recenters: {type: Boolean, value: false},
    noink: {type: Boolean, value: false},
  },

  keyBindings: {
    'enter:keydown': '_onEnterKeydown',
    'space:keydown': '_onSpaceKeydown',
    'space:keyup': '_onSpaceKeyup',
  },

  /** @override */
  created: function() {
    /** @type {Array<!Element>} */
    this.ripples = [];
  },

  /** @override */
  attached: function() {
    this.keyEventTarget = this.parentNode.nodeType == 11 ?
        dom(this).getOwnerRoot().host : this.parentNode;
    this.keyEventTarget = /** @type {!EventTarget} */ (this.keyEventTarget);
    this.listen(this.keyEventTarget, 'up', 'uiUpAction');
    this.listen(this.keyEventTarget, 'down', 'uiDownAction');
  },

  /** @override */
  detached: function() {
    this.unlisten(this.keyEventTarget, 'up', 'uiUpAction');
    this.unlisten(this.keyEventTarget, 'down', 'uiDownAction');
    this.keyEventTarget = null;
  },

  simulatedRipple: function() {
    this.downAction();
    // Using a 1ms delay ensures a macro-task.
    this.async(function() { this.upAction(); }.bind(this), 1);
  },

  /** @param {Event=} e */
  uiDownAction: function(e) {
    if (!this.noink)
      this.downAction(e);
  },

  /** @param {Event=} e */
  downAction: function(e) {
    if (this.ripples.length && this.holdDown)
      return;
    // TODO(dbeam): some things (i.e. paper-icon-button-light) dynamically
    // create ripples on 'up', Ripples register an event listener on their
    // parent (or shadow DOM host) when attached().  This sometimes causes
    // duplicate events to fire on us.
    this.debounce('show ripple', function() { this.__showRipple(e); }, 1);
  },

  clear: function() {
    this.__hideRipple();
    this.holdDown = false;
  },

  showAndHoldDown: function() {
    this.ripples.forEach(ripple => {
      ripple.remove();
    });
    this.ripples = [];
    this.holdDown = true;
  },

  /**
   * @param {Event=} e
   * @private
   * @suppress {checkTypes}
   */
  __showRipple: function(e) {
    var rect = this.getBoundingClientRect();

    var roundedCenterX = function() { return Math.round(rect.width / 2); };
    var roundedCenterY = function() { return Math.round(rect.height / 2); };

    var centered = !e || this.center;
    if (centered) {
      var x = roundedCenterX();
      var y = roundedCenterY();
    } else {
      var sourceEvent = e.detail.sourceEvent;
      var x = Math.round(sourceEvent.clientX - rect.left);
      var y = Math.round(sourceEvent.clientY - rect.top);
    }

    var corners = [
      {x: 0, y: 0},
      {x: rect.width, y: 0},
      {x: 0, y: rect.height},
      {x: rect.width, y: rect.height},
    ];

    var cornerDistances = corners.map(function(corner) {
      return Math.round(distance(x, y, corner.x, corner.y));
    });

    var radius = Math.min(MAX_RADIUS_PX, Math.max.apply(Math, cornerDistances));

    var startTranslate = (x - radius) + 'px, ' + (y - radius) + 'px';
    if (this.recenters && !centered) {
      var endTranslate = (roundedCenterX() - radius) + 'px, ' +
                         (roundedCenterY() - radius) + 'px';
    } else {
      var endTranslate = startTranslate;
    }

    var ripple = document.createElement('div');
    ripple.classList.add('ripple');
    ripple.style.height = ripple.style.width = (2 * radius) + 'px';

    this.ripples.push(ripple);
    this.shadowRoot.appendChild(ripple);

    ripple.animate({
      // TODO(dbeam): scale to 90% of radius at .75 offset?
      transform: ['translate(' + startTranslate + ') scale(0)',
                  'translate(' + endTranslate + ') scale(1)'],
    }, {
      duration: Math.max(MIN_DURATION_MS, Math.log(radius) * radius) || 0,
      easing: 'cubic-bezier(.2, .9, .1, .9)',
      fill: 'forwards',
    });
  },

  /** @param {Event=} e */
  uiUpAction: function(e) {
    if (!this.noink)
      this.upAction();
  },

  /** @param {Event=} e */
  upAction: function(e) {
    if (!this.holdDown)
      this.debounce('hide ripple', function() { this.__hideRipple(); }, 1);
  },

  /**
   * @private
   * @suppress {checkTypes}
   */
  __hideRipple: function() {
    Promise.all(this.ripples.map(function(ripple) {
      return new Promise(function(resolve) {
        var removeRipple = function() {
          ripple.remove();
          resolve();
        };
        var opacity = getComputedStyle(ripple).opacity;
        if (!opacity.length) {
          removeRipple();
        } else {
          var animation = ripple.animate({
            opacity: [opacity, 0],
          }, {
            duration: 150,
            fill: 'forwards',
          });
          animation.addEventListener('finish', removeRipple);
          animation.addEventListener('cancel', removeRipple);
        }
      });
    })).then(function() { this.fire('transitionend'); }.bind(this));
    this.ripples = [];
  },

  /** @protected */
  _onEnterKeydown: function() {
    this.uiDownAction();
    this.async(this.uiUpAction, 1);
  },

  /** @protected */
  _onSpaceKeydown: function() {
    this.uiDownAction();
  },

  /** @protected */
  _onSpaceKeyup: function() {
    this.uiUpAction();
  },

  /** @protected */
  _holdDownChanged: function(newHoldDown, oldHoldDown) {
    if (oldHoldDown === undefined)
      return;
    if (newHoldDown)
      this.downAction();
    else
      this.upAction();
  },
});

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/**
 * @demo demo/index.html
 * @polymerBehavior IronButtonState
 */
const IronButtonStateImpl = {

  properties: {

    /**
     * If true, the user is currently holding down the button.
     */
    pressed: {
      type: Boolean,
      readOnly: true,
      value: false,
      reflectToAttribute: true,
      observer: '_pressedChanged'
    },

    /**
     * If true, the button toggles the active state with each tap or press
     * of the spacebar.
     */
    toggles: {type: Boolean, value: false, reflectToAttribute: true},

    /**
     * If true, the button is a toggle and is currently in the active state.
     */
    active:
        {type: Boolean, value: false, notify: true, reflectToAttribute: true},

    /**
     * True if the element is currently being pressed by a "pointer," which
     * is loosely defined as mouse or touch input (but specifically excluding
     * keyboard input).
     */
    pointerDown: {type: Boolean, readOnly: true, value: false},

    /**
     * True if the input device that caused the element to receive focus
     * was a keyboard.
     */
    receivedFocusFromKeyboard: {type: Boolean, readOnly: true},

    /**
     * The aria attribute to be set if the button is a toggle and in the
     * active state.
     */
    ariaActiveAttribute: {
      type: String,
      value: 'aria-pressed',
      observer: '_ariaActiveAttributeChanged'
    }
  },

  listeners: {down: '_downHandler', up: '_upHandler', tap: '_tapHandler'},

  observers:
      ['_focusChanged(focused)', '_activeChanged(active, ariaActiveAttribute)'],

  /**
   * @type {!Object}
   */
  keyBindings: {
    'enter:keydown': '_asyncClick',
    'space:keydown': '_spaceKeyDownHandler',
    'space:keyup': '_spaceKeyUpHandler',
  },

  _mouseEventRe: /^mouse/,

  _tapHandler: function() {
    if (this.toggles) {
      // a tap is needed to toggle the active state
      this._userActivate(!this.active);
    } else {
      this.active = false;
    }
  },

  _focusChanged: function(focused) {
    this._detectKeyboardFocus(focused);

    if (!focused) {
      this._setPressed(false);
    }
  },

  _detectKeyboardFocus: function(focused) {
    this._setReceivedFocusFromKeyboard(!this.pointerDown && focused);
  },

  // to emulate native checkbox, (de-)activations from a user interaction fire
  // 'change' events
  _userActivate: function(active) {
    if (this.active !== active) {
      this.active = active;
      this.fire('change');
    }
  },

  _downHandler: function(event) {
    this._setPointerDown(true);
    this._setPressed(true);
    this._setReceivedFocusFromKeyboard(false);
  },

  _upHandler: function() {
    this._setPointerDown(false);
    this._setPressed(false);
  },

  /**
   * @param {!KeyboardEvent} event .
   */
  _spaceKeyDownHandler: function(event) {
    var keyboardEvent = event.detail.keyboardEvent;
    var target = dom(keyboardEvent).localTarget;

    // Ignore the event if this is coming from a focused light child, since that
    // element will deal with it.
    if (this.isLightDescendant(/** @type {Node} */ (target)))
      return;

    keyboardEvent.preventDefault();
    keyboardEvent.stopImmediatePropagation();
    this._setPressed(true);
  },

  /**
   * @param {!KeyboardEvent} event .
   */
  _spaceKeyUpHandler: function(event) {
    var keyboardEvent = event.detail.keyboardEvent;
    var target = dom(keyboardEvent).localTarget;

    // Ignore the event if this is coming from a focused light child, since that
    // element will deal with it.
    if (this.isLightDescendant(/** @type {Node} */ (target)))
      return;

    if (this.pressed) {
      this._asyncClick();
    }
    this._setPressed(false);
  },

  // trigger click asynchronously, the asynchrony is useful to allow one
  // event handler to unwind before triggering another event
  _asyncClick: function() {
    this.async(function() {
      this.click();
    }, 1);
  },

  // any of these changes are considered a change to button state

  _pressedChanged: function(pressed) {
    this._changedButtonState();
  },

  _ariaActiveAttributeChanged: function(value, oldValue) {
    if (oldValue && oldValue != value && this.hasAttribute(oldValue)) {
      this.removeAttribute(oldValue);
    }
  },

  _activeChanged: function(active, ariaActiveAttribute) {
    if (this.toggles) {
      this.setAttribute(this.ariaActiveAttribute, active ? 'true' : 'false');
    } else {
      this.removeAttribute(this.ariaActiveAttribute);
    }
    this._changedButtonState();
  },

  _controlStateChanged: function() {
    if (this.disabled) {
      this._setPressed(false);
    } else {
      this._changedButtonState();
    }
  },

  // provide hook for follow-on behaviors to react to button-state

  _changedButtonState: function() {
    if (this._buttonStateChanged) {
      this._buttonStateChanged();  // abstract
    }
  }

};

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/**
 * `PaperRippleBehavior` dynamically implements a ripple when the element has
 * focus via pointer or keyboard.
 *
 * NOTE: This behavior is intended to be used in conjunction with and after
 * `IronButtonState` and `IronControlState`.
 *
 * @polymerBehavior PaperRippleBehavior
 */
const PaperRippleBehavior = {
  properties: {
    /**
     * If true, the element will not produce a ripple effect when interacted
     * with via the pointer.
     */
    noink: {type: Boolean, observer: '_noinkChanged'},

    /**
     * @type {Element|undefined}
     */
    _rippleContainer: {
      type: Object,
    }
  },

  /**
   * Ensures a `<paper-ripple>` element is available when the element is
   * focused.
   */
  _buttonStateChanged: function() {
    if (this.focused) {
      this.ensureRipple();
    }
  },

  /**
   * In addition to the functionality provided in `IronButtonState`, ensures
   * a ripple effect is created when the element is in a `pressed` state.
   */
  _downHandler: function(event) {
    IronButtonStateImpl._downHandler.call(this, event);
    if (this.pressed) {
      this.ensureRipple(event);
    }
  },

  /**
   * Ensures this element contains a ripple effect. For startup efficiency
   * the ripple effect is dynamically on demand when needed.
   * @param {!Event=} optTriggeringEvent (optional) event that triggered the
   * ripple.
   */
  ensureRipple: function(optTriggeringEvent) {
    if (!this.hasRipple()) {
      this._ripple = this._createRipple();
      this._ripple.noink = this.noink;
      var rippleContainer = this._rippleContainer || this.root;
      if (rippleContainer) {
        dom(rippleContainer).appendChild(this._ripple);
      }
      if (optTriggeringEvent) {
        // Check if the event happened inside of the ripple container
        // Fall back to host instead of the root because distributed text
        // nodes are not valid event targets
        var domContainer = dom(this._rippleContainer || this);
        var target = dom(optTriggeringEvent).rootTarget;
        if (domContainer.deepContains(/** @type {Node} */ (target))) {
          this._ripple.uiDownAction(optTriggeringEvent);
        }
      }
    }
  },

  /**
   * Returns the `<paper-ripple>` element used by this element to create
   * ripple effects. The element's ripple is created on demand, when
   * necessary, and calling this method will force the
   * ripple to be created.
   */
  getRipple: function() {
    this.ensureRipple();
    return this._ripple;
  },

  /**
   * Returns true if this element currently contains a ripple effect.
   * @return {boolean}
   */
  hasRipple: function() {
    return Boolean(this._ripple);
  },

  /**
   * Create the element's ripple effect via creating a `<paper-ripple>`.
   * Override this method to customize the ripple element.
   * @return {!PaperRippleElement} Returns a `<paper-ripple>` element.
   */
  _createRipple: function() {
    var element = /** @type {!PaperRippleElement} */ (
        document.createElement('paper-ripple'));
    return element;
  },

  _noinkChanged: function(noink) {
    if (this.hasRipple()) {
      this._ripple.noink = noink;
    }
  }
};

function getTemplate$d() {
    return html `<!--_html_template_start_-->    <style include="cr-hidden-style">:host{--active-shadow-rgb:var(--google-grey-800-rgb);--active-shadow-action-rgb:var(--google-blue-500-rgb);--bg-action:var(--google-blue-600);--border-color:var(--google-grey-300);--disabled-bg-action:var(--google-grey-100);--disabled-bg:white;--disabled-border-color:var(--google-grey-100);--disabled-text-color:var(--google-grey-600);--focus-shadow-color:rgba(var(--google-blue-600-rgb), .4);--hover-bg-action:rgba(var(--google-blue-600-rgb), .9);--hover-bg-color:rgba(var(--google-blue-500-rgb), .04);--hover-border-color:var(--google-blue-100);--hover-shadow-action-rgb:var(--google-blue-500-rgb);--ink-color-action:white;--ink-color:var(--google-blue-600);--ripple-opacity-action:.32;--ripple-opacity:.1;--text-color-action:white;--text-color:var(--google-blue-600)}@media (prefers-color-scheme:dark){:host{--active-bg:black linear-gradient(rgba(255, 255, 255, .06),
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
<!--_html_template_end_-->`;
}

// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'cr-button' is a button which displays slotted elements. It can
 * be interacted with like a normal button using click as well as space and
 * enter to effectively click the button and fire a 'click' event. It can also
 * style an icon inside of the button with the [has-icon] attribute.
 */
const CrButtonElementBase = mixinBehaviors([PaperRippleBehavior], PolymerElement);
class CrButtonElement extends CrButtonElementBase {
    static get is() {
        return 'cr-button';
    }
    static get template() {
        return getTemplate$d();
    }
    static get properties() {
        return {
            disabled: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
                observer: 'disabledChanged_',
            },
            /**
             * Use this property in order to configure the "tabindex" attribute.
             */
            customTabIndex: {
                type: Number,
                observer: 'applyTabIndex_',
            },
            /**
             * Flag used for formatting ripples on circle shaped cr-buttons.
             * @private
             */
            circleRipple: {
                type: Boolean,
                value: false,
            },
            hasPrefixIcon_: {
                type: Boolean,
                reflectToAttribute: true,
                value: false,
            },
            hasSuffixIcon_: {
                type: Boolean,
                reflectToAttribute: true,
                value: false,
            },
        };
    }
    constructor() {
        super();
        /**
         * It is possible to activate a tab when the space key is pressed down. When
         * this element has focus, the keyup event for the space key should not
         * perform a 'click'. |spaceKeyDown_| tracks when a space pressed and
         * handled by this element. Space keyup will only result in a 'click' when
         * |spaceKeyDown_| is true. |spaceKeyDown_| is set to false when element
         * loses focus.
         */
        this.spaceKeyDown_ = false;
        this.timeoutIds_ = new Set();
        this.addEventListener('blur', this.onBlur_.bind(this));
        // Must be added in constructor so that stopImmediatePropagation() works as
        // expected.
        this.addEventListener('click', this.onClick_.bind(this));
        this.addEventListener('keydown', this.onKeyDown_.bind(this));
        this.addEventListener('keyup', this.onKeyUp_.bind(this));
        this.addEventListener('pointerdown', this.onPointerDown_.bind(this));
    }
    ready() {
        super.ready();
        if (!this.hasAttribute('role')) {
            this.setAttribute('role', 'button');
        }
        if (!this.hasAttribute('tabindex')) {
            this.setAttribute('tabindex', '0');
        }
        if (!this.hasAttribute('aria-disabled')) {
            this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
        }
        FocusOutlineManager.forDocument(document);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.timeoutIds_.forEach(clearTimeout);
        this.timeoutIds_.clear();
    }
    setTimeout_(fn, delay) {
        if (!this.isConnected) {
            return;
        }
        const id = setTimeout(() => {
            this.timeoutIds_.delete(id);
            fn();
        }, delay);
        this.timeoutIds_.add(id);
    }
    disabledChanged_(newValue, oldValue) {
        if (!newValue && oldValue === undefined) {
            return;
        }
        if (this.disabled) {
            this.blur();
        }
        this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
        this.applyTabIndex_();
    }
    /**
     * Updates the tabindex HTML attribute to the actual value.
     */
    applyTabIndex_() {
        let value = this.customTabIndex;
        if (value === undefined) {
            value = this.disabled ? -1 : 0;
        }
        this.setAttribute('tabindex', value.toString());
    }
    onBlur_() {
        this.spaceKeyDown_ = false;
        // If a keyup event is never fired (e.g. after keydown the focus is moved to
        // another element), we need to clear the ripple here. 100ms delay was
        // chosen manually as a good time period for the ripple to be visible.
        this.setTimeout_(() => this.getRipple().uiUpAction(), 100);
    }
    onClick_(e) {
        if (this.disabled) {
            e.stopImmediatePropagation();
        }
    }
    onPrefixIconSlotChanged_() {
        this.hasPrefixIcon_ = this.$.prefixIcon.assignedElements().length > 0;
    }
    onSuffixIconSlotChanged_() {
        this.hasSuffixIcon_ = this.$.suffixIcon.assignedElements().length > 0;
    }
    onKeyDown_(e) {
        if (e.key !== ' ' && e.key !== 'Enter') {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        if (e.repeat) {
            return;
        }
        this.getRipple().uiDownAction();
        if (e.key === 'Enter') {
            this.click();
            // Delay was chosen manually as a good time period for the ripple to be
            // visible.
            this.setTimeout_(() => this.getRipple().uiUpAction(), 100);
        }
        else if (e.key === ' ') {
            this.spaceKeyDown_ = true;
        }
    }
    onKeyUp_(e) {
        if (e.key !== ' ' && e.key !== 'Enter') {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        if (this.spaceKeyDown_ && e.key === ' ') {
            this.spaceKeyDown_ = false;
            this.click();
            this.getRipple().uiUpAction();
        }
    }
    onPointerDown_() {
        this.ensureRipple();
    }
    /**
     * Customize the element's ripple. Overriding the '_createRipple' function
     * from PaperRippleBehavior.
     */
    /* eslint-disable-next-line @typescript-eslint/naming-convention */
    _createRipple() {
        const ripple = super._createRipple();
        if (this.circleRipple) {
            ripple.setAttribute('center', '');
            ripple.classList.add('circle');
        }
        return ripple;
    }
}
customElements.define(CrButtonElement.is, CrButtonElement);

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/*
A set of layout classes that let you specify layout properties directly in
markup. You must include this file in every element that needs to use them.

Sample use:

    import '../iron-flex-layout/iron-flex-layout-classes.js';

    const template = html`
      <style is="custom-style" include="iron-flex iron-flex-alignment"></style>
      <style>
        .test { width: 100px; }
      </style>
      <div class="layout horizontal center-center">
        <div class="test">horizontal layout center alignment</div>
      </div>
    `;
    document.body.appendChild(template.content);

The following imports are available:
 - iron-flex
 - iron-flex-reverse
 - iron-flex-alignment
 - iron-flex-factors
 - iron-positioning
*/

const template$3 = html`
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
`;
template$3.setAttribute('style', 'display: none;');
document.head.appendChild(template$3.content);

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/**
 * `iron-range-behavior` provides the behavior for something with a minimum to
 * maximum range.
 *
 * @demo demo/index.html
 * @polymerBehavior
 */
const IronRangeBehavior = {

  properties: {

    /**
     * The number that represents the current value.
     */
    value: {type: Number, value: 0, notify: true, reflectToAttribute: true},

    /**
     * The number that indicates the minimum value of the range.
     */
    min: {type: Number, value: 0, notify: true},

    /**
     * The number that indicates the maximum value of the range.
     */
    max: {type: Number, value: 100, notify: true},

    /**
     * Specifies the value granularity of the range's value.
     */
    step: {type: Number, value: 1, notify: true},

    /**
     * Returns the ratio of the value.
     */
    ratio: {type: Number, value: 0, readOnly: true, notify: true},
  },

  observers: ['_update(value, min, max, step)'],

  _calcRatio: function(value) {
    return (this._clampValue(value) - this.min) / (this.max - this.min);
  },

  _clampValue: function(value) {
    return Math.min(this.max, Math.max(this.min, this._calcStep(value)));
  },

  _calcStep: function(value) {
    // polymer/issues/2493
    value = parseFloat(value);

    if (!this.step) {
      return value;
    }

    var numSteps = Math.round((value - this.min) / this.step);
    if (this.step < 1) {
      /**
       * For small values of this.step, if we calculate the step using
       * `Math.round(value / step) * step` we may hit a precision point issue
       * eg. 0.1 * 0.2 =  0.020000000000000004
       * http://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html
       *
       * as a work around we can divide by the reciprocal of `step`
       */
      return numSteps / (1 / this.step) + this.min;
    } else {
      return numSteps * this.step + this.min;
    }
  },

  _validateValue: function() {
    var v = this._clampValue(this.value);
    this.value = this.oldValue = isNaN(v) ? this.oldValue : v;
    return this.value !== v;
  },

  _update: function() {
    this._validateValue();
    this._setRatio(this._calcRatio(this.value) * 100);
  }

};

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/**
Material design: [Progress &
activity](https://www.google.com/design/spec/components/progress-activity.html)

The progress bars are for situations where the percentage completed can be
determined. They give users a quick sense of how much longer an operation
will take.

Example:

    <paper-progress value="10"></paper-progress>

There is also a secondary progress which is useful for displaying intermediate
progress, such as the buffer level during a streaming playback progress bar.

Example:

    <paper-progress value="10" secondary-progress="30"></paper-progress>

### Styling progress bar:

To change the active progress bar color:

    paper-progress {
       --paper-progress-active-color: #e91e63;
    }

To change the secondary progress bar color:

    paper-progress {
      --paper-progress-secondary-color: #f8bbd0;
    }

To change the progress bar background color:

    paper-progress {
      --paper-progress-container-color: #64ffda;
    }

Add the class `transiting` to a paper-progress to animate the progress bar when
the value changed. You can also customize the transition:

    paper-progress {
      --paper-progress-transition-duration: 0.08s;
      --paper-progress-transition-timing-function: ease;
      --paper-progress-transition-delay: 0s;
    }

To change the duration of the indeterminate cycle:

    paper-progress {
      --paper-progress-indeterminate-cycle-duration: 2s;
    }

The following mixins are available for styling:

Custom property | Description | Default
----------------|-------------|---------
`--paper-progress-transition-duration` | Duration of the transition | `0.08s`
`--paper-progress-transition-timing-function` | The timing function for the transition | `ease`
`--paper-progress-transition-delay` | delay for the transition | `0s`
`--paper-progress-container-color` | Color of the container | `--google-grey-300`
`--paper-progress-active-color` | The color of the active bar | `--google-green-500`
`--paper-progress-secondary-color` | The color of the secondary bar | `--google-green-100`
`--paper-progress-disabled-active-color` | The color of the active bar if disabled | `--google-grey-500`
`--paper-progress-disabled-secondary-color` | The color of the secondary bar if disabled  | `--google-grey-300`
`--paper-progress-height` | The height of the progress bar | `4px`
`--paper-progress-indeterminate-cycle-duration` | Duration of an indeterminate cycle | `2s`

@group Paper Elements
@element paper-progress
@demo demo/index.html
*/
Polymer({
  _template: html`
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
`,

  is: 'paper-progress',
  behaviors: [IronRangeBehavior],

  properties: {
    /**
     * The number that represents the current secondary progress.
     */
    secondaryProgress: {type: Number, value: 0},

    /**
     * The secondary ratio
     */
    secondaryRatio: {type: Number, value: 0, readOnly: true},

    /**
     * Use an indeterminate progress indicator.
     */
    indeterminate:
        {type: Boolean, value: false, observer: '_toggleIndeterminate'},

    /**
     * True if the progress is disabled.
     */
    disabled: {
      type: Boolean,
      value: false,
      reflectToAttribute: true,
      observer: '_disabledChanged'
    }
  },

  observers:
      ['_progressChanged(secondaryProgress, value, min, max, indeterminate)'],

  hostAttributes: {role: 'progressbar'},

  _toggleIndeterminate: function(indeterminate) {
    // If we use attribute/class binding, the animation sometimes doesn't
    // translate properly on Safari 7.1. So instead, we toggle the class here in
    // the update method.
    this.toggleClass('indeterminate', indeterminate, this.$.primaryProgress);
  },

  _transformProgress: function(progress, ratio) {
    var transform = 'scaleX(' + (ratio / 100) + ')';
    progress.style.transform = progress.style.webkitTransform = transform;
  },

  _mainRatioChanged: function(ratio) {
    this._transformProgress(this.$.primaryProgress, ratio);
  },

  _progressChanged: function(
      secondaryProgress, value, min, max, indeterminate) {
    secondaryProgress = this._clampValue(secondaryProgress);
    value = this._clampValue(value);

    var secondaryRatio = this._calcRatio(secondaryProgress) * 100;
    var mainRatio = this._calcRatio(value) * 100;

    this._setSecondaryRatio(secondaryRatio);
    this._transformProgress(this.$.secondaryProgress, secondaryRatio);
    this._transformProgress(this.$.primaryProgress, mainRatio);

    this.secondaryProgress = secondaryProgress;

    if (indeterminate) {
      this.removeAttribute('aria-valuenow');
    } else {
      this.setAttribute('aria-valuenow', value);
    }
    this.setAttribute('aria-valuemin', min);
    this.setAttribute('aria-valuemax', max);
  },

  _disabledChanged: function(disabled) {
    this.setAttribute('aria-disabled', disabled ? 'true' : 'false');
  },

  _hideSecondaryProgress: function(secondaryRatio) {
    return secondaryRatio === 0;
  }
});

const styleMod$4 = document.createElement('dom-module');
styleMod$4.appendChild(html `
  <template>
    <style>
:host-context([cros]) a:not(.item)[href]{color:var(--cros-link-color)}:host-context([cros]) cr-button[has-prefix-icon_],:host-context([cros]) cr-button[has-suffix-icon_]{--iron-icon-fill-color:currentColor}:host-context([cros]) cr-dialog::part(dialog){--cr-dialog-background-color:var(--cros-bg-color-elevation-3);background-image:none;box-shadow:var(--cros-elevation-3-shadow)}:host-context([cros]) cr-radio-button{--cr-radio-button-checked-color:var(--cros-radio-button-color);--cr-radio-button-checked-ripple-color:var(--cros-radio-button-ripple-color);--cr-radio-button-unchecked-color:var(--cros-radio-button-color-unchecked);--cr-radio-button-unchecked-ripple-color:var(--cros-radio-button-ripple-color-unchecked)}:host-context([cros]) cr-toast{--cr-toast-background-color:var(--cros-toast-background-color);--cr-toast-background:var(--cros-toast-background-color);--cr-toast-text-color:var(--cros-toast-text-color);--iron-icon-fill-color:var(--cros-toast-icon-color)}:host-context([cros]) cr-toast .error-message{color:var(--cros-toast-text-color)}:host-context([cros]) cr-toggle{--cr-toggle-checked-bar-color:var(--cros-switch-track-color-active);--cr-toggle-checked-bar-opacity:100%;--cr-toggle-checked-button-color:var(--cros-switch-knob-color-active);--cr-toggle-checked-ripple-color:var(--cros-focus-aura-color);--cr-toggle-unchecked-bar-color:var(--cros-switch-track-color-inactive);--cr-toggle-unchecked-button-color:var(--cros-switch-knob-color-inactive);--cr-toggle-unchecked-ripple-color:var(--cros-ripple-color);--cr-toggle-box-shadow:var(--cros-elevation-1-shadow);--cr-toggle-ripple-diameter:32px}:host-context([cros]) cr-toggle:focus{--cr-toggle-ripple-ring:2px solid var(--cros-focus-ring-color)}:host-context([cros]) .primary-toggle{color:var(--cros-text-color-secondary)}:host-context([cros]) .primary-toggle[checked]{color:var(--cros-text-color-prominent)}:host-context([cros]) paper-spinner-lite{--paper-spinner-color:var(--cros-icon-color-prominent)}:host-context([cros]) cr-tooltip-icon{--cr-link-color:var(--cros-tooltip-link-color)}:host-context(body.jelly-enabled){--cros-button-label-color-primary:var(--cros-sys-on_primary);--cros-link-color:var(--cros-sys-primary);--cros-separator-color:var(--cros-sys-separator);--cros-tab-slider-track-color:var(--cros-sys-surface_variant, 80%);--cr-form-field-label-color:var(--cros-sys-on_surface);--cr-link-color:var(--cros-sys-primary);--cr-primary-text-color:var(--cros-sys-on_surface);--cr-secondary-text-color:var(--cros-sys-on_surface_variant)}:host-context(body.jelly-enabled) cr-button{--text-color:var(--cros-sys-on_primary_container);--ink-color:var(--cros-sys-ripple_primary);--iron-icon-fill-color:currentColor;--hover-bg-color:var(--cros-sys-hover_on_subtle);--ripple-opacity:.1;--bg-action:var(--cros-sys-primary);--ink-color-action:var(--cros-sys-ripple_primary);--text-color-action:var(--cros-sys-on_primary);--hover-bg-action:var(--cros-sys-hover_on_prominent);--ripple-opacity-action:1;--disabled-bg:var(--cros-sys-disabled_container);--disabled-bg-action:var(--cros-sys-disabled_container);--disabled-text-color:var(--cros-sys-disabled);background-color:var(--cros-sys-primary_container);border:none}:host-context(body.jelly-enabled) cr-button:hover::part(hoverBackground){background-color:var(--hover-bg-color);display:block}:host-context(body.jelly-enabled) cr-button.action-button:not(:active):hover,:host-context(body.jelly-enabled) cr-button:active{box-shadow:none}:host-context(body.jelly-enabled) cr-button.action-button{background-color:var(--bg-action)}:host-context(body.jelly-enabled) cr-button.action-button:hover::part(hoverBackground){background-color:var(--hover-bg-action)}:host-context(body.jelly-enabled) cr-button[disabled]{background-color:var(--cros-sys-disabled_container)}:host-context(body.jelly-enabled):host-context(.focus-outline-visible) cr-button:focus{box-shadow:none;outline:2px solid var(--cros-sys-focus_ring)}:host-context(body.jelly-enabled) cr-checkbox{--cr-checkbox-checked-box-color:var(--cros-sys-primary);--cr-checkbox-ripple-checked-color:var(--cros-sys-ripple_primary);--cr-checkbox-checked-ripple-opacity:1;--cr-checkbox-mark-color:var(--cros-sys-inverse_on_surface);--cr-checkbox-ripple-unchecked-color:var(--cros-sys-ripple_primary);--cr-checkbox-unchecked-box-color:var(--cros-sys-on_surface);--cr-checkbox-unchecked-ripple-opacity:1}:host-context(body.jelly-enabled) cr-dialog::part(dialog){--cr-dialog-background-color:var(--cros-sys-base_elevated);background-image:none;box-shadow:0 0 12px 0 var(--cros-sys-shadow)}:host-context(body.jelly-enabled) cr-dialog>[slot=title]{font:var(--cros-display-7-font)}:host-context(body.jelly-enabled) cr-drawer{--cr-drawer-background-color:var(--cros-sys-app_base_shaded)}:host-context(body.jelly-enabled) cr-expand-button::part(icon),:host-context(body.jelly-enabled) cr-icon-button,:host-context(body.jelly-enabled) cr-link-row::part(icon){--cr-icon-button-fill-color:var(--cros-sys-secondary)}:host-context(body.jelly-enabled) cr-input,:host-context(body.jelly-enabled) cr-search-field::part(searchInput),:host-context(body.jelly-enabled) cr-textarea{--cr-input-background-color:var(--cros-sys-input_field_on_base);--cr-input-error-color:var(--cros-sys-error);--cr-input-focus-color:var(--cros-sys-primary);--cr-input-placeholder-color:var(--cros-sys-secondary)}:host-context(body.jelly-enabled) .md-select{--md-select-bg-color:var(--cros-sys-input_field_on_base);--md-select-focus-shadow-color:var(--cros-sys-primary);--md-select-option-bg-color:var(--cros-sys-base_elevated);--md-select-text-color:var(--cros-sys-on_surface)}:host-context(body.jelly-enabled) cr-action-menu{--cr-menu-background-color:var(--cros-sys-base_elevated);--cr-menu-background-focus-color:var(--cros-sys-hover_on_subtle)}:host-context(body.jelly-enabled),:host-context(body.jelly-enabled) cr-radio-button{--cr-radio-button-checked-color:var(--cros-sys-primary);--cr-radio-button-checked-ripple-color:var(--cros-sys-ripple_primary);--cr-radio-button-unchecked-color:var(--cros-sys-on_surface);--cr-radio-button-unchecked-ripple-color:var(--cros-sys-ripple_neutral_on_subtle)}:host-context(body.jelly-enabled) cr-card-radio-button{--cr-card-background-color:var(--cros-sys-app_base);--cr-checked-color:var(--cros-sys-primary);--cr-radio-button-checked-ripple-color:var(--cros-sys-ripple_primary);--hover-bg-color:var(--cros-sys-hover_on_subtle)}:host-context(body.jelly-enabled) cr-search-field{--cr-search-field-clear-icon-fill:var(--cros-sys-primary);--cr-search-field-clear-icon-margin-end:6px;--cr-search-field-input-border-bottom:none;--cr-search-field-input-padding-start:8px;--cr-search-field-input-underline-border-radius:4px;--cr-search-field-search-icon-display:none;--cr-search-field-search-icon-fill:var(--cros-sys-primary);--cr-search-field-search-icon-inline-display:block;--cr-search-field-search-icon-inline-margin-start:6px;border-radius:4px}:host-context(body.jelly-enabled) cr-slider{--cr-slider-active-color:var(--cros-sys-primary);--cr-slider-container-color:var(--cros-sys-primary_container);--cr-slider-container-disabled-color:var(--cros-sys-disabled_container);--cr-slider-disabled-color:var(--cros-sys-disabled);--cr-slider-knob-active-color:var(--cros-sys-primary);--cr-slider-knob-disabled-color:var(--cros-sys-disabled);--cr-slider-marker-active-color:var(--cros-sys-primary_container);--cr-slider-marker-color:var(--cros-sys-primary);--cr-slider-marker-disabled-color:var(--cros-sys-disabled);--cr-slider-ripple-color:var(--cros-sys-hover_on_prominent)}:host-context(body.jelly-enabled) cr-slider:not([disabled])::part(knob){background-color:var(--cros-sys-primary)}:host-context(body.jelly-enabled) cr-slider[disabled]::part(knob){border:none}:host-context(body.jelly-enabled) cr-slider::part(label){background:var(--cros-sys-primary);color:var(--cros-sys-on_primary)}:host-context(body.jelly-enabled) cr-tabs{--cr-tabs-selected-color:var(--cros-sys-primary)}:host-context(body.jelly-enabled) cr-toggle{--cr-toggle-checked-bar-color:var(--cros-sys-primary_container);--cr-toggle-checked-bar-opacity:100%;--cr-toggle-checked-button-color:var(--cros-sys-primary);--cr-toggle-checked-ripple-color:var(--cros-sys-hover_on_prominent);--cr-toggle-unchecked-bar-color:var(--cros-sys-secondary);--cr-toggle-unchecked-button-color:var(--cros-sys-surface_variant);--cr-toggle-unchecked-ripple-color:var(--cros-sys-hover_on_prominent);--cr-toggle-box-shadow:var(--cros-elevation-1-shadow);--cr-toggle-ripple-diameter:32px}:host-context(body.jelly-enabled) cr-toggle:focus{--cr-toggle-ripple-ring:2px solid var(--cros-sys-focus_ring)}
    </style>
  </template>
`.content);
styleMod$4.register('cros-color-overrides');

// Copyright 2013 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview Assertion support.
 */

/**
 * Note: This method is deprecated. Use the equvalent method in assert_ts.ts
 * instead.
 * Verify |condition| is truthy and return |condition| if so.
 * @template T
 * @param {T} condition A condition to check for truthiness.  Note that this
 *     may be used to test whether a value is defined or not, and we don't want
 *     to force a cast to Boolean.
 * @param {string=} opt_message A message to show on failure.
 * @return {T} A non-null |condition|.
 * @closurePrimitive {asserts.truthy}
 * @suppress {reportUnknownTypes} because T is not sufficiently constrained.
 */
function assert$1(condition, opt_message) {
  if (!condition) {
    let message = 'Assertion failed';
    if (opt_message) {
      message = message + ': ' + opt_message;
    }
    const error = new Error(message);
    const global = function() {
      const thisOrSelf = this || self;
      /** @type {boolean} */
      thisOrSelf.traceAssertionsForTesting;
      return thisOrSelf;
    }();
    if (global.traceAssertionsForTesting) {
      console.warn(error.stack);
    }
    throw error;
  }
  return condition;
}

/**
 * Note: This method is deprecated. Use the equvalent method in assert_ts.ts
 * instead.
 * Call this from places in the code that should never be reached.
 *
 * For example, handling all the values of enum with a switch() like this:
 *
 *   function getValueFromEnum(enum) {
 *     switch (enum) {
 *       case ENUM_FIRST_OF_TWO:
 *         return first
 *       case ENUM_LAST_OF_TWO:
 *         return last;
 *     }
 *     assertNotReached();
 *     return document;
 *   }
 *
 * This code should only be hit in the case of serious programmer error or
 * unexpected input.
 *
 * @param {string=} message A message to show when this is hit.
 * @closurePrimitive {asserts.fail}
 */
function assertNotReached$1(message) {
  assert$1(false, message || 'Unreachable code hit');
}

/**
 * @param {*} value The value to check.
 * @param {function(new: T, ...)} type A user-defined constructor.
 * @param {string=} message A message to show when this is hit.
 * @return {T}
 * @template T
 */
function assertInstanceof(value, type, message) {
  // We don't use assert immediately here so that we avoid constructing an error
  // message if we don't have to.
  if (!(value instanceof type)) {
    assertNotReached$1(
        message ||
        'Value ' + value + ' is not a[n] ' + (type.name || typeof type));
  }
  return value;
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// clang-format on


let hideInk = false;

document.addEventListener('pointerdown', function() {
  hideInk = true;
}, true);

document.addEventListener('keydown', function() {
  hideInk = false;
}, true);

/**
 * Attempts to track whether focus outlines should be shown, and if they
 * shouldn't, removes the "ink" (ripple) from a control while focusing it.
 * This is helpful when a user is clicking/touching, because it's not super
 * helpful to show focus ripples in that case. This is Polymer-specific.
 * @param {!Element} toFocus
 */
const focusWithoutInk = function(toFocus) {
  // |toFocus| does not have a 'noink' property, so it's unclear whether the
  // element has "ink" and/or whether it can be suppressed. Just focus().
  if (!('noink' in toFocus) || !hideInk) {
    toFocus.focus();
    return;
  }

  // Make sure the element is in the document we're listening to events on.
  assert$1(document === toFocus.ownerDocument);
  const {noink} = toFocus;
  toFocus.noink = true;
  toFocus.focus();
  toFocus.noink = noink;
};

// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


/**
 * Make a string safe for Polymer bindings that are inner-h-t-m-l or other
 * innerHTML use.
 * @param {string} rawString The unsanitized string
 * @param {SanitizeInnerHtmlOpts=} opts Optional additional allowed tags and
 *     attributes.
 * @return {string}
 */
const sanitizeInnerHtmlInternal$1 = function(rawString, opts) {
  opts = opts || {};
  return parseHtmlSubset$1(`<b>${rawString}</b>`, opts.tags, opts.attrs)
      .firstChild.innerHTML;
};

let sanitizedPolicy$1 = null;

/**
 * Same as |sanitizeInnerHtmlInternal|, but it passes through sanitizedPolicy
 * to create a TrustedHTML.
 * TrustedTypePolicy: createHTML() takes an optional array but our usage for
 * sanitizeInnerHtml uses a singular opt argument. We specify the first element.
 * @param {string} rawString The unsanitized string
 * @param {SanitizeInnerHtmlOpts=} opts Optional additional allowed tags and
 *     attributes.
 * @return {TrustedHTML}
 */
function sanitizeInnerHtml$1(rawString, opts) {
  assert$1(window.trustedTypes);
  if (sanitizedPolicy$1 === null) {
    // Initialize |sanitizedPolicy| lazily.
    sanitizedPolicy$1 =
        window.trustedTypes.createPolicy('ash-deprecated-sanitize-inner-html', {
          createHTML: (string, ...opts) =>
              sanitizeInnerHtmlInternal$1(string, opts[0]),
          createScript: (message) => assertNotReached$1(message),
          createScriptURL: (message) => assertNotReached$1(message),
        });
  }
  return sanitizedPolicy$1.createHTML(rawString, opts);
}

/**
 * Parses a very small subset of HTML. This ensures that insecure HTML /
 * javascript cannot be injected into WebUI.
 * @param {string} s The string to parse.
 * @param {!Array<string>=} extraTags Optional extra allowed tags.
 * @param {!Array<string>=} extraAttrs
 *     Optional extra allowed attributes (all tags are run through these).
 * @throws {Error} In case of non supported markup.
 * @return {DocumentFragment} A document fragment containing the DOM tree.
 */
const parseHtmlSubset$1 = (function() {

  /** @type {!AllowFunction} */
  const allowAttribute = (node, value) => true;

  /**
   * Allow-list of attributes in parseHtmlSubset.
   * @type {!Map<string, !AllowFunction>}
   * @const
   */
  const allowedAttributes = new Map([
    [
      'href',
      (node, value) => {
        // Only allow a[href] starting with chrome:// or https:// or equaling
        // to #.
        return node.tagName === 'A' &&
            (value.startsWith('chrome://') || value.startsWith('https://') ||
             value === '#');
      },
    ],
    [
      'target',
      (node, value) => {
        // Only allow a[target='_blank'].
        // TODO(dbeam): are there valid use cases for target !== '_blank'?
        return node.tagName === 'A' && value === '_blank';
      },
    ],
  ]);

  /**
   * Allow-list of optional attributes in parseHtmlSubset.
   * @type {!Map<string, !AllowFunction>}
   * @const
   */
  const allowedOptionalAttributes = new Map([
    ['class', allowAttribute],
    ['id', allowAttribute],
    ['is', (node, value) => value === 'action-link' || value === ''],
    ['role', (node, value) => value === 'link'],
    [
      'src',
      (node, value) => {
        // Only allow img[src] starting with chrome://
        return node.tagName === 'IMG' && value.startsWith('chrome://');
      },
    ],
    ['tabindex', allowAttribute],
    ['aria-hidden', allowAttribute],
    ['aria-labelledby', allowAttribute],
  ]);

  /**
   * Allow-list of tag names in parseHtmlSubset.
   * @type {!Set<string>}
   * @const
   */
  const allowedTags = new Set(
      ['A', 'B', 'I', 'BR', 'DIV', 'EM', 'KBD', 'P', 'PRE', 'SPAN', 'STRONG']);

  /**
   * Allow-list of optional tag names in parseHtmlSubset.
   * @type {!Set<string>}
   * @const
   */
  const allowedOptionalTags = new Set(['IMG', 'LI', 'UL']);

  /**
   * This policy maps a given string to a `TrustedHTML` object
   * without performing any validation. Callsites must ensure
   * that the resulting object will only be used in inert
   * documents. Initialized lazily.
   * @type {!TrustedTypePolicy}
   */
  let unsanitizedPolicy;

  /**
   * @param {!Array<string>} optTags an Array to merge.
   * @return {!Set<string>} Set of allowed tags.
   */
  function mergeTags(optTags) {
    const clone = new Set(allowedTags);
    optTags.forEach(str => {
      const tag = str.toUpperCase();
      if (allowedOptionalTags.has(tag)) {
        clone.add(tag);
      }
    });
    return clone;
  }

  /**
   * @param {!Array<string>} optAttrs an Array to merge.
   * @return {!Map<string, !AllowFunction>} Map of allowed
   *     attributes.
   */
  function mergeAttrs(optAttrs) {
    const clone = new Map([...allowedAttributes]);
    optAttrs.forEach(key => {
      if (allowedOptionalAttributes.has(key)) {
        clone.set(key, allowedOptionalAttributes.get(key));
      }
    });
    return clone;
  }

  function walk(n, f) {
    f(n);
    for (let i = 0; i < n.childNodes.length; i++) {
      walk(n.childNodes[i], f);
    }
  }

  function assertElement(tags, node) {
    if (!tags.has(node.tagName)) {
      throw Error(node.tagName + ' is not supported');
    }
  }

  function assertAttribute(attrs, attrNode, node) {
    const n = attrNode.nodeName;
    const v = attrNode.nodeValue;
    if (!attrs.has(n) || !attrs.get(n)(node, v)) {
      throw Error(node.tagName + '[' + n + '="' + v + '"] is not supported');
    }
  }

  return function(s, extraTags, extraAttrs) {
    const tags = extraTags ? mergeTags(extraTags) : allowedTags;
    const attrs = extraAttrs ? mergeAttrs(extraAttrs) : allowedAttributes;

    const doc = document.implementation.createHTMLDocument('');
    const r = doc.createRange();
    r.selectNode(doc.body);

    if (window.trustedTypes) {
      if (!unsanitizedPolicy) {
        unsanitizedPolicy = trustedTypes.createPolicy(
            'ash-deprecated-parse-html-subset',
            {createHTML: untrustedHTML => untrustedHTML});
      }
      s = unsanitizedPolicy.createHTML(s);
    }

    // This does not execute any scripts because the document has no view.
    const df = r.createContextualFragment(s);
    walk(df, function(node) {
      switch (node.nodeType) {
        case Node.ELEMENT_NODE:
          assertElement(tags, node);
          const nodeAttrs = node.attributes;
          for (let i = 0; i < nodeAttrs.length; ++i) {
            assertAttribute(attrs, nodeAttrs[i], node);
          }
          break;

        case Node.COMMENT_NODE:
        case Node.DOCUMENT_FRAGMENT_NODE:
        case Node.TEXT_NODE:
          break;

        default:
          throw Error('Node type ' + node.nodeType + ' is not supported');
      }
    });
    return df;
  };
})();

// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


/** @polymerBehavior */
const I18nBehavior = {
  // 
  // Dynamic locale changes are only relevant in ChromeOS OOBE/Login flows.
  // On other platforms Chrome process is restarted upon locale changes.
  // TODO(crbug.com/955194): move it to OobeI18nBehavior.
  properties: {
    /**
     * The locale the UI is presented in. Used to signal dynamic locale
     * change.
     */
    locale: {
      type: String,
      value: '',
    },
  },

  /**
   * Call this when UI strings may have changed. This will send an update to
   * any data bindings to i18nDynamic(locale, ...).
   * @suppress {checkTypes}
   */
  i18nUpdateLocale() {
    this.locale = loadTimeData.getString('app_locale');
  },
  // 

  /**
   * Returns a translated string where $1 to $9 are replaced by the given
   * values.
   * @param {string} id The ID of the string to translate.
   * @param {...string} varArgs Values to replace the placeholders $1 to $9
   *     in the string.
   * @return {string} A translated, substituted string.
   * @private
   */
  i18nRaw_(id, varArgs) {
    return arguments.length === 1 ?
        loadTimeData.getString(id) :
        loadTimeData.getStringF.apply(loadTimeData, arguments);
  },

  /**
   * Returns a translated string where $1 to $9 are replaced by the given
   * values. Also sanitizes the output to filter out dangerous HTML/JS.
   * Use with Polymer bindings that are *not* inner-h-t-m-l.
   * NOTE: This is not related to $i18n{foo} in HTML, see file overview.
   * @param {string} id The ID of the string to translate.
   * @param {...string|number} varArgs Values to replace the placeholders $1
   *     to $9 in the string.
   * @return {string} A translated, sanitized, substituted string.
   */
  i18n(id, varArgs) {
    const rawString = this.i18nRaw_.apply(this, arguments);
    return parseHtmlSubset$1('<b>' + rawString + '</b>').firstChild.textContent;
  },

  /**
   * Similar to 'i18n', returns a translated, sanitized, substituted string.
   * It receives the string ID and a dictionary containing the substitutions
   * as well as optional additional allowed tags and attributes. Use with
   * Polymer bindings that are inner-h-t-m-l, for example.
   * @param {string} id The ID of the string to translate.
   * @param {SanitizeInnerHtmlOpts=} opts
   * @return {TrustedHTML}
   */
  i18nAdvanced(id, opts) {
    opts = opts || {};
    const args = [id].concat(opts.substitutions || []);
    const rawString = this.i18nRaw_.apply(this, args);
    return sanitizeInnerHtml$1(rawString, opts);
  },

  /**
   * Similar to 'i18n', with an unused |locale| parameter used to trigger
   * updates when |this.locale| changes.
   * @param {string} locale The UI language used.
   * @param {string} id The ID of the string to translate.
   * @param {...string} varArgs Values to replace the placeholders $1 to $9
   *     in the string.
   * @return {string} A translated, sanitized, substituted string.
   */
  i18nDynamic(locale, id, varArgs) {
    return this.i18n.apply(this, Array.prototype.slice.call(arguments, 1));
  },

  /**
   * Similar to 'i18nDynamic', but varArgs valus are interpreted as keys in
   * loadTimeData. This allows generation of strings that take other localized
   * strings as parameters.
   * @param {string} locale The UI language used.
   * @param {string} id The ID of the string to translate.
   * @param {...string} varArgs Values to replace the placeholders $1 to $9
   *     in the string. Values are interpreted as strings IDs if found in the
   *     list of localized strings.
   * @return {string} A translated, sanitized, substituted string.
   */
  i18nRecursive(locale, id, varArgs) {
    let args = Array.prototype.slice.call(arguments, 2);
    if (args.length > 0) {
      // Try to replace IDs with localized values.
      const self = this;
      args = args.map(function(str) {
        return self.i18nExists(str) ? loadTimeData.getString(str) : str;
      });
    }
    return this.i18nDynamic.apply(this, [locale, id].concat(args));
  },

  /**
   * Returns true if a translation exists for |id|.
   * @param {string} id
   * @return {boolean}
   */
  i18nExists(id) {
    return loadTimeData.valueExists(id);
  },
};

function getTemplate$c() {
  return html`<!--_html_template_start_--><style include="iron-positioning cros-color-overrides">
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
<!--_html_template_end_-->`;
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/** @enum {number} */
const ButtonState = {
  ENABLED: 1,
  DISABLED: 2,
  HIDDEN: 3,
};

/** @enum {number} */
const ButtonName = {
  CANCEL: 1,
  PAIR: 2,
};

/**
 * Device pairing authentication type. During device pairing, a device might
 * require additional authentication before pairing can be completed. This
 * is used to define which type of authentication is required.
 * @enum {number}
 */
const PairingAuthType = {
  NONE: 1,
  REQUEST_PIN_CODE: 2,
  REQUEST_PASSKEY: 3,
  DISPLAY_PIN_CODE: 4,
  DISPLAY_PASSKEY: 5,
  CONFIRM_PASSKEY: 6,
  AUTHORIZE_PAIRING: 7,
};

/** @enum {number} */
const DeviceItemState = {
  DEFAULT: 1,
  PAIRING: 2,
  FAILED: 3,
};

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


/**
 * @constructor
 * @implements {I18nBehaviorInterface}
 * @extends {PolymerElement}
 */
const SettingsBluetoothBasePageElementBase =
    mixinBehaviors([I18nBehavior], PolymerElement);

/** @polymer */
class SettingsBluetoothBasePageElement extends
    SettingsBluetoothBasePageElementBase {
  static get is() {
    return 'bluetooth-base-page';
  }

  static get template() {
    return getTemplate$c();
  }

  static get properties() {
    return {
      /**
       * Object representing the states of each button in the button bar.
       * @type {!ButtonBarState}
       */
      buttonBarState: {
        type: Object,
        value: {
          cancel: ButtonState.ENABLED,
          pair: ButtonState.HIDDEN,
        },
      },

      /** @type {boolean} */
      showScanProgress: {
        type: Boolean,
        value: false,
      },

      /**
       * Used to access |ButtonName| type in HTML.
       * @type {!ButtonName}
       */
      ButtonName: {
        type: Object,
        value: ButtonName,
      },

      /**
       * If true, sets the default focus to the first enabled button from the
       * end.
       * @type {boolean}
       */
      focusDefault: {
        type: Boolean,
        value: false,
      },
    };
  }

  /** @override */
  connectedCallback() {
    super.connectedCallback();
    afterNextRender(this, () => {
      if (!this.focusDefault) {
        return;
      }

      const buttons = this.shadowRoot.querySelectorAll('cr-button');
      // Focus to the first non-disabled, from the end.
      for (let i = buttons.length - 1; i >= 0; i--) {
        const button = /** @type {!CrButtonElement}*/ (buttons.item(i));
        if (!button.disabled) {
          focusWithoutInk(button);
          return;
        }
      }
    });
  }

  /** @private */
  onCancelClick_() {
    this.dispatchEvent(new CustomEvent('cancel', {
      bubbles: true,
      composed: true,
    }));
  }

  /** @private */
  onPairClick_() {
    this.dispatchEvent(new CustomEvent('pair', {
      bubbles: true,
      composed: true,
    }));
  }

  /**
   * @param {!ButtonName} buttonName
   * @return {boolean}
   * @private
   */
  shouldShowButton_(buttonName) {
    const state = this.getButtonBarState_(buttonName);
    return state !== ButtonState.HIDDEN;
  }

  /**
   * @param {!ButtonName} buttonName
   * @return {boolean}
   * @private
   */
  isButtonDisabled_(buttonName) {
    const state = this.getButtonBarState_(buttonName);
    return state === ButtonState.DISABLED;
  }

  /**
   * @param {!ButtonName} buttonName
   * @return {!ButtonState}
   * @private
   */
  getButtonBarState_(buttonName) {
    switch (buttonName) {
      case ButtonName.CANCEL:
        return this.buttonBarState.cancel;
      case ButtonName.PAIR:
        return this.buttonBarState.pair;
      default:
        assertNotReached$1();
        return ButtonState.ENABLED;
    }
  }
}

customElements.define(
    SettingsBluetoothBasePageElement.is, SettingsBluetoothBasePageElement);

const styleMod$3 = document.createElement('dom-module');
styleMod$3.appendChild(html `
  <template>
    <style>
.icon-arrow-back{--cr-icon-image:url(chrome://resources/images/icon_arrow_back.svg)}.icon-arrow-dropdown{--cr-icon-image:url(chrome://resources/images/icon_arrow_dropdown.svg)}.icon-cancel{--cr-icon-image:url(chrome://resources/images/icon_cancel.svg)}.icon-clear{--cr-icon-image:url(chrome://resources/images/icon_clear.svg)}.icon-copy-content{--cr-icon-image:url(chrome://resources/images/icon_copy_content.svg)}.icon-delete-gray{--cr-icon-image:url(chrome://resources/images/icon_delete_gray.svg)}.icon-edit{--cr-icon-image:url(chrome://resources/images/icon_edit.svg)}.icon-file{--cr-icon-image:url(chrome://resources/images/icon_filetype_generic.svg)}.icon-folder-open{--cr-icon-image:url(chrome://resources/images/icon_folder_open.svg)}.icon-picture-delete{--cr-icon-image:url(chrome://resources/images/icon_picture_delete.svg)}.icon-expand-less{--cr-icon-image:url(chrome://resources/images/icon_expand_less.svg)}.icon-expand-more{--cr-icon-image:url(chrome://resources/images/icon_expand_more.svg)}.icon-external{--cr-icon-image:url(chrome://resources/images/open_in_new.svg)}.icon-more-vert{--cr-icon-image:url(chrome://resources/images/icon_more_vert.svg)}.icon-refresh{--cr-icon-image:url(chrome://resources/images/icon_refresh.svg)}.icon-search{--cr-icon-image:url(chrome://resources/images/icon_search.svg)}.icon-settings{--cr-icon-image:url(chrome://resources/images/icon_settings.svg)}.icon-visibility{--cr-icon-image:url(chrome://resources/images/icon_visibility.svg)}.icon-visibility-off{--cr-icon-image:url(chrome://resources/images/icon_visibility_off.svg)}.subpage-arrow{--cr-icon-image:url(chrome://resources/images/arrow_right.svg)}.cr-icon{-webkit-mask-image:var(--cr-icon-image);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--cr-icon-size);background-color:var(--cr-icon-color,var(--google-grey-700));flex-shrink:0;height:var(--cr-icon-ripple-size);margin-inline-end:var(--cr-icon-ripple-margin);margin-inline-start:var(--cr-icon-button-margin-start);user-select:none;width:var(--cr-icon-ripple-size)}:host-context([dir=rtl]) .cr-icon{transform:scaleX(-1)}.cr-icon.no-overlap{margin-inline-end:0;margin-inline-start:0}@media (prefers-color-scheme:dark){.cr-icon{background-color:var(--cr-icon-color,var(--google-grey-500))}}
    </style>
  </template>
`.content);
styleMod$3.register('cr-icons');

const styleMod$2 = document.createElement('dom-module');
styleMod$2.appendChild(html `
  <template>
    <style include="cr-hidden-style cr-icons">
:host,html{--scrollable-border-color:var(--google-grey-300)}@media (prefers-color-scheme:dark){:host,html{--scrollable-border-color:var(--google-grey-700)}}[actionable]{cursor:pointer}.hr{border-top:var(--cr-separator-line)}iron-list.cr-separators>:not([first]){border-top:var(--cr-separator-line)}[scrollable]{border-color:transparent;border-style:solid;border-width:1px 0;overflow-y:auto}[scrollable].is-scrolled{border-top-color:var(--scrollable-border-color)}[scrollable].can-scroll:not(.scrolled-to-bottom){border-bottom-color:var(--scrollable-border-color)}[scrollable] iron-list>:not(.no-outline):focus,[selectable]:focus,[selectable]>:focus{background-color:var(--cr-focused-item-color);outline:0}.scroll-container{display:flex;flex-direction:column;min-height:1px}[selectable]>*{cursor:pointer}.cr-centered-card-container{box-sizing:border-box;display:block;height:inherit;margin:0 auto;max-width:var(--cr-centered-card-max-width);min-width:550px;position:relative;width:calc(100% * var(--cr-centered-card-width-percentage))}.cr-container-shadow{box-shadow:inset 0 5px 6px -3px rgba(0,0,0,.4);height:var(--cr-container-shadow-height);left:0;margin:0 0 var(--cr-container-shadow-margin);opacity:0;pointer-events:none;position:relative;right:0;top:0;transition:opacity .5s;z-index:1}#cr-container-shadow-bottom{margin-bottom:0;margin-top:var(--cr-container-shadow-margin);transform:scaleY(-1)}#cr-container-shadow-bottom.has-shadow,#cr-container-shadow-top.has-shadow{opacity:var(--cr-container-shadow-max-opacity)}.cr-row{align-items:center;border-top:var(--cr-separator-line);display:flex;min-height:var(--cr-section-min-height);padding:0 var(--cr-section-padding)}.cr-row.continuation,.cr-row.first{border-top:none}.cr-row-gap{padding-inline-start:16px}.cr-button-gap{margin-inline-start:8px}paper-tooltip::part(tooltip){border-radius:var(--paper-tooltip-border-radius,2px);font-size:92.31%;font-weight:500;max-width:330px;min-width:var(--paper-tooltip-min-width,200px);padding:var(--paper-tooltip-padding,10px 8px)}.cr-padded-text{padding-block-end:var(--cr-section-vertical-padding);padding-block-start:var(--cr-section-vertical-padding)}.cr-title-text{color:var(--cr-title-text-color);font-size:107.6923%;font-weight:500}.cr-secondary-text{color:var(--cr-secondary-text-color);font-weight:400}.cr-form-field-label{color:var(--cr-form-field-label-color);display:block;font-size:var(--cr-form-field-label-font-size);font-weight:500;letter-spacing:.4px;line-height:var(--cr-form-field-label-line-height);margin-bottom:8px}.cr-vertical-tab{align-items:center;display:flex}.cr-vertical-tab::before{border-radius:0 3px 3px 0;content:'';display:block;flex-shrink:0;height:var(--cr-vertical-tab-height,100%);width:4px}.cr-vertical-tab.selected::before{background:var(--cr-vertical-tab-selected-color,var(--cr-checked-color))}:host-context([dir=rtl]) .cr-vertical-tab::before{transform:scaleX(-1)}.iph-anchor-highlight{background-color:var(--cr-iph-anchor-highlight-color)}
    </style>
  </template>
`.content);
styleMod$2.register('cr-shared-style');

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

class IronMeta {
  /**
   * @param {{
   *   type: (string|null|undefined),
   *   key: (string|null|undefined),
   *   value: *,
   * }=} options
   */
  constructor(options) {
    IronMeta[' '](options);

    /** @type {string} */
    this.type = (options && options.type) || 'default';
    /** @type {string|null|undefined} */
    this.key = options && options.key;
    if (options && 'value' in options) {
      /** @type {*} */
      this.value = options.value;
    }
  }

  /** @return {*} */
  get value() {
    var type = this.type;
    var key = this.key;

    if (type && key) {
      return IronMeta.types[type] && IronMeta.types[type][key];
    }
  }

  /** @param {*} value */
  set value(value) {
    var type = this.type;
    var key = this.key;

    if (type && key) {
      type = IronMeta.types[type] = IronMeta.types[type] || {};
      if (value == null) {
        delete type[key];
      } else {
        type[key] = value;
      }
    }
  }

  /** @return {!Array<*>} */
  get list() {
    var type = this.type;

    if (type) {
      var items = IronMeta.types[this.type];
      if (!items) {
        return [];
      }

      return Object.keys(items).map(function(key) {
        return metaDatas[this.type][key];
      }, this);
    }
  }

  /**
   * @param {string} key
   * @return {*}
   */
  byKey(key) {
    this.key = key;
    return this.value;
  }
}
// This function is used to convince Closure not to remove constructor calls
// for instances that are not held anywhere. For example, when
// `new IronMeta({...})` is used only for the side effect of adding a value.
IronMeta[' '] = function() {};

IronMeta.types = {};

var metaDatas = IronMeta.types;

/**
`iron-meta` is a generic element you can use for sharing information across the
DOM tree. It uses [monostate pattern](http://c2.com/cgi/wiki?MonostatePattern)
such that any instance of iron-meta has access to the shared information. You
can use `iron-meta` to share whatever you want (or create an extension [like
x-meta] for enhancements).

The `iron-meta` instances containing your actual data can be loaded in an
import, or constructed in any way you see fit. The only requirement is that you
create them before you try to access them.

Examples:

If I create an instance like this:

    <iron-meta key="info" value="foo/bar"></iron-meta>

Note that value="foo/bar" is the metadata I've defined. I could define more
attributes or use child nodes to define additional metadata.

Now I can access that element (and it's metadata) from any iron-meta instance
via the byKey method, e.g.

    meta.byKey('info');

Pure imperative form would be like:

    document.createElement('iron-meta').byKey('info');

Or, in a Polymer element, you can include a meta in your template:

    <iron-meta id="meta"></iron-meta>
    ...
    this.$.meta.byKey('info');

@group Iron Elements
@demo demo/index.html
@element iron-meta
*/
Polymer({

  is: 'iron-meta',

  properties: {

    /**
     * The type of meta-data.  All meta-data of the same type is stored
     * together.
     * @type {string}
     */
    type: {
      type: String,
      value: 'default',
    },

    /**
     * The key used to store `value` under the `type` namespace.
     * @type {?string}
     */
    key: {
      type: String,
    },

    /**
     * The meta-data to store or retrieve.
     * @type {*}
     */
    value: {
      type: String,
      notify: true,
    },

    /**
     * If true, `value` is set to the iron-meta instance itself.
     */
    self: {type: Boolean, observer: '_selfChanged'},

    __meta: {type: Boolean, computed: '__computeMeta(type, key, value)'}
  },

  hostAttributes: {hidden: true},

  __computeMeta: function(type, key, value) {
    var meta = new IronMeta({type: type, key: key});

    if (value !== undefined && value !== meta.value) {
      meta.value = value;
    } else if (this.value !== meta.value) {
      this.value = meta.value;
    }

    return meta;
  },

  get list() {
    return this.__meta && this.__meta.list;
  },

  _selfChanged: function(self) {
    if (self) {
      this.value = this;
    }
  },

  /**
   * Retrieves meta data value by key.
   *
   * @method byKey
   * @param {string} key The key of the meta-data to be returned.
   * @return {*}
   */
  byKey: function(key) {
    return new IronMeta({type: this.type, key: key}).value;
  }
});

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
/**
 * The `iron-iconset-svg` element allows users to define their own icon sets
 * that contain svg icons. The svg icon elements should be children of the
 * `iron-iconset-svg` element. Multiple icons should be given distinct id's.
 *
 * Using svg elements to create icons has a few advantages over traditional
 * bitmap graphics like jpg or png. Icons that use svg are vector based so
 * they are resolution independent and should look good on any device. They
 * are stylable via css. Icons can be themed, colorized, and even animated.
 *
 * Example:
 *
 *     <iron-iconset-svg name="my-svg-icons" size="24">
 *       <svg>
 *         <defs>
 *           <g id="shape">
 *             <rect x="12" y="0" width="12" height="24" />
 *             <circle cx="12" cy="12" r="12" />
 *           </g>
 *         </defs>
 *       </svg>
 *     </iron-iconset-svg>
 *
 * This will automatically register the icon set "my-svg-icons" to the iconset
 * database.  To use these icons from within another element, make a
 * `iron-iconset` element and call the `byId` method
 * to retrieve a given iconset. To apply a particular icon inside an
 * element use the `applyIcon` method. For example:
 *
 *     iconset.applyIcon(iconNode, 'car');
 *
 * @element iron-iconset-svg
 * @demo demo/index.html
 * @implements {Polymer.Iconset}
 */
Polymer({
  is: 'iron-iconset-svg',

  properties: {

    /**
     * The name of the iconset.
     */
    name: {type: String, observer: '_nameChanged'},

    /**
     * The size of an individual icon. Note that icons must be square.
     */
    size: {type: Number, value: 24},

    /**
     * Set to true to enable mirroring of icons where specified when they are
     * stamped. Icons that should be mirrored should be decorated with a
     * `mirror-in-rtl` attribute.
     *
     * NOTE: For performance reasons, direction will be resolved once per
     * document per iconset, so moving icons in and out of RTL subtrees will
     * not cause their mirrored state to change.
     */
    rtlMirroring: {type: Boolean, value: false},

    /**
     * Set to true to measure RTL based on the dir attribute on the body or
     * html elements (measured on document.body or document.documentElement as
     * available).
     */
    useGlobalRtlAttribute: {type: Boolean, value: false}
  },

  created: function() {
    this._meta = new IronMeta({type: 'iconset', key: null, value: null});
  },

  attached: function() {
    this.style.display = 'none';
  },

  /**
   * Construct an array of all icon names in this iconset.
   *
   * @return {!Array} Array of icon names.
   */
  getIconNames: function() {
    this._icons = this._createIconMap();
    return Object.keys(this._icons).map(function(n) {
      return this.name + ':' + n;
    }, this);
  },

  /**
   * Applies an icon to the given element.
   *
   * An svg icon is prepended to the element's shadowRoot if it exists,
   * otherwise to the element itself.
   *
   * If RTL mirroring is enabled, and the icon is marked to be mirrored in
   * RTL, the element will be tested (once and only once ever for each
   * iconset) to determine the direction of the subtree the element is in.
   * This direction will apply to all future icon applications, although only
   * icons marked to be mirrored will be affected.
   *
   * @method applyIcon
   * @param {Element} element Element to which the icon is applied.
   * @param {string} iconName Name of the icon to apply.
   * @return {?Element} The svg element which renders the icon.
   */
  applyIcon: function(element, iconName) {
    // Remove old svg element
    this.removeIcon(element);
    // install new svg element
    var svg = this._cloneIcon(
        iconName, this.rtlMirroring && this._targetIsRTL(element));
    if (svg) {
      // insert svg element into shadow root, if it exists
      var pde = dom(element.root || element);
      pde.insertBefore(svg, pde.childNodes[0]);
      return element._svgIcon = svg;
    }
    return null;
  },

  /**
   * Produce installable clone of the SVG element matching `id` in this
   * iconset, or `undefined` if there is no matching element.
   * @param {string} iconName Name of the icon to apply.
   * @param {boolean} targetIsRTL Whether the target element is RTL.
   * @return {Element} Returns an installable clone of the SVG element
   *     matching `id`.
   */
  createIcon: function(iconName, targetIsRTL) {
    return this._cloneIcon(iconName, this.rtlMirroring && targetIsRTL);
  },

  /**
   * Remove an icon from the given element by undoing the changes effected
   * by `applyIcon`.
   *
   * @param {Element} element The element from which the icon is removed.
   */
  removeIcon: function(element) {
    // Remove old svg element
    if (element._svgIcon) {
      dom(element.root || element).removeChild(element._svgIcon);
      element._svgIcon = null;
    }
  },

  /**
   * Measures and memoizes the direction of the element. Note that this
   * measurement is only done once and the result is memoized for future
   * invocations.
   */
  _targetIsRTL: function(target) {
    if (this.__targetIsRTL == null) {
      if (this.useGlobalRtlAttribute) {
        var globalElement =
            (document.body && document.body.hasAttribute('dir')) ?
            document.body :
            document.documentElement;

        this.__targetIsRTL = globalElement.getAttribute('dir') === 'rtl';
      } else {
        if (target && target.nodeType !== Node.ELEMENT_NODE) {
          target = target.host;
        }

        this.__targetIsRTL =
            target && window.getComputedStyle(target)['direction'] === 'rtl';
      }
    }

    return this.__targetIsRTL;
  },

  /**
   *
   * When name is changed, register iconset metadata
   *
   */
  _nameChanged: function() {
    this._meta.value = null;
    this._meta.key = this.name;
    this._meta.value = this;

    this.async(function() {
      this.fire('iron-iconset-added', this, {node: window});
    });
  },

  /**
   * Create a map of child SVG elements by id.
   *
   * @return {!Object} Map of id's to SVG elements.
   */
  _createIconMap: function() {
    // Objects chained to Object.prototype (`{}`) have members. Specifically,
    // on FF there is a `watch` method that confuses the icon map, so we
    // need to use a null-based object here.
    var icons = Object.create(null);
    dom(this).querySelectorAll('[id]').forEach(function(icon) {
      icons[icon.id] = icon;
    });
    return icons;
  },

  /**
   * Produce installable clone of the SVG element matching `id` in this
   * iconset, or `undefined` if there is no matching element.
   *
   * @return {Element} Returns an installable clone of the SVG element
   * matching `id`.
   */
  _cloneIcon: function(id, mirrorAllowed) {
    // create the icon map on-demand, since the iconset itself has no discrete
    // signal to know when it's children are fully parsed
    this._icons = this._icons || this._createIconMap();
    return this._prepareSvgClone(this._icons[id], this.size, mirrorAllowed);
  },

  /**
   * @param {Element} sourceSvg
   * @param {number} size
   * @param {Boolean} mirrorAllowed
   * @return {Element}
   */
  _prepareSvgClone: function(sourceSvg, size, mirrorAllowed) {
    if (sourceSvg) {
      var content = sourceSvg.cloneNode(true),
          svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
          viewBox =
              content.getAttribute('viewBox') || '0 0 ' + size + ' ' + size,
          cssText =
              'pointer-events: none; display: block; width: 100%; height: 100%;';

      if (mirrorAllowed && content.hasAttribute('mirror-in-rtl')) {
        cssText +=
            '-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;';
      }

      svg.setAttribute('viewBox', viewBox);
      svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
      svg.setAttribute('focusable', 'false');
      // TODO(dfreedm): `pointer-events: none` works around
      // https://crbug.com/370136
      // TODO(sjmiles): inline style may not be ideal, but avoids requiring a
      // shadow-root
      svg.style.cssText = cssText;
      svg.appendChild(content).removeAttribute('id');
      return svg;
    }
    return null;
  }

});

const template$2 = html`<iron-iconset-svg name="bluetooth" size="20">
  <svg>
    <defs>
      <g id="computer"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 15H19C19.5523 15 20 15.4477 20 16C20 16.5523 19.5523 17 19 17H1C0.447715 17 0 16.5523 0 16C0 15.4477 0.447715 15 1 15H2V4C2 3.44772 2.44772 3 3 3H17C17.2761 3 17.5261 3.11193 17.7071 3.29289C17.8881 3.47386 18 3.72386 18 4V15ZM16 12V5H4V12H16ZM8 14V15H12V14H8Z"></path></g>
      <g id="headset"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 15C16 15.55 15.55 16 15 16H14V13H16V15ZM6 16H5C4.45 16 4 15.55 4 15V13H6V16ZM2 9V15C2 16.66 3.34 18 5 18H8V11H4V9C4 5.13 6.13 4 10 4C13.87 4 16 5.13 16 9V11H12V18H15C16.66 18 18 16.66 18 15V9C18 4.03 14.97 2 10 2C5.03 2 2 4.03 2 9Z"></path></g>
      <g id="phone"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 1.01L6 1C4.9 1 4 1.9 4 3V17C4 18.1 4.9 19 6 19H14C15.1 19 16 18.1 16 17V3C16 1.9 15.1 1.01 14 1.01ZM14 17H6V16H14V17ZM14 14H6V6H14V14ZM6 4V3H14V4H6Z"></path></g>
      <g id="video-camera"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 8.4V5C15 4.44772 14.5523 4 14 4H3C2.44772 4 2 4.44772 2 5V15C2 15.5523 2.44771 16 3 16H14C14.5523 16 15 15.5523 15 15V11.6L18 14V6L15 8.4ZM4 14V6H13V14H4Z"></path></g>
      <g id="game-controller"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 4H2C0.9 4 0 4.9 0 6V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V6C20 4.9 19.1 4 18 4ZM18 14H2V6H18V14ZM5 13H7V11H9V9H7V7H5V9H3V11H5V13ZM12.5 13C13.3284 13 14 12.3284 14 11.5C14 10.6716 13.3284 10 12.5 10C11.6716 10 11 10.6716 11 11.5C11 12.3284 11.6716 13 12.5 13ZM15.5 10C16.3284 10 17 9.32843 17 8.5C17 7.67157 16.3284 7 15.5 7C14.6716 7 14 7.67157 14 8.5C14 9.32843 14.6716 10 15.5 10Z"></path></g>
      <g id="keyboard"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 3H2C0.9 3 0.01 3.9 0.01 5L0 15C0 16.1 0.9 17 2 17H18C19.1 17 20 16.1 20 15V5C20 3.9 19.1 3 18 3ZM18 5V15H2V5H18ZM11 6H9V8H11V6ZM9 9H11V11H9V9ZM8 6H6V8H8V6ZM6 9H8V11H6V9ZM5 9H3V11H5V9ZM3 6H5V8H3V6ZM14 12H6V14H14V12ZM12 9H14V11H12V9ZM14 6H12V8H14V6ZM15 9H17V11H15V9ZM17 6H15V8H17V6Z"></path></g>
      <g id="mouse"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 2C6.68286 2 4 4.504 4 7.6V12.4C4 15.496 6.68286 18 10 18C13.3171 18 16 15.496 16 12.4V7.6C16 4.504 13.3171 2 10 2ZM14 7.5V8H11V4C13 4 14 6 14 7.5ZM9 4V8H6V7.6C6 6 7 4 9 4ZM10 16C7.63429 16 6 14.608 6 12.4V10H14V12.4C14 14.608 12.3657 16 10 16Z"></path></g>
      <g id="tablet"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.99 15L19 5C19 3.9 18.1 3 17 3L3 3C1.9 3 1 3.9 1 5L0.999999 15C0.999999 16.1 1.9 17 3 17L17 17C18.1 17 18.99 16.1 18.99 15ZM3 15L3 5L4 5L4 15L3 15ZM6 15L6 5L14 5L14 15L6 15ZM16 5L17 5L17 15L16 15L16 5Z"></path></g>
      <g id="default" viewBox="0 0 24 24"><path d="M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z"></path></g>

      <g id="battery-0-7"><path d="M14 13.5H6V16H14V13.5Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 6H7.5V15H12.5V6ZM13 4.5H12V3H8V4.5H7C6.5 4.5 6 5 6 5.5V16C6 16.5 6.5 17 7 17H13C13.5 17 14 16.5 14 16V5.5C14 5 13.5 4.5 13 4.5Z"></path></g>
      <g id="battery-8-14"><path d="M14 12.5H6V16H14V12.5Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 6H7.5V15H12.5V6ZM13 4.5H12V3H8V4.5H7C6.5 4.5 6 5 6 5.5L6 16C6 16.5 6.5 17 7 17H13C13.5 17 14 16.5 14 16V5.5C14 5 13.5 4.5 13 4.5Z"></path></g>
      <g id="battery-15-21"><path d="M14 12H6V16H14V12Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 6H7.5V15H12.5V6ZM13 4.5H12V3H8V4.5H7C6.5 4.5 6 5 6 5.5V16C6 16.5 6.5 17 7 17H13C13.5 17 14 16.5 14 16V5.5C14 5 13.5 4.5 13 4.5Z"></path></g>
      <g id="battery-22-28"><path d="M14 11.5H6L6 16H14V11.5Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 6H7.5V15H12.5V6ZM13 4.5H12V3H8V4.5H7C6.5 4.5 6 5 6 5.5L6 16C6 16.5 6.5 17 7 17H13C13.5 17 14 16.5 14 16V5.5C14 5 13.5 4.5 13 4.5Z"></path></g>
      <g id="battery-29-35"><path d="M14 11H6V16H14V11Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 6H7.5V15H12.5V6ZM13 4.5H12V3H8V4.5H7C6.5 4.5 6 5 6 5.5V16C6 16.5 6.5 17 7 17H13C13.5 17 14 16.5 14 16V5.5C14 5 13.5 4.5 13 4.5Z"></path></g>
      <g id="battery-36-42"><path d="M14 10.5H6V16H14V10.5Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 6H7.5V15H12.5V6ZM13 4.5H12V3H8V4.5H7C6.5 4.5 6 5 6 5.5V16C6 16.5 6.5 17 7 17H13C13.5 17 14 16.5 14 16V5.5C14 5 13.5 4.5 13 4.5Z"></path></g>
      <g id="battery-43-49"><path d="M14 10H6V16H14V10Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 6H7.5V15H12.5V6ZM13 4.5H12V3H8V4.5H7C6.5 4.5 6 5 6 5.5V16C6 16.5 6.5 17 7 17H13C13.5 17 14 16.5 14 16V5.5C14 5 13.5 4.5 13 4.5Z"></path></g>
      <g id="battery-50-56"><path d="M14 9.5H6V16H14V9.5Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 6H7.5V15H12.5V6ZM13 4.5H12V3H8V4.5H7C6.5 4.5 6 5 6 5.5V16C6 16.5 6.5 17 7 17H13C13.5 17 14 16.5 14 16V5.5C14 5 13.5 4.5 13 4.5Z"></path></g>
      <g id="battery-57-63"><path d="M14 9H6V16H14V9Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 6H7.5V15H12.5V6ZM13 4.5H12V3H8V4.5H7C6.5 4.5 6 5 6 5.5V16C6 16.5 6.5 17 7 17H13C13.5 17 14 16.5 14 16V5.5C14 5 13.5 4.5 13 4.5Z"></path></g>
      <g id="battery-64-70"><path d="M14 8.5H6V16H14V8.5Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 6H7.5V15H12.5V6ZM13 4.5H12V3H8V4.5H7C6.5 4.5 6 5 6 5.5V16C6 16.5 6.5 17 7 17H13C13.5 17 14 16.5 14 16V5.5C14 5 13.5 4.5 13 4.5Z"></path></g>
      <g id="battery-71-77"><path d="M14 8H6V16H14V8Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 6H7.5V15H12.5V6ZM13 4.5H12V3H8V4.5H7C6.5 4.5 6 5 6 5.5V16C6 16.5 6.5 17 7 17H13C13.5 17 14 16.5 14 16V5.5C14 5 13.5 4.5 13 4.5Z"></path></g>
      <g id="battery-78-85"><path d="M14 7.5H6L6 16H14V7.5Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 6H7.5V15H12.5V6ZM13 4.5H12V3H8V4.5H7C6.5 4.5 6 5 6 5.5L6 16C6 16.5 6.5 17 7 17H13C13.5 17 14 16.5 14 16V5.5C14 5 13.5 4.5 13 4.5Z"></path></g>
      <g id="battery-86-92"><path d="M14 7H6V16H14V7Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 6H7.5V16H12.5V6ZM13 4.5H12V3H8V4.5H7C6.5 4.5 6 5 6 5.5V16C6 16.5 6.5 17 7 17H13C13.5 17 14 16.5 14 16V5.5C14 5 13.5 4.5 13 4.5Z"></path></g>
      <g id="battery-93-100"><path d="M12 4.5H13C13.5 4.5 14 5 14 5.5V16C14 16.5 13.5 17 13 17H7C6.5 17 6 16.5 6 16V5.5C6 5 6.5 4.5 7 4.5H8V3H12V4.5Z"></path></g>
    </defs>
  </svg>
</iron-iconset-svg>
`;
document.head.appendChild(template$2.content);

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/**

The `iron-icon` element displays an icon. By default an icon renders as a 24px
square.

Example using src:

    <iron-icon src="star.png"></iron-icon>

Example setting size to 32px x 32px:

    <iron-icon class="big" src="big_star.png"></iron-icon>

    <style is="custom-style">
      .big {
        --iron-icon-height: 32px;
        --iron-icon-width: 32px;
      }
    </style>

The iron elements include several sets of icons. To use the default set of
icons, import `iron-icons.js` and use the `icon` attribute to specify an icon:

    <script type="module">
      import "../iron-icons/iron-icons.js";
    </script>

    <iron-icon icon="menu"></iron-icon>

To use a different built-in set of icons, import the specific
`iron-icons/<iconset>-icons.js`, and specify the icon as `<iconset>:<icon>`.
For example, to use a communication icon, you would use:

    <script type="module">
      import "../iron-icons/communication-icons.js";
    </script>

    <iron-icon icon="communication:email"></iron-icon>

You can also create custom icon sets of bitmap or SVG icons.

Example of using an icon named `cherry` from a custom iconset with the ID
`fruit`:

    <iron-icon icon="fruit:cherry"></iron-icon>

See `<iron-iconset>` and `<iron-iconset-svg>` for more information about how to
create a custom iconset.

See the `iron-icons` demo to see the icons available in the various iconsets.

### Styling

The following custom properties are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--iron-icon` | Mixin applied to the icon | {}
`--iron-icon-width` | Width of the icon | `24px`
`--iron-icon-height` | Height of the icon | `24px`
`--iron-icon-fill-color` | Fill color of the svg icon | `currentcolor`
`--iron-icon-stroke-color` | Stroke color of the svg icon | none

@group Iron Elements
@element iron-icon
@demo demo/index.html
@hero hero.svg
@homepage polymer.github.io
*/
Polymer({
  _template: html`
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
`,

  is: 'iron-icon',

  properties: {

    /**
     * The name of the icon to use. The name should be of the form:
     * `iconset_name:icon_name`.
     */
    icon: {type: String},

    /**
     * The name of the theme to used, if one is specified by the
     * iconset.
     */
    theme: {type: String},

    /**
     * If using iron-icon without an iconset, you can set the src to be
     * the URL of an individual icon image file. Note that this will take
     * precedence over a given icon attribute.
     */
    src: {type: String},

    /**
     * @type {!IronMeta}
     */
    _meta: {value: Base.create('iron-meta', {type: 'iconset'})}

  },

  observers: [
    '_updateIcon(_meta, isAttached)',
    '_updateIcon(theme, isAttached)',
    '_srcChanged(src, isAttached)',
    '_iconChanged(icon, isAttached)'
  ],

  _DEFAULT_ICONSET: 'icons',

  _iconChanged: function(icon) {
    var parts = (icon || '').split(':');
    this._iconName = parts.pop();
    this._iconsetName = parts.pop() || this._DEFAULT_ICONSET;
    this._updateIcon();
  },

  _srcChanged: function(src) {
    this._updateIcon();
  },

  _usesIconset: function() {
    return this.icon || !this.src;
  },

  /** @suppress {visibility} */
  _updateIcon: function() {
    if (this._usesIconset()) {
      if (this._img && this._img.parentNode) {
        dom(this.root).removeChild(this._img);
      }
      if (this._iconName === '') {
        if (this._iconset) {
          this._iconset.removeIcon(this);
        }
      } else if (this._iconsetName && this._meta) {
        this._iconset = /** @type {?Polymer.Iconset} */ (
            this._meta.byKey(this._iconsetName));
        if (this._iconset) {
          this._iconset.applyIcon(this, this._iconName, this.theme);
          this.unlisten(window, 'iron-iconset-added', '_updateIcon');
        } else {
          this.listen(window, 'iron-iconset-added', '_updateIcon');
        }
      }
    } else {
      if (this._iconset) {
        this._iconset.removeIcon(this);
      }
      if (!this._img) {
        this._img = document.createElement('img');
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.draggable = false;
      }
      this._img.src = this.src;
      dom(this.root).appendChild(this._img);
    }
  }
});

function getTemplate$b() {
  return html`<!--_html_template_start_--><style include="cr-shared-style">
  #image {
    height: 24px;
    width: 24px;
  }
</style>

<template is="dom-if" if="[[!hasDefaultImage_(device.*)]]">
  <iron-icon id="deviceTypeIcon" icon="bluetooth:[[getIcon_(device.*)]]">
  </iron-icon>
</template>
<template is="dom-if" if="[[hasDefaultImage_(device.*)]]">
  <img id="image" src="[[getDefaultImageSrc_(device.*)]]" alt="Default device image">
</template><!--_html_template_end_-->`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function mojoString16ToString(str16) {
    return str16.data.map((ch) => String.fromCodePoint(ch)).join('');
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


/**
 * Returns true if the device contains the default image URL.
 * @param {!BluetoothDeviceProperties} device
 * @return {boolean}
 */
function hasDefaultImage(device) {
  return !!device.imageInfo && !!device.imageInfo.defaultImageUrl &&
      !!device.imageInfo.defaultImageUrl.url;
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


/** @polymer */
class SettingsBluetoothIconElement extends PolymerElement {
  static get is() {
    return 'bluetooth-icon';
  }

  static get template() {
    return getTemplate$b();
  }

  static get properties() {
    return {
      /**
       * @type {!BluetoothDeviceProperties}
       */
      device: {
        type: Object,
      },
    };
  }

  /**
   * @return {string}
   * @private
   */
  getIcon_() {
    if (!this.device) {
      return 'default';
    }

    switch (this.device.deviceType) {
      case DeviceType.kComputer:
        return 'computer';
      case DeviceType.kPhone:
        return 'phone';
      case DeviceType.kHeadset:
        return 'headset';
      case DeviceType.kVideoCamera:
        return 'video-camera';
      case DeviceType.kGameController:
        return 'game-controller';
      case DeviceType.kKeyboard:
      case DeviceType.kKeyboardMouseCombo:
        return 'keyboard';
      case DeviceType.kMouse:
        return 'mouse';
      case DeviceType.kTablet:
        return 'tablet';
      default:
        return 'default';
    }
  }

  /**
   * @return {boolean}
   * @private
   */
  hasDefaultImage_() {
    return hasDefaultImage(this.device);
  }

  /**
   * @return {string}
   * @private
   */
  getDefaultImageSrc_() {
    if (!this.hasDefaultImage_()) {
      return '';
    }
    return this.device.imageInfo.defaultImageUrl.url;
  }
}
customElements.define(
    SettingsBluetoothIconElement.is, SettingsBluetoothIconElement);

// Copyright 2011 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview EventTracker is a simple class that manages the addition and
 * removal of DOM event listeners. In particular, it keeps track of all
 * listeners that have been added and makes it easy to remove some or all of
 * them without requiring all the information again. This is particularly handy
 * when the listener is a generated function such as a lambda or the result of
 * calling Function.bind.
 * Note: This file is deprecated in favor of the TypeScript version at
 * ui/webui/resources/js/event_tracker.ts. The TypeScript version should be used
 * in all TypeScript code, and can also be used by JavaScript code that is not
 * typechecked with closure compiler.
 */

class EventTracker {
  /**
   * Create an EventTracker to track a set of events.
   * EventTracker instances are typically tied 1:1 with other objects or
   * DOM elements whose listeners should be removed when the object is
   * disposed or the corresponding elements are removed from the DOM.
   */
  constructor() {
    /**
     * @type {Array<EventTrackerEntry>}
     * @private
     */
    this.listeners_ = [];
  }

  /**
   * Add an event listener - replacement for EventTarget.addEventListener.
   * @param {!EventTarget} target The DOM target to add a listener to.
   * @param {string} eventType The type of event to subscribe to.
   * @param {EventListener|Function} listener The listener to add.
   * @param {boolean=} capture Whether to invoke during the capture phase.
   */
  add(target, eventType, listener, capture = false) {
    const h = {
      target: target,
      eventType: eventType,
      listener: listener,
      capture: capture,
    };
    this.listeners_.push(h);
    target.addEventListener(eventType, listener, capture);
  }

  /**
   * Remove any specified event listeners added with this EventTracker.
   * @param {!EventTarget} target The DOM target to remove a listener from.
   * @param {?string} eventType The type of event to remove.
   */
  remove(target, eventType) {
    this.listeners_ = this.listeners_.filter(listener => {
      if (listener.target === target &&
          (!eventType || (listener.eventType === eventType))) {
        EventTracker.removeEventListener(listener);
        return false;
      }
      return true;
    });
  }

  /** Remove all event listeners added with this EventTracker. */
  removeAll() {
    this.listeners_.forEach(
        listener => EventTracker.removeEventListener(listener));
    this.listeners_ = [];
  }

  /**
   * Remove a single event listener given it's tracking entry. It's up to the
   * caller to ensure the entry is removed from listeners_.
   * @param {EventTrackerEntry} entry The entry describing the listener to
   * remove.
   */
  static removeEventListener(entry) {
    entry.target.removeEventListener(
        entry.eventType, entry.listener, entry.capture);
  }
}

// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


/**
 * Check the directionality of the page.
 * @return {boolean} True if Chrome is running an RTL UI.
 */
function isRTL() {
  return document.documentElement.dir === 'rtl';
}

/**
 * @param {!Event} e
 * @return {boolean} Whether a modifier key was down when processing |e|.
 */
function hasKeyModifiers(e) {
  return !!(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey);
}

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// clang-format on

  /**
   * A class to manage focus between given horizontally arranged elements.
   *
   * Pressing left cycles backward and pressing right cycles forward in item
   * order. Pressing Home goes to the beginning of the list and End goes to the
   * end of the list.
   *
   * If an item in this row is focused, it'll stay active (accessible via tab).
   * If no items in this row are focused, the row can stay active until focus
   * changes to a node inside |this.boundary_|. If |boundary| isn't specified,
   * any focus change deactivates the row.
   */
  class FocusRow {
    /**
     * @param {!Element} root The root of this focus row. Focus classes are
     *     applied to |root| and all added elements must live within |root|.
     * @param {?Element} boundary Focus events are ignored outside of this
     *     element.
     * @param {FocusRowDelegate=} delegate An optional event
     *     delegate.
     */
    constructor(root, boundary, delegate) {
      /** @type {!Element} */
      this.root = root;

      /** @private {!Element} */
      this.boundary_ = boundary || document.documentElement;

      /** @type {FocusRowDelegate|undefined} */
      this.delegate = delegate;

      /** @protected {!EventTracker} */
      this.eventTracker = new EventTracker();
    }

    /**
     * Whether it's possible that |element| can be focused.
     * @param {Element} element
     * @return {boolean} Whether the item is focusable.
     */
    static isFocusable(element) {
      if (!element || element.disabled) {
        return false;
      }

      // We don't check that element.tabIndex >= 0 here because inactive rows
      // set a tabIndex of -1.
      let current = element;
      while (true) {
        assertInstanceof(current, Element);

        const style = window.getComputedStyle(current);
        if (style.visibility === 'hidden' || style.display === 'none') {
          return false;
        }

        const parent = current.parentNode;
        if (!parent) {
          return false;
        }

        if (parent === current.ownerDocument ||
            parent instanceof DocumentFragment) {
          return true;
        }

        current = /** @type {Element} */ (parent);
      }
    }

    /**
     * A focus override is a function that returns an element that should gain
     * focus. The element may not be directly selectable for example the element
     * that can gain focus is in a shadow DOM. Allowing an override via a
     * function leaves the details of how the element is retrieved to the
     * component.
     * @param {!HTMLElement} element
     * @return {!HTMLElement}
     */
    static getFocusableElement(element) {
      if (element.getFocusableElement) {
        return element.getFocusableElement();
      }
      return element;
    }

    /**
     * Register a new type of focusable element (or add to an existing one).
     *
     * Example: an (X) button might be 'delete' or 'close'.
     *
     * When FocusRow is used within a FocusGrid, these types are used to
     * determine equivalent controls when Up/Down are pressed to change rows.
     *
     * Another example: mutually exclusive controls that hide each other on
     * activation (i.e. Play/Pause) could use the same type (i.e. 'play-pause')
     * to indicate they're equivalent.
     *
     * @param {string} type The type of element to track focus of.
     * @param {string|HTMLElement} selectorOrElement The selector of the element
     *    from this row's root, or the element itself.
     * @return {boolean} Whether a new item was added.
     */
    addItem(type, selectorOrElement) {
      assert$1(type);

      let element;
      if (typeof selectorOrElement === 'string') {
        element = this.root.querySelector(selectorOrElement);
      } else {
        element = selectorOrElement;
      }
      if (!element) {
        return false;
      }

      element.setAttribute('focus-type', type);
      element.tabIndex = this.isActive() ? 0 : -1;

      this.eventTracker.add(element, 'blur', this.onBlur_.bind(this));
      this.eventTracker.add(element, 'focus', this.onFocus_.bind(this));
      this.eventTracker.add(element, 'keydown', this.onKeydown_.bind(this));
      this.eventTracker.add(element, 'mousedown', this.onMousedown_.bind(this));
      return true;
    }

    /** Dereferences nodes and removes event handlers. */
    destroy() {
      this.eventTracker.removeAll();
    }

    /**
     * @param {!HTMLElement} sampleElement An element for to find an equivalent
     *     for.
     * @return {!HTMLElement} An equivalent element to focus for
     *     |sampleElement|.
     * @protected
     */
    getCustomEquivalent(sampleElement) {
      return /** @type {!HTMLElement} */ (assert$1(this.getFirstFocusable()));
    }

    /**
     * @return {!Array<!HTMLElement>} All registered elements (regardless of
     *     focusability).
     */
    getElements() {
      return Array.from(this.root.querySelectorAll('[focus-type]'))
          .map(FocusRow.getFocusableElement);
    }

    /**
     * Find the element that best matches |sampleElement|.
     * @param {!HTMLElement} sampleElement An element from a row of the same
     *     type which previously held focus.
     * @return {!HTMLElement} The element that best matches sampleElement.
     */
    getEquivalentElement(sampleElement) {
      if (this.getFocusableElements().indexOf(sampleElement) >= 0) {
        return sampleElement;
      }

      const sampleFocusType = this.getTypeForElement(sampleElement);
      if (sampleFocusType) {
        const sameType = this.getFirstFocusable(sampleFocusType);
        if (sameType) {
          return sameType;
        }
      }

      return this.getCustomEquivalent(sampleElement);
    }

    /**
     * @param {string=} opt_type An optional type to search for.
     * @return {?HTMLElement} The first focusable element with |type|.
     */
    getFirstFocusable(opt_type) {
      const element = this.getFocusableElements().find(
          el => !opt_type || el.getAttribute('focus-type') === opt_type);
      return element || null;
    }

    /** @return {!Array<!HTMLElement>} Registered, focusable elements. */
    getFocusableElements() {
      return this.getElements().filter(FocusRow.isFocusable);
    }

    /**
     * @param {!Element} element An element to determine a focus type for.
     * @return {string} The focus type for |element| or '' if none.
     */
    getTypeForElement(element) {
      return element.getAttribute('focus-type') || '';
    }

    /** @return {boolean} Whether this row is currently active. */
    isActive() {
      return this.root.classList.contains(FocusRow.ACTIVE_CLASS);
    }

    /**
     * Enables/disables the tabIndex of the focusable elements in the FocusRow.
     * tabIndex can be set properly.
     * @param {boolean} active True if tab is allowed for this row.
     */
    makeActive(active) {
      if (active === this.isActive()) {
        return;
      }

      this.getElements().forEach(function(element) {
        element.tabIndex = active ? 0 : -1;
      });

      this.root.classList.toggle(FocusRow.ACTIVE_CLASS, active);
    }

    /**
     * @param {!Event} e
     * @private
     */
    onBlur_(e) {
      if (!this.boundary_.contains(/** @type {Element} */ (e.relatedTarget))) {
        return;
      }

      const currentTarget = /** @type {!HTMLElement} */ (e.currentTarget);
      if (this.getFocusableElements().indexOf(currentTarget) >= 0) {
        this.makeActive(false);
      }
    }

    /**
     * @param {!Event} e
     * @private
     */
    onFocus_(e) {
      if (this.delegate) {
        this.delegate.onFocus(this, e);
      }
    }

    /**
     * @param {!Event} e A mousedown event.
     * @private
     */
    onMousedown_(e) {
      // Only accept left mouse clicks.
      if (e.button) {
        return;
      }

      // Allow the element under the mouse cursor to be focusable.
      if (!e.currentTarget.disabled) {
        e.currentTarget.tabIndex = 0;
      }
    }

    /**
     * @param {!Event} e The keydown event.
     * @private
     */
    onKeydown_(e) {
      const elements = this.getFocusableElements();
      const currentElement = FocusRow.getFocusableElement(
          /** @type {!HTMLElement} */ (e.currentTarget));
      const elementIndex = elements.indexOf(currentElement);
      assert$1(elementIndex >= 0);

      if (this.delegate && this.delegate.onKeydown(this, e)) {
        return;
      }

      const isShiftTab = !e.altKey && !e.ctrlKey && !e.metaKey && e.shiftKey &&
          e.key === 'Tab';

      if (hasKeyModifiers(e) && !isShiftTab) {
        return;
      }

      let index = -1;
      let shouldStopPropagation = true;

      if (isShiftTab) {
        // This always moves back one element, even in RTL.
        index = elementIndex - 1;
        if (index < 0) {
          // Bubble up to focus on the previous element outside the row.
          return;
        }
      } else if (e.key === 'ArrowLeft') {
        index = elementIndex + (isRTL() ? 1 : -1);
      } else if (e.key === 'ArrowRight') {
        index = elementIndex + (isRTL() ? -1 : 1);
      } else if (e.key === 'Home') {
        index = 0;
      } else if (e.key === 'End') {
        index = elements.length - 1;
      } else {
        shouldStopPropagation = false;
      }

      const elementToFocus = elements[index];
      if (elementToFocus) {
        this.getEquivalentElement(elementToFocus).focus();
        e.preventDefault();
      }
      if (shouldStopPropagation) {
        e.stopPropagation();
      }
    }
  }

  /** @const {string} */
  FocusRow.ACTIVE_CLASS = 'focus-row-active';

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// clang-format on

  /** @implements {FocusRowDelegate} */
  class FocusRowBehaviorDelegate {
    /**
     * @param {{lastFocused: Object,
     *          overrideCustomEquivalent: boolean,
     *          getCustomEquivalent: (Function|undefined)}} listItem
     */
    constructor(listItem) {
      /** @private */
      this.listItem_ = listItem;
    }

    /**
     * This function gets called when the [focus-row-control] element receives
     * the focus event.
     * @override
     * @param {!FocusRow} row
     * @param {!Event} e
     */
    onFocus(row, e) {
      const element = /** @type {!HTMLElement} */ (e.composedPath()[0]);
      const focusableElement = FocusRow.getFocusableElement(element);
      if (element !== focusableElement) {
        focusableElement.focus();
      }
      this.listItem_.lastFocused = focusableElement;
    }

    /**
     * @override
     * @param {!FocusRow} row The row that detected a keydown.
     * @param {!Event} e
     * @return {boolean} Whether the event was handled.
     */
    onKeydown(row, e) {
      // Prevent iron-list from changing the focus on enter.
      if (e.key === 'Enter') {
        e.stopPropagation();
      }

      return false;
    }

    /** @override */
    getCustomEquivalent(sampleElement) {
      return this.listItem_.overrideCustomEquivalent ?
          this.listItem_.getCustomEquivalent(sampleElement) :
          null;
    }
  }

  /** @extends {FocusRow} */
  class VirtualFocusRow extends FocusRow {
    /**
     * @param {!Element} root
     * @param {FocusRowDelegate} delegate
     */
    constructor(root, delegate) {
      super(root, /* boundary */ null, delegate);
    }

    /** @override */
    getCustomEquivalent(sampleElement) {
      return this.delegate.getCustomEquivalent(sampleElement) ||
          super.getCustomEquivalent(sampleElement);
    }
  }

  /**
   * Any element that is being used as an iron-list row item can extend this
   * behavior, which encapsulates focus controls of mouse and keyboards.
   * To use this behavior:
   *    - The parent element should pass a "last-focused" attribute double-bound
   *      to the row items, to track the last-focused element across rows, and
   *      a "list-blurred" attribute double-bound to the row items, to track
   *      whether the list of row items has been blurred.
   *    - There must be a container in the extending element with the
   *      [focus-row-container] attribute that contains all focusable controls.
   *    - On each of the focusable controls, there must be a [focus-row-control]
   *      attribute, and a [focus-type=] attribute unique for each control.
   *
   * @polymerBehavior
   */
  const FocusRowBehavior = {
    properties: {
      /** @private {VirtualFocusRow} */
      row_: Object,

      /** @private {boolean} */
      mouseFocused_: Boolean,

      /** Will be updated when |index| is set, unless specified elsewhere. */
      id: {
        type: String,
        reflectToAttribute: true,
      },

      /** For notifying when the row is in focus. */
      isFocused: {
        type: Boolean,
        notify: true,
      },

      /** Should be bound to the index of the item from the iron-list */
      focusRowIndex: {
        type: Number,
        observer: 'focusRowIndexChanged',
      },

      /** @type {HTMLElement} */
      lastFocused: {
        type: Object,
        notify: true,
      },

      /**
       * This is different from tabIndex, since the template only does a one-way
       * binding on both attributes, and the behavior actually make use of this
       * fact. For example, when a control within a row is focused, it will have
       * tabIndex = -1 and ironListTabIndex = 0.
       * @type {number}
       */
      ironListTabIndex: {
        type: Number,
        observer: 'ironListTabIndexChanged_',
      },

      listBlurred: {
        type: Boolean,
        notify: true,
      },
    },

    /**
     * Returns an ID based on the index that was passed in.
     * @param {?number} index
     * @return {?string}
     */
    computeId_(index) {
      return index !== undefined ? `frb${index}` : undefined;
    },

    /**
     * Sets |id| if it hasn't been set elsewhere. Also sets |aria-rowindex|.
     * @param {number} newIndex
     * @param {number} oldIndex
     */
    focusRowIndexChanged(newIndex, oldIndex) {
      // focusRowIndex is 0-based where aria-rowindex is 1-based.
      this.setAttribute('aria-rowindex', newIndex + 1);

      // Only set ID if it matches what was previously set. This prevents
      // overriding the ID value if it's set elsewhere.
      if (this.id === this.computeId_(oldIndex)) {
        this.id = this.computeId_(newIndex);
      }
    },

    /** @private {?Element} */
    firstControl_: null,

    /** @private {!Array<!MutationObserver>} */
    controlObservers_: [],

    /** @override */
    attached() {
      this.classList.add('no-outline');

      afterNextRender(this, function() {
        const rowContainer = this.root.querySelector('[focus-row-container]');
        assert$1(rowContainer);
        this.row_ = new VirtualFocusRow(
            rowContainer, new FocusRowBehaviorDelegate(this));
        this.addItems_();

        // Adding listeners asynchronously to reduce blocking time, since this
        // behavior will be used by items in potentially long lists.
        this.listen(this, 'focus', 'onFocus_');
        this.listen(this, 'dom-change', 'addItems_');
        this.listen(this, 'mousedown', 'onMouseDown_');
        this.listen(this, 'blur', 'onBlur_');
      });
    },

    /** @override */
    detached() {
      this.unlisten(this, 'focus', 'onFocus_');
      this.unlisten(this, 'dom-change', 'addItems_');
      this.unlisten(this, 'mousedown', 'onMouseDown_');
      this.unlisten(this, 'blur', 'onBlur_');
      this.removeObservers_();
      if (this.firstControl_) {
        this.unlisten(this.firstControl_, 'keydown', 'onFirstControlKeydown_');
      }
      if (this.row_) {
        this.row_.destroy();
      }
    },

    /** @return {!FocusRow} */
    getFocusRow() {
      return assert$1(this.row_);
    },

    /** @private */
    updateFirstControl_() {
      const newFirstControl = this.row_.getFirstFocusable();
      if (newFirstControl === this.firstControl_) {
        return;
      }

      if (this.firstControl_) {
        this.unlisten(this.firstControl_, 'keydown', 'onFirstControlKeydown_');
      }
      this.firstControl_ = newFirstControl;
      if (this.firstControl_) {
        this.listen(
            /** @type {!Element} */ (this.firstControl_), 'keydown',
            'onFirstControlKeydown_');
      }
    },

    /** @private */
    removeObservers_() {
      if (this.controlObservers_.length > 0) {
        this.controlObservers_.forEach(observer => {
          observer.disconnect();
        });
      }
      this.controlObservers_ = [];
    },

    /** @private */
    addItems_() {
      this.ironListTabIndexChanged_();
      if (this.row_) {
        this.removeObservers_();
        this.row_.destroy();

        const controls = this.root.querySelectorAll('[focus-row-control]');

        controls.forEach(control => {
          this.row_.addItem(
              control.getAttribute('focus-type'),
              /** @type {!HTMLElement} */
              (FocusRow.getFocusableElement(control)));
          this.addMutationObservers_(assert$1(control));
        });
        this.updateFirstControl_();
      }
    },

    /**
     * @return {!MutationObserver}
     * @private
     */
    createObserver_() {
      return new MutationObserver(mutations => {
        const mutation = mutations[0];
        if (mutation.attributeName === 'style' && mutation.oldValue) {
          const newStyle = window.getComputedStyle(
              /** @type {!Element} */ (mutation.target));
          const oldDisplayValue = mutation.oldValue.match(/^display:(.*)(?=;)/);
          const oldVisibilityValue =
              mutation.oldValue.match(/^visibility:(.*)(?=;)/);
          // Return early if display and visibility have not changed.
          if (oldDisplayValue &&
              newStyle.display === oldDisplayValue[1].trim() &&
              oldVisibilityValue &&
              newStyle.visibility === oldVisibilityValue[1].trim()) {
            return;
          }
        }
        this.updateFirstControl_();
      });
    },

    /**
     * The first focusable control changes if hidden, disabled, or style.display
     * changes for the control or any of its ancestors. Add mutation observers
     * to watch for these changes in order to ensure the first control keydown
     * listener is always on the correct element.
     * @param {!Element} control
     * @private
     */
    addMutationObservers_(control) {
      let current = control;
      while (current && current !== this.root) {
        const currentObserver = this.createObserver_();
        currentObserver.observe(current, {
          attributes: true,
          attributeFilter: ['hidden', 'disabled', 'style'],
          attributeOldValue: true,
        });
        this.controlObservers_.push(currentObserver);
        current = current.parentNode;
      }
    },

    /**
     * This function gets called when the row itself receives the focus event.
     * @param {!Event} e The focus event
     * @private
     */
    onFocus_(e) {
      if (this.mouseFocused_) {
        this.mouseFocused_ = false;  // Consume and reset flag.
        return;
      }

      // If focus is being restored from outside the item and the event is fired
      // by the list item itself, focus the first control so that the user can
      // tab through all the controls. When the user shift-tabs back to the row,
      // or focus is restored to the row from a dropdown on the last item, the
      // last child item will be focused before the row itself. Since this is
      // the desired behavior, do not shift focus to the first item in these
      // cases.
      const restoreFocusToFirst =
          this.listBlurred && e.composedPath()[0] === this;

      if (this.lastFocused && !restoreFocusToFirst) {
        focusWithoutInk(this.row_.getEquivalentElement(this.lastFocused));
      } else {
        const firstFocusable = assert$1(this.firstControl_);
        focusWithoutInk(firstFocusable);
      }
      this.listBlurred = false;
      this.isFocused = true;
    },

    /** @param {!KeyboardEvent} e */
    onFirstControlKeydown_(e) {
      if (e.shiftKey && e.key === 'Tab') {
        this.focus();
      }
    },

    /** @private */
    ironListTabIndexChanged_() {
      if (this.row_) {
        this.row_.makeActive(this.ironListTabIndex === 0);
      }

      // If a new row is being focused, reset listBlurred. This means an item
      // has been removed and iron-list is about to focus the next item.
      if (this.ironListTabIndex === 0) {
        this.listBlurred = false;
      }
    },

    /** @private */
    onMouseDown_() {
      this.mouseFocused_ = true;  // Set flag to not do any control-focusing.
    },

    /**
     * @param {!Event} e
     * @private
     */
    onBlur_(e) {
      // Reset focused flags since it's not active anymore.
      this.mouseFocused_ = false;
      this.isFocused = false;

      const node =
          e.relatedTarget ? /** @type {!Node} */ (e.relatedTarget) : null;
      if (!this.parentNode.contains(node)) {
        this.listBlurred = true;
      }
    },
  };

function getTemplate$a() {
  return html`<!--_html_template_start_--><style include="cr-shared-style">
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
<!--_html_template_end_-->`;
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


/**
 * @constructor
 * @implements {I18nBehaviorInterface}
 * @extends {PolymerElement}
 */
const SettingsBluetoothPairingDeviceItemElementBase =
    mixinBehaviors([I18nBehavior, FocusRowBehavior], PolymerElement);

/** @polymer */
class SettingsBluetoothPairingDeviceItemElement extends
    SettingsBluetoothPairingDeviceItemElementBase {
  static get is() {
    return 'bluetooth-pairing-device-item';
  }

  static get template() {
    return getTemplate$a();
  }

  static get properties() {
    return {
      /**
       * @type {?BluetoothDeviceProperties}
       */
      device: Object,

      /** @type {DeviceItemState} */
      deviceItemState: {
        type: Object,
        value: DeviceItemState.DEFAULT,
      },

      /** The index of this item in its parent list, used for its a11y label. */
      itemIndex: Number,

      /**
       * The total number of elements in this item's parent list, used for its
       * a11y label.
       */
      listSize: Number,

      /** @private {string} */
      secondaryLabel_: {
        type: String,
        computed: 'computeSecondaryLabel_(deviceItemState)',
      },

      /** @private {boolean} */
      pairingFailed_: {
        reflectToAttribute: true,
        type: Boolean,
        computed: 'computePairingFailed_(deviceItemState)',
      },
    };
  }

  /** @override */
  focus() {
    // Prevent scroll stops iron list from trying to bring this element to view,
    // if it is the |lastFocused| element and scrolled out of view. This can
    // happen if this element is tabbed to or selected and then scrolled out of
    // view.
    // TODO(b/210743107) Add a test for this.
    this.$.container.focus({preventScroll: true});
  }

  /**
   * @return {boolean}
   * @private
   */
  computePairingFailed_() {
    return this.deviceItemState === DeviceItemState.FAILED;
  }

  /**
   * @return {string}
   * @private
   */
  getDeviceName_() {
    if (!this.device) {
      return '';
    }
    return mojoString16ToString(this.device.publicName);
  }

  /**
   * @param {!Event} event
   * @private
   */
  onSelected_(event) {
    this.dispatchPairDeviceEvent_();
    event.stopPropagation();
  }

  /**
   * @param {!KeyboardEvent} event
   * @private
   */
  onKeydown_(event) {
    if (event.key !== 'Enter' && event.key !== ' ') {
      return;
    }

    this.dispatchPairDeviceEvent_();
    event.stopPropagation();
  }

  /**
   * @return {string}
   * @private
   */
  computeSecondaryLabel_() {
    switch (this.deviceItemState) {
      case DeviceItemState.FAILED:
        return this.i18n('bluetoothPairingFailed');
      case DeviceItemState.PAIRING:
        return this.i18n('bluetoothPairing');
      case DeviceItemState.DEFAULT:
        return '';
      default:
        assertNotReached$1();
    }
  }

  /** @private */
  dispatchPairDeviceEvent_() {
    this.dispatchEvent(new CustomEvent('pair-device', {
      bubbles: true,
      composed: true,
      detail: {device: this.device},
    }));
  }

  /**
   * @return {string}
   * @private
   */
  getAriaLabel_() {
    if (!this.device) {
      return '';
    }

    return this.i18n(
               'bluetoothA11yDeviceName', this.itemIndex + 1, this.listSize,
               this.getDeviceName_()) +
        ' ' + this.i18n(this.getA11yDeviceTypeTextName_());
  }

  /**
   * @return {string}
   * @private
   */
  getA11yDeviceTypeTextName_() {
    switch (this.device.deviceType) {
      case DeviceType.kUnknown:
        return 'bluetoothA11yDeviceTypeUnknown';
      case DeviceType.kComputer:
        return 'bluetoothA11yDeviceTypeComputer';
      case DeviceType.kPhone:
        return 'bluetoothA11yDeviceTypePhone';
      case DeviceType.kHeadset:
        return 'bluetoothA11yDeviceTypeHeadset';
      case DeviceType.kVideoCamera:
        return 'bluetoothA11yDeviceTypeVideoCamera';
      case DeviceType.kGameController:
        return 'bluetoothA11yDeviceTypeGameController';
      case DeviceType.kKeyboard:
        return 'bluetoothA11yDeviceTypeKeyboard';
      case DeviceType.kKeyboardMouseCombo:
        return 'bluetoothA11yDeviceTypeKeyboardMouseCombo';
      case DeviceType.kMouse:
        return 'bluetoothA11yDeviceTypeMouse';
      case DeviceType.kTablet:
        return 'bluetoothA11yDeviceTypeTablet';
      default:
        assertNotReached$1();
    }
  }

  /**
   * @return {string}
   * @private
   */
  getSecondaryAriaLabel_() {
    const deviceName = this.getDeviceName_();
    switch (this.deviceItemState) {
      case DeviceItemState.FAILED:
        return this.i18n(
            'bluetoothPairingDeviceItemSecondaryErrorA11YLabel', deviceName);
      case DeviceItemState.PAIRING:
        return this.i18n(
            'bluetoothPairingDeviceItemSecondaryPairingA11YLabel', deviceName);
      case DeviceItemState.DEFAULT:
        return '';
      default:
        assertNotReached$1();
    }
  }
}

customElements.define(
    SettingsBluetoothPairingDeviceItemElement.is,
    SettingsBluetoothPairingDeviceItemElement);

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

// Contains all connected resizables that do not have a parent.
var ORPHANS = new Set();

/**
 * `IronResizableBehavior` is a behavior that can be used in Polymer elements to
 * coordinate the flow of resize events between "resizers" (elements that
 *control the size or hidden state of their children) and "resizables" (elements
 *that need to be notified when they are resized or un-hidden by their parents
 *in order to take action on their new measurements).
 *
 * Elements that perform measurement should add the `IronResizableBehavior`
 *behavior to their element definition and listen for the `iron-resize` event on
 *themselves. This event will be fired when they become showing after having
 *been hidden, when they are resized explicitly by another resizable, or when
 *the window has been resized.
 *
 * Note, the `iron-resize` event is non-bubbling.
 *
 * @polymerBehavior
 * @demo demo/index.html
 **/
const IronResizableBehavior = {
  properties: {
    /**
     * The closest ancestor element that implements `IronResizableBehavior`.
     */
    _parentResizable: {
      type: Object,
      observer: '_parentResizableChanged',
    },

    /**
     * True if this element is currently notifying its descendant elements of
     * resize.
     */
    _notifyingDescendant: {
      type: Boolean,
      value: false,
    }
  },

  listeners: {
    'iron-request-resize-notifications': '_onIronRequestResizeNotifications'
  },

  created: function() {
    // We don't really need property effects on these, and also we want them
    // to be created before the `_parentResizable` observer fires:
    this._interestedResizables = [];
    this._boundNotifyResize = this.notifyResize.bind(this);
    this._boundOnDescendantIronResize = this._onDescendantIronResize.bind(this);
  },

  attached: function() {
    this._requestResizeNotifications();
  },

  detached: function() {
    if (this._parentResizable) {
      this._parentResizable.stopResizeNotificationsFor(this);
    } else {
      ORPHANS.delete(this);
      window.removeEventListener('resize', this._boundNotifyResize);
    }

    this._parentResizable = null;
  },

  /**
   * Can be called to manually notify a resizable and its descendant
   * resizables of a resize change.
   */
  notifyResize: function() {
    if (!this.isAttached) {
      return;
    }

    this._interestedResizables.forEach(function(resizable) {
      if (this.resizerShouldNotify(resizable)) {
        this._notifyDescendant(resizable);
      }
    }, this);

    this._fireResize();
  },

  /**
   * Used to assign the closest resizable ancestor to this resizable
   * if the ancestor detects a request for notifications.
   */
  assignParentResizable: function(parentResizable) {
    if (this._parentResizable) {
      this._parentResizable.stopResizeNotificationsFor(this);
    }

    this._parentResizable = parentResizable;

    if (parentResizable &&
        parentResizable._interestedResizables.indexOf(this) === -1) {
      parentResizable._interestedResizables.push(this);
      parentResizable._subscribeIronResize(this);
    }
  },

  /**
   * Used to remove a resizable descendant from the list of descendants
   * that should be notified of a resize change.
   */
  stopResizeNotificationsFor: function(target) {
    var index = this._interestedResizables.indexOf(target);

    if (index > -1) {
      this._interestedResizables.splice(index, 1);
      this._unsubscribeIronResize(target);
    }
  },

  /**
   * Subscribe this element to listen to iron-resize events on the given target.
   *
   * Preferred over target.listen because the property renamer does not
   * understand to rename when the target is not specifically "this"
   *
   * @param {!HTMLElement} target Element to listen to for iron-resize events.
   */
  _subscribeIronResize: function(target) {
    target.addEventListener('iron-resize', this._boundOnDescendantIronResize);
  },

  /**
   * Unsubscribe this element from listening to to iron-resize events on the
   * given target.
   *
   * Preferred over target.unlisten because the property renamer does not
   * understand to rename when the target is not specifically "this"
   *
   * @param {!HTMLElement} target Element to listen to for iron-resize events.
   */
  _unsubscribeIronResize: function(target) {
    target.removeEventListener(
        'iron-resize', this._boundOnDescendantIronResize);
  },

  /**
   * This method can be overridden to filter nested elements that should or
   * should not be notified by the current element. Return true if an element
   * should be notified, or false if it should not be notified.
   *
   * @param {HTMLElement} element A candidate descendant element that
   * implements `IronResizableBehavior`.
   * @return {boolean} True if the `element` should be notified of resize.
   */
  resizerShouldNotify: function(element) {
    return true;
  },

  _onDescendantIronResize: function(event) {
    if (this._notifyingDescendant) {
      event.stopPropagation();
      return;
    }

    // no need to use this during shadow dom because of event retargeting
    if (!useShadow) {
      this._fireResize();
    }
  },

  _fireResize: function() {
    this.fire('iron-resize', null, {node: this, bubbles: false});
  },

  _onIronRequestResizeNotifications: function(event) {
    var target = /** @type {!EventTarget} */ (dom(event).rootTarget);
    if (target === this) {
      return;
    }

    target.assignParentResizable(this);
    this._notifyDescendant(target);

    event.stopPropagation();
  },

  _parentResizableChanged: function(parentResizable) {
    if (parentResizable) {
      window.removeEventListener('resize', this._boundNotifyResize);
    }
  },

  _notifyDescendant: function(descendant) {
    // NOTE(cdata): In IE10, attached is fired on children first, so it's
    // important not to notify them if the parent is not attached yet (or
    // else they will get redundantly notified when the parent attaches).
    if (!this.isAttached) {
      return;
    }

    this._notifyingDescendant = true;
    descendant.notifyResize();
    this._notifyingDescendant = false;
  },

  _requestResizeNotifications: function() {
    if (!this.isAttached) {
      return;
    }

    if (document.readyState === 'loading') {
      var _requestResizeNotifications =
          this._requestResizeNotifications.bind(this);
      document.addEventListener(
          'readystatechange', function readystatechanged() {
            document.removeEventListener('readystatechange', readystatechanged);
            _requestResizeNotifications();
          });
    } else {
      this._findParent();

      if (!this._parentResizable) {
        // If this resizable is an orphan, tell other orphans to try to find
        // their parent again, in case it's this resizable.
        ORPHANS.forEach(function(orphan) {
          if (orphan !== this) {
            orphan._findParent();
          }
        }, this);

        window.addEventListener('resize', this._boundNotifyResize);
        this.notifyResize();
      } else {
        // If this resizable has a parent, tell other child resizables of
        // that parent to try finding their parent again, in case it's this
        // resizable.
        this._parentResizable._interestedResizables
            .forEach(function(resizable) {
              if (resizable !== this) {
                resizable._findParent();
              }
            }, this);
      }
    }
  },

  _findParent: function() {
    this.assignParentResizable(null);
    this.fire(
        'iron-request-resize-notifications',
        null,
        {node: this, bubbles: true, cancelable: true});

    if (!this._parentResizable) {
      ORPHANS.add(this);
    } else {
      ORPHANS.delete(this);
    }
  }
};

/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/**
 * `Polymer.IronScrollTargetBehavior` allows an element to respond to scroll
 * events from a designated scroll target.
 *
 * Elements that consume this behavior can override the `_scrollHandler`
 * method to add logic on the scroll event.
 *
 * @demo demo/scrolling-region.html Scrolling Region
 * @demo demo/document.html Document Element
 * @polymerBehavior
 */
const IronScrollTargetBehavior = {

  properties: {

    /**
     * Specifies the element that will handle the scroll event
     * on the behalf of the current element. This is typically a reference to an
     *element, but there are a few more posibilities:
     *
     * ### Elements id
     *
     *```html
     * <div id="scrollable-element" style="overflow: auto;">
     *  <x-element scroll-target="scrollable-element">
     *    <!-- Content-->
     *  </x-element>
     * </div>
     *```
     * In this case, the `scrollTarget` will point to the outer div element.
     *
     * ### Document scrolling
     *
     * For document scrolling, you can use the reserved word `document`:
     *
     *```html
     * <x-element scroll-target="document">
     *   <!-- Content -->
     * </x-element>
     *```
     *
     * ### Elements reference
     *
     *```js
     * appHeader.scrollTarget = document.querySelector('#scrollable-element');
     *```
     *
     * @type {HTMLElement}
     * @default document
     */
    scrollTarget: {
      type: HTMLElement,
      value: function() {
        return this._defaultScrollTarget;
      }
    }
  },

  observers: ['_scrollTargetChanged(scrollTarget, isAttached)'],

  /**
   * True if the event listener should be installed.
   */
  _shouldHaveListener: true,

  _scrollTargetChanged: function(scrollTarget, isAttached) {

    if (this._oldScrollTarget) {
      this._toggleScrollListener(false, this._oldScrollTarget);
      this._oldScrollTarget = null;
    }
    if (!isAttached) {
      return;
    }
    // Support element id references
    if (scrollTarget === 'document') {
      this.scrollTarget = this._doc;

    } else if (typeof scrollTarget === 'string') {
      var domHost = this.domHost;

      this.scrollTarget = domHost && domHost.$ ?
          domHost.$[scrollTarget] :
          dom(this.ownerDocument).querySelector('#' + scrollTarget);

    } else if (this._isValidScrollTarget()) {
      this._oldScrollTarget = scrollTarget;
      this._toggleScrollListener(this._shouldHaveListener, scrollTarget);
    }
  },

  /**
   * Runs on every scroll event. Consumer of this behavior may override this
   * method.
   *
   * @protected
   */
  _scrollHandler: function scrollHandler() {},

  /**
   * The default scroll target. Consumers of this behavior may want to customize
   * the default scroll target.
   *
   * @type {Element}
   */
  get _defaultScrollTarget() {
    return this._doc;
  },

  /**
   * Shortcut for the document element
   *
   * @type {Element}
   */
  get _doc() {
    return this.ownerDocument.documentElement;
  },

  /**
   * Gets the number of pixels that the content of an element is scrolled
   * upward.
   *
   * @type {number}
   */
  get _scrollTop() {
    if (this._isValidScrollTarget()) {
      return this.scrollTarget === this._doc ? window.pageYOffset :
                                               this.scrollTarget.scrollTop;
    }
    return 0;
  },

  /**
   * Gets the number of pixels that the content of an element is scrolled to the
   * left.
   *
   * @type {number}
   */
  get _scrollLeft() {
    if (this._isValidScrollTarget()) {
      return this.scrollTarget === this._doc ? window.pageXOffset :
                                               this.scrollTarget.scrollLeft;
    }
    return 0;
  },

  /**
   * Sets the number of pixels that the content of an element is scrolled
   * upward.
   *
   * @type {number}
   */
  set _scrollTop(top) {
    if (this.scrollTarget === this._doc) {
      window.scrollTo(window.pageXOffset, top);
    } else if (this._isValidScrollTarget()) {
      this.scrollTarget.scrollTop = top;
    }
  },

  /**
   * Sets the number of pixels that the content of an element is scrolled to the
   * left.
   *
   * @type {number}
   */
  set _scrollLeft(left) {
    if (this.scrollTarget === this._doc) {
      window.scrollTo(left, window.pageYOffset);
    } else if (this._isValidScrollTarget()) {
      this.scrollTarget.scrollLeft = left;
    }
  },

  /**
   * Scrolls the content to a particular place.
   *
   * @method scroll
   * @param {number|!{left: number, top: number}} leftOrOptions The left position or scroll options
   * @param {number=} top The top position
   * @return {void}
   */
  scroll: function(leftOrOptions, top) {
    var left;

    if (typeof leftOrOptions === 'object') {
      left = leftOrOptions.left;
      top = leftOrOptions.top;
    } else {
      left = leftOrOptions;
    }

    left = left || 0;
    top = top || 0;
    if (this.scrollTarget === this._doc) {
      window.scrollTo(left, top);
    } else if (this._isValidScrollTarget()) {
      this.scrollTarget.scrollLeft = left;
      this.scrollTarget.scrollTop = top;
    }
  },

  /**
   * Gets the width of the scroll target.
   *
   * @type {number}
   */
  get _scrollTargetWidth() {
    if (this._isValidScrollTarget()) {
      return this.scrollTarget === this._doc ? window.innerWidth :
                                               this.scrollTarget.offsetWidth;
    }
    return 0;
  },

  /**
   * Gets the height of the scroll target.
   *
   * @type {number}
   */
  get _scrollTargetHeight() {
    if (this._isValidScrollTarget()) {
      return this.scrollTarget === this._doc ? window.innerHeight :
                                               this.scrollTarget.offsetHeight;
    }
    return 0;
  },

  /**
   * Returns true if the scroll target is a valid HTMLElement.
   *
   * @return {boolean}
   */
  _isValidScrollTarget: function() {
    return this.scrollTarget instanceof HTMLElement;
  },

  _toggleScrollListener: function(yes, scrollTarget) {
    var eventTarget = scrollTarget === this._doc ? window : scrollTarget;
    if (yes) {
      if (!this._boundScrollHandler) {
        this._boundScrollHandler = this._scrollHandler.bind(this);
        eventTarget.addEventListener('scroll', this._boundScrollHandler);
      }
    } else {
      if (this._boundScrollHandler) {
        eventTarget.removeEventListener('scroll', this._boundScrollHandler);
        this._boundScrollHandler = null;
      }
    }
  },

  /**
   * Enables or disables the scroll event listener.
   *
   * @param {boolean} yes True to add the event, False to remove it.
   */
  toggleScrollListener: function(yes) {
    this._shouldHaveListener = yes;
    this._toggleScrollListener(yes, this.scrollTarget);
  }

};

/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

var IOS = navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/);
var IOS_TOUCH_SCROLLING = IOS && IOS[1] >= 8;
var DEFAULT_PHYSICAL_COUNT = 3;
var HIDDEN_Y = '-10000px';
var SECRET_TABINDEX = -100;

/**

`iron-list` displays a virtual, 'infinite' list. The template inside
the iron-list element represents the DOM to create for each list item.
The `items` property specifies an array of list item data.

For performance reasons, not every item in the list is rendered at once;
instead a small subset of actual template elements *(enough to fill the
viewport)* are rendered and reused as the user scrolls. As such, it is important
that all state of the list template is bound to the model driving it, since the
view may be reused with a new model at any time. Particularly, any state that
may change as the result of a user interaction with the list item must be bound
to the model to avoid view state inconsistency.

### Sizing iron-list

`iron-list` must either be explicitly sized, or delegate scrolling to an
explicitly sized parent. By "explicitly sized", we mean it either has an
explicit CSS `height` property set via a class or inline style, or else is sized
by other layout means (e.g. the `flex` or `fit` classes).

#### Flexbox - [jsbin](https://jsbin.com/vejoni/edit?html,output)

```html
<template is="x-list">
  <style>
    :host {
      display: block;
      height: 100vh;
      display: flex;
      flex-direction: column;
    }

    iron-list {
      flex: 1 1 auto;
    }
  </style>
  <app-toolbar>App name</app-toolbar>
  <iron-list items="[[items]]">
    <template>
      <div>
        ...
      </div>
    </template>
  </iron-list>
</template>
```
#### Explicit size - [jsbin](https://jsbin.com/vopucus/edit?html,output)
```html
<template is="x-list">
  <style>
    :host {
      display: block;
    }

    iron-list {
      height: 100vh; /* don't use % values unless the parent element is sized.
*\/
    }
  </style>
  <iron-list items="[[items]]">
    <template>
      <div>
        ...
      </div>
    </template>
  </iron-list>
</template>
```
#### Main document scrolling -
[jsbin](https://jsbin.com/wevirow/edit?html,output)
```html
<head>
  <style>
    body {
      height: 100vh;
      margin: 0;
      display: flex;
      flex-direction: column;
    }

    app-toolbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
    }

    iron-list {
      /* add padding since the app-toolbar is fixed at the top *\/
      padding-top: 64px;
    }
  </style>
</head>
<body>
  <app-toolbar>App name</app-toolbar>
  <iron-list scroll-target="document">
    <template>
      <div>
        ...
      </div>
    </template>
  </iron-list>
</body>
```

`iron-list` must be given a `<template>` which contains exactly one element. In
the examples above we used a `<div>`, but you can provide any element (including
custom elements).

### Template model

List item templates should bind to template models of the following structure:

```js
{
  index: 0,        // index in the item array
  selected: false, // true if the current item is selected
  tabIndex: -1,    // a dynamically generated tabIndex for focus management
  item: {}         // user data corresponding to items[index]
}
```

Alternatively, you can change the property name used as data index by changing
the `indexAs` property. The `as` property defines the name of the variable to
add to the binding scope for the array.

For example, given the following `data` array:

##### data.json

```js
[
  {"name": "Bob"},
  {"name": "Tim"},
  {"name": "Mike"}
]
```

The following code would render the list (note the name property is bound from
the model object provided to the template scope):

```html
<iron-ajax url="data.json" last-response="{{data}}" auto></iron-ajax>
<iron-list items="[[data]]" as="item">
  <template>
    <div>
      Name: [[item.name]]
    </div>
  </template>
</iron-list>
```

### Grid layout

`iron-list` supports a grid layout in addition to linear layout by setting
the `grid` attribute.  In this case, the list template item must have both fixed
width and height (e.g. via CSS). Based on this, the number of items
per row are determined automatically based on the size of the list viewport.

### Accessibility

`iron-list` automatically manages the focus state for the items. It also
provides a `tabIndex` property within the template scope that can be used for
keyboard navigation. For example, users can press the up and down keys to move
to previous and next items in the list:

```html
<iron-list items="[[data]]" as="item">
  <template>
    <div tabindex$="[[tabIndex]]">
      Name: [[item.name]]
    </div>
  </template>
</iron-list>
```

### Resizing

`iron-list` lays out the items when it receives a notification via the
`iron-resize` event. This event is fired by any element that implements
`IronResizableBehavior`.

By default, elements such as `iron-pages`, `paper-tabs` or `paper-dialog` will
trigger this event automatically. If you hide the list manually (e.g. you use
`display: none`) you might want to implement `IronResizableBehavior` or fire
this event manually right after the list became visible again. For example:

```js
document.querySelector('iron-list').fire('iron-resize');
```

### When should `<iron-list>` be used?

`iron-list` should be used when a page has significantly more DOM nodes than the
ones visible on the screen. e.g. the page has 500 nodes, but only 20 are visible
at a time. This is why we refer to it as a `virtual` list. In this case, a
`dom-repeat` will still create 500 nodes which could slow down the web app, but
`iron-list` will only create 20.

However, having an `iron-list` does not mean that you can load all the data at
once. Say you have a million records in the database, you want to split the data
into pages so you can bring in a page at the time. The page could contain 500
items, and iron-list will only render 20.

@element iron-list
@demo demo/index.html

*/
Polymer({
  /** @override */
  _template: html`
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
`,

  is: 'iron-list',

  properties: {

    /**
     * An array containing items determining how many instances of the template
     * to stamp and that that each template instance should bind to.
     */
    items: {type: Array},

    /**
     * The name of the variable to add to the binding scope for the array
     * element associated with a given template instance.
     */
    as: {type: String, value: 'item'},

    /**
     * The name of the variable to add to the binding scope with the index
     * for the row.
     */
    indexAs: {type: String, value: 'index'},

    /**
     * The name of the variable to add to the binding scope to indicate
     * if the row is selected.
     */
    selectedAs: {type: String, value: 'selected'},

    /**
     * When true, the list is rendered as a grid. Grid items must have
     * fixed width and height set via CSS. e.g.
     *
     * ```html
     * <iron-list grid>
     *   <template>
     *      <div style="width: 100px; height: 100px;"> 100x100 </div>
     *   </template>
     * </iron-list>
     * ```
     */
    grid: {
      type: Boolean,
      value: false,
      reflectToAttribute: true,
      observer: '_gridChanged'
    },

    /**
     * When true, tapping a row will select the item, placing its data model
     * in the set of selected items retrievable via the selection property.
     *
     * Note that tapping focusable elements within the list item will not
     * result in selection, since they are presumed to have their * own action.
     */
    selectionEnabled: {type: Boolean, value: false},

    /**
     * When `multiSelection` is false, this is the currently selected item, or
     * `null` if no item is selected.
     */
    selectedItem: {type: Object, notify: true},

    /**
     * When `multiSelection` is true, this is an array that contains the
     * selected items.
     */
    selectedItems: {type: Object, notify: true},

    /**
     * When `true`, multiple items may be selected at once (in this case,
     * `selected` is an array of currently selected items).  When `false`,
     * only one item may be selected at a time.
     */
    multiSelection: {type: Boolean, value: false},

    /**
     * The offset top from the scrolling element to the iron-list element.
     * This value can be computed using the position returned by
     * `getBoundingClientRect()` although it's preferred to use a constant value
     * when possible.
     *
     * This property is useful when an external scrolling element is used and
     * there's some offset between the scrolling element and the list. For
     * example: a header is placed above the list.
     */
    scrollOffset: {type: Number, value: 0},

    /**
     * If set to true, focus on an element will be preserved after rerender.
     */
    preserveFocus: {
      type: Boolean,
      value: false
    }
  },

  observers: [
    '_itemsChanged(items.*)',
    '_selectionEnabledChanged(selectionEnabled)',
    '_multiSelectionChanged(multiSelection)',
    '_setOverflow(scrollTarget, scrollOffset)'
  ],

  behaviors: [
    Templatizer,
    IronResizableBehavior,
    IronScrollTargetBehavior,
    OptionalMutableDataBehavior
  ],

  /**
   * The ratio of hidden tiles that should remain in the scroll direction.
   * Recommended value ~0.5, so it will distribute tiles evenly in both
   * directions.
   */
  _ratio: 0.5,

  /**
   * The padding-top value for the list.
   */
  _scrollerPaddingTop: 0,

  /**
   * This value is a cached value of `scrollTop` from the last `scroll` event.
   */
  _scrollPosition: 0,

  /**
   * The sum of the heights of all the tiles in the DOM.
   */
  _physicalSize: 0,

  /**
   * The average `offsetHeight` of the tiles observed till now.
   */
  _physicalAverage: 0,

  /**
   * The number of tiles which `offsetHeight` > 0 observed until now.
   */
  _physicalAverageCount: 0,

  /**
   * The Y position of the item rendered in the `_physicalStart`
   * tile relative to the scrolling list.
   */
  _physicalTop: 0,

  /**
   * The number of items in the list.
   */
  _virtualCount: 0,

  /**
   * The estimated scroll height based on `_physicalAverage`
   */
  _estScrollHeight: 0,

  /**
   * The scroll height of the dom node
   */
  _scrollHeight: 0,

  /**
   * The height of the list. This is referred as the viewport in the context of
   * list.
   */
  _viewportHeight: 0,

  /**
   * The width of the list. This is referred as the viewport in the context of
   * list.
   */
  _viewportWidth: 0,

  /**
   * An array of DOM nodes that are currently in the tree
   * @type {?Array<!HTMLElement>}
   */
  _physicalItems: null,

  /**
   * An array of heights for each item in `_physicalItems`
   * @type {?Array<number>}
   */
  _physicalSizes: null,

  /**
   * A cached value for the first visible index.
   * See `firstVisibleIndex`
   * @type {?number}
   */
  _firstVisibleIndexVal: null,

  /**
   * A cached value for the last visible index.
   * See `lastVisibleIndex`
   * @type {?number}
   */
  _lastVisibleIndexVal: null,

  /**
   * The max number of pages to render. One page is equivalent to the height of
   * the list.
   */
  _maxPages: 2,

  /**
   * The currently focused physical item.
   */
  _focusedItem: null,

  /**
   * The virtual index of the focused item.
   */
  _focusedVirtualIndex: -1,

  /**
   * The physical index of the focused item.
   */
  _focusedPhysicalIndex: -1,

  /**
   * The the item that is focused if it is moved offscreen.
   * @private {?HTMLElement}
   */
  _offscreenFocusedItem: null,

  /**
   * The item that backfills the `_offscreenFocusedItem` in the physical items
   * list when that item is moved offscreen.
   * @type {?HTMLElement}
   */
  _focusBackfillItem: null,

  /**
   * The maximum items per row
   */
  _itemsPerRow: 1,

  /**
   * The width of each grid item
   */
  _itemWidth: 0,

  /**
   * The height of the row in grid layout.
   */
  _rowHeight: 0,

  /**
   * The cost of stamping a template in ms.
   */
  _templateCost: 0,

  /**
   * Needed to pass event.model property to declarative event handlers -
   * see polymer/polymer#4339.
   */
  _parentModel: true,

  /**
   * The bottom of the physical content.
   */
  get _physicalBottom() {
    return this._physicalTop + this._physicalSize;
  },

  /**
   * The bottom of the scroll.
   */
  get _scrollBottom() {
    return this._scrollPosition + this._viewportHeight;
  },

  /**
   * The n-th item rendered in the last physical item.
   */
  get _virtualEnd() {
    return this._virtualStart + this._physicalCount - 1;
  },

  /**
   * The height of the physical content that isn't on the screen.
   */
  get _hiddenContentSize() {
    var size =
        this.grid ? this._physicalRows * this._rowHeight : this._physicalSize;
    return size - this._viewportHeight;
  },

  /**
   * The parent node for the _userTemplate.
   */
  get _itemsParent() {
    return dom(dom(this._userTemplate).parentNode);
  },

  /**
   * The maximum scroll top value.
   */
  get _maxScrollTop() {
    return this._estScrollHeight - this._viewportHeight + this._scrollOffset;
  },

  /**
   * The largest n-th value for an item such that it can be rendered in
   * `_physicalStart`.
   */
  get _maxVirtualStart() {
    var virtualCount = this._convertIndexToCompleteRow(this._virtualCount);
    return Math.max(0, virtualCount - this._physicalCount);
  },

  set _virtualStart(val) {
    val = this._clamp(val, 0, this._maxVirtualStart);
    if (this.grid) {
      val = val - (val % this._itemsPerRow);
    }
    this._virtualStartVal = val;
  },

  get _virtualStart() {
    return this._virtualStartVal || 0;
  },

  /**
   * The k-th tile that is at the top of the scrolling list.
   */
  set _physicalStart(val) {
    val = val % this._physicalCount;
    if (val < 0) {
      val = this._physicalCount + val;
    }
    if (this.grid) {
      val = val - (val % this._itemsPerRow);
    }
    this._physicalStartVal = val;
  },

  get _physicalStart() {
    return this._physicalStartVal || 0;
  },

  /**
   * The k-th tile that is at the bottom of the scrolling list.
   */
  get _physicalEnd() {
    return (this._physicalStart + this._physicalCount - 1) %
        this._physicalCount;
  },

  set _physicalCount(val) {
    this._physicalCountVal = val;
  },

  get _physicalCount() {
    return this._physicalCountVal || 0;
  },

  /**
   * An optimal physical size such that we will have enough physical items
   * to fill up the viewport and recycle when the user scrolls.
   *
   * This default value assumes that we will at least have the equivalent
   * to a viewport of physical items above and below the user's viewport.
   */
  get _optPhysicalSize() {
    return this._viewportHeight === 0 ? Infinity :
                                        this._viewportHeight * this._maxPages;
  },

  /**
   * True if the current list is visible.
   */
  get _isVisible() {
    return Boolean(this.offsetWidth || this.offsetHeight);
  },

  /**
   * Gets the index of the first visible item in the viewport.
   *
   * @type {number}
   */
  get firstVisibleIndex() {
    var idx = this._firstVisibleIndexVal;
    if (idx == null) {
      var physicalOffset = this._physicalTop + this._scrollOffset;

      idx = this._iterateItems(function(pidx, vidx) {
        physicalOffset += this._getPhysicalSizeIncrement(pidx);

        if (physicalOffset > this._scrollPosition) {
          return this.grid ? vidx - (vidx % this._itemsPerRow) : vidx;
        }
        // Handle a partially rendered final row in grid mode
        if (this.grid && this._virtualCount - 1 === vidx) {
          return vidx - (vidx % this._itemsPerRow);
        }
      }) ||
          0;
      this._firstVisibleIndexVal = idx;
    }
    return idx;
  },

  /**
   * Gets the index of the last visible item in the viewport.
   *
   * @type {number}
   */
  get lastVisibleIndex() {
    var idx = this._lastVisibleIndexVal;
    if (idx == null) {
      if (this.grid) {
        idx = Math.min(
            this._virtualCount,
            this.firstVisibleIndex + this._estRowsInView * this._itemsPerRow -
                1);
      } else {
        var physicalOffset = this._physicalTop + this._scrollOffset;
        this._iterateItems(function(pidx, vidx) {
          if (physicalOffset < this._scrollBottom) {
            idx = vidx;
          }
          physicalOffset += this._getPhysicalSizeIncrement(pidx);
        });
      }
      this._lastVisibleIndexVal = idx;
    }
    return idx;
  },

  get _defaultScrollTarget() {
    return this;
  },

  get _virtualRowCount() {
    return Math.ceil(this._virtualCount / this._itemsPerRow);
  },

  get _estRowsInView() {
    return Math.ceil(this._viewportHeight / this._rowHeight);
  },

  get _physicalRows() {
    return Math.ceil(this._physicalCount / this._itemsPerRow);
  },

  get _scrollOffset() {
    return this._scrollerPaddingTop + this.scrollOffset;
  },

  /** @override */
  ready: function() {
    this.addEventListener('focus', this._didFocus.bind(this), true);
  },

  /** @override */
  attached: function() {
    this._debounce('_render', this._render, animationFrame);
    // `iron-resize` is fired when the list is attached if the event is added
    // before attached causing unnecessary work.
    this.listen(this, 'iron-resize', '_resizeHandler');
    this.listen(this, 'keydown', '_keydownHandler');
  },

  /** @override */
  detached: function() {
    this.unlisten(this, 'iron-resize', '_resizeHandler');
    this.unlisten(this, 'keydown', '_keydownHandler');
  },

  /**
   * Set the overflow property if this element has its own scrolling region
   */
  _setOverflow: function(scrollTarget) {
    this.style.webkitOverflowScrolling = scrollTarget === this ? 'touch' : '';
    this.style.overflowY = scrollTarget === this ? 'auto' : '';
    // Clear cache.
    this._lastVisibleIndexVal = null;
    this._firstVisibleIndexVal = null;
    this._debounce('_render', this._render, animationFrame);
  },

  /**
   * Invoke this method if you dynamically update the viewport's
   * size or CSS padding.
   *
   * @method updateViewportBoundaries
   */
  updateViewportBoundaries: function() {
    var styles = window.getComputedStyle(this);
    this._scrollerPaddingTop =
        this.scrollTarget === this ? 0 : parseInt(styles['padding-top'], 10);
    this._isRTL = Boolean(styles.direction === 'rtl');
    this._viewportWidth = this.$.items.offsetWidth;
    this._viewportHeight = this._scrollTargetHeight;
    this.grid && this._updateGridMetrics();
  },

  /**
   * Recycles the physical items when needed.
   */
  _scrollHandler: function() {
    var scrollTop = Math.max(0, Math.min(this._maxScrollTop, this._scrollTop));
    var delta = scrollTop - this._scrollPosition;
    var isScrollingDown = delta >= 0;
    // Track the current scroll position.
    this._scrollPosition = scrollTop;
    // Clear indexes for first and last visible indexes.
    this._firstVisibleIndexVal = null;
    this._lastVisibleIndexVal = null;
    // Random access.
    if (Math.abs(delta) > this._physicalSize && this._physicalSize > 0) {
      delta = delta - this._scrollOffset;
      var idxAdjustment =
          Math.round(delta / this._physicalAverage) * this._itemsPerRow;
      this._virtualStart = this._virtualStart + idxAdjustment;
      this._physicalStart = this._physicalStart + idxAdjustment;
      // Estimate new physical offset based on the virtual start index.
      // adjusts the physical start position to stay in sync with the clamped
      // virtual start index. It's critical not to let this value be
      // more than the scroll position however, since that would result in
      // the physical items not covering the viewport, and leading to
      // _increasePoolIfNeeded to run away creating items to try to fill it.
      this._physicalTop = Math.min(
          Math.floor(this._virtualStart / this._itemsPerRow) *
              this._physicalAverage,
          this._scrollPosition);
      this._update();
    } else if (this._physicalCount > 0) {
      var reusables = this._getReusables(isScrollingDown);
      if (isScrollingDown) {
        this._physicalTop = reusables.physicalTop;
        this._virtualStart = this._virtualStart + reusables.indexes.length;
        this._physicalStart = this._physicalStart + reusables.indexes.length;
      } else {
        this._virtualStart = this._virtualStart - reusables.indexes.length;
        this._physicalStart = this._physicalStart - reusables.indexes.length;
      }
      this._update(
          reusables.indexes, isScrollingDown ? null : reusables.indexes);
      this._debounce(
          '_increasePoolIfNeeded',
          this._increasePoolIfNeeded.bind(this, 0),
          microTask);
    }
  },

  /**
   * Returns an object that contains the indexes of the physical items
   * that might be reused and the physicalTop.
   *
   * @param {boolean} fromTop If the potential reusable items are above the scrolling region.
   */
  _getReusables: function(fromTop) {
    var ith, offsetContent, physicalItemHeight;
    var idxs = [];
    var protectedOffsetContent = this._hiddenContentSize * this._ratio;
    var virtualStart = this._virtualStart;
    var virtualEnd = this._virtualEnd;
    var physicalCount = this._physicalCount;
    var top = this._physicalTop + this._scrollOffset;
    var bottom = this._physicalBottom + this._scrollOffset;
    // This may be called outside of a scrollHandler, so use last cached position
    var scrollTop = this._scrollPosition;
    var scrollBottom = this._scrollBottom;

    if (fromTop) {
      ith = this._physicalStart;
      this._physicalEnd;
      offsetContent = scrollTop - top;
    } else {
      ith = this._physicalEnd;
      this._physicalStart;
      offsetContent = bottom - scrollBottom;
    }
    while (true) {
      physicalItemHeight = this._getPhysicalSizeIncrement(ith);
      offsetContent = offsetContent - physicalItemHeight;
      if (idxs.length >= physicalCount ||
          offsetContent <= protectedOffsetContent) {
        break;
      }
      if (fromTop) {
        // Check that index is within the valid range.
        if (virtualEnd + idxs.length + 1 >= this._virtualCount) {
          break;
        }
        // Check that the index is not visible.
        if (top + physicalItemHeight >= scrollTop - this._scrollOffset) {
          break;
        }
        idxs.push(ith);
        top = top + physicalItemHeight;
        ith = (ith + 1) % physicalCount;
      } else {
        // Check that index is within the valid range.
        if (virtualStart - idxs.length <= 0) {
          break;
        }
        // Check that the index is not visible.
        if (top + this._physicalSize - physicalItemHeight <= scrollBottom) {
          break;
        }
        idxs.push(ith);
        top = top - physicalItemHeight;
        ith = (ith === 0) ? physicalCount - 1 : ith - 1;
      }
    }
    return {indexes: idxs, physicalTop: top - this._scrollOffset};
  },

  /**
   * Update the list of items, starting from the `_virtualStart` item.
   * @param {!Array<number>=} itemSet
   * @param {!Array<number>=} movingUp
   */
  _update: function(itemSet, movingUp) {
    if ((itemSet && itemSet.length === 0) || this._physicalCount === 0) {
      return;
    }
    this._manageFocus();
    this._assignModels(itemSet);
    this._updateMetrics(itemSet);
    // Adjust offset after measuring.
    if (movingUp) {
      while (movingUp.length) {
        var idx = movingUp.pop();
        this._physicalTop -= this._getPhysicalSizeIncrement(idx);
      }
    }
    this._positionItems();
    this._updateScrollerSize();
  },

  /**
   * Creates a pool of DOM elements and attaches them to the local dom.
   *
   * @param {number} size Size of the pool
   */
  _createPool: function(size) {
    this._ensureTemplatized();
    var i, inst;
    var physicalItems = new Array(size);
    for (i = 0; i < size; i++) {
      inst = this.stamp(null);
      // TODO(blasten):
      // First element child is item; Safari doesn't support children[0]
      // on a doc fragment. Test this to see if it still matters.
      physicalItems[i] = inst.root.querySelector('*');
      this._itemsParent.appendChild(inst.root);
    }
    return physicalItems;
  },

  _isClientFull: function() {
    return this._scrollBottom != 0 &&
        this._physicalBottom - 1 >= this._scrollBottom &&
        this._physicalTop <= this._scrollPosition;
  },

  /**
   * Increases the pool size.
   */
  _increasePoolIfNeeded: function(count) {
    var nextPhysicalCount = this._clamp(
        this._physicalCount + count,
        DEFAULT_PHYSICAL_COUNT,
        this._virtualCount - this._virtualStart);
    nextPhysicalCount = this._convertIndexToCompleteRow(nextPhysicalCount);
    if (this.grid) {
      var correction = nextPhysicalCount % this._itemsPerRow;
      if (correction && nextPhysicalCount - correction <= this._physicalCount) {
        nextPhysicalCount += this._itemsPerRow;
      }
      nextPhysicalCount -= correction;
    }
    var delta = nextPhysicalCount - this._physicalCount;
    var nextIncrease = Math.round(this._physicalCount * 0.5);

    if (delta < 0) {
      return;
    }
    if (delta > 0) {
      var ts = window.performance.now();
      // Concat arrays in place.
      [].push.apply(this._physicalItems, this._createPool(delta));
      // Push 0s into physicalSizes. Can't use Array.fill because IE11 doesn't
      // support it.
      for (var i = 0; i < delta; i++) {
        this._physicalSizes.push(0);
      }
      this._physicalCount = this._physicalCount + delta;
      // Update the physical start if it needs to preserve the model of the
      // focused item. In this situation, the focused item is currently rendered
      // and its model would have changed after increasing the pool if the
      // physical start remained unchanged.
      if (this._physicalStart > this._physicalEnd &&
          this._isIndexRendered(this._focusedVirtualIndex) &&
          this._getPhysicalIndex(this._focusedVirtualIndex) <
              this._physicalEnd) {
        this._physicalStart = this._physicalStart + delta;
      }
      this._update();
      this._templateCost = (window.performance.now() - ts) / delta;
      nextIncrease = Math.round(this._physicalCount * 0.5);
    }
    // The upper bounds is not fixed when dealing with a grid that doesn't
    // fill it's last row with the exact number of items per row.
    if (this._virtualEnd >= this._virtualCount - 1 || nextIncrease === 0) ; else if (!this._isClientFull()) {
      this._debounce(
          '_increasePoolIfNeeded',
          this._increasePoolIfNeeded.bind(this, nextIncrease),
          microTask);
    } else if (this._physicalSize < this._optPhysicalSize) {
      // Yield and increase the pool during idle time until the physical size is
      // optimal.
      this._debounce(
          '_increasePoolIfNeeded',
          this._increasePoolIfNeeded.bind(
              this,
              this._clamp(
                  Math.round(50 / this._templateCost), 1, nextIncrease)),
          idlePeriod);
    }
  },

  /**
   * Renders the a new list.
   */
  _render: function() {
    if (!this.isAttached || !this._isVisible) {
      return;
    }
    if (this._physicalCount !== 0) {
      var reusables = this._getReusables(true);
      this._physicalTop = reusables.physicalTop;
      this._virtualStart = this._virtualStart + reusables.indexes.length;
      this._physicalStart = this._physicalStart + reusables.indexes.length;
      this._update(reusables.indexes);
      this._update();
      this._increasePoolIfNeeded(0);
    } else if (this._virtualCount > 0) {
      // Initial render
      this.updateViewportBoundaries();
      this._increasePoolIfNeeded(DEFAULT_PHYSICAL_COUNT);
    }
  },

  /**
   * Templetizes the user template.
   */
  _ensureTemplatized: function() {
    if (this.ctor) {
      return;
    }
    this._userTemplate = /** @type {!HTMLTemplateElement} */ (
        this.queryEffectiveChildren('template'));
    if (!this._userTemplate) {
      console.warn('iron-list requires a template to be provided in light-dom');
    }
    var instanceProps = {};
    instanceProps.__key__ = true;
    instanceProps[this.as] = true;
    instanceProps[this.indexAs] = true;
    instanceProps[this.selectedAs] = true;
    instanceProps.tabIndex = true;
    this._instanceProps = instanceProps;
    this.templatize(this._userTemplate, this.mutableData);
  },

  _gridChanged: function(newGrid, oldGrid) {
    if (typeof oldGrid === 'undefined')
      return;
    this.notifyResize();
    flush();
    newGrid && this._updateGridMetrics();
  },

  /**
   * Finds and returns the focused element (both within self and children's
   * Shadow DOM).
   * @return {?HTMLElement}
   */
  _getFocusedElement: function() {
    function doSearch(node, query) {
      let result = null;
      let type = node.nodeType;
      if (type == Node.ELEMENT_NODE || type == Node.DOCUMENT_FRAGMENT_NODE)
        result = node.querySelector(query);
      if (result)
        return result;

      let child = node.firstChild;
      while (child !== null && result === null) {
        result = doSearch(child, query);
        child = child.nextSibling;
      }
      if (result)
        return result;

      const shadowRoot = node.shadowRoot;
      return shadowRoot ? doSearch(shadowRoot, query) : null;
    }

    // Find out if any of the items are focused first, and only search
    // recursively in the item that contains focus, to avoid a slow
    // search of the entire list.
    const focusWithin = doSearch(this, ':focus-within');
    return focusWithin ? doSearch(focusWithin, ':focus') : null;
  },

  /**
   * Called when the items have changed. That is, reassignments
   * to `items`, splices or updates to a single item.
   */
  _itemsChanged: function(change) {
    var rendering = /^items(\.splices){0,1}$/.test(change.path);
    var lastFocusedIndex, focusedElement;
    if (rendering && this.preserveFocus) {
      lastFocusedIndex = this._focusedVirtualIndex;
      focusedElement = this._getFocusedElement();
    }

    var preservingFocus = rendering && this.preserveFocus && focusedElement;

    if (change.path === 'items') {
      this._virtualStart = 0;
      this._physicalTop = 0;
      this._virtualCount = this.items ? this.items.length : 0;
      this._physicalIndexForKey = {};
      this._firstVisibleIndexVal = null;
      this._lastVisibleIndexVal = null;
      this._physicalCount = this._physicalCount || 0;
      this._physicalItems = this._physicalItems || [];
      this._physicalSizes = this._physicalSizes || [];
      this._physicalStart = 0;
      if (this._scrollTop > this._scrollOffset && !preservingFocus) {
        this._resetScrollPosition(0);
      }
      this._removeFocusedItem();
      this._debounce('_render', this._render, animationFrame);
    } else if (change.path === 'items.splices') {
      this._adjustVirtualIndex(change.value.indexSplices);
      this._virtualCount = this.items ? this.items.length : 0;
      // Only blur if at least one item is added or removed.
      var itemAddedOrRemoved = change.value.indexSplices.some(function(splice) {
        return splice.addedCount > 0 || splice.removed.length > 0;
      });
      if (itemAddedOrRemoved) {
        // Only blur activeElement if it is a descendant of the list (#505,
        // #507).
        var activeElement = this._getActiveElement();
        if (this.contains(activeElement)) {
          activeElement.blur();
        }
      }
      // Render only if the affected index is rendered.
      var affectedIndexRendered =
          change.value.indexSplices.some(function(splice) {
            return splice.index + splice.addedCount >= this._virtualStart &&
                splice.index <= this._virtualEnd;
          }, this);
      if (!this._isClientFull() || affectedIndexRendered) {
        this._debounce('_render', this._render, animationFrame);
      }
    } else if (change.path !== 'items.length') {
      this._forwardItemPath(change.path, change.value);
    }

    // If the list was in focus when updated, preserve the focus on item.
    if (preservingFocus) {
      flush();
      focusedElement.blur();  // paper- elements breaks when focused twice.
      this._focusPhysicalItem(
          Math.min(this.items.length - 1, lastFocusedIndex));
      if (!this._isIndexVisible(this._focusedVirtualIndex)) {
        this.scrollToIndex(this._focusedVirtualIndex);
      }
    }
  },

  _forwardItemPath: function(path, value) {
    path = path.slice(6);  // 'items.'.length == 6
    var dot = path.indexOf('.');
    if (dot === -1) {
      dot = path.length;
    }
    var isIndexRendered;
    var pidx;
    var inst;
    var offscreenInstance = this.modelForElement(this._offscreenFocusedItem);
    var vidx = parseInt(path.substring(0, dot), 10);
    isIndexRendered = this._isIndexRendered(vidx);
    if (isIndexRendered) {
      pidx = this._getPhysicalIndex(vidx);
      inst = this.modelForElement(this._physicalItems[pidx]);
    } else if (offscreenInstance) {
      inst = offscreenInstance;
    }

    if (!inst || inst[this.indexAs] !== vidx) {
      return;
    }
    path = path.substring(dot + 1);
    path = this.as + (path ? '.' + path : '');
    inst._setPendingPropertyOrPath(path, value, false, true);
    inst._flushProperties && inst._flushProperties();
    // TODO(blasten): V1 doesn't do this and it's a bug
    if (isIndexRendered) {
      this._updateMetrics([pidx]);
      this._positionItems();
      this._updateScrollerSize();
    }
  },

  /**
   * @param {!Array<!Object>} splices
   */
  _adjustVirtualIndex: function(splices) {
    splices.forEach(function(splice) {
      // deselect removed items
      splice.removed.forEach(this._removeItem, this);
      // We only need to care about changes happening above the current position
      if (splice.index < this._virtualStart) {
        var delta = Math.max(
            splice.addedCount - splice.removed.length,
            splice.index - this._virtualStart);
        this._virtualStart = this._virtualStart + delta;
        if (this._focusedVirtualIndex >= 0) {
          this._focusedVirtualIndex = this._focusedVirtualIndex + delta;
        }
      }
    }, this);
  },

  _removeItem: function(item) {
    this.$.selector.deselect(item);
    // remove the current focused item
    if (this._focusedItem &&
        this.modelForElement(this._focusedItem)[this.as] === item) {
      this._removeFocusedItem();
    }
  },

  /**
   * Executes a provided function per every physical index in `itemSet`
   * `itemSet` default value is equivalent to the entire set of physical
   * indexes.
   *
   * @param {!function(number, number)} fn
   * @param {!Array<number>=} itemSet
   */
  _iterateItems: function(fn, itemSet) {
    var pidx, vidx, rtn, i;

    if (arguments.length === 2 && itemSet) {
      for (i = 0; i < itemSet.length; i++) {
        pidx = itemSet[i];
        vidx = this._computeVidx(pidx);
        if ((rtn = fn.call(this, pidx, vidx)) != null) {
          return rtn;
        }
      }
    } else {
      pidx = this._physicalStart;
      vidx = this._virtualStart;
      for (; pidx < this._physicalCount; pidx++, vidx++) {
        if ((rtn = fn.call(this, pidx, vidx)) != null) {
          return rtn;
        }
      }
      for (pidx = 0; pidx < this._physicalStart; pidx++, vidx++) {
        if ((rtn = fn.call(this, pidx, vidx)) != null) {
          return rtn;
        }
      }
    }
  },

  /**
   * Returns the virtual index for a given physical index
   *
   * @param {number} pidx Physical index
   * @return {number}
   */
  _computeVidx: function(pidx) {
    if (pidx >= this._physicalStart) {
      return this._virtualStart + (pidx - this._physicalStart);
    }
    return this._virtualStart + (this._physicalCount - this._physicalStart) +
        pidx;
  },

  /**
   * Assigns the data models to a given set of items.
   * @param {!Array<number>=} itemSet
   */
  _assignModels: function(itemSet) {
    this._iterateItems(function(pidx, vidx) {
      var el = this._physicalItems[pidx];
      var item = this.items && this.items[vidx];
      if (item != null) {
        var inst = this.modelForElement(el);
        inst.__key__ = null;
        this._forwardProperty(inst, this.as, item);
        this._forwardProperty(
            inst, this.selectedAs, this.$.selector.isSelected(item));
        this._forwardProperty(inst, this.indexAs, vidx);
        this._forwardProperty(
            inst, 'tabIndex', this._focusedVirtualIndex === vidx ? 0 : -1);
        this._physicalIndexForKey[inst.__key__] = pidx;
        inst._flushProperties && inst._flushProperties(true);
        el.removeAttribute('hidden');
      } else {
        el.setAttribute('hidden', '');
      }
    }, itemSet);
  },

  /**
   * Updates the height for a given set of items.
   *
   * @param {!Array<number>=} itemSet
   */
  _updateMetrics: function(itemSet) {
    // Make sure we distributed all the physical items
    // so we can measure them.
    flush();

    var newPhysicalSize = 0;
    var oldPhysicalSize = 0;
    var prevAvgCount = this._physicalAverageCount;
    var prevPhysicalAvg = this._physicalAverage;

    this._iterateItems(function(pidx, vidx) {
      oldPhysicalSize += this._physicalSizes[pidx];
      this._physicalSizes[pidx] = this._physicalItems[pidx].offsetHeight;
      newPhysicalSize += this._physicalSizes[pidx];
      this._physicalAverageCount += this._physicalSizes[pidx] ? 1 : 0;
    }, itemSet);

    if (this.grid) {
      this._updateGridMetrics();
      this._physicalSize =
          Math.ceil(this._physicalCount / this._itemsPerRow) * this._rowHeight;
    } else {
      oldPhysicalSize = (this._itemsPerRow === 1) ?
          oldPhysicalSize :
          Math.ceil(this._physicalCount / this._itemsPerRow) * this._rowHeight;
      this._physicalSize =
          this._physicalSize + newPhysicalSize - oldPhysicalSize;
      this._itemsPerRow = 1;
    }
    // Update the average if it measured something.
    if (this._physicalAverageCount !== prevAvgCount) {
      this._physicalAverage = Math.round(
          ((prevPhysicalAvg * prevAvgCount) + newPhysicalSize) /
          this._physicalAverageCount);
    }
  },

  _updateGridMetrics: function() {
    this._itemWidth = this._physicalCount > 0 ?
        this._physicalItems[0].getBoundingClientRect().width :
        200;
    this._rowHeight =
        this._physicalCount > 0 ? this._physicalItems[0].offsetHeight : 200;
    this._itemsPerRow = this._itemWidth ?
        Math.floor(this._viewportWidth / this._itemWidth) :
        this._itemsPerRow;
  },

  /**
   * Updates the position of the physical items.
   */
  _positionItems: function() {
    this._adjustScrollPosition();

    var y = this._physicalTop;

    if (this.grid) {
      var totalItemWidth = this._itemsPerRow * this._itemWidth;
      var rowOffset = (this._viewportWidth - totalItemWidth) / 2;

      this._iterateItems(function(pidx, vidx) {
        var modulus = vidx % this._itemsPerRow;
        var x = Math.floor((modulus * this._itemWidth) + rowOffset);
        if (this._isRTL) {
          x = x * -1;
        }
        this.translate3d(x + 'px', y + 'px', 0, this._physicalItems[pidx]);
        if (this._shouldRenderNextRow(vidx)) {
          y += this._rowHeight;
        }
      });
    } else {
      const order = [];
      this._iterateItems(function(pidx, vidx) {
        const item = this._physicalItems[pidx];
        this.translate3d(0, y + 'px', 0, item);
        y += this._physicalSizes[pidx];
        const itemId = item.id;
        if (itemId) {
          order.push(itemId);
        }
      });
      if (order.length) {
        this.setAttribute('aria-owns', order.join(' '));
      }
    }
  },

  _getPhysicalSizeIncrement: function(pidx) {
    if (!this.grid) {
      return this._physicalSizes[pidx];
    }
    if (this._computeVidx(pidx) % this._itemsPerRow !== this._itemsPerRow - 1) {
      return 0;
    }
    return this._rowHeight;
  },

  /**
   * Returns, based on the current index,
   * whether or not the next index will need
   * to be rendered on a new row.
   *
   * @param {number} vidx Virtual index
   * @return {boolean}
   */
  _shouldRenderNextRow: function(vidx) {
    return vidx % this._itemsPerRow === this._itemsPerRow - 1;
  },

  /**
   * Adjusts the scroll position when it was overestimated.
   */
  _adjustScrollPosition: function() {
    var deltaHeight = this._virtualStart === 0 ?
        this._physicalTop :
        Math.min(this._scrollPosition + this._physicalTop, 0);
    // Note: the delta can be positive or negative.
    if (deltaHeight !== 0) {
      this._physicalTop = this._physicalTop - deltaHeight;
      // This may be called outside of a scrollHandler, so use last cached position
      var scrollTop = this._scrollPosition;
      // juking scroll position during interial scrolling on iOS is no bueno
      if (!IOS_TOUCH_SCROLLING && scrollTop > 0) {
        this._resetScrollPosition(scrollTop - deltaHeight);
      }
    }
  },

  /**
   * Sets the position of the scroll.
   */
  _resetScrollPosition: function(pos) {
    if (this.scrollTarget && pos >= 0) {
      this._scrollTop = pos;
      this._scrollPosition = this._scrollTop;
    }
  },

  /**
   * Sets the scroll height, that's the height of the content,
   *
   * @param {boolean=} forceUpdate If true, updates the height no matter what.
   */
  _updateScrollerSize: function(forceUpdate) {
    if (this.grid) {
      this._estScrollHeight = this._virtualRowCount * this._rowHeight;
    } else {
      this._estScrollHeight =
          (this._physicalBottom +
           Math.max(
               this._virtualCount - this._physicalCount - this._virtualStart,
               0) *
               this._physicalAverage);
    }
    forceUpdate = forceUpdate || this._scrollHeight === 0;
    forceUpdate = forceUpdate ||
        this._scrollPosition >= this._estScrollHeight - this._physicalSize;
    forceUpdate = forceUpdate ||
        this.grid && this.$.items.style.height < this._estScrollHeight;
    // Amortize height adjustment, so it won't trigger large repaints too often.
    if (forceUpdate ||
        Math.abs(this._estScrollHeight - this._scrollHeight) >=
            this._viewportHeight) {
      this.$.items.style.height = this._estScrollHeight + 'px';
      this._scrollHeight = this._estScrollHeight;
    }
  },

  /**
   * Scroll to a specific item in the virtual list regardless
   * of the physical items in the DOM tree.
   *
   * @method scrollToItem
   * @param {(Object)} item The item to be scrolled to
   */
  scrollToItem: function(item) {
    return this.scrollToIndex(this.items.indexOf(item));
  },

  /**
   * Scroll to a specific index in the virtual list regardless
   * of the physical items in the DOM tree.
   *
   * @method scrollToIndex
   * @param {number} idx The index of the item
   */
  scrollToIndex: function(idx) {
    if (typeof idx !== 'number' || idx < 0 || idx > this.items.length - 1) {
      return;
    }
    flush();
    // Items should have been rendered prior scrolling to an index.
    if (this._physicalCount === 0) {
      return;
    }
    idx = this._clamp(idx, 0, this._virtualCount - 1);
    // Update the virtual start only when needed.
    if (!this._isIndexRendered(idx) || idx >= this._maxVirtualStart) {
      this._virtualStart =
          this.grid ? (idx - this._itemsPerRow * 2) : (idx - 1);
    }
    this._manageFocus();
    this._assignModels();
    this._updateMetrics();
    // Estimate new physical offset.
    this._physicalTop = Math.floor(this._virtualStart / this._itemsPerRow) *
        this._physicalAverage;

    var currentTopItem = this._physicalStart;
    var currentVirtualItem = this._virtualStart;
    var targetOffsetTop = 0;
    var hiddenContentSize = this._hiddenContentSize;
    // scroll to the item as much as we can.
    while (currentVirtualItem < idx && targetOffsetTop <= hiddenContentSize) {
      targetOffsetTop =
          targetOffsetTop + this._getPhysicalSizeIncrement(currentTopItem);
      currentTopItem = (currentTopItem + 1) % this._physicalCount;
      currentVirtualItem++;
    }
    this._updateScrollerSize(true);
    this._positionItems();
    this._resetScrollPosition(
        this._physicalTop + this._scrollOffset + targetOffsetTop);
    this._increasePoolIfNeeded(0);
    // clear cached visible index.
    this._firstVisibleIndexVal = null;
    this._lastVisibleIndexVal = null;
  },

  /**
   * Reset the physical average and the average count.
   */
  _resetAverage: function() {
    this._physicalAverage = 0;
    this._physicalAverageCount = 0;
  },

  /**
   * A handler for the `iron-resize` event triggered by `IronResizableBehavior`
   * when the element is resized.
   */
  _resizeHandler: function() {
    this._debounce('_render', function() {
      // clear cached visible index.
      this._firstVisibleIndexVal = null;
      this._lastVisibleIndexVal = null;
      if (this._isVisible) {
        this.updateViewportBoundaries();
        // Reinstall the scroll event listener.
        this.toggleScrollListener(true);
        this._resetAverage();
        this._render();
      } else {
        // Uninstall the scroll event listener.
        this.toggleScrollListener(false);
      }
    }, animationFrame);
  },

  /**
   * Selects the given item.
   *
   * @method selectItem
   * @param {Object} item The item instance.
   */
  selectItem: function(item) {
    return this.selectIndex(this.items.indexOf(item));
  },

  /**
   * Selects the item at the given index in the items array.
   *
   * @method selectIndex
   * @param {number} index The index of the item in the items array.
   */
  selectIndex: function(index) {
    if (index < 0 || index >= this._virtualCount) {
      return;
    }
    if (!this.multiSelection && this.selectedItem) {
      this.clearSelection();
    }
    if (this._isIndexRendered(index)) {
      var model = this.modelForElement(
          this._physicalItems[this._getPhysicalIndex(index)]);
      if (model) {
        model[this.selectedAs] = true;
      }
      this.updateSizeForIndex(index);
    }
    this.$.selector.selectIndex(index);
  },

  /**
   * Deselects the given item.
   *
   * @method deselect
   * @param {Object} item The item instance.
   */
  deselectItem: function(item) {
    return this.deselectIndex(this.items.indexOf(item));
  },

  /**
   * Deselects the item at the given index in the items array.
   *
   * @method deselectIndex
   * @param {number} index The index of the item in the items array.
   */
  deselectIndex: function(index) {
    if (index < 0 || index >= this._virtualCount) {
      return;
    }
    if (this._isIndexRendered(index)) {
      var model = this.modelForElement(
          this._physicalItems[this._getPhysicalIndex(index)]);
      model[this.selectedAs] = false;
      this.updateSizeForIndex(index);
    }
    this.$.selector.deselectIndex(index);
  },

  /**
   * Selects or deselects a given item depending on whether the item
   * has already been selected.
   *
   * @method toggleSelectionForItem
   * @param {Object} item The item object.
   */
  toggleSelectionForItem: function(item) {
    return this.toggleSelectionForIndex(this.items.indexOf(item));
  },

  /**
   * Selects or deselects the item at the given index in the items array
   * depending on whether the item has already been selected.
   *
   * @method toggleSelectionForIndex
   * @param {number} index The index of the item in the items array.
   */
  toggleSelectionForIndex: function(index) {
    var isSelected = this.$.selector.isIndexSelected ?
        this.$.selector.isIndexSelected(index) :
        this.$.selector.isSelected(this.items[index]);
    isSelected ? this.deselectIndex(index) : this.selectIndex(index);
  },

  /**
   * Clears the current selection in the list.
   *
   * @method clearSelection
   */
  clearSelection: function() {
    this._iterateItems(function(pidx, vidx) {
      this.modelForElement(this._physicalItems[pidx])[this.selectedAs] = false;
    });
    this.$.selector.clearSelection();
  },

  /**
   * Add an event listener to `tap` if `selectionEnabled` is true,
   * it will remove the listener otherwise.
   */
  _selectionEnabledChanged: function(selectionEnabled) {
    var handler = selectionEnabled ? this.listen : this.unlisten;
    handler.call(this, this, 'tap', '_selectionHandler');
  },

  /**
   * Select an item from an event object.
   */
  _selectionHandler: function(e) {
    var model = this.modelForElement(e.target);
    if (!model) {
      return;
    }
    var modelTabIndex, activeElTabIndex;
    var target = dom(e).path[0];
    var activeEl = this._getActiveElement();
    var physicalItem =
        this._physicalItems[this._getPhysicalIndex(model[this.indexAs])];
    // Safari does not focus certain form controls via mouse
    // https://bugs.webkit.org/show_bug.cgi?id=118043
    if (target.localName === 'input' || target.localName === 'button' ||
        target.localName === 'select') {
      return;
    }
    // Set a temporary tabindex
    modelTabIndex = model.tabIndex;
    model.tabIndex = SECRET_TABINDEX;
    activeElTabIndex = activeEl ? activeEl.tabIndex : -1;
    model.tabIndex = modelTabIndex;
    // Only select the item if the tap wasn't on a focusable child
    // or the element bound to `tabIndex`
    if (activeEl && physicalItem !== activeEl &&
        physicalItem.contains(activeEl) &&
        activeElTabIndex !== SECRET_TABINDEX) {
      return;
    }
    this.toggleSelectionForItem(model[this.as]);
  },

  _multiSelectionChanged: function(multiSelection) {
    this.clearSelection();
    this.$.selector.multi = multiSelection;
  },

  /**
   * Updates the size of a given list item.
   *
   * @method updateSizeForItem
   * @param {Object} item The item instance.
   */
  updateSizeForItem: function(item) {
    return this.updateSizeForIndex(this.items.indexOf(item));
  },

  /**
   * Updates the size of the item at the given index in the items array.
   *
   * @method updateSizeForIndex
   * @param {number} index The index of the item in the items array.
   */
  updateSizeForIndex: function(index) {
    if (!this._isIndexRendered(index)) {
      return null;
    }
    this._updateMetrics([this._getPhysicalIndex(index)]);
    this._positionItems();
    return null;
  },

  /**
   * Creates a temporary backfill item in the rendered pool of physical items
   * to replace the main focused item. The focused item has tabIndex = 0
   * and might be currently focused by the user.
   *
   * This dynamic replacement helps to preserve the focus state.
   */
  _manageFocus: function() {
    var fidx = this._focusedVirtualIndex;

    if (fidx >= 0 && fidx < this._virtualCount) {
      // if it's a valid index, check if that index is rendered
      // in a physical item.
      if (this._isIndexRendered(fidx)) {
        this._restoreFocusedItem();
      } else {
        this._createFocusBackfillItem();
      }
    } else if (this._virtualCount > 0 && this._physicalCount > 0) {
      // otherwise, assign the initial focused index.
      this._focusedPhysicalIndex = this._physicalStart;
      this._focusedVirtualIndex = this._virtualStart;
      this._focusedItem = this._physicalItems[this._physicalStart];
    }
  },

  /**
   * Converts a random index to the index of the item that completes it's row.
   * Allows for better order and fill computation when grid == true.
   */
  _convertIndexToCompleteRow: function(idx) {
    // when grid == false _itemPerRow can be unset.
    this._itemsPerRow = this._itemsPerRow || 1;
    return this.grid ? Math.ceil(idx / this._itemsPerRow) * this._itemsPerRow :
                       idx;
  },

  _isIndexRendered: function(idx) {
    return idx >= this._virtualStart && idx <= this._virtualEnd;
  },

  _isIndexVisible: function(idx) {
    return idx >= this.firstVisibleIndex && idx <= this.lastVisibleIndex;
  },

  _getPhysicalIndex: function(vidx) {
    return (this._physicalStart + (vidx - this._virtualStart)) %
        this._physicalCount;
  },

  focusItem: function(idx) {
    this._focusPhysicalItem(idx);
  },

  _focusPhysicalItem: function(idx) {
    if (idx < 0 || idx >= this._virtualCount) {
      return;
    }
    this._restoreFocusedItem();
    // scroll to index to make sure it's rendered
    if (!this._isIndexRendered(idx)) {
      this.scrollToIndex(idx);
    }
    var physicalItem = this._physicalItems[this._getPhysicalIndex(idx)];
    var model = this.modelForElement(physicalItem);
    var focusable;
    // set a secret tab index
    model.tabIndex = SECRET_TABINDEX;
    // check if focusable element is the physical item
    if (physicalItem.tabIndex === SECRET_TABINDEX) {
      focusable = physicalItem;
    }
    // search for the element which tabindex is bound to the secret tab index
    if (!focusable) {
      focusable = dom(physicalItem)
                      .querySelector('[tabindex="' + SECRET_TABINDEX + '"]');
    }
    // restore the tab index
    model.tabIndex = 0;
    // focus the focusable element
    this._focusedVirtualIndex = idx;
    focusable && focusable.focus();
  },

  _removeFocusedItem: function() {
    if (this._offscreenFocusedItem) {
      this._itemsParent.removeChild(this._offscreenFocusedItem);
    }
    this._offscreenFocusedItem = null;
    this._focusBackfillItem = null;
    this._focusedItem = null;
    this._focusedVirtualIndex = -1;
    this._focusedPhysicalIndex = -1;
  },

  _createFocusBackfillItem: function() {
    var fpidx = this._focusedPhysicalIndex;

    if (this._offscreenFocusedItem || this._focusedVirtualIndex < 0) {
      return;
    }
    if (!this._focusBackfillItem) {
      // Create a physical item.
      var inst = this.stamp(null);
      this._focusBackfillItem =
          /** @type {!HTMLElement} */ (inst.root.querySelector('*'));
      this._itemsParent.appendChild(inst.root);
    }
    // Set the offcreen focused physical item.
    this._offscreenFocusedItem = this._physicalItems[fpidx];
    this.modelForElement(this._offscreenFocusedItem).tabIndex = 0;
    this._physicalItems[fpidx] = this._focusBackfillItem;
    this._focusedPhysicalIndex = fpidx;
    // Hide the focused physical.
    this.translate3d(0, HIDDEN_Y, 0, this._offscreenFocusedItem);
  },

  _restoreFocusedItem: function() {
    if (!this._offscreenFocusedItem || this._focusedVirtualIndex < 0) {
      return;
    }
    // Assign models to the focused index.
    this._assignModels();
    // Get the new physical index for the focused index.
    var fpidx = this._focusedPhysicalIndex =
        this._getPhysicalIndex(this._focusedVirtualIndex);

    var onScreenItem = this._physicalItems[fpidx];
    if (!onScreenItem) {
      return;
    }
    var onScreenInstance = this.modelForElement(onScreenItem);
    var offScreenInstance = this.modelForElement(this._offscreenFocusedItem);
    // Restores the physical item only when it has the same model
    // as the offscreen one. Use key for comparison since users can set
    // a new item via set('items.idx').
    if (onScreenInstance[this.as] === offScreenInstance[this.as]) {
      // Flip the focus backfill.
      this._focusBackfillItem = onScreenItem;
      onScreenInstance.tabIndex = -1;
      // Restore the focused physical item.
      this._physicalItems[fpidx] = this._offscreenFocusedItem;
      // Hide the physical item that backfills.
      this.translate3d(0, HIDDEN_Y, 0, this._focusBackfillItem);
    } else {
      this._removeFocusedItem();
      this._focusBackfillItem = null;
    }
    this._offscreenFocusedItem = null;
  },

  _didFocus: function(e) {
    var targetModel = this.modelForElement(e.target);
    var focusedModel = this.modelForElement(this._focusedItem);
    var hasOffscreenFocusedItem = this._offscreenFocusedItem !== null;
    var fidx = this._focusedVirtualIndex;
    if (!targetModel) {
      return;
    }
    if (focusedModel === targetModel) {
      // If the user focused the same item, then bring it into view if it's not
      // visible.
      if (!this._isIndexVisible(fidx)) {
        this.scrollToIndex(fidx);
      }
    } else {
      this._restoreFocusedItem();
      // Restore tabIndex for the currently focused item.
      if (focusedModel) {
        focusedModel.tabIndex = -1;
      }
      // Set the tabIndex for the next focused item.
      targetModel.tabIndex = 0;
      fidx = targetModel[this.indexAs];
      this._focusedVirtualIndex = fidx;
      this._focusedPhysicalIndex = this._getPhysicalIndex(fidx);
      this._focusedItem = this._physicalItems[this._focusedPhysicalIndex];
      if (hasOffscreenFocusedItem && !this._offscreenFocusedItem) {
        this._update();
      }
    }
  },

  _keydownHandler: function(e) {
    switch (e.keyCode) {
      case /* ARROW_DOWN */ 40:
        if (this._focusedVirtualIndex < this._virtualCount - 1)
          e.preventDefault();
        this._focusPhysicalItem(
            this._focusedVirtualIndex + (this.grid ? this._itemsPerRow : 1));
        break;
      case /* ARROW_RIGHT */ 39:
        if (this.grid)
          this._focusPhysicalItem(
              this._focusedVirtualIndex + (this._isRTL ? -1 : 1));
        break;
      case /* ARROW_UP */ 38:
        if (this._focusedVirtualIndex > 0)
          e.preventDefault();
        this._focusPhysicalItem(
            this._focusedVirtualIndex - (this.grid ? this._itemsPerRow : 1));
        break;
      case /* ARROW_LEFT */ 37:
        if (this.grid)
          this._focusPhysicalItem(
              this._focusedVirtualIndex + (this._isRTL ? 1 : -1));
        break;
      case /* ENTER */ 13:
        this._focusPhysicalItem(this._focusedVirtualIndex);
        if (this.selectionEnabled)
          this._selectionHandler(e);
        break;
    }
  },

  _clamp: function(v, min, max) {
    return Math.min(max, Math.max(min, v));
  },

  _debounce: function(name, cb, asyncModule) {
    this._debouncers = this._debouncers || {};
    this._debouncers[name] =
        Debouncer.debounce(this._debouncers[name], asyncModule, cb.bind(this));
    enqueueDebouncer(this._debouncers[name]);
  },

  _forwardProperty: function(inst, name, value) {
    inst._setPendingProperty(name, value);
  },

  /* Templatizer bindings for v2 */
  _forwardHostPropV2: function(prop, value) {
    (this._physicalItems || [])
        .concat([this._offscreenFocusedItem, this._focusBackfillItem])
        .forEach(function(item) {
          if (item) {
            this.modelForElement(item).forwardHostProp(prop, value);
          }
        }, this);
  },

  _notifyInstancePropV2: function(inst, prop, value) {
    if (matches(this.as, prop)) {
      var idx = inst[this.indexAs];
      if (prop == this.as) {
        this.items[idx] = value;
      }
      this.notifyPath(translate(this.as, 'items.' + idx, prop), value);
    }
  },

  /* Templatizer bindings for v1 */
  _getStampedChildren: function() {
    return this._physicalItems;
  },

  _forwardInstancePath: function(inst, path, value) {
    if (path.indexOf(this.as + '.') === 0) {
      this.notifyPath(
          'items.' + inst.__key__ + '.' + path.slice(this.as.length + 1),
          value);
    }
  },

  _forwardParentPath: function(path, value) {
    (this._physicalItems || [])
        .concat([this._offscreenFocusedItem, this._focusBackfillItem])
        .forEach(function(item) {
          if (item) {
            this.modelForElement(item).notifyPath(path, value);
          }
        }, this);
  },

  _forwardParentProp: function(prop, value) {
    (this._physicalItems || [])
        .concat([this._offscreenFocusedItem, this._focusBackfillItem])
        .forEach(function(item) {
          if (item) {
            this.modelForElement(item)[prop] = value;
          }
        }, this);
  },

  /* Gets the activeElement of the shadow root/host that contains the list. */
  _getActiveElement: function() {
    var itemsHost = this._itemsParent.node.domHost;
    return dom(itemsHost ? itemsHost.root : document).activeElement;
  }
});

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Verify |value| is truthy.
 * @param value A value to check for truthiness. Note that this
 *     may be used to test whether |value| is defined or not, and we don't want
 *     to force a cast to boolean.
 */
function assert(value, message) {
    if (value) {
        return;
    }
    throw new Error('Assertion failed' + (message ? `: ${message}` : ''));
}
/**
 * Call this from places in the code that should never be reached.
 *
 * For example, handling all the values of enum with a switch() like this:
 *
 *   function getValueFromEnum(enum) {
 *     switch (enum) {
 *       case ENUM_FIRST_OF_TWO:
 *         return first
 *       case ENUM_LAST_OF_TWO:
 *         return last;
 *     }
 *     assertNotReached();
 *   }
 *
 * This code should only be hit in the case of serious programmer error or
 * unexpected input.
 */
function assertNotReached(message = 'Unreachable code hit') {
    assert(false, message);
}

// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Make a string safe for Polymer bindings that are inner-h-t-m-l or other
 * innerHTML use.
 * @param rawString The unsanitized string
 * @param opts Optional additional allowed tags and attributes.
 */
function sanitizeInnerHtmlInternal(rawString, opts) {
    opts = opts || {};
    const html = parseHtmlSubset(`<b>${rawString}</b>`, opts.tags, opts.attrs)
        .firstElementChild;
    return html.innerHTML;
}
// 
let sanitizedPolicy = null;
/**
 * Same as |sanitizeInnerHtmlInternal|, but it passes through sanitizedPolicy
 * to create a TrustedHTML.
 */
function sanitizeInnerHtml(rawString, opts) {
    assert(window.trustedTypes);
    if (sanitizedPolicy === null) {
        // Initialize |sanitizedPolicy| lazily.
        sanitizedPolicy = window.trustedTypes.createPolicy('sanitize-inner-html', {
            createHTML: sanitizeInnerHtmlInternal,
            createScript: () => assertNotReached(),
            createScriptURL: () => assertNotReached(),
        });
    }
    return sanitizedPolicy.createHTML(rawString, opts);
}
const allowAttribute = (_node, _value) => true;
/** Allow-list of attributes in parseHtmlSubset. */
const allowedAttributes = new Map([
    [
        'href',
        (node, value) => {
            // Only allow a[href] starting with chrome:// or https:// or equaling
            // to #.
            return node.tagName === 'A' &&
                (value.startsWith('chrome://') || value.startsWith('https://') ||
                    value === '#');
        },
    ],
    [
        'target',
        (node, value) => {
            // Only allow a[target='_blank'].
            // TODO(dbeam): are there valid use cases for target !== '_blank'?
            return node.tagName === 'A' && value === '_blank';
        },
    ],
]);
/** Allow-list of optional attributes in parseHtmlSubset. */
const allowedOptionalAttributes = new Map([
    ['class', allowAttribute],
    ['id', allowAttribute],
    ['is', (_node, value) => value === 'action-link' || value === ''],
    ['role', (_node, value) => value === 'link'],
    [
        'src',
        (node, value) => {
            // Only allow img[src] starting with chrome://
            return node.tagName === 'IMG' &&
                value.startsWith('chrome://');
        },
    ],
    ['tabindex', allowAttribute],
    ['aria-hidden', allowAttribute],
    ['aria-label', allowAttribute],
    ['aria-labelledby', allowAttribute],
]);
/** Allow-list of tag names in parseHtmlSubset. */
const allowedTags = new Set(['A', 'B', 'I', 'BR', 'DIV', 'EM', 'KBD', 'P', 'PRE', 'SPAN', 'STRONG']);
/** Allow-list of optional tag names in parseHtmlSubset. */
const allowedOptionalTags = new Set(['IMG', 'LI', 'UL']);
/**
 * This policy maps a given string to a `TrustedHTML` object
 * without performing any validation. Callsites must ensure
 * that the resulting object will only be used in inert
 * documents. Initialized lazily.
 */
let unsanitizedPolicy;
/**
 * @param optTags an Array to merge.
 * @return Set of allowed tags.
 */
function mergeTags(optTags) {
    const clone = new Set(allowedTags);
    optTags.forEach(str => {
        const tag = str.toUpperCase();
        if (allowedOptionalTags.has(tag)) {
            clone.add(tag);
        }
    });
    return clone;
}
/**
 * @param optAttrs an Array to merge.
 * @return Map of allowed attributes.
 */
function mergeAttrs(optAttrs) {
    const clone = new Map(allowedAttributes);
    optAttrs.forEach(key => {
        if (allowedOptionalAttributes.has(key)) {
            clone.set(key, allowedOptionalAttributes.get(key));
        }
    });
    return clone;
}
function walk(n, f) {
    f(n);
    for (let i = 0; i < n.childNodes.length; i++) {
        walk(n.childNodes[i], f);
    }
}
function assertElement(tags, node) {
    if (!tags.has(node.tagName)) {
        throw Error(node.tagName + ' is not supported');
    }
}
function assertAttribute(attrs, attrNode, node) {
    const n = attrNode.nodeName;
    const v = attrNode.nodeValue || '';
    if (!attrs.has(n) || !attrs.get(n)(node, v)) {
        throw Error(node.tagName + '[' + n + '="' + v +
            '"] is not supported');
    }
}
/**
 * Parses a very small subset of HTML. This ensures that insecure HTML /
 * javascript cannot be injected into WebUI.
 * @param s The string to parse.
 * @param extraTags Optional extra allowed tags.
 * @param extraAttrs
 *     Optional extra allowed attributes (all tags are run through these).
 * @throws an Error in case of non supported markup.
 * @return A document fragment containing the DOM tree.
 */
function parseHtmlSubset(s, extraTags, extraAttrs) {
    const tags = extraTags ? mergeTags(extraTags) : allowedTags;
    const attrs = extraAttrs ? mergeAttrs(extraAttrs) : allowedAttributes;
    const doc = document.implementation.createHTMLDocument('');
    const r = doc.createRange();
    r.selectNode(doc.body);
    if (window.trustedTypes) {
        if (!unsanitizedPolicy) {
            unsanitizedPolicy =
                window.trustedTypes.createPolicy('parse-html-subset', {
                    createHTML: (untrustedHTML) => untrustedHTML,
                    createScript: () => assertNotReached(),
                    createScriptURL: () => assertNotReached(),
                });
        }
        s = unsanitizedPolicy.createHTML(s);
    }
    // This does not execute any scripts because the document has no view.
    const df = r.createContextualFragment(s);
    walk(df, function (node) {
        switch (node.nodeType) {
            case Node.ELEMENT_NODE:
                assertElement(tags, node);
                const nodeAttrs = node.attributes;
                for (let i = 0; i < nodeAttrs.length; ++i) {
                    assertAttribute(attrs, nodeAttrs[i], node);
                }
                break;
            case Node.COMMENT_NODE:
            case Node.DOCUMENT_FRAGMENT_NODE:
            case Node.TEXT_NODE:
                break;
            default:
                throw Error('Node type ' + node.nodeType + ' is not supported');
        }
    });
    return df;
}

function getTemplate$9() {
    return html `<!--_html_template_start_--><style include="cr-shared-style">:host{--cr-localized-link-display:inline;display:block}:host([link-disabled]){cursor:pointer;opacity:var(--cr-disabled-opacity);pointer-events:none}a{display:var(--cr-localized-link-display)}a[href]{color:var(--cr-link-color)}a[is=action-link]{user-select:none}#container{display:contents}</style>

<div id="container"></div>
<!--_html_template_end_-->`;
}

// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'localized-link' takes a localized string that
 * contains up to one anchor tag, and labels the string contained within the
 * anchor tag with the entire localized string. The string should not be bound
 * by element tags. The string should not contain any elements other than the
 * single anchor tagged element that will be aria-labelledby the entire string.
 *
 * Example: "lorem ipsum <a href="example.com">Learn More</a> dolor sit"
 *
 * The "Learn More" will be aria-labelledby like so: "lorem ipsum Learn More
 * dolor sit". Meanwhile, "Lorem ipsum" and "dolor sit" will be aria-hidden.
 *
 * This element also supports strings that do not contain anchor tags; in this
 * case, the element gracefully falls back to normal text. This can be useful
 * when the property is data-bound to a function which sometimes returns a
 * string with a link and sometimes returns a normal string.
 */
class LocalizedLinkElement extends PolymerElement {
    static get is() {
        return 'localized-link';
    }
    static get template() {
        return getTemplate$9();
    }
    static get properties() {
        return {
            /**
             * The localized string that contains up to one anchor tag, the text
             * within which will be aria-labelledby the entire localizedString.
             */
            localizedString: String,
            /**
             * If provided, the URL that the anchor tag will point to. There is no
             * need to provide a linkUrl if the URL is embedded in the
             * localizedString.
             */
            linkUrl: {
                type: String,
                value: '',
            },
            /**
             * If true, localized link will be disabled.
             */
            linkDisabled: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
                observer: 'updateAnchorTagTabIndex_',
            },
            /**
             * localizedString, with aria attributes and the optionally provided link.
             */
            containerInnerHTML_: {
                type: String,
                value: '',
                computed: 'getAriaLabelledContent_(localizedString, linkUrl)',
                observer: 'setContainerInnerHtml_',
            },
        };
    }
    /**
     * Attaches aria attributes and optionally provided link to the provided
     * localizedString.
     * @return localizedString formatted with additional ids, spans, and an
     *     aria-labelledby tag
     */
    getAriaLabelledContent_(localizedString, linkUrl) {
        const tempEl = document.createElement('div');
        tempEl.innerHTML = sanitizeInnerHtml(localizedString, { attrs: ['id'] });
        const ariaLabelledByIds = [];
        tempEl.childNodes.forEach((node, index) => {
            // Text nodes should be aria-hidden and associated with an element id
            // that the anchor element can be aria-labelledby.
            if (node.nodeType === Node.TEXT_NODE) {
                const spanNode = document.createElement('span');
                spanNode.textContent = node.textContent;
                spanNode.id = `id${index}`;
                ariaLabelledByIds.push(spanNode.id);
                spanNode.setAttribute('aria-hidden', 'true');
                node.replaceWith(spanNode);
                return;
            }
            // The single element node with anchor tags should also be aria-labelledby
            // itself in-order with respect to the entire string.
            if (node.nodeType === Node.ELEMENT_NODE && node.nodeName === 'A') {
                const element = node;
                element.id = `id${index}`;
                ariaLabelledByIds.push(element.id);
                return;
            }
            // Only text and <a> nodes are allowed.
            assertNotReached('localized-link has invalid node types');
        });
        const anchorTags = tempEl.querySelectorAll('a');
        // In the event the provided localizedString contains only text nodes,
        // populate the contents with the provided localizedString.
        if (anchorTags.length === 0) {
            return localizedString;
        }
        assert(anchorTags.length === 1, 'localized-link should contain exactly one anchor tag');
        const anchorTag = anchorTags[0];
        anchorTag.setAttribute('aria-labelledby', ariaLabelledByIds.join(' '));
        anchorTag.tabIndex = this.linkDisabled ? -1 : 0;
        if (linkUrl !== '') {
            anchorTag.href = linkUrl;
            anchorTag.target = '_blank';
        }
        return tempEl.innerHTML;
    }
    setContainerInnerHtml_() {
        this.$.container.innerHTML = sanitizeInnerHtml(this.containerInnerHTML_, {
            attrs: [
                'aria-hidden',
                'aria-labelledby',
                'id',
                'tabindex',
            ],
        });
        const anchorTag = this.shadowRoot.querySelector('a');
        if (anchorTag) {
            anchorTag.addEventListener('click', (event) => this.onAnchorTagClick_(event));
            anchorTag.addEventListener('auxclick', (event) => {
                // trigger the click handler on middle-button clicks
                if (event.button === 1) {
                    this.onAnchorTagClick_(event);
                }
            });
        }
    }
    onAnchorTagClick_(event) {
        if (this.linkDisabled) {
            event.preventDefault();
            return;
        }
        this.dispatchEvent(new CustomEvent('link-clicked', { bubbles: true, composed: true, detail: { event } }));
        // Stop propagation of the event, since it has already been handled by
        // opening the link.
        event.stopPropagation();
    }
    /**
     *  Removes anchor tag from being targeted by chromeVox when link is
     *  disabled.
     */
    updateAnchorTagTabIndex_() {
        const anchorTag = this.shadowRoot.querySelector('a');
        if (!anchorTag) {
            return;
        }
        anchorTag.tabIndex = this.linkDisabled ? -1 : 0;
    }
}
customElements.define(LocalizedLinkElement.is, LocalizedLinkElement);

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// clang-format on

/** @polymerBehavior */
const CrScrollableBehavior = {

  /** @private {number|null} */
  intervalId_: null,

  ready() {
    beforeNextRender(this, () => {
      this.requestUpdateScroll();

      // Listen to the 'scroll' event for each scrollable container.
      const scrollableElements =
          this.shadowRoot.querySelectorAll('[scrollable]');
      for (let i = 0; i < scrollableElements.length; i++) {
        scrollableElements[i].addEventListener(
            'scroll', this.updateScrollEvent_.bind(this));
      }
    });
  },

  detached() {
    if (this.intervalId_ !== null) {
      clearInterval(this.intervalId_);
    }
  },

  /**
   * Called any time the contents of a scrollable container may have changed.
   * This ensures that the <iron-list> contents of dynamically sized
   * containers are resized correctly.
   */
  updateScrollableContents() {
    if (this.intervalId_ !== null) {
      return;
    }  // notifyResize is already in progress.

    this.requestUpdateScroll();

    const nodeList = this.shadowRoot.querySelectorAll('[scrollable] iron-list');
    if (!nodeList.length) {
      return;
    }

    let nodesToResize = Array.from(nodeList).map(node => ({
                                                   node: node,
                                                   lastScrollHeight: 0,
                                                 }));
    // Use setInterval to avoid initial render / sizing issues.
    this.intervalId_ = window.setInterval(() => {
      const checkAgain = [];
      nodesToResize.forEach(({node, lastScrollHeight}) => {
        const scrollHeight = node.parentNode.scrollHeight;
        // A hidden scroll-container has a height of 0. When not hidden, it has
        // a min-height of 1px and the iron-list needs a resize to show the
        // initial items and update the |scrollHeight|. The initial item count
        // is determined by the |scrollHeight|. A scrollHeight of 1px will
        // result in the minimum default item count (currently 3). After the
        // |scrollHeight| is updated to be greater than 1px, another resize is
        // needed to correctly calculate the number of physical iron-list items
        // to render.
        if (scrollHeight !== lastScrollHeight) {
          const ironList = /** @type {!IronListElement} */ (node);
          ironList.notifyResize();
        }

        // TODO(crbug.com/1121679): Add UI Test for this behavior.
        if (scrollHeight <= 1 &&
            window.getComputedStyle(node.parentNode).display !== 'none') {
          checkAgain.push({
            node: node,
            lastScrollHeight: scrollHeight,
          });
        }
      });
      if (checkAgain.length === 0) {
        window.clearInterval(this.intervalId_);
        this.intervalId_ = null;
      } else {
        nodesToResize = checkAgain;
      }
    }, 10);
  },

  /**
   * Setup the initial scrolling related classes for each scrollable container.
   * Called from ready() and updateScrollableContents(). May also be called
   * directly when the contents change (e.g. when not using iron-list).
   */
  requestUpdateScroll() {
    requestAnimationFrame(function() {
      const scrollableElements =
          this.shadowRoot.querySelectorAll('[scrollable]');
      for (let i = 0; i < scrollableElements.length; i++) {
        this.updateScroll_(/** @type {!HTMLElement} */ (scrollableElements[i]));
      }
    }.bind(this));
  },

  /** @param {!IronListElement} list */
  saveScroll(list) {
    // Store a FIFO of saved scroll positions so that multiple updates in a
    // frame are applied correctly. Specifically we need to track when '0' is
    // saved (but not apply it), and still handle patterns like [30, 0, 32].
    list.savedScrollTops = list.savedScrollTops || [];
    list.savedScrollTops.push(list.scrollTarget.scrollTop);
  },

  /** @param {!IronListElement} list */
  restoreScroll(list) {
    this.async(function() {
      const scrollTop = list.savedScrollTops.shift();
      // Ignore scrollTop of 0 in case it was intermittent (we do not need to
      // explicitly scroll to 0).
      if (scrollTop !== 0) {
        list.scroll(0, scrollTop);
      }
    });
  },

  /**
   * Event wrapper for updateScroll_.
   * @param {!Event} event
   * @private
   */
  updateScrollEvent_(event) {
    const scrollable = /** @type {!HTMLElement} */ (event.target);
    this.updateScroll_(scrollable);
  },

  /**
   * This gets called once initially and any time a scrollable container
   * scrolls.
   * @param {!HTMLElement} scrollable
   * @private
   */
  updateScroll_(scrollable) {
    scrollable.classList.toggle(
        'can-scroll', scrollable.clientHeight < scrollable.scrollHeight);
    scrollable.classList.toggle('is-scrolled', scrollable.scrollTop > 0);
    scrollable.classList.toggle(
        'scrolled-to-bottom',
        scrollable.scrollTop + scrollable.clientHeight >=
            scrollable.scrollHeight);
  },
};

function getTemplate$8() {
  return html`<!--_html_template_start_--><style include="cr-shared-style">
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
<!--_html_template_end_-->`;
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {CrScrollableBehaviorInterface}
 * @implements {I18nBehaviorInterface}
 */
const SettingsBluetoothPairingDeviceSelectionPageElementBase =
    mixinBehaviors([CrScrollableBehavior, I18nBehavior], PolymerElement);

/** @polymer */
class SettingsBluetoothPairingDeviceSelectionPageElement extends
    SettingsBluetoothPairingDeviceSelectionPageElementBase {
  static get is() {
    return 'bluetooth-pairing-device-selection-page';
  }

  static get template() {
    return getTemplate$8();
  }

  static get properties() {
    return {
      /**
       * @type {!Array<!BluetoothDeviceProperties>}
       */
      devices: {
        type: Array,
        value: [],
        observer: 'onDevicesChanged_',
      },

      /**
       * Id of a device who's pairing attempt failed.
       * @type {string}
       */
      failedPairingDeviceId: {
        type: String,
        value: '',
      },

      /**
       * @type {?BluetoothDeviceProperties}
       */
      devicePendingPairing: {
        type: Object,
        value: null,
        observer: 'onDevicePendingPairingChanged_',
      },

      /** @type {boolean} */
      isBluetoothEnabled: {
        type: Boolean,
        value: false,
      },

      /**
       * Flag indicating whether links should be displayed or not. In some
       * cases, such as the user being in OOBE or the login screen, links will
       * not work and should not be displayed.
       */
      shouldOmitLinks: {
        type: Boolean,
        value: false,
      },

      /** @private {!ButtonBarState} */
      buttonBarState_: {
        type: Object,
        value: {
          cancel: ButtonState.ENABLED,
          pair: ButtonState.HIDDEN,
        },
      },

      /**
       * Used by FocusRowBehavior to track the last focused element on a row.
       * @private
       */
      lastFocused_: Object,

      /**
       * Used by FocusRowBehavior to track if the list has been blurred.
       * @private
       */
      listBlurred_: Boolean,
    };
  }

  constructor() {
    super();

    /**
     * The last device that was selected for pairing.
     * @private {?BluetoothDeviceProperties}
     */
    this.lastSelectedDevice_ = null;
  }

  /**
   * Attempts to focus the item corresponding to |lastSelectedDevice_|.
   */
  attemptFocusLastSelectedItem() {
    if (!this.lastSelectedDevice_) {
      return;
    }

    const index = this.devices.findIndex(
        device => device.id === this.lastSelectedDevice_.id);
    if (index < 0) {
      return;
    }

    afterNextRender(this, function() {
      const items =
          this.shadowRoot.querySelectorAll('bluetooth-pairing-device-item');
      if (index >= items.length) {
        return;
      }

      items[index].focus();
    });
  }

  /** @private */
  onDevicesChanged_() {
    // CrScrollableBehaviorInterface method required for list items to be
    // properly rendered when devices updates. This is because iron-list size
    // is not fixed, if this is not called iron-list container would not be
    // properly sized.
    this.updateScrollableContents();
  }

  /** @private */
  onDevicePendingPairingChanged_() {
    // If |devicePendingPairing_| has changed to a defined value, it was the
    // last selected device. |devicePendingPairing_| gets reset to null whenever
    // we move back to this page after a pairing attempt fails or cancels. In
    // this case, do not reset |lastSelectedDevice_| because we want to hold
    // onto the device that was last attempted to be paired with.
    if (!this.devicePendingPairing) {
      return;
    }

    this.lastSelectedDevice_ = this.devicePendingPairing;
  }

  /**
   * @private
   * @return {boolean}
   */
  shouldShowDeviceList_() {
    return this.isBluetoothEnabled && this.devices && this.devices.length > 0;
  }

  /**
   * @private
   * @return {string}
   */
  getDeviceListTitle_() {
    if (!this.isBluetoothEnabled) {
      return this.i18n('bluetoothDisabled');
    }

    // Case where device list becomes empty (device is turned off)
    // and then device pairing fails.
    // Note: |devices| always updates before pairing result
    // returns.
    if (!this.devicePendingPairing && !this.shouldShowDeviceList_()) {
      return this.i18n('bluetoothNoAvailableDevices');
    }

    // When pairing succeeds there is a brief moement where |devices| is empty
    // (device is removed from discovered list) but because of b/216522777 we
    // still want to show available devices header, we check for
    // |devicePendingPairing| which will have a value since it is only reset
    // after pairing fails.
    if (this.shouldShowDeviceList_() || this.devicePendingPairing) {
      return this.i18n('bluetoothAvailableDevices');
    }

    return this.i18n('bluetoothNoAvailableDevices');
  }

  /**
   * @param {?BluetoothDeviceProperties} device
   * @return {!DeviceItemState}
   * @private
   */
  getDeviceItemState_(device) {
    if (!device) {
      return DeviceItemState.DEFAULT;
    }

    if (device.id === this.failedPairingDeviceId) {
      return DeviceItemState.FAILED;
    }

    if (this.devicePendingPairing &&
        device.id === this.devicePendingPairing.id) {
      return DeviceItemState.PAIRING;
    }

    return DeviceItemState.DEFAULT;
  }
}

customElements.define(
    SettingsBluetoothPairingDeviceSelectionPageElement.is,
    SettingsBluetoothPairingDeviceSelectionPageElement);

function getTemplate$7() {
  return html`<!--_html_template_start_--><style include="cr-hidden-style iron-flex">
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
<!--_html_template_end_-->`;
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


// Pairing passkey can be a maximum of 16 characters while pairing code a max
// of  6 digits. This is used to check that the passed code is less than or
// equal to the max possible value.
const MAX_CODE_LENGTH = 16;
/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {I18nBehaviorInterface}
 */
const SettingsBluetoothPairingEnterCodeElementBase =
    mixinBehaviors([I18nBehavior], PolymerElement);

/** @polymer */
class SettingsBluetoothPairingEnterCodeElement extends
    SettingsBluetoothPairingEnterCodeElementBase {
  static get is() {
    return 'bluetooth-pairing-enter-code-page';
  }

  static get template() {
    return getTemplate$7();
  }

  static get properties() {
    return {
      /**
       * @type {string}
       */
      deviceName: {
        type: String,
        value: '',
      },

      /** @type {string} */
      code: {
        type: String,
        value: '',
      },

      /** @type {number} */
      numKeysEntered: {
        type: Number,
        value: 0,
      },

      /** @private {!ButtonBarState} */
      buttonBarState_: {
        type: Object,
        value: {
          cancel: ButtonState.ENABLED,
          pair: ButtonState.HIDDEN,
        },
      },

      /**
       * Array representation of |code|.
       * @private {!Array<string>}
       */
      keys_: {
        type: Array,
        computed: 'computeKeys_(code)',
      },
    };
  }

  /**
   * @return {!Array<string>}
   * @private
   */
  computeKeys_() {
    if (!this.code) {
      return [];
    }

    assert$1(this.code.length <= MAX_CODE_LENGTH);
    return this.code.split('');
  }

  /**
   * @param {number} index
   * @return {string}
   */
  getKeyAt_(index) {
    return this.keys_[index];
  }

  /**
   * @param {number} index
   * @return {string}
   * @private
   */
  getKeyClass_(index) {
    if (!this.keys_ || !this.numKeysEntered) {
      return '';
    }

    if (index === this.numKeysEntered) {
      return 'next';
    } else if (index < this.numKeysEntered) {
      return 'typed';
    }

    return '';
  }

  /**
   * @return {string}
   * @private
   */
  getEnterClass_() {
    if (!this.keys_ || !this.numKeysEntered) {
      return '';
    }

    if (this.numKeysEntered >= this.keys_.length) {
      return 'next';
    }

    return '';
  }

  /**
   * @private
   * @return {string}
   */
  getMessage_() {
    return this.i18n('bluetoothPairingEnterKeys', this.deviceName);
  }
}

customElements.define(
    SettingsBluetoothPairingEnterCodeElement.is,
    SettingsBluetoothPairingEnterCodeElement);

const styleMod$1 = document.createElement('dom-module');
styleMod$1.appendChild(html `
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
`.content);
styleMod$1.register('cr-input-style');

function getTemplate$6() {
    return html `<!--_html_template_start_-->    <style include="cr-hidden-style cr-input-style cr-shared-style">:host([disabled]) :-webkit-any(#label,#error,#input-container){opacity:var(--cr-disabled-opacity);pointer-events:none}:host-context([chrome-refresh-2023]):host([disabled]) :is(#label,#error,#input-container){opacity:1}:host ::slotted(cr-button[slot=suffix]){margin-inline-start:var(--cr-button-edge-spacing)!important}:host([invalid]) #label{color:var(--cr-input-error-color)}#input{border-bottom:var(--cr-input-border-bottom,none);letter-spacing:var(--cr-input-letter-spacing)}:host-context([chrome-refresh-2023]) #input{border-bottom:none}:host-context([chrome-refresh-2023]) #input-container{border:var(--cr-input-border,none)}#input::placeholder{color:var(--cr-input-placeholder-color,var(--cr-secondary-text-color));letter-spacing:var(--cr-input-placeholder-letter-spacing)}:host([invalid]) #input{caret-color:var(--cr-input-error-color)}:host([readonly]) #input{opacity:var(--cr-input-readonly-opacity,.6)}:host([invalid]) #underline{border-color:var(--cr-input-error-color)}#error{color:var(--cr-input-error-color);display:var(--cr-input-error-display,block);font-size:var(--cr-form-field-label-font-size);height:var(--cr-form-field-label-height);line-height:var(--cr-form-field-label-line-height);margin:8px 0;visibility:hidden;white-space:var(--cr-input-error-white-space)}:host-context([chrome-refresh-2023]) #error{font-size:11px;line-height:16px;margin:4px 10px}:host([invalid]) #error{visibility:visible}#inner-input-content,#row-container{align-items:center;display:flex;justify-content:space-between;position:relative}:host-context([chrome-refresh-2023]) #inner-input-content{gap:4px;height:16px;z-index:1}#input[type=search]::-webkit-search-cancel-button{display:none}:host-context([dir=rtl]) #input[type=url]{text-align:right}#input[type=url]{direction:ltr}</style>
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
<!--_html_template_end_-->`;
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Input types supported by cr-input.
 */
const SUPPORTED_INPUT_TYPES = new Set([
    'number',
    'password',
    'search',
    'text',
    'url',
]);
class CrInputElement extends PolymerElement {
    static get is() {
        return 'cr-input';
    }
    static get template() {
        return getTemplate$6();
    }
    static get properties() {
        return {
            ariaDescription: {
                type: String,
            },
            ariaLabel: {
                type: String,
                value: '',
            },
            autofocus: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            autoValidate: Boolean,
            disabled: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            errorMessage: {
                type: String,
                value: '',
                observer: 'onInvalidOrErrorMessageChanged_',
            },
            displayErrorMessage_: {
                type: String,
                value: '',
            },
            /**
             * This is strictly used internally for styling, do not attempt to use
             * this to set focus.
             */
            focused_: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            invalid: {
                type: Boolean,
                value: false,
                notify: true,
                reflectToAttribute: true,
                observer: 'onInvalidOrErrorMessageChanged_',
            },
            max: {
                type: Number,
                reflectToAttribute: true,
            },
            min: {
                type: Number,
                reflectToAttribute: true,
            },
            maxlength: {
                type: Number,
                reflectToAttribute: true,
            },
            minlength: {
                type: Number,
                reflectToAttribute: true,
            },
            pattern: {
                type: String,
                reflectToAttribute: true,
            },
            inputmode: String,
            label: {
                type: String,
                value: '',
            },
            placeholder: {
                type: String,
                value: null,
                observer: 'placeholderChanged_',
            },
            readonly: {
                type: Boolean,
                reflectToAttribute: true,
            },
            required: {
                type: Boolean,
                reflectToAttribute: true,
            },
            inputTabindex: {
                type: Number,
                value: 0,
                observer: 'onInputTabindexChanged_',
            },
            type: {
                type: String,
                value: 'text',
                observer: 'onTypeChanged_',
            },
            value: {
                type: String,
                value: '',
                notify: true,
                observer: 'onValueChanged_',
            },
        };
    }
    ready() {
        super.ready();
        // Use inputTabindex instead.
        assert(!this.hasAttribute('tabindex'));
    }
    onInputTabindexChanged_() {
        // CrInput only supports 0 or -1 values for the input's tabindex to allow
        // having the input in tab order or not. Values greater than 0 will not work
        // as the shadow root encapsulates tabindices.
        assert(this.inputTabindex === 0 || this.inputTabindex === -1);
    }
    onTypeChanged_() {
        // Check that the 'type' is one of the supported types.
        assert(SUPPORTED_INPUT_TYPES.has(this.type));
    }
    get inputElement() {
        return this.$.input;
    }
    /**
     * Returns the aria label to be used with the input element.
     */
    getAriaLabel_(ariaLabel, label, placeholder) {
        return ariaLabel || label || placeholder;
    }
    /**
     * Returns 'true' or 'false' as a string for the aria-invalid attribute.
     */
    getAriaInvalid_(invalid) {
        return invalid ? 'true' : 'false';
    }
    onInvalidOrErrorMessageChanged_() {
        this.displayErrorMessage_ = this.invalid ? this.errorMessage : '';
        // On VoiceOver role="alert" is not consistently announced when its content
        // changes. Adding and removing the |role| attribute every time there
        // is an error, triggers VoiceOver to consistently announce.
        const ERROR_ID = 'error';
        const errorElement = this.shadowRoot.querySelector(`#${ERROR_ID}`);
        assert(errorElement);
        if (this.invalid) {
            errorElement.setAttribute('role', 'alert');
            this.inputElement.setAttribute('aria-errormessage', ERROR_ID);
        }
        else {
            errorElement.removeAttribute('role');
            this.inputElement.removeAttribute('aria-errormessage');
        }
    }
    /**
     * This is necessary instead of doing <input placeholder="[[placeholder]]">
     * because if this.placeholder is set to a truthy value then removed, it
     * would show "null" as placeholder.
     */
    placeholderChanged_() {
        if (this.placeholder || this.placeholder === '') {
            this.inputElement.setAttribute('placeholder', this.placeholder);
        }
        else {
            this.inputElement.removeAttribute('placeholder');
        }
    }
    focus() {
        this.focusInput();
    }
    /**
     * Focuses the input element.
     * TODO(crbug.com/882612): Replace this with focus() after resolving the text
     * selection issue described in onFocus_().
     * @return Whether the <input> element was focused.
     */
    focusInput() {
        if (this.shadowRoot.activeElement === this.inputElement) {
            return false;
        }
        this.inputElement.focus();
        return true;
    }
    onValueChanged_(newValue, oldValue) {
        if (!newValue && !oldValue) {
            return;
        }
        if (this.autoValidate) {
            this.validate();
        }
    }
    /**
     * 'change' event fires when <input> value changes and user presses 'Enter'.
     * This function helps propagate it to host since change events don't
     * propagate across Shadow DOM boundary by default.
     */
    onInputChange_(e) {
        this.dispatchEvent(new CustomEvent('change', { bubbles: true, composed: true, detail: { sourceEvent: e } }));
    }
    onInputFocus_() {
        this.focused_ = true;
    }
    onInputBlur_() {
        this.focused_ = false;
    }
    /**
     * Selects the text within the input. If no parameters are passed, it will
     * select the entire string. Either no params or both params should be passed.
     * Publicly, this function should be used instead of inputElement.select() or
     * manipulating inputElement.selectionStart/selectionEnd because the order of
     * execution between focus() and select() is sensitive.
     */
    select(start, end) {
        this.inputElement.focus();
        if (start !== undefined && end !== undefined) {
            this.inputElement.setSelectionRange(start, end);
        }
        else {
            // Can't just pass one param.
            assert(start === undefined && end === undefined);
            this.inputElement.select();
        }
    }
    validate() {
        this.invalid = !this.inputElement.checkValidity();
        return !this.invalid;
    }
}
customElements.define(CrInputElement.is, CrInputElement);

function getTemplate$5() {
  return html`<!--_html_template_start_--><style>
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
<!--_html_template_end_-->`;
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


/**
 * Maximum length of a PIN code, it can range from 1 to 6 digits.
 * @type {number}
 */
const PIN_CODE_MAX_LENGTH = 6;

/**
 * Maximum length of a passkey, it can range from 1 to 16 characters.
 * @type {number}
 */
const PASSKEY_MAX_LENGTH = 16;

/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {I18nBehaviorInterface}
 */
const SettingsBluetoothPairingRequestCodePageElementBase =
    mixinBehaviors([I18nBehavior], PolymerElement);

/** @polymer */
class SettingsBluetoothRequestCodePageElement extends
    SettingsBluetoothPairingRequestCodePageElementBase {
  static get is() {
    return 'bluetooth-pairing-request-code-page';
  }

  static get template() {
    return getTemplate$5();
  }

  static get properties() {
    return {
      /**
       * @type {?BluetoothDeviceProperties}
       */
      device: {
        type: Object,
        value: null,
      },

      /** @type {?PairingAuthType} */
      authType: {
        type: Object,
        value: null,
      },

      /** @private {!ButtonBarState} */
      buttonBarState_: {
        type: Object,
        computed: 'computeButtonBarState_(pinCode_)',
      },

      /** @private {string} */
      pinCode_: {
        type: String,
        value: '',
      },
    };
  }

  /** @override */
  connectedCallback() {
    super.connectedCallback();
    afterNextRender(this, () => {
      this.$.pin.focus();
    });
  }

  /**
   * @private
   * @return {string}
   */
  getMessage_() {
    return this.i18n('bluetoothEnterPin', this.getDeviceName_());
  }

  /**
   * @private
   * @return {string}
   */
  getDeviceName_() {
    if (!this.device) {
      return '';
    }

    return mojoString16ToString(this.device.publicName);
  }

  /**
   * @return {!ButtonBarState}
   * @private
   */
  computeButtonBarState_() {
    const pairButtonState =
        !this.pinCode_ ? ButtonState.DISABLED : ButtonState.ENABLED;

    return {
      cancel: ButtonState.ENABLED,
      pair: pairButtonState,
    };
  }

  /**
   * @param {!Event} event
   * @private
   */
  onPairClicked_(event) {
    event.stopPropagation();

    // TODO(crbug.com/1010321): Show spinner while pairing.
    if (!this.pinCode_) {
      return;
    }

    this.dispatchEvent(new CustomEvent('request-code-entered', {
      bubbles: true,
      composed: true,
      detail: {code: this.pinCode_},
    }));
  }

  /**
   * @private
   * @return {number}
   */
  getMaxlength_() {
    if (this.authType === PairingAuthType.REQUEST_PIN_CODE) {
      return PIN_CODE_MAX_LENGTH;
    }

    return PASSKEY_MAX_LENGTH;
  }
}

customElements.define(
    SettingsBluetoothRequestCodePageElement.is,
    SettingsBluetoothRequestCodePageElement);

function getTemplate$4() {
  return html`<!--_html_template_start_--><style>
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
</bluetooth-base-page><!--_html_template_end_-->`;
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {I18nBehaviorInterface}
 */
const SettingsBluetoothPairingConfirmCodePageElementBase =
    mixinBehaviors([I18nBehavior], PolymerElement);

/** @polymer */
class SettingsBluetoothPairingConfirmCodePageElement extends
    SettingsBluetoothPairingConfirmCodePageElementBase {
  static get is() {
    return 'bluetooth-pairing-confirm-code-page';
  }

  static get template() {
    return getTemplate$4();
  }

  static get properties() {
    return {
      /** @type {string} */
      code: {
        type: String,
        value: '',
      },

      /** @private {!ButtonBarState} */
      buttonBarState_: {
        type: Object,
        value: {
          cancel: ButtonState.ENABLED,
          pair: ButtonState.ENABLED,
        },
      },
    };
  }

  /**
   * @param {!Event} event
   * @private
   */
  onPairClicked_(event) {
    event.stopPropagation();
    this.dispatchEvent(new CustomEvent('confirm-code', {
      bubbles: true,
      composed: true,
    }));
  }
}

customElements.define(
    SettingsBluetoothPairingConfirmCodePageElement.is,
    SettingsBluetoothPairingConfirmCodePageElement);

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

const template$1 = html`<dom-module id="paper-spinner-styles">
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
</dom-module>`;

document.head.appendChild(template$1.content);

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/** @polymerBehavior */
const PaperSpinnerBehavior = {

  properties: {
    /**
     * Displays the spinner.
     */
    active: {
      type: Boolean,
      value: false,
      reflectToAttribute: true,
      observer: '__activeChanged'
    },

    /**
     * Alternative text content for accessibility support.
     * If alt is present, it will add an aria-label whose content matches alt
     * when active. If alt is not present, it will default to 'loading' as the
     * alt value.
     */
    alt: {type: String, value: 'loading', observer: '__altChanged'},

    __coolingDown: {type: Boolean, value: false}
  },

  __computeContainerClasses: function(active, coolingDown) {
    return [
      active || coolingDown ? 'active' : '',
      coolingDown ? 'cooldown' : ''
    ].join(' ');
  },

  __activeChanged: function(active, old) {
    this.__setAriaHidden(!active);
    this.__coolingDown = !active && old;
  },

  __altChanged: function(alt) {
    // user-provided `aria-label` takes precedence over prototype default
    if (alt === 'loading') {
      this.alt = this.getAttribute('aria-label') || alt;
    } else {
      this.__setAriaHidden(alt === '');
      this.setAttribute('aria-label', alt);
    }
  },

  __setAriaHidden: function(hidden) {
    var attr = 'aria-hidden';
    if (hidden) {
      this.setAttribute(attr, 'true');
    } else {
      this.removeAttribute(attr);
    }
  },

  __reset: function() {
    this.active = false;
    this.__coolingDown = false;
  }
};

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

const template = html`
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
`;
template.setAttribute('strip-whitespace', '');

/**
Material design: [Progress &
activity](https://www.google.com/design/spec/components/progress-activity.html)

Element providing a single color material design circular spinner.

    <paper-spinner-lite active></paper-spinner-lite>

The default spinner is blue. It can be customized to be a different color.

### Accessibility

Alt attribute should be set to provide adequate context for accessibility. If
not provided, it defaults to 'loading'. Empty alt can be provided to mark the
element as decorative if alternative content is provided in another form (e.g. a
text block following the spinner).

    <paper-spinner-lite alt="Loading contacts list" active></paper-spinner-lite>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-spinner-color` | Color of the spinner | `--google-blue-500`
`--paper-spinner-stroke-width` | The width of the spinner stroke | 3px

@group Paper Elements
@element paper-spinner-lite
@hero hero.svg
@demo demo/index.html
*/
Polymer({
  _template: template,

  is: 'paper-spinner-lite',

  behaviors: [PaperSpinnerBehavior]
});

function getTemplate$3() {
  return html`<!--_html_template_start_--><style>
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
<!--_html_template_end_-->`;
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


/** @polymer */
class SettingsBluetoothSpinnerPageElement extends PolymerElement {
  static get is() {
    return 'bluetooth-spinner-page';
  }

  static get template() {
    return getTemplate$3();
  }

  static get properties() {
    return {
      /** @private {!ButtonBarState} */
      buttonBarState_: {
        type: Object,
        value: {
          cancel: ButtonState.ENABLED,
          pair: ButtonState.DISABLED,
        },
      },
    };
  }
}

customElements.define(
    SettingsBluetoothSpinnerPageElement.is,
    SettingsBluetoothSpinnerPageElement);

function getTemplate$2() {
  return html`<!--_html_template_start_--><style>
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
<!--_html_template_end_-->`;
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


/** @implements {KeyEnteredHandlerInterface} */
class KeyEnteredHandler {
  /**
   * @param {!SettingsBluetoothPairingUiElement} page
   * @param {!KeyEnteredHandlerPendingReceiver}
   *     keyEnteredHandlerReceiver
   */
  constructor(page, keyEnteredHandlerReceiver) {
    /** @private {!SettingsBluetoothPairingUiElement} */
    this.page_ = page;

    /** @private {!KeyEnteredHandlerReceiver} */
    this.keyEnteredHandlerReceiver_ = new KeyEnteredHandlerReceiver(this);
    this.keyEnteredHandlerReceiver_.$.bindHandle(
        keyEnteredHandlerReceiver.handle);
  }

  /** @override */
  handleKeyEntered(numKeysEntered) {
    this.page_.handleKeyEntered(numKeysEntered);
  }

  close() {
    this.keyEnteredHandlerReceiver_.$.close();
  }
}

/** @enum {string} */
const BluetoothPairingSubpageId = {
  DEVICE_SELECTION_PAGE: 'deviceSelectionPage',
  DEVICE_ENTER_CODE_PAGE: 'deviceEnterCodePage',
  DEVICE_REQUEST_CODE_PAGE: 'deviceRequestCodePage',
  DEVICE_CONFIRM_CODE_PAGE: 'deviceConfirmCodePage',
  SPINNER_PAGE: 'spinnerPage',
};

/**
 * @implements {SystemPropertiesObserverInterface}
 * @implements {BluetoothDiscoveryDelegateInterface}
 * @implements {DevicePairingDelegateInterface}
 * @implements {KeyEnteredHandlerInterface}
 * @polymer
 */
class SettingsBluetoothPairingUiElement extends PolymerElement {
  static get is() {
    return 'bluetooth-pairing-ui';
  }

  static get template() {
    return getTemplate$2();
  }

  static get properties() {
    return {
      /**
       * The address, when set, of the specific device that will be attempted to
       * be paired with by the pairing dialog. If null, no specific device will
       * be paired with and the user will be allowed to select a device to pair
       * with. This is set when the dialog is opened if the purpose of the
       * dialog is to pair with a specific device.
       * @type {?string}
       */
      pairingDeviceAddress: {
        type: String,
        value: null,
      },

      /**
       * Flag indicating whether links should be displayed or not. In some
       * cases, such as the user being in OOBE or the login screen, links will
       * not work and should not be displayed.
       */
      shouldOmitLinks: {
        type: Boolean,
        value: false,
      },

      /**
       * Id of the currently selected Bluetooth pairing subpage.
       * @private {!BluetoothPairingSubpageId}
       */
      selectedPageId_: {
        type: String,
        value: BluetoothPairingSubpageId.DEVICE_SELECTION_PAGE,
        observer: 'onSelectedPageIdChanged_',
      },

      /**
       * @private {Array<!BluetoothDeviceProperties>}
       */
      discoveredDevices_: {
        type: Array,
        value: [],
      },

      /**
       * This can be null if no pairing attempt was started or a pairing attempt
       * was cancelled by user.
       * @private {?BluetoothDeviceProperties}
       */
      devicePendingPairing_: {
        type: Object,
        value: null,
      },

      /** @private {?PairingAuthType} */
      pairingAuthType_: {
        type: Object,
        value: null,
      },

      /** @private {string} */
      pairingCode_: {
        type: String,
        value: '',
      },

      /** @private {number} */
      numKeysEntered_: {
        type: Number,
        value: 0,
      },

      /**
       * Id of a device who's pairing attempt failed.
       * @private {string}
       */
      lastFailedPairingDeviceId_: {
        type: String,
        value: '',
      },

      /** @private {boolean} */
      isBluetoothEnabled_: {
        type: Boolean,
        value: false,
      },

      /**
       * Used to access |BluetoothPairingSubpageId| type in HTML.
       * @private {!BluetoothPairingSubpageId}
       */
      SubpageId: {
        type: Object,
        value: BluetoothPairingSubpageId,
      },
    };
  }

  constructor() {
    super();
    /**
     * @private {!SystemPropertiesObserverReceiver}
     */
    this.systemPropertiesObserverReceiver_ =
        new SystemPropertiesObserverReceiver(
            /**
             * @type {!SystemPropertiesObserverInterface}
             */
            (this));

    /**
     * @private {!BluetoothDiscoveryDelegateReceiver}
     */
    this.bluetoothDiscoveryDelegateReceiver_ =
        new BluetoothDiscoveryDelegateReceiver(this);

    /**
     * @private {?DevicePairingHandlerInterface}
     */
    this.devicePairingHandler_;

    /**
     * The device to be paired with after the current pairDevice_() request has
     * finished.
     * @private {?BluetoothDeviceProperties}
     */
    this.queuedDevicePendingPairing_;

    /**
     * The Mojo receiver of the current ongoing pairing. If null indicates no
     * pairing is occurring.
     * @private {?DevicePairingDelegateReceiver}
     */
    this.pairingDelegateReceiver_ = null;

    /** @private {?RequestCodeCallback} */
    this.requestCodeCallback_ = null;

    /** @private {?KeyEnteredHandler} */
    this.keyEnteredReceiver_ = null;

    /** @private {?ConfirmCodeCallback} */
    this.confirmCodeCallback_ = null;

    /** @private {?function()} */
    this.onBluetoothDiscoveryStartedCallbackForTest_ = null;

    /** @private {?function()} */
    this.handlePairDeviceResultCallbackForTest_ = null;
  }

  ready() {
    super.ready();

    // If there's a specific device to pair with, immediately go to the spinner
    // page.
    if (this.pairingDeviceAddress) {
      this.selectedPageId_ = BluetoothPairingSubpageId.SPINNER_PAGE;
    }
  }

  connectedCallback() {
    super.connectedCallback();

    getBluetoothConfig().observeSystemProperties(
        this.systemPropertiesObserverReceiver_.$.bindNewPipeAndPassRemote());
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    if (this.systemPropertiesObserverReceiver_) {
      this.systemPropertiesObserverReceiver_.$.close();
    }
    if (this.bluetoothDiscoveryDelegateReceiver_) {
      this.bluetoothDiscoveryDelegateReceiver_.$.close();
    }
    if (this.pairingDelegateReceiver_) {
      this.pairingDelegateReceiver_.$.close();
    }
    if (this.keyEnteredReceiver_) {
      this.keyEnteredReceiver_.close();
    }
  }

  /** @override */
  onPropertiesUpdated(properties) {
    const wasBluetoothEnabled = this.isBluetoothEnabled_;
    this.isBluetoothEnabled_ =
        properties.systemState === BluetoothSystemState.kEnabled;

    if (!wasBluetoothEnabled && this.isBluetoothEnabled_) {
      // If Bluetooth enables after being disabled, initialize the UI state.
      this.lastFailedPairingDeviceId_ = '';

      // Start discovery.
      getBluetoothConfig().startDiscovery(
          this.bluetoothDiscoveryDelegateReceiver_.$
              .bindNewPipeAndPassRemote());
    }
  }

  /** @override */
  onDiscoveredDevicesListChanged(discoveredDevices) {
    this.discoveredDevices_ = discoveredDevices;

    this.updateLastFailedPairingDeviceId_(discoveredDevices);

    // Check if this dialog needs to pair to a specific device.
    if (!this.pairingDeviceAddress) {
      return;
    }

    // Check if a pairing is already occurring.
    if (this.pairingDelegateReceiver_) {
      return;
    }

    // If |this.pairingDeviceAddress| exists and no ongoing pairing is
    // occurring, search for the device with address |this.pairingDeviceAddress|
    // and attempt to pair with it.
    this.attemptPairDeviceByAddress_();
  }

  /**
   * @param {Array<!BluetoothDeviceProperties>}
   *     devices
   * @private
   */
  updateLastFailedPairingDeviceId_(devices) {
    if (devices.some(device => device.id === this.lastFailedPairingDeviceId_)) {
      return;
    }

    this.lastFailedPairingDeviceId_ = '';
  }

  /** @override */
  onBluetoothDiscoveryStarted(handler) {
    this.devicePairingHandler_ = handler;

    // Inform tests that onBluetoothDiscoveryStarted() has been called. This is
    // to ensure tests don't progress until |devicePairingHandler_| has been
    // set.
    if (this.onBluetoothDiscoveryStartedCallbackForTest_) {
      this.onBluetoothDiscoveryStartedCallbackForTest_();
    }
  }

  /** @override */
  onBluetoothDiscoveryStopped() {
    // Discovery will stop if Bluetooth disables. Reset the UI back to the
    // selection page.
    this.bluetoothDiscoveryDelegateReceiver_.$.close();
    this.selectedPageId_ = BluetoothPairingSubpageId.DEVICE_SELECTION_PAGE;
    this.devicePairingHandler_ = null;
  }

  /**
   * Returns a promise that will be resolved the next time
   * onBluetoothDiscoveryStarted() is called.
   * @return {Promise}
   */
  waitForOnBluetoothDiscoveryStartedForTest() {
    return new Promise((resolve) => {
      this.onBluetoothDiscoveryStartedCallbackForTest_ = resolve;
    });
  }

  /**
   * Returns a promise that will be resolved the next time
   * handlePairDeviceResult_() is called.
   * @return {Promise}
   */
  waitForHandlePairDeviceResultForTest() {
    return new Promise((resolve) => {
      this.handlePairDeviceResultCallbackForTest_ = resolve;
    });
  }

  /**
   * @param {!CustomEvent<!{device:
   *     BluetoothDeviceProperties}>} event
   * @private
   */
  onPairDevice_(event) {
    if (!event.detail.device) {
      return;
    }
    // If a pairing operation is currently underway, close it and queue
    // the current device to be paired after pairDevice_() promise is
    // returned.
    if (this.pairingDelegateReceiver_) {
      this.queuedDevicePendingPairing_ = event.detail.device;
      this.pairingDelegateReceiver_.$.close();
      return;
    }
    this.pairDevice_(event.detail.device);
  }

  /**
   * Searches for the device with address |this.pairingDeviceAddress| in
   * |this.discoveredDevices| and attempts to pair with it.
   * @private
   */
  attemptPairDeviceByAddress_() {
    assert$1(this.pairingDeviceAddress);
    assert$1(!this.pairingDelegateReceiver_);

    if (!this.devicePairingHandler_) {
      console.error('Attempted pairing with no device pairing handler.');
      return;
    }

    this.devicePairingHandler_.fetchDevice(this.pairingDeviceAddress)
        .then(result => {
          if (!result.device) {
            console.warn(
                'Attempted pairing with a device that was not found, address: ' +
                this.pairingDeviceAddress);
            return;
          }

          this.pairDevice_(result.device);
        });
  }

  /**
   * @param {!BluetoothDeviceProperties} device
   * @private
   */
  pairDevice_(device) {
    assert$1(
        this.devicePairingHandler_, 'devicePairingHandler_ has not been set.');

    this.pairingDelegateReceiver_ = new DevicePairingDelegateReceiver(this);

    this.devicePendingPairing_ = device;
    assert$1(this.devicePendingPairing_);

    this.lastFailedPairingDeviceId_ = '';

    this.devicePairingHandler_
        .pairDevice(
            this.devicePendingPairing_.id,
            this.pairingDelegateReceiver_.$.bindNewPipeAndPassRemote())
        .then(result => {
          this.handlePairDeviceResult_(result.result);
        })
        .catch(() => {
          // Pairing failed due to external issues, such as Mojo pipe
          // disconnecting from Bluetooth disabling.
          this.handlePairDeviceResult_(PairingResult.kNonAuthFailure);
        });
  }

  /**
   * @param {!PairingResult} result
   * @private
   */
  handlePairDeviceResult_(result) {
    if (this.pairingDelegateReceiver_) {
      this.pairingDelegateReceiver_.$.close();
    }
    this.pairingAuthType_ = null;

    if (this.keyEnteredReceiver_) {
      this.keyEnteredReceiver_.close();
      this.keyEnteredReceiver_ = null;
    }

    this.pairingDelegateReceiver_ = null;

    if (result === PairingResult.kSuccess) {
      this.closeDialog_();
      return;
    }

    // If |pairingDeviceAddress| is defined, this was a device-specific pairing
    // request that has failed. Clear |pairingDeviceAddress| so that we don't
    // automatically attempt to re-pair with the same device again.
    this.pairingDeviceAddress = null;

    this.selectedPageId_ = BluetoothPairingSubpageId.DEVICE_SELECTION_PAGE;
    if (this.devicePendingPairing_) {
      this.lastFailedPairingDeviceId_ = this.devicePendingPairing_.id;
    }

    this.devicePendingPairing_ = null;

    if (this.queuedDevicePendingPairing_ && this.devicePairingHandler_) {
      this.pairDevice_(this.queuedDevicePendingPairing_);
    }

    this.queuedDevicePendingPairing_ = null;

    // Inform tests that handlePairDeviceResult_() has been called. This is
    // to ensure tests don't progress until the correct state has been
    // set.
    if (this.handlePairDeviceResultCallbackForTest_) {
      this.handlePairDeviceResultCallbackForTest_();
    }
  }

  /** @override */
  requestPinCode() {
    return this.requestCode_(PairingAuthType.REQUEST_PIN_CODE);
  }

  /** @override */
  requestPasskey() {
    return this.requestCode_(PairingAuthType.REQUEST_PASSKEY);
  }

  /**
   * @param {!PairingAuthType} authType
   * @return {!Promise<{pinCode: !string}> | !Promise<{passkey: !string}>}
   * @private
   */
  requestCode_(authType) {
    this.pairingAuthType_ = authType;
    this.selectedPageId_ = BluetoothPairingSubpageId.DEVICE_REQUEST_CODE_PAGE;
    this.requestCodeCallback_ = {
      reject: null,
      resolve: null,
    };

    const promise = new Promise((resolve, reject) => {
      this.requestCodeCallback_.resolve = (code) => {
        if (authType === PairingAuthType.REQUEST_PIN_CODE) {
          resolve({'pinCode': code});
          return;
        }

        if (authType === PairingAuthType.REQUEST_PASSKEY) {
          resolve({'passkey': code});
          return;
        }

        assertNotReached$1();
      };
      this.requestCodeCallback_.reject = reject;
    });

    return promise;
  }

  /**
   * @param {!CustomEvent<!{code: string}>} event
   * @private
   */
  onRequestCodeEntered_(event) {
    this.selectedPageId_ = BluetoothPairingSubpageId.SPINNER_PAGE;
    event.stopPropagation();
    assert$1(this.pairingAuthType_);
    assert$1(this.requestCodeCallback_.resolve);
    this.requestCodeCallback_.resolve(event.detail.code);
  }

  /** @override */
  displayPinCode(pinCode, handler) {
    this.displayCode_(handler, pinCode);
  }

  /** @override */
  displayPasskey(passkey, handler) {
    this.displayCode_(handler, passkey);
  }

  /**s
   * @param {!KeyEnteredHandlerPendingReceiver}
   *     handler
   * @param {string} code
   * @private
   */
  displayCode_(handler, code) {
    this.pairingCode_ = code;
    this.selectedPageId_ = BluetoothPairingSubpageId.DEVICE_ENTER_CODE_PAGE;
    this.keyEnteredReceiver_ = new KeyEnteredHandler(this, handler);
  }

  /**
   * @param {number} numKeysEntered
   */
  handleKeyEntered(numKeysEntered) {
    this.numKeysEntered_ = numKeysEntered;
  }

  /** @override */
  confirmPasskey(passkey) {
    this.pairingAuthType_ = PairingAuthType.CONFIRM_PASSKEY;
    this.selectedPageId_ = BluetoothPairingSubpageId.DEVICE_CONFIRM_CODE_PAGE;
    this.pairingCode_ = passkey;

    this.confirmCodeCallback_ = {
      resolve: null,
      reject: null,
    };

    return new Promise((resolve, reject) => {
      this.confirmCodeCallback_.resolve = () => {
        resolve({'confirmed': true});
      };
      this.confirmCodeCallback_.reject = reject;
    });
  }

  /**
   * @param {!Event} event
   * @private
   */
  onConfirmCode_(event) {
    this.selectedPageId_ = BluetoothPairingSubpageId.SPINNER_PAGE;
    event.stopPropagation();
    assert$1(this.pairingAuthType_);
    assert$1(this.confirmCodeCallback_);
    this.confirmCodeCallback_.resolve();
  }

  /** @override */
  authorizePairing() {
    // TODO(crbug.com/1010321): Implement this function.
  }

  /**
   * @param {!BluetoothPairingSubpageId} subpageId
   * @return {boolean}
   * @private
   */
  shouldShowSubpage_(subpageId) {
    return this.selectedPageId_ === subpageId;
  }

  /**
   * @param {!Event} event
   * @private
   */
  onCancelClick_(event) {
    event.stopPropagation();
    this.devicePendingPairing_ = null;
    if (this.pairingDelegateReceiver_) {
      this.pairingDelegateReceiver_.$.close();
      this.finishPendingCallbacksForTest_();
      return;
    }

    // If there is no receiver, this means pairing was not initiated and we
    // we are currently in DEVICE_SELECTION_PAGE or something went wrong and
    // |pairingDelegateReceiver_| was not instantiated. (b/218368694)
    this.closeDialog_();
  }

  /** @private */
  closeDialog_() {
    this.dispatchEvent(new CustomEvent('finished', {
      bubbles: true,
      composed: true,
    }));
  }

  /** @private */
  onSelectedPageIdChanged_() {
    // If the current page changes to the device selection page, focus the item
    // corresponding to the last device attempted to be paired with.
    if (this.selectedPageId_ !==
        BluetoothPairingSubpageId.DEVICE_SELECTION_PAGE) {
      return;
    }

    const deviceSelectionPage =
        this.shadowRoot.querySelector('#deviceSelectionPage');
    if (!deviceSelectionPage) {
      return;
    }

    deviceSelectionPage.attemptFocusLastSelectedItem();
  }

  /** @private */
  finishPendingCallbacksForTest_() {
    if (this.requestCodeCallback_) {
      // |requestCodeCallback_| promise is held by FakeDevicePairingHandler
      // in test. This does not get resolved for the test case where user
      // cancels request while in request code page. Calling reject is
      // necessary here to make sure the promise is resolved.
      this.requestCodeCallback_.reject();
    }

    if (this.confirmCodeCallback_) {
      // |confirmCodeCallback_| promise is held by FakeDevicePairingHandler
      // in test. This does not get resolved for the test case where user
      // cancels request while in request code page. Calling reject is
      // necessary here to make sure the promise is resolved.
      this.confirmCodeCallback_.reject();
    }
  }

  /**
   * @return {string}
   * @private
   */
  getDeviceName_() {
    if (!this.devicePendingPairing_) {
      return '';
    }
    return mojoString16ToString(this.devicePendingPairing_.publicName);
  }
}

customElements.define(
    SettingsBluetoothPairingUiElement.is, SettingsBluetoothPairingUiElement);

const styleMod = document.createElement('dom-module');
styleMod.appendChild(html `
  <template>
    <style>
:host{color:var(--cr-primary-text-color);line-height:154%;overflow:hidden;user-select:text}
    </style>
  </template>
`.content);
styleMod.register('cr-page-host-style');

function getTemplate$1() {
    return html `<!--_html_template_start_-->    <style>:host{--cr-icon-button-fill-color:var(--google-grey-700);--cr-icon-button-icon-start-offset:0;--cr-icon-button-icon-size:20px;--cr-icon-button-size:36px;--cr-icon-button-height:var(--cr-icon-button-size);--cr-icon-button-transition:150ms ease-in-out;--cr-icon-button-width:var(--cr-icon-button-size);-webkit-tap-highlight-color:transparent;border-radius:50%;color:var(--cr-icon-button-stroke-color,var(--cr-icon-button-fill-color));cursor:pointer;display:inline-flex;flex-shrink:0;height:var(--cr-icon-button-height);margin-inline-end:var(--cr-icon-button-margin-end,var(--cr-icon-ripple-margin));margin-inline-start:var(--cr-icon-button-margin-start);outline:0;overflow:hidden;user-select:none;vertical-align:middle;width:var(--cr-icon-button-width)}:host-context([chrome-refresh-2023]):host{--cr-icon-button-fill-color:currentColor;--cr-icon-button-size:32px;position:relative}:host(:hover){background-color:var(--cr-icon-button-hover-background-color,var(--cr-hover-background-color))}:host(:focus-visible:focus){box-shadow:inset 0 0 0 2px var(--cr-icon-button-focus-outline-color,var(--cr-focus-outline-color))}@media (forced-colors:active){:host(:focus-visible:focus){outline:var(--cr-focus-outline-hcm)}}:host-context(html:not([chrome-refresh-2023])) :host(:active){background-color:var(--cr-icon-button-active-background-color,var(--cr-active-background-color))}paper-ripple{display:none}:host-context([chrome-refresh-2023]) paper-ripple{--paper-ripple-opacity:1;color:var(--cr-active-background-color);display:block}:host([disabled]){cursor:initial;opacity:var(--cr-disabled-opacity);pointer-events:none}:host(.no-overlap){--cr-icon-button-margin-end:0;--cr-icon-button-margin-start:0}:host-context([dir=rtl]):host(:not([dir=ltr]):not([multiple-icons_])){transform:scaleX(-1)}:host-context([dir=rtl]):host(:not([dir=ltr])[multiple-icons_]) iron-icon{transform:scaleX(-1)}:host(:not([iron-icon])) #maskedImage{-webkit-mask-image:var(--cr-icon-image);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--cr-icon-button-icon-size);-webkit-transform:var(--cr-icon-image-transform,none);background-color:var(--cr-icon-button-fill-color);height:100%;transition:background-color var(--cr-icon-button-transition);width:100%}@media (forced-colors:active){:host(:not([iron-icon])) #maskedImage{background-color:ButtonText}}#icon{align-items:center;border-radius:4px;display:flex;height:100%;justify-content:center;padding-inline-start:var(--cr-icon-button-icon-start-offset);position:relative;width:100%}iron-icon{--iron-icon-fill-color:var(--cr-icon-button-fill-color);--iron-icon-stroke-color:var(--cr-icon-button-stroke-color, none);--iron-icon-height:var(--cr-icon-button-icon-size);--iron-icon-width:var(--cr-icon-button-icon-size);transition:fill var(--cr-icon-button-transition),stroke var(--cr-icon-button-transition)}@media (prefers-color-scheme:dark){:host{--cr-icon-button-fill-color:var(--google-grey-500)}}</style>
    <div id="icon">
      <div id="maskedImage"></div>
    </div>
<!--_html_template_end_-->`;
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'cr-icon-button' is a button which displays an icon with a
 * ripple. It can be interacted with like a normal button using click as well as
 * space and enter to effectively click the button and fire a 'click' event.
 *
 * There are two sources to icons, cr-icons and iron-iconset-svg. The cr-icon's
 * are defined as background images with a reference to a resource file
 * associated with a CSS class name. The iron-icon's are defined as inline SVG's
 * under a key that is stored in a global map that is accessible to the
 * iron-icon element.
 *
 * Example of using a cr-icon:
 * <link rel="import" href="chrome://resources/cr_elements/cr_icons.css.html">
 * <dom-module id="module">
 *   <template>
 *     <style includes="cr-icons"></style>
 *     <cr-icon-button class="icon-class-name"></cr-icon-button>
 *   </template>
 * </dom-module>
 *
 * In general when an icon is specified using a class, the expectation is the
 * class will set an image to the --cr-icon-image variable.
 *
 * Example of using an iron-icon:
 * In the TS file:
 * import 'chrome://resources/cr_elements/icons.html.js';
 *
 * In the HTML template file:
 * <cr-icon-button iron-icon="cr:icon-key"></cr-icon-button>
 *
 * The color of the icon can be overridden using CSS variables. When using
 * iron-icon both the fill and stroke can be overridden the variables:
 * --cr-icon-button-fill-color
 * --cr-icon-button-stroke-color
 *
 * When not using iron-icon (ie. specifying --cr-icon-image), the icons support
 * one color and the 'stroke' variables are ignored.
 *
 * When using iron-icon's, more than one icon can be specified by setting
 * the |ironIcon| property to a comma-delimited list of keys.
 */
const CrIconbuttonElementBase = mixinBehaviors([PaperRippleBehavior], PolymerElement);
class CrIconButtonElement extends CrIconbuttonElementBase {
    static get is() {
        return 'cr-icon-button';
    }
    static get template() {
        return getTemplate$1();
    }
    static get properties() {
        return {
            disabled: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
                observer: 'disabledChanged_',
            },
            /**
             * Use this property in order to configure the "tabindex" attribute.
             */
            customTabIndex: {
                type: Number,
                observer: 'applyTabIndex_',
            },
            ironIcon: {
                type: String,
                observer: 'onIronIconChanged_',
                reflectToAttribute: true,
            },
            multipleIcons_: {
                type: Boolean,
                reflectToAttribute: true,
            },
        };
    }
    constructor() {
        super();
        /**
         * It is possible to activate a tab when the space key is pressed down. When
         * this element has focus, the keyup event for the space key should not
         * perform a 'click'. |spaceKeyDown_| tracks when a space pressed and
         * handled by this element. Space keyup will only result in a 'click' when
         * |spaceKeyDown_| is true. |spaceKeyDown_| is set to false when element
         * loses focus.
         */
        this.spaceKeyDown_ = false;
        this.addEventListener('blur', this.onBlur_.bind(this));
        this.addEventListener('click', this.onClick_.bind(this));
        this.addEventListener('keydown', this.onKeyDown_.bind(this));
        this.addEventListener('keyup', this.onKeyUp_.bind(this));
        if (document.documentElement.hasAttribute('chrome-refresh-2023')) {
            this.addEventListener('pointerdown', this.onPointerDown_.bind(this));
        }
    }
    ready() {
        super.ready();
        this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
        if (!this.hasAttribute('role')) {
            this.setAttribute('role', 'button');
        }
        if (!this.hasAttribute('tabindex')) {
            this.setAttribute('tabindex', '0');
        }
    }
    toggleClass(className) {
        this.classList.toggle(className);
    }
    disabledChanged_(newValue, oldValue) {
        if (!newValue && oldValue === undefined) {
            return;
        }
        if (this.disabled) {
            this.blur();
        }
        this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
        this.applyTabIndex_();
    }
    /**
     * Updates the tabindex HTML attribute to the actual value.
     */
    applyTabIndex_() {
        let value = this.customTabIndex;
        if (value === undefined) {
            value = this.disabled ? -1 : 0;
        }
        this.setAttribute('tabindex', value.toString());
    }
    onBlur_() {
        this.spaceKeyDown_ = false;
    }
    onClick_(e) {
        if (this.disabled) {
            e.stopImmediatePropagation();
        }
    }
    onIronIconChanged_() {
        this.shadowRoot.querySelectorAll('iron-icon').forEach(el => el.remove());
        if (!this.ironIcon) {
            return;
        }
        const icons = (this.ironIcon || '').split(',');
        this.multipleIcons_ = icons.length > 1;
        icons.forEach(icon => {
            const ironIcon = document.createElement('iron-icon');
            ironIcon.icon = icon;
            this.$.icon.appendChild(ironIcon);
            if (ironIcon.shadowRoot) {
                ironIcon.shadowRoot.querySelectorAll('svg, img')
                    .forEach(child => child.setAttribute('role', 'none'));
            }
        });
    }
    onKeyDown_(e) {
        if (e.key !== ' ' && e.key !== 'Enter') {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        if (e.repeat) {
            return;
        }
        if (e.key === 'Enter') {
            this.click();
        }
        else if (e.key === ' ') {
            this.spaceKeyDown_ = true;
        }
    }
    onKeyUp_(e) {
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            e.stopPropagation();
        }
        if (this.spaceKeyDown_ && e.key === ' ') {
            this.spaceKeyDown_ = false;
            this.click();
        }
    }
    onPointerDown_() {
        this.ensureRipple();
    }
}
customElements.define(CrIconButtonElement.is, CrIconButtonElement);

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview CrContainerShadowMixin holds logic for showing a drop shadow
 * near the top of a container element, when the content has scrolled.
 *
 * Elements using this mixin are expected to define a #container element,
 * which is the element being scrolled. If the #container element has a
 * show-bottom-shadow attribute, a drop shadow will also be shown near the
 * bottom of the container element, when there is additional content to scroll
 * to. Examples:
 *
 * For both top and bottom shadows:
 * <div id="container" show-bottom-shadow>...</div>
 *
 * For top shadow only:
 * <div id="container">...</div>
 *
 * The mixin will take care of inserting an element with ID
 * 'cr-container-shadow-top' which holds the drop shadow effect, and,
 * optionally, an element with ID 'cr-container-shadow-bottom' which holds the
 * same effect. A 'has-shadow' CSS class is automatically added to/removed from
 * both elements while scrolling, as necessary. Note that the show-bottom-shadow
 * attribute is inspected only during attached(), and any changes to it that
 * occur after that point will not be respected.
 *
 * Clients should either use the existing shared styling in
 * cr_shared_style.css, '#cr-container-shadow-[top/bottom]' and
 * '#cr-container-shadow-[top/bottom].has-shadow', or define their own styles.
 */
var CrContainerShadowSide;
(function (CrContainerShadowSide) {
    CrContainerShadowSide["TOP"] = "top";
    CrContainerShadowSide["BOTTOM"] = "bottom";
})(CrContainerShadowSide || (CrContainerShadowSide = {}));
const CrContainerShadowMixin = dedupingMixin((superClass) => {
    class CrContainerShadowMixin extends superClass {
        constructor() {
            super(...arguments);
            this.intersectionObserver_ = null;
            this.dropShadows_ = new Map();
            this.intersectionProbes_ = new Map();
            this.sides_ = null;
        }
        connectedCallback() {
            super.connectedCallback();
            const hasBottomShadow = this.getContainer_().hasAttribute('show-bottom-shadow');
            this.sides_ = hasBottomShadow ?
                [CrContainerShadowSide.TOP, CrContainerShadowSide.BOTTOM] :
                [CrContainerShadowSide.TOP];
            this.sides_.forEach(side => {
                // The element holding the drop shadow effect to be shown.
                const shadow = document.createElement('div');
                shadow.id = `cr-container-shadow-${side}`;
                shadow.classList.add('cr-container-shadow');
                this.dropShadows_.set(side, shadow);
                this.intersectionProbes_.set(side, document.createElement('div'));
            });
            this.getContainer_().parentNode.insertBefore(this.dropShadows_.get(CrContainerShadowSide.TOP), this.getContainer_());
            this.getContainer_().prepend(this.intersectionProbes_.get(CrContainerShadowSide.TOP));
            if (hasBottomShadow) {
                this.getContainer_().parentNode.insertBefore(this.dropShadows_.get(CrContainerShadowSide.BOTTOM), this.getContainer_().nextSibling);
                this.getContainer_().append(this.intersectionProbes_.get(CrContainerShadowSide.BOTTOM));
            }
            this.enableShadowBehavior(true);
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            this.enableShadowBehavior(false);
        }
        getContainer_() {
            return this.shadowRoot.querySelector('#container');
        }
        getIntersectionObserver_() {
            const callback = (entries) => {
                // In some rare cases, there could be more than one entry per
                // observed element, in which case the last entry's result
                // stands.
                for (const entry of entries) {
                    const target = entry.target;
                    this.sides_.forEach(side => {
                        if (target === this.intersectionProbes_.get(side)) {
                            this.dropShadows_.get(side).classList.toggle('has-shadow', entry.intersectionRatio === 0);
                        }
                    });
                }
            };
            return new IntersectionObserver(callback, { root: this.getContainer_(), threshold: 0 });
        }
        /**
         * @param enable Whether to enable the mixin or disable it.
         *     This function does nothing if the mixin is already in the
         *     requested state.
         */
        enableShadowBehavior(enable) {
            // Behavior is already enabled/disabled. Return early.
            if (enable === !!this.intersectionObserver_) {
                return;
            }
            if (!enable) {
                this.intersectionObserver_.disconnect();
                this.intersectionObserver_ = null;
                return;
            }
            this.intersectionObserver_ = this.getIntersectionObserver_();
            // Need to register the observer within a setTimeout() callback,
            // otherwise the drop shadow flashes once on startup, because of the
            // DOM modifications earlier in this function causing a relayout.
            window.setTimeout(() => {
                if (this.intersectionObserver_) {
                    // In case this is already detached.
                    this.intersectionProbes_.forEach(probe => {
                        this.intersectionObserver_.observe(probe);
                    });
                }
            });
        }
        /**
         * Shows the shadows. The shadow mixin must be disabled before
         * calling this method, otherwise the intersection observer might
         * show the shadows again.
         */
        showDropShadows() {
            assert(!this.intersectionObserver_);
            assert(this.sides_);
            for (const side of this.sides_) {
                this.dropShadows_.get(side).classList.toggle('has-shadow', true);
            }
        }
    }
    return CrContainerShadowMixin;
});

function getTemplate() {
    return html `<!--_html_template_start_-->    <style include="cr-hidden-style cr-icons">dialog{--scroll-border-color:var(--paper-grey-300);--scroll-border:1px solid var(--scroll-border-color);background-color:var(--cr-dialog-background-color,#fff);border:0;border-radius:var(--cr-dialog-border-radius,8px);bottom:50%;box-shadow:0 0 16px rgba(0,0,0,.12),0 16px 16px rgba(0,0,0,.24);color:inherit;max-height:initial;max-width:initial;overflow-y:hidden;padding:0;position:absolute;top:50%;width:var(--cr-dialog-width,512px)}@media (prefers-color-scheme:dark){dialog{--scroll-border-color:var(--google-grey-700);background-color:var(--cr-dialog-background-color,var(--google-grey-900));background-image:linear-gradient(rgba(255,255,255,.04),rgba(255,255,255,.04))}}@media (forced-colors:active){dialog{border:var(--cr-border-hcm)}}dialog[open] #content-wrapper{display:flex;flex-direction:column;max-height:100vh;overflow:auto}.top-container,:host ::slotted([slot=button-container]),:host ::slotted([slot=footer]){flex-shrink:0}dialog::backdrop{background-color:rgba(0,0,0,.6);bottom:0;left:0;position:fixed;right:0;top:0}:host ::slotted([slot=body]){color:var(--cr-secondary-text-color);padding:0 var(--cr-dialog-body-padding-horizontal,20px)}:host ::slotted([slot=title]){color:var(--cr-primary-text-color);flex:1;font-family:var(--cr-dialog-font-family,inherit);font-size:var(--cr-dialog-title-font-size,calc(15 / 13 * 100%));line-height:1;padding-bottom:var(--cr-dialog-title-slot-padding-bottom,16px);padding-inline-end:var(--cr-dialog-title-slot-padding-end,20px);padding-inline-start:var(--cr-dialog-title-slot-padding-start,20px);padding-top:var(--cr-dialog-title-slot-padding-top,20px)}:host ::slotted([slot=button-container]){display:flex;justify-content:flex-end;padding-bottom:var(--cr-dialog-button-container-padding-bottom,16px);padding-inline-end:var(--cr-dialog-button-container-padding-horizontal,16px);padding-inline-start:var(--cr-dialog-button-container-padding-horizontal,16px);padding-top:var(--cr-dialog-button-container-padding-top,16px)}:host ::slotted([slot=footer]){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;border-top:1px solid #dbdbdb;margin:0;padding:16px 20px}:host([hide-backdrop]) dialog::backdrop{opacity:0}@media (prefers-color-scheme:dark){:host ::slotted([slot=footer]){border-top-color:var(--cr-separator-color)}}.body-container{box-sizing:border-box;display:flex;flex-direction:column;min-height:1.375rem;overflow:auto}:host{--transparent-border:1px solid transparent}#cr-container-shadow-top{border-bottom:var(--cr-dialog-body-border-top,var(--transparent-border))}#cr-container-shadow-bottom{border-bottom:var(--cr-dialog-body-border-bottom,var(--transparent-border))}#cr-container-shadow-bottom.has-shadow,#cr-container-shadow-top.has-shadow{border-bottom:var(--scroll-border)}.top-container{align-items:flex-start;display:flex;min-height:var(--cr-dialog-top-container-min-height,31px)}.title-container{display:flex;flex:1;font-size:inherit;font-weight:inherit;margin:0;outline:0}#close{align-self:flex-start;margin-inline-end:4px;margin-top:4px}</style>
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
<!--_html_template_end_-->`;
}

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'cr-dialog' is a component for showing a modal dialog. If the
 * dialog is closed via close(), a 'close' event is fired. If the dialog is
 * canceled via cancel(), a 'cancel' event is fired followed by a 'close' event.
 *
 * Additionally clients can get a reference to the internal native <dialog> via
 * calling getNative() and inspecting the |returnValue| property inside
 * the 'close' event listener to determine whether it was canceled or just
 * closed, where a truthy value means success, and a falsy value means it was
 * canceled.
 *
 * Note that <cr-dialog> wrapper itself always has 0x0 dimensions, and
 * specifying width/height on <cr-dialog> directly will have no effect on the
 * internal native <dialog>. Instead use cr-dialog::part(dialog) to specify
 * width/height (as well as other available mixins to style other parts of the
 * dialog contents).
 */
const CrDialogElementBase = CrContainerShadowMixin(PolymerElement);
class CrDialogElement extends CrDialogElementBase {
    constructor() {
        super(...arguments);
        this.intersectionObserver_ = null;
        this.mutationObserver_ = null;
        this.boundKeydown_ = null;
    }
    static get is() {
        return 'cr-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            open: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            /**
             * Alt-text for the dialog close button.
             */
            closeText: String,
            /**
             * True if the dialog should remain open on 'popstate' events. This is
             * used for navigable dialogs that have their separate navigation handling
             * code.
             */
            ignorePopstate: {
                type: Boolean,
                value: false,
            },
            /**
             * True if the dialog should ignore 'Enter' keypresses.
             */
            ignoreEnterKey: {
                type: Boolean,
                value: false,
            },
            /**
             * True if the dialog should consume 'keydown' events. If ignoreEnterKey
             * is true, 'Enter' key won't be consumed.
             */
            consumeKeydownEvent: {
                type: Boolean,
                value: false,
            },
            /**
             * True if the dialog should not be able to be cancelled, which will
             * prevent 'Escape' key presses from closing the dialog.
             */
            noCancel: {
                type: Boolean,
                value: false,
            },
            // True if dialog should show the 'X' close button.
            showCloseButton: {
                type: Boolean,
                value: false,
            },
            showOnAttach: {
                type: Boolean,
                value: false,
            },
        };
    }
    ready() {
        super.ready();
        // If the active history entry changes (i.e. user clicks back button),
        // all open dialogs should be cancelled.
        window.addEventListener('popstate', () => {
            if (!this.ignorePopstate && this.$.dialog.open) {
                this.cancel();
            }
        });
        if (!this.ignoreEnterKey) {
            this.addEventListener('keypress', this.onKeypress_.bind(this));
        }
        this.addEventListener('pointerdown', e => this.onPointerdown_(e));
    }
    connectedCallback() {
        super.connectedCallback();
        const mutationObserverCallback = () => {
            if (this.$.dialog.open) {
                this.enableShadowBehavior(true);
                this.addKeydownListener_();
            }
            else {
                this.enableShadowBehavior(false);
                this.removeKeydownListener_();
            }
        };
        this.mutationObserver_ = new MutationObserver(mutationObserverCallback);
        this.mutationObserver_.observe(this.$.dialog, {
            attributes: true,
            attributeFilter: ['open'],
        });
        // In some cases dialog already has the 'open' attribute by this point.
        mutationObserverCallback();
        if (this.showOnAttach) {
            this.showModal();
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeKeydownListener_();
        if (this.mutationObserver_) {
            this.mutationObserver_.disconnect();
            this.mutationObserver_ = null;
        }
    }
    addKeydownListener_() {
        if (!this.consumeKeydownEvent) {
            return;
        }
        this.boundKeydown_ = this.boundKeydown_ || this.onKeydown_.bind(this);
        this.addEventListener('keydown', this.boundKeydown_);
        // Sometimes <body> is key event's target and in that case the event
        // will bypass cr-dialog. We should consume those events too in order to
        // behave modally. This prevents accidentally triggering keyboard commands.
        document.body.addEventListener('keydown', this.boundKeydown_);
    }
    removeKeydownListener_() {
        if (!this.boundKeydown_) {
            return;
        }
        this.removeEventListener('keydown', this.boundKeydown_);
        document.body.removeEventListener('keydown', this.boundKeydown_);
        this.boundKeydown_ = null;
    }
    showModal() {
        this.$.dialog.showModal();
        assert(this.$.dialog.open);
        this.open = true;
        this.dispatchEvent(new CustomEvent('cr-dialog-open', { bubbles: true, composed: true }));
    }
    cancel() {
        this.dispatchEvent(new CustomEvent('cancel', { bubbles: true, composed: true }));
        this.$.dialog.close();
        assert(!this.$.dialog.open);
        this.open = false;
    }
    close() {
        this.$.dialog.close('success');
        assert(!this.$.dialog.open);
        this.open = false;
    }
    /**
     * Set the title of the dialog for a11y reader.
     * @param title Title of the dialog.
     */
    setTitleAriaLabel(title) {
        this.$.dialog.removeAttribute('aria-labelledby');
        this.$.dialog.setAttribute('aria-label', title);
    }
    onCloseKeypress_(e) {
        // Because the dialog may have a default Enter key handler, prevent
        // keypress events from bubbling up from this element.
        e.stopPropagation();
    }
    onNativeDialogClose_(e) {
        // Ignore any 'close' events not fired directly by the <dialog> element.
        if (e.target !== this.getNative()) {
            return;
        }
        // Catch and re-fire the 'close' event such that it bubbles across Shadow
        // DOM v1.
        this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
    }
    onNativeDialogCancel_(e) {
        // Ignore any 'cancel' events not fired directly by the <dialog> element.
        if (e.target !== this.getNative()) {
            return;
        }
        if (this.noCancel) {
            e.preventDefault();
            return;
        }
        // When the dialog is dismissed using the 'Esc' key, need to manually update
        // the |open| property (since close() is not called).
        this.open = false;
        // Catch and re-fire the native 'cancel' event such that it bubbles across
        // Shadow DOM v1.
        this.dispatchEvent(new CustomEvent('cancel', { bubbles: true, composed: true }));
    }
    /**
     * Expose the inner native <dialog> for some rare cases where it needs to be
     * directly accessed (for example to programmatically setheight/width, which
     * would not work on the wrapper).
     */
    getNative() {
        return this.$.dialog;
    }
    onKeypress_(e) {
        if (e.key !== 'Enter') {
            return;
        }
        // Accept Enter keys from either the dialog itself, or a child cr-input,
        // considering that the event may have been retargeted, for example if the
        // cr-input is nested inside another element. Also exclude inputs of type
        // 'search', since hitting 'Enter' on a search field most likely intends to
        // trigger searching.
        const accept = e.target === this ||
            e.composedPath().some(el => el.tagName === 'CR-INPUT' &&
                el.type !== 'search');
        if (!accept) {
            return;
        }
        const actionButton = this.querySelector('.action-button:not([disabled]):not([hidden])');
        if (actionButton) {
            actionButton.click();
            e.preventDefault();
        }
    }
    onKeydown_(e) {
        assert(this.consumeKeydownEvent);
        if (!this.getNative().open) {
            return;
        }
        if (this.ignoreEnterKey && e.key === 'Enter') {
            return;
        }
        // Stop propagation to behave modally.
        e.stopPropagation();
    }
    onPointerdown_(e) {
        // Only show pulse animation if user left-clicked outside of the dialog
        // contents.
        if (e.button !== 0 ||
            e.composedPath()[0].tagName !== 'DIALOG') {
            return;
        }
        this.$.dialog.animate([
            { transform: 'scale(1)', offset: 0 },
            { transform: 'scale(1.02)', offset: 0.4 },
            { transform: 'scale(1.02)', offset: 0.6 },
            { transform: 'scale(1)', offset: 1 },
        ], {
            duration: 180,
            easing: 'ease-in-out',
            iterations: 1,
        });
        // Prevent any text from being selected within the dialog when clicking in
        // the backdrop area.
        e.preventDefault();
    }
    focus() {
        const titleContainer = this.shadowRoot.querySelector('.title-container');
        assert(titleContainer);
        titleContainer.focus();
    }
}
customElements.define(CrDialogElement.is, CrDialogElement);

// ui/webui/resources/cr_components/color_change_listener/color_change_listener.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class PageHandlerPendingReceiver {
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'color_change_listener.mojom.PageHandler', scope);
    }
}
class PageHandlerRemote {
    constructor(handle) {
        this.proxy =
            new mojo.internal.interfaceSupport.InterfaceRemoteBase(PageHandlerPendingReceiver, handle);
        this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);
        this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
    }
    setPage(page) {
        this.proxy.sendMessage(0, PageHandler_SetPage_ParamsSpec.$, null, [
            page
        ]);
    }
}
class PageHandler {
    static get $interfaceName() {
        return "color_change_listener.mojom.PageHandler";
    }
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote() {
        let remote = new PageHandlerRemote;
        remote.$.bindNewPipeAndPassReceiver().bindInBrowser();
        return remote;
    }
}
class PagePendingReceiver {
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'color_change_listener.mojom.Page', scope);
    }
}
class PageRemote {
    constructor(handle) {
        this.proxy =
            new mojo.internal.interfaceSupport.InterfaceRemoteBase(PagePendingReceiver, handle);
        this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);
        this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
    }
    onColorProviderChanged() {
        this.proxy.sendMessage(0, Page_OnColorProviderChanged_ParamsSpec.$, null, []);
    }
}
/**
 * An object which receives request messages for the Page
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
class PageCallbackRouter {
    constructor() {
        this.helper_internal_ = new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(PageRemote);
        this.$ = new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);
        this.router_ = new mojo.internal.interfaceSupport.CallbackRouter;
        this.onColorProviderChanged =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(0, Page_OnColorProviderChanged_ParamsSpec.$, null, this.onColorProviderChanged.createReceiverHandler(false /* expectsResponse */));
        this.onConnectionError = this.helper_internal_.getConnectionErrorEventRouter();
    }
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id) {
        return this.router_.removeListener(id);
    }
}
const PageHandler_SetPage_ParamsSpec = { $: {} };
const Page_OnColorProviderChanged_ParamsSpec = { $: {} };
mojo.internal.Struct(PageHandler_SetPage_ParamsSpec.$, 'PageHandler_SetPage_Params', [
    mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(PageRemote), null, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(Page_OnColorProviderChanged_ParamsSpec.$, 'Page_OnColorProviderChanged_Params', [], [[0, 8],]);

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview This file provides a singleton class that exposes the Mojo
 * handler interface used for one way communication between the JS and the
 * browser.
 * TODO(tluk): Convert this into typescript once all dependencies have been
 * fully migrated.
 */
let instance = null;
class BrowserProxy {
    constructor() {
        this.callbackRouter = new PageCallbackRouter();
        const pageHandlerRemote = PageHandler.getRemote();
        pageHandlerRemote.setPage(this.callbackRouter.$.bindNewPipeAndPassRemote());
    }
    static getInstance() {
        return instance || (instance = new BrowserProxy());
    }
    static setInstance(newInstance) {
        instance = newInstance;
    }
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview This file holds the functions that allow WebUI to update its
 * colors CSS stylesheet when a ColorProvider change in the browser is detected.
 */
/**
 * The CSS selector used to get the <link> node with the colors.css stylesheet.
 * The wildcard is needed since the URL ends with a timestamp.
 */
const COLORS_CSS_SELECTOR = 'link[href*=\'//theme/colors.css\']';
let documentInstance = null;
// 
// Event fired after updated colors have been fetched and applied.
const COLOR_PROVIDER_CHANGED = 'color-provider-changed';
// 
class ColorChangeUpdater {
    // 
    constructor(root) {
        this.listenerId_ = null;
        // 
        this.eventTarget = new EventTarget();
        assert(documentInstance === null || root !== document);
        this.root_ = root;
    }
    /**
     * Starts listening for ColorProvider changes from the browser and updates the
     * `root_` whenever changes occur.
     */
    start() {
        if (this.listenerId_ !== null) {
            return;
        }
        this.listenerId_ = BrowserProxy.getInstance()
            .callbackRouter.onColorProviderChanged.addListener(this.onColorProviderChanged.bind(this));
    }
    // TODO(dpapad): Figure out how to properly trigger
    // `callbackRouter.onColorProviderChanged` listeners from tests and make this
    // method private.
    async onColorProviderChanged() {
        await this.refreshColorsCss();
        // 
        this.eventTarget.dispatchEvent(new CustomEvent(COLOR_PROVIDER_CHANGED));
        // 
    }
    /**
     * Forces `root_` to refresh its colors.css stylesheet. This is used to
     * fetch an updated stylesheet when the ColorProvider associated with the
     * WebUI has changed.
     * @return A promise which resolves to true once the new colors are loaded and
     *     installed into the DOM. In the case of an error returns false. When a
     *     new colors.css is loaded, this will always freshly query the existing
     *     colors.css, allowing multiple calls to successfully remove existing,
     *     outdated CSS.
     */
    async refreshColorsCss() {
        const colorCssNode = this.root_.querySelector(COLORS_CSS_SELECTOR);
        if (!colorCssNode) {
            return false;
        }
        const href = colorCssNode.getAttribute('href');
        if (!href) {
            return false;
        }
        const hrefURL = new URL(href, location.href);
        const params = new URLSearchParams(hrefURL.search);
        params.set('version', new Date().getTime().toString());
        const newHref = `${hrefURL.origin}${hrefURL.pathname}?${params.toString()}`;
        // A flickering effect may take place when setting the href property of
        // the existing color css node with a new value. In order to avoid
        // flickering, we create a new link element and once it is loaded we
        // remove the old one. See crbug.com/1365320 for additional details.
        const newColorsCssLink = document.createElement('link');
        newColorsCssLink.setAttribute('href', newHref);
        newColorsCssLink.rel = 'stylesheet';
        newColorsCssLink.type = 'text/css';
        const newColorsLoaded = new Promise(resolve => {
            newColorsCssLink.onload = resolve;
        });
        if (this.root_ === document) {
            document.getElementsByTagName('body')[0].appendChild(newColorsCssLink);
        }
        else {
            this.root_.appendChild(newColorsCssLink);
        }
        await newColorsLoaded;
        const oldColorCssNode = document.querySelector(COLORS_CSS_SELECTOR);
        if (oldColorCssNode) {
            oldColorCssNode.remove();
        }
        return true;
    }
    static forDocument() {
        return documentInstance ||
            (documentInstance = new ColorChangeUpdater(document));
    }
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


/**
 * @fileoverview
 * 'bluetooth-dialog-host' is used to host a <bluetooth-pairing-ui> element to
 * manage bluetooth pairing. The dialog arguments are provided in the
 * chrome 'dialogArguments' variable.
 */

Polymer({
  is: 'bluetooth-pairing-dialog',

  _template: html`<!--_html_template_start_-->
<style include="cr-page-host-style cr-shared-style cros-color-overrides">
  #dialog {
    --cr-dialog-top-container-min-height: 0;
  }

  div[slot="body"] {
    height: 426px;
  }
</style>
<cr-dialog id="dialog" show-on-attach>
  <div slot="body">
    <bluetooth-pairing-ui on-finished="closeDialog_"
        pairing-device-address="[[deviceAddress_]]"
        should-omit-links="[[shouldOmitLinks_]]">
    </bluetooth-pairing-ui>
  </div>
</cr-dialog><!--_html_template_end_-->`,

  behaviors: [I18nBehavior],

  properties: {
    /**
     * Current Pairing device.
     * @type {!chrome.bluetooth.Device|undefined}
     * @private
     */
    pairingDevice_: Object,

    /**
     * The address, when set, of the specific device that will be attempted to
     * be paired with by the pairing dialog. If null, no specific device will be
     * paired with and the user will be allowed to select a device to pair with.
     * @private {?string}
     */
    deviceAddress_: {
      type: String,
      value: null,
    },

    /**
     * Flag indicating whether links should be displayed or not. In some
     * cases, such as the user being in OOBE or the login screen, links will
     * not work and should not be displayed.
     */
    shouldOmitLinks_: {
      type: Boolean,
      value: false,
    },

    /**
     * Whether the Jelly feature flag is enabled.
     * @private
     */
    isJellyEnabled_: {
      type: Boolean,
      readOnly: true,
      value() {
        return loadTimeData.valueExists('isJellyEnabled') &&
            loadTimeData.getBoolean('isJellyEnabled');
      },
    },
  },

  /** @override */
  attached() {
    if (this.isJellyEnabled_) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'chrome://theme/colors.css?sets=legacy,sys';
      document.head.appendChild(link);
      document.body.classList.add('jelly-enabled');
      /** @suppress {checkTypes} */
      (function() {
        ColorChangeUpdater.forDocument().start();
      })();
    }

    const dialogArgs = chrome.getVariableValue('dialogArguments');
    if (!dialogArgs) {
      return;
    }

    const parsedDialogArgs = JSON.parse(dialogArgs);
    if (!parsedDialogArgs) {
      return;
    }

    this.deviceAddress_ = parsedDialogArgs.address;
    this.shouldOmitLinks_ = !!parsedDialogArgs.shouldOmitLinks;
  },

  /** @private */
  closeDialog_() {
    chrome.send('dialogClose');
  },
});
//# sourceMappingURL=bluetooth_pairing_dialog.rollup.js.map
