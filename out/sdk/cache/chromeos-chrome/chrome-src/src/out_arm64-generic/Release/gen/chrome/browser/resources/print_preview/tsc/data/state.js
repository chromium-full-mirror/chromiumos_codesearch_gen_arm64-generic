// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export var State;
(function (State) {
    State[State["NOT_READY"] = 0] = "NOT_READY";
    State[State["READY"] = 1] = "READY";
    State[State["HIDDEN"] = 2] = "HIDDEN";
    State[State["PRINTING"] = 3] = "PRINTING";
    State[State["SYSTEM_DIALOG"] = 4] = "SYSTEM_DIALOG";
    State[State["ERROR"] = 5] = "ERROR";
    State[State["FATAL_ERROR"] = 6] = "FATAL_ERROR";
    State[State["CLOSING"] = 7] = "CLOSING";
})(State || (State = {}));
/**
 * These values are persisted to logs. New entries should replace MAX_BUCKET but
 * existing entries should not be renumbered and numeric values should never be
 * reused.
 */
export var Error;
(function (Error) {
    Error[Error["NONE"] = 0] = "NONE";
    Error[Error["INVALID_TICKET"] = 1] = "INVALID_TICKET";
    Error[Error["INVALID_PRINTER"] = 2] = "INVALID_PRINTER";
    Error[Error["NO_DESTINATIONS"] = 3] = "NO_DESTINATIONS";
    Error[Error["PREVIEW_FAILED"] = 4] = "PREVIEW_FAILED";
    Error[Error["PRINT_FAILED"] = 5] = "PRINT_FAILED";
    Error[Error["MAX_BUCKET"] = 6] = "MAX_BUCKET";
})(Error || (Error = {}));
export class PrintPreviewStateElement extends PolymerElement {
    static get is() {
        return 'print-preview-state';
    }
    static get properties() {
        return {
            state: {
                type: Number,
                notify: true,
                value: State.NOT_READY,
            },
            error: {
                type: Number,
                notify: true,
                value: Error.NONE,
            },
        };
    }
    transitTo(newState) {
        switch (newState) {
            case (State.NOT_READY):
                assert(this.state === State.NOT_READY || this.state === State.READY ||
                    this.state === State.ERROR);
                break;
            case (State.READY):
                assert(this.state === State.ERROR || this.state === State.NOT_READY ||
                    this.state === State.PRINTING);
                break;
            case (State.HIDDEN):
                assert(this.state === State.READY);
                break;
            case (State.PRINTING):
                assert(this.state === State.READY || this.state === State.HIDDEN);
                break;
            case (State.SYSTEM_DIALOG):
                assert(this.state !== State.HIDDEN && this.state !== State.PRINTING &&
                    this.state !== State.CLOSING);
                break;
            case (State.ERROR):
                assert(this.state === State.ERROR || this.state === State.NOT_READY ||
                    this.state === State.READY);
                break;
            case (State.CLOSING):
                assert(this.state !== State.HIDDEN);
                break;
        }
        this.state = newState;
        if (newState !== State.ERROR && newState !== State.FATAL_ERROR) {
            this.error = Error.NONE;
        }
    }
}
customElements.define(PrintPreviewStateElement.is, PrintPreviewStateElement);
