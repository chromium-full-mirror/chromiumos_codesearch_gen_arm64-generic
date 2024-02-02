// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-text-to-speech-subpage' is the accessibility settings subpage
 * for text-to-speech accessibility settings.
 */
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import '../controls/settings_toggle_button.js';
import '../settings_shared.css.js';
import { PrefsMixin } from 'chrome://resources/cr_components/settings_prefs/prefs_mixin.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { cast } from '../assert_extras.js';
import { DeepLinkingMixin } from '../common/deep_linking_mixin.js';
import { RouteOriginMixin } from '../common/route_origin_mixin.js';
import { SettingsToggleButtonElement } from '../controls/settings_toggle_button.js';
import { DevicePageBrowserProxyImpl } from '../device_page/device_page_browser_proxy.js';
import { Setting } from '../mojom-webui/setting.mojom-webui.js';
import { Router, routes } from '../router.js';
import { getTemplate } from './text_to_speech_subpage.html.js';
import { TextToSpeechSubpageBrowserProxyImpl } from './text_to_speech_subpage_browser_proxy.js';
/**
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused. This enum is tied directly to a UMA
 * enum, PdfOcrUserSelection, defined in //tools/metrics/histograms/enums.xml
 * and should always reflect it (do not change one without changing the other).
 */
export var PdfOcrUserSelection;
(function (PdfOcrUserSelection) {
    PdfOcrUserSelection[PdfOcrUserSelection["DEPRECATED_TURN_ON_ONCE_FROM_CONTEXT_MENU"] = 0] = "DEPRECATED_TURN_ON_ONCE_FROM_CONTEXT_MENU";
    PdfOcrUserSelection[PdfOcrUserSelection["TURN_ON_ALWAYS_FROM_CONTEXT_MENU"] = 1] = "TURN_ON_ALWAYS_FROM_CONTEXT_MENU";
    PdfOcrUserSelection[PdfOcrUserSelection["TURN_OFF_FROM_CONTEXT_MENU"] = 2] = "TURN_OFF_FROM_CONTEXT_MENU";
    PdfOcrUserSelection[PdfOcrUserSelection["TURN_ON_ALWAYS_FROM_MORE_ACTIONS"] = 3] = "TURN_ON_ALWAYS_FROM_MORE_ACTIONS";
    PdfOcrUserSelection[PdfOcrUserSelection["TURN_OFF_FROM_MORE_ACTIONS"] = 4] = "TURN_OFF_FROM_MORE_ACTIONS";
    PdfOcrUserSelection[PdfOcrUserSelection["TURN_ON_ALWAYS_FROM_SETTINGS"] = 5] = "TURN_ON_ALWAYS_FROM_SETTINGS";
    PdfOcrUserSelection[PdfOcrUserSelection["TURN_OFF_FROM_SETTINGS"] = 6] = "TURN_OFF_FROM_SETTINGS";
})(PdfOcrUserSelection || (PdfOcrUserSelection = {}));
/**
 * Numerical values should not be changed because they must stay in sync with
 * screen_ai::ScreenAIInstallState::State defined in screen_ai_install_state.h
 */
export var ScreenAiInstallStatus;
(function (ScreenAiInstallStatus) {
    ScreenAiInstallStatus[ScreenAiInstallStatus["NOT_DOWNLOADED"] = 0] = "NOT_DOWNLOADED";
    ScreenAiInstallStatus[ScreenAiInstallStatus["DOWNLOADING"] = 1] = "DOWNLOADING";
    ScreenAiInstallStatus[ScreenAiInstallStatus["DOWNLOAD_FAILED"] = 2] = "DOWNLOAD_FAILED";
    ScreenAiInstallStatus[ScreenAiInstallStatus["DOWNLOADED"] = 3] = "DOWNLOADED";
})(ScreenAiInstallStatus || (ScreenAiInstallStatus = {}));
const SettingsTextToSpeechSubpageElementBase = DeepLinkingMixin(RouteOriginMixin(PrefsMixin(WebUiListenerMixin(I18nMixin(PolymerElement)))));
export class SettingsTextToSpeechSubpageElement extends SettingsTextToSpeechSubpageElementBase {
    static get is() {
        return 'settings-text-to-speech-subpage';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * |hasKeyboard_| starts undefined so observer doesn't trigger until it
             * has been populated.
             */
            hasKeyboard_: Boolean,
            /**
             * |hasScreenReader| is being passed from os_a11y_page.html on page load.
             * Indicate whether a screen reader is enabled.
             */
            hasScreenReader: Boolean,
            /**
             * |pdfOcrProgress_| stores the downloading progress in percentage of
             * the ScreenAI library.
             */
            pdfOcrProgress_: Number,
            /**
             * |pdfOcrStatus_| stores the ScreenAI library install state.
             */
            pdfOcrStatus_: ScreenAiInstallStatus,
            /**
             * Whether to show the toggle button for PDF OCR.
             */
            showPdfOcrToggle_: {
                type: Boolean,
                computed: 'computeShowPdfOcrToggle_(hasScreenReader)',
            },
            /**
             * Used by DeepLinkingMixin to focus this page's deep links.
             */
            supportedSettingIds: {
                type: Object,
                value: () => new Set([
                    Setting.kChromeVox,
                    Setting.kSelectToSpeak,
                ]),
            },
        };
    }
    constructor() {
        super();
        /** RouteOriginMixin override */
        this.route = routes.A11Y_TEXT_TO_SPEECH;
        this.textToSpeechBrowserProxy_ =
            TextToSpeechSubpageBrowserProxyImpl.getInstance();
        this.deviceBrowserProxy_ = DevicePageBrowserProxyImpl.getInstance();
    }
    connectedCallback() {
        super.connectedCallback();
        this.addWebUiListener('has-hardware-keyboard', (hasKeyboard) => this.set('hasKeyboard_', hasKeyboard));
        this.deviceBrowserProxy_.initializeKeyboardWatcher();
        if (loadTimeData.getBoolean('pdfOcrEnabled')) {
            this.addWebUiListener('pdf-ocr-state-changed', (pdfOcrState) => this.onPdfOcrStateChanged_(pdfOcrState));
            this.addWebUiListener('pdf-ocr-downloading-progress-changed', (progress) => this.onPdfOcrDownloadingProgressChanged_(progress));
            this.textToSpeechBrowserProxy_.pdfOcrSectionReady();
        }
    }
    ready() {
        super.ready();
        this.addFocusConfig(routes.A11Y_SELECT_TO_SPEAK, '#select-to-speak-subpage-trigger');
        this.addFocusConfig(routes.MANAGE_TTS_SETTINGS, '#ttsSubpageButton');
    }
    getPdfOcrToggleSublabel_() {
        switch (this.pdfOcrStatus_) {
            case ScreenAiInstallStatus.DOWNLOADING:
                return this.pdfOcrProgress_ > 0 && this.pdfOcrProgress_ < 100 ?
                    this.i18n('pdfOcrDownloadProgressLabel', this.pdfOcrProgress_) :
                    this.i18n('pdfOcrDownloadingLabel');
            case ScreenAiInstallStatus.DOWNLOAD_FAILED:
                return this.i18n('pdfOcrDownloadErrorLabel');
            case ScreenAiInstallStatus.DOWNLOADED:
                return this.i18n('pdfOcrDownloadCompleteLabel');
            case ScreenAiInstallStatus.NOT_DOWNLOADED:
            // No subtitle update in this case
            default:
                // This is a generic subtitle describing the feature.
                return this.i18n('pdfOcrSubtitle');
        }
    }
    onPdfOcrStateChanged_(pdfOcrState) {
        this.pdfOcrStatus_ = pdfOcrState;
    }
    onPdfOcrDownloadingProgressChanged_(progress) {
        this.pdfOcrProgress_ = progress;
    }
    /**
     * Note: Overrides RouteOriginMixin implementation
     */
    currentRouteChanged(newRoute, prevRoute) {
        super.currentRouteChanged(newRoute, prevRoute);
        // Does not apply to this page.
        if (newRoute !== this.route) {
            return;
        }
        this.attemptDeepLink();
    }
    /**
     * Return whether to show a PDF OCR toggle button based on:
     *    1. A PDF OCR feature flag is enabled.
     *    2. Whether a screen reader (i.e. ChromeVox) is enabled.
     */
    computeShowPdfOcrToggle_() {
        return loadTimeData.getBoolean('pdfOcrEnabled') && this.hasScreenReader;
    }
    /**
     * Return ChromeVox description text based on whether ChromeVox is enabled.
     */
    getChromeVoxDescription_(enabled) {
        return this.i18n(enabled ? 'chromeVoxDescriptionOn' : 'chromeVoxDescriptionOff');
    }
    /**
     * Return Select-to-Speak description text based on:
     *    1. Whether Select-to-Speak is enabled.
     *    2. If it is enabled, whether a physical keyboard is present.
     */
    getSelectToSpeakDescription_(enabled, hasKeyboard) {
        if (!enabled) {
            return this.i18n('selectToSpeakDisabledDescription');
        }
        if (hasKeyboard) {
            return this.i18n('selectToSpeakDescription');
        }
        return this.i18n('selectToSpeakDescriptionWithoutKeyboard');
    }
    onManageTtsSettingsClick_() {
        Router.getInstance().navigateTo(routes.MANAGE_TTS_SETTINGS);
    }
    onChromeVoxSettingsClick_() {
        Router.getInstance().navigateTo(routes.A11Y_CHROMEVOX);
    }
    onChromeVoxTutorialClick_() {
        this.textToSpeechBrowserProxy_.showChromeVoxTutorial();
    }
    onSelectToSpeakSettingsClick_() {
        Router.getInstance().navigateTo(routes.A11Y_SELECT_TO_SPEAK);
    }
    onPdfOcrToggleChange_(event) {
        const pdfOcrToggle = cast(event.target, SettingsToggleButtonElement);
        // Need to divide Object.keys().length by 2 to get the enum size due to
        // enum reverse mapping in typescript.
        const enumSize = Object.keys(PdfOcrUserSelection).length / 2;
        const enumValue = pdfOcrToggle.checked ?
            PdfOcrUserSelection.TURN_ON_ALWAYS_FROM_SETTINGS :
            PdfOcrUserSelection.TURN_OFF_FROM_SETTINGS;
        chrome.metricsPrivate.recordEnumerationValue('Accessibility.PdfOcr.UserSelection', enumValue, enumSize);
    }
}
customElements.define(SettingsTextToSpeechSubpageElement.is, SettingsTextToSpeechSubpageElement);
