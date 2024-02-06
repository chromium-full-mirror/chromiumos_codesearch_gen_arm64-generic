// Copyright 2024 The ChromiumOS Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include <featured/early_boot_state_checks.h>

#include <optional>

#include <featured/feature_library.h>

namespace feature {


// static
bool EarlyBootChecker::IsCrOSEarlyBootTestFeatureEnabled(
    std::map<std::string, std::string>* params) {
  PlatformFeaturesInterface* platform_features = PlatformFeatures::Get();
  CHECK(platform_features);

  std::optional<bool> enabled = platform_features->IsEarlyBootFeatureActive(
      "CrOSEarlyBootTestFeature", params);

  if (!enabled.has_value()) {
    if (params) {
      params->clear();

      
      params->emplace("test_key_1", "test_value_1");
      
      params->emplace("test_key_2", "test_value_2");
      
    }
    return true;
  }

  // params is already populated.
  return enabled.value();
}


}  // namespace feature
