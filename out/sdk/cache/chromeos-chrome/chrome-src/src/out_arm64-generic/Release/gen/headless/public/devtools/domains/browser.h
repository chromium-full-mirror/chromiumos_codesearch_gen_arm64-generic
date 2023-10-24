// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_BROWSER_H_
#define HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_BROWSER_H_

#include "base/functional/callback.h"
#include "base/observer_list.h"
#include "base/values.h"
#include "headless/public/devtools/domains/types_browser.h"
#include "headless/public/devtools/domains/types_dom.h"
#include "headless/public/devtools/domains/types_debugger.h"
#include "headless/public/devtools/domains/types_emulation.h"
#include "headless/public/devtools/domains/types_io.h"
#include "headless/public/devtools/domains/types_network.h"
#include "headless/public/devtools/domains/types_page.h"
#include "headless/public/devtools/domains/types_runtime.h"
#include "headless/public/devtools/domains/types_security.h"
#include "headless/public/devtools/domains/types_target.h"
#include "headless/public/headless_export.h"
#include "headless/public/internal/message_dispatcher.h"


namespace headless {
namespace browser {
class HEADLESS_EXPORT ExperimentalDomain;
class HEADLESS_EXPORT ExperimentalObserver;

class HEADLESS_EXPORT ExperimentalObserver {
 public:
  virtual ~ExperimentalObserver() {}
  // Fired when page is about to start a download.
  virtual void OnDownloadWillBegin(const DownloadWillBeginParams& params) {}
  // Fired when download makes progress. Last call has |done| == true.
  virtual void OnDownloadProgress(const DownloadProgressParams& params) {}
};

class HEADLESS_EXPORT Observer : public ExperimentalObserver {
 public:
  virtual ~Observer() {}
  // Experimental: Fired when page is about to start a download.
  virtual void OnDownloadWillBegin(const DownloadWillBeginParams& params) final {}
  // Experimental: Fired when download makes progress. Last call has |done| == true.
  virtual void OnDownloadProgress(const DownloadProgressParams& params) final {}
};

// The Browser domain defines methods and events for browser managing.
class HEADLESS_EXPORT Domain {
 public:
  Domain(const Domain&) = delete;
  Domain& operator=(const Domain&) = delete;

  // Add or remove an observer. |observer| must be removed before being
  // destroyed.
  void AddObserver(Observer* observer);
  void RemoveObserver(Observer* observer);

  // Return the experimental interface for this domain. Note that experimental
  // commands may be changed or removed at any time.
  ExperimentalDomain* GetExperimental();

  // Close browser gracefully.
  void Close(std::unique_ptr<CloseParams> params, base::OnceCallback<void(std::unique_ptr<CloseResult>)> callback = base::OnceCallback<void(std::unique_ptr<CloseResult>)>());
  void Close(base::OnceClosure callback = base::OnceClosure());
  void Close(std::unique_ptr<CloseParams> params, base::OnceClosure callback);

  // Returns version information.
  void GetVersion(std::unique_ptr<GetVersionParams> params, base::OnceCallback<void(std::unique_ptr<GetVersionResult>)> callback = base::OnceCallback<void(std::unique_ptr<GetVersionResult>)>());
  void GetVersion(base::OnceCallback<void(std::unique_ptr<GetVersionResult>)> callback = base::OnceCallback<void(std::unique_ptr<GetVersionResult>)>());

  // Allows a site to use privacy sandbox features that require enrollment
  // without the site actually being enrolled. Only supported on page targets.
  void AddPrivacySandboxEnrollmentOverride(std::unique_ptr<AddPrivacySandboxEnrollmentOverrideParams> params, base::OnceCallback<void(std::unique_ptr<AddPrivacySandboxEnrollmentOverrideResult>)> callback = base::OnceCallback<void(std::unique_ptr<AddPrivacySandboxEnrollmentOverrideResult>)>());
  void AddPrivacySandboxEnrollmentOverride(const std::string& url, base::OnceClosure callback = base::OnceClosure());
  void AddPrivacySandboxEnrollmentOverride(std::unique_ptr<AddPrivacySandboxEnrollmentOverrideParams> params, base::OnceClosure callback);

 protected:
  Domain(internal::MessageDispatcher* dispatcher);
  ~Domain();

  static void HandleSetPermissionResponse(base::OnceCallback<void(std::unique_ptr<SetPermissionResult>)> callback, const base::Value& response);
  static void HandleGrantPermissionsResponse(base::OnceCallback<void(std::unique_ptr<GrantPermissionsResult>)> callback, const base::Value& response);
  static void HandleResetPermissionsResponse(base::OnceCallback<void(std::unique_ptr<ResetPermissionsResult>)> callback, const base::Value& response);
  static void HandleSetDownloadBehaviorResponse(base::OnceCallback<void(std::unique_ptr<SetDownloadBehaviorResult>)> callback, const base::Value& response);
  static void HandleCancelDownloadResponse(base::OnceCallback<void(std::unique_ptr<CancelDownloadResult>)> callback, const base::Value& response);
  static void HandleCloseResponse(base::OnceCallback<void(std::unique_ptr<CloseResult>)> callback, const base::Value& response);
  static void HandleCrashResponse(base::OnceCallback<void(std::unique_ptr<CrashResult>)> callback, const base::Value& response);
  static void HandleCrashGpuProcessResponse(base::OnceCallback<void(std::unique_ptr<CrashGpuProcessResult>)> callback, const base::Value& response);
  static void HandleGetVersionResponse(base::OnceCallback<void(std::unique_ptr<GetVersionResult>)> callback, const base::Value& response);
  static void HandleGetBrowserCommandLineResponse(base::OnceCallback<void(std::unique_ptr<GetBrowserCommandLineResult>)> callback, const base::Value& response);
  static void HandleGetHistogramsResponse(base::OnceCallback<void(std::unique_ptr<GetHistogramsResult>)> callback, const base::Value& response);
  static void HandleGetHistogramResponse(base::OnceCallback<void(std::unique_ptr<GetHistogramResult>)> callback, const base::Value& response);
  static void HandleGetWindowBoundsResponse(base::OnceCallback<void(std::unique_ptr<GetWindowBoundsResult>)> callback, const base::Value& response);
  static void HandleGetWindowForTargetResponse(base::OnceCallback<void(std::unique_ptr<GetWindowForTargetResult>)> callback, const base::Value& response);
  static void HandleSetWindowBoundsResponse(base::OnceCallback<void(std::unique_ptr<SetWindowBoundsResult>)> callback, const base::Value& response);
  static void HandleSetDockTileResponse(base::OnceCallback<void(std::unique_ptr<SetDockTileResult>)> callback, const base::Value& response);
  static void HandleExecuteBrowserCommandResponse(base::OnceCallback<void(std::unique_ptr<ExecuteBrowserCommandResult>)> callback, const base::Value& response);
  static void HandleAddPrivacySandboxEnrollmentOverrideResponse(base::OnceCallback<void(std::unique_ptr<AddPrivacySandboxEnrollmentOverrideResult>)> callback, const base::Value& response);

  void DispatchDownloadWillBeginEvent(const base::Value& params);
  void DispatchDownloadProgressEvent(const base::Value& params);

  internal::MessageDispatcher* dispatcher_;  // Not owned.
  base::ObserverList<ExperimentalObserver>::Unchecked observers_;

 protected:
  void RegisterEventHandlersIfNeeded();

 private:
  bool event_handlers_registered_ = false;

};

class ExperimentalDomain : public Domain {
 public:
  ExperimentalDomain(internal::MessageDispatcher* dispatcher);

  ExperimentalDomain(const ExperimentalDomain&) = delete;
  ExperimentalDomain& operator=(const ExperimentalDomain&) = delete;

  ~ExperimentalDomain();

  // Add or remove an observer. |observer| must be removed before being
  // destroyed.
  void AddObserver(ExperimentalObserver* observer);
  void RemoveObserver(ExperimentalObserver* observer);

  // Set permission settings for given origin.
  void SetPermission(std::unique_ptr<SetPermissionParams> params, base::OnceCallback<void(std::unique_ptr<SetPermissionResult>)> callback = base::OnceCallback<void(std::unique_ptr<SetPermissionResult>)>());

  // Grant specific permissions to the given origin and reject all others.
  void GrantPermissions(std::unique_ptr<GrantPermissionsParams> params, base::OnceCallback<void(std::unique_ptr<GrantPermissionsResult>)> callback = base::OnceCallback<void(std::unique_ptr<GrantPermissionsResult>)>());

  // Reset all permission management for all origins.
  void ResetPermissions(std::unique_ptr<ResetPermissionsParams> params, base::OnceCallback<void(std::unique_ptr<ResetPermissionsResult>)> callback = base::OnceCallback<void(std::unique_ptr<ResetPermissionsResult>)>());

  // Set the behavior when downloading a file.
  void SetDownloadBehavior(std::unique_ptr<SetDownloadBehaviorParams> params, base::OnceCallback<void(std::unique_ptr<SetDownloadBehaviorResult>)> callback = base::OnceCallback<void(std::unique_ptr<SetDownloadBehaviorResult>)>());

  // Cancel a download if in progress
  void CancelDownload(std::unique_ptr<CancelDownloadParams> params, base::OnceCallback<void(std::unique_ptr<CancelDownloadResult>)> callback = base::OnceCallback<void(std::unique_ptr<CancelDownloadResult>)>());

  // Crashes browser on the main thread.
  void Crash(std::unique_ptr<CrashParams> params, base::OnceCallback<void(std::unique_ptr<CrashResult>)> callback = base::OnceCallback<void(std::unique_ptr<CrashResult>)>());

  // Crashes GPU process.
  void CrashGpuProcess(std::unique_ptr<CrashGpuProcessParams> params, base::OnceCallback<void(std::unique_ptr<CrashGpuProcessResult>)> callback = base::OnceCallback<void(std::unique_ptr<CrashGpuProcessResult>)>());

  // Returns the command line switches for the browser process if, and only if
  // --enable-automation is on the commandline.
  void GetBrowserCommandLine(std::unique_ptr<GetBrowserCommandLineParams> params, base::OnceCallback<void(std::unique_ptr<GetBrowserCommandLineResult>)> callback = base::OnceCallback<void(std::unique_ptr<GetBrowserCommandLineResult>)>());

  // Get Chrome histograms.
  void GetHistograms(std::unique_ptr<GetHistogramsParams> params, base::OnceCallback<void(std::unique_ptr<GetHistogramsResult>)> callback = base::OnceCallback<void(std::unique_ptr<GetHistogramsResult>)>());

  // Get a Chrome histogram by name.
  void GetHistogram(std::unique_ptr<GetHistogramParams> params, base::OnceCallback<void(std::unique_ptr<GetHistogramResult>)> callback = base::OnceCallback<void(std::unique_ptr<GetHistogramResult>)>());

  // Get position and size of the browser window.
  void GetWindowBounds(std::unique_ptr<GetWindowBoundsParams> params, base::OnceCallback<void(std::unique_ptr<GetWindowBoundsResult>)> callback = base::OnceCallback<void(std::unique_ptr<GetWindowBoundsResult>)>());

  // Get the browser window that contains the devtools target.
  void GetWindowForTarget(std::unique_ptr<GetWindowForTargetParams> params, base::OnceCallback<void(std::unique_ptr<GetWindowForTargetResult>)> callback = base::OnceCallback<void(std::unique_ptr<GetWindowForTargetResult>)>());

  // Set position and/or size of the browser window.
  void SetWindowBounds(std::unique_ptr<SetWindowBoundsParams> params, base::OnceCallback<void(std::unique_ptr<SetWindowBoundsResult>)> callback = base::OnceCallback<void(std::unique_ptr<SetWindowBoundsResult>)>());

  // Set dock tile details, platform-specific.
  void SetDockTile(std::unique_ptr<SetDockTileParams> params, base::OnceCallback<void(std::unique_ptr<SetDockTileResult>)> callback = base::OnceCallback<void(std::unique_ptr<SetDockTileResult>)>());

  // Invoke custom browser commands used by telemetry.
  void ExecuteBrowserCommand(std::unique_ptr<ExecuteBrowserCommandParams> params, base::OnceCallback<void(std::unique_ptr<ExecuteBrowserCommandResult>)> callback = base::OnceCallback<void(std::unique_ptr<ExecuteBrowserCommandResult>)>());

};

}  // namespace browser
}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_BROWSER_H_
