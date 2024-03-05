// Copyright 2024 The ChromiumOS Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef GEN_FEATURED_EARLY_BOOT_STATE_CHECKS_H
#define GEN_FEATURED_EARLY_BOOT_STATE_CHECKS_H

#include <map>
#include <string>
#include <string_view>

#include "featured/feature_export.h"

namespace feature {

// Serves as a PlatformFeaturesInterface wrapper to gate access to the
// underlying private methods in it.
class FEATURE_EXPORT EarlyBootChecker {
  public:
    
    // Determine if CrOSEarlyBootTestFeature is enabled, and optionally what params it
    // has.
    // Requires that PlatformFeatures::Initialize has been called.
    static bool IsCrOSEarlyBootTestFeatureEnabled(
        std::map<std::string, std::string>* params = nullptr);
    
};

}  // namespace feature

#endif  // GEN_FEATURED_EARLY_BOOT_STATE_CHECKS_H
