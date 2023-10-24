import{html}from"//resources/polymer/v3_0/polymer/polymer_bundled.min.js";export function getTemplate(){return html`<!--_html_template_start_--><style include="history-clusters-shared-style">#actionMenuButton{--cr-icon-button-icon-size:20px;--cr-icon-button-margin-end:8px}:host([in-side-panel_]) #actionMenuButton{--cr-icon-button-icon-size:16px;--cr-icon-button-size:24px}</style>

<cr-icon-button id="actionMenuButton" class="icon-more-vert" title$="[[i18n('actionMenuDescription')]]" aria-haspopup="menu" on-click="onActionMenuButtonClick_">
</cr-icon-button>

<cr-lazy-render id="actionMenu">
  <template>
    <cr-action-menu role-description$="[[i18n('actionMenuDescription')]]">
      <button id="openAllButton" class="dropdown-item" on-click="onOpenAllButtonClick_">
        [[i18n('openAllInTabGroup')]]
      </button>
      <button id="hideAllButton" class="dropdown-item" on-click="onHideAllButtonClick_">
        [[i18n('hideAllVisits')]]
      </button>
      <button id="removeAllButton" class="dropdown-item" on-click="onRemoveAllButtonClick_" hidden="[[!allowDeletingHistory_]]">
        [[i18n('removeAllFromHistory')]]
      </button>
    </cr-action-menu>
  </template>
</cr-lazy-render>
<!--_html_template_end_-->`}