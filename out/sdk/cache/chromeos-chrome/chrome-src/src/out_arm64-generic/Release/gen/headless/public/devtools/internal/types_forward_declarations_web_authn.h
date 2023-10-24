// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPES_FORWARD_DECLARATIONS_WEB_AUTHN_H_
#define HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPES_FORWARD_DECLARATIONS_WEB_AUTHN_H_

#include "base/values.h"

namespace headless {

namespace web_authn {
class VirtualAuthenticatorOptions;
class Credential;
class EnableParams;
class EnableResult;
class DisableParams;
class DisableResult;
class AddVirtualAuthenticatorParams;
class AddVirtualAuthenticatorResult;
class SetResponseOverrideBitsParams;
class SetResponseOverrideBitsResult;
class RemoveVirtualAuthenticatorParams;
class RemoveVirtualAuthenticatorResult;
class AddCredentialParams;
class AddCredentialResult;
class GetCredentialParams;
class GetCredentialResult;
class GetCredentialsParams;
class GetCredentialsResult;
class RemoveCredentialParams;
class RemoveCredentialResult;
class ClearCredentialsParams;
class ClearCredentialsResult;
class SetUserVerifiedParams;
class SetUserVerifiedResult;
class SetAutomaticPresenceSimulationParams;
class SetAutomaticPresenceSimulationResult;
class CredentialAddedParams;
class CredentialAssertedParams;

enum class AuthenticatorProtocol {
  U2F,
  CTAP2
};

enum class Ctap2Version {
  CTAP2_0,
  CTAP2_1
};

enum class AuthenticatorTransport {
  USB,
  NFC,
  BLE,
  CABLE,
  INTERNAL
};

}  // namespace web_authn

}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPES_FORWARD_DECLARATIONS_WEB_AUTHN_H_
