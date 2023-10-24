import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="demo">:host([force-show-announcer_]) cr-a11y-announcer{overflow:visible;position:static}</style>

<h1>cr-a11y-announcer</h1>

<div class="demos">
  <cr-checkbox checked="{{forceShowAnnouncer_}}">
    Force show announcer
  </cr-checkbox>

  <cr-button on-click="onAnnounceTextClick_">
    Announce text
  </cr-button>

  <cr-button on-click="onAnnounceMultipleTextsClick_">
    Announce multiple texts
  </cr-button>

  <div id="announcerContainer"></div>
</div>
<!--_html_template_end_-->`;
}
