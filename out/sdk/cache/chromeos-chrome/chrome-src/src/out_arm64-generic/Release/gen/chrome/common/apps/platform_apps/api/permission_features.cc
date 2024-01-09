// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE FEATURES FILE:
//   ['../../../../../../../home/chrome-bot/chrome_root/src/chrome/common/apps/platform_apps/api/_permission_features.json']
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/apps/platform_apps/api/permission_features.h"

#include "extensions/common/features/complex_feature.h"
#include "extensions/common/features/feature_provider.h"
#include "extensions/common/features/manifest_feature.h"
#include "extensions/common/features/permission_feature.h"
#include "extensions/common/mojom/context_type.mojom.h"
#include "extensions/common/mojom/feature_session_type.mojom.h"
#include "printing/buildflags/buildflags.h"

namespace extensions {

void AddChromeAppsPermissionFeatures(FeatureProvider* provider) {
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("arcAppsPrivate");
    feature->set_allowlist({"46578A13607D38F1DC8E280C4F499FB0A2F9565C","898FB5A39687D210766B8998BA4530B99C9E6586","82F30B65397BC3E4ADE627BBD857AB8A58210648","C74B2AF138F9EDECD04D0965AB36CA66C8290466"});
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
    provider->AddFeature("arcAppsPrivate", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("browser");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
    provider->AddFeature("browser", feature);
  }
  {
    std::vector<Feature*> features;
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("enterprise.remoteApps");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
      feature->set_location(SimpleFeature::POLICY_LOCATION);
      feature->set_platforms({Feature::CHROMEOS_PLATFORM,Feature::LACROS_PLATFORM});
      features.push_back(feature);
    }
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("enterprise.remoteApps");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_dependencies({"behavior:imprivata_extension"});
      feature->set_extension_types({Manifest::TYPE_EXTENSION});
      feature->set_location(SimpleFeature::POLICY_LOCATION);
      feature->set_platforms({Feature::CHROMEOS_PLATFORM,Feature::LACROS_PLATFORM});
      features.push_back(feature);
    }
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("enterprise.remoteApps");
      feature->set_allowlist({"0962FDCCF4987E36619F5BDA0A8ED4CE78E6AC34"});
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_extension_types({Manifest::TYPE_EXTENSION});
      feature->set_location(SimpleFeature::POLICY_LOCATION);
      feature->set_platforms({Feature::CHROMEOS_PLATFORM,Feature::LACROS_PLATFORM});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("enterprise.remoteApps");
    provider->AddFeature("enterprise.remoteApps", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("firstRunPrivate");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
    feature->set_location(SimpleFeature::COMPONENT_LOCATION);
    feature->set_platforms({Feature::CHROMEOS_PLATFORM});
    provider->AddFeature("firstRunPrivate", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("mediaGalleries");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
    provider->AddFeature("mediaGalleries", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("mediaGalleries.allAutoDetected");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
    provider->AddFeature("mediaGalleries.allAutoDetected", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("mediaGalleries.copyTo");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
    provider->AddFeature("mediaGalleries.copyTo", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("mediaGalleries.delete");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
    provider->AddFeature("mediaGalleries.delete", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("mediaGalleries.read");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
    provider->AddFeature("mediaGalleries.read", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("mediaGalleries.scan");
    feature->set_channel(version_info::Channel::DEV);
    feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
    provider->AddFeature("mediaGalleries.scan", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("pointerLock");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
    provider->AddFeature("pointerLock", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("syncFileSystem");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
    provider->AddFeature("syncFileSystem", feature);
  }

}

}  // namespace extensions