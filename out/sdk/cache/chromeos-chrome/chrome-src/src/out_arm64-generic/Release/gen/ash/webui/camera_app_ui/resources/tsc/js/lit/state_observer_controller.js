import { assert } from '../assert.js';
import * as state from '../state.js';
export class StateObserverController {
    constructor(host, state) {
        this.host = host;
        this.state = state;
        this.observer = null;
        this.value = false;
        this.host.addController(this);
    }
    hostConnected() {
        this.observer = (val) => {
            this.value = val;
            this.host.requestUpdate();
        };
        state.addObserver(this.state, this.observer);
        this.value = state.get(this.state);
        this.host.requestUpdate();
    }
    hostDisconnected() {
        assert(this.observer !== null);
        state.removeObserver(this.state, this.observer);
        this.observer = null;
    }
}
