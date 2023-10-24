// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import * as PreloadingComponents from '../../../../../../../front_end/panels/application/preloading/components/components.js';
import * as SDK from '../../../../../../../front_end/core/sdk/sdk.js';
import * as Coordinator from '../../../../../../../front_end/ui/components/render_coordinator/render_coordinator.js';
import { assertNotNullOrUndefined } from '../../../../../../../front_end/core/platform/platform.js';
import * as ReportView from '../../../../../../../front_end/ui/components/report_view/report_view.js';
import { assertShadowRoot, getElementsWithinComponent, renderElementIntoDOM, } from '../../../../helpers/DOMHelpers.js';
import { describeWithEnvironment } from '../../../../helpers/EnvironmentHelpers.js';
const { assert } = chai;
const coordinator = Coordinator.RenderCoordinator.RenderCoordinator.instance();
const renderUsedPreloadingView = async (data) => {
    const component = new PreloadingComponents.UsedPreloadingView.UsedPreloadingView();
    component.data = data;
    renderElementIntoDOM(component);
    assertShadowRoot(component.shadowRoot);
    await coordinator.done();
    return component;
};
describeWithEnvironment('UsedPreloadingView', async () => {
    it('renderes prefetch used', async () => {
        const data = {
            pageURL: 'https://example.com/prefetched.html',
            attempts: [
                {
                    action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */,
                    key: {
                        loaderId: 'loaderId:1',
                        action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */,
                        url: 'https://example.com/prefetched.html',
                    },
                    status: "Success" /* SDK.PreloadingModel.PreloadingStatus.Success */,
                    prefetchStatus: null,
                    requestId: 'requestId:1',
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
                {
                    action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */,
                    key: {
                        loaderId: 'loaderId:1',
                        action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */,
                        url: 'https://example.com/prerendered.html',
                    },
                    status: "Failure" /* SDK.PreloadingModel.PreloadingStatus.Failure */,
                    prerenderStatus: "TriggerDestroyed" /* Protocol.Preload.PrerenderFinalStatus.TriggerDestroyed */,
                    disallowedMojoInterface: null,
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
            ],
        };
        const component = await renderUsedPreloadingView(data);
        assertShadowRoot(component.shadowRoot);
        const headers = getElementsWithinComponent(component, 'devtools-report devtools-report-section-header', ReportView.ReportView.ReportSectionHeader);
        const sections = getElementsWithinComponent(component, 'devtools-report devtools-report-section', ReportView.ReportView.ReportSection);
        assert.strictEqual(headers.length, 1);
        assert.strictEqual(sections.length, 2);
        assert.include(headers[0]?.textContent, 'Preloading status');
        assert.include(sections[0]?.textContent, 'This page was successfully prefetched.');
    });
    it('renderes prerender used', async () => {
        const data = {
            pageURL: 'https://example.com/prerendered.html',
            attempts: [
                {
                    action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */,
                    key: {
                        loaderId: 'loaderId:1',
                        action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */,
                        url: 'https://example.com/prefetched.html',
                    },
                    status: "Ready" /* SDK.PreloadingModel.PreloadingStatus.Ready */,
                    prefetchStatus: null,
                    requestId: 'requestId:1',
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
                {
                    action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */,
                    key: {
                        loaderId: 'loaderId:1',
                        action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */,
                        url: 'https://example.com/prerendered.html',
                    },
                    status: "Success" /* SDK.PreloadingModel.PreloadingStatus.Success */,
                    prerenderStatus: null,
                    disallowedMojoInterface: null,
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
            ],
        };
        const component = await renderUsedPreloadingView(data);
        assertShadowRoot(component.shadowRoot);
        const headers = getElementsWithinComponent(component, 'devtools-report devtools-report-section-header', ReportView.ReportView.ReportSectionHeader);
        const sections = getElementsWithinComponent(component, 'devtools-report devtools-report-section', ReportView.ReportView.ReportSection);
        assert.strictEqual(headers.length, 1);
        assert.strictEqual(sections.length, 2);
        assert.include(headers[0]?.textContent, 'Preloading status');
        assert.include(sections[0]?.textContent, 'This page was successfully prerendered.');
    });
    it('renderes prefetch failed', async () => {
        const data = {
            pageURL: 'https://example.com/prefetched.html',
            attempts: [
                {
                    action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */,
                    key: {
                        loaderId: 'loaderId:1',
                        action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */,
                        url: 'https://example.com/prefetched.html',
                    },
                    status: "Failure" /* SDK.PreloadingModel.PreloadingStatus.Failure */,
                    prefetchStatus: "PrefetchFailedPerPageLimitExceeded" /* Protocol.Preload.PrefetchStatus.PrefetchFailedPerPageLimitExceeded */,
                    requestId: 'requestId:1',
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
                {
                    action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */,
                    key: {
                        loaderId: 'loaderId:1',
                        action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */,
                        url: 'https://example.com/prerendered.html',
                    },
                    status: "Failure" /* SDK.PreloadingModel.PreloadingStatus.Failure */,
                    prerenderStatus: "TriggerDestroyed" /* Protocol.Preload.PrerenderFinalStatus.TriggerDestroyed */,
                    disallowedMojoInterface: null,
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
            ],
        };
        const component = await renderUsedPreloadingView(data);
        assertShadowRoot(component.shadowRoot);
        const headers = getElementsWithinComponent(component, 'devtools-report devtools-report-section-header', ReportView.ReportView.ReportSectionHeader);
        const sections = getElementsWithinComponent(component, 'devtools-report devtools-report-section', ReportView.ReportView.ReportSection);
        assert.strictEqual(headers.length, 2);
        assert.strictEqual(sections.length, 3);
        assert.include(headers[0]?.textContent, 'Preloading status');
        assert.include(sections[0]?.textContent, 'The initiating page attempted to prefetch this page\'s URL, but the prefetch failed, so a full navigation was performed instead.');
        assert.include(headers[1]?.textContent, 'Failure reason');
        assert.include(sections[1]?.textContent, 'The prefetch was not performed because the initiating page already has too many prefetches ongoing.');
    });
    it('renderes prerender failed', async () => {
        const data = {
            pageURL: 'https://example.com/prerendered.html',
            attempts: [
                {
                    action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */,
                    key: {
                        loaderId: 'loaderId:1',
                        action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */,
                        url: 'https://example.com/prefetched.html',
                    },
                    status: "Ready" /* SDK.PreloadingModel.PreloadingStatus.Ready */,
                    prefetchStatus: null,
                    requestId: 'requestId:1',
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
                {
                    action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */,
                    key: {
                        loaderId: 'loaderId:1',
                        action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */,
                        url: 'https://example.com/prerendered.html',
                    },
                    status: "Failure" /* SDK.PreloadingModel.PreloadingStatus.Failure */,
                    prerenderStatus: "MojoBinderPolicy" /* Protocol.Preload.PrerenderFinalStatus.MojoBinderPolicy */,
                    disallowedMojoInterface: 'device.mojom.GamepadMonitor',
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
            ],
        };
        const component = await renderUsedPreloadingView(data);
        assertShadowRoot(component.shadowRoot);
        const headers = getElementsWithinComponent(component, 'devtools-report devtools-report-section-header', ReportView.ReportView.ReportSectionHeader);
        const sections = getElementsWithinComponent(component, 'devtools-report devtools-report-section', ReportView.ReportView.ReportSection);
        assert.strictEqual(headers.length, 2);
        assert.strictEqual(sections.length, 3);
        assert.include(headers[0]?.textContent, 'Preloading status');
        assert.include(sections[0]?.textContent, 'The initiating page attempted to prerender this page\'s URL, but the prerender failed, so a full navigation was performed instead.');
        assert.include(headers[1]?.textContent, 'Failure reason');
        assert.include(sections[1]?.textContent, 'The prerendered page used a forbidden JavaScript API that is currently not supported. (Internal Mojo interface: device.mojom.GamepadMonitor)');
    });
    it('renderes prerender -> prefetch downgraded and used', async () => {
        const data = {
            pageURL: 'https://example.com/downgraded.html',
            attempts: [
                {
                    action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */,
                    key: {
                        loaderId: 'loaderId:1',
                        action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */,
                        url: 'https://example.com/downgraded.html',
                    },
                    status: "Success" /* SDK.PreloadingModel.PreloadingStatus.Success */,
                    prefetchStatus: null,
                    requestId: 'requestId:1',
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
                {
                    action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */,
                    key: {
                        loaderId: 'loaderId:1',
                        action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */,
                        url: 'https://example.com/downgraded.html',
                    },
                    status: "Failure" /* SDK.PreloadingModel.PreloadingStatus.Failure */,
                    prerenderStatus: "MojoBinderPolicy" /* Protocol.Preload.PrerenderFinalStatus.MojoBinderPolicy */,
                    disallowedMojoInterface: 'device.mojom.GamepadMonitor',
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
            ],
        };
        const component = await renderUsedPreloadingView(data);
        assertShadowRoot(component.shadowRoot);
        const headers = getElementsWithinComponent(component, 'devtools-report devtools-report-section-header', ReportView.ReportView.ReportSectionHeader);
        const sections = getElementsWithinComponent(component, 'devtools-report devtools-report-section', ReportView.ReportView.ReportSection);
        assert.strictEqual(headers.length, 2);
        assert.strictEqual(sections.length, 3);
        assert.include(headers[0]?.textContent, 'Preloading status');
        assert.include(sections[0]?.textContent, 'The initiating page attempted to prerender this page\'s URL. The prerender failed, but the resulting response body was still used as a prefetch.');
        assert.include(headers[1]?.textContent, 'Failure reason');
        assert.include(sections[1]?.textContent, 'The prerendered page used a forbidden JavaScript API that is currently not supported. (Internal Mojo interface: device.mojom.GamepadMonitor)');
    });
    it('renders no preloading attempts used', async () => {
        const data = {
            pageURL: 'https://example.com/no-preloads.html',
            attempts: [],
        };
        const component = await renderUsedPreloadingView(data);
        assertShadowRoot(component.shadowRoot);
        const headers = getElementsWithinComponent(component, 'devtools-report devtools-report-section-header', ReportView.ReportView.ReportSectionHeader);
        const sections = getElementsWithinComponent(component, 'devtools-report devtools-report-section', ReportView.ReportView.ReportSection);
        assert.strictEqual(headers.length, 1);
        assert.strictEqual(sections.length, 2);
        assert.include(headers[0]?.textContent, 'Preloading status');
        assert.include(sections[0]?.textContent, 'The initiating page did not attempt to preload this page\'s URL.');
    });
    it('renders no preloading attempts used with mismatch', async () => {
        const data = {
            pageURL: 'https://example.com/no-preloads.html',
            attempts: [
                {
                    action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */,
                    key: {
                        loaderId: 'loaderId:1',
                        action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */,
                        url: 'https://example.com/prefetched.html',
                    },
                    status: "Ready" /* SDK.PreloadingModel.PreloadingStatus.Ready */,
                    prefetchStatus: null,
                    requestId: 'requestId:1',
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
                {
                    action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */,
                    key: {
                        loaderId: 'loaderId:1',
                        action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */,
                        url: 'https://example.com/prerendered.html',
                    },
                    status: "Failure" /* SDK.PreloadingModel.PreloadingStatus.Failure */,
                    prerenderStatus: "TriggerDestroyed" /* Protocol.Preload.PrerenderFinalStatus.TriggerDestroyed */,
                    disallowedMojoInterface: null,
                    ruleSetIds: ['ruleSetId:1'],
                    nodeIds: [1],
                },
            ],
        };
        const component = await renderUsedPreloadingView(data);
        assertShadowRoot(component.shadowRoot);
        const headers = getElementsWithinComponent(component, 'devtools-report devtools-report-section-header', ReportView.ReportView.ReportSectionHeader);
        const sections = getElementsWithinComponent(component, 'devtools-report devtools-report-section', ReportView.ReportView.ReportSection);
        assert.strictEqual(headers.length, 3);
        assert.strictEqual(sections.length, 4);
        assert.include(headers[0]?.textContent, 'Preloading status');
        assert.include(sections[0]?.textContent, 'The initiating page did not attempt to preload this page\'s URL.');
        assert.include(headers[1]?.textContent, 'Current URL');
        assert.include(sections[1]?.textContent, 'https://example.com/no-preloads.html');
        assert.include(headers[2]?.textContent, 'URLs being preloaded by the initiating page');
        assertNotNullOrUndefined(sections[2].querySelector('devtools-resources-mismatched-preloading-grid'));
    });
});
//# sourceMappingURL=UsedPreloadingView_test.js.map