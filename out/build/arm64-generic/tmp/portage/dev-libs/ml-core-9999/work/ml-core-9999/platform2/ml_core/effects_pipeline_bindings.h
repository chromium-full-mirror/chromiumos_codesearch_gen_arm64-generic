#ifndef CHROMEOS_ML_EFFECTS_PIPELINE_PUBLIC_EFFECTS_PIPELINE_BINDINGS_H_
#define CHROMEOS_ML_EFFECTS_PIPELINE_PUBLIC_EFFECTS_PIPELINE_BINDINGS_H_

// This file is packaged and used within the ChromeOS package
// dev-libs/ml-core.
//
// Do not introduce any Google3 dependencies within this file,
// otherwise that will likely break the ChromeOS build.

#include <EGL/egl.h>
// clang-format off
#include <GLES3/gl3.h>    // NOLINT(build/include_order)
#include <GLES2/gl2ext.h>  // NOLINT(build/include_order)
// clang-format on
#include <stdint.h>

#include "effects_pipeline_types.h"  // NOLINT(build/include)

// This is the set of C bindings exported for the library
extern "C" {
typedef void (*cros_ml_effects_OnFrameProcessedHandler)(void* handler,
                                                        int64_t timestamp,
                                                        GLuint frame_texture,
                                                        uint32_t frame_width,
                                                        uint32_t frame_height);

void* cros_ml_effects_CreateEffectsPipeline(EGLContext share_context,
                                            const char* caching_dir);
typedef decltype(&cros_ml_effects_CreateEffectsPipeline)
    cros_ml_effects_CreateEffectsPipelineFn;

void cros_ml_effects_DeleteEffectsPipeline(void* pipeline);
typedef decltype(&cros_ml_effects_DeleteEffectsPipeline)
    cros_ml_effects_DeleteEffectsPipelineFn;

bool cros_ml_effects_ProcessFrame(void* pipeline, int64_t timestamp,
                                  GLuint frame_texture, uint32_t frame_width,
                                  uint32_t frame_height);
typedef decltype(&cros_ml_effects_ProcessFrame) cros_ml_effects_ProcessFrameFn;

bool cros_ml_effects_Wait(void* pipeline);
typedef decltype(&cros_ml_effects_Wait) cros_ml_effects_WaitFn;

bool cros_ml_effects_SetSegmentationMaskObserver(
    void* pipeline, void* observer,
    cros_ml_effects_OnFrameProcessedHandler frame_handler_fn);
typedef decltype(&cros_ml_effects_SetSegmentationMaskObserver)
    cros_ml_effects_SetSegmentationMaskObserverFn;

bool cros_ml_effects_SetRenderedImageObserver(
    void* pipeline, void* observer,
    cros_ml_effects_OnFrameProcessedHandler frame_handler_fn);
typedef decltype(&cros_ml_effects_SetRenderedImageObserver)
    cros_ml_effects_SetRenderedImageObserverFn;

void cros_ml_effects_SetEffect(void* pipeline,
                               cros::EffectsConfig* effects_config,
                               void (*callback)(bool));
typedef decltype(&cros_ml_effects_SetEffect) cros_ml_effects_SetEffectFn;

// Matches absl::LogSeverity.
enum cros_ml_effects_LogSeverity {
  cros_ml_effects_LogSeverity_Info = 0,
  cros_ml_effects_LogSeverity_Warning = 1,
  cros_ml_effects_LogSeverity_Error = 2,
  cros_ml_effects_LogSeverity_Fatal = 3,
};

typedef void (*cros_ml_effects_LogCallbackFn)(
    cros_ml_effects_LogSeverity severity, const char* msg, size_t len);

void cros_ml_effects_SetLogObserver(void* pipeline,
                                    cros_ml_effects_LogCallbackFn callback);
typedef decltype(&cros_ml_effects_SetLogObserver)
    cros_ml_effects_SetLogObserverFn;
}

#endif  // CHROMEOS_ML_EFFECTS_PIPELINE_PUBLIC_EFFECTS_PIPELINE_BINDINGS_H_
