import{html}from"//resources/polymer/v3_0/polymer/polymer_bundled.min.js";export function getTemplate(){return html`<!--_html_template_start_-->

<style include="md-select cr-input-style support-tool-shared">.md-select{height:27px;margin-bottom:5px;width:248px}#description{background-color:var(--cr-input-background-color);border:none;border-radius:var(--cr-input-border-radius,4px);caret-color:var(--cr-input-focus-color);color:var(--cr-input-color);display:block;font-family:inherit;height:120px;outline:0;padding-bottom:8px;padding-inline-start:10px;padding-top:8px;resize:none;width:520px}</style>

<h1 tabindex="0">$i18n{issueDetailsPageTitle}</h1>
<div class="support-tool-title">$i18n{supportCaseId}</div>
<cr-input class="support-case-id" value="{{caseId_}}" spellcheck="false" maxlength="20" aria-label="$i18n{supportCaseId}">
</cr-input>
<div id="email-title" class="support-tool-title" aria-hidden="true">
  $i18n{email}
</div>
<select class="md-select" value="{{selectedEmail_::change}}" aria-labelledby="email-title">
  <template is="dom-repeat" items="[[emails_]]">
  <option value="[[item]]">[[item]]</option>
  </template>
</select>
<div id="description-title" class="support-tool-title" aria-hidden="true">
  $i18n{describeIssueText}
</div>
<textarea id="description" class="support-tool-text" spellcheck="true" value="{{issueDescription_::input}}" aria-labelledby="description-title" placeholder="$i18n{issueDescriptionPlaceholder}">
</textarea><!--_html_template_end_-->`}