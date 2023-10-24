// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import './print_preview_vars.css.js';
import '../strings.m.js';
import '../data/document_info.js';
import './sidebar.js';
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { FocusOutlineManager } from 'chrome://resources/js/focus_outline_manager.js';
import { isMac } from 'chrome://resources/js/platform.js';
import { hasKeyModifiers } from 'chrome://resources/js/util_ts.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { DestinationOrigin, PrinterType } from '../data/destination.js';
import { MeasurementSystem } from '../data/measurement_system.js';
import { DuplexMode, whenReady } from '../data/model.js';
// 
import { computePrinterState, PrintAttemptOutcome, PrinterState } from '../data/printer_status_cros.js';
import { Error, State } from '../data/state.js';
import { NativeLayerImpl } from '../native_layer.js';
// 
import { NativeLayerCrosImpl } from '../native_layer_cros.js';
// 
import { getTemplate } from './app.html.js';
import { DestinationState } from './destination_settings.js';
import { PreviewAreaState } from './preview_area.js';
import { SettingsMixin } from './settings_mixin.js';
const PrintPreviewAppElementBase = WebUiListenerMixin(SettingsMixin(PolymerElement));
export class PrintPreviewAppElement extends PrintPreviewAppElementBase {
    static get is() {
        return 'print-preview-app';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            state: {
                type: Number,
                observer: 'onStateChanged_',
            },
            controlsManaged_: {
                type: Boolean,
                computed: 'computeControlsManaged_(destinationsManaged_, ' +
                    'settingsManaged_, maxSheets_)',
            },
            destination_: Object,
            destinationsManaged_: {
                type: Boolean,
                value: false,
            },
            destinationState_: {
                type: Number,
                observer: 'onDestinationStateChange_',
            },
            documentSettings_: Object,
            error_: {
                type: Number,
                observer: 'onErrorChange_',
            },
            margins_: Object,
            pageSize_: Object,
            previewState_: {
                type: String,
                observer: 'onPreviewStateChange_',
            },
            printableArea_: Object,
            settingsManaged_: {
                type: Boolean,
                value: false,
            },
            measurementSystem_: {
                type: Object,
                value: null,
            },
            maxSheets_: Number,
        };
    }
    constructor() {
        super();
        this.nativeLayer_ = null;
        this.tracker_ = new EventTracker();
        this.cancelled_ = false;
        this.printRequested_ = false;
        this.startPreviewWhenReady_ = false;
        this.showSystemDialogBeforePrint_ = false;
        this.openPdfInPreview_ = false;
        this.isInKioskAutoPrintMode_ = false;
        this.whenReady_ = null;
        this.openDialogs_ = [];
        // Regular expression that captures the leading slash, the content and the
        // trailing slash in three different groups.
        const CANONICAL_PATH_REGEX = /(^\/)([\/-\w]+)(\/$)/;
        const path = location.pathname.replace(CANONICAL_PATH_REGEX, '$1$2');
        if (path !== '/') { // There are no subpages in Print Preview.
            window.history.replaceState(undefined /* stateObject */, '', '/');
        }
    }
    ready() {
        super.ready();
        FocusOutlineManager.forDocument(document);
    }
    connectedCallback() {
        super.connectedCallback();
        document.documentElement.classList.remove('loading');
        this.nativeLayer_ = NativeLayerImpl.getInstance();
        this.addWebUiListener('cr-dialog-open', this.onCrDialogOpen_.bind(this));
        this.addWebUiListener('close', this.onCrDialogClose_.bind(this));
        this.addWebUiListener('print-failed', this.onPrintFailed_.bind(this));
        this.addWebUiListener('print-preset-options', this.onPrintPresetOptions_.bind(this));
        this.tracker_.add(window, 'keydown', this.onKeyDown_.bind(this));
        this.$.previewArea.setPluginKeyEventCallback(this.onKeyDown_.bind(this));
        this.whenReady_ = whenReady();
        this.nativeLayer_.getInitialSettings().then(this.onInitialSettingsSet_.bind(this));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.tracker_.removeAll();
        this.whenReady_ = null;
    }
    onSidebarFocus_() {
        this.$.previewArea.hideToolbar();
    }
    /**
     * Consume escape and enter key presses and ctrl + shift + p. Delegate
     * everything else to the preview area.
     */
    onKeyDown_(e) {
        // Escape key closes the topmost dialog that is currently open within
        // Print Preview. If no such dialog exists, then the Print Preview dialog
        // itself is closed.
        if (e.key === 'Escape' && !hasKeyModifiers(e)) {
            // Don't close the Print Preview dialog if there is a child dialog open.
            if (this.openDialogs_.length !== 0) {
                // Manually cancel the dialog, since we call preventDefault() to prevent
                // views from closing the Print Preview dialog.
                const dialogToClose = this.openDialogs_[this.openDialogs_.length - 1];
                dialogToClose.cancel();
                e.preventDefault();
                return;
            }
            // On non-mac with toolkit-views, ESC key is handled by C++-side instead
            // of JS-side.
            if (isMac) {
                this.close_();
                e.preventDefault();
            }
            // 
            this.recordCancelMetricCros_();
            // 
            return;
        }
        // On Mac, Cmd+Period should close the print dialog.
        if (isMac && e.key === '.' && e.metaKey) {
            this.close_();
            e.preventDefault();
            return;
        }
        // Ctrl + Shift + p / Mac equivalent. Doesn't apply on Chrome OS.
        // On Linux/Windows, shift + p means that e.key will be 'P' with caps lock
        // off or 'p' with caps lock on.
        // On Mac, alt + p means that e.key will be unicode 03c0 (pi).
        // 
        if ((e.key === 'Enter' || e.key === 'NumpadEnter') &&
            this.state === State.READY && this.openDialogs_.length === 0) {
            const activeElementTag = e.composedPath()[0].tagName;
            if (['CR-BUTTON', 'BUTTON', 'SELECT', 'A', 'CR-CHECKBOX'].includes(activeElementTag)) {
                return;
            }
            this.onPrintRequested_();
            e.preventDefault();
            return;
        }
        // Pass certain directional keyboard events to the PDF viewer.
        this.$.previewArea.handleDirectionalKeyEvent(e);
    }
    onCrDialogOpen_(e) {
        this.openDialogs_.push(e.composedPath()[0]);
    }
    onCrDialogClose_(e) {
        // Note: due to event re-firing in cr_dialog.js, this event will always
        // appear to be coming from the outermost child dialog.
        // TODO(rbpotter): Fix event re-firing so that the event comes from the
        // dialog that has been closed, and add an assertion that the removed
        // dialog matches e.composedPath()[0].
        if (e.composedPath()[0].nodeName === 'CR-DIALOG') {
            this.openDialogs_.pop();
        }
    }
    onInitialSettingsSet_(settings) {
        if (!this.whenReady_) {
            // This element and its corresponding model were detached while waiting
            // for the callback. This can happen in tests; return early.
            return;
        }
        this.whenReady_.then(() => {
            this.$.documentInfo.init(settings.previewModifiable, settings.previewIsFromArc, settings.documentTitle, settings.documentHasSelection);
            this.$.model.setStickySettings(settings.serializedAppStateStr);
            this.$.model.setPolicySettings(settings.policies);
            this.measurementSystem_ = new MeasurementSystem(settings.thousandsDelimiter, settings.decimalDelimiter, settings.unitType);
            this.setSetting('selectionOnly', settings.shouldPrintSelectionOnly);
            this.$.sidebar.init(settings.isInAppKioskMode, settings.printerName, settings.serializedDefaultDestinationSelectionRulesStr, settings.pdfPrinterDisabled, settings.isDriveMounted || false);
            this.destinationsManaged_ = settings.destinationsManaged;
            this.isInKioskAutoPrintMode_ = settings.isInKioskAutoPrintMode;
            // This is only visible in the task manager.
            let title = document.head.querySelector('title');
            if (!title) {
                title = document.createElement('title');
                document.head.appendChild(title);
            }
            title.textContent = settings.documentTitle;
        });
    }
    /**
     * @return Whether any of the print preview settings or destinations
     *     are managed.
     */
    computeControlsManaged_() {
        // If |this.maxSheets_| equals to 0, no sheets limit policy is present.
        return this.destinationsManaged_ || this.settingsManaged_ ||
            this.maxSheets_ > 0;
    }
    onDestinationStateChange_() {
        switch (this.destinationState_) {
            case DestinationState.SET:
                if (this.state !== State.NOT_READY &&
                    this.state !== State.FATAL_ERROR) {
                    this.$.state.transitTo(State.NOT_READY);
                }
                break;
            case DestinationState.UPDATED:
                if (!this.$.model.initialized()) {
                    this.$.model.applyStickySettings();
                }
                this.$.model.applyDestinationSpecificPolicies();
                this.startPreviewWhenReady_ = true;
                if (this.state === State.NOT_READY &&
                    this.destination_.type !== PrinterType.PDF_PRINTER) {
                    this.nativeLayer_.recordBooleanHistogram('PrintPreview.TransitionedToReadyState', true);
                }
                this.$.state.transitTo(State.READY);
                break;
            case DestinationState.ERROR:
                let newState = State.ERROR;
                // 
                if (this.error_ === Error.NO_DESTINATIONS) {
                    newState = State.FATAL_ERROR;
                }
                // 
                if (this.state === State.NOT_READY &&
                    this.destination_.type !== PrinterType.PDF_PRINTER) {
                    this.nativeLayer_.recordBooleanHistogram('PrintPreview.TransitionedToReadyState', false);
                }
                this.$.state.transitTo(newState);
                break;
            default:
                break;
        }
    }
    /**
     * @param e Event containing the new sticky settings.
     */
    onStickySettingChanged_(e) {
        this.nativeLayer_.saveAppState(e.detail);
    }
    onPreviewSettingChanged_() {
        if (this.state === State.READY) {
            this.$.previewArea.startPreview(false);
            this.startPreviewWhenReady_ = false;
        }
        else {
            this.startPreviewWhenReady_ = true;
        }
    }
    onStateChanged_() {
        if (this.state === State.READY) {
            if (this.startPreviewWhenReady_) {
                this.$.previewArea.startPreview(false);
                this.startPreviewWhenReady_ = false;
            }
            if (this.isInKioskAutoPrintMode_ || this.printRequested_) {
                this.onPrintRequested_();
                // Reset in case printing fails.
                this.printRequested_ = false;
            }
        }
        else if (this.state === State.CLOSING) {
            this.remove();
            this.nativeLayer_.dialogClose(this.cancelled_);
        }
        else if (this.state === State.HIDDEN) {
            if (this.destination_.type !== PrinterType.PDF_PRINTER) {
                // Only hide the preview for local, non PDF destinations.
                this.nativeLayer_.hidePreview();
            }
        }
        else if (this.state === State.PRINTING) {
            // 
            if (this.destination_.type === PrinterType.PDF_PRINTER) {
                NativeLayerCrosImpl.getInstance().recordPrintAttemptOutcome(PrintAttemptOutcome.PDF_PRINT_ATTEMPTED);
            }
            // 
            const whenPrintDone = this.nativeLayer_.doPrint(this.$.model.createPrintTicket(this.destination_, this.openPdfInPreview_, this.showSystemDialogBeforePrint_));
            const onError = this.destination_.type === PrinterType.PDF_PRINTER ?
                this.onFileSelectionCancel_.bind(this) :
                this.onPrintFailed_.bind(this);
            whenPrintDone.then(this.close_.bind(this), onError);
        }
    }
    onErrorChange_() {
        if (this.error_ !== Error.NONE) {
            this.nativeLayer_.recordInHistogram('PrintPreview.StateError', this.error_, Error.MAX_BUCKET);
        }
    }
    onPrintRequested_() {
        if (this.state === State.NOT_READY) {
            this.printRequested_ = true;
            return;
        }
        this.$.state.transitTo(this.$.previewArea.previewLoaded() ? State.PRINTING : State.HIDDEN);
    }
    onCancelRequested_() {
        // 
        this.recordCancelMetricCros_();
        // 
        this.cancelled_ = true;
        this.$.state.transitTo(State.CLOSING);
    }
    // 
    /** Records the Print Preview state when cancel is requested. */
    recordCancelMetricCros_() {
        let printAttemptOutcome = null;
        if (this.state !== State.READY) {
            // Print button is disabled when state !== READY.
            printAttemptOutcome = PrintAttemptOutcome.CANCELLED_PRINT_BUTTON_DISABLED;
        }
        else if (!this.$.sidebar.printerExistsInDisplayedDestinations()) {
            printAttemptOutcome = PrintAttemptOutcome.CANCELLED_NO_PRINTERS_AVAILABLE;
        }
        else if (this.destination_.origin === DestinationOrigin.CROS) {
            // Fetch and record printer state.
            switch (computePrinterState(this.destination_.printerStatusReason)) {
                case PrinterState.GOOD:
                    printAttemptOutcome =
                        PrintAttemptOutcome.CANCELLED_PRINTER_GOOD_STATUS;
                    break;
                case PrinterState.ERROR:
                    printAttemptOutcome =
                        PrintAttemptOutcome.CANCELLED_PRINTER_ERROR_STATUS;
                    break;
                case PrinterState.UNKNOWN:
                    printAttemptOutcome =
                        PrintAttemptOutcome.CANCELLED_PRINTER_UNKNOWN_STATUS;
                    break;
            }
        }
        else {
            printAttemptOutcome =
                PrintAttemptOutcome.CANCELLED_OTHER_PRINTERS_AVAILABLE;
        }
        if (printAttemptOutcome !== null) {
            NativeLayerCrosImpl.getInstance().recordPrintAttemptOutcome(printAttemptOutcome);
        }
    }
    // 
    /**
     * @param e The event containing the new validity.
     */
    onSettingValidChanged_(e) {
        if (e.detail) {
            this.$.state.transitTo(State.READY);
        }
        else {
            this.error_ = Error.INVALID_TICKET;
            this.$.state.transitTo(State.ERROR);
        }
    }
    onFileSelectionCancel_() {
        this.$.state.transitTo(State.READY);
    }
    // 
    // 
    /**
     * Called when printing to an extension printer fails.
     * @param httpError The HTTP error code, or -1 or a string describing
     *     the error, if not an HTTP error.
     */
    onPrintFailed_(httpError) {
        console.warn('Printing failed with error code ' + httpError);
        this.error_ = Error.PRINT_FAILED;
        this.$.state.transitTo(State.FATAL_ERROR);
    }
    onPreviewStateChange_() {
        switch (this.previewState_) {
            case PreviewAreaState.DISPLAY_PREVIEW:
            case PreviewAreaState.OPEN_IN_PREVIEW_LOADED:
                if (this.state === State.HIDDEN) {
                    this.$.state.transitTo(State.PRINTING);
                }
                break;
            case PreviewAreaState.ERROR:
                if (this.state !== State.ERROR && this.state !== State.FATAL_ERROR) {
                    this.$.state.transitTo(this.error_ === Error.INVALID_PRINTER ? State.ERROR :
                        State.FATAL_ERROR);
                }
                break;
            default:
                break;
        }
    }
    /**
     * Updates printing options according to source document presets.
     * @param disableScaling Whether the document disables scaling.
     * @param copies The default number of copies from the document.
     * @param duplex The default duplex setting from the document.
     */
    onPrintPresetOptions_(disableScaling, copies, duplex) {
        if (disableScaling) {
            this.$.documentInfo.updateIsScalingDisabled(true);
        }
        if (copies > 0 && this.getSetting('copies').available) {
            this.setSetting('copies', copies, true);
        }
        if (duplex === DuplexMode.UNKNOWN_DUPLEX_MODE) {
            return;
        }
        if (this.getSetting('duplex').available) {
            this.setSetting('duplex', duplex === DuplexMode.LONG_EDGE || duplex === DuplexMode.SHORT_EDGE, true);
        }
        if (duplex !== DuplexMode.SIMPLEX &&
            this.getSetting('duplexShortEdge').available) {
            this.setSetting('duplexShortEdge', duplex === DuplexMode.SHORT_EDGE, true);
        }
    }
    /**
     * @param e Contains the new preview request ID.
     */
    onPreviewStart_(e) {
        this.$.documentInfo.inFlightRequestId = e.detail;
    }
    close_() {
        this.$.state.transitTo(State.CLOSING);
    }
}
customElements.define(PrintPreviewAppElement.is, PrintPreviewAppElement);
