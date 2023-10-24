// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import * as Common from '../../../../front_end/core/common/common.js';
import * as TextUtils from '../../../../front_end/models/text_utils/text_utils.js';
import * as Bindings from '../../../../front_end/models/bindings/bindings.js';
import * as Workspace from '../../../../front_end/models/workspace/workspace.js';
import * as Persistence from '../../../../front_end/models/persistence/persistence.js';
export function createContentProviderUISourceCodes(options) {
    const workspace = Workspace.Workspace.WorkspaceImpl.instance();
    const projectType = options.projectType || Workspace.Workspace.projectTypes.Formatter;
    assert.notEqual(projectType, Workspace.Workspace.projectTypes.FileSystem, 'For creating file system UISourceCodes use \'createFileSystemUISourceCode\' helper.');
    const project = new Bindings.ContentProviderBasedProject.ContentProviderBasedProject(workspace, options.projectId || 'PROJECT_ID', projectType, 'Test project', false /* isServiceProject*/);
    if (options.target) {
        Bindings.NetworkProject.NetworkProject.setTargetForProject(project, options.target);
    }
    const uiSourceCodes = [];
    for (const item of options.items) {
        const resourceType = item.resourceType || Common.ResourceType.ResourceType.fromMimeType(item.mimeType);
        const uiSourceCode = project.createUISourceCode(item.url, resourceType);
        const contentProvider = TextUtils.StaticContentProvider.StaticContentProvider.fromString(item.url, resourceType, item.content || '');
        const metadata = item.metadata || new Workspace.UISourceCode.UISourceCodeMetadata(null, null);
        project.addUISourceCodeWithProvider(uiSourceCode, contentProvider, metadata, item.mimeType);
        uiSourceCodes.push(uiSourceCode);
    }
    return { project, uiSourceCodes };
}
export function createContentProviderUISourceCode(options) {
    const { url, content, mimeType, metadata, projectType, projectId, target } = options;
    const { project, uiSourceCodes } = createContentProviderUISourceCodes({ items: [{ url, content, mimeType, metadata }], projectType, projectId, target });
    return { project, uiSourceCode: uiSourceCodes[0] };
}
class TestPlatformFileSystem extends Persistence.PlatformFileSystem.PlatformFileSystem {
    #mimeType;
    #autoMapping;
    constructor(path, type, mimeType, autoMapping) {
        super(path, type);
        this.#mimeType = mimeType;
        this.#autoMapping = autoMapping;
    }
    supportsAutomapping() {
        return this.#autoMapping;
    }
    mimeFromPath(_path) {
        return this.#mimeType;
    }
}
class TestFileSystem extends Persistence.FileSystemWorkspaceBinding.FileSystem {
    #content;
    #metadata;
    constructor(options) {
        super(options.fileSystemWorkspaceBinding, options.platformFileSystem, options.workspace);
        this.#content = options.content;
        this.#metadata = options.metadata;
    }
    requestFileContent(_uiSourceCode) {
        return Promise.resolve({ content: this.#content, isEncoded: false });
    }
    requestMetadata(_uiSourceCode) {
        return Promise.resolve(this.#metadata);
    }
}
export function createFileSystemUISourceCode(options) {
    const workspace = Workspace.Workspace.WorkspaceImpl.instance();
    const isolatedFileSystemManager = Persistence.IsolatedFileSystemManager.IsolatedFileSystemManager.instance();
    const fileSystemWorkspaceBinding = new Persistence.FileSystemWorkspaceBinding.FileSystemWorkspaceBinding(isolatedFileSystemManager, workspace);
    const fileSystemPath = (options.fileSystemPath || '');
    const type = options.type || '';
    const content = options.content || '';
    const platformFileSystem = new TestPlatformFileSystem(fileSystemPath, type, options.mimeType, Boolean(options.autoMapping));
    const metadata = options.metadata || new Workspace.UISourceCode.UISourceCodeMetadata(null, null);
    const project = new TestFileSystem({ fileSystemWorkspaceBinding, platformFileSystem, workspace, content, metadata });
    const uiSourceCode = project.createUISourceCode(options.url, Common.ResourceType.ResourceType.fromMimeType(options.mimeType));
    project.addUISourceCode(uiSourceCode);
    return { uiSourceCode, project };
}
export function setupMockedUISourceCode(url = 'https://example.com/') {
    const projectStub = sinon.createStubInstance(Bindings.ContentProviderBasedProject.ContentProviderBasedProject);
    const urlStringTagExample = url;
    const contentTypeStub = sinon.createStubInstance(Common.ResourceType.ResourceType);
    const uiSourceCode = new Workspace.UISourceCode.UISourceCode(projectStub, urlStringTagExample, contentTypeStub);
    return { sut: uiSourceCode, projectStub: projectStub, contentTypeStub: contentTypeStub };
}
//# sourceMappingURL=UISourceCodeHelpers.js.map