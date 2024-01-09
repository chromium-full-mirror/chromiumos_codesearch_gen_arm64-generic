// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE FEATURES FILE:
//   ['../../../../../../../home/chrome-bot/chrome_root/src/chrome/common/chromeos/extensions/api/_api_features.json']
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/chromeos/extensions/api/api_features.h"

#include "extensions/common/features/complex_feature.h"
#include "extensions/common/features/feature_provider.h"
#include "extensions/common/features/manifest_feature.h"
#include "extensions/common/features/permission_feature.h"
#include "extensions/common/mojom/context_type.mojom.h"
#include "extensions/common/mojom/feature_session_type.mojom.h"
#include "printing/buildflags/buildflags.h"

namespace extensions {

void AddChromeOSSystemExtensionsAPIFeatures(FeatureProvider* provider) {
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("os.diagnostics");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"permission:os.diagnostics"});
    feature->set_platforms({Feature::CHROMEOS_PLATFORM,Feature::LACROS_PLATFORM});
    provider->AddFeature("os.diagnostics", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("os.events");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"permission:os.events"});
    feature->set_platforms({Feature::CHROMEOS_PLATFORM,Feature::LACROS_PLATFORM});
    provider->AddFeature("os.events", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("os.management");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"permission:os.management.audio"});
    feature->set_platforms({Feature::CHROMEOS_PLATFORM,Feature::LACROS_PLATFORM});
    provider->AddFeature("os.management", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("os.management.setAudioGain");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"permission:os.management.audio"});
    feature->set_platforms({Feature::CHROMEOS_PLATFORM,Feature::LACROS_PLATFORM});
    provider->AddFeature("os.management.setAudioGain", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("os.telemetry");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"permission:os.telemetry"});
    feature->set_platforms({Feature::CHROMEOS_PLATFORM,Feature::LACROS_PLATFORM});
    provider->AddFeature("os.telemetry", feature);
  }

}

}  // namespace extensions