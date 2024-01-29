// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class FakeReadingMode {
    // The root AXNodeID of the tree to be displayed.
    rootId = 0;
    startNodeId = 0;
    startOffset = 0;
    endNodeId = 0;
    endOffset = 0;
    // Items in the ReadAnythingTheme struct, see read_anything.mojom for info.
    fontName = 'MyFont';
    fontSize = 0;
    foregroundColor = 0;
    backgroundColor = 0;
    lineSpacing = 0;
    letterSpacing = 0;
    // The current color theme value.
    colorTheme = 0;
    // Current audio settings values.
    speechRate = 0;
    highlightGranularity = 0;
    // Enum values for various visual theme changes.
    standardLineSpacing = 0;
    looseLineSpacing = 0;
    veryLooseLineSpacing = 0;
    standardLetterSpacing = 0;
    wideLetterSpacing = 0;
    veryWideLetterSpacing = 0;
    defaultTheme = 0;
    lightTheme = 0;
    darkTheme = 0;
    yellowTheme = 0;
    blueTheme = 0;
    highlightOn = 0;
    // Whether the WebUI toolbar feature flag is enabled.
    isWebUIToolbarVisible = true;
    // Whether the Read Aloud feature flag is enabled.
    isReadAloudEnabled = false;
    // Indicates if select-to-distill works on the web page. Used to
    // determine which empty state to display.
    isSelectable = false;
    // Fonts supported by the browser's preferred language.
    supportedFonts = ['roboto'];
    // The language code that should be used for speech synthesis voices.
    speechSynthesisLanguageCode = '';
    // Returns the stored user voice preference for the given language.
    getStoredVoice(_lang) {
        return 'abc';
    }
    // Returns a list of AXNodeIDs corresponding to the unignored children of
    // the AXNode for the provided AXNodeID. If there is a selection contained
    // in this node, only returns children which are partially or entirely
    // contained within the selection.
    getChildren(_nodeId) {
        return [];
    }
    // Returns the HTML tag of the AXNode for the provided AXNodeID.
    getHtmlTag(_nodeId) {
        return 'div';
    }
    // Returns the language of the AXNode for the provided AXNodeID.
    getLanguage(_nodeId) {
        return 'en-us';
    }
    // Returns the text content of the AXNode for the provided AXNodeID. If a
    // selection begins or ends in this node, truncates the text to only return
    // the selected text.
    getTextContent(_nodeId) {
        return 'foo';
    }
    // Returns the text direction of the AXNode for the provided AXNodeID.
    getTextDirection(_nodeId) {
        return 'ltr';
    }
    // Returns the url of the AXNode for the provided AXNodeID.
    getUrl(_nodeId) {
        return 'foo';
    }
    // Returns true if the text node / element should be bolded.
    shouldBold(_nodeId) {
        return false;
    }
    // Returns true if the element has overline text styling.
    isOverline(_nodeId) {
        return false;
    }
    // Connects to the browser process. Called by ts when the read anything
    // element is added to the document.
    onConnected() { }
    // Called when a user tries to copy text from reading mode with keyboard
    // shortcuts.
    onCopy() { }
    // Called when the Read Anything panel is scrolled.
    onScroll(_onSelection) { }
    // Called when a user clicks a link. NodeID is an AXNodeID which identifies
    // the link's corresponding AXNode in the main pane.
    onLinkClicked(_nodeId) { }
    // Called when the line spacing is changed via the webui toolbar.
    onStandardLineSpacing() { }
    onLooseLineSpacing() { }
    onVeryLooseLineSpacing() { }
    // Called when a user makes a font size change via the webui toolbar.
    onFontSizeChanged(_increase) { }
    onFontSizeReset() { }
    // Called when a user toggles links via the webui toolbar.
    onLinksEnabledToggled() { }
    // Called when the letter spacing is changed via the webui toolbar.
    onStandardLetterSpacing() { }
    onWideLetterSpacing() { }
    onVeryWideLetterSpacing() { }
    // Called when the color theme is changed via the webui toolbar.
    onDefaultTheme() { }
    onLightTheme() { }
    onDarkTheme() { }
    onYellowTheme() { }
    onBlueTheme() { }
    // Called when the font is changed via the webui toolbar.
    onFontChange(_font) { }
    // Called when the speech rate is changed via the webui toolbar.
    onSpeechRateChange(_rate) { }
    // Called when the voice used for speech is changed via the webui toolbar.
    onVoiceChange(_voice, _lang) { }
    // Called when the highlight granularity is changed via the webui toolbar.
    turnedHighlightOn() { }
    turnedHighlightOff() { }
    // Returns the actual spacing value to use based on the given lineSpacing
    // category.
    getLineSpacingValue(lineSpacing) {
        return lineSpacing;
    }
    // Returns the actual spacing value to use based on the given letterSpacing
    // category.
    getLetterSpacingValue(letterSpacing) {
        return letterSpacing;
    }
    // Called when a user makes a selection change. AnchorNodeID and
    // focusAXNodeID are AXNodeIDs which identify the anchor and focus AXNodes
    // in the main pane. The selection can either be forward or backwards.
    onSelectionChange(_anchorNodeId, _anchorOffset, _focusNodeId, _focusOffset) { }
    // Called when a user collapses the selection. This is usually accomplished
    // by clicking.
    onCollapseSelection() { }
    // Set the content. Used by tests only.
    // SnapshotLite is a data structure which resembles an AXTreeUpdate. E.g.:
    //   const axTree = {
    //     rootId: 1,
    //     nodes: [
    //       {
    //         id: 1,
    //         role: 'rootWebArea',
    //         childIds: [2],
    //       },
    //       {
    //         id: 2,
    //         role: 'staticText',
    //         name: 'Some text.',
    //       },
    //     ],
    //   };
    setContentForTesting(_snapshotLite, _contentNodeIds) { }
    // Set the theme. Used by tests only.
    setThemeForTesting(_fontName, _fontSize, _linksEnabled, _foregroundColor, _backgroundColor, _lineSpacing, _letterSpacing) { }
    // Sets the default language. Used by tests only.
    setLanguageForTesting(_code) { }
    ////////////////////////////////////////////////////////////////
    // Implemented in read_anything/app.ts and called by native c++.
    ////////////////////////////////////////////////////////////////
    // Display a loading screen to tell the user we are distilling the page.
    showLoading() { }
    // Display the empty state page to tell the user we can't distill the page.
    showEmpty() { }
    // Ping that an AXTree has been distilled for the active tab's render frame
    // and is available to consume.
    updateContent() { }
    // Ping that the selection has been updated.
    updateSelection() { }
    // Ping that the theme choices of the user have been changed using the
    // toolbar and are ready to consume.
    updateTheme() { }
    // Ping that the theme choices of the user have been retrieved from
    // preferences and can be used to set up the page.
    restoreSettingsFromPrefs() { }
    // Returns the index of the next sentence of the given text, such that the
    // next sentence is equivalent to text.substr(0, <returned_index>).
    // If the sentence exceeds the maximum text length, the sentence will be
    // cropped to the nearest word boundary that doesn't exceed the maximum
    // text length.
    getNextSentence(_value, _maxTextLength) {
        return 0;
    }
    // Signal that the supported fonts should be updated i.e. that the brower's
    // preferred language has changed.
    updateFonts() { }
}
