// This file is generated

// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_SCHEMA_H_
#define HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_SCHEMA_H_

#include "base/callback.h"
#include "base/observer_list.h"
#include "base/values.h"
#include "headless/public/devtools/domains/types_schema.h"
#include "headless/public/headless_export.h"
#include "headless/public/internal/message_dispatcher.h"


namespace headless {
namespace schema {
class HEADLESS_EXPORT ExperimentalDomain;
class HEADLESS_EXPORT ExperimentalObserver;

// This domain is deprecated.
class HEADLESS_EXPORT Domain {
 public:
  Domain(const Domain&) = delete;
  Domain& operator=(const Domain&) = delete;


  // Return the experimental interface for this domain. Note that experimental
  // commands may be changed or removed at any time.
  ExperimentalDomain* GetExperimental();

  // Returns supported domains.
  void GetDomains(std::unique_ptr<GetDomainsParams> params, base::OnceCallback<void(std::unique_ptr<GetDomainsResult>)> callback = base::OnceCallback<void(std::unique_ptr<GetDomainsResult>)>());
  void GetDomains(base::OnceCallback<void(std::unique_ptr<GetDomainsResult>)> callback = base::OnceCallback<void(std::unique_ptr<GetDomainsResult>)>());

 protected:
  Domain(internal::MessageDispatcher* dispatcher);
  ~Domain();

  static void HandleGetDomainsResponse(base::OnceCallback<void(std::unique_ptr<GetDomainsResult>)> callback, const base::Value& response);


  internal::MessageDispatcher* dispatcher_;  // Not owned.

 private:
};

class ExperimentalDomain : public Domain {
 public:
  ExperimentalDomain(internal::MessageDispatcher* dispatcher);

  ExperimentalDomain(const ExperimentalDomain&) = delete;
  ExperimentalDomain& operator=(const ExperimentalDomain&) = delete;

  ~ExperimentalDomain();


};

}  // namespace schema
}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_SCHEMA_H_
