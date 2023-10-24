// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import * as Common from '../../../../../front_end/core/common/common.js';
import * as SDK from '../../../../../front_end/core/sdk/sdk.js';
import * as Workspace from '../../../../../front_end/models/workspace/workspace.js';
import * as UI from '../../../../../front_end/ui/legacy/legacy.js';
import * as Snippets from '../../../../../front_end/panels/snippets/snippets.js';
import { describeWithMockConnection } from '../../helpers/MockConnection.js';
import { createTarget } from '../../helpers/EnvironmentHelpers.js';
import { MockExecutionContext } from '../../helpers/MockExecutionContext.js';
describeWithMockConnection('ScriptSnippetFileSystem', () => {
    it('evaluates snippets with user gesture', async () => {
        UI.Context.Context.instance().setFlavor(SDK.RuntimeModel.ExecutionContext, new MockExecutionContext(createTarget()));
        const uiSourceCode = new Workspace.UISourceCode.UISourceCode({}, 'snippet://test.js', Common.ResourceType.resourceTypes.Script);
        await Snippets.ScriptSnippetFileSystem.evaluateScriptSnippet(uiSourceCode);
        UI.Context.Context.instance().setFlavor(SDK.RuntimeModel.ExecutionContext, null);
    });
});
//# sourceMappingURL=ScriptSnippetFileSystem_test.js.map