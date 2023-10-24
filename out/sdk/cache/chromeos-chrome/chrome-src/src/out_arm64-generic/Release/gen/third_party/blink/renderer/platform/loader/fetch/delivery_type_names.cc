// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Generated from template:
//   templates/make_names.cc.tmpl
// and input files:
//   ../../../../../../../home/chrome-bot/chrome_root/src/third_party/blink/renderer/platform/loader/fetch/delivery_type_names.json5


#include "third_party/blink/renderer/platform/loader/fetch/delivery_type_names.h"

#include <iterator>

#include "third_party/blink/renderer/platform/wtf/std_lib_extras.h"

namespace blink {
namespace delivery_type_names {

void* names_storage[kNamesCount * ((sizeof(AtomicString) + sizeof(void *) - 1) / sizeof(void *))];

const AtomicString& kCache = reinterpret_cast<AtomicString*>(&names_storage)[0];
const AtomicString& kNavigationalPrefetch = reinterpret_cast<AtomicString*>(&names_storage)[1];

void Init() {
  static bool is_loaded = false;
  if (is_loaded) return;
  is_loaded = true;

  struct NameEntry {
    const char* name;
    unsigned hash;
    unsigned char length;
  };

  static const NameEntry kNames[] = {
    { "cache", 3099380, 5 },
    { "navigational-prefetch", 7553449, 21 },
  };

  for (size_t i = 0; i < std::size(kNames); ++i) {
    StringImpl* impl = StringImpl::CreateStatic(kNames[i].name, kNames[i].length, kNames[i].hash);
    void* address = reinterpret_cast<AtomicString*>(&names_storage) + i;
    new (address) AtomicString(impl);
  }
}

}  // namespace delivery_type_names
}  // namespace blink
