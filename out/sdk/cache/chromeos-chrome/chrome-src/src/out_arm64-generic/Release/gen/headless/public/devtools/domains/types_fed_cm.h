// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_TYPES_FED_CM_H_
#define HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_TYPES_FED_CM_H_

#include "base/values.h"
#include "third_party/abseil-cpp/absl/types/optional.h"
#include "third_party/inspector_protocol/crdtp/chromium/protocol_traits.h"

#include "headless/public/devtools/internal/types_forward_declarations_fed_cm.h"
#include "headless/public/headless_export.h"

namespace headless {
namespace protocol {
using Binary = crdtp::Binary;
}

class ErrorReporter;

namespace fed_cm {

// Corresponds to IdentityRequestAccount
class HEADLESS_EXPORT Account {
 public:
  static std::unique_ptr<Account> Parse(const base::Value& value, ErrorReporter* errors);

  Account(const Account&) = delete;
  Account& operator=(const Account&) = delete;

  ~Account() { }


  std::string GetAccountId() const { return account_id_; }
  void SetAccountId(const std::string& value) { account_id_ = value; }

  std::string GetEmail() const { return email_; }
  void SetEmail(const std::string& value) { email_ = value; }

  std::string GetName() const { return name_; }
  void SetName(const std::string& value) { name_ = value; }

  std::string GetGivenName() const { return given_name_; }
  void SetGivenName(const std::string& value) { given_name_ = value; }

  std::string GetPictureUrl() const { return picture_url_; }
  void SetPictureUrl(const std::string& value) { picture_url_ = value; }

  std::string GetIdpConfigUrl() const { return idp_config_url_; }
  void SetIdpConfigUrl(const std::string& value) { idp_config_url_ = value; }

  std::string GetIdpLoginUrl() const { return idp_login_url_; }
  void SetIdpLoginUrl(const std::string& value) { idp_login_url_ = value; }

  ::headless::fed_cm::LoginState GetLoginState() const { return login_state_; }
  void SetLoginState(::headless::fed_cm::LoginState value) { login_state_ = value; }

  // These two are only set if the loginState is signUp
  bool HasTermsOfServiceUrl() const { return !!terms_of_service_url_; }
  std::string GetTermsOfServiceUrl() const { DCHECK(HasTermsOfServiceUrl()); return terms_of_service_url_.value(); }
  void SetTermsOfServiceUrl(const std::string& value) { terms_of_service_url_ = value; }

  bool HasPrivacyPolicyUrl() const { return !!privacy_policy_url_; }
  std::string GetPrivacyPolicyUrl() const { DCHECK(HasPrivacyPolicyUrl()); return privacy_policy_url_.value(); }
  void SetPrivacyPolicyUrl(const std::string& value) { privacy_policy_url_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<Account> Clone() const;

  template<int STATE>
  class AccountBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kAccountIdSet = 1 << 1,
    kEmailSet = 1 << 2,
    kNameSet = 1 << 3,
    kGivenNameSet = 1 << 4,
    kPictureUrlSet = 1 << 5,
    kIdpConfigUrlSet = 1 << 6,
    kIdpLoginUrlSet = 1 << 7,
    kLoginStateSet = 1 << 8,
      kAllRequiredFieldsSet = (kAccountIdSet | kEmailSet | kNameSet | kGivenNameSet | kPictureUrlSet | kIdpConfigUrlSet | kIdpLoginUrlSet | kLoginStateSet | 0)
    };

    AccountBuilder<STATE | kAccountIdSet>& SetAccountId(const std::string& value) {
      static_assert(!(STATE & kAccountIdSet), "property accountId should not have already been set");
      result_->SetAccountId(value);
      return CastState<kAccountIdSet>();
    }

    AccountBuilder<STATE | kEmailSet>& SetEmail(const std::string& value) {
      static_assert(!(STATE & kEmailSet), "property email should not have already been set");
      result_->SetEmail(value);
      return CastState<kEmailSet>();
    }

    AccountBuilder<STATE | kNameSet>& SetName(const std::string& value) {
      static_assert(!(STATE & kNameSet), "property name should not have already been set");
      result_->SetName(value);
      return CastState<kNameSet>();
    }

    AccountBuilder<STATE | kGivenNameSet>& SetGivenName(const std::string& value) {
      static_assert(!(STATE & kGivenNameSet), "property givenName should not have already been set");
      result_->SetGivenName(value);
      return CastState<kGivenNameSet>();
    }

    AccountBuilder<STATE | kPictureUrlSet>& SetPictureUrl(const std::string& value) {
      static_assert(!(STATE & kPictureUrlSet), "property pictureUrl should not have already been set");
      result_->SetPictureUrl(value);
      return CastState<kPictureUrlSet>();
    }

    AccountBuilder<STATE | kIdpConfigUrlSet>& SetIdpConfigUrl(const std::string& value) {
      static_assert(!(STATE & kIdpConfigUrlSet), "property idpConfigUrl should not have already been set");
      result_->SetIdpConfigUrl(value);
      return CastState<kIdpConfigUrlSet>();
    }

    AccountBuilder<STATE | kIdpLoginUrlSet>& SetIdpLoginUrl(const std::string& value) {
      static_assert(!(STATE & kIdpLoginUrlSet), "property idpLoginUrl should not have already been set");
      result_->SetIdpLoginUrl(value);
      return CastState<kIdpLoginUrlSet>();
    }

    AccountBuilder<STATE | kLoginStateSet>& SetLoginState(::headless::fed_cm::LoginState value) {
      static_assert(!(STATE & kLoginStateSet), "property loginState should not have already been set");
      result_->SetLoginState(value);
      return CastState<kLoginStateSet>();
    }

    AccountBuilder<STATE>& SetTermsOfServiceUrl(const std::string& value) {
      result_->SetTermsOfServiceUrl(value);
      return *this;
    }

    AccountBuilder<STATE>& SetPrivacyPolicyUrl(const std::string& value) {
      result_->SetPrivacyPolicyUrl(value);
      return *this;
    }

    std::unique_ptr<Account> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class Account;
    AccountBuilder() : result_(new Account()) { }

    template<int STEP> AccountBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<AccountBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<Account> result_;
  };

  static AccountBuilder<0> Builder() {
    return AccountBuilder<0>();
  }

 private:
  Account() { }

  std::string account_id_;
  std::string email_;
  std::string name_;
  std::string given_name_;
  std::string picture_url_;
  std::string idp_config_url_;
  std::string idp_login_url_;
  ::headless::fed_cm::LoginState login_state_;
  absl::optional<std::string> terms_of_service_url_;
  absl::optional<std::string> privacy_policy_url_;
};


// Parameters for the Enable command.
class HEADLESS_EXPORT EnableParams {
 public:
  static std::unique_ptr<EnableParams> Parse(const base::Value& value, ErrorReporter* errors);

  EnableParams(const EnableParams&) = delete;
  EnableParams& operator=(const EnableParams&) = delete;

  ~EnableParams() { }


  // Allows callers to disable the promise rejection delay that would
  // normally happen, if this is unimportant to what's being tested.
  // (step 4 of https://fedidcg.github.io/FedCM/#browser-api-rp-sign-in)
  bool HasDisableRejectionDelay() const { return !!disable_rejection_delay_; }
  bool GetDisableRejectionDelay() const { DCHECK(HasDisableRejectionDelay()); return disable_rejection_delay_.value(); }
  void SetDisableRejectionDelay(bool value) { disable_rejection_delay_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<EnableParams> Clone() const;

  template<int STATE>
  class EnableParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    EnableParamsBuilder<STATE>& SetDisableRejectionDelay(bool value) {
      result_->SetDisableRejectionDelay(value);
      return *this;
    }

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

  absl::optional<bool> disable_rejection_delay_;
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


// Parameters for the SelectAccount command.
class HEADLESS_EXPORT SelectAccountParams {
 public:
  static std::unique_ptr<SelectAccountParams> Parse(const base::Value& value, ErrorReporter* errors);

  SelectAccountParams(const SelectAccountParams&) = delete;
  SelectAccountParams& operator=(const SelectAccountParams&) = delete;

  ~SelectAccountParams() { }


  std::string GetDialogId() const { return dialog_id_; }
  void SetDialogId(const std::string& value) { dialog_id_ = value; }

  int GetAccountIndex() const { return account_index_; }
  void SetAccountIndex(int value) { account_index_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<SelectAccountParams> Clone() const;

  template<int STATE>
  class SelectAccountParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kDialogIdSet = 1 << 1,
    kAccountIndexSet = 1 << 2,
      kAllRequiredFieldsSet = (kDialogIdSet | kAccountIndexSet | 0)
    };

    SelectAccountParamsBuilder<STATE | kDialogIdSet>& SetDialogId(const std::string& value) {
      static_assert(!(STATE & kDialogIdSet), "property dialogId should not have already been set");
      result_->SetDialogId(value);
      return CastState<kDialogIdSet>();
    }

    SelectAccountParamsBuilder<STATE | kAccountIndexSet>& SetAccountIndex(int value) {
      static_assert(!(STATE & kAccountIndexSet), "property accountIndex should not have already been set");
      result_->SetAccountIndex(value);
      return CastState<kAccountIndexSet>();
    }

    std::unique_ptr<SelectAccountParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SelectAccountParams;
    SelectAccountParamsBuilder() : result_(new SelectAccountParams()) { }

    template<int STEP> SelectAccountParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SelectAccountParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SelectAccountParams> result_;
  };

  static SelectAccountParamsBuilder<0> Builder() {
    return SelectAccountParamsBuilder<0>();
  }

 private:
  SelectAccountParams() { }

  std::string dialog_id_;
  int account_index_;
};


// Result for the SelectAccount command.
class HEADLESS_EXPORT SelectAccountResult {
 public:
  static std::unique_ptr<SelectAccountResult> Parse(const base::Value& value, ErrorReporter* errors);

  SelectAccountResult(const SelectAccountResult&) = delete;
  SelectAccountResult& operator=(const SelectAccountResult&) = delete;

  ~SelectAccountResult() { }


  base::Value Serialize() const;
  std::unique_ptr<SelectAccountResult> Clone() const;

  template<int STATE>
  class SelectAccountResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<SelectAccountResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SelectAccountResult;
    SelectAccountResultBuilder() : result_(new SelectAccountResult()) { }

    template<int STEP> SelectAccountResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SelectAccountResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SelectAccountResult> result_;
  };

  static SelectAccountResultBuilder<0> Builder() {
    return SelectAccountResultBuilder<0>();
  }

 private:
  SelectAccountResult() { }

};


// Parameters for the ConfirmIdpLogin command.
class HEADLESS_EXPORT ConfirmIdpLoginParams {
 public:
  static std::unique_ptr<ConfirmIdpLoginParams> Parse(const base::Value& value, ErrorReporter* errors);

  ConfirmIdpLoginParams(const ConfirmIdpLoginParams&) = delete;
  ConfirmIdpLoginParams& operator=(const ConfirmIdpLoginParams&) = delete;

  ~ConfirmIdpLoginParams() { }


  std::string GetDialogId() const { return dialog_id_; }
  void SetDialogId(const std::string& value) { dialog_id_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<ConfirmIdpLoginParams> Clone() const;

  template<int STATE>
  class ConfirmIdpLoginParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kDialogIdSet = 1 << 1,
      kAllRequiredFieldsSet = (kDialogIdSet | 0)
    };

    ConfirmIdpLoginParamsBuilder<STATE | kDialogIdSet>& SetDialogId(const std::string& value) {
      static_assert(!(STATE & kDialogIdSet), "property dialogId should not have already been set");
      result_->SetDialogId(value);
      return CastState<kDialogIdSet>();
    }

    std::unique_ptr<ConfirmIdpLoginParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class ConfirmIdpLoginParams;
    ConfirmIdpLoginParamsBuilder() : result_(new ConfirmIdpLoginParams()) { }

    template<int STEP> ConfirmIdpLoginParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<ConfirmIdpLoginParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<ConfirmIdpLoginParams> result_;
  };

  static ConfirmIdpLoginParamsBuilder<0> Builder() {
    return ConfirmIdpLoginParamsBuilder<0>();
  }

 private:
  ConfirmIdpLoginParams() { }

  std::string dialog_id_;
};


// Result for the ConfirmIdpLogin command.
class HEADLESS_EXPORT ConfirmIdpLoginResult {
 public:
  static std::unique_ptr<ConfirmIdpLoginResult> Parse(const base::Value& value, ErrorReporter* errors);

  ConfirmIdpLoginResult(const ConfirmIdpLoginResult&) = delete;
  ConfirmIdpLoginResult& operator=(const ConfirmIdpLoginResult&) = delete;

  ~ConfirmIdpLoginResult() { }


  base::Value Serialize() const;
  std::unique_ptr<ConfirmIdpLoginResult> Clone() const;

  template<int STATE>
  class ConfirmIdpLoginResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<ConfirmIdpLoginResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class ConfirmIdpLoginResult;
    ConfirmIdpLoginResultBuilder() : result_(new ConfirmIdpLoginResult()) { }

    template<int STEP> ConfirmIdpLoginResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<ConfirmIdpLoginResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<ConfirmIdpLoginResult> result_;
  };

  static ConfirmIdpLoginResultBuilder<0> Builder() {
    return ConfirmIdpLoginResultBuilder<0>();
  }

 private:
  ConfirmIdpLoginResult() { }

};


// Parameters for the DismissDialog command.
class HEADLESS_EXPORT DismissDialogParams {
 public:
  static std::unique_ptr<DismissDialogParams> Parse(const base::Value& value, ErrorReporter* errors);

  DismissDialogParams(const DismissDialogParams&) = delete;
  DismissDialogParams& operator=(const DismissDialogParams&) = delete;

  ~DismissDialogParams() { }


  std::string GetDialogId() const { return dialog_id_; }
  void SetDialogId(const std::string& value) { dialog_id_ = value; }

  bool HasTriggerCooldown() const { return !!trigger_cooldown_; }
  bool GetTriggerCooldown() const { DCHECK(HasTriggerCooldown()); return trigger_cooldown_.value(); }
  void SetTriggerCooldown(bool value) { trigger_cooldown_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<DismissDialogParams> Clone() const;

  template<int STATE>
  class DismissDialogParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kDialogIdSet = 1 << 1,
      kAllRequiredFieldsSet = (kDialogIdSet | 0)
    };

    DismissDialogParamsBuilder<STATE | kDialogIdSet>& SetDialogId(const std::string& value) {
      static_assert(!(STATE & kDialogIdSet), "property dialogId should not have already been set");
      result_->SetDialogId(value);
      return CastState<kDialogIdSet>();
    }

    DismissDialogParamsBuilder<STATE>& SetTriggerCooldown(bool value) {
      result_->SetTriggerCooldown(value);
      return *this;
    }

    std::unique_ptr<DismissDialogParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class DismissDialogParams;
    DismissDialogParamsBuilder() : result_(new DismissDialogParams()) { }

    template<int STEP> DismissDialogParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<DismissDialogParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<DismissDialogParams> result_;
  };

  static DismissDialogParamsBuilder<0> Builder() {
    return DismissDialogParamsBuilder<0>();
  }

 private:
  DismissDialogParams() { }

  std::string dialog_id_;
  absl::optional<bool> trigger_cooldown_;
};


// Result for the DismissDialog command.
class HEADLESS_EXPORT DismissDialogResult {
 public:
  static std::unique_ptr<DismissDialogResult> Parse(const base::Value& value, ErrorReporter* errors);

  DismissDialogResult(const DismissDialogResult&) = delete;
  DismissDialogResult& operator=(const DismissDialogResult&) = delete;

  ~DismissDialogResult() { }


  base::Value Serialize() const;
  std::unique_ptr<DismissDialogResult> Clone() const;

  template<int STATE>
  class DismissDialogResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<DismissDialogResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class DismissDialogResult;
    DismissDialogResultBuilder() : result_(new DismissDialogResult()) { }

    template<int STEP> DismissDialogResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<DismissDialogResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<DismissDialogResult> result_;
  };

  static DismissDialogResultBuilder<0> Builder() {
    return DismissDialogResultBuilder<0>();
  }

 private:
  DismissDialogResult() { }

};


// Parameters for the ResetCooldown command.
class HEADLESS_EXPORT ResetCooldownParams {
 public:
  static std::unique_ptr<ResetCooldownParams> Parse(const base::Value& value, ErrorReporter* errors);

  ResetCooldownParams(const ResetCooldownParams&) = delete;
  ResetCooldownParams& operator=(const ResetCooldownParams&) = delete;

  ~ResetCooldownParams() { }


  base::Value Serialize() const;
  std::unique_ptr<ResetCooldownParams> Clone() const;

  template<int STATE>
  class ResetCooldownParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<ResetCooldownParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class ResetCooldownParams;
    ResetCooldownParamsBuilder() : result_(new ResetCooldownParams()) { }

    template<int STEP> ResetCooldownParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<ResetCooldownParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<ResetCooldownParams> result_;
  };

  static ResetCooldownParamsBuilder<0> Builder() {
    return ResetCooldownParamsBuilder<0>();
  }

 private:
  ResetCooldownParams() { }

};


// Result for the ResetCooldown command.
class HEADLESS_EXPORT ResetCooldownResult {
 public:
  static std::unique_ptr<ResetCooldownResult> Parse(const base::Value& value, ErrorReporter* errors);

  ResetCooldownResult(const ResetCooldownResult&) = delete;
  ResetCooldownResult& operator=(const ResetCooldownResult&) = delete;

  ~ResetCooldownResult() { }


  base::Value Serialize() const;
  std::unique_ptr<ResetCooldownResult> Clone() const;

  template<int STATE>
  class ResetCooldownResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<ResetCooldownResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class ResetCooldownResult;
    ResetCooldownResultBuilder() : result_(new ResetCooldownResult()) { }

    template<int STEP> ResetCooldownResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<ResetCooldownResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<ResetCooldownResult> result_;
  };

  static ResetCooldownResultBuilder<0> Builder() {
    return ResetCooldownResultBuilder<0>();
  }

 private:
  ResetCooldownResult() { }

};


// Parameters for the DialogShown event.
class HEADLESS_EXPORT DialogShownParams {
 public:
  static std::unique_ptr<DialogShownParams> Parse(const base::Value& value, ErrorReporter* errors);

  DialogShownParams(const DialogShownParams&) = delete;
  DialogShownParams& operator=(const DialogShownParams&) = delete;

  ~DialogShownParams() { }


  std::string GetDialogId() const { return dialog_id_; }
  void SetDialogId(const std::string& value) { dialog_id_ = value; }

  ::headless::fed_cm::DialogType GetDialogType() const { return dialog_type_; }
  void SetDialogType(::headless::fed_cm::DialogType value) { dialog_type_ = value; }

  const std::vector<std::unique_ptr<::headless::fed_cm::Account>>* GetAccounts() const { return &accounts_; }
  void SetAccounts(std::vector<std::unique_ptr<::headless::fed_cm::Account>> value) { accounts_ = std::move(value); }

  // These exist primarily so that the caller can verify the
  // RP context was used appropriately.
  std::string GetTitle() const { return title_; }
  void SetTitle(const std::string& value) { title_ = value; }

  bool HasSubtitle() const { return !!subtitle_; }
  std::string GetSubtitle() const { DCHECK(HasSubtitle()); return subtitle_.value(); }
  void SetSubtitle(const std::string& value) { subtitle_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<DialogShownParams> Clone() const;

  template<int STATE>
  class DialogShownParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kDialogIdSet = 1 << 1,
    kDialogTypeSet = 1 << 2,
    kAccountsSet = 1 << 3,
    kTitleSet = 1 << 4,
      kAllRequiredFieldsSet = (kDialogIdSet | kDialogTypeSet | kAccountsSet | kTitleSet | 0)
    };

    DialogShownParamsBuilder<STATE | kDialogIdSet>& SetDialogId(const std::string& value) {
      static_assert(!(STATE & kDialogIdSet), "property dialogId should not have already been set");
      result_->SetDialogId(value);
      return CastState<kDialogIdSet>();
    }

    DialogShownParamsBuilder<STATE | kDialogTypeSet>& SetDialogType(::headless::fed_cm::DialogType value) {
      static_assert(!(STATE & kDialogTypeSet), "property dialogType should not have already been set");
      result_->SetDialogType(value);
      return CastState<kDialogTypeSet>();
    }

    DialogShownParamsBuilder<STATE | kAccountsSet>& SetAccounts(std::vector<std::unique_ptr<::headless::fed_cm::Account>> value) {
      static_assert(!(STATE & kAccountsSet), "property accounts should not have already been set");
      result_->SetAccounts(std::move(value));
      return CastState<kAccountsSet>();
    }

    DialogShownParamsBuilder<STATE | kTitleSet>& SetTitle(const std::string& value) {
      static_assert(!(STATE & kTitleSet), "property title should not have already been set");
      result_->SetTitle(value);
      return CastState<kTitleSet>();
    }

    DialogShownParamsBuilder<STATE>& SetSubtitle(const std::string& value) {
      result_->SetSubtitle(value);
      return *this;
    }

    std::unique_ptr<DialogShownParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class DialogShownParams;
    DialogShownParamsBuilder() : result_(new DialogShownParams()) { }

    template<int STEP> DialogShownParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<DialogShownParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<DialogShownParams> result_;
  };

  static DialogShownParamsBuilder<0> Builder() {
    return DialogShownParamsBuilder<0>();
  }

 private:
  DialogShownParams() { }

  std::string dialog_id_;
  ::headless::fed_cm::DialogType dialog_type_;
  std::vector<std::unique_ptr<::headless::fed_cm::Account>> accounts_;
  std::string title_;
  absl::optional<std::string> subtitle_;
};


}  // namespace fed_cm

}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_TYPES_FED_CM_H_
