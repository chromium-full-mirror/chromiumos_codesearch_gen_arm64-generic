// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_TYPES_MEDIA_H_
#define HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_TYPES_MEDIA_H_

#include "base/values.h"
#include "third_party/abseil-cpp/absl/types/optional.h"
#include "third_party/inspector_protocol/crdtp/chromium/protocol_traits.h"

#include "headless/public/devtools/internal/types_forward_declarations_media.h"
#include "headless/public/headless_export.h"

namespace headless {
namespace protocol {
using Binary = crdtp::Binary;
}

class ErrorReporter;

namespace media {

// Have one type per entry in MediaLogRecord::Type
// Corresponds to kMessage
class HEADLESS_EXPORT PlayerMessage {
 public:
  static std::unique_ptr<PlayerMessage> Parse(const base::Value& value, ErrorReporter* errors);

  PlayerMessage(const PlayerMessage&) = delete;
  PlayerMessage& operator=(const PlayerMessage&) = delete;

  ~PlayerMessage() { }


  // Keep in sync with MediaLogMessageLevel
  // We are currently keeping the message level 'error' separate from the
  // PlayerError type because right now they represent different things,
  // this one being a DVLOG(ERROR) style log message that gets printed
  // based on what log level is selected in the UI, and the other is a
  // representation of a media::PipelineStatus object. Soon however we're
  // going to be moving away from using PipelineStatus for errors and
  // introducing a new error type which should hopefully let us integrate
  // the error log level into the PlayerError type.
  ::headless::media::PlayerMessageLevel GetLevel() const { return level_; }
  void SetLevel(::headless::media::PlayerMessageLevel value) { level_ = value; }

  std::string GetMessage() const { return message_; }
  void SetMessage(const std::string& value) { message_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<PlayerMessage> Clone() const;

  template<int STATE>
  class PlayerMessageBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kLevelSet = 1 << 1,
    kMessageSet = 1 << 2,
      kAllRequiredFieldsSet = (kLevelSet | kMessageSet | 0)
    };

    PlayerMessageBuilder<STATE | kLevelSet>& SetLevel(::headless::media::PlayerMessageLevel value) {
      static_assert(!(STATE & kLevelSet), "property level should not have already been set");
      result_->SetLevel(value);
      return CastState<kLevelSet>();
    }

    PlayerMessageBuilder<STATE | kMessageSet>& SetMessage(const std::string& value) {
      static_assert(!(STATE & kMessageSet), "property message should not have already been set");
      result_->SetMessage(value);
      return CastState<kMessageSet>();
    }

    std::unique_ptr<PlayerMessage> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class PlayerMessage;
    PlayerMessageBuilder() : result_(new PlayerMessage()) { }

    template<int STEP> PlayerMessageBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<PlayerMessageBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<PlayerMessage> result_;
  };

  static PlayerMessageBuilder<0> Builder() {
    return PlayerMessageBuilder<0>();
  }

 private:
  PlayerMessage() { }

  ::headless::media::PlayerMessageLevel level_;
  std::string message_;
};


// Corresponds to kMediaPropertyChange
class HEADLESS_EXPORT PlayerProperty {
 public:
  static std::unique_ptr<PlayerProperty> Parse(const base::Value& value, ErrorReporter* errors);

  PlayerProperty(const PlayerProperty&) = delete;
  PlayerProperty& operator=(const PlayerProperty&) = delete;

  ~PlayerProperty() { }


  std::string GetName() const { return name_; }
  void SetName(const std::string& value) { name_ = value; }

  std::string GetValue() const { return value_; }
  void SetValue(const std::string& value) { value_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<PlayerProperty> Clone() const;

  template<int STATE>
  class PlayerPropertyBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kNameSet = 1 << 1,
    kValueSet = 1 << 2,
      kAllRequiredFieldsSet = (kNameSet | kValueSet | 0)
    };

    PlayerPropertyBuilder<STATE | kNameSet>& SetName(const std::string& value) {
      static_assert(!(STATE & kNameSet), "property name should not have already been set");
      result_->SetName(value);
      return CastState<kNameSet>();
    }

    PlayerPropertyBuilder<STATE | kValueSet>& SetValue(const std::string& value) {
      static_assert(!(STATE & kValueSet), "property value should not have already been set");
      result_->SetValue(value);
      return CastState<kValueSet>();
    }

    std::unique_ptr<PlayerProperty> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class PlayerProperty;
    PlayerPropertyBuilder() : result_(new PlayerProperty()) { }

    template<int STEP> PlayerPropertyBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<PlayerPropertyBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<PlayerProperty> result_;
  };

  static PlayerPropertyBuilder<0> Builder() {
    return PlayerPropertyBuilder<0>();
  }

 private:
  PlayerProperty() { }

  std::string name_;
  std::string value_;
};


// Corresponds to kMediaEventTriggered
class HEADLESS_EXPORT PlayerEvent {
 public:
  static std::unique_ptr<PlayerEvent> Parse(const base::Value& value, ErrorReporter* errors);

  PlayerEvent(const PlayerEvent&) = delete;
  PlayerEvent& operator=(const PlayerEvent&) = delete;

  ~PlayerEvent() { }


  double GetTimestamp() const { return timestamp_; }
  void SetTimestamp(double value) { timestamp_ = value; }

  std::string GetValue() const { return value_; }
  void SetValue(const std::string& value) { value_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<PlayerEvent> Clone() const;

  template<int STATE>
  class PlayerEventBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kTimestampSet = 1 << 1,
    kValueSet = 1 << 2,
      kAllRequiredFieldsSet = (kTimestampSet | kValueSet | 0)
    };

    PlayerEventBuilder<STATE | kTimestampSet>& SetTimestamp(double value) {
      static_assert(!(STATE & kTimestampSet), "property timestamp should not have already been set");
      result_->SetTimestamp(value);
      return CastState<kTimestampSet>();
    }

    PlayerEventBuilder<STATE | kValueSet>& SetValue(const std::string& value) {
      static_assert(!(STATE & kValueSet), "property value should not have already been set");
      result_->SetValue(value);
      return CastState<kValueSet>();
    }

    std::unique_ptr<PlayerEvent> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class PlayerEvent;
    PlayerEventBuilder() : result_(new PlayerEvent()) { }

    template<int STEP> PlayerEventBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<PlayerEventBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<PlayerEvent> result_;
  };

  static PlayerEventBuilder<0> Builder() {
    return PlayerEventBuilder<0>();
  }

 private:
  PlayerEvent() { }

  double timestamp_;
  std::string value_;
};


// Represents logged source line numbers reported in an error.
// NOTE: file and line are from chromium c++ implementation code, not js.
class HEADLESS_EXPORT PlayerErrorSourceLocation {
 public:
  static std::unique_ptr<PlayerErrorSourceLocation> Parse(const base::Value& value, ErrorReporter* errors);

  PlayerErrorSourceLocation(const PlayerErrorSourceLocation&) = delete;
  PlayerErrorSourceLocation& operator=(const PlayerErrorSourceLocation&) = delete;

  ~PlayerErrorSourceLocation() { }


  std::string GetFile() const { return file_; }
  void SetFile(const std::string& value) { file_ = value; }

  int GetLine() const { return line_; }
  void SetLine(int value) { line_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<PlayerErrorSourceLocation> Clone() const;

  template<int STATE>
  class PlayerErrorSourceLocationBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kFileSet = 1 << 1,
    kLineSet = 1 << 2,
      kAllRequiredFieldsSet = (kFileSet | kLineSet | 0)
    };

    PlayerErrorSourceLocationBuilder<STATE | kFileSet>& SetFile(const std::string& value) {
      static_assert(!(STATE & kFileSet), "property file should not have already been set");
      result_->SetFile(value);
      return CastState<kFileSet>();
    }

    PlayerErrorSourceLocationBuilder<STATE | kLineSet>& SetLine(int value) {
      static_assert(!(STATE & kLineSet), "property line should not have already been set");
      result_->SetLine(value);
      return CastState<kLineSet>();
    }

    std::unique_ptr<PlayerErrorSourceLocation> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class PlayerErrorSourceLocation;
    PlayerErrorSourceLocationBuilder() : result_(new PlayerErrorSourceLocation()) { }

    template<int STEP> PlayerErrorSourceLocationBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<PlayerErrorSourceLocationBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<PlayerErrorSourceLocation> result_;
  };

  static PlayerErrorSourceLocationBuilder<0> Builder() {
    return PlayerErrorSourceLocationBuilder<0>();
  }

 private:
  PlayerErrorSourceLocation() { }

  std::string file_;
  int line_;
};


// Corresponds to kMediaError
class HEADLESS_EXPORT PlayerError {
 public:
  static std::unique_ptr<PlayerError> Parse(const base::Value& value, ErrorReporter* errors);

  PlayerError(const PlayerError&) = delete;
  PlayerError& operator=(const PlayerError&) = delete;

  ~PlayerError() { }


  std::string GetErrorType() const { return error_type_; }
  void SetErrorType(const std::string& value) { error_type_ = value; }

  // Code is the numeric enum entry for a specific set of error codes, such
  // as PipelineStatusCodes in media/base/pipeline_status.h
  int GetCode() const { return code_; }
  void SetCode(int value) { code_ = value; }

  // A trace of where this error was caused / where it passed through.
  const std::vector<std::unique_ptr<::headless::media::PlayerErrorSourceLocation>>* GetStack() const { return &stack_; }
  void SetStack(std::vector<std::unique_ptr<::headless::media::PlayerErrorSourceLocation>> value) { stack_ = std::move(value); }

  // Errors potentially have a root cause error, ie, a DecoderError might be
  // caused by an WindowsError
  const std::vector<std::unique_ptr<::headless::media::PlayerError>>* GetCause() const { return &cause_; }
  void SetCause(std::vector<std::unique_ptr<::headless::media::PlayerError>> value) { cause_ = std::move(value); }

  // Extra data attached to an error, such as an HRESULT, Video Codec, etc.
  const base::Value* GetData() const { return data_.get(); }
  void SetData(std::unique_ptr<base::Value> value) { data_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<PlayerError> Clone() const;

  template<int STATE>
  class PlayerErrorBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kErrorTypeSet = 1 << 1,
    kCodeSet = 1 << 2,
    kStackSet = 1 << 3,
    kCauseSet = 1 << 4,
    kDataSet = 1 << 5,
      kAllRequiredFieldsSet = (kErrorTypeSet | kCodeSet | kStackSet | kCauseSet | kDataSet | 0)
    };

    PlayerErrorBuilder<STATE | kErrorTypeSet>& SetErrorType(const std::string& value) {
      static_assert(!(STATE & kErrorTypeSet), "property errorType should not have already been set");
      result_->SetErrorType(value);
      return CastState<kErrorTypeSet>();
    }

    PlayerErrorBuilder<STATE | kCodeSet>& SetCode(int value) {
      static_assert(!(STATE & kCodeSet), "property code should not have already been set");
      result_->SetCode(value);
      return CastState<kCodeSet>();
    }

    PlayerErrorBuilder<STATE | kStackSet>& SetStack(std::vector<std::unique_ptr<::headless::media::PlayerErrorSourceLocation>> value) {
      static_assert(!(STATE & kStackSet), "property stack should not have already been set");
      result_->SetStack(std::move(value));
      return CastState<kStackSet>();
    }

    PlayerErrorBuilder<STATE | kCauseSet>& SetCause(std::vector<std::unique_ptr<::headless::media::PlayerError>> value) {
      static_assert(!(STATE & kCauseSet), "property cause should not have already been set");
      result_->SetCause(std::move(value));
      return CastState<kCauseSet>();
    }

    PlayerErrorBuilder<STATE | kDataSet>& SetData(std::unique_ptr<base::Value> value) {
      static_assert(!(STATE & kDataSet), "property data should not have already been set");
      result_->SetData(std::move(value));
      return CastState<kDataSet>();
    }

    std::unique_ptr<PlayerError> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class PlayerError;
    PlayerErrorBuilder() : result_(new PlayerError()) { }

    template<int STEP> PlayerErrorBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<PlayerErrorBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<PlayerError> result_;
  };

  static PlayerErrorBuilder<0> Builder() {
    return PlayerErrorBuilder<0>();
  }

 private:
  PlayerError() { }

  std::string error_type_;
  int code_;
  std::vector<std::unique_ptr<::headless::media::PlayerErrorSourceLocation>> stack_;
  std::vector<std::unique_ptr<::headless::media::PlayerError>> cause_;
  std::unique_ptr<base::Value> data_;
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


// Parameters for the PlayerPropertiesChanged event.
class HEADLESS_EXPORT PlayerPropertiesChangedParams {
 public:
  static std::unique_ptr<PlayerPropertiesChangedParams> Parse(const base::Value& value, ErrorReporter* errors);

  PlayerPropertiesChangedParams(const PlayerPropertiesChangedParams&) = delete;
  PlayerPropertiesChangedParams& operator=(const PlayerPropertiesChangedParams&) = delete;

  ~PlayerPropertiesChangedParams() { }


  std::string GetPlayerId() const { return player_id_; }
  void SetPlayerId(const std::string& value) { player_id_ = value; }

  const std::vector<std::unique_ptr<::headless::media::PlayerProperty>>* GetProperties() const { return &properties_; }
  void SetProperties(std::vector<std::unique_ptr<::headless::media::PlayerProperty>> value) { properties_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<PlayerPropertiesChangedParams> Clone() const;

  template<int STATE>
  class PlayerPropertiesChangedParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kPlayerIdSet = 1 << 1,
    kPropertiesSet = 1 << 2,
      kAllRequiredFieldsSet = (kPlayerIdSet | kPropertiesSet | 0)
    };

    PlayerPropertiesChangedParamsBuilder<STATE | kPlayerIdSet>& SetPlayerId(const std::string& value) {
      static_assert(!(STATE & kPlayerIdSet), "property playerId should not have already been set");
      result_->SetPlayerId(value);
      return CastState<kPlayerIdSet>();
    }

    PlayerPropertiesChangedParamsBuilder<STATE | kPropertiesSet>& SetProperties(std::vector<std::unique_ptr<::headless::media::PlayerProperty>> value) {
      static_assert(!(STATE & kPropertiesSet), "property properties should not have already been set");
      result_->SetProperties(std::move(value));
      return CastState<kPropertiesSet>();
    }

    std::unique_ptr<PlayerPropertiesChangedParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class PlayerPropertiesChangedParams;
    PlayerPropertiesChangedParamsBuilder() : result_(new PlayerPropertiesChangedParams()) { }

    template<int STEP> PlayerPropertiesChangedParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<PlayerPropertiesChangedParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<PlayerPropertiesChangedParams> result_;
  };

  static PlayerPropertiesChangedParamsBuilder<0> Builder() {
    return PlayerPropertiesChangedParamsBuilder<0>();
  }

 private:
  PlayerPropertiesChangedParams() { }

  std::string player_id_;
  std::vector<std::unique_ptr<::headless::media::PlayerProperty>> properties_;
};


// Parameters for the PlayerEventsAdded event.
class HEADLESS_EXPORT PlayerEventsAddedParams {
 public:
  static std::unique_ptr<PlayerEventsAddedParams> Parse(const base::Value& value, ErrorReporter* errors);

  PlayerEventsAddedParams(const PlayerEventsAddedParams&) = delete;
  PlayerEventsAddedParams& operator=(const PlayerEventsAddedParams&) = delete;

  ~PlayerEventsAddedParams() { }


  std::string GetPlayerId() const { return player_id_; }
  void SetPlayerId(const std::string& value) { player_id_ = value; }

  const std::vector<std::unique_ptr<::headless::media::PlayerEvent>>* GetEvents() const { return &events_; }
  void SetEvents(std::vector<std::unique_ptr<::headless::media::PlayerEvent>> value) { events_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<PlayerEventsAddedParams> Clone() const;

  template<int STATE>
  class PlayerEventsAddedParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kPlayerIdSet = 1 << 1,
    kEventsSet = 1 << 2,
      kAllRequiredFieldsSet = (kPlayerIdSet | kEventsSet | 0)
    };

    PlayerEventsAddedParamsBuilder<STATE | kPlayerIdSet>& SetPlayerId(const std::string& value) {
      static_assert(!(STATE & kPlayerIdSet), "property playerId should not have already been set");
      result_->SetPlayerId(value);
      return CastState<kPlayerIdSet>();
    }

    PlayerEventsAddedParamsBuilder<STATE | kEventsSet>& SetEvents(std::vector<std::unique_ptr<::headless::media::PlayerEvent>> value) {
      static_assert(!(STATE & kEventsSet), "property events should not have already been set");
      result_->SetEvents(std::move(value));
      return CastState<kEventsSet>();
    }

    std::unique_ptr<PlayerEventsAddedParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class PlayerEventsAddedParams;
    PlayerEventsAddedParamsBuilder() : result_(new PlayerEventsAddedParams()) { }

    template<int STEP> PlayerEventsAddedParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<PlayerEventsAddedParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<PlayerEventsAddedParams> result_;
  };

  static PlayerEventsAddedParamsBuilder<0> Builder() {
    return PlayerEventsAddedParamsBuilder<0>();
  }

 private:
  PlayerEventsAddedParams() { }

  std::string player_id_;
  std::vector<std::unique_ptr<::headless::media::PlayerEvent>> events_;
};


// Parameters for the PlayerMessagesLogged event.
class HEADLESS_EXPORT PlayerMessagesLoggedParams {
 public:
  static std::unique_ptr<PlayerMessagesLoggedParams> Parse(const base::Value& value, ErrorReporter* errors);

  PlayerMessagesLoggedParams(const PlayerMessagesLoggedParams&) = delete;
  PlayerMessagesLoggedParams& operator=(const PlayerMessagesLoggedParams&) = delete;

  ~PlayerMessagesLoggedParams() { }


  std::string GetPlayerId() const { return player_id_; }
  void SetPlayerId(const std::string& value) { player_id_ = value; }

  const std::vector<std::unique_ptr<::headless::media::PlayerMessage>>* GetMessages() const { return &messages_; }
  void SetMessages(std::vector<std::unique_ptr<::headless::media::PlayerMessage>> value) { messages_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<PlayerMessagesLoggedParams> Clone() const;

  template<int STATE>
  class PlayerMessagesLoggedParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kPlayerIdSet = 1 << 1,
    kMessagesSet = 1 << 2,
      kAllRequiredFieldsSet = (kPlayerIdSet | kMessagesSet | 0)
    };

    PlayerMessagesLoggedParamsBuilder<STATE | kPlayerIdSet>& SetPlayerId(const std::string& value) {
      static_assert(!(STATE & kPlayerIdSet), "property playerId should not have already been set");
      result_->SetPlayerId(value);
      return CastState<kPlayerIdSet>();
    }

    PlayerMessagesLoggedParamsBuilder<STATE | kMessagesSet>& SetMessages(std::vector<std::unique_ptr<::headless::media::PlayerMessage>> value) {
      static_assert(!(STATE & kMessagesSet), "property messages should not have already been set");
      result_->SetMessages(std::move(value));
      return CastState<kMessagesSet>();
    }

    std::unique_ptr<PlayerMessagesLoggedParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class PlayerMessagesLoggedParams;
    PlayerMessagesLoggedParamsBuilder() : result_(new PlayerMessagesLoggedParams()) { }

    template<int STEP> PlayerMessagesLoggedParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<PlayerMessagesLoggedParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<PlayerMessagesLoggedParams> result_;
  };

  static PlayerMessagesLoggedParamsBuilder<0> Builder() {
    return PlayerMessagesLoggedParamsBuilder<0>();
  }

 private:
  PlayerMessagesLoggedParams() { }

  std::string player_id_;
  std::vector<std::unique_ptr<::headless::media::PlayerMessage>> messages_;
};


// Parameters for the PlayerErrorsRaised event.
class HEADLESS_EXPORT PlayerErrorsRaisedParams {
 public:
  static std::unique_ptr<PlayerErrorsRaisedParams> Parse(const base::Value& value, ErrorReporter* errors);

  PlayerErrorsRaisedParams(const PlayerErrorsRaisedParams&) = delete;
  PlayerErrorsRaisedParams& operator=(const PlayerErrorsRaisedParams&) = delete;

  ~PlayerErrorsRaisedParams() { }


  std::string GetPlayerId() const { return player_id_; }
  void SetPlayerId(const std::string& value) { player_id_ = value; }

  const std::vector<std::unique_ptr<::headless::media::PlayerError>>* GetErrors() const { return &errors_; }
  void SetErrors(std::vector<std::unique_ptr<::headless::media::PlayerError>> value) { errors_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<PlayerErrorsRaisedParams> Clone() const;

  template<int STATE>
  class PlayerErrorsRaisedParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kPlayerIdSet = 1 << 1,
    kErrorsSet = 1 << 2,
      kAllRequiredFieldsSet = (kPlayerIdSet | kErrorsSet | 0)
    };

    PlayerErrorsRaisedParamsBuilder<STATE | kPlayerIdSet>& SetPlayerId(const std::string& value) {
      static_assert(!(STATE & kPlayerIdSet), "property playerId should not have already been set");
      result_->SetPlayerId(value);
      return CastState<kPlayerIdSet>();
    }

    PlayerErrorsRaisedParamsBuilder<STATE | kErrorsSet>& SetErrors(std::vector<std::unique_ptr<::headless::media::PlayerError>> value) {
      static_assert(!(STATE & kErrorsSet), "property errors should not have already been set");
      result_->SetErrors(std::move(value));
      return CastState<kErrorsSet>();
    }

    std::unique_ptr<PlayerErrorsRaisedParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class PlayerErrorsRaisedParams;
    PlayerErrorsRaisedParamsBuilder() : result_(new PlayerErrorsRaisedParams()) { }

    template<int STEP> PlayerErrorsRaisedParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<PlayerErrorsRaisedParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<PlayerErrorsRaisedParams> result_;
  };

  static PlayerErrorsRaisedParamsBuilder<0> Builder() {
    return PlayerErrorsRaisedParamsBuilder<0>();
  }

 private:
  PlayerErrorsRaisedParams() { }

  std::string player_id_;
  std::vector<std::unique_ptr<::headless::media::PlayerError>> errors_;
};


// Parameters for the PlayersCreated event.
class HEADLESS_EXPORT PlayersCreatedParams {
 public:
  static std::unique_ptr<PlayersCreatedParams> Parse(const base::Value& value, ErrorReporter* errors);

  PlayersCreatedParams(const PlayersCreatedParams&) = delete;
  PlayersCreatedParams& operator=(const PlayersCreatedParams&) = delete;

  ~PlayersCreatedParams() { }


  const std::vector<std::string>* GetPlayers() const { return &players_; }
  void SetPlayers(std::vector<std::string> value) { players_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<PlayersCreatedParams> Clone() const;

  template<int STATE>
  class PlayersCreatedParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kPlayersSet = 1 << 1,
      kAllRequiredFieldsSet = (kPlayersSet | 0)
    };

    PlayersCreatedParamsBuilder<STATE | kPlayersSet>& SetPlayers(std::vector<std::string> value) {
      static_assert(!(STATE & kPlayersSet), "property players should not have already been set");
      result_->SetPlayers(std::move(value));
      return CastState<kPlayersSet>();
    }

    std::unique_ptr<PlayersCreatedParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class PlayersCreatedParams;
    PlayersCreatedParamsBuilder() : result_(new PlayersCreatedParams()) { }

    template<int STEP> PlayersCreatedParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<PlayersCreatedParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<PlayersCreatedParams> result_;
  };

  static PlayersCreatedParamsBuilder<0> Builder() {
    return PlayersCreatedParamsBuilder<0>();
  }

 private:
  PlayersCreatedParams() { }

  std::vector<std::string> players_;
};


}  // namespace media

}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_TYPES_MEDIA_H_
