// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * Provides functions used for personalization search, results of which link to
 * Personalization App.
 * Also provides a way to inject a test implementation for verifying
 * personalization search.
 */
import { SearchHandler } from '../mojom-webui/personalization_search.mojom-webui.js';
let personalizationSearchHandler = null;
export function setPersonalizationSearchHandlerForTesting(testSearchHandler) {
    personalizationSearchHandler = testSearchHandler;
}
export function getPersonalizationSearchHandler() {
    if (!personalizationSearchHandler) {
        personalizationSearchHandler = SearchHandler.getRemote();
    }
    return personalizationSearchHandler;
}
