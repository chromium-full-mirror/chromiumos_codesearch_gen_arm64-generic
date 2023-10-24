// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE FEATURES FILE:
//   ['../../../../../../../home/chrome-bot/chrome_root/src/extensions/common/api/_behavior_features.json']
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/behavior_features.h"

#include "extensions/common/features/complex_feature.h"
#include "extensions/common/features/feature_provider.h"
#include "extensions/common/features/manifest_feature.h"
#include "extensions/common/features/permission_feature.h"
#include "extensions/common/mojom/feature_session_type.mojom.h"

namespace extensions {

void AddCoreBehaviorFeatures(FeatureProvider* provider) {
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("allow_secondary_kiosk_app_enabled_on_launch");
    feature->set_channel(version_info::Channel::DEV);
    feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
    provider->AddFeature("allow_secondary_kiosk_app_enabled_on_launch", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("allow_usb_devices_permission_interface_class");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
    feature->set_session_types({mojom::FeatureSessionType::kKiosk});
    provider->AddFeature("allow_usb_devices_permission_interface_class", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("imprivata_extension");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_dependencies({"behavior:imprivata_login_screen_extension"});
      feature->set_extension_types({Manifest::TYPE_LOGIN_SCREEN_EXTENSION});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("imprivata_extension");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_dependencies({"behavior:imprivata_in_session_extension"});
      feature->set_extension_types({Manifest::TYPE_EXTENSION});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("imprivata_extension");
    provider->AddFeature("imprivata_extension", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("imprivata_in_session_extension");
    feature->set_allowlist({"A24DE1B21A67E25FB62AC8491642038FE25DA75B","6B25164FFE2BADB5F1DBBD301CC022170267022D","4D15F9AFCF54E56F0A6E06D22DD15F133DCF0882","171F86E3D91235E5FC745282834BB3DA164F14B3","F7BDB4C21BFF955F851C6CF65167373BDEED6218","220ABCF657446B2CBEBDE2DDA09B6FC415E87FB7","B0092A67BFB22960DE49B11E9CA56035BD40BCFA","3899082721C4996840EA4DD3A7B604914FB915CF","0D0EF5C81661E90BAFD606EADD68D8BB5EDC7E9A","D53DFC9E0D738159557959ABCA61BDDC97470C87","579D5666AB7B27A2E9EA0B13FB7F70CA7D864F72","FC3BBFAD9D7E711BBBD8235E7640348A9B98EB5F"});
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_extension_types({Manifest::TYPE_EXTENSION});
    feature->set_location(SimpleFeature::POLICY_LOCATION);
    feature->set_platforms({Feature::CHROMEOS_PLATFORM,Feature::LACROS_PLATFORM});
    provider->AddFeature("imprivata_in_session_extension", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("imprivata_login_screen_extension");
    feature->set_allowlist({"E219EE36A3B40612FD2A8CD6937B03EF0C97D3FE","4DBFC1C52D6660DD90791976DF7FEF7B3D360509","CDA6A10BE50CE65C59B766D0CE6A27E8E0A1533F","D85454743B32D9F5ABF3E5F18DF78809F3A0ABD4","04569B963251EB28C0906099668D98EE65ECA2D8","7BF5B69C3ACA9E6ACA5C480661B8073EB9FA32A9","5F2EF8E9F7E975090278D6A0AD039860430C5684","97A4DC8AFC1FCF665C71B624A55675C297AB256C","A00EB72B456C374F1EA86C09833C7DBB6CD95CAE","51DDBADA37EF4D25AD03CB1BB6451799456FE183","DD97CAE4D8658003658140109BC119188A19A5B8","320857126E2180A5751AA384B7B7332A4964BD8C"});
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_extension_types({Manifest::TYPE_LOGIN_SCREEN_EXTENSION});
    feature->set_location(SimpleFeature::POLICY_LOCATION);
    feature->set_platforms({Feature::CHROMEOS_PLATFORM});
    provider->AddFeature("imprivata_login_screen_extension", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("key_permissions_in_login_screen");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_dependencies({"behavior:imprivata_login_screen_extension"});
    feature->set_extension_types({Manifest::TYPE_LOGIN_SCREEN_EXTENSION});
    feature->set_location(SimpleFeature::POLICY_LOCATION);
    feature->set_platforms({Feature::CHROMEOS_PLATFORM});
    provider->AddFeature("key_permissions_in_login_screen", feature);
  }
  {
    std::vector<Feature*> features;
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("signin_screen");
      feature->set_allowlist({"05D1DBD6E8B9C4690FFA7D50E6F60C5290DC662A"});
      feature->set_channel(version_info::Channel::CANARY);
      feature->set_component_extensions_auto_granted(false);
      feature->set_location(SimpleFeature::UNPACKED_LOCATION);
      feature->set_platforms({Feature::CHROMEOS_PLATFORM});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("signin_screen");
      feature->set_allowlist({"85DA1AC24AF23CDA9F5A19858EB9C6E9E1BA57F6","EC3DE21E048B67319893889529354DFBFA96FD23","A19608AC34215B127FF9D7C006D67F5C8ED8146D","6B748A5C005F21B7CBCF4170C2F883E435DEB511"});
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_component_extensions_auto_granted(false);
      feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
      feature->set_location(SimpleFeature::POLICY_LOCATION);
      feature->set_platforms({Feature::CHROMEOS_PLATFORM});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("signin_screen");
      feature->set_allowlist({"93B7178E8C275515C38D4F43D9DF4648F0EA9B03","EC3DE21E048B67319893889529354DFBFA96FD23","A19608AC34215B127FF9D7C006D67F5C8ED8146D","6B748A5C005F21B7CBCF4170C2F883E435DEB511","075FF17D52ED6E3C2E5EC4D99F188E7A25AF47EA"});
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_component_extensions_auto_granted(false);
      feature->set_extension_types({Manifest::TYPE_LOGIN_SCREEN_EXTENSION});
      feature->set_location(SimpleFeature::POLICY_LOCATION);
      feature->set_platforms({Feature::CHROMEOS_PLATFORM});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("signin_screen");
      feature->set_allowlist({"E24F1786D842E91E74C27929B0B3715A4689A473","6F9E349A0561C78A0D3F41496FE521C5151C7F71","8EBDF73405D0B84CEABB8C7513C9B9FA9F1DC2CE","06BE211D5F014BAB34BC22D9DDA09C63A81D828E","3F50C3A83839D9C76334BCE81CDEC06174F266AF","2F47B526FA71F44816618C41EC55E5EE9543FDCC","86672C8D7A04E24EFB244BF96FE518C4C4809F73","1CF709D51B2B96CF79D00447300BD3BFBE401D21","40FF1103292F40C34066E023B8BE8CAE18306EAE","3C654B3B6682CA194E75AD044CEDE927675DDEE8","2FCBCE08B34CCA1728A85F1EFBD9A34DD2558B2E","7910EAFDAF64B947E1CB31B333A9BD14CA556B6C"});
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_component_extensions_auto_granted(false);
      feature->set_platforms({Feature::CHROMEOS_PLATFORM});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("signin_screen");
      feature->set_allowlist({"FA84F98B32AFC3013F5711F8711F8F38DB210AB7","7FE4A999359A456C4B0FB7B7AD85CEA29CA50519"});
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_component_extensions_auto_granted(false);
      feature->set_extension_types({Manifest::TYPE_LOGIN_SCREEN_EXTENSION});
      feature->set_location(SimpleFeature::POLICY_LOCATION);
      feature->set_platforms({Feature::CHROMEOS_PLATFORM});
      features.push_back(feature);
    }
    {
      SimpleFeature* feature = new SimpleFeature();
      feature->set_name("signin_screen");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_component_extensions_auto_granted(false);
      feature->set_dependencies({"behavior:imprivata_login_screen_extension"});
      feature->set_extension_types({Manifest::TYPE_LOGIN_SCREEN_EXTENSION});
      feature->set_location(SimpleFeature::POLICY_LOCATION);
      feature->set_platforms({Feature::CHROMEOS_PLATFORM});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("signin_screen");
    provider->AddFeature("signin_screen", feature);
  }
  {
    SimpleFeature* feature = new SimpleFeature();
    feature->set_name("zoom_without_bubble");
    feature->set_allowlist({"CBCC42ABED43A4B58FE3810E62AFFA010EB0349F"});
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_extension_types({Manifest::TYPE_EXTENSION});
    provider->AddFeature("zoom_without_bubble", feature);
  }

}

}  // namespace extensions