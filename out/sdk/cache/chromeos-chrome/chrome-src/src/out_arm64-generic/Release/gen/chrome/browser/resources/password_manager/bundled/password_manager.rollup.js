import { html, PolymerElement, Polymer, useShadow, dom, dashToCamelCase, dedupingMixin, Base, afterNextRender, Templatizer, OptionalMutableDataBehavior, animationFrame, microTask, idlePeriod, flush, Debouncer, enqueueDebouncer, matches, translate, mixinBehaviors } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { sendWithPromise, addWebUiListener, removeWebUiListener } from 'chrome://resources/js/cr.js';
import { mojo } from 'chrome://resources/mojo/mojo/public/js/bindings.js';
import './strings.m.js';

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

const template$8 = html`
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
template$8.setAttribute('style', 'display: none;');
document.head.appendChild(template$8.content);

const template$7 = html `
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
`;
document.head.appendChild(template$7.content);

const styleMod$a = document.createElement('dom-module');
styleMod$a.appendChild(html `
  <template>
    <style>
:host{color:var(--cr-primary-text-color);line-height:154%;overflow:hidden;user-select:text}
    </style>
  </template>
`.content);
styleMod$a.register('cr-page-host-style');

const styleMod$9 = document.createElement('dom-module');
styleMod$9.appendChild(html `
  <template>
    <style>
:host([hidden]),[hidden]{display:none!important}
    </style>
  </template>
`.content);
styleMod$9.register('cr-hidden-style');

const styleMod$8 = document.createElement('dom-module');
styleMod$8.appendChild(html `
  <template>
    <style>
.icon-arrow-back{--cr-icon-image:url(chrome://resources/images/icon_arrow_back.svg)}.icon-arrow-dropdown{--cr-icon-image:url(chrome://resources/images/icon_arrow_dropdown.svg)}.icon-arrow-drop-down-cr23{--cr-icon-image:url(chrome://resources/images/icon_arrow_drop_down_cr23.svg)}.icon-arrow-drop-up-cr23{--cr-icon-image:url(chrome://resources/images/icon_arrow_drop_up_cr23.svg)}.icon-cancel{--cr-icon-image:url(chrome://resources/images/icon_cancel.svg)}.icon-clear{--cr-icon-image:url(chrome://resources/images/icon_clear.svg)}.icon-copy-content{--cr-icon-image:url(chrome://resources/images/icon_copy_content.svg)}.icon-delete-gray{--cr-icon-image:url(chrome://resources/images/icon_delete_gray.svg)}.icon-edit{--cr-icon-image:url(chrome://resources/images/icon_edit.svg)}.icon-file{--cr-icon-image:url(chrome://resources/images/icon_filetype_generic.svg)}.icon-folder-open{--cr-icon-image:url(chrome://resources/images/icon_folder_open.svg)}.icon-picture-delete{--cr-icon-image:url(chrome://resources/images/icon_picture_delete.svg)}.icon-expand-less{--cr-icon-image:url(chrome://resources/images/icon_expand_less.svg)}.icon-expand-more{--cr-icon-image:url(chrome://resources/images/icon_expand_more.svg)}.icon-external{--cr-icon-image:url(chrome://resources/images/open_in_new.svg)}.icon-more-vert{--cr-icon-image:url(chrome://resources/images/icon_more_vert.svg)}.icon-refresh{--cr-icon-image:url(chrome://resources/images/icon_refresh.svg)}.icon-search{--cr-icon-image:url(chrome://resources/images/icon_search.svg)}.icon-settings{--cr-icon-image:url(chrome://resources/images/icon_settings.svg)}.icon-visibility{--cr-icon-image:url(chrome://resources/images/icon_visibility.svg)}.icon-visibility-off{--cr-icon-image:url(chrome://resources/images/icon_visibility_off.svg)}.subpage-arrow{--cr-icon-image:url(chrome://resources/images/arrow_right.svg)}.cr-icon{-webkit-mask-image:var(--cr-icon-image);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--cr-icon-size);background-color:var(--cr-icon-color,var(--google-grey-700));flex-shrink:0;height:var(--cr-icon-ripple-size);margin-inline-end:var(--cr-icon-ripple-margin);margin-inline-start:var(--cr-icon-button-margin-start);user-select:none;width:var(--cr-icon-ripple-size)}:host-context([dir=rtl]) .cr-icon{transform:scaleX(-1)}.cr-icon.no-overlap{margin-inline-end:0;margin-inline-start:0}@media (prefers-color-scheme:dark){.cr-icon{background-color:var(--cr-icon-color,var(--google-grey-500))}}
    </style>
  </template>
`.content);
styleMod$8.register('cr-icons');

const styleMod$7 = document.createElement('dom-module');
styleMod$7.appendChild(html `
  <template>
    <style include="cr-hidden-style cr-icons">
:host,html{--scrollable-border-color:var(--google-grey-300)}@media (prefers-color-scheme:dark){:host,html{--scrollable-border-color:var(--google-grey-700)}}[actionable]{cursor:pointer}.hr{border-top:var(--cr-separator-line)}iron-list.cr-separators>:not([first]){border-top:var(--cr-separator-line)}[scrollable]{border-color:transparent;border-style:solid;border-width:1px 0;overflow-y:auto}[scrollable].is-scrolled{border-top-color:var(--scrollable-border-color)}[scrollable].can-scroll:not(.scrolled-to-bottom){border-bottom-color:var(--scrollable-border-color)}[scrollable] iron-list>:not(.no-outline):focus,[selectable]:focus,[selectable]>:focus{background-color:var(--cr-focused-item-color);outline:0}.scroll-container{display:flex;flex-direction:column;min-height:1px}[selectable]>*{cursor:pointer}.cr-centered-card-container{box-sizing:border-box;display:block;height:inherit;margin:0 auto;max-width:var(--cr-centered-card-max-width);min-width:550px;position:relative;width:calc(100% * var(--cr-centered-card-width-percentage))}.cr-container-shadow{box-shadow:inset 0 5px 6px -3px rgba(0,0,0,.4);height:var(--cr-container-shadow-height);left:0;margin:0 0 var(--cr-container-shadow-margin);opacity:0;pointer-events:none;position:relative;right:0;top:0;transition:opacity .5s;z-index:1}#cr-container-shadow-bottom{margin-bottom:0;margin-top:var(--cr-container-shadow-margin);transform:scaleY(-1)}#cr-container-shadow-bottom.has-shadow,#cr-container-shadow-top.has-shadow{opacity:var(--cr-container-shadow-max-opacity)}.cr-row{align-items:center;border-top:var(--cr-separator-line);display:flex;min-height:var(--cr-section-min-height);padding:0 var(--cr-section-padding)}.cr-row.continuation,.cr-row.first{border-top:none}.cr-row-gap{padding-inline-start:16px}.cr-button-gap{margin-inline-start:8px}paper-tooltip::part(tooltip){border-radius:var(--paper-tooltip-border-radius,2px);font-size:92.31%;font-weight:500;max-width:330px;min-width:var(--paper-tooltip-min-width,200px);padding:var(--paper-tooltip-padding,10px 8px)}.cr-padded-text{padding-block-end:var(--cr-section-vertical-padding);padding-block-start:var(--cr-section-vertical-padding)}.cr-title-text{color:var(--cr-title-text-color);font-size:107.6923%;font-weight:500}.cr-secondary-text{color:var(--cr-secondary-text-color);font-weight:400}.cr-form-field-label{color:var(--cr-form-field-label-color);display:block;font-size:var(--cr-form-field-label-font-size);font-weight:500;letter-spacing:.4px;line-height:var(--cr-form-field-label-line-height);margin-bottom:8px}.cr-vertical-tab{align-items:center;display:flex}.cr-vertical-tab::before{border-radius:0 3px 3px 0;content:'';display:block;flex-shrink:0;height:var(--cr-vertical-tab-height,100%);width:4px}.cr-vertical-tab.selected::before{background:var(--cr-vertical-tab-selected-color,var(--cr-checked-color))}:host-context([dir=rtl]) .cr-vertical-tab::before{transform:scaleX(-1)}.iph-anchor-highlight{background-color:var(--cr-iph-anchor-highlight-color)}
    </style>
  </template>
`.content);
styleMod$7.register('cr-shared-style');

function getTemplate$W() {
    return html `<!--_html_template_start_-->    <style>:host{--cr-toast-background:#323232;--cr-toast-button-color:var(--google-blue-300);--cr-toast-text-color:#fff}@media (prefers-color-scheme:dark){:host{--cr-toast-background:var(--google-grey-900) linear-gradient(rgba(255, 255, 255, .06), rgba(255, 255, 255, .06));--cr-toast-button-color:var(--google-blue-300);--cr-toast-text-color:var(--google-grey-200)}}:host{align-items:center;background:var(--cr-toast-background);border-radius:4px;bottom:0;box-shadow:0 2px 4px 0 rgba(0,0,0,.28);box-sizing:border-box;display:flex;margin:24px;max-width:var(--cr-toast-max-width,568px);min-height:52px;min-width:288px;opacity:0;padding:0 24px;position:fixed;transform:translateY(100px);transition:opacity .3s,transform .3s;visibility:hidden;z-index:1}:host-context([chrome-refresh-2023]):host{--cr-toast-background:var(--color-toast-background,
            var(--cr-fallback-color-inverse-surface));--cr-toast-button-color:var(--color-toast-button,
            var(--cr-fallback-color-inverse-primary));--cr-toast-text-color:var(--color-toast-foreground,
            var(--cr-fallback-color-inverse-on-surface));border-radius:8px;line-height:20px;padding:0 16px}:host-context([dir=ltr]){left:0}:host-context([dir=rtl]){right:0}:host([open]){opacity:1;transform:translateY(0);visibility:visible}:host ::slotted(*){color:var(--cr-toast-text-color)}:host ::slotted(cr-button){background-color:transparent!important;border:none!important;color:var(--cr-toast-button-color)!important;margin-inline-start:32px!important;min-width:52px!important;padding:8px!important}:host ::slotted(cr-button:hover){background-color:transparent!important}:host-context([chrome-refresh-2023]) ::slotted(cr-button:last-of-type){margin-inline-end:-8px}</style>
    <slot></slot>
<!--_html_template_end_-->`;
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A lightweight toast.
 */
class CrToastElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.hideTimeoutId_ = null;
    }
    static get is() {
        return 'cr-toast';
    }
    static get template() {
        return getTemplate$W();
    }
    static get properties() {
        return {
            duration: {
                type: Number,
                value: 0,
            },
            open: {
                readOnly: true,
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
        };
    }
    static get observers() {
        return ['resetAutoHide_(duration, open)'];
    }
    /**
     * Cancels existing auto-hide, and sets up new auto-hide.
     */
    resetAutoHide_() {
        if (this.hideTimeoutId_ !== null) {
            window.clearTimeout(this.hideTimeoutId_);
            this.hideTimeoutId_ = null;
        }
        if (this.open && this.duration !== 0) {
            this.hideTimeoutId_ = window.setTimeout(() => {
                this.hide();
            }, this.duration);
        }
    }
    /**
     * Shows the toast and auto-hides after |this.duration| milliseconds has
     * passed. If the toast is currently being shown, any preexisting auto-hide
     * is cancelled and replaced with a new auto-hide.
     */
    show() {
        // Force autohide to reset if calling show on an already shown toast.
        const shouldResetAutohide = this.open;
        // The role attribute is removed first so that screen readers to better
        // ensure that screen readers will read out the content inside the toast.
        // If the role is not removed and re-added back in, certain screen readers
        // do not read out the contents, especially if the text remains exactly
        // the same as a previous toast.
        this.removeAttribute('role');
        // Reset the aria-hidden attribute as screen readers need to access the
        // contents of an opened toast.
        this.removeAttribute('aria-hidden');
        this._setOpen(true);
        this.setAttribute('role', 'alert');
        if (shouldResetAutohide) {
            this.resetAutoHide_();
        }
    }
    /**
     * Hides the toast and ensures that screen readers cannot its contents while
     * hidden.
     */
    hide() {
        this.setAttribute('aria-hidden', 'true');
        this._setOpen(false);
    }
}
customElements.define(CrToastElement.is, CrToastElement);

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
function assertInstanceof(value, type, message) {
    if (value instanceof type) {
        return;
    }
    throw new Error(message || `Value ${value} is not of type ${type.name || typeof type}`);
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

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview PromiseResolver is a helper class that allows creating a
 * Promise that will be fulfilled (resolved or rejected) some time later.
 *
 * Example:
 *  const resolver = new PromiseResolver();
 *  resolver.promise.then(function(result) {
 *    console.log('resolved with', result);
 *  });
 *  ...
 *  ...
 *  resolver.resolve({hello: 'world'});
 */
class PromiseResolver {
    resolve_ = () => { };
    reject_ = () => { };
    isFulfilled_ = false;
    promise_;
    constructor() {
        this.promise_ = new Promise((resolve, reject) => {
            this.resolve_ = (resolution) => {
                resolve(resolution);
                this.isFulfilled_ = true;
            };
            this.reject_ = (reason) => {
                reject(reason);
                this.isFulfilled_ = true;
            };
        });
    }
    /** Whether this resolver has been resolved or rejected. */
    get isFulfilled() {
        return this.isFulfilled_;
    }
    get promise() {
        return this.promise_;
    }
    get resolve() {
        return this.resolve_;
    }
    get reject() {
        return this.reject_;
    }
}

// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Global state for prefs initialization status.
 */
class CrSettingsPrefsInternal {
    constructor() {
        this.isInitialized = false;
        this.initializedResolver_ = new PromiseResolver();
        /**
         * Whether to defer initialization. Used in testing to prevent premature
         * initialization when intending to fake the settings API.
         */
        this.deferInitialization = false;
    }
    get initialized() {
        return this.initializedResolver_.promise;
    }
    /** Resolves the |initialized| promise. */
    setInitialized() {
        this.isInitialized = true;
        this.initializedResolver_.resolve();
    }
    /** Restores state for testing. */
    resetForTesting() {
        this.isInitialized = false;
        this.initializedResolver_ = new PromiseResolver();
    }
}
const CrSettingsPrefs = new CrSettingsPrefsInternal();

/* Copyright 2015 The Chromium Authors
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file. */
/**
 * @fileoverview
 * 'settings-prefs' exposes a singleton model of Chrome settings and
 * preferences, which listens to changes to Chrome prefs allowed in
 * chrome.settingsPrivate. When changing prefs in this element's 'prefs'
 * property via the UI, the singleton model tries to set those preferences in
 * Chrome. Whether or not the calls to settingsPrivate.setPref succeed, 'prefs'
 * is eventually consistent with the Chrome pref store.
 */
/**
 * Checks whether two values are recursively equal. Only compares serializable
 * data (primitives, serializable arrays and serializable objects).
 * @param val1 Value to compare.
 * @param val2 Value to compare with val1.
 * @return Whether the values are recursively equal.
 */
function deepEqual(val1, val2) {
    if (val1 === val2) {
        return true;
    }
    if (Array.isArray(val1) || Array.isArray(val2)) {
        if (!Array.isArray(val1) || !Array.isArray(val2)) {
            return false;
        }
        return arraysEqual(val1, val2);
    }
    if (val1 instanceof Object && val2 instanceof Object) {
        return objectsEqual(val1, val2);
    }
    return false;
}
/**
 * @return Whether the arrays are recursively equal.
 */
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (!deepEqual(arr1[i], arr2[i])) {
            return false;
        }
    }
    return true;
}
/**
 * @return Whether the objects are recursively equal.
 */
function objectsEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (let i = 0; i < keys1.length; i++) {
        const key = keys1[i];
        if (!deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }
    return true;
}
/**
 * Returns a recursive copy of the value.
 * @param val Value to copy. Should be a primitive or only contain
 *     serializable data (primitives, serializable arrays and
 *     serializable objects).
 * @return A deep copy of the value.
 */
function deepCopy(val) {
    if (!(val instanceof Object)) {
        return val;
    }
    return Array.isArray(val) ? deepCopyArray(val) : deepCopyObject(val);
}
/**
 * @return Deep copy of the array.
 */
function deepCopyArray(arr) {
    const copy = [];
    for (let i = 0; i < arr.length; i++) {
        copy.push(deepCopy(arr[i]));
    }
    return copy;
}
/**
 * @return Deep copy of the object.
 */
function deepCopyObject(obj) {
    const copy = {};
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        copy[key] = deepCopy(obj[key]);
    }
    return copy;
}
class SettingsPrefsElement extends PolymerElement {
    static get is() {
        return 'settings-prefs';
    }
    static get properties() {
        return {
            /**
             * Object containing all preferences, for use by Polymer controls.
             */
            prefs: {
                type: Object,
                notify: true,
            },
            /**
             * Map of pref keys to values representing the state of the Chrome
             * pref store as of the last update from the API.
             */
            lastPrefValues_: {
                type: Object,
                value() {
                    return {};
                },
            },
        };
    }
    static get observers() {
        return [
            'prefsChanged_(prefs.*)',
        ];
    }
    constructor() {
        super();
        this.settingsApi_ = chrome.settingsPrivate;
        this.initialized_ = false;
        if (!CrSettingsPrefs.deferInitialization) {
            this.initialize();
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        CrSettingsPrefs.resetForTesting();
    }
    /**
     * @param settingsApi SettingsPrivate implementation to use
     *     (chrome.settingsPrivate by default).
     */
    initialize(settingsApi) {
        // Only initialize once (or after resetForTesting() is called).
        if (this.initialized_) {
            return;
        }
        this.initialized_ = true;
        if (settingsApi) {
            this.settingsApi_ = settingsApi;
        }
        this.boundPrefsChanged_ = this.onSettingsPrivatePrefsChanged_.bind(this);
        this.settingsApi_.onPrefsChanged.addListener(this.boundPrefsChanged_);
        this.settingsApi_.getAllPrefs().then((prefs) => {
            this.updatePrefs_(prefs);
            CrSettingsPrefs.setInitialized();
        });
    }
    prefsChanged_(e) {
        // |prefs| can be directly set or unset in tests.
        if (!CrSettingsPrefs.isInitialized || e.path === 'prefs') {
            return;
        }
        const key = this.getPrefKeyFromPath_(e.path);
        const prefStoreValue = this.lastPrefValues_[key];
        const prefObj = this.get(key, this.prefs);
        // If settingsPrivate already has this value, ignore it. (Otherwise,
        // a change event from settingsPrivate could make us call
        // settingsPrivate.setPref and potentially trigger an IPC loop.)
        if (!deepEqual(prefStoreValue, prefObj.value)) {
            // 
            this.dispatchEvent(new CustomEvent('user-action-setting-change', {
                bubbles: true,
                composed: true,
                detail: { prefKey: key, prefValue: prefObj.value },
            }));
            // 
            this.settingsApi_
                .setPref(key, prefObj.value, 
            /* pageId */ '')
                .then(success => {
                if (!success) {
                    this.refresh(key);
                }
            });
        }
    }
    /**
     * Called when prefs in the underlying Chrome pref store are changed.
     */
    onSettingsPrivatePrefsChanged_(prefs) {
        if (CrSettingsPrefs.isInitialized) {
            this.updatePrefs_(prefs);
        }
    }
    /**
     * Get the current pref value from chrome.settingsPrivate to ensure the UI
     * stays up to date.
     */
    refresh(key) {
        this.settingsApi_.getPref(key).then(pref => {
            this.updatePrefs_([pref]);
        });
    }
    /**
     * Builds an object structure for the provided |path| within |prefsObject|,
     * ensuring that names that already exist are not overwritten. For example:
     * "a.b.c" -> a = {};a.b={};a.b.c={};
     * @param path Path to the new pref value.
     * @param value The value to expose at the end of the path.
     * @param prefsObject The prefs object to add the path to.
     */
    updatePrefPath_(path, value, prefsObject) {
        const parts = path.split('.');
        let cur = prefsObject;
        for (let part; parts.length && (part = parts.shift());) {
            if (!parts.length) {
                // last part, set the value.
                cur[part] = value;
            }
            else if (part in cur) {
                cur = cur[part];
            }
            else {
                cur = cur[part] = {};
            }
        }
    }
    /**
     * Updates the prefs model with the given prefs.
     */
    updatePrefs_(newPrefs) {
        // Use the existing prefs object or create it.
        const prefs = this.prefs || {};
        newPrefs.forEach((newPrefObj) => {
            // Use the PrefObject from settingsPrivate to create a copy in
            // lastPrefValues_ at the pref's key.
            this.lastPrefValues_[newPrefObj.key] = deepCopy(newPrefObj.value);
            if (!deepEqual(this.get(newPrefObj.key, prefs), newPrefObj)) {
                // Add the pref to |prefs|.
                this.updatePrefPath_(newPrefObj.key, newPrefObj, prefs);
                // If this.prefs already exists, notify listeners of the change.
                if (prefs === this.prefs) {
                    this.notifyPath('prefs.' + newPrefObj.key, newPrefObj);
                }
            }
        });
        if (!this.prefs) {
            this.prefs = prefs;
        }
    }
    /**
     * Given a 'property-changed' path, returns the key of the preference the
     * path refers to. E.g., if the path of the changed property is
     * 'prefs.search.suggest_enabled.value', the key of the pref that changed is
     * 'search.suggest_enabled'.
     */
    getPrefKeyFromPath_(path) {
        // Skip the first token, which refers to the member variable (this.prefs).
        const parts = path.split('.');
        assert(parts.shift() === 'prefs', 'Path doesn\'t begin with \'prefs\'');
        for (let i = 1; i <= parts.length; i++) {
            const key = parts.slice(0, i).join('.');
            // The lastPrefValues_ keys match the pref keys.
            if (this.lastPrefValues_.hasOwnProperty(key)) {
                return key;
            }
        }
        return '';
    }
    /**
     * Resets the element so it can be re-initialized with a new prefs state.
     */
    resetForTesting() {
        if (!this.initialized_) {
            return;
        }
        this.prefs = undefined;
        this.lastPrefValues_ = {};
        this.initialized_ = false;
        // Remove the listener added in initialize().
        this.settingsApi_.onPrefsChanged.removeListener(this.boundPrefsChanged_);
        this.settingsApi_ = chrome.settingsPrivate;
    }
}
customElements.define(SettingsPrefsElement.is, SettingsPrefsElement);

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
    // Whether focus change is triggered by a keyboard event.
    focusByKeyboard_ = true;
    classList_;
    /**
     * @param doc The document to attach the focus outline manager to.
     */
    constructor(doc) {
        this.classList_ = doc.documentElement.classList;
        doc.addEventListener('keydown', (e) => this.onEvent_(true, e), true);
        doc.addEventListener('mousedown', (e) => this.onEvent_(false, e), true);
        this.updateVisibility();
    }
    onEvent_(focusByKeyboard, e) {
        if (this.focusByKeyboard_ === focusByKeyboard) {
            return;
        }
        if (e instanceof KeyboardEvent && e.repeat) {
            // A repeated keydown should not trigger the focus state. For example,
            // there is a repeated ALT keydown if ALT+CLICK is used to open the
            // context menu and ALT is not released.
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

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Note: This file is forked from Polymer's paper-ripple-behavior.js
 *
 * `PaperRippleMixin` dynamically implements a ripple when the element has
 * focus via pointer or keyboard.
 *
 * NOTE: This behavior is intended to be used in conjunction with and after
 * `IronButtonState` and `IronControlState`.
 */

const PaperRippleMixin = dedupingMixin(superClass => {
  class PaperRippleMixin extends superClass {
    static get properties() {
      return {
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
      };
    }

    /**
     * Ensures a `<paper-ripple>` element is available when the element is
     * focused.
     */
    _buttonStateChanged() {
      if (this.focused) {
        this.ensureRipple();
      }
    }

    /**
     * In addition to the functionality provided in `IronButtonState`, ensures
     * a ripple effect is created when the element is in a `pressed` state.
     */
    _downHandler(event) {
      IronButtonStateImpl._downHandler.call(this, event);
      if (this.pressed) {
        this.ensureRipple(event);
      }
    }

    /**
     * Ensures this element contains a ripple effect. For startup efficiency
     * the ripple effect is dynamically on demand when needed.
     * @param {!Event=} optTriggeringEvent (optional) event that triggered the
     * ripple.
     */
    ensureRipple(optTriggeringEvent) {
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
    }

    /**
     * Returns the `<paper-ripple>` element used by this element to create
     * ripple effects. The element's ripple is created on demand, when
     * necessary, and calling this method will force the
     * ripple to be created.
     */
    getRipple() {
      this.ensureRipple();
      return this._ripple;
    }

    /**
     * Returns true if this element currently contains a ripple effect.
     * @return {boolean}
     */
    hasRipple() {
      return Boolean(this._ripple);
    }

    /**
     * Create the element's ripple effect via creating a `<paper-ripple>`.
     * Override this method to customize the ripple element.
     * @return {!PaperRippleElement} Returns a `<paper-ripple>` element.
     */
    _createRipple() {
      var element = /** @type {!PaperRippleElement} */ (
          document.createElement('paper-ripple'));
      return element;
    }

    _noinkChanged(noink) {
      if (this.hasRipple()) {
        this._ripple.noink = noink;
      }
    }
  }

  return PaperRippleMixin;
});

function getTemplate$V() {
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
const CrButtonElementBase = PaperRippleMixin(PolymerElement);
class CrButtonElement extends CrButtonElementBase {
    static get is() {
        return 'cr-button';
    }
    static get template() {
        return getTemplate$V();
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
     * from PaperRippleMixin.
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

const styleMod$6 = document.createElement('dom-module');
styleMod$6.appendChild(html `
  <template>
    <style>
:host{align-items:center;align-self:stretch;display:flex;margin:0;outline:0}:host(:not([effectively-disabled_])){cursor:pointer}:host(:not([no-hover],[effectively-disabled_]):hover){background-color:var(--cr-hover-background-color)}:host(:not([no-hover],[effectively-disabled_]):active){background-color:var(--cr-active-background-color)}:host(:not([no-hover],[effectively-disabled_])) cr-icon-button{--cr-icon-button-hover-background-color:transparent;--cr-icon-button-active-background-color:transparent}
    </style>
  </template>
`.content);
styleMod$6.register('cr-actionable-row-style');

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

function getTemplate$U() {
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
const CrIconbuttonElementBase = PaperRippleMixin(PolymerElement);
class CrIconButtonElement extends CrIconbuttonElementBase {
    static get is() {
        return 'cr-icon-button';
    }
    static get template() {
        return getTemplate$U();
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

const template$6 = html `
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
`;
document.head.appendChild(template$6.content);

function getTemplate$T() {
    return html `<!--_html_template_start_--><style include="cr-actionable-row-style cr-shared-style cr-hidden-style">:host{box-sizing:border-box;flex:1;font-family:inherit;font-size:100%;line-height:154%;min-height:var(--cr-section-min-height);padding:0}:host(:not([embedded])){padding:0 var(--cr-section-padding)}#startIcon{--iron-icon-fill-color:var(--cr-link-row-start-icon-color,
        var(--google-grey-700));display:flex;flex-shrink:0;padding-inline-end:var(--cr-icon-button-margin-start);width:var(--cr-link-row-icon-width,var(--cr-icon-size))}@media (prefers-color-scheme:dark){#startIcon{--iron-icon-fill-color:var(--cr-link-row-start-icon-color,
          var(--google-grey-500))}}#labelWrapper{flex:1;flex-basis:.000000001px;padding-bottom:var(--cr-section-vertical-padding);padding-top:var(--cr-section-vertical-padding);text-align:start}#label,#subLabel{display:flex}#buttonAriaDescription{clip:rect(0,0,0,0);display:block;position:fixed}</style>
<iron-icon id="startIcon" icon="[[startIcon]]" hidden="[[!startIcon]]" aria-hidden="true">
</iron-icon>
<div id="labelWrapper" hidden="[[hideLabelWrapper_]]">
  <div id="label" aria-hidden="[[!ariaShowLabel]]">
    [[label]]
    <slot name="label"></slot>
  </div>
  <div id="subLabel" class="cr-secondary-text" aria-hidden="[[!ariaShowSublabel]]">
    [[subLabel]]
    <slot name="sub-label"></slot>
  </div>
</div>
<slot></slot>
<div id="buttonAriaDescription" aria-hidden="true">
  [[computeButtonAriaDescription_(external, buttonAriaDescription)]]
</div>
<cr-icon-button id="icon" iron-icon="[[getIcon_(external)]]" role="link" part="icon" aria-roledescription$="[[roleDescription]]" aria-describedby="buttonAriaDescription" aria-labelledby="label subLabel" disabled="[[disabled]]">
</cr-icon-button>
<!--_html_template_end_-->`;
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * A link row is a UI element similar to a button, though usually wider than a
 * button (taking up the whole 'row'). The name link comes from the intended use
 * of this element to take the user to another page in the app or to an external
 * page (somewhat like an HTML link).
 */
class CrLinkRowElement extends PolymerElement {
    static get is() {
        return 'cr-link-row';
    }
    static get template() {
        return getTemplate$T();
    }
    static get properties() {
        return {
            ariaShowLabel: {
                type: Boolean,
                reflectToAttribute: true,
                value: false,
            },
            ariaShowSublabel: {
                type: Boolean,
                reflectToAttribute: true,
                value: false,
            },
            startIcon: {
                type: String,
                value: '',
            },
            label: {
                type: String,
                value: '',
            },
            subLabel: {
                type: String,
                /* Value used for noSubLabel attribute. */
                value: '',
            },
            disabled: {
                type: Boolean,
                reflectToAttribute: true,
            },
            external: {
                type: Boolean,
                value: false,
            },
            usingSlottedLabel: {
                type: Boolean,
                value: false,
            },
            roleDescription: String,
            buttonAriaDescription: String,
            hideLabelWrapper_: {
                type: Boolean,
                computed: 'computeHideLabelWrapper_(label, usingSlottedLabel)',
            },
        };
    }
    focus() {
        this.$.icon.focus();
    }
    computeHideLabelWrapper_() {
        return !(this.label || this.usingSlottedLabel);
    }
    getIcon_() {
        return this.external ? 'cr:open-in-new' : 'cr:arrow-right';
    }
    computeButtonAriaDescription_(external, buttonAriaDescription) {
        return buttonAriaDescription ??
            (external ? loadTimeData.getString('opensInNewTab') : '');
    }
}
customElements.define(CrLinkRowElement.is, CrLinkRowElement);

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

const template$5 = html`<dom-module id="paper-spinner-styles">
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

document.head.appendChild(template$5.content);

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

const template$4 = html`
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
template$4.setAttribute('strip-whitespace', '');

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
  _template: template$4,

  is: 'paper-spinner-lite',

  behaviors: [PaperSpinnerBehavior]
});

const template$3 = html `
<style>
html{--card-max-width:960px;--side-bar-width:300px;--toolbar-height:56px;--password-manager-main-basis:calc(var(--cr-centered-card-max-width) /
      var(--cr-centered-card-width-percentage));--control-label-spacing:20px;--section-min-height:48px;--two-line-section-min-height:64px;--error-color:var(--google-red-700)}@media (prefers-color-scheme:dark){html{--error-color:var(--google-red-300)}}
</style>
`;
document.head.appendChild(template$3.content);

const styleMod$5 = document.createElement('dom-module');
styleMod$5.appendChild(html `
  <template>
    <style>
.card{background-color:var(--cr-card-background-color);border-radius:var(--cr-card-border-radius);box-shadow:var(--cr-card-shadow)}cr-link-row[non-clickable]{background-color:var(--cr-card-background-color);cursor:default}.page-title{font-weight:400}.label{min-height:20px}.single-line-label{min-height:var(--section-min-height)}.flex-centered{align-items:center;display:flex}.elide-left{direction:rtl}.elide-left>a{direction:ltr;unicode-bidi:bidi-override}.dialog-title{color:var(--cr-primary-text-color);font-size:15px;font-weight:400;line-height:22px;margin:0;padding-block-end:16px;padding-block-start:16px}.settings-cr-link-row{--cr-icon-button-margin-start:0px}.site-link{color:var(--cr-primary-text-color);display:block;height:auto;line-height:154%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-elide{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}cr-input.password-input::part(input),input.password-input{font-family:'DejaVu Sans Mono',monospace}.input-field{margin-inline-end:34px;--cr-input-padding-start:20px;--cr-input-min-height:40px;--cr-input-error-display:none;--cr-input-border-radius:10px;--cr-icon-button-margin-start:0;--cr-icon-button-margin-end:0}
    </style>
  </template>
`.content);
styleMod$5.register('shared-style');

// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Base class for Web Components that don't use Polymer.
 * See the following file for usage:
 * chrome/test/data/webui/js/custom_element_test.js
 */
function emptyHTML() {
    return window.trustedTypes ? window.trustedTypes.emptyHTML : '';
}
class CustomElement extends HTMLElement {
    static get template() {
        return emptyHTML();
    }
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');
        template.innerHTML =
            this.constructor.template || emptyHTML();
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    $(query) {
        return this.shadowRoot.querySelector(query);
    }
    $all(query) {
        return this.shadowRoot.querySelectorAll(query);
    }
    getRequiredElement(query) {
        const el = this.shadowRoot.querySelector(query);
        assert(el);
        assert(el instanceof HTMLElement);
        return el;
    }
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @return Whether the passed tagged template literal is a valid array.
 */
function isValidArray(arr) {
    if (arr instanceof Array && Object.isFrozen(arr)) {
        return true;
    }
    return false;
}
/**
 * Checks if the passed tagged template literal only contains static string.
 * And return the string in the literal if so.
 * Throws an Error if the passed argument is not supported literals.
 */
function getStaticString(literal) {
    const isStaticString = isValidArray(literal) && !!literal.raw &&
        isValidArray(literal.raw) && literal.length === literal.raw.length &&
        literal.length === 1;
    assert(isStaticString, 'static_types.js only allows static strings');
    return literal.join('');
}
function createTypes(_ignore, literal) {
    return getStaticString(literal);
}
/**
 * Rules used to enforce static literal checks.
 */
const rules = {
    createHTML: createTypes,
    createScript: createTypes,
    createScriptURL: createTypes,
};
/**
 * This policy returns Trusted Types if the passed literal is static.
 */
let staticPolicy;
if (window.trustedTypes) {
    staticPolicy = window.trustedTypes.createPolicy('static-types', rules);
}
else {
    staticPolicy = rules;
}
/**
 * Returns TrustedHTML if the passed literal is static.
 */
function getTrustedHTML(literal) {
    return staticPolicy.createHTML('', literal);
}

function getTemplate$S() {
    return getTrustedHTML `<!--_html_template_start_--><style>:host{clip:rect(0 0 0 0);height:1px;overflow:hidden;position:fixed;width:1px}</style>

<div id="messages" role="alert" aria-live="polite" aria-relevant="additions">
</div>
<!--_html_template_end_-->`;
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * 150ms seems to be around the minimum time required for screen readers to
 * read out consecutively queued messages.
 */
const TIMEOUT_MS = 150;
/**
 * A map of an HTML element to its corresponding CrA11yAnnouncerElement. There
 * may be multiple CrA11yAnnouncerElements on a page, especially for cases in
 * which the DocumentElement's CrA11yAnnouncerElement becomes hidden or
 * deactivated (eg. when a modal dialog causes the CrA11yAnnouncerElement to
 * become inaccessible).
 */
const instances = new Map();
function getInstance(container = document.body) {
    if (instances.has(container)) {
        return instances.get(container);
    }
    assert(container.isConnected);
    const instance = new CrA11yAnnouncerElement();
    container.appendChild(instance);
    instances.set(container, instance);
    return instance;
}
class CrA11yAnnouncerElement extends CustomElement {
    constructor() {
        super(...arguments);
        this.currentTimeout_ = null;
        this.messages_ = [];
    }
    static get is() {
        return 'cr-a11y-announcer';
    }
    static get template() {
        return getTemplate$S();
    }
    disconnectedCallback() {
        if (this.currentTimeout_ !== null) {
            clearTimeout(this.currentTimeout_);
            this.currentTimeout_ = null;
        }
        for (const [parent, instance] of instances) {
            if (instance === this) {
                instances.delete(parent);
                break;
            }
        }
    }
    announce(message) {
        if (this.currentTimeout_ !== null) {
            clearTimeout(this.currentTimeout_);
            this.currentTimeout_ = null;
        }
        this.messages_.push(message);
        this.currentTimeout_ = setTimeout(() => {
            const messagesDiv = this.shadowRoot.querySelector('#messages');
            messagesDiv.innerHTML = window.trustedTypes.emptyHTML;
            // 
            for (const message of this.messages_) {
                const div = document.createElement('div');
                div.textContent = message;
                messagesDiv.appendChild(div);
            }
            // Dispatch a custom event to allow consumers to know when certain alerts
            // have been sent to the screen reader.
            this.dispatchEvent(new CustomEvent('cr-a11y-announcer-messages-sent', { bubbles: true, detail: { messages: this.messages_.slice() } }));
            this.messages_.length = 0;
            this.currentTimeout_ = null;
        }, TIMEOUT_MS);
    }
}
customElements.define(CrA11yAnnouncerElement.is, CrA11yAnnouncerElement);

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

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'I18nMixin' is a Mixin offering loading of internationalization
 * strings. Typically it is used as [[i18n('someString')]] computed bindings or
 * for this.i18n('foo'). It is not needed for HTML $i18n{otherString}, which is
 * handled by a C++ templatizer.
 */
const I18nMixin = dedupingMixin((superClass) => {
    class I18nMixin extends superClass {
        /**
         * Returns a translated string where $1 to $9 are replaced by the given
         * values.
         * @param id The ID of the string to translate.
         * @param varArgs Values to replace the placeholders $1 to $9 in the
         *     string.
         * @return A translated, substituted string.
         */
        i18nRaw_(id, ...varArgs) {
            return varArgs.length === 0 ? loadTimeData.getString(id) :
                loadTimeData.getStringF(id, ...varArgs);
        }
        /**
         * Returns a translated string where $1 to $9 are replaced by the given
         * values. Also sanitizes the output to filter out dangerous HTML/JS.
         * Use with Polymer bindings that are *not* inner-h-t-m-l.
         * NOTE: This is not related to $i18n{foo} in HTML, see file overview.
         * @param id The ID of the string to translate.
         * @param varArgs Values to replace the placeholders $1 to $9 in the
         *     string.
         * @return A translated, sanitized, substituted string.
         */
        i18n(id, ...varArgs) {
            const rawString = this.i18nRaw_(id, ...varArgs);
            return parseHtmlSubset(`<b>${rawString}</b>`).firstChild.textContent;
        }
        /**
         * Similar to 'i18n', returns a translated, sanitized, substituted
         * string. It receives the string ID and a dictionary containing the
         * substitutions as well as optional additional allowed tags and
         * attributes. Use with Polymer bindings that are inner-h-t-m-l, for
         * example.
         * @param id The ID of the string to translate.
         */
        i18nAdvanced(id, opts) {
            opts = opts || {};
            const rawString = this.i18nRaw_(id, ...(opts.substitutions || []));
            return sanitizeInnerHtml(rawString, opts);
        }
        /**
         * Similar to 'i18n', with an unused |locale| parameter used to trigger
         * updates when the locale changes.
         * @param locale The UI language used.
         * @param id The ID of the string to translate.
         * @param varArgs Values to replace the placeholders $1 to $9 in the
         *     string.
         * @return A translated, sanitized, substituted string.
         */
        i18nDynamic(_locale, id, ...varArgs) {
            return this.i18n(id, ...varArgs);
        }
        /**
         * Similar to 'i18nDynamic', but varArgs valus are interpreted as keys
         * in loadTimeData. This allows generation of strings that take other
         * localized strings as parameters.
         * @param locale The UI language used.
         * @param id The ID of the string to translate.
         * @param varArgs Values to replace the placeholders $1 to $9
         *     in the string. Values are interpreted as strings IDs if found in
         * the list of localized strings.
         * @return A translated, sanitized, substituted string.
         */
        i18nRecursive(locale, id, ...varArgs) {
            let args = varArgs;
            if (args.length > 0) {
                // Try to replace IDs with localized values.
                args = args.map(str => {
                    return this.i18nExists(str) ? loadTimeData.getString(str) : str;
                });
            }
            return this.i18nDynamic(locale, id, ...args);
        }
        /**
         * Returns true if a translation exists for |id|.
         */
        i18nExists(id) {
            return loadTimeData.valueExists(id);
        }
    }
    return I18nMixin;
});

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/* @fileoverview Utilities for determining the current platform. */
/** Whether we are using a Mac or not. */
const isMac = /Mac/.test(navigator.platform);
/** Whether this is on the Windows platform or not. */
const isWindows = /Win/.test(navigator.platform);
/** Whether this is on Android. */
const isAndroid = /Android/.test(navigator.userAgent);
/** Whether this is on iOS. */
const isIOS = /CriOS/.test(navigator.userAgent);

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
// clang-format on
let hideInk = false;
assert(!isIOS, 'pointerdown doesn\'t work on iOS');
document.addEventListener('pointerdown', function () {
    hideInk = true;
}, true);
document.addEventListener('keydown', function () {
    hideInk = false;
}, true);
/**
 * Attempts to track whether focus outlines should be shown, and if they
 * shouldn't, removes the "ink" (ripple) from a control while focusing it.
 * This is helpful when a user is clicking/touching, because it's not super
 * helpful to show focus ripples in that case. This is Polymer-specific.
 */
function focusWithoutInk(toFocus) {
    // |toFocus| does not have a 'noink' property, so it's unclear whether the
    // element has "ink" and/or whether it can be suppressed. Just focus().
    if (!('noink' in toFocus) || !hideInk) {
        toFocus.focus();
        return;
    }
    const toFocusWithNoInk = toFocus;
    // Make sure the element is in the document we're listening to events on.
    assert(document === toFocusWithNoInk.ownerDocument);
    const { noink } = toFocusWithNoInk;
    toFocusWithNoInk.noink = true;
    toFocusWithNoInk.focus();
    toFocusWithNoInk.noink = noink;
}

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A helper object used to get a pluralized string.
 */
// clang-format off
class PluralStringProxyImpl {
    getPluralString(messageName, itemCount) {
        return sendWithPromise('getPluralString', messageName, itemCount);
    }
    getPluralStringTupleWithComma(messageName1, itemCount1, messageName2, itemCount2) {
        return sendWithPromise('getPluralStringTupleWithComma', messageName1, itemCount1, messageName2, itemCount2);
    }
    getPluralStringTupleWithPeriods(messageName1, itemCount1, messageName2, itemCount2) {
        return sendWithPromise('getPluralStringTupleWithPeriods', messageName1, itemCount1, messageName2, itemCount2);
    }
    static getInstance() {
        return instance$6 || (instance$6 = new PluralStringProxyImpl());
    }
    static setInstance(obj) {
        instance$6 = obj;
    }
}
let instance$6 = null;

function getTemplate$R() {
    return html `<!--_html_template_start_--><style include="shared-style cr-shared-style">#checkupContent{margin-top:16px}#checkupStatus{align-items:center;display:flex;min-height:72px}#illustartion{align-items:center;background-color:var(--google-grey-50);border-top-left-radius:inherit;border-top-right-radius:inherit;display:flex;height:120px;justify-content:center}@media (prefers-color-scheme:dark){#illustartion{background-color:#1f1f1f}}#bannerImage{height:96px}#spinner{--paper-spinner-stroke-width:2px;height:16px;line-height:100%;margin-inline-start:20px;width:16px}#labelWrapper{flex:1;margin-inline-end:var(--control-label-spacing);margin-inline-start:20px}#refreshButton{margin-inline-end:10px}#retryButton{margin-inline-end:20px}cr-link-row[non-clickable]::part(icon){display:none}cr-link-row{--cr-link-row-start-icon-color:var(--google-green-700);--cr-link-row-icon-width:16px}cr-link-row[show-yellow-icon]{--cr-link-row-start-icon-color:var(--google-yellow-700)}cr-link-row[show-red-icon]{--cr-link-row-start-icon-color:var(--google-red-600)}@media (prefers-color-scheme:dark){cr-link-row{--cr-link-row-start-icon-color:var(--google-green-300)}cr-link-row[show-yellow-icon]{--cr-link-row-start-icon-color:var(--google-yellow-300)}cr-link-row[show-red-icon]{--cr-link-row-start-icon-color:var(--google-red-300)}}#checkupResult,#weakRow{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}</style>
<h2 class="page-title">$i18n{checkupTitle}</h2>
<div id="checkupContent" class="card">
  <div id="illustartion" role="presentation">
    <picture>
      <source class="banner" srcset="./images/[[bannerImage_]]_dark.svg" media="(prefers-color-scheme: dark)">
      <img id="bannerImage" class="banner" alt="" src="./images/[[bannerImage_]].svg">
    </picture>
  </div>
  <div class="hr" id="checkupStatus">
    <paper-spinner-lite id="spinner" active hidden="[[!isCheckRunning_]]">
    </paper-spinner-lite>
    <div id="labelWrapper">
      <div id="checkupStatusLabel" class="title">[[checkedPasswordsText_]]</div>
      <div id="checkupStatusSubLabel" class="cr-secondary-text label">
        [[getCheckupSublabelValue_(status_)]]
      </div>
    </div>
    <div id="checkupButtons" hidden="[[!showCheckButton_(status_)]]">
      <cr-icon-button id="refreshButton" class="icon-refresh" disabled="[[isCheckRunning_]]" hidden="[[showRetryButton_(status_)]]" on-click="onPasswordCheckButtonClick_" title="$i18n{reload}" aria-label="$i18n{runCheckupAriaDescription}">
      </cr-icon-button>
      <cr-button id="retryButton" hidden="[[!showRetryButton_(status_)]]" class="action-button" on-click="onPasswordCheckButtonClick_">
        $i18n{tryAgain}
      </cr-button>
    </div>
  </div>
  <div id="checkupResult" hidden="[[!showCheckupResult_(status_)]]">
    <cr-link-row id="compromisedRow" class="hr" start-icon="[[getIcon_(compromisedPasswords_, 'true', status_)]]" label="[[getCompromisedSectionLabel_(status_, compromisedPasswordsText_)]]" sub-label="[[getCompromisedSectionSublabel_(status_, compromisedPasswords_)]]" show-yellow-icon$="[[didCompromiseCheckFail_(status_)]]" show-red-icon$="[[hasIssues_(compromisedPasswords_)]]" non-clickable$="[[!hasIssues_(compromisedPasswords_)]]" on-click="onCompromisedClick_" role-description="button" aria-show-label aria-show-sublabel>
    </cr-link-row>
    <cr-link-row id="reusedRow" start-icon="[[getIcon_(reusedPasswords_)]]" label="[[reusedPasswordsText_]]" class="hr" sub-label="[[getReusedSectionSublabel_(reusedPasswords_)]]" show-yellow-icon$="[[hasIssues_(reusedPasswords_)]]" non-clickable$="[[!hasIssues_(reusedPasswords_)]]" on-click="onReusedClick_" role-description="button" aria-show-label aria-show-sublabel>
    </cr-link-row>
    <cr-link-row id="weakRow" start-icon="[[getIcon_(weakPasswords_)]]" label="[[weakPasswordsText_]]" class="hr" sub-label="[[getWeakSectionSublabel_(weakPasswords_)]]" show-yellow-icon$="[[hasIssues_(weakPasswords_)]]" non-clickable$="[[!hasIssues_(weakPasswords_)]]" on-click="onWeakClick_" role-description="button" aria-show-label aria-show-sublabel>
    </cr-link-row>
  </div>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Represents different interactions the user can perform on the Password Check
 * page.
 *
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Needs to stay in sync with PasswordCheckInteraction in enums.xml and
 * password_manager_metrics_util.h.
 */
var PasswordCheckInteraction;
(function (PasswordCheckInteraction) {
    PasswordCheckInteraction[PasswordCheckInteraction["START_CHECK_AUTOMATICALLY"] = 0] = "START_CHECK_AUTOMATICALLY";
    PasswordCheckInteraction[PasswordCheckInteraction["START_CHECK_MANUALLY"] = 1] = "START_CHECK_MANUALLY";
    PasswordCheckInteraction[PasswordCheckInteraction["STOP_CHECK"] = 2] = "STOP_CHECK";
    PasswordCheckInteraction[PasswordCheckInteraction["CHANGE_PASSWORD"] = 3] = "CHANGE_PASSWORD";
    PasswordCheckInteraction[PasswordCheckInteraction["EDIT_PASSWORD"] = 4] = "EDIT_PASSWORD";
    PasswordCheckInteraction[PasswordCheckInteraction["REMOVE_PASSWORD"] = 5] = "REMOVE_PASSWORD";
    PasswordCheckInteraction[PasswordCheckInteraction["SHOW_PASSWORD"] = 6] = "SHOW_PASSWORD";
    PasswordCheckInteraction[PasswordCheckInteraction["MUTE_PASSWORD"] = 7] = "MUTE_PASSWORD";
    PasswordCheckInteraction[PasswordCheckInteraction["UNMUTE_PASSWORD"] = 8] = "UNMUTE_PASSWORD";
    PasswordCheckInteraction[PasswordCheckInteraction["CHANGE_PASSWORD_AUTOMATICALLY"] = 9] = "CHANGE_PASSWORD_AUTOMATICALLY";
    // Must be last.
    PasswordCheckInteraction[PasswordCheckInteraction["COUNT"] = 10] = "COUNT";
})(PasswordCheckInteraction || (PasswordCheckInteraction = {}));
/**
 * Should be kept in sync with
 * |password_manager::metrics_util::PasswordViewPageInteractions|.
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 */
var PasswordViewPageInteractions;
(function (PasswordViewPageInteractions) {
    PasswordViewPageInteractions[PasswordViewPageInteractions["CREDENTIAL_ROW_CLICKED"] = 0] = "CREDENTIAL_ROW_CLICKED";
    PasswordViewPageInteractions[PasswordViewPageInteractions["CREDENTIAL_FOUND"] = 1] = "CREDENTIAL_FOUND";
    PasswordViewPageInteractions[PasswordViewPageInteractions["CREDENTIAL_NOT_FOUND"] = 2] = "CREDENTIAL_NOT_FOUND";
    PasswordViewPageInteractions[PasswordViewPageInteractions["USERNAME_COPY_BUTTON_CLICKED"] = 3] = "USERNAME_COPY_BUTTON_CLICKED";
    PasswordViewPageInteractions[PasswordViewPageInteractions["PASSWORD_COPY_BUTTON_CLICKED"] = 4] = "PASSWORD_COPY_BUTTON_CLICKED";
    PasswordViewPageInteractions[PasswordViewPageInteractions["PASSWORD_SHOW_BUTTON_CLICKED"] = 5] = "PASSWORD_SHOW_BUTTON_CLICKED";
    PasswordViewPageInteractions[PasswordViewPageInteractions["PASSWORD_EDIT_BUTTON_CLICKED"] = 6] = "PASSWORD_EDIT_BUTTON_CLICKED";
    PasswordViewPageInteractions[PasswordViewPageInteractions["PASSWORD_DELETE_BUTTON_CLICKED"] = 7] = "PASSWORD_DELETE_BUTTON_CLICKED";
    PasswordViewPageInteractions[PasswordViewPageInteractions["CREDENTIAL_EDITED"] = 8] = "CREDENTIAL_EDITED";
    PasswordViewPageInteractions[PasswordViewPageInteractions["TIMED_OUT_IN_EDIT_DIALOG"] = 9] = "TIMED_OUT_IN_EDIT_DIALOG";
    PasswordViewPageInteractions[PasswordViewPageInteractions["TIMED_OUT_IN_VIEW_PAGE"] = 10] = "TIMED_OUT_IN_VIEW_PAGE";
    PasswordViewPageInteractions[PasswordViewPageInteractions["CREDENTIAL_REQUESTED_BY_URL"] = 11] = "CREDENTIAL_REQUESTED_BY_URL";
    PasswordViewPageInteractions[PasswordViewPageInteractions["PASSKEY_DISPLAY_NAME_COPY_BUTTON_CLICKED"] = 12] = "PASSKEY_DISPLAY_NAME_COPY_BUTTON_CLICKED";
    PasswordViewPageInteractions[PasswordViewPageInteractions["PASSKEY_DELETE_BUTTON_CLICKED"] = 13] = "PASSKEY_DELETE_BUTTON_CLICKED";
    PasswordViewPageInteractions[PasswordViewPageInteractions["PASSKEY_EDIT_BUTTON_CLICKED"] = 14] = "PASSKEY_EDIT_BUTTON_CLICKED";
    // Must be last.
    PasswordViewPageInteractions[PasswordViewPageInteractions["COUNT"] = 15] = "COUNT";
})(PasswordViewPageInteractions || (PasswordViewPageInteractions = {}));
/**
 * Implementation that accesses the private API.
 */
class PasswordManagerImpl {
    addSavedPasswordListChangedListener(listener) {
        chrome.passwordsPrivate.onSavedPasswordsListChanged.addListener(listener);
    }
    removeSavedPasswordListChangedListener(listener) {
        chrome.passwordsPrivate.onSavedPasswordsListChanged.removeListener(listener);
    }
    addBlockedSitesListChangedListener(listener) {
        chrome.passwordsPrivate.onPasswordExceptionsListChanged.addListener(listener);
    }
    removeBlockedSitesListChangedListener(listener) {
        chrome.passwordsPrivate.onPasswordExceptionsListChanged.removeListener(listener);
    }
    addPasswordCheckStatusListener(listener) {
        chrome.passwordsPrivate.onPasswordCheckStatusChanged.addListener(listener);
    }
    removePasswordCheckStatusListener(listener) {
        chrome.passwordsPrivate.onPasswordCheckStatusChanged.removeListener(listener);
    }
    addInsecureCredentialsListener(listener) {
        chrome.passwordsPrivate.onInsecureCredentialsChanged.addListener(listener);
    }
    removeInsecureCredentialsListener(listener) {
        chrome.passwordsPrivate.onInsecureCredentialsChanged.removeListener(listener);
    }
    getSavedPasswordList() {
        return chrome.passwordsPrivate.getSavedPasswordList().catch(() => []);
    }
    getCredentialGroups() {
        return chrome.passwordsPrivate.getCredentialGroups();
    }
    getBlockedSitesList() {
        return chrome.passwordsPrivate.getPasswordExceptionList().catch(() => []);
    }
    getPasswordCheckStatus() {
        return chrome.passwordsPrivate.getPasswordCheckStatus();
    }
    getInsecureCredentials() {
        return chrome.passwordsPrivate.getInsecureCredentials();
    }
    getCredentialsWithReusedPassword() {
        return chrome.passwordsPrivate.getCredentialsWithReusedPassword();
    }
    startBulkPasswordCheck() {
        return chrome.passwordsPrivate.startPasswordCheck();
    }
    recordPasswordCheckInteraction(interaction) {
        chrome.metricsPrivate.recordEnumerationValue('PasswordManager.BulkCheck.UserAction', interaction, PasswordCheckInteraction.COUNT);
    }
    recordPasswordViewInteraction(interaction) {
        chrome.metricsPrivate.recordEnumerationValue('PasswordManager.PasswordViewPage.UserActions', interaction, PasswordViewPageInteractions.COUNT);
    }
    showAddShortcutDialog() {
        chrome.passwordsPrivate.showAddShortcutDialog();
    }
    requestCredentialsDetails(ids) {
        return chrome.passwordsPrivate.requestCredentialsDetails(ids);
    }
    requestPlaintextPassword(id, reason) {
        return chrome.passwordsPrivate.requestPlaintextPassword(id, reason);
    }
    addPassword(options) {
        return chrome.passwordsPrivate.addPassword(options);
    }
    changeCredential(credential) {
        return chrome.passwordsPrivate.changeCredential(credential);
    }
    removeCredential(id, fromStores) {
        chrome.passwordsPrivate.removeCredential(id, fromStores);
    }
    removeBlockedSite(id) {
        chrome.passwordsPrivate.removePasswordException(id);
    }
    muteInsecureCredential(insecureCredential) {
        chrome.passwordsPrivate.muteInsecureCredential(insecureCredential);
    }
    unmuteInsecureCredential(insecureCredential) {
        chrome.passwordsPrivate.unmuteInsecureCredential(insecureCredential);
    }
    undoRemoveSavedPasswordOrException() {
        chrome.passwordsPrivate.undoRemoveSavedPasswordOrException();
    }
    fetchFamilyMembers() {
        return chrome.passwordsPrivate.fetchFamilyMembers();
    }
    sharePassword(id, recipients) {
        chrome.passwordsPrivate.sharePassword(id, recipients);
    }
    importPasswords(toStore) {
        return chrome.passwordsPrivate.importPasswords(toStore);
    }
    continueImport(selectedIds) {
        return chrome.passwordsPrivate.continueImport(selectedIds);
    }
    resetImporter(deleteFile) {
        return chrome.passwordsPrivate.resetImporter(deleteFile);
    }
    requestExportProgressStatus() {
        return chrome.passwordsPrivate.requestExportProgressStatus();
    }
    exportPasswords() {
        return chrome.passwordsPrivate.exportPasswords();
    }
    addPasswordsFileExportProgressListener(listener) {
        chrome.passwordsPrivate.onPasswordsFileExportProgress.addListener(listener);
    }
    removePasswordsFileExportProgressListener(listener) {
        chrome.passwordsPrivate.onPasswordsFileExportProgress.removeListener(listener);
    }
    switchBiometricAuthBeforeFillingState() {
        chrome.passwordsPrivate.switchBiometricAuthBeforeFillingState();
    }
    showExportedFileInShell(filePath) {
        chrome.passwordsPrivate.showExportedFileInShell(filePath);
    }
    getUrlCollection(url) {
        return chrome.passwordsPrivate.getUrlCollection(url);
    }
    addPasswordManagerAuthTimeoutListener(listener) {
        chrome.passwordsPrivate.onPasswordManagerAuthTimeout.addListener(listener);
    }
    removePasswordManagerAuthTimeoutListener(listener) {
        chrome.passwordsPrivate.onPasswordManagerAuthTimeout.removeListener(listener);
    }
    extendAuthValidity() {
        chrome.passwordsPrivate.extendAuthValidity();
    }
    addAccountStorageOptInStateListener(listener) {
        chrome.passwordsPrivate.onAccountStorageOptInStateChanged.addListener(listener);
    }
    removeAccountStorageOptInStateListener(listener) {
        chrome.passwordsPrivate.onAccountStorageOptInStateChanged.removeListener(listener);
    }
    isOptedInForAccountStorage() {
        return chrome.passwordsPrivate.isOptedInForAccountStorage();
    }
    optInForAccountStorage(optIn) {
        chrome.passwordsPrivate.optInForAccountStorage(optIn);
    }
    isAccountStoreDefault() {
        return chrome.passwordsPrivate.isAccountStoreDefault();
    }
    movePasswordsToAccount(ids) {
        chrome.passwordsPrivate.movePasswordsToAccount(ids);
    }
    dismissSafetyHubPasswordMenuNotification() {
        chrome.send('dismissSafetyHubPasswordMenuNotification');
    }
    static getInstance() {
        return instance$5 || (instance$5 = new PasswordManagerImpl());
    }
    static setInstance(obj) {
        instance$5 = obj;
    }
}
let instance$5 = null;

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * The different pages that can be shown at a time.
 */
var Page;
(function (Page) {
    Page["PASSWORDS"] = "passwords";
    Page["CHECKUP"] = "checkup";
    Page["SETTINGS"] = "settings";
    // Sub-pages
    Page["CHECKUP_DETAILS"] = "checkup-details";
    Page["PASSWORD_DETAILS"] = "password-details";
})(Page || (Page = {}));
/**
 * The different checkup sub-pages that can be shown at a time.
 */
var CheckupSubpage;
(function (CheckupSubpage) {
    CheckupSubpage["COMPROMISED"] = "compromised";
    CheckupSubpage["REUSED"] = "reused";
    CheckupSubpage["WEAK"] = "weak";
})(CheckupSubpage || (CheckupSubpage = {}));
var UrlParam;
(function (UrlParam) {
    // Parameter which indicates search term.
    UrlParam["SEARCH_TERM"] = "q";
    // If this parameter is true, password check will start automatically when
    // navigating to Checkup section.
    UrlParam["START_CHECK"] = "start";
    // Triggers import on the Settings page.
    UrlParam["START_IMPORT"] = "import";
})(UrlParam || (UrlParam = {}));
class Route {
    constructor(page, queryParameters, details) {
        this.page = page;
        this.queryParameters = queryParameters || new URLSearchParams();
        this.details = details;
    }
    path() {
        let path;
        switch (this.page) {
            case Page.PASSWORDS:
            case Page.CHECKUP:
            case Page.SETTINGS:
                path = '/' + this.page;
                break;
            case Page.PASSWORD_DETAILS:
                const group = this.details;
                // When navigating from the passwords list details will be
                // |CredentialGroup|. In case of direct navigation details is string.
                const origin = group.name ? group.name : this.details;
                assert(origin);
                path = '/' + Page.PASSWORDS + '/' + origin;
                break;
            case Page.CHECKUP_DETAILS:
                assert(this.details);
                path = '/' + Page.CHECKUP + '/' + this.details;
                break;
        }
        const queryString = this.queryParameters.toString();
        if (queryString) {
            path += '?' + queryString;
        }
        return path;
    }
}
/**
 * A helper object to manage in-page navigations. Since the Password Manager
 * page needs to support different urls for different subpages (like the checkup
 * page), we use this object to manage the history and url conversions.
 */
class Router {
    static getInstance() {
        return routerInstance || (routerInstance = new Router());
    }
    constructor() {
        this.currentRoute_ = new Route(Page.PASSWORDS);
        this.previousRoute_ = null;
        this.routeObservers_ = new Set();
        this.processRoute_();
        window.addEventListener('popstate', () => {
            this.processRoute_();
        });
    }
    addObserver(observer) {
        assert(!this.routeObservers_.has(observer));
        this.routeObservers_.add(observer);
    }
    removeObserver(observer) {
        assert(this.routeObservers_.delete(observer));
    }
    get currentRoute() {
        return this.currentRoute_;
    }
    get previousRoute() {
        return this.previousRoute_;
    }
    /**
     * Navigates to a page and pushes a new history entry.
     */
    navigateTo(page, details, params = new URLSearchParams()) {
        const newRoute = new Route(page, params, details);
        if (this.currentRoute_.path() === newRoute.path()) {
            return;
        }
        const oldRoute = this.currentRoute_;
        this.currentRoute_ = newRoute;
        const path = this.currentRoute_.path();
        const state = { url: path };
        history.pushState(state, '', path);
        this.notifyObservers_(oldRoute);
    }
    /**
     * Updates the URL parameters of the current route via replacing the
     * window history state. This changes location.search but doesn't
     * change the page itself, hence does not push a new route history entry.
     * Notifies routeObservers_.
     */
    updateRouterParams(params) {
        const oldRoute = this.currentRoute_;
        this.currentRoute_ = new Route(oldRoute.page, params, oldRoute.details);
        window.history.replaceState(window.history.state, '', this.currentRoute_.path());
        this.notifyObservers_(oldRoute);
    }
    notifyObservers_(oldRoute) {
        assert(oldRoute !== this.currentRoute_);
        this.previousRoute_ = oldRoute;
        for (const observer of this.routeObservers_) {
            observer.currentRouteChanged(this.currentRoute_, oldRoute);
        }
    }
    /**
     * Helper function to set the current page and notify all observers.
     */
    processRoute_() {
        const oldRoute = this.currentRoute_;
        this.currentRoute_ =
            new Route(oldRoute.page, new URLSearchParams(location.search));
        const section = location.pathname.substring(1).split('/')[0] || '';
        const details = location.pathname.substring(2 + section.length);
        switch (section) {
            case Page.PASSWORDS:
                if (details) {
                    this.currentRoute_.page = Page.PASSWORD_DETAILS;
                    this.currentRoute_.details = details;
                }
                else {
                    this.currentRoute_.page = Page.PASSWORDS;
                }
                break;
            case Page.CHECKUP:
                if (details && details) {
                    this.currentRoute_.page = Page.CHECKUP_DETAILS;
                    this.currentRoute_.details = details;
                }
                else {
                    this.currentRoute_.page = Page.CHECKUP;
                }
                break;
            case Page.SETTINGS:
                this.currentRoute_.page = Page.SETTINGS;
                break;
            default:
                history.replaceState({}, '', this.currentRoute_.page);
        }
        this.notifyObservers_(oldRoute);
    }
}
let routerInstance = null;
const RouteObserverMixin = dedupingMixin((superClass) => {
    class RouteObserverMixin extends superClass {
        connectedCallback() {
            super.connectedCallback();
            Router.getInstance().addObserver(this);
            this.currentRouteChanged(Router.getInstance().currentRoute, Router.getInstance().currentRoute);
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            Router.getInstance().removeObserver(this);
        }
        currentRouteChanged(_newRoute, _oldRoute) {
            assertNotReached();
        }
    }
    return RouteObserverMixin;
});

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CheckState = chrome.passwordsPrivate.PasswordCheckState;
const CheckupSectionElementBase = RouteObserverMixin(I18nMixin(PolymerElement));
class CheckupSectionElement extends CheckupSectionElementBase {
    constructor() {
        super(...arguments);
        this.didCheckAutomatically_ = false;
        this.statusChangedListener_ = null;
        this.insecureCredentialsChangedListener_ = null;
        this.setSavedPasswordsListener_ = null;
    }
    static get is() {
        return 'checkup-section';
    }
    static get template() {
        return getTemplate$R();
    }
    static get properties() {
        return {
            focusConfig: {
                type: Object,
                observer: 'focusConfigChanged_',
            },
            /**
             * The number of checked passwords as a formatted string.
             */
            checkedPasswordsText_: String,
            /**
             * The number of compromised passwords as a formatted string.
             */
            compromisedPasswordsText_: String,
            /**
             * The number of weak passwords as a formatted string.
             */
            reusedPasswordsText_: String,
            /**
             * The number of weak passwords as a formatted string.
             */
            weakPasswordsText_: String,
            /**
             * The status indicates progress and affects banner, title and icon.
             */
            status_: {
                type: Object,
                observer: 'onStatusChanged_',
            },
            compromisedPasswords_: {
                type: Array,
                observer: 'onCompromisedPasswordsChanged_',
            },
            reusedPasswords_: {
                type: Array,
                observer: 'onReusedPasswordsChanged_',
            },
            weakPasswords_: {
                type: Array,
                observer: 'onWeakPasswordsChanged_',
            },
            isCheckRunning_: {
                type: Boolean,
                computed: 'computeIsCheckRunning_(status_)',
            },
            isCheckSuccessful_: {
                type: Boolean,
                computed: 'computeIsCheckSuccessful_(status_)',
            },
            bannerImage_: {
                type: Array,
                value: 'checkup_result_banner_error',
                computed: 'computeBannerImage_(status_, compromisedPasswords_, ' +
                    'reusedPasswords_, weakPasswords_)',
            },
            groupCount_: {
                type: Number,
                value: 0,
                observer: 'updateCheckedPasswordsText_',
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.statusChangedListener_ = status => {
            this.status_ = status;
        };
        this.insecureCredentialsChangedListener_ = insecureCredentials => {
            this.compromisedPasswords_ = insecureCredentials.filter(cred => {
                return !cred.compromisedInfo.isMuted &&
                    cred.compromisedInfo.compromiseTypes.some(type => {
                        return (type === chrome.passwordsPrivate.CompromiseType.LEAKED ||
                            type === chrome.passwordsPrivate.CompromiseType.PHISHED);
                    });
            });
            this.reusedPasswords_ = insecureCredentials.filter(cred => {
                return cred.compromisedInfo.compromiseTypes.some(type => {
                    return type === chrome.passwordsPrivate.CompromiseType.REUSED;
                });
            });
            this.weakPasswords_ = insecureCredentials.filter(cred => {
                return cred.compromisedInfo.compromiseTypes.some(type => {
                    return type === chrome.passwordsPrivate.CompromiseType.WEAK;
                });
            });
        };
        this.setSavedPasswordsListener_ = _passwordList => {
            PasswordManagerImpl.getInstance().getCredentialGroups().then(groups => this.groupCount_ = groups.length);
        };
        PasswordManagerImpl.getInstance().getPasswordCheckStatus().then(this.statusChangedListener_);
        PasswordManagerImpl.getInstance().addPasswordCheckStatusListener(this.statusChangedListener_);
        PasswordManagerImpl.getInstance().getInsecureCredentials().then(this.insecureCredentialsChangedListener_);
        PasswordManagerImpl.getInstance().addInsecureCredentialsListener(this.insecureCredentialsChangedListener_);
        PasswordManagerImpl.getInstance().getCredentialGroups().then(groups => this.groupCount_ = groups.length);
        PasswordManagerImpl.getInstance().addSavedPasswordListChangedListener(this.setSavedPasswordsListener_);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        assert(this.statusChangedListener_);
        PasswordManagerImpl.getInstance().removePasswordCheckStatusListener(this.statusChangedListener_);
        this.statusChangedListener_ = null;
        assert(this.insecureCredentialsChangedListener_);
        PasswordManagerImpl.getInstance().removeInsecureCredentialsListener(this.insecureCredentialsChangedListener_);
        this.insecureCredentialsChangedListener_ = null;
        assert(this.setSavedPasswordsListener_);
        PasswordManagerImpl.getInstance().removeSavedPasswordListChangedListener(this.setSavedPasswordsListener_);
        this.setSavedPasswordsListener_ = null;
    }
    currentRouteChanged(route) {
        const param = route.queryParameters.get(UrlParam.START_CHECK) || '';
        if (param === 'true' && !this.didCheckAutomatically_) {
            this.didCheckAutomatically_ = true;
            PasswordManagerImpl.getInstance().startBulkPasswordCheck().catch(() => { });
            PasswordManagerImpl.getInstance().recordPasswordCheckInteraction(PasswordCheckInteraction.START_CHECK_AUTOMATICALLY);
        }
        if (route.page === Page.CHECKUP) {
            PasswordManagerImpl.getInstance()
                .dismissSafetyHubPasswordMenuNotification();
        }
    }
    async onStatusChanged_(newStatus, oldStatus) {
        // if state is unchanged - nothing to do.
        if (oldStatus !== undefined && oldStatus.state === newStatus.state) {
            return;
        }
        await this.updateCheckedPasswordsText_();
        if (newStatus.state === CheckState.NO_PASSWORDS) {
            return;
        }
        // Announce password check result and focus retry/refresh button when
        // password check is finished.
        if (!!oldStatus && oldStatus.state === CheckState.RUNNING &&
            newStatus.state !== CheckState.RUNNING) {
            let stateText;
            if (this.compromisedPasswords_.length > 0) {
                stateText = this.i18n('checkupResultRed');
            }
            else if (this.hasAnyIssues_()) {
                stateText = this.i18n('checkupResultYellow');
            }
            else {
                stateText = this.i18n('checkupResultGreen');
            }
            getInstance().announce([this.checkedPasswordsText_, stateText].join('. '));
            focusWithoutInk(this.showRetryButton_() ? this.$.retryButton : this.$.refreshButton);
        }
        else if (!!oldStatus && oldStatus.state !== CheckState.RUNNING &&
            newStatus.state === CheckState.RUNNING) {
            // Announce password checkup has started.
            getInstance().announce('Password check started');
        }
    }
    async updateCheckedPasswordsText_() {
        if (!this.status_) {
            return;
        }
        switch (this.status_.state) {
            case CheckState.IDLE:
            case CheckState.OFFLINE:
            case CheckState.SIGNED_OUT:
            case CheckState.QUOTA_LIMIT:
            case CheckState.OTHER_ERROR:
            case CheckState.NO_PASSWORDS:
                this.checkedPasswordsText_ =
                    await PluralStringProxyImpl.getInstance().getPluralString('checkedPasswords', this.groupCount_);
                return;
            case CheckState.CANCELED:
                this.checkedPasswordsText_ = this.i18n('checkupCanceled');
                return;
            case CheckState.RUNNING:
                this.checkedPasswordsText_ =
                    await PluralStringProxyImpl.getInstance().getPluralString('checkingPasswords', this.status_.totalNumberOfPasswords || 0);
                return;
            default:
                assertNotReached('Can\'t find a title for state: ' + this.status_.state);
        }
    }
    async onCompromisedPasswordsChanged_() {
        this.compromisedPasswordsText_ =
            await PluralStringProxyImpl.getInstance().getPluralString('compromisedPasswords', this.compromisedPasswords_.length);
    }
    async onReusedPasswordsChanged_() {
        this.reusedPasswordsText_ =
            await PluralStringProxyImpl.getInstance().getPluralString('reusedPasswords', this.reusedPasswords_.length);
    }
    async onWeakPasswordsChanged_() {
        this.weakPasswordsText_ =
            await PluralStringProxyImpl.getInstance().getPluralString('weakPasswords', this.weakPasswords_.length);
    }
    /**
     * @return true iff a check is running right according to the given |status|.
     */
    computeIsCheckRunning_() {
        return this.status_.state === CheckState.RUNNING;
    }
    computeIsCheckSuccessful_() {
        return this.status_.state === CheckState.IDLE;
    }
    didCompromiseCheckFail_() {
        return [
            CheckState.OFFLINE,
            CheckState.SIGNED_OUT,
            CheckState.QUOTA_LIMIT,
            CheckState.OTHER_ERROR,
        ].includes(this.status_.state);
    }
    showRetryButton_() {
        return !this.computeIsCheckRunning_() && !this.computeIsCheckSuccessful_();
    }
    showCheckButton_() {
        return this.status_.state !== CheckState.NO_PASSWORDS;
    }
    /**
     * Starts/Restarts bulk password check.
     */
    onPasswordCheckButtonClick_() {
        PasswordManagerImpl.getInstance().startBulkPasswordCheck().catch(() => { });
        PasswordManagerImpl.getInstance().recordPasswordCheckInteraction(PasswordCheckInteraction.START_CHECK_MANUALLY);
    }
    computeBannerImage_() {
        if (!this.status_) {
            return 'checkup_result_banner_error';
        }
        if (this.computeIsCheckRunning_() ||
            this.status_.state === CheckState.NO_PASSWORDS) {
            return 'checkup_result_banner_running';
        }
        if (this.computeIsCheckSuccessful_()) {
            return this.hasAnyIssues_() ? 'checkup_result_banner_compromised' :
                'checkup_result_banner_ok';
        }
        return 'checkup_result_banner_error';
    }
    getIcon_(issues, checkForError) {
        if (checkForError && this.status_ && this.didCompromiseCheckFail_()) {
            return 'cr:error';
        }
        return !!issues && issues.length ? 'cr:error' : 'cr:check-circle';
    }
    hasAnyIssues_() {
        if (!this.compromisedPasswords_ || !this.reusedPasswords_ ||
            !this.weakPasswords_) {
            return false;
        }
        return !!this.compromisedPasswords_.length ||
            !!this.reusedPasswords_.length || !!this.weakPasswords_.length;
    }
    hasIssues_(issues) {
        return !!issues.length;
    }
    getCompromisedSectionLabel_() {
        if (this.status_ && this.didCompromiseCheckFail_()) {
            // In case of an error, don't show "No compromised passwords" title since
            // this might be a lie.
            return !this.compromisedPasswords_ || !this.compromisedPasswords_.length ?
                this.i18n('compromisedRowWithError') :
                this.compromisedPasswordsText_;
        }
        return this.compromisedPasswordsText_;
    }
    getCompromisedSectionSublabel_() {
        if (!this.status_ || !this.compromisedPasswords_) {
            return '';
        }
        const brandingName = this.i18n('localPasswordManager');
        switch (this.status_.state) {
            case CheckState.IDLE:
            case CheckState.NO_PASSWORDS:
            case CheckState.RUNNING:
            case CheckState.CANCELED:
                return this.compromisedPasswords_.length ?
                    this.i18n('compromisedPasswordsTitle') :
                    this.i18n('compromisedPasswordsEmpty');
            case CheckState.OFFLINE:
                return this.i18n('checkupErrorOffline', brandingName);
            case CheckState.SIGNED_OUT:
                return this.i18n('checkupErrorSignedOut', brandingName);
            case CheckState.QUOTA_LIMIT:
                return this.i18n('checkupErrorQuota', brandingName);
            case CheckState.OTHER_ERROR:
                return this.i18n('checkupErrorGeneric', brandingName);
            default:
                assertNotReached('Can\'t find a title for state: ' + this.status_.state);
        }
    }
    getReusedSectionSublabel_() {
        return this.reusedPasswords_.length ? this.i18n('reusedPasswordsTitle') :
            this.i18n('reusedPasswordsEmpty');
    }
    getWeakSectionSublabel_() {
        return this.weakPasswords_.length ? this.i18n('weakPasswordsTitle') :
            this.i18n('weakPasswordsEmpty');
    }
    onCompromisedClick_() {
        if (!this.compromisedPasswords_.length) {
            return;
        }
        Router.getInstance().navigateTo(Page.CHECKUP_DETAILS, CheckupSubpage.COMPROMISED);
    }
    onReusedClick_() {
        if (!this.reusedPasswords_.length) {
            return;
        }
        Router.getInstance().navigateTo(Page.CHECKUP_DETAILS, CheckupSubpage.REUSED);
    }
    onWeakClick_() {
        if (!this.weakPasswords_.length) {
            return;
        }
        Router.getInstance().navigateTo(Page.CHECKUP_DETAILS, CheckupSubpage.WEAK);
    }
    showCheckupSublabel_() {
        return this.computeIsCheckRunning_();
    }
    getCheckupSublabelValue_() {
        assert(this.status_);
        if (!this.computeIsCheckRunning_()) {
            return this.status_.state === CheckState.NO_PASSWORDS ?
                this.i18n('checkupErrorNoPasswords', this.i18n('localPasswordManager')) :
                this.status_.elapsedTimeSinceLastCheck || '';
        }
        return this.i18n('checkupProgress', this.status_.alreadyProcessed || 0, this.status_.totalNumberOfPasswords || 0);
    }
    showCheckupResult_() {
        assert(this.status_);
        if (this.computeIsCheckRunning_()) {
            return false;
        }
        return this.status_.state !== CheckState.NO_PASSWORDS;
    }
    focusConfigChanged_(_newConfig, oldConfig) {
        // focusConfig is set only once on the parent, so this observer should
        // only fire once.
        assert(!oldConfig);
        this.focusConfig.set(Page.CHECKUP_DETAILS, () => {
            const previousRoute = Router.getInstance().previousRoute;
            switch (previousRoute?.details) {
                case CheckupSubpage.COMPROMISED:
                    focusWithoutInk(this.$.compromisedRow);
                    break;
                case CheckupSubpage.REUSED:
                    focusWithoutInk(this.$.reusedRow);
                    break;
                case CheckupSubpage.WEAK:
                    focusWithoutInk(this.$.weakRow);
                    break;
            }
        });
    }
}
customElements.define(CheckupSectionElement.is, CheckupSectionElement);

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
 */
class EventTracker {
    listeners_ = [];
    /**
     * Add an event listener - replacement for EventTarget.addEventListener.
     * @param target The DOM target to add a listener to.
     * @param eventType The type of event to subscribe to.
     * @param listener The listener to add.
     * @param capture Whether to invoke during the capture phase. Defaults to
     *     false.
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
     * @param target The DOM target to remove a listener from.
     * @param eventType The type of event to remove.
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
        this.listeners_.forEach(listener => EventTracker.removeEventListener(listener));
        this.listeners_ = [];
    }
    /**
     * Remove a single event listener given it's tracking entry. It's up to the
     * caller to ensure the entry is removed from listeners_.
     * @param entry The entry describing the listener to
     * remove.
     */
    static removeEventListener(entry) {
        entry.target.removeEventListener(entry.eventType, entry.listener, entry.capture);
    }
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @return The currently focused element (including elements that are
 *     behind a shadow root), or null if nothing is focused.
 */
function getDeepActiveElement() {
    let a = document.activeElement;
    while (a && a.shadowRoot && a.shadowRoot.activeElement) {
        a = a.shadowRoot.activeElement;
    }
    return a;
}
/**
 * Check the directionality of the page.
 * @return True if Chrome is running an RTL UI.
 */
function isRTL() {
    return document.documentElement.dir === 'rtl';
}
/**
 * Quote a string so it can be used in a regular expression.
 * @param str The source string.
 * @return The escaped string.
 */
function quoteString(str) {
    return str.replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:])/g, '\\$1');
}
/**
 * Calls |callback| and stops listening the first time any event in |eventNames|
 * is triggered on |target|.
 * @param eventNames Array or space-delimited string of event names to listen to
 *     (e.g. 'click mousedown').
 * @param callback Called at most once. The optional return value is passed on
 *     by the listener.
 */
function listenOnce(target, eventNames, callback) {
    const eventNamesArray = Array.isArray(eventNames) ?
        eventNames :
        eventNames.split(/ +/);
    const removeAllAndCallCallback = function (event) {
        eventNamesArray.forEach(function (eventName) {
            target.removeEventListener(eventName, removeAllAndCallCallback, false);
        });
        return callback(event);
    };
    eventNamesArray.forEach(function (eventName) {
        target.addEventListener(eventName, removeAllAndCallCallback, false);
    });
}
/**
 * @return Whether a modifier key was down when processing |e|.
 */
function hasKeyModifiers(e) {
    return !!(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey);
}

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
// clang-format on
const ACTIVE_CLASS = 'focus-row-active';
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
    root;
    delegate;
    eventTracker = new EventTracker();
    boundary_;
    /**
     * @param root The root of this focus row. Focus classes are
     *     applied to |root| and all added elements must live within |root|.
     * @param boundary Focus events are ignored outside of this element.
     * @param delegate An optional event delegate.
     */
    constructor(root, boundary, delegate) {
        this.root = root;
        this.boundary_ = boundary || document.documentElement;
        this.delegate = delegate;
    }
    /**
     * Whether it's possible that |element| can be focused.
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
            current = parent;
        }
    }
    /**
     * A focus override is a function that returns an element that should gain
     * focus. The element may not be directly selectable for example the element
     * that can gain focus is in a shadow DOM. Allowing an override via a
     * function leaves the details of how the element is retrieved to the
     * component.
     */
    static getFocusableElement(element) {
        const withFocusable = element;
        if (withFocusable.getFocusableElement) {
            return withFocusable.getFocusableElement();
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
     * @param type The type of element to track focus of.
     * @param selectorOrElement The selector of the element
     *    from this row's root, or the element itself.
     * @return Whether a new item was added.
     */
    addItem(type, selectorOrElement) {
        assert(type);
        let element;
        if (typeof selectorOrElement === 'string') {
            element = this.root.querySelector(selectorOrElement);
        }
        else {
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
     * @param sampleElement An element for to find an equivalent
     *     for.
     * @return An equivalent element to focus for
     *     |sampleElement|.
     */
    getCustomEquivalent(_sampleElement) {
        const focusable = this.getFirstFocusable();
        assert(focusable);
        return focusable;
    }
    /**
     * @return All registered elements (regardless of focusability).
     */
    getElements() {
        return Array.from(this.root.querySelectorAll('[focus-type]'))
            .map(FocusRow.getFocusableElement);
    }
    /**
     * Find the element that best matches |sampleElement|.
     * @param sampleElement An element from a row of the same
     *     type which previously held focus.
     * @return The element that best matches sampleElement.
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
     * @param type An optional type to search for.
     * @return The first focusable element with |type|.
     */
    getFirstFocusable(type) {
        const element = this.getFocusableElements().find(el => !type || el.getAttribute('focus-type') === type);
        return element || null;
    }
    /** @return Registered, focusable elements. */
    getFocusableElements() {
        return this.getElements().filter(FocusRow.isFocusable);
    }
    /**
     * @param element An element to determine a focus type for.
     * @return The focus type for |element| or '' if none.
     */
    getTypeForElement(element) {
        return element.getAttribute('focus-type') || '';
    }
    /** @return Whether this row is currently active. */
    isActive() {
        return this.root.classList.contains(ACTIVE_CLASS);
    }
    /**
     * Enables/disables the tabIndex of the focusable elements in the FocusRow.
     * tabIndex can be set properly.
     * @param active True if tab is allowed for this row.
     */
    makeActive(active) {
        if (active === this.isActive()) {
            return;
        }
        this.getElements().forEach(function (element) {
            element.tabIndex = active ? 0 : -1;
        });
        this.root.classList.toggle(ACTIVE_CLASS, active);
    }
    onBlur_(e) {
        if (!this.boundary_.contains(e.relatedTarget)) {
            return;
        }
        const currentTarget = e.currentTarget;
        if (this.getFocusableElements().indexOf(currentTarget) >= 0) {
            this.makeActive(false);
        }
    }
    onFocus_(e) {
        if (this.delegate) {
            this.delegate.onFocus(this, e);
        }
    }
    onMousedown_(e) {
        // Only accept left mouse clicks.
        if (e.button) {
            return;
        }
        // Allow the element under the mouse cursor to be focusable.
        const target = e.currentTarget;
        if (!target.disabled) {
            target.tabIndex = 0;
        }
    }
    onKeydown_(e) {
        const elements = this.getFocusableElements();
        const currentElement = FocusRow.getFocusableElement(e.currentTarget);
        const elementIndex = elements.indexOf(currentElement);
        assert(elementIndex >= 0);
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
        }
        else if (e.key === 'ArrowLeft') {
            index = elementIndex + (isRTL() ? 1 : -1);
        }
        else if (e.key === 'ArrowRight') {
            index = elementIndex + (isRTL() ? -1 : 1);
        }
        else if (e.key === 'Home') {
            index = 0;
        }
        else if (e.key === 'End') {
            index = elements.length - 1;
        }
        else {
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

function getTemplate$Q() {
    return html `<!--_html_template_start_-->    <style>:host dialog{background-color:var(--cr-menu-background-color);border:none;border-radius:var(--cr-menu-border-radius,4px);box-shadow:var(--cr-menu-shadow);margin:0;min-width:128px;outline:0;padding:0;position:absolute}@media (forced-colors:active){:host dialog{border:var(--cr-border-hcm)}}:host-context([chrome-refresh-2023]){--cr-hairline:1px solid var(--color-menu-separator,
            var(--cr-fallback-color-divider));--cr-action-menu-disabled-item-color:var(--color-menu-item-foreground-disabled,
                var(--cr-fallback-color-disabled-foreground));--cr-action-menu-disabled-item-opacity:1;--cr-menu-background-color:var(--color-menu-background,
            var(--cr-fallback-color-surface));--cr-menu-background-focus-color:var(--cr-hover-background-color);--cr-menu-shadow:var(--cr-elevation-2);--cr-primary-text-color:var(--color-menu-item-foreground,
            var(--cr-fallback-color-on-surface))}:host dialog::backdrop{background-color:transparent}:host ::slotted(.dropdown-item){-webkit-tap-highlight-color:transparent;background:0 0;border:none;border-radius:0;box-sizing:border-box;color:var(--cr-primary-text-color);font:inherit;min-height:32px;padding:8px 24px;text-align:start;user-select:none;width:100%}:host ::slotted(.dropdown-item:not([hidden])){align-items:center;display:flex}:host ::slotted(.dropdown-item[disabled]){color:var(--cr-action-menu-disabled-item-color,var(--cr-primary-text-color));opacity:var(--cr-action-menu-disabled-item-opacity,.65)}:host ::slotted(.dropdown-item:not([disabled])){cursor:pointer}:host ::slotted(.dropdown-item:focus){background-color:var(--cr-menu-background-focus-color);outline:0}@media (forced-colors:active){:host ::slotted(.dropdown-item:focus){outline:var(--cr-focus-outline-hcm)}}.item-wrapper{background:var(--cr-menu-background-sheen);outline:0;padding:8px 0}:host-context([chrome-refresh-2023]) .item-wrapper{background:0 0}</style>
    <dialog id="dialog" part="dialog" on-close="onNativeDialogClose_" role="application" aria-roledescription$="[[roleDescription]]">
      <div id="wrapper" class="item-wrapper" role="menu" tabindex="-1" aria-label$="[[accessibilityLabel]]">
        <slot id="contentNode" on-slotchange="onSlotchange_"></slot>
      </div>
    </dialog>
<!--_html_template_end_-->`;
}

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var AnchorAlignment;
(function (AnchorAlignment) {
    AnchorAlignment[AnchorAlignment["BEFORE_START"] = -2] = "BEFORE_START";
    AnchorAlignment[AnchorAlignment["AFTER_START"] = -1] = "AFTER_START";
    AnchorAlignment[AnchorAlignment["CENTER"] = 0] = "CENTER";
    AnchorAlignment[AnchorAlignment["BEFORE_END"] = 1] = "BEFORE_END";
    AnchorAlignment[AnchorAlignment["AFTER_END"] = 2] = "AFTER_END";
})(AnchorAlignment || (AnchorAlignment = {}));
const DROPDOWN_ITEM_CLASS = 'dropdown-item';
const SELECTABLE_DROPDOWN_ITEM_QUERY = `.${DROPDOWN_ITEM_CLASS}:not([hidden]):not([disabled])`;
const AFTER_END_OFFSET = 10;
/**
 * Returns the point to start along the X or Y axis given a start and end
 * point to anchor to, the length of the target and the direction to anchor
 * in. If honoring the anchor would force the menu outside of min/max, this
 * will ignore the anchor position and try to keep the menu within min/max.
 */
function getStartPointWithAnchor(start, end, menuLength, anchorAlignment, min, max) {
    let startPoint = 0;
    switch (anchorAlignment) {
        case AnchorAlignment.BEFORE_START:
            startPoint = start - menuLength;
            break;
        case AnchorAlignment.AFTER_START:
            startPoint = start;
            break;
        case AnchorAlignment.CENTER:
            startPoint = (start + end - menuLength) / 2;
            break;
        case AnchorAlignment.BEFORE_END:
            startPoint = end - menuLength;
            break;
        case AnchorAlignment.AFTER_END:
            startPoint = end;
            break;
    }
    if (startPoint + menuLength > max) {
        startPoint = end - menuLength;
    }
    if (startPoint < min) {
        startPoint = start;
    }
    startPoint = Math.max(min, Math.min(startPoint, max - menuLength));
    return startPoint;
}
function getDefaultShowConfig() {
    return {
        top: 0,
        left: 0,
        height: 0,
        width: 0,
        anchorAlignmentX: AnchorAlignment.AFTER_START,
        anchorAlignmentY: AnchorAlignment.AFTER_START,
        minX: 0,
        minY: 0,
        maxX: 0,
        maxY: 0,
    };
}
class CrActionMenuElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.boundClose_ = null;
        this.resizeObserver_ = null;
        this.hasMousemoveListener_ = false;
        this.anchorElement_ = null;
        this.lastConfig_ = null;
    }
    static get is() {
        return 'cr-action-menu';
    }
    static get template() {
        return getTemplate$Q();
    }
    static get properties() {
        return {
            // Accessibility text of the menu. Should be something along the lines of
            // "actions", or "more actions".
            accessibilityLabel: String,
            // Setting this flag will make the menu listen for content size changes
            // and reposition to its anchor accordingly.
            autoReposition: {
                type: Boolean,
                value: false,
            },
            open: {
                type: Boolean,
                notify: true,
                value: false,
            },
            // Descriptor of the menu. Should be something along the lines of "menu"
            roleDescription: String,
        };
    }
    ready() {
        super.ready();
        this.addEventListener('keydown', this.onKeyDown_.bind(this));
        this.addEventListener('mouseover', this.onMouseover_);
        this.addEventListener('click', this.onClick_);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeListeners_();
    }
    fire_(eventName, detail) {
        this.dispatchEvent(new CustomEvent(eventName, { bubbles: true, composed: true, detail }));
    }
    /**
     * Exposing internal <dialog> elements for tests.
     */
    getDialog() {
        return this.$.dialog;
    }
    removeListeners_() {
        window.removeEventListener('resize', this.boundClose_);
        window.removeEventListener('popstate', this.boundClose_);
        if (this.resizeObserver_) {
            this.resizeObserver_.disconnect();
            this.resizeObserver_ = null;
        }
    }
    onNativeDialogClose_(e) {
        // Ignore any 'close' events not fired directly by the <dialog> element.
        if (e.target !== this.$.dialog) {
            return;
        }
        // Catch and re-fire the 'close' event such that it bubbles across Shadow
        // DOM v1.
        this.fire_('close');
    }
    onClick_(e) {
        if (e.target === this) {
            this.close();
            e.stopPropagation();
        }
    }
    onKeyDown_(e) {
        e.stopPropagation();
        if (e.key === 'Tab' || e.key === 'Escape') {
            this.close();
            if (e.key === 'Tab') {
                this.fire_('tabkeyclose', { shiftKey: e.shiftKey });
            }
            e.preventDefault();
            return;
        }
        if (e.key !== 'Enter' && e.key !== 'ArrowUp' && e.key !== 'ArrowDown') {
            return;
        }
        const options = Array.from(this.querySelectorAll(SELECTABLE_DROPDOWN_ITEM_QUERY));
        if (options.length === 0) {
            return;
        }
        const focused = getDeepActiveElement();
        const index = options.findIndex(option => FocusRow.getFocusableElement(option) === focused);
        if (e.key === 'Enter') {
            // If a menu item has focus, don't change focus or close menu on 'Enter'.
            if (index !== -1) {
                return;
            }
            if (isWindows || isMac) {
                this.close();
                e.preventDefault();
                return;
            }
        }
        e.preventDefault();
        this.updateFocus_(options, index, e.key !== 'ArrowUp');
        if (!this.hasMousemoveListener_) {
            this.hasMousemoveListener_ = true;
            this.addEventListener('mousemove', e => {
                this.onMouseover_(e);
                this.hasMousemoveListener_ = false;
            }, { once: true });
        }
    }
    onMouseover_(e) {
        const item = e.composedPath()
            .find(el => el.matches && el.matches(SELECTABLE_DROPDOWN_ITEM_QUERY));
        (item || this.$.wrapper).focus();
    }
    updateFocus_(options, focusedIndex, next) {
        const numOptions = options.length;
        assert(numOptions > 0);
        let index;
        if (focusedIndex === -1) {
            index = next ? 0 : numOptions - 1;
        }
        else {
            const delta = next ? 1 : -1;
            index = (numOptions + focusedIndex + delta) % numOptions;
        }
        options[index].focus();
    }
    close() {
        // Removing 'resize' and 'popstate' listeners when dialog is closed.
        this.removeListeners_();
        this.$.dialog.close();
        this.open = false;
        if (this.anchorElement_) {
            assert(this.anchorElement_);
            focusWithoutInk(this.anchorElement_);
            this.anchorElement_ = null;
        }
        if (this.lastConfig_) {
            this.lastConfig_ = null;
        }
    }
    /**
     * Shows the menu anchored to the given element.
     */
    showAt(anchorElement, config) {
        this.anchorElement_ = anchorElement;
        // Scroll the anchor element into view so that the bounding rect will be
        // accurate for where the menu should be shown.
        this.anchorElement_.scrollIntoViewIfNeeded();
        const rect = this.anchorElement_.getBoundingClientRect();
        let height = rect.height;
        if (config && !config.noOffset &&
            config.anchorAlignmentY === AnchorAlignment.AFTER_END) {
            // When an action menu is positioned after the end of an element, the
            // action menu can appear too far away from the anchor element, typically
            // because anchors tend to have padding. So we offset the height a bit
            // so the menu shows up slightly closer to the content of anchor.
            height -= AFTER_END_OFFSET;
        }
        this.showAtPosition(Object.assign({
            top: rect.top,
            left: rect.left,
            height: height,
            width: rect.width,
            // Default to anchoring towards the left.
            anchorAlignmentX: AnchorAlignment.BEFORE_END,
        }, config));
        this.$.wrapper.focus();
    }
    /**
     * Shows the menu anchored to the given box. The anchor alignment is
     * specified as an X and Y alignment which represents a point in the anchor
     * where the menu will align to, which can have the menu either before or
     * after the given point in each axis. Center alignment places the center of
     * the menu in line with the center of the anchor. Coordinates are relative to
     * the top-left of the viewport.
     *
     *            y-start
     *         _____________
     *         |           |
     *         |           |
     *         |   CENTER  |
     * x-start |     x     | x-end
     *         |           |
     *         |anchor box |
     *         |___________|
     *
     *             y-end
     *
     * For example, aligning the menu to the inside of the top-right edge of
     * the anchor, extending towards the bottom-left would use a alignment of
     * (BEFORE_END, AFTER_START), whereas centering the menu below the bottom
     * edge of the anchor would use (CENTER, AFTER_END).
     */
    showAtPosition(config) {
        // Save the scroll position of the viewport.
        const doc = document.scrollingElement;
        const scrollLeft = doc.scrollLeft;
        const scrollTop = doc.scrollTop;
        // Reset position so that layout isn't affected by the previous position,
        // and so that the dialog is positioned at the top-start corner of the
        // document.
        this.resetStyle_();
        this.$.dialog.showModal();
        this.open = true;
        config.top += scrollTop;
        config.left += scrollLeft;
        this.positionDialog_(Object.assign({
            minX: scrollLeft,
            minY: scrollTop,
            maxX: scrollLeft + doc.clientWidth,
            maxY: scrollTop + doc.clientHeight,
        }, config));
        // Restore the scroll position.
        doc.scrollTop = scrollTop;
        doc.scrollLeft = scrollLeft;
        this.addListeners_();
        // Focus the first selectable item.
        const openedByKey = FocusOutlineManager.forDocument(document).visible;
        if (openedByKey) {
            const firstSelectableItem = this.querySelector(SELECTABLE_DROPDOWN_ITEM_QUERY);
            if (firstSelectableItem) {
                requestAnimationFrame(() => {
                    // Wait for the next animation frame for the dialog to become visible.
                    firstSelectableItem.focus();
                });
            }
        }
    }
    resetStyle_() {
        this.$.dialog.style.left = '';
        this.$.dialog.style.right = '';
        this.$.dialog.style.top = '0';
    }
    /**
     * Position the dialog using the coordinates in config. Coordinates are
     * relative to the top-left of the viewport when scrolled to (0, 0).
     */
    positionDialog_(config) {
        this.lastConfig_ = config;
        const c = Object.assign(getDefaultShowConfig(), config);
        const top = c.top;
        const left = c.left;
        const bottom = top + c.height;
        const right = left + c.width;
        // Flip the X anchor in RTL.
        const rtl = getComputedStyle(this).direction === 'rtl';
        if (rtl) {
            c.anchorAlignmentX *= -1;
        }
        const offsetWidth = this.$.dialog.offsetWidth;
        const menuLeft = getStartPointWithAnchor(left, right, offsetWidth, c.anchorAlignmentX, c.minX, c.maxX);
        if (rtl) {
            const menuRight = document.scrollingElement.clientWidth - menuLeft - offsetWidth;
            this.$.dialog.style.right = menuRight + 'px';
        }
        else {
            this.$.dialog.style.left = menuLeft + 'px';
        }
        const menuTop = getStartPointWithAnchor(top, bottom, this.$.dialog.offsetHeight, c.anchorAlignmentY, c.minY, c.maxY);
        this.$.dialog.style.top = menuTop + 'px';
    }
    onSlotchange_() {
        for (const node of this.$.contentNode.assignedElements({ flatten: true })) {
            if (node.classList.contains(DROPDOWN_ITEM_CLASS) &&
                !node.getAttribute('role')) {
                node.setAttribute('role', 'menuitem');
            }
        }
    }
    addListeners_() {
        this.boundClose_ = this.boundClose_ || (() => {
            if (this.$.dialog.open) {
                this.close();
            }
        });
        window.addEventListener('resize', this.boundClose_);
        window.addEventListener('popstate', this.boundClose_);
        if (this.autoReposition) {
            this.resizeObserver_ = new ResizeObserver(() => {
                if (this.lastConfig_) {
                    this.positionDialog_(this.lastConfig_);
                    this.fire_('cr-action-menu-repositioned'); // For easier testing.
                }
            });
            this.resizeObserver_.observe(this.$.dialog);
        }
    }
}
customElements.define(CrActionMenuElement.is, CrActionMenuElement);

function getTemplate$P() {
    return html `<!--_html_template_start_-->    <style include="cr-actionable-row-style">:host([disabled]){opacity:.65;pointer-events:none}:host([disabled]) cr-icon-button{display:var(--cr-expand-button-disabled-display,initial)}#label{flex:1;padding:var(--cr-section-vertical-padding) 0}cr-icon-button{--cr-icon-button-icon-size:var(--cr-expand-button-icon-size, 20px);--cr-icon-button-size:var(--cr-expand-button-size, 36px)}</style>

    <div id="label" aria-hidden="true"><slot></slot></div>
    <cr-icon-button id="icon" aria-labelledby="label" aria-expanded="[[getAriaExpanded_(expanded)]]" disabled="[[disabled]]" tabindex="[[tabIndex]]" part="icon" iron-icon="[[icon_]]">
    </cr-icon-button>
<!--_html_template_end_-->`;
}

// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'cr-expand-button' is a chrome-specific wrapper around a button that toggles
 * between an opened (expanded) and closed state.
 */
class CrExpandButtonElement extends PolymerElement {
    static get is() {
        return 'cr-expand-button';
    }
    static get template() {
        return getTemplate$P();
    }
    static get properties() {
        return {
            /**
             * If true, the button is in the expanded state and will show the icon
             * specified in the `collapseIcon` property. If false, the button shows
             * the icon specified in the `expandIcon` property.
             */
            expanded: {
                type: Boolean,
                value: false,
                notify: true,
            },
            /**
             * If true, the button will be disabled and grayed out.
             */
            disabled: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            /** A11y text descriptor for this control. */
            ariaLabel: {
                type: String,
                observer: 'onAriaLabelChange_',
            },
            tabIndex: {
                type: Number,
                value: 0,
            },
            expandIcon: {
                type: String,
                value: 'cr:expand-more',
            },
            collapseIcon: {
                type: String,
                value: 'cr:expand-less',
            },
            icon_: String,
            expandTitle: String,
            collapseTitle: String,
            tooltipText_: {
                type: String,
                computed: 'computeTooltipText_(expandTitle, collapseTitle, expanded)',
                observer: 'onTooltipTextChange_',
            },
        };
    }
    static get observers() {
        return [
            'updateIcon_(collapseIcon, expandIcon, expanded)',
        ];
    }
    ready() {
        super.ready();
        this.addEventListener('click', this.toggleExpand_);
    }
    computeTooltipText_() {
        return this.expanded ? this.collapseTitle : this.expandTitle;
    }
    onTooltipTextChange_() {
        this.title = this.tooltipText_;
    }
    focus() {
        this.$.icon.focus();
    }
    onAriaLabelChange_() {
        if (this.ariaLabel) {
            this.$.icon.removeAttribute('aria-labelledby');
            this.$.icon.setAttribute('aria-label', this.ariaLabel);
        }
        else {
            this.$.icon.removeAttribute('aria-label');
            this.$.icon.setAttribute('aria-labelledby', 'label');
        }
    }
    updateIcon_() {
        this.icon_ = this.expanded ? this.collapseIcon : this.expandIcon;
    }
    toggleExpand_(event) {
        // Prevent |click| event from bubbling. It can cause parents of this
        // elements to erroneously re-toggle this control.
        event.stopPropagation();
        event.preventDefault();
        this.scrollIntoViewIfNeeded();
        this.expanded = !this.expanded;
        focusWithoutInk(this.$.icon);
    }
    getAriaExpanded_() {
        return this.expanded ? 'true' : 'false';
    }
}
customElements.define(CrExpandButtonElement.is, CrExpandButtonElement);

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
`iron-collapse` creates a collapsible block of content.  By default, the content
will be collapsed.  Use `opened` or `toggle()` to show/hide the content.

    <button on-click="toggle">toggle collapse</button>

    <iron-collapse id="collapse">
      <div>Content goes here...</div>
    </iron-collapse>

    ...

    toggle: function() {
      this.$.collapse.toggle();
    }

`iron-collapse` adjusts the max-height/max-width of the collapsible element to
show/hide the content.  So avoid putting padding/margin/border on the
collapsible directly, and instead put a div inside and style that.

    <style>
      .collapse-content {
        padding: 15px;
        border: 1px solid #dedede;
      }
    </style>

    <iron-collapse>
      <div class="collapse-content">
        <div>Content goes here...</div>
      </div>
    </iron-collapse>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--iron-collapse-transition-duration` | Animation transition duration | `300ms`

@group Iron Elements
@hero hero.svg
@demo demo/index.html
@element iron-collapse
*/
Polymer({
  _template: html`
    <style>
      :host {
        display: block;
        transition-duration: var(--iron-collapse-transition-duration, 300ms);
        /* Safari 10 needs this property prefixed to correctly apply the custom property */
        overflow: visible;
      }

      :host(.iron-collapse-closed) {
        display: none;
      }

      :host(:not(.iron-collapse-opened)) {
        overflow: hidden;
      }
    </style>

    <slot></slot>
`,

  is: 'iron-collapse',
  behaviors: [IronResizableBehavior],

  properties: {

    /**
     * If true, the orientation is horizontal; otherwise is vertical.
     *
     * @attribute horizontal
     */
    horizontal: {type: Boolean, value: false, observer: '_horizontalChanged'},

    /**
     * Set opened to true to show the collapse element and to false to hide it.
     *
     * @attribute opened
     */
    opened:
        {type: Boolean, value: false, notify: true, observer: '_openedChanged'},

    /**
     * When true, the element is transitioning its opened state. When false,
     * the element has finished opening/closing.
     *
     * @attribute transitioning
     */
    transitioning: {type: Boolean, notify: true, readOnly: true},

    /**
     * Set noAnimation to true to disable animations.
     *
     * @attribute noAnimation
     */
    noAnimation: {type: Boolean},

    /**
     * Stores the desired size of the collapse body.
     * @private
     */
    _desiredSize: {type: String, value: ''}
  },

  get dimension() {
    return this.horizontal ? 'width' : 'height';
  },

  /**
   * `maxWidth` or `maxHeight`.
   * @private
   */
  get _dimensionMax() {
    return this.horizontal ? 'maxWidth' : 'maxHeight';
  },

  /**
   * `max-width` or `max-height`.
   * @private
   */
  get _dimensionMaxCss() {
    return this.horizontal ? 'max-width' : 'max-height';
  },

  hostAttributes: {
    role: 'group',
    'aria-hidden': 'true',
  },

  listeners: {transitionend: '_onTransitionEnd'},

  /**
   * Toggle the opened state.
   *
   * @method toggle
   */
  toggle: function() {
    this.opened = !this.opened;
  },

  show: function() {
    this.opened = true;
  },

  hide: function() {
    this.opened = false;
  },

  /**
   * Updates the size of the element.
   * @param {string} size The new value for `maxWidth`/`maxHeight` as css property value, usually `auto` or `0px`.
   * @param {boolean=} animated if `true` updates the size with an animation, otherwise without.
   */
  updateSize: function(size, animated) {
    // Consider 'auto' as '', to take full size.
    size = size === 'auto' ? '' : size;

    var willAnimate = animated && !this.noAnimation && this.isAttached &&
        this._desiredSize !== size;

    this._desiredSize = size;

    this._updateTransition(false);
    // If we can animate, must do some prep work.
    if (willAnimate) {
      // Animation will start at the current size.
      var startSize = this._calcSize();
      // For `auto` we must calculate what is the final size for the animation.
      // After the transition is done, _transitionEnd will set the size back to
      // `auto`.
      if (size === '') {
        this.style[this._dimensionMax] = '';
        size = this._calcSize();
      }
      // Go to startSize without animation.
      this.style[this._dimensionMax] = startSize;
      // Force layout to ensure transition will go. Set scrollTop to itself
      // so that compilers won't remove it.
      this.scrollTop = this.scrollTop;
      // Enable animation.
      this._updateTransition(true);
      // If final size is the same as startSize it will not animate.
      willAnimate = (size !== startSize);
    }
    // Set the final size.
    this.style[this._dimensionMax] = size;
    // If it won't animate, call transitionEnd to set correct classes.
    if (!willAnimate) {
      this._transitionEnd();
    }
  },

  /**
   * enableTransition() is deprecated, but left over so it doesn't break
   * existing code. Please use `noAnimation` property instead.
   *
   * @method enableTransition
   * @deprecated since version 1.0.4
   */
  enableTransition: function(enabled) {
    Base._warn(
        '`enableTransition()` is deprecated, use `noAnimation` instead.');
    this.noAnimation = !enabled;
  },

  _updateTransition: function(enabled) {
    this.style.transitionDuration = (enabled && !this.noAnimation) ? '' : '0s';
  },

  _horizontalChanged: function() {
    this.style.transitionProperty = this._dimensionMaxCss;
    var otherDimension =
        this._dimensionMax === 'maxWidth' ? 'maxHeight' : 'maxWidth';
    this.style[otherDimension] = '';
    this.updateSize(this.opened ? 'auto' : '0px', false);
  },

  _openedChanged: function() {
    this.setAttribute('aria-hidden', !this.opened);

    this._setTransitioning(true);
    this.toggleClass('iron-collapse-closed', false);
    this.toggleClass('iron-collapse-opened', false);
    this.updateSize(this.opened ? 'auto' : '0px', true);

    // Focus the current collapse.
    if (this.opened) {
      this.focus();
    }
  },

  _transitionEnd: function() {
    this.style[this._dimensionMax] = this._desiredSize;
    this.toggleClass('iron-collapse-closed', !this.opened);
    this.toggleClass('iron-collapse-opened', this.opened);
    this._updateTransition(false);
    this.notifyResize();
    this._setTransitioning(false);
  },

  _onTransitionEnd: function(event) {
    if (dom(event).rootTarget === this) {
      this._transitionEnd();
    }
  },

  _calcSize: function() {
    return this.getBoundingClientRect()[this.dimension] + 'px';
  }
});

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

function getTemplate$O() {
    return html `<!--_html_template_start_-->    <style include="cr-hidden-style cr-icons">dialog{--scroll-border-color:var(--paper-grey-300);--scroll-border:1px solid var(--scroll-border-color);background-color:var(--cr-dialog-background-color,#fff);border:0;border-radius:var(--cr-dialog-border-radius,8px);bottom:50%;box-shadow:0 0 16px rgba(0,0,0,.12),0 16px 16px rgba(0,0,0,.24);color:inherit;max-height:initial;max-width:initial;overflow-y:hidden;padding:0;position:absolute;top:50%;width:var(--cr-dialog-width,512px)}@media (prefers-color-scheme:dark){dialog{--scroll-border-color:var(--google-grey-700);background-color:var(--cr-dialog-background-color,var(--google-grey-900));background-image:linear-gradient(rgba(255,255,255,.04),rgba(255,255,255,.04))}}@media (forced-colors:active){dialog{border:var(--cr-border-hcm)}}dialog[open] #content-wrapper{display:flex;flex-direction:column;max-height:100vh;overflow:auto}.top-container,:host ::slotted([slot=button-container]),:host ::slotted([slot=footer]){flex-shrink:0}dialog::backdrop{background-color:rgba(0,0,0,.6);bottom:0;left:0;position:fixed;right:0;top:0}:host ::slotted([slot=body]){color:var(--cr-secondary-text-color);padding:0 var(--cr-dialog-body-padding-horizontal,20px)}:host ::slotted([slot=title]){color:var(--cr-primary-text-color);flex:1;font-family:var(--cr-dialog-font-family,inherit);font-size:var(--cr-dialog-title-font-size,calc(15 / 13 * 100%));line-height:1;padding-bottom:var(--cr-dialog-title-slot-padding-bottom,16px);padding-inline-end:var(--cr-dialog-title-slot-padding-end,20px);padding-inline-start:var(--cr-dialog-title-slot-padding-start,20px);padding-top:var(--cr-dialog-title-slot-padding-top,20px)}:host ::slotted([slot=button-container]){display:flex;justify-content:flex-end;padding-bottom:var(--cr-dialog-button-container-padding-bottom,16px);padding-inline-end:var(--cr-dialog-button-container-padding-horizontal,16px);padding-inline-start:var(--cr-dialog-button-container-padding-horizontal,16px);padding-top:var(--cr-dialog-button-container-padding-top,16px)}:host ::slotted([slot=footer]){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;border-top:1px solid #dbdbdb;margin:0;padding:16px 20px}:host([hide-backdrop]) dialog::backdrop{opacity:0}@media (prefers-color-scheme:dark){:host ::slotted([slot=footer]){border-top-color:var(--cr-separator-color)}}.body-container{box-sizing:border-box;display:flex;flex-direction:column;min-height:1.375rem;overflow:auto}:host{--transparent-border:1px solid transparent}#cr-container-shadow-top{border-bottom:var(--cr-dialog-body-border-top,var(--transparent-border))}#cr-container-shadow-bottom{border-bottom:var(--cr-dialog-body-border-bottom,var(--transparent-border))}#cr-container-shadow-bottom.has-shadow,#cr-container-shadow-top.has-shadow{border-bottom:var(--scroll-border)}.top-container{align-items:flex-start;display:flex;min-height:var(--cr-dialog-top-container-min-height,31px)}.title-container{display:flex;flex:1;font-size:inherit;font-weight:inherit;margin:0;outline:0}#close{align-self:flex-start;margin-inline-end:4px;margin-top:4px}</style>
    <dialog id="dialog" on-close="onNativeDialogClose_" on-cancel="onNativeDialogCancel_" part="dialog" aria-labelledby="title" aria-description$="[[ariaDescriptionText]]">
    
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
        return getTemplate$O();
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
            /**
             * Text for the aria description.
             */
            ariaDescriptionText: String,
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

const styleMod$4 = document.createElement('dom-module');
styleMod$4.appendChild(html `
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
`.content);
styleMod$4.register('cr-input-style');

function getTemplate$N() {
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
        return getTemplate$N();
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

function getTemplate$M() {
    return html `<!--_html_template_start_--><style include="cr-hidden-style cr-input-style cr-shared-style">textarea{display:block;resize:none}#input-container{background-color:var(--cr-input-background-color)}:host([autogrow][has-max-height]) #input-container{box-sizing:content-box;max-height:var(--cr-textarea-autogrow-max-height);min-height:1lh}:host([invalid]) #underline{border-color:var(--cr-input-error-color)}:host-context([chrome-refresh-2023]) #input{padding-bottom:var(--cr-input-padding-bottom);padding-inline-end:var(--cr-input-padding-end);padding-inline-start:var(--cr-input-padding-start);padding-top:var(--cr-input-padding-top)}#footerContainer{border-top:0;display:var(--cr-textarea-footer-display,none);font-size:var(--cr-form-field-label-font-size);height:var(--cr-form-field-label-height);justify-content:space-between;line-height:var(--cr-form-field-label-line-height);margin:8px 0;min-height:0;padding:0;white-space:var(--cr-input-error-white-space)}:host([invalid]) #footerContainer,:host([invalid]) #label{color:var(--cr-input-error-color)}#mirror{display:none}:host([autogrow]) #mirror{display:block;visibility:hidden;white-space:pre-wrap;word-wrap:break-word}:host([autogrow]) #mirror,:host([autogrow]) textarea{border:0;box-sizing:border-box;padding-bottom:var(--cr-input-padding-bottom,6px);padding-inline-end:var(--cr-input-padding-end,8px);padding-inline-start:var(--cr-input-padding-start,8px);padding-top:var(--cr-input-padding-top,6px)}:host([autogrow]) textarea{height:100%;left:0;overflow:hidden;position:absolute;resize:none;top:0;width:100%}:host([autogrow][has-max-height]) #mirror,:host([autogrow][has-max-height]) textarea{overflow-x:hidden;overflow-y:auto}:host-context([chrome-refresh-2023]) textarea{position:relative;z-index:1}:host-context([chrome-refresh-2023]):host([autogrow]) textarea{position:absolute}:host-context([chrome-refresh-2023]) #mirror{font-size:12px;line-height:16px}</style>
<div id="label" class="cr-form-field-label" hidden="[[!label]]" aria-hidden="true">
  [[label]]
</div>
<div id="input-container">
  
  <div id="mirror">[[calculateMirror_(value)]]</div>
  
  <div id="hover-layer"></div>
  <textarea id="input" autofocus="[[autofocus]]" rows="[[rows]]" value="{{value::input}}" aria-label$="[[label]]" on-focus="onInputFocusChange_" on-blur="onInputFocusChange_" on-change="onInputChange_" disabled="[[disabled]]" maxlength$="[[maxlength]]" readonly$="[[readonly]]" required$="[[required]]" placeholder$="[[placeholder]]"></textarea>
  <div id="underline-base"></div>
  <div id="underline"></div>
</div>
<div id="footerContainer" class="cr-row">
  <div id="firstFooter" aria-live="[[getFooterAria_(invalid)]]">
    [[firstFooter]]
  </div>
  <div id="secondFooter" aria-live="[[getFooterAria_(invalid)]]">
    [[secondFooter]]
  </div>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'cr-textarea' is a component similar to native textarea,
 * and inherits styling from cr-input.
 */
class CrTextareaElement extends PolymerElement {
    static get is() {
        return 'cr-textarea';
    }
    static get template() {
        return getTemplate$M();
    }
    static get properties() {
        return {
            /**
             * Whether the text area should automatically get focus when the page
             * loads.
             */
            autofocus: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            /**
             * Whether the text area is disabled. When disabled, the text area loses
             * focus and is not reachable by tabbing.
             */
            disabled: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
                observer: 'onDisabledChanged_',
            },
            /** Whether the text area is required. */
            required: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            /** Maximum length (in characters) of the text area. */
            maxlength: {
                type: Number,
            },
            /**
             * Whether the text area is read only. If read-only, content cannot be
             * changed.
             */
            readonly: Boolean,
            /** Number of rows (lines) of the text area. */
            rows: {
                type: Number,
                value: 3,
                reflectToAttribute: true,
            },
            /** Caption of the text area. */
            label: {
                type: String,
                value: '',
            },
            /**
             * Text inside the text area. If the text exceeds the bounds of the text
             * area, i.e. if it has more than |rows| lines, a scrollbar is shown by
             * default when autogrow is not set.
             */
            value: {
                type: String,
                value: '',
                notify: true,
            },
            /**
             * Placeholder text that is shown when no value is present.
             */
            placeholder: {
                type: String,
                value: '',
            },
            /** Whether the textarea can auto-grow vertically or not. */
            autogrow: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            /**
             * Attribute to enable limiting the maximum height of a autogrow textarea.
             * Use --cr-textarea-autogrow-max-height to set the height.
             */
            hasMaxHeight: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            /** Whether the textarea is invalid or not. */
            invalid: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            /**
             * First footer text below the text area. Can be used to warn user about
             * character limits.
             */
            firstFooter: {
                type: String,
                value: '',
            },
            /**
             * Second footer text below the text area. Can be used to show current
             * character count.
             */
            secondFooter: {
                type: String,
                value: '',
            },
        };
    }
    focusInput() {
        this.$.input.focus();
    }
    /**
     * 'change' event fires when <input> value changes and user presses 'Enter'.
     * This function helps propagate it to host since change events don't
     * propagate across Shadow DOM boundary by default.
     */
    onInputChange_(e) {
        this.dispatchEvent(new CustomEvent('change', { bubbles: true, composed: true, detail: { sourceEvent: e } }));
    }
    calculateMirror_() {
        if (!this.autogrow) {
            return '';
        }
        // Browsers do not render empty divs. The extra space is used to render the
        // div when empty.
        const tokens = this.value ? this.value.split('\n') : [''];
        while (this.rows > 0 && tokens.length < this.rows) {
            tokens.push('');
        }
        return tokens.join('\n') + '&nbsp;';
    }
    onInputFocusChange_() {
        // focused_ is used instead of :focus-within, so focus on elements within
        // the suffix slot does not trigger a change in input styles.
        if (this.shadowRoot.activeElement === this.$.input) {
            this.setAttribute('focused_', '');
        }
        else {
            this.removeAttribute('focused_');
        }
    }
    onDisabledChanged_() {
        this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
    }
    getFooterAria_() {
        return this.invalid ? 'assertive' : 'polite';
    }
}
customElements.define(CrTextareaElement.is, CrTextareaElement);

const styleMod$3 = document.createElement('dom-module');
styleMod$3.appendChild(html `
  <template>
    <style>
.md-select{--md-arrow-width:10px;--md-select-bg-color:var(--google-grey-100);--md-select-focus-shadow-color:rgba(var(--google-blue-600-rgb), .4);--md-select-option-bg-color:white;--md-select-side-padding:8px;--md-select-text-color:var(--cr-primary-text-color);-webkit-appearance:none;background:url(//resources/images/arrow_down.svg) calc(100% - var(--md-select-side-padding)) center no-repeat;background-color:var(--md-select-bg-color);background-size:var(--md-arrow-width);border:none;border-radius:4px;color:var(--md-select-text-color);cursor:pointer;font-family:inherit;font-size:inherit;line-height:inherit;max-width:100%;outline:0;padding-bottom:6px;padding-inline-end:calc(var(--md-select-side-padding) + var(--md-arrow-width) + 3px);padding-inline-start:var(--md-select-side-padding);padding-top:6px;width:var(--md-select-width,200px)}@media (prefers-color-scheme:dark){.md-select{--md-select-bg-color:rgba(0, 0, 0, .3);--md-select-focus-shadow-color:rgba(var(--google-blue-300-rgb), .5);--md-select-option-bg-color:var(--google-grey-900-white-4-percent);background-image:url(//resources/images/dark/arrow_down.svg)}}:host-context([chrome-refresh-2023]) .md-select{--md-select-bg-color:transparent;--md-arrow-width:7px;--md-select-side-padding:10px;--md-select-text-color:inherit;border:solid 1px var(--color-combobox-container-outline,var(--cr-fallback-color-neutral-outline));border-radius:8px;box-sizing:border-box;font-size:12px;height:36px;line-height:36px;padding-bottom:0;padding-top:0}:host-context([chrome-refresh-2023]) .md-select:hover{background-color:var(--color-comboxbox-ink-drop-hovered,var(--cr-hover-on-subtle-background-color))}.md-select :-webkit-any(option,optgroup){background-color:var(--md-select-option-bg-color)}.md-select[disabled]{opacity:var(--cr-disabled-opacity);pointer-events:none}:host-context([chrome-refresh-2023]) .md-select[disabled]{background-color:var(--color-combobox-background-disabled,var(--cr-fallback-color-disabled-background));border-color:transparent;color:var(--color-textfield-foreground-disabled,var(--cr-fallback-color-disabled-foreground));opacity:1}.md-select:focus{box-shadow:0 0 0 2px var(--md-select-focus-shadow-color)}:host-context([chrome-refresh-2023]) .md-select:focus{box-shadow:none;outline:solid 2px var(--cr-focus-outline-color);outline-offset:-1px}@media (forced-colors:active){.md-select:focus{outline:var(--cr-focus-outline-hcm)}}.md-select:active{box-shadow:none}:host-context([dir=rtl]) .md-select{background-position-x:var(--md-select-side-padding)}
    </style>
  </template>
`.content);
styleMod$3.register('md-select');

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * This mixin bundles functionality required to show a password to the user.
 */
const ShowPasswordMixin = dedupingMixin((superClass) => {
    class ShowPasswordMixin extends superClass {
        static get properties() {
            return {
                isPasswordVisible: {
                    type: Boolean,
                    value: false,
                },
            };
        }
        getPasswordInputType() {
            return this.isPasswordVisible ? 'text' : 'password';
        }
        getShowHideButtonLabel() {
            return this.isPasswordVisible ?
                loadTimeData.getString('hidePassword') :
                loadTimeData.getString('showPassword');
        }
        getShowHideButtonIconClass() {
            return this.isPasswordVisible ? 'icon-visibility-off' :
                'icon-visibility';
        }
        /**
         * Handler for showing/hiding the passwords. This method should be
         * attached to on-click event of show/hide password button.
         */
        onShowHidePasswordButtonClick() {
            this.isPasswordVisible = !this.isPasswordVisible;
        }
    }
    return ShowPasswordMixin;
});

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Mixin to be used by Polymer elements that want to
 * automatically remove WebUI listeners when detached.
 */
const WebUiListenerMixin = dedupingMixin((superClass) => {
    class WebUiListenerMixin extends superClass {
        constructor() {
            super(...arguments);
            /**
             * Holds WebUI listeners that need to be removed when this element is
             * destroyed.
             */
            this.webUiListeners_ = [];
        }
        /**
         * Adds a WebUI listener and registers it for automatic removal when
         * this element is detached. Note: Do not use this method if you intend
         * to remove this listener manually (use addWebUiListener directly
         * instead).
         *
         * @param eventName The event to listen to.
         * @param callback The callback run when the event is fired.
         */
        addWebUiListener(eventName, callback) {
            this.webUiListeners_.push(addWebUiListener(eventName, callback));
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            while (this.webUiListeners_.length > 0) {
                removeWebUiListener(this.webUiListeners_.pop());
            }
        }
    }
    return WebUiListenerMixin;
});

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// WARNING: Keep synced with
// chrome/browser/ui/webui/password_manager/sync_handler.cc.
var TrustedVaultBannerState;
(function (TrustedVaultBannerState) {
    TrustedVaultBannerState[TrustedVaultBannerState["NOT_SHOWN"] = 0] = "NOT_SHOWN";
    TrustedVaultBannerState[TrustedVaultBannerState["OFFER_OPT_IN"] = 1] = "OFFER_OPT_IN";
    TrustedVaultBannerState[TrustedVaultBannerState["OPTED_IN"] = 2] = "OPTED_IN";
})(TrustedVaultBannerState || (TrustedVaultBannerState = {}));
class SyncBrowserProxyImpl {
    getTrustedVaultBannerState() {
        return sendWithPromise('GetSyncTrustedVaultBannerState');
    }
    getSyncInfo() {
        return sendWithPromise('GetSyncInfo');
    }
    getAccountInfo() {
        return sendWithPromise('GetAccountInfo');
    }
    static getInstance() {
        return instance$4 || (instance$4 = new SyncBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance$4 = obj;
    }
}
let instance$4 = null;

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * This mixin bundles functionality related to syncing, sign in status and
 * account storage.
 */
const UserUtilMixin = dedupingMixin((superClass) => {
    class UserUtilMixin extends WebUiListenerMixin(superClass) {
        constructor() {
            super(...arguments);
            this.setIsOptedInForAccountStorageListener_ = null;
        }
        static get properties() {
            return {
                /**
                 * Indicates whether user opted in using passwords stored on
                 * their account.
                 */
                isOptedInForAccountStorage: {
                    type: Boolean,
                    value: false,
                },
                /* Account storage eligibility. */
                isEligibleForAccountStorage: {
                    type: Boolean,
                    value: false,
                    computed: 'computeIsEligibleForAccountStorage_(syncInfo_)',
                },
                /**
                 * If true, the edit dialog and removal notification show
                 * information about which location(s) a password is stored.
                 */
                isAccountStoreUser: {
                    type: Boolean,
                    computed: 'computeIsAccountStoreUser_(' +
                        'isOptedInForAccountStorage, isEligibleForAccountStorage)',
                },
                isSyncingPasswords: {
                    type: Boolean,
                    value: true,
                    computed: 'computeIsSyncingPasswords_(syncInfo_)',
                },
                /* Email of the primary account. */
                accountEmail: {
                    type: String,
                    value: '',
                    computed: 'computeAccountEmail_(accountInfo_)',
                },
                /* Email of the primary account. */
                avatarImage: {
                    type: String,
                    value: '',
                    computed: 'computeAvatarImage_(accountInfo_)',
                },
            };
        }
        connectedCallback() {
            super.connectedCallback();
            // Create listener functions.
            this.setIsOptedInForAccountStorageListener_ = (optedIn) => this.isOptedInForAccountStorage = optedIn;
            const syncInfoChanged = (syncInfo) => this.syncInfo_ =
                syncInfo;
            const accountInfoChanged = (accountInfo) => this.accountInfo_ = accountInfo;
            // Request initial data.
            PasswordManagerImpl.getInstance().isOptedInForAccountStorage().then(this.setIsOptedInForAccountStorageListener_);
            SyncBrowserProxyImpl.getInstance().getSyncInfo().then(syncInfoChanged);
            SyncBrowserProxyImpl.getInstance().getAccountInfo().then(accountInfoChanged);
            // Listen for changes.
            PasswordManagerImpl.getInstance().addAccountStorageOptInStateListener(this.setIsOptedInForAccountStorageListener_);
            this.addWebUiListener('sync-info-changed', syncInfoChanged);
            this.addWebUiListener('stored-accounts-changed', accountInfoChanged);
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            assert(this.setIsOptedInForAccountStorageListener_);
            PasswordManagerImpl.getInstance()
                .removeAccountStorageOptInStateListener(this.setIsOptedInForAccountStorageListener_);
            this.setIsOptedInForAccountStorageListener_ = null;
        }
        optInForAccountStorage() {
            PasswordManagerImpl.getInstance().optInForAccountStorage(true);
        }
        optOutFromAccountStorage() {
            PasswordManagerImpl.getInstance().optInForAccountStorage(false);
        }
        computeIsEligibleForAccountStorage_() {
            return !!this.syncInfo_ && this.syncInfo_.isEligibleForAccountStorage;
        }
        computeIsSyncingPasswords_() {
            return !!this.syncInfo_ && this.syncInfo_.isSyncingPasswords;
        }
        computeAccountEmail_() {
            return (this.accountInfo_ ? this.accountInfo_.email : '');
        }
        computeAvatarImage_() {
            return this.accountInfo_.avatarImage || '';
        }
        computeIsAccountStoreUser_() {
            return this.isEligibleForAccountStorage &&
                this.isOptedInForAccountStorage;
        }
    }
    return UserUtilMixin;
});

function getTemplate$L() {
    return html `<!--_html_template_start_--><style include="shared-style cr-shared-style md-select">cr-input:not(:first-of-type){margin-top:var(--cr-form-field-bottom-spacing)}cr-icon-button{--cr-icon-button-icon-size:16px;--cr-icon-button-size:32px;--cr-icon-button-margin-start:0;--cr-icon-button-margin-end:0}cr-input{--cr-input-error-display:none}cr-textarea{--settings-textarea-footer-display:flex}.md-select{--md-select-width:100%;margin-bottom:var(--cr-form-field-bottom-spacing);margin-top:2px}#websiteInput[show-error-message]{--cr-input-error-display:block}#usernameInput[invalid]{--cr-input-error-display:block}#viewExistingPasswordLink{color:var(--cr-link-color);display:block;font-size:var(--cr-form-field-label-font-size);line-height:1;width:fit-content}#footnote{margin-inline-start:2px;margin-top:16px}.divider{border-top:var(--cr-separator-line);margin:var(--cr-form-field-bottom-spacing) 0}cr-textarea{--cr-textarea-footer-display:flex;--cr-textarea-autogrow-max-height:20lh}</style>
<cr-dialog id="dialog" show-on-attach>
  <div slot="title" id="title" class="dialog-title">
    $i18n{addPasswordTitle}
  </div>
  <div slot="body">
    <select class="md-select" id="storePicker" aria-description="$i18n{addPasswordStorePickerA11yDescription}" hidden="[[!isAccountStoreUser]]">
      <option value="[[storeOptionAccountValue_]]">
        $i18n{addPasswordStoreOptionAccount}
      </option>
      <option value="[[storeOptionDeviceValue_]]">
        $i18n{addPasswordStoreOptionDevice}
      </option>
    </select>
    <cr-input id="websiteInput" label="$i18n{websiteLabel}" autofocus required placeholder="example.com" value="{{website_}}" invalid="[[isWebsiteInputInvalid_(websiteErrorMessage_)]]" show-error-message$="[[showWebsiteError_(websiteErrorMessage_)]]" error-message="[[websiteErrorMessage_]]" spellcheck="false" on-input="validateWebsite_" on-blur="onWebsiteInputBlur_">
    </cr-input>
    <cr-input id="usernameInput" label="$i18n{usernameLabel}" value="{{username_}}" spellcheck="false" invalid="[[doesUsernameExistAlready_(usernameErrorMessage_)]]" error-message="[[usernameErrorMessage_]]">
    </cr-input>
    <a id="viewExistingPasswordLink" is="action-link" href="/" on-click="onViewExistingPasswordClick_" aria-description="[[getViewExistingPasswordAriaDescription_(
          urlCollection_, username_)]]" hidden="[[!doesUsernameExistAlready_(usernameErrorMessage_)]]">
      $i18n{viewExistingPassword}
    </a>
    <cr-input id="passwordInput" label="$i18n{passwordLabel}" type="[[getPasswordInputType(isPasswordVisible)]]" value="{{password_}}" invalid="[[isPasswordInvalid_]]" on-blur="onPasswordInput_" on-input="onPasswordInput_" required class="password-input" spellcheck="false">
      <cr-icon-button id="showPasswordButton" slot="inline-suffix" class$="[[getShowHideButtonIconClass(isPasswordVisible)]]" title="[[getShowHideButtonLabel(isPasswordVisible)]]" on-click="onShowHidePasswordButtonClick">
      </cr-icon-button>
    </cr-input>
    <div id="footnote">
      $i18n{addPasswordFooter}
    </div>
    <div class="divider"></div>
    <cr-textarea label="$i18n{noteLabel}" id="noteInput" value="{{note_}}" invalid="[[isNoteInputInvalid_(note_)]]" has-max-height autogrow first-footer="[[getFirstNoteFooter_(note_)]]" second-footer="[[getSecondNoteFooter_(note_)]]">
    </cr-textarea>
  </div>
  <div slot="button-container">
    <cr-button id="cancel" class="cancel-button" on-click="closeDialog_">
      $i18n{cancel}
    </cr-button>
    <cr-button id="addButton" class="action-button" disabled="[[!canAddPassword_]]" on-click="onAddClick_">
      $i18n{save}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Represents different user interactions related to adding credential from the
 * settings. Should be kept in sync with
 * |metrics_util::AddCredentialFromSettingsUserInteractions|. These values are
 * persisted to logs. Entries should not be renumbered and numeric values should
 * never be reused.
 */
var AddCredentialFromSettingsUserInteractions;
(function (AddCredentialFromSettingsUserInteractions) {
    // Used when the add credential dialog is opened from the settings.
    AddCredentialFromSettingsUserInteractions[AddCredentialFromSettingsUserInteractions["ADD_DIALOG_OPENED"] = 0] = "ADD_DIALOG_OPENED";
    // Used when the add credential dialog is closed from the settings.
    AddCredentialFromSettingsUserInteractions[AddCredentialFromSettingsUserInteractions["ADD_DIALOG_CLOSED"] = 1] = "ADD_DIALOG_CLOSED";
    // Used when a new credential is added from the settings .
    AddCredentialFromSettingsUserInteractions[AddCredentialFromSettingsUserInteractions["CREDENTIAL_ADDED"] = 2] = "CREDENTIAL_ADDED";
    // Used when a new credential is being added from the add credential dialog in
    // settings and another credential exists with the same username/website
    // combination.
    AddCredentialFromSettingsUserInteractions[AddCredentialFromSettingsUserInteractions["DUPLICATED_CREDENTIAL_ENTERED"] = 3] = "DUPLICATED_CREDENTIAL_ENTERED";
    // Used when an existing credential is viewed while adding a new credential
    // from the settings.
    AddCredentialFromSettingsUserInteractions[AddCredentialFromSettingsUserInteractions["DUPLICATE_CREDENTIAL_VIEWED"] = 4] = "DUPLICATE_CREDENTIAL_VIEWED";
    // Must be last.
    AddCredentialFromSettingsUserInteractions[AddCredentialFromSettingsUserInteractions["COUNT"] = 5] = "COUNT";
})(AddCredentialFromSettingsUserInteractions || (AddCredentialFromSettingsUserInteractions = {}));
function recordAddCredentialInteraction(interaction) {
    chrome.metricsPrivate.recordEnumerationValue('PasswordManager.AddCredentialFromSettings.UserAction2', interaction, AddCredentialFromSettingsUserInteractions.COUNT);
}
/**
 * Should be kept in sync with
 * |password_manager::metrics_util::PasswordNoteAction|.
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 */
var PasswordNoteAction;
(function (PasswordNoteAction) {
    PasswordNoteAction[PasswordNoteAction["NOTE_ADDED_IN_ADD_DIALOG"] = 0] = "NOTE_ADDED_IN_ADD_DIALOG";
    PasswordNoteAction[PasswordNoteAction["NOTE_ADDED_IN_EDIT_DIALOG"] = 1] = "NOTE_ADDED_IN_EDIT_DIALOG";
    PasswordNoteAction[PasswordNoteAction["NOTE_EDITED_IN_EDIT_DIALOG"] = 2] = "NOTE_EDITED_IN_EDIT_DIALOG";
    PasswordNoteAction[PasswordNoteAction["NOTE_REMOVED_IN_EDIT_DIALOG"] = 3] = "NOTE_REMOVED_IN_EDIT_DIALOG";
    PasswordNoteAction[PasswordNoteAction["NOTE_NOT_CHANGED"] = 4] = "NOTE_NOT_CHANGED";
    // Must be last.
    PasswordNoteAction[PasswordNoteAction["COUNT"] = 5] = "COUNT";
})(PasswordNoteAction || (PasswordNoteAction = {}));
function recordPasswordNoteAction(action) {
    chrome.metricsPrivate.recordEnumerationValue('PasswordManager.PasswordNoteActionInSettings2', action, PasswordNoteAction.COUNT);
}
/**
 * When user enters more than or equal to 900 characters in the note field, a
 * footer will be displayed below the note to warn the user.
 */
const PASSWORD_NOTE_WARNING_CHARACTER_COUNT = 900;
/**
 * When user enters more than 1000 characters, the note will become invalid and
 * save button will be disabled.
 */
const PASSWORD_NOTE_MAX_CHARACTER_COUNT = 1000;
const AddPasswordDialogElementBase = UserUtilMixin(ShowPasswordMixin(I18nMixin(PolymerElement)));
function getUsernamesByOrigin(passwords) {
    // Group existing usernames by signonRealm.
    return passwords.reduce(function (usernamesByOrigin, entry) {
        assert(entry.affiliatedDomains);
        for (const domain of entry.affiliatedDomains) {
            if (!usernamesByOrigin.has(domain.signonRealm)) {
                usernamesByOrigin.set(domain.signonRealm, new Set());
            }
            usernamesByOrigin.get(domain.signonRealm).add(entry.username);
        }
        return usernamesByOrigin;
    }, new Map());
}
class AddPasswordDialogElement extends AddPasswordDialogElementBase {
    constructor() {
        super(...arguments);
        this.setSavedPasswordsListener_ = null;
    }
    static get is() {
        return 'add-password-dialog';
    }
    static get template() {
        return getTemplate$L();
    }
    static get properties() {
        return {
            website_: {
                type: String,
                value: '',
            },
            username_: {
                type: String,
                value: '',
            },
            password_: {
                type: String,
                value: '',
            },
            note_: {
                type: String,
                value: '',
            },
            urlCollection_: Object,
            usernamesBySignonRealm_: {
                type: Object,
                values: () => new Map(),
            },
            /**
             * Error message if the website input is invalid.
             */
            websiteErrorMessage_: { type: String, value: null },
            usernameErrorMessage_: {
                type: String,
                computed: 'computeUsernameErrorMessage_(urlCollection_, username_, ' +
                    'usernamesBySignonRealm_)',
            },
            isPasswordInvalid_: {
                type: Boolean,
                value: false,
            },
            canAddPassword_: {
                type: Boolean,
                computed: 'computeCanAddPassword_(websiteErrorMessage_, username_, ' +
                    'password_, note_)',
            },
            storeOptionAccountValue_: {
                type: String,
                value: chrome.passwordsPrivate.PasswordStoreSet.ACCOUNT,
                readonly: true,
            },
            storeOptionDeviceValue_: {
                type: String,
                value: chrome.passwordsPrivate.PasswordStoreSet.DEVICE,
                readonly: true,
            },
        };
    }
    static get observers() {
        return [
            'updateDefaultStore_(isAccountStoreUser)',
        ];
    }
    connectedCallback() {
        super.connectedCallback();
        this.setSavedPasswordsListener_ = passwordList => {
            this.usernamesBySignonRealm_ = getUsernamesByOrigin(passwordList);
        };
        PasswordManagerImpl.getInstance().getSavedPasswordList().then(this.setSavedPasswordsListener_);
        PasswordManagerImpl.getInstance().addSavedPasswordListChangedListener(this.setSavedPasswordsListener_);
        recordAddCredentialInteraction(AddCredentialFromSettingsUserInteractions.ADD_DIALOG_OPENED);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        assert(this.setSavedPasswordsListener_);
        PasswordManagerImpl.getInstance().removeSavedPasswordListChangedListener(this.setSavedPasswordsListener_);
        this.setSavedPasswordsListener_ = null;
    }
    updateDefaultStore_() {
        if (this.isAccountStoreUser) {
            PasswordManagerImpl.getInstance().isAccountStoreDefault().then(isAccountStoreDefault => {
                this.$.storePicker.value = isAccountStoreDefault ?
                    this.storeOptionAccountValue_ :
                    this.storeOptionDeviceValue_;
            });
        }
    }
    closeDialog_() {
        recordAddCredentialInteraction(AddCredentialFromSettingsUserInteractions.ADD_DIALOG_CLOSED);
        this.$.dialog.close();
    }
    /**
     * Helper function that checks whether the entered url is valid.
     */
    async validateWebsite_() {
        if (this.website_.length === 0) {
            this.websiteErrorMessage_ = null;
            return;
        }
        PasswordManagerImpl.getInstance()
            .getUrlCollection(this.website_)
            .then(urlCollection => {
            this.urlCollection_ = urlCollection;
            this.websiteErrorMessage_ =
                !urlCollection ? this.i18n('notValidWebsite') : null;
        })
            .catch(() => this.websiteErrorMessage_ = this.i18n('notValidWebsite'));
    }
    onWebsiteInputBlur_() {
        if (this.website_.length === 0) {
            this.websiteErrorMessage_ = '';
        }
        else if (!this.websiteErrorMessage_ && !this.website_.includes('.')) {
            this.websiteErrorMessage_ =
                this.i18n('missingTLD', `${this.website_}.com`);
        }
    }
    isWebsiteInputInvalid_() {
        return this.websiteErrorMessage_ !== null;
    }
    showWebsiteError_() {
        return !!this.websiteErrorMessage_ && this.websiteErrorMessage_.length > 0;
    }
    computeUsernameErrorMessage_() {
        const signonRealm = this.urlCollection_?.signonRealm;
        if (!signonRealm) {
            return null;
        }
        if (this.usernamesBySignonRealm_.has(signonRealm) &&
            this.usernamesBySignonRealm_.get(signonRealm).has(this.username_)) {
            recordAddCredentialInteraction(AddCredentialFromSettingsUserInteractions
                .DUPLICATED_CREDENTIAL_ENTERED);
            return this.i18n('usernameAlreadyUsed', this.website_);
        }
        return null;
    }
    doesUsernameExistAlready_() {
        return !!this.usernameErrorMessage_;
    }
    onPasswordInput_() {
        this.isPasswordInvalid_ = this.password_.length === 0;
    }
    isNoteInputInvalid_() {
        return this.note_.length >= PASSWORD_NOTE_MAX_CHARACTER_COUNT;
    }
    getFirstNoteFooter_() {
        return this.note_.length < PASSWORD_NOTE_WARNING_CHARACTER_COUNT ?
            '' :
            this.i18n('passwordNoteCharacterCountWarning', PASSWORD_NOTE_MAX_CHARACTER_COUNT);
    }
    getSecondNoteFooter_() {
        return this.note_.length < PASSWORD_NOTE_WARNING_CHARACTER_COUNT ?
            '' :
            this.i18n('passwordNoteCharacterCount', this.note_.length, PASSWORD_NOTE_MAX_CHARACTER_COUNT);
    }
    computeCanAddPassword_() {
        if (this.isWebsiteInputInvalid_() || this.website_.length === 0) {
            return false;
        }
        if (this.doesUsernameExistAlready_()) {
            return false;
        }
        if (this.password_.length === 0) {
            return false;
        }
        if (this.isNoteInputInvalid_()) {
            return false;
        }
        return true;
    }
    onAddClick_() {
        assert(this.computeCanAddPassword_());
        assert(this.urlCollection_);
        recordAddCredentialInteraction(AddCredentialFromSettingsUserInteractions.CREDENTIAL_ADDED);
        const useAccountStore = this.isAccountStoreUser &&
            (this.$.storePicker.value === this.storeOptionAccountValue_);
        if (!this.$.storePicker.hidden) {
            chrome.metricsPrivate.recordBoolean('PasswordManager.AddCredentialFromSettings.AccountStoreUsed2', useAccountStore);
        }
        if (this.note_.trim()) {
            recordPasswordNoteAction(PasswordNoteAction.NOTE_ADDED_IN_ADD_DIALOG);
        }
        PasswordManagerImpl.getInstance()
            .addPassword({
            url: this.urlCollection_.signonRealm,
            username: this.username_,
            password: this.password_,
            note: this.note_,
            useAccountStore: useAccountStore,
        })
            .then(() => {
            this.closeDialog_();
        })
            .catch(() => { });
    }
    getViewExistingPasswordAriaDescription_() {
        return this.urlCollection_ ?
            this.i18n('viewExistingPasswordAriaDescription', this.username_, this.urlCollection_.shown) :
            '';
    }
    onViewExistingPasswordClick_(e) {
        recordAddCredentialInteraction(AddCredentialFromSettingsUserInteractions.DUPLICATE_CREDENTIAL_VIEWED);
        e.preventDefault();
        Router.getInstance().navigateTo(Page.PASSWORD_DETAILS, this.urlCollection_?.shown);
        this.closeDialog_();
    }
}
customElements.define(AddPasswordDialogElement.is, AddPasswordDialogElement);

function getTemplate$K() {
    return html `<!--_html_template_start_--><style include="shared-style cr-shared-style">cr-input:not(:first-of-type){margin-top:var(--cr-form-field-bottom-spacing)}cr-icon-button{--cr-icon-button-icon-size:16px;--cr-icon-button-size:32px;--cr-icon-button-margin-start:0;--cr-icon-button-margin-end:0}cr-input{--cr-input-error-display:none}cr-textarea{--cr-textarea-footer-display:flex;--cr-textarea-autogrow-max-height:20lh}#usernameInput[invalid]{--cr-input-error-display:block}#passwordNote,#usernameInput{margin-top:var(--cr-form-field-bottom-spacing)}#viewExistingPasswordLink{color:var(--cr-link-color);display:block;font-size:var(--cr-form-field-label-font-size);line-height:1;width:fit-content}#footnote{margin-inline-start:2px;margin-top:16px}</style>
<cr-dialog id="dialog" show-on-attach>
  <div slot="title" id="title" class="dialog-title">
    $i18n{editPasswordTitle}
  </div>
  <div slot="body">
    <div class="cr-form-field-label">$i18n{sitesLabel}</div>
    <template id="links" is="dom-repeat" items="[[credential.affiliatedDomains]]">
      <div class="elide-left">
        <a href="[[item.url]]" class="site-link" target="_blank">
          [[item.name]]
        </a>
      </div>
    </template>
    <cr-input id="usernameInput" label="$i18n{usernameLabel}" autofocus value="{{username_}}" error-message="[[usernameErrorMessage_]]" invalid="[[doesUsernameExistAlready_(usernameErrorMessage_)]]" spellcheck="false">
    </cr-input>
    <a id="viewExistingPasswordLink" is="action-link" href="/" on-click="onViewExistingPasswordClick_" aria-description="[[getViewExistingPasswordAriaDescription_(
          conflictingUsernames_, username_)]]" hidden="[[!showRedirect_(showRedirect, usernameErrorMessage_)]]">
      $i18n{viewExistingPassword}
    </a>
    <cr-input id="passwordInput" label="$i18n{passwordLabel}" required type="[[getPasswordInputType(isPasswordVisible)]]" value="{{password_}}" invalid="[[!password_.length]]" class="password-input" spellcheck="false">
      <cr-icon-button id="showPasswordButton" slot="inline-suffix" class$="[[getShowHideButtonIconClass(isPasswordVisible)]]" title="[[getShowHideButtonLabel(isPasswordVisible)]]" on-click="onShowHidePasswordButtonClick">
      </cr-icon-button>
    </cr-input>
    <div id="footnote">
      [[getFootnote_(credential)]]
    </div>
    <cr-textarea id="passwordNote" label="$i18n{noteLabel}" value="{{note_}}" invalid="[[isNoteInputInvalid_(note_)]]" has-max-height autogrow first-footer="[[getFirstNoteFooter_(note_)]]" second-footer="[[getSecondNoteFooter_(note_)]]">
    </cr-textarea>
  </div>
  <div slot="button-container">
    <cr-button id="cancelButton" class="cancel-button" on-click="onCancel_">
      $i18n{cancel}
    </cr-button>
    <cr-button id="saveButton" class="action-button" disabled="[[!canEditPassword_]]" on-click="onEditClick_">
      $i18n{save}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Computes possible conflicting username by finding all passwords with
 * matching signonRealms. Returns map where key is the username and value is
 * human readable representation of signonRealm. Username is considered
 * conflicting if shares any domain with |currentPassword|.
 */
function getConflictingUsernames(currentPassword, passwords) {
    assert(currentPassword.affiliatedDomains);
    const currentSignonRealms = currentPassword.affiliatedDomains.map(domain => domain.signonRealm);
    return passwords.reduce(function (conflictingUsername, entry) {
        assert(entry.affiliatedDomains);
        const signonRealms = entry.affiliatedDomains.map(domain => domain.signonRealm);
        const signonRealm = signonRealms.filter(signonRealm => currentSignonRealms.includes(signonRealm))[0];
        if (signonRealm) {
            conflictingUsername.set(entry.username, entry.affiliatedDomains
                .find(domain => domain.signonRealm === signonRealm).name);
        }
        return conflictingUsername;
    }, new Map());
}
const EditPasswordDialogElementBase = ShowPasswordMixin(I18nMixin(PolymerElement));
class EditPasswordDialogElement extends EditPasswordDialogElementBase {
    constructor() {
        super(...arguments);
        this.setSavedPasswordsListener_ = null;
    }
    static get is() {
        return 'edit-password-dialog';
    }
    static get template() {
        return getTemplate$K();
    }
    static get properties() {
        return {
            credential: Object,
            showRedirect: {
                type: Boolean,
                value: false,
            },
            username_: String,
            password_: String,
            note_: String,
            conflictingUsernames_: {
                type: Object,
                values: () => new Map(),
            },
            usernameErrorMessage_: {
                type: String,
                computed: 'computeUsernameErrorMessage_(credential, username_, ' +
                    'conflictingUsernames_)',
            },
            canEditPassword_: {
                type: Boolean,
                computed: 'computeCanEditPassword_(credential, username_, password_, ' +
                    'note_)',
            },
        };
    }
    ready() {
        super.ready();
        assert(this.credential.password);
        this.username_ = this.credential.username;
        this.password_ = this.credential.password;
        this.note_ = this.credential.note ?? '';
    }
    connectedCallback() {
        super.connectedCallback();
        this.setSavedPasswordsListener_ = credentialList => {
            // Passkeys and federated credential may have the same username as a
            // password, since they can be different ways to authenticate the same
            // user. Thus, ignore these when finding conflicting usernames.
            const passwordList = credentialList.filter(credential => !credential.isPasskey && !credential.federationText);
            this.conflictingUsernames_ =
                getConflictingUsernames(this.credential, passwordList);
        };
        PasswordManagerImpl.getInstance().getSavedPasswordList().then(this.setSavedPasswordsListener_);
        PasswordManagerImpl.getInstance().addSavedPasswordListChangedListener(this.setSavedPasswordsListener_);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        assert(this.setSavedPasswordsListener_);
        PasswordManagerImpl.getInstance().removeSavedPasswordListChangedListener(this.setSavedPasswordsListener_);
        this.setSavedPasswordsListener_ = null;
    }
    computeUsernameErrorMessage_() {
        if (!this.conflictingUsernames_) {
            return null;
        }
        if (this.conflictingUsernames_.has(this.username_) &&
            this.username_ !== this.credential.username) {
            return this.i18n('usernameAlreadyUsed', this.conflictingUsernames_.get(this.username_));
        }
        return null;
    }
    doesUsernameExistAlready_() {
        return !!this.usernameErrorMessage_;
    }
    onCancel_() {
        this.$.dialog.close();
    }
    getFootnote_() {
        assert(this.credential.affiliatedDomains);
        return this.i18n('editPasswordFootnote', this.credential.affiliatedDomains[0]?.name ?? '');
    }
    showRedirect_() {
        return this.showRedirect && this.doesUsernameExistAlready_();
    }
    getViewExistingPasswordAriaDescription_() {
        if (!this.conflictingUsernames_) {
            return '';
        }
        return this.conflictingUsernames_.has(this.username_) ?
            this.i18n('viewExistingPasswordAriaDescription', this.username_, this.conflictingUsernames_.get(this.username_)) :
            '';
    }
    onViewExistingPasswordClick_(e) {
        e.preventDefault();
        assert(this.conflictingUsernames_.has(this.username_));
        Router.getInstance().navigateTo(Page.PASSWORD_DETAILS, this.conflictingUsernames_.get(this.username_));
        this.$.dialog.close();
    }
    isNoteInputInvalid_() {
        return this.note_.length >= PASSWORD_NOTE_MAX_CHARACTER_COUNT;
    }
    getFirstNoteFooter_() {
        return this.note_.length < PASSWORD_NOTE_WARNING_CHARACTER_COUNT ?
            '' :
            this.i18n('passwordNoteCharacterCountWarning', PASSWORD_NOTE_MAX_CHARACTER_COUNT);
    }
    getSecondNoteFooter_() {
        return this.note_.length < PASSWORD_NOTE_WARNING_CHARACTER_COUNT ?
            '' :
            this.i18n('passwordNoteCharacterCount', this.note_.length, PASSWORD_NOTE_MAX_CHARACTER_COUNT);
    }
    computeCanEditPassword_() {
        return !this.doesUsernameExistAlready_() && !!this.password_ &&
            this.password_.length > 0 && !this.isNoteInputInvalid_();
    }
    onEditClick_() {
        assert(this.computeCanEditPassword_());
        this.recordPasswordNoteMetrics();
        this.credential.password = this.password_;
        this.credential.username = this.username_;
        this.credential.note = this.note_;
        PasswordManagerImpl.getInstance()
            .changeCredential(this.credential)
            .finally(() => {
            this.$.dialog.close();
        });
    }
    recordPasswordNoteMetrics() {
        const newNote = this.note_.trim();
        const oldNote = this.credential?.note || '';
        if (oldNote === newNote) {
            recordPasswordNoteAction(PasswordNoteAction.NOTE_NOT_CHANGED);
        }
        else if (oldNote !== '' && newNote !== '') {
            recordPasswordNoteAction(PasswordNoteAction.NOTE_EDITED_IN_EDIT_DIALOG);
        }
        else if (oldNote !== '') {
            recordPasswordNoteAction(PasswordNoteAction.NOTE_REMOVED_IN_EDIT_DIALOG);
        }
        else {
            recordPasswordNoteAction(PasswordNoteAction.NOTE_ADDED_IN_EDIT_DIALOG);
        }
    }
}
customElements.define(EditPasswordDialogElement.is, EditPasswordDialogElement);

function getTemplate$J() {
    return html `<!--_html_template_start_--><style include="shared-style cr-shared-style">a[href]{color:var(--cr-link-color)}</style>
<cr-dialog id="dialog" close-text="$i18n{close}" ignore-popstate ignore-enter-key>
  <div slot="title" class="dialog-title">
    $i18n{deletePasswordConfirmationTitle}
  </div>
  <div slot="body">
    <span id="link" hidden="[[!hasSecureChangePasswordUrl_(actionUrl)]]" inner-h-t-m-l="[[getDescriptionHtml_(origin,actionUrl)]]">
    </span>
    <span id="text" hidden="[[hasSecureChangePasswordUrl_(actionUrl)]]">
      [[getDescriptionText_(origin)]]
    </span>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" on-click="onCancelClick_" id="cancel" autofocus>
      $i18n{cancel}
    </cr-button>
    <cr-button class="action-button" on-click="onDeleteClick_" id="delete">
      $i18n{deletePassword}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const DeletePasswordDisclaimerDialogElementBase = I18nMixin(PolymerElement);
class DeletePasswordDisclaimerDialogElement extends DeletePasswordDisclaimerDialogElementBase {
    constructor() {
        super(...arguments);
        this.passwordManager_ = PasswordManagerImpl.getInstance();
    }
    static get is() {
        return 'delete-password-disclaimer-dialog';
    }
    static get template() {
        return getTemplate$J();
    }
    static get properties() {
        return {
            /**
             * The password that is being displayed.
             */
            origin: String,
            actionUrl: String,
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.$.dialog.showModal();
    }
    onDeleteClick_() {
        this.dispatchEvent(new CustomEvent('delete-password-click', { bubbles: true, composed: true }));
        this.passwordManager_.recordPasswordCheckInteraction(PasswordCheckInteraction.REMOVE_PASSWORD);
        this.$.dialog.close();
    }
    onCancelClick_() {
        this.$.dialog.close();
    }
    hasSecureChangePasswordUrl_() {
        const url = this.actionUrl;
        return !!url && (url.startsWith('https://'));
    }
    /**
     * Returns the delete password description with a linkified change password
     * URL. Requires the change password URL to be present and secure.
     */
    getDescriptionHtml_() {
        if (!this.hasSecureChangePasswordUrl_()) {
            return window.trustedTypes.emptyHTML;
        }
        return this.i18nAdvanced('deletePasswordConfirmationDescription', {
            substitutions: [
                this.origin,
                `<a href='${this.actionUrl}' target='_blank'>${this.origin}</a>`,
            ],
        });
    }
    /**
     * Returns the delete password description as a plain text.
     * Used when the change password URL is not present or insecure.
     */
    getDescriptionText_() {
        return this.i18n('deletePasswordConfirmationDescription', this.origin, this.origin);
    }
}
customElements.define(DeletePasswordDisclaimerDialogElement.is, DeletePasswordDisclaimerDialogElement);

function getTemplate$I() {
    return html `<!--_html_template_start_--><cr-dialog id="dialog" close-text="$i18n{close}">
  <div slot="title">[[getDisclaimerTitle_(origin)]]</div>
  <div slot="body">[[getDisclaimerDescription_()]]</div>
  <div slot="button-container">
    <cr-button id="cancel" class="cancel-button" on-click="onCancel_" autofocus>
      $i18n{cancel}
    </cr-button>
    <cr-button id="edit" class="action-button" on-click="onEditClick_">
      $i18n{editPassword}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const EditPasswordDisclaimerDialogElementBase = I18nMixin(PolymerElement);
class EditPasswordDisclaimerDialogElement extends EditPasswordDisclaimerDialogElementBase {
    static get is() {
        return 'edit-password-disclaimer-dialog';
    }
    static get template() {
        return getTemplate$I();
    }
    static get properties() {
        return {
            /**
             * The website origin that is being displayed.
             */
            origin: String,
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.$.dialog.showModal();
    }
    onEditClick_() {
        this.dispatchEvent(new CustomEvent('edit-password-click', { bubbles: true, composed: true }));
        this.$.dialog.close();
    }
    onCancel_() {
        this.$.dialog.close();
    }
    getDisclaimerTitle_() {
        return this.i18n('editDisclaimerTitle', this.origin);
    }
    getDisclaimerDescription_() {
        const brandingName = this.i18n('localPasswordManager');
        return this.i18n('editDisclaimerDescription', brandingName);
    }
}
customElements.define(EditPasswordDisclaimerDialogElement.is, EditPasswordDisclaimerDialogElement);

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview <cr-auto-img> is a specialized <img> that facilitates embedding
 * images into WebUIs via its auto-src attribute. <cr-auto-img> automatically
 * determines if the image is local (e.g. data: or chrome://) or external (e.g.
 * https://), and embeds the image directly or via the chrome://image data
 * source accordingly. Usage:
 *
 *   1. In C++ register |SanitizedImageSource| for your WebUI.
 *
 *   2. In HTML instantiate
 *
 *      <img is="cr-auto-img" auto-src="https://foo.com/bar.png">
 *
 *      If your image URL points to Google Photos storage, meaning it needs an
 *      auth token, you can use the is-google-photos attribute as follows:
 *
 *      <img is="cr-auto-img" auto-src="https://foo.com/bar.png"
 *          is-google-photos>
 *
 *      If you want the image to reset to an empty state when auto-src changes
 *      and the new image is still loading, set the clear-src attribute:
 *
 *      <img is="cr-auto-img" auto-src="[[calculateSrc()]]" clear-src>
 *
 *      If you want your image to be always encoded as a static image (even if
 *      the source image is animated), set the static-encode attribute:
 *
 *      <img is="cr-auto-img" auto-src="https://foo.com/bar.png"
 *          static-encode>
 *
 *      Static images are encoded as PNG by default. If you want your image to
 *      be encoded as a Webp image, set the encode-type attribute to "webp".
 *
 *      <img is="cr-auto-img" auto-src="https://foo.com/bar.png"
 *          static-encode encode-type="webp">
 *
 * NOTE: Since <cr-auto-img> may use the chrome://image data source some images
 * may be transcoded to PNG.
 */
const AUTO_SRC = 'auto-src';
const CLEAR_SRC = 'clear-src';
const IS_GOOGLE_PHOTOS = 'is-google-photos';
const STATIC_ENCODE = 'static-encode';
const ENCODE_TYPE = 'encode-type';
class CrAutoImgElement extends HTMLImageElement {
    static get observedAttributes() {
        return [AUTO_SRC, IS_GOOGLE_PHOTOS, STATIC_ENCODE, ENCODE_TYPE];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name !== AUTO_SRC && name !== IS_GOOGLE_PHOTOS &&
            name !== STATIC_ENCODE && name !== ENCODE_TYPE) {
            return;
        }
        // Changes to |IS_GOOGLE_PHOTOS| are only interesting when the attribute is
        // being added or removed.
        if (name === IS_GOOGLE_PHOTOS &&
            ((oldValue === null) === (newValue === null))) {
            return;
        }
        if (this.hasAttribute(CLEAR_SRC)) {
            // Remove the src attribute so that the old image is not shown while the
            // new one is loading.
            this.removeAttribute('src');
        }
        let url = null;
        try {
            url = new URL(this.getAttribute(AUTO_SRC) || '');
        }
        catch (_) {
        }
        if (!url || url.protocol === 'chrome-untrusted:') {
            // Loading chrome-untrusted:// directly kills the renderer process.
            // Loading chrome-untrusted:// via the chrome://image data source
            // results in a broken image.
            this.removeAttribute('src');
            return;
        }
        if (url.protocol === 'data:' || url.protocol === 'chrome:') {
            this.src = url.href;
            return;
        }
        if (!this.hasAttribute(IS_GOOGLE_PHOTOS) &&
            !this.hasAttribute(STATIC_ENCODE) && !this.hasAttribute(ENCODE_TYPE)) {
            this.src = 'chrome://image?' + url.href;
            return;
        }
        this.src = `chrome://image?url=${encodeURIComponent(url.href)}`;
        if (this.hasAttribute(IS_GOOGLE_PHOTOS)) {
            this.src += `&isGooglePhotos=true`;
        }
        if (this.hasAttribute(STATIC_ENCODE)) {
            this.src += `&staticEncode=true`;
        }
        if (this.hasAttribute(ENCODE_TYPE)) {
            this.src += `&encodeType=${this.getAttribute(ENCODE_TYPE)}`;
        }
    }
    set autoSrc(src) {
        this.setAttribute(AUTO_SRC, src);
    }
    get autoSrc() {
        return this.getAttribute(AUTO_SRC) || '';
    }
    set clearSrc(_) {
        this.setAttribute(CLEAR_SRC, '');
    }
    get clearSrc() {
        return this.getAttribute(CLEAR_SRC) || '';
    }
    set isGooglePhotos(enabled) {
        if (enabled) {
            this.setAttribute(IS_GOOGLE_PHOTOS, '');
        }
        else {
            this.removeAttribute(IS_GOOGLE_PHOTOS);
        }
    }
    get isGooglePhotos() {
        return this.hasAttribute(IS_GOOGLE_PHOTOS);
    }
    set staticEncode(enabled) {
        if (enabled) {
            this.setAttribute(STATIC_ENCODE, '');
        }
        else {
            this.removeAttribute(STATIC_ENCODE);
        }
    }
    get staticEncode() {
        return this.hasAttribute(STATIC_ENCODE);
    }
    set encodeType(type) {
        if (type) {
            this.setAttribute(ENCODE_TYPE, type);
        }
        else {
            this.removeAttribute(ENCODE_TYPE);
        }
    }
    get encodeType() {
        return this.getAttribute(ENCODE_TYPE) || '';
    }
}
customElements.define('cr-auto-img', CrAutoImgElement, { extends: 'img' });

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @return The scale factors supported by this platform for webui resources.
 */
function getSupportedScaleFactors() {
    const supportedScaleFactors = [];
    if (!isIOS) {
        // This matches the code in ResourceBundle::InitSharedInstance() that
        // supports SCALE_FACTOR_100P on all non-iOS platforms.
        supportedScaleFactors.push(1);
    }
    if (!isIOS && !isAndroid) {
        // All desktop platforms support zooming which also updates the renderer's
        // device scale factors (a.k.a devicePixelRatio), and these platforms have
        // high DPI assets for 2x.  Let the renderer pick the closest image for
        // the current device scale factor.
        supportedScaleFactors.push(2);
    }
    else {
        // For other platforms that use fixed device scale factor, use
        // the window's device pixel ratio.
        // TODO(oshima): Investigate corresponding to
        // ResourceBundle::InitSharedInstance() more closely.
        supportedScaleFactors.push(window.devicePixelRatio);
    }
    return supportedScaleFactors;
}
/**
 * Generates a CSS url string.
 * @param s The URL to generate the CSS url for.
 * @return The CSS url string.
 */
function getUrlForCss(s) {
    // http://www.w3.org/TR/css3-values/#uris
    // Parentheses, commas, whitespace characters, single quotes (') and double
    // quotes (") appearing in a URI must be escaped with a backslash
    const s2 = s.replace(/(\(|\)|\,|\s|\'|\"|\\)/g, '\\$1');
    return `url("${s2}")`;
}
/**
 * Generates a CSS image-set for a chrome:// url.
 * An entry in the image set is added for each of getSupportedScaleFactors().
 * The scale-factor-specific url is generated by replacing the first instance
 * of 'scalefactor' in |path| with the numeric scale factor.
 *
 * @param path The URL to generate an image set for.
 *     'scalefactor' should be a substring of |path|.
 * @return The CSS image-set.
 */
function getImageSet(path) {
    const supportedScaleFactors = getSupportedScaleFactors();
    const replaceStartIndex = path.indexOf('SCALEFACTOR');
    if (replaceStartIndex < 0) {
        return getUrlForCss(path);
    }
    let s = '';
    for (let i = 0; i < supportedScaleFactors.length; ++i) {
        const scaleFactor = supportedScaleFactors[i];
        const pathWithScaleFactor = path.substr(0, replaceStartIndex) +
            scaleFactor + path.substr(replaceStartIndex + 'scalefactor'.length);
        s += getUrlForCss(pathWithScaleFactor) + ' ' + scaleFactor + 'x';
        if (i !== supportedScaleFactors.length - 1) {
            s += ', ';
        }
    }
    return 'image-set(' + s + ')';
}
function getBaseFaviconUrl() {
    const faviconUrl = new URL('chrome://favicon2/');
    faviconUrl.searchParams.set('size', '16');
    faviconUrl.searchParams.set('scaleFactor', 'SCALEFACTORx');
    return faviconUrl;
}
/**
 * Creates a CSS image-set for a favicon.
 *
 * @param url URL of the favicon
 * @return image-set for the favicon
 */
function getFavicon(url) {
    const faviconUrl = getBaseFaviconUrl();
    faviconUrl.searchParams.set('iconUrl', url);
    return getImageSet(faviconUrl.toString());
}
/**
 * Creates a CSS image-set for a favicon request based on a page URL.
 *
 * @param url URL of the original page
 * @param isSyncedUrlForHistoryUi Should be set to true only if the
 *     caller is an UI aimed at displaying user history, and the requested url
 *     is known to be present in Chrome sync data.
 * @param remoteIconUrlForUma In case the entry is contained in sync
 *     data, we can pass the associated icon url.
 * @param size The favicon size.
 * @param forceLightMode Flag to force the service to show the light
 *     mode version of the default favicon.
 *
 * @return image-set for the favicon.
 */
function getFaviconForPageURL(url, isSyncedUrlForHistoryUi, remoteIconUrlForUma = '', size = 16, forceLightMode = false) {
    // Note: URL param keys used below must match those in the description of
    // chrome://favicon2 format in components/favicon_base/favicon_url_parser.h.
    const faviconUrl = getBaseFaviconUrl();
    faviconUrl.searchParams.set('size', size.toString());
    faviconUrl.searchParams.set('pageUrl', url);
    // TODO(dbeam): use the presence of 'allowGoogleServerFallback' to
    // indicate true, otherwise false.
    const fallback = isSyncedUrlForHistoryUi ? '1' : '0';
    faviconUrl.searchParams.set('allowGoogleServerFallback', fallback);
    if (isSyncedUrlForHistoryUi) {
        faviconUrl.searchParams.set('iconUrl', remoteIconUrlForUma);
    }
    if (forceLightMode) {
        faviconUrl.searchParams.set('forceLightMode', 'true');
    }
    return getImageSet(faviconUrl.toString());
}

function getTemplate$H() {
    return html `<!--_html_template_start_--><style include="cr-hidden-style">:host{--site-favicon-height:16px;--site-favicon-width:16px;overflow:hidden}#downloadedFavicon,#favicon{background-size:contain;height:var(--site-favicon-height);width:var(--site-favicon-width)}#downloadedFavicon{display:block}</style>
<div id="favicon" style="background-image:[[getBackgroundImage_(domain) ]]" hidden="[[showDownloadedIcon_]]">
</div>
<img is="cr-auto-img" id="downloadedFavicon" hidden="[[!showDownloadedIcon_]]" on-load="onLoadSuccess_" on-error="onLoadError_" auto-src="[[url]]">
<!--_html_template_end_-->`;
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'site-favicon' is the section to display the favicon given the
 * |url| which can be used to download favicon. If downloading fails |origin|
 * will be used as a fallback to obtain the favicon from cache.
 */
/**
 * Ensures the URL has a scheme (assumes http if omitted).
 * @param url The URL with or without a scheme.
 * @return The URL with a scheme, or an empty string.
 */
function ensureUrlHasScheme(url) {
    return url.includes('://') ? url : 'http://' + url;
}
class SiteFaviconElement extends PolymerElement {
    static get is() {
        return 'site-favicon';
    }
    static get template() {
        return getTemplate$H();
    }
    static get properties() {
        return {
            domain: String,
            url: {
                type: String,
                observer: 'onUrlChanged_',
            },
            showDownloadedIcon_: {
                type: Boolean,
                value: false,
            },
        };
    }
    ready() {
        super.ready();
        // Set a timeout to handle a case when image takes too long to load.
        setTimeout(() => {
            if (!this.$.downloadedFavicon.complete) {
                // Reset src to cancel ongoin request.
                this.$.downloadedFavicon.src = '';
            }
        }, 1000);
    }
    getBackgroundImage_() {
        if (this.domain) {
            const url = ensureUrlHasScheme(this.domain);
            return getFaviconForPageURL(url || '', false);
        }
        return getFavicon('');
    }
    onLoadSuccess_() {
        this.showDownloadedIcon_ = true;
        this.dispatchEvent(new CustomEvent('site-favicon-loaded', { bubbles: true, composed: true }));
    }
    onLoadError_() {
        this.showDownloadedIcon_ = false;
        this.dispatchEvent(new CustomEvent('site-favicon-error', { bubbles: true, composed: true }));
    }
    onUrlChanged_() {
        this.showDownloadedIcon_ = false;
    }
}
customElements.define(SiteFaviconElement.is, SiteFaviconElement);

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class OpenWindowProxyImpl {
    openUrl(url) {
        window.open(url);
    }
    static getInstance() {
        return instance$3 || (instance$3 = new OpenWindowProxyImpl());
    }
    static setInstance(obj) {
        instance$3 = obj;
    }
}
let instance$3 = null;

function getTemplate$G() {
    return html `<!--_html_template_start_--><style include="shared-style cr-shared-style">:host{display:flex;flex-direction:column}site-favicon{padding-inline-end:20px}#list-item{align-items:center;display:flex;padding:16px 20px}#credentialInfo{display:grid;flex:2}#insecurePassword{background-color:transparent;border:none;color:var(--cr-secondary-text-color);font-size:inherit;margin-bottom:2px;margin-inline-start:4px;max-width:10ch}#usernameContainer{display:flex}#username{max-width:200px}#changeButton{align-items:flex-end;display:flex;flex-direction:column;margin-inline-start:var(--cr-icon-button-margin-start)}#change-password-link-icon{--iron-icon-width:16px;margin-inline-start:10px}#separator{margin-inline-start:56px}#alreadyChanged{color:var(--cr-link-color);flex:1;margin-top:8px;text-align:end}#changePasswordButton{height:auto;padding:3px 16px}</style>
<div id="separator" class="hr" hidden="[[first]]"></div>
<div id="list-item" focus-row-container>
  <site-favicon url="[[getGroupIcon_(group)]]" domain="[[getGroupName_(group)]]" aria-hidden="true">
  </site-favicon>
  <div id="credentialInfo">
    <div id="shownUrl" class="label text-elide">
      [[getGroupName_(group)]]
    </div>
    <div id="usernameContainer" class="cr-secondary-text label">
      <span id="username" class="text-elide">[[item.username]]</span>
      <input id="insecurePassword" focus-row-control class="password-input" focus-type="passwordField" readonly="readonly" disabled="disabled" type="[[getPasswordInputType(isPasswordVisible)]]" value="[[getPasswordValue_(item, isPasswordVisible)]]">
    </div>
    <template is="dom-if" if="[[showDetails]]">
      <div class="cr-secondary-text label text-elide" id="compromiseType">
        [[getCompromiseDescription_(item)]]
      </div>
      <div class="cr-secondary-text label text-elide" id="elapsedTime">
        [[item.compromisedInfo.elapsedTimeSinceCompromise]]
      </div>
    </template>
  </div>
  <template is="dom-if" if="[[item.changePasswordUrl]]">
    <div class="button-container" id="changeButton">
      <cr-button id="changePasswordButton" on-click="onChangePasswordClick_" aria-label$="[[getChangeButtonAriaLabel_(group)]]">
        $i18n{changePassword}
        <iron-icon icon="cr:open-in-new" id="change-password-link-icon">
        </iron-icon>
      </cr-button>
      <a id="alreadyChanged" hidden="[[!showAlreadyChanged]]" href="/" on-click="onAlreadyChangedClick_">
        $i18n{alreadyChangedPasswordLink}
      </a>
    </div>
  </template>
  <template is="dom-if" if="[[!item.changePasswordUrl]]">
    <span id="changePasswordInApp">$i18n{changePasswordInApp}</span>
  </template>
  <cr-icon-button class="icon-more-vert" id="more" title="$i18n{moreActions}" on-click="onMoreClick_" aria-label$="[[getMoreButtonAriaLabel_(group)]]">
  </cr-icon-button>
</div>
<template is="dom-if" if="[[showEditPasswordDisclaimer_]]" restamp>
  <edit-password-disclaimer-dialog on-edit-password-click="onEditPasswordClick_" origin="[[getGroupName_(group)]]" on-close="onEditDisclaimerClosed_">
  </edit-password-disclaimer-dialog>
</template>
<template is="dom-if" if="[[showEditPasswordDialog_]]" restamp>
  <edit-password-dialog on-close="onEditPasswordDialogClosed_" id="editPasswordDialog" credential="[[item]]" show-redirect>
  </edit-password-dialog>
</template>
<template is="dom-if" if="[[showDeletePasswordDialog_]]" restamp>
  <delete-password-disclaimer-dialog id="deletePasswordDialog" on-delete-password-click="onDeletePasswordClick_" on-close="onDeletePasswordDialogClosed_" origin="[[getGroupName_(group)]]" action-url="[[item.changePasswordUrl]]">
  </delete-password-disclaimer-dialog>
</template>
<!--_html_template_end_-->`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CheckupListItemElementBase = ShowPasswordMixin(I18nMixin(PolymerElement));
class CheckupListItemElement extends CheckupListItemElementBase {
    static get is() {
        return 'checkup-list-item';
    }
    static get template() {
        return getTemplate$G();
    }
    static get properties() {
        return {
            item: Object,
            group: Object,
            first: Boolean,
            showDetails: Boolean,
            showAlreadyChanged: Boolean,
            showEditPasswordDialog_: Boolean,
            showEditPasswordDisclaimer_: Boolean,
            showDeletePasswordDialog_: Boolean,
        };
    }
    getPasswordValue_() {
        return this.isPasswordVisible ? this.item.password : ' '.repeat(10);
    }
    getCompromiseDescription_() {
        assert(this.item.compromisedInfo);
        const isLeaked = this.item.compromisedInfo.compromiseTypes.some(type => type === chrome.passwordsPrivate.CompromiseType.LEAKED);
        const isPhished = this.item.compromisedInfo.compromiseTypes.some(type => type === chrome.passwordsPrivate.CompromiseType.PHISHED);
        if (isLeaked && isPhished) {
            return this.i18n('phishedAndLeakedPassword');
        }
        if (isPhished) {
            return this.i18n('phishedPassword');
        }
        if (isLeaked) {
            return this.i18n('leakedPassword');
        }
        assertNotReached('Can\'t find a string for type: ' + this.item.compromisedInfo);
    }
    onMoreClick_(event) {
        this.dispatchEvent(new CustomEvent('more-actions-click', {
            bubbles: true,
            composed: true,
            detail: {
                listItem: this,
                target: event.target,
            },
        }));
    }
    showHidePassword() {
        if (this.isPasswordVisible === true) {
            this.onShowHidePasswordButtonClick();
            this.item.password = undefined;
            this.item.note = undefined;
            return;
        }
        PasswordManagerImpl.getInstance()
            .requestCredentialsDetails([this.item.id])
            .then(entries => {
            const entry = entries[0];
            assert(!!entry);
            this.item.password = entry.password;
            this.item.note = entry.note;
            this.onShowHidePasswordButtonClick();
        })
            .catch(() => { });
    }
    showEditDialog() {
        PasswordManagerImpl.getInstance()
            .requestCredentialsDetails([this.item.id])
            .then(entries => {
            const entry = entries[0];
            assert(!!entry);
            this.item.affiliatedDomains = entry.affiliatedDomains;
            this.item.password = entry.password;
            this.item.note = entry.note;
            this.showEditPasswordDialog_ = true;
        })
            .catch(() => { });
    }
    showDeleteDialog() {
        this.showDeletePasswordDialog_ = true;
    }
    onChangePasswordClick_() {
        assert(this.item.changePasswordUrl);
        OpenWindowProxyImpl.getInstance().openUrl(this.item.changePasswordUrl);
        this.dispatchEvent(new CustomEvent('change-password-clicked', { bubbles: true, composed: true, detail: this.item.id }));
    }
    onAlreadyChangedClick_(e) {
        this.showEditPasswordDisclaimer_ = true;
        e.preventDefault();
    }
    onEditPasswordDialogClosed_() {
        this.showEditPasswordDialog_ = false;
        this.item.password = undefined;
        this.item.note = undefined;
    }
    onEditPasswordClick_() {
        this.showEditDialog();
    }
    onEditDisclaimerClosed_() {
        this.showEditPasswordDisclaimer_ = false;
    }
    onDeletePasswordDialogClosed_() {
        this.showDeletePasswordDialog_ = false;
    }
    onDeletePasswordClick_() {
        PasswordManagerImpl.getInstance().removeCredential(this.item.id, this.item.storedIn);
        this.dispatchEvent(new CustomEvent('password-removed', {
            bubbles: true,
            composed: true,
            detail: {
                removedFromStores: this.item.storedIn,
            },
        }));
    }
    getGroupName_() {
        return !this.group ? '' : this.group.name;
    }
    getGroupIcon_() {
        return !this.group ? '' : this.group.iconUrl;
    }
    getChangeButtonAriaLabel_() {
        return this.i18n('changePasswordAriaDescription', this.getGroupName_());
    }
    getMoreButtonAriaLabel_() {
        return this.i18n('moreActionsAriaDescription', this.getGroupName_());
    }
}
customElements.define(CheckupListItemElement.is, CheckupListItemElement);

// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Common prefs behavior.
 */
// clang-format off
const PrefsMixin = dedupingMixin((superClass) => {
    class PrefsMixin extends superClass {
        static get properties() {
            return {
                /** Preferences state. */
                prefs: {
                    type: Object,
                    notify: true,
                },
            };
        }
        /**
         * Gets the pref at the given prefPath. Throws if the pref is not found.
         */
        getPref(prefPath) {
            const pref = this.get(prefPath, this.prefs);
            assert(typeof pref !== 'undefined', 'Pref is missing: ' + prefPath);
            return pref;
        }
        /**
         * Sets the value of the pref at the given prefPath. Throws if the pref
         * is not found.
         */
        setPrefValue(prefPath, value) {
            this.getPref(prefPath); // Ensures we throw if the pref is not found.
            this.set('prefs.' + prefPath + '.value', value);
        }
        /**
         * Appends the item to the pref list at the given key if the item is not
         * already in the list. Asserts if the pref itself is not found or is
         * not an Array type.
         */
        appendPrefListItem(key, item) {
            const pref = this.getPref(key);
            assert(pref && pref.type === chrome.settingsPrivate.PrefType.LIST);
            if (pref.value.indexOf(item) === -1) {
                this.push('prefs.' + key + '.value', item);
            }
        }
        /**
         * Updates the item in the pref list to the new value. Asserts if the
         * pref itself is not found or is not an Array type.
         */
        updatePrefListItem(key, item, newItem) {
            const pref = this.getPref(key);
            assert(pref && pref.type === chrome.settingsPrivate.PrefType.LIST);
            const index = pref.value.indexOf(item);
            if (index !== -1) {
                this.set(`prefs.${key}.value.${index}`, newItem);
            }
        }
        /**
         * Deletes the given item from the pref at the given key if the item is
         * found. Asserts if the pref itself is not found or is not an Array
         * type.
         */
        deletePrefListItem(key, item) {
            assert(this.getPref(key).type === chrome.settingsPrivate.PrefType.LIST);
            const index = this.getPref(key).value.indexOf(item);
            if (index !== -1) {
                this.splice(`prefs.${key}.value`, index, 1);
            }
        }
        /**
         * Updates the entry in the pref dictionary to the new key value pair.
         * Asserts if the pref itself is not found or is not a dictionary type.
         */
        setPrefDictEntry(prefPath, key, value) {
            const pref = this.getPref(prefPath);
            assert(pref && pref.type === chrome.settingsPrivate.PrefType.DICTIONARY);
            pref.value[key] = value;
            this.set('prefs.' + prefPath + '.value', { ...pref.value });
        }
        /**
         * Deletes the given key from the pref dictionary if it is
         * found. Asserts if the pref itself is not found or is not a dictionary
         * type.
         */
        deletePrefDictEntry(prefPath, key) {
            const pref = this.getPref(prefPath);
            assert(pref && pref.type === chrome.settingsPrivate.PrefType.DICTIONARY);
            delete pref.value[key];
            this.set('prefs.' + prefPath + '.value', { ...pref.value });
        }
    }
    return PrefsMixin;
});

function getTemplate$F() {
    return html `<!--_html_template_start_--><style include="shared-style cr-shared-style">:host(:not(.multi-card)){background-color:var(--cr-card-background-color);box-shadow:var(--cr-card-shadow);height:100%}#header{align-items:center;display:flex;padding-top:28px}#title{font-family:Roboto;font-size:14px;font-style:normal;font-weight:500;line-height:20px}#body{margin-top:40px;padding-inline-end:20px;padding-inline-start:20px}#expandMutedCompromisedCredentialsButton,#subtitle{color:var(--cr-secondary-text-color);font-weight:500}#description{margin-top:12px}#backButton{--cr-icon-button-margin-end:6px;--cr-icon-button-margin-start:0px}#insecureCredentials{margin-top:24px}.reuse-title{margin-inline-start:20px;margin-top:24px}iron-icon.policy-disabled{margin-inline-start:var(--cr-controlled-by-spacing)}</style>
<div id="header">
  <cr-icon-button class="icon-arrow-back" id="backButton" on-click="navigateBack_" aria-label="$i18n{backToCheckup}">
  </cr-icon-button>
  <h2 id="title" class="page-title">[[pageTitle_]]</h2>
</div>
<div id="body">
  <div id="subtitle" class="label">
    [[getSubTitle_(insecurityType_)]]
  </div>
  <div id="description" class="cr-secondary-text label">
    [[getDescription_(insecurityType_)]]
  </div>
</div>
<template is="dom-if" if="[[!isReusedType(insecurityType_)]]">
  <template id="insecureCredentials" is="dom-repeat" items="[[shownInsecureCredentials_]]" initial-count="50">
    <checkup-list-item item="[[item]]" first="[[!index]]" group="[[getCurrentGroup_(item.id, groups_)]]" show-details="[[isCompromisedType(insecurityType_)]]" show-already-changed="[[clickedChangePassword_(item, clickedChangePasswordIds_.size)]]" on-more-actions-click="onMoreActionsClick_" on-change-password-clicked="onChangePasswordClick_">
    </checkup-list-item>
  </template>
  <template is="dom-if" if="[[mutedCompromisedCredentials_.length]]">
    <cr-expand-button id="expandMutedCompromisedCredentialsButton" class="cr-row list-item" no-hover expanded="{{mutedLeakedCredentialsExpanded_}}">
      $i18n{mutedCompromisedCredentials}
    </cr-expand-button>
    <iron-collapse id="mutedCredentialsList" opened="[[mutedLeakedCredentialsExpanded_]]">
      <template is="dom-repeat" items="[[mutedCompromisedCredentials_]]">
        <checkup-list-item item="[[item]]" first="[[!index]]" group="[[getCurrentGroup_(item.id, groups_)]]" show-details="[[isCompromisedType(insecurityType_)]]" show-already-changed="[[clickedChangePassword_(item, clickedChangePasswordIds_.size)]]" on-more-actions-click="onMoreActionsClick_" on-change-password-clicked="onChangePasswordClick_">
        </checkup-list-item>
      </template>
    </iron-collapse>
  </template>
</template>
<template is="dom-if" if="[[isReusedType(insecurityType_)]]" restamp>
  <template id="reusedCredentials" is="dom-repeat" items="[[credentialsWithReusedPassword_]]" initial-count="50">
    <div class="cr-secondary-text label reuse-title">
      [[item.title]]
    </div>
    <template is="dom-repeat" items="[[item.credentials]]">
      <checkup-list-item item="[[item]]" first="[[!index]]" group="[[getCurrentGroup_(item.id, groups_)]]" show-already-changed="[[clickedChangePassword_(item, clickedChangePasswordIds_.size)]]" on-more-actions-click="onMoreActionsClick_" on-change-password-clicked="onChangePasswordClick_">
      </checkup-list-item>
    </template>
  </template>
</template>
<cr-action-menu id="moreActionsMenu" role-description="$i18n{menu}" accessibility-label="$i18n{moreActions}">
  <button id="menuShowPassword" class="dropdown-item" on-click="onMenuShowPasswordClick_">
    [[getShowHideTitle_(activeListItem_)]]
  </button>
  <button id="menuEditPassword" class="dropdown-item" on-click="onMenuEditPasswordClick_">
    $i18n{editPassword}
  </button>
  <button id="menuDeletePassword" class="dropdown-item" on-click="onMenuDeletePasswordClick_">
    $i18n{deletePassword}
  </button>
  <template is="dom-if" if="[[isCompromisedType(insecurityType_)]]">
    <button id="menuMuteUnmuteButton" class="dropdown-item" on-click="onMenuMuteUnmuteClick_" disabled="[[isMutingDisabled_]]">
      [[getMuteUnmuteLabel_(activeListItem_)]]
      <template is="dom-if" if="[[isMutingDisabled_]]" restamp>
        <iron-icon icon="cr20:domain" class="policy-disabled">
        </iron-icon>
      </template>
    </button>
  </template>
</cr-action-menu>
<!--_html_template_end_-->`;
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ReusedPasswordInfo {
    constructor(credentials) {
        this.credentials = credentials;
    }
    async init() {
        this.title = await PluralStringProxyImpl.getInstance().getPluralString('numberOfPasswordReuse', this.credentials.length);
    }
}
const CheckupDetailsSectionElementBase = PrefsMixin(I18nMixin(RouteObserverMixin(PolymerElement)));
class CheckupDetailsSectionElement extends CheckupDetailsSectionElementBase {
    constructor() {
        super(...arguments);
        this.groups_ = [];
        this.insecureCredentialsChangedListener_ = null;
    }
    static get is() {
        return 'checkup-details-section';
    }
    static get template() {
        return getTemplate$F();
    }
    static get properties() {
        return {
            pageTitle_: String,
            insecurityType_: {
                type: String,
                observer: 'updateShownCredentials_',
            },
            allInsecureCredentials_: {
                type: Array,
                observer: 'updateShownCredentials_',
            },
            shownInsecureCredentials_: {
                type: Array,
                observer: 'onCredentialsChanged_',
            },
            credentialsWithReusedPassword_: {
                type: Array,
            },
            /**
             * The ids of insecure credentials for which user clicked "Change
             * Password" button
             */
            clickedChangePasswordIds_: {
                type: Object,
                value: new Set(),
            },
            isMutingDisabled_: {
                type: Boolean,
                computed: 'computeIsMutingDisabled_(' +
                    'prefs.profile.password_dismiss_compromised_alert.value)',
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        const updateGroups = () => {
            PasswordManagerImpl.getInstance().getCredentialGroups().then(groups => this.groups_ = groups);
        };
        this.insecureCredentialsChangedListener_ = insecureCredentials => {
            this.allInsecureCredentials_ = insecureCredentials;
            updateGroups();
        };
        updateGroups();
        PasswordManagerImpl.getInstance().getInsecureCredentials().then(this.insecureCredentialsChangedListener_);
        PasswordManagerImpl.getInstance().addInsecureCredentialsListener(this.insecureCredentialsChangedListener_);
    }
    currentRouteChanged(route, oldRoute) {
        if (route.page !== Page.CHECKUP_DETAILS) {
            return;
        }
        this.insecurityType_ = route.details;
        // Focus back button when it's not direct navigation.
        if (oldRoute !== undefined) {
            this.$.backButton.focus();
        }
    }
    navigateBack_() {
        Router.getInstance().navigateTo(Page.CHECKUP);
    }
    async updateShownCredentials_() {
        if (!this.insecurityType_ || !this.allInsecureCredentials_) {
            return;
        }
        const insecureCredentialsForThisType = this.allInsecureCredentials_.filter(cred => cred.compromisedInfo.compromiseTypes.some(type => {
            return this.getInsecurityType_().includes(type);
        }));
        const insuecureCredentialsSorter = (lhs, rhs) => {
            if ((this.getCurrentGroup_(lhs.id)?.name || '') >
                (this.getCurrentGroup_(rhs.id)?.name || '')) {
                return 1;
            }
            return -1;
        };
        if (this.isCompromisedType()) {
            // Compromised credentials can be muted. Show muted credentials
            // separately.
            this.mutedCompromisedCredentials_ = insecureCredentialsForThisType.filter(cred => cred.compromisedInfo.isMuted);
            this.shownInsecureCredentials_ = insecureCredentialsForThisType.filter(cred => !cred.compromisedInfo.isMuted);
        }
        else {
            insecureCredentialsForThisType.sort(insuecureCredentialsSorter);
            this.shownInsecureCredentials_ = insecureCredentialsForThisType;
        }
        if (this.isReusedType()) {
            const allReusedCredentials = await PasswordManagerImpl.getInstance()
                .getCredentialsWithReusedPassword();
            this.credentialsWithReusedPassword_ =
                await Promise.all(allReusedCredentials.map(async (credentials) => {
                    const reuseInfo = new ReusedPasswordInfo(credentials.entries.sort(insuecureCredentialsSorter));
                    await reuseInfo.init();
                    return reuseInfo;
                }));
            this.credentialsWithReusedPassword_.sort((lhs, rhs) => (lhs.credentials.length > rhs.credentials.length ? -1 : 1));
        }
    }
    async onCredentialsChanged_() {
        assert(this.insecurityType_);
        this.pageTitle_ = await PluralStringProxyImpl.getInstance().getPluralString(this.insecurityType_.concat('Passwords'), this.shownInsecureCredentials_.length);
    }
    getInsecurityType_() {
        assert(this.insecurityType_);
        switch (this.insecurityType_) {
            case CheckupSubpage.COMPROMISED:
                return [
                    chrome.passwordsPrivate.CompromiseType.LEAKED,
                    chrome.passwordsPrivate.CompromiseType.PHISHED,
                ];
            case CheckupSubpage.REUSED:
                return [chrome.passwordsPrivate.CompromiseType.REUSED];
            case CheckupSubpage.WEAK:
                return [chrome.passwordsPrivate.CompromiseType.WEAK];
        }
    }
    getSubTitle_() {
        assert(this.insecurityType_);
        return this.i18n(`${this.insecurityType_}PasswordsTitle`);
    }
    getDescription_() {
        assert(this.insecurityType_);
        return this.i18n(`${this.insecurityType_}PasswordsDescription`);
    }
    isCompromisedType() {
        return this.insecurityType_ === CheckupSubpage.COMPROMISED;
    }
    isReusedType() {
        return this.insecurityType_ === CheckupSubpage.REUSED;
    }
    onMoreActionsClick_(event) {
        const target = event.detail.target;
        this.$.moreActionsMenu.showAt(target);
        this.activeListItem_ =
            event.detail.listItem;
    }
    onMenuShowPasswordClick_() {
        this.activeListItem_?.showHidePassword();
        this.$.moreActionsMenu.close();
        this.activeListItem_ = null;
        PasswordManagerImpl.getInstance().recordPasswordCheckInteraction(PasswordCheckInteraction.SHOW_PASSWORD);
    }
    async onMenuEditPasswordClick_() {
        this.activeListItem_?.showEditDialog();
        this.$.moreActionsMenu.close();
        this.activeListItem_ = null;
        PasswordManagerImpl.getInstance().recordPasswordCheckInteraction(PasswordCheckInteraction.EDIT_PASSWORD);
    }
    async onMenuDeletePasswordClick_() {
        this.activeListItem_?.showDeleteDialog();
        this.$.moreActionsMenu.close();
        this.activeListItem_ = null;
    }
    getShowHideTitle_() {
        return this.activeListItem_?.getShowHideButtonLabel() || '';
    }
    computeIsMutingDisabled_() {
        return !this.getPref('profile.password_dismiss_compromised_alert').value;
    }
    getMuteUnmuteLabel_() {
        return this.activeListItem_?.item.compromisedInfo?.isMuted === true ?
            this.i18n('unmuteCompromisedPassword') :
            this.i18n('muteCompromisedPassword');
    }
    onMenuMuteUnmuteClick_() {
        assert(this.activeListItem_);
        if (this.activeListItem_.item.compromisedInfo?.isMuted === true) {
            PasswordManagerImpl.getInstance().recordPasswordCheckInteraction(PasswordCheckInteraction.UNMUTE_PASSWORD);
            PasswordManagerImpl.getInstance().unmuteInsecureCredential(this.activeListItem_.item);
        }
        else {
            PasswordManagerImpl.getInstance().recordPasswordCheckInteraction(PasswordCheckInteraction.MUTE_PASSWORD);
            PasswordManagerImpl.getInstance().muteInsecureCredential(this.activeListItem_.item);
        }
        this.$.moreActionsMenu.close();
    }
    getCurrentGroup_(id) {
        return this.groups_.find(group => group.entries.some(entry => entry.id === id));
    }
    onChangePasswordClick_(event) {
        this.clickedChangePasswordIds_.add(event.detail);
        this.notifyPath('clickedChangePasswordIds_.size');
        PasswordManagerImpl.getInstance().recordPasswordCheckInteraction(PasswordCheckInteraction.CHANGE_PASSWORD);
    }
    clickedChangePassword_(item) {
        return this.clickedChangePasswordIds_.has(item.id);
    }
}
customElements.define(CheckupDetailsSectionElement.is, CheckupDetailsSectionElement);

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
Material design:
[Tooltips](https://www.google.com/design/spec/components/tooltips.html)
`<paper-tooltip>` is a label that appears on hover and focus when the user
hovers over an element with the cursor or with the keyboard. It will be centered
to an anchor element specified in the `for` attribute, or, if that doesn't
exist, centered to the parent node containing it.
Example:
    <div style="display:inline-block">
      <button>Click me!</button>
      <paper-tooltip>Tooltip text</paper-tooltip>
    </div>
    <div>
      <button id="btn">Click me!</button>
      <paper-tooltip for="btn">Tooltip text</paper-tooltip>
    </div>
The tooltip can be positioned on the top|bottom|left|right of the anchor using
the `position` attribute. The default position is bottom.
    <paper-tooltip for="btn" position="left">Tooltip text</paper-tooltip>
    <paper-tooltip for="btn" position="top">Tooltip text</paper-tooltip>

### Styling
The following custom properties and mixins are available for styling:
Custom property | Description | Default
----------------|-------------|----------
`--paper-tooltip-background` | The background color of the tooltip | `#616161`
`--paper-tooltip-opacity` | The opacity of the tooltip | `0.9`
`--paper-tooltip-text-color` | The text color of the tooltip | `white`
`--paper-tooltip-delay-in` | Delay before tooltip starts to fade in | `500`
`--paper-tooltip-delay-out` | Delay before tooltip starts to fade out | `0`
`--paper-tooltip-duration-in` | Timing for animation when showing tooltip | `500`
`--paper-tooltip-duration-out` | Timing for animation when hiding tooltip | `0`

Also prefer using the exposed CSS part as follows where possible
paper-tooltip::part(tooltip) {...}

@group Paper Elements
@element paper-tooltip
@demo demo/index.html
*/
Polymer({
  _template: html`
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
`,

  is: 'paper-tooltip',
  hostAttributes: {role: 'tooltip', tabindex: -1},

  properties: {
    /**
     * The id of the element that the tooltip is anchored to. This element
     * must be a sibling of the tooltip. If this property is not set,
     * then the tooltip will be centered to the parent node containing it.
     */
    for: {type: String, observer: '_findTarget'},
    /**
     * Set this to true if you want to manually control when the tooltip
     * is shown or hidden.
     */
    manualMode: {type: Boolean, value: false, observer: '_manualModeChanged'},
    /**
     * Positions the tooltip to the top, right, bottom, left of its content.
     */
    position: {type: String, value: 'bottom'},
    /**
     * If true, no parts of the tooltip will ever be shown offscreen.
     */
    fitToVisibleBounds: {type: Boolean, value: false},
    /**
     * The spacing between the top of the tooltip and the element it is
     * anchored to.
     */
    offset: {type: Number, value: 14},
    /**
     * This property is deprecated, but left over so that it doesn't
     * break exiting code. Please use `offset` instead. If both `offset` and
     * `marginTop` are provided, `marginTop` will be ignored.
     * @deprecated since version 1.0.3
     */
    marginTop: {type: Number, value: 14},
    /**
     * The delay that will be applied before the `entry` animation is
     * played when showing the tooltip.
     */
    animationDelay: {type: Number, value: 500, observer: '_delayChange'},
    /**
     * The animation that will be played on entry.  This replaces the
     * deprecated animationConfig.  Entries here will override the
     * animationConfig settings.  You can enter your own animation
     * by setting it to the css class name.
     */
    animationEntry: {type: String, value: ''},
    /**
     * The animation that will be played on exit.  This replaces the
     * deprecated animationConfig.  Entries here will override the
     * animationConfig settings.  You can enter your own animation
     * by setting it to the css class name.
     */
    animationExit: {type: String, value: ''},
    /**
     * This property is deprecated.
     * The entry and exit animations that will be played when showing
     * and hiding the tooltip. If you want to override this, you must ensure
     * that your animationConfig has the exact format below.
     * @deprecated since version
     *
     * The entry and exit animations that will be played when showing and
     * hiding the tooltip. If you want to override this, you must ensure
     * that your animationConfig has the exact format below.
     */
    animationConfig: {
      type: Object,
      value: function() {
        return {
          'entry':
              [{name: 'fade-in-animation', node: this, timing: {delay: 0}}],
              'exit': [{name: 'fade-out-animation', node: this}]
        }
      }
    },
    _showing: {type: Boolean, value: false}
  },

  listeners: {
    'webkitAnimationEnd': '_onAnimationEnd',
  },

  /**
   * Returns the target element that this tooltip is anchored to. It is
   * either the element given by the `for` attribute, the element manually
   * specified through the `target` attribute, or the immediate parent of
   * the tooltip.
   *
   * @type {Node}
   */
  get target() {
    if (this._manualTarget)
      return this._manualTarget;

    var parentNode = dom(this).parentNode;
    // If the parentNode is a document fragment, then we need to use the host.
    var ownerRoot = dom(this).getOwnerRoot();
    var target;
    if (this.for) {
      target = dom(ownerRoot).querySelector('#' + this.for);
    } else {
      target = parentNode.nodeType == Node.DOCUMENT_FRAGMENT_NODE ?
          ownerRoot.host :
          parentNode;
    }
    return target;
  },

  /**
   * Sets the target element that this tooltip will be anchored to.
   * @param {Node} target
   */
  set target(target) {
    this._manualTarget = target;
    this._findTarget();
  },

  /**
   * @return {void}
   */
  attached: function() {
    this._findTarget();
  },

  /**
   * @return {void}
   */
  detached: function() {
    if (!this.manualMode)
      this._removeListeners();
  },

  /**
   * Replaces Neon-Animation playAnimation - just calls show and hide.
   * @deprecated Use show and hide instead.
   * @param {string} type Either `entry` or `exit`
   */
  playAnimation: function(type) {
    if (type === 'entry') {
      this.show();
    } else if (type === 'exit') {
      this.hide();
    }
  },

  /**
   * Cancels the animation and either fully shows or fully hides tooltip
   */
  cancelAnimation: function() {
    // Short-cut and cancel all animations and hide
    this.$.tooltip.classList.add('cancel-animation');
  },

  /**
   * Shows the tooltip programatically
   * @return {void}
   */
  show: function() {
    // If the tooltip is already showing, there's nothing to do.
    if (this._showing)
      return;

    if (dom(this).textContent.trim() === '') {
      // Check if effective children are also empty
      var allChildrenEmpty = true;
      var effectiveChildren = dom(this).getEffectiveChildNodes();
      for (var i = 0; i < effectiveChildren.length; i++) {
        if (effectiveChildren[i].textContent.trim() !== '') {
          allChildrenEmpty = false;
          break;
        }
      }
      if (allChildrenEmpty) {
        return;
      }
    }

    this._showing = true;
    this.$.tooltip.classList.remove('hidden');
    this.$.tooltip.classList.remove('cancel-animation');
    this.$.tooltip.classList.remove(this._getAnimationType('exit'));
    this.updatePosition();
    this._animationPlaying = true;
    this.$.tooltip.classList.add(this._getAnimationType('entry'));
  },

  /**
   * Hides the tooltip programatically
   * @return {void}
   */
  hide: function() {
    // If the tooltip is already hidden, there's nothing to do.
    if (!this._showing) {
      return;
    }

    // If the entry animation is still playing, don't try to play the exit
    // animation since this will reset the opacity to 1. Just end the animation.
    if (this._animationPlaying) {
      this._showing = false;
      this._cancelAnimation();
      return;
    } else {
      // Play Exit Animation
      this._onAnimationFinish();
    }

    this._showing = false;
    this._animationPlaying = true;
  },

  /**
   * @return {void}
   */
  updatePosition: function() {
    if (!this._target)
      return;
    var offsetParent = this._composedOffsetParent();
    if (!offsetParent)
      return;
    var offset = this.offset;
    // If a marginTop has been provided by the user (pre 1.0.3), use it.
    if (this.marginTop != 14 && this.offset == 14)
      offset = this.marginTop;
    var parentRect = offsetParent.getBoundingClientRect();
    var targetRect = this._target.getBoundingClientRect();
    var thisRect = this.getBoundingClientRect();
    var horizontalCenterOffset = (targetRect.width - thisRect.width) / 2;
    var verticalCenterOffset = (targetRect.height - thisRect.height) / 2;
    var targetLeft = targetRect.left - parentRect.left;
    var targetTop = targetRect.top - parentRect.top;
    var tooltipLeft, tooltipTop;
    switch (this.position) {
      case 'top':
        tooltipLeft = targetLeft + horizontalCenterOffset;
        tooltipTop = targetTop - thisRect.height - offset;
        break;
      case 'bottom':
        tooltipLeft = targetLeft + horizontalCenterOffset;
        tooltipTop = targetTop + targetRect.height + offset;
        break;
      case 'left':
        tooltipLeft = targetLeft - thisRect.width - offset;
        tooltipTop = targetTop + verticalCenterOffset;
        break;
      case 'right':
        tooltipLeft = targetLeft + targetRect.width + offset;
        tooltipTop = targetTop + verticalCenterOffset;
        break;
    }
    // TODO(noms): This should use IronFitBehavior if possible.
    if (this.fitToVisibleBounds) {
      // Clip the left/right side
      if (parentRect.left + tooltipLeft + thisRect.width > window.innerWidth) {
        this.style.right = '0px';
        this.style.left = 'auto';
      } else {
        this.style.left = Math.max(0, tooltipLeft) + 'px';
        this.style.right = 'auto';
      }
      // Clip the top/bottom side.
      if (parentRect.top + tooltipTop + thisRect.height > window.innerHeight) {
        this.style.bottom = (parentRect.height - targetTop + offset) + 'px';
        this.style.top = 'auto';
      } else {
        this.style.top = Math.max(-parentRect.top, tooltipTop) + 'px';
        this.style.bottom = 'auto';
      }
    } else {
      this.style.left = tooltipLeft + 'px';
      this.style.top = tooltipTop + 'px';
    }
  },

  _addListeners: function() {
    if (this._target) {
      this.listen(this._target, 'mouseenter', 'show');
      this.listen(this._target, 'focus', 'show');
      this.listen(this._target, 'mouseleave', 'hide');
      this.listen(this._target, 'blur', 'hide');
      this.listen(this._target, 'tap', 'hide');
    }
    this.listen(this.$.tooltip, 'animationend', '_onAnimationEnd');
    this.listen(this, 'mouseenter', 'hide');
  },

  _findTarget: function() {
    if (!this.manualMode)
      this._removeListeners();
    this._target = this.target;
    if (!this.manualMode)
      this._addListeners();
  },

  _delayChange: function(newValue) {
    // Only Update delay if different value set
    if (newValue !== 500) {
      this.updateStyles({'--paper-tooltip-delay-in': newValue + 'ms'});
    }
  },

  _manualModeChanged: function() {
    if (this.manualMode)
      this._removeListeners();
    else
      this._addListeners();
  },

  _cancelAnimation: function() {
    // Short-cut and cancel all animations and hide
    this.$.tooltip.classList.remove(this._getAnimationType('entry'));
    this.$.tooltip.classList.remove(this._getAnimationType('exit'));
    this.$.tooltip.classList.remove('cancel-animation');
    this.$.tooltip.classList.add('hidden');
  },

  _onAnimationFinish: function() {
    if (this._showing) {
      this.$.tooltip.classList.remove(this._getAnimationType('entry'));
      this.$.tooltip.classList.remove('cancel-animation');
      this.$.tooltip.classList.add(this._getAnimationType('exit'));
    }
  },

  _onAnimationEnd: function() {
    // If no longer showing add class hidden to completely hide tooltip
    this._animationPlaying = false;
    if (!this._showing) {
      this.$.tooltip.classList.remove(this._getAnimationType('exit'));
      this.$.tooltip.classList.add('hidden');
    }
  },

  _getAnimationType: function(type) {
    // These properties have priority over animationConfig values
    if ((type === 'entry') && (this.animationEntry !== '')) {
      return this.animationEntry;
    }
    if ((type === 'exit') && (this.animationExit !== '')) {
      return this.animationExit;
    }
    // If no results then return the legacy value from animationConfig
    if (this.animationConfig[type] &&
        typeof this.animationConfig[type][0].name === 'string') {
      // Checking Timing and Update if necessary - Legacy for animationConfig
      if (this.animationConfig[type][0].timing &&
          this.animationConfig[type][0].timing.delay &&
          this.animationConfig[type][0].timing.delay !== 0) {
        var timingDelay = this.animationConfig[type][0].timing.delay;
        // Has Timing Change - Update CSS
        if (type === 'entry') {
          this.updateStyles({'--paper-tooltip-delay-in': timingDelay + 'ms'});
        } else if (type === 'exit') {
          this.updateStyles({'--paper-tooltip-delay-out': timingDelay + 'ms'});
        }
      }
      return this.animationConfig[type][0].name;
    }
  },

  _removeListeners: function() {
    if (this._target) {
      this.unlisten(this._target, 'mouseenter', 'show');
      this.unlisten(this._target, 'focus', 'show');
      this.unlisten(this._target, 'mouseleave', 'hide');
      this.unlisten(this._target, 'blur', 'hide');
      this.unlisten(this._target, 'tap', 'hide');
    }
    this.unlisten(this.$.tooltip, 'animationend', '_onAnimationEnd');
    this.unlisten(this, 'mouseenter', 'hide');
  },

  /**
   * Polyfills the old offsetParent behavior from before the spec was changed:
   * https://github.com/w3c/csswg-drafts/issues/159
   */
  _composedOffsetParent: function() {
    // Do an initial walk to check for display:none ancestors.
    for (let ancestor = this; ancestor; ancestor = flatTreeParent(ancestor)) {
      if (!(ancestor instanceof Element))
        continue;
      if (getComputedStyle(ancestor).display === 'none')
        return null;
    }

    for (let ancestor = flatTreeParent(this); ancestor; ancestor = flatTreeParent(ancestor)) {
      if (!(ancestor instanceof Element))
        continue;
      const style = getComputedStyle(ancestor);
      if (style.display === 'contents') {
        // display:contents nodes aren't in the layout tree so they should be skipped.
        continue;
      }
      if (style.position !== 'static') {
        return ancestor;
      }
      if (ancestor.tagName === 'BODY')
        return ancestor;
    }
    return null;

    function flatTreeParent(element) {
      if (element.assignedSlot) {
        return element.assignedSlot;
      }
      if (element.parentNode instanceof ShadowRoot) {
        return element.parentNode.host;
      }
      return element.parentNode;
    }
  }
});

function getTemplate$E() {
    return html `<!--_html_template_start_-->    <style include="cr-shared-style">:host{display:flex}iron-icon{--iron-icon-width:var(--cr-icon-size);--iron-icon-height:var(--cr-icon-size);--iron-icon-fill-color:var(--cr-tooltip-icon-fill-color, var(--google-grey-700))}@media (prefers-color-scheme:dark){iron-icon{--iron-icon-fill-color:var(--cr-tooltip-icon-fill-color, var(--google-grey-500))}}</style>
    <iron-icon id="indicator" tabindex="0" aria-label$="[[iconAriaLabel]]" aria-describedby="tooltip" icon="[[iconClass]]" role="img"></iron-icon>
    <paper-tooltip id="tooltip" for="indicator" position="[[tooltipPosition]]" fit-to-visible-bounds part="tooltip">
      <slot name="tooltip-text">[[tooltipText]]</slot>
    </paper-tooltip>
<!--_html_template_end_-->`;
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrTooltipIconElement extends PolymerElement {
    static get is() {
        return 'cr-tooltip-icon';
    }
    static get template() {
        return getTemplate$E();
    }
    static get properties() {
        return {
            iconAriaLabel: String,
            iconClass: String,
            tooltipText: String,
            /** Position of tooltip popup related to the icon. */
            tooltipPosition: {
                type: String,
                value: 'top',
            },
        };
    }
    getFocusableElement() {
        return this.$.indicator;
    }
}
customElements.define(CrTooltipIconElement.is, CrTooltipIconElement);

const styleMod$2 = document.createElement('dom-module');
styleMod$2.appendChild(html `
  <template>
    <style>
.card{margin-bottom:44px}.credential-container{padding:12px var(--cr-form-field-bottom-spacing) var(--cr-section-padding)}.row-container{display:flex;margin-top:16px}.column-container{flex:50%;max-width:50%}.button-container{border-top:var(--cr-separator-line);display:flex;margin-top:12px;padding:var(--cr-form-field-bottom-spacing) var(--cr-section-padding)}a.site-link{max-width:324px}.cr-form-field-label{margin-bottom:8px}.card-title{color:var(--cr-secondary-text-color);margin:5px 0}.edit-button{margin-inline-end:var(--cr-button-edge-spacing)}:host-context([chrome-refresh-2023]) #domainLabel{color:var(--cr-input-label-color);font-size:11px;line-height:16px}
    </style>
  </template>
`.content);
styleMod$2.register('credential-details-card');

function getTemplate$D() {
    return html `<!--_html_template_start_-->    <style>:host{-webkit-tap-highlight-color:transparent;align-items:center;cursor:pointer;display:flex;outline:0;user-select:none;--cr-checkbox-border-size:2px;--cr-checkbox-size:16px;--cr-checkbox-ripple-size:40px;--cr-checkbox-ripple-offset:calc(var(--cr-checkbox-size)/2 -
            var(--cr-checkbox-ripple-size)/2 - var(--cr-checkbox-border-size));--cr-checkbox-checked-box-color:var(--cr-checked-color);--cr-checkbox-ripple-checked-color:var(--cr-checked-color);--cr-checkbox-checked-ripple-opacity:.2;--cr-checkbox-mark-color:white;--cr-checkbox-ripple-unchecked-color:var(--google-grey-900);--cr-checkbox-unchecked-box-color:var(--google-grey-700);--cr-checkbox-unchecked-ripple-opacity:.15}@media (prefers-color-scheme:dark){:host{--cr-checkbox-checked-ripple-opacity:.4;--cr-checkbox-mark-color:var(--google-grey-900);--cr-checkbox-ripple-unchecked-color:var(--google-grey-500);--cr-checkbox-unchecked-box-color:var(--google-grey-500);--cr-checkbox-unchecked-ripple-opacity:.4}}:host-context([chrome-refresh-2023]):host{--cr-checkbox-ripple-size:32px;--cr-checkbox-mark-color:var(--color-checkbox-check,
            var(--cr-fallback-color-on-primary));--cr-checkbox-checked-box-color:var(--color-checkbox-foreground-checked,
            var(--cr-fallback-color-primary));--cr-checkbox-unchecked-box-color:var(--color-checkbox-foreground-unchecked,
            var(--cr-fallback-color-outline));--cr-checkbox-ripple-checked-color:var(--cr-active-background-color);--cr-checkbox-ripple-unchecked-color:var(--cr-active-background-color);--cr-checkbox-ripple-offset:50%;--cr-checkbox-ripple-opacity:1}:host([disabled]){cursor:initial;opacity:var(--cr-disabled-opacity);pointer-events:none}:host-context([chrome-refresh-2023]):host([disabled]){opacity:1;--cr-checkbox-checked-box-color:var(
            --color-checkbox-container-disabled,
            var(--cr-fallback-color-disabled-background));--cr-checkbox-unchecked-box-color:var(
            --color-checkbox-outline-disabled,
            var(--cr-fallback-color-disabled-background));--cr-checkbox-mark-color:var(--color-checkbox-check-disabled,
            var(--cr-fallback-color-disabled-foreground))}#checkbox{background:0 0;border:var(--cr-checkbox-border-size) solid var(--cr-checkbox-unchecked-box-color);border-radius:2px;box-sizing:border-box;cursor:pointer;display:block;flex-shrink:0;height:var(--cr-checkbox-size);isolation:isolate;margin:0;outline:0;padding:0;position:relative;transform:none;width:var(--cr-checkbox-size)}:host-context([chrome-refresh-2023]):host([disabled][checked]) #checkbox{border-color:transparent}:host-context([chrome-refresh-2023]) #hover-layer{display:none}:host-context([chrome-refresh-2023]) #checkbox:hover #hover-layer{background-color:var(--cr-hover-background-color);border-radius:50%;display:block;height:32px;left:50%;overflow:hidden;pointer-events:none;position:absolute;top:50%;transform:translate(-50%,-50%);width:32px}@media (forced-colors:active){:host(:focus) #checkbox{outline:var(--cr-focus-outline-hcm)}}:host-context([chrome-refresh-2023]) #checkbox:focus-visible{outline:var(--cr-checkbox-focus-outline,2px solid var(--cr-focus-outline-color));outline-offset:2px}#checkmark{display:block;forced-color-adjust:auto;position:relative;transform:scale(0);z-index:1}#checkmark path{fill:var(--cr-checkbox-mark-color)}:host([checked]) #checkmark{transform:scale(1);transition:transform 140ms ease-out}:host([checked]) #checkbox{background:var(--cr-checkbox-checked-box-background-color,var(--cr-checkbox-checked-box-color));border-color:var(--cr-checkbox-checked-box-color)}paper-ripple{--paper-ripple-opacity:var(--cr-checkbox-ripple-opacity,
            var(--cr-checkbox-unchecked-ripple-opacity));color:var(--cr-checkbox-ripple-unchecked-color);height:var(--cr-checkbox-ripple-size);left:var(--cr-checkbox-ripple-offset);outline:var(--cr-checkbox-ripple-ring,none);pointer-events:none;top:var(--cr-checkbox-ripple-offset);transition:color linear 80ms;width:var(--cr-checkbox-ripple-size)}:host([checked]) paper-ripple{--paper-ripple-opacity:var(--cr-checkbox-ripple-opacity,
            var(--cr-checkbox-checked-ripple-opacity));color:var(--cr-checkbox-ripple-checked-color)}:host-context([dir=rtl]) paper-ripple{left:auto;right:var(--cr-checkbox-ripple-offset)}:host-context([chrome-refresh-2023]) paper-ripple{transform:translate(-50%,-50%)}:host-context([dir=rtl][chrome-refresh-2023]) paper-ripple{transform:translate(50%,-50%)}#label-container{color:var(--cr-checkbox-label-color,var(--cr-primary-text-color));padding-inline-start:var(--cr-checkbox-label-padding-start,20px);white-space:normal}:host(.label-first) #label-container{order:-1;padding-inline-end:var(--cr-checkbox-label-padding-end,20px);padding-inline-start:0}:host(.no-label) #label-container{display:none}#ariaDescription{height:0;overflow:hidden;width:0}</style>
    <div id="checkbox" tabindex$="[[tabIndex]]" role="checkbox" on-keydown="onKeyDown_" on-keyup="onKeyUp_" aria-disabled="false" aria-checked="false" aria-labelledby="label-container" aria-describedby="ariaDescription">
      
      <svg id="checkmark" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="m10.192 2.121-6.01 6.01-2.121-2.12L1 7.07l2.121 2.121.707.707.354.354 7.071-7.071-1.06-1.06Z">
      </path></svg>
      <div id="hover-layer"></div>
    </div>
    <div id="label-container" aria-hidden="true" aria-label$="[[ariaLabelOverride]]" part="label-container">
      <slot></slot>
    </div>
    <div id="ariaDescription" aria-hidden="true">[[ariaDescription]]</div>
<!--_html_template_end_-->`;
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'cr-checkbox' is a component similar to native checkbox. It
 * fires a 'change' event *only* when its state changes as a result of a user
 * interaction. By default it assumes there will be child(ren) passed in to be
 * used as labels. If no label will be provided, a .no-label class should be
 * added to hide the spacing between the checkbox and the label container.
 *
 * If a label is provided, it will be shown by default after the checkbox. A
 * .label-first CSS class can be added to show the label before the checkbox.
 *
 * List of customizable styles:
 *  --cr-checkbox-border-size
 *  --cr-checkbox-checked-box-background-color
 *  --cr-checkbox-checked-box-color
 *  --cr-checkbox-label-color
 *  --cr-checkbox-label-padding-start
 *  --cr-checkbox-mark-color
 *  --cr-checkbox-ripple-checked-color
 *  --cr-checkbox-ripple-size
 *  --cr-checkbox-ripple-unchecked-color
 *  --cr-checkbox-size
 *  --cr-checkbox-unchecked-box-color
 */
const CrCheckboxElementBase = PaperRippleMixin(PolymerElement);
class CrCheckboxElement extends CrCheckboxElementBase {
    static get is() {
        return 'cr-checkbox';
    }
    static get template() {
        return getTemplate$D();
    }
    static get properties() {
        return {
            checked: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
                observer: 'checkedChanged_',
                notify: true,
            },
            disabled: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
                observer: 'disabledChanged_',
            },
            ariaDescription: String,
            ariaLabelOverride: String,
            tabIndex: {
                type: Number,
                value: 0,
                observer: 'onTabIndexChanged_',
            },
        };
    }
    ready() {
        super.ready();
        // 
        // TODO(b/309689294) Remove this once CrOS UIs migrate to Jellybean
        // components and no longer use cr-elements.
        // Force stamp the ripple element to enable CrOS focus styles. Ripple
        // visibility is controlled by the event listeners below.
        if (document.documentElement.hasAttribute('chrome-refresh-2023')) {
            this.getRipple();
        }
        // 
        this.removeAttribute('unresolved');
        this.addEventListener('click', this.onClick_.bind(this));
        this.addEventListener('pointerup', this.hideRipple_.bind(this));
        if (document.documentElement.hasAttribute('chrome-refresh-2023')) {
            this.addEventListener('pointerdown', this.showRipple_.bind(this));
            this.addEventListener('pointerleave', this.hideRipple_.bind(this));
        }
        else {
            this.addEventListener('blur', this.hideRipple_.bind(this));
            this.addEventListener('focus', this.showRipple_.bind(this));
        }
    }
    focus() {
        this.$.checkbox.focus();
    }
    getFocusableElement() {
        return this.$.checkbox;
    }
    checkedChanged_() {
        this.$.checkbox.setAttribute('aria-checked', this.checked ? 'true' : 'false');
    }
    disabledChanged_(_current, previous) {
        if (previous === undefined && !this.disabled) {
            return;
        }
        this.tabIndex = this.disabled ? -1 : 0;
        this.$.checkbox.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
    }
    showRipple_() {
        if (this.noink) {
            return;
        }
        this.getRipple().showAndHoldDown();
    }
    hideRipple_() {
        this.getRipple().clear();
    }
    onClick_(e) {
        if (this.disabled || e.target.tagName === 'A') {
            return;
        }
        // Prevent |click| event from bubbling. It can cause parents of this
        // elements to erroneously re-toggle this control.
        e.stopPropagation();
        e.preventDefault();
        this.checked = !this.checked;
        this.dispatchEvent(new CustomEvent('change', { bubbles: true, composed: true, detail: this.checked }));
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
    }
    onKeyUp_(e) {
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            e.stopPropagation();
        }
        if (e.key === ' ') {
            this.click();
        }
    }
    onTabIndexChanged_() {
        // :host shouldn't have a tabindex because it's set on #checkbox.
        this.removeAttribute('tabindex');
    }
    // Overridden from PaperRippleMixin
    /* eslint-disable-next-line @typescript-eslint/naming-convention */
    _createRipple() {
        this._rippleContainer = this.$.checkbox;
        const ripple = super._createRipple();
        ripple.id = 'ink';
        ripple.setAttribute('recenters', '');
        ripple.classList.add('circle', 'toggle-ink');
        return ripple;
    }
}
customElements.define(CrCheckboxElement.is, CrCheckboxElement);

function getTemplate$C() {
    return html `<!--_html_template_start_--><style include="cr-shared-style shared-style">cr-checkbox{display:flex;padding:10px 8px}#avatar{border-radius:50%;height:20px;margin-inline-end:16px;width:20px}.cr-row{padding:0}</style>
<cr-dialog id="dialog" close-text="$i18n{close}">
  <div slot="title" class="dialog-title">
    $i18n{deletePasswordDialogAccount}
  </div>
  <div slot="body">
    <div inner-h-t-m-l="[[getDialogBodyMessage_()]]"></div>
    <cr-checkbox checked="{{removeFromAccountChecked_}}" id="removeFromAccountCheckbox">
      <div class="cr-row first">
        <img id="avatar" src="[[avatarImage]]">
        <div>
          $i18n{deletePasswordDialogAccount}
        </div>
        <div class="cr-secondary-text">
          &nbsp([[accountEmail]])
        </div>
      </div>
    </cr-checkbox>
    <cr-checkbox checked="{{removeFromDeviceChecked_}}" id="removeFromDeviceCheckbox">
      <div>
        $i18n{deletePasswordDialogDevice}
      </div>
    </cr-checkbox>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" id="cancelButton" on-click="onCancelButtonClick_" autofocus>
      $i18n{cancel}
    </cr-button>
    <cr-button class="action-button" id="removeButton" disabled="[[shouldDisableRemoveButton_(removeFromAccountChecked_,
            removeFromDeviceChecked_)]]" on-click="onRemoveButtonClick_">
      $i18n{deletePassword}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview MultiStoreDeletePasswordDialog is a dialog for choosing which
 * copies of a duplicated password to remove. A duplicated password is one that
 * is stored both on the device and in the account.
 */
const MultiStoreDeletePasswordDialogElementBase = UserUtilMixin(I18nMixin(PolymerElement));
class MultiStoreDeletePasswordDialogElement extends MultiStoreDeletePasswordDialogElementBase {
    static get is() {
        return 'multi-store-delete-password-dialog';
    }
    static get template() {
        return getTemplate$C();
    }
    static get properties() {
        return {
            /**
             * The password whose copies are to be removed.
             */
            duplicatedPassword: Object,
            removeFromAccountChecked_: {
                type: Boolean,
                // Both checkboxes are selected by default (see
                // |removeFromDeviceChecked_| as well), since removing from both
                // locations is the most common case.
                value: true,
            },
            removeFromDeviceChecked_: {
                type: Boolean,
                value: true,
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        // At creation time, the password should exist in both locations.
        assert(this.duplicatedPassword.storedIn ===
            chrome.passwordsPrivate.PasswordStoreSet.DEVICE_AND_ACCOUNT);
        this.$.dialog.showModal();
    }
    onRemoveButtonClick_() {
        let fromStores = chrome.passwordsPrivate.PasswordStoreSet.DEVICE;
        if (this.removeFromAccountChecked_ && this.removeFromDeviceChecked_) {
            fromStores = chrome.passwordsPrivate.PasswordStoreSet.DEVICE_AND_ACCOUNT;
        }
        else if (this.removeFromAccountChecked_) {
            fromStores = chrome.passwordsPrivate.PasswordStoreSet.ACCOUNT;
        }
        else {
            assert(this.removeFromDeviceChecked_);
        }
        PasswordManagerImpl.getInstance().removeCredential(this.duplicatedPassword.id, fromStores);
        this.dispatchEvent(new CustomEvent('password-removed', {
            bubbles: true,
            composed: true,
            detail: {
                removedFromStores: fromStores,
            },
        }));
        this.$.dialog.close();
    }
    onCancelButtonClick_() {
        this.$.dialog.close();
    }
    shouldDisableRemoveButton_() {
        return !this.removeFromAccountChecked_ && !this.removeFromDeviceChecked_;
    }
    getDialogBodyMessage_() {
        assert(this.duplicatedPassword.affiliatedDomains);
        return this.i18nAdvanced('deletePasswordDialogBody', {
            substitutions: [this.duplicatedPassword.affiliatedDomains.map(domain => domain.name)
                    .join(', ')],
            tags: ['b'],
        });
    }
}
customElements.define(MultiStoreDeletePasswordDialogElement.is, MultiStoreDeletePasswordDialogElement);

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Utility functions and enums for password sharing metrics.
 */
/**
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 */
var PasswordSharingActions;
(function (PasswordSharingActions) {
    // LINT.IfChange
    PasswordSharingActions[PasswordSharingActions["PASSWORD_DETAILS_SHARE_BUTTON_CLICKED"] = 0] = "PASSWORD_DETAILS_SHARE_BUTTON_CLICKED";
    PasswordSharingActions[PasswordSharingActions["NOT_FAMILY_MEMBER_GOT_IT_CLICKED"] = 1] = "NOT_FAMILY_MEMBER_GOT_IT_CLICKED";
    PasswordSharingActions[PasswordSharingActions["NOT_FAMILY_MEMBER_CREATE_FAMILY_CLICKED"] = 2] = "NOT_FAMILY_MEMBER_CREATE_FAMILY_CLICKED";
    PasswordSharingActions[PasswordSharingActions["NO_OTHER_FAMILY_MEMBERS_GOT_IT_CLICKED"] = 3] = "NO_OTHER_FAMILY_MEMBERS_GOT_IT_CLICKED";
    PasswordSharingActions[PasswordSharingActions["NO_OTHER_FAMILY_MEMBERS_INVITE_LINK_CLICKED"] = 4] = "NO_OTHER_FAMILY_MEMBERS_INVITE_LINK_CLICKED";
    PasswordSharingActions[PasswordSharingActions["ERROR_DIALOG_TRY_AGAIN_CLICKED"] = 5] = "ERROR_DIALOG_TRY_AGAIN_CLICKED";
    PasswordSharingActions[PasswordSharingActions["ERROR_DIALOG_CANCELED"] = 6] = "ERROR_DIALOG_CANCELED";
    PasswordSharingActions[PasswordSharingActions["FAMILY_PICKER_SHARE_WITH_ONE_MEMBER"] = 7] = "FAMILY_PICKER_SHARE_WITH_ONE_MEMBER";
    PasswordSharingActions[PasswordSharingActions["FAMILY_PICKER_SHARE_WITH_MULTIPLE_MEMBERS"] = 8] = "FAMILY_PICKER_SHARE_WITH_MULTIPLE_MEMBERS";
    PasswordSharingActions[PasswordSharingActions["FAMILY_PICKER_CANCELED"] = 9] = "FAMILY_PICKER_CANCELED";
    PasswordSharingActions[PasswordSharingActions["FAMILY_PICKER_VIEW_FAMILY_CLICKED"] = 10] = "FAMILY_PICKER_VIEW_FAMILY_CLICKED";
    PasswordSharingActions[PasswordSharingActions["CONFIRMATION_DIALOG_SHARING_CANCELED"] = 11] = "CONFIRMATION_DIALOG_SHARING_CANCELED";
    /*  Deprecated in M122 (b/317798360).
    CONFIRMATION_DIALOG_LEARN_MORE_CLICKED = 12,
    */
    PasswordSharingActions[PasswordSharingActions["CONFIRMATION_DIALOG_CHANGE_PASSWORD_CLICKED"] = 13] = "CONFIRMATION_DIALOG_CHANGE_PASSWORD_CLICKED";
    PasswordSharingActions[PasswordSharingActions["DIALOG_HEADER_HELP_ICON_BUTTON_CLICKED"] = 14] = "DIALOG_HEADER_HELP_ICON_BUTTON_CLICKED";
    // Must be last.
    PasswordSharingActions[PasswordSharingActions["COUNT"] = 15] = "COUNT";
    // LINT.ThenChange(//tools/metrics/histograms/metadata/password/enums.xml)
})(PasswordSharingActions || (PasswordSharingActions = {}));
function recordPasswordSharingInteraction(interaction) {
    chrome.metricsPrivate.recordEnumerationValue('PasswordManager.PasswordSharingDesktop.UserAction', interaction, PasswordSharingActions.COUNT);
}

function getTemplate$B() {
    return html `<!--_html_template_start_--><style include="shared-style">:host{align-items:center;display:grid;grid-template-columns:1fr auto;line-height:normal}cr-icon-button{--cr-icon-button-icon-size:16px;--cr-icon-button-size:20px;--cr-icon-button-margin-start:0;--cr-icon-button-margin-end:0}</style>

<span class="text-elide">
  <slot></slot>
</span>
<cr-icon-button iron-icon="cr:help-outline" id="helpButton" title="$i18n{help}" on-click="onHelpClick_" dir="ltr">
</cr-icon-button>
<!--_html_template_end_-->`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SharePasswordDialogHeaderElement extends PolymerElement {
    static get is() {
        return 'share-password-dialog-header';
    }
    static get template() {
        return getTemplate$B();
    }
    static get properties() {
        return {
            isError: {
                type: Boolean,
                value: false,
            },
        };
    }
    onHelpClick_() {
        recordPasswordSharingInteraction(PasswordSharingActions.DIALOG_HEADER_HELP_ICON_BUTTON_CLICKED);
        if (this.isError) {
            OpenWindowProxyImpl.getInstance().openUrl(loadTimeData.getString('passwordSharingTroubleshootURL'));
            return;
        }
        OpenWindowProxyImpl.getInstance().openUrl(loadTimeData.getString('passwordSharingLearnMoreURL'));
    }
}
customElements.define(SharePasswordDialogHeaderElement.is, SharePasswordDialogHeaderElement);

function getTemplate$A() {
    return html `<!--_html_template_start_--><style include="shared-style">:host{margin-top:8px;padding:8px 24px 8px 8px;border:.5px solid var(--cr-separator-color);border-radius:25px;display:grid;grid-template-columns:auto min-content;column-gap:12px;cursor:pointer}:host([disabled]){cursor:initial}:host([disabled])>.content{opacity:var(--cr-disabled-opacity)}:host(:not([disabled]):not([selected]):is(:hover,:focus)){background:var(--google-grey-100)}:host([selected]){border-color:var(--google-blue-300);background:var(--google-blue-50)}#checkbox{opacity:0;margin:auto;--cr-checkbox-ripple-size:36px}:host(:not([disabled]):is(:hover,:focus)) #checkbox,:host([selected]) #checkbox{opacity:100}:host(:not([disabled]):is(:hover,:focus)) #avatar,:host([selected]) #avatar{opacity:0}.content{display:grid;grid-template-columns:32px auto;column-gap:12px}#avatar{position:absolute;border-radius:50%;height:32px;margin-inline-end:8px;width:32px}.user-data{margin-block:auto}#name{font-size:100%;color:var(--cr-primary-text-color);line-height:normal}#email{font-size:85%;color:var(--cr-secondary-text-color);line-height:normal}.disabled-info{margin-inline-start:auto}#notAvailable{font-size:85%;margin-top:.15rem;white-space:nowrap}cr-tooltip-icon{--cr-icon-size:16px;margin-inline-end:4px}.avatar-checkbox{position:relative;width:32px;height:32px;margin-block:auto}cr-checkbox::part(label-container){clip:rect(0,0,0,0);display:block;position:fixed}@media (prefers-color-scheme:dark){:host(:not([disabled]):not([selected]):is(:hover,:focus)){background:var(--google-grey-900)}:host([selected]){background:#004a77;border-color:var(--google-blue-600)}}</style>

<div class="content">
  <div class="flex-centered avatar-checkbox">
    <cr-checkbox id="checkbox" disabled$="[[disabled]]" checked="{{selected}}">
      [[recipient.displayName]], [[recipient.email]]
    </cr-checkbox>
    <img is="cr-auto-img" id="avatar" auto-src="[[recipient.profileImageUrl]]" draggable="false" alt="">
  </div>
  <div class="user-data text-elide">
    <div id="name" class="text-elide">[[recipient.displayName]]</div>
    <div id="email" class="text-elide">[[recipient.email]]</div>
  </div>
</div>
<template is="dom-if" if="[[disabled]]" restamp>
  <div id="disabled-info" class="flex-centered">
    <cr-tooltip-icon tooltip-text="$i18n{sharePasswordMemeberUnavailable}" icon-class="cr:info-outline" icon-aria-label="[[recipient.displayName]], $i18n{sharePasswordMemeberUnavailable}">
    </cr-tooltip-icon>
    <span id="notAvailable">$i18n{sharePasswordNotAvailable}</span>
  </div>
</template>
<!--_html_template_end_-->`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SharePasswordRecipientElement extends PolymerElement {
    static get is() {
        return 'share-password-recipient';
    }
    static get template() {
        return getTemplate$A();
    }
    static get properties() {
        return {
            disabled: {
                type: Boolean,
                value: false,
            },
            recipient: Object,
            selected: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
                notify: true,
            },
        };
    }
    ready() {
        super.ready();
        this.addEventListener('click', this.onClick_.bind(this));
        this.addEventListener('mouseover', this.onMouseOver_.bind(this));
        this.addEventListener('mouseout', this.onMouseOut_.bind(this));
    }
    onClick_(e) {
        if (this.disabled) {
            return;
        }
        e.preventDefault();
        this.$.checkbox.click();
    }
    onMouseOver_(e) {
        if (this.disabled) {
            return;
        }
        e.preventDefault();
        this.$.checkbox.getRipple().showAndHoldDown();
    }
    onMouseOut_(e) {
        if (this.disabled) {
            return;
        }
        e.preventDefault();
        this.$.checkbox.getRipple().clear();
    }
}
customElements.define(SharePasswordRecipientElement.is, SharePasswordRecipientElement);

function getTemplate$z() {
    return html `<!--_html_template_start_--><style include="shared-style">a[href]{color:var(--cr-link-color)}#avatar{border-radius:50%;height:32px;margin-inline-end:8px;width:32px}#userAccount{color:var(--cr-secondary-text-color)}#description{padding-bottom:8px}div[slot=footer]{background:var(--google-grey-100);border-top:none;padding:8px 16px}@media (prefers-color-scheme:dark){div[slot=footer]{background:var(--google-grey-900)}}</style>

<cr-dialog id="dialog" close-text="$i18n{close}" show-on-attach>
  <div slot="title">
    <share-password-dialog-header id="header">
      [[dialogTitle]]
    </share-password-dialog-header>
  </div>
  <div slot="body">
    <div id="description" inner-h-t-m-l="[[i18nAdvanced('sharePasswordFamilyPickerDescription')]]">
    </div>
    <template is="dom-repeat" items="[[eligibleRecipients_]]">
      <share-password-recipient recipient="[[item]]" selected="[[shouldPreselectFirstEntry_(index)]]" on-change="recipientSelected_">
      </share-password-recipient>
    </template>
    <template is="dom-repeat" items="[[ineligibleRecipients_]]">
      <share-password-recipient recipient="[[item]]" disabled="disabled">
      </share-password-recipient>
    </template>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" on-click="onClickCancel_" id="cancel">
      $i18n{cancel}
    </cr-button>
    <cr-button class="action-button" id="action" on-click="onClickShare_" disabled$="[[!selectedRecipients.length]]">
      $i18n{share}
    </cr-button>
  </div>
  <div slot="footer" class="flex-centered">
    <img id="avatar" src="[[avatarImage]]">
    <div id="footerDescription">
      <a href="$i18n{familyGroupViewURL}" target="_blank" id="viewFamily" on-click="onViewFamilyClick_">
        $i18n{sharePasswordViewFamily}</a>
      <span> • </span><span>[[accountEmail]]</span>
    </div>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SharePasswordFamilyPickerDialogElement extends UserUtilMixin(I18nMixin(PolymerElement)) {
    static get is() {
        return 'share-password-family-picker-dialog';
    }
    static get template() {
        return getTemplate$z();
    }
    static get properties() {
        return {
            dialogTitle: String,
            members: {
                type: Array,
                value: [],
            },
            selectedRecipients: {
                type: Array,
                value: [],
                reflectToAttribute: true,
                notify: true,
            },
            eligibleRecipients_: {
                type: Array,
                computed: 'computeEligible_(members)',
            },
            ineligibleRecipients_: {
                type: Array,
                computed: 'computeIneligible_(members)',
            },
        };
    }
    ready() {
        super.ready();
        // Pre-select the member if they are eligible for sharing and there are no
        // other members in the group.
        if (this.members.length === 1 && this.computeEligible_().length === 1) {
            this.selectedRecipients = this.members;
        }
    }
    computeEligible_() {
        const eligibleMembers = this.members.filter(member => member.isEligible);
        eligibleMembers.sort((a, b) => (a.displayName > b.displayName ? 1 : -1));
        return eligibleMembers;
    }
    computeIneligible_() {
        const inEligibleMembers = this.members.filter(member => !member.isEligible);
        inEligibleMembers.sort((a, b) => (a.displayName > b.displayName ? 1 : -1));
        return inEligibleMembers;
    }
    recipientSelected_() {
        this.selectedRecipients =
            Array
                .from(this.shadowRoot.querySelectorAll('share-password-recipient'))
                .filter(item => item.selected)
                .map(item => item.recipient);
    }
    // Should only be called for eligible recipients.
    shouldPreselectFirstEntry_(index) {
        // Only pre-select the first entry when there is only single group member.
        return index === 0 && this.members.length === 1;
    }
    onViewFamilyClick_() {
        recordPasswordSharingInteraction(PasswordSharingActions.FAMILY_PICKER_VIEW_FAMILY_CLICKED);
    }
    onClickCancel_() {
        recordPasswordSharingInteraction(PasswordSharingActions.FAMILY_PICKER_CANCELED);
        this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
    }
    onClickShare_() {
        if (this.selectedRecipients.length === 1) {
            recordPasswordSharingInteraction(PasswordSharingActions.FAMILY_PICKER_SHARE_WITH_ONE_MEMBER);
        }
        else {
            recordPasswordSharingInteraction(PasswordSharingActions.FAMILY_PICKER_SHARE_WITH_MULTIPLE_MEMBERS);
        }
        this.dispatchEvent(new CustomEvent('start-share', { bubbles: true, composed: true }));
    }
}
customElements.define(SharePasswordFamilyPickerDialogElement.is, SharePasswordFamilyPickerDialogElement);

function getTemplate$y() {
    return html `<!--_html_template_start_--><style include="shared-style">paper-spinner-lite{display:flex;margin-inline:auto;margin-block:40px 56px}</style>

<cr-dialog close-text="$i18n{close}" show-on-attach>
  <share-password-dialog-header slot="title">
    [[dialogTitle]]
  </share-password-dialog-header>
  <paper-spinner-lite slot="body" active></paper-spinner-lite>
</cr-dialog>
<!--_html_template_end_-->`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SharePasswordLoadingDialogElement extends PolymerElement {
    static get is() {
        return 'share-password-loading-dialog';
    }
    static get template() {
        return getTemplate$y();
    }
    static get properties() {
        return { dialogTitle: { type: String } };
    }
}
customElements.define(SharePasswordLoadingDialogElement.is, SharePasswordLoadingDialogElement);

function getTemplate$x() {
    return html `<!--_html_template_start_--><cr-dialog id="dialog" close-text="$i18n{close}" show-on-attach>
  <div slot="title">
    <share-password-dialog-header id="header" is-error>
      $i18n{sharePasswordErrorTitle}
    </share-password-dialog-header>
  </div>
  <div slot="body" class="flex-centered" id="description">
      $i18n{sharePasswordErrorDescription}
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" on-click="onClickCancel_" id="cancel">
      $i18n{cancel}
    </cr-button>
    <cr-button class="action-button" on-click="onClickTryAgain_" id="tryAgain">
      $i18n{sharePasswordTryAgain}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SharePasswordErrorDialogElement extends I18nMixin(PolymerElement) {
    static get is() {
        return 'share-password-error-dialog';
    }
    static get template() {
        return getTemplate$x();
    }
    onClickCancel_() {
        recordPasswordSharingInteraction(PasswordSharingActions.ERROR_DIALOG_CANCELED);
        this.$.dialog.cancel();
    }
    onClickTryAgain_() {
        recordPasswordSharingInteraction(PasswordSharingActions.ERROR_DIALOG_TRY_AGAIN_CLICKED);
        this.dispatchEvent(new CustomEvent('restart', { bubbles: true, composed: true }));
    }
}
customElements.define(SharePasswordErrorDialogElement.is, SharePasswordErrorDialogElement);

function getTemplate$w() {
    return html `<!--_html_template_start_--><style>#description{margin-top:16px}a[href]{color:var(--cr-link-color)}</style>

<cr-dialog id="dialog" close-text="$i18n{close}" show-on-attach>
  <div slot="title">
    <share-password-dialog-header id="header">
      [[dialogTitle]]
    </share-password-dialog-header>
  </div>
  <div slot="body">
    <picture>
      <source srcset="./images/password_sharing_family_banner_dark.svg" media="(prefers-color-scheme: dark)">
      <img src="./images/password_sharing_family_banner.svg" role="presentation">
    </picture>
    <div id="description" on-click="onDescriptionClick_" inner-h-t-m-l="[[i18nAdvanced('sharePasswordNoOtherFamilyMembers')]]">
    </div>
  </div>
  <div slot="button-container">
    <cr-button class="action-button" on-click="onClickActionButton_" id="action">
      $i18n{sharePasswordGotIt}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SharePasswordNoOtherFamilyMembersDialogElement extends I18nMixin(PolymerElement) {
    static get is() {
        return 'share-password-no-other-family-members-dialog';
    }
    static get template() {
        return getTemplate$w();
    }
    static get properties() {
        return {
            dialogTitle: String,
        };
    }
    onDescriptionClick_(e) {
        const element = e.target;
        if (element.tagName === 'A') {
            recordPasswordSharingInteraction(PasswordSharingActions.NO_OTHER_FAMILY_MEMBERS_INVITE_LINK_CLICKED);
        }
    }
    onClickActionButton_() {
        recordPasswordSharingInteraction(PasswordSharingActions.NO_OTHER_FAMILY_MEMBERS_GOT_IT_CLICKED);
        this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
    }
}
customElements.define(SharePasswordNoOtherFamilyMembersDialogElement.is, SharePasswordNoOtherFamilyMembersDialogElement);

function getTemplate$v() {
    return html `<!--_html_template_start_--><style>#description{margin-top:16px}a[href]{color:var(--cr-link-color)}</style>

<cr-dialog id="dialog" close-text="$i18n{close}" show-on-attach>
  <div slot="title">
    <share-password-dialog-header id="header">
      [[dialogTitle]]
    </share-password-dialog-header>
  </div>
  <div slot="body">
    <picture>
      <source srcset="./images/password_sharing_family_banner_dark.svg" media="(prefers-color-scheme: dark)">
      <img src="./images/password_sharing_family_banner.svg" role="presentation">
    </picture>
    <div id="description" on-click="onDescriptionClick_" inner-h-t-m-l="[[i18nAdvanced('sharePasswordNotFamilyMember')]]">
    </div>
  </div>
  <div slot="button-container">
    <cr-button class="action-button" on-click="onClickActionButton_" id="action">
      $i18n{sharePasswordGotIt}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SharePasswordNotFamilyMemberDialogElement extends I18nMixin(PolymerElement) {
    static get is() {
        return 'share-password-not-family-member-dialog';
    }
    static get template() {
        return getTemplate$v();
    }
    static get properties() {
        return {
            dialogTitle: String,
        };
    }
    onDescriptionClick_(e) {
        const element = e.target;
        if (element.tagName === 'A') {
            recordPasswordSharingInteraction(PasswordSharingActions.NOT_FAMILY_MEMBER_CREATE_FAMILY_CLICKED);
        }
    }
    onClickActionButton_() {
        recordPasswordSharingInteraction(PasswordSharingActions.NOT_FAMILY_MEMBER_GOT_IT_CLICKED);
        this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
    }
}
customElements.define(SharePasswordNotFamilyMemberDialogElement.is, SharePasswordNotFamilyMemberDialogElement);

function getTemplate$u() {
    return html `<!--_html_template_start_--><style include="cr-shared-style">:host{--divider-thickness_:2px;--group-size_:60px;border-radius:50%;overflow:hidden;height:var(--group-size_);width:var(--group-size_);display:flex;gap:var(--divider-thickness_);background-color:#fff}.inner-container{display:flex;flex-direction:column;gap:var(--divider-thickness_);flex:1}#more,img{overflow:hidden;object-fit:cover;flex:1;width:100%;background-color:var(--google-grey-800);color:#fff;display:flex}#more>span{cursor:default;user-select:none;margin-inline-start:5px;margin-block-start:4px}@media (prefers-color-scheme:dark){:host{background-color:var(--google-grey-900)}}</style>

<div class="inner-container" hidden="[[isMembersCountLessThan_(2, members)]]">
  
  <img is="cr-auto-img" draggable="false" alt="" id="secondImg" auto-src="[[getProfileImageUrl_(1, members)]]">
  
  <img is="cr-auto-img" draggable="false" alt="" id="fourthImg" auto-src="[[getProfileImageUrl_(3, members)]]" hidden="[[isMembersCountLessThan_(4, members)]]">
</div>
<div class="inner-container">
  
  <img is="cr-auto-img" draggable="false" alt="" id="thirdImg" auto-src="[[getProfileImageUrl_(2, members)]]" hidden="[[isMembersCountLessThan_(3, members)]]">
  
  <img is="cr-auto-img" draggable="false" alt="" id="firstImg" auto-src="[[getProfileImageUrl_(0, members)]]" hidden="[[!isMembersCountLessThan_(5, members)]]">
  
  <div id="more" hidden="[[isMembersCountLessThan_(5, members)]]">
    <span draggable="false">+[[getMoreCount_(members)]]</span>
  </div>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SharePasswordGroupAvatarElement extends PolymerElement {
    static get is() {
        return 'share-password-group-avatar';
    }
    static get template() {
        return getTemplate$u();
    }
    static get properties() {
        return {
            members: Array,
        };
    }
    isMembersCountLessThan_(count) {
        return this.members.length < count;
    }
    getProfileImageUrl_(index) {
        if (index < this.members.length) {
            return this.members[index].profileImageUrl;
        }
        return '';
    }
    getMoreCount_() {
        return this.members.length - 3;
    }
}
customElements.define(SharePasswordGroupAvatarElement.is, SharePasswordGroupAvatarElement);

function getTemplate$t() {
    return html `<!--_html_template_start_--><style include="cr-hidden-style">a[href]{color:var(--cr-link-color)}cr-dialog{--cr-dialog-width:320px;--cr-dialog-body-padding-horizontal:16px}.animation-container{height:95px;position:relative;--avatar-radius:30px;--avatar-size_:calc(var(--avatar-radius) * 2)}#favicon,#lock,#progress,#recipientAvatar,#senderAvatar{position:absolute}#recipientAvatar,#senderAvatar{top:50%;right:50%;transform:translate(50%,-50%);transition:right .5s cubic-bezier(.7,0,.45,1.45)}#senderAvatar{border-radius:50%;height:var(--avatar-size_);width:var(--avatar-size_);z-index:1}#recipientAvatar{z-index:2}#lock{z-index:3;background-color:var(--cr-dialog-background-color,#fff);top:50%;right:50%;width:24px;height:24px;opacity:0;transform:translate(50%,-50%) scale(.5);transition:opacity .15s ease-in .5s,transform .15s ease-in .5s}#favicon{--site-favicon-height:22px;--site-favicon-width:22px;background:#fff;z-index:3;border:4px solid #fff;border-radius:7px;top:calc(50% + var(--avatar-radius) - 10px);right:50%;opacity:0;transform:translate(50%,0) scale(0);transition:opacity .15s ease-in .5s,transform .15s ease-in .5s}#progress{z-index:0;display:flex;overflow:hidden;top:50%;left:calc(50% - 47px);width:0;transition:all 4.1s linear .5s,opacity .15s ease-in .5s}.loading #senderAvatar{right:calc(50% + 78px)}.loading #recipientAvatar{right:calc(50% - 78px)}.loading #progress{opacity:1;width:95px}.loading #lock{opacity:1;transform:translate(50%,-50%) scale(1)}[success] #senderAvatar{right:calc(50% + var(--avatar-radius) - 4px);z-index:2}[success] #recipientAvatar{z-index:1;right:calc(50% - var(--avatar-radius) + 4px)}[success] #lock,[success] #progress{opacity:0;transition-delay:0s}[success] #favicon{opacity:1;transform:translate(50%,0) scale(1)}[canceled] #progress{opacity:0;transition:none}[canceled] #senderAvatar{z-index:2}[canceled] #recipientAvatar{z-index:1}[canceled] #lock,[canceled] #recipientAvatar,[canceled] #senderAvatar{transition-property:transform,opacity,right;transition-timing-function:cubic-bezier(.7,-.45,.45,1);transition-duration:.5s;transition-delay:0s}#description{margin-top:16px;overflow:hidden;text-overflow:ellipsis}div[slot=footer]{background:var(--google-grey-100);border-top:none;padding:8px 16px}#footerDescription{color:var(--cr-secondary-text-color);overflow:hidden;text-overflow:ellipsis}@media (prefers-color-scheme:dark){#lock{background-color:var(--cr-dialog-background-color,var(--google-grey-900));background-image:linear-gradient(rgba(255,255,255,.04),rgba(255,255,255,.04))}div[slot=footer]{background:var(--google-grey-900)}#favicon{border-color:var(--google-grey-900);background:var(--google-grey-900)}}</style>

<cr-dialog id="dialog" close-text="$i18n{close}" show-on-attach no-cancel>
  <div slot="title">
    <share-password-dialog-header id="header" aria-live="polite">
      [[getDialogTitle_(dialogStage_)]]
    </share-password-dialog-header>
  </div>
  <div slot="body">
    <div class="animation-container" id="animation" canceled$="[[isStage_(dialogStageEnum_.CANCELED, dialogStage_)]]" success$="[[isStage_(dialogStageEnum_.SUCCESS, dialogStage_)]]">
      <img id="senderAvatar" src="[[avatarImage]]" draggable="false" aria-hidden="true">
      <share-password-group-avatar members="[[recipients]]" id="recipientAvatar">
      </share-password-group-avatar>
      <div id="lock">
        <img src="../images/password_sharing_secure_lock.svg" aria-hidden="true">
      </div>
      <div id="progress">
        <img src="../images/password_sharing_progress_bar.svg" aria-hidden="true">
      </div>
      <site-favicon id="favicon" url="[[iconUrl]]" domain="[[passwordName]]" aria-hidden="true">
      </site-favicon>
    </div>
    <div id="description" hidden$="[[!isStage_(dialogStageEnum_.SUCCESS, dialogStage_)]]" inner-h-t-m-l="[[getSuccessDescription_(recipients)]]">
    </div>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" on-click="onClickCancel_" id="cancel" hidden$="[[!isStage_(dialogStageEnum_.LOADING, dialogStage_)]]">
      $i18n{cancel}
    </cr-button>
    <cr-button class="action-button" on-click="onClickDone_" id="done" hidden$="[[isStage_(dialogStageEnum_.LOADING, dialogStage_)]]">
      $i18n{done}
    </cr-button>
  </div>
  <div slot="footer" id="footerDescription" on-click="onFooterClick_" hidden$="[[!isStage_(dialogStageEnum_.SUCCESS, dialogStage_)]]" inner-h-t-m-l="[[getFooterDescription_(password)]]">
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Five seconds in milliseconds.
const FIVE_SECONDS = 5000;
var ConfirmationDialogStage;
(function (ConfirmationDialogStage) {
    ConfirmationDialogStage[ConfirmationDialogStage["LOADING"] = 0] = "LOADING";
    ConfirmationDialogStage[ConfirmationDialogStage["CANCELED"] = 1] = "CANCELED";
    ConfirmationDialogStage[ConfirmationDialogStage["SUCCESS"] = 2] = "SUCCESS";
})(ConfirmationDialogStage || (ConfirmationDialogStage = {}));
const SharePasswordConfirmationDialogElementBase = UserUtilMixin(I18nMixin(PolymerElement));
class SharePasswordConfirmationDialogElement extends SharePasswordConfirmationDialogElementBase {
    constructor() {
        super(...arguments);
        this.dialogStage_ = ConfirmationDialogStage.LOADING;
        this.passwordManager_ = PasswordManagerImpl.getInstance();
    }
    static get is() {
        return 'share-password-confirmation-dialog';
    }
    static get template() {
        return getTemplate$t();
    }
    static get properties() {
        return {
            dialogStage_: {
                type: Number,
                observer: 'stateChange_',
            },
            password: Object,
            passwordName: String,
            iconUrl: String,
            recipients: {
                type: Array,
                value: [],
            },
            dialogStageEnum_: {
                type: Object,
                value: ConfirmationDialogStage,
                readOnly: true,
            },
        };
    }
    ready() {
        super.ready();
        // Start the animation after all elements have been loaded.
        setTimeout(() => {
            this.$.animation.classList.add('loading');
        }, 0);
        // The user has 5 seconds to cancel the share action while loading/sharing
        // animation is in progress.
        setTimeout(() => {
            if (this.isStage_(ConfirmationDialogStage.CANCELED)) {
                return;
            }
            this.passwordManager_.sharePassword(this.password.id, this.recipients);
            this.dialogStage_ = ConfirmationDialogStage.SUCCESS;
        }, FIVE_SECONDS);
    }
    isStage_(stage) {
        return this.dialogStage_ === stage;
    }
    stateChange_() {
        // Force the screen reader to focus on the updated dialog header.
        if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }
        this.$.dialog.focus();
    }
    getDialogTitle_() {
        switch (this.dialogStage_) {
            case ConfirmationDialogStage.LOADING:
                return this.i18n('shareDialogLoadingTitle');
            case ConfirmationDialogStage.CANCELED:
                return this.i18n('shareDialogCanceledTitle');
            case ConfirmationDialogStage.SUCCESS:
                return this.i18n('shareDialogSuccessTitle');
            default:
                assertNotReached();
        }
    }
    getSuccessDescription_() {
        if (this.recipients.length > 1) {
            return this.i18nAdvanced('sharePasswordConfirmationDescriptionMultipleRecipients', {
                substitutions: [
                    this.passwordName,
                ],
            });
        }
        return this.i18nAdvanced('sharePasswordConfirmationDescriptionSingleRecipient', {
            substitutions: [
                this.recipients[0].displayName,
                this.passwordName,
            ],
        });
    }
    hasSecureChangePasswordUrl_() {
        const url = this.password.changePasswordUrl;
        return !!url && (url.startsWith('https://'));
    }
    getFooterDescription_() {
        // Only for Android Apps that don't have affiliated website, change password
        // url can't be generated.
        if (!this.password.changePasswordUrl) {
            return this.i18nAdvanced('sharePasswordConfirmationFooterAndroidApp');
        }
        // Don't insert change password url as '<a href>' for 'non-https' urls.
        return this.i18nAdvanced('sharePasswordConfirmationFooterWebsite', {
            substitutions: [
                this.hasSecureChangePasswordUrl_() ?
                    `<a href='${this.password.changePasswordUrl}' target='_blank'>${this.passwordName}</a>` :
                    this.passwordName,
            ],
        });
    }
    onFooterClick_(e) {
        const element = e.target;
        if (element.tagName === 'A') {
            recordPasswordSharingInteraction(PasswordSharingActions.CONFIRMATION_DIALOG_CHANGE_PASSWORD_CLICKED);
        }
    }
    onClickDone_() {
        this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
    }
    onClickCancel_() {
        // Ignore the click if a race with the 5 second timeout occurred.
        if (this.isStage_(ConfirmationDialogStage.SUCCESS)) {
            return;
        }
        recordPasswordSharingInteraction(PasswordSharingActions.CONFIRMATION_DIALOG_SHARING_CANCELED);
        this.dialogStage_ = ConfirmationDialogStage.CANCELED;
        this.$.animation.classList.remove('loading');
    }
}
customElements.define(SharePasswordConfirmationDialogElement.is, SharePasswordConfirmationDialogElement);

function getTemplate$s() {
    return html `<!--_html_template_start_--><template is="dom-if" if="[[isState_(flowStateEnum_.FETCHING, flowState)]]" restamp>
  <share-password-loading-dialog on-close="onDialogClose_" dialog-title="[[getShareDialogTitle_(passwordName)]]">
  </share-password-loading-dialog>
</template>

<template is="dom-if" if="[[isState_(flowStateEnum_.ERROR, flowState)]]" restamp>
  <share-password-error-dialog on-cancel="onDialogClose_" on-restart="startSharing_">
  </share-password-error-dialog>
</template>

<template is="dom-if" if="[[isState_(flowStateEnum_.NO_OTHER_MEMBERS, flowState)]]" restamp>
  <share-password-no-other-family-members-dialog on-close="onDialogClose_" dialog-title="[[getShareDialogTitle_(passwordName)]]">
  </share-password-no-other-family-members-dialog>
</template>

<template is="dom-if" if="[[isState_(flowStateEnum_.NOT_FAMILY_MEMBER, flowState)]]" restamp>
  <share-password-not-family-member-dialog on-close="onDialogClose_" dialog-title="[[getShareDialogTitle_(passwordName)]]">
  </share-password-not-family-member-dialog>
</template>

<template is="dom-if" if="[[isState_(flowStateEnum_.FAMILY_PICKER, flowState)]]" restamp>
  <share-password-family-picker-dialog on-close="onDialogClose_" dialog-title="[[getShareDialogTitle_(passwordName)]]" members="[[fetchResults_.familyMembers]]" selected-recipients="{{recipients_}}" on-start-share="onStartShare_">
  </share-password-family-picker-dialog>
</template>

<template is="dom-if" if="[[isState_(flowStateEnum_.CONFIRMATION, flowState)]]" restamp>
  <share-password-confirmation-dialog on-close="onDialogClose_" recipients="[[recipients_]]" password="[[password]]" password-name="[[passwordName]]" icon-url="[[iconUrl]]">
  </share-password-confirmation-dialog>
</template>
<!--_html_template_end_-->`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Element which shows and controls password sharing dialogs.
 */
var ShareFlowState;
(function (ShareFlowState) {
    ShareFlowState[ShareFlowState["NO_DIALOG"] = 0] = "NO_DIALOG";
    ShareFlowState[ShareFlowState["FETCHING"] = 1] = "FETCHING";
    ShareFlowState[ShareFlowState["ERROR"] = 2] = "ERROR";
    ShareFlowState[ShareFlowState["NO_OTHER_MEMBERS"] = 3] = "NO_OTHER_MEMBERS";
    ShareFlowState[ShareFlowState["NOT_FAMILY_MEMBER"] = 4] = "NOT_FAMILY_MEMBER";
    ShareFlowState[ShareFlowState["FAMILY_PICKER"] = 5] = "FAMILY_PICKER";
    ShareFlowState[ShareFlowState["CONFIRMATION"] = 6] = "CONFIRMATION";
})(ShareFlowState || (ShareFlowState = {}));
const SharePasswordFlowElementBase = I18nMixin(PolymerElement);
class SharePasswordFlowElement extends SharePasswordFlowElementBase {
    constructor() {
        super(...arguments);
        this.flowState = ShareFlowState.NO_DIALOG;
        this.fetchResults_ = null;
        this.passwordManager_ = PasswordManagerImpl.getInstance();
    }
    static get is() {
        return 'share-password-flow';
    }
    static get template() {
        return getTemplate$s();
    }
    static get properties() {
        return {
            passwordName: String,
            iconUrl: String,
            password: Object,
            flowState: Number,
            fetchResults_: Object,
            recipients_: {
                type: Array,
                value: [],
            },
            flowStateEnum_: {
                type: Object,
                value: ShareFlowState,
                readOnly: true,
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.startSharing_();
    }
    async startSharing_() {
        // TODO(crbug/1445526): Add timeout to avoid flickering.
        this.flowState = ShareFlowState.FETCHING;
        this.fetchResults_ = await this.passwordManager_.fetchFamilyMembers();
        switch (this.fetchResults_.status) {
            case chrome.passwordsPrivate.FamilyFetchStatus.UNKNOWN_ERROR:
                this.flowState = ShareFlowState.ERROR;
                break;
            case chrome.passwordsPrivate.FamilyFetchStatus.NO_MEMBERS:
                // TODO(crbug/1445526): Rename FamilyFetchStatus.NO_MEMBERS to
                // NOT_FAMILY_MEMBER.
                this.flowState = ShareFlowState.NOT_FAMILY_MEMBER;
                break;
            case chrome.passwordsPrivate.FamilyFetchStatus.SUCCESS:
                if (this.fetchResults_.familyMembers.length === 0) {
                    this.flowState = ShareFlowState.NO_OTHER_MEMBERS;
                    return;
                }
                this.flowState = ShareFlowState.FAMILY_PICKER;
                break;
            default:
                assertNotReached();
        }
    }
    isState_(state) {
        return this.flowState === state;
    }
    getShareDialogTitle_() {
        return this.i18n('shareDialogTitle', this.passwordName);
    }
    onDialogClose_() {
        this.dispatchEvent(new CustomEvent('share-flow-done', { bubbles: true, composed: true }));
        this.flowState = ShareFlowState.NO_DIALOG;
    }
    onStartShare_() {
        this.flowState = ShareFlowState.CONFIRMATION;
    }
}
customElements.define(SharePasswordFlowElement.is, SharePasswordFlowElement);

function getTemplate$r() {
    return html `<!--_html_template_start_--><style include="shared-style cr-shared-style">#checkbox{--cr-checkbox-size:14px;--cr-checkbox-border-size:1px;--cr-checkbox-ripple-size:36px;flex-grow:0;margin-inline-end:8px}site-favicon{height:16px;padding-inline-end:8px;width:16px}#container{align-items:center;display:grid;flex-grow:1;grid-template-columns:auto 125px;padding-inline-end:8px;width:100%}.url-username-group{column-gap:16px;display:grid;grid-template-columns:fit-content(50%) 1fr;padding-inline-end:16px;width:100%}#website{color:var(--cr-primary-text-color)}#password{background-color:transparent;border:none;color:var(--cr-secondary-text-color)}#password:disabled{flex:none;font-family:inherit;margin-inline-start:auto;text-overflow:clip;width:50px}cr-icon-button{--cr-icon-button-margin-start:8px}cr-checkbox::part(label-container){clip:rect(0,0,0,0);display:block;position:fixed}</style>
<div class="flex-centered">
  <cr-checkbox id="checkbox" checked="{{checked}}">
    [[url]], [[username]]
  </cr-checkbox>
  <div id="container" class$="[[getElementClass_(first)]]">
    <div class="flex-centered">
      <site-favicon domain="[[url]]" aria-hidden="true">
      </site-favicon>
      <div class="url-username-group">
        <div id="website" class="text-elide">[[url]]</div>
        <div id="username" class="text-elide">[[username]]</div>
      </div>
    </div>
    <div class="flex-centered">
      <input id="password" readonly="readonly" class="text-elide password-input" type="[[getPasswordInputType(isPasswordVisible)]]" disabled$="[[!isPasswordVisible]]" value="[[getPasswordValue_(isPasswordVisible, password)]]">
      <cr-icon-button id="showPasswordButton" title="[[getShowHideButtonLabel(isPasswordVisible)]]" class$="[[getShowHideButtonIconClass(isPasswordVisible)]]" on-click="onShowHidePasswordButtonClick" aria-label="[[getShowHidePasswordButtonA11yLabel_(isPasswordVisible)]]">
      </cr-icon-button>
    </div>
  </div>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview PasswordPreviewItem represents one row in a list of passwords.
 */
const PasswordPreviewItemElementBase = I18nMixin(ShowPasswordMixin(PolymerElement));
class PasswordPreviewItemElement extends PasswordPreviewItemElementBase {
    static get is() {
        return 'password-preview-item';
    }
    static get template() {
        return getTemplate$r();
    }
    static get properties() {
        return {
            passwordId: Number,
            url: String,
            username: String,
            password: String,
            first: Boolean,
            checked: {
                type: Boolean,
                value: true,
            },
        };
    }
    getElementClass_() {
        return this.first ? '' : 'hr';
    }
    getPasswordValue_() {
        return this.isPasswordVisible ? this.password : ' '.repeat(10);
    }
    getShowHidePasswordButtonA11yLabel_() {
        return this.i18n(this.isPasswordVisible ? 'hidePasswordA11yLabel' :
            'showPasswordA11yLabel', this.username, this.url);
    }
}
customElements.define(PasswordPreviewItemElement.is, PasswordPreviewItemElement);

function getTemplate$q() {
    return html `<!--_html_template_start_--><style include="shared-style">#avatar{border-radius:50%;height:16px;margin-inline-end:10px;width:16px}#passwords{margin-bottom:4px;margin-top:16px}div[slot=body]{max-height:60vh}</style>
<cr-dialog id="dialog">
  <div slot="title" class="dialog-title">$i18n{movePasswordsTitle}</div>
  <div slot="body">
    <div>$i18n{movePasswordsDescription}</div>
    <div id="passwords">
      <dom-repeat items="[[passwords]]">
        <template>
          <password-preview-item password-id="[[item.id]]" url="[[getUrl_(item)]]" username="[[item.username]]" password="[[item.password]]" first="[[!index]]" on-change="passwordSelected_">
          </password-preview-item>
        </template>
      </dom-repeat>
    </div>
  </div>
  <div slot="button-container">
    <cr-button id="cancel" class="cancel-button" on-click="onCancel_" autofocus>
      $i18n{cancel}
    </cr-button>
    <cr-button id="move" class="action-button" on-click="onMoveButtonClick_" disabled="[[!selectedPasswordIds_.length]]">
      $i18n{movePasswordsButton}
    </cr-button>
  </div>
  <div slot="footer" class="flex-centered">
    <img id="avatar" src="[[avatarImage]]">
    <div id="accountEmail" class="label">[[accountEmail]]</div>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * This should be kept in sync with the enum in
 * components/password_manager/core/browser/password_manager_metrics_util.h.
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 * @enum {number}
 */
var MoveToAccountStoreTrigger;
(function (MoveToAccountStoreTrigger) {
    // LINT.IfChange
    MoveToAccountStoreTrigger[MoveToAccountStoreTrigger["SUCCESSFUL_LOGIN_WITH_PROFILE_STORE_PASSWORD"] = 0] = "SUCCESSFUL_LOGIN_WITH_PROFILE_STORE_PASSWORD";
    MoveToAccountStoreTrigger[MoveToAccountStoreTrigger["EXPLICITLY_TRIGGERED_IN_SETTINGS"] = 1] = "EXPLICITLY_TRIGGERED_IN_SETTINGS";
    MoveToAccountStoreTrigger[MoveToAccountStoreTrigger["EXPLICITLY_TRIGGERED_FOR_MULTIPLE_PASSWORDS_IN_SETTINGS"] = 2] = "EXPLICITLY_TRIGGERED_FOR_MULTIPLE_PASSWORDS_IN_SETTINGS";
    MoveToAccountStoreTrigger[MoveToAccountStoreTrigger["USER_OPTED_IN_AFTER_SAVING_LOCALLY"] = 3] = "USER_OPTED_IN_AFTER_SAVING_LOCALLY";
    MoveToAccountStoreTrigger[MoveToAccountStoreTrigger["EXPLICITLY_TRIGGERED_FOR_SINGLE_PASSWORD_IN_DETAILS_IN_SETTINGS"] = 4] = "EXPLICITLY_TRIGGERED_FOR_SINGLE_PASSWORD_IN_DETAILS_IN_SETTINGS";
    MoveToAccountStoreTrigger[MoveToAccountStoreTrigger["COUNT"] = 5] = "COUNT";
    // LINT.ThenChange(//tools/metrics/histograms/metadata/password/enums.xml)
})(MoveToAccountStoreTrigger || (MoveToAccountStoreTrigger = {}));
const MovePasswordsDialogElementBase$1 = UserUtilMixin(PolymerElement);
class MovePasswordsDialogElement extends MovePasswordsDialogElementBase$1 {
    static get is() {
        return 'move-passwords-dialog';
    }
    static get template() {
        return getTemplate$q();
    }
    static get properties() {
        return {
            /**
             * Password groups displayed in the UI.
             */
            passwords: {
                type: Array,
                value: () => [],
            },
            selectedPasswordIds_: {
                type: Array,
                value: () => [],
            },
            trigger: {
                type: MoveToAccountStoreTrigger,
                value: MoveToAccountStoreTrigger
                    .EXPLICITLY_TRIGGERED_FOR_MULTIPLE_PASSWORDS_IN_SETTINGS,
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        chrome.metricsPrivate.recordEnumerationValue('PasswordManager.AccountStorage.MoveToAccountStoreFlowOffered', this.trigger, MoveToAccountStoreTrigger.COUNT);
        this.selectedPasswordIds_ = this.passwords.map(item => item.id);
        PasswordManagerImpl.getInstance()
            .requestCredentialsDetails(this.selectedPasswordIds_)
            .then(entries => {
            this.passwords = entries;
            this.$.dialog.showModal();
        })
            .catch(() => {
            this.$.dialog.close();
            this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
        });
    }
    onCancel_() {
        this.$.dialog.cancel();
    }
    onMoveButtonClick_() {
        assert(this.isOptedInForAccountStorage);
        PasswordManagerImpl.getInstance().movePasswordsToAccount(this.selectedPasswordIds_);
        this.$.dialog.close();
    }
    getUrl_(password) {
        assert(password.affiliatedDomains);
        assert(password.affiliatedDomains.length > 0);
        return password.affiliatedDomains[0].name;
    }
    passwordSelected_() {
        this.selectedPasswordIds_ =
            Array.from(this.shadowRoot.querySelectorAll('password-preview-item'))
                .filter(item => item.checked)
                .map(item => item.passwordId);
    }
}
customElements.define(MovePasswordsDialogElement.is, MovePasswordsDialogElement);

function getTemplate$p() {
    return html `<!--_html_template_start_--><style include="shared-style">#avatar{border-radius:50%;height:16px;margin-inline-end:10px;width:16px}div[slot=body]{max-height:60vh}</style>
<cr-dialog id="dialog">
  <div id="title" slot="title" class="dialog-title">
    $i18n{moveSinglePasswordTitle}
  </div>
  <div id="body" slot="body">
    <div id="description">$i18n{moveSinglePasswordDescription}</div>
  </div>
  <div slot="button-container">
    <cr-button id="cancel" class="cancel-button" on-click="onCancel_" autofocus>
      $i18n{cancel}
    </cr-button>
    <cr-button id="move" class="action-button" on-click="onMoveButtonClick_" disabled="[[!selectedPasswordIds_.length]]">
        $i18n{moveSinglePasswordButton}
    </cr-button>
  </div>
  <div slot="footer" class="flex-centered">
    <img id="avatar" src="[[avatarImage]]">
    <div id="accountEmail" class="label">[[accountEmail]]</div>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const MovePasswordsDialogElementBase = UserUtilMixin(I18nMixin(PolymerElement));
class MoveSinglePasswordDialogElement extends MovePasswordsDialogElementBase {
    static get is() {
        return 'move-single-password-dialog';
    }
    static get template() {
        return getTemplate$p();
    }
    static get properties() {
        return {
            /**
             * Password UI entry.
             */
            password: Object,
        };
    }
    connectedCallback() {
        super.connectedCallback();
        chrome.metricsPrivate.recordEnumerationValue('PasswordManager.AccountStorage.MoveToAccountStoreFlowOffered', MoveToAccountStoreTrigger
            .EXPLICITLY_TRIGGERED_FOR_SINGLE_PASSWORD_IN_DETAILS_IN_SETTINGS, MoveToAccountStoreTrigger.COUNT);
        this.$.dialog.showModal();
    }
    onCancel_() {
        this.$.dialog.cancel();
    }
    onMoveButtonClick_() {
        assert(this.isOptedInForAccountStorage);
        PasswordManagerImpl.getInstance().movePasswordsToAccount([this.password.id]);
        this.dispatchEvent(new CustomEvent('password-moved', {
            bubbles: true,
            composed: true,
            detail: {
                accountEmail: this.accountEmail,
            },
        }));
        this.$.dialog.close();
    }
}
customElements.define(MoveSinglePasswordDialogElement.is, MoveSinglePasswordDialogElement);

const template$2 = html `<iron-iconset-svg name="iph" size="24">
  <svg>
    <defs>
      
      <g id="celebration">
        <path fill="none" d="M0 0h20v20H0z"></path>
        <path fill-rule="evenodd" d="m2 22 14-5-9-9-5 14Zm10.35-5.82L5.3 18.7l2.52-7.05 4.53 4.53ZM14.53 12.53l5.59-5.59a1.25 1.25 0 0 1 1.77 0l.59.59 1.06-1.06-.59-.59a2.758 2.758 0 0 0-3.89 0l-5.59 5.59 1.06 1.06ZM10.06 6.88l-.59.59 1.06 1.06.59-.59a2.758 2.758 0 0 0 0-3.89l-.59-.59-1.06 1.07.59.59c.48.48.48 1.28 0 1.76ZM17.06 11.88l-1.59 1.59 1.06 1.06 1.59-1.59a1.25 1.25 0 0 1 1.77 0l1.61 1.61 1.06-1.06-1.61-1.61a2.758 2.758 0 0 0-3.89 0ZM15.06 5.88l-3.59 3.59 1.06 1.06 3.59-3.59a2.758 2.758 0 0 0 0-3.89l-1.59-1.59-1.06 1.06 1.59 1.59c.48.49.48 1.29 0 1.77Z">
        </path>
      </g>
      <g id="lightbulb_outline">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2 11.7V16h-4v-2.3C8.48 12.63 7 11.53 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.49-1.51 3.65-3 4.7z">
        </path>
      </g>
      <g id="lightbulb_outline_chrome_refresh" width="20" height="20" viewBox="0 -960 960 960">
        <path d="M479.779-81.413q-30.975 0-52.812-22.704-21.837-22.704-21.837-55.035h149.74q0 32.631-22.058 55.185-22.058 22.554-53.033 22.554ZM333.848-209.065v-75.587h292.304v75.587H333.848Zm-15-125.5Q254.696-374 219.282-440.533q-35.413-66.532-35.413-142.163 0-123.288 86.364-209.59 86.363-86.301 209.739-86.301t209.767 86.301q86.392 86.302 86.392 209.59 0 75.87-35.413 142.283Q705.304-374 641.152-334.565H318.848Zm26.348-83h269.608q37.283-30.522 57.805-73.566 20.521-43.043 20.521-91.512 0-89.424-61.812-151.184-61.813-61.76-151.087-61.76-89.274 0-151.318 61.76-62.043 61.76-62.043 151.184 0 48.469 20.521 91.512 20.522 43.044 57.805 73.566Zm134.804 0Z">
        </path>
      </g>
  </defs>
  </svg>
</iron-iconset-svg>
`;
document.head.appendChild(template$2.content);

function getTemplate$o() {
    return html `<!--_html_template_start_--><link rel="stylesheet" href="chrome://theme/colors.css?sets=ui,chrome&shadow_host=true">
<style include="cr-hidden-style">:host{--help-bubble-background:var(--color-feature-promo-bubble-background,
        var(--google-blue-700));--help-bubble-foreground:var(--color-feature-promo-bubble-foreground,
        var(--google-grey-200));--help-bubble-border-radius:8px;--help-bubble-close-button-icon-size:16px;--help-bubble-close-button-size:24px;--help-bubble-element-spacing:8px;--help-bubble-padding:16px 20px;--help-bubble-font-weight:500;border-radius:var(--help-bubble-border-radius);box-shadow:0 6px 10px 4px rgba(60,64,67,.15),0 2px 3px rgba(60,64,67,.3);box-sizing:border-box;position:absolute;z-index:1}:host-context([chrome-refresh-2023]):host{--help-bubble-border-radius:12px;--help-bubble-close-button-size:20px;--help-bubble-padding:20px;--help-bubble-font-weight:400}#arrow{--help-bubble-arrow-size:11.3px;--help-bubble-arrow-size-half:calc(var(--help-bubble-arrow-size) / 2);--help-bubble-arrow-diameter:16px;--help-bubble-arrow-radius:calc(var(--help-bubble-arrow-diameter) / 2);--help-bubble-arrow-edge-offset:22px;--help-bubble-arrow-offset:calc(var(--help-bubble-arrow-edge-offset) +
                                     var(--help-bubble-arrow-radius));--help-bubble-arrow-border-radius:2px;position:absolute}#inner-arrow{background-color:var(--help-bubble-background);height:var(--help-bubble-arrow-size);left:calc(0px - var(--help-bubble-arrow-size-half));position:absolute;top:calc(0px - var(--help-bubble-arrow-size-half));transform:rotate(45deg);width:var(--help-bubble-arrow-size);z-index:-1}#arrow.bottom-edge{bottom:0}#arrow.bottom-edge #inner-arrow{border-bottom-right-radius:var(--help-bubble-arrow-border-radius)}#arrow.top-edge{top:0}#arrow.top-edge #inner-arrow{border-top-left-radius:var(--help-bubble-arrow-border-radius)}#arrow.right-edge{right:0}#arrow.right-edge #inner-arrow{border-top-right-radius:var(--help-bubble-arrow-border-radius)}#arrow.left-edge{left:0}#arrow.left-edge #inner-arrow{border-bottom-left-radius:var(--help-bubble-arrow-border-radius)}#arrow.top-position{top:var(--help-bubble-arrow-offset)}#arrow.vertical-center-position{top:50%}#arrow.bottom-position{bottom:var(--help-bubble-arrow-offset)}#arrow.left-position{left:var(--help-bubble-arrow-offset)}#arrow.horizontal-center-position{left:50%}#arrow.right-position{right:var(--help-bubble-arrow-offset)}#topContainer{display:flex;flex-direction:row}#progress{display:inline-block;flex:auto}#progress div{--help-bubble-progress-size:8px;background-color:var(--help-bubble-foreground);border:1px solid var(--help-bubble-foreground);border-radius:50%;display:inline-block;height:var(--help-bubble-progress-size);margin-inline-end:var(--help-bubble-element-spacing);margin-top:5px;width:var(--help-bubble-progress-size)}#progress .total-progress{background-color:var(--help-bubble-background)}#mainBody,#topBody{flex:1;font-size:14px;font-style:normal;font-weight:var(--help-bubble-font-weight);letter-spacing:.3px;line-height:20px;margin:0}#title{flex:1;font-size:18px;font-style:normal;font-weight:500;line-height:24px;margin:0}.help-bubble{--cr-focus-outline-color:var(--help-bubble-foreground);background-color:var(--help-bubble-background);border-radius:var(--help-bubble-border-radius);box-sizing:border-box;color:var(--help-bubble-foreground);display:flex;flex-direction:column;justify-content:space-between;max-width:340px;min-width:260px;padding:var(--help-bubble-padding);position:relative}#main{display:flex;flex-direction:row;justify-content:flex-start;margin-top:var(--help-bubble-element-spacing)}#middleRowSpacer{margin-inline-start:32px}cr-button,cr-icon-button{--help-bubble-button-foreground:var(--help-bubble-foreground);--help-bubble-button-background:var(--help-bubble-background);--help-bubble-button-hover-alpha:10%}cr-button.default-button{--help-bubble-button-foreground:var(
        --color-feature-promo-bubble-default-button-foreground,
        var(--help-bubble-background));--help-bubble-button-background:var(
        --color-feature-promo-bubble-default-button-background,
        var(--help-bubble-foreground));--help-bubble-button-hover-alpha:6%}@media (prefers-color-scheme:dark){cr-button,cr-icon-button{--help-bubble-button-hover-alpha:6%}cr-button.default-button{--help-bubble-button-hover-alpha:10%}}#buttons cr-button:hover,cr-icon-button:hover{background-color:color-mix(in srgb,var(--help-bubble-button-foreground) var(--help-bubble-button-hover-alpha),var(--help-bubble-button-background))}cr-icon-button{--cr-icon-button-fill-color:var(--help-bubble-button-foreground);--cr-icon-button-icon-size:var(--help-bubble-close-button-icon-size);--cr-icon-button-size:var(--help-bubble-close-button-size);--cr-icon-button-stroke-color:var(--help-bubble-button-foreground);box-sizing:border-box;display:block;flex:none;float:right;height:var(--cr-icon-button-size);margin:0;margin-inline-start:var(--help-bubble-element-spacing);order:2;width:var(--cr-icon-button-size)}cr-icon-button:focus-visible:focus{box-shadow:inset 0 0 0 1px var(--cr-focus-outline-color)}#bodyIcon{--help-bubble-body-icon-image-size:18px;--help-bubble-body-icon-size:24px;--iron-icon-height:var(--help-bubble-body-icon-image-size);--iron-icon-width:var(--help-bubble-body-icon-image-size);background-color:var(--help-bubble-foreground);border-radius:50%;box-sizing:border-box;color:var(--help-bubble-background);height:var(--help-bubble-body-icon-size);margin-inline-end:var(--help-bubble-element-spacing);padding:calc((var(--help-bubble-body-icon-size) - var(--help-bubble-body-icon-image-size))/ 2);text-align:center;width:var(--help-bubble-body-icon-size)}#bodyIcon iron-icon{display:block}#buttons{display:flex;flex-direction:row;justify-content:flex-end;margin-top:16px}#buttons cr-button{--border-color:var(--help-bubble-foreground);--text-color:var(--help-bubble-button-foreground);background-color:var(--help-bubble-button-background)}#buttons cr-button:focus{box-shadow:none;outline:2px solid var(--cr-focus-outline-color);outline-offset:1px}#buttons cr-button:not(:first-child){margin-inline-start:var(--help-bubble-element-spacing)}</style>

<div class="help-bubble" role="alertdialog" aria-modal="true" aria-labelledby="title" aria-describedby="body" aria-live="assertive" on-keydown="onKeyDown_" on-click="blockPropagation_">
  <div id="topContainer">
    <div id="bodyIcon" hidden$="[[!shouldShowBodyIcon_(bodyIconName)]]" aria-label$="[[bodyIconAltText]]">
      <iron-icon icon="iph:[[bodyIconName]]"></iron-icon>
    </div>
    <div id="progress" hidden$="[[!progress]]" role="progressbar" aria-valuenow$="[[progress.current]]" aria-valuemin="1" aria-valuemax$="[[progress.total]]">
      <template is="dom-repeat" items="[[progressData_]]">
        <div class$="[[getProgressClass_(index)]]"></div>
      </template>
    </div>
    <h1 id="title" hidden$="[[!shouldShowTitleInTopContainer_(progress, titleText)]]">
      [[titleText]]
    </h1>
    <p id="topBody" hidden$="[[!shouldShowBodyInTopContainer_(progress, titleText)]]">
      [[bodyText]]
    </p>
    <cr-icon-button id="close" iron-icon="cr:close" aria-label$="[[closeButtonAltText]]" on-click="dismiss_" tabindex$="[[closeButtonTabIndex]]">
    </cr-icon-button>
  </div>
  <div id="main" hidden$="[[!shouldShowBodyInMain_(progress, titleText)]]">
    <div id="middleRowSpacer" hidden$="[[!shouldShowBodyIcon_(bodyIconName)]]">
    </div>
    <p id="mainBody">[[bodyText]]</p>
  </div>
  <div id="buttons" hidden$="[[!buttons.length]]">
    <template is="dom-repeat" id="buttonlist" items="[[buttons]]" sort="buttonSortFunc_">
      <cr-button id$="[[getButtonId_(itemsIndex)]]" tabindex$="[[getButtonTabIndex_(itemsIndex, item.isDefault)]]" class$="[[getButtonClass_(item.isDefault)]]" on-click="onButtonClick_" role="button" aria-label="[[item.text]]">[[item.text]]</cr-button>
    </template>
  </div>
  <div id="arrow" class$="[[getArrowClass_(position)]]">
    <div id="inner-arrow"></div>
  </div>
</div>
<!--_html_template_end_-->`;
}

// mojom-webui/mojo/public/mojom/base/time.mojom-webui.js is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const TimeSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const TimeDeltaSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const TimeTicksSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
mojo.internal.Struct(TimeSpec.$, 'Time', [
    mojo.internal.StructField('internalValue', 0, 0, mojo.internal.Int64, BigInt(0), false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(TimeDeltaSpec.$, 'TimeDelta', [
    mojo.internal.StructField('microseconds', 0, 0, mojo.internal.Int64, BigInt(0), false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(TimeTicksSpec.$, 'TimeTicks', [
    mojo.internal.StructField('internalValue', 0, 0, mojo.internal.Int64, BigInt(0), false /* nullable */, 0),
], [[0, 16],]);

// ui/gfx/geometry/mojom/geometry.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PointSpec = { $: {} };
const PointFSpec = { $: {} };
const Point3FSpec = { $: {} };
const SizeSpec = { $: {} };
const SizeFSpec = { $: {} };
const RectSpec = { $: {} };
const RectFSpec = { $: {} };
const InsetsSpec = { $: {} };
const InsetsFSpec = { $: {} };
const Vector2dSpec = { $: {} };
const Vector2dFSpec = { $: {} };
const Vector3dFSpec = { $: {} };
const QuaternionSpec = { $: {} };
const QuadFSpec = { $: {} };
mojo.internal.Struct(PointSpec.$, 'Point', [
    mojo.internal.StructField('x', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
    mojo.internal.StructField('y', 4, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(PointFSpec.$, 'PointF', [
    mojo.internal.StructField('x', 0, 0, mojo.internal.Float, 0, false /* nullable */, 0),
    mojo.internal.StructField('y', 4, 0, mojo.internal.Float, 0, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(Point3FSpec.$, 'Point3F', [
    mojo.internal.StructField('x', 0, 0, mojo.internal.Float, 0, false /* nullable */, 0),
    mojo.internal.StructField('y', 4, 0, mojo.internal.Float, 0, false /* nullable */, 0),
    mojo.internal.StructField('z', 8, 0, mojo.internal.Float, 0, false /* nullable */, 0),
], [[0, 24],]);
mojo.internal.Struct(SizeSpec.$, 'Size', [
    mojo.internal.StructField('width', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
    mojo.internal.StructField('height', 4, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(SizeFSpec.$, 'SizeF', [
    mojo.internal.StructField('width', 0, 0, mojo.internal.Float, 0, false /* nullable */, 0),
    mojo.internal.StructField('height', 4, 0, mojo.internal.Float, 0, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(RectSpec.$, 'Rect', [
    mojo.internal.StructField('x', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
    mojo.internal.StructField('y', 4, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
    mojo.internal.StructField('width', 8, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
    mojo.internal.StructField('height', 12, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
], [[0, 24],]);
mojo.internal.Struct(RectFSpec.$, 'RectF', [
    mojo.internal.StructField('x', 0, 0, mojo.internal.Float, 0, false /* nullable */, 0),
    mojo.internal.StructField('y', 4, 0, mojo.internal.Float, 0, false /* nullable */, 0),
    mojo.internal.StructField('width', 8, 0, mojo.internal.Float, 0, false /* nullable */, 0),
    mojo.internal.StructField('height', 12, 0, mojo.internal.Float, 0, false /* nullable */, 0),
], [[0, 24],]);
mojo.internal.Struct(InsetsSpec.$, 'Insets', [
    mojo.internal.StructField('top', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
    mojo.internal.StructField('left', 4, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
    mojo.internal.StructField('bottom', 8, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
    mojo.internal.StructField('right', 12, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
], [[0, 24],]);
mojo.internal.Struct(InsetsFSpec.$, 'InsetsF', [
    mojo.internal.StructField('top', 0, 0, mojo.internal.Float, 0, false /* nullable */, 0),
    mojo.internal.StructField('left', 4, 0, mojo.internal.Float, 0, false /* nullable */, 0),
    mojo.internal.StructField('bottom', 8, 0, mojo.internal.Float, 0, false /* nullable */, 0),
    mojo.internal.StructField('right', 12, 0, mojo.internal.Float, 0, false /* nullable */, 0),
], [[0, 24],]);
mojo.internal.Struct(Vector2dSpec.$, 'Vector2d', [
    mojo.internal.StructField('x', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
    mojo.internal.StructField('y', 4, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(Vector2dFSpec.$, 'Vector2dF', [
    mojo.internal.StructField('x', 0, 0, mojo.internal.Float, 0, false /* nullable */, 0),
    mojo.internal.StructField('y', 4, 0, mojo.internal.Float, 0, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(Vector3dFSpec.$, 'Vector3dF', [
    mojo.internal.StructField('x', 0, 0, mojo.internal.Float, 0, false /* nullable */, 0),
    mojo.internal.StructField('y', 4, 0, mojo.internal.Float, 0, false /* nullable */, 0),
    mojo.internal.StructField('z', 8, 0, mojo.internal.Float, 0, false /* nullable */, 0),
], [[0, 24],]);
mojo.internal.Struct(QuaternionSpec.$, 'Quaternion', [
    mojo.internal.StructField('x', 0, 0, mojo.internal.Double, 0, false /* nullable */, 0),
    mojo.internal.StructField('y', 8, 0, mojo.internal.Double, 0, false /* nullable */, 0),
    mojo.internal.StructField('z', 16, 0, mojo.internal.Double, 0, false /* nullable */, 0),
    mojo.internal.StructField('w', 24, 0, mojo.internal.Double, 0, false /* nullable */, 0),
], [[0, 40],]);
mojo.internal.Struct(QuadFSpec.$, 'QuadF', [
    mojo.internal.StructField('p1', 0, 0, PointFSpec.$, null, false /* nullable */, 0),
    mojo.internal.StructField('p2', 8, 0, PointFSpec.$, null, false /* nullable */, 0),
    mojo.internal.StructField('p3', 16, 0, PointFSpec.$, null, false /* nullable */, 0),
    mojo.internal.StructField('p4', 24, 0, PointFSpec.$, null, false /* nullable */, 0),
], [[0, 40],]);

// ui/webui/resources/cr_components/help_bubble/help_bubble.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const HelpBubbleArrowPositionSpec = { $: mojo.internal.Enum() };
var HelpBubbleArrowPosition;
(function (HelpBubbleArrowPosition) {
    HelpBubbleArrowPosition[HelpBubbleArrowPosition["MIN_VALUE"] = 0] = "MIN_VALUE";
    HelpBubbleArrowPosition[HelpBubbleArrowPosition["MAX_VALUE"] = 11] = "MAX_VALUE";
    HelpBubbleArrowPosition[HelpBubbleArrowPosition["TOP_LEFT"] = 0] = "TOP_LEFT";
    HelpBubbleArrowPosition[HelpBubbleArrowPosition["TOP_CENTER"] = 1] = "TOP_CENTER";
    HelpBubbleArrowPosition[HelpBubbleArrowPosition["TOP_RIGHT"] = 2] = "TOP_RIGHT";
    HelpBubbleArrowPosition[HelpBubbleArrowPosition["BOTTOM_LEFT"] = 3] = "BOTTOM_LEFT";
    HelpBubbleArrowPosition[HelpBubbleArrowPosition["BOTTOM_CENTER"] = 4] = "BOTTOM_CENTER";
    HelpBubbleArrowPosition[HelpBubbleArrowPosition["BOTTOM_RIGHT"] = 5] = "BOTTOM_RIGHT";
    HelpBubbleArrowPosition[HelpBubbleArrowPosition["LEFT_TOP"] = 6] = "LEFT_TOP";
    HelpBubbleArrowPosition[HelpBubbleArrowPosition["LEFT_CENTER"] = 7] = "LEFT_CENTER";
    HelpBubbleArrowPosition[HelpBubbleArrowPosition["LEFT_BOTTOM"] = 8] = "LEFT_BOTTOM";
    HelpBubbleArrowPosition[HelpBubbleArrowPosition["RIGHT_TOP"] = 9] = "RIGHT_TOP";
    HelpBubbleArrowPosition[HelpBubbleArrowPosition["RIGHT_CENTER"] = 10] = "RIGHT_CENTER";
    HelpBubbleArrowPosition[HelpBubbleArrowPosition["RIGHT_BOTTOM"] = 11] = "RIGHT_BOTTOM";
})(HelpBubbleArrowPosition || (HelpBubbleArrowPosition = {}));
const HelpBubbleClosedReasonSpec = { $: mojo.internal.Enum() };
var HelpBubbleClosedReason;
(function (HelpBubbleClosedReason) {
    HelpBubbleClosedReason[HelpBubbleClosedReason["MIN_VALUE"] = 0] = "MIN_VALUE";
    HelpBubbleClosedReason[HelpBubbleClosedReason["MAX_VALUE"] = 2] = "MAX_VALUE";
    HelpBubbleClosedReason[HelpBubbleClosedReason["kPageChanged"] = 0] = "kPageChanged";
    HelpBubbleClosedReason[HelpBubbleClosedReason["kDismissedByUser"] = 1] = "kDismissedByUser";
    HelpBubbleClosedReason[HelpBubbleClosedReason["kTimedOut"] = 2] = "kTimedOut";
})(HelpBubbleClosedReason || (HelpBubbleClosedReason = {}));
class HelpBubbleHandlerFactoryPendingReceiver {
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'help_bubble.mojom.HelpBubbleHandlerFactory', scope);
    }
}
class HelpBubbleHandlerFactoryRemote {
    constructor(handle) {
        this.proxy =
            new mojo.internal.interfaceSupport.InterfaceRemoteBase(HelpBubbleHandlerFactoryPendingReceiver, handle);
        this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);
        this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
    }
    createHelpBubbleHandler(client, handler) {
        this.proxy.sendMessage(0, HelpBubbleHandlerFactory_CreateHelpBubbleHandler_ParamsSpec.$, null, [
            client,
            handler
        ]);
    }
}
class HelpBubbleHandlerFactory {
    static get $interfaceName() {
        return "help_bubble.mojom.HelpBubbleHandlerFactory";
    }
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote() {
        let remote = new HelpBubbleHandlerFactoryRemote;
        remote.$.bindNewPipeAndPassReceiver().bindInBrowser();
        return remote;
    }
}
class HelpBubbleHandlerPendingReceiver {
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'help_bubble.mojom.HelpBubbleHandler', scope);
    }
}
class HelpBubbleHandlerRemote {
    constructor(handle) {
        this.proxy =
            new mojo.internal.interfaceSupport.InterfaceRemoteBase(HelpBubbleHandlerPendingReceiver, handle);
        this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);
        this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
    }
    helpBubbleAnchorVisibilityChanged(nativeIdentifier, visible, rect) {
        this.proxy.sendMessage(0, HelpBubbleHandler_HelpBubbleAnchorVisibilityChanged_ParamsSpec.$, null, [
            nativeIdentifier,
            visible,
            rect
        ]);
    }
    helpBubbleAnchorActivated(nativeIdentifier) {
        this.proxy.sendMessage(1, HelpBubbleHandler_HelpBubbleAnchorActivated_ParamsSpec.$, null, [
            nativeIdentifier
        ]);
    }
    helpBubbleAnchorCustomEvent(nativeIdentifier, customEventName) {
        this.proxy.sendMessage(2, HelpBubbleHandler_HelpBubbleAnchorCustomEvent_ParamsSpec.$, null, [
            nativeIdentifier,
            customEventName
        ]);
    }
    helpBubbleButtonPressed(nativeIdentifier, buttonIndex) {
        this.proxy.sendMessage(3, HelpBubbleHandler_HelpBubbleButtonPressed_ParamsSpec.$, null, [
            nativeIdentifier,
            buttonIndex
        ]);
    }
    helpBubbleClosed(nativeIdentifier, reason) {
        this.proxy.sendMessage(4, HelpBubbleHandler_HelpBubbleClosed_ParamsSpec.$, null, [
            nativeIdentifier,
            reason
        ]);
    }
}
class HelpBubbleClientPendingReceiver {
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'help_bubble.mojom.HelpBubbleClient', scope);
    }
}
class HelpBubbleClientRemote {
    constructor(handle) {
        this.proxy =
            new mojo.internal.interfaceSupport.InterfaceRemoteBase(HelpBubbleClientPendingReceiver, handle);
        this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);
        this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
    }
    showHelpBubble(params) {
        this.proxy.sendMessage(0, HelpBubbleClient_ShowHelpBubble_ParamsSpec.$, null, [
            params
        ]);
    }
    toggleFocusForAccessibility(nativeIdentifier) {
        this.proxy.sendMessage(1, HelpBubbleClient_ToggleFocusForAccessibility_ParamsSpec.$, null, [
            nativeIdentifier
        ]);
    }
    hideHelpBubble(nativeIdentifier) {
        this.proxy.sendMessage(2, HelpBubbleClient_HideHelpBubble_ParamsSpec.$, null, [
            nativeIdentifier
        ]);
    }
    externalHelpBubbleUpdated(nativeIdentifier, shown) {
        this.proxy.sendMessage(3, HelpBubbleClient_ExternalHelpBubbleUpdated_ParamsSpec.$, null, [
            nativeIdentifier,
            shown
        ]);
    }
}
/**
 * An object which receives request messages for the HelpBubbleClient
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
class HelpBubbleClientCallbackRouter {
    constructor() {
        this.helper_internal_ = new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(HelpBubbleClientRemote);
        this.$ = new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);
        this.router_ = new mojo.internal.interfaceSupport.CallbackRouter;
        this.showHelpBubble =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(0, HelpBubbleClient_ShowHelpBubble_ParamsSpec.$, null, this.showHelpBubble.createReceiverHandler(false /* expectsResponse */));
        this.toggleFocusForAccessibility =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(1, HelpBubbleClient_ToggleFocusForAccessibility_ParamsSpec.$, null, this.toggleFocusForAccessibility.createReceiverHandler(false /* expectsResponse */));
        this.hideHelpBubble =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(2, HelpBubbleClient_HideHelpBubble_ParamsSpec.$, null, this.hideHelpBubble.createReceiverHandler(false /* expectsResponse */));
        this.externalHelpBubbleUpdated =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(3, HelpBubbleClient_ExternalHelpBubbleUpdated_ParamsSpec.$, null, this.externalHelpBubbleUpdated.createReceiverHandler(false /* expectsResponse */));
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
const HelpBubbleButtonParamsSpec = { $: {} };
const ProgressSpec = { $: {} };
const HelpBubbleParamsSpec = { $: {} };
const HelpBubbleHandlerFactory_CreateHelpBubbleHandler_ParamsSpec = { $: {} };
const HelpBubbleHandler_HelpBubbleAnchorVisibilityChanged_ParamsSpec = { $: {} };
const HelpBubbleHandler_HelpBubbleAnchorActivated_ParamsSpec = { $: {} };
const HelpBubbleHandler_HelpBubbleAnchorCustomEvent_ParamsSpec = { $: {} };
const HelpBubbleHandler_HelpBubbleButtonPressed_ParamsSpec = { $: {} };
const HelpBubbleHandler_HelpBubbleClosed_ParamsSpec = { $: {} };
const HelpBubbleClient_ShowHelpBubble_ParamsSpec = { $: {} };
const HelpBubbleClient_ToggleFocusForAccessibility_ParamsSpec = { $: {} };
const HelpBubbleClient_HideHelpBubble_ParamsSpec = { $: {} };
const HelpBubbleClient_ExternalHelpBubbleUpdated_ParamsSpec = { $: {} };
mojo.internal.Struct(HelpBubbleButtonParamsSpec.$, 'HelpBubbleButtonParams', [
    mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false /* nullable */, 0),
    mojo.internal.StructField('isDefault', 8, 0, mojo.internal.Bool, false, false /* nullable */, 0),
], [[0, 24],]);
mojo.internal.Struct(ProgressSpec.$, 'Progress', [
    mojo.internal.StructField('current', 0, 0, mojo.internal.Uint8, 0, false /* nullable */, 0),
    mojo.internal.StructField('total', 1, 0, mojo.internal.Uint8, 0, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(HelpBubbleParamsSpec.$, 'HelpBubbleParams', [
    mojo.internal.StructField('nativeIdentifier', 0, 0, mojo.internal.String, null, false /* nullable */, 0),
    mojo.internal.StructField('position', 8, 0, HelpBubbleArrowPositionSpec.$, HelpBubbleArrowPosition.TOP_CENTER, false /* nullable */, 0),
    mojo.internal.StructField('titleText', 16, 0, mojo.internal.String, null, true /* nullable */, 0),
    mojo.internal.StructField('bodyText', 24, 0, mojo.internal.String, null, false /* nullable */, 0),
    mojo.internal.StructField('closeButtonAltText', 32, 0, mojo.internal.String, null, false /* nullable */, 0),
    mojo.internal.StructField('bodyIconName', 40, 0, mojo.internal.String, null, true /* nullable */, 0),
    mojo.internal.StructField('bodyIconAltText', 48, 0, mojo.internal.String, null, false /* nullable */, 0),
    mojo.internal.StructField('progress', 56, 0, ProgressSpec.$, null, true /* nullable */, 0),
    mojo.internal.StructField('buttons', 64, 0, mojo.internal.Array(HelpBubbleButtonParamsSpec.$, false), null, false /* nullable */, 0),
    mojo.internal.StructField('timeout', 72, 0, TimeDeltaSpec.$, null, true /* nullable */, 0),
], [[0, 88],]);
mojo.internal.Struct(HelpBubbleHandlerFactory_CreateHelpBubbleHandler_ParamsSpec.$, 'HelpBubbleHandlerFactory_CreateHelpBubbleHandler_Params', [
    mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(HelpBubbleClientRemote), null, false /* nullable */, 0),
    mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(HelpBubbleHandlerPendingReceiver), null, false /* nullable */, 0),
], [[0, 24],]);
mojo.internal.Struct(HelpBubbleHandler_HelpBubbleAnchorVisibilityChanged_ParamsSpec.$, 'HelpBubbleHandler_HelpBubbleAnchorVisibilityChanged_Params', [
    mojo.internal.StructField('nativeIdentifier', 0, 0, mojo.internal.String, null, false /* nullable */, 0),
    mojo.internal.StructField('visible', 8, 0, mojo.internal.Bool, false, false /* nullable */, 0),
    mojo.internal.StructField('rect', 16, 0, RectFSpec.$, null, false /* nullable */, 0),
], [[0, 32],]);
mojo.internal.Struct(HelpBubbleHandler_HelpBubbleAnchorActivated_ParamsSpec.$, 'HelpBubbleHandler_HelpBubbleAnchorActivated_Params', [
    mojo.internal.StructField('nativeIdentifier', 0, 0, mojo.internal.String, null, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(HelpBubbleHandler_HelpBubbleAnchorCustomEvent_ParamsSpec.$, 'HelpBubbleHandler_HelpBubbleAnchorCustomEvent_Params', [
    mojo.internal.StructField('nativeIdentifier', 0, 0, mojo.internal.String, null, false /* nullable */, 0),
    mojo.internal.StructField('customEventName', 8, 0, mojo.internal.String, null, false /* nullable */, 0),
], [[0, 24],]);
mojo.internal.Struct(HelpBubbleHandler_HelpBubbleButtonPressed_ParamsSpec.$, 'HelpBubbleHandler_HelpBubbleButtonPressed_Params', [
    mojo.internal.StructField('nativeIdentifier', 0, 0, mojo.internal.String, null, false /* nullable */, 0),
    mojo.internal.StructField('buttonIndex', 8, 0, mojo.internal.Uint8, 0, false /* nullable */, 0),
], [[0, 24],]);
mojo.internal.Struct(HelpBubbleHandler_HelpBubbleClosed_ParamsSpec.$, 'HelpBubbleHandler_HelpBubbleClosed_Params', [
    mojo.internal.StructField('nativeIdentifier', 0, 0, mojo.internal.String, null, false /* nullable */, 0),
    mojo.internal.StructField('reason', 8, 0, HelpBubbleClosedReasonSpec.$, 0, false /* nullable */, 0),
], [[0, 24],]);
mojo.internal.Struct(HelpBubbleClient_ShowHelpBubble_ParamsSpec.$, 'HelpBubbleClient_ShowHelpBubble_Params', [
    mojo.internal.StructField('params', 0, 0, HelpBubbleParamsSpec.$, null, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(HelpBubbleClient_ToggleFocusForAccessibility_ParamsSpec.$, 'HelpBubbleClient_ToggleFocusForAccessibility_Params', [
    mojo.internal.StructField('nativeIdentifier', 0, 0, mojo.internal.String, null, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(HelpBubbleClient_HideHelpBubble_ParamsSpec.$, 'HelpBubbleClient_HideHelpBubble_Params', [
    mojo.internal.StructField('nativeIdentifier', 0, 0, mojo.internal.String, null, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(HelpBubbleClient_ExternalHelpBubbleUpdated_ParamsSpec.$, 'HelpBubbleClient_ExternalHelpBubbleUpdated_Params', [
    mojo.internal.StructField('nativeIdentifier', 0, 0, mojo.internal.String, null, false /* nullable */, 0),
    mojo.internal.StructField('shown', 8, 0, mojo.internal.Bool, false, false /* nullable */, 0),
], [[0, 24],]);

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A bubble for displaying in-product help. These are created
 * dynamically by HelpBubbleMixin, and their API should be considered an
 * implementation detail and subject to change (you should not add them to your
 * components directly).
 */
const ACTION_BUTTON_ID_PREFIX = 'action-button-';
const HELP_BUBBLE_DISMISSED_EVENT = 'help-bubble-dismissed';
const HELP_BUBBLE_TIMED_OUT_EVENT = 'help-bubble-timed-out';
const HELP_BUBBLE_SCROLL_ANCHOR_OPTIONS = {
    behavior: 'smooth',
    block: 'center',
};
function debounceEnd(fn, time = 50) {
    let timerId;
    return () => {
        clearTimeout(timerId);
        timerId = setTimeout(fn, time);
    };
}
class HelpBubbleElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.closeButtonTabIndex = 0;
        this.buttons = [];
        this.progress = null;
        this.timeoutMs = null;
        this.timeoutTimerId = null;
        this.debouncedUpdate = null;
        this.padding = { top: 0, bottom: 0, left: 0, right: 0 };
        this.fixed = false;
        /**
         * HTMLElement corresponding to |this.nativeId|.
         */
        this.anchorElement_ = null;
        /**
         * Backing data for the dom-repeat that generates progress indicators.
         * The elements are placeholders only.
         */
        this.progressData_ = [];
        /**
         * Watches the offsetParent for resize events, allowing the bubble to be
         * repositioned in response. Useful for when the content around a help bubble
         * target can be filtered/expanded/repositioned.
         */
        this.resizeObserver_ = null;
    }
    static get is() {
        return 'help-bubble';
    }
    static get template() {
        return getTemplate$o();
    }
    static get properties() {
        return {
            nativeId: {
                type: String,
                value: '',
                reflectToAttribute: true,
            },
            position: {
                type: HelpBubbleArrowPosition,
                value: HelpBubbleArrowPosition.TOP_CENTER,
                reflectToAttribute: true,
            },
        };
    }
    /**
     * Shows the bubble.
     */
    show(anchorElement) {
        this.anchorElement_ = anchorElement;
        // Set up the progress track.
        if (this.progress) {
            this.progressData_ = new Array(this.progress.total);
        }
        else {
            this.progressData_ = [];
        }
        this.closeButtonTabIndex =
            this.buttons.length ? this.buttons.length + 2 : 1;
        assert(this.anchorElement_, 'Tried to show a help bubble but anchorElement does not exist');
        // Reset the aria-hidden attribute as screen readers need to access the
        // contents of an opened bubble.
        this.style.display = 'block';
        this.style.position = this.fixed ? 'fixed' : 'absolute';
        this.removeAttribute('aria-hidden');
        this.updatePosition_();
        this.debouncedUpdate = debounceEnd(() => {
            if (this.anchorElement_) {
                this.updatePosition_();
            }
        }, 50);
        this.$.buttonlist.addEventListener('rendered-item-count-changed', this.debouncedUpdate);
        window.addEventListener('resize', this.debouncedUpdate);
        if (this.timeoutMs !== null) {
            const timedOutCallback = () => {
                this.dispatchEvent(new CustomEvent(HELP_BUBBLE_TIMED_OUT_EVENT, {
                    detail: {
                        nativeId: this.nativeId,
                    },
                }));
            };
            this.timeoutTimerId = setTimeout(timedOutCallback, this.timeoutMs);
        }
        if (this.offsetParent && !this.fixed) {
            this.resizeObserver_ = new ResizeObserver(() => {
                this.updatePosition_();
                this.anchorElement_?.scrollIntoView(HELP_BUBBLE_SCROLL_ANCHOR_OPTIONS);
            });
            this.resizeObserver_.observe(this.offsetParent);
        }
    }
    /**
     * Hides the bubble, clears out its contents, and ensures that screen readers
     * ignore it while hidden.
     *
     * TODO(dfried): We are moving towards formalizing help bubbles as single-use;
     * in which case most of this tear-down logic can be removed since the entire
     * bubble will go away on hide.
     */
    hide() {
        if (this.resizeObserver_) {
            this.resizeObserver_.disconnect();
            this.resizeObserver_ = null;
        }
        this.style.display = 'none';
        this.setAttribute('aria-hidden', 'true');
        this.anchorElement_ = null;
        if (this.timeoutTimerId !== null) {
            clearInterval(this.timeoutTimerId);
            this.timeoutTimerId = null;
        }
        if (this.debouncedUpdate) {
            window.removeEventListener('resize', this.debouncedUpdate);
            this.$.buttonlist.removeEventListener('rendered-item-count-changed', this.debouncedUpdate);
            this.debouncedUpdate = null;
        }
    }
    /**
     * Retrieves the current anchor element, if set and the bubble is showing,
     * otherwise null.
     */
    getAnchorElement() {
        return this.anchorElement_;
    }
    /**
     * Returns the button with the given `buttonIndex`, or null if not found.
     */
    getButtonForTesting(buttonIndex) {
        return this.$.buttons.querySelector(`[id="${ACTION_BUTTON_ID_PREFIX + buttonIndex}"]`);
    }
    /**
     * Focuses a button in the bubble.
     */
    focus() {
        this.$.buttonlist.render();
        const button = this.$.buttons.querySelector('cr-button.default-button') ||
            this.$.buttons.querySelector('cr-button') || this.$.close;
        assert(button);
        button.focus();
    }
    /**
     * Returns whether the default button is leading (true on Windows) vs trailing
     * (all other platforms).
     */
    static isDefaultButtonLeading() {
        return isWindows;
    }
    dismiss_() {
        assert(this.nativeId, 'Dismiss: expected help bubble to have a native id.');
        this.dispatchEvent(new CustomEvent(HELP_BUBBLE_DISMISSED_EVENT, {
            detail: {
                nativeId: this.nativeId,
                fromActionButton: false,
            },
        }));
    }
    /**
     * Handles ESC keypress (dismiss bubble) and prevents it from propagating up
     * to parent elements.
     */
    onKeyDown_(e) {
        if (e.key === 'Escape') {
            e.stopPropagation();
            this.dismiss_();
        }
    }
    /**
     * Prevent event propagation. Attach to any event that should not bubble up
     * out of the help bubble.
     */
    blockPropagation_(e) {
        e.stopPropagation();
    }
    getProgressClass_(index) {
        return index < this.progress.current ? 'current-progress' :
            'total-progress';
    }
    shouldShowTitleInTopContainer_(progress, titleText) {
        return !!titleText && !progress;
    }
    shouldShowBodyInTopContainer_(progress, titleText) {
        return !progress && !titleText;
    }
    shouldShowBodyInMain_(progress, titleText) {
        return !!progress || !!titleText;
    }
    shouldShowBodyIcon_(bodyIconName) {
        return bodyIconName !== null && bodyIconName !== '';
    }
    onButtonClick_(e) {
        assert(this.nativeId, 'Action button clicked: expected help bubble to have a native ID.');
        // There is no access to the model index here due to limitations of
        // dom-repeat. However, the index is stored in the node's identifier.
        const index = parseInt(e.target.id.substring(ACTION_BUTTON_ID_PREFIX.length));
        this.dispatchEvent(new CustomEvent(HELP_BUBBLE_DISMISSED_EVENT, {
            detail: {
                nativeId: this.nativeId,
                fromActionButton: true,
                buttonIndex: index,
            },
        }));
    }
    getButtonId_(index) {
        return ACTION_BUTTON_ID_PREFIX + index;
    }
    getButtonClass_(isDefault) {
        return isDefault ? 'default-button focus-outline-visible' :
            'focus-outline-visible';
    }
    getButtonTabIndex_(index, isDefault) {
        return isDefault ? 1 : index + 2;
    }
    buttonSortFunc_(button1, button2) {
        // Default button is leading on Windows, trailing on other platforms.
        if (button1.isDefault) {
            return isWindows ? -1 : 1;
        }
        if (button2.isDefault) {
            return isWindows ? 1 : -1;
        }
        return 0;
    }
    /**
     * Determine classes that describe the arrow position relative to the
     * HelpBubble
     */
    getArrowClass_(position) {
        let classList = '';
        // `*-edge` classes move arrow to a HelpBubble edge
        switch (position) {
            case HelpBubbleArrowPosition.TOP_LEFT:
            case HelpBubbleArrowPosition.TOP_CENTER:
            case HelpBubbleArrowPosition.TOP_RIGHT:
                classList = 'top-edge ';
                break;
            case HelpBubbleArrowPosition.BOTTOM_LEFT:
            case HelpBubbleArrowPosition.BOTTOM_CENTER:
            case HelpBubbleArrowPosition.BOTTOM_RIGHT:
                classList = 'bottom-edge ';
                break;
            case HelpBubbleArrowPosition.LEFT_TOP:
            case HelpBubbleArrowPosition.LEFT_CENTER:
            case HelpBubbleArrowPosition.LEFT_BOTTOM:
                classList = 'left-edge ';
                break;
            case HelpBubbleArrowPosition.RIGHT_TOP:
            case HelpBubbleArrowPosition.RIGHT_CENTER:
            case HelpBubbleArrowPosition.RIGHT_BOTTOM:
                classList = 'right-edge ';
                break;
            default:
                assertNotReached('Unknown help bubble position: ' + position);
        }
        // `*-position` classes move arrow along the HelpBubble edge
        switch (position) {
            case HelpBubbleArrowPosition.TOP_LEFT:
            case HelpBubbleArrowPosition.BOTTOM_LEFT:
                classList += 'left-position';
                break;
            case HelpBubbleArrowPosition.TOP_CENTER:
            case HelpBubbleArrowPosition.BOTTOM_CENTER:
                classList += 'horizontal-center-position';
                break;
            case HelpBubbleArrowPosition.TOP_RIGHT:
            case HelpBubbleArrowPosition.BOTTOM_RIGHT:
                classList += 'right-position';
                break;
            case HelpBubbleArrowPosition.LEFT_TOP:
            case HelpBubbleArrowPosition.RIGHT_TOP:
                classList += 'top-position';
                break;
            case HelpBubbleArrowPosition.LEFT_CENTER:
            case HelpBubbleArrowPosition.RIGHT_CENTER:
                classList += 'vertical-center-position';
                break;
            case HelpBubbleArrowPosition.LEFT_BOTTOM:
            case HelpBubbleArrowPosition.RIGHT_BOTTOM:
                classList += 'bottom-position';
                break;
            default:
                assertNotReached('Unknown help bubble position: ' + position);
        }
        return classList;
    }
    /**
     * Sets the bubble position, as relative to that of the anchor element and
     * |this.position|.
     */
    updatePosition_() {
        assert(this.anchorElement_, 'Update position: expected valid anchor element.');
        // How far HelpBubble is from anchorElement
        const ANCHOR_OFFSET = 16;
        const ARROW_WIDTH = 16;
        // The nearest an arrow can be to the adjacent HelpBubble edge
        const ARROW_OFFSET_FROM_EDGE = 22 + (ARROW_WIDTH / 2);
        // Inclusive of 8px visible arrow and 8px margin.
        const anchorRect = this.anchorElement_.getBoundingClientRect();
        const anchorRectCenter = {
            x: anchorRect.left + (anchorRect.width / 2),
            y: anchorRect.top + (anchorRect.height / 2),
        };
        const helpBubbleRect = this.getBoundingClientRect();
        // component is inserted at mixin root so start with anchor offsets
        let offsetX = this.anchorElement_.offsetLeft;
        let offsetY = this.anchorElement_.offsetTop;
        // Move HelpBubble to correct side of the anchorElement
        switch (this.position) {
            case HelpBubbleArrowPosition.TOP_LEFT:
            case HelpBubbleArrowPosition.TOP_CENTER:
            case HelpBubbleArrowPosition.TOP_RIGHT:
                offsetY += anchorRect.height + ANCHOR_OFFSET + this.padding.bottom;
                break;
            case HelpBubbleArrowPosition.BOTTOM_LEFT:
            case HelpBubbleArrowPosition.BOTTOM_CENTER:
            case HelpBubbleArrowPosition.BOTTOM_RIGHT:
                offsetY -= (helpBubbleRect.height + ANCHOR_OFFSET + this.padding.top);
                break;
            case HelpBubbleArrowPosition.LEFT_TOP:
            case HelpBubbleArrowPosition.LEFT_CENTER:
            case HelpBubbleArrowPosition.LEFT_BOTTOM:
                offsetX += anchorRect.width + ANCHOR_OFFSET + this.padding.right;
                break;
            case HelpBubbleArrowPosition.RIGHT_TOP:
            case HelpBubbleArrowPosition.RIGHT_CENTER:
            case HelpBubbleArrowPosition.RIGHT_BOTTOM:
                offsetX -= (helpBubbleRect.width + ANCHOR_OFFSET + this.padding.left);
                break;
            default:
                assertNotReached();
        }
        // Move HelpBubble along the anchorElement edge according to arrow position
        switch (this.position) {
            case HelpBubbleArrowPosition.TOP_LEFT:
            case HelpBubbleArrowPosition.BOTTOM_LEFT:
                // If anchor element width is small, point arrow to center of anchor
                // element
                if ((anchorRect.left + ARROW_OFFSET_FROM_EDGE) > anchorRectCenter.x) {
                    offsetX += (anchorRect.width / 2) - ARROW_OFFSET_FROM_EDGE;
                }
                break;
            case HelpBubbleArrowPosition.TOP_CENTER:
            case HelpBubbleArrowPosition.BOTTOM_CENTER:
                offsetX += (anchorRect.width / 2) - (helpBubbleRect.width / 2);
                break;
            case HelpBubbleArrowPosition.TOP_RIGHT:
            case HelpBubbleArrowPosition.BOTTOM_RIGHT:
                // If anchor element width is small, point arrow to center of anchor
                // element
                if ((anchorRect.right - ARROW_OFFSET_FROM_EDGE) < anchorRectCenter.x) {
                    offsetX += (anchorRect.width / 2) - helpBubbleRect.width +
                        ARROW_OFFSET_FROM_EDGE;
                }
                else {
                    // Right-align bubble and anchor elements
                    offsetX += anchorRect.width - helpBubbleRect.width;
                }
                break;
            case HelpBubbleArrowPosition.LEFT_TOP:
            case HelpBubbleArrowPosition.RIGHT_TOP:
                // If anchor element height is small, point arrow to center of anchor
                // element
                if ((anchorRect.top + ARROW_OFFSET_FROM_EDGE) > anchorRectCenter.y) {
                    offsetY += (anchorRect.height / 2) - ARROW_OFFSET_FROM_EDGE;
                }
                break;
            case HelpBubbleArrowPosition.LEFT_CENTER:
            case HelpBubbleArrowPosition.RIGHT_CENTER:
                offsetY += (anchorRect.height / 2) - (helpBubbleRect.height / 2);
                break;
            case HelpBubbleArrowPosition.LEFT_BOTTOM:
            case HelpBubbleArrowPosition.RIGHT_BOTTOM:
                // If anchor element height is small, point arrow to center of anchor
                // element
                if ((anchorRect.bottom - ARROW_OFFSET_FROM_EDGE) < anchorRectCenter.y) {
                    offsetY += (anchorRect.height / 2) - helpBubbleRect.height +
                        ARROW_OFFSET_FROM_EDGE;
                }
                else {
                    // Bottom-align bubble and anchor elements
                    offsetY += anchorRect.height - helpBubbleRect.height;
                }
                break;
            default:
                assertNotReached();
        }
        this.style.top = offsetY.toString() + 'px';
        this.style.left = offsetX.toString() + 'px';
    }
}
customElements.define(HelpBubbleElement.is, HelpBubbleElement);

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ANCHOR_HIGHLIGHT_CLASS = 'help-anchor-highlight';
// Return whether the current language is right-to-left
function isRtlLang(element) {
    return window.getComputedStyle(element).direction === 'rtl';
}
// Reflect arrow position across y-axis
function reflectArrowPosition(position) {
    switch (position) {
        case HelpBubbleArrowPosition.TOP_LEFT:
            return HelpBubbleArrowPosition.TOP_RIGHT;
        case HelpBubbleArrowPosition.TOP_RIGHT:
            return HelpBubbleArrowPosition.TOP_LEFT;
        case HelpBubbleArrowPosition.BOTTOM_LEFT:
            return HelpBubbleArrowPosition.BOTTOM_RIGHT;
        case HelpBubbleArrowPosition.BOTTOM_RIGHT:
            return HelpBubbleArrowPosition.BOTTOM_LEFT;
        case HelpBubbleArrowPosition.LEFT_TOP:
            return HelpBubbleArrowPosition.RIGHT_TOP;
        case HelpBubbleArrowPosition.LEFT_CENTER:
            return HelpBubbleArrowPosition.RIGHT_CENTER;
        case HelpBubbleArrowPosition.LEFT_BOTTOM:
            return HelpBubbleArrowPosition.RIGHT_BOTTOM;
        case HelpBubbleArrowPosition.RIGHT_TOP:
            return HelpBubbleArrowPosition.LEFT_TOP;
        case HelpBubbleArrowPosition.RIGHT_CENTER:
            return HelpBubbleArrowPosition.LEFT_CENTER;
        case HelpBubbleArrowPosition.RIGHT_BOTTOM:
            return HelpBubbleArrowPosition.LEFT_BOTTOM;
        default:
            return position;
    }
}
/**
 * HelpBubble controller class
 * - There should exist only one HelpBubble instance for each nativeId
 * - The mapping between nativeId and htmlId is held within this instance
 * - The rest of the parameters are passed to createBubble
 */
class HelpBubbleController {
    constructor(nativeId, root) {
        this.anchor_ = null;
        this.bubble_ = null;
        this.options_ = { padding: { top: 0, bottom: 0, left: 0, right: 0 }, fixed: false };
        /**
         * Whether a help bubble (webui or external) is being shown for this
         * controller
         */
        this.isBubbleShowing_ = false;
        /** Keep track of last known anchor visibility status. */
        this.isAnchorVisible_ = false;
        /** Keep track of last known anchor bounds. */
        this.lastAnchorBounds_ = { x: 0, y: 0, width: 0, height: 0 };
        /*
         * This flag is used to know whether to send position updates for
         * external bubbles
         */
        this.isExternal_ = false;
        assert(nativeId, 'HelpBubble: nativeId was not defined when registering help bubble');
        assert(root, 'HelpBubble: shadowRoot was not defined when registering help bubble');
        this.nativeId_ = nativeId;
        this.root_ = root;
    }
    isBubbleShowing() {
        return this.isBubbleShowing_;
    }
    canShowBubble() {
        return this.hasAnchor();
    }
    hasBubble() {
        return !!this.bubble_;
    }
    getBubble() {
        return this.bubble_;
    }
    hasAnchor() {
        return !!this.anchor_;
    }
    getAnchor() {
        return this.anchor_;
    }
    getNativeId() {
        return this.nativeId_;
    }
    getPadding() {
        return this.options_.padding;
    }
    getAnchorVisibility() {
        return this.isAnchorVisible_;
    }
    getLastAnchorBounds() {
        return this.lastAnchorBounds_;
    }
    updateAnchorVisibility(isVisible, bounds) {
        const changed = isVisible !== this.isAnchorVisible_ ||
            bounds.x !== this.lastAnchorBounds_.x ||
            bounds.y !== this.lastAnchorBounds_.y ||
            bounds.width !== this.lastAnchorBounds_.width ||
            bounds.height !== this.lastAnchorBounds_.height;
        this.isAnchorVisible_ = isVisible;
        this.lastAnchorBounds_ = bounds;
        return changed;
    }
    isAnchorFixed() {
        return this.options_.fixed;
    }
    isExternal() {
        return this.isExternal_;
    }
    updateExternalShowingStatus(isShowing) {
        this.isExternal_ = true;
        this.isBubbleShowing_ = isShowing;
        this.setAnchorHighlight_(isShowing);
    }
    track(trackable, options) {
        assert(!this.anchor_);
        let anchor = null;
        if (typeof trackable === 'string') {
            anchor = this.root_.querySelector(trackable);
        }
        else if (Array.isArray(trackable)) {
            anchor = this.deepQuery(trackable);
        }
        else if (trackable instanceof HTMLElement) {
            anchor = trackable;
        }
        else {
            assertNotReached('HelpBubble: anchor argument was unrecognized when registering ' +
                'help bubble');
        }
        if (!anchor) {
            return false;
        }
        anchor.dataset['nativeId'] = this.nativeId_;
        this.anchor_ = anchor;
        this.options_ = options;
        return true;
    }
    deepQuery(selectors) {
        let cur = this.root_;
        for (const selector of selectors) {
            if (cur.shadowRoot) {
                cur = cur.shadowRoot;
            }
            const el = cur.querySelector(selector);
            if (!el) {
                return null;
            }
            else {
                cur = el;
            }
        }
        return cur;
    }
    show() {
        this.isExternal_ = false;
        if (!(this.bubble_ && this.anchor_)) {
            return;
        }
        this.bubble_.show(this.anchor_);
        this.isBubbleShowing_ = true;
        this.setAnchorHighlight_(true);
    }
    hide() {
        if (!this.bubble_) {
            return;
        }
        this.bubble_.hide();
        this.bubble_.remove();
        this.bubble_ = null;
        this.isBubbleShowing_ = false;
        this.setAnchorHighlight_(false);
    }
    createBubble(params) {
        assert(this.anchor_, 'HelpBubble: anchor was not defined when showing help bubble');
        assert(this.anchor_.parentNode, 'HelpBubble: anchor element not in DOM');
        this.bubble_ = document.createElement('help-bubble');
        this.bubble_.nativeId = this.nativeId_;
        this.bubble_.position = isRtlLang(this.anchor_) ?
            reflectArrowPosition(params.position) :
            params.position;
        this.bubble_.closeButtonAltText = params.closeButtonAltText;
        this.bubble_.bodyText = params.bodyText;
        this.bubble_.bodyIconName = params.bodyIconName || null;
        this.bubble_.bodyIconAltText = params.bodyIconAltText;
        this.bubble_.titleText = params.titleText || '';
        this.bubble_.progress = params.progress || null;
        this.bubble_.buttons = params.buttons;
        this.bubble_.padding = this.options_.padding;
        if (params.timeout) {
            this.bubble_.timeoutMs = Number(params.timeout.microseconds / 1000n);
            assert(this.bubble_.timeoutMs > 0);
        }
        assert(!this.bubble_.progress ||
            this.bubble_.progress.total >= this.bubble_.progress.current);
        assert(this.root_);
        // Because the help bubble uses either absolute or fixed positioning, it
        // need only be placed within the offset parent of the anchor. However it is
        // placed as a sibling to the anchor because that guarantees proper tab
        // order.
        if (getComputedStyle(this.anchor_).getPropertyValue('position') ===
            'fixed') {
            this.bubble_.fixed = true;
        }
        this.anchor_.parentNode.insertBefore(this.bubble_, this.anchor_);
        return this.bubble_;
    }
    /**
     * Styles the anchor element to appear highlighted while the bubble is open,
     * or removes the highlight.
     */
    setAnchorHighlight_(highlight) {
        assert(this.anchor_, 'Set anchor highlight: expected valid anchor element.');
        this.anchor_.classList.toggle(ANCHOR_HIGHLIGHT_CLASS, highlight);
        if (highlight) {
            (this.bubble_ || this.anchor_).focus();
            this.anchor_.scrollIntoView(HELP_BUBBLE_SCROLL_ANCHOR_OPTIONS);
        }
    }
    /**
     * Gets the immediate ancestor element of `element` in the DOM, or null if
     * none. This steps out of shadow DOMs as it finds them.
     */
    static getImmediateAncestor(element) {
        if (element.parentElement) {
            return element.parentElement;
        }
        if (element.parentNode instanceof ShadowRoot) {
            return element.parentNode.host;
        }
        return null;
    }
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class HelpBubbleProxyImpl {
    constructor() {
        this.callbackRouter_ = new HelpBubbleClientCallbackRouter();
        this.handler_ = new HelpBubbleHandlerRemote();
        const factory = HelpBubbleHandlerFactory.getRemote();
        factory.createHelpBubbleHandler(this.callbackRouter_.$.bindNewPipeAndPassRemote(), this.handler_.$.bindNewPipeAndPassReceiver());
    }
    static getInstance() {
        return instance$2 || (instance$2 = new HelpBubbleProxyImpl());
    }
    static setInstance(obj) {
        instance$2 = obj;
    }
    getHandler() {
        return this.handler_;
    }
    getCallbackRouter() {
        return this.callbackRouter_;
    }
}
let instance$2 = null;

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Logic common to components that support a help bubble.
 *
 * A component implementing this mixin should call
 * registerHelpBubble() to associate specific element identifiers
 * referenced  in an IPH or Tutorials journey with the ids of the HTML elements
 * that journey cares about (typically, points for help bubbles to anchor to).
 *
 * Multiple components in the same WebUI may have this mixin. Each mixin will
 * receive ALL help bubble-related messages from its associated WebUIController
 * and determines if any given message is relevant. This is done by checking
 * against registered identifier.
 *
 * See README.md for more information.
 */
const HelpBubbleMixin = dedupingMixin((superClass) => {
    class HelpBubbleMixin extends superClass {
        constructor(...args) {
            super(...args);
            /**
             * A map from the name of the native identifier used in the tutorial or
             * IPH definition to the target element's HTML ID.
             *
             * Example entry:
             *   "kHeightenSecuritySettingsElementId" => "toggleSecureMode"
             */
            this.helpBubbleControllerById_ = new Map();
            this.helpBubbleListenerIds_ = [];
            this.helpBubbleFixedAnchorObserver_ = null;
            this.helpBubbleResizeObserver_ = null;
            this.helpBubbleDismissedEventTracker_ = new EventTracker();
            this.debouncedAnchorMayHaveChangedCallback_ = null;
            this.helpBubbleHandler_ =
                HelpBubbleProxyImpl.getInstance().getHandler();
            this.helpBubbleCallbackRouter_ =
                HelpBubbleProxyImpl.getInstance().getCallbackRouter();
        }
        connectedCallback() {
            super.connectedCallback();
            const router = this.helpBubbleCallbackRouter_;
            this.helpBubbleListenerIds_.push(router.showHelpBubble.addListener(this.onShowHelpBubble_.bind(this)), router.toggleFocusForAccessibility.addListener(this.onToggleHelpBubbleFocusForAccessibility_.bind(this)), router.hideHelpBubble.addListener(this.onHideHelpBubble_.bind(this)), router.externalHelpBubbleUpdated.addListener(this.onExternalHelpBubbleUpdated_.bind(this)));
            const isVisible = (element) => {
                const rect = element.getBoundingClientRect();
                return rect.height > 0 && rect.width > 0;
            };
            this.debouncedAnchorMayHaveChangedCallback_ =
                debounceEnd(this.onAnchorBoundsMayHaveChanged_.bind(this), 50);
            this.helpBubbleResizeObserver_ =
                new ResizeObserver(entries => entries.forEach(({ target }) => {
                    if (target === document.body) {
                        if (this.debouncedAnchorMayHaveChangedCallback_) {
                            this.debouncedAnchorMayHaveChangedCallback_();
                        }
                    }
                    else {
                        this.onAnchorVisibilityChanged_(target, isVisible(target));
                    }
                }));
            this.helpBubbleFixedAnchorObserver_ = new IntersectionObserver(entries => entries.forEach(({ target, isIntersecting }) => this.onAnchorVisibilityChanged_(target, isIntersecting)), { root: null });
            document.addEventListener('scroll', this.debouncedAnchorMayHaveChangedCallback_, { passive: true });
            this.helpBubbleResizeObserver_.observe(document.body);
            // When the component is connected, if the target elements were
            // already registered, they should be observed now. Any targets
            // registered from this point forward will observed on registration.
            this.controllers.forEach(ctrl => this.observeControllerAnchor_(ctrl));
        }
        get controllers() {
            return Array.from(this.helpBubbleControllerById_.values());
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            for (const listenerId of this.helpBubbleListenerIds_) {
                this.helpBubbleCallbackRouter_.removeListener(listenerId);
            }
            this.helpBubbleListenerIds_ = [];
            assert(this.helpBubbleResizeObserver_);
            this.helpBubbleResizeObserver_.disconnect();
            this.helpBubbleResizeObserver_ = null;
            assert(this.helpBubbleFixedAnchorObserver_);
            this.helpBubbleFixedAnchorObserver_.disconnect();
            this.helpBubbleFixedAnchorObserver_ = null;
            this.helpBubbleDismissedEventTracker_.removeAll();
            this.helpBubbleControllerById_.clear();
            if (this.debouncedAnchorMayHaveChangedCallback_) {
                document.removeEventListener('scroll', this.debouncedAnchorMayHaveChangedCallback_);
                this.debouncedAnchorMayHaveChangedCallback_ = null;
            }
        }
        /**
         * Maps `nativeId`, which should be the name of a ui::ElementIdentifier
         * referenced by the WebUIController, with either:
         * - a selector
         * - an array of selectors (will traverse shadow DOM elements)
         * - an arbitrary HTMLElement
         *
         * The referenced element should have block display and non-zero size
         * when visible (inline elements may be supported in the future).
         *
         * Example:
         *   registerHelpBubble(
         *       'kMyComponentTitleLabelElementIdentifier',
         *       '#title');
         *
         * Example:
         *   registerHelpBubble(
         *       'kMyComponentTitleLabelElementIdentifier',
         *       ['#child-component', '#child-component-button']);
         *
         * Example:
         *   registerHelpBubble(
         *       'kMyComponentTitleLabelElementIdentifier',
         *       this.$.list.childNodes[0]);
         *
         * See README.md for full instructions.
         *
         * This method can be called multiple times to re-register the
         * nativeId to a new element/selector. If the help bubble is already
         * showing, the registration will fail and return null. If successful,
         * this method returns the new controller.
         *
         * Optionally, an options object may be supplied to change the
         * default behavior of the help bubble.
         *
         * - Fixed positioning detection:
         *  e.g. `{fixed: true}`
         *  By default, this mixin detects anchor elements when
         *  rendered within the document. This breaks with
         *  fix-positioned elements since they are not in the regular
         *  flow of the document but they are always visible. Passing
         *  {"fixed": true} will detect the anchor element when it is
         *  visible.
         *
         * - Add padding around anchor element:
         *  e.g. `{anchorPaddingTop: 5}`
         *  To add to the default margin around the anchor element in all
         *  4 directions, e.g. {"anchorPaddingTop": 5} adds 5 pixels to
         *  the margin at the top off the anchor element. The margin is
         *  used when calculating how far the help bubble should be spaced
         *  from the anchor element. Larger values equate to a larger visual
         *  gap. These values must be positive integers in the range [0, 20].
         *  This option should be used sparingly where the help bubble would
         *  otherwise conceal important UI.
         */
        registerHelpBubble(nativeId, trackable, options = {}) {
            if (this.helpBubbleControllerById_.has(nativeId)) {
                const ctrl = this.helpBubbleControllerById_.get(nativeId);
                if (ctrl && ctrl.isBubbleShowing()) {
                    return null;
                }
                this.unregisterHelpBubble(nativeId);
            }
            const controller = new HelpBubbleController(nativeId, this.shadowRoot);
            controller.track(trackable, parseOptions(options));
            this.helpBubbleControllerById_.set(nativeId, controller);
            // This can be called before or after `connectedCallback()`, so if the
            // component isn't connected and the observer set up yet, delay
            // observation until it is.
            if (this.helpBubbleResizeObserver_) {
                this.observeControllerAnchor_(controller);
            }
            return controller;
        }
        /**
         * Unregisters a help bubble nativeId.
         *
         * This method will remove listeners, hide the help bubble if
         * showing, and forget the nativeId.
         */
        unregisterHelpBubble(nativeId) {
            const ctrl = this.helpBubbleControllerById_.get(nativeId);
            if (ctrl && ctrl.hasAnchor()) {
                this.onAnchorVisibilityChanged_(ctrl.getAnchor(), false);
                this.unobserveControllerAnchor_(ctrl);
            }
            this.helpBubbleControllerById_.delete(nativeId);
        }
        observeControllerAnchor_(controller) {
            const anchor = controller.getAnchor();
            assert(anchor, 'Help bubble does not have anchor');
            if (controller.isAnchorFixed()) {
                assert(this.helpBubbleFixedAnchorObserver_);
                this.helpBubbleFixedAnchorObserver_.observe(anchor);
            }
            else {
                assert(this.helpBubbleResizeObserver_);
                this.helpBubbleResizeObserver_.observe(anchor);
            }
        }
        unobserveControllerAnchor_(controller) {
            const anchor = controller.getAnchor();
            assert(anchor, 'Help bubble does not have anchor');
            if (controller.isAnchorFixed()) {
                assert(this.helpBubbleFixedAnchorObserver_);
                this.helpBubbleFixedAnchorObserver_.unobserve(anchor);
            }
            else {
                assert(this.helpBubbleResizeObserver_);
                this.helpBubbleResizeObserver_.unobserve(anchor);
            }
        }
        /**
         * Returns whether any help bubble is currently showing in this
         * component.
         */
        isHelpBubbleShowing() {
            return this.controllers.some(ctrl => ctrl.isBubbleShowing());
        }
        /**
         * Returns whether any help bubble is currently showing on a tag
         * with this id.
         */
        isHelpBubbleShowingForTesting(id) {
            const ctrls = this.controllers.filter(this.filterMatchingIdForTesting_(id));
            return !!ctrls[0];
        }
        /**
         * Returns the help bubble currently showing on a tag with this
         * id.
         */
        getHelpBubbleForTesting(id) {
            const ctrls = this.controllers.filter(this.filterMatchingIdForTesting_(id));
            return ctrls[0] ? ctrls[0].getBubble() : null;
        }
        filterMatchingIdForTesting_(anchorId) {
            return ctrl => ctrl.isBubbleShowing() && ctrl.getAnchor() !== null &&
                ctrl.getAnchor().id === anchorId;
        }
        /**
         * Testing method to validate that anchors will be properly
         * located at runtime
         *
         * Call this method in your browser_tests after your help
         * bubbles have been registered. Results are sorted to be
         * deterministic.
         */
        getSortedAnchorStatusesForTesting() {
            return this.controllers
                .sort((a, b) => a.getNativeId().localeCompare(b.getNativeId()))
                .map(ctrl => ([ctrl.getNativeId(), ctrl.hasAnchor()]));
        }
        /**
         * Returns whether a help bubble can be shown
         * This requires:
         * - the mixin is tracking this controller
         * - the controller is in a state to be shown, e.g.
         *   `.canShowBubble()`
         * - no other showing bubbles are anchored to the same element
         */
        canShowHelpBubble(controller) {
            if (!this.helpBubbleControllerById_.has(controller.getNativeId())) {
                return false;
            }
            if (!controller.canShowBubble()) {
                return false;
            }
            const anchor = controller.getAnchor();
            // Make sure no other help bubble is showing for this anchor.
            const anchorIsUsed = this.controllers.some(otherCtrl => otherCtrl.isBubbleShowing() &&
                otherCtrl.getAnchor() === anchor);
            return !anchorIsUsed;
        }
        /**
         * Displays a help bubble with `params` anchored to the HTML element
         * with id `anchorId`. Note that `params.nativeIdentifier` is ignored by
         * this method, since the anchor is already specified.
         */
        showHelpBubble(controller, params) {
            assert(this.canShowHelpBubble(controller), 'Can\'t show help bubble');
            const bubble = controller.createBubble(params);
            this.helpBubbleDismissedEventTracker_.add(bubble, HELP_BUBBLE_DISMISSED_EVENT, this.onHelpBubbleDismissed_.bind(this));
            this.helpBubbleDismissedEventTracker_.add(bubble, HELP_BUBBLE_TIMED_OUT_EVENT, this.onHelpBubbleTimedOut_.bind(this));
            controller.show();
        }
        /**
         * Hides a help bubble anchored to element with id `anchorId` if there
         * is one. Returns true if a bubble was hidden.
         */
        hideHelpBubble(nativeId) {
            const ctrl = this.helpBubbleControllerById_.get(nativeId);
            if (!ctrl || !ctrl.hasBubble()) {
                // `!ctrl` means this identifier is not handled by this mixin
                return false;
            }
            this.helpBubbleDismissedEventTracker_.remove(ctrl.getBubble(), HELP_BUBBLE_DISMISSED_EVENT);
            this.helpBubbleDismissedEventTracker_.remove(ctrl.getBubble(), HELP_BUBBLE_TIMED_OUT_EVENT);
            ctrl.hide();
            return true;
        }
        /**
         * Sends an "activated" event to the ElementTracker system for the
         * element with id `anchorId`, which must have been registered as a help
         * bubble anchor. This event will be processed in the browser and may
         * e.g. cause a Tutorial or interactive test to advance to the next
         * step.
         *
         * TODO(crbug.com/1376262): Figure out how to automatically send the
         * activated event when an anchor element is clicked.
         */
        notifyHelpBubbleAnchorActivated(nativeId) {
            const ctrl = this.helpBubbleControllerById_.get(nativeId);
            if (!ctrl || !ctrl.isBubbleShowing()) {
                return false;
            }
            this.helpBubbleHandler_.helpBubbleAnchorActivated(nativeId);
            return true;
        }
        /**
         * Sends a custom event to the ElementTracker system for the element
         * with id `anchorId`, which must have been registered as a help bubble
         * anchor. This event will be processed in the browser and may e.g.
         * cause a Tutorial or interactive test to advance to the next step.
         *
         * The `customEvent` string should correspond to the name of a
         * ui::CustomElementEventType declared in the browser code.
         */
        notifyHelpBubbleAnchorCustomEvent(nativeId, customEvent) {
            const ctrl = this.helpBubbleControllerById_.get(nativeId);
            if (!ctrl || !ctrl.isBubbleShowing()) {
                return false;
            }
            this.helpBubbleHandler_.helpBubbleAnchorCustomEvent(nativeId, customEvent);
            return true;
        }
        /**
         * This event is emitted by the mojo router
         */
        onAnchorVisibilityChanged_(target, isVisible) {
            const nativeId = target.dataset['nativeId'];
            assert(nativeId);
            const ctrl = this.helpBubbleControllerById_.get(nativeId);
            const hidden = this.hideHelpBubble(nativeId);
            if (hidden) {
                this.helpBubbleHandler_.helpBubbleClosed(nativeId, HelpBubbleClosedReason.kPageChanged);
            }
            const bounds = isVisible ? this.getElementBounds_(target) :
                { x: 0, y: 0, width: 0, height: 0 };
            if (!ctrl || ctrl.updateAnchorVisibility(isVisible, bounds)) {
                this.helpBubbleHandler_.helpBubbleAnchorVisibilityChanged(nativeId, isVisible, bounds);
            }
        }
        /**
         * When the document scrolls or resizes, we need to update cached
         * positions of bubble anchors.
         */
        onAnchorBoundsMayHaveChanged_() {
            for (const ctrl of this.controllers) {
                if (ctrl.hasAnchor() && ctrl.getAnchorVisibility()) {
                    const bounds = this.getElementBounds_(ctrl.getAnchor());
                    if (ctrl.updateAnchorVisibility(true, bounds)) {
                        this.helpBubbleHandler_.helpBubbleAnchorVisibilityChanged(ctrl.getNativeId(), true, bounds);
                    }
                }
            }
        }
        /**
         * Returns bounds of the anchor element
         */
        getElementBounds_(element) {
            const rect = { x: 0, y: 0, width: 0, height: 0 };
            const bounds = element.getBoundingClientRect();
            rect.x = bounds.x;
            rect.y = bounds.y;
            rect.width = bounds.width;
            rect.height = bounds.height;
            const nativeId = element.dataset['nativeId'];
            if (!nativeId) {
                return rect;
            }
            const ctrl = this.helpBubbleControllerById_.get(nativeId);
            if (ctrl) {
                const padding = ctrl.getPadding();
                rect.x -= padding.left;
                rect.y -= padding.top;
                rect.width += padding.left + padding.right;
                rect.height += padding.top + padding.bottom;
            }
            return rect;
        }
        /**
         * This event is emitted by the mojo router
         */
        onShowHelpBubble_(params) {
            if (!this.helpBubbleControllerById_.has(params.nativeIdentifier)) {
                // Identifier not handled by this mixin.
                return;
            }
            const ctrl = this.helpBubbleControllerById_.get(params.nativeIdentifier);
            this.showHelpBubble(ctrl, params);
        }
        /**
         * This event is emitted by the mojo router
         */
        onToggleHelpBubbleFocusForAccessibility_(nativeId) {
            if (!this.helpBubbleControllerById_.has(nativeId)) {
                // Identifier not handled by this mixin.
                return;
            }
            const ctrl = this.helpBubbleControllerById_.get(nativeId);
            if (ctrl) {
                const anchor = ctrl.getAnchor();
                if (anchor) {
                    anchor.focus();
                }
            }
        }
        /**
         * This event is emitted by the mojo router
         */
        onHideHelpBubble_(nativeId) {
            // This may be called with nativeId not handled by this mixin
            // Ignore return value to silently fail
            this.hideHelpBubble(nativeId);
        }
        /**
         * This event is emitted by the mojo router.
         */
        onExternalHelpBubbleUpdated_(nativeId, shown) {
            if (!this.helpBubbleControllerById_.has(nativeId)) {
                // Identifier not handled by this mixin.
                return;
            }
            // Get the associated bubble and update status
            const ctrl = this.helpBubbleControllerById_.get(nativeId);
            ctrl.updateExternalShowingStatus(shown);
        }
        /**
         * This event is emitted by the help-bubble component
         */
        onHelpBubbleDismissed_(e) {
            const nativeId = e.detail.nativeId;
            assert(nativeId);
            const hidden = this.hideHelpBubble(nativeId);
            assert(hidden);
            if (nativeId) {
                if (e.detail.fromActionButton) {
                    this.helpBubbleHandler_.helpBubbleButtonPressed(nativeId, e.detail.buttonIndex);
                }
                else {
                    this.helpBubbleHandler_.helpBubbleClosed(nativeId, HelpBubbleClosedReason.kDismissedByUser);
                }
            }
        }
        /**
         * This event is emitted by the help-bubble component
         */
        onHelpBubbleTimedOut_(e) {
            const nativeId = e.detail.nativeId;
            const ctrl = this.helpBubbleControllerById_.get(nativeId);
            assert(ctrl);
            const hidden = this.hideHelpBubble(nativeId);
            assert(hidden);
            if (nativeId) {
                this.helpBubbleHandler_.helpBubbleClosed(nativeId, HelpBubbleClosedReason.kTimedOut);
            }
        }
    }
    return HelpBubbleMixin;
});
function parseOptions(options) {
    const padding = { top: 0, bottom: 0, left: 0, right: 0 };
    padding.top = clampPadding(options.anchorPaddingTop);
    padding.left = clampPadding(options.anchorPaddingLeft);
    padding.bottom = clampPadding(options.anchorPaddingBottom);
    padding.right = clampPadding(options.anchorPaddingRight);
    return {
        padding,
        fixed: !!options.fixed,
    };
}
function clampPadding(n = 0) {
    return Math.max(0, Math.min(20, n));
}

function getTemplate$n() {
    return html `<!--_html_template_start_--><style include="shared-style cr-input-style cr-shared-style
                credential-details-card cr-icons">.share-button-container{margin-inline-start:auto;display:flex}cr-tooltip-icon{margin-block:auto;margin-inline-end:16px}#uploadSinglePassword{width:16px;height:16px;vertical-align:text-bottom;margin-inline-end:8px}.move-password-container{display:flex;margin-top:4px;margin-bottom:10px;padding:0 var(--cr-form-field-bottom-spacing);align-items:center}</style>
<div class="card" aria-label="[[getAriaLabelForPasswordCard_(password)]]" role="region">
  <div class="credential-container">
    <div class="row-container">
      <div class="column-container">
        <credential-field value="[[password.username]]" id="usernameValue" label="$i18n{usernameLabel}" copy-button-label="$i18n{copyUsername}" value-copied-toast-label="$i18n{usernameCopiedToClipboard}" placeholder="$i18n{emptyUsername}" interaction-id="[[usernameCopyInteraction_]]">
        </credential-field>
      </div>
      <div class="column-container">
        <div id="domainLabel" class="cr-form-field-label">
          [[getDomainLabel_(password)]]
        </div>
        <template id="links" is="dom-repeat" items="[[password.affiliatedDomains]]">
          <div class="elide-left">
            <a href="[[item.url]]" class="site-link" target="_blank">
              [[item.name]]
            </a>
          </div>
        </template>
      </div>
    </div>
    <div class="row-container">
      <div class="column-container">
        <cr-input id="passwordValue" label="[[getPasswordLabel_(password)]]" value="[[getPasswordValue_(password)]]" class="input-field password-input" type="[[getPasswordType_(password, isPasswordVisible)]]" readonly="readonly" aria-disabled="true">
          <cr-icon-button id="showPasswordButton" class$="[[getShowHideButtonIconClass(isPasswordVisible)]]" title="[[getShowHideButtonLabel(isPasswordVisible)]]" on-click="onShowPasswordClick_" slot="inline-suffix" hidden="[[isFederated_(password)]]">
          </cr-icon-button>
          <cr-icon-button id="copyPasswordButton" class="icon-copy-content" title="$i18n{copyPassword}" on-click="onCopyPasswordClick_" slot="inline-suffix" hidden="[[isFederated_(password)]]">
          </cr-icon-button>
        </cr-input>
      </div>
      <div class="column-container">
        <div hidden="[[isFederated_(password)]]">
          <credential-note note="[[password.note]]" id="noteValue">
          </credential-note>
        </div>
      </div>
    </div>
  </div>
  <template is="dom-if" if="[[showMovePasswordEntry_(password.storedIn, isUsingAccountStore)]]" restamp>
    <div class="move-password-container">
      <iron-icon id="uploadSinglePassword" icon="passwords-icon:upload">
      </iron-icon>
      <div class="cr-primary-text" on-click="movePasswordClicked_" inner-h-t-m-l="[[computeMovePasswordText_()]]">
      </div>
    </div>
  </template>
  <div class="button-container">
    <cr-button id="editButton" hidden="[[isFederated_(password)]]" class="edit-button" on-click="onEditClicked_" aria-label="[[getAriaLabelForEditButton_(password)]]">
      $i18n{editPassword}
    </cr-button>
    <cr-button id="deleteButton" on-click="onDeleteClick_" aria-label="[[getAriaLabelForDeleteButton_(password)]]">
      $i18n{deletePassword}
    </cr-button>
    <div class="share-button-container" hidden="[[!showShareButton_]]">
      <cr-tooltip-icon icon-class="cr20:domain" hidden="[[!passwordSharingDisabled_]]" tooltip-text="$i18n{sharePasswordManagedByAdmin}" icon-aria-label="$i18n{sharePasswordManagedByAdmin}">
      </cr-tooltip-icon>
      <cr-button id="shareButton" on-click="onShareButtonClick_" disabled="[[passwordSharingDisabled_]]">
        $i18n{share}
      </cr-button>
    </div>
    <template is="dom-if" if="[[showShareFlow_]]" restamp>
      <share-password-flow password-name="[[groupName]]" icon-url="[[iconUrl]]" password="[[password]]" on-share-flow-done="onShareFlowDone_">
      </share-password-flow>
    </template>
  </div>
</div>
<template is="dom-if" if="[[showEditPasswordDialog_]]" restamp>
  <edit-password-dialog on-close="onEditPasswordDialogClosed_" id="editPasswordDialog" credential="{{password}}">
  </edit-password-dialog>
</template>
<template is="dom-if" if="[[showDeletePasswordDialog_]]" restamp>
  <multi-store-delete-password-dialog on-close="onDeletePasswordDialogClosed_" id="deletePasswordDialog" duplicated-password="[[password]]">
  </multi-store-delete-password-dialog>
</template>
<cr-toast id="toast" duration="5000">
  <span>[[toastMessage_]]</span>
</cr-toast>
<template is="dom-if" if="[[showMovePasswordDialog_]]" restamp>
  <move-single-password-dialog on-close="onMovePasswordDialogClose_" id="movePasswordsDialog" password="[[password]]">
  </move-single-password-dialog>
</template>
<!--_html_template_end_-->`;
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PASSWORD_SHARE_BUTTON_BUTTON_ELEMENT_ID = 'PasswordManagerUI::kSharePasswordElementId';
const PasswordDetailsCardElementBase = PrefsMixin(HelpBubbleMixin(UserUtilMixin(ShowPasswordMixin(I18nMixin(PolymerElement)))));
class PasswordDetailsCardElement extends PasswordDetailsCardElementBase {
    static get is() {
        return 'password-details-card';
    }
    static get template() {
        return getTemplate$n();
    }
    static get properties() {
        return {
            password: Object,
            groupName: String,
            iconUrl: String,
            toastMessage_: String,
            usernameCopyInteraction_: {
                type: PasswordViewPageInteractions,
                value() {
                    return PasswordViewPageInteractions.USERNAME_COPY_BUTTON_CLICKED;
                },
            },
            showEditPasswordDialog_: Boolean,
            showDeletePasswordDialog_: Boolean,
            showMovePasswordDialog_: Boolean,
            showShareButton_: {
                type: Boolean,
                computed: 'computeShowShareButton_(enableSendPasswords_, ' +
                    'isOptedInForAccountStorage, isSyncingPasswords)',
            },
            passwordSharingDisabled_: {
                type: Boolean,
                computed: 'computePasswordSharingDisabled_(' +
                    'prefs.password_manager.password_sharing_enabled.enforcement, ' +
                    'prefs.password_manager.password_sharing_enabled.value)',
            },
            showShareFlow_: {
                type: Boolean,
                value: false,
            },
            enableSendPasswords_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('enableSendPasswords');
                },
            },
            enableButterOnDesktopFollowup_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('enableButterOnDesktopFollowup');
                },
            },
            isUsingAccountStore: Boolean,
        };
    }
    isFederated_() {
        return !!this.password.federationText;
    }
    getPasswordLabel_() {
        return this.isFederated_() ? this.i18n('federationLabel') :
            this.i18n('passwordLabel');
    }
    getPasswordValue_() {
        return this.isFederated_() ? this.password.federationText :
            this.password.password;
    }
    getPasswordType_() {
        return this.isFederated_() ? 'text' : this.getPasswordInputType();
    }
    onCopyPasswordClick_() {
        PasswordManagerImpl.getInstance()
            .requestPlaintextPassword(this.password.id, chrome.passwordsPrivate.PlaintextReason.COPY)
            .then(() => this.showToast_(this.i18n('passwordCopiedToClipboard')))
            .catch(() => { });
        this.extendAuthValidity_();
        PasswordManagerImpl.getInstance().recordPasswordViewInteraction(PasswordViewPageInteractions.PASSWORD_COPY_BUTTON_CLICKED);
    }
    onShowPasswordClick_() {
        this.onShowHidePasswordButtonClick();
        PasswordManagerImpl.getInstance().recordPasswordViewInteraction(PasswordViewPageInteractions.PASSWORD_SHOW_BUTTON_CLICKED);
    }
    onDeleteClick_() {
        PasswordManagerImpl.getInstance().recordPasswordViewInteraction(PasswordViewPageInteractions.PASSWORD_DELETE_BUTTON_CLICKED);
        if (this.password.storedIn ===
            chrome.passwordsPrivate.PasswordStoreSet.DEVICE_AND_ACCOUNT) {
            this.showDeletePasswordDialog_ = true;
            return;
        }
        PasswordManagerImpl.getInstance().removeCredential(this.password.id, this.password.storedIn);
        this.dispatchEvent(new CustomEvent('password-removed', {
            bubbles: true,
            composed: true,
            detail: {
                removedFromStores: this.password.storedIn,
            },
        }));
    }
    showToast_(message) {
        this.toastMessage_ = message;
        this.$.toast.show();
    }
    onEditClicked_() {
        this.showEditPasswordDialog_ = true;
        this.extendAuthValidity_();
        PasswordManagerImpl.getInstance().recordPasswordViewInteraction(PasswordViewPageInteractions.PASSWORD_EDIT_BUTTON_CLICKED);
    }
    onEditPasswordDialogClosed_() {
        // Only note is notified because updating username or password triggers
        // recomputing of an id which updates the whole list of displayed passwords.
        this.notifyPath('password.note');
        this.showEditPasswordDialog_ = false;
        this.extendAuthValidity_();
    }
    onDeletePasswordDialogClosed_() {
        this.showDeletePasswordDialog_ = false;
        this.extendAuthValidity_();
    }
    onShareButtonClick_() {
        recordPasswordSharingInteraction(PasswordSharingActions.PASSWORD_DETAILS_SHARE_BUTTON_CLICKED);
        this.hideHelpBubble(PASSWORD_SHARE_BUTTON_BUTTON_ELEMENT_ID);
        this.showShareFlow_ = true;
    }
    onShareFlowDone_() {
        this.showShareFlow_ = false;
        setTimeout(() => {
            this.$.shareButton.focus();
        }, 0);
    }
    extendAuthValidity_() {
        PasswordManagerImpl.getInstance().extendAuthValidity();
    }
    getDomainLabel_() {
        const hasApps = this.password.affiliatedDomains?.some(domain => domain.signonRealm.startsWith('android://'));
        const hasSites = this.password.affiliatedDomains?.some(domain => !domain.signonRealm.startsWith('android://'));
        if (hasApps && hasSites) {
            return this.i18n('sitesAndAppsLabel');
        }
        return hasApps ? this.i18n('appsLabel') : this.i18n('sitesLabel');
    }
    computeShowShareButton_() {
        return this.enableSendPasswords_ && !this.isFederated_() &&
            (this.isSyncingPasswords || this.isOptedInForAccountStorage);
    }
    computePasswordSharingDisabled_() {
        const pref = this.getPref('password_manager.password_sharing_enabled');
        return pref.enforcement === chrome.settingsPrivate.Enforcement.ENFORCED &&
            !pref.value;
    }
    getCredentialTypeString_() {
        return this.isFederated_() ? this.i18n('federatedCredentialProviderAriaLabel', this.password.federationText) :
            this.i18n('passwordLabel');
    }
    getAriaLabelForPasswordCard_() {
        return this.password.username ?
            this.i18n('passwordDetailsCardAriaLabel', this.getCredentialTypeString_(), this.password.username) :
            this.getCredentialTypeString_();
    }
    getAriaLabelForEditButton_() {
        return this.password.username ?
            this.i18n('passwordDetailsCardEditButtonAriaLabel', this.getCredentialTypeString_(), this.password.username) :
            this.i18n('passwordDetailsCardEditButtonNoUsernameAriaLabel', this.getCredentialTypeString_());
    }
    getAriaLabelForDeleteButton_() {
        return this.password.username ?
            this.i18n('passwordDetailsCardDeleteButtonAriaLabel', this.getCredentialTypeString_(), this.password.username) :
            this.i18n('passwordDetailsCardDeleteButtonNoUsernameAriaLabel', this.getCredentialTypeString_());
    }
    computeMovePasswordText_() {
        return this.i18nAdvanced('moveSinglePassword');
    }
    movePasswordClicked_(e) {
        e.preventDefault();
        this.showMovePasswordDialog_ = true;
    }
    showMovePasswordEntry_() {
        return this.enableButterOnDesktopFollowup_ && this.isUsingAccountStore &&
            this.password.storedIn ===
                chrome.passwordsPrivate.PasswordStoreSet.DEVICE;
    }
    onMovePasswordDialogClose_() {
        this.showMovePasswordDialog_ = false;
    }
    maybeRegisterSharingHelpBubble() {
        if (!this.showShareButton_ && !this.passwordSharingDisabled_) {
            return;
        }
        this.registerHelpBubble(PASSWORD_SHARE_BUTTON_BUTTON_ELEMENT_ID, this.$.shareButton);
    }
}
customElements.define(PasswordDetailsCardElement.is, PasswordDetailsCardElement);

function getTemplate$m() {
    return html `<!--_html_template_start_--><style include="shared-style cr-shared-style">cr-input:not(:first-of-type){margin-top:var(--cr-form-field-bottom-spacing)}cr-input{--cr-input-error-display:none}#usernameInput[invalid]{--cr-input-error-display:block}#displayNameInput{margin-top:var(--cr-form-field-bottom-spacing)}</style>
<cr-dialog id="dialog" show-on-attach>
  <div slot="title" id="title" class="dialog-title">
    $i18n{editPasskeyTitle}
  </div>
  <div slot="body">
    <div class="cr-form-field-label">$i18n{sitesLabel}</div>
    <template id="links" is="dom-repeat" items="[[passkey.affiliatedDomains]]">
      <div class="elide-left">
        <a href="[[item.url]]" class="site-link" target="_blank">
          [[item.name]]
        </a>
      </div>
    </template>
    <cr-input id="displayNameInput" label="$i18n{displayNameLabel}" autofocus value="{{displayName_}}" placeholder="$i18n{displayNamePlaceholder}">
    </cr-input>
    <cr-input id="usernameInput" label="$i18n{usernameLabel}" value="{{username_}}" placeholder="$i18n{usernamePlaceholder}">
    </cr-input>
  </div>
  <div slot="button-container">
    <cr-button id="cancelButton" class="cancel-button" on-click="onCancel_">
      $i18n{cancel}
    </cr-button>
    <cr-button id="saveButton" class="action-button" on-click="onEditClick_">
      $i18n{save}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const EditPasskeyDialogElementBase = I18nMixin(PolymerElement);
class EditPasskeyDialogElement extends EditPasskeyDialogElementBase {
    static get is() {
        return 'edit-passkey-dialog';
    }
    static get template() {
        return getTemplate$m();
    }
    static get properties() {
        return {
            passkey: Object,
            username_: String,
            displayName_: String,
        };
    }
    ready() {
        super.ready();
        assert(this.passkey.isPasskey);
        this.username_ = this.passkey.username;
        this.displayName_ = this.passkey.displayName || '';
    }
    onCancel_() {
        this.$.dialog.close();
    }
    onEditClick_() {
        this.passkey.username = this.username_;
        this.passkey.displayName = this.displayName_;
        PasswordManagerImpl.getInstance()
            .changeCredential(this.passkey)
            .finally(() => {
            this.$.dialog.close();
        });
    }
}
customElements.define(EditPasskeyDialogElement.is, EditPasskeyDialogElement);

function getTemplate$l() {
    return html `<!--_html_template_start_--><style include="shared-style cr-shared-style">a[href]{color:var(--cr-link-color)}</style>
<cr-dialog id="dialog" close-text="$i18n{close}" ignore-enter-key show-on-attach>
  <div slot="title" class="dialog-title">
    $i18n{deletePasskeyConfirmationTitle}
  </div>
  <div slot="body">
    <span id="link" inner-h-t-m-l="[[getDescriptionHtml_(passkey)]]"></span>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" on-click="onCancel_" id="cancelButton" autofocus>
      $i18n{cancel}
    </cr-button>
    <cr-button class="action-button" on-click="onDelete_" id="deleteButton">
      $i18n{delete}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const DeletePasskeyDialogElementBase = I18nMixin(PolymerElement);
class DeletePasskeyDialogElement extends DeletePasskeyDialogElementBase {
    static get is() {
        return 'delete-passkey-dialog';
    }
    static get template() {
        return getTemplate$l();
    }
    static get properties() {
        return {
            passkey: Object,
        };
    }
    ready() {
        super.ready();
        assert(this.passkey.isPasskey);
    }
    onCancel_() {
        this.$.dialog.close();
    }
    onDelete_() {
        PasswordManagerImpl.getInstance().removeCredential(this.passkey.id, this.passkey.storedIn);
        this.dispatchEvent(new CustomEvent('passkey-removed', {
            bubbles: true,
            composed: true,
        }));
        this.$.dialog.close();
    }
    getDescriptionHtml_() {
        // Passkeys have a single https affiliated origin corresponding to the
        // relying party identifier.
        assert(this.passkey.affiliatedDomains);
        const domain = this.passkey.affiliatedDomains[0];
        assert(domain);
        return this.i18nAdvanced('deletePasskeyConfirmationDescription', {
            substitutions: [`<a href='${domain.url}' target='_blank'>${domain.name}</a>`],
        });
    }
}
customElements.define(DeletePasskeyDialogElement.is, DeletePasskeyDialogElement);

function getTemplate$k() {
    return html `<!--_html_template_start_--><style include="shared-style cr-input-style cr-shared-style
                credential-details-card cr-icons"></style>
<div class="card" aria-label="[[getAriaLabelForPasswordCard_(passkey)]]" role="region">
  <div class="credential-container">
    <div class="row-container">
      <div class="column-container">
        <credential-field value="[[getDisplayNameValue_(passkey)]]" id="displayNameValue" label="$i18n{displayNameLabel}" copy-button-label="$i18n{copyDisplayName}" value-copied-toast-label="$i18n{displayNameCopiedToClipboard}" interaction-id="[[
                interactions_.PASSKEY_DISPLAY_NAME_COPY_BUTTON_CLICKED]]">
        </credential-field>
      </div>
      <div class="column-container">
        <div id="domainLabel" class="cr-form-field-label">
          $i18n{sitesLabel}
        </div>
        <template id="links" is="dom-repeat" items="[[passkey.affiliatedDomains]]">
          <div class="elide-left">
            <a href="[[item.url]]" class="site-link" target="_blank">
              [[item.name]]
            </a>
          </div>
        </template>
      </div>
    </div>
    <div class="row-container">
      <div class="column-container">
        <credential-field value="[[getUsernameValue_(passkey)]]" id="usernameValue" label="$i18n{usernameLabel}" copy-button-label="$i18n{copyUsername}" value-copied-toast-label="$i18n{usernameCopiedToClipboard}" interaction-id="[[interactions_.USERNAME_COPY_BUTTON_CLICKED]]">
        </credential-field>
      </div>
    </div>
    <div class="row-container">
      <div class="cr-secondary-text">
        <iron-icon icon="passwords-icon:passkey"></iron-icon>
        $i18n{passkeyManagementInfoLabel}
      </div>
    </div>
  </div>
  <div class="button-container">
    <cr-button id="editButton" class="edit-button" on-click="onEditClicked_" aria-label="[[getAriaLabelForEditButton_(passkey)]]">
      $i18n{edit}
    </cr-button>
    <cr-button id="deleteButton" on-click="onDeleteClick_" aria-label="[[getAriaLabelForDeleteButton_(passkey)]]">
      $i18n{delete}
    </cr-button>
  </div>
</div>
<template is="dom-if" if="[[showEditPasskeyDialog_]]" restamp id="editPasskeyTemplate">
  <edit-passkey-dialog on-close="onEditPasskeyDialogClosed_" id="editPasskeyDialog" passkey="{{passkey}}">
  </edit-passkey-dialog>
</template>
<template is="dom-if" if="[[showDeletePasskeyDialog_]]" restamp id="deletePasskeyTemplate">
  <delete-passkey-dialog on-close="onDeletePasskeyDialogClosed_" id="deletePasskeyDialog" passkey="{{passkey}}">
  </delete-passkey-dialog>
</template>
<!--_html_template_end_-->`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PasskeyDetailsCardElementBase = I18nMixin(PolymerElement);
class PasskeyDetailsCardElement extends PasskeyDetailsCardElementBase {
    static get is() {
        return 'passkey-details-card';
    }
    static get template() {
        return getTemplate$k();
    }
    static get properties() {
        return {
            passkey: Object,
            interactions_: {
                type: Object,
                value: PasswordViewPageInteractions,
            },
            showEditPasskeyDialog_: Boolean,
            showDeletePasskeyDialog_: Boolean,
        };
    }
    getUsernameValue_() {
        return !this.passkey.username || this.passkey.username === '' ?
            this.i18n('usernamePlaceholder') :
            this.passkey.username;
    }
    getDisplayNameValue_() {
        return !this.passkey.displayName || this.passkey.displayName === '' ?
            this.i18n('displayNamePlaceholder') :
            this.passkey.displayName;
    }
    onDeleteClick_() {
        this.showDeletePasskeyDialog_ = true;
        PasswordManagerImpl.getInstance().extendAuthValidity();
        PasswordManagerImpl.getInstance().recordPasswordViewInteraction(PasswordViewPageInteractions.PASSKEY_DELETE_BUTTON_CLICKED);
    }
    onDeletePasskeyDialogClosed_() {
        this.showDeletePasskeyDialog_ = false;
        PasswordManagerImpl.getInstance().extendAuthValidity();
    }
    onEditClicked_() {
        this.showEditPasskeyDialog_ = true;
        PasswordManagerImpl.getInstance().extendAuthValidity();
        PasswordManagerImpl.getInstance().recordPasswordViewInteraction(PasswordViewPageInteractions.PASSKEY_EDIT_BUTTON_CLICKED);
    }
    onEditPasskeyDialogClosed_() {
        this.showEditPasskeyDialog_ = false;
        PasswordManagerImpl.getInstance().extendAuthValidity();
    }
    getAriaLabelForPasswordCard_() {
        return !this.passkey.username ?
            this.i18n('passkeyDetailsCardNoUsernameAriaLabel') :
            this.i18n('passkeyDetailsCardAriaLabel', this.passkey.username);
    }
    getAriaLabelForEditButton_() {
        return !this.passkey.username ?
            this.i18n('passkeyDetailsCardEditButtonNoUsernameAriaLabel') :
            this.i18n('passkeyDetailsCardEditButtonAriaLabel', this.passkey.username);
    }
    getAriaLabelForDeleteButton_() {
        return !this.passkey.username ?
            this.i18n('passkeyDetailsCardDeleteButtonNoUsernameAriaLabel') :
            this.i18n('passkeyDetailsCardDeleteButtonAriaLabel', this.passkey.username);
    }
}
customElements.define(PasskeyDetailsCardElement.is, PasskeyDetailsCardElement);

function getTemplate$j() {
    return html `<!--_html_template_start_--><style include="shared-style cr-shared-style">#header{align-items:center;display:grid;grid-template-columns:auto auto 1fr;margin-bottom:28px}#backButton{--cr-icon-button-margin-end:6px;--cr-icon-button-margin-start:0px}#favicon{min-width:20px;padding-inline-end:12px;--site-favicon-height:20px;--site-favicon-width:20px}#title{line-height:normal}</style>
<div id="header">
  <cr-icon-button class="icon-arrow-back" id="backButton" on-click="navigateBack_" aria-label="$i18n{backToPasswords}">
  </cr-icon-button>
  
  <site-favicon id="favicon" url="[[selectedGroup_.iconUrl]]" domain="[[selectedGroup_.name]]" aria-hidden="true">
  </site-favicon>
  <h2 id="title" class="page-title text-elide">[[selectedGroup_.name]]</h2>
</div>
<template is="dom-if" if="[[selectedGroup_.name]]">
  <template is="dom-repeat" initial-count="10" items="[[selectedGroup_.entries]]">
    <template is="dom-if" if="[[item.isPasskey]]">
      <passkey-details-card passkey="[[item]]"></passkey-details-card>
    </template>
    <template is="dom-if" if="[[!item.isPasskey]]">
      <password-details-card password="[[item]]" prefs="{{prefs}}" group-name="[[selectedGroup_.name]]" icon-url="[[selectedGroup_.iconUrl]]" is-using-account-store="[[isAccountStoreUser]]">
      </password-details-card>
    </template>
  </template>
</template>
<!--_html_template_end_-->`;
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PasswordDetailsSectionElementBase = PrefsMixin(UserUtilMixin(RouteObserverMixin(PolymerElement)));
class PasswordDetailsSectionElement extends PasswordDetailsSectionElementBase {
    constructor() {
        super(...arguments);
        this.savedPasswordsListener_ = null;
    }
    static get is() {
        return 'password-details-section';
    }
    static get template() {
        return getTemplate$j();
    }
    static get properties() {
        return {
            selectedGroup_: {
                type: Object,
                observer: 'maybeRegisterPasswordSharingHelpBubble_',
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.passwordManagerAuthTimeoutListener_ = () => {
            if (Router.getInstance().currentRoute.page !== Page.PASSWORD_DETAILS) {
                return;
            }
            this.dispatchEvent(new CustomEvent('auth-timed-out', {
                bubbles: true,
                composed: true,
            }));
            this.navigateBack_();
            PasswordManagerImpl.getInstance().recordPasswordViewInteraction(PasswordViewPageInteractions.TIMED_OUT_IN_VIEW_PAGE);
        };
        PasswordManagerImpl.getInstance().addPasswordManagerAuthTimeoutListener(this.passwordManagerAuthTimeoutListener_);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.savedPasswordsListener_) {
            PasswordManagerImpl.getInstance().removeSavedPasswordListChangedListener(this.savedPasswordsListener_);
            this.savedPasswordsListener_ = null;
        }
        PasswordManagerImpl.getInstance().removePasswordManagerAuthTimeoutListener(this.passwordManagerAuthTimeoutListener_);
    }
    currentRouteChanged(route, _) {
        if (route.page !== Page.PASSWORD_DETAILS) {
            this.selectedGroup_ = undefined;
            return;
        }
        const group = route.details;
        if (group && group.name) {
            this.selectedGroup_ = group;
            this.startListeningForUpdates_();
            this.$.backButton.focus();
        }
        else {
            // Navigation happened directly. Find group with matching name.
            PasswordManagerImpl.getInstance().recordPasswordViewInteraction(PasswordViewPageInteractions.CREDENTIAL_REQUESTED_BY_URL);
            this.assignMatchingGroup(route.details);
        }
    }
    navigateBack_() {
        // Keep search query when navigating back.
        Router.getInstance().navigateTo(Page.PASSWORDS, null, Router.getInstance().currentRoute.queryParameters);
    }
    async assignMatchingGroup(groupName) {
        const groups = await PasswordManagerImpl.getInstance().getCredentialGroups();
        let selectedGroup = groups.find(group => group.name === groupName);
        if (!selectedGroup) {
            // Check if any password in a group has matching domain.
            selectedGroup = groups.find(group => group.entries.some(entry => entry.affiliatedDomains?.some(domain => domain.name === groupName)));
        }
        if (!selectedGroup) {
            this.navigateBack_();
            PasswordManagerImpl.getInstance().recordPasswordViewInteraction(PasswordViewPageInteractions.CREDENTIAL_NOT_FOUND);
            return;
        }
        assert(selectedGroup);
        this.updateShownCredentials(selectedGroup)
            .then(this.startListeningForUpdates_.bind(this))
            .catch(this.navigateBack_);
        PasswordManagerImpl.getInstance().recordPasswordViewInteraction(PasswordViewPageInteractions.CREDENTIAL_FOUND);
    }
    startListeningForUpdates_() {
        if (this.savedPasswordsListener_) {
            return;
        }
        this.savedPasswordsListener_ = _passwordList => {
            PasswordManagerImpl.getInstance().getCredentialGroups().then(this.refreshGroupInfo_.bind(this));
        };
        PasswordManagerImpl.getInstance().addSavedPasswordListChangedListener(this.savedPasswordsListener_);
    }
    /*
     * Requests passwords and notes for all credentials from a group. If page
     * isn't visible the request will be postponed until tab becomes focused
     * again. This is done to prevent unnecessary authentication prompts.
     */
    updateShownCredentials(group) {
        if (document.visibilityState === 'visible') {
            return this.requestShownCredentials_(group);
        }
        return new Promise((resolve, reject) => {
            this.visibilityChangedListener_ = () => {
                if (document.visibilityState === 'visible') {
                    document.removeEventListener('visibilitychange', this.visibilityChangedListener_);
                    this.requestShownCredentials_(group).then(resolve).catch(reject);
                }
            };
            document.addEventListener('visibilitychange', this.visibilityChangedListener_);
        });
    }
    requestShownCredentials_(group) {
        const ids = group.entries.map(entry => entry.id);
        return PasswordManagerImpl.getInstance()
            .requestCredentialsDetails(ids)
            .then(entries => {
            group.entries = entries;
            this.selectedGroup_ = group;
        });
    }
    /*
     * Credentials have changed, check if shown credentials still exist:
     * if yes, navigates to its group page
     * if no, navigate back to Passwords page.
     */
    refreshGroupInfo_(groups) {
        assert(this.selectedGroup_);
        const currentIds = this.selectedGroup_.entries.map(entry => entry.id);
        let matchingGroup = groups.filter(group => group.entries.some(entry => currentIds.includes(entry.id)))[0];
        // If there is no group with matching id for PasswordUIEntry it means that
        // either PasswordUIEntry is deleted or updated. During update, site value
        // can't change so there should be a group with the same name.
        if (!matchingGroup) {
            matchingGroup =
                groups.filter(group => group.name === this.selectedGroup_.name)[0];
            // If no group with matching name can be found it means that
            // PasswordUIEntry was deleted and group no longer exists.
            if (!matchingGroup) {
                this.navigateBack_();
                return;
            }
        }
        assert(matchingGroup);
        const newIds = matchingGroup.entries.map(entry => entry.id);
        const currentStores = this.selectedGroup_.entries.map(entry => entry.storedIn);
        const newStores = matchingGroup.entries.map(entry => entry.storedIn);
        // If ids match and stores used for entries haven't changed, don't do
        // anything.
        if (currentIds.sort().toString() === newIds.sort().toString() &&
            currentStores.sort().toString() === newStores.sort().toString()) {
            return;
        }
        this.updateShownCredentials(matchingGroup)
            .then(() => {
            // Use navigation to update page title if needed.
            Router.getInstance().navigateTo(Page.PASSWORD_DETAILS, this.selectedGroup_, Router.getInstance().currentRoute.queryParameters);
        })
            .catch(this.navigateBack_);
    }
    maybeRegisterPasswordSharingHelpBubble_() {
        afterNextRender(this, () => {
            if (this.selectedGroup_?.entries[0]?.isPasskey) {
                return;
            }
            this.shadowRoot.querySelector('password-details-card')
                ?.maybeRegisterSharingHelpBubble();
        });
    }
}
customElements.define(PasswordDetailsSectionElement.is, PasswordDetailsSectionElement);

function getTemplate$i() {
    return html `<!--_html_template_start_--><style include="shared-style cr-shared-style iron-flex">#tryAgainButton{margin-inline-start:8px}cr-link-row[hide-icon]::part(icon){display:none}#exportPasswordsButton{height:auto;margin-inline-start:16px;padding:3px 16px}</style>

<cr-link-row class="cr-row" non-clickable label="$i18n{exportPasswords}" sub-label="$i18n{exportPasswordsDescription}" hide-icon>
    <template is="dom-if" if="[[!showExportInProgress_]]" restamp>
      <cr-button id="exportPasswordsButton" on-click="onExportClick_" aria-label="[[getAriaLabel_()]]">
          $i18n{downloadFile}
      </cr-button>
    </template>
    <template is="dom-if" if="[[showExportInProgress_]]" restamp>
      <paper-spinner-lite active id="progressSpinner">
      </paper-spinner-lite>
    </template>
</cr-link-row>

<template is="dom-if" if="[[showPasswordsExportErrorDialog_]]" restamp>
  <cr-dialog id="dialogError" close-text="$i18n{close}" show-on-attach>
    <div slot="title" class="dialog-title">
      [[exportErrorMessage_]]
    </div>
    <div slot="body">
      $i18n{exportPasswordsFailTips}
      <ul>
        <li>$i18n{exportPasswordsFailTipsEnoughSpace}</li>
        <li>$i18n{exportPasswordsFailTipsAnotherFolder}</li>
      </ul>
    </div>
    <div slot="button-container">
      <cr-button id="cancelButton" on-click="closePasswordsExportErrorDialog_" autofocus>
        $i18n{cancel}
      </cr-button>
      <cr-button id="tryAgainButton" class="action-button" on-click="onTryAgainClick_">
        $i18n{exportPasswordsTryAgain}
      </cr-button>
    </div>
  </cr-dialog>
</template>

<cr-toast id="exportSuccessToast" duration="2500">
  <div>$i18n{exportSuccessful}</div>
  <cr-button id="openInShellButton" on-click="onOpenInShellButtonClick_">
    $i18n{downloadLinkShow}
  </cr-button>
</cr-toast>
<!--_html_template_end_-->`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ProgressStatus = chrome.passwordsPrivate.ExportProgressStatus;
const PasswordsExporterElementBase = I18nMixin(PolymerElement);
class PasswordsExporterElement extends PasswordsExporterElementBase {
    constructor() {
        super(...arguments);
        this.onPasswordsFileExportProgressListener_ = null;
    }
    static get is() {
        return 'passwords-exporter';
    }
    static get template() {
        return getTemplate$i();
    }
    static get properties() {
        return {
            /** Whether password export progress spinner is shown. */
            showExportInProgress_: {
                type: Boolean,
                value: false,
            },
            /** Whether password export error dialog is shown. */
            showExportErrorDialog_: {
                type: Boolean,
                value: false,
            },
            /** The error that occurred while exporting. */
            exportErrorMessage_: {
                type: String,
                value: null,
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        // If export started on a different tab and is still in progress, display a
        // busy UI.
        PasswordManagerImpl.getInstance().requestExportProgressStatus().then(status => {
            if (status === ProgressStatus.IN_PROGRESS) {
                this.showExportInProgress_ = true;
            }
        });
        this.onPasswordsFileExportProgressListener_ =
            (progress) => this.onPasswordsFileExportProgress_(progress);
        PasswordManagerImpl.getInstance().addPasswordsFileExportProgressListener(this.onPasswordsFileExportProgressListener_);
    }
    disconnectedCallback() {
        assert(this.onPasswordsFileExportProgressListener_);
        PasswordManagerImpl.getInstance().removePasswordsFileExportProgressListener(this.onPasswordsFileExportProgressListener_);
        super.disconnectedCallback();
    }
    /**
     * Tells the PasswordsPrivate API to export saved passwords in a .csv file.
     */
    onExportClick_() {
        PasswordManagerImpl.getInstance().exportPasswords().catch((error) => {
            if (error === 'in-progress') {
                // Exporting was started by a different call to exportPasswords() and is
                // is still in progress. This UI needs to be updated to the current
                // status.
                this.showExportInProgress_ = true;
            }
        });
    }
    /**
     * Closes the export error dialog.
     */
    closePasswordsExportErrorDialog_() {
        this.showPasswordsExportErrorDialog_ = false;
    }
    /**
     * Retries export from the error dialog.
     */
    onTryAgainClick_() {
        this.closePasswordsExportErrorDialog_();
        this.onExportClick_();
    }
    /**
     * Handles an export progress event by showing the progress spinner or caching
     * the event for later consumption.
     */
    onPasswordsFileExportProgress_(progress) {
        if (progress.status === ProgressStatus.IN_PROGRESS) {
            this.showExportInProgress_ = true;
            return;
        }
        this.showExportInProgress_ = false;
        switch (progress.status) {
            case ProgressStatus.SUCCEEDED:
                assert(progress.filePath);
                this.exportedFilePath_ = progress.filePath;
                this.$.exportSuccessToast.show();
                break;
            case ProgressStatus.FAILED_WRITE_FAILED:
                assert(progress.folderName);
                this.exportErrorMessage_ =
                    this.i18n('exportPasswordsFailTitle', progress.folderName);
                this.showPasswordsExportErrorDialog_ = true;
                break;
        }
    }
    onOpenInShellButtonClick_() {
        assert(this.exportedFilePath_);
        PasswordManagerImpl.getInstance().showExportedFileInShell(this.exportedFilePath_);
        this.$.exportSuccessToast.hide();
    }
    getAriaLabel_() {
        return [
            this.i18n('exportPasswords'),
            this.i18n('exportPasswordsDescription'),
        ].join('. ');
    }
}
customElements.define(PasswordsExporterElement.is, PasswordsExporterElement);

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

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SearchableLabelElement extends PolymerElement {
    static get is() {
        return 'searchable-label';
    }
    static get template() {
        return null;
    }
    static get properties() {
        return {
            // The text to show in this label.
            title: String,
            // The search term to bold within the title.
            searchTerm: String,
        };
    }
    static get observers() {
        return ['setSearchedTextToBold_(title, searchTerm)'];
    }
    /**
     * Updates the page title. If a search term is specified, highlights any
     * occurrences of the search term in bold.
     */
    setSearchedTextToBold_() {
        if (this.title === undefined) {
            return;
        }
        const titleText = this.title;
        if (!this.searchTerm) {
            this.textContent = titleText;
            return;
        }
        const re = new RegExp(quoteString(this.searchTerm), 'gim');
        let i = 0;
        let match;
        this.textContent = '';
        while (match = re.exec(titleText)) {
            if (match.index > i) {
                this.appendTextElement('span', titleText.slice(i, match.index));
            }
            i = re.lastIndex;
            // Mark the highlighted text in bold.
            this.appendTextElement('b', titleText.substring(match.index, i));
        }
        if (i < titleText.length) {
            this.appendTextElement('span', titleText.slice(i));
        }
    }
    appendTextElement(type, text) {
        const element = document.createElement(type);
        element.textContent = text;
        this.appendChild(element);
    }
}
customElements.define(SearchableLabelElement.is, SearchableLabelElement);

function getTemplate$h() {
    return html `<!--_html_template_start_--><style include="shared-style cr-shared-style">#container:hover{background-color:var(--cr-hover-background-color);border-radius:inherit;cursor:pointer;--cr-icon-button-hover-background-color:transparent;--cr-icon-button-active-background-color:transparent}#borderPart{display:grid;flex:1;grid-template-columns:auto 1fr;min-height:var(--section-min-height)}#favicon{margin-inline-end:20px;margin-inline-start:20px}.label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#numberOfAccounts{margin-inline-start:8px}#endIcons{--cr-icon-button-margin-start:0px;--cr-icon-button-margin-end:10px;justify-self:end}paper-tooltip{overflow:hidden;white-space:nowrap}span{color:var(--cr-secondary-text-color)}</style>
<div id="container" class="flex-centered">
  
  <site-favicon id="favicon" url="[[item.iconUrl]]" domain="[[item.name]]" aria-hidden="true">
  </site-favicon>
  <div id="borderPart" class$="[[elementClass_]]">
    <div class="label" aria-hidden="true">
      <searchable-label id="displayedName" title="[[getTitle_(item, searchTerm)]]" search-term="[[searchTerm]]"></searchable-label>
      <span id="numberOfAccounts" hidden="[[!showNumberOfAccounts_(item, searchTerm)]]">
        [[numberOfAccounts_]]
      </span>
    </div>

    <div id="endIcons">
      <iron-icon id="localPasswordsIcon" icon="cr20:cloud-off" hidden="[[!shouldShowDeviceOnlyCredentialsIcon_(isAccountStoreUser, item.entries)]]">
      </iron-icon>
      <cr-icon-button id="seePasswordDetails" class="subpage-arrow" aria-label="[[getAriaLabel_(item)]]">
      </cr-icon-button>
    </div>
  </div>
</div>

<paper-tooltip position="top" for="localPasswordsIcon" offset="0">[[tooltipText_]]</paper-tooltip><!--_html_template_end_-->`;
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PasswordListItemElementBase = I18nMixin(PolymerElement);
class PasswordListItemElement extends PasswordListItemElementBase {
    static get is() {
        return 'password-list-item';
    }
    static get template() {
        return getTemplate$h();
    }
    static get properties() {
        return {
            item: {
                type: Object,
                observer: 'onItemChanged_',
            },
            isAccountStoreUser: Boolean,
            first: Boolean,
            searchTerm: String,
            elementClass_: {
                type: String,
                computed: 'computeElementClass_(first)',
            },
            /**
             * The number of accounts in a group as a formatted string.
             */
            numberOfAccounts_: String,
            enableButterOnDesktopFollowup_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('enableButterOnDesktopFollowup');
                },
            },
        };
    }
    computeElementClass_() {
        return this.first ? 'flex-centered' : 'flex-centered hr';
    }
    ready() {
        super.ready();
        this.addEventListener('click', this.onRowClick_);
    }
    focus() {
        this.$.seePasswordDetails.focus();
    }
    async onRowClick_() {
        const ids = this.item.entries.map(entry => entry.id);
        PasswordManagerImpl.getInstance()
            .requestCredentialsDetails(ids)
            .then(entries => {
            const group = {
                name: this.item.name,
                iconUrl: this.item.iconUrl,
                entries: entries,
            };
            this.dispatchEvent(new CustomEvent('password-details-shown', { bubbles: true, composed: true, detail: this }));
            // Keep current search query.
            Router.getInstance().navigateTo(Page.PASSWORD_DETAILS, group, Router.getInstance().currentRoute.queryParameters);
        })
            .catch(() => { });
        PasswordManagerImpl.getInstance().recordPasswordViewInteraction(PasswordViewPageInteractions.CREDENTIAL_ROW_CLICKED);
        const searchTerm = Router.getInstance().currentRoute.queryParameters.get(UrlParam.SEARCH_TERM) || '';
        chrome.metricsPrivate.recordBoolean('PasswordManager.UI.OpenedPasswordDetailsWhileSearching', !!searchTerm);
    }
    async onItemChanged_() {
        if (this.item.entries.length > 1) {
            this.numberOfAccounts_ =
                await PluralStringProxyImpl.getInstance().getPluralString('numberOfAccounts', this.item.entries.length);
        }
        if (this.enableButterOnDesktopFollowup_) {
            this.tooltipText_ =
                await PluralStringProxyImpl.getInstance().getPluralString('deviceOnlyPasswordsIconTooltip', this.getNumberOfCredentialsOnDevice_());
        }
    }
    showNumberOfAccounts_() {
        return !this.searchTerm && this.item.entries.length > 1;
    }
    getTitle_() {
        const term = this.searchTerm.trim().toLowerCase();
        if (!term) {
            return this.item.name;
        }
        if (this.item.name.includes(term)) {
            return this.item.name;
        }
        const entries = this.item.entries;
        // Show matching username in the title if it exists.
        const matchingUsername = entries.find(c => c.username.toLowerCase().includes(term))?.username;
        if (matchingUsername) {
            return this.item.name + ' • ' + matchingUsername;
        }
        // Show matching domain in the title if it exists.
        const domains = Array.prototype.concat(...entries.map(c => c.affiliatedDomains || []));
        const matchingDomain = domains.find(d => d.name.toLowerCase().includes(term))?.name;
        if (matchingDomain) {
            return this.item.name + ' • ' + matchingDomain;
        }
        return this.item.name;
    }
    getNumberOfCredentialsOnDevice_() {
        return this.item.entries
            .filter(entry => entry.storedIn ===
            chrome.passwordsPrivate.PasswordStoreSet.DEVICE)
            .length;
    }
    shouldShowDeviceOnlyCredentialsIcon_() {
        return this.enableButterOnDesktopFollowup_ && this.isAccountStoreUser &&
            (this.getNumberOfCredentialsOnDevice_() > 0);
    }
    getAriaLabel_() {
        return this.i18n('viewPasswordAriaDescription', this.item.name);
    }
}
customElements.define(PasswordListItemElement.is, PasswordListItemElement);

function getTemplate$g() {
    return html `<!--_html_template_start_--><cr-dialog id="dialog">
  <div slot="title" class="dialog-title">[[getTitle_()]]</div>
  <div slot="body">
    <div>$i18n{authTimedOutDescription}</div>
  </div>
  <div slot="button-container">
    <cr-button class="action-button" autofocus on-click="onCloseButtonClick_">
      $i18n{gotIt}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const AuthTimedOutDialogElementBase = I18nMixin(PolymerElement);
class AuthTimedOutDialogElement extends AuthTimedOutDialogElementBase {
    static get is() {
        return 'auth-timed-out-dialog';
    }
    static get template() {
        return getTemplate$g();
    }
    connectedCallback() {
        super.connectedCallback();
        this.$.dialog.showModal();
    }
    onCloseButtonClick_() {
        this.$.dialog.close();
    }
    getTitle_() {
        return this.i18n('authTimedOut', this.i18n('localPasswordManager'));
    }
}
customElements.define(AuthTimedOutDialogElement.is, AuthTimedOutDialogElement);

function getTemplate$f() {
    return html `<!--_html_template_start_--><style include="shared-style cr-shared-style">:host{align-items:center;display:flex}#image{height:120px;width:248px}a[href]{color:var(--cr-link-color)}#promoContent{display:flex;flex:1;flex-direction:column;justify-content:center;margin-block:10px;margin-inline-end:6px;margin-inline-start:24px}#actionButton{margin-top:6px;width:fit-content}#closeButton{margin-top:10px;margin-right:10px;margin-bottom:auto}</style>
<picture id="image">
  
  
    <source class="banner" srcset="./images/[[promoCard.id]]_dark_non_branded.svg" media="(prefers-color-scheme: dark)">
    <img class="banner" alt="" src="./images/[[promoCard.id]]_non_branded.svg">
  
</picture>
<div id="promoContent">
  <span id="title" class="label">[[promoCard.title]]</span>
  <div id="description" class="cr-secondary-text label" inner-h-t-m-l="[[getDescription_(promoCard)]]"></div>
  <cr-button id="actionButton" hidden="[[!promoCard.actionButtonText]]" class="action-button" on-click="onActionButtonClick_">
    [[promoCard.actionButtonText]]
  </cr-button>
</div>
<cr-icon-button id="closeButton" class="icon-clear no-overlap" on-click="onCloseClick_" title="$i18n{close}">
</cr-icon-button>
<!--_html_template_end_-->`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class PromoCardsProxyImpl {
    getAvailablePromoCard() {
        return sendWithPromise('getAvailablePromoCard');
    }
    recordPromoDismissed(id) {
        chrome.send('recordPromoDismissed', [id]);
    }
    static getInstance() {
        return instance$1 || (instance$1 = new PromoCardsProxyImpl());
    }
    static setInstance(obj) {
        instance$1 = obj;
    }
}
let instance$1 = null;

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// WARNING: Keep synced with
// chrome/browser/ui/webui/password_manager/promo_cards_handler.cc.
var PromoCardId;
(function (PromoCardId) {
    PromoCardId["CHECKUP"] = "password_checkup_promo";
    PromoCardId["WEB_PASSWORD_MANAGER"] = "passwords_on_web_promo";
    PromoCardId["SHORTCUT"] = "password_shortcut_promo";
    PromoCardId["ACCESS_ON_ANY_DEVICE"] = "access_on_any_device_promo";
    PromoCardId["RELAUNCH_CHROME"] = "relaunch_chrome_promo";
    PromoCardId["MOVE_PASSWORDS"] = "move_passwords_promo";
})(PromoCardId || (PromoCardId = {}));
/**
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Needs to stay in sync with PromoCardType in promo_card.cc
 */
var PromoCardMetricId;
(function (PromoCardMetricId) {
    PromoCardMetricId[PromoCardMetricId["CHECKUP"] = 0] = "CHECKUP";
    PromoCardMetricId[PromoCardMetricId["UNUSED_WEB_PASSWORD_MANAGER"] = 1] = "UNUSED_WEB_PASSWORD_MANAGER";
    PromoCardMetricId[PromoCardMetricId["SHORTCUT"] = 2] = "SHORTCUT";
    PromoCardMetricId[PromoCardMetricId["UNUSED_ACCESS_ON_ANY_DEVICE"] = 3] = "UNUSED_ACCESS_ON_ANY_DEVICE";
    PromoCardMetricId[PromoCardMetricId["RELAUNCH_CHROME"] = 4] = "RELAUNCH_CHROME";
    PromoCardMetricId[PromoCardMetricId["MOVE_PASSWORDS"] = 5] = "MOVE_PASSWORDS";
    // Must be last.
    PromoCardMetricId[PromoCardMetricId["COUNT"] = 6] = "COUNT";
})(PromoCardMetricId || (PromoCardMetricId = {}));
function recordPromoCardAction(card) {
    chrome.metricsPrivate.recordEnumerationValue('PasswordManager.PromoCard.ActionButtonClicked', card, PromoCardMetricId.COUNT);
}
const isOpenedAsShortcut = window.matchMedia('(display-mode: standalone)');
class PromoCardElement extends PolymerElement {
    static get is() {
        return 'promo-card';
    }
    static get template() {
        return getTemplate$f();
    }
    static get properties() {
        return {
            promoCard: Object,
        };
    }
    connectedCallback() {
        super.connectedCallback();
        // If this is a shortcut promo we should listen to display mode changes to
        // close it automatically when shortcut is installed from another place.
        // Check crbug.com/1493264 for more details when it can happen.
        if (this.promoCard.id === PromoCardId.SHORTCUT) {
            isOpenedAsShortcut.addEventListener('change', this.close_.bind(this));
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.promoCard.id === PromoCardId.SHORTCUT) {
            isOpenedAsShortcut.removeEventListener('change', this.close_.bind(this));
        }
    }
    getDescription_() {
        return sanitizeInnerHtml(this.promoCard.description);
    }
    onActionButtonClick_() {
        switch (this.promoCard.id) {
            case PromoCardId.CHECKUP:
                const params = new URLSearchParams();
                params.set(UrlParam.START_CHECK, 'true');
                Router.getInstance().navigateTo(Page.CHECKUP, null, params);
                recordPromoCardAction(PromoCardMetricId.CHECKUP);
                break;
            case PromoCardId.SHORTCUT:
                PasswordManagerImpl.getInstance().showAddShortcutDialog();
                recordPromoCardAction(PromoCardMetricId.SHORTCUT);
                break;
            case PromoCardId.RELAUNCH_CHROME:
                chrome.send('restartBrowser');
                recordPromoCardAction(PromoCardMetricId.RELAUNCH_CHROME);
                break;
            case PromoCardId.MOVE_PASSWORDS:
                this.dispatchEvent(new CustomEvent('move-passwords-clicked', { bubbles: true, composed: true }));
                recordPromoCardAction(PromoCardMetricId.MOVE_PASSWORDS);
                return;
            default:
                assertNotReached();
        }
        this.close_();
    }
    onCloseClick_() {
        PromoCardsProxyImpl.getInstance().recordPromoDismissed(this.promoCard.id);
        this.close_();
    }
    close_() {
        this.dispatchEvent(new CustomEvent('promo-closed', { bubbles: true, composed: true }));
    }
}
customElements.define(PromoCardElement.is, PromoCardElement);

function getTemplate$e() {
    return html `<!--_html_template_start_--><style include="shared-style cr-shared-style iron-flex">#header{align-items:center;display:flex}a[href]{color:var(--cr-link-color)}#addPasswordButton{height:auto;padding:3px 16px}#passwords{margin-top:20px}promo-card{margin-bottom:24px;margin-top:24px}password-list-item:first-of-type{border-top-left-radius:inherit;border-top-right-radius:inherit}password-list-item:last-of-type{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}</style>
<template is="dom-if" if="[[shouldShowPromoCard_]]" restamp>
  <promo-card id="promoCard" class="card" promo-card="[[promoCard_]]" on-promo-closed="onPromoClosed_" on-move-passwords-clicked="onMovePasswordsClicked_">
  </promo-card>
</template>
<div id="header">
  <h2 class="flex page-title">$i18n{passwords}</h2>
  <cr-button id="addPasswordButton" on-click="onAddPasswordClick_" title="$i18n{addPasswordTitle}" hidden="[[passwordManagerDisabled_]]">
    $i18n{addPassword}
  </cr-button>
</div>
<div id="descriptionLabel" class="cr-secondary-text" hidden="[[!showPasswordsDescription_]]" inner-h-t-m-l="[[i18nAdvanced('passwordsSectionDescription')]]">
</div>
<div id="movePasswords" class="cr-secondary-text" hidden="[[!showMovePasswords_]]" on-click="onMovePasswordsClicked_" inner-h-t-m-l="[[getMovePasswordsText_(movePasswordsText_)]]">
</div>
<div id="importPasswords" class="cr-secondary-text" hidden="[[!showImportPasswordsOption_(groups_, passwordManagerDisabled_)]]" inner-h-t-m-l="[[importPasswordsText_]]">
</div>
<div id="noPasswordsFound" class="cr-secondary-text" hidden="[[!showNoPasswordsFound_(groups_, searchTerm_)]]">
  $i18n{noPasswordsFound}
</div>
<div class="card" id="passwords" role="list" hidden$="[[hideGroupsList_(groups_, searchTerm_)]]" aria-label="$i18n{passwordListAriaLabel}">
  <template id="passwordsList" is="dom-repeat" initial-count="50" items="[[groups_]]" filter="[[groupFilter_(searchTerm_)]]" rendered-item-count="{{shownGroupsCount_::dom-change}}" sort="[[computeSortFunction_(searchTerm_)]]">
    <password-list-item item="[[item]]" first="[[!index]]" is-account-store-user="[[isAccountStoreUser]]" on-password-details-shown="onPasswordDetailsShown_" search-term="[[searchTerm_]]" role="listitem">
    </password-list-item>
  </template>
</div>
<template is="dom-if" if="[[showAddPasswordDialog_]]" restamp>
  <add-password-dialog on-close="onAddPasswordDialogClose_" id="addPasswordDialog">
  </add-password-dialog>
</template>
<template is="dom-if" if="[[showAuthTimedOutDialog_]]" restamp>
  <auth-timed-out-dialog on-close="onAuthTimedOutDialogClose_" id="authTimedOutDialog">
  </auth-timed-out-dialog>
</template>
<template is="dom-if" if="[[showMovePasswordsDialog_]]" restamp>
  <move-passwords-dialog on-close="onMovePasswordsDialogClose_" id="movePasswordsDialog" passwords="[[passwordsOnDevice_]]" trigger="[[getMovePasswordsDialogTrigger_()]]">
  </move-passwords-dialog>
</template>
<!--_html_template_end_-->`;
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PasswordsSectionElementBase = PrefsMixin(UserUtilMixin(RouteObserverMixin(I18nMixin(PolymerElement))));
class PasswordsSectionElement extends PasswordsSectionElementBase {
    constructor() {
        super(...arguments);
        this.groups_ = [];
        this.setSavedPasswordsListener_ = null;
    }
    static get is() {
        return 'passwords-section';
    }
    static get template() {
        return getTemplate$e();
    }
    static get properties() {
        return {
            focusConfig: {
                type: Object,
                observer: 'focusConfigChanged_',
            },
            /**
             * Password groups displayed in the UI.
             */
            groups_: {
                type: Array,
                value: () => [],
                observer: 'onGroupsChanged_',
            },
            /** Filter on the saved passwords and exceptions. */
            searchTerm_: {
                type: String,
                value: '',
            },
            shownGroupsCount_: {
                type: Number,
                value: 0,
                observer: 'announceSearchResults_',
            },
            showAddPasswordDialog_: Boolean,
            showAuthTimedOutDialog_: Boolean,
            showMovePasswordsDialog_: Boolean,
            movePasswordsText_: String,
            importPasswordsText_: {
                type: String,
                computed: 'computeImportPasswordsText_(isAccountStoreUser, ' +
                    'isSyncingPasswords, accountEmail)',
            },
            passwordsOnDevice_: {
                type: Array,
                computed: 'computePasswordsOnDevice_(groups_)',
            },
            showMovePasswords_: {
                type: Boolean,
                computed: 'computeShowMovePasswords_(isAccountStoreUser, ' +
                    'passwordsOnDevice_, searchTerm_)',
            },
            showPasswordsDescription_: {
                type: Boolean,
                computed: 'computeShowPasswordsDescription_(groups_, searchTerm_)',
            },
            promoCard_: {
                type: Object,
                value: null,
            },
            passwordManagerDisabled_: {
                type: Boolean,
                computed: 'computePasswordManagerDisabled_(' +
                    'prefs.credentials_enable_service.enforcement, ' +
                    'prefs.credentials_enable_service.value)',
            },
            enableButterOnDesktopFollowup_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('enableButterOnDesktopFollowup');
                },
            },
            shouldShowPromoCard_: {
                type: Boolean,
                computed: 'computeShouldShowPromoCard_(' +
                    'promoCard_, isAccountStoreUser, passwordsOnDevice_)',
            },
            /**
             * The element to return focus to, when moving from details page to
             * passwords page.
             */
            activeListItem_: { type: Object, value: null },
        };
    }
    static get observers() {
        return [
            'updateImportPasswordsLink_(importPasswordsText_)',
        ];
    }
    connectedCallback() {
        super.connectedCallback();
        const updateGroups = () => {
            PasswordManagerImpl.getInstance().getCredentialGroups().then(groups => this.groups_ = groups);
        };
        this.setSavedPasswordsListener_ = _passwordList => {
            if (_passwordList.length === 0 &&
                this.promoCard_?.id === PromoCardId.CHECKUP) {
                this.promoCard_ = null;
            }
            updateGroups();
        };
        updateGroups();
        PasswordManagerImpl.getInstance().addSavedPasswordListChangedListener(this.setSavedPasswordsListener_);
        PromoCardsProxyImpl.getInstance().getAvailablePromoCard().then(promo => this.promoCard_ = promo);
        this.authTimedOutListener_ = this.onAuthTimedOut_.bind(this);
        window.addEventListener('auth-timed-out', this.authTimedOutListener_);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        assert(this.setSavedPasswordsListener_);
        PasswordManagerImpl.getInstance().removeSavedPasswordListChangedListener(this.setSavedPasswordsListener_);
        this.setSavedPasswordsListener_ = null;
        assert(this.authTimedOutListener_);
        window.removeEventListener('hashchange', this.authTimedOutListener_);
        this.authTimedOutListener_ = null;
    }
    currentRouteChanged(newRoute) {
        const searchTerm = newRoute.queryParameters.get(UrlParam.SEARCH_TERM) || '';
        if (searchTerm !== this.searchTerm_) {
            this.searchTerm_ = searchTerm;
        }
    }
    focusFirstResult() {
        if (!this.searchTerm_) {
            // If search term is empty don't do anything.
            return;
        }
        const result = this.shadowRoot.querySelector('password-list-item');
        if (result) {
            result.focus();
        }
    }
    hideGroupsList_() {
        return this.groups_.filter(this.groupFilter_()).length === 0;
    }
    groupFilter_() {
        const term = this.searchTerm_.trim().toLowerCase();
        // Group is matching if:
        // * group name includes term,
        // * any credential's username within a group includes a term,
        // * any credential within a group includes a term in a domain.
        return group => group.name.toLowerCase().includes(term) ||
            group.entries.some(credential => credential.username.toLowerCase().includes(term) ||
                credential.affiliatedDomains?.some(domain => domain.name.toLowerCase().includes(term)));
    }
    async announceSearchResults_() {
        if (!this.searchTerm_.trim()) {
            return;
        }
        const searchResult = await PluralStringProxyImpl.getInstance().getPluralString('searchResults', this.shownGroupsCount_);
        getInstance().announce(searchResult);
    }
    onAddPasswordClick_() {
        this.showAddPasswordDialog_ = true;
    }
    onAddPasswordDialogClose_() {
        this.showAddPasswordDialog_ = false;
    }
    onAuthTimedOut_() {
        this.showAuthTimedOutDialog_ = true;
    }
    onAuthTimedOutDialogClose_() {
        this.showAuthTimedOutDialog_ = false;
    }
    computePasswordsOnDevice_() {
        const localStorage = [
            chrome.passwordsPrivate.PasswordStoreSet.DEVICE_AND_ACCOUNT,
            chrome.passwordsPrivate.PasswordStoreSet.DEVICE,
        ];
        return this.groups_.map(group => group.entries)
            .flat()
            .filter(entry => localStorage.includes(entry.storedIn));
    }
    computeShowMovePasswords_() {
        // Should not show the old entry to move passwords if followup for the
        // butter on desktop feature is enabled.
        if (this.enableButterOnDesktopFollowup_) {
            return false;
        }
        return this.computePasswordsOnDevice_().length > 0 &&
            this.isAccountStoreUser && !this.searchTerm_;
    }
    async onGroupsChanged_() {
        this.movePasswordsText_ =
            await PluralStringProxyImpl.getInstance().getPluralString('movePasswords', this.computePasswordsOnDevice_().length);
    }
    getMovePasswordsText_() {
        return sanitizeInnerHtml(this.movePasswordsText_);
    }
    onMovePasswordsClicked_(e) {
        e.preventDefault();
        this.showMovePasswordsDialog_ = true;
    }
    onMovePasswordsDialogClose_() {
        this.showMovePasswordsDialog_ = false;
    }
    showImportPasswordsOption_() {
        if (!this.groups_ || this.passwordManagerDisabled_) {
            return false;
        }
        return this.groups_.length === 0;
    }
    computeImportPasswordsText_() {
        if (this.isAccountStoreUser) {
            return this.i18nAdvanced('emptyStateImportAccountStore');
        }
        if (this.isSyncingPasswords) {
            return this.i18nAdvanced('emptyStateImportSyncing', {
                substitutions: [
                    this.i18n('localPasswordManager'),
                    this.accountEmail,
                ],
            });
        }
        return this.i18nAdvanced('emptyStateImportDevice');
    }
    updateImportPasswordsLink_() {
        const importLink = this.$.importPasswords.querySelector('a');
        // Add an event listener to the import link, points to the import flow.
        assert(importLink);
        importLink.addEventListener('click', (event) => {
            // The action is triggered from a dummy anchor element poining to "#".
            // For that case preventing the default behaviour is required here.
            event.preventDefault();
            const params = new URLSearchParams();
            params.set(UrlParam.START_IMPORT, 'true');
            Router.getInstance().navigateTo(Page.SETTINGS, null, params);
        });
    }
    onPromoClosed_() {
        this.promoCard_ = null;
    }
    computePasswordManagerDisabled_() {
        const pref = this.getPref('credentials_enable_service');
        return pref.enforcement === chrome.settingsPrivate.Enforcement.ENFORCED &&
            !pref.value;
    }
    computeShowPasswordsDescription_() {
        return !this.searchTerm_ && this.groups_.length > 0;
    }
    showNoPasswordsFound_() {
        return this.hideGroupsList_() && this.groups_.length > 0;
    }
    getMovePasswordsDialogTrigger_() {
        return MoveToAccountStoreTrigger
            .EXPLICITLY_TRIGGERED_FOR_MULTIPLE_PASSWORDS_IN_SETTINGS;
    }
    onPasswordDetailsShown_(e) {
        this.activeListItem_ = e.detail;
    }
    focusConfigChanged_(_newConfig, oldConfig) {
        // focusConfig is set only once on the parent, so this observer should
        // only fire once.
        assert(!oldConfig);
        this.focusConfig.set(Page.PASSWORD_DETAILS, () => {
            if (!this.activeListItem_) {
                return;
            }
            focusWithoutInk(this.activeListItem_);
        });
    }
    computeSortFunction_(searchTerm) {
        // Keep current order when not searching.
        if (!searchTerm) {
            return null;
        }
        // Always show group with matching name in the top, fallback to alphabetical
        // order when matching type is the same.
        return function (a, b) {
            const doesNameMatchA = a.name.toLowerCase().includes(searchTerm);
            const doesNameMatchB = b.name.toLowerCase().includes(searchTerm);
            if (doesNameMatchA === doesNameMatchB) {
                return a.name.localeCompare(b.name);
            }
            return doesNameMatchA ? -1 : 1;
        };
    }
    computeShouldShowPromoCard_() {
        if (!this.promoCard_) {
            return false;
        }
        if (this.promoCard_.id !== PromoCardId.MOVE_PASSWORDS) {
            return true;
        }
        // Check if there are local passwords and they can be moved to account.
        if (this.computePasswordsOnDevice_().length === 0 ||
            !this.isAccountStoreUser) {
            return false;
        }
        return true;
    }
}
customElements.define(PasswordsSectionElement.is, PasswordsSectionElement);

function getTemplate$d() {
    return html `<!--_html_template_start_-->    <style>:host{--cr-toggle-checked-bar-color:var(--google-blue-600);--cr-toggle-checked-button-color:var(--google-blue-600);--cr-toggle-checked-ripple-color:rgba(var(--google-blue-600-rgb), .2);--cr-toggle-ripple-diameter:40px;--cr-toggle-unchecked-bar-color:var(--google-grey-400);--cr-toggle-unchecked-button-color:white;--cr-toggle-unchecked-ripple-color:rgba(var(--google-grey-600-rgb), .15);-webkit-tap-highlight-color:transparent;cursor:pointer;display:block;min-width:34px;outline:0;position:relative;width:34px}:host-context([chrome-refresh-2023]):host{--cr-toggle-checked-bar-color:var(--color-toggle-button-track-on,
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
<!--_html_template_end_-->`;
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Number of pixels required to move to consider the pointermove event as
 * intentional.
 */
const MOVE_THRESHOLD_PX = 5;
const CrToggleElementBase = PaperRippleMixin(PolymerElement);
class CrToggleElement extends CrToggleElementBase {
    constructor() {
        super(...arguments);
        this.boundPointerMove_ = null;
        /**
         * Whether the state of the toggle has already taken into account by
         * |pointeremove| handlers. Used in the 'click' handler.
         */
        this.handledInPointerMove_ = false;
        this.pointerDownX_ = 0;
    }
    static get is() {
        return 'cr-toggle';
    }
    static get template() {
        return getTemplate$d();
    }
    static get properties() {
        return {
            checked: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
                observer: 'checkedChanged_',
                notify: true,
            },
            dark: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            disabled: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
                observer: 'disabledChanged_',
            },
        };
    }
    ready() {
        super.ready();
        if (!this.hasAttribute('role')) {
            this.setAttribute('role', 'button');
        }
        if (!this.hasAttribute('tabindex')) {
            this.setAttribute('tabindex', '0');
        }
        this.setAttribute('aria-pressed', this.checked ? 'true' : 'false');
        this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
        if (!document.documentElement.hasAttribute('chrome-refresh-2023')) {
            this.addEventListener('blur', this.hideRipple_.bind(this));
            this.addEventListener('focus', this.onFocus_.bind(this));
        }
        this.addEventListener('click', this.onClick_.bind(this));
        this.addEventListener('keydown', this.onKeyDown_.bind(this));
        this.addEventListener('keyup', this.onKeyUp_.bind(this));
        this.addEventListener('pointerdown', this.onPointerDown_.bind(this));
        this.addEventListener('pointerup', this.onPointerUp_.bind(this));
    }
    connectedCallback() {
        super.connectedCallback();
        const direction = this.matches(':host-context([dir=rtl]) cr-toggle') ? -1 : 1;
        this.boundPointerMove_ = (e) => {
            // Prevent unwanted text selection to occur while moving the pointer, this
            // is important.
            e.preventDefault();
            const diff = e.clientX - this.pointerDownX_;
            if (Math.abs(diff) < MOVE_THRESHOLD_PX) {
                return;
            }
            this.handledInPointerMove_ = true;
            const shouldToggle = (diff * direction < 0 && this.checked) ||
                (diff * direction > 0 && !this.checked);
            if (shouldToggle) {
                this.toggleState_(/* fromKeyboard= */ false);
            }
        };
    }
    checkedChanged_() {
        this.setAttribute('aria-pressed', this.checked ? 'true' : 'false');
    }
    disabledChanged_() {
        this.setAttribute('tabindex', this.disabled ? '-1' : '0');
        this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
    }
    onFocus_() {
        this.getRipple().showAndHoldDown();
    }
    hideRipple_() {
        this.getRipple().clear();
    }
    onPointerUp_() {
        assert(this.boundPointerMove_);
        this.removeEventListener('pointermove', this.boundPointerMove_);
        this.hideRipple_();
    }
    onPointerDown_(e) {
        // Don't do anything if this was not a primary button click or touch event.
        if (e.button !== 0) {
            return;
        }
        // This is necessary to have follow up pointer events fire on |this|, even
        // if they occur outside of its bounds.
        this.setPointerCapture(e.pointerId);
        this.pointerDownX_ = e.clientX;
        this.handledInPointerMove_ = false;
        assert(this.boundPointerMove_);
        this.addEventListener('pointermove', this.boundPointerMove_);
    }
    onClick_(e) {
        // Prevent |click| event from bubbling. It can cause parents of this
        // elements to erroneously re-toggle this control.
        e.stopPropagation();
        e.preventDefault();
        // User gesture has already been taken care of inside |pointermove|
        // handlers, Do nothing here.
        if (this.handledInPointerMove_) {
            return;
        }
        // If no pointermove event fired, then user just clicked on the
        // toggle button and therefore it should be toggled.
        this.toggleState_(/* fromKeyboard= */ false);
    }
    toggleState_(fromKeyboard) {
        // Ignore cases where the 'click' or 'keypress' handlers are triggered while
        // disabled.
        if (this.disabled) {
            return;
        }
        if (!fromKeyboard) {
            this.hideRipple_();
        }
        this.checked = !this.checked;
        this.dispatchEvent(new CustomEvent('change', { bubbles: true, composed: true, detail: this.checked }));
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
            this.toggleState_(/* fromKeyboard= */ true);
        }
    }
    onKeyUp_(e) {
        if (e.key !== ' ' && e.key !== 'Enter') {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        if (e.key === ' ') {
            this.toggleState_(/* fromKeyboard= */ true);
        }
    }
    // Overridden from PaperRippleMixin
    /* eslint-disable-next-line @typescript-eslint/naming-convention */
    _createRipple() {
        this._rippleContainer = this.$.knob;
        const ripple = super._createRipple();
        ripple.id = 'ink';
        ripple.setAttribute('recenters', '');
        ripple.classList.add('circle', 'toggle-ink');
        return ripple;
    }
}
customElements.define(CrToggleElement.is, CrToggleElement);

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Mixin for policy controlled indicators.
 * TODO(michaelpg): Since extensions can also control settings and be indicated,
 * rework the "policy" naming scheme throughout this directory.
 */
/**
 * Possible policy indicators that can be shown in settings.
 */
var CrPolicyIndicatorType;
(function (CrPolicyIndicatorType) {
    CrPolicyIndicatorType["DEVICE_POLICY"] = "devicePolicy";
    CrPolicyIndicatorType["EXTENSION"] = "extension";
    CrPolicyIndicatorType["NONE"] = "none";
    CrPolicyIndicatorType["OWNER"] = "owner";
    CrPolicyIndicatorType["PRIMARY_USER"] = "primary_user";
    CrPolicyIndicatorType["RECOMMENDED"] = "recommended";
    CrPolicyIndicatorType["USER_POLICY"] = "userPolicy";
    CrPolicyIndicatorType["PARENT"] = "parent";
    CrPolicyIndicatorType["CHILD_RESTRICTION"] = "childRestriction";
})(CrPolicyIndicatorType || (CrPolicyIndicatorType = {}));
const CrPolicyIndicatorMixin = dedupingMixin((superClass) => {
    class CrPolicyIndicatorMixin extends superClass {
        // Properties exposed to all policy indicators.
        static get properties() {
            return {
                /**
                 * Which indicator type to show (or NONE).
                 */
                indicatorType: {
                    type: String,
                    value: CrPolicyIndicatorType.NONE,
                },
                /**
                 * The name associated with the policy source. See
                 * chrome.settingsPrivate.PrefObject.controlledByName.
                 */
                indicatorSourceName: {
                    type: String,
                    value: '',
                },
                // Computed properties based on indicatorType and
                // indicatorSourceName. Override to provide different values.
                indicatorVisible: {
                    type: Boolean,
                    computed: 'getIndicatorVisible_(indicatorType)',
                },
                indicatorIcon: {
                    type: String,
                    computed: 'getIndicatorIcon_(indicatorType)',
                },
            };
        }
        /**
         * @return True if the indicator should be shown.
         */
        getIndicatorVisible_(type) {
            return type !== CrPolicyIndicatorType.NONE;
        }
        /**
         * @return {string} The iron-icon icon name.
         */
        getIndicatorIcon_(type) {
            switch (type) {
                case CrPolicyIndicatorType.EXTENSION:
                    return 'cr:extension';
                case CrPolicyIndicatorType.NONE:
                    return '';
                case CrPolicyIndicatorType.PRIMARY_USER:
                    return 'cr:group';
                case CrPolicyIndicatorType.OWNER:
                    return 'cr:person';
                case CrPolicyIndicatorType.USER_POLICY:
                case CrPolicyIndicatorType.DEVICE_POLICY:
                case CrPolicyIndicatorType.RECOMMENDED:
                    return 'cr20:domain';
                case CrPolicyIndicatorType.PARENT:
                case CrPolicyIndicatorType.CHILD_RESTRICTION:
                    return 'cr20:kite';
                default:
                    assertNotReached();
            }
        }
        /**
         * @param name The name associated with the indicator. See
         *     chrome.settingsPrivate.PrefObject.controlledByName
         * @param matches For RECOMMENDED only, whether the indicator
         *     value matches the recommended value.
         * @return The tooltip text for |type|.
         */
        getIndicatorTooltip(type, name, matches) {
            if (!window.CrPolicyStrings) {
                return '';
            } // Tooltips may not be defined, e.g. in OOBE.
            const CrPolicyStrings = window.CrPolicyStrings;
            switch (type) {
                case CrPolicyIndicatorType.EXTENSION:
                    return name.length > 0 ?
                        CrPolicyStrings.controlledSettingExtension.replace('$1', name) :
                        CrPolicyStrings.controlledSettingExtensionWithoutName;
                // 
                case CrPolicyIndicatorType.PRIMARY_USER:
                    return CrPolicyStrings.controlledSettingShared.replace('$1', name);
                case CrPolicyIndicatorType.OWNER:
                    return name.length > 0 ?
                        CrPolicyStrings.controlledSettingWithOwner.replace('$1', name) :
                        CrPolicyStrings.controlledSettingNoOwner;
                // 
                case CrPolicyIndicatorType.USER_POLICY:
                case CrPolicyIndicatorType.DEVICE_POLICY:
                    return CrPolicyStrings.controlledSettingPolicy;
                case CrPolicyIndicatorType.RECOMMENDED:
                    return matches ?
                        CrPolicyStrings.controlledSettingRecommendedMatches :
                        CrPolicyStrings.controlledSettingRecommendedDiffers;
                case CrPolicyIndicatorType.PARENT:
                    return CrPolicyStrings.controlledSettingParent;
                case CrPolicyIndicatorType.CHILD_RESTRICTION:
                    return CrPolicyStrings.controlledSettingChildRestriction;
            }
            return '';
        }
    }
    return CrPolicyIndicatorMixin;
});

function getTemplate$c() {
    return html `<!--_html_template_start_-->    <style include="cr-hidden-style"></style>
    <cr-tooltip-icon id="tooltipIcon" hidden$="[[!indicatorVisible]]" tooltip-text="[[indicatorTooltip]]" icon-class="[[indicatorIcon]]" icon-aria-label="[[iconAriaLabel]]" exportparts="tooltip">
    </cr-tooltip-icon>
<!--_html_template_end_-->`;
}

// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element for indicating policies that apply to an
 * element controlling a settings preference.
 */
const CrPolicyPrefIndicatorElementBase = CrPolicyIndicatorMixin(PolymerElement);
class CrPolicyPrefIndicatorElement extends CrPolicyPrefIndicatorElementBase {
    static get is() {
        return 'cr-policy-pref-indicator';
    }
    static get template() {
        return getTemplate$c();
    }
    static get properties() {
        return {
            iconAriaLabel: String,
            indicatorType: {
                type: String,
                value: CrPolicyIndicatorType.NONE,
                computed: 'getIndicatorTypeForPref_(pref.*, associatedValue)',
            },
            indicatorTooltip: {
                type: String,
                computed: 'getIndicatorTooltipForPref_(indicatorType, pref.*)',
            },
            /**
             * Optional preference object associated with the indicator. Initialized
             * to null so that computed functions will get called if this is never
             * set.
             */
            pref: Object,
            /**
             * Optional value for the preference value this indicator is associated
             * with. If this is set, no indicator will be shown if it is a member
             * of |pref.userSelectableValues| and is not |pref.recommendedValue|.
             */
            associatedValue: Object,
        };
    }
    /**
     * @return The indicator type based on |pref| and |associatedValue|.
     */
    getIndicatorTypeForPref_() {
        assert(this.pref);
        const { enforcement, userSelectableValues, controlledBy, recommendedValue } = this.pref;
        if (enforcement === chrome.settingsPrivate.Enforcement.RECOMMENDED) {
            if (this.associatedValue !== undefined &&
                this.associatedValue !== recommendedValue) {
                return CrPolicyIndicatorType.NONE;
            }
            return CrPolicyIndicatorType.RECOMMENDED;
        }
        if (enforcement === chrome.settingsPrivate.Enforcement.ENFORCED) {
            // An enforced preference may also have some values still available for
            // the user to select from.
            if (userSelectableValues !== undefined) {
                if (recommendedValue && this.associatedValue === recommendedValue) {
                    return CrPolicyIndicatorType.RECOMMENDED;
                }
                else if (userSelectableValues.includes(this.associatedValue)) {
                    return CrPolicyIndicatorType.NONE;
                }
            }
            switch (controlledBy) {
                case chrome.settingsPrivate.ControlledBy.EXTENSION:
                    return CrPolicyIndicatorType.EXTENSION;
                case chrome.settingsPrivate.ControlledBy.PRIMARY_USER:
                    return CrPolicyIndicatorType.PRIMARY_USER;
                case chrome.settingsPrivate.ControlledBy.OWNER:
                    return CrPolicyIndicatorType.OWNER;
                case chrome.settingsPrivate.ControlledBy.USER_POLICY:
                    return CrPolicyIndicatorType.USER_POLICY;
                case chrome.settingsPrivate.ControlledBy.DEVICE_POLICY:
                    return CrPolicyIndicatorType.DEVICE_POLICY;
                case chrome.settingsPrivate.ControlledBy.PARENT:
                    return CrPolicyIndicatorType.PARENT;
                case chrome.settingsPrivate.ControlledBy.CHILD_RESTRICTION:
                    return CrPolicyIndicatorType.CHILD_RESTRICTION;
            }
        }
        if (enforcement === chrome.settingsPrivate.Enforcement.PARENT_SUPERVISED) {
            return CrPolicyIndicatorType.PARENT;
        }
        return CrPolicyIndicatorType.NONE;
    }
    /**
     * @return The tooltip text for |indicatorType|.
     */
    getIndicatorTooltipForPref_() {
        if (!this.pref) {
            return '';
        }
        const matches = this.pref && this.pref.value === this.pref.recommendedValue;
        return this.getIndicatorTooltip(this.indicatorType, this.pref.controlledByName || '', matches);
    }
    getFocusableElement() {
        return this.$.tooltipIcon.getFocusableElement();
    }
}
customElements.define(CrPolicyPrefIndicatorElement.is, CrPolicyPrefIndicatorElement);

function getTemplate$b() {
    return html `<!--_html_template_start_--><style include="cr-actionable-row-style iron-flex cr-shared-style shared-style">:host{--cr-icon-button-margin-end:20px;padding:0 var(--cr-section-padding)}#outerRow{align-items:center;display:flex;min-height:var(--two-line-section-min-height);width:100%}#outerRow[noSubLabel]{min-height:var(--section-min-height)}#labelWrapper{margin-inline-end:var(--control-label-spacing);padding:var(--cr-section-vertical-padding) 0}cr-policy-pref-indicator{margin-inline-end:var(--cr-controlled-by-spacing)}</style>
<div id="outerRow" nosublabel$="[[!subLabel]]">
  <div class="flex" id="labelWrapper">
    <div class="label" aria-hidden="true">[[label]]</div>
    <div class="cr-secondary-text label" id="sub-label" hidden="[[!subLabel]]">
      <span id="sub-label-text" aria-hidden="true">
        [[subLabel]]
      </span>
    </div>
  </div>
  <template is="dom-if" if="[[hasPrefPolicyIndicator_(pref.*)]]">
    <cr-policy-pref-indicator pref="[[pref]]" icon-aria-label="[[label]]">
    </cr-policy-pref-indicator>
  </template>
  <cr-toggle id="control" checked="{{checked}}" disabled="[[controlDisabled_(pref.*, disabled)]]" on-change="onToggleClick_" aria-label="[[getAriaLabel_(label, subLabel)]]">
  </cr-toggle>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * `pref-toggle-button` is a toggle that controls a supplied preference.
 */
class PrefToggleButtonElement extends PolymerElement {
    static get is() {
        return 'pref-toggle-button';
    }
    static get template() {
        return getTemplate$b();
    }
    static get properties() {
        return {
            /** The main label. */
            label: {
                type: String,
                value: '',
            },
            /** Additional (optional) sub-label. */
            subLabel: {
                type: String,
                value: '',
            },
            /** Whether the control is checked. */
            checked: {
                type: Boolean,
                value: false,
                notify: true,
                reflectToAttribute: true,
            },
            /**
             * Whether the control is disabled, for example due to an extension
             * managing the preference.
             */
            disabled: {
                type: Boolean,
                value: false,
            },
            /**
             * If true, do not automatically set the preference value on user click.
             * Confirm the change first then call either sendPrefChange or
             * resetToPrefValue accordingly.
             */
            changeRequiresValidation: {
                type: Boolean,
                value: false,
            },
            noExtensionIndicator: Boolean,
            pref: Object,
        };
    }
    static get observers() {
        return [
            'prefValueChanged_(pref.value)',
            'prefEnforcementChanged_(pref.enforcement)',
        ];
    }
    ready() {
        super.ready();
        this.addEventListener('click', this.onClick_);
    }
    /**
     * Handles non cr-toggle button clicks (cr-toggle handles its own click events
     * which don't bubble).
     */
    onClick_(e) {
        e.stopPropagation();
        if (this.disabled) {
            return;
        }
        if (this.changeRequiresValidation) {
            this.dispatchEvent(new CustomEvent('validate-and-change-pref', { bubbles: true, composed: true }));
            return;
        }
        this.checked = !this.checked;
        this.updatePrefValue_();
    }
    onToggleClick_() {
        if (this.changeRequiresValidation) {
            this.checked = !this.checked;
            this.dispatchEvent(new CustomEvent('validate-and-change-pref', { bubbles: true, composed: true }));
            return;
        }
        this.updatePrefValue_();
    }
    prefValueChanged_(prefValue) {
        this.checked = prefValue;
    }
    prefEnforcementChanged_(enforcement) {
        this.disabled =
            (enforcement === chrome.settingsPrivate.Enforcement.ENFORCED);
        // Ensure the `cr-actionable-row-style` is informed of the state of the
        // control.
        this.toggleAttribute('effectively-disabled_', this.disabled);
    }
    /** Update the pref to the current |checked| value. */
    updatePrefValue_() {
        this.set('pref.value', this.checked);
    }
    getAriaLabel_() {
        if (!this.subLabel) {
            return this.label;
        }
        return [this.label, this.subLabel].join('. ');
    }
    isPrefEnforced_() {
        return !!this.pref &&
            this.pref.enforcement === chrome.settingsPrivate.Enforcement.ENFORCED;
    }
    hasPrefPolicyIndicator_() {
        if (!this.pref) {
            return false;
        }
        if (this.noExtensionIndicator &&
            this.pref.controlledBy ===
                chrome.settingsPrivate.ControlledBy.EXTENSION) {
            return false;
        }
        return this.isPrefEnforced_() ||
            chrome.settingsPrivate.Enforcement.RECOMMENDED ===
                this.pref.enforcement;
    }
    controlDisabled_() {
        return this.disabled || this.isPrefEnforced_() ||
            !!(this.pref && this.pref.userControlDisabled);
    }
}
customElements.define(PrefToggleButtonElement.is, PrefToggleButtonElement);

const styleMod$1 = document.createElement('dom-module');
styleMod$1.appendChild(html `
  <template>
    <style>
:host-context([cros]) a:not(.item)[href]{color:var(--cros-link-color)}:host-context([cros]) cr-button[has-prefix-icon_],:host-context([cros]) cr-button[has-suffix-icon_]{--iron-icon-fill-color:currentColor}:host-context([cros]) cr-dialog::part(dialog){--cr-dialog-background-color:var(--cros-bg-color-elevation-3);background-image:none;box-shadow:var(--cros-elevation-3-shadow)}:host-context([cros]) cr-radio-button{--cr-radio-button-checked-color:var(--cros-radio-button-color);--cr-radio-button-checked-ripple-color:var(--cros-radio-button-ripple-color);--cr-radio-button-unchecked-color:var(--cros-radio-button-color-unchecked);--cr-radio-button-unchecked-ripple-color:var(--cros-radio-button-ripple-color-unchecked)}:host-context([cros]) cr-toast{--cr-toast-background-color:var(--cros-toast-background-color);--cr-toast-background:var(--cros-toast-background-color);--cr-toast-text-color:var(--cros-toast-text-color);--iron-icon-fill-color:var(--cros-toast-icon-color)}:host-context([cros]) cr-toast .error-message{color:var(--cros-toast-text-color)}:host-context([cros]) cr-toggle{--cr-toggle-checked-bar-color:var(--cros-switch-track-color-active);--cr-toggle-checked-bar-opacity:100%;--cr-toggle-checked-button-color:var(--cros-switch-knob-color-active);--cr-toggle-checked-ripple-color:var(--cros-focus-aura-color);--cr-toggle-unchecked-bar-color:var(--cros-switch-track-color-inactive);--cr-toggle-unchecked-button-color:var(--cros-switch-knob-color-inactive);--cr-toggle-unchecked-ripple-color:var(--cros-ripple-color);--cr-toggle-box-shadow:var(--cros-elevation-1-shadow);--cr-toggle-ripple-diameter:32px}:host-context([cros]):host-context(.focus-outline-visible) cr-toggle:focus{--cr-toggle-ripple-ring:2px solid var(--cros-focus-ring-color)}:host-context([cros]) paper-spinner-lite{--paper-spinner-color:var(--cros-icon-color-prominent)}:host-context([cros]) cr-tooltip-icon{--cr-link-color:var(--cros-tooltip-link-color)}:host-context(body.jelly-enabled){--cros-button-label-color-primary:var(--cros-sys-on_primary);--cros-link-color:var(--cros-sys-primary);--cros-separator-color:var(--cros-sys-separator);--cros-tab-slider-track-color:var(--cros-sys-surface_variant, 80%);--cr-form-field-label-color:var(--cros-sys-on_surface);--cr-link-color:var(--cros-sys-primary);--cr-primary-text-color:var(--cros-sys-on_surface);--cr-secondary-text-color:var(--cros-sys-on_surface_variant)}:host-context([cros][chrome-refresh-2023]){--cr-focus-outline-color:var(--cros-sys-focus_ring);--cr-disabled-opacity:var(--cros-disabled-opacity)}:host-context(body.jelly-enabled) cr-button{--text-color:var(--cros-sys-on_primary_container);--ink-color:var(--cros-sys-ripple_primary);--iron-icon-fill-color:currentColor;--hover-bg-color:var(--cros-sys-hover_on_subtle);--ripple-opacity:.1;--bg-action:var(--cros-sys-primary);--ink-color-action:var(--cros-sys-ripple_primary);--text-color-action:var(--cros-sys-on_primary);--hover-bg-action:var(--cros-sys-hover_on_prominent);--ripple-opacity-action:1;--disabled-bg:var(--cros-sys-disabled_container);--disabled-bg-action:var(--cros-sys-disabled_container);--disabled-text-color:var(--cros-sys-disabled);background-color:var(--cros-sys-primary_container);border:none}:host-context(body.jelly-enabled) cr-button:hover::part(hoverBackground){background-color:var(--hover-bg-color);display:block}:host-context(body.jelly-enabled) cr-button.action-button:not(:active):hover,:host-context(body.jelly-enabled) cr-button:active{box-shadow:none}:host-context(body.jelly-enabled) cr-button.action-button{background-color:var(--bg-action)}:host-context(body.jelly-enabled) cr-button.action-button:hover::part(hoverBackground){background-color:var(--hover-bg-action)}:host-context(body.jelly-enabled) cr-button[disabled]{background-color:var(--cros-sys-disabled_container)}:host-context(body.jelly-enabled):host-context(.focus-outline-visible) cr-button:focus{box-shadow:none;outline:2px solid var(--cros-sys-focus_ring)}:host-context(body.jelly-enabled) cr-checkbox{--cr-checkbox-checked-box-color:var(--cros-sys-primary);--cr-checkbox-ripple-checked-color:var(--cros-sys-ripple_primary);--cr-checkbox-checked-ripple-opacity:1;--cr-checkbox-mark-color:var(--cros-sys-inverse_on_surface);--cr-checkbox-ripple-unchecked-color:var(--cros-sys-ripple_primary);--cr-checkbox-unchecked-box-color:var(--cros-sys-on_surface);--cr-checkbox-unchecked-ripple-opacity:1}:host-context([cros][chrome-refresh-2023]) cr-checkbox{--cr-checkbox-focus-outline:none}:host-context([cros][chrome-refresh-2023]) cr-checkbox[disabled]{opacity:var(--cros-disabled-opacity)}:host-context([cros][chrome-refresh-2023]):host-context(.focus-outline-visible) cr-checkbox:focus{--cr-checkbox-ripple-ring:2px solid var(--cros-sys-focus_ring)}:host-context(body.jelly-enabled) cr-dialog::part(dialog){--cr-dialog-background-color:var(--cros-sys-base_elevated);background-image:none;box-shadow:0 0 12px 0 var(--cros-sys-shadow)}:host-context(body.jelly-enabled) cr-dialog>[slot=title]{font:var(--cros-display-7-font)}:host-context(body.jelly-enabled) cr-drawer{--cr-drawer-background-color:var(--cros-sys-app_base_shaded)}:host-context(body.jelly-enabled) cr-expand-button::part(icon),:host-context(body.jelly-enabled) cr-icon-button,:host-context(body.jelly-enabled) cr-link-row::part(icon){--cr-icon-button-fill-color:var(--cros-sys-secondary)}:host-context(body.jelly-enabled) cr-input,:host-context(body.jelly-enabled) cr-search-field::part(searchInput),:host-context(body.jelly-enabled) cr-searchable-drop-down::part(input),:host-context(body.jelly-enabled) cr-textarea{--cr-input-background-color:var(--cros-sys-input_field_on_base);--cr-input-error-color:var(--cros-sys-error);--cr-input-focus-color:var(--cros-sys-primary);--cr-input-placeholder-color:var(--cros-sys-secondary)}:host-context([cros][chrome-refresh-2023]) cr-input,:host-context([cros][chrome-refresh-2023]) cr-search-field::part(searchInput),:host-context([cros][chrome-refresh-2023]) cr-searchable-drop-down::part(input){--cr-input-background-color:var(--cros-sys-input_field_on_base);--cr-input-border:none;--cr-input-border-bottom:none;--cr-input-border-radius:8px;--cr-input-label-color:var(--cros-sys-on-surface);--cr-input-padding-start:16px;--cr-input-padding-end:16px;--cr-input-placeholder-color:var(--cros-sys-secondary);--cr-input-underline-display:none;font:var(--cros-body-2-font);--cr-input-focus-color:var(--cros-sys-primary);--cr-input-focus-label-color:var(--cros-sys-primary);--cr-input-focus-outline:2px solid var(--cros-sys-focus_ring);--cr-input-hover-background-color:transparent;--cr-input-error-color:var(--cros-sys-error)}:host-context([cros][chrome-refresh-2023]) cr-input[disabled]{color:currentColor;opacity:var(--cros-disabled-opacity)}:host-context([cros][chrome-refresh-2023]) cr-input[invalid]{--cr-input-focus-outline:2px solid var(--cros-sys-error)}:host-context([cros][chrome-refresh-2023]) cr-toolbar-search-field{--cr-toolbar-search-field-hover-background:none}:host-context(body.jelly-enabled) .md-select{--md-select-bg-color:var(--cros-sys-input_field_on_base);--md-select-focus-shadow-color:var(--cros-sys-primary);--md-select-option-bg-color:var(--cros-sys-base_elevated);--md-select-text-color:var(--cros-sys-on_surface)}:host-context([cros][chrome-refresh-2023]) .md-select{--md-arrow-width:7px;--md-select-bg-color:var(--cros-sys-input_field_on_base);--md-select-focus-shadow-color:transparent;--md-select-option-bg-color:var(--cros-sys-base_elevated);--md-select-side-padding:16px;--md-select-text-color:var(--cros-sys-on_surface);border:none;border-radius:8px;font:var(--cros-body-2-font);height:36px;line-height:36px}:host-context([cros][chrome-refresh-2023]) .md-select:hover{background-color:var(--md-select-bg-color)}:host-context([cros][chrome-refresh-2023]) .md-select[disabled]{background-color:var(--md-select-bg-color);border-color:transparent;color:var(--md-select-text-color);opacity:var(--cros-disabled-opacity)}:host-context(body.jelly-enabled) cr-action-menu{--cr-menu-background-color:var(--cros-sys-base_elevated);--cr-menu-background-focus-color:var(--cros-sys-hover_on_subtle)}:host-context(body.jelly-enabled),:host-context(body.jelly-enabled) cr-radio-button{--cr-radio-button-checked-color:var(--cros-sys-primary);--cr-radio-button-checked-ripple-color:var(--cros-sys-ripple_primary);--cr-radio-button-unchecked-color:var(--cros-sys-on_surface);--cr-radio-button-unchecked-ripple-color:var(--cros-sys-ripple_neutral_on_subtle)}:host-context([cros][chrome-refresh-2023]),:host-context([cros][chrome-refresh-2023]) cr-radio-button{--cr-radio-button-checked-color:var(--cros-sys-primary);--cr-radio-button-checked-ripple-color:var(--cros-sys-ripple_primary);--cr-radio-button-unchecked-color:var(--cros-sys-on_surface);--cr-radio-button-unchecked-ripple-color:var(--cros-sys-ripple_neutral_on_subtle);--cr-radio-button-ink-size:40px}:host-context([cros][chrome-refresh-2023]) cr-radio-button[disabled]{--cr-radio-button-checked-color:var(--cros-sys-disabled);--cr-radio-button-unchecked-color:var(--cros-sys-disabled)}:host-context(body.jelly-enabled) cr-card-radio-button{--cr-card-background-color:var(--cros-sys-app_base);--cr-checked-color:var(--cros-sys-primary);--cr-radio-button-checked-ripple-color:var(--cros-sys-ripple_primary);--hover-bg-color:var(--cros-sys-hover_on_subtle)}:host-context(body.jelly-enabled) cr-search-field{--cr-search-field-clear-icon-fill:var(--cros-sys-primary);--cr-search-field-clear-icon-margin-end:6px;--cr-search-field-input-border-bottom:none;--cr-search-field-input-padding-start:8px;--cr-search-field-input-underline-border-radius:4px;--cr-search-field-search-icon-display:none;--cr-search-field-search-icon-fill:var(--cros-sys-primary);--cr-search-field-search-icon-inline-display:block;--cr-search-field-search-icon-inline-margin-start:6px;border-radius:4px}:host-context([cros][chrome-refresh-2023]) cr-search-field{--cr-search-field-search-icon-fill:var(--cros-sys-secondary);--cr-search-field-search-icon-inline-margin-start:0;--cr-search-field-clear-icon-fill:var(--cros-sys-secondary);--cr-search-field-clear-icon-margin-end:6px;--cr-search-field-clear-icon-size:16px}:host-context([cros][chrome-refresh-2023]) cr-search-field::part(searchInput){--cr-input-padding-bottom:10px;--cr-input-padding-end:28px;--cr-input-padding-start:8px;--cr-input-padding-top:10px}:host-context([cros][chrome-refresh-2023]) cr-searchable-drop-down,:host-context(body.jelly-enabled) cr-searchable-drop-down{--cr-searchable-drop-down-bg-color:var(--cros-sys-base_elevated);--cr-searchable-drop-down-icon-color-focus:var(--cros-sys-primary);--cr-searchable-drop-down-list-bg-color-selected:var(--cros-sys-base_highlight);--cr-searchable-drop-down-list-item-color:var(--cros-sys-on_surface);--cr-searchable-drop-down-shadow:var(--cros-elevation-3-shadow)}:host-context(body.jelly-enabled) cr-slider{--cr-slider-active-color:var(--cros-sys-primary);--cr-slider-container-color:var(--cros-sys-primary_container);--cr-slider-container-disabled-color:var(--cros-sys-disabled_container);--cr-slider-disabled-color:var(--cros-sys-disabled);--cr-slider-knob-active-color:var(--cros-sys-primary);--cr-slider-knob-disabled-color:var(--cros-sys-disabled);--cr-slider-marker-active-color:var(--cros-sys-primary_container);--cr-slider-marker-color:var(--cros-sys-primary);--cr-slider-marker-disabled-color:var(--cros-sys-disabled);--cr-slider-ripple-color:var(--cros-sys-hover_on_prominent)}:host-context(body.jelly-enabled) cr-slider:not([disabled])::part(knob){background-color:var(--cros-sys-primary)}:host-context(body.jelly-enabled) cr-slider[disabled]::part(knob){border:none}:host-context(body.jelly-enabled) cr-slider::part(label){background:var(--cros-sys-primary);color:var(--cros-sys-on_primary)}:host-context(body.jelly-enabled) cr-tabs{--cr-tabs-selected-color:var(--cros-sys-primary)}:host-context(body.jelly-enabled) cr-toggle{--cr-toggle-checked-bar-color:var(--cros-sys-primary_container);--cr-toggle-checked-bar-opacity:100%;--cr-toggle-checked-button-color:var(--cros-sys-primary);--cr-toggle-checked-ripple-color:var(--cros-sys-hover_on_prominent);--cr-toggle-unchecked-bar-color:var(--cros-sys-secondary);--cr-toggle-unchecked-button-color:var(--cros-sys-surface_variant);--cr-toggle-unchecked-ripple-color:var(--cros-sys-hover_on_prominent);--cr-toggle-box-shadow:var(--cros-elevation-1-shadow);--cr-toggle-ripple-diameter:32px}:host-context(body.jelly-enabled):host-context(.focus-outline-visible) cr-toggle:focus{--cr-toggle-ripple-ring:2px solid var(--cros-sys-focus_ring)}:host-context([cros][chrome-refresh-2023]) cr-toggle{--cr-toggle-bar-width:32px;--cr-toggle-knob-diameter:12px;--cr-toggle-bar-border:none;--cr-toggle-checked-bar-color:var(--cros-sys-primary);--cr-toggle-checked-button-color:var(--cros-sys-on_primary);--cr-toggle-unchecked-bar-color:var(--cros-sys-secondary);--cr-toggle-unchecked-button-color:var(--cros-sys-on_secondary);--color-toggle-button-thumb-on-hover:var(--cros-sys-on_primary);--cr-toggle-disabled-opacity:var(--cros-disabled-opacity)}:host-context([cros][chrome-refresh-2023]):host-context(.focus-outline-visible) cr-toggle:focus{--cr-toggle-ripple-ring:none}:host-context([cros][chrome-refresh-2023]) cr-policy-indicator,:host-context([cros][chrome-refresh-2023]) cr-policy-pref-indicator,:host-context([cros][chrome-refresh-2023]) cr-tooltip-icon::part(tooltip),:host-context(body.jelly-enabled) cr-policy-indicator,:host-context(body.jelly-enabled) cr-policy-pref-indicator,:host-context(body.jelly-enabled) cr-tooltip-icon::part(tooltip){--paper-tooltip-background:var(--cros-sys-on_surface);--paper-tooltip-padding:5px 8px;--paper-tooltip-text-color:var(--cros-sys-inverse_on_surface);font:var(--cros-annotation-1-font)}
    </style>
  </template>
`.content);
styleMod$1.register('cros-color-overrides');

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ExtensionControlBrowserProxyImpl {
    disableExtension(extensionId) {
        chrome.send('disableExtension', [extensionId]);
    }
    manageExtension(extensionId) {
        window.open('chrome://extensions?id=' + extensionId);
    }
    static getInstance() {
        return instance || (instance = new ExtensionControlBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;

function getTemplate$a() {
    return html `<!--_html_template_start_--><style include="cros-color-overrides">:host{align-items:center;display:flex;margin-inline-start:36px;min-height:var(--cr-section-min-height)}img{margin-inline-end:16px}iron-icon[icon='cr:open-in-new']{fill:var(--text-color);height:var(--cr-icon-size);width:var(--cr-icon-size)}#disable{margin-inline-start:8px}:host>span{flex:1;margin-inline-end:8px}</style>
<img role="presentation" src="chrome://extension-icon/[[extensionId]]/20/1">
<span>[[getLabel_(extensionName)]]</span>
<cr-button id="manage" on-click="onManageClick_">
  $i18n{manage}
  <iron-icon icon="cr:open-in-new" slot="suffix-icon"></iron-icon>
</cr-button>
<template is="dom-if" if="[[extensionCanBeDisabled]]" restamp>
  <cr-button id="disable" on-click="onDisableClick_">$i18n{disable}</cr-button>
</template>
<!--_html_template_end_-->`;
}

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ExtensionControlledIndicatorElement extends PolymerElement {
    static get is() {
        return 'extension-controlled-indicator';
    }
    static get template() {
        return getTemplate$a();
    }
    static get properties() {
        return {
            extensionCanBeDisabled: Boolean,
            extensionId: String,
            extensionName: String,
        };
    }
    getLabel_() {
        return loadTimeData.getStringF('controlledByExtension', this.extensionName);
    }
    onManageClick_() {
        const manageUrl = 'chrome://extensions/?id=' + this.extensionId;
        OpenWindowProxyImpl.getInstance().openUrl(manageUrl);
    }
    onDisableClick_() {
        assert(this.extensionCanBeDisabled);
        ExtensionControlBrowserProxyImpl.getInstance().disableExtension(this.extensionId);
        this.dispatchEvent(new CustomEvent('extension-disable', { bubbles: true, composed: true }));
    }
}
customElements.define(ExtensionControlledIndicatorElement.is, ExtensionControlledIndicatorElement);

function getTemplate$9() {
    return html `<!--_html_template_start_--><style include="shared-style cr-shared-style">#blockedSitesTitle{margin-top:28px}.blocked-site-content{border-top:var(--cr-separator-line);flex:1;min-height:var(--section-min-height)}.blocked-site-content[first]{border-top:none}#blockedSitesHeader,.favicon{margin-inline-end:20px;margin-inline-start:20px}.site-url{flex:1}cr-icon-button{--cr-icon-button-icon-size:16px;--cr-icon-button-margin-start:0px;--cr-icon-button-margin-end:10px}@media all and (display-mode:standalone){#addShortcutBanner{display:none}}pref-toggle-button:first-of-type{border-top-left-radius:inherit;border-top-right-radius:inherit}cr-link-row:last-of-type{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}cr-link-row[hide-icon]::part(icon){display:none}</style>
<h2 class="page-title">$i18n{settings}</h2>
<div class="card">
  <pref-toggle-button id="passwordToggle" no-extension-indicator label="$i18n{savePasswordsLabel}" pref="{{prefs.credentials_enable_service}}">
  </pref-toggle-button>
  <template is="dom-if" if="[[prefs.credentials_enable_service.extensionId]]">
    <div class="cr-row continuation">
      <extension-controlled-indicator id="passwordsExtensionIndicator" extension-id="[[prefs.credentials_enable_service.extensionId]]" extension-name="[[
              prefs.credentials_enable_service.controlledByName]]" extension-can-be-disabled="[[
              prefs.credentials_enable_service.extensionCanBeDisabled]]">
      </extension-controlled-indicator>
    </div>
  </template>
  <pref-toggle-button id="autosigninToggle" class="hr" label="$i18n{autosigninLabel}" sub-label="$i18n{autosigninDescription}" pref="{{prefs.credentials_enable_autosignin}}">
  </pref-toggle-button>
  
  <template is="dom-if" if="[[isEligibleForAccountStorage]]">
    <pref-toggle-button id="accountStorageToggle" class="hr" label="$i18n{accountStorageToggleLabel}" sub-label="[[getToggleSubLabelForAccountStorageOptIn_(accountEmail)]]" checked="[[isAccountStoreUser]]" change-requires-validation on-validate-and-change-pref="changeAccountStorageOptIn_">
    </pref-toggle-button>
  </template>
  <template is="dom-if" if="[[shouldShowMovePasswordsEntry_(isAccountStoreUser, passwordsOnDevice_)]]" restamp>
    <cr-link-row class="cr-row" non-clickable label="[[movePasswordsLabel_]]" sub-label="$i18n{movePasswordsInSettingsSubLabel}" hide-icon>
      <cr-button id="movePasswordsButton" on-click="onMovePasswordsClicked_">
          $i18n{moveSinglePasswordButton}
      </cr-button>
    </cr-link-row>
  </template>
  <cr-link-row id="trustedVaultBanner" class="cr-row" label="[[getTrustedVaultBannerTitle_(trustedVaultBannerState_)]]" sub-label="[[getTrustedVaultBannerDescription_(trustedVaultBannerState_)]]" hidden$="[[shouldHideTrustedVaultBanner_(trustedVaultBannerState_)]]" button-aria-description="$i18n{opensInNewTab}" on-click="onTrustedVaultBannerClick_" external>
  </cr-link-row>
  <template is="dom-if" if="[[!passwordManagerDisabled_]]" restamp>
    <passwords-importer account-email="[[accountEmail]]" is-account-store-user="[[isAccountStoreUser]]" is-user-syncing-passwords="[[isSyncingPasswords]]">
    </passwords-importer>
  </template>
  <template is="dom-if" if="[[hasPasswordsToExport_]]" restamp>
    <passwords-exporter></passwords-exporter>
  </template>
  <template is="dom-if" if="[[canAddShortcut_]]" on-dom-change="onShortcutBannerDomChanged_" restamp>
    <cr-link-row id="addShortcutBanner" class="cr-row settings-cr-link-row" on-click="onAddShortcutClick_" label="$i18n{addShortcut}" sub-label="$i18n{addShortcutDescription}" role-description="button">
    </cr-link-row>
  </template>
  
  
</div>
<div hidden="[[!blockedSites_.length]]">
  <h3 id="blockedSitesTitle" class="page-title">$i18n{blockedSitesTitle}</h3>
  <div class="card" id="blockedSites">
    <div class="flex-centered single-line-label">
      <div id="blockedSitesHeader" class="cr-secondary-text label">
        $i18n{blockedSitesDescription}
      </div>
    </div>
    <div id="blockedSitesList" class="hr">
      <template is="dom-repeat" items="[[blockedSites_]]">
        <div class="flex-centered">
          <site-favicon class="favicon" domain="[[item.urls.link]]">
          </site-favicon>
          <div class="blocked-site-content flex-centered" first$="[[!index]]">
            <div class="label site-url">[[item.urls.shown]]</div>
            <cr-icon-button class="icon-clear" id="removeBlockedValueButton" on-click="onRemoveBlockedSiteClick_" title="$i18n{deletePassword}" aria-label="[[getAriaLabelForBlockedSite_(item)]]">
            </cr-icon-button>
          </div>
        </div>
      </template>
    </div>
  </div>
</div>
<template is="dom-if" if="[[showMovePasswordsDialog_]]" restamp>
  <move-passwords-dialog on-close="onMovePasswordsDialogClose_" id="movePasswordsDialog" passwords="[[passwordsOnDevice_]]" trigger="[[getMovePasswordsDialogTrigger_()]]">
  </move-passwords-dialog>
</template>
<!--_html_template_end_-->`;
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PASSWORD_MANAGER_ADD_SHORTCUT_ELEMENT_ID = 'PasswordManagerUI::kAddShortcutElementId';
const PASSWORD_MANAGER_ADD_SHORTCUT_CUSTOM_EVENT_ID = 'PasswordManagerUI::kAddShortcutCustomEventId';
const SettingsSectionElementBase = HelpBubbleMixin(RouteObserverMixin(PrefsMixin(UserUtilMixin(WebUiListenerMixin(I18nMixin(PolymerElement))))));
class SettingsSectionElement extends SettingsSectionElementBase {
    constructor() {
        super(...arguments);
        this.passwordsOnDevice_ = [];
        this.setBlockedSitesListListener_ = null;
        this.setCredentialsChangedListener_ = null;
    }
    static get is() {
        return 'settings-section';
    }
    static get template() {
        return getTemplate$9();
    }
    static get properties() {
        return {
            /** An array of blocked sites to display. */
            blockedSites_: {
                type: Array,
                value: () => [],
            },
            // 
            hasPasswordsToExport_: {
                type: Boolean,
                value: false,
            },
            // 
            hasPasskeys_: {
                type: Boolean,
                value: false,
            },
            passwordManagerDisabled_: {
                type: Boolean,
                computed: 'computePasswordManagerDisabled_(' +
                    'prefs.credentials_enable_service.enforcement, ' +
                    'prefs.credentials_enable_service.value)',
            },
            /** The visibility state of the trusted vault banner. */
            trustedVaultBannerState_: {
                type: Object,
                value: TrustedVaultBannerState.NOT_SHOWN,
            },
            canAddShortcut_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('canAddShortcut');
                },
            },
            enableButterOnDesktopFollowup_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('enableButterOnDesktopFollowup');
                },
            },
            showMovePasswordsDialog_: Boolean,
            passwordsOnDevice_: {
                type: Array,
            },
        };
    }
    ready() {
        super.ready();
        chrome.metricsPrivate.recordBoolean('PasswordManager.OpenedAsShortcut', window.matchMedia('(display-mode: standalone)').matches);
    }
    connectedCallback() {
        super.connectedCallback();
        this.updatePasswordsOnDevice_();
        this.setBlockedSitesListListener_ = blockedSites => {
            this.blockedSites_ = blockedSites;
        };
        PasswordManagerImpl.getInstance().getBlockedSitesList().then(blockedSites => this.blockedSites_ = blockedSites);
        PasswordManagerImpl.getInstance().addBlockedSitesListChangedListener(this.setBlockedSitesListListener_);
        this.setCredentialsChangedListener_ =
            (passwords) => {
                this.hasPasswordsToExport_ = passwords.length > 0;
                this.updatePasswordsOnDevice_();
            };
        PasswordManagerImpl.getInstance().getSavedPasswordList().then(this.setCredentialsChangedListener_);
        PasswordManagerImpl.getInstance().addSavedPasswordListChangedListener(this.setCredentialsChangedListener_);
        const trustedVaultStateChanged = (state) => {
            this.trustedVaultBannerState_ = state;
        };
        const syncBrowserProxy = SyncBrowserProxyImpl.getInstance();
        syncBrowserProxy.getTrustedVaultBannerState().then(trustedVaultStateChanged);
        this.addWebUiListener('trusted-vault-banner-state-changed', trustedVaultStateChanged);
        // 
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        assert(this.setBlockedSitesListListener_);
        PasswordManagerImpl.getInstance().removeBlockedSitesListChangedListener(this.setBlockedSitesListListener_);
        this.setBlockedSitesListListener_ = null;
        assert(this.setCredentialsChangedListener_);
        PasswordManagerImpl.getInstance().removeSavedPasswordListChangedListener(this.setCredentialsChangedListener_);
        this.setCredentialsChangedListener_ = null;
    }
    currentRouteChanged(route) {
        const param = route.queryParameters.get(UrlParam.START_IMPORT) || '';
        if (param === 'true') {
            const importer = this.shadowRoot.querySelector('passwords-importer');
            assert(importer);
            importer.launchImport();
            const params = new URLSearchParams();
            Router.getInstance().updateRouterParams(params);
        }
    }
    onShortcutBannerDomChanged_() {
        const addShortcutBanner = this.root.querySelector('#addShortcutBanner');
        if (addShortcutBanner) {
            this.registerHelpBubble(PASSWORD_MANAGER_ADD_SHORTCUT_ELEMENT_ID, addShortcutBanner);
        }
    }
    onAddShortcutClick_() {
        this.notifyHelpBubbleAnchorCustomEvent(PASSWORD_MANAGER_ADD_SHORTCUT_ELEMENT_ID, PASSWORD_MANAGER_ADD_SHORTCUT_CUSTOM_EVENT_ID);
        // TODO(crbug.com/1358448): Record metrics on all entry points usage.
        // TODO(crbug.com/1358448): Hide the button for users after the shortcut is
        // installed.
        PasswordManagerImpl.getInstance().showAddShortcutDialog();
    }
    /**
     * Fires an event that should delete the blocked password entry.
     */
    onRemoveBlockedSiteClick_(event) {
        PasswordManagerImpl.getInstance().removeBlockedSite(event.model.item.id);
    }
    // 
    onTrustedVaultBannerClick_() {
        switch (this.trustedVaultBannerState_) {
            case TrustedVaultBannerState.OPTED_IN:
                OpenWindowProxyImpl.getInstance().openUrl(loadTimeData.getString('trustedVaultLearnMoreUrl'));
                break;
            case TrustedVaultBannerState.OFFER_OPT_IN:
                OpenWindowProxyImpl.getInstance().openUrl(loadTimeData.getString('trustedVaultOptInUrl'));
                break;
            case TrustedVaultBannerState.NOT_SHOWN:
            default:
                assertNotReached();
        }
    }
    getTrustedVaultBannerTitle_() {
        switch (this.trustedVaultBannerState_) {
            case TrustedVaultBannerState.OPTED_IN:
                return this.i18n('trustedVaultBannerLabelOptedIn');
            case TrustedVaultBannerState.OFFER_OPT_IN:
                return this.i18n('trustedVaultBannerLabelOfferOptIn');
            case TrustedVaultBannerState.NOT_SHOWN:
                return '';
            default:
                assertNotReached();
        }
    }
    getTrustedVaultBannerDescription_() {
        switch (this.trustedVaultBannerState_) {
            case TrustedVaultBannerState.OPTED_IN:
                return this.i18n('trustedVaultBannerSubLabelOptedIn');
            case TrustedVaultBannerState.OFFER_OPT_IN:
                return this.i18n('trustedVaultBannerSubLabelOfferOptIn');
            case TrustedVaultBannerState.NOT_SHOWN:
                return '';
            default:
                assertNotReached();
        }
    }
    shouldHideTrustedVaultBanner_() {
        return this.trustedVaultBannerState_ === TrustedVaultBannerState.NOT_SHOWN;
    }
    getAriaLabelForBlockedSite_(blockedSite) {
        return this.i18n('removeBlockedAriaDescription', blockedSite.urls.shown);
    }
    changeAccountStorageOptIn_() {
        if (this.isOptedInForAccountStorage) {
            this.optOutFromAccountStorage();
        }
        else {
            this.optInForAccountStorage();
        }
    }
    getToggleSubLabelForAccountStorageOptIn_(accountEmail) {
        if (this.enableButterOnDesktopFollowup_) {
            return this.i18n('accountStorageToggleSubLabel', accountEmail);
        }
        return accountEmail;
    }
    // 
    computePasswordManagerDisabled_() {
        const pref = this.getPref('credentials_enable_service');
        return pref.enforcement === chrome.settingsPrivate.Enforcement.ENFORCED &&
            !pref.value;
    }
    onMovePasswordsClicked_(e) {
        e.preventDefault();
        this.showMovePasswordsDialog_ = true;
    }
    onMovePasswordsDialogClose_() {
        this.showMovePasswordsDialog_ = false;
    }
    getMovePasswordsDialogTrigger_() {
        return MoveToAccountStoreTrigger
            .EXPLICITLY_TRIGGERED_FOR_MULTIPLE_PASSWORDS_IN_SETTINGS;
    }
    shouldShowMovePasswordsEntry_() {
        return this.enableButterOnDesktopFollowup_ && this.isAccountStoreUser &&
            this.passwordsOnDevice_.length > 0;
    }
    async updatePasswordsOnDevice_() {
        const groups = await PasswordManagerImpl.getInstance().getCredentialGroups();
        const localStorage = [
            chrome.passwordsPrivate.PasswordStoreSet.DEVICE_AND_ACCOUNT,
            chrome.passwordsPrivate.PasswordStoreSet.DEVICE,
        ];
        this.passwordsOnDevice_ =
            groups.map(group => group.entries)
                .flat()
                .filter(entry => localStorage.includes(entry.storedIn));
        this.movePasswordsLabel_ =
            await PluralStringProxyImpl.getInstance().getPluralString('deviceOnlyPasswordsIconTooltip', this.passwordsOnDevice_.length);
    }
}
customElements.define(SettingsSectionElement.is, SettingsSectionElement);

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrMenuSelectorBase = mixinBehaviors([IronSelectableBehavior], PolymerElement);
class CrMenuSelector extends CrMenuSelectorBase {
    static get is() {
        return 'cr-menu-selector';
    }
    connectedCallback() {
        super.connectedCallback();
        this.focusOutlineManager_ = FocusOutlineManager.forDocument(document);
    }
    ready() {
        super.ready();
        this.setAttribute('role', 'menu');
        this.addEventListener('focusin', this.onFocusin_.bind(this));
        this.addEventListener('keydown', this.onKeydown_.bind(this));
        this.addEventListener('iron-deselect', e => this.onIronDeselected_(e));
        this.addEventListener('iron-select', e => this.onIronSelected_(e));
    }
    getAllFocusableItems_() {
        // Note that this is different from IronSelectableBehavior's items property
        // as some items are focusable and actionable but not selectable (eg. an
        // external link).
        return Array.from(this.querySelectorAll('[role=menuitem]:not([disabled]):not([hidden])'));
    }
    onFocusin_(e) {
        // If the focus was moved by keyboard and is coming in from a relatedTarget
        // that is not within this menu, move the focus to the first menu item. This
        // ensures that the first menu item is always the first focused item when
        // focusing into the menu. A null relatedTarget means the focus was moved
        // from outside the WebContents.
        const focusMovedWithKeyboard = this.focusOutlineManager_.visible;
        const focusMovedFromOutside = e.relatedTarget === null ||
            !this.contains(e.relatedTarget);
        if (focusMovedWithKeyboard && focusMovedFromOutside) {
            this.getAllFocusableItems_()[0].focus();
        }
    }
    onIronDeselected_(e) {
        e.detail.item.removeAttribute('aria-current');
    }
    onIronSelected_(e) {
        e.detail.item.setAttribute('aria-current', 'page');
    }
    onKeydown_(event) {
        const items = this.getAllFocusableItems_();
        assert(items.length >= 1);
        const currentFocusedIndex = items.indexOf(this.querySelector(':focus'));
        let newFocusedIndex = currentFocusedIndex;
        switch (event.key) {
            case 'Tab':
                if (event.shiftKey) {
                    // If pressing Shift+Tab, immediately focus the first element so that
                    // when the event is finished processing, the browser automatically
                    // focuses the previous focusable element outside of the menu.
                    items[0].focus();
                }
                else {
                    // If pressing Tab, immediately focus the last element so that when
                    // the event is finished processing, the browser automatically focuses
                    // the next focusable element outside of the menu.
                    items[items.length - 1].focus({ preventScroll: true });
                }
                return;
            case 'ArrowDown':
                newFocusedIndex = (currentFocusedIndex + 1) % items.length;
                break;
            case 'ArrowUp':
                newFocusedIndex =
                    (currentFocusedIndex + items.length - 1) % items.length;
                break;
            case 'Home':
                newFocusedIndex = 0;
                break;
            case 'End':
                newFocusedIndex = items.length - 1;
                break;
        }
        if (newFocusedIndex === currentFocusedIndex) {
            return;
        }
        event.preventDefault();
        items[newFocusedIndex].focus();
    }
}
customElements.define(CrMenuSelector.is, CrMenuSelector);

const styleMod = document.createElement('dom-module');
styleMod.appendChild(html `
  <template>
    <style>
.cr-nav-menu-item{--iron-icon-fill-color:var(--google-grey-700);--iron-icon-height:20px;--iron-icon-width:20px;--cr-icon-ripple-size:20px;align-items:center;border-end-end-radius:100px;border-start-end-radius:100px;box-sizing:border-box;color:var(--google-grey-900);display:flex;font-size:14px;font-weight:500;line-height:14px;margin-inline-end:2px;margin-inline-start:1px;min-height:40px;overflow:hidden;padding-block-end:10px;padding-block-start:10px;padding-inline-start:23px;position:relative;text-decoration:none}:host-context(cr-drawer) .cr-nav-menu-item{margin-inline-end:8px}.cr-nav-menu-item:hover{background:var(--google-grey-200)}.cr-nav-menu-item[selected]{--iron-icon-fill-color:var(--google-blue-600);background:var(--google-blue-50);color:var(--google-blue-700)}@media (prefers-color-scheme:dark){.cr-nav-menu-item{--iron-icon-fill-color:var(--google-grey-500);color:#fff}.cr-nav-menu-item:hover{--iron-icon-fill-color:white;background:var(--google-grey-800)}.cr-nav-menu-item[selected]{--iron-icon-fill-color:black;background:var(--google-blue-300);color:var(--google-grey-900)}}.cr-nav-menu-item:focus{outline:auto 5px -webkit-focus-ring-color;z-index:1}.cr-nav-menu-item:focus:not([selected]):not(:hover){background:0 0}.cr-nav-menu-item iron-icon{flex-shrink:0;margin-inline-end:20px;pointer-events:none;vertical-align:top}
    </style>
  </template>
`.content);
styleMod.register('cr-nav-menu-item-style');

const template = html `<iron-iconset-svg name="passwords-icon" size="20">
  <svg>
    <defs>
      <g id="passkey"><path d="M9 10c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm0-4.5c.83 0 1.5.67 1.5 1.5S9.83 8.5 9 8.5 7.5 7.83 7.5 7 8.17 5.5 9 5.5zm6.5 7.5v-.13a2.497 2.497 0 001.75-2.37 2.5 2.5 0 00-5 0c0 1.12.74 2.05 1.75 2.37V16l1 1 1.5-1.5-.75-.75.75-.75-1-1zm-.75-1.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM4.5 14.09c0-.18.09-.34.22-.42C6.02 12.9 7.5 12.5 9 12.5c.88 0 1.75.15 2.58.42-.39-.5-.65-1.09-.76-1.73A9.94 9.94 0 009 11c-1.84 0-3.56.5-5.03 1.37-.61.35-.97 1.02-.97 1.72V16h9.5v-1.5h-8v-.41z"></path></g>
      <g id="checkup"><path d="M3.83333 14.3333V4.33329H5.16667V6.33329H10.5V4.33329H11.8333V8.33329H13.1667V4.33329C13.1667 3.59996 12.5667 2.99996 11.8333 2.99996H9.71333C9.43333 2.22663 8.7 1.66663 7.83333 1.66663C6.96667 1.66663 6.23333 2.22663 5.95333 2.99996H3.83333C3.1 2.99996 2.5 3.59996 2.5 4.33329V14.3333C2.5 15.0666 3.1 15.6666 3.83333 15.6666H7.16667V14.3333H3.83333ZM7.83333 2.99996C8.2 2.99996 8.5 3.29996 8.5 3.66663C8.5 4.03329 8.2 4.33329 7.83333 4.33329C7.46667 4.33329 7.16667 4.03329 7.16667 3.66663C7.16667 3.29996 7.46667 2.99996 7.83333 2.99996ZM14.8333 10.3333L13.8333 9.33329L10.1733 13L8.16667 11L7.16667 12L10.1733 15L14.8333 10.3333Z"></path></g>
      <g id="settings"><path d="M12.9669 8.49998C12.9669 8.71598 12.9509 8.92398 12.9269 9.12398L14.2629 10.18C14.3909 10.276 14.4229 10.444 14.3429 10.588L13.0629 12.804C12.9829 12.948 12.8149 13.004 12.6709 12.948L11.0789 12.308C10.7509 12.556 10.3909 12.772 9.9989 12.932L9.7589 14.628C9.7429 14.788 9.6069 14.9 9.4469 14.9H6.8869C6.7269 14.9 6.5989 14.788 6.5669 14.628L6.3269 12.932C5.9349 12.772 5.5829 12.564 5.2469 12.308L3.6549 12.948C3.5109 12.996 3.3429 12.948 3.2629 12.804L1.9829 10.588C1.9109 10.452 1.9429 10.276 2.0629 10.18L3.4149 9.12398C3.3829 8.92398 3.3669 8.70798 3.3669 8.49998C3.3669 8.29198 3.3909 8.07598 3.4229 7.87598L2.0709 6.81998C1.9429 6.72398 1.9109 6.55598 1.9909 6.41198L3.2709 4.19598C3.3509 4.05198 3.5189 3.99598 3.6629 4.05198L5.2549 4.69198C5.5829 4.44398 5.9429 4.22798 6.3349 4.06798L6.5749 2.37198C6.5989 2.21198 6.7269 2.09998 6.8869 2.09998H9.4469C9.6069 2.09998 9.7429 2.21198 9.7669 2.37198L10.0069 4.06798C10.3989 4.22798 10.7509 4.43598 11.0869 4.69198L12.6789 4.05198C12.8229 4.00398 12.9909 4.05198 13.0709 4.19598L14.3509 6.41198C14.4229 6.54798 14.3909 6.72398 14.2709 6.81998L12.9189 7.87598C12.9509 8.07598 12.9669 8.28398 12.9669 8.49998ZM5.7669 8.49998C5.7669 9.81998 6.8469 10.9 8.1669 10.9C9.4869 10.9 10.5669 9.81998 10.5669 8.49998C10.5669 7.17998 9.4869 6.09998 8.1669 6.09998C6.8469 6.09998 5.7669 7.17998 5.7669 8.49998Z"></path></g>
      <g id="upload"><path d="M5.417 16.667c-1.264 0 -2.348 -0.438 -3.25 -1.313 -0.889 -0.875 -1.333 -1.944 -1.333 -3.208 0 -1.083 0.327 -2.048 0.979 -2.896S3.319 7.861 4.375 7.625c0.347 -1.278 1.042 -2.313 2.083 -3.104C7.5 3.729 8.681 3.333 10 3.333c1.625 0 3 0.569 4.125 1.708C15.264 6.167 15.833 7.542 15.833 9.167c0.958 0.111 1.75 0.528 2.375 1.25 0.639 0.708 0.958 1.542 0.958 2.5 0 1.042 -0.368 1.931 -1.104 2.667 -0.723 0.723 -1.604 1.083 -2.646 1.083H10.833a1.658 1.658 0 0 1 -1.188 -0.479A1.658 1.658 0 0 1 9.167 15v-4.292L7.833 12 6.667 10.833l3.333 -3.333 3.333 3.333 -1.167 1.167 -1.333 -1.292V15h4.583c0.583 0 1.077 -0.202 1.479 -0.604 0.403 -0.403 0.604 -0.896 0.604 -1.479s-0.202 -1.077 -0.604 -1.479C16.493 11.035 16 10.833 15.417 10.833H14.167v-1.667c0 -1.153 -0.41 -2.132 -1.229 -2.938C12.132 5.41 11.152 5 10 5s-2.139 0.41 -2.958 1.229C6.236 7.035 5.833 8.014 5.833 9.167h-0.417c-0.806 0 -1.493 0.285 -2.063 0.854A2.81 2.81 0 0 0 2.5 12.083c0 0.806 0.285 1.493 0.854 2.063A2.81 2.81 0 0 0 5.417 15H7.5v1.667H5.417Z" fill="#444746"></path></g>
    </defs>
  </svg>
</iron-iconset-svg>
`;
document.head.appendChild(template.content);

function getTemplate$8() {
    return html `<!--_html_template_start_--><style include="cr-nav-menu-item-style">cr-menu-selector{box-sizing:border-box;display:block;height:100%;overflow:auto;overscroll-behavior:contain;padding-top:8px;width:250px}#compromisedPasswords{margin-inline-end:20px;margin-inline-start:auto}</style>
<div role="navigation">
  <cr-menu-selector id="menu" attr-for-selected="path" selected-attribute="selected" on-iron-activate="onSelectorActivate_" selected="[[getSelectedPage_(selectedPage_)]]">
    <a id="passwords" role="menuitem" class="cr-nav-menu-item" path="passwords" href="/passwords" on-click="onItemClick_">
      <iron-icon icon="cr20:password"></iron-icon>
      $i18n{passwords}
      <paper-ripple></paper-ripple>
    </a>
    <a id="checkup" role="menuitem" class="cr-nav-menu-item" path="checkup" href="/checkup" on-click="onItemClick_">
      <iron-icon icon="passwords-icon:checkup"></iron-icon>
      <span>$i18n{checkup}</span>
      <div id="compromisedPasswords" hidden$="[[!compromisedPasswords_]]">
        [[getCompromisedPasswordsBadge_(compromisedPasswords_)]]</div>
      <paper-ripple></paper-ripple>
    </a>
    <a id="settings" role="menuitem" class="cr-nav-menu-item" path="settings" href="/settings" on-click="onItemClick_">
      <iron-icon icon="passwords-icon:settings"></iron-icon>
      $i18n{settings}
      <paper-ripple></paper-ripple>
    </a>
  </cr-menu-selector>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Represents different referrers when navigating to the Password Check page.
 *
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Needs to stay in sync with PasswordCheckReferrer in enums.xml and
 * password_check_referrer.h.
 */
var PasswordCheckReferrer;
(function (PasswordCheckReferrer) {
    PasswordCheckReferrer[PasswordCheckReferrer["SAFETY_CHECK"] = 0] = "SAFETY_CHECK";
    PasswordCheckReferrer[PasswordCheckReferrer["PASSWORD_SETTINGS"] = 1] = "PASSWORD_SETTINGS";
    PasswordCheckReferrer[PasswordCheckReferrer["PHISH_GUARD_DIALOG"] = 2] = "PHISH_GUARD_DIALOG";
    PasswordCheckReferrer[PasswordCheckReferrer["PASSWORD_BREACH_DIALOG"] = 3] = "PASSWORD_BREACH_DIALOG";
    // Must be last.
    PasswordCheckReferrer[PasswordCheckReferrer["COUNT"] = 4] = "COUNT";
})(PasswordCheckReferrer || (PasswordCheckReferrer = {}));
const PASSWORD_MANAGER_SETTINGS_MENU_ITEM_ELEMENT_ID = 'PasswordManagerUI::kSettingsMenuItemElementId';
const PasswordManagerSideBarElementBase = HelpBubbleMixin(RouteObserverMixin(PolymerElement));
class PasswordManagerSideBarElement extends PasswordManagerSideBarElementBase {
    constructor() {
        super(...arguments);
        this.insecureCredentialsChangedListener_ = null;
    }
    static get is() {
        return 'password-manager-side-bar';
    }
    static get template() {
        return getTemplate$8();
    }
    static get properties() {
        return {
            // The id of the currently selected page.
            selectedPage_: String,
            // The count of compromised passwords currently known to the password
            // manager.
            compromisedPasswords_: Number,
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.insecureCredentialsChangedListener_ = insecureCredentials => {
            const compromisedTypes = [
                chrome.passwordsPrivate.CompromiseType.LEAKED,
                chrome.passwordsPrivate.CompromiseType.PHISHED,
            ];
            this.compromisedPasswords_ =
                insecureCredentials
                    .filter(cred => {
                    return !cred.compromisedInfo.isMuted &&
                        cred.compromisedInfo.compromiseTypes.some(type => {
                            return compromisedTypes.includes(type);
                        });
                })
                    .length;
            this.registerHelpBubble(PASSWORD_MANAGER_SETTINGS_MENU_ITEM_ELEMENT_ID, this.$.settings);
        };
        PasswordManagerImpl.getInstance().getInsecureCredentials().then(this.insecureCredentialsChangedListener_);
        PasswordManagerImpl.getInstance().addInsecureCredentialsListener(this.insecureCredentialsChangedListener_);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        assert(this.insecureCredentialsChangedListener_);
        PasswordManagerImpl.getInstance().removeInsecureCredentialsListener(this.insecureCredentialsChangedListener_);
        this.insecureCredentialsChangedListener_ = null;
    }
    currentRouteChanged(route, _) {
        this.selectedPage_ = route.page;
    }
    onSelectorActivate_(event) {
        Router.getInstance().navigateTo(event.detail.selected);
        if (event.detail.selected === Page.CHECKUP) {
            const params = new URLSearchParams();
            params.set(UrlParam.START_CHECK, 'true');
            Router.getInstance().updateRouterParams(params);
            chrome.metricsPrivate.recordEnumerationValue('PasswordManager.BulkCheck.PasswordCheckReferrer', PasswordCheckReferrer.PASSWORD_SETTINGS, PasswordCheckReferrer.COUNT);
        }
        this.dispatchEvent(new CustomEvent('close-drawer', { bubbles: true, composed: true }));
    }
    getSelectedPage_() {
        switch (this.selectedPage_) {
            case Page.CHECKUP_DETAILS:
                return Page.CHECKUP;
            case Page.PASSWORD_DETAILS:
                return Page.PASSWORDS;
            default:
                return this.selectedPage_;
        }
    }
    /**
     * Prevent clicks on sidebar items from navigating. These are only links for
     * accessibility purposes, taps are handled separately by <iron-selector>.
     */
    onItemClick_(e) {
        e.preventDefault();
    }
    getCompromisedPasswordsBadge_() {
        if (this.compromisedPasswords_ > 99) {
            return '99+';
        }
        return String(this.compromisedPasswords_);
    }
}
customElements.define(PasswordManagerSideBarElement.is, PasswordManagerSideBarElement);

function getTemplate$7() {
    return html `<!--_html_template_start_-->    <style>:host{--cr-drawer-width:256px}:host dialog{--transition-timing:200ms ease;background-color:var(--cr-drawer-background-color,#fff);border:none;border-start-end-radius:var(--cr-drawer-border-start-end-radius,0);border-end-end-radius:var(--cr-drawer-border-end-end-radius,0);bottom:0;left:calc(-1 * var(--cr-drawer-width));margin:0;max-height:initial;max-width:initial;overflow:hidden;padding:0;position:absolute;top:0;transition:left var(--transition-timing);width:var(--cr-drawer-width)}@media (prefers-color-scheme:dark){:host dialog{background:var(--cr-drawer-background-color,var(--google-grey-900)) linear-gradient(rgba(255,255,255,.04),rgba(255,255,255,.04))}}#container,:host dialog{height:100%;word-break:break-word}:host([show_]) dialog{left:0}:host([align=rtl]) dialog{left:auto;right:calc(-1 * var(--cr-drawer-width));transition:right var(--transition-timing)}:host([show_][align=rtl]) dialog{right:0}:host dialog::backdrop{background:rgba(0,0,0,.5);bottom:0;left:0;opacity:0;position:absolute;right:0;top:0;transition:opacity var(--transition-timing)}:host([show_]) dialog::backdrop{opacity:1}.drawer-header{align-items:center;border-bottom:var(--cr-separator-line);color:var(--cr-drawer-header-color,inherit);display:flex;font-size:123.08%;font-weight:var(--cr-drawer-header-font-weight,inherit);font:var(--cr-drawer-header-font,inherit);min-height:56px;padding-inline-start:var(--cr-drawer-header-padding,24px)}@media (prefers-color-scheme:dark){.drawer-header{color:var(--cr-primary-text-color)}}#heading{outline:0}:host ::slotted([slot=body]){height:calc(100% - 56px);overflow:auto}picture{margin-inline-end:16px}#product-logo,picture{height:24px;width:24px}</style>
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
<!--_html_template_end_-->`;
}

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrDrawerElement extends PolymerElement {
    static get is() {
        return 'cr-drawer';
    }
    static get template() {
        return getTemplate$7();
    }
    static get properties() {
        return {
            heading: String,
            show_: {
                type: Boolean,
                reflectToAttribute: true,
            },
            /** The alignment of the drawer on the screen ('ltr' or 'rtl'). */
            align: {
                type: String,
                value: 'ltr',
                reflectToAttribute: true,
            },
        };
    }
    fire_(eventName, detail) {
        this.dispatchEvent(new CustomEvent(eventName, { bubbles: true, composed: true, detail }));
    }
    get open() {
        return this.$.dialog.open;
    }
    set open(_value) {
        assertNotReached('Cannot set |open|.');
    }
    /** Toggles the drawer open and close. */
    toggle() {
        if (this.open) {
            this.cancel();
        }
        else {
            this.openDrawer();
        }
    }
    /** Shows drawer and slides it into view. */
    openDrawer() {
        if (this.open) {
            return;
        }
        this.$.dialog.showModal();
        this.show_ = true;
        this.fire_('cr-drawer-opening');
        listenOnce(this.$.dialog, 'transitionend', () => {
            this.fire_('cr-drawer-opened');
        });
    }
    /**
     * Slides the drawer away, then closes it after the transition has ended. It
     * is up to the owner of this component to differentiate between close and
     * cancel.
     */
    dismiss_(cancel) {
        if (!this.open) {
            return;
        }
        this.show_ = false;
        listenOnce(this.$.dialog, 'transitionend', () => {
            this.$.dialog.close(cancel ? 'canceled' : 'closed');
        });
    }
    cancel() {
        this.dismiss_(true);
    }
    close() {
        this.dismiss_(false);
    }
    wasCanceled() {
        return !this.open && this.$.dialog.returnValue === 'canceled';
    }
    /**
     * Stop propagation of a tap event inside the container. This will allow
     * |onDialogClick_| to only be called when clicked outside the container.
     */
    onContainerClick_(event) {
        event.stopPropagation();
    }
    /**
     * Close the dialog when tapped outside the container.
     */
    onDialogClick_() {
        this.cancel();
    }
    /**
     * Overrides the default cancel machanism to allow for a close animation.
     */
    onDialogCancel_(event) {
        event.preventDefault();
        this.cancel();
    }
    onDialogClose_() {
        // Catch and re-fire the 'close' event such that it bubbles across Shadow
        // DOM v1.
        this.fire_('close');
    }
}
customElements.define(CrDrawerElement.is, CrDrawerElement);

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Helper functions for implementing an incremental search field. See
 * <settings-subpage-search> for a simple implementation.
 */
const CrSearchFieldMixin = dedupingMixin((superClass) => {
    class CrSearchFieldMixin extends superClass {
        constructor() {
            super(...arguments);
            this.effectiveValue_ = '';
            this.searchDelayTimer_ = -1;
        }
        static get properties() {
            return {
                // Prompt text to display in the search field.
                label: {
                    type: String,
                    value: '',
                },
                // Tooltip to display on the clear search button.
                clearLabel: {
                    type: String,
                    value: '',
                },
                hasSearchText: {
                    type: Boolean,
                    reflectToAttribute: true,
                    value: false,
                },
            };
        }
        /**
         * @return The input field element the behavior should use.
         */
        getSearchInput() {
            assertNotReached();
        }
        /**
         * @return The value of the search field.
         */
        getValue() {
            return this.getSearchInput().value;
        }
        fire_(eventName, detail) {
            this.dispatchEvent(new CustomEvent(eventName, { bubbles: true, composed: true, detail }));
        }
        /**
         * Sets the value of the search field.
         * @param noEvent Whether to prevent a 'search-changed' event
         *     firing for this change.
         */
        setValue(value, noEvent) {
            const updated = this.updateEffectiveValue_(value);
            this.getSearchInput().value = this.effectiveValue_;
            if (!updated) {
                // If the input is only whitespace and value is empty,
                // |hasSearchText| needs to be updated.
                if (value === '' && this.hasSearchText) {
                    this.hasSearchText = false;
                }
                return;
            }
            this.onSearchTermInput();
            if (!noEvent) {
                this.fire_('search-changed', this.effectiveValue_);
            }
        }
        scheduleSearch_() {
            if (this.searchDelayTimer_ >= 0) {
                clearTimeout(this.searchDelayTimer_);
            }
            // Dispatch 'search' event after:
            //    0ms if the value is empty
            //  500ms if the value length is 1
            //  400ms if the value length is 2
            //  300ms if the value length is 3
            //  200ms if the value length is 4 or greater.
            // The logic here was copied from WebKit's native 'search' event.
            const length = this.getValue().length;
            const timeoutMs = length > 0 ? (500 - 100 * (Math.min(length, 4) - 1)) : 0;
            this.searchDelayTimer_ = setTimeout(() => {
                this.getSearchInput().dispatchEvent(new CustomEvent('search', { composed: true, detail: this.getValue() }));
                this.searchDelayTimer_ = -1;
            }, timeoutMs);
        }
        onSearchTermSearch() {
            this.onValueChanged_(this.getValue(), false);
        }
        /**
         * Update the state of the search field whenever the underlying input
         * value changes. Unlike onsearch or onkeypress, this is reliably called
         * immediately after any change, whether the result of user input or JS
         * modification.
         */
        onSearchTermInput() {
            this.hasSearchText = this.getSearchInput().value !== '';
            this.scheduleSearch_();
        }
        /**
         * Updates the internal state of the search field based on a change that
         * has already happened.
         * @param noEvent Whether to prevent a 'search-changed' event
         *     firing for this change.
         */
        onValueChanged_(newValue, noEvent) {
            const updated = this.updateEffectiveValue_(newValue);
            if (updated && !noEvent) {
                this.fire_('search-changed', this.effectiveValue_);
            }
        }
        /**
         * Trim leading whitespace and replace consecutive whitespace with
         * single space. This will prevent empty string searches and searches
         * for effectively the same query.
         */
        updateEffectiveValue_(value) {
            const effectiveValue = value.replace(/\s+/g, ' ').replace(/^\s/, '');
            if (effectiveValue === this.effectiveValue_) {
                return false;
            }
            this.effectiveValue_ = effectiveValue;
            return true;
        }
    }
    return CrSearchFieldMixin;
});

function getTemplate$6() {
    return html `<!--_html_template_start_-->    <style include="cr-shared-style cr-icons">:host{display:block;height:40px;transition:background-color 150ms cubic-bezier(.4,0,.2,1),width 150ms cubic-bezier(.4,0,.2,1);width:44px}:host-context([chrome-refresh-2023]):host{--cr-toolbar-search-field-hover-background:var(--color-toolbar-search-field-background-hover,
                var(--cr-hover-background-color));isolation:isolate}:host([disabled]){opacity:var(--cr-disabled-opacity)}[hidden]{display:none!important}cr-icon-button{--cr-icon-button-size:var(--cr-toolbar-icon-container-size, 32px);margin:var(--cr-toolbar-icon-margin,6px)}:host-context([chrome-refresh-2023]) cr-icon-button{--cr-icon-button-fill-color:var(--cr-toolbar-search-field-icon-color,
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
<!--_html_template_end_-->`;
}

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrToolbarSearchFieldElementBase = CrSearchFieldMixin(PolymerElement);
class CrToolbarSearchFieldElement extends CrToolbarSearchFieldElementBase {
    static get is() {
        return 'cr-toolbar-search-field';
    }
    static get template() {
        return getTemplate$6();
    }
    static get properties() {
        return {
            narrow: {
                type: Boolean,
                reflectToAttribute: true,
            },
            showingSearch: {
                type: Boolean,
                value: false,
                notify: true,
                reflectToAttribute: true,
            },
            disabled: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            autofocus: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            // When true, show a loading spinner to indicate that the backend is
            // processing the search. Will only show if the search field is open.
            spinnerActive: { type: Boolean, reflectToAttribute: true },
            isSpinnerShown_: {
                type: Boolean,
                computed: 'computeIsSpinnerShown_(spinnerActive, showingSearch)',
            },
            searchFocused_: { reflectToAttribute: true, type: Boolean, value: false },
        };
    }
    ready() {
        super.ready();
        this.addEventListener('click', e => this.showSearch_(e));
    }
    getSearchInput() {
        return this.$.searchInput;
    }
    isSearchFocused() {
        return this.searchFocused_;
    }
    showAndFocus() {
        this.showingSearch = true;
        this.focus_();
    }
    onSearchTermInput() {
        super.onSearchTermInput();
        this.showingSearch = this.hasSearchText || this.isSearchFocused();
    }
    onSearchIconClicked_() {
        this.dispatchEvent(new CustomEvent('search-icon-clicked', { bubbles: true, composed: true }));
    }
    focus_() {
        this.getSearchInput().focus();
    }
    computeIconTabIndex_(narrow) {
        return narrow && !this.hasSearchText ? 0 : -1;
    }
    computeIconAriaHidden_(narrow) {
        return Boolean(!narrow || this.hasSearchText).toString();
    }
    computeIsSpinnerShown_() {
        const showSpinner = this.spinnerActive && this.showingSearch;
        if (showSpinner) {
            this.$.spinnerTemplate.if = true;
        }
        return showSpinner;
    }
    onInputFocus_() {
        this.searchFocused_ = true;
    }
    onInputBlur_() {
        this.searchFocused_ = false;
        if (!this.hasSearchText) {
            this.showingSearch = false;
        }
    }
    onSearchTermKeydown_(e) {
        if (e.key === 'Escape') {
            this.showingSearch = false;
            this.setValue('');
            this.getSearchInput().blur();
        }
    }
    showSearch_(e) {
        if (e.target !== this.shadowRoot.querySelector('#clearSearch')) {
            this.showingSearch = true;
        }
        if (this.narrow) {
            this.focus_();
        }
    }
    clearSearch_() {
        this.setValue('');
        this.focus_();
        this.spinnerActive = false;
    }
}
customElements.define(CrToolbarSearchFieldElement.is, CrToolbarSearchFieldElement);

function getTemplate$5() {
    return html `<!--_html_template_start_-->    <style include="cr-icons cr-hidden-style">:host{align-items:center;background-color:var(--cr-toolbar-background-color);color:var(--google-grey-900);display:flex;height:var(--cr-toolbar-height)}@media (prefers-color-scheme:dark){:host{border-bottom:var(--cr-separator-line);box-sizing:border-box;color:var(--cr-secondary-text-color)}:host-context([chrome-refresh-2023]):host{background-color:transparent;border-bottom:none}}h1{flex:1;font-size:170%;font-weight:var(--cr-toolbar-header-font-weight,500);letter-spacing:.25px;line-height:normal;margin-inline-start:6px;padding-inline-end:12px;white-space:var(--cr-toolbar-header-white-space,normal)}@media (prefers-color-scheme:dark){h1{color:var(--cr-primary-text-color)}}#leftContent{position:relative;transition:opacity .1s}#leftSpacer{align-items:center;box-sizing:border-box;display:flex;padding-inline-start:calc(12px + 6px);width:var(--cr-toolbar-left-spacer-width,auto)}cr-icon-button{--cr-icon-button-size:32px;min-width:32px}@media (prefers-color-scheme:light){cr-icon-button{--cr-icon-button-fill-color:currentColor;--cr-icon-button-focus-outline-color:var(--cr-focus-outline-color)}}#centeredContent{display:flex;flex:1 1 0;justify-content:center}#rightSpacer{padding-inline-end:12px}:host([narrow]) #centeredContent{justify-content:flex-end}:host([has-overlay]){transition:visibility var(--cr-toolbar-overlay-animation-duration);visibility:hidden}:host([narrow][showing-search_]) #leftContent{opacity:0;position:absolute}:host(:not([narrow])) #leftContent{flex:1 1 var(--cr-toolbar-field-margin,0)}:host(:not([narrow])) #centeredContent{flex-basis:var(--cr-toolbar-center-basis,0)}:host(:not([narrow])[disable-right-content-grow]) #centeredContent{justify-content:start;padding-inline-start:12px}:host(:not([narrow])) #rightContent{flex:1 1 0;text-align:end}:host(:not([narrow])[disable-right-content-grow]) #rightContent{flex:0 1 0}picture{display:none}#menuButton{margin-inline-end:9px}#menuButton~h1{margin-inline-start:0}:host(:not([narrow])) picture,:host([always-show-logo]) picture{display:initial;margin-inline-end:16px}:host(:not([narrow])) #leftSpacer,:host([always-show-logo]) #leftSpacer{padding-inline-start:calc(12px + 9px)}:host(:not([narrow])) :is(picture,#product-logo),:host([always-show-logo]) :is(picture,#product-logo){height:24px;width:24px}</style>
    <div id="leftContent">
      <div id="leftSpacer">
        <template is="dom-if" if="[[showMenu]]" restamp>
          <cr-icon-button id="menuButton" class="no-overlap" iron-icon="cr20:menu" on-click="onMenuClick_" aria-label$="[[menuLabel]]" title="[[menuLabel]]">
          </cr-icon-button>
        </template>
        <slot name="product-logo">
          <picture>
            <source media="(prefers-color-scheme: dark)" srcset="//resources/images/chrome_logo_dark.svg">
            <img id="product-logo" srcset="chrome://theme/current-channel-logo@1x, chrome://theme/current-channel-logo@2x 2x" role="presentation">
          </picture>
        </slot>
        <h1>[[pageName]]</h1>
      </div>
    </div>

    <div id="centeredContent" hidden$="[[!showSearch]]">
      <cr-toolbar-search-field id="search" narrow="[[narrow]]" label="[[searchPrompt]]" clear-label="[[clearLabel]]" spinner-active="[[spinnerActive]]" showing-search="{{showingSearch_}}" autofocus$="[[autofocus]]">
      </cr-toolbar-search-field>
      <iron-media-query query="(max-width: [[narrowThreshold]]px)" query-matches="{{narrow}}">
      </iron-media-query>
    </div>

    <div id="rightContent">
      <div id="rightSpacer">
        <slot></slot>
      </div>
    </div>
<!--_html_template_end_-->`;
}

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrToolbarElement extends PolymerElement {
    static get is() {
        return 'cr-toolbar';
    }
    static get template() {
        return getTemplate$5();
    }
    static get properties() {
        return {
            // Name to display in the toolbar, in titlecase.
            pageName: String,
            // Prompt text to display in the search field.
            searchPrompt: String,
            // Tooltip to display on the clear search button.
            clearLabel: String,
            // Tooltip to display on the menu button.
            menuLabel: String,
            // Value is proxied through to cr-toolbar-search-field. When true,
            // the search field will show a processing spinner.
            spinnerActive: Boolean,
            // Controls whether the menu button is shown at the start of the menu.
            showMenu: { type: Boolean, value: false },
            // Controls whether the search field is shown.
            showSearch: { type: Boolean, value: true },
            // Controls whether the search field is autofocused.
            autofocus: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            // True when the toolbar is displaying in narrow mode.
            narrow: {
                type: Boolean,
                reflectToAttribute: true,
                readonly: true,
                notify: true,
            },
            /**
             * The threshold at which the toolbar will change from normal to narrow
             * mode, in px.
             */
            narrowThreshold: {
                type: Number,
                value: 900,
            },
            alwaysShowLogo: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            showingSearch_: {
                type: Boolean,
                reflectToAttribute: true,
            },
        };
    }
    getSearchField() {
        return this.$.search;
    }
    onMenuClick_() {
        this.dispatchEvent(new CustomEvent('cr-toolbar-menu-click', { bubbles: true, composed: true }));
    }
    focusMenuButton() {
        requestAnimationFrame(() => {
            // Wait for next animation frame in case dom-if has not applied yet and
            // added the menu button.
            const menuButton = this.shadowRoot.querySelector('#menuButton');
            if (menuButton) {
                menuButton.focus();
            }
        });
    }
    isMenuFocused() {
        return !!this.shadowRoot.activeElement &&
            this.shadowRoot.activeElement.id === 'menuButton';
    }
}
customElements.define(CrToolbarElement.is, CrToolbarElement);

function getTemplate$4() {
    return html `<!--_html_template_start_--><style include="shared-style">cr-toolbar{min-height:56px;--cr-toolbar-center-basis:var(--password-manager-main-basis);--cr-toolbar-header-white-space:nowrap}cr-toolbar:not([narrow]){--cr-toolbar-left-spacer-width:var(--side-bar-width)}#product-logo{height:24px;margin-inline-end:16px;margin-top:6px;width:24px}</style>
<cr-toolbar id="mainToolbar" on-keydown="onKeyDown_" page-name="[[pageName]]" clear-label="$i18n{clearSearch}" search-prompt="$i18n{searchPrompt}" menu-label="$i18n{menuButtonLabel}" autofocus on-search-changed="onSearchChanged_" role="banner" show-menu="[[narrow]]" narrow="[[narrow]]" narrow-threshold="1036">
  <picture slot="product-logo">
    <img id="product-logo" srcset="chrome://password-manager/images/password_manager_logo.svg" role="presentation">
  </picture>
  <cr-icon-button id="helpButton" iron-icon="cr:help-outline" title="$i18n{help}" on-click="onHelpClick_" dir="ltr">
  </cr-icon-button>
</cr-toolbar>
<!--_html_template_end_-->`;
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PASSWORD_MANAGER_OVERFLOW_MENU_ELEMENT_ID = 'PasswordManagerUI::kOverflowMenuElementId';
const PasswordManagerToolbarElementBase = HelpBubbleMixin(I18nMixin(RouteObserverMixin(PolymerElement)));
class PasswordManagerToolbarElement extends PasswordManagerToolbarElementBase {
    static get is() {
        return 'password-manager-toolbar';
    }
    static get template() {
        return getTemplate$4();
    }
    static get properties() {
        return {
            narrow: Boolean,
            pageName: String,
        };
    }
    currentRouteChanged(newRoute, _oldRoute) {
        this.updateSearchTerm(newRoute.queryParameters);
    }
    ready() {
        super.ready();
        this.$.mainToolbar.addEventListener('dom-change', (e) => {
            const crToolbar = e.target;
            if (!crToolbar) {
                return;
            }
            const menuButton = crToolbar.shadowRoot?.getElementById('menuButton');
            if (menuButton) {
                this.registerHelpBubble(PASSWORD_MANAGER_OVERFLOW_MENU_ELEMENT_ID, menuButton);
            }
        });
    }
    get searchField() {
        return this.$.mainToolbar.getSearchField();
    }
    onSearchChanged_(event) {
        const newParams = new URLSearchParams();
        if (event.detail) {
            newParams.set(UrlParam.SEARCH_TERM, event.detail);
            // Switch to passwords page, since search is supported only on passwords.
            if (Router.getInstance().currentRoute.page !== Page.PASSWORDS) {
                Router.getInstance().navigateTo(Page.PASSWORDS, null, newParams);
                return;
            }
        }
        Router.getInstance().updateRouterParams(newParams);
    }
    updateSearchTerm(query) {
        const searchTerm = query.get(UrlParam.SEARCH_TERM) || '';
        if (searchTerm !== this.searchField.getValue()) {
            this.searchField.setValue(searchTerm);
        }
    }
    onHelpClick_() {
        OpenWindowProxyImpl.getInstance().openUrl(this.i18n('passwordManagerLearnMoreURL'));
    }
    onKeyDown_(e) {
        if (e.key === 'Enter') {
            this.dispatchEvent(new CustomEvent('search-enter-click', { bubbles: true, composed: true }));
            e.preventDefault();
        }
    }
}
customElements.define(PasswordManagerToolbarElement.is, PasswordManagerToolbarElement);

// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/** This is used to identify keyboard shortcuts. */
class KeyboardShortcut {
    useKeyCode_ = false;
    mods_ = {};
    key_ = null;
    keyCode_ = null;
    /**
     * @param shortcut The text used to describe the keys for this
     *     keyboard shortcut.
     */
    constructor(shortcut) {
        shortcut.split('|').forEach((part) => {
            const partLc = part.toLowerCase();
            switch (partLc) {
                case 'alt':
                case 'ctrl':
                case 'meta':
                case 'shift':
                    this.mods_[partLc + 'Key'] = true;
                    break;
                default:
                    if (this.key_) {
                        throw Error('Invalid shortcut');
                    }
                    this.key_ = part;
                    // For single key alpha shortcuts use event.keyCode rather than
                    // event.key to match how chrome handles shortcuts and allow
                    // non-english language input to work.
                    if (part.match(/^[a-z]$/)) {
                        this.useKeyCode_ = true;
                        this.keyCode_ = part.toUpperCase().charCodeAt(0);
                    }
            }
        });
    }
    /**
     * Whether the keyboard shortcut object matches a keyboard event.
     * @param e The keyboard event object.
     * @return Whether we found a match or not.
     */
    matchesEvent(e) {
        if ((this.useKeyCode_ && e.keyCode === this.keyCode_) ||
            e.key === this.key_) {
            // All keyboard modifiers need to match.
            const mods = this.mods_;
            return ['altKey', 'ctrlKey', 'metaKey', 'shiftKey'].every(function (k) {
                return e[k] === !!mods[k];
            });
        }
        return false;
    }
}
/** A list of keyboard shortcuts which all perform one command. */
class KeyboardShortcutList {
    shortcuts_;
    /**
     * @param shortcuts Text-based representation of one or more
     *     keyboard shortcuts, separated by spaces.
     */
    constructor(shortcuts) {
        this.shortcuts_ = shortcuts.split(/\s+/).map(function (shortcut) {
            return new KeyboardShortcut(shortcut);
        });
    }
    /**
     * Returns true if any of the keyboard shortcuts in the list matches a
     * keyboard event.
     */
    matchesEvent(e) {
        return this.shortcuts_.some(function (keyboardShortcut) {
            return keyboardShortcut.matchesEvent(e);
        });
    }
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Listens for a find keyboard shortcut (i.e. Ctrl/Cmd+f or /)
 * and keeps track of an stack of potential listeners. Only the listener at the
 * top of the stack will be notified that a find shortcut has been invoked.
 */
const FindShortcutManager = (() => {
    /**
     * Stack of listeners. Only the top listener will handle the shortcut.
     */
    const listeners = [];
    /**
     * Tracks if any modal context is open in settings. This assumes only one
     * modal can be open at a time. The modals that are being tracked include
     * cr-dialog and cr-drawer.
     * @type {boolean}
     */
    let modalContextOpen = false;
    const shortcutCtrlF = new KeyboardShortcutList(isMac ? 'meta|f' : 'ctrl|f');
    const shortcutSlash = new KeyboardShortcutList('/');
    window.addEventListener('keydown', e => {
        if (e.defaultPrevented || listeners.length === 0) {
            return;
        }
        const element = e.composedPath()[0];
        if (!shortcutCtrlF.matchesEvent(e) &&
            (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA' ||
                !shortcutSlash.matchesEvent(e))) {
            return;
        }
        const focusIndex = listeners.findIndex(listener => listener.searchInputHasFocus());
        // If no listener has focus or the first (outer-most) listener has focus,
        // try the last (inner-most) listener.
        // If a listener has a search input with focus, the next listener that
        // should be called is the right before it in |listeners| such that the
        // goes from inner-most to outer-most.
        const index = focusIndex <= 0 ? listeners.length - 1 : focusIndex - 1;
        if (listeners[index].handleFindShortcut(modalContextOpen)) {
            e.preventDefault();
        }
    });
    window.addEventListener('cr-dialog-open', () => {
        modalContextOpen = true;
    });
    window.addEventListener('cr-drawer-opened', () => {
        modalContextOpen = true;
    });
    window.addEventListener('close', e => {
        if (['CR-DIALOG', 'CR-DRAWER'].includes(e.composedPath()[0].nodeName)) {
            modalContextOpen = false;
        }
    });
    return Object.freeze({ listeners: listeners });
})();
/**
 * Used to determine how to handle find shortcut invocations.
 */
const FindShortcutMixin = dedupingMixin((superClass) => {
    class FindShortcutMixin extends superClass {
        constructor() {
            super(...arguments);
            this.findShortcutListenOnAttach = true;
        }
        connectedCallback() {
            super.connectedCallback();
            if (this.findShortcutListenOnAttach) {
                this.becomeActiveFindShortcutListener();
            }
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            if (this.findShortcutListenOnAttach) {
                this.removeSelfAsFindShortcutListener();
            }
        }
        becomeActiveFindShortcutListener() {
            const listeners = FindShortcutManager.listeners;
            assert(!listeners.includes(this), 'Already listening for find shortcuts.');
            listeners.push(this);
        }
        handleFindShortcutInternal_() {
            assertNotReached('Must override handleFindShortcut()');
        }
        handleFindShortcut(_modalContextOpen) {
            this.handleFindShortcutInternal_();
            return false;
        }
        removeSelfAsFindShortcutListener() {
            const listeners = FindShortcutManager.listeners;
            const index = listeners.indexOf(this);
            assert(listeners.includes(this), 'Find shortcut listener not found.');
            listeners.splice(index, 1);
        }
        searchInputHasFocusInternal_() {
            assertNotReached('Must override searchInputHasFocus()');
        }
        searchInputHasFocus() {
            this.searchInputHasFocusInternal_();
            return false;
        }
    }
    return FindShortcutMixin;
});

function getTemplate$3() {
    return html `<!--_html_template_start_--><style include="cr-page-host-style cr-shared-style shared-style">:host{display:flex;flex-direction:column;height:100%}#container{align-items:flex-start;display:flex;flex:1;overflow:overlay;position:relative}#content,#sidebar,#space-holder{flex:1 1 0}#space-holder{min-width:56px}#sidebar{height:100%;position:sticky;top:0;z-index:1}#content{flex-basis:var(--password-manager-main-basis);height:100%}#checkupDetails{height:100%}checkup-details-section{height:auto!important;min-height:100%}password-details-section,passwords-section,settings-section{padding-bottom:28px}@media (max-width:1036px){#content{min-width:auto;padding:0 3px}}@media not (max-width:1036px){#content *{min-width:680px}}#cr-container-shadow-top{z-index:2}#removalNotification{display:flex;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}password-manager-side-bar{min-width:var(--side-bar-width)}</style>
<settings-prefs id="prefs" prefs="{{prefs_}}"></settings-prefs>
<password-manager-toolbar id="toolbar" narrow="[[narrow_]]" page-name="[[pageTitle_]]" on-search-enter-click="onSearchEnterClick_">
</password-manager-toolbar>
<div id="container" role="group">
  <password-manager-side-bar id="sidebar" hidden$="[[narrow_]]">
  </password-manager-side-bar>
  <iron-pages id="content" attr-for-selected="path" fallback-selection="passwords" selected="[[selectedPage_]]" on-iron-select="onIronSelect_">
    <passwords-section id="passwords" path="passwords" prefs="{{prefs_}}" focus-config="[[focusConfig_]]" class="cr-centered-card-container">
    </passwords-section>
    <checkup-section id="checkup" path="checkup" focus-config="[[focusConfig_]]" class="cr-centered-card-container">
    </checkup-section>
    <settings-section id="settings" path="settings" prefs="{{prefs_}}" class="cr-centered-card-container">
    </settings-section>
    <div id="passwordDetails" path="password-details">
      <template is="dom-if" restamp if="[[showPage(selectedPage_, pagesValueEnum_.PASSWORD_DETAILS)]]">
        <password-details-section class="cr-centered-card-container" on-password-removed="onPasswordRemoved_" prefs="{{prefs_}}" on-passkey-removed="onPasskeyRemoved_" on-password-moved="onPasswordMoved_">
        </password-details-section>
      </template>
    </div>
    <div id="checkupDetails" path="checkup-details">
      <template is="dom-if" restamp if="[[showPage(selectedPage_, pagesValueEnum_.CHECKUP_DETAILS)]]">
        <checkup-details-section class="cr-centered-card-container" on-password-removed="onPasswordRemoved_" prefs="{{prefs_}}">
        </checkup-details-section>
      </template>
    </div>
  </iron-pages>
  
  <div id="space-holder" hidden$="[[narrow_]]"></div>
<div>
<cr-drawer id="drawer" heading="$i18n{passwordManagerString}" align="$i18n{textdirection}">
  <div slot="body">
    <template is="dom-if" id="drawerTemplate">
      <password-manager-side-bar id="drawerSidebar"></password-manager-side-bar>
    </template>
  </div>
</cr-drawer>
<iron-media-query query="(max-width: 1036px)" query-matches="{{narrow_}}">
</iron-media-query>
<iron-media-query query="(max-width: 1200px)" query-matches="{{collapsed_}}">
</iron-media-query>
<cr-toast id="toast" duration="5000">
  <span id="removalNotification">[[toastMessage_]]</span>
  <cr-button id="undo-removal" aria-label="$i18n{undoDescription}" on-click="onUndoButtonClick_" hidden$="[[!showUndo_]]">
    $i18n{undoRemovePassword}
  </cr-button>
</cr-toast>
</div></div><!--_html_template_end_-->`;
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Checks if an HTML element is an editable. An editable is either a text
 * input or a text area.
 */
function isEditable(element) {
    const nodeName = element.nodeName.toLowerCase();
    return element.nodeType === Node.ELEMENT_NODE &&
        (nodeName === 'textarea' ||
            (nodeName === 'input' &&
                /^(?:text|search|email|number|tel|url|password)$/i.test(element.type)));
}
const PasswordManagerAppElementBase = FindShortcutMixin(I18nMixin(CrContainerShadowMixin(RouteObserverMixin(PolymerElement))));
class PasswordManagerAppElement extends PasswordManagerAppElementBase {
    constructor() {
        super(...arguments);
        this.pageTitle_ = this.i18n('passwordManagerTitle');
    }
    static get is() {
        return 'password-manager-app';
    }
    static get template() {
        return getTemplate$3();
    }
    static get properties() {
        return {
            /**
             * Preferences state.
             */
            prefs_: Object,
            selectedPage_: String,
            narrow_: {
                type: Boolean,
                observer: 'onMaxWidthChanged_',
            },
            collapsed_: {
                type: Boolean,
                observer: 'onMaxWidthChanged_',
            },
            pageTitle_: {
                type: String,
            },
            /*
             * Mirroring the enum so that it can be used from HTML bindings.
             */
            pagesValueEnum_: {
                type: Object,
                value: Page,
            },
            toastMessage_: String,
            /**
             * Whether to show an "undo" button on the removal toast.
             */
            showUndo_: Boolean,
            /**
             * A Map specifying which element should be focused when exiting a
             * subpage. The key of the map holds a Route path, and the value holds
             * either a query selector that identifies the desired element, an element
             * or a function to be run when a neon-animation-finish event is handled.
             */
            focusConfig_: {
                type: Object,
                value() {
                    const map = new Map();
                    return map;
                },
            },
        };
    }
    ready() {
        super.ready();
        window.CrPolicyStrings = {
            controlledSettingExtension: loadTimeData.getString('controlledSettingExtension'),
            controlledSettingExtensionWithoutName: loadTimeData.getString('controlledSettingExtensionWithoutName'),
            controlledSettingPolicy: loadTimeData.getString('controlledSettingPolicy'),
            controlledSettingRecommendedMatches: loadTimeData.getString('controlledSettingRecommendedMatches'),
            controlledSettingRecommendedDiffers: loadTimeData.getString('controlledSettingRecommendedDiffers'),
            controlledSettingChildRestriction: loadTimeData.getString('controlledSettingChildRestriction'),
            controlledSettingParent: loadTimeData.getString('controlledSettingParent'),
            // 
            controlledSettingShared: loadTimeData.getString('controlledSettingShared'),
            controlledSettingWithOwner: loadTimeData.getString('controlledSettingWithOwner'),
            controlledSettingNoOwner: loadTimeData.getString('controlledSettingNoOwner'),
            // 
        };
        document.addEventListener('keydown', e => {
            // 
            // 
            if (e.ctrlKey && e.key === 'z') {
                this.onUndoKeyBinding_(e);
            }
            // 
        });
        // Lazy-create the drawer the first time it is opened or swiped into view.
        listenOnce(this.$.drawer, 'cr-drawer-opening', () => {
            this.$.drawerTemplate.if = true;
        });
        this.addEventListener('cr-toolbar-menu-click', this.onMenuButtonClick_);
        this.addEventListener('close-drawer', this.closeDrawer_);
    }
    currentRouteChanged(route) {
        this.selectedPage_ = route.page;
        setTimeout(() => {
            if (route.page === Page.CHECKUP_DETAILS) {
                this.enableShadowBehavior(false);
                this.showDropShadows();
            }
            else {
                this.enableShadowBehavior(true);
            }
        }, 0);
    }
    // Override FindShortcutMixin methods.
    handleFindShortcut(modalContextOpen) {
        if (modalContextOpen) {
            return false;
        }
        // Redirect to Password Manager search on Passwords page.
        if (Router.getInstance().currentRoute.page === Page.PASSWORDS) {
            this.$.toolbar.searchField.showAndFocus();
            return true;
        }
        return false;
    }
    // Override FindShortcutMixin methods.
    searchInputHasFocus() {
        return this.$.toolbar.searchField.isSearchFocused();
    }
    onMaxWidthChanged_() {
        if (this.$.drawer.open && !this.narrow_) {
            this.$.drawer.close();
        }
        // Window is greater than 980px but less than 1200px.
        if (!this.narrow_ && this.collapsed_) {
            this.pageTitle_ = this.i18n('passwordManagerString');
        }
        else {
            this.pageTitle_ = this.i18n('passwordManagerTitle');
        }
    }
    onMenuButtonClick_() {
        this.$.drawer.toggle();
    }
    closeDrawer_() {
        if (this.$.drawer && this.$.drawer.open) {
            this.$.drawer.close();
        }
    }
    setNarrowForTesting(state) {
        this.narrow_ = state;
    }
    showPage(currentPage, pageToShow) {
        return currentPage === pageToShow;
    }
    /**
     * Handle the shortcut to undo a removal of passwords/exceptions. This must
     * be handled here and not at the PasswordDetailsCard level because that
     * component does not know about exception deletions.
     */
    onUndoKeyBinding_(event) {
        const activeElement = getDeepActiveElement();
        // If the focused element is editable (e.g. search box) the undo event
        // should be handled there and not here.
        if (!activeElement || !isEditable(activeElement)) {
            this.onUndoButtonClick_();
            // Preventing the default is necessary to not conflict with a possible
            // search action.
            event.preventDefault();
        }
    }
    onPasswordRemoved_(_event) {
        // TODO(crbug.com/1350947): Show different message if account store user.
        this.showUndo_ = true;
        this.toastMessage_ = this.i18n('passwordDeleted');
        this.$.toast.show();
    }
    onPasskeyRemoved_() {
        this.showUndo_ = false;
        this.toastMessage_ = this.i18n('passkeyDeleted');
        this.$.toast.show();
    }
    onPasswordMoved_(event) {
        this.showUndo_ = false;
        this.toastMessage_ =
            this.i18n('passwordMovedToastMessage', event.detail.accountEmail);
        this.$.toast.show();
    }
    onUndoButtonClick_() {
        PasswordManagerImpl.getInstance().undoRemoveSavedPasswordOrException();
        this.$.toast.hide();
    }
    onSearchEnterClick_() {
        this.$.passwords.focusFirstResult();
    }
    onIronSelect_(e) {
        // Ignore bubbling 'iron-select' events not originating from
        // |content| itself.
        if (e.target !== this.$.content) {
            return;
        }
        if (!this.focusConfig_ || Router.getInstance().previousRoute === null) {
            return;
        }
        const pathConfig = this.focusConfig_.get(Router.getInstance().previousRoute.page);
        if (pathConfig) {
            let handler;
            if (typeof pathConfig === 'function') {
                handler = pathConfig;
            }
            else {
                handler = () => {
                    focusWithoutInk(pathConfig);
                };
            }
            handler();
        }
    }
}
customElements.define(PasswordManagerAppElement.is, PasswordManagerAppElement);

function getTemplate$2() {
    return html `<!--_html_template_start_--><style include="cr-input-style cr-shared-style shared-style credential-details-card"></style>

<cr-input value="[[value]]" id="inputValue" readonly="readonly" class="input-field" label="[[label]]" placeholder="[[placeholder]]" aria-disabled="true">
  <cr-icon-button id="copyButton" class="icon-copy-content" slot="inline-suffix" title="[[copyButtonLabel]]" on-click="onCopyValueClick_" hidden="[[!value]]">
  </cr-icon-button>
</cr-input>

<cr-toast id="toast" duration="5000">
  <span>[[valueCopiedToastLabel]]</span>
</cr-toast>
<!--_html_template_end_-->`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// An element that represents a credential field with a 'copy' button.
class CredentialFieldElement extends PolymerElement {
    static get is() {
        return 'credential-field';
    }
    static get template() {
        return getTemplate$2();
    }
    static get properties() {
        return {
            /**
             * The label on the actual input element. Required.
             */
            label: String,
            /**
             * The label on the copy button. Required.
             */
            copyButtonLabel: String,
            /**
             * Text that appears on the toast when clicking the copy button.
             * Required.
             */
            valueCopiedToastLabel: String,
            /**
             * Field value.
             */
            value: String,
            /*
             * Placeholder when the value is empty.
             */
            placeholder: String,
            /**
             * If set, clicking the copy button will record this password view
             * interaction.
             */
            interactionId: PasswordViewPageInteractions,
        };
    }
    connectedCallback() {
        super.connectedCallback();
        assert(this.label);
        assert(this.copyButtonLabel);
        assert(this.valueCopiedToastLabel);
    }
    onCopyValueClick_() {
        navigator.clipboard.writeText(this.value).catch(() => { });
        this.$.toast.show();
        PasswordManagerImpl.getInstance().extendAuthValidity();
        if (this.interactionId) {
            PasswordManagerImpl.getInstance().recordPasswordViewInteraction(this.interactionId);
        }
    }
}
customElements.define(CredentialFieldElement.is, CredentialFieldElement);

function getTemplate$1() {
    return html `<!--_html_template_start_--><style include="cr-input-style cr-shared-style">#noteField{background:var(--cr-input-background-color);border-radius:10px;display:flex;flex-direction:column;padding:10px 12px}#noteValue{border:0;color:var(--cr-input-color);flex:1;opacity:var(--cr-input-readonly-opacity,.6);overflow:hidden;padding:0;resize:none;text-overflow:ellipsis;white-space:pre-line}#noteValue[limit-note]{max-height:3lh}#noteValue[empty]{color:var(--cr-input-placeholder-color,var(--cr-secondary-text-color));letter-spacing:var(--cr-input-placeholder-letter-spacing)}#showMore{color:var(--cr-link-color)}#noteValue,#showMore{font-family:inherit;letter-spacing:.15px;font-size:inherit}.cr-form-field-label{margin-bottom:8px}:host-context([chrome-refresh-2023]) #label{color:var(--cr-input-label-color);font-size:11px;line-height:16px}</style>

<div id="label" class="cr-form-field-label">$i18n{noteLabel}</div>
<div id="noteField" class="input-field">
  <div id="noteValue" role="textbox" limit-note$="[[!showNoteFully_]]" empty$="[[noteIsEmpty_(note)]]">
    <span>[[getNoteValue_(note)]]</span>
  </div>
  <a id="showMore" href="/" on-click="onshowMoreClick_" hidden="[[isNoteFullyVisible_(showNoteFully_, note)]]">
    $i18n{showMore}
  </a>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CredentialNoteElementBase = I18nMixin(PolymerElement);
class CredentialNoteElement extends CredentialNoteElementBase {
    static get is() {
        return 'credential-note';
    }
    static get template() {
        return getTemplate$1();
    }
    static get properties() {
        return {
            note: String,
        };
    }
    connectedCallback() {
        super.connectedCallback();
        // Set default value here so listeners can be updated properly.
        this.showNoteFully_ = false;
    }
    getNoteValue_() {
        return !this.note ? this.i18n('emptyNote') : this.note;
    }
    noteIsEmpty_() {
        return !this.note;
    }
    isNoteFullyVisible_() {
        return this.showNoteFully_ ||
            this.$.noteValue.scrollHeight === this.$.noteValue.offsetHeight;
    }
    onshowMoreClick_(e) {
        e.preventDefault();
        this.showNoteFully_ = true;
        PasswordManagerImpl.getInstance().extendAuthValidity();
    }
}
customElements.define(CredentialNoteElement.is, CredentialNoteElement);

function getTemplate() {
    return html `<!--_html_template_start_--><style include="shared-style cr-shared-style md-select">cr-link-row[hide-icon]::part(icon){display:none}cr-link-row #selectFileButton{margin-inline-start:16px}div[slot=body]{max-height:60vh}.md-select{--md-select-width:100%;margin-bottom:var(--cr-form-field-bottom-spacing);margin-top:2px}.bold-text{font-weight:700}.flex{display:flex}iron-icon,site-favicon{max-width:16px;padding-inline-end:15px}.failed-row{margin-inline-start:31px;padding-block:8px}.failed-row~.failed-row{border-top:1px solid var(--cr-separator-color)}.url-username-group{display:grid;grid-template-columns:fit-content(50%) 1fr;width:100%}.website:not(:empty){margin-inline-end:16px}.error-status{color:var(--error-color);padding-inline-start:30px}#successIcon{fill:var(--cr-checked-color)}#conflictsWarningIcon{height:18px;--iron-icon-fill-color:rgb(234, 134, 0)}.flex-float-left{margin-inline-end:auto}#skipButton{margin-inline-end:8px}#conflictsList{margin-top:16px}.error-icon{margin-block:auto;--iron-icon-fill-color:var(--error-color)}#failuresSummary{color:var(--cr-primary-text-color);padding:8px 0}#failuresTitleRow{margin-block:16px 8px}#tipBox{align-items:center;background:var(--google-grey-50);border:1px solid var(--cr-separator-color);border-radius:4px;margin-top:16px;padding:8px}#deleteFileOption{margin-top:16px;min-height:36px;padding-inline-start:1px;--cr-checkbox-label-padding-start:16px;--cr-checkbox-size:14px;--cr-checkbox-border-size:1px;--cr-checkbox-ripple-size:36px}@media (prefers-color-scheme:dark){#tipBox{background:var(--google-grey-900)}#conflictsWarningIcon{--iron-icon-fill-color:var(--google-yellow-300)}}</style>

<cr-link-row id="linkRow" class="cr-row" on-click="onBannerClick_" label="$i18n{importPasswords}" sub-label="[[bannerDescription_]]" hide-icon$="[[shouldHideLinkRowIcon_(dialogState_, isAccountStoreUser)]]" ariashowsublabel ariashowlabel roledescription="button" non-clickable$="[[!isAccountStoreUser]]">
  <template is="dom-if" restamp if="[[shouldShowSelectFileButton_(isAccountStoreUser, dialogState_)]]">
    <cr-button id="selectFileButton" on-click="onSelectFileClick_">
      $i18n{selectFile}
    </cr-button>
  </template>
  <template is="dom-if" if="[[isState_(dialogStateEnum_.IN_PROGRESS, dialogState_)]]" restamp>
    <paper-spinner-lite active id="progressSpinner">
    </paper-spinner-lite>
  </template>
</cr-link-row>


<template is="dom-if" if="[[isState_(dialogStateEnum_.STORE_PICKER, dialogState_)]]" restamp>
  <cr-dialog id="dialog" close-text="$i18n{close}" show-on-attach no-cancel>
    <div slot="title" id="title">$i18n{importPasswords}</div>
    <div slot="body">
      <select class="md-select" id="storePicker" autofocus value="[[selectedStoreOption_]]" aria-description="$i18n{importPasswordsStorePickerA11yDescription}">
        <option value="[[storeOptionEnum_.ACCOUNT]]">
          [[getStoreOptionAccountText_(accountEmail)]]
        </option>
        <option value="[[storeOptionEnum_.DEVICE]]">
          $i18n{passwordsStoreOptionDevice}
        </option>
      </select>
      <div id="description">$i18n{importPasswordsSelectFile}</div>
    </div>
    <div slot="button-container">
      <cr-button id="cancelButton" class="cancel-button" on-click="onCloseClick_">
        $i18n{cancel}
      </cr-button>
      <cr-button id="selectFileButton" class="action-button" on-click="onSelectFileClick_">
        $i18n{selectFile}
      </cr-button>
    </div>
  </cr-dialog>
</template>


<template is="dom-if" if="[[isState_(dialogStateEnum_.ERROR, dialogState_)]]" restamp>
  <cr-dialog id="dialog" close-text="$i18n{close}" show-on-attach no-cancel>
    <div slot="title" id="title">$i18n{importPasswordsErrorTitle}</div>
    <div slot="body">
      <template is="dom-if" if="[[isAccountStoreUser]]" restamp>
        <select class="md-select" id="storePicker" autofocus value="[[selectedStoreOption_]]" aria-description="$i18n{importPasswordsStorePickerA11yDescription}">
          <option value="[[storeOptionEnum_.ACCOUNT]]">
            [[getStoreOptionAccountText_(accountEmail)]]
          </option>
          <option value="[[storeOptionEnum_.DEVICE]]">
            $i18n{passwordsStoreOptionDevice}
          </option>
        </select>
      </template>
      <div class="flex">
        <iron-icon class="error-icon" icon="cr:warning"></iron-icon>
        <div id="description" inner-h-t-m-l="[[getErrorDialogDescription_(results_)]]">
        </div>
      </div>
    </div>
    <div slot="button-container">
      <cr-button id="closeButton" class="cancel-button" on-click="onCloseClick_" autofocus>
        $i18n{close}
      </cr-button>
      <cr-button id="selectFileButton" class="action-button" on-click="onSelectFileClick_">
        $i18n{selectFile}
      </cr-button>
    </div>
  </cr-dialog>
</template>


<template is="dom-if" if="[[isState_(dialogStateEnum_.SUCCESS, dialogState_)]]" restamp>
  <cr-dialog id="dialog" close-text="$i18n{close}" show-on-attach no-cancel>
    <div slot="title" id="title">[[getSuccessDialogTitle_(results_)]]</div>
    <div slot="body">
      <div class="flex">
        <iron-icon id="successIcon" icon="cr:check-circle"></iron-icon>
        <div id="description">[[successDescription_]]</div>
      </div>
      <cr-checkbox id="deleteFileOption" hidden="[[shouldHideDeleteFileOption_(results_)]]" inner-h-t-m-l="[[getCheckboxLabelHtml_(results_)]]">
      </cr-checkbox>
      <div hidden="[[shouldHideFailuresSummary_(results_)]]">
        <div id="failuresTitleRow" class="flex-centered">
          <iron-icon class="error-icon" icon="cr:warning"></iron-icon>
          <div id="failuresSummary">[[failedImportsSummary_]]</div>
        </div>
        <template is="dom-repeat" items="[[getFailedImportsWithKnownErrors_(results_)]]">
          <div class="failed-row">
            <div class="flex-centered">
              <site-favicon domain="[[item.url]]" aria-hidden="true">
              </site-favicon>
              <div class="url-username-group">
                <div class="website bold-text text-elide">[[item.url]]</div>
                <div class="username text-elide">[[item.username]]</div>
              </div>
            </div>
            <div class="error-status">
              [[getFailedEntryErrorMessage_(item.status)]]
            </div>
          </div>
        </template>
        <div class="failed-row" hidden="[[!showRowsWithUnknownErrorsSummary_]]">
          <div class="error-status">[[rowsWithUnknownErrorsSummary_]]</div>
        </div>
      </div>
    </div>
    <div slot="button-container">
      <cr-button id="closeButton" class="cancel-button" on-click="onCloseClick_" autofocus>
        $i18n{close}
      </cr-button>
      <cr-button id="viewPasswordsButton" class="action-button" on-click="onViewPasswordsClick_">
        $i18n{viewPasswordsButton}
      </cr-button>
    </div>
  </cr-dialog>
</template>


<template is="dom-if" if="[[isState_(dialogStateEnum_.ALREADY_ACTIVE, dialogState_)]]" restamp>
  <cr-dialog id="dialog" close-text="$i18n{close}" show-on-attach no-cancel>
    <div slot="title" id="title">$i18n{importPasswords}</div>
    <div slot="body" class="flex-centered">
      <iron-icon id="infoIcon" icon="cr:info-outline"></iron-icon>
      <div id="description">$i18n{importPasswordsAlreadyActive}</div>
    </div>
    <div slot="button-container">
      <cr-button id="closeButton" class="action-button" on-click="onCloseClick_" autofocus>
        $i18n{close}
      </cr-button>
    </div>
  </cr-dialog>
</template>


<template is="dom-if" if="[[isState_(dialogStateEnum_.CONFLICTS, dialogState_)]]" restamp>
  <cr-dialog id="dialog" close-text="$i18n{close}" show-on-attach no-cancel>
    <div slot="title" id="title" class="flex-centered">
      <iron-icon id="conflictsWarningIcon" icon="cr:warning"></iron-icon>
      <span>[[conflictsDialogTitle_]]</span>
    </div>
    <div slot="body">
      <div id="description">$i18n{importPasswordsConflictsDescription}</div>
      <div id="conflictsList">
        <template is="dom-repeat" items="[[conflicts_]]">
          <password-preview-item password-id="[[item.id]]" url="[[item.url]]" username="[[item.username]]" password="[[item.password]]" first="[[!index]]" on-change="onPasswordSelectedChange_" checked="[[isPreviewItemChecked_(item.id)]]">
          </password-preview-item>
        </template>
      </div>
    </div>
    <div slot="button-container">
      <cr-button id="cancelButton" class="cancel-button flex-float-left" on-click="onCloseClick_" autofocus>
        $i18n{importPasswordsCancel}
      </cr-button>
      <cr-button id="skipButton" class="skip-button" on-click="onSkipClick_">
        $i18n{importPasswordsSkip}
      </cr-button>
      <cr-button id="replaceButton" class="action-button" on-click="onReplaceClick_" disabled="[[shouldDisableReplace_(conflictsSelectedForReplace_)]]">
        $i18n{importPasswordsReplace}
      </cr-button>
    </div>
  </cr-dialog>
</template>
<!--_html_template_end_-->`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var DialogState;
(function (DialogState) {
    DialogState[DialogState["NO_DIALOG"] = 0] = "NO_DIALOG";
    DialogState[DialogState["IN_PROGRESS"] = 1] = "IN_PROGRESS";
    DialogState[DialogState["STORE_PICKER"] = 2] = "STORE_PICKER";
    DialogState[DialogState["SUCCESS"] = 3] = "SUCCESS";
    DialogState[DialogState["ERROR"] = 4] = "ERROR";
    DialogState[DialogState["ALREADY_ACTIVE"] = 5] = "ALREADY_ACTIVE";
    DialogState[DialogState["CONFLICTS"] = 6] = "CONFLICTS";
})(DialogState || (DialogState = {}));
/**
 * Should be kept in sync with
 * |password_manager::metrics_util::PasswordsImportDesktopInteractions|.
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 */
var PasswordsImportDesktopInteractions;
(function (PasswordsImportDesktopInteractions) {
    PasswordsImportDesktopInteractions[PasswordsImportDesktopInteractions["DIALOG_OPENED_FROM_THREE_DOT_MENU"] = 0] = "DIALOG_OPENED_FROM_THREE_DOT_MENU";
    PasswordsImportDesktopInteractions[PasswordsImportDesktopInteractions["DIALOG_OPENED_FROM_EMPTY_STATE"] = 1] = "DIALOG_OPENED_FROM_EMPTY_STATE";
    PasswordsImportDesktopInteractions[PasswordsImportDesktopInteractions["CANCELED_BEFORE_FILE_SELECT"] = 2] = "CANCELED_BEFORE_FILE_SELECT";
    PasswordsImportDesktopInteractions[PasswordsImportDesktopInteractions["UPM_STORE_PICKER_OPENED"] = 3] = "UPM_STORE_PICKER_OPENED";
    PasswordsImportDesktopInteractions[PasswordsImportDesktopInteractions["UPM_FILE_SELECT_LAUNCHED"] = 4] = "UPM_FILE_SELECT_LAUNCHED";
    PasswordsImportDesktopInteractions[PasswordsImportDesktopInteractions["UPM_VIEW_PASSWORDS_CLICKED"] = 5] = "UPM_VIEW_PASSWORDS_CLICKED";
    PasswordsImportDesktopInteractions[PasswordsImportDesktopInteractions["CONFLICTS_CANCELED"] = 6] = "CONFLICTS_CANCELED";
    PasswordsImportDesktopInteractions[PasswordsImportDesktopInteractions["CONFLICTS_REAUTH_FAILED"] = 7] = "CONFLICTS_REAUTH_FAILED";
    PasswordsImportDesktopInteractions[PasswordsImportDesktopInteractions["CONFLICTS_SKIP_CLICKED"] = 8] = "CONFLICTS_SKIP_CLICKED";
    PasswordsImportDesktopInteractions[PasswordsImportDesktopInteractions["CONFLICTS_REPLACE_CLICKED"] = 9] = "CONFLICTS_REPLACE_CLICKED";
    // Must be last.
    PasswordsImportDesktopInteractions[PasswordsImportDesktopInteractions["COUNT"] = 10] = "COUNT";
})(PasswordsImportDesktopInteractions || (PasswordsImportDesktopInteractions = {}));
function recordPasswordsImportInteraction(interaction) {
    chrome.metricsPrivate.recordEnumerationValue('PasswordManager.Import.DesktopInteractions', interaction, PasswordsImportDesktopInteractions.COUNT);
}
const PasswordsImporterElementBase = I18nMixin(PolymerElement);
class PasswordsImporterElement extends PasswordsImporterElementBase {
    constructor() {
        super(...arguments);
        this.dialogState_ = DialogState.NO_DIALOG;
        this.results_ = null;
        this.passwordManager_ = PasswordManagerImpl.getInstance();
    }
    static get is() {
        return 'passwords-importer';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            dialogState_: Number,
            dialogStateEnum_: {
                type: Object,
                value: DialogState,
                readOnly: true,
            },
            storeOptionEnum_: {
                type: Object,
                value: chrome.passwordsPrivate.PasswordStoreSet,
                readOnly: true,
            },
            selectedStoreOption_: String,
            results_: Object,
            successDescription_: String,
            failedImportsSummary_: String,
            rowsWithUnknownErrorsSummary_: String,
            conflictsDialogTitle_: String,
            conflicts_: {
                type: Array,
                value: [],
            },
            conflictsSelectedForReplace_: {
                type: Array,
                value: [],
            },
            showRowsWithUnknownErrorsSummary_: {
                type: Boolean,
                value: false,
            },
            bannerDescription_: {
                type: String,
                computed: 'computeBannerDescription_(isUserSyncingPasswords,' +
                    'isAccountStoreUser, accountEmail)',
            },
        };
    }
    static get observers() {
        return [
            'updateDefaultStore_(isAccountStoreUser)',
            'updatePasswordsSavedToAccount_(isUserSyncingPasswords)',
        ];
    }
    launchImport() {
        recordPasswordsImportInteraction(PasswordsImportDesktopInteractions.DIALOG_OPENED_FROM_EMPTY_STATE);
        this.dialogState_ = DialogState.IN_PROGRESS;
        // Timeout is needed to allow Polymer to render the Settings page before the
        // system file picker has been opened.
        setTimeout(() => {
            if (this.isAccountStoreUser) {
                this.dialogState_ = DialogState.STORE_PICKER;
            }
            else {
                this.selectFileHelper_();
            }
        }, 200);
    }
    updateDefaultStore_() {
        if (this.isAccountStoreUser) {
            PasswordManagerImpl.getInstance().isAccountStoreDefault().then(isAccountStoreDefault => {
                this.selectedStoreOption_ = isAccountStoreDefault ?
                    chrome.passwordsPrivate.PasswordStoreSet.ACCOUNT :
                    chrome.passwordsPrivate.PasswordStoreSet.DEVICE;
            });
        }
    }
    updatePasswordsSavedToAccount_() {
        if (this.isUserSyncingPasswords) {
            this.passwordsSavedToAccount_ = true;
        }
        else {
            this.passwordsSavedToAccount_ = false;
        }
    }
    isState_(state) {
        return this.dialogState_ === state;
    }
    computeBannerDescription_() {
        if (this.isAccountStoreUser) {
            return this.i18n('importPasswordsGenericDescription');
        }
        if (this.isUserSyncingPasswords) {
            return this.i18n('importPasswordsDescriptionAccount', this.i18n('localPasswordManager'), this.accountEmail);
        }
        return this.i18n('importPasswordsDescriptionDevice');
    }
    onBannerClick_() {
        if (this.isAccountStoreUser && this.isState_(DialogState.NO_DIALOG)) {
            recordPasswordsImportInteraction(PasswordsImportDesktopInteractions.UPM_STORE_PICKER_OPENED);
            this.dialogState_ = DialogState.STORE_PICKER;
        }
    }
    closeDialog_() {
        this.dialogState_ = DialogState.NO_DIALOG;
        // TODO(crbug/1432962): Make sure that focus behaves correctly when the
        // dialog is closed.
    }
    async resetImporter() {
        let deleteFile = false;
        if (this.isState_(DialogState.SUCCESS) &&
            !this.shouldHideDeleteFileOption_()) {
            // Trigger the file deletion if checkbox is ticked in SUCCESS (with no
            // errors) state.
            const deleteFileOption = this.shadowRoot.querySelector('#deleteFileOption');
            assert(deleteFileOption);
            deleteFile = deleteFileOption.checked;
            chrome.metricsPrivate.recordBoolean('PasswordManager.Import.FileDeletionSelected', deleteFile);
        }
        await this.passwordManager_.resetImporter(deleteFile);
    }
    async onCloseClick_() {
        if (this.isState_(DialogState.CONFLICTS)) {
            recordPasswordsImportInteraction(PasswordsImportDesktopInteractions.CONFLICTS_CANCELED);
        }
        await this.resetImporter();
        this.closeDialog_();
    }
    async onViewPasswordsClick_() {
        recordPasswordsImportInteraction(PasswordsImportDesktopInteractions.UPM_VIEW_PASSWORDS_CLICKED);
        await this.resetImporter();
        this.closeDialog_();
        Router.getInstance().navigateTo(Page.PASSWORDS);
    }
    async selectFileHelper_() {
        // Clear selected rows from previous import, so it won’t affect the
        // following import.
        this.conflictsSelectedForReplace_ = [];
        this.dialogState_ = DialogState.IN_PROGRESS;
        // For "non-account-store-users" users passwords are stored in the "profile"
        // (DEVICE) store.
        let destinationStore = chrome.passwordsPrivate.PasswordStoreSet.DEVICE;
        if (this.isAccountStoreUser) {
            const storePicker = this.shadowRoot.querySelector('#storePicker');
            assert(storePicker);
            this.selectedStoreOption_ = storePicker.value;
            this.passwordsSavedToAccount_ = this.selectedStoreOption_ ===
                chrome.passwordsPrivate.PasswordStoreSet.ACCOUNT;
            if (this.passwordsSavedToAccount_) {
                destinationStore = chrome.passwordsPrivate.PasswordStoreSet.ACCOUNT;
            }
        }
        this.results_ =
            await this.passwordManager_.importPasswords(destinationStore);
        await this.processResults_();
    }
    async onSelectFileClick_() {
        recordPasswordsImportInteraction(PasswordsImportDesktopInteractions.UPM_FILE_SELECT_LAUNCHED);
        await this.selectFileHelper_();
    }
    async continueImportHelper_(selectedIds) {
        this.dialogState_ = DialogState.IN_PROGRESS;
        // Close the dialog while import is in progress.
        this.results_ = await this.passwordManager_.continueImport(selectedIds);
        if (this.results_.status ===
            chrome.passwordsPrivate.ImportResultsStatus.DISMISSED) {
            recordPasswordsImportInteraction(PasswordsImportDesktopInteractions.CONFLICTS_REAUTH_FAILED);
            // When re-auth fails, restore the conflicts dialog.
            this.dialogState_ = DialogState.CONFLICTS;
            return;
        }
        await this.processResults_();
    }
    async onSkipClick_() {
        recordPasswordsImportInteraction(PasswordsImportDesktopInteractions.CONFLICTS_SKIP_CLICKED);
        await this.continueImportHelper_(/*selectedIds=*/ []);
    }
    async onReplaceClick_() {
        recordPasswordsImportInteraction(PasswordsImportDesktopInteractions.CONFLICTS_REPLACE_CLICKED);
        await this.continueImportHelper_(this.conflictsSelectedForReplace_);
    }
    isPreviewItemChecked_(id) {
        return this.conflictsSelectedForReplace_.includes(id);
    }
    /**
     * Handler for ticking conflicting password checkbox.
     */
    onPasswordSelectedChange_() {
        this.conflictsSelectedForReplace_ =
            Array.from(this.shadowRoot.querySelectorAll('password-preview-item'))
                .filter(item => item.checked)
                .map(item => item.passwordId);
    }
    shouldDisableReplace_() {
        return !this.conflictsSelectedForReplace_.length;
    }
    async processResults_() {
        assert(this.results_);
        switch (this.results_.status) {
            case chrome.passwordsPrivate.ImportResultsStatus.SUCCESS:
                await this.handleSuccess_();
                return;
            case chrome.passwordsPrivate.ImportResultsStatus.MAX_FILE_SIZE:
            case chrome.passwordsPrivate.ImportResultsStatus.IO_ERROR:
            case chrome.passwordsPrivate.ImportResultsStatus.UNKNOWN_ERROR:
            case chrome.passwordsPrivate.ImportResultsStatus.NUM_PASSWORDS_EXCEEDED:
            case chrome.passwordsPrivate.ImportResultsStatus.BAD_FORMAT:
                this.dialogState_ = DialogState.ERROR;
                break;
            case chrome.passwordsPrivate.ImportResultsStatus.CONFLICTS:
                this.conflictsDialogTitle_ =
                    await PluralStringProxyImpl.getInstance().getPluralString('importPasswordsConflictsTitle', this.results_.displayedEntries.length);
                this.conflicts_ = this.results_.displayedEntries;
                this.dialogState_ = DialogState.CONFLICTS;
                break;
            case chrome.passwordsPrivate.ImportResultsStatus.IMPORT_ALREADY_ACTIVE:
                this.dialogState_ = DialogState.ALREADY_ACTIVE;
                break;
            case chrome.passwordsPrivate.ImportResultsStatus.DISMISSED:
                this.dialogState_ = DialogState.NO_DIALOG;
                break;
            default:
                assertNotReached();
        }
    }
    getFailedImportsWithKnownErrors_() {
        assert(this.results_);
        return this.results_.displayedEntries.filter((entry) => entry.status !==
            chrome.passwordsPrivate.ImportEntryStatus.UNKNOWN_ERROR);
    }
    async handleSuccess_() {
        assert(this.results_);
        if (this.results_.displayedEntries.length) {
            const rowsWithUnknownErrorCount = this.results_.displayedEntries
                .filter((entry) => entry.status ===
                chrome.passwordsPrivate.ImportEntryStatus.UNKNOWN_ERROR)
                .length;
            this.failedImportsSummary_ =
                await PluralStringProxyImpl.getInstance().getPluralString('importPasswordsFailuresSummary', this.results_.displayedEntries.length);
            if (rowsWithUnknownErrorCount) {
                this.rowsWithUnknownErrorsSummary_ =
                    await PluralStringProxyImpl.getInstance().getPluralString('importPasswordsBadRowsFormat', rowsWithUnknownErrorCount);
                this.showRowsWithUnknownErrorsSummary_ = true;
            }
        }
        if (this.passwordsSavedToAccount_) {
            let descriptionText = await PluralStringProxyImpl.getInstance().getPluralString('importPasswordsSuccessSummaryAccount', this.results_.numberImported);
            descriptionText =
                descriptionText.replace('$1', this.i18n('localPasswordManager'));
            this.successDescription_ =
                descriptionText.replace('$2', this.accountEmail);
        }
        else {
            const descriptionText = await PluralStringProxyImpl.getInstance().getPluralString('importPasswordsSuccessSummaryDevice', this.results_.numberImported);
            this.successDescription_ =
                descriptionText.replace('$1', this.i18n('localPasswordManager'));
        }
        this.dialogState_ = DialogState.SUCCESS;
    }
    getSuccessDialogTitle_() {
        assert(this.results_);
        return this.results_.displayedEntries.length ?
            this.i18n('importPasswordsCompleteTitle') :
            this.i18n('importPasswordsSuccessTitle');
    }
    getErrorDialogDescription_() {
        assert(this.results_);
        switch (this.results_.status) {
            case chrome.passwordsPrivate.ImportResultsStatus.MAX_FILE_SIZE:
                return this.i18nAdvanced('importPasswordsFileSizeExceeded');
            case chrome.passwordsPrivate.ImportResultsStatus.IO_ERROR:
            case chrome.passwordsPrivate.ImportResultsStatus.UNKNOWN_ERROR:
                return this.i18nAdvanced('importPasswordsUnknownError');
            case chrome.passwordsPrivate.ImportResultsStatus.NUM_PASSWORDS_EXCEEDED:
                return this.i18nAdvanced('importPasswordsLimitExceeded');
            case chrome.passwordsPrivate.ImportResultsStatus.BAD_FORMAT:
                return this.i18nAdvanced('importPasswordsBadFormatError', {
                    attrs: ['class'],
                    substitutions: [
                        this.results_.fileName,
                        loadTimeData.getString('importPasswordsHelpURL'),
                    ],
                });
            default:
                assertNotReached();
        }
    }
    getSuccessTipHtml_() {
        assert(this.results_);
        return this.i18nAdvanced('importPasswordsSuccessTip', { attrs: ['class'], substitutions: [this.results_.fileName] });
    }
    getCheckboxLabelHtml_() {
        assert(this.results_);
        return this.i18nAdvanced('importPasswordsDeleteFileOption', { attrs: ['class'], substitutions: [this.results_.fileName] });
    }
    shouldHideLinkRowIcon_() {
        return !this.isAccountStoreUser || this.isState_(DialogState.IN_PROGRESS);
    }
    shouldShowSelectFileButton_() {
        return !this.isAccountStoreUser && !this.isState_(DialogState.IN_PROGRESS);
    }
    shouldHideDeleteFileOption_() {
        // "Delete file" checkbox is only shown in "success" state if all passwords
        // were imported.
        assert(this.results_);
        return !!this.results_.displayedEntries.length;
    }
    shouldHideFailuresSummary_() {
        assert(this.results_);
        return !this.results_.displayedEntries.length;
    }
    getStoreOptionAccountText_() {
        assert(this.accountEmail);
        return this.i18n('passwordsStoreOptionAccount', this.i18n('localPasswordManager'), this.accountEmail);
    }
    getFailedEntryErrorMessage_(status) {
        // TODO(crbug/1434221): Use constants for length limits.
        switch (status) {
            case chrome.passwordsPrivate.ImportEntryStatus.MISSING_PASSWORD:
                return this.i18n('importPasswordsMissingPassword');
            case chrome.passwordsPrivate.ImportEntryStatus.MISSING_URL:
                return this.i18n('importPasswordsMissingURL');
            case chrome.passwordsPrivate.ImportEntryStatus.INVALID_URL:
                return this.i18n('importPasswordsInvalidURL');
            case chrome.passwordsPrivate.ImportEntryStatus.LONG_URL:
                return this.i18n('importPasswordsLongURL');
            case chrome.passwordsPrivate.ImportEntryStatus.LONG_PASSWORD:
                return this.i18n('importPasswordsLongPassword');
            case chrome.passwordsPrivate.ImportEntryStatus.LONG_USERNAME:
                return this.i18n('importPasswordsLongUsername');
            case chrome.passwordsPrivate.ImportEntryStatus.CONFLICT_PROFILE:
                if (this.isUserSyncingPasswords) {
                    return this.i18n('importPasswordsConflictAccount', this.i18n('localPasswordManager'), this.accountEmail);
                }
                return this.i18n('importPasswordsConflictDevice');
            case chrome.passwordsPrivate.ImportEntryStatus.CONFLICT_ACCOUNT:
                return this.i18n('importPasswordsConflictAccount', this.i18n('localPasswordManager'), this.accountEmail);
            case chrome.passwordsPrivate.ImportEntryStatus.LONG_NOTE:
            case chrome.passwordsPrivate.ImportEntryStatus.LONG_CONCATENATED_NOTE:
                return this.i18n('importPasswordsLongNote');
            case chrome.passwordsPrivate.ImportEntryStatus.UNKNOWN_ERROR:
            case chrome.passwordsPrivate.ImportEntryStatus.NON_ASCII_URL:
            default:
                assertNotReached();
        }
    }
}
customElements.define(PasswordsImporterElement.is, PasswordsImporterElement);

export { AddPasswordDialogElement, AuthTimedOutDialogElement, CheckupSubpage, CrButtonElement, CrDialogElement, CrExpandButtonElement, CrInputElement, CrSettingsPrefs, CredentialFieldElement, CredentialNoteElement, DeletePasskeyDialogElement, EditPasskeyDialogElement, EditPasswordDialogElement, OpenWindowProxyImpl, PASSWORD_SHARE_BUTTON_BUTTON_ELEMENT_ID, Page, PasskeyDetailsCardElement, PasswordCheckInteraction, PasswordDetailsCardElement, PasswordDetailsSectionElement, PasswordListItemElement, PasswordManagerAppElement, PasswordManagerImpl, PasswordManagerSideBarElement, PasswordManagerToolbarElement, PasswordViewPageInteractions, PasswordsExporterElement, PasswordsImporterElement, PasswordsSectionElement, PluralStringProxyImpl, PrefToggleButtonElement, PromoCardsProxyImpl, Route, RouteObserverMixin, Router, SettingsPrefsElement, SettingsSectionElement, ShareFlowState, SharePasswordConfirmationDialogElement, SharePasswordFlowElement, SharePasswordGroupAvatarElement, SharePasswordLoadingDialogElement, SharePasswordRecipientElement, SiteFaviconElement, SyncBrowserProxyImpl, TrustedVaultBannerState, UrlParam };
//# sourceMappingURL=password_manager.rollup.js.map
