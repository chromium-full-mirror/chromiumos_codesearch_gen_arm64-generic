// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/alarms.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_ALARMS_H__
#define EXTENSIONS_COMMON_API_ALARMS_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace alarms {

//
// Types
//

struct Alarm {
  Alarm();
  ~Alarm();
  Alarm(const Alarm&) = delete;
  Alarm& operator=(const Alarm&) = delete;
  Alarm(Alarm&& rhs) noexcept;
  Alarm& operator=(Alarm&& rhs) noexcept;

  // Populates a Alarm object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Alarm& out);

  // Populates a Alarm object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, Alarm& out);

  // Creates a deep copy of Alarm.
  Alarm Clone() const;

  // Creates a Alarm object from a base::Value::Dict, or nullopt on failure.
  static std::optional<Alarm> FromValue(const base::Value::Dict& value);

  // Creates a Alarm object from a base::Value, or nullopt on failure.
  static std::optional<Alarm> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAlarm object.
  base::Value::Dict ToValue() const;

  // Name of this alarm.
  std::string name;

  // Time at which this alarm was scheduled to fire, in milliseconds past the
  // epoch (e.g. <code>Date.now() + n</code>).  For performance reasons, the alarm
  // may have been delayed an arbitrary amount beyond this.
  double scheduled_time;

  // If not null, the alarm is a repeating alarm and will fire again in
  // <var>periodInMinutes</var> minutes.
  std::optional<double> period_in_minutes;

};

struct AlarmCreateInfo {
  AlarmCreateInfo();
  ~AlarmCreateInfo();
  AlarmCreateInfo(const AlarmCreateInfo&) = delete;
  AlarmCreateInfo& operator=(const AlarmCreateInfo&) = delete;
  AlarmCreateInfo(AlarmCreateInfo&& rhs) noexcept;
  AlarmCreateInfo& operator=(AlarmCreateInfo&& rhs) noexcept;

  // Populates a AlarmCreateInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AlarmCreateInfo& out);

  // Populates a AlarmCreateInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, AlarmCreateInfo& out);

  // Creates a deep copy of AlarmCreateInfo.
  AlarmCreateInfo Clone() const;

  // Creates a AlarmCreateInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<AlarmCreateInfo> FromValue(const base::Value::Dict& value);

  // Creates a AlarmCreateInfo object from a base::Value, or nullopt on failure.
  static std::optional<AlarmCreateInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAlarmCreateInfo object.
  base::Value::Dict ToValue() const;

  // Time at which the alarm should fire, in milliseconds past the epoch (e.g.
  // <code>Date.now() + n</code>).
  std::optional<double> when;

  // <p>Length of time in minutes after which the <code>onAlarm</code> event
  // should fire.</p><p><!-- TODO: need minimum=0 --></p>
  std::optional<double> delay_in_minutes;

  // <p>If set, the onAlarm event should fire every <var>periodInMinutes</var>
  // minutes after the initial event specified by <var>when</var> or
  // <var>delayInMinutes</var>.  If not set, the alarm will only fire
  // once.</p><p><!-- TODO: need minimum=0 --></p>
  std::optional<double> period_in_minutes;

};


//
// Functions
//

namespace Create {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Optional name to identify this alarm. Defaults to the empty string.
  std::optional<std::string> name;

  // Describes when the alarm should fire.  The initial time must be specified by
  // either <var>when</var> or <var>delayInMinutes</var> (but not both).  If
  // <var>periodInMinutes</var> is set, the alarm will repeat every
  // <var>periodInMinutes</var> minutes after the initial event.  If neither
  // <var>when</var> or <var>delayInMinutes</var> is set for a repeating alarm,
  // <var>periodInMinutes</var> is used as the default for
  // <var>delayInMinutes</var>.
  AlarmCreateInfo alarm_info;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Create

namespace Get {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The name of the alarm to get. Defaults to the empty string.
  std::optional<std::string> name;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const Alarm& alarm);
}  // namespace Results

}  // namespace Get

namespace GetAll {

namespace Results {

base::Value::List Create(const std::vector<Alarm>& alarms);
}  // namespace Results

}  // namespace GetAll

namespace Clear {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The name of the alarm to clear. Defaults to the empty string.
  std::optional<std::string> name;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool was_cleared);
}  // namespace Results

}  // namespace Clear

namespace ClearAll {

namespace Results {

base::Value::List Create(bool was_cleared);
}  // namespace Results

}  // namespace ClearAll

//
// Events
//

namespace OnAlarm {

extern const char kEventName[];  // "alarms.onAlarm"

// The alarm that has elapsed.
base::Value::List Create(const Alarm& alarm);
}  // namespace OnAlarm

}  // namespace alarms
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_ALARMS_H__
