// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Enumeration of actions that require a popup menu to be shown to the user.
 */
export var CertificateAction;
(function (CertificateAction) {
    CertificateAction[CertificateAction["DELETE"] = 0] = "DELETE";
    CertificateAction[CertificateAction["EDIT"] = 1] = "EDIT";
    CertificateAction[CertificateAction["EXPORT_PERSONAL"] = 2] = "EXPORT_PERSONAL";
    CertificateAction[CertificateAction["IMPORT"] = 3] = "IMPORT";
})(CertificateAction || (CertificateAction = {}));
/**
 * The name of the event fired when a certificate action is selected from the
 * dropdown menu. CertificateActionEventDetail is passed as the event detail.
 */
export const CertificateActionEvent = 'certificate-action';
// 
/**
 * The name of the event fired when a the "View Details" action is selected on
 * the dropdown menu next to a certificate provisioning process.
 * CertificateActionEventDetail is passed as the event detail.
 */
export const CertificateProvisioningViewDetailsActionEvent = 'certificate-provisioning-view-details-action';
