// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_hidden_style.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import './print_preview_shared.css.js';
import './print_preview_vars.css.js';
import '../strings.m.js';
import './throbber.css.js';
import { assert } from 'chrome://resources/js/assert.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { PromiseResolver } from 'chrome://resources/js/promise_resolver.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './provisional_destination_resolver.html.js';
/**
 * @fileoverview PrintPreviewProvisionalDestinationResolver
 * This class is a dialog for resolving provisional destinations. Provisional
 * destinations are extension controlled destinations that need access to a USB
 * device and have not yet been granted access by the user. Destinations are
 * resolved when the user confirms they wish to grant access and the handler
 * has successfully granted access.
 */
/**
 * States that the provisional destination resolver can be in.
 */
var ResolverState;
(function (ResolverState) {
    ResolverState["INITIAL"] = "INITIAL";
    ResolverState["ACTIVE"] = "ACTIVE";
    ResolverState["GRANTING_PERMISSION"] = "GRANTING_PERMISSION";
    ResolverState["ERROR"] = "ERROR";
    ResolverState["DONE"] = "DONE";
})(ResolverState || (ResolverState = {}));
const PrintPreviewProvisionalDestinationResolverElementBase = I18nMixin(PolymerElement);
export class PrintPreviewProvisionalDestinationResolverElement extends PrintPreviewProvisionalDestinationResolverElementBase {
    constructor() {
        super(...arguments);
        this.promiseResolver_ = null;
    }
    static get is() {
        return 'print-preview-provisional-destination-resolver';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            destinationStore: Object,
            destination_: {
                type: Object,
                value: null,
            },
            state_: {
                type: String,
                value: ResolverState.INITIAL,
            },
        };
    }
    ready() {
        super.ready();
        this.addEventListener('keydown', (e) => this.onKeydown_(e));
    }
    /**
     * @param destination The destination this dialog is needed to resolve.
     * @return Promise that is resolved when the destination has been resolved.
     */
    resolveDestination(destination) {
        this.state_ = ResolverState.ACTIVE;
        this.destination_ = destination;
        this.$.dialog.showModal();
        const icon = this.shadowRoot.querySelector('.extension-icon');
        icon.style.backgroundImage = 'image-set(' +
            'url(chrome://extension-icon/' + this.destination_.extensionId +
            '/24/1) 1x,' +
            'url(chrome://extension-icon/' + this.destination_.extensionId +
            '/48/1) 2x)';
        this.promiseResolver_ = new PromiseResolver();
        return this.promiseResolver_.promise;
    }
    /**
     * Handler for click on OK button. It attempts to resolve the destination.
     * If successful, promiseResolver_.promise is resolved with the
     * resolved destination and the dialog closes.
     */
    startResolveDestination_() {
        assert(this.state_ === ResolverState.ACTIVE, 'Invalid state in request grant permission');
        this.state_ = ResolverState.GRANTING_PERMISSION;
        const destination = this.destination_;
        this.destinationStore.resolveProvisionalDestination(destination)
            .then((resolvedDestination) => {
            if (this.state_ !== ResolverState.GRANTING_PERMISSION) {
                return;
            }
            if (destination.id !== this.destination_.id) {
                return;
            }
            if (resolvedDestination) {
                this.state_ = ResolverState.DONE;
                this.promiseResolver_.resolve(resolvedDestination);
                this.promiseResolver_ = null;
                this.$.dialog.close();
            }
            else {
                this.state_ = ResolverState.ERROR;
            }
        });
    }
    onKeydown_(e) {
        e.stopPropagation();
        if (e.key === 'Escape') {
            this.$.dialog.cancel();
            e.preventDefault();
        }
    }
    onCancelClick_() {
        this.$.dialog.cancel();
    }
    onCancel_() {
        this.promiseResolver_.reject();
        this.state_ = ResolverState.INITIAL;
    }
    /**
     * @return The USB permission message to display.
     */
    getPermissionMessage_() {
        return this.state_ === ResolverState.ERROR ?
            this.i18n('resolveExtensionUSBErrorMessage', this.destination_.extensionName) :
            this.i18n('resolveExtensionUSBPermissionMessage');
    }
    /**
     * @return Whether the resolver is in the ERROR state.
     */
    isInErrorState_() {
        return this.state_ === ResolverState.ERROR;
    }
    /**
     * @return Whether the resolver is in the ACTIVE state.
     */
    isInActiveState_() {
        return this.state_ === ResolverState.ACTIVE;
    }
    /**
     * @return 'throbber' if the resolver is in the GRANTING_PERMISSION state,
     *     empty otherwise.
     */
    getThrobberClass_() {
        return this.state_ === ResolverState.GRANTING_PERMISSION ? 'throbber' : '';
    }
}
customElements.define(PrintPreviewProvisionalDestinationResolverElement.is, PrintPreviewProvisionalDestinationResolverElement);
