"use strict";
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const helper_js_1 = require("../../../test/shared/helper.js");
const mocha_extensions_js_1 = require("../../../test/shared/mocha-extensions.js");
const helpers_js_1 = require("./helpers.js");
(0, mocha_extensions_js_1.describe)('Recorder', function () {
    if (this.timeout() !== 0) {
        this.timeout(40000);
    }
    async function record() {
        const { target, frontend } = (0, helper_js_1.getBrowserAndPages)();
        await target.bringToFront();
        await frontend.bringToFront();
        await frontend.waitForSelector('pierce/.settings');
        await target.bringToFront();
        const element = await target.waitForSelector('a[href="recorder2.html"]');
        await element?.click();
        await frontend.bringToFront();
    }
    (0, mocha_extensions_js_1.describe)('Export', () => {
        beforeEach(async () => {
            const { frontend } = (0, helper_js_1.getBrowserAndPages)();
            // Mock the extension integration part and provide a test impl using RecorderPluginManager.
            await frontend.evaluate(`
        (async function () {
          const Extensions = await import('./models/extensions/extensions.js');
          const manager = Extensions.RecorderPluginManager.RecorderPluginManager.instance();
          manager.addPlugin({
            getName() {
              return 'TestExtension';
            },
            getMediaType() {
              return 'text/javascript';
            },
            stringify() {
              return Promise.resolve('stringified');
            },
            getCapabilities() {
              return ['export'];
            }
          })
        })();
      `);
            await (0, helpers_js_1.enableAndOpenRecorderPanel)('recorder/recorder.html');
            await (0, helpers_js_1.createAndStartRecording)('Test');
            await record();
            await (0, helpers_js_1.stopRecording)();
        });
        const tests = [
            ['JSON', 'Test.json', '"type": "click"'],
            ['@puppeteer/replay', 'Test.js', '\'@puppeteer/replay\''],
            ['Puppeteer', 'Test.js', '\'puppeteer\''],
            ['Puppeteer (including Lighthouse analysis)', 'Test.js', '\'puppeteer\''],
            ['TestExtension', 'Test.js', 'stringified'],
        ];
        for (const [button, filename, expectedSubstring] of tests) {
            (0, mocha_extensions_js_1.it)(`should ${button.toLowerCase()}`, async () => {
                const { frontend } = (0, helper_js_1.getBrowserAndPages)();
                const exportButton = await (0, helper_js_1.waitForAria)('Export');
                await exportButton.click();
                const exportMenuItem = await (0, helper_js_1.waitForAria)(button);
                await frontend.evaluate(`
          window.showSaveFilePicker = (opts) => {
            window.__suggestedFilename = opts.suggestedName;
            return {
              async createWritable() {
                let data = '';
                return {
                  write(part) {
                    data += part;
                  },
                  close() {
                    window.__writtenFile = data;
                  }
                }
              }
            };
          }
        `);
                await exportMenuItem.click();
                const suggestedName = await (0, helper_js_1.waitForFunction)(async () => {
                    return await frontend.evaluate('window.__suggestedFilename');
                });
                const content = (await frontend.evaluate('window.__writtenFile'));
                chai_1.assert.strictEqual(suggestedName, filename);
                chai_1.assert.isTrue(content.includes(expectedSubstring));
            });
        }
    });
});
//# sourceMappingURL=export_test.js.map