import{html}from"//resources/polymer/v3_0/polymer/polymer_bundled.min.js";export function getTemplate(){return html`<!--_html_template_start_--><style include="cr-nav-menu-item-style"></style>
<cr-menu-selector id="selector" selectable="a" selected-attribute="selected" selected="{{selectedIndex}}" on-click="onSelectorClick_">
  <template is="dom-repeat" items="[[menuItems_]]">
    <a role="menuitem" href="[[item.path]]" class="cr-nav-menu-item">
      <iron-icon icon="[[item.icon]]" hidden$="[[!showIcons]]"></iron-icon>
      [[item.name]]
      <template is="dom-if" if="[[showRipples]]">
        <paper-ripple></paper-ripple>
      </template>
    </a>
  </template>
</cr-menu-selector>
<!--_html_template_end_-->`}