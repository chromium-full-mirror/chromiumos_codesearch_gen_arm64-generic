// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'settings-tts-voice-subpage' is the subpage containing
 * text-to-speech voice settings.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/cr_elements/md_select.css.js';
import '../controls/settings_slider.js';
import '../settings_shared.css.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { DeepLinkingMixin } from '../common/deep_linking_mixin.js';
import { RouteObserverMixin } from '../common/route_observer_mixin.js';
import { Setting } from '../mojom-webui/setting.mojom-webui.js';
import { LanguagesBrowserProxyImpl } from '../os_languages_page/languages_browser_proxy.js';
import { routes } from '../router.js';
import { getTemplate } from './tts_voice_subpage.html.js';
import { TtsVoiceSubpageBrowserProxyImpl } from './tts_voice_subpage_browser_proxy.js';
const SettingsTtsVoiceSubpageElementBase = DeepLinkingMixin(RouteObserverMixin(WebUiListenerMixin(I18nMixin(PolymerElement))));
export class SettingsTtsVoiceSubpageElement extends SettingsTtsVoiceSubpageElementBase {
    static get is() {
        return 'settings-tts-voice-subpage';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * Preferences state.
             */
            prefs: {
                type: Object,
                notify: true,
            },
            /**
             * Available languages.
             */
            languagesToVoices: {
                type: Array,
                notify: true,
            },
            /**
             * All voices.
             */
            allVoices: {
                type: Array,
                value: [],
                notify: true,
            },
            /**
             * Default preview voice.
             */
            defaultPreviewVoice: {
                type: String,
                notify: true,
            },
            /**
             * Whether preview is currently speaking.
             */
            isPreviewing_: {
                type: Boolean,
                value: false,
            },
            previewText_: {
                type: String,
                value: '',
            },
            /** Whether any voices are loaded. */
            hasVoices: {
                type: Boolean,
                computed: 'hasVoices_(allVoices)',
            },
            /** Whether the additional languages section has been opened. */
            languagesOpened: {
                type: Boolean,
                value: false,
            },
            /**
             * Used by DeepLinkingMixin to focus this page's deep links.
             */
            supportedSettingIds: {
                type: Object,
                value: () => new Set([
                    Setting.kTextToSpeechRate,
                    Setting.kTextToSpeechPitch,
                    Setting.kTextToSpeechVolume,
                    Setting.kTextToSpeechVoice,
                    Setting.kTextToSpeechEngines,
                ]),
            },
        };
    }
    constructor() {
        super();
        this.ttsBrowserProxy_ = TtsVoiceSubpageBrowserProxyImpl.getInstance();
        this.langBrowserProxy_ = LanguagesBrowserProxyImpl.getInstance();
        this.extensions = [];
    }
    ready() {
        super.ready();
        // Populate the preview text with textToSpeechPreviewInput. Users can change
        // this to their own value later.
        this.previewText_ = this.i18n('textToSpeechPreviewInput');
        this.addWebUiListener('all-voice-data-updated', (voices) => this.populateVoiceList_(voices));
        this.ttsBrowserProxy_.getAllTtsVoiceData();
        this.addWebUiListener('tts-extensions-updated', (extensions) => this.populateExtensionList_(extensions));
        this.addWebUiListener('tts-preview-state-changed', (isSpeaking) => this.onTtsPreviewStateChanged_(isSpeaking));
        this.ttsBrowserProxy_.getTtsExtensions();
        this.ttsBrowserProxy_.refreshTtsVoices();
    }
    currentRouteChanged(route) {
        // Does not apply to this page.
        if (route !== routes.MANAGE_TTS_SETTINGS) {
            return;
        }
        this.attemptDeepLink();
    }
    /*
     * Ticks for the Speech Rate slider. Valid rates are between 0.1 and 5.
     */
    speechRateTicks_() {
        return this.buildLinearTicks_(0.1, 5);
    }
    /**
     * Ticks for the Speech Pitch slider. Valid pitches are between 0.2 and 2.
     */
    speechPitchTicks_() {
        return this.buildLinearTicks_(0.2, 2);
    }
    /**
     * Ticks for the Speech Volume slider. Valid volumes are between 0.2 and
     * 1 (100%), but volumes lower than .2 are excluded as being too quiet.
     */
    speechVolumeTicks_() {
        return this.buildLinearTicks_(0.2, 1);
    }
    /**
     * A helper to build a set of ticks between |min| and |max| (inclusive) spaced
     * evenly by 0.1.
     */
    buildLinearTicks_(min, max) {
        const ticks = [];
        // Avoid floating point addition errors by scaling everything by 10.
        min *= 10;
        max *= 10;
        const step = 1;
        for (let tickValue = min; tickValue <= max; tickValue += step) {
            ticks.push(this.initTick_(tickValue / 10));
        }
        return ticks;
    }
    /**
     * Initializes i18n labels for ticks arrays.
     */
    initTick_(tick) {
        const value = Math.round(100 * tick);
        const strValue = value.toFixed(0);
        const label = strValue === '100' ?
            this.i18n('defaultPercentage', strValue) :
            this.i18n('percentage', strValue);
        return { label: label, value: tick, ariaValue: value };
    }
    /**
     * Returns true if any voices are loaded.
     */
    hasVoices_(voices) {
        return voices.length > 0;
    }
    /**
     * Returns true if voices are loaded and preview is not currently speaking and
     * there is text to preview.
     */
    enablePreviewButton_(voices, isPreviewing, previewText) {
        const nonWhitespaceRe = /\S+/;
        const hasPreviewText = nonWhitespaceRe.exec(previewText) != null;
        return this.hasVoices_(voices) && !isPreviewing && hasPreviewText;
    }
    /**
     * Populates the list of languages and voices for the UI to use in display.
     */
    populateVoiceList_(voices) {
        // Build a map of language code to human-readable language and voice.
        const result = {};
        const languageCodeMap = {};
        const preferredLangs = this.get('prefs.intl.accept_languages.value').split(',');
        voices.forEach(voice => {
            if (!result[voice.languageCode]) {
                result[voice.languageCode] = {
                    language: voice.displayLanguage,
                    code: voice.languageCode,
                    preferred: false,
                    voices: [],
                };
            }
            // Each voice gets a unique ID from its name and extension.
            voice.id =
                JSON.stringify({ name: voice.name, extension: voice.extensionId });
            // TODO(katie): Make voices a map rather than an array to enforce
            // uniqueness, then convert back to an array for polymer repeat.
            result[voice.languageCode].voices.push(voice);
            // A language is "preferred" if it has a voice that uses the default
            // locale of the device.
            result[voice.languageCode].preferred =
                result[voice.languageCode].preferred ||
                    preferredLangs.indexOf(voice.fullLanguageCode) !== -1;
            languageCodeMap[voice.fullLanguageCode] = voice.languageCode;
        });
        this.updateLangToVoicePrefs_(result);
        this.set('languagesToVoices', Object.values(result));
        this.set('allVoices', voices);
        this.setDefaultPreviewVoiceForLocale_(voices, languageCodeMap);
    }
    /**
     * Returns true if the language is a primary language and should be shown by
     * default, false if it should be hidden by default.
     */
    isPrimaryLanguage_(language) {
        return language.preferred;
    }
    /**
     * Returns true if the language is a secondary language and should be hidden
     * by default, true if it should be shown by default.
     */
    isSecondaryLanguage_(language) {
        return !language.preferred;
    }
    /**
     * Sets the list of Text-to-Speech extensions for the UI.
     */
    populateExtensionList_(extensions) {
        this.extensions = extensions;
    }
    /**
     * Called when the TTS voice preview state changes between speaking and not
     * speaking.
     */
    onTtsPreviewStateChanged_(isSpeaking) {
        this.isPreviewing_ = isSpeaking;
    }
    /**
     * A function used for sorting languages alphabetically.
     */
    alphabeticalSort_(first, second) {
        return first.language.localeCompare(second.language);
    }
    /**
     * Tests whether a language has just once voice.
     */
    hasOneLanguage_(lang) {
        return lang.voices.length === 1;
    }
    /**
     * Returns a list of objects that can be used as drop-down menu options for a
     * language. This is a list of voices in that language.
     */
    menuOptionsForLang_(lang) {
        return lang.voices.map(voice => {
            return { value: voice.id, name: voice.name };
        });
    }
    /**
     * Updates the preferences given the current list of voices.
     */
    updateLangToVoicePrefs_(langToVoices) {
        if (Object.keys(langToVoices).length === 0) {
            return;
        }
        const allCodes = new Set(Object.keys(this.get('prefs.settings.tts.lang_to_voice_name.value')));
        for (const code in langToVoices) {
            // Remove from allCodes, to track what we've found a default for.
            allCodes.delete(code);
            const voices = langToVoices[code].voices;
            const defaultVoiceForLang = this.get('prefs.settings.tts.lang_to_voice_name.value')[code];
            if (!defaultVoiceForLang || defaultVoiceForLang === '') {
                // Initialize prefs that have no value
                this.set('prefs.settings.tts.lang_to_voice_name.value.' + code, this.getBestVoiceForLocale_(voices));
                continue;
            }
            // See if the set voice ID is in the voices list, in which case we are
            // done checking this language.
            if (voices.some(voice => voice.id === defaultVoiceForLang)) {
                continue;
            }
            // Change prefs that point to voices that no longer exist.
            this.set('prefs.settings.tts.lang_to_voice_name.value.' + code, this.getBestVoiceForLocale_(voices));
        }
        // If there are any items left in allCodes, they are for languages that are
        // no longer covered by the UI. We could now delete them from the
        // lang_to_voice_name pref.
        for (const code of allCodes) {
            this.set('prefs.settings.tts.lang_to_voice_name.value.' + code, '');
        }
    }
    /**
     * Sets the voice to show in the preview drop-down as default, based on the
     * current locale and voice preferences.
     * @param languageCodeMap Mapping from language code to simple language
     *    code without locale.
     */
    setDefaultPreviewVoiceForLocale_(allVoices, languageCodeMap) {
        if (!allVoices || allVoices.length === 0) {
            return;
        }
        // Force a synchronous render so that we can set the default.
        this.$.previewVoiceOptions.render();
        // Set something if nothing exists. This useful for new users where
        // sometimes browserProxy.getProspectiveUiLanguage() does not complete the
        // callback.
        if (!this.defaultPreviewVoice) {
            this.set('defaultPreviewVoice', this.getBestVoiceForLocale_(allVoices));
        }
        this.langBrowserProxy_.getProspectiveUiLanguage().then(prospectiveUILanguage => {
            let result = '';
            if (prospectiveUILanguage && prospectiveUILanguage !== '' &&
                languageCodeMap[prospectiveUILanguage]) {
                const code = languageCodeMap[prospectiveUILanguage];
                // First try the pref value.
                result =
                    this.get('prefs.settings.tts.lang_to_voice_name.value')[code];
            }
            if (!result) {
                // If it's not a pref value yet, or the prospectiveUILanguage was
                // missing, try using the voice score.
                result = this.getBestVoiceForLocale_(allVoices);
            }
            this.set('defaultPreviewVoice', result);
        });
    }
    /**
     * Gets the best voice for the app locale.
     */
    getBestVoiceForLocale_(voices) {
        let bestScore = -1;
        let bestVoice = '';
        voices.forEach((voice) => {
            if (voice.languageScore > bestScore) {
                bestScore = voice.languageScore;
                bestVoice = voice.id;
            }
        });
        return bestVoice;
    }
    onPreviewTtsClick_() {
        this.ttsBrowserProxy_.previewTtsVoice(this.previewText_, this.$.previewVoice.value);
    }
    onEngineSettingsClick_(event) {
        this.ttsBrowserProxy_.wakeTtsEngine();
        window.open(event.model.item.optionsPage);
    }
}
customElements.define(SettingsTtsVoiceSubpageElement.is, SettingsTtsVoiceSubpageElement);
