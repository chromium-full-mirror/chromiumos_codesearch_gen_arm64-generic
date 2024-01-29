// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE FEATURES FILE:
//   ['../../../../../../../home/chrome-bot/chrome_root/src/extensions/common/api/_permission_features.json']
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/permission_features.h"

#include "extensions/common/features/complex_feature.h"
#include "extensions/common/features/feature_provider.h"
#include "extensions/common/features/manifest_feature.h"
#include "extensions/common/features/permission_feature.h"
#include "extensions/common/mojom/context_type.mojom.h"
#include "extensions/common/mojom/feature_session_type.mojom.h"
#include "printing/buildflags/buildflags.h"

namespace extensions {

void AddCorePermissionFeatures(FeatureProvider* provider) {
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("activeTab");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP});
    provider->AddFeature("activeTab", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("alarms");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP,Manifest::TYPE_PLATFORM_APP});
    provider->AddFeature("alarms", feature);
  }
  {
    std::vector<Feature*> features;
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("app.window.alpha");
      feature->set_channel(version_info::Channel::DEV);
      feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
      features.push_back(feature);
    }
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("app.window.alpha");
      feature->set_allowlist({"0F42756099D914A026DADFA182871C015735DD95","2D22CDB6583FD0A13758AEBE8B15E45208B4E9A7","E7E2461CE072DF036CF9592740196159E2D7C089","A74A4D44C7CFCD8844830E6140C8D763E12DD8F3","312745D9BF916161191143F6490085EEA0434997","53041A2FA309EECED01FFC751E7399186E860B2C","A07A5B743CD82A1C2579DB77D353C98A23201EEF","F16F23C83C5F6DAD9B65A120448B34056DD80691","0F585FB1D0FDFBEBCE1FEB5E9DFFB6DA476B8C9B"});
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
      features.push_back(feature);
    }
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("app.window.alpha");
      feature->set_allowlist({"06BE211D5F014BAB34BC22D9DDA09C63A81D828E","F94EE6AB36D6C6588670B2B01EB65212D9C64E33","B9EF10DDFEA11EF77873CC5009809E5037FC4C7A"});
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_extension_types({Manifest::TYPE_EXTENSION});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("app.window.alpha");
    provider->AddFeature("app.window.alpha", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("app.window.alwaysOnTop");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
    provider->AddFeature("app.window.alwaysOnTop", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("app.window.fullscreen");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
    provider->AddFeature("app.window.fullscreen", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("app.window.fullscreen.overrideEsc");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
    provider->AddFeature("app.window.fullscreen.overrideEsc", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("app.window.ime");
    feature->set_allowlist({"06BE211D5F014BAB34BC22D9DDA09C63A81D828E","F94EE6AB36D6C6588670B2B01EB65212D9C64E33","B9EF10DDFEA11EF77873CC5009809E5037FC4C7A"});
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_extension_types({Manifest::TYPE_EXTENSION});
    feature->set_platforms({Feature::CHROMEOS_PLATFORM});
    provider->AddFeature("app.window.ime", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("app.window.shape");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
    provider->AddFeature("app.window.shape", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("appview");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
    provider->AddFeature("appview", feature);
  }
  {
    std::vector<Feature*> features;
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("audio");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_PLATFORM_APP});
      feature->set_platforms({Feature::CHROMEOS_PLATFORM,Feature::LACROS_PLATFORM});
      feature->set_session_types({mojom::FeatureSessionType::kKiosk});
      features.push_back(feature);
    }
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("audio");
      feature->set_allowlist({"75C7F4B720314B6CB1B5817CD86089DB95CD2461"});
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_extension_types({Manifest::TYPE_EXTENSION});
      feature->set_platforms({Feature::CHROMEOS_PLATFORM});
      features.push_back(feature);
    }
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("audio");
      feature->set_channel(version_info::Channel::DEV);
      feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
      features.push_back(feature);
    }
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("audio");
      feature->set_allowlist({"8C3741E3AF0B93B6E8E0DDD499BB0B74839EA578","E703483CEF33DEC18B4B6DD84B5C776FB9182BDB","A3BC37E2148AC4E99BE4B16AF9D42DD1E592BBBE","1C93BD3CF875F4A73C0B2A163BB8FBDA8B8B3D80","307E96539209F95A1A8740C713E6998A73657D96","4F25792AF1AA7483936DE29C07806F203C7170A0","BD8781D757D830FC2E85470A1B6E8A718B7EE0D9","4AC2B6C63C6480D150DFDA13E4A5956EB1D0DDBB","81986D4F846CEDDDB962643FA501D1780DD441BB"});
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("audio");
    provider->AddFeature("audio", feature);
  }
  {
    std::vector<Feature*> features;
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("audioCapture");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
      features.push_back(feature);
    }
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("audioCapture");
      feature->set_allowlist({"3F50C3A83839D9C76334BCE81CDEC06174F266AF","39BE69F11F68E4EED080DA3DC2394F7885B7AFF9","FF78670081967CE21DB86A04AD94A0498F01E20A","0C0426C12F94156F330FFAF346A976BA8878DE78","AC4538682FCECD28587C7A0F80849F78F4872BC2","CCA4D85A67ADD65DA6C02E49EE3C080C54A8211C","05EBA3051DFCA6AF17070AEE5FE8C66322FF4738"});
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_extension_types({Manifest::TYPE_EXTENSION});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("audioCapture");
    provider->AddFeature("audioCapture", feature);
  }
  {
    std::vector<Feature*> features;
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("bluetoothPrivate");
      feature->set_allowlist({"1C93BD3CF875F4A73C0B2A163BB8FBDA8B8B3D80","A3BC37E2148AC4E99BE4B16AF9D42DD1E592BBBE","E703483CEF33DEC18B4B6DD84B5C776FB9182BDB","307E96539209F95A1A8740C713E6998A73657D96","4F25792AF1AA7483936DE29C07806F203C7170A0","BD8781D757D830FC2E85470A1B6E8A718B7EE0D9","4AC2B6C63C6480D150DFDA13E4A5956EB1D0DDBB","81986D4F846CEDDDB962643FA501D1780DD441BB","89715614FAA2B4C2853802D70261D2A9D0756FC8","61FF4757F9420B62B19BA5C96084649339DB31F5","F3013F58BED982D1BC75943792FF877E5D458672","1B7734733E207CCE5C33BFAA544CA89634BF881F","23EEC2E3B4F6A62F5E6C8556364F7B749F9A809C","D238B3D5DB5836AEC1733DA4237CF93B7F96F495","B2FEB5422C0F105AED7027E363886F1FE29F13F6","2F6F6FDB84E0290ABAB7A9D7571EB344821E5F12","5B9E39EA374B136CBE7AED2D872003107642EAD5","E0E94FB0C01FFB9CDC7A5F098C99B5A8D2F95902","52E0557059A7A28F74ED1D92DDD997E0CCD37806","A9A9FC0228ADF541F0334F22BEFB8F9C245B21D7"});
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
      feature->set_platforms({Feature::CHROMEOS_PLATFORM,Feature::LACROS_PLATFORM,Feature::WIN_PLATFORM,Feature::MACOSX_PLATFORM,Feature::LINUX_PLATFORM});
      features.push_back(feature);
    }
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("bluetoothPrivate");
      feature->set_allowlist({"75C7F4B720314B6CB1B5817CD86089DB95CD2461","A430CF8BD146137B32764433F69685A53BF11F03","F9AEB1FBFD91AFB39A16798763FB4707E5EB71C2","A547E19FA29B6371C507EFF218B4948AF7B8597B"});
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_extension_types({Manifest::TYPE_EXTENSION});
      feature->set_platforms({Feature::CHROMEOS_PLATFORM});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("bluetoothPrivate");
    provider->AddFeature("bluetoothPrivate", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("cecPrivate");
    feature->set_allowlist({"1C93BD3CF875F4A73C0B2A163BB8FBDA8B8B3D80","A3BC37E2148AC4E99BE4B16AF9D42DD1E592BBBE","307E96539209F95A1A8740C713E6998A73657D96","E703483CEF33DEC18B4B6DD84B5C776FB9182BDB","4F25792AF1AA7483936DE29C07806F203C7170A0","BD8781D757D830FC2E85470A1B6E8A718B7EE0D9","4AC2B6C63C6480D150DFDA13E4A5956EB1D0DDBB","81986D4F846CEDDDB962643FA501D1780DD441BB","A9A9FC0228ADF541F0334F22BEFB8F9C245B21D7"});
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
    feature->set_platforms({Feature::CHROMEOS_PLATFORM});
    feature->set_session_types({mojom::FeatureSessionType::kKiosk});
    provider->AddFeature("cecPrivate", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("clipboard");
    feature->set_channel(version_info::Channel::DEV);
    feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
    feature->set_platforms({Feature::CHROMEOS_PLATFORM,Feature::LACROS_PLATFORM});
    provider->AddFeature("clipboard", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("declarativeNetRequest");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_extension_types({Manifest::TYPE_EXTENSION});
    provider->AddFeature("declarativeNetRequest", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("declarativeNetRequestFeedback");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_extension_types({Manifest::TYPE_EXTENSION});
    provider->AddFeature("declarativeNetRequestFeedback", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("declarativeNetRequestWithHostAccess");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_extension_types({Manifest::TYPE_EXTENSION});
    provider->AddFeature("declarativeNetRequestWithHostAccess", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("declarativeWebRequest");
    feature->set_channel(version_info::Channel::BETA);
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP});
    feature->set_max_manifest_version(2);
    provider->AddFeature("declarativeWebRequest", feature);
  }
  {
    std::vector<Feature*> features;
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("diagnostics");
      feature->set_channel(version_info::Channel::DEV);
      feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
      features.push_back(feature);
    }
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("diagnostics");
      feature->set_allowlist({"7AE714FFD394E073F0294CFA134C9F91DB5FBAA4","C7DA3A55C2355F994D3FDDAD120B426A0DF63843","75E3CFFFC530582C583E4690EF97C70B9C8423B7"});
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("diagnostics");
    provider->AddFeature("diagnostics", feature);
  }
  {
    std::vector<Feature*> features;
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("dns");
      feature->set_channel(version_info::Channel::DEV);
      feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_PLATFORM_APP});
      features.push_back(feature);
    }
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("dns");
      feature->set_allowlist({"7AE714FFD394E073F0294CFA134C9F91DB5FBAA4","C7DA3A55C2355F994D3FDDAD120B426A0DF63843","75E3CFFFC530582C583E4690EF97C70B9C8423B7"});
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_PLATFORM_APP});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("dns");
    provider->AddFeature("dns", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("externally_connectable.all_urls");
    feature->set_allowlist({"54ECAB4579BDE8FDAF9B29ED335F9946EE504A52","E24F1786D842E91E74C27929B0B3715A4689A473","A28C9619C4C41306FA5236FB4D94DA812F504DE8"});
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_extension_types({Manifest::TYPE_EXTENSION});
    provider->AddFeature("externally_connectable.all_urls", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("feedbackPrivate");
    feature->set_allowlist({"7910EAFDAF64B947E1CB31B333A9BD14CA556B6C","1C93BD3CF875F4A73C0B2A163BB8FBDA8B8B3D80","A3BC37E2148AC4E99BE4B16AF9D42DD1E592BBBE","8C3741E3AF0B93B6E8E0DDD499BB0B74839EA578","E703483CEF33DEC18B4B6DD84B5C776FB9182BDB","307E96539209F95A1A8740C713E6998A73657D96","4F25792AF1AA7483936DE29C07806F203C7170A0","BD8781D757D830FC2E85470A1B6E8A718B7EE0D9","4AC2B6C63C6480D150DFDA13E4A5956EB1D0DDBB","81986D4F846CEDDDB962643FA501D1780DD441BB","A9A9FC0228ADF541F0334F22BEFB8F9C245B21D7","D7986543275120831B39EF28D1327552FC343960","A291B26E088FA6BA53FFD72F0916F06EBA7C585A"});
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_PLATFORM_APP});
    provider->AddFeature("feedbackPrivate", feature);
  }
  {
    std::vector<Feature*> features;
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("fileSystem");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
      features.push_back(feature);
    }
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("fileSystem");
      feature->set_allowlist({"2FC374607C2DF285634B67C64A2E356C607091C3","3727DD3E564B6055387425027AD74C58784ACC15","12E618C3C6E97495AAECF2AC12DEB082353241C6","2B6C6A4A5940017146F3E58B7F90116206E84685","B6C2EFAB3EC3BF6EF03701408B6B09A67B2D0069","96FF2FFA5C9173C76D47184B3E86D267B37781DE","0136FCB13DB29FD5CD442F56E59E53B61F1DF96F","CBCC42ABED43A4B58FE3810E62AFFA010EB0349F"});
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_extension_types({Manifest::TYPE_EXTENSION});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("fileSystem");
    provider->AddFeature("fileSystem", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("fileSystem.directory");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
    provider->AddFeature("fileSystem.directory", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("fileSystem.requestFileSystem");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
    feature->set_platforms({Feature::CHROMEOS_PLATFORM});
    provider->AddFeature("fileSystem.requestFileSystem", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("fileSystem.retainEntries");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
    provider->AddFeature("fileSystem.retainEntries", feature);
  }
  {
    std::vector<Feature*> features;
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("fileSystem.write");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
      features.push_back(feature);
    }
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("fileSystem.write");
      feature->set_allowlist({"2FC374607C2DF285634B67C64A2E356C607091C3","3727DD3E564B6055387425027AD74C58784ACC15","12E618C3C6E97495AAECF2AC12DEB082353241C6"});
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_extension_types({Manifest::TYPE_EXTENSION});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("fileSystem.write");
    provider->AddFeature("fileSystem.write", feature);
  }
  {
    std::vector<Feature*> features;
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("hid");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
      features.push_back(feature);
    }
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("hid");
      feature->set_allowlist({"D7CD4B3956B1F6E970E4AFCBCD4094B1EF4D07B9","D4EFCCC0CC612380762758BB96C7997224BD6395","4839A26B29CD1BD021B2E126EF6D28C9CB84018B","8F44FBB4474CCDF23450B166C9E83E85BD03AE24"});
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_extension_types({Manifest::TYPE_EXTENSION});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("hid");
    provider->AddFeature("hid", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("idle");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP,Manifest::TYPE_PLATFORM_APP});
    provider->AddFeature("idle", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("lockScreen");
    feature->set_allowlist({"6F9C741B8E0E546652134F1138DF0284A7C9B21E","47448626CB266C60AA2404E4EB426E025DF497DF"});
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
    feature->set_platforms({Feature::CHROMEOS_PLATFORM});
    provider->AddFeature("lockScreen", feature);
  }
  {
    std::vector<Feature*> features;
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("mediaPerceptionPrivate");
      feature->set_allowlist({"E703483CEF33DEC18B4B6DD84B5C776FB9182BDB","A3BC37E2148AC4E99BE4B16AF9D42DD1E592BBBE","1C93BD3CF875F4A73C0B2A163BB8FBDA8B8B3D80","307E96539209F95A1A8740C713E6998A73657D96","4F25792AF1AA7483936DE29C07806F203C7170A0","BD8781D757D830FC2E85470A1B6E8A718B7EE0D9","4AC2B6C63C6480D150DFDA13E4A5956EB1D0DDBB","81986D4F846CEDDDB962643FA501D1780DD441BB","A9A9FC0228ADF541F0334F22BEFB8F9C245B21D7"});
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
      feature->set_platforms({Feature::CHROMEOS_PLATFORM});
      feature->set_session_types({mojom::FeatureSessionType::kKiosk});
      features.push_back(feature);
    }
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("mediaPerceptionPrivate");
      feature->set_allowlist({"3970B660353CA07962DAD1A5C1B75A7B87835943","E0DEFFD4518AF92D2DB1F575FF390EE35F58200C","B7B5CF88FE1AAE4B84B81B949A69AD18E512A33A"});
      feature->set_channel(version_info::Channel::DEV);
      feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
      feature->set_platforms({Feature::CHROMEOS_PLATFORM});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("mediaPerceptionPrivate");
    provider->AddFeature("mediaPerceptionPrivate", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("metricsPrivate");
    feature->set_allowlist({"2FC374607C2DF285634B67C64A2E356C607091C3","3727DD3E564B6055387425027AD74C58784ACC15","12E618C3C6E97495AAECF2AC12DEB082353241C6","3727DD3E564B6055387425027AD74C58784ACC15","C41AD9DCD670210295614257EF8C9945AD68D86E","7AE714FFD394E073F0294CFA134C9F91DB5FBAA4","C7DA3A55C2355F994D3FDDAD120B426A0DF63843","75E3CFFFC530582C583E4690EF97C70B9C8423B7","06BE211D5F014BAB34BC22D9DDA09C63A81D828E","CFBF7EE448FA48960FFDA7CEB30F7A21B26AA981","B9EF10DDFEA11EF77873CC5009809E5037FC4C7A","D2DAA9362153E8A5E3CF593E6DF4666421ABAD21","D7986543275120831B39EF28D1327552FC343960","A291B26E088FA6BA53FFD72F0916F06EBA7C585A","07BD6A765FFC289FF755D7CAB2893A40EC337FEC","896B85CC7E913E11C34892C1425A093C0701D386","11A01C82EF355E674E4F9728A801F5C3CB40D83F","F410C88469990EE7947450311D24B8AF2ADB2595","9E527CDA9D7C50844E8A5DB964A54A640AE48F98","DF52618D0B040D8A054D8348D2E84DDEEE5974E7","269D721F163E587BC53C6F83553BF9CE2BB143CD","6B55A5329E3F1F30F6032BDB20B2EB4378DBF767","C449A798C495E6CF7D6AF10162113D564E67AD12","01E9FFA9A8F3C18271FE91BEE46207F3B81755CC","97B23E01B2AA064E8332EE43A7A85C628AADC3F2","0EA6B717932AD64C469C1CCB6911457733295907","58B0C2968C335964D5433E89CA4D86628A0E3D4B","3BC1ED0B3E6EFDC7BD4D3D1D75D44B52DEE0A226","38C361D4A0726CE45D3572D65071B6BDB3092371","B620CF4203315F9F2E046EDED22C7571A935958D","B206D8716769728278D2D300349C6CB7D7DE2EF9","2B6C6A4A5940017146F3E58B7F90116206E84685","B6C2EFAB3EC3BF6EF03701408B6B09A67B2D0069","96FF2FFA5C9173C76D47184B3E86D267B37781DE","0136FCB13DB29FD5CD442F56E59E53B61F1DF96F","CBCC42ABED43A4B58FE3810E62AFFA010EB0349F","75C7F4B720314B6CB1B5817CD86089DB95CD2461","46578A13607D38F1DC8E280C4F499FB0A2F9565C","898FB5A39687D210766B8998BA4530B99C9E6586","82F30B65397BC3E4ADE627BBD857AB8A58210648","C74B2AF138F9EDECD04D0965AB36CA66C8290466","1B1388598AC9A5608F43DE38316D6FB5FAD3574A"});
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP,Manifest::TYPE_PLATFORM_APP});
    provider->AddFeature("metricsPrivate", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("nativeMessaging");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP,Manifest::TYPE_PLATFORM_APP});
    provider->AddFeature("nativeMessaging", feature);
  }
  {
    std::vector<Feature*> features;
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("networking.onc");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
      feature->set_platforms({Feature::CHROMEOS_PLATFORM,Feature::LACROS_PLATFORM});
      feature->set_session_types({mojom::FeatureSessionType::kAutolaunchedKiosk});
      features.push_back(feature);
    }
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("networking.onc");
      feature->set_allowlist({"0DE0F05680A4A056BCEC864ED8DDA84296F82B40","1C93BD3CF875F4A73C0B2A163BB8FBDA8B8B3D80","A3BC37E2148AC4E99BE4B16AF9D42DD1E592BBBE","8C3741E3AF0B93B6E8E0DDD499BB0B74839EA578","E703483CEF33DEC18B4B6DD84B5C776FB9182BDB","307E96539209F95A1A8740C713E6998A73657D96","7AE714FFD394E073F0294CFA134C9F91DB5FBAA4","C7DA3A55C2355F994D3FDDAD120B426A0DF63843","75E3CFFFC530582C583E4690EF97C70B9C8423B7","23D8847AE3EE90122AA34657360AFEEC8B3E611B","4F25792AF1AA7483936DE29C07806F203C7170A0","BD8781D757D830FC2E85470A1B6E8A718B7EE0D9","4AC2B6C63C6480D150DFDA13E4A5956EB1D0DDBB","81986D4F846CEDDDB962643FA501D1780DD441BB","2F6F6FDB84E0290ABAB7A9D7571EB344821E5F12","5B9E39EA374B136CBE7AED2D872003107642EAD5","E0E94FB0C01FFB9CDC7A5F098C99B5A8D2F95902","52E0557059A7A28F74ED1D92DDD997E0CCD37806","61FF4757F9420B62B19BA5C96084649339DB31F5","6FB7E1B6C0247B687AC14772E87A117F5F5E4497","9834387FDA1F66A1B5CA06CB442137B556F12F2A","A9A9FC0228ADF541F0334F22BEFB8F9C245B21D7","F2BCE012B9B7E2D57902B5A4F954EB01A7E548FD","D467F51D3846ED6D137F9FD403AE11CE416CD995","3823525AD445E0025E449F964C20922996B0F97F","827B5D482FADCE120F4694AD0FA0680E3717C6EC","A430CF8BD146137B32764433F69685A53BF11F03","F9AEB1FBFD91AFB39A16798763FB4707E5EB71C2","A547E19FA29B6371C507EFF218B4948AF7B8597B","A4CC6F00ACF41015AF38F1D5C98E97C2B8B3B320","4E09F1C1EEC4D27F1F7DF18BA3643307107A7C41"});
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP,Manifest::TYPE_PLATFORM_APP});
      feature->set_platforms({Feature::CHROMEOS_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM,Feature::LINUX_PLATFORM,Feature::FUCHSIA_PLATFORM});
      features.push_back(feature);
    }
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("networking.onc");
      feature->set_channel(version_info::Channel::DEV);
      feature->set_extension_types({Manifest::TYPE_EXTENSION});
      feature->set_platforms({Feature::CHROMEOS_PLATFORM,Feature::LACROS_PLATFORM});
      feature->set_session_types({mojom::FeatureSessionType::kKiosk});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("networking.onc");
    provider->AddFeature("networking.onc", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("networkingPrivate");
    feature->set_allowlist({"0DE0F05680A4A056BCEC864ED8DDA84296F82B40","1C93BD3CF875F4A73C0B2A163BB8FBDA8B8B3D80","A3BC37E2148AC4E99BE4B16AF9D42DD1E592BBBE","8C3741E3AF0B93B6E8E0DDD499BB0B74839EA578","E703483CEF33DEC18B4B6DD84B5C776FB9182BDB","307E96539209F95A1A8740C713E6998A73657D96","7AE714FFD394E073F0294CFA134C9F91DB5FBAA4","C7DA3A55C2355F994D3FDDAD120B426A0DF63843","75E3CFFFC530582C583E4690EF97C70B9C8423B7","4F25792AF1AA7483936DE29C07806F203C7170A0","BD8781D757D830FC2E85470A1B6E8A718B7EE0D9","4AC2B6C63C6480D150DFDA13E4A5956EB1D0DDBB","81986D4F846CEDDDB962643FA501D1780DD441BB","2F6F6FDB84E0290ABAB7A9D7571EB344821E5F12","5B9E39EA374B136CBE7AED2D872003107642EAD5","E0E94FB0C01FFB9CDC7A5F098C99B5A8D2F95902","52E0557059A7A28F74ED1D92DDD997E0CCD37806","A9A9FC0228ADF541F0334F22BEFB8F9C245B21D7","A4CC6F00ACF41015AF38F1D5C98E97C2B8B3B320","4E09F1C1EEC4D27F1F7DF18BA3643307107A7C41"});
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP,Manifest::TYPE_PLATFORM_APP});
    feature->set_platforms({Feature::CHROMEOS_PLATFORM,Feature::LACROS_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM,Feature::LINUX_PLATFORM,Feature::FUCHSIA_PLATFORM});
    provider->AddFeature("networkingPrivate", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("odfsConfigPrivate");
    feature->set_allowlist({"1B1388598AC9A5608F43DE38316D6FB5FAD3574A"});
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_extension_types({Manifest::TYPE_EXTENSION});
    feature->set_platforms({Feature::CHROMEOS_PLATFORM,Feature::LACROS_PLATFORM});
    provider->AddFeature("odfsConfigPrivate", feature);
  }
  {
    std::vector<Feature*> features;
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("offscreen");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_extension_types({Manifest::TYPE_EXTENSION});
      feature->set_min_manifest_version(3);
      features.push_back(feature);
    }
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("offscreen");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_dependencies({"behavior:imprivata_login_screen_extension"});
      feature->set_extension_types({Manifest::TYPE_LOGIN_SCREEN_EXTENSION});
      feature->set_min_manifest_version(3);
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("offscreen");
    provider->AddFeature("offscreen", feature);
  }
  {
    std::vector<Feature*> features;
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("power");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP,Manifest::TYPE_PLATFORM_APP});
      features.push_back(feature);
    }
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("power");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_dependencies({"behavior:imprivata_login_screen_extension"});
      feature->set_extension_types({Manifest::TYPE_LOGIN_SCREEN_EXTENSION});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("power");
    provider->AddFeature("power", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("printerProvider");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_PLATFORM_APP});
    provider->AddFeature("printerProvider", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("runtime");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP,Manifest::TYPE_PLATFORM_APP});
    provider->AddFeature("runtime", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("serial");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
    provider->AddFeature("serial", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("socket");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
    provider->AddFeature("socket", feature);
  }
  {
    std::vector<Feature*> features;
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("storage");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP,Manifest::TYPE_PLATFORM_APP});
      features.push_back(feature);
    }
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("storage");
      feature->set_allowlist({"93B7178E8C275515C38D4F43D9DF4648F0EA9B03","EC3DE21E048B67319893889529354DFBFA96FD23","A19608AC34215B127FF9D7C006D67F5C8ED8146D","6B748A5C005F21B7CBCF4170C2F883E435DEB511","075FF17D52ED6E3C2E5EC4D99F188E7A25AF47EA"});
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_component_extensions_auto_granted(false);
      feature->set_extension_types({Manifest::TYPE_LOGIN_SCREEN_EXTENSION});
      feature->set_location(SimpleFeature::POLICY_LOCATION);
      feature->set_platforms({Feature::CHROMEOS_PLATFORM});
      features.push_back(feature);
    }
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("storage");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_dependencies({"behavior:imprivata_login_screen_extension"});
      feature->set_extension_types({Manifest::TYPE_LOGIN_SCREEN_EXTENSION});
      features.push_back(feature);
    }
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("storage");
      feature->set_allowlist({"7FE4A999359A456C4B0FB7B7AD85CEA29CA50519"});
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_extension_types({Manifest::TYPE_LOGIN_SCREEN_EXTENSION});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("storage");
    provider->AddFeature("storage", feature);
  }
  {
    std::vector<Feature*> features;
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("system.cpu");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP,Manifest::TYPE_PLATFORM_APP});
      features.push_back(feature);
    }
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("system.cpu");
      feature->set_allowlist({"B44D08FD98F1523ED5837D78D0A606EA9D6206E5"});
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_extension_types({Manifest::TYPE_HOSTED_APP});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("system.cpu");
    provider->AddFeature("system.cpu", feature);
  }
  {
    std::vector<Feature*> features;
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("system.display");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP,Manifest::TYPE_PLATFORM_APP});
      features.push_back(feature);
    }
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("system.display");
      feature->set_allowlist({"B44D08FD98F1523ED5837D78D0A606EA9D6206E5"});
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_extension_types({Manifest::TYPE_HOSTED_APP});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("system.display");
    provider->AddFeature("system.display", feature);
  }
  {
    std::vector<Feature*> features;
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("system.memory");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP,Manifest::TYPE_PLATFORM_APP});
      features.push_back(feature);
    }
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("system.memory");
      feature->set_allowlist({"B44D08FD98F1523ED5837D78D0A606EA9D6206E5"});
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_extension_types({Manifest::TYPE_HOSTED_APP});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("system.memory");
    provider->AddFeature("system.memory", feature);
  }
  {
    std::vector<Feature*> features;
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("system.network");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
      features.push_back(feature);
    }
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("system.network");
      feature->set_allowlist({"B44D08FD98F1523ED5837D78D0A606EA9D6206E5"});
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_extension_types({Manifest::TYPE_HOSTED_APP});
      features.push_back(feature);
    }
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("system.network");
      feature->set_allowlist({"DD87C93131FF8D3DE4E483DC1EB298D73C7223A6"});
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_extension_types({Manifest::TYPE_EXTENSION});
      features.push_back(feature);
    }
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("system.network");
      feature->set_channel(version_info::Channel::DEV);
      feature->set_extension_types({Manifest::TYPE_EXTENSION});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("system.network");
    provider->AddFeature("system.network", feature);
  }
  {
    std::vector<Feature*> features;
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("system.storage");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP,Manifest::TYPE_PLATFORM_APP});
      features.push_back(feature);
    }
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("system.storage");
      feature->set_allowlist({"B44D08FD98F1523ED5837D78D0A606EA9D6206E5"});
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_extension_types({Manifest::TYPE_HOSTED_APP});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("system.storage");
    provider->AddFeature("system.storage", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("u2fDevices");
    feature->set_allowlist({"6F9E349A0561C78A0D3F41496FE521C5151C7F71","C06709A259378015404ED20F75C7D08547E0F10B"});
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_PLATFORM_APP});
    provider->AddFeature("u2fDevices", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("unlimitedStorage");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP,Manifest::TYPE_HOSTED_APP,Manifest::TYPE_PLATFORM_APP});
    provider->AddFeature("unlimitedStorage", feature);
  }
  {
    std::vector<Feature*> features;
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("usb");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
      features.push_back(feature);
    }
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("usb");
      feature->set_channel(version_info::Channel::DEV);
      feature->set_extension_types({Manifest::TYPE_EXTENSION});
      feature->set_platforms({Feature::CHROMEOS_PLATFORM,Feature::LACROS_PLATFORM});
      feature->set_session_types({mojom::FeatureSessionType::kKiosk});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("usb");
    provider->AddFeature("usb", feature);
  }
  {
    std::vector<Feature*> features;
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("usbDevices");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
      features.push_back(feature);
    }
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("usbDevices");
      feature->set_allowlist({"D7CD4B3956B1F6E970E4AFCBCD4094B1EF4D07B9","D4EFCCC0CC612380762758BB96C7997224BD6395","4839A26B29CD1BD021B2E126EF6D28C9CB84018B","8F44FBB4474CCDF23450B166C9E83E85BD03AE24"});
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_extension_types({Manifest::TYPE_EXTENSION});
      features.push_back(feature);
    }
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("usbDevices");
      feature->set_channel(version_info::Channel::DEV);
      feature->set_extension_types({Manifest::TYPE_EXTENSION});
      feature->set_platforms({Feature::CHROMEOS_PLATFORM,Feature::LACROS_PLATFORM});
      feature->set_session_types({mojom::FeatureSessionType::kKiosk});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("usbDevices");
    provider->AddFeature("usbDevices", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("userScripts");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_extension_types({Manifest::TYPE_EXTENSION});
    feature->set_feature_flag("ApiUserScripts");
    feature->set_min_manifest_version(3);
    provider->AddFeature("userScripts", feature);
  }
  {
    std::vector<Feature*> features;
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("videoCapture");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
      features.push_back(feature);
    }
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("videoCapture");
      feature->set_allowlist({"A434B90223C3C52F2B69DB494736B63C612C774D"});
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_extension_types({Manifest::TYPE_EXTENSION});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("videoCapture");
    provider->AddFeature("videoCapture", feature);
  }
  {
    std::vector<Feature*> features;
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("virtualKeyboard");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
      feature->set_platforms({Feature::CHROMEOS_PLATFORM});
      feature->set_session_types({mojom::FeatureSessionType::kKiosk});
      features.push_back(feature);
    }
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("virtualKeyboard");
      feature->set_channel(version_info::Channel::DEV);
      feature->set_extension_types({Manifest::TYPE_EXTENSION});
      feature->set_platforms({Feature::CHROMEOS_PLATFORM,Feature::LACROS_PLATFORM});
      feature->set_session_types({mojom::FeatureSessionType::kKiosk});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("virtualKeyboard");
    provider->AddFeature("virtualKeyboard", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("virtualKeyboardPrivate");
    feature->set_allowlist({"3F50C3A83839D9C76334BCE81CDEC06174F266AF","06BE211D5F014BAB34BC22D9DDA09C63A81D828E","CFBF7EE448FA48960FFDA7CEB30F7A21B26AA981","F94EE6AB36D6C6588670B2B01EB65212D9C64E33","3E03D9B67FDD31B2438D1CF5070573415DCB3CBA","E703483CEF33DEC18B4B6DD84B5C776FB9182BDB","A3BC37E2148AC4E99BE4B16AF9D42DD1E592BBBE","1C93BD3CF875F4A73C0B2A163BB8FBDA8B8B3D80","307E96539209F95A1A8740C713E6998A73657D96","4F25792AF1AA7483936DE29C07806F203C7170A0","BD8781D757D830FC2E85470A1B6E8A718B7EE0D9","4AC2B6C63C6480D150DFDA13E4A5956EB1D0DDBB","81986D4F846CEDDDB962643FA501D1780DD441BB","A9A9FC0228ADF541F0334F22BEFB8F9C245B21D7"});
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_PLATFORM_APP});
    feature->set_platforms({Feature::CHROMEOS_PLATFORM});
    provider->AddFeature("virtualKeyboardPrivate", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("vpnProvider");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_PLATFORM_APP});
    feature->set_platforms({Feature::CHROMEOS_PLATFORM,Feature::LACROS_PLATFORM});
    provider->AddFeature("vpnProvider", feature);
  }
  {
    std::vector<Feature*> features;
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("webRequest");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP});
      features.push_back(feature);
    }
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("webRequest");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_dependencies({"behavior:imprivata_login_screen_extension"});
      feature->set_extension_types({Manifest::TYPE_LOGIN_SCREEN_EXTENSION});
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("webRequest");
    provider->AddFeature("webRequest", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("webRequestAuthProvider");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_extension_types({Manifest::TYPE_EXTENSION});
    provider->AddFeature("webRequestAuthProvider", feature);
  }
  {
    std::vector<Feature*> features;
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("webRequestBlocking");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_extension_types({Manifest::TYPE_EXTENSION,Manifest::TYPE_LEGACY_PACKAGED_APP});
      feature->set_max_manifest_version(2);
      features.push_back(feature);
    }
    {
      PermissionFeature* feature = new PermissionFeature();
      feature->set_name("webRequestBlocking");
      feature->set_channel(version_info::Channel::STABLE);
      feature->set_extension_types({Manifest::TYPE_EXTENSION});
      feature->set_location(SimpleFeature::POLICY_LOCATION);
      feature->set_min_manifest_version(3);
      features.push_back(feature);
    }
    ComplexFeature* feature(new ComplexFeature(&features));
    feature->set_name("webRequestBlocking");
    provider->AddFeature("webRequestBlocking", feature);
  }
  {
    PermissionFeature* feature = new PermissionFeature();
    feature->set_name("webview");
    feature->set_channel(version_info::Channel::STABLE);
    feature->set_extension_types({Manifest::TYPE_PLATFORM_APP});
    provider->AddFeature("webview", feature);
  }

}

}  // namespace extensions