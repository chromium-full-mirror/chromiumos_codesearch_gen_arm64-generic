// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include "headless/public/devtools/domains/types_fed_cm.h"

#include "base/values.h"
#include "headless/public/devtools/internal/type_conversions_fed_cm.h"

namespace headless {

namespace fed_cm {

std::unique_ptr<Account> Account::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("Account");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<Account> result(new Account());
  errors->Push();
  errors->SetName("Account");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* account_id_value = dict.Find("accountId");
  if (account_id_value) {
    errors->SetName("accountId");
    result->account_id_ = internal::FromValue<std::string>::Parse(*account_id_value, errors);
  } else {
    errors->AddError("required property missing: accountId");
  }
  const base::Value* email_value = dict.Find("email");
  if (email_value) {
    errors->SetName("email");
    result->email_ = internal::FromValue<std::string>::Parse(*email_value, errors);
  } else {
    errors->AddError("required property missing: email");
  }
  const base::Value* name_value = dict.Find("name");
  if (name_value) {
    errors->SetName("name");
    result->name_ = internal::FromValue<std::string>::Parse(*name_value, errors);
  } else {
    errors->AddError("required property missing: name");
  }
  const base::Value* given_name_value = dict.Find("givenName");
  if (given_name_value) {
    errors->SetName("givenName");
    result->given_name_ = internal::FromValue<std::string>::Parse(*given_name_value, errors);
  } else {
    errors->AddError("required property missing: givenName");
  }
  const base::Value* picture_url_value = dict.Find("pictureUrl");
  if (picture_url_value) {
    errors->SetName("pictureUrl");
    result->picture_url_ = internal::FromValue<std::string>::Parse(*picture_url_value, errors);
  } else {
    errors->AddError("required property missing: pictureUrl");
  }
  const base::Value* idp_config_url_value = dict.Find("idpConfigUrl");
  if (idp_config_url_value) {
    errors->SetName("idpConfigUrl");
    result->idp_config_url_ = internal::FromValue<std::string>::Parse(*idp_config_url_value, errors);
  } else {
    errors->AddError("required property missing: idpConfigUrl");
  }
  const base::Value* idp_login_url_value = dict.Find("idpLoginUrl");
  if (idp_login_url_value) {
    errors->SetName("idpLoginUrl");
    result->idp_login_url_ = internal::FromValue<std::string>::Parse(*idp_login_url_value, errors);
  } else {
    errors->AddError("required property missing: idpLoginUrl");
  }
  const base::Value* login_state_value = dict.Find("loginState");
  if (login_state_value) {
    errors->SetName("loginState");
    result->login_state_ = internal::FromValue<::headless::fed_cm::LoginState>::Parse(*login_state_value, errors);
  } else {
    errors->AddError("required property missing: loginState");
  }
  const base::Value* terms_of_service_url_value = dict.Find("termsOfServiceUrl");
  if (terms_of_service_url_value) {
    errors->SetName("termsOfServiceUrl");
    result->terms_of_service_url_ = internal::FromValue<std::string>::Parse(*terms_of_service_url_value, errors);
  }
  const base::Value* privacy_policy_url_value = dict.Find("privacyPolicyUrl");
  if (privacy_policy_url_value) {
    errors->SetName("privacyPolicyUrl");
    result->privacy_policy_url_ = internal::FromValue<std::string>::Parse(*privacy_policy_url_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value Account::Serialize() const {
  base::Value::Dict result;
  result.Set("accountId", internal::ToValue(account_id_));
  result.Set("email", internal::ToValue(email_));
  result.Set("name", internal::ToValue(name_));
  result.Set("givenName", internal::ToValue(given_name_));
  result.Set("pictureUrl", internal::ToValue(picture_url_));
  result.Set("idpConfigUrl", internal::ToValue(idp_config_url_));
  result.Set("idpLoginUrl", internal::ToValue(idp_login_url_));
  result.Set("loginState", internal::ToValue(login_state_));
  if (terms_of_service_url_)
    result.Set("termsOfServiceUrl", internal::ToValue(terms_of_service_url_.value()));
  if (privacy_policy_url_)
    result.Set("privacyPolicyUrl", internal::ToValue(privacy_policy_url_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<Account> Account::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<Account> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<EnableParams> EnableParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("EnableParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<EnableParams> result(new EnableParams());
  errors->Push();
  errors->SetName("EnableParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* disable_rejection_delay_value = dict.Find("disableRejectionDelay");
  if (disable_rejection_delay_value) {
    errors->SetName("disableRejectionDelay");
    result->disable_rejection_delay_ = internal::FromValue<bool>::Parse(*disable_rejection_delay_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value EnableParams::Serialize() const {
  base::Value::Dict result;
  if (disable_rejection_delay_)
    result.Set("disableRejectionDelay", internal::ToValue(disable_rejection_delay_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<EnableParams> EnableParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<EnableParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<EnableResult> EnableResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("EnableResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<EnableResult> result(new EnableResult());
  errors->Push();
  errors->SetName("EnableResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value EnableResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<EnableResult> EnableResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<EnableResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<DisableParams> DisableParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("DisableParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<DisableParams> result(new DisableParams());
  errors->Push();
  errors->SetName("DisableParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value DisableParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<DisableParams> DisableParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<DisableParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<DisableResult> DisableResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("DisableResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<DisableResult> result(new DisableResult());
  errors->Push();
  errors->SetName("DisableResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value DisableResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<DisableResult> DisableResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<DisableResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SelectAccountParams> SelectAccountParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SelectAccountParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SelectAccountParams> result(new SelectAccountParams());
  errors->Push();
  errors->SetName("SelectAccountParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* dialog_id_value = dict.Find("dialogId");
  if (dialog_id_value) {
    errors->SetName("dialogId");
    result->dialog_id_ = internal::FromValue<std::string>::Parse(*dialog_id_value, errors);
  } else {
    errors->AddError("required property missing: dialogId");
  }
  const base::Value* account_index_value = dict.Find("accountIndex");
  if (account_index_value) {
    errors->SetName("accountIndex");
    result->account_index_ = internal::FromValue<int>::Parse(*account_index_value, errors);
  } else {
    errors->AddError("required property missing: accountIndex");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SelectAccountParams::Serialize() const {
  base::Value::Dict result;
  result.Set("dialogId", internal::ToValue(dialog_id_));
  result.Set("accountIndex", internal::ToValue(account_index_));
  return base::Value(std::move(result));
}

std::unique_ptr<SelectAccountParams> SelectAccountParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SelectAccountParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SelectAccountResult> SelectAccountResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SelectAccountResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SelectAccountResult> result(new SelectAccountResult());
  errors->Push();
  errors->SetName("SelectAccountResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SelectAccountResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SelectAccountResult> SelectAccountResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SelectAccountResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ConfirmIdpLoginParams> ConfirmIdpLoginParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ConfirmIdpLoginParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ConfirmIdpLoginParams> result(new ConfirmIdpLoginParams());
  errors->Push();
  errors->SetName("ConfirmIdpLoginParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* dialog_id_value = dict.Find("dialogId");
  if (dialog_id_value) {
    errors->SetName("dialogId");
    result->dialog_id_ = internal::FromValue<std::string>::Parse(*dialog_id_value, errors);
  } else {
    errors->AddError("required property missing: dialogId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ConfirmIdpLoginParams::Serialize() const {
  base::Value::Dict result;
  result.Set("dialogId", internal::ToValue(dialog_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<ConfirmIdpLoginParams> ConfirmIdpLoginParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ConfirmIdpLoginParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ConfirmIdpLoginResult> ConfirmIdpLoginResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ConfirmIdpLoginResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ConfirmIdpLoginResult> result(new ConfirmIdpLoginResult());
  errors->Push();
  errors->SetName("ConfirmIdpLoginResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ConfirmIdpLoginResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<ConfirmIdpLoginResult> ConfirmIdpLoginResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ConfirmIdpLoginResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<DismissDialogParams> DismissDialogParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("DismissDialogParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<DismissDialogParams> result(new DismissDialogParams());
  errors->Push();
  errors->SetName("DismissDialogParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* dialog_id_value = dict.Find("dialogId");
  if (dialog_id_value) {
    errors->SetName("dialogId");
    result->dialog_id_ = internal::FromValue<std::string>::Parse(*dialog_id_value, errors);
  } else {
    errors->AddError("required property missing: dialogId");
  }
  const base::Value* trigger_cooldown_value = dict.Find("triggerCooldown");
  if (trigger_cooldown_value) {
    errors->SetName("triggerCooldown");
    result->trigger_cooldown_ = internal::FromValue<bool>::Parse(*trigger_cooldown_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value DismissDialogParams::Serialize() const {
  base::Value::Dict result;
  result.Set("dialogId", internal::ToValue(dialog_id_));
  if (trigger_cooldown_)
    result.Set("triggerCooldown", internal::ToValue(trigger_cooldown_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<DismissDialogParams> DismissDialogParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<DismissDialogParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<DismissDialogResult> DismissDialogResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("DismissDialogResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<DismissDialogResult> result(new DismissDialogResult());
  errors->Push();
  errors->SetName("DismissDialogResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value DismissDialogResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<DismissDialogResult> DismissDialogResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<DismissDialogResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ResetCooldownParams> ResetCooldownParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ResetCooldownParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ResetCooldownParams> result(new ResetCooldownParams());
  errors->Push();
  errors->SetName("ResetCooldownParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ResetCooldownParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<ResetCooldownParams> ResetCooldownParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ResetCooldownParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ResetCooldownResult> ResetCooldownResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ResetCooldownResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ResetCooldownResult> result(new ResetCooldownResult());
  errors->Push();
  errors->SetName("ResetCooldownResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ResetCooldownResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<ResetCooldownResult> ResetCooldownResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ResetCooldownResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<DialogShownParams> DialogShownParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("DialogShownParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<DialogShownParams> result(new DialogShownParams());
  errors->Push();
  errors->SetName("DialogShownParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* dialog_id_value = dict.Find("dialogId");
  if (dialog_id_value) {
    errors->SetName("dialogId");
    result->dialog_id_ = internal::FromValue<std::string>::Parse(*dialog_id_value, errors);
  } else {
    errors->AddError("required property missing: dialogId");
  }
  const base::Value* dialog_type_value = dict.Find("dialogType");
  if (dialog_type_value) {
    errors->SetName("dialogType");
    result->dialog_type_ = internal::FromValue<::headless::fed_cm::DialogType>::Parse(*dialog_type_value, errors);
  } else {
    errors->AddError("required property missing: dialogType");
  }
  const base::Value* accounts_value = dict.Find("accounts");
  if (accounts_value) {
    errors->SetName("accounts");
    result->accounts_ = internal::FromValue<std::vector<std::unique_ptr<::headless::fed_cm::Account>>>::Parse(*accounts_value, errors);
  } else {
    errors->AddError("required property missing: accounts");
  }
  const base::Value* title_value = dict.Find("title");
  if (title_value) {
    errors->SetName("title");
    result->title_ = internal::FromValue<std::string>::Parse(*title_value, errors);
  } else {
    errors->AddError("required property missing: title");
  }
  const base::Value* subtitle_value = dict.Find("subtitle");
  if (subtitle_value) {
    errors->SetName("subtitle");
    result->subtitle_ = internal::FromValue<std::string>::Parse(*subtitle_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value DialogShownParams::Serialize() const {
  base::Value::Dict result;
  result.Set("dialogId", internal::ToValue(dialog_id_));
  result.Set("dialogType", internal::ToValue(dialog_type_));
  result.Set("accounts", internal::ToValue(accounts_));
  result.Set("title", internal::ToValue(title_));
  if (subtitle_)
    result.Set("subtitle", internal::ToValue(subtitle_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<DialogShownParams> DialogShownParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<DialogShownParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


}  // namespace fed_cm
}  // namespace headless
