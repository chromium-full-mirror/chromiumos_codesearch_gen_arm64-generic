// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/autofill_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/autofill_private.h"

#include <memory>
#include <ostream>
#include <string>
#include <utility>
#include <vector>

#include "base/check.h"
#include "base/check_op.h"
#include "base/notreached.h"
#include "base/strings/string_number_conversions.h"
#include "base/strings/utf_string_conversions.h"
#include "base/values.h"
#include "tools/json_schema_compiler/util.h"
#include "base/strings/string_piece.h"


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace autofill_private {
//
// Types
//

AccountInfo::AccountInfo()
: is_sync_enabled_for_autofill_profiles(false),
is_eligible_for_address_account_storage(false) {}

AccountInfo::~AccountInfo() = default;
AccountInfo::AccountInfo(AccountInfo&& rhs) = default;
AccountInfo& AccountInfo::operator=(AccountInfo&& rhs) = default;
AccountInfo AccountInfo::Clone() const {
  AccountInfo out;
  out.email = email;
  out.is_sync_enabled_for_autofill_profiles = is_sync_enabled_for_autofill_profiles;
  out.is_eligible_for_address_account_storage = is_eligible_for_address_account_storage;
  return out;
}

// static
bool AccountInfo::Populate(
    const base::Value::Dict& dict, AccountInfo& out) {
  const base::Value* email_value = dict.Find("email");
  if (!email_value) {
    return false;
  }
  {
    auto* temp = (*email_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.email = *temp;
  }

  const base::Value* is_sync_enabled_for_autofill_profiles_value = dict.Find("isSyncEnabledForAutofillProfiles");
  if (!is_sync_enabled_for_autofill_profiles_value) {
    return false;
  }
  {
    auto temp = (*is_sync_enabled_for_autofill_profiles_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_sync_enabled_for_autofill_profiles = *temp;
  }

  const base::Value* is_eligible_for_address_account_storage_value = dict.Find("isEligibleForAddressAccountStorage");
  if (!is_eligible_for_address_account_storage_value) {
    return false;
  }
  {
    auto temp = (*is_eligible_for_address_account_storage_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_eligible_for_address_account_storage = *temp;
  }

  return true;
}

// static
bool AccountInfo::Populate(
    const base::Value& value, AccountInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<AccountInfo> AccountInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<AccountInfo>();
  if (!value.is_dict()) {
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out);
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
absl::optional<AccountInfo> AccountInfo::FromValue(const base::Value::Dict& value) {
  AccountInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<AccountInfo> AccountInfo::FromValue(const base::Value& value) {
  AccountInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict AccountInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("email", this->email);

  to_value_result.Set("isSyncEnabledForAutofillProfiles", this->is_sync_enabled_for_autofill_profiles);

  to_value_result.Set("isEligibleForAddressAccountStorage", this->is_eligible_for_address_account_storage);


  return to_value_result;
}


const char* ToString(ServerFieldType enum_param) {
  switch (enum_param) {
    case ServerFieldType::kNoServerData:
      return "NO_SERVER_DATA";
    case ServerFieldType::kUnknownType:
      return "UNKNOWN_TYPE";
    case ServerFieldType::kEmptyType:
      return "EMPTY_TYPE";
    case ServerFieldType::kNameFirst:
      return "NAME_FIRST";
    case ServerFieldType::kNameMiddle:
      return "NAME_MIDDLE";
    case ServerFieldType::kNameLast:
      return "NAME_LAST";
    case ServerFieldType::kNameMiddleInitial:
      return "NAME_MIDDLE_INITIAL";
    case ServerFieldType::kNameFull:
      return "NAME_FULL";
    case ServerFieldType::kNameSuffix:
      return "NAME_SUFFIX";
    case ServerFieldType::kEmailAddress:
      return "EMAIL_ADDRESS";
    case ServerFieldType::kPhoneHomeNumber:
      return "PHONE_HOME_NUMBER";
    case ServerFieldType::kPhoneHomeCityCode:
      return "PHONE_HOME_CITY_CODE";
    case ServerFieldType::kPhoneHomeCountryCode:
      return "PHONE_HOME_COUNTRY_CODE";
    case ServerFieldType::kPhoneHomeCityAndNumber:
      return "PHONE_HOME_CITY_AND_NUMBER";
    case ServerFieldType::kPhoneHomeWholeNumber:
      return "PHONE_HOME_WHOLE_NUMBER";
    case ServerFieldType::kAddressHomeLine1:
      return "ADDRESS_HOME_LINE1";
    case ServerFieldType::kAddressHomeLine2:
      return "ADDRESS_HOME_LINE2";
    case ServerFieldType::kAddressHomeAptNum:
      return "ADDRESS_HOME_APT_NUM";
    case ServerFieldType::kAddressHomeCity:
      return "ADDRESS_HOME_CITY";
    case ServerFieldType::kAddressHomeState:
      return "ADDRESS_HOME_STATE";
    case ServerFieldType::kAddressHomeZip:
      return "ADDRESS_HOME_ZIP";
    case ServerFieldType::kAddressHomeCountry:
      return "ADDRESS_HOME_COUNTRY";
    case ServerFieldType::kCreditCardNameFull:
      return "CREDIT_CARD_NAME_FULL";
    case ServerFieldType::kCreditCardNumber:
      return "CREDIT_CARD_NUMBER";
    case ServerFieldType::kCreditCardExpMonth:
      return "CREDIT_CARD_EXP_MONTH";
    case ServerFieldType::kCreditCardExp2DigitYear:
      return "CREDIT_CARD_EXP_2_DIGIT_YEAR";
    case ServerFieldType::kCreditCardExp4DigitYear:
      return "CREDIT_CARD_EXP_4_DIGIT_YEAR";
    case ServerFieldType::kCreditCardExpDate2DigitYear:
      return "CREDIT_CARD_EXP_DATE_2_DIGIT_YEAR";
    case ServerFieldType::kCreditCardExpDate4DigitYear:
      return "CREDIT_CARD_EXP_DATE_4_DIGIT_YEAR";
    case ServerFieldType::kCreditCardType:
      return "CREDIT_CARD_TYPE";
    case ServerFieldType::kCreditCardVerificationCode:
      return "CREDIT_CARD_VERIFICATION_CODE";
    case ServerFieldType::kCompanyName:
      return "COMPANY_NAME";
    case ServerFieldType::kFieldWithDefaultValue:
      return "FIELD_WITH_DEFAULT_VALUE";
    case ServerFieldType::kMerchantEmailSignup:
      return "MERCHANT_EMAIL_SIGNUP";
    case ServerFieldType::kMerchantPromoCode:
      return "MERCHANT_PROMO_CODE";
    case ServerFieldType::kPassword:
      return "PASSWORD";
    case ServerFieldType::kAccountCreationPassword:
      return "ACCOUNT_CREATION_PASSWORD";
    case ServerFieldType::kAddressHomeStreetAddress:
      return "ADDRESS_HOME_STREET_ADDRESS";
    case ServerFieldType::kAddressHomeSortingCode:
      return "ADDRESS_HOME_SORTING_CODE";
    case ServerFieldType::kAddressHomeDependentLocality:
      return "ADDRESS_HOME_DEPENDENT_LOCALITY";
    case ServerFieldType::kAddressHomeLine3:
      return "ADDRESS_HOME_LINE3";
    case ServerFieldType::kNotAccountCreationPassword:
      return "NOT_ACCOUNT_CREATION_PASSWORD";
    case ServerFieldType::kUsername:
      return "USERNAME";
    case ServerFieldType::kUsernameAndEmailAddress:
      return "USERNAME_AND_EMAIL_ADDRESS";
    case ServerFieldType::kNewPassword:
      return "NEW_PASSWORD";
    case ServerFieldType::kProbablyNewPassword:
      return "PROBABLY_NEW_PASSWORD";
    case ServerFieldType::kNotNewPassword:
      return "NOT_NEW_PASSWORD";
    case ServerFieldType::kCreditCardNameFirst:
      return "CREDIT_CARD_NAME_FIRST";
    case ServerFieldType::kCreditCardNameLast:
      return "CREDIT_CARD_NAME_LAST";
    case ServerFieldType::kPhoneHomeExtension:
      return "PHONE_HOME_EXTENSION";
    case ServerFieldType::kConfirmationPassword:
      return "CONFIRMATION_PASSWORD";
    case ServerFieldType::kAmbiguousType:
      return "AMBIGUOUS_TYPE";
    case ServerFieldType::kSearchTerm:
      return "SEARCH_TERM";
    case ServerFieldType::kPrice:
      return "PRICE";
    case ServerFieldType::kNotPassword:
      return "NOT_PASSWORD";
    case ServerFieldType::kSingleUsername:
      return "SINGLE_USERNAME";
    case ServerFieldType::kNotUsername:
      return "NOT_USERNAME";
    case ServerFieldType::kUpiVpa:
      return "UPI_VPA";
    case ServerFieldType::kAddressHomeStreetName:
      return "ADDRESS_HOME_STREET_NAME";
    case ServerFieldType::kAddressHomeHouseNumber:
      return "ADDRESS_HOME_HOUSE_NUMBER";
    case ServerFieldType::kAddressHomeSubpremise:
      return "ADDRESS_HOME_SUBPREMISE";
    case ServerFieldType::kAddressHomeOtherSubunit:
      return "ADDRESS_HOME_OTHER_SUBUNIT";
    case ServerFieldType::kNameLastFirst:
      return "NAME_LAST_FIRST";
    case ServerFieldType::kNameLastConjunction:
      return "NAME_LAST_CONJUNCTION";
    case ServerFieldType::kNameLastSecond:
      return "NAME_LAST_SECOND";
    case ServerFieldType::kNameHonorificPrefix:
      return "NAME_HONORIFIC_PREFIX";
    case ServerFieldType::kAddressHomeAddress:
      return "ADDRESS_HOME_ADDRESS";
    case ServerFieldType::kAddressHomeAddressWithName:
      return "ADDRESS_HOME_ADDRESS_WITH_NAME";
    case ServerFieldType::kAddressHomeFloor:
      return "ADDRESS_HOME_FLOOR";
    case ServerFieldType::kNameFullWithHonorificPrefix:
      return "NAME_FULL_WITH_HONORIFIC_PREFIX";
    case ServerFieldType::kBirthdateDay:
      return "BIRTHDATE_DAY";
    case ServerFieldType::kBirthdateMonth:
      return "BIRTHDATE_MONTH";
    case ServerFieldType::kBirthdate4DigitYear:
      return "BIRTHDATE_4_DIGIT_YEAR";
    case ServerFieldType::kPhoneHomeCityCodeWithTrunkPrefix:
      return "PHONE_HOME_CITY_CODE_WITH_TRUNK_PREFIX";
    case ServerFieldType::kPhoneHomeCityAndNumberWithoutTrunkPrefix:
      return "PHONE_HOME_CITY_AND_NUMBER_WITHOUT_TRUNK_PREFIX";
    case ServerFieldType::kPhoneHomeNumberPrefix:
      return "PHONE_HOME_NUMBER_PREFIX";
    case ServerFieldType::kPhoneHomeNumberSuffix:
      return "PHONE_HOME_NUMBER_SUFFIX";
    case ServerFieldType::kIbanValue:
      return "IBAN_VALUE";
    case ServerFieldType::kCreditCardStandaloneVerificationCode:
      return "CREDIT_CARD_STANDALONE_VERIFICATION_CODE";
    case ServerFieldType::kNumericQuantity:
      return "NUMERIC_QUANTITY";
    case ServerFieldType::kOneTimeCode:
      return "ONE_TIME_CODE";
    case ServerFieldType::kDeliveryInstructions:
      return "DELIVERY_INSTRUCTIONS";
    case ServerFieldType::kAddressHomeOverflow:
      return "ADDRESS_HOME_OVERFLOW";
    case ServerFieldType::kAddressHomeLandmark:
      return "ADDRESS_HOME_LANDMARK";
    case ServerFieldType::kAddressHomeOverflowAndLandmark:
      return "ADDRESS_HOME_OVERFLOW_AND_LANDMARK";
    case ServerFieldType::kAddressHomeAdminLevel2:
      return "ADDRESS_HOME_ADMIN_LEVEL2";
    case ServerFieldType::kAddressHomeStreetLocation:
      return "ADDRESS_HOME_STREET_LOCATION";
    case ServerFieldType::kAddressHomeBetweenStreets:
      return "ADDRESS_HOME_BETWEEN_STREETS";
    case ServerFieldType::kAddressHomeBetweenStreetsOrLandmark:
      return "ADDRESS_HOME_BETWEEN_STREETS_OR_LANDMARK";
    case ServerFieldType::kAddressHomeBetweenStreets1:
      return "ADDRESS_HOME_BETWEEN_STREETS_1";
    case ServerFieldType::kAddressHomeBetweenStreets2:
      return "ADDRESS_HOME_BETWEEN_STREETS_2";
    case ServerFieldType::kSingleUsernameForgotPassword:
      return "SINGLE_USERNAME_FORGOT_PASSWORD";
    case ServerFieldType::kMaxValidFieldType:
      return "MAX_VALID_FIELD_TYPE";
    case ServerFieldType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ServerFieldType ParseServerFieldType(base::StringPiece enum_string) {
  if (enum_string == "NO_SERVER_DATA")
    return ServerFieldType::kNoServerData;
  if (enum_string == "UNKNOWN_TYPE")
    return ServerFieldType::kUnknownType;
  if (enum_string == "EMPTY_TYPE")
    return ServerFieldType::kEmptyType;
  if (enum_string == "NAME_FIRST")
    return ServerFieldType::kNameFirst;
  if (enum_string == "NAME_MIDDLE")
    return ServerFieldType::kNameMiddle;
  if (enum_string == "NAME_LAST")
    return ServerFieldType::kNameLast;
  if (enum_string == "NAME_MIDDLE_INITIAL")
    return ServerFieldType::kNameMiddleInitial;
  if (enum_string == "NAME_FULL")
    return ServerFieldType::kNameFull;
  if (enum_string == "NAME_SUFFIX")
    return ServerFieldType::kNameSuffix;
  if (enum_string == "EMAIL_ADDRESS")
    return ServerFieldType::kEmailAddress;
  if (enum_string == "PHONE_HOME_NUMBER")
    return ServerFieldType::kPhoneHomeNumber;
  if (enum_string == "PHONE_HOME_CITY_CODE")
    return ServerFieldType::kPhoneHomeCityCode;
  if (enum_string == "PHONE_HOME_COUNTRY_CODE")
    return ServerFieldType::kPhoneHomeCountryCode;
  if (enum_string == "PHONE_HOME_CITY_AND_NUMBER")
    return ServerFieldType::kPhoneHomeCityAndNumber;
  if (enum_string == "PHONE_HOME_WHOLE_NUMBER")
    return ServerFieldType::kPhoneHomeWholeNumber;
  if (enum_string == "ADDRESS_HOME_LINE1")
    return ServerFieldType::kAddressHomeLine1;
  if (enum_string == "ADDRESS_HOME_LINE2")
    return ServerFieldType::kAddressHomeLine2;
  if (enum_string == "ADDRESS_HOME_APT_NUM")
    return ServerFieldType::kAddressHomeAptNum;
  if (enum_string == "ADDRESS_HOME_CITY")
    return ServerFieldType::kAddressHomeCity;
  if (enum_string == "ADDRESS_HOME_STATE")
    return ServerFieldType::kAddressHomeState;
  if (enum_string == "ADDRESS_HOME_ZIP")
    return ServerFieldType::kAddressHomeZip;
  if (enum_string == "ADDRESS_HOME_COUNTRY")
    return ServerFieldType::kAddressHomeCountry;
  if (enum_string == "CREDIT_CARD_NAME_FULL")
    return ServerFieldType::kCreditCardNameFull;
  if (enum_string == "CREDIT_CARD_NUMBER")
    return ServerFieldType::kCreditCardNumber;
  if (enum_string == "CREDIT_CARD_EXP_MONTH")
    return ServerFieldType::kCreditCardExpMonth;
  if (enum_string == "CREDIT_CARD_EXP_2_DIGIT_YEAR")
    return ServerFieldType::kCreditCardExp2DigitYear;
  if (enum_string == "CREDIT_CARD_EXP_4_DIGIT_YEAR")
    return ServerFieldType::kCreditCardExp4DigitYear;
  if (enum_string == "CREDIT_CARD_EXP_DATE_2_DIGIT_YEAR")
    return ServerFieldType::kCreditCardExpDate2DigitYear;
  if (enum_string == "CREDIT_CARD_EXP_DATE_4_DIGIT_YEAR")
    return ServerFieldType::kCreditCardExpDate4DigitYear;
  if (enum_string == "CREDIT_CARD_TYPE")
    return ServerFieldType::kCreditCardType;
  if (enum_string == "CREDIT_CARD_VERIFICATION_CODE")
    return ServerFieldType::kCreditCardVerificationCode;
  if (enum_string == "COMPANY_NAME")
    return ServerFieldType::kCompanyName;
  if (enum_string == "FIELD_WITH_DEFAULT_VALUE")
    return ServerFieldType::kFieldWithDefaultValue;
  if (enum_string == "MERCHANT_EMAIL_SIGNUP")
    return ServerFieldType::kMerchantEmailSignup;
  if (enum_string == "MERCHANT_PROMO_CODE")
    return ServerFieldType::kMerchantPromoCode;
  if (enum_string == "PASSWORD")
    return ServerFieldType::kPassword;
  if (enum_string == "ACCOUNT_CREATION_PASSWORD")
    return ServerFieldType::kAccountCreationPassword;
  if (enum_string == "ADDRESS_HOME_STREET_ADDRESS")
    return ServerFieldType::kAddressHomeStreetAddress;
  if (enum_string == "ADDRESS_HOME_SORTING_CODE")
    return ServerFieldType::kAddressHomeSortingCode;
  if (enum_string == "ADDRESS_HOME_DEPENDENT_LOCALITY")
    return ServerFieldType::kAddressHomeDependentLocality;
  if (enum_string == "ADDRESS_HOME_LINE3")
    return ServerFieldType::kAddressHomeLine3;
  if (enum_string == "NOT_ACCOUNT_CREATION_PASSWORD")
    return ServerFieldType::kNotAccountCreationPassword;
  if (enum_string == "USERNAME")
    return ServerFieldType::kUsername;
  if (enum_string == "USERNAME_AND_EMAIL_ADDRESS")
    return ServerFieldType::kUsernameAndEmailAddress;
  if (enum_string == "NEW_PASSWORD")
    return ServerFieldType::kNewPassword;
  if (enum_string == "PROBABLY_NEW_PASSWORD")
    return ServerFieldType::kProbablyNewPassword;
  if (enum_string == "NOT_NEW_PASSWORD")
    return ServerFieldType::kNotNewPassword;
  if (enum_string == "CREDIT_CARD_NAME_FIRST")
    return ServerFieldType::kCreditCardNameFirst;
  if (enum_string == "CREDIT_CARD_NAME_LAST")
    return ServerFieldType::kCreditCardNameLast;
  if (enum_string == "PHONE_HOME_EXTENSION")
    return ServerFieldType::kPhoneHomeExtension;
  if (enum_string == "CONFIRMATION_PASSWORD")
    return ServerFieldType::kConfirmationPassword;
  if (enum_string == "AMBIGUOUS_TYPE")
    return ServerFieldType::kAmbiguousType;
  if (enum_string == "SEARCH_TERM")
    return ServerFieldType::kSearchTerm;
  if (enum_string == "PRICE")
    return ServerFieldType::kPrice;
  if (enum_string == "NOT_PASSWORD")
    return ServerFieldType::kNotPassword;
  if (enum_string == "SINGLE_USERNAME")
    return ServerFieldType::kSingleUsername;
  if (enum_string == "NOT_USERNAME")
    return ServerFieldType::kNotUsername;
  if (enum_string == "UPI_VPA")
    return ServerFieldType::kUpiVpa;
  if (enum_string == "ADDRESS_HOME_STREET_NAME")
    return ServerFieldType::kAddressHomeStreetName;
  if (enum_string == "ADDRESS_HOME_HOUSE_NUMBER")
    return ServerFieldType::kAddressHomeHouseNumber;
  if (enum_string == "ADDRESS_HOME_SUBPREMISE")
    return ServerFieldType::kAddressHomeSubpremise;
  if (enum_string == "ADDRESS_HOME_OTHER_SUBUNIT")
    return ServerFieldType::kAddressHomeOtherSubunit;
  if (enum_string == "NAME_LAST_FIRST")
    return ServerFieldType::kNameLastFirst;
  if (enum_string == "NAME_LAST_CONJUNCTION")
    return ServerFieldType::kNameLastConjunction;
  if (enum_string == "NAME_LAST_SECOND")
    return ServerFieldType::kNameLastSecond;
  if (enum_string == "NAME_HONORIFIC_PREFIX")
    return ServerFieldType::kNameHonorificPrefix;
  if (enum_string == "ADDRESS_HOME_ADDRESS")
    return ServerFieldType::kAddressHomeAddress;
  if (enum_string == "ADDRESS_HOME_ADDRESS_WITH_NAME")
    return ServerFieldType::kAddressHomeAddressWithName;
  if (enum_string == "ADDRESS_HOME_FLOOR")
    return ServerFieldType::kAddressHomeFloor;
  if (enum_string == "NAME_FULL_WITH_HONORIFIC_PREFIX")
    return ServerFieldType::kNameFullWithHonorificPrefix;
  if (enum_string == "BIRTHDATE_DAY")
    return ServerFieldType::kBirthdateDay;
  if (enum_string == "BIRTHDATE_MONTH")
    return ServerFieldType::kBirthdateMonth;
  if (enum_string == "BIRTHDATE_4_DIGIT_YEAR")
    return ServerFieldType::kBirthdate4DigitYear;
  if (enum_string == "PHONE_HOME_CITY_CODE_WITH_TRUNK_PREFIX")
    return ServerFieldType::kPhoneHomeCityCodeWithTrunkPrefix;
  if (enum_string == "PHONE_HOME_CITY_AND_NUMBER_WITHOUT_TRUNK_PREFIX")
    return ServerFieldType::kPhoneHomeCityAndNumberWithoutTrunkPrefix;
  if (enum_string == "PHONE_HOME_NUMBER_PREFIX")
    return ServerFieldType::kPhoneHomeNumberPrefix;
  if (enum_string == "PHONE_HOME_NUMBER_SUFFIX")
    return ServerFieldType::kPhoneHomeNumberSuffix;
  if (enum_string == "IBAN_VALUE")
    return ServerFieldType::kIbanValue;
  if (enum_string == "CREDIT_CARD_STANDALONE_VERIFICATION_CODE")
    return ServerFieldType::kCreditCardStandaloneVerificationCode;
  if (enum_string == "NUMERIC_QUANTITY")
    return ServerFieldType::kNumericQuantity;
  if (enum_string == "ONE_TIME_CODE")
    return ServerFieldType::kOneTimeCode;
  if (enum_string == "DELIVERY_INSTRUCTIONS")
    return ServerFieldType::kDeliveryInstructions;
  if (enum_string == "ADDRESS_HOME_OVERFLOW")
    return ServerFieldType::kAddressHomeOverflow;
  if (enum_string == "ADDRESS_HOME_LANDMARK")
    return ServerFieldType::kAddressHomeLandmark;
  if (enum_string == "ADDRESS_HOME_OVERFLOW_AND_LANDMARK")
    return ServerFieldType::kAddressHomeOverflowAndLandmark;
  if (enum_string == "ADDRESS_HOME_ADMIN_LEVEL2")
    return ServerFieldType::kAddressHomeAdminLevel2;
  if (enum_string == "ADDRESS_HOME_STREET_LOCATION")
    return ServerFieldType::kAddressHomeStreetLocation;
  if (enum_string == "ADDRESS_HOME_BETWEEN_STREETS")
    return ServerFieldType::kAddressHomeBetweenStreets;
  if (enum_string == "ADDRESS_HOME_BETWEEN_STREETS_OR_LANDMARK")
    return ServerFieldType::kAddressHomeBetweenStreetsOrLandmark;
  if (enum_string == "ADDRESS_HOME_BETWEEN_STREETS_1")
    return ServerFieldType::kAddressHomeBetweenStreets1;
  if (enum_string == "ADDRESS_HOME_BETWEEN_STREETS_2")
    return ServerFieldType::kAddressHomeBetweenStreets2;
  if (enum_string == "SINGLE_USERNAME_FORGOT_PASSWORD")
    return ServerFieldType::kSingleUsernameForgotPassword;
  if (enum_string == "MAX_VALID_FIELD_TYPE")
    return ServerFieldType::kMaxValidFieldType;
  return ServerFieldType::kNone;
}

std::u16string GetServerFieldTypeParseError(base::StringPiece enum_string) {
  return u"expected \"NO_SERVER_DATA\" or \"UNKNOWN_TYPE\" or \"EMPTY_TYPE\" or \"NAME_FIRST\" or \"NAME_MIDDLE\" or \"NAME_LAST\" or \"NAME_MIDDLE_INITIAL\" or \"NAME_FULL\" or \"NAME_SUFFIX\" or \"EMAIL_ADDRESS\" or \"PHONE_HOME_NUMBER\" or \"PHONE_HOME_CITY_CODE\" or \"PHONE_HOME_COUNTRY_CODE\" or \"PHONE_HOME_CITY_AND_NUMBER\" or \"PHONE_HOME_WHOLE_NUMBER\" or \"ADDRESS_HOME_LINE1\" or \"ADDRESS_HOME_LINE2\" or \"ADDRESS_HOME_APT_NUM\" or \"ADDRESS_HOME_CITY\" or \"ADDRESS_HOME_STATE\" or \"ADDRESS_HOME_ZIP\" or \"ADDRESS_HOME_COUNTRY\" or \"CREDIT_CARD_NAME_FULL\" or \"CREDIT_CARD_NUMBER\" or \"CREDIT_CARD_EXP_MONTH\" or \"CREDIT_CARD_EXP_2_DIGIT_YEAR\" or \"CREDIT_CARD_EXP_4_DIGIT_YEAR\" or \"CREDIT_CARD_EXP_DATE_2_DIGIT_YEAR\" or \"CREDIT_CARD_EXP_DATE_4_DIGIT_YEAR\" or \"CREDIT_CARD_TYPE\" or \"CREDIT_CARD_VERIFICATION_CODE\" or \"COMPANY_NAME\" or \"FIELD_WITH_DEFAULT_VALUE\" or \"MERCHANT_EMAIL_SIGNUP\" or \"MERCHANT_PROMO_CODE\" or \"PASSWORD\" or \"ACCOUNT_CREATION_PASSWORD\" or \"ADDRESS_HOME_STREET_ADDRESS\" or \"ADDRESS_HOME_SORTING_CODE\" or \"ADDRESS_HOME_DEPENDENT_LOCALITY\" or \"ADDRESS_HOME_LINE3\" or \"NOT_ACCOUNT_CREATION_PASSWORD\" or \"USERNAME\" or \"USERNAME_AND_EMAIL_ADDRESS\" or \"NEW_PASSWORD\" or \"PROBABLY_NEW_PASSWORD\" or \"NOT_NEW_PASSWORD\" or \"CREDIT_CARD_NAME_FIRST\" or \"CREDIT_CARD_NAME_LAST\" or \"PHONE_HOME_EXTENSION\" or \"CONFIRMATION_PASSWORD\" or \"AMBIGUOUS_TYPE\" or \"SEARCH_TERM\" or \"PRICE\" or \"NOT_PASSWORD\" or \"SINGLE_USERNAME\" or \"NOT_USERNAME\" or \"UPI_VPA\" or \"ADDRESS_HOME_STREET_NAME\" or \"ADDRESS_HOME_HOUSE_NUMBER\" or \"ADDRESS_HOME_SUBPREMISE\" or \"ADDRESS_HOME_OTHER_SUBUNIT\" or \"NAME_LAST_FIRST\" or \"NAME_LAST_CONJUNCTION\" or \"NAME_LAST_SECOND\" or \"NAME_HONORIFIC_PREFIX\" or \"ADDRESS_HOME_ADDRESS\" or \"ADDRESS_HOME_ADDRESS_WITH_NAME\" or \"ADDRESS_HOME_FLOOR\" or \"NAME_FULL_WITH_HONORIFIC_PREFIX\" or \"BIRTHDATE_DAY\" or \"BIRTHDATE_MONTH\" or \"BIRTHDATE_4_DIGIT_YEAR\" or \"PHONE_HOME_CITY_CODE_WITH_TRUNK_PREFIX\" or \"PHONE_HOME_CITY_AND_NUMBER_WITHOUT_TRUNK_PREFIX\" or \"PHONE_HOME_NUMBER_PREFIX\" or \"PHONE_HOME_NUMBER_SUFFIX\" or \"IBAN_VALUE\" or \"CREDIT_CARD_STANDALONE_VERIFICATION_CODE\" or \"NUMERIC_QUANTITY\" or \"ONE_TIME_CODE\" or \"DELIVERY_INSTRUCTIONS\" or \"ADDRESS_HOME_OVERFLOW\" or \"ADDRESS_HOME_LANDMARK\" or \"ADDRESS_HOME_OVERFLOW_AND_LANDMARK\" or \"ADDRESS_HOME_ADMIN_LEVEL2\" or \"ADDRESS_HOME_STREET_LOCATION\" or \"ADDRESS_HOME_BETWEEN_STREETS\" or \"ADDRESS_HOME_BETWEEN_STREETS_OR_LANDMARK\" or \"ADDRESS_HOME_BETWEEN_STREETS_1\" or \"ADDRESS_HOME_BETWEEN_STREETS_2\" or \"SINGLE_USERNAME_FORGOT_PASSWORD\" or \"MAX_VALID_FIELD_TYPE\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(AddressSource enum_param) {
  switch (enum_param) {
    case AddressSource::kLocalOrSyncable:
      return "LOCAL_OR_SYNCABLE";
    case AddressSource::kAccount:
      return "ACCOUNT";
    case AddressSource::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

AddressSource ParseAddressSource(base::StringPiece enum_string) {
  if (enum_string == "LOCAL_OR_SYNCABLE")
    return AddressSource::kLocalOrSyncable;
  if (enum_string == "ACCOUNT")
    return AddressSource::kAccount;
  return AddressSource::kNone;
}

std::u16string GetAddressSourceParseError(base::StringPiece enum_string) {
  return u"expected \"LOCAL_OR_SYNCABLE\" or \"ACCOUNT\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


AutofillMetadata::AutofillMetadata()
: source() {}

AutofillMetadata::~AutofillMetadata() = default;
AutofillMetadata::AutofillMetadata(AutofillMetadata&& rhs) = default;
AutofillMetadata& AutofillMetadata::operator=(AutofillMetadata&& rhs) = default;
AutofillMetadata AutofillMetadata::Clone() const {
  AutofillMetadata out;
  out.summary_label = summary_label;
  out.summary_sublabel = summary_sublabel;
  out.source = source;
  out.is_local = is_local;
  out.is_cached = is_cached;
  out.is_migratable = is_migratable;
  out.is_virtual_card_enrollment_eligible = is_virtual_card_enrollment_eligible;
  out.is_virtual_card_enrolled = is_virtual_card_enrolled;
  return out;
}

// static
bool AutofillMetadata::Populate(
    const base::Value::Dict& dict, AutofillMetadata& out) {
  out.source = AddressSource();
  const base::Value* summary_label_value = dict.Find("summaryLabel");
  if (!summary_label_value) {
    return false;
  }
  {
    auto* temp = (*summary_label_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.summary_label = *temp;
  }

  const base::Value* summary_sublabel_value = dict.Find("summarySublabel");
  if (summary_sublabel_value) {
    {
      auto* temp = (*summary_sublabel_value).GetIfString();
      if (!temp) {
        out.summary_sublabel = absl::nullopt;
        return false;
      }
      out.summary_sublabel = *temp;
    }
  }

  const base::Value* source_value = dict.Find("source");
  if (source_value) {
    {
      const std::string* address_source_as_string = (*source_value).GetIfString();
      if (!address_source_as_string) {
        return false;
      }
      out.source = ParseAddressSource(*address_source_as_string);
      if (out.source == AddressSource()) {
        return false;
      }
    }
    } else {
    out.source = AddressSource();
  }

  const base::Value* is_local_value = dict.Find("isLocal");
  if (is_local_value) {
    {
      auto temp = (*is_local_value).GetIfBool();
      if (!temp.has_value()) {
        out.is_local = absl::nullopt;
        return false;
      }
      out.is_local = *temp;
    }
  }

  const base::Value* is_cached_value = dict.Find("isCached");
  if (is_cached_value) {
    {
      auto temp = (*is_cached_value).GetIfBool();
      if (!temp.has_value()) {
        out.is_cached = absl::nullopt;
        return false;
      }
      out.is_cached = *temp;
    }
  }

  const base::Value* is_migratable_value = dict.Find("isMigratable");
  if (is_migratable_value) {
    {
      auto temp = (*is_migratable_value).GetIfBool();
      if (!temp.has_value()) {
        out.is_migratable = absl::nullopt;
        return false;
      }
      out.is_migratable = *temp;
    }
  }

  const base::Value* is_virtual_card_enrollment_eligible_value = dict.Find("isVirtualCardEnrollmentEligible");
  if (is_virtual_card_enrollment_eligible_value) {
    {
      auto temp = (*is_virtual_card_enrollment_eligible_value).GetIfBool();
      if (!temp.has_value()) {
        out.is_virtual_card_enrollment_eligible = absl::nullopt;
        return false;
      }
      out.is_virtual_card_enrollment_eligible = *temp;
    }
  }

  const base::Value* is_virtual_card_enrolled_value = dict.Find("isVirtualCardEnrolled");
  if (is_virtual_card_enrolled_value) {
    {
      auto temp = (*is_virtual_card_enrolled_value).GetIfBool();
      if (!temp.has_value()) {
        out.is_virtual_card_enrolled = absl::nullopt;
        return false;
      }
      out.is_virtual_card_enrolled = *temp;
    }
  }

  return true;
}

// static
bool AutofillMetadata::Populate(
    const base::Value& value, AutofillMetadata& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<AutofillMetadata> AutofillMetadata::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<AutofillMetadata>();
  if (!value.is_dict()) {
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out);
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
absl::optional<AutofillMetadata> AutofillMetadata::FromValue(const base::Value::Dict& value) {
  AutofillMetadata out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<AutofillMetadata> AutofillMetadata::FromValue(const base::Value& value) {
  AutofillMetadata out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict AutofillMetadata::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("summaryLabel", this->summary_label);

  if (this->summary_sublabel) {
    to_value_result.Set("summarySublabel", *this->summary_sublabel);

  }
  if (this->source != AddressSource()) {
    to_value_result.Set("source", autofill_private::ToString(this->source));

  }
  if (this->is_local) {
    to_value_result.Set("isLocal", *this->is_local);

  }
  if (this->is_cached) {
    to_value_result.Set("isCached", *this->is_cached);

  }
  if (this->is_migratable) {
    to_value_result.Set("isMigratable", *this->is_migratable);

  }
  if (this->is_virtual_card_enrollment_eligible) {
    to_value_result.Set("isVirtualCardEnrollmentEligible", *this->is_virtual_card_enrollment_eligible);

  }
  if (this->is_virtual_card_enrolled) {
    to_value_result.Set("isVirtualCardEnrolled", *this->is_virtual_card_enrolled);

  }

  return to_value_result;
}


AddressField::AddressField()
: type() {}

AddressField::~AddressField() = default;
AddressField::AddressField(AddressField&& rhs) = default;
AddressField& AddressField::operator=(AddressField&& rhs) = default;
AddressField AddressField::Clone() const {
  AddressField out;
  out.type = type;
  out.value = value;
  return out;
}

// static
bool AddressField::Populate(
    const base::Value::Dict& dict, AddressField& out) {
  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    return false;
  }
  {
    const std::string* server_field_type_as_string = (*type_value).GetIfString();
    if (!server_field_type_as_string) {
      return false;
    }
    out.type = ParseServerFieldType(*server_field_type_as_string);
    if (out.type == ServerFieldType()) {
      return false;
    }
  }

  const base::Value* value_value = dict.Find("value");
  if (!value_value) {
    return false;
  }
  {
    auto* temp = (*value_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.value = *temp;
  }

  return true;
}

// static
bool AddressField::Populate(
    const base::Value& value, AddressField& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<AddressField> AddressField::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<AddressField>();
  if (!value.is_dict()) {
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out);
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
absl::optional<AddressField> AddressField::FromValue(const base::Value::Dict& value) {
  AddressField out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<AddressField> AddressField::FromValue(const base::Value& value) {
  AddressField out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict AddressField::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("type", autofill_private::ToString(this->type));

  to_value_result.Set("value", this->value);


  return to_value_result;
}


AddressEntry::AddressEntry()
 {}

AddressEntry::~AddressEntry() = default;
AddressEntry::AddressEntry(AddressEntry&& rhs) = default;
AddressEntry& AddressEntry::operator=(AddressEntry&& rhs) = default;
AddressEntry AddressEntry::Clone() const {
  AddressEntry out;
  out.guid = guid;
  out.fields.reserve(fields.size());
  for (const auto& element : fields) {
    json_schema_compiler::util::AppendToContainer(out.fields, element.Clone());
  }
  out.language_code = language_code;
  if (metadata) {
    out.metadata = metadata->Clone();
  }
  return out;
}

// static
bool AddressEntry::Populate(
    const base::Value::Dict& dict, AddressEntry& out) {
  const base::Value* guid_value = dict.Find("guid");
  if (guid_value) {
    {
      auto* temp = (*guid_value).GetIfString();
      if (!temp) {
        out.guid = absl::nullopt;
        return false;
      }
      out.guid = *temp;
    }
  }

  const base::Value* fields_value = dict.Find("fields");
  if (!fields_value) {
    return false;
  }
  {
    if (!(*fields_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*fields_value).GetList(), out.fields)) {
        return false;
      }
    }
  }

  const base::Value* language_code_value = dict.Find("languageCode");
  if (language_code_value) {
    {
      auto* temp = (*language_code_value).GetIfString();
      if (!temp) {
        out.language_code = absl::nullopt;
        return false;
      }
      out.language_code = *temp;
    }
  }

  const base::Value* metadata_value = dict.Find("metadata");
  if (metadata_value) {
    {
      if (!(*metadata_value).is_dict()) {
        return false;
      }
      else {
        AutofillMetadata temp;
        if (!AutofillMetadata::Populate((*metadata_value).GetDict(), temp))
          return false;
        out.metadata = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool AddressEntry::Populate(
    const base::Value& value, AddressEntry& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<AddressEntry> AddressEntry::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<AddressEntry>();
  if (!value.is_dict()) {
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out);
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
absl::optional<AddressEntry> AddressEntry::FromValue(const base::Value::Dict& value) {
  AddressEntry out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<AddressEntry> AddressEntry::FromValue(const base::Value& value) {
  AddressEntry out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict AddressEntry::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->guid) {
    to_value_result.Set("guid", *this->guid);

  }
  to_value_result.Set("fields", json_schema_compiler::util::CreateValueFromArray(this->fields));

  if (this->language_code) {
    to_value_result.Set("languageCode", *this->language_code);

  }
  if (this->metadata) {
    to_value_result.Set("metadata", (this->metadata)->ToValue());

  }

  return to_value_result;
}


CountryEntry::CountryEntry()
 {}

CountryEntry::~CountryEntry() = default;
CountryEntry::CountryEntry(CountryEntry&& rhs) = default;
CountryEntry& CountryEntry::operator=(CountryEntry&& rhs) = default;
CountryEntry CountryEntry::Clone() const {
  CountryEntry out;
  out.name = name;
  out.country_code = country_code;
  return out;
}

// static
bool CountryEntry::Populate(
    const base::Value::Dict& dict, CountryEntry& out) {
  const base::Value* name_value = dict.Find("name");
  if (name_value) {
    {
      auto* temp = (*name_value).GetIfString();
      if (!temp) {
        out.name = absl::nullopt;
        return false;
      }
      out.name = *temp;
    }
  }

  const base::Value* country_code_value = dict.Find("countryCode");
  if (country_code_value) {
    {
      auto* temp = (*country_code_value).GetIfString();
      if (!temp) {
        out.country_code = absl::nullopt;
        return false;
      }
      out.country_code = *temp;
    }
  }

  return true;
}

// static
bool CountryEntry::Populate(
    const base::Value& value, CountryEntry& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<CountryEntry> CountryEntry::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<CountryEntry>();
  if (!value.is_dict()) {
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out);
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
absl::optional<CountryEntry> CountryEntry::FromValue(const base::Value::Dict& value) {
  CountryEntry out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<CountryEntry> CountryEntry::FromValue(const base::Value& value) {
  CountryEntry out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict CountryEntry::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->name) {
    to_value_result.Set("name", *this->name);

  }
  if (this->country_code) {
    to_value_result.Set("countryCode", *this->country_code);

  }

  return to_value_result;
}


AddressComponent::AddressComponent()
: field(),
is_long_field(false),
is_required(false) {}

AddressComponent::~AddressComponent() = default;
AddressComponent::AddressComponent(AddressComponent&& rhs) = default;
AddressComponent& AddressComponent::operator=(AddressComponent&& rhs) = default;
AddressComponent AddressComponent::Clone() const {
  AddressComponent out;
  out.field = field;
  out.field_name = field_name;
  out.is_long_field = is_long_field;
  out.is_required = is_required;
  out.placeholder = placeholder;
  return out;
}

// static
bool AddressComponent::Populate(
    const base::Value::Dict& dict, AddressComponent& out) {
  const base::Value* field_value = dict.Find("field");
  if (!field_value) {
    return false;
  }
  {
    const std::string* server_field_type_as_string = (*field_value).GetIfString();
    if (!server_field_type_as_string) {
      return false;
    }
    out.field = ParseServerFieldType(*server_field_type_as_string);
    if (out.field == ServerFieldType()) {
      return false;
    }
  }

  const base::Value* field_name_value = dict.Find("fieldName");
  if (!field_name_value) {
    return false;
  }
  {
    auto* temp = (*field_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.field_name = *temp;
  }

  const base::Value* is_long_field_value = dict.Find("isLongField");
  if (!is_long_field_value) {
    return false;
  }
  {
    auto temp = (*is_long_field_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_long_field = *temp;
  }

  const base::Value* is_required_value = dict.Find("isRequired");
  if (!is_required_value) {
    return false;
  }
  {
    auto temp = (*is_required_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_required = *temp;
  }

  const base::Value* placeholder_value = dict.Find("placeholder");
  if (placeholder_value) {
    {
      auto* temp = (*placeholder_value).GetIfString();
      if (!temp) {
        out.placeholder = absl::nullopt;
        return false;
      }
      out.placeholder = *temp;
    }
  }

  return true;
}

// static
bool AddressComponent::Populate(
    const base::Value& value, AddressComponent& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<AddressComponent> AddressComponent::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<AddressComponent>();
  if (!value.is_dict()) {
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out);
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
absl::optional<AddressComponent> AddressComponent::FromValue(const base::Value::Dict& value) {
  AddressComponent out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<AddressComponent> AddressComponent::FromValue(const base::Value& value) {
  AddressComponent out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict AddressComponent::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("field", autofill_private::ToString(this->field));

  to_value_result.Set("fieldName", this->field_name);

  to_value_result.Set("isLongField", this->is_long_field);

  to_value_result.Set("isRequired", this->is_required);

  if (this->placeholder) {
    to_value_result.Set("placeholder", *this->placeholder);

  }

  return to_value_result;
}


AddressComponentRow::AddressComponentRow()
 {}

AddressComponentRow::~AddressComponentRow() = default;
AddressComponentRow::AddressComponentRow(AddressComponentRow&& rhs) = default;
AddressComponentRow& AddressComponentRow::operator=(AddressComponentRow&& rhs) = default;
AddressComponentRow AddressComponentRow::Clone() const {
  AddressComponentRow out;
  out.row.reserve(row.size());
  for (const auto& element : row) {
    json_schema_compiler::util::AppendToContainer(out.row, element.Clone());
  }
  return out;
}

// static
bool AddressComponentRow::Populate(
    const base::Value::Dict& dict, AddressComponentRow& out) {
  const base::Value* row_value = dict.Find("row");
  if (!row_value) {
    return false;
  }
  {
    if (!(*row_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*row_value).GetList(), out.row)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool AddressComponentRow::Populate(
    const base::Value& value, AddressComponentRow& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<AddressComponentRow> AddressComponentRow::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<AddressComponentRow>();
  if (!value.is_dict()) {
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out);
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
absl::optional<AddressComponentRow> AddressComponentRow::FromValue(const base::Value::Dict& value) {
  AddressComponentRow out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<AddressComponentRow> AddressComponentRow::FromValue(const base::Value& value) {
  AddressComponentRow out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict AddressComponentRow::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("row", json_schema_compiler::util::CreateValueFromArray(this->row));


  return to_value_result;
}


AddressComponents::AddressComponents()
 {}

AddressComponents::~AddressComponents() = default;
AddressComponents::AddressComponents(AddressComponents&& rhs) = default;
AddressComponents& AddressComponents::operator=(AddressComponents&& rhs) = default;
AddressComponents AddressComponents::Clone() const {
  AddressComponents out;
  out.components.reserve(components.size());
  for (const auto& element : components) {
    json_schema_compiler::util::AppendToContainer(out.components, element.Clone());
  }
  out.language_code = language_code;
  return out;
}

// static
bool AddressComponents::Populate(
    const base::Value::Dict& dict, AddressComponents& out) {
  const base::Value* components_value = dict.Find("components");
  if (!components_value) {
    return false;
  }
  {
    if (!(*components_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*components_value).GetList(), out.components)) {
        return false;
      }
    }
  }

  const base::Value* language_code_value = dict.Find("languageCode");
  if (!language_code_value) {
    return false;
  }
  {
    auto* temp = (*language_code_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.language_code = *temp;
  }

  return true;
}

// static
bool AddressComponents::Populate(
    const base::Value& value, AddressComponents& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<AddressComponents> AddressComponents::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<AddressComponents>();
  if (!value.is_dict()) {
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out);
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
absl::optional<AddressComponents> AddressComponents::FromValue(const base::Value::Dict& value) {
  AddressComponents out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<AddressComponents> AddressComponents::FromValue(const base::Value& value) {
  AddressComponents out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict AddressComponents::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("components", json_schema_compiler::util::CreateValueFromArray(this->components));

  to_value_result.Set("languageCode", this->language_code);


  return to_value_result;
}


CreditCardEntry::CreditCardEntry()
 {}

CreditCardEntry::~CreditCardEntry() = default;
CreditCardEntry::CreditCardEntry(CreditCardEntry&& rhs) = default;
CreditCardEntry& CreditCardEntry::operator=(CreditCardEntry&& rhs) = default;
CreditCardEntry CreditCardEntry::Clone() const {
  CreditCardEntry out;
  out.guid = guid;
  out.instrument_id = instrument_id;
  out.name = name;
  out.card_number = card_number;
  out.expiration_month = expiration_month;
  out.expiration_year = expiration_year;
  out.nickname = nickname;
  out.network = network;
  out.image_src = image_src;
  if (metadata) {
    out.metadata = metadata->Clone();
  }
  return out;
}

// static
bool CreditCardEntry::Populate(
    const base::Value::Dict& dict, CreditCardEntry& out) {
  const base::Value* guid_value = dict.Find("guid");
  if (guid_value) {
    {
      auto* temp = (*guid_value).GetIfString();
      if (!temp) {
        out.guid = absl::nullopt;
        return false;
      }
      out.guid = *temp;
    }
  }

  const base::Value* instrument_id_value = dict.Find("instrumentId");
  if (instrument_id_value) {
    {
      auto* temp = (*instrument_id_value).GetIfString();
      if (!temp) {
        out.instrument_id = absl::nullopt;
        return false;
      }
      out.instrument_id = *temp;
    }
  }

  const base::Value* name_value = dict.Find("name");
  if (name_value) {
    {
      auto* temp = (*name_value).GetIfString();
      if (!temp) {
        out.name = absl::nullopt;
        return false;
      }
      out.name = *temp;
    }
  }

  const base::Value* card_number_value = dict.Find("cardNumber");
  if (card_number_value) {
    {
      auto* temp = (*card_number_value).GetIfString();
      if (!temp) {
        out.card_number = absl::nullopt;
        return false;
      }
      out.card_number = *temp;
    }
  }

  const base::Value* expiration_month_value = dict.Find("expirationMonth");
  if (expiration_month_value) {
    {
      auto* temp = (*expiration_month_value).GetIfString();
      if (!temp) {
        out.expiration_month = absl::nullopt;
        return false;
      }
      out.expiration_month = *temp;
    }
  }

  const base::Value* expiration_year_value = dict.Find("expirationYear");
  if (expiration_year_value) {
    {
      auto* temp = (*expiration_year_value).GetIfString();
      if (!temp) {
        out.expiration_year = absl::nullopt;
        return false;
      }
      out.expiration_year = *temp;
    }
  }

  const base::Value* nickname_value = dict.Find("nickname");
  if (nickname_value) {
    {
      auto* temp = (*nickname_value).GetIfString();
      if (!temp) {
        out.nickname = absl::nullopt;
        return false;
      }
      out.nickname = *temp;
    }
  }

  const base::Value* network_value = dict.Find("network");
  if (network_value) {
    {
      auto* temp = (*network_value).GetIfString();
      if (!temp) {
        out.network = absl::nullopt;
        return false;
      }
      out.network = *temp;
    }
  }

  const base::Value* image_src_value = dict.Find("imageSrc");
  if (image_src_value) {
    {
      auto* temp = (*image_src_value).GetIfString();
      if (!temp) {
        out.image_src = absl::nullopt;
        return false;
      }
      out.image_src = *temp;
    }
  }

  const base::Value* metadata_value = dict.Find("metadata");
  if (metadata_value) {
    {
      if (!(*metadata_value).is_dict()) {
        return false;
      }
      else {
        AutofillMetadata temp;
        if (!AutofillMetadata::Populate((*metadata_value).GetDict(), temp))
          return false;
        out.metadata = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool CreditCardEntry::Populate(
    const base::Value& value, CreditCardEntry& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<CreditCardEntry> CreditCardEntry::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<CreditCardEntry>();
  if (!value.is_dict()) {
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out);
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
absl::optional<CreditCardEntry> CreditCardEntry::FromValue(const base::Value::Dict& value) {
  CreditCardEntry out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<CreditCardEntry> CreditCardEntry::FromValue(const base::Value& value) {
  CreditCardEntry out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict CreditCardEntry::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->guid) {
    to_value_result.Set("guid", *this->guid);

  }
  if (this->instrument_id) {
    to_value_result.Set("instrumentId", *this->instrument_id);

  }
  if (this->name) {
    to_value_result.Set("name", *this->name);

  }
  if (this->card_number) {
    to_value_result.Set("cardNumber", *this->card_number);

  }
  if (this->expiration_month) {
    to_value_result.Set("expirationMonth", *this->expiration_month);

  }
  if (this->expiration_year) {
    to_value_result.Set("expirationYear", *this->expiration_year);

  }
  if (this->nickname) {
    to_value_result.Set("nickname", *this->nickname);

  }
  if (this->network) {
    to_value_result.Set("network", *this->network);

  }
  if (this->image_src) {
    to_value_result.Set("imageSrc", *this->image_src);

  }
  if (this->metadata) {
    to_value_result.Set("metadata", (this->metadata)->ToValue());

  }

  return to_value_result;
}


IbanEntry::IbanEntry()
 {}

IbanEntry::~IbanEntry() = default;
IbanEntry::IbanEntry(IbanEntry&& rhs) = default;
IbanEntry& IbanEntry::operator=(IbanEntry&& rhs) = default;
IbanEntry IbanEntry::Clone() const {
  IbanEntry out;
  out.guid = guid;
  out.value = value;
  out.nickname = nickname;
  if (metadata) {
    out.metadata = metadata->Clone();
  }
  return out;
}

// static
bool IbanEntry::Populate(
    const base::Value::Dict& dict, IbanEntry& out) {
  const base::Value* guid_value = dict.Find("guid");
  if (guid_value) {
    {
      auto* temp = (*guid_value).GetIfString();
      if (!temp) {
        out.guid = absl::nullopt;
        return false;
      }
      out.guid = *temp;
    }
  }

  const base::Value* value_value = dict.Find("value");
  if (value_value) {
    {
      auto* temp = (*value_value).GetIfString();
      if (!temp) {
        out.value = absl::nullopt;
        return false;
      }
      out.value = *temp;
    }
  }

  const base::Value* nickname_value = dict.Find("nickname");
  if (nickname_value) {
    {
      auto* temp = (*nickname_value).GetIfString();
      if (!temp) {
        out.nickname = absl::nullopt;
        return false;
      }
      out.nickname = *temp;
    }
  }

  const base::Value* metadata_value = dict.Find("metadata");
  if (metadata_value) {
    {
      if (!(*metadata_value).is_dict()) {
        return false;
      }
      else {
        AutofillMetadata temp;
        if (!AutofillMetadata::Populate((*metadata_value).GetDict(), temp))
          return false;
        out.metadata = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool IbanEntry::Populate(
    const base::Value& value, IbanEntry& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<IbanEntry> IbanEntry::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<IbanEntry>();
  if (!value.is_dict()) {
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out);
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
absl::optional<IbanEntry> IbanEntry::FromValue(const base::Value::Dict& value) {
  IbanEntry out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<IbanEntry> IbanEntry::FromValue(const base::Value& value) {
  IbanEntry out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict IbanEntry::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->guid) {
    to_value_result.Set("guid", *this->guid);

  }
  if (this->value) {
    to_value_result.Set("value", *this->value);

  }
  if (this->nickname) {
    to_value_result.Set("nickname", *this->nickname);

  }
  if (this->metadata) {
    to_value_result.Set("metadata", (this->metadata)->ToValue());

  }

  return to_value_result;
}



//
// Functions
//

namespace GetAccountInfo {

base::Value::List Results::Create(const AccountInfo& account_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((account_info).ToValue());

  return create_results;
}
}  // namespace GetAccountInfo

namespace SaveAddress {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& address_value = args[0];
    {
      if (!address_value.is_dict()) {
        return absl::nullopt;
      }
      if (!AddressEntry::Populate(address_value.GetDict(), params.address)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace SaveAddress

namespace GetCountryList {

base::Value::List Results::Create(const std::vector<CountryEntry>& countries) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(countries));

  return create_results;
}
}  // namespace GetCountryList

namespace GetAddressComponents {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& country_code_value = args[0];
    {
      auto* temp = country_code_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.country_code = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const AddressComponents& components) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((components).ToValue());

  return create_results;
}
}  // namespace GetAddressComponents

namespace GetAddressList {

base::Value::List Results::Create(const std::vector<AddressEntry>& entries) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(entries));

  return create_results;
}
}  // namespace GetAddressList

namespace SaveCreditCard {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& card_value = args[0];
    {
      if (!card_value.is_dict()) {
        return absl::nullopt;
      }
      if (!CreditCardEntry::Populate(card_value.GetDict(), params.card)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace SaveCreditCard

namespace SaveIban {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& iban_value = args[0];
    {
      if (!iban_value.is_dict()) {
        return absl::nullopt;
      }
      if (!IbanEntry::Populate(iban_value.GetDict(), params.iban)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace SaveIban

namespace RemoveEntry {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& guid_value = args[0];
    {
      auto* temp = guid_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.guid = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace RemoveEntry

namespace GetCreditCardList {

base::Value::List Results::Create(const std::vector<CreditCardEntry>& entries) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(entries));

  return create_results;
}
}  // namespace GetCreditCardList

namespace GetIbanList {

base::Value::List Results::Create(const std::vector<IbanEntry>& entries) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(entries));

  return create_results;
}
}  // namespace GetIbanList

namespace IsValidIban {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& iban_value_value = args[0];
    {
      auto* temp = iban_value_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.iban_value = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool is_valid) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(is_valid);

  return create_results;
}
}  // namespace IsValidIban

namespace MaskCreditCard {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& guid_value = args[0];
    {
      auto* temp = guid_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.guid = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace MaskCreditCard

namespace MigrateCreditCards {

}  // namespace MigrateCreditCards

namespace LogServerCardLinkClicked {

}  // namespace LogServerCardLinkClicked

namespace SetCreditCardFIDOAuthEnabledState {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& enabled_value = args[0];
    {
      auto temp = enabled_value.GetIfBool();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.enabled = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace SetCreditCardFIDOAuthEnabledState

namespace AddVirtualCard {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& card_id_value = args[0];
    {
      auto* temp = card_id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.card_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace AddVirtualCard

namespace RemoveVirtualCard {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& card_id_value = args[0];
    {
      auto* temp = card_id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.card_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace RemoveVirtualCard

namespace AuthenticateUserAndFlipMandatoryAuthToggle {

}  // namespace AuthenticateUserAndFlipMandatoryAuthToggle

namespace GetLocalCard {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& guid_value = args[0];
    {
      auto* temp = guid_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.guid = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const CreditCardEntry& card) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((card).ToValue());

  return create_results;
}
}  // namespace GetLocalCard

namespace CheckIfDeviceAuthAvailable {

base::Value::List Results::Create(bool is_device_auth_available) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(is_device_auth_available);

  return create_results;
}
}  // namespace CheckIfDeviceAuthAvailable

//
// Events
//

namespace OnPersonalDataChanged {

const char kEventName[] = "autofillPrivate.onPersonalDataChanged";

base::Value::List Create(const std::vector<AddressEntry>& address_entries, const std::vector<CreditCardEntry>& credit_card_entries, const std::vector<IbanEntry>& ibans, const AccountInfo& account_info) {
  base::Value::List create_results;
  create_results.reserve(4);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(address_entries));

  create_results.Append(json_schema_compiler::util::CreateValueFromArray(credit_card_entries));

  create_results.Append(json_schema_compiler::util::CreateValueFromArray(ibans));

  create_results.Append((account_info).ToValue());

  return create_results;
}

}  // namespace OnPersonalDataChanged

}  // namespace autofill_private
}  // namespace api
}  // namespace extensions

