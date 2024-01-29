import { dedupingMixin } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
export const DarkModeMixin = dedupingMixin((superClass) => {
    class DarkModeMixin extends superClass {
        constructor() {
            super(...arguments);
            this.boundOnChange_ = null;
        }
        static get properties() {
            return {
                /** Whether or not the OS is in dark mode. */
                inDarkMode: {
                    type: Boolean,
                    value: prefersDark.matches,
                },
            };
        }
        connectedCallback() {
            super.connectedCallback();
            if (!this.boundOnChange_) {
                this.boundOnChange_ = () => this.onChange_();
            }
            prefersDark.addListener(this.boundOnChange_);
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            prefersDark.removeListener(this.boundOnChange_);
            this.boundOnChange_ = null;
        }
        onChange_() {
            this.inDarkMode = prefersDark.matches;
        }
    }
    return DarkModeMixin;
});
export function inDarkMode() {
    return prefersDark.matches;
}
