// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include "chrome/browser/apps/platform_apps/api/generated_api_registration.h"

#include "build/build_config.h"
#include "build/chromeos_buildflags.h"

#include "chrome/browser/apps/platform_apps/api/browser/browser_api.h"
#include "chrome/browser/apps/platform_apps/api/media_galleries/media_galleries_api.h"
#include "chrome/browser/apps/platform_apps/api/sync_file_system/sync_file_system_api.h"
#if BUILDFLAG(IS_CHROMEOS_ASH)
#include "chrome/browser/apps/platform_apps/api/arc_apps_private/arc_apps_private_api.h"
#endif  // BUILDFLAG(IS_CHROMEOS_ASH)
#if BUILDFLAG(IS_CHROMEOS_ASH) || BUILDFLAG(IS_CHROMEOS_LACROS)
#include "chrome/browser/apps/platform_apps/api/enterprise_remote_apps/enterprise_remote_apps_api.h"
#endif  // BUILDFLAG(IS_CHROMEOS_ASH) || BUILDFLAG(IS_CHROMEOS_LACROS)

#include "extensions/browser/extension_function_registry.h"

namespace chrome_apps {
namespace api {

// static
void ChromeAppsGeneratedFunctionRegistry::RegisterAll(ExtensionFunctionRegistry* registry) {
  constexpr ExtensionFunctionRegistry::FactoryEntry kEntries[] = {
    {
      &NewExtensionFunction<BrowserOpenTabFunction>,
      BrowserOpenTabFunction::static_function_name(),
      BrowserOpenTabFunction::static_histogram_value(),
    },
    {
      &NewExtensionFunction<MediaGalleriesGetMediaFileSystemsFunction>,
      MediaGalleriesGetMediaFileSystemsFunction::static_function_name(),
      MediaGalleriesGetMediaFileSystemsFunction::static_histogram_value(),
    },
    {
      &NewExtensionFunction<MediaGalleriesAddUserSelectedFolderFunction>,
      MediaGalleriesAddUserSelectedFolderFunction::static_function_name(),
      MediaGalleriesAddUserSelectedFolderFunction::static_histogram_value(),
    },
    {
      &NewExtensionFunction<MediaGalleriesGetMetadataFunction>,
      MediaGalleriesGetMetadataFunction::static_function_name(),
      MediaGalleriesGetMetadataFunction::static_histogram_value(),
    },
    {
      &NewExtensionFunction<MediaGalleriesAddGalleryWatchFunction>,
      MediaGalleriesAddGalleryWatchFunction::static_function_name(),
      MediaGalleriesAddGalleryWatchFunction::static_histogram_value(),
    },
    {
      &NewExtensionFunction<MediaGalleriesRemoveGalleryWatchFunction>,
      MediaGalleriesRemoveGalleryWatchFunction::static_function_name(),
      MediaGalleriesRemoveGalleryWatchFunction::static_histogram_value(),
    },
    {
      &NewExtensionFunction<SyncFileSystemRequestFileSystemFunction>,
      SyncFileSystemRequestFileSystemFunction::static_function_name(),
      SyncFileSystemRequestFileSystemFunction::static_histogram_value(),
    },
    {
      &NewExtensionFunction<SyncFileSystemSetConflictResolutionPolicyFunction>,
      SyncFileSystemSetConflictResolutionPolicyFunction::static_function_name(),
      SyncFileSystemSetConflictResolutionPolicyFunction::static_histogram_value(),
    },
    {
      &NewExtensionFunction<SyncFileSystemGetConflictResolutionPolicyFunction>,
      SyncFileSystemGetConflictResolutionPolicyFunction::static_function_name(),
      SyncFileSystemGetConflictResolutionPolicyFunction::static_histogram_value(),
    },
    {
      &NewExtensionFunction<SyncFileSystemGetUsageAndQuotaFunction>,
      SyncFileSystemGetUsageAndQuotaFunction::static_function_name(),
      SyncFileSystemGetUsageAndQuotaFunction::static_histogram_value(),
    },
    {
      &NewExtensionFunction<SyncFileSystemGetFileStatusFunction>,
      SyncFileSystemGetFileStatusFunction::static_function_name(),
      SyncFileSystemGetFileStatusFunction::static_histogram_value(),
    },
    {
      &NewExtensionFunction<SyncFileSystemGetFileStatusesFunction>,
      SyncFileSystemGetFileStatusesFunction::static_function_name(),
      SyncFileSystemGetFileStatusesFunction::static_histogram_value(),
    },
    {
      &NewExtensionFunction<SyncFileSystemGetServiceStatusFunction>,
      SyncFileSystemGetServiceStatusFunction::static_function_name(),
      SyncFileSystemGetServiceStatusFunction::static_histogram_value(),
    },
    #if BUILDFLAG(IS_CHROMEOS_ASH)
    {
      &NewExtensionFunction<ArcAppsPrivateGetLaunchableAppsFunction>,
      ArcAppsPrivateGetLaunchableAppsFunction::static_function_name(),
      ArcAppsPrivateGetLaunchableAppsFunction::static_histogram_value(),
    },
    {
      &NewExtensionFunction<ArcAppsPrivateLaunchAppFunction>,
      ArcAppsPrivateLaunchAppFunction::static_function_name(),
      ArcAppsPrivateLaunchAppFunction::static_histogram_value(),
    },
    #endif  // BUILDFLAG(IS_CHROMEOS_ASH)
    #if BUILDFLAG(IS_CHROMEOS_ASH) || BUILDFLAG(IS_CHROMEOS_LACROS)
    {
      &NewExtensionFunction<EnterpriseRemoteAppsAddFolderFunction>,
      EnterpriseRemoteAppsAddFolderFunction::static_function_name(),
      EnterpriseRemoteAppsAddFolderFunction::static_histogram_value(),
    },
    {
      &NewExtensionFunction<EnterpriseRemoteAppsAddAppFunction>,
      EnterpriseRemoteAppsAddAppFunction::static_function_name(),
      EnterpriseRemoteAppsAddAppFunction::static_histogram_value(),
    },
    {
      &NewExtensionFunction<EnterpriseRemoteAppsDeleteAppFunction>,
      EnterpriseRemoteAppsDeleteAppFunction::static_function_name(),
      EnterpriseRemoteAppsDeleteAppFunction::static_histogram_value(),
    },
    {
      &NewExtensionFunction<EnterpriseRemoteAppsSortLauncherFunction>,
      EnterpriseRemoteAppsSortLauncherFunction::static_function_name(),
      EnterpriseRemoteAppsSortLauncherFunction::static_histogram_value(),
    },
    {
      &NewExtensionFunction<EnterpriseRemoteAppsSetPinnedAppsFunction>,
      EnterpriseRemoteAppsSetPinnedAppsFunction::static_function_name(),
      EnterpriseRemoteAppsSetPinnedAppsFunction::static_histogram_value(),
    },
    #endif  // BUILDFLAG(IS_CHROMEOS_ASH) || BUILDFLAG(IS_CHROMEOS_LACROS)
  };
  for (const auto& entry : kEntries) {
      registry->Register(entry);
  }
}

}  // namespace api
}  // namespace chrome_apps
