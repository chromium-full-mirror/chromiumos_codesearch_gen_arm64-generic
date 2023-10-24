import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-shared-style settings-shared iron-flex">cr-action-menu.dropdown-item{min-height:36px}cr-action-menu hr{border:none;border-top:var(--cr-separator-line);margin:6px 0 0 0}</style>
<template is="dom-if" if="[[shouldShowDotsMenuButton_(eSimNetworkState_, isGuest_)]]" restamp>
  <cr-icon-button class="icon-more-vert" title="$i18n{moreActions}" id="moreNetworkDetail" on-click="onDotsClick_" disabled="[[isDotsMenuButtonDisabled_(eSimNetworkState_, deviceState.*)]]">
  </cr-icon-button>
</template>
<cr-lazy-render id="menu">
  <template>
    <cr-action-menu role-description="$i18n{menu}">
      <button class="dropdown-item" id="renameBtn" on-click="onRenameEsimProfileClick_" role="menuitem">
        $i18n{networkDetailMenuRenameESim}
      </button>
      <hr>
      <button class="dropdown-item" on-click="onRemoveEsimProfileClick_" role="menuitem" id="removeBtn">
        $i18n{networkDetailMenuRemoveESim}
      </button>
    </cr-action-menu>
  </template>
</cr-lazy-render>
<!--_html_template_end_-->`;
}
