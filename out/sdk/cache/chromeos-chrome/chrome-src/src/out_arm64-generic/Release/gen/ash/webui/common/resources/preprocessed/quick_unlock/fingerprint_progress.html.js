import {html} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
  return html`<!--_html_template_start_--><style>
    :host {
      user-select: none;
    }

    .translucent {
      opacity: 0.3;
    }

    #canvasDiv {
      height: 240px;
      overflow: hidden;
      position: relative;
      width:  460px;
    }

    cros-lottie-renderer {
      display: inline-block;
      position: absolute;
    }

    #fingerprintScanned {
      position: absolute;
    }
</style>

<div id="canvasDiv">
    <canvas id="canvas" height="240" width="460"></canvas>
    <cros-lottie-renderer id="scanningAnimation"
        autoplay="[[autoplay]]"
        dynamic>
    </cros-lottie-renderer>
    <iron-icon id="fingerprintScanned" hidden></iron-icon>
</div><!--_html_template_end_-->`;
}