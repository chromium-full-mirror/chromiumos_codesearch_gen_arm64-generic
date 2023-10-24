// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import { CrAutoImgElement } from 'chrome://resources/cr_elements/cr_auto_img/cr_auto_img.js';
import { assert } from 'chrome://resources/js/assert.js';
import { Command } from 'chrome://resources/js/browser_command.mojom-webui.js';
import { BrowserCommandProxy } from 'chrome://resources/js/browser_command/browser_command_proxy.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './middle_slot_promo.html.js';
import { NewTabPageProxy } from './new_tab_page_proxy.js';
import { WindowProxy } from './window_proxy.js';
/**
 * List of possible Promo Dismiss actions. This enum must match with the
 * numbering for NtpPromoDismissAction in histogram/enums.xml. These values are
 * persisted to logs. Entries should not be renumbered, removed or reused.
 */
export var PromoDismissAction;
(function (PromoDismissAction) {
    PromoDismissAction[PromoDismissAction["DISMISS"] = 0] = "DISMISS";
    PromoDismissAction[PromoDismissAction["RESTORE"] = 1] = "RESTORE";
})(PromoDismissAction || (PromoDismissAction = {}));
export function recordPromoDismissAction(action) {
    chrome.metricsPrivate.recordEnumerationValue('NewTabPage.Promos.DismissAction', action, Object.keys(PromoDismissAction).length);
}
/**
 * If a promo exists with content and can be shown, an element containing
 * the rendered promo is returned with an id #promoContainer. Otherwise, null is
 * returned.
 */
export async function renderPromo(promo) {
    const browserHandler = NewTabPageProxy.getInstance().handler;
    const promoBrowserCommandHandler = BrowserCommandProxy.getInstance().handler;
    if (!promo) {
        return null;
    }
    const commandIds = [];
    function createAnchor(target) {
        const commandIdMatch = /^command:(\d+)$/.exec(target.url);
        if (!commandIdMatch && !target.url.startsWith('https://')) {
            return null;
        }
        const el = document.createElement('a');
        let commandId = null;
        if (!commandIdMatch) {
            el.href = target.url;
        }
        else {
            commandId = +commandIdMatch[1];
            // Make sure we don't send unsupported commands to the browser.
            if (!Object.values(Command).includes(commandId)) {
                commandId = Command.kUnknownCommand;
            }
            commandIds.push(commandId);
        }
        function onClick(event) {
            if (commandId !== null) {
                promoBrowserCommandHandler.executeCommand(commandId, {
                    middleButton: event.button === 1,
                    altKey: event.altKey,
                    ctrlKey: event.ctrlKey,
                    metaKey: event.metaKey,
                    shiftKey: event.shiftKey,
                });
            }
            browserHandler.onPromoLinkClicked();
        }
        // 'auxclick' handles the middle mouse button which does not trigger a
        // 'click' event.
        el.addEventListener('auxclick', onClick);
        el.addEventListener('click', onClick);
        return el;
    }
    let hasContent = false;
    const promoContainer = document.createElement('div');
    promoContainer.id = 'promoContainer';
    promo.middleSlotParts.forEach(({ image, link, text }) => {
        let el;
        if (image) {
            el = new CrAutoImgElement();
            el.autoSrc = image.imageUrl.url;
            el.staticEncode = true;
            if (image.target) {
                const anchor = createAnchor(image.target);
                if (anchor) {
                    anchor.appendChild(el);
                    el = anchor;
                }
            }
            el.classList.add('image');
        }
        else if (link) {
            el = createAnchor(link.url);
        }
        else if (text) {
            el = document.createElement('span');
        }
        const linkOrText = link || text;
        if (el && linkOrText) {
            el.innerText = linkOrText.text;
        }
        if (el) {
            hasContent = true;
            promoContainer.appendChild(el);
        }
    });
    const canShow = (await Promise.all(commandIds.map(commandId => promoBrowserCommandHandler.canExecuteCommand(commandId))))
        .every(({ canExecute }) => canExecute);
    if (hasContent && canShow) {
        browserHandler.onPromoRendered(WindowProxy.getInstance().now(), promo.logUrl || null);
        return { container: promoContainer, id: promo.id };
    }
    return null;
}
// Element that requests and renders the middle-slot promo. The element is
// hidden until the promo is rendered, If no promo exists or the promo is empty,
// the element remains hidden.
export class MiddleSlotPromoElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.eventTracker_ = new EventTracker();
        this.setPromoListenerId_ = null;
    }
    static get is() {
        return 'ntp-middle-slot-promo';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            shownMiddleSlotPromoId_: {
                type: String,
                reflectToAttribute: true,
            },
            promo_: {
                type: Object,
                observer: 'onPromoChange_',
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.setPromoListenerId_ =
            NewTabPageProxy.getInstance().callbackRouter.setPromo.addListener((promo) => {
                this.promo_ = promo;
            });
        this.eventTracker_.add(window, 'keydown', this.onWindowKeydown_.bind(this));
        NewTabPageProxy.getInstance().handler.updatePromoData();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.eventTracker_.removeAll();
        NewTabPageProxy.getInstance().callbackRouter.removeListener(this.setPromoListenerId_);
    }
    onPromoChange_() {
        renderPromo(this.promo_).then(promo => {
            if (!promo) {
                this.$.promoAndDismissContainer.hidden = true;
            }
            else {
                const promoContainer = this.shadowRoot.getElementById('promoContainer');
                if (promoContainer) {
                    promoContainer.remove();
                }
                if (loadTimeData.getBoolean('middleSlotPromoDismissalEnabled')) {
                    this.shownMiddleSlotPromoId_ = promo.id ?? '';
                }
                const renderedPromoContainer = promo.container;
                assert(renderedPromoContainer);
                this.$.promoAndDismissContainer.prepend(renderedPromoContainer);
                this.$.promoAndDismissContainer.hidden = false;
            }
            this.dispatchEvent(new Event('ntp-middle-slot-promo-loaded', { bubbles: true, composed: true }));
        });
    }
    onWindowKeydown_(e) {
        let ctrlKeyPressed = e.ctrlKey;
        // 
        if (ctrlKeyPressed && e.key === 'z') {
            this.onUndoDismissPromoButtonClick_();
        }
    }
    onDismissPromoButtonClick_() {
        assert(this.$.promoAndDismissContainer);
        this.$.promoAndDismissContainer.hidden = true;
        NewTabPageProxy.getInstance().handler.blocklistPromo(this.shownMiddleSlotPromoId_);
        this.blocklistedMiddleSlotPromoId_ = this.shownMiddleSlotPromoId_;
        this.$.dismissPromoButtonToast.show();
        recordPromoDismissAction(PromoDismissAction.DISMISS);
    }
    onUndoDismissPromoButtonClick_() {
        assert(this.$.promoAndDismissContainer);
        NewTabPageProxy.getInstance().handler.undoBlocklistPromo(this.blocklistedMiddleSlotPromoId_);
        this.$.promoAndDismissContainer.hidden = false;
        this.$.dismissPromoButtonToast.hide();
        recordPromoDismissAction(PromoDismissAction.RESTORE);
    }
}
customElements.define(MiddleSlotPromoElement.is, MiddleSlotPromoElement);
