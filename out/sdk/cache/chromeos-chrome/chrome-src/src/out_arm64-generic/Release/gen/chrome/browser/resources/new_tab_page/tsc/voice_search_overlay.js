// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/polymer/v3_0/iron-pages/iron-pages.js';
import 'chrome://resources/polymer/v3_0/iron-selector/iron-selector.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { loadTimeData } from './i18n_setup.js';
import { NewTabPageProxy } from './new_tab_page_proxy.js';
import { getTemplate } from './voice_search_overlay.html.js';
import { WindowProxy } from './window_proxy.js';
/**
 * Threshold for considering an interim speech transcript result as "confident
 * enough". The more confident the API is about a transcript, the higher the
 * confidence (number between 0 and 1).
 */
const RECOGNITION_CONFIDENCE_THRESHOLD = 0.5;
/**
 * Maximum number of characters recognized before force-submitting a query.
 * Includes characters of non-confident recognition transcripts.
 */
const QUERY_LENGTH_LIMIT = 120;
/**
 * Time in milliseconds to wait before closing the UI if no interaction has
 * occurred.
 */
const IDLE_TIMEOUT_MS = 8000;
/**
 * Time in milliseconds to wait before closing the UI after an error has
 * occurred. This is a short timeout used when no click-target is present.
 */
const ERROR_TIMEOUT_SHORT_MS = 9000;
/**
 * Time in milliseconds to wait before closing the UI after an error has
 * occurred. This is a longer timeout used when there is a click-target is
 * present.
 */
const ERROR_TIMEOUT_LONG_MS = 24000;
// The minimum transition time for the volume rings.
const VOLUME_ANIMATION_DURATION_MIN_MS = 170;
// The range of the transition time for the volume rings.
const VOLUME_ANIMATION_DURATION_RANGE_MS = 10;
// The set of controller states.
var State;
(function (State) {
    // Initial state before voice recognition has been set up.
    State[State["UNINITIALIZED"] = -1] = "UNINITIALIZED";
    // Indicates that speech recognition has started, but no audio has yet
    // been captured.
    State[State["STARTED"] = 0] = "STARTED";
    // Indicates that audio is being captured by the Web Speech API, but no
    // speech has yet been recognized. UI indicates that audio is being captured.
    State[State["AUDIO_RECEIVED"] = 1] = "AUDIO_RECEIVED";
    // Indicates that speech has been recognized by the Web Speech API, but no
    // resulting transcripts have yet been received back. UI indicates that audio
    // is being captured and is pulsating audio button.
    State[State["SPEECH_RECEIVED"] = 2] = "SPEECH_RECEIVED";
    // Indicates speech has been successfully recognized and text transcripts have
    // been reported back. UI indicates that audio is being captured and is
    // displaying transcripts received so far.
    State[State["RESULT_RECEIVED"] = 3] = "RESULT_RECEIVED";
    // Indicates that speech recognition has failed due to an error (or a no match
    // error) being received from the Web Speech API. A timeout may have occurred
    // as well. UI displays the error message.
    State[State["ERROR_RECEIVED"] = 4] = "ERROR_RECEIVED";
    // Indicates speech recognition has received a final search query but the UI
    // has not yet redirected. The UI is displaying the final query.
    State[State["RESULT_FINAL"] = 5] = "RESULT_FINAL";
})(State || (State = {}));
/**
 * Action the user can perform while using voice search. This enum must match
 * the numbering for NewTabPageVoiceAction in enums.xml. These values are
 * persisted to logs. Entries should not be renumbered, removed or reused.
 */
export var Action;
(function (Action) {
    Action[Action["ACTIVATE_SEARCH_BOX"] = 0] = "ACTIVATE_SEARCH_BOX";
    Action[Action["ACTIVATE_KEYBOARD"] = 1] = "ACTIVATE_KEYBOARD";
    Action[Action["CLOSE_OVERLAY"] = 2] = "CLOSE_OVERLAY";
    Action[Action["QUERY_SUBMITTED"] = 3] = "QUERY_SUBMITTED";
    Action[Action["SUPPORT_LINK_CLICKED"] = 4] = "SUPPORT_LINK_CLICKED";
    Action[Action["TRY_AGAIN_LINK"] = 5] = "TRY_AGAIN_LINK";
    Action[Action["TRY_AGAIN_MIC_BUTTON"] = 6] = "TRY_AGAIN_MIC_BUTTON";
})(Action || (Action = {}));
/**
 * Errors than can occur while using voice search. This enum must match the
 * numbering for NewTabPageVoiceError in enums.xml. These values are persisted
 * to logs. Entries should not be renumbered, removed or reused.
 */
export var Error;
(function (Error) {
    Error[Error["ABORTED"] = 0] = "ABORTED";
    Error[Error["AUDIO_CAPTURE"] = 1] = "AUDIO_CAPTURE";
    Error[Error["BAD_GRAMMAR"] = 2] = "BAD_GRAMMAR";
    Error[Error["LANGUAGE_NOT_SUPPORTED"] = 3] = "LANGUAGE_NOT_SUPPORTED";
    Error[Error["NETWORK"] = 4] = "NETWORK";
    Error[Error["NO_MATCH"] = 5] = "NO_MATCH";
    Error[Error["NO_SPEECH"] = 6] = "NO_SPEECH";
    Error[Error["NOT_ALLOWED"] = 7] = "NOT_ALLOWED";
    Error[Error["OTHER"] = 8] = "OTHER";
    Error[Error["SERVICE_NOT_ALLOWED"] = 9] = "SERVICE_NOT_ALLOWED";
})(Error || (Error = {}));
export function recordVoiceAction(action) {
    chrome.metricsPrivate.recordEnumerationValue('NewTabPage.VoiceActions', action, Object.keys(Action).length);
}
/**
 * Returns the error type based on the error string received from the webkit
 * speech recognition API.
 * @param webkitError The error string received from the webkit speech
 *     recognition API.
 * @return The appropriate error state from the Error enum.
 */
function toError(webkitError) {
    switch (webkitError) {
        case 'aborted':
            return Error.ABORTED;
        case 'audio-capture':
            return Error.AUDIO_CAPTURE;
        case 'language-not-supported':
            return Error.LANGUAGE_NOT_SUPPORTED;
        case 'network':
            return Error.NETWORK;
        case 'no-speech':
            return Error.NO_SPEECH;
        case 'not-allowed':
            return Error.NOT_ALLOWED;
        case 'service-not-allowed':
            return Error.SERVICE_NOT_ALLOWED;
        case 'bad-grammar':
            return Error.BAD_GRAMMAR;
        default:
            return Error.OTHER;
    }
}
/**
 * Returns a timeout based on the error received from the webkit speech
 * recognition API.
 * @param error An error from the Error enum.
 * @return The appropriate timeout in MS for displaying the error.
 */
function getErrorTimeout(error) {
    switch (error) {
        case Error.AUDIO_CAPTURE:
        case Error.NO_SPEECH:
        case Error.NOT_ALLOWED:
        case Error.NO_MATCH:
            return ERROR_TIMEOUT_LONG_MS;
        default:
            return ERROR_TIMEOUT_SHORT_MS;
    }
}
// Overlay that lats the user perform voice searches.
export class VoiceSearchOverlayElement extends PolymerElement {
    static get is() {
        return 'ntp-voice-search-overlay';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            interimResult_: String,
            finalResult_: String,
            state_: {
                type: Number,
                value: State.UNINITIALIZED,
            },
            error_: Number,
            helpUrl_: {
                type: String,
                readOnly: true,
                value: `https://support.google.com/chrome/?` +
                    `p=ui_voice_search&hl=${window.navigator.language}`,
            },
            micVolumeLevel_: {
                type: Number,
                value: 0,
            },
            micVolumeDuration_: {
                type: Number,
                value: VOLUME_ANIMATION_DURATION_MIN_MS,
            },
        };
    }
    constructor() {
        super();
        this.timerId_ = null;
        this.pageHandler_ = NewTabPageProxy.getInstance().handler;
        this.voiceRecognition_ = new window.webkitSpeechRecognition();
        this.voiceRecognition_.continuous = false;
        this.voiceRecognition_.interimResults = true;
        this.voiceRecognition_.lang = window.navigator.language;
        this.voiceRecognition_.onaudiostart = this.onAudioStart_.bind(this);
        this.voiceRecognition_.onspeechstart = this.onSpeechStart_.bind(this);
        this.voiceRecognition_.onresult = this.onResult_.bind(this);
        this.voiceRecognition_.onend = this.onEnd_.bind(this);
        this.voiceRecognition_.onerror = (e) => {
            this.onError_(toError(e.error));
        };
        this.voiceRecognition_.onnomatch = () => {
            this.onError_(Error.NO_MATCH);
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.$.dialog.showModal();
        this.start();
    }
    start() {
        this.voiceRecognition_.start();
        this.state_ = State.STARTED;
        this.resetIdleTimer_();
    }
    onOverlayClose_() {
        this.voiceRecognition_.abort();
        this.dispatchEvent(new Event('close'));
    }
    onOverlayClick_() {
        this.$.dialog.close();
        recordVoiceAction(Action.CLOSE_OVERLAY);
    }
    /**
     * Handles <ENTER> or <SPACE> to trigger a query if we have recognized speech.
     */
    onOverlayKeydown_(e) {
        if (['Enter', ' '].includes(e.key) && this.finalResult_) {
            this.onFinalResult_();
        }
        else if (e.key === 'Escape') {
            this.onOverlayClick_();
        }
    }
    /**
     * Handles <ENTER> or <SPACE> to simulate click.
     */
    onLinkKeydown_(e) {
        if (!['Enter', ' '].includes(e.key)) {
            return;
        }
        // Otherwise, we may trigger overlay-wide keyboard shortcuts.
        e.stopPropagation();
        // Otherwise, we open the link twice.
        e.preventDefault();
        e.target.click();
    }
    onLearnMoreClick_() {
        recordVoiceAction(Action.SUPPORT_LINK_CLICKED);
    }
    onTryAgainClick_(e) {
        // Otherwise, we close the overlay.
        e.stopPropagation();
        this.start();
        recordVoiceAction(Action.TRY_AGAIN_LINK);
    }
    resetIdleTimer_() {
        WindowProxy.getInstance().clearTimeout(this.timerId_);
        this.timerId_ = WindowProxy.getInstance().setTimeout(this.onIdleTimeout_.bind(this), IDLE_TIMEOUT_MS);
    }
    onIdleTimeout_() {
        if (this.state_ === State.RESULT_FINAL) {
            // Waiting for query redirect.
            return;
        }
        if (this.finalResult_) {
            // Query what we recognized so far.
            this.onFinalResult_();
            return;
        }
        this.voiceRecognition_.abort();
        this.onError_(Error.NO_MATCH);
    }
    resetErrorTimer_(duration) {
        WindowProxy.getInstance().clearTimeout(this.timerId_);
        this.timerId_ = WindowProxy.getInstance().setTimeout(() => {
            this.$.dialog.close();
        }, duration);
    }
    onAudioStart_() {
        this.resetIdleTimer_();
        this.state_ = State.AUDIO_RECEIVED;
    }
    onSpeechStart_() {
        this.resetIdleTimer_();
        this.state_ = State.SPEECH_RECEIVED;
        this.animateVolume_();
    }
    onResult_(e) {
        this.resetIdleTimer_();
        switch (this.state_) {
            case State.STARTED:
                // Network bugginess (the onspeechstart packet was lost).
                this.onAudioStart_();
                this.onSpeechStart_();
                break;
            case State.AUDIO_RECEIVED:
                // Network bugginess (the onaudiostart packet was lost).
                this.onSpeechStart_();
                break;
            case State.SPEECH_RECEIVED:
            case State.RESULT_RECEIVED:
                // Normal, expected states for processing results.
                break;
            default:
                // Not expecting results in any other states.
                return;
        }
        const results = e.results;
        if (results.length === 0) {
            return;
        }
        this.state_ = State.RESULT_RECEIVED;
        this.interimResult_ = '';
        this.finalResult_ = '';
        const finalResult = results[e.resultIndex];
        // Process final results.
        if (finalResult.isFinal) {
            this.finalResult_ = finalResult[0].transcript;
            this.onFinalResult_();
            return;
        }
        // Process interim results.
        for (let j = 0; j < results.length; j++) {
            const result = results[j][0];
            if (result.confidence > RECOGNITION_CONFIDENCE_THRESHOLD) {
                this.finalResult_ += result.transcript;
            }
            else {
                this.interimResult_ += result.transcript;
            }
        }
        // Force-stop long queries.
        if (this.interimResult_.length > QUERY_LENGTH_LIMIT) {
            this.onFinalResult_();
        }
    }
    onFinalResult_() {
        if (!this.finalResult_) {
            this.onError_(Error.NO_MATCH);
            return;
        }
        this.state_ = State.RESULT_FINAL;
        const searchParams = new URLSearchParams();
        searchParams.append('q', this.finalResult_);
        // Add a parameter to indicate that this request is a voice search.
        searchParams.append('gs_ivs', '1');
        // Build the query URL.
        const queryUrl = new URL('/search', loadTimeData.getString('googleBaseUrl'));
        queryUrl.search = searchParams.toString();
        recordVoiceAction(Action.QUERY_SUBMITTED);
        WindowProxy.getInstance().navigate(queryUrl.href);
    }
    onEnd_() {
        switch (this.state_) {
            case State.STARTED:
                this.onError_(Error.AUDIO_CAPTURE);
                return;
            case State.AUDIO_RECEIVED:
                this.onError_(Error.NO_SPEECH);
                return;
            case State.SPEECH_RECEIVED:
            case State.RESULT_RECEIVED:
                this.onError_(Error.NO_MATCH);
                return;
            case State.ERROR_RECEIVED:
            case State.RESULT_FINAL:
                return;
            default:
                this.onError_(Error.OTHER);
                return;
        }
    }
    onError_(error) {
        chrome.metricsPrivate.recordEnumerationValue('NewTabPage.VoiceErrors', error, Object.keys(Error).length);
        if (error === Error.ABORTED) {
            // We are in the process of closing voice search.
            return;
        }
        this.error_ = error;
        this.state_ = State.ERROR_RECEIVED;
        this.resetErrorTimer_(getErrorTimeout(error));
    }
    animateVolume_() {
        this.micVolumeLevel_ = 0;
        this.micVolumeDuration_ = VOLUME_ANIMATION_DURATION_MIN_MS;
        if (this.state_ !== State.SPEECH_RECEIVED &&
            this.state_ !== State.RESULT_RECEIVED) {
            return;
        }
        this.micVolumeLevel_ = WindowProxy.getInstance().random();
        this.micVolumeDuration_ = Math.round(VOLUME_ANIMATION_DURATION_MIN_MS +
            WindowProxy.getInstance().random() *
                VOLUME_ANIMATION_DURATION_RANGE_MS);
        WindowProxy.getInstance().setTimeout(this.animateVolume_.bind(this), this.micVolumeDuration_);
    }
    getText_() {
        switch (this.state_) {
            case State.STARTED:
                return 'waiting';
            case State.AUDIO_RECEIVED:
            case State.SPEECH_RECEIVED:
                return 'speak';
            case State.RESULT_RECEIVED:
            case State.RESULT_FINAL:
                return 'result';
            case State.ERROR_RECEIVED:
                return 'error';
            default:
                return 'none';
        }
    }
    getErrorText_() {
        switch (this.error_) {
            case Error.NO_SPEECH:
                return 'no-speech';
            case Error.AUDIO_CAPTURE:
                return 'audio-capture';
            case Error.NETWORK:
                return 'network';
            case Error.NOT_ALLOWED:
            case Error.SERVICE_NOT_ALLOWED:
                return 'not-allowed';
            case Error.LANGUAGE_NOT_SUPPORTED:
                return 'language-not-supported';
            case Error.NO_MATCH:
                return 'no-match';
            case Error.ABORTED:
            case Error.OTHER:
            default:
                return 'other';
        }
    }
    getErrorLink_() {
        switch (this.error_) {
            case Error.NO_SPEECH:
            case Error.AUDIO_CAPTURE:
                return 'learn-more';
            case Error.NOT_ALLOWED:
            case Error.SERVICE_NOT_ALLOWED:
                return 'details';
            case Error.NO_MATCH:
                return 'try-again';
            default:
                return 'none';
        }
    }
    getMicClass_() {
        switch (this.state_) {
            case State.AUDIO_RECEIVED:
                return 'listening';
            case State.SPEECH_RECEIVED:
            case State.RESULT_RECEIVED:
                return 'receiving';
            default:
                return '';
        }
    }
}
customElements.define(VoiceSearchOverlayElement.is, VoiceSearchOverlayElement);
