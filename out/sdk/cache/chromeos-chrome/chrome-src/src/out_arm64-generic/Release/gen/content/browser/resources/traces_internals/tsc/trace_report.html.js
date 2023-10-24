import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-hidden-style">.trace-card{display:flex;flex-direction:row;width:auto;padding:8px 16px;margin-bottom:12px;background-color:#fff;box-shadow:rgba(0,0,0,.16) 0 1px 4px;border-radius:4px;height:48px;align-items:center;position:relative}.trace-card>div{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-right:8px}.clickable-field{background:0 0;color:inherit;border:none;padding:0;font:inherit;cursor:pointer;outline:inherit}.upload-state-card{border-radius:1000px;padding:0 16px;font-size:14px;display:flex;width:inherit;height:34px;align-items:center}.upload-state-card>iron-icon{--iron-icon-width:18px;--iron-icon-height:18px;margin-inline-end:8px}.state-default{border:none;cursor:pointer;background-color:#add8e6;color:#00f}.state-default>iron-icon{--iron-icon-fill-color:blue}.state-success{background-color:#adffad;color:#065f06}.state-success>iron-icon{--iron-icon-fill-color:rgb(6, 95, 6)}.state-pending{background-color:orange;color:#c50}.state-pending>iron-icon{--iron-icon-fill-color:rgb(204, 85, 0)}.actions-container{width:120px;flex:none}.action-button{height:40px;width:40px;border-radius:100%;border-color:transparent;cursor:pointer;color:#a9a9a9;background-color:#efefef}.action-button:hover{--cr-icon-button-fill-color:black}.action-button:active{background-color:#f5f5f5}.info{font-size:13px;color:#a1a1a1;font-weight:light}.trace-id-container,.trace-trigger-container{width:20%}.trace-date-created-container,.trace-scenario-container{width:10%;flex:auto}.trace-skip-container{width:120px;flex:none}.trace-size-container{width:5%;flex:none}.trace-upload-state-container{font-weight:700;margin-right:5%;width:285px}.trace-spinner{position:absolute;width:100%;height:100%;display:flex;left:0;align-items:center;justify-content:center;background-color:rgba(0,0,0,.4);border-radius:4px}.trace-spinner>paper-spinner-lite{width:20px;height:20px;--cr-checked-color:red}</style>
<div class="trace-card">
  <template is="dom-if" if="[[isLoading]]">
    <div class="trace-spinner">
      <paper-spinner-lite active>
      </paper-spinner-lite>
    </div>
  </template>
  <div class="trace-id-container">
    <button class="clickable-field" on-click="onCopyUuidClick_">
      [[trace.uuid.high]]-[[trace.uuid.low]]
    </button>
    <div class="info">Trace ID</div>
  </div>
  <div class="trace-date-created-container">
    <div class="date-creation-value">[[dateToString_(trace.creationTime)]]</div>
    <div class="info">Date created</div>
  </div>
  <div class="trace-scenario-container">
    <button class="clickable-field" on-click="onCopyScenarioClick_">
      [[trace.scenarioName]]
    </button>
  </div>
  <div class="trace-trigger-container">
    <button class="clickable-field" on-click="onCopyUploadRuleClick_">
      [[trace.uploadRuleName]]
    </button>
    <div class="info">Trigger rule</div>
  </div>
  <div class="trace-skip-container" hidden$="[[uploadStateEqual(
      trace.uploadState,uploadStateEnum_.NOT_UPLOADED)]]">
    <div>[[getSkipReason_(trace.skipReason)]]</div>
    <div class="info">Skip Reason</div>
  </div>
  <div class="trace-size-container">
    <div>[[getTraceSize_(trace.totalSize)]]</div>
    <div class="info">size</div>
  </div>
  <div class="trace-upload-state-container">
    <button class="upload-state-card clickable-field state-default" on-click="onUploadTraceClick_" hidden$="[[!uploadStateEqual(trace.uploadState,
            uploadStateEnum_.NOT_UPLOADED)]]">
      <iron-icon icon="cr:add" aria-hidden="true"></iron-icon>
      Manually upload
    </button>
    <div class="upload-state-card state-pending" hidden$="[[!uploadStateEqual(trace.uploadState,
            uploadStateEnum_.PENDING)]]">
      <iron-icon icon="cr:schedule" aria-hidden="true"></iron-icon>
      Pending upload
    </div>
    <div class="upload-state-card state-pending" hidden$="[[!uploadStateEqual(trace.uploadState,
            uploadStateEnum_.USER_REQUEST)]]">
      <iron-icon icon="cr:schedule" aria-hidden="true"></iron-icon>
      Pending upload: User requested
    </div>
    <div class="upload-state-card state-success" hidden$="[[!uploadStateEqual(trace.uploadState,
            uploadStateEnum_.UPLOADED)]]">
      <iron-icon icon="cr:check" aria-hidden="true"></iron-icon>
      Uploaded: [[dateToString_(trace.uploadTime)]]
    </div>
  </div>
  <div class="actions-container">
    <cr-icon-button class="action-button" iron-icon="cr:file-download" title="Download" on-click="onDownloadTraceClick_" disabled="[[isLoading]]" aria-disabled="[[isLoading]]" aria-label="Download Trace">
    </cr-icon-button>
    <cr-icon-button class="action-button" iron-icon="cr:delete" title="Delete" on-click="onDeleteTraceClick_" disabled="[[isLoading]]" aria-disabled="[[isLoading]]" aria-label="Delete Trace">
    </cr-icon-button>
  </div>
</div><!--_html_template_end_-->`;
}
