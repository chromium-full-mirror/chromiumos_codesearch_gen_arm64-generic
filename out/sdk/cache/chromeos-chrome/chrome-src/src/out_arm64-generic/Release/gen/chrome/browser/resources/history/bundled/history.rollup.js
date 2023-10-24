import { html, dedupingMixin, PolymerElement, mixinBehaviors, Polymer, dom, dashToCamelCase, afterNextRender, Debouncer, microTask } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { a as assert, b as assertNotReached, E as EventTracker, P as PaperRippleBehavior, g as getFaviconForPageURL, I as IronScrollTargetBehavior, F as FocusOutlineManager, c as IronResizableBehavior, d as FocusRow, f as focusWithoutInk, B as BrowserServiceImpl, e as getDeepActiveElement, h as BROWSING_GAP_TIME, i as IronA11yAnnouncer, j as isMac, k as hasKeyModifiers, H as HistoryPageViewHistogram } from './shared.rollup.js';
export { C as CrActionMenuElement, l as CrDialogElement, n as HistorySearchedLabelElement, o as HistorySyncedDeviceCardElement, p as HistorySyncedDeviceManagerElement, S as SYNCED_TABS_HISTOGRAM_NAME, m as SyncedTabsHistogram } from './shared.rollup.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { mojo } from 'chrome://resources/mojo/mojo/public/js/bindings.js';
import './strings.m.js';
import { addWebUiListener, removeWebUiListener } from 'chrome://resources/js/cr.js';

const template$3 = html `
<custom-style>
  <style>
html{--annotation-background-color:var(--google-green-50);--annotation-text-color:var(--google-green-600);--border-color:var(--google-grey-300);--entity-image-background-color:var(--google-grey-50);--icon-color:var(--google-grey-600);--url-color:var(--google-blue-600);--side-panel-url-color:var(--google-grey-700)}@media (prefers-color-scheme:dark){html{--annotation-background-color:var(--google-green-300);--annotation-text-color:var(--google-grey-900);--border-color:var(--google-grey-700);--entity-image-background-color:var(--google-grey-800);--icon-color:white;--url-color:var(--google-blue-300);--side-panel-url-color:var(--google-grey-500)}}html{--card-max-width:960px;--card-min-width:550px;--card-padding-between:16px;--card-padding-side:24px;--first-card-padding-top:24px;--cluster-max-width:var(--card-max-width);--cluster-min-width:var(--card-min-width);--cluster-padding-horizontal:var(--card-padding-side);--cluster-padding-vertical:var(--card-padding-between);--favicon-margin:16px;--favicon-size:16px;--first-cluster-padding-top:var(--first-card-padding-top);--pill-height:34px;--pill-padding-icon:12px;--pill-padding-text:16px;--top-visit-favicon-size:24px}
  </style>
</custom-style>
`;
document.head.appendChild(template$3.content);

const styleMod$1 = document.createElement('dom-module');
styleMod$1.appendChild(html `
  <template>
    <style include="cr-shared-style cr-hidden-style">
.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pill{border:1px solid var(--border-color);border-radius:calc(var(--pill-height)/ 2);box-sizing:border-box;font-size:.875rem;height:var(--pill-height);line-height:1.5}:host-context([chrome-refresh-2023]) .pill{font-size:.75rem}.pill-icon-start{padding-inline-end:var(--pill-padding-text);padding-inline-start:var(--pill-padding-icon)}.pill-icon-start .icon{margin-inline-end:8px}:host-context([chrome-refresh-2023]) .pill-icon-start .icon{margin-inline-end:4px}.pill-icon-end{padding-inline-end:var(--pill-padding-icon);padding-inline-start:var(--pill-padding-text)}.pill-icon-end .icon{margin-inline-start:8px}.search-highlight-hit{--search-highlight-hit-background-color:none;--search-highlight-hit-color:none;font-weight:700}.timestamp-and-menu{align-items:center;display:flex;flex-shrink:0}.timestamp{color:var(--cr-secondary-text-color);flex-shrink:0}
    </style>
  </template>
`.content);
styleMod$1.register('history-clusters-shared-style');

// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Make a string safe for Polymer bindings that are inner-h-t-m-l or other
 * innerHTML use.
 * @param rawString The unsanitized string
 * @param opts Optional additional allowed tags and attributes.
 */
function sanitizeInnerHtmlInternal(rawString, opts) {
    opts = opts || {};
    const html = parseHtmlSubset(`<b>${rawString}</b>`, opts.tags, opts.attrs)
        .firstElementChild;
    return html.innerHTML;
}
// 
let sanitizedPolicy = null;
/**
 * Same as |sanitizeInnerHtmlInternal|, but it passes through sanitizedPolicy
 * to create a TrustedHTML.
 */
function sanitizeInnerHtml(rawString, opts) {
    assert(window.trustedTypes);
    if (sanitizedPolicy === null) {
        // Initialize |sanitizedPolicy| lazily.
        sanitizedPolicy = window.trustedTypes.createPolicy('sanitize-inner-html', {
            createHTML: sanitizeInnerHtmlInternal,
            createScript: () => assertNotReached(),
            createScriptURL: () => assertNotReached(),
        });
    }
    return sanitizedPolicy.createHTML(rawString, opts);
}
const allowAttribute = (_node, _value) => true;
/** Allow-list of attributes in parseHtmlSubset. */
const allowedAttributes = new Map([
    [
        'href',
        (node, value) => {
            // Only allow a[href] starting with chrome:// or https:// or equaling
            // to #.
            return node.tagName === 'A' &&
                (value.startsWith('chrome://') || value.startsWith('https://') ||
                    value === '#');
        },
    ],
    [
        'target',
        (node, value) => {
            // Only allow a[target='_blank'].
            // TODO(dbeam): are there valid use cases for target !== '_blank'?
            return node.tagName === 'A' && value === '_blank';
        },
    ],
]);
/** Allow-list of optional attributes in parseHtmlSubset. */
const allowedOptionalAttributes = new Map([
    ['class', allowAttribute],
    ['id', allowAttribute],
    ['is', (_node, value) => value === 'action-link' || value === ''],
    ['role', (_node, value) => value === 'link'],
    [
        'src',
        (node, value) => {
            // Only allow img[src] starting with chrome://
            return node.tagName === 'IMG' &&
                value.startsWith('chrome://');
        },
    ],
    ['tabindex', allowAttribute],
    ['aria-hidden', allowAttribute],
    ['aria-label', allowAttribute],
    ['aria-labelledby', allowAttribute],
]);
/** Allow-list of tag names in parseHtmlSubset. */
const allowedTags = new Set(['A', 'B', 'I', 'BR', 'DIV', 'EM', 'KBD', 'P', 'PRE', 'SPAN', 'STRONG']);
/** Allow-list of optional tag names in parseHtmlSubset. */
const allowedOptionalTags = new Set(['IMG', 'LI', 'UL']);
/**
 * This policy maps a given string to a `TrustedHTML` object
 * without performing any validation. Callsites must ensure
 * that the resulting object will only be used in inert
 * documents. Initialized lazily.
 */
let unsanitizedPolicy;
/**
 * @param optTags an Array to merge.
 * @return Set of allowed tags.
 */
function mergeTags(optTags) {
    const clone = new Set(allowedTags);
    optTags.forEach(str => {
        const tag = str.toUpperCase();
        if (allowedOptionalTags.has(tag)) {
            clone.add(tag);
        }
    });
    return clone;
}
/**
 * @param optAttrs an Array to merge.
 * @return Map of allowed attributes.
 */
function mergeAttrs(optAttrs) {
    const clone = new Map(allowedAttributes);
    optAttrs.forEach(key => {
        if (allowedOptionalAttributes.has(key)) {
            clone.set(key, allowedOptionalAttributes.get(key));
        }
    });
    return clone;
}
function walk(n, f) {
    f(n);
    for (let i = 0; i < n.childNodes.length; i++) {
        walk(n.childNodes[i], f);
    }
}
function assertElement(tags, node) {
    if (!tags.has(node.tagName)) {
        throw Error(node.tagName + ' is not supported');
    }
}
function assertAttribute(attrs, attrNode, node) {
    const n = attrNode.nodeName;
    const v = attrNode.nodeValue || '';
    if (!attrs.has(n) || !attrs.get(n)(node, v)) {
        throw Error(node.tagName + '[' + n + '="' + v +
            '"] is not supported');
    }
}
/**
 * Parses a very small subset of HTML. This ensures that insecure HTML /
 * javascript cannot be injected into WebUI.
 * @param s The string to parse.
 * @param extraTags Optional extra allowed tags.
 * @param extraAttrs
 *     Optional extra allowed attributes (all tags are run through these).
 * @throws an Error in case of non supported markup.
 * @return A document fragment containing the DOM tree.
 */
function parseHtmlSubset(s, extraTags, extraAttrs) {
    const tags = extraTags ? mergeTags(extraTags) : allowedTags;
    const attrs = extraAttrs ? mergeAttrs(extraAttrs) : allowedAttributes;
    const doc = document.implementation.createHTMLDocument('');
    const r = doc.createRange();
    r.selectNode(doc.body);
    if (window.trustedTypes) {
        if (!unsanitizedPolicy) {
            unsanitizedPolicy =
                window.trustedTypes.createPolicy('parse-html-subset', {
                    createHTML: (untrustedHTML) => untrustedHTML,
                    createScript: () => assertNotReached(),
                    createScriptURL: () => assertNotReached(),
                });
        }
        s = unsanitizedPolicy.createHTML(s);
    }
    // This does not execute any scripts because the document has no view.
    const df = r.createContextualFragment(s);
    walk(df, function (node) {
        switch (node.nodeType) {
            case Node.ELEMENT_NODE:
                assertElement(tags, node);
                const nodeAttrs = node.attributes;
                for (let i = 0; i < nodeAttrs.length; ++i) {
                    assertAttribute(attrs, nodeAttrs[i], node);
                }
                break;
            case Node.COMMENT_NODE:
            case Node.DOCUMENT_FRAGMENT_NODE:
            case Node.TEXT_NODE:
                break;
            default:
                throw Error('Node type ' + node.nodeType + ' is not supported');
        }
    });
    return df;
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'I18nMixin' is a Mixin offering loading of internationalization
 * strings. Typically it is used as [[i18n('someString')]] computed bindings or
 * for this.i18n('foo'). It is not needed for HTML $i18n{otherString}, which is
 * handled by a C++ templatizer.
 */
const I18nMixin = dedupingMixin((superClass) => {
    class I18nMixin extends superClass {
        /**
         * Returns a translated string where $1 to $9 are replaced by the given
         * values.
         * @param id The ID of the string to translate.
         * @param varArgs Values to replace the placeholders $1 to $9 in the
         *     string.
         * @return A translated, substituted string.
         */
        i18nRaw_(id, ...varArgs) {
            return varArgs.length === 0 ? loadTimeData.getString(id) :
                loadTimeData.getStringF(id, ...varArgs);
        }
        /**
         * Returns a translated string where $1 to $9 are replaced by the given
         * values. Also sanitizes the output to filter out dangerous HTML/JS.
         * Use with Polymer bindings that are *not* inner-h-t-m-l.
         * NOTE: This is not related to $i18n{foo} in HTML, see file overview.
         * @param id The ID of the string to translate.
         * @param varArgs Values to replace the placeholders $1 to $9 in the
         *     string.
         * @return A translated, sanitized, substituted string.
         */
        i18n(id, ...varArgs) {
            const rawString = this.i18nRaw_(id, ...varArgs);
            return parseHtmlSubset(`<b>${rawString}</b>`).firstChild.textContent;
        }
        /**
         * Similar to 'i18n', returns a translated, sanitized, substituted
         * string. It receives the string ID and a dictionary containing the
         * substitutions as well as optional additional allowed tags and
         * attributes. Use with Polymer bindings that are inner-h-t-m-l, for
         * example.
         * @param id The ID of the string to translate.
         */
        i18nAdvanced(id, opts) {
            opts = opts || {};
            const rawString = this.i18nRaw_(id, ...(opts.substitutions || []));
            return sanitizeInnerHtml(rawString, opts);
        }
        /**
         * Similar to 'i18n', with an unused |locale| parameter used to trigger
         * updates when the locale changes.
         * @param locale The UI language used.
         * @param id The ID of the string to translate.
         * @param varArgs Values to replace the placeholders $1 to $9 in the
         *     string.
         * @return A translated, sanitized, substituted string.
         */
        i18nDynamic(_locale, id, ...varArgs) {
            return this.i18n(id, ...varArgs);
        }
        /**
         * Similar to 'i18nDynamic', but varArgs valus are interpreted as keys
         * in loadTimeData. This allows generation of strings that take other
         * localized strings as parameters.
         * @param locale The UI language used.
         * @param id The ID of the string to translate.
         * @param varArgs Values to replace the placeholders $1 to $9
         *     in the string. Values are interpreted as strings IDs if found in
         * the list of localized strings.
         * @return A translated, sanitized, substituted string.
         */
        i18nRecursive(locale, id, ...varArgs) {
            let args = varArgs;
            if (args.length > 0) {
                // Try to replace IDs with localized values.
                args = args.map(str => {
                    return this.i18nExists(str) ? loadTimeData.getString(str) : str;
                });
            }
            return this.i18nDynamic(locale, id, ...args);
        }
        /**
         * Returns true if a translation exists for |id|.
         */
        i18nExists(id) {
            return loadTimeData.valueExists(id);
        }
    }
    return I18nMixin;
});

function getTemplate$i() {
    return html `<!--_html_template_start_--><style include="history-clusters-shared-style">#actionMenuButton{--cr-icon-button-icon-size:20px;--cr-icon-button-margin-end:8px}:host([in-side-panel_]) #actionMenuButton{--cr-icon-button-icon-size:16px;--cr-icon-button-size:24px}</style>

<cr-icon-button id="actionMenuButton" class="icon-more-vert" title$="[[i18n('actionMenuDescription')]]" aria-haspopup="menu" on-click="onActionMenuButtonClick_">
</cr-icon-button>

<cr-lazy-render id="actionMenu">
  <template>
    <cr-action-menu role-description$="[[i18n('actionMenuDescription')]]">
      <button id="openAllButton" class="dropdown-item" on-click="onOpenAllButtonClick_">
        [[i18n('openAllInTabGroup')]]
      </button>
      <button id="hideAllButton" class="dropdown-item" on-click="onHideAllButtonClick_">
        [[i18n('hideAllVisits')]]
      </button>
      <button id="removeAllButton" class="dropdown-item" on-click="onRemoveAllButtonClick_" hidden="[[!allowDeletingHistory_]]">
        [[i18n('removeAllFromHistory')]]
      </button>
    </cr-action-menu>
  </template>
</cr-lazy-render>
<!--_html_template_end_-->`;
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ClusterMenuElementBase$1 = I18nMixin(PolymerElement);
class ClusterMenuElement extends ClusterMenuElementBase$1 {
    static get is() {
        return 'cluster-menu';
    }
    static get template() {
        return getTemplate$i();
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

function getTemplate$h() {
    return html `<!--_html_template_start_--><style include="history-clusters-shared-style cr-icons">:host{display:flex;isolation:isolate}:host-context([chrome-refresh-2023]){--cr-icon-button-margin-start:0px;--gradient-start:64px;--horizontal-carousel-pagination-button-center:calc(var(--horizontal-carousel-pagination-button-size) / 2
            + var(--horizontal-carousel-pagination-button-margin));--horizontal-carousel-pagination-button-margin:14px;--horizontal-carousel-pagination-button-size:28px;position:relative}:host-context([chrome-refresh-2023]):host(:hover) .carousel-button-container{display:block}:host-context([chrome-refresh-2023]):host([show-back-button_]:hover) #carouselContainer{-webkit-mask-image:linear-gradient(to right,transparent var(--horizontal-carousel-pagination-button-center),#000 var(--gradient-start))}:host-context([chrome-refresh-2023]):host([show-forward-button_]:hover) #carouselContainer{-webkit-mask-image:linear-gradient(to right,#000 calc(100% - var(--gradient-start)),transparent calc(100% - var(--horizontal-carousel-pagination-button-center)))}:host-context([chrome-refresh-2023]):host([show-back-button_][show-forward-button_]:hover) #carouselContainer{-webkit-mask-image:linear-gradient(to right,transparent var(--horizontal-carousel-pagination-button-center),#000 var(--gradient-start),#000 calc(100% - var(--gradient-start)),transparent calc(100% - var(--horizontal-carousel-pagination-button-center)))}:host-context([chrome-refresh-2023]) .carousel-button-container{--cr-icon-button-size:var(--horizontal-carousel-pagination-button-size);background-color:var(--color-button-background-tonal);border-radius:50%;display:none;margin:0;position:absolute;top:50%;transform:translateY(-50%);z-index:1}:host-context([chrome-refresh-2023]) #carouselForwardButton{right:var(--horizontal-carousel-pagination-button-margin)}:host-context([chrome-refresh-2023]) #carouselBackButton{left:var(--horizontal-carousel-pagination-button-margin)}#carouselContainer{display:flex;flex-wrap:wrap;min-width:0}:host-context([chrome-refresh-2023]) #carouselContainer{flex-wrap:nowrap;padding:2px;min-width:0;overflow-x:hidden}.hover-layer{display:none}:host-context([chrome-refresh-2023]) .hover-layer{background:var(--cr-hover-background-color);border-radius:50%;height:var(--horizontal-carousel-pagination-button-size);width:var(--horizontal-carousel-pagination-button-size);pointer-events:none;position:absolute;top:50%;transform:translateY(-50%);z-index:2}#hoverLayerForward{right:var(--horizontal-carousel-pagination-button-margin)}#carouselForwardButton:hover~#hoverLayerForward{display:block}#hoverLayerBack{left:var(--horizontal-carousel-pagination-button-margin)}#carouselBackButton:hover~#hoverLayerBack{display:block}</style>
<cr-icon-button id="carouselBackButton" class="carousel-button-container" on-click="onCarouselBackClick_" iron-icon="cr:chevron-left" hidden$="[[!showBackButton_]]" tabindex="-1">
</cr-icon-button>
<div id="hoverLayerBack" class="hover-layer"></div>

<cr-icon-button id="carouselForwardButton" class="carousel-button-container" on-click="onCarouselForwardClick_" iron-icon="cr:chevron-right" hidden$="[[!showForwardButton_]]" tabindex="-1">
</cr-icon-button>
<div id="hoverLayerForward" class="hover-layer"></div>

<div id="carouselContainer">
  <slot></slot>
</div>

<!--_html_template_end_-->`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const HorizontalCarouselElementBase = I18nMixin(PolymerElement);
class HorizontalCarouselElement extends HorizontalCarouselElementBase {
    constructor() {
        super(...arguments);
        //============================================================================
        // Properties
        //============================================================================
        this.resizeObserver_ = null;
        this.eventTracker_ = new EventTracker();
    }
    static get is() {
        return 'horizontal-carousel';
    }
    static get template() {
        return getTemplate$h();
    }
    static get properties() {
        return {
            showForwardButton_: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            showBackButton_: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
        };
    }
    //============================================================================
    // Overridden methods
    //============================================================================
    connectedCallback() {
        super.connectedCallback();
        this.resizeObserver_ = new ResizeObserver(() => {
            this.setShowCarouselButtons_();
        });
        this.resizeObserver_.observe(this.$.carouselContainer);
        this.eventTracker_.add(this, 'keyup', this.onTabFocus_.bind(this));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.resizeObserver_) {
            this.resizeObserver_.unobserve(this.$.carouselContainer);
            this.resizeObserver_ = null;
        }
    }
    //============================================================================
    // Event handlers
    //============================================================================
    onCarouselBackClick_() {
        const targetPosition = this.calculateTargetPosition_(-1);
        this.$.carouselContainer.scrollTo({ left: targetPosition, behavior: 'smooth' });
        this.showBackButton_ = targetPosition > 0;
        this.showForwardButton_ = true;
    }
    onCarouselForwardClick_() {
        const targetPosition = this.calculateTargetPosition_(1);
        this.$.carouselContainer.scrollTo({ left: targetPosition, behavior: 'smooth' });
        this.showForwardButton_ =
            targetPosition + this.$.carouselContainer.clientWidth <
                this.$.carouselContainer.scrollWidth;
        this.showBackButton_ = true;
    }
    onTabFocus_(event) {
        const element = event.target;
        if (event.code === 'Tab') {
            // -2px as offsetLeft includes padding
            this.$.carouselContainer.scrollTo({ left: element.offsetLeft - 2, behavior: 'smooth' });
        }
    }
    //============================================================================
    // Helper methods
    //============================================================================
    setShowCarouselButtons_() {
        if (Math.round(this.$.carouselContainer.scrollLeft) +
            this.$.carouselContainer.clientWidth <
            this.$.carouselContainer.scrollWidth) {
            // On shrinking the window, the forward button should show up again.
            this.showForwardButton_ = true;
        }
        else {
            // On expanding the window, the back and forward buttons should disappear.
            this.showBackButton_ = this.$.carouselContainer.scrollLeft > 0;
            this.showForwardButton_ = false;
        }
    }
    calculateTargetPosition_(direction) {
        const offset = this.$.carouselContainer.clientWidth / 2 * direction;
        const targetPosition = Math.floor(this.$.carouselContainer.scrollLeft + offset);
        return Math.max(0, Math.min(targetPosition, this.$.carouselContainer.scrollWidth -
            this.$.carouselContainer.clientWidth));
    }
}
customElements.define(HorizontalCarouselElement.is, HorizontalCarouselElement);

// mojom-webui/mojo/public/mojom/base/time.mojom-webui.js is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const TimeSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const TimeDeltaSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const TimeTicksSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
mojo.internal.Struct(TimeSpec.$, 'Time', [
    mojo.internal.StructField('internalValue', 0, 0, mojo.internal.Int64, BigInt(0), false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(TimeDeltaSpec.$, 'TimeDelta', [
    mojo.internal.StructField('microseconds', 0, 0, mojo.internal.Int64, BigInt(0), false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(TimeTicksSpec.$, 'TimeTicks', [
    mojo.internal.StructField('internalValue', 0, 0, mojo.internal.Int64, BigInt(0), false /* nullable */, 0),
], [[0, 16],]);

// mojom-webui/url/mojom/url.mojom-webui.js is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const UrlSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
mojo.internal.Struct(UrlSpec.$, 'Url', [
    mojo.internal.StructField('url', 0, 0, mojo.internal.String, null, false /* nullable */, 0),
], [[0, 16],]);

// components/history_clusters/public/mojom/history_cluster_types.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const AnnotationSpec = { $: mojo.internal.Enum() };
var Annotation;
(function (Annotation) {
    Annotation[Annotation["MIN_VALUE"] = 0] = "MIN_VALUE";
    Annotation[Annotation["MAX_VALUE"] = 1] = "MAX_VALUE";
    Annotation[Annotation["kBookmarked"] = 0] = "kBookmarked";
    Annotation[Annotation["kSearchResultsPage"] = 1] = "kSearchResultsPage";
})(Annotation || (Annotation = {}));
({ $: mojo.internal.Enum() });
var InteractionState;
(function (InteractionState) {
    InteractionState[InteractionState["MIN_VALUE"] = 0] = "MIN_VALUE";
    InteractionState[InteractionState["MAX_VALUE"] = 2] = "MAX_VALUE";
    InteractionState[InteractionState["kDefault"] = 0] = "kDefault";
    InteractionState[InteractionState["kHidden"] = 1] = "kHidden";
    InteractionState[InteractionState["kDone"] = 2] = "kDone";
})(InteractionState || (InteractionState = {}));
const MatchPositionSpec = { $: {} };
const SearchQuerySpec = { $: {} };
const RawVisitDataSpec = { $: {} };
const URLVisitSpec = { $: {} };
const ClusterSpec = { $: {} };
mojo.internal.Struct(MatchPositionSpec.$, 'MatchPosition', [
    mojo.internal.StructField('begin', 0, 0, mojo.internal.Uint32, 0, false /* nullable */, 0),
    mojo.internal.StructField('end', 4, 0, mojo.internal.Uint32, 0, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(SearchQuerySpec.$, 'SearchQuery', [
    mojo.internal.StructField('query', 0, 0, mojo.internal.String, null, false /* nullable */, 0),
    mojo.internal.StructField('url', 8, 0, UrlSpec.$, null, false /* nullable */, 0),
], [[0, 24],]);
mojo.internal.Struct(RawVisitDataSpec.$, 'RawVisitData', [
    mojo.internal.StructField('url', 0, 0, UrlSpec.$, null, false /* nullable */, 0),
    mojo.internal.StructField('visitTime', 8, 0, TimeSpec.$, null, false /* nullable */, 0),
], [[0, 24],]);
mojo.internal.Struct(URLVisitSpec.$, 'URLVisit', [
    mojo.internal.StructField('visitId', 0, 0, mojo.internal.Int64, BigInt(0), false /* nullable */, 0),
    mojo.internal.StructField('normalizedUrl', 8, 0, UrlSpec.$, null, false /* nullable */, 0),
    mojo.internal.StructField('urlForDisplay', 16, 0, mojo.internal.String, null, false /* nullable */, 0),
    mojo.internal.StructField('pageTitle', 24, 0, mojo.internal.String, null, false /* nullable */, 0),
    mojo.internal.StructField('titleMatchPositions', 32, 0, mojo.internal.Array(MatchPositionSpec.$, false), null, false /* nullable */, 0),
    mojo.internal.StructField('urlForDisplayMatchPositions', 40, 0, mojo.internal.Array(MatchPositionSpec.$, false), null, false /* nullable */, 0),
    mojo.internal.StructField('rawVisitData', 48, 0, RawVisitDataSpec.$, null, false /* nullable */, 0),
    mojo.internal.StructField('duplicates', 56, 0, mojo.internal.Array(RawVisitDataSpec.$, false), null, false /* nullable */, 0),
    mojo.internal.StructField('relativeDate', 64, 0, mojo.internal.String, null, false /* nullable */, 0),
    mojo.internal.StructField('annotations', 72, 0, mojo.internal.Array(AnnotationSpec.$, false), null, false /* nullable */, 0),
    mojo.internal.StructField('isKnownToSync', 80, 0, mojo.internal.Bool, false, false /* nullable */, 0),
    mojo.internal.StructField('debugInfo', 88, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false /* nullable */, 0),
    mojo.internal.StructField('hasUrlKeyedImage', 80, 1, mojo.internal.Bool, false, false /* nullable */, 0),
], [[0, 104],]);
mojo.internal.Struct(ClusterSpec.$, 'Cluster', [
    mojo.internal.StructField('id', 0, 0, mojo.internal.Int64, BigInt(0), false /* nullable */, 0),
    mojo.internal.StructField('visits', 8, 0, mojo.internal.Array(URLVisitSpec.$, false), null, false /* nullable */, 0),
    mojo.internal.StructField('label', 16, 0, mojo.internal.String, null, false /* nullable */, 0),
    mojo.internal.StructField('tabGroupName', 24, 0, mojo.internal.String, null, true /* nullable */, 0),
    mojo.internal.StructField('labelMatchPositions', 32, 0, mojo.internal.Array(MatchPositionSpec.$, false), null, false /* nullable */, 0),
    mojo.internal.StructField('relatedSearches', 40, 0, mojo.internal.Array(SearchQuerySpec.$, false), null, false /* nullable */, 0),
    mojo.internal.StructField('imageUrl', 48, 0, UrlSpec.$, null, true /* nullable */, 0),
    mojo.internal.StructField('fromPersistence', 56, 0, mojo.internal.Bool, false, false /* nullable */, 0),
    mojo.internal.StructField('debugInfo', 64, 0, mojo.internal.String, null, true /* nullable */, 0),
], [[0, 80],]);

// ui/base/mojom/window_open_disposition.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
({ $: mojo.internal.Enum() });
var WindowOpenDisposition;
(function (WindowOpenDisposition) {
    WindowOpenDisposition[WindowOpenDisposition["MIN_VALUE"] = 0] = "MIN_VALUE";
    WindowOpenDisposition[WindowOpenDisposition["MAX_VALUE"] = 11] = "MAX_VALUE";
    WindowOpenDisposition[WindowOpenDisposition["UNKNOWN"] = 0] = "UNKNOWN";
    WindowOpenDisposition[WindowOpenDisposition["CURRENT_TAB"] = 1] = "CURRENT_TAB";
    WindowOpenDisposition[WindowOpenDisposition["SINGLETON_TAB"] = 2] = "SINGLETON_TAB";
    WindowOpenDisposition[WindowOpenDisposition["NEW_FOREGROUND_TAB"] = 3] = "NEW_FOREGROUND_TAB";
    WindowOpenDisposition[WindowOpenDisposition["NEW_BACKGROUND_TAB"] = 4] = "NEW_BACKGROUND_TAB";
    WindowOpenDisposition[WindowOpenDisposition["NEW_POPUP"] = 5] = "NEW_POPUP";
    WindowOpenDisposition[WindowOpenDisposition["NEW_WINDOW"] = 6] = "NEW_WINDOW";
    WindowOpenDisposition[WindowOpenDisposition["SAVE_TO_DISK"] = 7] = "SAVE_TO_DISK";
    WindowOpenDisposition[WindowOpenDisposition["OFF_THE_RECORD"] = 8] = "OFF_THE_RECORD";
    WindowOpenDisposition[WindowOpenDisposition["IGNORE_ACTION"] = 9] = "IGNORE_ACTION";
    WindowOpenDisposition[WindowOpenDisposition["SWITCH_TO_TAB"] = 10] = "SWITCH_TO_TAB";
    WindowOpenDisposition[WindowOpenDisposition["NEW_PICTURE_IN_PICTURE"] = 11] = "NEW_PICTURE_IN_PICTURE";
})(WindowOpenDisposition || (WindowOpenDisposition = {}));
const ClickModifiersSpec = { $: {} };
mojo.internal.Struct(ClickModifiersSpec.$, 'ClickModifiers', [
    mojo.internal.StructField('middleButton', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0),
    mojo.internal.StructField('altKey', 0, 1, mojo.internal.Bool, false, false /* nullable */, 0),
    mojo.internal.StructField('ctrlKey', 0, 2, mojo.internal.Bool, false, false /* nullable */, 0),
    mojo.internal.StructField('metaKey', 0, 3, mojo.internal.Bool, false, false /* nullable */, 0),
    mojo.internal.StructField('shiftKey', 0, 4, mojo.internal.Bool, false, false /* nullable */, 0),
], [[0, 16],]);

// ui/gfx/geometry/mojom/geometry.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PointSpec = { $: {} };
const PointFSpec = { $: {} };
const Point3FSpec = { $: {} };
const SizeSpec = { $: {} };
const SizeFSpec = { $: {} };
const RectSpec = { $: {} };
const RectFSpec = { $: {} };
const InsetsSpec = { $: {} };
const InsetsFSpec = { $: {} };
const Vector2dSpec = { $: {} };
const Vector2dFSpec = { $: {} };
const Vector3dFSpec = { $: {} };
const QuaternionSpec = { $: {} };
const QuadFSpec = { $: {} };
mojo.internal.Struct(PointSpec.$, 'Point', [
    mojo.internal.StructField('x', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
    mojo.internal.StructField('y', 4, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(PointFSpec.$, 'PointF', [
    mojo.internal.StructField('x', 0, 0, mojo.internal.Float, 0, false /* nullable */, 0),
    mojo.internal.StructField('y', 4, 0, mojo.internal.Float, 0, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(Point3FSpec.$, 'Point3F', [
    mojo.internal.StructField('x', 0, 0, mojo.internal.Float, 0, false /* nullable */, 0),
    mojo.internal.StructField('y', 4, 0, mojo.internal.Float, 0, false /* nullable */, 0),
    mojo.internal.StructField('z', 8, 0, mojo.internal.Float, 0, false /* nullable */, 0),
], [[0, 24],]);
mojo.internal.Struct(SizeSpec.$, 'Size', [
    mojo.internal.StructField('width', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
    mojo.internal.StructField('height', 4, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(SizeFSpec.$, 'SizeF', [
    mojo.internal.StructField('width', 0, 0, mojo.internal.Float, 0, false /* nullable */, 0),
    mojo.internal.StructField('height', 4, 0, mojo.internal.Float, 0, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(RectSpec.$, 'Rect', [
    mojo.internal.StructField('x', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
    mojo.internal.StructField('y', 4, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
    mojo.internal.StructField('width', 8, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
    mojo.internal.StructField('height', 12, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
], [[0, 24],]);
mojo.internal.Struct(RectFSpec.$, 'RectF', [
    mojo.internal.StructField('x', 0, 0, mojo.internal.Float, 0, false /* nullable */, 0),
    mojo.internal.StructField('y', 4, 0, mojo.internal.Float, 0, false /* nullable */, 0),
    mojo.internal.StructField('width', 8, 0, mojo.internal.Float, 0, false /* nullable */, 0),
    mojo.internal.StructField('height', 12, 0, mojo.internal.Float, 0, false /* nullable */, 0),
], [[0, 24],]);
mojo.internal.Struct(InsetsSpec.$, 'Insets', [
    mojo.internal.StructField('top', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
    mojo.internal.StructField('left', 4, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
    mojo.internal.StructField('bottom', 8, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
    mojo.internal.StructField('right', 12, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
], [[0, 24],]);
mojo.internal.Struct(InsetsFSpec.$, 'InsetsF', [
    mojo.internal.StructField('top', 0, 0, mojo.internal.Float, 0, false /* nullable */, 0),
    mojo.internal.StructField('left', 4, 0, mojo.internal.Float, 0, false /* nullable */, 0),
    mojo.internal.StructField('bottom', 8, 0, mojo.internal.Float, 0, false /* nullable */, 0),
    mojo.internal.StructField('right', 12, 0, mojo.internal.Float, 0, false /* nullable */, 0),
], [[0, 24],]);
mojo.internal.Struct(Vector2dSpec.$, 'Vector2d', [
    mojo.internal.StructField('x', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
    mojo.internal.StructField('y', 4, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(Vector2dFSpec.$, 'Vector2dF', [
    mojo.internal.StructField('x', 0, 0, mojo.internal.Float, 0, false /* nullable */, 0),
    mojo.internal.StructField('y', 4, 0, mojo.internal.Float, 0, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(Vector3dFSpec.$, 'Vector3dF', [
    mojo.internal.StructField('x', 0, 0, mojo.internal.Float, 0, false /* nullable */, 0),
    mojo.internal.StructField('y', 4, 0, mojo.internal.Float, 0, false /* nullable */, 0),
    mojo.internal.StructField('z', 8, 0, mojo.internal.Float, 0, false /* nullable */, 0),
], [[0, 24],]);
mojo.internal.Struct(QuaternionSpec.$, 'Quaternion', [
    mojo.internal.StructField('x', 0, 0, mojo.internal.Double, 0, false /* nullable */, 0),
    mojo.internal.StructField('y', 8, 0, mojo.internal.Double, 0, false /* nullable */, 0),
    mojo.internal.StructField('z', 16, 0, mojo.internal.Double, 0, false /* nullable */, 0),
    mojo.internal.StructField('w', 24, 0, mojo.internal.Double, 0, false /* nullable */, 0),
], [[0, 40],]);
mojo.internal.Struct(QuadFSpec.$, 'QuadF', [
    mojo.internal.StructField('p1', 0, 0, PointFSpec.$, null, false /* nullable */, 0),
    mojo.internal.StructField('p2', 8, 0, PointFSpec.$, null, false /* nullable */, 0),
    mojo.internal.StructField('p3', 16, 0, PointFSpec.$, null, false /* nullable */, 0),
    mojo.internal.StructField('p4', 24, 0, PointFSpec.$, null, false /* nullable */, 0),
], [[0, 40],]);

// ui/webui/resources/cr_components/history_clusters/history_clusters.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ClusterActionSpec = { $: mojo.internal.Enum() };
var ClusterAction;
(function (ClusterAction) {
    ClusterAction[ClusterAction["MIN_VALUE"] = 0] = "MIN_VALUE";
    ClusterAction[ClusterAction["MAX_VALUE"] = 3] = "MAX_VALUE";
    ClusterAction[ClusterAction["kDeleted"] = 0] = "kDeleted";
    ClusterAction[ClusterAction["kOpenedInTabGroup"] = 1] = "kOpenedInTabGroup";
    ClusterAction[ClusterAction["kRelatedSearchClicked"] = 2] = "kRelatedSearchClicked";
    ClusterAction[ClusterAction["kVisitClicked"] = 3] = "kVisitClicked";
})(ClusterAction || (ClusterAction = {}));
const RelatedSearchActionSpec = { $: mojo.internal.Enum() };
var RelatedSearchAction;
(function (RelatedSearchAction) {
    RelatedSearchAction[RelatedSearchAction["MIN_VALUE"] = 0] = "MIN_VALUE";
    RelatedSearchAction[RelatedSearchAction["MAX_VALUE"] = 0] = "MAX_VALUE";
    RelatedSearchAction[RelatedSearchAction["kClicked"] = 0] = "kClicked";
})(RelatedSearchAction || (RelatedSearchAction = {}));
const VisitActionSpec = { $: mojo.internal.Enum() };
var VisitAction;
(function (VisitAction) {
    VisitAction[VisitAction["MIN_VALUE"] = 0] = "MIN_VALUE";
    VisitAction[VisitAction["MAX_VALUE"] = 2] = "MAX_VALUE";
    VisitAction[VisitAction["kClicked"] = 0] = "kClicked";
    VisitAction[VisitAction["kHidden"] = 1] = "kHidden";
    VisitAction[VisitAction["kDeleted"] = 2] = "kDeleted";
})(VisitAction || (VisitAction = {}));
const VisitTypeSpec = { $: mojo.internal.Enum() };
var VisitType;
(function (VisitType) {
    VisitType[VisitType["MIN_VALUE"] = 0] = "MIN_VALUE";
    VisitType[VisitType["MAX_VALUE"] = 1] = "MAX_VALUE";
    VisitType[VisitType["kSRP"] = 0] = "kSRP";
    VisitType[VisitType["kNonSRP"] = 1] = "kNonSRP";
})(VisitType || (VisitType = {}));
class PageHandlerPendingReceiver {
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'history_clusters.mojom.PageHandler', scope);
    }
}
class PageHandlerRemote {
    constructor(handle) {
        this.proxy =
            new mojo.internal.interfaceSupport.InterfaceRemoteBase(PageHandlerPendingReceiver, handle);
        this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);
        this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
    }
    openHistoryCluster(url, clickModifiers) {
        this.proxy.sendMessage(0, PageHandler_OpenHistoryCluster_ParamsSpec.$, null, [
            url,
            clickModifiers
        ]);
    }
    setPage(page) {
        this.proxy.sendMessage(1, PageHandler_SetPage_ParamsSpec.$, null, [
            page
        ]);
    }
    showContextMenuForSearchbox(query, point) {
        this.proxy.sendMessage(2, PageHandler_ShowContextMenuForSearchbox_ParamsSpec.$, null, [
            query,
            point
        ]);
    }
    showContextMenuForURL(url, point) {
        this.proxy.sendMessage(3, PageHandler_ShowContextMenuForURL_ParamsSpec.$, null, [
            url,
            point
        ]);
    }
    showSidePanelUI() {
        this.proxy.sendMessage(4, PageHandler_ShowSidePanelUI_ParamsSpec.$, null, []);
    }
    toggleVisibility(visible) {
        return this.proxy.sendMessage(5, PageHandler_ToggleVisibility_ParamsSpec.$, PageHandler_ToggleVisibility_ResponseParamsSpec.$, [
            visible
        ]);
    }
    startQueryClusters(query, recluster) {
        this.proxy.sendMessage(6, PageHandler_StartQueryClusters_ParamsSpec.$, null, [
            query,
            recluster
        ]);
    }
    loadMoreClusters(query) {
        this.proxy.sendMessage(7, PageHandler_LoadMoreClusters_ParamsSpec.$, null, [
            query
        ]);
    }
    hideVisits(visits) {
        return this.proxy.sendMessage(8, PageHandler_HideVisits_ParamsSpec.$, PageHandler_HideVisits_ResponseParamsSpec.$, [
            visits
        ]);
    }
    removeVisits(visits) {
        return this.proxy.sendMessage(9, PageHandler_RemoveVisits_ParamsSpec.$, PageHandler_RemoveVisits_ResponseParamsSpec.$, [
            visits
        ]);
    }
    openVisitUrlsInTabGroup(visits, tabGroupName) {
        this.proxy.sendMessage(10, PageHandler_OpenVisitUrlsInTabGroup_ParamsSpec.$, null, [
            visits,
            tabGroupName
        ]);
    }
    recordVisitAction(visitAction, visitIndex, visitType) {
        this.proxy.sendMessage(11, PageHandler_RecordVisitAction_ParamsSpec.$, null, [
            visitAction,
            visitIndex,
            visitType
        ]);
    }
    recordRelatedSearchAction(action, visitIndex) {
        this.proxy.sendMessage(12, PageHandler_RecordRelatedSearchAction_ParamsSpec.$, null, [
            action,
            visitIndex
        ]);
    }
    recordClusterAction(clusterAction, clusterIndex) {
        this.proxy.sendMessage(13, PageHandler_RecordClusterAction_ParamsSpec.$, null, [
            clusterAction,
            clusterIndex
        ]);
    }
    recordToggledVisibility(visible) {
        this.proxy.sendMessage(14, PageHandler_RecordToggledVisibility_ParamsSpec.$, null, [
            visible
        ]);
    }
}
class PageHandler {
    static get $interfaceName() {
        return "history_clusters.mojom.PageHandler";
    }
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote() {
        let remote = new PageHandlerRemote;
        remote.$.bindNewPipeAndPassReceiver().bindInBrowser();
        return remote;
    }
}
class PagePendingReceiver {
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'history_clusters.mojom.Page', scope);
    }
}
class PageRemote {
    constructor(handle) {
        this.proxy =
            new mojo.internal.interfaceSupport.InterfaceRemoteBase(PagePendingReceiver, handle);
        this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);
        this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
    }
    onClustersQueryResult(result) {
        this.proxy.sendMessage(0, Page_OnClustersQueryResult_ParamsSpec.$, null, [
            result
        ]);
    }
    onClusterImageUpdated(clusterIndex, imageUrl) {
        this.proxy.sendMessage(1, Page_OnClusterImageUpdated_ParamsSpec.$, null, [
            clusterIndex,
            imageUrl
        ]);
    }
    onVisitsHidden(hiddenVisits) {
        this.proxy.sendMessage(2, Page_OnVisitsHidden_ParamsSpec.$, null, [
            hiddenVisits
        ]);
    }
    onVisitsRemoved(removedVisits) {
        this.proxy.sendMessage(3, Page_OnVisitsRemoved_ParamsSpec.$, null, [
            removedVisits
        ]);
    }
    onHistoryDeleted() {
        this.proxy.sendMessage(4, Page_OnHistoryDeleted_ParamsSpec.$, null, []);
    }
    onQueryChangedByUser(query) {
        this.proxy.sendMessage(5, Page_OnQueryChangedByUser_ParamsSpec.$, null, [
            query
        ]);
    }
}
/**
 * An object which receives request messages for the Page
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
class PageCallbackRouter {
    constructor() {
        this.helper_internal_ = new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(PageRemote);
        this.$ = new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);
        this.router_ = new mojo.internal.interfaceSupport.CallbackRouter;
        this.onClustersQueryResult =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(0, Page_OnClustersQueryResult_ParamsSpec.$, null, this.onClustersQueryResult.createReceiverHandler(false /* expectsResponse */));
        this.onClusterImageUpdated =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(1, Page_OnClusterImageUpdated_ParamsSpec.$, null, this.onClusterImageUpdated.createReceiverHandler(false /* expectsResponse */));
        this.onVisitsHidden =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(2, Page_OnVisitsHidden_ParamsSpec.$, null, this.onVisitsHidden.createReceiverHandler(false /* expectsResponse */));
        this.onVisitsRemoved =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(3, Page_OnVisitsRemoved_ParamsSpec.$, null, this.onVisitsRemoved.createReceiverHandler(false /* expectsResponse */));
        this.onHistoryDeleted =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(4, Page_OnHistoryDeleted_ParamsSpec.$, null, this.onHistoryDeleted.createReceiverHandler(false /* expectsResponse */));
        this.onQueryChangedByUser =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(5, Page_OnQueryChangedByUser_ParamsSpec.$, null, this.onQueryChangedByUser.createReceiverHandler(false /* expectsResponse */));
        this.onConnectionError = this.helper_internal_.getConnectionErrorEventRouter();
    }
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id) {
        return this.router_.removeListener(id);
    }
}
const QueryResultSpec = { $: {} };
const PageHandler_OpenHistoryCluster_ParamsSpec = { $: {} };
const PageHandler_SetPage_ParamsSpec = { $: {} };
const PageHandler_ShowContextMenuForSearchbox_ParamsSpec = { $: {} };
const PageHandler_ShowContextMenuForURL_ParamsSpec = { $: {} };
const PageHandler_ShowSidePanelUI_ParamsSpec = { $: {} };
const PageHandler_ToggleVisibility_ParamsSpec = { $: {} };
const PageHandler_ToggleVisibility_ResponseParamsSpec = { $: {} };
const PageHandler_StartQueryClusters_ParamsSpec = { $: {} };
const PageHandler_LoadMoreClusters_ParamsSpec = { $: {} };
const PageHandler_HideVisits_ParamsSpec = { $: {} };
const PageHandler_HideVisits_ResponseParamsSpec = { $: {} };
const PageHandler_RemoveVisits_ParamsSpec = { $: {} };
const PageHandler_RemoveVisits_ResponseParamsSpec = { $: {} };
const PageHandler_OpenVisitUrlsInTabGroup_ParamsSpec = { $: {} };
const PageHandler_RecordVisitAction_ParamsSpec = { $: {} };
const PageHandler_RecordRelatedSearchAction_ParamsSpec = { $: {} };
const PageHandler_RecordClusterAction_ParamsSpec = { $: {} };
const PageHandler_RecordToggledVisibility_ParamsSpec = { $: {} };
const Page_OnClustersQueryResult_ParamsSpec = { $: {} };
const Page_OnClusterImageUpdated_ParamsSpec = { $: {} };
const Page_OnVisitsHidden_ParamsSpec = { $: {} };
const Page_OnVisitsRemoved_ParamsSpec = { $: {} };
const Page_OnHistoryDeleted_ParamsSpec = { $: {} };
const Page_OnQueryChangedByUser_ParamsSpec = { $: {} };
mojo.internal.Struct(QueryResultSpec.$, 'QueryResult', [
    mojo.internal.StructField('query', 0, 0, mojo.internal.String, null, false /* nullable */, 0),
    mojo.internal.StructField('clusters', 8, 0, mojo.internal.Array(ClusterSpec.$, false), null, false /* nullable */, 0),
    mojo.internal.StructField('canLoadMore', 16, 0, mojo.internal.Bool, false, false /* nullable */, 0),
    mojo.internal.StructField('isContinuation', 16, 1, mojo.internal.Bool, false, false /* nullable */, 0),
], [[0, 32],]);
mojo.internal.Struct(PageHandler_OpenHistoryCluster_ParamsSpec.$, 'PageHandler_OpenHistoryCluster_Params', [
    mojo.internal.StructField('url', 0, 0, UrlSpec.$, null, false /* nullable */, 0),
    mojo.internal.StructField('clickModifiers', 8, 0, ClickModifiersSpec.$, null, false /* nullable */, 0),
], [[0, 24],]);
mojo.internal.Struct(PageHandler_SetPage_ParamsSpec.$, 'PageHandler_SetPage_Params', [
    mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(PageRemote), null, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_ShowContextMenuForSearchbox_ParamsSpec.$, 'PageHandler_ShowContextMenuForSearchbox_Params', [
    mojo.internal.StructField('query', 0, 0, mojo.internal.String, null, false /* nullable */, 0),
    mojo.internal.StructField('point', 8, 0, PointSpec.$, null, false /* nullable */, 0),
], [[0, 24],]);
mojo.internal.Struct(PageHandler_ShowContextMenuForURL_ParamsSpec.$, 'PageHandler_ShowContextMenuForURL_Params', [
    mojo.internal.StructField('url', 0, 0, UrlSpec.$, null, false /* nullable */, 0),
    mojo.internal.StructField('point', 8, 0, PointSpec.$, null, false /* nullable */, 0),
], [[0, 24],]);
mojo.internal.Struct(PageHandler_ShowSidePanelUI_ParamsSpec.$, 'PageHandler_ShowSidePanelUI_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_ToggleVisibility_ParamsSpec.$, 'PageHandler_ToggleVisibility_Params', [
    mojo.internal.StructField('visible', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_ToggleVisibility_ResponseParamsSpec.$, 'PageHandler_ToggleVisibility_ResponseParams', [
    mojo.internal.StructField('visible', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_StartQueryClusters_ParamsSpec.$, 'PageHandler_StartQueryClusters_Params', [
    mojo.internal.StructField('query', 0, 0, mojo.internal.String, null, false /* nullable */, 0),
    mojo.internal.StructField('recluster', 8, 0, mojo.internal.Bool, false, false /* nullable */, 0),
], [[0, 24],]);
mojo.internal.Struct(PageHandler_LoadMoreClusters_ParamsSpec.$, 'PageHandler_LoadMoreClusters_Params', [
    mojo.internal.StructField('query', 0, 0, mojo.internal.String, null, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_HideVisits_ParamsSpec.$, 'PageHandler_HideVisits_Params', [
    mojo.internal.StructField('visits', 0, 0, mojo.internal.Array(URLVisitSpec.$, false), null, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_HideVisits_ResponseParamsSpec.$, 'PageHandler_HideVisits_ResponseParams', [
    mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_RemoveVisits_ParamsSpec.$, 'PageHandler_RemoveVisits_Params', [
    mojo.internal.StructField('visits', 0, 0, mojo.internal.Array(URLVisitSpec.$, false), null, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_RemoveVisits_ResponseParamsSpec.$, 'PageHandler_RemoveVisits_ResponseParams', [
    mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_OpenVisitUrlsInTabGroup_ParamsSpec.$, 'PageHandler_OpenVisitUrlsInTabGroup_Params', [
    mojo.internal.StructField('visits', 0, 0, mojo.internal.Array(URLVisitSpec.$, false), null, false /* nullable */, 0),
    mojo.internal.StructField('tabGroupName', 8, 0, mojo.internal.String, null, true /* nullable */, 0),
], [[0, 24],]);
mojo.internal.Struct(PageHandler_RecordVisitAction_ParamsSpec.$, 'PageHandler_RecordVisitAction_Params', [
    mojo.internal.StructField('visitAction', 0, 0, VisitActionSpec.$, 0, false /* nullable */, 0),
    mojo.internal.StructField('visitIndex', 4, 0, mojo.internal.Uint32, 0, false /* nullable */, 0),
    mojo.internal.StructField('visitType', 8, 0, VisitTypeSpec.$, 0, false /* nullable */, 0),
], [[0, 24],]);
mojo.internal.Struct(PageHandler_RecordRelatedSearchAction_ParamsSpec.$, 'PageHandler_RecordRelatedSearchAction_Params', [
    mojo.internal.StructField('action', 0, 0, RelatedSearchActionSpec.$, 0, false /* nullable */, 0),
    mojo.internal.StructField('visitIndex', 4, 0, mojo.internal.Uint32, 0, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_RecordClusterAction_ParamsSpec.$, 'PageHandler_RecordClusterAction_Params', [
    mojo.internal.StructField('clusterAction', 0, 0, ClusterActionSpec.$, 0, false /* nullable */, 0),
    mojo.internal.StructField('clusterIndex', 4, 0, mojo.internal.Uint32, 0, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_RecordToggledVisibility_ParamsSpec.$, 'PageHandler_RecordToggledVisibility_Params', [
    mojo.internal.StructField('visible', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(Page_OnClustersQueryResult_ParamsSpec.$, 'Page_OnClustersQueryResult_Params', [
    mojo.internal.StructField('result', 0, 0, QueryResultSpec.$, null, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(Page_OnClusterImageUpdated_ParamsSpec.$, 'Page_OnClusterImageUpdated_Params', [
    mojo.internal.StructField('clusterIndex', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
    mojo.internal.StructField('imageUrl', 8, 0, UrlSpec.$, null, false /* nullable */, 0),
], [[0, 24],]);
mojo.internal.Struct(Page_OnVisitsHidden_ParamsSpec.$, 'Page_OnVisitsHidden_Params', [
    mojo.internal.StructField('hiddenVisits', 0, 0, mojo.internal.Array(URLVisitSpec.$, false), null, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(Page_OnVisitsRemoved_ParamsSpec.$, 'Page_OnVisitsRemoved_Params', [
    mojo.internal.StructField('removedVisits', 0, 0, mojo.internal.Array(URLVisitSpec.$, false), null, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(Page_OnHistoryDeleted_ParamsSpec.$, 'Page_OnHistoryDeleted_Params', [], [[0, 8],]);
mojo.internal.Struct(Page_OnQueryChangedByUser_ParamsSpec.$, 'Page_OnQueryChangedByUser_Params', [
    mojo.internal.StructField('query', 0, 0, mojo.internal.String, null, false /* nullable */, 0),
], [[0, 16],]);

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class BrowserProxyImpl {
    constructor(handler, callbackRouter) {
        this.handler = handler;
        this.callbackRouter = callbackRouter;
    }
    static getInstance() {
        if (instance$2) {
            return instance$2;
        }
        const handler = PageHandler.getRemote();
        const callbackRouter = new PageCallbackRouter();
        handler.setPage(callbackRouter.$.bindNewPipeAndPassRemote());
        return instance$2 = new BrowserProxyImpl(handler, callbackRouter);
    }
    static setInstance(obj) {
        instance$2 = obj;
    }
}
let instance$2 = null;

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class MetricsProxyImpl {
    recordClusterAction(action, index) {
        BrowserProxyImpl.getInstance().handler.recordClusterAction(action, index);
    }
    recordRelatedSearchAction(action, index) {
        BrowserProxyImpl.getInstance().handler.recordRelatedSearchAction(action, index);
    }
    recordToggledVisibility(visible) {
        BrowserProxyImpl.getInstance().handler.recordToggledVisibility(visible);
    }
    recordVisitAction(action, index, type) {
        BrowserProxyImpl.getInstance().handler.recordVisitAction(action, index, type);
    }
    static getInstance() {
        return instance$1 || (instance$1 = new MetricsProxyImpl());
    }
    static setInstance(obj) {
        instance$1 = obj;
    }
    /**
     * Returns the VisitType based on whether this is a visit to the default
     * search provider's results page.
     */
    static getVisitType(visit) {
        return visit.annotations.includes(Annotation.kSearchResultsPage) ?
            VisitType.kSRP :
            VisitType.kNonSRP;
    }
}
let instance$1 = null;

function getTemplate$g() {
    return html `<!--_html_template_start_--><style include="history-clusters-shared-style">:host{display:block;min-width:0}:host-context([chrome-refresh-2023]):host{--border-color:var(--color-suggestion-chip-border,
        var(--cr-fallback-color-tonal-outline));--icon-color:var(--color-suggestion-chip-icon,
        var(--cr-fallback-color-primary));--pill-padding-text:12px;--pill-padding-icon:8px;--pill-height:28px}a{align-items:center;color:inherit;display:flex;outline:0;text-decoration:none}:host-context([chrome-refresh-2023]) a{overflow:hidden;position:relative}:host(:hover) a{background-color:var(--cr-hover-background-color)}:host(:active) a{background-color:var(--cr-active-background-color)}:host-context([chrome-refresh-2023]):host(:hover) a{background-color:transparent}:host-context([chrome-refresh-2023]):host(:active) a{background-color:transparent}:host-context(.focus-outline-visible) a:focus{box-shadow:inset 0 0 0 2px var(--cr-focus-outline-color)}:host-context([chrome-refresh-2023].focus-outline-visible) a:focus{--pill-padding-icon:9px;--pill-padding-text:13px;border:none;box-shadow:none;outline:2px solid var(--cr-focus-outline-color);outline-offset:0}:host-context([chrome-refresh-2023]) span{position:relative;z-index:1}.icon{--cr-icon-button-margin-start:0;--cr-icon-color:var(--icon-color);--cr-icon-image:url(chrome://resources/images/icon_search.svg);--cr-icon-ripple-margin:0;--cr-icon-ripple-size:20px}:host-context([chrome-refresh-2023]) .icon{--cr-icon-ripple-size:16px;--cr-icon-size:16px}paper-ripple{display:none}:host-context([chrome-refresh-2023]) paper-ripple{--paper-ripple-opacity:1;color:var(--cr-active-background-color);display:block}#hover-layer{display:none}:host-context([chrome-refresh-2023]):host(:hover) #hover-layer{background:var(--cr-hover-background-color);content:'';display:block;inset:0;pointer-events:none;position:absolute}</style>
<a id="searchQueryLink" class="pill pill-icon-start" href$="[[searchQuery.url.url]]" on-click="onClick_" on-auxclick="onAuxClick_" on-keydown="onKeydown_">
  <div id="hover-layer"></div>
  <span class="icon cr-icon"></span>
  <span class="truncate">[[searchQuery.query]]</span>
</a>
<!--_html_template_end_-->`;
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SearchQueryElementBase = mixinBehaviors([PaperRippleBehavior], PolymerElement);
class SearchQueryElement extends SearchQueryElementBase {
    static get is() {
        return 'search-query';
    }
    static get template() {
        return getTemplate$g();
    }
    static get properties() {
        return {
            /**
             * The index of the search query pill.
             */
            index: {
                type: Number,
                value: -1, // Initialized to an invalid value.
            },
            /**
             * The search query to display.
             */
            searchQuery: Object,
        };
    }
    //============================================================================
    // Event handlers
    //============================================================================
    ready() {
        super.ready();
        if (document.documentElement.hasAttribute('chrome-refresh-2023')) {
            this.addEventListener('pointerdown', this.onPointerDown_.bind(this));
            this.addEventListener('pointercancel', this.onPointerCancel_.bind(this));
        }
    }
    onAuxClick_() {
        MetricsProxyImpl.getInstance().recordRelatedSearchAction(RelatedSearchAction.kClicked, this.index);
        // Notify the parent <history-cluster> element of this event.
        this.dispatchEvent(new CustomEvent('related-search-clicked', {
            bubbles: true,
            composed: true,
        }));
    }
    onClick_(event) {
        event.preventDefault(); // Prevent default browser action (navigation).
        // To record metrics.
        this.onAuxClick_();
        this.openUrl_(event);
    }
    onKeydown_(e) {
        // Disable ripple on Space.
        this.noink = e.key === ' ';
        // To be consistent with <history-list>, only handle Enter, and not Space.
        if (e.key !== 'Enter') {
            return;
        }
        this.getRipple().uiDownAction();
        // To record metrics.
        this.onAuxClick_();
        this.openUrl_(e);
        setTimeout(() => this.getRipple().uiUpAction(), 100);
    }
    onPointerDown_() {
        // Ensure ripple is visible.
        this.noink = false;
        this.ensureRipple();
    }
    onPointerCancel_() {
        this.getRipple().clear();
    }
    openUrl_(event) {
        BrowserProxyImpl.getInstance().handler.openHistoryCluster(this.searchQuery.url, {
            middleButton: false,
            altKey: event.altKey,
            ctrlKey: event.ctrlKey,
            metaKey: event.metaKey,
            shiftKey: event.shiftKey,
        });
    }
    // Overridden from PaperRippleBehavior
    /* eslint-disable-next-line @typescript-eslint/naming-convention */
    _createRipple() {
        this._rippleContainer = this.$.searchQueryLink;
        const ripple = super._createRipple();
        return ripple;
    }
}
customElements.define(SearchQueryElement.is, SearchQueryElement);

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview <cr-auto-img> is a specialized <img> that facilitates embedding
 * images into WebUIs via its auto-src attribute. <cr-auto-img> automatically
 * determines if the image is local (e.g. data: or chrome://) or external (e.g.
 * https://), and embeds the image directly or via the chrome://image data
 * source accordingly. Usage:
 *
 *   1. In C++ register |SanitizedImageSource| for your WebUI.
 *
 *   2. In HTML instantiate
 *
 *      <img is="cr-auto-img" auto-src="https://foo.com/bar.png">
 *
 *      If your image URL points to Google Photos storage, meaning it needs an
 *      auth token, you can use the is-google-photos attribute as follows:
 *
 *      <img is="cr-auto-img" auto-src="https://foo.com/bar.png"
 *          is-google-photos>
 *
 *      If you want the image to reset to an empty state when auto-src changes
 *      and the new image is still loading, set the clear-src attribute:
 *
 *      <img is="cr-auto-img" auto-src="[[calculateSrc()]]" clear-src>
 *
 *      If you want your image to be always encoded as a static image (even if
 *      the source image is animated), set the static-encode attribute:
 *
 *      <img is="cr-auto-img" auto-src="https://foo.com/bar.png"
 *          static-encode>
 *
 *      Static images are encoded as PNG by default. If you want your image to
 *      be encoded as a Webp image, set the encode-type attribute to "webp".
 *
 *      <img is="cr-auto-img" auto-src="https://foo.com/bar.png"
 *          static-encode encode-type="webp">
 *
 * NOTE: Since <cr-auto-img> may use the chrome://image data source some images
 * may be transcoded to PNG.
 */
const AUTO_SRC = 'auto-src';
const CLEAR_SRC = 'clear-src';
const IS_GOOGLE_PHOTOS = 'is-google-photos';
const STATIC_ENCODE = 'static-encode';
const ENCODE_TYPE = 'encode-type';
class CrAutoImgElement extends HTMLImageElement {
    static get observedAttributes() {
        return [AUTO_SRC, IS_GOOGLE_PHOTOS, STATIC_ENCODE, ENCODE_TYPE];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name !== AUTO_SRC && name !== IS_GOOGLE_PHOTOS &&
            name !== STATIC_ENCODE && name !== ENCODE_TYPE) {
            return;
        }
        // Changes to |IS_GOOGLE_PHOTOS| are only interesting when the attribute is
        // being added or removed.
        if (name === IS_GOOGLE_PHOTOS &&
            ((oldValue === null) === (newValue === null))) {
            return;
        }
        if (this.hasAttribute(CLEAR_SRC)) {
            // Remove the src attribute so that the old image is not shown while the
            // new one is loading.
            this.removeAttribute('src');
        }
        let url = null;
        try {
            url = new URL(this.getAttribute(AUTO_SRC) || '');
        }
        catch (_) {
        }
        if (!url || url.protocol === 'chrome-untrusted:') {
            // Loading chrome-untrusted:// directly kills the renderer process.
            // Loading chrome-untrusted:// via the chrome://image data source
            // results in a broken image.
            this.removeAttribute('src');
            return;
        }
        if (url.protocol === 'data:' || url.protocol === 'chrome:') {
            this.src = url.href;
            return;
        }
        if (!this.hasAttribute(IS_GOOGLE_PHOTOS) &&
            !this.hasAttribute(STATIC_ENCODE) && !this.hasAttribute(ENCODE_TYPE)) {
            this.src = 'chrome://image?' + url.href;
            return;
        }
        this.src = `chrome://image?url=${encodeURIComponent(url.href)}`;
        if (this.hasAttribute(IS_GOOGLE_PHOTOS)) {
            this.src += `&isGooglePhotos=true`;
        }
        if (this.hasAttribute(STATIC_ENCODE)) {
            this.src += `&staticEncode=true`;
        }
        if (this.hasAttribute(ENCODE_TYPE)) {
            this.src += `&encodeType=${this.getAttribute(ENCODE_TYPE)}`;
        }
    }
    set autoSrc(src) {
        this.setAttribute(AUTO_SRC, src);
    }
    get autoSrc() {
        return this.getAttribute(AUTO_SRC) || '';
    }
    set clearSrc(_) {
        this.setAttribute(CLEAR_SRC, '');
    }
    get clearSrc() {
        return this.getAttribute(CLEAR_SRC) || '';
    }
    set isGooglePhotos(enabled) {
        if (enabled) {
            this.setAttribute(IS_GOOGLE_PHOTOS, '');
        }
        else {
            this.removeAttribute(IS_GOOGLE_PHOTOS);
        }
    }
    get isGooglePhotos() {
        return this.hasAttribute(IS_GOOGLE_PHOTOS);
    }
    set staticEncode(enabled) {
        if (enabled) {
            this.setAttribute(STATIC_ENCODE, '');
        }
        else {
            this.removeAttribute(STATIC_ENCODE);
        }
    }
    get staticEncode() {
        return this.hasAttribute(STATIC_ENCODE);
    }
    set encodeType(type) {
        if (type) {
            this.setAttribute(ENCODE_TYPE, type);
        }
        else {
            this.removeAttribute(ENCODE_TYPE);
        }
    }
    get encodeType() {
        return this.getAttribute(ENCODE_TYPE) || '';
    }
}
customElements.define('cr-auto-img', CrAutoImgElement, { extends: 'img' });

// components/page_image_service/mojom/page_image_service.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ClientIdSpec = { $: mojo.internal.Enum() };
var ClientId;
(function (ClientId) {
    ClientId[ClientId["MIN_VALUE"] = 0] = "MIN_VALUE";
    ClientId[ClientId["MAX_VALUE"] = 4] = "MAX_VALUE";
    ClientId[ClientId["Journeys"] = 0] = "Journeys";
    ClientId[ClientId["JourneysSidePanel"] = 1] = "JourneysSidePanel";
    ClientId[ClientId["NtpRealbox"] = 2] = "NtpRealbox";
    ClientId[ClientId["NtpQuests"] = 3] = "NtpQuests";
    ClientId[ClientId["Bookmarks"] = 4] = "Bookmarks";
})(ClientId || (ClientId = {}));
class PageImageServiceHandlerPendingReceiver {
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'page_image_service.mojom.PageImageServiceHandler', scope);
    }
}
class PageImageServiceHandlerRemote {
    constructor(handle) {
        this.proxy =
            new mojo.internal.interfaceSupport.InterfaceRemoteBase(PageImageServiceHandlerPendingReceiver, handle);
        this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);
        this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
    }
    getPageImageUrl(clientId, pageUrl, options) {
        return this.proxy.sendMessage(0, PageImageServiceHandler_GetPageImageUrl_ParamsSpec.$, PageImageServiceHandler_GetPageImageUrl_ResponseParamsSpec.$, [
            clientId,
            pageUrl,
            options
        ]);
    }
}
class PageImageServiceHandler {
    static get $interfaceName() {
        return "page_image_service.mojom.PageImageServiceHandler";
    }
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote() {
        let remote = new PageImageServiceHandlerRemote;
        remote.$.bindNewPipeAndPassReceiver().bindInBrowser();
        return remote;
    }
}
const OptionsSpec = { $: {} };
const ImageResultSpec = { $: {} };
const PageImageServiceHandler_GetPageImageUrl_ParamsSpec = { $: {} };
const PageImageServiceHandler_GetPageImageUrl_ResponseParamsSpec = { $: {} };
mojo.internal.Struct(OptionsSpec.$, 'Options', [
    mojo.internal.StructField('suggestImages', 0, 0, mojo.internal.Bool, true, false /* nullable */, 0),
    mojo.internal.StructField('optimizationGuideImages', 0, 1, mojo.internal.Bool, true, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(ImageResultSpec.$, 'ImageResult', [
    mojo.internal.StructField('imageUrl', 0, 0, UrlSpec.$, null, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(PageImageServiceHandler_GetPageImageUrl_ParamsSpec.$, 'PageImageServiceHandler_GetPageImageUrl_Params', [
    mojo.internal.StructField('clientId', 0, 0, ClientIdSpec.$, 0, false /* nullable */, 0),
    mojo.internal.StructField('pageUrl', 8, 0, UrlSpec.$, null, false /* nullable */, 0),
    mojo.internal.StructField('options', 16, 0, OptionsSpec.$, null, false /* nullable */, 0),
], [[0, 32],]);
mojo.internal.Struct(PageImageServiceHandler_GetPageImageUrl_ResponseParamsSpec.$, 'PageImageServiceHandler_GetPageImageUrl_ResponseParams', [
    mojo.internal.StructField('result', 0, 0, ImageResultSpec.$, null, true /* nullable */, 0),
], [[0, 16],]);

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview The browser proxy used to access `PageImageService` from WebUI.
 */
class PageImageServiceBrowserProxy {
    constructor(handler) {
        this.handler = handler;
    }
    static getInstance() {
        return instance ||
            (instance = new PageImageServiceBrowserProxy(PageImageServiceHandler.getRemote()));
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;

function getTemplate$f() {
    return html `<!--_html_template_start_--><style>:host{align-items:center;background-color:var(--entity-image-background-color);background-position:center;background-repeat:no-repeat;border-radius:5px;display:flex;flex-shrink:0;height:36px;justify-content:center;margin-inline:0 12px;width:36px}:host([in-side-panel_]){margin-inline:8px 16px}#page-image{border-radius:5px;max-height:100%;max-width:100%}:host([is-image-cover_]) #page-image{height:100%;object-fit:cover;width:100%}</style>

<template is="dom-if" if="[[imageUrl_]]">
  <img id="page-image" is="cr-auto-img" auto-src="[[imageUrl_.url]]">
</template>
<!--_html_template_end_-->`;
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * TODO(tommycli): This element should be renamed to reflect the reality that
 * it's used to both render the visit's "important image" if it exists, and
 * falls back to the favicon if it doesn't exist.
 */
class PageFavicon extends PolymerElement {
    static get is() {
        return 'page-favicon';
    }
    static get template() {
        return getTemplate$f();
    }
    static get properties() {
        return {
            /**
             * Whether the cluster is in the side panel.
             */
            inSidePanel_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('inSidePanel'),
                reflectToAttribute: true,
            },
            /**
             * The element's style attribute.
             */
            style: {
                type: String,
                computed: `computeStyle_(url, imageUrl_)`,
                reflectToAttribute: true,
            },
            /**
             * The URL for which the favicon is shown.
             */
            url: Object,
            /**
             * Whether this visit is known to sync already. Used for the purpose of
             * fetching higher quality favicons in that case.
             */
            isKnownToSync: Boolean,
            /**
             * The URL of the representative image for the page. Not every page has
             * this defined, in which case we fallback to the favicon.
             */
            imageUrl_: {
                type: Object,
                value: null,
            },
            isImageCover_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('isHistoryClustersImageCover'),
                reflectToAttribute: true,
            },
        };
    }
    static get observers() {
        return ['urlAndIsKnownToSyncChanged_(url, isKnownToSync)'];
    }
    //============================================================================
    // Helper methods
    //============================================================================
    getImageUrlForTesting() {
        return this.imageUrl_;
    }
    computeStyle_() {
        if (this.imageUrl_ && this.imageUrl_.url) {
            // Pages with a pre-set image URL don't show the favicon.
            return '';
        }
        if (!this.url) {
            return '';
        }
        return `background-image:${getFaviconForPageURL(this.url.url, this.isKnownToSync, '', /** --favicon-size */ 16)}`;
    }
    async urlAndIsKnownToSyncChanged_() {
        if (!this.url || !this.isKnownToSync ||
            !loadTimeData.getBoolean('isHistoryClustersImagesEnabled')) {
            this.imageUrl_ = null;
            return;
        }
        // Fetch the representative image for this page, if possible.
        const { result } = await PageImageServiceBrowserProxy.getInstance()
            .handler.getPageImageUrl(ClientId.Journeys, this.url, { suggestImages: true, optimizationGuideImages: true });
        if (result) {
            this.imageUrl_ = result.imageUrl;
        }
        else {
            // We must reset imageUrl_ to null, because sometimes the Virtual DOM will
            // reuse the same element for the infinite scrolling list.
            this.imageUrl_ = null;
        }
    }
}
customElements.define(PageFavicon.is, PageFavicon);

function getTemplate$e() {
    return html `<!--_html_template_start_--><style include="history-clusters-shared-style cr-icons">:host{align-items:center;cursor:pointer;display:flex;min-height:64px}:host-context([chrome-refresh-2023]):host([in-side-panel_]){min-height:48px}:host(:hover){background-color:var(--cr-hover-background-color)}.suffix-icons{display:flex;opacity:0;position:absolute;--cr-icon-button-margin-end:8px}.suffix-icons:focus-within,:host(:hover) .suffix-icons{opacity:1;position:static}.hide-visit-icon{--cr-icon-image:url(chrome://resources/cr_components/history_clusters/hide_source_gm_grey_24dp.svg)}:host([in-side-panel_]) .hide-visit-icon{--cr-icon-button-icon-size:16px;--cr-icon-button-size:24px}.icon-more-vert{--cr-icon-button-margin-start:0}:host([in-side-panel_]) .icon-more-vert{--cr-icon-button-icon-size:16px;--cr-icon-button-size:24px}#header{align-items:center;display:flex;flex-grow:1;justify-content:space-between;min-width:0;padding-inline-start:var(--cluster-padding-horizontal)}:host([in-side-panel_]) #header{padding-inline-start:8px}a{color:inherit;text-decoration:none}#link-container{align-items:center;display:flex;margin-inline-end:var(--cluster-padding-horizontal);min-width:0;outline:0;padding-inline:2px}:host(:hover) #link-container{margin-inline-end:0}:host-context([chrome-refresh-2023]):host([in-side-panel_]) #icon{background-color:var(--color-list-item-url-favicon-background,var(--cr-fallback-color-neutral-container));height:40px;width:40px}:host-context(.focus-outline-visible) #link-container:focus{box-shadow:0 0 0 2px var(--cr-focus-outline-color)}#page-info{display:flex;flex-direction:column;min-width:0}#title-and-annotations{align-items:center;display:flex;line-height:2}.annotation{align-items:center;background-color:var(--annotation-background-color);border-radius:4px;color:var(--annotation-text-color);display:inline-flex;flex-shrink:0;font-weight:500;margin-inline-start:12px;padding:0 8px}.annotation+.annotation{margin-inline-start:8px}#title,#url{font-size:.875rem}:host([in-side-panel_]) #title{font-size:.8125rem;line-height:calc(20/13)}:host-context([chrome-refresh-2023]):host([in-side-panel_]) #title{font-size:.75rem;font-weight:500}#url{color:var(--url-color);line-height:1.5}:host([in-side-panel_]) #url{color:var(--side-panel-url-color);font-size:.75rem;line-height:calc(5/3)}:host-context([chrome-refresh-2023]):host([in-side-panel_]) #url{color:var(--color-history-clusters-side-panel-card-secondary-foreground);font-size:.6875rem}#debug-info{color:var(--cr-secondary-text-color)}</style>
<div id="header" on-click="onClick_" on-auxclick="onClick_" on-keydown="onKeydown_" on-contextmenu="onContextMenu_">
  <a id="link-container" href="[[visit.normalizedUrl.url]]">
    <page-favicon id="icon" url="[[visit.normalizedUrl]]" is-known-to-sync="[[visit.isKnownToSync]]">
    </page-favicon>
    <div id="page-info">
      <div id="title-and-annotations">
        <span id="title" class="truncate"></span>
        <template is="dom-repeat" items="[[annotations_]]">
          <span class="annotation">[[item]]</span>
        </template>
      </div>
      <span id="url" class="truncate"></span>
      <span id="debug-info" hidden="[[!debugInfo_]]">[[debugInfo_]]</span>
    </div>
  </a>
  <div class="suffix-icons">
    <cr-icon-button class="hide-visit-icon" title$="[[i18n('hideFromCluster')]]" on-click="onHideSelfButtonClick_" hidden="[[!fromPersistence]]"></cr-icon-button>
    <cr-icon-button id="actionMenuButton" class="icon-more-vert" title$="[[i18n('actionMenuDescription')]]" aria-haspopup="menu" on-click="onActionMenuButtonClick_" hidden="[[!allowDeletingHistory_]]">
    </cr-icon-button>
  </div>
</div>

<cr-lazy-render id="actionMenu">
  <template>
    <cr-action-menu role-description="[[i18n('actionMenuDescription')]]">
      <button id="removeSelfButton" class="dropdown-item" hidden="[[!allowDeletingHistory_]]" on-click="onRemoveSelfButtonClick_">
        [[i18n('removeFromHistory')]]
      </button>
    </cr-action-menu>
  </template>
</cr-lazy-render>
<!--_html_template_end_-->`;
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const WRAPPER_CSS_CLASS = 'search-highlight-wrapper';
const ORIGINAL_CONTENT_CSS_CLASS = 'search-highlight-original-content';
const HIT_CSS_CLASS = 'search-highlight-hit';
/**
 * Applies the highlight UI (yellow rectangle) around all matches in |node|.
 * @param node The text node to be highlighted. |node| ends up
 *     being hidden.
 * @return The new highlight wrapper.
 */
function highlight(node, ranges) {
    assert(ranges.length > 0);
    const wrapper = document.createElement('span');
    wrapper.classList.add(WRAPPER_CSS_CLASS);
    // Use existing node as placeholder to determine where to insert the
    // replacement content.
    assert(node.parentNode);
    node.parentNode.replaceChild(wrapper, node);
    // Keep the existing node around for when the highlights are removed. The
    // existing text node might be involved in data-binding and therefore should
    // not be discarded.
    const span = document.createElement('span');
    span.classList.add(ORIGINAL_CONTENT_CSS_CLASS);
    span.style.display = 'none';
    span.appendChild(node);
    wrapper.appendChild(span);
    const text = node.textContent;
    const tokens = [];
    for (let i = 0; i < ranges.length; ++i) {
        const range = ranges[i];
        const prev = ranges[i - 1] || { start: 0, length: 0 };
        const start = prev.start + prev.length;
        const length = range.start - start;
        tokens.push(text.substr(start, length));
        tokens.push(text.substr(range.start, range.length));
    }
    const last = ranges.slice(-1)[0];
    tokens.push(text.substr(last.start + last.length));
    for (let i = 0; i < tokens.length; ++i) {
        if (i % 2 === 0) {
            wrapper.appendChild(document.createTextNode(tokens[i]));
        }
        else {
            const hitSpan = document.createElement('span');
            hitSpan.classList.add(HIT_CSS_CLASS);
            // Defaults to the color associated with --paper-yellow-500.
            hitSpan.style.backgroundColor =
                'var(--search-highlight-hit-background-color, #ffeb3b)';
            // Defaults to the color associated with --google-grey-900.
            hitSpan.style.color = 'var(--search-highlight-hit-color, #202124)';
            hitSpan.textContent = tokens[i];
            wrapper.appendChild(hitSpan);
        }
    }
    return wrapper;
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Populates `container` with the highlighted `text` based on the mojom provided
 * `match_positions`. This function takes care of converting from the mojom
 * format to the format expected by search_highlight_utils.
 */
function insertHighlightedTextWithMatchesIntoElement(container, text, matches) {
    container.textContent = '';
    const node = document.createTextNode(text);
    container.appendChild(node);
    const ranges = [];
    for (const match of matches) {
        ranges.push({
            start: match.begin,
            length: match.end - match.begin,
        });
    }
    if (ranges.length > 0) {
        highlight(node, ranges);
    }
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview This file provides a custom element displaying a visit to a
 * page within a cluster. A visit features the page favicon, title, a timestamp,
 * as well as an action menu.
 */
/**
 * Maps supported annotations to localized string identifiers.
 */
const annotationToStringId = new Map([
    [Annotation.kBookmarked, 'bookmarked'],
]);
const ClusterMenuElementBase = I18nMixin(PolymerElement);
class VisitRowElement extends ClusterMenuElementBase {
    static get is() {
        return 'url-visit';
    }
    static get template() {
        return getTemplate$e();
    }
    static get properties() {
        return {
            /**
             * The current query for which related clusters are requested and shown.
             */
            query: String,
            /**
             * The visit to display.
             */
            visit: Object,
            /**
             * Whether this visit is within a persisted cluster.
             */
            fromPersistence: Boolean,
            /**
             * Annotations to show for the visit (e.g., whether page was bookmarked).
             */
            annotations_: {
                type: Object,
                computed: 'computeAnnotations_(visit)',
            },
            /**
             * Usually this is true, but this can be false if deleting history is
             * prohibited by Enterprise policy.
             */
            allowDeletingHistory_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('allowDeletingHistory'),
            },
            /**
             * Debug info for the visit.
             */
            debugInfo_: {
                type: String,
                computed: 'computeDebugInfo_(visit)',
            },
            /**
             * Whether the cluster is in the side panel.
             */
            inSidePanel_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('inSidePanel'),
                reflectToAttribute: true,
            },
            /**
             * Page title for the visit. This property is actually unused. The side
             * effect of the compute function is used to insert the HTML elements for
             * highlighting into this.$.title element.
             */
            unusedTitle_: {
                type: String,
                computed: 'computeTitle_(visit)',
            },
            /**
             * This property is actually unused. The side effect of the compute
             * function is used to insert HTML elements for the highlighted
             * `this.visit.urlForDisplay` URL into the `this.$.url` element.
             */
            unusedUrlForDisplay_: {
                type: String,
                computed: 'computeUrlForDisplay_(visit)',
            },
        };
    }
    //============================================================================
    // Event handlers
    //============================================================================
    onAuxClick_() {
        // Notify the parent <history-cluster> element of this event.
        this.dispatchEvent(new CustomEvent('visit-clicked', {
            bubbles: true,
            composed: true,
            detail: this.visit,
        }));
    }
    onClick_(event) {
        // Ignore previously handled events.
        if (event.defaultPrevented) {
            return;
        }
        event.preventDefault(); // Prevent default browser action (navigation).
        // To record metrics.
        this.onAuxClick_();
        this.openUrl_(event);
    }
    onContextMenu_(event) {
        // Because WebUI has a Blink-provided context menu that's suitable, and
        // Side Panel always UIs always have a custom context menu.
        if (!loadTimeData.getBoolean('inSidePanel')) {
            return;
        }
        BrowserProxyImpl.getInstance().handler.showContextMenuForURL(this.visit.normalizedUrl, { x: event.clientX, y: event.clientY });
    }
    onKeydown_(e) {
        // To be consistent with <history-list>, only handle Enter, and not Space.
        if (e.key !== 'Enter') {
            return;
        }
        // To record metrics.
        this.onAuxClick_();
        this.openUrl_(e);
    }
    onActionMenuButtonClick_(event) {
        this.$.actionMenu.get().showAt(this.$.actionMenuButton);
        event.preventDefault(); // Prevent default browser action (navigation).
    }
    onHideSelfButtonClick_(event) {
        this.emitMenuButtonClick_(event, 'hide-visit');
    }
    onRemoveSelfButtonClick_(event) {
        this.emitMenuButtonClick_(event, 'remove-visit');
    }
    emitMenuButtonClick_(event, emitEventName) {
        event.preventDefault(); // Prevent default browser action (navigation).
        this.dispatchEvent(new CustomEvent(emitEventName, {
            bubbles: true,
            composed: true,
            detail: this.visit,
        }));
        this.$.actionMenu.get().close();
    }
    //============================================================================
    // Helper methods
    //============================================================================
    computeAnnotations_(_visit) {
        // Disabling annotations until more appropriate design for annotations in
        // the side panel is complete.
        if (this.inSidePanel_) {
            return [];
        }
        return this.visit.annotations
            .map((annotation) => annotationToStringId.get(annotation))
            .filter((id) => {
            return !!id;
        })
            .map((id) => loadTimeData.getString(id));
    }
    computeDebugInfo_(_visit) {
        if (!loadTimeData.getBoolean('isHistoryClustersDebug')) {
            return '';
        }
        return JSON.stringify(this.visit.debugInfo);
    }
    computeTitle_(_visit) {
        insertHighlightedTextWithMatchesIntoElement(this.$.title, this.visit.pageTitle, this.visit.titleMatchPositions);
        return this.visit.pageTitle;
    }
    computeUrlForDisplay_(_visit) {
        insertHighlightedTextWithMatchesIntoElement(this.$.url, this.visit.urlForDisplay, this.visit.urlForDisplayMatchPositions);
        return this.visit.urlForDisplay;
    }
    openUrl_(event) {
        BrowserProxyImpl.getInstance().handler.openHistoryCluster(this.visit.normalizedUrl, {
            middleButton: event.button === 1,
            altKey: event.altKey,
            ctrlKey: event.ctrlKey,
            metaKey: event.metaKey,
            shiftKey: event.shiftKey,
        });
    }
}
customElements.define(VisitRowElement.is, VisitRowElement);

function getTemplate$d() {
    return html `<!--_html_template_start_--><style include="history-clusters-shared-style cr-icons">:host{--indentation:52px;--search-query-margin:10px;display:block;padding-bottom:var(--cluster-padding-vertical)}:host-context([chrome-refresh-2023]):host([in-side-panel]){--search-query-margin:4px}:host([in-side-panel]){--cr-icon-button-margin-start:8px;padding-bottom:0;padding-top:8px}:host-context([chrome-refresh-2023]):host([in-side-panel]) #container{background:var(--color-side-panel-card-background);border-radius:12px;overflow:hidden}:host([in-side-panel][is-first]){padding-top:0}:host-context(.focus-outline-visible):host(:focus) #container{box-shadow:inset 0 0 0 2px var(--cr-focus-outline-color)}:host([has-hidden-visits_]) #container{margin-bottom:var(--cluster-padding-vertical)}:host([in-side-panel]) #container url-visit:last-of-type{margin-bottom:8px}:host(:not([in-side-panel])) #container{background-color:var(--cr-card-background-color);border-radius:var(--cr-card-border-radius);box-shadow:var(--cr-card-shadow);padding:var(--cluster-padding-vertical) 0}.label-row{align-items:center;display:flex;flex-grow:1;justify-content:space-between;min-height:48px;min-width:0;padding-inline-start:var(--cluster-padding-horizontal)}:host([in-side-panel]) .label-row{min-height:44px;padding-inline-start:16px}#label{color:var(--cr-primary-text-color);font-size:1rem;font-weight:500}:host([in-side-panel]) #label{font-size:.875rem;line-height:calc(10/7);margin-inline-end:16px}:host([in-side-panel]) .timestamp{font-size:.75rem;line-height:calc(5/3)}:host-context([chrome-refresh-2023]):host([in-side-panel_]) .timestamp{font-size:.6875rem}.debug-info{color:var(--cr-secondary-text-color)}#related-searches-divider{display:none}:host-context([chrome-refresh-2023]):host([in-side-panel]) #related-searches-divider{display:block;background-color:var(--color-history-clusters-side-panel-divider);height:1px;margin:8px 16px}:host-context(html:not([chrome-refresh-2023])) #related-searches{margin:0 var(--cluster-padding-horizontal) 0}:host-context(html:not([chrome-refresh-2023])):host([in-side-panel]) #related-searches{margin:-8px 16px var(--cluster-padding-vertical)}:host-context([chrome-refresh-2023]) #related-searches{margin:16px var(--cluster-padding-horizontal) 0}:host-context([chrome-refresh-2023]):host([in-side-panel]) #related-searches{margin:16px 2px}:host-context([chrome-refresh-2023]):host([in-side-panel]) search-query{flex-shrink:0;margin-top:0}search-query:not(:last-of-type){margin-inline-end:var(--search-query-margin)}:host-context([chrome-refresh-2023]):host([in-side-panel]) search-query:first-of-type{margin-inline-start:16px}:host-context(html:not([chrome-refresh-2023])) search-query{margin-top:8px}</style>
<div id="container" on-visit-clicked="onVisitClicked_" on-open-all-visits="onOpenAllVisits_" on-hide-all-visits="onHideAllVisits_" on-remove-all-visits="onRemoveAllVisits_" on-hide-visit="onHideVisit_" on-remove-visit="onRemoveVisit_">
  <div class="label-row">
    <span id="label" class="truncate"></span>
    <img is="cr-auto-img" auto-src="[[imageUrl_]]">
    <div class="debug-info">[[cluster.debugInfo]]</div>
    <div class="timestamp-and-menu">
      <div class="timestamp">[[cluster.visits.0.relativeDate]]</div>
      <cluster-menu></cluster-menu>
    </div>
  </div>
  <template is="dom-repeat" items="[[cluster.visits]]">
    <url-visit visit="[[item]]" query="[[query]]" from-persistence="[[cluster.fromPersistence]]">
    </url-visit>
  </template>
  <div id="related-searches-divider" hidden="[[!cluster.relatedSearches.length]]"></div>
  <horizontal-carousel id="related-searches" hidden="[[!cluster.relatedSearches.length]]" role="list" aria-label$="[[i18n('relatedSearchesHeader')]]" on-related-search-clicked="onRelatedSearchClicked_" on-pointerdown="clearSelection_" in-side-panel$="[[inSidePanel]]">
    <template is="dom-repeat" items="[[relatedSearches_]]">
      <search-query search-query="[[item]]" index="[[index]]" role="listitem">
      </search-query>
    </template>
  </horizontal-carousel>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const HistoryClusterElementBase = I18nMixin(PolymerElement);
class HistoryClusterElement extends HistoryClusterElementBase {
    static get is() {
        return 'history-cluster';
    }
    static get template() {
        return getTemplate$d();
    }
    static get properties() {
        return {
            /**
             * The cluster displayed by this element.
             */
            cluster: Object,
            /**
             * The index of the cluster.
             */
            index: {
                type: Number,
                value: -1, // Initialized to an invalid value.
            },
            /**
             * Whether the cluster is in the side panel.
             */
            inSidePanel: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('inSidePanel'),
                reflectToAttribute: true,
            },
            /**
             * The current query for which related clusters are requested and shown.
             */
            query: String,
            /**
             * The visible related searches.
             */
            relatedSearches_: {
                type: Object,
                computed: `computeRelatedSearches_(cluster.relatedSearches.*)`,
            },
            /**
             * The label for the cluster. This property is actually unused. The side
             * effect of the compute function is used to insert the HTML elements for
             * highlighting into this.$.label element.
             */
            unusedLabel_: {
                type: String,
                computed: 'computeLabel_(cluster.label)',
            },
            /**
             * The cluster's image URL in a form easily passed to cr-auto-img.
             * Also notifies the outer iron-list of a resize.
             */
            imageUrl_: {
                type: String,
                computed: `computeImageUrl_(cluster.imageUrl)`,
            },
        };
    }
    //============================================================================
    // Overridden methods
    //============================================================================
    constructor() {
        super();
        this.onVisitsHiddenListenerId_ = null;
        this.onVisitsRemovedListenerId_ = null;
        this.callbackRouter_ = BrowserProxyImpl.getInstance().callbackRouter;
        // This element receives a tabindex, because it's an iron-list item.
        // However, what we really want to do is to pass that focus onto an
        // eligible child, so we want to set `delegatesFocus` to true. But
        // delegatesFocus removes the text selection. So temporarily removing
        // the delegatesFocus until that issue is fixed.
    }
    connectedCallback() {
        super.connectedCallback();
        this.onVisitsHiddenListenerId_ =
            this.callbackRouter_.onVisitsHidden.addListener(this.onVisitsRemovedOrHidden_.bind(this));
        this.onVisitsRemovedListenerId_ =
            this.callbackRouter_.onVisitsRemoved.addListener(this.onVisitsRemovedOrHidden_.bind(this));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        assert(this.onVisitsHiddenListenerId_);
        this.callbackRouter_.removeListener(this.onVisitsHiddenListenerId_);
        this.onVisitsHiddenListenerId_ = null;
        assert(this.onVisitsRemovedListenerId_);
        this.callbackRouter_.removeListener(this.onVisitsRemovedListenerId_);
        this.onVisitsRemovedListenerId_ = null;
    }
    //============================================================================
    // Event handlers
    //============================================================================
    onRelatedSearchClicked_() {
        MetricsProxyImpl.getInstance().recordClusterAction(ClusterAction.kRelatedSearchClicked, this.index);
    }
    /* Clears selection on non alt mouse clicks. Need to wait for browser to
     *  update the DOM fully. */
    clearSelection_(event) {
        this.onBrowserIdle_().then(() => {
            if (window.getSelection() && !event.altKey) {
                window.getSelection()?.empty();
            }
        });
    }
    onVisitClicked_(event) {
        MetricsProxyImpl.getInstance().recordClusterAction(ClusterAction.kVisitClicked, this.index);
        const visit = event.detail;
        MetricsProxyImpl.getInstance().recordVisitAction(VisitAction.kClicked, this.getVisitIndex_(visit), MetricsProxyImpl.getVisitType(visit));
    }
    onOpenAllVisits_() {
        BrowserProxyImpl.getInstance().handler.openVisitUrlsInTabGroup(this.cluster.visits, this.cluster.tabGroupName ?? null);
        MetricsProxyImpl.getInstance().recordClusterAction(ClusterAction.kOpenedInTabGroup, this.index);
    }
    onHideAllVisits_() {
        this.dispatchEvent(new CustomEvent('hide-visits', {
            bubbles: true,
            composed: true,
            detail: this.cluster.visits,
        }));
    }
    onRemoveAllVisits_() {
        // Pass event up with new detail of all this cluster's visits.
        this.dispatchEvent(new CustomEvent('remove-visits', {
            bubbles: true,
            composed: true,
            detail: this.cluster.visits,
        }));
    }
    onHideVisit_(event) {
        // The actual hiding is handled in clusters.ts. This is just a good place to
        // record the metric.
        const visit = event.detail;
        MetricsProxyImpl.getInstance().recordVisitAction(VisitAction.kHidden, this.getVisitIndex_(visit), MetricsProxyImpl.getVisitType(visit));
    }
    onRemoveVisit_(event) {
        // The actual removal is handled in clusters.ts. This is just a good place
        // to record the metric.
        const visit = event.detail;
        MetricsProxyImpl.getInstance().recordVisitAction(VisitAction.kDeleted, this.getVisitIndex_(visit), MetricsProxyImpl.getVisitType(visit));
        this.dispatchEvent(new CustomEvent('remove-visits', {
            bubbles: true,
            composed: true,
            detail: [visit],
        }));
    }
    //============================================================================
    // Helper methods
    //============================================================================
    /**
     * Returns a promise that resolves when the browser is idle.
     */
    onBrowserIdle_() {
        return new Promise(resolve => {
            requestIdleCallback(() => {
                resolve();
            });
        });
    }
    /**
     * Called with the original remove or hide params when the last accepted
     * request to browser to remove or hide visits succeeds. Since the same visit
     * may appear in multiple Clusters, all Clusters receive this callback in
     * order to get a chance to remove their matching visits.
     */
    onVisitsRemovedOrHidden_(removedVisits) {
        const visitHasBeenRemoved = (visit) => {
            return removedVisits.findIndex((removedVisit) => {
                if (visit.normalizedUrl.url !== removedVisit.normalizedUrl.url) {
                    return false;
                }
                // Remove the visit element if any of the removed visit's raw timestamps
                // matches the canonical raw timestamp.
                const rawVisitTime = visit.rawVisitData.visitTime.internalValue;
                return (removedVisit.rawVisitData.visitTime.internalValue ===
                    rawVisitTime) ||
                    removedVisit.duplicates.map(data => data.visitTime.internalValue)
                        .includes(rawVisitTime);
            }) !== -1;
        };
        const allVisits = this.cluster.visits;
        const remainingVisits = allVisits.filter(v => !visitHasBeenRemoved(v));
        if (allVisits.length === remainingVisits.length) {
            return;
        }
        if (!remainingVisits.length) {
            // If all the visits are removed, fire an event to also remove this
            // cluster from the list of clusters.
            this.dispatchEvent(new CustomEvent('remove-cluster', {
                bubbles: true,
                composed: true,
                detail: this.index,
            }));
            MetricsProxyImpl.getInstance().recordClusterAction(ClusterAction.kDeleted, this.index);
        }
        else {
            this.set('cluster.visits', remainingVisits);
        }
        this.dispatchEvent(new CustomEvent('iron-resize', {
            bubbles: true,
            composed: true,
        }));
    }
    computeLabel_() {
        if (!this.cluster.label) {
            // This never happens unless we misconfigured our variations config.
            // This sentinel string matches the Android UI.
            return 'no_label';
        }
        insertHighlightedTextWithMatchesIntoElement(this.$.label, this.cluster.label, this.cluster.labelMatchPositions);
        return this.cluster.label;
    }
    computeRelatedSearches_() {
        return this.cluster.relatedSearches.filter((query, index) => {
            return query && !(this.inSidePanel && index > 2);
        });
    }
    computeImageUrl_() {
        if (!this.cluster.imageUrl) {
            return '';
        }
        // iron-list can't handle our size changing because of loading an image
        // without an explicit event. But we also can't send this until we have
        // updated the image property, so send it on the next idle.
        requestIdleCallback(() => {
            this.dispatchEvent(new CustomEvent('iron-resize', {
                bubbles: true,
                composed: true,
            }));
        });
        return this.cluster.imageUrl.url;
    }
    /**
     * Returns the index of `visit` among the visits in the cluster. Returns -1
     * if the visit is not found in the cluster at all.
     */
    getVisitIndex_(visit) {
        return this.cluster.visits.indexOf(visit);
    }
}
customElements.define(HistoryClusterElement.is, HistoryClusterElement);

function getTemplate$c() {
    return html `<!--_html_template_start_-->    <style>:host{--cr-toast-background:#323232;--cr-toast-button-color:var(--google-blue-300);--cr-toast-text-color:#fff}@media (prefers-color-scheme:dark){:host{--cr-toast-background:var(--google-grey-900) linear-gradient(rgba(255, 255, 255, .06), rgba(255, 255, 255, .06));--cr-toast-button-color:var(--google-blue-300);--cr-toast-text-color:var(--google-grey-200)}}:host{align-items:center;background:var(--cr-toast-background);border-radius:4px;bottom:0;box-shadow:0 2px 4px 0 rgba(0,0,0,.28);box-sizing:border-box;display:flex;margin:24px;max-width:568px;min-height:52px;min-width:288px;opacity:0;padding:0 24px;position:fixed;transform:translateY(100px);transition:opacity .3s,transform .3s;visibility:hidden;z-index:1}:host-context([chrome-refresh-2023]):host{--cr-toast-background:var(--color-toast-background,
            var(--cr-fallback-color-inverse-surface));--cr-toast-button-color:var(--color-toast-button,
            var(--cr-fallback-color-inverse-primary));--cr-toast-text-color:var(--color-toast-foreground,
            var(--cr-fallback-color-inverse-on-surface));border-radius:8px;line-height:20px;padding:0 16px}:host-context([dir=ltr]){left:0}:host-context([dir=rtl]){right:0}:host([open]){opacity:1;transform:translateY(0);visibility:visible}:host ::slotted(*){color:var(--cr-toast-text-color)}:host ::slotted(cr-button){background-color:transparent!important;border:none!important;color:var(--cr-toast-button-color)!important;margin-inline-start:32px!important;min-width:52px!important;padding:8px!important}:host ::slotted(cr-button:hover){background-color:transparent!important}:host-context([chrome-refresh-2023]) ::slotted(cr-button:last-of-type){margin-inline-end:-8px}</style>
    <slot></slot>
<!--_html_template_end_-->`;
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A lightweight toast.
 */
class CrToastElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.hideTimeoutId_ = null;
    }
    static get is() {
        return 'cr-toast';
    }
    static get template() {
        return getTemplate$c();
    }
    static get properties() {
        return {
            duration: {
                type: Number,
                value: 0,
            },
            open: {
                readOnly: true,
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
        };
    }
    static get observers() {
        return ['resetAutoHide_(duration, open)'];
    }
    /**
     * Cancels existing auto-hide, and sets up new auto-hide.
     */
    resetAutoHide_() {
        if (this.hideTimeoutId_ !== null) {
            window.clearTimeout(this.hideTimeoutId_);
            this.hideTimeoutId_ = null;
        }
        if (this.open && this.duration !== 0) {
            this.hideTimeoutId_ = window.setTimeout(() => {
                this.hide();
            }, this.duration);
        }
    }
    /**
     * Shows the toast and auto-hides after |this.duration| milliseconds has
     * passed. If the toast is currently being shown, any preexisting auto-hide
     * is cancelled and replaced with a new auto-hide.
     */
    show() {
        // Force autohide to reset if calling show on an already shown toast.
        const shouldResetAutohide = this.open;
        // The role attribute is removed first so that screen readers to better
        // ensure that screen readers will read out the content inside the toast.
        // If the role is not removed and re-added back in, certain screen readers
        // do not read out the contents, especially if the text remains exactly
        // the same as a previous toast.
        this.removeAttribute('role');
        // Reset the aria-hidden attribute as screen readers need to access the
        // contents of an opened toast.
        this.removeAttribute('aria-hidden');
        this._setOpen(true);
        this.setAttribute('role', 'alert');
        if (shouldResetAutohide) {
            this.resetAutoHide_();
        }
    }
    /**
     * Hides the toast and ensures that screen readers cannot its contents while
     * hidden.
     */
    hide() {
        this.setAttribute('aria-hidden', 'true');
        this._setOpen(false);
    }
}
customElements.define(CrToastElement.is, CrToastElement);

/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/**
`iron-scroll-threshold` is a utility element that listens for `scroll` events
from a scrollable region and fires events to indicate when the scroller has
reached a pre-defined limit, specified in pixels from the upper and lower bounds
of the scrollable region. This element may wrap a scrollable region and will
listen for `scroll` events bubbling through it from its children.  In this case,
care should be taken that only one scrollable region with the same orientation
as this element is contained within. Alternatively, the `scrollTarget` property
can be set/bound to a non-child scrollable region, from which it will listen for
events.

Once a threshold has been reached, a `lower-threshold` or `upper-threshold`
event will be fired, at which point the user may perform actions such as
lazily-loading more data to be displayed. After any work is done, the user must
then clear the threshold by calling the `clearTriggers` method on this element,
after which it will begin listening again for the scroll position to reach the
threshold again assuming the content in the scrollable region has grown. If the
user no longer wishes to receive events (e.g. all data has been exhausted), the
threshold property in question (e.g. `lowerThreshold`) may be set to a falsy
value to disable events and clear the associated triggered property.

### Example

```html
<iron-scroll-threshold on-lower-threshold="loadMoreData">
  <div>content</div>
</iron-scroll-threshold>
```

```js
  loadMoreData: function() {
    // load async stuff. e.g. XHR
    asyncStuff(function done() {
      ironScrollTheshold.clearTriggers();
    });
  }
```

### Using dom-repeat

```html
<iron-scroll-threshold on-lower-threshold="loadMoreData">
  <template is="dom-repeat" items="[[items]]">
    <div>[[index]]</div>
  </template>
</iron-scroll-threshold>
```

### Using iron-list

```html
<iron-scroll-threshold on-lower-threshold="loadMoreData" id="threshold">
  <iron-list scroll-target="threshold" items="[[items]]">
    <template>
      <div>[[index]]</div>
    </template>
  </iron-list>
</iron-scroll-threshold>
```

@group Iron Element
@element iron-scroll-threshold
@demo demo/scrolling-region.html Scrolling Region
@demo demo/document.html Document Element
*/
Polymer({
  _template: html`
    <style>
      :host {
        display: block;
      }
    </style>

    <slot></slot>
`,

  is: 'iron-scroll-threshold',

  properties: {

    /**
     * Distance from the top (or left, for horizontal) bound of the scroller
     * where the "upper trigger" will fire.
     */
    upperThreshold: {type: Number, value: 100},

    /**
     * Distance from the bottom (or right, for horizontal) bound of the scroller
     * where the "lower trigger" will fire.
     */
    lowerThreshold: {type: Number, value: 100},

    /**
     * Read-only value that tracks the triggered state of the upper threshold.
     */
    upperTriggered: {type: Boolean, value: false, notify: true, readOnly: true},

    /**
     * Read-only value that tracks the triggered state of the lower threshold.
     */
    lowerTriggered: {type: Boolean, value: false, notify: true, readOnly: true},

    /**
     * True if the orientation of the scroller is horizontal.
     */
    horizontal: {type: Boolean, value: false}
  },

  behaviors: [IronScrollTargetBehavior],

  observers:
      ['_setOverflow(scrollTarget)', '_initCheck(horizontal, isAttached)'],

  get _defaultScrollTarget() {
    return this;
  },

  _setOverflow: function(scrollTarget) {
    this.style.overflow = scrollTarget === this ? 'auto' : '';
    this.style.webkitOverflowScrolling = scrollTarget === this ? 'touch' : '';
  },

  _scrollHandler: function() {
    // throttle the work on the scroll event
    var THROTTLE_THRESHOLD = 200;
    if (!this.isDebouncerActive('_checkTheshold')) {
      this.debounce('_checkTheshold', function() {
        this.checkScrollThresholds();
      }, THROTTLE_THRESHOLD);
    }
  },

  _initCheck: function(horizontal, isAttached) {
    if (isAttached) {
      this.debounce('_init', function() {
        this.clearTriggers();
        this.checkScrollThresholds();
      });
    }
  },

  /**
   * Checks the scroll thresholds.
   * This method is automatically called by iron-scroll-threshold.
   *
   * @method checkScrollThresholds
   */
  checkScrollThresholds: function() {
    if (!this.scrollTarget || (this.lowerTriggered && this.upperTriggered)) {
      return;
    }
    var upperScrollValue = this.horizontal ? this._scrollLeft : this._scrollTop;
    var lowerScrollValue = this.horizontal ? this.scrollTarget.scrollWidth -
            this._scrollTargetWidth - this._scrollLeft :
                                             this.scrollTarget.scrollHeight -
            this._scrollTargetHeight - this._scrollTop;

    // Detect upper threshold
    if (upperScrollValue <= this.upperThreshold && !this.upperTriggered) {
      this._setUpperTriggered(true);
      this.fire('upper-threshold');
    }
    // Detect lower threshold
    if (lowerScrollValue <= this.lowerThreshold && !this.lowerTriggered) {
      this._setLowerTriggered(true);
      this.fire('lower-threshold');
    }
  },

  checkScrollThesholds: function() {
    // iron-scroll-threshold/issues/16
    this.checkScrollThresholds();
  },

  /**
   * Clear the upper and lower threshold states.
   *
   * @method clearTriggers
   */
  clearTriggers: function() {
    this._setUpperTriggered(false);
    this._setLowerTriggered(false);
  }

  /**
   * Fires when the lower threshold has been reached.
   *
   * @event lower-threshold
   */

  /**
   * Fires when the upper threshold has been reached.
   *
   * @event upper-threshold
   */
});

function getTemplate$b() {
    return html `<!--_html_template_start_--><style include="history-clusters-shared-style">:host{color:var(--cr-primary-text-color);display:block;font-size:.875rem;overflow-y:auto}cr-dialog::part(dialog){--cr-dialog-width:min(calc(100% - 32px), 512px)}:host([in-side-panel_]) cr-toast{margin:16px}#clusters{margin:0 auto;max-width:var(--cluster-max-width);min-width:var(--cluster-min-width);padding:var(--first-cluster-padding-top) var(--cluster-padding-horizontal) 0}:host([in-side-panel_]) #clusters{min-width:0;padding:8px 0 0}:host-context([chrome-refresh-2023]):host([in-side-panel_]) #clusters{padding:0}:host-context(.focus-outline-visible) history-cluster:focus,history-cluster:focus-visible{outline:0}:host([in-side-panel_]) history-cluster{border-bottom:4px solid var(--cr-separator-color)}:host-context([chrome-refresh-2023]):host([in-side-panel_]) history-cluster{border-bottom:none}:host([in-side-panel_]) history-cluster[is-last]{border-bottom:none}#placeholder{align-items:center;color:var(--md-loading-message-color);display:flex;flex:1;font-size:inherit;font-weight:500;height:100%;justify-content:center}#footer{display:flex;justify-content:center;padding:0 var(--cluster-padding-horizontal) var(--cluster-padding-vertical)}:host-context([chrome-refresh-2023]):host([in-side-panel_]) #footer{padding-top:var(--cluster-padding-vertical)}:host-context([chrome-refresh-2023]):host([in-side-panel_]) cr-dialog{--cr-dialog-background-color:var(--color-history-clusters-side-panel-dialog-background);--cr-primary-text-color:var(--color-history-clusters-side-panel-dialog-primary-foreground);--cr-secondary-text-color:var(
        --color-history-clusters-side-panel-dialog-secondary-foreground);--cr-dialog-title-font-size:16px;--cr-dialog-title-slot-padding-bottom:8px;font-weight:500}:host-context([chrome-refresh-2023]):host([in-side-panel_]) cr-dialog::part(dialog){--scroll-border-color:var(--color-history-clusters-side-panel-dialog-divider);border-radius:12px;box-shadow:var(--cr-elevation-3)}</style>
<div id="placeholder" hidden="[[!placeholderText_]]">
  [[placeholderText_]]
</div>
<iron-list id="clusters" items="[[result_.clusters]]" on-hide-visit="onHideVisit_" on-hide-visits="onHideVisits_" on-remove-visits="onRemoveVisits_" hidden="[[!result_.clusters.length]]">
  
  <template>
    <history-cluster cluster="[[item]]" index="[[index]]" query="[[result_.query]]" tabindex$="[[tabIndex]]" on-remove-cluster="onRemoveCluster_" is-first$="[[!index]]" is-last$="[[isLastCluster_(index, result_.clusters.*)]]">
    </history-cluster>
  </template>
</iron-list>
<div id="footer" hidden="[[getLoadMoreButtonHidden_(
    result_, result_.clusters.*, result_.canLoadMore)]]">
  <cr-button id="loadMoreButton" on-click="onLoadMoreButtonClick_" hidden$="[[showSpinner_]]">
    [[i18n('loadMoreButtonLabel')]]
  </cr-button>
  <iron-icon src="chrome://resources/images/throbber_small.svg" hidden$="[[!showSpinner_]]"></iron-icon>
</div>
<iron-scroll-threshold id="scrollThreshold" lower-threshold="500" on-lower-threshold="onScrolledToBottom_">
</iron-scroll-threshold>
<cr-lazy-render id="confirmationDialog">
  <template>
    <cr-dialog consume-keydown-event on-cancel="onConfirmationDialogCancel_">
      <div slot="title">[[i18n('removeSelected')]]</div>
      <div slot="body">[[i18n('deleteWarning')]]</div>
      <div slot="button-container">
        <cr-button class="cancel-button" on-click="onCancelButtonClick_">
          [[i18n('cancel')]]
        </cr-button>
        <cr-button class="action-button" on-click="onRemoveButtonClick_">
          [[i18n('deleteConfirm')]]
        </cr-button>
      </div>
    </cr-dialog>
  </template>
</cr-lazy-render>
<cr-lazy-render id="confirmationToast">
  <template>
    <cr-toast duration="5000">
      <div>[[i18n('removeFromHistoryToast')]]</div>
    </cr-toast>
  </template>
</cr-lazy-render>
<!--_html_template_end_-->`;
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const HistoryClustersElementBase = I18nMixin(PolymerElement);
class HistoryClustersElement extends HistoryClustersElementBase {
    static get is() {
        return 'history-clusters';
    }
    static get template() {
        return getTemplate$b();
    }
    static get properties() {
        return {
            /**
             * Whether the clusters are in the side panel.
             */
            inSidePanel_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('inSidePanel'),
                reflectToAttribute: true,
            },
            /**
             * The current query for which related clusters are requested and shown.
             */
            query: {
                type: String,
                observer: 'onQueryChanged_',
                value: '',
            },
            /**
             * The placeholder text to show when the results are empty.
             */
            placeholderText_: {
                type: String,
                computed: `computePlaceholderText_(result_.*)`,
            },
            /**
             * The browser response to a request for the freshest clusters related to
             * a given query until an optional given end time (or the present time).
             */
            result_: Object,
            /**
             * Boolean determining if spinner shows instead of load more button.
             */
            showSpinner_: {
                type: Boolean,
                value: false,
            },
            /**
             * The list of visits to be removed. A non-empty array indicates a pending
             * remove request to the browser.
             */
            visitsToBeRemoved_: {
                type: Object,
                value: () => [],
            },
        };
    }
    //============================================================================
    // Overridden methods
    //============================================================================
    constructor() {
        super();
        this.onClustersQueryResultListenerId_ = null;
        this.onClusterImageUpdatedListenerId_ = null;
        this.onVisitsRemovedListenerId_ = null;
        this.onHistoryDeletedListenerId_ = null;
        this.onQueryChangedByUserListenerId_ = null;
        this.pageHandler_ = BrowserProxyImpl.getInstance().handler;
        this.callbackRouter_ = BrowserProxyImpl.getInstance().callbackRouter;
    }
    connectedCallback() {
        super.connectedCallback();
        // Register a per-document singleton focus outline manager. Some of our
        // child elements depend on the CSS classes set by this singleton.
        FocusOutlineManager.forDocument(document);
        this.$.clusters.notifyResize();
        this.$.clusters.scrollTarget = this;
        this.$.scrollThreshold.scrollTarget = this;
        this.onClustersQueryResultListenerId_ =
            this.callbackRouter_.onClustersQueryResult.addListener(this.onClustersQueryResult_.bind(this));
        this.onClusterImageUpdatedListenerId_ =
            this.callbackRouter_.onClusterImageUpdated.addListener(this.onClusterImageUpdated_.bind(this));
        this.onVisitsRemovedListenerId_ =
            this.callbackRouter_.onVisitsRemoved.addListener(this.onVisitsRemoved_.bind(this));
        this.onHistoryDeletedListenerId_ =
            this.callbackRouter_.onHistoryDeleted.addListener(this.onHistoryDeleted_.bind(this));
        this.onQueryChangedByUserListenerId_ =
            this.callbackRouter_.onQueryChangedByUser.addListener(this.onQueryChangedByUser_.bind(this));
        if (this.inSidePanel_) {
            this.pageHandler_.showSidePanelUI();
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        assert(this.onClustersQueryResultListenerId_);
        this.callbackRouter_.removeListener(this.onClustersQueryResultListenerId_);
        this.onClustersQueryResultListenerId_ = null;
        assert(this.onVisitsRemovedListenerId_);
        this.callbackRouter_.removeListener(this.onVisitsRemovedListenerId_);
        this.onVisitsRemovedListenerId_ = null;
        assert(this.onHistoryDeletedListenerId_);
        this.callbackRouter_.removeListener(this.onHistoryDeletedListenerId_);
        this.onHistoryDeletedListenerId_ = null;
        assert(this.onQueryChangedByUserListenerId_);
        this.callbackRouter_.removeListener(this.onQueryChangedByUserListenerId_);
        this.onQueryChangedByUserListenerId_ = null;
    }
    //============================================================================
    // Event handlers
    //============================================================================
    onCancelButtonClick_() {
        this.visitsToBeRemoved_ = [];
        this.$.confirmationDialog.get().close();
    }
    onConfirmationDialogCancel_() {
        this.visitsToBeRemoved_ = [];
    }
    onLoadMoreButtonClick_() {
        if (this.result_ && this.result_.canLoadMore) {
            this.showSpinner_ = true;
            // Prevent sending further load-more requests until this one finishes.
            this.set('result_.canLoadMore', false);
            this.pageHandler_.loadMoreClusters(this.result_.query);
        }
    }
    onRemoveButtonClick_() {
        this.pageHandler_.removeVisits(this.visitsToBeRemoved_).then(() => {
            // The returned promise resolves with whether the request succeeded in the
            // browser. That value may be used to show a toast but is ignored for now.
            // Allow remove requests again.
            this.visitsToBeRemoved_ = [];
        });
        this.$.confirmationDialog.get().close();
    }
    /**
     * Called with `event` received from a visit requesting to be hidden.
     */
    onHideVisit_(event) {
        this.pageHandler_.hideVisits([event.detail]);
    }
    /**
     * Called with `event` received from visits requesting to be hidden.
     */
    onHideVisits_(event) {
        this.pageHandler_.hideVisits(event.detail);
    }
    /**
     * Called with `event` received from a cluster requesting to be removed from
     * the list when all its visits have been removed. Contains the cluster index.
     */
    onRemoveCluster_(event) {
        const index = event.detail;
        this.splice('result_.clusters', index, 1);
    }
    /**
     * Called with `event` received from a visit requesting to be removed. `event`
     * may contain the related visits of the said visit, if applicable.
     */
    onRemoveVisits_(event) {
        // Return early if there is a pending remove request.
        if (this.visitsToBeRemoved_.length) {
            return;
        }
        this.visitsToBeRemoved_ = event.detail;
        if (this.visitsToBeRemoved_.length > 1) {
            this.$.confirmationDialog.get().showModal();
        }
        else {
            // Bypass the confirmation dialog if removing one visit only.
            this.onRemoveButtonClick_();
        }
    }
    /**
     * Called when the scrollable area has been scrolled nearly to the bottom.
     */
    onScrolledToBottom_() {
        this.$.scrollThreshold.clearTriggers();
        if (this.shadowRoot.querySelector(':focus-visible')) {
            // If some element of ours is keyboard-focused, don't automatically load
            // more clusters. It loses the user's position and messes up screen
            // readers. Let the user manually click the "Load More" button, if needed.
            // We use :focus-visible here, because :focus is triggered by mouse focus
            // too. And `FocusOutlineManager.visible()` is too primitive. It's true
            // on page load, and whenever the user is typing in the searchbox.
            return;
        }
        this.onLoadMoreButtonClick_();
    }
    //============================================================================
    // Helper methods
    //============================================================================
    computePlaceholderText_() {
        if (!this.result_) {
            return '';
        }
        return this.result_.clusters.length ?
            '' :
            loadTimeData.getString(this.result_.query ? 'noSearchResults' :
                'historyClustersNoResults');
    }
    /**
     * Returns true and hides the button unless we actually have more results to
     * load. Note we don't actually hide this button based on keyboard-focus
     * state. This is because if the user is using the mouse, more clusters are
     * loaded before the user ever gets a chance to see this button.
     */
    getLoadMoreButtonHidden_(_result, _resultClusters, _resultCanLoadMore) {
        return !this.result_ || this.result_.clusters.length === 0 ||
            !this.result_.canLoadMore;
    }
    /**
     * Returns whether the given index corresponds to the last cluster.
     */
    isLastCluster_(index) {
        return index === this.result_.clusters.length - 1;
    }
    /**
     * Returns a promise that resolves when the browser is idle.
     */
    onBrowserIdle_() {
        return new Promise(resolve => {
            requestIdleCallback(() => {
                resolve();
            });
        });
    }
    onClustersQueryResult_(result) {
        if (result.isContinuation) {
            // Do not replace the existing result when `result` contains a partial
            // set of clusters that should be appended to the existing ones.
            this.push('result_.clusters', ...result.clusters);
            this.set('result_.canLoadMore', result.canLoadMore);
        }
        else {
            // Scroll to the top when `result` contains a new set of clusters.
            this.scrollTop = 0;
            this.result_ = result;
        }
        // Handle the "tall monitor" edge case: if the returned results are are
        // shorter than the vertical viewport, the <history-clusters> element will
        // not have a scrollbar, and the user will never be able to trigger the
        // iron-scroll-threshold to request more results. Therefore, immediately
        // request more results if there is no scrollbar to fill the viewport.
        //
        // This should happen quite rarely in the queryless state since the backend
        // transparently tries to get at least ~100 visits to cluster.
        //
        // This is likely to happen very frequently in the search query state, since
        // many clusters will not match the search query and will be discarded.
        //
        // Do this on browser idle to avoid jank and to give the DOM a chance to be
        // updated with the results we just got.
        this.onBrowserIdle_().then(() => {
            if (this.scrollHeight <= this.clientHeight && this.result_.canLoadMore) {
                this.onLoadMoreButtonClick_();
            }
        });
        this.showSpinner_ = false;
    }
    /**
     * Called when an image has become available for `clusterIndex`.
     */
    onClusterImageUpdated_(clusterIndex, imageUrl) {
        // TODO(tommycli): Make deletions handle `clusterIndex` properly.
        this.set(`result_.clusters.${clusterIndex}.imageUrl`, imageUrl);
    }
    /**
     * Called when the user entered search query changes. Also used to fetch the
     * initial set of clusters when the page loads.
     */
    onQueryChanged_() {
        this.onBrowserIdle_().then(() => {
            if (this.result_ && this.result_.canLoadMore) {
                // Prevent sending further load-more requests until this one finishes.
                this.set('result_.canLoadMore', false);
            }
            this.pageHandler_.startQueryClusters(this.query.trim(), new URLSearchParams(window.location.search).has('recluster'));
        });
    }
    /**
     * Called with the original remove params when the last accepted request to
     * browser to remove visits succeeds.
     */
    onVisitsRemoved_(removedVisits) {
        // Show the confirmation toast once done removing one visit only; since a
        // confirmation dialog was not shown prior to the action.
        if (removedVisits.length === 1) {
            this.$.confirmationToast.get().show();
        }
    }
    /**
     * Called when History is deleted from a different tab.
     */
    onHistoryDeleted_() {
        // Just re-issue the existing query to "reload" the results and display
        // the externally deleted History. It would be nice if we could save the
        // user's scroll position, but History doesn't do that either.
        this.onQueryChanged_();
    }
    /**
     * Called when the query is changed by the user externally.
     */
    onQueryChangedByUser_(query) {
        // Don't directly change the query, but instead let the containing element
        // update the searchbox UI. That in turn will cause this object to issue
        // a new query to the backend.
        this.dispatchEvent(new CustomEvent('query-changed-by-user', {
            bubbles: true,
            composed: true,
            detail: query,
        }));
    }
}
customElements.define(HistoryClustersElement.is, HistoryClustersElement);

function getTemplate$a() {
    return html `<!--_html_template_start_-->    <style include="cr-hidden-style">:host{cursor:pointer;display:flex;flex-direction:row;font-size:var(--cr-tabs-font-size,14px);font-weight:500;height:var(--cr-tabs-height,48px);user-select:none}.tab{align-items:center;color:var(--cr-secondary-text-color);display:flex;flex:auto;height:100%;justify-content:center;opacity:.8;outline:0;padding:0 var(--cr-tabs-tab-inline-padding,0);position:relative;transition:opacity .1s cubic-bezier(.4,0,1,1)}:host-context(.focus-outline-visible) .tab:focus{outline:var(--cr-tabs-focus-outline,auto)}.selected{color:var(--cr-tabs-selected-color,var(--google-blue-600));opacity:1}@media (prefers-color-scheme:dark){.selected{color:var(--cr-tabs-selected-color,var(--google-blue-300))}}.tab-icon{-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--cr-tabs-icon-size,var(--cr-icon-size));background-color:var(--cr-secondary-text-color);display:none;height:var(--cr-tabs-icon-size,var(--cr-icon-size));margin-inline-end:var(--cr-tabs-icon-margin-end,var(--cr-icon-size));width:var(--cr-tabs-icon-size,var(--cr-icon-size))}.selected .tab-icon{background-color:var(--cr-tabs-selected-color,var(--google-blue-600))}@media (prefers-color-scheme:dark){.selected .tab-icon{background-color:var(--cr-tabs-selected-color,var(--google-blue-300))}}.tab-indicator{background:var(--cr-tabs-selected-color,var(--google-blue-600));border-top-left-radius:var(--cr-tabs-selection-bar-width,2px);border-top-right-radius:var(--cr-tabs-selection-bar-width,2px);bottom:0;height:var(--cr-tabs-selection-bar-width,2px);left:var(--cr-tabs-tab-inline-padding,0);opacity:0;position:absolute;right:var(--cr-tabs-tab-inline-padding,0);transform-origin:left center;transition:transform}.selected .tab-indicator{opacity:1}.tab-indicator.expand{transition-duration:150ms;transition-timing-function:cubic-bezier(.4,0,1,1)}.tab-indicator.contract{transition-duration:180ms;transition-timing-function:cubic-bezier(0,0,.2,1)}@media (prefers-color-scheme:dark){.tab-indicator{background:var(--cr-tabs-selected-color,var(--google-blue-300))}}@media (forced-colors:active){.tab-indicator{background:SelectedItem}}</style>
    <template is="dom-repeat" items="[[tabNames]]">
      <div role="tab" class$="tab [[getSelectedClass_(index, selected)]]" on-click="onTabClick_" aria-selected$="[[getAriaSelected_(index, selected)]]" tabindex$="[[getTabindex_(index, selected)]]">
        <div class="tab-icon" style$="[[getIconStyle_(index)]]">
        </div>
        [[item]]
        <div class="tab-indicator"></div>
      </div>
    </template>
<!--_html_template_end_-->`;
}

// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'cr-tabs' is a control used for selecting different sections or
 * tabs. cr-tabs was created to replace paper-tabs and paper-tab. cr-tabs
 * displays the name of each tab provided by |tabs|. A 'selected-changed' event
 * is fired any time |selected| is changed.
 *
 * cr-tabs takes its #selectionBar animation from paper-tabs.
 *
 * Keyboard behavior
 *   - Home, End, ArrowLeft and ArrowRight changes the tab selection
 *
 * Known limitations
 *   - no "disabled" state for the cr-tabs as a whole or individual tabs
 *   - cr-tabs does not accept any <slot> (not necessary as of this writing)
 *   - no horizontal scrolling, it is assumed that tabs always fit in the
 *     available space
 */
class CrTabsElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.isRtl_ = false;
        this.lastSelected_ = null;
    }
    static get is() {
        return 'cr-tabs';
    }
    static get template() {
        return getTemplate$a();
    }
    static get properties() {
        return {
            // Optional icon urls displayed in each tab.
            tabIcons: {
                type: Array,
                value: () => [],
            },
            // Tab names displayed in each tab.
            tabNames: {
                type: Array,
                value: () => [],
            },
            /** Index of the selected tab. */
            selected: {
                type: Number,
                notify: true,
                observer: 'onSelectedChanged_',
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.isRtl_ = this.matches(':host-context([dir=rtl]) cr-tabs');
    }
    ready() {
        super.ready();
        this.setAttribute('role', 'tablist');
        this.addEventListener('keydown', this.onKeyDown_.bind(this));
    }
    getAriaSelected_(index) {
        return index === this.selected ? 'true' : 'false';
    }
    getIconStyle_(index) {
        const icon = this.tabIcons[index];
        return icon ? `-webkit-mask-image: url(${icon}); display: block;` : '';
    }
    getTabindex_(index) {
        return index === this.selected ? '0' : '-1';
    }
    getSelectedClass_(index) {
        return index === this.selected ? 'selected' : '';
    }
    onSelectedChanged_(newSelected, oldSelected) {
        const tabs = this.shadowRoot.querySelectorAll('.tab');
        if (tabs.length === 0 || oldSelected === undefined) {
            // Tabs are not rendered yet.
            return;
        }
        const oldTabRect = tabs[oldSelected].getBoundingClientRect();
        const newTabRect = tabs[newSelected].getBoundingClientRect();
        const newIndicator = tabs[newSelected].querySelector('.tab-indicator');
        newIndicator.classList.remove('expand', 'contract');
        // Make new indicator look like it is the old indicator.
        this.updateIndicator_(newIndicator, newTabRect, oldTabRect.left, oldTabRect.width);
        newIndicator.getBoundingClientRect(); // Force repaint.
        // Expand to cover both the previous selected tab, the newly selected tab,
        // and everything in between.
        newIndicator.classList.add('expand');
        newIndicator.addEventListener('transitionend', e => this.onIndicatorTransitionEnd_(e), { once: true });
        const leftmostEdge = Math.min(oldTabRect.left, newTabRect.left);
        const fullWidth = newTabRect.left > oldTabRect.left ?
            newTabRect.right - oldTabRect.left :
            oldTabRect.right - newTabRect.left;
        this.updateIndicator_(newIndicator, newTabRect, leftmostEdge, fullWidth);
    }
    onKeyDown_(e) {
        const count = this.tabNames.length;
        let newSelection;
        if (e.key === 'Home') {
            newSelection = 0;
        }
        else if (e.key === 'End') {
            newSelection = count - 1;
        }
        else if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            const delta = e.key === 'ArrowLeft' ? (this.isRtl_ ? 1 : -1) :
                (this.isRtl_ ? -1 : 1);
            newSelection = (count + this.selected + delta) % count;
        }
        else {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        this.selected = newSelection;
        this.shadowRoot.querySelector('.tab.selected').focus();
    }
    onIndicatorTransitionEnd_(event) {
        const indicator = event.target;
        indicator.classList.replace('expand', 'contract');
        indicator.style.transform = `translateX(0) scaleX(1)`;
    }
    onTabClick_(e) {
        this.selected = e.model.index;
    }
    updateIndicator_(indicator, originRect, newLeft, newWidth) {
        const leftDiff = 100 * (newLeft - originRect.left) / originRect.width;
        const widthRatio = newWidth / originRect.width;
        const transform = `translateX(${leftDiff}%) scaleX(${widthRatio})`;
        indicator.style.transform = transform;
    }
}
customElements.define(CrTabsElement.is, CrTabsElement);

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/**
`iron-media-query` can be used to data bind to a CSS media query.
The `query` property is a bare CSS media query.
The `query-matches` property is a boolean representing whether the page matches
that media query.

Example:

```html
<iron-media-query query="(min-width: 600px)" query-matches="{{queryMatches}}">
</iron-media-query>
```

@group Iron Elements
@demo demo/index.html
@hero hero.svg
@element iron-media-query
*/
Polymer({

  is: 'iron-media-query',

  properties: {

    /**
     * The Boolean return value of the media query.
     */
    queryMatches: {type: Boolean, value: false, readOnly: true, notify: true},

    /**
     * The CSS media query to evaluate.
     */
    query: {type: String, observer: 'queryChanged'},

    /**
     * If true, the query attribute is assumed to be a complete media query
     * string rather than a single media feature.
     */
    full: {type: Boolean, value: false},

    /**
     * @type {function(MediaQueryList)}
     */
    _boundMQHandler: {
      value: function() {
        return this.queryHandler.bind(this);
      }
    },

    /**
     * @type {MediaQueryList}
     */
    _mq: {value: null}
  },

  attached: function() {
    this.style.display = 'none';
    this.queryChanged();
  },

  detached: function() {
    this._remove();
  },

  _add: function() {
    if (this._mq) {
      this._mq.addListener(this._boundMQHandler);
    }
  },

  _remove: function() {
    if (this._mq) {
      this._mq.removeListener(this._boundMQHandler);
    }
    this._mq = null;
  },

  queryChanged: function() {
    this._remove();
    var query = this.query;
    if (!query) {
      return;
    }
    if (!this.full && query[0] !== '(') {
      query = '(' + query + ')';
    }
    this._mq = window.matchMedia(query);
    this._add();
    this.queryHandler(this._mq);
  },

  queryHandler: function(mq) {
    this._setQueryMatches(mq.matches);
  }

});

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

class IronSelection {
  /**
   * @param {!Function} selectCallback
   * @suppress {missingProvide}
   */
  constructor(selectCallback) {
    this.selection = [];
    this.selectCallback = selectCallback;
  }

  /**
   * Retrieves the selected item(s).
   *
   * @returns Returns the selected item(s). If the multi property is true,
   * `get` will return an array, otherwise it will return
   * the selected item or undefined if there is no selection.
   */
  get() {
    return this.multi ? this.selection.slice() : this.selection[0];
  }

  /**
   * Clears all the selection except the ones indicated.
   *
   * @param {Array} excludes items to be excluded.
   */
  clear(excludes) {
    this.selection.slice().forEach(function(item) {
      if (!excludes || excludes.indexOf(item) < 0) {
        this.setItemSelected(item, false);
      }
    }, this);
  }

  /**
   * Indicates if a given item is selected.
   *
   * @param {*} item The item whose selection state should be checked.
   * @return {boolean} Returns true if `item` is selected.
   */
  isSelected(item) {
    return this.selection.indexOf(item) >= 0;
  }

  /**
   * Sets the selection state for a given item to either selected or deselected.
   *
   * @param {*} item The item to select.
   * @param {boolean} isSelected True for selected, false for deselected.
   */
  setItemSelected(item, isSelected) {
    if (item != null) {
      if (isSelected !== this.isSelected(item)) {
        // proceed to update selection only if requested state differs from
        // current
        if (isSelected) {
          this.selection.push(item);
        } else {
          var i = this.selection.indexOf(item);
          if (i >= 0) {
            this.selection.splice(i, 1);
          }
        }
        if (this.selectCallback) {
          this.selectCallback(item, isSelected);
        }
      }
    }
  }

  /**
   * Sets the selection state for a given item. If the `multi` property
   * is true, then the selected state of `item` will be toggled; otherwise
   * the `item` will be selected.
   *
   * @param {*} item The item to select.
   */
  select(item) {
    if (this.multi) {
      this.toggle(item);
    } else if (this.get() !== item) {
      this.setItemSelected(this.get(), false);
      this.setItemSelected(item, true);
    }
  }

  /**
   * Toggles the selection state for `item`.
   *
   * @param {*} item The item to toggle.
   */
  toggle(item) {
    this.setItemSelected(item, !this.isSelected(item));
  }
}

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/**
 * @polymerBehavior
 */
const IronSelectableBehavior = {

  /**
   * Fired when iron-selector is activated (selected or deselected).
   * It is fired before the selected items are changed.
   * Cancel the event to abort selection.
   *
   * @event iron-activate
   */

  /**
   * Fired when an item is selected
   *
   * @event iron-select
   */

  /**
   * Fired when an item is deselected
   *
   * @event iron-deselect
   */

  /**
   * Fired when the list of selectable items changes (e.g., items are
   * added or removed). The detail of the event is a mutation record that
   * describes what changed.
   *
   * @event iron-items-changed
   */

  properties: {

    /**
     * If you want to use an attribute value or property of an element for
     * `selected` instead of the index, set this to the name of the attribute
     * or property. Hyphenated values are converted to camel case when used to
     * look up the property of a selectable element. Camel cased values are
     * *not* converted to hyphenated values for attribute lookup. It's
     * recommended that you provide the hyphenated form of the name so that
     * selection works in both cases. (Use `attr-or-property-name` instead of
     * `attrOrPropertyName`.)
     */
    attrForSelected: {type: String, value: null},

    /**
     * Gets or sets the selected element. The default is to use the index of the
     * item.
     * @type {string|number}
     */
    selected: {type: String, notify: true},

    /**
     * Returns the currently selected item.
     *
     * @type {?Object}
     */
    selectedItem: {type: Object, readOnly: true, notify: true},

    /**
     * The event that fires from items when they are selected. Selectable
     * will listen for this event from items and update the selection state.
     * Set to empty string to listen to no events.
     */
    activateEvent:
        {type: String, value: 'tap', observer: '_activateEventChanged'},

    /**
     * This is a CSS selector string.  If this is set, only items that match the
     * CSS selector are selectable.
     */
    selectable: String,

    /**
     * The class to set on elements when selected.
     */
    selectedClass: {type: String, value: 'iron-selected'},

    /**
     * The attribute to set on elements when selected.
     */
    selectedAttribute: {type: String, value: null},

    /**
     * Default fallback if the selection based on selected with
     * `attrForSelected` is not found.
     */
    fallbackSelection: {type: String, value: null},

    /**
     * The list of items from which a selection can be made.
     */
    items: {
      type: Array,
      readOnly: true,
      notify: true,
      value: function() {
        return [];
      }
    },

    /**
     * The set of excluded elements where the key is the `localName`
     * of the element that will be ignored from the item list.
     *
     * @default {template: 1}
     */
    _excludedLocalNames: {
      type: Object,
      value: function() {
        return {
          'template': 1,
          'dom-bind': 1,
          'dom-if': 1,
          'dom-repeat': 1,
        };
      }
    }
  },

  observers: [
    '_updateAttrForSelected(attrForSelected)',
    '_updateSelected(selected)',
    '_checkFallback(fallbackSelection)'
  ],

  created: function() {
    this._bindFilterItem = this._filterItem.bind(this);
    this._selection = new IronSelection(this._applySelection.bind(this));
  },

  attached: function() {
    this._observer = this._observeItems(this);
    this._addListener(this.activateEvent);
  },

  detached: function() {
    if (this._observer) {
      dom(this).unobserveNodes(this._observer);
    }
    this._removeListener(this.activateEvent);
  },

  /**
   * Returns the index of the given item.
   *
   * @method indexOf
   * @param {Object} item
   * @returns Returns the index of the item
   */
  indexOf: function(item) {
    return this.items ? this.items.indexOf(item) : -1;
  },

  /**
   * Selects the given value.
   *
   * @method select
   * @param {string|number} value the value to select.
   */
  select: function(value) {
    this.selected = value;
  },

  /**
   * Selects the previous item.
   *
   * @method selectPrevious
   */
  selectPrevious: function() {
    var length = this.items.length;
    var index = length - 1;
    if (this.selected !== undefined) {
      index = (Number(this._valueToIndex(this.selected)) - 1 + length) % length;
    }
    this.selected = this._indexToValue(index);
  },

  /**
   * Selects the next item.
   *
   * @method selectNext
   */
  selectNext: function() {
    var index = 0;
    if (this.selected !== undefined) {
      index =
          (Number(this._valueToIndex(this.selected)) + 1) % this.items.length;
    }
    this.selected = this._indexToValue(index);
  },

  /**
   * Selects the item at the given index.
   *
   * @method selectIndex
   */
  selectIndex: function(index) {
    this.select(this._indexToValue(index));
  },

  /**
   * Force a synchronous update of the `items` property.
   *
   * NOTE: Consider listening for the `iron-items-changed` event to respond to
   * updates to the set of selectable items after updates to the DOM list and
   * selection state have been made.
   *
   * WARNING: If you are using this method, you should probably consider an
   * alternate approach. Synchronously querying for items is potentially
   * slow for many use cases. The `items` property will update asynchronously
   * on its own to reflect selectable items in the DOM.
   */
  forceSynchronousItemUpdate: function() {
    if (this._observer && typeof this._observer.flush === 'function') {
      // NOTE(bicknellr): `dom.flush` above is no longer sufficient to trigger
      // `observeNodes` callbacks. Polymer 2.x returns an object from
      // `observeNodes` with a `flush` that synchronously gives the callback any
      // pending MutationRecords (retrieved with `takeRecords`). Any case where
      // ShadyDOM flushes were expected to synchronously trigger item updates
      // will now require calling `forceSynchronousItemUpdate`.
      this._observer.flush();
    } else {
      this._updateItems();
    }
  },

  // UNUSED, FOR API COMPATIBILITY
  get _shouldUpdateSelection() {
    return this.selected != null;
  },

  _checkFallback: function() {
    this._updateSelected();
  },

  _addListener: function(eventName) {
    this.listen(this, eventName, '_activateHandler');
  },

  _removeListener: function(eventName) {
    this.unlisten(this, eventName, '_activateHandler');
  },

  _activateEventChanged: function(eventName, old) {
    this._removeListener(old);
    this._addListener(eventName);
  },

  _updateItems: function() {
    var nodes = dom(this).queryDistributedElements(this.selectable || '*');
    nodes = Array.prototype.filter.call(nodes, this._bindFilterItem);
    this._setItems(nodes);
  },

  _updateAttrForSelected: function() {
    if (this.selectedItem) {
      this.selected = this._valueForItem(this.selectedItem);
    }
  },

  _updateSelected: function() {
    this._selectSelected(this.selected);
  },

  _selectSelected: function(selected) {
    if (!this.items) {
      return;
    }

    var item = this._valueToItem(this.selected);
    if (item) {
      this._selection.select(item);
    } else {
      this._selection.clear();
    }
    // Check for items, since this array is populated only when attached
    // Since Number(0) is falsy, explicitly check for undefined
    if (this.fallbackSelection && this.items.length &&
        (this._selection.get() === undefined)) {
      this.selected = this.fallbackSelection;
    }
  },

  _filterItem: function(node) {
    return !this._excludedLocalNames[node.localName];
  },

  _valueToItem: function(value) {
    return (value == null) ? null : this.items[this._valueToIndex(value)];
  },

  _valueToIndex: function(value) {
    if (this.attrForSelected) {
      for (var i = 0, item; item = this.items[i]; i++) {
        if (this._valueForItem(item) == value) {
          return i;
        }
      }
    } else {
      return Number(value);
    }
  },

  _indexToValue: function(index) {
    if (this.attrForSelected) {
      var item = this.items[index];
      if (item) {
        return this._valueForItem(item);
      }
    } else {
      return index;
    }
  },

  _valueForItem: function(item) {
    if (!item) {
      return null;
    }
    if (!this.attrForSelected) {
      var i = this.indexOf(item);
      return i === -1 ? null : i;
    }
    var propValue = item[dashToCamelCase(this.attrForSelected)];
    return propValue != undefined ? propValue :
                                    item.getAttribute(this.attrForSelected);
  },

  _applySelection: function(item, isSelected) {
    if (this.selectedClass) {
      this.toggleClass(this.selectedClass, isSelected, item);
    }
    if (this.selectedAttribute) {
      this.toggleAttribute(this.selectedAttribute, isSelected, item);
    }
    this._selectionChange();
    this.fire('iron-' + (isSelected ? 'select' : 'deselect'), {item: item});
  },

  _selectionChange: function() {
    this._setSelectedItem(this._selection.get());
  },

  // observe items change under the given node.
  _observeItems: function(node) {
    return dom(node).observeNodes(function(mutation) {
      this._updateItems();
      this._updateSelected();

      // Let other interested parties know about the change so that
      // we don't have to recreate mutation observers everywhere.
      this.fire(
          'iron-items-changed', mutation, {bubbles: false, cancelable: false});
    });
  },

  _activateHandler: function(e) {
    var t = e.target;
    var items = this.items;
    while (t && t != this) {
      var i = items.indexOf(t);
      if (i >= 0) {
        var value = this._indexToValue(i);
        this._itemActivate(value, t);
        return;
      }
      t = t.parentNode;
    }
  },

  _itemActivate: function(value, item) {
    if (!this.fire('iron-activate', {selected: value, item: item}, {
               cancelable: true
             })
             .defaultPrevented) {
      this.select(value);
    }
  }

};

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/**
`iron-pages` is used to select one of its children to show. One use is to cycle
through a list of children "pages".

Example:

    <iron-pages selected="0">
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
    </iron-pages>

    <script>
      document.addEventListener('click', function(e) {
        var pages = document.querySelector('iron-pages');
        pages.selectNext();
      });
    </script>

@group Iron Elements
@demo demo/index.html
*/
Polymer({
  _template: html`
    <style>
      :host {
        display: block;
      }

      :host > ::slotted(:not(slot):not(.iron-selected)) {
        display: none !important;
      }
    </style>

    <slot></slot>
`,

  is: 'iron-pages',
  behaviors: [IronResizableBehavior, IronSelectableBehavior],

  properties: {

    // as the selected page is the only one visible, activateEvent
    // is both non-sensical and problematic; e.g. in cases where a user
    // handler attempts to change the page and the activateEvent
    // handler immediately changes it back
    activateEvent: {type: String, value: null}

  },

  observers: ['_selectedPageChanged(selected)'],

  _selectedPageChanged: function(selected, old) {
    this.async(this.notifyResize);
  }
});

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
class FocusRowMixinDelegate {
    constructor(listItem) {
        this.listItem_ = listItem;
    }
    /**
     * This function gets called when the [focus-row-control] element receives
     * the focus event.
     */
    onFocus(_row, e) {
        const element = e.composedPath()[0];
        const focusableElement = FocusRow.getFocusableElement(element);
        if (element !== focusableElement) {
            focusableElement.focus();
        }
        this.listItem_.lastFocused = focusableElement;
    }
    /**
     * @param row The row that detected a keydown.
     * @return Whether the event was handled.
     */
    onKeydown(_row, e) {
        // Prevent iron-list from changing the focus on enter.
        if (e.key === 'Enter') {
            e.stopPropagation();
        }
        return false;
    }
    getCustomEquivalent(sampleElement) {
        return this.listItem_.overrideCustomEquivalent ?
            this.listItem_.getCustomEquivalent(sampleElement) :
            null;
    }
}
class VirtualFocusRow extends FocusRow {
    constructor(root, delegate) {
        super(root, /* boundary */ null, delegate);
    }
    getCustomEquivalent(sampleElement) {
        const equivalent = this.delegate ? this.delegate.getCustomEquivalent(sampleElement) : null;
        return equivalent || super.getCustomEquivalent(sampleElement);
    }
}
const FocusRowMixin = dedupingMixin((superClass) => {
    class FocusRowMixin extends superClass {
        constructor() {
            super(...arguments);
            this.firstControl_ = null;
            this.controlObservers_ = [];
            this.boundOnFirstControlKeydown_ = null;
        }
        static get properties() {
            return {
                row_: Object,
                mouseFocused_: Boolean,
                id: {
                    type: String,
                    reflectToAttribute: true,
                },
                isFocused: {
                    type: Boolean,
                    notify: true,
                },
                focusRowIndex: {
                    type: Number,
                    observer: 'focusRowIndexChanged',
                },
                lastFocused: {
                    type: Object,
                    notify: true,
                },
                ironListTabIndex: {
                    type: Number,
                    observer: 'ironListTabIndexChanged_',
                },
                listBlurred: {
                    type: Boolean,
                    notify: true,
                },
            };
        }
        connectedCallback() {
            super.connectedCallback();
            this.classList.add('no-outline');
            this.boundOnFirstControlKeydown_ =
                this.onFirstControlKeydown_.bind(this);
            afterNextRender(this, () => {
                const rowContainer = this.root.querySelector('[focus-row-container]');
                assert(rowContainer);
                this.row_ = new VirtualFocusRow(rowContainer, new FocusRowMixinDelegate(this));
                this.addItems_();
                // Adding listeners asynchronously to reduce blocking time, since
                // this behavior will be used by items in potentially long lists.
                this.addEventListener('focus', this.onFocus_);
                this.addEventListener('dom-change', this.addItems_);
                this.addEventListener('mousedown', this.onMouseDown_);
                this.addEventListener('blur', this.onBlur_);
            });
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            this.removeEventListener('focus', this.onFocus_);
            this.removeEventListener('dom-change', this.addItems_);
            this.removeEventListener('mousedown', this.onMouseDown_);
            this.removeEventListener('blur', this.onBlur_);
            this.removeObservers_();
            if (this.firstControl_ && this.boundOnFirstControlKeydown_) {
                this.firstControl_.removeEventListener('keydown', this.boundOnFirstControlKeydown_);
                this.boundOnFirstControlKeydown_ = null;
            }
            if (this.row_) {
                this.row_.destroy();
            }
        }
        /**
         * Returns an ID based on the index that was passed in.
         */
        computeId_(index) {
            return index !== undefined ? `frb${index}` : undefined;
        }
        /**
         * Sets |id| if it hasn't been set elsewhere. Also sets |aria-rowindex|.
         */
        focusRowIndexChanged(newIndex, oldIndex) {
            // focusRowIndex is 0-based where aria-rowindex is 1-based.
            this.setAttribute('aria-rowindex', (newIndex + 1).toString());
            // Only set ID if it matches what was previously set. This prevents
            // overriding the ID value if it's set elsewhere.
            if (this.id === this.computeId_(oldIndex)) {
                this.id = this.computeId_(newIndex) || '';
            }
        }
        getFocusRow() {
            assert(this.row_);
            return this.row_;
        }
        updateFirstControl_() {
            const newFirstControl = this.row_.getFirstFocusable();
            if (newFirstControl === this.firstControl_) {
                return;
            }
            if (this.firstControl_) {
                this.firstControl_.removeEventListener('keydown', this.boundOnFirstControlKeydown_);
            }
            this.firstControl_ = newFirstControl;
            if (this.firstControl_) {
                this.firstControl_.addEventListener('keydown', this.boundOnFirstControlKeydown_);
            }
        }
        removeObservers_() {
            if (this.controlObservers_.length > 0) {
                this.controlObservers_.forEach(observer => {
                    observer.disconnect();
                });
            }
            this.controlObservers_ = [];
        }
        addItems_() {
            this.ironListTabIndexChanged_();
            if (this.row_) {
                this.removeObservers_();
                this.row_.destroy();
                const controls = this.root.querySelectorAll('[focus-row-control]');
                controls.forEach(control => {
                    assert(control);
                    this.row_.addItem(control.getAttribute('focus-type'), FocusRow.getFocusableElement(control));
                    this.addMutationObservers_(control);
                });
                this.updateFirstControl_();
            }
        }
        createObserver_() {
            return new MutationObserver(mutations => {
                const mutation = mutations[0];
                if (mutation.attributeName === 'style' && mutation.oldValue) {
                    const newStyle = window.getComputedStyle(mutation.target);
                    const oldDisplayValue = mutation.oldValue.match(/^display:(.*)(?=;)/);
                    const oldVisibilityValue = mutation.oldValue.match(/^visibility:(.*)(?=;)/);
                    // Return early if display and visibility have not changed.
                    if (oldDisplayValue &&
                        newStyle.display === oldDisplayValue[1].trim() &&
                        oldVisibilityValue &&
                        newStyle.visibility === oldVisibilityValue[1].trim()) {
                        return;
                    }
                }
                this.updateFirstControl_();
            });
        }
        /**
         * The first focusable control changes if hidden, disabled, or
         * style.display changes for the control or any of its ancestors. Add
         * mutation observers to watch for these changes in order to ensure the
         * first control keydown listener is always on the correct element.
         */
        addMutationObservers_(control) {
            let current = control;
            while (current && current !== this.root) {
                const currentObserver = this.createObserver_();
                currentObserver.observe(current, {
                    attributes: true,
                    attributeFilter: ['hidden', 'disabled', 'style'],
                    attributeOldValue: true,
                });
                this.controlObservers_.push(currentObserver);
                current = current.parentNode;
            }
        }
        /**
         * This function gets called when the row itself receives the focus
         * event.
         */
        onFocus_(e) {
            if (this.mouseFocused_) {
                this.mouseFocused_ = false; // Consume and reset flag.
                return;
            }
            // If focus is being restored from outside the item and the event is
            // fired by the list item itself, focus the first control so that the
            // user can tab through all the controls. When the user shift-tabs
            // back to the row, or focus is restored to the row from a dropdown on
            // the last item, the last child item will be focused before the row
            // itself. Since this is the desired behavior, do not shift focus to
            // the first item in these cases.
            const restoreFocusToFirst = this.listBlurred && e.composedPath()[0] === this;
            if (this.lastFocused && !restoreFocusToFirst) {
                focusWithoutInk(this.row_.getEquivalentElement(this.lastFocused));
            }
            else {
                assert(this.firstControl_);
                const firstFocusable = this.firstControl_;
                focusWithoutInk(firstFocusable);
            }
            this.listBlurred = false;
            this.isFocused = true;
        }
        onFirstControlKeydown_(e) {
            const keyEvent = e;
            if (keyEvent.shiftKey && keyEvent.key === 'Tab') {
                this.focus();
            }
        }
        ironListTabIndexChanged_() {
            if (this.row_) {
                this.row_.makeActive(this.ironListTabIndex === 0);
            }
            // If a new row is being focused, reset listBlurred. This means an
            // item has been removed and iron-list is about to focus the next
            // item.
            if (this.ironListTabIndex === 0) {
                this.listBlurred = false;
            }
        }
        onMouseDown_() {
            this.mouseFocused_ =
                true; // Set flag to not do any control-focusing.
        }
        onBlur_(e) {
            // Reset focused flags since it's not active anymore.
            this.mouseFocused_ = false;
            this.isFocused = false;
            const node = e.relatedTarget ? e.relatedTarget : null;
            if (!this.parentNode.contains(node)) {
                this.listBlurred = true;
            }
        }
    }
    return FocusRowMixin;
});

function getTemplate$9() {
    return html `<!--_html_template_start_-->    <style include="shared-style cr-icons">:host{display:block;outline:0;pointer-events:none}#main-container{position:relative}:host([is-card-end]) #main-container{margin-bottom:var(--card-padding-between)}:host([is-card-start][is-card-end]) #main-container{border-radius:var(--cr-card-border-radius)}#date-accessed{display:none}:host([is-card-start]) #date-accessed{display:block;font-size:123%;font-weight:400;letter-spacing:.25px;padding-bottom:4px;padding-top:8px}#item-container{align-items:center;display:flex;min-height:var(--item-height);padding-inline-start:10px;pointer-events:auto}:host([is-card-start]) #item-container{padding-top:var(--card-first-last-item-padding)}:host([is-card-end]) #item-container{padding-bottom:var(--card-first-last-item-padding)}#item-info{align-items:center;display:flex;flex:1;min-width:0}#title-and-domain{align-items:center;display:flex;flex:1;height:var(--item-height);margin-inline-end:auto;overflow:hidden;padding-inline-start:5px}#checkbox{margin:12px}#checkbox[unresolved]{border:2px solid var(--cr-secondary-text-color);border-radius:2px;content:'';display:block;height:12px;width:12px}#time-accessed{color:var(--history-item-time-color);margin-inline-start:6px;min-width:96px}#domain{color:var(--cr-secondary-text-color);margin-inline-start:16px;overflow:hidden;text-overflow:ellipsis}#menu-button{--cr-icon-button-margin-end:12px;--cr-icon-button-margin-start:12px}#bookmark-star{--cr-icon-button-fill-color:var(--interactive-color);--cr-icon-button-icon-size:16px;--cr-icon-button-margin-start:12px;--cr-icon-button-size:32px}#debug-container{color:var(--history-item-time-color);display:flex;padding-inline-start:22px;pointer-events:auto}.debug-info:not(:first-child){margin-inline-start:15px}#time-gap-separator{border-inline-start:1px solid #888;height:15px;margin-inline-start:77px}@media (prefers-color-scheme:dark){#time-gap-separator{border-color:var(--google-grey-500)}}#background-clip{bottom:-.4px;clip:rect(auto 999px auto -5px);left:0;position:absolute;right:0;top:0;z-index:-1}:host([is-card-end]) #background-clip{bottom:0;clip:rect(auto 999px 500px -5px)}:host([is-card-start]) #background-clip{clip:auto}#background{background-color:var(--cr-card-background-color);bottom:0;box-shadow:var(--cr-card-shadow);left:0;position:absolute;right:0;top:0}:host(:not([is-card-start])) #background{top:-5px}:host([is-card-start]) #background{border-radius:var(--cr-card-border-radius) var(--cr-card-border-radius) 0 0}:host([is-card-end]) #background{border-radius:0 0 var(--cr-card-border-radius) var(--cr-card-border-radius)}:host([is-card-start][is-card-end]) #background{border-radius:var(--cr-card-border-radius)}#options{align-items:center;display:flex}cr-checkbox::part(label-container){clip:rect(0,0,0,0);display:block;position:fixed}</style>

    <div id="main-container">
      <div id="background-clip" aria-hidden="true">
        <div id="background"></div>
      </div>
      <div id="date-accessed" class="card-title" role="row">
        <div role="rowheader">
          <div role="heading" aria-level="2">
            [[cardTitle_(numberOfItems, searchTerm, item.dateRelativeDay)]]
          </div>
        </div>
      </div>
      <div role="row" on-mousedown="onRowMousedown_" on-click="onRowClick_">
        <div id="item-container" focus-row-container>
          <div role="gridcell">
            <cr-checkbox id="checkbox" checked="[[selected]]" unresolved focus-row-control focus-type="cr-checkbox" on-mousedown="onCheckboxClick_" on-keydown="onCheckboxClick_" on-change="onCheckboxChange_" class="no-label" hidden="[[selectionNotAllowed_]]" disabled="[[selectionNotAllowed_]]">
              [[getEntrySummary_(item)]]
            </cr-checkbox>
          </div>
          
          <span id="time-accessed" aria-hidden="true">
            [[item.readableTimestamp]]
          </span>
          <div role="gridcell" id="item-info">
            <div id="title-and-domain">
              <a href="[[item.url]]" id="link" class="website-link" focus-row-control focus-type="link" title="[[item.title]]" on-click="onLinkClick_" on-contextmenu="onLinkRightClick_" aria-describedby$="[[ariaDescribedByForHeading_]]">
                <div class="website-icon" id="icon"></div>
                <history-searched-label class="website-title" title="[[item.title]]" search-term="[[searchTerm]]"></history-searched-label>
              </a>
              <span id="domain">[[item.domain]]</span>
            </div>
            <template is="dom-if" if="[[item.starred]]">
              <cr-icon-button id="bookmark-star" iron-icon="cr:star" on-click="onRemoveBookmarkClick_" title="$i18n{removeBookmark}" aria-hidden="true">
              </cr-icon-button>
            </template>
          </div>
          <div role="gridcell" id="options">
            <cr-icon-button id="menu-button" iron-icon="cr:more-vert" focus-row-control focus-type="cr-menu-button" title="$i18n{actionMenuDescription}" on-click="onMenuButtonClick_" on-keydown="onMenuButtonKeydown_" aria-haspopup="menu" aria-describedby$="[[ariaDescribedByForActions_]]">
            </cr-icon-button>
          </div>
        </div>
        <template is="dom-if" if="[[item.debug]]">
          <div id="debug-container" aria-hidden="true">
            <div class="debug-info">DEBUG</div>
            <div class="debug-info" hidden="[[!item.debug.isUrlInLocalDatabase]]">
              in local data
            </div>
            <div class="debug-info" hidden="[[!item.isUrlInRemoteUserData]]">
              in remote data
            </div>
            <div class="debug-info" hidden="[[!item.debug.isUrlInLocalDatabase]]">
              typed count: [[item.debug.typedCount]]
            </div>
            <div class="debug-info" hidden="[[!item.debug.isUrlInLocalDatabase]]">
              visit count: [[item.debug.visitCount]]
            </div>
          </div>
        </template>
        <div id="time-gap-separator" hidden="[[!hasTimeGap]]"></div>
      </div>
    </div>
<!--_html_template_end_-->`;
}

// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const HistoryItemElementBase = FocusRowMixin(PolymerElement);
class HistoryItemElement extends HistoryItemElementBase {
    constructor() {
        super(...arguments);
        this.isShiftKeyDown_ = false;
        this.selectionNotAllowed_ = !loadTimeData.getBoolean('allowDeletingHistory');
        this.eventTracker_ = new EventTracker();
    }
    static get is() {
        return 'history-item';
    }
    static get template() {
        return getTemplate$9();
    }
    static get properties() {
        return {
            // Underlying HistoryEntry data for this.item. Contains read-only fields
            // from the history backend, as well as fields computed by history-list.
            item: {
                type: Object,
                observer: 'itemChanged_',
            },
            selected: {
                type: Boolean,
                reflectToAttribute: true,
            },
            isCardStart: {
                type: Boolean,
                reflectToAttribute: true,
            },
            isCardEnd: {
                type: Boolean,
                reflectToAttribute: true,
            },
            lastFocused: {
                type: Object,
                notify: true,
            },
            listBlurred: {
                type: Boolean,
                notify: true,
            },
            ironListTabIndex: {
                type: Number,
                observer: 'ironListTabIndexChanged_',
            },
            selectionNotAllowed_: Boolean,
            hasTimeGap: Boolean,
            index: Number,
            numberOfItems: Number,
            // Search term used to obtain this history-item.
            searchTerm: String,
            overrideCustomEquivalent: {
                type: Boolean,
                value: true,
            },
            ariaDescribedByForHeading_: {
                type: String,
                computed: 'getAriaDescribedByForHeading_(isCardStart, isCardEnd)',
            },
            ariaDescribedByForActions_: {
                type: String,
                computed: 'getAriaDescribedByForActions_(isCardStart, isCardEnd)',
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        afterNextRender(this, () => {
            // Adding listeners asynchronously to reduce blocking time, since these
            // history items are items in a potentially long list.
            this.eventTracker_.add(this.$.checkbox, 'keydown', (e) => this.onCheckboxKeydown_(e));
        });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.eventTracker_.remove(this.$.checkbox, 'keydown');
    }
    fire_(eventName, detail) {
        this.dispatchEvent(new CustomEvent(eventName, { bubbles: true, composed: true, detail }));
    }
    focusOnMenuButton() {
        focusWithoutInk(this.$['menu-button']);
    }
    onCheckboxKeydown_(e) {
        if (e.shiftKey && e.key === 'Tab') {
            this.focus();
        }
    }
    /**
     * Toggle item selection whenever the checkbox or any non-interactive part
     * of the item is clicked.
     */
    onRowClick_(e) {
        const path = e.composedPath();
        // VoiceOver has issues with click events within elements that have a role
        // of row, so this event listeners has to be on the row itself.
        // (See crbug.com/1185827.)
        let inItemContainer = false;
        for (let i = 0; i < path.length; i++) {
            const elem = path[i];
            if (elem.id !== 'checkbox' &&
                (elem.nodeName === 'A' || elem.nodeName === 'CR-ICON-BUTTON')) {
                return;
            }
            if (!inItemContainer && elem.id === 'item-container') {
                inItemContainer = true;
            }
        }
        if (this.selectionNotAllowed_ || !inItemContainer) {
            return;
        }
        this.$.checkbox.focus();
        this.fire_('history-checkbox-select', {
            index: this.index,
            shiftKey: e.shiftKey,
        });
    }
    /**
     * This is bound to mouse/keydown instead of click/press because this
     * has to fire before onCheckboxChange_. If we bind it to click/press,
     * it might trigger out of desired order.
     */
    onCheckboxClick_(e) {
        this.isShiftKeyDown_ = e.shiftKey;
    }
    onCheckboxChange_() {
        this.fire_('history-checkbox-select', {
            index: this.index,
            // If the user clicks or press enter/space key, oncheckboxClick_ will
            // trigger before this function, so a shift-key might be recorded.
            shiftKey: this.isShiftKeyDown_,
        });
        this.isShiftKeyDown_ = false;
    }
    onRowMousedown_(e) {
        // Prevent shift clicking a checkbox from selecting text.
        if (e.shiftKey) {
            e.preventDefault();
        }
    }
    getEntrySummary_() {
        const item = this.item;
        return loadTimeData.getStringF('entrySummary', this.isCardStart || this.isCardEnd ?
            this.cardTitle_(this.numberOfItems, this.searchTerm) :
            '', item.dateTimeOfDay, item.starred ? loadTimeData.getString('bookmarked') : '', item.title, item.domain);
    }
    /**
     * The first and last rows of a card have a described-by field pointing to
     * the date header, to make sure users know if they have jumped between cards
     * when navigating up or down with the keyboard.
     */
    getAriaDescribedByForHeading_() {
        return this.isCardStart || this.isCardEnd ? 'date-accessed' : '';
    }
    /**
     * Actions menu is described by the title and domain of the row and may
     * include the date to make sure users know if they have jumped between dates.
     */
    getAriaDescribedByForActions_() {
        return this.isCardStart || this.isCardEnd ?
            'title-and-domain date-accessed' :
            'title-and-domain';
    }
    getAriaChecked_(selected) {
        return selected ? 'true' : 'false';
    }
    /**
     * Remove bookmark of current item when bookmark-star is clicked.
     */
    onRemoveBookmarkClick_() {
        if (!this.item.starred) {
            return;
        }
        if (this.shadowRoot.querySelector('#bookmark-star') ===
            this.shadowRoot.activeElement) {
            focusWithoutInk(this.$['menu-button']);
        }
        const browserService = BrowserServiceImpl.getInstance();
        browserService.removeBookmark(this.item.url);
        browserService.recordAction('BookmarkStarClicked');
        this.fire_('remove-bookmark-stars', this.item.url);
    }
    /**
     * Fires a custom event when the menu button is clicked. Sends the details
     * of the history item and where the menu should appear.
     */
    onMenuButtonClick_(e) {
        this.fire_('open-menu', {
            target: e.target,
            index: this.index,
            item: this.item,
        });
        // Stops the 'click' event from closing the menu when it opens.
        e.stopPropagation();
    }
    onMenuButtonKeydown_(e) {
        if (this.item.starred && e.shiftKey && e.key === 'Tab') {
            // If this item has a bookmark star, pressing shift + Tab from the more
            // actions menu should move focus to the star. FocusRow will try to
            // instead move focus to the previous focus row control, and since the
            // star is not a focus row control, stop immediate propagation here to
            // instead allow default browser behavior.
            e.stopImmediatePropagation();
        }
    }
    /**
     * Record metrics when a result is clicked.
     */
    onLinkClick_() {
        const browserService = BrowserServiceImpl.getInstance();
        browserService.recordAction('EntryLinkClick');
        if (this.searchTerm) {
            browserService.recordAction('SearchResultClick');
        }
    }
    onLinkRightClick_() {
        BrowserServiceImpl.getInstance().recordAction('EntryLinkRightClick');
    }
    /**
     * Set the favicon image, based on the URL of the history item.
     */
    itemChanged_() {
        this.$.icon.style.backgroundImage = getFaviconForPageURL(this.item.url, this.item.isUrlInRemoteUserData, this.item.remoteIconUrlForUma);
        this.eventTracker_.add(this.$['time-accessed'], 'mouseover', () => this.addTimeTitle_());
    }
    /**
     * @param numberOfItems The number of items in the card.
     * @param search The search term associated with these results.
     * @return The title for this history card.
     */
    cardTitle_(numberOfItems, search) {
        if (this.item === undefined) {
            return '';
        }
        if (!search) {
            return this.item.dateRelativeDay;
        }
        return searchResultsTitle(numberOfItems, search);
    }
    addTimeTitle_() {
        const el = this.$['time-accessed'];
        el.setAttribute('title', new Date(this.item.time).toString());
        this.eventTracker_.remove(el, 'mouseover');
    }
    /**
     * @param sampleElement An element to find an equivalent for.
     * @return An equivalent element to focus, or null to use the
     *     default element.
     */
    getCustomEquivalent(sampleElement) {
        return sampleElement.getAttribute('focus-type') === 'star' ? this.$.link :
            null;
    }
}
customElements.define(HistoryItemElement.is, HistoryItemElement);
/**
 * @return The title for a page of search results.
 */
function searchResultsTitle(numberOfResults, searchTerm) {
    const resultId = numberOfResults === 1 ? 'searchResult' : 'searchResults';
    return loadTimeData.getStringF('foundSearchResults', numberOfResults, loadTimeData.getString(resultId), searchTerm);
}

function getTemplate$8() {
    return html `<!--_html_template_start_--><style>:host{clip:rect(0 0 0 0);height:1px;overflow:hidden;position:fixed;width:1px}</style>

<div id="messages" role="alert" aria-live="polite" aria-relevant="additions">
</div>
<!--_html_template_end_-->`;
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * 150ms seems to be around the minimum time required for screen readers to
 * read out consecutively queued messages.
 */
const TIMEOUT_MS = 150;
/**
 * A map of an HTML element to its corresponding CrA11yAnnouncerElement. There
 * may be multiple CrA11yAnnouncerElements on a page, especially for cases in
 * which the DocumentElement's CrA11yAnnouncerElement becomes hidden or
 * deactivated (eg. when a modal dialog causes the CrA11yAnnouncerElement to
 * become inaccessible).
 */
const instances = new Map();
function getInstance(container = document.body) {
    if (instances.has(container)) {
        return instances.get(container);
    }
    assert(container.isConnected);
    const instance = new CrA11yAnnouncerElement();
    container.appendChild(instance);
    instances.set(container, instance);
    return instance;
}
class CrA11yAnnouncerElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.currentTimeout_ = null;
        this.messages_ = [];
    }
    static get is() {
        return 'cr-a11y-announcer';
    }
    static get template() {
        return getTemplate$8();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.currentTimeout_ !== null) {
            clearTimeout(this.currentTimeout_);
            this.currentTimeout_ = null;
        }
        for (const [parent, instance] of instances) {
            if (instance === this) {
                instances.delete(parent);
                break;
            }
        }
    }
    announce(message) {
        if (this.currentTimeout_ !== null) {
            clearTimeout(this.currentTimeout_);
            this.currentTimeout_ = null;
        }
        this.messages_.push(message);
        this.currentTimeout_ = setTimeout(() => {
            const messagesDiv = this.shadowRoot.querySelector('#messages');
            messagesDiv.innerHTML = window.trustedTypes.emptyHTML;
            // 
            for (const message of this.messages_) {
                const div = document.createElement('div');
                div.textContent = message;
                messagesDiv.appendChild(div);
            }
            // Dispatch a custom event to allow consumers to know when certain alerts
            // have been sent to the screen reader.
            this.dispatchEvent(new CustomEvent('cr-a11y-announcer-messages-sent', { bubbles: true, detail: { messages: this.messages_.slice() } }));
            this.messages_.length = 0;
            this.currentTimeout_ = null;
        }, TIMEOUT_MS);
    }
}
customElements.define(CrA11yAnnouncerElement.is, CrA11yAnnouncerElement);

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Mixin to be used by Polymer elements that want to
 * automatically remove WebUI listeners when detached.
 */
const WebUiListenerMixin = dedupingMixin((superClass) => {
    class WebUiListenerMixin extends superClass {
        constructor() {
            super(...arguments);
            /**
             * Holds WebUI listeners that need to be removed when this element is
             * destroyed.
             */
            this.webUiListeners_ = [];
        }
        /**
         * Adds a WebUI listener and registers it for automatic removal when
         * this element is detached. Note: Do not use this method if you intend
         * to remove this listener manually (use addWebUiListener directly
         * instead).
         *
         * @param eventName The event to listen to.
         * @param callback The callback run when the event is fired.
         */
        addWebUiListener(eventName, callback) {
            this.webUiListeners_.push(addWebUiListener(eventName, callback));
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            while (this.webUiListeners_.length > 0) {
                removeWebUiListener(this.webUiListeners_.pop());
            }
        }
    }
    return WebUiListenerMixin;
});

function getTemplate$7() {
    return html `<!--_html_template_start_-->    <style include="shared-style cr-shared-style">:host{box-sizing:border-box;display:block;overflow:auto}.history-cards{margin-block-start:var(--first-card-padding-top)}dialog [slot=body]{white-space:pre-wrap}</style>
    <div id="no-results" class="centered-message" hidden$="[[hasResults_(historyData_.length)]]">
      [[noResultsMessage_(searchedTerm)]]
    </div>

    <iron-list class="history-cards" items="[[historyData_]]" as="item" id="infinite-list" role="grid" aria-rowcount$="[[historyData_.length]]" hidden$="[[!hasResults_(historyData_.length)]]" preserve-focus>
      <template>
        <history-item tabindex$="[[tabIndex]]" item="[[item]]" selected="[[item.selected]]" is-card-start="[[isCardStart_(item, index, historyData_.length)]]" is-card-end="[[isCardEnd_(item, index, historyData_.length)]]" has-time-gap="[[needsTimeGap_(item, index, historyData_.length)]]" search-term="[[searchedTerm]]" number-of-items="[[historyData_.length]]" index="[[index]]" focus-row-index="[[index]]" iron-list-tab-index="[[tabIndex]]" last-focused="{{lastFocused_}}" list-blurred="{{listBlurred_}}">
        </history-item>
      </template>
    </iron-list>

    <iron-scroll-threshold id="scroll-threshold" scroll-target="infinite-list" lower-threshold="500" on-lower-threshold="onScrollToBottom_">
    </iron-scroll-threshold>

    <cr-lazy-render id="dialog">
      <template>
        <cr-dialog consume-keydown-event>
          <div slot="title" id="title">$i18n{removeSelected}</div>
          <div slot="body" id="body">$i18n{deleteWarning}</div>
          <div slot="button-container">
            <cr-button class="cancel-button" on-click="onDialogCancelClick_">
              $i18n{cancel}
            </cr-button>
            <cr-button class="action-button" on-click="onDialogConfirmClick_">
              $i18n{deleteConfirm}
            </cr-button>
          </div>
        </cr-dialog>
      </template>
    </cr-lazy-render>

    <cr-lazy-render id="sharedMenu">
      <template>
        <cr-action-menu role-description="$i18n{actionMenuDescription}">
          <button id="menuMoreButton" class="dropdown-item" hidden="[[!canSearchMoreFromSite_(
                  searchedTerm, actionMenuModel_.item.domain)]]" on-click="onMoreFromSiteClick_">
            $i18n{moreFromSite}
          </button>
          <button id="menuRemoveButton" class="dropdown-item" hidden="[[!canDeleteHistory_]]" disabled="[[pendingDelete]]" on-click="onRemoveFromHistoryClick_">
            $i18n{removeFromHistory}
          </button>
          <button id="menuRemoveBookmarkButton" class="dropdown-item" hidden="[[!actionMenuModel_.item.starred]]" on-click="onRemoveBookmarkClick_">
            $i18n{removeBookmark}
          </button>
        </cr-action-menu>
      </template>
    </cr-lazy-render>
<!--_html_template_end_-->`;
}

// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const HistoryListElementBase = WebUiListenerMixin(I18nMixin(PolymerElement));
class HistoryListElement extends HistoryListElementBase {
    constructor() {
        super(...arguments);
        this.canDeleteHistory_ = loadTimeData.getBoolean('allowDeletingHistory');
        this.actionMenuModel_ = null;
        this.resultLoadingDisabled_ = false;
        this.searchedTerm = '';
        this.selectedItems = new Set();
        this.pendingDelete = false;
    }
    static get is() {
        return 'history-list';
    }
    static get template() {
        return getTemplate$7();
    }
    static get properties() {
        return {
            // The search term for the current query. Set when the query returns.
            searchedTerm: String,
            resultLoadingDisabled_: Boolean,
            /**
             * Indexes into historyData_ of selected items.
             */
            selectedItems: Object,
            canDeleteHistory_: Boolean,
            // An array of history entries in reverse chronological order.
            historyData_: {
                type: Array,
                observer: 'onHistoryDataChanged_',
            },
            lastFocused_: Object,
            listBlurred_: Boolean,
            lastSelectedIndex: Number,
            pendingDelete: {
                notify: true,
                type: Boolean,
            },
            queryState: Object,
            actionMenuModel_: Object,
        };
    }
    connectedCallback() {
        super.connectedCallback();
        // It is possible (eg, when middle clicking the reload button) for all other
        // resize events to fire before the list is attached and can be measured.
        // Adding another resize here ensures it will get sized correctly.
        this.$['infinite-list'].notifyResize();
        this.$['infinite-list'].scrollTarget = this;
        this.$['scroll-threshold'].scrollTarget = this;
        this.setAttribute('aria-roledescription', this.i18n('ariaRoleDescription'));
        this.addWebUiListener('history-deleted', () => this.onHistoryDeleted_());
    }
    ready() {
        super.ready();
        this.setAttribute('role', 'application');
        this.addEventListener('history-checkbox-select', this.onItemSelected_);
        this.addEventListener('open-menu', this.onOpenMenu_);
        this.addEventListener('remove-bookmark-stars', e => this.onRemoveBookmarkStars_(e));
    }
    fire_(eventName, detail) {
        this.dispatchEvent(new CustomEvent(eventName, { bubbles: true, composed: true, detail }));
    }
    /////////////////////////////////////////////////////////////////////////////
    // Public methods:
    /**
     * @param info An object containing information about the query.
     * @param results A list of results.
     */
    historyResult(info, results) {
        this.initializeResults_(info, results);
        this.closeMenu_();
        if (info.term && !this.queryState.incremental) {
            getInstance().announce(searchResultsTitle(results.length, info.term));
        }
        this.addNewResults(results, this.queryState.incremental, info.finished);
    }
    /**
     * Adds the newly updated history results into historyData_. Adds new fields
     * for each result.
     * @param historyResults The new history results.
     * @param incremental Whether the result is from loading more history, or a
     *     new search/list reload.
     * @param finished True if there are no more results available and result
     *     loading should be disabled.
     */
    addNewResults(historyResults, incremental, finished) {
        const results = historyResults.slice();
        this.$['scroll-threshold'].clearTriggers();
        if (!incremental) {
            this.resultLoadingDisabled_ = false;
            if (this.historyData_) {
                this.splice('historyData_', 0, this.historyData_.length);
            }
            this.fire_('unselect-all');
            this.scrollTop = 0;
        }
        if (this.historyData_) {
            // If we have previously received data, push the new items onto the
            // existing array.
            this.push('historyData_', ...results);
        }
        else {
            // The first time we receive data, use set() to ensure the iron-list is
            // initialized correctly.
            this.set('historyData_', results);
        }
        this.resultLoadingDisabled_ = finished;
    }
    onHistoryDeleted_() {
        // Do not reload the list when there are items checked.
        if (this.getSelectedItemCount() > 0) {
            return;
        }
        // Reload the list with current search state.
        this.fire_('query-history', false);
    }
    selectOrUnselectAll() {
        if (this.historyData_.length === this.getSelectedItemCount()) {
            this.unselectAllItems();
        }
        else {
            this.selectAllItems();
        }
    }
    /**
     * Select each item in |historyData|.
     */
    selectAllItems() {
        if (this.historyData_.length === this.getSelectedItemCount()) {
            return;
        }
        this.historyData_.forEach((_item, index) => {
            this.changeSelection_(index, true);
        });
    }
    /**
     * Deselect each item in |selectedItems|.
     */
    unselectAllItems() {
        this.selectedItems.forEach((index) => {
            this.changeSelection_(index, false);
        });
        assert(this.selectedItems.size === 0);
    }
    /** @return {number} */
    getSelectedItemCount() {
        return this.selectedItems.size;
    }
    /**
     * Delete all the currently selected history items. Will prompt the user with
     * a dialog to confirm that the deletion should be performed.
     */
    deleteSelectedWithPrompt() {
        if (!this.canDeleteHistory_) {
            return;
        }
        const browserService = BrowserServiceImpl.getInstance();
        browserService.recordAction('RemoveSelected');
        if (this.queryState.searchTerm !== '') {
            browserService.recordAction('SearchResultRemove');
        }
        this.$.dialog.get().showModal();
        // TODO(dbeam): remove focus flicker caused by showModal() + focus().
        this.shadowRoot.querySelector('.action-button').focus();
    }
    /////////////////////////////////////////////////////////////////////////////
    // Private methods:
    /**
     * Set the selection status for an item at a particular index.
     */
    changeSelection_(index, selected) {
        this.set(`historyData_.${index}.selected`, selected);
        if (selected) {
            this.selectedItems.add(index);
        }
        else {
            this.selectedItems.delete(index);
        }
    }
    /**
     * Performs a request to the backend to delete all selected items. If
     * successful, removes them from the view. Does not prompt the user before
     * deleting -- see deleteSelectedWithPrompt for a version of this method which
     * does prompt.
     */
    deleteSelected_() {
        assert(!this.pendingDelete);
        const toBeRemoved = Array.from(this.selectedItems.values())
            .map((index) => this.get(`historyData_.${index}`));
        this.deleteItems_(toBeRemoved).then(() => {
            this.pendingDelete = false;
            this.removeItemsByIndex_(Array.from(this.selectedItems));
            this.fire_('unselect-all');
            if (this.historyData_.length === 0) {
                // Try reloading if nothing is rendered.
                this.fire_('query-history', false);
            }
        });
    }
    removeItemsForTest(indices) {
        this.removeItemsByIndex_(indices);
    }
    /**
     * Remove all |indices| from the history list. Uses notifySplices to send a
     * single large notification to Polymer, rather than many small notifications,
     * which greatly improves performance.
     */
    removeItemsByIndex_(indices) {
        const splices = [];
        indices.sort(function (a, b) {
            // Sort in reverse numerical order.
            return b - a;
        });
        indices.forEach((index) => {
            const item = this.historyData_.splice(index, 1);
            splices.push({
                index: index,
                removed: [item],
                addedCount: 0,
                object: this.historyData_,
                type: 'splice',
            });
        });
        this.notifySplices('historyData_', splices);
    }
    removeItemsByIndexForTesting(indices) {
        this.removeItemsByIndex_(indices);
    }
    /**
     * Closes the overflow menu.
     */
    closeMenu_() {
        const menu = this.$.sharedMenu.getIfExists();
        if (menu && menu.open) {
            this.actionMenuModel_ = null;
            menu.close();
        }
    }
    /////////////////////////////////////////////////////////////////////////////
    // Event listeners:
    onDialogConfirmClick_() {
        BrowserServiceImpl.getInstance().recordAction('ConfirmRemoveSelected');
        this.deleteSelected_();
        const dialog = this.$.dialog.getIfExists();
        assert(dialog);
        dialog.close();
    }
    onDialogCancelClick_() {
        BrowserServiceImpl.getInstance().recordAction('CancelRemoveSelected');
        const dialog = this.$.dialog.getIfExists();
        assert(dialog);
        dialog.close();
    }
    /**
     * Remove bookmark star for history items with matching URLs.
     */
    onRemoveBookmarkStars_(e) {
        const url = e.detail;
        if (this.historyData_ === undefined) {
            return;
        }
        for (let i = 0; i < this.historyData_.length; i++) {
            if (this.historyData_[i].url === url) {
                this.set(`historyData_.${i}.starred`, false);
            }
        }
    }
    /**
     * Called when the page is scrolled to near the bottom of the list.
     */
    onScrollToBottom_() {
        if (this.resultLoadingDisabled_ || this.queryState.querying) {
            return;
        }
        this.fire_('query-history', true);
    }
    /**
     * Open the overflow menu and ensure that the item is visible in the scroll
     * pane when its menu is opened (it is possible to open off-screen items using
     * keyboard shortcuts).
     */
    onOpenMenu_(e) {
        const index = e.detail.index;
        const list = this.$['infinite-list'];
        if (index < list.firstVisibleIndex || index > list.lastVisibleIndex) {
            list.scrollToIndex(index);
        }
        const target = e.detail.target;
        this.actionMenuModel_ = e.detail;
        this.$.sharedMenu.get().showAt(target);
    }
    onMoreFromSiteClick_() {
        BrowserServiceImpl.getInstance().recordAction('EntryMenuShowMoreFromSite');
        assert(this.$.sharedMenu.getIfExists());
        this.fire_('change-query', { search: 'host:' + this.actionMenuModel_.item.domain });
        this.actionMenuModel_ = null;
        this.closeMenu_();
    }
    deleteItems_(items) {
        const removalList = items.map(item => ({
            url: item.url,
            timestamps: item.allTimestamps,
        }));
        this.pendingDelete = true;
        return BrowserServiceImpl.getInstance().removeVisits(removalList);
    }
    onRemoveBookmarkClick_() {
        const browserService = BrowserServiceImpl.getInstance();
        browserService.removeBookmark(this.actionMenuModel_.item.url);
        this.fire_('remove-bookmark-stars', this.actionMenuModel_.item.url);
        this.closeMenu_();
    }
    onRemoveFromHistoryClick_() {
        const browserService = BrowserServiceImpl.getInstance();
        browserService.recordAction('EntryMenuRemoveFromHistory');
        assert(!this.pendingDelete);
        assert(this.$.sharedMenu.getIfExists());
        const itemData = this.actionMenuModel_;
        this.deleteItems_([itemData.item]).then(() => {
            getInstance().announce(this.i18n('deleteSuccess', itemData.item.title));
            // This unselect-all resets the toolbar when deleting a selected item
            // and clears selection state which can be invalid if items move
            // around during deletion.
            // TODO(tsergeant): Make this automatic based on observing list
            // modifications.
            this.pendingDelete = false;
            this.fire_('unselect-all');
            this.removeItemsByIndex_([itemData.index]);
            const index = itemData.index;
            if (index === undefined) {
                return;
            }
            if (this.historyData_.length > 0) {
                setTimeout(() => {
                    this.$['infinite-list'].focusItem(Math.min(this.historyData_.length - 1, index));
                    const item = getDeepActiveElement();
                    if (item && item.focusOnMenuButton) {
                        item.focusOnMenuButton();
                    }
                }, 1);
            }
        });
        this.closeMenu_();
    }
    onItemSelected_(e) {
        const index = e.detail.index;
        const indices = [];
        // Handle shift selection. Change the selection state of all items between
        // |path| and |lastSelected| to the selection state of |item|.
        if (e.detail.shiftKey && this.lastSelectedIndex !== undefined) {
            for (let i = Math.min(index, this.lastSelectedIndex); i <= Math.max(index, this.lastSelectedIndex); i++) {
                indices.push(i);
            }
        }
        if (indices.length === 0) {
            indices.push(index);
        }
        const selected = !this.selectedItems.has(index);
        indices.forEach((index) => {
            this.changeSelection_(index, selected);
        });
        this.lastSelectedIndex = index;
    }
    /////////////////////////////////////////////////////////////////////////////
    // Template helpers:
    /**
     * Check whether the time difference between the given history item and the
     * next one is large enough for a spacer to be required.
     */
    needsTimeGap_(_item, index) {
        const length = this.historyData_.length;
        if (index === undefined || index >= length - 1 || length === 0) {
            return false;
        }
        const currentItem = this.historyData_[index];
        const nextItem = this.historyData_[index + 1];
        if (this.searchedTerm) {
            return currentItem.dateShort !== nextItem.dateShort;
        }
        return currentItem.time - nextItem.time > BROWSING_GAP_TIME &&
            currentItem.dateRelativeDay === nextItem.dateRelativeDay;
    }
    /**
     * True if the given item is the beginning of a new card.
     * @param i Index of |item| within |historyData_|.
     */
    isCardStart_(_item, i) {
        const length = this.historyData_.length;
        if (i === undefined || length === 0 || i > length - 1) {
            return false;
        }
        return i === 0 ||
            this.historyData_[i].dateRelativeDay !==
                this.historyData_[i - 1].dateRelativeDay;
    }
    /**
     * True if the given item is the end of a card.
     * @param i Index of |item| within |historyData_|.
     */
    isCardEnd_(_item, i) {
        const length = this.historyData_.length;
        if (i === undefined || length === 0 || i > length - 1) {
            return false;
        }
        return i === length - 1 ||
            this.historyData_[i].dateRelativeDay !==
                this.historyData_[i + 1].dateRelativeDay;
    }
    hasResults_() {
        return this.historyData_.length > 0;
    }
    noResultsMessage_(searchedTerm) {
        const messageId = searchedTerm !== '' ? 'noSearchResults' : 'noResults';
        return loadTimeData.getString(messageId);
    }
    canSearchMoreFromSite_(searchedTerm, domain) {
        return searchedTerm === '' || searchedTerm !== domain;
    }
    initializeResults_(info, results) {
        if (results.length === 0) {
            return;
        }
        let currentDate = results[0].dateRelativeDay;
        for (let i = 0; i < results.length; i++) {
            // Sets the default values for these fields to prevent undefined types.
            results[i].selected = false;
            results[i].readableTimestamp =
                info.term === '' ? results[i].dateTimeOfDay : results[i].dateShort;
            if (results[i].dateRelativeDay !== currentDate) {
                currentDate = results[i].dateRelativeDay;
            }
        }
    }
    /**
     * Adding in order to address an issue with a flaky test. After the list is
     * updated, the test would not see the updated elements when using Polymer 2.
     * This has yet to be reproduced in manual testing.
     */
    onHistoryDataChanged_() {
        this.$['infinite-list'].fire('iron-resize');
    }
}
customElements.define(HistoryListElement.is, HistoryListElement);

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

const template$2 = html`<dom-module id="paper-spinner-styles">
  <template>
    <style>
      /*
      /**************************/
      /* STYLES FOR THE SPINNER */
      /**************************/

      /*
       * Constants:
       *      ARCSIZE     = 270 degrees (amount of circle the arc takes up)
       *      ARCTIME     = 1333ms (time it takes to expand and contract arc)
       *      ARCSTARTROT = 216 degrees (how much the start location of the arc
       *                                should rotate each time, 216 gives us a
       *                                5 pointed star shape (it's 360/5 * 3).
       *                                For a 7 pointed star, we might do
       *                                360/7 * 3 = 154.286)
       *      SHRINK_TIME = 400ms
       */

      :host {
        display: inline-block;
        position: relative;
        width: 28px;
        height: 28px;

        /* 360 * ARCTIME / (ARCSTARTROT + (360-ARCSIZE)) */
        --paper-spinner-container-rotation-duration: 1568ms;

        /* ARCTIME */
        --paper-spinner-expand-contract-duration: 1333ms;

        /* 4 * ARCTIME */
        --paper-spinner-full-cycle-duration: 5332ms;

        /* SHRINK_TIME */
        --paper-spinner-cooldown-duration: 400ms;
      }

      #spinnerContainer {
        width: 100%;
        height: 100%;

        /* The spinner does not have any contents that would have to be
         * flipped if the direction changes. Always use ltr so that the
         * style works out correctly in both cases. */
        direction: ltr;
      }

      #spinnerContainer.active {
        animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite;
      }

      @-webkit-keyframes container-rotate {
        to { -webkit-transform: rotate(360deg) }
      }

      @keyframes container-rotate {
        to { transform: rotate(360deg) }
      }

      .spinner-layer {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        white-space: nowrap;
        color: var(--paper-spinner-color, var(--google-blue-500));
      }

      .layer-1 {
        color: var(--paper-spinner-layer-1-color, var(--google-blue-500));
      }

      .layer-2 {
        color: var(--paper-spinner-layer-2-color, var(--google-red-500));
      }

      .layer-3 {
        color: var(--paper-spinner-layer-3-color, var(--google-yellow-500));
      }

      .layer-4 {
        color: var(--paper-spinner-layer-4-color, var(--google-green-500));
      }

      /**
       * IMPORTANT NOTE ABOUT CSS ANIMATION PROPERTIES (keanulee):
       *
       * iOS Safari (tested on iOS 8.1) does not handle animation-delay very well - it doesn't
       * guarantee that the animation will start _exactly_ after that value. So we avoid using
       * animation-delay and instead set custom keyframes for each color (as layer-2undant as it
       * seems).
       */
      .active .spinner-layer {
        animation-name: fill-unfill-rotate;
        animation-duration: var(--paper-spinner-full-cycle-duration);
        animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
        animation-iteration-count: infinite;
        opacity: 1;
      }

      .active .spinner-layer.layer-1 {
        animation-name: fill-unfill-rotate, layer-1-fade-in-out;
      }

      .active .spinner-layer.layer-2 {
        animation-name: fill-unfill-rotate, layer-2-fade-in-out;
      }

      .active .spinner-layer.layer-3 {
        animation-name: fill-unfill-rotate, layer-3-fade-in-out;
      }

      .active .spinner-layer.layer-4 {
        animation-name: fill-unfill-rotate, layer-4-fade-in-out;
      }

      @-webkit-keyframes fill-unfill-rotate {
        12.5% { -webkit-transform: rotate(135deg) } /* 0.5 * ARCSIZE */
        25%   { -webkit-transform: rotate(270deg) } /* 1   * ARCSIZE */
        37.5% { -webkit-transform: rotate(405deg) } /* 1.5 * ARCSIZE */
        50%   { -webkit-transform: rotate(540deg) } /* 2   * ARCSIZE */
        62.5% { -webkit-transform: rotate(675deg) } /* 2.5 * ARCSIZE */
        75%   { -webkit-transform: rotate(810deg) } /* 3   * ARCSIZE */
        87.5% { -webkit-transform: rotate(945deg) } /* 3.5 * ARCSIZE */
        to    { -webkit-transform: rotate(1080deg) } /* 4   * ARCSIZE */
      }

      @keyframes fill-unfill-rotate {
        12.5% { transform: rotate(135deg) } /* 0.5 * ARCSIZE */
        25%   { transform: rotate(270deg) } /* 1   * ARCSIZE */
        37.5% { transform: rotate(405deg) } /* 1.5 * ARCSIZE */
        50%   { transform: rotate(540deg) } /* 2   * ARCSIZE */
        62.5% { transform: rotate(675deg) } /* 2.5 * ARCSIZE */
        75%   { transform: rotate(810deg) } /* 3   * ARCSIZE */
        87.5% { transform: rotate(945deg) } /* 3.5 * ARCSIZE */
        to    { transform: rotate(1080deg) } /* 4   * ARCSIZE */
      }

      @-webkit-keyframes layer-1-fade-in-out {
        0% { opacity: 1 }
        25% { opacity: 1 }
        26% { opacity: 0 }
        89% { opacity: 0 }
        90% { opacity: 1 }
        to { opacity: 1 }
      }

      @keyframes layer-1-fade-in-out {
        0% { opacity: 1 }
        25% { opacity: 1 }
        26% { opacity: 0 }
        89% { opacity: 0 }
        90% { opacity: 1 }
        to { opacity: 1 }
      }

      @-webkit-keyframes layer-2-fade-in-out {
        0% { opacity: 0 }
        15% { opacity: 0 }
        25% { opacity: 1 }
        50% { opacity: 1 }
        51% { opacity: 0 }
        to { opacity: 0 }
      }

      @keyframes layer-2-fade-in-out {
        0% { opacity: 0 }
        15% { opacity: 0 }
        25% { opacity: 1 }
        50% { opacity: 1 }
        51% { opacity: 0 }
        to { opacity: 0 }
      }

      @-webkit-keyframes layer-3-fade-in-out {
        0% { opacity: 0 }
        40% { opacity: 0 }
        50% { opacity: 1 }
        75% { opacity: 1 }
        76% { opacity: 0 }
        to { opacity: 0 }
      }

      @keyframes layer-3-fade-in-out {
        0% { opacity: 0 }
        40% { opacity: 0 }
        50% { opacity: 1 }
        75% { opacity: 1 }
        76% { opacity: 0 }
        to { opacity: 0 }
      }

      @-webkit-keyframes layer-4-fade-in-out {
        0% { opacity: 0 }
        65% { opacity: 0 }
        75% { opacity: 1 }
        90% { opacity: 1 }
        to { opacity: 0 }
      }

      @keyframes layer-4-fade-in-out {
        0% { opacity: 0 }
        65% { opacity: 0 }
        75% { opacity: 1 }
        90% { opacity: 1 }
        to { opacity: 0 }
      }

      .circle-clipper {
        display: inline-block;
        position: relative;
        width: 50%;
        height: 100%;
        overflow: hidden;
      }

      /**
       * Patch the gap that appear between the two adjacent div.circle-clipper while the
       * spinner is rotating (appears on Chrome 50, Safari 9.1.1, and Edge).
       */
      .spinner-layer::after {
        content: '';
        left: 45%;
        width: 10%;
        border-top-style: solid;
      }

      .spinner-layer::after,
      .circle-clipper .circle {
        box-sizing: border-box;
        position: absolute;
        top: 0;
        border-width: var(--paper-spinner-stroke-width, 3px);
        border-radius: 50%;
      }

      .circle-clipper .circle {
        bottom: 0;
        width: 200%;
        border-style: solid;
        border-bottom-color: transparent !important;
      }

      .circle-clipper.left .circle {
        left: 0;
        border-right-color: transparent !important;
        transform: rotate(129deg);
      }

      .circle-clipper.right .circle {
        left: -100%;
        border-left-color: transparent !important;
        transform: rotate(-129deg);
      }

      .active .gap-patch::after,
      .active .circle-clipper .circle {
        animation-duration: var(--paper-spinner-expand-contract-duration);
        animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
        animation-iteration-count: infinite;
      }

      .active .circle-clipper.left .circle {
        animation-name: left-spin;
      }

      .active .circle-clipper.right .circle {
        animation-name: right-spin;
      }

      @-webkit-keyframes left-spin {
        0% { -webkit-transform: rotate(130deg) }
        50% { -webkit-transform: rotate(-5deg) }
        to { -webkit-transform: rotate(130deg) }
      }

      @keyframes left-spin {
        0% { transform: rotate(130deg) }
        50% { transform: rotate(-5deg) }
        to { transform: rotate(130deg) }
      }

      @-webkit-keyframes right-spin {
        0% { -webkit-transform: rotate(-130deg) }
        50% { -webkit-transform: rotate(5deg) }
        to { -webkit-transform: rotate(-130deg) }
      }

      @keyframes right-spin {
        0% { transform: rotate(-130deg) }
        50% { transform: rotate(5deg) }
        to { transform: rotate(-130deg) }
      }

      #spinnerContainer.cooldown {
        animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite, fade-out var(--paper-spinner-cooldown-duration) cubic-bezier(0.4, 0.0, 0.2, 1);
      }

      @-webkit-keyframes fade-out {
        0% { opacity: 1 }
        to { opacity: 0 }
      }

      @keyframes fade-out {
        0% { opacity: 1 }
        to { opacity: 0 }
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild(template$2.content);

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/** @polymerBehavior */
const PaperSpinnerBehavior = {

  properties: {
    /**
     * Displays the spinner.
     */
    active: {
      type: Boolean,
      value: false,
      reflectToAttribute: true,
      observer: '__activeChanged'
    },

    /**
     * Alternative text content for accessibility support.
     * If alt is present, it will add an aria-label whose content matches alt
     * when active. If alt is not present, it will default to 'loading' as the
     * alt value.
     */
    alt: {type: String, value: 'loading', observer: '__altChanged'},

    __coolingDown: {type: Boolean, value: false}
  },

  __computeContainerClasses: function(active, coolingDown) {
    return [
      active || coolingDown ? 'active' : '',
      coolingDown ? 'cooldown' : ''
    ].join(' ');
  },

  __activeChanged: function(active, old) {
    this.__setAriaHidden(!active);
    this.__coolingDown = !active && old;
  },

  __altChanged: function(alt) {
    // user-provided `aria-label` takes precedence over prototype default
    if (alt === 'loading') {
      this.alt = this.getAttribute('aria-label') || alt;
    } else {
      this.__setAriaHidden(alt === '');
      this.setAttribute('aria-label', alt);
    }
  },

  __setAriaHidden: function(hidden) {
    var attr = 'aria-hidden';
    if (hidden) {
      this.setAttribute(attr, 'true');
    } else {
      this.removeAttribute(attr);
    }
  },

  __reset: function() {
    this.active = false;
    this.__coolingDown = false;
  }
};

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

const template$1 = html`
  <style include="paper-spinner-styles"></style>

  <div id="spinnerContainer" class-name="[[__computeContainerClasses(active, __coolingDown)]]" on-animationend="__reset" on-webkit-animation-end="__reset">
    <div class="spinner-layer">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>
`;
template$1.setAttribute('strip-whitespace', '');

/**
Material design: [Progress &
activity](https://www.google.com/design/spec/components/progress-activity.html)

Element providing a single color material design circular spinner.

    <paper-spinner-lite active></paper-spinner-lite>

The default spinner is blue. It can be customized to be a different color.

### Accessibility

Alt attribute should be set to provide adequate context for accessibility. If
not provided, it defaults to 'loading'. Empty alt can be provided to mark the
element as decorative if alternative content is provided in another form (e.g. a
text block following the spinner).

    <paper-spinner-lite alt="Loading contacts list" active></paper-spinner-lite>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-spinner-color` | Color of the spinner | `--google-blue-500`
`--paper-spinner-stroke-width` | The width of the spinner stroke | 3px

@group Paper Elements
@element paper-spinner-lite
@hero hero.svg
@demo demo/index.html
*/
Polymer({
  _template: template$1,

  is: 'paper-spinner-lite',

  behaviors: [PaperSpinnerBehavior]
});

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Helper functions for implementing an incremental search field. See
 * <settings-subpage-search> for a simple implementation.
 */
const CrSearchFieldMixin = dedupingMixin((superClass) => {
    class CrSearchFieldMixin extends superClass {
        constructor() {
            super(...arguments);
            this.effectiveValue_ = '';
            this.searchDelayTimer_ = -1;
        }
        static get properties() {
            return {
                // Prompt text to display in the search field.
                label: {
                    type: String,
                    value: '',
                },
                // Tooltip to display on the clear search button.
                clearLabel: {
                    type: String,
                    value: '',
                },
                hasSearchText: {
                    type: Boolean,
                    reflectToAttribute: true,
                    value: false,
                },
            };
        }
        /**
         * @return The input field element the behavior should use.
         */
        getSearchInput() {
            assertNotReached();
        }
        /**
         * @return The value of the search field.
         */
        getValue() {
            return this.getSearchInput().value;
        }
        fire_(eventName, detail) {
            this.dispatchEvent(new CustomEvent(eventName, { bubbles: true, composed: true, detail }));
        }
        /**
         * Sets the value of the search field.
         * @param noEvent Whether to prevent a 'search-changed' event
         *     firing for this change.
         */
        setValue(value, noEvent) {
            const updated = this.updateEffectiveValue_(value);
            this.getSearchInput().value = this.effectiveValue_;
            if (!updated) {
                // If the input is only whitespace and value is empty,
                // |hasSearchText| needs to be updated.
                if (value === '' && this.hasSearchText) {
                    this.hasSearchText = false;
                }
                return;
            }
            this.onSearchTermInput();
            if (!noEvent) {
                this.fire_('search-changed', this.effectiveValue_);
            }
        }
        scheduleSearch_() {
            if (this.searchDelayTimer_ >= 0) {
                clearTimeout(this.searchDelayTimer_);
            }
            // Dispatch 'search' event after:
            //    0ms if the value is empty
            //  500ms if the value length is 1
            //  400ms if the value length is 2
            //  300ms if the value length is 3
            //  200ms if the value length is 4 or greater.
            // The logic here was copied from WebKit's native 'search' event.
            const length = this.getValue().length;
            const timeoutMs = length > 0 ? (500 - 100 * (Math.min(length, 4) - 1)) : 0;
            this.searchDelayTimer_ = setTimeout(() => {
                this.getSearchInput().dispatchEvent(new CustomEvent('search', { composed: true, detail: this.getValue() }));
                this.searchDelayTimer_ = -1;
            }, timeoutMs);
        }
        onSearchTermSearch() {
            this.onValueChanged_(this.getValue(), false);
        }
        /**
         * Update the state of the search field whenever the underlying input
         * value changes. Unlike onsearch or onkeypress, this is reliably called
         * immediately after any change, whether the result of user input or JS
         * modification.
         */
        onSearchTermInput() {
            this.hasSearchText = this.getSearchInput().value !== '';
            this.scheduleSearch_();
        }
        /**
         * Updates the internal state of the search field based on a change that
         * has already happened.
         * @param noEvent Whether to prevent a 'search-changed' event
         *     firing for this change.
         */
        onValueChanged_(newValue, noEvent) {
            const updated = this.updateEffectiveValue_(newValue);
            if (updated && !noEvent) {
                this.fire_('search-changed', this.effectiveValue_);
            }
        }
        /**
         * Trim leading whitespace and replace consecutive whitespace with
         * single space. This will prevent empty string searches and searches
         * for effectively the same query.
         */
        updateEffectiveValue_(value) {
            const effectiveValue = value.replace(/\s+/g, ' ').replace(/^\s/, '');
            if (effectiveValue === this.effectiveValue_) {
                return false;
            }
            this.effectiveValue_ = effectiveValue;
            return true;
        }
    }
    return CrSearchFieldMixin;
});

function getTemplate$6() {
    return html `<!--_html_template_start_-->    <style include="cr-shared-style cr-icons">:host{display:block;height:40px;transition:background-color 150ms cubic-bezier(.4,0,.2,1),width 150ms cubic-bezier(.4,0,.2,1);width:44px}:host-context([chrome-refresh-2023]):host{isolation:isolate}:host([disabled]){opacity:var(--cr-disabled-opacity)}[hidden]{display:none!important}cr-icon-button{--cr-icon-button-size:var(--cr-toolbar-icon-container-size, 32px);margin:var(--cr-toolbar-icon-margin,6px)}:host-context([chrome-refresh-2023]) cr-icon-button{--cr-icon-button-fill-color:var(--cr-toolbar-search-field-icon-color,
            var(--color-toolbar-search-field-icon,
            var(--cr-secondary-text-color)));--cr-icon-button-size:var(--cr-toolbar-icon-container-size, 28px);--cr-icon-button-icon-size:20px;margin:var(--cr-toolbar-icon-margin,0)}@media (prefers-color-scheme:light){cr-icon-button{--cr-icon-button-fill-color:var(
              --cr-toolbar-search-field-input-icon-color,
              var(--google-grey-700));--cr-icon-button-focus-outline-color:var(
              --cr-toolbar-icon-button-focus-outline-color,
              var(--cr-focus-outline-color))}}@media (prefers-color-scheme:dark){cr-icon-button{--cr-icon-button-fill-color:var(
              --cr-toolbar-search-field-input-icon-color,
              var(--google-grey-500))}}#icon{transition:margin 150ms,opacity .2s}#prompt{color:var(--cr-toolbar-search-field-prompt-color,var(--google-grey-700));opacity:0}@media (prefers-color-scheme:dark){#prompt{color:var(--cr-toolbar-search-field-prompt-color,#fff)}}@media (prefers-color-scheme:dark){#prompt{--cr-toolbar-search-field-prompt-opacity:1;color:var(--cr-secondary-text-color,#fff)}}:host-context([chrome-refresh-2023]) #prompt{color:var(--cr-toolbar-search-field-prompt-color,var(--color-toolbar-search-field-foreground-placeholder,var(--cr-secondary-text-color)))}paper-spinner-lite{--paper-spinner-color:var(--cr-toolbar-search-field-input-icon-color,
                var(--google-grey-700));height:var(--cr-icon-size);margin:var(--cr-toolbar-search-field-paper-spinner-margin,0 6px);opacity:0;padding:6px;position:absolute;width:var(--cr-icon-size)}@media (prefers-color-scheme:dark){paper-spinner-lite{--paper-spinner-color:var(
              --cr-toolbar-search-field-input-icon-color, white)}}:host-context([chrome-refresh-2023]) paper-spinner-lite{margin:0;padding:2px}paper-spinner-lite[active]{opacity:1}#prompt,paper-spinner-lite{transition:opacity .2s}#searchTerm{-webkit-font-smoothing:antialiased;flex:1;line-height:185%;margin:var(--cr-toolbar-search-field-term-margin,0 2px);position:relative}:host-context([chrome-refresh-2023]) #searchTerm{font-size:12px;font-weight:500;margin:var(--cr-toolbar-search-field-term-margin,0)}label{bottom:0;cursor:var(--cr-toolbar-search-field-cursor,text);left:0;overflow:hidden;position:absolute;right:0;top:0;white-space:nowrap}:host([has-search-text]) label{visibility:hidden}input{-webkit-appearance:none;background:0 0;border:none;caret-color:var(--cr-toolbar-search-field-input-caret-color,var(--google-blue-700));color:var(--cr-toolbar-search-field-input-text-color,var(--google-grey-900));cursor:var(--cr-toolbar-search-field-cursor,text);font:inherit;outline:0;padding:0;position:relative;width:100%}@media (prefers-color-scheme:dark){input{color:var(--cr-toolbar-search-field-input-text-color,#fff)}}:host-context([chrome-refresh-2023]) input{caret-color:var(--cr-toolbar-serch-field-input-caret-color,currentColor);color:var(--cr-toolbar-search-field-input-text-color,var(--color-toolbar-search-field-foreground,var(--cr-fallback-color-on-surface)));font-size:12px;font-weight:500}input[type=search]::-webkit-search-cancel-button{display:none}:host([narrow]){border-radius:var(--cr-toolbar-search-field-border-radius,0)}:host(:not([narrow])){background:var(--cr-toolbar-search-field-background,var(--google-grey-100));border-radius:var(--cr-toolbar-search-field-border-radius,46px);cursor:var(--cr-toolbar-search-field-cursor,text);max-width:var(--cr-toolbar-field-max-width,none);padding-inline-end:0;width:var(--cr-toolbar-field-width,680px)}@media (prefers-color-scheme:dark){:host(:not([narrow])){background:var(--cr-toolbar-search-field-background,rgba(0,0,0,.22))}}:host-context([chrome-refresh-2023]):host(:not([narrow])){background:0 0;border-radius:100px;height:36px;overflow:hidden;padding:0 6px;position:relative}#background,#stateBackground{display:none}:host-context([chrome-refresh-2023]):host(:not([narrow])) #background{background:var(--cr-toolbar-search-field-background,var(--color-toolbar-search-field-background,var(--cr-fallback-color-base-container)));border-radius:inherit;display:block;inset:0;pointer-events:none;position:absolute;z-index:0}:host-context([chrome-refresh-2023]):host([search-focused_]:not([narrow])){outline:2px solid var(--cr-focus-outline-color);outline-offset:2px}:host-context([chrome-refresh-2023]):host(:not([narrow])) #stateBackground{display:block;inset:0;pointer-events:none;position:absolute}:host-context([chrome-refresh-2023]):host(:hover:not([search-focused_],[narrow])) #stateBackground{background:var(--color-toolbar-search-field-background-hover,var(--cr-hover-background-color));z-index:1}:host(:not([narrow]):not([showing-search])) #icon{opacity:var(--cr-toolbar-search-field-icon-opacity,.7)}:host-context([chrome-refresh-2023]):host(:not([narrow]):not([showing-search])) #icon{opacity:var(--cr-toolbar-search-field-icon-opacity,1)}:host(:not([narrow])) #prompt{opacity:var(--cr-toolbar-search-field-prompt-opacity,1)}:host([narrow]) #prompt{opacity:var(--cr-toolbar-search-field-narrow-mode-prompt-opacity,0)}:host([narrow]:not([showing-search])) #searchTerm{display:none}:host([showing-search][spinner-active]) #icon{opacity:0}:host([narrow][showing-search]){width:100%}:host([narrow][showing-search]) #icon,:host([narrow][showing-search]) paper-spinner-lite{margin-inline-start:var(--cr-toolbar-search-icon-margin-inline-start,18px)}#content{align-items:center;display:flex;height:100%}:host-context([chrome-refresh-2023]) #content{position:relative;z-index:2}</style>
    <div id="background"></div>
    <div id="stateBackground"></div>
    <div id="content">
      <template is="dom-if" id="spinnerTemplate">
        <paper-spinner-lite active="[[isSpinnerShown_]]">
        </paper-spinner-lite>
      </template>
      <cr-icon-button id="icon" iron-icon="cr:search" title="[[label]]" dir="ltr" tabindex$="[[computeIconTabIndex_(narrow, hasSearchText)]]" aria-hidden$="[[computeIconAriaHidden_(narrow, hasSearchText)]]" on-click="onSearchIconClicked_" disabled="[[disabled]]">
      </cr-icon-button>
      <div id="searchTerm">
        <label id="prompt" for="searchInput" aria-hidden="true">[[label]]</label>
        <input id="searchInput" aria-labelledby="prompt" autocapitalize="off" autocomplete="off" type="search" on-input="onSearchTermInput" on-search="onSearchTermSearch" on-keydown="onSearchTermKeydown_" on-focus="onInputFocus_" on-blur="onInputBlur_" autofocus$="[[autofocus]]" spellcheck="false" disabled="[[disabled]]">
      </div>
      <template is="dom-if" if="[[hasSearchText]]">
        <cr-icon-button id="clearSearch" iron-icon="cr:cancel" title="[[clearLabel]]" on-click="clearSearch_" disabled="[[disabled]]"></cr-icon-button>
      </template>
    </div>
<!--_html_template_end_-->`;
}

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrToolbarSearchFieldElementBase = CrSearchFieldMixin(PolymerElement);
class CrToolbarSearchFieldElement extends CrToolbarSearchFieldElementBase {
    static get is() {
        return 'cr-toolbar-search-field';
    }
    static get template() {
        return getTemplate$6();
    }
    static get properties() {
        return {
            narrow: {
                type: Boolean,
                reflectToAttribute: true,
            },
            showingSearch: {
                type: Boolean,
                value: false,
                notify: true,
                observer: 'showingSearchChanged_',
                reflectToAttribute: true,
            },
            disabled: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            autofocus: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            // When true, show a loading spinner to indicate that the backend is
            // processing the search. Will only show if the search field is open.
            spinnerActive: { type: Boolean, reflectToAttribute: true },
            isSpinnerShown_: {
                type: Boolean,
                computed: 'computeIsSpinnerShown_(spinnerActive, showingSearch)',
            },
            searchFocused_: { reflectToAttribute: true, type: Boolean, value: false },
        };
    }
    ready() {
        super.ready();
        this.addEventListener('click', e => this.showSearch_(e));
    }
    getSearchInput() {
        return this.$.searchInput;
    }
    isSearchFocused() {
        return this.searchFocused_;
    }
    showAndFocus() {
        this.showingSearch = true;
        this.focus_();
    }
    onSearchTermInput() {
        super.onSearchTermInput();
        this.showingSearch = this.hasSearchText || this.isSearchFocused();
    }
    onSearchIconClicked_() {
        this.dispatchEvent(new CustomEvent('search-icon-clicked', { bubbles: true, composed: true }));
    }
    focus_() {
        this.getSearchInput().focus();
    }
    computeIconTabIndex_(narrow) {
        return narrow && !this.hasSearchText ? 0 : -1;
    }
    computeIconAriaHidden_(narrow) {
        return Boolean(!narrow || this.hasSearchText).toString();
    }
    computeIsSpinnerShown_() {
        const showSpinner = this.spinnerActive && this.showingSearch;
        if (showSpinner) {
            this.$.spinnerTemplate.if = true;
        }
        return showSpinner;
    }
    onInputFocus_() {
        this.searchFocused_ = true;
    }
    onInputBlur_() {
        this.searchFocused_ = false;
        if (!this.hasSearchText) {
            this.showingSearch = false;
        }
    }
    onSearchTermKeydown_(e) {
        if (e.key === 'Escape') {
            this.showingSearch = false;
        }
    }
    showSearch_(e) {
        if (e.target !== this.shadowRoot.querySelector('#clearSearch')) {
            this.showingSearch = true;
        }
    }
    clearSearch_() {
        this.setValue('');
        this.focus_();
        this.spinnerActive = false;
    }
    showingSearchChanged_(_current, previous) {
        // Prevent unnecessary 'search-changed' event from firing on startup.
        if (previous === undefined) {
            return;
        }
        if (this.showingSearch) {
            this.focus_();
            return;
        }
        this.setValue('');
        this.getSearchInput().blur();
    }
}
customElements.define(CrToolbarSearchFieldElement.is, CrToolbarSearchFieldElement);

function getTemplate$5() {
    return html `<!--_html_template_start_-->    <style include="cr-icons cr-hidden-style">:host{align-items:center;background-color:var(--cr-toolbar-background-color);color:var(--google-grey-900);display:flex;height:var(--cr-toolbar-height)}@media (prefers-color-scheme:dark){:host{border-bottom:var(--cr-separator-line);box-sizing:border-box;color:var(--cr-secondary-text-color)}:host-context([chrome-refresh-2023]):host{background-color:transparent;border-bottom:none}}h1{flex:1;font-size:170%;font-weight:var(--cr-toolbar-header-font-weight,500);letter-spacing:.25px;line-height:normal;margin-inline-start:6px;padding-inline-end:12px;white-space:var(--cr-toolbar-header-white-space,normal)}@media (prefers-color-scheme:dark){h1{color:var(--cr-primary-text-color)}}#leftContent{position:relative;transition:opacity .1s}#leftSpacer{align-items:center;box-sizing:border-box;display:flex;padding-inline-start:calc(12px + 6px);width:var(--cr-toolbar-left-spacer-width,auto)}cr-icon-button{--cr-icon-button-size:32px;min-width:32px}@media (prefers-color-scheme:light){cr-icon-button{--cr-icon-button-fill-color:currentColor;--cr-icon-button-focus-outline-color:var(--cr-focus-outline-color)}}#centeredContent{display:flex;flex:1 1 0;justify-content:center}#rightSpacer{padding-inline-end:12px}:host([narrow]) #centeredContent{justify-content:flex-end}:host([has-overlay]){transition:visibility var(--cr-toolbar-overlay-animation-duration);visibility:hidden}:host([narrow][showing-search_]) #leftContent{opacity:0;position:absolute}:host(:not([narrow])) #leftContent{flex:1 1 var(--cr-toolbar-field-margin,0)}:host(:not([narrow])) #centeredContent{flex-basis:var(--cr-toolbar-center-basis,0)}:host(:not([narrow])[disable-right-content-grow]) #centeredContent{justify-content:start;padding-inline-start:12px}:host(:not([narrow])) #rightContent{flex:1 1 0;text-align:end}:host(:not([narrow])[disable-right-content-grow]) #rightContent{flex:0 1 0}picture{display:none}#menuButton{margin-inline-end:9px}#menuButton~h1{margin-inline-start:0}:host(:not([narrow])) picture,:host([always-show-logo]) picture{display:initial;margin-inline-end:16px}:host(:not([narrow])) #leftSpacer,:host([always-show-logo]) #leftSpacer{padding-inline-start:calc(12px + 9px)}:host(:not([narrow])) :is(picture,#product-logo),:host([always-show-logo]) :is(picture,#product-logo){height:24px;width:24px}</style>
    <div id="leftContent">
      <div id="leftSpacer">
        <template is="dom-if" if="[[showMenu]]" restamp>
          <cr-icon-button id="menuButton" class="no-overlap" iron-icon="cr20:menu" on-click="onMenuClick_" aria-label$="[[menuLabel]]" title="[[menuLabel]]">
          </cr-icon-button>
        </template>
        <slot name="product-logo">
          <picture>
            <source media="(prefers-color-scheme: dark)" srcset="//resources/images/chrome_logo_dark.svg">
            <img id="product-logo" srcset="chrome://theme/current-channel-logo@1x, chrome://theme/current-channel-logo@2x 2x" role="presentation">
          </picture>
        </slot>
        <h1>[[pageName]]</h1>
      </div>
    </div>

    <div id="centeredContent" hidden$="[[!showSearch]]">
      <cr-toolbar-search-field id="search" narrow="[[narrow]]" label="[[searchPrompt]]" clear-label="[[clearLabel]]" spinner-active="[[spinnerActive]]" showing-search="{{showingSearch_}}" autofocus$="[[autofocus]]">
      </cr-toolbar-search-field>
      <iron-media-query query="(max-width: [[narrowThreshold]]px)" query-matches="{{narrow}}">
      </iron-media-query>
    </div>

    <div id="rightContent">
      <div id="rightSpacer">
        <slot></slot>
      </div>
    </div>
<!--_html_template_end_-->`;
}

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrToolbarElement extends PolymerElement {
    static get is() {
        return 'cr-toolbar';
    }
    static get template() {
        return getTemplate$5();
    }
    static get properties() {
        return {
            // Name to display in the toolbar, in titlecase.
            pageName: String,
            // Prompt text to display in the search field.
            searchPrompt: String,
            // Tooltip to display on the clear search button.
            clearLabel: String,
            // Tooltip to display on the menu button.
            menuLabel: String,
            // Value is proxied through to cr-toolbar-search-field. When true,
            // the search field will show a processing spinner.
            spinnerActive: Boolean,
            // Controls whether the menu button is shown at the start of the menu.
            showMenu: { type: Boolean, value: false },
            // Controls whether the search field is shown.
            showSearch: { type: Boolean, value: true },
            // Controls whether the search field is autofocused.
            autofocus: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            // True when the toolbar is displaying in narrow mode.
            narrow: {
                type: Boolean,
                reflectToAttribute: true,
                readonly: true,
                notify: true,
            },
            /**
             * The threshold at which the toolbar will change from normal to narrow
             * mode, in px.
             */
            narrowThreshold: {
                type: Number,
                value: 900,
            },
            alwaysShowLogo: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            showingSearch_: {
                type: Boolean,
                reflectToAttribute: true,
            },
        };
    }
    getSearchField() {
        return this.$.search;
    }
    onMenuClick_() {
        this.dispatchEvent(new CustomEvent('cr-toolbar-menu-click', { bubbles: true, composed: true }));
    }
    focusMenuButton() {
        requestAnimationFrame(() => {
            // Wait for next animation frame in case dom-if has not applied yet and
            // added the menu button.
            const menuButton = this.shadowRoot.querySelector('#menuButton');
            if (menuButton) {
                menuButton.focus();
            }
        });
    }
    isMenuFocused() {
        return !!this.shadowRoot.activeElement &&
            this.shadowRoot.activeElement.id === 'menuButton';
    }
}
customElements.define(CrToolbarElement.is, CrToolbarElement);

function getTemplate$4() {
    return html `<!--_html_template_start_-->    <style include="shared-style">:host{display:flex;position:relative}cr-toolbar{--cr-toolbar-center-basis:var(--cluster-max-width);--cr-toolbar-left-spacer-width:var(--side-bar-width);--cr-toolbar-field-margin:var(--side-bar-width);flex:1}:host([has-drawer]) cr-toolbar,:host([has-drawer]) cr-toolbar-selection-overlay{--cr-toolbar-field-margin:0}cr-toolbar-selection-overlay{opacity:0;--cr-toolbar-selection-overlay-max-width:var(--card-max-width);--cr-toolbar-field-margin:var(--side-bar-width)}cr-toolbar-selection-overlay[show]{opacity:1}</style>
    <cr-toolbar id="mainToolbar" disable-right-content-grow has-overlay$="[[itemsSelected_]]" page-name="$i18n{title}" clear-label="$i18n{clearSearch}" search-prompt="$i18n{searchPrompt}" spinner-active="[[spinnerActive]]" autofocus show-menu="[[hasDrawer]]" menu-label="$i18n{historyMenuButton}" narrow-threshold="1023" on-search-changed="onSearchChanged_">
    </cr-toolbar>
    <cr-toolbar-selection-overlay show="[[itemsSelected_]]" cancel-label="$i18n{cancel}" selection-label="[[numberOfItemsSelected_(count)]]" on-clear-selected-items="clearSelectedItems">
      <cr-button on-click="deleteSelectedItems" disabled$="[[pendingDelete]]">
        $i18n{delete}
      </cr-button>
    </cr-toolbar-selection-overlay>
<!--_html_template_end_-->`;
}

// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class HistoryToolbarElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.count = 0;
        this.itemsSelected_ = false;
    }
    static get is() {
        return 'history-toolbar';
    }
    static get template() {
        return getTemplate$4();
    }
    static get properties() {
        return {
            // Number of history items currently selected.
            // TODO(calamity): bind this to
            // listContainer.selectedItem.selectedPaths.length.
            count: {
                type: Number,
                observer: 'changeToolbarView_',
            },
            // True if 1 or more history items are selected. When this value changes
            // the background colour changes.
            itemsSelected_: Boolean,
            pendingDelete: Boolean,
            // The most recent term entered in the search field. Updated incrementally
            // as the user types.
            searchTerm: {
                type: String,
                observer: 'searchTermChanged_',
            },
            // True if the backend is processing and a spinner should be shown in the
            // toolbar.
            spinnerActive: {
                type: Boolean,
                value: false,
            },
            hasDrawer: {
                type: Boolean,
                reflectToAttribute: true,
            },
            hasMoreResults: Boolean,
            querying: Boolean,
            queryInfo: Object,
            // Whether to show the menu promo (a tooltip that points at the menu
            // button
            // in narrow mode).
            showMenuPromo: Boolean,
        };
    }
    fire_(eventName, detail) {
        this.dispatchEvent(new CustomEvent(eventName, { bubbles: true, composed: true, detail }));
    }
    get searchField() {
        return this.$.mainToolbar.getSearchField();
    }
    deleteSelectedItems() {
        this.fire_('delete-selected');
    }
    clearSelectedItems() {
        this.fire_('unselect-all');
        IronA11yAnnouncer.requestAvailability();
        this.fire_('iron-announce', { text: loadTimeData.getString('itemsUnselected') });
    }
    /**
     * Changes the toolbar background color depending on whether any history items
     * are currently selected.
     */
    changeToolbarView_() {
        this.itemsSelected_ = this.count > 0;
    }
    /**
     * When changing the search term externally, update the search field to
     * reflect the new search term.
     */
    searchTermChanged_() {
        if (this.searchField.getValue() !== this.searchTerm) {
            this.searchField.showAndFocus();
            this.searchField.setValue(this.searchTerm);
        }
    }
    canShowMenuPromo_() {
        return this.showMenuPromo && !loadTimeData.getBoolean('isGuestSession');
    }
    onSearchChanged_(event) {
        this.fire_('change-query', { search: event.detail });
    }
    numberOfItemsSelected_(count) {
        return count > 0 ? loadTimeData.getStringF('itemsSelected', count) : '';
    }
}
customElements.define(HistoryToolbarElement.is, HistoryToolbarElement);

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class HistoryQueryManagerElement extends PolymerElement {
    static get is() {
        return 'history-query-manager';
    }
    static get template() {
        return null;
    }
    static get properties() {
        return {
            queryState: {
                type: Object,
                notify: true,
            },
            queryResult: {
                type: Object,
                notify: true,
            },
            router: Object,
        };
    }
    static get observers() {
        return ['searchTermChanged_(queryState.searchTerm)'];
    }
    constructor() {
        super();
        this.eventTracker_ = new EventTracker();
        this.queryState = {
            // Whether the most recent query was incremental.
            incremental: false,
            // A query is initiated by page load.
            querying: true,
            searchTerm: '',
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.eventTracker_.add(document, 'change-query', this.onChangeQuery_.bind(this));
        this.eventTracker_.add(document, 'query-history', this.onQueryHistory_.bind(this));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.eventTracker_.removeAll();
    }
    initialize() {
        this.queryHistory_(false /* incremental */);
    }
    queryHistory_(incremental) {
        this.set('queryState.querying', true);
        this.set('queryState.incremental', incremental);
        const browserService = BrowserServiceImpl.getInstance();
        const promise = incremental ?
            browserService.queryHistoryContinuation() :
            browserService.queryHistory(this.queryState.searchTerm);
        // Ignore rejected (cancelled) queries.
        promise.then(result => this.onQueryResult_(result), () => { });
    }
    onChangeQuery_(e) {
        const changes = e.detail;
        let needsUpdate = false;
        if (changes.search !== null &&
            changes.search !== this.queryState.searchTerm) {
            this.set('queryState.searchTerm', changes.search);
            needsUpdate = true;
        }
        if (needsUpdate) {
            this.queryHistory_(false);
            if (this.router) {
                this.router.serializeUrl();
            }
        }
    }
    onQueryHistory_(e) {
        this.queryHistory_(e.detail);
        return false;
    }
    /**
     * @param results List of results with information about the query.
     */
    onQueryResult_(results) {
        this.set('queryState.querying', false);
        this.set('queryResult.info', results.info);
        this.set('queryResult.results', results.value);
        this.dispatchEvent(new CustomEvent('query-finished', { bubbles: true, composed: true }));
    }
    searchTermChanged_() {
        // TODO(tsergeant): Ignore incremental searches in this metric.
        if (this.queryState.searchTerm) {
            BrowserServiceImpl.getInstance().recordAction('Search');
        }
    }
}
customElements.define(HistoryQueryManagerElement.is, HistoryQueryManagerElement);

function getTemplate$3() {
    return html `<!--_html_template_start_-->    <style>:host{align-items:center;border-top:1px solid var(--cr-separator-color);color:var(--cr-secondary-text-color);display:none;font-size:.8125rem;justify-content:center;padding:0 24px}:host([is-managed_]){display:flex}a[href]{color:var(--cr-link-color)}iron-icon{align-self:flex-start;flex-shrink:0;height:20px;padding-inline-end:var(--managed-footnote-icon-padding,8px);width:20px}</style>

    <template is="dom-if" if="[[isManaged_]]">
      <iron-icon icon="[[managedByIcon_]]"></iron-icon>
      <div id="content" inner-h-t-m-l="[[getManagementString_(showDeviceInfo)]]">
      </div>
    </template>
<!--_html_template_end_-->`;
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element for indicating that this user is managed by
 * their organization. This component uses the |isManaged| boolean in
 * loadTimeData, and the |managedByOrg| i18n string.
 *
 * If |isManaged| is false, this component is hidden. If |isManaged| is true, it
 * becomes visible.
 */
const ManagedFootnoteElementBase = I18nMixin(WebUiListenerMixin(PolymerElement));
class ManagedFootnoteElement extends ManagedFootnoteElementBase {
    static get is() {
        return 'managed-footnote';
    }
    static get template() {
        return getTemplate$3();
    }
    static get properties() {
        return {
            /**
             * Whether the user is managed by their organization through enterprise
             * policies.
             */
            isManaged_: {
                reflectToAttribute: true,
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('isManaged');
                },
            },
            /**
             * Whether the device should be indicated as managed rather than the
             * browser.
             */
            showDeviceInfo: {
                type: Boolean,
                value: false,
            },
            /**
             * The name of the icon to display in the footer.
             * Should only be read if isManaged_ is true.
             */
            managedByIcon_: {
                reflectToAttribute: true,
                type: String,
                value() {
                    return loadTimeData.getString('managedByIcon');
                },
            },
        };
    }
    ready() {
        super.ready();
        this.addWebUiListener('is-managed-changed', (managed) => {
            loadTimeData.overrideValues({ isManaged: managed });
            this.isManaged_ = managed;
        });
    }
    /** @return Message to display to the user. */
    getManagementString_() {
        // 
        if (this.showDeviceInfo) {
            return this.i18nAdvanced('deviceManagedByOrg');
        }
        // 
        return this.i18nAdvanced('browserManagedByOrg');
    }
}
customElements.define(ManagedFootnoteElement.is, ManagedFootnoteElement);
chrome.send('observeManagedUI');

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrMenuSelectorBase = mixinBehaviors([IronSelectableBehavior], PolymerElement);
class CrMenuSelector extends CrMenuSelectorBase {
    static get is() {
        return 'cr-menu-selector';
    }
    connectedCallback() {
        super.connectedCallback();
        this.focusOutlineManager_ = FocusOutlineManager.forDocument(document);
    }
    ready() {
        super.ready();
        this.setAttribute('role', 'menu');
        this.addEventListener('focusin', this.onFocusin_.bind(this));
        this.addEventListener('keydown', this.onKeydown_.bind(this));
        this.addEventListener('iron-deselect', e => this.onIronDeselected_(e));
        this.addEventListener('iron-select', e => this.onIronSelected_(e));
    }
    getAllFocusableItems_() {
        // Note that this is different from IronSelectableBehavior's items property
        // as some items are focusable and actionable but not selectable (eg. an
        // external link).
        return Array.from(this.querySelectorAll('[role=menuitem]:not([disabled]):not([hidden])'));
    }
    onFocusin_(e) {
        // If the focus was moved by keyboard and is coming in from a relatedTarget
        // that is not within this menu, move the focus to the first menu item. This
        // ensures that the first menu item is always the first focused item when
        // focusing into the menu. A null relatedTarget means the focus was moved
        // from outside the WebContents.
        const focusMovedWithKeyboard = this.focusOutlineManager_.visible;
        const focusMovedFromOutside = e.relatedTarget === null ||
            !this.contains(e.relatedTarget);
        if (focusMovedWithKeyboard && focusMovedFromOutside) {
            this.getAllFocusableItems_()[0].focus();
        }
    }
    onIronDeselected_(e) {
        e.detail.item.removeAttribute('aria-current');
    }
    onIronSelected_(e) {
        e.detail.item.setAttribute('aria-current', 'page');
    }
    onKeydown_(event) {
        const items = this.getAllFocusableItems_();
        assert(items.length >= 1);
        const currentFocusedIndex = items.indexOf(this.querySelector(':focus'));
        let newFocusedIndex = currentFocusedIndex;
        switch (event.key) {
            case 'Tab':
                if (event.shiftKey) {
                    // If pressing Shift+Tab, immediately focus the first element so that
                    // when the event is finished processing, the browser automatically
                    // focuses the previous focusable element outside of the menu.
                    items[0].focus();
                }
                else {
                    // If pressing Tab, immediately focus the last element so that when
                    // the event is finished processing, the browser automatically focuses
                    // the next focusable element outside of the menu.
                    items[items.length - 1].focus({ preventScroll: true });
                }
                return;
            case 'ArrowDown':
                newFocusedIndex = (currentFocusedIndex + 1) % items.length;
                break;
            case 'ArrowUp':
                newFocusedIndex =
                    (currentFocusedIndex + items.length - 1) % items.length;
                break;
            case 'Home':
                newFocusedIndex = 0;
                break;
            case 'End':
                newFocusedIndex = items.length - 1;
                break;
        }
        if (newFocusedIndex === currentFocusedIndex) {
            return;
        }
        event.preventDefault();
        items[newFocusedIndex].focus();
    }
}
customElements.define(CrMenuSelector.is, CrMenuSelector);

const styleMod = document.createElement('dom-module');
styleMod.appendChild(html `
  <template>
    <style>
.cr-nav-menu-item{--iron-icon-fill-color:var(--google-grey-700);--iron-icon-height:20px;--iron-icon-width:20px;--cr-icon-ripple-size:20px;align-items:center;border-end-end-radius:100px;border-start-end-radius:100px;box-sizing:border-box;color:var(--google-grey-900);display:flex;font-size:14px;font-weight:500;line-height:14px;margin-inline-end:2px;margin-inline-start:1px;min-height:40px;overflow:hidden;padding-block-end:10px;padding-block-start:10px;padding-inline-start:23px;position:relative;text-decoration:none}:host-context(cr-drawer) .cr-nav-menu-item{margin-inline-end:8px}.cr-nav-menu-item:hover{background:var(--google-grey-200)}.cr-nav-menu-item[selected]{--iron-icon-fill-color:var(--google-blue-600);background:var(--google-blue-50);color:var(--google-blue-700)}@media (prefers-color-scheme:dark){.cr-nav-menu-item{--iron-icon-fill-color:var(--google-grey-500);color:#fff}.cr-nav-menu-item:hover{--iron-icon-fill-color:white;background:var(--google-grey-800)}.cr-nav-menu-item[selected]{--iron-icon-fill-color:black;background:var(--google-blue-300);color:var(--google-grey-900)}}.cr-nav-menu-item:focus{outline:auto 5px -webkit-focus-ring-color;z-index:1}.cr-nav-menu-item:focus:not([selected]):not(:hover){background:0 0}.cr-nav-menu-item iron-icon{flex-shrink:0;margin-inline-end:20px;pointer-events:none;vertical-align:top}
    </style>
  </template>
`.content);
styleMod.register('cr-nav-menu-item-style');

const template = html `<iron-iconset-svg name="history" size="24">
  <svg>
    <defs>
      
      <g id="journeys-on">
        <path d="M19 15c-1.3 0-2.4.84-2.82 2H11c-1.1 0-2-.9-2-2s.9-2 2-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4H7.82C7.4 3.84 6.3 3 5 3 3.34 3 2 4.34 2 6s1.34 3 3 3c1.3 0 2.4-.84 2.82-2H13c1.1 0 2 .9 2 2s-.9 2-2 2h-2c-2.21 0-4 1.79-4 4s1.79 4 4 4h5.18A2.996 2.996 0 0 0 22 18c0-1.66-1.34-3-3-3ZM5 7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Z"></path>
      </g>
      <g id="journeys-off">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.104 2.099.69 3.513l1.482 1.482A3.005 3.005 0 0 0 2 6a2.996 2.996 0 0 0 4.003 2.826l2.818 2.818A3.999 3.999 0 0 0 11 19h5.177l.005.004 1.827 1.828 2.48 2.48 1.414-1.414-19.799-19.8Zm8.2 11.027A2.008 2.008 0 0 0 9 15c0 1.1.9 2 2 2h3.177l-3.874-3.874Z"></path>
        <path d="M15 9c0 .852-.54 1.584-1.295 1.871l1.48 1.48A3.999 3.999 0 0 0 13 5H7.834l2 2H13c1.1 0 2 .9 2 2ZM21.831 18.997l-3.825-3.825A2.996 2.996 0 0 1 22 18c0 .35-.06.685-.169.997Z"></path>
      </g>
    </defs>
  </svg>
</iron-iconset-svg>
`;
document.head.appendChild(template.content);

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
/**

The `iron-location` element manages binding to and from the current URL.

iron-location is the first, and lowest level element in the Polymer team's
routing system. This is a beta release of iron-location as we continue work
on higher level elements, and as such iron-location may undergo breaking
changes.

#### Properties

When the URL is: `/search?query=583#details` iron-location's properties will be:

  - path: `'/search'`
  - query: `'query=583'`
  - hash: `'details'`

These bindings are bidirectional. Modifying them will in turn modify the URL.

iron-location is only active while it is attached to the document.

#### Links

While iron-location is active in the document it will intercept clicks on links
within your site, updating the URL pushing the updated URL out through the
databinding system. iron-location only intercepts clicks with the intent to
open in the same window, so middle mouse clicks and ctrl/cmd clicks work fine.

You can customize this behavior with the `urlSpaceRegex`.

#### Dwell Time

iron-location protects against accidental history spamming by only adding
entries to the user's history if the URL stays unchanged for `dwellTime`
milliseconds.

@demo demo/index.html

 */
Polymer({
  is: 'iron-location',

  properties: {
    /**
     * The pathname component of the URL.
     */
    path: {
      type: String,
      notify: true,
      value: function() {
        return window.decodeURIComponent(window.location.pathname);
      }
    },

    /**
     * The query string portion of the URL.
     */
    query: {
      type: String,
      notify: true,
      value: function() {
        return window.location.search.slice(1);
      }
    },

    /**
     * The hash component of the URL.
     */
    hash: {
      type: String,
      notify: true,
      value: function() {
        return window.decodeURIComponent(window.location.hash.slice(1));
      }
    },

    /**
     * If the user was on a URL for less than `dwellTime` milliseconds, it
     * won't be added to the browser's history, but instead will be replaced
     * by the next entry.
     *
     * This is to prevent large numbers of entries from clogging up the user's
     * browser history. Disable by setting to a negative number.
     */
    dwellTime: {type: Number, value: 2000},

    /**
     * A regexp that defines the set of URLs that should be considered part
     * of this web app.
     *
     * Clicking on a link that matches this regex won't result in a full page
     * navigation, but will instead just update the URL state in place.
     *
     * This regexp is given everything after the origin in an absolute
     * URL. So to match just URLs that start with /search/ do:
     *     url-space-regex="^/search/"
     *
     * @type {string|RegExp}
     */
    urlSpaceRegex: {type: String, value: ''},

    /**
     * A flag that specifies whether the spaces in query that would normally be
     * encoded as %20 should be encoded as +.
     *
     * Given an example text "hello world", it is encoded in query as
     * - "hello%20world" without the parameter
     * - "hello+world" with the parameter
     */
    encodeSpaceAsPlusInQuery: {type: Boolean, value: false},

    /**
     * urlSpaceRegex, but coerced into a regexp.
     *
     * @type {RegExp}
     */
    _urlSpaceRegExp: {computed: '_makeRegExp(urlSpaceRegex)'},

    _lastChangedAt: {type: Number},

    _initialized: {type: Boolean, value: false}
  },

  hostAttributes: {hidden: true},

  observers: ['_updateUrl(path, query, hash)'],

  created: function() {
    this.__location = window.location;
  },

  attached: function() {
    this.listen(window, 'hashchange', '_hashChanged');
    this.listen(window, 'location-changed', '_urlChanged');
    this.listen(window, 'popstate', '_urlChanged');
    this.listen(
        /** @type {!HTMLBodyElement} */ (document.body),
        'click',
        '_globalOnClick');
    // Give a 200ms grace period to make initial redirects without any
    // additions to the user's history.
    this._lastChangedAt = window.performance.now() - (this.dwellTime - 200);
    this._initialized = true;

    this._urlChanged();
  },

  detached: function() {
    this.unlisten(window, 'hashchange', '_hashChanged');
    this.unlisten(window, 'location-changed', '_urlChanged');
    this.unlisten(window, 'popstate', '_urlChanged');
    this.unlisten(
        /** @type {!HTMLBodyElement} */ (document.body),
        'click',
        '_globalOnClick');
    this._initialized = false;
  },

  _hashChanged: function() {
    this.hash = window.decodeURIComponent(this.__location.hash.substring(1));
  },

  _urlChanged: function() {
    // We want to extract all info out of the updated URL before we
    // try to write anything back into it.
    //
    // i.e. without _dontUpdateUrl we'd overwrite the new path with the old
    // one when we set this.hash. Likewise for query.
    this._dontUpdateUrl = true;
    this._hashChanged();
    this.path = window.decodeURIComponent(this.__location.pathname);
    this.query = this.__location.search.substring(1);
    this._dontUpdateUrl = false;
    this._updateUrl();
  },

  _getUrl: function() {
    var partiallyEncodedPath =
        window.encodeURI(this.path).replace(/\#/g, '%23').replace(/\?/g, '%3F');
    var partiallyEncodedQuery = '';
    if (this.query) {
      partiallyEncodedQuery = '?' + this.query.replace(/\#/g, '%23');
      if (this.encodeSpaceAsPlusInQuery) {
        partiallyEncodedQuery = partiallyEncodedQuery.replace(/\+/g, '%2B')
                                    .replace(/ /g, '+')
                                    .replace(/%20/g, '+');
      } else {
        // required for edge
        partiallyEncodedQuery =
            partiallyEncodedQuery.replace(/\+/g, '%2B').replace(/ /g, '%20');
      }
    }
    var partiallyEncodedHash = '';
    if (this.hash) {
      partiallyEncodedHash = '#' + window.encodeURI(this.hash);
    }
    return (
        partiallyEncodedPath + partiallyEncodedQuery + partiallyEncodedHash);
  },

  _updateUrl: function() {
    if (this._dontUpdateUrl || !this._initialized) {
      return;
    }

    if (this.path === window.decodeURIComponent(this.__location.pathname) &&
        this.query === this.__location.search.substring(1) &&
        this.hash ===
            window.decodeURIComponent(this.__location.hash.substring(1))) {
      // Nothing to do, the current URL is a representation of our properties.
      return;
    }

    var newUrl = this._getUrl();
    // Need to use a full URL in case the containing page has a base URI.
    var fullNewUrl =
        new URL(newUrl, this.__location.protocol + '//' + this.__location.host)
            .href;
    var now = window.performance.now();
    var shouldReplace = this._lastChangedAt + this.dwellTime > now;
    this._lastChangedAt = now;

    if (shouldReplace) {
      window.history.replaceState({}, '', fullNewUrl);
    } else {
      window.history.pushState({}, '', fullNewUrl);
    }

    this.fire('location-changed', {}, {node: window});
  },

  /**
   * A necessary evil so that links work as expected. Does its best to
   * bail out early if possible.
   *
   * @param {MouseEvent} event .
   */
  _globalOnClick: function(event) {
    // If another event handler has stopped this event then there's nothing
    // for us to do. This can happen e.g. when there are multiple
    // iron-location elements in a page.
    if (event.defaultPrevented) {
      return;
    }

    var href = this._getSameOriginLinkHref(event);

    if (!href) {
      return;
    }

    event.preventDefault();

    // If the navigation is to the current page we shouldn't add a history
    // entry or fire a change event.
    if (href === this.__location.href) {
      return;
    }

    window.history.pushState({}, '', href);
    this.fire('location-changed', {}, {node: window});
  },

  /**
   * Returns the absolute URL of the link (if any) that this click event
   * is clicking on, if we can and should override the resulting full
   * page navigation. Returns null otherwise.
   *
   * @param {MouseEvent} event .
   * @return {string?} .
   */
  _getSameOriginLinkHref: function(event) {
    // We only care about left-clicks.
    if (event.button !== 0) {
      return null;
    }

    // We don't want modified clicks, where the intent is to open the page
    // in a new tab.
    if (event.metaKey || event.ctrlKey) {
      return null;
    }

    var eventPath = dom(event).path;
    var anchor = null;

    for (var i = 0; i < eventPath.length; i++) {
      var element = eventPath[i];

      if (element.tagName === 'A' && element.href) {
        anchor = element;
        break;
      }
    }

    // If there's no link there's nothing to do.
    if (!anchor) {
      return null;
    }

    // Target blank is a new tab, don't intercept.
    if (anchor.target === '_blank') {
      return null;
    }

    // If the link is for an existing parent frame, don't intercept.
    if ((anchor.target === '_top' || anchor.target === '_parent') &&
        window.top !== window) {
      return null;
    }

    // If the link is a download, don't intercept.
    if (anchor.download) {
      return null;
    }

    var href = anchor.href;

    // It only makes sense for us to intercept same-origin navigations.
    // pushState/replaceState don't work with cross-origin links.
    var url;

    if (document.baseURI != null) {
      url = new URL(href, /** @type {string} */ (document.baseURI));
    } else {
      url = new URL(href);
    }

    var origin;

    // IE Polyfill
    if (this.__location.origin) {
      origin = this.__location.origin;
    } else {
      origin = this.__location.protocol + '//' + this.__location.host;
    }

    var urlOrigin;

    if (url.origin) {
      urlOrigin = url.origin;
    } else {
      // IE always adds port number on HTTP and HTTPS on <a>.host but not on
      // window.location.host
      var urlHost = url.host;
      var urlPort = url.port;
      var urlProtocol = url.protocol;
      var isExtraneousHTTPS = urlProtocol === 'https:' && urlPort === '443';
      var isExtraneousHTTP = urlProtocol === 'http:' && urlPort === '80';

      if (isExtraneousHTTPS || isExtraneousHTTP) {
        urlHost = url.hostname;
      }
      urlOrigin = urlProtocol + '//' + urlHost;
    }

    if (urlOrigin !== origin) {
      return null;
    }

    var normalizedHref = url.pathname + url.search + url.hash;

    // pathname should start with '/', but may not if `new URL` is not supported
    if (normalizedHref[0] !== '/') {
      normalizedHref = '/' + normalizedHref;
    }

    // If we've been configured not to handle this url... don't handle it!
    if (this._urlSpaceRegExp && !this._urlSpaceRegExp.test(normalizedHref)) {
      return null;
    }

    // Need to use a full URL in case the containing page has a base URI.
    var fullNormalizedHref = new URL(normalizedHref, this.__location.href).href;
    return fullNormalizedHref;
  },

  _makeRegExp: function(urlSpaceRegex) {
    return RegExp(urlSpaceRegex);
  }
});

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
/**
 * @demo demo/iron-query-params.html
 */
Polymer({
  is: 'iron-query-params',

  properties: {
    /**
     * @type{string|undefined}
     */
    paramsString: {
      type: String,
      notify: true,
      observer: 'paramsStringChanged',
    },

    /**
     * @type{Object|undefined}
     */
    paramsObject: {
      type: Object,
      notify: true,
    },

    _dontReact: {type: Boolean, value: false}
  },

  hostAttributes: {hidden: true},

  observers: ['paramsObjectChanged(paramsObject.*)'],

  paramsStringChanged: function() {
    this._dontReact = true;
    this.paramsObject = this._decodeParams(this.paramsString);
    this._dontReact = false;
  },

  paramsObjectChanged: function() {
    if (this._dontReact) {
      return;
    }
    this.paramsString = this._encodeParams(this.paramsObject)
                            .replace(/%3F/g, '?')
                            .replace(/%2F/g, '/')
                            .replace(/'/g, '%27');
  },

  _encodeParams: function(params) {
    var encodedParams = [];

    for (var key in params) {
      var value = params[key];

      if (value === '') {
        encodedParams.push(encodeURIComponent(key));

      } else if (value) {
        encodedParams.push(
            encodeURIComponent(key) + '=' +
            encodeURIComponent(value.toString()));
      }
    }
    return encodedParams.join('&');
  },

  _decodeParams: function(paramString) {
    var params = {};
    // Work around a bug in decodeURIComponent where + is not
    // converted to spaces:
    paramString = (paramString || '').replace(/\+/g, '%20');
    var paramList = paramString.split('&');
    for (var i = 0; i < paramList.length; i++) {
      var param = paramList[i].split('=');
      if (param[0]) {
        params[decodeURIComponent(param[0])] =
            decodeURIComponent(param[1] || '');
      }
    }
    return params;
  }
});

function getTemplate$2() {
    return html `<!--_html_template_start_-->    <iron-location query="{{urlQuery_}}" path="{{path_}}"></iron-location>
    <iron-query-params params-string="{{query_}}" params-object="{{queryParams_}}"></iron-query-params>
<!--_html_template_end_-->`;
}

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// All valid pages.
// TODO(crbug.com/1473855): Change this to an enum and use that type for holding
//  these values for better type check when `loadTimeData` is no longer needed.
const Page = {
    HISTORY: 'history',
    HISTORY_CLUSTERS: loadTimeData.getBoolean('renameJourneys') ? 'grouped' :
        'journeys',
    SYNCED_TABS: 'syncedTabs',
};
// The ids of pages with corresponding tabs in the order of their tab indices.
const TABBED_PAGES = [Page.HISTORY, Page.HISTORY_CLUSTERS];
class HistoryRouterElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.parsing_ = false;
        this.debouncer_ = null;
    }
    static get is() {
        return 'history-router';
    }
    static get template() {
        return getTemplate$2();
    }
    static get properties() {
        return {
            selectedPage: {
                type: String,
                notify: true,
                observer: 'selectedPageChanged_',
            },
            queryState: Object,
            path_: String,
            queryParams_: Object,
            query_: {
                type: String,
                observer: 'onQueryChanged_',
            },
            urlQuery_: {
                type: String,
                observer: 'onUrlQueryChanged_',
            },
        };
    }
    static get observers() {
        return ['onUrlChanged_(path_, queryParams_)'];
    }
    connectedCallback() {
        super.connectedCallback();
        // Redirect legacy search URLs to URLs compatible with History.
        if (window.location.hash) {
            window.location.href = window.location.href.split('#')[0] + '?' +
                window.location.hash.substr(1);
        }
    }
    /**
     * @param current Current value of the query.
     * @param previous Previous value of the query.
     */
    onQueryChanged_(_current, previous) {
        if (previous !== undefined) {
            this.urlQuery_ = this.query_;
        }
    }
    onUrlQueryChanged_() {
        this.query_ = this.urlQuery_;
    }
    /**
     * Write all relevant page state to the URL.
     */
    serializeUrl() {
        let path = this.selectedPage;
        if (path === Page.HISTORY) {
            path = '';
        }
        // Make all modifications at the end of the method so observers can't change
        // the outcome.
        this.path_ = '/' + path;
        this.set('queryParams_.q', this.queryState.searchTerm || null);
    }
    selectedPageChanged_() {
        // Update the URL if the page was changed externally, but ignore the update
        // if it came from parseUrl_().
        if (!this.parsing_) {
            this.serializeUrl();
        }
    }
    parseUrl_() {
        this.parsing_ = true;
        const changes = { search: '' };
        const sections = this.path_.substr(1).split('/');
        const page = sections[0] || Page.HISTORY;
        changes.search = this.queryParams_.q || '';
        // Must change selectedPage before `change-query`, otherwise the
        // query-manager will call serializeUrl() with the old page.
        this.selectedPage = page;
        this.dispatchEvent(new CustomEvent('change-query', { bubbles: true, composed: true, detail: changes }));
        this.serializeUrl();
        this.parsing_ = false;
    }
    onUrlChanged_() {
        // Changing the url and query parameters at the same time will cause two
        // calls to onUrlChanged_. Debounce the actual work so that these two
        // changes get processed together.
        this.debouncer_ = Debouncer.debounce(this.debouncer_, microTask, this.parseUrl_.bind(this));
    }
    getDebouncerForTesting() {
        return this.debouncer_;
    }
}
customElements.define(HistoryRouterElement.is, HistoryRouterElement);

function getTemplate$1() {
    return html `<!--_html_template_start_-->    <style include="cr-hidden-style cr-icons cr-nav-menu-item-style">:host{display:flex;flex-direction:column;height:100%;overflow-x:hidden;overflow-y:auto;width:var(--side-bar-width)}.separator{background-color:var(--separator-color);flex-shrink:0;height:1px;margin:8px 0}cr-menu-selector{padding-top:8px;user-select:none}cr-menu-selector>a[disabled]{opacity:.65;pointer-events:none}#spacer{flex:1}#footer{color:var(--sidebar-footer-text-color);width:var(--side-bar-width)}managed-footnote{--managed-footnote-icon-padding:12px;border:none;margin:24px 0;padding-inline-end:16px;padding-inline-start:24px}#google-account-footer{display:flex;margin:24px 0;padding-inline-end:16px;padding-inline-start:24px}#google-account-footer iron-icon{align-self:flex-start;flex-shrink:0;height:20px;padding-inline-end:12px;width:20px}#google-account-footer>div{overflow-x:hidden}iron-icon{display:block}#clear-browsing-data{justify-content:normal}#clear-browsing-data .cr-icon{margin-inline-end:0;margin-inline-start:9px}</style>

    <cr-menu-selector id="menu" selected="{{selectedPage}}" selectable=".page-item" attr-for-selected="path" on-iron-activate="onSelectorActivate_" selected-attribute="selected">
      <a id="history" role="menuitem" class="page-item cr-nav-menu-item" href="[[getHistoryItemHref_(selectedTab, showHistoryClusters_)]]" path$="[[getHistoryItemPath_(selectedTab, showHistoryClusters_)]]" on-click="onItemClick_">
        <iron-icon icon="cr:history"></iron-icon>
        $i18n{historyMenuItem}
        <paper-ripple></paper-ripple>
      </a>
      <a id="syncedTabs" role="menuitem" href="/syncedTabs" class="page-item cr-nav-menu-item" path="syncedTabs" on-click="onItemClick_">
        <iron-icon icon="cr:phonelink"></iron-icon>
        $i18n{openTabsMenuItem}
        <paper-ripple></paper-ripple>
      </a>
      
      <a role="menuitem" id="toggle-history-clusters" class="cr-nav-menu-item" tabindex="0" on-click="onToggleHistoryClustersClick_" on-keydown="onToggleHistoryClustersKeydown_" on-mousedown="onToggleHistoryClustersMousedown_" hidden="[[!showToggleHistoryClusters_]]">
        <iron-icon icon="[[getToggleHistoryClustersItemIcon_(
            historyClustersVisible)]]">
        </iron-icon>
        [[getToggleHistoryClustersItemLabel_(historyClustersVisible)]]
        <paper-ripple id="thc-ripple"></paper-ripple>
      </a>
      <a role="menuitem" id="clear-browsing-data" class="cr-nav-menu-item" href="chrome://settings/clearBrowserData" on-click="onClearBrowsingDataClick_" disabled$="[[guestSession_]]" tabindex$="[[computeClearBrowsingDataTabIndex_(guestSession_)]]">
        <iron-icon icon="cr:delete"></iron-icon>
        $i18n{clearBrowsingData}
        <div class="cr-icon icon-external"></div>
        <paper-ripple id="cbd-ripple"></paper-ripple>
      </a>
    </cr-menu-selector>

    <div id="spacer"></div>
    <div id="footer" hidden="[[!showFooter_]]">
      <div class="separator"></div>
      <managed-footnote></managed-footnote>
      <div id="google-account-footer" hidden="[[!footerInfo.otherFormsOfHistory]]">
        <iron-icon icon="cr:info-outline"></iron-icon>
        <div>$i18nRaw{sidebarFooter}</div>
      </div>
    </div>
<!--_html_template_end_-->`;
}

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class HistorySideBarElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.guestSession_ = loadTimeData.getBoolean('isGuestSession');
    }
    static get is() {
        return 'history-side-bar';
    }
    static get template() {
        return getTemplate$1();
    }
    static get properties() {
        return {
            footerInfo: Object,
            historyClustersEnabled: Boolean,
            historyClustersVisible: {
                type: Boolean,
                notify: true,
            },
            /* The id of the currently selected page. */
            selectedPage: {
                type: String,
                notify: true,
            },
            /* The index of the currently selected tab. */
            selectedTab: {
                type: Number,
                notify: true,
            },
            guestSession_: Boolean,
            historyClustersVisibleManagedByPolicy_: {
                type: Boolean,
                value: () => {
                    return loadTimeData.getBoolean('isHistoryClustersVisibleManagedByPolicy');
                },
            },
            renameJourneys_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('renameJourneys'),
            },
            /**
             * Used to display notices for profile sign-in status and managed status.
             */
            showFooter_: {
                type: Boolean,
                computed: 'computeShowFooter_(' +
                    'footerInfo.otherFormsOfHistory, footerInfo.managed)',
            },
            showHistoryClusters_: {
                type: Boolean,
                computed: 'computeShowHistoryClusters_(' +
                    'historyClustersEnabled, historyClustersVisible)',
            },
            showToggleHistoryClusters_: {
                type: Boolean,
                computed: 'computeShowToggleHistoryClusters_(' +
                    'historyClustersEnabled, historyClustersVisibleManagedByPolicy_, ' +
                    'renameJourneys_)',
            },
        };
    }
    ready() {
        super.ready();
        this.addEventListener('keydown', e => this.onKeydown_(e));
    }
    onKeydown_(e) {
        if (e.key === ' ') {
            e.composedPath()[0].click();
        }
    }
    onSelectorActivate_() {
        this.dispatchEvent(new CustomEvent('history-close-drawer', { bubbles: true, composed: true }));
    }
    /**
     * Relocates the user to the clear browsing data section of the settings page.
     */
    onClearBrowsingDataClick_(e) {
        const browserService = BrowserServiceImpl.getInstance();
        browserService.recordAction('InitClearBrowsingData');
        browserService.openClearBrowsingData();
        this.$['cbd-ripple'].upAction();
        e.preventDefault();
    }
    computeClearBrowsingDataTabIndex_() {
        return this.guestSession_ ? '-1' : '';
    }
    /**
     * Prevent clicks on sidebar items from navigating. These are only links for
     * accessibility purposes, taps are handled separately by <iron-selector>.
     */
    onItemClick_(e) {
        e.preventDefault();
    }
    /**
     * @returns The url to navigate to when the history menu item is clicked. It
     *     reflects the currently selected tab.
     */
    getHistoryItemHref_() {
        return this.showHistoryClusters_ &&
            TABBED_PAGES[this.selectedTab] === Page.HISTORY_CLUSTERS ?
            '/' + Page.HISTORY_CLUSTERS :
            '/';
    }
    /**
     * @returns The path that determines if the history menu item is selected. It
     *     reflects the currently selected tab.
     */
    getHistoryItemPath_() {
        return this.showHistoryClusters_ &&
            TABBED_PAGES[this.selectedTab] === Page.HISTORY_CLUSTERS ?
            Page.HISTORY_CLUSTERS :
            Page.HISTORY;
    }
    getToggleHistoryClustersItemIcon_() {
        return `history:journeys-${this.historyClustersVisible ? 'off' : 'on'}`;
    }
    getToggleHistoryClustersItemLabel_() {
        return loadTimeData.getString(this.historyClustersVisible ? 'disableHistoryClusters' :
            'enableHistoryClusters');
    }
    onToggleHistoryClustersClick_() {
        MetricsProxyImpl.getInstance().recordToggledVisibility(!this.historyClustersVisible);
        BrowserProxyImpl.getInstance()
            .handler.toggleVisibility(!this.historyClustersVisible)
            .then(({ visible }) => {
            this.historyClustersVisible = visible;
            this.selectedTab = TABBED_PAGES.indexOf(visible ? Page.HISTORY_CLUSTERS : Page.HISTORY);
        });
        this.$['thc-ripple'].upAction();
    }
    onToggleHistoryClustersKeydown_(e) {
        // Handle 'Enter' keypress because the menu item is missing href attribute.
        if (e.key === 'Enter') {
            this.onToggleHistoryClustersClick_();
        }
    }
    onToggleHistoryClustersMousedown_(e) {
        // The menu item steals the focus on mousedown event because it is given a
        // tabindex="0" so that it is focusable in sequential keyboard navigation.
        e.preventDefault();
    }
    computeShowFooter_(includeOtherFormsOfBrowsingHistory, managed) {
        return includeOtherFormsOfBrowsingHistory || managed;
    }
    computeShowHistoryClusters_() {
        return this.historyClustersEnabled && this.historyClustersVisible;
    }
    computeShowToggleHistoryClusters_() {
        return this.historyClustersEnabled &&
            !this.historyClustersVisibleManagedByPolicy_ && !this.renameJourneys_;
    }
}
customElements.define(HistorySideBarElement.is, HistorySideBarElement);

// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/** This is used to identify keyboard shortcuts. */
class KeyboardShortcut {
    /**
     * @param shortcut The text used to describe the keys for this
     *     keyboard shortcut.
     */
    constructor(shortcut) {
        this.useKeyCode_ = false;
        this.mods_ = {};
        this.key_ = null;
        this.keyCode_ = null;
        shortcut.split('|').forEach((part) => {
            const partLc = part.toLowerCase();
            switch (partLc) {
                case 'alt':
                case 'ctrl':
                case 'meta':
                case 'shift':
                    this.mods_[partLc + 'Key'] = true;
                    break;
                default:
                    if (this.key_) {
                        throw Error('Invalid shortcut');
                    }
                    this.key_ = part;
                    // For single key alpha shortcuts use event.keyCode rather than
                    // event.key to match how chrome handles shortcuts and allow
                    // non-english language input to work.
                    if (part.match(/^[a-z]$/)) {
                        this.useKeyCode_ = true;
                        this.keyCode_ = part.toUpperCase().charCodeAt(0);
                    }
            }
        });
    }
    /**
     * Whether the keyboard shortcut object matches a keyboard event.
     * @param e The keyboard event object.
     * @return Whether we found a match or not.
     */
    matchesEvent(e) {
        if ((this.useKeyCode_ && e.keyCode === this.keyCode_) ||
            e.key === this.key_) {
            // All keyboard modifiers need to match.
            const mods = this.mods_;
            return ['altKey', 'ctrlKey', 'metaKey', 'shiftKey'].every(function (k) {
                return e[k] === !!mods[k];
            });
        }
        return false;
    }
}
/** A list of keyboard shortcuts which all perform one command. */
class KeyboardShortcutList {
    /**
     * @param shortcuts Text-based representation of one or more
     *     keyboard shortcuts, separated by spaces.
     */
    constructor(shortcuts) {
        this.shortcuts_ = shortcuts.split(/\s+/).map(function (shortcut) {
            return new KeyboardShortcut(shortcut);
        });
    }
    /**
     * Returns true if any of the keyboard shortcuts in the list matches a
     * keyboard event.
     */
    matchesEvent(e) {
        return this.shortcuts_.some(function (keyboardShortcut) {
            return keyboardShortcut.matchesEvent(e);
        });
    }
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Listens for a find keyboard shortcut (i.e. Ctrl/Cmd+f or /)
 * and keeps track of an stack of potential listeners. Only the listener at the
 * top of the stack will be notified that a find shortcut has been invoked.
 */
const FindShortcutManager = (() => {
    /**
     * Stack of listeners. Only the top listener will handle the shortcut.
     */
    const listeners = [];
    /**
     * Tracks if any modal context is open in settings. This assumes only one
     * modal can be open at a time. The modals that are being tracked include
     * cr-dialog and cr-drawer.
     * @type {boolean}
     */
    let modalContextOpen = false;
    const shortcutCtrlF = new KeyboardShortcutList(isMac ? 'meta|f' : 'ctrl|f');
    const shortcutSlash = new KeyboardShortcutList('/');
    window.addEventListener('keydown', e => {
        if (e.defaultPrevented || listeners.length === 0) {
            return;
        }
        const element = e.composedPath()[0];
        if (!shortcutCtrlF.matchesEvent(e) &&
            (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA' ||
                !shortcutSlash.matchesEvent(e))) {
            return;
        }
        const focusIndex = listeners.findIndex(listener => listener.searchInputHasFocus());
        // If no listener has focus or the first (outer-most) listener has focus,
        // try the last (inner-most) listener.
        // If a listener has a search input with focus, the next listener that
        // should be called is the right before it in |listeners| such that the
        // goes from inner-most to outer-most.
        const index = focusIndex <= 0 ? listeners.length - 1 : focusIndex - 1;
        if (listeners[index].handleFindShortcut(modalContextOpen)) {
            e.preventDefault();
        }
    });
    window.addEventListener('cr-dialog-open', () => {
        modalContextOpen = true;
    });
    window.addEventListener('cr-drawer-opened', () => {
        modalContextOpen = true;
    });
    window.addEventListener('close', e => {
        if (['CR-DIALOG', 'CR-DRAWER'].includes(e.composedPath()[0].nodeName)) {
            modalContextOpen = false;
        }
    });
    return Object.freeze({ listeners: listeners });
})();
/**
 * Used to determine how to handle find shortcut invocations.
 */
const FindShortcutMixin = dedupingMixin((superClass) => {
    class FindShortcutMixin extends superClass {
        constructor() {
            super(...arguments);
            this.findShortcutListenOnAttach = true;
        }
        connectedCallback() {
            super.connectedCallback();
            if (this.findShortcutListenOnAttach) {
                this.becomeActiveFindShortcutListener();
            }
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            if (this.findShortcutListenOnAttach) {
                this.removeSelfAsFindShortcutListener();
            }
        }
        becomeActiveFindShortcutListener() {
            const listeners = FindShortcutManager.listeners;
            assert(!listeners.includes(this), 'Already listening for find shortcuts.');
            listeners.push(this);
        }
        handleFindShortcutInternal_() {
            assertNotReached('Must override handleFindShortcut()');
        }
        handleFindShortcut(_modalContextOpen) {
            this.handleFindShortcutInternal_();
            return false;
        }
        removeSelfAsFindShortcutListener() {
            const listeners = FindShortcutManager.listeners;
            const index = listeners.indexOf(this);
            assert(listeners.includes(this), 'Find shortcut listener not found.');
            listeners.splice(index, 1);
        }
        searchInputHasFocusInternal_() {
            assertNotReached('Must override searchInputHasFocus()');
        }
        searchInputHasFocus() {
            this.searchInputHasFocusInternal_();
            return false;
        }
    }
    return FindShortcutMixin;
});

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @return Whether the passed tagged template literal is a valid array.
 */
function isValidArray(arr) {
    if (arr instanceof Array && Object.isFrozen(arr)) {
        return true;
    }
    return false;
}
/**
 * Checks if the passed tagged template literal only contains static string.
 * And return the string in the literal if so.
 * Throws an Error if the passed argument is not supported literals.
 */
function getStaticString(literal) {
    const isStaticString = isValidArray(literal) && !!literal.raw &&
        isValidArray(literal.raw) && literal.length === literal.raw.length &&
        literal.length === 1;
    assert(isStaticString, 'static_types.js only allows static strings');
    return literal.join('');
}
function createTypes(_ignore, literal) {
    return getStaticString(literal);
}
/**
 * Rules used to enforce static literal checks.
 */
const rules = {
    createHTML: createTypes,
    createScript: createTypes,
    createScriptURL: createTypes,
};
/**
 * This policy returns Trusted Types if the passed literal is static.
 */
let staticPolicy;
if (window.trustedTypes) {
    staticPolicy = window.trustedTypes.createPolicy('static-types', rules);
}
else {
    staticPolicy = rules;
}
/**
 * Returns TrustedHTML if the passed literal is static.
 */
function getTrustedHTML(literal) {
    return staticPolicy.createHTML('', literal);
}
/**
 * Returns TrustedScriptURL if the passed literal is static.
 */
function getTrustedScriptURL(literal) {
    return staticPolicy.createScriptURL('', literal);
}

function getTemplate() {
    return html `<!--_html_template_start_-->    <style include="cr-shared-style shared-style">:host{color:var(--cr-primary-text-color);display:block;height:100%;line-height:1.54;overflow:hidden}#main-container{display:flex;height:calc(100% - var(--toolbar-height));position:relative}#content{flex:1;min-width:0}#content,#content>*{height:100%}#tabs-container{--cr-tabs-height:48px;--tabs-margin-top:16px}#tabs{--cr-tabs-icon-margin-end:12px;--cr-tabs-selection-bar-width:3px;--cr-tabs-tab-inline-padding:16px;border-bottom:1px solid var(--separator-color);display:flex;justify-content:start;margin:0 auto;max-width:var(--cluster-max-width)}#tabs-content,#tabs-content>*{height:100%}:host([show-history-clusters_]) #tabs-content{height:calc(100% - var(--cr-tabs-height))}:host([toolbar-shadow_]) #drop-shadow{opacity:var(--cr-container-shadow-max-opacity)}</style>
    <history-query-manager query-state="{{queryState_}}" query-result="{{queryResult_}}" router="[[$$('#router')]]" on-query-finished="onQueryFinished_">
    </history-query-manager>
    <history-router id="router" selected-page="{{selectedPage_}}" query-state="[[queryState_]]">
    </history-router>
    <history-toolbar id="toolbar" has-drawer="[[hasDrawer_]]" has-more-results="[[!queryResult_.info.finished]]" pending-delete="[[pendingDelete_]]" query-info="[[queryResult_.info]]" querying="[[queryState_.querying]]" search-term="[[queryState_.searchTerm]]" spinner-active="[[shouldShowSpinner_(queryState_.querying,
                                             queryState_.incremental,
                                             queryState_.searchTerm)]]">
    </history-toolbar>
    <div id="drop-shadow" class="cr-container-shadow"></div>
    <div id="main-container">
      <history-side-bar id="content-side-bar" selected-page="{{selectedPage_}}" selected-tab="{{selectedTab_}}" footer-info="[[footerInfo]]" history-clusters-enabled="[[historyClustersEnabled_]]" history-clusters-visible="{{historyClustersVisible_}}" hidden$="[[hasDrawer_]]">
      </history-side-bar>
      <iron-pages id="content" attr-for-selected="path" fallback-selection="history" selected="[[getSelectedPage_(selectedPage_, items)]]" on-selected-item-changed="updateScrollTarget_" items="{{items}}">
        <div id="tabs-container" path="history">
          <template is="dom-if" if="[[showHistoryClusters_]]">
            <div id="tabs">
              <cr-tabs tab-names="[[tabsNames_]]" tab-icons="[[tabsIcons_]]" selected="{{selectedTab_}}">
              </cr-tabs>
            </div>
          </template>
          <iron-pages id="tabs-content" attr-for-selected="path" fallback-selection="history" selected="[[getSelectedPage_(selectedPage_, items)]]" on-selected-item-changed="updateScrollTarget_" items="{{items}}">
            <history-list id="history" query-state="[[queryState_]]" searched-term="[[queryResult_.info.term]]" pending-delete="{{pendingDelete_}}" query-result="[[queryResult_]]" path="history">
            </history-list>
            <template is="dom-if" if="[[historyClustersSelected_(selectedPage_, showHistoryClusters_)]]">
              <history-clusters id="history-clusters" query="[[queryState_.searchTerm]]" path="[[historyClustersPath_]]">
              </history-clusters>
            </template>
          </iron-pages>
        </div>
        <template is="dom-if" if="[[syncedTabsSelected_(selectedPage_)]]">
          <history-synced-device-manager id="synced-devices" session-list="[[queryResult_.sessionList]]" search-term="[[queryState_.searchTerm]]" sign-in-state="[[isUserSignedIn_]]" path="syncedTabs">
          </history-synced-device-manager>
        </template>
      </iron-pages>
    </div>

    <cr-lazy-render id="drawer">
      <template>
        <cr-drawer heading="$i18n{title}" align="$i18n{textdirection}">
          <history-side-bar id="drawer-side-bar" slot="body" selected-page="{{selectedPage_}}" selected-tab="{{selectedTab_}}" history-clusters-enabled="[[historyClustersEnabled_]]" history-clusters-visible="{{historyClustersVisible_}}" footer-info="[[footerInfo]]">
          </history-side-bar>
        </cr-drawer>
      </template>
    </cr-lazy-render>

    <iron-media-query query="(max-width: 1023px)" query-matches="{{hasDrawer_}}">
    </iron-media-query>
<!--_html_template_end_-->`;
}

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let lazyLoadPromise = null;
function ensureLazyLoaded() {
    if (!lazyLoadPromise) {
        const script = document.createElement('script');
        script.type = 'module';
        script.src = getTrustedScriptURL `./lazy_load.js`;
        document.body.appendChild(script);
        lazyLoadPromise = Promise.all([
            customElements.whenDefined('history-synced-device-manager'),
            customElements.whenDefined('cr-action-menu'),
            customElements.whenDefined('cr-button'),
            customElements.whenDefined('cr-checkbox'),
            customElements.whenDefined('cr-dialog'),
            customElements.whenDefined('cr-drawer'),
            customElements.whenDefined('cr-icon-button'),
            customElements.whenDefined('cr-toolbar-selection-overlay'),
        ]);
    }
    return lazyLoadPromise;
}
// Adds click/auxclick listeners for any link on the page. If the link points
// to a chrome: or file: url, then calls into the browser to do the
// navigation. Note: This method is *not* re-entrant. Every call to it, will
// re-add listeners on |document|. It's up to callers to ensure this is only
// called once.
function listenForPrivilegedLinkClicks() {
    ['click', 'auxclick'].forEach(function (eventName) {
        document.addEventListener(eventName, function (evt) {
            const e = evt;
            // Ignore buttons other than left and middle.
            if (e.button > 1 || e.defaultPrevented) {
                return;
            }
            const eventPath = e.composedPath();
            let anchor = null;
            if (eventPath) {
                for (let i = 0; i < eventPath.length; i++) {
                    const element = eventPath[i];
                    if (element.tagName === 'A' && element.href) {
                        anchor = element;
                        break;
                    }
                }
            }
            // Fallback if Event.path is not available.
            let el = e.target;
            if (!anchor && el.nodeType === Node.ELEMENT_NODE &&
                el.webkitMatchesSelector('A, A *')) {
                while (el.tagName !== 'A') {
                    el = el.parentElement;
                }
                anchor = el;
            }
            if (!anchor) {
                return;
            }
            if ((anchor.protocol === 'file:' || anchor.protocol === 'about:') &&
                (e.button === 0 || e.button === 1)) {
                BrowserServiceImpl.getInstance().navigateToUrl(anchor.href, anchor.target, e);
                e.preventDefault();
            }
        });
    });
}
const HistoryAppElementBase = mixinBehaviors([IronScrollTargetBehavior], FindShortcutMixin(WebUiListenerMixin(PolymerElement)));
class HistoryAppElement extends HistoryAppElementBase {
    static get is() {
        return 'history-app';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            // The id of the currently selected page.
            selectedPage_: {
                type: String,
                observer: 'selectedPageChanged_',
            },
            queryResult_: Object,
            // Updated on synced-device-manager attach by chrome.sending
            // 'otherDevicesInitialized'.
            isUserSignedIn_: Boolean,
            pendingDelete_: Boolean,
            toolbarShadow_: {
                type: Boolean,
                reflectToAttribute: true,
                notify: true,
            },
            queryState_: Object,
            // True if the window is narrow enough for the page to have a drawer.
            hasDrawer_: {
                type: Boolean,
                observer: 'hasDrawerChanged_',
            },
            footerInfo: {
                type: Object,
                value() {
                    return {
                        managed: loadTimeData.getBoolean('isManaged'),
                        otherFormsOfHistory: false,
                    };
                },
            },
            historyClustersEnabled_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('isHistoryClustersEnabled'),
            },
            historyClustersVisible_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('isHistoryClustersVisible'),
            },
            historyClustersPath_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('renameJourneys') ? 'grouped' : 'journeys',
            },
            showHistoryClusters_: {
                type: Boolean,
                computed: 'computeShowHistoryClusters_(historyClustersEnabled_, historyClustersVisible_)',
                reflectToAttribute: true,
            },
            // The index of the currently selected tab.
            selectedTab_: {
                type: Number,
                observer: 'selectedTabChanged_',
            },
            tabsIcons_: {
                type: Array,
                value: () => ['images/list.svg', 'chrome://resources/images/icon_journeys.svg'],
            },
            tabsNames_: {
                type: Array,
                value: () => {
                    return [
                        loadTimeData.getString('historyListTabLabel'),
                        loadTimeData.getString('historyClustersTabLabel'),
                    ];
                },
            },
        };
    }
    constructor() {
        super();
        this.browserService_ = null;
        this.eventTracker_ = new EventTracker();
        this.isUserSignedIn_ = loadTimeData.getBoolean('isUserSignedIn');
        this.historyClustersViewStartTime_ = null;
        this.queryResult_ = {
            info: undefined,
            results: undefined,
            sessionList: undefined,
        };
        listenForPrivilegedLinkClicks();
    }
    connectedCallback() {
        super.connectedCallback();
        this.eventTracker_.add(document, 'keydown', (e) => this.onKeyDown_(e));
        this.eventTracker_.add(document, 'visibilitychange', this.onVisibilityChange_.bind(this));
        this.addWebUiListener('sign-in-state-changed', (signedIn) => this.onSignInStateChanged_(signedIn));
        this.addWebUiListener('has-other-forms-changed', (hasOtherForms) => this.onHasOtherFormsChanged_(hasOtherForms));
        this.addWebUiListener('foreign-sessions-changed', (sessionList) => this.setForeignSessions_(sessionList));
        this.browserService_ = BrowserServiceImpl.getInstance();
        this.shadowRoot.querySelector('history-query-manager').initialize();
        this.browserService_.getForeignSessions().then(sessionList => this.setForeignSessions_(sessionList));
    }
    ready() {
        super.ready();
        this.addEventListener('cr-toolbar-menu-click', this.onCrToolbarMenuClick_);
        this.addEventListener('delete-selected', this.deleteSelected);
        this.addEventListener('history-checkbox-select', this.checkboxSelected);
        this.addEventListener('history-close-drawer', this.closeDrawer_);
        this.addEventListener('history-view-changed', this.historyViewChanged_);
        this.addEventListener('unselect-all', this.unselectAll);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.eventTracker_.removeAll();
    }
    fire_(eventName, detail) {
        this.dispatchEvent(new CustomEvent(eventName, { bubbles: true, composed: true, detail }));
    }
    computeShowHistoryClusters_() {
        return this.historyClustersEnabled_ && this.historyClustersVisible_;
    }
    historyClustersSelected_(_selectedPage, _showHistoryClusters) {
        return this.selectedPage_ === Page.HISTORY_CLUSTERS &&
            this.showHistoryClusters_;
    }
    onFirstRender_() {
        setTimeout(() => {
            this.browserService_.recordTime('History.ResultsRenderedTime', window.performance.now());
        });
        // Focus the search field on load. Done here to ensure the history page
        // is rendered before we try to take focus.
        const searchField = this.$.toolbar.searchField;
        if (!searchField.narrow) {
            searchField.getSearchInput().focus();
        }
        // Lazily load the remainder of the UI.
        ensureLazyLoaded().then(function () {
            requestIdleCallback(function () {
                // https://github.com/microsoft/TypeScript/issues/13569
                document.fonts.load('bold 12px Roboto');
            });
        });
    }
    /** Overridden from IronScrollTargetBehavior */
    /* eslint-disable-next-line @typescript-eslint/naming-convention */
    _scrollHandler() {
        if (this.scrollTarget) {
            // When the tabs are visible, show the toolbar shadow for the synced
            // devices page only.
            this.toolbarShadow_ = this.scrollTarget.scrollTop !== 0 &&
                (!this.showHistoryClusters_ ||
                    this.syncedTabsSelected_(this.selectedPage_));
        }
    }
    onCrToolbarMenuClick_() {
        this.$.drawer.get().toggle();
    }
    /**
     * Listens for history-item being selected or deselected (through checkbox)
     * and changes the view of the top toolbar.
     */
    checkboxSelected() {
        this.$.toolbar.count = this.$.history.getSelectedItemCount();
    }
    selectOrUnselectAll() {
        this.$.history.selectOrUnselectAll();
        this.$.toolbar.count = this.$.history.getSelectedItemCount();
    }
    /**
     * Listens for call to cancel selection and loops through all items to set
     * checkbox to be unselected.
     */
    unselectAll() {
        this.$.history.unselectAllItems();
        this.$.toolbar.count = 0;
    }
    deleteSelected() {
        this.$.history.deleteSelectedWithPrompt();
    }
    onQueryFinished_() {
        this.$.history.historyResult(this.queryResult_.info, this.queryResult_.results);
        if (document.body.classList.contains('loading')) {
            document.body.classList.remove('loading');
            this.onFirstRender_();
        }
    }
    onKeyDown_(e) {
        if ((e.key === 'Delete' || e.key === 'Backspace') && !hasKeyModifiers(e)) {
            this.onDeleteCommand_();
            return;
        }
        if (e.key === 'a' && !e.altKey && !e.shiftKey) {
            let hasTriggerModifier = e.ctrlKey && !e.metaKey;
            // 
            if (hasTriggerModifier && this.onSelectAllCommand_()) {
                e.preventDefault();
            }
        }
        if (e.key === 'Escape') {
            this.unselectAll();
            IronA11yAnnouncer.requestAvailability();
            this.fire_('iron-announce', { text: loadTimeData.getString('itemsUnselected') });
            e.preventDefault();
        }
    }
    onVisibilityChange_() {
        if (this.selectedPage_ !== Page.HISTORY_CLUSTERS) {
            return;
        }
        if (document.visibilityState === 'hidden') {
            this.recordHistoryClustersDuration_();
        }
        else if (document.visibilityState === 'visible' &&
            this.historyClustersViewStartTime_ === null) {
            // Restart the timer if the user switches back to the History tab.
            this.historyClustersViewStartTime_ = new Date();
        }
    }
    onDeleteCommand_() {
        if (this.$.toolbar.count === 0 || this.pendingDelete_) {
            return;
        }
        this.deleteSelected();
    }
    /**
     * @return Whether the command was actually triggered.
     */
    onSelectAllCommand_() {
        if (this.$.toolbar.searchField.isSearchFocused() ||
            this.syncedTabsSelected_(this.selectedPage_) ||
            this.historyClustersSelected_(this.selectedPage_, this.showHistoryClusters_)) {
            return false;
        }
        this.selectOrUnselectAll();
        return true;
    }
    /**
     * @param sessionList Array of objects describing the sessions from other
     *     devices.
     */
    setForeignSessions_(sessionList) {
        this.set('queryResult_.sessionList', sessionList);
    }
    /**
     * Update sign in state of synced device manager after user logs in or out.
     */
    onSignInStateChanged_(isUserSignedIn) {
        this.isUserSignedIn_ = isUserSignedIn;
    }
    /**
     * Update sign in state of synced device manager after user logs in or out.
     */
    onHasOtherFormsChanged_(hasOtherForms) {
        this.set('footerInfo.otherFormsOfHistory', hasOtherForms);
    }
    syncedTabsSelected_(_selectedPage) {
        return this.selectedPage_ === Page.SYNCED_TABS;
    }
    /**
     * @return Whether a loading spinner should be shown (implies the
     *     backend is querying a new search term).
     */
    shouldShowSpinner_(querying, incremental, searchTerm) {
        return querying && !incremental && searchTerm !== '';
    }
    selectedPageChanged_(newPage, oldPage) {
        this.unselectAll();
        this.historyViewChanged_();
        this.maybeUpdateSelectedHistoryTab_();
        if (oldPage === Page.HISTORY_CLUSTERS &&
            newPage !== Page.HISTORY_CLUSTERS) {
            this.recordHistoryClustersDuration_();
        }
        if (newPage === Page.HISTORY_CLUSTERS) {
            this.historyClustersViewStartTime_ = new Date();
        }
    }
    updateScrollTarget_() {
        const topLevelIronPages = this.$['content'];
        const lowerLevelIronPages = this.$['tabs-content'];
        const topLevelHistoryPage = this.$['tabs-container'];
        if (topLevelIronPages.selectedItem &&
            topLevelIronPages.selectedItem === topLevelHistoryPage) {
            // The top-level History page has another inner IronPages element that
            // can toggle between different pages. If this is the case, set the
            // scroll target to the currently selected inner tab.
            this.scrollTarget = lowerLevelIronPages.selectedItem;
        }
        else if (topLevelIronPages.selectedItem) {
            this.scrollTarget = topLevelIronPages.selectedItem;
        }
        else {
            this.scrollTarget = null;
        }
    }
    selectedTabChanged_() {
        // Change in the currently selected tab requires change in the currently
        // selected page.
        this.selectedPage_ = TABBED_PAGES[this.selectedTab_];
    }
    maybeUpdateSelectedHistoryTab_() {
        // Change in the currently selected page may require change in the currently
        // selected tab.
        if (TABBED_PAGES.includes(this.selectedPage_)) {
            this.selectedTab_ = TABBED_PAGES.indexOf(this.selectedPage_);
        }
    }
    historyViewChanged_() {
        // This allows the synced-device-manager to render so that it can be set
        // as the scroll target.
        requestAnimationFrame(() => {
            this._scrollHandler();
        });
        this.recordHistoryPageView_();
    }
    // Records the history clusters page duration.
    recordHistoryClustersDuration_() {
        assert(this.historyClustersViewStartTime_ !== null);
        const duration = new Date().getTime() - this.historyClustersViewStartTime_.getTime();
        this.browserService_.recordLongTime('History.Clusters.WebUISessionDuration', duration);
        this.historyClustersViewStartTime_ = null;
    }
    hasDrawerChanged_() {
        const drawer = this.$.drawer.getIfExists();
        if (!this.hasDrawer_ && drawer && drawer.open) {
            drawer.cancel();
        }
    }
    /**
     * This computed binding is needed to make the iron-pages selector update
     * when <synced-device-manager> or <history-clusters> is instantiated for the
     * first time. Otherwise the fallback selection will continue to be used after
     * the corresponding item is added as a child of iron-pages.
     */
    getSelectedPage_(selectedPage, _items) {
        return selectedPage;
    }
    closeDrawer_() {
        const drawer = this.$.drawer.get();
        if (drawer && drawer.open) {
            drawer.close();
        }
    }
    recordHistoryPageView_() {
        let histogramValue = HistoryPageViewHistogram.END;
        switch (this.selectedPage_) {
            case Page.HISTORY_CLUSTERS:
                histogramValue = HistoryPageViewHistogram.JOURNEYS;
                break;
            case Page.SYNCED_TABS:
                histogramValue = this.isUserSignedIn_ ?
                    HistoryPageViewHistogram.SYNCED_TABS :
                    HistoryPageViewHistogram.SIGNIN_PROMO;
                break;
            default:
                histogramValue = HistoryPageViewHistogram.HISTORY;
                break;
        }
        this.browserService_.recordHistogram('History.HistoryPageView', histogramValue, HistoryPageViewHistogram.END);
    }
    // Override FindShortcutMixin methods.
    handleFindShortcut(modalContextOpen) {
        if (modalContextOpen) {
            return false;
        }
        this.$.toolbar.searchField.showAndFocus();
        return true;
    }
    // Override FindShortcutMixin methods.
    searchInputHasFocus() {
        return this.$.toolbar.searchField.isSearchFocused();
    }
    setHasDrawerForTesting(enabled) {
        this.hasDrawer_ = enabled;
    }
}
customElements.define(HistoryAppElement.is, HistoryAppElement);

export { BrowserProxyImpl, BrowserServiceImpl, ClusterAction, HistoryAppElement, HistoryItemElement, HistoryListElement, HistoryPageViewHistogram, HistorySideBarElement, HistoryToolbarElement, MetricsProxyImpl, PageCallbackRouter, PageHandlerRemote, RelatedSearchAction, VisitAction, VisitType, ensureLazyLoaded, getTrustedHTML, listenForPrivilegedLinkClicks };
//# sourceMappingURL=history.rollup.js.map
