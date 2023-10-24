// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include "headless/public/devtools/domains/types_media.h"

#include "base/values.h"
#include "headless/public/devtools/internal/type_conversions_media.h"

namespace headless {

namespace media {

std::unique_ptr<PlayerMessage> PlayerMessage::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("PlayerMessage");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<PlayerMessage> result(new PlayerMessage());
  errors->Push();
  errors->SetName("PlayerMessage");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* level_value = dict.Find("level");
  if (level_value) {
    errors->SetName("level");
    result->level_ = internal::FromValue<::headless::media::PlayerMessageLevel>::Parse(*level_value, errors);
  } else {
    errors->AddError("required property missing: level");
  }
  const base::Value* message_value = dict.Find("message");
  if (message_value) {
    errors->SetName("message");
    result->message_ = internal::FromValue<std::string>::Parse(*message_value, errors);
  } else {
    errors->AddError("required property missing: message");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value PlayerMessage::Serialize() const {
  base::Value::Dict result;
  result.Set("level", internal::ToValue(level_));
  result.Set("message", internal::ToValue(message_));
  return base::Value(std::move(result));
}

std::unique_ptr<PlayerMessage> PlayerMessage::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<PlayerMessage> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<PlayerProperty> PlayerProperty::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("PlayerProperty");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<PlayerProperty> result(new PlayerProperty());
  errors->Push();
  errors->SetName("PlayerProperty");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* name_value = dict.Find("name");
  if (name_value) {
    errors->SetName("name");
    result->name_ = internal::FromValue<std::string>::Parse(*name_value, errors);
  } else {
    errors->AddError("required property missing: name");
  }
  const base::Value* value_value = dict.Find("value");
  if (value_value) {
    errors->SetName("value");
    result->value_ = internal::FromValue<std::string>::Parse(*value_value, errors);
  } else {
    errors->AddError("required property missing: value");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value PlayerProperty::Serialize() const {
  base::Value::Dict result;
  result.Set("name", internal::ToValue(name_));
  result.Set("value", internal::ToValue(value_));
  return base::Value(std::move(result));
}

std::unique_ptr<PlayerProperty> PlayerProperty::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<PlayerProperty> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<PlayerEvent> PlayerEvent::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("PlayerEvent");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<PlayerEvent> result(new PlayerEvent());
  errors->Push();
  errors->SetName("PlayerEvent");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* timestamp_value = dict.Find("timestamp");
  if (timestamp_value) {
    errors->SetName("timestamp");
    result->timestamp_ = internal::FromValue<double>::Parse(*timestamp_value, errors);
  } else {
    errors->AddError("required property missing: timestamp");
  }
  const base::Value* value_value = dict.Find("value");
  if (value_value) {
    errors->SetName("value");
    result->value_ = internal::FromValue<std::string>::Parse(*value_value, errors);
  } else {
    errors->AddError("required property missing: value");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value PlayerEvent::Serialize() const {
  base::Value::Dict result;
  result.Set("timestamp", internal::ToValue(timestamp_));
  result.Set("value", internal::ToValue(value_));
  return base::Value(std::move(result));
}

std::unique_ptr<PlayerEvent> PlayerEvent::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<PlayerEvent> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<PlayerErrorSourceLocation> PlayerErrorSourceLocation::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("PlayerErrorSourceLocation");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<PlayerErrorSourceLocation> result(new PlayerErrorSourceLocation());
  errors->Push();
  errors->SetName("PlayerErrorSourceLocation");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* file_value = dict.Find("file");
  if (file_value) {
    errors->SetName("file");
    result->file_ = internal::FromValue<std::string>::Parse(*file_value, errors);
  } else {
    errors->AddError("required property missing: file");
  }
  const base::Value* line_value = dict.Find("line");
  if (line_value) {
    errors->SetName("line");
    result->line_ = internal::FromValue<int>::Parse(*line_value, errors);
  } else {
    errors->AddError("required property missing: line");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value PlayerErrorSourceLocation::Serialize() const {
  base::Value::Dict result;
  result.Set("file", internal::ToValue(file_));
  result.Set("line", internal::ToValue(line_));
  return base::Value(std::move(result));
}

std::unique_ptr<PlayerErrorSourceLocation> PlayerErrorSourceLocation::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<PlayerErrorSourceLocation> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<PlayerError> PlayerError::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("PlayerError");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<PlayerError> result(new PlayerError());
  errors->Push();
  errors->SetName("PlayerError");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* error_type_value = dict.Find("errorType");
  if (error_type_value) {
    errors->SetName("errorType");
    result->error_type_ = internal::FromValue<std::string>::Parse(*error_type_value, errors);
  } else {
    errors->AddError("required property missing: errorType");
  }
  const base::Value* code_value = dict.Find("code");
  if (code_value) {
    errors->SetName("code");
    result->code_ = internal::FromValue<int>::Parse(*code_value, errors);
  } else {
    errors->AddError("required property missing: code");
  }
  const base::Value* stack_value = dict.Find("stack");
  if (stack_value) {
    errors->SetName("stack");
    result->stack_ = internal::FromValue<std::vector<std::unique_ptr<::headless::media::PlayerErrorSourceLocation>>>::Parse(*stack_value, errors);
  } else {
    errors->AddError("required property missing: stack");
  }
  const base::Value* cause_value = dict.Find("cause");
  if (cause_value) {
    errors->SetName("cause");
    result->cause_ = internal::FromValue<std::vector<std::unique_ptr<::headless::media::PlayerError>>>::Parse(*cause_value, errors);
  } else {
    errors->AddError("required property missing: cause");
  }
  const base::Value* data_value = dict.Find("data");
  if (data_value) {
    errors->SetName("data");
    result->data_ = internal::FromValue<base::Value>::Parse(*data_value, errors);
  } else {
    errors->AddError("required property missing: data");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value PlayerError::Serialize() const {
  base::Value::Dict result;
  result.Set("errorType", internal::ToValue(error_type_));
  result.Set("code", internal::ToValue(code_));
  result.Set("stack", internal::ToValue(stack_));
  result.Set("cause", internal::ToValue(cause_));
  result.Set("data", internal::ToValue(*data_));
  return base::Value(std::move(result));
}

std::unique_ptr<PlayerError> PlayerError::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<PlayerError> result = Parse(Serialize(), &errors);
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
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value EnableParams::Serialize() const {
  base::Value::Dict result;
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


std::unique_ptr<PlayerPropertiesChangedParams> PlayerPropertiesChangedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("PlayerPropertiesChangedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<PlayerPropertiesChangedParams> result(new PlayerPropertiesChangedParams());
  errors->Push();
  errors->SetName("PlayerPropertiesChangedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* player_id_value = dict.Find("playerId");
  if (player_id_value) {
    errors->SetName("playerId");
    result->player_id_ = internal::FromValue<std::string>::Parse(*player_id_value, errors);
  } else {
    errors->AddError("required property missing: playerId");
  }
  const base::Value* properties_value = dict.Find("properties");
  if (properties_value) {
    errors->SetName("properties");
    result->properties_ = internal::FromValue<std::vector<std::unique_ptr<::headless::media::PlayerProperty>>>::Parse(*properties_value, errors);
  } else {
    errors->AddError("required property missing: properties");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value PlayerPropertiesChangedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("playerId", internal::ToValue(player_id_));
  result.Set("properties", internal::ToValue(properties_));
  return base::Value(std::move(result));
}

std::unique_ptr<PlayerPropertiesChangedParams> PlayerPropertiesChangedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<PlayerPropertiesChangedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<PlayerEventsAddedParams> PlayerEventsAddedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("PlayerEventsAddedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<PlayerEventsAddedParams> result(new PlayerEventsAddedParams());
  errors->Push();
  errors->SetName("PlayerEventsAddedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* player_id_value = dict.Find("playerId");
  if (player_id_value) {
    errors->SetName("playerId");
    result->player_id_ = internal::FromValue<std::string>::Parse(*player_id_value, errors);
  } else {
    errors->AddError("required property missing: playerId");
  }
  const base::Value* events_value = dict.Find("events");
  if (events_value) {
    errors->SetName("events");
    result->events_ = internal::FromValue<std::vector<std::unique_ptr<::headless::media::PlayerEvent>>>::Parse(*events_value, errors);
  } else {
    errors->AddError("required property missing: events");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value PlayerEventsAddedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("playerId", internal::ToValue(player_id_));
  result.Set("events", internal::ToValue(events_));
  return base::Value(std::move(result));
}

std::unique_ptr<PlayerEventsAddedParams> PlayerEventsAddedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<PlayerEventsAddedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<PlayerMessagesLoggedParams> PlayerMessagesLoggedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("PlayerMessagesLoggedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<PlayerMessagesLoggedParams> result(new PlayerMessagesLoggedParams());
  errors->Push();
  errors->SetName("PlayerMessagesLoggedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* player_id_value = dict.Find("playerId");
  if (player_id_value) {
    errors->SetName("playerId");
    result->player_id_ = internal::FromValue<std::string>::Parse(*player_id_value, errors);
  } else {
    errors->AddError("required property missing: playerId");
  }
  const base::Value* messages_value = dict.Find("messages");
  if (messages_value) {
    errors->SetName("messages");
    result->messages_ = internal::FromValue<std::vector<std::unique_ptr<::headless::media::PlayerMessage>>>::Parse(*messages_value, errors);
  } else {
    errors->AddError("required property missing: messages");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value PlayerMessagesLoggedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("playerId", internal::ToValue(player_id_));
  result.Set("messages", internal::ToValue(messages_));
  return base::Value(std::move(result));
}

std::unique_ptr<PlayerMessagesLoggedParams> PlayerMessagesLoggedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<PlayerMessagesLoggedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<PlayerErrorsRaisedParams> PlayerErrorsRaisedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("PlayerErrorsRaisedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<PlayerErrorsRaisedParams> result(new PlayerErrorsRaisedParams());
  errors->Push();
  errors->SetName("PlayerErrorsRaisedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* player_id_value = dict.Find("playerId");
  if (player_id_value) {
    errors->SetName("playerId");
    result->player_id_ = internal::FromValue<std::string>::Parse(*player_id_value, errors);
  } else {
    errors->AddError("required property missing: playerId");
  }
  const base::Value* errors_value = dict.Find("errors");
  if (errors_value) {
    errors->SetName("errors");
    result->errors_ = internal::FromValue<std::vector<std::unique_ptr<::headless::media::PlayerError>>>::Parse(*errors_value, errors);
  } else {
    errors->AddError("required property missing: errors");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value PlayerErrorsRaisedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("playerId", internal::ToValue(player_id_));
  result.Set("errors", internal::ToValue(errors_));
  return base::Value(std::move(result));
}

std::unique_ptr<PlayerErrorsRaisedParams> PlayerErrorsRaisedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<PlayerErrorsRaisedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<PlayersCreatedParams> PlayersCreatedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("PlayersCreatedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<PlayersCreatedParams> result(new PlayersCreatedParams());
  errors->Push();
  errors->SetName("PlayersCreatedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* players_value = dict.Find("players");
  if (players_value) {
    errors->SetName("players");
    result->players_ = internal::FromValue<std::vector<std::string>>::Parse(*players_value, errors);
  } else {
    errors->AddError("required property missing: players");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value PlayersCreatedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("players", internal::ToValue(players_));
  return base::Value(std::move(result));
}

std::unique_ptr<PlayersCreatedParams> PlayersCreatedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<PlayersCreatedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


}  // namespace media
}  // namespace headless
