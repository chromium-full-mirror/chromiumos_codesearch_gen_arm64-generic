// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import{assert}from"chrome://resources/js/assert.js";import{ShortcutSearchHandler}from"../shortcut_types.js";let shortcutSearchHandler=null;export function setShortcutSearchHandlerForTesting(testHandler){shortcutSearchHandler=testHandler}export function getShortcutSearchHandler(){if(!shortcutSearchHandler){shortcutSearchHandler=ShortcutSearchHandler.getRemote()}assert(!!shortcutSearchHandler);return shortcutSearchHandler}