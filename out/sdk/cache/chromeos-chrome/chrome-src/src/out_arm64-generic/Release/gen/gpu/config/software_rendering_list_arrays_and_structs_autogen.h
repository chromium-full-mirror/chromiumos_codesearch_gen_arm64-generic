// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is auto-generated from
//    gpu/config/process_json.py
// It's formatted by clang-format using chromium coding style:
//    clang-format -i -style=chromium filename
// DO NOT EDIT!

#ifndef GPU_CONFIG_SOFTWARE_RENDERING_LIST_ARRAYS_AND_STRUCTS_AUTOGEN_H_
#define GPU_CONFIG_SOFTWARE_RENDERING_LIST_ARRAYS_AND_STRUCTS_AUTOGEN_H_

#include "gpu/config/gpu_feature_type.h"

namespace gpu {
const int kFeatureListForSoftwareEntry4[2] = {
GPU_FEATURE_TYPE_ACCELERATED_WEBGL,
GPU_FEATURE_TYPE_ACCELERATED_2D_CANVAS,
};

const uint32_t kCrBugsForSoftwareEntry4[1] = {
232035,
};

const GpuControlList::Device kDevicesForSoftwareEntry4[2] = {
{0x27AE, 0x0},
{0x27A2, 0x0},
};

const GpuControlList::More kMoreForEntry4_1043157500 = {
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

const int kFeatureListForSoftwareEntry8[12] = {
GPU_FEATURE_TYPE_ACCELERATED_2D_CANVAS,
GPU_FEATURE_TYPE_ACCELERATED_WEBGL,
GPU_FEATURE_TYPE_ACCELERATED_VIDEO_DECODE,
GPU_FEATURE_TYPE_ACCELERATED_VIDEO_ENCODE,
GPU_FEATURE_TYPE_GPU_TILE_RASTERIZATION,
GPU_FEATURE_TYPE_ACCELERATED_WEBGL2,
GPU_FEATURE_TYPE_ANDROID_SURFACE_CONTROL,
GPU_FEATURE_TYPE_ACCELERATED_GL,
GPU_FEATURE_TYPE_VULKAN,
GPU_FEATURE_TYPE_CANVAS_OOP_RASTERIZATION,
GPU_FEATURE_TYPE_ACCELERATED_WEBGPU,
GPU_FEATURE_TYPE_SKIA_GRAPHITE,
};

const uint32_t kCrBugsForSoftwareEntry8[1] = {
72938,
};

const GpuControlList::Device kDevicesForSoftwareEntry8[1] = {
{0x0324, 0x0},
};

const GpuControlList::More kMoreForEntry8_1043157500 = {
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

const int kFeatureListForSoftwareEntry137[1] = {
GPU_FEATURE_TYPE_GPU_TILE_RASTERIZATION,
};

const uint32_t kCrBugsForSoftwareEntry137[3] = {
684094,
996858,
1020500,
};

const GpuControlList::More kMoreForEntry137_1043157500 = {
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

const GpuControlList::More kMoreForEntry137_1043157500Exception0 = {
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

const GpuControlList::GLStrings kGLStringsForSoftwareEntry137Exception1 = {
"freedreno",
nullptr,
nullptr,
nullptr,
};

const GpuControlList::More kMoreForEntry137_1043157500Exception1 = {
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

const GpuControlList::GLStrings kGLStringsForSoftwareEntry137Exception2 = {
nullptr,
"Mali-T8.*",
nullptr,
nullptr,
};

const GpuControlList::More kMoreForEntry137_1043157500Exception2 = {
GpuControlList::kGLTypeNone,  // gl_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
GpuControlList::kDontCare,  // hardware_overlay
0,  // test_group
GpuControlList::kUnsupported,  // subpixel_font_rendering
};

const GpuControlList::GLStrings kGLStringsForSoftwareEntry137Exception3 = {
nullptr,
"Mali-G.*",
nullptr,
nullptr,
};

const GpuControlList::More kMoreForEntry137_1043157500Exception3 = {
GpuControlList::kGLTypeNone,  // gl_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
GpuControlList::kDontCare,  // hardware_overlay
0,  // test_group
GpuControlList::kUnsupported,  // subpixel_font_rendering
};

const GpuControlList::GLStrings kGLStringsForSoftwareEntry137Exception4 = {
nullptr,
"PowerVR.*",
nullptr,
nullptr,
};

const GpuControlList::More kMoreForEntry137_1043157500Exception4 = {
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

const GpuControlList::More kMoreForEntry137_1043157500Exception5 = {
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

const int kFeatureListForSoftwareEntry152[10] = {
GPU_FEATURE_TYPE_ACCELERATED_2D_CANVAS,
GPU_FEATURE_TYPE_ACCELERATED_VIDEO_DECODE,
GPU_FEATURE_TYPE_ACCELERATED_VIDEO_ENCODE,
GPU_FEATURE_TYPE_GPU_TILE_RASTERIZATION,
GPU_FEATURE_TYPE_ACCELERATED_WEBGL2,
GPU_FEATURE_TYPE_ANDROID_SURFACE_CONTROL,
GPU_FEATURE_TYPE_VULKAN,
GPU_FEATURE_TYPE_CANVAS_OOP_RASTERIZATION,
GPU_FEATURE_TYPE_ACCELERATED_WEBGPU,
GPU_FEATURE_TYPE_SKIA_GRAPHITE,
};

const GpuControlList::More kMoreForEntry152_1043157500 = {
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

const int kFeatureListForSoftwareEntry153[1] = {
GPU_FEATURE_TYPE_ACCELERATED_WEBGL,
};

const GpuControlList::More kMoreForEntry153_1043157500 = {
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

const int kFeatureListForSoftwareEntry174[1] = {
GPU_FEATURE_TYPE_ACCELERATED_2D_CANVAS,
};

const GpuControlList::Device kDevicesForSoftwareEntry174[5] = {
{0x0a16, 0x0},
{0x0a1e, 0x0},
{0x0d26, 0x0},
{0x0a06, 0x0},
{0x0a26, 0x0},
};

const GpuControlList::More kMoreForEntry174_1043157500 = {
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

const int kFeatureListForSoftwareEntry178[1] = {
GPU_FEATURE_TYPE_ACCELERATED_VIDEO_DECODE,
};

const GpuControlList::DriverInfo kDriverInfoForSoftwareEntry178 = {
"Mesa",  // driver_vendor
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // driver_version
};

const GpuControlList::GLStrings kGLStringsForSoftwareEntry178 = {
"Intel.*",
nullptr,
nullptr,
nullptr,
};

const GpuControlList::More kMoreForEntry178_1043157500 = {
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

#endif  // GPU_CONFIG_SOFTWARE_RENDERING_LIST_ARRAYS_AND_STRUCTS_AUTOGEN_H_
