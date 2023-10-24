// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/i18n.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_I18N_H__
#define EXTENSIONS_COMMON_API_I18N_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace i18n {

//
// Types
//

// An ISO language code such as <code>en</code> or <code>fr</code>. For a
// complete list of languages supported by this method, see <a
// href='http://src.chromium.org/viewvc/chrome/trunk/src/third_party/cld/languages/internal/languages.cc'>kLanguageInfoTable</a>. For an unknown language, <code>und</code> will be returned, which means that [percentage] of the text is unknown to CLD
using LanguageCode = std::string;


//
// Functions
//

namespace GetAcceptLanguages {

namespace Results {

// Array of LanguageCode
base::Value::List Create(const std::vector<std::string>& languages);
}  // namespace Results

}  // namespace GetAcceptLanguages

}  // namespace i18n
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_I18N_H__
