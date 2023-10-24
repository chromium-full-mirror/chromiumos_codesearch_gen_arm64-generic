// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '../../module_header.js';
import 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { I18nMixin, loadTimeData } from '../../../i18n_setup.js';
import { DriveProxy } from '../../drive/drive_module_proxy.js';
import { ModuleDescriptor } from '../../module_descriptor.js';
import { getTemplate } from './module.html.js';
/**
 * The Drive module, which serves as an inside look in to recent activity within
 * a user's Google Drive.
 */
export class DriveModuleElement extends I18nMixin(PolymerElement) {
    static get is() {
        return 'ntp-drive-module-redesigned';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            files: Array,
        };
    }
    getImageSrc_(file) {
        return 'https://drive-thirdparty.googleusercontent.com/32/type/' +
            file.mimeType;
    }
    getMenuItemGroups_() {
        return [
            [
                {
                    action: 'dismiss',
                    icon: 'modules:visibility_off',
                    text: this.i18n('modulesDriveDismissButtonText'),
                },
                {
                    action: 'disable',
                    icon: 'modules:block',
                    text: this.i18n('modulesDriveDisableButtonTextV2'),
                },
                {
                    action: 'info',
                    icon: 'modules:info',
                    text: this.i18n('moduleInfoButtonTitle'),
                },
            ],
            [
                {
                    action: 'customize-module',
                    icon: 'modules:tune',
                    text: this.i18n('modulesCustomizeButtonText'),
                },
            ],
        ];
    }
    onDisableButtonClick_() {
        const disableEvent = new CustomEvent('disable-module', {
            composed: true,
            detail: {
                message: loadTimeData.getStringF('disableModuleToastMessage', loadTimeData.getString('modulesDriveSentence2')),
            },
        });
        this.dispatchEvent(disableEvent);
    }
    onDismissButtonClick_() {
        DriveProxy.getHandler().dismissModule();
        this.dispatchEvent(new CustomEvent('dismiss-module-instance', {
            bubbles: true,
            composed: true,
            detail: {
                message: loadTimeData.getStringF('dismissModuleToastMessage', loadTimeData.getString('modulesDriveFilesSentence')),
                restoreCallback: () => DriveProxy.getHandler().restoreModule(),
            },
        }));
    }
    onFileClick_(e) {
        const clickFileEvent = new Event('usage', { composed: true });
        this.dispatchEvent(clickFileEvent);
        chrome.metricsPrivate.recordSmallCount('NewTabPage.Drive.FileClick', e.model.index);
    }
    onInfoButtonClick_() {
        this.$.infoDialogRender.get().showModal();
    }
    onMenuButtonClick_(e) {
        this.$.moduleHeaderElementV2.showAt(e);
    }
}
customElements.define(DriveModuleElement.is, DriveModuleElement);
async function createDriveElement() {
    const { files } = await DriveProxy.getHandler().getFiles();
    if (files.length === 0) {
        return null;
    }
    const element = new DriveModuleElement();
    element.files = files;
    return element;
}
export const driveDescriptor = new ModuleDescriptor(
/*id*/ 'drive', createDriveElement);
