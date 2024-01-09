// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_TYPES_BROWSER_H_
#define HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_TYPES_BROWSER_H_

#include "base/values.h"
#include "third_party/abseil-cpp/absl/types/optional.h"
#include "third_party/inspector_protocol/crdtp/chromium/protocol_traits.h"

#include "headless/public/devtools/internal/types_forward_declarations_browser.h"
#include "headless/public/devtools/internal/types_forward_declarations_dom.h"
#include "headless/public/devtools/internal/types_forward_declarations_debugger.h"
#include "headless/public/devtools/internal/types_forward_declarations_emulation.h"
#include "headless/public/devtools/internal/types_forward_declarations_io.h"
#include "headless/public/devtools/internal/types_forward_declarations_network.h"
#include "headless/public/devtools/internal/types_forward_declarations_page.h"
#include "headless/public/devtools/internal/types_forward_declarations_runtime.h"
#include "headless/public/devtools/internal/types_forward_declarations_security.h"
#include "headless/public/devtools/internal/types_forward_declarations_target.h"
#include "headless/public/headless_export.h"

namespace headless {
namespace protocol {
using Binary = crdtp::Binary;
}

class ErrorReporter;

namespace browser {

// Browser window bounds information
class HEADLESS_EXPORT Bounds {
 public:
  static std::unique_ptr<Bounds> Parse(const base::Value& value, ErrorReporter* errors);

  Bounds(const Bounds&) = delete;
  Bounds& operator=(const Bounds&) = delete;

  ~Bounds() { }


  // The offset from the left edge of the screen to the window in pixels.
  bool HasLeft() const { return !!left_; }
  int GetLeft() const { DCHECK(HasLeft()); return left_.value(); }
  void SetLeft(int value) { left_ = value; }

  // The offset from the top edge of the screen to the window in pixels.
  bool HasTop() const { return !!top_; }
  int GetTop() const { DCHECK(HasTop()); return top_.value(); }
  void SetTop(int value) { top_ = value; }

  // The window width in pixels.
  bool HasWidth() const { return !!width_; }
  int GetWidth() const { DCHECK(HasWidth()); return width_.value(); }
  void SetWidth(int value) { width_ = value; }

  // The window height in pixels.
  bool HasHeight() const { return !!height_; }
  int GetHeight() const { DCHECK(HasHeight()); return height_.value(); }
  void SetHeight(int value) { height_ = value; }

  // The window state. Default to normal.
  bool HasWindowState() const { return !!window_state_; }
  ::headless::browser::WindowState GetWindowState() const { DCHECK(HasWindowState()); return window_state_.value(); }
  void SetWindowState(::headless::browser::WindowState value) { window_state_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<Bounds> Clone() const;

  template<int STATE>
  class BoundsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    BoundsBuilder<STATE>& SetLeft(int value) {
      result_->SetLeft(value);
      return *this;
    }

    BoundsBuilder<STATE>& SetTop(int value) {
      result_->SetTop(value);
      return *this;
    }

    BoundsBuilder<STATE>& SetWidth(int value) {
      result_->SetWidth(value);
      return *this;
    }

    BoundsBuilder<STATE>& SetHeight(int value) {
      result_->SetHeight(value);
      return *this;
    }

    BoundsBuilder<STATE>& SetWindowState(::headless::browser::WindowState value) {
      result_->SetWindowState(value);
      return *this;
    }

    std::unique_ptr<Bounds> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class Bounds;
    BoundsBuilder() : result_(new Bounds()) { }

    template<int STEP> BoundsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<BoundsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<Bounds> result_;
  };

  static BoundsBuilder<0> Builder() {
    return BoundsBuilder<0>();
  }

 private:
  Bounds() { }

  absl::optional<int> left_;
  absl::optional<int> top_;
  absl::optional<int> width_;
  absl::optional<int> height_;
  absl::optional<::headless::browser::WindowState> window_state_;
};


// Definition of PermissionDescriptor defined in the Permissions API:
// https://w3c.github.io/permissions/#dom-permissiondescriptor.
class HEADLESS_EXPORT PermissionDescriptor {
 public:
  static std::unique_ptr<PermissionDescriptor> Parse(const base::Value& value, ErrorReporter* errors);

  PermissionDescriptor(const PermissionDescriptor&) = delete;
  PermissionDescriptor& operator=(const PermissionDescriptor&) = delete;

  ~PermissionDescriptor() { }


  // Name of permission.
  // See https://cs.chromium.org/chromium/src/third_party/blink/renderer/modules/permissions/permission_descriptor.idl for valid permission names.
  std::string GetName() const { return name_; }
  void SetName(const std::string& value) { name_ = value; }

  // For "midi" permission, may also specify sysex control.
  bool HasSysex() const { return !!sysex_; }
  bool GetSysex() const { DCHECK(HasSysex()); return sysex_.value(); }
  void SetSysex(bool value) { sysex_ = value; }

  // For "push" permission, may specify userVisibleOnly.
  // Note that userVisibleOnly = true is the only currently supported type.
  bool HasUserVisibleOnly() const { return !!user_visible_only_; }
  bool GetUserVisibleOnly() const { DCHECK(HasUserVisibleOnly()); return user_visible_only_.value(); }
  void SetUserVisibleOnly(bool value) { user_visible_only_ = value; }

  // For "clipboard" permission, may specify allowWithoutSanitization.
  bool HasAllowWithoutSanitization() const { return !!allow_without_sanitization_; }
  bool GetAllowWithoutSanitization() const { DCHECK(HasAllowWithoutSanitization()); return allow_without_sanitization_.value(); }
  void SetAllowWithoutSanitization(bool value) { allow_without_sanitization_ = value; }

  // For "camera" permission, may specify panTiltZoom.
  bool HasPanTiltZoom() const { return !!pan_tilt_zoom_; }
  bool GetPanTiltZoom() const { DCHECK(HasPanTiltZoom()); return pan_tilt_zoom_.value(); }
  void SetPanTiltZoom(bool value) { pan_tilt_zoom_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<PermissionDescriptor> Clone() const;

  template<int STATE>
  class PermissionDescriptorBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kNameSet = 1 << 1,
      kAllRequiredFieldsSet = (kNameSet | 0)
    };

    PermissionDescriptorBuilder<STATE | kNameSet>& SetName(const std::string& value) {
      static_assert(!(STATE & kNameSet), "property name should not have already been set");
      result_->SetName(value);
      return CastState<kNameSet>();
    }

    PermissionDescriptorBuilder<STATE>& SetSysex(bool value) {
      result_->SetSysex(value);
      return *this;
    }

    PermissionDescriptorBuilder<STATE>& SetUserVisibleOnly(bool value) {
      result_->SetUserVisibleOnly(value);
      return *this;
    }

    PermissionDescriptorBuilder<STATE>& SetAllowWithoutSanitization(bool value) {
      result_->SetAllowWithoutSanitization(value);
      return *this;
    }

    PermissionDescriptorBuilder<STATE>& SetPanTiltZoom(bool value) {
      result_->SetPanTiltZoom(value);
      return *this;
    }

    std::unique_ptr<PermissionDescriptor> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class PermissionDescriptor;
    PermissionDescriptorBuilder() : result_(new PermissionDescriptor()) { }

    template<int STEP> PermissionDescriptorBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<PermissionDescriptorBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<PermissionDescriptor> result_;
  };

  static PermissionDescriptorBuilder<0> Builder() {
    return PermissionDescriptorBuilder<0>();
  }

 private:
  PermissionDescriptor() { }

  std::string name_;
  absl::optional<bool> sysex_;
  absl::optional<bool> user_visible_only_;
  absl::optional<bool> allow_without_sanitization_;
  absl::optional<bool> pan_tilt_zoom_;
};


// Chrome histogram bucket.
class HEADLESS_EXPORT Bucket {
 public:
  static std::unique_ptr<Bucket> Parse(const base::Value& value, ErrorReporter* errors);

  Bucket(const Bucket&) = delete;
  Bucket& operator=(const Bucket&) = delete;

  ~Bucket() { }


  // Minimum value (inclusive).
  int GetLow() const { return low_; }
  void SetLow(int value) { low_ = value; }

  // Maximum value (exclusive).
  int GetHigh() const { return high_; }
  void SetHigh(int value) { high_ = value; }

  // Number of samples.
  int GetCount() const { return count_; }
  void SetCount(int value) { count_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<Bucket> Clone() const;

  template<int STATE>
  class BucketBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kLowSet = 1 << 1,
    kHighSet = 1 << 2,
    kCountSet = 1 << 3,
      kAllRequiredFieldsSet = (kLowSet | kHighSet | kCountSet | 0)
    };

    BucketBuilder<STATE | kLowSet>& SetLow(int value) {
      static_assert(!(STATE & kLowSet), "property low should not have already been set");
      result_->SetLow(value);
      return CastState<kLowSet>();
    }

    BucketBuilder<STATE | kHighSet>& SetHigh(int value) {
      static_assert(!(STATE & kHighSet), "property high should not have already been set");
      result_->SetHigh(value);
      return CastState<kHighSet>();
    }

    BucketBuilder<STATE | kCountSet>& SetCount(int value) {
      static_assert(!(STATE & kCountSet), "property count should not have already been set");
      result_->SetCount(value);
      return CastState<kCountSet>();
    }

    std::unique_ptr<Bucket> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class Bucket;
    BucketBuilder() : result_(new Bucket()) { }

    template<int STEP> BucketBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<BucketBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<Bucket> result_;
  };

  static BucketBuilder<0> Builder() {
    return BucketBuilder<0>();
  }

 private:
  Bucket() { }

  int low_;
  int high_;
  int count_;
};


// Chrome histogram.
class HEADLESS_EXPORT Histogram {
 public:
  static std::unique_ptr<Histogram> Parse(const base::Value& value, ErrorReporter* errors);

  Histogram(const Histogram&) = delete;
  Histogram& operator=(const Histogram&) = delete;

  ~Histogram() { }


  // Name.
  std::string GetName() const { return name_; }
  void SetName(const std::string& value) { name_ = value; }

  // Sum of sample values.
  int GetSum() const { return sum_; }
  void SetSum(int value) { sum_ = value; }

  // Total number of samples.
  int GetCount() const { return count_; }
  void SetCount(int value) { count_ = value; }

  // Buckets.
  const std::vector<std::unique_ptr<::headless::browser::Bucket>>* GetBuckets() const { return &buckets_; }
  void SetBuckets(std::vector<std::unique_ptr<::headless::browser::Bucket>> value) { buckets_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<Histogram> Clone() const;

  template<int STATE>
  class HistogramBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kNameSet = 1 << 1,
    kSumSet = 1 << 2,
    kCountSet = 1 << 3,
    kBucketsSet = 1 << 4,
      kAllRequiredFieldsSet = (kNameSet | kSumSet | kCountSet | kBucketsSet | 0)
    };

    HistogramBuilder<STATE | kNameSet>& SetName(const std::string& value) {
      static_assert(!(STATE & kNameSet), "property name should not have already been set");
      result_->SetName(value);
      return CastState<kNameSet>();
    }

    HistogramBuilder<STATE | kSumSet>& SetSum(int value) {
      static_assert(!(STATE & kSumSet), "property sum should not have already been set");
      result_->SetSum(value);
      return CastState<kSumSet>();
    }

    HistogramBuilder<STATE | kCountSet>& SetCount(int value) {
      static_assert(!(STATE & kCountSet), "property count should not have already been set");
      result_->SetCount(value);
      return CastState<kCountSet>();
    }

    HistogramBuilder<STATE | kBucketsSet>& SetBuckets(std::vector<std::unique_ptr<::headless::browser::Bucket>> value) {
      static_assert(!(STATE & kBucketsSet), "property buckets should not have already been set");
      result_->SetBuckets(std::move(value));
      return CastState<kBucketsSet>();
    }

    std::unique_ptr<Histogram> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class Histogram;
    HistogramBuilder() : result_(new Histogram()) { }

    template<int STEP> HistogramBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<HistogramBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<Histogram> result_;
  };

  static HistogramBuilder<0> Builder() {
    return HistogramBuilder<0>();
  }

 private:
  Histogram() { }

  std::string name_;
  int sum_;
  int count_;
  std::vector<std::unique_ptr<::headless::browser::Bucket>> buckets_;
};


// Parameters for the SetPermission command.
class HEADLESS_EXPORT SetPermissionParams {
 public:
  static std::unique_ptr<SetPermissionParams> Parse(const base::Value& value, ErrorReporter* errors);

  SetPermissionParams(const SetPermissionParams&) = delete;
  SetPermissionParams& operator=(const SetPermissionParams&) = delete;

  ~SetPermissionParams() { }


  // Descriptor of permission to override.
  const ::headless::browser::PermissionDescriptor* GetPermission() const { return permission_.get(); }
  void SetPermission(std::unique_ptr<::headless::browser::PermissionDescriptor> value) { permission_ = std::move(value); }

  // Setting of the permission.
  ::headless::browser::PermissionSetting GetSetting() const { return setting_; }
  void SetSetting(::headless::browser::PermissionSetting value) { setting_ = value; }

  // Origin the permission applies to, all origins if not specified.
  bool HasOrigin() const { return !!origin_; }
  std::string GetOrigin() const { DCHECK(HasOrigin()); return origin_.value(); }
  void SetOrigin(const std::string& value) { origin_ = value; }

  // Context to override. When omitted, default browser context is used.
  bool HasBrowserContextId() const { return !!browser_context_id_; }
  std::string GetBrowserContextId() const { DCHECK(HasBrowserContextId()); return browser_context_id_.value(); }
  void SetBrowserContextId(const std::string& value) { browser_context_id_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<SetPermissionParams> Clone() const;

  template<int STATE>
  class SetPermissionParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kPermissionSet = 1 << 1,
    kSettingSet = 1 << 2,
      kAllRequiredFieldsSet = (kPermissionSet | kSettingSet | 0)
    };

    SetPermissionParamsBuilder<STATE | kPermissionSet>& SetPermission(std::unique_ptr<::headless::browser::PermissionDescriptor> value) {
      static_assert(!(STATE & kPermissionSet), "property permission should not have already been set");
      result_->SetPermission(std::move(value));
      return CastState<kPermissionSet>();
    }

    SetPermissionParamsBuilder<STATE | kSettingSet>& SetSetting(::headless::browser::PermissionSetting value) {
      static_assert(!(STATE & kSettingSet), "property setting should not have already been set");
      result_->SetSetting(value);
      return CastState<kSettingSet>();
    }

    SetPermissionParamsBuilder<STATE>& SetOrigin(const std::string& value) {
      result_->SetOrigin(value);
      return *this;
    }

    SetPermissionParamsBuilder<STATE>& SetBrowserContextId(const std::string& value) {
      result_->SetBrowserContextId(value);
      return *this;
    }

    std::unique_ptr<SetPermissionParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetPermissionParams;
    SetPermissionParamsBuilder() : result_(new SetPermissionParams()) { }

    template<int STEP> SetPermissionParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetPermissionParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetPermissionParams> result_;
  };

  static SetPermissionParamsBuilder<0> Builder() {
    return SetPermissionParamsBuilder<0>();
  }

 private:
  SetPermissionParams() { }

  std::unique_ptr<::headless::browser::PermissionDescriptor> permission_;
  ::headless::browser::PermissionSetting setting_;
  absl::optional<std::string> origin_;
  absl::optional<std::string> browser_context_id_;
};


// Result for the SetPermission command.
class HEADLESS_EXPORT SetPermissionResult {
 public:
  static std::unique_ptr<SetPermissionResult> Parse(const base::Value& value, ErrorReporter* errors);

  SetPermissionResult(const SetPermissionResult&) = delete;
  SetPermissionResult& operator=(const SetPermissionResult&) = delete;

  ~SetPermissionResult() { }


  base::Value Serialize() const;
  std::unique_ptr<SetPermissionResult> Clone() const;

  template<int STATE>
  class SetPermissionResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<SetPermissionResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetPermissionResult;
    SetPermissionResultBuilder() : result_(new SetPermissionResult()) { }

    template<int STEP> SetPermissionResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetPermissionResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetPermissionResult> result_;
  };

  static SetPermissionResultBuilder<0> Builder() {
    return SetPermissionResultBuilder<0>();
  }

 private:
  SetPermissionResult() { }

};


// Parameters for the GrantPermissions command.
class HEADLESS_EXPORT GrantPermissionsParams {
 public:
  static std::unique_ptr<GrantPermissionsParams> Parse(const base::Value& value, ErrorReporter* errors);

  GrantPermissionsParams(const GrantPermissionsParams&) = delete;
  GrantPermissionsParams& operator=(const GrantPermissionsParams&) = delete;

  ~GrantPermissionsParams() { }


  const std::vector<::headless::browser::PermissionType>* GetPermissions() const { return &permissions_; }
  void SetPermissions(std::vector<::headless::browser::PermissionType> value) { permissions_ = std::move(value); }

  // Origin the permission applies to, all origins if not specified.
  bool HasOrigin() const { return !!origin_; }
  std::string GetOrigin() const { DCHECK(HasOrigin()); return origin_.value(); }
  void SetOrigin(const std::string& value) { origin_ = value; }

  // BrowserContext to override permissions. When omitted, default browser context is used.
  bool HasBrowserContextId() const { return !!browser_context_id_; }
  std::string GetBrowserContextId() const { DCHECK(HasBrowserContextId()); return browser_context_id_.value(); }
  void SetBrowserContextId(const std::string& value) { browser_context_id_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<GrantPermissionsParams> Clone() const;

  template<int STATE>
  class GrantPermissionsParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kPermissionsSet = 1 << 1,
      kAllRequiredFieldsSet = (kPermissionsSet | 0)
    };

    GrantPermissionsParamsBuilder<STATE | kPermissionsSet>& SetPermissions(std::vector<::headless::browser::PermissionType> value) {
      static_assert(!(STATE & kPermissionsSet), "property permissions should not have already been set");
      result_->SetPermissions(std::move(value));
      return CastState<kPermissionsSet>();
    }

    GrantPermissionsParamsBuilder<STATE>& SetOrigin(const std::string& value) {
      result_->SetOrigin(value);
      return *this;
    }

    GrantPermissionsParamsBuilder<STATE>& SetBrowserContextId(const std::string& value) {
      result_->SetBrowserContextId(value);
      return *this;
    }

    std::unique_ptr<GrantPermissionsParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class GrantPermissionsParams;
    GrantPermissionsParamsBuilder() : result_(new GrantPermissionsParams()) { }

    template<int STEP> GrantPermissionsParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<GrantPermissionsParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<GrantPermissionsParams> result_;
  };

  static GrantPermissionsParamsBuilder<0> Builder() {
    return GrantPermissionsParamsBuilder<0>();
  }

 private:
  GrantPermissionsParams() { }

  std::vector<::headless::browser::PermissionType> permissions_;
  absl::optional<std::string> origin_;
  absl::optional<std::string> browser_context_id_;
};


// Result for the GrantPermissions command.
class HEADLESS_EXPORT GrantPermissionsResult {
 public:
  static std::unique_ptr<GrantPermissionsResult> Parse(const base::Value& value, ErrorReporter* errors);

  GrantPermissionsResult(const GrantPermissionsResult&) = delete;
  GrantPermissionsResult& operator=(const GrantPermissionsResult&) = delete;

  ~GrantPermissionsResult() { }


  base::Value Serialize() const;
  std::unique_ptr<GrantPermissionsResult> Clone() const;

  template<int STATE>
  class GrantPermissionsResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<GrantPermissionsResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class GrantPermissionsResult;
    GrantPermissionsResultBuilder() : result_(new GrantPermissionsResult()) { }

    template<int STEP> GrantPermissionsResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<GrantPermissionsResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<GrantPermissionsResult> result_;
  };

  static GrantPermissionsResultBuilder<0> Builder() {
    return GrantPermissionsResultBuilder<0>();
  }

 private:
  GrantPermissionsResult() { }

};


// Parameters for the ResetPermissions command.
class HEADLESS_EXPORT ResetPermissionsParams {
 public:
  static std::unique_ptr<ResetPermissionsParams> Parse(const base::Value& value, ErrorReporter* errors);

  ResetPermissionsParams(const ResetPermissionsParams&) = delete;
  ResetPermissionsParams& operator=(const ResetPermissionsParams&) = delete;

  ~ResetPermissionsParams() { }


  // BrowserContext to reset permissions. When omitted, default browser context is used.
  bool HasBrowserContextId() const { return !!browser_context_id_; }
  std::string GetBrowserContextId() const { DCHECK(HasBrowserContextId()); return browser_context_id_.value(); }
  void SetBrowserContextId(const std::string& value) { browser_context_id_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<ResetPermissionsParams> Clone() const;

  template<int STATE>
  class ResetPermissionsParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    ResetPermissionsParamsBuilder<STATE>& SetBrowserContextId(const std::string& value) {
      result_->SetBrowserContextId(value);
      return *this;
    }

    std::unique_ptr<ResetPermissionsParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class ResetPermissionsParams;
    ResetPermissionsParamsBuilder() : result_(new ResetPermissionsParams()) { }

    template<int STEP> ResetPermissionsParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<ResetPermissionsParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<ResetPermissionsParams> result_;
  };

  static ResetPermissionsParamsBuilder<0> Builder() {
    return ResetPermissionsParamsBuilder<0>();
  }

 private:
  ResetPermissionsParams() { }

  absl::optional<std::string> browser_context_id_;
};


// Result for the ResetPermissions command.
class HEADLESS_EXPORT ResetPermissionsResult {
 public:
  static std::unique_ptr<ResetPermissionsResult> Parse(const base::Value& value, ErrorReporter* errors);

  ResetPermissionsResult(const ResetPermissionsResult&) = delete;
  ResetPermissionsResult& operator=(const ResetPermissionsResult&) = delete;

  ~ResetPermissionsResult() { }


  base::Value Serialize() const;
  std::unique_ptr<ResetPermissionsResult> Clone() const;

  template<int STATE>
  class ResetPermissionsResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<ResetPermissionsResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class ResetPermissionsResult;
    ResetPermissionsResultBuilder() : result_(new ResetPermissionsResult()) { }

    template<int STEP> ResetPermissionsResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<ResetPermissionsResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<ResetPermissionsResult> result_;
  };

  static ResetPermissionsResultBuilder<0> Builder() {
    return ResetPermissionsResultBuilder<0>();
  }

 private:
  ResetPermissionsResult() { }

};


// Parameters for the SetDownloadBehavior command.
class HEADLESS_EXPORT SetDownloadBehaviorParams {
 public:
  static std::unique_ptr<SetDownloadBehaviorParams> Parse(const base::Value& value, ErrorReporter* errors);

  SetDownloadBehaviorParams(const SetDownloadBehaviorParams&) = delete;
  SetDownloadBehaviorParams& operator=(const SetDownloadBehaviorParams&) = delete;

  ~SetDownloadBehaviorParams() { }


  // Whether to allow all or deny all download requests, or use default Chrome behavior if
  // available (otherwise deny). |allowAndName| allows download and names files according to
  // their dowmload guids.
  ::headless::browser::SetDownloadBehaviorBehavior GetBehavior() const { return behavior_; }
  void SetBehavior(::headless::browser::SetDownloadBehaviorBehavior value) { behavior_ = value; }

  // BrowserContext to set download behavior. When omitted, default browser context is used.
  bool HasBrowserContextId() const { return !!browser_context_id_; }
  std::string GetBrowserContextId() const { DCHECK(HasBrowserContextId()); return browser_context_id_.value(); }
  void SetBrowserContextId(const std::string& value) { browser_context_id_ = value; }

  // The default path to save downloaded files to. This is required if behavior is set to 'allow'
  // or 'allowAndName'.
  bool HasDownloadPath() const { return !!download_path_; }
  std::string GetDownloadPath() const { DCHECK(HasDownloadPath()); return download_path_.value(); }
  void SetDownloadPath(const std::string& value) { download_path_ = value; }

  // Whether to emit download events (defaults to false).
  bool HasEventsEnabled() const { return !!events_enabled_; }
  bool GetEventsEnabled() const { DCHECK(HasEventsEnabled()); return events_enabled_.value(); }
  void SetEventsEnabled(bool value) { events_enabled_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<SetDownloadBehaviorParams> Clone() const;

  template<int STATE>
  class SetDownloadBehaviorParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kBehaviorSet = 1 << 1,
      kAllRequiredFieldsSet = (kBehaviorSet | 0)
    };

    SetDownloadBehaviorParamsBuilder<STATE | kBehaviorSet>& SetBehavior(::headless::browser::SetDownloadBehaviorBehavior value) {
      static_assert(!(STATE & kBehaviorSet), "property behavior should not have already been set");
      result_->SetBehavior(value);
      return CastState<kBehaviorSet>();
    }

    SetDownloadBehaviorParamsBuilder<STATE>& SetBrowserContextId(const std::string& value) {
      result_->SetBrowserContextId(value);
      return *this;
    }

    SetDownloadBehaviorParamsBuilder<STATE>& SetDownloadPath(const std::string& value) {
      result_->SetDownloadPath(value);
      return *this;
    }

    SetDownloadBehaviorParamsBuilder<STATE>& SetEventsEnabled(bool value) {
      result_->SetEventsEnabled(value);
      return *this;
    }

    std::unique_ptr<SetDownloadBehaviorParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetDownloadBehaviorParams;
    SetDownloadBehaviorParamsBuilder() : result_(new SetDownloadBehaviorParams()) { }

    template<int STEP> SetDownloadBehaviorParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetDownloadBehaviorParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetDownloadBehaviorParams> result_;
  };

  static SetDownloadBehaviorParamsBuilder<0> Builder() {
    return SetDownloadBehaviorParamsBuilder<0>();
  }

 private:
  SetDownloadBehaviorParams() { }

  ::headless::browser::SetDownloadBehaviorBehavior behavior_;
  absl::optional<std::string> browser_context_id_;
  absl::optional<std::string> download_path_;
  absl::optional<bool> events_enabled_;
};


// Result for the SetDownloadBehavior command.
class HEADLESS_EXPORT SetDownloadBehaviorResult {
 public:
  static std::unique_ptr<SetDownloadBehaviorResult> Parse(const base::Value& value, ErrorReporter* errors);

  SetDownloadBehaviorResult(const SetDownloadBehaviorResult&) = delete;
  SetDownloadBehaviorResult& operator=(const SetDownloadBehaviorResult&) = delete;

  ~SetDownloadBehaviorResult() { }


  base::Value Serialize() const;
  std::unique_ptr<SetDownloadBehaviorResult> Clone() const;

  template<int STATE>
  class SetDownloadBehaviorResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<SetDownloadBehaviorResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetDownloadBehaviorResult;
    SetDownloadBehaviorResultBuilder() : result_(new SetDownloadBehaviorResult()) { }

    template<int STEP> SetDownloadBehaviorResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetDownloadBehaviorResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetDownloadBehaviorResult> result_;
  };

  static SetDownloadBehaviorResultBuilder<0> Builder() {
    return SetDownloadBehaviorResultBuilder<0>();
  }

 private:
  SetDownloadBehaviorResult() { }

};


// Parameters for the CancelDownload command.
class HEADLESS_EXPORT CancelDownloadParams {
 public:
  static std::unique_ptr<CancelDownloadParams> Parse(const base::Value& value, ErrorReporter* errors);

  CancelDownloadParams(const CancelDownloadParams&) = delete;
  CancelDownloadParams& operator=(const CancelDownloadParams&) = delete;

  ~CancelDownloadParams() { }


  // Global unique identifier of the download.
  std::string GetGuid() const { return guid_; }
  void SetGuid(const std::string& value) { guid_ = value; }

  // BrowserContext to perform the action in. When omitted, default browser context is used.
  bool HasBrowserContextId() const { return !!browser_context_id_; }
  std::string GetBrowserContextId() const { DCHECK(HasBrowserContextId()); return browser_context_id_.value(); }
  void SetBrowserContextId(const std::string& value) { browser_context_id_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<CancelDownloadParams> Clone() const;

  template<int STATE>
  class CancelDownloadParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kGuidSet = 1 << 1,
      kAllRequiredFieldsSet = (kGuidSet | 0)
    };

    CancelDownloadParamsBuilder<STATE | kGuidSet>& SetGuid(const std::string& value) {
      static_assert(!(STATE & kGuidSet), "property guid should not have already been set");
      result_->SetGuid(value);
      return CastState<kGuidSet>();
    }

    CancelDownloadParamsBuilder<STATE>& SetBrowserContextId(const std::string& value) {
      result_->SetBrowserContextId(value);
      return *this;
    }

    std::unique_ptr<CancelDownloadParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class CancelDownloadParams;
    CancelDownloadParamsBuilder() : result_(new CancelDownloadParams()) { }

    template<int STEP> CancelDownloadParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<CancelDownloadParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<CancelDownloadParams> result_;
  };

  static CancelDownloadParamsBuilder<0> Builder() {
    return CancelDownloadParamsBuilder<0>();
  }

 private:
  CancelDownloadParams() { }

  std::string guid_;
  absl::optional<std::string> browser_context_id_;
};


// Result for the CancelDownload command.
class HEADLESS_EXPORT CancelDownloadResult {
 public:
  static std::unique_ptr<CancelDownloadResult> Parse(const base::Value& value, ErrorReporter* errors);

  CancelDownloadResult(const CancelDownloadResult&) = delete;
  CancelDownloadResult& operator=(const CancelDownloadResult&) = delete;

  ~CancelDownloadResult() { }


  base::Value Serialize() const;
  std::unique_ptr<CancelDownloadResult> Clone() const;

  template<int STATE>
  class CancelDownloadResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<CancelDownloadResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class CancelDownloadResult;
    CancelDownloadResultBuilder() : result_(new CancelDownloadResult()) { }

    template<int STEP> CancelDownloadResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<CancelDownloadResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<CancelDownloadResult> result_;
  };

  static CancelDownloadResultBuilder<0> Builder() {
    return CancelDownloadResultBuilder<0>();
  }

 private:
  CancelDownloadResult() { }

};


// Parameters for the Close command.
class HEADLESS_EXPORT CloseParams {
 public:
  static std::unique_ptr<CloseParams> Parse(const base::Value& value, ErrorReporter* errors);

  CloseParams(const CloseParams&) = delete;
  CloseParams& operator=(const CloseParams&) = delete;

  ~CloseParams() { }


  base::Value Serialize() const;
  std::unique_ptr<CloseParams> Clone() const;

  template<int STATE>
  class CloseParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<CloseParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class CloseParams;
    CloseParamsBuilder() : result_(new CloseParams()) { }

    template<int STEP> CloseParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<CloseParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<CloseParams> result_;
  };

  static CloseParamsBuilder<0> Builder() {
    return CloseParamsBuilder<0>();
  }

 private:
  CloseParams() { }

};


// Result for the Close command.
class HEADLESS_EXPORT CloseResult {
 public:
  static std::unique_ptr<CloseResult> Parse(const base::Value& value, ErrorReporter* errors);

  CloseResult(const CloseResult&) = delete;
  CloseResult& operator=(const CloseResult&) = delete;

  ~CloseResult() { }


  base::Value Serialize() const;
  std::unique_ptr<CloseResult> Clone() const;

  template<int STATE>
  class CloseResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<CloseResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class CloseResult;
    CloseResultBuilder() : result_(new CloseResult()) { }

    template<int STEP> CloseResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<CloseResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<CloseResult> result_;
  };

  static CloseResultBuilder<0> Builder() {
    return CloseResultBuilder<0>();
  }

 private:
  CloseResult() { }

};


// Parameters for the Crash command.
class HEADLESS_EXPORT CrashParams {
 public:
  static std::unique_ptr<CrashParams> Parse(const base::Value& value, ErrorReporter* errors);

  CrashParams(const CrashParams&) = delete;
  CrashParams& operator=(const CrashParams&) = delete;

  ~CrashParams() { }


  base::Value Serialize() const;
  std::unique_ptr<CrashParams> Clone() const;

  template<int STATE>
  class CrashParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<CrashParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class CrashParams;
    CrashParamsBuilder() : result_(new CrashParams()) { }

    template<int STEP> CrashParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<CrashParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<CrashParams> result_;
  };

  static CrashParamsBuilder<0> Builder() {
    return CrashParamsBuilder<0>();
  }

 private:
  CrashParams() { }

};


// Result for the Crash command.
class HEADLESS_EXPORT CrashResult {
 public:
  static std::unique_ptr<CrashResult> Parse(const base::Value& value, ErrorReporter* errors);

  CrashResult(const CrashResult&) = delete;
  CrashResult& operator=(const CrashResult&) = delete;

  ~CrashResult() { }


  base::Value Serialize() const;
  std::unique_ptr<CrashResult> Clone() const;

  template<int STATE>
  class CrashResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<CrashResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class CrashResult;
    CrashResultBuilder() : result_(new CrashResult()) { }

    template<int STEP> CrashResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<CrashResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<CrashResult> result_;
  };

  static CrashResultBuilder<0> Builder() {
    return CrashResultBuilder<0>();
  }

 private:
  CrashResult() { }

};


// Parameters for the CrashGpuProcess command.
class HEADLESS_EXPORT CrashGpuProcessParams {
 public:
  static std::unique_ptr<CrashGpuProcessParams> Parse(const base::Value& value, ErrorReporter* errors);

  CrashGpuProcessParams(const CrashGpuProcessParams&) = delete;
  CrashGpuProcessParams& operator=(const CrashGpuProcessParams&) = delete;

  ~CrashGpuProcessParams() { }


  base::Value Serialize() const;
  std::unique_ptr<CrashGpuProcessParams> Clone() const;

  template<int STATE>
  class CrashGpuProcessParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<CrashGpuProcessParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class CrashGpuProcessParams;
    CrashGpuProcessParamsBuilder() : result_(new CrashGpuProcessParams()) { }

    template<int STEP> CrashGpuProcessParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<CrashGpuProcessParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<CrashGpuProcessParams> result_;
  };

  static CrashGpuProcessParamsBuilder<0> Builder() {
    return CrashGpuProcessParamsBuilder<0>();
  }

 private:
  CrashGpuProcessParams() { }

};


// Result for the CrashGpuProcess command.
class HEADLESS_EXPORT CrashGpuProcessResult {
 public:
  static std::unique_ptr<CrashGpuProcessResult> Parse(const base::Value& value, ErrorReporter* errors);

  CrashGpuProcessResult(const CrashGpuProcessResult&) = delete;
  CrashGpuProcessResult& operator=(const CrashGpuProcessResult&) = delete;

  ~CrashGpuProcessResult() { }


  base::Value Serialize() const;
  std::unique_ptr<CrashGpuProcessResult> Clone() const;

  template<int STATE>
  class CrashGpuProcessResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<CrashGpuProcessResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class CrashGpuProcessResult;
    CrashGpuProcessResultBuilder() : result_(new CrashGpuProcessResult()) { }

    template<int STEP> CrashGpuProcessResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<CrashGpuProcessResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<CrashGpuProcessResult> result_;
  };

  static CrashGpuProcessResultBuilder<0> Builder() {
    return CrashGpuProcessResultBuilder<0>();
  }

 private:
  CrashGpuProcessResult() { }

};


// Parameters for the GetVersion command.
class HEADLESS_EXPORT GetVersionParams {
 public:
  static std::unique_ptr<GetVersionParams> Parse(const base::Value& value, ErrorReporter* errors);

  GetVersionParams(const GetVersionParams&) = delete;
  GetVersionParams& operator=(const GetVersionParams&) = delete;

  ~GetVersionParams() { }


  base::Value Serialize() const;
  std::unique_ptr<GetVersionParams> Clone() const;

  template<int STATE>
  class GetVersionParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<GetVersionParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class GetVersionParams;
    GetVersionParamsBuilder() : result_(new GetVersionParams()) { }

    template<int STEP> GetVersionParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<GetVersionParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<GetVersionParams> result_;
  };

  static GetVersionParamsBuilder<0> Builder() {
    return GetVersionParamsBuilder<0>();
  }

 private:
  GetVersionParams() { }

};


// Result for the GetVersion command.
class HEADLESS_EXPORT GetVersionResult {
 public:
  static std::unique_ptr<GetVersionResult> Parse(const base::Value& value, ErrorReporter* errors);

  GetVersionResult(const GetVersionResult&) = delete;
  GetVersionResult& operator=(const GetVersionResult&) = delete;

  ~GetVersionResult() { }


  // Protocol version.
  std::string GetProtocolVersion() const { return protocol_version_; }
  void SetProtocolVersion(const std::string& value) { protocol_version_ = value; }

  // Product name.
  std::string GetProduct() const { return product_; }
  void SetProduct(const std::string& value) { product_ = value; }

  // Product revision.
  std::string GetRevision() const { return revision_; }
  void SetRevision(const std::string& value) { revision_ = value; }

  // User-Agent.
  std::string GetUserAgent() const { return user_agent_; }
  void SetUserAgent(const std::string& value) { user_agent_ = value; }

  // V8 version.
  std::string GetJsVersion() const { return js_version_; }
  void SetJsVersion(const std::string& value) { js_version_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<GetVersionResult> Clone() const;

  template<int STATE>
  class GetVersionResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kProtocolVersionSet = 1 << 1,
    kProductSet = 1 << 2,
    kRevisionSet = 1 << 3,
    kUserAgentSet = 1 << 4,
    kJsVersionSet = 1 << 5,
      kAllRequiredFieldsSet = (kProtocolVersionSet | kProductSet | kRevisionSet | kUserAgentSet | kJsVersionSet | 0)
    };

    GetVersionResultBuilder<STATE | kProtocolVersionSet>& SetProtocolVersion(const std::string& value) {
      static_assert(!(STATE & kProtocolVersionSet), "property protocolVersion should not have already been set");
      result_->SetProtocolVersion(value);
      return CastState<kProtocolVersionSet>();
    }

    GetVersionResultBuilder<STATE | kProductSet>& SetProduct(const std::string& value) {
      static_assert(!(STATE & kProductSet), "property product should not have already been set");
      result_->SetProduct(value);
      return CastState<kProductSet>();
    }

    GetVersionResultBuilder<STATE | kRevisionSet>& SetRevision(const std::string& value) {
      static_assert(!(STATE & kRevisionSet), "property revision should not have already been set");
      result_->SetRevision(value);
      return CastState<kRevisionSet>();
    }

    GetVersionResultBuilder<STATE | kUserAgentSet>& SetUserAgent(const std::string& value) {
      static_assert(!(STATE & kUserAgentSet), "property userAgent should not have already been set");
      result_->SetUserAgent(value);
      return CastState<kUserAgentSet>();
    }

    GetVersionResultBuilder<STATE | kJsVersionSet>& SetJsVersion(const std::string& value) {
      static_assert(!(STATE & kJsVersionSet), "property jsVersion should not have already been set");
      result_->SetJsVersion(value);
      return CastState<kJsVersionSet>();
    }

    std::unique_ptr<GetVersionResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class GetVersionResult;
    GetVersionResultBuilder() : result_(new GetVersionResult()) { }

    template<int STEP> GetVersionResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<GetVersionResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<GetVersionResult> result_;
  };

  static GetVersionResultBuilder<0> Builder() {
    return GetVersionResultBuilder<0>();
  }

 private:
  GetVersionResult() { }

  std::string protocol_version_;
  std::string product_;
  std::string revision_;
  std::string user_agent_;
  std::string js_version_;
};


// Parameters for the GetBrowserCommandLine command.
class HEADLESS_EXPORT GetBrowserCommandLineParams {
 public:
  static std::unique_ptr<GetBrowserCommandLineParams> Parse(const base::Value& value, ErrorReporter* errors);

  GetBrowserCommandLineParams(const GetBrowserCommandLineParams&) = delete;
  GetBrowserCommandLineParams& operator=(const GetBrowserCommandLineParams&) = delete;

  ~GetBrowserCommandLineParams() { }


  base::Value Serialize() const;
  std::unique_ptr<GetBrowserCommandLineParams> Clone() const;

  template<int STATE>
  class GetBrowserCommandLineParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<GetBrowserCommandLineParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class GetBrowserCommandLineParams;
    GetBrowserCommandLineParamsBuilder() : result_(new GetBrowserCommandLineParams()) { }

    template<int STEP> GetBrowserCommandLineParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<GetBrowserCommandLineParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<GetBrowserCommandLineParams> result_;
  };

  static GetBrowserCommandLineParamsBuilder<0> Builder() {
    return GetBrowserCommandLineParamsBuilder<0>();
  }

 private:
  GetBrowserCommandLineParams() { }

};


// Result for the GetBrowserCommandLine command.
class HEADLESS_EXPORT GetBrowserCommandLineResult {
 public:
  static std::unique_ptr<GetBrowserCommandLineResult> Parse(const base::Value& value, ErrorReporter* errors);

  GetBrowserCommandLineResult(const GetBrowserCommandLineResult&) = delete;
  GetBrowserCommandLineResult& operator=(const GetBrowserCommandLineResult&) = delete;

  ~GetBrowserCommandLineResult() { }


  // Commandline parameters
  const std::vector<std::string>* GetArguments() const { return &arguments_; }
  void SetArguments(std::vector<std::string> value) { arguments_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<GetBrowserCommandLineResult> Clone() const;

  template<int STATE>
  class GetBrowserCommandLineResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kArgumentsSet = 1 << 1,
      kAllRequiredFieldsSet = (kArgumentsSet | 0)
    };

    GetBrowserCommandLineResultBuilder<STATE | kArgumentsSet>& SetArguments(std::vector<std::string> value) {
      static_assert(!(STATE & kArgumentsSet), "property arguments should not have already been set");
      result_->SetArguments(std::move(value));
      return CastState<kArgumentsSet>();
    }

    std::unique_ptr<GetBrowserCommandLineResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class GetBrowserCommandLineResult;
    GetBrowserCommandLineResultBuilder() : result_(new GetBrowserCommandLineResult()) { }

    template<int STEP> GetBrowserCommandLineResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<GetBrowserCommandLineResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<GetBrowserCommandLineResult> result_;
  };

  static GetBrowserCommandLineResultBuilder<0> Builder() {
    return GetBrowserCommandLineResultBuilder<0>();
  }

 private:
  GetBrowserCommandLineResult() { }

  std::vector<std::string> arguments_;
};


// Parameters for the GetHistograms command.
class HEADLESS_EXPORT GetHistogramsParams {
 public:
  static std::unique_ptr<GetHistogramsParams> Parse(const base::Value& value, ErrorReporter* errors);

  GetHistogramsParams(const GetHistogramsParams&) = delete;
  GetHistogramsParams& operator=(const GetHistogramsParams&) = delete;

  ~GetHistogramsParams() { }


  // Requested substring in name. Only histograms which have query as a
  // substring in their name are extracted. An empty or absent query returns
  // all histograms.
  bool HasQuery() const { return !!query_; }
  std::string GetQuery() const { DCHECK(HasQuery()); return query_.value(); }
  void SetQuery(const std::string& value) { query_ = value; }

  // If true, retrieve delta since last delta call.
  bool HasDelta() const { return !!delta_; }
  bool GetDelta() const { DCHECK(HasDelta()); return delta_.value(); }
  void SetDelta(bool value) { delta_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<GetHistogramsParams> Clone() const;

  template<int STATE>
  class GetHistogramsParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    GetHistogramsParamsBuilder<STATE>& SetQuery(const std::string& value) {
      result_->SetQuery(value);
      return *this;
    }

    GetHistogramsParamsBuilder<STATE>& SetDelta(bool value) {
      result_->SetDelta(value);
      return *this;
    }

    std::unique_ptr<GetHistogramsParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class GetHistogramsParams;
    GetHistogramsParamsBuilder() : result_(new GetHistogramsParams()) { }

    template<int STEP> GetHistogramsParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<GetHistogramsParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<GetHistogramsParams> result_;
  };

  static GetHistogramsParamsBuilder<0> Builder() {
    return GetHistogramsParamsBuilder<0>();
  }

 private:
  GetHistogramsParams() { }

  absl::optional<std::string> query_;
  absl::optional<bool> delta_;
};


// Result for the GetHistograms command.
class HEADLESS_EXPORT GetHistogramsResult {
 public:
  static std::unique_ptr<GetHistogramsResult> Parse(const base::Value& value, ErrorReporter* errors);

  GetHistogramsResult(const GetHistogramsResult&) = delete;
  GetHistogramsResult& operator=(const GetHistogramsResult&) = delete;

  ~GetHistogramsResult() { }


  // Histograms.
  const std::vector<std::unique_ptr<::headless::browser::Histogram>>* GetHistograms() const { return &histograms_; }
  void SetHistograms(std::vector<std::unique_ptr<::headless::browser::Histogram>> value) { histograms_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<GetHistogramsResult> Clone() const;

  template<int STATE>
  class GetHistogramsResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kHistogramsSet = 1 << 1,
      kAllRequiredFieldsSet = (kHistogramsSet | 0)
    };

    GetHistogramsResultBuilder<STATE | kHistogramsSet>& SetHistograms(std::vector<std::unique_ptr<::headless::browser::Histogram>> value) {
      static_assert(!(STATE & kHistogramsSet), "property histograms should not have already been set");
      result_->SetHistograms(std::move(value));
      return CastState<kHistogramsSet>();
    }

    std::unique_ptr<GetHistogramsResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class GetHistogramsResult;
    GetHistogramsResultBuilder() : result_(new GetHistogramsResult()) { }

    template<int STEP> GetHistogramsResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<GetHistogramsResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<GetHistogramsResult> result_;
  };

  static GetHistogramsResultBuilder<0> Builder() {
    return GetHistogramsResultBuilder<0>();
  }

 private:
  GetHistogramsResult() { }

  std::vector<std::unique_ptr<::headless::browser::Histogram>> histograms_;
};


// Parameters for the GetHistogram command.
class HEADLESS_EXPORT GetHistogramParams {
 public:
  static std::unique_ptr<GetHistogramParams> Parse(const base::Value& value, ErrorReporter* errors);

  GetHistogramParams(const GetHistogramParams&) = delete;
  GetHistogramParams& operator=(const GetHistogramParams&) = delete;

  ~GetHistogramParams() { }


  // Requested histogram name.
  std::string GetName() const { return name_; }
  void SetName(const std::string& value) { name_ = value; }

  // If true, retrieve delta since last delta call.
  bool HasDelta() const { return !!delta_; }
  bool GetDelta() const { DCHECK(HasDelta()); return delta_.value(); }
  void SetDelta(bool value) { delta_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<GetHistogramParams> Clone() const;

  template<int STATE>
  class GetHistogramParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kNameSet = 1 << 1,
      kAllRequiredFieldsSet = (kNameSet | 0)
    };

    GetHistogramParamsBuilder<STATE | kNameSet>& SetName(const std::string& value) {
      static_assert(!(STATE & kNameSet), "property name should not have already been set");
      result_->SetName(value);
      return CastState<kNameSet>();
    }

    GetHistogramParamsBuilder<STATE>& SetDelta(bool value) {
      result_->SetDelta(value);
      return *this;
    }

    std::unique_ptr<GetHistogramParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class GetHistogramParams;
    GetHistogramParamsBuilder() : result_(new GetHistogramParams()) { }

    template<int STEP> GetHistogramParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<GetHistogramParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<GetHistogramParams> result_;
  };

  static GetHistogramParamsBuilder<0> Builder() {
    return GetHistogramParamsBuilder<0>();
  }

 private:
  GetHistogramParams() { }

  std::string name_;
  absl::optional<bool> delta_;
};


// Result for the GetHistogram command.
class HEADLESS_EXPORT GetHistogramResult {
 public:
  static std::unique_ptr<GetHistogramResult> Parse(const base::Value& value, ErrorReporter* errors);

  GetHistogramResult(const GetHistogramResult&) = delete;
  GetHistogramResult& operator=(const GetHistogramResult&) = delete;

  ~GetHistogramResult() { }


  // Histogram.
  const ::headless::browser::Histogram* GetHistogram() const { return histogram_.get(); }
  void SetHistogram(std::unique_ptr<::headless::browser::Histogram> value) { histogram_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<GetHistogramResult> Clone() const;

  template<int STATE>
  class GetHistogramResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kHistogramSet = 1 << 1,
      kAllRequiredFieldsSet = (kHistogramSet | 0)
    };

    GetHistogramResultBuilder<STATE | kHistogramSet>& SetHistogram(std::unique_ptr<::headless::browser::Histogram> value) {
      static_assert(!(STATE & kHistogramSet), "property histogram should not have already been set");
      result_->SetHistogram(std::move(value));
      return CastState<kHistogramSet>();
    }

    std::unique_ptr<GetHistogramResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class GetHistogramResult;
    GetHistogramResultBuilder() : result_(new GetHistogramResult()) { }

    template<int STEP> GetHistogramResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<GetHistogramResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<GetHistogramResult> result_;
  };

  static GetHistogramResultBuilder<0> Builder() {
    return GetHistogramResultBuilder<0>();
  }

 private:
  GetHistogramResult() { }

  std::unique_ptr<::headless::browser::Histogram> histogram_;
};


// Parameters for the GetWindowBounds command.
class HEADLESS_EXPORT GetWindowBoundsParams {
 public:
  static std::unique_ptr<GetWindowBoundsParams> Parse(const base::Value& value, ErrorReporter* errors);

  GetWindowBoundsParams(const GetWindowBoundsParams&) = delete;
  GetWindowBoundsParams& operator=(const GetWindowBoundsParams&) = delete;

  ~GetWindowBoundsParams() { }


  // Browser window id.
  int GetWindowId() const { return window_id_; }
  void SetWindowId(int value) { window_id_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<GetWindowBoundsParams> Clone() const;

  template<int STATE>
  class GetWindowBoundsParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kWindowIdSet = 1 << 1,
      kAllRequiredFieldsSet = (kWindowIdSet | 0)
    };

    GetWindowBoundsParamsBuilder<STATE | kWindowIdSet>& SetWindowId(int value) {
      static_assert(!(STATE & kWindowIdSet), "property windowId should not have already been set");
      result_->SetWindowId(value);
      return CastState<kWindowIdSet>();
    }

    std::unique_ptr<GetWindowBoundsParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class GetWindowBoundsParams;
    GetWindowBoundsParamsBuilder() : result_(new GetWindowBoundsParams()) { }

    template<int STEP> GetWindowBoundsParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<GetWindowBoundsParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<GetWindowBoundsParams> result_;
  };

  static GetWindowBoundsParamsBuilder<0> Builder() {
    return GetWindowBoundsParamsBuilder<0>();
  }

 private:
  GetWindowBoundsParams() { }

  int window_id_;
};


// Result for the GetWindowBounds command.
class HEADLESS_EXPORT GetWindowBoundsResult {
 public:
  static std::unique_ptr<GetWindowBoundsResult> Parse(const base::Value& value, ErrorReporter* errors);

  GetWindowBoundsResult(const GetWindowBoundsResult&) = delete;
  GetWindowBoundsResult& operator=(const GetWindowBoundsResult&) = delete;

  ~GetWindowBoundsResult() { }


  // Bounds information of the window. When window state is 'minimized', the restored window
  // position and size are returned.
  const ::headless::browser::Bounds* GetBounds() const { return bounds_.get(); }
  void SetBounds(std::unique_ptr<::headless::browser::Bounds> value) { bounds_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<GetWindowBoundsResult> Clone() const;

  template<int STATE>
  class GetWindowBoundsResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kBoundsSet = 1 << 1,
      kAllRequiredFieldsSet = (kBoundsSet | 0)
    };

    GetWindowBoundsResultBuilder<STATE | kBoundsSet>& SetBounds(std::unique_ptr<::headless::browser::Bounds> value) {
      static_assert(!(STATE & kBoundsSet), "property bounds should not have already been set");
      result_->SetBounds(std::move(value));
      return CastState<kBoundsSet>();
    }

    std::unique_ptr<GetWindowBoundsResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class GetWindowBoundsResult;
    GetWindowBoundsResultBuilder() : result_(new GetWindowBoundsResult()) { }

    template<int STEP> GetWindowBoundsResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<GetWindowBoundsResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<GetWindowBoundsResult> result_;
  };

  static GetWindowBoundsResultBuilder<0> Builder() {
    return GetWindowBoundsResultBuilder<0>();
  }

 private:
  GetWindowBoundsResult() { }

  std::unique_ptr<::headless::browser::Bounds> bounds_;
};


// Parameters for the GetWindowForTarget command.
class HEADLESS_EXPORT GetWindowForTargetParams {
 public:
  static std::unique_ptr<GetWindowForTargetParams> Parse(const base::Value& value, ErrorReporter* errors);

  GetWindowForTargetParams(const GetWindowForTargetParams&) = delete;
  GetWindowForTargetParams& operator=(const GetWindowForTargetParams&) = delete;

  ~GetWindowForTargetParams() { }


  // Devtools agent host id. If called as a part of the session, associated targetId is used.
  bool HasTargetId() const { return !!target_id_; }
  std::string GetTargetId() const { DCHECK(HasTargetId()); return target_id_.value(); }
  void SetTargetId(const std::string& value) { target_id_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<GetWindowForTargetParams> Clone() const;

  template<int STATE>
  class GetWindowForTargetParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    GetWindowForTargetParamsBuilder<STATE>& SetTargetId(const std::string& value) {
      result_->SetTargetId(value);
      return *this;
    }

    std::unique_ptr<GetWindowForTargetParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class GetWindowForTargetParams;
    GetWindowForTargetParamsBuilder() : result_(new GetWindowForTargetParams()) { }

    template<int STEP> GetWindowForTargetParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<GetWindowForTargetParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<GetWindowForTargetParams> result_;
  };

  static GetWindowForTargetParamsBuilder<0> Builder() {
    return GetWindowForTargetParamsBuilder<0>();
  }

 private:
  GetWindowForTargetParams() { }

  absl::optional<std::string> target_id_;
};


// Result for the GetWindowForTarget command.
class HEADLESS_EXPORT GetWindowForTargetResult {
 public:
  static std::unique_ptr<GetWindowForTargetResult> Parse(const base::Value& value, ErrorReporter* errors);

  GetWindowForTargetResult(const GetWindowForTargetResult&) = delete;
  GetWindowForTargetResult& operator=(const GetWindowForTargetResult&) = delete;

  ~GetWindowForTargetResult() { }


  // Browser window id.
  int GetWindowId() const { return window_id_; }
  void SetWindowId(int value) { window_id_ = value; }

  // Bounds information of the window. When window state is 'minimized', the restored window
  // position and size are returned.
  const ::headless::browser::Bounds* GetBounds() const { return bounds_.get(); }
  void SetBounds(std::unique_ptr<::headless::browser::Bounds> value) { bounds_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<GetWindowForTargetResult> Clone() const;

  template<int STATE>
  class GetWindowForTargetResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kWindowIdSet = 1 << 1,
    kBoundsSet = 1 << 2,
      kAllRequiredFieldsSet = (kWindowIdSet | kBoundsSet | 0)
    };

    GetWindowForTargetResultBuilder<STATE | kWindowIdSet>& SetWindowId(int value) {
      static_assert(!(STATE & kWindowIdSet), "property windowId should not have already been set");
      result_->SetWindowId(value);
      return CastState<kWindowIdSet>();
    }

    GetWindowForTargetResultBuilder<STATE | kBoundsSet>& SetBounds(std::unique_ptr<::headless::browser::Bounds> value) {
      static_assert(!(STATE & kBoundsSet), "property bounds should not have already been set");
      result_->SetBounds(std::move(value));
      return CastState<kBoundsSet>();
    }

    std::unique_ptr<GetWindowForTargetResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class GetWindowForTargetResult;
    GetWindowForTargetResultBuilder() : result_(new GetWindowForTargetResult()) { }

    template<int STEP> GetWindowForTargetResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<GetWindowForTargetResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<GetWindowForTargetResult> result_;
  };

  static GetWindowForTargetResultBuilder<0> Builder() {
    return GetWindowForTargetResultBuilder<0>();
  }

 private:
  GetWindowForTargetResult() { }

  int window_id_;
  std::unique_ptr<::headless::browser::Bounds> bounds_;
};


// Parameters for the SetWindowBounds command.
class HEADLESS_EXPORT SetWindowBoundsParams {
 public:
  static std::unique_ptr<SetWindowBoundsParams> Parse(const base::Value& value, ErrorReporter* errors);

  SetWindowBoundsParams(const SetWindowBoundsParams&) = delete;
  SetWindowBoundsParams& operator=(const SetWindowBoundsParams&) = delete;

  ~SetWindowBoundsParams() { }


  // Browser window id.
  int GetWindowId() const { return window_id_; }
  void SetWindowId(int value) { window_id_ = value; }

  // New window bounds. The 'minimized', 'maximized' and 'fullscreen' states cannot be combined
  // with 'left', 'top', 'width' or 'height'. Leaves unspecified fields unchanged.
  const ::headless::browser::Bounds* GetBounds() const { return bounds_.get(); }
  void SetBounds(std::unique_ptr<::headless::browser::Bounds> value) { bounds_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<SetWindowBoundsParams> Clone() const;

  template<int STATE>
  class SetWindowBoundsParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kWindowIdSet = 1 << 1,
    kBoundsSet = 1 << 2,
      kAllRequiredFieldsSet = (kWindowIdSet | kBoundsSet | 0)
    };

    SetWindowBoundsParamsBuilder<STATE | kWindowIdSet>& SetWindowId(int value) {
      static_assert(!(STATE & kWindowIdSet), "property windowId should not have already been set");
      result_->SetWindowId(value);
      return CastState<kWindowIdSet>();
    }

    SetWindowBoundsParamsBuilder<STATE | kBoundsSet>& SetBounds(std::unique_ptr<::headless::browser::Bounds> value) {
      static_assert(!(STATE & kBoundsSet), "property bounds should not have already been set");
      result_->SetBounds(std::move(value));
      return CastState<kBoundsSet>();
    }

    std::unique_ptr<SetWindowBoundsParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetWindowBoundsParams;
    SetWindowBoundsParamsBuilder() : result_(new SetWindowBoundsParams()) { }

    template<int STEP> SetWindowBoundsParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetWindowBoundsParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetWindowBoundsParams> result_;
  };

  static SetWindowBoundsParamsBuilder<0> Builder() {
    return SetWindowBoundsParamsBuilder<0>();
  }

 private:
  SetWindowBoundsParams() { }

  int window_id_;
  std::unique_ptr<::headless::browser::Bounds> bounds_;
};


// Result for the SetWindowBounds command.
class HEADLESS_EXPORT SetWindowBoundsResult {
 public:
  static std::unique_ptr<SetWindowBoundsResult> Parse(const base::Value& value, ErrorReporter* errors);

  SetWindowBoundsResult(const SetWindowBoundsResult&) = delete;
  SetWindowBoundsResult& operator=(const SetWindowBoundsResult&) = delete;

  ~SetWindowBoundsResult() { }


  base::Value Serialize() const;
  std::unique_ptr<SetWindowBoundsResult> Clone() const;

  template<int STATE>
  class SetWindowBoundsResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<SetWindowBoundsResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetWindowBoundsResult;
    SetWindowBoundsResultBuilder() : result_(new SetWindowBoundsResult()) { }

    template<int STEP> SetWindowBoundsResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetWindowBoundsResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetWindowBoundsResult> result_;
  };

  static SetWindowBoundsResultBuilder<0> Builder() {
    return SetWindowBoundsResultBuilder<0>();
  }

 private:
  SetWindowBoundsResult() { }

};


// Parameters for the SetDockTile command.
class HEADLESS_EXPORT SetDockTileParams {
 public:
  static std::unique_ptr<SetDockTileParams> Parse(const base::Value& value, ErrorReporter* errors);

  SetDockTileParams(const SetDockTileParams&) = delete;
  SetDockTileParams& operator=(const SetDockTileParams&) = delete;

  ~SetDockTileParams() { }


  bool HasBadgeLabel() const { return !!badge_label_; }
  std::string GetBadgeLabel() const { DCHECK(HasBadgeLabel()); return badge_label_.value(); }
  void SetBadgeLabel(const std::string& value) { badge_label_ = value; }

  // Png encoded image.
  bool HasImage() const { return !!image_; }
  protocol::Binary GetImage() const { DCHECK(HasImage()); return image_.value(); }
  void SetImage(const protocol::Binary& value) { image_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<SetDockTileParams> Clone() const;

  template<int STATE>
  class SetDockTileParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    SetDockTileParamsBuilder<STATE>& SetBadgeLabel(const std::string& value) {
      result_->SetBadgeLabel(value);
      return *this;
    }

    SetDockTileParamsBuilder<STATE>& SetImage(const protocol::Binary& value) {
      result_->SetImage(value);
      return *this;
    }

    std::unique_ptr<SetDockTileParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetDockTileParams;
    SetDockTileParamsBuilder() : result_(new SetDockTileParams()) { }

    template<int STEP> SetDockTileParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetDockTileParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetDockTileParams> result_;
  };

  static SetDockTileParamsBuilder<0> Builder() {
    return SetDockTileParamsBuilder<0>();
  }

 private:
  SetDockTileParams() { }

  absl::optional<std::string> badge_label_;
  absl::optional<protocol::Binary> image_;
};


// Result for the SetDockTile command.
class HEADLESS_EXPORT SetDockTileResult {
 public:
  static std::unique_ptr<SetDockTileResult> Parse(const base::Value& value, ErrorReporter* errors);

  SetDockTileResult(const SetDockTileResult&) = delete;
  SetDockTileResult& operator=(const SetDockTileResult&) = delete;

  ~SetDockTileResult() { }


  base::Value Serialize() const;
  std::unique_ptr<SetDockTileResult> Clone() const;

  template<int STATE>
  class SetDockTileResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<SetDockTileResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetDockTileResult;
    SetDockTileResultBuilder() : result_(new SetDockTileResult()) { }

    template<int STEP> SetDockTileResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetDockTileResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetDockTileResult> result_;
  };

  static SetDockTileResultBuilder<0> Builder() {
    return SetDockTileResultBuilder<0>();
  }

 private:
  SetDockTileResult() { }

};


// Parameters for the ExecuteBrowserCommand command.
class HEADLESS_EXPORT ExecuteBrowserCommandParams {
 public:
  static std::unique_ptr<ExecuteBrowserCommandParams> Parse(const base::Value& value, ErrorReporter* errors);

  ExecuteBrowserCommandParams(const ExecuteBrowserCommandParams&) = delete;
  ExecuteBrowserCommandParams& operator=(const ExecuteBrowserCommandParams&) = delete;

  ~ExecuteBrowserCommandParams() { }


  ::headless::browser::BrowserCommandId GetCommandId() const { return command_id_; }
  void SetCommandId(::headless::browser::BrowserCommandId value) { command_id_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<ExecuteBrowserCommandParams> Clone() const;

  template<int STATE>
  class ExecuteBrowserCommandParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kCommandIdSet = 1 << 1,
      kAllRequiredFieldsSet = (kCommandIdSet | 0)
    };

    ExecuteBrowserCommandParamsBuilder<STATE | kCommandIdSet>& SetCommandId(::headless::browser::BrowserCommandId value) {
      static_assert(!(STATE & kCommandIdSet), "property commandId should not have already been set");
      result_->SetCommandId(value);
      return CastState<kCommandIdSet>();
    }

    std::unique_ptr<ExecuteBrowserCommandParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class ExecuteBrowserCommandParams;
    ExecuteBrowserCommandParamsBuilder() : result_(new ExecuteBrowserCommandParams()) { }

    template<int STEP> ExecuteBrowserCommandParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<ExecuteBrowserCommandParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<ExecuteBrowserCommandParams> result_;
  };

  static ExecuteBrowserCommandParamsBuilder<0> Builder() {
    return ExecuteBrowserCommandParamsBuilder<0>();
  }

 private:
  ExecuteBrowserCommandParams() { }

  ::headless::browser::BrowserCommandId command_id_;
};


// Result for the ExecuteBrowserCommand command.
class HEADLESS_EXPORT ExecuteBrowserCommandResult {
 public:
  static std::unique_ptr<ExecuteBrowserCommandResult> Parse(const base::Value& value, ErrorReporter* errors);

  ExecuteBrowserCommandResult(const ExecuteBrowserCommandResult&) = delete;
  ExecuteBrowserCommandResult& operator=(const ExecuteBrowserCommandResult&) = delete;

  ~ExecuteBrowserCommandResult() { }


  base::Value Serialize() const;
  std::unique_ptr<ExecuteBrowserCommandResult> Clone() const;

  template<int STATE>
  class ExecuteBrowserCommandResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<ExecuteBrowserCommandResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class ExecuteBrowserCommandResult;
    ExecuteBrowserCommandResultBuilder() : result_(new ExecuteBrowserCommandResult()) { }

    template<int STEP> ExecuteBrowserCommandResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<ExecuteBrowserCommandResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<ExecuteBrowserCommandResult> result_;
  };

  static ExecuteBrowserCommandResultBuilder<0> Builder() {
    return ExecuteBrowserCommandResultBuilder<0>();
  }

 private:
  ExecuteBrowserCommandResult() { }

};


// Parameters for the AddPrivacySandboxEnrollmentOverride command.
class HEADLESS_EXPORT AddPrivacySandboxEnrollmentOverrideParams {
 public:
  static std::unique_ptr<AddPrivacySandboxEnrollmentOverrideParams> Parse(const base::Value& value, ErrorReporter* errors);

  AddPrivacySandboxEnrollmentOverrideParams(const AddPrivacySandboxEnrollmentOverrideParams&) = delete;
  AddPrivacySandboxEnrollmentOverrideParams& operator=(const AddPrivacySandboxEnrollmentOverrideParams&) = delete;

  ~AddPrivacySandboxEnrollmentOverrideParams() { }


  std::string GetUrl() const { return url_; }
  void SetUrl(const std::string& value) { url_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<AddPrivacySandboxEnrollmentOverrideParams> Clone() const;

  template<int STATE>
  class AddPrivacySandboxEnrollmentOverrideParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kUrlSet = 1 << 1,
      kAllRequiredFieldsSet = (kUrlSet | 0)
    };

    AddPrivacySandboxEnrollmentOverrideParamsBuilder<STATE | kUrlSet>& SetUrl(const std::string& value) {
      static_assert(!(STATE & kUrlSet), "property url should not have already been set");
      result_->SetUrl(value);
      return CastState<kUrlSet>();
    }

    std::unique_ptr<AddPrivacySandboxEnrollmentOverrideParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class AddPrivacySandboxEnrollmentOverrideParams;
    AddPrivacySandboxEnrollmentOverrideParamsBuilder() : result_(new AddPrivacySandboxEnrollmentOverrideParams()) { }

    template<int STEP> AddPrivacySandboxEnrollmentOverrideParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<AddPrivacySandboxEnrollmentOverrideParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<AddPrivacySandboxEnrollmentOverrideParams> result_;
  };

  static AddPrivacySandboxEnrollmentOverrideParamsBuilder<0> Builder() {
    return AddPrivacySandboxEnrollmentOverrideParamsBuilder<0>();
  }

 private:
  AddPrivacySandboxEnrollmentOverrideParams() { }

  std::string url_;
};


// Result for the AddPrivacySandboxEnrollmentOverride command.
class HEADLESS_EXPORT AddPrivacySandboxEnrollmentOverrideResult {
 public:
  static std::unique_ptr<AddPrivacySandboxEnrollmentOverrideResult> Parse(const base::Value& value, ErrorReporter* errors);

  AddPrivacySandboxEnrollmentOverrideResult(const AddPrivacySandboxEnrollmentOverrideResult&) = delete;
  AddPrivacySandboxEnrollmentOverrideResult& operator=(const AddPrivacySandboxEnrollmentOverrideResult&) = delete;

  ~AddPrivacySandboxEnrollmentOverrideResult() { }


  base::Value Serialize() const;
  std::unique_ptr<AddPrivacySandboxEnrollmentOverrideResult> Clone() const;

  template<int STATE>
  class AddPrivacySandboxEnrollmentOverrideResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<AddPrivacySandboxEnrollmentOverrideResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class AddPrivacySandboxEnrollmentOverrideResult;
    AddPrivacySandboxEnrollmentOverrideResultBuilder() : result_(new AddPrivacySandboxEnrollmentOverrideResult()) { }

    template<int STEP> AddPrivacySandboxEnrollmentOverrideResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<AddPrivacySandboxEnrollmentOverrideResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<AddPrivacySandboxEnrollmentOverrideResult> result_;
  };

  static AddPrivacySandboxEnrollmentOverrideResultBuilder<0> Builder() {
    return AddPrivacySandboxEnrollmentOverrideResultBuilder<0>();
  }

 private:
  AddPrivacySandboxEnrollmentOverrideResult() { }

};


// Parameters for the DownloadWillBegin event.
class HEADLESS_EXPORT DownloadWillBeginParams {
 public:
  static std::unique_ptr<DownloadWillBeginParams> Parse(const base::Value& value, ErrorReporter* errors);

  DownloadWillBeginParams(const DownloadWillBeginParams&) = delete;
  DownloadWillBeginParams& operator=(const DownloadWillBeginParams&) = delete;

  ~DownloadWillBeginParams() { }


  // Id of the frame that caused the download to begin.
  std::string GetFrameId() const { return frame_id_; }
  void SetFrameId(const std::string& value) { frame_id_ = value; }

  // Global unique identifier of the download.
  std::string GetGuid() const { return guid_; }
  void SetGuid(const std::string& value) { guid_ = value; }

  // URL of the resource being downloaded.
  std::string GetUrl() const { return url_; }
  void SetUrl(const std::string& value) { url_ = value; }

  // Suggested file name of the resource (the actual name of the file saved on disk may differ).
  std::string GetSuggestedFilename() const { return suggested_filename_; }
  void SetSuggestedFilename(const std::string& value) { suggested_filename_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<DownloadWillBeginParams> Clone() const;

  template<int STATE>
  class DownloadWillBeginParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kFrameIdSet = 1 << 1,
    kGuidSet = 1 << 2,
    kUrlSet = 1 << 3,
    kSuggestedFilenameSet = 1 << 4,
      kAllRequiredFieldsSet = (kFrameIdSet | kGuidSet | kUrlSet | kSuggestedFilenameSet | 0)
    };

    DownloadWillBeginParamsBuilder<STATE | kFrameIdSet>& SetFrameId(const std::string& value) {
      static_assert(!(STATE & kFrameIdSet), "property frameId should not have already been set");
      result_->SetFrameId(value);
      return CastState<kFrameIdSet>();
    }

    DownloadWillBeginParamsBuilder<STATE | kGuidSet>& SetGuid(const std::string& value) {
      static_assert(!(STATE & kGuidSet), "property guid should not have already been set");
      result_->SetGuid(value);
      return CastState<kGuidSet>();
    }

    DownloadWillBeginParamsBuilder<STATE | kUrlSet>& SetUrl(const std::string& value) {
      static_assert(!(STATE & kUrlSet), "property url should not have already been set");
      result_->SetUrl(value);
      return CastState<kUrlSet>();
    }

    DownloadWillBeginParamsBuilder<STATE | kSuggestedFilenameSet>& SetSuggestedFilename(const std::string& value) {
      static_assert(!(STATE & kSuggestedFilenameSet), "property suggestedFilename should not have already been set");
      result_->SetSuggestedFilename(value);
      return CastState<kSuggestedFilenameSet>();
    }

    std::unique_ptr<DownloadWillBeginParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class DownloadWillBeginParams;
    DownloadWillBeginParamsBuilder() : result_(new DownloadWillBeginParams()) { }

    template<int STEP> DownloadWillBeginParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<DownloadWillBeginParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<DownloadWillBeginParams> result_;
  };

  static DownloadWillBeginParamsBuilder<0> Builder() {
    return DownloadWillBeginParamsBuilder<0>();
  }

 private:
  DownloadWillBeginParams() { }

  std::string frame_id_;
  std::string guid_;
  std::string url_;
  std::string suggested_filename_;
};


// Parameters for the DownloadProgress event.
class HEADLESS_EXPORT DownloadProgressParams {
 public:
  static std::unique_ptr<DownloadProgressParams> Parse(const base::Value& value, ErrorReporter* errors);

  DownloadProgressParams(const DownloadProgressParams&) = delete;
  DownloadProgressParams& operator=(const DownloadProgressParams&) = delete;

  ~DownloadProgressParams() { }


  // Global unique identifier of the download.
  std::string GetGuid() const { return guid_; }
  void SetGuid(const std::string& value) { guid_ = value; }

  // Total expected bytes to download.
  double GetTotalBytes() const { return total_bytes_; }
  void SetTotalBytes(double value) { total_bytes_ = value; }

  // Total bytes received.
  double GetReceivedBytes() const { return received_bytes_; }
  void SetReceivedBytes(double value) { received_bytes_ = value; }

  // Download status.
  ::headless::browser::DownloadProgressState GetState() const { return state_; }
  void SetState(::headless::browser::DownloadProgressState value) { state_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<DownloadProgressParams> Clone() const;

  template<int STATE>
  class DownloadProgressParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kGuidSet = 1 << 1,
    kTotalBytesSet = 1 << 2,
    kReceivedBytesSet = 1 << 3,
    kStateSet = 1 << 4,
      kAllRequiredFieldsSet = (kGuidSet | kTotalBytesSet | kReceivedBytesSet | kStateSet | 0)
    };

    DownloadProgressParamsBuilder<STATE | kGuidSet>& SetGuid(const std::string& value) {
      static_assert(!(STATE & kGuidSet), "property guid should not have already been set");
      result_->SetGuid(value);
      return CastState<kGuidSet>();
    }

    DownloadProgressParamsBuilder<STATE | kTotalBytesSet>& SetTotalBytes(double value) {
      static_assert(!(STATE & kTotalBytesSet), "property totalBytes should not have already been set");
      result_->SetTotalBytes(value);
      return CastState<kTotalBytesSet>();
    }

    DownloadProgressParamsBuilder<STATE | kReceivedBytesSet>& SetReceivedBytes(double value) {
      static_assert(!(STATE & kReceivedBytesSet), "property receivedBytes should not have already been set");
      result_->SetReceivedBytes(value);
      return CastState<kReceivedBytesSet>();
    }

    DownloadProgressParamsBuilder<STATE | kStateSet>& SetState(::headless::browser::DownloadProgressState value) {
      static_assert(!(STATE & kStateSet), "property state should not have already been set");
      result_->SetState(value);
      return CastState<kStateSet>();
    }

    std::unique_ptr<DownloadProgressParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class DownloadProgressParams;
    DownloadProgressParamsBuilder() : result_(new DownloadProgressParams()) { }

    template<int STEP> DownloadProgressParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<DownloadProgressParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<DownloadProgressParams> result_;
  };

  static DownloadProgressParamsBuilder<0> Builder() {
    return DownloadProgressParamsBuilder<0>();
  }

 private:
  DownloadProgressParams() { }

  std::string guid_;
  double total_bytes_;
  double received_bytes_;
  ::headless::browser::DownloadProgressState state_;
};


}  // namespace browser

}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_TYPES_BROWSER_H_
