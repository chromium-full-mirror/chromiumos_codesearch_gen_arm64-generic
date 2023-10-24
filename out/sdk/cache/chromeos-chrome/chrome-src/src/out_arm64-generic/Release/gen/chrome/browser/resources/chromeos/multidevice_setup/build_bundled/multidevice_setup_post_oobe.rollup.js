import { html, Polymer, dom, mixinBehaviors, PolymerElement, Base, useShadow, dashToCamelCase } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import './strings.m.js';
import { loadTimeData } from 'chrome://resources/ash/common/load_time_data.m.js';
import { MultiDeviceSetup } from 'chrome://resources/mojo/chromeos/ash/services/multidevice_setup/public/mojom/multidevice_setup.mojom-webui.js';
import { sendWithPromise as sendWithPromise$1, addWebUiListener, removeWebUiListener } from 'chrome://resources/js/cr.js';
import { LitElement, css, html as html$1 } from 'chrome://resources/mwc/lit/index.js';
import { mojo } from 'chrome://resources/mojo/mojo/public/js/bindings.js';
import { ConnectivityStatus } from 'chrome://resources/mojo/chromeos/ash/services/device_sync/public/mojom/device_sync.mojom-webui.js';
import { loadTimeData as loadTimeData$1 } from 'chrome://resources/js/load_time_data.js';

const styleMod$6 = document.createElement('dom-module');
styleMod$6.appendChild(html `
  <template>
    <style>
:host([hidden]),[hidden]{display:none!important}
    </style>
  </template>
`.content);
styleMod$6.register('cr-hidden-style');

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

const template$3 = html`
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
template$3.setAttribute('style', 'display: none;');
document.head.appendChild(template$3.content);

const template$2 = html `
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
document.head.appendChild(template$2.content);

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

function getTemplate$7() {
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
        return getTemplate$7();
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

const styleMod$5 = document.createElement('dom-module');
styleMod$5.appendChild(html `
  <template>
    <style>
.icon-arrow-back{--cr-icon-image:url(chrome://resources/images/icon_arrow_back.svg)}.icon-arrow-dropdown{--cr-icon-image:url(chrome://resources/images/icon_arrow_dropdown.svg)}.icon-cancel{--cr-icon-image:url(chrome://resources/images/icon_cancel.svg)}.icon-clear{--cr-icon-image:url(chrome://resources/images/icon_clear.svg)}.icon-copy-content{--cr-icon-image:url(chrome://resources/images/icon_copy_content.svg)}.icon-delete-gray{--cr-icon-image:url(chrome://resources/images/icon_delete_gray.svg)}.icon-edit{--cr-icon-image:url(chrome://resources/images/icon_edit.svg)}.icon-file{--cr-icon-image:url(chrome://resources/images/icon_filetype_generic.svg)}.icon-folder-open{--cr-icon-image:url(chrome://resources/images/icon_folder_open.svg)}.icon-picture-delete{--cr-icon-image:url(chrome://resources/images/icon_picture_delete.svg)}.icon-expand-less{--cr-icon-image:url(chrome://resources/images/icon_expand_less.svg)}.icon-expand-more{--cr-icon-image:url(chrome://resources/images/icon_expand_more.svg)}.icon-external{--cr-icon-image:url(chrome://resources/images/open_in_new.svg)}.icon-more-vert{--cr-icon-image:url(chrome://resources/images/icon_more_vert.svg)}.icon-refresh{--cr-icon-image:url(chrome://resources/images/icon_refresh.svg)}.icon-search{--cr-icon-image:url(chrome://resources/images/icon_search.svg)}.icon-settings{--cr-icon-image:url(chrome://resources/images/icon_settings.svg)}.icon-visibility{--cr-icon-image:url(chrome://resources/images/icon_visibility.svg)}.icon-visibility-off{--cr-icon-image:url(chrome://resources/images/icon_visibility_off.svg)}.subpage-arrow{--cr-icon-image:url(chrome://resources/images/arrow_right.svg)}.cr-icon{-webkit-mask-image:var(--cr-icon-image);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--cr-icon-size);background-color:var(--cr-icon-color,var(--google-grey-700));flex-shrink:0;height:var(--cr-icon-ripple-size);margin-inline-end:var(--cr-icon-ripple-margin);margin-inline-start:var(--cr-icon-button-margin-start);user-select:none;width:var(--cr-icon-ripple-size)}:host-context([dir=rtl]) .cr-icon{transform:scaleX(-1)}.cr-icon.no-overlap{margin-inline-end:0;margin-inline-start:0}@media (prefers-color-scheme:dark){.cr-icon{background-color:var(--cr-icon-color,var(--google-grey-500))}}
    </style>
  </template>
`.content);
styleMod$5.register('cr-icons');

const styleMod$4 = document.createElement('dom-module');
styleMod$4.appendChild(html `
  <template>
    <style include="cr-hidden-style cr-icons">
:host,html{--scrollable-border-color:var(--google-grey-300)}@media (prefers-color-scheme:dark){:host,html{--scrollable-border-color:var(--google-grey-700)}}[actionable]{cursor:pointer}.hr{border-top:var(--cr-separator-line)}iron-list.cr-separators>:not([first]){border-top:var(--cr-separator-line)}[scrollable]{border-color:transparent;border-style:solid;border-width:1px 0;overflow-y:auto}[scrollable].is-scrolled{border-top-color:var(--scrollable-border-color)}[scrollable].can-scroll:not(.scrolled-to-bottom){border-bottom-color:var(--scrollable-border-color)}[scrollable] iron-list>:not(.no-outline):focus,[selectable]:focus,[selectable]>:focus{background-color:var(--cr-focused-item-color);outline:0}.scroll-container{display:flex;flex-direction:column;min-height:1px}[selectable]>*{cursor:pointer}.cr-centered-card-container{box-sizing:border-box;display:block;height:inherit;margin:0 auto;max-width:var(--cr-centered-card-max-width);min-width:550px;position:relative;width:calc(100% * var(--cr-centered-card-width-percentage))}.cr-container-shadow{box-shadow:inset 0 5px 6px -3px rgba(0,0,0,.4);height:var(--cr-container-shadow-height);left:0;margin:0 0 var(--cr-container-shadow-margin);opacity:0;pointer-events:none;position:relative;right:0;top:0;transition:opacity .5s;z-index:1}#cr-container-shadow-bottom{margin-bottom:0;margin-top:var(--cr-container-shadow-margin);transform:scaleY(-1)}#cr-container-shadow-bottom.has-shadow,#cr-container-shadow-top.has-shadow{opacity:var(--cr-container-shadow-max-opacity)}.cr-row{align-items:center;border-top:var(--cr-separator-line);display:flex;min-height:var(--cr-section-min-height);padding:0 var(--cr-section-padding)}.cr-row.continuation,.cr-row.first{border-top:none}.cr-row-gap{padding-inline-start:16px}.cr-button-gap{margin-inline-start:8px}paper-tooltip::part(tooltip){border-radius:var(--paper-tooltip-border-radius,2px);font-size:92.31%;font-weight:500;max-width:330px;min-width:var(--paper-tooltip-min-width,200px);padding:var(--paper-tooltip-padding,10px 8px)}.cr-padded-text{padding-block-end:var(--cr-section-vertical-padding);padding-block-start:var(--cr-section-vertical-padding)}.cr-title-text{color:var(--cr-title-text-color);font-size:107.6923%;font-weight:500}.cr-secondary-text{color:var(--cr-secondary-text-color);font-weight:400}.cr-form-field-label{color:var(--cr-form-field-label-color);display:block;font-size:var(--cr-form-field-label-font-size);font-weight:500;letter-spacing:.4px;line-height:var(--cr-form-field-label-line-height);margin-bottom:8px}.cr-vertical-tab{align-items:center;display:flex}.cr-vertical-tab::before{border-radius:0 3px 3px 0;content:'';display:block;flex-shrink:0;height:var(--cr-vertical-tab-height,100%);width:4px}.cr-vertical-tab.selected::before{background:var(--cr-vertical-tab-selected-color,var(--cr-checked-color))}:host-context([dir=rtl]) .cr-vertical-tab::before{transform:scaleX(-1)}.iph-anchor-highlight{background-color:var(--cr-iph-anchor-highlight-color)}
    </style>
  </template>
`.content);
styleMod$4.register('cr-shared-style');

const styleMod$3 = document.createElement('dom-module');
styleMod$3.appendChild(html `
  <template>
    <style>
.md-select{--md-arrow-width:10px;--md-select-bg-color:var(--google-grey-100);--md-select-focus-shadow-color:rgba(var(--google-blue-600-rgb), .4);--md-select-option-bg-color:white;--md-select-side-padding:8px;--md-select-text-color:var(--cr-primary-text-color);-webkit-appearance:none;background:url(//resources/images/arrow_down.svg) calc(100% - var(--md-select-side-padding)) center no-repeat;background-color:var(--md-select-bg-color);background-size:var(--md-arrow-width);border:none;border-radius:4px;color:var(--md-select-text-color);cursor:pointer;font-family:inherit;font-size:inherit;line-height:inherit;max-width:100%;outline:0;padding-bottom:6px;padding-inline-end:calc(var(--md-select-side-padding) + var(--md-arrow-width) + 3px);padding-inline-start:var(--md-select-side-padding);padding-top:6px;width:var(--md-select-width,200px)}@media (prefers-color-scheme:dark){.md-select{--md-select-bg-color:rgba(0, 0, 0, .3);--md-select-focus-shadow-color:rgba(var(--google-blue-300-rgb), .5);--md-select-option-bg-color:var(--google-grey-900-white-4-percent);background-image:url(//resources/images/dark/arrow_down.svg)}}:host-context([chrome-refresh-2023]) .md-select{--md-select-bg-color:transparent;--md-arrow-width:7px;--md-select-side-padding:10px;--md-select-text-color:inherit;border:solid 1px var(--color-combobox-container-outline,var(--cr-fallback-color-neutral-outline));border-radius:8px;box-sizing:border-box;font-size:12px;height:36px;line-height:36px;padding-bottom:0;padding-top:0}:host-context([chrome-refresh-2023]) .md-select:hover{background-color:var(--color-comboxbox-ink-drop-hovered,var(--cr-hover-on-subtle-background-color))}.md-select :-webkit-any(option,optgroup){background-color:var(--md-select-option-bg-color)}.md-select[disabled]{opacity:var(--cr-disabled-opacity);pointer-events:none}:host-context([chrome-refresh-2023]) .md-select[disabled]{background-color:var(--color-combobox-background-disabled,var(--cr-fallback-color-disabled-background));border-color:transparent;color:var(--color-textfield-foreground-disabled,var(--cr-fallback-color-disabled-foreground));opacity:1}.md-select:focus{box-shadow:0 0 0 2px var(--md-select-focus-shadow-color)}:host-context([chrome-refresh-2023]) .md-select:focus{box-shadow:none;outline:solid 2px var(--cr-focus-outline-color);outline-offset:-1px}@media (forced-colors:active){.md-select:focus{outline:var(--cr-focus-outline-hcm)}}.md-select:active{box-shadow:none}:host-context([dir=rtl]) .md-select{background-position-x:var(--md-select-side-padding)}
    </style>
  </template>
`.content);
styleMod$3.register('md-select');

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

const template$1 = html`
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
template$1.setAttribute('style', 'display: none;');
document.head.appendChild(template$1.content);

const styleMod$2 = document.createElement('dom-module');
styleMod$2.appendChild(html`
  <template>
    <style include="iron-flex cr-shared-style md-select">

@import 'ui/webui/resources/cr_elements/chromeos/cros_color_overrides.css';

a {
  color: var(--cros-link-color);
  text-decoration: none;
}
    </style>
  </template>
`.content);
styleMod$2.register('multidevice-setup-shared');

const styleMod$1 = document.createElement('dom-module');
styleMod$1.appendChild(html `
  <template>
    <style>
:host-context([cros]) a:not(.item)[href]{color:var(--cros-link-color)}:host-context([cros]) cr-button[has-prefix-icon_],:host-context([cros]) cr-button[has-suffix-icon_]{--iron-icon-fill-color:currentColor}:host-context([cros]) cr-dialog::part(dialog){--cr-dialog-background-color:var(--cros-bg-color-elevation-3);background-image:none;box-shadow:var(--cros-elevation-3-shadow)}:host-context([cros]) cr-radio-button{--cr-radio-button-checked-color:var(--cros-radio-button-color);--cr-radio-button-checked-ripple-color:var(--cros-radio-button-ripple-color);--cr-radio-button-unchecked-color:var(--cros-radio-button-color-unchecked);--cr-radio-button-unchecked-ripple-color:var(--cros-radio-button-ripple-color-unchecked)}:host-context([cros]) cr-toast{--cr-toast-background-color:var(--cros-toast-background-color);--cr-toast-background:var(--cros-toast-background-color);--cr-toast-text-color:var(--cros-toast-text-color);--iron-icon-fill-color:var(--cros-toast-icon-color)}:host-context([cros]) cr-toast .error-message{color:var(--cros-toast-text-color)}:host-context([cros]) cr-toggle{--cr-toggle-checked-bar-color:var(--cros-switch-track-color-active);--cr-toggle-checked-bar-opacity:100%;--cr-toggle-checked-button-color:var(--cros-switch-knob-color-active);--cr-toggle-checked-ripple-color:var(--cros-focus-aura-color);--cr-toggle-unchecked-bar-color:var(--cros-switch-track-color-inactive);--cr-toggle-unchecked-button-color:var(--cros-switch-knob-color-inactive);--cr-toggle-unchecked-ripple-color:var(--cros-ripple-color);--cr-toggle-box-shadow:var(--cros-elevation-1-shadow);--cr-toggle-ripple-diameter:32px}:host-context([cros]) cr-toggle:focus{--cr-toggle-ripple-ring:2px solid var(--cros-focus-ring-color)}:host-context([cros]) .primary-toggle{color:var(--cros-text-color-secondary)}:host-context([cros]) .primary-toggle[checked]{color:var(--cros-text-color-prominent)}:host-context([cros]) paper-spinner-lite{--paper-spinner-color:var(--cros-icon-color-prominent)}:host-context([cros]) cr-tooltip-icon{--cr-link-color:var(--cros-tooltip-link-color)}:host-context(body.jelly-enabled){--cros-button-label-color-primary:var(--cros-sys-on_primary);--cros-link-color:var(--cros-sys-primary);--cros-separator-color:var(--cros-sys-separator);--cros-tab-slider-track-color:var(--cros-sys-surface_variant, 80%);--cr-form-field-label-color:var(--cros-sys-on_surface);--cr-link-color:var(--cros-sys-primary);--cr-primary-text-color:var(--cros-sys-on_surface);--cr-secondary-text-color:var(--cros-sys-on_surface_variant)}:host-context(body.jelly-enabled) cr-button{--text-color:var(--cros-sys-on_primary_container);--ink-color:var(--cros-sys-ripple_primary);--iron-icon-fill-color:currentColor;--hover-bg-color:var(--cros-sys-hover_on_subtle);--ripple-opacity:.1;--bg-action:var(--cros-sys-primary);--ink-color-action:var(--cros-sys-ripple_primary);--text-color-action:var(--cros-sys-on_primary);--hover-bg-action:var(--cros-sys-hover_on_prominent);--ripple-opacity-action:1;--disabled-bg:var(--cros-sys-disabled_container);--disabled-bg-action:var(--cros-sys-disabled_container);--disabled-text-color:var(--cros-sys-disabled);background-color:var(--cros-sys-primary_container);border:none}:host-context(body.jelly-enabled) cr-button:hover::part(hoverBackground){background-color:var(--hover-bg-color);display:block}:host-context(body.jelly-enabled) cr-button.action-button:not(:active):hover,:host-context(body.jelly-enabled) cr-button:active{box-shadow:none}:host-context(body.jelly-enabled) cr-button.action-button{background-color:var(--bg-action)}:host-context(body.jelly-enabled) cr-button.action-button:hover::part(hoverBackground){background-color:var(--hover-bg-action)}:host-context(body.jelly-enabled) cr-button[disabled]{background-color:var(--cros-sys-disabled_container)}:host-context(body.jelly-enabled):host-context(.focus-outline-visible) cr-button:focus{box-shadow:none;outline:2px solid var(--cros-sys-focus_ring)}:host-context(body.jelly-enabled) cr-checkbox{--cr-checkbox-checked-box-color:var(--cros-sys-primary);--cr-checkbox-ripple-checked-color:var(--cros-sys-ripple_primary);--cr-checkbox-checked-ripple-opacity:1;--cr-checkbox-mark-color:var(--cros-sys-inverse_on_surface);--cr-checkbox-ripple-unchecked-color:var(--cros-sys-ripple_primary);--cr-checkbox-unchecked-box-color:var(--cros-sys-on_surface);--cr-checkbox-unchecked-ripple-opacity:1}:host-context(body.jelly-enabled) cr-dialog::part(dialog){--cr-dialog-background-color:var(--cros-sys-base_elevated);background-image:none;box-shadow:0 0 12px 0 var(--cros-sys-shadow)}:host-context(body.jelly-enabled) cr-dialog>[slot=title]{font:var(--cros-display-7-font)}:host-context(body.jelly-enabled) cr-drawer{--cr-drawer-background-color:var(--cros-sys-app_base_shaded)}:host-context(body.jelly-enabled) cr-expand-button::part(icon),:host-context(body.jelly-enabled) cr-icon-button,:host-context(body.jelly-enabled) cr-link-row::part(icon){--cr-icon-button-fill-color:var(--cros-sys-secondary)}:host-context(body.jelly-enabled) cr-input,:host-context(body.jelly-enabled) cr-search-field::part(searchInput),:host-context(body.jelly-enabled) cr-textarea{--cr-input-background-color:var(--cros-sys-input_field_on_base);--cr-input-error-color:var(--cros-sys-error);--cr-input-focus-color:var(--cros-sys-primary);--cr-input-placeholder-color:var(--cros-sys-secondary)}:host-context(body.jelly-enabled) .md-select{--md-select-bg-color:var(--cros-sys-input_field_on_base);--md-select-focus-shadow-color:var(--cros-sys-primary);--md-select-option-bg-color:var(--cros-sys-base_elevated);--md-select-text-color:var(--cros-sys-on_surface)}:host-context(body.jelly-enabled) cr-action-menu{--cr-menu-background-color:var(--cros-sys-base_elevated);--cr-menu-background-focus-color:var(--cros-sys-hover_on_subtle)}:host-context(body.jelly-enabled),:host-context(body.jelly-enabled) cr-radio-button{--cr-radio-button-checked-color:var(--cros-sys-primary);--cr-radio-button-checked-ripple-color:var(--cros-sys-ripple_primary);--cr-radio-button-unchecked-color:var(--cros-sys-on_surface);--cr-radio-button-unchecked-ripple-color:var(--cros-sys-ripple_neutral_on_subtle)}:host-context(body.jelly-enabled) cr-card-radio-button{--cr-card-background-color:var(--cros-sys-app_base);--cr-checked-color:var(--cros-sys-primary);--cr-radio-button-checked-ripple-color:var(--cros-sys-ripple_primary);--hover-bg-color:var(--cros-sys-hover_on_subtle)}:host-context(body.jelly-enabled) cr-search-field{--cr-search-field-clear-icon-fill:var(--cros-sys-primary);--cr-search-field-clear-icon-margin-end:6px;--cr-search-field-input-border-bottom:none;--cr-search-field-input-padding-start:8px;--cr-search-field-input-underline-border-radius:4px;--cr-search-field-search-icon-display:none;--cr-search-field-search-icon-fill:var(--cros-sys-primary);--cr-search-field-search-icon-inline-display:block;--cr-search-field-search-icon-inline-margin-start:6px;border-radius:4px}:host-context(body.jelly-enabled) cr-slider{--cr-slider-active-color:var(--cros-sys-primary);--cr-slider-container-color:var(--cros-sys-primary_container);--cr-slider-container-disabled-color:var(--cros-sys-disabled_container);--cr-slider-disabled-color:var(--cros-sys-disabled);--cr-slider-knob-active-color:var(--cros-sys-primary);--cr-slider-knob-disabled-color:var(--cros-sys-disabled);--cr-slider-marker-active-color:var(--cros-sys-primary_container);--cr-slider-marker-color:var(--cros-sys-primary);--cr-slider-marker-disabled-color:var(--cros-sys-disabled);--cr-slider-ripple-color:var(--cros-sys-hover_on_prominent)}:host-context(body.jelly-enabled) cr-slider:not([disabled])::part(knob){background-color:var(--cros-sys-primary)}:host-context(body.jelly-enabled) cr-slider[disabled]::part(knob){border:none}:host-context(body.jelly-enabled) cr-slider::part(label){background:var(--cros-sys-primary);color:var(--cros-sys-on_primary)}:host-context(body.jelly-enabled) cr-tabs{--cr-tabs-selected-color:var(--cros-sys-primary)}:host-context(body.jelly-enabled) cr-toggle{--cr-toggle-checked-bar-color:var(--cros-sys-primary_container);--cr-toggle-checked-bar-opacity:100%;--cr-toggle-checked-button-color:var(--cros-sys-primary);--cr-toggle-checked-ripple-color:var(--cros-sys-hover_on_prominent);--cr-toggle-unchecked-bar-color:var(--cros-sys-secondary);--cr-toggle-unchecked-button-color:var(--cros-sys-surface_variant);--cr-toggle-unchecked-ripple-color:var(--cros-sys-hover_on_prominent);--cr-toggle-box-shadow:var(--cros-elevation-1-shadow);--cr-toggle-ripple-diameter:32px}:host-context(body.jelly-enabled) cr-toggle:focus{--cr-toggle-ripple-ring:2px solid var(--cros-sys-focus_ring)}
    </style>
  </template>
`.content);
styleMod$1.register('cros-color-overrides');

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
function assertNotReached(message) {
  assert$1(false, message || 'Unreachable code hit');
}

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
const sanitizeInnerHtmlInternal = function(rawString, opts) {
  opts = opts || {};
  return parseHtmlSubset(`<b>${rawString}</b>`, opts.tags, opts.attrs)
      .firstChild.innerHTML;
};

let sanitizedPolicy = null;

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
function sanitizeInnerHtml(rawString, opts) {
  assert$1(window.trustedTypes);
  if (sanitizedPolicy === null) {
    // Initialize |sanitizedPolicy| lazily.
    sanitizedPolicy =
        window.trustedTypes.createPolicy('ash-deprecated-sanitize-inner-html', {
          createHTML: (string, ...opts) =>
              sanitizeInnerHtmlInternal(string, opts[0]),
          createScript: (message) => assertNotReached(message),
          createScriptURL: (message) => assertNotReached(message),
        });
  }
  return sanitizedPolicy.createHTML(rawString, opts);
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
const parseHtmlSubset = (function() {

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
    return parseHtmlSubset('<b>' + rawString + '</b>').firstChild.textContent;
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
    return sanitizeInnerHtml(rawString, opts);
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

function getTemplate$6() {
  return html`<!--_html_template_start_--><style include="multidevice-setup-shared cros-color-overrides">
  :host {
    display: flex;
    flex-direction: column;
  }

  #button-container {
    display: flex;
  }

  @media screen and (max-width: 767px) {
    #shadow {
      background: linear-gradient(0deg,
                                  rgba(var(--google-grey-100-rgb), 1) 0,
                                  rgba(var(--google-grey-100-rgb), 0) 8px);
      height: 8px;
      left: 0;
      position: absolute;
      right: 0;
      top: -8px;
    }
  }
</style>
<div id="shadow" hidden$="[[!shouldShowShadow]]"></div>
<div id="button-container">
  <cr-button id="backward"
      name="backward-button"
      class="cancel-button"
      on-click="onBackwardButtonClicked_"
      hidden$="[[!backwardButtonTextId]]">
    [[getButtonTextFromId_(backwardButtonTextId)]]
  </cr-button>
  <div class="flex"></div>
  <cr-button id="cancel"
      name="cancel-button"
      class="cancel-button"
      on-click="onCancelButtonClicked_"
      hidden$="[[!cancelButtonTextId]]">
      [[getButtonTextFromId_(cancelButtonTextId)]]
  </cr-button>
  <cr-button id="forward"
      name="forward-button"
      class="action-button"
      on-click="onForwardButtonClicked_"
      disabled="[[forwardButtonDisabled]]"
      hidden$="[[!forwardButtonTextId]]">
    [[getButtonTextFromId_(forwardButtonTextId)]]
  </cr-button>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


/**
 * DOM Element containing (page-dependent) navigation buttons for the
 * MultiDevice Setup WebUI.
 */
Polymer({
  _template: getTemplate$6(),
  is: 'button-bar',

  behaviors: [
    I18nBehavior,
  ],

  properties: {
    /** Whether a shadow should appear over the button bar. */
    shouldShowShadow: {
      type: Boolean,
      value: false,
    },

    /**
     * ID of loadTimeData string to be shown on the backward navigation button.
     * @type {string|undefined}
     */
    backwardButtonTextId: {
      type: String,
      value: '',
    },

    /**
     * ID of loadTimeData string to be shown on the cancel button.
     * @type {string|undefined}
     */
    cancelButtonTextId: {
      type: String,
      value: '',
    },

    /**
     * ID of loadTimeData string to be shown on the forward navigation button.
     * @type {string|undefined}
     */
    forwardButtonTextId: {
      type: String,
      value: '',
    },

    /**
     * Whether the forward button should be disabled. I.e., when on the password
     * page and there is an empty password or if the password entered failed and
     * is not yet changed/updated.
     * @type {boolean}
     */
    forwardButtonDisabled: {
      type: Boolean,
      value: false,
    },
  },

  /** @private */
  onForwardButtonClicked_() {
    this.fire('forward-navigation-requested');
  },

  /** @private */
  onCancelButtonClicked_() {
    this.fire('cancel-requested');
  },

  /** @private */
  onBackwardButtonClicked_() {
    this.fire('backward-navigation-requested');
  },

  /**
   * @return {string} The i18n text for any button obtained from loadTimeData
   *     text ID.
   * @private
   */
  getButtonTextFromId_(textId) {
    if (!textId) {
      return '';
    }
    return this.i18n(textId);
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

const template = html`<iron-iconset-svg name="multidevice-setup-icons-32" size="32">
  <svg>
    <defs>
      <g id="google-g" fill="none" fill-rule="evenodd">
        <path d="M30.42 16.83a16.66 16.66 0 0 0-.264-2.966H16.5v5.609h7.804c-.336 1.812-1.358 3.348-2.894 4.376v3.638h4.686c2.742-2.524 4.324-6.242 4.324-10.657z" fill="#4285F4"></path>
        <path d="M16.5 31c3.915 0 7.197-1.298 9.596-3.513l-4.686-3.638c-1.298.87-2.96 1.384-4.91 1.384-3.777 0-6.973-2.55-8.113-5.978H3.542v3.757C5.928 27.75 10.832 31 16.5 31z" fill="#34A853"></path>
        <path d="M8.387 19.255c-.29-.87-.455-1.8-.455-2.755 0-.956.165-1.885.455-2.755V9.988H3.542A14.494 14.494 0 0 0 2 16.5c0 2.34.56 4.554 1.542 6.512l4.845-3.757z" fill="#FBBC05"></path>
        <path d="M16.5 7.767c2.129 0 4.04.732 5.543 2.168l4.159-4.158C23.69 3.437 20.408 2 16.5 2 10.832 2 5.928 5.25 3.542 9.988l4.845 3.757c1.14-3.427 4.336-5.978 8.113-5.978z" fill="#EA4335"></path>
        <path d="M2 2h29v29H2z"></path>
      </g>
      <g id="error-icon" fill="none" fill-rule="evenodd" transform="translate(-4 -4)">
        <path d="M20 4C11.168 4 4 11.168 4 20s7.168 16 16 16 16-7.168 16-16S28.832 4 20 4zm1.6 24h-3.2v-3.2h3.2V28zm0-6.4h-3.2V12h3.2v9.6z" fill="#D93025" fill-rule="nonzero"></path>
        <path d="M.8.8h38.4v38.4H.8z"></path>
      </g>
    </defs>
  </svg>
</iron-iconset-svg>
<iron-iconset-svg name="multidevice-setup-icons-20" size="20">
  <svg>
    <defs>
      <g id="messages" fill-rule="evenodd">
        <path d="M16.3107503,3 L3.66666667,3 C2.75,3 2,3.75 2,4.66666667 L2,18.3161621 L5.33333333,15 L16.3107503,15 C17.227417,15 17.977417,14.2328288 17.977417,13.3161621 L17.977417,4.66666667 C17.977417,3.75 17.227417,3 16.3107503,3 Z M16,13 L4,13 L4,5 L16,5 L16,13 Z M6,8 L8,8 L8,10 L6,10 L6,8 Z M9,8 L11,8 L11,10 L9,10 L9,8 Z M12,8 L14,8 L14,10 L12,10 L12,8 Z"></path>
      </g>
      <g id="notifications" fill-rule="evenodd">
        <path d="M11,3.10001812 C13.2822403,3.56328845 15,5.58104209 15,8 C15,10.7614237 15,13 15,13 L17,13 L17,15 L3,15 L3,13 L5,13 C5,13 5,9.9021552 5,8 C5,5.58104209 6.71775968,3.56328845 9,3.10001812 L9,2.5 C9,1.94771525 9.44771525,1.5 10,1.5 C10.5522847,1.5 11,1.94771525 11,2.5 L11,3.10001812 Z M7,8 L7,13 L13,13 L13,8 C13,6.34314575 11.6568542,5 10,5 C8.34314575,5 7,6.34314575 7,8 Z M10,18 C8.8954305,18 8,17.1045695 8,16 L12,16 C12,17.1045695 11.1045695,18 10,18 Z"></path>
      </g>
      <g id="wifi" fill-rule="evenodd">
        <path d="M10.01 17.99L20 5.46C19.613 5.164 15.765 2 10 2 4.227 2 .387 5.165 0 5.46l9.99 12.53.01.01.01-.01z" fill-opacity=".3"></path>
        <path d="M2.942 9.143l7.05 8.85L10 18l.008-.008 7.05-8.85C16.7 8.867 14.008 6.668 10 6.668s-6.7 2.2-7.058 2.476z"></path>
      </g>
      <g id="downloads" fill-rule="evenodd">
        <path d="M2,13 L4,13 L4,16 L16,16 L16,13 L18,13 L18,16 C18,17.1 17.1,18 16,18 L4,18 C2.9,18 2,17.1 2,16 L2,13 Z M13.59,7.59 L11,10.17 L11,2 L9,2 L9,10.17 L6.41,7.59 L5,9 L10,14 L15,9 L13.59,7.59 Z"></path>
      </g>
      <g id="features" fill-rule="evenodd">
        <path d="M5,5 L18,5 L18,3.5 L5.16080729,3.5 C4.24414063,3.5 3.49414062,4.23125 3.49414062,5.125 L3.49414062,14 L1,14 L1,17 L11,17 L11,14 L5,14 L5,5 Z M18.1666667,6.49829102 L13.3713582,6.49829102 C12.9130249,6.49829102 12.5,6.86391602 12.5,7.31079102 L12.5,16.171875 C12.5,16.61875 12.9130249,17 13.3713582,17 L18.1666667,17 C18.625,17 19,16.61875 19,16.171875 L19,7.31079102 C19,6.86391602 18.625,6.49829102 18.1666667,6.49829102 Z M17.5,14 L14,14 L14,8.5 L17.5,8.5 L17.5,14 Z"></path>
      </g>
      <g id="image" fill-rule="evenodd">
        <path d="M15 3H5C3.9 3 3 3.9 3 5V15C3 16.1 3.9 17 5 17H15C16.1 17 17 16.1 17 15V5C17 3.9 16.1 3 15 3ZM15 15H5V5H15V15ZM11.3333 9L9.5 12L8 10.6L6 14H14L11.3333 9Z"></path>
      </g>
    </defs>
  </svg>
</iron-iconset-svg>
`;
document.head.appendChild(template.content);

function getTemplate$5() {
  return html`<!--_html_template_start_--><style include="multidevice-setup-shared">
  :host {
    --multidevice-setup-dialog-height: var(--oobe-oobe-dialog-height-base);
    --multidevice-setup-dialog-width: var(--oobe-oobe-dialog-width-base);
    --multidevice-setup-dialog-content-padding: 40px;
  }

  :host-context([orientation=horizontal]) {
    --multidevice-setup-dialog-content-direction: row;
    --multidevice-setup-dialog-item-alignment: unset;
    --multidevice-setup-text-alignment: start;
    --multidevice-setup-dialog-content-width: calc(
        var(--multidevice-setup-dialog-width) -
        4 * var(--multidevice-setup-dialog-content-padding) -
        var(--multidevice-setup-dialog-header-width));
    /* Header takes 40% of the width remaining after applying padding */
    --multidevice-setup-dialog-header-width: clamp(302px,
        calc(0.4 * (var(--multidevice-setup-dialog-width) -
        4 * var(--multidevice-setup-dialog-content-padding))) , 346px);
  }

  :host-context([orientation=vertical]) {
    --multidevice-setup-dialog-content-direction: column;
    --multidevice-setup-dialog-item-alignment: center;
    --multidevice-setup-text-alignment: center;
    --multidevice-setup-dialog-content-width: calc(
        var(--multidevice-setup-dialog-width) -
        2 * var(--multidevice-setup-dialog-content-padding));
    /* Header takes 60% of the width remaining after applying padding */
    --multidevice-setup-dialog-header-width: clamp(346px,
        calc(0.6 * (var(--multidevice-setup-dialog-width) -
        2 * var(--multidevice-setup-dialog-content-padding))) , 520px);
  }

  iron-icon {
    --iron-icon-width: 32px;
    --iron-icon-height: 32px;
  }

  h1 {
    color: var(--cros-text-color-primary);
    font-size: 28px;
    font-weight: normal;
    line-height: 28px;
    margin: 0;
    padding-top: 40px;
    text-align: var(--multidevice-setup-text-alignment);
  }

  :host-context(body.jelly-enabled) h1 {
    font-family: var(--cros-font-family-google-sans);
  }

  /* TODO(b/279667779): Remove once Jelly is launched */
  :host-context(body:not(.jelly-enabled)) h1 {
    font-family: 'Google Sans', Roboto, sans-serif;
  }

  #message-container {
    color: var(--cros-text-color-secondary);
    line-height: 18px;
    min-height: 32px;
    overflow-wrap: break-word;
    padding-top: 16px;
    text-align: var(--multidevice-setup-text-alignment);
  }

  :host-context(body.jelly-enabled) #message-container {
    font: var(--cros-body-1-font);
    font-family: var(--cros-font-family-google-sans);
  }

  #main-container {
    align-items: var(--multidevice-setup-dialog-item-alignment);
    display: flex;
    flex-direction: var(--multidevice-setup-dialog-content-direction);
    height: 100%;
  }

  #header-container {
    align-items: var(--multidevice-setup-dialog-item-alignment);
    display: flex;
    flex-direction: column;
    padding-bottom: 0;
    padding-inline-end: var(--multidevice-setup-dialog-content-padding);
    padding-inline-start: var(--multidevice-setup-dialog-content-padding);
    padding-top: var(--multidevice-setup-dialog-content-padding);
    width: var(--multidevice-setup-dialog-header-width);
  }

  :host-context([screen=oobe]) #header-container,
  :host-context([screen=gaia-signin]) #header-container {
    overflow-y: hidden;
    padding-top: calc(var(--multidevice-setup-dialog-content-padding)
      + 2 * clamp(20px, calc(var(--multidevice-setup-dialog-height)
      * 0.035), 40px) + 34px);
  }

  #additional-content-container {
    border: transparent;
    display: flex;
    flex: 1;
    padding-bottom: 0;
    padding-inline-end: var(--multidevice-setup-dialog-content-padding);
    padding-inline-start: var(--multidevice-setup-dialog-content-padding);
    padding-top: 0;
    width: var(--multidevice-setup-dialog-content-width);
  }

  :host-context([orientation=vertical]) #additional-content-container {
    margin-top: 40px;
  }

  :host-context([orientation=horizontal][screen=oobe])
      #additional-content-container,
  :host-context([orientation=horizontal][screen=gaia-signin])
      #additional-content-container {
    margin-top: 80px;
  }

  :host-context([screen=oobe]) #additional-content-container,
  :host-context([screen=gaia-signin]) #additional-content-container {
    overflow-y: auto;
  }
</style>
<div id="main-container">
  <div id="header-container">
    <iron-icon icon="[[computeIconIdentifier_(iconName)]]"></iron-icon>
    <h1>[[headerText]]</h1>
    <div id="message-container">
      <slot name="message"></slot>
    </div>
  </div>
  <div id="additional-content-container">
    <slot name="additional-content"></slot>
  </div>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


Polymer({
  _template: getTemplate$5(),
  is: 'ui-page',

  properties: {
    /**
     * Main heading for the page.
     *
     * @type {string}
     */
    headerText: String,

    /**
     * Name of icon within icon set.
     *
     * @type {string}
     */
    iconName: String,
  },

  /**
   * @return {string}
   * @private
   */
  computeIconIdentifier_() {
    return 'multidevice-setup-icons-32:' + this.iconName;
  },
});

const styleMod = document.createElement('dom-module');
styleMod.appendChild(html `
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
styleMod.register('cr-input-style');

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

function getTemplate$4() {
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
        return getTemplate$4();
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

// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


/**
 * A variation of chrome.send, suitable for messages that expect a single
 * response from C++.
 * @param {string} methodName The name of the WebUI handler API.
 * @param {...*} var_args Variable number of arguments to be forwarded to the
 *     C++ call.
 * @return {!Promise}
 */
function sendWithPromise(methodName, var_args) {
  const args = Array.prototype.slice.call(arguments, 1);
  return sendWithPromise$1(methodName, ...args);
}

/**
 * Registers a listener for an event fired from WebUI handlers. Any number of
 * listeners may register for a single event.
 * @param {string} eventName The event to listen to.
 * @param {!Function} callback The callback run when the event is fired.
 * @return {!WebUIListener} An object to be used for removing a listener via
 *     removeWebUIListener. Should be treated as read-only.
 */
function addWebUIListener(eventName, callback) {
  return addWebUiListener(eventName, callback);
}

/**
 * Removes a listener. Does nothing if the specified listener is not found.
 * @param {!WebUIListener} listener The listener to be removed (as returned by
 *     addWebUIListener).
 * @return {boolean} Whether the given listener was found and actually
 *     removed.
 */
function removeWebUIListener(listener) {
  return removeWebUiListener(listener);
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


/** @implements {BrowserProxy} */
class BrowserProxyImpl {
  /** @override */
  getProfileInfo() {
    return sendWithPromise('getProfileInfo');
  }

  /** @override */
  openMultiDeviceSettings() {
    chrome.send('openMultiDeviceSettings');
  }

  /** @return {!BrowserProxy} */
  static getInstance() {
    return instance$2 || (instance$2 = new BrowserProxyImpl());
  }

  /** @param {!BrowserProxy} obj */
  static setInstance(obj) {
    instance$2 = obj;
  }
}

/** @type {?BrowserProxy} */
let instance$2 = null;

function getTemplate$3() {
  return html`<!--_html_template_start_--><style include="multidevice-setup-shared">
  #user-info-container  {
    align-items: center;
    color: var(--cros-text-color-secondary);
    display: flex;
    padding-top: 32px;
  }

  #profile-photo {
    border-radius: 50%;
    height: 20px;
    margin-inline-end: 8px;
    width: 20px;
  }

  #passwordInput {
    height: 32px;
    margin-top: 48px;
    width: 100%;
  }

  :host-context([orientation=horizontal]) #passwordInput {
    width: min(calc(var(--multidevice-setup-dialog-width) -
        2 * var(--multidevice-setup-dialog-content-padding)), 640px);
  }

  :host-context([orientation=vertical]) #passwordInput {
    width: min(calc(var(--multidevice-setup-dialog-width) -
        2 * var(--multidevice-setup-dialog-content-padding)), 480px);
  }

  :host-context([orientation=vertical]) #content-container {
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  :host-context([orientation=horizontal]) #user-info-container {
    padding-top: 0;
  }
</style>
<ui-page header-text="[[i18nDynamic(locale, 'passwordPageHeader')]]"
    icon-name="google-g">
  <div id="content-container" slot="message">
    <div id="user-info-container">
      <img id="profile-photo" src="[[profilePhotoUrl_]]" aria-hidden="true"></img>
      <span id="email">[[email_]]</span>
    </div>
    <cr-input id="passwordInput" type="password"
        placeholder="[[i18nDynamic(locale, 'enterPassword')]]"
        invalid="[[passwordInvalid_]]"
        error-message="[[i18nDynamic(locale, 'wrongPassword')]]"
        value="{{inputValue_}}"
        aria-disabled="false"
        on-keypress="onInputKeypress_">
    </cr-input>
  </div>
</ui-page>
<!--_html_template_end_-->`;
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


/** @polymerBehavior */
const UiPageContainerBehaviorImpl = {
  properties: {
    /**
     * ID of loadTimeData string for forward button label, which must be
     * translated for display. Undefined if the visible page has no
     * forward-navigation button.
     * @type {string|undefined}
     */
    forwardButtonTextId: String,

    /**
     * ID of loadTimeData string for cancel button label, which must be
     * translated for display. Undefined if the visible page has no
     * cancel button.
     * @type {string|undefined}
     */
    cancelButtonTextId: String,

    /**
     * ID of loadTimeData string for backward button label, which must be
     * translated for display. Undefined if the visible page has no
     * backward-navigation button.
     * @type {string|undefined}
     */
    backwardButtonTextId: String,
  },

  /**
   * Returns a promise which always resolves and returns a boolean representing
   * whether it should be possible to navigate forward. This function is called
   * before forward navigation is requested; if false is returned, the active
   * page does not change.
   * @return {!Promise}
   */
  getCanNavigateToNextPage() {
    return new Promise((resolve) => {
      resolve(true /* canNavigate */);
    });
  },
};

/** @polymerBehavior */
const UiPageContainerBehavior = [
  I18nBehavior,
  UiPageContainerBehaviorImpl,
];

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


Polymer({
  _template: getTemplate$3(),
  is: 'password-page',

  behaviors: [
    UiPageContainerBehavior,
  ],

  properties: {
    /**
     * Whether forward button should be disabled. In this context, the forward
     * button should be disabled if the user has not entered a password or if
     * the user has submitted an incorrect password and has not yet edited it.
     * @type {boolean}
     */
    forwardButtonDisabled: {
      type: Boolean,
      computed: 'shouldForwardButtonBeDisabled_(' +
          'inputValue_, passwordInvalid_, waitingForPasswordCheck_)',
      notify: true,
    },

    /** Overridden from UiPageContainerBehavior. */
    forwardButtonTextId: {
      type: String,
      value: 'done',
    },

    /** Overridden from UiPageContainerBehavior. */
    cancelButtonTextId: {
      type: String,
      value: 'cancel',
    },

    /** Overridden from UiPageContainerBehavior. */
    backwardButtonTextId: {
      type: String,
      value: 'back',
    },

    /**
     * Authentication token; retrieved using the quickUnlockPrivate API.
     * @type {string}
     */
    authToken: {
      type: String,
      value: '',
      notify: true,
    },

    /** @private {string} */
    profilePhotoUrl_: {
      type: String,
      value: '',
    },

    /** @private {string} */
    email_: {
      type: String,
      value: '',
    },

    /** @private {!QuickUnlockPrivate} */
    quickUnlockPrivate_: {
      type: Object,
      value: chrome.quickUnlockPrivate,
    },

    /** @private {string} */
    inputValue_: {
      type: String,
      value: '',
      observer: 'onInputValueChange_',
    },

    /** @private {boolean} */
    passwordInvalid_: {
      type: Boolean,
      value: false,
    },

    /** @private {boolean} */
    waitingForPasswordCheck_: {
      type: Boolean,
      value: false,
    },
  },

  /** @private {?BrowserProxy} */
  browserProxy_: null,

  clearPasswordTextInput() {
    this.$.passwordInput.value = '';
  },

  focusPasswordTextInput() {
    this.$.passwordInput.focus();
  },

  /** @override */
  created() {
    this.browserProxy_ = BrowserProxyImpl.getInstance();
  },

  /** @override */
  attached() {
    this.browserProxy_.getProfileInfo().then((profileInfo) => {
      this.profilePhotoUrl_ = profileInfo.profilePhotoUrl;
      this.email_ = profileInfo.email;
    });
  },

  /** Overridden from UiPageContainerBehavior. */
  getCanNavigateToNextPage() {
    return new Promise((resolve) => {
      if (this.waitingForPasswordCheck_) {
        resolve(false /* canNavigate */);
        return;
      }
      this.waitingForPasswordCheck_ = true;
      this.quickUnlockPrivate_.getAuthToken(this.inputValue_, (tokenInfo) => {
        this.waitingForPasswordCheck_ = false;
        if (chrome.runtime.lastError) {
          this.passwordInvalid_ = true;
          // Select the password text if the user entered an incorrect password.
          this.$.passwordInput.select();
          resolve(false /* canNavigate */);
          return;
        }
        this.authToken = tokenInfo.token;
        this.passwordInvalid_ = false;
        resolve(true /* canNavigate */);
      });
    });
  },

  /** @private */
  onInputValueChange_() {
    this.passwordInvalid_ = false;
  },

  /**
   * @param {!Event} e
   * @private
   */
  onInputKeypress_(e) {
    // We are only listening for the user trying to enter their password.
    if (e.key !== 'Enter') {
      return;
    }

    this.fire('user-submitted-password');
  },

  /**
   * @return {boolean} Whether the forward button should be disabled.
   * @private
   */
  shouldForwardButtonBeDisabled_() {
    return this.passwordInvalid_ || !this.inputValue_ ||
        this.waitingForPasswordCheck_;
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
`iron-media-query` can be used to data bind to a CSS media query.
The `query` property is a bare CSS media query.
The `query-matches` property is a boolean representing whether the page matches
that media query.

Example:

```html
<iron-media-query query="(min-width: 600px)" query-matches="{{queryMatches}}">
</iron-media-query>
```

@group Iron Elements
@demo demo/index.html
@hero hero.svg
@element iron-media-query
*/
Polymer({

  is: 'iron-media-query',

  properties: {

    /**
     * The Boolean return value of the media query.
     */
    queryMatches: {type: Boolean, value: false, readOnly: true, notify: true},

    /**
     * The CSS media query to evaluate.
     */
    query: {type: String, observer: 'queryChanged'},

    /**
     * If true, the query attribute is assumed to be a complete media query
     * string rather than a single media feature.
     */
    full: {type: Boolean, value: false},

    /**
     * @type {function(MediaQueryList)}
     */
    _boundMQHandler: {
      value: function() {
        return this.queryHandler.bind(this);
      }
    },

    /**
     * @type {MediaQueryList}
     */
    _mq: {value: null}
  },

  attached: function() {
    this.style.display = 'none';
    this.queryChanged();
  },

  detached: function() {
    this._remove();
  },

  _add: function() {
    if (this._mq) {
      this._mq.addListener(this._boundMQHandler);
    }
  },

  _remove: function() {
    if (this._mq) {
      this._mq.removeListener(this._boundMQHandler);
    }
    this._mq = null;
  },

  queryChanged: function() {
    this._remove();
    var query = this.query;
    if (!query) {
      return;
    }
    if (!this.full && query[0] !== '(') {
      query = '(' + query + ')';
    }
    this._mq = window.matchMedia(query);
    this._add();
    this.queryHandler(this._mq);
  },

  queryHandler: function(mq) {
    this._setQueryMatches(mq.matches);
  }

});

function getTemplate$2() {
  return html`<!--_html_template_start_--><style include="multidevice-setup-shared cros-color-overrides">
  #page-icon-container {
    align-items: center;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
  }

  img {
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
  }
</style>
<ui-page header-text="[[i18nDynamic(locale, 'setupSucceededPageHeader')]]"
    icon-name="google-g">
  <span slot="message" inner-h-t-m-l="[[getMessageHtml_()]]"></span>
  <div id="page-icon-container" slot="additional-content">
    <!-- TODO(b/279667779): Remove iron-media-query and dark mode check when
                            Jelly is fully launched. -->
    <iron-media-query query="(prefers-color-scheme: dark)"
        query-matches="{{isDarkModeActive_}}">
    </iron-media-query>
    <template is="dom-if" if="[[!isJellyEnabled_]]">
      <img id="success-img" aria-hidden="true"
          srcset="[[getImageSrcSet_(isDarkModeActive_)]]">
    </template>
    <template is="dom-if" if="[[isJellyEnabled_]]">
      <svg xmlns="http://www.w3.org/2000/svg" width="520" height="320" viewBox="0 0 520 320" fill="none">
        <path d="M437.801 223.645H383.518C382.438 223.607 381.412 223.16 380.648 222.396C379.884 221.633 379.439 220.608 379.401 219.528V102.117C379.401 101.025 379.834 99.978 380.607 99.206C381.379 98.4338 382.426 98 383.518 98H437.801C438.881 98.038 439.907 98.4838 440.671 99.2479C441.435 100.012 441.88 101.037 441.918 102.117V219.376C441.918 220.481 441.49 221.546 440.723 222.342C439.954 223.138 438.907 223.606 437.801 223.645Z" fill="var(--cros-sys-illo-color1-2)" />
        <path d="M437.801 223.645H383.518C382.438 223.607 381.412 223.16 380.648 222.396C379.884 221.633 379.439 220.608 379.401 219.528V102.117C379.401 101.025 379.834 99.978 380.607 99.206C381.379 98.4338 382.426 98 383.518 98H437.801C438.881 98.038 439.907 98.4838 440.671 99.2479C441.435 100.012 441.88 101.037 441.918 102.117V219.376C441.918 220.481 441.49 221.546 440.723 222.342C439.954 223.138 438.907 223.606 437.801 223.645Z" fill="var(--cros-sys-illo-color1-2)" />
        <path d="M227.225 103.947L190.172 109.589C185.359 110.316 181.034 112.926 178.146 116.844C175.258 120.761 174.044 125.666 174.771 130.478C175.498 135.291 178.109 139.617 182.026 142.505C185.943 145.393 190.849 146.607 195.661 145.879L232.714 140.085C235.178 139.832 237.566 139.081 239.731 137.878C241.898 136.674 243.796 135.044 245.314 133.085C246.829 131.126 247.933 128.88 248.555 126.482C249.179 124.084 249.307 121.584 248.935 119.135C248.563 116.685 247.698 114.337 246.392 112.232C245.085 110.127 243.363 108.31 241.334 106.889C239.304 105.469 237.006 104.476 234.582 103.97C232.156 103.465 229.654 103.457 227.225 103.947ZM243.54 119.957C243.821 121.731 243.748 123.542 243.324 125.287C242.9 127.032 242.134 128.675 241.07 130.122C240.007 131.569 238.667 132.79 237.127 133.715C235.588 134.64 233.881 135.25 232.104 135.51L194.899 141.305C191.3 141.851 187.631 140.944 184.699 138.785C181.769 136.626 179.815 133.391 179.269 129.792C178.723 126.193 179.629 122.524 181.788 119.593C183.947 116.662 187.183 114.709 190.782 114.163L227.987 108.369C231.586 107.845 235.245 108.772 238.162 110.945C241.078 113.117 243.013 116.359 243.54 119.957Z" fill="var(--cros-sys-illo-color4)" />
        <path d="M283.338 115.077C284.963 114.833 286.445 114.014 287.517 112.769C288.589 111.523 289.179 109.935 289.179 108.292C289.179 106.649 288.589 105.06 287.517 103.815C286.445 102.57 284.963 101.751 283.338 101.506C282.362 101.36 281.365 101.425 280.416 101.699C279.468 101.973 278.589 102.448 277.841 103.092C277.092 103.736 276.493 104.534 276.081 105.431C275.669 106.329 275.456 107.304 275.456 108.292C275.456 109.279 275.669 110.255 276.081 111.152C276.493 112.05 277.092 112.848 277.841 113.492C278.589 114.136 279.468 114.611 280.416 114.885C281.365 115.158 282.362 115.224 283.338 115.077Z" fill="var(--cros-sys-illo-color2)" />
        <path d="M194.136 126.362L142.445 140.39C142.214 140.425 141.997 140.525 141.821 140.68C141.645 140.834 141.518 141.036 141.453 141.261C141.389 141.486 141.391 141.725 141.459 141.949C141.526 142.173 141.657 142.373 141.835 142.525L179.955 180.341C180.126 180.473 180.326 180.565 180.538 180.606C180.751 180.647 180.969 180.638 181.178 180.579C181.386 180.519 181.578 180.411 181.736 180.264C181.895 180.117 182.015 179.934 182.09 179.731L195.813 127.886C195.844 127.665 195.821 127.44 195.745 127.23C195.669 127.02 195.542 126.831 195.377 126.681C195.213 126.531 195.013 126.423 194.796 126.367C194.58 126.312 194.353 126.31 194.136 126.362Z" fill="var(--cros-sys-illo-color3)" />
        <path d="M379.401 146.031C374.198 146.267 369.11 144.461 365.22 141L360.036 136.425L357.749 134.595L355.919 133.528C353.94 132.508 351.779 131.892 349.559 131.716C347.34 131.54 345.108 131.808 342.993 132.503C340.878 133.198 338.923 134.308 337.241 135.767C335.561 137.226 334.186 139.004 333.199 141C331.221 145.011 330.897 149.637 332.293 153.887C333.692 158.135 336.699 161.665 340.671 163.72L342.653 164.482H342.805L345.55 165.245L352.259 166.617C357.434 167.788 361.963 170.899 364.915 175.309L368.27 180.34C369.197 181.972 370.215 183.55 371.319 185.067C373.572 187.626 376.322 189.701 379.401 191.167" fill="var(--cros-sys-illo-color1-2)" />
        <path d="M379.401 191.32L381.078 192.082C386.86 194.238 393.248 194.108 398.938 191.718C404.629 189.328 409.193 184.857 411.701 179.219C414.211 173.58 414.473 167.197 412.439 161.369C410.403 155.543 406.222 150.712 400.748 147.862C396.055 145.616 390.784 144.87 385.653 145.727L379.706 146.032H379.401" fill="var(--cros-sys-illo-color1)" />
        <path d="M332.589 114.163C327.643 114.163 322.809 115.63 318.697 118.378C314.584 121.125 311.379 125.031 309.485 129.6C307.593 134.17 307.097 139.198 308.063 144.049C309.028 148.9 311.41 153.355 314.906 156.852C318.404 160.35 322.859 162.732 327.711 163.696C332.562 164.661 337.589 164.165 342.159 162.273C346.729 160.381 350.634 157.176 353.382 153.063C356.129 148.951 357.596 144.116 357.596 139.17C357.596 135.886 356.95 132.634 355.693 129.6C354.435 126.566 352.593 123.81 350.272 121.488C347.95 119.165 345.193 117.323 342.159 116.067C339.125 114.81 335.874 114.163 332.589 114.163ZM332.589 118.738C336.63 118.738 340.581 119.936 343.941 122.181C347.301 124.426 349.92 127.617 351.466 131.351C353.013 135.084 353.418 139.193 352.63 143.156C351.84 147.12 349.894 150.761 347.037 153.618C344.179 156.476 340.54 158.422 336.575 159.21C332.612 159.998 328.504 159.594 324.77 158.046C321.037 156.5 317.846 153.882 315.6 150.521C313.355 147.162 312.157 143.211 312.157 139.17C312.157 133.751 314.31 128.554 318.142 124.722C321.973 120.89 327.17 118.738 332.589 118.738Z" fill="var(--cros-sys-illo-color1)" />
        <path d="M418.284 104.099C418.458 104.097 418.63 104.133 418.788 104.204C418.947 104.274 419.089 104.378 419.205 104.508C419.321 104.638 419.407 104.791 419.458 104.957C419.51 105.123 419.525 105.299 419.504 105.471C419.507 105.77 419.398 106.059 419.202 106.284C419.005 106.509 418.732 106.653 418.436 106.691H406.39C406.078 106.658 405.786 106.519 405.565 106.297C405.343 106.075 405.204 105.783 405.17 105.471C405.187 105.161 405.298 104.863 405.489 104.618C405.68 104.373 405.942 104.191 406.238 104.099H418.284Z" fill="var(--cros-sys-illo-color1)" />
        <path d="M399.834 106.996C400.238 106.996 400.626 106.836 400.912 106.55C401.198 106.264 401.358 105.876 401.358 105.471C401.383 105.265 401.36 105.056 401.293 104.86C401.224 104.664 401.113 104.486 400.966 104.339C400.819 104.192 400.642 104.081 400.445 104.013C400.248 103.945 400.039 103.922 399.834 103.947C399.429 103.947 399.041 104.107 398.755 104.393C398.469 104.679 398.309 105.067 398.309 105.471C398.344 105.864 398.515 106.232 398.794 106.511C399.073 106.79 399.44 106.962 399.834 106.996Z" fill="var(--cros-sys-illo-color1)" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M351.649 132.003C353.144 132.282 354.586 132.797 355.919 133.528L356.986 134.138C357.415 135.781 357.619 137.473 357.596 139.17C357.592 144.548 355.855 149.782 352.64 154.094C349.426 158.406 344.908 161.569 339.756 163.11C338.088 162.145 336.593 160.909 335.334 159.451C340.225 158.755 344.704 156.323 347.95 152.6C351.198 148.877 352.997 144.11 353.022 139.17C353.023 136.716 352.557 134.284 351.649 132.003Z" fill="var(--cros-sys-illo-base)" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M179.041 130.479C179.65 133.555 181.274 136.338 183.652 138.383C186.027 140.428 189.022 141.618 192.154 141.763L191.087 145.575C187.319 145.205 183.766 143.647 180.943 141.125C178.12 138.603 176.172 135.248 175.381 131.546L179.041 130.479Z" fill="var(--cros-sys-illo-base)" />
        <path d="M98.8354 161.432C104.866 159.311 111.478 159.564 117.328 162.143C123.178 164.721 127.827 169.428 130.331 175.311C132.835 181.192 133.007 187.807 130.81 193.81C128.614 199.813 124.214 204.757 118.506 207.634C116.916 208.535 115.227 209.252 113.474 209.769" fill="var(--cros-sys-illo-color5)" />
        <path d="M87.0944 117.823L117.438 221.053L222.04 219.681V225.628L115.151 227C114.543 226.999 113.952 226.806 113.459 226.451C112.966 226.096 112.598 225.594 112.406 225.018L81.4526 119.5L87.0944 117.823Z" fill="var(--cros-sys-illo-color1)" />
      </svg>
    </template>
  </div>
</ui-page>
<!--_html_template_end_-->`;
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


/**
 * TODO(b/279667779): Remove when Jelly is fully launched.
 * @type {string}
 */
const SRC_SET_URL_1_LIGHT =
    'chrome://resources/ash/common/multidevice_setup/all_set_1x_light.svg';

/**
 * TODO(b/279667779): Remove when Jelly is fully launched.
 * @type {string}
 */
const SRC_SET_URL_2_LIGHT =
    'chrome://resources/ash/common/multidevice_setup/all_set_2x_light.svg';

/**
 * TODO(b/279667779): Remove when Jelly is fully launched.
 * @type {string}
 */
const SRC_SET_URL_1_DARK =
    'chrome://resources/ash/common/multidevice_setup/all_set_1x_dark.svg';

/**
 * TODO(b/279667779): Remove when Jelly is fully launched.
 * @type {string}
 */
const SRC_SET_URL_2_DARK =
    'chrome://resources/ash/common/multidevice_setup/all_set_2x_dark.svg';

Polymer({
  _template: getTemplate$2(),
  is: 'setup-succeeded-page',

  properties: {
    /** Overridden from UiPageContainerBehavior. */
    forwardButtonTextId: {
      type: String,
      value: 'done',
    },

    /**
     * Whether the multidevice success page is being rendered in dark mode.
     * TODO(b/279667779): Remove when Jelly is fully launched.
     * @private {boolean}
     */
    isDarkModeActive_: {
      type: Boolean,
      value: false,
    },

    /**
     * Whether the multidevice setup page is being rendered with dynamic colors.
     * @private {boolean}
     */
    isJellyEnabled_: {
      type: Boolean,
      value() {
        return loadTimeData.valueExists('isJellyEnabled') &&
            loadTimeData.getBoolean('isJellyEnabled');
      },
    },
  },

  behaviors: [UiPageContainerBehavior],

  /** @private {?BrowserProxy} */
  browserProxy_: null,

  /** @override */
  created() {
    this.browserProxy_ = BrowserProxyImpl.getInstance();
  },

  /** @private */
  openSettings_() {
    this.browserProxy_.openMultiDeviceSettings();
  },

  /** @private */
  onSettingsLinkClicked_() {
    this.openSettings_();
    this.fire('setup-exited');
  },

  /** @private */
  getMessageHtml_() {
    return this.i18nAdvanced('setupSucceededPageMessage', {attrs: ['id']});
  },

  /** @override */
  ready() {
    const linkElement = this.$$('#settings-link');
    linkElement.setAttribute('href', '#');
    linkElement.addEventListener('click', () => this.onSettingsLinkClicked_());
  },

  /**
   * Returns source set for images based on if the page is rendered in dark
   * mode.
   * TODO(b/279667779): Remove when Jelly is fully launched.
   * @return {string}
   * @private
   */
  getImageSrcSet_() {
    return this.isDarkModeActive_ ?
        SRC_SET_URL_1_DARK + ' 1x, ' + SRC_SET_URL_2_DARK + ' 2x' :
        SRC_SET_URL_1_LIGHT + ' 1x, ' + SRC_SET_URL_2_LIGHT + ' 2x';
  },
});

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


/** @implements {MojoInterfaceProvider} */
class MojoInterfaceProviderImpl {
  constructor() {
    /** @private {?MultiDeviceSetupRemote} */
    this.remote_ = null;
  }

  /** @override */
  getMojoServiceRemote() {
    if (!this.remote_) {
      this.remote_ = MultiDeviceSetup.getRemote();
    }

    return this.remote_;
  }

  /** @return {!MojoInterfaceProvider} */
  static getInstance() {
    return instance$1 || (instance$1 = new MojoInterfaceProviderImpl());
  }

  /** @param {!MojoInterfaceProvider} obj */
  static setInstance(obj) {
    instance$1 = obj;
  }
}

/** @type {?MojoInterfaceProvider} */
let instance$1 = null;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Returns a Promise that resolves after the given `event` has been triggered
 * on the `target`.
 */
async function waitForEvent(target, event) {
    return new Promise(resolve => void target.addEventListener(event, resolve, { once: true, passive: true }));
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @fileoverview A set of chromium safe helper functions. Many of these exist
 * in google3 already but we reimplement so they can also be imported in
 * chromium.
 */
/**
 * Asserts that `arg` is not null or undefined and informs typescript of this so
 * that code that runs after this check will know `arg` is not null. If `arg` is
 * null, throws an error with `msg`.
 *
 * NOTE: unlike the internal counterpart this ALWAYS throws an error when given
 * null or undefined. This is not compiled out for prod.
 */
function assertExists(arg, msg) {
    if (!arg) {
        throw new Error(`Assertion Error: ${msg}`);
    }
}
/** Converts a given hex string to a [r, g, b] array. */
function hexToRgb(hexString) {
    const rHex = hexString.substring(1, 3);
    const gHex = hexString.substring(3, 5);
    const bHex = hexString.substring(5, 7);
    return [
        Number(`0x${rHex}`),
        Number(`0x${gHex}`),
        Number(`0x${bHex}`),
    ];
}

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

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @fileoverview The event binding code used when lottie-renderer is running in
 * chromium. NOTE this is in a sub folder so automatic build tools don't keep
 * trying to add cr_worker into ts_library rules. This file must never actually
 * get compiled in google3 because it's not correct code in google3. It only
 * works when in web ui in chromium.
 */
/**
 * Registers `listener` to be called everytime the current color scheme
 * changes.
 */
function addColorSchemeChangeListener(listener) {
    ColorChangeUpdater.forDocument().eventTarget.addEventListener(COLOR_PROVIDER_CHANGED, listener);
}
/**
 * Unregisters a `listener` previously registered with
 * `addColorSchemeChangeListener`.
 */
function removeColorSchemeChangeListener(listener) {
    ColorChangeUpdater.forDocument().eventTarget.removeEventListener(COLOR_PROVIDER_CHANGED, listener);
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @fileoverview The worker insantiation code used when lottie-renderer is
 * running in chromium. NOTE this is in a sub folder so automatic build tools
 * don't keep trying to add cr_worker into ts_library rules. This file must
 * never actually get compiled in google3 because it creates a worker in a
 * unsafe way. This is fine in chromium however.
 */
let workerLoaderPolicy = null;
function getLottieWorkerURL() {
    if (workerLoaderPolicy === null) {
        workerLoaderPolicy =
            window.trustedTypes.createPolicy('cros-lottie-worker-script-loader', {
                createScriptURL: (_ignore) => {
                    const script = `import 'chrome://resources/cros_components/lottie_renderer/lottie_worker.js';`;
                    // CORS blocks loading worker script from a different origin, even
                    // if chrome://resources/ is added in the 'worker-src' CSP header.
                    // (see https://crbug.com/1385477). Loading scripts as blob and then
                    // instantiating it as web worker is possible.
                    const blob = new Blob([script], { type: 'text/javascript' });
                    return URL.createObjectURL(blob);
                },
                createHTML: () => {
                    throw new Error('Not Allowed.');
                },
                createScript: () => {
                    throw new Error('Not Allowed.');
                },
            });
    }
    return workerLoaderPolicy.createScriptURL('');
}
/** Construct a lottie web worker and return it. */
function defaultGetWorker() {
    return new Worker(getLottieWorkerURL(), { type: 'module' });
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * The list of tokens that are used to identify shapes and colors in Lottie
 * animation data. If token names change, we will need to update this set.
 * Existing token names are very unlikely to change, it's more likely that new
 * tokens may be added if illustration palettes become more complex. There
 * is currently no easy way to generate this list in Google3, and as a small
 * set it can be manually maintained, but in future a more robust solution may
 * be needed. See go/cros-tokens (internal).
 */
const CROS_TOKENS = new Set([
    'cros.sys.illo.color1',
    'cros.sys.illo.color1.1',
    'cros.sys.illo.color1.2',
    'cros.sys.illo.color2',
    'cros.sys.illo.color3',
    'cros.sys.illo.color4',
    'cros.sys.illo.color5',
    'cros.sys.illo.color6',
    'cros.sys.illo.base',
    'cros.sys.illo.secondary',
    /**
     * These are colors outside of the standard illo palette. Some animations
     * need to modify the base background color depending on the surface so
     * contain tokens for app base, card color etc,
     */
    'cros.sys.app_base',
    'cros.sys.app_base_shaded',
    'cros.sys.app_base_elevated',
    'cros.sys.illo.card.color4',
    'cros.sys.illo.card.on_color4',
    'cros.sys.illo.card.color3',
    'cros.sys.illo.card.on_color3',
    'cros.sys.illo.card.color2',
    'cros.sys.illo.card.on_color2',
    'cros.sys.illo.card.color1',
    'cros.sys.illo.card.on_color1',
]);
/** String variant of the name field used for comparison during parsing. */
const LOTTIE_NAME_KEY = 'nm';
/** The CustomEvent names that LottieRenderer can fire. */
var CrosLottieEvent;
(function (CrosLottieEvent) {
    CrosLottieEvent["INITIALIZED"] = "cros-lottie-initialized";
    CrosLottieEvent["PAUSED"] = "cros-lottie-paused";
    CrosLottieEvent["PLAYING"] = "cros-lottie-playing";
    CrosLottieEvent["RESIZED"] = "cros-lottie-resized";
    CrosLottieEvent["STOPPED"] = "cros-lottie-stopped";
})(CrosLottieEvent || (CrosLottieEvent = {}));
/**
 * Helper function for converting between the hexadecimal string we get from the
 * computed style to the format that lottie expects, which is an array of four
 * floats. Since these come directly from the computed style and color pipeline,
 * we can be confident that we are only going to be parsing 8 digit hexadecimal
 * strings.
 */
function convertHexToLottieRGBA(hexString) {
    let r;
    let g;
    let b;
    let alpha;
    if (hexString.length === 9) {
        // Assume #rrggbbaa format.
        const hexRgb = hexString.slice(0, -2);
        const alphaString = hexString.slice(-2);
        [r, g, b] = hexToRgb(hexRgb);
        alpha = Number(`0x${alphaString}`);
    }
    else {
        // Assume #rrggbb format.
        [r, g, b] = hexToRgb(hexString);
        alpha = 255;
    }
    return [r / 255, g / 255, b / 255, alpha / 255];
}
/**
 * Takes in a cros token and returns the corresponding css variable.
 * Eg: cros.sys.illo.base -> --cros-sys-illo-base.
 */
function convertTokenToCssVariable(token) {
    return `--${(token).replaceAll('.', '-')}`;
}
/**
 * Traverses through a jsonObject, looking for known keys and tokens, and
 * saving them in the `shapes` map.
 */
function traverse(jsonObj, shapes) {
    if (jsonObj === null || typeof jsonObj !== 'object')
        return;
    for (const [key, value] of Object.entries(jsonObj)) {
        // If we are looking at something that contains a "nm" field that is set to
        // one of the known illustration tokens, this is a LottieShape that needs to
        // have its color value set.
        if (key === LOTTIE_NAME_KEY && CROS_TOKENS.has(value)) {
            const tokenName = value;
            if (!shapes.has(tokenName)) {
                shapes.set(tokenName, { cssVar: convertTokenToCssVariable(tokenName), locations: [] });
            }
            const color = shapes.get(tokenName);
            const shape = jsonObj;
            color.locations.push(shape);
        }
        traverse(value, shapes);
    }
}
/**
 * Lottie renderer with correct hooks to handle dynamic color. This component
 * should only be used for dynamic illustrations, as it involves spinning up an
 * instance of the Lottie library on a worker thread. For static illustrations,
 * it is more performant to use <cros-static-illustration>.
 */
class LottieRenderer extends LitElement {
    /** The onscreen canvas controlled by lottie_worker.js. */
    get onscreenCanvas() {
        return this.renderRoot.querySelector('#onscreen-canvas');
    }
    /** @nocollapse */
    static { this.styles = css `
    :host {
      display: block;
    }

    canvas {
      height: 100%;
      width: 100%;
    }
  `; }
    /** @nocollapse */
    static { this.properties = {
        assetUrl: { type: String, attribute: 'asset-url' },
        autoplay: { type: Boolean, attribute: true },
        loop: { type: Boolean, attribute: true },
        dynamic: { type: Boolean, attribute: true },
    }; }
    constructor() {
        super();
        /**
         * Function which returns a web worker loaded up with lottie worker js.
         * If unspecified in chromium defaults to a standard web worker pulling from
         * "chrome://resources/cros_components/lottie_renderer/lottie_worker.js". If
         * unspecified in google3 defaults to a standard web worker pulling from
         * "/js/lottie_worker.js".
         * Must be set before attaching lottieRenderer to the DOM:
         *   const renderer = new LottieRenderer();
         *   renderer.getWorker = myCustomGetWorker();
         *   document.body.append(renderer);
         * @export
         */
        this.getWorker = defaultGetWorker;
        /**
         * Temporary public API to ensure component color resolution works.
         * TODO: b/274998765 - Remove legacy usages of this function and then make
         * private.
         */
        this.onColorSchemeChanged = () => {
            if (!this.dynamic)
                return;
            this.refreshAnimationColors();
        };
        /** The worker thread running the lottie library. */
        this.worker = null;
        this.offscreenCanvas = null;
        /** If the offscreen canvas has been transferred to the Worker thread. */
        this.hasTransferredCanvas = false;
        /**
         * Animations are loaded asynchronously, the worker will send an event when
         * it has finished loading.
         */
        this.animationIsLoaded = false;
        /**
         * If the canvas is resized before an animation has finished initializing,
         * we wait and send the size once it's loaded fully into the worker.
         */
        this.workerNeedsSizeUpdate = false;
        /**
         * If there is a control command (play, pause, stop) before the animation has
         * finished initializing, it should be queued and completed after successful
         * initializaton.
         */
        this.workerNeedsControlUpdate = false;
        this.playStateInternal = false;
        /**
         * Propagates resize events from the onscreen canvas to the offscreen one.
         */
        this.resizeObserver = null;
        /**
         * A copy of this.assetUrl that has the color token CSS variables replaced
         * with the hardcoded color strings based on the current color scheme.
         */
        this.animationData = null;
        /**
         * Map from token name to a TokenColor. The TokenColor contains the CSS
         * variable name for the token, as well as a list of references to Lottie
         * animation sub objects, which need to be updated every time the color scheme
         * changes to avoid retraversing the JSON.
         */
        this.colors = new Map();
        this.assetUrl = '';
        this.autoplay = true;
        this.loop = true;
        // Once all apps are launching with dynamic colors, we can default this to
        // true, or remove this attribute altogether.
        this.dynamic = false;
    }
    connectedCallback() {
        super.connectedCallback();
        if (!this.worker) {
            this.worker = this.getWorker();
            this.worker.onmessage = (e) => void this.onMessage(e);
        }
        addColorSchemeChangeListener(this.onColorSchemeChanged);
    }
    firstUpdated() {
        assertExists(this.onscreenCanvas, 'Could not find <cavas> element in lottie-renderer');
        this.resizeObserver =
            new ResizeObserver(this.onCanvasElementResized.bind(this));
        this.resizeObserver.observe(this.onscreenCanvas);
        this.offscreenCanvas = this.onscreenCanvas.transferControlToOffscreen();
        this.initAnimation();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.worker) {
            this.worker.terminate();
            this.worker = null;
        }
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
        removeColorSchemeChangeListener(this.onColorSchemeChanged);
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const prop = changedProperties.get('assetUrl');
        if (this.assetUrl && prop !== undefined && this.worker) {
            this.assetUrlChanged();
        }
    }
    render() {
        return html$1 `
        <canvas id='onscreen-canvas'></canvas>
      `;
    }
    /**
     * Play the current animation, and wait for a successful response from the
     * worker thread. This promise will also wait until animation initialization
     * has completed before resolving.
     */
    async play() {
        return this.setPlayState(true, CrosLottieEvent.PLAYING);
    }
    /**
     * Pause the current animation, and wait for a successful response from the
     * worker thread. This promise will also wait until animation initialization
     * has completed before resolving.
     */
    async pause() {
        return this.setPlayState(false, CrosLottieEvent.PAUSED);
    }
    /**
     * Stop the current animation, and wait for a successful response from the
     * worker thread. Stopping the animation resets it to it's first frame, and
     * pauses it, so there's no need to wait for initialization.
     */
    async stop() {
        assertExists(this.worker, 'lottie-renderer has no web worker.');
        this.worker.postMessage({ control: { stop: true } });
        return waitForEvent(this, CrosLottieEvent.STOPPED);
    }
    async refreshAnimationColors() {
        // We must await update here to ensure the computed style will be up to date
        // with the new color scheme.
        // TODO: b/274998765 - Investigate if this can be removed when using events.
        this.requestUpdate();
        await this.updateComplete;
        if (!this.animationData) {
            console.info('Refresh animation colors failed: No animation data.');
            return;
        }
        this.updateColorsInAnimationData();
        this.sendAnimationToWorker(this.animationData);
    }
    sendAnimationToWorker(animationData) {
        // There are some edge cases where the renderer has been removed from the
        // DOM in between initialization and this function running, which causes
        // the worker to have been terminated. In these cases, we can just early
        // exit without attempting to send anything to the worker.
        if (!this.worker) {
            console.info('lottie-renderer has no web worker.');
            return;
        }
        const animationConfig = ({
            animationData,
            drawSize: this.getCanvasDrawBufferSize(),
            params: {
                loop: this.loop,
                autoplay: this.autoplay,
            },
        });
        // The offscreen canvas can only be transferred across to the WebWorker
        // once, when we first initialize an animation. On subsequent
        // initializations (such as when the asset URL has changed), we avoid
        // re-transferring the canvas and just send across the animation data.
        if (this.hasTransferredCanvas) {
            this.worker.postMessage(animationConfig);
            return;
        }
        this.worker.postMessage({ ...animationConfig, canvas: this.offscreenCanvas }, [this.offscreenCanvas]);
        this.hasTransferredCanvas = true;
    }
    /**
     * Load the animation data from `assetUrl` and begin the color token
     * resolution work. If no `assetUrl` was provided, we don't need to try and
     * fetch or send anything to the worker.
     */
    async initAnimation() {
        if (!this.assetUrl) {
            console.info('No assetUrl provided.');
            return;
        }
        try {
            // In chromium you are not allowed to use `fetch` with `chrome://` URLs,
            // as such we use XMLHttpRequest here.
            this.animationData = await new Promise((resolve, reject) => {
                const req = new XMLHttpRequest();
                req.responseType = 'json';
                req.open('GET', this.assetUrl, true);
                req.onload = () => {
                    resolve(req.response);
                };
                req.onerror = (err) => {
                    reject(err);
                };
                req.send(null);
            });
        }
        catch (error) {
            console.info(`Unable to load JSON from ${this.assetUrl}`, error);
        }
        if (!this.animationData) {
            console.info('cros-lottie-renderer fetched null animation data');
            return;
        }
        // For apps using this component without the Jelly flag, they should ignore
        // the dynamic palette and just use the GM2 colors that are inside the
        // JSON file itself. This means we can skip populating the color map with
        // values, which means `updateColorsInAnimationData` will be a no-op.
        if (this.dynamic) {
            this.colors.clear();
            // When the animation is first loaded, it needs to be traversed via DFS to
            // find all shapes that are mapped to tokens, as these will need to
            // receive color updates. `colors` is the internal list of all known
            // shapes, and will be modified by this function.
            traverse(this.animationData, this.colors);
            if (this.colors.size === 0) {
                console.warn(`Unable to find cros.sys.illo tokens in ${this.assetUrl}. Please ` +
                    `ensure this animation file has been run through the VisD token ` +
                    `resolution script.`);
            }
        }
        this.updateColorsInAnimationData();
        this.sendAnimationToWorker(this.animationData);
    }
    /**
     * Go through the known list of shapes in the animation data that need to have
     * their colors updated, and use the current computed style to ensure they
     * match the current color scheme.
     */
    updateColorsInAnimationData() {
        const computedStyle = getComputedStyle(this);
        for (const color of this.colors.values()) {
            const computedColor = computedStyle.getPropertyValue(color.cssVar).trim();
            const colorArray = convertHexToLottieRGBA(computedColor);
            for (const location of color.locations) {
                if (location.c) {
                    location.c.k = colorArray;
                }
                else if (location.sc) {
                    location.sc = computedColor;
                }
                else {
                    console.info(`Unable to assign color to shape: ${JSON.stringify(location)}`);
                }
            }
        }
    }
    async assetUrlChanged() {
        assertExists(this.worker, 'lottie-renderer has no web worker.');
        // If we have an already loaded animation, stop it from playing and
        // reinitialize.
        if (this.animationIsLoaded) {
            await this.stop();
        }
        await this.initAnimation();
    }
    /**
     * Computes the draw buffer size for the canvas. This ensures that the
     * rasterization is crisp and sharp rather than blurry.
     */
    getCanvasDrawBufferSize() {
        const devicePixelRatio = window.devicePixelRatio;
        const clientRect = this.onscreenCanvas.getBoundingClientRect();
        const drawSize = {
            width: clientRect.width * devicePixelRatio,
            height: clientRect.height * devicePixelRatio,
        };
        return drawSize;
    }
    /**
     * Handles the canvas element resize event. If the animation isn't fully
     * loaded, the canvas size is sent later, once the loading is done.
     */
    onCanvasElementResized() {
        if (!this.animationIsLoaded) {
            this.workerNeedsSizeUpdate = true;
            return;
        }
        this.sendCanvasSizeToWorker();
    }
    sendCanvasSizeToWorker() {
        assertExists(this.worker, 'lottie-renderer has no web worker.');
        this.worker.postMessage({ drawSize: this.getCanvasDrawBufferSize() });
    }
    setPlayState(play, expectedEvent) {
        this.playStateInternal = play;
        if (!this.animationIsLoaded) {
            this.workerNeedsControlUpdate = true;
        }
        else {
            this.sendPlayControlToWorker();
        }
        return waitForEvent(this, expectedEvent);
    }
    sendPlayControlToWorker() {
        assertExists(this.worker, 'lottie-renderer has no web worker.');
        this.worker.postMessage({ control: { play: this.playStateInternal } });
    }
    onMessage(event) {
        const message = event.data.name;
        switch (message) {
            case 'initialized':
                this.animationIsLoaded = true;
                this.fire(CrosLottieEvent.INITIALIZED);
                this.sendPendingInfo();
                break;
            case 'playing':
                this.fire(CrosLottieEvent.PLAYING);
                break;
            case 'paused':
                this.fire(CrosLottieEvent.PAUSED);
                break;
            case 'stopped':
                this.fire(CrosLottieEvent.STOPPED);
                break;
            case 'resized':
                this.fire(CrosLottieEvent.RESIZED, event.data.size);
                break;
            default:
                console.warn(`unknown message type received: ${message}`);
                break;
        }
    }
    fire(event, detail = null) {
        this.dispatchEvent(new CustomEvent(event, { bubbles: true, composed: true, detail }));
    }
    /**
     * Called once the animation is fully loaded into the worker. Sends any
     * size or control information that may have arrived while the animation
     * was not yet fully loaded.
     */
    sendPendingInfo() {
        if (this.workerNeedsSizeUpdate) {
            this.workerNeedsSizeUpdate = false;
            this.sendCanvasSizeToWorker();
        }
        if (this.workerNeedsControlUpdate) {
            this.workerNeedsControlUpdate = false;
            this.sendPlayControlToWorker();
        }
    }
}
customElements.define('cros-lottie-renderer', LottieRenderer);

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



/** @polymerBehavior */
// eslint-disable-next-line no-var
var WebUIListenerBehavior = {
  properties: {
    /**
     * Holds WebUI listeners that need to be removed when this element is
     * destroyed.
     * @private {!Array<!WebUIListener>}
     */
    webUIListeners_: {
      type: Array,
      value() {
        return [];
      },
    },
  },

  /**
   * Adds a WebUI listener and registers it for automatic removal when this
   * element is detached.
   * Note: Do not use this method if you intend to remove this listener
   * manually (use addWebUIListener directly instead).
   *
   * @param {string} eventName The event to listen to.
   * @param {!Function} callback The callback run when the event is fired.
   */
  addWebUIListener(eventName, callback) {
    this.webUIListeners_.push(addWebUIListener(eventName, callback));
  },

  /** @override */
  detached() {
    while (this.webUIListeners_.length > 0) {
      removeWebUIListener(this.webUIListeners_.pop());
    }
  },
};

function getTemplate$1() {
  return html`<!--_html_template_start_--><style include="multidevice-setup-shared">
  #multidevice-summary-message a {
    display: inline-block;
  }

  #singleDeviceName {
    color: var(--cros-text-color-primary);
  }

  .offline-device-name {
    color: var(--cros-text-color-secondary);
  }

  :host-context(body.jelly-enabled) #singleDeviceName,
                                    .offline-device-name {
    font: var(--cros-body-2-font);
    font-family: var(--cros-font-family-google-sans);
  }

  #animation-container {
    padding-top: 16px;
  }

  :host-context([orientation=horizontal]) #animation-container {
    height: 172px;
    transform: translateX(-20px);
  }

  :host-context([orientation=vertical]) #animation-container {
    margin-bottom: -20px;
  }

  .footnote {
    padding-top: 16px;
  }

  #deviceSelectionContainer {
    display: flex;
    flex-direction: column;
  }

  #deviceDropdown {
    margin-top: 8px;
  }

  #singleDeviceName {
    margin-top: 8px;
  }

  .feature-detail {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    min-height: 48px;
    padding: 12px 0;
  }

  #feature-details-container-header {
    margin-bottom: 16px;
  }

  :host-context([orientation=horizontal]) #additional-content-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  #feature-details-container {
    color: var(--cros-text-color-primary);
    padding-top: 40px;
  }

  :host-context(body.jelly-enabled) #feature-details-container {
    font: var(--cros-body-1-font);
    font-family: var(--cros-font-family-google-sans);
  }

  .feature-detail:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }

  .feature-detail iron-icon {
    --iron-icon-fill-color: var(--cros-icon-color-prominent);
    --iron-icon-height: 20px;
    --iron-icon-width: 20px;
    min-width: 20px;
    padding: 0 20px;
  }

  /* Hide the animation when not enough space in vertical mode. */
  @media screen and (max-height: 1048px) {
    :host-context([orientation=vertical][screen=oobe])
        #animation-container {
      display: none;
    }
  }

  @media screen and (max-height: 832px) {
    :host-context([orientation=vertical][screen=gaia-signin])
        #animation-container {
      display: none;
    }
  }
</style>

<ui-page header-text="[[i18nDynamic(locale, headerTextId)]]"
    icon-name="google-g">
  <span slot="message" id="multidevice-summary-message" inner-h-t-m-l=
      "[[i18nAdvancedDynamic_(locale, 'startSetupPageMessage')]]">
  </span>
  <span slot="message">
    <div id="animation-container">
      <!-- TODO(b/279667779): Remove iron-media-query and dark mode check when
                              Jelly is fully launched. -->
      <iron-media-query query="(prefers-color-scheme: dark)"
          query-matches="{{isDarkModeActive_}}">
      </iron-media-query>
      <cros-lottie-renderer id="multideviceSetupAnimation"
          asset-url="[[getAnimationUrl_(isDarkModeActive_, isJellyEnabled_)]]"
          autoplay="true" dynamic="true" aria-hidden="true">
      </cros-lottie-renderer>
    </div>
  </span>
  <div id="additional-content-container" slot="additional-content"
      class="flex">
    <div id="selector-and-details-container">
      <div id="deviceSelectionContainer" class="flex">
        <div id="device-selection-header">
          [[getDeviceSelectionHeader_(devices)]]
        </div>
        <div id="singleDeviceName"
            hidden$="[[!doesDeviceListHaveOneElement_(devices)]]">
          [[getFirstDeviceNameInList_(devices)]]
        </div>
        <div hidden$="[[!doesDeviceListHaveMultipleElements_(devices)]]">
          <select id="deviceDropdown"
              class="md-select"
              on-change="onDeviceDropdownSelectionChanged_"
              aria-labelledby="device-selection-header">
            <template is="dom-repeat" items="[[devices]]">
              <option
                  class$="[[getDeviceOptionClass_(item.connectivityStatus)]]"
                  value$="[[getInstanceIdOrLegacyDeviceId_(item)]]">
                [[getDeviceNameWithConnectivityStatus_(item)]]
              </option>
            </template>
          </select>
        </div>
      </div>
      <div id="feature-details-container" class="flex">
        <div id="feature-details-container-header">
          [[i18nDynamic(locale, 'startSetupPageFeatureListHeader')]]
        </div>
        <template is="dom-if" if="[[wifiSyncEnabled_]]">
          <div class="feature-detail">
            <iron-icon icon="multidevice-setup-icons-20:wifi">
            </iron-icon>
            <span>
              [[i18nDynamic(locale, 'startSetupPageFeatureWifiSync')]]
            </span>
          </div>
        </template>
        <template is="dom-if" if="[[phoneHubCameraRollEnabled_]]">
          <div class="feature-detail">
            <iron-icon icon="multidevice-setup-icons-20:image">
            </iron-icon>
            <span>
              [[i18nDynamic(locale, 'startSetupPageFeatureCameraRoll')]]
            </span>
          </div>
        </template>
        <div class="feature-detail">
          <iron-icon icon="multidevice-setup-icons-20:features"></iron-icon>
          <span>
            [[i18nDynamic(locale, 'startSetupPageFeatureListAddFeatures')]]
          </span>
        </div>
      </div>
      <div class="footnote">
        [[i18nAdvancedDynamic_(locale, 'startSetupPageFootnote')]]
      </div>
    </div>
  </div>
</ui-page>
<!--_html_template_end_-->`;
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


/**
 * The multidevice setup animation for light mode.
 * TODO(b/279667779): Remove when Jelly is fully launched.
 * @type {string}
 */
const MULTIDEVICE_ANIMATION_DARK_URL =
    'chrome://resources/ash/common/multidevice_setup/multidevice_setup_dark.json';

/**
 * The multidevice setup animation for dark mode.
 * TODO(b/279667779): Remove when Jelly is fully launched.
 * @type {string}
 */
const MULTIDEVICE_ANIMATION_LIGHT_URL =
    'chrome://resources/ash/common/multidevice_setup/multidevice_setup_light.json';

/**
 * The multidevice setup animation for dynamic colors.
 * @type {string}
 */
const MULTIDEVICE_ANIMATION_JELLY_URL =
    'chrome://resources/ash/common/multidevice_setup/multidevice_setup_jelly.json';

Polymer({
  _template: getTemplate$1(),
  is: 'start-setup-page',

  properties: {
    /* The localized loadTimeData string for the
     * StartSetupPage header text, dependent on whether
     * a user is on OOBE and previously connected their phone during Quick
     * Start.
     * */
    headerTextId: {
      type: String,
      value: 'startSetupPageHeader',
      notify: true,
    },

    /** Overridden from UiPageContainerBehavior. */
    forwardButtonTextId: {
      type: String,
      value: 'accept',
    },

    /** Overridden from UiPageContainerBehavior. */
    cancelButtonTextId: {
      type: String,
      computed: 'getCancelButtonTextId_(delegate)',
    },

    /**
     * Array of objects representing all potential MultiDevice hosts.
     *
     * @type {!Array<!HostDevice>}
     */
    devices: {
      type: Array,
      value: () => [],
      observer: 'devicesChanged_',
    },

    /**
     * Unique identifier for the currently selected host device. This uses the
     * device's Instance ID if it is available; otherwise, the device's legacy
     * device ID is used.
     * TODO(https://crbug.com/1019206): When v1 DeviceSync is turned off, only
     * use Instance ID since all devices are guaranteed to have one.
     *
     * Undefined if the no list of potential hosts has been received from mojo
     * service.
     *
     * @type {string|undefined}
     */
    selectedInstanceIdOrLegacyDeviceId: {
      type: String,
      notify: true,
    },

    /**
     * Delegate object which performs differently in OOBE vs. non-OOBE mode.
     * @type {!MultiDeviceSetupDelegate}
     */
    delegate: Object,

    /** @private */
    wifiSyncEnabled_: {
      type: Boolean,
      value() {
        return loadTimeData.valueExists('wifiSyncEnabled') &&
            loadTimeData.getBoolean('wifiSyncEnabled');
      },
    },

    /** @private */
    phoneHubCameraRollEnabled_: {
      type: Boolean,
      value() {
        return loadTimeData.valueExists('phoneHubCameraRollEnabled') &&
            loadTimeData.getBoolean('phoneHubCameraRollEnabled');
      },
    },

    /**
     * Whether the multidevice setup page is being rendered in dark mode.
     * TODO(b/279667779): Remove when Jelly is fully launched.
     * @private {boolean}
     */
    isDarkModeActive_: {
      type: Boolean,
      value: false,
    },

    /**
     * Whether the multidevice setup page is being rendered with dynamic colors.
     * @private {boolean}
     */
    isJellyEnabled_: {
      type: Boolean,
      value() {
        return loadTimeData.valueExists('isJellyEnabled') &&
            loadTimeData.getBoolean('isJellyEnabled');
      },
    },

    /**
     * ID of phone a user used to complete Quick Start earlier in OOBE flow.
     * @private {string|undefined}
     */
    quickStartPhoneInstanceId_: String,

    /**
     * Provider of an interface to the MultiDeviceSetup Mojo service.
     * @private {!MojoInterfaceProvider}
     */
    mojoInterfaceProvider_: Object,
  },

  behaviors: [
    UiPageContainerBehavior,
    WebUIListenerBehavior,
  ],

  /** @override */
  created() {
    this.mojoInterfaceProvider_ = MojoInterfaceProviderImpl.getInstance();
  },

  /** @override */
  attached() {
    this.addWebUIListener(
        'multidevice_setup.initializeSetupFlow',
        () => this.initializeSetupFlow_());

    this.addAccessibilityLabel_();
  },

  /**
   * This will play or stop the screen's lottie animation.
   * @param {boolean} enabled Whether the animation should play or not.
   */
  setPlayAnimation(enabled) {
    if (enabled) {
      this.$.multideviceSetupAnimation.play();
    } else {
      this.$.multideviceSetupAnimation.pause();
    }
  },

  /**
   * Since web links cannot be opened in OOBE as there is no web browser, this
   * attaches a listener to open a webview modal in OOBE when "Learn More" links
   * are clicked.
   * @private
   */
  initializeSetupFlow_() {
    // The "Learn More" links are inside a grdp string, so we cannot actually
    // add an onclick handler directly to the html. Instead, grab the two and
    // manaully add onclick handlers.
    const helpArticleLinks = [
      this.$$('#multidevice-summary-message a'),
    ];
    for (let i = 0; i < helpArticleLinks.length; i++) {
      helpArticleLinks[i].onclick = this.fire.bind(
          this, 'open-learn-more-webview-requested', helpArticleLinks[i].href);
    }

    this.mojoInterfaceProvider_.getMojoServiceRemote()
        .getQuickStartPhoneInstanceID()
        .then(({qsPhoneInstanceId}) => {
          if (!qsPhoneInstanceId) {
            return;
          }

          this.quickStartPhoneInstanceId_ = qsPhoneInstanceId;
        })
        .catch((error) => {
          console.warn('Mojo service failure: ' + error);
        });
  },

  /**
   * Adds ARIA description to "Learn More" links since the link tag is embedded
   * in the grdp string without additional attributes.
   * @private
   */
  addAccessibilityLabel_() {
    // Since the "Learn More" links are inside a grdp string, we add the
    // attribute here.
    const helpArticleLinks = [
      this.$$('#multidevice-summary-message a'),
    ];
    for (let i = 0; i < helpArticleLinks.length; i++) {
      helpArticleLinks[i].setAttribute(
          'aria-describedby', 'multidevice-summary-message');
    }
  },

  /**
   * @param {!MultiDeviceSetupDelegate} delegate
   * @return {string} The cancel button text ID, dependent on OOBE vs. non-OOBE.
   * @private
   */
  getCancelButtonTextId_(delegate) {
    return this.delegate.getStartSetupCancelButtonTextId();
  },

  /**
   * @param {!Array<!HostDevice>} devices
   * @return {string} Label for devices selection content.
   * @private
   */
  getDeviceSelectionHeader_(devices) {
    switch (devices.length) {
      case 0:
        return '';
      case 1:
        return this.i18n('startSetupPageSingleDeviceHeader');
      default:
        return this.i18n('startSetupPageMultipleDeviceHeader');
    }
  },

  /**
   * @param {!Array<!HostDevice>} devices
   * @return {boolean} True if there are more than one potential host devices.
   * @private
   */
  doesDeviceListHaveMultipleElements_(devices) {
    return devices.length > 1;
  },

  /**
   * @param {!Array<!HostDevice>} devices
   * @return {boolean} True if there is exactly one potential host device.
   * @private
   */
  doesDeviceListHaveOneElement_(devices) {
    return devices.length === 1;
  },

  /**
   * @param {!Array<!HostDevice>} devices
   * @return {string} Name of the first device in device list if there are any.
   *     Returns an empty string otherwise.
   * @private
   */
  getFirstDeviceNameInList_(devices) {
    return devices[0] ? this.devices[0].remoteDevice.deviceName : '';
  },

  /**
   * @param {!ConnectivityStatus} connectivityStatus
   * @return {string} The classes to bind to the device name option.
   * @private
   */
  getDeviceOptionClass_(connectivityStatus) {
    return connectivityStatus === ConnectivityStatus.kOffline ?
        'offline-device-name' :
        '';
  },

  /**
   * @param {!HostDevice} device
   * @return {string} Name of the device, with connectivity status information.
   * @private
   */
  getDeviceNameWithConnectivityStatus_(device) {
    return device.connectivityStatus === ConnectivityStatus.kOffline ?
        this.i18n(
            'startSetupPageOfflineDeviceOption',
            device.remoteDevice.deviceName) :
        device.remoteDevice.deviceName;
  },

  /**
   * @param {!HostDevice} device
   * @return {string} Returns a unique identifier for the input device, using
   *     the device's Instance ID if it is available; otherwise, the device's
   *     legacy device ID is used.
   *     TODO(https://crbug.com/1019206): When v1 DeviceSync is turned off, only
   *     use Instance ID since all devices are guaranteed to have one.
   * @private
   */
  getInstanceIdOrLegacyDeviceId_(device) {
    if (device.remoteDevice.instanceId) {
      return device.remoteDevice.instanceId;
    }

    return device.remoteDevice.deviceId;
  },

  /** @private */
  devicesChanged_() {
    if (this.devices.length > 0) {
      if (this.quickStartPhoneInstanceId_ &&
          this.moveDeviceToFront_(this.quickStartPhoneInstanceId_)) {
        // Adjust the title to reflect that the Quick Start phone was moved to
        // top of list.
        this.headerTextId = 'startSetupPageAfterQuickStartHeader';
      }

      this.selectedInstanceIdOrLegacyDeviceId =
          this.getInstanceIdOrLegacyDeviceId_(this.devices[0]);
    }
  },

  /**
   * Checks if the devices list contains a phone matching the provided
   * device_id. If so, that phone is moved to the front of the devices list.
   * @param {string} device_id
   * @return {boolean} Whether the device matching the provided ID is moved to
   *     the front of the devices list. Returns false if no matching device is
   *     found. Returns true and moves the matching device to index 0 if a
   *     matching device is found.
   * @private
   */
  moveDeviceToFront_(device_id) {
    const matchingDeviceIdx = this.devices.findIndex(
        device => this.getInstanceIdOrLegacyDeviceId_(device) === device_id);

    if (matchingDeviceIdx === -1) {
      return false;
    }

    // Move device located at the matchingDeviceIdx to the front of the
    // devices list.
    this.devices.unshift(this.devices.splice(matchingDeviceIdx, 1)[0]);
    return true;
  },

  /** @private */
  onDeviceDropdownSelectionChanged_() {
    this.selectedInstanceIdOrLegacyDeviceId = this.$.deviceDropdown.value;
  },

  /**
   * Wrapper for i18nAdvanced for binding to location updates in OOBE.
   * @param {string} locale The language code (e.g. en, es) for the current
   *     display language for CrOS. As with I18nBehavior.i18nDynamic(), the
   *     parameter is not used directly but is provided to allow HTML binding
   *     without passing an unexpected argument to I18nBehavior.i18nAdvanced().
   * @param {string} textId The loadTimeData ID of the string to be translated.
   * @private
   */
  i18nAdvancedDynamic_(locale, textId) {
    return this.i18nAdvanced(textId);
  },

  /**
   * Returns the URL for the asset that defines the multidevice setup page's
   * animation
   * @return {string}
   * @private
   */
  getAnimationUrl_() {
    if (this.isJellyEnabled_) {
      return MULTIDEVICE_ANIMATION_JELLY_URL;
    }

    // TODO(b/279667779): Remove when Jelly is fully launched.
    return this.isDarkModeActive_ ? MULTIDEVICE_ANIMATION_DARK_URL :
                                    MULTIDEVICE_ANIMATION_LIGHT_URL;
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
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

class IronSelection {
  /**
   * @param {!Function} selectCallback
   * @suppress {missingProvide}
   */
  constructor(selectCallback) {
    this.selection = [];
    this.selectCallback = selectCallback;
  }

  /**
   * Retrieves the selected item(s).
   *
   * @returns Returns the selected item(s). If the multi property is true,
   * `get` will return an array, otherwise it will return
   * the selected item or undefined if there is no selection.
   */
  get() {
    return this.multi ? this.selection.slice() : this.selection[0];
  }

  /**
   * Clears all the selection except the ones indicated.
   *
   * @param {Array} excludes items to be excluded.
   */
  clear(excludes) {
    this.selection.slice().forEach(function(item) {
      if (!excludes || excludes.indexOf(item) < 0) {
        this.setItemSelected(item, false);
      }
    }, this);
  }

  /**
   * Indicates if a given item is selected.
   *
   * @param {*} item The item whose selection state should be checked.
   * @return {boolean} Returns true if `item` is selected.
   */
  isSelected(item) {
    return this.selection.indexOf(item) >= 0;
  }

  /**
   * Sets the selection state for a given item to either selected or deselected.
   *
   * @param {*} item The item to select.
   * @param {boolean} isSelected True for selected, false for deselected.
   */
  setItemSelected(item, isSelected) {
    if (item != null) {
      if (isSelected !== this.isSelected(item)) {
        // proceed to update selection only if requested state differs from
        // current
        if (isSelected) {
          this.selection.push(item);
        } else {
          var i = this.selection.indexOf(item);
          if (i >= 0) {
            this.selection.splice(i, 1);
          }
        }
        if (this.selectCallback) {
          this.selectCallback(item, isSelected);
        }
      }
    }
  }

  /**
   * Sets the selection state for a given item. If the `multi` property
   * is true, then the selected state of `item` will be toggled; otherwise
   * the `item` will be selected.
   *
   * @param {*} item The item to select.
   */
  select(item) {
    if (this.multi) {
      this.toggle(item);
    } else if (this.get() !== item) {
      this.setItemSelected(this.get(), false);
      this.setItemSelected(item, true);
    }
  }

  /**
   * Toggles the selection state for `item`.
   *
   * @param {*} item The item to toggle.
   */
  toggle(item) {
    this.setItemSelected(item, !this.isSelected(item));
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
 * @polymerBehavior
 */
const IronSelectableBehavior = {

  /**
   * Fired when iron-selector is activated (selected or deselected).
   * It is fired before the selected items are changed.
   * Cancel the event to abort selection.
   *
   * @event iron-activate
   */

  /**
   * Fired when an item is selected
   *
   * @event iron-select
   */

  /**
   * Fired when an item is deselected
   *
   * @event iron-deselect
   */

  /**
   * Fired when the list of selectable items changes (e.g., items are
   * added or removed). The detail of the event is a mutation record that
   * describes what changed.
   *
   * @event iron-items-changed
   */

  properties: {

    /**
     * If you want to use an attribute value or property of an element for
     * `selected` instead of the index, set this to the name of the attribute
     * or property. Hyphenated values are converted to camel case when used to
     * look up the property of a selectable element. Camel cased values are
     * *not* converted to hyphenated values for attribute lookup. It's
     * recommended that you provide the hyphenated form of the name so that
     * selection works in both cases. (Use `attr-or-property-name` instead of
     * `attrOrPropertyName`.)
     */
    attrForSelected: {type: String, value: null},

    /**
     * Gets or sets the selected element. The default is to use the index of the
     * item.
     * @type {string|number}
     */
    selected: {type: String, notify: true},

    /**
     * Returns the currently selected item.
     *
     * @type {?Object}
     */
    selectedItem: {type: Object, readOnly: true, notify: true},

    /**
     * The event that fires from items when they are selected. Selectable
     * will listen for this event from items and update the selection state.
     * Set to empty string to listen to no events.
     */
    activateEvent:
        {type: String, value: 'tap', observer: '_activateEventChanged'},

    /**
     * This is a CSS selector string.  If this is set, only items that match the
     * CSS selector are selectable.
     */
    selectable: String,

    /**
     * The class to set on elements when selected.
     */
    selectedClass: {type: String, value: 'iron-selected'},

    /**
     * The attribute to set on elements when selected.
     */
    selectedAttribute: {type: String, value: null},

    /**
     * Default fallback if the selection based on selected with
     * `attrForSelected` is not found.
     */
    fallbackSelection: {type: String, value: null},

    /**
     * The list of items from which a selection can be made.
     */
    items: {
      type: Array,
      readOnly: true,
      notify: true,
      value: function() {
        return [];
      }
    },

    /**
     * The set of excluded elements where the key is the `localName`
     * of the element that will be ignored from the item list.
     *
     * @default {template: 1}
     */
    _excludedLocalNames: {
      type: Object,
      value: function() {
        return {
          'template': 1,
          'dom-bind': 1,
          'dom-if': 1,
          'dom-repeat': 1,
        };
      }
    }
  },

  observers: [
    '_updateAttrForSelected(attrForSelected)',
    '_updateSelected(selected)',
    '_checkFallback(fallbackSelection)'
  ],

  created: function() {
    this._bindFilterItem = this._filterItem.bind(this);
    this._selection = new IronSelection(this._applySelection.bind(this));
  },

  attached: function() {
    this._observer = this._observeItems(this);
    this._addListener(this.activateEvent);
  },

  detached: function() {
    if (this._observer) {
      dom(this).unobserveNodes(this._observer);
    }
    this._removeListener(this.activateEvent);
  },

  /**
   * Returns the index of the given item.
   *
   * @method indexOf
   * @param {Object} item
   * @returns Returns the index of the item
   */
  indexOf: function(item) {
    return this.items ? this.items.indexOf(item) : -1;
  },

  /**
   * Selects the given value.
   *
   * @method select
   * @param {string|number} value the value to select.
   */
  select: function(value) {
    this.selected = value;
  },

  /**
   * Selects the previous item.
   *
   * @method selectPrevious
   */
  selectPrevious: function() {
    var length = this.items.length;
    var index = length - 1;
    if (this.selected !== undefined) {
      index = (Number(this._valueToIndex(this.selected)) - 1 + length) % length;
    }
    this.selected = this._indexToValue(index);
  },

  /**
   * Selects the next item.
   *
   * @method selectNext
   */
  selectNext: function() {
    var index = 0;
    if (this.selected !== undefined) {
      index =
          (Number(this._valueToIndex(this.selected)) + 1) % this.items.length;
    }
    this.selected = this._indexToValue(index);
  },

  /**
   * Selects the item at the given index.
   *
   * @method selectIndex
   */
  selectIndex: function(index) {
    this.select(this._indexToValue(index));
  },

  /**
   * Force a synchronous update of the `items` property.
   *
   * NOTE: Consider listening for the `iron-items-changed` event to respond to
   * updates to the set of selectable items after updates to the DOM list and
   * selection state have been made.
   *
   * WARNING: If you are using this method, you should probably consider an
   * alternate approach. Synchronously querying for items is potentially
   * slow for many use cases. The `items` property will update asynchronously
   * on its own to reflect selectable items in the DOM.
   */
  forceSynchronousItemUpdate: function() {
    if (this._observer && typeof this._observer.flush === 'function') {
      // NOTE(bicknellr): `dom.flush` above is no longer sufficient to trigger
      // `observeNodes` callbacks. Polymer 2.x returns an object from
      // `observeNodes` with a `flush` that synchronously gives the callback any
      // pending MutationRecords (retrieved with `takeRecords`). Any case where
      // ShadyDOM flushes were expected to synchronously trigger item updates
      // will now require calling `forceSynchronousItemUpdate`.
      this._observer.flush();
    } else {
      this._updateItems();
    }
  },

  // UNUSED, FOR API COMPATIBILITY
  get _shouldUpdateSelection() {
    return this.selected != null;
  },

  _checkFallback: function() {
    this._updateSelected();
  },

  _addListener: function(eventName) {
    this.listen(this, eventName, '_activateHandler');
  },

  _removeListener: function(eventName) {
    this.unlisten(this, eventName, '_activateHandler');
  },

  _activateEventChanged: function(eventName, old) {
    this._removeListener(old);
    this._addListener(eventName);
  },

  _updateItems: function() {
    var nodes = dom(this).queryDistributedElements(this.selectable || '*');
    nodes = Array.prototype.filter.call(nodes, this._bindFilterItem);
    this._setItems(nodes);
  },

  _updateAttrForSelected: function() {
    if (this.selectedItem) {
      this.selected = this._valueForItem(this.selectedItem);
    }
  },

  _updateSelected: function() {
    this._selectSelected(this.selected);
  },

  _selectSelected: function(selected) {
    if (!this.items) {
      return;
    }

    var item = this._valueToItem(this.selected);
    if (item) {
      this._selection.select(item);
    } else {
      this._selection.clear();
    }
    // Check for items, since this array is populated only when attached
    // Since Number(0) is falsy, explicitly check for undefined
    if (this.fallbackSelection && this.items.length &&
        (this._selection.get() === undefined)) {
      this.selected = this.fallbackSelection;
    }
  },

  _filterItem: function(node) {
    return !this._excludedLocalNames[node.localName];
  },

  _valueToItem: function(value) {
    return (value == null) ? null : this.items[this._valueToIndex(value)];
  },

  _valueToIndex: function(value) {
    if (this.attrForSelected) {
      for (var i = 0, item; item = this.items[i]; i++) {
        if (this._valueForItem(item) == value) {
          return i;
        }
      }
    } else {
      return Number(value);
    }
  },

  _indexToValue: function(index) {
    if (this.attrForSelected) {
      var item = this.items[index];
      if (item) {
        return this._valueForItem(item);
      }
    } else {
      return index;
    }
  },

  _valueForItem: function(item) {
    if (!item) {
      return null;
    }
    if (!this.attrForSelected) {
      var i = this.indexOf(item);
      return i === -1 ? null : i;
    }
    var propValue = item[dashToCamelCase(this.attrForSelected)];
    return propValue != undefined ? propValue :
                                    item.getAttribute(this.attrForSelected);
  },

  _applySelection: function(item, isSelected) {
    if (this.selectedClass) {
      this.toggleClass(this.selectedClass, isSelected, item);
    }
    if (this.selectedAttribute) {
      this.toggleAttribute(this.selectedAttribute, isSelected, item);
    }
    this._selectionChange();
    this.fire('iron-' + (isSelected ? 'select' : 'deselect'), {item: item});
  },

  _selectionChange: function() {
    this._setSelectedItem(this._selection.get());
  },

  // observe items change under the given node.
  _observeItems: function(node) {
    return dom(node).observeNodes(function(mutation) {
      this._updateItems();
      this._updateSelected();

      // Let other interested parties know about the change so that
      // we don't have to recreate mutation observers everywhere.
      this.fire(
          'iron-items-changed', mutation, {bubbles: false, cancelable: false});
    });
  },

  _activateHandler: function(e) {
    var t = e.target;
    var items = this.items;
    while (t && t != this) {
      var i = items.indexOf(t);
      if (i >= 0) {
        var value = this._indexToValue(i);
        this._itemActivate(value, t);
        return;
      }
      t = t.parentNode;
    }
  },

  _itemActivate: function(value, item) {
    if (!this.fire('iron-activate', {selected: value, item: item}, {
               cancelable: true
             })
             .defaultPrevented) {
      this.select(value);
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
`iron-pages` is used to select one of its children to show. One use is to cycle
through a list of children "pages".

Example:

    <iron-pages selected="0">
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
    </iron-pages>

    <script>
      document.addEventListener('click', function(e) {
        var pages = document.querySelector('iron-pages');
        pages.selectNext();
      });
    </script>

@group Iron Elements
@demo demo/index.html
*/
Polymer({
  _template: html`
    <style>
      :host {
        display: block;
      }

      :host > ::slotted(:not(slot):not(.iron-selected)) {
        display: none !important;
      }
    </style>

    <slot></slot>
`,

  is: 'iron-pages',
  behaviors: [IronResizableBehavior, IronSelectableBehavior],

  properties: {

    // as the selected page is the only one visible, activateEvent
    // is both non-sensical and problematic; e.g. in cases where a user
    // handler attempts to change the page and the activateEvent
    // handler immediately changes it back
    activateEvent: {type: String, value: null}

  },

  observers: ['_selectedPageChanged(selected)'],

  _selectedPageChanged: function(selected, old) {
    this.async(this.notifyResize);
  }
});

function getTemplate() {
  return html`<!--_html_template_start_--><style include="multidevice-setup-shared">
  :host {
    display: block;
    height: 100%;
    overflow: scroll;
    width: 100%;
  }

  #container {
    background-color: var(--cr-card-background-color);
    box-sizing: border-box;
    color: var(--cros-text-color-secondary);
    display: flex;
    flex-direction: column;
    font-size: 13px;
    height: 100%;
    line-height: 16px;
    margin: auto;
  }

  :host-context(body.jelly-enabled) #container {
    font-family: var(--cros-font-family-google-sans);
  }

  iron-pages {
    height: 100%;
    overflow: var(--iron-pages-overflow, visible);
  }

  button-bar {
    padding: 24px;
  }

  @media screen and (orientation: portrait) {
    :host-context([screen=oobe]) button-bar,
    :host-context([screen=gaia-signin]) button-bar {
      align-items: center;
    }
  }
</style>
<div id="container">
  <iron-pages id="ironPages"
      attr-for-selected="is"
      selected="[[visiblePageName]]"
      selected-item="{{visiblePage_}}">
    <template is="dom-if" if="[[shouldPasswordPageBeIncluded_(delegate)]]"
        restamp>
      <password-page class="ui-page"
          auth-token="{{authToken_}}"
          forward-button-disabled="{{passwordPageForwardButtonDisabled_}}"
          password-field-valid="{{passwordFieldValid}}"
          on-user-submitted-password="onUserSubmittedPassword_">
      </password-page>
    </template>
    <template is="dom-if"
        if="[[shouldSetupSucceededPageBeIncluded_(delegate)]]" restamp>
      <setup-succeeded-page class="ui-page"></setup-succeeded-page>
    </template>
    <start-setup-page class="ui-page"
        devices="[[devices_]]"
        selected-instance-id-or-legacy-device-id="{{selectedInstanceIdOrLegacyDeviceId_}}"
        delegate="[[delegate]]">
    </start-setup-page>
  </iron-pages>
  <div class="flex"></div>
  <button-bar forward-button-text-id="[[forwardButtonTextId]]"
      backward-button-text-id="[[backwardButtonTextId]]"
      cancel-button-text-id="[[cancelButtonTextId]]"
      should-show-shadow="[[isScrolledToBottom_]]"
      forward-button-disabled="[[forwardButtonDisabled]]">
  </button-bar>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


/** @enum {string} */
const PageName = {
  PASSWORD: 'password-page',
  SUCCESS: 'setup-succeeded-page',
  START: 'start-setup-page',
};

Polymer({
  _template: getTemplate(),
  is: 'multidevice-setup',

  behaviors: [WebUIListenerBehavior],

  properties: {
    /**
     * Delegate object which performs differently in OOBE vs. non-OOBE mode.
     * @type {!MultiDeviceSetupDelegate}
     */
    delegate: Object,

    /**
     * ID of loadTimeData string to be shown on the forward navigation button.
     * @type {string|undefined}
     */
    forwardButtonTextId: {
      type: String,
      computed: 'getForwardButtonTextId_(visiblePage_)',
      notify: true,
    },

    /** Whether the forward button should be disabled. */
    forwardButtonDisabled: {
      type: Boolean,
      computed: 'shouldForwardButtonBeDisabled_(' +
          'passwordPageForwardButtonDisabled_, visiblePageName)',
      notify: true,
    },

    /**
     * ID of loadTimeData string to be shown on the cancel button.
     * @type {string|undefined}
     */
    cancelButtonTextId: {
      type: String,
      computed: 'getCancelButtonTextId_(visiblePage_)',
      notify: true,
    },

    /**
     * ID of loadTimeData string to be shown on the backward navigation
     * button.
     * @type {string|undefined}
     */
    backwardButtonTextId: {
      type: String,
      computed: 'getBackwardButtonTextId_(visiblePage_)',
      notify: true,
    },

    /**
     * Element name of the currently visible page.
     *
     * @type {!PageName}
     */
    visiblePageName: {
      type: String,
      value: PageName.START,
      notify: true,
    },

    /**
     * DOM Element corresponding to the visible page.
     *
     * @private {!PasswordPageElement|!StartSetupPageElement|
     *           !SetupSucceededPageElement}
     */
    visiblePage_: Object,

    /**
     * Authentication token, which is generated by the password page.
     * @private {string}
     */
    authToken_: {
      type: String,
    },

    /**
     * Array of objects representing all potential MultiDevice hosts.
     *
     * @private {!Array<!HostDevice>}
     */
    devices_: Array,

    /**
     * Unique identifier for the currently selected host device. This uses the
     * device's Instance ID if it is available; otherwise, the device's legacy
     * device ID is used.
     * TODO(https://crbug.com/1019206): When v1 DeviceSync is turned off, only
     * use Instance ID since all devices are guaranteed to have one.
     *
     * Undefined if the no list of potential hosts has been received from mojo
     * service.
     *
     * @private {string|undefined}
     */
    selectedInstanceIdOrLegacyDeviceId_: String,

    /**
     * Whether the password page reports that the forward button should be
     * disabled. This field is only relevant when the password page is
     * visible.
     * @private {boolean}
     */
    passwordPageForwardButtonDisabled_: Boolean,

    /**
     * Provider of an interface to the MultiDeviceSetup Mojo service.
     * @private {!MojoInterfaceProvider}
     */
    mojoInterfaceProvider_: Object,

    /**
     * Whether a shadow should appear over the button bar; the shadow is
     * intended to appear when the contents are not scrolled to the bottom to
     * indicate that more contents can be viewed below.
     * @private
     */
    isScrolledToBottom_: {
      type: Boolean,
      value: false,
    },

    /**
     * Return true if the Jelly feature flag is enabled.
     * @private
     */
    isJellyEnabled: {
      type: Boolean,
      readOnly: true,
      value() {
        return loadTimeData$1.valueExists('isJellyEnabled') &&
            loadTimeData$1.getBoolean('isJellyEnabled');
      },
    },
  },

  listeners: {
    'scroll': 'onWindowContentUpdate_',
    'backward-navigation-requested': 'onBackwardNavigationRequested_',
    'cancel-requested': 'onCancelRequested_',
    'forward-navigation-requested': 'onForwardNavigationRequested_',
  },

  /** @override */
  created() {
    this.mojoInterfaceProvider_ = MojoInterfaceProviderImpl.getInstance();
  },

  /** @override */
  ready() {
    this.addWebUIListener(
        'multidevice_setup.initializeSetupFlow',
        this.initializeSetupFlow.bind(this));

    if (this.isJellyEnabled) {
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
  },

  /** @override */
  attached() {
    window.addEventListener(
        'orientationchange', this.onWindowContentUpdate_.bind(this));
    window.addEventListener('resize', this.onWindowContentUpdate_.bind(this));
  },

  /** @override */
  detached() {
    window.removeEventListener(
        'orientationchange', this.onWindowContentUpdate_.bind(this));
    window.removeEventListener(
        'resize', this.onWindowContentUpdate_.bind(this));
  },

  updateLocalizedContent() {
    this.$.ironPages.querySelectorAll('.ui-page')
        .forEach(page => page.i18nUpdateLocale());
  },

  initializeSetupFlow() {
    this.$$('start-setup-page').setPlayAnimation(true);
    this.mojoInterfaceProvider_.getMojoServiceRemote()
        .getEligibleActiveHostDevices()
        .then((responseParams) => {
          if (responseParams.eligibleHostDevices.length === 0) {
            console.warn('Potential host list is empty.');
            return;
          }

          this.devices_ = responseParams.eligibleHostDevices;
          this.fire('forward-button-focus-requested');
        })
        .catch((error) => {
          console.warn('Mojo service failure: ' + error);
        });
  },

  /** @private */
  onCancelRequested_() {
    this.exitSetupFlow_(false /* didUserCompleteSetup */);
  },

  /**
   * Called when contents are scrolled, the window is resized, or the window's
   * orientation is updated.
   * @private
   */
  onWindowContentUpdate_() {
    // (scrollHeight - scrollTop) represents the visible height of the
    // contents, not including scrollbars.
    const visibleHeight = this.scrollHeight - this.scrollTop;

    // If these two heights are equal, the contents are scrolled to the
    // bottom. Instead of using equality, we check that the difference is
    // sufficiently small to account for fractional values due to browser
    // zoom and/or display density.
    this.isScrolledToBottom_ = Math.abs(this.clientHeight - visibleHeight) < 1;
  },

  /** @private */
  onBackwardNavigationRequested_() {
    // The back button is only visible on the password page.
    assert$1(this.visiblePageName === PageName.PASSWORD);

    this.$$('password-page').clearPasswordTextInput();
    this.visiblePageName = PageName.START;
    this.fire('forward-button-focus-requested');
  },

  /** @private */
  onForwardNavigationRequested_() {
    if (this.forwardButtonDisabled) {
      return;
    }

    this.visiblePage_.getCanNavigateToNextPage().then((canNavigate) => {
      if (!canNavigate) {
        return;
      }
      this.navigateForward_();
    });
  },

  /** @private */
  navigateForward_() {
    switch (this.visiblePageName) {
      case PageName.PASSWORD:
        this.$$('password-page').clearPasswordTextInput();
        this.setHostDevice_();
        return;
      case PageName.SUCCESS:
        this.exitSetupFlow_(true /* didUserCompleteSetup */);
        return;
      case PageName.START:
        if (this.delegate.isPasswordRequiredToSetHost()) {
          this.visiblePageName = PageName.PASSWORD;
          this.$$('password-page').focusPasswordTextInput();
        } else {
          this.setHostDevice_();
        }
        return;
    }
  },

  /** @private */
  setHostDevice_() {
    // An authentication token must be set if a password is required.
    assert$1(this.delegate.isPasswordRequiredToSetHost() === !!this.authToken_);

    const instanceIdOrLegacyDeviceId =
        /** @type {string} */ (this.selectedInstanceIdOrLegacyDeviceId_);
    this.delegate.setHostDevice(instanceIdOrLegacyDeviceId, this.authToken_)
        .then((responseParams) => {
          if (!responseParams.success) {
            console.warn(
                'Failure setting host with ID: ' + instanceIdOrLegacyDeviceId);
            return;
          }

          if (this.delegate.shouldExitSetupFlowAfterSettingHost()) {
            this.exitSetupFlow_(true /* didUserCompleteSetup */);
            return;
          }

          this.visiblePageName = PageName.SUCCESS;
          this.fire('forward-button-focus-requested');
        })
        .catch((error) => {
          console.warn('Mojo service failure: ' + error);
        });
  },

  /** @private */
  onUserSubmittedPassword_() {
    this.onForwardNavigationRequested_();
  },

  /**
   * @return {string|undefined} The ID of loadTimeData string for the
   *     forward button text, which is undefined if no button should be
   *     displayed.
   * @private
   */
  getForwardButtonTextId_() {
    if (!this.visiblePage_) {
      return undefined;
    }
    return this.visiblePage_.forwardButtonTextId;
  },

  /**
   * @return {boolean} Whether the forward button should be disabled.
   * @private
   */
  shouldForwardButtonBeDisabled_() {
    return (this.visiblePageName === PageName.PASSWORD) &&
        this.passwordPageForwardButtonDisabled_;
  },

  /**
   * @return {string|undefined} The ID of loadTimeData string for the
   *     cancel button text, which is undefined if no button should be
   *     displayed.
   * @private
   */
  getCancelButtonTextId_() {
    if (!this.visiblePage_) {
      return undefined;
    }
    return this.visiblePage_.cancelButtonTextId;
  },

  /**
   * @return {string|undefined} The ID of loadTimeData string for the
   *     backward button text, which is undefined if no button should be
   *     displayed.
   * @private
   */
  getBackwardButtonTextId_() {
    if (!this.visiblePage_) {
      return undefined;
    }
    return this.visiblePage_.backwardButtonTextId;
  },

  /**
   * @return {boolean}
   * @private
   */
  shouldPasswordPageBeIncluded_() {
    return this.delegate.isPasswordRequiredToSetHost();
  },

  /**
   * @return {boolean}
   * @private
   */
  shouldSetupSucceededPageBeIncluded_() {
    return !this.delegate.shouldExitSetupFlowAfterSettingHost();
  },

  /**
   * Notifies observers that the setup flow has completed.
   * @param {boolean} didUserCompleteSetup
   * @private
   */
  exitSetupFlow_(didUserCompleteSetup) {
    this.$$('start-setup-page').setPlayAnimation(false);
    this.fire('setup-exited', {didUserCompleteSetup: didUserCompleteSetup});
  },
});

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


/** @implements {MultiDeviceSetupDelegate} */
class PostOobeDelegate {
  /** @override */
  isPasswordRequiredToSetHost() {
    return true;
  }

  /** @override */
  setHostDevice(hostInstanceIdOrLegacyDeviceId, opt_authToken) {
    // An authentication token is required to set the host device post-OOBE.
    assert$1(!!opt_authToken);

    // Note: A cast is needed here because currently all Mojo functions which
    // return a promise are typed only as {Promise}. The setHostDevice()
    // function always returns a {!Promise<{success: boolean}>} (see
    // multidevice_setup.mojom).
    return /** @type {!Promise<{success: boolean}>} */ (
        MojoInterfaceProviderImpl.getInstance()
            .getMojoServiceRemote()
            .setHostDevice(hostInstanceIdOrLegacyDeviceId, opt_authToken));
  }

  /** @override */
  shouldExitSetupFlowAfterSettingHost() {
    return false;
  }

  /** @override */
  getStartSetupCancelButtonTextId() {
    return 'cancel';
  }
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


/**
 * This enum is tied directly to a UMA enum defined in
 * //tools/metrics/histograms/enums.xml, and should always reflect it (do not
 * change one without changing the other).
 * @enum {number}
 */
const PageNameValue = {
  UNKNOWN: 0,
  START: 1,
  PASSWORD: 2,
  SUCCESS: 3,
  MAX_VALUE: 4,
};

/**
 * MultiDevice setup flow which is shown after OOBE has completed.
 */
Polymer({
  is: 'multidevice-setup-post-oobe',

  _template: html`<!--_html_template_start_-->
<style include="multidevice-setup-shared">
  :host {
    width: 100%;
  }

  multidevice-setup {
    --multidevice-setup-width: 768px;
    --iron-pages-overflow: visible;
  }

  #backward-button,
  #cancel-button,
  #forward-button {
    align-items: center;
    display: flex;
    justify-content: center;
    text-transform: none;
  }
</style>
<multidevice-setup delegate="[[delegate_]]"
    on-setup-exited="onExitRequested_"
    on-forward-button-focus-requested="onForwardButtonFocusRequested_"
    on-visible-page-name-changed="onVisiblePageNameChanged_"
    forward-button-text-id="{{forwardButtonTextId_}}"
    forward-button-disabled="{{forwardButtonDisabled_}}"
    cancel-button-text-id="{{cancelButtonTextId_}}"
    backward-button-text-id="{{backwardButtonTextId_}}">
  <cr-button id="backward-button"
      slot="backward-button" class="cancel-button">
    [[getButtonText_(backwardButtonTextId_)]]
  </cr-button>
  <cr-button id="cancel-button"
      slot="cancel-button" class="cancel-button">
    [[getButtonText_(cancelButtonTextId_)]]
  </cr-button>
  <cr-button id="forward-button"
      slot="forward-button" class="action-button"
      disabled$="[[forwardButtonDisabled_]]">
    [[getButtonText_(forwardButtonTextId_)]]
  </cr-button>
</multidevice-setup>
<!--_html_template_end_-->`,

  properties: {
    /** @private {!MultiDeviceSetupDelegate} */
    delegate_: Object,

    /**
     * ID of loadTimeData string to be shown on the forward navigation button.
     * @private {string|undefined}
     */
    forwardButtonTextId_: {
      type: String,
    },

    /**
     * Whether the forward button should be disabled.
     * @private
     */
    forwardButtonDisabled_: {
      type: Boolean,
      value: false,
    },

    /**
     * ID of loadTimeData string to be shown on the cancel navigation button.
     * @private {string|undefined}
     */
    cancelButtonTextId_: {
      type: String,
    },

    /**
     * ID of loadTimeData string to be shown on the backward navigation button.
     * @private {string|undefined}
     */
    backwardButtonTextId_: {
      type: String,
    },
  },

  behaviors: [I18nBehavior],

  /** @override */
  ready() {
    this.onWindowSizeUpdated_();
  },

  /** @override */
  attached() {
    this.delegate_ = new PostOobeDelegate();
    this.$$('multidevice-setup').initializeSetupFlow();
    window.addEventListener('orientationchange', this.onWindowSizeUpdated_);
    window.addEventListener('resize', this.onWindowSizeUpdated_);
  },

  /** @override */
  detached() {
    window.removeEventListener('orientationchange', this.onWindowSizeUpdated_);
    window.removeEventListener('resize', this.onWindowSizeUpdated_);
  },

  /** @private */
  onExitRequested_() {
    chrome.send('dialogClose');
  },

  /** @private */
  onForwardButtonFocusRequested_() {
    this.$$('#forward-button').focus();
  },

  /**
   * @param {!CustomEvent<!{value: PageName}>} event
   * @private
   */
  onVisiblePageNameChanged_(event) {
    let pageNameValue;
    switch (event.detail.value) {
      case PageName.START:
        pageNameValue = PageNameValue.START;
        break;
      case PageName.PASSWORD:
        pageNameValue = PageNameValue.PASSWORD;
        break;
      case PageName.SUCCESS:
        pageNameValue = PageNameValue.SUCCESS;
        break;
      default:
        console.warn('Unexpected PageName.');
        pageNameValue = PageNameValue.UNKNOWN;
        break;
    }

    chrome.send('metricsHandler:recordInHistogram', [
      'MultiDevice.PostOOBESetupFlow.PageShown',
      pageNameValue,
      PageNameValue.MAX_VALUE,
    ]);
  },

  /**
   * Called during initialization, when the window is resized, or the window's
   * orientation is updated.
   */
  onWindowSizeUpdated_() {
    // Below code is also used to set the dialog size for display manager and
    // in-session assistant onboarding flow. Please make sure code changes are
    // applied to all places.
    document.documentElement.style.setProperty(
        '--oobe-oobe-dialog-height-base', window.innerHeight + 'px');
    document.documentElement.style.setProperty(
        '--oobe-oobe-dialog-width-base', window.innerWidth + 'px');
    if (window.innerWidth > window.innerHeight) {
      document.documentElement.setAttribute('orientation', 'horizontal');
    } else {
      document.documentElement.setAttribute('orientation', 'vertical');
    }
  },

  /**
   * Wraps i18n to return early if text is not yet defined. This prevents
   * console errors since some of the strings are initially undefined. Variables
   * like |cancelButtonTextId_| are initially undefined because they get piped
   * by a 2-way data binding from the embedded multidevice-setup component. This
   * does not affect the ui since these variables get defined shortly after the
   * page is initialized. We purposely don't set some of these properties if the
   * button is not expected to be shown in which case they will remain
   * undefined.
   * @param {string|undefined} text
   * @return {string}
   */
  getButtonText_(text) {
    if (!text) {
      return '';
    }

    return this.i18n(text);
  },
});
//# sourceMappingURL=multidevice_setup_post_oobe.rollup.js.map
