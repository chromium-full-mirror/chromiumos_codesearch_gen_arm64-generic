import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style>
  table {
    border-collapse: collapse;
    table-layout: fixed;
    width: 100%;
  }
  td {
    border: 1px solid darkgray;
    overflow: hidden;
    padding: 5px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  thead td {
    font-weight: bold;
  }
  thead td.sort-header::after {
    content: '▼';
    position: absolute;
  }
  thead td.sort-header,
  tbody tr {
    cursor: pointer;
  }
  .selected td {
    background-color: lightgray;
    white-space: normal;
    word-break: break-word;
  }
</style>

<table>
  <thead>
    <tr id="headerRow">
      <td>ID</td>
      <td>Title</td>
      <td>Description</td>
      <td>Result type</td>
      <td>Metrics type</td>
      <td>Display type</td>
      <td class="sort-header" id="scoreHeader">Display score</td>
    </tr>
  </thead>
  <tbody id="resultsSection"></tbody>
</table>
<!--_html_template_end_-->`;
}
