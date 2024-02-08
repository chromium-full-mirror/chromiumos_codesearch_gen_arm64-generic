// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include "chrome/common/controlled_frame/api/generated_schemas.h"

#include <algorithm>
#include <iterator>

#include "base/containers/fixed_flat_map.h"
#include "base/strings/string_piece.h"

namespace {
constexpr char kControlledFrameInternal[] = R"R({"namespace":"controlledFrameInternal","dependencies":["contextMenus"],"functions":[{"name":"contextMenusCreate","type":"function","returns":{"choices":[{"type":"integer"},{"type":"string"}]},"parameters":[{"type":"integer","name":"instanceId"},{"type":"object","name":"createProperties","properties":{"type":{"$ref":"contextMenus.ItemType","optional":true},"id":{"type":"string"},"title":{"type":"string","optional":true},"checked":{"type":"boolean","optional":true},"contexts":{"type":"array","items":{"$ref":"contextMenus.ContextType"},"minItems":1,"optional":true},"visible":{"type":"boolean","optional":true},"onclick":{"type":"function","optional":true,"parameters":[{"name":"info","$ref":"contextMenus.OnClickData"}]},"parentId":{"choices":[{"type":"integer"},{"type":"string"}],"optional":true},"documentUrlPatterns":{"type":"array","items":{"type":"string"},"optional":true},"targetUrlPatterns":{"type":"array","items":{"type":"string"},"optional":true},"enabled":{"type":"boolean","optional":true}}}],"returns_async":{"name":"callback","optional":true,"parameters":[],"does_not_support_promises":"Synchronous return and callback crbug.com/1143032"}}]})R";
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
