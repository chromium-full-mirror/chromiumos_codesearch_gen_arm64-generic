// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { mojoString16ToString, stringToMojoString16, stringToMojoUrl } from 'chrome://resources/js/mojo_type_util.js';
import { assertDeepEquals, assertEquals } from 'chrome://webui-test/chai_assert.js';
suite('MojoTypeUtilTest', () => {
    test('Can convert strings to mojo String16s', () => {
        assertDeepEquals(stringToMojoString16(''), { data: [] });
        assertDeepEquals(stringToMojoString16('hi'), { data: [0x68, 0x69] });
        assertDeepEquals(stringToMojoString16('你好'), { data: [0x4f60, 0x597d] });
    });
    test('mojoString16ToString_NoChunking', () => {
        assertEquals(mojoString16ToString({ data: [] }), '');
        assertEquals(mojoString16ToString({ data: [0x68, 0x69] }), 'hi');
        assertEquals(mojoString16ToString({ data: [0x4f60, 0x597d] }), '你好');
    });
    test('mojoString16ToString_WithChunking', () => {
        assertEquals('h'.repeat(9000), mojoString16ToString({ data: Array(9000).fill(0x68) }));
        assertEquals('h'.repeat(18000), mojoString16ToString({ data: Array(18000).fill(0x68) }));
        assertEquals('h'.repeat(1e6), mojoString16ToString({ data: Array(1e6).fill(0x68) }));
    });
    test('emojis', () => {
        assertEquals('❤️', mojoString16ToString(stringToMojoString16('❤️')));
        assertEquals('👨‍👨‍👦', mojoString16ToString(stringToMojoString16('👨‍👨‍👦')));
        assertEquals('🇯🇵', mojoString16ToString(stringToMojoString16('🇯🇵')));
        assertEquals('🇺🇳', mojoString16ToString(stringToMojoString16('🇺🇳')));
        assertEquals('👨‍👨‍👦🇯🇵👨‍👨‍👦a你❤️👨‍👨‍👦', mojoString16ToString(stringToMojoString16('👨‍👨‍👦🇯🇵👨‍👨‍👦a你❤️👨‍👨‍👦')));
    });
    test('mojoString16ToString_WithChunking_Boundaries', () => {
        // Length of emoji flag = 4.
        // Adding characters at the beginning offsets it relative to the chunk size
        // which is 2^13.
        let s = '🇺🇳'.repeat(9000);
        assertEquals(s, mojoString16ToString(stringToMojoString16(s)));
        s = 'h' +
            '🇺🇳'.repeat(9000);
        assertEquals(s, mojoString16ToString(stringToMojoString16(s)));
        s = 'hh' +
            '🇺🇳'.repeat(9000);
        assertEquals(s, mojoString16ToString(stringToMojoString16(s)));
        s = 'hhh' +
            '🇺🇳'.repeat(9000);
        assertEquals(s, mojoString16ToString(stringToMojoString16(s)));
    });
    test('Can convert strings to mojo Urls', () => {
        assertDeepEquals(stringToMojoUrl(''), { url: '' });
        assertDeepEquals(stringToMojoUrl('https://chromium.org'), { url: 'https://chromium.org' });
        assertDeepEquals(stringToMojoUrl('https://user:pass@example.test'), { url: 'https://user:pass@example.test' });
        assertDeepEquals(stringToMojoUrl('http://insecure.test'), { url: 'http://insecure.test' });
        assertDeepEquals(stringToMojoUrl('file:///home/test/test.pdf'), { url: 'file:///home/test/test.pdf' });
    });
});
