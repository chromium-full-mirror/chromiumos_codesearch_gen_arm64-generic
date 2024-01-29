// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PrefsManager } from './prefs_manager.js';
// Utilities for UMA metrics.
export class MetricsUtils {
    /**
     * Records a cancel event if speech was in progress.
     */
    static recordCancelIfSpeaking() {
        // TODO(b/1157214): Use select-to-speak's internal state instead of TTS
        // state.
        chrome.tts.isSpeaking(speaking => {
            if (speaking) {
                MetricsUtils.recordCancelEvent_();
            }
        });
    }
    /**
     * Records an event that Select-to-Speak has begun speaking.
     * @param method The CrosSelectToSpeakStartSpeechMethod enum
     *    that reflects how this event was triggered by the user.
     * @param prefsManager A PrefsManager with the users's current
     *    preferences.
     */
    static recordStartEvent(method, prefsManager) {
        chrome.metricsPrivate.recordUserAction(MetricsUtils.START_SPEECH_METRIC);
        chrome.metricsPrivate.recordEnumerationValue(MetricsUtils.START_SPEECH_METHOD_METRIC.METRIC_NAME, method, MetricsUtils.START_SPEECH_METHOD_METRIC.EVENT_COUNT);
        chrome.metricsPrivate.recordBoolean(MetricsUtils.BACKGROUND_SHADING_METRIC, prefsManager.backgroundShadingEnabled());
        chrome.metricsPrivate.recordBoolean(MetricsUtils.NAVIGATION_CONTROLS_METRIC, prefsManager.navigationControlsEnabled());
        chrome.metricsPrivate.recordBoolean(MetricsUtils.ENHANCED_NETWORK_VOICES_METRIC, prefsManager.enhancedNetworkVoicesEnabled());
    }
    /**
     * Records an event that Select-to-Speak speech has been canceled.
     */
    static recordCancelEvent_() {
        chrome.metricsPrivate.recordUserAction(MetricsUtils.CANCEL_SPEECH_METRIC);
    }
    /**
     * Records an event that Select-to-Speak speech has been paused.
     */
    static recordPauseEvent() {
        chrome.metricsPrivate.recordUserAction(MetricsUtils.PAUSE_SPEECH_METRIC);
    }
    /**
     * Records an event that Select-to-Speak speech has been resumed from pause.
     */
    static recordResumeEvent() {
        chrome.metricsPrivate.recordUserAction(MetricsUtils.RESUME_SPEECH_METRIC);
    }
    /**
     * Records a user-requested state change event from a given state.
     */
    static recordSelectToSpeakStateChangeEvent(changeType) {
        chrome.metricsPrivate.recordEnumerationValue(MetricsUtils.STATE_CHANGE_METRIC.METRIC_NAME, changeType, MetricsUtils.STATE_CHANGE_METRIC.EVENT_COUNT);
    }
    /**
     * Converts the speech multiplier into an enum based on
     * tools/metrics/histograms/enums.xml.
     * The value returned by this function is persisted to logs. Log entries
     * should not be renumbered and numeric values should never be reused, so this
     * function should not be changed.
     * @param speechRate The current speech rate.
     * @return The current speech rate as an int for metrics.
     */
    static speechMultiplierToSparseHistogramInt_(speechRate) {
        return Math.floor(speechRate * 100);
    }
    /**
     * Records the speed override chosen by the user.
     */
    static recordSpeechRateOverrideMultiplier(rate) {
        chrome.metricsPrivate.recordSparseValue(MetricsUtils.OVERRIDE_SPEECH_RATE_MULTIPLIER_METRIC, MetricsUtils.speechMultiplierToSparseHistogramInt_(rate));
    }
    /**
     * Records the TTS engine used for a single speech utterance.
     * @param voiceName voice in TTS
     * @param prefsManager A PrefsManager with the users's current preferences.
     */
    static recordTtsEngineUsed(voiceName, prefsManager) {
        let ttsEngine;
        if (voiceName === '') {
            // No voice name passed to TTS, default voice is used
            ttsEngine = MetricsUtils.TtsEngineUsed.SYSTEM_DEFAULT;
        }
        else {
            const extensionId = prefsManager.ttsExtensionForVoice(voiceName);
            ttsEngine = MetricsUtils.ttsEngineForExtensionId_(extensionId);
        }
        chrome.metricsPrivate.recordEnumerationValue(MetricsUtils.TTS_ENGINE_USED_METRIC.METRIC_NAME, ttsEngine, MetricsUtils.TTS_ENGINE_USED_METRIC.EVENT_COUNT);
    }
    /**
     * Converts extension id of TTS voice into metric for logging.
     * @param extensionId Extension ID of TTS engine
     * @returns Enum used in TtsEngineUsed histogram.
     */
    static ttsEngineForExtensionId_(extensionId) {
        switch (extensionId) {
            case PrefsManager.ENHANCED_TTS_EXTENSION_ID:
                return MetricsUtils.TtsEngineUsed.GOOGLE_NETWORK;
            case PrefsManager.ESPEAK_EXTENSION_ID:
                return MetricsUtils.TtsEngineUsed.ESPEAK;
            case PrefsManager.GOOGLE_TTS_EXTENSION_ID:
                return MetricsUtils.TtsEngineUsed.GOOGLE_LOCAL;
            default:
                return MetricsUtils.TtsEngineUsed.UNKNOWN;
        }
    }
}
(function (MetricsUtils) {
    /**
     * CrosSelectToSpeakStartSpeechMethod enums.
     * These values are persisted to logs and should not be renumbered or re-used.
     * See tools/metrics/histograms/enums.xml.
     */
    let StartSpeechMethod;
    (function (StartSpeechMethod) {
        StartSpeechMethod[StartSpeechMethod["MOUSE"] = 0] = "MOUSE";
        StartSpeechMethod[StartSpeechMethod["KEYSTROKE"] = 1] = "KEYSTROKE";
        StartSpeechMethod[StartSpeechMethod["CONTEXT_MENU"] = 2] = "CONTEXT_MENU";
    })(StartSpeechMethod = MetricsUtils.StartSpeechMethod || (MetricsUtils.StartSpeechMethod = {}));
    /**
     * Constants for the start speech method metric,
     * CrosSelectToSpeakStartSpeechMethod.
     */
    MetricsUtils.START_SPEECH_METHOD_METRIC = {
        EVENT_COUNT: Object.keys(StartSpeechMethod).length,
        METRIC_NAME: 'Accessibility.CrosSelectToSpeak.StartSpeechMethod',
    };
    /**
     * CrosSelectToSpeakStateChangeEvent enums.
     * These values are persisted to logs and should not be renumbered or re-used.
     * See tools/metrics/histograms/enums.xml.
     */
    let StateChangeEvent;
    (function (StateChangeEvent) {
        StateChangeEvent[StateChangeEvent["START_SELECTION"] = 0] = "START_SELECTION";
        StateChangeEvent[StateChangeEvent["CANCEL_SPEECH"] = 1] = "CANCEL_SPEECH";
        StateChangeEvent[StateChangeEvent["CANCEL_SELECTION"] = 2] = "CANCEL_SELECTION";
    })(StateChangeEvent = MetricsUtils.StateChangeEvent || (MetricsUtils.StateChangeEvent = {}));
    /**
     * Constants for the state change metric, CrosSelectToSpeakStateChangeEvent.
     */
    MetricsUtils.STATE_CHANGE_METRIC = {
        EVENT_COUNT: Object.keys(StateChangeEvent).length,
        METRIC_NAME: 'Accessibility.CrosSelectToSpeak.StateChangeEvent',
    };
    /**
     * CrosSelectToSpeakTtsEngineUsed enums.
     * These values are persisted to logs and should not be renumbered or re-used.
     * See tools/metrics/histograms/enums.xml.
     */
    let TtsEngineUsed;
    (function (TtsEngineUsed) {
        TtsEngineUsed[TtsEngineUsed["UNKNOWN"] = 0] = "UNKNOWN";
        TtsEngineUsed[TtsEngineUsed["SYSTEM_DEFAULT"] = 1] = "SYSTEM_DEFAULT";
        TtsEngineUsed[TtsEngineUsed["ESPEAK"] = 2] = "ESPEAK";
        TtsEngineUsed[TtsEngineUsed["GOOGLE_LOCAL"] = 3] = "GOOGLE_LOCAL";
        TtsEngineUsed[TtsEngineUsed["GOOGLE_NETWORK"] = 4] = "GOOGLE_NETWORK";
    })(TtsEngineUsed = MetricsUtils.TtsEngineUsed || (MetricsUtils.TtsEngineUsed = {}));
    /**
     * Constants for the TTS engine metric, CrosSelectToSpeak.TtsEngineUsed.
     */
    MetricsUtils.TTS_ENGINE_USED_METRIC = {
        EVENT_COUNT: Object.keys(TtsEngineUsed).length,
        METRIC_NAME: 'Accessibility.CrosSelectToSpeak.TtsEngineUsed',
    };
    /**
     * The start speech metric name.
     */
    MetricsUtils.START_SPEECH_METRIC = 'Accessibility.CrosSelectToSpeak.StartSpeech';
    /**
     * The cancel speech metric name.
     */
    MetricsUtils.CANCEL_SPEECH_METRIC = 'Accessibility.CrosSelectToSpeak.CancelSpeech';
    /**
     * The pause speech metric name.
     */
    MetricsUtils.PAUSE_SPEECH_METRIC = 'Accessibility.CrosSelectToSpeak.PauseSpeech';
    /**
     * The resume speech after pausing metric name.
     */
    MetricsUtils.RESUME_SPEECH_METRIC = 'Accessibility.CrosSelectToSpeak.ResumeSpeech';
    /**
     * The background shading metric name.
     */
    MetricsUtils.BACKGROUND_SHADING_METRIC = 'Accessibility.CrosSelectToSpeak.BackgroundShading';
    /**
     * The navigation controls metric name.
     */
    MetricsUtils.NAVIGATION_CONTROLS_METRIC = 'Accessibility.CrosSelectToSpeak.NavigationControls';
    /**
     * The metric name for enhanced network TTS voices.
     */
    MetricsUtils.ENHANCED_NETWORK_VOICES_METRIC = 'Accessibility.CrosSelectToSpeak.EnhancedNetworkVoices';
    /**
     * The speech rate override histogram metric name.
     */
    MetricsUtils.OVERRIDE_SPEECH_RATE_MULTIPLIER_METRIC = 'Accessibility.CrosSelectToSpeak.OverrideSpeechRateMultiplier';
})(MetricsUtils || (MetricsUtils = {}));
