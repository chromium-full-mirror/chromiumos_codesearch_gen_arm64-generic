// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// LINT.IfChange
// `DEFAULT` is not defined in tools/emoji_data.py for `Tone` and `Gender`
// because it is only relevant for frontend persistence.
export var Tone;
(function (Tone) {
    Tone[Tone["DEFAULT"] = 0] = "DEFAULT";
    Tone[Tone["LIGHT"] = 1] = "LIGHT";
    Tone[Tone["MEDIUM_LIGHT"] = 2] = "MEDIUM_LIGHT";
    Tone[Tone["MEDIUM"] = 3] = "MEDIUM";
    Tone[Tone["MEDIUM_DARK"] = 4] = "MEDIUM_DARK";
    Tone[Tone["DARK"] = 5] = "DARK";
})(Tone || (Tone = {}));
export var Gender;
(function (Gender) {
    Gender[Gender["DEFAULT"] = 0] = "DEFAULT";
    Gender[Gender["WOMAN"] = 1] = "WOMAN";
    Gender[Gender["MAN"] = 2] = "MAN";
})(Gender || (Gender = {}));
export var CategoryEnum;
(function (CategoryEnum) {
    CategoryEnum["EMOJI"] = "emoji";
    CategoryEnum["EMOTICON"] = "emoticon";
    CategoryEnum["SYMBOL"] = "symbol";
    CategoryEnum["GIF"] = "gif";
})(CategoryEnum || (CategoryEnum = {}));
