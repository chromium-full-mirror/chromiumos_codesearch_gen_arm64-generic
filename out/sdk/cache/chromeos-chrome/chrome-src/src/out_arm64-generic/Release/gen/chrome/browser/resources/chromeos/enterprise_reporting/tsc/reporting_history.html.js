import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style>.controls{font-family:monospace;font-weight:700;padding-inline-end:5px;padding-inline-start:3px}.prefix{font-weight:700;padding-inline-end:5px}.erp-type{min-width:100px}.erp-parameters{min-width:660px}.erp-status{min-width:80px}.erp-timestamp{min-width:100px}.erp-span{min-width:10px}.erp-history-table{width:100%;font-family:monospace}.erp-history-table tbody{display:block;max-height:500px;overflow-y:scroll}.erp-history-table th{text-align:start}.erp-history-table td{text-align:start;vertical-align:top}.erp-history-table ul{list-style:none;margin-block:0;padding-inline-start:0;padding-top:0}.erp-history-table li{padding-inline-start:0;text-align:start}.erp-history-table tbody tr,.erp-history-table thead{display:table;width:100%}.erp-history-table tbody tr:nth-child(odd){background-color:#d3d3d3}.erp-history-table tbody::-webkit-scrollbar{width:10px;background-color:#add8e6}.erp-history-table tbody::-webkit-scrollbar-thumb{background:#00008b;border-radius:5px}</style>

<div class="controls">
  <span class="prefix">History [[loggingStateToString(loggingState)]]</span>
  <cr-toggle checked="{{loggingState}}" on-change="onToggleChange"></cr-toggle>
</div>
<table class="erp-history-table">
  <thead>
    <tr>
      <th class="erp-type">Type</th>
      <th class="erp-parameters">Parameters</th>
      <th class="erp-status">Status</th>
      <th class="erp-timestamp">Timestamp</th>
      <th class="erp-span"></th>
    </tr>
  </thead>
  <tbody class="erp-history-body" id="body">
  </tbody>
</table>
<!--_html_template_end_-->`;
}
