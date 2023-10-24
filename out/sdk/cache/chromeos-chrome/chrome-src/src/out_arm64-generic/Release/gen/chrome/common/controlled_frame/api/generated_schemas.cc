// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include "chrome/common/controlled_frame/api/generated_schemas.h"

#include <algorithm>
#include <iterator>

#include "base/containers/fixed_flat_map.h"
#include "base/strings/string_piece.h"

namespace {
constexpr char kControlledFrameInternal[] = R"R({"namespace":"controlledFrameInternal"})R";
}  // namespace

namespace controlled_frame {
namespace api {

// static
bool ControlledFrameGeneratedSchemas::IsGenerated(base::StringPiece name) {
  return !Get(name).empty();
}

// static
base::StringPiece ControlledFrameGeneratedSchemas::Get(base::StringPiece name) {
  static constexpr auto kSchemas = base::MakeFixedFlatMap<base::StringPiece, base::StringPiece>({
    {"controlledFrameInternal", kControlledFrameInternal},
  });
  auto it = kSchemas.find(name);
  return it != kSchemas.end() ? it->second : base::StringPiece();
}

}  // namespace api
}  // namespace controlled_frame
