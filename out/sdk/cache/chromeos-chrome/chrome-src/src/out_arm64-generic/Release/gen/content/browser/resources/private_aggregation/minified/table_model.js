// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class TableModel{cols=[];emptyRowText="";sortIdx=-1;rowsChangedListeners;constructor(){this.rowsChangedListeners=new Set}styleRow(_tr,_data){}getRows(){return[]}notifyRowsChanged(){this.rowsChangedListeners.forEach((f=>f()))}}