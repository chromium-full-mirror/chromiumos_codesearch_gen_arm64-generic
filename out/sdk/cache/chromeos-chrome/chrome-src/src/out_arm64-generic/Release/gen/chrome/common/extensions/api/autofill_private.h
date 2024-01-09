// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/autofill_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_AUTOFILL_PRIVATE_H__
#define CHROME_COMMON_EXTENSIONS_API_AUTOFILL_PRIVATE_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace extensions {
namespace api {
namespace autofill_private {

//
// Types
//

struct AccountInfo {
  AccountInfo();
  ~AccountInfo();
  AccountInfo(const AccountInfo&) = delete;
  AccountInfo& operator=(const AccountInfo&) = delete;
  AccountInfo(AccountInfo&& rhs) noexcept;
  AccountInfo& operator=(AccountInfo&& rhs) noexcept;

  // Populates a AccountInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AccountInfo& out);

  // Populates a AccountInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, AccountInfo& out);

  // Creates a deep copy of AccountInfo.
  AccountInfo Clone() const;

  // Creates a AccountInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<AccountInfo> FromValue(const base::Value::Dict& value);

  // Creates a AccountInfo object from a base::Value, or nullopt on failure.
  static std::optional<AccountInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAccountInfo object.
  base::Value::Dict ToValue() const;

  std::string email;

  bool is_sync_enabled_for_autofill_profiles;

  bool is_eligible_for_address_account_storage;

};

// A copy of FieldType from chrome/common/extensions/api/autofill_private.idl
enum class FieldType {
  kNone = 0,
  kNoServerData,
  kUnknownType,
  kEmptyType,
  kNameFirst,
  kNameMiddle,
  kNameLast,
  kNameMiddleInitial,
  kNameFull,
  kNameSuffix,
  kEmailAddress,
  kPhoneHomeNumber,
  kPhoneHomeCityCode,
  kPhoneHomeCountryCode,
  kPhoneHomeCityAndNumber,
  kPhoneHomeWholeNumber,
  kAddressHomeLine1,
  kAddressHomeLine2,
  kAddressHomeAptNum,
  kAddressHomeCity,
  kAddressHomeState,
  kAddressHomeZip,
  kAddressHomeCountry,
  kCreditCardNameFull,
  kCreditCardNumber,
  kCreditCardExpMonth,
  kCreditCardExp2DigitYear,
  kCreditCardExp4DigitYear,
  kCreditCardExpDate2DigitYear,
  kCreditCardExpDate4DigitYear,
  kCreditCardType,
  kCreditCardVerificationCode,
  kCompanyName,
  kFieldWithDefaultValue,
  kMerchantEmailSignup,
  kMerchantPromoCode,
  kPassword,
  kAccountCreationPassword,
  kAddressHomeStreetAddress,
  kAddressHomeSortingCode,
  kAddressHomeDependentLocality,
  kAddressHomeLine3,
  kNotAccountCreationPassword,
  kUsername,
  kUsernameAndEmailAddress,
  kNewPassword,
  kProbablyNewPassword,
  kNotNewPassword,
  kCreditCardNameFirst,
  kCreditCardNameLast,
  kPhoneHomeExtension,
  kConfirmationPassword,
  kAmbiguousType,
  kSearchTerm,
  kPrice,
  kNotPassword,
  kSingleUsername,
  kNotUsername,
  kUpiVpa,
  kAddressHomeStreetName,
  kAddressHomeHouseNumber,
  kAddressHomeSubpremise,
  kAddressHomeOtherSubunit,
  kNameLastFirst,
  kNameLastConjunction,
  kNameLastSecond,
  kNameHonorificPrefix,
  kAddressHomeAddress,
  kAddressHomeAddressWithName,
  kAddressHomeFloor,
  kNameFullWithHonorificPrefix,
  kBirthdateDay,
  kBirthdateMonth,
  kBirthdate4DigitYear,
  kPhoneHomeCityCodeWithTrunkPrefix,
  kPhoneHomeCityAndNumberWithoutTrunkPrefix,
  kPhoneHomeNumberPrefix,
  kPhoneHomeNumberSuffix,
  kIbanValue,
  kCreditCardStandaloneVerificationCode,
  kNumericQuantity,
  kOneTimeCode,
  kDeliveryInstructions,
  kAddressHomeOverflow,
  kAddressHomeLandmark,
  kAddressHomeOverflowAndLandmark,
  kAddressHomeAdminLevel2,
  kAddressHomeStreetLocation,
  kAddressHomeBetweenStreets,
  kAddressHomeBetweenStreetsOrLandmark,
  kAddressHomeBetweenStreets1,
  kAddressHomeBetweenStreets2,
  kSingleUsernameForgotPassword,
  kAddressHomeApt,
  kAddressHomeAptType,
  kSingleUsernameWithIntermediateValues,
  kMaxValidFieldType,
  kMaxValue = kMaxValidFieldType,
};


const char* ToString(FieldType as_enum);
FieldType ParseFieldType(base::StringPiece as_string);
std::u16string GetFieldTypeParseError(base::StringPiece as_string);

// The address source origin. Describes where the address is stored.
enum class AddressSource {
  kNone = 0,
  kLocalOrSyncable,
  kAccount,
  kMaxValue = kAccount,
};


const char* ToString(AddressSource as_enum);
AddressSource ParseAddressSource(base::StringPiece as_string);
std::u16string GetAddressSourceParseError(base::StringPiece as_string);

struct AutofillMetadata {
  AutofillMetadata();
  ~AutofillMetadata();
  AutofillMetadata(const AutofillMetadata&) = delete;
  AutofillMetadata& operator=(const AutofillMetadata&) = delete;
  AutofillMetadata(AutofillMetadata&& rhs) noexcept;
  AutofillMetadata& operator=(AutofillMetadata&& rhs) noexcept;

  // Populates a AutofillMetadata object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AutofillMetadata& out);

  // Populates a AutofillMetadata object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, AutofillMetadata& out);

  // Creates a deep copy of AutofillMetadata.
  AutofillMetadata Clone() const;

  // Creates a AutofillMetadata object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<AutofillMetadata> FromValue(const base::Value::Dict& value);

  // Creates a AutofillMetadata object from a base::Value, or nullopt on
  // failure.
  static std::optional<AutofillMetadata> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAutofillMetadata object.
  base::Value::Dict ToValue() const;

  // Short summary of the address/credit card which is displayed in the UI; an
  // undefined value means that this entry has just been created on the client and
  // has not yet been given a summary.
  std::string summary_label;

  // Short, secondary summary of the address/credit card which is displayed in the
  // UI; an undefined value means that this entry has just been created on the
  // client and has not yet been given a summary.
  std::optional<std::string> summary_sublabel;

  // For addresses. Describes where the address is stored.
  AddressSource source;

  // For credit cards, whether the entry is locally owned by Chrome (as opposed to
  // being synced down from the server). Non-local entries may not be editable.
  std::optional<bool> is_local;

  // For credit cards, whether this is a full copy of the card
  std::optional<bool> is_cached;

  // For credit cards, whether this is migratable (both the card number and
  // expiration date valid and does not have the duplicated server card).
  std::optional<bool> is_migratable;

  // For credit cards. Indicates whether a card is eligible for virtual cards
  // enrollment.
  std::optional<bool> is_virtual_card_enrollment_eligible;

  // For credit cards. Indicates whether a card has been enrolled in virtual cards
  // if it is eligible.
  std::optional<bool> is_virtual_card_enrolled;

};

struct AddressField {
  AddressField();
  ~AddressField();
  AddressField(const AddressField&) = delete;
  AddressField& operator=(const AddressField&) = delete;
  AddressField(AddressField&& rhs) noexcept;
  AddressField& operator=(AddressField&& rhs) noexcept;

  // Populates a AddressField object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AddressField& out);

  // Populates a AddressField object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, AddressField& out);

  // Creates a deep copy of AddressField.
  AddressField Clone() const;

  // Creates a AddressField object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<AddressField> FromValue(const base::Value::Dict& value);

  // Creates a AddressField object from a base::Value, or nullopt on failure.
  static std::optional<AddressField> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAddressField object.
  base::Value::Dict ToValue() const;

  FieldType type;

  std::string value;

};

struct AddressEntry {
  AddressEntry();
  ~AddressEntry();
  AddressEntry(const AddressEntry&) = delete;
  AddressEntry& operator=(const AddressEntry&) = delete;
  AddressEntry(AddressEntry&& rhs) noexcept;
  AddressEntry& operator=(AddressEntry&& rhs) noexcept;

  // Populates a AddressEntry object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AddressEntry& out);

  // Populates a AddressEntry object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, AddressEntry& out);

  // Creates a deep copy of AddressEntry.
  AddressEntry Clone() const;

  // Creates a AddressEntry object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<AddressEntry> FromValue(const base::Value::Dict& value);

  // Creates a AddressEntry object from a base::Value, or nullopt on failure.
  static std::optional<AddressEntry> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAddressEntry object.
  base::Value::Dict ToValue() const;

  // Globally unique identifier for this entry.
  std::optional<std::string> guid;

  // Fields have to be stored in the array with every field style stored only
  // once.
  std::vector<AddressField> fields;

  std::optional<std::string> language_code;

  std::optional<AutofillMetadata> metadata;

};

struct CountryEntry {
  CountryEntry();
  ~CountryEntry();
  CountryEntry(const CountryEntry&) = delete;
  CountryEntry& operator=(const CountryEntry&) = delete;
  CountryEntry(CountryEntry&& rhs) noexcept;
  CountryEntry& operator=(CountryEntry&& rhs) noexcept;

  // Populates a CountryEntry object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CountryEntry& out);

  // Populates a CountryEntry object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, CountryEntry& out);

  // Creates a deep copy of CountryEntry.
  CountryEntry Clone() const;

  // Creates a CountryEntry object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<CountryEntry> FromValue(const base::Value::Dict& value);

  // Creates a CountryEntry object from a base::Value, or nullopt on failure.
  static std::optional<CountryEntry> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCountryEntry object.
  base::Value::Dict ToValue() const;

  // The internationalized name of the country.
  std::optional<std::string> name;

  // A two-character string representing the country.
  std::optional<std::string> country_code;

};

struct AddressComponent {
  AddressComponent();
  ~AddressComponent();
  AddressComponent(const AddressComponent&) = delete;
  AddressComponent& operator=(const AddressComponent&) = delete;
  AddressComponent(AddressComponent&& rhs) noexcept;
  AddressComponent& operator=(AddressComponent&& rhs) noexcept;

  // Populates a AddressComponent object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AddressComponent& out);

  // Populates a AddressComponent object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, AddressComponent& out);

  // Creates a deep copy of AddressComponent.
  AddressComponent Clone() const;

  // Creates a AddressComponent object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<AddressComponent> FromValue(const base::Value::Dict& value);

  // Creates a AddressComponent object from a base::Value, or nullopt on
  // failure.
  static std::optional<AddressComponent> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAddressComponent object.
  base::Value::Dict ToValue() const;

  // The field type.
  FieldType field;

  // The name of the field.
  std::string field_name;

  // A hint for the UI regarding whether the input is likely to be long.
  bool is_long_field;

  // Whether this component is required or not.
  bool is_required;

  // A placeholder for the text field to be used when the user has not yet input a
  // value for the field.
  std::optional<std::string> placeholder;

};

struct AddressComponentRow {
  AddressComponentRow();
  ~AddressComponentRow();
  AddressComponentRow(const AddressComponentRow&) = delete;
  AddressComponentRow& operator=(const AddressComponentRow&) = delete;
  AddressComponentRow(AddressComponentRow&& rhs) noexcept;
  AddressComponentRow& operator=(AddressComponentRow&& rhs) noexcept;

  // Populates a AddressComponentRow object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AddressComponentRow& out);

  // Populates a AddressComponentRow object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, AddressComponentRow& out);

  // Creates a deep copy of AddressComponentRow.
  AddressComponentRow Clone() const;

  // Creates a AddressComponentRow object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<AddressComponentRow> FromValue(const base::Value::Dict& value);

  // Creates a AddressComponentRow object from a base::Value, or nullopt on
  // failure.
  static std::optional<AddressComponentRow> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAddressComponentRow object.
  base::Value::Dict ToValue() const;

  std::vector<AddressComponent> row;

};

struct AddressComponents {
  AddressComponents();
  ~AddressComponents();
  AddressComponents(const AddressComponents&) = delete;
  AddressComponents& operator=(const AddressComponents&) = delete;
  AddressComponents(AddressComponents&& rhs) noexcept;
  AddressComponents& operator=(AddressComponents&& rhs) noexcept;

  // Populates a AddressComponents object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AddressComponents& out);

  // Populates a AddressComponents object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, AddressComponents& out);

  // Creates a deep copy of AddressComponents.
  AddressComponents Clone() const;

  // Creates a AddressComponents object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<AddressComponents> FromValue(const base::Value::Dict& value);

  // Creates a AddressComponents object from a base::Value, or nullopt on
  // failure.
  static std::optional<AddressComponents> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAddressComponents object.
  base::Value::Dict ToValue() const;

  // The components.
  std::vector<AddressComponentRow> components;

  // The language code.
  std::string language_code;

};

struct CreditCardEntry {
  CreditCardEntry();
  ~CreditCardEntry();
  CreditCardEntry(const CreditCardEntry&) = delete;
  CreditCardEntry& operator=(const CreditCardEntry&) = delete;
  CreditCardEntry(CreditCardEntry&& rhs) noexcept;
  CreditCardEntry& operator=(CreditCardEntry&& rhs) noexcept;

  // Populates a CreditCardEntry object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CreditCardEntry& out);

  // Populates a CreditCardEntry object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, CreditCardEntry& out);

  // Creates a deep copy of CreditCardEntry.
  CreditCardEntry Clone() const;

  // Creates a CreditCardEntry object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<CreditCardEntry> FromValue(const base::Value::Dict& value);

  // Creates a CreditCardEntry object from a base::Value, or nullopt on failure.
  static std::optional<CreditCardEntry> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCreditCardEntry object.
  base::Value::Dict ToValue() const;

  // Globally unique identifier for this entry.
  std::optional<std::string> guid;

  // The card's instrument ID from the GPay server, if applicable.
  std::optional<std::string> instrument_id;

  // Name of the person who owns the credit card.
  std::optional<std::string> name;

  // Credit card number.
  std::optional<std::string> card_number;

  // Month as 2-character string ("01" = January, "12" = December).
  std::optional<std::string> expiration_month;

  // Year as a 4-character string (as in "2015").
  std::optional<std::string> expiration_year;

  // Credit card's nickname.
  std::optional<std::string> nickname;

  // Credit card's network.
  std::optional<std::string> network;

  // Credit card's image source.
  std::optional<std::string> image_src;

  // Credit card's masked cvc.
  std::optional<std::string> cvc;

  std::optional<AutofillMetadata> metadata;

};

struct IbanEntry {
  IbanEntry();
  ~IbanEntry();
  IbanEntry(const IbanEntry&) = delete;
  IbanEntry& operator=(const IbanEntry&) = delete;
  IbanEntry(IbanEntry&& rhs) noexcept;
  IbanEntry& operator=(IbanEntry&& rhs) noexcept;

  // Populates a IbanEntry object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, IbanEntry& out);

  // Populates a IbanEntry object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, IbanEntry& out);

  // Creates a deep copy of IbanEntry.
  IbanEntry Clone() const;

  // Creates a IbanEntry object from a base::Value::Dict, or nullopt on failure.
  static std::optional<IbanEntry> FromValue(const base::Value::Dict& value);

  // Creates a IbanEntry object from a base::Value, or nullopt on failure.
  static std::optional<IbanEntry> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisIbanEntry object.
  base::Value::Dict ToValue() const;

  // Globally unique identifier for this entry.
  std::optional<std::string> guid;

  // IBAN value.
  std::optional<std::string> value;

  // IBAN's nickname.
  std::optional<std::string> nickname;

  std::optional<AutofillMetadata> metadata;

};


//
// Functions
//

namespace GetAccountInfo {

namespace Results {

base::Value::List Create(const AccountInfo& account_info);
}  // namespace Results

}  // namespace GetAccountInfo

namespace SaveAddress {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The address entry to save.
  AddressEntry address;


 private:
  Params();
};

}  // namespace SaveAddress

namespace GetCountryList {

namespace Results {

base::Value::List Create(const std::vector<CountryEntry>& countries);
}  // namespace Results

}  // namespace GetCountryList

namespace GetAddressComponents {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // A two-character string representing the address' country     whose components
  // should be returned. See autofill_country.cc for a     list of valid codes.
  std::string country_code;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const AddressComponents& components);
}  // namespace Results

}  // namespace GetAddressComponents

namespace GetAddressList {

namespace Results {

base::Value::List Create(const std::vector<AddressEntry>& entries);
}  // namespace Results

}  // namespace GetAddressList

namespace SaveCreditCard {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The card entry to save.
  CreditCardEntry card;


 private:
  Params();
};

}  // namespace SaveCreditCard

namespace SaveIban {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The IBAN entry to save.
  IbanEntry iban;


 private:
  Params();
};

}  // namespace SaveIban

namespace RemoveEntry {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // ID of the entry to remove.
  std::string guid;


 private:
  Params();
};

}  // namespace RemoveEntry

namespace GetCreditCardList {

namespace Results {

base::Value::List Create(const std::vector<CreditCardEntry>& entries);
}  // namespace Results

}  // namespace GetCreditCardList

namespace GetIbanList {

namespace Results {

base::Value::List Create(const std::vector<IbanEntry>& entries);
}  // namespace Results

}  // namespace GetIbanList

namespace IsValidIban {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string iban_value;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool is_valid);
}  // namespace Results

}  // namespace IsValidIban

namespace MaskCreditCard {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // GUID of the credit card to mask.
  std::string guid;


 private:
  Params();
};

}  // namespace MaskCreditCard

namespace MigrateCreditCards {

}  // namespace MigrateCreditCards

namespace LogServerCardLinkClicked {

}  // namespace LogServerCardLinkClicked

namespace SetCreditCardFIDOAuthEnabledState {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  bool enabled;


 private:
  Params();
};

}  // namespace SetCreditCardFIDOAuthEnabledState

namespace AddVirtualCard {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The server side id of the credit card to be enrolled. Note it refers to the
  // legacy server id of credit cards, not the instrument ids.
  std::string card_id;


 private:
  Params();
};

}  // namespace AddVirtualCard

namespace RemoveVirtualCard {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The server side id of the credit card to be unenrolled. Note it refers to the
  // legacy server id of credit cards, not the instrument ids.
  std::string card_id;


 private:
  Params();
};

}  // namespace RemoveVirtualCard

namespace AuthenticateUserAndFlipMandatoryAuthToggle {

}  // namespace AuthenticateUserAndFlipMandatoryAuthToggle

namespace GetLocalCard {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string guid;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const CreditCardEntry& card);
}  // namespace Results

}  // namespace GetLocalCard

namespace CheckIfDeviceAuthAvailable {

namespace Results {

base::Value::List Create(bool is_device_auth_available);
}  // namespace Results

}  // namespace CheckIfDeviceAuthAvailable

namespace BulkDeleteAllCvcs {

}  // namespace BulkDeleteAllCvcs

//
// Events
//

namespace OnPersonalDataChanged {

extern const char kEventName[];  // "autofillPrivate.onPersonalDataChanged"

base::Value::List Create(const std::vector<AddressEntry>& address_entries, const std::vector<CreditCardEntry>& credit_card_entries, const std::vector<IbanEntry>& ibans, const AccountInfo& account_info);
}  // namespace OnPersonalDataChanged

}  // namespace autofill_private
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_AUTOFILL_PRIVATE_H__
