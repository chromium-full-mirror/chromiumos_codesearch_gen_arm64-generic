// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
import { FeedbackServiceProvider, HelpContentProvider } from './os_feedback_ui.mojom-webui.js';
/**
 * @fileoverview
 * Provides singleton access to mojo interfaces with the ability
 * to override them with test/fake implementations.
 */
let feedbackServiceProvider = null;
let helpContentProvider = null;
export function setFeedbackServiceProviderForTesting(testProvider) {
    feedbackServiceProvider = testProvider;
}
export function setHelpContentProviderForTesting(testProvider) {
    helpContentProvider = testProvider;
}
export function getFeedbackServiceProvider() {
    if (!feedbackServiceProvider) {
        feedbackServiceProvider = FeedbackServiceProvider.getRemote();
    }
    assert(feedbackServiceProvider);
    return feedbackServiceProvider;
}
export function getHelpContentProvider() {
    if (!helpContentProvider) {
        helpContentProvider = HelpContentProvider.getRemote();
    }
    assert(helpContentProvider);
    return helpContentProvider;
}
