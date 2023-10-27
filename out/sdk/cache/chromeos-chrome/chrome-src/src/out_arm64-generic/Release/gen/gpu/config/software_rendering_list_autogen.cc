// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is auto-generated from
//    gpu/config/process_json.py
// It's formatted by clang-format using chromium coding style:
//    clang-format -i -style=chromium filename
// DO NOT EDIT!

#include "gpu/config/software_rendering_list_autogen.h"

#include <iterator>

#include "gpu/config/software_rendering_list_arrays_and_structs_autogen.h"
#include "gpu/config/software_rendering_list_exceptions_autogen.h"

namespace gpu {

const GpuControlList::Entry kSoftwareRenderingListEntries[] = {
{
4,  // id
"The Intel Mobile 945 Express family of chipsets is not compatible with WebGL",
std::size(kFeatureListForSoftwareEntry4),  // features size
kFeatureListForSoftwareEntry4,  // features
0,  // DisabledExtensions size
nullptr,  // DisabledExtensions
0,  // DisabledWebGLExtensions size
nullptr,  // DisabledWebGLExtensions
std::size(kCrBugsForSoftwareEntry4),  // CrBugs size
kCrBugsForSoftwareEntry4,  // CrBugs
{
GpuControlList::kOsAny,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x8086,  // vendor_id
std::size(kDevicesForSoftwareEntry4),  // Devices size
kDevicesForSoftwareEntry4,  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
nullptr,  // GL strings
nullptr,  // machine model info
0,  // intel_gpu_series size
nullptr,  // intel_gpu_series
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // intel_gpu_generation
&kMoreForEntry4_1043157500,  // more data
},
0,  // exceptions count
nullptr,  // exceptions
},
{
8,  // id
"NVIDIA GeForce FX Go5200 is assumed to be buggy",
std::size(kFeatureListForSoftwareEntry8),  // features size
kFeatureListForSoftwareEntry8,  // features
0,  // DisabledExtensions size
nullptr,  // DisabledExtensions
0,  // DisabledWebGLExtensions size
nullptr,  // DisabledWebGLExtensions
std::size(kCrBugsForSoftwareEntry8),  // CrBugs size
kCrBugsForSoftwareEntry8,  // CrBugs
{
GpuControlList::kOsAny,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x10de,  // vendor_id
std::size(kDevicesForSoftwareEntry8),  // Devices size
kDevicesForSoftwareEntry8,  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
nullptr,  // GL strings
nullptr,  // machine model info
0,  // intel_gpu_series size
nullptr,  // intel_gpu_series
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // intel_gpu_generation
&kMoreForEntry8_1043157500,  // more data
},
0,  // exceptions count
nullptr,  // exceptions
},
{
137,  // id
"GPU rasterization on CrOS is blocklisted on anything but Intel, Mali T8/G, Imagination, Freedreno, or AMD GPU/drivers for now.",
std::size(kFeatureListForSoftwareEntry137),  // features size
kFeatureListForSoftwareEntry137,  // features
0,  // DisabledExtensions size
nullptr,  // DisabledExtensions
0,  // DisabledWebGLExtensions size
nullptr,  // DisabledWebGLExtensions
std::size(kCrBugsForSoftwareEntry137),  // CrBugs size
kCrBugsForSoftwareEntry137,  // CrBugs
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
&kMoreForEntry137_1043157500,  // more data
},
std::size(kExceptionsForEntry137),  // exceptions count
kExceptionsForEntry137,  // exceptions
},
{
152,  // id
"Test entry where all features except WebGL blocklisted",
std::size(kFeatureListForSoftwareEntry152),  // features size
kFeatureListForSoftwareEntry152,  // features
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
nullptr,  // GL strings
nullptr,  // machine model info
0,  // intel_gpu_series size
nullptr,  // intel_gpu_series
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // intel_gpu_generation
&kMoreForEntry152_1043157500,  // more data
},
0,  // exceptions count
nullptr,  // exceptions
},
{
153,  // id
"Test entry where WebGL is blocklisted",
std::size(kFeatureListForSoftwareEntry153),  // features size
kFeatureListForSoftwareEntry153,  // features
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
nullptr,  // GL strings
nullptr,  // machine model info
0,  // intel_gpu_series size
nullptr,  // intel_gpu_series
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // intel_gpu_generation
&kMoreForEntry153_1043157500,  // more data
},
0,  // exceptions count
nullptr,  // exceptions
},
{
174,  // id
"Disable canvas acceleration on some Haswell and Crystal Well GPUs on ChromeOS",
std::size(kFeatureListForSoftwareEntry174),  // features size
kFeatureListForSoftwareEntry174,  // features
0,  // DisabledExtensions size
nullptr,  // DisabledExtensions
0,  // DisabledWebGLExtensions size
nullptr,  // DisabledWebGLExtensions
0,  // CrBugs size
nullptr,  // CrBugs
{
GpuControlList::kOsChromeOS,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x8086,  // vendor_id
std::size(kDevicesForSoftwareEntry174),  // Devices size
kDevicesForSoftwareEntry174,  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
nullptr,  // GL strings
nullptr,  // machine model info
0,  // intel_gpu_series size
nullptr,  // intel_gpu_series
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // intel_gpu_generation
&kMoreForEntry174_1043157500,  // more data
},
0,  // exceptions count
nullptr,  // exceptions
},
{
178,  // id
"Intel IronLake only shows black in hardware decoded H264 [b/202962575, b/233244020]",
std::size(kFeatureListForSoftwareEntry178),  // features size
kFeatureListForSoftwareEntry178,  // features
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
&kDriverInfoForSoftwareEntry178,  // driver info
&kGLStringsForSoftwareEntry178,  // GL strings
nullptr,  // machine model info
0,  // intel_gpu_series size
nullptr,  // intel_gpu_series
{GpuControlList::kEQ, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "5", nullptr},  // intel_gpu_generation
&kMoreForEntry178_1043157500,  // more data
},
0,  // exceptions count
nullptr,  // exceptions
},
{
179,  // id
"Disable canvas acceleration on some Intel 8LP GPUs on ChromeOS [b/293173688]",
std::size(kFeatureListForSoftwareEntry179),  // features size
kFeatureListForSoftwareEntry179,  // features
0,  // DisabledExtensions size
nullptr,  // DisabledExtensions
0,  // DisabledWebGLExtensions size
nullptr,  // DisabledWebGLExtensions
0,  // CrBugs size
nullptr,  // CrBugs
{
GpuControlList::kOsChromeOS,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x8086,  // vendor_id
std::size(kDevicesForSoftwareEntry179),  // Devices size
kDevicesForSoftwareEntry179,  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
nullptr,  // GL strings
nullptr,  // machine model info
0,  // intel_gpu_series size
nullptr,  // intel_gpu_series
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // intel_gpu_generation
&kMoreForEntry179_1043157500,  // more data
},
0,  // exceptions count
nullptr,  // exceptions
},
};
const size_t kSoftwareRenderingListEntryCount = 8;
}  // namespace gpu
