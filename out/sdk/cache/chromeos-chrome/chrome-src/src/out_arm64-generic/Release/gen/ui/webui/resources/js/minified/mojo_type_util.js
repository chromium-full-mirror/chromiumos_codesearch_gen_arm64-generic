// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export function stringToMojoString16(s){return{data:Array.from(s,(c=>c.charCodeAt(0)))}}export function mojoString16ToString(str16){return str16.data.map((ch=>String.fromCodePoint(ch))).join("")}export function stringToMojoUrl(s){return{url:s}}