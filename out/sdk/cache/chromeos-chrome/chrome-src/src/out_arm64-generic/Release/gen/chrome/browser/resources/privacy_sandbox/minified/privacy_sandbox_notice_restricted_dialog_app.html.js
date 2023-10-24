import{html}from"//resources/polymer/v3_0/polymer/polymer_bundled.min.js";export function getTemplate(){return html`<!--_html_template_start_--><style include="cr-shared-style shared-style"></style>

<div fill-content role="main">
  <div class="content-area custom-scrollbar" scrollable tabindex="-1">
    <div class="header">
      <img class="logo" alt="">
      <h1>$i18n{m1NoticeRestrictedTitle}</h1>
    </div>
    <div class="section cr-secondary-text">
      $i18n{m1NoticeRestrictedDescription1}
    </div>
    <div class="banner">
      <img class="fledge-banner" alt="">
    </div>
    <div class="section cr-secondary-text">
      $i18n{m1NoticeRestrictedDescription2}
    </div>
    <div class="section cr-secondary-text" id="lastTextElement">
      $i18n{m1NoticeRestrictedDescription3}
    </div>
    <div class="buttons-container">
      <cr-button id="settingsButton" on-click="onRestrictedNoticeOpenSettings">
        $i18n{m1NoticeRestrictedSettingsButton}
      </cr-button>
      <cr-button id="ackButton" class="action-button" on-click="onRestrictedNoticeAcknowledge">
        $i18n{m1NoticeRestrictedAckButton}
      </cr-button>
    </div>
  </div>
  <div id="showMoreOverlay" hidden="[[wasScrolledToBottom]]">
    <cr-button id="moreButton" on-click="onRestrictedNoticeMoreClicked" class="action-button" aria-hidden="true" tabindex="-1">
      $i18n{m1DialogMoreButton}
      <iron-icon icon="cr:expand-more"></iron-icon>
    </cr-button>
  </div>
</div>
<!--_html_template_end_-->`}