// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import 'chrome://resources/polymer/v3_0/paper-progress/paper-progress.js';
import './icons.html.js';
import './viewer-download-controls.js';
import './viewer-page-selector.js';
import './pdf-shared.css.js';
import './shared-vars.css.js';
import { AnchorAlignment } from 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { FittingType } from '../constants.js';
import { record, recordPdfOcrUserSelection, UserAction } from '../metrics.js';
import { PdfViewerPrivateProxyImpl } from '../pdf_viewer_private_proxy.js';
// 
import { getTemplate } from './viewer-toolbar.html.js';
export class ViewerToolbarElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.sidenavCollapsed = false;
        this.displayAnnotations_ = true;
        this.fittingType_ = FittingType.FIT_TO_PAGE;
        this.moreMenuOpen_ = false;
        this.loading_ = true;
        this.pdfOcrPrefChanged_ = null;
    }
    static get is() {
        return 'viewer-toolbar';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            // 
            docTitle: String,
            docLength: Number,
            embeddedViewer: Boolean,
            hasEdits: Boolean,
            hasEnteredAnnotationMode: Boolean,
            isFormFieldFocused: Boolean,
            loadProgress: {
                type: Number,
                observer: 'loadProgressChanged_',
            },
            loading_: {
                type: Boolean,
                reflectToAttribute: true,
            },
            pageNo: Number,
            pdfAnnotationsEnabled: Boolean,
            // 
            pdfOcrEnabled: Boolean,
            // 
            presentationModeAvailable_: {
                type: Boolean,
                // 
                // 
                computed: 'computePresentationModeAvailable_(embeddedViewer)',
                //
            },
            printingEnabled: Boolean,
            rotated: Boolean,
            viewportZoom: Number,
            zoomBounds: Object,
            sidenavCollapsed: Boolean,
            twoUpViewEnabled: Boolean,
            moreMenuOpen_: {
                type: Boolean,
                reflectToAttribute: true,
            },
            fittingType_: Number,
            fitToButtonIcon_: {
                type: String,
                computed: 'computeFitToButtonIcon_(fittingType_)',
            },
            // 
            pdfOcrAlwaysActive_: {
                type: Boolean,
                value: false,
            },
            // 
            viewportZoomPercent_: {
                type: Number,
                computed: 'computeViewportZoomPercent_(viewportZoom)',
                observer: 'viewportZoomPercentChanged_',
            },
            // 
        };
    }
    async connectedCallback() {
        super.connectedCallback();
        this.pdfOcrAlwaysActive_ =
            await PdfViewerPrivateProxyImpl.getInstance().isPdfOcrAlwaysActive();
        this.pdfOcrPrefChanged_ = this.onPdfOcrPrefChanged.bind(this);
        PdfViewerPrivateProxyImpl.getInstance().addPdfOcrPrefChangedListener(this.pdfOcrPrefChanged_);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        PdfViewerPrivateProxyImpl.getInstance().removePdfOcrPrefChangedListener(this.pdfOcrPrefChanged_);
        this.pdfOcrPrefChanged_ = null;
    }
    // 
    onSidenavToggleClick_() {
        record(UserAction.TOGGLE_SIDENAV);
        this.dispatchEvent(new CustomEvent('sidenav-toggle-click'));
    }
    computeFitToButtonIcon_() {
        return this.fittingType_ === FittingType.FIT_TO_PAGE ? 'pdf:fit-to-height' :
            'pdf:fit-to-width';
    }
    computeViewportZoomPercent_() {
        return Math.round(100 * this.viewportZoom);
    }
    /** @return The appropriate tooltip for the current state. */
    getFitToButtonTooltip_(fitToPageTooltip, fitToWidthTooltip) {
        return this.fittingType_ === FittingType.FIT_TO_PAGE ? fitToPageTooltip :
            fitToWidthTooltip;
    }
    loadProgressChanged_() {
        this.loading_ = this.loadProgress < 100;
    }
    viewportZoomPercentChanged_() {
        this.getZoomInput_().value = `${this.viewportZoomPercent_}%`;
    }
    // 
    onPrintClick_() {
        this.dispatchEvent(new CustomEvent('print'));
    }
    onRotateClick_() {
        this.dispatchEvent(new CustomEvent('rotate-left'));
    }
    toggleDisplayAnnotations_() {
        record(UserAction.TOGGLE_DISPLAY_ANNOTATIONS);
        this.displayAnnotations_ = !this.displayAnnotations_;
        this.dispatchEvent(new CustomEvent('display-annotations-changed', { detail: this.displayAnnotations_ }));
        this.$.menu.close();
        // 
    }
    onPresentClick_() {
        record(UserAction.PRESENT);
        this.$.menu.close();
        this.dispatchEvent(new CustomEvent('present-click'));
    }
    onPropertiesClick_() {
        record(UserAction.PROPERTIES);
        this.$.menu.close();
        this.dispatchEvent(new CustomEvent('properties-click'));
    }
    getAriaChecked_(checked) {
        return checked ? 'true' : 'false';
    }
    getAriaExpanded_() {
        return this.sidenavCollapsed ? 'false' : 'true';
    }
    toggleTwoPageViewClick_() {
        const newTwoUpViewEnabled = !this.twoUpViewEnabled;
        this.dispatchEvent(new CustomEvent('two-up-view-changed', { detail: newTwoUpViewEnabled }));
        this.$.menu.close();
    }
    onZoomInClick_() {
        this.dispatchEvent(new CustomEvent('zoom-in'));
    }
    onZoomOutClick_() {
        this.dispatchEvent(new CustomEvent('zoom-out'));
    }
    forceFit(fittingType) {
        // The fitting type is the new state. We want to set the button fitting type
        // to the opposite value.
        this.fittingType_ = fittingType === FittingType.FIT_TO_WIDTH ?
            FittingType.FIT_TO_PAGE :
            FittingType.FIT_TO_WIDTH;
    }
    fitToggle() {
        const newState = this.fittingType_ === FittingType.FIT_TO_PAGE ?
            FittingType.FIT_TO_WIDTH :
            FittingType.FIT_TO_PAGE;
        this.dispatchEvent(new CustomEvent('fit-to-changed', { detail: this.fittingType_ }));
        this.fittingType_ = newState;
    }
    onFitToButtonClick_() {
        this.fitToggle();
    }
    getZoomInput_() {
        return this.shadowRoot.querySelector('#zoom-controls input');
    }
    onZoomChange_() {
        const input = this.getZoomInput_();
        let value = Number.parseInt(input.value, 10);
        value = Math.max(Math.min(value, this.zoomBounds.max), this.zoomBounds.min);
        if (this.sendZoomChanged_(value)) {
            return;
        }
        const zoomString = `${this.viewportZoomPercent_}%`;
        input.value = zoomString;
    }
    /**
     * @param value The new zoom value
     * @return Whether the zoom-changed event was sent.
     */
    sendZoomChanged_(value) {
        if (Number.isNaN(value)) {
            return false;
        }
        // The viewport can have non-integer zoom values.
        if (Math.abs(this.viewportZoom * 100 - value) < 0.5) {
            return false;
        }
        this.dispatchEvent(new CustomEvent('zoom-changed', { detail: value }));
        return true;
    }
    onZoomInputPointerup_(e) {
        e.target.select();
    }
    onMoreClick_() {
        const anchor = this.shadowRoot.querySelector('#more');
        this.$.menu.showAt(anchor, {
            anchorAlignmentX: AnchorAlignment.CENTER,
            anchorAlignmentY: AnchorAlignment.AFTER_END,
            noOffset: true,
        });
    }
    onMoreOpenChanged_(e) {
        this.moreMenuOpen_ = e.detail.value;
    }
    isAtMinimumZoom_() {
        return this.zoomBounds !== undefined &&
            this.viewportZoomPercent_ === this.zoomBounds.min;
    }
    isAtMaximumZoom_() {
        return this.zoomBounds !== undefined &&
            this.viewportZoomPercent_ === this.zoomBounds.max;
    }
    // 
    // 
    async onPdfOcrClick_() {
        // Use `this.pdfOcrAlwaysActive_`, which is the PDF OCR pref currently
        // shown on the more action menu. The PDF OCR pref can be changed by the
        // user from outside the PDF Viewer, but `this.pdfOcrAlwaysActive_` is the
        // value that the user sees from the more action menu when clicking the
        // button to turn on/off the PDF OCR.
        const valueToSet = !this.pdfOcrAlwaysActive_;
        const success = await PdfViewerPrivateProxyImpl.getInstance().setPdfOcrPref(valueToSet);
        if (success) {
            this.pdfOcrAlwaysActive_ = valueToSet;
            recordPdfOcrUserSelection(this.pdfOcrAlwaysActive_);
        }
    }
    onPdfOcrPrefChanged(isPdfOcrAlwaysActive) {
        this.pdfOcrAlwaysActive_ = isPdfOcrAlwaysActive;
    }
    // 
    /**
     * Updates the toolbar's presentation mode available flag depending on current
     * conditions.
     */
    computePresentationModeAvailable_() {
        // 
        // 
        return !this.embeddedViewer;
        // 
    }
}
customElements.define(ViewerToolbarElement.is, ViewerToolbarElement);
