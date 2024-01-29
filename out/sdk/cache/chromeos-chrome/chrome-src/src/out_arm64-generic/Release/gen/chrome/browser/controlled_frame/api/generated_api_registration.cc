// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include "chrome/browser/controlled_frame/api/generated_api_registration.h"

#include "build/build_config.h"
#include "build/chromeos_buildflags.h"

#include "chrome/browser/controlled_frame/api/controlled_frame_internal_api.h"

#include "extensions/browser/extension_function_registry.h"

namespace controlled_frame {
namespace api {

// static
void ControlledFrameGeneratedFunctionRegistry::RegisterAll(ExtensionFunctionRegistry* registry) {
  constexpr ExtensionFunctionRegistry::FactoryEntry kEntries[] = {
    {
      &NewExtensionFunction<ControlledFrameInternalContextMenusCreateFunction>,
      ControlledFrameInternalContextMenusCreateFunction::static_function_name(),
      ControlledFrameInternalContextMenusCreateFunction::static_histogram_value(),
    },
  };
  for (const auto& entry : kEntries) {
      registry->Register(entry);
  }
}

}  // namespace api
}  // namespace controlled_frame
