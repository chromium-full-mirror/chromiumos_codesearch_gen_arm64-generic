// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PageHandlerRemote } from 'chrome://cloud-upload/cloud_upload.mojom-webui.js';
import { TestMock } from 'chrome://webui-test/test_mock.js';
/**
 * A test CloudUploadBrowserProxy implementation that enables to mock various
 * mojo responses.
 */
export class CloudUploadTestBrowserProxy {
    handler;
    constructor(options) {
        this.handler = TestMock.fromClass(PageHandlerRemote);
        const args = {
            fileNames: options.fileNames,
            dialogSpecificArgs: options.dialogSpecificArgs,
        };
        this.handler.setResultFor('getDialogArgs', { args: args });
        this.handler.setResultFor('isOfficeWebAppInstalled', { installed: options.officeWebAppInstalled });
        this.handler.setResultFor('installOfficeWebApp', { installed: options.installOfficeWebAppResult });
        this.handler.setResultFor('isODFSMounted', { mounted: options.odfsMounted });
        this.handler.setResultFor('signInToOneDrive', { success: true });
        this.handler.setResultFor('getAlwaysMoveOfficeFilesToDrive', {
            alwaysMove: options.alwaysMoveOfficeFilesToDrive,
        });
        this.handler.setResultFor('getAlwaysMoveOfficeFilesToOneDrive', {
            alwaysMove: options.alwaysMoveOfficeFilesToOneDrive,
        });
        this.handler.setResultFor('getOfficeMoveConfirmationShownForDrive', {
            moveConfirmationShown: options.officeMoveConfirmationShownForDrive,
        });
        this.handler.setResultFor('getOfficeMoveConfirmationShownForOneDrive', {
            moveConfirmationShown: options.officeMoveConfirmationShownForOneDrive,
        });
    }
    isTest() {
        return true;
    }
}
