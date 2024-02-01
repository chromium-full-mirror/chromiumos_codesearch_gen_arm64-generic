// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include "headless/public/devtools/domains/types_dom.h"
#include "headless/public/devtools/domains/types_debugger.h"
#include "headless/public/devtools/domains/types_emulation.h"
#include "headless/public/devtools/domains/types_io.h"
#include "headless/public/devtools/domains/types_network.h"
#include "headless/public/devtools/domains/types_page.h"
#include "headless/public/devtools/domains/types_runtime.h"
#include "headless/public/devtools/domains/types_security.h"

#include "base/values.h"
#include "headless/public/devtools/internal/type_conversions_dom.h"
#include "headless/public/devtools/internal/type_conversions_debugger.h"
#include "headless/public/devtools/internal/type_conversions_emulation.h"
#include "headless/public/devtools/internal/type_conversions_io.h"
#include "headless/public/devtools/internal/type_conversions_network.h"
#include "headless/public/devtools/internal/type_conversions_page.h"
#include "headless/public/devtools/internal/type_conversions_runtime.h"
#include "headless/public/devtools/internal/type_conversions_security.h"

namespace headless {

namespace network {

std::unique_ptr<ResourceTiming> ResourceTiming::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ResourceTiming");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ResourceTiming> result(new ResourceTiming());
  errors->Push();
  errors->SetName("ResourceTiming");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* request_time_value = dict.Find("requestTime");
  if (request_time_value) {
    errors->SetName("requestTime");
    result->request_time_ = internal::FromValue<double>::Parse(*request_time_value, errors);
  } else {
    errors->AddError("required property missing: requestTime");
  }
  const base::Value* proxy_start_value = dict.Find("proxyStart");
  if (proxy_start_value) {
    errors->SetName("proxyStart");
    result->proxy_start_ = internal::FromValue<double>::Parse(*proxy_start_value, errors);
  } else {
    errors->AddError("required property missing: proxyStart");
  }
  const base::Value* proxy_end_value = dict.Find("proxyEnd");
  if (proxy_end_value) {
    errors->SetName("proxyEnd");
    result->proxy_end_ = internal::FromValue<double>::Parse(*proxy_end_value, errors);
  } else {
    errors->AddError("required property missing: proxyEnd");
  }
  const base::Value* dns_start_value = dict.Find("dnsStart");
  if (dns_start_value) {
    errors->SetName("dnsStart");
    result->dns_start_ = internal::FromValue<double>::Parse(*dns_start_value, errors);
  } else {
    errors->AddError("required property missing: dnsStart");
  }
  const base::Value* dns_end_value = dict.Find("dnsEnd");
  if (dns_end_value) {
    errors->SetName("dnsEnd");
    result->dns_end_ = internal::FromValue<double>::Parse(*dns_end_value, errors);
  } else {
    errors->AddError("required property missing: dnsEnd");
  }
  const base::Value* connect_start_value = dict.Find("connectStart");
  if (connect_start_value) {
    errors->SetName("connectStart");
    result->connect_start_ = internal::FromValue<double>::Parse(*connect_start_value, errors);
  } else {
    errors->AddError("required property missing: connectStart");
  }
  const base::Value* connect_end_value = dict.Find("connectEnd");
  if (connect_end_value) {
    errors->SetName("connectEnd");
    result->connect_end_ = internal::FromValue<double>::Parse(*connect_end_value, errors);
  } else {
    errors->AddError("required property missing: connectEnd");
  }
  const base::Value* ssl_start_value = dict.Find("sslStart");
  if (ssl_start_value) {
    errors->SetName("sslStart");
    result->ssl_start_ = internal::FromValue<double>::Parse(*ssl_start_value, errors);
  } else {
    errors->AddError("required property missing: sslStart");
  }
  const base::Value* ssl_end_value = dict.Find("sslEnd");
  if (ssl_end_value) {
    errors->SetName("sslEnd");
    result->ssl_end_ = internal::FromValue<double>::Parse(*ssl_end_value, errors);
  } else {
    errors->AddError("required property missing: sslEnd");
  }
  const base::Value* worker_start_value = dict.Find("workerStart");
  if (worker_start_value) {
    errors->SetName("workerStart");
    result->worker_start_ = internal::FromValue<double>::Parse(*worker_start_value, errors);
  } else {
    errors->AddError("required property missing: workerStart");
  }
  const base::Value* worker_ready_value = dict.Find("workerReady");
  if (worker_ready_value) {
    errors->SetName("workerReady");
    result->worker_ready_ = internal::FromValue<double>::Parse(*worker_ready_value, errors);
  } else {
    errors->AddError("required property missing: workerReady");
  }
  const base::Value* worker_fetch_start_value = dict.Find("workerFetchStart");
  if (worker_fetch_start_value) {
    errors->SetName("workerFetchStart");
    result->worker_fetch_start_ = internal::FromValue<double>::Parse(*worker_fetch_start_value, errors);
  } else {
    errors->AddError("required property missing: workerFetchStart");
  }
  const base::Value* worker_respond_with_settled_value = dict.Find("workerRespondWithSettled");
  if (worker_respond_with_settled_value) {
    errors->SetName("workerRespondWithSettled");
    result->worker_respond_with_settled_ = internal::FromValue<double>::Parse(*worker_respond_with_settled_value, errors);
  } else {
    errors->AddError("required property missing: workerRespondWithSettled");
  }
  const base::Value* send_start_value = dict.Find("sendStart");
  if (send_start_value) {
    errors->SetName("sendStart");
    result->send_start_ = internal::FromValue<double>::Parse(*send_start_value, errors);
  } else {
    errors->AddError("required property missing: sendStart");
  }
  const base::Value* send_end_value = dict.Find("sendEnd");
  if (send_end_value) {
    errors->SetName("sendEnd");
    result->send_end_ = internal::FromValue<double>::Parse(*send_end_value, errors);
  } else {
    errors->AddError("required property missing: sendEnd");
  }
  const base::Value* push_start_value = dict.Find("pushStart");
  if (push_start_value) {
    errors->SetName("pushStart");
    result->push_start_ = internal::FromValue<double>::Parse(*push_start_value, errors);
  } else {
    errors->AddError("required property missing: pushStart");
  }
  const base::Value* push_end_value = dict.Find("pushEnd");
  if (push_end_value) {
    errors->SetName("pushEnd");
    result->push_end_ = internal::FromValue<double>::Parse(*push_end_value, errors);
  } else {
    errors->AddError("required property missing: pushEnd");
  }
  const base::Value* receive_headers_start_value = dict.Find("receiveHeadersStart");
  if (receive_headers_start_value) {
    errors->SetName("receiveHeadersStart");
    result->receive_headers_start_ = internal::FromValue<double>::Parse(*receive_headers_start_value, errors);
  } else {
    errors->AddError("required property missing: receiveHeadersStart");
  }
  const base::Value* receive_headers_end_value = dict.Find("receiveHeadersEnd");
  if (receive_headers_end_value) {
    errors->SetName("receiveHeadersEnd");
    result->receive_headers_end_ = internal::FromValue<double>::Parse(*receive_headers_end_value, errors);
  } else {
    errors->AddError("required property missing: receiveHeadersEnd");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ResourceTiming::Serialize() const {
  base::Value::Dict result;
  result.Set("requestTime", internal::ToValue(request_time_));
  result.Set("proxyStart", internal::ToValue(proxy_start_));
  result.Set("proxyEnd", internal::ToValue(proxy_end_));
  result.Set("dnsStart", internal::ToValue(dns_start_));
  result.Set("dnsEnd", internal::ToValue(dns_end_));
  result.Set("connectStart", internal::ToValue(connect_start_));
  result.Set("connectEnd", internal::ToValue(connect_end_));
  result.Set("sslStart", internal::ToValue(ssl_start_));
  result.Set("sslEnd", internal::ToValue(ssl_end_));
  result.Set("workerStart", internal::ToValue(worker_start_));
  result.Set("workerReady", internal::ToValue(worker_ready_));
  result.Set("workerFetchStart", internal::ToValue(worker_fetch_start_));
  result.Set("workerRespondWithSettled", internal::ToValue(worker_respond_with_settled_));
  result.Set("sendStart", internal::ToValue(send_start_));
  result.Set("sendEnd", internal::ToValue(send_end_));
  result.Set("pushStart", internal::ToValue(push_start_));
  result.Set("pushEnd", internal::ToValue(push_end_));
  result.Set("receiveHeadersStart", internal::ToValue(receive_headers_start_));
  result.Set("receiveHeadersEnd", internal::ToValue(receive_headers_end_));
  return base::Value(std::move(result));
}

std::unique_ptr<ResourceTiming> ResourceTiming::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ResourceTiming> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<PostDataEntry> PostDataEntry::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("PostDataEntry");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<PostDataEntry> result(new PostDataEntry());
  errors->Push();
  errors->SetName("PostDataEntry");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* bytes_value = dict.Find("bytes");
  if (bytes_value) {
    errors->SetName("bytes");
    result->bytes_ = internal::FromValue<protocol::Binary>::Parse(*bytes_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value PostDataEntry::Serialize() const {
  base::Value::Dict result;
  if (bytes_)
    result.Set("bytes", internal::ToValue(bytes_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<PostDataEntry> PostDataEntry::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<PostDataEntry> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<Request> Request::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("Request");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<Request> result(new Request());
  errors->Push();
  errors->SetName("Request");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    errors->SetName("url");
    result->url_ = internal::FromValue<std::string>::Parse(*url_value, errors);
  } else {
    errors->AddError("required property missing: url");
  }
  const base::Value* url_fragment_value = dict.Find("urlFragment");
  if (url_fragment_value) {
    errors->SetName("urlFragment");
    result->url_fragment_ = internal::FromValue<std::string>::Parse(*url_fragment_value, errors);
  }
  const base::Value* method_value = dict.Find("method");
  if (method_value) {
    errors->SetName("method");
    result->method_ = internal::FromValue<std::string>::Parse(*method_value, errors);
  } else {
    errors->AddError("required property missing: method");
  }
  const base::Value* headers_value = dict.Find("headers");
  if (headers_value) {
    errors->SetName("headers");
    result->headers_ = internal::FromValue<base::Value::Dict>::Parse(*headers_value, errors);
  } else {
    errors->AddError("required property missing: headers");
  }
  const base::Value* post_data_value = dict.Find("postData");
  if (post_data_value) {
    errors->SetName("postData");
    result->post_data_ = internal::FromValue<std::string>::Parse(*post_data_value, errors);
  }
  const base::Value* has_post_data_value = dict.Find("hasPostData");
  if (has_post_data_value) {
    errors->SetName("hasPostData");
    result->has_post_data_ = internal::FromValue<bool>::Parse(*has_post_data_value, errors);
  }
  const base::Value* post_data_entries_value = dict.Find("postDataEntries");
  if (post_data_entries_value) {
    errors->SetName("postDataEntries");
    result->post_data_entries_ = internal::FromValue<std::vector<std::unique_ptr<::headless::network::PostDataEntry>>>::Parse(*post_data_entries_value, errors);
  }
  const base::Value* mixed_content_type_value = dict.Find("mixedContentType");
  if (mixed_content_type_value) {
    errors->SetName("mixedContentType");
    result->mixed_content_type_ = internal::FromValue<::headless::security::MixedContentType>::Parse(*mixed_content_type_value, errors);
  }
  const base::Value* initial_priority_value = dict.Find("initialPriority");
  if (initial_priority_value) {
    errors->SetName("initialPriority");
    result->initial_priority_ = internal::FromValue<::headless::network::ResourcePriority>::Parse(*initial_priority_value, errors);
  } else {
    errors->AddError("required property missing: initialPriority");
  }
  const base::Value* referrer_policy_value = dict.Find("referrerPolicy");
  if (referrer_policy_value) {
    errors->SetName("referrerPolicy");
    result->referrer_policy_ = internal::FromValue<::headless::network::RequestReferrerPolicy>::Parse(*referrer_policy_value, errors);
  } else {
    errors->AddError("required property missing: referrerPolicy");
  }
  const base::Value* is_link_preload_value = dict.Find("isLinkPreload");
  if (is_link_preload_value) {
    errors->SetName("isLinkPreload");
    result->is_link_preload_ = internal::FromValue<bool>::Parse(*is_link_preload_value, errors);
  }
  const base::Value* trust_token_params_value = dict.Find("trustTokenParams");
  if (trust_token_params_value) {
    errors->SetName("trustTokenParams");
    result->trust_token_params_ = internal::FromValue<::headless::network::TrustTokenParams>::Parse(*trust_token_params_value, errors);
  }
  const base::Value* is_same_site_value = dict.Find("isSameSite");
  if (is_same_site_value) {
    errors->SetName("isSameSite");
    result->is_same_site_ = internal::FromValue<bool>::Parse(*is_same_site_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value Request::Serialize() const {
  base::Value::Dict result;
  result.Set("url", internal::ToValue(url_));
  if (url_fragment_)
    result.Set("urlFragment", internal::ToValue(url_fragment_.value()));
  result.Set("method", internal::ToValue(method_));
  result.Set("headers", internal::ToValue(*headers_));
  if (post_data_)
    result.Set("postData", internal::ToValue(post_data_.value()));
  if (has_post_data_)
    result.Set("hasPostData", internal::ToValue(has_post_data_.value()));
  if (post_data_entries_)
    result.Set("postDataEntries", internal::ToValue(post_data_entries_.value()));
  if (mixed_content_type_)
    result.Set("mixedContentType", internal::ToValue(mixed_content_type_.value()));
  result.Set("initialPriority", internal::ToValue(initial_priority_));
  result.Set("referrerPolicy", internal::ToValue(referrer_policy_));
  if (is_link_preload_)
    result.Set("isLinkPreload", internal::ToValue(is_link_preload_.value()));
  if (trust_token_params_)
    result.Set("trustTokenParams", internal::ToValue(*trust_token_params_.value()));
  if (is_same_site_)
    result.Set("isSameSite", internal::ToValue(is_same_site_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<Request> Request::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<Request> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SignedCertificateTimestamp> SignedCertificateTimestamp::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SignedCertificateTimestamp");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SignedCertificateTimestamp> result(new SignedCertificateTimestamp());
  errors->Push();
  errors->SetName("SignedCertificateTimestamp");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* status_value = dict.Find("status");
  if (status_value) {
    errors->SetName("status");
    result->status_ = internal::FromValue<std::string>::Parse(*status_value, errors);
  } else {
    errors->AddError("required property missing: status");
  }
  const base::Value* origin_value = dict.Find("origin");
  if (origin_value) {
    errors->SetName("origin");
    result->origin_ = internal::FromValue<std::string>::Parse(*origin_value, errors);
  } else {
    errors->AddError("required property missing: origin");
  }
  const base::Value* log_description_value = dict.Find("logDescription");
  if (log_description_value) {
    errors->SetName("logDescription");
    result->log_description_ = internal::FromValue<std::string>::Parse(*log_description_value, errors);
  } else {
    errors->AddError("required property missing: logDescription");
  }
  const base::Value* log_id_value = dict.Find("logId");
  if (log_id_value) {
    errors->SetName("logId");
    result->log_id_ = internal::FromValue<std::string>::Parse(*log_id_value, errors);
  } else {
    errors->AddError("required property missing: logId");
  }
  const base::Value* timestamp_value = dict.Find("timestamp");
  if (timestamp_value) {
    errors->SetName("timestamp");
    result->timestamp_ = internal::FromValue<double>::Parse(*timestamp_value, errors);
  } else {
    errors->AddError("required property missing: timestamp");
  }
  const base::Value* hash_algorithm_value = dict.Find("hashAlgorithm");
  if (hash_algorithm_value) {
    errors->SetName("hashAlgorithm");
    result->hash_algorithm_ = internal::FromValue<std::string>::Parse(*hash_algorithm_value, errors);
  } else {
    errors->AddError("required property missing: hashAlgorithm");
  }
  const base::Value* signature_algorithm_value = dict.Find("signatureAlgorithm");
  if (signature_algorithm_value) {
    errors->SetName("signatureAlgorithm");
    result->signature_algorithm_ = internal::FromValue<std::string>::Parse(*signature_algorithm_value, errors);
  } else {
    errors->AddError("required property missing: signatureAlgorithm");
  }
  const base::Value* signature_data_value = dict.Find("signatureData");
  if (signature_data_value) {
    errors->SetName("signatureData");
    result->signature_data_ = internal::FromValue<std::string>::Parse(*signature_data_value, errors);
  } else {
    errors->AddError("required property missing: signatureData");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SignedCertificateTimestamp::Serialize() const {
  base::Value::Dict result;
  result.Set("status", internal::ToValue(status_));
  result.Set("origin", internal::ToValue(origin_));
  result.Set("logDescription", internal::ToValue(log_description_));
  result.Set("logId", internal::ToValue(log_id_));
  result.Set("timestamp", internal::ToValue(timestamp_));
  result.Set("hashAlgorithm", internal::ToValue(hash_algorithm_));
  result.Set("signatureAlgorithm", internal::ToValue(signature_algorithm_));
  result.Set("signatureData", internal::ToValue(signature_data_));
  return base::Value(std::move(result));
}

std::unique_ptr<SignedCertificateTimestamp> SignedCertificateTimestamp::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SignedCertificateTimestamp> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SecurityDetails> SecurityDetails::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SecurityDetails");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SecurityDetails> result(new SecurityDetails());
  errors->Push();
  errors->SetName("SecurityDetails");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* protocol_value = dict.Find("protocol");
  if (protocol_value) {
    errors->SetName("protocol");
    result->protocol_ = internal::FromValue<std::string>::Parse(*protocol_value, errors);
  } else {
    errors->AddError("required property missing: protocol");
  }
  const base::Value* key_exchange_value = dict.Find("keyExchange");
  if (key_exchange_value) {
    errors->SetName("keyExchange");
    result->key_exchange_ = internal::FromValue<std::string>::Parse(*key_exchange_value, errors);
  } else {
    errors->AddError("required property missing: keyExchange");
  }
  const base::Value* key_exchange_group_value = dict.Find("keyExchangeGroup");
  if (key_exchange_group_value) {
    errors->SetName("keyExchangeGroup");
    result->key_exchange_group_ = internal::FromValue<std::string>::Parse(*key_exchange_group_value, errors);
  }
  const base::Value* cipher_value = dict.Find("cipher");
  if (cipher_value) {
    errors->SetName("cipher");
    result->cipher_ = internal::FromValue<std::string>::Parse(*cipher_value, errors);
  } else {
    errors->AddError("required property missing: cipher");
  }
  const base::Value* mac_value = dict.Find("mac");
  if (mac_value) {
    errors->SetName("mac");
    result->mac_ = internal::FromValue<std::string>::Parse(*mac_value, errors);
  }
  const base::Value* certificate_id_value = dict.Find("certificateId");
  if (certificate_id_value) {
    errors->SetName("certificateId");
    result->certificate_id_ = internal::FromValue<int>::Parse(*certificate_id_value, errors);
  } else {
    errors->AddError("required property missing: certificateId");
  }
  const base::Value* subject_name_value = dict.Find("subjectName");
  if (subject_name_value) {
    errors->SetName("subjectName");
    result->subject_name_ = internal::FromValue<std::string>::Parse(*subject_name_value, errors);
  } else {
    errors->AddError("required property missing: subjectName");
  }
  const base::Value* san_list_value = dict.Find("sanList");
  if (san_list_value) {
    errors->SetName("sanList");
    result->san_list_ = internal::FromValue<std::vector<std::string>>::Parse(*san_list_value, errors);
  } else {
    errors->AddError("required property missing: sanList");
  }
  const base::Value* issuer_value = dict.Find("issuer");
  if (issuer_value) {
    errors->SetName("issuer");
    result->issuer_ = internal::FromValue<std::string>::Parse(*issuer_value, errors);
  } else {
    errors->AddError("required property missing: issuer");
  }
  const base::Value* valid_from_value = dict.Find("validFrom");
  if (valid_from_value) {
    errors->SetName("validFrom");
    result->valid_from_ = internal::FromValue<double>::Parse(*valid_from_value, errors);
  } else {
    errors->AddError("required property missing: validFrom");
  }
  const base::Value* valid_to_value = dict.Find("validTo");
  if (valid_to_value) {
    errors->SetName("validTo");
    result->valid_to_ = internal::FromValue<double>::Parse(*valid_to_value, errors);
  } else {
    errors->AddError("required property missing: validTo");
  }
  const base::Value* signed_certificate_timestamp_list_value = dict.Find("signedCertificateTimestampList");
  if (signed_certificate_timestamp_list_value) {
    errors->SetName("signedCertificateTimestampList");
    result->signed_certificate_timestamp_list_ = internal::FromValue<std::vector<std::unique_ptr<::headless::network::SignedCertificateTimestamp>>>::Parse(*signed_certificate_timestamp_list_value, errors);
  } else {
    errors->AddError("required property missing: signedCertificateTimestampList");
  }
  const base::Value* certificate_transparency_compliance_value = dict.Find("certificateTransparencyCompliance");
  if (certificate_transparency_compliance_value) {
    errors->SetName("certificateTransparencyCompliance");
    result->certificate_transparency_compliance_ = internal::FromValue<::headless::network::CertificateTransparencyCompliance>::Parse(*certificate_transparency_compliance_value, errors);
  } else {
    errors->AddError("required property missing: certificateTransparencyCompliance");
  }
  const base::Value* server_signature_algorithm_value = dict.Find("serverSignatureAlgorithm");
  if (server_signature_algorithm_value) {
    errors->SetName("serverSignatureAlgorithm");
    result->server_signature_algorithm_ = internal::FromValue<int>::Parse(*server_signature_algorithm_value, errors);
  }
  const base::Value* encrypted_client_hello_value = dict.Find("encryptedClientHello");
  if (encrypted_client_hello_value) {
    errors->SetName("encryptedClientHello");
    result->encrypted_client_hello_ = internal::FromValue<bool>::Parse(*encrypted_client_hello_value, errors);
  } else {
    errors->AddError("required property missing: encryptedClientHello");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SecurityDetails::Serialize() const {
  base::Value::Dict result;
  result.Set("protocol", internal::ToValue(protocol_));
  result.Set("keyExchange", internal::ToValue(key_exchange_));
  if (key_exchange_group_)
    result.Set("keyExchangeGroup", internal::ToValue(key_exchange_group_.value()));
  result.Set("cipher", internal::ToValue(cipher_));
  if (mac_)
    result.Set("mac", internal::ToValue(mac_.value()));
  result.Set("certificateId", internal::ToValue(certificate_id_));
  result.Set("subjectName", internal::ToValue(subject_name_));
  result.Set("sanList", internal::ToValue(san_list_));
  result.Set("issuer", internal::ToValue(issuer_));
  result.Set("validFrom", internal::ToValue(valid_from_));
  result.Set("validTo", internal::ToValue(valid_to_));
  result.Set("signedCertificateTimestampList", internal::ToValue(signed_certificate_timestamp_list_));
  result.Set("certificateTransparencyCompliance", internal::ToValue(certificate_transparency_compliance_));
  if (server_signature_algorithm_)
    result.Set("serverSignatureAlgorithm", internal::ToValue(server_signature_algorithm_.value()));
  result.Set("encryptedClientHello", internal::ToValue(encrypted_client_hello_));
  return base::Value(std::move(result));
}

std::unique_ptr<SecurityDetails> SecurityDetails::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SecurityDetails> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CorsErrorStatus> CorsErrorStatus::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CorsErrorStatus");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CorsErrorStatus> result(new CorsErrorStatus());
  errors->Push();
  errors->SetName("CorsErrorStatus");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* cors_error_value = dict.Find("corsError");
  if (cors_error_value) {
    errors->SetName("corsError");
    result->cors_error_ = internal::FromValue<::headless::network::CorsError>::Parse(*cors_error_value, errors);
  } else {
    errors->AddError("required property missing: corsError");
  }
  const base::Value* failed_parameter_value = dict.Find("failedParameter");
  if (failed_parameter_value) {
    errors->SetName("failedParameter");
    result->failed_parameter_ = internal::FromValue<std::string>::Parse(*failed_parameter_value, errors);
  } else {
    errors->AddError("required property missing: failedParameter");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CorsErrorStatus::Serialize() const {
  base::Value::Dict result;
  result.Set("corsError", internal::ToValue(cors_error_));
  result.Set("failedParameter", internal::ToValue(failed_parameter_));
  return base::Value(std::move(result));
}

std::unique_ptr<CorsErrorStatus> CorsErrorStatus::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CorsErrorStatus> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<TrustTokenParams> TrustTokenParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("TrustTokenParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<TrustTokenParams> result(new TrustTokenParams());
  errors->Push();
  errors->SetName("TrustTokenParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* operation_value = dict.Find("operation");
  if (operation_value) {
    errors->SetName("operation");
    result->operation_ = internal::FromValue<::headless::network::TrustTokenOperationType>::Parse(*operation_value, errors);
  } else {
    errors->AddError("required property missing: operation");
  }
  const base::Value* refresh_policy_value = dict.Find("refreshPolicy");
  if (refresh_policy_value) {
    errors->SetName("refreshPolicy");
    result->refresh_policy_ = internal::FromValue<::headless::network::TrustTokenParamsRefreshPolicy>::Parse(*refresh_policy_value, errors);
  } else {
    errors->AddError("required property missing: refreshPolicy");
  }
  const base::Value* issuers_value = dict.Find("issuers");
  if (issuers_value) {
    errors->SetName("issuers");
    result->issuers_ = internal::FromValue<std::vector<std::string>>::Parse(*issuers_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value TrustTokenParams::Serialize() const {
  base::Value::Dict result;
  result.Set("operation", internal::ToValue(operation_));
  result.Set("refreshPolicy", internal::ToValue(refresh_policy_));
  if (issuers_)
    result.Set("issuers", internal::ToValue(issuers_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<TrustTokenParams> TrustTokenParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<TrustTokenParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ServiceWorkerRouterInfo> ServiceWorkerRouterInfo::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ServiceWorkerRouterInfo");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ServiceWorkerRouterInfo> result(new ServiceWorkerRouterInfo());
  errors->Push();
  errors->SetName("ServiceWorkerRouterInfo");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* rule_id_matched_value = dict.Find("ruleIdMatched");
  if (rule_id_matched_value) {
    errors->SetName("ruleIdMatched");
    result->rule_id_matched_ = internal::FromValue<int>::Parse(*rule_id_matched_value, errors);
  } else {
    errors->AddError("required property missing: ruleIdMatched");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ServiceWorkerRouterInfo::Serialize() const {
  base::Value::Dict result;
  result.Set("ruleIdMatched", internal::ToValue(rule_id_matched_));
  return base::Value(std::move(result));
}

std::unique_ptr<ServiceWorkerRouterInfo> ServiceWorkerRouterInfo::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ServiceWorkerRouterInfo> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<Response> Response::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("Response");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<Response> result(new Response());
  errors->Push();
  errors->SetName("Response");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    errors->SetName("url");
    result->url_ = internal::FromValue<std::string>::Parse(*url_value, errors);
  } else {
    errors->AddError("required property missing: url");
  }
  const base::Value* status_value = dict.Find("status");
  if (status_value) {
    errors->SetName("status");
    result->status_ = internal::FromValue<int>::Parse(*status_value, errors);
  } else {
    errors->AddError("required property missing: status");
  }
  const base::Value* status_text_value = dict.Find("statusText");
  if (status_text_value) {
    errors->SetName("statusText");
    result->status_text_ = internal::FromValue<std::string>::Parse(*status_text_value, errors);
  } else {
    errors->AddError("required property missing: statusText");
  }
  const base::Value* headers_value = dict.Find("headers");
  if (headers_value) {
    errors->SetName("headers");
    result->headers_ = internal::FromValue<base::Value::Dict>::Parse(*headers_value, errors);
  } else {
    errors->AddError("required property missing: headers");
  }
  const base::Value* headers_text_value = dict.Find("headersText");
  if (headers_text_value) {
    errors->SetName("headersText");
    result->headers_text_ = internal::FromValue<std::string>::Parse(*headers_text_value, errors);
  }
  const base::Value* mime_type_value = dict.Find("mimeType");
  if (mime_type_value) {
    errors->SetName("mimeType");
    result->mime_type_ = internal::FromValue<std::string>::Parse(*mime_type_value, errors);
  } else {
    errors->AddError("required property missing: mimeType");
  }
  const base::Value* charset_value = dict.Find("charset");
  if (charset_value) {
    errors->SetName("charset");
    result->charset_ = internal::FromValue<std::string>::Parse(*charset_value, errors);
  } else {
    errors->AddError("required property missing: charset");
  }
  const base::Value* request_headers_value = dict.Find("requestHeaders");
  if (request_headers_value) {
    errors->SetName("requestHeaders");
    result->request_headers_ = internal::FromValue<base::Value::Dict>::Parse(*request_headers_value, errors);
  }
  const base::Value* request_headers_text_value = dict.Find("requestHeadersText");
  if (request_headers_text_value) {
    errors->SetName("requestHeadersText");
    result->request_headers_text_ = internal::FromValue<std::string>::Parse(*request_headers_text_value, errors);
  }
  const base::Value* connection_reused_value = dict.Find("connectionReused");
  if (connection_reused_value) {
    errors->SetName("connectionReused");
    result->connection_reused_ = internal::FromValue<bool>::Parse(*connection_reused_value, errors);
  } else {
    errors->AddError("required property missing: connectionReused");
  }
  const base::Value* connection_id_value = dict.Find("connectionId");
  if (connection_id_value) {
    errors->SetName("connectionId");
    result->connection_id_ = internal::FromValue<double>::Parse(*connection_id_value, errors);
  } else {
    errors->AddError("required property missing: connectionId");
  }
  const base::Value* remoteip_address_value = dict.Find("remoteIPAddress");
  if (remoteip_address_value) {
    errors->SetName("remoteIPAddress");
    result->remoteip_address_ = internal::FromValue<std::string>::Parse(*remoteip_address_value, errors);
  }
  const base::Value* remote_port_value = dict.Find("remotePort");
  if (remote_port_value) {
    errors->SetName("remotePort");
    result->remote_port_ = internal::FromValue<int>::Parse(*remote_port_value, errors);
  }
  const base::Value* from_disk_cache_value = dict.Find("fromDiskCache");
  if (from_disk_cache_value) {
    errors->SetName("fromDiskCache");
    result->from_disk_cache_ = internal::FromValue<bool>::Parse(*from_disk_cache_value, errors);
  }
  const base::Value* from_service_worker_value = dict.Find("fromServiceWorker");
  if (from_service_worker_value) {
    errors->SetName("fromServiceWorker");
    result->from_service_worker_ = internal::FromValue<bool>::Parse(*from_service_worker_value, errors);
  }
  const base::Value* from_prefetch_cache_value = dict.Find("fromPrefetchCache");
  if (from_prefetch_cache_value) {
    errors->SetName("fromPrefetchCache");
    result->from_prefetch_cache_ = internal::FromValue<bool>::Parse(*from_prefetch_cache_value, errors);
  }
  const base::Value* service_worker_router_info_value = dict.Find("serviceWorkerRouterInfo");
  if (service_worker_router_info_value) {
    errors->SetName("serviceWorkerRouterInfo");
    result->service_worker_router_info_ = internal::FromValue<::headless::network::ServiceWorkerRouterInfo>::Parse(*service_worker_router_info_value, errors);
  }
  const base::Value* encoded_data_length_value = dict.Find("encodedDataLength");
  if (encoded_data_length_value) {
    errors->SetName("encodedDataLength");
    result->encoded_data_length_ = internal::FromValue<double>::Parse(*encoded_data_length_value, errors);
  } else {
    errors->AddError("required property missing: encodedDataLength");
  }
  const base::Value* timing_value = dict.Find("timing");
  if (timing_value) {
    errors->SetName("timing");
    result->timing_ = internal::FromValue<::headless::network::ResourceTiming>::Parse(*timing_value, errors);
  }
  const base::Value* service_worker_response_source_value = dict.Find("serviceWorkerResponseSource");
  if (service_worker_response_source_value) {
    errors->SetName("serviceWorkerResponseSource");
    result->service_worker_response_source_ = internal::FromValue<::headless::network::ServiceWorkerResponseSource>::Parse(*service_worker_response_source_value, errors);
  }
  const base::Value* response_time_value = dict.Find("responseTime");
  if (response_time_value) {
    errors->SetName("responseTime");
    result->response_time_ = internal::FromValue<double>::Parse(*response_time_value, errors);
  }
  const base::Value* cache_storage_cache_name_value = dict.Find("cacheStorageCacheName");
  if (cache_storage_cache_name_value) {
    errors->SetName("cacheStorageCacheName");
    result->cache_storage_cache_name_ = internal::FromValue<std::string>::Parse(*cache_storage_cache_name_value, errors);
  }
  const base::Value* protocol_value = dict.Find("protocol");
  if (protocol_value) {
    errors->SetName("protocol");
    result->protocol_ = internal::FromValue<std::string>::Parse(*protocol_value, errors);
  }
  const base::Value* alternate_protocol_usage_value = dict.Find("alternateProtocolUsage");
  if (alternate_protocol_usage_value) {
    errors->SetName("alternateProtocolUsage");
    result->alternate_protocol_usage_ = internal::FromValue<::headless::network::AlternateProtocolUsage>::Parse(*alternate_protocol_usage_value, errors);
  }
  const base::Value* security_state_value = dict.Find("securityState");
  if (security_state_value) {
    errors->SetName("securityState");
    result->security_state_ = internal::FromValue<::headless::security::SecurityState>::Parse(*security_state_value, errors);
  } else {
    errors->AddError("required property missing: securityState");
  }
  const base::Value* security_details_value = dict.Find("securityDetails");
  if (security_details_value) {
    errors->SetName("securityDetails");
    result->security_details_ = internal::FromValue<::headless::network::SecurityDetails>::Parse(*security_details_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value Response::Serialize() const {
  base::Value::Dict result;
  result.Set("url", internal::ToValue(url_));
  result.Set("status", internal::ToValue(status_));
  result.Set("statusText", internal::ToValue(status_text_));
  result.Set("headers", internal::ToValue(*headers_));
  if (headers_text_)
    result.Set("headersText", internal::ToValue(headers_text_.value()));
  result.Set("mimeType", internal::ToValue(mime_type_));
  result.Set("charset", internal::ToValue(charset_));
  if (request_headers_)
    result.Set("requestHeaders", internal::ToValue(*request_headers_.value()));
  if (request_headers_text_)
    result.Set("requestHeadersText", internal::ToValue(request_headers_text_.value()));
  result.Set("connectionReused", internal::ToValue(connection_reused_));
  result.Set("connectionId", internal::ToValue(connection_id_));
  if (remoteip_address_)
    result.Set("remoteIPAddress", internal::ToValue(remoteip_address_.value()));
  if (remote_port_)
    result.Set("remotePort", internal::ToValue(remote_port_.value()));
  if (from_disk_cache_)
    result.Set("fromDiskCache", internal::ToValue(from_disk_cache_.value()));
  if (from_service_worker_)
    result.Set("fromServiceWorker", internal::ToValue(from_service_worker_.value()));
  if (from_prefetch_cache_)
    result.Set("fromPrefetchCache", internal::ToValue(from_prefetch_cache_.value()));
  if (service_worker_router_info_)
    result.Set("serviceWorkerRouterInfo", internal::ToValue(*service_worker_router_info_.value()));
  result.Set("encodedDataLength", internal::ToValue(encoded_data_length_));
  if (timing_)
    result.Set("timing", internal::ToValue(*timing_.value()));
  if (service_worker_response_source_)
    result.Set("serviceWorkerResponseSource", internal::ToValue(service_worker_response_source_.value()));
  if (response_time_)
    result.Set("responseTime", internal::ToValue(response_time_.value()));
  if (cache_storage_cache_name_)
    result.Set("cacheStorageCacheName", internal::ToValue(cache_storage_cache_name_.value()));
  if (protocol_)
    result.Set("protocol", internal::ToValue(protocol_.value()));
  if (alternate_protocol_usage_)
    result.Set("alternateProtocolUsage", internal::ToValue(alternate_protocol_usage_.value()));
  result.Set("securityState", internal::ToValue(security_state_));
  if (security_details_)
    result.Set("securityDetails", internal::ToValue(*security_details_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<Response> Response::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<Response> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<WebSocketRequest> WebSocketRequest::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("WebSocketRequest");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<WebSocketRequest> result(new WebSocketRequest());
  errors->Push();
  errors->SetName("WebSocketRequest");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* headers_value = dict.Find("headers");
  if (headers_value) {
    errors->SetName("headers");
    result->headers_ = internal::FromValue<base::Value::Dict>::Parse(*headers_value, errors);
  } else {
    errors->AddError("required property missing: headers");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value WebSocketRequest::Serialize() const {
  base::Value::Dict result;
  result.Set("headers", internal::ToValue(*headers_));
  return base::Value(std::move(result));
}

std::unique_ptr<WebSocketRequest> WebSocketRequest::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<WebSocketRequest> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<WebSocketResponse> WebSocketResponse::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("WebSocketResponse");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<WebSocketResponse> result(new WebSocketResponse());
  errors->Push();
  errors->SetName("WebSocketResponse");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* status_value = dict.Find("status");
  if (status_value) {
    errors->SetName("status");
    result->status_ = internal::FromValue<int>::Parse(*status_value, errors);
  } else {
    errors->AddError("required property missing: status");
  }
  const base::Value* status_text_value = dict.Find("statusText");
  if (status_text_value) {
    errors->SetName("statusText");
    result->status_text_ = internal::FromValue<std::string>::Parse(*status_text_value, errors);
  } else {
    errors->AddError("required property missing: statusText");
  }
  const base::Value* headers_value = dict.Find("headers");
  if (headers_value) {
    errors->SetName("headers");
    result->headers_ = internal::FromValue<base::Value::Dict>::Parse(*headers_value, errors);
  } else {
    errors->AddError("required property missing: headers");
  }
  const base::Value* headers_text_value = dict.Find("headersText");
  if (headers_text_value) {
    errors->SetName("headersText");
    result->headers_text_ = internal::FromValue<std::string>::Parse(*headers_text_value, errors);
  }
  const base::Value* request_headers_value = dict.Find("requestHeaders");
  if (request_headers_value) {
    errors->SetName("requestHeaders");
    result->request_headers_ = internal::FromValue<base::Value::Dict>::Parse(*request_headers_value, errors);
  }
  const base::Value* request_headers_text_value = dict.Find("requestHeadersText");
  if (request_headers_text_value) {
    errors->SetName("requestHeadersText");
    result->request_headers_text_ = internal::FromValue<std::string>::Parse(*request_headers_text_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value WebSocketResponse::Serialize() const {
  base::Value::Dict result;
  result.Set("status", internal::ToValue(status_));
  result.Set("statusText", internal::ToValue(status_text_));
  result.Set("headers", internal::ToValue(*headers_));
  if (headers_text_)
    result.Set("headersText", internal::ToValue(headers_text_.value()));
  if (request_headers_)
    result.Set("requestHeaders", internal::ToValue(*request_headers_.value()));
  if (request_headers_text_)
    result.Set("requestHeadersText", internal::ToValue(request_headers_text_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<WebSocketResponse> WebSocketResponse::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<WebSocketResponse> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<WebSocketFrame> WebSocketFrame::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("WebSocketFrame");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<WebSocketFrame> result(new WebSocketFrame());
  errors->Push();
  errors->SetName("WebSocketFrame");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* opcode_value = dict.Find("opcode");
  if (opcode_value) {
    errors->SetName("opcode");
    result->opcode_ = internal::FromValue<double>::Parse(*opcode_value, errors);
  } else {
    errors->AddError("required property missing: opcode");
  }
  const base::Value* mask_value = dict.Find("mask");
  if (mask_value) {
    errors->SetName("mask");
    result->mask_ = internal::FromValue<bool>::Parse(*mask_value, errors);
  } else {
    errors->AddError("required property missing: mask");
  }
  const base::Value* payload_data_value = dict.Find("payloadData");
  if (payload_data_value) {
    errors->SetName("payloadData");
    result->payload_data_ = internal::FromValue<std::string>::Parse(*payload_data_value, errors);
  } else {
    errors->AddError("required property missing: payloadData");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value WebSocketFrame::Serialize() const {
  base::Value::Dict result;
  result.Set("opcode", internal::ToValue(opcode_));
  result.Set("mask", internal::ToValue(mask_));
  result.Set("payloadData", internal::ToValue(payload_data_));
  return base::Value(std::move(result));
}

std::unique_ptr<WebSocketFrame> WebSocketFrame::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<WebSocketFrame> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CachedResource> CachedResource::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CachedResource");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CachedResource> result(new CachedResource());
  errors->Push();
  errors->SetName("CachedResource");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    errors->SetName("url");
    result->url_ = internal::FromValue<std::string>::Parse(*url_value, errors);
  } else {
    errors->AddError("required property missing: url");
  }
  const base::Value* type_value = dict.Find("type");
  if (type_value) {
    errors->SetName("type");
    result->type_ = internal::FromValue<::headless::network::ResourceType>::Parse(*type_value, errors);
  } else {
    errors->AddError("required property missing: type");
  }
  const base::Value* response_value = dict.Find("response");
  if (response_value) {
    errors->SetName("response");
    result->response_ = internal::FromValue<::headless::network::Response>::Parse(*response_value, errors);
  }
  const base::Value* body_size_value = dict.Find("bodySize");
  if (body_size_value) {
    errors->SetName("bodySize");
    result->body_size_ = internal::FromValue<double>::Parse(*body_size_value, errors);
  } else {
    errors->AddError("required property missing: bodySize");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CachedResource::Serialize() const {
  base::Value::Dict result;
  result.Set("url", internal::ToValue(url_));
  result.Set("type", internal::ToValue(type_));
  if (response_)
    result.Set("response", internal::ToValue(*response_.value()));
  result.Set("bodySize", internal::ToValue(body_size_));
  return base::Value(std::move(result));
}

std::unique_ptr<CachedResource> CachedResource::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CachedResource> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<Initiator> Initiator::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("Initiator");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<Initiator> result(new Initiator());
  errors->Push();
  errors->SetName("Initiator");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* type_value = dict.Find("type");
  if (type_value) {
    errors->SetName("type");
    result->type_ = internal::FromValue<::headless::network::InitiatorType>::Parse(*type_value, errors);
  } else {
    errors->AddError("required property missing: type");
  }
  const base::Value* stack_value = dict.Find("stack");
  if (stack_value) {
    errors->SetName("stack");
    result->stack_ = internal::FromValue<::headless::runtime::StackTrace>::Parse(*stack_value, errors);
  }
  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    errors->SetName("url");
    result->url_ = internal::FromValue<std::string>::Parse(*url_value, errors);
  }
  const base::Value* line_number_value = dict.Find("lineNumber");
  if (line_number_value) {
    errors->SetName("lineNumber");
    result->line_number_ = internal::FromValue<double>::Parse(*line_number_value, errors);
  }
  const base::Value* column_number_value = dict.Find("columnNumber");
  if (column_number_value) {
    errors->SetName("columnNumber");
    result->column_number_ = internal::FromValue<double>::Parse(*column_number_value, errors);
  }
  const base::Value* request_id_value = dict.Find("requestId");
  if (request_id_value) {
    errors->SetName("requestId");
    result->request_id_ = internal::FromValue<std::string>::Parse(*request_id_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value Initiator::Serialize() const {
  base::Value::Dict result;
  result.Set("type", internal::ToValue(type_));
  if (stack_)
    result.Set("stack", internal::ToValue(*stack_.value()));
  if (url_)
    result.Set("url", internal::ToValue(url_.value()));
  if (line_number_)
    result.Set("lineNumber", internal::ToValue(line_number_.value()));
  if (column_number_)
    result.Set("columnNumber", internal::ToValue(column_number_.value()));
  if (request_id_)
    result.Set("requestId", internal::ToValue(request_id_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<Initiator> Initiator::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<Initiator> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<Cookie> Cookie::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("Cookie");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<Cookie> result(new Cookie());
  errors->Push();
  errors->SetName("Cookie");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* name_value = dict.Find("name");
  if (name_value) {
    errors->SetName("name");
    result->name_ = internal::FromValue<std::string>::Parse(*name_value, errors);
  } else {
    errors->AddError("required property missing: name");
  }
  const base::Value* value_value = dict.Find("value");
  if (value_value) {
    errors->SetName("value");
    result->value_ = internal::FromValue<std::string>::Parse(*value_value, errors);
  } else {
    errors->AddError("required property missing: value");
  }
  const base::Value* domain_value = dict.Find("domain");
  if (domain_value) {
    errors->SetName("domain");
    result->domain_ = internal::FromValue<std::string>::Parse(*domain_value, errors);
  } else {
    errors->AddError("required property missing: domain");
  }
  const base::Value* path_value = dict.Find("path");
  if (path_value) {
    errors->SetName("path");
    result->path_ = internal::FromValue<std::string>::Parse(*path_value, errors);
  } else {
    errors->AddError("required property missing: path");
  }
  const base::Value* expires_value = dict.Find("expires");
  if (expires_value) {
    errors->SetName("expires");
    result->expires_ = internal::FromValue<double>::Parse(*expires_value, errors);
  } else {
    errors->AddError("required property missing: expires");
  }
  const base::Value* size_value = dict.Find("size");
  if (size_value) {
    errors->SetName("size");
    result->size_ = internal::FromValue<int>::Parse(*size_value, errors);
  } else {
    errors->AddError("required property missing: size");
  }
  const base::Value* http_only_value = dict.Find("httpOnly");
  if (http_only_value) {
    errors->SetName("httpOnly");
    result->http_only_ = internal::FromValue<bool>::Parse(*http_only_value, errors);
  } else {
    errors->AddError("required property missing: httpOnly");
  }
  const base::Value* secure_value = dict.Find("secure");
  if (secure_value) {
    errors->SetName("secure");
    result->secure_ = internal::FromValue<bool>::Parse(*secure_value, errors);
  } else {
    errors->AddError("required property missing: secure");
  }
  const base::Value* session_value = dict.Find("session");
  if (session_value) {
    errors->SetName("session");
    result->session_ = internal::FromValue<bool>::Parse(*session_value, errors);
  } else {
    errors->AddError("required property missing: session");
  }
  const base::Value* same_site_value = dict.Find("sameSite");
  if (same_site_value) {
    errors->SetName("sameSite");
    result->same_site_ = internal::FromValue<::headless::network::CookieSameSite>::Parse(*same_site_value, errors);
  }
  const base::Value* priority_value = dict.Find("priority");
  if (priority_value) {
    errors->SetName("priority");
    result->priority_ = internal::FromValue<::headless::network::CookiePriority>::Parse(*priority_value, errors);
  } else {
    errors->AddError("required property missing: priority");
  }
  const base::Value* same_party_value = dict.Find("sameParty");
  if (same_party_value) {
    errors->SetName("sameParty");
    result->same_party_ = internal::FromValue<bool>::Parse(*same_party_value, errors);
  } else {
    errors->AddError("required property missing: sameParty");
  }
  const base::Value* source_scheme_value = dict.Find("sourceScheme");
  if (source_scheme_value) {
    errors->SetName("sourceScheme");
    result->source_scheme_ = internal::FromValue<::headless::network::CookieSourceScheme>::Parse(*source_scheme_value, errors);
  } else {
    errors->AddError("required property missing: sourceScheme");
  }
  const base::Value* source_port_value = dict.Find("sourcePort");
  if (source_port_value) {
    errors->SetName("sourcePort");
    result->source_port_ = internal::FromValue<int>::Parse(*source_port_value, errors);
  } else {
    errors->AddError("required property missing: sourcePort");
  }
  const base::Value* partition_key_value = dict.Find("partitionKey");
  if (partition_key_value) {
    errors->SetName("partitionKey");
    result->partition_key_ = internal::FromValue<std::string>::Parse(*partition_key_value, errors);
  }
  const base::Value* partition_key_opaque_value = dict.Find("partitionKeyOpaque");
  if (partition_key_opaque_value) {
    errors->SetName("partitionKeyOpaque");
    result->partition_key_opaque_ = internal::FromValue<bool>::Parse(*partition_key_opaque_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value Cookie::Serialize() const {
  base::Value::Dict result;
  result.Set("name", internal::ToValue(name_));
  result.Set("value", internal::ToValue(value_));
  result.Set("domain", internal::ToValue(domain_));
  result.Set("path", internal::ToValue(path_));
  result.Set("expires", internal::ToValue(expires_));
  result.Set("size", internal::ToValue(size_));
  result.Set("httpOnly", internal::ToValue(http_only_));
  result.Set("secure", internal::ToValue(secure_));
  result.Set("session", internal::ToValue(session_));
  if (same_site_)
    result.Set("sameSite", internal::ToValue(same_site_.value()));
  result.Set("priority", internal::ToValue(priority_));
  result.Set("sameParty", internal::ToValue(same_party_));
  result.Set("sourceScheme", internal::ToValue(source_scheme_));
  result.Set("sourcePort", internal::ToValue(source_port_));
  if (partition_key_)
    result.Set("partitionKey", internal::ToValue(partition_key_.value()));
  if (partition_key_opaque_)
    result.Set("partitionKeyOpaque", internal::ToValue(partition_key_opaque_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<Cookie> Cookie::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<Cookie> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<BlockedSetCookieWithReason> BlockedSetCookieWithReason::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("BlockedSetCookieWithReason");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<BlockedSetCookieWithReason> result(new BlockedSetCookieWithReason());
  errors->Push();
  errors->SetName("BlockedSetCookieWithReason");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* blocked_reasons_value = dict.Find("blockedReasons");
  if (blocked_reasons_value) {
    errors->SetName("blockedReasons");
    result->blocked_reasons_ = internal::FromValue<std::vector<::headless::network::SetCookieBlockedReason>>::Parse(*blocked_reasons_value, errors);
  } else {
    errors->AddError("required property missing: blockedReasons");
  }
  const base::Value* cookie_line_value = dict.Find("cookieLine");
  if (cookie_line_value) {
    errors->SetName("cookieLine");
    result->cookie_line_ = internal::FromValue<std::string>::Parse(*cookie_line_value, errors);
  } else {
    errors->AddError("required property missing: cookieLine");
  }
  const base::Value* cookie_value = dict.Find("cookie");
  if (cookie_value) {
    errors->SetName("cookie");
    result->cookie_ = internal::FromValue<::headless::network::Cookie>::Parse(*cookie_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value BlockedSetCookieWithReason::Serialize() const {
  base::Value::Dict result;
  result.Set("blockedReasons", internal::ToValue(blocked_reasons_));
  result.Set("cookieLine", internal::ToValue(cookie_line_));
  if (cookie_)
    result.Set("cookie", internal::ToValue(*cookie_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<BlockedSetCookieWithReason> BlockedSetCookieWithReason::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<BlockedSetCookieWithReason> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ExemptedSetCookieWithReason> ExemptedSetCookieWithReason::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ExemptedSetCookieWithReason");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ExemptedSetCookieWithReason> result(new ExemptedSetCookieWithReason());
  errors->Push();
  errors->SetName("ExemptedSetCookieWithReason");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* exemption_reason_value = dict.Find("exemptionReason");
  if (exemption_reason_value) {
    errors->SetName("exemptionReason");
    result->exemption_reason_ = internal::FromValue<::headless::network::CookieExemptionReason>::Parse(*exemption_reason_value, errors);
  } else {
    errors->AddError("required property missing: exemptionReason");
  }
  const base::Value* cookie_value = dict.Find("cookie");
  if (cookie_value) {
    errors->SetName("cookie");
    result->cookie_ = internal::FromValue<::headless::network::Cookie>::Parse(*cookie_value, errors);
  } else {
    errors->AddError("required property missing: cookie");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ExemptedSetCookieWithReason::Serialize() const {
  base::Value::Dict result;
  result.Set("exemptionReason", internal::ToValue(exemption_reason_));
  result.Set("cookie", internal::ToValue(*cookie_));
  return base::Value(std::move(result));
}

std::unique_ptr<ExemptedSetCookieWithReason> ExemptedSetCookieWithReason::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ExemptedSetCookieWithReason> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<AssociatedCookie> AssociatedCookie::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("AssociatedCookie");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<AssociatedCookie> result(new AssociatedCookie());
  errors->Push();
  errors->SetName("AssociatedCookie");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* cookie_value = dict.Find("cookie");
  if (cookie_value) {
    errors->SetName("cookie");
    result->cookie_ = internal::FromValue<::headless::network::Cookie>::Parse(*cookie_value, errors);
  } else {
    errors->AddError("required property missing: cookie");
  }
  const base::Value* blocked_reasons_value = dict.Find("blockedReasons");
  if (blocked_reasons_value) {
    errors->SetName("blockedReasons");
    result->blocked_reasons_ = internal::FromValue<std::vector<::headless::network::CookieBlockedReason>>::Parse(*blocked_reasons_value, errors);
  } else {
    errors->AddError("required property missing: blockedReasons");
  }
  const base::Value* exemption_reason_value = dict.Find("exemptionReason");
  if (exemption_reason_value) {
    errors->SetName("exemptionReason");
    result->exemption_reason_ = internal::FromValue<::headless::network::CookieExemptionReason>::Parse(*exemption_reason_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value AssociatedCookie::Serialize() const {
  base::Value::Dict result;
  result.Set("cookie", internal::ToValue(*cookie_));
  result.Set("blockedReasons", internal::ToValue(blocked_reasons_));
  if (exemption_reason_)
    result.Set("exemptionReason", internal::ToValue(exemption_reason_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<AssociatedCookie> AssociatedCookie::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<AssociatedCookie> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CookieParam> CookieParam::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CookieParam");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CookieParam> result(new CookieParam());
  errors->Push();
  errors->SetName("CookieParam");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* name_value = dict.Find("name");
  if (name_value) {
    errors->SetName("name");
    result->name_ = internal::FromValue<std::string>::Parse(*name_value, errors);
  } else {
    errors->AddError("required property missing: name");
  }
  const base::Value* value_value = dict.Find("value");
  if (value_value) {
    errors->SetName("value");
    result->value_ = internal::FromValue<std::string>::Parse(*value_value, errors);
  } else {
    errors->AddError("required property missing: value");
  }
  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    errors->SetName("url");
    result->url_ = internal::FromValue<std::string>::Parse(*url_value, errors);
  }
  const base::Value* domain_value = dict.Find("domain");
  if (domain_value) {
    errors->SetName("domain");
    result->domain_ = internal::FromValue<std::string>::Parse(*domain_value, errors);
  }
  const base::Value* path_value = dict.Find("path");
  if (path_value) {
    errors->SetName("path");
    result->path_ = internal::FromValue<std::string>::Parse(*path_value, errors);
  }
  const base::Value* secure_value = dict.Find("secure");
  if (secure_value) {
    errors->SetName("secure");
    result->secure_ = internal::FromValue<bool>::Parse(*secure_value, errors);
  }
  const base::Value* http_only_value = dict.Find("httpOnly");
  if (http_only_value) {
    errors->SetName("httpOnly");
    result->http_only_ = internal::FromValue<bool>::Parse(*http_only_value, errors);
  }
  const base::Value* same_site_value = dict.Find("sameSite");
  if (same_site_value) {
    errors->SetName("sameSite");
    result->same_site_ = internal::FromValue<::headless::network::CookieSameSite>::Parse(*same_site_value, errors);
  }
  const base::Value* expires_value = dict.Find("expires");
  if (expires_value) {
    errors->SetName("expires");
    result->expires_ = internal::FromValue<double>::Parse(*expires_value, errors);
  }
  const base::Value* priority_value = dict.Find("priority");
  if (priority_value) {
    errors->SetName("priority");
    result->priority_ = internal::FromValue<::headless::network::CookiePriority>::Parse(*priority_value, errors);
  }
  const base::Value* same_party_value = dict.Find("sameParty");
  if (same_party_value) {
    errors->SetName("sameParty");
    result->same_party_ = internal::FromValue<bool>::Parse(*same_party_value, errors);
  }
  const base::Value* source_scheme_value = dict.Find("sourceScheme");
  if (source_scheme_value) {
    errors->SetName("sourceScheme");
    result->source_scheme_ = internal::FromValue<::headless::network::CookieSourceScheme>::Parse(*source_scheme_value, errors);
  }
  const base::Value* source_port_value = dict.Find("sourcePort");
  if (source_port_value) {
    errors->SetName("sourcePort");
    result->source_port_ = internal::FromValue<int>::Parse(*source_port_value, errors);
  }
  const base::Value* partition_key_value = dict.Find("partitionKey");
  if (partition_key_value) {
    errors->SetName("partitionKey");
    result->partition_key_ = internal::FromValue<std::string>::Parse(*partition_key_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CookieParam::Serialize() const {
  base::Value::Dict result;
  result.Set("name", internal::ToValue(name_));
  result.Set("value", internal::ToValue(value_));
  if (url_)
    result.Set("url", internal::ToValue(url_.value()));
  if (domain_)
    result.Set("domain", internal::ToValue(domain_.value()));
  if (path_)
    result.Set("path", internal::ToValue(path_.value()));
  if (secure_)
    result.Set("secure", internal::ToValue(secure_.value()));
  if (http_only_)
    result.Set("httpOnly", internal::ToValue(http_only_.value()));
  if (same_site_)
    result.Set("sameSite", internal::ToValue(same_site_.value()));
  if (expires_)
    result.Set("expires", internal::ToValue(expires_.value()));
  if (priority_)
    result.Set("priority", internal::ToValue(priority_.value()));
  if (same_party_)
    result.Set("sameParty", internal::ToValue(same_party_.value()));
  if (source_scheme_)
    result.Set("sourceScheme", internal::ToValue(source_scheme_.value()));
  if (source_port_)
    result.Set("sourcePort", internal::ToValue(source_port_.value()));
  if (partition_key_)
    result.Set("partitionKey", internal::ToValue(partition_key_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<CookieParam> CookieParam::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CookieParam> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<AuthChallenge> AuthChallenge::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("AuthChallenge");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<AuthChallenge> result(new AuthChallenge());
  errors->Push();
  errors->SetName("AuthChallenge");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* source_value = dict.Find("source");
  if (source_value) {
    errors->SetName("source");
    result->source_ = internal::FromValue<::headless::network::AuthChallengeSource>::Parse(*source_value, errors);
  }
  const base::Value* origin_value = dict.Find("origin");
  if (origin_value) {
    errors->SetName("origin");
    result->origin_ = internal::FromValue<std::string>::Parse(*origin_value, errors);
  } else {
    errors->AddError("required property missing: origin");
  }
  const base::Value* scheme_value = dict.Find("scheme");
  if (scheme_value) {
    errors->SetName("scheme");
    result->scheme_ = internal::FromValue<std::string>::Parse(*scheme_value, errors);
  } else {
    errors->AddError("required property missing: scheme");
  }
  const base::Value* realm_value = dict.Find("realm");
  if (realm_value) {
    errors->SetName("realm");
    result->realm_ = internal::FromValue<std::string>::Parse(*realm_value, errors);
  } else {
    errors->AddError("required property missing: realm");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value AuthChallenge::Serialize() const {
  base::Value::Dict result;
  if (source_)
    result.Set("source", internal::ToValue(source_.value()));
  result.Set("origin", internal::ToValue(origin_));
  result.Set("scheme", internal::ToValue(scheme_));
  result.Set("realm", internal::ToValue(realm_));
  return base::Value(std::move(result));
}

std::unique_ptr<AuthChallenge> AuthChallenge::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<AuthChallenge> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<AuthChallengeResponse> AuthChallengeResponse::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("AuthChallengeResponse");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<AuthChallengeResponse> result(new AuthChallengeResponse());
  errors->Push();
  errors->SetName("AuthChallengeResponse");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* response_value = dict.Find("response");
  if (response_value) {
    errors->SetName("response");
    result->response_ = internal::FromValue<::headless::network::AuthChallengeResponseResponse>::Parse(*response_value, errors);
  } else {
    errors->AddError("required property missing: response");
  }
  const base::Value* username_value = dict.Find("username");
  if (username_value) {
    errors->SetName("username");
    result->username_ = internal::FromValue<std::string>::Parse(*username_value, errors);
  }
  const base::Value* password_value = dict.Find("password");
  if (password_value) {
    errors->SetName("password");
    result->password_ = internal::FromValue<std::string>::Parse(*password_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value AuthChallengeResponse::Serialize() const {
  base::Value::Dict result;
  result.Set("response", internal::ToValue(response_));
  if (username_)
    result.Set("username", internal::ToValue(username_.value()));
  if (password_)
    result.Set("password", internal::ToValue(password_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<AuthChallengeResponse> AuthChallengeResponse::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<AuthChallengeResponse> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<RequestPattern> RequestPattern::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("RequestPattern");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<RequestPattern> result(new RequestPattern());
  errors->Push();
  errors->SetName("RequestPattern");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* url_pattern_value = dict.Find("urlPattern");
  if (url_pattern_value) {
    errors->SetName("urlPattern");
    result->url_pattern_ = internal::FromValue<std::string>::Parse(*url_pattern_value, errors);
  }
  const base::Value* resource_type_value = dict.Find("resourceType");
  if (resource_type_value) {
    errors->SetName("resourceType");
    result->resource_type_ = internal::FromValue<::headless::network::ResourceType>::Parse(*resource_type_value, errors);
  }
  const base::Value* interception_stage_value = dict.Find("interceptionStage");
  if (interception_stage_value) {
    errors->SetName("interceptionStage");
    result->interception_stage_ = internal::FromValue<::headless::network::InterceptionStage>::Parse(*interception_stage_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value RequestPattern::Serialize() const {
  base::Value::Dict result;
  if (url_pattern_)
    result.Set("urlPattern", internal::ToValue(url_pattern_.value()));
  if (resource_type_)
    result.Set("resourceType", internal::ToValue(resource_type_.value()));
  if (interception_stage_)
    result.Set("interceptionStage", internal::ToValue(interception_stage_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<RequestPattern> RequestPattern::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<RequestPattern> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SignedExchangeSignature> SignedExchangeSignature::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SignedExchangeSignature");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SignedExchangeSignature> result(new SignedExchangeSignature());
  errors->Push();
  errors->SetName("SignedExchangeSignature");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* label_value = dict.Find("label");
  if (label_value) {
    errors->SetName("label");
    result->label_ = internal::FromValue<std::string>::Parse(*label_value, errors);
  } else {
    errors->AddError("required property missing: label");
  }
  const base::Value* signature_value = dict.Find("signature");
  if (signature_value) {
    errors->SetName("signature");
    result->signature_ = internal::FromValue<std::string>::Parse(*signature_value, errors);
  } else {
    errors->AddError("required property missing: signature");
  }
  const base::Value* integrity_value = dict.Find("integrity");
  if (integrity_value) {
    errors->SetName("integrity");
    result->integrity_ = internal::FromValue<std::string>::Parse(*integrity_value, errors);
  } else {
    errors->AddError("required property missing: integrity");
  }
  const base::Value* cert_url_value = dict.Find("certUrl");
  if (cert_url_value) {
    errors->SetName("certUrl");
    result->cert_url_ = internal::FromValue<std::string>::Parse(*cert_url_value, errors);
  }
  const base::Value* cert_sha256_value = dict.Find("certSha256");
  if (cert_sha256_value) {
    errors->SetName("certSha256");
    result->cert_sha256_ = internal::FromValue<std::string>::Parse(*cert_sha256_value, errors);
  }
  const base::Value* validity_url_value = dict.Find("validityUrl");
  if (validity_url_value) {
    errors->SetName("validityUrl");
    result->validity_url_ = internal::FromValue<std::string>::Parse(*validity_url_value, errors);
  } else {
    errors->AddError("required property missing: validityUrl");
  }
  const base::Value* date_value = dict.Find("date");
  if (date_value) {
    errors->SetName("date");
    result->date_ = internal::FromValue<int>::Parse(*date_value, errors);
  } else {
    errors->AddError("required property missing: date");
  }
  const base::Value* expires_value = dict.Find("expires");
  if (expires_value) {
    errors->SetName("expires");
    result->expires_ = internal::FromValue<int>::Parse(*expires_value, errors);
  } else {
    errors->AddError("required property missing: expires");
  }
  const base::Value* certificates_value = dict.Find("certificates");
  if (certificates_value) {
    errors->SetName("certificates");
    result->certificates_ = internal::FromValue<std::vector<std::string>>::Parse(*certificates_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SignedExchangeSignature::Serialize() const {
  base::Value::Dict result;
  result.Set("label", internal::ToValue(label_));
  result.Set("signature", internal::ToValue(signature_));
  result.Set("integrity", internal::ToValue(integrity_));
  if (cert_url_)
    result.Set("certUrl", internal::ToValue(cert_url_.value()));
  if (cert_sha256_)
    result.Set("certSha256", internal::ToValue(cert_sha256_.value()));
  result.Set("validityUrl", internal::ToValue(validity_url_));
  result.Set("date", internal::ToValue(date_));
  result.Set("expires", internal::ToValue(expires_));
  if (certificates_)
    result.Set("certificates", internal::ToValue(certificates_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<SignedExchangeSignature> SignedExchangeSignature::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SignedExchangeSignature> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SignedExchangeHeader> SignedExchangeHeader::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SignedExchangeHeader");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SignedExchangeHeader> result(new SignedExchangeHeader());
  errors->Push();
  errors->SetName("SignedExchangeHeader");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* request_url_value = dict.Find("requestUrl");
  if (request_url_value) {
    errors->SetName("requestUrl");
    result->request_url_ = internal::FromValue<std::string>::Parse(*request_url_value, errors);
  } else {
    errors->AddError("required property missing: requestUrl");
  }
  const base::Value* response_code_value = dict.Find("responseCode");
  if (response_code_value) {
    errors->SetName("responseCode");
    result->response_code_ = internal::FromValue<int>::Parse(*response_code_value, errors);
  } else {
    errors->AddError("required property missing: responseCode");
  }
  const base::Value* response_headers_value = dict.Find("responseHeaders");
  if (response_headers_value) {
    errors->SetName("responseHeaders");
    result->response_headers_ = internal::FromValue<base::Value::Dict>::Parse(*response_headers_value, errors);
  } else {
    errors->AddError("required property missing: responseHeaders");
  }
  const base::Value* signatures_value = dict.Find("signatures");
  if (signatures_value) {
    errors->SetName("signatures");
    result->signatures_ = internal::FromValue<std::vector<std::unique_ptr<::headless::network::SignedExchangeSignature>>>::Parse(*signatures_value, errors);
  } else {
    errors->AddError("required property missing: signatures");
  }
  const base::Value* header_integrity_value = dict.Find("headerIntegrity");
  if (header_integrity_value) {
    errors->SetName("headerIntegrity");
    result->header_integrity_ = internal::FromValue<std::string>::Parse(*header_integrity_value, errors);
  } else {
    errors->AddError("required property missing: headerIntegrity");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SignedExchangeHeader::Serialize() const {
  base::Value::Dict result;
  result.Set("requestUrl", internal::ToValue(request_url_));
  result.Set("responseCode", internal::ToValue(response_code_));
  result.Set("responseHeaders", internal::ToValue(*response_headers_));
  result.Set("signatures", internal::ToValue(signatures_));
  result.Set("headerIntegrity", internal::ToValue(header_integrity_));
  return base::Value(std::move(result));
}

std::unique_ptr<SignedExchangeHeader> SignedExchangeHeader::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SignedExchangeHeader> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SignedExchangeError> SignedExchangeError::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SignedExchangeError");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SignedExchangeError> result(new SignedExchangeError());
  errors->Push();
  errors->SetName("SignedExchangeError");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* message_value = dict.Find("message");
  if (message_value) {
    errors->SetName("message");
    result->message_ = internal::FromValue<std::string>::Parse(*message_value, errors);
  } else {
    errors->AddError("required property missing: message");
  }
  const base::Value* signature_index_value = dict.Find("signatureIndex");
  if (signature_index_value) {
    errors->SetName("signatureIndex");
    result->signature_index_ = internal::FromValue<int>::Parse(*signature_index_value, errors);
  }
  const base::Value* error_field_value = dict.Find("errorField");
  if (error_field_value) {
    errors->SetName("errorField");
    result->error_field_ = internal::FromValue<::headless::network::SignedExchangeErrorField>::Parse(*error_field_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SignedExchangeError::Serialize() const {
  base::Value::Dict result;
  result.Set("message", internal::ToValue(message_));
  if (signature_index_)
    result.Set("signatureIndex", internal::ToValue(signature_index_.value()));
  if (error_field_)
    result.Set("errorField", internal::ToValue(error_field_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<SignedExchangeError> SignedExchangeError::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SignedExchangeError> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SignedExchangeInfo> SignedExchangeInfo::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SignedExchangeInfo");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SignedExchangeInfo> result(new SignedExchangeInfo());
  errors->Push();
  errors->SetName("SignedExchangeInfo");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* outer_response_value = dict.Find("outerResponse");
  if (outer_response_value) {
    errors->SetName("outerResponse");
    result->outer_response_ = internal::FromValue<::headless::network::Response>::Parse(*outer_response_value, errors);
  } else {
    errors->AddError("required property missing: outerResponse");
  }
  const base::Value* header_value = dict.Find("header");
  if (header_value) {
    errors->SetName("header");
    result->header_ = internal::FromValue<::headless::network::SignedExchangeHeader>::Parse(*header_value, errors);
  }
  const base::Value* security_details_value = dict.Find("securityDetails");
  if (security_details_value) {
    errors->SetName("securityDetails");
    result->security_details_ = internal::FromValue<::headless::network::SecurityDetails>::Parse(*security_details_value, errors);
  }
  const base::Value* errors_value = dict.Find("errors");
  if (errors_value) {
    errors->SetName("errors");
    result->errors_ = internal::FromValue<std::vector<std::unique_ptr<::headless::network::SignedExchangeError>>>::Parse(*errors_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SignedExchangeInfo::Serialize() const {
  base::Value::Dict result;
  result.Set("outerResponse", internal::ToValue(*outer_response_));
  if (header_)
    result.Set("header", internal::ToValue(*header_.value()));
  if (security_details_)
    result.Set("securityDetails", internal::ToValue(*security_details_.value()));
  if (errors_)
    result.Set("errors", internal::ToValue(errors_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<SignedExchangeInfo> SignedExchangeInfo::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SignedExchangeInfo> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ConnectTiming> ConnectTiming::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ConnectTiming");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ConnectTiming> result(new ConnectTiming());
  errors->Push();
  errors->SetName("ConnectTiming");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* request_time_value = dict.Find("requestTime");
  if (request_time_value) {
    errors->SetName("requestTime");
    result->request_time_ = internal::FromValue<double>::Parse(*request_time_value, errors);
  } else {
    errors->AddError("required property missing: requestTime");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ConnectTiming::Serialize() const {
  base::Value::Dict result;
  result.Set("requestTime", internal::ToValue(request_time_));
  return base::Value(std::move(result));
}

std::unique_ptr<ConnectTiming> ConnectTiming::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ConnectTiming> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ClientSecurityState> ClientSecurityState::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ClientSecurityState");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ClientSecurityState> result(new ClientSecurityState());
  errors->Push();
  errors->SetName("ClientSecurityState");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* initiator_is_secure_context_value = dict.Find("initiatorIsSecureContext");
  if (initiator_is_secure_context_value) {
    errors->SetName("initiatorIsSecureContext");
    result->initiator_is_secure_context_ = internal::FromValue<bool>::Parse(*initiator_is_secure_context_value, errors);
  } else {
    errors->AddError("required property missing: initiatorIsSecureContext");
  }
  const base::Value* initiatorip_address_space_value = dict.Find("initiatorIPAddressSpace");
  if (initiatorip_address_space_value) {
    errors->SetName("initiatorIPAddressSpace");
    result->initiatorip_address_space_ = internal::FromValue<::headless::network::IPAddressSpace>::Parse(*initiatorip_address_space_value, errors);
  } else {
    errors->AddError("required property missing: initiatorIPAddressSpace");
  }
  const base::Value* private_network_request_policy_value = dict.Find("privateNetworkRequestPolicy");
  if (private_network_request_policy_value) {
    errors->SetName("privateNetworkRequestPolicy");
    result->private_network_request_policy_ = internal::FromValue<::headless::network::PrivateNetworkRequestPolicy>::Parse(*private_network_request_policy_value, errors);
  } else {
    errors->AddError("required property missing: privateNetworkRequestPolicy");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ClientSecurityState::Serialize() const {
  base::Value::Dict result;
  result.Set("initiatorIsSecureContext", internal::ToValue(initiator_is_secure_context_));
  result.Set("initiatorIPAddressSpace", internal::ToValue(initiatorip_address_space_));
  result.Set("privateNetworkRequestPolicy", internal::ToValue(private_network_request_policy_));
  return base::Value(std::move(result));
}

std::unique_ptr<ClientSecurityState> ClientSecurityState::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ClientSecurityState> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CrossOriginOpenerPolicyStatus> CrossOriginOpenerPolicyStatus::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CrossOriginOpenerPolicyStatus");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CrossOriginOpenerPolicyStatus> result(new CrossOriginOpenerPolicyStatus());
  errors->Push();
  errors->SetName("CrossOriginOpenerPolicyStatus");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* value_value = dict.Find("value");
  if (value_value) {
    errors->SetName("value");
    result->value_ = internal::FromValue<::headless::network::CrossOriginOpenerPolicyValue>::Parse(*value_value, errors);
  } else {
    errors->AddError("required property missing: value");
  }
  const base::Value* report_only_value_value = dict.Find("reportOnlyValue");
  if (report_only_value_value) {
    errors->SetName("reportOnlyValue");
    result->report_only_value_ = internal::FromValue<::headless::network::CrossOriginOpenerPolicyValue>::Parse(*report_only_value_value, errors);
  } else {
    errors->AddError("required property missing: reportOnlyValue");
  }
  const base::Value* reporting_endpoint_value = dict.Find("reportingEndpoint");
  if (reporting_endpoint_value) {
    errors->SetName("reportingEndpoint");
    result->reporting_endpoint_ = internal::FromValue<std::string>::Parse(*reporting_endpoint_value, errors);
  }
  const base::Value* report_only_reporting_endpoint_value = dict.Find("reportOnlyReportingEndpoint");
  if (report_only_reporting_endpoint_value) {
    errors->SetName("reportOnlyReportingEndpoint");
    result->report_only_reporting_endpoint_ = internal::FromValue<std::string>::Parse(*report_only_reporting_endpoint_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CrossOriginOpenerPolicyStatus::Serialize() const {
  base::Value::Dict result;
  result.Set("value", internal::ToValue(value_));
  result.Set("reportOnlyValue", internal::ToValue(report_only_value_));
  if (reporting_endpoint_)
    result.Set("reportingEndpoint", internal::ToValue(reporting_endpoint_.value()));
  if (report_only_reporting_endpoint_)
    result.Set("reportOnlyReportingEndpoint", internal::ToValue(report_only_reporting_endpoint_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<CrossOriginOpenerPolicyStatus> CrossOriginOpenerPolicyStatus::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CrossOriginOpenerPolicyStatus> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CrossOriginEmbedderPolicyStatus> CrossOriginEmbedderPolicyStatus::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CrossOriginEmbedderPolicyStatus");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CrossOriginEmbedderPolicyStatus> result(new CrossOriginEmbedderPolicyStatus());
  errors->Push();
  errors->SetName("CrossOriginEmbedderPolicyStatus");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* value_value = dict.Find("value");
  if (value_value) {
    errors->SetName("value");
    result->value_ = internal::FromValue<::headless::network::CrossOriginEmbedderPolicyValue>::Parse(*value_value, errors);
  } else {
    errors->AddError("required property missing: value");
  }
  const base::Value* report_only_value_value = dict.Find("reportOnlyValue");
  if (report_only_value_value) {
    errors->SetName("reportOnlyValue");
    result->report_only_value_ = internal::FromValue<::headless::network::CrossOriginEmbedderPolicyValue>::Parse(*report_only_value_value, errors);
  } else {
    errors->AddError("required property missing: reportOnlyValue");
  }
  const base::Value* reporting_endpoint_value = dict.Find("reportingEndpoint");
  if (reporting_endpoint_value) {
    errors->SetName("reportingEndpoint");
    result->reporting_endpoint_ = internal::FromValue<std::string>::Parse(*reporting_endpoint_value, errors);
  }
  const base::Value* report_only_reporting_endpoint_value = dict.Find("reportOnlyReportingEndpoint");
  if (report_only_reporting_endpoint_value) {
    errors->SetName("reportOnlyReportingEndpoint");
    result->report_only_reporting_endpoint_ = internal::FromValue<std::string>::Parse(*report_only_reporting_endpoint_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CrossOriginEmbedderPolicyStatus::Serialize() const {
  base::Value::Dict result;
  result.Set("value", internal::ToValue(value_));
  result.Set("reportOnlyValue", internal::ToValue(report_only_value_));
  if (reporting_endpoint_)
    result.Set("reportingEndpoint", internal::ToValue(reporting_endpoint_.value()));
  if (report_only_reporting_endpoint_)
    result.Set("reportOnlyReportingEndpoint", internal::ToValue(report_only_reporting_endpoint_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<CrossOriginEmbedderPolicyStatus> CrossOriginEmbedderPolicyStatus::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CrossOriginEmbedderPolicyStatus> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ContentSecurityPolicyStatus> ContentSecurityPolicyStatus::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ContentSecurityPolicyStatus");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ContentSecurityPolicyStatus> result(new ContentSecurityPolicyStatus());
  errors->Push();
  errors->SetName("ContentSecurityPolicyStatus");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* effective_directives_value = dict.Find("effectiveDirectives");
  if (effective_directives_value) {
    errors->SetName("effectiveDirectives");
    result->effective_directives_ = internal::FromValue<std::string>::Parse(*effective_directives_value, errors);
  } else {
    errors->AddError("required property missing: effectiveDirectives");
  }
  const base::Value* is_enforced_value = dict.Find("isEnforced");
  if (is_enforced_value) {
    errors->SetName("isEnforced");
    result->is_enforced_ = internal::FromValue<bool>::Parse(*is_enforced_value, errors);
  } else {
    errors->AddError("required property missing: isEnforced");
  }
  const base::Value* source_value = dict.Find("source");
  if (source_value) {
    errors->SetName("source");
    result->source_ = internal::FromValue<::headless::network::ContentSecurityPolicySource>::Parse(*source_value, errors);
  } else {
    errors->AddError("required property missing: source");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ContentSecurityPolicyStatus::Serialize() const {
  base::Value::Dict result;
  result.Set("effectiveDirectives", internal::ToValue(effective_directives_));
  result.Set("isEnforced", internal::ToValue(is_enforced_));
  result.Set("source", internal::ToValue(source_));
  return base::Value(std::move(result));
}

std::unique_ptr<ContentSecurityPolicyStatus> ContentSecurityPolicyStatus::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ContentSecurityPolicyStatus> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SecurityIsolationStatus> SecurityIsolationStatus::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SecurityIsolationStatus");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SecurityIsolationStatus> result(new SecurityIsolationStatus());
  errors->Push();
  errors->SetName("SecurityIsolationStatus");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* coop_value = dict.Find("coop");
  if (coop_value) {
    errors->SetName("coop");
    result->coop_ = internal::FromValue<::headless::network::CrossOriginOpenerPolicyStatus>::Parse(*coop_value, errors);
  }
  const base::Value* coep_value = dict.Find("coep");
  if (coep_value) {
    errors->SetName("coep");
    result->coep_ = internal::FromValue<::headless::network::CrossOriginEmbedderPolicyStatus>::Parse(*coep_value, errors);
  }
  const base::Value* csp_value = dict.Find("csp");
  if (csp_value) {
    errors->SetName("csp");
    result->csp_ = internal::FromValue<std::vector<std::unique_ptr<::headless::network::ContentSecurityPolicyStatus>>>::Parse(*csp_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SecurityIsolationStatus::Serialize() const {
  base::Value::Dict result;
  if (coop_)
    result.Set("coop", internal::ToValue(*coop_.value()));
  if (coep_)
    result.Set("coep", internal::ToValue(*coep_.value()));
  if (csp_)
    result.Set("csp", internal::ToValue(csp_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<SecurityIsolationStatus> SecurityIsolationStatus::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SecurityIsolationStatus> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ReportingApiReport> ReportingApiReport::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ReportingApiReport");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ReportingApiReport> result(new ReportingApiReport());
  errors->Push();
  errors->SetName("ReportingApiReport");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* id_value = dict.Find("id");
  if (id_value) {
    errors->SetName("id");
    result->id_ = internal::FromValue<std::string>::Parse(*id_value, errors);
  } else {
    errors->AddError("required property missing: id");
  }
  const base::Value* initiator_url_value = dict.Find("initiatorUrl");
  if (initiator_url_value) {
    errors->SetName("initiatorUrl");
    result->initiator_url_ = internal::FromValue<std::string>::Parse(*initiator_url_value, errors);
  } else {
    errors->AddError("required property missing: initiatorUrl");
  }
  const base::Value* destination_value = dict.Find("destination");
  if (destination_value) {
    errors->SetName("destination");
    result->destination_ = internal::FromValue<std::string>::Parse(*destination_value, errors);
  } else {
    errors->AddError("required property missing: destination");
  }
  const base::Value* type_value = dict.Find("type");
  if (type_value) {
    errors->SetName("type");
    result->type_ = internal::FromValue<std::string>::Parse(*type_value, errors);
  } else {
    errors->AddError("required property missing: type");
  }
  const base::Value* timestamp_value = dict.Find("timestamp");
  if (timestamp_value) {
    errors->SetName("timestamp");
    result->timestamp_ = internal::FromValue<double>::Parse(*timestamp_value, errors);
  } else {
    errors->AddError("required property missing: timestamp");
  }
  const base::Value* depth_value = dict.Find("depth");
  if (depth_value) {
    errors->SetName("depth");
    result->depth_ = internal::FromValue<int>::Parse(*depth_value, errors);
  } else {
    errors->AddError("required property missing: depth");
  }
  const base::Value* completed_attempts_value = dict.Find("completedAttempts");
  if (completed_attempts_value) {
    errors->SetName("completedAttempts");
    result->completed_attempts_ = internal::FromValue<int>::Parse(*completed_attempts_value, errors);
  } else {
    errors->AddError("required property missing: completedAttempts");
  }
  const base::Value* body_value = dict.Find("body");
  if (body_value) {
    errors->SetName("body");
    result->body_ = internal::FromValue<base::Value>::Parse(*body_value, errors);
  } else {
    errors->AddError("required property missing: body");
  }
  const base::Value* status_value = dict.Find("status");
  if (status_value) {
    errors->SetName("status");
    result->status_ = internal::FromValue<::headless::network::ReportStatus>::Parse(*status_value, errors);
  } else {
    errors->AddError("required property missing: status");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ReportingApiReport::Serialize() const {
  base::Value::Dict result;
  result.Set("id", internal::ToValue(id_));
  result.Set("initiatorUrl", internal::ToValue(initiator_url_));
  result.Set("destination", internal::ToValue(destination_));
  result.Set("type", internal::ToValue(type_));
  result.Set("timestamp", internal::ToValue(timestamp_));
  result.Set("depth", internal::ToValue(depth_));
  result.Set("completedAttempts", internal::ToValue(completed_attempts_));
  result.Set("body", internal::ToValue(*body_));
  result.Set("status", internal::ToValue(status_));
  return base::Value(std::move(result));
}

std::unique_ptr<ReportingApiReport> ReportingApiReport::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ReportingApiReport> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ReportingApiEndpoint> ReportingApiEndpoint::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ReportingApiEndpoint");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ReportingApiEndpoint> result(new ReportingApiEndpoint());
  errors->Push();
  errors->SetName("ReportingApiEndpoint");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    errors->SetName("url");
    result->url_ = internal::FromValue<std::string>::Parse(*url_value, errors);
  } else {
    errors->AddError("required property missing: url");
  }
  const base::Value* group_name_value = dict.Find("groupName");
  if (group_name_value) {
    errors->SetName("groupName");
    result->group_name_ = internal::FromValue<std::string>::Parse(*group_name_value, errors);
  } else {
    errors->AddError("required property missing: groupName");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ReportingApiEndpoint::Serialize() const {
  base::Value::Dict result;
  result.Set("url", internal::ToValue(url_));
  result.Set("groupName", internal::ToValue(group_name_));
  return base::Value(std::move(result));
}

std::unique_ptr<ReportingApiEndpoint> ReportingApiEndpoint::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ReportingApiEndpoint> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<LoadNetworkResourcePageResult> LoadNetworkResourcePageResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("LoadNetworkResourcePageResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<LoadNetworkResourcePageResult> result(new LoadNetworkResourcePageResult());
  errors->Push();
  errors->SetName("LoadNetworkResourcePageResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* success_value = dict.Find("success");
  if (success_value) {
    errors->SetName("success");
    result->success_ = internal::FromValue<bool>::Parse(*success_value, errors);
  } else {
    errors->AddError("required property missing: success");
  }
  const base::Value* net_error_value = dict.Find("netError");
  if (net_error_value) {
    errors->SetName("netError");
    result->net_error_ = internal::FromValue<double>::Parse(*net_error_value, errors);
  }
  const base::Value* net_error_name_value = dict.Find("netErrorName");
  if (net_error_name_value) {
    errors->SetName("netErrorName");
    result->net_error_name_ = internal::FromValue<std::string>::Parse(*net_error_name_value, errors);
  }
  const base::Value* http_status_code_value = dict.Find("httpStatusCode");
  if (http_status_code_value) {
    errors->SetName("httpStatusCode");
    result->http_status_code_ = internal::FromValue<double>::Parse(*http_status_code_value, errors);
  }
  const base::Value* stream_value = dict.Find("stream");
  if (stream_value) {
    errors->SetName("stream");
    result->stream_ = internal::FromValue<std::string>::Parse(*stream_value, errors);
  }
  const base::Value* headers_value = dict.Find("headers");
  if (headers_value) {
    errors->SetName("headers");
    result->headers_ = internal::FromValue<base::Value::Dict>::Parse(*headers_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value LoadNetworkResourcePageResult::Serialize() const {
  base::Value::Dict result;
  result.Set("success", internal::ToValue(success_));
  if (net_error_)
    result.Set("netError", internal::ToValue(net_error_.value()));
  if (net_error_name_)
    result.Set("netErrorName", internal::ToValue(net_error_name_.value()));
  if (http_status_code_)
    result.Set("httpStatusCode", internal::ToValue(http_status_code_.value()));
  if (stream_)
    result.Set("stream", internal::ToValue(stream_.value()));
  if (headers_)
    result.Set("headers", internal::ToValue(*headers_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<LoadNetworkResourcePageResult> LoadNetworkResourcePageResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<LoadNetworkResourcePageResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<LoadNetworkResourceOptions> LoadNetworkResourceOptions::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("LoadNetworkResourceOptions");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<LoadNetworkResourceOptions> result(new LoadNetworkResourceOptions());
  errors->Push();
  errors->SetName("LoadNetworkResourceOptions");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* disable_cache_value = dict.Find("disableCache");
  if (disable_cache_value) {
    errors->SetName("disableCache");
    result->disable_cache_ = internal::FromValue<bool>::Parse(*disable_cache_value, errors);
  } else {
    errors->AddError("required property missing: disableCache");
  }
  const base::Value* include_credentials_value = dict.Find("includeCredentials");
  if (include_credentials_value) {
    errors->SetName("includeCredentials");
    result->include_credentials_ = internal::FromValue<bool>::Parse(*include_credentials_value, errors);
  } else {
    errors->AddError("required property missing: includeCredentials");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value LoadNetworkResourceOptions::Serialize() const {
  base::Value::Dict result;
  result.Set("disableCache", internal::ToValue(disable_cache_));
  result.Set("includeCredentials", internal::ToValue(include_credentials_));
  return base::Value(std::move(result));
}

std::unique_ptr<LoadNetworkResourceOptions> LoadNetworkResourceOptions::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<LoadNetworkResourceOptions> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetAcceptedEncodingsParams> SetAcceptedEncodingsParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetAcceptedEncodingsParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetAcceptedEncodingsParams> result(new SetAcceptedEncodingsParams());
  errors->Push();
  errors->SetName("SetAcceptedEncodingsParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* encodings_value = dict.Find("encodings");
  if (encodings_value) {
    errors->SetName("encodings");
    result->encodings_ = internal::FromValue<std::vector<::headless::network::ContentEncoding>>::Parse(*encodings_value, errors);
  } else {
    errors->AddError("required property missing: encodings");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetAcceptedEncodingsParams::Serialize() const {
  base::Value::Dict result;
  result.Set("encodings", internal::ToValue(encodings_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetAcceptedEncodingsParams> SetAcceptedEncodingsParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetAcceptedEncodingsParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetAcceptedEncodingsResult> SetAcceptedEncodingsResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetAcceptedEncodingsResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetAcceptedEncodingsResult> result(new SetAcceptedEncodingsResult());
  errors->Push();
  errors->SetName("SetAcceptedEncodingsResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetAcceptedEncodingsResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetAcceptedEncodingsResult> SetAcceptedEncodingsResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetAcceptedEncodingsResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ClearAcceptedEncodingsOverrideParams> ClearAcceptedEncodingsOverrideParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ClearAcceptedEncodingsOverrideParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ClearAcceptedEncodingsOverrideParams> result(new ClearAcceptedEncodingsOverrideParams());
  errors->Push();
  errors->SetName("ClearAcceptedEncodingsOverrideParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ClearAcceptedEncodingsOverrideParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<ClearAcceptedEncodingsOverrideParams> ClearAcceptedEncodingsOverrideParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ClearAcceptedEncodingsOverrideParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ClearAcceptedEncodingsOverrideResult> ClearAcceptedEncodingsOverrideResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ClearAcceptedEncodingsOverrideResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ClearAcceptedEncodingsOverrideResult> result(new ClearAcceptedEncodingsOverrideResult());
  errors->Push();
  errors->SetName("ClearAcceptedEncodingsOverrideResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ClearAcceptedEncodingsOverrideResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<ClearAcceptedEncodingsOverrideResult> ClearAcceptedEncodingsOverrideResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ClearAcceptedEncodingsOverrideResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CanClearBrowserCacheParams> CanClearBrowserCacheParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CanClearBrowserCacheParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CanClearBrowserCacheParams> result(new CanClearBrowserCacheParams());
  errors->Push();
  errors->SetName("CanClearBrowserCacheParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CanClearBrowserCacheParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<CanClearBrowserCacheParams> CanClearBrowserCacheParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CanClearBrowserCacheParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CanClearBrowserCacheResult> CanClearBrowserCacheResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CanClearBrowserCacheResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CanClearBrowserCacheResult> result(new CanClearBrowserCacheResult());
  errors->Push();
  errors->SetName("CanClearBrowserCacheResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* result_value = dict.Find("result");
  if (result_value) {
    errors->SetName("result");
    result->result_ = internal::FromValue<bool>::Parse(*result_value, errors);
  } else {
    errors->AddError("required property missing: result");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CanClearBrowserCacheResult::Serialize() const {
  base::Value::Dict result;
  result.Set("result", internal::ToValue(result_));
  return base::Value(std::move(result));
}

std::unique_ptr<CanClearBrowserCacheResult> CanClearBrowserCacheResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CanClearBrowserCacheResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CanClearBrowserCookiesParams> CanClearBrowserCookiesParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CanClearBrowserCookiesParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CanClearBrowserCookiesParams> result(new CanClearBrowserCookiesParams());
  errors->Push();
  errors->SetName("CanClearBrowserCookiesParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CanClearBrowserCookiesParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<CanClearBrowserCookiesParams> CanClearBrowserCookiesParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CanClearBrowserCookiesParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CanClearBrowserCookiesResult> CanClearBrowserCookiesResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CanClearBrowserCookiesResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CanClearBrowserCookiesResult> result(new CanClearBrowserCookiesResult());
  errors->Push();
  errors->SetName("CanClearBrowserCookiesResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* result_value = dict.Find("result");
  if (result_value) {
    errors->SetName("result");
    result->result_ = internal::FromValue<bool>::Parse(*result_value, errors);
  } else {
    errors->AddError("required property missing: result");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CanClearBrowserCookiesResult::Serialize() const {
  base::Value::Dict result;
  result.Set("result", internal::ToValue(result_));
  return base::Value(std::move(result));
}

std::unique_ptr<CanClearBrowserCookiesResult> CanClearBrowserCookiesResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CanClearBrowserCookiesResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CanEmulateNetworkConditionsParams> CanEmulateNetworkConditionsParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CanEmulateNetworkConditionsParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CanEmulateNetworkConditionsParams> result(new CanEmulateNetworkConditionsParams());
  errors->Push();
  errors->SetName("CanEmulateNetworkConditionsParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CanEmulateNetworkConditionsParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<CanEmulateNetworkConditionsParams> CanEmulateNetworkConditionsParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CanEmulateNetworkConditionsParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CanEmulateNetworkConditionsResult> CanEmulateNetworkConditionsResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CanEmulateNetworkConditionsResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CanEmulateNetworkConditionsResult> result(new CanEmulateNetworkConditionsResult());
  errors->Push();
  errors->SetName("CanEmulateNetworkConditionsResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* result_value = dict.Find("result");
  if (result_value) {
    errors->SetName("result");
    result->result_ = internal::FromValue<bool>::Parse(*result_value, errors);
  } else {
    errors->AddError("required property missing: result");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CanEmulateNetworkConditionsResult::Serialize() const {
  base::Value::Dict result;
  result.Set("result", internal::ToValue(result_));
  return base::Value(std::move(result));
}

std::unique_ptr<CanEmulateNetworkConditionsResult> CanEmulateNetworkConditionsResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CanEmulateNetworkConditionsResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ClearBrowserCacheParams> ClearBrowserCacheParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ClearBrowserCacheParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ClearBrowserCacheParams> result(new ClearBrowserCacheParams());
  errors->Push();
  errors->SetName("ClearBrowserCacheParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ClearBrowserCacheParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<ClearBrowserCacheParams> ClearBrowserCacheParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ClearBrowserCacheParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ClearBrowserCacheResult> ClearBrowserCacheResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ClearBrowserCacheResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ClearBrowserCacheResult> result(new ClearBrowserCacheResult());
  errors->Push();
  errors->SetName("ClearBrowserCacheResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ClearBrowserCacheResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<ClearBrowserCacheResult> ClearBrowserCacheResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ClearBrowserCacheResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ClearBrowserCookiesParams> ClearBrowserCookiesParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ClearBrowserCookiesParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ClearBrowserCookiesParams> result(new ClearBrowserCookiesParams());
  errors->Push();
  errors->SetName("ClearBrowserCookiesParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ClearBrowserCookiesParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<ClearBrowserCookiesParams> ClearBrowserCookiesParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ClearBrowserCookiesParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ClearBrowserCookiesResult> ClearBrowserCookiesResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ClearBrowserCookiesResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ClearBrowserCookiesResult> result(new ClearBrowserCookiesResult());
  errors->Push();
  errors->SetName("ClearBrowserCookiesResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ClearBrowserCookiesResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<ClearBrowserCookiesResult> ClearBrowserCookiesResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ClearBrowserCookiesResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ContinueInterceptedRequestParams> ContinueInterceptedRequestParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ContinueInterceptedRequestParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ContinueInterceptedRequestParams> result(new ContinueInterceptedRequestParams());
  errors->Push();
  errors->SetName("ContinueInterceptedRequestParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* interception_id_value = dict.Find("interceptionId");
  if (interception_id_value) {
    errors->SetName("interceptionId");
    result->interception_id_ = internal::FromValue<std::string>::Parse(*interception_id_value, errors);
  } else {
    errors->AddError("required property missing: interceptionId");
  }
  const base::Value* error_reason_value = dict.Find("errorReason");
  if (error_reason_value) {
    errors->SetName("errorReason");
    result->error_reason_ = internal::FromValue<::headless::network::ErrorReason>::Parse(*error_reason_value, errors);
  }
  const base::Value* raw_response_value = dict.Find("rawResponse");
  if (raw_response_value) {
    errors->SetName("rawResponse");
    result->raw_response_ = internal::FromValue<protocol::Binary>::Parse(*raw_response_value, errors);
  }
  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    errors->SetName("url");
    result->url_ = internal::FromValue<std::string>::Parse(*url_value, errors);
  }
  const base::Value* method_value = dict.Find("method");
  if (method_value) {
    errors->SetName("method");
    result->method_ = internal::FromValue<std::string>::Parse(*method_value, errors);
  }
  const base::Value* post_data_value = dict.Find("postData");
  if (post_data_value) {
    errors->SetName("postData");
    result->post_data_ = internal::FromValue<std::string>::Parse(*post_data_value, errors);
  }
  const base::Value* headers_value = dict.Find("headers");
  if (headers_value) {
    errors->SetName("headers");
    result->headers_ = internal::FromValue<base::Value::Dict>::Parse(*headers_value, errors);
  }
  const base::Value* auth_challenge_response_value = dict.Find("authChallengeResponse");
  if (auth_challenge_response_value) {
    errors->SetName("authChallengeResponse");
    result->auth_challenge_response_ = internal::FromValue<::headless::network::AuthChallengeResponse>::Parse(*auth_challenge_response_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ContinueInterceptedRequestParams::Serialize() const {
  base::Value::Dict result;
  result.Set("interceptionId", internal::ToValue(interception_id_));
  if (error_reason_)
    result.Set("errorReason", internal::ToValue(error_reason_.value()));
  if (raw_response_)
    result.Set("rawResponse", internal::ToValue(raw_response_.value()));
  if (url_)
    result.Set("url", internal::ToValue(url_.value()));
  if (method_)
    result.Set("method", internal::ToValue(method_.value()));
  if (post_data_)
    result.Set("postData", internal::ToValue(post_data_.value()));
  if (headers_)
    result.Set("headers", internal::ToValue(*headers_.value()));
  if (auth_challenge_response_)
    result.Set("authChallengeResponse", internal::ToValue(*auth_challenge_response_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<ContinueInterceptedRequestParams> ContinueInterceptedRequestParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ContinueInterceptedRequestParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ContinueInterceptedRequestResult> ContinueInterceptedRequestResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ContinueInterceptedRequestResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ContinueInterceptedRequestResult> result(new ContinueInterceptedRequestResult());
  errors->Push();
  errors->SetName("ContinueInterceptedRequestResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ContinueInterceptedRequestResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<ContinueInterceptedRequestResult> ContinueInterceptedRequestResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ContinueInterceptedRequestResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<DeleteCookiesParams> DeleteCookiesParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("DeleteCookiesParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<DeleteCookiesParams> result(new DeleteCookiesParams());
  errors->Push();
  errors->SetName("DeleteCookiesParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* name_value = dict.Find("name");
  if (name_value) {
    errors->SetName("name");
    result->name_ = internal::FromValue<std::string>::Parse(*name_value, errors);
  } else {
    errors->AddError("required property missing: name");
  }
  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    errors->SetName("url");
    result->url_ = internal::FromValue<std::string>::Parse(*url_value, errors);
  }
  const base::Value* domain_value = dict.Find("domain");
  if (domain_value) {
    errors->SetName("domain");
    result->domain_ = internal::FromValue<std::string>::Parse(*domain_value, errors);
  }
  const base::Value* path_value = dict.Find("path");
  if (path_value) {
    errors->SetName("path");
    result->path_ = internal::FromValue<std::string>::Parse(*path_value, errors);
  }
  const base::Value* partition_key_value = dict.Find("partitionKey");
  if (partition_key_value) {
    errors->SetName("partitionKey");
    result->partition_key_ = internal::FromValue<std::string>::Parse(*partition_key_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value DeleteCookiesParams::Serialize() const {
  base::Value::Dict result;
  result.Set("name", internal::ToValue(name_));
  if (url_)
    result.Set("url", internal::ToValue(url_.value()));
  if (domain_)
    result.Set("domain", internal::ToValue(domain_.value()));
  if (path_)
    result.Set("path", internal::ToValue(path_.value()));
  if (partition_key_)
    result.Set("partitionKey", internal::ToValue(partition_key_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<DeleteCookiesParams> DeleteCookiesParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<DeleteCookiesParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<DeleteCookiesResult> DeleteCookiesResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("DeleteCookiesResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<DeleteCookiesResult> result(new DeleteCookiesResult());
  errors->Push();
  errors->SetName("DeleteCookiesResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value DeleteCookiesResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<DeleteCookiesResult> DeleteCookiesResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<DeleteCookiesResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<DisableParams> DisableParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("DisableParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<DisableParams> result(new DisableParams());
  errors->Push();
  errors->SetName("DisableParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value DisableParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<DisableParams> DisableParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<DisableParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<DisableResult> DisableResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("DisableResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<DisableResult> result(new DisableResult());
  errors->Push();
  errors->SetName("DisableResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value DisableResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<DisableResult> DisableResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<DisableResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<EmulateNetworkConditionsParams> EmulateNetworkConditionsParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("EmulateNetworkConditionsParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<EmulateNetworkConditionsParams> result(new EmulateNetworkConditionsParams());
  errors->Push();
  errors->SetName("EmulateNetworkConditionsParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* offline_value = dict.Find("offline");
  if (offline_value) {
    errors->SetName("offline");
    result->offline_ = internal::FromValue<bool>::Parse(*offline_value, errors);
  } else {
    errors->AddError("required property missing: offline");
  }
  const base::Value* latency_value = dict.Find("latency");
  if (latency_value) {
    errors->SetName("latency");
    result->latency_ = internal::FromValue<double>::Parse(*latency_value, errors);
  } else {
    errors->AddError("required property missing: latency");
  }
  const base::Value* download_throughput_value = dict.Find("downloadThroughput");
  if (download_throughput_value) {
    errors->SetName("downloadThroughput");
    result->download_throughput_ = internal::FromValue<double>::Parse(*download_throughput_value, errors);
  } else {
    errors->AddError("required property missing: downloadThroughput");
  }
  const base::Value* upload_throughput_value = dict.Find("uploadThroughput");
  if (upload_throughput_value) {
    errors->SetName("uploadThroughput");
    result->upload_throughput_ = internal::FromValue<double>::Parse(*upload_throughput_value, errors);
  } else {
    errors->AddError("required property missing: uploadThroughput");
  }
  const base::Value* connection_type_value = dict.Find("connectionType");
  if (connection_type_value) {
    errors->SetName("connectionType");
    result->connection_type_ = internal::FromValue<::headless::network::ConnectionType>::Parse(*connection_type_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value EmulateNetworkConditionsParams::Serialize() const {
  base::Value::Dict result;
  result.Set("offline", internal::ToValue(offline_));
  result.Set("latency", internal::ToValue(latency_));
  result.Set("downloadThroughput", internal::ToValue(download_throughput_));
  result.Set("uploadThroughput", internal::ToValue(upload_throughput_));
  if (connection_type_)
    result.Set("connectionType", internal::ToValue(connection_type_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<EmulateNetworkConditionsParams> EmulateNetworkConditionsParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<EmulateNetworkConditionsParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<EmulateNetworkConditionsResult> EmulateNetworkConditionsResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("EmulateNetworkConditionsResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<EmulateNetworkConditionsResult> result(new EmulateNetworkConditionsResult());
  errors->Push();
  errors->SetName("EmulateNetworkConditionsResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value EmulateNetworkConditionsResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<EmulateNetworkConditionsResult> EmulateNetworkConditionsResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<EmulateNetworkConditionsResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<EnableParams> EnableParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("EnableParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<EnableParams> result(new EnableParams());
  errors->Push();
  errors->SetName("EnableParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* max_total_buffer_size_value = dict.Find("maxTotalBufferSize");
  if (max_total_buffer_size_value) {
    errors->SetName("maxTotalBufferSize");
    result->max_total_buffer_size_ = internal::FromValue<int>::Parse(*max_total_buffer_size_value, errors);
  }
  const base::Value* max_resource_buffer_size_value = dict.Find("maxResourceBufferSize");
  if (max_resource_buffer_size_value) {
    errors->SetName("maxResourceBufferSize");
    result->max_resource_buffer_size_ = internal::FromValue<int>::Parse(*max_resource_buffer_size_value, errors);
  }
  const base::Value* max_post_data_size_value = dict.Find("maxPostDataSize");
  if (max_post_data_size_value) {
    errors->SetName("maxPostDataSize");
    result->max_post_data_size_ = internal::FromValue<int>::Parse(*max_post_data_size_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value EnableParams::Serialize() const {
  base::Value::Dict result;
  if (max_total_buffer_size_)
    result.Set("maxTotalBufferSize", internal::ToValue(max_total_buffer_size_.value()));
  if (max_resource_buffer_size_)
    result.Set("maxResourceBufferSize", internal::ToValue(max_resource_buffer_size_.value()));
  if (max_post_data_size_)
    result.Set("maxPostDataSize", internal::ToValue(max_post_data_size_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<EnableParams> EnableParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<EnableParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<EnableResult> EnableResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("EnableResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<EnableResult> result(new EnableResult());
  errors->Push();
  errors->SetName("EnableResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value EnableResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<EnableResult> EnableResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<EnableResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetAllCookiesParams> GetAllCookiesParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetAllCookiesParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetAllCookiesParams> result(new GetAllCookiesParams());
  errors->Push();
  errors->SetName("GetAllCookiesParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetAllCookiesParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<GetAllCookiesParams> GetAllCookiesParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetAllCookiesParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetAllCookiesResult> GetAllCookiesResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetAllCookiesResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetAllCookiesResult> result(new GetAllCookiesResult());
  errors->Push();
  errors->SetName("GetAllCookiesResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* cookies_value = dict.Find("cookies");
  if (cookies_value) {
    errors->SetName("cookies");
    result->cookies_ = internal::FromValue<std::vector<std::unique_ptr<::headless::network::Cookie>>>::Parse(*cookies_value, errors);
  } else {
    errors->AddError("required property missing: cookies");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetAllCookiesResult::Serialize() const {
  base::Value::Dict result;
  result.Set("cookies", internal::ToValue(cookies_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetAllCookiesResult> GetAllCookiesResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetAllCookiesResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetCertificateParams> GetCertificateParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetCertificateParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetCertificateParams> result(new GetCertificateParams());
  errors->Push();
  errors->SetName("GetCertificateParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* origin_value = dict.Find("origin");
  if (origin_value) {
    errors->SetName("origin");
    result->origin_ = internal::FromValue<std::string>::Parse(*origin_value, errors);
  } else {
    errors->AddError("required property missing: origin");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetCertificateParams::Serialize() const {
  base::Value::Dict result;
  result.Set("origin", internal::ToValue(origin_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetCertificateParams> GetCertificateParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetCertificateParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetCertificateResult> GetCertificateResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetCertificateResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetCertificateResult> result(new GetCertificateResult());
  errors->Push();
  errors->SetName("GetCertificateResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* table_names_value = dict.Find("tableNames");
  if (table_names_value) {
    errors->SetName("tableNames");
    result->table_names_ = internal::FromValue<std::vector<std::string>>::Parse(*table_names_value, errors);
  } else {
    errors->AddError("required property missing: tableNames");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetCertificateResult::Serialize() const {
  base::Value::Dict result;
  result.Set("tableNames", internal::ToValue(table_names_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetCertificateResult> GetCertificateResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetCertificateResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetCookiesParams> GetCookiesParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetCookiesParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetCookiesParams> result(new GetCookiesParams());
  errors->Push();
  errors->SetName("GetCookiesParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* urls_value = dict.Find("urls");
  if (urls_value) {
    errors->SetName("urls");
    result->urls_ = internal::FromValue<std::vector<std::string>>::Parse(*urls_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetCookiesParams::Serialize() const {
  base::Value::Dict result;
  if (urls_)
    result.Set("urls", internal::ToValue(urls_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<GetCookiesParams> GetCookiesParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetCookiesParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetCookiesResult> GetCookiesResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetCookiesResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetCookiesResult> result(new GetCookiesResult());
  errors->Push();
  errors->SetName("GetCookiesResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* cookies_value = dict.Find("cookies");
  if (cookies_value) {
    errors->SetName("cookies");
    result->cookies_ = internal::FromValue<std::vector<std::unique_ptr<::headless::network::Cookie>>>::Parse(*cookies_value, errors);
  } else {
    errors->AddError("required property missing: cookies");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetCookiesResult::Serialize() const {
  base::Value::Dict result;
  result.Set("cookies", internal::ToValue(cookies_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetCookiesResult> GetCookiesResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetCookiesResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetResponseBodyParams> GetResponseBodyParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetResponseBodyParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetResponseBodyParams> result(new GetResponseBodyParams());
  errors->Push();
  errors->SetName("GetResponseBodyParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* request_id_value = dict.Find("requestId");
  if (request_id_value) {
    errors->SetName("requestId");
    result->request_id_ = internal::FromValue<std::string>::Parse(*request_id_value, errors);
  } else {
    errors->AddError("required property missing: requestId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetResponseBodyParams::Serialize() const {
  base::Value::Dict result;
  result.Set("requestId", internal::ToValue(request_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetResponseBodyParams> GetResponseBodyParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetResponseBodyParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetResponseBodyResult> GetResponseBodyResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetResponseBodyResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetResponseBodyResult> result(new GetResponseBodyResult());
  errors->Push();
  errors->SetName("GetResponseBodyResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* body_value = dict.Find("body");
  if (body_value) {
    errors->SetName("body");
    result->body_ = internal::FromValue<std::string>::Parse(*body_value, errors);
  } else {
    errors->AddError("required property missing: body");
  }
  const base::Value* base64_encoded_value = dict.Find("base64Encoded");
  if (base64_encoded_value) {
    errors->SetName("base64Encoded");
    result->base64_encoded_ = internal::FromValue<bool>::Parse(*base64_encoded_value, errors);
  } else {
    errors->AddError("required property missing: base64Encoded");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetResponseBodyResult::Serialize() const {
  base::Value::Dict result;
  result.Set("body", internal::ToValue(body_));
  result.Set("base64Encoded", internal::ToValue(base64_encoded_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetResponseBodyResult> GetResponseBodyResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetResponseBodyResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetRequestPostDataParams> GetRequestPostDataParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetRequestPostDataParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetRequestPostDataParams> result(new GetRequestPostDataParams());
  errors->Push();
  errors->SetName("GetRequestPostDataParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* request_id_value = dict.Find("requestId");
  if (request_id_value) {
    errors->SetName("requestId");
    result->request_id_ = internal::FromValue<std::string>::Parse(*request_id_value, errors);
  } else {
    errors->AddError("required property missing: requestId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetRequestPostDataParams::Serialize() const {
  base::Value::Dict result;
  result.Set("requestId", internal::ToValue(request_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetRequestPostDataParams> GetRequestPostDataParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetRequestPostDataParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetRequestPostDataResult> GetRequestPostDataResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetRequestPostDataResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetRequestPostDataResult> result(new GetRequestPostDataResult());
  errors->Push();
  errors->SetName("GetRequestPostDataResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* post_data_value = dict.Find("postData");
  if (post_data_value) {
    errors->SetName("postData");
    result->post_data_ = internal::FromValue<std::string>::Parse(*post_data_value, errors);
  } else {
    errors->AddError("required property missing: postData");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetRequestPostDataResult::Serialize() const {
  base::Value::Dict result;
  result.Set("postData", internal::ToValue(post_data_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetRequestPostDataResult> GetRequestPostDataResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetRequestPostDataResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetResponseBodyForInterceptionParams> GetResponseBodyForInterceptionParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetResponseBodyForInterceptionParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetResponseBodyForInterceptionParams> result(new GetResponseBodyForInterceptionParams());
  errors->Push();
  errors->SetName("GetResponseBodyForInterceptionParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* interception_id_value = dict.Find("interceptionId");
  if (interception_id_value) {
    errors->SetName("interceptionId");
    result->interception_id_ = internal::FromValue<std::string>::Parse(*interception_id_value, errors);
  } else {
    errors->AddError("required property missing: interceptionId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetResponseBodyForInterceptionParams::Serialize() const {
  base::Value::Dict result;
  result.Set("interceptionId", internal::ToValue(interception_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetResponseBodyForInterceptionParams> GetResponseBodyForInterceptionParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetResponseBodyForInterceptionParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetResponseBodyForInterceptionResult> GetResponseBodyForInterceptionResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetResponseBodyForInterceptionResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetResponseBodyForInterceptionResult> result(new GetResponseBodyForInterceptionResult());
  errors->Push();
  errors->SetName("GetResponseBodyForInterceptionResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* body_value = dict.Find("body");
  if (body_value) {
    errors->SetName("body");
    result->body_ = internal::FromValue<std::string>::Parse(*body_value, errors);
  } else {
    errors->AddError("required property missing: body");
  }
  const base::Value* base64_encoded_value = dict.Find("base64Encoded");
  if (base64_encoded_value) {
    errors->SetName("base64Encoded");
    result->base64_encoded_ = internal::FromValue<bool>::Parse(*base64_encoded_value, errors);
  } else {
    errors->AddError("required property missing: base64Encoded");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetResponseBodyForInterceptionResult::Serialize() const {
  base::Value::Dict result;
  result.Set("body", internal::ToValue(body_));
  result.Set("base64Encoded", internal::ToValue(base64_encoded_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetResponseBodyForInterceptionResult> GetResponseBodyForInterceptionResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetResponseBodyForInterceptionResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<TakeResponseBodyForInterceptionAsStreamParams> TakeResponseBodyForInterceptionAsStreamParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("TakeResponseBodyForInterceptionAsStreamParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<TakeResponseBodyForInterceptionAsStreamParams> result(new TakeResponseBodyForInterceptionAsStreamParams());
  errors->Push();
  errors->SetName("TakeResponseBodyForInterceptionAsStreamParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* interception_id_value = dict.Find("interceptionId");
  if (interception_id_value) {
    errors->SetName("interceptionId");
    result->interception_id_ = internal::FromValue<std::string>::Parse(*interception_id_value, errors);
  } else {
    errors->AddError("required property missing: interceptionId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value TakeResponseBodyForInterceptionAsStreamParams::Serialize() const {
  base::Value::Dict result;
  result.Set("interceptionId", internal::ToValue(interception_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<TakeResponseBodyForInterceptionAsStreamParams> TakeResponseBodyForInterceptionAsStreamParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<TakeResponseBodyForInterceptionAsStreamParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<TakeResponseBodyForInterceptionAsStreamResult> TakeResponseBodyForInterceptionAsStreamResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("TakeResponseBodyForInterceptionAsStreamResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<TakeResponseBodyForInterceptionAsStreamResult> result(new TakeResponseBodyForInterceptionAsStreamResult());
  errors->Push();
  errors->SetName("TakeResponseBodyForInterceptionAsStreamResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* stream_value = dict.Find("stream");
  if (stream_value) {
    errors->SetName("stream");
    result->stream_ = internal::FromValue<std::string>::Parse(*stream_value, errors);
  } else {
    errors->AddError("required property missing: stream");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value TakeResponseBodyForInterceptionAsStreamResult::Serialize() const {
  base::Value::Dict result;
  result.Set("stream", internal::ToValue(stream_));
  return base::Value(std::move(result));
}

std::unique_ptr<TakeResponseBodyForInterceptionAsStreamResult> TakeResponseBodyForInterceptionAsStreamResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<TakeResponseBodyForInterceptionAsStreamResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ReplayXHRParams> ReplayXHRParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ReplayXHRParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ReplayXHRParams> result(new ReplayXHRParams());
  errors->Push();
  errors->SetName("ReplayXHRParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* request_id_value = dict.Find("requestId");
  if (request_id_value) {
    errors->SetName("requestId");
    result->request_id_ = internal::FromValue<std::string>::Parse(*request_id_value, errors);
  } else {
    errors->AddError("required property missing: requestId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ReplayXHRParams::Serialize() const {
  base::Value::Dict result;
  result.Set("requestId", internal::ToValue(request_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<ReplayXHRParams> ReplayXHRParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ReplayXHRParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ReplayXHRResult> ReplayXHRResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ReplayXHRResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ReplayXHRResult> result(new ReplayXHRResult());
  errors->Push();
  errors->SetName("ReplayXHRResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ReplayXHRResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<ReplayXHRResult> ReplayXHRResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ReplayXHRResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SearchInResponseBodyParams> SearchInResponseBodyParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SearchInResponseBodyParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SearchInResponseBodyParams> result(new SearchInResponseBodyParams());
  errors->Push();
  errors->SetName("SearchInResponseBodyParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* request_id_value = dict.Find("requestId");
  if (request_id_value) {
    errors->SetName("requestId");
    result->request_id_ = internal::FromValue<std::string>::Parse(*request_id_value, errors);
  } else {
    errors->AddError("required property missing: requestId");
  }
  const base::Value* query_value = dict.Find("query");
  if (query_value) {
    errors->SetName("query");
    result->query_ = internal::FromValue<std::string>::Parse(*query_value, errors);
  } else {
    errors->AddError("required property missing: query");
  }
  const base::Value* case_sensitive_value = dict.Find("caseSensitive");
  if (case_sensitive_value) {
    errors->SetName("caseSensitive");
    result->case_sensitive_ = internal::FromValue<bool>::Parse(*case_sensitive_value, errors);
  }
  const base::Value* is_regex_value = dict.Find("isRegex");
  if (is_regex_value) {
    errors->SetName("isRegex");
    result->is_regex_ = internal::FromValue<bool>::Parse(*is_regex_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SearchInResponseBodyParams::Serialize() const {
  base::Value::Dict result;
  result.Set("requestId", internal::ToValue(request_id_));
  result.Set("query", internal::ToValue(query_));
  if (case_sensitive_)
    result.Set("caseSensitive", internal::ToValue(case_sensitive_.value()));
  if (is_regex_)
    result.Set("isRegex", internal::ToValue(is_regex_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<SearchInResponseBodyParams> SearchInResponseBodyParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SearchInResponseBodyParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SearchInResponseBodyResult> SearchInResponseBodyResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SearchInResponseBodyResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SearchInResponseBodyResult> result(new SearchInResponseBodyResult());
  errors->Push();
  errors->SetName("SearchInResponseBodyResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* result_value = dict.Find("result");
  if (result_value) {
    errors->SetName("result");
    result->result_ = internal::FromValue<std::vector<std::unique_ptr<::headless::debugger::SearchMatch>>>::Parse(*result_value, errors);
  } else {
    errors->AddError("required property missing: result");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SearchInResponseBodyResult::Serialize() const {
  base::Value::Dict result;
  result.Set("result", internal::ToValue(result_));
  return base::Value(std::move(result));
}

std::unique_ptr<SearchInResponseBodyResult> SearchInResponseBodyResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SearchInResponseBodyResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetBlockedURLsParams> SetBlockedURLsParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetBlockedURLsParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetBlockedURLsParams> result(new SetBlockedURLsParams());
  errors->Push();
  errors->SetName("SetBlockedURLsParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* urls_value = dict.Find("urls");
  if (urls_value) {
    errors->SetName("urls");
    result->urls_ = internal::FromValue<std::vector<std::string>>::Parse(*urls_value, errors);
  } else {
    errors->AddError("required property missing: urls");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetBlockedURLsParams::Serialize() const {
  base::Value::Dict result;
  result.Set("urls", internal::ToValue(urls_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetBlockedURLsParams> SetBlockedURLsParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetBlockedURLsParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetBlockedURLsResult> SetBlockedURLsResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetBlockedURLsResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetBlockedURLsResult> result(new SetBlockedURLsResult());
  errors->Push();
  errors->SetName("SetBlockedURLsResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetBlockedURLsResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetBlockedURLsResult> SetBlockedURLsResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetBlockedURLsResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetBypassServiceWorkerParams> SetBypassServiceWorkerParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetBypassServiceWorkerParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetBypassServiceWorkerParams> result(new SetBypassServiceWorkerParams());
  errors->Push();
  errors->SetName("SetBypassServiceWorkerParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* bypass_value = dict.Find("bypass");
  if (bypass_value) {
    errors->SetName("bypass");
    result->bypass_ = internal::FromValue<bool>::Parse(*bypass_value, errors);
  } else {
    errors->AddError("required property missing: bypass");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetBypassServiceWorkerParams::Serialize() const {
  base::Value::Dict result;
  result.Set("bypass", internal::ToValue(bypass_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetBypassServiceWorkerParams> SetBypassServiceWorkerParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetBypassServiceWorkerParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetBypassServiceWorkerResult> SetBypassServiceWorkerResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetBypassServiceWorkerResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetBypassServiceWorkerResult> result(new SetBypassServiceWorkerResult());
  errors->Push();
  errors->SetName("SetBypassServiceWorkerResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetBypassServiceWorkerResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetBypassServiceWorkerResult> SetBypassServiceWorkerResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetBypassServiceWorkerResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetCacheDisabledParams> SetCacheDisabledParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetCacheDisabledParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetCacheDisabledParams> result(new SetCacheDisabledParams());
  errors->Push();
  errors->SetName("SetCacheDisabledParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* cache_disabled_value = dict.Find("cacheDisabled");
  if (cache_disabled_value) {
    errors->SetName("cacheDisabled");
    result->cache_disabled_ = internal::FromValue<bool>::Parse(*cache_disabled_value, errors);
  } else {
    errors->AddError("required property missing: cacheDisabled");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetCacheDisabledParams::Serialize() const {
  base::Value::Dict result;
  result.Set("cacheDisabled", internal::ToValue(cache_disabled_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetCacheDisabledParams> SetCacheDisabledParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetCacheDisabledParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetCacheDisabledResult> SetCacheDisabledResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetCacheDisabledResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetCacheDisabledResult> result(new SetCacheDisabledResult());
  errors->Push();
  errors->SetName("SetCacheDisabledResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetCacheDisabledResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetCacheDisabledResult> SetCacheDisabledResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetCacheDisabledResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetCookieParams> SetCookieParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetCookieParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetCookieParams> result(new SetCookieParams());
  errors->Push();
  errors->SetName("SetCookieParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* name_value = dict.Find("name");
  if (name_value) {
    errors->SetName("name");
    result->name_ = internal::FromValue<std::string>::Parse(*name_value, errors);
  } else {
    errors->AddError("required property missing: name");
  }
  const base::Value* value_value = dict.Find("value");
  if (value_value) {
    errors->SetName("value");
    result->value_ = internal::FromValue<std::string>::Parse(*value_value, errors);
  } else {
    errors->AddError("required property missing: value");
  }
  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    errors->SetName("url");
    result->url_ = internal::FromValue<std::string>::Parse(*url_value, errors);
  }
  const base::Value* domain_value = dict.Find("domain");
  if (domain_value) {
    errors->SetName("domain");
    result->domain_ = internal::FromValue<std::string>::Parse(*domain_value, errors);
  }
  const base::Value* path_value = dict.Find("path");
  if (path_value) {
    errors->SetName("path");
    result->path_ = internal::FromValue<std::string>::Parse(*path_value, errors);
  }
  const base::Value* secure_value = dict.Find("secure");
  if (secure_value) {
    errors->SetName("secure");
    result->secure_ = internal::FromValue<bool>::Parse(*secure_value, errors);
  }
  const base::Value* http_only_value = dict.Find("httpOnly");
  if (http_only_value) {
    errors->SetName("httpOnly");
    result->http_only_ = internal::FromValue<bool>::Parse(*http_only_value, errors);
  }
  const base::Value* same_site_value = dict.Find("sameSite");
  if (same_site_value) {
    errors->SetName("sameSite");
    result->same_site_ = internal::FromValue<::headless::network::CookieSameSite>::Parse(*same_site_value, errors);
  }
  const base::Value* expires_value = dict.Find("expires");
  if (expires_value) {
    errors->SetName("expires");
    result->expires_ = internal::FromValue<double>::Parse(*expires_value, errors);
  }
  const base::Value* priority_value = dict.Find("priority");
  if (priority_value) {
    errors->SetName("priority");
    result->priority_ = internal::FromValue<::headless::network::CookiePriority>::Parse(*priority_value, errors);
  }
  const base::Value* same_party_value = dict.Find("sameParty");
  if (same_party_value) {
    errors->SetName("sameParty");
    result->same_party_ = internal::FromValue<bool>::Parse(*same_party_value, errors);
  }
  const base::Value* source_scheme_value = dict.Find("sourceScheme");
  if (source_scheme_value) {
    errors->SetName("sourceScheme");
    result->source_scheme_ = internal::FromValue<::headless::network::CookieSourceScheme>::Parse(*source_scheme_value, errors);
  }
  const base::Value* source_port_value = dict.Find("sourcePort");
  if (source_port_value) {
    errors->SetName("sourcePort");
    result->source_port_ = internal::FromValue<int>::Parse(*source_port_value, errors);
  }
  const base::Value* partition_key_value = dict.Find("partitionKey");
  if (partition_key_value) {
    errors->SetName("partitionKey");
    result->partition_key_ = internal::FromValue<std::string>::Parse(*partition_key_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetCookieParams::Serialize() const {
  base::Value::Dict result;
  result.Set("name", internal::ToValue(name_));
  result.Set("value", internal::ToValue(value_));
  if (url_)
    result.Set("url", internal::ToValue(url_.value()));
  if (domain_)
    result.Set("domain", internal::ToValue(domain_.value()));
  if (path_)
    result.Set("path", internal::ToValue(path_.value()));
  if (secure_)
    result.Set("secure", internal::ToValue(secure_.value()));
  if (http_only_)
    result.Set("httpOnly", internal::ToValue(http_only_.value()));
  if (same_site_)
    result.Set("sameSite", internal::ToValue(same_site_.value()));
  if (expires_)
    result.Set("expires", internal::ToValue(expires_.value()));
  if (priority_)
    result.Set("priority", internal::ToValue(priority_.value()));
  if (same_party_)
    result.Set("sameParty", internal::ToValue(same_party_.value()));
  if (source_scheme_)
    result.Set("sourceScheme", internal::ToValue(source_scheme_.value()));
  if (source_port_)
    result.Set("sourcePort", internal::ToValue(source_port_.value()));
  if (partition_key_)
    result.Set("partitionKey", internal::ToValue(partition_key_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<SetCookieParams> SetCookieParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetCookieParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetCookieResult> SetCookieResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetCookieResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetCookieResult> result(new SetCookieResult());
  errors->Push();
  errors->SetName("SetCookieResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* success_value = dict.Find("success");
  if (success_value) {
    errors->SetName("success");
    result->success_ = internal::FromValue<bool>::Parse(*success_value, errors);
  } else {
    errors->AddError("required property missing: success");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetCookieResult::Serialize() const {
  base::Value::Dict result;
  result.Set("success", internal::ToValue(success_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetCookieResult> SetCookieResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetCookieResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetCookiesParams> SetCookiesParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetCookiesParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetCookiesParams> result(new SetCookiesParams());
  errors->Push();
  errors->SetName("SetCookiesParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* cookies_value = dict.Find("cookies");
  if (cookies_value) {
    errors->SetName("cookies");
    result->cookies_ = internal::FromValue<std::vector<std::unique_ptr<::headless::network::CookieParam>>>::Parse(*cookies_value, errors);
  } else {
    errors->AddError("required property missing: cookies");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetCookiesParams::Serialize() const {
  base::Value::Dict result;
  result.Set("cookies", internal::ToValue(cookies_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetCookiesParams> SetCookiesParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetCookiesParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetCookiesResult> SetCookiesResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetCookiesResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetCookiesResult> result(new SetCookiesResult());
  errors->Push();
  errors->SetName("SetCookiesResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetCookiesResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetCookiesResult> SetCookiesResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetCookiesResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetExtraHTTPHeadersParams> SetExtraHTTPHeadersParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetExtraHTTPHeadersParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetExtraHTTPHeadersParams> result(new SetExtraHTTPHeadersParams());
  errors->Push();
  errors->SetName("SetExtraHTTPHeadersParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* headers_value = dict.Find("headers");
  if (headers_value) {
    errors->SetName("headers");
    result->headers_ = internal::FromValue<base::Value::Dict>::Parse(*headers_value, errors);
  } else {
    errors->AddError("required property missing: headers");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetExtraHTTPHeadersParams::Serialize() const {
  base::Value::Dict result;
  result.Set("headers", internal::ToValue(*headers_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetExtraHTTPHeadersParams> SetExtraHTTPHeadersParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetExtraHTTPHeadersParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetExtraHTTPHeadersResult> SetExtraHTTPHeadersResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetExtraHTTPHeadersResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetExtraHTTPHeadersResult> result(new SetExtraHTTPHeadersResult());
  errors->Push();
  errors->SetName("SetExtraHTTPHeadersResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetExtraHTTPHeadersResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetExtraHTTPHeadersResult> SetExtraHTTPHeadersResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetExtraHTTPHeadersResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetAttachDebugStackParams> SetAttachDebugStackParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetAttachDebugStackParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetAttachDebugStackParams> result(new SetAttachDebugStackParams());
  errors->Push();
  errors->SetName("SetAttachDebugStackParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* enabled_value = dict.Find("enabled");
  if (enabled_value) {
    errors->SetName("enabled");
    result->enabled_ = internal::FromValue<bool>::Parse(*enabled_value, errors);
  } else {
    errors->AddError("required property missing: enabled");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetAttachDebugStackParams::Serialize() const {
  base::Value::Dict result;
  result.Set("enabled", internal::ToValue(enabled_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetAttachDebugStackParams> SetAttachDebugStackParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetAttachDebugStackParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetAttachDebugStackResult> SetAttachDebugStackResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetAttachDebugStackResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetAttachDebugStackResult> result(new SetAttachDebugStackResult());
  errors->Push();
  errors->SetName("SetAttachDebugStackResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetAttachDebugStackResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetAttachDebugStackResult> SetAttachDebugStackResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetAttachDebugStackResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetRequestInterceptionParams> SetRequestInterceptionParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetRequestInterceptionParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetRequestInterceptionParams> result(new SetRequestInterceptionParams());
  errors->Push();
  errors->SetName("SetRequestInterceptionParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* patterns_value = dict.Find("patterns");
  if (patterns_value) {
    errors->SetName("patterns");
    result->patterns_ = internal::FromValue<std::vector<std::unique_ptr<::headless::network::RequestPattern>>>::Parse(*patterns_value, errors);
  } else {
    errors->AddError("required property missing: patterns");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetRequestInterceptionParams::Serialize() const {
  base::Value::Dict result;
  result.Set("patterns", internal::ToValue(patterns_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetRequestInterceptionParams> SetRequestInterceptionParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetRequestInterceptionParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetRequestInterceptionResult> SetRequestInterceptionResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetRequestInterceptionResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetRequestInterceptionResult> result(new SetRequestInterceptionResult());
  errors->Push();
  errors->SetName("SetRequestInterceptionResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetRequestInterceptionResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetRequestInterceptionResult> SetRequestInterceptionResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetRequestInterceptionResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetUserAgentOverrideParams> SetUserAgentOverrideParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetUserAgentOverrideParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetUserAgentOverrideParams> result(new SetUserAgentOverrideParams());
  errors->Push();
  errors->SetName("SetUserAgentOverrideParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* user_agent_value = dict.Find("userAgent");
  if (user_agent_value) {
    errors->SetName("userAgent");
    result->user_agent_ = internal::FromValue<std::string>::Parse(*user_agent_value, errors);
  } else {
    errors->AddError("required property missing: userAgent");
  }
  const base::Value* accept_language_value = dict.Find("acceptLanguage");
  if (accept_language_value) {
    errors->SetName("acceptLanguage");
    result->accept_language_ = internal::FromValue<std::string>::Parse(*accept_language_value, errors);
  }
  const base::Value* platform_value = dict.Find("platform");
  if (platform_value) {
    errors->SetName("platform");
    result->platform_ = internal::FromValue<std::string>::Parse(*platform_value, errors);
  }
  const base::Value* user_agent_metadata_value = dict.Find("userAgentMetadata");
  if (user_agent_metadata_value) {
    errors->SetName("userAgentMetadata");
    result->user_agent_metadata_ = internal::FromValue<::headless::emulation::UserAgentMetadata>::Parse(*user_agent_metadata_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetUserAgentOverrideParams::Serialize() const {
  base::Value::Dict result;
  result.Set("userAgent", internal::ToValue(user_agent_));
  if (accept_language_)
    result.Set("acceptLanguage", internal::ToValue(accept_language_.value()));
  if (platform_)
    result.Set("platform", internal::ToValue(platform_.value()));
  if (user_agent_metadata_)
    result.Set("userAgentMetadata", internal::ToValue(*user_agent_metadata_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<SetUserAgentOverrideParams> SetUserAgentOverrideParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetUserAgentOverrideParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetUserAgentOverrideResult> SetUserAgentOverrideResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetUserAgentOverrideResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetUserAgentOverrideResult> result(new SetUserAgentOverrideResult());
  errors->Push();
  errors->SetName("SetUserAgentOverrideResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetUserAgentOverrideResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetUserAgentOverrideResult> SetUserAgentOverrideResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetUserAgentOverrideResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<StreamResourceContentParams> StreamResourceContentParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("StreamResourceContentParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<StreamResourceContentParams> result(new StreamResourceContentParams());
  errors->Push();
  errors->SetName("StreamResourceContentParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* request_id_value = dict.Find("requestId");
  if (request_id_value) {
    errors->SetName("requestId");
    result->request_id_ = internal::FromValue<std::string>::Parse(*request_id_value, errors);
  } else {
    errors->AddError("required property missing: requestId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value StreamResourceContentParams::Serialize() const {
  base::Value::Dict result;
  result.Set("requestId", internal::ToValue(request_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<StreamResourceContentParams> StreamResourceContentParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<StreamResourceContentParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<StreamResourceContentResult> StreamResourceContentResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("StreamResourceContentResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<StreamResourceContentResult> result(new StreamResourceContentResult());
  errors->Push();
  errors->SetName("StreamResourceContentResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* buffered_data_value = dict.Find("bufferedData");
  if (buffered_data_value) {
    errors->SetName("bufferedData");
    result->buffered_data_ = internal::FromValue<protocol::Binary>::Parse(*buffered_data_value, errors);
  } else {
    errors->AddError("required property missing: bufferedData");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value StreamResourceContentResult::Serialize() const {
  base::Value::Dict result;
  result.Set("bufferedData", internal::ToValue(buffered_data_));
  return base::Value(std::move(result));
}

std::unique_ptr<StreamResourceContentResult> StreamResourceContentResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<StreamResourceContentResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetSecurityIsolationStatusParams> GetSecurityIsolationStatusParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetSecurityIsolationStatusParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetSecurityIsolationStatusParams> result(new GetSecurityIsolationStatusParams());
  errors->Push();
  errors->SetName("GetSecurityIsolationStatusParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* frame_id_value = dict.Find("frameId");
  if (frame_id_value) {
    errors->SetName("frameId");
    result->frame_id_ = internal::FromValue<std::string>::Parse(*frame_id_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetSecurityIsolationStatusParams::Serialize() const {
  base::Value::Dict result;
  if (frame_id_)
    result.Set("frameId", internal::ToValue(frame_id_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<GetSecurityIsolationStatusParams> GetSecurityIsolationStatusParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetSecurityIsolationStatusParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetSecurityIsolationStatusResult> GetSecurityIsolationStatusResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetSecurityIsolationStatusResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetSecurityIsolationStatusResult> result(new GetSecurityIsolationStatusResult());
  errors->Push();
  errors->SetName("GetSecurityIsolationStatusResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* status_value = dict.Find("status");
  if (status_value) {
    errors->SetName("status");
    result->status_ = internal::FromValue<::headless::network::SecurityIsolationStatus>::Parse(*status_value, errors);
  } else {
    errors->AddError("required property missing: status");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetSecurityIsolationStatusResult::Serialize() const {
  base::Value::Dict result;
  result.Set("status", internal::ToValue(*status_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetSecurityIsolationStatusResult> GetSecurityIsolationStatusResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetSecurityIsolationStatusResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<EnableReportingApiParams> EnableReportingApiParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("EnableReportingApiParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<EnableReportingApiParams> result(new EnableReportingApiParams());
  errors->Push();
  errors->SetName("EnableReportingApiParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* enable_value = dict.Find("enable");
  if (enable_value) {
    errors->SetName("enable");
    result->enable_ = internal::FromValue<bool>::Parse(*enable_value, errors);
  } else {
    errors->AddError("required property missing: enable");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value EnableReportingApiParams::Serialize() const {
  base::Value::Dict result;
  result.Set("enable", internal::ToValue(enable_));
  return base::Value(std::move(result));
}

std::unique_ptr<EnableReportingApiParams> EnableReportingApiParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<EnableReportingApiParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<EnableReportingApiResult> EnableReportingApiResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("EnableReportingApiResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<EnableReportingApiResult> result(new EnableReportingApiResult());
  errors->Push();
  errors->SetName("EnableReportingApiResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value EnableReportingApiResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<EnableReportingApiResult> EnableReportingApiResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<EnableReportingApiResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<LoadNetworkResourceParams> LoadNetworkResourceParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("LoadNetworkResourceParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<LoadNetworkResourceParams> result(new LoadNetworkResourceParams());
  errors->Push();
  errors->SetName("LoadNetworkResourceParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* frame_id_value = dict.Find("frameId");
  if (frame_id_value) {
    errors->SetName("frameId");
    result->frame_id_ = internal::FromValue<std::string>::Parse(*frame_id_value, errors);
  }
  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    errors->SetName("url");
    result->url_ = internal::FromValue<std::string>::Parse(*url_value, errors);
  } else {
    errors->AddError("required property missing: url");
  }
  const base::Value* options_value = dict.Find("options");
  if (options_value) {
    errors->SetName("options");
    result->options_ = internal::FromValue<::headless::network::LoadNetworkResourceOptions>::Parse(*options_value, errors);
  } else {
    errors->AddError("required property missing: options");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value LoadNetworkResourceParams::Serialize() const {
  base::Value::Dict result;
  if (frame_id_)
    result.Set("frameId", internal::ToValue(frame_id_.value()));
  result.Set("url", internal::ToValue(url_));
  result.Set("options", internal::ToValue(*options_));
  return base::Value(std::move(result));
}

std::unique_ptr<LoadNetworkResourceParams> LoadNetworkResourceParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<LoadNetworkResourceParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<LoadNetworkResourceResult> LoadNetworkResourceResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("LoadNetworkResourceResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<LoadNetworkResourceResult> result(new LoadNetworkResourceResult());
  errors->Push();
  errors->SetName("LoadNetworkResourceResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* resource_value = dict.Find("resource");
  if (resource_value) {
    errors->SetName("resource");
    result->resource_ = internal::FromValue<::headless::network::LoadNetworkResourcePageResult>::Parse(*resource_value, errors);
  } else {
    errors->AddError("required property missing: resource");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value LoadNetworkResourceResult::Serialize() const {
  base::Value::Dict result;
  result.Set("resource", internal::ToValue(*resource_));
  return base::Value(std::move(result));
}

std::unique_ptr<LoadNetworkResourceResult> LoadNetworkResourceResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<LoadNetworkResourceResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<DataReceivedParams> DataReceivedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("DataReceivedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<DataReceivedParams> result(new DataReceivedParams());
  errors->Push();
  errors->SetName("DataReceivedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* request_id_value = dict.Find("requestId");
  if (request_id_value) {
    errors->SetName("requestId");
    result->request_id_ = internal::FromValue<std::string>::Parse(*request_id_value, errors);
  } else {
    errors->AddError("required property missing: requestId");
  }
  const base::Value* timestamp_value = dict.Find("timestamp");
  if (timestamp_value) {
    errors->SetName("timestamp");
    result->timestamp_ = internal::FromValue<double>::Parse(*timestamp_value, errors);
  } else {
    errors->AddError("required property missing: timestamp");
  }
  const base::Value* data_length_value = dict.Find("dataLength");
  if (data_length_value) {
    errors->SetName("dataLength");
    result->data_length_ = internal::FromValue<int>::Parse(*data_length_value, errors);
  } else {
    errors->AddError("required property missing: dataLength");
  }
  const base::Value* encoded_data_length_value = dict.Find("encodedDataLength");
  if (encoded_data_length_value) {
    errors->SetName("encodedDataLength");
    result->encoded_data_length_ = internal::FromValue<int>::Parse(*encoded_data_length_value, errors);
  } else {
    errors->AddError("required property missing: encodedDataLength");
  }
  const base::Value* data_value = dict.Find("data");
  if (data_value) {
    errors->SetName("data");
    result->data_ = internal::FromValue<protocol::Binary>::Parse(*data_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value DataReceivedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("requestId", internal::ToValue(request_id_));
  result.Set("timestamp", internal::ToValue(timestamp_));
  result.Set("dataLength", internal::ToValue(data_length_));
  result.Set("encodedDataLength", internal::ToValue(encoded_data_length_));
  if (data_)
    result.Set("data", internal::ToValue(data_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<DataReceivedParams> DataReceivedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<DataReceivedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<EventSourceMessageReceivedParams> EventSourceMessageReceivedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("EventSourceMessageReceivedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<EventSourceMessageReceivedParams> result(new EventSourceMessageReceivedParams());
  errors->Push();
  errors->SetName("EventSourceMessageReceivedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* request_id_value = dict.Find("requestId");
  if (request_id_value) {
    errors->SetName("requestId");
    result->request_id_ = internal::FromValue<std::string>::Parse(*request_id_value, errors);
  } else {
    errors->AddError("required property missing: requestId");
  }
  const base::Value* timestamp_value = dict.Find("timestamp");
  if (timestamp_value) {
    errors->SetName("timestamp");
    result->timestamp_ = internal::FromValue<double>::Parse(*timestamp_value, errors);
  } else {
    errors->AddError("required property missing: timestamp");
  }
  const base::Value* event_name_value = dict.Find("eventName");
  if (event_name_value) {
    errors->SetName("eventName");
    result->event_name_ = internal::FromValue<std::string>::Parse(*event_name_value, errors);
  } else {
    errors->AddError("required property missing: eventName");
  }
  const base::Value* event_id_value = dict.Find("eventId");
  if (event_id_value) {
    errors->SetName("eventId");
    result->event_id_ = internal::FromValue<std::string>::Parse(*event_id_value, errors);
  } else {
    errors->AddError("required property missing: eventId");
  }
  const base::Value* data_value = dict.Find("data");
  if (data_value) {
    errors->SetName("data");
    result->data_ = internal::FromValue<std::string>::Parse(*data_value, errors);
  } else {
    errors->AddError("required property missing: data");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value EventSourceMessageReceivedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("requestId", internal::ToValue(request_id_));
  result.Set("timestamp", internal::ToValue(timestamp_));
  result.Set("eventName", internal::ToValue(event_name_));
  result.Set("eventId", internal::ToValue(event_id_));
  result.Set("data", internal::ToValue(data_));
  return base::Value(std::move(result));
}

std::unique_ptr<EventSourceMessageReceivedParams> EventSourceMessageReceivedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<EventSourceMessageReceivedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<LoadingFailedParams> LoadingFailedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("LoadingFailedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<LoadingFailedParams> result(new LoadingFailedParams());
  errors->Push();
  errors->SetName("LoadingFailedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* request_id_value = dict.Find("requestId");
  if (request_id_value) {
    errors->SetName("requestId");
    result->request_id_ = internal::FromValue<std::string>::Parse(*request_id_value, errors);
  } else {
    errors->AddError("required property missing: requestId");
  }
  const base::Value* timestamp_value = dict.Find("timestamp");
  if (timestamp_value) {
    errors->SetName("timestamp");
    result->timestamp_ = internal::FromValue<double>::Parse(*timestamp_value, errors);
  } else {
    errors->AddError("required property missing: timestamp");
  }
  const base::Value* type_value = dict.Find("type");
  if (type_value) {
    errors->SetName("type");
    result->type_ = internal::FromValue<::headless::network::ResourceType>::Parse(*type_value, errors);
  } else {
    errors->AddError("required property missing: type");
  }
  const base::Value* error_text_value = dict.Find("errorText");
  if (error_text_value) {
    errors->SetName("errorText");
    result->error_text_ = internal::FromValue<std::string>::Parse(*error_text_value, errors);
  } else {
    errors->AddError("required property missing: errorText");
  }
  const base::Value* canceled_value = dict.Find("canceled");
  if (canceled_value) {
    errors->SetName("canceled");
    result->canceled_ = internal::FromValue<bool>::Parse(*canceled_value, errors);
  }
  const base::Value* blocked_reason_value = dict.Find("blockedReason");
  if (blocked_reason_value) {
    errors->SetName("blockedReason");
    result->blocked_reason_ = internal::FromValue<::headless::network::BlockedReason>::Parse(*blocked_reason_value, errors);
  }
  const base::Value* cors_error_status_value = dict.Find("corsErrorStatus");
  if (cors_error_status_value) {
    errors->SetName("corsErrorStatus");
    result->cors_error_status_ = internal::FromValue<::headless::network::CorsErrorStatus>::Parse(*cors_error_status_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value LoadingFailedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("requestId", internal::ToValue(request_id_));
  result.Set("timestamp", internal::ToValue(timestamp_));
  result.Set("type", internal::ToValue(type_));
  result.Set("errorText", internal::ToValue(error_text_));
  if (canceled_)
    result.Set("canceled", internal::ToValue(canceled_.value()));
  if (blocked_reason_)
    result.Set("blockedReason", internal::ToValue(blocked_reason_.value()));
  if (cors_error_status_)
    result.Set("corsErrorStatus", internal::ToValue(*cors_error_status_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<LoadingFailedParams> LoadingFailedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<LoadingFailedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<LoadingFinishedParams> LoadingFinishedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("LoadingFinishedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<LoadingFinishedParams> result(new LoadingFinishedParams());
  errors->Push();
  errors->SetName("LoadingFinishedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* request_id_value = dict.Find("requestId");
  if (request_id_value) {
    errors->SetName("requestId");
    result->request_id_ = internal::FromValue<std::string>::Parse(*request_id_value, errors);
  } else {
    errors->AddError("required property missing: requestId");
  }
  const base::Value* timestamp_value = dict.Find("timestamp");
  if (timestamp_value) {
    errors->SetName("timestamp");
    result->timestamp_ = internal::FromValue<double>::Parse(*timestamp_value, errors);
  } else {
    errors->AddError("required property missing: timestamp");
  }
  const base::Value* encoded_data_length_value = dict.Find("encodedDataLength");
  if (encoded_data_length_value) {
    errors->SetName("encodedDataLength");
    result->encoded_data_length_ = internal::FromValue<double>::Parse(*encoded_data_length_value, errors);
  } else {
    errors->AddError("required property missing: encodedDataLength");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value LoadingFinishedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("requestId", internal::ToValue(request_id_));
  result.Set("timestamp", internal::ToValue(timestamp_));
  result.Set("encodedDataLength", internal::ToValue(encoded_data_length_));
  return base::Value(std::move(result));
}

std::unique_ptr<LoadingFinishedParams> LoadingFinishedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<LoadingFinishedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<RequestInterceptedParams> RequestInterceptedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("RequestInterceptedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<RequestInterceptedParams> result(new RequestInterceptedParams());
  errors->Push();
  errors->SetName("RequestInterceptedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* interception_id_value = dict.Find("interceptionId");
  if (interception_id_value) {
    errors->SetName("interceptionId");
    result->interception_id_ = internal::FromValue<std::string>::Parse(*interception_id_value, errors);
  } else {
    errors->AddError("required property missing: interceptionId");
  }
  const base::Value* request_value = dict.Find("request");
  if (request_value) {
    errors->SetName("request");
    result->request_ = internal::FromValue<::headless::network::Request>::Parse(*request_value, errors);
  } else {
    errors->AddError("required property missing: request");
  }
  const base::Value* frame_id_value = dict.Find("frameId");
  if (frame_id_value) {
    errors->SetName("frameId");
    result->frame_id_ = internal::FromValue<std::string>::Parse(*frame_id_value, errors);
  } else {
    errors->AddError("required property missing: frameId");
  }
  const base::Value* resource_type_value = dict.Find("resourceType");
  if (resource_type_value) {
    errors->SetName("resourceType");
    result->resource_type_ = internal::FromValue<::headless::network::ResourceType>::Parse(*resource_type_value, errors);
  } else {
    errors->AddError("required property missing: resourceType");
  }
  const base::Value* is_navigation_request_value = dict.Find("isNavigationRequest");
  if (is_navigation_request_value) {
    errors->SetName("isNavigationRequest");
    result->is_navigation_request_ = internal::FromValue<bool>::Parse(*is_navigation_request_value, errors);
  } else {
    errors->AddError("required property missing: isNavigationRequest");
  }
  const base::Value* is_download_value = dict.Find("isDownload");
  if (is_download_value) {
    errors->SetName("isDownload");
    result->is_download_ = internal::FromValue<bool>::Parse(*is_download_value, errors);
  }
  const base::Value* redirect_url_value = dict.Find("redirectUrl");
  if (redirect_url_value) {
    errors->SetName("redirectUrl");
    result->redirect_url_ = internal::FromValue<std::string>::Parse(*redirect_url_value, errors);
  }
  const base::Value* auth_challenge_value = dict.Find("authChallenge");
  if (auth_challenge_value) {
    errors->SetName("authChallenge");
    result->auth_challenge_ = internal::FromValue<::headless::network::AuthChallenge>::Parse(*auth_challenge_value, errors);
  }
  const base::Value* response_error_reason_value = dict.Find("responseErrorReason");
  if (response_error_reason_value) {
    errors->SetName("responseErrorReason");
    result->response_error_reason_ = internal::FromValue<::headless::network::ErrorReason>::Parse(*response_error_reason_value, errors);
  }
  const base::Value* response_status_code_value = dict.Find("responseStatusCode");
  if (response_status_code_value) {
    errors->SetName("responseStatusCode");
    result->response_status_code_ = internal::FromValue<int>::Parse(*response_status_code_value, errors);
  }
  const base::Value* response_headers_value = dict.Find("responseHeaders");
  if (response_headers_value) {
    errors->SetName("responseHeaders");
    result->response_headers_ = internal::FromValue<base::Value::Dict>::Parse(*response_headers_value, errors);
  }
  const base::Value* request_id_value = dict.Find("requestId");
  if (request_id_value) {
    errors->SetName("requestId");
    result->request_id_ = internal::FromValue<std::string>::Parse(*request_id_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value RequestInterceptedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("interceptionId", internal::ToValue(interception_id_));
  result.Set("request", internal::ToValue(*request_));
  result.Set("frameId", internal::ToValue(frame_id_));
  result.Set("resourceType", internal::ToValue(resource_type_));
  result.Set("isNavigationRequest", internal::ToValue(is_navigation_request_));
  if (is_download_)
    result.Set("isDownload", internal::ToValue(is_download_.value()));
  if (redirect_url_)
    result.Set("redirectUrl", internal::ToValue(redirect_url_.value()));
  if (auth_challenge_)
    result.Set("authChallenge", internal::ToValue(*auth_challenge_.value()));
  if (response_error_reason_)
    result.Set("responseErrorReason", internal::ToValue(response_error_reason_.value()));
  if (response_status_code_)
    result.Set("responseStatusCode", internal::ToValue(response_status_code_.value()));
  if (response_headers_)
    result.Set("responseHeaders", internal::ToValue(*response_headers_.value()));
  if (request_id_)
    result.Set("requestId", internal::ToValue(request_id_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<RequestInterceptedParams> RequestInterceptedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<RequestInterceptedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<RequestServedFromCacheParams> RequestServedFromCacheParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("RequestServedFromCacheParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<RequestServedFromCacheParams> result(new RequestServedFromCacheParams());
  errors->Push();
  errors->SetName("RequestServedFromCacheParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* request_id_value = dict.Find("requestId");
  if (request_id_value) {
    errors->SetName("requestId");
    result->request_id_ = internal::FromValue<std::string>::Parse(*request_id_value, errors);
  } else {
    errors->AddError("required property missing: requestId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value RequestServedFromCacheParams::Serialize() const {
  base::Value::Dict result;
  result.Set("requestId", internal::ToValue(request_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<RequestServedFromCacheParams> RequestServedFromCacheParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<RequestServedFromCacheParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<RequestWillBeSentParams> RequestWillBeSentParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("RequestWillBeSentParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<RequestWillBeSentParams> result(new RequestWillBeSentParams());
  errors->Push();
  errors->SetName("RequestWillBeSentParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* request_id_value = dict.Find("requestId");
  if (request_id_value) {
    errors->SetName("requestId");
    result->request_id_ = internal::FromValue<std::string>::Parse(*request_id_value, errors);
  } else {
    errors->AddError("required property missing: requestId");
  }
  const base::Value* loader_id_value = dict.Find("loaderId");
  if (loader_id_value) {
    errors->SetName("loaderId");
    result->loader_id_ = internal::FromValue<std::string>::Parse(*loader_id_value, errors);
  } else {
    errors->AddError("required property missing: loaderId");
  }
  const base::Value* documenturl_value = dict.Find("documentURL");
  if (documenturl_value) {
    errors->SetName("documentURL");
    result->documenturl_ = internal::FromValue<std::string>::Parse(*documenturl_value, errors);
  } else {
    errors->AddError("required property missing: documentURL");
  }
  const base::Value* request_value = dict.Find("request");
  if (request_value) {
    errors->SetName("request");
    result->request_ = internal::FromValue<::headless::network::Request>::Parse(*request_value, errors);
  } else {
    errors->AddError("required property missing: request");
  }
  const base::Value* timestamp_value = dict.Find("timestamp");
  if (timestamp_value) {
    errors->SetName("timestamp");
    result->timestamp_ = internal::FromValue<double>::Parse(*timestamp_value, errors);
  } else {
    errors->AddError("required property missing: timestamp");
  }
  const base::Value* wall_time_value = dict.Find("wallTime");
  if (wall_time_value) {
    errors->SetName("wallTime");
    result->wall_time_ = internal::FromValue<double>::Parse(*wall_time_value, errors);
  } else {
    errors->AddError("required property missing: wallTime");
  }
  const base::Value* initiator_value = dict.Find("initiator");
  if (initiator_value) {
    errors->SetName("initiator");
    result->initiator_ = internal::FromValue<::headless::network::Initiator>::Parse(*initiator_value, errors);
  } else {
    errors->AddError("required property missing: initiator");
  }
  const base::Value* redirect_has_extra_info_value = dict.Find("redirectHasExtraInfo");
  if (redirect_has_extra_info_value) {
    errors->SetName("redirectHasExtraInfo");
    result->redirect_has_extra_info_ = internal::FromValue<bool>::Parse(*redirect_has_extra_info_value, errors);
  } else {
    errors->AddError("required property missing: redirectHasExtraInfo");
  }
  const base::Value* redirect_response_value = dict.Find("redirectResponse");
  if (redirect_response_value) {
    errors->SetName("redirectResponse");
    result->redirect_response_ = internal::FromValue<::headless::network::Response>::Parse(*redirect_response_value, errors);
  }
  const base::Value* type_value = dict.Find("type");
  if (type_value) {
    errors->SetName("type");
    result->type_ = internal::FromValue<::headless::network::ResourceType>::Parse(*type_value, errors);
  }
  const base::Value* frame_id_value = dict.Find("frameId");
  if (frame_id_value) {
    errors->SetName("frameId");
    result->frame_id_ = internal::FromValue<std::string>::Parse(*frame_id_value, errors);
  }
  const base::Value* has_user_gesture_value = dict.Find("hasUserGesture");
  if (has_user_gesture_value) {
    errors->SetName("hasUserGesture");
    result->has_user_gesture_ = internal::FromValue<bool>::Parse(*has_user_gesture_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value RequestWillBeSentParams::Serialize() const {
  base::Value::Dict result;
  result.Set("requestId", internal::ToValue(request_id_));
  result.Set("loaderId", internal::ToValue(loader_id_));
  result.Set("documentURL", internal::ToValue(documenturl_));
  result.Set("request", internal::ToValue(*request_));
  result.Set("timestamp", internal::ToValue(timestamp_));
  result.Set("wallTime", internal::ToValue(wall_time_));
  result.Set("initiator", internal::ToValue(*initiator_));
  result.Set("redirectHasExtraInfo", internal::ToValue(redirect_has_extra_info_));
  if (redirect_response_)
    result.Set("redirectResponse", internal::ToValue(*redirect_response_.value()));
  if (type_)
    result.Set("type", internal::ToValue(type_.value()));
  if (frame_id_)
    result.Set("frameId", internal::ToValue(frame_id_.value()));
  if (has_user_gesture_)
    result.Set("hasUserGesture", internal::ToValue(has_user_gesture_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<RequestWillBeSentParams> RequestWillBeSentParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<RequestWillBeSentParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ResourceChangedPriorityParams> ResourceChangedPriorityParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ResourceChangedPriorityParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ResourceChangedPriorityParams> result(new ResourceChangedPriorityParams());
  errors->Push();
  errors->SetName("ResourceChangedPriorityParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* request_id_value = dict.Find("requestId");
  if (request_id_value) {
    errors->SetName("requestId");
    result->request_id_ = internal::FromValue<std::string>::Parse(*request_id_value, errors);
  } else {
    errors->AddError("required property missing: requestId");
  }
  const base::Value* new_priority_value = dict.Find("newPriority");
  if (new_priority_value) {
    errors->SetName("newPriority");
    result->new_priority_ = internal::FromValue<::headless::network::ResourcePriority>::Parse(*new_priority_value, errors);
  } else {
    errors->AddError("required property missing: newPriority");
  }
  const base::Value* timestamp_value = dict.Find("timestamp");
  if (timestamp_value) {
    errors->SetName("timestamp");
    result->timestamp_ = internal::FromValue<double>::Parse(*timestamp_value, errors);
  } else {
    errors->AddError("required property missing: timestamp");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ResourceChangedPriorityParams::Serialize() const {
  base::Value::Dict result;
  result.Set("requestId", internal::ToValue(request_id_));
  result.Set("newPriority", internal::ToValue(new_priority_));
  result.Set("timestamp", internal::ToValue(timestamp_));
  return base::Value(std::move(result));
}

std::unique_ptr<ResourceChangedPriorityParams> ResourceChangedPriorityParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ResourceChangedPriorityParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SignedExchangeReceivedParams> SignedExchangeReceivedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SignedExchangeReceivedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SignedExchangeReceivedParams> result(new SignedExchangeReceivedParams());
  errors->Push();
  errors->SetName("SignedExchangeReceivedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* request_id_value = dict.Find("requestId");
  if (request_id_value) {
    errors->SetName("requestId");
    result->request_id_ = internal::FromValue<std::string>::Parse(*request_id_value, errors);
  } else {
    errors->AddError("required property missing: requestId");
  }
  const base::Value* info_value = dict.Find("info");
  if (info_value) {
    errors->SetName("info");
    result->info_ = internal::FromValue<::headless::network::SignedExchangeInfo>::Parse(*info_value, errors);
  } else {
    errors->AddError("required property missing: info");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SignedExchangeReceivedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("requestId", internal::ToValue(request_id_));
  result.Set("info", internal::ToValue(*info_));
  return base::Value(std::move(result));
}

std::unique_ptr<SignedExchangeReceivedParams> SignedExchangeReceivedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SignedExchangeReceivedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ResponseReceivedParams> ResponseReceivedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ResponseReceivedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ResponseReceivedParams> result(new ResponseReceivedParams());
  errors->Push();
  errors->SetName("ResponseReceivedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* request_id_value = dict.Find("requestId");
  if (request_id_value) {
    errors->SetName("requestId");
    result->request_id_ = internal::FromValue<std::string>::Parse(*request_id_value, errors);
  } else {
    errors->AddError("required property missing: requestId");
  }
  const base::Value* loader_id_value = dict.Find("loaderId");
  if (loader_id_value) {
    errors->SetName("loaderId");
    result->loader_id_ = internal::FromValue<std::string>::Parse(*loader_id_value, errors);
  } else {
    errors->AddError("required property missing: loaderId");
  }
  const base::Value* timestamp_value = dict.Find("timestamp");
  if (timestamp_value) {
    errors->SetName("timestamp");
    result->timestamp_ = internal::FromValue<double>::Parse(*timestamp_value, errors);
  } else {
    errors->AddError("required property missing: timestamp");
  }
  const base::Value* type_value = dict.Find("type");
  if (type_value) {
    errors->SetName("type");
    result->type_ = internal::FromValue<::headless::network::ResourceType>::Parse(*type_value, errors);
  } else {
    errors->AddError("required property missing: type");
  }
  const base::Value* response_value = dict.Find("response");
  if (response_value) {
    errors->SetName("response");
    result->response_ = internal::FromValue<::headless::network::Response>::Parse(*response_value, errors);
  } else {
    errors->AddError("required property missing: response");
  }
  const base::Value* has_extra_info_value = dict.Find("hasExtraInfo");
  if (has_extra_info_value) {
    errors->SetName("hasExtraInfo");
    result->has_extra_info_ = internal::FromValue<bool>::Parse(*has_extra_info_value, errors);
  } else {
    errors->AddError("required property missing: hasExtraInfo");
  }
  const base::Value* frame_id_value = dict.Find("frameId");
  if (frame_id_value) {
    errors->SetName("frameId");
    result->frame_id_ = internal::FromValue<std::string>::Parse(*frame_id_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ResponseReceivedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("requestId", internal::ToValue(request_id_));
  result.Set("loaderId", internal::ToValue(loader_id_));
  result.Set("timestamp", internal::ToValue(timestamp_));
  result.Set("type", internal::ToValue(type_));
  result.Set("response", internal::ToValue(*response_));
  result.Set("hasExtraInfo", internal::ToValue(has_extra_info_));
  if (frame_id_)
    result.Set("frameId", internal::ToValue(frame_id_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<ResponseReceivedParams> ResponseReceivedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ResponseReceivedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<WebSocketClosedParams> WebSocketClosedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("WebSocketClosedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<WebSocketClosedParams> result(new WebSocketClosedParams());
  errors->Push();
  errors->SetName("WebSocketClosedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* request_id_value = dict.Find("requestId");
  if (request_id_value) {
    errors->SetName("requestId");
    result->request_id_ = internal::FromValue<std::string>::Parse(*request_id_value, errors);
  } else {
    errors->AddError("required property missing: requestId");
  }
  const base::Value* timestamp_value = dict.Find("timestamp");
  if (timestamp_value) {
    errors->SetName("timestamp");
    result->timestamp_ = internal::FromValue<double>::Parse(*timestamp_value, errors);
  } else {
    errors->AddError("required property missing: timestamp");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value WebSocketClosedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("requestId", internal::ToValue(request_id_));
  result.Set("timestamp", internal::ToValue(timestamp_));
  return base::Value(std::move(result));
}

std::unique_ptr<WebSocketClosedParams> WebSocketClosedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<WebSocketClosedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<WebSocketCreatedParams> WebSocketCreatedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("WebSocketCreatedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<WebSocketCreatedParams> result(new WebSocketCreatedParams());
  errors->Push();
  errors->SetName("WebSocketCreatedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* request_id_value = dict.Find("requestId");
  if (request_id_value) {
    errors->SetName("requestId");
    result->request_id_ = internal::FromValue<std::string>::Parse(*request_id_value, errors);
  } else {
    errors->AddError("required property missing: requestId");
  }
  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    errors->SetName("url");
    result->url_ = internal::FromValue<std::string>::Parse(*url_value, errors);
  } else {
    errors->AddError("required property missing: url");
  }
  const base::Value* initiator_value = dict.Find("initiator");
  if (initiator_value) {
    errors->SetName("initiator");
    result->initiator_ = internal::FromValue<::headless::network::Initiator>::Parse(*initiator_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value WebSocketCreatedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("requestId", internal::ToValue(request_id_));
  result.Set("url", internal::ToValue(url_));
  if (initiator_)
    result.Set("initiator", internal::ToValue(*initiator_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<WebSocketCreatedParams> WebSocketCreatedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<WebSocketCreatedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<WebSocketFrameErrorParams> WebSocketFrameErrorParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("WebSocketFrameErrorParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<WebSocketFrameErrorParams> result(new WebSocketFrameErrorParams());
  errors->Push();
  errors->SetName("WebSocketFrameErrorParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* request_id_value = dict.Find("requestId");
  if (request_id_value) {
    errors->SetName("requestId");
    result->request_id_ = internal::FromValue<std::string>::Parse(*request_id_value, errors);
  } else {
    errors->AddError("required property missing: requestId");
  }
  const base::Value* timestamp_value = dict.Find("timestamp");
  if (timestamp_value) {
    errors->SetName("timestamp");
    result->timestamp_ = internal::FromValue<double>::Parse(*timestamp_value, errors);
  } else {
    errors->AddError("required property missing: timestamp");
  }
  const base::Value* error_message_value = dict.Find("errorMessage");
  if (error_message_value) {
    errors->SetName("errorMessage");
    result->error_message_ = internal::FromValue<std::string>::Parse(*error_message_value, errors);
  } else {
    errors->AddError("required property missing: errorMessage");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value WebSocketFrameErrorParams::Serialize() const {
  base::Value::Dict result;
  result.Set("requestId", internal::ToValue(request_id_));
  result.Set("timestamp", internal::ToValue(timestamp_));
  result.Set("errorMessage", internal::ToValue(error_message_));
  return base::Value(std::move(result));
}

std::unique_ptr<WebSocketFrameErrorParams> WebSocketFrameErrorParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<WebSocketFrameErrorParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<WebSocketFrameReceivedParams> WebSocketFrameReceivedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("WebSocketFrameReceivedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<WebSocketFrameReceivedParams> result(new WebSocketFrameReceivedParams());
  errors->Push();
  errors->SetName("WebSocketFrameReceivedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* request_id_value = dict.Find("requestId");
  if (request_id_value) {
    errors->SetName("requestId");
    result->request_id_ = internal::FromValue<std::string>::Parse(*request_id_value, errors);
  } else {
    errors->AddError("required property missing: requestId");
  }
  const base::Value* timestamp_value = dict.Find("timestamp");
  if (timestamp_value) {
    errors->SetName("timestamp");
    result->timestamp_ = internal::FromValue<double>::Parse(*timestamp_value, errors);
  } else {
    errors->AddError("required property missing: timestamp");
  }
  const base::Value* response_value = dict.Find("response");
  if (response_value) {
    errors->SetName("response");
    result->response_ = internal::FromValue<::headless::network::WebSocketFrame>::Parse(*response_value, errors);
  } else {
    errors->AddError("required property missing: response");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value WebSocketFrameReceivedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("requestId", internal::ToValue(request_id_));
  result.Set("timestamp", internal::ToValue(timestamp_));
  result.Set("response", internal::ToValue(*response_));
  return base::Value(std::move(result));
}

std::unique_ptr<WebSocketFrameReceivedParams> WebSocketFrameReceivedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<WebSocketFrameReceivedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<WebSocketFrameSentParams> WebSocketFrameSentParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("WebSocketFrameSentParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<WebSocketFrameSentParams> result(new WebSocketFrameSentParams());
  errors->Push();
  errors->SetName("WebSocketFrameSentParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* request_id_value = dict.Find("requestId");
  if (request_id_value) {
    errors->SetName("requestId");
    result->request_id_ = internal::FromValue<std::string>::Parse(*request_id_value, errors);
  } else {
    errors->AddError("required property missing: requestId");
  }
  const base::Value* timestamp_value = dict.Find("timestamp");
  if (timestamp_value) {
    errors->SetName("timestamp");
    result->timestamp_ = internal::FromValue<double>::Parse(*timestamp_value, errors);
  } else {
    errors->AddError("required property missing: timestamp");
  }
  const base::Value* response_value = dict.Find("response");
  if (response_value) {
    errors->SetName("response");
    result->response_ = internal::FromValue<::headless::network::WebSocketFrame>::Parse(*response_value, errors);
  } else {
    errors->AddError("required property missing: response");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value WebSocketFrameSentParams::Serialize() const {
  base::Value::Dict result;
  result.Set("requestId", internal::ToValue(request_id_));
  result.Set("timestamp", internal::ToValue(timestamp_));
  result.Set("response", internal::ToValue(*response_));
  return base::Value(std::move(result));
}

std::unique_ptr<WebSocketFrameSentParams> WebSocketFrameSentParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<WebSocketFrameSentParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<WebSocketHandshakeResponseReceivedParams> WebSocketHandshakeResponseReceivedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("WebSocketHandshakeResponseReceivedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<WebSocketHandshakeResponseReceivedParams> result(new WebSocketHandshakeResponseReceivedParams());
  errors->Push();
  errors->SetName("WebSocketHandshakeResponseReceivedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* request_id_value = dict.Find("requestId");
  if (request_id_value) {
    errors->SetName("requestId");
    result->request_id_ = internal::FromValue<std::string>::Parse(*request_id_value, errors);
  } else {
    errors->AddError("required property missing: requestId");
  }
  const base::Value* timestamp_value = dict.Find("timestamp");
  if (timestamp_value) {
    errors->SetName("timestamp");
    result->timestamp_ = internal::FromValue<double>::Parse(*timestamp_value, errors);
  } else {
    errors->AddError("required property missing: timestamp");
  }
  const base::Value* response_value = dict.Find("response");
  if (response_value) {
    errors->SetName("response");
    result->response_ = internal::FromValue<::headless::network::WebSocketResponse>::Parse(*response_value, errors);
  } else {
    errors->AddError("required property missing: response");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value WebSocketHandshakeResponseReceivedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("requestId", internal::ToValue(request_id_));
  result.Set("timestamp", internal::ToValue(timestamp_));
  result.Set("response", internal::ToValue(*response_));
  return base::Value(std::move(result));
}

std::unique_ptr<WebSocketHandshakeResponseReceivedParams> WebSocketHandshakeResponseReceivedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<WebSocketHandshakeResponseReceivedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<WebSocketWillSendHandshakeRequestParams> WebSocketWillSendHandshakeRequestParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("WebSocketWillSendHandshakeRequestParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<WebSocketWillSendHandshakeRequestParams> result(new WebSocketWillSendHandshakeRequestParams());
  errors->Push();
  errors->SetName("WebSocketWillSendHandshakeRequestParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* request_id_value = dict.Find("requestId");
  if (request_id_value) {
    errors->SetName("requestId");
    result->request_id_ = internal::FromValue<std::string>::Parse(*request_id_value, errors);
  } else {
    errors->AddError("required property missing: requestId");
  }
  const base::Value* timestamp_value = dict.Find("timestamp");
  if (timestamp_value) {
    errors->SetName("timestamp");
    result->timestamp_ = internal::FromValue<double>::Parse(*timestamp_value, errors);
  } else {
    errors->AddError("required property missing: timestamp");
  }
  const base::Value* wall_time_value = dict.Find("wallTime");
  if (wall_time_value) {
    errors->SetName("wallTime");
    result->wall_time_ = internal::FromValue<double>::Parse(*wall_time_value, errors);
  } else {
    errors->AddError("required property missing: wallTime");
  }
  const base::Value* request_value = dict.Find("request");
  if (request_value) {
    errors->SetName("request");
    result->request_ = internal::FromValue<::headless::network::WebSocketRequest>::Parse(*request_value, errors);
  } else {
    errors->AddError("required property missing: request");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value WebSocketWillSendHandshakeRequestParams::Serialize() const {
  base::Value::Dict result;
  result.Set("requestId", internal::ToValue(request_id_));
  result.Set("timestamp", internal::ToValue(timestamp_));
  result.Set("wallTime", internal::ToValue(wall_time_));
  result.Set("request", internal::ToValue(*request_));
  return base::Value(std::move(result));
}

std::unique_ptr<WebSocketWillSendHandshakeRequestParams> WebSocketWillSendHandshakeRequestParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<WebSocketWillSendHandshakeRequestParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<WebTransportCreatedParams> WebTransportCreatedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("WebTransportCreatedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<WebTransportCreatedParams> result(new WebTransportCreatedParams());
  errors->Push();
  errors->SetName("WebTransportCreatedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* transport_id_value = dict.Find("transportId");
  if (transport_id_value) {
    errors->SetName("transportId");
    result->transport_id_ = internal::FromValue<std::string>::Parse(*transport_id_value, errors);
  } else {
    errors->AddError("required property missing: transportId");
  }
  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    errors->SetName("url");
    result->url_ = internal::FromValue<std::string>::Parse(*url_value, errors);
  } else {
    errors->AddError("required property missing: url");
  }
  const base::Value* timestamp_value = dict.Find("timestamp");
  if (timestamp_value) {
    errors->SetName("timestamp");
    result->timestamp_ = internal::FromValue<double>::Parse(*timestamp_value, errors);
  } else {
    errors->AddError("required property missing: timestamp");
  }
  const base::Value* initiator_value = dict.Find("initiator");
  if (initiator_value) {
    errors->SetName("initiator");
    result->initiator_ = internal::FromValue<::headless::network::Initiator>::Parse(*initiator_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value WebTransportCreatedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("transportId", internal::ToValue(transport_id_));
  result.Set("url", internal::ToValue(url_));
  result.Set("timestamp", internal::ToValue(timestamp_));
  if (initiator_)
    result.Set("initiator", internal::ToValue(*initiator_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<WebTransportCreatedParams> WebTransportCreatedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<WebTransportCreatedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<WebTransportConnectionEstablishedParams> WebTransportConnectionEstablishedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("WebTransportConnectionEstablishedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<WebTransportConnectionEstablishedParams> result(new WebTransportConnectionEstablishedParams());
  errors->Push();
  errors->SetName("WebTransportConnectionEstablishedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* transport_id_value = dict.Find("transportId");
  if (transport_id_value) {
    errors->SetName("transportId");
    result->transport_id_ = internal::FromValue<std::string>::Parse(*transport_id_value, errors);
  } else {
    errors->AddError("required property missing: transportId");
  }
  const base::Value* timestamp_value = dict.Find("timestamp");
  if (timestamp_value) {
    errors->SetName("timestamp");
    result->timestamp_ = internal::FromValue<double>::Parse(*timestamp_value, errors);
  } else {
    errors->AddError("required property missing: timestamp");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value WebTransportConnectionEstablishedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("transportId", internal::ToValue(transport_id_));
  result.Set("timestamp", internal::ToValue(timestamp_));
  return base::Value(std::move(result));
}

std::unique_ptr<WebTransportConnectionEstablishedParams> WebTransportConnectionEstablishedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<WebTransportConnectionEstablishedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<WebTransportClosedParams> WebTransportClosedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("WebTransportClosedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<WebTransportClosedParams> result(new WebTransportClosedParams());
  errors->Push();
  errors->SetName("WebTransportClosedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* transport_id_value = dict.Find("transportId");
  if (transport_id_value) {
    errors->SetName("transportId");
    result->transport_id_ = internal::FromValue<std::string>::Parse(*transport_id_value, errors);
  } else {
    errors->AddError("required property missing: transportId");
  }
  const base::Value* timestamp_value = dict.Find("timestamp");
  if (timestamp_value) {
    errors->SetName("timestamp");
    result->timestamp_ = internal::FromValue<double>::Parse(*timestamp_value, errors);
  } else {
    errors->AddError("required property missing: timestamp");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value WebTransportClosedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("transportId", internal::ToValue(transport_id_));
  result.Set("timestamp", internal::ToValue(timestamp_));
  return base::Value(std::move(result));
}

std::unique_ptr<WebTransportClosedParams> WebTransportClosedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<WebTransportClosedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<RequestWillBeSentExtraInfoParams> RequestWillBeSentExtraInfoParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("RequestWillBeSentExtraInfoParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<RequestWillBeSentExtraInfoParams> result(new RequestWillBeSentExtraInfoParams());
  errors->Push();
  errors->SetName("RequestWillBeSentExtraInfoParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* request_id_value = dict.Find("requestId");
  if (request_id_value) {
    errors->SetName("requestId");
    result->request_id_ = internal::FromValue<std::string>::Parse(*request_id_value, errors);
  } else {
    errors->AddError("required property missing: requestId");
  }
  const base::Value* associated_cookies_value = dict.Find("associatedCookies");
  if (associated_cookies_value) {
    errors->SetName("associatedCookies");
    result->associated_cookies_ = internal::FromValue<std::vector<std::unique_ptr<::headless::network::AssociatedCookie>>>::Parse(*associated_cookies_value, errors);
  } else {
    errors->AddError("required property missing: associatedCookies");
  }
  const base::Value* headers_value = dict.Find("headers");
  if (headers_value) {
    errors->SetName("headers");
    result->headers_ = internal::FromValue<base::Value::Dict>::Parse(*headers_value, errors);
  } else {
    errors->AddError("required property missing: headers");
  }
  const base::Value* connect_timing_value = dict.Find("connectTiming");
  if (connect_timing_value) {
    errors->SetName("connectTiming");
    result->connect_timing_ = internal::FromValue<::headless::network::ConnectTiming>::Parse(*connect_timing_value, errors);
  } else {
    errors->AddError("required property missing: connectTiming");
  }
  const base::Value* client_security_state_value = dict.Find("clientSecurityState");
  if (client_security_state_value) {
    errors->SetName("clientSecurityState");
    result->client_security_state_ = internal::FromValue<::headless::network::ClientSecurityState>::Parse(*client_security_state_value, errors);
  }
  const base::Value* site_has_cookie_in_other_partition_value = dict.Find("siteHasCookieInOtherPartition");
  if (site_has_cookie_in_other_partition_value) {
    errors->SetName("siteHasCookieInOtherPartition");
    result->site_has_cookie_in_other_partition_ = internal::FromValue<bool>::Parse(*site_has_cookie_in_other_partition_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value RequestWillBeSentExtraInfoParams::Serialize() const {
  base::Value::Dict result;
  result.Set("requestId", internal::ToValue(request_id_));
  result.Set("associatedCookies", internal::ToValue(associated_cookies_));
  result.Set("headers", internal::ToValue(*headers_));
  result.Set("connectTiming", internal::ToValue(*connect_timing_));
  if (client_security_state_)
    result.Set("clientSecurityState", internal::ToValue(*client_security_state_.value()));
  if (site_has_cookie_in_other_partition_)
    result.Set("siteHasCookieInOtherPartition", internal::ToValue(site_has_cookie_in_other_partition_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<RequestWillBeSentExtraInfoParams> RequestWillBeSentExtraInfoParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<RequestWillBeSentExtraInfoParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ResponseReceivedExtraInfoParams> ResponseReceivedExtraInfoParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ResponseReceivedExtraInfoParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ResponseReceivedExtraInfoParams> result(new ResponseReceivedExtraInfoParams());
  errors->Push();
  errors->SetName("ResponseReceivedExtraInfoParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* request_id_value = dict.Find("requestId");
  if (request_id_value) {
    errors->SetName("requestId");
    result->request_id_ = internal::FromValue<std::string>::Parse(*request_id_value, errors);
  } else {
    errors->AddError("required property missing: requestId");
  }
  const base::Value* blocked_cookies_value = dict.Find("blockedCookies");
  if (blocked_cookies_value) {
    errors->SetName("blockedCookies");
    result->blocked_cookies_ = internal::FromValue<std::vector<std::unique_ptr<::headless::network::BlockedSetCookieWithReason>>>::Parse(*blocked_cookies_value, errors);
  } else {
    errors->AddError("required property missing: blockedCookies");
  }
  const base::Value* headers_value = dict.Find("headers");
  if (headers_value) {
    errors->SetName("headers");
    result->headers_ = internal::FromValue<base::Value::Dict>::Parse(*headers_value, errors);
  } else {
    errors->AddError("required property missing: headers");
  }
  const base::Value* resourceip_address_space_value = dict.Find("resourceIPAddressSpace");
  if (resourceip_address_space_value) {
    errors->SetName("resourceIPAddressSpace");
    result->resourceip_address_space_ = internal::FromValue<::headless::network::IPAddressSpace>::Parse(*resourceip_address_space_value, errors);
  } else {
    errors->AddError("required property missing: resourceIPAddressSpace");
  }
  const base::Value* status_code_value = dict.Find("statusCode");
  if (status_code_value) {
    errors->SetName("statusCode");
    result->status_code_ = internal::FromValue<int>::Parse(*status_code_value, errors);
  } else {
    errors->AddError("required property missing: statusCode");
  }
  const base::Value* headers_text_value = dict.Find("headersText");
  if (headers_text_value) {
    errors->SetName("headersText");
    result->headers_text_ = internal::FromValue<std::string>::Parse(*headers_text_value, errors);
  }
  const base::Value* cookie_partition_key_value = dict.Find("cookiePartitionKey");
  if (cookie_partition_key_value) {
    errors->SetName("cookiePartitionKey");
    result->cookie_partition_key_ = internal::FromValue<std::string>::Parse(*cookie_partition_key_value, errors);
  }
  const base::Value* cookie_partition_key_opaque_value = dict.Find("cookiePartitionKeyOpaque");
  if (cookie_partition_key_opaque_value) {
    errors->SetName("cookiePartitionKeyOpaque");
    result->cookie_partition_key_opaque_ = internal::FromValue<bool>::Parse(*cookie_partition_key_opaque_value, errors);
  }
  const base::Value* exempted_cookies_value = dict.Find("exemptedCookies");
  if (exempted_cookies_value) {
    errors->SetName("exemptedCookies");
    result->exempted_cookies_ = internal::FromValue<std::vector<std::unique_ptr<::headless::network::ExemptedSetCookieWithReason>>>::Parse(*exempted_cookies_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ResponseReceivedExtraInfoParams::Serialize() const {
  base::Value::Dict result;
  result.Set("requestId", internal::ToValue(request_id_));
  result.Set("blockedCookies", internal::ToValue(blocked_cookies_));
  result.Set("headers", internal::ToValue(*headers_));
  result.Set("resourceIPAddressSpace", internal::ToValue(resourceip_address_space_));
  result.Set("statusCode", internal::ToValue(status_code_));
  if (headers_text_)
    result.Set("headersText", internal::ToValue(headers_text_.value()));
  if (cookie_partition_key_)
    result.Set("cookiePartitionKey", internal::ToValue(cookie_partition_key_.value()));
  if (cookie_partition_key_opaque_)
    result.Set("cookiePartitionKeyOpaque", internal::ToValue(cookie_partition_key_opaque_.value()));
  if (exempted_cookies_)
    result.Set("exemptedCookies", internal::ToValue(exempted_cookies_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<ResponseReceivedExtraInfoParams> ResponseReceivedExtraInfoParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ResponseReceivedExtraInfoParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<TrustTokenOperationDoneParams> TrustTokenOperationDoneParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("TrustTokenOperationDoneParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<TrustTokenOperationDoneParams> result(new TrustTokenOperationDoneParams());
  errors->Push();
  errors->SetName("TrustTokenOperationDoneParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* status_value = dict.Find("status");
  if (status_value) {
    errors->SetName("status");
    result->status_ = internal::FromValue<::headless::network::TrustTokenOperationDoneStatus>::Parse(*status_value, errors);
  } else {
    errors->AddError("required property missing: status");
  }
  const base::Value* type_value = dict.Find("type");
  if (type_value) {
    errors->SetName("type");
    result->type_ = internal::FromValue<::headless::network::TrustTokenOperationType>::Parse(*type_value, errors);
  } else {
    errors->AddError("required property missing: type");
  }
  const base::Value* request_id_value = dict.Find("requestId");
  if (request_id_value) {
    errors->SetName("requestId");
    result->request_id_ = internal::FromValue<std::string>::Parse(*request_id_value, errors);
  } else {
    errors->AddError("required property missing: requestId");
  }
  const base::Value* top_level_origin_value = dict.Find("topLevelOrigin");
  if (top_level_origin_value) {
    errors->SetName("topLevelOrigin");
    result->top_level_origin_ = internal::FromValue<std::string>::Parse(*top_level_origin_value, errors);
  }
  const base::Value* issuer_origin_value = dict.Find("issuerOrigin");
  if (issuer_origin_value) {
    errors->SetName("issuerOrigin");
    result->issuer_origin_ = internal::FromValue<std::string>::Parse(*issuer_origin_value, errors);
  }
  const base::Value* issued_token_count_value = dict.Find("issuedTokenCount");
  if (issued_token_count_value) {
    errors->SetName("issuedTokenCount");
    result->issued_token_count_ = internal::FromValue<int>::Parse(*issued_token_count_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value TrustTokenOperationDoneParams::Serialize() const {
  base::Value::Dict result;
  result.Set("status", internal::ToValue(status_));
  result.Set("type", internal::ToValue(type_));
  result.Set("requestId", internal::ToValue(request_id_));
  if (top_level_origin_)
    result.Set("topLevelOrigin", internal::ToValue(top_level_origin_.value()));
  if (issuer_origin_)
    result.Set("issuerOrigin", internal::ToValue(issuer_origin_.value()));
  if (issued_token_count_)
    result.Set("issuedTokenCount", internal::ToValue(issued_token_count_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<TrustTokenOperationDoneParams> TrustTokenOperationDoneParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<TrustTokenOperationDoneParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SubresourceWebBundleMetadataReceivedParams> SubresourceWebBundleMetadataReceivedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SubresourceWebBundleMetadataReceivedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SubresourceWebBundleMetadataReceivedParams> result(new SubresourceWebBundleMetadataReceivedParams());
  errors->Push();
  errors->SetName("SubresourceWebBundleMetadataReceivedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* request_id_value = dict.Find("requestId");
  if (request_id_value) {
    errors->SetName("requestId");
    result->request_id_ = internal::FromValue<std::string>::Parse(*request_id_value, errors);
  } else {
    errors->AddError("required property missing: requestId");
  }
  const base::Value* urls_value = dict.Find("urls");
  if (urls_value) {
    errors->SetName("urls");
    result->urls_ = internal::FromValue<std::vector<std::string>>::Parse(*urls_value, errors);
  } else {
    errors->AddError("required property missing: urls");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SubresourceWebBundleMetadataReceivedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("requestId", internal::ToValue(request_id_));
  result.Set("urls", internal::ToValue(urls_));
  return base::Value(std::move(result));
}

std::unique_ptr<SubresourceWebBundleMetadataReceivedParams> SubresourceWebBundleMetadataReceivedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SubresourceWebBundleMetadataReceivedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SubresourceWebBundleMetadataErrorParams> SubresourceWebBundleMetadataErrorParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SubresourceWebBundleMetadataErrorParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SubresourceWebBundleMetadataErrorParams> result(new SubresourceWebBundleMetadataErrorParams());
  errors->Push();
  errors->SetName("SubresourceWebBundleMetadataErrorParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* request_id_value = dict.Find("requestId");
  if (request_id_value) {
    errors->SetName("requestId");
    result->request_id_ = internal::FromValue<std::string>::Parse(*request_id_value, errors);
  } else {
    errors->AddError("required property missing: requestId");
  }
  const base::Value* error_message_value = dict.Find("errorMessage");
  if (error_message_value) {
    errors->SetName("errorMessage");
    result->error_message_ = internal::FromValue<std::string>::Parse(*error_message_value, errors);
  } else {
    errors->AddError("required property missing: errorMessage");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SubresourceWebBundleMetadataErrorParams::Serialize() const {
  base::Value::Dict result;
  result.Set("requestId", internal::ToValue(request_id_));
  result.Set("errorMessage", internal::ToValue(error_message_));
  return base::Value(std::move(result));
}

std::unique_ptr<SubresourceWebBundleMetadataErrorParams> SubresourceWebBundleMetadataErrorParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SubresourceWebBundleMetadataErrorParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SubresourceWebBundleInnerResponseParsedParams> SubresourceWebBundleInnerResponseParsedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SubresourceWebBundleInnerResponseParsedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SubresourceWebBundleInnerResponseParsedParams> result(new SubresourceWebBundleInnerResponseParsedParams());
  errors->Push();
  errors->SetName("SubresourceWebBundleInnerResponseParsedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* inner_request_id_value = dict.Find("innerRequestId");
  if (inner_request_id_value) {
    errors->SetName("innerRequestId");
    result->inner_request_id_ = internal::FromValue<std::string>::Parse(*inner_request_id_value, errors);
  } else {
    errors->AddError("required property missing: innerRequestId");
  }
  const base::Value* inner_requesturl_value = dict.Find("innerRequestURL");
  if (inner_requesturl_value) {
    errors->SetName("innerRequestURL");
    result->inner_requesturl_ = internal::FromValue<std::string>::Parse(*inner_requesturl_value, errors);
  } else {
    errors->AddError("required property missing: innerRequestURL");
  }
  const base::Value* bundle_request_id_value = dict.Find("bundleRequestId");
  if (bundle_request_id_value) {
    errors->SetName("bundleRequestId");
    result->bundle_request_id_ = internal::FromValue<std::string>::Parse(*bundle_request_id_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SubresourceWebBundleInnerResponseParsedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("innerRequestId", internal::ToValue(inner_request_id_));
  result.Set("innerRequestURL", internal::ToValue(inner_requesturl_));
  if (bundle_request_id_)
    result.Set("bundleRequestId", internal::ToValue(bundle_request_id_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<SubresourceWebBundleInnerResponseParsedParams> SubresourceWebBundleInnerResponseParsedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SubresourceWebBundleInnerResponseParsedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SubresourceWebBundleInnerResponseErrorParams> SubresourceWebBundleInnerResponseErrorParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SubresourceWebBundleInnerResponseErrorParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SubresourceWebBundleInnerResponseErrorParams> result(new SubresourceWebBundleInnerResponseErrorParams());
  errors->Push();
  errors->SetName("SubresourceWebBundleInnerResponseErrorParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* inner_request_id_value = dict.Find("innerRequestId");
  if (inner_request_id_value) {
    errors->SetName("innerRequestId");
    result->inner_request_id_ = internal::FromValue<std::string>::Parse(*inner_request_id_value, errors);
  } else {
    errors->AddError("required property missing: innerRequestId");
  }
  const base::Value* inner_requesturl_value = dict.Find("innerRequestURL");
  if (inner_requesturl_value) {
    errors->SetName("innerRequestURL");
    result->inner_requesturl_ = internal::FromValue<std::string>::Parse(*inner_requesturl_value, errors);
  } else {
    errors->AddError("required property missing: innerRequestURL");
  }
  const base::Value* error_message_value = dict.Find("errorMessage");
  if (error_message_value) {
    errors->SetName("errorMessage");
    result->error_message_ = internal::FromValue<std::string>::Parse(*error_message_value, errors);
  } else {
    errors->AddError("required property missing: errorMessage");
  }
  const base::Value* bundle_request_id_value = dict.Find("bundleRequestId");
  if (bundle_request_id_value) {
    errors->SetName("bundleRequestId");
    result->bundle_request_id_ = internal::FromValue<std::string>::Parse(*bundle_request_id_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SubresourceWebBundleInnerResponseErrorParams::Serialize() const {
  base::Value::Dict result;
  result.Set("innerRequestId", internal::ToValue(inner_request_id_));
  result.Set("innerRequestURL", internal::ToValue(inner_requesturl_));
  result.Set("errorMessage", internal::ToValue(error_message_));
  if (bundle_request_id_)
    result.Set("bundleRequestId", internal::ToValue(bundle_request_id_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<SubresourceWebBundleInnerResponseErrorParams> SubresourceWebBundleInnerResponseErrorParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SubresourceWebBundleInnerResponseErrorParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ReportingApiReportAddedParams> ReportingApiReportAddedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ReportingApiReportAddedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ReportingApiReportAddedParams> result(new ReportingApiReportAddedParams());
  errors->Push();
  errors->SetName("ReportingApiReportAddedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* report_value = dict.Find("report");
  if (report_value) {
    errors->SetName("report");
    result->report_ = internal::FromValue<::headless::network::ReportingApiReport>::Parse(*report_value, errors);
  } else {
    errors->AddError("required property missing: report");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ReportingApiReportAddedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("report", internal::ToValue(*report_));
  return base::Value(std::move(result));
}

std::unique_ptr<ReportingApiReportAddedParams> ReportingApiReportAddedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ReportingApiReportAddedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ReportingApiReportUpdatedParams> ReportingApiReportUpdatedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ReportingApiReportUpdatedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ReportingApiReportUpdatedParams> result(new ReportingApiReportUpdatedParams());
  errors->Push();
  errors->SetName("ReportingApiReportUpdatedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* report_value = dict.Find("report");
  if (report_value) {
    errors->SetName("report");
    result->report_ = internal::FromValue<::headless::network::ReportingApiReport>::Parse(*report_value, errors);
  } else {
    errors->AddError("required property missing: report");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ReportingApiReportUpdatedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("report", internal::ToValue(*report_));
  return base::Value(std::move(result));
}

std::unique_ptr<ReportingApiReportUpdatedParams> ReportingApiReportUpdatedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ReportingApiReportUpdatedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ReportingApiEndpointsChangedForOriginParams> ReportingApiEndpointsChangedForOriginParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ReportingApiEndpointsChangedForOriginParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ReportingApiEndpointsChangedForOriginParams> result(new ReportingApiEndpointsChangedForOriginParams());
  errors->Push();
  errors->SetName("ReportingApiEndpointsChangedForOriginParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* origin_value = dict.Find("origin");
  if (origin_value) {
    errors->SetName("origin");
    result->origin_ = internal::FromValue<std::string>::Parse(*origin_value, errors);
  } else {
    errors->AddError("required property missing: origin");
  }
  const base::Value* endpoints_value = dict.Find("endpoints");
  if (endpoints_value) {
    errors->SetName("endpoints");
    result->endpoints_ = internal::FromValue<std::vector<std::unique_ptr<::headless::network::ReportingApiEndpoint>>>::Parse(*endpoints_value, errors);
  } else {
    errors->AddError("required property missing: endpoints");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ReportingApiEndpointsChangedForOriginParams::Serialize() const {
  base::Value::Dict result;
  result.Set("origin", internal::ToValue(origin_));
  result.Set("endpoints", internal::ToValue(endpoints_));
  return base::Value(std::move(result));
}

std::unique_ptr<ReportingApiEndpointsChangedForOriginParams> ReportingApiEndpointsChangedForOriginParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ReportingApiEndpointsChangedForOriginParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


}  // namespace network
}  // namespace headless
