// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'settings-guest-os-container-select' is a component enabling a
 * user to select a target container from a list stored in prefs.
 */
import 'chrome://resources/cr_elements/md_select.css.js';
import '../settings_shared.css.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { cast } from '../assert_extras.js';
import { getTemplate } from './guest_os_container_select.html.js';
export function equalContainerId(first, second) {
    return first.vm_name === second.vm_name &&
        first.container_name === second.container_name;
}
export function containerLabel(id, defaultVmName) {
    if (defaultVmName !== null && id.vm_name === defaultVmName) {
        return id.container_name;
    }
    return id.vm_name + ':' + id.container_name;
}
export class ContainerSelectElement extends PolymerElement {
    static get is() {
        return 'settings-guest-os-container-select';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            selectedContainerId: {
                type: Object,
                notify: true,
            },
            defaultVmName: {
                type: String,
                value: null,
            },
            /**
             * List of containers that are already stored in the settings.
             */
            containers: {
                type: Array,
                value() {
                    return [];
                },
            },
        };
    }
    onSelectContainer_(e) {
        const index = cast(e.target, HTMLSelectElement).selectedIndex;
        if (index >= 0 && index < this.containers.length) {
            this.selectedContainerId = this.containers[index].id;
        }
    }
    containerLabel_(id) {
        return containerLabel(id, this.defaultVmName);
    }
}
customElements.define(ContainerSelectElement.is, ContainerSelectElement);
