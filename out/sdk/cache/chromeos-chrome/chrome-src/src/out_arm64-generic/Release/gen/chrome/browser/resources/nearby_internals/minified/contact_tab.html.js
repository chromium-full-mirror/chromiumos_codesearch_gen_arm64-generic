import{html}from"//resources/polymer/v3_0/polymer/polymer_bundled.min.js";export function getTemplate(){return html`<!--_html_template_start_--><style include="shared-style">:host{--standard-border:1px solid black}#clearButton{float:right}</style>
<cr-button on-click="onDownloadContacts_" class="internals-button">
  Download Contacts
</cr-button>
<cr-button on-click="onClearMessagesButtonClicked_" class="internals-button" id="clearButton" disabled="[[!contactList_.length]]">
 Clear Messages
</cr-button>
<dom-repeat items="[[contactList_]]" as="contact" id="contact-list" hidden="[[!contactList_.length]]">
  
  <template>
    <contact-object item="[[contact]]">
    </contact-object>
  </template>
</dom-repeat>
<!--_html_template_end_-->`}