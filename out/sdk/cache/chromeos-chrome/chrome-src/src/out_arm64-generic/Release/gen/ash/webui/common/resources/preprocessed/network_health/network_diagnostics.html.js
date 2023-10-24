import {html} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
  return html`<!--_html_template_start_--><routine-group name="[[i18n('NetworkDiagnosticsConnectionGroup')]]"
    routines="[[getRoutineGroup_(routines_.*, RoutineGroup_.CONNECTION)]]">
</routine-group>
<routine-group name="[[i18n('NetworkDiagnosticsWifiGroup')]]"
    routines="[[getRoutineGroup_(routines_.*, RoutineGroup_.WIFI)]]">
</routine-group>
<routine-group name="[[i18n('NetworkDiagnosticsCaptivePortal')]]"
    routines="[[getRoutineGroup_(routines_.*, RoutineGroup_.PORTAL)]]">
</routine-group>
<routine-group name="[[i18n('NetworkDiagnosticsGatewayGroup')]]"
    routines="[[getRoutineGroup_(routines_.*, RoutineGroup_.GATEWAY)]]">
</routine-group>
<routine-group name="[[i18n('NetworkDiagnosticsFirewallGroup')]]"
    routines="[[getRoutineGroup_(routines_.*, RoutineGroup_.FIREWALL)]]">
</routine-group>
<routine-group name="[[i18n('NetworkDiagnosticsDnsGroup')]]"
    routines="[[getRoutineGroup_(routines_.*, RoutineGroup_.DNS)]]">
</routine-group>
<routine-group name="[[i18n('NetworkDiagnosticsGoogleServicesGroup')]]"
    routines=
        "[[getRoutineGroup_(routines_.*, RoutineGroup_.GOOGLE_SERVICES)]]">
</routine-group>
<routine-group  name="[[i18n('NetworkDiagnosticsArcGroup')]]"
    routines="[[getRoutineGroup_(routines_.*, RoutineGroup_.ARC)]]">
</routine-group>
<!--_html_template_end_-->`;
}