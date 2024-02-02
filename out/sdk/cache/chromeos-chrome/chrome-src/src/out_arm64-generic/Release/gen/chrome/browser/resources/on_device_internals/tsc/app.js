// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_hidden_style.css.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import '//resources/cr_elements/cr_shared_vars.css.js';
import '//resources/cr_elements/cr_textarea/cr_textarea.js';
import '//resources/cr_elements/cr_expand_button/cr_expand_button.js';
import '//resources/polymer/v3_0/iron-collapse/iron-collapse.js';
import { PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './app.html.js';
import { BrowserProxy } from './browser_proxy.js';
import { LoadModelResult, OnDeviceModelRemote, PerformanceClass, SessionRemote, StreamingResponderCallbackRouter } from './on_device_model.mojom-webui.js';
function getPerformanceClassText(performanceClass) {
    switch (performanceClass) {
        case PerformanceClass.kVeryLow:
            return 'Very Low';
        case PerformanceClass.kLow:
            return 'Low';
        case PerformanceClass.kMedium:
            return 'Medium';
        case PerformanceClass.kHigh:
            return 'High';
        case PerformanceClass.kVeryHigh:
            return 'Very High';
        case PerformanceClass.kGpuBlocked:
            return 'GPU blocked';
        case PerformanceClass.kFailedToLoadLibrary:
            return 'Failed to load native library';
        default:
            return 'Error';
    }
}
class OnDeviceInternalsAppElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.contextExpanded_ = false;
        this.contextLength_ = 0;
        this.session_ = null;
        this.proxy_ = BrowserProxy.getInstance();
        this.responseRouter_ = new StreamingResponderCallbackRouter();
    }
    static get is() {
        return 'on-device-internals-app';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            modelPath_: {
                type: String,
                value: '',
            },
            error_: String,
            text_: String,
            loadModelStart_: {
                type: Number,
                value: 0,
            },
            currentResponse_: {
                type: Object,
                value: null,
            },
            responses_: {
                type: Array,
                value: () => [],
            },
            model_: {
                type: Object,
                value: null,
            },
            performanceClassText_: {
                type: String,
                value: 'Loading...',
            },
            contextExpanded_: Boolean,
            contextLength_: Number,
            contextText_: String,
        };
    }
    static get observers() {
        return [
            'onModelOrErrorChanged_(model_, error_)',
        ];
    }
    ready() {
        super.ready();
        this.getPerformanceClass_();
    }
    async getPerformanceClass_() {
        this.performanceClassText_ = getPerformanceClassText((await this.proxy_.handler.getEstimatedPerformanceClass())
            .performanceClass);
    }
    onModelOrErrorChanged_() {
        if (this.model_ !== null) {
            this.loadModelDuration_ = new Date().getTime() - this.loadModelStart_;
            this.$.textInput.focus();
        }
        this.loadModelStart_ = 0;
    }
    onLoadClick_() {
        this.onModelSelected_();
    }
    onServiceCrashed_() {
        if (this.currentResponse_) {
            this.currentResponse_.error = true;
            this.addResponse_();
        }
        this.error_ = 'Service crashed, please reload the model.';
        this.model_ = null;
        this.modelPath_ = '';
        this.loadModelStart_ = 0;
        this.$.modelInput.focus();
    }
    async onModelSelected_() {
        this.error_ = '';
        if (this.model_) {
            this.model_.$.close();
        }
        this.model_ = null;
        this.loadModelStart_ = new Date().getTime();
        const modelPath = this.$.modelInput.value;
        // 
        // 
        const processedPath = modelPath;
        // 
        const newModel = new OnDeviceModelRemote();
        const { result } = await this.proxy_.handler.loadModel({ path: processedPath }, newModel.$.bindNewPipeAndPassReceiver());
        if (result !== LoadModelResult.kSuccess) {
            this.error_ =
                'Unable to load model. Specify a correct and absolute path.';
        }
        else {
            this.model_ = newModel;
            this.model_.onConnectionError.addListener(() => {
                this.onServiceCrashed_();
            });
            this.startNewSession_();
            this.modelPath_ = modelPath;
        }
    }
    onAddContextClick_() {
        if (this.session_ === null) {
            return;
        }
        this.session_.addContext({ text: this.contextText_, ignoreContext: false }, null);
        this.contextLength_ += this.contextText_.split(/(\s+)/).length;
        this.contextText_ = '';
    }
    startNewSession_() {
        if (this.model_ === null) {
            return;
        }
        this.contextLength_ = 0;
        this.session_ = new SessionRemote();
        this.model_.startSession(this.session_.$.bindNewPipeAndPassReceiver());
    }
    onCancelClick_() {
        this.responseRouter_.$.close();
        this.responseRouter_ = new StreamingResponderCallbackRouter();
        this.addResponse_();
    }
    onExecuteClick_() {
        this.onExecute_();
    }
    addResponse_() {
        this.unshift('responses_', this.currentResponse_);
        this.currentResponse_ = null;
        this.$.textInput.focus();
    }
    onExecute_() {
        if (this.session_ === null) {
            return;
        }
        this.session_.execute({ text: this.text_, ignoreContext: false }, this.responseRouter_.$.bindNewPipeAndPassRemote());
        const onResponseId = this.responseRouter_.onResponse.addListener((chunk) => {
            this.set('currentResponse_.response', (this.currentResponse_?.response + chunk.text).trimStart());
        });
        const onCompleteId = this.responseRouter_.onComplete.addListener((_) => {
            this.addResponse_();
            this.responseRouter_.removeListener(onResponseId);
            this.responseRouter_.removeListener(onCompleteId);
        });
        this.currentResponse_ = {
            text: this.text_,
            response: '',
            responseClass: 'response',
            retracted: false,
            error: false,
        };
        this.text_ = '';
    }
    canExecute_() {
        return !this.currentResponse_ && this.model_ !== null;
    }
    isLoading_() {
        return this.loadModelStart_ !== 0;
    }
    getModelText_() {
        if (this.modelPath_.length === 0) {
            return '';
        }
        return 'Model loaded from ' + this.modelPath_ + ' in ' +
            this.loadModelDuration_ + 'ms';
    }
}
customElements.define(OnDeviceInternalsAppElement.is, OnDeviceInternalsAppElement);
