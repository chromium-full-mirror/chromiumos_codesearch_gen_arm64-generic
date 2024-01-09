// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestSeaPenProvider extends TestBrowserProxy {
    images = [
        {
            id: 1,
            image: { url: 'https://sea-pen-images.googleusercontent.com/1' },
        },
        {
            id: 2,
            image: { url: 'https://sea-pen-images.googleusercontent.com/2' },
        },
        {
            id: 3,
            image: { url: 'https://sea-pen-images.googleusercontent.com/3' },
        },
        {
            id: 4,
            image: { url: 'https://sea-pen-images.googleusercontent.com/4' },
        },
    ];
    recentImages = [
        { path: '/sea_pen/111.jpg' },
        { path: '/sea_pen/222.jpg' },
        { path: '/sea_pen/333.jpg' },
    ];
    recentImageData = {
        '/sea_pen/111.jpg': {
            url: { url: 'data:image/jpeg;base64,image111data' },
            queryInfo: 'query 1',
        },
        '/sea_pen/222.jpg': {
            url: { url: 'data:image/jpeg;base64,image222data' },
            queryInfo: 'query 2',
        },
        '/sea_pen/333.jpg': {
            url: { url: 'data:image/jpeg;base64,image333data' },
            queryInfo: 'query 3',
        },
    };
    constructor() {
        super([
            'searchWallpaper',
            'selectSeaPenThumbnail',
            'selectRecentSeaPenImage',
            'getRecentSeaPenImages',
            'getRecentSeaPenImageThumbnail',
            'deleteRecentSeaPenImage',
        ]);
    }
    searchWallpaper(query) {
        this.methodCalled('searchWallpaper', query);
        return Promise.resolve({ images: this.images });
    }
    selectSeaPenThumbnail(id) {
        this.methodCalled('selectSeaPenThumbnail', id);
        return Promise.resolve({ success: true });
    }
    selectRecentSeaPenImage(filePath) {
        this.methodCalled('selectRecentSeaPenImage', filePath);
        return Promise.resolve({ success: true });
    }
    getRecentSeaPenImages() {
        this.methodCalled('getRecentSeaPenImages');
        return Promise.resolve({ images: this.recentImages });
    }
    getRecentSeaPenImageThumbnail(filePath) {
        this.methodCalled('getRecentSeaPenImageThumbnail', filePath);
        return Promise.resolve({ url: this.recentImageData[filePath.path].url });
    }
    deleteRecentSeaPenImage(filePath) {
        this.methodCalled('deleteRecentSeaPenImage', filePath);
        this.recentImages.splice(this.recentImages.indexOf(filePath), 1);
        return Promise.resolve({ success: true });
    }
}
