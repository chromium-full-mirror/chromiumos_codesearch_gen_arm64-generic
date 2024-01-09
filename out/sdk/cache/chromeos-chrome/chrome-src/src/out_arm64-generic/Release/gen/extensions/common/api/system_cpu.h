// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/system_cpu.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_SYSTEM_CPU_H__
#define EXTENSIONS_COMMON_API_SYSTEM_CPU_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace system_cpu {

//
// Types
//

struct CpuTime {
  CpuTime();
  ~CpuTime();
  CpuTime(const CpuTime&) = delete;
  CpuTime& operator=(const CpuTime&) = delete;
  CpuTime(CpuTime&& rhs) noexcept;
  CpuTime& operator=(CpuTime&& rhs) noexcept;

  // Populates a CpuTime object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, CpuTime& out);

  // Populates a CpuTime object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, CpuTime& out);

  // Creates a deep copy of CpuTime.
  CpuTime Clone() const;

  // Creates a CpuTime object from a base::Value::Dict, or nullopt on failure.
  static std::optional<CpuTime> FromValue(const base::Value::Dict& value);

  // Creates a CpuTime object from a base::Value, or nullopt on failure.
  static std::optional<CpuTime> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCpuTime object.
  base::Value::Dict ToValue() const;

  // The cumulative time used by userspace programs on this processor.
  double user;

  // The cumulative time used by kernel programs on this processor.
  double kernel;

  // The cumulative time spent idle by this processor.
  double idle;

  // The total cumulative time for this processor.  This value is equal to user +
  // kernel + idle.
  double total;

};

struct ProcessorInfo {
  ProcessorInfo();
  ~ProcessorInfo();
  ProcessorInfo(const ProcessorInfo&) = delete;
  ProcessorInfo& operator=(const ProcessorInfo&) = delete;
  ProcessorInfo(ProcessorInfo&& rhs) noexcept;
  ProcessorInfo& operator=(ProcessorInfo&& rhs) noexcept;

  // Populates a ProcessorInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ProcessorInfo& out);

  // Populates a ProcessorInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ProcessorInfo& out);

  // Creates a deep copy of ProcessorInfo.
  ProcessorInfo Clone() const;

  // Creates a ProcessorInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ProcessorInfo> FromValue(const base::Value::Dict& value);

  // Creates a ProcessorInfo object from a base::Value, or nullopt on failure.
  static std::optional<ProcessorInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisProcessorInfo object.
  base::Value::Dict ToValue() const;

  // Cumulative usage info for this logical processor.
  CpuTime usage;

};

struct CpuInfo {
  CpuInfo();
  ~CpuInfo();
  CpuInfo(const CpuInfo&) = delete;
  CpuInfo& operator=(const CpuInfo&) = delete;
  CpuInfo(CpuInfo&& rhs) noexcept;
  CpuInfo& operator=(CpuInfo&& rhs) noexcept;

  // Populates a CpuInfo object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, CpuInfo& out);

  // Populates a CpuInfo object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, CpuInfo& out);

  // Creates a deep copy of CpuInfo.
  CpuInfo Clone() const;

  // Creates a CpuInfo object from a base::Value::Dict, or nullopt on failure.
  static std::optional<CpuInfo> FromValue(const base::Value::Dict& value);

  // Creates a CpuInfo object from a base::Value, or nullopt on failure.
  static std::optional<CpuInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCpuInfo object.
  base::Value::Dict ToValue() const;

  // The number of logical processors.
  int num_of_processors;

  // The architecture name of the processors.
  std::string arch_name;

  // The model name of the processors.
  std::string model_name;

  // A set of feature codes indicating some of the processor's capabilities. The
  // currently supported codes are "mmx", "sse", "sse2", "sse3", "ssse3",
  // "sse4_1", "sse4_2", and "avx".
  std::vector<std::string> features;

  // Information about each logical processor.
  std::vector<ProcessorInfo> processors;

  // <p>List of CPU temperature readings from each thermal zone of the CPU.
  // Temperatures are in degrees Celsius.</p><p><b>Currently supported on Chrome
  // OS only.</b></p>
  std::vector<double> temperatures;

};


//
// Functions
//

namespace GetInfo {

namespace Results {

base::Value::List Create(const CpuInfo& info);
}  // namespace Results

}  // namespace GetInfo

}  // namespace system_cpu
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_SYSTEM_CPU_H__
