// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include "headless/public/devtools/domains/browser.h"

#include "base/functional/bind.h"
#include "headless/public/util/error_reporter.h"

namespace headless {

namespace browser {

ExperimentalDomain* Domain::GetExperimental() {
  return static_cast<ExperimentalDomain*>(this);
}

void Domain::AddObserver(Observer* observer) {
  RegisterEventHandlersIfNeeded();
  observers_.AddObserver(observer);
}

void Domain::RemoveObserver(Observer* observer) {
  observers_.RemoveObserver(observer);
}

void Domain::RegisterEventHandlersIfNeeded() {
  if (event_handlers_registered_)
    return;
  event_handlers_registered_ = true;
  dispatcher_->RegisterEventHandler(
      "Browser.downloadWillBegin",
      base::BindRepeating(&Domain::DispatchDownloadWillBeginEvent,
                          base::Unretained(this)));
  dispatcher_->RegisterEventHandler(
      "Browser.downloadProgress",
      base::BindRepeating(&Domain::DispatchDownloadProgressEvent,
                          base::Unretained(this)));
}

void ExperimentalDomain::SetPermission(std::unique_ptr<SetPermissionParams> params, base::OnceCallback<void(std::unique_ptr<SetPermissionResult>)> callback) {
  dispatcher_->SendMessage("Browser.setPermission", params->Serialize(), base::BindOnce(&Domain::HandleSetPermissionResponse, std::move(callback)));
}
void ExperimentalDomain::GrantPermissions(std::unique_ptr<GrantPermissionsParams> params, base::OnceCallback<void(std::unique_ptr<GrantPermissionsResult>)> callback) {
  dispatcher_->SendMessage("Browser.grantPermissions", params->Serialize(), base::BindOnce(&Domain::HandleGrantPermissionsResponse, std::move(callback)));
}
void ExperimentalDomain::ResetPermissions(std::unique_ptr<ResetPermissionsParams> params, base::OnceCallback<void(std::unique_ptr<ResetPermissionsResult>)> callback) {
  dispatcher_->SendMessage("Browser.resetPermissions", params->Serialize(), base::BindOnce(&Domain::HandleResetPermissionsResponse, std::move(callback)));
}
void ExperimentalDomain::SetDownloadBehavior(std::unique_ptr<SetDownloadBehaviorParams> params, base::OnceCallback<void(std::unique_ptr<SetDownloadBehaviorResult>)> callback) {
  dispatcher_->SendMessage("Browser.setDownloadBehavior", params->Serialize(), base::BindOnce(&Domain::HandleSetDownloadBehaviorResponse, std::move(callback)));
}
void ExperimentalDomain::CancelDownload(std::unique_ptr<CancelDownloadParams> params, base::OnceCallback<void(std::unique_ptr<CancelDownloadResult>)> callback) {
  dispatcher_->SendMessage("Browser.cancelDownload", params->Serialize(), base::BindOnce(&Domain::HandleCancelDownloadResponse, std::move(callback)));
}
void Domain::Close(std::unique_ptr<CloseParams> params, base::OnceCallback<void(std::unique_ptr<CloseResult>)> callback) {
  dispatcher_->SendMessage("Browser.close", params->Serialize(), base::BindOnce(&Domain::HandleCloseResponse, std::move(callback)));
}

void Domain::Close(base::OnceClosure callback) {
  std::unique_ptr<CloseParams> params = CloseParams::Builder()
      .Build();
  dispatcher_->SendMessage("Browser.close", params->Serialize(), std::move(callback));
}
void Domain::Close(std::unique_ptr<CloseParams> params, base::OnceClosure callback) {
  dispatcher_->SendMessage("Browser.close", params->Serialize(), std::move(callback));
}
void ExperimentalDomain::Crash(std::unique_ptr<CrashParams> params, base::OnceCallback<void(std::unique_ptr<CrashResult>)> callback) {
  dispatcher_->SendMessage("Browser.crash", params->Serialize(), base::BindOnce(&Domain::HandleCrashResponse, std::move(callback)));
}
void ExperimentalDomain::CrashGpuProcess(std::unique_ptr<CrashGpuProcessParams> params, base::OnceCallback<void(std::unique_ptr<CrashGpuProcessResult>)> callback) {
  dispatcher_->SendMessage("Browser.crashGpuProcess", params->Serialize(), base::BindOnce(&Domain::HandleCrashGpuProcessResponse, std::move(callback)));
}
void Domain::GetVersion(std::unique_ptr<GetVersionParams> params, base::OnceCallback<void(std::unique_ptr<GetVersionResult>)> callback) {
  dispatcher_->SendMessage("Browser.getVersion", params->Serialize(), base::BindOnce(&Domain::HandleGetVersionResponse, std::move(callback)));
}

void Domain::GetVersion(base::OnceCallback<void(std::unique_ptr<GetVersionResult>)> callback) {
  std::unique_ptr<GetVersionParams> params = GetVersionParams::Builder()
      .Build();
dispatcher_->SendMessage("Browser.getVersion", params->Serialize(), base::BindOnce(&Domain::HandleGetVersionResponse, std::move(callback)));
}
void ExperimentalDomain::GetBrowserCommandLine(std::unique_ptr<GetBrowserCommandLineParams> params, base::OnceCallback<void(std::unique_ptr<GetBrowserCommandLineResult>)> callback) {
  dispatcher_->SendMessage("Browser.getBrowserCommandLine", params->Serialize(), base::BindOnce(&Domain::HandleGetBrowserCommandLineResponse, std::move(callback)));
}
void ExperimentalDomain::GetHistograms(std::unique_ptr<GetHistogramsParams> params, base::OnceCallback<void(std::unique_ptr<GetHistogramsResult>)> callback) {
  dispatcher_->SendMessage("Browser.getHistograms", params->Serialize(), base::BindOnce(&Domain::HandleGetHistogramsResponse, std::move(callback)));
}
void ExperimentalDomain::GetHistogram(std::unique_ptr<GetHistogramParams> params, base::OnceCallback<void(std::unique_ptr<GetHistogramResult>)> callback) {
  dispatcher_->SendMessage("Browser.getHistogram", params->Serialize(), base::BindOnce(&Domain::HandleGetHistogramResponse, std::move(callback)));
}
void ExperimentalDomain::GetWindowBounds(std::unique_ptr<GetWindowBoundsParams> params, base::OnceCallback<void(std::unique_ptr<GetWindowBoundsResult>)> callback) {
  dispatcher_->SendMessage("Browser.getWindowBounds", params->Serialize(), base::BindOnce(&Domain::HandleGetWindowBoundsResponse, std::move(callback)));
}
void ExperimentalDomain::GetWindowForTarget(std::unique_ptr<GetWindowForTargetParams> params, base::OnceCallback<void(std::unique_ptr<GetWindowForTargetResult>)> callback) {
  dispatcher_->SendMessage("Browser.getWindowForTarget", params->Serialize(), base::BindOnce(&Domain::HandleGetWindowForTargetResponse, std::move(callback)));
}
void ExperimentalDomain::SetWindowBounds(std::unique_ptr<SetWindowBoundsParams> params, base::OnceCallback<void(std::unique_ptr<SetWindowBoundsResult>)> callback) {
  dispatcher_->SendMessage("Browser.setWindowBounds", params->Serialize(), base::BindOnce(&Domain::HandleSetWindowBoundsResponse, std::move(callback)));
}
void ExperimentalDomain::SetDockTile(std::unique_ptr<SetDockTileParams> params, base::OnceCallback<void(std::unique_ptr<SetDockTileResult>)> callback) {
  dispatcher_->SendMessage("Browser.setDockTile", params->Serialize(), base::BindOnce(&Domain::HandleSetDockTileResponse, std::move(callback)));
}
void ExperimentalDomain::ExecuteBrowserCommand(std::unique_ptr<ExecuteBrowserCommandParams> params, base::OnceCallback<void(std::unique_ptr<ExecuteBrowserCommandResult>)> callback) {
  dispatcher_->SendMessage("Browser.executeBrowserCommand", params->Serialize(), base::BindOnce(&Domain::HandleExecuteBrowserCommandResponse, std::move(callback)));
}
void Domain::AddPrivacySandboxEnrollmentOverride(std::unique_ptr<AddPrivacySandboxEnrollmentOverrideParams> params, base::OnceCallback<void(std::unique_ptr<AddPrivacySandboxEnrollmentOverrideResult>)> callback) {
  dispatcher_->SendMessage("Browser.addPrivacySandboxEnrollmentOverride", params->Serialize(), base::BindOnce(&Domain::HandleAddPrivacySandboxEnrollmentOverrideResponse, std::move(callback)));
}

void Domain::AddPrivacySandboxEnrollmentOverride(const std::string& url, base::OnceClosure callback) {
  std::unique_ptr<AddPrivacySandboxEnrollmentOverrideParams> params = AddPrivacySandboxEnrollmentOverrideParams::Builder()
      .SetUrl(std::move(url))
      .Build();
  dispatcher_->SendMessage("Browser.addPrivacySandboxEnrollmentOverride", params->Serialize(), std::move(callback));
}
void Domain::AddPrivacySandboxEnrollmentOverride(std::unique_ptr<AddPrivacySandboxEnrollmentOverrideParams> params, base::OnceClosure callback) {
  dispatcher_->SendMessage("Browser.addPrivacySandboxEnrollmentOverride", params->Serialize(), std::move(callback));
}


// static
void Domain::HandleSetPermissionResponse(base::OnceCallback<void(std::unique_ptr<SetPermissionResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<SetPermissionResult> result = SetPermissionResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

// static
void Domain::HandleGrantPermissionsResponse(base::OnceCallback<void(std::unique_ptr<GrantPermissionsResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<GrantPermissionsResult> result = GrantPermissionsResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

// static
void Domain::HandleResetPermissionsResponse(base::OnceCallback<void(std::unique_ptr<ResetPermissionsResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<ResetPermissionsResult> result = ResetPermissionsResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

// static
void Domain::HandleSetDownloadBehaviorResponse(base::OnceCallback<void(std::unique_ptr<SetDownloadBehaviorResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<SetDownloadBehaviorResult> result = SetDownloadBehaviorResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

// static
void Domain::HandleCancelDownloadResponse(base::OnceCallback<void(std::unique_ptr<CancelDownloadResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<CancelDownloadResult> result = CancelDownloadResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

// static
void Domain::HandleCloseResponse(base::OnceCallback<void(std::unique_ptr<CloseResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<CloseResult> result = CloseResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

// static
void Domain::HandleCrashResponse(base::OnceCallback<void(std::unique_ptr<CrashResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<CrashResult> result = CrashResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

// static
void Domain::HandleCrashGpuProcessResponse(base::OnceCallback<void(std::unique_ptr<CrashGpuProcessResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<CrashGpuProcessResult> result = CrashGpuProcessResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

// static
void Domain::HandleGetVersionResponse(base::OnceCallback<void(std::unique_ptr<GetVersionResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<GetVersionResult> result = GetVersionResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

// static
void Domain::HandleGetBrowserCommandLineResponse(base::OnceCallback<void(std::unique_ptr<GetBrowserCommandLineResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<GetBrowserCommandLineResult> result = GetBrowserCommandLineResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

// static
void Domain::HandleGetHistogramsResponse(base::OnceCallback<void(std::unique_ptr<GetHistogramsResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<GetHistogramsResult> result = GetHistogramsResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

// static
void Domain::HandleGetHistogramResponse(base::OnceCallback<void(std::unique_ptr<GetHistogramResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<GetHistogramResult> result = GetHistogramResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

// static
void Domain::HandleGetWindowBoundsResponse(base::OnceCallback<void(std::unique_ptr<GetWindowBoundsResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<GetWindowBoundsResult> result = GetWindowBoundsResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

// static
void Domain::HandleGetWindowForTargetResponse(base::OnceCallback<void(std::unique_ptr<GetWindowForTargetResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<GetWindowForTargetResult> result = GetWindowForTargetResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

// static
void Domain::HandleSetWindowBoundsResponse(base::OnceCallback<void(std::unique_ptr<SetWindowBoundsResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<SetWindowBoundsResult> result = SetWindowBoundsResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

// static
void Domain::HandleSetDockTileResponse(base::OnceCallback<void(std::unique_ptr<SetDockTileResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<SetDockTileResult> result = SetDockTileResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

// static
void Domain::HandleExecuteBrowserCommandResponse(base::OnceCallback<void(std::unique_ptr<ExecuteBrowserCommandResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<ExecuteBrowserCommandResult> result = ExecuteBrowserCommandResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

// static
void Domain::HandleAddPrivacySandboxEnrollmentOverrideResponse(base::OnceCallback<void(std::unique_ptr<AddPrivacySandboxEnrollmentOverrideResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<AddPrivacySandboxEnrollmentOverrideResult> result = AddPrivacySandboxEnrollmentOverrideResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

void Domain::DispatchDownloadWillBeginEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<DownloadWillBeginParams> parsed_params(DownloadWillBeginParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnDownloadWillBegin(*parsed_params);
  }
}

void Domain::DispatchDownloadProgressEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<DownloadProgressParams> parsed_params(DownloadProgressParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnDownloadProgress(*parsed_params);
  }
}

Domain::Domain(internal::MessageDispatcher* dispatcher)
    : dispatcher_(dispatcher) {
}

Domain::~Domain() {}

ExperimentalDomain::ExperimentalDomain(internal::MessageDispatcher* dispatcher)
    : Domain(dispatcher) {}

ExperimentalDomain::~ExperimentalDomain() {}

void ExperimentalDomain::AddObserver(ExperimentalObserver* observer) {
  RegisterEventHandlersIfNeeded();
  observers_.AddObserver(observer);
}

void ExperimentalDomain::RemoveObserver(ExperimentalObserver* observer) {
  observers_.RemoveObserver(observer);
}

}  // namespace browser

} // namespace headless
