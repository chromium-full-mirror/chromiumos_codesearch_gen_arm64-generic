import{html}from"//resources/polymer/v3_0/polymer/polymer_bundled.min.js";export function getTemplate(){return html`<!--_html_template_start_--><style include="cr-icons cr-hidden-style sp-shared-style">hr{border:none;border-top:var(--cr-hairline)}.dropdown-item{justify-content:space-between}</style>

<cr-action-menu id="menu" on-mousedown="onMousedown_">
  <template is="dom-repeat" items="[[getMenuItemsForBookmarks_(
                   bookmarks_, priceTracked_, priceTrackingEligible_)]]">
    <template is="dom-if" if="[[!showDivider_(item)]]" restamp>
      <button class="dropdown-item" on-click="onMenuItemClicked_" disabled="[[item.disabled]]">
        [[item.label]]
      </button>
    </template>
    <template is="dom-if" if="[[showDivider_(item)]]" restamp>
      <hr>
    </template>
  </template>
</cr-action-menu>
<!--_html_template_end_-->`}