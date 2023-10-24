// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_TYPES_CACHE_STORAGE_H_
#define HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_TYPES_CACHE_STORAGE_H_

#include "base/values.h"
#include "third_party/abseil-cpp/absl/types/optional.h"
#include "third_party/inspector_protocol/crdtp/chromium/protocol_traits.h"

#include "headless/public/devtools/internal/types_forward_declarations_browser.h"
#include "headless/public/devtools/internal/types_forward_declarations_cache_storage.h"
#include "headless/public/devtools/internal/types_forward_declarations_dom.h"
#include "headless/public/devtools/internal/types_forward_declarations_debugger.h"
#include "headless/public/devtools/internal/types_forward_declarations_emulation.h"
#include "headless/public/devtools/internal/types_forward_declarations_io.h"
#include "headless/public/devtools/internal/types_forward_declarations_network.h"
#include "headless/public/devtools/internal/types_forward_declarations_page.h"
#include "headless/public/devtools/internal/types_forward_declarations_runtime.h"
#include "headless/public/devtools/internal/types_forward_declarations_security.h"
#include "headless/public/devtools/internal/types_forward_declarations_storage.h"
#include "headless/public/devtools/internal/types_forward_declarations_target.h"
#include "headless/public/headless_export.h"

namespace headless {
namespace protocol {
using Binary = crdtp::Binary;
}

class ErrorReporter;

namespace cache_storage {

// Data entry.
class HEADLESS_EXPORT DataEntry {
 public:
  static std::unique_ptr<DataEntry> Parse(const base::Value& value, ErrorReporter* errors);

  DataEntry(const DataEntry&) = delete;
  DataEntry& operator=(const DataEntry&) = delete;

  ~DataEntry() { }


  // Request URL.
  std::string GetRequestURL() const { return requesturl_; }
  void SetRequestURL(const std::string& value) { requesturl_ = value; }

  // Request method.
  std::string GetRequestMethod() const { return request_method_; }
  void SetRequestMethod(const std::string& value) { request_method_ = value; }

  // Request headers
  const std::vector<std::unique_ptr<::headless::cache_storage::Header>>* GetRequestHeaders() const { return &request_headers_; }
  void SetRequestHeaders(std::vector<std::unique_ptr<::headless::cache_storage::Header>> value) { request_headers_ = std::move(value); }

  // Number of seconds since epoch.
  double GetResponseTime() const { return response_time_; }
  void SetResponseTime(double value) { response_time_ = value; }

  // HTTP response status code.
  int GetResponseStatus() const { return response_status_; }
  void SetResponseStatus(int value) { response_status_ = value; }

  // HTTP response status text.
  std::string GetResponseStatusText() const { return response_status_text_; }
  void SetResponseStatusText(const std::string& value) { response_status_text_ = value; }

  // HTTP response type
  ::headless::cache_storage::CachedResponseType GetResponseType() const { return response_type_; }
  void SetResponseType(::headless::cache_storage::CachedResponseType value) { response_type_ = value; }

  // Response headers
  const std::vector<std::unique_ptr<::headless::cache_storage::Header>>* GetResponseHeaders() const { return &response_headers_; }
  void SetResponseHeaders(std::vector<std::unique_ptr<::headless::cache_storage::Header>> value) { response_headers_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<DataEntry> Clone() const;

  template<int STATE>
  class DataEntryBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kRequestURLSet = 1 << 1,
    kRequestMethodSet = 1 << 2,
    kRequestHeadersSet = 1 << 3,
    kResponseTimeSet = 1 << 4,
    kResponseStatusSet = 1 << 5,
    kResponseStatusTextSet = 1 << 6,
    kResponseTypeSet = 1 << 7,
    kResponseHeadersSet = 1 << 8,
      kAllRequiredFieldsSet = (kRequestURLSet | kRequestMethodSet | kRequestHeadersSet | kResponseTimeSet | kResponseStatusSet | kResponseStatusTextSet | kResponseTypeSet | kResponseHeadersSet | 0)
    };

    DataEntryBuilder<STATE | kRequestURLSet>& SetRequestURL(const std::string& value) {
      static_assert(!(STATE & kRequestURLSet), "property requestURL should not have already been set");
      result_->SetRequestURL(value);
      return CastState<kRequestURLSet>();
    }

    DataEntryBuilder<STATE | kRequestMethodSet>& SetRequestMethod(const std::string& value) {
      static_assert(!(STATE & kRequestMethodSet), "property requestMethod should not have already been set");
      result_->SetRequestMethod(value);
      return CastState<kRequestMethodSet>();
    }

    DataEntryBuilder<STATE | kRequestHeadersSet>& SetRequestHeaders(std::vector<std::unique_ptr<::headless::cache_storage::Header>> value) {
      static_assert(!(STATE & kRequestHeadersSet), "property requestHeaders should not have already been set");
      result_->SetRequestHeaders(std::move(value));
      return CastState<kRequestHeadersSet>();
    }

    DataEntryBuilder<STATE | kResponseTimeSet>& SetResponseTime(double value) {
      static_assert(!(STATE & kResponseTimeSet), "property responseTime should not have already been set");
      result_->SetResponseTime(value);
      return CastState<kResponseTimeSet>();
    }

    DataEntryBuilder<STATE | kResponseStatusSet>& SetResponseStatus(int value) {
      static_assert(!(STATE & kResponseStatusSet), "property responseStatus should not have already been set");
      result_->SetResponseStatus(value);
      return CastState<kResponseStatusSet>();
    }

    DataEntryBuilder<STATE | kResponseStatusTextSet>& SetResponseStatusText(const std::string& value) {
      static_assert(!(STATE & kResponseStatusTextSet), "property responseStatusText should not have already been set");
      result_->SetResponseStatusText(value);
      return CastState<kResponseStatusTextSet>();
    }

    DataEntryBuilder<STATE | kResponseTypeSet>& SetResponseType(::headless::cache_storage::CachedResponseType value) {
      static_assert(!(STATE & kResponseTypeSet), "property responseType should not have already been set");
      result_->SetResponseType(value);
      return CastState<kResponseTypeSet>();
    }

    DataEntryBuilder<STATE | kResponseHeadersSet>& SetResponseHeaders(std::vector<std::unique_ptr<::headless::cache_storage::Header>> value) {
      static_assert(!(STATE & kResponseHeadersSet), "property responseHeaders should not have already been set");
      result_->SetResponseHeaders(std::move(value));
      return CastState<kResponseHeadersSet>();
    }

    std::unique_ptr<DataEntry> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class DataEntry;
    DataEntryBuilder() : result_(new DataEntry()) { }

    template<int STEP> DataEntryBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<DataEntryBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<DataEntry> result_;
  };

  static DataEntryBuilder<0> Builder() {
    return DataEntryBuilder<0>();
  }

 private:
  DataEntry() { }

  std::string requesturl_;
  std::string request_method_;
  std::vector<std::unique_ptr<::headless::cache_storage::Header>> request_headers_;
  double response_time_;
  int response_status_;
  std::string response_status_text_;
  ::headless::cache_storage::CachedResponseType response_type_;
  std::vector<std::unique_ptr<::headless::cache_storage::Header>> response_headers_;
};


// Cache identifier.
class HEADLESS_EXPORT Cache {
 public:
  static std::unique_ptr<Cache> Parse(const base::Value& value, ErrorReporter* errors);

  Cache(const Cache&) = delete;
  Cache& operator=(const Cache&) = delete;

  ~Cache() { }


  // An opaque unique id of the cache.
  std::string GetCacheId() const { return cache_id_; }
  void SetCacheId(const std::string& value) { cache_id_ = value; }

  // Security origin of the cache.
  std::string GetSecurityOrigin() const { return security_origin_; }
  void SetSecurityOrigin(const std::string& value) { security_origin_ = value; }

  // Storage key of the cache.
  std::string GetStorageKey() const { return storage_key_; }
  void SetStorageKey(const std::string& value) { storage_key_ = value; }

  // Storage bucket of the cache.
  bool HasStorageBucket() const { return !!storage_bucket_; }
  const ::headless::storage::StorageBucket* GetStorageBucket() const { DCHECK(HasStorageBucket()); return storage_bucket_.value().get(); }
  void SetStorageBucket(std::unique_ptr<::headless::storage::StorageBucket> value) { storage_bucket_ = std::move(value); }

  // The name of the cache.
  std::string GetCacheName() const { return cache_name_; }
  void SetCacheName(const std::string& value) { cache_name_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<Cache> Clone() const;

  template<int STATE>
  class CacheBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kCacheIdSet = 1 << 1,
    kSecurityOriginSet = 1 << 2,
    kStorageKeySet = 1 << 3,
    kCacheNameSet = 1 << 4,
      kAllRequiredFieldsSet = (kCacheIdSet | kSecurityOriginSet | kStorageKeySet | kCacheNameSet | 0)
    };

    CacheBuilder<STATE | kCacheIdSet>& SetCacheId(const std::string& value) {
      static_assert(!(STATE & kCacheIdSet), "property cacheId should not have already been set");
      result_->SetCacheId(value);
      return CastState<kCacheIdSet>();
    }

    CacheBuilder<STATE | kSecurityOriginSet>& SetSecurityOrigin(const std::string& value) {
      static_assert(!(STATE & kSecurityOriginSet), "property securityOrigin should not have already been set");
      result_->SetSecurityOrigin(value);
      return CastState<kSecurityOriginSet>();
    }

    CacheBuilder<STATE | kStorageKeySet>& SetStorageKey(const std::string& value) {
      static_assert(!(STATE & kStorageKeySet), "property storageKey should not have already been set");
      result_->SetStorageKey(value);
      return CastState<kStorageKeySet>();
    }

    CacheBuilder<STATE>& SetStorageBucket(std::unique_ptr<::headless::storage::StorageBucket> value) {
      result_->SetStorageBucket(std::move(value));
      return *this;
    }

    CacheBuilder<STATE | kCacheNameSet>& SetCacheName(const std::string& value) {
      static_assert(!(STATE & kCacheNameSet), "property cacheName should not have already been set");
      result_->SetCacheName(value);
      return CastState<kCacheNameSet>();
    }

    std::unique_ptr<Cache> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class Cache;
    CacheBuilder() : result_(new Cache()) { }

    template<int STEP> CacheBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<CacheBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<Cache> result_;
  };

  static CacheBuilder<0> Builder() {
    return CacheBuilder<0>();
  }

 private:
  Cache() { }

  std::string cache_id_;
  std::string security_origin_;
  std::string storage_key_;
  absl::optional<std::unique_ptr<::headless::storage::StorageBucket>> storage_bucket_;
  std::string cache_name_;
};


class HEADLESS_EXPORT Header {
 public:
  static std::unique_ptr<Header> Parse(const base::Value& value, ErrorReporter* errors);

  Header(const Header&) = delete;
  Header& operator=(const Header&) = delete;

  ~Header() { }


  std::string GetName() const { return name_; }
  void SetName(const std::string& value) { name_ = value; }

  std::string GetValue() const { return value_; }
  void SetValue(const std::string& value) { value_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<Header> Clone() const;

  template<int STATE>
  class HeaderBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kNameSet = 1 << 1,
    kValueSet = 1 << 2,
      kAllRequiredFieldsSet = (kNameSet | kValueSet | 0)
    };

    HeaderBuilder<STATE | kNameSet>& SetName(const std::string& value) {
      static_assert(!(STATE & kNameSet), "property name should not have already been set");
      result_->SetName(value);
      return CastState<kNameSet>();
    }

    HeaderBuilder<STATE | kValueSet>& SetValue(const std::string& value) {
      static_assert(!(STATE & kValueSet), "property value should not have already been set");
      result_->SetValue(value);
      return CastState<kValueSet>();
    }

    std::unique_ptr<Header> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class Header;
    HeaderBuilder() : result_(new Header()) { }

    template<int STEP> HeaderBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<HeaderBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<Header> result_;
  };

  static HeaderBuilder<0> Builder() {
    return HeaderBuilder<0>();
  }

 private:
  Header() { }

  std::string name_;
  std::string value_;
};


// Cached response
class HEADLESS_EXPORT CachedResponse {
 public:
  static std::unique_ptr<CachedResponse> Parse(const base::Value& value, ErrorReporter* errors);

  CachedResponse(const CachedResponse&) = delete;
  CachedResponse& operator=(const CachedResponse&) = delete;

  ~CachedResponse() { }


  // Entry content, base64-encoded.
  protocol::Binary GetBody() const { return body_; }
  void SetBody(const protocol::Binary& value) { body_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<CachedResponse> Clone() const;

  template<int STATE>
  class CachedResponseBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kBodySet = 1 << 1,
      kAllRequiredFieldsSet = (kBodySet | 0)
    };

    CachedResponseBuilder<STATE | kBodySet>& SetBody(const protocol::Binary& value) {
      static_assert(!(STATE & kBodySet), "property body should not have already been set");
      result_->SetBody(value);
      return CastState<kBodySet>();
    }

    std::unique_ptr<CachedResponse> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class CachedResponse;
    CachedResponseBuilder() : result_(new CachedResponse()) { }

    template<int STEP> CachedResponseBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<CachedResponseBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<CachedResponse> result_;
  };

  static CachedResponseBuilder<0> Builder() {
    return CachedResponseBuilder<0>();
  }

 private:
  CachedResponse() { }

  protocol::Binary body_;
};


// Parameters for the DeleteCache command.
class HEADLESS_EXPORT DeleteCacheParams {
 public:
  static std::unique_ptr<DeleteCacheParams> Parse(const base::Value& value, ErrorReporter* errors);

  DeleteCacheParams(const DeleteCacheParams&) = delete;
  DeleteCacheParams& operator=(const DeleteCacheParams&) = delete;

  ~DeleteCacheParams() { }


  // Id of cache for deletion.
  std::string GetCacheId() const { return cache_id_; }
  void SetCacheId(const std::string& value) { cache_id_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<DeleteCacheParams> Clone() const;

  template<int STATE>
  class DeleteCacheParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kCacheIdSet = 1 << 1,
      kAllRequiredFieldsSet = (kCacheIdSet | 0)
    };

    DeleteCacheParamsBuilder<STATE | kCacheIdSet>& SetCacheId(const std::string& value) {
      static_assert(!(STATE & kCacheIdSet), "property cacheId should not have already been set");
      result_->SetCacheId(value);
      return CastState<kCacheIdSet>();
    }

    std::unique_ptr<DeleteCacheParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class DeleteCacheParams;
    DeleteCacheParamsBuilder() : result_(new DeleteCacheParams()) { }

    template<int STEP> DeleteCacheParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<DeleteCacheParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<DeleteCacheParams> result_;
  };

  static DeleteCacheParamsBuilder<0> Builder() {
    return DeleteCacheParamsBuilder<0>();
  }

 private:
  DeleteCacheParams() { }

  std::string cache_id_;
};


// Result for the DeleteCache command.
class HEADLESS_EXPORT DeleteCacheResult {
 public:
  static std::unique_ptr<DeleteCacheResult> Parse(const base::Value& value, ErrorReporter* errors);

  DeleteCacheResult(const DeleteCacheResult&) = delete;
  DeleteCacheResult& operator=(const DeleteCacheResult&) = delete;

  ~DeleteCacheResult() { }


  base::Value Serialize() const;
  std::unique_ptr<DeleteCacheResult> Clone() const;

  template<int STATE>
  class DeleteCacheResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<DeleteCacheResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class DeleteCacheResult;
    DeleteCacheResultBuilder() : result_(new DeleteCacheResult()) { }

    template<int STEP> DeleteCacheResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<DeleteCacheResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<DeleteCacheResult> result_;
  };

  static DeleteCacheResultBuilder<0> Builder() {
    return DeleteCacheResultBuilder<0>();
  }

 private:
  DeleteCacheResult() { }

};


// Parameters for the DeleteEntry command.
class HEADLESS_EXPORT DeleteEntryParams {
 public:
  static std::unique_ptr<DeleteEntryParams> Parse(const base::Value& value, ErrorReporter* errors);

  DeleteEntryParams(const DeleteEntryParams&) = delete;
  DeleteEntryParams& operator=(const DeleteEntryParams&) = delete;

  ~DeleteEntryParams() { }


  // Id of cache where the entry will be deleted.
  std::string GetCacheId() const { return cache_id_; }
  void SetCacheId(const std::string& value) { cache_id_ = value; }

  // URL spec of the request.
  std::string GetRequest() const { return request_; }
  void SetRequest(const std::string& value) { request_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<DeleteEntryParams> Clone() const;

  template<int STATE>
  class DeleteEntryParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kCacheIdSet = 1 << 1,
    kRequestSet = 1 << 2,
      kAllRequiredFieldsSet = (kCacheIdSet | kRequestSet | 0)
    };

    DeleteEntryParamsBuilder<STATE | kCacheIdSet>& SetCacheId(const std::string& value) {
      static_assert(!(STATE & kCacheIdSet), "property cacheId should not have already been set");
      result_->SetCacheId(value);
      return CastState<kCacheIdSet>();
    }

    DeleteEntryParamsBuilder<STATE | kRequestSet>& SetRequest(const std::string& value) {
      static_assert(!(STATE & kRequestSet), "property request should not have already been set");
      result_->SetRequest(value);
      return CastState<kRequestSet>();
    }

    std::unique_ptr<DeleteEntryParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class DeleteEntryParams;
    DeleteEntryParamsBuilder() : result_(new DeleteEntryParams()) { }

    template<int STEP> DeleteEntryParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<DeleteEntryParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<DeleteEntryParams> result_;
  };

  static DeleteEntryParamsBuilder<0> Builder() {
    return DeleteEntryParamsBuilder<0>();
  }

 private:
  DeleteEntryParams() { }

  std::string cache_id_;
  std::string request_;
};


// Result for the DeleteEntry command.
class HEADLESS_EXPORT DeleteEntryResult {
 public:
  static std::unique_ptr<DeleteEntryResult> Parse(const base::Value& value, ErrorReporter* errors);

  DeleteEntryResult(const DeleteEntryResult&) = delete;
  DeleteEntryResult& operator=(const DeleteEntryResult&) = delete;

  ~DeleteEntryResult() { }


  base::Value Serialize() const;
  std::unique_ptr<DeleteEntryResult> Clone() const;

  template<int STATE>
  class DeleteEntryResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<DeleteEntryResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class DeleteEntryResult;
    DeleteEntryResultBuilder() : result_(new DeleteEntryResult()) { }

    template<int STEP> DeleteEntryResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<DeleteEntryResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<DeleteEntryResult> result_;
  };

  static DeleteEntryResultBuilder<0> Builder() {
    return DeleteEntryResultBuilder<0>();
  }

 private:
  DeleteEntryResult() { }

};


// Parameters for the RequestCacheNames command.
class HEADLESS_EXPORT RequestCacheNamesParams {
 public:
  static std::unique_ptr<RequestCacheNamesParams> Parse(const base::Value& value, ErrorReporter* errors);

  RequestCacheNamesParams(const RequestCacheNamesParams&) = delete;
  RequestCacheNamesParams& operator=(const RequestCacheNamesParams&) = delete;

  ~RequestCacheNamesParams() { }


  // At least and at most one of securityOrigin, storageKey, storageBucket must be specified.
  // Security origin.
  bool HasSecurityOrigin() const { return !!security_origin_; }
  std::string GetSecurityOrigin() const { DCHECK(HasSecurityOrigin()); return security_origin_.value(); }
  void SetSecurityOrigin(const std::string& value) { security_origin_ = value; }

  // Storage key.
  bool HasStorageKey() const { return !!storage_key_; }
  std::string GetStorageKey() const { DCHECK(HasStorageKey()); return storage_key_.value(); }
  void SetStorageKey(const std::string& value) { storage_key_ = value; }

  // Storage bucket. If not specified, it uses the default bucket.
  bool HasStorageBucket() const { return !!storage_bucket_; }
  const ::headless::storage::StorageBucket* GetStorageBucket() const { DCHECK(HasStorageBucket()); return storage_bucket_.value().get(); }
  void SetStorageBucket(std::unique_ptr<::headless::storage::StorageBucket> value) { storage_bucket_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<RequestCacheNamesParams> Clone() const;

  template<int STATE>
  class RequestCacheNamesParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    RequestCacheNamesParamsBuilder<STATE>& SetSecurityOrigin(const std::string& value) {
      result_->SetSecurityOrigin(value);
      return *this;
    }

    RequestCacheNamesParamsBuilder<STATE>& SetStorageKey(const std::string& value) {
      result_->SetStorageKey(value);
      return *this;
    }

    RequestCacheNamesParamsBuilder<STATE>& SetStorageBucket(std::unique_ptr<::headless::storage::StorageBucket> value) {
      result_->SetStorageBucket(std::move(value));
      return *this;
    }

    std::unique_ptr<RequestCacheNamesParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class RequestCacheNamesParams;
    RequestCacheNamesParamsBuilder() : result_(new RequestCacheNamesParams()) { }

    template<int STEP> RequestCacheNamesParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<RequestCacheNamesParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<RequestCacheNamesParams> result_;
  };

  static RequestCacheNamesParamsBuilder<0> Builder() {
    return RequestCacheNamesParamsBuilder<0>();
  }

 private:
  RequestCacheNamesParams() { }

  absl::optional<std::string> security_origin_;
  absl::optional<std::string> storage_key_;
  absl::optional<std::unique_ptr<::headless::storage::StorageBucket>> storage_bucket_;
};


// Result for the RequestCacheNames command.
class HEADLESS_EXPORT RequestCacheNamesResult {
 public:
  static std::unique_ptr<RequestCacheNamesResult> Parse(const base::Value& value, ErrorReporter* errors);

  RequestCacheNamesResult(const RequestCacheNamesResult&) = delete;
  RequestCacheNamesResult& operator=(const RequestCacheNamesResult&) = delete;

  ~RequestCacheNamesResult() { }


  // Caches for the security origin.
  const std::vector<std::unique_ptr<::headless::cache_storage::Cache>>* GetCaches() const { return &caches_; }
  void SetCaches(std::vector<std::unique_ptr<::headless::cache_storage::Cache>> value) { caches_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<RequestCacheNamesResult> Clone() const;

  template<int STATE>
  class RequestCacheNamesResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kCachesSet = 1 << 1,
      kAllRequiredFieldsSet = (kCachesSet | 0)
    };

    RequestCacheNamesResultBuilder<STATE | kCachesSet>& SetCaches(std::vector<std::unique_ptr<::headless::cache_storage::Cache>> value) {
      static_assert(!(STATE & kCachesSet), "property caches should not have already been set");
      result_->SetCaches(std::move(value));
      return CastState<kCachesSet>();
    }

    std::unique_ptr<RequestCacheNamesResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class RequestCacheNamesResult;
    RequestCacheNamesResultBuilder() : result_(new RequestCacheNamesResult()) { }

    template<int STEP> RequestCacheNamesResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<RequestCacheNamesResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<RequestCacheNamesResult> result_;
  };

  static RequestCacheNamesResultBuilder<0> Builder() {
    return RequestCacheNamesResultBuilder<0>();
  }

 private:
  RequestCacheNamesResult() { }

  std::vector<std::unique_ptr<::headless::cache_storage::Cache>> caches_;
};


// Parameters for the RequestCachedResponse command.
class HEADLESS_EXPORT RequestCachedResponseParams {
 public:
  static std::unique_ptr<RequestCachedResponseParams> Parse(const base::Value& value, ErrorReporter* errors);

  RequestCachedResponseParams(const RequestCachedResponseParams&) = delete;
  RequestCachedResponseParams& operator=(const RequestCachedResponseParams&) = delete;

  ~RequestCachedResponseParams() { }


  // Id of cache that contains the entry.
  std::string GetCacheId() const { return cache_id_; }
  void SetCacheId(const std::string& value) { cache_id_ = value; }

  // URL spec of the request.
  std::string GetRequestURL() const { return requesturl_; }
  void SetRequestURL(const std::string& value) { requesturl_ = value; }

  // headers of the request.
  const std::vector<std::unique_ptr<::headless::cache_storage::Header>>* GetRequestHeaders() const { return &request_headers_; }
  void SetRequestHeaders(std::vector<std::unique_ptr<::headless::cache_storage::Header>> value) { request_headers_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<RequestCachedResponseParams> Clone() const;

  template<int STATE>
  class RequestCachedResponseParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kCacheIdSet = 1 << 1,
    kRequestURLSet = 1 << 2,
    kRequestHeadersSet = 1 << 3,
      kAllRequiredFieldsSet = (kCacheIdSet | kRequestURLSet | kRequestHeadersSet | 0)
    };

    RequestCachedResponseParamsBuilder<STATE | kCacheIdSet>& SetCacheId(const std::string& value) {
      static_assert(!(STATE & kCacheIdSet), "property cacheId should not have already been set");
      result_->SetCacheId(value);
      return CastState<kCacheIdSet>();
    }

    RequestCachedResponseParamsBuilder<STATE | kRequestURLSet>& SetRequestURL(const std::string& value) {
      static_assert(!(STATE & kRequestURLSet), "property requestURL should not have already been set");
      result_->SetRequestURL(value);
      return CastState<kRequestURLSet>();
    }

    RequestCachedResponseParamsBuilder<STATE | kRequestHeadersSet>& SetRequestHeaders(std::vector<std::unique_ptr<::headless::cache_storage::Header>> value) {
      static_assert(!(STATE & kRequestHeadersSet), "property requestHeaders should not have already been set");
      result_->SetRequestHeaders(std::move(value));
      return CastState<kRequestHeadersSet>();
    }

    std::unique_ptr<RequestCachedResponseParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class RequestCachedResponseParams;
    RequestCachedResponseParamsBuilder() : result_(new RequestCachedResponseParams()) { }

    template<int STEP> RequestCachedResponseParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<RequestCachedResponseParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<RequestCachedResponseParams> result_;
  };

  static RequestCachedResponseParamsBuilder<0> Builder() {
    return RequestCachedResponseParamsBuilder<0>();
  }

 private:
  RequestCachedResponseParams() { }

  std::string cache_id_;
  std::string requesturl_;
  std::vector<std::unique_ptr<::headless::cache_storage::Header>> request_headers_;
};


// Result for the RequestCachedResponse command.
class HEADLESS_EXPORT RequestCachedResponseResult {
 public:
  static std::unique_ptr<RequestCachedResponseResult> Parse(const base::Value& value, ErrorReporter* errors);

  RequestCachedResponseResult(const RequestCachedResponseResult&) = delete;
  RequestCachedResponseResult& operator=(const RequestCachedResponseResult&) = delete;

  ~RequestCachedResponseResult() { }


  // Response read from the cache.
  const ::headless::cache_storage::CachedResponse* GetResponse() const { return response_.get(); }
  void SetResponse(std::unique_ptr<::headless::cache_storage::CachedResponse> value) { response_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<RequestCachedResponseResult> Clone() const;

  template<int STATE>
  class RequestCachedResponseResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kResponseSet = 1 << 1,
      kAllRequiredFieldsSet = (kResponseSet | 0)
    };

    RequestCachedResponseResultBuilder<STATE | kResponseSet>& SetResponse(std::unique_ptr<::headless::cache_storage::CachedResponse> value) {
      static_assert(!(STATE & kResponseSet), "property response should not have already been set");
      result_->SetResponse(std::move(value));
      return CastState<kResponseSet>();
    }

    std::unique_ptr<RequestCachedResponseResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class RequestCachedResponseResult;
    RequestCachedResponseResultBuilder() : result_(new RequestCachedResponseResult()) { }

    template<int STEP> RequestCachedResponseResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<RequestCachedResponseResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<RequestCachedResponseResult> result_;
  };

  static RequestCachedResponseResultBuilder<0> Builder() {
    return RequestCachedResponseResultBuilder<0>();
  }

 private:
  RequestCachedResponseResult() { }

  std::unique_ptr<::headless::cache_storage::CachedResponse> response_;
};


// Parameters for the RequestEntries command.
class HEADLESS_EXPORT RequestEntriesParams {
 public:
  static std::unique_ptr<RequestEntriesParams> Parse(const base::Value& value, ErrorReporter* errors);

  RequestEntriesParams(const RequestEntriesParams&) = delete;
  RequestEntriesParams& operator=(const RequestEntriesParams&) = delete;

  ~RequestEntriesParams() { }


  // ID of cache to get entries from.
  std::string GetCacheId() const { return cache_id_; }
  void SetCacheId(const std::string& value) { cache_id_ = value; }

  // Number of records to skip.
  bool HasSkipCount() const { return !!skip_count_; }
  int GetSkipCount() const { DCHECK(HasSkipCount()); return skip_count_.value(); }
  void SetSkipCount(int value) { skip_count_ = value; }

  // Number of records to fetch.
  bool HasPageSize() const { return !!page_size_; }
  int GetPageSize() const { DCHECK(HasPageSize()); return page_size_.value(); }
  void SetPageSize(int value) { page_size_ = value; }

  // If present, only return the entries containing this substring in the path
  bool HasPathFilter() const { return !!path_filter_; }
  std::string GetPathFilter() const { DCHECK(HasPathFilter()); return path_filter_.value(); }
  void SetPathFilter(const std::string& value) { path_filter_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<RequestEntriesParams> Clone() const;

  template<int STATE>
  class RequestEntriesParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kCacheIdSet = 1 << 1,
      kAllRequiredFieldsSet = (kCacheIdSet | 0)
    };

    RequestEntriesParamsBuilder<STATE | kCacheIdSet>& SetCacheId(const std::string& value) {
      static_assert(!(STATE & kCacheIdSet), "property cacheId should not have already been set");
      result_->SetCacheId(value);
      return CastState<kCacheIdSet>();
    }

    RequestEntriesParamsBuilder<STATE>& SetSkipCount(int value) {
      result_->SetSkipCount(value);
      return *this;
    }

    RequestEntriesParamsBuilder<STATE>& SetPageSize(int value) {
      result_->SetPageSize(value);
      return *this;
    }

    RequestEntriesParamsBuilder<STATE>& SetPathFilter(const std::string& value) {
      result_->SetPathFilter(value);
      return *this;
    }

    std::unique_ptr<RequestEntriesParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class RequestEntriesParams;
    RequestEntriesParamsBuilder() : result_(new RequestEntriesParams()) { }

    template<int STEP> RequestEntriesParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<RequestEntriesParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<RequestEntriesParams> result_;
  };

  static RequestEntriesParamsBuilder<0> Builder() {
    return RequestEntriesParamsBuilder<0>();
  }

 private:
  RequestEntriesParams() { }

  std::string cache_id_;
  absl::optional<int> skip_count_;
  absl::optional<int> page_size_;
  absl::optional<std::string> path_filter_;
};


// Result for the RequestEntries command.
class HEADLESS_EXPORT RequestEntriesResult {
 public:
  static std::unique_ptr<RequestEntriesResult> Parse(const base::Value& value, ErrorReporter* errors);

  RequestEntriesResult(const RequestEntriesResult&) = delete;
  RequestEntriesResult& operator=(const RequestEntriesResult&) = delete;

  ~RequestEntriesResult() { }


  // Array of object store data entries.
  const std::vector<std::unique_ptr<::headless::cache_storage::DataEntry>>* GetCacheDataEntries() const { return &cache_data_entries_; }
  void SetCacheDataEntries(std::vector<std::unique_ptr<::headless::cache_storage::DataEntry>> value) { cache_data_entries_ = std::move(value); }

  // Count of returned entries from this storage. If pathFilter is empty, it
  // is the count of all entries from this storage.
  double GetReturnCount() const { return return_count_; }
  void SetReturnCount(double value) { return_count_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<RequestEntriesResult> Clone() const;

  template<int STATE>
  class RequestEntriesResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kCacheDataEntriesSet = 1 << 1,
    kReturnCountSet = 1 << 2,
      kAllRequiredFieldsSet = (kCacheDataEntriesSet | kReturnCountSet | 0)
    };

    RequestEntriesResultBuilder<STATE | kCacheDataEntriesSet>& SetCacheDataEntries(std::vector<std::unique_ptr<::headless::cache_storage::DataEntry>> value) {
      static_assert(!(STATE & kCacheDataEntriesSet), "property cacheDataEntries should not have already been set");
      result_->SetCacheDataEntries(std::move(value));
      return CastState<kCacheDataEntriesSet>();
    }

    RequestEntriesResultBuilder<STATE | kReturnCountSet>& SetReturnCount(double value) {
      static_assert(!(STATE & kReturnCountSet), "property returnCount should not have already been set");
      result_->SetReturnCount(value);
      return CastState<kReturnCountSet>();
    }

    std::unique_ptr<RequestEntriesResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class RequestEntriesResult;
    RequestEntriesResultBuilder() : result_(new RequestEntriesResult()) { }

    template<int STEP> RequestEntriesResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<RequestEntriesResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<RequestEntriesResult> result_;
  };

  static RequestEntriesResultBuilder<0> Builder() {
    return RequestEntriesResultBuilder<0>();
  }

 private:
  RequestEntriesResult() { }

  std::vector<std::unique_ptr<::headless::cache_storage::DataEntry>> cache_data_entries_;
  double return_count_;
};


}  // namespace cache_storage

}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_TYPES_CACHE_STORAGE_H_
