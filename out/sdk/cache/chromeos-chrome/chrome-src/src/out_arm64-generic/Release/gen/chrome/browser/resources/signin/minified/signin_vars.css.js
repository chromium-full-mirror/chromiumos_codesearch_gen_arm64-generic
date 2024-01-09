import{html}from"chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js";import"chrome://resources/cr_elements/cr_shared_vars.css.js";const template=html`
<style>
html{--action-container-padding:16px;--signin-work-badge-background-color:rgb(248, 249, 250);--signin-work-badge-foreground-color:var(--google-grey-700)}@media (prefers-color-scheme:dark){html{--signin-work-badge-background-color:var(--google-grey-700);--signin-work-badge-foreground-color:white;--signin-dark-customized-background-color:rgba(41, 42, 45, 1)}}
</style>
`;document.head.appendChild(template.content);