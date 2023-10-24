import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared">.settings-box{padding-inline-start:0}.start-padding{padding-inline-start:var(--cr-section-padding)}cr-link-row,settings-toggle-button{padding-inline-end:var(--cr-section-padding);padding-inline-start:var(--cr-section-padding)}</style>

<settings-toggle-button pref="{{prefs.settings.a11y.mono_audio}}" label="$i18n{monoAudioLabel}" sub-label="$i18n{monoAudioDescription}" deep-link-focus-id$="[[Setting.kMonoAudio]]">
</settings-toggle-button>
<div class="settings-box start-padding">
  <div class="start settings-box-text" id="startupSoundEnabledLabel">
    $i18n{startupSoundLabel}
  </div>
  <cr-toggle id="startupSoundEnabled" aria-labelledby="startupSoundEnabledLabel" deep-link-focus-id$="[[Setting.kStartupSound]]" on-change="toggleStartupSoundEnabled_">
  </cr-toggle>
</div>

<template is="dom-if" if="[[!isKioskModeActive_]]">
  <settings-captions prefs="{{prefs}}"></settings-captions>
</template>
<!--_html_template_end_-->`;
}
