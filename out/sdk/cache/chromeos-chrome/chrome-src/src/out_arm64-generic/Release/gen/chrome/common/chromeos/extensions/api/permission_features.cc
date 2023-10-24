// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE FEATURES FILE:
//   ['../../../../../../../home/chrome-bot/chrome_root/src/chrome/common/chromeos/extensions/api/_permission_features.json']
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/chromeos/extensions/api/permission_features.h"

#include "extensions/common/features/complex_feature.h"
#include "extensions/common/features/feature_provider.h"
#include "extensions/common/features/manifest_feature.h"
#include "extensions/common/features/permission_feature.h"
#include "extensions/common/mojom/feature_session_type.mojom.h"

namespace extensions {

void AddChromeOSSystemExtensionsPermissionFeatures(FeatureProvider* provider) {
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("os.attached_device_info");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_dependencies({"manifest:chromeos_system_extension"});
    feature->set_extension_types({Manifest::TYPE_CHROMEOS_SYSTEM_EXTENSION});
    provider->AddFeature("os.attached_device_info", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("os.bluetooth_peripherals_info");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_dependencies({"manifest:chromeos_system_extension"});
    feature->set_extension_types({Manifest::TYPE_CHROMEOS_SYSTEM_EXTENSION});
    provider->AddFeature("os.bluetooth_peripherals_info", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("os.diagnostics");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_dependencies({"manifest:chromeos_system_extension"});
    feature->set_extension_types({Manifest::TYPE_CHROMEOS_SYSTEM_EXTENSION});
    provider->AddFeature("os.diagnostics", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("os.events");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_dependencies({"manifest:chromeos_system_extension"});
    feature->set_extension_types({Manifest::TYPE_CHROMEOS_SYSTEM_EXTENSION});
    provider->AddFeature("os.events", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("os.telemetry");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_dependencies({"manifest:chromeos_system_extension"});
    feature->set_extension_types({Manifest::TYPE_CHROMEOS_SYSTEM_EXTENSION});
    provider->AddFeature("os.telemetry", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("os.telemetry.network_info");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_dependencies({"manifest:chromeos_system_extension"});
    feature->set_extension_types({Manifest::TYPE_CHROMEOS_SYSTEM_EXTENSION});
    provider->AddFeature("os.telemetry.network_info", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("os.telemetry.serial_number");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_dependencies({"manifest:chromeos_system_extension"});
    feature->set_extension_types({Manifest::TYPE_CHROMEOS_SYSTEM_EXTENSION});
    provider->AddFeature("os.telemetry.serial_number", feature);
  }

}

}  // namespace extensions