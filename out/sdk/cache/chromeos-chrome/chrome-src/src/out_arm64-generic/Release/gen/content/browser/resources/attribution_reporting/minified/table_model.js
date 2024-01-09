// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class TableModel{cols;sortIdx;emptyRowText;rowsChangedListeners=new Set;constructor(cols,sortIdx,emptyRowText){this.cols=cols;this.sortIdx=sortIdx;this.emptyRowText=emptyRowText}styleRow(_tr,_data){}notifyRowsChanged(){this.rowsChangedListeners.forEach((f=>f()))}}