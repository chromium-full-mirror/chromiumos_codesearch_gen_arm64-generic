// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/web_request.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_WEB_REQUEST_H__
#define EXTENSIONS_COMMON_API_WEB_REQUEST_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"
#include "extensions/common/api/extension_types.h"


namespace extensions {
namespace api {
namespace web_request {

//
// Properties
//

// The maximum number of times that <code>handlerBehaviorChanged</code> can be
// called per 10 minute sustained interval. <code>handlerBehaviorChanged</code>
// is an expensive function call that shouldn't be called often.
extern const int MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES;

//
// Types
//

enum class ResourceType {
  kNone = 0,
  kMainFrame,
  kSubFrame,
  kStylesheet,
  kScript,
  kImage,
  kFont,
  kObject,
  kXmlhttprequest,
  kPing,
  kCspReport,
  kMedia,
  kWebsocket,
  kWebbundle,
  kOther,
  kMaxValue = kOther,
};


const char* ToString(ResourceType as_enum);
ResourceType ParseResourceType(base::StringPiece as_string);
std::u16string GetResourceTypeParseError(base::StringPiece as_string);

enum class OnBeforeRequestOptions {
  kNone = 0,
  kBlocking,
  kRequestBody,
  kExtraHeaders,
  kMaxValue = kExtraHeaders,
};


const char* ToString(OnBeforeRequestOptions as_enum);
OnBeforeRequestOptions ParseOnBeforeRequestOptions(base::StringPiece as_string);
std::u16string GetOnBeforeRequestOptionsParseError(base::StringPiece as_string);

enum class OnBeforeSendHeadersOptions {
  kNone = 0,
  kRequestHeaders,
  kBlocking,
  kExtraHeaders,
  kMaxValue = kExtraHeaders,
};


const char* ToString(OnBeforeSendHeadersOptions as_enum);
OnBeforeSendHeadersOptions ParseOnBeforeSendHeadersOptions(base::StringPiece as_string);
std::u16string GetOnBeforeSendHeadersOptionsParseError(base::StringPiece as_string);

enum class OnSendHeadersOptions {
  kNone = 0,
  kRequestHeaders,
  kExtraHeaders,
  kMaxValue = kExtraHeaders,
};


const char* ToString(OnSendHeadersOptions as_enum);
OnSendHeadersOptions ParseOnSendHeadersOptions(base::StringPiece as_string);
std::u16string GetOnSendHeadersOptionsParseError(base::StringPiece as_string);

enum class OnHeadersReceivedOptions {
  kNone = 0,
  kBlocking,
  kResponseHeaders,
  kExtraHeaders,
  kMaxValue = kExtraHeaders,
};


const char* ToString(OnHeadersReceivedOptions as_enum);
OnHeadersReceivedOptions ParseOnHeadersReceivedOptions(base::StringPiece as_string);
std::u16string GetOnHeadersReceivedOptionsParseError(base::StringPiece as_string);

enum class OnAuthRequiredOptions {
  kNone = 0,
  kResponseHeaders,
  kBlocking,
  kAsyncBlocking,
  kExtraHeaders,
  kMaxValue = kExtraHeaders,
};


const char* ToString(OnAuthRequiredOptions as_enum);
OnAuthRequiredOptions ParseOnAuthRequiredOptions(base::StringPiece as_string);
std::u16string GetOnAuthRequiredOptionsParseError(base::StringPiece as_string);

enum class OnResponseStartedOptions {
  kNone = 0,
  kResponseHeaders,
  kExtraHeaders,
  kMaxValue = kExtraHeaders,
};


const char* ToString(OnResponseStartedOptions as_enum);
OnResponseStartedOptions ParseOnResponseStartedOptions(base::StringPiece as_string);
std::u16string GetOnResponseStartedOptionsParseError(base::StringPiece as_string);

enum class OnBeforeRedirectOptions {
  kNone = 0,
  kResponseHeaders,
  kExtraHeaders,
  kMaxValue = kExtraHeaders,
};


const char* ToString(OnBeforeRedirectOptions as_enum);
OnBeforeRedirectOptions ParseOnBeforeRedirectOptions(base::StringPiece as_string);
std::u16string GetOnBeforeRedirectOptionsParseError(base::StringPiece as_string);

enum class OnCompletedOptions {
  kNone = 0,
  kResponseHeaders,
  kExtraHeaders,
  kMaxValue = kExtraHeaders,
};


const char* ToString(OnCompletedOptions as_enum);
OnCompletedOptions ParseOnCompletedOptions(base::StringPiece as_string);
std::u16string GetOnCompletedOptionsParseError(base::StringPiece as_string);

enum class OnErrorOccurredOptions {
  kNone = 0,
  kExtraHeaders,
  kMaxValue = kExtraHeaders,
};


const char* ToString(OnErrorOccurredOptions as_enum);
OnErrorOccurredOptions ParseOnErrorOccurredOptions(base::StringPiece as_string);
std::u16string GetOnErrorOccurredOptionsParseError(base::StringPiece as_string);

// An object describing filters to apply to webRequest events.
struct RequestFilter {
  RequestFilter();
  ~RequestFilter();
  RequestFilter(const RequestFilter&) = delete;
  RequestFilter& operator=(const RequestFilter&) = delete;
  RequestFilter(RequestFilter&& rhs) noexcept;
  RequestFilter& operator=(RequestFilter&& rhs) noexcept;

  // Populates a RequestFilter object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, RequestFilter& out);

  // Populates a RequestFilter object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, RequestFilter& out);

  // Creates a deep copy of RequestFilter.
  RequestFilter Clone() const;

  // Creates a RequestFilter object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<RequestFilter> FromValue(const base::Value::Dict& value);

  // Creates a RequestFilter object from a base::Value, or nullopt on failure.
  static std::optional<RequestFilter> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRequestFilter object.
  base::Value::Dict ToValue() const;

  // A list of URLs or URL patterns. Requests that cannot match any of the URLs
  // will be filtered out.
  std::vector<std::string> urls;

  // A list of request types. Requests that cannot match any of the types will be
  // filtered out.
  std::optional<std::vector<ResourceType>> types;

  std::optional<int> tab_id;

  std::optional<int> window_id;

};

// Contains data uploaded in a URL request.
struct UploadData {
  UploadData();
  ~UploadData();
  UploadData(const UploadData&) = delete;
  UploadData& operator=(const UploadData&) = delete;
  UploadData(UploadData&& rhs) noexcept;
  UploadData& operator=(UploadData&& rhs) noexcept;

  // Populates a UploadData object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, UploadData& out);

  // Populates a UploadData object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, UploadData& out);

  // Creates a deep copy of UploadData.
  UploadData Clone() const;

  // Creates a UploadData object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<UploadData> FromValue(const base::Value::Dict& value);

  // Creates a UploadData object from a base::Value, or nullopt on failure.
  static std::optional<UploadData> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisUploadData object.
  base::Value::Dict ToValue() const;

  // An ArrayBuffer with a copy of the data.
  std::optional<base::Value> bytes;

  // A string with the file's path and name.
  std::optional<std::string> file;

};

// Contains data passed within form data. For urlencoded form it is stored as
// string if data is utf-8 string and as ArrayBuffer otherwise. For form-data it
// is ArrayBuffer. If form-data represents uploading file, it is string with
// filename, if the filename is provided.
struct FormDataItem {
  FormDataItem();
  ~FormDataItem();
  FormDataItem(const FormDataItem&) = delete;
  FormDataItem& operator=(const FormDataItem&) = delete;
  FormDataItem(FormDataItem&& rhs) noexcept;
  FormDataItem& operator=(FormDataItem&& rhs) noexcept;

  // Populates a FormDataItem object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, FormDataItem& out);

  // Creates a deep copy of FormDataItem.
  FormDataItem Clone() const;

  // Creates a FormDataItem object from a base::Value, or nullopt on failure.
  static std::optional<FormDataItem> FromValue(const base::Value& value);

  // Returns a new base::Value representing the serialized form of
  // thisFormDataItem object.
  base::Value ToValue() const;
  // Choices:
  std::optional<std::vector<uint8_t>> as_binary;
  std::optional<std::string> as_string;
};

enum class IgnoredActionType {
  kNone = 0,
  kRedirect,
  kRequestHeaders,
  kResponseHeaders,
  kAuthCredentials,
  kMaxValue = kAuthCredentials,
};


const char* ToString(IgnoredActionType as_enum);
IgnoredActionType ParseIgnoredActionType(base::StringPiece as_string);
std::u16string GetIgnoredActionTypeParseError(base::StringPiece as_string);


//
// Functions
//

namespace HandlerBehaviorChanged {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace HandlerBehaviorChanged

//
// Events
//

namespace OnBeforeRequest {

extern const char kEventName[];  // "webRequest.onBeforeRequest"

struct Details {
  Details();
  ~Details();
  Details(const Details&) = delete;
  Details& operator=(const Details&) = delete;
  Details(Details&& rhs) noexcept;
  Details& operator=(Details&& rhs) noexcept;

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDetails object.
  base::Value::Dict ToValue() const;

  // Contains the HTTP request body data. Only provided if extraInfoSpec contains
  // 'requestBody'.
  struct RequestBody {
    RequestBody();
    ~RequestBody();
    RequestBody(const RequestBody&) = delete;
    RequestBody& operator=(const RequestBody&) = delete;
    RequestBody(RequestBody&& rhs) noexcept;
    RequestBody& operator=(RequestBody&& rhs) noexcept;

    // Returns a new base::Value::Dict representing the serialized form of
    // thisRequestBody object.
    base::Value::Dict ToValue() const;

    // If the request method is POST and the body is a sequence of key-value pairs
    // encoded in UTF8, encoded as either multipart/form-data, or
    // application/x-www-form-urlencoded, this dictionary is present and for each
    // key contains the list of all values for that key. If the data is of another
    // media type, or if it is malformed, the dictionary is not present. An example
    // value of this dictionary is {'key': ['value1', 'value2']}.
    struct FormData {
      FormData();
      ~FormData();
      FormData(const FormData&) = delete;
      FormData& operator=(const FormData&) = delete;
      FormData(FormData&& rhs) noexcept;
      FormData& operator=(FormData&& rhs) noexcept;

      // Returns a new base::Value::Dict representing the serialized form of
      // thisFormData object.
      base::Value::Dict ToValue() const;

      std::map<std::string, std::vector<FormDataItem>> additional_properties;
    };


    // Errors when obtaining request body data.
    std::optional<std::string> error;

    // If the request method is POST and the body is a sequence of key-value pairs
    // encoded in UTF8, encoded as either multipart/form-data, or
    // application/x-www-form-urlencoded, this dictionary is present and for each
    // key contains the list of all values for that key. If the data is of another
    // media type, or if it is malformed, the dictionary is not present. An example
    // value of this dictionary is {'key': ['value1', 'value2']}.
    std::optional<FormData> form_data;

    // If the request method is PUT or POST, and the body is not already parsed in
    // formData, then the unparsed request body elements are contained in this
    // array.
    std::optional<std::vector<UploadData>> raw;

  };


  // The ID of the request. Request IDs are unique within a browser session. As a
  // result, they could be used to relate different events of the same request.
  std::string request_id;

  std::string url;

  // Standard HTTP method.
  std::string method;

  // The value 0 indicates that the request happens in the main frame; a positive
  // value indicates the ID of a subframe in which the request happens. If the
  // document of a (sub-)frame is loaded (<code>type</code> is
  // <code>main_frame</code> or <code>sub_frame</code>), <code>frameId</code>
  // indicates the ID of this frame, not the ID of the outer frame. Frame IDs are
  // unique within a tab.
  int frame_id;

  // ID of frame that wraps the frame which sent the request. Set to -1 if no
  // parent frame exists.
  int parent_frame_id;

  // The UUID of the document making the request.
  std::optional<std::string> document_id;

  // The UUID of the parent document owning this frame. This is not set if there
  // is no parent.
  std::optional<std::string> parent_document_id;

  // The lifecycle the document is in.
  extensions::api::extension_types::DocumentLifecycle document_lifecycle;

  // The type of frame the request occurred in.
  extensions::api::extension_types::FrameType frame_type;

  // Contains the HTTP request body data. Only provided if extraInfoSpec contains
  // 'requestBody'.
  std::optional<RequestBody> request_body;

  // The ID of the tab in which the request takes place. Set to -1 if the request
  // isn't related to a tab.
  int tab_id;

  // How the requested resource will be used.
  ResourceType type;

  // The origin where the request was initiated. This does not change through
  // redirects. If this is an opaque origin, the string 'null' will be used.
  std::optional<std::string> initiator;

  // The time when this signal is triggered, in milliseconds since the epoch.
  double time_stamp;

};


base::Value::List Create(const Details& details);
}  // namespace OnBeforeRequest

namespace OnErrorOccurred {

extern const char kEventName[];  // "webRequest.onErrorOccurred"

struct Details {
  Details();
  ~Details();
  Details(const Details&) = delete;
  Details& operator=(const Details&) = delete;
  Details(Details&& rhs) noexcept;
  Details& operator=(Details&& rhs) noexcept;

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDetails object.
  base::Value::Dict ToValue() const;

  // The ID of the request. Request IDs are unique within a browser session. As a
  // result, they could be used to relate different events of the same request.
  std::string request_id;

  std::string url;

  // Standard HTTP method.
  std::string method;

  // The value 0 indicates that the request happens in the main frame; a positive
  // value indicates the ID of a subframe in which the request happens. If the
  // document of a (sub-)frame is loaded (<code>type</code> is
  // <code>main_frame</code> or <code>sub_frame</code>), <code>frameId</code>
  // indicates the ID of this frame, not the ID of the outer frame. Frame IDs are
  // unique within a tab.
  int frame_id;

  // ID of frame that wraps the frame which sent the request. Set to -1 if no
  // parent frame exists.
  int parent_frame_id;

  // The UUID of the document making the request. This value is not present if the
  // request is a navigation of a frame.
  std::string document_id;

  // The UUID of the parent document owning this frame. This is not set if there
  // is no parent.
  std::optional<std::string> parent_document_id;

  // The lifecycle the document is in.
  extensions::api::extension_types::DocumentLifecycle document_lifecycle;

  // The type of frame the request occurred in.
  extensions::api::extension_types::FrameType frame_type;

  // The ID of the tab in which the request takes place. Set to -1 if the request
  // isn't related to a tab.
  int tab_id;

  // How the requested resource will be used.
  ResourceType type;

  // The origin where the request was initiated. This does not change through
  // redirects. If this is an opaque origin, the string 'null' will be used.
  std::optional<std::string> initiator;

  // The time when this signal is triggered, in milliseconds since the epoch.
  double time_stamp;

  // The server IP address that the request was actually sent to. Note that it may
  // be a literal IPv6 address.
  std::optional<std::string> ip;

  // Indicates if this response was fetched from disk cache.
  bool from_cache;

  // The error description. This string is <em>not</em> guaranteed to remain
  // backwards compatible between releases. You must not parse and act based upon
  // its content.
  std::string error;

};


base::Value::List Create(const Details& details);
}  // namespace OnErrorOccurred

namespace OnActionIgnored {

extern const char kEventName[];  // "webRequest.onActionIgnored"

struct Details {
  Details();
  ~Details();
  Details(const Details&) = delete;
  Details& operator=(const Details&) = delete;
  Details(Details&& rhs) noexcept;
  Details& operator=(Details&& rhs) noexcept;

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDetails object.
  base::Value::Dict ToValue() const;

  // The ID of the request. Request IDs are unique within a browser session. As a
  // result, they could be used to relate different events of the same request.
  std::string request_id;

  // The proposed action which was ignored.
  IgnoredActionType action;

};


base::Value::List Create(const Details& details);
}  // namespace OnActionIgnored

}  // namespace web_request
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_WEB_REQUEST_H__
