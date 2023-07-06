// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include "redaction_tool/libmetrics_metrics_tester.h"

#include "base/ranges/algorithm.h"
#include "redaction_tool/libmetrics_metrics_recorder.h"

namespace redaction {

std::unique_ptr<MetricsTester> MetricsTester::Create() {
  return std::make_unique<LibMetricsMetricsTester>();
}

size_t LibMetricsMetricsTester::GetBucketCount(base::StringPiece histogram_name,
    int histogram_value) {
  FakeMetricsLibrary *fake_metrics_library = dynamic_cast<FakeMetricsLibrary*>(
      fake_metrics_library_->data.get());
  return base::ranges::count(
      fake_metrics_library->GetCalls(std::string(histogram_name)),
      histogram_value);
}

std::unique_ptr<RedactionToolMetricsRecorder>
LibMetricsMetricsTester::SetupRecorder() {
  fake_metrics_library_ =
    base::MakeRefCounted<
      base::RefCountedData<std::unique_ptr<MetricsLibraryInterface>>>(
        std::forward<std::unique_ptr<FakeMetricsLibrary>>(
          std::make_unique<FakeMetricsLibrary>()));

  return std::make_unique<LibMetricsMetricsRecorder>(fake_metrics_library_);
}

}  // namespace redaction
