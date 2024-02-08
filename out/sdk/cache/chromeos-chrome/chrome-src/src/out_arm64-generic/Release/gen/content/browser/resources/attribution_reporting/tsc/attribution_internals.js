// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_tab_box/cr_tab_box.js';
import './attribution_internals_table.js';
import { AggregatableResult } from './aggregatable_result.mojom-webui.js';
import { AttributionSupport } from './attribution.mojom-webui.js';
import { Factory, HandlerRemote, ObserverReceiver, WebUISource_Attributability } from './attribution_internals.mojom-webui.js';
import { OsRegistrationResult, RegistrationType } from './attribution_reporting.mojom-webui.js';
import { EventLevelResult } from './event_level_result.mojom-webui.js';
import { SourceType } from './source_type.mojom-webui.js';
import { StoreSourceResult } from './store_source_result.mojom-webui.js';
import { ArrayTableModel, TableModel } from './table_model.js';
import { TriggerDataMatching } from './trigger_data_matching.mojom-webui.js';
// If kAttributionAggregatableBudgetPerSource changes, update this value
const BUDGET_PER_SOURCE = 65536;
function compareDefault(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}
function undefinedFirst(f) {
    return (a, b) => {
        if (a === undefined && b === undefined) {
            return 0;
        }
        if (a === undefined) {
            return -1;
        }
        if (b === undefined) {
            return 1;
        }
        return f(a, b);
    };
}
function compareLexicographic(f) {
    return (a, b) => {
        for (let i = 0; i < a.length && i < b.length; ++i) {
            const r = f(a[i], b[i]);
            if (r !== 0) {
                return r;
            }
        }
        return compareDefault(a.length, b.length);
    };
}
function bigintReplacer(_key, value) {
    return typeof value === 'bigint' ? value.toString() : value;
}
function setInnerText(e, v) {
    e.innerText = v;
}
class ValueColumn {
    header;
    getValue;
    constructor(header, getValue) {
        this.header = header;
        this.getValue = getValue;
    }
    renderHeader(th) {
        th.innerText = this.header;
    }
}
class ComparableColumn extends ValueColumn {
    compareValues;
    renderValue;
    constructor(header, getValue, compareValues, renderValue) {
        super(header, getValue);
        this.compareValues = compareValues;
        this.renderValue = renderValue;
    }
    render(td, row) {
        this.renderValue(td, this.getValue(row));
    }
    compare(a, b) {
        return this.compareValues(this.getValue(a), this.getValue(b));
    }
}
function dateColumn(header, getValue) {
    return new ComparableColumn(header, getValue, compareDefault, (td, v) => td.innerText = v.toLocaleString());
}
const numberClass = 'number';
function numberColumn(header, getValue, formatValue = (v) => `${v}`) {
    return new ComparableColumn(header, getValue, undefinedFirst(compareDefault), (td, v) => {
        if (v !== undefined) {
            td.classList.add(numberClass);
            td.innerText = formatValue(v);
        }
    });
}
function stringOrBoolColumn(header, getValue) {
    return new ComparableColumn(header, getValue, compareDefault, setInnerText);
}
class CodeColumn extends ValueColumn {
    constructor(header, getValue) {
        super(header, getValue);
    }
    render(td, row) {
        const code = td.ownerDocument.createElement('code');
        code.innerText = this.getValue(row);
        const pre = td.ownerDocument.createElement('pre');
        pre.append(code);
        td.append(pre);
    }
}
class ListColumn extends ValueColumn {
    renderItem;
    tdClass;
    compare;
    constructor(header, getValue, renderItem = setInnerText, tdClass, compareValues) {
        super(header, getValue);
        this.renderItem = renderItem;
        this.tdClass = tdClass;
        if (compareValues) {
            const cmp = compareLexicographic(compareValues);
            this.compare = (a, b) => cmp(this.getValue(a), this.getValue(b));
        }
    }
    render(td, row) {
        const values = this.getValue(row);
        if (values.length === 0) {
            return;
        }
        if (this.tdClass !== undefined) {
            td.classList.add(this.tdClass);
        }
        const ul = td.ownerDocument.createElement('ul');
        values.forEach(value => {
            const li = td.ownerDocument.createElement('li');
            this.renderItem(li, value);
            ul.append(li);
        });
        td.append(ul);
    }
}
function renderDL(td, row, cols) {
    const dl = td.ownerDocument.createElement('dl');
    cols.forEach(col => {
        const dt = td.ownerDocument.createElement('dt');
        col.renderHeader(dt);
        const dd = td.ownerDocument.createElement('dd');
        col.render(dd, row);
        dl.append(dt, dd);
    });
    td.append(dl);
}
function renderUrl(td, url, renderAnchor = setInnerText) {
    const a = td.ownerDocument.createElement('a');
    a.target = '_blank';
    a.href = url;
    renderAnchor(a, url);
    td.append(a);
}
function urlColumn(header, getValue, renderAnchor = setInnerText) {
    return new ComparableColumn(header, getValue, compareDefault, (td, url) => renderUrl(td, url, renderAnchor));
}
const debugPathPattern = /(?<=\/\.well-known\/attribution-reporting\/)debug(?=\/)/;
function reportUrlColumn() {
    return urlColumn('Report URL', (row) => row.reportUrl, (a, url) => {
        const [pre, post] = url.split(debugPathPattern, 2);
        if (pre === undefined || post === undefined) {
            a.innerText = url;
            return;
        }
        const span = a.ownerDocument.createElement('span');
        span.classList.add('debug-url');
        span.innerText = 'debug';
        a.append(pre, span, post);
    });
}
class Selectable {
    input;
    constructor() {
        this.input = document.createElement('input');
        this.input.type = 'checkbox';
    }
}
class SelectionColumn {
    model;
    selectAll;
    listener;
    selectionChangedListeners = new Set();
    constructor(model) {
        this.model = model;
        this.selectAll = document.createElement('input');
        this.selectAll.type = 'checkbox';
        this.selectAll.addEventListener('input', () => {
            const checked = this.selectAll.checked;
            this.model.getRows().forEach((row) => {
                if (!row.input.disabled) {
                    row.input.checked = checked;
                }
            });
            this.notifySelectionChanged(checked);
        });
        this.listener = () => this.onChange();
        this.model.rowsChangedListeners.add(this.listener);
    }
    render(td, row) {
        td.append(row.input);
    }
    renderHeader(th) {
        th.append(this.selectAll);
    }
    onChange() {
        let anySelectable = false;
        let anySelected = false;
        let anyUnselected = false;
        this.model.getRows().forEach((row) => {
            // addEventListener deduplicates, so only one event will be fired per
            // input.
            row.input.addEventListener('input', this.listener);
            if (row.input.disabled) {
                return;
            }
            anySelectable = true;
            if (row.input.checked) {
                anySelected = true;
            }
            else {
                anyUnselected = true;
            }
        });
        this.selectAll.disabled = !anySelectable;
        this.selectAll.checked = anySelected && !anyUnselected;
        this.selectAll.indeterminate = anySelected && anyUnselected;
        this.notifySelectionChanged(anySelected);
    }
    notifySelectionChanged(anySelected) {
        this.selectionChangedListeners.forEach((f) => f(anySelected));
    }
}
class Source {
    sourceEventId;
    sourceOrigin;
    destinations;
    reportingOrigin;
    sourceTime;
    expiryTime;
    triggerSpecs;
    aggregatableReportWindowTime;
    maxEventLevelReports;
    sourceType;
    filterData;
    aggregationKeys;
    debugKey;
    dedupKeys;
    priority;
    status;
    aggregatableBudgetConsumed;
    aggregatableDedupKeys;
    triggerDataMatching;
    eventLevelEpsilon;
    debugCookieSet;
    constructor(mojo) {
        this.sourceEventId = mojo.sourceEventId;
        this.sourceOrigin = originToText(mojo.sourceOrigin);
        this.destinations =
            mojo.destinations.destinations.map(d => originToText(d.siteAsOrigin))
                .sort(compareDefault);
        this.reportingOrigin = originToText(mojo.reportingOrigin);
        this.sourceTime = new Date(mojo.sourceTime);
        this.expiryTime = new Date(mojo.expiryTime);
        this.triggerSpecs = mojo.triggerSpecsJson;
        this.aggregatableReportWindowTime =
            new Date(mojo.aggregatableReportWindowTime);
        this.maxEventLevelReports = mojo.maxEventLevelReports;
        this.sourceType = sourceTypeText[mojo.sourceType];
        this.priority = mojo.priority;
        this.filterData = JSON.stringify(mojo.filterData.filterValues, null, ' ');
        this.aggregationKeys =
            JSON.stringify(mojo.aggregationKeys, bigintReplacer, ' ');
        // TODO(crbug.com/1442785): Workaround for undefined/null issue.
        this.debugKey =
            typeof mojo.debugKey === 'bigint' ? mojo.debugKey : undefined;
        this.dedupKeys = mojo.dedupKeys.sort(compareDefault);
        this.aggregatableBudgetConsumed = mojo.aggregatableBudgetConsumed;
        this.aggregatableDedupKeys =
            mojo.aggregatableDedupKeys.sort(compareDefault);
        this.triggerDataMatching =
            triggerDataMatchingText[mojo.triggerDataMatching];
        this.eventLevelEpsilon = mojo.eventLevelEpsilon;
        this.status = attributabilityText[mojo.attributability];
        this.debugCookieSet = mojo.debugCookieSet;
    }
}
class SourceTableModel extends ArrayTableModel {
    constructor() {
        super([
            numberColumn('Source Event ID', (e) => e.sourceEventId),
            stringOrBoolColumn('Status', (e) => e.status),
            urlColumn('Source Origin', (e) => e.sourceOrigin),
            new ListColumn('Destinations', (e) => e.destinations, renderUrl, 
            /*tdClass=*/ undefined, compareDefault),
            urlColumn('Reporting Origin', (e) => e.reportingOrigin),
            dateColumn('Registration Time', (e) => e.sourceTime),
            dateColumn('Expiry Time', (e) => e.expiryTime),
            new CodeColumn('Trigger Specs', (e) => e.triggerSpecs),
            dateColumn('Aggregatable Report Window Time', (e) => e.aggregatableReportWindowTime),
            numberColumn('Max Event Level Reports', (e) => e.maxEventLevelReports),
            stringOrBoolColumn('Source Type', (e) => e.sourceType),
            numberColumn('Priority', (e) => e.priority),
            new CodeColumn('Filter Data', (e) => e.filterData),
            new CodeColumn('Aggregation Keys', (e) => e.aggregationKeys),
            stringOrBoolColumn('Trigger Data Matching', (e) => e.triggerDataMatching),
            numberColumn('Event-Level Epsilon', (e) => e.eventLevelEpsilon, (v) => v.toFixed(3)),
            numberColumn('Aggregatable Budget Consumed', (e) => e.aggregatableBudgetConsumed, (v) => `${v} / ${BUDGET_PER_SOURCE}`),
            numberColumn('Debug Key', (e) => e.debugKey),
            stringOrBoolColumn('Debug Cookie Set', (e) => e.debugCookieSet),
            new ListColumn('Dedup Keys', (e) => e.dedupKeys, setInnerText, numberClass),
            new ListColumn('Aggregatable Dedup Keys', (e) => e.aggregatableDedupKeys, setInnerText, numberClass),
        ], 5, // Sort by registration time by default.
        'No sources.');
    }
}
class Registration {
    time;
    contextOrigin;
    reportingOrigin;
    registrationJson;
    clearedDebugKey;
    constructor(mojo) {
        this.time = new Date(mojo.time);
        this.contextOrigin = originToText(mojo.contextOrigin);
        this.reportingOrigin = originToText(mojo.reportingOrigin);
        this.registrationJson = mojo.registrationJson;
        // TODO(crbug.com/1442785): Workaround for undefined/null issue.
        this.clearedDebugKey = typeof mojo.clearedDebugKey === 'bigint' ?
            mojo.clearedDebugKey :
            undefined;
    }
}
class RegistrationTableModel extends ArrayTableModel {
    constructor(contextOriginTitle, cols) {
        super([
            dateColumn('Time', (e) => e.time),
            urlColumn(contextOriginTitle, (e) => e.contextOrigin),
            urlColumn('Reporting Origin', (e) => e.reportingOrigin),
            new CodeColumn('Registration JSON', (e) => e.registrationJson),
            numberColumn('Cleared Debug Key', (e) => e.clearedDebugKey),
            ...cols,
        ], 0, // Sort by time by default.
        'No registrations.');
    }
}
class Trigger extends Registration {
    eventLevelResult;
    aggregatableResult;
    verifications;
    constructor(mojo) {
        super(mojo.registration);
        this.eventLevelResult = eventLevelResultText[mojo.eventLevelResult];
        this.aggregatableResult = aggregatableResultText[mojo.aggregatableResult];
        this.verifications = mojo.verifications;
    }
}
const VERIFICATION_COLS = [
    stringOrBoolColumn('Token', e => e.token),
    stringOrBoolColumn('Report ID', e => e.aggregatableReportId),
];
class ReportVerificationColumn {
    renderHeader(th) {
        th.innerText = 'Report Verification';
    }
    render(td, row) {
        row.verifications.forEach(verification => {
            renderDL(td, verification, VERIFICATION_COLS);
        });
    }
}
class TriggerTableModel extends RegistrationTableModel {
    constructor() {
        super('Destination', [
            stringOrBoolColumn('Event-Level Result', (e) => e.eventLevelResult),
            stringOrBoolColumn('Aggregatable Result', (e) => e.aggregatableResult),
            new ReportVerificationColumn(),
        ]);
    }
}
class SourceRegistration extends Registration {
    type;
    status;
    constructor(mojo) {
        super(mojo.registration);
        this.type = sourceTypeText[mojo.type];
        this.status = sourceRegistrationStatusText[mojo.status];
    }
}
class SourceRegistrationTableModel extends RegistrationTableModel {
    constructor() {
        super('Source Origin', [
            stringOrBoolColumn('Type', (e) => e.type),
            stringOrBoolColumn('Status', (e) => e.status),
        ]);
    }
}
class Report extends Selectable {
    id;
    reportBody;
    reportUrl;
    triggerTime;
    reportTime;
    status;
    sendFailed;
    constructor(mojo) {
        super();
        this.id = mojo.id;
        this.reportBody = mojo.reportBody;
        this.reportUrl = mojo.reportUrl.url;
        this.triggerTime = new Date(mojo.triggerTime);
        this.reportTime = new Date(mojo.reportTime);
        // Only pending reports are selectable.
        if (mojo.status.pending === undefined) {
            this.input.disabled = true;
        }
        this.sendFailed = false;
        if (mojo.status.sent !== undefined) {
            this.status = `Sent: HTTP ${mojo.status.sent}`;
            this.sendFailed = mojo.status.sent < 200 || mojo.status.sent >= 400;
        }
        else if (mojo.status.pending !== undefined) {
            this.status = 'Pending';
        }
        else if (mojo.status.replacedByHigherPriorityReport !== undefined) {
            this.status = `Replaced by higher-priority report: ${mojo.status.replacedByHigherPriorityReport}`;
        }
        else if (mojo.status.prohibitedByBrowserPolicy !== undefined) {
            this.status = 'Prohibited by browser policy';
        }
        else if (mojo.status.networkError !== undefined) {
            this.status = `Network error: ${mojo.status.networkError}`;
            this.sendFailed = true;
        }
        else if (mojo.status.failedToAssemble !== undefined) {
            this.status = 'Dropped due to assembly failure';
        }
        else {
            throw new Error('invalid ReportStatus union');
        }
    }
    isDebug() {
        return debugPathPattern.test(this.reportUrl);
    }
}
class EventLevelReport extends Report {
    reportPriority;
    attributedTruthfully;
    constructor(mojo) {
        super(mojo);
        this.reportPriority = mojo.data.eventLevelData.priority;
        this.attributedTruthfully = mojo.data.eventLevelData.attributedTruthfully;
    }
}
class AggregatableAttributionReport extends Report {
    contributions;
    verificationToken;
    aggregationCoordinator;
    isNullReport;
    constructor(mojo) {
        super(mojo);
        this.contributions = JSON.stringify(mojo.data.aggregatableAttributionData.contributions, bigintReplacer, ' ');
        this.verificationToken =
            mojo.data.aggregatableAttributionData.verificationToken || '';
        this.aggregationCoordinator =
            mojo.data.aggregatableAttributionData.aggregationCoordinator;
        this.isNullReport = mojo.data.aggregatableAttributionData.isNullReport;
    }
}
class ReportTableModel extends TableModel {
    handler;
    sendReportsButton;
    showDebugReportsCheckbox;
    hiddenDebugReportsSpan;
    sentOrDroppedReports = [];
    storedReports = [];
    debugReports = [];
    constructor(container, handler, cols) {
        super([
            stringOrBoolColumn('Status', (e) => e.status),
            reportUrlColumn(),
            dateColumn('Trigger Time', (e) => e.triggerTime),
            dateColumn('Report Time', (e) => e.reportTime),
            ...cols,
            new CodeColumn('Report Body', (e) => e.reportBody),
        ], 4, // Sort by report time by default; the extra column is added below
        'No sent or pending reports.');
        this.handler = handler;
        // This can't be included in the super call above, as `this` can't be
        // accessed until after `super` returns.
        const selectionColumn = new SelectionColumn(this);
        this.cols.unshift(selectionColumn);
        this.sendReportsButton = container.querySelector('button');
        this.showDebugReportsCheckbox =
            container.querySelector('input[type="checkbox"]');
        this.hiddenDebugReportsSpan = container.querySelector('span');
        this.showDebugReportsCheckbox.addEventListener('input', () => this.notifyRowsChanged());
        this.sendReportsButton.addEventListener('click', () => this.sendReports_());
        selectionColumn.selectionChangedListeners.add((anySelected) => {
            this.sendReportsButton.disabled = !anySelected;
        });
        this.rowsChangedListeners.add(() => this.updateHiddenDebugReportsSpan_());
    }
    styleRow(tr, report) {
        tr.classList.toggle('send-error', report.sendFailed);
    }
    empty() {
        return this.sentOrDroppedReports.length === 0 &&
            this.storedReports.length === 0 &&
            (!this.showDebugReportsCheckbox.checked ||
                this.debugReports.length === 0);
    }
    getRows() {
        let rows = this.sentOrDroppedReports.concat(this.storedReports);
        if (this.showDebugReportsCheckbox.checked) {
            rows = rows.concat(this.debugReports);
        }
        return rows;
    }
    setStoredReports(storedReports) {
        this.storedReports = storedReports;
        this.notifyRowsChanged();
    }
    addSentOrDroppedReport(report) {
        // Prevent the page from consuming ever more memory if the user leaves the
        // page open for a long time.
        if (this.sentOrDroppedReports.length + this.debugReports.length >= 1000) {
            this.sentOrDroppedReports = [];
            this.debugReports = [];
        }
        if (report.isDebug()) {
            this.debugReports.push(report);
        }
        else {
            this.sentOrDroppedReports.push(report);
        }
        this.notifyRowsChanged();
    }
    clear() {
        this.storedReports = [];
        this.sentOrDroppedReports = [];
        this.debugReports = [];
        this.notifyRowsChanged();
    }
    updateHiddenDebugReportsSpan_() {
        this.hiddenDebugReportsSpan.innerText =
            this.showDebugReportsCheckbox.checked ?
                '' :
                ` (${this.debugReports.length} hidden)`;
    }
    /**
     * Sends all selected reports.
     * Disables the button while the reports are still being sent.
     * Observer.onReportsChanged and Observer.onSourcesChanged will be called
     * automatically as reports are deleted, so there's no need to manually
     * refresh the data on completion.
     */
    sendReports_() {
        const ids = [];
        this.storedReports.forEach((report) => {
            if (!report.input.disabled && report.input.checked) {
                ids.push(report.id);
            }
        });
        if (ids.length === 0) {
            return;
        }
        const previousText = this.sendReportsButton.innerText;
        this.sendReportsButton.disabled = true;
        this.sendReportsButton.innerText = 'Sending...';
        this.handler.sendReports(ids).then(() => {
            this.sendReportsButton.innerText = previousText;
        });
    }
}
const registrationTypeText = {
    [RegistrationType.kSource]: 'Source',
    [RegistrationType.kTrigger]: 'Trigger',
};
const osRegistrationResultText = {
    [OsRegistrationResult.kPassedToOs]: 'Passed to OS',
    [OsRegistrationResult.kUnsupported]: 'Unsupported',
    [OsRegistrationResult.kInvalidRegistrationUrl]: 'Invalid registration URL',
    [OsRegistrationResult.kProhibitedByBrowserPolicy]: 'Prohibited by browser policy',
    [OsRegistrationResult.kExcessiveQueueSize]: 'Excessive queue size',
    [OsRegistrationResult.kRejectedByOs]: 'Rejected by OS',
};
class OsRegistration {
    timestamp;
    registrationUrl;
    topLevelOrigin;
    registrationType;
    debugKeyAllowed;
    debugReporting;
    result;
    constructor(mojo) {
        this.timestamp = new Date(mojo.time);
        this.registrationUrl = mojo.registrationUrl.url;
        this.topLevelOrigin = originToText(mojo.topLevelOrigin);
        this.debugKeyAllowed = mojo.isDebugKeyAllowed;
        this.debugReporting = mojo.debugReporting;
        this.registrationType = `OS ${registrationTypeText[mojo.type]}`;
        this.result = osRegistrationResultText[mojo.result];
    }
}
class OsRegistrationTableModel extends ArrayTableModel {
    constructor() {
        super([
            dateColumn('Timestamp', (e) => e.timestamp),
            stringOrBoolColumn('Registration Type', (e) => e.registrationType),
            urlColumn('Registration URL', (e) => e.registrationUrl),
            urlColumn('Top-Level Origin', (e) => e.topLevelOrigin),
            stringOrBoolColumn('Debug Key Allowed', (e) => e.debugKeyAllowed),
            stringOrBoolColumn('Debug Reporting', (e) => e.debugReporting),
            stringOrBoolColumn('Result', (e) => e.result),
        ], 0, 'No OS registrations.');
    }
}
class DebugReport {
    body;
    url;
    time;
    status;
    constructor(mojo) {
        this.body = mojo.body;
        this.url = mojo.url.url;
        this.time = new Date(mojo.time);
        if (mojo.status.httpResponseCode !== undefined) {
            this.status = `HTTP ${mojo.status.httpResponseCode}`;
        }
        else if (mojo.status.networkError !== undefined) {
            this.status = `Network error: ${mojo.status.networkError}`;
        }
        else {
            throw new Error('invalid DebugReportStatus union');
        }
    }
}
class DebugReportTableModel extends ArrayTableModel {
    constructor() {
        super([
            dateColumn('Time', (e) => e.time),
            urlColumn('URL', (e) => e.url),
            stringOrBoolColumn('Status', (e) => e.status),
            new CodeColumn('Body', (e) => e.body),
        ], 0, // Sort by report time by default.
        'No verbose debug reports.');
    }
}
/**
 * Converts a mojo origin into a user-readable string, omitting default ports.
 * @param origin Origin to convert
 */
function originToText(origin) {
    if (origin.host.length === 0) {
        return 'Null';
    }
    let result = origin.scheme + '://' + origin.host;
    if ((origin.scheme === 'https' && origin.port !== 443) ||
        (origin.scheme === 'http' && origin.port !== 80)) {
        result += ':' + origin.port;
    }
    return result;
}
const sourceTypeText = {
    [SourceType.kNavigation]: 'Navigation',
    [SourceType.kEvent]: 'Event',
};
const triggerDataMatchingText = {
    [TriggerDataMatching.kModulus]: 'modulus',
    [TriggerDataMatching.kExact]: 'exact',
};
const attributabilityText = {
    [WebUISource_Attributability.kAttributable]: 'Attributable',
    [WebUISource_Attributability.kNoisedNever]: 'Unattributable: noised with no reports',
    [WebUISource_Attributability.kNoisedFalsely]: 'Unattributable: noised with fake reports',
    [WebUISource_Attributability.kReachedEventLevelAttributionLimit]: 'Attributable: reached event-level attribution limit',
};
const sourceRegistrationStatusText = {
    [StoreSourceResult.kSuccess]: 'Success',
    [StoreSourceResult.kSuccessNoised]: 'Success',
    [StoreSourceResult.kInternalError]: 'Rejected: internal error',
    [StoreSourceResult.kInsufficientSourceCapacity]: 'Rejected: insufficient source capacity',
    [StoreSourceResult.kInsufficientUniqueDestinationCapacity]: 'Rejected: insufficient unique destination capacity',
    [StoreSourceResult.kExcessiveReportingOrigins]: 'Rejected: excessive reporting origins',
    [StoreSourceResult.kProhibitedByBrowserPolicy]: 'Rejected: prohibited by browser policy',
    [StoreSourceResult.kDestinationReportingLimitReached]: 'Rejected: destination reporting limit reached',
    [StoreSourceResult.kDestinationGlobalLimitReached]: 'Rejected: destination global limit reached',
    [StoreSourceResult.kDestinationBothLimitsReached]: 'Rejected: destination both limits reached',
    [StoreSourceResult.kExceedsMaxChannelCapacity]: 'Rejected: channel capacity exceeds max allowed',
    [StoreSourceResult.kReportingOriginsPerSiteLimitReached]: 'Rejected: reached reporting origins per site limit',
};
const commonResult = {
    success: 'Success: Report stored',
    internalError: 'Failure: Internal error',
    noMatchingImpressions: 'Failure: No matching sources',
    noMatchingSourceFilterData: 'Failure: No matching source filter data',
    deduplicated: 'Failure: Deduplicated against an earlier report',
    noCapacityForConversionDestination: 'Failure: No report capacity for destination site',
    excessiveAttributions: 'Failure: Excessive attributions',
    excessiveReportingOrigins: 'Failure: Excessive reporting origins',
    reportWindowPassed: 'Failure: Report window has passed',
    excessiveReports: 'Failure: Excessive reports',
    prohibitedByBrowserPolicy: 'Failure: Prohibited by browser policy',
};
const eventLevelResultText = {
    [EventLevelResult.kSuccess]: commonResult.success,
    [EventLevelResult.kSuccessDroppedLowerPriority]: commonResult.success,
    [EventLevelResult.kInternalError]: commonResult.internalError,
    [EventLevelResult.kNoMatchingImpressions]: commonResult.noMatchingImpressions,
    [EventLevelResult.kNoMatchingSourceFilterData]: commonResult.noMatchingSourceFilterData,
    [EventLevelResult.kNoCapacityForConversionDestination]: commonResult.noCapacityForConversionDestination,
    [EventLevelResult.kExcessiveAttributions]: commonResult.excessiveAttributions,
    [EventLevelResult.kExcessiveReportingOrigins]: commonResult.excessiveReportingOrigins,
    [EventLevelResult.kDeduplicated]: commonResult.deduplicated,
    [EventLevelResult.kReportWindowNotStarted]: 'Failure: Report window has not started',
    [EventLevelResult.kReportWindowPassed]: commonResult.reportWindowPassed,
    [EventLevelResult.kPriorityTooLow]: 'Failure: Priority too low',
    [EventLevelResult.kNeverAttributedSource]: 'Failure: Noised',
    [EventLevelResult.kFalselyAttributedSource]: 'Failure: Noised',
    [EventLevelResult.kNotRegistered]: 'Failure: No event-level data present',
    [EventLevelResult.kProhibitedByBrowserPolicy]: commonResult.prohibitedByBrowserPolicy,
    [EventLevelResult.kNoMatchingConfigurations]: 'Failure: no matching event-level configurations',
    [EventLevelResult.kExcessiveReports]: commonResult.excessiveReports,
    [EventLevelResult.kNoMatchingTriggerData]: 'Failure: no matching trigger data',
};
const aggregatableResultText = {
    [AggregatableResult.kSuccess]: commonResult.success,
    [AggregatableResult.kInternalError]: commonResult.internalError,
    [AggregatableResult.kNoMatchingImpressions]: commonResult.noMatchingImpressions,
    [AggregatableResult.kNoMatchingSourceFilterData]: commonResult.noMatchingSourceFilterData,
    [AggregatableResult.kNoCapacityForConversionDestination]: commonResult.noCapacityForConversionDestination,
    [AggregatableResult.kExcessiveAttributions]: commonResult.excessiveAttributions,
    [AggregatableResult.kExcessiveReportingOrigins]: commonResult.excessiveReportingOrigins,
    [AggregatableResult.kDeduplicated]: commonResult.deduplicated,
    [AggregatableResult.kReportWindowPassed]: commonResult.reportWindowPassed,
    [AggregatableResult.kNoHistograms]: 'Failure: No source histograms',
    [AggregatableResult.kInsufficientBudget]: 'Failure: Insufficient budget',
    [AggregatableResult.kNotRegistered]: 'Failure: No aggregatable data present',
    [AggregatableResult.kProhibitedByBrowserPolicy]: commonResult.prohibitedByBrowserPolicy,
    [AggregatableResult.kExcessiveReports]: commonResult.excessiveReports,
};
const attributionSupportText = {
    [AttributionSupport.kWeb]: 'web',
    [AttributionSupport.kWebAndOs]: 'os, web',
    [AttributionSupport.kOs]: 'os',
    [AttributionSupport.kNone]: '',
};
class AttributionInternals {
    sources = new SourceTableModel();
    sourceRegistrations = new SourceRegistrationTableModel();
    triggers = new TriggerTableModel();
    debugReports = new DebugReportTableModel();
    osRegistrations = new OsRegistrationTableModel();
    eventLevelReports;
    aggregatableReports;
    handler = new HandlerRemote();
    constructor() {
        this.eventLevelReports = new ReportTableModel(document.querySelector('#event-level-report-controls'), this.handler, [
            numberColumn('Report Priority', (e) => e.reportPriority),
            stringOrBoolColumn('Randomized Report', (e) => !e.attributedTruthfully),
        ]);
        this.aggregatableReports = new ReportTableModel(document.querySelector('#aggregatable-report-controls'), this.handler, [
            new CodeColumn('Histograms', (e) => e.contributions),
            stringOrBoolColumn('Verification Token', (e) => e.verificationToken),
            urlColumn('Aggregation Coordinator', (e) => e.aggregationCoordinator),
            stringOrBoolColumn('Null Report', (e) => e.isNullReport),
        ]);
        installUnreadIndicator(this.sources, document.querySelector('#sources-tab'));
        installUnreadIndicator(this.sourceRegistrations, document.querySelector('#source-registrations-tab'));
        installUnreadIndicator(this.triggers, document.querySelector('#triggers-tab'));
        installUnreadIndicator(this.eventLevelReports, document.querySelector('#event-level-reports-tab'));
        installUnreadIndicator(this.aggregatableReports, document.querySelector('#aggregatable-reports-tab'));
        installUnreadIndicator(this.debugReports, document.querySelector('#debug-reports-tab'));
        installUnreadIndicator(this.osRegistrations, document.querySelector('#os-tab'));
        document
            .querySelector('#sourceTable').setModel(this.sources);
        document
            .querySelector('#sourceRegistrationTable').setModel(this.sourceRegistrations);
        document
            .querySelector('#triggerTable').setModel(this.triggers);
        document
            .querySelector('#reportTable').setModel(this.eventLevelReports);
        document
            .querySelector('#aggregatableReportTable').setModel(this.aggregatableReports);
        document
            .querySelector('#debugReportTable').setModel(this.debugReports);
        document
            .querySelector('#osRegistrationTable').setModel(this.osRegistrations);
        Factory.getRemote().create(new ObserverReceiver(this).$.bindNewPipeAndPassRemote(), this.handler.$.bindNewPipeAndPassReceiver());
    }
    onSourcesChanged() {
        this.updateSources();
    }
    onReportsChanged() {
        this.updateReports();
    }
    onReportSent(mojo) {
        this.addSentOrDroppedReport(mojo);
    }
    onDebugReportSent(mojo) {
        this.debugReports.addRow(new DebugReport(mojo));
    }
    onReportDropped(mojo) {
        this.addSentOrDroppedReport(mojo);
    }
    onSourceHandled(mojo) {
        this.sourceRegistrations.addRow(new SourceRegistration(mojo));
    }
    onTriggerHandled(mojo) {
        this.triggers.addRow(new Trigger(mojo));
    }
    onOsRegistration(mojo) {
        this.osRegistrations.addRow(new OsRegistration(mojo));
    }
    addSentOrDroppedReport(mojo) {
        if (mojo.data.eventLevelData !== undefined) {
            this.eventLevelReports.addSentOrDroppedReport(new EventLevelReport(mojo));
        }
        else {
            this.aggregatableReports.addSentOrDroppedReport(new AggregatableAttributionReport(mojo));
        }
    }
    /**
     * Deletes all data stored by the conversions backend.
     * onReportsChanged and onSourcesChanged will be called
     * automatically as data is deleted, so there's no need to manually refresh
     * the data on completion.
     */
    clearStorage() {
        this.sources.clear();
        this.sourceRegistrations.clear();
        this.triggers.clear();
        this.eventLevelReports.clear();
        this.aggregatableReports.clear();
        this.debugReports.clear();
        this.osRegistrations.clear();
        this.handler.clearStorage();
    }
    refresh() {
        this.handler.isAttributionReportingEnabled().then((response) => {
            const featureStatus = document.querySelector('#feature-status');
            featureStatus.innerText = response.enabled ? 'enabled' : 'disabled';
            featureStatus.classList.toggle('disabled', !response.enabled);
            const reportDelaysContent = document.querySelector('#report-delays');
            const noiseContent = document.querySelector('#noise');
            if (response.debugMode) {
                reportDelaysContent.innerText = 'disabled';
                noiseContent.innerText = 'disabled';
            }
            else {
                reportDelaysContent.innerText = 'enabled';
                noiseContent.innerText = 'enabled';
            }
            const attributionSupport = document.querySelector('#attribution-support');
            attributionSupport.innerText =
                attributionSupportText[response.attributionSupport];
        });
        this.updateSources();
        this.updateReports();
    }
    updateSources() {
        this.handler.getActiveSources().then((response) => {
            this.sources.setRows(response.sources.map((mojo) => new Source(mojo)));
        });
    }
    updateReports() {
        this.handler.getReports().then(response => {
            const eventLevelReports = [];
            const aggregatableReports = [];
            response.reports.forEach(report => {
                if (report.data.eventLevelData !== undefined) {
                    eventLevelReports.push(new EventLevelReport(report));
                }
                else if (report.data.aggregatableAttributionData !== undefined) {
                    aggregatableReports.push(new AggregatableAttributionReport(report));
                }
            });
            this.eventLevelReports.setStoredReports(eventLevelReports);
            this.aggregatableReports.setStoredReports(aggregatableReports);
        });
    }
}
function installUnreadIndicator(model, tab) {
    model.rowsChangedListeners.add(() => {
        if (!tab.hasAttribute('selected') && !model.empty()) {
            tab.classList.add('unread');
        }
    });
}
document.addEventListener('DOMContentLoaded', function () {
    const tabBox = document.querySelector('cr-tab-box');
    tabBox.addEventListener('selected-index-change', e => {
        const tabs = document.querySelectorAll('div[slot=\'tab\']');
        tabs[e.detail].classList.remove('unread');
    });
    const internals = new AttributionInternals();
    document.querySelector('#refresh').addEventListener('click', () => internals.refresh());
    document.querySelector('#clear-data').addEventListener('click', () => internals.clearStorage());
    tabBox.hidden = false;
    internals.refresh();
});
