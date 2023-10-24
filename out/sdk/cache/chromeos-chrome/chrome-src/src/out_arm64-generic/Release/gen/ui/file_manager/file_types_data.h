// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is generated from:
//   ../../../../../../../home/chrome-bot/chrome_root/src/ui/file_manager/base/gn/file_types.json5

#ifndef GEN_UI_FILE_MANAGER_FILE_TYPES_DATA_H_
#define GEN_UI_FILE_MANAGER_FILE_TYPES_DATA_H_

#include <string>

#include "base/containers/flat_map.h"
#include "base/containers/flat_set.h"

namespace file_types_data {

// Maps a file extension to the MIME type, e.g.:
//   {".jpeg", "image/jpeg"},
//   {".jpg", "image/jpeg"},
extern const base::flat_map<std::string, std::string> kExtensionToMIME;

// A set includes all the MIME types for Documents, e.g.:
//   {"text/plain", "application/vnd.google-apps.document", "application/pdf"}
extern const base::flat_set<std::string> kDocumentMIMETypes;

}  // namespace file_types_data

#endif  // GEN_UI_FILE_MANAGER_FILE_TYPES_DATA_H_
