// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import * as Explain from '../../../../../../front_end/panels/explain/explain.js';
import { describeWithLocale } from '../../../helpers/EnvironmentHelpers.js';
const { assert } = chai;
describeWithLocale('ConsoleInsight', () => {
    describe('Markdown renderer', () => {
        it('renders link as an x-link', () => {
            const renderer = new Explain.MarkdownRenderer();
            const result = renderer.renderToken({ type: 'link', text: 'learn more', href: 'exampleLink' });
            assert(result.values[0].tagName === 'X-LINK');
        });
        it('renders images as an x-link', () => {
            const renderer = new Explain.MarkdownRenderer();
            const result = renderer.renderToken({ type: 'image', text: 'learn more', href: 'exampleLink' });
            assert(result.values[0].tagName === 'X-LINK');
        });
        it('renders headers as a strong element', () => {
            const renderer = new Explain.MarkdownRenderer();
            const result = renderer.renderToken({ type: 'heading', text: 'learn more' });
            assert(result.strings.join('').includes('<strong>'));
        });
    });
});
//# sourceMappingURL=ConsoleInsight_test.js.map