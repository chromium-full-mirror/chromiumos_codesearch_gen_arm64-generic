// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_TYPES_DEVICE_ACCESS_H_
#define HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_TYPES_DEVICE_ACCESS_H_

#include "base/values.h"
#include "third_party/abseil-cpp/absl/types/optional.h"
#include "third_party/inspector_protocol/crdtp/chromium/protocol_traits.h"

#include "headless/public/devtools/internal/types_forward_declarations_device_access.h"
#include "headless/public/headless_export.h"

namespace headless {
namespace protocol {
using Binary = crdtp::Binary;
}

class ErrorReporter;

namespace device_access {

// Device information displayed in a user prompt to select a device.
class HEADLESS_EXPORT PromptDevice {
 public:
  static std::unique_ptr<PromptDevice> Parse(const base::Value& value, ErrorReporter* errors);

  PromptDevice(const PromptDevice&) = delete;
  PromptDevice& operator=(const PromptDevice&) = delete;

  ~PromptDevice() { }


  std::string GetId() const { return id_; }
  void SetId(const std::string& value) { id_ = value; }

  // Display name as it appears in a device request user prompt.
  std::string GetName() const { return name_; }
  void SetName(const std::string& value) { name_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<PromptDevice> Clone() const;

  template<int STATE>
  class PromptDeviceBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kIdSet = 1 << 1,
    kNameSet = 1 << 2,
      kAllRequiredFieldsSet = (kIdSet | kNameSet | 0)
    };

    PromptDeviceBuilder<STATE | kIdSet>& SetId(const std::string& value) {
      static_assert(!(STATE & kIdSet), "property id should not have already been set");
      result_->SetId(value);
      return CastState<kIdSet>();
    }

    PromptDeviceBuilder<STATE | kNameSet>& SetName(const std::string& value) {
      static_assert(!(STATE & kNameSet), "property name should not have already been set");
      result_->SetName(value);
      return CastState<kNameSet>();
    }

    std::unique_ptr<PromptDevice> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class PromptDevice;
    PromptDeviceBuilder() : result_(new PromptDevice()) { }

    template<int STEP> PromptDeviceBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<PromptDeviceBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<PromptDevice> result_;
  };

  static PromptDeviceBuilder<0> Builder() {
    return PromptDeviceBuilder<0>();
  }

 private:
  PromptDevice() { }

  std::string id_;
  std::string name_;
};


// Parameters for the Enable command.
class HEADLESS_EXPORT EnableParams {
 public:
  static std::unique_ptr<EnableParams> Parse(const base::Value& value, ErrorReporter* errors);

  EnableParams(const EnableParams&) = delete;
  EnableParams& operator=(const EnableParams&) = delete;

  ~EnableParams() { }


  base::Value Serialize() const;
  std::unique_ptr<EnableParams> Clone() const;

  template<int STATE>
  class EnableParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<EnableParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class EnableParams;
    EnableParamsBuilder() : result_(new EnableParams()) { }

    template<int STEP> EnableParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<EnableParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<EnableParams> result_;
  };

  static EnableParamsBuilder<0> Builder() {
    return EnableParamsBuilder<0>();
  }

 private:
  EnableParams() { }

};


// Result for the Enable command.
class HEADLESS_EXPORT EnableResult {
 public:
  static std::unique_ptr<EnableResult> Parse(const base::Value& value, ErrorReporter* errors);

  EnableResult(const EnableResult&) = delete;
  EnableResult& operator=(const EnableResult&) = delete;

  ~EnableResult() { }


  base::Value Serialize() const;
  std::unique_ptr<EnableResult> Clone() const;

  template<int STATE>
  class EnableResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<EnableResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class EnableResult;
    EnableResultBuilder() : result_(new EnableResult()) { }

    template<int STEP> EnableResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<EnableResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<EnableResult> result_;
  };

  static EnableResultBuilder<0> Builder() {
    return EnableResultBuilder<0>();
  }

 private:
  EnableResult() { }

};


// Parameters for the Disable command.
class HEADLESS_EXPORT DisableParams {
 public:
  static std::unique_ptr<DisableParams> Parse(const base::Value& value, ErrorReporter* errors);

  DisableParams(const DisableParams&) = delete;
  DisableParams& operator=(const DisableParams&) = delete;

  ~DisableParams() { }


  base::Value Serialize() const;
  std::unique_ptr<DisableParams> Clone() const;

  template<int STATE>
  class DisableParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<DisableParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class DisableParams;
    DisableParamsBuilder() : result_(new DisableParams()) { }

    template<int STEP> DisableParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<DisableParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<DisableParams> result_;
  };

  static DisableParamsBuilder<0> Builder() {
    return DisableParamsBuilder<0>();
  }

 private:
  DisableParams() { }

};


// Result for the Disable command.
class HEADLESS_EXPORT DisableResult {
 public:
  static std::unique_ptr<DisableResult> Parse(const base::Value& value, ErrorReporter* errors);

  DisableResult(const DisableResult&) = delete;
  DisableResult& operator=(const DisableResult&) = delete;

  ~DisableResult() { }


  base::Value Serialize() const;
  std::unique_ptr<DisableResult> Clone() const;

  template<int STATE>
  class DisableResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<DisableResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class DisableResult;
    DisableResultBuilder() : result_(new DisableResult()) { }

    template<int STEP> DisableResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<DisableResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<DisableResult> result_;
  };

  static DisableResultBuilder<0> Builder() {
    return DisableResultBuilder<0>();
  }

 private:
  DisableResult() { }

};


// Parameters for the SelectPrompt command.
class HEADLESS_EXPORT SelectPromptParams {
 public:
  static std::unique_ptr<SelectPromptParams> Parse(const base::Value& value, ErrorReporter* errors);

  SelectPromptParams(const SelectPromptParams&) = delete;
  SelectPromptParams& operator=(const SelectPromptParams&) = delete;

  ~SelectPromptParams() { }


  std::string GetId() const { return id_; }
  void SetId(const std::string& value) { id_ = value; }

  std::string GetDeviceId() const { return device_id_; }
  void SetDeviceId(const std::string& value) { device_id_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<SelectPromptParams> Clone() const;

  template<int STATE>
  class SelectPromptParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kIdSet = 1 << 1,
    kDeviceIdSet = 1 << 2,
      kAllRequiredFieldsSet = (kIdSet | kDeviceIdSet | 0)
    };

    SelectPromptParamsBuilder<STATE | kIdSet>& SetId(const std::string& value) {
      static_assert(!(STATE & kIdSet), "property id should not have already been set");
      result_->SetId(value);
      return CastState<kIdSet>();
    }

    SelectPromptParamsBuilder<STATE | kDeviceIdSet>& SetDeviceId(const std::string& value) {
      static_assert(!(STATE & kDeviceIdSet), "property deviceId should not have already been set");
      result_->SetDeviceId(value);
      return CastState<kDeviceIdSet>();
    }

    std::unique_ptr<SelectPromptParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SelectPromptParams;
    SelectPromptParamsBuilder() : result_(new SelectPromptParams()) { }

    template<int STEP> SelectPromptParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SelectPromptParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SelectPromptParams> result_;
  };

  static SelectPromptParamsBuilder<0> Builder() {
    return SelectPromptParamsBuilder<0>();
  }

 private:
  SelectPromptParams() { }

  std::string id_;
  std::string device_id_;
};


// Result for the SelectPrompt command.
class HEADLESS_EXPORT SelectPromptResult {
 public:
  static std::unique_ptr<SelectPromptResult> Parse(const base::Value& value, ErrorReporter* errors);

  SelectPromptResult(const SelectPromptResult&) = delete;
  SelectPromptResult& operator=(const SelectPromptResult&) = delete;

  ~SelectPromptResult() { }


  base::Value Serialize() const;
  std::unique_ptr<SelectPromptResult> Clone() const;

  template<int STATE>
  class SelectPromptResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<SelectPromptResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SelectPromptResult;
    SelectPromptResultBuilder() : result_(new SelectPromptResult()) { }

    template<int STEP> SelectPromptResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SelectPromptResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SelectPromptResult> result_;
  };

  static SelectPromptResultBuilder<0> Builder() {
    return SelectPromptResultBuilder<0>();
  }

 private:
  SelectPromptResult() { }

};


// Parameters for the CancelPrompt command.
class HEADLESS_EXPORT CancelPromptParams {
 public:
  static std::unique_ptr<CancelPromptParams> Parse(const base::Value& value, ErrorReporter* errors);

  CancelPromptParams(const CancelPromptParams&) = delete;
  CancelPromptParams& operator=(const CancelPromptParams&) = delete;

  ~CancelPromptParams() { }


  std::string GetId() const { return id_; }
  void SetId(const std::string& value) { id_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<CancelPromptParams> Clone() const;

  template<int STATE>
  class CancelPromptParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kIdSet = 1 << 1,
      kAllRequiredFieldsSet = (kIdSet | 0)
    };

    CancelPromptParamsBuilder<STATE | kIdSet>& SetId(const std::string& value) {
      static_assert(!(STATE & kIdSet), "property id should not have already been set");
      result_->SetId(value);
      return CastState<kIdSet>();
    }

    std::unique_ptr<CancelPromptParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class CancelPromptParams;
    CancelPromptParamsBuilder() : result_(new CancelPromptParams()) { }

    template<int STEP> CancelPromptParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<CancelPromptParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<CancelPromptParams> result_;
  };

  static CancelPromptParamsBuilder<0> Builder() {
    return CancelPromptParamsBuilder<0>();
  }

 private:
  CancelPromptParams() { }

  std::string id_;
};


// Result for the CancelPrompt command.
class HEADLESS_EXPORT CancelPromptResult {
 public:
  static std::unique_ptr<CancelPromptResult> Parse(const base::Value& value, ErrorReporter* errors);

  CancelPromptResult(const CancelPromptResult&) = delete;
  CancelPromptResult& operator=(const CancelPromptResult&) = delete;

  ~CancelPromptResult() { }


  base::Value Serialize() const;
  std::unique_ptr<CancelPromptResult> Clone() const;

  template<int STATE>
  class CancelPromptResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<CancelPromptResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class CancelPromptResult;
    CancelPromptResultBuilder() : result_(new CancelPromptResult()) { }

    template<int STEP> CancelPromptResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<CancelPromptResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<CancelPromptResult> result_;
  };

  static CancelPromptResultBuilder<0> Builder() {
    return CancelPromptResultBuilder<0>();
  }

 private:
  CancelPromptResult() { }

};


// Parameters for the DeviceRequestPrompted event.
class HEADLESS_EXPORT DeviceRequestPromptedParams {
 public:
  static std::unique_ptr<DeviceRequestPromptedParams> Parse(const base::Value& value, ErrorReporter* errors);

  DeviceRequestPromptedParams(const DeviceRequestPromptedParams&) = delete;
  DeviceRequestPromptedParams& operator=(const DeviceRequestPromptedParams&) = delete;

  ~DeviceRequestPromptedParams() { }


  std::string GetId() const { return id_; }
  void SetId(const std::string& value) { id_ = value; }

  const std::vector<std::unique_ptr<::headless::device_access::PromptDevice>>* GetDevices() const { return &devices_; }
  void SetDevices(std::vector<std::unique_ptr<::headless::device_access::PromptDevice>> value) { devices_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<DeviceRequestPromptedParams> Clone() const;

  template<int STATE>
  class DeviceRequestPromptedParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kIdSet = 1 << 1,
    kDevicesSet = 1 << 2,
      kAllRequiredFieldsSet = (kIdSet | kDevicesSet | 0)
    };

    DeviceRequestPromptedParamsBuilder<STATE | kIdSet>& SetId(const std::string& value) {
      static_assert(!(STATE & kIdSet), "property id should not have already been set");
      result_->SetId(value);
      return CastState<kIdSet>();
    }

    DeviceRequestPromptedParamsBuilder<STATE | kDevicesSet>& SetDevices(std::vector<std::unique_ptr<::headless::device_access::PromptDevice>> value) {
      static_assert(!(STATE & kDevicesSet), "property devices should not have already been set");
      result_->SetDevices(std::move(value));
      return CastState<kDevicesSet>();
    }

    std::unique_ptr<DeviceRequestPromptedParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class DeviceRequestPromptedParams;
    DeviceRequestPromptedParamsBuilder() : result_(new DeviceRequestPromptedParams()) { }

    template<int STEP> DeviceRequestPromptedParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<DeviceRequestPromptedParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<DeviceRequestPromptedParams> result_;
  };

  static DeviceRequestPromptedParamsBuilder<0> Builder() {
    return DeviceRequestPromptedParamsBuilder<0>();
  }

 private:
  DeviceRequestPromptedParams() { }

  std::string id_;
  std::vector<std::unique_ptr<::headless::device_access::PromptDevice>> devices_;
};


}  // namespace device_access

}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_TYPES_DEVICE_ACCESS_H_
