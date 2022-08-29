// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/search.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_SEARCH_H__
#define CHROME_COMMON_EXTENSIONS_API_SEARCH_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace search {

//
// Types
//

enum Disposition {
  DISPOSITION_NONE,
  DISPOSITION_CURRENT_TAB,
  DISPOSITION_NEW_TAB,
  DISPOSITION_NEW_WINDOW,
  DISPOSITION_LAST = DISPOSITION_NEW_WINDOW,
};


const char* ToString(Disposition as_enum);
Disposition ParseDisposition(const std::string& as_string);

struct QueryInfo {
  QueryInfo();
  ~QueryInfo();
  QueryInfo(const QueryInfo&) = delete;
  QueryInfo& operator=(const QueryInfo&) = delete;
  QueryInfo(QueryInfo&& rhs);
  QueryInfo& operator=(QueryInfo&& rhs);

  // Populates a QueryInfo object from a base::Value. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value& value, QueryInfo* out);

  // Creates a QueryInfo object from a base::Value, or NULL on failure.
  static std::unique_ptr<QueryInfo> FromValue(const base::Value& value);

  // Returns a new base::DictionaryValue representing the serialized form of
  // this QueryInfo object.
  std::unique_ptr<base::DictionaryValue> ToValue() const;

  // String to query with the default search provider.
  std::string text;

  // Location where search results should be displayed. <code>CURRENT_TAB</code>
  // is the default.
  Disposition disposition;

  // Location where search results should be displayed. <code>tabId<code> cannot
  // be used with <code>disposition</code>.
  absl::optional<int> tab_id;

};


//
// Functions
//

namespace Query {

struct Params {
  static std::unique_ptr<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  ~Params();

  QueryInfo query_info;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Query

}  // namespace search
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_SEARCH_H__
