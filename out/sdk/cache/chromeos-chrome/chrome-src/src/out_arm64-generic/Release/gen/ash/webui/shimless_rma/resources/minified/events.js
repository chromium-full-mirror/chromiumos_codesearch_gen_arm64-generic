// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export const DISABLE_NEXT_BUTTON="disable-next-button";export const DISABLE_ALL_BUTTONS="disable-all-buttons";export const ENABLE_ALL_BUTTONS="enable-all-buttons";export const TRANSITION_STATE="transition-state";export const CLICK_NEXT_BUTTON="click-next-button";export function createCustomEvent(type,detail){return new CustomEvent(type,{bubbles:true,composed:true,detail:detail})}