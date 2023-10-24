// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include "headless/public/devtools/domains/types_css.h"
#include "headless/public/devtools/domains/types_dom.h"
#include "headless/public/devtools/domains/types_debugger.h"
#include "headless/public/devtools/domains/types_emulation.h"
#include "headless/public/devtools/domains/types_io.h"
#include "headless/public/devtools/domains/types_network.h"
#include "headless/public/devtools/domains/types_page.h"
#include "headless/public/devtools/domains/types_runtime.h"
#include "headless/public/devtools/domains/types_security.h"

#include "base/values.h"
#include "headless/public/devtools/internal/type_conversions_css.h"
#include "headless/public/devtools/internal/type_conversions_dom.h"
#include "headless/public/devtools/internal/type_conversions_debugger.h"
#include "headless/public/devtools/internal/type_conversions_emulation.h"
#include "headless/public/devtools/internal/type_conversions_io.h"
#include "headless/public/devtools/internal/type_conversions_network.h"
#include "headless/public/devtools/internal/type_conversions_page.h"
#include "headless/public/devtools/internal/type_conversions_runtime.h"
#include "headless/public/devtools/internal/type_conversions_security.h"

namespace headless {

namespace css {

std::unique_ptr<PseudoElementMatches> PseudoElementMatches::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("PseudoElementMatches");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<PseudoElementMatches> result(new PseudoElementMatches());
  errors->Push();
  errors->SetName("PseudoElementMatches");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* pseudo_type_value = dict.Find("pseudoType");
  if (pseudo_type_value) {
    errors->SetName("pseudoType");
    result->pseudo_type_ = internal::FromValue<::headless::dom::PseudoType>::Parse(*pseudo_type_value, errors);
  } else {
    errors->AddError("required property missing: pseudoType");
  }
  const base::Value* pseudo_identifier_value = dict.Find("pseudoIdentifier");
  if (pseudo_identifier_value) {
    errors->SetName("pseudoIdentifier");
    result->pseudo_identifier_ = internal::FromValue<std::string>::Parse(*pseudo_identifier_value, errors);
  }
  const base::Value* matches_value = dict.Find("matches");
  if (matches_value) {
    errors->SetName("matches");
    result->matches_ = internal::FromValue<std::vector<std::unique_ptr<::headless::css::RuleMatch>>>::Parse(*matches_value, errors);
  } else {
    errors->AddError("required property missing: matches");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value PseudoElementMatches::Serialize() const {
  base::Value::Dict result;
  result.Set("pseudoType", internal::ToValue(pseudo_type_));
  if (pseudo_identifier_)
    result.Set("pseudoIdentifier", internal::ToValue(pseudo_identifier_.value()));
  result.Set("matches", internal::ToValue(matches_));
  return base::Value(std::move(result));
}

std::unique_ptr<PseudoElementMatches> PseudoElementMatches::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<PseudoElementMatches> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<InheritedStyleEntry> InheritedStyleEntry::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("InheritedStyleEntry");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<InheritedStyleEntry> result(new InheritedStyleEntry());
  errors->Push();
  errors->SetName("InheritedStyleEntry");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* inline_style_value = dict.Find("inlineStyle");
  if (inline_style_value) {
    errors->SetName("inlineStyle");
    result->inline_style_ = internal::FromValue<::headless::css::CSSStyle>::Parse(*inline_style_value, errors);
  }
  const base::Value* matchedcss_rules_value = dict.Find("matchedCSSRules");
  if (matchedcss_rules_value) {
    errors->SetName("matchedCSSRules");
    result->matchedcss_rules_ = internal::FromValue<std::vector<std::unique_ptr<::headless::css::RuleMatch>>>::Parse(*matchedcss_rules_value, errors);
  } else {
    errors->AddError("required property missing: matchedCSSRules");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value InheritedStyleEntry::Serialize() const {
  base::Value::Dict result;
  if (inline_style_)
    result.Set("inlineStyle", internal::ToValue(*inline_style_.value()));
  result.Set("matchedCSSRules", internal::ToValue(matchedcss_rules_));
  return base::Value(std::move(result));
}

std::unique_ptr<InheritedStyleEntry> InheritedStyleEntry::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<InheritedStyleEntry> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<InheritedPseudoElementMatches> InheritedPseudoElementMatches::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("InheritedPseudoElementMatches");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<InheritedPseudoElementMatches> result(new InheritedPseudoElementMatches());
  errors->Push();
  errors->SetName("InheritedPseudoElementMatches");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* pseudo_elements_value = dict.Find("pseudoElements");
  if (pseudo_elements_value) {
    errors->SetName("pseudoElements");
    result->pseudo_elements_ = internal::FromValue<std::vector<std::unique_ptr<::headless::css::PseudoElementMatches>>>::Parse(*pseudo_elements_value, errors);
  } else {
    errors->AddError("required property missing: pseudoElements");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value InheritedPseudoElementMatches::Serialize() const {
  base::Value::Dict result;
  result.Set("pseudoElements", internal::ToValue(pseudo_elements_));
  return base::Value(std::move(result));
}

std::unique_ptr<InheritedPseudoElementMatches> InheritedPseudoElementMatches::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<InheritedPseudoElementMatches> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<RuleMatch> RuleMatch::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("RuleMatch");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<RuleMatch> result(new RuleMatch());
  errors->Push();
  errors->SetName("RuleMatch");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* rule_value = dict.Find("rule");
  if (rule_value) {
    errors->SetName("rule");
    result->rule_ = internal::FromValue<::headless::css::CSSRule>::Parse(*rule_value, errors);
  } else {
    errors->AddError("required property missing: rule");
  }
  const base::Value* matching_selectors_value = dict.Find("matchingSelectors");
  if (matching_selectors_value) {
    errors->SetName("matchingSelectors");
    result->matching_selectors_ = internal::FromValue<std::vector<int>>::Parse(*matching_selectors_value, errors);
  } else {
    errors->AddError("required property missing: matchingSelectors");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value RuleMatch::Serialize() const {
  base::Value::Dict result;
  result.Set("rule", internal::ToValue(*rule_));
  result.Set("matchingSelectors", internal::ToValue(matching_selectors_));
  return base::Value(std::move(result));
}

std::unique_ptr<RuleMatch> RuleMatch::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<RuleMatch> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<Value> Value::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("Value");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<Value> result(new Value());
  errors->Push();
  errors->SetName("Value");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* text_value = dict.Find("text");
  if (text_value) {
    errors->SetName("text");
    result->text_ = internal::FromValue<std::string>::Parse(*text_value, errors);
  } else {
    errors->AddError("required property missing: text");
  }
  const base::Value* range_value = dict.Find("range");
  if (range_value) {
    errors->SetName("range");
    result->range_ = internal::FromValue<::headless::css::SourceRange>::Parse(*range_value, errors);
  }
  const base::Value* specificity_value = dict.Find("specificity");
  if (specificity_value) {
    errors->SetName("specificity");
    result->specificity_ = internal::FromValue<::headless::css::Specificity>::Parse(*specificity_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value Value::Serialize() const {
  base::Value::Dict result;
  result.Set("text", internal::ToValue(text_));
  if (range_)
    result.Set("range", internal::ToValue(*range_.value()));
  if (specificity_)
    result.Set("specificity", internal::ToValue(*specificity_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<Value> Value::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<Value> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<Specificity> Specificity::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("Specificity");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<Specificity> result(new Specificity());
  errors->Push();
  errors->SetName("Specificity");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* a_value = dict.Find("a");
  if (a_value) {
    errors->SetName("a");
    result->a_ = internal::FromValue<int>::Parse(*a_value, errors);
  } else {
    errors->AddError("required property missing: a");
  }
  const base::Value* b_value = dict.Find("b");
  if (b_value) {
    errors->SetName("b");
    result->b_ = internal::FromValue<int>::Parse(*b_value, errors);
  } else {
    errors->AddError("required property missing: b");
  }
  const base::Value* c_value = dict.Find("c");
  if (c_value) {
    errors->SetName("c");
    result->c_ = internal::FromValue<int>::Parse(*c_value, errors);
  } else {
    errors->AddError("required property missing: c");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value Specificity::Serialize() const {
  base::Value::Dict result;
  result.Set("a", internal::ToValue(a_));
  result.Set("b", internal::ToValue(b_));
  result.Set("c", internal::ToValue(c_));
  return base::Value(std::move(result));
}

std::unique_ptr<Specificity> Specificity::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<Specificity> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SelectorList> SelectorList::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SelectorList");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SelectorList> result(new SelectorList());
  errors->Push();
  errors->SetName("SelectorList");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* selectors_value = dict.Find("selectors");
  if (selectors_value) {
    errors->SetName("selectors");
    result->selectors_ = internal::FromValue<std::vector<std::unique_ptr<::headless::css::Value>>>::Parse(*selectors_value, errors);
  } else {
    errors->AddError("required property missing: selectors");
  }
  const base::Value* text_value = dict.Find("text");
  if (text_value) {
    errors->SetName("text");
    result->text_ = internal::FromValue<std::string>::Parse(*text_value, errors);
  } else {
    errors->AddError("required property missing: text");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SelectorList::Serialize() const {
  base::Value::Dict result;
  result.Set("selectors", internal::ToValue(selectors_));
  result.Set("text", internal::ToValue(text_));
  return base::Value(std::move(result));
}

std::unique_ptr<SelectorList> SelectorList::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SelectorList> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CSSStyleSheetHeader> CSSStyleSheetHeader::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CSSStyleSheetHeader");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CSSStyleSheetHeader> result(new CSSStyleSheetHeader());
  errors->Push();
  errors->SetName("CSSStyleSheetHeader");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* style_sheet_id_value = dict.Find("styleSheetId");
  if (style_sheet_id_value) {
    errors->SetName("styleSheetId");
    result->style_sheet_id_ = internal::FromValue<std::string>::Parse(*style_sheet_id_value, errors);
  } else {
    errors->AddError("required property missing: styleSheetId");
  }
  const base::Value* frame_id_value = dict.Find("frameId");
  if (frame_id_value) {
    errors->SetName("frameId");
    result->frame_id_ = internal::FromValue<std::string>::Parse(*frame_id_value, errors);
  } else {
    errors->AddError("required property missing: frameId");
  }
  const base::Value* sourceurl_value = dict.Find("sourceURL");
  if (sourceurl_value) {
    errors->SetName("sourceURL");
    result->sourceurl_ = internal::FromValue<std::string>::Parse(*sourceurl_value, errors);
  } else {
    errors->AddError("required property missing: sourceURL");
  }
  const base::Value* source_mapurl_value = dict.Find("sourceMapURL");
  if (source_mapurl_value) {
    errors->SetName("sourceMapURL");
    result->source_mapurl_ = internal::FromValue<std::string>::Parse(*source_mapurl_value, errors);
  }
  const base::Value* origin_value = dict.Find("origin");
  if (origin_value) {
    errors->SetName("origin");
    result->origin_ = internal::FromValue<::headless::css::StyleSheetOrigin>::Parse(*origin_value, errors);
  } else {
    errors->AddError("required property missing: origin");
  }
  const base::Value* title_value = dict.Find("title");
  if (title_value) {
    errors->SetName("title");
    result->title_ = internal::FromValue<std::string>::Parse(*title_value, errors);
  } else {
    errors->AddError("required property missing: title");
  }
  const base::Value* owner_node_value = dict.Find("ownerNode");
  if (owner_node_value) {
    errors->SetName("ownerNode");
    result->owner_node_ = internal::FromValue<int>::Parse(*owner_node_value, errors);
  }
  const base::Value* disabled_value = dict.Find("disabled");
  if (disabled_value) {
    errors->SetName("disabled");
    result->disabled_ = internal::FromValue<bool>::Parse(*disabled_value, errors);
  } else {
    errors->AddError("required property missing: disabled");
  }
  const base::Value* has_sourceurl_value = dict.Find("hasSourceURL");
  if (has_sourceurl_value) {
    errors->SetName("hasSourceURL");
    result->has_sourceurl_ = internal::FromValue<bool>::Parse(*has_sourceurl_value, errors);
  }
  const base::Value* is_inline_value = dict.Find("isInline");
  if (is_inline_value) {
    errors->SetName("isInline");
    result->is_inline_ = internal::FromValue<bool>::Parse(*is_inline_value, errors);
  } else {
    errors->AddError("required property missing: isInline");
  }
  const base::Value* is_mutable_value = dict.Find("isMutable");
  if (is_mutable_value) {
    errors->SetName("isMutable");
    result->is_mutable_ = internal::FromValue<bool>::Parse(*is_mutable_value, errors);
  } else {
    errors->AddError("required property missing: isMutable");
  }
  const base::Value* is_constructed_value = dict.Find("isConstructed");
  if (is_constructed_value) {
    errors->SetName("isConstructed");
    result->is_constructed_ = internal::FromValue<bool>::Parse(*is_constructed_value, errors);
  } else {
    errors->AddError("required property missing: isConstructed");
  }
  const base::Value* start_line_value = dict.Find("startLine");
  if (start_line_value) {
    errors->SetName("startLine");
    result->start_line_ = internal::FromValue<double>::Parse(*start_line_value, errors);
  } else {
    errors->AddError("required property missing: startLine");
  }
  const base::Value* start_column_value = dict.Find("startColumn");
  if (start_column_value) {
    errors->SetName("startColumn");
    result->start_column_ = internal::FromValue<double>::Parse(*start_column_value, errors);
  } else {
    errors->AddError("required property missing: startColumn");
  }
  const base::Value* length_value = dict.Find("length");
  if (length_value) {
    errors->SetName("length");
    result->length_ = internal::FromValue<double>::Parse(*length_value, errors);
  } else {
    errors->AddError("required property missing: length");
  }
  const base::Value* end_line_value = dict.Find("endLine");
  if (end_line_value) {
    errors->SetName("endLine");
    result->end_line_ = internal::FromValue<double>::Parse(*end_line_value, errors);
  } else {
    errors->AddError("required property missing: endLine");
  }
  const base::Value* end_column_value = dict.Find("endColumn");
  if (end_column_value) {
    errors->SetName("endColumn");
    result->end_column_ = internal::FromValue<double>::Parse(*end_column_value, errors);
  } else {
    errors->AddError("required property missing: endColumn");
  }
  const base::Value* loading_failed_value = dict.Find("loadingFailed");
  if (loading_failed_value) {
    errors->SetName("loadingFailed");
    result->loading_failed_ = internal::FromValue<bool>::Parse(*loading_failed_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CSSStyleSheetHeader::Serialize() const {
  base::Value::Dict result;
  result.Set("styleSheetId", internal::ToValue(style_sheet_id_));
  result.Set("frameId", internal::ToValue(frame_id_));
  result.Set("sourceURL", internal::ToValue(sourceurl_));
  if (source_mapurl_)
    result.Set("sourceMapURL", internal::ToValue(source_mapurl_.value()));
  result.Set("origin", internal::ToValue(origin_));
  result.Set("title", internal::ToValue(title_));
  if (owner_node_)
    result.Set("ownerNode", internal::ToValue(owner_node_.value()));
  result.Set("disabled", internal::ToValue(disabled_));
  if (has_sourceurl_)
    result.Set("hasSourceURL", internal::ToValue(has_sourceurl_.value()));
  result.Set("isInline", internal::ToValue(is_inline_));
  result.Set("isMutable", internal::ToValue(is_mutable_));
  result.Set("isConstructed", internal::ToValue(is_constructed_));
  result.Set("startLine", internal::ToValue(start_line_));
  result.Set("startColumn", internal::ToValue(start_column_));
  result.Set("length", internal::ToValue(length_));
  result.Set("endLine", internal::ToValue(end_line_));
  result.Set("endColumn", internal::ToValue(end_column_));
  if (loading_failed_)
    result.Set("loadingFailed", internal::ToValue(loading_failed_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<CSSStyleSheetHeader> CSSStyleSheetHeader::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CSSStyleSheetHeader> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CSSRule> CSSRule::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CSSRule");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CSSRule> result(new CSSRule());
  errors->Push();
  errors->SetName("CSSRule");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* style_sheet_id_value = dict.Find("styleSheetId");
  if (style_sheet_id_value) {
    errors->SetName("styleSheetId");
    result->style_sheet_id_ = internal::FromValue<std::string>::Parse(*style_sheet_id_value, errors);
  }
  const base::Value* selector_list_value = dict.Find("selectorList");
  if (selector_list_value) {
    errors->SetName("selectorList");
    result->selector_list_ = internal::FromValue<::headless::css::SelectorList>::Parse(*selector_list_value, errors);
  } else {
    errors->AddError("required property missing: selectorList");
  }
  const base::Value* nesting_selectors_value = dict.Find("nestingSelectors");
  if (nesting_selectors_value) {
    errors->SetName("nestingSelectors");
    result->nesting_selectors_ = internal::FromValue<std::vector<std::string>>::Parse(*nesting_selectors_value, errors);
  }
  const base::Value* origin_value = dict.Find("origin");
  if (origin_value) {
    errors->SetName("origin");
    result->origin_ = internal::FromValue<::headless::css::StyleSheetOrigin>::Parse(*origin_value, errors);
  } else {
    errors->AddError("required property missing: origin");
  }
  const base::Value* style_value = dict.Find("style");
  if (style_value) {
    errors->SetName("style");
    result->style_ = internal::FromValue<::headless::css::CSSStyle>::Parse(*style_value, errors);
  } else {
    errors->AddError("required property missing: style");
  }
  const base::Value* media_value = dict.Find("media");
  if (media_value) {
    errors->SetName("media");
    result->media_ = internal::FromValue<std::vector<std::unique_ptr<::headless::css::CSSMedia>>>::Parse(*media_value, errors);
  }
  const base::Value* container_queries_value = dict.Find("containerQueries");
  if (container_queries_value) {
    errors->SetName("containerQueries");
    result->container_queries_ = internal::FromValue<std::vector<std::unique_ptr<::headless::css::CSSContainerQuery>>>::Parse(*container_queries_value, errors);
  }
  const base::Value* supports_value = dict.Find("supports");
  if (supports_value) {
    errors->SetName("supports");
    result->supports_ = internal::FromValue<std::vector<std::unique_ptr<::headless::css::CSSSupports>>>::Parse(*supports_value, errors);
  }
  const base::Value* layers_value = dict.Find("layers");
  if (layers_value) {
    errors->SetName("layers");
    result->layers_ = internal::FromValue<std::vector<std::unique_ptr<::headless::css::CSSLayer>>>::Parse(*layers_value, errors);
  }
  const base::Value* scopes_value = dict.Find("scopes");
  if (scopes_value) {
    errors->SetName("scopes");
    result->scopes_ = internal::FromValue<std::vector<std::unique_ptr<::headless::css::CSSScope>>>::Parse(*scopes_value, errors);
  }
  const base::Value* rule_types_value = dict.Find("ruleTypes");
  if (rule_types_value) {
    errors->SetName("ruleTypes");
    result->rule_types_ = internal::FromValue<std::vector<::headless::css::CSSRuleType>>::Parse(*rule_types_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CSSRule::Serialize() const {
  base::Value::Dict result;
  if (style_sheet_id_)
    result.Set("styleSheetId", internal::ToValue(style_sheet_id_.value()));
  result.Set("selectorList", internal::ToValue(*selector_list_));
  if (nesting_selectors_)
    result.Set("nestingSelectors", internal::ToValue(nesting_selectors_.value()));
  result.Set("origin", internal::ToValue(origin_));
  result.Set("style", internal::ToValue(*style_));
  if (media_)
    result.Set("media", internal::ToValue(media_.value()));
  if (container_queries_)
    result.Set("containerQueries", internal::ToValue(container_queries_.value()));
  if (supports_)
    result.Set("supports", internal::ToValue(supports_.value()));
  if (layers_)
    result.Set("layers", internal::ToValue(layers_.value()));
  if (scopes_)
    result.Set("scopes", internal::ToValue(scopes_.value()));
  if (rule_types_)
    result.Set("ruleTypes", internal::ToValue(rule_types_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<CSSRule> CSSRule::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CSSRule> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<RuleUsage> RuleUsage::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("RuleUsage");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<RuleUsage> result(new RuleUsage());
  errors->Push();
  errors->SetName("RuleUsage");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* style_sheet_id_value = dict.Find("styleSheetId");
  if (style_sheet_id_value) {
    errors->SetName("styleSheetId");
    result->style_sheet_id_ = internal::FromValue<std::string>::Parse(*style_sheet_id_value, errors);
  } else {
    errors->AddError("required property missing: styleSheetId");
  }
  const base::Value* start_offset_value = dict.Find("startOffset");
  if (start_offset_value) {
    errors->SetName("startOffset");
    result->start_offset_ = internal::FromValue<double>::Parse(*start_offset_value, errors);
  } else {
    errors->AddError("required property missing: startOffset");
  }
  const base::Value* end_offset_value = dict.Find("endOffset");
  if (end_offset_value) {
    errors->SetName("endOffset");
    result->end_offset_ = internal::FromValue<double>::Parse(*end_offset_value, errors);
  } else {
    errors->AddError("required property missing: endOffset");
  }
  const base::Value* used_value = dict.Find("used");
  if (used_value) {
    errors->SetName("used");
    result->used_ = internal::FromValue<bool>::Parse(*used_value, errors);
  } else {
    errors->AddError("required property missing: used");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value RuleUsage::Serialize() const {
  base::Value::Dict result;
  result.Set("styleSheetId", internal::ToValue(style_sheet_id_));
  result.Set("startOffset", internal::ToValue(start_offset_));
  result.Set("endOffset", internal::ToValue(end_offset_));
  result.Set("used", internal::ToValue(used_));
  return base::Value(std::move(result));
}

std::unique_ptr<RuleUsage> RuleUsage::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<RuleUsage> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SourceRange> SourceRange::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SourceRange");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SourceRange> result(new SourceRange());
  errors->Push();
  errors->SetName("SourceRange");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* start_line_value = dict.Find("startLine");
  if (start_line_value) {
    errors->SetName("startLine");
    result->start_line_ = internal::FromValue<int>::Parse(*start_line_value, errors);
  } else {
    errors->AddError("required property missing: startLine");
  }
  const base::Value* start_column_value = dict.Find("startColumn");
  if (start_column_value) {
    errors->SetName("startColumn");
    result->start_column_ = internal::FromValue<int>::Parse(*start_column_value, errors);
  } else {
    errors->AddError("required property missing: startColumn");
  }
  const base::Value* end_line_value = dict.Find("endLine");
  if (end_line_value) {
    errors->SetName("endLine");
    result->end_line_ = internal::FromValue<int>::Parse(*end_line_value, errors);
  } else {
    errors->AddError("required property missing: endLine");
  }
  const base::Value* end_column_value = dict.Find("endColumn");
  if (end_column_value) {
    errors->SetName("endColumn");
    result->end_column_ = internal::FromValue<int>::Parse(*end_column_value, errors);
  } else {
    errors->AddError("required property missing: endColumn");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SourceRange::Serialize() const {
  base::Value::Dict result;
  result.Set("startLine", internal::ToValue(start_line_));
  result.Set("startColumn", internal::ToValue(start_column_));
  result.Set("endLine", internal::ToValue(end_line_));
  result.Set("endColumn", internal::ToValue(end_column_));
  return base::Value(std::move(result));
}

std::unique_ptr<SourceRange> SourceRange::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SourceRange> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ShorthandEntry> ShorthandEntry::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ShorthandEntry");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ShorthandEntry> result(new ShorthandEntry());
  errors->Push();
  errors->SetName("ShorthandEntry");
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
  const base::Value* important_value = dict.Find("important");
  if (important_value) {
    errors->SetName("important");
    result->important_ = internal::FromValue<bool>::Parse(*important_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ShorthandEntry::Serialize() const {
  base::Value::Dict result;
  result.Set("name", internal::ToValue(name_));
  result.Set("value", internal::ToValue(value_));
  if (important_)
    result.Set("important", internal::ToValue(important_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<ShorthandEntry> ShorthandEntry::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ShorthandEntry> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CSSComputedStyleProperty> CSSComputedStyleProperty::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CSSComputedStyleProperty");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CSSComputedStyleProperty> result(new CSSComputedStyleProperty());
  errors->Push();
  errors->SetName("CSSComputedStyleProperty");
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
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CSSComputedStyleProperty::Serialize() const {
  base::Value::Dict result;
  result.Set("name", internal::ToValue(name_));
  result.Set("value", internal::ToValue(value_));
  return base::Value(std::move(result));
}

std::unique_ptr<CSSComputedStyleProperty> CSSComputedStyleProperty::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CSSComputedStyleProperty> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CSSStyle> CSSStyle::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CSSStyle");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CSSStyle> result(new CSSStyle());
  errors->Push();
  errors->SetName("CSSStyle");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* style_sheet_id_value = dict.Find("styleSheetId");
  if (style_sheet_id_value) {
    errors->SetName("styleSheetId");
    result->style_sheet_id_ = internal::FromValue<std::string>::Parse(*style_sheet_id_value, errors);
  }
  const base::Value* css_properties_value = dict.Find("cssProperties");
  if (css_properties_value) {
    errors->SetName("cssProperties");
    result->css_properties_ = internal::FromValue<std::vector<std::unique_ptr<::headless::css::CSSProperty>>>::Parse(*css_properties_value, errors);
  } else {
    errors->AddError("required property missing: cssProperties");
  }
  const base::Value* shorthand_entries_value = dict.Find("shorthandEntries");
  if (shorthand_entries_value) {
    errors->SetName("shorthandEntries");
    result->shorthand_entries_ = internal::FromValue<std::vector<std::unique_ptr<::headless::css::ShorthandEntry>>>::Parse(*shorthand_entries_value, errors);
  } else {
    errors->AddError("required property missing: shorthandEntries");
  }
  const base::Value* css_text_value = dict.Find("cssText");
  if (css_text_value) {
    errors->SetName("cssText");
    result->css_text_ = internal::FromValue<std::string>::Parse(*css_text_value, errors);
  }
  const base::Value* range_value = dict.Find("range");
  if (range_value) {
    errors->SetName("range");
    result->range_ = internal::FromValue<::headless::css::SourceRange>::Parse(*range_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CSSStyle::Serialize() const {
  base::Value::Dict result;
  if (style_sheet_id_)
    result.Set("styleSheetId", internal::ToValue(style_sheet_id_.value()));
  result.Set("cssProperties", internal::ToValue(css_properties_));
  result.Set("shorthandEntries", internal::ToValue(shorthand_entries_));
  if (css_text_)
    result.Set("cssText", internal::ToValue(css_text_.value()));
  if (range_)
    result.Set("range", internal::ToValue(*range_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<CSSStyle> CSSStyle::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CSSStyle> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CSSProperty> CSSProperty::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CSSProperty");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CSSProperty> result(new CSSProperty());
  errors->Push();
  errors->SetName("CSSProperty");
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
  const base::Value* important_value = dict.Find("important");
  if (important_value) {
    errors->SetName("important");
    result->important_ = internal::FromValue<bool>::Parse(*important_value, errors);
  }
  const base::Value* implicit_value = dict.Find("implicit");
  if (implicit_value) {
    errors->SetName("implicit");
    result->implicit_ = internal::FromValue<bool>::Parse(*implicit_value, errors);
  }
  const base::Value* text_value = dict.Find("text");
  if (text_value) {
    errors->SetName("text");
    result->text_ = internal::FromValue<std::string>::Parse(*text_value, errors);
  }
  const base::Value* parsed_ok_value = dict.Find("parsedOk");
  if (parsed_ok_value) {
    errors->SetName("parsedOk");
    result->parsed_ok_ = internal::FromValue<bool>::Parse(*parsed_ok_value, errors);
  }
  const base::Value* disabled_value = dict.Find("disabled");
  if (disabled_value) {
    errors->SetName("disabled");
    result->disabled_ = internal::FromValue<bool>::Parse(*disabled_value, errors);
  }
  const base::Value* range_value = dict.Find("range");
  if (range_value) {
    errors->SetName("range");
    result->range_ = internal::FromValue<::headless::css::SourceRange>::Parse(*range_value, errors);
  }
  const base::Value* longhand_properties_value = dict.Find("longhandProperties");
  if (longhand_properties_value) {
    errors->SetName("longhandProperties");
    result->longhand_properties_ = internal::FromValue<std::vector<std::unique_ptr<::headless::css::CSSProperty>>>::Parse(*longhand_properties_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CSSProperty::Serialize() const {
  base::Value::Dict result;
  result.Set("name", internal::ToValue(name_));
  result.Set("value", internal::ToValue(value_));
  if (important_)
    result.Set("important", internal::ToValue(important_.value()));
  if (implicit_)
    result.Set("implicit", internal::ToValue(implicit_.value()));
  if (text_)
    result.Set("text", internal::ToValue(text_.value()));
  if (parsed_ok_)
    result.Set("parsedOk", internal::ToValue(parsed_ok_.value()));
  if (disabled_)
    result.Set("disabled", internal::ToValue(disabled_.value()));
  if (range_)
    result.Set("range", internal::ToValue(*range_.value()));
  if (longhand_properties_)
    result.Set("longhandProperties", internal::ToValue(longhand_properties_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<CSSProperty> CSSProperty::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CSSProperty> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CSSMedia> CSSMedia::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CSSMedia");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CSSMedia> result(new CSSMedia());
  errors->Push();
  errors->SetName("CSSMedia");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* text_value = dict.Find("text");
  if (text_value) {
    errors->SetName("text");
    result->text_ = internal::FromValue<std::string>::Parse(*text_value, errors);
  } else {
    errors->AddError("required property missing: text");
  }
  const base::Value* source_value = dict.Find("source");
  if (source_value) {
    errors->SetName("source");
    result->source_ = internal::FromValue<::headless::css::CSSMediaSource>::Parse(*source_value, errors);
  } else {
    errors->AddError("required property missing: source");
  }
  const base::Value* sourceurl_value = dict.Find("sourceURL");
  if (sourceurl_value) {
    errors->SetName("sourceURL");
    result->sourceurl_ = internal::FromValue<std::string>::Parse(*sourceurl_value, errors);
  }
  const base::Value* range_value = dict.Find("range");
  if (range_value) {
    errors->SetName("range");
    result->range_ = internal::FromValue<::headless::css::SourceRange>::Parse(*range_value, errors);
  }
  const base::Value* style_sheet_id_value = dict.Find("styleSheetId");
  if (style_sheet_id_value) {
    errors->SetName("styleSheetId");
    result->style_sheet_id_ = internal::FromValue<std::string>::Parse(*style_sheet_id_value, errors);
  }
  const base::Value* media_list_value = dict.Find("mediaList");
  if (media_list_value) {
    errors->SetName("mediaList");
    result->media_list_ = internal::FromValue<std::vector<std::unique_ptr<::headless::css::MediaQuery>>>::Parse(*media_list_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CSSMedia::Serialize() const {
  base::Value::Dict result;
  result.Set("text", internal::ToValue(text_));
  result.Set("source", internal::ToValue(source_));
  if (sourceurl_)
    result.Set("sourceURL", internal::ToValue(sourceurl_.value()));
  if (range_)
    result.Set("range", internal::ToValue(*range_.value()));
  if (style_sheet_id_)
    result.Set("styleSheetId", internal::ToValue(style_sheet_id_.value()));
  if (media_list_)
    result.Set("mediaList", internal::ToValue(media_list_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<CSSMedia> CSSMedia::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CSSMedia> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<MediaQuery> MediaQuery::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("MediaQuery");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<MediaQuery> result(new MediaQuery());
  errors->Push();
  errors->SetName("MediaQuery");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* expressions_value = dict.Find("expressions");
  if (expressions_value) {
    errors->SetName("expressions");
    result->expressions_ = internal::FromValue<std::vector<std::unique_ptr<::headless::css::MediaQueryExpression>>>::Parse(*expressions_value, errors);
  } else {
    errors->AddError("required property missing: expressions");
  }
  const base::Value* active_value = dict.Find("active");
  if (active_value) {
    errors->SetName("active");
    result->active_ = internal::FromValue<bool>::Parse(*active_value, errors);
  } else {
    errors->AddError("required property missing: active");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value MediaQuery::Serialize() const {
  base::Value::Dict result;
  result.Set("expressions", internal::ToValue(expressions_));
  result.Set("active", internal::ToValue(active_));
  return base::Value(std::move(result));
}

std::unique_ptr<MediaQuery> MediaQuery::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<MediaQuery> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<MediaQueryExpression> MediaQueryExpression::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("MediaQueryExpression");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<MediaQueryExpression> result(new MediaQueryExpression());
  errors->Push();
  errors->SetName("MediaQueryExpression");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* value_value = dict.Find("value");
  if (value_value) {
    errors->SetName("value");
    result->value_ = internal::FromValue<double>::Parse(*value_value, errors);
  } else {
    errors->AddError("required property missing: value");
  }
  const base::Value* unit_value = dict.Find("unit");
  if (unit_value) {
    errors->SetName("unit");
    result->unit_ = internal::FromValue<std::string>::Parse(*unit_value, errors);
  } else {
    errors->AddError("required property missing: unit");
  }
  const base::Value* feature_value = dict.Find("feature");
  if (feature_value) {
    errors->SetName("feature");
    result->feature_ = internal::FromValue<std::string>::Parse(*feature_value, errors);
  } else {
    errors->AddError("required property missing: feature");
  }
  const base::Value* value_range_value = dict.Find("valueRange");
  if (value_range_value) {
    errors->SetName("valueRange");
    result->value_range_ = internal::FromValue<::headless::css::SourceRange>::Parse(*value_range_value, errors);
  }
  const base::Value* computed_length_value = dict.Find("computedLength");
  if (computed_length_value) {
    errors->SetName("computedLength");
    result->computed_length_ = internal::FromValue<double>::Parse(*computed_length_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value MediaQueryExpression::Serialize() const {
  base::Value::Dict result;
  result.Set("value", internal::ToValue(value_));
  result.Set("unit", internal::ToValue(unit_));
  result.Set("feature", internal::ToValue(feature_));
  if (value_range_)
    result.Set("valueRange", internal::ToValue(*value_range_.value()));
  if (computed_length_)
    result.Set("computedLength", internal::ToValue(computed_length_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<MediaQueryExpression> MediaQueryExpression::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<MediaQueryExpression> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CSSContainerQuery> CSSContainerQuery::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CSSContainerQuery");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CSSContainerQuery> result(new CSSContainerQuery());
  errors->Push();
  errors->SetName("CSSContainerQuery");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* text_value = dict.Find("text");
  if (text_value) {
    errors->SetName("text");
    result->text_ = internal::FromValue<std::string>::Parse(*text_value, errors);
  } else {
    errors->AddError("required property missing: text");
  }
  const base::Value* range_value = dict.Find("range");
  if (range_value) {
    errors->SetName("range");
    result->range_ = internal::FromValue<::headless::css::SourceRange>::Parse(*range_value, errors);
  }
  const base::Value* style_sheet_id_value = dict.Find("styleSheetId");
  if (style_sheet_id_value) {
    errors->SetName("styleSheetId");
    result->style_sheet_id_ = internal::FromValue<std::string>::Parse(*style_sheet_id_value, errors);
  }
  const base::Value* name_value = dict.Find("name");
  if (name_value) {
    errors->SetName("name");
    result->name_ = internal::FromValue<std::string>::Parse(*name_value, errors);
  }
  const base::Value* physical_axes_value = dict.Find("physicalAxes");
  if (physical_axes_value) {
    errors->SetName("physicalAxes");
    result->physical_axes_ = internal::FromValue<::headless::dom::PhysicalAxes>::Parse(*physical_axes_value, errors);
  }
  const base::Value* logical_axes_value = dict.Find("logicalAxes");
  if (logical_axes_value) {
    errors->SetName("logicalAxes");
    result->logical_axes_ = internal::FromValue<::headless::dom::LogicalAxes>::Parse(*logical_axes_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CSSContainerQuery::Serialize() const {
  base::Value::Dict result;
  result.Set("text", internal::ToValue(text_));
  if (range_)
    result.Set("range", internal::ToValue(*range_.value()));
  if (style_sheet_id_)
    result.Set("styleSheetId", internal::ToValue(style_sheet_id_.value()));
  if (name_)
    result.Set("name", internal::ToValue(name_.value()));
  if (physical_axes_)
    result.Set("physicalAxes", internal::ToValue(physical_axes_.value()));
  if (logical_axes_)
    result.Set("logicalAxes", internal::ToValue(logical_axes_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<CSSContainerQuery> CSSContainerQuery::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CSSContainerQuery> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CSSSupports> CSSSupports::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CSSSupports");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CSSSupports> result(new CSSSupports());
  errors->Push();
  errors->SetName("CSSSupports");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* text_value = dict.Find("text");
  if (text_value) {
    errors->SetName("text");
    result->text_ = internal::FromValue<std::string>::Parse(*text_value, errors);
  } else {
    errors->AddError("required property missing: text");
  }
  const base::Value* active_value = dict.Find("active");
  if (active_value) {
    errors->SetName("active");
    result->active_ = internal::FromValue<bool>::Parse(*active_value, errors);
  } else {
    errors->AddError("required property missing: active");
  }
  const base::Value* range_value = dict.Find("range");
  if (range_value) {
    errors->SetName("range");
    result->range_ = internal::FromValue<::headless::css::SourceRange>::Parse(*range_value, errors);
  }
  const base::Value* style_sheet_id_value = dict.Find("styleSheetId");
  if (style_sheet_id_value) {
    errors->SetName("styleSheetId");
    result->style_sheet_id_ = internal::FromValue<std::string>::Parse(*style_sheet_id_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CSSSupports::Serialize() const {
  base::Value::Dict result;
  result.Set("text", internal::ToValue(text_));
  result.Set("active", internal::ToValue(active_));
  if (range_)
    result.Set("range", internal::ToValue(*range_.value()));
  if (style_sheet_id_)
    result.Set("styleSheetId", internal::ToValue(style_sheet_id_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<CSSSupports> CSSSupports::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CSSSupports> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CSSScope> CSSScope::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CSSScope");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CSSScope> result(new CSSScope());
  errors->Push();
  errors->SetName("CSSScope");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* text_value = dict.Find("text");
  if (text_value) {
    errors->SetName("text");
    result->text_ = internal::FromValue<std::string>::Parse(*text_value, errors);
  } else {
    errors->AddError("required property missing: text");
  }
  const base::Value* range_value = dict.Find("range");
  if (range_value) {
    errors->SetName("range");
    result->range_ = internal::FromValue<::headless::css::SourceRange>::Parse(*range_value, errors);
  }
  const base::Value* style_sheet_id_value = dict.Find("styleSheetId");
  if (style_sheet_id_value) {
    errors->SetName("styleSheetId");
    result->style_sheet_id_ = internal::FromValue<std::string>::Parse(*style_sheet_id_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CSSScope::Serialize() const {
  base::Value::Dict result;
  result.Set("text", internal::ToValue(text_));
  if (range_)
    result.Set("range", internal::ToValue(*range_.value()));
  if (style_sheet_id_)
    result.Set("styleSheetId", internal::ToValue(style_sheet_id_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<CSSScope> CSSScope::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CSSScope> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CSSLayer> CSSLayer::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CSSLayer");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CSSLayer> result(new CSSLayer());
  errors->Push();
  errors->SetName("CSSLayer");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* text_value = dict.Find("text");
  if (text_value) {
    errors->SetName("text");
    result->text_ = internal::FromValue<std::string>::Parse(*text_value, errors);
  } else {
    errors->AddError("required property missing: text");
  }
  const base::Value* range_value = dict.Find("range");
  if (range_value) {
    errors->SetName("range");
    result->range_ = internal::FromValue<::headless::css::SourceRange>::Parse(*range_value, errors);
  }
  const base::Value* style_sheet_id_value = dict.Find("styleSheetId");
  if (style_sheet_id_value) {
    errors->SetName("styleSheetId");
    result->style_sheet_id_ = internal::FromValue<std::string>::Parse(*style_sheet_id_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CSSLayer::Serialize() const {
  base::Value::Dict result;
  result.Set("text", internal::ToValue(text_));
  if (range_)
    result.Set("range", internal::ToValue(*range_.value()));
  if (style_sheet_id_)
    result.Set("styleSheetId", internal::ToValue(style_sheet_id_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<CSSLayer> CSSLayer::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CSSLayer> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CSSLayerData> CSSLayerData::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CSSLayerData");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CSSLayerData> result(new CSSLayerData());
  errors->Push();
  errors->SetName("CSSLayerData");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* name_value = dict.Find("name");
  if (name_value) {
    errors->SetName("name");
    result->name_ = internal::FromValue<std::string>::Parse(*name_value, errors);
  } else {
    errors->AddError("required property missing: name");
  }
  const base::Value* sub_layers_value = dict.Find("subLayers");
  if (sub_layers_value) {
    errors->SetName("subLayers");
    result->sub_layers_ = internal::FromValue<std::vector<std::unique_ptr<::headless::css::CSSLayerData>>>::Parse(*sub_layers_value, errors);
  }
  const base::Value* order_value = dict.Find("order");
  if (order_value) {
    errors->SetName("order");
    result->order_ = internal::FromValue<double>::Parse(*order_value, errors);
  } else {
    errors->AddError("required property missing: order");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CSSLayerData::Serialize() const {
  base::Value::Dict result;
  result.Set("name", internal::ToValue(name_));
  if (sub_layers_)
    result.Set("subLayers", internal::ToValue(sub_layers_.value()));
  result.Set("order", internal::ToValue(order_));
  return base::Value(std::move(result));
}

std::unique_ptr<CSSLayerData> CSSLayerData::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CSSLayerData> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<PlatformFontUsage> PlatformFontUsage::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("PlatformFontUsage");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<PlatformFontUsage> result(new PlatformFontUsage());
  errors->Push();
  errors->SetName("PlatformFontUsage");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* family_name_value = dict.Find("familyName");
  if (family_name_value) {
    errors->SetName("familyName");
    result->family_name_ = internal::FromValue<std::string>::Parse(*family_name_value, errors);
  } else {
    errors->AddError("required property missing: familyName");
  }
  const base::Value* is_custom_font_value = dict.Find("isCustomFont");
  if (is_custom_font_value) {
    errors->SetName("isCustomFont");
    result->is_custom_font_ = internal::FromValue<bool>::Parse(*is_custom_font_value, errors);
  } else {
    errors->AddError("required property missing: isCustomFont");
  }
  const base::Value* glyph_count_value = dict.Find("glyphCount");
  if (glyph_count_value) {
    errors->SetName("glyphCount");
    result->glyph_count_ = internal::FromValue<double>::Parse(*glyph_count_value, errors);
  } else {
    errors->AddError("required property missing: glyphCount");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value PlatformFontUsage::Serialize() const {
  base::Value::Dict result;
  result.Set("familyName", internal::ToValue(family_name_));
  result.Set("isCustomFont", internal::ToValue(is_custom_font_));
  result.Set("glyphCount", internal::ToValue(glyph_count_));
  return base::Value(std::move(result));
}

std::unique_ptr<PlatformFontUsage> PlatformFontUsage::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<PlatformFontUsage> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<FontVariationAxis> FontVariationAxis::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("FontVariationAxis");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<FontVariationAxis> result(new FontVariationAxis());
  errors->Push();
  errors->SetName("FontVariationAxis");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* tag_value = dict.Find("tag");
  if (tag_value) {
    errors->SetName("tag");
    result->tag_ = internal::FromValue<std::string>::Parse(*tag_value, errors);
  } else {
    errors->AddError("required property missing: tag");
  }
  const base::Value* name_value = dict.Find("name");
  if (name_value) {
    errors->SetName("name");
    result->name_ = internal::FromValue<std::string>::Parse(*name_value, errors);
  } else {
    errors->AddError("required property missing: name");
  }
  const base::Value* min_value_value = dict.Find("minValue");
  if (min_value_value) {
    errors->SetName("minValue");
    result->min_value_ = internal::FromValue<double>::Parse(*min_value_value, errors);
  } else {
    errors->AddError("required property missing: minValue");
  }
  const base::Value* max_value_value = dict.Find("maxValue");
  if (max_value_value) {
    errors->SetName("maxValue");
    result->max_value_ = internal::FromValue<double>::Parse(*max_value_value, errors);
  } else {
    errors->AddError("required property missing: maxValue");
  }
  const base::Value* default_value_value = dict.Find("defaultValue");
  if (default_value_value) {
    errors->SetName("defaultValue");
    result->default_value_ = internal::FromValue<double>::Parse(*default_value_value, errors);
  } else {
    errors->AddError("required property missing: defaultValue");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value FontVariationAxis::Serialize() const {
  base::Value::Dict result;
  result.Set("tag", internal::ToValue(tag_));
  result.Set("name", internal::ToValue(name_));
  result.Set("minValue", internal::ToValue(min_value_));
  result.Set("maxValue", internal::ToValue(max_value_));
  result.Set("defaultValue", internal::ToValue(default_value_));
  return base::Value(std::move(result));
}

std::unique_ptr<FontVariationAxis> FontVariationAxis::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<FontVariationAxis> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<FontFace> FontFace::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("FontFace");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<FontFace> result(new FontFace());
  errors->Push();
  errors->SetName("FontFace");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* font_family_value = dict.Find("fontFamily");
  if (font_family_value) {
    errors->SetName("fontFamily");
    result->font_family_ = internal::FromValue<std::string>::Parse(*font_family_value, errors);
  } else {
    errors->AddError("required property missing: fontFamily");
  }
  const base::Value* font_style_value = dict.Find("fontStyle");
  if (font_style_value) {
    errors->SetName("fontStyle");
    result->font_style_ = internal::FromValue<std::string>::Parse(*font_style_value, errors);
  } else {
    errors->AddError("required property missing: fontStyle");
  }
  const base::Value* font_variant_value = dict.Find("fontVariant");
  if (font_variant_value) {
    errors->SetName("fontVariant");
    result->font_variant_ = internal::FromValue<std::string>::Parse(*font_variant_value, errors);
  } else {
    errors->AddError("required property missing: fontVariant");
  }
  const base::Value* font_weight_value = dict.Find("fontWeight");
  if (font_weight_value) {
    errors->SetName("fontWeight");
    result->font_weight_ = internal::FromValue<std::string>::Parse(*font_weight_value, errors);
  } else {
    errors->AddError("required property missing: fontWeight");
  }
  const base::Value* font_stretch_value = dict.Find("fontStretch");
  if (font_stretch_value) {
    errors->SetName("fontStretch");
    result->font_stretch_ = internal::FromValue<std::string>::Parse(*font_stretch_value, errors);
  } else {
    errors->AddError("required property missing: fontStretch");
  }
  const base::Value* font_display_value = dict.Find("fontDisplay");
  if (font_display_value) {
    errors->SetName("fontDisplay");
    result->font_display_ = internal::FromValue<std::string>::Parse(*font_display_value, errors);
  } else {
    errors->AddError("required property missing: fontDisplay");
  }
  const base::Value* unicode_range_value = dict.Find("unicodeRange");
  if (unicode_range_value) {
    errors->SetName("unicodeRange");
    result->unicode_range_ = internal::FromValue<std::string>::Parse(*unicode_range_value, errors);
  } else {
    errors->AddError("required property missing: unicodeRange");
  }
  const base::Value* src_value = dict.Find("src");
  if (src_value) {
    errors->SetName("src");
    result->src_ = internal::FromValue<std::string>::Parse(*src_value, errors);
  } else {
    errors->AddError("required property missing: src");
  }
  const base::Value* platform_font_family_value = dict.Find("platformFontFamily");
  if (platform_font_family_value) {
    errors->SetName("platformFontFamily");
    result->platform_font_family_ = internal::FromValue<std::string>::Parse(*platform_font_family_value, errors);
  } else {
    errors->AddError("required property missing: platformFontFamily");
  }
  const base::Value* font_variation_axes_value = dict.Find("fontVariationAxes");
  if (font_variation_axes_value) {
    errors->SetName("fontVariationAxes");
    result->font_variation_axes_ = internal::FromValue<std::vector<std::unique_ptr<::headless::css::FontVariationAxis>>>::Parse(*font_variation_axes_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value FontFace::Serialize() const {
  base::Value::Dict result;
  result.Set("fontFamily", internal::ToValue(font_family_));
  result.Set("fontStyle", internal::ToValue(font_style_));
  result.Set("fontVariant", internal::ToValue(font_variant_));
  result.Set("fontWeight", internal::ToValue(font_weight_));
  result.Set("fontStretch", internal::ToValue(font_stretch_));
  result.Set("fontDisplay", internal::ToValue(font_display_));
  result.Set("unicodeRange", internal::ToValue(unicode_range_));
  result.Set("src", internal::ToValue(src_));
  result.Set("platformFontFamily", internal::ToValue(platform_font_family_));
  if (font_variation_axes_)
    result.Set("fontVariationAxes", internal::ToValue(font_variation_axes_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<FontFace> FontFace::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<FontFace> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CSSTryRule> CSSTryRule::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CSSTryRule");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CSSTryRule> result(new CSSTryRule());
  errors->Push();
  errors->SetName("CSSTryRule");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* style_sheet_id_value = dict.Find("styleSheetId");
  if (style_sheet_id_value) {
    errors->SetName("styleSheetId");
    result->style_sheet_id_ = internal::FromValue<std::string>::Parse(*style_sheet_id_value, errors);
  }
  const base::Value* origin_value = dict.Find("origin");
  if (origin_value) {
    errors->SetName("origin");
    result->origin_ = internal::FromValue<::headless::css::StyleSheetOrigin>::Parse(*origin_value, errors);
  } else {
    errors->AddError("required property missing: origin");
  }
  const base::Value* style_value = dict.Find("style");
  if (style_value) {
    errors->SetName("style");
    result->style_ = internal::FromValue<::headless::css::CSSStyle>::Parse(*style_value, errors);
  } else {
    errors->AddError("required property missing: style");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CSSTryRule::Serialize() const {
  base::Value::Dict result;
  if (style_sheet_id_)
    result.Set("styleSheetId", internal::ToValue(style_sheet_id_.value()));
  result.Set("origin", internal::ToValue(origin_));
  result.Set("style", internal::ToValue(*style_));
  return base::Value(std::move(result));
}

std::unique_ptr<CSSTryRule> CSSTryRule::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CSSTryRule> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CSSPositionFallbackRule> CSSPositionFallbackRule::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CSSPositionFallbackRule");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CSSPositionFallbackRule> result(new CSSPositionFallbackRule());
  errors->Push();
  errors->SetName("CSSPositionFallbackRule");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* name_value = dict.Find("name");
  if (name_value) {
    errors->SetName("name");
    result->name_ = internal::FromValue<::headless::css::Value>::Parse(*name_value, errors);
  } else {
    errors->AddError("required property missing: name");
  }
  const base::Value* try_rules_value = dict.Find("tryRules");
  if (try_rules_value) {
    errors->SetName("tryRules");
    result->try_rules_ = internal::FromValue<std::vector<std::unique_ptr<::headless::css::CSSTryRule>>>::Parse(*try_rules_value, errors);
  } else {
    errors->AddError("required property missing: tryRules");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CSSPositionFallbackRule::Serialize() const {
  base::Value::Dict result;
  result.Set("name", internal::ToValue(*name_));
  result.Set("tryRules", internal::ToValue(try_rules_));
  return base::Value(std::move(result));
}

std::unique_ptr<CSSPositionFallbackRule> CSSPositionFallbackRule::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CSSPositionFallbackRule> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CSSKeyframesRule> CSSKeyframesRule::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CSSKeyframesRule");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CSSKeyframesRule> result(new CSSKeyframesRule());
  errors->Push();
  errors->SetName("CSSKeyframesRule");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* animation_name_value = dict.Find("animationName");
  if (animation_name_value) {
    errors->SetName("animationName");
    result->animation_name_ = internal::FromValue<::headless::css::Value>::Parse(*animation_name_value, errors);
  } else {
    errors->AddError("required property missing: animationName");
  }
  const base::Value* keyframes_value = dict.Find("keyframes");
  if (keyframes_value) {
    errors->SetName("keyframes");
    result->keyframes_ = internal::FromValue<std::vector<std::unique_ptr<::headless::css::CSSKeyframeRule>>>::Parse(*keyframes_value, errors);
  } else {
    errors->AddError("required property missing: keyframes");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CSSKeyframesRule::Serialize() const {
  base::Value::Dict result;
  result.Set("animationName", internal::ToValue(*animation_name_));
  result.Set("keyframes", internal::ToValue(keyframes_));
  return base::Value(std::move(result));
}

std::unique_ptr<CSSKeyframesRule> CSSKeyframesRule::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CSSKeyframesRule> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CSSPropertyRegistration> CSSPropertyRegistration::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CSSPropertyRegistration");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CSSPropertyRegistration> result(new CSSPropertyRegistration());
  errors->Push();
  errors->SetName("CSSPropertyRegistration");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* property_name_value = dict.Find("propertyName");
  if (property_name_value) {
    errors->SetName("propertyName");
    result->property_name_ = internal::FromValue<std::string>::Parse(*property_name_value, errors);
  } else {
    errors->AddError("required property missing: propertyName");
  }
  const base::Value* initial_value_value = dict.Find("initialValue");
  if (initial_value_value) {
    errors->SetName("initialValue");
    result->initial_value_ = internal::FromValue<::headless::css::Value>::Parse(*initial_value_value, errors);
  }
  const base::Value* inherits_value = dict.Find("inherits");
  if (inherits_value) {
    errors->SetName("inherits");
    result->inherits_ = internal::FromValue<bool>::Parse(*inherits_value, errors);
  } else {
    errors->AddError("required property missing: inherits");
  }
  const base::Value* syntax_value = dict.Find("syntax");
  if (syntax_value) {
    errors->SetName("syntax");
    result->syntax_ = internal::FromValue<std::string>::Parse(*syntax_value, errors);
  } else {
    errors->AddError("required property missing: syntax");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CSSPropertyRegistration::Serialize() const {
  base::Value::Dict result;
  result.Set("propertyName", internal::ToValue(property_name_));
  if (initial_value_)
    result.Set("initialValue", internal::ToValue(*initial_value_.value()));
  result.Set("inherits", internal::ToValue(inherits_));
  result.Set("syntax", internal::ToValue(syntax_));
  return base::Value(std::move(result));
}

std::unique_ptr<CSSPropertyRegistration> CSSPropertyRegistration::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CSSPropertyRegistration> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CSSPropertyRule> CSSPropertyRule::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CSSPropertyRule");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CSSPropertyRule> result(new CSSPropertyRule());
  errors->Push();
  errors->SetName("CSSPropertyRule");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* style_sheet_id_value = dict.Find("styleSheetId");
  if (style_sheet_id_value) {
    errors->SetName("styleSheetId");
    result->style_sheet_id_ = internal::FromValue<std::string>::Parse(*style_sheet_id_value, errors);
  }
  const base::Value* origin_value = dict.Find("origin");
  if (origin_value) {
    errors->SetName("origin");
    result->origin_ = internal::FromValue<::headless::css::StyleSheetOrigin>::Parse(*origin_value, errors);
  } else {
    errors->AddError("required property missing: origin");
  }
  const base::Value* property_name_value = dict.Find("propertyName");
  if (property_name_value) {
    errors->SetName("propertyName");
    result->property_name_ = internal::FromValue<::headless::css::Value>::Parse(*property_name_value, errors);
  } else {
    errors->AddError("required property missing: propertyName");
  }
  const base::Value* style_value = dict.Find("style");
  if (style_value) {
    errors->SetName("style");
    result->style_ = internal::FromValue<::headless::css::CSSStyle>::Parse(*style_value, errors);
  } else {
    errors->AddError("required property missing: style");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CSSPropertyRule::Serialize() const {
  base::Value::Dict result;
  if (style_sheet_id_)
    result.Set("styleSheetId", internal::ToValue(style_sheet_id_.value()));
  result.Set("origin", internal::ToValue(origin_));
  result.Set("propertyName", internal::ToValue(*property_name_));
  result.Set("style", internal::ToValue(*style_));
  return base::Value(std::move(result));
}

std::unique_ptr<CSSPropertyRule> CSSPropertyRule::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CSSPropertyRule> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CSSKeyframeRule> CSSKeyframeRule::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CSSKeyframeRule");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CSSKeyframeRule> result(new CSSKeyframeRule());
  errors->Push();
  errors->SetName("CSSKeyframeRule");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* style_sheet_id_value = dict.Find("styleSheetId");
  if (style_sheet_id_value) {
    errors->SetName("styleSheetId");
    result->style_sheet_id_ = internal::FromValue<std::string>::Parse(*style_sheet_id_value, errors);
  }
  const base::Value* origin_value = dict.Find("origin");
  if (origin_value) {
    errors->SetName("origin");
    result->origin_ = internal::FromValue<::headless::css::StyleSheetOrigin>::Parse(*origin_value, errors);
  } else {
    errors->AddError("required property missing: origin");
  }
  const base::Value* key_text_value = dict.Find("keyText");
  if (key_text_value) {
    errors->SetName("keyText");
    result->key_text_ = internal::FromValue<::headless::css::Value>::Parse(*key_text_value, errors);
  } else {
    errors->AddError("required property missing: keyText");
  }
  const base::Value* style_value = dict.Find("style");
  if (style_value) {
    errors->SetName("style");
    result->style_ = internal::FromValue<::headless::css::CSSStyle>::Parse(*style_value, errors);
  } else {
    errors->AddError("required property missing: style");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CSSKeyframeRule::Serialize() const {
  base::Value::Dict result;
  if (style_sheet_id_)
    result.Set("styleSheetId", internal::ToValue(style_sheet_id_.value()));
  result.Set("origin", internal::ToValue(origin_));
  result.Set("keyText", internal::ToValue(*key_text_));
  result.Set("style", internal::ToValue(*style_));
  return base::Value(std::move(result));
}

std::unique_ptr<CSSKeyframeRule> CSSKeyframeRule::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CSSKeyframeRule> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<StyleDeclarationEdit> StyleDeclarationEdit::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("StyleDeclarationEdit");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<StyleDeclarationEdit> result(new StyleDeclarationEdit());
  errors->Push();
  errors->SetName("StyleDeclarationEdit");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* style_sheet_id_value = dict.Find("styleSheetId");
  if (style_sheet_id_value) {
    errors->SetName("styleSheetId");
    result->style_sheet_id_ = internal::FromValue<std::string>::Parse(*style_sheet_id_value, errors);
  } else {
    errors->AddError("required property missing: styleSheetId");
  }
  const base::Value* range_value = dict.Find("range");
  if (range_value) {
    errors->SetName("range");
    result->range_ = internal::FromValue<::headless::css::SourceRange>::Parse(*range_value, errors);
  } else {
    errors->AddError("required property missing: range");
  }
  const base::Value* text_value = dict.Find("text");
  if (text_value) {
    errors->SetName("text");
    result->text_ = internal::FromValue<std::string>::Parse(*text_value, errors);
  } else {
    errors->AddError("required property missing: text");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value StyleDeclarationEdit::Serialize() const {
  base::Value::Dict result;
  result.Set("styleSheetId", internal::ToValue(style_sheet_id_));
  result.Set("range", internal::ToValue(*range_));
  result.Set("text", internal::ToValue(text_));
  return base::Value(std::move(result));
}

std::unique_ptr<StyleDeclarationEdit> StyleDeclarationEdit::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<StyleDeclarationEdit> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<AddRuleParams> AddRuleParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("AddRuleParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<AddRuleParams> result(new AddRuleParams());
  errors->Push();
  errors->SetName("AddRuleParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* style_sheet_id_value = dict.Find("styleSheetId");
  if (style_sheet_id_value) {
    errors->SetName("styleSheetId");
    result->style_sheet_id_ = internal::FromValue<std::string>::Parse(*style_sheet_id_value, errors);
  } else {
    errors->AddError("required property missing: styleSheetId");
  }
  const base::Value* rule_text_value = dict.Find("ruleText");
  if (rule_text_value) {
    errors->SetName("ruleText");
    result->rule_text_ = internal::FromValue<std::string>::Parse(*rule_text_value, errors);
  } else {
    errors->AddError("required property missing: ruleText");
  }
  const base::Value* location_value = dict.Find("location");
  if (location_value) {
    errors->SetName("location");
    result->location_ = internal::FromValue<::headless::css::SourceRange>::Parse(*location_value, errors);
  } else {
    errors->AddError("required property missing: location");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value AddRuleParams::Serialize() const {
  base::Value::Dict result;
  result.Set("styleSheetId", internal::ToValue(style_sheet_id_));
  result.Set("ruleText", internal::ToValue(rule_text_));
  result.Set("location", internal::ToValue(*location_));
  return base::Value(std::move(result));
}

std::unique_ptr<AddRuleParams> AddRuleParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<AddRuleParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<AddRuleResult> AddRuleResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("AddRuleResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<AddRuleResult> result(new AddRuleResult());
  errors->Push();
  errors->SetName("AddRuleResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* rule_value = dict.Find("rule");
  if (rule_value) {
    errors->SetName("rule");
    result->rule_ = internal::FromValue<::headless::css::CSSRule>::Parse(*rule_value, errors);
  } else {
    errors->AddError("required property missing: rule");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value AddRuleResult::Serialize() const {
  base::Value::Dict result;
  result.Set("rule", internal::ToValue(*rule_));
  return base::Value(std::move(result));
}

std::unique_ptr<AddRuleResult> AddRuleResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<AddRuleResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CollectClassNamesParams> CollectClassNamesParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CollectClassNamesParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CollectClassNamesParams> result(new CollectClassNamesParams());
  errors->Push();
  errors->SetName("CollectClassNamesParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* style_sheet_id_value = dict.Find("styleSheetId");
  if (style_sheet_id_value) {
    errors->SetName("styleSheetId");
    result->style_sheet_id_ = internal::FromValue<std::string>::Parse(*style_sheet_id_value, errors);
  } else {
    errors->AddError("required property missing: styleSheetId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CollectClassNamesParams::Serialize() const {
  base::Value::Dict result;
  result.Set("styleSheetId", internal::ToValue(style_sheet_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<CollectClassNamesParams> CollectClassNamesParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CollectClassNamesParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CollectClassNamesResult> CollectClassNamesResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CollectClassNamesResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CollectClassNamesResult> result(new CollectClassNamesResult());
  errors->Push();
  errors->SetName("CollectClassNamesResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* class_names_value = dict.Find("classNames");
  if (class_names_value) {
    errors->SetName("classNames");
    result->class_names_ = internal::FromValue<std::vector<std::string>>::Parse(*class_names_value, errors);
  } else {
    errors->AddError("required property missing: classNames");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CollectClassNamesResult::Serialize() const {
  base::Value::Dict result;
  result.Set("classNames", internal::ToValue(class_names_));
  return base::Value(std::move(result));
}

std::unique_ptr<CollectClassNamesResult> CollectClassNamesResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CollectClassNamesResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CreateStyleSheetParams> CreateStyleSheetParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CreateStyleSheetParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CreateStyleSheetParams> result(new CreateStyleSheetParams());
  errors->Push();
  errors->SetName("CreateStyleSheetParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* frame_id_value = dict.Find("frameId");
  if (frame_id_value) {
    errors->SetName("frameId");
    result->frame_id_ = internal::FromValue<std::string>::Parse(*frame_id_value, errors);
  } else {
    errors->AddError("required property missing: frameId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CreateStyleSheetParams::Serialize() const {
  base::Value::Dict result;
  result.Set("frameId", internal::ToValue(frame_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<CreateStyleSheetParams> CreateStyleSheetParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CreateStyleSheetParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CreateStyleSheetResult> CreateStyleSheetResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CreateStyleSheetResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CreateStyleSheetResult> result(new CreateStyleSheetResult());
  errors->Push();
  errors->SetName("CreateStyleSheetResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* style_sheet_id_value = dict.Find("styleSheetId");
  if (style_sheet_id_value) {
    errors->SetName("styleSheetId");
    result->style_sheet_id_ = internal::FromValue<std::string>::Parse(*style_sheet_id_value, errors);
  } else {
    errors->AddError("required property missing: styleSheetId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CreateStyleSheetResult::Serialize() const {
  base::Value::Dict result;
  result.Set("styleSheetId", internal::ToValue(style_sheet_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<CreateStyleSheetResult> CreateStyleSheetResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CreateStyleSheetResult> result = Parse(Serialize(), &errors);
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
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value EnableParams::Serialize() const {
  base::Value::Dict result;
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


std::unique_ptr<ForcePseudoStateParams> ForcePseudoStateParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ForcePseudoStateParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ForcePseudoStateParams> result(new ForcePseudoStateParams());
  errors->Push();
  errors->SetName("ForcePseudoStateParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* node_id_value = dict.Find("nodeId");
  if (node_id_value) {
    errors->SetName("nodeId");
    result->node_id_ = internal::FromValue<int>::Parse(*node_id_value, errors);
  } else {
    errors->AddError("required property missing: nodeId");
  }
  const base::Value* forced_pseudo_classes_value = dict.Find("forcedPseudoClasses");
  if (forced_pseudo_classes_value) {
    errors->SetName("forcedPseudoClasses");
    result->forced_pseudo_classes_ = internal::FromValue<std::vector<std::string>>::Parse(*forced_pseudo_classes_value, errors);
  } else {
    errors->AddError("required property missing: forcedPseudoClasses");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ForcePseudoStateParams::Serialize() const {
  base::Value::Dict result;
  result.Set("nodeId", internal::ToValue(node_id_));
  result.Set("forcedPseudoClasses", internal::ToValue(forced_pseudo_classes_));
  return base::Value(std::move(result));
}

std::unique_ptr<ForcePseudoStateParams> ForcePseudoStateParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ForcePseudoStateParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ForcePseudoStateResult> ForcePseudoStateResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ForcePseudoStateResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ForcePseudoStateResult> result(new ForcePseudoStateResult());
  errors->Push();
  errors->SetName("ForcePseudoStateResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ForcePseudoStateResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<ForcePseudoStateResult> ForcePseudoStateResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ForcePseudoStateResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetBackgroundColorsParams> GetBackgroundColorsParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetBackgroundColorsParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetBackgroundColorsParams> result(new GetBackgroundColorsParams());
  errors->Push();
  errors->SetName("GetBackgroundColorsParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* node_id_value = dict.Find("nodeId");
  if (node_id_value) {
    errors->SetName("nodeId");
    result->node_id_ = internal::FromValue<int>::Parse(*node_id_value, errors);
  } else {
    errors->AddError("required property missing: nodeId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetBackgroundColorsParams::Serialize() const {
  base::Value::Dict result;
  result.Set("nodeId", internal::ToValue(node_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetBackgroundColorsParams> GetBackgroundColorsParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetBackgroundColorsParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetBackgroundColorsResult> GetBackgroundColorsResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetBackgroundColorsResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetBackgroundColorsResult> result(new GetBackgroundColorsResult());
  errors->Push();
  errors->SetName("GetBackgroundColorsResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* background_colors_value = dict.Find("backgroundColors");
  if (background_colors_value) {
    errors->SetName("backgroundColors");
    result->background_colors_ = internal::FromValue<std::vector<std::string>>::Parse(*background_colors_value, errors);
  }
  const base::Value* computed_font_size_value = dict.Find("computedFontSize");
  if (computed_font_size_value) {
    errors->SetName("computedFontSize");
    result->computed_font_size_ = internal::FromValue<std::string>::Parse(*computed_font_size_value, errors);
  }
  const base::Value* computed_font_weight_value = dict.Find("computedFontWeight");
  if (computed_font_weight_value) {
    errors->SetName("computedFontWeight");
    result->computed_font_weight_ = internal::FromValue<std::string>::Parse(*computed_font_weight_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetBackgroundColorsResult::Serialize() const {
  base::Value::Dict result;
  if (background_colors_)
    result.Set("backgroundColors", internal::ToValue(background_colors_.value()));
  if (computed_font_size_)
    result.Set("computedFontSize", internal::ToValue(computed_font_size_.value()));
  if (computed_font_weight_)
    result.Set("computedFontWeight", internal::ToValue(computed_font_weight_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<GetBackgroundColorsResult> GetBackgroundColorsResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetBackgroundColorsResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetComputedStyleForNodeParams> GetComputedStyleForNodeParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetComputedStyleForNodeParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetComputedStyleForNodeParams> result(new GetComputedStyleForNodeParams());
  errors->Push();
  errors->SetName("GetComputedStyleForNodeParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* node_id_value = dict.Find("nodeId");
  if (node_id_value) {
    errors->SetName("nodeId");
    result->node_id_ = internal::FromValue<int>::Parse(*node_id_value, errors);
  } else {
    errors->AddError("required property missing: nodeId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetComputedStyleForNodeParams::Serialize() const {
  base::Value::Dict result;
  result.Set("nodeId", internal::ToValue(node_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetComputedStyleForNodeParams> GetComputedStyleForNodeParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetComputedStyleForNodeParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetComputedStyleForNodeResult> GetComputedStyleForNodeResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetComputedStyleForNodeResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetComputedStyleForNodeResult> result(new GetComputedStyleForNodeResult());
  errors->Push();
  errors->SetName("GetComputedStyleForNodeResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* computed_style_value = dict.Find("computedStyle");
  if (computed_style_value) {
    errors->SetName("computedStyle");
    result->computed_style_ = internal::FromValue<std::vector<std::unique_ptr<::headless::css::CSSComputedStyleProperty>>>::Parse(*computed_style_value, errors);
  } else {
    errors->AddError("required property missing: computedStyle");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetComputedStyleForNodeResult::Serialize() const {
  base::Value::Dict result;
  result.Set("computedStyle", internal::ToValue(computed_style_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetComputedStyleForNodeResult> GetComputedStyleForNodeResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetComputedStyleForNodeResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetInlineStylesForNodeParams> GetInlineStylesForNodeParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetInlineStylesForNodeParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetInlineStylesForNodeParams> result(new GetInlineStylesForNodeParams());
  errors->Push();
  errors->SetName("GetInlineStylesForNodeParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* node_id_value = dict.Find("nodeId");
  if (node_id_value) {
    errors->SetName("nodeId");
    result->node_id_ = internal::FromValue<int>::Parse(*node_id_value, errors);
  } else {
    errors->AddError("required property missing: nodeId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetInlineStylesForNodeParams::Serialize() const {
  base::Value::Dict result;
  result.Set("nodeId", internal::ToValue(node_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetInlineStylesForNodeParams> GetInlineStylesForNodeParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetInlineStylesForNodeParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetInlineStylesForNodeResult> GetInlineStylesForNodeResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetInlineStylesForNodeResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetInlineStylesForNodeResult> result(new GetInlineStylesForNodeResult());
  errors->Push();
  errors->SetName("GetInlineStylesForNodeResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* inline_style_value = dict.Find("inlineStyle");
  if (inline_style_value) {
    errors->SetName("inlineStyle");
    result->inline_style_ = internal::FromValue<::headless::css::CSSStyle>::Parse(*inline_style_value, errors);
  }
  const base::Value* attributes_style_value = dict.Find("attributesStyle");
  if (attributes_style_value) {
    errors->SetName("attributesStyle");
    result->attributes_style_ = internal::FromValue<::headless::css::CSSStyle>::Parse(*attributes_style_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetInlineStylesForNodeResult::Serialize() const {
  base::Value::Dict result;
  if (inline_style_)
    result.Set("inlineStyle", internal::ToValue(*inline_style_.value()));
  if (attributes_style_)
    result.Set("attributesStyle", internal::ToValue(*attributes_style_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<GetInlineStylesForNodeResult> GetInlineStylesForNodeResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetInlineStylesForNodeResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetMatchedStylesForNodeParams> GetMatchedStylesForNodeParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetMatchedStylesForNodeParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetMatchedStylesForNodeParams> result(new GetMatchedStylesForNodeParams());
  errors->Push();
  errors->SetName("GetMatchedStylesForNodeParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* node_id_value = dict.Find("nodeId");
  if (node_id_value) {
    errors->SetName("nodeId");
    result->node_id_ = internal::FromValue<int>::Parse(*node_id_value, errors);
  } else {
    errors->AddError("required property missing: nodeId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetMatchedStylesForNodeParams::Serialize() const {
  base::Value::Dict result;
  result.Set("nodeId", internal::ToValue(node_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetMatchedStylesForNodeParams> GetMatchedStylesForNodeParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetMatchedStylesForNodeParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetMatchedStylesForNodeResult> GetMatchedStylesForNodeResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetMatchedStylesForNodeResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetMatchedStylesForNodeResult> result(new GetMatchedStylesForNodeResult());
  errors->Push();
  errors->SetName("GetMatchedStylesForNodeResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* inline_style_value = dict.Find("inlineStyle");
  if (inline_style_value) {
    errors->SetName("inlineStyle");
    result->inline_style_ = internal::FromValue<::headless::css::CSSStyle>::Parse(*inline_style_value, errors);
  }
  const base::Value* attributes_style_value = dict.Find("attributesStyle");
  if (attributes_style_value) {
    errors->SetName("attributesStyle");
    result->attributes_style_ = internal::FromValue<::headless::css::CSSStyle>::Parse(*attributes_style_value, errors);
  }
  const base::Value* matchedcss_rules_value = dict.Find("matchedCSSRules");
  if (matchedcss_rules_value) {
    errors->SetName("matchedCSSRules");
    result->matchedcss_rules_ = internal::FromValue<std::vector<std::unique_ptr<::headless::css::RuleMatch>>>::Parse(*matchedcss_rules_value, errors);
  }
  const base::Value* pseudo_elements_value = dict.Find("pseudoElements");
  if (pseudo_elements_value) {
    errors->SetName("pseudoElements");
    result->pseudo_elements_ = internal::FromValue<std::vector<std::unique_ptr<::headless::css::PseudoElementMatches>>>::Parse(*pseudo_elements_value, errors);
  }
  const base::Value* inherited_value = dict.Find("inherited");
  if (inherited_value) {
    errors->SetName("inherited");
    result->inherited_ = internal::FromValue<std::vector<std::unique_ptr<::headless::css::InheritedStyleEntry>>>::Parse(*inherited_value, errors);
  }
  const base::Value* inherited_pseudo_elements_value = dict.Find("inheritedPseudoElements");
  if (inherited_pseudo_elements_value) {
    errors->SetName("inheritedPseudoElements");
    result->inherited_pseudo_elements_ = internal::FromValue<std::vector<std::unique_ptr<::headless::css::InheritedPseudoElementMatches>>>::Parse(*inherited_pseudo_elements_value, errors);
  }
  const base::Value* css_keyframes_rules_value = dict.Find("cssKeyframesRules");
  if (css_keyframes_rules_value) {
    errors->SetName("cssKeyframesRules");
    result->css_keyframes_rules_ = internal::FromValue<std::vector<std::unique_ptr<::headless::css::CSSKeyframesRule>>>::Parse(*css_keyframes_rules_value, errors);
  }
  const base::Value* css_position_fallback_rules_value = dict.Find("cssPositionFallbackRules");
  if (css_position_fallback_rules_value) {
    errors->SetName("cssPositionFallbackRules");
    result->css_position_fallback_rules_ = internal::FromValue<std::vector<std::unique_ptr<::headless::css::CSSPositionFallbackRule>>>::Parse(*css_position_fallback_rules_value, errors);
  }
  const base::Value* css_property_rules_value = dict.Find("cssPropertyRules");
  if (css_property_rules_value) {
    errors->SetName("cssPropertyRules");
    result->css_property_rules_ = internal::FromValue<std::vector<std::unique_ptr<::headless::css::CSSPropertyRule>>>::Parse(*css_property_rules_value, errors);
  }
  const base::Value* css_property_registrations_value = dict.Find("cssPropertyRegistrations");
  if (css_property_registrations_value) {
    errors->SetName("cssPropertyRegistrations");
    result->css_property_registrations_ = internal::FromValue<std::vector<std::unique_ptr<::headless::css::CSSPropertyRegistration>>>::Parse(*css_property_registrations_value, errors);
  }
  const base::Value* parent_layout_node_id_value = dict.Find("parentLayoutNodeId");
  if (parent_layout_node_id_value) {
    errors->SetName("parentLayoutNodeId");
    result->parent_layout_node_id_ = internal::FromValue<int>::Parse(*parent_layout_node_id_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetMatchedStylesForNodeResult::Serialize() const {
  base::Value::Dict result;
  if (inline_style_)
    result.Set("inlineStyle", internal::ToValue(*inline_style_.value()));
  if (attributes_style_)
    result.Set("attributesStyle", internal::ToValue(*attributes_style_.value()));
  if (matchedcss_rules_)
    result.Set("matchedCSSRules", internal::ToValue(matchedcss_rules_.value()));
  if (pseudo_elements_)
    result.Set("pseudoElements", internal::ToValue(pseudo_elements_.value()));
  if (inherited_)
    result.Set("inherited", internal::ToValue(inherited_.value()));
  if (inherited_pseudo_elements_)
    result.Set("inheritedPseudoElements", internal::ToValue(inherited_pseudo_elements_.value()));
  if (css_keyframes_rules_)
    result.Set("cssKeyframesRules", internal::ToValue(css_keyframes_rules_.value()));
  if (css_position_fallback_rules_)
    result.Set("cssPositionFallbackRules", internal::ToValue(css_position_fallback_rules_.value()));
  if (css_property_rules_)
    result.Set("cssPropertyRules", internal::ToValue(css_property_rules_.value()));
  if (css_property_registrations_)
    result.Set("cssPropertyRegistrations", internal::ToValue(css_property_registrations_.value()));
  if (parent_layout_node_id_)
    result.Set("parentLayoutNodeId", internal::ToValue(parent_layout_node_id_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<GetMatchedStylesForNodeResult> GetMatchedStylesForNodeResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetMatchedStylesForNodeResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetMediaQueriesParams> GetMediaQueriesParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetMediaQueriesParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetMediaQueriesParams> result(new GetMediaQueriesParams());
  errors->Push();
  errors->SetName("GetMediaQueriesParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetMediaQueriesParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<GetMediaQueriesParams> GetMediaQueriesParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetMediaQueriesParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetMediaQueriesResult> GetMediaQueriesResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetMediaQueriesResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetMediaQueriesResult> result(new GetMediaQueriesResult());
  errors->Push();
  errors->SetName("GetMediaQueriesResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* medias_value = dict.Find("medias");
  if (medias_value) {
    errors->SetName("medias");
    result->medias_ = internal::FromValue<std::vector<std::unique_ptr<::headless::css::CSSMedia>>>::Parse(*medias_value, errors);
  } else {
    errors->AddError("required property missing: medias");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetMediaQueriesResult::Serialize() const {
  base::Value::Dict result;
  result.Set("medias", internal::ToValue(medias_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetMediaQueriesResult> GetMediaQueriesResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetMediaQueriesResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetPlatformFontsForNodeParams> GetPlatformFontsForNodeParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetPlatformFontsForNodeParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetPlatformFontsForNodeParams> result(new GetPlatformFontsForNodeParams());
  errors->Push();
  errors->SetName("GetPlatformFontsForNodeParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* node_id_value = dict.Find("nodeId");
  if (node_id_value) {
    errors->SetName("nodeId");
    result->node_id_ = internal::FromValue<int>::Parse(*node_id_value, errors);
  } else {
    errors->AddError("required property missing: nodeId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetPlatformFontsForNodeParams::Serialize() const {
  base::Value::Dict result;
  result.Set("nodeId", internal::ToValue(node_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetPlatformFontsForNodeParams> GetPlatformFontsForNodeParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetPlatformFontsForNodeParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetPlatformFontsForNodeResult> GetPlatformFontsForNodeResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetPlatformFontsForNodeResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetPlatformFontsForNodeResult> result(new GetPlatformFontsForNodeResult());
  errors->Push();
  errors->SetName("GetPlatformFontsForNodeResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* fonts_value = dict.Find("fonts");
  if (fonts_value) {
    errors->SetName("fonts");
    result->fonts_ = internal::FromValue<std::vector<std::unique_ptr<::headless::css::PlatformFontUsage>>>::Parse(*fonts_value, errors);
  } else {
    errors->AddError("required property missing: fonts");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetPlatformFontsForNodeResult::Serialize() const {
  base::Value::Dict result;
  result.Set("fonts", internal::ToValue(fonts_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetPlatformFontsForNodeResult> GetPlatformFontsForNodeResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetPlatformFontsForNodeResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetStyleSheetTextParams> GetStyleSheetTextParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetStyleSheetTextParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetStyleSheetTextParams> result(new GetStyleSheetTextParams());
  errors->Push();
  errors->SetName("GetStyleSheetTextParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* style_sheet_id_value = dict.Find("styleSheetId");
  if (style_sheet_id_value) {
    errors->SetName("styleSheetId");
    result->style_sheet_id_ = internal::FromValue<std::string>::Parse(*style_sheet_id_value, errors);
  } else {
    errors->AddError("required property missing: styleSheetId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetStyleSheetTextParams::Serialize() const {
  base::Value::Dict result;
  result.Set("styleSheetId", internal::ToValue(style_sheet_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetStyleSheetTextParams> GetStyleSheetTextParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetStyleSheetTextParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetStyleSheetTextResult> GetStyleSheetTextResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetStyleSheetTextResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetStyleSheetTextResult> result(new GetStyleSheetTextResult());
  errors->Push();
  errors->SetName("GetStyleSheetTextResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* text_value = dict.Find("text");
  if (text_value) {
    errors->SetName("text");
    result->text_ = internal::FromValue<std::string>::Parse(*text_value, errors);
  } else {
    errors->AddError("required property missing: text");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetStyleSheetTextResult::Serialize() const {
  base::Value::Dict result;
  result.Set("text", internal::ToValue(text_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetStyleSheetTextResult> GetStyleSheetTextResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetStyleSheetTextResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetLayersForNodeParams> GetLayersForNodeParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetLayersForNodeParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetLayersForNodeParams> result(new GetLayersForNodeParams());
  errors->Push();
  errors->SetName("GetLayersForNodeParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* node_id_value = dict.Find("nodeId");
  if (node_id_value) {
    errors->SetName("nodeId");
    result->node_id_ = internal::FromValue<int>::Parse(*node_id_value, errors);
  } else {
    errors->AddError("required property missing: nodeId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetLayersForNodeParams::Serialize() const {
  base::Value::Dict result;
  result.Set("nodeId", internal::ToValue(node_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetLayersForNodeParams> GetLayersForNodeParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetLayersForNodeParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetLayersForNodeResult> GetLayersForNodeResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetLayersForNodeResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetLayersForNodeResult> result(new GetLayersForNodeResult());
  errors->Push();
  errors->SetName("GetLayersForNodeResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* root_layer_value = dict.Find("rootLayer");
  if (root_layer_value) {
    errors->SetName("rootLayer");
    result->root_layer_ = internal::FromValue<::headless::css::CSSLayerData>::Parse(*root_layer_value, errors);
  } else {
    errors->AddError("required property missing: rootLayer");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetLayersForNodeResult::Serialize() const {
  base::Value::Dict result;
  result.Set("rootLayer", internal::ToValue(*root_layer_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetLayersForNodeResult> GetLayersForNodeResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetLayersForNodeResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<TrackComputedStyleUpdatesParams> TrackComputedStyleUpdatesParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("TrackComputedStyleUpdatesParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<TrackComputedStyleUpdatesParams> result(new TrackComputedStyleUpdatesParams());
  errors->Push();
  errors->SetName("TrackComputedStyleUpdatesParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* properties_to_track_value = dict.Find("propertiesToTrack");
  if (properties_to_track_value) {
    errors->SetName("propertiesToTrack");
    result->properties_to_track_ = internal::FromValue<std::vector<std::unique_ptr<::headless::css::CSSComputedStyleProperty>>>::Parse(*properties_to_track_value, errors);
  } else {
    errors->AddError("required property missing: propertiesToTrack");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value TrackComputedStyleUpdatesParams::Serialize() const {
  base::Value::Dict result;
  result.Set("propertiesToTrack", internal::ToValue(properties_to_track_));
  return base::Value(std::move(result));
}

std::unique_ptr<TrackComputedStyleUpdatesParams> TrackComputedStyleUpdatesParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<TrackComputedStyleUpdatesParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<TrackComputedStyleUpdatesResult> TrackComputedStyleUpdatesResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("TrackComputedStyleUpdatesResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<TrackComputedStyleUpdatesResult> result(new TrackComputedStyleUpdatesResult());
  errors->Push();
  errors->SetName("TrackComputedStyleUpdatesResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value TrackComputedStyleUpdatesResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<TrackComputedStyleUpdatesResult> TrackComputedStyleUpdatesResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<TrackComputedStyleUpdatesResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<TakeComputedStyleUpdatesParams> TakeComputedStyleUpdatesParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("TakeComputedStyleUpdatesParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<TakeComputedStyleUpdatesParams> result(new TakeComputedStyleUpdatesParams());
  errors->Push();
  errors->SetName("TakeComputedStyleUpdatesParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value TakeComputedStyleUpdatesParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<TakeComputedStyleUpdatesParams> TakeComputedStyleUpdatesParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<TakeComputedStyleUpdatesParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<TakeComputedStyleUpdatesResult> TakeComputedStyleUpdatesResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("TakeComputedStyleUpdatesResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<TakeComputedStyleUpdatesResult> result(new TakeComputedStyleUpdatesResult());
  errors->Push();
  errors->SetName("TakeComputedStyleUpdatesResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* node_ids_value = dict.Find("nodeIds");
  if (node_ids_value) {
    errors->SetName("nodeIds");
    result->node_ids_ = internal::FromValue<std::vector<int>>::Parse(*node_ids_value, errors);
  } else {
    errors->AddError("required property missing: nodeIds");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value TakeComputedStyleUpdatesResult::Serialize() const {
  base::Value::Dict result;
  result.Set("nodeIds", internal::ToValue(node_ids_));
  return base::Value(std::move(result));
}

std::unique_ptr<TakeComputedStyleUpdatesResult> TakeComputedStyleUpdatesResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<TakeComputedStyleUpdatesResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetEffectivePropertyValueForNodeParams> SetEffectivePropertyValueForNodeParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetEffectivePropertyValueForNodeParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetEffectivePropertyValueForNodeParams> result(new SetEffectivePropertyValueForNodeParams());
  errors->Push();
  errors->SetName("SetEffectivePropertyValueForNodeParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* node_id_value = dict.Find("nodeId");
  if (node_id_value) {
    errors->SetName("nodeId");
    result->node_id_ = internal::FromValue<int>::Parse(*node_id_value, errors);
  } else {
    errors->AddError("required property missing: nodeId");
  }
  const base::Value* property_name_value = dict.Find("propertyName");
  if (property_name_value) {
    errors->SetName("propertyName");
    result->property_name_ = internal::FromValue<std::string>::Parse(*property_name_value, errors);
  } else {
    errors->AddError("required property missing: propertyName");
  }
  const base::Value* value_value = dict.Find("value");
  if (value_value) {
    errors->SetName("value");
    result->value_ = internal::FromValue<std::string>::Parse(*value_value, errors);
  } else {
    errors->AddError("required property missing: value");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetEffectivePropertyValueForNodeParams::Serialize() const {
  base::Value::Dict result;
  result.Set("nodeId", internal::ToValue(node_id_));
  result.Set("propertyName", internal::ToValue(property_name_));
  result.Set("value", internal::ToValue(value_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetEffectivePropertyValueForNodeParams> SetEffectivePropertyValueForNodeParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetEffectivePropertyValueForNodeParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetEffectivePropertyValueForNodeResult> SetEffectivePropertyValueForNodeResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetEffectivePropertyValueForNodeResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetEffectivePropertyValueForNodeResult> result(new SetEffectivePropertyValueForNodeResult());
  errors->Push();
  errors->SetName("SetEffectivePropertyValueForNodeResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetEffectivePropertyValueForNodeResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetEffectivePropertyValueForNodeResult> SetEffectivePropertyValueForNodeResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetEffectivePropertyValueForNodeResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetPropertyRulePropertyNameParams> SetPropertyRulePropertyNameParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetPropertyRulePropertyNameParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetPropertyRulePropertyNameParams> result(new SetPropertyRulePropertyNameParams());
  errors->Push();
  errors->SetName("SetPropertyRulePropertyNameParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* style_sheet_id_value = dict.Find("styleSheetId");
  if (style_sheet_id_value) {
    errors->SetName("styleSheetId");
    result->style_sheet_id_ = internal::FromValue<std::string>::Parse(*style_sheet_id_value, errors);
  } else {
    errors->AddError("required property missing: styleSheetId");
  }
  const base::Value* range_value = dict.Find("range");
  if (range_value) {
    errors->SetName("range");
    result->range_ = internal::FromValue<::headless::css::SourceRange>::Parse(*range_value, errors);
  } else {
    errors->AddError("required property missing: range");
  }
  const base::Value* property_name_value = dict.Find("propertyName");
  if (property_name_value) {
    errors->SetName("propertyName");
    result->property_name_ = internal::FromValue<std::string>::Parse(*property_name_value, errors);
  } else {
    errors->AddError("required property missing: propertyName");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetPropertyRulePropertyNameParams::Serialize() const {
  base::Value::Dict result;
  result.Set("styleSheetId", internal::ToValue(style_sheet_id_));
  result.Set("range", internal::ToValue(*range_));
  result.Set("propertyName", internal::ToValue(property_name_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetPropertyRulePropertyNameParams> SetPropertyRulePropertyNameParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetPropertyRulePropertyNameParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetPropertyRulePropertyNameResult> SetPropertyRulePropertyNameResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetPropertyRulePropertyNameResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetPropertyRulePropertyNameResult> result(new SetPropertyRulePropertyNameResult());
  errors->Push();
  errors->SetName("SetPropertyRulePropertyNameResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* property_name_value = dict.Find("propertyName");
  if (property_name_value) {
    errors->SetName("propertyName");
    result->property_name_ = internal::FromValue<::headless::css::Value>::Parse(*property_name_value, errors);
  } else {
    errors->AddError("required property missing: propertyName");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetPropertyRulePropertyNameResult::Serialize() const {
  base::Value::Dict result;
  result.Set("propertyName", internal::ToValue(*property_name_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetPropertyRulePropertyNameResult> SetPropertyRulePropertyNameResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetPropertyRulePropertyNameResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetKeyframeKeyParams> SetKeyframeKeyParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetKeyframeKeyParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetKeyframeKeyParams> result(new SetKeyframeKeyParams());
  errors->Push();
  errors->SetName("SetKeyframeKeyParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* style_sheet_id_value = dict.Find("styleSheetId");
  if (style_sheet_id_value) {
    errors->SetName("styleSheetId");
    result->style_sheet_id_ = internal::FromValue<std::string>::Parse(*style_sheet_id_value, errors);
  } else {
    errors->AddError("required property missing: styleSheetId");
  }
  const base::Value* range_value = dict.Find("range");
  if (range_value) {
    errors->SetName("range");
    result->range_ = internal::FromValue<::headless::css::SourceRange>::Parse(*range_value, errors);
  } else {
    errors->AddError("required property missing: range");
  }
  const base::Value* key_text_value = dict.Find("keyText");
  if (key_text_value) {
    errors->SetName("keyText");
    result->key_text_ = internal::FromValue<std::string>::Parse(*key_text_value, errors);
  } else {
    errors->AddError("required property missing: keyText");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetKeyframeKeyParams::Serialize() const {
  base::Value::Dict result;
  result.Set("styleSheetId", internal::ToValue(style_sheet_id_));
  result.Set("range", internal::ToValue(*range_));
  result.Set("keyText", internal::ToValue(key_text_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetKeyframeKeyParams> SetKeyframeKeyParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetKeyframeKeyParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetKeyframeKeyResult> SetKeyframeKeyResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetKeyframeKeyResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetKeyframeKeyResult> result(new SetKeyframeKeyResult());
  errors->Push();
  errors->SetName("SetKeyframeKeyResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* key_text_value = dict.Find("keyText");
  if (key_text_value) {
    errors->SetName("keyText");
    result->key_text_ = internal::FromValue<::headless::css::Value>::Parse(*key_text_value, errors);
  } else {
    errors->AddError("required property missing: keyText");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetKeyframeKeyResult::Serialize() const {
  base::Value::Dict result;
  result.Set("keyText", internal::ToValue(*key_text_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetKeyframeKeyResult> SetKeyframeKeyResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetKeyframeKeyResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetMediaTextParams> SetMediaTextParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetMediaTextParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetMediaTextParams> result(new SetMediaTextParams());
  errors->Push();
  errors->SetName("SetMediaTextParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* style_sheet_id_value = dict.Find("styleSheetId");
  if (style_sheet_id_value) {
    errors->SetName("styleSheetId");
    result->style_sheet_id_ = internal::FromValue<std::string>::Parse(*style_sheet_id_value, errors);
  } else {
    errors->AddError("required property missing: styleSheetId");
  }
  const base::Value* range_value = dict.Find("range");
  if (range_value) {
    errors->SetName("range");
    result->range_ = internal::FromValue<::headless::css::SourceRange>::Parse(*range_value, errors);
  } else {
    errors->AddError("required property missing: range");
  }
  const base::Value* text_value = dict.Find("text");
  if (text_value) {
    errors->SetName("text");
    result->text_ = internal::FromValue<std::string>::Parse(*text_value, errors);
  } else {
    errors->AddError("required property missing: text");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetMediaTextParams::Serialize() const {
  base::Value::Dict result;
  result.Set("styleSheetId", internal::ToValue(style_sheet_id_));
  result.Set("range", internal::ToValue(*range_));
  result.Set("text", internal::ToValue(text_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetMediaTextParams> SetMediaTextParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetMediaTextParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetMediaTextResult> SetMediaTextResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetMediaTextResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetMediaTextResult> result(new SetMediaTextResult());
  errors->Push();
  errors->SetName("SetMediaTextResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* media_value = dict.Find("media");
  if (media_value) {
    errors->SetName("media");
    result->media_ = internal::FromValue<::headless::css::CSSMedia>::Parse(*media_value, errors);
  } else {
    errors->AddError("required property missing: media");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetMediaTextResult::Serialize() const {
  base::Value::Dict result;
  result.Set("media", internal::ToValue(*media_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetMediaTextResult> SetMediaTextResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetMediaTextResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetContainerQueryTextParams> SetContainerQueryTextParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetContainerQueryTextParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetContainerQueryTextParams> result(new SetContainerQueryTextParams());
  errors->Push();
  errors->SetName("SetContainerQueryTextParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* style_sheet_id_value = dict.Find("styleSheetId");
  if (style_sheet_id_value) {
    errors->SetName("styleSheetId");
    result->style_sheet_id_ = internal::FromValue<std::string>::Parse(*style_sheet_id_value, errors);
  } else {
    errors->AddError("required property missing: styleSheetId");
  }
  const base::Value* range_value = dict.Find("range");
  if (range_value) {
    errors->SetName("range");
    result->range_ = internal::FromValue<::headless::css::SourceRange>::Parse(*range_value, errors);
  } else {
    errors->AddError("required property missing: range");
  }
  const base::Value* text_value = dict.Find("text");
  if (text_value) {
    errors->SetName("text");
    result->text_ = internal::FromValue<std::string>::Parse(*text_value, errors);
  } else {
    errors->AddError("required property missing: text");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetContainerQueryTextParams::Serialize() const {
  base::Value::Dict result;
  result.Set("styleSheetId", internal::ToValue(style_sheet_id_));
  result.Set("range", internal::ToValue(*range_));
  result.Set("text", internal::ToValue(text_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetContainerQueryTextParams> SetContainerQueryTextParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetContainerQueryTextParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetContainerQueryTextResult> SetContainerQueryTextResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetContainerQueryTextResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetContainerQueryTextResult> result(new SetContainerQueryTextResult());
  errors->Push();
  errors->SetName("SetContainerQueryTextResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* container_query_value = dict.Find("containerQuery");
  if (container_query_value) {
    errors->SetName("containerQuery");
    result->container_query_ = internal::FromValue<::headless::css::CSSContainerQuery>::Parse(*container_query_value, errors);
  } else {
    errors->AddError("required property missing: containerQuery");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetContainerQueryTextResult::Serialize() const {
  base::Value::Dict result;
  result.Set("containerQuery", internal::ToValue(*container_query_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetContainerQueryTextResult> SetContainerQueryTextResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetContainerQueryTextResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetSupportsTextParams> SetSupportsTextParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetSupportsTextParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetSupportsTextParams> result(new SetSupportsTextParams());
  errors->Push();
  errors->SetName("SetSupportsTextParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* style_sheet_id_value = dict.Find("styleSheetId");
  if (style_sheet_id_value) {
    errors->SetName("styleSheetId");
    result->style_sheet_id_ = internal::FromValue<std::string>::Parse(*style_sheet_id_value, errors);
  } else {
    errors->AddError("required property missing: styleSheetId");
  }
  const base::Value* range_value = dict.Find("range");
  if (range_value) {
    errors->SetName("range");
    result->range_ = internal::FromValue<::headless::css::SourceRange>::Parse(*range_value, errors);
  } else {
    errors->AddError("required property missing: range");
  }
  const base::Value* text_value = dict.Find("text");
  if (text_value) {
    errors->SetName("text");
    result->text_ = internal::FromValue<std::string>::Parse(*text_value, errors);
  } else {
    errors->AddError("required property missing: text");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetSupportsTextParams::Serialize() const {
  base::Value::Dict result;
  result.Set("styleSheetId", internal::ToValue(style_sheet_id_));
  result.Set("range", internal::ToValue(*range_));
  result.Set("text", internal::ToValue(text_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetSupportsTextParams> SetSupportsTextParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetSupportsTextParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetSupportsTextResult> SetSupportsTextResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetSupportsTextResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetSupportsTextResult> result(new SetSupportsTextResult());
  errors->Push();
  errors->SetName("SetSupportsTextResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* supports_value = dict.Find("supports");
  if (supports_value) {
    errors->SetName("supports");
    result->supports_ = internal::FromValue<::headless::css::CSSSupports>::Parse(*supports_value, errors);
  } else {
    errors->AddError("required property missing: supports");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetSupportsTextResult::Serialize() const {
  base::Value::Dict result;
  result.Set("supports", internal::ToValue(*supports_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetSupportsTextResult> SetSupportsTextResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetSupportsTextResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetScopeTextParams> SetScopeTextParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetScopeTextParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetScopeTextParams> result(new SetScopeTextParams());
  errors->Push();
  errors->SetName("SetScopeTextParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* style_sheet_id_value = dict.Find("styleSheetId");
  if (style_sheet_id_value) {
    errors->SetName("styleSheetId");
    result->style_sheet_id_ = internal::FromValue<std::string>::Parse(*style_sheet_id_value, errors);
  } else {
    errors->AddError("required property missing: styleSheetId");
  }
  const base::Value* range_value = dict.Find("range");
  if (range_value) {
    errors->SetName("range");
    result->range_ = internal::FromValue<::headless::css::SourceRange>::Parse(*range_value, errors);
  } else {
    errors->AddError("required property missing: range");
  }
  const base::Value* text_value = dict.Find("text");
  if (text_value) {
    errors->SetName("text");
    result->text_ = internal::FromValue<std::string>::Parse(*text_value, errors);
  } else {
    errors->AddError("required property missing: text");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetScopeTextParams::Serialize() const {
  base::Value::Dict result;
  result.Set("styleSheetId", internal::ToValue(style_sheet_id_));
  result.Set("range", internal::ToValue(*range_));
  result.Set("text", internal::ToValue(text_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetScopeTextParams> SetScopeTextParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetScopeTextParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetScopeTextResult> SetScopeTextResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetScopeTextResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetScopeTextResult> result(new SetScopeTextResult());
  errors->Push();
  errors->SetName("SetScopeTextResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* scope_value = dict.Find("scope");
  if (scope_value) {
    errors->SetName("scope");
    result->scope_ = internal::FromValue<::headless::css::CSSScope>::Parse(*scope_value, errors);
  } else {
    errors->AddError("required property missing: scope");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetScopeTextResult::Serialize() const {
  base::Value::Dict result;
  result.Set("scope", internal::ToValue(*scope_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetScopeTextResult> SetScopeTextResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetScopeTextResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetRuleSelectorParams> SetRuleSelectorParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetRuleSelectorParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetRuleSelectorParams> result(new SetRuleSelectorParams());
  errors->Push();
  errors->SetName("SetRuleSelectorParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* style_sheet_id_value = dict.Find("styleSheetId");
  if (style_sheet_id_value) {
    errors->SetName("styleSheetId");
    result->style_sheet_id_ = internal::FromValue<std::string>::Parse(*style_sheet_id_value, errors);
  } else {
    errors->AddError("required property missing: styleSheetId");
  }
  const base::Value* range_value = dict.Find("range");
  if (range_value) {
    errors->SetName("range");
    result->range_ = internal::FromValue<::headless::css::SourceRange>::Parse(*range_value, errors);
  } else {
    errors->AddError("required property missing: range");
  }
  const base::Value* selector_value = dict.Find("selector");
  if (selector_value) {
    errors->SetName("selector");
    result->selector_ = internal::FromValue<std::string>::Parse(*selector_value, errors);
  } else {
    errors->AddError("required property missing: selector");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetRuleSelectorParams::Serialize() const {
  base::Value::Dict result;
  result.Set("styleSheetId", internal::ToValue(style_sheet_id_));
  result.Set("range", internal::ToValue(*range_));
  result.Set("selector", internal::ToValue(selector_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetRuleSelectorParams> SetRuleSelectorParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetRuleSelectorParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetRuleSelectorResult> SetRuleSelectorResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetRuleSelectorResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetRuleSelectorResult> result(new SetRuleSelectorResult());
  errors->Push();
  errors->SetName("SetRuleSelectorResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* selector_list_value = dict.Find("selectorList");
  if (selector_list_value) {
    errors->SetName("selectorList");
    result->selector_list_ = internal::FromValue<::headless::css::SelectorList>::Parse(*selector_list_value, errors);
  } else {
    errors->AddError("required property missing: selectorList");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetRuleSelectorResult::Serialize() const {
  base::Value::Dict result;
  result.Set("selectorList", internal::ToValue(*selector_list_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetRuleSelectorResult> SetRuleSelectorResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetRuleSelectorResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetStyleSheetTextParams> SetStyleSheetTextParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetStyleSheetTextParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetStyleSheetTextParams> result(new SetStyleSheetTextParams());
  errors->Push();
  errors->SetName("SetStyleSheetTextParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* style_sheet_id_value = dict.Find("styleSheetId");
  if (style_sheet_id_value) {
    errors->SetName("styleSheetId");
    result->style_sheet_id_ = internal::FromValue<std::string>::Parse(*style_sheet_id_value, errors);
  } else {
    errors->AddError("required property missing: styleSheetId");
  }
  const base::Value* text_value = dict.Find("text");
  if (text_value) {
    errors->SetName("text");
    result->text_ = internal::FromValue<std::string>::Parse(*text_value, errors);
  } else {
    errors->AddError("required property missing: text");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetStyleSheetTextParams::Serialize() const {
  base::Value::Dict result;
  result.Set("styleSheetId", internal::ToValue(style_sheet_id_));
  result.Set("text", internal::ToValue(text_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetStyleSheetTextParams> SetStyleSheetTextParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetStyleSheetTextParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetStyleSheetTextResult> SetStyleSheetTextResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetStyleSheetTextResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetStyleSheetTextResult> result(new SetStyleSheetTextResult());
  errors->Push();
  errors->SetName("SetStyleSheetTextResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* source_mapurl_value = dict.Find("sourceMapURL");
  if (source_mapurl_value) {
    errors->SetName("sourceMapURL");
    result->source_mapurl_ = internal::FromValue<std::string>::Parse(*source_mapurl_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetStyleSheetTextResult::Serialize() const {
  base::Value::Dict result;
  if (source_mapurl_)
    result.Set("sourceMapURL", internal::ToValue(source_mapurl_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<SetStyleSheetTextResult> SetStyleSheetTextResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetStyleSheetTextResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetStyleTextsParams> SetStyleTextsParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetStyleTextsParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetStyleTextsParams> result(new SetStyleTextsParams());
  errors->Push();
  errors->SetName("SetStyleTextsParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* edits_value = dict.Find("edits");
  if (edits_value) {
    errors->SetName("edits");
    result->edits_ = internal::FromValue<std::vector<std::unique_ptr<::headless::css::StyleDeclarationEdit>>>::Parse(*edits_value, errors);
  } else {
    errors->AddError("required property missing: edits");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetStyleTextsParams::Serialize() const {
  base::Value::Dict result;
  result.Set("edits", internal::ToValue(edits_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetStyleTextsParams> SetStyleTextsParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetStyleTextsParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetStyleTextsResult> SetStyleTextsResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetStyleTextsResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetStyleTextsResult> result(new SetStyleTextsResult());
  errors->Push();
  errors->SetName("SetStyleTextsResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* styles_value = dict.Find("styles");
  if (styles_value) {
    errors->SetName("styles");
    result->styles_ = internal::FromValue<std::vector<std::unique_ptr<::headless::css::CSSStyle>>>::Parse(*styles_value, errors);
  } else {
    errors->AddError("required property missing: styles");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetStyleTextsResult::Serialize() const {
  base::Value::Dict result;
  result.Set("styles", internal::ToValue(styles_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetStyleTextsResult> SetStyleTextsResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetStyleTextsResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<StartRuleUsageTrackingParams> StartRuleUsageTrackingParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("StartRuleUsageTrackingParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<StartRuleUsageTrackingParams> result(new StartRuleUsageTrackingParams());
  errors->Push();
  errors->SetName("StartRuleUsageTrackingParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value StartRuleUsageTrackingParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<StartRuleUsageTrackingParams> StartRuleUsageTrackingParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<StartRuleUsageTrackingParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<StartRuleUsageTrackingResult> StartRuleUsageTrackingResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("StartRuleUsageTrackingResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<StartRuleUsageTrackingResult> result(new StartRuleUsageTrackingResult());
  errors->Push();
  errors->SetName("StartRuleUsageTrackingResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value StartRuleUsageTrackingResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<StartRuleUsageTrackingResult> StartRuleUsageTrackingResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<StartRuleUsageTrackingResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<StopRuleUsageTrackingParams> StopRuleUsageTrackingParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("StopRuleUsageTrackingParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<StopRuleUsageTrackingParams> result(new StopRuleUsageTrackingParams());
  errors->Push();
  errors->SetName("StopRuleUsageTrackingParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value StopRuleUsageTrackingParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<StopRuleUsageTrackingParams> StopRuleUsageTrackingParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<StopRuleUsageTrackingParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<StopRuleUsageTrackingResult> StopRuleUsageTrackingResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("StopRuleUsageTrackingResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<StopRuleUsageTrackingResult> result(new StopRuleUsageTrackingResult());
  errors->Push();
  errors->SetName("StopRuleUsageTrackingResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* rule_usage_value = dict.Find("ruleUsage");
  if (rule_usage_value) {
    errors->SetName("ruleUsage");
    result->rule_usage_ = internal::FromValue<std::vector<std::unique_ptr<::headless::css::RuleUsage>>>::Parse(*rule_usage_value, errors);
  } else {
    errors->AddError("required property missing: ruleUsage");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value StopRuleUsageTrackingResult::Serialize() const {
  base::Value::Dict result;
  result.Set("ruleUsage", internal::ToValue(rule_usage_));
  return base::Value(std::move(result));
}

std::unique_ptr<StopRuleUsageTrackingResult> StopRuleUsageTrackingResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<StopRuleUsageTrackingResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<TakeCoverageDeltaParams> TakeCoverageDeltaParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("TakeCoverageDeltaParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<TakeCoverageDeltaParams> result(new TakeCoverageDeltaParams());
  errors->Push();
  errors->SetName("TakeCoverageDeltaParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value TakeCoverageDeltaParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<TakeCoverageDeltaParams> TakeCoverageDeltaParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<TakeCoverageDeltaParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<TakeCoverageDeltaResult> TakeCoverageDeltaResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("TakeCoverageDeltaResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<TakeCoverageDeltaResult> result(new TakeCoverageDeltaResult());
  errors->Push();
  errors->SetName("TakeCoverageDeltaResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* coverage_value = dict.Find("coverage");
  if (coverage_value) {
    errors->SetName("coverage");
    result->coverage_ = internal::FromValue<std::vector<std::unique_ptr<::headless::css::RuleUsage>>>::Parse(*coverage_value, errors);
  } else {
    errors->AddError("required property missing: coverage");
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

base::Value TakeCoverageDeltaResult::Serialize() const {
  base::Value::Dict result;
  result.Set("coverage", internal::ToValue(coverage_));
  result.Set("timestamp", internal::ToValue(timestamp_));
  return base::Value(std::move(result));
}

std::unique_ptr<TakeCoverageDeltaResult> TakeCoverageDeltaResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<TakeCoverageDeltaResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetLocalFontsEnabledParams> SetLocalFontsEnabledParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetLocalFontsEnabledParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetLocalFontsEnabledParams> result(new SetLocalFontsEnabledParams());
  errors->Push();
  errors->SetName("SetLocalFontsEnabledParams");
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

base::Value SetLocalFontsEnabledParams::Serialize() const {
  base::Value::Dict result;
  result.Set("enabled", internal::ToValue(enabled_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetLocalFontsEnabledParams> SetLocalFontsEnabledParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetLocalFontsEnabledParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetLocalFontsEnabledResult> SetLocalFontsEnabledResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetLocalFontsEnabledResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetLocalFontsEnabledResult> result(new SetLocalFontsEnabledResult());
  errors->Push();
  errors->SetName("SetLocalFontsEnabledResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetLocalFontsEnabledResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetLocalFontsEnabledResult> SetLocalFontsEnabledResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetLocalFontsEnabledResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<FontsUpdatedParams> FontsUpdatedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("FontsUpdatedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<FontsUpdatedParams> result(new FontsUpdatedParams());
  errors->Push();
  errors->SetName("FontsUpdatedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* font_value = dict.Find("font");
  if (font_value) {
    errors->SetName("font");
    result->font_ = internal::FromValue<::headless::css::FontFace>::Parse(*font_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value FontsUpdatedParams::Serialize() const {
  base::Value::Dict result;
  if (font_)
    result.Set("font", internal::ToValue(*font_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<FontsUpdatedParams> FontsUpdatedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<FontsUpdatedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<MediaQueryResultChangedParams> MediaQueryResultChangedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("MediaQueryResultChangedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<MediaQueryResultChangedParams> result(new MediaQueryResultChangedParams());
  errors->Push();
  errors->SetName("MediaQueryResultChangedParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value MediaQueryResultChangedParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<MediaQueryResultChangedParams> MediaQueryResultChangedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<MediaQueryResultChangedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<StyleSheetAddedParams> StyleSheetAddedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("StyleSheetAddedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<StyleSheetAddedParams> result(new StyleSheetAddedParams());
  errors->Push();
  errors->SetName("StyleSheetAddedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* header_value = dict.Find("header");
  if (header_value) {
    errors->SetName("header");
    result->header_ = internal::FromValue<::headless::css::CSSStyleSheetHeader>::Parse(*header_value, errors);
  } else {
    errors->AddError("required property missing: header");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value StyleSheetAddedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("header", internal::ToValue(*header_));
  return base::Value(std::move(result));
}

std::unique_ptr<StyleSheetAddedParams> StyleSheetAddedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<StyleSheetAddedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<StyleSheetChangedParams> StyleSheetChangedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("StyleSheetChangedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<StyleSheetChangedParams> result(new StyleSheetChangedParams());
  errors->Push();
  errors->SetName("StyleSheetChangedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* style_sheet_id_value = dict.Find("styleSheetId");
  if (style_sheet_id_value) {
    errors->SetName("styleSheetId");
    result->style_sheet_id_ = internal::FromValue<std::string>::Parse(*style_sheet_id_value, errors);
  } else {
    errors->AddError("required property missing: styleSheetId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value StyleSheetChangedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("styleSheetId", internal::ToValue(style_sheet_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<StyleSheetChangedParams> StyleSheetChangedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<StyleSheetChangedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<StyleSheetRemovedParams> StyleSheetRemovedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("StyleSheetRemovedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<StyleSheetRemovedParams> result(new StyleSheetRemovedParams());
  errors->Push();
  errors->SetName("StyleSheetRemovedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* style_sheet_id_value = dict.Find("styleSheetId");
  if (style_sheet_id_value) {
    errors->SetName("styleSheetId");
    result->style_sheet_id_ = internal::FromValue<std::string>::Parse(*style_sheet_id_value, errors);
  } else {
    errors->AddError("required property missing: styleSheetId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value StyleSheetRemovedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("styleSheetId", internal::ToValue(style_sheet_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<StyleSheetRemovedParams> StyleSheetRemovedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<StyleSheetRemovedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


}  // namespace css
}  // namespace headless
