import {html} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import '//resources/ash/common/cr_elements/cr_shared_style.css.js';
import '//resources/ash/common/cr_elements/cr_shared_vars.css.js';
import '//resources/ash/common/cr_elements/md_select.css.js';
import '//resources/polymer/v3_0/iron-flex-layout/iron-flex-layout-classes.js';

const styleMod = document.createElement('dom-module');
styleMod.appendChild(html`
  <template>
    <style include="iron-flex cr-shared-style md-select">

@import 'ash/webui/common/resources/cr_elements/cros_color_overrides.css';

a {
  color: var(--cros-sys-primary);
  text-decoration: none;
}
    </style>
  </template>
`.content);
styleMod.register('multidevice-setup-shared');