import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_-->    <style include="settings-shared">.hide-overflow{overflow:hidden}</style>
    <div class="list-item" focus-row-container>
      <site-favicon url="[[model.url]]"></site-favicon>
      <div class="middle hide-overflow">
        <div class="text-elide">[[model.title]]</div>
        <div class="text-elide secondary">[[model.url]]</div>
      </div>
      <template is="dom-if" if="[[editable]]">
        <cr-icon-button class="icon-more-vert" id="dots" on-click="onDotsClick_" title="$i18n{moreActions}" focus-row-control focus-type="menu">
        </cr-icon-button>
        <cr-lazy-render id="menu">
          <template>
            <cr-action-menu role-description="$i18n{menu}">
              <button class="dropdown-item" on-click="onEditClick_">
                $i18n{edit}
              </button>
              <button class="dropdown-item" id="remove" on-click="onRemoveClick_">
                $i18n{onStartupRemove}
              </button>
            </cr-action-menu>
          </template>
        </cr-lazy-render>
      </template>
    </div>
<!--_html_template_end_-->`;
}
