// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// TS is complaining `EventMap` is not used and we can't use `_EventMap` here
// because we need to keep the class and interface exactly the same to do
// declaration merge, hence adding the eslint-disable below.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class FilesEventTarget extends EventTarget {
}
