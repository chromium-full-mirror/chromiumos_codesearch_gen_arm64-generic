#ifndef CHROMEOS_CAMERA_LIB_SUPER_RES_PUBLIC_UPSAMPLE_WRAPPER_BINDINGS_H_
#define CHROMEOS_CAMERA_LIB_SUPER_RES_PUBLIC_UPSAMPLE_WRAPPER_BINDINGS_H_

// This file is packaged and used within the ChromeOS package
// media-libs/cros-camera-super-res-dlc.
//
// Do not introduce any Google3 dependencies within this file,
// otherwise that will likely break the ChromeOS build.

// clang-format on
#include <stdint.h>

#include "upsample_wrapper_types.h"  // NOLINT(build/include)

extern "C" {
void* cros_camera_CreateUpsampleWrapper();
typedef decltype(&cros_camera_CreateUpsampleWrapper)
    cros_camera_CreateUpsampleWrapperFn;

void cros_camera_DeleteUpsampleWrapper(void* upsample_wrapper);
typedef decltype(&cros_camera_DeleteUpsampleWrapper)
    cros_camera_DeleteUpsampleWrapperFn;

bool cros_camera_InitUpsampler(void* upsample_wrapper, cros::InferenceMode mode,
                               bool use_lancet_alpha);
typedef decltype(&cros_camera_InitUpsampler) cros_camera_InitUpsamplerFn;

bool cros_camera_Upsample(void* upsample_wrapper,
                          const cros::UpsampleRequest* request);
typedef decltype(&cros_camera_Upsample) cros_camera_UpsampleFn;

}  // extern "C"

#endif  // CHROMEOS_CAMERA_LIB_SUPER_RES_PUBLIC_UPSAMPLE_WRAPPER_BINDINGS_H_
