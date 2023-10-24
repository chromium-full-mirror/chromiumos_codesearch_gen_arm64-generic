// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_hidden_style.css.js';
import 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import { assert } from 'chrome://resources/js/assert.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { PolymerElement, templatize } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { loadTimeData } from '../../i18n_setup.js';
import { NewTabPageProxy } from '../../new_tab_page_proxy.js';
import { WindowProxy } from '../../window_proxy.js';
import { ModuleRegistry } from '../module_registry.js';
import { getTemplate } from './modules.html.js';
export const SUPPORTED_MODULE_WIDTHS = [
    { name: 'narrow', value: 312 },
    { name: 'medium', value: 360 },
    { name: 'wide', value: 728 },
];
const CONTAINER_GAP_WIDTH = 8;
const MARGIN_WIDTH = 48;
const METRIC_NAME_MODULE_DISABLED = 'NewTabPage.Modules.Disabled';
/** Container for the NTP modules. */
export class ModulesV2Element extends PolymerElement {
    constructor() {
        super(...arguments);
        this.eventTracker_ = new EventTracker();
        this.setDisabledModulesListenerId_ = null;
        this.containerObserver_ = null;
        this.templateInstances_ = [];
    }
    static get is() {
        return 'ntp-modules-v2';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            disabledModules_: {
                type: Object,
                observer: 'onDisabledModulesChange_',
                value: () => ({ all: true, ids: [] }),
            },
            modulesShownToUser: {
                type: Boolean,
                notify: true,
            },
            /** Data about the most recent un-doable action. */
            undoData_: {
                type: Object,
                value: null,
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.setDisabledModulesListenerId_ =
            NewTabPageProxy.getInstance()
                .callbackRouter.setDisabledModules.addListener((all, ids) => {
                this.disabledModules_ = { all, ids };
            });
        NewTabPageProxy.getInstance().handler.updateDisabledModules();
        const widths = new Set();
        for (let i = 0; i < SUPPORTED_MODULE_WIDTHS.length; i++) {
            const namedWidth = SUPPORTED_MODULE_WIDTHS[i];
            for (let u = 1; u <= this.maxColumnCount_ - i; u++) {
                const width = (namedWidth.value * u) + (CONTAINER_GAP_WIDTH * (u - 1));
                if (width <= this.containerMaxWidth_) {
                    widths.add(width);
                }
            }
        }
        // Widths must be deduped and sorted to ensure the min-width and max-with
        // media features in the queries produced below are correctly generated.
        const thresholds = [...widths];
        thresholds.sort((i, j) => i - j);
        const queries = [];
        for (let i = 1; i < thresholds.length - 1; i++) {
            queries.push({
                maxWidth: (thresholds[i + 1] - 1),
                query: `(min-width: ${thresholds[i] + 2 * MARGIN_WIDTH}px) and (max-width: ${thresholds[i + 1] - 1 + (2 * MARGIN_WIDTH)}px)`,
            });
        }
        queries.splice(0, 0, {
            maxWidth: thresholds[0],
            query: `(max-width: ${thresholds[0] - 1 + (2 * MARGIN_WIDTH)}px)`,
        });
        queries.push({
            maxWidth: thresholds[thresholds.length - 1],
            query: `(min-width: ${thresholds[thresholds.length - 1] + (2 * MARGIN_WIDTH)}px)`,
        });
        // Produce media queries with relevant view thresholds at which module
        // instance optimal widths should be re-evaluated.
        queries.forEach(details => {
            const query = WindowProxy.getInstance().matchMedia(details.query);
            this.eventTracker_.add(query, 'change', (e) => {
                if (e.matches) {
                    this.updateContainerAndChildrenStyles_(details.maxWidth);
                }
            });
        });
        this.eventTracker_.add(window, 'keydown', this.onWindowKeydown_.bind(this));
        this.containerObserver_ = new MutationObserver(() => {
            this.updateContainerAndChildrenStyles_();
        });
        this.containerObserver_.observe(this.$.container, { childList: true });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        assert(this.setDisabledModulesListenerId_);
        NewTabPageProxy.getInstance().callbackRouter.removeListener(this.setDisabledModulesListenerId_);
        this.eventTracker_.removeAll();
        this.containerObserver_.disconnect();
    }
    ready() {
        super.ready();
        this.updateStyles({
            '--container-gap': `${CONTAINER_GAP_WIDTH}px`,
        });
        this.maxColumnCount_ = loadTimeData.getInteger('modulesMaxColumnCount');
        this.containerMaxWidth_ =
            this.maxColumnCount_ * SUPPORTED_MODULE_WIDTHS[0].value +
                (this.maxColumnCount_ - 1) * CONTAINER_GAP_WIDTH;
        this.loadModules_();
    }
    moduleDisabled_(disabledModules, instance) {
        return disabledModules.all ||
            disabledModules.ids.includes(instance.descriptor.id);
    }
    async loadModules_() {
        const modulesIdNames = (await NewTabPageProxy.getInstance().handler.getModulesIdNames()).data;
        const modules = await ModuleRegistry.getInstance().initializeModulesHavingIds(modulesIdNames.map(m => m.id), loadTimeData.getInteger('modulesLoadTimeout'));
        if (modules) {
            NewTabPageProxy.getInstance().handler.onModulesLoadedWithData(modules.map(module => module.descriptor.id));
            const template = this.shadowRoot.querySelector('template');
            const moduleWrapperConstructor = templatize(template, this, {
                parentModel: true,
                forwardHostProp: this.forwardHostProp_,
                instanceProps: { item: true },
            });
            if (modules.length > 1) {
                const maxModuleInstanceCount = loadTimeData.getInteger('multipleLoadedModulesMaxModuleInstanceCount');
                if (maxModuleInstanceCount > 0) {
                    modules.forEach(module => {
                        module.elements.splice(maxModuleInstanceCount, module.elements.length - maxModuleInstanceCount);
                    });
                }
            }
            this.templateInstances_ =
                modules
                    .map(module => {
                    return module.elements.map(element => {
                        return {
                            element,
                            descriptor: module.descriptor,
                        };
                    });
                })
                    .flat()
                    .map(instance => {
                    return new moduleWrapperConstructor({ item: instance });
                });
            this.templateInstances_.map(t => t.children[0])
                .forEach(wrapperElement => {
                this.$.container.appendChild(wrapperElement);
            });
            chrome.metricsPrivate.recordSmallCount('NewTabPage.Modules.LoadedModulesCount', modules.length);
            modulesIdNames.forEach(({ id }) => {
                chrome.metricsPrivate.recordBoolean(`NewTabPage.Modules.EnabledOnNTPLoad.${id}`, !this.disabledModules_.all &&
                    !this.disabledModules_.ids.includes(id));
            });
            chrome.metricsPrivate.recordSmallCount('NewTabPage.Modules.InstanceCount', this.templateInstances_.length);
            chrome.metricsPrivate.recordBoolean('NewTabPage.Modules.VisibleOnNTPLoad', !this.disabledModules_.all);
            this.recordModuleLoadedWithModules_(modules);
            this.dispatchEvent(new Event('modules-loaded'));
        }
    }
    recordModuleLoadedWithModules_(modules) {
        const moduleDescriptorIds = modules.map(m => m.descriptor.id);
        for (const moduleDescriptorId of moduleDescriptorIds) {
            moduleDescriptorIds.forEach(id => {
                if (id !== moduleDescriptorId) {
                    chrome.metricsPrivate.recordSparseValueWithPersistentHash(`NewTabPage.Modules.LoadedWith.${moduleDescriptorId}`, id);
                }
            });
        }
    }
    forwardHostProp_(property, value) {
        this.templateInstances_.forEach(instance => {
            instance.forwardHostProp(property, value);
        });
    }
    updateContainerAndChildrenStyles_(availableWidth) {
        if (typeof availableWidth === 'undefined') {
            availableWidth = Math.min(document.body.clientWidth - 2 * MARGIN_WIDTH, this.containerMaxWidth_);
        }
        const moduleWrappers = Array.from(this.shadowRoot.querySelectorAll('ntp-module-wrapper:not([hidden])'));
        this.modulesShownToUser = moduleWrappers.length !== 0;
        if (moduleWrappers.length === 0) {
            return;
        }
        this.updateStyles({ '--container-max-width': `${availableWidth}px` });
        const clamp = (min, val, max) => Math.max(min, Math.min(val, max));
        const rowMaxInstanceCount = clamp(1, Math.floor((availableWidth + CONTAINER_GAP_WIDTH) /
            (CONTAINER_GAP_WIDTH + SUPPORTED_MODULE_WIDTHS[0].value)), this.maxColumnCount_);
        let index = 0;
        while (index < moduleWrappers.length) {
            const instances = moduleWrappers.slice(index, index + rowMaxInstanceCount)
                .map(w => w.module);
            let namedWidth = SUPPORTED_MODULE_WIDTHS[0];
            for (let i = 1; i < SUPPORTED_MODULE_WIDTHS.length; i++) {
                if (Math.floor((availableWidth -
                    (CONTAINER_GAP_WIDTH * (instances.length - 1))) /
                    SUPPORTED_MODULE_WIDTHS[i].value) < instances.length) {
                    break;
                }
                namedWidth = SUPPORTED_MODULE_WIDTHS[i];
            }
            instances.slice(0, instances.length).forEach(instance => {
                // The `format` attribute is leveraged by modules whose layout should
                // change based on the available width.
                instance.element.setAttribute('format', namedWidth.name);
                instance.element.style.width = `${namedWidth.value}px`;
            });
            index += instances.length;
        }
    }
    onDisableModule_(e) {
        const id = e.target.module.descriptor.id;
        const restoreCallback = e.detail.restoreCallback;
        this.undoData_ = {
            message: e.detail.message,
            undo: () => {
                if (restoreCallback) {
                    restoreCallback();
                }
                NewTabPageProxy.getInstance().handler.setModuleDisabled(id, false);
                chrome.metricsPrivate.recordSparseValueWithPersistentHash('NewTabPage.Modules.Enabled', id);
                chrome.metricsPrivate.recordSparseValueWithPersistentHash('NewTabPage.Modules.Enabled.Toast', id);
            },
        };
        NewTabPageProxy.getInstance().handler.setModuleDisabled(id, true);
        this.$.undoToast.show();
        chrome.metricsPrivate.recordSparseValueWithPersistentHash(METRIC_NAME_MODULE_DISABLED, id);
        chrome.metricsPrivate.recordSparseValueWithPersistentHash(`${METRIC_NAME_MODULE_DISABLED}.ModuleRequest`, id);
    }
    onDisabledModulesChange_() {
        this.updateContainerAndChildrenStyles_();
    }
    /**
     * @param e Event notifying a module instance was dismissed. Contains the
     *     message to show in the toast.
     */
    onDismissModuleInstance_(e) {
        const wrapper = e.target;
        const index = Array.from(wrapper.parentNode.children).indexOf(wrapper);
        wrapper.remove();
        const restoreCallback = e.detail.restoreCallback;
        this.undoData_ = {
            message: e.detail.message,
            undo: restoreCallback ?
                () => {
                    this.$.container.insertBefore(wrapper, this.$.container.childNodes[index]);
                    restoreCallback();
                    chrome.metricsPrivate.recordSparseValueWithPersistentHash('NewTabPage.Modules.Restored', wrapper.module.descriptor.id);
                } :
                undefined,
        };
        // Notify the user.
        this.$.undoToast.show();
        chrome.metricsPrivate.recordSparseValueWithPersistentHash('NewTabPage.Modules.Dismissed', wrapper.module.descriptor.id);
    }
    onUndoButtonClick_() {
        if (!this.undoData_) {
            return;
        }
        // Restore to the previous state.
        this.undoData_.undo();
        // Notify the user.
        this.$.undoToast.hide();
        this.undoData_ = null;
    }
    onWindowKeydown_(e) {
        let ctrlKeyPressed = e.ctrlKey;
        // 
        if (ctrlKeyPressed && e.key === 'z') {
            this.onUndoButtonClick_();
        }
    }
}
customElements.define(ModulesV2Element.is, ModulesV2Element);
