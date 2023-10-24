// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview certificate-subentry represents an SSL certificate sub-entry.
 */
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render.js';
import 'chrome://resources/cr_elements/policy/cr_policy_indicator.js';
import 'chrome://resources/cr_elements/icons.html.js';
import './certificate_shared.css.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { CrPolicyIndicatorType } from 'chrome://resources/cr_elements/policy/cr_policy_indicator_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { CertificateAction, CertificateActionEvent } from './certificate_manager_types.js';
import { getTemplate } from './certificate_subentry.html.js';
import { CertificatesBrowserProxyImpl, CertificateType } from './certificates_browser_proxy.js';
const CertificateSubentryElementBase = I18nMixin(PolymerElement);
export class CertificateSubentryElement extends CertificateSubentryElementBase {
    constructor() {
        super(...arguments);
        this.browserProxy_ = CertificatesBrowserProxyImpl.getInstance();
    }
    static get is() {
        return 'certificate-subentry';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            model: Object,
            certificateType: String,
        };
    }
    /**
     * Dispatches an event indicating which certificate action was tapped. It is
     * used by the parent of this element to display a modal dialog accordingly.
     */
    dispatchCertificateActionEvent_(action) {
        this.dispatchEvent(new CustomEvent(CertificateActionEvent, {
            bubbles: true,
            composed: true,
            detail: {
                action: action,
                subnode: this.model,
                certificateType: this.certificateType,
                anchor: this.$.dots,
            },
        }));
    }
    /**
     * Handles the case where a call to the browser resulted in a rejected
     * promise.
     */
    onRejected_(error) {
        if (error === null) {
            // Nothing to do here. Null indicates that the user clicked "cancel" on a
            // native file chooser dialog or that the request was ignored by the
            // handler due to being received while another was still being processed.
            return;
        }
        // Otherwise propagate the error to the parents, such that a dialog
        // displaying the error will be shown.
        this.dispatchEvent(new CustomEvent('certificates-error', {
            bubbles: true,
            composed: true,
            detail: { error, anchor: null },
        }));
    }
    onViewClick_() {
        this.closePopupMenu_();
        this.browserProxy_.viewCertificate(this.model.id);
    }
    onEditClick_() {
        this.closePopupMenu_();
        this.dispatchCertificateActionEvent_(CertificateAction.EDIT);
    }
    onDeleteClick_() {
        this.closePopupMenu_();
        this.dispatchCertificateActionEvent_(CertificateAction.DELETE);
    }
    onExportClick_() {
        this.closePopupMenu_();
        if (this.certificateType === CertificateType.PERSONAL) {
            this.browserProxy_.exportPersonalCertificate(this.model.id).then(() => {
                this.dispatchCertificateActionEvent_(CertificateAction.EXPORT_PERSONAL);
            }, this.onRejected_.bind(this));
        }
        else {
            this.browserProxy_.exportCertificate(this.model.id);
        }
    }
    /**
     * @return Whether the certificate can be edited.
     */
    canEdit_(model) {
        return model.canBeEdited;
    }
    /**
     * @return Whether the certificate can be exported.
     */
    canExport_(certificateType, model) {
        if (certificateType === CertificateType.PERSONAL) {
            return model.extractable;
        }
        return true;
    }
    /**
     * @return Whether the certificate can be deleted.
     */
    canDelete_(model) {
        return model.canBeDeleted;
    }
    closePopupMenu_() {
        this.shadowRoot.querySelector('cr-action-menu').close();
    }
    onDotsClick_() {
        this.$.menu.get().showAt(this.$.dots);
    }
    getPolicyIndicatorType_(model) {
        return model.policy ? CrPolicyIndicatorType.USER_POLICY :
            CrPolicyIndicatorType.NONE;
    }
}
customElements.define(CertificateSubentryElement.is, CertificateSubentryElement);
