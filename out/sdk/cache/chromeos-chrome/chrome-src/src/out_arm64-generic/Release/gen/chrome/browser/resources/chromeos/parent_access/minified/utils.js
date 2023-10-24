// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export function decodeMojoString16(str){return str.data.map((ch=>String.fromCodePoint(ch))).join("")}export function getBase64EncodedSrcForPng(pngBytes){const image=btoa(String.fromCharCode(...pngBytes));return"data:image/png;base64,"+image}