// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { callbackRouter, pageHandler } from './page_handler.js';
window.pageHandler = pageHandler;
window.callbackRouter = callbackRouter;
(async () => {
    const content = document.querySelector('#app-top-bar');
    content.textContent = 'Welcome to the Face ML app!';
    const { userInfo } = await pageHandler.getCurrentUserInformation();
    document.querySelector('#user-name').value =
        userInfo.userName;
    document.querySelector('#is-signed-in').value =
        userInfo.isSignedIn ? 'Signed In' : 'Not signed in';
    const topbar = document.querySelector('#app-top-bar');
    topbar.style.display = 'none';
    //(TODO:b/243653034): Populate topbar via page handler.
})();
