// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import"chrome://resources/mojo/mojo/public/js/bindings.js";import"chrome://resources/mojo/url/mojom/url.mojom-webui.js";import{SeaPenProvider}from"./sea_pen.mojom-webui.js";let seaPenProvider=null;export function setSeaPenProviderForTesting(testProvider){seaPenProvider=testProvider}export function getSeaPenProvider(){if(!seaPenProvider){seaPenProvider=SeaPenProvider.getRemote()}return seaPenProvider}