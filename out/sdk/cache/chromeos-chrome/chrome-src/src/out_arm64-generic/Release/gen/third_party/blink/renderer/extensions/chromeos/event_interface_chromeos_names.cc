// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Generated from template:
//   templates/make_names.cc.tmpl
// and input files:
//   gen/third_party/blink/renderer/extensions/chromeos/event_interface_chromeos_names.json5


#include "third_party/blink/renderer/extensions/chromeos/event_interface_chromeos_names.h"

#include <iterator>

#include "third_party/blink/renderer/platform/wtf/std_lib_extras.h"

namespace blink {
namespace event_interface_names {

void* chromeosnames_storage[kChromeOSNamesCount * ((sizeof(AtomicString) + sizeof(void *) - 1) / sizeof(void *))];

const AtomicString& kCrosAcceleratorEvent = reinterpret_cast<AtomicString*>(&chromeosnames_storage)[0];
const AtomicString& kCrosWindowEvent = reinterpret_cast<AtomicString*>(&chromeosnames_storage)[1];

void InitChromeOS() {
  static bool is_loaded = false;
  if (is_loaded) return;
  is_loaded = true;

  struct NameEntry {
    const char* name;
    unsigned hash;
    unsigned char length;
  };

  static const NameEntry kNames[] = {
    { "CrosAcceleratorEvent", 14793027, 20 },
    { "CrosWindowEvent", 16144239, 15 },
  };

  for (size_t i = 0; i < std::size(kNames); ++i) {
    StringImpl* impl = StringImpl::CreateStatic(kNames[i].name, kNames[i].length, kNames[i].hash);
    void* address = reinterpret_cast<AtomicString*>(&chromeosnames_storage) + i;
    new (address) AtomicString(impl);
  }
}

}  // namespace event_interface_names
}  // namespace blink
