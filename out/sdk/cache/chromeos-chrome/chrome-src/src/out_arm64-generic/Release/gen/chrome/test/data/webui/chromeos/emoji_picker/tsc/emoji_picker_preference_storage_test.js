// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Definition of emoji skin tone and gender categorizations:
 *  - Group 1: emojis with only skin tone, e.g. 👍
 *  - Group 2: emojis with only gender, e.g. 🧞
 *  - Group 3: emojis with both tone and gender, e.g. 🤷
 *  - Group 4: the multi-part emoji with only tone: 🤝
 *  - Group 5: multi-part emojis with tone and gender, e.g. 👬
 */
import { initialiseEmojiPickerForTest } from './emoji_picker_test_util.js';
suite('emoji-picker-global-variants', () => {
    let expectEmojiButton;
    let expectEmojiButtons;
    let clickVariant;
    let findGroup;
    let reload;
    let setIncognito;
    setup(async () => {
        const newPicker = initialiseEmojiPickerForTest();
        expectEmojiButton = newPicker.expectEmojiButton;
        expectEmojiButtons = newPicker.expectEmojiButtons;
        clickVariant = newPicker.clickVariant;
        findGroup = newPicker.findGroup;
        reload = newPicker.reload;
        setIncognito = newPicker.setIncognito;
        await newPicker.readyPromise;
    });
    test('selecting a variant from existing history should migrate it and update preferences', async () => {
        window.localStorage.setItem('emoji-recently-used', JSON.stringify({
            history: [{
                    base: { string: '🧞‍♀', name: ' genie' },
                    alternates: [
                        { string: '🧞', name: 'genie' },
                        { string: '🧞‍♀', name: 'woman genie' },
                        { string: '🧞‍♂', name: 'man genie' },
                    ],
                }],
        }));
        await reload();
        const historyEmoji = await expectEmojiButton('🧞‍♀', () => findGroup('emoji-history'));
        await clickVariant('🧞‍♂', historyEmoji);
        await reload();
        await expectEmojiButtons(['🤷‍♂', '🧞‍♂']);
    });
    test('existing preferences should remain until setting a global preference', async () => {
        window.localStorage.setItem('emoji-recently-used', JSON.stringify({ history: [], preference: { '🤷': '🤷🏿‍♀' } }));
        await reload();
        await expectEmojiButton('🤷🏿‍♀');
        const thumbsUp = await expectEmojiButton('👍');
        await clickVariant('👍🏻', thumbsUp);
        await reload();
        await expectEmojiButton('🤷🏻‍♀');
        const genie = await expectEmojiButton('🧞');
        await clickVariant('🧞‍♂', genie);
        await reload();
        await expectEmojiButton('🤷🏻‍♂');
    });
    test('selecting a base emoji should not overwrite individual preferences with the default', async () => {
        window.localStorage.setItem('emoji-recently-used', JSON.stringify({ history: [], preference: { '🤷': '🤷🏿‍♀' } }));
        await reload();
        const thumbsUp = await expectEmojiButton('👍');
        thumbsUp.click();
        await reload();
        await expectEmojiButton('🤷🏿‍♀');
    });
    test('preferences should not be saved when selecting a variant in incognito', async () => {
        setIncognito(true);
        await reload();
        const shrug = await expectEmojiButton('🤷');
        await clickVariant('🤷🏿‍♀', shrug);
        await reload();
        await expectEmojiButtons(['🤷', '👍', '🧞']);
    });
    test('existing preferences should not be applied in incognito', async () => {
        const shrug = await expectEmojiButton('🤷');
        await clickVariant('🤷🏿‍♀', shrug);
        setIncognito(true);
        await reload();
        await expectEmojiButtons(['🤷', '👍', '🧞']);
    });
});
