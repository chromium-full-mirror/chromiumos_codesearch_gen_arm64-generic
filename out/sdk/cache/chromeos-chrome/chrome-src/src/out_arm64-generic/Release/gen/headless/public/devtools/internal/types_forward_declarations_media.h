// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPES_FORWARD_DECLARATIONS_MEDIA_H_
#define HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPES_FORWARD_DECLARATIONS_MEDIA_H_

#include "base/values.h"

namespace headless {

namespace media {
class PlayerMessage;
class PlayerProperty;
class PlayerEvent;
class PlayerErrorSourceLocation;
class PlayerError;
class EnableParams;
class EnableResult;
class DisableParams;
class DisableResult;
class PlayerPropertiesChangedParams;
class PlayerEventsAddedParams;
class PlayerMessagesLoggedParams;
class PlayerErrorsRaisedParams;
class PlayersCreatedParams;

enum class PlayerMessageLevel {
  ERR,
  WARNING,
  INFO,
  DEBUG
};

}  // namespace media

}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPES_FORWARD_DECLARATIONS_MEDIA_H_
