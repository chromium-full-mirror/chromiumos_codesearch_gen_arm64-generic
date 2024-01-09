// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import * as SDK from '../../../../../../../front_end/core/sdk/sdk.js';
import * as PreloadingComponents from '../../../../../../../front_end/panels/application/preloading/components/components.js';
import * as Coordinator from '../../../../../../../front_end/ui/components/render_coordinator/render_coordinator.js';
import { assertShadowRoot, renderElementIntoDOM, } from '../../../../helpers/DOMHelpers.js';
import { describeWithEnvironment } from '../../../../helpers/EnvironmentHelpers.js';
import { assertGridContents } from '../../../../ui/components/DataGridHelpers.js';
const coordinator = Coordinator.RenderCoordinator.RenderCoordinator.instance();
async function renderPreloadingMismatchedHeadersGrid(data) {
    const component = new PreloadingComponents.PreloadingMismatchedHeadersGrid.PreloadingMismatchedHeadersGrid();
    component.data = data;
    renderElementIntoDOM(component);
    assertShadowRoot(component.shadowRoot);
    await coordinator.done();
    return component;
}
async function testPreloadingMismatchedHeadersGrid(recievedMismatchedHeaders, rowExpected) {
    const data = {
        action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */,
        key: {
            loaderId: 'loaderId:1',
            action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */,
            url: 'https://example.com/prerendered.html',
        },
        status: "Failure" /* SDK.PreloadingModel.PreloadingStatus.Failure */,
        prerenderStatus: "ActivationNavigationParameterMismatch" /* Protocol.Preload.PrerenderFinalStatus.ActivationNavigationParameterMismatch */,
        disallowedMojoInterface: null,
        mismatchedHeaders: recievedMismatchedHeaders,
        ruleSetIds: ['ruleSetId:1'],
        nodeIds: [1],
    };
    const component = await renderPreloadingMismatchedHeadersGrid(data);
    assertShadowRoot(component.shadowRoot);
    assertGridContents(component, ['Header name', 'Value in initial navigation', 'Value in activation navigation'], rowExpected);
}
describeWithEnvironment('PreloadingMismatchedHeadersGrid', async () => {
    it('one mismatched header without missing', async () => {
        await testPreloadingMismatchedHeadersGrid([
            {
                headerName: 'sec-ch-ua-platform',
                initialValue: 'Linux',
                activationValue: 'Android',
            },
        ], [
            ['sec-ch-ua-platform', 'Linux', 'Android'],
        ]);
    });
    it('one mismatched header with an initial value missing', async () => {
        await testPreloadingMismatchedHeadersGrid([
            {
                headerName: 'sec-ch-ua-platform',
                initialValue: undefined,
                activationValue: 'Android',
            },
        ], [
            ['sec-ch-ua-platform', '(missing)', 'Android'],
        ]);
    });
    it('one mismatched header with an activation missing', async () => {
        await testPreloadingMismatchedHeadersGrid([
            {
                headerName: 'sec-ch-ua-platform',
                initialValue: 'Linux',
                activationValue: undefined,
            },
        ], [
            ['sec-ch-ua-platform', 'Linux', '(missing)'],
        ]);
    });
    it('multiple mismatched header with one of the value missing', async () => {
        await testPreloadingMismatchedHeadersGrid([
            {
                headerName: 'sec-ch-ua',
                initialValue: '"Not_A Brand";v="8", "Chromium";v="120"',
                activationValue: undefined,
            },
            {
                headerName: 'sec-ch-ua-mobile',
                initialValue: '?0',
                activationValue: '?1',
            },
        ], [
            ['sec-ch-ua', '"Not_A Brand";v="8", "Chromium";v="120"', '(missing)'],
            ['sec-ch-ua-mobile', '?0', '?1'],
        ]);
    });
    it('multiple mismatched header with one of each value missing', async () => {
        await testPreloadingMismatchedHeadersGrid([
            {
                headerName: 'sec-ch-ua',
                initialValue: '"Not_A Brand";v="8", "Chromium";v="120"',
                activationValue: undefined,
            },
            {
                headerName: 'sec-ch-ua-mobile',
                initialValue: undefined,
                activationValue: '?1',
            },
            {
                headerName: 'sec-ch-ua-platform',
                initialValue: 'Linux',
                activationValue: undefined,
            },
        ], [
            ['sec-ch-ua', '"Not_A Brand";v="8", "Chromium";v="120"', '(missing)'],
            ['sec-ch-ua-mobile', '(missing)', '?1'],
            ['sec-ch-ua-platform', 'Linux', '(missing)'],
        ]);
    });
});
//# sourceMappingURL=PreloadingMismatchedHeadersGrid_test.js.map