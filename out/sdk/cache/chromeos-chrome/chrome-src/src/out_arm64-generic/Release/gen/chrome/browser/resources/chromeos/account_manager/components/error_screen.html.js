import {html} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
  return html`<!--_html_template_start_--><style>
  /* TODO(anastasiian): move shared font styles to a separate file. */
  h1 {
    font-size: 2em;
    font-weight: normal;
    margin-bottom: 16px;
    margin-top: 28px;
  }

  p {
    line-height: 1.5;
    white-space: pre-line;
  }

  a {
    color: var(--google-blue-700);
    text-decoration: none;
  }

  iron-icon.error-icon {
    color: var(--google-blue-600);
  }

  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .body-container {
    flex-grow: 1;
  }
</style>
<div class="container">
  <iron-icon icon="cr:error-outline" class="error-icon"></iron-icon>
  <h1>[[errorTitle]]</h1>
  <div class="body-container">
    <slot name="body"></slot>
  </div>
</div>
<!--_html_template_end_-->`;
}