// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE FEATURES FILE:
//   ['../../../../../../../home/chrome-bot/chrome_root/src/chrome/common/extensions/api/_api_features.json']
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/api_features.h"

#include "extensions/common/features/complex_feature.h"
#include "extensions/common/features/feature_provider.h"
#include "extensions/common/features/manifest_feature.h"
#include "extensions/common/features/permission_feature.h"
#include "extensions/common/mojom/feature_session_type.mojom.h"

namespace extensions {

void AddChromeAPIFeatures(FeatureProvider* provider) {
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("accessibilityFeatures");
      feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
      feature->set_dependencies({"permission:accessibilityFeatures.modify"});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("accessibilityFeatures");
      feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
      feature->set_dependencies({"permission:accessibilityFeatures.read"});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("accessibilityFeatures");
    provider->AddFeature("accessibilityFeatures", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("accessibilityPrivate");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:accessibilityPrivate"});
    provider->AddFeature("accessibilityPrivate", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("accessibilityPrivate.onTwoFingerTouchStart");
    feature->set_allowlist({"E703483CEF33DEC18B4B6DD84B5C776FB9182BDB","A3BC37E2148AC4E99BE4B16AF9D42DD1E592BBBE","1C93BD3CF875F4A73C0B2A163BB8FBDA8B8B3D80","307E96539209F95A1A8740C713E6998A73657D96","4F25792AF1AA7483936DE29C07806F203C7170A0","BD8781D757D830FC2E85470A1B6E8A718B7EE0D9","4AC2B6C63C6480D150DFDA13E4A5956EB1D0DDBB","81986D4F846CEDDDB962643FA501D1780DD441BB","A9A9FC0228ADF541F0334F22BEFB8F9C245B21D7"});
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({});
    feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
    feature->set_session_types({mojom::FeatureSessionType::kKiosk});
    provider->AddFeature("accessibilityPrivate.onTwoFingerTouchStart", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("accessibilityPrivate.onTwoFingerTouchStop");
    feature->set_allowlist({"E703483CEF33DEC18B4B6DD84B5C776FB9182BDB","A3BC37E2148AC4E99BE4B16AF9D42DD1E592BBBE","1C93BD3CF875F4A73C0B2A163BB8FBDA8B8B3D80","307E96539209F95A1A8740C713E6998A73657D96","4F25792AF1AA7483936DE29C07806F203C7170A0","BD8781D757D830FC2E85470A1B6E8A718B7EE0D9","4AC2B6C63C6480D150DFDA13E4A5956EB1D0DDBB","81986D4F846CEDDDB962643FA501D1780DD441BB","A9A9FC0228ADF541F0334F22BEFB8F9C245B21D7"});
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({});
    feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
    feature->set_session_types({mojom::FeatureSessionType::kKiosk});
    provider->AddFeature("accessibilityPrivate.onTwoFingerTouchStop", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("accessibilityServicePrivate");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:accessibilityServicePrivate"});
    feature->set_platforms({Feature::CHROMEOS_PLATFORM,Feature::LACROS_PLATFORM});
    provider->AddFeature("accessibilityServicePrivate", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("action");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"manifest:action"});
    provider->AddFeature("action", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("action.getBadgeTextColor");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"manifest:action"});
    provider->AddFeature("action.getBadgeTextColor", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("action.isEnabled");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"manifest:action"});
    provider->AddFeature("action.isEnabled", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("action.openPopup");
      feature->set_channel(version_info::Channel::DEV);
      feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
      feature->set_dependencies({"manifest:action"});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("action.openPopup");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
      feature->set_dependencies({"manifest:action"});
      feature->set_location(SimpleFeature::POLICY_LOCATION);
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("action.openPopup");
    provider->AddFeature("action.openPopup", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("action.setBadgeTextColor");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"manifest:action"});
    provider->AddFeature("action.setBadgeTextColor", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("activityLogPrivate");
      feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
      feature->set_dependencies({"permission:activityLogPrivate"});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("activityLogPrivate");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({Feature::WEBUI_CONTEXT});
      feature->set_matches({"chrome://extensions/*"});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("activityLogPrivate");
    provider->AddFeature("activityLogPrivate", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("app");
    feature->set_blocklist({"2FC374607C2DF285634B67C64A2E356C607091C3","3727DD3E564B6055387425027AD74C58784ACC15","12E618C3C6E97495AAECF2AC12DEB082353241C6","06BE211D5F014BAB34BC22D9DDA09C63A81D828E","F94EE6AB36D6C6588670B2B01EB65212D9C64E33","B9EF10DDFEA11EF77873CC5009809E5037FC4C7A"});
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT,Feature::UNBLESSED_EXTENSION_CONTEXT,Feature::CONTENT_SCRIPT_CONTEXT,Feature::WEB_PAGE_CONTEXT,Feature::BLESSED_WEB_PAGE_CONTEXT});
    feature->set_disallow_for_service_workers(true);
    feature->set_extension_types({Manifest::TYPE_HOSTED_APP,Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP});
    feature->set_matches({"<all_urls>"});
    feature->set_max_manifest_version(2);
    provider->AddFeature("app", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("appviewTag");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:appview"});
    feature->set_internal(true);
    provider->AddFeature("appviewTag", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("autofillPrivate");
      feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
      feature->set_dependencies({"permission:autofillPrivate"});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("autofillPrivate");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({Feature::WEBUI_CONTEXT});
      feature->set_matches({"chrome://settings/*"});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("autofillPrivate");
    provider->AddFeature("autofillPrivate", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("autotestPrivate");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:autotestPrivate"});
    provider->AddFeature("autotestPrivate", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("bookmarkManagerPrivate");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({Feature::WEBUI_CONTEXT});
    feature->set_matches({"chrome://bookmarks/*","chrome://bookmarks-side-panel.top-chrome/*","chrome://read-later.top-chrome/*"});
    provider->AddFeature("bookmarkManagerPrivate", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("bookmarks");
      feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
      feature->set_dependencies({"permission:bookmarks"});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("bookmarks");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({Feature::WEBUI_CONTEXT});
      feature->set_matches({"chrome://bookmarks/*","chrome://bookmarks-side-panel.top-chrome/*","chrome://read-later.top-chrome/*","chrome://welcome/*"});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("bookmarks");
    provider->AddFeature("bookmarks", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("bookmarks.export");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({Feature::WEBUI_CONTEXT});
    feature->set_dependencies({});
    feature->set_matches({"chrome://bookmarks/*"});
    provider->AddFeature("bookmarks.export", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("bookmarks.import");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({Feature::WEBUI_CONTEXT});
    feature->set_dependencies({});
    feature->set_matches({"chrome://bookmarks/*"});
    provider->AddFeature("bookmarks.import", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("brailleDisplayPrivate");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:brailleDisplayPrivate"});
    provider->AddFeature("brailleDisplayPrivate", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("browserAction");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"manifest:browser_action"});
    provider->AddFeature("browserAction", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("browserAction.openPopup");
      feature->set_channel(version_info::Channel::DEV);
      feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
      feature->set_dependencies({"manifest:browser_action"});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("browserAction.openPopup");
      feature->set_allowlist({"A4577D8C2AF4CF26F40CBCA83FFA4251D6F6C8F8","A8208CCC87F8261AFAEB6B85D5E8D47372DDEA6B","EFCF5358672FEE04789FD2EC3638A67ADEDB6C8C"});
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
      feature->set_dependencies({"manifest:browser_action"});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("browserAction.openPopup");
    provider->AddFeature("browserAction.openPopup", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("browsingData");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:browsingData"});
    provider->AddFeature("browsingData", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("certificateProvider");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:certificateProvider"});
    provider->AddFeature("certificateProvider", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("certificateProvider.onCertificatesRequested");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:certificateProvider"});
    feature->set_max_manifest_version(2);
    provider->AddFeature("certificateProvider.onCertificatesRequested", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("certificateProvider.onSignDigestRequested");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:certificateProvider"});
    feature->set_max_manifest_version(2);
    provider->AddFeature("certificateProvider.onSignDigestRequested", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("certificateProviderInternal");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:certificateProvider"});
    feature->set_internal(true);
    provider->AddFeature("certificateProviderInternal", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("chromeWebViewInternal");
      feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
      feature->set_dependencies({"permission:webview"});
      feature->set_internal(true);
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("chromeWebViewInternal");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({Feature::WEBUI_CONTEXT});
      feature->set_internal(true);
      feature->set_matches({"chrome://assistant-optin/*","chrome://add-supervision/*","chrome://chrome-signin/*","chrome://discards/*","chrome://mobilesetup/*","chrome://oobe/*","chrome://os-settings/*","chrome://parent-access/*","chrome://password-change/*","chrome://lock-reauth/*"});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("chromeWebViewInternal");
      feature->set_channel(version_info::Channel::DEV);
      feature->set_contexts({Feature::WEB_PAGE_CONTEXT});
      feature->set_internal(true);
      feature->set_requires_delegated_availability_check(true);
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("chromeWebViewInternal");
    provider->AddFeature("chromeWebViewInternal", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("chromeosInfoPrivate");
      feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
      feature->set_dependencies({"permission:chromeosInfoPrivate"});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("chromeosInfoPrivate");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({Feature::WEBUI_CONTEXT});
      feature->set_matches({"chrome://version/*"});
      feature->set_platforms({Feature::CHROMEOS_PLATFORM,Feature::LACROS_PLATFORM});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("chromeosInfoPrivate");
    provider->AddFeature("chromeosInfoPrivate", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("commandLinePrivate");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:commandLinePrivate"});
    provider->AddFeature("commandLinePrivate", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("commands");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"manifest:commands"});
    provider->AddFeature("commands", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("contentSettings");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:contentSettings"});
    provider->AddFeature("contentSettings", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("contextMenus");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:contextMenus"});
    provider->AddFeature("contextMenus", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("cookies");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:cookies"});
    provider->AddFeature("cookies", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("crashReportPrivate");
      feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
      feature->set_dependencies({"permission:crashReportPrivate"});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("crashReportPrivate");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({Feature::WEBUI_CONTEXT});
      feature->set_matches({"chrome://camera-app/*","chrome://media-app/*"});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("crashReportPrivate");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({Feature::WEBUI_UNTRUSTED_CONTEXT});
      feature->set_matches({"chrome-untrusted://camera-app/*","chrome-untrusted://help-app/*","chrome-untrusted://media-app/*","chrome-untrusted://projector/*","chrome-untrusted://projector-annotator/*"});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("crashReportPrivate");
    provider->AddFeature("crashReportPrivate", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("dashboardPrivate");
    feature->set_allowlist({"B44D08FD98F1523ED5837D78D0A606EA9D6206E5"});
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    provider->AddFeature("dashboardPrivate", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("debugger");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:debugger"});
    feature->set_developer_mode_only(true);
    provider->AddFeature("debugger", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("declarativeContent");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:declarativeContent"});
    provider->AddFeature("declarativeContent", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("desktopCapture");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:desktopCapture"});
    provider->AddFeature("desktopCapture", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("developerPrivate");
      feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
      feature->set_dependencies({"permission:developerPrivate","permission:management"});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("developerPrivate");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({Feature::WEBUI_CONTEXT});
      feature->set_matches({"chrome://extensions/*"});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("developerPrivate");
    provider->AddFeature("developerPrivate", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("documentScan");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:documentScan"});
    provider->AddFeature("documentScan", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("dom");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT,Feature::CONTENT_SCRIPT_CONTEXT});
    provider->AddFeature("dom", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("downloads");
      feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
      feature->set_dependencies({"permission:downloads"});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("downloads");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({Feature::WEBUI_CONTEXT});
      feature->set_matches({"chrome://download-shelf.top-chrome/*"});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("downloads");
    provider->AddFeature("downloads", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("downloadsInternal");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
      feature->set_dependencies({"permission:downloads"});
      feature->set_internal(true);
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("downloadsInternal");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({Feature::WEBUI_CONTEXT});
      feature->set_internal(true);
      feature->set_matches({"chrome://download-shelf.top-chrome/*"});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("downloadsInternal");
    provider->AddFeature("downloadsInternal", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("echoPrivate");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:echoPrivate"});
    provider->AddFeature("echoPrivate", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("enterprise.deviceAttributes");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:enterprise.deviceAttributes"});
    provider->AddFeature("enterprise.deviceAttributes", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("enterprise.hardwarePlatform");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:enterprise.hardwarePlatform"});
    provider->AddFeature("enterprise.hardwarePlatform", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("enterprise.networkingAttributes");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:enterprise.networkingAttributes"});
    provider->AddFeature("enterprise.networkingAttributes", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("enterprise.platformKeys");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:enterprise.platformKeys"});
    provider->AddFeature("enterprise.platformKeys", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("enterprise.platformKeysInternal");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:enterprise.platformKeys"});
    feature->set_internal(true);
    provider->AddFeature("enterprise.platformKeysInternal", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("enterprise.platformKeysPrivate");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:enterprise.platformKeysPrivate"});
    provider->AddFeature("enterprise.platformKeysPrivate", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("enterprise.reportingPrivate");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:enterprise.reportingPrivate"});
    provider->AddFeature("enterprise.reportingPrivate", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("enterprise.reportingPrivate.getAvInfo");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:enterprise.reportingPrivate"});
    feature->set_platforms({Feature::WIN_PLATFORM});
    provider->AddFeature("enterprise.reportingPrivate.getAvInfo", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("enterprise.reportingPrivate.getFileSystemInfo");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:enterprise.reportingPrivate"});
    feature->set_platforms({Feature::WIN_PLATFORM,Feature::MACOSX_PLATFORM,Feature::LINUX_PLATFORM});
    provider->AddFeature("enterprise.reportingPrivate.getFileSystemInfo", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("enterprise.reportingPrivate.getHotfixes");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:enterprise.reportingPrivate"});
    feature->set_platforms({Feature::WIN_PLATFORM});
    provider->AddFeature("enterprise.reportingPrivate.getHotfixes", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("enterprise.reportingPrivate.getSettings");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:enterprise.reportingPrivate"});
    feature->set_platforms({Feature::WIN_PLATFORM,Feature::MACOSX_PLATFORM});
    provider->AddFeature("enterprise.reportingPrivate.getSettings", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("extension");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP});
    provider->AddFeature("extension", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("extension.getBackgroundPage");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_disallow_for_service_workers(true);
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP});
    provider->AddFeature("extension.getBackgroundPage", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("extension.getExtensionTabs");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_disallow_for_service_workers(true);
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP});
    feature->set_max_manifest_version(2);
    provider->AddFeature("extension.getExtensionTabs", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("extension.getURL");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT,Feature::UNBLESSED_EXTENSION_CONTEXT,Feature::CONTENT_SCRIPT_CONTEXT});
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP});
    feature->set_max_manifest_version(2);
    provider->AddFeature("extension.getURL", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("extension.getViews");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_disallow_for_service_workers(true);
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP});
    provider->AddFeature("extension.getViews", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("extension.inIncognitoContext");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT,Feature::UNBLESSED_EXTENSION_CONTEXT,Feature::CONTENT_SCRIPT_CONTEXT});
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP});
    provider->AddFeature("extension.inIncognitoContext", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("extension.lastError");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT,Feature::UNBLESSED_EXTENSION_CONTEXT,Feature::CONTENT_SCRIPT_CONTEXT});
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP});
    feature->set_max_manifest_version(2);
    provider->AddFeature("extension.lastError", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("extension.onRequest");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT,Feature::UNBLESSED_EXTENSION_CONTEXT,Feature::CONTENT_SCRIPT_CONTEXT});
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP});
    feature->set_max_manifest_version(2);
    provider->AddFeature("extension.onRequest", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("extension.onRequestExternal");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP});
    feature->set_max_manifest_version(2);
    provider->AddFeature("extension.onRequestExternal", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("extension.sendRequest");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT,Feature::UNBLESSED_EXTENSION_CONTEXT,Feature::CONTENT_SCRIPT_CONTEXT});
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP});
    feature->set_max_manifest_version(2);
    provider->AddFeature("extension.sendRequest", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("extensionOptionsInternal");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({Feature::WEBUI_CONTEXT});
    feature->set_internal(true);
    feature->set_matches({"chrome://extensions/*"});
    provider->AddFeature("extensionOptionsInternal", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("extensionsManifestTypes");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({});
    feature->set_internal(true);
    provider->AddFeature("extensionsManifestTypes", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("fileBrowserHandler");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:fileBrowserHandler"});
    feature->set_disallow_for_service_workers(true);
    provider->AddFeature("fileBrowserHandler", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("fileBrowserHandlerInternal");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:fileBrowserHandler"});
    feature->set_disallow_for_service_workers(true);
    feature->set_internal(true);
    provider->AddFeature("fileBrowserHandlerInternal", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("fileManagerPrivate");
      feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
      feature->set_dependencies({"permission:fileManagerPrivate"});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("fileManagerPrivate");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({Feature::WEBUI_CONTEXT});
      feature->set_matches({"chrome://file-manager/*","chrome://webui-test/*"});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("fileManagerPrivate");
    provider->AddFeature("fileManagerPrivate", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("fileManagerPrivateInternal");
      feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
      feature->set_dependencies({"permission:fileManagerPrivate"});
      feature->set_internal(true);
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("fileManagerPrivateInternal");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({Feature::WEBUI_CONTEXT});
      feature->set_internal(true);
      feature->set_matches({"chrome://file-manager/*","chrome://webui-test/*"});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("fileManagerPrivateInternal");
    provider->AddFeature("fileManagerPrivateInternal", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("fileSystemProvider");
      feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
      feature->set_dependencies({"permission:fileSystemProvider"});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("fileSystemProvider");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({Feature::WEBUI_UNTRUSTED_CONTEXT});
      feature->set_matches({"chrome-untrusted://terminal/*"});
      feature->set_platforms({Feature::CHROMEOS_PLATFORM});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("fileSystemProvider");
    provider->AddFeature("fileSystemProvider", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("fileSystemProviderInternal");
      feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
      feature->set_dependencies({"permission:fileSystemProvider"});
      feature->set_internal(true);
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("fileSystemProviderInternal");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({Feature::WEBUI_UNTRUSTED_CONTEXT});
      feature->set_internal(true);
      feature->set_matches({"chrome-untrusted://terminal/*"});
      feature->set_platforms({Feature::CHROMEOS_PLATFORM});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("fileSystemProviderInternal");
    provider->AddFeature("fileSystemProviderInternal", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("fontSettings");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:fontSettings"});
    provider->AddFeature("fontSettings", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("gcm");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:gcm"});
    provider->AddFeature("gcm", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("history");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:history"});
    provider->AddFeature("history", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("identity");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:identity"});
    provider->AddFeature("identity", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("identity.getAccounts");
    feature->set_channel(version_info::Channel::DEV);
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:identity"});
    provider->AddFeature("identity.getAccounts", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("idltest");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:idltest"});
    provider->AddFeature("idltest", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("imageLoaderPrivate");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:imageLoaderPrivate"});
    provider->AddFeature("imageLoaderPrivate", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("imageWriterPrivate");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:imageWriterPrivate"});
    provider->AddFeature("imageWriterPrivate", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("input.ime");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:input"});
    provider->AddFeature("input.ime", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("inputMethodPrivate");
      feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
      feature->set_dependencies({"permission:inputMethodPrivate"});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("inputMethodPrivate");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({Feature::WEBUI_CONTEXT});
      feature->set_matches({"chrome://os-settings/*","chrome://settings/*"});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("inputMethodPrivate");
    provider->AddFeature("inputMethodPrivate", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("instanceID");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:gcm"});
    provider->AddFeature("instanceID", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("languageSettingsPrivate");
      feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
      feature->set_dependencies({"permission:languageSettingsPrivate"});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("languageSettingsPrivate");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({Feature::WEBUI_CONTEXT});
      feature->set_matches({"chrome://os-settings/*","chrome://settings/*"});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("languageSettingsPrivate");
    provider->AddFeature("languageSettingsPrivate", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("login");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:login"});
    provider->AddFeature("login", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("loginScreenStorage");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:loginScreenStorage"});
    provider->AddFeature("loginScreenStorage", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("loginScreenUi");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:loginScreenUi"});
    provider->AddFeature("loginScreenUi", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("loginState");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:loginState"});
    provider->AddFeature("loginState", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("manifestTypes");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({});
    feature->set_internal(true);
    provider->AddFeature("manifestTypes", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("mdns");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:mdns"});
    provider->AddFeature("mdns", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("mediaPlayerPrivate");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:mediaPlayerPrivate"});
    provider->AddFeature("mediaPlayerPrivate", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("mimeHandlerViewGuestInternal");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT,Feature::BLESSED_WEB_PAGE_CONTEXT,Feature::CONTENT_SCRIPT_CONTEXT,Feature::LOCK_SCREEN_EXTENSION_CONTEXT,Feature::OFFSCREEN_EXTENSION_CONTEXT,Feature::USER_SCRIPT_CONTEXT,Feature::WEB_PAGE_CONTEXT,Feature::WEBUI_CONTEXT,Feature::WEBUI_UNTRUSTED_CONTEXT,Feature::UNBLESSED_EXTENSION_CONTEXT});
    feature->set_internal(true);
    feature->set_matches({"<all_urls>"});
    provider->AddFeature("mimeHandlerViewGuestInternal", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("notifications");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:notifications"});
    provider->AddFeature("notifications", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("omnibox");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"manifest:omnibox"});
    provider->AddFeature("omnibox", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("pageAction");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"manifest:page_action"});
    provider->AddFeature("pageAction", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("pageCapture");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:pageCapture"});
    provider->AddFeature("pageCapture", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("passwordsPrivate");
      feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
      feature->set_dependencies({"permission:passwordsPrivate"});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("passwordsPrivate");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({Feature::WEBUI_CONTEXT});
      feature->set_matches({"chrome://settings/*","chrome://password-manager/*"});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("passwordsPrivate");
    provider->AddFeature("passwordsPrivate", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("pdfViewerPrivate");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:pdfViewerPrivate"});
    provider->AddFeature("pdfViewerPrivate", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("permissions");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP,Manifest::TYPE_PLATFORM_APP,Manifest::TYPE_CHROMEOS_SYSTEM_EXTENSION});
    provider->AddFeature("permissions", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("platformKeys");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:platformKeys"});
    provider->AddFeature("platformKeys", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("platformKeysInternal");
      feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
      feature->set_dependencies({"permission:platformKeys"});
      feature->set_internal(true);
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("platformKeysInternal");
      feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
      feature->set_dependencies({"permission:enterprise.platformKeys"});
      feature->set_internal(true);
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("platformKeysInternal");
    provider->AddFeature("platformKeysInternal", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("printing");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:printing"});
    provider->AddFeature("printing", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("printingMetrics");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:printingMetrics"});
    provider->AddFeature("printingMetrics", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("privacy");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:privacy"});
    provider->AddFeature("privacy", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("processes");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:processes"});
    provider->AddFeature("processes", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("proxy");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:proxy"});
    provider->AddFeature("proxy", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("quickUnlockPrivate");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({Feature::WEBUI_CONTEXT});
    feature->set_matches({"chrome://multidevice-setup/*","chrome://os-settings/*","chrome://settings/*","chrome://oobe/*"});
    feature->set_platforms({Feature::CHROMEOS_PLATFORM,Feature::LACROS_PLATFORM});
    provider->AddFeature("quickUnlockPrivate", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("readingList");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:readingList"});
    feature->set_feature_flag("ApiReadingList");
    provider->AddFeature("readingList", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("resourcesPrivate");
      feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
      feature->set_dependencies({"permission:resourcesPrivate"});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("resourcesPrivate");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({Feature::WEBUI_CONTEXT});
      feature->set_matches({"chrome://print/*"});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("resourcesPrivate");
    provider->AddFeature("resourcesPrivate", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("rtcPrivate");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:rtcPrivate"});
    provider->AddFeature("rtcPrivate", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("safeBrowsingPrivate");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:safeBrowsingPrivate"});
    provider->AddFeature("safeBrowsingPrivate", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("scripting");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:scripting"});
    provider->AddFeature("scripting", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("scripting.globalParams");
    feature->set_channel(version_info::Channel::UNKNOWN);
    feature->set_contexts({Feature::CONTENT_SCRIPT_CONTEXT});
    feature->set_dependencies({"permission:scripting"});
    provider->AddFeature("scripting.globalParams", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("search");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:search"});
    provider->AddFeature("search", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("sessions");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:sessions"});
    provider->AddFeature("sessions", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("settingsPrivate");
      feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
      feature->set_dependencies({"permission:settingsPrivate"});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("settingsPrivate");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({Feature::WEBUI_CONTEXT});
      feature->set_matches({"chrome://os-settings/*","chrome://settings/*","chrome://password-manager/*"});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("settingsPrivate");
    provider->AddFeature("settingsPrivate", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("sharedStoragePrivate");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:sharedStoragePrivate"});
    provider->AddFeature("sharedStoragePrivate", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("sidePanel");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:sidePanel"});
    provider->AddFeature("sidePanel", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("sidePanel.open");
      feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
      feature->set_dependencies({"permission:sidePanel"});
      feature->set_feature_flag("ApiSidePanelOpen");
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("sidePanel.open");
      feature->set_allowlist({"3CEFE7915CDBD48D769E214807ACAA51581724A0"});
      feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
      feature->set_dependencies({"permission:sidePanel"});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("sidePanel.open");
    provider->AddFeature("sidePanel.open", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("smartCardProviderPrivate");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:smartCardProviderPrivate"});
    provider->AddFeature("smartCardProviderPrivate", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("speechRecognitionPrivate");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:speechRecognitionPrivate"});
    provider->AddFeature("speechRecognitionPrivate", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("systemIndicator");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"manifest:system_indicator"});
    provider->AddFeature("systemIndicator", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("systemLog");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:systemLog"});
    provider->AddFeature("systemLog", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("systemPrivate");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:systemPrivate"});
    provider->AddFeature("systemPrivate", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("tabCapture");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:tabCapture"});
    provider->AddFeature("tabCapture", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("tabCapture.capture");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:tabCapture"});
    feature->set_disallow_for_service_workers(true);
    provider->AddFeature("tabCapture.capture", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("tabGroups");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:tabGroups"});
    provider->AddFeature("tabGroups", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("tabs");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
      feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("tabs");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({Feature::WEBUI_CONTEXT});
      feature->set_matches({"chrome://bookmarks/*","chrome://bookmarks-side-panel.top-chrome/*","chrome://read-later.top-chrome/*","chrome://tab-strip.top-chrome/*"});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("tabs");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({Feature::WEBUI_UNTRUSTED_CONTEXT});
      feature->set_matches({"chrome-untrusted://crosh/*","chrome-untrusted://terminal/*"});
      feature->set_platforms({Feature::CHROMEOS_PLATFORM});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("tabs");
    provider->AddFeature("tabs", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("tabs.executeScript");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP});
    feature->set_max_manifest_version(2);
    provider->AddFeature("tabs.executeScript", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("tabs.getAllInWindow");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP});
    feature->set_max_manifest_version(2);
    provider->AddFeature("tabs.getAllInWindow", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("tabs.getSelected");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP});
    feature->set_max_manifest_version(2);
    provider->AddFeature("tabs.getSelected", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("tabs.insertCSS");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP});
    feature->set_max_manifest_version(2);
    provider->AddFeature("tabs.insertCSS", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("tabs.onActiveChanged");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP});
    feature->set_max_manifest_version(2);
    provider->AddFeature("tabs.onActiveChanged", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("tabs.onHighlightChanged");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP});
    feature->set_max_manifest_version(2);
    provider->AddFeature("tabs.onHighlightChanged", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("tabs.onSelectionChanged");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP});
    feature->set_max_manifest_version(2);
    provider->AddFeature("tabs.onSelectionChanged", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("tabs.removeCSS");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP});
    feature->set_max_manifest_version(2);
    provider->AddFeature("tabs.removeCSS", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("tabs.sendRequest");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP});
    feature->set_max_manifest_version(2);
    provider->AddFeature("tabs.sendRequest", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("terminalPrivate");
      feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
      feature->set_dependencies({"permission:terminalPrivate"});
      feature->set_platforms({Feature::CHROMEOS_PLATFORM});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("terminalPrivate");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({Feature::WEBUI_UNTRUSTED_CONTEXT});
      feature->set_matches({"chrome-untrusted://crosh/*","chrome-untrusted://terminal/*"});
      feature->set_platforms({Feature::CHROMEOS_PLATFORM});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("terminalPrivate");
    provider->AddFeature("terminalPrivate", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("terminalPrivate.openTerminalProcess");
      feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
      feature->set_dependencies({"permission:terminalPrivate"});
      feature->set_platforms({Feature::CHROMEOS_PLATFORM});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("terminalPrivate.openTerminalProcess");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({Feature::WEBUI_UNTRUSTED_CONTEXT});
      feature->set_dependencies({});
      feature->set_matches({"chrome-untrusted://crosh/*"});
      feature->set_platforms({Feature::CHROMEOS_PLATFORM});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("terminalPrivate.openTerminalProcess");
    provider->AddFeature("terminalPrivate.openTerminalProcess", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("topSites");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:topSites"});
    provider->AddFeature("topSites", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("tts");
      feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
      feature->set_dependencies({"permission:tts"});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("tts");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({Feature::WEBUI_CONTEXT});
      feature->set_matches({"chrome://oobe/*"});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("tts");
    provider->AddFeature("tts", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("ttsEngine");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:ttsEngine"});
    provider->AddFeature("ttsEngine", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("usersPrivate");
      feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
      feature->set_dependencies({"permission:usersPrivate"});
      feature->set_platforms({Feature::CHROMEOS_PLATFORM});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("usersPrivate");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({Feature::WEBUI_CONTEXT});
      feature->set_matches({"chrome://os-settings/*"});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("usersPrivate");
    provider->AddFeature("usersPrivate", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("virtualKeyboardPrivate");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:virtualKeyboardPrivate"});
    provider->AddFeature("virtualKeyboardPrivate", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("wallpaper");
      feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
      feature->set_dependencies({"permission:wallpaper"});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("wallpaper");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({Feature::WEBUI_CONTEXT});
      feature->set_matches({"chrome://file-manager/*"});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("wallpaper");
    provider->AddFeature("wallpaper", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("webAuthenticationProxy");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:webAuthenticationProxy"});
    provider->AddFeature("webAuthenticationProxy", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("webNavigation");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:webNavigation"});
    provider->AddFeature("webNavigation", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("webcamPrivate");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:webcamPrivate"});
    provider->AddFeature("webcamPrivate", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("webrtcAudioPrivate");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:webrtcAudioPrivate"});
    provider->AddFeature("webrtcAudioPrivate", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("webrtcDesktopCapturePrivate");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:webrtcDesktopCapturePrivate"});
    provider->AddFeature("webrtcDesktopCapturePrivate", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("webrtcLoggingPrivate");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:webrtcLoggingPrivate"});
    provider->AddFeature("webrtcLoggingPrivate", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("webrtcLoggingPrivate.getLogsDirectory");
    feature->set_allowlist({"ADFA45434ABA2F1A4647E673F53FF37F8F6047A3","4F25792AF1AA7483936DE29C07806F203C7170A0","BD8781D757D830FC2E85470A1B6E8A718B7EE0D9","4AC2B6C63C6480D150DFDA13E4A5956EB1D0DDBB","81986D4F846CEDDDB962643FA501D1780DD441BB"});
    feature->set_component_extensions_auto_granted(false);
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:webrtcLoggingPrivate"});
    provider->AddFeature("webrtcLoggingPrivate.getLogsDirectory", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("webstorePrivate");
      feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
      feature->set_dependencies({"permission:webstorePrivate"});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("webstorePrivate");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({Feature::WEB_PAGE_CONTEXT});
      feature->set_feature_flag("NewWebstoreDomain");
      feature->set_matches({"https://chromewebstore.google.com/*"});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("webstorePrivate");
    provider->AddFeature("webstorePrivate", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("webviewTag");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:webview"});
    feature->set_internal(true);
    provider->AddFeature("webviewTag", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("windows");
      feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
      feature->set_dependencies({"api:tabs"});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("windows");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({Feature::WEBUI_CONTEXT});
      feature->set_matches({"chrome://bookmarks/*","chrome://tab-strip.top-chrome/*"});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("windows");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_contexts({Feature::WEBUI_UNTRUSTED_CONTEXT});
      feature->set_matches({"chrome-untrusted://crosh/*","chrome-untrusted://terminal/*"});
      feature->set_platforms({Feature::CHROMEOS_PLATFORM});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("windows");
    provider->AddFeature("windows", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("wmDesksPrivate");
    feature->set_contexts({Feature::BLESSED_EXTENSION_CONTEXT});
    feature->set_dependencies({"permission:wmDesksPrivate"});
    provider->AddFeature("wmDesksPrivate", feature);
  }

}

}  // namespace extensions