// Copyright 2024 The ChromiumOS Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// THIS CODE IS GENERATED.
// Generated with command:
// ../../../../../../../tmp/portage/chromeos-base/libhwsec-foundation-0.0.1-r705/work/libhwsec-foundation-0.0.1/libhwsec-foundation/utility/proto_print.py
// --package-dir libhwsec-foundation --subdir tool --output-dir
// /build/arm64-generic/var/cache/portage/chromeos-base/libhwsec-foundation/out/Default/gen/libhwsec-foundation/tool
// /build/arm64-generic/tmp/portage/chromeos-base/libhwsec-foundation-0.0.1-r705/work/libhwsec-foundation-0.0.1/libhwsec-foundation/tool/hwsec_status.proto

#ifndef LIBHWSEC_FOUNDATION_TOOL_PRINT_HWSEC_STATUS_PROTO_H_
#define LIBHWSEC_FOUNDATION_TOOL_PRINT_HWSEC_STATUS_PROTO_H_

#include <string>

#include <brillo/brillo_export.h>

#include "libhwsec-foundation/tool/hwsec_status.pb.h"

namespace hwsec_foundation {

std::string GetProtoDebugStringWithIndent(InstallAttributesState value,
                                          int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(InstallAttributesState value);
std::string GetProtoDebugStringWithIndent(const HwsecStatus& value,
                                          int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(const HwsecStatus& value);

}  // namespace hwsec_foundation

#endif  // LIBHWSEC-FOUNDATION_TOOL_PRINT_HWSEC_STATUS_PROTO_H_
