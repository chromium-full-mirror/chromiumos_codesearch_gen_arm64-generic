// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/font_settings.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/font_settings.h"

#include <memory>
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
FontName::FontName(FontName&& rhs) = default;
FontName& FontName::operator=(FontName&& rhs) = default;
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
std::unique_ptr<FontName> FontName::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<FontName>();
  if (!value.is_dict()) {
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out);
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
absl::optional<FontName> FontName::FromValue(const base::Value::Dict& value) {
  FontName out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<FontName> FontName::FromValue(const base::Value& value) {
  FontName out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
    case SCRIPT_CODE_AFAK:
      return "Afak";
    case SCRIPT_CODE_ARAB:
      return "Arab";
    case SCRIPT_CODE_ARMI:
      return "Armi";
    case SCRIPT_CODE_ARMN:
      return "Armn";
    case SCRIPT_CODE_AVST:
      return "Avst";
    case SCRIPT_CODE_BALI:
      return "Bali";
    case SCRIPT_CODE_BAMU:
      return "Bamu";
    case SCRIPT_CODE_BASS:
      return "Bass";
    case SCRIPT_CODE_BATK:
      return "Batk";
    case SCRIPT_CODE_BENG:
      return "Beng";
    case SCRIPT_CODE_BLIS:
      return "Blis";
    case SCRIPT_CODE_BOPO:
      return "Bopo";
    case SCRIPT_CODE_BRAH:
      return "Brah";
    case SCRIPT_CODE_BRAI:
      return "Brai";
    case SCRIPT_CODE_BUGI:
      return "Bugi";
    case SCRIPT_CODE_BUHD:
      return "Buhd";
    case SCRIPT_CODE_CAKM:
      return "Cakm";
    case SCRIPT_CODE_CANS:
      return "Cans";
    case SCRIPT_CODE_CARI:
      return "Cari";
    case SCRIPT_CODE_CHAM:
      return "Cham";
    case SCRIPT_CODE_CHER:
      return "Cher";
    case SCRIPT_CODE_CIRT:
      return "Cirt";
    case SCRIPT_CODE_COPT:
      return "Copt";
    case SCRIPT_CODE_CPRT:
      return "Cprt";
    case SCRIPT_CODE_CYRL:
      return "Cyrl";
    case SCRIPT_CODE_CYRS:
      return "Cyrs";
    case SCRIPT_CODE_DEVA:
      return "Deva";
    case SCRIPT_CODE_DSRT:
      return "Dsrt";
    case SCRIPT_CODE_DUPL:
      return "Dupl";
    case SCRIPT_CODE_EGYD:
      return "Egyd";
    case SCRIPT_CODE_EGYH:
      return "Egyh";
    case SCRIPT_CODE_EGYP:
      return "Egyp";
    case SCRIPT_CODE_ELBA:
      return "Elba";
    case SCRIPT_CODE_ETHI:
      return "Ethi";
    case SCRIPT_CODE_GEOR:
      return "Geor";
    case SCRIPT_CODE_GEOK:
      return "Geok";
    case SCRIPT_CODE_GLAG:
      return "Glag";
    case SCRIPT_CODE_GOTH:
      return "Goth";
    case SCRIPT_CODE_GRAN:
      return "Gran";
    case SCRIPT_CODE_GREK:
      return "Grek";
    case SCRIPT_CODE_GUJR:
      return "Gujr";
    case SCRIPT_CODE_GURU:
      return "Guru";
    case SCRIPT_CODE_HANG:
      return "Hang";
    case SCRIPT_CODE_HANI:
      return "Hani";
    case SCRIPT_CODE_HANO:
      return "Hano";
    case SCRIPT_CODE_HANS:
      return "Hans";
    case SCRIPT_CODE_HANT:
      return "Hant";
    case SCRIPT_CODE_HEBR:
      return "Hebr";
    case SCRIPT_CODE_HLUW:
      return "Hluw";
    case SCRIPT_CODE_HMNG:
      return "Hmng";
    case SCRIPT_CODE_HUNG:
      return "Hung";
    case SCRIPT_CODE_INDS:
      return "Inds";
    case SCRIPT_CODE_ITAL:
      return "Ital";
    case SCRIPT_CODE_JAVA:
      return "Java";
    case SCRIPT_CODE_JPAN:
      return "Jpan";
    case SCRIPT_CODE_JURC:
      return "Jurc";
    case SCRIPT_CODE_KALI:
      return "Kali";
    case SCRIPT_CODE_KHAR:
      return "Khar";
    case SCRIPT_CODE_KHMR:
      return "Khmr";
    case SCRIPT_CODE_KHOJ:
      return "Khoj";
    case SCRIPT_CODE_KNDA:
      return "Knda";
    case SCRIPT_CODE_KPEL:
      return "Kpel";
    case SCRIPT_CODE_KTHI:
      return "Kthi";
    case SCRIPT_CODE_LANA:
      return "Lana";
    case SCRIPT_CODE_LAOO:
      return "Laoo";
    case SCRIPT_CODE_LATF:
      return "Latf";
    case SCRIPT_CODE_LATG:
      return "Latg";
    case SCRIPT_CODE_LATN:
      return "Latn";
    case SCRIPT_CODE_LEPC:
      return "Lepc";
    case SCRIPT_CODE_LIMB:
      return "Limb";
    case SCRIPT_CODE_LINA:
      return "Lina";
    case SCRIPT_CODE_LINB:
      return "Linb";
    case SCRIPT_CODE_LISU:
      return "Lisu";
    case SCRIPT_CODE_LOMA:
      return "Loma";
    case SCRIPT_CODE_LYCI:
      return "Lyci";
    case SCRIPT_CODE_LYDI:
      return "Lydi";
    case SCRIPT_CODE_MAND:
      return "Mand";
    case SCRIPT_CODE_MANI:
      return "Mani";
    case SCRIPT_CODE_MAYA:
      return "Maya";
    case SCRIPT_CODE_MEND:
      return "Mend";
    case SCRIPT_CODE_MERC:
      return "Merc";
    case SCRIPT_CODE_MERO:
      return "Mero";
    case SCRIPT_CODE_MLYM:
      return "Mlym";
    case SCRIPT_CODE_MOON:
      return "Moon";
    case SCRIPT_CODE_MONG:
      return "Mong";
    case SCRIPT_CODE_MROO:
      return "Mroo";
    case SCRIPT_CODE_MTEI:
      return "Mtei";
    case SCRIPT_CODE_MYMR:
      return "Mymr";
    case SCRIPT_CODE_NARB:
      return "Narb";
    case SCRIPT_CODE_NBAT:
      return "Nbat";
    case SCRIPT_CODE_NKGB:
      return "Nkgb";
    case SCRIPT_CODE_NKOO:
      return "Nkoo";
    case SCRIPT_CODE_NSHU:
      return "Nshu";
    case SCRIPT_CODE_OGAM:
      return "Ogam";
    case SCRIPT_CODE_OLCK:
      return "Olck";
    case SCRIPT_CODE_ORKH:
      return "Orkh";
    case SCRIPT_CODE_ORYA:
      return "Orya";
    case SCRIPT_CODE_OSMA:
      return "Osma";
    case SCRIPT_CODE_PALM:
      return "Palm";
    case SCRIPT_CODE_PERM:
      return "Perm";
    case SCRIPT_CODE_PHAG:
      return "Phag";
    case SCRIPT_CODE_PHLI:
      return "Phli";
    case SCRIPT_CODE_PHLP:
      return "Phlp";
    case SCRIPT_CODE_PHLV:
      return "Phlv";
    case SCRIPT_CODE_PHNX:
      return "Phnx";
    case SCRIPT_CODE_PLRD:
      return "Plrd";
    case SCRIPT_CODE_PRTI:
      return "Prti";
    case SCRIPT_CODE_RJNG:
      return "Rjng";
    case SCRIPT_CODE_RORO:
      return "Roro";
    case SCRIPT_CODE_RUNR:
      return "Runr";
    case SCRIPT_CODE_SAMR:
      return "Samr";
    case SCRIPT_CODE_SARA:
      return "Sara";
    case SCRIPT_CODE_SARB:
      return "Sarb";
    case SCRIPT_CODE_SAUR:
      return "Saur";
    case SCRIPT_CODE_SGNW:
      return "Sgnw";
    case SCRIPT_CODE_SHAW:
      return "Shaw";
    case SCRIPT_CODE_SHRD:
      return "Shrd";
    case SCRIPT_CODE_SIND:
      return "Sind";
    case SCRIPT_CODE_SINH:
      return "Sinh";
    case SCRIPT_CODE_SORA:
      return "Sora";
    case SCRIPT_CODE_SUND:
      return "Sund";
    case SCRIPT_CODE_SYLO:
      return "Sylo";
    case SCRIPT_CODE_SYRC:
      return "Syrc";
    case SCRIPT_CODE_SYRE:
      return "Syre";
    case SCRIPT_CODE_SYRJ:
      return "Syrj";
    case SCRIPT_CODE_SYRN:
      return "Syrn";
    case SCRIPT_CODE_TAGB:
      return "Tagb";
    case SCRIPT_CODE_TAKR:
      return "Takr";
    case SCRIPT_CODE_TALE:
      return "Tale";
    case SCRIPT_CODE_TALU:
      return "Talu";
    case SCRIPT_CODE_TAML:
      return "Taml";
    case SCRIPT_CODE_TANG:
      return "Tang";
    case SCRIPT_CODE_TAVT:
      return "Tavt";
    case SCRIPT_CODE_TELU:
      return "Telu";
    case SCRIPT_CODE_TENG:
      return "Teng";
    case SCRIPT_CODE_TFNG:
      return "Tfng";
    case SCRIPT_CODE_TGLG:
      return "Tglg";
    case SCRIPT_CODE_THAA:
      return "Thaa";
    case SCRIPT_CODE_THAI:
      return "Thai";
    case SCRIPT_CODE_TIBT:
      return "Tibt";
    case SCRIPT_CODE_TIRH:
      return "Tirh";
    case SCRIPT_CODE_UGAR:
      return "Ugar";
    case SCRIPT_CODE_VAII:
      return "Vaii";
    case SCRIPT_CODE_VISP:
      return "Visp";
    case SCRIPT_CODE_WARA:
      return "Wara";
    case SCRIPT_CODE_WOLE:
      return "Wole";
    case SCRIPT_CODE_XPEO:
      return "Xpeo";
    case SCRIPT_CODE_XSUX:
      return "Xsux";
    case SCRIPT_CODE_YIII:
      return "Yiii";
    case SCRIPT_CODE_ZMTH:
      return "Zmth";
    case SCRIPT_CODE_ZSYM:
      return "Zsym";
    case SCRIPT_CODE_ZYYY:
      return "Zyyy";
    case SCRIPT_CODE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

ScriptCode ParseScriptCode(base::StringPiece enum_string) {
  if (enum_string == "Afak")
    return SCRIPT_CODE_AFAK;
  if (enum_string == "Arab")
    return SCRIPT_CODE_ARAB;
  if (enum_string == "Armi")
    return SCRIPT_CODE_ARMI;
  if (enum_string == "Armn")
    return SCRIPT_CODE_ARMN;
  if (enum_string == "Avst")
    return SCRIPT_CODE_AVST;
  if (enum_string == "Bali")
    return SCRIPT_CODE_BALI;
  if (enum_string == "Bamu")
    return SCRIPT_CODE_BAMU;
  if (enum_string == "Bass")
    return SCRIPT_CODE_BASS;
  if (enum_string == "Batk")
    return SCRIPT_CODE_BATK;
  if (enum_string == "Beng")
    return SCRIPT_CODE_BENG;
  if (enum_string == "Blis")
    return SCRIPT_CODE_BLIS;
  if (enum_string == "Bopo")
    return SCRIPT_CODE_BOPO;
  if (enum_string == "Brah")
    return SCRIPT_CODE_BRAH;
  if (enum_string == "Brai")
    return SCRIPT_CODE_BRAI;
  if (enum_string == "Bugi")
    return SCRIPT_CODE_BUGI;
  if (enum_string == "Buhd")
    return SCRIPT_CODE_BUHD;
  if (enum_string == "Cakm")
    return SCRIPT_CODE_CAKM;
  if (enum_string == "Cans")
    return SCRIPT_CODE_CANS;
  if (enum_string == "Cari")
    return SCRIPT_CODE_CARI;
  if (enum_string == "Cham")
    return SCRIPT_CODE_CHAM;
  if (enum_string == "Cher")
    return SCRIPT_CODE_CHER;
  if (enum_string == "Cirt")
    return SCRIPT_CODE_CIRT;
  if (enum_string == "Copt")
    return SCRIPT_CODE_COPT;
  if (enum_string == "Cprt")
    return SCRIPT_CODE_CPRT;
  if (enum_string == "Cyrl")
    return SCRIPT_CODE_CYRL;
  if (enum_string == "Cyrs")
    return SCRIPT_CODE_CYRS;
  if (enum_string == "Deva")
    return SCRIPT_CODE_DEVA;
  if (enum_string == "Dsrt")
    return SCRIPT_CODE_DSRT;
  if (enum_string == "Dupl")
    return SCRIPT_CODE_DUPL;
  if (enum_string == "Egyd")
    return SCRIPT_CODE_EGYD;
  if (enum_string == "Egyh")
    return SCRIPT_CODE_EGYH;
  if (enum_string == "Egyp")
    return SCRIPT_CODE_EGYP;
  if (enum_string == "Elba")
    return SCRIPT_CODE_ELBA;
  if (enum_string == "Ethi")
    return SCRIPT_CODE_ETHI;
  if (enum_string == "Geor")
    return SCRIPT_CODE_GEOR;
  if (enum_string == "Geok")
    return SCRIPT_CODE_GEOK;
  if (enum_string == "Glag")
    return SCRIPT_CODE_GLAG;
  if (enum_string == "Goth")
    return SCRIPT_CODE_GOTH;
  if (enum_string == "Gran")
    return SCRIPT_CODE_GRAN;
  if (enum_string == "Grek")
    return SCRIPT_CODE_GREK;
  if (enum_string == "Gujr")
    return SCRIPT_CODE_GUJR;
  if (enum_string == "Guru")
    return SCRIPT_CODE_GURU;
  if (enum_string == "Hang")
    return SCRIPT_CODE_HANG;
  if (enum_string == "Hani")
    return SCRIPT_CODE_HANI;
  if (enum_string == "Hano")
    return SCRIPT_CODE_HANO;
  if (enum_string == "Hans")
    return SCRIPT_CODE_HANS;
  if (enum_string == "Hant")
    return SCRIPT_CODE_HANT;
  if (enum_string == "Hebr")
    return SCRIPT_CODE_HEBR;
  if (enum_string == "Hluw")
    return SCRIPT_CODE_HLUW;
  if (enum_string == "Hmng")
    return SCRIPT_CODE_HMNG;
  if (enum_string == "Hung")
    return SCRIPT_CODE_HUNG;
  if (enum_string == "Inds")
    return SCRIPT_CODE_INDS;
  if (enum_string == "Ital")
    return SCRIPT_CODE_ITAL;
  if (enum_string == "Java")
    return SCRIPT_CODE_JAVA;
  if (enum_string == "Jpan")
    return SCRIPT_CODE_JPAN;
  if (enum_string == "Jurc")
    return SCRIPT_CODE_JURC;
  if (enum_string == "Kali")
    return SCRIPT_CODE_KALI;
  if (enum_string == "Khar")
    return SCRIPT_CODE_KHAR;
  if (enum_string == "Khmr")
    return SCRIPT_CODE_KHMR;
  if (enum_string == "Khoj")
    return SCRIPT_CODE_KHOJ;
  if (enum_string == "Knda")
    return SCRIPT_CODE_KNDA;
  if (enum_string == "Kpel")
    return SCRIPT_CODE_KPEL;
  if (enum_string == "Kthi")
    return SCRIPT_CODE_KTHI;
  if (enum_string == "Lana")
    return SCRIPT_CODE_LANA;
  if (enum_string == "Laoo")
    return SCRIPT_CODE_LAOO;
  if (enum_string == "Latf")
    return SCRIPT_CODE_LATF;
  if (enum_string == "Latg")
    return SCRIPT_CODE_LATG;
  if (enum_string == "Latn")
    return SCRIPT_CODE_LATN;
  if (enum_string == "Lepc")
    return SCRIPT_CODE_LEPC;
  if (enum_string == "Limb")
    return SCRIPT_CODE_LIMB;
  if (enum_string == "Lina")
    return SCRIPT_CODE_LINA;
  if (enum_string == "Linb")
    return SCRIPT_CODE_LINB;
  if (enum_string == "Lisu")
    return SCRIPT_CODE_LISU;
  if (enum_string == "Loma")
    return SCRIPT_CODE_LOMA;
  if (enum_string == "Lyci")
    return SCRIPT_CODE_LYCI;
  if (enum_string == "Lydi")
    return SCRIPT_CODE_LYDI;
  if (enum_string == "Mand")
    return SCRIPT_CODE_MAND;
  if (enum_string == "Mani")
    return SCRIPT_CODE_MANI;
  if (enum_string == "Maya")
    return SCRIPT_CODE_MAYA;
  if (enum_string == "Mend")
    return SCRIPT_CODE_MEND;
  if (enum_string == "Merc")
    return SCRIPT_CODE_MERC;
  if (enum_string == "Mero")
    return SCRIPT_CODE_MERO;
  if (enum_string == "Mlym")
    return SCRIPT_CODE_MLYM;
  if (enum_string == "Moon")
    return SCRIPT_CODE_MOON;
  if (enum_string == "Mong")
    return SCRIPT_CODE_MONG;
  if (enum_string == "Mroo")
    return SCRIPT_CODE_MROO;
  if (enum_string == "Mtei")
    return SCRIPT_CODE_MTEI;
  if (enum_string == "Mymr")
    return SCRIPT_CODE_MYMR;
  if (enum_string == "Narb")
    return SCRIPT_CODE_NARB;
  if (enum_string == "Nbat")
    return SCRIPT_CODE_NBAT;
  if (enum_string == "Nkgb")
    return SCRIPT_CODE_NKGB;
  if (enum_string == "Nkoo")
    return SCRIPT_CODE_NKOO;
  if (enum_string == "Nshu")
    return SCRIPT_CODE_NSHU;
  if (enum_string == "Ogam")
    return SCRIPT_CODE_OGAM;
  if (enum_string == "Olck")
    return SCRIPT_CODE_OLCK;
  if (enum_string == "Orkh")
    return SCRIPT_CODE_ORKH;
  if (enum_string == "Orya")
    return SCRIPT_CODE_ORYA;
  if (enum_string == "Osma")
    return SCRIPT_CODE_OSMA;
  if (enum_string == "Palm")
    return SCRIPT_CODE_PALM;
  if (enum_string == "Perm")
    return SCRIPT_CODE_PERM;
  if (enum_string == "Phag")
    return SCRIPT_CODE_PHAG;
  if (enum_string == "Phli")
    return SCRIPT_CODE_PHLI;
  if (enum_string == "Phlp")
    return SCRIPT_CODE_PHLP;
  if (enum_string == "Phlv")
    return SCRIPT_CODE_PHLV;
  if (enum_string == "Phnx")
    return SCRIPT_CODE_PHNX;
  if (enum_string == "Plrd")
    return SCRIPT_CODE_PLRD;
  if (enum_string == "Prti")
    return SCRIPT_CODE_PRTI;
  if (enum_string == "Rjng")
    return SCRIPT_CODE_RJNG;
  if (enum_string == "Roro")
    return SCRIPT_CODE_RORO;
  if (enum_string == "Runr")
    return SCRIPT_CODE_RUNR;
  if (enum_string == "Samr")
    return SCRIPT_CODE_SAMR;
  if (enum_string == "Sara")
    return SCRIPT_CODE_SARA;
  if (enum_string == "Sarb")
    return SCRIPT_CODE_SARB;
  if (enum_string == "Saur")
    return SCRIPT_CODE_SAUR;
  if (enum_string == "Sgnw")
    return SCRIPT_CODE_SGNW;
  if (enum_string == "Shaw")
    return SCRIPT_CODE_SHAW;
  if (enum_string == "Shrd")
    return SCRIPT_CODE_SHRD;
  if (enum_string == "Sind")
    return SCRIPT_CODE_SIND;
  if (enum_string == "Sinh")
    return SCRIPT_CODE_SINH;
  if (enum_string == "Sora")
    return SCRIPT_CODE_SORA;
  if (enum_string == "Sund")
    return SCRIPT_CODE_SUND;
  if (enum_string == "Sylo")
    return SCRIPT_CODE_SYLO;
  if (enum_string == "Syrc")
    return SCRIPT_CODE_SYRC;
  if (enum_string == "Syre")
    return SCRIPT_CODE_SYRE;
  if (enum_string == "Syrj")
    return SCRIPT_CODE_SYRJ;
  if (enum_string == "Syrn")
    return SCRIPT_CODE_SYRN;
  if (enum_string == "Tagb")
    return SCRIPT_CODE_TAGB;
  if (enum_string == "Takr")
    return SCRIPT_CODE_TAKR;
  if (enum_string == "Tale")
    return SCRIPT_CODE_TALE;
  if (enum_string == "Talu")
    return SCRIPT_CODE_TALU;
  if (enum_string == "Taml")
    return SCRIPT_CODE_TAML;
  if (enum_string == "Tang")
    return SCRIPT_CODE_TANG;
  if (enum_string == "Tavt")
    return SCRIPT_CODE_TAVT;
  if (enum_string == "Telu")
    return SCRIPT_CODE_TELU;
  if (enum_string == "Teng")
    return SCRIPT_CODE_TENG;
  if (enum_string == "Tfng")
    return SCRIPT_CODE_TFNG;
  if (enum_string == "Tglg")
    return SCRIPT_CODE_TGLG;
  if (enum_string == "Thaa")
    return SCRIPT_CODE_THAA;
  if (enum_string == "Thai")
    return SCRIPT_CODE_THAI;
  if (enum_string == "Tibt")
    return SCRIPT_CODE_TIBT;
  if (enum_string == "Tirh")
    return SCRIPT_CODE_TIRH;
  if (enum_string == "Ugar")
    return SCRIPT_CODE_UGAR;
  if (enum_string == "Vaii")
    return SCRIPT_CODE_VAII;
  if (enum_string == "Visp")
    return SCRIPT_CODE_VISP;
  if (enum_string == "Wara")
    return SCRIPT_CODE_WARA;
  if (enum_string == "Wole")
    return SCRIPT_CODE_WOLE;
  if (enum_string == "Xpeo")
    return SCRIPT_CODE_XPEO;
  if (enum_string == "Xsux")
    return SCRIPT_CODE_XSUX;
  if (enum_string == "Yiii")
    return SCRIPT_CODE_YIII;
  if (enum_string == "Zmth")
    return SCRIPT_CODE_ZMTH;
  if (enum_string == "Zsym")
    return SCRIPT_CODE_ZSYM;
  if (enum_string == "Zyyy")
    return SCRIPT_CODE_ZYYY;
  return SCRIPT_CODE_NONE;
}

std::u16string GetScriptCodeParseError(base::StringPiece enum_string) {
  return u"expected \"Afak\" or \"Arab\" or \"Armi\" or \"Armn\" or \"Avst\" or \"Bali\" or \"Bamu\" or \"Bass\" or \"Batk\" or \"Beng\" or \"Blis\" or \"Bopo\" or \"Brah\" or \"Brai\" or \"Bugi\" or \"Buhd\" or \"Cakm\" or \"Cans\" or \"Cari\" or \"Cham\" or \"Cher\" or \"Cirt\" or \"Copt\" or \"Cprt\" or \"Cyrl\" or \"Cyrs\" or \"Deva\" or \"Dsrt\" or \"Dupl\" or \"Egyd\" or \"Egyh\" or \"Egyp\" or \"Elba\" or \"Ethi\" or \"Geor\" or \"Geok\" or \"Glag\" or \"Goth\" or \"Gran\" or \"Grek\" or \"Gujr\" or \"Guru\" or \"Hang\" or \"Hani\" or \"Hano\" or \"Hans\" or \"Hant\" or \"Hebr\" or \"Hluw\" or \"Hmng\" or \"Hung\" or \"Inds\" or \"Ital\" or \"Java\" or \"Jpan\" or \"Jurc\" or \"Kali\" or \"Khar\" or \"Khmr\" or \"Khoj\" or \"Knda\" or \"Kpel\" or \"Kthi\" or \"Lana\" or \"Laoo\" or \"Latf\" or \"Latg\" or \"Latn\" or \"Lepc\" or \"Limb\" or \"Lina\" or \"Linb\" or \"Lisu\" or \"Loma\" or \"Lyci\" or \"Lydi\" or \"Mand\" or \"Mani\" or \"Maya\" or \"Mend\" or \"Merc\" or \"Mero\" or \"Mlym\" or \"Moon\" or \"Mong\" or \"Mroo\" or \"Mtei\" or \"Mymr\" or \"Narb\" or \"Nbat\" or \"Nkgb\" or \"Nkoo\" or \"Nshu\" or \"Ogam\" or \"Olck\" or \"Orkh\" or \"Orya\" or \"Osma\" or \"Palm\" or \"Perm\" or \"Phag\" or \"Phli\" or \"Phlp\" or \"Phlv\" or \"Phnx\" or \"Plrd\" or \"Prti\" or \"Rjng\" or \"Roro\" or \"Runr\" or \"Samr\" or \"Sara\" or \"Sarb\" or \"Saur\" or \"Sgnw\" or \"Shaw\" or \"Shrd\" or \"Sind\" or \"Sinh\" or \"Sora\" or \"Sund\" or \"Sylo\" or \"Syrc\" or \"Syre\" or \"Syrj\" or \"Syrn\" or \"Tagb\" or \"Takr\" or \"Tale\" or \"Talu\" or \"Taml\" or \"Tang\" or \"Tavt\" or \"Telu\" or \"Teng\" or \"Tfng\" or \"Tglg\" or \"Thaa\" or \"Thai\" or \"Tibt\" or \"Tirh\" or \"Ugar\" or \"Vaii\" or \"Visp\" or \"Wara\" or \"Wole\" or \"Xpeo\" or \"Xsux\" or \"Yiii\" or \"Zmth\" or \"Zsym\" or \"Zyyy\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(GenericFamily enum_param) {
  switch (enum_param) {
    case GENERIC_FAMILY_STANDARD:
      return "standard";
    case GENERIC_FAMILY_SANSSERIF:
      return "sansserif";
    case GENERIC_FAMILY_SERIF:
      return "serif";
    case GENERIC_FAMILY_FIXED:
      return "fixed";
    case GENERIC_FAMILY_CURSIVE:
      return "cursive";
    case GENERIC_FAMILY_FANTASY:
      return "fantasy";
    case GENERIC_FAMILY_MATH:
      return "math";
    case GENERIC_FAMILY_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

GenericFamily ParseGenericFamily(base::StringPiece enum_string) {
  if (enum_string == "standard")
    return GENERIC_FAMILY_STANDARD;
  if (enum_string == "sansserif")
    return GENERIC_FAMILY_SANSSERIF;
  if (enum_string == "serif")
    return GENERIC_FAMILY_SERIF;
  if (enum_string == "fixed")
    return GENERIC_FAMILY_FIXED;
  if (enum_string == "cursive")
    return GENERIC_FAMILY_CURSIVE;
  if (enum_string == "fantasy")
    return GENERIC_FAMILY_FANTASY;
  if (enum_string == "math")
    return GENERIC_FAMILY_MATH;
  return GENERIC_FAMILY_NONE;
}

std::u16string GetGenericFamilyParseError(base::StringPiece enum_string) {
  return u"expected \"standard\" or \"sansserif\" or \"serif\" or \"fixed\" or \"cursive\" or \"fantasy\" or \"math\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(LevelOfControl enum_param) {
  switch (enum_param) {
    case LEVEL_OF_CONTROL_NOT_CONTROLLABLE:
      return "not_controllable";
    case LEVEL_OF_CONTROL_CONTROLLED_BY_OTHER_EXTENSIONS:
      return "controlled_by_other_extensions";
    case LEVEL_OF_CONTROL_CONTROLLABLE_BY_THIS_EXTENSION:
      return "controllable_by_this_extension";
    case LEVEL_OF_CONTROL_CONTROLLED_BY_THIS_EXTENSION:
      return "controlled_by_this_extension";
    case LEVEL_OF_CONTROL_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

LevelOfControl ParseLevelOfControl(base::StringPiece enum_string) {
  if (enum_string == "not_controllable")
    return LEVEL_OF_CONTROL_NOT_CONTROLLABLE;
  if (enum_string == "controlled_by_other_extensions")
    return LEVEL_OF_CONTROL_CONTROLLED_BY_OTHER_EXTENSIONS;
  if (enum_string == "controllable_by_this_extension")
    return LEVEL_OF_CONTROL_CONTROLLABLE_BY_THIS_EXTENSION;
  if (enum_string == "controlled_by_this_extension")
    return LEVEL_OF_CONTROL_CONTROLLED_BY_THIS_EXTENSION;
  return LEVEL_OF_CONTROL_NONE;
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
Params::Details::Details(Details&& rhs) = default;
Params::Details& Params::Details::operator=(Details&& rhs) = default;
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
absl::optional<Params::Details> Params::Details::FromValue(const base::Value::Dict& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::Details> Params::Details::FromValue(const base::Value& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& details_value = args[0];
    {
      if (!details_value.is_dict()) {
        return absl::nullopt;
      }
      if (!Details::Populate(details_value.GetDict(), params.details)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
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
Params::Details::Details(Details&& rhs) = default;
Params::Details& Params::Details::operator=(Details&& rhs) = default;
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
absl::optional<Params::Details> Params::Details::FromValue(const base::Value::Dict& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::Details> Params::Details::FromValue(const base::Value& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& details_value = args[0];
    {
      if (!details_value.is_dict()) {
        return absl::nullopt;
      }
      if (!Details::Populate(details_value.GetDict(), params.details)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


Results::Details::Details()
: level_of_control() {}

Results::Details::~Details() = default;
Results::Details::Details(Details&& rhs) = default;
Results::Details& Results::Details::operator=(Details&& rhs) = default;
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
Params::Details::Details(Details&& rhs) = default;
Params::Details& Params::Details::operator=(Details&& rhs) = default;
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
absl::optional<Params::Details> Params::Details::FromValue(const base::Value::Dict& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::Details> Params::Details::FromValue(const base::Value& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& details_value = args[0];
    {
      if (!details_value.is_dict()) {
        return absl::nullopt;
      }
      if (!Details::Populate(details_value.GetDict(), params.details)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
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
Params::Details::Details(Details&& rhs) = default;
Params::Details& Params::Details::operator=(Details&& rhs) = default;
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
absl::optional<Params::Details> Params::Details::FromValue(const base::Value::Dict& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::Details> Params::Details::FromValue(const base::Value& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& details_value = args[0];
    {
      if (!details_value.is_dict()) {
        return absl::nullopt;
      }
      else {
        Details temp;
        if (!Details::Populate(details_value.GetDict(), temp))
          return absl::nullopt;
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
Params::Details::Details(Details&& rhs) = default;
Params::Details& Params::Details::operator=(Details&& rhs) = default;
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
absl::optional<Params::Details> Params::Details::FromValue(const base::Value::Dict& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::Details> Params::Details::FromValue(const base::Value& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& details_value = args[0];
    {
      if (!details_value.is_dict()) {
        return absl::nullopt;
      }
      else {
        Details temp;
        if (!Details::Populate(details_value.GetDict(), temp))
          return absl::nullopt;
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
Results::Details::Details(Details&& rhs) = default;
Results::Details& Results::Details::operator=(Details&& rhs) = default;
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
Params::Details::Details(Details&& rhs) = default;
Params::Details& Params::Details::operator=(Details&& rhs) = default;
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
absl::optional<Params::Details> Params::Details::FromValue(const base::Value::Dict& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::Details> Params::Details::FromValue(const base::Value& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& details_value = args[0];
    {
      if (!details_value.is_dict()) {
        return absl::nullopt;
      }
      if (!Details::Populate(details_value.GetDict(), params.details)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
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
Params::Details::Details(Details&& rhs) = default;
Params::Details& Params::Details::operator=(Details&& rhs) = default;
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
absl::optional<Params::Details> Params::Details::FromValue(const base::Value::Dict& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::Details> Params::Details::FromValue(const base::Value& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& details_value = args[0];
    {
      if (!details_value.is_dict()) {
        return absl::nullopt;
      }
      else {
        Details temp;
        if (!Details::Populate(details_value.GetDict(), temp))
          return absl::nullopt;
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
Params::Details::Details(Details&& rhs) = default;
Params::Details& Params::Details::operator=(Details&& rhs) = default;
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
absl::optional<Params::Details> Params::Details::FromValue(const base::Value::Dict& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::Details> Params::Details::FromValue(const base::Value& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& details_value = args[0];
    {
      if (!details_value.is_dict()) {
        return absl::nullopt;
      }
      else {
        Details temp;
        if (!Details::Populate(details_value.GetDict(), temp))
          return absl::nullopt;
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
Results::Details::Details(Details&& rhs) = default;
Results::Details& Results::Details::operator=(Details&& rhs) = default;
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
Params::Details::Details(Details&& rhs) = default;
Params::Details& Params::Details::operator=(Details&& rhs) = default;
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
absl::optional<Params::Details> Params::Details::FromValue(const base::Value::Dict& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::Details> Params::Details::FromValue(const base::Value& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& details_value = args[0];
    {
      if (!details_value.is_dict()) {
        return absl::nullopt;
      }
      if (!Details::Populate(details_value.GetDict(), params.details)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
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
Params::Details::Details(Details&& rhs) = default;
Params::Details& Params::Details::operator=(Details&& rhs) = default;
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
absl::optional<Params::Details> Params::Details::FromValue(const base::Value::Dict& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::Details> Params::Details::FromValue(const base::Value& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& details_value = args[0];
    {
      if (!details_value.is_dict()) {
        return absl::nullopt;
      }
      else {
        Details temp;
        if (!Details::Populate(details_value.GetDict(), temp))
          return absl::nullopt;
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
Params::Details::Details(Details&& rhs) = default;
Params::Details& Params::Details::operator=(Details&& rhs) = default;
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
absl::optional<Params::Details> Params::Details::FromValue(const base::Value::Dict& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::Details> Params::Details::FromValue(const base::Value& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& details_value = args[0];
    {
      if (!details_value.is_dict()) {
        return absl::nullopt;
      }
      else {
        Details temp;
        if (!Details::Populate(details_value.GetDict(), temp))
          return absl::nullopt;
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
Results::Details::Details(Details&& rhs) = default;
Results::Details& Results::Details::operator=(Details&& rhs) = default;
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
Params::Details::Details(Details&& rhs) = default;
Params::Details& Params::Details::operator=(Details&& rhs) = default;
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
absl::optional<Params::Details> Params::Details::FromValue(const base::Value::Dict& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::Details> Params::Details::FromValue(const base::Value& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& details_value = args[0];
    {
      if (!details_value.is_dict()) {
        return absl::nullopt;
      }
      if (!Details::Populate(details_value.GetDict(), params.details)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
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
Details::Details(Details&& rhs) = default;
Details& Details::operator=(Details&& rhs) = default;
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
Details::Details(Details&& rhs) = default;
Details& Details::operator=(Details&& rhs) = default;
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
Details::Details(Details&& rhs) = default;
Details& Details::operator=(Details&& rhs) = default;
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
Details::Details(Details&& rhs) = default;
Details& Details::operator=(Details&& rhs) = default;
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

