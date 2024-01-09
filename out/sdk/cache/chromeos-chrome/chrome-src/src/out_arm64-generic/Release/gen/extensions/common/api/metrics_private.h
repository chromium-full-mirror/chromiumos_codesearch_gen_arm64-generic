// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/metrics_private.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_METRICS_PRIVATE_H__
#define EXTENSIONS_COMMON_API_METRICS_PRIVATE_H__

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
namespace metrics_private {

//
// Types
//

// The type of metric, such as 'histogram-log' or 'histogram-linear'.
enum class MetricTypeType {
  kNone = 0,
  kHistogramLog,
  kHistogramLinear,
  kMaxValue = kHistogramLinear,
};


const char* ToString(MetricTypeType as_enum);
MetricTypeType ParseMetricTypeType(base::StringPiece as_string);
std::u16string GetMetricTypeTypeParseError(base::StringPiece as_string);

// Describes the type of metric that is to be collected.
struct MetricType {
  MetricType();
  ~MetricType();
  MetricType(const MetricType&) = delete;
  MetricType& operator=(const MetricType&) = delete;
  MetricType(MetricType&& rhs) noexcept;
  MetricType& operator=(MetricType&& rhs) noexcept;

  // Populates a MetricType object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, MetricType& out);

  // Populates a MetricType object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, MetricType& out);

  // Creates a deep copy of MetricType.
  MetricType Clone() const;

  // Creates a MetricType object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<MetricType> FromValue(const base::Value::Dict& value);

  // Creates a MetricType object from a base::Value, or nullopt on failure.
  static std::optional<MetricType> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisMetricType object.
  base::Value::Dict ToValue() const;

  // A unique name within the extension for the metric.
  std::string metric_name;

  MetricTypeType type;

  // The minimum sample value to be recoded.  Must be greater than zero.
  int min;

  // The maximum sample value to be recoded.
  int max;

  // The number of buckets to use when separating the recorded values.
  int buckets;

};

struct HistogramBucket {
  HistogramBucket();
  ~HistogramBucket();
  HistogramBucket(const HistogramBucket&) = delete;
  HistogramBucket& operator=(const HistogramBucket&) = delete;
  HistogramBucket(HistogramBucket&& rhs) noexcept;
  HistogramBucket& operator=(HistogramBucket&& rhs) noexcept;

  // Populates a HistogramBucket object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, HistogramBucket& out);

  // Populates a HistogramBucket object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, HistogramBucket& out);

  // Creates a deep copy of HistogramBucket.
  HistogramBucket Clone() const;

  // Creates a HistogramBucket object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<HistogramBucket> FromValue(const base::Value::Dict& value);

  // Creates a HistogramBucket object from a base::Value, or nullopt on failure.
  static std::optional<HistogramBucket> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisHistogramBucket object.
  base::Value::Dict ToValue() const;

  // Minimum sample value that can be stored in this bucket (i.e. inclusive).
  int min;

  // Exclusive maximum value for samples stored this bucket.
  int max;

  // Number of samples stored in this bucket.
  int count;

};

struct Histogram {
  Histogram();
  ~Histogram();
  Histogram(const Histogram&) = delete;
  Histogram& operator=(const Histogram&) = delete;
  Histogram(Histogram&& rhs) noexcept;
  Histogram& operator=(Histogram&& rhs) noexcept;

  // Populates a Histogram object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Histogram& out);

  // Populates a Histogram object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, Histogram& out);

  // Creates a deep copy of Histogram.
  Histogram Clone() const;

  // Creates a Histogram object from a base::Value::Dict, or nullopt on failure.
  static std::optional<Histogram> FromValue(const base::Value::Dict& value);

  // Creates a Histogram object from a base::Value, or nullopt on failure.
  static std::optional<Histogram> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisHistogram object.
  base::Value::Dict ToValue() const;

  // Sum of the all entries.
  double sum;

  // Buckets containing samples.
  std::vector<HistogramBucket> buckets;

};


//
// Functions
//

namespace GetHistogram {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Histogram name, e.g. 'Accessibility.CrosAutoclick'.
  std::string name;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const Histogram& histogram);
}  // namespace Results

}  // namespace GetHistogram

namespace GetIsCrashReportingEnabled {

namespace Results {

base::Value::List Create(bool is_enabled);
}  // namespace Results

}  // namespace GetIsCrashReportingEnabled

namespace GetFieldTrial {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string name;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::string& group);
}  // namespace Results

}  // namespace GetFieldTrial

namespace GetVariationParams {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string name;


 private:
  Params();
};

namespace Results {

struct Params {
  Params();
  ~Params();
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;

  // Returns a new base::Value::Dict representing the serialized form of
  // thisParams object.
  base::Value::Dict ToValue() const;

  std::map<std::string, std::string> additional_properties;
};


base::Value::List Create(const Params& params);
}  // namespace Results

}  // namespace GetVariationParams

namespace RecordUserAction {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string name;


 private:
  Params();
};

}  // namespace RecordUserAction

namespace RecordPercentage {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string metric_name;

  int value;


 private:
  Params();
};

}  // namespace RecordPercentage

namespace RecordCount {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string metric_name;

  int value;


 private:
  Params();
};

}  // namespace RecordCount

namespace RecordSmallCount {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string metric_name;

  int value;


 private:
  Params();
};

}  // namespace RecordSmallCount

namespace RecordMediumCount {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string metric_name;

  int value;


 private:
  Params();
};

}  // namespace RecordMediumCount

namespace RecordTime {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string metric_name;

  int value;


 private:
  Params();
};

}  // namespace RecordTime

namespace RecordMediumTime {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string metric_name;

  int value;


 private:
  Params();
};

}  // namespace RecordMediumTime

namespace RecordLongTime {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string metric_name;

  int value;


 private:
  Params();
};

}  // namespace RecordLongTime

namespace RecordSparseValueWithHashMetricName {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string metric_name;

  std::string value;


 private:
  Params();
};

}  // namespace RecordSparseValueWithHashMetricName

namespace RecordSparseValueWithPersistentHash {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string metric_name;

  std::string value;


 private:
  Params();
};

}  // namespace RecordSparseValueWithPersistentHash

namespace RecordSparseValue {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string metric_name;

  int value;


 private:
  Params();
};

}  // namespace RecordSparseValue

namespace RecordValue {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  MetricType metric;

  int value;


 private:
  Params();
};

}  // namespace RecordValue

namespace RecordBoolean {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string metric_name;

  bool value;


 private:
  Params();
};

}  // namespace RecordBoolean

namespace RecordEnumerationValue {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string metric_name;

  int value;

  int enum_size;


 private:
  Params();
};

}  // namespace RecordEnumerationValue

}  // namespace metrics_private
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_METRICS_PRIVATE_H__
