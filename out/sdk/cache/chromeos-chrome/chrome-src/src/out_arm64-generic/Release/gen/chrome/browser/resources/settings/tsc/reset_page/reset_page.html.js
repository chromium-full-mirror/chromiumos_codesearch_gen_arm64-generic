import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_-->    <style include="settings-shared"></style>
    <settings-animated-pages id="reset-pages" section="reset">
      <div route-path="default">
        <cr-link-row id="resetProfile" label="$i18n{resetTrigger}" on-click="onShowResetProfileDialog_"></cr-link-row>
        
        <cr-lazy-render id="resetProfileDialog">
          <template>
            <settings-reset-profile-dialog on-close="onResetProfileDialogClose_">
            </settings-reset-profile-dialog>
          </template>
        </cr-lazy-render>
      </div>

    </settings-animated-pages>
<!--_html_template_end_-->`;
}
