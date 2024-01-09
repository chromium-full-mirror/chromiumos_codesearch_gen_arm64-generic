// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export function stringToMojoString16(str){const arr=[];for(let i=0;i<str.length;i++){arr.push(str.charCodeAt(i))}return{data:arr}}export function mojoString16ToString(str16){return String.fromCharCode(...str16.data)}export function stringToMojoUrl(s){return{url:s}}