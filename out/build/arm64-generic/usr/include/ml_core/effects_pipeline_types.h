#ifndef CHROMEOS_ML_EFFECTS_PIPELINE_PUBLIC_EFFECTS_PIPELINE_TYPES_H_
#define CHROMEOS_ML_EFFECTS_PIPELINE_PUBLIC_EFFECTS_PIPELINE_TYPES_H_

// This file is packaged and used within the ChromeOS package
// dev-libs/ml-core.
//
// Do not introduce any Google3 dependencies within this file,
// otherwise that will likely break the ChromeOS build.
#include <string.h>

namespace cros {

// Set of blur levels available to be applied when the blur effect is selected
enum class BlurLevel {
  kLowest = 0,
  kLight = 1,
  kMedium = 2,
  kHeavy = 3,
  kMaximum = 4
};

enum class GpuApi { kOpenCL = 0, kOpenGL = 1, kAny = 2, kVulkan = 3 };

enum class SegmentationModelType {
  kAuto = 0,
  kHd = 1,
  kFull = 2,
  kEffnet384 = 4,
};

// EffectsConfig is intended to be extended and used by the
// EffectsLibrary to build effects that would like more configurable
// options.
struct EffectsConfig {
  // Whether portrait relighting should be enabled.
  bool relight_enabled = false;
  // Whether background blur should be enabled
  bool blur_enabled = false;
  // Whether background replace should be enabled
  bool replace_enabled = false;

  bool HasEnabledEffects() const {
    return blur_enabled || relight_enabled || replace_enabled;
  }

  // Defines which level of blur to apply with the background blur effect.
  BlurLevel blur_level = BlurLevel::kMedium;

  // Select which GPU API to use to perform the segmentation inference
  GpuApi segmentation_gpu_api = GpuApi::kVulkan;

  // Select which GPU API to use to perform the relighting inference
  GpuApi relighting_gpu_api = GpuApi::kOpenCL;

  // Maximum number of frames allowed in flight.
  int graph_max_frames_in_flight = 2;

  // Enable mediapipe profiling.
  // Must be built with --define DRISHTI_PROFILING=1
  bool enable_profiling = false;

  // Run models to position light automatically.
  bool enable_auto_light_pos = true;

  // Run relighting albedo and normals on alternate frames.
  // Reduces relighting latency. Can lead to slight ghosting effect.
  bool relight_interleave_models = false;

  // Use last frames segmentation mask for relighting inference.
  // Allows parallel inference of segmentation and relighting, which
  // can combat some of the latency induced by pipeline bubbles caused by
  // cpu-gpu synchronization, especially when using opengl/opencl inference.
  // Can lead to ghosting effect.
  // TODO(nbowe): When this is enabled we should still use the current frame
  // segmentation mask for composing, which would reduce ghosting artifacts.
  bool relight_use_last_mask = false;

  // Wait for rendering to complete in the mediapipe graph.
  bool wait_on_render = false;

  // The type of segmentation model to use for blur or relighting. Some models
  // require less processing time and give an improved experience on less
  // performant devices.
  SegmentationModelType segmentation_model_type = SegmentationModelType::kHd;

  // Background image to use for background replace.
  // Image must be readable by camera stack.
  char background_image_asset[512] = "/googledata/bg.png";

  // Light intensity.
  // Higher values cause more light from virtual point light source.
  float light_intensity = 1.7f;

  inline bool operator==(const EffectsConfig& rhs) const {
    return blur_level == rhs.blur_level &&
           segmentation_gpu_api == rhs.segmentation_gpu_api &&
           graph_max_frames_in_flight == rhs.graph_max_frames_in_flight &&
           enable_profiling == rhs.enable_profiling &&
           relight_enabled == rhs.relight_enabled &&
           blur_enabled == rhs.blur_enabled &&
           replace_enabled == rhs.replace_enabled &&
           relighting_gpu_api == rhs.relighting_gpu_api &&
           enable_profiling == rhs.enable_profiling &&
           enable_auto_light_pos == rhs.enable_auto_light_pos &&
           wait_on_render == rhs.wait_on_render &&
           segmentation_model_type == rhs.segmentation_model_type &&
           strcmp(background_image_asset, rhs.background_image_asset) == 0 &&
           light_intensity == rhs.light_intensity;
  }

  inline bool operator!=(const EffectsConfig& rhs) const {
    return !(*this == rhs);
  }
};

}  // namespace cros

#endif  // CHROMEOS_ML_EFFECTS_PIPELINE_PUBLIC_EFFECTS_PIPELINE_TYPES_H_
