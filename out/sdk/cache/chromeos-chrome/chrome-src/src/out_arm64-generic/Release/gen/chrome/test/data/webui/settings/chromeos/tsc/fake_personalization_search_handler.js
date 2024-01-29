// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class FakePersonalizationSearchHandler {
    fakeResults_ = [];
    observer_ = null;
    setFakeResults(results) {
        this.fakeResults_ = results;
    }
    async search(_query, _maxNumResults) {
        return { results: this.fakeResults_ };
    }
    addObserver(observer) {
        this.observer_ = observer;
    }
    simulateSearchResultsChanged() {
        if (this.observer_) {
            this.observer_.onSearchResultsChanged();
        }
    }
}
