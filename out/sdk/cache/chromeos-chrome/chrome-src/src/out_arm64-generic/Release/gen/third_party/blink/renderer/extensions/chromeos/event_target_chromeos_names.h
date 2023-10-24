// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Generated from template:
//   templates/make_names.h.tmpl
// and input files:
//   ../../../../../../../home/chrome-bot/chrome_root/src/third_party/blink/renderer/extensions/chromeos/event_target_chromeos_names.json5


#ifndef THIRD_PARTY_BLINK_RENDERER_EXTENSIONS_CHROMEOS_EVENT_TARGET_CHROMEOS_NAMES_H_
#define THIRD_PARTY_BLINK_RENDERER_EXTENSIONS_CHROMEOS_EVENT_TARGET_CHROMEOS_NAMES_H_

#include "third_party/blink/renderer/platform/wtf/text/atomic_string.h"
#include "third_party/blink/renderer/platform/platform_export.h"

namespace blink {
namespace event_target_names {

extern const WTF::AtomicString& kCrosWindowManagement;

constexpr unsigned kChromeOSNamesCount = 1;

void InitChromeOS();

}  // namespace event_target_names
}  // namespace blink

#endif  // THIRD_PARTY_BLINK_RENDERER_EXTENSIONS_CHROMEOS_EVENT_TARGET_CHROMEOS_NAMES_H_
