// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import * as Common from '../../../../../front_end/core/common/common.js';
import { assertNotNullOrUndefined } from '../../../../../front_end/core/platform/platform.js';
import * as SDK from '../../../../../front_end/core/sdk/sdk.js';
import * as Network from '../../../../../front_end/panels/network/network.js';
import { renderElementIntoDOM } from '../../helpers/DOMHelpers.js';
import { describeWithLocale } from '../../helpers/EnvironmentHelpers.js';
async function contentData() {
    const content = '<style> p { color: red; }</style><link rel="stylesheet" ref="http://devtools-frontend.test/style">';
    return new SDK.ContentData.ContentData(content, false, Common.ResourceType.resourceTypes.Stylesheet, 'text/css');
}
function renderPreviewView(request) {
    const component = new Network.RequestPreviewView.RequestPreviewView(request);
    const div = document.createElement('div');
    renderElementIntoDOM(div);
    component.markAsRoot();
    component.show(div);
    return component;
}
describeWithLocale('RequestPreviewView', () => {
    it('prevents previewed html from making same-site requests', async () => {
        const request = SDK.NetworkRequest.NetworkRequest.create('requestId', 'http://devtools-frontend.test/content', '', null, null, null);
        request.setContentDataProvider(contentData);
        request.mimeType = "text/html" /* SDK.MimeType.MimeType.HTML */;
        const component = renderPreviewView(request);
        const widget = await component.showPreview();
        const frame = widget.contentElement.querySelector('iframe');
        expect(frame).to.be.not.null;
        expect(frame?.getAttribute('csp')).to.eql('default-src \'none\';img-src data:;style-src \'unsafe-inline\'');
        component.detach();
    });
    it('does not add utf-8 charset to the data URL for the HTML preview for already decoded content', async () => {
        const request = SDK.NetworkRequest.NetworkRequest.create('requestId', 'http://devtools-frontend.test/index.html', '', null, null, null);
        request.setContentDataProvider(() => Promise.resolve(new SDK.ContentData.ContentData('<!DOCTYPE html>\n<p>Iñtërnâtiônàlizætiøn☃𝌆</p>', false, Common.ResourceType.resourceTypes.Document, 'text/html', 'utf-16')));
        request.mimeType = "text/html" /* SDK.MimeType.MimeType.HTML */;
        request.responseHeaders = [{ name: 'Content-Type', value: 'text/html; charset=utf-16' }];
        assert.strictEqual(request.charset(), 'utf-16');
        const component = renderPreviewView(request);
        const widget = await component.showPreview();
        const frame = widget.contentElement.querySelector('iframe');
        assertNotNullOrUndefined(frame);
        assert.notInclude(frame.src, 'charset=utf-8');
        assert.notInclude(frame.src, ' base64');
    });
    it('does add the correct charset to the data URL for the HTML preview for base64 content', async () => {
        const request = SDK.NetworkRequest.NetworkRequest.create('requestId', 'http://devtools-frontend.test/index.html', '', null, null, null);
        // UTF-16 + base64 encoded "<!DOCTYPE html>\n<p>Iñtërnâtiônàlizætiøn☃𝌆</p>".
        request.setContentDataProvider(() => Promise.resolve(new SDK.ContentData.ContentData('//48ACEARABPAEMAVABZAFAARQAgAGgAdABtAGwAPgAKADwAcAA+AEkA8QB0AOsAcgBuAOIAdABpAPQAbgDgAGwAaQB6AOYAdABpAPgAbgADJjTYBt88AC8AcAA+AAoA', true, Common.ResourceType.resourceTypes.Document, 'text/html', 'utf-16')));
        request.mimeType = "text/html" /* SDK.MimeType.MimeType.HTML */;
        request.responseHeaders = [{ name: 'Content-Type', value: 'text/html; charset=utf-16' }];
        assert.strictEqual(request.charset(), 'utf-16');
        const component = renderPreviewView(request);
        const widget = await component.showPreview();
        const frame = widget.contentElement.querySelector('iframe');
        assertNotNullOrUndefined(frame);
        assert.include(frame.src, 'charset=utf-16');
        assert.include(frame.src, 'base64');
    });
});
//# sourceMappingURL=RequestPreviewView_test.js.map