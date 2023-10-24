// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import"../../strings.m.js";import{ColorChangeUpdater}from"chrome://resources/cr_components/color_change_listener/colors_css_updater.js";import{loadTimeData}from"chrome://resources/js/load_time_data.js";export function configureJellyColors(){if(loadTimeData.getBoolean("isJellyEnabledForOsFeedback")){document.body.classList.add("jelly-enabled");ColorChangeUpdater.forDocument().start()}}window.onload=function(){configureJellyColors()};