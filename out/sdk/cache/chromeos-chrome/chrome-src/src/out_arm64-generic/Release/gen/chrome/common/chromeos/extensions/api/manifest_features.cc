// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE FEATURES FILE:
//   ['../../../../../../../home/chrome-bot/chrome_root/src/chrome/common/chromeos/extensions/api/_manifest_features.json']
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/chromeos/extensions/api/manifest_features.h"

#include "extensions/common/features/complex_feature.h"
#include "extensions/common/features/feature_provider.h"
#include "extensions/common/features/manifest_feature.h"
#include "extensions/common/features/permission_feature.h"
#include "extensions/common/mojom/context_type.mojom.h"
#include "extensions/common/mojom/feature_session_type.mojom.h"
#include "printing/buildflags/buildflags.h"

namespace extensions {

void AddChromeOSSystemExtensionsManifestFeatures(FeatureProvider* provider) {
  {
    ManifestFeature* feature = new ManifestFeature();
    feature->set_name("chromeos_system_extension");
    feature->set_allowlist({"CF6FFE535FA1EE153CCAFBF8AA0613E549413E11","E3303523BFFD1014D4A9D480D692C8B22BE6176B","61E945826369FCE8F7FE170778D99F89BE7B2156","AC5BFFA9A9B29FF748EA6756DBCE89A065CBE164"});
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_extension_types({Manifest::TYPE_CHROMEOS_SYSTEM_EXTENSION});
    feature->set_min_manifest_version(3);
    provider->AddFeature("chromeos_system_extension", feature);
  }

}

}  // namespace extensions