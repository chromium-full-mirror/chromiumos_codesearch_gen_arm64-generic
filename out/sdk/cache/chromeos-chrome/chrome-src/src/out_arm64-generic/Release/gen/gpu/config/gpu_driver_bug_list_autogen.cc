// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is auto-generated from
//    gpu/config/process_json.py
// It's formatted by clang-format using chromium coding style:
//    clang-format -i -style=chromium filename
// DO NOT EDIT!

#include "gpu/config/gpu_driver_bug_list_autogen.h"

#include <iterator>

#include "gpu/config/gpu_driver_bug_list_arrays_and_structs_autogen.h"
#include "gpu/config/gpu_driver_bug_list_exceptions_autogen.h"

namespace gpu {

const GpuControlList::Entry kGpuDriverBugListEntries[] = {
{
19,  // id
"Disable depth textures on older Adreno 2xx Qualcomm GPUs (legacy blocklist entry, original problem unclear)",
std::size(kFeatureListForWorkaroundsEntry19),  // features size
kFeatureListForWorkaroundsEntry19,  // features
std::size(kDisabledExtensionsForEntry19),  // DisabledExtensions size
kDisabledExtensionsForEntry19,  // DisabledExtensions
0,  // DisabledWebGLExtensions size
nullptr,  // DisabledWebGLExtensions
std::size(kCrBugsForWorkaroundsEntry19),  // CrBugs size
kCrBugsForWorkaroundsEntry19,  // CrBugs
{
GpuControlList::kOsAny,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
0,  // Devices size
nullptr,  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry19,  // GL strings
nullptr,  // machine model info
0,  // intel_gpu_series size
nullptr,  // intel_gpu_series
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // intel_gpu_generation
&kMoreForEntry19_619971032,  // more data
},
0,  // exceptions count
nullptr,  // exceptions
},
{
23,  // id
"Disable OES_standard_derivative on Intel Pineview M Gallium drivers",
0,  // feature size
nullptr,  // features
std::size(kDisabledExtensionsForEntry23),  // DisabledExtensions size
kDisabledExtensionsForEntry23,  // DisabledExtensions
0,  // DisabledWebGLExtensions size
nullptr,  // DisabledWebGLExtensions
std::size(kCrBugsForWorkaroundsEntry23),  // CrBugs size
kCrBugsForWorkaroundsEntry23,  // CrBugs
{
GpuControlList::kOsChromeOS,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x8086,  // vendor_id
std::size(kDevicesForWorkaroundsEntry23),  // Devices size
kDevicesForWorkaroundsEntry23,  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
nullptr,  // GL strings
nullptr,  // machine model info
0,  // intel_gpu_series size
nullptr,  // intel_gpu_series
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // intel_gpu_generation
&kMoreForEntry23_619971032,  // more data
},
0,  // exceptions count
nullptr,  // exceptions
},
{
31,  // id
"The Mali-3xx/4xx/Txxx driver does not guarantee flush ordering",
std::size(kFeatureListForWorkaroundsEntry31),  // features size
kFeatureListForWorkaroundsEntry31,  // features
0,  // DisabledExtensions size
nullptr,  // DisabledExtensions
0,  // DisabledWebGLExtensions size
nullptr,  // DisabledWebGLExtensions
std::size(kCrBugsForWorkaroundsEntry31),  // CrBugs size
kCrBugsForWorkaroundsEntry31,  // CrBugs
{
GpuControlList::kOsAny,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
0,  // Devices size
nullptr,  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry31,  // GL strings
nullptr,  // machine model info
0,  // intel_gpu_series size
nullptr,  // intel_gpu_series
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // intel_gpu_generation
&kMoreForEntry31_619971032,  // more data
},
0,  // exceptions count
nullptr,  // exceptions
},
{
33,  // id
"Share group-related crashes and poor context switching perf on Imagination drivers",
std::size(kFeatureListForWorkaroundsEntry33),  // features size
kFeatureListForWorkaroundsEntry33,  // features
0,  // DisabledExtensions size
nullptr,  // DisabledExtensions
0,  // DisabledWebGLExtensions size
nullptr,  // DisabledWebGLExtensions
0,  // CrBugs size
nullptr,  // CrBugs
{
GpuControlList::kOsAny,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
0,  // Devices size
nullptr,  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry33,  // GL strings
nullptr,  // machine model info
0,  // intel_gpu_series size
nullptr,  // intel_gpu_series
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // intel_gpu_generation
&kMoreForEntry33_619971032,  // more data
},
0,  // exceptions count
nullptr,  // exceptions
},
{
44,  // id
"Framebuffer discarding causes jumpy scrolling on Mali drivers",
std::size(kFeatureListForWorkaroundsEntry44),  // features size
kFeatureListForWorkaroundsEntry44,  // features
0,  // DisabledExtensions size
nullptr,  // DisabledExtensions
0,  // DisabledWebGLExtensions size
nullptr,  // DisabledWebGLExtensions
std::size(kCrBugsForWorkaroundsEntry44),  // CrBugs size
kCrBugsForWorkaroundsEntry44,  // CrBugs
{
GpuControlList::kOsChromeOS,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
0,  // Devices size
nullptr,  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry44,  // GL strings
nullptr,  // machine model info
0,  // intel_gpu_series size
nullptr,  // intel_gpu_series
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // intel_gpu_generation
&kMoreForEntry44_619971032,  // more data
},
0,  // exceptions count
nullptr,  // exceptions
},
{
56,  // id
"Mesa drivers in ChromeOS handle varyings without static use incorrectly",
std::size(kFeatureListForWorkaroundsEntry56),  // features size
kFeatureListForWorkaroundsEntry56,  // features
0,  // DisabledExtensions size
nullptr,  // DisabledExtensions
0,  // DisabledWebGLExtensions size
nullptr,  // DisabledWebGLExtensions
std::size(kCrBugsForWorkaroundsEntry56),  // CrBugs size
kCrBugsForWorkaroundsEntry56,  // CrBugs
{
GpuControlList::kOsChromeOS,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
0,  // Devices size
nullptr,  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
&kDriverInfoForWorkaroundsEntry56,  // driver info
nullptr,  // GL strings
nullptr,  // machine model info
0,  // intel_gpu_series size
nullptr,  // intel_gpu_series
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // intel_gpu_generation
&kMoreForEntry56_619971032,  // more data
},
0,  // exceptions count
nullptr,  // exceptions
},
{
132,  // id
"On Intel GPUs MSAA performance is not acceptable for GPU rasterization",
std::size(kFeatureListForWorkaroundsEntry132),  // features size
kFeatureListForWorkaroundsEntry132,  // features
0,  // DisabledExtensions size
nullptr,  // DisabledExtensions
0,  // DisabledWebGLExtensions size
nullptr,  // DisabledWebGLExtensions
std::size(kCrBugsForWorkaroundsEntry132),  // CrBugs size
kCrBugsForWorkaroundsEntry132,  // CrBugs
{
GpuControlList::kOsAny,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x8086,  // vendor_id
0,  // Devices size
nullptr,  // Devices
GpuControlList::kMultiGpuCategoryActive,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
nullptr,  // GL strings
nullptr,  // machine model info
0,  // intel_gpu_series size
nullptr,  // intel_gpu_series
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // intel_gpu_generation
&kMoreForEntry132_619971032,  // more data
},
std::size(kExceptionsForEntry132),  // exceptions count
kExceptionsForEntry132,  // exceptions
},
{
161,  // id
"Framebuffer discarding not useful on NVIDIA Kepler architecture and later",
std::size(kFeatureListForWorkaroundsEntry161),  // features size
kFeatureListForWorkaroundsEntry161,  // features
0,  // DisabledExtensions size
nullptr,  // DisabledExtensions
0,  // DisabledWebGLExtensions size
nullptr,  // DisabledWebGLExtensions
std::size(kCrBugsForWorkaroundsEntry161),  // CrBugs size
kCrBugsForWorkaroundsEntry161,  // CrBugs
{
GpuControlList::kOsChromeOS,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x10de,  // vendor_id
0,  // Devices size
nullptr,  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry161,  // GL strings
nullptr,  // machine model info
0,  // intel_gpu_series size
nullptr,  // intel_gpu_series
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // intel_gpu_generation
&kMoreForEntry161_619971032,  // more data
},
0,  // exceptions count
nullptr,  // exceptions
},
{
165,  // id
"Unpacking overlapping rows from unpack buffers is unstable on NVIDIA GL driver",
std::size(kFeatureListForWorkaroundsEntry165),  // features size
kFeatureListForWorkaroundsEntry165,  // features
0,  // DisabledExtensions size
nullptr,  // DisabledExtensions
0,  // DisabledWebGLExtensions size
nullptr,  // DisabledWebGLExtensions
std::size(kCrBugsForWorkaroundsEntry165),  // CrBugs size
kCrBugsForWorkaroundsEntry165,  // CrBugs
{
GpuControlList::kOsAny,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
0,  // Devices size
nullptr,  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry165,  // GL strings
nullptr,  // machine model info
0,  // intel_gpu_series size
nullptr,  // intel_gpu_series
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // intel_gpu_generation
&kMoreForEntry165_619971032,  // more data
},
0,  // exceptions count
nullptr,  // exceptions
},
{
192,  // id
"Decode and encode before generateMipmap for srgb format textures on os except macosx",
std::size(kFeatureListForWorkaroundsEntry192),  // features size
kFeatureListForWorkaroundsEntry192,  // features
0,  // DisabledExtensions size
nullptr,  // DisabledExtensions
0,  // DisabledWebGLExtensions size
nullptr,  // DisabledWebGLExtensions
std::size(kCrBugsForWorkaroundsEntry192),  // CrBugs size
kCrBugsForWorkaroundsEntry192,  // CrBugs
{
GpuControlList::kOsAny,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
0,  // Devices size
nullptr,  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
nullptr,  // GL strings
nullptr,  // machine model info
0,  // intel_gpu_series size
nullptr,  // intel_gpu_series
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // intel_gpu_generation
&kMoreForEntry192_619971032,  // more data
},
std::size(kExceptionsForEntry192),  // exceptions count
kExceptionsForEntry192,  // exceptions
},
{
206,  // id
"Disable KHR_blend_equation_advanced until cc shaders are updated",
0,  // feature size
nullptr,  // features
std::size(kDisabledExtensionsForEntry206),  // DisabledExtensions size
kDisabledExtensionsForEntry206,  // DisabledExtensions
0,  // DisabledWebGLExtensions size
nullptr,  // DisabledWebGLExtensions
std::size(kCrBugsForWorkaroundsEntry206),  // CrBugs size
kCrBugsForWorkaroundsEntry206,  // CrBugs
{
GpuControlList::kOsAny,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
0,  // Devices size
nullptr,  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
nullptr,  // GL strings
nullptr,  // machine model info
0,  // intel_gpu_series size
nullptr,  // intel_gpu_series
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // intel_gpu_generation
&kMoreForEntry206_619971032,  // more data
},
0,  // exceptions count
nullptr,  // exceptions
},
{
209,  // id
"Decode and Encode before generateMipmap for srgb format textures on Chromeos Intel",
std::size(kFeatureListForWorkaroundsEntry209),  // features size
kFeatureListForWorkaroundsEntry209,  // features
0,  // DisabledExtensions size
nullptr,  // DisabledExtensions
0,  // DisabledWebGLExtensions size
nullptr,  // DisabledWebGLExtensions
std::size(kCrBugsForWorkaroundsEntry209),  // CrBugs size
kCrBugsForWorkaroundsEntry209,  // CrBugs
{
GpuControlList::kOsChromeOS,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x8086,  // vendor_id
0,  // Devices size
nullptr,  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
nullptr,  // GL strings
nullptr,  // machine model info
0,  // intel_gpu_series size
nullptr,  // intel_gpu_series
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // intel_gpu_generation
&kMoreForEntry209_619971032,  // more data
},
0,  // exceptions count
nullptr,  // exceptions
},
{
213,  // id
"The Mali-Gxx driver does not guarantee flush ordering",
std::size(kFeatureListForWorkaroundsEntry213),  // features size
kFeatureListForWorkaroundsEntry213,  // features
0,  // DisabledExtensions size
nullptr,  // DisabledExtensions
0,  // DisabledWebGLExtensions size
nullptr,  // DisabledWebGLExtensions
std::size(kCrBugsForWorkaroundsEntry213),  // CrBugs size
kCrBugsForWorkaroundsEntry213,  // CrBugs
{
GpuControlList::kOsAny,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
0,  // Devices size
nullptr,  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry213,  // GL strings
nullptr,  // machine model info
0,  // intel_gpu_series size
nullptr,  // intel_gpu_series
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // intel_gpu_generation
&kMoreForEntry213_619971032,  // more data
},
0,  // exceptions count
nullptr,  // exceptions
},
{
215,  // id
"Fake no-op GPU driver bug workaround for testing",
std::size(kFeatureListForWorkaroundsEntry215),  // features size
kFeatureListForWorkaroundsEntry215,  // features
0,  // DisabledExtensions size
nullptr,  // DisabledExtensions
0,  // DisabledWebGLExtensions size
nullptr,  // DisabledWebGLExtensions
std::size(kCrBugsForWorkaroundsEntry215),  // CrBugs size
kCrBugsForWorkaroundsEntry215,  // CrBugs
{
GpuControlList::kOsAny,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
0,  // Devices size
nullptr,  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
nullptr,  // GL strings
nullptr,  // machine model info
0,  // intel_gpu_series size
nullptr,  // intel_gpu_series
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // intel_gpu_generation
&kMoreForEntry215_619971032,  // more data
},
0,  // exceptions count
nullptr,  // exceptions
},
{
235,  // id
"Avoid waiting on a egl fence before pageflipping and rely on implicit sync.",
std::size(kFeatureListForWorkaroundsEntry235),  // features size
kFeatureListForWorkaroundsEntry235,  // features
0,  // DisabledExtensions size
nullptr,  // DisabledExtensions
0,  // DisabledWebGLExtensions size
nullptr,  // DisabledWebGLExtensions
std::size(kCrBugsForWorkaroundsEntry235),  // CrBugs size
kCrBugsForWorkaroundsEntry235,  // CrBugs
{
GpuControlList::kOsChromeOS,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
0,  // Devices size
nullptr,  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry235,  // GL strings
nullptr,  // machine model info
0,  // intel_gpu_series size
nullptr,  // intel_gpu_series
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // intel_gpu_generation
&kMoreForEntry235_619971032,  // more data
},
0,  // exceptions count
nullptr,  // exceptions
},
{
243,  // id
"Program binaries don't contain transform feedback varyings on Mali GPUs",
std::size(kFeatureListForWorkaroundsEntry243),  // features size
kFeatureListForWorkaroundsEntry243,  // features
0,  // DisabledExtensions size
nullptr,  // DisabledExtensions
0,  // DisabledWebGLExtensions size
nullptr,  // DisabledWebGLExtensions
std::size(kCrBugsForWorkaroundsEntry243),  // CrBugs size
kCrBugsForWorkaroundsEntry243,  // CrBugs
{
GpuControlList::kOsChromeOS,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
0,  // Devices size
nullptr,  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry243,  // GL strings
nullptr,  // machine model info
0,  // intel_gpu_series size
nullptr,  // intel_gpu_series
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // intel_gpu_generation
&kMoreForEntry243_619971032,  // more data
},
0,  // exceptions count
nullptr,  // exceptions
},
{
254,  // id
"Limit MSAA quality samples to 4 and storage samples 2 on AMD Stoney",
std::size(kFeatureListForWorkaroundsEntry254),  // features size
kFeatureListForWorkaroundsEntry254,  // features
0,  // DisabledExtensions size
nullptr,  // DisabledExtensions
0,  // DisabledWebGLExtensions size
nullptr,  // DisabledWebGLExtensions
std::size(kCrBugsForWorkaroundsEntry254),  // CrBugs size
kCrBugsForWorkaroundsEntry254,  // CrBugs
{
GpuControlList::kOsChromeOS,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x1002,  // vendor_id
std::size(kDevicesForWorkaroundsEntry254),  // Devices size
kDevicesForWorkaroundsEntry254,  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
nullptr,  // GL strings
nullptr,  // machine model info
0,  // intel_gpu_series size
nullptr,  // intel_gpu_series
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // intel_gpu_generation
&kMoreForEntry254_619971032,  // more data
},
0,  // exceptions count
nullptr,  // exceptions
},
{
256,  // id
"Expose WebGL's disjoint_timer_query extensions on platforms with site isolation",
std::size(kFeatureListForWorkaroundsEntry256),  // features size
kFeatureListForWorkaroundsEntry256,  // features
0,  // DisabledExtensions size
nullptr,  // DisabledExtensions
0,  // DisabledWebGLExtensions size
nullptr,  // DisabledWebGLExtensions
std::size(kCrBugsForWorkaroundsEntry256),  // CrBugs size
kCrBugsForWorkaroundsEntry256,  // CrBugs
{
GpuControlList::kOsAny,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
0,  // Devices size
nullptr,  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
nullptr,  // GL strings
nullptr,  // machine model info
0,  // intel_gpu_series size
nullptr,  // intel_gpu_series
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // intel_gpu_generation
&kMoreForEntry256_619971032,  // more data
},
std::size(kExceptionsForEntry256),  // exceptions count
kExceptionsForEntry256,  // exceptions
},
{
257,  // id
"Fake entry for testing disabling of WebGL extensions",
0,  // feature size
nullptr,  // features
0,  // DisabledExtensions size
nullptr,  // DisabledExtensions
std::size(kDisabledWebGLExtensionsForEntry257),  // DisabledWebGLExtensions size
kDisabledWebGLExtensionsForEntry257,  // DisabledWebGLExtensions
std::size(kCrBugsForWorkaroundsEntry257),  // CrBugs size
kCrBugsForWorkaroundsEntry257,  // CrBugs
{
GpuControlList::kOsAny,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
0,  // Devices size
nullptr,  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
nullptr,  // GL strings
nullptr,  // machine model info
0,  // intel_gpu_series size
nullptr,  // intel_gpu_series
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // intel_gpu_generation
&kMoreForEntry257_619971032,  // more data
},
0,  // exceptions count
nullptr,  // exceptions
},
{
289,  // id
"Fake entry for testing command buffer init failures on ES 2.0",
std::size(kFeatureListForWorkaroundsEntry289),  // features size
kFeatureListForWorkaroundsEntry289,  // features
0,  // DisabledExtensions size
nullptr,  // DisabledExtensions
0,  // DisabledWebGLExtensions size
nullptr,  // DisabledWebGLExtensions
std::size(kCrBugsForWorkaroundsEntry289),  // CrBugs size
kCrBugsForWorkaroundsEntry289,  // CrBugs
{
GpuControlList::kOsAny,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
0,  // Devices size
nullptr,  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
nullptr,  // GL strings
nullptr,  // machine model info
0,  // intel_gpu_series size
nullptr,  // intel_gpu_series
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // intel_gpu_generation
&kMoreForEntry289_619971032,  // more data
},
0,  // exceptions count
nullptr,  // exceptions
},
{
307,  // id
"Workaround for broken EGL_IMAGE_EXTERNAL_FLUSH_EXT implementation on NVIDIA",
std::size(kFeatureListForWorkaroundsEntry307),  // features size
kFeatureListForWorkaroundsEntry307,  // features
0,  // DisabledExtensions size
nullptr,  // DisabledExtensions
0,  // DisabledWebGLExtensions size
nullptr,  // DisabledWebGLExtensions
std::size(kCrBugsForWorkaroundsEntry307),  // CrBugs size
kCrBugsForWorkaroundsEntry307,  // CrBugs
{
GpuControlList::kOsChromeOS,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
0,  // Devices size
nullptr,  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry307,  // GL strings
nullptr,  // machine model info
0,  // intel_gpu_series size
nullptr,  // intel_gpu_series
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // intel_gpu_generation
&kMoreForEntry307_619971032,  // more data
},
0,  // exceptions count
nullptr,  // exceptions
},
{
313,  // id
"Context lost recovery often fails on PowerVR on CrOS.",
std::size(kFeatureListForWorkaroundsEntry313),  // features size
kFeatureListForWorkaroundsEntry313,  // features
0,  // DisabledExtensions size
nullptr,  // DisabledExtensions
0,  // DisabledWebGLExtensions size
nullptr,  // DisabledWebGLExtensions
std::size(kCrBugsForWorkaroundsEntry313),  // CrBugs size
kCrBugsForWorkaroundsEntry313,  // CrBugs
{
GpuControlList::kOsChromeOS,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
0,  // Devices size
nullptr,  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry313,  // GL strings
nullptr,  // machine model info
0,  // intel_gpu_series size
nullptr,  // intel_gpu_series
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // intel_gpu_generation
&kMoreForEntry313_619971032,  // more data
},
0,  // exceptions count
nullptr,  // exceptions
},
{
315,  // id
"Disable GL_MESA_framebuffer_flip_y for desktop GL",
0,  // feature size
nullptr,  // features
std::size(kDisabledExtensionsForEntry315),  // DisabledExtensions size
kDisabledExtensionsForEntry315,  // DisabledExtensions
0,  // DisabledWebGLExtensions size
nullptr,  // DisabledWebGLExtensions
std::size(kCrBugsForWorkaroundsEntry315),  // CrBugs size
kCrBugsForWorkaroundsEntry315,  // CrBugs
{
GpuControlList::kOsAny,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
0,  // Devices size
nullptr,  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
nullptr,  // GL strings
nullptr,  // machine model info
0,  // intel_gpu_series size
nullptr,  // intel_gpu_series
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // intel_gpu_generation
&kMoreForEntry315_619971032,  // more data
},
0,  // exceptions count
nullptr,  // exceptions
},
{
316,  // id
"Limit MSAA to 4x on ChromeOS for Intel",
std::size(kFeatureListForWorkaroundsEntry316),  // features size
kFeatureListForWorkaroundsEntry316,  // features
0,  // DisabledExtensions size
nullptr,  // DisabledExtensions
0,  // DisabledWebGLExtensions size
nullptr,  // DisabledWebGLExtensions
std::size(kCrBugsForWorkaroundsEntry316),  // CrBugs size
kCrBugsForWorkaroundsEntry316,  // CrBugs
{
GpuControlList::kOsChromeOS,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
0,  // Devices size
nullptr,  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
&kDriverInfoForWorkaroundsEntry316,  // driver info
&kGLStringsForWorkaroundsEntry316,  // GL strings
nullptr,  // machine model info
0,  // intel_gpu_series size
nullptr,  // intel_gpu_series
{GpuControlList::kGE, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "9", nullptr},  // intel_gpu_generation
&kMoreForEntry316_619971032,  // more data
},
0,  // exceptions count
nullptr,  // exceptions
},
{
317,  // id
"Limit MSAA to 2x on older Intel GPU generations on ChromeOS",
std::size(kFeatureListForWorkaroundsEntry317),  // features size
kFeatureListForWorkaroundsEntry317,  // features
0,  // DisabledExtensions size
nullptr,  // DisabledExtensions
0,  // DisabledWebGLExtensions size
nullptr,  // DisabledWebGLExtensions
std::size(kCrBugsForWorkaroundsEntry317),  // CrBugs size
kCrBugsForWorkaroundsEntry317,  // CrBugs
{
GpuControlList::kOsChromeOS,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
0,  // Devices size
nullptr,  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
&kDriverInfoForWorkaroundsEntry317,  // driver info
&kGLStringsForWorkaroundsEntry317,  // GL strings
nullptr,  // machine model info
0,  // intel_gpu_series size
nullptr,  // intel_gpu_series
{GpuControlList::kLT, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "9", nullptr},  // intel_gpu_generation
&kMoreForEntry317_619971032,  // more data
},
0,  // exceptions count
nullptr,  // exceptions
},
{
369,  // id
"Limit MSAA quality samples to 4 and storage samples 2 on Pollock",
std::size(kFeatureListForWorkaroundsEntry369),  // features size
kFeatureListForWorkaroundsEntry369,  // features
0,  // DisabledExtensions size
nullptr,  // DisabledExtensions
0,  // DisabledWebGLExtensions size
nullptr,  // DisabledWebGLExtensions
std::size(kCrBugsForWorkaroundsEntry369),  // CrBugs size
kCrBugsForWorkaroundsEntry369,  // CrBugs
{
GpuControlList::kOsChromeOS,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x1002,  // vendor_id
std::size(kDevicesForWorkaroundsEntry369),  // Devices size
kDevicesForWorkaroundsEntry369,  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
nullptr,  // GL strings
nullptr,  // machine model info
0,  // intel_gpu_series size
nullptr,  // intel_gpu_series
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // intel_gpu_generation
&kMoreForEntry369_619971032,  // more data
},
0,  // exceptions count
nullptr,  // exceptions
},
{
370,  // id
"Context loss recovery often fails on Chrome OS",
std::size(kFeatureListForWorkaroundsEntry370),  // features size
kFeatureListForWorkaroundsEntry370,  // features
0,  // DisabledExtensions size
nullptr,  // DisabledExtensions
0,  // DisabledWebGLExtensions size
nullptr,  // DisabledWebGLExtensions
std::size(kCrBugsForWorkaroundsEntry370),  // CrBugs size
kCrBugsForWorkaroundsEntry370,  // CrBugs
{
GpuControlList::kOsChromeOS,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
0,  // Devices size
nullptr,  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
nullptr,  // GL strings
nullptr,  // machine model info
0,  // intel_gpu_series size
nullptr,  // intel_gpu_series
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // intel_gpu_generation
&kMoreForEntry370_619971032,  // more data
},
0,  // exceptions count
nullptr,  // exceptions
},
{
373,  // id
"VP9 Profile 2 HW decoding on Qualcomm SC7180 is broken",
std::size(kFeatureListForWorkaroundsEntry373),  // features size
kFeatureListForWorkaroundsEntry373,  // features
0,  // DisabledExtensions size
nullptr,  // DisabledExtensions
0,  // DisabledWebGLExtensions size
nullptr,  // DisabledWebGLExtensions
std::size(kCrBugsForWorkaroundsEntry373),  // CrBugs size
kCrBugsForWorkaroundsEntry373,  // CrBugs
{
GpuControlList::kOsChromeOS,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
0,  // Devices size
nullptr,  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry373,  // GL strings
nullptr,  // machine model info
0,  // intel_gpu_series size
nullptr,  // intel_gpu_series
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // intel_gpu_generation
&kMoreForEntry373_619971032,  // more data
},
0,  // exceptions count
nullptr,  // exceptions
},
{
379,  // id
"Disable VP9 HW encode on Intel Gen 9.5 SoCs using the i965 VA driver backend",
std::size(kFeatureListForWorkaroundsEntry379),  // features size
kFeatureListForWorkaroundsEntry379,  // features
0,  // DisabledExtensions size
nullptr,  // DisabledExtensions
0,  // DisabledWebGLExtensions size
nullptr,  // DisabledWebGLExtensions
std::size(kCrBugsForWorkaroundsEntry379),  // CrBugs size
kCrBugsForWorkaroundsEntry379,  // CrBugs
{
GpuControlList::kOsChromeOS,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x8086,  // vendor_id
0,  // Devices size
nullptr,  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
nullptr,  // GL strings
nullptr,  // machine model info
std::size(kIntelGpuSeriesForEntry379),  // intel_gpu_series size
kIntelGpuSeriesForEntry379,  // intel_gpu_series
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // intel_gpu_generation
&kMoreForEntry379_619971032,  // more data
},
0,  // exceptions count
nullptr,  // exceptions
},
{
381,  // id
"Check if egl fences are already signalled before waiting them on the i965 driver",
std::size(kFeatureListForWorkaroundsEntry381),  // features size
kFeatureListForWorkaroundsEntry381,  // features
0,  // DisabledExtensions size
nullptr,  // DisabledExtensions
0,  // DisabledWebGLExtensions size
nullptr,  // DisabledWebGLExtensions
std::size(kCrBugsForWorkaroundsEntry381),  // CrBugs size
kCrBugsForWorkaroundsEntry381,  // CrBugs
{
GpuControlList::kOsChromeOS,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
0,  // Devices size
nullptr,  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
&kDriverInfoForWorkaroundsEntry381,  // driver info
&kGLStringsForWorkaroundsEntry381,  // GL strings
nullptr,  // machine model info
0,  // intel_gpu_series size
nullptr,  // intel_gpu_series
{GpuControlList::kGE, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "4", nullptr},  // intel_gpu_generation
&kMoreForEntry381_619971032,  // more data
},
0,  // exceptions count
nullptr,  // exceptions
},
{
389,  // id
"Avoid waiting on a egl fence before pageflipping and rely on implicit sync.",
std::size(kFeatureListForWorkaroundsEntry389),  // features size
kFeatureListForWorkaroundsEntry389,  // features
0,  // DisabledExtensions size
nullptr,  // DisabledExtensions
0,  // DisabledWebGLExtensions size
nullptr,  // DisabledWebGLExtensions
0,  // CrBugs size
nullptr,  // CrBugs
{
GpuControlList::kOsChromeOS,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
0,  // Devices size
nullptr,  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry389,  // GL strings
nullptr,  // machine model info
0,  // intel_gpu_series size
nullptr,  // intel_gpu_series
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // intel_gpu_generation
&kMoreForEntry389_619971032,  // more data
},
0,  // exceptions count
nullptr,  // exceptions
},
{
393,  // id
"GL Contexts heavy / exhaust resources",
std::size(kFeatureListForWorkaroundsEntry393),  // features size
kFeatureListForWorkaroundsEntry393,  // features
0,  // DisabledExtensions size
nullptr,  // DisabledExtensions
0,  // DisabledWebGLExtensions size
nullptr,  // DisabledWebGLExtensions
0,  // CrBugs size
nullptr,  // CrBugs
{
GpuControlList::kOsChromeOS,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
0,  // Devices size
nullptr,  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry393,  // GL strings
nullptr,  // machine model info
0,  // intel_gpu_series size
nullptr,  // intel_gpu_series
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // intel_gpu_generation
&kMoreForEntry393_619971032,  // more data
},
0,  // exceptions count
nullptr,  // exceptions
},
{
398,  // id
"On pre-Ice Lake Intel GPUs MSAA performance is not acceptable for GPU rasterization",
std::size(kFeatureListForWorkaroundsEntry398),  // features size
kFeatureListForWorkaroundsEntry398,  // features
0,  // DisabledExtensions size
nullptr,  // DisabledExtensions
0,  // DisabledWebGLExtensions size
nullptr,  // DisabledWebGLExtensions
std::size(kCrBugsForWorkaroundsEntry398),  // CrBugs size
kCrBugsForWorkaroundsEntry398,  // CrBugs
{
GpuControlList::kOsAny,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x8086,  // vendor_id
0,  // Devices size
nullptr,  // Devices
GpuControlList::kMultiGpuCategoryActive,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
nullptr,  // GL strings
nullptr,  // machine model info
0,  // intel_gpu_series size
nullptr,  // intel_gpu_series
{GpuControlList::kLT, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "11", nullptr},  // intel_gpu_generation
&kMoreForEntry398_619971032,  // more data
},
std::size(kExceptionsForEntry398),  // exceptions count
kExceptionsForEntry398,  // exceptions
},
{
400,  // id
"Freedreno driver crashes when importing same dma-buf to two different gl textures",
std::size(kFeatureListForWorkaroundsEntry400),  // features size
kFeatureListForWorkaroundsEntry400,  // features
0,  // DisabledExtensions size
nullptr,  // DisabledExtensions
0,  // DisabledWebGLExtensions size
nullptr,  // DisabledWebGLExtensions
std::size(kCrBugsForWorkaroundsEntry400),  // CrBugs size
kCrBugsForWorkaroundsEntry400,  // CrBugs
{
GpuControlList::kOsChromeOS,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
0,  // Devices size
nullptr,  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry400,  // GL strings
nullptr,  // machine model info
0,  // intel_gpu_series size
nullptr,  // intel_gpu_series
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // intel_gpu_generation
&kMoreForEntry400_619971032,  // more data
},
0,  // exceptions count
nullptr,  // exceptions
},
{
402,  // id
"Mali driver disregards fences when importing same dma-buf to two different gl textures",
std::size(kFeatureListForWorkaroundsEntry402),  // features size
kFeatureListForWorkaroundsEntry402,  // features
0,  // DisabledExtensions size
nullptr,  // DisabledExtensions
0,  // DisabledWebGLExtensions size
nullptr,  // DisabledWebGLExtensions
std::size(kCrBugsForWorkaroundsEntry402),  // CrBugs size
kCrBugsForWorkaroundsEntry402,  // CrBugs
{
GpuControlList::kOsChromeOS,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
0,  // Devices size
nullptr,  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry402,  // GL strings
nullptr,  // machine model info
0,  // intel_gpu_series size
nullptr,  // intel_gpu_series
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // intel_gpu_generation
&kMoreForEntry402_619971032,  // more data
},
0,  // exceptions count
nullptr,  // exceptions
},
{
404,  // id
"Disable EGL_EXT_image_dma_buf_import_modifiers for Exo KMS modifier discovery on kms_swrast/llvmpipe",
std::size(kFeatureListForWorkaroundsEntry404),  // features size
kFeatureListForWorkaroundsEntry404,  // features
0,  // DisabledExtensions size
nullptr,  // DisabledExtensions
0,  // DisabledWebGLExtensions size
nullptr,  // DisabledWebGLExtensions
0,  // CrBugs size
nullptr,  // CrBugs
{
GpuControlList::kOsChromeOS,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
0,  // Devices size
nullptr,  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry404,  // GL strings
nullptr,  // machine model info
0,  // intel_gpu_series size
nullptr,  // intel_gpu_series
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // intel_gpu_generation
&kMoreForEntry404_619971032,  // more data
},
0,  // exceptions count
nullptr,  // exceptions
},
{
409,  // id
"QC7c requires a flush prior to the creation of a fence.",
std::size(kFeatureListForWorkaroundsEntry409),  // features size
kFeatureListForWorkaroundsEntry409,  // features
0,  // DisabledExtensions size
nullptr,  // DisabledExtensions
0,  // DisabledWebGLExtensions size
nullptr,  // DisabledWebGLExtensions
std::size(kCrBugsForWorkaroundsEntry409),  // CrBugs size
kCrBugsForWorkaroundsEntry409,  // CrBugs
{
GpuControlList::kOsChromeOS,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
0,  // Devices size
nullptr,  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry409,  // GL strings
nullptr,  // machine model info
0,  // intel_gpu_series size
nullptr,  // intel_gpu_series
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // intel_gpu_generation
&kMoreForEntry409_619971032,  // more data
},
0,  // exceptions count
nullptr,  // exceptions
},
{
415,  // id
"Disable VP9 and H.264 video acceleration on Elkhart Lake Intel devices",
std::size(kFeatureListForWorkaroundsEntry415),  // features size
kFeatureListForWorkaroundsEntry415,  // features
0,  // DisabledExtensions size
nullptr,  // DisabledExtensions
0,  // DisabledWebGLExtensions size
nullptr,  // DisabledWebGLExtensions
std::size(kCrBugsForWorkaroundsEntry415),  // CrBugs size
kCrBugsForWorkaroundsEntry415,  // CrBugs
{
GpuControlList::kOsChromeOS,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
0,  // Devices size
nullptr,  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
nullptr,  // GL strings
nullptr,  // machine model info
std::size(kIntelGpuSeriesForEntry415),  // intel_gpu_series size
kIntelGpuSeriesForEntry415,  // intel_gpu_series
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // intel_gpu_generation
&kMoreForEntry415_619971032,  // more data
},
0,  // exceptions count
nullptr,  // exceptions
},
{
421,  // id
"Accelerated video decoding leads to lock up in ChromeOS Zork (AMD Radeon Vega 3 GPUs).",
std::size(kFeatureListForWorkaroundsEntry421),  // features size
kFeatureListForWorkaroundsEntry421,  // features
0,  // DisabledExtensions size
nullptr,  // DisabledExtensions
0,  // DisabledWebGLExtensions size
nullptr,  // DisabledWebGLExtensions
std::size(kCrBugsForWorkaroundsEntry421),  // CrBugs size
kCrBugsForWorkaroundsEntry421,  // CrBugs
{
GpuControlList::kOsChromeOS,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x1002,  // vendor_id
std::size(kDevicesForWorkaroundsEntry421),  // Devices size
kDevicesForWorkaroundsEntry421,  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
nullptr,  // GL strings
nullptr,  // machine model info
0,  // intel_gpu_series size
nullptr,  // intel_gpu_series
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // intel_gpu_generation
&kMoreForEntry421_619971032,  // more data
},
0,  // exceptions count
nullptr,  // exceptions
},
};
const size_t kGpuDriverBugListEntryCount = 39;
}  // namespace gpu
