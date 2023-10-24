import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><settings-password-prompt-dialog id="passwordPrompt" password-prompt-text="[[selectPasswordPromptEnterPasswordString_(hasPinLogin)]]" on-token-obtained="onTokenObtained_">
</settings-password-prompt-dialog>
<!--_html_template_end_-->`;
}
