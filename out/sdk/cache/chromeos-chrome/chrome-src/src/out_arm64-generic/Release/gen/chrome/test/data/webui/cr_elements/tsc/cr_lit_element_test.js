// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { getTrustedHTML } from 'chrome://resources/js/static_types.js';
import { CrLitElement, html } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { html as polymerHtml, PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { assertDeepEquals, assertEquals, assertFalse, assertNotEquals, assertNotReached, assertNull, assertThrows, assertTrue } from 'chrome://webui-test/chai_assert.js';
const LifecycleCallbackTrackerMixin = (superClass) => {
    class LifecycleCallbackTrackerMixin extends superClass {
        constructor() {
            super(...arguments);
            this.lifecycleCallbacks = [];
        }
        connectedCallback() {
            this.lifecycleCallbacks.push('connectedCallback');
            super.connectedCallback();
        }
        disconnectedCallback() {
            this.lifecycleCallbacks.push('disconnectedCallback');
            super.disconnectedCallback();
        }
        performUpdate() {
            this.lifecycleCallbacks.push('performUpdate');
            super.performUpdate();
        }
    }
    return LifecycleCallbackTrackerMixin;
};
const CrDummyLitElementBase = LifecycleCallbackTrackerMixin(CrLitElement);
class CrDummyLitElement extends CrDummyLitElementBase {
    static get is() {
        return 'cr-dummy-lit';
    }
    render() {
        return html `
      <div id="foo">Hello Foo</div>
      <div id="bar">Hello Bar</div>
    `;
    }
}
customElements.define(CrDummyLitElement.is, CrDummyLitElement);
suite('CrLitElement', function () {
    setup(function () {
        document.body.innerHTML = window.trustedTypes.emptyHTML;
    });
    test('ForcedRendering_ConnectedCallback', function () {
        const element = document.createElement('cr-dummy-lit');
        assertNull(element.shadowRoot);
        document.body.appendChild(element);
        // Test that the order of lifecycle callbacks is as expected.
        assertDeepEquals(['connectedCallback', 'performUpdate'], element.lifecycleCallbacks);
        // Purposefully *not* calling `await element.updateComplete` here, to ensure
        // that initial rendering is synchronous when subclassing CrLitElement.
        assertNotEquals(null, element.shadowRoot);
    });
    // Test an odd case where a CrLitElement is connected to the DOM but its
    // connectedCallback() method has not fired yet, which happens when the
    // following pattern is encountered:
    // dom-if > parent PolymerElement -> child CrLitElement
    // See CrLitElement definition for more details. Ensure that `shadowRoot` is
    // force-rendered as part of accessing the $ dictionary.
    test('ForcedRendering_BeforeConnectedCallback', function (done) {
        class CrPolymerWrapperElement extends PolymerElement {
            static get is() {
                return 'cr-polymer-wrapper';
            }
            static get template() {
                return polymerHtml `<cr-dummy-lit></cr-dummy-lit>`;
            }
            connectedCallback() {
                super.connectedCallback();
                const litChild = this.shadowRoot.querySelector('cr-dummy-lit');
                assertTrue(!!litChild);
                // Ensure that the problem is happening.
                assertNull(litChild.shadowRoot);
                assertDeepEquals([], litChild.lifecycleCallbacks);
                // Try to access the $ dictionary, and ensure that it causes the
                // `shadowRoot` to be force-rendered.
                assertTrue(!!litChild.$.foo);
                assertTrue(!!litChild.shadowRoot);
                // Check that 'performUpdate' was called, even though
                // 'connectedCallback' has not fired yet.
                assertDeepEquals(['performUpdate'], litChild.lifecycleCallbacks);
                litChild.updateComplete.then(() => {
                    // Check that 'connectedCallback' and 'performUpdate' are called
                    // exactly once some time later by Lit itself.
                    assertDeepEquals(['performUpdate', 'connectedCallback', 'performUpdate'], litChild.lifecycleCallbacks);
                    done();
                });
            }
        }
        customElements.define(CrPolymerWrapperElement.is, CrPolymerWrapperElement);
        class CrDomIfPolymerElement extends PolymerElement {
            constructor() {
                super(...arguments);
                this.show = false;
            }
            static get is() {
                return 'cr-dom-if-polymer';
            }
            static get template() {
                return polymerHtml `
          <template is="dom-if" if="[[show]]">
            <cr-polymer-wrapper></cr-polymer-wrapper>
          </template>
        `;
            }
            static get properties() {
                return {
                    show: Boolean,
                };
            }
            connectedCallback() {
                super.connectedCallback();
                this.show = true;
            }
        }
        customElements.define(CrDomIfPolymerElement.is, CrDomIfPolymerElement);
        document.body.innerHTML = getTrustedHTML `
      <cr-dom-if-polymer></cr-dom-if-polymer>
    `;
    });
    test('DollarSign_ErrorWhenNotConnectedOnce', function () {
        const element = document.createElement('cr-dummy-lit');
        assertDeepEquals([], element.lifecycleCallbacks);
        assertThrows(function () {
            element.$.foo;
            assertNotReached('Previous statement should have thrown an exception');
        }, 'CrLitElement CR-DUMMY-LIT $ dictionary accessed before element is connected at least once.');
        assertDeepEquals([], element.lifecycleCallbacks);
    });
    test('DollarSign_WorksAfterDisconnected', function () {
        const element = document.createElement('cr-dummy-lit');
        assertDeepEquals([], element.lifecycleCallbacks);
        document.body.appendChild(element);
        assertDeepEquals(['connectedCallback', 'performUpdate'], element.lifecycleCallbacks);
        element.remove();
        assertDeepEquals(['connectedCallback', 'performUpdate', 'disconnectedCallback'], element.lifecycleCallbacks);
        assertFalse(element.isConnected);
        assertNotEquals(null, element.$.foo);
    });
    test('DollarSign_WorksWhenConnected', function () {
        const element = document.createElement('cr-dummy-lit');
        document.body.appendChild(element);
        assertDeepEquals(['connectedCallback', 'performUpdate'], element.lifecycleCallbacks);
        // Purposefully *not* calling `await element.updateComplete` here, to ensure
        // that initial rendering is synchronous when subclassing CrLitElement.
        assertTrue(!!element.$.foo);
        assertEquals('Hello Foo', element.$.foo.textContent);
        assertTrue(!!element.$.bar);
        assertEquals('Hello Bar', element.$.bar.textContent);
        // Test again lifecycle callbacks to ensure that performUpdate() has not
        // been called a second time as part of accessing the $ dictionary.
        assertDeepEquals(['connectedCallback', 'performUpdate'], element.lifecycleCallbacks);
    });
    // Test that properties are initialized correctly from attributes.
    test('PropertiesAttributesNameMapping', function () {
        class CrDummyAttributesLitElement extends CrLitElement {
            constructor() {
                super(...arguments);
                this.fooBarBoolean = false;
                this.fooBarString = 'hello';
                this.fooBarStringCustom = 'hola';
            }
            static get is() {
                return 'cr-dummy-attributes-lit';
            }
            static get properties() {
                return {
                    fooBarBoolean: { type: Boolean },
                    fooBarString: { type: String },
                    fooBarStringCustom: {
                        attribute: 'foobarstringcustom',
                        type: String,
                    },
                };
            }
        }
        customElements.define(CrDummyAttributesLitElement.is, CrDummyAttributesLitElement);
        document.body.innerHTML = getTrustedHTML `
      <cr-dummy-attributes-lit foo-bar-boolean foo-bar-string="world"
          foobarstringcustom="custom">
      </cr-dummy-attributes-lit>
    `;
        const element = document.body.querySelector('cr-dummy-attributes-lit');
        assertTrue(!!element);
        assertTrue(element.fooBarBoolean);
        assertEquals('world', element.fooBarString);
        assertEquals('custom', element.fooBarStringCustom);
    });
});
