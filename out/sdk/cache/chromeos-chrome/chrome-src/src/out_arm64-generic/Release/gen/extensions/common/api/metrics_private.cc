// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/metrics_private.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/metrics_private.h"

#include <memory>
#include <optional>
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
namespace metrics_private {
//
// Types
//

const char* ToString(MetricTypeType enum_param) {
  switch (enum_param) {
    case MetricTypeType::kHistogramLog:
      return "histogram-log";
    case MetricTypeType::kHistogramLinear:
      return "histogram-linear";
    case MetricTypeType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

MetricTypeType ParseMetricTypeType(base::StringPiece enum_string) {
  if (enum_string == "histogram-log")
    return MetricTypeType::kHistogramLog;
  if (enum_string == "histogram-linear")
    return MetricTypeType::kHistogramLinear;
  return MetricTypeType::kNone;
}

std::u16string GetMetricTypeTypeParseError(base::StringPiece enum_string) {
  return u"expected \"histogram-log\" or \"histogram-linear\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


MetricType::MetricType()
: type(),
min(0),
max(0),
buckets(0) {}

MetricType::~MetricType() = default;
MetricType::MetricType(MetricType&& rhs) noexcept = default;
MetricType& MetricType::operator=(MetricType&& rhs) noexcept = default;
MetricType MetricType::Clone() const {
  MetricType out;
  out.metric_name = metric_name;
  out.type = type;
  out.min = min;
  out.max = max;
  out.buckets = buckets;
  return out;
}

// static
bool MetricType::Populate(
    const base::Value::Dict& dict, MetricType& out) {
  const base::Value* metric_name_value = dict.Find("metricName");
  if (!metric_name_value) {
    return false;
  }
  {
    auto* temp = (*metric_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.metric_name = *temp;
  }

  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    return false;
  }
  {
    const std::string* metric_type_type_as_string = (*type_value).GetIfString();
    if (!metric_type_type_as_string) {
      return false;
    }
    out.type = ParseMetricTypeType(*metric_type_type_as_string);
    if (out.type == MetricTypeType()) {
      return false;
    }
  }

  const base::Value* min_value = dict.Find("min");
  if (!min_value) {
    return false;
  }
  {
    auto temp = (*min_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.min = *temp;
  }

  const base::Value* max_value = dict.Find("max");
  if (!max_value) {
    return false;
  }
  {
    auto temp = (*max_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.max = *temp;
  }

  const base::Value* buckets_value = dict.Find("buckets");
  if (!buckets_value) {
    return false;
  }
  {
    auto temp = (*buckets_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.buckets = *temp;
  }

  return true;
}

// static
bool MetricType::Populate(
    const base::Value& value, MetricType& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<MetricType> MetricType::FromValue(const base::Value::Dict& value) {
  MetricType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<MetricType> MetricType::FromValue(const base::Value& value) {
  MetricType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict MetricType::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("metricName", this->metric_name);

  to_value_result.Set("type", metrics_private::ToString(this->type));

  to_value_result.Set("min", this->min);

  to_value_result.Set("max", this->max);

  to_value_result.Set("buckets", this->buckets);


  return to_value_result;
}


HistogramBucket::HistogramBucket()
: min(0),
max(0),
count(0) {}

HistogramBucket::~HistogramBucket() = default;
HistogramBucket::HistogramBucket(HistogramBucket&& rhs) noexcept = default;
HistogramBucket& HistogramBucket::operator=(HistogramBucket&& rhs) noexcept = default;
HistogramBucket HistogramBucket::Clone() const {
  HistogramBucket out;
  out.min = min;
  out.max = max;
  out.count = count;
  return out;
}

// static
bool HistogramBucket::Populate(
    const base::Value::Dict& dict, HistogramBucket& out) {
  const base::Value* min_value = dict.Find("min");
  if (!min_value) {
    return false;
  }
  {
    auto temp = (*min_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.min = *temp;
  }

  const base::Value* max_value = dict.Find("max");
  if (!max_value) {
    return false;
  }
  {
    auto temp = (*max_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.max = *temp;
  }

  const base::Value* count_value = dict.Find("count");
  if (!count_value) {
    return false;
  }
  {
    auto temp = (*count_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.count = *temp;
  }

  return true;
}

// static
bool HistogramBucket::Populate(
    const base::Value& value, HistogramBucket& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<HistogramBucket> HistogramBucket::FromValue(const base::Value::Dict& value) {
  HistogramBucket out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<HistogramBucket> HistogramBucket::FromValue(const base::Value& value) {
  HistogramBucket out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict HistogramBucket::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("min", this->min);

  to_value_result.Set("max", this->max);

  to_value_result.Set("count", this->count);


  return to_value_result;
}


Histogram::Histogram()
: sum(0.0) {}

Histogram::~Histogram() = default;
Histogram::Histogram(Histogram&& rhs) noexcept = default;
Histogram& Histogram::operator=(Histogram&& rhs) noexcept = default;
Histogram Histogram::Clone() const {
  Histogram out;
  out.sum = sum;
  out.buckets.reserve(buckets.size());
  for (const auto& element : buckets) {
    json_schema_compiler::util::AppendToContainer(out.buckets, element.Clone());
  }
  return out;
}

// static
bool Histogram::Populate(
    const base::Value::Dict& dict, Histogram& out) {
  const base::Value* sum_value = dict.Find("sum");
  if (!sum_value) {
    return false;
  }
  {
    auto temp = (*sum_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.sum = *temp;
  }

  const base::Value* buckets_value = dict.Find("buckets");
  if (!buckets_value) {
    return false;
  }
  {
    if (!(*buckets_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*buckets_value).GetList(), out.buckets)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool Histogram::Populate(
    const base::Value& value, Histogram& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Histogram> Histogram::FromValue(const base::Value::Dict& value) {
  Histogram out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Histogram> Histogram::FromValue(const base::Value& value) {
  Histogram out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict Histogram::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("sum", this->sum);

  to_value_result.Set("buckets", json_schema_compiler::util::CreateValueFromArray(this->buckets));


  return to_value_result;
}



//
// Functions
//

namespace GetHistogram {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& name_value = args[0];
    {
      auto* temp = name_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.name = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const Histogram& histogram) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((histogram).ToValue());

  return create_results;
}
}  // namespace GetHistogram

namespace GetIsCrashReportingEnabled {

base::Value::List Results::Create(bool is_enabled) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(is_enabled);

  return create_results;
}
}  // namespace GetIsCrashReportingEnabled

namespace GetFieldTrial {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& name_value = args[0];
    {
      auto* temp = name_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.name = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::string& group) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(group);

  return create_results;
}
}  // namespace GetFieldTrial

namespace GetVariationParams {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& name_value = args[0];
    {
      auto* temp = name_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.name = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


Results::Params::Params()
 {}

Results::Params::~Params() = default;
Results::Params::Params(Params&& rhs) noexcept = default;
Results::Params& Results::Params::operator=(Params&& rhs) noexcept = default;
base::Value::Dict Results::Params::ToValue() const {
  base::Value::Dict to_value_result;

  for (const auto& it : additional_properties) {
    to_value_result.Set(it.first, it.second);

  }

  return to_value_result;
}


base::Value::List Results::Create(const Params& params) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((params).ToValue());

  return create_results;
}
}  // namespace GetVariationParams

namespace RecordUserAction {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& name_value = args[0];
    {
      auto* temp = name_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.name = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace RecordUserAction

namespace RecordPercentage {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& metric_name_value = args[0];
    {
      auto* temp = metric_name_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.metric_name = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& value_value = args[1];
    {
      auto temp = value_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.value = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace RecordPercentage

namespace RecordCount {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& metric_name_value = args[0];
    {
      auto* temp = metric_name_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.metric_name = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& value_value = args[1];
    {
      auto temp = value_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.value = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace RecordCount

namespace RecordSmallCount {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& metric_name_value = args[0];
    {
      auto* temp = metric_name_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.metric_name = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& value_value = args[1];
    {
      auto temp = value_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.value = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace RecordSmallCount

namespace RecordMediumCount {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& metric_name_value = args[0];
    {
      auto* temp = metric_name_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.metric_name = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& value_value = args[1];
    {
      auto temp = value_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.value = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace RecordMediumCount

namespace RecordTime {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& metric_name_value = args[0];
    {
      auto* temp = metric_name_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.metric_name = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& value_value = args[1];
    {
      auto temp = value_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.value = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace RecordTime

namespace RecordMediumTime {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& metric_name_value = args[0];
    {
      auto* temp = metric_name_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.metric_name = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& value_value = args[1];
    {
      auto temp = value_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.value = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace RecordMediumTime

namespace RecordLongTime {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& metric_name_value = args[0];
    {
      auto* temp = metric_name_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.metric_name = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& value_value = args[1];
    {
      auto temp = value_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.value = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace RecordLongTime

namespace RecordSparseValueWithHashMetricName {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& metric_name_value = args[0];
    {
      auto* temp = metric_name_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.metric_name = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& value_value = args[1];
    {
      auto* temp = value_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.value = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace RecordSparseValueWithHashMetricName

namespace RecordSparseValueWithPersistentHash {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& metric_name_value = args[0];
    {
      auto* temp = metric_name_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.metric_name = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& value_value = args[1];
    {
      auto* temp = value_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.value = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace RecordSparseValueWithPersistentHash

namespace RecordSparseValue {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& metric_name_value = args[0];
    {
      auto* temp = metric_name_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.metric_name = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& value_value = args[1];
    {
      auto temp = value_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.value = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace RecordSparseValue

namespace RecordValue {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& metric_value = args[0];
    {
      if (!metric_value.is_dict()) {
        return std::nullopt;
      }
      if (!MetricType::Populate(metric_value.GetDict(), params.metric)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& value_value = args[1];
    {
      auto temp = value_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.value = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace RecordValue

namespace RecordBoolean {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& metric_name_value = args[0];
    {
      auto* temp = metric_name_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.metric_name = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& value_value = args[1];
    {
      auto temp = value_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.value = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace RecordBoolean

namespace RecordEnumerationValue {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 3) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& metric_name_value = args[0];
    {
      auto* temp = metric_name_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.metric_name = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& value_value = args[1];
    {
      auto temp = value_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.value = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& enum_size_value = args[2];
    {
      auto temp = enum_size_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.enum_size = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace RecordEnumerationValue

}  // namespace metrics_private
}  // namespace api
}  // namespace extensions

