// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/requirements.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_REQUIREMENTS_H__
#define EXTENSIONS_COMMON_API_REQUIREMENTS_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace extensions {
namespace api {
namespace requirements {

//
// Types
//

enum class _3DFeature {
  kNone = 0,
  kWebgl,
  kCss3d,
  kMaxValue = kCss3d,
};


const char* ToString(_3DFeature as_enum);
_3DFeature Parse_3DFeature(base::StringPiece as_string);
std::u16string Get_3DFeatureParseError(base::StringPiece as_string);


//
// Manifest Keys
//

struct ManifestKeys {
  ManifestKeys();
  ~ManifestKeys();
  ManifestKeys(const ManifestKeys&) = delete;
  ManifestKeys& operator=(const ManifestKeys&) = delete;
  ManifestKeys(ManifestKeys&& rhs) noexcept;
  ManifestKeys& operator=(ManifestKeys&& rhs) noexcept;

  // Manifest key constants.
  static constexpr char kRequirements[] = "requirements";

  // Parses manifest keys for this namespace. Any keys not available to the
  // manifest will be ignored. On a parsing error, false is returned and |error|
  // is populated.
  static bool ParseFromDictionary(const base::Value::Dict& root_dict, ManifestKeys& out, std::u16string& error);


  struct Requirements {
    Requirements();
    ~Requirements();
    Requirements(const Requirements&) = delete;
    Requirements& operator=(const Requirements&) = delete;
    Requirements(Requirements&& rhs) noexcept;
    Requirements& operator=(Requirements&& rhs) noexcept;

    // Manifest key constants.
    static constexpr char kPlugins[] = "plugins";
    static constexpr char k3d[] = "3D";
    static constexpr char kWindow[] = "window";

    // Parses the given |key| from |root_dict|. Any keys not available to the
    // manifest will be ignored. On a parsing error, false is returned and |error|
    // and |error_path_reversed| are populated.
    static bool ParseFromDictionary(const base::Value::Dict& root_dict, base::StringPiece key, Requirements& out, std::u16string& error, std::vector<base::StringPiece>& error_path_reversed);


    struct Plugins {
      Plugins();
      ~Plugins();
      Plugins(const Plugins&) = delete;
      Plugins& operator=(const Plugins&) = delete;
      Plugins(Plugins&& rhs) noexcept;
      Plugins& operator=(Plugins&& rhs) noexcept;

      // Manifest key constants.
      static constexpr char kNpapi[] = "npapi";

      // Parses the given |key| from |root_dict|. Any keys not available to the
      // manifest will be ignored. On a parsing error, false is returned and |error|
      // and |error_path_reversed| are populated.
      static bool ParseFromDictionary(const base::Value::Dict& root_dict, base::StringPiece key, Plugins& out, std::u16string& error, std::vector<base::StringPiece>& error_path_reversed);


      std::optional<bool> npapi;

    };

    struct _3D {
      _3D();
      ~_3D();
      _3D(const _3D&) = delete;
      _3D& operator=(const _3D&) = delete;
      _3D(_3D&& rhs) noexcept;
      _3D& operator=(_3D&& rhs) noexcept;

      // Manifest key constants.
      static constexpr char kFeatures[] = "features";

      // Parses the given |key| from |root_dict|. Any keys not available to the
      // manifest will be ignored. On a parsing error, false is returned and |error|
      // and |error_path_reversed| are populated.
      static bool ParseFromDictionary(const base::Value::Dict& root_dict, base::StringPiece key, _3D& out, std::u16string& error, std::vector<base::StringPiece>& error_path_reversed);


      std::vector<_3DFeature> features;

    };

    struct Window {
      Window();
      ~Window();
      Window(const Window&) = delete;
      Window& operator=(const Window&) = delete;
      Window(Window&& rhs) noexcept;
      Window& operator=(Window&& rhs) noexcept;

      // Manifest key constants.
      static constexpr char kShape[] = "shape";

      // Parses the given |key| from |root_dict|. Any keys not available to the
      // manifest will be ignored. On a parsing error, false is returned and |error|
      // and |error_path_reversed| are populated.
      static bool ParseFromDictionary(const base::Value::Dict& root_dict, base::StringPiece key, Window& out, std::u16string& error, std::vector<base::StringPiece>& error_path_reversed);


      std::optional<bool> shape;

    };


    std::optional<Plugins> plugins;

    std::optional<_3D> _3d;

    std::optional<Window> window;

  };


  std::optional<Requirements> requirements;

};

}  // namespace requirements
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_REQUIREMENTS_H__
