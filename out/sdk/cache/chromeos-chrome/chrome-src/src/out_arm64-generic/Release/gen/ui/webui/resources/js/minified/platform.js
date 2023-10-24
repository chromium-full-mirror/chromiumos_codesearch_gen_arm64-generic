// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export const isMac=/Mac/.test(navigator.platform);export const isWindows=/Win/.test(navigator.platform);export const isChromeOS=(()=>{let returnValue=false;returnValue=true;return returnValue})();export const isLacros=(()=>{let returnValue=false;return returnValue})();export const isLinux=/Linux/.test(navigator.userAgent);export const isAndroid=/Android/.test(navigator.userAgent);export const isIOS=/CriOS/.test(navigator.userAgent);