import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="privacy-guide-fragment-shared">:host{display:flex;flex-flow:column;min-height:calc(432px - var(--privacy-guide-footer-total-height))}.headline{outline:0}.headline-container{padding:48px 116px var(--cr-section-padding) 116px;row-gap:12px}.footer{align-items:center;bottom:calc(-1 * var(--privacy-guide-footer-total-height));display:flex;justify-content:flex-end;padding-bottom:var(--privacy-guide-footer-vertical-padding);position:absolute;width:calc(100% - 48px)}:host-context([is-privacy-guide-v2]) picture{animation:fade-in 1.5s,slide-in .3s}:host-context([is-privacy-guide-v2]) .footer{animation:fade-in var(--privacy-guide-animation-duration)}</style>
<div class="headline-container">
  <picture>
    <source srcset="./images/privacy_guide/welcome_banner_dark.svg" media="(prefers-color-scheme: dark)">
    <img alt="" src="./images/privacy_guide/welcome_banner.svg">
  </picture>
  <div class="headline" tabindex="-1">
    $i18n{privacyGuideWelcomeCardHeader}
  </div>
  <div class="cr-secondary-text">$i18n{privacyGuideWelcomeCardSubHeader}</div>
</div>
<div class="footer">
  <cr-button class="action-button" id="startButton" on-click="onStartButtonClick_">
    $i18n{privacyGuideNextButton}
  </cr-button>
</div>
<!--_html_template_end_-->`;
}
