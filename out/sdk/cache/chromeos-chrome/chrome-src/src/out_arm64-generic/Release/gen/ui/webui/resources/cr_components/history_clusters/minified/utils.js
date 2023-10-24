// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import{highlight}from"chrome://resources/js/search_highlight_utils.js";export function insertHighlightedTextWithMatchesIntoElement(container,text,matches){container.textContent="";const node=document.createTextNode(text);container.appendChild(node);const ranges=[];for(const match of matches){ranges.push({start:match.begin,length:match.end-match.begin})}if(ranges.length>0){highlight(node,ranges)}}