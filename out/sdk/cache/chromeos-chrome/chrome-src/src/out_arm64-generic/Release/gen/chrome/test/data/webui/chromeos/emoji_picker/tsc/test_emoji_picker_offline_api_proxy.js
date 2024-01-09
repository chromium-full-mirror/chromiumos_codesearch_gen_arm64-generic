// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { EmojiPickerApiProxyImpl, Status } from 'chrome://emoji-picker/emoji_picker.js';
export class TestEmojiPickerApiProxyErrorImpl extends EmojiPickerApiProxyImpl {
    status = Status.kHttpOk;
    noGifs = {
        next: '',
        results: [],
    };
    setNetError() {
        this.status = Status.kNetError;
    }
    setHttpError() {
        this.status = Status.kHttpError;
    }
    getCategories() {
        return Promise.resolve({
            gifCategories: [],
        });
    }
    getFeaturedGifs() {
        return Promise.resolve({
            status: this.status,
            featuredGifs: this.noGifs,
        });
    }
    searchGifs() {
        return Promise.resolve({
            status: this.status,
            searchGifs: this.noGifs,
        });
    }
    getGifsByIds() {
        return Promise.resolve({
            status: this.status,
            selectedGifs: [],
        });
    }
    insertGif() {
        // Fake the backend operation of copying gif to clipboard by doing nothing
    }
}
