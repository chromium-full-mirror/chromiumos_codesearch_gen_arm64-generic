import {html} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
  return html`<!--_html_template_start_--><style include="common wallpaper sea-pen">
  .feedback-buttons-container {
    align-items: flex-end;
    background-color: var(--cros-bg-color);
    border-bottom-right-radius: var(--personalization-app-grid-item-border-radius);
    border-top-left-radius: 24px;
    bottom: 0;
    display: flex;
    gap: 16px;
    height: 36px;
    justify-content: flex-end;
    position: absolute;
    right: 0;
    width: 76px;
  }

  cr-icon-button {
    --cr-icon-button-size: 24px;
    margin-inline: 0;
  }
</style>
<div class="feedback-buttons-container">
  <cr-icon-button id="thumbsUp"
      iron-icon="[[getThumbsUpIcon_(selectedFeedbackOption)]]"
      role="button"
      on-click="onClickThumbsUp_">
  </cr-icon-button>
  <cr-icon-button id="thumbsDown"
      iron-icon="[[getThumbsDownIcon_(selectedFeedbackOption)]]"
      role="button"
      on-click="onClickThumbsDown_">
  </cr-icon-button>
</div>
<!--_html_template_end_-->`;
}