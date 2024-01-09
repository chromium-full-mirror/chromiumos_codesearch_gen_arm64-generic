// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PromiseResolver } from 'chrome://resources/js/promise_resolver.js';
import { assertTrue } from 'chrome://webui-test/chai_assert.js';
function getExpectedFontFamily(expectingSystemFont) {
    if (!expectingSystemFont) {
        return 'Roboto';
    }
    const fontFamily = 
    // 
    // 
    // 
    // 
    'Roboto';
    // 
    // 
    // 
    return fontFamily;
}
// Asserts that a CSS rule specifying font-family with the expected value
// exists.
function assertFontFamilyRule(link, expectingSystemFont) {
    assertTrue(!!link.sheet);
    const styleRules = Array.from(link.sheet.cssRules).filter(r => r instanceof CSSStyleRule);
    assertTrue(styleRules.length > 0);
    const fontFamily = styleRules[0].style.getPropertyValue('font-family');
    const expectedFontFamily = getExpectedFontFamily(expectingSystemFont);
    assertTrue(fontFamily.startsWith(expectedFontFamily), `Found: '${fontFamily.toString()}'`);
}
// Asserts that a 'div' inherits the expected font-family value.
function assertFontFamilyApplied(expectingSystemFont) {
    const div = document.createElement('div');
    div.textContent = 'Dummy text';
    document.body.appendChild(div);
    const fontFamily = div.computedStyleMap().get('font-family');
    assertTrue(!!fontFamily);
    const expectedFontFamily = getExpectedFontFamily(expectingSystemFont);
    assertTrue(fontFamily.toString().startsWith(expectedFontFamily), `Found: '${fontFamily.toString()}'`);
}
function testFontFamily(cssFile, expectingSystemFont) {
    const resolver = new PromiseResolver();
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssFile;
    link.onload = function () {
        assertFontFamilyRule(link, expectingSystemFont);
        assertFontFamilyApplied(expectingSystemFont);
        resolver.resolve();
    };
    document.body.appendChild(link);
    return resolver.promise;
}
suite('TextDefaults', function () {
    setup(function () {
        document.body.innerHTML = window.trustedTypes.emptyHTML;
    });
    test('text_defaults.css', function () {
        return testFontFamily('chrome://resources/css/text_defaults.css', true /*expectingSystemFont*/);
    });
    test('text_defaults_md.css', function () {
        let expectingSystemFont = true;
        // 
        return testFontFamily('chrome://resources/css/text_defaults_md.css', expectingSystemFont);
    });
});
