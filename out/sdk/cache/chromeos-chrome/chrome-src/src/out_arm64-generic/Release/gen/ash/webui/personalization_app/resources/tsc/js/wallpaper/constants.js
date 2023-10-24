// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// A special unique symbol that represents the device default image, normally
// not accessible by the user.
// Warning: symbols as object keys are not iterated by normal methods, but can
// be iterated by |getOwnPropertySymbols|.
export const kDefaultImageSymbol = Symbol.for('chromeos_default_wallpaper');
export const kMaximumLocalImagePreviews = 4;
