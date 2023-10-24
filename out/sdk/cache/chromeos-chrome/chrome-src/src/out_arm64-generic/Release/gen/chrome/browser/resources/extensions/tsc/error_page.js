// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_icons.css.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/polymer/v3_0/iron-collapse/iron-collapse.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import 'chrome://resources/polymer/v3_0/paper-styles/color.js';
import './code_section.js';
import './shared_style.css.js';
import { assert, assertNotReached } from 'chrome://resources/js/assert.js';
import { FocusOutlineManager } from 'chrome://resources/js/focus_outline_manager.js';
import { focusWithoutInk } from 'chrome://resources/js/focus_without_ink.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { afterNextRender, PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './error_page.html.js';
import { navigation, Page } from './navigation_helper.js';
/**
 * Get the URL relative to the main extension url. If the url is
 * unassociated with the extension, this will be the full url.
 */
function getRelativeUrl(url, error) {
    const fullUrl = 'chrome-extension://' + error.extensionId + '/';
    return url.startsWith(fullUrl) ? url.substring(fullUrl.length) : url;
}
/**
 * Given 3 strings, this function returns the correct one for the type of
 * error that |item| is.
 */
function getErrorSeverityText(item, log, warn, error) {
    if (item.type === chrome.developerPrivate.ErrorType.RUNTIME) {
        switch (item.severity) {
            case chrome.developerPrivate.ErrorLevel.LOG:
                return log;
            case chrome.developerPrivate.ErrorLevel.WARN:
                return warn;
            case chrome.developerPrivate.ErrorLevel.ERROR:
                return error;
            default:
                assertNotReached();
        }
    }
    assert(item.type === chrome.developerPrivate.ErrorType.MANIFEST);
    return warn;
}
export class ExtensionsErrorPageElement extends PolymerElement {
    static get is() {
        return 'extensions-error-page';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            data: Object,
            delegate: Object,
            // Whether or not dev mode is enabled.
            inDevMode: {
                type: Boolean,
                value: false,
                observer: 'onInDevModeChanged_',
            },
            entries_: Array,
            code_: Object,
            /**
             * Index into |entries_|.
             */
            selectedEntry_: {
                type: Number,
                observer: 'onSelectedErrorChanged_',
            },
            selectedStackFrame_: {
                type: Object,
                value() {
                    return null;
                },
            },
        };
    }
    static get observers() {
        return ['observeDataChanges_(data.*)'];
    }
    ready() {
        super.ready();
        this.addEventListener('view-enter-start', this.onViewEnterStart_);
        FocusOutlineManager.forDocument(document);
    }
    getSelectedError() {
        return this.entries_[this.selectedEntry_];
    }
    /**
     * Focuses the back button when page is loaded.
     */
    onViewEnterStart_() {
        afterNextRender(this, () => focusWithoutInk(this.$.closeButton));
        chrome.metricsPrivate.recordUserAction('Options_ViewExtensionErrors');
    }
    getContextUrl_(error, unknown) {
        return error.contextUrl ?
            getRelativeUrl(error.contextUrl, error) :
            unknown;
    }
    /**
     * Watches for changes to |data| in order to fetch the corresponding
     * file source.
     */
    observeDataChanges_() {
        this.entries_ = [...this.data.manifestErrors, ...this.data.runtimeErrors];
        this.selectedEntry_ = -1; // This also help reset code-section content.
        if (this.entries_.length) {
            this.selectedEntry_ = 0;
        }
    }
    onCloseButtonClick_() {
        navigation.navigateTo({ page: Page.LIST });
    }
    onClearAllClick_() {
        const ids = this.entries_.map(entry => entry.id);
        this.delegate.deleteErrors(this.data.id, ids);
    }
    computeErrorIcon_(error) {
        // Do not i18n these strings, they're CSS classes.
        return getErrorSeverityText(error, 'info', 'warning', 'error');
    }
    computeErrorTypeLabel_(error) {
        return getErrorSeverityText(error, loadTimeData.getString('logLevel'), loadTimeData.getString('warnLevel'), loadTimeData.getString('errorLevel'));
    }
    onDeleteErrorAction_(e) {
        this.delegate.deleteErrors(this.data.id, [e.model.item.id]);
        e.stopPropagation();
    }
    onInDevModeChanged_() {
        if (!this.inDevMode) {
            // Wait until next render cycle in case error page is loading.
            setTimeout(() => {
                this.onCloseButtonClick_();
            }, 0);
        }
    }
    /**
     * Fetches the source for the selected error and populates the code section.
     */
    onSelectedErrorChanged_() {
        this.code_ = null;
        if (this.selectedEntry_ < 0) {
            return;
        }
        const error = this.getSelectedError();
        const args = {
            extensionId: error.extensionId,
            message: error.message,
            pathSuffix: '',
        };
        switch (error.type) {
            case chrome.developerPrivate.ErrorType.MANIFEST:
                const manifestError = error;
                args.pathSuffix = manifestError.source;
                args.manifestKey = manifestError.manifestKey;
                args.manifestSpecific = manifestError.manifestSpecific;
                break;
            case chrome.developerPrivate.ErrorType.RUNTIME:
                const runtimeError = error;
                try {
                    // slice(1) because pathname starts with a /.
                    args.pathSuffix = new URL(runtimeError.source).pathname.slice(1);
                }
                catch (e) {
                    // Swallow the invalid URL error and return early. This prevents the
                    // uncaught error from causing a runtime error as seen in
                    // crbug.com/1257170.
                    return;
                }
                args.lineNumber =
                    runtimeError.stackTrace && runtimeError.stackTrace[0] ?
                        runtimeError.stackTrace[0].lineNumber :
                        0;
                this.selectedStackFrame_ =
                    runtimeError.stackTrace && runtimeError.stackTrace[0] ?
                        runtimeError.stackTrace[0] :
                        null;
                break;
        }
        this.delegate.requestFileSource(args).then(code => this.code_ = code);
    }
    computeIsRuntimeError_(item) {
        return item.type === chrome.developerPrivate.ErrorType.RUNTIME;
    }
    /**
     * The description is a human-readable summation of the frame, in the
     * form "<relative_url>:<line_number> (function)", e.g.
     * "myfile.js:25 (myFunction)".
     */
    getStackTraceLabel_(frame) {
        let description = getRelativeUrl(frame.url, this.getSelectedError()) + ':' +
            frame.lineNumber;
        if (frame.functionName) {
            const functionName = frame.functionName === '(anonymous function)' ?
                loadTimeData.getString('anonymousFunction') :
                frame.functionName;
            description += ' (' + functionName + ')';
        }
        return description;
    }
    getStackFrameClass_(frame) {
        return frame === this.selectedStackFrame_ ? 'selected' : '';
    }
    getStackFrameTabIndex_(frame) {
        return frame === this.selectedStackFrame_ ? 0 : -1;
    }
    /**
     * This function is used to determine whether or not we want to show a
     * stack frame. We don't want to show code from internal scripts.
     */
    shouldDisplayFrame_(url) {
        // All our internal scripts are in the 'extensions::' namespace.
        return !/^extensions::/.test(url);
    }
    updateSelected_(frame) {
        this.selectedStackFrame_ = frame;
        const selectedError = this.getSelectedError();
        this.delegate
            .requestFileSource({
            extensionId: selectedError.extensionId,
            message: selectedError.message,
            pathSuffix: getRelativeUrl(frame.url, selectedError),
            lineNumber: frame.lineNumber,
        })
            .then(code => this.code_ = code);
    }
    onStackFrameClick_(e) {
        const frame = e.model.item;
        this.updateSelected_(frame);
    }
    onStackKeydown_(e) {
        let direction = 0;
        if (e.key === 'ArrowDown') {
            direction = 1;
        }
        else if (e.key === 'ArrowUp') {
            direction = -1;
        }
        else {
            return;
        }
        e.preventDefault();
        const list = e.target.parentElement.querySelectorAll('li');
        for (let i = 0; i < list.length; ++i) {
            if (list[i].classList.contains('selected')) {
                const repeaterEvent = e;
                const frame = repeaterEvent.model.item.stackTrace[i + direction];
                if (frame) {
                    this.updateSelected_(frame);
                    list[i + direction].focus(); // Preserve focus.
                }
                return;
            }
        }
    }
    /**
     * Computes the class name for the error item depending on whether its
     * the currently selected error.
     */
    computeErrorClass_(index) {
        return index === this.selectedEntry_ ? 'selected' : '';
    }
    iconName_(index) {
        return index === this.selectedEntry_ ? 'icon-expand-less' :
            'icon-expand-more';
    }
    /**
     * Determine if the iron-collapse should be opened (expanded).
     */
    isOpened_(index) {
        return index === this.selectedEntry_;
    }
    /**
     * @return The aria-expanded value as a string.
     */
    isAriaExpanded_(index) {
        return this.isOpened_(index).toString();
    }
    onErrorItemAction_(e) {
        if (e.type === 'keydown' && !((e.code === 'Space' || e.code === 'Enter'))) {
            return;
        }
        // Call preventDefault() to avoid the browser scrolling when the space key
        // is pressed.
        e.preventDefault();
        const repeaterEvent = e;
        this.selectedEntry_ = this.selectedEntry_ === repeaterEvent.model.index ?
            -1 :
            repeaterEvent.model.index;
    }
}
customElements.define(ExtensionsErrorPageElement.is, ExtensionsErrorPageElement);
