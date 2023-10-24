// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import * as Host from '../../../../../front_end/core/host/host.js';
import * as Extensions from '../../../../../front_end/models/extensions/extensions.js';
import { describeWithEnvironment, setupActionRegistry } from '../../helpers/EnvironmentHelpers.js';
import { describeWithMockConnection } from '../../helpers/MockConnection.js';
export function describeWithDevtoolsExtension(title, extension, fn) {
    const extensionDescriptor = {
        startPage: `${window.location.origin}/blank.html`,
        name: 'TestExtension',
        exposeExperimentalAPIs: true,
        allowFileAccess: false,
        ...extension,
    };
    const context = {
        extensionDescriptor,
        chrome: {},
    };
    function setup() {
        const server = Extensions.ExtensionServer.ExtensionServer.instance({ forceNew: true });
        sinon.stub(server, 'addExtensionFrame');
        sinon.stub(Host.InspectorFrontendHost.InspectorFrontendHostInstance, 'setInjectedScriptForOrigin')
            .callsFake((origin, _script) => {
            if (origin === window.location.origin) {
                const chrome = {};
                window.chrome = chrome;
                self.injectedExtensionAPI(extensionDescriptor, 'main', 'dark', [], () => { }, 1, window);
                context.chrome = chrome;
            }
        });
        server.addExtension(extensionDescriptor);
    }
    function cleanup() {
        const chrome = {};
        window.chrome = chrome;
        context.chrome = chrome;
    }
    return describeWithMockConnection(`with-extension-${title}`, function () {
        beforeEach(cleanup);
        beforeEach(setup);
        afterEach(cleanup);
        describeWithEnvironment(title, function () {
            setupActionRegistry();
            fn.call(this, context);
        });
    });
}
describeWithDevtoolsExtension.only = function (title, extension, fn) {
    // eslint-disable-next-line rulesdir/no_only
    return describe.only('.only', function () {
        return describeWithDevtoolsExtension(title, extension, fn);
    });
};
//# sourceMappingURL=helpers.js.map