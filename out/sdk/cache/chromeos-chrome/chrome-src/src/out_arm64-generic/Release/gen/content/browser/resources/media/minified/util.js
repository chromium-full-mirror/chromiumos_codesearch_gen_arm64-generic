// Copyright 2013 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export function objectForEach(obj,f,optObj){let key;for(key in obj){if(obj.hasOwnProperty(key)){f.call(optObj,obj[key],key,obj)}}}export function millisecondsToString(timeMillis){function pad(num,len){num=num.toString();while(num.length<len){num="0"+num}return num}const date=new Date(timeMillis);return pad(date.getUTCHours(),2)+":"+pad(date.getUTCMinutes(),2)+":"+pad(date.getUTCSeconds(),2)+"."+pad(date.getMilliseconds()%1e3,3)}