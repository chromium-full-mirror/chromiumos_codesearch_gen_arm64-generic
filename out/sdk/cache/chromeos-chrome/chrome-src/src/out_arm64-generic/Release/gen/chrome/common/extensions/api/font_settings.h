// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/font_settings.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_FONT_SETTINGS_H__
#define CHROME_COMMON_EXTENSIONS_API_FONT_SETTINGS_H__

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
namespace font_settings {

//
// Types
//

// Represents a font name.
struct FontName {
  FontName();
  ~FontName();
  FontName(const FontName&) = delete;
  FontName& operator=(const FontName&) = delete;
  FontName(FontName&& rhs) noexcept;
  FontName& operator=(FontName&& rhs) noexcept;

  // Populates a FontName object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, FontName& out);

  // Populates a FontName object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, FontName& out);

  // Creates a deep copy of FontName.
  FontName Clone() const;

  // Creates a FontName object from a base::Value::Dict, or nullopt on failure.
  static std::optional<FontName> FromValue(const base::Value::Dict& value);

  // Creates a FontName object from a base::Value, or nullopt on failure.
  static std::optional<FontName> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisFontName object.
  base::Value::Dict ToValue() const;

  // The font ID.
  std::string font_id;

  // The display name of the font.
  std::string display_name;

};

// An ISO 15924 script code. The default, or global, script is represented by
// script code "Zyyy".
enum class ScriptCode {
  kNone = 0,
  kAfak,
  kArab,
  kArmi,
  kArmn,
  kAvst,
  kBali,
  kBamu,
  kBass,
  kBatk,
  kBeng,
  kBlis,
  kBopo,
  kBrah,
  kBrai,
  kBugi,
  kBuhd,
  kCakm,
  kCans,
  kCari,
  kCham,
  kCher,
  kCirt,
  kCopt,
  kCprt,
  kCyrl,
  kCyrs,
  kDeva,
  kDsrt,
  kDupl,
  kEgyd,
  kEgyh,
  kEgyp,
  kElba,
  kEthi,
  kGeor,
  kGeok,
  kGlag,
  kGoth,
  kGran,
  kGrek,
  kGujr,
  kGuru,
  kHang,
  kHani,
  kHano,
  kHans,
  kHant,
  kHebr,
  kHluw,
  kHmng,
  kHung,
  kInds,
  kItal,
  kJava,
  kJpan,
  kJurc,
  kKali,
  kKhar,
  kKhmr,
  kKhoj,
  kKnda,
  kKpel,
  kKthi,
  kLana,
  kLaoo,
  kLatf,
  kLatg,
  kLatn,
  kLepc,
  kLimb,
  kLina,
  kLinb,
  kLisu,
  kLoma,
  kLyci,
  kLydi,
  kMand,
  kMani,
  kMaya,
  kMend,
  kMerc,
  kMero,
  kMlym,
  kMoon,
  kMong,
  kMroo,
  kMtei,
  kMymr,
  kNarb,
  kNbat,
  kNkgb,
  kNkoo,
  kNshu,
  kOgam,
  kOlck,
  kOrkh,
  kOrya,
  kOsma,
  kPalm,
  kPerm,
  kPhag,
  kPhli,
  kPhlp,
  kPhlv,
  kPhnx,
  kPlrd,
  kPrti,
  kRjng,
  kRoro,
  kRunr,
  kSamr,
  kSara,
  kSarb,
  kSaur,
  kSgnw,
  kShaw,
  kShrd,
  kSind,
  kSinh,
  kSora,
  kSund,
  kSylo,
  kSyrc,
  kSyre,
  kSyrj,
  kSyrn,
  kTagb,
  kTakr,
  kTale,
  kTalu,
  kTaml,
  kTang,
  kTavt,
  kTelu,
  kTeng,
  kTfng,
  kTglg,
  kThaa,
  kThai,
  kTibt,
  kTirh,
  kUgar,
  kVaii,
  kVisp,
  kWara,
  kWole,
  kXpeo,
  kXsux,
  kYiii,
  kZmth,
  kZsym,
  kZyyy,
  kMaxValue = kZyyy,
};


const char* ToString(ScriptCode as_enum);
ScriptCode ParseScriptCode(base::StringPiece as_string);
std::u16string GetScriptCodeParseError(base::StringPiece as_string);

// A CSS generic font family.
enum class GenericFamily {
  kNone = 0,
  kStandard,
  kSansserif,
  kSerif,
  kFixed,
  kCursive,
  kFantasy,
  kMath,
  kMaxValue = kMath,
};


const char* ToString(GenericFamily as_enum);
GenericFamily ParseGenericFamily(base::StringPiece as_string);
std::u16string GetGenericFamilyParseError(base::StringPiece as_string);

// One of<br><var>not_controllable</var>: cannot be controlled by any
// extension<br><var>controlled_by_other_extensions</var>: controlled by
// extensions with higher
// precedence<br><var>controllable_by_this_extension</var>: can be controlled by
// this extension<br><var>controlled_by_this_extension</var>: controlled by this
// extension
enum class LevelOfControl {
  kNone = 0,
  kNotControllable,
  kControlledByOtherExtensions,
  kControllableByThisExtension,
  kControlledByThisExtension,
  kMaxValue = kControlledByThisExtension,
};


const char* ToString(LevelOfControl as_enum);
LevelOfControl ParseLevelOfControl(base::StringPiece as_string);
std::u16string GetLevelOfControlParseError(base::StringPiece as_string);


//
// Functions
//

namespace ClearFont {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  struct Details {
    Details();
    ~Details();
    Details(const Details&) = delete;
    Details& operator=(const Details&) = delete;
    Details(Details&& rhs) noexcept;
    Details& operator=(Details&& rhs) noexcept;

    // Populates a Details object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Details& out);

    // Populates a Details object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value::Dict& value, Details& out);

    // Creates a deep copy of Details.
    Details Clone() const;

    // Creates a Details object from a base::Value::Dict, or nullopt on failure.
    static std::optional<Details> FromValue(const base::Value::Dict& value);

    // Creates a Details object from a base::Value, or nullopt on failure.
    static std::optional<Details> FromValue(const base::Value& value);

    // The script for which the font should be cleared. If omitted, the global
    // script font setting is cleared.
    ScriptCode script;

    // The generic font family for which the font should be cleared.
    GenericFamily generic_family;

  };


  Details details;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace ClearFont

namespace GetFont {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  struct Details {
    Details();
    ~Details();
    Details(const Details&) = delete;
    Details& operator=(const Details&) = delete;
    Details(Details&& rhs) noexcept;
    Details& operator=(Details&& rhs) noexcept;

    // Populates a Details object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Details& out);

    // Populates a Details object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value::Dict& value, Details& out);

    // Creates a deep copy of Details.
    Details Clone() const;

    // Creates a Details object from a base::Value::Dict, or nullopt on failure.
    static std::optional<Details> FromValue(const base::Value::Dict& value);

    // Creates a Details object from a base::Value, or nullopt on failure.
    static std::optional<Details> FromValue(const base::Value& value);

    // The script for which the font should be retrieved. If omitted, the font
    // setting for the global script (script code "Zyyy") is retrieved.
    ScriptCode script;

    // The generic font family for which the font should be retrieved.
    GenericFamily generic_family;

  };


  Details details;


 private:
  Params();
};

namespace Results {

struct Details {
  Details();
  ~Details();
  Details(const Details&) = delete;
  Details& operator=(const Details&) = delete;
  Details(Details&& rhs) noexcept;
  Details& operator=(Details&& rhs) noexcept;

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDetails object.
  base::Value::Dict ToValue() const;

  // The font ID. Rather than the literal font ID preference value, this may be
  // the ID of the font that the system resolves the preference value to. So,
  // <var>fontId</var> can differ from the font passed to <code>setFont</code>,
  // if, for example, the font is not available on the system. The empty string
  // signifies fallback to the global script font setting.
  std::string font_id;

  // The level of control this extension has over the setting.
  LevelOfControl level_of_control;

};


base::Value::List Create(const Details& details);
}  // namespace Results

}  // namespace GetFont

namespace SetFont {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  struct Details {
    Details();
    ~Details();
    Details(const Details&) = delete;
    Details& operator=(const Details&) = delete;
    Details(Details&& rhs) noexcept;
    Details& operator=(Details&& rhs) noexcept;

    // Populates a Details object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Details& out);

    // Populates a Details object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value::Dict& value, Details& out);

    // Creates a deep copy of Details.
    Details Clone() const;

    // Creates a Details object from a base::Value::Dict, or nullopt on failure.
    static std::optional<Details> FromValue(const base::Value::Dict& value);

    // Creates a Details object from a base::Value, or nullopt on failure.
    static std::optional<Details> FromValue(const base::Value& value);

    // The script code which the font should be set. If omitted, the font setting
    // for the global script (script code "Zyyy") is set.
    ScriptCode script;

    // The generic font family for which the font should be set.
    GenericFamily generic_family;

    // The font ID. The empty string means to fallback to the global script font
    // setting.
    std::string font_id;

  };


  Details details;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetFont

namespace GetFontList {

namespace Results {

base::Value::List Create(const std::vector<FontName>& results);
}  // namespace Results

}  // namespace GetFontList

namespace ClearDefaultFontSize {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // This parameter is currently unused.
  struct Details {
    Details();
    ~Details();
    Details(const Details&) = delete;
    Details& operator=(const Details&) = delete;
    Details(Details&& rhs) noexcept;
    Details& operator=(Details&& rhs) noexcept;

    // Populates a Details object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Details& out);

    // Populates a Details object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value::Dict& value, Details& out);

    // Creates a deep copy of Details.
    Details Clone() const;

    // Creates a Details object from a base::Value::Dict, or nullopt on failure.
    static std::optional<Details> FromValue(const base::Value::Dict& value);

    // Creates a Details object from a base::Value, or nullopt on failure.
    static std::optional<Details> FromValue(const base::Value& value);

  };


  // This parameter is currently unused.
  std::optional<Details> details;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace ClearDefaultFontSize

namespace GetDefaultFontSize {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // This parameter is currently unused.
  struct Details {
    Details();
    ~Details();
    Details(const Details&) = delete;
    Details& operator=(const Details&) = delete;
    Details(Details&& rhs) noexcept;
    Details& operator=(Details&& rhs) noexcept;

    // Populates a Details object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Details& out);

    // Populates a Details object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value::Dict& value, Details& out);

    // Creates a deep copy of Details.
    Details Clone() const;

    // Creates a Details object from a base::Value::Dict, or nullopt on failure.
    static std::optional<Details> FromValue(const base::Value::Dict& value);

    // Creates a Details object from a base::Value, or nullopt on failure.
    static std::optional<Details> FromValue(const base::Value& value);

  };


  // This parameter is currently unused.
  std::optional<Details> details;


 private:
  Params();
};

namespace Results {

struct Details {
  Details();
  ~Details();
  Details(const Details&) = delete;
  Details& operator=(const Details&) = delete;
  Details(Details&& rhs) noexcept;
  Details& operator=(Details&& rhs) noexcept;

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDetails object.
  base::Value::Dict ToValue() const;

  // The font size in pixels.
  int pixel_size;

  // The level of control this extension has over the setting.
  LevelOfControl level_of_control;

};


base::Value::List Create(const Details& details);
}  // namespace Results

}  // namespace GetDefaultFontSize

namespace SetDefaultFontSize {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  struct Details {
    Details();
    ~Details();
    Details(const Details&) = delete;
    Details& operator=(const Details&) = delete;
    Details(Details&& rhs) noexcept;
    Details& operator=(Details&& rhs) noexcept;

    // Populates a Details object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Details& out);

    // Populates a Details object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value::Dict& value, Details& out);

    // Creates a deep copy of Details.
    Details Clone() const;

    // Creates a Details object from a base::Value::Dict, or nullopt on failure.
    static std::optional<Details> FromValue(const base::Value::Dict& value);

    // Creates a Details object from a base::Value, or nullopt on failure.
    static std::optional<Details> FromValue(const base::Value& value);

    // The font size in pixels.
    int pixel_size;

  };


  Details details;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetDefaultFontSize

namespace ClearDefaultFixedFontSize {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // This parameter is currently unused.
  struct Details {
    Details();
    ~Details();
    Details(const Details&) = delete;
    Details& operator=(const Details&) = delete;
    Details(Details&& rhs) noexcept;
    Details& operator=(Details&& rhs) noexcept;

    // Populates a Details object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Details& out);

    // Populates a Details object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value::Dict& value, Details& out);

    // Creates a deep copy of Details.
    Details Clone() const;

    // Creates a Details object from a base::Value::Dict, or nullopt on failure.
    static std::optional<Details> FromValue(const base::Value::Dict& value);

    // Creates a Details object from a base::Value, or nullopt on failure.
    static std::optional<Details> FromValue(const base::Value& value);

  };


  // This parameter is currently unused.
  std::optional<Details> details;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace ClearDefaultFixedFontSize

namespace GetDefaultFixedFontSize {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // This parameter is currently unused.
  struct Details {
    Details();
    ~Details();
    Details(const Details&) = delete;
    Details& operator=(const Details&) = delete;
    Details(Details&& rhs) noexcept;
    Details& operator=(Details&& rhs) noexcept;

    // Populates a Details object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Details& out);

    // Populates a Details object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value::Dict& value, Details& out);

    // Creates a deep copy of Details.
    Details Clone() const;

    // Creates a Details object from a base::Value::Dict, or nullopt on failure.
    static std::optional<Details> FromValue(const base::Value::Dict& value);

    // Creates a Details object from a base::Value, or nullopt on failure.
    static std::optional<Details> FromValue(const base::Value& value);

  };


  // This parameter is currently unused.
  std::optional<Details> details;


 private:
  Params();
};

namespace Results {

struct Details {
  Details();
  ~Details();
  Details(const Details&) = delete;
  Details& operator=(const Details&) = delete;
  Details(Details&& rhs) noexcept;
  Details& operator=(Details&& rhs) noexcept;

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDetails object.
  base::Value::Dict ToValue() const;

  // The font size in pixels.
  int pixel_size;

  // The level of control this extension has over the setting.
  LevelOfControl level_of_control;

};


base::Value::List Create(const Details& details);
}  // namespace Results

}  // namespace GetDefaultFixedFontSize

namespace SetDefaultFixedFontSize {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  struct Details {
    Details();
    ~Details();
    Details(const Details&) = delete;
    Details& operator=(const Details&) = delete;
    Details(Details&& rhs) noexcept;
    Details& operator=(Details&& rhs) noexcept;

    // Populates a Details object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Details& out);

    // Populates a Details object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value::Dict& value, Details& out);

    // Creates a deep copy of Details.
    Details Clone() const;

    // Creates a Details object from a base::Value::Dict, or nullopt on failure.
    static std::optional<Details> FromValue(const base::Value::Dict& value);

    // Creates a Details object from a base::Value, or nullopt on failure.
    static std::optional<Details> FromValue(const base::Value& value);

    // The font size in pixels.
    int pixel_size;

  };


  Details details;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetDefaultFixedFontSize

namespace ClearMinimumFontSize {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // This parameter is currently unused.
  struct Details {
    Details();
    ~Details();
    Details(const Details&) = delete;
    Details& operator=(const Details&) = delete;
    Details(Details&& rhs) noexcept;
    Details& operator=(Details&& rhs) noexcept;

    // Populates a Details object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Details& out);

    // Populates a Details object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value::Dict& value, Details& out);

    // Creates a deep copy of Details.
    Details Clone() const;

    // Creates a Details object from a base::Value::Dict, or nullopt on failure.
    static std::optional<Details> FromValue(const base::Value::Dict& value);

    // Creates a Details object from a base::Value, or nullopt on failure.
    static std::optional<Details> FromValue(const base::Value& value);

  };


  // This parameter is currently unused.
  std::optional<Details> details;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace ClearMinimumFontSize

namespace GetMinimumFontSize {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // This parameter is currently unused.
  struct Details {
    Details();
    ~Details();
    Details(const Details&) = delete;
    Details& operator=(const Details&) = delete;
    Details(Details&& rhs) noexcept;
    Details& operator=(Details&& rhs) noexcept;

    // Populates a Details object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Details& out);

    // Populates a Details object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value::Dict& value, Details& out);

    // Creates a deep copy of Details.
    Details Clone() const;

    // Creates a Details object from a base::Value::Dict, or nullopt on failure.
    static std::optional<Details> FromValue(const base::Value::Dict& value);

    // Creates a Details object from a base::Value, or nullopt on failure.
    static std::optional<Details> FromValue(const base::Value& value);

  };


  // This parameter is currently unused.
  std::optional<Details> details;


 private:
  Params();
};

namespace Results {

struct Details {
  Details();
  ~Details();
  Details(const Details&) = delete;
  Details& operator=(const Details&) = delete;
  Details(Details&& rhs) noexcept;
  Details& operator=(Details&& rhs) noexcept;

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDetails object.
  base::Value::Dict ToValue() const;

  // The font size in pixels.
  int pixel_size;

  // The level of control this extension has over the setting.
  LevelOfControl level_of_control;

};


base::Value::List Create(const Details& details);
}  // namespace Results

}  // namespace GetMinimumFontSize

namespace SetMinimumFontSize {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  struct Details {
    Details();
    ~Details();
    Details(const Details&) = delete;
    Details& operator=(const Details&) = delete;
    Details(Details&& rhs) noexcept;
    Details& operator=(Details&& rhs) noexcept;

    // Populates a Details object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Details& out);

    // Populates a Details object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value::Dict& value, Details& out);

    // Creates a deep copy of Details.
    Details Clone() const;

    // Creates a Details object from a base::Value::Dict, or nullopt on failure.
    static std::optional<Details> FromValue(const base::Value::Dict& value);

    // Creates a Details object from a base::Value, or nullopt on failure.
    static std::optional<Details> FromValue(const base::Value& value);

    // The font size in pixels.
    int pixel_size;

  };


  Details details;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetMinimumFontSize

//
// Events
//

namespace OnFontChanged {

extern const char kEventName[];  // "fontSettings.onFontChanged"

struct Details {
  Details();
  ~Details();
  Details(const Details&) = delete;
  Details& operator=(const Details&) = delete;
  Details(Details&& rhs) noexcept;
  Details& operator=(Details&& rhs) noexcept;

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDetails object.
  base::Value::Dict ToValue() const;

  // The font ID. See the description in <code>getFont</code>.
  std::string font_id;

  // The script code for which the font setting has changed.
  ScriptCode script;

  // The generic font family for which the font setting has changed.
  GenericFamily generic_family;

  // The level of control this extension has over the setting.
  LevelOfControl level_of_control;

};


base::Value::List Create(const Details& details);
}  // namespace OnFontChanged

namespace OnDefaultFontSizeChanged {

extern const char kEventName[];  // "fontSettings.onDefaultFontSizeChanged"

struct Details {
  Details();
  ~Details();
  Details(const Details&) = delete;
  Details& operator=(const Details&) = delete;
  Details(Details&& rhs) noexcept;
  Details& operator=(Details&& rhs) noexcept;

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDetails object.
  base::Value::Dict ToValue() const;

  // The font size in pixels.
  int pixel_size;

  // The level of control this extension has over the setting.
  LevelOfControl level_of_control;

};


base::Value::List Create(const Details& details);
}  // namespace OnDefaultFontSizeChanged

namespace OnDefaultFixedFontSizeChanged {

extern const char kEventName[];  // "fontSettings.onDefaultFixedFontSizeChanged"

struct Details {
  Details();
  ~Details();
  Details(const Details&) = delete;
  Details& operator=(const Details&) = delete;
  Details(Details&& rhs) noexcept;
  Details& operator=(Details&& rhs) noexcept;

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDetails object.
  base::Value::Dict ToValue() const;

  // The font size in pixels.
  int pixel_size;

  // The level of control this extension has over the setting.
  LevelOfControl level_of_control;

};


base::Value::List Create(const Details& details);
}  // namespace OnDefaultFixedFontSizeChanged

namespace OnMinimumFontSizeChanged {

extern const char kEventName[];  // "fontSettings.onMinimumFontSizeChanged"

struct Details {
  Details();
  ~Details();
  Details(const Details&) = delete;
  Details& operator=(const Details&) = delete;
  Details(Details&& rhs) noexcept;
  Details& operator=(Details&& rhs) noexcept;

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDetails object.
  base::Value::Dict ToValue() const;

  // The font size in pixels.
  int pixel_size;

  // The level of control this extension has over the setting.
  LevelOfControl level_of_control;

};


base::Value::List Create(const Details& details);
}  // namespace OnMinimumFontSizeChanged

}  // namespace font_settings
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_FONT_SETTINGS_H__
