// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function assert(value,message){if(value){return}throw new Error("Assertion failed"+(message?`: ${message}`:""))}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getRequiredElement(id){const el=document.querySelector(`#${id}`);assert(el);assert(el instanceof HTMLElement);return el}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function logsErrorDuringPageLoadOuter(){logsErrorDuringPageLoadInner()}function logsErrorDuringPageLoadInner(){console.error("WebUI JS Error: printing error on page load")}function logsErrorFromButtonClickHandler(){logsErrorFromButtonClickInner()}function logsErrorFromButtonClickInner(){console.error("WebUI JS Error: printing error on button click")}function throwExceptionHandler(){throwExceptionInner()}function throwExceptionInner(){throw new Error("WebUI JS Error: exception button clicked")}function promiseSuccessful(){console.error("WebUI JS Error: Promise success. This should never happen")}function unhandledPromiseRejection(){const promise=Promise.reject("WebUI JS Error: The rejector always rejects!");promise.then(promiseSuccessful)}getRequiredElement("error-button").onclick=logsErrorFromButtonClickHandler;getRequiredElement("exception-button").onclick=throwExceptionHandler;getRequiredElement("promise-button").onclick=unhandledPromiseRejection;logsErrorDuringPageLoadOuter();