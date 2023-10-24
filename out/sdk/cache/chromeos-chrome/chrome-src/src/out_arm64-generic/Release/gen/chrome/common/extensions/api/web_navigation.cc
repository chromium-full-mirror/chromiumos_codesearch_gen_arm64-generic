// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/web_navigation.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/web_navigation.h"

#include <memory>
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
#include "extensions/common/api/extension_types.h"


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace web_navigation {
//
// Types
//

const char* ToString(TransitionType enum_param) {
  switch (enum_param) {
    case TRANSITION_TYPE_LINK:
      return "link";
    case TRANSITION_TYPE_TYPED:
      return "typed";
    case TRANSITION_TYPE_AUTO_BOOKMARK:
      return "auto_bookmark";
    case TRANSITION_TYPE_AUTO_SUBFRAME:
      return "auto_subframe";
    case TRANSITION_TYPE_MANUAL_SUBFRAME:
      return "manual_subframe";
    case TRANSITION_TYPE_GENERATED:
      return "generated";
    case TRANSITION_TYPE_START_PAGE:
      return "start_page";
    case TRANSITION_TYPE_FORM_SUBMIT:
      return "form_submit";
    case TRANSITION_TYPE_RELOAD:
      return "reload";
    case TRANSITION_TYPE_KEYWORD:
      return "keyword";
    case TRANSITION_TYPE_KEYWORD_GENERATED:
      return "keyword_generated";
    case TRANSITION_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

TransitionType ParseTransitionType(base::StringPiece enum_string) {
  if (enum_string == "link")
    return TRANSITION_TYPE_LINK;
  if (enum_string == "typed")
    return TRANSITION_TYPE_TYPED;
  if (enum_string == "auto_bookmark")
    return TRANSITION_TYPE_AUTO_BOOKMARK;
  if (enum_string == "auto_subframe")
    return TRANSITION_TYPE_AUTO_SUBFRAME;
  if (enum_string == "manual_subframe")
    return TRANSITION_TYPE_MANUAL_SUBFRAME;
  if (enum_string == "generated")
    return TRANSITION_TYPE_GENERATED;
  if (enum_string == "start_page")
    return TRANSITION_TYPE_START_PAGE;
  if (enum_string == "form_submit")
    return TRANSITION_TYPE_FORM_SUBMIT;
  if (enum_string == "reload")
    return TRANSITION_TYPE_RELOAD;
  if (enum_string == "keyword")
    return TRANSITION_TYPE_KEYWORD;
  if (enum_string == "keyword_generated")
    return TRANSITION_TYPE_KEYWORD_GENERATED;
  return TRANSITION_TYPE_NONE;
}

std::u16string GetTransitionTypeParseError(base::StringPiece enum_string) {
  return u"expected \"link\" or \"typed\" or \"auto_bookmark\" or \"auto_subframe\" or \"manual_subframe\" or \"generated\" or \"start_page\" or \"form_submit\" or \"reload\" or \"keyword\" or \"keyword_generated\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(TransitionQualifier enum_param) {
  switch (enum_param) {
    case TRANSITION_QUALIFIER_CLIENT_REDIRECT:
      return "client_redirect";
    case TRANSITION_QUALIFIER_SERVER_REDIRECT:
      return "server_redirect";
    case TRANSITION_QUALIFIER_FORWARD_BACK:
      return "forward_back";
    case TRANSITION_QUALIFIER_FROM_ADDRESS_BAR:
      return "from_address_bar";
    case TRANSITION_QUALIFIER_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

TransitionQualifier ParseTransitionQualifier(base::StringPiece enum_string) {
  if (enum_string == "client_redirect")
    return TRANSITION_QUALIFIER_CLIENT_REDIRECT;
  if (enum_string == "server_redirect")
    return TRANSITION_QUALIFIER_SERVER_REDIRECT;
  if (enum_string == "forward_back")
    return TRANSITION_QUALIFIER_FORWARD_BACK;
  if (enum_string == "from_address_bar")
    return TRANSITION_QUALIFIER_FROM_ADDRESS_BAR;
  return TRANSITION_QUALIFIER_NONE;
}

std::u16string GetTransitionQualifierParseError(base::StringPiece enum_string) {
  return u"expected \"client_redirect\" or \"server_redirect\" or \"forward_back\" or \"from_address_bar\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}



//
// Functions
//

namespace GetFrame {

Params::Details::Details()
 {}

Params::Details::~Details() = default;
Params::Details::Details(Details&& rhs) = default;
Params::Details& Params::Details::operator=(Details&& rhs) = default;
Params::Details Params::Details::Clone() const {
  Details out;
  out.tab_id = tab_id;
  out.process_id = process_id;
  out.frame_id = frame_id;
  out.document_id = document_id;
  return out;
}

// static
bool Params::Details::Populate(
    const base::Value::Dict& dict, Details& out) {
  const base::Value* tab_id_value = dict.Find("tabId");
  if (tab_id_value) {
    {
      auto temp = (*tab_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.tab_id = absl::nullopt;
        return false;
      }
      out.tab_id = *temp;
    }
  }

  const base::Value* process_id_value = dict.Find("processId");
  if (process_id_value) {
    {
      auto temp = (*process_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.process_id = absl::nullopt;
        return false;
      }
      out.process_id = *temp;
    }
  }

  const base::Value* frame_id_value = dict.Find("frameId");
  if (frame_id_value) {
    {
      auto temp = (*frame_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.frame_id = absl::nullopt;
        return false;
      }
      out.frame_id = *temp;
    }
  }

  const base::Value* document_id_value = dict.Find("documentId");
  if (document_id_value) {
    {
      auto* temp = (*document_id_value).GetIfString();
      if (!temp) {
        out.document_id = absl::nullopt;
        return false;
      }
      out.document_id = *temp;
    }
  }

  return true;
}

// static
bool Params::Details::Populate(
    const base::Value& value, Details& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<Params::Details> Params::Details::FromValue(const base::Value::Dict& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::Details> Params::Details::FromValue(const base::Value& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& details_value = args[0];
    {
      if (!details_value.is_dict()) {
        return absl::nullopt;
      }
      if (!Details::Populate(details_value.GetDict(), params.details)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


Results::Details::Details()
: error_occurred(false),
parent_frame_id(0),
document_lifecycle(),
frame_type() {}

Results::Details::~Details() = default;
Results::Details::Details(Details&& rhs) = default;
Results::Details& Results::Details::operator=(Details&& rhs) = default;
base::Value::Dict Results::Details::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("errorOccurred", this->error_occurred);

  to_value_result.Set("url", this->url);

  to_value_result.Set("parentFrameId", this->parent_frame_id);

  to_value_result.Set("documentId", this->document_id);

  if (this->parent_document_id) {
    to_value_result.Set("parentDocumentId", *this->parent_document_id);

  }
  to_value_result.Set("documentLifecycle", extension_types::ToString(this->document_lifecycle));

  to_value_result.Set("frameType", extension_types::ToString(this->frame_type));


  return to_value_result;
}


base::Value::List Results::Create(const Details& details) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((details).ToValue());

  return create_results;
}
}  // namespace GetFrame

namespace GetAllFrames {

Params::Details::Details()
: tab_id(0) {}

Params::Details::~Details() = default;
Params::Details::Details(Details&& rhs) = default;
Params::Details& Params::Details::operator=(Details&& rhs) = default;
Params::Details Params::Details::Clone() const {
  Details out;
  out.tab_id = tab_id;
  return out;
}

// static
bool Params::Details::Populate(
    const base::Value::Dict& dict, Details& out) {
  const base::Value* tab_id_value = dict.Find("tabId");
  if (!tab_id_value) {
    return false;
  }
  {
    auto temp = (*tab_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.tab_id = *temp;
  }

  return true;
}

// static
bool Params::Details::Populate(
    const base::Value& value, Details& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<Params::Details> Params::Details::FromValue(const base::Value::Dict& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::Details> Params::Details::FromValue(const base::Value& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& details_value = args[0];
    {
      if (!details_value.is_dict()) {
        return absl::nullopt;
      }
      if (!Details::Populate(details_value.GetDict(), params.details)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


Results::DetailsType::DetailsType()
: error_occurred(false),
process_id(0),
frame_id(0),
parent_frame_id(0),
document_lifecycle(),
frame_type() {}

Results::DetailsType::~DetailsType() = default;
Results::DetailsType::DetailsType(DetailsType&& rhs) = default;
Results::DetailsType& Results::DetailsType::operator=(DetailsType&& rhs) = default;
base::Value::Dict Results::DetailsType::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("errorOccurred", this->error_occurred);

  to_value_result.Set("processId", this->process_id);

  to_value_result.Set("frameId", this->frame_id);

  to_value_result.Set("parentFrameId", this->parent_frame_id);

  to_value_result.Set("url", this->url);

  to_value_result.Set("documentId", this->document_id);

  if (this->parent_document_id) {
    to_value_result.Set("parentDocumentId", *this->parent_document_id);

  }
  to_value_result.Set("documentLifecycle", extension_types::ToString(this->document_lifecycle));

  to_value_result.Set("frameType", extension_types::ToString(this->frame_type));


  return to_value_result;
}



base::Value::List Results::Create(const std::vector<DetailsType>& details) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(details));

  return create_results;
}
}  // namespace GetAllFrames

//
// Events
//

namespace OnBeforeNavigate {

const char kEventName[] = "webNavigation.onBeforeNavigate";

Details::Details()
: tab_id(0),
process_id(0),
frame_id(0),
parent_frame_id(0),
time_stamp(0.0),
document_lifecycle(),
frame_type() {}

Details::~Details() = default;
Details::Details(Details&& rhs) = default;
Details& Details::operator=(Details&& rhs) = default;
base::Value::Dict Details::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("tabId", this->tab_id);

  to_value_result.Set("url", this->url);

  to_value_result.Set("processId", this->process_id);

  to_value_result.Set("frameId", this->frame_id);

  to_value_result.Set("parentFrameId", this->parent_frame_id);

  to_value_result.Set("timeStamp", this->time_stamp);

  if (this->parent_document_id) {
    to_value_result.Set("parentDocumentId", *this->parent_document_id);

  }
  to_value_result.Set("documentLifecycle", extension_types::ToString(this->document_lifecycle));

  to_value_result.Set("frameType", extension_types::ToString(this->frame_type));


  return to_value_result;
}


base::Value::List Create(const Details& details) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((details).ToValue());

  return create_results;
}

}  // namespace OnBeforeNavigate

namespace OnCommitted {

const char kEventName[] = "webNavigation.onCommitted";

Details::Details()
: tab_id(0),
process_id(0),
frame_id(0),
parent_frame_id(0),
transition_type(),
time_stamp(0.0),
document_lifecycle(),
frame_type() {}

Details::~Details() = default;
Details::Details(Details&& rhs) = default;
Details& Details::operator=(Details&& rhs) = default;
base::Value::Dict Details::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("tabId", this->tab_id);

  to_value_result.Set("url", this->url);

  to_value_result.Set("processId", this->process_id);

  to_value_result.Set("frameId", this->frame_id);

  to_value_result.Set("parentFrameId", this->parent_frame_id);

  to_value_result.Set("transitionType", web_navigation::ToString(this->transition_type));

  {
    std::vector<std::string> transitionQualifiers_list;
    for (const auto& it : (this->transition_qualifiers)) {
      transitionQualifiers_list.emplace_back(web_navigation::ToString(it));
    }
    to_value_result.Set("transitionQualifiers", json_schema_compiler::util::CreateValueFromArray(transitionQualifiers_list));
  }

  to_value_result.Set("timeStamp", this->time_stamp);

  to_value_result.Set("documentId", this->document_id);

  if (this->parent_document_id) {
    to_value_result.Set("parentDocumentId", *this->parent_document_id);

  }
  to_value_result.Set("documentLifecycle", extension_types::ToString(this->document_lifecycle));

  to_value_result.Set("frameType", extension_types::ToString(this->frame_type));


  return to_value_result;
}


base::Value::List Create(const Details& details) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((details).ToValue());

  return create_results;
}

}  // namespace OnCommitted

namespace OnDOMContentLoaded {

const char kEventName[] = "webNavigation.onDOMContentLoaded";

Details::Details()
: tab_id(0),
process_id(0),
frame_id(0),
parent_frame_id(0),
time_stamp(0.0),
document_lifecycle(),
frame_type() {}

Details::~Details() = default;
Details::Details(Details&& rhs) = default;
Details& Details::operator=(Details&& rhs) = default;
base::Value::Dict Details::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("tabId", this->tab_id);

  to_value_result.Set("url", this->url);

  to_value_result.Set("processId", this->process_id);

  to_value_result.Set("frameId", this->frame_id);

  to_value_result.Set("parentFrameId", this->parent_frame_id);

  to_value_result.Set("timeStamp", this->time_stamp);

  to_value_result.Set("documentId", this->document_id);

  if (this->parent_document_id) {
    to_value_result.Set("parentDocumentId", *this->parent_document_id);

  }
  to_value_result.Set("documentLifecycle", extension_types::ToString(this->document_lifecycle));

  to_value_result.Set("frameType", extension_types::ToString(this->frame_type));


  return to_value_result;
}


base::Value::List Create(const Details& details) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((details).ToValue());

  return create_results;
}

}  // namespace OnDOMContentLoaded

namespace OnCompleted {

const char kEventName[] = "webNavigation.onCompleted";

Details::Details()
: tab_id(0),
process_id(0),
frame_id(0),
parent_frame_id(0),
time_stamp(0.0),
document_lifecycle(),
frame_type() {}

Details::~Details() = default;
Details::Details(Details&& rhs) = default;
Details& Details::operator=(Details&& rhs) = default;
base::Value::Dict Details::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("tabId", this->tab_id);

  to_value_result.Set("url", this->url);

  to_value_result.Set("processId", this->process_id);

  to_value_result.Set("frameId", this->frame_id);

  to_value_result.Set("parentFrameId", this->parent_frame_id);

  to_value_result.Set("timeStamp", this->time_stamp);

  to_value_result.Set("documentId", this->document_id);

  if (this->parent_document_id) {
    to_value_result.Set("parentDocumentId", *this->parent_document_id);

  }
  to_value_result.Set("documentLifecycle", extension_types::ToString(this->document_lifecycle));

  to_value_result.Set("frameType", extension_types::ToString(this->frame_type));


  return to_value_result;
}


base::Value::List Create(const Details& details) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((details).ToValue());

  return create_results;
}

}  // namespace OnCompleted

namespace OnErrorOccurred {

const char kEventName[] = "webNavigation.onErrorOccurred";

Details::Details()
: tab_id(0),
process_id(0),
frame_id(0),
parent_frame_id(0),
time_stamp(0.0),
document_lifecycle(),
frame_type() {}

Details::~Details() = default;
Details::Details(Details&& rhs) = default;
Details& Details::operator=(Details&& rhs) = default;
base::Value::Dict Details::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("tabId", this->tab_id);

  to_value_result.Set("url", this->url);

  to_value_result.Set("processId", this->process_id);

  to_value_result.Set("frameId", this->frame_id);

  to_value_result.Set("parentFrameId", this->parent_frame_id);

  to_value_result.Set("error", this->error);

  to_value_result.Set("timeStamp", this->time_stamp);

  to_value_result.Set("documentId", this->document_id);

  if (this->parent_document_id) {
    to_value_result.Set("parentDocumentId", *this->parent_document_id);

  }
  to_value_result.Set("documentLifecycle", extension_types::ToString(this->document_lifecycle));

  to_value_result.Set("frameType", extension_types::ToString(this->frame_type));


  return to_value_result;
}


base::Value::List Create(const Details& details) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((details).ToValue());

  return create_results;
}

}  // namespace OnErrorOccurred

namespace OnCreatedNavigationTarget {

const char kEventName[] = "webNavigation.onCreatedNavigationTarget";

Details::Details()
: source_tab_id(0),
source_process_id(0),
source_frame_id(0),
tab_id(0),
time_stamp(0.0) {}

Details::~Details() = default;
Details::Details(Details&& rhs) = default;
Details& Details::operator=(Details&& rhs) = default;
base::Value::Dict Details::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("sourceTabId", this->source_tab_id);

  to_value_result.Set("sourceProcessId", this->source_process_id);

  to_value_result.Set("sourceFrameId", this->source_frame_id);

  to_value_result.Set("url", this->url);

  to_value_result.Set("tabId", this->tab_id);

  to_value_result.Set("timeStamp", this->time_stamp);


  return to_value_result;
}


base::Value::List Create(const Details& details) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((details).ToValue());

  return create_results;
}

}  // namespace OnCreatedNavigationTarget

namespace OnReferenceFragmentUpdated {

const char kEventName[] = "webNavigation.onReferenceFragmentUpdated";

Details::Details()
: tab_id(0),
process_id(0),
frame_id(0),
parent_frame_id(0),
transition_type(),
time_stamp(0.0),
document_lifecycle(),
frame_type() {}

Details::~Details() = default;
Details::Details(Details&& rhs) = default;
Details& Details::operator=(Details&& rhs) = default;
base::Value::Dict Details::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("tabId", this->tab_id);

  to_value_result.Set("url", this->url);

  to_value_result.Set("processId", this->process_id);

  to_value_result.Set("frameId", this->frame_id);

  to_value_result.Set("parentFrameId", this->parent_frame_id);

  to_value_result.Set("transitionType", web_navigation::ToString(this->transition_type));

  {
    std::vector<std::string> transitionQualifiers_list;
    for (const auto& it : (this->transition_qualifiers)) {
      transitionQualifiers_list.emplace_back(web_navigation::ToString(it));
    }
    to_value_result.Set("transitionQualifiers", json_schema_compiler::util::CreateValueFromArray(transitionQualifiers_list));
  }

  to_value_result.Set("timeStamp", this->time_stamp);

  to_value_result.Set("documentId", this->document_id);

  if (this->parent_document_id) {
    to_value_result.Set("parentDocumentId", *this->parent_document_id);

  }
  to_value_result.Set("documentLifecycle", extension_types::ToString(this->document_lifecycle));

  to_value_result.Set("frameType", extension_types::ToString(this->frame_type));


  return to_value_result;
}


base::Value::List Create(const Details& details) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((details).ToValue());

  return create_results;
}

}  // namespace OnReferenceFragmentUpdated

namespace OnTabReplaced {

const char kEventName[] = "webNavigation.onTabReplaced";

Details::Details()
: replaced_tab_id(0),
tab_id(0),
time_stamp(0.0) {}

Details::~Details() = default;
Details::Details(Details&& rhs) = default;
Details& Details::operator=(Details&& rhs) = default;
base::Value::Dict Details::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("replacedTabId", this->replaced_tab_id);

  to_value_result.Set("tabId", this->tab_id);

  to_value_result.Set("timeStamp", this->time_stamp);


  return to_value_result;
}


base::Value::List Create(const Details& details) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((details).ToValue());

  return create_results;
}

}  // namespace OnTabReplaced

namespace OnHistoryStateUpdated {

const char kEventName[] = "webNavigation.onHistoryStateUpdated";

Details::Details()
: tab_id(0),
process_id(0),
frame_id(0),
parent_frame_id(0),
transition_type(),
time_stamp(0.0),
document_lifecycle(),
frame_type() {}

Details::~Details() = default;
Details::Details(Details&& rhs) = default;
Details& Details::operator=(Details&& rhs) = default;
base::Value::Dict Details::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("tabId", this->tab_id);

  to_value_result.Set("url", this->url);

  to_value_result.Set("processId", this->process_id);

  to_value_result.Set("frameId", this->frame_id);

  to_value_result.Set("parentFrameId", this->parent_frame_id);

  to_value_result.Set("transitionType", web_navigation::ToString(this->transition_type));

  {
    std::vector<std::string> transitionQualifiers_list;
    for (const auto& it : (this->transition_qualifiers)) {
      transitionQualifiers_list.emplace_back(web_navigation::ToString(it));
    }
    to_value_result.Set("transitionQualifiers", json_schema_compiler::util::CreateValueFromArray(transitionQualifiers_list));
  }

  to_value_result.Set("timeStamp", this->time_stamp);

  to_value_result.Set("documentId", this->document_id);

  if (this->parent_document_id) {
    to_value_result.Set("parentDocumentId", *this->parent_document_id);

  }
  to_value_result.Set("documentLifecycle", extension_types::ToString(this->document_lifecycle));

  to_value_result.Set("frameType", extension_types::ToString(this->frame_type));


  return to_value_result;
}


base::Value::List Create(const Details& details) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((details).ToValue());

  return create_results;
}

}  // namespace OnHistoryStateUpdated

}  // namespace web_navigation
}  // namespace api
}  // namespace extensions

