// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Generated from template:
//   templates/make_names.h.tmpl
// and input files:
//   gen/third_party/blink/renderer/extensions/chromeos/event_interface_chromeos_names.json5


#ifndef THIRD_PARTY_BLINK_RENDERER_EXTENSIONS_CHROMEOS_EVENT_INTERFACE_CHROMEOS_NAMES_H_
#define THIRD_PARTY_BLINK_RENDERER_EXTENSIONS_CHROMEOS_EVENT_INTERFACE_CHROMEOS_NAMES_H_

#include "third_party/blink/renderer/platform/wtf/text/atomic_string.h"
#include "third_party/blink/renderer/extensions/chromeos/chromeos_extensions.h"

namespace blink {
namespace event_interface_names {

EXTENSIONS_CHROMEOS_EXPORT extern const WTF::AtomicString& kCrosAcceleratorEvent;
EXTENSIONS_CHROMEOS_EXPORT extern const WTF::AtomicString& kCrosWindowEvent;

constexpr unsigned kChromeOSNamesCount = 2;

EXTENSIONS_CHROMEOS_EXPORT void InitChromeOS();

}  // namespace event_interface_names
}  // namespace blink

#endif  // THIRD_PARTY_BLINK_RENDERER_EXTENSIONS_CHROMEOS_EVENT_INTERFACE_CHROMEOS_NAMES_H_
