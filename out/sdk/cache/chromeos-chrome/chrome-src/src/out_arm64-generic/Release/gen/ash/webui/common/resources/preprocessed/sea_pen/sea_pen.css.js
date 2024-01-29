import {html} from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';


const styleMod = document.createElement('dom-module');
styleMod.appendChild(html`
  <template>
    <style>

wallpaper-grid-item.sea-pen-image {
  --wallpaper-grid-item-width: 100%;
  height: 100%;
}

.sea-pen-image[aria-selected='true']::part(image) {
  animation: none;
}

.sea-pen-image[aria-selected='true']::part(icon) {
  --cr-icon-button-size: 20px;
  background-color: var(--cros-bg-color);
  border-bottom-right-radius: 50%;
  left: -8px;
  padding: 8px;
  top: -8px;
}

.sea-pen-image[aria-selected='true']::part(item) {
  border-radius: var(--personalization-app-grid-item-border-radius);
}

.sea-pen-image[aria-selected='true']::part(icon)::before {
  border-top-left-radius: 50%;
  top: 8px;
  box-shadow: 0 -8px 0 0 var(--cros-bg-color);
  content: "";
  height: 16px;
  left: 36px;
  position: absolute;
  width: 16px;
}

.sea-pen-image[aria-selected='true']::part(icon)::after {
  border-top-left-radius: 50%;
  box-shadow: -8px 0 0 0 var(--cros-bg-color);
  content: "";
  height: 16px;
  left: 8px;
  position: absolute;
  top: 36px;
  width: 16px;
}
    </style>
  </template>
`.content);
styleMod.register('sea-pen');