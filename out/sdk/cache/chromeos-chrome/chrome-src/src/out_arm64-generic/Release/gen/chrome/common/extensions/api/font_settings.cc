// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/font_settings.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/font_settings.h"

#include <memory>
#include <optional>
#include <ostream>
#include <string>
#include <utility>
#include <vector>

#include "base/check.h"
#include "base/check_op.h"
#include "base/notreached.h"
#include "base/strings/string_number_conversions.h"
#include "base/strings/utf_string_conversions.h"
#include "base/values.h"
#include "tools/json_schema_compiler/util.h"
#include "base/strings/string_piece.h"


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace font_settings {
//
// Types
//

FontName::FontName()
 {}

FontName::~FontName() = default;
FontName::FontName(FontName&& rhs) noexcept = default;
FontName& FontName::operator=(FontName&& rhs) noexcept = default;
FontName FontName::Clone() const {
  FontName out;
  out.font_id = font_id;
  out.display_name = display_name;
  return out;
}

// static
bool FontName::Populate(
    const base::Value::Dict& dict, FontName& out) {
  const base::Value* font_id_value = dict.Find("fontId");
  if (!font_id_value) {
    return false;
  }
  {
    auto* temp = (*font_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.font_id = *temp;
  }

  const base::Value* display_name_value = dict.Find("displayName");
  if (!display_name_value) {
    return false;
  }
  {
    auto* temp = (*display_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.display_name = *temp;
  }

  return true;
}

// static
bool FontName::Populate(
    const base::Value& value, FontName& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<FontName> FontName::FromValue(const base::Value::Dict& value) {
  FontName out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<FontName> FontName::FromValue(const base::Value& value) {
  FontName out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict FontName::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("fontId", this->font_id);

  to_value_result.Set("displayName", this->display_name);


  return to_value_result;
}


const char* ToString(ScriptCode enum_param) {
  switch (enum_param) {
    case ScriptCode::kAfak:
      return "Afak";
    case ScriptCode::kArab:
      return "Arab";
    case ScriptCode::kArmi:
      return "Armi";
    case ScriptCode::kArmn:
      return "Armn";
    case ScriptCode::kAvst:
      return "Avst";
    case ScriptCode::kBali:
      return "Bali";
    case ScriptCode::kBamu:
      return "Bamu";
    case ScriptCode::kBass:
      return "Bass";
    case ScriptCode::kBatk:
      return "Batk";
    case ScriptCode::kBeng:
      return "Beng";
    case ScriptCode::kBlis:
      return "Blis";
    case ScriptCode::kBopo:
      return "Bopo";
    case ScriptCode::kBrah:
      return "Brah";
    case ScriptCode::kBrai:
      return "Brai";
    case ScriptCode::kBugi:
      return "Bugi";
    case ScriptCode::kBuhd:
      return "Buhd";
    case ScriptCode::kCakm:
      return "Cakm";
    case ScriptCode::kCans:
      return "Cans";
    case ScriptCode::kCari:
      return "Cari";
    case ScriptCode::kCham:
      return "Cham";
    case ScriptCode::kCher:
      return "Cher";
    case ScriptCode::kCirt:
      return "Cirt";
    case ScriptCode::kCopt:
      return "Copt";
    case ScriptCode::kCprt:
      return "Cprt";
    case ScriptCode::kCyrl:
      return "Cyrl";
    case ScriptCode::kCyrs:
      return "Cyrs";
    case ScriptCode::kDeva:
      return "Deva";
    case ScriptCode::kDsrt:
      return "Dsrt";
    case ScriptCode::kDupl:
      return "Dupl";
    case ScriptCode::kEgyd:
      return "Egyd";
    case ScriptCode::kEgyh:
      return "Egyh";
    case ScriptCode::kEgyp:
      return "Egyp";
    case ScriptCode::kElba:
      return "Elba";
    case ScriptCode::kEthi:
      return "Ethi";
    case ScriptCode::kGeor:
      return "Geor";
    case ScriptCode::kGeok:
      return "Geok";
    case ScriptCode::kGlag:
      return "Glag";
    case ScriptCode::kGoth:
      return "Goth";
    case ScriptCode::kGran:
      return "Gran";
    case ScriptCode::kGrek:
      return "Grek";
    case ScriptCode::kGujr:
      return "Gujr";
    case ScriptCode::kGuru:
      return "Guru";
    case ScriptCode::kHang:
      return "Hang";
    case ScriptCode::kHani:
      return "Hani";
    case ScriptCode::kHano:
      return "Hano";
    case ScriptCode::kHans:
      return "Hans";
    case ScriptCode::kHant:
      return "Hant";
    case ScriptCode::kHebr:
      return "Hebr";
    case ScriptCode::kHluw:
      return "Hluw";
    case ScriptCode::kHmng:
      return "Hmng";
    case ScriptCode::kHung:
      return "Hung";
    case ScriptCode::kInds:
      return "Inds";
    case ScriptCode::kItal:
      return "Ital";
    case ScriptCode::kJava:
      return "Java";
    case ScriptCode::kJpan:
      return "Jpan";
    case ScriptCode::kJurc:
      return "Jurc";
    case ScriptCode::kKali:
      return "Kali";
    case ScriptCode::kKhar:
      return "Khar";
    case ScriptCode::kKhmr:
      return "Khmr";
    case ScriptCode::kKhoj:
      return "Khoj";
    case ScriptCode::kKnda:
      return "Knda";
    case ScriptCode::kKpel:
      return "Kpel";
    case ScriptCode::kKthi:
      return "Kthi";
    case ScriptCode::kLana:
      return "Lana";
    case ScriptCode::kLaoo:
      return "Laoo";
    case ScriptCode::kLatf:
      return "Latf";
    case ScriptCode::kLatg:
      return "Latg";
    case ScriptCode::kLatn:
      return "Latn";
    case ScriptCode::kLepc:
      return "Lepc";
    case ScriptCode::kLimb:
      return "Limb";
    case ScriptCode::kLina:
      return "Lina";
    case ScriptCode::kLinb:
      return "Linb";
    case ScriptCode::kLisu:
      return "Lisu";
    case ScriptCode::kLoma:
      return "Loma";
    case ScriptCode::kLyci:
      return "Lyci";
    case ScriptCode::kLydi:
      return "Lydi";
    case ScriptCode::kMand:
      return "Mand";
    case ScriptCode::kMani:
      return "Mani";
    case ScriptCode::kMaya:
      return "Maya";
    case ScriptCode::kMend:
      return "Mend";
    case ScriptCode::kMerc:
      return "Merc";
    case ScriptCode::kMero:
      return "Mero";
    case ScriptCode::kMlym:
      return "Mlym";
    case ScriptCode::kMoon:
      return "Moon";
    case ScriptCode::kMong:
      return "Mong";
    case ScriptCode::kMroo:
      return "Mroo";
    case ScriptCode::kMtei:
      return "Mtei";
    case ScriptCode::kMymr:
      return "Mymr";
    case ScriptCode::kNarb:
      return "Narb";
    case ScriptCode::kNbat:
      return "Nbat";
    case ScriptCode::kNkgb:
      return "Nkgb";
    case ScriptCode::kNkoo:
      return "Nkoo";
    case ScriptCode::kNshu:
      return "Nshu";
    case ScriptCode::kOgam:
      return "Ogam";
    case ScriptCode::kOlck:
      return "Olck";
    case ScriptCode::kOrkh:
      return "Orkh";
    case ScriptCode::kOrya:
      return "Orya";
    case ScriptCode::kOsma:
      return "Osma";
    case ScriptCode::kPalm:
      return "Palm";
    case ScriptCode::kPerm:
      return "Perm";
    case ScriptCode::kPhag:
      return "Phag";
    case ScriptCode::kPhli:
      return "Phli";
    case ScriptCode::kPhlp:
      return "Phlp";
    case ScriptCode::kPhlv:
      return "Phlv";
    case ScriptCode::kPhnx:
      return "Phnx";
    case ScriptCode::kPlrd:
      return "Plrd";
    case ScriptCode::kPrti:
      return "Prti";
    case ScriptCode::kRjng:
      return "Rjng";
    case ScriptCode::kRoro:
      return "Roro";
    case ScriptCode::kRunr:
      return "Runr";
    case ScriptCode::kSamr:
      return "Samr";
    case ScriptCode::kSara:
      return "Sara";
    case ScriptCode::kSarb:
      return "Sarb";
    case ScriptCode::kSaur:
      return "Saur";
    case ScriptCode::kSgnw:
      return "Sgnw";
    case ScriptCode::kShaw:
      return "Shaw";
    case ScriptCode::kShrd:
      return "Shrd";
    case ScriptCode::kSind:
      return "Sind";
    case ScriptCode::kSinh:
      return "Sinh";
    case ScriptCode::kSora:
      return "Sora";
    case ScriptCode::kSund:
      return "Sund";
    case ScriptCode::kSylo:
      return "Sylo";
    case ScriptCode::kSyrc:
      return "Syrc";
    case ScriptCode::kSyre:
      return "Syre";
    case ScriptCode::kSyrj:
      return "Syrj";
    case ScriptCode::kSyrn:
      return "Syrn";
    case ScriptCode::kTagb:
      return "Tagb";
    case ScriptCode::kTakr:
      return "Takr";
    case ScriptCode::kTale:
      return "Tale";
    case ScriptCode::kTalu:
      return "Talu";
    case ScriptCode::kTaml:
      return "Taml";
    case ScriptCode::kTang:
      return "Tang";
    case ScriptCode::kTavt:
      return "Tavt";
    case ScriptCode::kTelu:
      return "Telu";
    case ScriptCode::kTeng:
      return "Teng";
    case ScriptCode::kTfng:
      return "Tfng";
    case ScriptCode::kTglg:
      return "Tglg";
    case ScriptCode::kThaa:
      return "Thaa";
    case ScriptCode::kThai:
      return "Thai";
    case ScriptCode::kTibt:
      return "Tibt";
    case ScriptCode::kTirh:
      return "Tirh";
    case ScriptCode::kUgar:
      return "Ugar";
    case ScriptCode::kVaii:
      return "Vaii";
    case ScriptCode::kVisp:
      return "Visp";
    case ScriptCode::kWara:
      return "Wara";
    case ScriptCode::kWole:
      return "Wole";
    case ScriptCode::kXpeo:
      return "Xpeo";
    case ScriptCode::kXsux:
      return "Xsux";
    case ScriptCode::kYiii:
      return "Yiii";
    case ScriptCode::kZmth:
      return "Zmth";
    case ScriptCode::kZsym:
      return "Zsym";
    case ScriptCode::kZyyy:
      return "Zyyy";
    case ScriptCode::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ScriptCode ParseScriptCode(base::StringPiece enum_string) {
  if (enum_string == "Afak")
    return ScriptCode::kAfak;
  if (enum_string == "Arab")
    return ScriptCode::kArab;
  if (enum_string == "Armi")
    return ScriptCode::kArmi;
  if (enum_string == "Armn")
    return ScriptCode::kArmn;
  if (enum_string == "Avst")
    return ScriptCode::kAvst;
  if (enum_string == "Bali")
    return ScriptCode::kBali;
  if (enum_string == "Bamu")
    return ScriptCode::kBamu;
  if (enum_string == "Bass")
    return ScriptCode::kBass;
  if (enum_string == "Batk")
    return ScriptCode::kBatk;
  if (enum_string == "Beng")
    return ScriptCode::kBeng;
  if (enum_string == "Blis")
    return ScriptCode::kBlis;
  if (enum_string == "Bopo")
    return ScriptCode::kBopo;
  if (enum_string == "Brah")
    return ScriptCode::kBrah;
  if (enum_string == "Brai")
    return ScriptCode::kBrai;
  if (enum_string == "Bugi")
    return ScriptCode::kBugi;
  if (enum_string == "Buhd")
    return ScriptCode::kBuhd;
  if (enum_string == "Cakm")
    return ScriptCode::kCakm;
  if (enum_string == "Cans")
    return ScriptCode::kCans;
  if (enum_string == "Cari")
    return ScriptCode::kCari;
  if (enum_string == "Cham")
    return ScriptCode::kCham;
  if (enum_string == "Cher")
    return ScriptCode::kCher;
  if (enum_string == "Cirt")
    return ScriptCode::kCirt;
  if (enum_string == "Copt")
    return ScriptCode::kCopt;
  if (enum_string == "Cprt")
    return ScriptCode::kCprt;
  if (enum_string == "Cyrl")
    return ScriptCode::kCyrl;
  if (enum_string == "Cyrs")
    return ScriptCode::kCyrs;
  if (enum_string == "Deva")
    return ScriptCode::kDeva;
  if (enum_string == "Dsrt")
    return ScriptCode::kDsrt;
  if (enum_string == "Dupl")
    return ScriptCode::kDupl;
  if (enum_string == "Egyd")
    return ScriptCode::kEgyd;
  if (enum_string == "Egyh")
    return ScriptCode::kEgyh;
  if (enum_string == "Egyp")
    return ScriptCode::kEgyp;
  if (enum_string == "Elba")
    return ScriptCode::kElba;
  if (enum_string == "Ethi")
    return ScriptCode::kEthi;
  if (enum_string == "Geor")
    return ScriptCode::kGeor;
  if (enum_string == "Geok")
    return ScriptCode::kGeok;
  if (enum_string == "Glag")
    return ScriptCode::kGlag;
  if (enum_string == "Goth")
    return ScriptCode::kGoth;
  if (enum_string == "Gran")
    return ScriptCode::kGran;
  if (enum_string == "Grek")
    return ScriptCode::kGrek;
  if (enum_string == "Gujr")
    return ScriptCode::kGujr;
  if (enum_string == "Guru")
    return ScriptCode::kGuru;
  if (enum_string == "Hang")
    return ScriptCode::kHang;
  if (enum_string == "Hani")
    return ScriptCode::kHani;
  if (enum_string == "Hano")
    return ScriptCode::kHano;
  if (enum_string == "Hans")
    return ScriptCode::kHans;
  if (enum_string == "Hant")
    return ScriptCode::kHant;
  if (enum_string == "Hebr")
    return ScriptCode::kHebr;
  if (enum_string == "Hluw")
    return ScriptCode::kHluw;
  if (enum_string == "Hmng")
    return ScriptCode::kHmng;
  if (enum_string == "Hung")
    return ScriptCode::kHung;
  if (enum_string == "Inds")
    return ScriptCode::kInds;
  if (enum_string == "Ital")
    return ScriptCode::kItal;
  if (enum_string == "Java")
    return ScriptCode::kJava;
  if (enum_string == "Jpan")
    return ScriptCode::kJpan;
  if (enum_string == "Jurc")
    return ScriptCode::kJurc;
  if (enum_string == "Kali")
    return ScriptCode::kKali;
  if (enum_string == "Khar")
    return ScriptCode::kKhar;
  if (enum_string == "Khmr")
    return ScriptCode::kKhmr;
  if (enum_string == "Khoj")
    return ScriptCode::kKhoj;
  if (enum_string == "Knda")
    return ScriptCode::kKnda;
  if (enum_string == "Kpel")
    return ScriptCode::kKpel;
  if (enum_string == "Kthi")
    return ScriptCode::kKthi;
  if (enum_string == "Lana")
    return ScriptCode::kLana;
  if (enum_string == "Laoo")
    return ScriptCode::kLaoo;
  if (enum_string == "Latf")
    return ScriptCode::kLatf;
  if (enum_string == "Latg")
    return ScriptCode::kLatg;
  if (enum_string == "Latn")
    return ScriptCode::kLatn;
  if (enum_string == "Lepc")
    return ScriptCode::kLepc;
  if (enum_string == "Limb")
    return ScriptCode::kLimb;
  if (enum_string == "Lina")
    return ScriptCode::kLina;
  if (enum_string == "Linb")
    return ScriptCode::kLinb;
  if (enum_string == "Lisu")
    return ScriptCode::kLisu;
  if (enum_string == "Loma")
    return ScriptCode::kLoma;
  if (enum_string == "Lyci")
    return ScriptCode::kLyci;
  if (enum_string == "Lydi")
    return ScriptCode::kLydi;
  if (enum_string == "Mand")
    return ScriptCode::kMand;
  if (enum_string == "Mani")
    return ScriptCode::kMani;
  if (enum_string == "Maya")
    return ScriptCode::kMaya;
  if (enum_string == "Mend")
    return ScriptCode::kMend;
  if (enum_string == "Merc")
    return ScriptCode::kMerc;
  if (enum_string == "Mero")
    return ScriptCode::kMero;
  if (enum_string == "Mlym")
    return ScriptCode::kMlym;
  if (enum_string == "Moon")
    return ScriptCode::kMoon;
  if (enum_string == "Mong")
    return ScriptCode::kMong;
  if (enum_string == "Mroo")
    return ScriptCode::kMroo;
  if (enum_string == "Mtei")
    return ScriptCode::kMtei;
  if (enum_string == "Mymr")
    return ScriptCode::kMymr;
  if (enum_string == "Narb")
    return ScriptCode::kNarb;
  if (enum_string == "Nbat")
    return ScriptCode::kNbat;
  if (enum_string == "Nkgb")
    return ScriptCode::kNkgb;
  if (enum_string == "Nkoo")
    return ScriptCode::kNkoo;
  if (enum_string == "Nshu")
    return ScriptCode::kNshu;
  if (enum_string == "Ogam")
    return ScriptCode::kOgam;
  if (enum_string == "Olck")
    return ScriptCode::kOlck;
  if (enum_string == "Orkh")
    return ScriptCode::kOrkh;
  if (enum_string == "Orya")
    return ScriptCode::kOrya;
  if (enum_string == "Osma")
    return ScriptCode::kOsma;
  if (enum_string == "Palm")
    return ScriptCode::kPalm;
  if (enum_string == "Perm")
    return ScriptCode::kPerm;
  if (enum_string == "Phag")
    return ScriptCode::kPhag;
  if (enum_string == "Phli")
    return ScriptCode::kPhli;
  if (enum_string == "Phlp")
    return ScriptCode::kPhlp;
  if (enum_string == "Phlv")
    return ScriptCode::kPhlv;
  if (enum_string == "Phnx")
    return ScriptCode::kPhnx;
  if (enum_string == "Plrd")
    return ScriptCode::kPlrd;
  if (enum_string == "Prti")
    return ScriptCode::kPrti;
  if (enum_string == "Rjng")
    return ScriptCode::kRjng;
  if (enum_string == "Roro")
    return ScriptCode::kRoro;
  if (enum_string == "Runr")
    return ScriptCode::kRunr;
  if (enum_string == "Samr")
    return ScriptCode::kSamr;
  if (enum_string == "Sara")
    return ScriptCode::kSara;
  if (enum_string == "Sarb")
    return ScriptCode::kSarb;
  if (enum_string == "Saur")
    return ScriptCode::kSaur;
  if (enum_string == "Sgnw")
    return ScriptCode::kSgnw;
  if (enum_string == "Shaw")
    return ScriptCode::kShaw;
  if (enum_string == "Shrd")
    return ScriptCode::kShrd;
  if (enum_string == "Sind")
    return ScriptCode::kSind;
  if (enum_string == "Sinh")
    return ScriptCode::kSinh;
  if (enum_string == "Sora")
    return ScriptCode::kSora;
  if (enum_string == "Sund")
    return ScriptCode::kSund;
  if (enum_string == "Sylo")
    return ScriptCode::kSylo;
  if (enum_string == "Syrc")
    return ScriptCode::kSyrc;
  if (enum_string == "Syre")
    return ScriptCode::kSyre;
  if (enum_string == "Syrj")
    return ScriptCode::kSyrj;
  if (enum_string == "Syrn")
    return ScriptCode::kSyrn;
  if (enum_string == "Tagb")
    return ScriptCode::kTagb;
  if (enum_string == "Takr")
    return ScriptCode::kTakr;
  if (enum_string == "Tale")
    return ScriptCode::kTale;
  if (enum_string == "Talu")
    return ScriptCode::kTalu;
  if (enum_string == "Taml")
    return ScriptCode::kTaml;
  if (enum_string == "Tang")
    return ScriptCode::kTang;
  if (enum_string == "Tavt")
    return ScriptCode::kTavt;
  if (enum_string == "Telu")
    return ScriptCode::kTelu;
  if (enum_string == "Teng")
    return ScriptCode::kTeng;
  if (enum_string == "Tfng")
    return ScriptCode::kTfng;
  if (enum_string == "Tglg")
    return ScriptCode::kTglg;
  if (enum_string == "Thaa")
    return ScriptCode::kThaa;
  if (enum_string == "Thai")
    return ScriptCode::kThai;
  if (enum_string == "Tibt")
    return ScriptCode::kTibt;
  if (enum_string == "Tirh")
    return ScriptCode::kTirh;
  if (enum_string == "Ugar")
    return ScriptCode::kUgar;
  if (enum_string == "Vaii")
    return ScriptCode::kVaii;
  if (enum_string == "Visp")
    return ScriptCode::kVisp;
  if (enum_string == "Wara")
    return ScriptCode::kWara;
  if (enum_string == "Wole")
    return ScriptCode::kWole;
  if (enum_string == "Xpeo")
    return ScriptCode::kXpeo;
  if (enum_string == "Xsux")
    return ScriptCode::kXsux;
  if (enum_string == "Yiii")
    return ScriptCode::kYiii;
  if (enum_string == "Zmth")
    return ScriptCode::kZmth;
  if (enum_string == "Zsym")
    return ScriptCode::kZsym;
  if (enum_string == "Zyyy")
    return ScriptCode::kZyyy;
  return ScriptCode::kNone;
}

std::u16string GetScriptCodeParseError(base::StringPiece enum_string) {
  return u"expected \"Afak\" or \"Arab\" or \"Armi\" or \"Armn\" or \"Avst\" or \"Bali\" or \"Bamu\" or \"Bass\" or \"Batk\" or \"Beng\" or \"Blis\" or \"Bopo\" or \"Brah\" or \"Brai\" or \"Bugi\" or \"Buhd\" or \"Cakm\" or \"Cans\" or \"Cari\" or \"Cham\" or \"Cher\" or \"Cirt\" or \"Copt\" or \"Cprt\" or \"Cyrl\" or \"Cyrs\" or \"Deva\" or \"Dsrt\" or \"Dupl\" or \"Egyd\" or \"Egyh\" or \"Egyp\" or \"Elba\" or \"Ethi\" or \"Geor\" or \"Geok\" or \"Glag\" or \"Goth\" or \"Gran\" or \"Grek\" or \"Gujr\" or \"Guru\" or \"Hang\" or \"Hani\" or \"Hano\" or \"Hans\" or \"Hant\" or \"Hebr\" or \"Hluw\" or \"Hmng\" or \"Hung\" or \"Inds\" or \"Ital\" or \"Java\" or \"Jpan\" or \"Jurc\" or \"Kali\" or \"Khar\" or \"Khmr\" or \"Khoj\" or \"Knda\" or \"Kpel\" or \"Kthi\" or \"Lana\" or \"Laoo\" or \"Latf\" or \"Latg\" or \"Latn\" or \"Lepc\" or \"Limb\" or \"Lina\" or \"Linb\" or \"Lisu\" or \"Loma\" or \"Lyci\" or \"Lydi\" or \"Mand\" or \"Mani\" or \"Maya\" or \"Mend\" or \"Merc\" or \"Mero\" or \"Mlym\" or \"Moon\" or \"Mong\" or \"Mroo\" or \"Mtei\" or \"Mymr\" or \"Narb\" or \"Nbat\" or \"Nkgb\" or \"Nkoo\" or \"Nshu\" or \"Ogam\" or \"Olck\" or \"Orkh\" or \"Orya\" or \"Osma\" or \"Palm\" or \"Perm\" or \"Phag\" or \"Phli\" or \"Phlp\" or \"Phlv\" or \"Phnx\" or \"Plrd\" or \"Prti\" or \"Rjng\" or \"Roro\" or \"Runr\" or \"Samr\" or \"Sara\" or \"Sarb\" or \"Saur\" or \"Sgnw\" or \"Shaw\" or \"Shrd\" or \"Sind\" or \"Sinh\" or \"Sora\" or \"Sund\" or \"Sylo\" or \"Syrc\" or \"Syre\" or \"Syrj\" or \"Syrn\" or \"Tagb\" or \"Takr\" or \"Tale\" or \"Talu\" or \"Taml\" or \"Tang\" or \"Tavt\" or \"Telu\" or \"Teng\" or \"Tfng\" or \"Tglg\" or \"Thaa\" or \"Thai\" or \"Tibt\" or \"Tirh\" or \"Ugar\" or \"Vaii\" or \"Visp\" or \"Wara\" or \"Wole\" or \"Xpeo\" or \"Xsux\" or \"Yiii\" or \"Zmth\" or \"Zsym\" or \"Zyyy\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(GenericFamily enum_param) {
  switch (enum_param) {
    case GenericFamily::kStandard:
      return "standard";
    case GenericFamily::kSansserif:
      return "sansserif";
    case GenericFamily::kSerif:
      return "serif";
    case GenericFamily::kFixed:
      return "fixed";
    case GenericFamily::kCursive:
      return "cursive";
    case GenericFamily::kFantasy:
      return "fantasy";
    case GenericFamily::kMath:
      return "math";
    case GenericFamily::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

GenericFamily ParseGenericFamily(base::StringPiece enum_string) {
  if (enum_string == "standard")
    return GenericFamily::kStandard;
  if (enum_string == "sansserif")
    return GenericFamily::kSansserif;
  if (enum_string == "serif")
    return GenericFamily::kSerif;
  if (enum_string == "fixed")
    return GenericFamily::kFixed;
  if (enum_string == "cursive")
    return GenericFamily::kCursive;
  if (enum_string == "fantasy")
    return GenericFamily::kFantasy;
  if (enum_string == "math")
    return GenericFamily::kMath;
  return GenericFamily::kNone;
}

std::u16string GetGenericFamilyParseError(base::StringPiece enum_string) {
  return u"expected \"standard\" or \"sansserif\" or \"serif\" or \"fixed\" or \"cursive\" or \"fantasy\" or \"math\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(LevelOfControl enum_param) {
  switch (enum_param) {
    case LevelOfControl::kNotControllable:
      return "not_controllable";
    case LevelOfControl::kControlledByOtherExtensions:
      return "controlled_by_other_extensions";
    case LevelOfControl::kControllableByThisExtension:
      return "controllable_by_this_extension";
    case LevelOfControl::kControlledByThisExtension:
      return "controlled_by_this_extension";
    case LevelOfControl::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

LevelOfControl ParseLevelOfControl(base::StringPiece enum_string) {
  if (enum_string == "not_controllable")
    return LevelOfControl::kNotControllable;
  if (enum_string == "controlled_by_other_extensions")
    return LevelOfControl::kControlledByOtherExtensions;
  if (enum_string == "controllable_by_this_extension")
    return LevelOfControl::kControllableByThisExtension;
  if (enum_string == "controlled_by_this_extension")
    return LevelOfControl::kControlledByThisExtension;
  return LevelOfControl::kNone;
}

std::u16string GetLevelOfControlParseError(base::StringPiece enum_string) {
  return u"expected \"not_controllable\" or \"controlled_by_other_extensions\" or \"controllable_by_this_extension\" or \"controlled_by_this_extension\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}



//
// Functions
//

namespace ClearFont {

Params::Details::Details()
: script(),
generic_family() {}

Params::Details::~Details() = default;
Params::Details::Details(Details&& rhs) noexcept = default;
Params::Details& Params::Details::operator=(Details&& rhs) noexcept = default;
Params::Details Params::Details::Clone() const {
  Details out;
  out.script = script;
  out.generic_family = generic_family;
  return out;
}

// static
bool Params::Details::Populate(
    const base::Value::Dict& dict, Details& out) {
  out.script = ScriptCode();
  const base::Value* script_value = dict.Find("script");
  if (script_value) {
    {
      const std::string* script_code_as_string = (*script_value).GetIfString();
      if (!script_code_as_string) {
        return false;
      }
      out.script = ParseScriptCode(*script_code_as_string);
      if (out.script == ScriptCode()) {
        return false;
      }
    }
    } else {
    out.script = ScriptCode();
  }

  const base::Value* generic_family_value = dict.Find("genericFamily");
  if (!generic_family_value) {
    return false;
  }
  {
    const std::string* generic_family_as_string = (*generic_family_value).GetIfString();
    if (!generic_family_as_string) {
      return false;
    }
    out.generic_family = ParseGenericFamily(*generic_family_as_string);
    if (out.generic_family == GenericFamily()) {
      return false;
    }
  }

  return true;
}

// static
bool Params::Details::Populate(
    const base::Value& value, Details& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::Details> Params::Details::FromValue(const base::Value::Dict& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::Details> Params::Details::FromValue(const base::Value& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& details_value = args[0];
    {
      if (!details_value.is_dict()) {
        return std::nullopt;
      }
      if (!Details::Populate(details_value.GetDict(), params.details)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace ClearFont

namespace GetFont {

Params::Details::Details()
: script(),
generic_family() {}

Params::Details::~Details() = default;
Params::Details::Details(Details&& rhs) noexcept = default;
Params::Details& Params::Details::operator=(Details&& rhs) noexcept = default;
Params::Details Params::Details::Clone() const {
  Details out;
  out.script = script;
  out.generic_family = generic_family;
  return out;
}

// static
bool Params::Details::Populate(
    const base::Value::Dict& dict, Details& out) {
  out.script = ScriptCode();
  const base::Value* script_value = dict.Find("script");
  if (script_value) {
    {
      const std::string* script_code_as_string = (*script_value).GetIfString();
      if (!script_code_as_string) {
        return false;
      }
      out.script = ParseScriptCode(*script_code_as_string);
      if (out.script == ScriptCode()) {
        return false;
      }
    }
    } else {
    out.script = ScriptCode();
  }

  const base::Value* generic_family_value = dict.Find("genericFamily");
  if (!generic_family_value) {
    return false;
  }
  {
    const std::string* generic_family_as_string = (*generic_family_value).GetIfString();
    if (!generic_family_as_string) {
      return false;
    }
    out.generic_family = ParseGenericFamily(*generic_family_as_string);
    if (out.generic_family == GenericFamily()) {
      return false;
    }
  }

  return true;
}

// static
bool Params::Details::Populate(
    const base::Value& value, Details& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::Details> Params::Details::FromValue(const base::Value::Dict& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::Details> Params::Details::FromValue(const base::Value& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& details_value = args[0];
    {
      if (!details_value.is_dict()) {
        return std::nullopt;
      }
      if (!Details::Populate(details_value.GetDict(), params.details)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


Results::Details::Details()
: level_of_control() {}

Results::Details::~Details() = default;
Results::Details::Details(Details&& rhs) noexcept = default;
Results::Details& Results::Details::operator=(Details&& rhs) noexcept = default;
base::Value::Dict Results::Details::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("fontId", this->font_id);

  to_value_result.Set("levelOfControl", font_settings::ToString(this->level_of_control));


  return to_value_result;
}


base::Value::List Results::Create(const Details& details) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((details).ToValue());

  return create_results;
}
}  // namespace GetFont

namespace SetFont {

Params::Details::Details()
: script(),
generic_family() {}

Params::Details::~Details() = default;
Params::Details::Details(Details&& rhs) noexcept = default;
Params::Details& Params::Details::operator=(Details&& rhs) noexcept = default;
Params::Details Params::Details::Clone() const {
  Details out;
  out.script = script;
  out.generic_family = generic_family;
  out.font_id = font_id;
  return out;
}

// static
bool Params::Details::Populate(
    const base::Value::Dict& dict, Details& out) {
  out.script = ScriptCode();
  const base::Value* script_value = dict.Find("script");
  if (script_value) {
    {
      const std::string* script_code_as_string = (*script_value).GetIfString();
      if (!script_code_as_string) {
        return false;
      }
      out.script = ParseScriptCode(*script_code_as_string);
      if (out.script == ScriptCode()) {
        return false;
      }
    }
    } else {
    out.script = ScriptCode();
  }

  const base::Value* generic_family_value = dict.Find("genericFamily");
  if (!generic_family_value) {
    return false;
  }
  {
    const std::string* generic_family_as_string = (*generic_family_value).GetIfString();
    if (!generic_family_as_string) {
      return false;
    }
    out.generic_family = ParseGenericFamily(*generic_family_as_string);
    if (out.generic_family == GenericFamily()) {
      return false;
    }
  }

  const base::Value* font_id_value = dict.Find("fontId");
  if (!font_id_value) {
    return false;
  }
  {
    auto* temp = (*font_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.font_id = *temp;
  }

  return true;
}

// static
bool Params::Details::Populate(
    const base::Value& value, Details& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::Details> Params::Details::FromValue(const base::Value::Dict& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::Details> Params::Details::FromValue(const base::Value& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& details_value = args[0];
    {
      if (!details_value.is_dict()) {
        return std::nullopt;
      }
      if (!Details::Populate(details_value.GetDict(), params.details)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace SetFont

namespace GetFontList {

base::Value::List Results::Create(const std::vector<FontName>& results) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(results));

  return create_results;
}
}  // namespace GetFontList

namespace ClearDefaultFontSize {

Params::Details::Details()
 {}

Params::Details::~Details() = default;
Params::Details::Details(Details&& rhs) noexcept = default;
Params::Details& Params::Details::operator=(Details&& rhs) noexcept = default;
Params::Details Params::Details::Clone() const {
  Details out;
  return out;
}

// static
bool Params::Details::Populate(
    const base::Value::Dict& dict, Details& out) {
  return true;
}

// static
bool Params::Details::Populate(
    const base::Value& value, Details& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::Details> Params::Details::FromValue(const base::Value::Dict& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::Details> Params::Details::FromValue(const base::Value& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& details_value = args[0];
    {
      if (!details_value.is_dict()) {
        return std::nullopt;
      }
      else {
        Details temp;
        if (!Details::Populate(details_value.GetDict(), temp))
          return std::nullopt;
        params.details = std::move(temp);
      }
    }
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace ClearDefaultFontSize

namespace GetDefaultFontSize {

Params::Details::Details()
 {}

Params::Details::~Details() = default;
Params::Details::Details(Details&& rhs) noexcept = default;
Params::Details& Params::Details::operator=(Details&& rhs) noexcept = default;
Params::Details Params::Details::Clone() const {
  Details out;
  return out;
}

// static
bool Params::Details::Populate(
    const base::Value::Dict& dict, Details& out) {
  return true;
}

// static
bool Params::Details::Populate(
    const base::Value& value, Details& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::Details> Params::Details::FromValue(const base::Value::Dict& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::Details> Params::Details::FromValue(const base::Value& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& details_value = args[0];
    {
      if (!details_value.is_dict()) {
        return std::nullopt;
      }
      else {
        Details temp;
        if (!Details::Populate(details_value.GetDict(), temp))
          return std::nullopt;
        params.details = std::move(temp);
      }
    }
  }

  return params;
}


Results::Details::Details()
: pixel_size(0),
level_of_control() {}

Results::Details::~Details() = default;
Results::Details::Details(Details&& rhs) noexcept = default;
Results::Details& Results::Details::operator=(Details&& rhs) noexcept = default;
base::Value::Dict Results::Details::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("pixelSize", this->pixel_size);

  to_value_result.Set("levelOfControl", font_settings::ToString(this->level_of_control));


  return to_value_result;
}


base::Value::List Results::Create(const Details& details) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((details).ToValue());

  return create_results;
}
}  // namespace GetDefaultFontSize

namespace SetDefaultFontSize {

Params::Details::Details()
: pixel_size(0) {}

Params::Details::~Details() = default;
Params::Details::Details(Details&& rhs) noexcept = default;
Params::Details& Params::Details::operator=(Details&& rhs) noexcept = default;
Params::Details Params::Details::Clone() const {
  Details out;
  out.pixel_size = pixel_size;
  return out;
}

// static
bool Params::Details::Populate(
    const base::Value::Dict& dict, Details& out) {
  const base::Value* pixel_size_value = dict.Find("pixelSize");
  if (!pixel_size_value) {
    return false;
  }
  {
    auto temp = (*pixel_size_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.pixel_size = *temp;
  }

  return true;
}

// static
bool Params::Details::Populate(
    const base::Value& value, Details& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::Details> Params::Details::FromValue(const base::Value::Dict& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::Details> Params::Details::FromValue(const base::Value& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& details_value = args[0];
    {
      if (!details_value.is_dict()) {
        return std::nullopt;
      }
      if (!Details::Populate(details_value.GetDict(), params.details)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace SetDefaultFontSize

namespace ClearDefaultFixedFontSize {

Params::Details::Details()
 {}

Params::Details::~Details() = default;
Params::Details::Details(Details&& rhs) noexcept = default;
Params::Details& Params::Details::operator=(Details&& rhs) noexcept = default;
Params::Details Params::Details::Clone() const {
  Details out;
  return out;
}

// static
bool Params::Details::Populate(
    const base::Value::Dict& dict, Details& out) {
  return true;
}

// static
bool Params::Details::Populate(
    const base::Value& value, Details& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::Details> Params::Details::FromValue(const base::Value::Dict& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::Details> Params::Details::FromValue(const base::Value& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& details_value = args[0];
    {
      if (!details_value.is_dict()) {
        return std::nullopt;
      }
      else {
        Details temp;
        if (!Details::Populate(details_value.GetDict(), temp))
          return std::nullopt;
        params.details = std::move(temp);
      }
    }
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace ClearDefaultFixedFontSize

namespace GetDefaultFixedFontSize {

Params::Details::Details()
 {}

Params::Details::~Details() = default;
Params::Details::Details(Details&& rhs) noexcept = default;
Params::Details& Params::Details::operator=(Details&& rhs) noexcept = default;
Params::Details Params::Details::Clone() const {
  Details out;
  return out;
}

// static
bool Params::Details::Populate(
    const base::Value::Dict& dict, Details& out) {
  return true;
}

// static
bool Params::Details::Populate(
    const base::Value& value, Details& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::Details> Params::Details::FromValue(const base::Value::Dict& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::Details> Params::Details::FromValue(const base::Value& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& details_value = args[0];
    {
      if (!details_value.is_dict()) {
        return std::nullopt;
      }
      else {
        Details temp;
        if (!Details::Populate(details_value.GetDict(), temp))
          return std::nullopt;
        params.details = std::move(temp);
      }
    }
  }

  return params;
}


Results::Details::Details()
: pixel_size(0),
level_of_control() {}

Results::Details::~Details() = default;
Results::Details::Details(Details&& rhs) noexcept = default;
Results::Details& Results::Details::operator=(Details&& rhs) noexcept = default;
base::Value::Dict Results::Details::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("pixelSize", this->pixel_size);

  to_value_result.Set("levelOfControl", font_settings::ToString(this->level_of_control));


  return to_value_result;
}


base::Value::List Results::Create(const Details& details) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((details).ToValue());

  return create_results;
}
}  // namespace GetDefaultFixedFontSize

namespace SetDefaultFixedFontSize {

Params::Details::Details()
: pixel_size(0) {}

Params::Details::~Details() = default;
Params::Details::Details(Details&& rhs) noexcept = default;
Params::Details& Params::Details::operator=(Details&& rhs) noexcept = default;
Params::Details Params::Details::Clone() const {
  Details out;
  out.pixel_size = pixel_size;
  return out;
}

// static
bool Params::Details::Populate(
    const base::Value::Dict& dict, Details& out) {
  const base::Value* pixel_size_value = dict.Find("pixelSize");
  if (!pixel_size_value) {
    return false;
  }
  {
    auto temp = (*pixel_size_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.pixel_size = *temp;
  }

  return true;
}

// static
bool Params::Details::Populate(
    const base::Value& value, Details& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::Details> Params::Details::FromValue(const base::Value::Dict& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::Details> Params::Details::FromValue(const base::Value& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& details_value = args[0];
    {
      if (!details_value.is_dict()) {
        return std::nullopt;
      }
      if (!Details::Populate(details_value.GetDict(), params.details)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace SetDefaultFixedFontSize

namespace ClearMinimumFontSize {

Params::Details::Details()
 {}

Params::Details::~Details() = default;
Params::Details::Details(Details&& rhs) noexcept = default;
Params::Details& Params::Details::operator=(Details&& rhs) noexcept = default;
Params::Details Params::Details::Clone() const {
  Details out;
  return out;
}

// static
bool Params::Details::Populate(
    const base::Value::Dict& dict, Details& out) {
  return true;
}

// static
bool Params::Details::Populate(
    const base::Value& value, Details& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::Details> Params::Details::FromValue(const base::Value::Dict& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::Details> Params::Details::FromValue(const base::Value& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& details_value = args[0];
    {
      if (!details_value.is_dict()) {
        return std::nullopt;
      }
      else {
        Details temp;
        if (!Details::Populate(details_value.GetDict(), temp))
          return std::nullopt;
        params.details = std::move(temp);
      }
    }
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace ClearMinimumFontSize

namespace GetMinimumFontSize {

Params::Details::Details()
 {}

Params::Details::~Details() = default;
Params::Details::Details(Details&& rhs) noexcept = default;
Params::Details& Params::Details::operator=(Details&& rhs) noexcept = default;
Params::Details Params::Details::Clone() const {
  Details out;
  return out;
}

// static
bool Params::Details::Populate(
    const base::Value::Dict& dict, Details& out) {
  return true;
}

// static
bool Params::Details::Populate(
    const base::Value& value, Details& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::Details> Params::Details::FromValue(const base::Value::Dict& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::Details> Params::Details::FromValue(const base::Value& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& details_value = args[0];
    {
      if (!details_value.is_dict()) {
        return std::nullopt;
      }
      else {
        Details temp;
        if (!Details::Populate(details_value.GetDict(), temp))
          return std::nullopt;
        params.details = std::move(temp);
      }
    }
  }

  return params;
}


Results::Details::Details()
: pixel_size(0),
level_of_control() {}

Results::Details::~Details() = default;
Results::Details::Details(Details&& rhs) noexcept = default;
Results::Details& Results::Details::operator=(Details&& rhs) noexcept = default;
base::Value::Dict Results::Details::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("pixelSize", this->pixel_size);

  to_value_result.Set("levelOfControl", font_settings::ToString(this->level_of_control));


  return to_value_result;
}


base::Value::List Results::Create(const Details& details) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((details).ToValue());

  return create_results;
}
}  // namespace GetMinimumFontSize

namespace SetMinimumFontSize {

Params::Details::Details()
: pixel_size(0) {}

Params::Details::~Details() = default;
Params::Details::Details(Details&& rhs) noexcept = default;
Params::Details& Params::Details::operator=(Details&& rhs) noexcept = default;
Params::Details Params::Details::Clone() const {
  Details out;
  out.pixel_size = pixel_size;
  return out;
}

// static
bool Params::Details::Populate(
    const base::Value::Dict& dict, Details& out) {
  const base::Value* pixel_size_value = dict.Find("pixelSize");
  if (!pixel_size_value) {
    return false;
  }
  {
    auto temp = (*pixel_size_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.pixel_size = *temp;
  }

  return true;
}

// static
bool Params::Details::Populate(
    const base::Value& value, Details& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::Details> Params::Details::FromValue(const base::Value::Dict& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::Details> Params::Details::FromValue(const base::Value& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& details_value = args[0];
    {
      if (!details_value.is_dict()) {
        return std::nullopt;
      }
      if (!Details::Populate(details_value.GetDict(), params.details)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace SetMinimumFontSize

//
// Events
//

namespace OnFontChanged {

const char kEventName[] = "fontSettings.onFontChanged";

Details::Details()
: script(),
generic_family(),
level_of_control() {}

Details::~Details() = default;
Details::Details(Details&& rhs) noexcept = default;
Details& Details::operator=(Details&& rhs) noexcept = default;
base::Value::Dict Details::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("fontId", this->font_id);

  if (this->script != ScriptCode()) {
    to_value_result.Set("script", font_settings::ToString(this->script));

  }
  to_value_result.Set("genericFamily", font_settings::ToString(this->generic_family));

  to_value_result.Set("levelOfControl", font_settings::ToString(this->level_of_control));


  return to_value_result;
}


base::Value::List Create(const Details& details) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((details).ToValue());

  return create_results;
}

}  // namespace OnFontChanged

namespace OnDefaultFontSizeChanged {

const char kEventName[] = "fontSettings.onDefaultFontSizeChanged";

Details::Details()
: pixel_size(0),
level_of_control() {}

Details::~Details() = default;
Details::Details(Details&& rhs) noexcept = default;
Details& Details::operator=(Details&& rhs) noexcept = default;
base::Value::Dict Details::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("pixelSize", this->pixel_size);

  to_value_result.Set("levelOfControl", font_settings::ToString(this->level_of_control));


  return to_value_result;
}


base::Value::List Create(const Details& details) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((details).ToValue());

  return create_results;
}

}  // namespace OnDefaultFontSizeChanged

namespace OnDefaultFixedFontSizeChanged {

const char kEventName[] = "fontSettings.onDefaultFixedFontSizeChanged";

Details::Details()
: pixel_size(0),
level_of_control() {}

Details::~Details() = default;
Details::Details(Details&& rhs) noexcept = default;
Details& Details::operator=(Details&& rhs) noexcept = default;
base::Value::Dict Details::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("pixelSize", this->pixel_size);

  to_value_result.Set("levelOfControl", font_settings::ToString(this->level_of_control));


  return to_value_result;
}


base::Value::List Create(const Details& details) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((details).ToValue());

  return create_results;
}

}  // namespace OnDefaultFixedFontSizeChanged

namespace OnMinimumFontSizeChanged {

const char kEventName[] = "fontSettings.onMinimumFontSizeChanged";

Details::Details()
: pixel_size(0),
level_of_control() {}

Details::~Details() = default;
Details::Details(Details&& rhs) noexcept = default;
Details& Details::operator=(Details&& rhs) noexcept = default;
base::Value::Dict Details::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("pixelSize", this->pixel_size);

  to_value_result.Set("levelOfControl", font_settings::ToString(this->level_of_control));


  return to_value_result;
}


base::Value::List Create(const Details& details) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((details).ToValue());

  return create_results;
}

}  // namespace OnMinimumFontSizeChanged

}  // namespace font_settings
}  // namespace api
}  // namespace extensions

