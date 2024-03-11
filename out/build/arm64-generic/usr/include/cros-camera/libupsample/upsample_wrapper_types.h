#ifndef CHROMEOS_CAMERA_LIB_SUPER_RES_PUBLIC_UPSAMPLE_WRAPPER_TYPES_H_
#define CHROMEOS_CAMERA_LIB_SUPER_RES_PUBLIC_UPSAMPLE_WRAPPER_TYPES_H_

// This file is packaged and used within the ChromeOS package
// media-libs/cros-camera-super-res-dlc.
//
// Do not introduce any Google3 dependencies within this file,
// otherwise that will likely break the ChromeOS build.

#include <stdint.h>

namespace cros {

// Enum for inference modes.
enum class InferenceMode {
  kNnApi = 0,
  kXnnPack = 1,
  kOpenGL = 2,
  kOpenCL = 3,
};

// Structure defining a upsampling request.
struct UpsampleRequest {
  // Dimensions of the input image.
  int input_width = 0;
  int input_height = 0;

  // Dimensions of the upsampled image.
  int output_width = 0;
  int output_height = 0;

  // Pointer to the raw input image data in RGB interleaved format.
  const uint8_t* rgb_input_data = nullptr;

  // Pointer to the output buffer for the upsampled image in RGB interleaved
  // format.
  uint8_t* rgb_output_data = nullptr;

  bool IsValid() const {
    return (input_width > 0 && input_height > 0 &&
            output_width >= input_width && output_height >= input_height &&
            rgb_input_data && rgb_output_data);
  }
};

}  // namespace cros

#endif  // CHROMEOS_CAMERA_LIB_SUPER_RES_PUBLIC_UPSAMPLE_WRAPPER_TYPES_H_
