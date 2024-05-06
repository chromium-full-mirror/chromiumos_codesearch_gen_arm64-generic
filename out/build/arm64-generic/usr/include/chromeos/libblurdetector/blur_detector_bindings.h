#ifndef CHROMEOS_CAMERA_LIB_BLUR_DETECTION_PUBLIC_BLUR_DETECTOR_BINDINGS_H_
#define CHROMEOS_CAMERA_LIB_BLUR_DETECTION_PUBLIC_BLUR_DETECTOR_BINDINGS_H_

// This file is packaged and used within the ChromeOS package
// chromeos-base/cros-camera-diagnostics.
//
// Do not introduce any Google3 dependencies within this file,
// otherwise that will likely break the ChromeOS build.

// clang-format on
#include <stdint.h>

extern "C" {
void* cros_camera_CreateBlurDetector();
typedef decltype(&cros_camera_CreateBlurDetector)
    cros_camera_CreateBlurDetectorFn;

void cros_camera_DeleteBlurDetector(void* blur_detector);
typedef decltype(&cros_camera_DeleteBlurDetector)
    cros_camera_DeleteBlurDetectorFn;

bool cros_camera_DirtyLensProbabilityFromJPEG(void* blur_detector,
                                              const uint8_t* jpeg_data,
                                              uint32_t jpeg_size,
                                              float* dirty_probability);
typedef decltype(&cros_camera_DirtyLensProbabilityFromJPEG)
    cros_camera_DirtyLensProbabilityFromJPEGFn;

bool cros_camera_DirtyLensProbabilityFromNV12(void* blur_detector,
                                              const uint8_t* nv12_data,
                                              uint32_t height, uint32_t width,
                                              float* dirty_probability);
typedef decltype(&cros_camera_DirtyLensProbabilityFromNV12)
    cros_camera_DirtyLensProbabilityFromNV12Fn;

bool cros_camera_CannyVarianceFromJPEG(void* blur_detector,
                                       const uint8_t* jpeg_data,
                                       uint32_t jpeg_size,
                                       float* canny_variance);
typedef decltype(&cros_camera_CannyVarianceFromJPEG)
    cros_camera_CannyVarianceFromJPEGFn;

bool cros_camera_CannyVarianceFromNV12(void* blur_detector,
                                       const uint8_t* nv12_data,
                                       uint32_t height, uint32_t width,
                                       float* canny_variance);
typedef decltype(&cros_camera_CannyVarianceFromNV12)
    cros_camera_CannyVarianceFromNV12Fn;
}  // extern "C"

#endif  // CHROMEOS_CAMERA_LIB_BLUR_DETECTION_PUBLIC_BLUR_DETECTOR_BINDINGS_H_
