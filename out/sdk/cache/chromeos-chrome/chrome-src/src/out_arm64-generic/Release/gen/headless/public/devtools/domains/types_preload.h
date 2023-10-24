// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_TYPES_PRELOAD_H_
#define HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_TYPES_PRELOAD_H_

#include "base/values.h"
#include "third_party/abseil-cpp/absl/types/optional.h"
#include "third_party/inspector_protocol/crdtp/chromium/protocol_traits.h"

#include "headless/public/devtools/internal/types_forward_declarations_dom.h"
#include "headless/public/devtools/internal/types_forward_declarations_debugger.h"
#include "headless/public/devtools/internal/types_forward_declarations_emulation.h"
#include "headless/public/devtools/internal/types_forward_declarations_io.h"
#include "headless/public/devtools/internal/types_forward_declarations_network.h"
#include "headless/public/devtools/internal/types_forward_declarations_page.h"
#include "headless/public/devtools/internal/types_forward_declarations_preload.h"
#include "headless/public/devtools/internal/types_forward_declarations_runtime.h"
#include "headless/public/devtools/internal/types_forward_declarations_security.h"
#include "headless/public/headless_export.h"

namespace headless {
namespace protocol {
using Binary = crdtp::Binary;
}

class ErrorReporter;

namespace preload {

// Corresponds to SpeculationRuleSet
class HEADLESS_EXPORT RuleSet {
 public:
  static std::unique_ptr<RuleSet> Parse(const base::Value& value, ErrorReporter* errors);

  RuleSet(const RuleSet&) = delete;
  RuleSet& operator=(const RuleSet&) = delete;

  ~RuleSet() { }


  std::string GetId() const { return id_; }
  void SetId(const std::string& value) { id_ = value; }

  // Identifies a document which the rule set is associated with.
  std::string GetLoaderId() const { return loader_id_; }
  void SetLoaderId(const std::string& value) { loader_id_ = value; }

  // Source text of JSON representing the rule set. If it comes from
  // `<script>` tag, it is the textContent of the node. Note that it is
  // a JSON for valid case.
  // 
  // See also:
  // - https://wicg.github.io/nav-speculation/speculation-rules.html
  // - https://github.com/WICG/nav-speculation/blob/main/triggers.md
  std::string GetSourceText() const { return source_text_; }
  void SetSourceText(const std::string& value) { source_text_ = value; }

  // A speculation rule set is either added through an inline
  // `<script>` tag or through an external resource via the
  // 'Speculation-Rules' HTTP header. For the first case, we include
  // the BackendNodeId of the relevant `<script>` tag. For the second
  // case, we include the external URL where the rule set was loaded
  // from, and also RequestId if Network domain is enabled.
  // 
  // See also:
  // - https://wicg.github.io/nav-speculation/speculation-rules.html#speculation-rules-script
  // - https://wicg.github.io/nav-speculation/speculation-rules.html#speculation-rules-header
  bool HasBackendNodeId() const { return !!backend_node_id_; }
  int GetBackendNodeId() const { DCHECK(HasBackendNodeId()); return backend_node_id_.value(); }
  void SetBackendNodeId(int value) { backend_node_id_ = value; }

  bool HasUrl() const { return !!url_; }
  std::string GetUrl() const { DCHECK(HasUrl()); return url_.value(); }
  void SetUrl(const std::string& value) { url_ = value; }

  bool HasRequestId() const { return !!request_id_; }
  std::string GetRequestId() const { DCHECK(HasRequestId()); return request_id_.value(); }
  void SetRequestId(const std::string& value) { request_id_ = value; }

  // Error information
  // `errorMessage` is null iff `errorType` is null.
  bool HasErrorType() const { return !!error_type_; }
  ::headless::preload::RuleSetErrorType GetErrorType() const { DCHECK(HasErrorType()); return error_type_.value(); }
  void SetErrorType(::headless::preload::RuleSetErrorType value) { error_type_ = value; }

  // TODO(https://crbug.com/1425354): Replace this property with structured error.
  bool HasErrorMessage() const { return !!error_message_; }
  std::string GetErrorMessage() const { DCHECK(HasErrorMessage()); return error_message_.value(); }
  void SetErrorMessage(const std::string& value) { error_message_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<RuleSet> Clone() const;

  template<int STATE>
  class RuleSetBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kIdSet = 1 << 1,
    kLoaderIdSet = 1 << 2,
    kSourceTextSet = 1 << 3,
      kAllRequiredFieldsSet = (kIdSet | kLoaderIdSet | kSourceTextSet | 0)
    };

    RuleSetBuilder<STATE | kIdSet>& SetId(const std::string& value) {
      static_assert(!(STATE & kIdSet), "property id should not have already been set");
      result_->SetId(value);
      return CastState<kIdSet>();
    }

    RuleSetBuilder<STATE | kLoaderIdSet>& SetLoaderId(const std::string& value) {
      static_assert(!(STATE & kLoaderIdSet), "property loaderId should not have already been set");
      result_->SetLoaderId(value);
      return CastState<kLoaderIdSet>();
    }

    RuleSetBuilder<STATE | kSourceTextSet>& SetSourceText(const std::string& value) {
      static_assert(!(STATE & kSourceTextSet), "property sourceText should not have already been set");
      result_->SetSourceText(value);
      return CastState<kSourceTextSet>();
    }

    RuleSetBuilder<STATE>& SetBackendNodeId(int value) {
      result_->SetBackendNodeId(value);
      return *this;
    }

    RuleSetBuilder<STATE>& SetUrl(const std::string& value) {
      result_->SetUrl(value);
      return *this;
    }

    RuleSetBuilder<STATE>& SetRequestId(const std::string& value) {
      result_->SetRequestId(value);
      return *this;
    }

    RuleSetBuilder<STATE>& SetErrorType(::headless::preload::RuleSetErrorType value) {
      result_->SetErrorType(value);
      return *this;
    }

    RuleSetBuilder<STATE>& SetErrorMessage(const std::string& value) {
      result_->SetErrorMessage(value);
      return *this;
    }

    std::unique_ptr<RuleSet> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class RuleSet;
    RuleSetBuilder() : result_(new RuleSet()) { }

    template<int STEP> RuleSetBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<RuleSetBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<RuleSet> result_;
  };

  static RuleSetBuilder<0> Builder() {
    return RuleSetBuilder<0>();
  }

 private:
  RuleSet() { }

  std::string id_;
  std::string loader_id_;
  std::string source_text_;
  absl::optional<int> backend_node_id_;
  absl::optional<std::string> url_;
  absl::optional<std::string> request_id_;
  absl::optional<::headless::preload::RuleSetErrorType> error_type_;
  absl::optional<std::string> error_message_;
};


// A key that identifies a preloading attempt.
// 
// The url used is the url specified by the trigger (i.e. the initial URL), and
// not the final url that is navigated to. For example, prerendering allows
// same-origin main frame navigations during the attempt, but the attempt is
// still keyed with the initial URL.
class HEADLESS_EXPORT PreloadingAttemptKey {
 public:
  static std::unique_ptr<PreloadingAttemptKey> Parse(const base::Value& value, ErrorReporter* errors);

  PreloadingAttemptKey(const PreloadingAttemptKey&) = delete;
  PreloadingAttemptKey& operator=(const PreloadingAttemptKey&) = delete;

  ~PreloadingAttemptKey() { }


  std::string GetLoaderId() const { return loader_id_; }
  void SetLoaderId(const std::string& value) { loader_id_ = value; }

  ::headless::preload::SpeculationAction GetAction() const { return action_; }
  void SetAction(::headless::preload::SpeculationAction value) { action_ = value; }

  std::string GetUrl() const { return url_; }
  void SetUrl(const std::string& value) { url_ = value; }

  bool HasTargetHint() const { return !!target_hint_; }
  ::headless::preload::SpeculationTargetHint GetTargetHint() const { DCHECK(HasTargetHint()); return target_hint_.value(); }
  void SetTargetHint(::headless::preload::SpeculationTargetHint value) { target_hint_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<PreloadingAttemptKey> Clone() const;

  template<int STATE>
  class PreloadingAttemptKeyBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kLoaderIdSet = 1 << 1,
    kActionSet = 1 << 2,
    kUrlSet = 1 << 3,
      kAllRequiredFieldsSet = (kLoaderIdSet | kActionSet | kUrlSet | 0)
    };

    PreloadingAttemptKeyBuilder<STATE | kLoaderIdSet>& SetLoaderId(const std::string& value) {
      static_assert(!(STATE & kLoaderIdSet), "property loaderId should not have already been set");
      result_->SetLoaderId(value);
      return CastState<kLoaderIdSet>();
    }

    PreloadingAttemptKeyBuilder<STATE | kActionSet>& SetAction(::headless::preload::SpeculationAction value) {
      static_assert(!(STATE & kActionSet), "property action should not have already been set");
      result_->SetAction(value);
      return CastState<kActionSet>();
    }

    PreloadingAttemptKeyBuilder<STATE | kUrlSet>& SetUrl(const std::string& value) {
      static_assert(!(STATE & kUrlSet), "property url should not have already been set");
      result_->SetUrl(value);
      return CastState<kUrlSet>();
    }

    PreloadingAttemptKeyBuilder<STATE>& SetTargetHint(::headless::preload::SpeculationTargetHint value) {
      result_->SetTargetHint(value);
      return *this;
    }

    std::unique_ptr<PreloadingAttemptKey> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class PreloadingAttemptKey;
    PreloadingAttemptKeyBuilder() : result_(new PreloadingAttemptKey()) { }

    template<int STEP> PreloadingAttemptKeyBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<PreloadingAttemptKeyBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<PreloadingAttemptKey> result_;
  };

  static PreloadingAttemptKeyBuilder<0> Builder() {
    return PreloadingAttemptKeyBuilder<0>();
  }

 private:
  PreloadingAttemptKey() { }

  std::string loader_id_;
  ::headless::preload::SpeculationAction action_;
  std::string url_;
  absl::optional<::headless::preload::SpeculationTargetHint> target_hint_;
};


// Lists sources for a preloading attempt, specifically the ids of rule sets
// that had a speculation rule that triggered the attempt, and the
// BackendNodeIds of <a href> or <area href> elements that triggered the
// attempt (in the case of attempts triggered by a document rule). It is
// possible for mulitple rule sets and links to trigger a single attempt.
class HEADLESS_EXPORT PreloadingAttemptSource {
 public:
  static std::unique_ptr<PreloadingAttemptSource> Parse(const base::Value& value, ErrorReporter* errors);

  PreloadingAttemptSource(const PreloadingAttemptSource&) = delete;
  PreloadingAttemptSource& operator=(const PreloadingAttemptSource&) = delete;

  ~PreloadingAttemptSource() { }


  const ::headless::preload::PreloadingAttemptKey* GetKey() const { return key_.get(); }
  void SetKey(std::unique_ptr<::headless::preload::PreloadingAttemptKey> value) { key_ = std::move(value); }

  const std::vector<std::string>* GetRuleSetIds() const { return &rule_set_ids_; }
  void SetRuleSetIds(std::vector<std::string> value) { rule_set_ids_ = std::move(value); }

  const std::vector<int>* GetNodeIds() const { return &node_ids_; }
  void SetNodeIds(std::vector<int> value) { node_ids_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<PreloadingAttemptSource> Clone() const;

  template<int STATE>
  class PreloadingAttemptSourceBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kKeySet = 1 << 1,
    kRuleSetIdsSet = 1 << 2,
    kNodeIdsSet = 1 << 3,
      kAllRequiredFieldsSet = (kKeySet | kRuleSetIdsSet | kNodeIdsSet | 0)
    };

    PreloadingAttemptSourceBuilder<STATE | kKeySet>& SetKey(std::unique_ptr<::headless::preload::PreloadingAttemptKey> value) {
      static_assert(!(STATE & kKeySet), "property key should not have already been set");
      result_->SetKey(std::move(value));
      return CastState<kKeySet>();
    }

    PreloadingAttemptSourceBuilder<STATE | kRuleSetIdsSet>& SetRuleSetIds(std::vector<std::string> value) {
      static_assert(!(STATE & kRuleSetIdsSet), "property ruleSetIds should not have already been set");
      result_->SetRuleSetIds(std::move(value));
      return CastState<kRuleSetIdsSet>();
    }

    PreloadingAttemptSourceBuilder<STATE | kNodeIdsSet>& SetNodeIds(std::vector<int> value) {
      static_assert(!(STATE & kNodeIdsSet), "property nodeIds should not have already been set");
      result_->SetNodeIds(std::move(value));
      return CastState<kNodeIdsSet>();
    }

    std::unique_ptr<PreloadingAttemptSource> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class PreloadingAttemptSource;
    PreloadingAttemptSourceBuilder() : result_(new PreloadingAttemptSource()) { }

    template<int STEP> PreloadingAttemptSourceBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<PreloadingAttemptSourceBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<PreloadingAttemptSource> result_;
  };

  static PreloadingAttemptSourceBuilder<0> Builder() {
    return PreloadingAttemptSourceBuilder<0>();
  }

 private:
  PreloadingAttemptSource() { }

  std::unique_ptr<::headless::preload::PreloadingAttemptKey> key_;
  std::vector<std::string> rule_set_ids_;
  std::vector<int> node_ids_;
};


// Parameters for the Enable command.
class HEADLESS_EXPORT EnableParams {
 public:
  static std::unique_ptr<EnableParams> Parse(const base::Value& value, ErrorReporter* errors);

  EnableParams(const EnableParams&) = delete;
  EnableParams& operator=(const EnableParams&) = delete;

  ~EnableParams() { }


  base::Value Serialize() const;
  std::unique_ptr<EnableParams> Clone() const;

  template<int STATE>
  class EnableParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<EnableParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class EnableParams;
    EnableParamsBuilder() : result_(new EnableParams()) { }

    template<int STEP> EnableParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<EnableParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<EnableParams> result_;
  };

  static EnableParamsBuilder<0> Builder() {
    return EnableParamsBuilder<0>();
  }

 private:
  EnableParams() { }

};


// Result for the Enable command.
class HEADLESS_EXPORT EnableResult {
 public:
  static std::unique_ptr<EnableResult> Parse(const base::Value& value, ErrorReporter* errors);

  EnableResult(const EnableResult&) = delete;
  EnableResult& operator=(const EnableResult&) = delete;

  ~EnableResult() { }


  base::Value Serialize() const;
  std::unique_ptr<EnableResult> Clone() const;

  template<int STATE>
  class EnableResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<EnableResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class EnableResult;
    EnableResultBuilder() : result_(new EnableResult()) { }

    template<int STEP> EnableResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<EnableResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<EnableResult> result_;
  };

  static EnableResultBuilder<0> Builder() {
    return EnableResultBuilder<0>();
  }

 private:
  EnableResult() { }

};


// Parameters for the Disable command.
class HEADLESS_EXPORT DisableParams {
 public:
  static std::unique_ptr<DisableParams> Parse(const base::Value& value, ErrorReporter* errors);

  DisableParams(const DisableParams&) = delete;
  DisableParams& operator=(const DisableParams&) = delete;

  ~DisableParams() { }


  base::Value Serialize() const;
  std::unique_ptr<DisableParams> Clone() const;

  template<int STATE>
  class DisableParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<DisableParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class DisableParams;
    DisableParamsBuilder() : result_(new DisableParams()) { }

    template<int STEP> DisableParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<DisableParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<DisableParams> result_;
  };

  static DisableParamsBuilder<0> Builder() {
    return DisableParamsBuilder<0>();
  }

 private:
  DisableParams() { }

};


// Result for the Disable command.
class HEADLESS_EXPORT DisableResult {
 public:
  static std::unique_ptr<DisableResult> Parse(const base::Value& value, ErrorReporter* errors);

  DisableResult(const DisableResult&) = delete;
  DisableResult& operator=(const DisableResult&) = delete;

  ~DisableResult() { }


  base::Value Serialize() const;
  std::unique_ptr<DisableResult> Clone() const;

  template<int STATE>
  class DisableResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<DisableResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class DisableResult;
    DisableResultBuilder() : result_(new DisableResult()) { }

    template<int STEP> DisableResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<DisableResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<DisableResult> result_;
  };

  static DisableResultBuilder<0> Builder() {
    return DisableResultBuilder<0>();
  }

 private:
  DisableResult() { }

};


// Parameters for the RuleSetUpdated event.
class HEADLESS_EXPORT RuleSetUpdatedParams {
 public:
  static std::unique_ptr<RuleSetUpdatedParams> Parse(const base::Value& value, ErrorReporter* errors);

  RuleSetUpdatedParams(const RuleSetUpdatedParams&) = delete;
  RuleSetUpdatedParams& operator=(const RuleSetUpdatedParams&) = delete;

  ~RuleSetUpdatedParams() { }


  const ::headless::preload::RuleSet* GetRuleSet() const { return rule_set_.get(); }
  void SetRuleSet(std::unique_ptr<::headless::preload::RuleSet> value) { rule_set_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<RuleSetUpdatedParams> Clone() const;

  template<int STATE>
  class RuleSetUpdatedParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kRuleSetSet = 1 << 1,
      kAllRequiredFieldsSet = (kRuleSetSet | 0)
    };

    RuleSetUpdatedParamsBuilder<STATE | kRuleSetSet>& SetRuleSet(std::unique_ptr<::headless::preload::RuleSet> value) {
      static_assert(!(STATE & kRuleSetSet), "property ruleSet should not have already been set");
      result_->SetRuleSet(std::move(value));
      return CastState<kRuleSetSet>();
    }

    std::unique_ptr<RuleSetUpdatedParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class RuleSetUpdatedParams;
    RuleSetUpdatedParamsBuilder() : result_(new RuleSetUpdatedParams()) { }

    template<int STEP> RuleSetUpdatedParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<RuleSetUpdatedParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<RuleSetUpdatedParams> result_;
  };

  static RuleSetUpdatedParamsBuilder<0> Builder() {
    return RuleSetUpdatedParamsBuilder<0>();
  }

 private:
  RuleSetUpdatedParams() { }

  std::unique_ptr<::headless::preload::RuleSet> rule_set_;
};


// Parameters for the RuleSetRemoved event.
class HEADLESS_EXPORT RuleSetRemovedParams {
 public:
  static std::unique_ptr<RuleSetRemovedParams> Parse(const base::Value& value, ErrorReporter* errors);

  RuleSetRemovedParams(const RuleSetRemovedParams&) = delete;
  RuleSetRemovedParams& operator=(const RuleSetRemovedParams&) = delete;

  ~RuleSetRemovedParams() { }


  std::string GetId() const { return id_; }
  void SetId(const std::string& value) { id_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<RuleSetRemovedParams> Clone() const;

  template<int STATE>
  class RuleSetRemovedParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kIdSet = 1 << 1,
      kAllRequiredFieldsSet = (kIdSet | 0)
    };

    RuleSetRemovedParamsBuilder<STATE | kIdSet>& SetId(const std::string& value) {
      static_assert(!(STATE & kIdSet), "property id should not have already been set");
      result_->SetId(value);
      return CastState<kIdSet>();
    }

    std::unique_ptr<RuleSetRemovedParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class RuleSetRemovedParams;
    RuleSetRemovedParamsBuilder() : result_(new RuleSetRemovedParams()) { }

    template<int STEP> RuleSetRemovedParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<RuleSetRemovedParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<RuleSetRemovedParams> result_;
  };

  static RuleSetRemovedParamsBuilder<0> Builder() {
    return RuleSetRemovedParamsBuilder<0>();
  }

 private:
  RuleSetRemovedParams() { }

  std::string id_;
};


// Parameters for the PreloadEnabledStateUpdated event.
class HEADLESS_EXPORT PreloadEnabledStateUpdatedParams {
 public:
  static std::unique_ptr<PreloadEnabledStateUpdatedParams> Parse(const base::Value& value, ErrorReporter* errors);

  PreloadEnabledStateUpdatedParams(const PreloadEnabledStateUpdatedParams&) = delete;
  PreloadEnabledStateUpdatedParams& operator=(const PreloadEnabledStateUpdatedParams&) = delete;

  ~PreloadEnabledStateUpdatedParams() { }


  bool GetDisabledByPreference() const { return disabled_by_preference_; }
  void SetDisabledByPreference(bool value) { disabled_by_preference_ = value; }

  bool GetDisabledByDataSaver() const { return disabled_by_data_saver_; }
  void SetDisabledByDataSaver(bool value) { disabled_by_data_saver_ = value; }

  bool GetDisabledByBatterySaver() const { return disabled_by_battery_saver_; }
  void SetDisabledByBatterySaver(bool value) { disabled_by_battery_saver_ = value; }

  bool GetDisabledByHoldbackPrefetchSpeculationRules() const { return disabled_by_holdback_prefetch_speculation_rules_; }
  void SetDisabledByHoldbackPrefetchSpeculationRules(bool value) { disabled_by_holdback_prefetch_speculation_rules_ = value; }

  bool GetDisabledByHoldbackPrerenderSpeculationRules() const { return disabled_by_holdback_prerender_speculation_rules_; }
  void SetDisabledByHoldbackPrerenderSpeculationRules(bool value) { disabled_by_holdback_prerender_speculation_rules_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<PreloadEnabledStateUpdatedParams> Clone() const;

  template<int STATE>
  class PreloadEnabledStateUpdatedParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kDisabledByPreferenceSet = 1 << 1,
    kDisabledByDataSaverSet = 1 << 2,
    kDisabledByBatterySaverSet = 1 << 3,
    kDisabledByHoldbackPrefetchSpeculationRulesSet = 1 << 4,
    kDisabledByHoldbackPrerenderSpeculationRulesSet = 1 << 5,
      kAllRequiredFieldsSet = (kDisabledByPreferenceSet | kDisabledByDataSaverSet | kDisabledByBatterySaverSet | kDisabledByHoldbackPrefetchSpeculationRulesSet | kDisabledByHoldbackPrerenderSpeculationRulesSet | 0)
    };

    PreloadEnabledStateUpdatedParamsBuilder<STATE | kDisabledByPreferenceSet>& SetDisabledByPreference(bool value) {
      static_assert(!(STATE & kDisabledByPreferenceSet), "property disabledByPreference should not have already been set");
      result_->SetDisabledByPreference(value);
      return CastState<kDisabledByPreferenceSet>();
    }

    PreloadEnabledStateUpdatedParamsBuilder<STATE | kDisabledByDataSaverSet>& SetDisabledByDataSaver(bool value) {
      static_assert(!(STATE & kDisabledByDataSaverSet), "property disabledByDataSaver should not have already been set");
      result_->SetDisabledByDataSaver(value);
      return CastState<kDisabledByDataSaverSet>();
    }

    PreloadEnabledStateUpdatedParamsBuilder<STATE | kDisabledByBatterySaverSet>& SetDisabledByBatterySaver(bool value) {
      static_assert(!(STATE & kDisabledByBatterySaverSet), "property disabledByBatterySaver should not have already been set");
      result_->SetDisabledByBatterySaver(value);
      return CastState<kDisabledByBatterySaverSet>();
    }

    PreloadEnabledStateUpdatedParamsBuilder<STATE | kDisabledByHoldbackPrefetchSpeculationRulesSet>& SetDisabledByHoldbackPrefetchSpeculationRules(bool value) {
      static_assert(!(STATE & kDisabledByHoldbackPrefetchSpeculationRulesSet), "property disabledByHoldbackPrefetchSpeculationRules should not have already been set");
      result_->SetDisabledByHoldbackPrefetchSpeculationRules(value);
      return CastState<kDisabledByHoldbackPrefetchSpeculationRulesSet>();
    }

    PreloadEnabledStateUpdatedParamsBuilder<STATE | kDisabledByHoldbackPrerenderSpeculationRulesSet>& SetDisabledByHoldbackPrerenderSpeculationRules(bool value) {
      static_assert(!(STATE & kDisabledByHoldbackPrerenderSpeculationRulesSet), "property disabledByHoldbackPrerenderSpeculationRules should not have already been set");
      result_->SetDisabledByHoldbackPrerenderSpeculationRules(value);
      return CastState<kDisabledByHoldbackPrerenderSpeculationRulesSet>();
    }

    std::unique_ptr<PreloadEnabledStateUpdatedParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class PreloadEnabledStateUpdatedParams;
    PreloadEnabledStateUpdatedParamsBuilder() : result_(new PreloadEnabledStateUpdatedParams()) { }

    template<int STEP> PreloadEnabledStateUpdatedParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<PreloadEnabledStateUpdatedParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<PreloadEnabledStateUpdatedParams> result_;
  };

  static PreloadEnabledStateUpdatedParamsBuilder<0> Builder() {
    return PreloadEnabledStateUpdatedParamsBuilder<0>();
  }

 private:
  PreloadEnabledStateUpdatedParams() { }

  bool disabled_by_preference_;
  bool disabled_by_data_saver_;
  bool disabled_by_battery_saver_;
  bool disabled_by_holdback_prefetch_speculation_rules_;
  bool disabled_by_holdback_prerender_speculation_rules_;
};


// Parameters for the PrefetchStatusUpdated event.
class HEADLESS_EXPORT PrefetchStatusUpdatedParams {
 public:
  static std::unique_ptr<PrefetchStatusUpdatedParams> Parse(const base::Value& value, ErrorReporter* errors);

  PrefetchStatusUpdatedParams(const PrefetchStatusUpdatedParams&) = delete;
  PrefetchStatusUpdatedParams& operator=(const PrefetchStatusUpdatedParams&) = delete;

  ~PrefetchStatusUpdatedParams() { }


  const ::headless::preload::PreloadingAttemptKey* GetKey() const { return key_.get(); }
  void SetKey(std::unique_ptr<::headless::preload::PreloadingAttemptKey> value) { key_ = std::move(value); }

  // The frame id of the frame initiating prefetch.
  std::string GetInitiatingFrameId() const { return initiating_frame_id_; }
  void SetInitiatingFrameId(const std::string& value) { initiating_frame_id_ = value; }

  std::string GetPrefetchUrl() const { return prefetch_url_; }
  void SetPrefetchUrl(const std::string& value) { prefetch_url_ = value; }

  ::headless::preload::PreloadingStatus GetStatus() const { return status_; }
  void SetStatus(::headless::preload::PreloadingStatus value) { status_ = value; }

  ::headless::preload::PrefetchStatus GetPrefetchStatus() const { return prefetch_status_; }
  void SetPrefetchStatus(::headless::preload::PrefetchStatus value) { prefetch_status_ = value; }

  std::string GetRequestId() const { return request_id_; }
  void SetRequestId(const std::string& value) { request_id_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<PrefetchStatusUpdatedParams> Clone() const;

  template<int STATE>
  class PrefetchStatusUpdatedParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kKeySet = 1 << 1,
    kInitiatingFrameIdSet = 1 << 2,
    kPrefetchUrlSet = 1 << 3,
    kStatusSet = 1 << 4,
    kPrefetchStatusSet = 1 << 5,
    kRequestIdSet = 1 << 6,
      kAllRequiredFieldsSet = (kKeySet | kInitiatingFrameIdSet | kPrefetchUrlSet | kStatusSet | kPrefetchStatusSet | kRequestIdSet | 0)
    };

    PrefetchStatusUpdatedParamsBuilder<STATE | kKeySet>& SetKey(std::unique_ptr<::headless::preload::PreloadingAttemptKey> value) {
      static_assert(!(STATE & kKeySet), "property key should not have already been set");
      result_->SetKey(std::move(value));
      return CastState<kKeySet>();
    }

    PrefetchStatusUpdatedParamsBuilder<STATE | kInitiatingFrameIdSet>& SetInitiatingFrameId(const std::string& value) {
      static_assert(!(STATE & kInitiatingFrameIdSet), "property initiatingFrameId should not have already been set");
      result_->SetInitiatingFrameId(value);
      return CastState<kInitiatingFrameIdSet>();
    }

    PrefetchStatusUpdatedParamsBuilder<STATE | kPrefetchUrlSet>& SetPrefetchUrl(const std::string& value) {
      static_assert(!(STATE & kPrefetchUrlSet), "property prefetchUrl should not have already been set");
      result_->SetPrefetchUrl(value);
      return CastState<kPrefetchUrlSet>();
    }

    PrefetchStatusUpdatedParamsBuilder<STATE | kStatusSet>& SetStatus(::headless::preload::PreloadingStatus value) {
      static_assert(!(STATE & kStatusSet), "property status should not have already been set");
      result_->SetStatus(value);
      return CastState<kStatusSet>();
    }

    PrefetchStatusUpdatedParamsBuilder<STATE | kPrefetchStatusSet>& SetPrefetchStatus(::headless::preload::PrefetchStatus value) {
      static_assert(!(STATE & kPrefetchStatusSet), "property prefetchStatus should not have already been set");
      result_->SetPrefetchStatus(value);
      return CastState<kPrefetchStatusSet>();
    }

    PrefetchStatusUpdatedParamsBuilder<STATE | kRequestIdSet>& SetRequestId(const std::string& value) {
      static_assert(!(STATE & kRequestIdSet), "property requestId should not have already been set");
      result_->SetRequestId(value);
      return CastState<kRequestIdSet>();
    }

    std::unique_ptr<PrefetchStatusUpdatedParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class PrefetchStatusUpdatedParams;
    PrefetchStatusUpdatedParamsBuilder() : result_(new PrefetchStatusUpdatedParams()) { }

    template<int STEP> PrefetchStatusUpdatedParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<PrefetchStatusUpdatedParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<PrefetchStatusUpdatedParams> result_;
  };

  static PrefetchStatusUpdatedParamsBuilder<0> Builder() {
    return PrefetchStatusUpdatedParamsBuilder<0>();
  }

 private:
  PrefetchStatusUpdatedParams() { }

  std::unique_ptr<::headless::preload::PreloadingAttemptKey> key_;
  std::string initiating_frame_id_;
  std::string prefetch_url_;
  ::headless::preload::PreloadingStatus status_;
  ::headless::preload::PrefetchStatus prefetch_status_;
  std::string request_id_;
};


// Parameters for the PrerenderStatusUpdated event.
class HEADLESS_EXPORT PrerenderStatusUpdatedParams {
 public:
  static std::unique_ptr<PrerenderStatusUpdatedParams> Parse(const base::Value& value, ErrorReporter* errors);

  PrerenderStatusUpdatedParams(const PrerenderStatusUpdatedParams&) = delete;
  PrerenderStatusUpdatedParams& operator=(const PrerenderStatusUpdatedParams&) = delete;

  ~PrerenderStatusUpdatedParams() { }


  const ::headless::preload::PreloadingAttemptKey* GetKey() const { return key_.get(); }
  void SetKey(std::unique_ptr<::headless::preload::PreloadingAttemptKey> value) { key_ = std::move(value); }

  ::headless::preload::PreloadingStatus GetStatus() const { return status_; }
  void SetStatus(::headless::preload::PreloadingStatus value) { status_ = value; }

  bool HasPrerenderStatus() const { return !!prerender_status_; }
  ::headless::preload::PrerenderFinalStatus GetPrerenderStatus() const { DCHECK(HasPrerenderStatus()); return prerender_status_.value(); }
  void SetPrerenderStatus(::headless::preload::PrerenderFinalStatus value) { prerender_status_ = value; }

  // This is used to give users more information about the name of Mojo interface
  // that is incompatible with prerender and has caused the cancellation of the attempt.
  bool HasDisallowedMojoInterface() const { return !!disallowed_mojo_interface_; }
  std::string GetDisallowedMojoInterface() const { DCHECK(HasDisallowedMojoInterface()); return disallowed_mojo_interface_.value(); }
  void SetDisallowedMojoInterface(const std::string& value) { disallowed_mojo_interface_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<PrerenderStatusUpdatedParams> Clone() const;

  template<int STATE>
  class PrerenderStatusUpdatedParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kKeySet = 1 << 1,
    kStatusSet = 1 << 2,
      kAllRequiredFieldsSet = (kKeySet | kStatusSet | 0)
    };

    PrerenderStatusUpdatedParamsBuilder<STATE | kKeySet>& SetKey(std::unique_ptr<::headless::preload::PreloadingAttemptKey> value) {
      static_assert(!(STATE & kKeySet), "property key should not have already been set");
      result_->SetKey(std::move(value));
      return CastState<kKeySet>();
    }

    PrerenderStatusUpdatedParamsBuilder<STATE | kStatusSet>& SetStatus(::headless::preload::PreloadingStatus value) {
      static_assert(!(STATE & kStatusSet), "property status should not have already been set");
      result_->SetStatus(value);
      return CastState<kStatusSet>();
    }

    PrerenderStatusUpdatedParamsBuilder<STATE>& SetPrerenderStatus(::headless::preload::PrerenderFinalStatus value) {
      result_->SetPrerenderStatus(value);
      return *this;
    }

    PrerenderStatusUpdatedParamsBuilder<STATE>& SetDisallowedMojoInterface(const std::string& value) {
      result_->SetDisallowedMojoInterface(value);
      return *this;
    }

    std::unique_ptr<PrerenderStatusUpdatedParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class PrerenderStatusUpdatedParams;
    PrerenderStatusUpdatedParamsBuilder() : result_(new PrerenderStatusUpdatedParams()) { }

    template<int STEP> PrerenderStatusUpdatedParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<PrerenderStatusUpdatedParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<PrerenderStatusUpdatedParams> result_;
  };

  static PrerenderStatusUpdatedParamsBuilder<0> Builder() {
    return PrerenderStatusUpdatedParamsBuilder<0>();
  }

 private:
  PrerenderStatusUpdatedParams() { }

  std::unique_ptr<::headless::preload::PreloadingAttemptKey> key_;
  ::headless::preload::PreloadingStatus status_;
  absl::optional<::headless::preload::PrerenderFinalStatus> prerender_status_;
  absl::optional<std::string> disallowed_mojo_interface_;
};


// Parameters for the PreloadingAttemptSourcesUpdated event.
class HEADLESS_EXPORT PreloadingAttemptSourcesUpdatedParams {
 public:
  static std::unique_ptr<PreloadingAttemptSourcesUpdatedParams> Parse(const base::Value& value, ErrorReporter* errors);

  PreloadingAttemptSourcesUpdatedParams(const PreloadingAttemptSourcesUpdatedParams&) = delete;
  PreloadingAttemptSourcesUpdatedParams& operator=(const PreloadingAttemptSourcesUpdatedParams&) = delete;

  ~PreloadingAttemptSourcesUpdatedParams() { }


  std::string GetLoaderId() const { return loader_id_; }
  void SetLoaderId(const std::string& value) { loader_id_ = value; }

  const std::vector<std::unique_ptr<::headless::preload::PreloadingAttemptSource>>* GetPreloadingAttemptSources() const { return &preloading_attempt_sources_; }
  void SetPreloadingAttemptSources(std::vector<std::unique_ptr<::headless::preload::PreloadingAttemptSource>> value) { preloading_attempt_sources_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<PreloadingAttemptSourcesUpdatedParams> Clone() const;

  template<int STATE>
  class PreloadingAttemptSourcesUpdatedParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kLoaderIdSet = 1 << 1,
    kPreloadingAttemptSourcesSet = 1 << 2,
      kAllRequiredFieldsSet = (kLoaderIdSet | kPreloadingAttemptSourcesSet | 0)
    };

    PreloadingAttemptSourcesUpdatedParamsBuilder<STATE | kLoaderIdSet>& SetLoaderId(const std::string& value) {
      static_assert(!(STATE & kLoaderIdSet), "property loaderId should not have already been set");
      result_->SetLoaderId(value);
      return CastState<kLoaderIdSet>();
    }

    PreloadingAttemptSourcesUpdatedParamsBuilder<STATE | kPreloadingAttemptSourcesSet>& SetPreloadingAttemptSources(std::vector<std::unique_ptr<::headless::preload::PreloadingAttemptSource>> value) {
      static_assert(!(STATE & kPreloadingAttemptSourcesSet), "property preloadingAttemptSources should not have already been set");
      result_->SetPreloadingAttemptSources(std::move(value));
      return CastState<kPreloadingAttemptSourcesSet>();
    }

    std::unique_ptr<PreloadingAttemptSourcesUpdatedParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class PreloadingAttemptSourcesUpdatedParams;
    PreloadingAttemptSourcesUpdatedParamsBuilder() : result_(new PreloadingAttemptSourcesUpdatedParams()) { }

    template<int STEP> PreloadingAttemptSourcesUpdatedParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<PreloadingAttemptSourcesUpdatedParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<PreloadingAttemptSourcesUpdatedParams> result_;
  };

  static PreloadingAttemptSourcesUpdatedParamsBuilder<0> Builder() {
    return PreloadingAttemptSourcesUpdatedParamsBuilder<0>();
  }

 private:
  PreloadingAttemptSourcesUpdatedParams() { }

  std::string loader_id_;
  std::vector<std::unique_ptr<::headless::preload::PreloadingAttemptSource>> preloading_attempt_sources_;
};


}  // namespace preload

}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_TYPES_PRELOAD_H_
