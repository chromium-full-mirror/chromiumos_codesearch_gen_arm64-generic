// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Generated from template:
//   templates/runtime_feature_state_read_context.h.tmpl
// and input files:
//   ../../../../../../../home/chrome-bot/chrome_root/src/third_party/blink/renderer/platform/runtime_enabled_features.json5


#ifndef THIRD_PARTY_BLINK_PUBLIC_COMMON_RUNTIME_FEATURE_STATE_RUNTIME_FEATURE_STATE_READ_CONTEXT_H_
#define THIRD_PARTY_BLINK_PUBLIC_COMMON_RUNTIME_FEATURE_STATE_RUNTIME_FEATURE_STATE_READ_CONTEXT_H_

#include "base/containers/flat_map.h"
#include "base/containers/span.h"
#include "base/notreached.h"
#include "third_party/blink/public/common/common_export.h"
#include "third_party/blink/public/common/origin_trials/origin_trials.h"
#include "third_party/blink/public/common/origin_trials/trial_token_result.h"
#include "third_party/blink/public/common/origin_trials/trial_token_validator.h"
#include "third_party/blink/public/mojom/runtime_feature_state/runtime_feature.mojom-shared.h"
#include "url/origin.h"

namespace content {
class OriginTrialStateHostImpl;
}

namespace blink {

// A class to represent a read only copy of RuntimeFeatureState override values.
// This class is not mutable by the browser process but could potentially be
// modified by the renderer process for features which allow origin trial
// overrides.
// See RuntimeFeatureStateContext for additional information.

class BLINK_COMMON_EXPORT RuntimeFeatureStateReadContext {
 public:
  // You probably don't want to instantiate this class directly, use
  // RuntimeFeatureStateContext instead as it will initialize the override map.
  RuntimeFeatureStateReadContext() = default;

  const base::flat_map<blink::mojom::RuntimeFeature, bool>&
  GetFeatureOverrides() const {
    return feature_overrides_;
  }

  bool IsBlinkExtensionChromeOSEnabled() const {
    return IsEnabled(
        blink::mojom::RuntimeFeature::kBlinkExtensionChromeOS);
  }
  bool IsBlinkExtensionDiagnosticsEnabled() const {
    return IsEnabled(
        blink::mojom::RuntimeFeature::kBlinkExtensionDiagnostics);
  }
  bool IsDisableThirdPartyStoragePartitioningEnabled() const {
    return IsEnabled(
        blink::mojom::RuntimeFeature::kDisableThirdPartyStoragePartitioning);
  }
  bool IsFedCmIdpSigninStatusEnabled() const {
    return IsEnabled(
        blink::mojom::RuntimeFeature::kFedCmIdpSigninStatus);
  }
  bool IsOriginTrialsSampleAPIBrowserReadWriteEnabled() const {
    return IsEnabled(
        blink::mojom::RuntimeFeature::kOriginTrialsSampleAPIBrowserReadWrite);
  }
  bool IsTestFeatureEnabled() const {
    return IsEnabled(
        blink::mojom::RuntimeFeature::kTestFeature);
  }

  // TODO(https://crbug.com/1410784): Validate the list of `third_party_origins`
  // against the ones the renderer process believes were active.
  bool IsDisableThirdPartyStoragePartitioningEnabledForThirdParty(const url::Origin& first_party_origin,
                                              const base::span<url::Origin>& third_party_origins) const {
    return IsEnabledForThirdParty(
        blink::mojom::RuntimeFeature::kDisableThirdPartyStoragePartitioning, first_party_origin, third_party_origins);
  }

 protected:
  bool IsEnabled(blink::mojom::RuntimeFeature feature) const {
    auto override_it = feature_overrides_.find(feature);
    if (override_it != feature_overrides_.end())
      return override_it->second;

    auto initial_it = initial_values_.find(feature);
    DCHECK(initial_it != initial_values_.end());
    return initial_it->second;
  }

  bool IsEnabledForThirdParty(blink::mojom::RuntimeFeature feature,
                              const url::Origin& first_party_origin,
                              const base::span<url::Origin>& third_party_origins) const {
    auto override_it = possible_third_party_feature_overrides_.find(feature);
    if (override_it == possible_third_party_feature_overrides_.end())
      return false;

    blink::TrialTokenValidator validator;
    for (const auto& token : override_it->second) {
      blink::TrialTokenResult result = validator.ValidateTokenAndTrial(
          token, first_party_origin, third_party_origins, base::Time::Now());
      if (result.Status() == blink::OriginTrialTokenStatus::kSuccess) {
        return blink::origin_trials::IsTrialValid(result.ParsedToken()->feature_name()) &&
          blink::origin_trials::IsTrialEnabledForBrowserProcessReadAccess(
              result.ParsedToken()->feature_name());
      }
    }
    return false;
  }

  // Sparse map of overrides collected during initial navigation. This map
  // will be attached to the navigation on commit.
  base::flat_map<blink::mojom::RuntimeFeature, bool> feature_overrides_;

  // Sparse map of overrides that might be needed for third-party contexts.
  // Tokens must be validated once the attempting third-party origin is known.
  base::flat_map<blink::mojom::RuntimeFeature,
                 std::vector<std::string>> possible_third_party_feature_overrides_;

  // Values for all read/write features on context creation.
  base::flat_map<blink::mojom::RuntimeFeature, bool> initial_values_;

 private:
  // Only OriginTrialStateHostImpl should be able to make changes
  // to the read-only context, when a feature diff is sent from
  // the renderer process to the browser process via IPC. Thus,
  // ApplyFeatureChange() is private but will be called in
  // OriginTrialStateHostImpl instances.
  friend class ::content::OriginTrialStateHostImpl;

  // This function allows OriginTrialStateHostImpl to update the
  // browser process's copy of the feature state
  // (RuntimeFeatureStateReadContext) to match the state found in
  // the renderer process.
  void ApplyFeatureChange(const base::flat_map<blink::mojom::RuntimeFeature,
                                               bool>& modified_features,
                          const base::flat_map<blink::mojom::RuntimeFeature,
                                               std::vector<std::string>>&
                              possible_third_party_features) {
    // Feature values sent from the renderer process take precedence over state
    // held currently in the browser process, so insert_or_assign is used.
    for (auto const& feature : modified_features) {
      feature_overrides_.insert_or_assign(feature.first, feature.second);
    }
    for (auto const& feature : possible_third_party_features) {
      possible_third_party_feature_overrides_.insert_or_assign(feature.first,
                                                               feature.second);
    }
  }
};

}  // namespace blink

#endif // THIRD_PARTY_BLINK_PUBLIC_COMMON_RUNTIME_FEATURE_STATE_RUNTIME_FEATURE_STATE_READ_CONTEXT_H_
