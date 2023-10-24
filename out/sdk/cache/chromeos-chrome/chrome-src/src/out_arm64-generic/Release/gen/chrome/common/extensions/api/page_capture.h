// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/page_capture.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_PAGE_CAPTURE_H__
#define CHROME_COMMON_EXTENSIONS_API_PAGE_CAPTURE_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace page_capture {

//
// Functions
//

namespace SaveAsMHTML {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  struct Details {
    Details();
    ~Details();
    Details(const Details&) = delete;
    Details& operator=(const Details&) = delete;
    Details(Details&& rhs);
    Details& operator=(Details&& rhs);

    // Populates a Details object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Details& out);

    // Populates a Details object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value::Dict& value, Details& out);

    // Creates a deep copy of Details.
    Details Clone() const;

    // Creates a Details object from a base::Value::Dict, or nullopt on failure.
    static absl::optional<Details> FromValue(const base::Value::Dict& value);

    // Creates a Details object from a base::Value, or nullopt on failure.
    static absl::optional<Details> FromValue(const base::Value& value);

    // The id of the tab to save as MHTML.
    int tab_id;

  };


  Details details;


 private:
  Params();
};

namespace Results {

// The MHTML data as a Blob.
base::Value::List Create(const std::vector<uint8_t>& mhtml_data);
}  // namespace Results

}  // namespace SaveAsMHTML

}  // namespace page_capture
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_PAGE_CAPTURE_H__
