// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE FEATURES FILE:
//   ['../../../../../../../home/chrome-bot/chrome_root/src/chrome/test/data/extensions/extension_api_unittest/api_features.json']
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/extension_features_unittest.h"

#include "extensions/common/features/complex_feature.h"
#include "extensions/common/features/feature_provider.h"
#include "extensions/common/features/manifest_feature.h"
#include "extensions/common/features/permission_feature.h"
#include "extensions/common/mojom/context_type.mojom.h"
#include "extensions/common/mojom/feature_session_type.mojom.h"
#include "printing/buildflags/buildflags.h"

namespace extensions {

void AddUnittestAPIFeatures(FeatureProvider* provider) {
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("alias_api");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kContentScript,mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kUnprivilegedExtension});
    feature->set_source("alias_api_source");
    provider->AddFeature("alias_api", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("alias_api.foo");
    feature->set_channel(version_info::Channel::DEV);
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_source("alias_api_source");
    provider->AddFeature("alias_api.foo", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("alias_api_source");
    feature->set_alias("alias_api");
    feature->set_channel(version_info::Channel::DEV);
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    provider->AddFeature("alias_api_source", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("autolaunched_kiosk");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_session_types({mojom::FeatureSessionType::kAutolaunchedKiosk});
    provider->AddFeature("autolaunched_kiosk", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("kiosk_only");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kContentScript,mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kUnprivilegedExtension});
    feature->set_session_types({mojom::FeatureSessionType::kKiosk});
    provider->AddFeature("kiosk_only", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("multiple_session_types");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kContentScript,mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kUnprivilegedExtension});
    feature->set_session_types({mojom::FeatureSessionType::kKiosk,mojom::FeatureSessionType::kRegular});
    provider->AddFeature("multiple_session_types", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("non_kiosk");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kContentScript,mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kUnprivilegedExtension});
    feature->set_session_types({mojom::FeatureSessionType::kRegular});
    provider->AddFeature("non_kiosk", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("parent1");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kContentScript});
    provider->AddFeature("parent1", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("parent1.child1");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kWebPage});
    feature->set_matches({"<all_urls>"});
    provider->AddFeature("parent1.child1", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("parent1.child2");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kContentScript});
    provider->AddFeature("parent1.child2", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("parent2");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kContentScript,mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kUnprivilegedExtension});
    provider->AddFeature("parent2", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("parent2.child3");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    provider->AddFeature("parent2.child3", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("parent2.child3.child.child");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kContentScript,mojom::ContextType::kUnprivilegedExtension});
    provider->AddFeature("parent2.child3.child.child", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("parent3");
    feature->set_contexts({mojom::ContextType::kContentScript,mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kUnprivilegedExtension});
    feature->set_dependencies({"api:parent1"});
    provider->AddFeature("parent3", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("parent3.noparent");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kContentScript,mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kUnprivilegedExtension});
    feature->set_noparent(true);
    provider->AddFeature("parent3.noparent", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("parent3.noparent.child");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kContentScript,mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kUnprivilegedExtension});
    feature->set_noparent(true);
    provider->AddFeature("parent3.noparent.child", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("test1");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kContentScript,mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kUnprivilegedExtension});
    feature->set_extension_types({Manifest::TYPE_EXTENSION});
    provider->AddFeature("test1", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("test10");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kWebUi});
    feature->set_matches({"chrome://test/*"});
    provider->AddFeature("test10", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("test10.foo");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kWebUi});
    feature->set_matches({"chrome://other-test/*"});
    provider->AddFeature("test10.foo", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("test11");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kUntrustedWebUi});
    feature->set_matches({"chrome-untrusted://test/*"});
    provider->AddFeature("test11", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("test11.foo");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kUntrustedWebUi});
    feature->set_matches({"chrome-untrusted://other-test/*"});
    provider->AddFeature("test11.foo", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("test2");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kWebPage});
    feature->set_matches({"<all_urls>"});
    provider->AddFeature("test2", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("test2.foo");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kContentScript});
    feature->set_matches({"<all_urls>"});
    provider->AddFeature("test2.foo", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("test3");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kContentScript});
    provider->AddFeature("test3", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("test3.foo");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kWebPage,mojom::ContextType::kPrivilegedExtension});
    feature->set_matches({"<all_urls>"});
    provider->AddFeature("test3.foo", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("test4");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"api:test3.foo"});
    provider->AddFeature("test4", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("test4.foo");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kUnprivilegedExtension});
    feature->set_dependencies({"api:test4"});
    provider->AddFeature("test4.foo", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("test4.foo.foo");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kContentScript});
    feature->set_dependencies({});
    provider->AddFeature("test4.foo.foo", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("test5");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kWebPage});
    feature->set_matches({"http://foo.com/*"});
    provider->AddFeature("test5", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("test6");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kContentScript});
    provider->AddFeature("test6", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("test6.foo");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    provider->AddFeature("test6.foo", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("test7");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kWebPage});
    feature->set_matches({"http://foo.com/*"});
    provider->AddFeature("test7", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("test7.bar");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kWebPage});
    feature->set_dependencies({"test7.foo"});
    feature->set_matches({"http://bar.com/*"});
    provider->AddFeature("test7.bar", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("test7.foo");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kWebPage});
    feature->set_dependencies({"test7"});
    feature->set_matches({"<all_urls>"});
    provider->AddFeature("test7.foo", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("test8");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kWebUi});
    feature->set_matches({"chrome://test/*","chrome://other-test/*"});
    provider->AddFeature("test8", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("test9");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kUntrustedWebUi});
    feature->set_matches({"chrome-untrusted://test/*","chrome-untrusted://other-test/*"});
    provider->AddFeature("test9", feature);
  }

}

}  // namespace extensions