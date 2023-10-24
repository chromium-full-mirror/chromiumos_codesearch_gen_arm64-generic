import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_-->    <style>:host{display:inline-flex;flex-wrap:wrap;margin:calc(var(--avatar-spacing)/ -2)}</style>
    <slot></slot>
<!--_html_template_end_-->`;
}
