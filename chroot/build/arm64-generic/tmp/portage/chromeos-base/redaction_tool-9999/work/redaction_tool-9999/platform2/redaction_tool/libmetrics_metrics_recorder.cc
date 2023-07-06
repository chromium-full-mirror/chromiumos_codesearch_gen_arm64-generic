// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include "redaction_tool/libmetrics_metrics_recorder.h"

#include "base/notreached.h"

namespace redaction {

LibMetricsMetricsRecorder::LibMetricsMetricsRecorder(
    scoped_refptr<
      base::RefCountedData<std::unique_ptr<MetricsLibraryInterface>>>
        metrics_library)
    : metrics_library_(metrics_library) {
  CHECK(metrics_library_);
}

LibMetricsMetricsRecorder::~LibMetricsMetricsRecorder() = default;

void LibMetricsMetricsRecorder::RecordPIIRedactedHistogram(PIIType pii_type) {
  metrics_library_->data->SendEnumToUMA(kPIIRedactedHistogram, pii_type);
}

void LibMetricsMetricsRecorder::RecordCreditCardRedactionHistogram(
    CreditCardDetection step) {
  metrics_library_->data->SendEnumToUMA(kCreditCardRedactionHistogram, step);
}

std::unique_ptr<RedactionToolMetricsRecorder>
RedactionToolMetricsRecorder::Create() {
  NOTREACHED_NORETURN() << "Don't use RedactionToolMetricsRecorder::Create() in"
    "CrOS code. Instantiate LibMetricsMetricsRecorder explicitly instead.";
}

}  // namespace redaction
