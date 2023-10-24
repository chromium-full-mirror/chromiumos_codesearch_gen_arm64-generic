// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_TYPES_AUTOFILL_H_
#define HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_TYPES_AUTOFILL_H_

#include "base/values.h"
#include "third_party/abseil-cpp/absl/types/optional.h"
#include "third_party/inspector_protocol/crdtp/chromium/protocol_traits.h"

#include "headless/public/devtools/internal/types_forward_declarations_autofill.h"
#include "headless/public/devtools/internal/types_forward_declarations_dom.h"
#include "headless/public/devtools/internal/types_forward_declarations_debugger.h"
#include "headless/public/devtools/internal/types_forward_declarations_emulation.h"
#include "headless/public/devtools/internal/types_forward_declarations_io.h"
#include "headless/public/devtools/internal/types_forward_declarations_network.h"
#include "headless/public/devtools/internal/types_forward_declarations_page.h"
#include "headless/public/devtools/internal/types_forward_declarations_runtime.h"
#include "headless/public/devtools/internal/types_forward_declarations_security.h"
#include "headless/public/headless_export.h"

namespace headless {
namespace protocol {
using Binary = crdtp::Binary;
}

class ErrorReporter;

namespace autofill {

class HEADLESS_EXPORT CreditCard {
 public:
  static std::unique_ptr<CreditCard> Parse(const base::Value& value, ErrorReporter* errors);

  CreditCard(const CreditCard&) = delete;
  CreditCard& operator=(const CreditCard&) = delete;

  ~CreditCard() { }


  // 16-digit credit card number.
  std::string GetNumber() const { return number_; }
  void SetNumber(const std::string& value) { number_ = value; }

  // Name of the credit card owner.
  std::string GetName() const { return name_; }
  void SetName(const std::string& value) { name_ = value; }

  // 2-digit expiry month.
  std::string GetExpiryMonth() const { return expiry_month_; }
  void SetExpiryMonth(const std::string& value) { expiry_month_ = value; }

  // 4-digit expiry year.
  std::string GetExpiryYear() const { return expiry_year_; }
  void SetExpiryYear(const std::string& value) { expiry_year_ = value; }

  // 3-digit card verification code.
  std::string GetCvc() const { return cvc_; }
  void SetCvc(const std::string& value) { cvc_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<CreditCard> Clone() const;

  template<int STATE>
  class CreditCardBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kNumberSet = 1 << 1,
    kNameSet = 1 << 2,
    kExpiryMonthSet = 1 << 3,
    kExpiryYearSet = 1 << 4,
    kCvcSet = 1 << 5,
      kAllRequiredFieldsSet = (kNumberSet | kNameSet | kExpiryMonthSet | kExpiryYearSet | kCvcSet | 0)
    };

    CreditCardBuilder<STATE | kNumberSet>& SetNumber(const std::string& value) {
      static_assert(!(STATE & kNumberSet), "property number should not have already been set");
      result_->SetNumber(value);
      return CastState<kNumberSet>();
    }

    CreditCardBuilder<STATE | kNameSet>& SetName(const std::string& value) {
      static_assert(!(STATE & kNameSet), "property name should not have already been set");
      result_->SetName(value);
      return CastState<kNameSet>();
    }

    CreditCardBuilder<STATE | kExpiryMonthSet>& SetExpiryMonth(const std::string& value) {
      static_assert(!(STATE & kExpiryMonthSet), "property expiryMonth should not have already been set");
      result_->SetExpiryMonth(value);
      return CastState<kExpiryMonthSet>();
    }

    CreditCardBuilder<STATE | kExpiryYearSet>& SetExpiryYear(const std::string& value) {
      static_assert(!(STATE & kExpiryYearSet), "property expiryYear should not have already been set");
      result_->SetExpiryYear(value);
      return CastState<kExpiryYearSet>();
    }

    CreditCardBuilder<STATE | kCvcSet>& SetCvc(const std::string& value) {
      static_assert(!(STATE & kCvcSet), "property cvc should not have already been set");
      result_->SetCvc(value);
      return CastState<kCvcSet>();
    }

    std::unique_ptr<CreditCard> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class CreditCard;
    CreditCardBuilder() : result_(new CreditCard()) { }

    template<int STEP> CreditCardBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<CreditCardBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<CreditCard> result_;
  };

  static CreditCardBuilder<0> Builder() {
    return CreditCardBuilder<0>();
  }

 private:
  CreditCard() { }

  std::string number_;
  std::string name_;
  std::string expiry_month_;
  std::string expiry_year_;
  std::string cvc_;
};


class HEADLESS_EXPORT AddressField {
 public:
  static std::unique_ptr<AddressField> Parse(const base::Value& value, ErrorReporter* errors);

  AddressField(const AddressField&) = delete;
  AddressField& operator=(const AddressField&) = delete;

  ~AddressField() { }


  // address field name, for example GIVEN_NAME.
  std::string GetName() const { return name_; }
  void SetName(const std::string& value) { name_ = value; }

  // address field value, for example Jon Doe.
  std::string GetValue() const { return value_; }
  void SetValue(const std::string& value) { value_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<AddressField> Clone() const;

  template<int STATE>
  class AddressFieldBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kNameSet = 1 << 1,
    kValueSet = 1 << 2,
      kAllRequiredFieldsSet = (kNameSet | kValueSet | 0)
    };

    AddressFieldBuilder<STATE | kNameSet>& SetName(const std::string& value) {
      static_assert(!(STATE & kNameSet), "property name should not have already been set");
      result_->SetName(value);
      return CastState<kNameSet>();
    }

    AddressFieldBuilder<STATE | kValueSet>& SetValue(const std::string& value) {
      static_assert(!(STATE & kValueSet), "property value should not have already been set");
      result_->SetValue(value);
      return CastState<kValueSet>();
    }

    std::unique_ptr<AddressField> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class AddressField;
    AddressFieldBuilder() : result_(new AddressField()) { }

    template<int STEP> AddressFieldBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<AddressFieldBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<AddressField> result_;
  };

  static AddressFieldBuilder<0> Builder() {
    return AddressFieldBuilder<0>();
  }

 private:
  AddressField() { }

  std::string name_;
  std::string value_;
};


// A list of address fields.
class HEADLESS_EXPORT AddressFields {
 public:
  static std::unique_ptr<AddressFields> Parse(const base::Value& value, ErrorReporter* errors);

  AddressFields(const AddressFields&) = delete;
  AddressFields& operator=(const AddressFields&) = delete;

  ~AddressFields() { }


  const std::vector<std::unique_ptr<::headless::autofill::AddressField>>* GetFields() const { return &fields_; }
  void SetFields(std::vector<std::unique_ptr<::headless::autofill::AddressField>> value) { fields_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<AddressFields> Clone() const;

  template<int STATE>
  class AddressFieldsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kFieldsSet = 1 << 1,
      kAllRequiredFieldsSet = (kFieldsSet | 0)
    };

    AddressFieldsBuilder<STATE | kFieldsSet>& SetFields(std::vector<std::unique_ptr<::headless::autofill::AddressField>> value) {
      static_assert(!(STATE & kFieldsSet), "property fields should not have already been set");
      result_->SetFields(std::move(value));
      return CastState<kFieldsSet>();
    }

    std::unique_ptr<AddressFields> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class AddressFields;
    AddressFieldsBuilder() : result_(new AddressFields()) { }

    template<int STEP> AddressFieldsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<AddressFieldsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<AddressFields> result_;
  };

  static AddressFieldsBuilder<0> Builder() {
    return AddressFieldsBuilder<0>();
  }

 private:
  AddressFields() { }

  std::vector<std::unique_ptr<::headless::autofill::AddressField>> fields_;
};


class HEADLESS_EXPORT Address {
 public:
  static std::unique_ptr<Address> Parse(const base::Value& value, ErrorReporter* errors);

  Address(const Address&) = delete;
  Address& operator=(const Address&) = delete;

  ~Address() { }


  // fields and values defining an address.
  const std::vector<std::unique_ptr<::headless::autofill::AddressField>>* GetFields() const { return &fields_; }
  void SetFields(std::vector<std::unique_ptr<::headless::autofill::AddressField>> value) { fields_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<Address> Clone() const;

  template<int STATE>
  class AddressBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kFieldsSet = 1 << 1,
      kAllRequiredFieldsSet = (kFieldsSet | 0)
    };

    AddressBuilder<STATE | kFieldsSet>& SetFields(std::vector<std::unique_ptr<::headless::autofill::AddressField>> value) {
      static_assert(!(STATE & kFieldsSet), "property fields should not have already been set");
      result_->SetFields(std::move(value));
      return CastState<kFieldsSet>();
    }

    std::unique_ptr<Address> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class Address;
    AddressBuilder() : result_(new Address()) { }

    template<int STEP> AddressBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<AddressBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<Address> result_;
  };

  static AddressBuilder<0> Builder() {
    return AddressBuilder<0>();
  }

 private:
  Address() { }

  std::vector<std::unique_ptr<::headless::autofill::AddressField>> fields_;
};


// Defines how an address can be displayed like in chrome://settings/addresses.
// Address UI is a two dimensional array, each inner array is an "address information line", and when rendered in a UI surface should be displayed as such.
// The following address UI for instance:
// [[{name: "GIVE_NAME", value: "Jon"}, {name: "FAMILY_NAME", value: "Doe"}], [{name: "CITY", value: "Munich"}, {name: "ZIP", value: "81456"}]]
// should allow the receiver to render:
// Jon Doe
// Munich 81456
class HEADLESS_EXPORT AddressUI {
 public:
  static std::unique_ptr<AddressUI> Parse(const base::Value& value, ErrorReporter* errors);

  AddressUI(const AddressUI&) = delete;
  AddressUI& operator=(const AddressUI&) = delete;

  ~AddressUI() { }


  // A two dimension array containing the repesentation of values from an address profile.
  const std::vector<std::unique_ptr<::headless::autofill::AddressFields>>* GetAddressFields() const { return &address_fields_; }
  void SetAddressFields(std::vector<std::unique_ptr<::headless::autofill::AddressFields>> value) { address_fields_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<AddressUI> Clone() const;

  template<int STATE>
  class AddressUIBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kAddressFieldsSet = 1 << 1,
      kAllRequiredFieldsSet = (kAddressFieldsSet | 0)
    };

    AddressUIBuilder<STATE | kAddressFieldsSet>& SetAddressFields(std::vector<std::unique_ptr<::headless::autofill::AddressFields>> value) {
      static_assert(!(STATE & kAddressFieldsSet), "property addressFields should not have already been set");
      result_->SetAddressFields(std::move(value));
      return CastState<kAddressFieldsSet>();
    }

    std::unique_ptr<AddressUI> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class AddressUI;
    AddressUIBuilder() : result_(new AddressUI()) { }

    template<int STEP> AddressUIBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<AddressUIBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<AddressUI> result_;
  };

  static AddressUIBuilder<0> Builder() {
    return AddressUIBuilder<0>();
  }

 private:
  AddressUI() { }

  std::vector<std::unique_ptr<::headless::autofill::AddressFields>> address_fields_;
};


class HEADLESS_EXPORT FilledField {
 public:
  static std::unique_ptr<FilledField> Parse(const base::Value& value, ErrorReporter* errors);

  FilledField(const FilledField&) = delete;
  FilledField& operator=(const FilledField&) = delete;

  ~FilledField() { }


  // The type of the field, e.g text, password etc.
  std::string GetHtmlType() const { return html_type_; }
  void SetHtmlType(const std::string& value) { html_type_ = value; }

  // the html id
  std::string GetId() const { return id_; }
  void SetId(const std::string& value) { id_ = value; }

  // the html name
  std::string GetName() const { return name_; }
  void SetName(const std::string& value) { name_ = value; }

  // the field value
  std::string GetValue() const { return value_; }
  void SetValue(const std::string& value) { value_ = value; }

  // The actual field type, e.g FAMILY_NAME
  std::string GetAutofillType() const { return autofill_type_; }
  void SetAutofillType(const std::string& value) { autofill_type_ = value; }

  // The filling strategy
  ::headless::autofill::FillingStrategy GetFillingStrategy() const { return filling_strategy_; }
  void SetFillingStrategy(::headless::autofill::FillingStrategy value) { filling_strategy_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<FilledField> Clone() const;

  template<int STATE>
  class FilledFieldBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kHtmlTypeSet = 1 << 1,
    kIdSet = 1 << 2,
    kNameSet = 1 << 3,
    kValueSet = 1 << 4,
    kAutofillTypeSet = 1 << 5,
    kFillingStrategySet = 1 << 6,
      kAllRequiredFieldsSet = (kHtmlTypeSet | kIdSet | kNameSet | kValueSet | kAutofillTypeSet | kFillingStrategySet | 0)
    };

    FilledFieldBuilder<STATE | kHtmlTypeSet>& SetHtmlType(const std::string& value) {
      static_assert(!(STATE & kHtmlTypeSet), "property htmlType should not have already been set");
      result_->SetHtmlType(value);
      return CastState<kHtmlTypeSet>();
    }

    FilledFieldBuilder<STATE | kIdSet>& SetId(const std::string& value) {
      static_assert(!(STATE & kIdSet), "property id should not have already been set");
      result_->SetId(value);
      return CastState<kIdSet>();
    }

    FilledFieldBuilder<STATE | kNameSet>& SetName(const std::string& value) {
      static_assert(!(STATE & kNameSet), "property name should not have already been set");
      result_->SetName(value);
      return CastState<kNameSet>();
    }

    FilledFieldBuilder<STATE | kValueSet>& SetValue(const std::string& value) {
      static_assert(!(STATE & kValueSet), "property value should not have already been set");
      result_->SetValue(value);
      return CastState<kValueSet>();
    }

    FilledFieldBuilder<STATE | kAutofillTypeSet>& SetAutofillType(const std::string& value) {
      static_assert(!(STATE & kAutofillTypeSet), "property autofillType should not have already been set");
      result_->SetAutofillType(value);
      return CastState<kAutofillTypeSet>();
    }

    FilledFieldBuilder<STATE | kFillingStrategySet>& SetFillingStrategy(::headless::autofill::FillingStrategy value) {
      static_assert(!(STATE & kFillingStrategySet), "property fillingStrategy should not have already been set");
      result_->SetFillingStrategy(value);
      return CastState<kFillingStrategySet>();
    }

    std::unique_ptr<FilledField> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class FilledField;
    FilledFieldBuilder() : result_(new FilledField()) { }

    template<int STEP> FilledFieldBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<FilledFieldBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<FilledField> result_;
  };

  static FilledFieldBuilder<0> Builder() {
    return FilledFieldBuilder<0>();
  }

 private:
  FilledField() { }

  std::string html_type_;
  std::string id_;
  std::string name_;
  std::string value_;
  std::string autofill_type_;
  ::headless::autofill::FillingStrategy filling_strategy_;
};


// Parameters for the Trigger command.
class HEADLESS_EXPORT TriggerParams {
 public:
  static std::unique_ptr<TriggerParams> Parse(const base::Value& value, ErrorReporter* errors);

  TriggerParams(const TriggerParams&) = delete;
  TriggerParams& operator=(const TriggerParams&) = delete;

  ~TriggerParams() { }


  // Identifies a field that serves as an anchor for autofill.
  int GetFieldId() const { return field_id_; }
  void SetFieldId(int value) { field_id_ = value; }

  // Identifies the frame that field belongs to.
  bool HasFrameId() const { return !!frame_id_; }
  std::string GetFrameId() const { DCHECK(HasFrameId()); return frame_id_.value(); }
  void SetFrameId(const std::string& value) { frame_id_ = value; }

  // Credit card information to fill out the form. Credit card data is not saved.
  const ::headless::autofill::CreditCard* GetCard() const { return card_.get(); }
  void SetCard(std::unique_ptr<::headless::autofill::CreditCard> value) { card_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<TriggerParams> Clone() const;

  template<int STATE>
  class TriggerParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kFieldIdSet = 1 << 1,
    kCardSet = 1 << 2,
      kAllRequiredFieldsSet = (kFieldIdSet | kCardSet | 0)
    };

    TriggerParamsBuilder<STATE | kFieldIdSet>& SetFieldId(int value) {
      static_assert(!(STATE & kFieldIdSet), "property fieldId should not have already been set");
      result_->SetFieldId(value);
      return CastState<kFieldIdSet>();
    }

    TriggerParamsBuilder<STATE>& SetFrameId(const std::string& value) {
      result_->SetFrameId(value);
      return *this;
    }

    TriggerParamsBuilder<STATE | kCardSet>& SetCard(std::unique_ptr<::headless::autofill::CreditCard> value) {
      static_assert(!(STATE & kCardSet), "property card should not have already been set");
      result_->SetCard(std::move(value));
      return CastState<kCardSet>();
    }

    std::unique_ptr<TriggerParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class TriggerParams;
    TriggerParamsBuilder() : result_(new TriggerParams()) { }

    template<int STEP> TriggerParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<TriggerParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<TriggerParams> result_;
  };

  static TriggerParamsBuilder<0> Builder() {
    return TriggerParamsBuilder<0>();
  }

 private:
  TriggerParams() { }

  int field_id_;
  absl::optional<std::string> frame_id_;
  std::unique_ptr<::headless::autofill::CreditCard> card_;
};


// Result for the Trigger command.
class HEADLESS_EXPORT TriggerResult {
 public:
  static std::unique_ptr<TriggerResult> Parse(const base::Value& value, ErrorReporter* errors);

  TriggerResult(const TriggerResult&) = delete;
  TriggerResult& operator=(const TriggerResult&) = delete;

  ~TriggerResult() { }


  base::Value Serialize() const;
  std::unique_ptr<TriggerResult> Clone() const;

  template<int STATE>
  class TriggerResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<TriggerResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class TriggerResult;
    TriggerResultBuilder() : result_(new TriggerResult()) { }

    template<int STEP> TriggerResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<TriggerResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<TriggerResult> result_;
  };

  static TriggerResultBuilder<0> Builder() {
    return TriggerResultBuilder<0>();
  }

 private:
  TriggerResult() { }

};


// Parameters for the SetAddresses command.
class HEADLESS_EXPORT SetAddressesParams {
 public:
  static std::unique_ptr<SetAddressesParams> Parse(const base::Value& value, ErrorReporter* errors);

  SetAddressesParams(const SetAddressesParams&) = delete;
  SetAddressesParams& operator=(const SetAddressesParams&) = delete;

  ~SetAddressesParams() { }


  const std::vector<std::unique_ptr<::headless::autofill::Address>>* GetAddresses() const { return &addresses_; }
  void SetAddresses(std::vector<std::unique_ptr<::headless::autofill::Address>> value) { addresses_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<SetAddressesParams> Clone() const;

  template<int STATE>
  class SetAddressesParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kAddressesSet = 1 << 1,
      kAllRequiredFieldsSet = (kAddressesSet | 0)
    };

    SetAddressesParamsBuilder<STATE | kAddressesSet>& SetAddresses(std::vector<std::unique_ptr<::headless::autofill::Address>> value) {
      static_assert(!(STATE & kAddressesSet), "property addresses should not have already been set");
      result_->SetAddresses(std::move(value));
      return CastState<kAddressesSet>();
    }

    std::unique_ptr<SetAddressesParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetAddressesParams;
    SetAddressesParamsBuilder() : result_(new SetAddressesParams()) { }

    template<int STEP> SetAddressesParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetAddressesParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetAddressesParams> result_;
  };

  static SetAddressesParamsBuilder<0> Builder() {
    return SetAddressesParamsBuilder<0>();
  }

 private:
  SetAddressesParams() { }

  std::vector<std::unique_ptr<::headless::autofill::Address>> addresses_;
};


// Result for the SetAddresses command.
class HEADLESS_EXPORT SetAddressesResult {
 public:
  static std::unique_ptr<SetAddressesResult> Parse(const base::Value& value, ErrorReporter* errors);

  SetAddressesResult(const SetAddressesResult&) = delete;
  SetAddressesResult& operator=(const SetAddressesResult&) = delete;

  ~SetAddressesResult() { }


  base::Value Serialize() const;
  std::unique_ptr<SetAddressesResult> Clone() const;

  template<int STATE>
  class SetAddressesResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<SetAddressesResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetAddressesResult;
    SetAddressesResultBuilder() : result_(new SetAddressesResult()) { }

    template<int STEP> SetAddressesResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetAddressesResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetAddressesResult> result_;
  };

  static SetAddressesResultBuilder<0> Builder() {
    return SetAddressesResultBuilder<0>();
  }

 private:
  SetAddressesResult() { }

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


// Parameters for the AddressFormFilled event.
class HEADLESS_EXPORT AddressFormFilledParams {
 public:
  static std::unique_ptr<AddressFormFilledParams> Parse(const base::Value& value, ErrorReporter* errors);

  AddressFormFilledParams(const AddressFormFilledParams&) = delete;
  AddressFormFilledParams& operator=(const AddressFormFilledParams&) = delete;

  ~AddressFormFilledParams() { }


  // Information about the fields that were filled
  const std::vector<std::unique_ptr<::headless::autofill::FilledField>>* GetFilledFields() const { return &filled_fields_; }
  void SetFilledFields(std::vector<std::unique_ptr<::headless::autofill::FilledField>> value) { filled_fields_ = std::move(value); }

  // An UI representation of the address used to fill the form.
  // Consists of a 2D array where each child represents an address/profile line.
  const ::headless::autofill::AddressUI* GetAddressUi() const { return address_ui_.get(); }
  void SetAddressUi(std::unique_ptr<::headless::autofill::AddressUI> value) { address_ui_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<AddressFormFilledParams> Clone() const;

  template<int STATE>
  class AddressFormFilledParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kFilledFieldsSet = 1 << 1,
    kAddressUiSet = 1 << 2,
      kAllRequiredFieldsSet = (kFilledFieldsSet | kAddressUiSet | 0)
    };

    AddressFormFilledParamsBuilder<STATE | kFilledFieldsSet>& SetFilledFields(std::vector<std::unique_ptr<::headless::autofill::FilledField>> value) {
      static_assert(!(STATE & kFilledFieldsSet), "property filledFields should not have already been set");
      result_->SetFilledFields(std::move(value));
      return CastState<kFilledFieldsSet>();
    }

    AddressFormFilledParamsBuilder<STATE | kAddressUiSet>& SetAddressUi(std::unique_ptr<::headless::autofill::AddressUI> value) {
      static_assert(!(STATE & kAddressUiSet), "property addressUi should not have already been set");
      result_->SetAddressUi(std::move(value));
      return CastState<kAddressUiSet>();
    }

    std::unique_ptr<AddressFormFilledParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class AddressFormFilledParams;
    AddressFormFilledParamsBuilder() : result_(new AddressFormFilledParams()) { }

    template<int STEP> AddressFormFilledParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<AddressFormFilledParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<AddressFormFilledParams> result_;
  };

  static AddressFormFilledParamsBuilder<0> Builder() {
    return AddressFormFilledParamsBuilder<0>();
  }

 private:
  AddressFormFilledParams() { }

  std::vector<std::unique_ptr<::headless::autofill::FilledField>> filled_fields_;
  std::unique_ptr<::headless::autofill::AddressUI> address_ui_;
};


}  // namespace autofill

}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_TYPES_AUTOFILL_H_
