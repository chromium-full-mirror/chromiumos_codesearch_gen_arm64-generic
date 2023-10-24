import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-shared-style">.cr-row-with-template{padding:0}#liveCaptionToggleButton{width:100%}</style>
<template is="dom-if" if="[[!enableLiveCaptionMultiLanguage_]]">
  <div class="cr-row cr-row-with-template first">
    <settings-toggle-button id="liveCaptionToggleButton" pref="{{prefs.accessibility.captions.live_caption_enabled}}" on-change="onLiveCaptionEnabledChanged_" label="$i18n{captionsEnableLiveCaptionTitle}" sub-label="[[enableLiveCaptionSubtitle_]]">
    </settings-toggle-button>
  </div>
</template>
<!--_html_template_end_-->`;
}
