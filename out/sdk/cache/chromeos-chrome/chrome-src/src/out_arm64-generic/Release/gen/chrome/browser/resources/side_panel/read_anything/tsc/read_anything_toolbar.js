// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_icons.css.js';
import '//resources/cr_elements/icons.html.js';
import '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import '//resources/cr_elements/md_select.css.js';
import './icons.html.js';
import { AnchorAlignment } from '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import { WebUiListenerMixin } from '//resources/cr_elements/web_ui_listener_mixin.js';
import { assert } from '//resources/js/assert.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { ReadAnythingElement } from './app.js';
import { getTemplate } from './read_anything_toolbar.html.js';
// Enum for logging when a text style setting is changed.
// These values are persisted to logs. Entries should not be renumbered and
// numeric values should never be reused.
var ReadAnythingSettingsChange;
(function (ReadAnythingSettingsChange) {
    ReadAnythingSettingsChange[ReadAnythingSettingsChange["FONT_CHANGE"] = 0] = "FONT_CHANGE";
    ReadAnythingSettingsChange[ReadAnythingSettingsChange["FONT_SIZE_CHANGE"] = 1] = "FONT_SIZE_CHANGE";
    ReadAnythingSettingsChange[ReadAnythingSettingsChange["THEME_CHANGE"] = 2] = "THEME_CHANGE";
    ReadAnythingSettingsChange[ReadAnythingSettingsChange["LINE_HEIGHT_CHANGE"] = 3] = "LINE_HEIGHT_CHANGE";
    ReadAnythingSettingsChange[ReadAnythingSettingsChange["LETTER_SPACING_CHANGE"] = 4] = "LETTER_SPACING_CHANGE";
    // Must be last.
    ReadAnythingSettingsChange[ReadAnythingSettingsChange["COUNT"] = 5] = "COUNT";
})(ReadAnythingSettingsChange || (ReadAnythingSettingsChange = {}));
const SETTINGS_CHANGE_UMA = 'Accessibility.ReadAnything.SettingsChange';
const moreOptionsClass = '.more-options-icon';
const activeClass = ' active';
const ReadAnythingToolbarBase = WebUiListenerMixin(PolymerElement);
export class ReadAnythingToolbar extends ReadAnythingToolbarBase {
    constructor() {
        super(...arguments);
        this.contentPage = document.querySelector('read-anything-app');
        // If you change these fonts, please also update read_anything_constants.h
        this.fontOptions_ = [];
        this.letterSpacingOptions_ = [
            {
                title: loadTimeData.getString('letterSpacingStandardTitle'),
                icon: 'read-anything:letter-spacing-standard',
                data: chrome.readingMode.getLetterSpacingValue(chrome.readingMode.standardLetterSpacing),
                callback: () => chrome.readingMode.onStandardLetterSpacing(),
            },
            {
                title: loadTimeData.getString('letterSpacingWideTitle'),
                icon: 'read-anything:letter-spacing-wide',
                data: chrome.readingMode.getLetterSpacingValue(chrome.readingMode.wideLetterSpacing),
                callback: () => chrome.readingMode.onWideLetterSpacing(),
            },
            {
                title: loadTimeData.getString('letterSpacingVeryWideTitle'),
                icon: 'read-anything:letter-spacing-very-wide',
                data: chrome.readingMode.getLetterSpacingValue(chrome.readingMode.veryWideLetterSpacing),
                callback: () => chrome.readingMode.onVeryWideLetterSpacing(),
            },
        ];
        this.lineSpacingOptions_ = [
            {
                title: loadTimeData.getString('lineSpacingStandardTitle'),
                icon: 'read-anything:line-spacing-standard',
                data: chrome.readingMode.getLineSpacingValue(chrome.readingMode.standardLineSpacing),
                callback: () => chrome.readingMode.onStandardLineSpacing(),
            },
            {
                title: loadTimeData.getString('lineSpacingLooseTitle'),
                icon: 'read-anything:line-spacing-loose',
                data: chrome.readingMode.getLineSpacingValue(chrome.readingMode.looseLineSpacing),
                callback: () => chrome.readingMode.onLooseLineSpacing(),
            },
            {
                title: loadTimeData.getString('lineSpacingVeryLooseTitle'),
                icon: 'read-anything:line-spacing-very-loose',
                data: chrome.readingMode.getLineSpacingValue(chrome.readingMode.veryLooseLineSpacing),
                callback: () => chrome.readingMode.onVeryLooseLineSpacing(),
            },
        ];
        this.colorOptions_ = [
            {
                title: loadTimeData.getString('defaultColorTitle'),
                icon: 'read-anything-20:default-theme',
                data: '',
                callback: () => chrome.readingMode.onDefaultTheme(),
            },
            {
                title: loadTimeData.getString('lightColorTitle'),
                icon: 'read-anything-20:light-theme',
                data: '-light',
                callback: () => chrome.readingMode.onLightTheme(),
            },
            {
                title: loadTimeData.getString('darkColorTitle'),
                icon: 'read-anything-20:dark-theme',
                data: '-dark',
                callback: () => chrome.readingMode.onDarkTheme(),
            },
            {
                title: loadTimeData.getString('yellowColorTitle'),
                icon: 'read-anything-20:yellow-theme',
                data: '-yellow',
                callback: () => chrome.readingMode.onYellowTheme(),
            },
            {
                title: loadTimeData.getString('blueColorTitle'),
                icon: 'read-anything-20:blue-theme',
                data: '-blue',
                callback: () => chrome.readingMode.onBlueTheme(),
            },
        ];
        this.voiceSelectionOptions_ = [];
        this.rateOptions_ = [0.5, 0.8, 1, 1.2, 1.5, 2, 3, 4];
        this.moreOptionsButtons_ = [
            {
                id: 'color',
                icon: 'read-anything:color',
                ariaLabel: loadTimeData.getString('themeTitle'),
                menuToOpen: () => this.$.colorMenu,
            },
            {
                id: 'line-spacing',
                icon: 'read-anything:line-spacing',
                ariaLabel: loadTimeData.getString('lineSpacingTitle'),
                menuToOpen: () => this.$.lineSpacingMenu,
            },
            {
                id: 'letter-spacing',
                icon: 'read-anything:letter-spacing',
                ariaLabel: loadTimeData.getString('letterSpacingTitle'),
                menuToOpen: () => this.$.letterSpacingMenu,
            },
        ];
        this.textStyleOptions_ = [];
        this.showAtPositionConfig_ = {
            top: 20,
            left: 8,
            anchorAlignmentY: AnchorAlignment.AFTER_END,
        };
        this.isHighlightOn_ = true;
        // If Read Aloud is in the paused state.
        this.isPaused_ = true;
    }
    static get is() {
        return 'read-anything-toolbar';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            fontOptions_: Array,
            letterSpacingOptions_: Array,
            lineSpacingOptions_: Array,
            colorOptions_: Array,
            rateOptions_: Array,
            textStyleOptions_: Array,
        };
    }
    // This function has to be static because it's called from the ResizeObserver
    // callback which doesn't have access to "this"
    static maybeUpdateMoreOptions(toolbar) {
        // Hide the more options button first to calculate if we need it
        const moreOptionsButton = toolbar.querySelector('#more');
        assert(moreOptionsButton);
        ReadAnythingToolbar.hideElement(moreOptionsButton, false);
        // Show all the buttons that would go in the overflow menu to see if they
        // fit
        const buttons = Array.from(toolbar.querySelectorAll('.toolbar-button'));
        assert(buttons);
        const moreOptionsButtons = toolbar.querySelectorAll(moreOptionsClass);
        assert(moreOptionsButtons);
        const buttonsOnToolbarToMaybeHide = buttons.slice(buttons.length - moreOptionsButtons.length);
        buttonsOnToolbarToMaybeHide.forEach(btn => {
            ReadAnythingToolbar.showElement(btn);
        });
        // When scroll width and client width are the different, then the content
        // has overflowed.
        if (toolbar.scrollWidth !== toolbar.clientWidth) {
            ReadAnythingToolbar.showElement(moreOptionsButton);
            // Hide all the buttons on the toolbar that are in the more options menu
            buttonsOnToolbarToMaybeHide.forEach(btn => {
                ReadAnythingToolbar.hideElement(btn, true);
            });
            toolbar.insertBefore(moreOptionsButton, buttonsOnToolbarToMaybeHide[0]);
            moreOptionsButtons.item(0).style.marginLeft = '16px';
        }
    }
    static hideElement(element, keepSpace) {
        if (keepSpace) {
            element.style.visibility = 'hidden';
        }
        else {
            element.style.display = 'none';
        }
    }
    static showElement(element) {
        element.style.visibility = 'visible';
        element.style.display = 'inline-block';
    }
    connectedCallback() {
        super.connectedCallback();
        this.isReadAloudEnabled_ = chrome.readingMode.isReadAloudEnabled;
        if (this.isReadAloudEnabled_) {
            this.textStyleOptions_.push({
                id: 'font-size',
                icon: 'read-anything:font-size',
                ariaLabel: loadTimeData.getString('fontSizeTitle'),
                menuToOpen: () => this.$.fontSizeMenu,
            }, {
                id: 'font',
                icon: 'read-anything:font',
                ariaLabel: loadTimeData.getString('fontNameTitle'),
                menuToOpen: () => this.$.fontMenu,
            });
            const shadowRoot = this.shadowRoot;
            assert(shadowRoot);
            const toolbar = shadowRoot.getElementById('toolbar-container');
            assert(toolbar);
            new ResizeObserver(this.onToolbarResize_).observe(toolbar);
        }
        this.textStyleOptions_ =
            this.textStyleOptions_.concat(this.moreOptionsButtons_);
        this.updateFonts();
    }
    onToolbarResize_(entries) {
        assert(entries.length === 1);
        const toolbar = entries[0].target;
        ReadAnythingToolbar.maybeUpdateMoreOptions(toolbar);
    }
    restoreFontMenu_() {
        const currentFontIndex = this.fontOptions_.indexOf(chrome.readingMode.fontName);
        let fontOptions;
        if (this.isReadAloudEnabled_) {
            fontOptions = Array.from(this.$.fontMenu.children);
            this.setCheckMarkForMenu_(this.$.fontMenu, currentFontIndex);
        }
        else {
            const shadowRoot = this.shadowRoot;
            assert(shadowRoot);
            const select = shadowRoot.getElementById('font-select');
            assert(select);
            fontOptions = Array.from(select.options);
            select.selectedIndex = currentFontIndex;
        }
        fontOptions.forEach(element => {
            assert(element instanceof HTMLElement);
            if (!element.innerText) {
                return;
            }
            // Update the font of each button to be the same as the font text.
            element.style.fontFamily = element.innerText;
        });
    }
    restoreSettingsFromPrefs(colorSuffix) {
        this.restoreFontMenu_();
        if (this.isReadAloudEnabled_) {
            const speechRate = parseFloat(chrome.readingMode.speechRate.toFixed(1));
            this.setRateIcon_(speechRate);
            this.setCheckMarkForMenu_(this.$.rateMenu, this.rateOptions_.indexOf(speechRate));
            this.setHighlightState_(chrome.readingMode.highlightGranularity ===
                chrome.readingMode.highlightOn);
        }
        this.setCheckMarkForMenu_(this.$.colorMenu, this.getIndexOfSetting_(this.colorOptions_, colorSuffix));
        this.setCheckMarkForMenu_(this.$.lineSpacingMenu, this.getIndexOfSetting_(this.lineSpacingOptions_, parseFloat(chrome.readingMode.lineSpacing.toFixed(2))));
        this.setCheckMarkForMenu_(this.$.letterSpacingMenu, this.getIndexOfSetting_(this.letterSpacingOptions_, parseFloat(chrome.readingMode.letterSpacing.toFixed(2))));
    }
    getIndexOfSetting_(menuArray, dataToFind) {
        return menuArray.findIndex((item) => (item.data === dataToFind));
    }
    updateFonts() {
        const fonts = chrome.readingMode.supportedFonts;
        this.fontOptions_ = [];
        fonts.forEach(element => {
            this.fontOptions_.push(element);
        });
        this.$.fontTemplate.render();
    }
    updateUiForPlaying() {
        const shadowRoot = this.shadowRoot;
        assert(shadowRoot);
        const button = shadowRoot.getElementById('play-pause');
        assert(button);
        button.setAttribute('iron-icon', 'read-anything-20:pause');
        button.setAttribute('aria-label', loadTimeData.getString('pauseLabel'));
        this.isPaused_ = false;
        this.updateStyles({
            '--audio-controls-background': 'var(--color-sys-tonal-container)',
            '--audio-controls-right-padding': '4px',
            '--audio-controls-right-margin': '6px',
        });
        const toolbar = shadowRoot.getElementById('toolbar-container');
        assert(toolbar);
        ReadAnythingToolbar.maybeUpdateMoreOptions(toolbar);
    }
    showVoicePreviewPlaying(voice) {
        if (!voice) {
            return;
        }
        this.voiceSelectionOptions_ = this.voiceSelectionOptions_.map(({ data, ...rest }) => ({
            ...rest,
            data: {
                voice: data.voice,
                selected: data.selected,
                previewPlaying: this.voicesAreEqual_(data.voice, voice),
            },
        }));
    }
    showVoicePreviewDone() {
        this.voiceSelectionOptions_ =
            this.voiceSelectionOptions_.map(({ data, ...rest }) => ({
                ...rest,
                data: {
                    voice: data.voice,
                    selected: data.selected,
                    previewPlaying: false,
                },
            }));
    }
    updateUiForPausing() {
        const shadowRoot = this.shadowRoot;
        assert(shadowRoot);
        const button = shadowRoot.getElementById('play-pause');
        assert(button);
        button.setAttribute('iron-icon', 'read-anything-20:play');
        button.setAttribute('aria-label', loadTimeData.getString('playLabel'));
        this.isPaused_ = true;
        this.updateStyles({
            '--audio-controls-background': 'transparent',
            '--audio-controls-right-padding': '0px',
            '--audio-controls-right-margin': '2px',
        });
        const toolbar = shadowRoot.getElementById('toolbar-container');
        assert(toolbar);
        ReadAnythingToolbar.maybeUpdateMoreOptions(toolbar);
    }
    closeMenus_() {
        this.$.rateMenu.close();
        this.$.colorMenu.close();
        this.$.lineSpacingMenu.close();
        this.$.letterSpacingMenu.close();
        this.$.fontMenu.close();
    }
    onNextGranularityClick_() {
        if (this.contentPage) {
            this.contentPage.playNextGranularity();
        }
    }
    onPreviousGranularityClick_() {
        if (this.contentPage) {
            this.contentPage.playPreviousGranularity();
        }
    }
    onTextStyleMenuButtonClick_(event) {
        this.openMenu_(event.model.item.menuToOpen(), event.target);
    }
    onShowRateMenuClick_(event) {
        this.openMenu_(this.$.rateMenu, event.target);
    }
    voicesAreEqual_(voice1, voice2) {
        if (!voice1 || !voice2) {
            return false;
        }
        return voice1.default === voice2.default && voice1.lang === voice2.lang &&
            voice1.localService === voice2.localService &&
            voice1.name === voice2.name && voice1.voiceURI === voice2.voiceURI;
    }
    // TODO(crbug.com/1474951): Add unit tests
    onVoiceSelectionMenuClick_(event) {
        if (this.contentPage) {
            const voices = this.contentPage.getVoices();
            const selectedVoice = this.contentPage.getSpeechSynthesisVoice();
            this.voiceSelectionOptions_ = Object.entries(voices).reduce((aggregateVoiceList, [_, voiceListForLang]) => ([
                ...aggregateVoiceList,
                ...(voiceListForLang).map(speechSynthesisVoice => ({
                    title: speechSynthesisVoice.name,
                    icon: '',
                    data: {
                        voice: speechSynthesisVoice,
                        selected: this.voicesAreEqual_(selectedVoice, speechSynthesisVoice),
                        previewPlaying: false,
                    },
                    callback: () => { },
                })),
            ]), []);
            this.openMenu_(this.$.voiceSelectionMenu, event.target, true);
        }
    }
    onMoreOptionsClick_(event) {
        this.openMenu_(this.$.moreOptionsMenu, event.target);
    }
    openMenu_(menuToOpen, target, fullScreen = false) {
        // The button should stay active while the menu is open and deactivate when
        // the menu closes.
        menuToOpen.addEventListener('close', () => {
            target.className = target.className.replace(activeClass, '');
        });
        target.className += activeClass;
        this.closeMenus_();
        const shadowRoot = this.shadowRoot;
        assert(shadowRoot);
        const minY = target.getBoundingClientRect().bottom;
        if (fullScreen) {
            menuToOpen.showAt(target, {
                minY: minY,
                left: 0,
                anchorAlignmentY: AnchorAlignment.AFTER_END,
                noOffset: true,
            });
        }
        else {
            menuToOpen.showAt(target, {
                minY: minY,
                anchorAlignmentX: AnchorAlignment.AFTER_START,
                anchorAlignmentY: AnchorAlignment.AFTER_END,
                noOffset: true,
            });
        }
    }
    onHighlightClick_() {
        const shadowRoot = this.shadowRoot;
        assert(shadowRoot);
        const button = shadowRoot.getElementById('highlight');
        assert(button);
        if (this.isHighlightOn_) {
            chrome.readingMode.turnedHighlightOff();
        }
        else {
            chrome.readingMode.turnedHighlightOn();
        }
        this.setHighlightState_(!this.isHighlightOn_);
    }
    setHighlightState_(turnOn) {
        const shadowRoot = this.shadowRoot;
        assert(shadowRoot);
        const button = shadowRoot.getElementById('highlight');
        assert(button);
        this.isHighlightOn_ = turnOn;
        if (this.isHighlightOn_) {
            button.setAttribute('iron-icon', 'read-anything:highlight-on');
            button.setAttribute('title', loadTimeData.getString('turnHighlightOff'));
        }
        else {
            button.setAttribute('iron-icon', 'read-anything:highlight-off');
            button.setAttribute('title', loadTimeData.getString('turnHighlightOn'));
        }
        if (this.contentPage) {
            this.contentPage.updateHighlight(this.isHighlightOn_);
        }
    }
    onLetterSpacingClick_(event) {
        this.onTextStyleClick_(event, ReadAnythingSettingsChange.LETTER_SPACING_CHANGE, this.$.letterSpacingMenu, ReadAnythingElement.prototype.updateLetterSpacing);
    }
    onLineSpacingClick_(event) {
        this.onTextStyleClick_(event, ReadAnythingSettingsChange.LINE_HEIGHT_CHANGE, this.$.lineSpacingMenu, ReadAnythingElement.prototype.updateLineSpacing);
    }
    onColorClick_(event) {
        this.onTextStyleClick_(event, ReadAnythingSettingsChange.THEME_CHANGE, this.$.colorMenu, ReadAnythingElement.prototype.updateThemeFromWebUi);
    }
    onVoiceSelectClick_(event) {
        // TODO(crbug.com/1474951): Save voice to prefs.
        if (this.contentPage) {
            const selectedVoice = event.model.item.data.voice;
            this.contentPage.setSpeechSynthesisVoice(selectedVoice);
            this.voiceSelectionOptions_ = this.voiceSelectionOptions_.map(({ data, ...rest }) => ({
                ...rest,
                data: {
                    voice: data.voice,
                    selected: this.voicesAreEqual_(selectedVoice, data.voice),
                    previewPlaying: false,
                },
            }));
        }
    }
    onVoicePreviewClick_(event) {
        // Because the preview button is layered onto the voice-selection button,
        // the onVoiceSelectClick_() listener is also subscribed to this event. This
        // line is to make sure that the voice-selection callback is not triggered.
        event.stopImmediatePropagation();
        if (this.contentPage) {
            this.contentPage.previewSpeechSynthesisVoice(event.model.item.data.voice);
        }
    }
    onTextStyleClick_(event, logVal, menuClicked, contentPageCallback) {
        event.model.item.callback();
        chrome.metricsPrivate.recordEnumerationValue(SETTINGS_CHANGE_UMA, logVal, ReadAnythingSettingsChange.COUNT);
        if (this.contentPage) {
            contentPageCallback.call(this.contentPage, event.model.item.data);
        }
        this.setCheckMarkForMenu_(menuClicked, event.model.index);
        this.closeMenus_();
    }
    onFontClick_(event) {
        chrome.metricsPrivate.recordEnumerationValue(SETTINGS_CHANGE_UMA, ReadAnythingSettingsChange.FONT_CHANGE, ReadAnythingSettingsChange.COUNT);
        const fontName = event.model.item;
        chrome.readingMode.onFontChange(fontName);
        if (this.contentPage) {
            this.contentPage.updateFont(fontName);
        }
        this.setCheckMarkForMenu_(this.$.fontMenu, event.model.index);
        this.closeMenus_();
    }
    onFontSelectValueChange_(event) {
        const fontName = event.target.value;
        chrome.readingMode.onFontChange(fontName);
        if (this.contentPage) {
            this.contentPage.updateFont(fontName);
        }
    }
    onRateClick_(event) {
        chrome.readingMode.onSpeechRateChange(event.model.item);
        if (this.contentPage) {
            this.contentPage.onSpeechRateChange(event.model.item);
            this.setRateIcon_(event.model.item);
        }
        this.setCheckMarkForMenu_(this.$.rateMenu, event.model.index);
        this.closeMenus_();
    }
    setRateIcon_(rate) {
        const shadowRoot = this.shadowRoot;
        assert(shadowRoot);
        const button = shadowRoot.getElementById('rate');
        assert(button);
        button.setAttribute('iron-icon', 'voice-rate:' + rate);
    }
    setCheckMarkForMenu_(menu, index) {
        const checkMarks = Array.from(menu.getElementsByClassName('check-mark'));
        assert((index < checkMarks.length) && (index >= 0));
        checkMarks.forEach((element) => {
            assert(element instanceof HTMLElement);
            // TODO(crbug.com/1465029): Ensure this works with screen readers
            ReadAnythingToolbar.hideElement(element, true);
        });
        const checkMark = checkMarks[index];
        ReadAnythingToolbar.showElement(checkMark);
    }
    onFontSizeIncreaseClick_() {
        this.updateFontSize_(true);
    }
    onFontSizeDecreaseClick_() {
        this.updateFontSize_(false);
    }
    updateFontSize_(increase) {
        chrome.metricsPrivate.recordEnumerationValue(SETTINGS_CHANGE_UMA, ReadAnythingSettingsChange.FONT_SIZE_CHANGE, ReadAnythingSettingsChange.COUNT);
        chrome.readingMode.onFontSizeChanged(increase);
        if (this.contentPage) {
            this.contentPage.updateFontSize();
        }
        // Don't close the menu
    }
    onFontResetClick_() {
        chrome.metricsPrivate.recordEnumerationValue(SETTINGS_CHANGE_UMA, ReadAnythingSettingsChange.FONT_SIZE_CHANGE, ReadAnythingSettingsChange.COUNT);
        chrome.readingMode.onFontSizeReset();
        if (this.contentPage) {
            this.contentPage.updateFontSize();
        }
    }
    onPlayPauseClick() {
        if (this.isPaused_) {
            this.updateUiForPlaying();
            if (this.contentPage) {
                this.contentPage.playSpeech();
            }
        }
        else {
            this.updateUiForPausing();
            if (this.contentPage) {
                this.contentPage.stopSpeech();
            }
        }
    }
    onToolbarKeyDown_(e) {
        const shadowRoot = this.shadowRoot;
        assert(shadowRoot);
        const toolbar = shadowRoot.getElementById('toolbar-container');
        assert(toolbar);
        const buttons = Array.from(toolbar.querySelectorAll('.toolbar-button'));
        assert(buttons);
        // Only allow focus on the currently visible and actionable elements.
        const focusableElements = buttons.filter(el => {
            return (el.clientHeight > 0) && (el.clientWidth > 0) &&
                (el.getBoundingClientRect().right < toolbar.clientWidth) &&
                (el.className !== 'separator');
        });
        // Allow focusing the font selection if it's visible.
        if (!this.isReadAloudEnabled_) {
            const select = shadowRoot.getElementById('font-select');
            assert(select);
            focusableElements.unshift(select);
        }
        // Allow focusing the more options menu if it's visible.
        const moreOptionsButton = toolbar.querySelector('#more');
        assert(moreOptionsButton);
        if (moreOptionsButton.style.display &&
            (moreOptionsButton.style.display !== 'none')) {
            focusableElements.push(moreOptionsButton);
            Array.from(toolbar.querySelectorAll(moreOptionsClass))
                .forEach(element => {
                focusableElements.push(element);
            });
        }
        this.onKeyDown_(e, focusableElements);
    }
    onFontSizeMenuKeyDown_(e) {
        this.onKeyDown_(e, Array.from(this.$.fontSizeMenu.children));
    }
    onKeyDown_(e, focusableElements) {
        if (!['ArrowRight', 'ArrowLeft'].includes(e.key)) {
            return;
        }
        e.preventDefault();
        const currentIndex = focusableElements.indexOf(e.target);
        const direction = e.key === 'ArrowRight' ? 1 : -1;
        // Move to the next focusable item in the toolbar, wrapping around
        // if we've reached the end or beginning.
        let newIndex = (currentIndex + direction + focusableElements.length) %
            focusableElements.length;
        // Skip focusing the button itself and go directly to the children. We still
        // need this button in the list of focusable elements because it can become
        // focused by tabbing while the menu is open and we want the arrow key
        // behavior to continue smoothly.
        if (focusableElements[newIndex].id === 'more') {
            newIndex += direction;
        }
        // Open the overflow menu if the next button is in that menu. Close it
        // otherwise.
        const elementToFocus = focusableElements[newIndex];
        assert(elementToFocus);
        if (elementToFocus.className !== moreOptionsClass.slice(1)) {
            this.$.moreOptionsMenu.close();
        }
        else if (!this.$.moreOptionsMenu.open) {
            const moreOptionsButton = focusableElements.find(element => element.id === 'more');
            assert(moreOptionsButton);
            this.openMenu_(this.$.moreOptionsMenu, moreOptionsButton);
        }
        // When the user tabs away from the toolbar and then tabs back, we want to
        // focus the last focused item in the toolbar
        focusableElements.forEach(el => {
            el.tabIndex = -1;
        });
        elementToFocus.tabIndex = 0;
        // Wait for the next animation frame for the overflow menu to show or hide.
        requestAnimationFrame(() => {
            elementToFocus.focus();
        });
    }
    onFontSelectKeyDown_(e) {
        // The default behavior goes to the next select option. However, we want
        // to instead go to the next toolbar button (handled in onToolbarKeyDown_).
        // ArrowDown and ArrowUp will still move to the next/previous option.
        if (['ArrowRight', 'ArrowLeft'].includes(e.key)) {
            e.preventDefault();
        }
    }
}
customElements.define('read-anything-toolbar', ReadAnythingToolbar);
