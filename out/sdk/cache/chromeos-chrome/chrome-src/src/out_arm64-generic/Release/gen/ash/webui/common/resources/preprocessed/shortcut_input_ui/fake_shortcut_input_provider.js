// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { FakeObservables } from '../fake_observables.js';
export class FakeShortcutInputProvider {
    constructor() {
        this.observables = new FakeObservables();
        this.registerObservables();
    }
    getPrerewrittenKeyEvent() {
        return this.prerewrittenKeyEvent;
    }
    sendKeyPressEvent(prerewrittenKeyEvent, keyEvent) {
        this.observables.setObservableData('ShortcutInputObserver_OnShortcutInputEventPressed', [{ prerewrittenKeyEvent, keyEvent }]);
        this.observables.trigger('ShortcutInputObserver_OnShortcutInputEventPressed');
    }
    sendKeyReleaseEvent(prerewrittenKeyEvent, keyEvent) {
        this.observables.setObservableData('ShortcutInputObserver_OnShortcutInputEventReleased', [{ prerewrittenKeyEvent, keyEvent }]);
        this.observables.trigger('ShortcutInputObserver_OnShortcutInputEventReleased');
    }
    startObservingShortcutInput(observer) {
        this.observables.observe('ShortcutInputObserver_OnShortcutInputEventPressed', (detail) => {
            observer.onShortcutInputEventPressed(detail.prerewrittenKeyEvent, detail.keyEvent);
            this.prerewrittenKeyEvent = detail.prerewrittenKeyEvent;
        });
        this.observables.observe('ShortcutInputObserver_OnShortcutInputEventReleased', (detail) => {
            observer.onShortcutInputEventReleased(detail.prerewrittenKeyEvent, detail.keyEvent);
            this.prerewrittenKeyEvent = detail.prerewrittenKeyEvent;
        });
    }
    stopObservingShortcutInput() {
        this.observables = new FakeObservables();
        this.registerObservables();
    }
    registerObservables() {
        this.observables.register('ShortcutInputObserver_OnShortcutInputEventPressed');
        this.observables.register('ShortcutInputObserver_OnShortcutInputEventReleased');
    }
}
