import{html}from"//resources/polymer/v3_0/polymer/polymer_bundled.min.js";export function getTemplate(){return html`<!--_html_template_start_-->
<style include="shared-style"></style>

<div class="control-title">Log Type</div>
<div class="input-div">
  <input aria-labelledby="np-label" type="checkbox" on-click="nearbyPresenceCheckboxClicked_" id="nearbyPresenceCheckbox" checked="checked">
  <label id="np-label">Nearby Presence</label>
</div>
<div class="input-div">
  <input aria-labelledby="ns-label" type="checkbox" on-click="nearbyShareCheckboxClicked_" id="nearbyShareCheckbox" checked="checked">
  <label id="ns-label">Nearby Share</label>
</div>
<div class="input-div">
  <input aria-labelledby="nc-label" type="checkbox" on-click="nearbyConnectionsCheckboxClicked_" id="nearbyConnectionsCheckbox" checked="checked">
  <label id="nc-label">Nearby Connections</label>
</div>
<div class="input-div">
  <input aria-labelledby="fp-label" type="checkbox" on-click="fastPairCheckboxClicked_" id="fastPairCheckbox" checked="checked">
  <label id="fp-label">Fast Pair</label>
</div><!--_html_template_end_-->`}