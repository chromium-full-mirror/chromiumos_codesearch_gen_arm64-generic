// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { Crostini } from './crostini.js';
/**
 * Crostini shared path state handler.
 */
class MockCrostini extends Crostini {
    initEnabled() { }
    initVolumeManager(_volumeManager) { }
    setEnabled(_vmName, _containerName, _enabled) { }
    isEnabled(_vmName) {
        return false;
    }
    registerSharedPath(_vmName, _entry) { }
    unregisterSharedPath(_vmName, _entry) { }
    isPathShared(_vmName, _entry) {
        return false;
    }
    canSharePath(_vmName, _entry, _persist) {
        return false;
    }
}
/**
 * Crostini shared path state handler factory for foreground tests. Change it
 * to a mock when tests need to override {CrostiniImpl} behavior.
 */
export function createCrostiniForTest() {
    return new MockCrostini();
}
