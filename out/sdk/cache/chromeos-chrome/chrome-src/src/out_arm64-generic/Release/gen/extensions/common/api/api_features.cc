// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE FEATURES FILE:
//   ['../../../../../../../home/chrome-bot/chrome_root/src/extensions/common/api/_api_features.json']
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/api_features.h"

#include "extensions/common/features/complex_feature.h"
#include "extensions/common/features/feature_provider.h"
#include "extensions/common/features/manifest_feature.h"
#include "extensions/common/features/permission_feature.h"
#include "extensions/common/mojom/context_type.mojom.h"
#include "extensions/common/mojom/feature_session_type.mojom.h"
#include "printing/buildflags/buildflags.h"

namespace extensions {

void AddCoreAPIFeatures(FeatureProvider* provider) {
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("alarms");
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"permission:alarms"});
    provider->AddFeature("alarms", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("app.currentWindowInternal");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kLockscreenExtension});
    feature->set_internal(true);
    feature->set_noparent(true);
    provider->AddFeature("app.currentWindowInternal", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("app.currentWindowInternal.setShape");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"permission:app.window.shape"});
    feature->set_internal(true);
    feature->set_noparent(true);
    provider->AddFeature("app.currentWindowInternal.setShape", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("app.runtime");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kLockscreenExtension});
      feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
      feature->set_noparent(true);
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("app.runtime");
      feature->set_allowlist({"2FC374607C2DF285634B67C64A2E356C607091C3","3727DD3E564B6055387425027AD74C58784ACC15","12E618C3C6E97495AAECF2AC12DEB082353241C6"});
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_component_extensions_auto_granted(false);
      feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
      feature->set_extension_types({Manifest::TYPE_EXTENSION});
      feature->set_noparent(true);
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("app.runtime");
    provider->AddFeature("app.runtime", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("app.window");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kLockscreenExtension});
      feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
      feature->set_noparent(true);
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("app.window");
      feature->set_allowlist({"B9EF10DDFEA11EF77873CC5009809E5037FC4C7A","06BE211D5F014BAB34BC22D9DDA09C63A81D828E","F94EE6AB36D6C6588670B2B01EB65212D9C64E33"});
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_component_extensions_auto_granted(false);
      feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
      feature->set_extension_types({Manifest::TYPE_EXTENSION});
      feature->set_noparent(true);
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("app.window");
    provider->AddFeature("app.window", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("appViewEmbedderInternal");
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"permission:appview"});
    feature->set_internal(true);
    provider->AddFeature("appViewEmbedderInternal", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("appViewGuestInternal");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_internal(true);
    provider->AddFeature("appViewGuestInternal", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("audio");
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"permission:audio"});
    provider->AddFeature("audio", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("automation");
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"manifest:automation"});
    provider->AddFeature("automation", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("automationInternal");
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"manifest:automation"});
    feature->set_internal(true);
    provider->AddFeature("automationInternal", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("bluetooth");
      feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
      feature->set_dependencies({"manifest:bluetooth"});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("bluetooth");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({mojom::ContextType::kWebUi});
      feature->set_matches({"chrome://bluetooth-pairing/*","chrome://os-settings/*"});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("bluetooth");
    provider->AddFeature("bluetooth", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("bluetoothLowEnergy");
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"manifest:bluetooth"});
    feature->set_platforms({Feature::CHROMEOS_PLATFORM,Feature::LACROS_PLATFORM,Feature::LINUX_PLATFORM});
    provider->AddFeature("bluetoothLowEnergy", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("bluetoothPrivate");
      feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
      feature->set_dependencies({"permission:bluetoothPrivate"});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("bluetoothPrivate");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({mojom::ContextType::kWebUi});
      feature->set_matches({"chrome://bluetooth-pairing/*","chrome://os-settings/*"});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("bluetoothPrivate");
    provider->AddFeature("bluetoothPrivate", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("bluetoothSocket");
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"manifest:bluetooth"});
    provider->AddFeature("bluetoothSocket", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("cecPrivate");
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"permission:cecPrivate"});
    provider->AddFeature("cecPrivate", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("clipboard");
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"permission:clipboard"});
    provider->AddFeature("clipboard", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("clipboard.onClipboardDataChanged");
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"permission:clipboardRead"});
    provider->AddFeature("clipboard.onClipboardDataChanged", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("clipboard.setImageData");
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"permission:clipboardWrite"});
    provider->AddFeature("clipboard.setImageData", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("declarativeNetRequest");
      feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
      feature->set_dependencies({"permission:declarativeNetRequest"});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("declarativeNetRequest");
      feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
      feature->set_dependencies({"permission:declarativeNetRequestWithHostAccess"});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("declarativeNetRequest");
    provider->AddFeature("declarativeNetRequest", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("declarativeNetRequest.onRuleMatchedDebug");
      feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
      feature->set_dependencies({"permission:declarativeNetRequestFeedback","permission:declarativeNetRequest"});
      feature->set_location(SimpleFeature::UNPACKED_LOCATION);
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("declarativeNetRequest.onRuleMatchedDebug");
      feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
      feature->set_dependencies({"permission:declarativeNetRequestFeedback","permission:declarativeNetRequestWithHostAccess"});
      feature->set_location(SimpleFeature::UNPACKED_LOCATION);
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("declarativeNetRequest.onRuleMatchedDebug");
    provider->AddFeature("declarativeNetRequest.onRuleMatchedDebug", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("declarativeNetRequest.testMatchOutcome");
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"permission:declarativeNetRequest"});
    feature->set_location(SimpleFeature::UNPACKED_LOCATION);
    provider->AddFeature("declarativeNetRequest.testMatchOutcome", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("declarativeWebRequest");
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"permission:declarativeWebRequest"});
    provider->AddFeature("declarativeWebRequest", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("diagnostics");
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"permission:diagnostics"});
    feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
    provider->AddFeature("diagnostics", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("dns");
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"permission:dns"});
    provider->AddFeature("dns", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("events");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kPrivilegedWebPage,mojom::ContextType::kContentScript,mojom::ContextType::kLockscreenExtension,mojom::ContextType::kOffscreenExtension,mojom::ContextType::kUserScript,mojom::ContextType::kWebPage,mojom::ContextType::kWebUi,mojom::ContextType::kUntrustedWebUi,mojom::ContextType::kUnprivilegedExtension});
    feature->set_extension_types({Manifest::TYPE_PLATFORM_APP,Manifest::TYPE_EXTENSION});
    feature->set_internal(true);
    feature->set_matches({"<all_urls>"});
    provider->AddFeature("events", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("extensionTypes");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP,Manifest::TYPE_PLATFORM_APP});
    feature->set_internal(true);
    provider->AddFeature("extensionTypes", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("feedbackPrivate");
      feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
      feature->set_dependencies({"permission:feedbackPrivate"});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("feedbackPrivate");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({mojom::ContextType::kWebUi});
      feature->set_matches({"chrome://feedback/*","chrome://cast-feedback/*","chrome://os-feedback/*"});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("feedbackPrivate");
    provider->AddFeature("feedbackPrivate", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("feedbackPrivate.openFeedback");
    feature->set_allowlist({"2FC374607C2DF285634B67C64A2E356C607091C3","3727DD3E564B6055387425027AD74C58784ACC15","12E618C3C6E97495AAECF2AC12DEB082353241C6"});
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({});
    feature->set_extension_types({Manifest::TYPE_EXTENSION});
    provider->AddFeature("feedbackPrivate.openFeedback", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("feedbackPrivate.readLogSource");
      feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
      feature->set_dependencies({"permission:feedbackPrivate"});
      feature->set_platforms({Feature::CHROMEOS_PLATFORM,Feature::LACROS_PLATFORM});
      feature->set_session_types({mojom::FeatureSessionType::kKiosk});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("feedbackPrivate.readLogSource");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({mojom::ContextType::kWebUi});
      feature->set_dependencies({"permission:feedbackPrivate"});
      feature->set_matches({"chrome://feedback/*"});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("feedbackPrivate.readLogSource");
    provider->AddFeature("feedbackPrivate.readLogSource", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("fileSystem");
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"permission:fileSystem"});
    feature->set_disallow_for_service_workers(true);
    provider->AddFeature("fileSystem", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("guestViewInternal");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
      feature->set_internal(true);
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("guestViewInternal");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({mojom::ContextType::kWebUi});
      feature->set_internal(true);
      feature->set_matches({"chrome://add-supervision/*","chrome://assistant-optin/*","chrome://discards/*","chrome://extensions/*","chrome://home/*","chrome://chrome-signin/*","chrome://mobilesetup/*","chrome://oobe/*","chrome://os-settings/*","chrome://parent-access/*","chrome://password-change/*","chrome://lock-reauth/*"});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("guestViewInternal");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({mojom::ContextType::kWebPage});
      feature->set_internal(true);
      feature->set_requires_delegated_availability_check(true);
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("guestViewInternal");
    provider->AddFeature("guestViewInternal", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("hid");
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"permission:hid"});
    provider->AddFeature("hid", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("i18n");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kUnprivilegedExtension,mojom::ContextType::kContentScript,mojom::ContextType::kLockscreenExtension});
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP,Manifest::TYPE_PLATFORM_APP,Manifest::TYPE_LOGIN_SCREEN_EXTENSION});
    provider->AddFeature("i18n", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("idle");
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"permission:idle"});
    provider->AddFeature("idle", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("idle.getAutoLockDelay");
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"permission:idle"});
    feature->set_platforms({Feature::CHROMEOS_PLATFORM,Feature::LACROS_PLATFORM});
    provider->AddFeature("idle.getAutoLockDelay", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("lockScreen.data");
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kLockscreenExtension});
    feature->set_dependencies({"permission:lockScreen"});
    provider->AddFeature("lockScreen.data", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("lockScreen.data.create");
    feature->set_contexts({mojom::ContextType::kLockscreenExtension});
    feature->set_dependencies({"permission:lockScreen"});
    provider->AddFeature("lockScreen.data.create", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("management");
      feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
      feature->set_dependencies({"permission:management"});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("management");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({mojom::ContextType::kWebUi});
      feature->set_matches({"chrome://extensions/*","chrome://settings/*"});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("management");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({mojom::ContextType::kWebPage});
      feature->set_feature_flag("NewWebstoreDomain");
      feature->set_matches({"https://chromewebstore.google.com/*"});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("management");
    provider->AddFeature("management", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("management.getPermissionWarningsByManifest");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({});
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP,Manifest::TYPE_PLATFORM_APP});
    provider->AddFeature("management.getPermissionWarningsByManifest", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("management.getSelf");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({});
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP,Manifest::TYPE_PLATFORM_APP});
    provider->AddFeature("management.getSelf", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("management.installReplacementWebApp");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"manifest:replacement_web_app"});
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_PLATFORM_APP});
    provider->AddFeature("management.installReplacementWebApp", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("management.uninstallSelf");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({});
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP,Manifest::TYPE_PLATFORM_APP});
    provider->AddFeature("management.uninstallSelf", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("mediaPerceptionPrivate");
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"permission:mediaPerceptionPrivate"});
    provider->AddFeature("mediaPerceptionPrivate", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("metricsPrivate");
      feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
      feature->set_dependencies({"permission:metricsPrivate"});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("metricsPrivate");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({mojom::ContextType::kWebUi});
      feature->set_matches({"chrome://apps/*","chrome://bookmarks/*","chrome://bookmarks-side-panel.top-chrome/*","chrome://customize-chrome-side-panel.top-chrome/*","chrome://shopping-insights-side-panel.top-chrome/*","chrome://download-shelf.top-chrome/*","chrome://eche-app/*","chrome://extensions/*","chrome://file-manager/*","chrome://help-app/*","chrome://history/*","chrome://new-tab-page/*","chrome://os-settings/*","chrome://password-manager/*","chrome://personalization/*","chrome://profile-picker/*","chrome://read-later.top-chrome/*","chrome://settings/*","chrome://sync-confirmation/*","chrome://tab-search.top-chrome/*","chrome://tab-strip.top-chrome/*","chrome://welcome/*","chrome://vc-background/*","chrome://app-settings/*","chrome://compose/*","chrome://search-engine-choice/*"});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("metricsPrivate");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({mojom::ContextType::kUntrustedWebUi});
      feature->set_matches({"chrome-untrusted://help-app/*","chrome-untrusted://media-app/*","chrome-untrusted://mako/*","chrome-untrusted://projector/*","chrome-untrusted://read-anything-side-panel.top-chrome/*"});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("metricsPrivate");
    feature->set_alias("metricsPrivateIndividualApis");
    provider->AddFeature("metricsPrivate", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("metricsPrivate.getIsCrashReportingEnabled");
    feature->set_allowlist({"2FC374607C2DF285634B67C64A2E356C607091C3","3727DD3E564B6055387425027AD74C58784ACC15","12E618C3C6E97495AAECF2AC12DEB082353241C6","3727DD3E564B6055387425027AD74C58784ACC15","C41AD9DCD670210295614257EF8C9945AD68D86E","D7986543275120831B39EF28D1327552FC343960","A291B26E088FA6BA53FFD72F0916F06EBA7C585A","07BD6A765FFC289FF755D7CAB2893A40EC337FEC","896B85CC7E913E11C34892C1425A093C0701D386","11A01C82EF355E674E4F9728A801F5C3CB40D83F","F410C88469990EE7947450311D24B8AF2ADB2595","B620CF4203315F9F2E046EDED22C7571A935958D","B206D8716769728278D2D300349C6CB7D7DE2EF9","2B6C6A4A5940017146F3E58B7F90116206E84685","B6C2EFAB3EC3BF6EF03701408B6B09A67B2D0069","96FF2FFA5C9173C76D47184B3E86D267B37781DE","0136FCB13DB29FD5CD442F56E59E53B61F1DF96F","46578A13607D38F1DC8E280C4F499FB0A2F9565C","898FB5A39687D210766B8998BA4530B99C9E6586","82F30B65397BC3E4ADE627BBD857AB8A58210648","C74B2AF138F9EDECD04D0965AB36CA66C8290466","754A9CB3C8623093180E10CF4C3AB64837179E68","CF6B19571334F49878327D557597D23B1458AA39"});
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"permission:metricsPrivate"});
    provider->AddFeature("metricsPrivate.getIsCrashReportingEnabled", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("metricsPrivateIndividualApis");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({});
    feature->set_source("metricsPrivate");
    provider->AddFeature("metricsPrivateIndividualApis", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("metricsPrivateIndividualApis.recordEnumerationValue");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kUntrustedWebUi});
    feature->set_dependencies({});
    feature->set_matches({"chrome-untrusted://demo-mode-app/*"});
    feature->set_source("metricsPrivate");
    provider->AddFeature("metricsPrivateIndividualApis.recordEnumerationValue", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("metricsPrivateIndividualApis.recordMediumTime");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kUntrustedWebUi});
    feature->set_dependencies({});
    feature->set_matches({"chrome-untrusted://demo-mode-app/*"});
    feature->set_source("metricsPrivate");
    provider->AddFeature("metricsPrivateIndividualApis.recordMediumTime", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("metricsPrivateIndividualApis.recordUserAction");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kUntrustedWebUi});
    feature->set_dependencies({});
    feature->set_matches({"chrome://apps/*","chrome-untrusted://demo-mode-app/*"});
    feature->set_source("metricsPrivate");
    provider->AddFeature("metricsPrivateIndividualApis.recordUserAction", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("mimeHandlerPrivate");
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"manifest:mime_types_handler"});
    provider->AddFeature("mimeHandlerPrivate", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("mojoPrivate");
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"behavior:imprivata_in_session_extension"});
    feature->set_extension_types({Manifest::TYPE_EXTENSION});
    feature->set_location(SimpleFeature::POLICY_LOCATION);
    feature->set_platforms({Feature::CHROMEOS_PLATFORM,Feature::LACROS_PLATFORM});
    provider->AddFeature("mojoPrivate", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("networking.onc");
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"permission:networking.onc"});
    feature->set_source("networkingPrivate");
    provider->AddFeature("networking.onc", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("networkingPrivate");
      feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
      feature->set_dependencies({"permission:networkingPrivate"});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("networkingPrivate");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({mojom::ContextType::kWebUi});
      feature->set_matches({"chrome://network/*","chrome://oobe/*","chrome://internet-config-dialog/*","chrome://internet-detail-dialog/*","chrome://os-settings/*"});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("networkingPrivate");
    feature->set_alias("networking.onc");
    provider->AddFeature("networkingPrivate", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("odfsConfigPrivate");
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"permission:odfsConfigPrivate"});
    feature->set_feature_flag("ApiOdfsConfigPrivate");
    provider->AddFeature("odfsConfigPrivate", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("offscreen");
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"permission:offscreen"});
    provider->AddFeature("offscreen", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("power");
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"permission:power"});
    provider->AddFeature("power", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("power.reportActivity");
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"permission:power"});
    feature->set_platforms({Feature::CHROMEOS_PLATFORM,Feature::LACROS_PLATFORM});
    provider->AddFeature("power.reportActivity", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("printerProvider");
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"permission:printerProvider"});
    provider->AddFeature("printerProvider", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("printerProviderInternal");
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"permission:printerProvider"});
    feature->set_internal(true);
    provider->AddFeature("printerProviderInternal", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("runtime");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kLockscreenExtension});
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP,Manifest::TYPE_PLATFORM_APP,Manifest::TYPE_LOGIN_SCREEN_EXTENSION,Manifest::TYPE_CHROMEOS_SYSTEM_EXTENSION});
    provider->AddFeature("runtime", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("runtime.connect");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({mojom::ContextType::kPrivilegedWebPage,mojom::ContextType::kContentScript,mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kLockscreenExtension,mojom::ContextType::kOffscreenExtension,mojom::ContextType::kUnprivilegedExtension,mojom::ContextType::kUserScript,mojom::ContextType::kWebPage});
      feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP,Manifest::TYPE_PLATFORM_APP,Manifest::TYPE_LOGIN_SCREEN_EXTENSION,Manifest::TYPE_CHROMEOS_SYSTEM_EXTENSION});
      feature->set_matches({"<all_urls>"});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("runtime.connect");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({mojom::ContextType::kUntrustedWebUi});
      feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP,Manifest::TYPE_PLATFORM_APP,Manifest::TYPE_LOGIN_SCREEN_EXTENSION,Manifest::TYPE_CHROMEOS_SYSTEM_EXTENSION});
      feature->set_matches({"chrome-untrusted://terminal/html/terminal_ssh.html*"});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("runtime.connect");
    provider->AddFeature("runtime.connect", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("runtime.connectNative");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"permission:nativeMessaging"});
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP,Manifest::TYPE_PLATFORM_APP,Manifest::TYPE_LOGIN_SCREEN_EXTENSION,Manifest::TYPE_CHROMEOS_SYSTEM_EXTENSION});
    provider->AddFeature("runtime.connectNative", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("runtime.getBackgroundPage");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kLockscreenExtension});
    feature->set_disallow_for_service_workers(true);
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP,Manifest::TYPE_PLATFORM_APP,Manifest::TYPE_LOGIN_SCREEN_EXTENSION,Manifest::TYPE_CHROMEOS_SYSTEM_EXTENSION});
    provider->AddFeature("runtime.getBackgroundPage", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("runtime.getContexts");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP,Manifest::TYPE_PLATFORM_APP,Manifest::TYPE_LOGIN_SCREEN_EXTENSION,Manifest::TYPE_CHROMEOS_SYSTEM_EXTENSION});
    feature->set_min_manifest_version(3);
    provider->AddFeature("runtime.getContexts", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("runtime.getManifest");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kLockscreenExtension,mojom::ContextType::kUnprivilegedExtension,mojom::ContextType::kContentScript});
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP,Manifest::TYPE_PLATFORM_APP,Manifest::TYPE_LOGIN_SCREEN_EXTENSION,Manifest::TYPE_CHROMEOS_SYSTEM_EXTENSION});
    provider->AddFeature("runtime.getManifest", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("runtime.getPackageDirectoryEntry");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kLockscreenExtension});
    feature->set_disallow_for_service_workers(true);
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP,Manifest::TYPE_PLATFORM_APP,Manifest::TYPE_LOGIN_SCREEN_EXTENSION,Manifest::TYPE_CHROMEOS_SYSTEM_EXTENSION});
    provider->AddFeature("runtime.getPackageDirectoryEntry", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("runtime.getURL");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kLockscreenExtension,mojom::ContextType::kOffscreenExtension,mojom::ContextType::kUnprivilegedExtension,mojom::ContextType::kContentScript});
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP,Manifest::TYPE_PLATFORM_APP,Manifest::TYPE_LOGIN_SCREEN_EXTENSION,Manifest::TYPE_CHROMEOS_SYSTEM_EXTENSION});
    provider->AddFeature("runtime.getURL", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("runtime.id");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kLockscreenExtension,mojom::ContextType::kOffscreenExtension,mojom::ContextType::kUnprivilegedExtension,mojom::ContextType::kContentScript});
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP,Manifest::TYPE_PLATFORM_APP,Manifest::TYPE_LOGIN_SCREEN_EXTENSION,Manifest::TYPE_CHROMEOS_SYSTEM_EXTENSION});
    provider->AddFeature("runtime.id", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("runtime.lastError");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kPrivilegedWebPage,mojom::ContextType::kContentScript,mojom::ContextType::kLockscreenExtension,mojom::ContextType::kOffscreenExtension,mojom::ContextType::kUserScript,mojom::ContextType::kWebPage,mojom::ContextType::kWebUi,mojom::ContextType::kUntrustedWebUi,mojom::ContextType::kUnprivilegedExtension});
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_HOSTED_APP,Manifest::TYPE_LEGACY_PACKAGED_APP,Manifest::TYPE_PLATFORM_APP,Manifest::TYPE_SHARED_MODULE,Manifest::TYPE_THEME,Manifest::TYPE_LOGIN_SCREEN_EXTENSION,Manifest::TYPE_CHROMEOS_SYSTEM_EXTENSION});
    feature->set_matches({"<all_urls>"});
    provider->AddFeature("runtime.lastError", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("runtime.onConnect");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kLockscreenExtension,mojom::ContextType::kOffscreenExtension,mojom::ContextType::kUnprivilegedExtension,mojom::ContextType::kUserScript,mojom::ContextType::kContentScript});
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP,Manifest::TYPE_PLATFORM_APP,Manifest::TYPE_LOGIN_SCREEN_EXTENSION,Manifest::TYPE_CHROMEOS_SYSTEM_EXTENSION});
    provider->AddFeature("runtime.onConnect", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("runtime.onConnectExternal");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kLockscreenExtension,mojom::ContextType::kOffscreenExtension});
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP,Manifest::TYPE_PLATFORM_APP,Manifest::TYPE_LOGIN_SCREEN_EXTENSION,Manifest::TYPE_CHROMEOS_SYSTEM_EXTENSION});
    provider->AddFeature("runtime.onConnectExternal", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("runtime.onConnectNative");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"permission:nativeMessaging"});
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP,Manifest::TYPE_PLATFORM_APP,Manifest::TYPE_LOGIN_SCREEN_EXTENSION,Manifest::TYPE_CHROMEOS_SYSTEM_EXTENSION});
    provider->AddFeature("runtime.onConnectNative", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("runtime.onMessage");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kLockscreenExtension,mojom::ContextType::kOffscreenExtension,mojom::ContextType::kUnprivilegedExtension,mojom::ContextType::kUserScript,mojom::ContextType::kContentScript});
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP,Manifest::TYPE_PLATFORM_APP,Manifest::TYPE_LOGIN_SCREEN_EXTENSION,Manifest::TYPE_CHROMEOS_SYSTEM_EXTENSION});
    provider->AddFeature("runtime.onMessage", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("runtime.onMessageExternal");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kLockscreenExtension,mojom::ContextType::kOffscreenExtension});
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP,Manifest::TYPE_PLATFORM_APP,Manifest::TYPE_LOGIN_SCREEN_EXTENSION,Manifest::TYPE_CHROMEOS_SYSTEM_EXTENSION});
    provider->AddFeature("runtime.onMessageExternal", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("runtime.onUserScriptConnect");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP,Manifest::TYPE_PLATFORM_APP,Manifest::TYPE_LOGIN_SCREEN_EXTENSION,Manifest::TYPE_CHROMEOS_SYSTEM_EXTENSION});
    feature->set_min_manifest_version(3);
    provider->AddFeature("runtime.onUserScriptConnect", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("runtime.onUserScriptMessage");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP,Manifest::TYPE_PLATFORM_APP,Manifest::TYPE_LOGIN_SCREEN_EXTENSION,Manifest::TYPE_CHROMEOS_SYSTEM_EXTENSION});
    feature->set_min_manifest_version(3);
    provider->AddFeature("runtime.onUserScriptMessage", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("runtime.sendMessage");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({mojom::ContextType::kPrivilegedWebPage,mojom::ContextType::kContentScript,mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kLockscreenExtension,mojom::ContextType::kOffscreenExtension,mojom::ContextType::kUnprivilegedExtension,mojom::ContextType::kUserScript,mojom::ContextType::kWebPage});
      feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP,Manifest::TYPE_PLATFORM_APP,Manifest::TYPE_LOGIN_SCREEN_EXTENSION,Manifest::TYPE_CHROMEOS_SYSTEM_EXTENSION});
      feature->set_matches({"<all_urls>"});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("runtime.sendMessage");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({mojom::ContextType::kWebUi});
      feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP,Manifest::TYPE_PLATFORM_APP,Manifest::TYPE_LOGIN_SCREEN_EXTENSION,Manifest::TYPE_CHROMEOS_SYSTEM_EXTENSION});
      feature->set_matches({"chrome://password-change/*","chrome://file-manager/*"});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("runtime.sendMessage");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({mojom::ContextType::kUntrustedWebUi});
      feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP,Manifest::TYPE_PLATFORM_APP,Manifest::TYPE_LOGIN_SCREEN_EXTENSION,Manifest::TYPE_CHROMEOS_SYSTEM_EXTENSION});
      feature->set_matches({"chrome-untrusted://terminal/*"});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("runtime.sendMessage");
    provider->AddFeature("runtime.sendMessage", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("runtime.sendNativeMessage");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"permission:nativeMessaging"});
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP,Manifest::TYPE_PLATFORM_APP,Manifest::TYPE_LOGIN_SCREEN_EXTENSION,Manifest::TYPE_CHROMEOS_SYSTEM_EXTENSION});
    provider->AddFeature("runtime.sendNativeMessage", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("serial");
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"permission:serial"});
    provider->AddFeature("serial", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("socket");
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"permission:socket"});
    provider->AddFeature("socket", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("sockets.tcp");
      feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
      feature->set_dependencies({"manifest:sockets"});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("sockets.tcp");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({mojom::ContextType::kUntrustedWebUi});
      feature->set_matches({"chrome-untrusted://terminal/*"});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("sockets.tcp");
    provider->AddFeature("sockets.tcp", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("sockets.tcpServer");
      feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
      feature->set_dependencies({"manifest:sockets"});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("sockets.tcpServer");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({mojom::ContextType::kUntrustedWebUi});
      feature->set_matches({"chrome-untrusted://terminal/*"});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("sockets.tcpServer");
    provider->AddFeature("sockets.tcpServer", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("sockets.udp");
      feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
      feature->set_dependencies({"manifest:sockets"});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("sockets.udp");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({mojom::ContextType::kUntrustedWebUi});
      feature->set_matches({"chrome-untrusted://terminal/*"});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("sockets.udp");
    provider->AddFeature("sockets.udp", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("storage");
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kUnprivilegedExtension,mojom::ContextType::kContentScript});
    feature->set_dependencies({"permission:storage"});
    provider->AddFeature("storage", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("storage.session");
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kUnprivilegedExtension,mojom::ContextType::kContentScript});
    feature->set_dependencies({"permission:storage"});
    feature->set_min_manifest_version(3);
    provider->AddFeature("storage.session", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("system.cpu");
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"permission:system.cpu"});
    provider->AddFeature("system.cpu", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("system.display");
      feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
      feature->set_dependencies({"permission:system.display"});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("system.display");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({mojom::ContextType::kWebUi});
      feature->set_matches({"chrome://os-settings/*"});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("system.display");
    provider->AddFeature("system.display", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("system.memory");
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"permission:system.memory"});
    provider->AddFeature("system.memory", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("system.network");
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"permission:system.network"});
    provider->AddFeature("system.network", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("system.storage");
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"permission:system.storage"});
    provider->AddFeature("system.storage", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("system.storage.getAvailableCapacity");
    feature->set_channel(version_info::Channel::DEV);
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"permission:system.storage"});
    provider->AddFeature("system.storage.getAvailableCapacity", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("test");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kPrivilegedWebPage,mojom::ContextType::kContentScript,mojom::ContextType::kLockscreenExtension,mojom::ContextType::kOffscreenExtension,mojom::ContextType::kUnprivilegedExtension,mojom::ContextType::kUserScript});
      feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_HOSTED_APP,Manifest::TYPE_LEGACY_PACKAGED_APP,Manifest::TYPE_PLATFORM_APP,Manifest::TYPE_SHARED_MODULE,Manifest::TYPE_THEME,Manifest::TYPE_LOGIN_SCREEN_EXTENSION,Manifest::TYPE_CHROMEOS_SYSTEM_EXTENSION});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("test");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({mojom::ContextType::kWebUi});
      feature->set_matches({"chrome://extensions/*","chrome://file-manager/*","chrome://webui-test/*"});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("test");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({mojom::ContextType::kUntrustedWebUi});
      feature->set_matches({"chrome-untrusted://api-test/*"});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("test");
    provider->AddFeature("test", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("types");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP,Manifest::TYPE_PLATFORM_APP});
    feature->set_internal(true);
    provider->AddFeature("types", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("usb");
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"permission:usb"});
    provider->AddFeature("usb", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("userScripts");
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"permission:userScripts"});
    feature->set_developer_mode_only(true);
    feature->set_feature_flag("ApiUserScripts");
    provider->AddFeature("userScripts", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("virtualKeyboard");
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"permission:virtualKeyboard"});
    provider->AddFeature("virtualKeyboard", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("vpnProvider");
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"permission:vpnProvider"});
    provider->AddFeature("vpnProvider", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("webRequest");
    feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
    feature->set_dependencies({"permission:webRequest"});
    provider->AddFeature("webRequest", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("webRequestInternal");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
      feature->set_internal(true);
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("webRequestInternal");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({mojom::ContextType::kWebUi});
      feature->set_internal(true);
      feature->set_matches({"chrome://add-supervision/*","chrome://assistant-optin/*","chrome://chrome-signin/*","chrome://discards/*","chrome://home/*","chrome://mobilesetup/*","chrome://oobe/*","chrome://os-settings/*","chrome://parent-access/*","chrome://password-change/*","chrome://lock-reauth/*"});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("webRequestInternal");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({mojom::ContextType::kWebPage});
      feature->set_internal(true);
      feature->set_requires_delegated_availability_check(true);
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("webRequestInternal");
    provider->AddFeature("webRequestInternal", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("webViewInternal");
      feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
      feature->set_dependencies({"permission:webview"});
      feature->set_internal(true);
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("webViewInternal");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({mojom::ContextType::kWebUi});
      feature->set_internal(true);
      feature->set_matches({"chrome://add-supervision/*","chrome://assistant-optin/*","chrome://chrome-signin/*","chrome://discards/*","chrome://home/*","chrome://mobilesetup/*","chrome://oobe/*","chrome://os-settings/*","chrome://parent-access/*","chrome://password-change/*","chrome://lock-reauth/*"});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("webViewInternal");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({mojom::ContextType::kWebPage});
      feature->set_internal(true);
      feature->set_requires_delegated_availability_check(true);
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("webViewInternal");
    provider->AddFeature("webViewInternal", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("webViewRequest");
      feature->set_contexts({mojom::ContextType::kPrivilegedExtension});
      feature->set_dependencies({"permission:webview"});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("webViewRequest");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({mojom::ContextType::kWebUi});
      feature->set_matches({"chrome://add-supervision/*","chrome://assistant-optin/*","chrome://chrome-signin/*","chrome://discards/*","chrome://home/*","chrome://mobilesetup/*","chrome://oobe/*","chrome://os-settings/*","chrome://parent-access/*"});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("webViewRequest");
    provider->AddFeature("webViewRequest", feature);
  }

}

}  // namespace extensions