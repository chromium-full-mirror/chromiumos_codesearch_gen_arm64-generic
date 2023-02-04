/*
 * Copyright 2021 The ChromiumOS Authors
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

#include "gpu/embedded_gpu_shaders_toc.h"

namespace cros {

const char crop_frag[] = R"cc_embed_data(#version 310 es

precision highp float;

layout(binding = 0) uniform highp sampler2D uInputTexture;
layout(location = 1) uniform vec4 uCropRegion;
layout(location = 2) uniform bool uBicubic;

layout(location = 0) in highp vec2 vTexCoord;
layout(location = 0) out highp vec4 outColor;

// Computes cubic B-spline filtering kernel coefficients on v-1, v, v+1, v+2.
vec4 cubic(float v) {
  vec4 n = vec4(1.0, 2.0, 3.0, 4.0) - v;
  vec4 s = n * n * n;
  float x = s.x;
  float y = s.y - 4.0 * s.x;
  float z = s.z - 4.0 * s.y + 6.0 * s.x;
  float w = 6.0 - x - y - z;
  return vec4(x, y, z, w) / 6.0;
}

// Samples 2D texture with bicubic filtering.
vec4 textureBicubic(sampler2D sampler, vec2 texCoords) {
  vec2 texSize = vec2(textureSize(sampler, 0));
  vec2 invTexSize = 1.0 / texSize;

  texCoords = texCoords * texSize - 0.5;

  vec2 fxy = fract(texCoords);
  texCoords -= fxy;

  vec4 xcubic = cubic(fxy.x);
  vec4 ycubic = cubic(fxy.y);

  vec4 c = texCoords.xxyy + vec2(-0.5, 1.5).xyxy;
  vec4 s = vec4(xcubic.xz + xcubic.yw, ycubic.xz + ycubic.yw);
  vec4 d = (c + vec4(xcubic.yw, ycubic.yw) / s) * invTexSize.xxyy;

  vec4 sample0 = texture(sampler, d.xz);
  vec4 sample1 = texture(sampler, d.yz);
  vec4 sample2 = texture(sampler, d.xw);
  vec4 sample3 = texture(sampler, d.yw);

  return mix(mix(sample0, sample1, s.y), mix(sample2, sample3, s.y), s.w);
}

void main() {
  float src_x = uCropRegion.x;
  float src_y = uCropRegion.y;
  float crop_width = uCropRegion.z;
  float crop_height = uCropRegion.w;
  vec2 sample_coord = vec2(
      src_x + vTexCoord.x * crop_width,
      src_y + vTexCoord.y * crop_height);
  if (uBicubic) {
    outColor = textureBicubic(uInputTexture, sample_coord);
  } else {
    outColor = texture(uInputTexture, sample_coord);
  }
}
)cc_embed_data";

const char external_yuv_to_nv12_frag[] = R"cc_embed_data(#version 310 es
#extension GL_OES_EGL_image_external_essl3: require

precision highp float;

layout(binding = 0) uniform highp samplerExternalOES uInputExternalYuvTexture;
layout(location = 0) uniform bool uIsYPlane;

layout(location = 0) in highp vec2 vTexCoord;
layout(location = 0) out highp vec4 outColor;

void main() {
  vec3 rgb = texture(uInputExternalYuvTexture, vTexCoord).rgb;
  if (uIsYPlane) {
    float y = 0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b;
    outColor = vec4(y, 0.0, 0.0, 0.0);
  } else {
    float u = -0.16874 * rgb.r - 0.33126 * rgb.g + 0.5 * rgb.b + 0.5;
    float v = 0.5 * rgb.r - 0.41869 * rgb.g - 0.08131 * rgb.b + 0.5;
    outColor = vec4(u, v, 0.0, 0.0);
  }
}
)cc_embed_data";

const char external_yuv_to_rgba_frag[] = R"cc_embed_data(#version 310 es
#extension GL_OES_EGL_image_external_essl3: require

precision highp float;

layout(binding = 0) uniform highp samplerExternalOES uInputExternalYuvTexture;

layout(location = 0) in highp vec2 vTexCoord;
layout(location = 0) out highp vec4 outColor;

void main() {
  outColor = texture(uInputExternalYuvTexture, vTexCoord);
}
)cc_embed_data";

const char fullscreen_rect_highp_310_es_vert[] = R"cc_embed_data(#version 310 es

precision highp float;

uniform highp mat4 uTextureMatrix;

layout(location = 0) in highp vec2 vXY;
layout(location = 0) out highp vec2 vTexCoord;

void main() {
  gl_Position = vec4(vXY, 0.0, 1.0);
  vTexCoord = (uTextureMatrix * vec4(vXY, 0.0, 1.0)).xy;
}
)cc_embed_data";

const char gamma_correction_frag[] = R"cc_embed_data(#version 310 es

precision highp float;

layout(binding = 0) uniform highp sampler2D uInputRgbaTexture;
layout(location = 0) uniform float uGammaValue;

layout(location = 0) in highp vec2 vTexCoord;
layout(location = 0) out highp vec4 outColor;

vec3 apply_gamma(vec3 inputRgb, vec3 gamma) {
  return pow(inputRgb, 1.0 / gamma);
}

void main() {
  vec3 gamma = vec3(uGammaValue, uGammaValue, uGammaValue);
  outColor = vec4(
      apply_gamma(texture(uInputRgbaTexture, vTexCoord).rgb, gamma), 1.0);
}

)cc_embed_data";

const char lut_frag[] = R"cc_embed_data(#version 310 es

precision highp float;

layout(binding = 0) uniform highp sampler2D uInputRgbaTexture;
layout(binding = 1) uniform highp sampler2D uRLutTexture;
layout(binding = 2) uniform highp sampler2D uGLutTexture;
layout(binding = 3) uniform highp sampler2D uBLutTexture;

layout(location = 0) in highp vec2 vTexCoord;
layout(location = 0) out highp vec4 outColor;

void main() {
  vec3 rgb = texture(uInputRgbaTexture, vTexCoord).rgb;
  outColor = vec4(texture(uRLutTexture, vec2(rgb.r, 0.0)).r,
                  texture(uGLutTexture, vec2(rgb.g, 0.0)).r,
                  texture(uBLutTexture, vec2(rgb.b, 0.0)).r,
                  1.0);
}
)cc_embed_data";

const char nv12_to_rgba_frag[] = R"cc_embed_data(#version 310 es

precision highp float;

layout(binding = 0) uniform highp sampler2D uInputYTexture;
layout(binding = 1) uniform highp sampler2D uInputUvTexture;

layout(location = 0) in highp vec2 vTexCoord;
layout(location = 0) out highp vec4 outColor;

void main() {
  float y = texture(uInputYTexture, vTexCoord).r;
  float u = texture(uInputUvTexture, vTexCoord).r;
  float v = texture(uInputUvTexture, vTexCoord).g;

  vec3 rgb = clamp(vec3(
    y + 1.4017 * (v - 0.5),
    y - 0.3437 * (u - 0.5) - 0.7142 * (v - 0.5),
    y + 1.7722 * (u - 0.5)
  ), 0.0, 1.0);

  outColor = vec4(rgb, 1.0);
}
)cc_embed_data";

const char rgba_to_nv12_frag[] = R"cc_embed_data(#version 310 es

precision highp float;

layout(binding = 0) uniform highp sampler2D uInputRgbaTexture;
layout(location = 0) uniform bool uIsYPlane;

layout(location = 0) in highp vec2 vTexCoord;
layout(location = 0) out highp vec4 outColor;

void main() {
  vec3 rgb = texture(uInputRgbaTexture, vTexCoord).rgb;
  if (uIsYPlane) {
    float y = 0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b;
    outColor = vec4(y, 0.0, 0.0, 0.0);
  } else {
    float u = -0.16874 * rgb.r - 0.33126 * rgb.g + 0.5 * rgb.b + 0.5;
    float v = 0.5 * rgb.r - 0.41869 * rgb.g - 0.08131 * rgb.b + 0.5;
    outColor = vec4(u, v, 0.0, 0.0);
  }
}
)cc_embed_data";

const char subsample_chroma_frag[] = R"cc_embed_data(#version 310 es

precision highp float;

layout(binding = 0) uniform highp sampler2D uInputUvTexture;

layout(location = 0) in highp vec2 vTexCoord;
layout(location = 0) out highp vec4 outColor;

void main() {
  vec2 uv = texture(uInputUvTexture, vTexCoord).rg;
  outColor = vec4(uv, 0.0, 0.0);
}
)cc_embed_data";

const char yuv_to_yuv_frag[] = R"cc_embed_data(#version 310 es

precision highp float;

layout(binding = 0) uniform highp sampler2D uInputYTexture;
layout(binding = 1) uniform highp sampler2D uInputUvTexture;

layout(location = 0) uniform bool uIsYPlane;

layout(location = 0) in highp vec2 vTexCoord;
layout(location = 0) out highp vec4 outColor;

void main() {
  if (uIsYPlane) {
    float y = texture(uInputYTexture, vTexCoord).r;
    outColor = vec4(y, 0.0, 0.0, 0.0);
  } else {
    vec2 uv = texture(uInputUvTexture, vTexCoord).rg;
    outColor = vec4(uv, 0.0, 0.0);
  }
}

)cc_embed_data";

const char yuyv_to_nv12_frag[] = R"cc_embed_data(#version 310 es

precision highp float;

layout(binding = 0) uniform highp sampler2D uInputYxTexture;
layout(binding = 1) uniform highp sampler2D uInputYuyvTexture;

layout(location = 0) uniform bool uIsYPlane;

layout(location = 0) in highp vec2 vTexCoord;
layout(location = 0) out highp vec4 outColor;

void main() {
  if (uIsYPlane) {
    float y = texture(uInputYxTexture, vTexCoord).r;
    outColor = vec4(y, 0.0, 0.0, 0.0);
  } else {
    vec2 uv = texture(uInputYuyvTexture, vTexCoord).ga;
    outColor = vec4(uv, 0.0, 0.0);
  }
}
)cc_embed_data";

cros::EmbeddedFileToc GetEmbeddedGpuShadersToc() {
  std::map<std::string, cros::EmbeddedFileEntry> toc;

  toc.insert(
      {"crop.frag", cros::EmbeddedFileEntry(crop_frag, sizeof(crop_frag))});
  toc.insert({"external_yuv_to_nv12.frag",
              cros::EmbeddedFileEntry(external_yuv_to_nv12_frag,
                                      sizeof(external_yuv_to_nv12_frag))});
  toc.insert({"external_yuv_to_rgba.frag",
              cros::EmbeddedFileEntry(external_yuv_to_rgba_frag,
                                      sizeof(external_yuv_to_rgba_frag))});
  toc.insert(
      {"fullscreen_rect_highp_310_es.vert",
       cros::EmbeddedFileEntry(fullscreen_rect_highp_310_es_vert,
                               sizeof(fullscreen_rect_highp_310_es_vert))});
  toc.insert({"gamma_correction.frag",
              cros::EmbeddedFileEntry(gamma_correction_frag,
                                      sizeof(gamma_correction_frag))});
  toc.insert({"lut.frag", cros::EmbeddedFileEntry(lut_frag, sizeof(lut_frag))});
  toc.insert(
      {"nv12_to_rgba.frag",
       cros::EmbeddedFileEntry(nv12_to_rgba_frag, sizeof(nv12_to_rgba_frag))});
  toc.insert(
      {"rgba_to_nv12.frag",
       cros::EmbeddedFileEntry(rgba_to_nv12_frag, sizeof(rgba_to_nv12_frag))});
  toc.insert({"subsample_chroma.frag",
              cros::EmbeddedFileEntry(subsample_chroma_frag,
                                      sizeof(subsample_chroma_frag))});
  toc.insert(
      {"yuv_to_yuv.frag",
       cros::EmbeddedFileEntry(yuv_to_yuv_frag, sizeof(yuv_to_yuv_frag))});
  toc.insert(
      {"yuyv_to_nv12.frag",
       cros::EmbeddedFileEntry(yuyv_to_nv12_frag, sizeof(yuyv_to_nv12_frag))});
  return cros::EmbeddedFileToc(std::move(toc));
}

} // namespace cros
