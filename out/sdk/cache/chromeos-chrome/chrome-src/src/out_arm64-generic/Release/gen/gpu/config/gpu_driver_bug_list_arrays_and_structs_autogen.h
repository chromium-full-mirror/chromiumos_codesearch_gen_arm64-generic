// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is auto-generated from
//    gpu/config/process_json.py
// It's formatted by clang-format using chromium coding style:
//    clang-format -i -style=chromium filename
// DO NOT EDIT!

#ifndef GPU_CONFIG_GPU_DRIVER_BUG_LIST_ARRAYS_AND_STRUCTS_AUTOGEN_H_
#define GPU_CONFIG_GPU_DRIVER_BUG_LIST_ARRAYS_AND_STRUCTS_AUTOGEN_H_

#include "gpu/config/gpu_driver_bug_workaround_type.h"

namespace gpu {
const int kFeatureListForWorkaroundsEntry19[1] = {
DISABLE_DEPTH_TEXTURE,
};

const char* const kDisabledExtensionsForEntry19[1] = {
"GL_OES_depth_texture",
};

const uint32_t kCrBugsForWorkaroundsEntry19[2] = {
682075,
1042214,
};

const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry19 = {
nullptr,
"Adreno \\(TM\\) 2.*",
nullptr,
nullptr,
};

const GpuControlList::More kMoreForEntry19_619971032 = {
GpuControlList::kGLTypeNone,  // gl_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
GpuControlList::kDontCare,  // hardware_overlay
0,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

const char* const kDisabledExtensionsForEntry23[1] = {
"GL_OES_standard_derivatives",
};

const uint32_t kCrBugsForWorkaroundsEntry23[1] = {
243038,
};

const GpuControlList::Device kDevicesForWorkaroundsEntry23[2] = {
{0xa011, 0x0},
{0xa012, 0x0},
};

const GpuControlList::More kMoreForEntry23_619971032 = {
GpuControlList::kGLTypeNone,  // gl_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
GpuControlList::kDontCare,  // hardware_overlay
0,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

const int kFeatureListForWorkaroundsEntry31[1] = {
USE_VIRTUALIZED_GL_CONTEXTS,
};

const uint32_t kCrBugsForWorkaroundsEntry31[6] = {
154715,
10068,
269829,
294779,
285292,
1018528,
};

const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry31 = {
"ARM.*",
"Mali-[T34].*",
nullptr,
nullptr,
};

const GpuControlList::More kMoreForEntry31_619971032 = {
GpuControlList::kGLTypeNone,  // gl_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
GpuControlList::kDontCare,  // hardware_overlay
0,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

const int kFeatureListForWorkaroundsEntry33[1] = {
USE_VIRTUALIZED_GL_CONTEXTS,
};

const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry33 = {
"Imagination.*",
nullptr,
nullptr,
nullptr,
};

const GpuControlList::More kMoreForEntry33_619971032 = {
GpuControlList::kGLTypeNone,  // gl_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
GpuControlList::kDontCare,  // hardware_overlay
0,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

const int kFeatureListForWorkaroundsEntry44[1] = {
DISABLE_DISCARD_FRAMEBUFFER,
};

const uint32_t kCrBugsForWorkaroundsEntry44[1] = {
301988,
};

const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry44 = {
"ARM.*",
"Mali.*",
nullptr,
nullptr,
};

const GpuControlList::More kMoreForEntry44_619971032 = {
GpuControlList::kGLTypeNone,  // gl_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
GpuControlList::kDontCare,  // hardware_overlay
0,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

const int kFeatureListForWorkaroundsEntry132[1] = {
MSAA_IS_SLOW,
};

const uint32_t kCrBugsForWorkaroundsEntry132[2] = {
527565,
1298585,
};

const GpuControlList::More kMoreForEntry132_619971032 = {
GpuControlList::kGLTypeNone,  // gl_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
GpuControlList::kDontCare,  // hardware_overlay
0,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

const GpuControlList::More kMoreForEntry132_619971032Exception0 = {
GpuControlList::kGLTypeNone,  // gl_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
GpuControlList::kDontCare,  // hardware_overlay
0,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

const int kFeatureListForWorkaroundsEntry161[1] = {
DISABLE_DISCARD_FRAMEBUFFER,
};

const uint32_t kCrBugsForWorkaroundsEntry161[1] = {
601753,
};

const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry161 = {
"NVIDIA.*",
nullptr,
nullptr,
nullptr,
};

const GpuControlList::More kMoreForEntry161_619971032 = {
GpuControlList::kGLTypeGLES,  // gl_type
{GpuControlList::kGE, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "3.0", nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
GpuControlList::kDontCare,  // hardware_overlay
0,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

const int kFeatureListForWorkaroundsEntry165[1] = {
UNPACK_OVERLAPPING_ROWS_SEPARATELY_UNPACK_BUFFER,
};

const uint32_t kCrBugsForWorkaroundsEntry165[1] = {
596774,
};

const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry165 = {
"NVIDIA.*",
nullptr,
nullptr,
nullptr,
};

const GpuControlList::More kMoreForEntry165_619971032 = {
GpuControlList::kGLTypeNone,  // gl_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
GpuControlList::kDontCare,  // hardware_overlay
0,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

const char* const kDisabledExtensionsForEntry206[2] = {
"GL_KHR_blend_equation_advanced",
"GL_KHR_blend_equation_advanced_coherent",
};

const uint32_t kCrBugsForWorkaroundsEntry206[1] = {
661715,
};

const GpuControlList::More kMoreForEntry206_619971032 = {
GpuControlList::kGLTypeNone,  // gl_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
GpuControlList::kDontCare,  // hardware_overlay
0,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

const int kFeatureListForWorkaroundsEntry213[1] = {
USE_VIRTUALIZED_GL_CONTEXTS,
};

const uint32_t kCrBugsForWorkaroundsEntry213[1] = {
678508,
};

const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry213 = {
"ARM.*",
"Mali-G.*",
nullptr,
nullptr,
};

const GpuControlList::More kMoreForEntry213_619971032 = {
GpuControlList::kGLTypeNone,  // gl_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
GpuControlList::kDontCare,  // hardware_overlay
0,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

const int kFeatureListForWorkaroundsEntry215[1] = {
USE_GPU_DRIVER_WORKAROUND_FOR_TESTING,
};

const uint32_t kCrBugsForWorkaroundsEntry215[1] = {
682912,
};

const GpuControlList::More kMoreForEntry215_619971032 = {
GpuControlList::kGLTypeNone,  // gl_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
GpuControlList::kDontCare,  // hardware_overlay
1,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

const int kFeatureListForWorkaroundsEntry235[1] = {
RELY_ON_IMPLICIT_SYNC_FOR_SWAP_BUFFERS,
};

const uint32_t kCrBugsForWorkaroundsEntry235[1] = {
721463,
};

const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry235 = {
"Intel.*",
nullptr,
nullptr,
nullptr,
};

const GpuControlList::More kMoreForEntry235_619971032 = {
GpuControlList::kGLTypeNone,  // gl_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
GpuControlList::kDontCare,  // hardware_overlay
0,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

const int kFeatureListForWorkaroundsEntry243[1] = {
DISABLE_PROGRAM_CACHING_FOR_TRANSFORM_FEEDBACK,
};

const uint32_t kCrBugsForWorkaroundsEntry243[1] = {
778871,
};

const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry243 = {
"ARM.*",
"Mali.*",
nullptr,
nullptr,
};

const GpuControlList::More kMoreForEntry243_619971032 = {
GpuControlList::kGLTypeNone,  // gl_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
GpuControlList::kDontCare,  // hardware_overlay
0,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

const int kFeatureListForWorkaroundsEntry254[2] = {
MAX_MSAA_SAMPLE_COUNT_4,
USE_EQAA_STORAGE_SAMPLES_2,
};

const uint32_t kCrBugsForWorkaroundsEntry254[1] = {
875471,
};

const GpuControlList::Device kDevicesForWorkaroundsEntry254[1] = {
{0x98e4, 0x0},
};

const GpuControlList::More kMoreForEntry254_619971032 = {
GpuControlList::kGLTypeNone,  // gl_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
GpuControlList::kDontCare,  // hardware_overlay
0,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

const int kFeatureListForWorkaroundsEntry256[1] = {
ENABLE_WEBGL_TIMER_QUERY_EXTENSIONS,
};

const uint32_t kCrBugsForWorkaroundsEntry256[2] = {
808744,
870491,
};

const GpuControlList::More kMoreForEntry256_619971032 = {
GpuControlList::kGLTypeNone,  // gl_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
GpuControlList::kDontCare,  // hardware_overlay
0,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

const GpuControlList::More kMoreForEntry256_619971032Exception0 = {
GpuControlList::kGLTypeNone,  // gl_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
GpuControlList::kDontCare,  // hardware_overlay
0,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

const char* const kDisabledWebGLExtensionsForEntry257[1] = {
"WEBGL_lose_context",
};

const uint32_t kCrBugsForWorkaroundsEntry257[1] = {
808744,
};

const GpuControlList::More kMoreForEntry257_619971032 = {
GpuControlList::kGLTypeNone,  // gl_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
GpuControlList::kDontCare,  // hardware_overlay
2,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

const int kFeatureListForWorkaroundsEntry289[1] = {
DISABLE_ES3_GL_CONTEXT_FOR_TESTING,
};

const uint32_t kCrBugsForWorkaroundsEntry289[1] = {
923134,
};

const GpuControlList::More kMoreForEntry289_619971032 = {
GpuControlList::kGLTypeNone,  // gl_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
GpuControlList::kDontCare,  // hardware_overlay
3,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

const int kFeatureListForWorkaroundsEntry313[1] = {
EXIT_ON_CONTEXT_LOST,
};

const uint32_t kCrBugsForWorkaroundsEntry313[1] = {
1010121,
};

const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry313 = {
"Imagination.*",
"PowerVR.*",
nullptr,
nullptr,
};

const GpuControlList::More kMoreForEntry313_619971032 = {
GpuControlList::kGLTypeNone,  // gl_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
GpuControlList::kDontCare,  // hardware_overlay
0,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

const char* const kDisabledExtensionsForEntry315[1] = {
"GL_MESA_framebuffer_flip_y",
};

const uint32_t kCrBugsForWorkaroundsEntry315[1] = {
964010,
};

const GpuControlList::More kMoreForEntry315_619971032 = {
GpuControlList::kGLTypeGL,  // gl_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
GpuControlList::kDontCare,  // hardware_overlay
0,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

const int kFeatureListForWorkaroundsEntry316[1] = {
MAX_MSAA_SAMPLE_COUNT_4,
};

const uint32_t kCrBugsForWorkaroundsEntry316[1] = {
1003860,
};

const GpuControlList::DriverInfo kDriverInfoForWorkaroundsEntry316 = {
"Mesa",  // driver_vendor
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // driver_version
};

const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry316 = {
"Intel.*",
nullptr,
nullptr,
nullptr,
};

const GpuControlList::More kMoreForEntry316_619971032 = {
GpuControlList::kGLTypeNone,  // gl_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
GpuControlList::kDontCare,  // hardware_overlay
0,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

const int kFeatureListForWorkaroundsEntry317[1] = {
MAX_MSAA_SAMPLE_COUNT_2,
};

const uint32_t kCrBugsForWorkaroundsEntry317[1] = {
1003860,
};

const GpuControlList::DriverInfo kDriverInfoForWorkaroundsEntry317 = {
"Mesa",  // driver_vendor
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // driver_version
};

const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry317 = {
"Intel.*",
nullptr,
nullptr,
nullptr,
};

const GpuControlList::More kMoreForEntry317_619971032 = {
GpuControlList::kGLTypeNone,  // gl_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
GpuControlList::kDontCare,  // hardware_overlay
0,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

const int kFeatureListForWorkaroundsEntry369[2] = {
MAX_MSAA_SAMPLE_COUNT_4,
USE_EQAA_STORAGE_SAMPLES_2,
};

const uint32_t kCrBugsForWorkaroundsEntry369[1] = {
1184340,
};

const GpuControlList::Device kDevicesForWorkaroundsEntry369[2] = {
{0x15d8, 0xe9},
{0x15d8, 0xea},
};

const GpuControlList::More kMoreForEntry369_619971032 = {
GpuControlList::kGLTypeNone,  // gl_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
GpuControlList::kDontCare,  // hardware_overlay
0,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

const int kFeatureListForWorkaroundsEntry370[1] = {
EXIT_ON_CONTEXT_LOST,
};

const uint32_t kCrBugsForWorkaroundsEntry370[2] = {
992286,
1177986,
};

const GpuControlList::More kMoreForEntry370_619971032 = {
GpuControlList::kGLTypeNone,  // gl_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
GpuControlList::kDontCare,  // hardware_overlay
0,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

const int kFeatureListForWorkaroundsEntry373[1] = {
DISABLE_ACCELERATED_VP9_PROFILE2_DECODE,
};

const uint32_t kCrBugsForWorkaroundsEntry373[1] = {
1198714,
};

const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry373 = {
"freedreno",
nullptr,
nullptr,
nullptr,
};

const GpuControlList::More kMoreForEntry373_619971032 = {
GpuControlList::kGLTypeNone,  // gl_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
GpuControlList::kDontCare,  // hardware_overlay
0,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

const int kFeatureListForWorkaroundsEntry379[1] = {
DISABLE_ACCELERATED_VP9_ENCODE,
};

const uint32_t kCrBugsForWorkaroundsEntry379[1] = {
1217298,
};

const IntelGpuSeriesType kIntelGpuSeriesForEntry379[2] = {
IntelGpuSeriesType::kKabylake,
IntelGpuSeriesType::kGeminilake,
};

const GpuControlList::More kMoreForEntry379_619971032 = {
GpuControlList::kGLTypeNone,  // gl_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
GpuControlList::kDontCare,  // hardware_overlay
0,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

const int kFeatureListForWorkaroundsEntry381[1] = {
CHECK_EGL_FENCE_BEFORE_WAIT,
};

const uint32_t kCrBugsForWorkaroundsEntry381[1] = {
1246254,
};

const GpuControlList::DriverInfo kDriverInfoForWorkaroundsEntry381 = {
"Mesa",  // driver_vendor
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // driver_version
};

const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry381 = {
"Intel.*",
nullptr,
nullptr,
nullptr,
};

const GpuControlList::More kMoreForEntry381_619971032 = {
GpuControlList::kGLTypeNone,  // gl_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
GpuControlList::kDontCare,  // hardware_overlay
0,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

const int kFeatureListForWorkaroundsEntry389[1] = {
RELY_ON_IMPLICIT_SYNC_FOR_SWAP_BUFFERS,
};

const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry389 = {
"nouveau.*",
nullptr,
nullptr,
nullptr,
};

const GpuControlList::More kMoreForEntry389_619971032 = {
GpuControlList::kGLTypeNone,  // gl_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
GpuControlList::kDontCare,  // hardware_overlay
0,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

const int kFeatureListForWorkaroundsEntry393[1] = {
USE_VIRTUALIZED_GL_CONTEXTS,
};

const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry393 = {
"freedreno",
nullptr,
nullptr,
nullptr,
};

const GpuControlList::More kMoreForEntry393_619971032 = {
GpuControlList::kGLTypeNone,  // gl_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
GpuControlList::kDontCare,  // hardware_overlay
0,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

const int kFeatureListForWorkaroundsEntry398[1] = {
MSAA_IS_SLOW_2,
};

const uint32_t kCrBugsForWorkaroundsEntry398[3] = {
527565,
1298585,
1341830,
};

const GpuControlList::More kMoreForEntry398_619971032 = {
GpuControlList::kGLTypeNone,  // gl_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
GpuControlList::kDontCare,  // hardware_overlay
0,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

const GpuControlList::More kMoreForEntry398_619971032Exception0 = {
GpuControlList::kGLTypeNone,  // gl_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
GpuControlList::kDontCare,  // hardware_overlay
0,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

const int kFeatureListForWorkaroundsEntry400[1] = {
CACHE_TEXTURE_IN_OZONE_BACKING,
};

const uint32_t kCrBugsForWorkaroundsEntry400[1] = {
1343521,
};

const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry400 = {
"freedreno",
nullptr,
nullptr,
nullptr,
};

const GpuControlList::More kMoreForEntry400_619971032 = {
GpuControlList::kGLTypeNone,  // gl_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
GpuControlList::kDontCare,  // hardware_overlay
0,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

const int kFeatureListForWorkaroundsEntry402[1] = {
CACHE_TEXTURE_IN_OZONE_BACKING,
};

const uint32_t kCrBugsForWorkaroundsEntry402[1] = {
1350094,
};

const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry402 = {
"ARM.*",
"Mali.*",
nullptr,
nullptr,
};

const GpuControlList::More kMoreForEntry402_619971032 = {
GpuControlList::kGLTypeNone,  // gl_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
GpuControlList::kDontCare,  // hardware_overlay
0,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

const int kFeatureListForWorkaroundsEntry404[1] = {
DISABLE_EGL_EXT_IMAGE_DMA_BUF_IMPORT_MODIFIERS,
};

const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry404 = {
nullptr,
"llvmpipe.*",
nullptr,
nullptr,
};

const GpuControlList::More kMoreForEntry404_619971032 = {
GpuControlList::kGLTypeNone,  // gl_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
GpuControlList::kDontCare,  // hardware_overlay
0,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

const int kFeatureListForWorkaroundsEntry409[1] = {
FLUSH_BEFORE_CREATE_FENCE,
};

const uint32_t kCrBugsForWorkaroundsEntry409[1] = {
1393646,
};

const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry409 = {
"freedreno",
nullptr,
nullptr,
nullptr,
};

const GpuControlList::More kMoreForEntry409_619971032 = {
GpuControlList::kGLTypeNone,  // gl_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
GpuControlList::kDontCare,  // hardware_overlay
0,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

const int kFeatureListForWorkaroundsEntry415[5] = {
DISABLE_ACCELERATED_H264_DECODE,
DISABLE_ACCELERATED_H264_ENCODE,
DISABLE_ACCELERATED_VP9_DECODE,
DISABLE_ACCELERATED_VP9_ENCODE,
DISABLE_ACCELERATED_VP9_PROFILE2_DECODE,
};

const uint32_t kCrBugsForWorkaroundsEntry415[1] = {
1464136,
};

const IntelGpuSeriesType kIntelGpuSeriesForEntry415[1] = {
IntelGpuSeriesType::kElkhartlake,
};

const GpuControlList::More kMoreForEntry415_619971032 = {
GpuControlList::kGLTypeNone,  // gl_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
GpuControlList::kDontCare,  // hardware_overlay
0,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

const int kFeatureListForWorkaroundsEntry421[5] = {
DISABLE_ACCELERATED_H264_DECODE,
DISABLE_ACCELERATED_H264_ENCODE,
DISABLE_ACCELERATED_VP9_DECODE,
DISABLE_ACCELERATED_VP9_PROFILE2_DECODE,
DISABLE_ACCELERATED_HEVC_DECODE,
};

const uint32_t kCrBugsForWorkaroundsEntry421[1] = {
1494147,
};

const GpuControlList::Device kDevicesForWorkaroundsEntry421[2] = {
{0x15d8, 0x0},
{0x15dd, 0x0},
};

const GpuControlList::More kMoreForEntry421_619971032 = {
GpuControlList::kGLTypeNone,  // gl_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
GpuControlList::kDontCare,  // hardware_overlay
0,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

const int kFeatureListForWorkaroundsEntry422[2] = {
DISABLE_ACCELERATED_VP8_ENCODE,
DISABLE_ACCELERATED_H264_ENCODE,
};

const GpuControlList::Device kDevicesForWorkaroundsEntry422[1] = {
{0x22b1, 0x0},
};

const GpuControlList::More kMoreForEntry422_619971032 = {
GpuControlList::kGLTypeNone,  // gl_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
GpuControlList::kDontCare,  // hardware_overlay
0,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

const int kFeatureListForWorkaroundsEntry423[1] = {
DISABLE_WEBGPU_SHARED_IMAGES,
};

const GpuControlList::Device kDevicesForWorkaroundsEntry423[2] = {
{0x9802, 0x0},
{0x9834, 0x0},
};

const GpuControlList::More kMoreForEntry423_619971032 = {
GpuControlList::kGLTypeNone,  // gl_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
GpuControlList::kDontCare,  // hardware_overlay
0,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

}  // namespace gpu

#endif  // GPU_CONFIG_GPU_DRIVER_BUG_LIST_ARRAYS_AND_STRUCTS_AUTOGEN_H_
