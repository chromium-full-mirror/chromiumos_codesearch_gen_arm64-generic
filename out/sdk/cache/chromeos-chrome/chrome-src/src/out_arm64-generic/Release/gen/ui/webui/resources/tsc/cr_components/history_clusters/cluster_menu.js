// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './history_clusters_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './cluster_menu.html.js';
const ClusterMenuElementBase = I18nMixin(PolymerElement);
class ClusterMenuElement extends ClusterMenuElementBase {
    static get is() {
        return 'cluster-menu';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * Usually this is true, but this can be false if deleting history is
             * prohibited by Enterprise policy.
             */
            allowDeletingHistory_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('allowDeletingHistory'),
            },
            /**
             * Whether the cluster is in the side panel.
             */
            inSidePanel_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('inSidePanel'),
                reflectToAttribute: true,
            },
        };
    }
    //============================================================================
    // Event handlers
    //============================================================================
    onActionMenuButtonClick_(event) {
        this.$.actionMenu.get().showAt(this.$.actionMenuButton);
        event.preventDefault(); // Prevent default browser action (navigation).
    }
    onOpenAllButtonClick_(event) {
        event.preventDefault(); // Prevent default browser action (navigation).
        this.dispatchEvent(new CustomEvent('open-all-visits', {
            bubbles: true,
            composed: true,
        }));
        this.$.actionMenu.get().close();
    }
    onHideAllButtonClick_(event) {
        event.preventDefault(); // Prevent default browser action (navigation).
        this.dispatchEvent(new CustomEvent('hide-all-visits', {
            bubbles: true,
            composed: true,
        }));
        this.$.actionMenu.get().close();
    }
    onRemoveAllButtonClick_(event) {
        event.preventDefault(); // Prevent default browser action (navigation).
        this.dispatchEvent(new CustomEvent('remove-all-visits', {
            bubbles: true,
            composed: true,
        }));
        this.$.actionMenu.get().close();
    }
}
customElements.define(ClusterMenuElement.is, ClusterMenuElement);
