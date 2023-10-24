// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { makeStoreClientMixin } from 'chrome://resources/cr_elements/store_client/store_client.js';
import { Store } from './store.js';
// `StoreClientMixin` binds Polymer elements to the Bookmarks store instance.
export const StoreClientMixin = makeStoreClientMixin(Store.getInstance);
