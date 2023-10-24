// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This is the shared code for security interstitials. It is used for both SSL
// interstitials and Safe Browsing interstitials.

/**
 * @typedef {{
 *   dontProceed: function(),
 *   proceed: function(),
 *   showMoreSection: function(),
 *   openHelpCenter: function(),
 *   openDiagnostic: function(),
 *   reload: function(),
 *   openDateSettings: function(),
 *   openLogin: function(),
 *   doReport: function(),
 *   dontReport: function(),
 *   openReportingPrivacy: function(),
 *   openWhitepaper: function(),
 *   reportPhishingError: function(),
 * }}
 */
// eslint-disable-next-line no-var
var certificateErrorPageController;

// Should match security_interstitials::SecurityInterstitialCommand
/** @enum {number} */
const SecurityInterstitialCommandId = {
  CMD_DONT_PROCEED: 0,
  CMD_PROCEED: 1,
  // Ways for user to get more information
  CMD_SHOW_MORE_SECTION: 2,
  CMD_OPEN_HELP_CENTER: 3,
  CMD_OPEN_DIAGNOSTIC: 4,
  // Primary button actions
  CMD_RELOAD: 5,
  CMD_OPEN_DATE_SETTINGS: 6,
  CMD_OPEN_LOGIN: 7,
  // Safe Browsing Extended Reporting
  CMD_DO_REPORT: 8,
  CMD_DONT_REPORT: 9,
  CMD_OPEN_REPORTING_PRIVACY: 10,
  CMD_OPEN_WHITEPAPER: 11,
  // Report a phishing error.
  CMD_REPORT_PHISHING_ERROR: 12,
  // Open enhanced protection settings.
  CMD_OPEN_ENHANCED_PROTECTION_SETTINGS: 13,
};

const HIDDEN_CLASS = 'hidden';

/**
 * A convenience method for sending commands to the parent page.
 * @param {SecurityInterstitialCommandId} cmd  The command to send.
 */
function sendCommand(cmd) {
  if (window.certificateErrorPageController) {
    switch (cmd) {
      case SecurityInterstitialCommandId.CMD_DONT_PROCEED:
        certificateErrorPageController.dontProceed();
        break;
      case SecurityInterstitialCommandId.CMD_PROCEED:
        certificateErrorPageController.proceed();
        break;
      case SecurityInterstitialCommandId.CMD_SHOW_MORE_SECTION:
        certificateErrorPageController.showMoreSection();
        break;
      case SecurityInterstitialCommandId.CMD_OPEN_HELP_CENTER:
        certificateErrorPageController.openHelpCenter();
        break;
      case SecurityInterstitialCommandId.CMD_OPEN_DIAGNOSTIC:
        certificateErrorPageController.openDiagnostic();
        break;
      case SecurityInterstitialCommandId.CMD_RELOAD:
        certificateErrorPageController.reload();
        break;
      case SecurityInterstitialCommandId.CMD_OPEN_DATE_SETTINGS:
        certificateErrorPageController.openDateSettings();
        break;
      case SecurityInterstitialCommandId.CMD_OPEN_LOGIN:
        certificateErrorPageController.openLogin();
        break;
      case SecurityInterstitialCommandId.CMD_DO_REPORT:
        certificateErrorPageController.doReport();
        break;
      case SecurityInterstitialCommandId.CMD_DONT_REPORT:
        certificateErrorPageController.dontReport();
        break;
      case SecurityInterstitialCommandId.CMD_OPEN_REPORTING_PRIVACY:
        certificateErrorPageController.openReportingPrivacy();
        break;
      case SecurityInterstitialCommandId.CMD_OPEN_WHITEPAPER:
        certificateErrorPageController.openWhitepaper();
        break;
      case SecurityInterstitialCommandId.CMD_REPORT_PHISHING_ERROR:
        certificateErrorPageController.reportPhishingError();
        break;
      case SecurityInterstitialCommandId.CMD_OPEN_ENHANCED_PROTECTION_SETTINGS:
        certificateErrorPageController.openEnhancedProtectionSettings();
        break;
    }
    return;
  }
  // 
  if (window.domAutomationController) {
    window.domAutomationController.send(cmd);
  }
  // 
  // 
}

/**
 * Call this to stop clicks on <a href="#"> links from scrolling to the top of
 * the page (and possibly showing a # in the link).
 */
function preventDefaultOnPoundLinkClicks() {
  const anchors = document.body.querySelectorAll('a[href="#"]');
  for (const anchor of anchors) {
    anchor.addEventListener('click', e => e.preventDefault());
  }
}

// 

//

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


/**
 * Restores the interstitial content to the initial state if the window size
 * switches to a small view.
 */
function onResize() {
  const mediaQuery = '(max-height:11.25em) and (max-width:18.75em),' +
       '(max-height:18.75em) and (max-width:11.25em),' +
       '(max-height:5em), (max-width:5em)';

  // Check for change in window size.
  if (window.matchMedia(mediaQuery).matches) {
    document.querySelector('#details').classList.add(HIDDEN_CLASS);
    document.querySelector('#main-content').classList.remove(HIDDEN_CLASS);
    document.querySelector('#icon').setAttribute(
        'aria-label', loadTimeData.getString('heading'));
  } else {
    document.querySelector('#icon').removeAttribute('aria-label');
  }
}

function initPage() {
  const isGiantWebView = loadTimeData.getBoolean('is_giant');
  const interstitialType = loadTimeData.getString('type');
  const safebrowsing = interstitialType === 'SAFEBROWSING';
  const heavyAd = interstitialType === 'HEAVYAD';

  document.body.className = isGiantWebView ? 'giant' : '';

  if (heavyAd) {
    document.body.classList.add('heavy-ad');
  }

  preventDefaultOnPoundLinkClicks();

  document.querySelector('#details-link')
      .addEventListener('click', function(event) {
        const hiddenDetails =
            document.querySelector('#details').classList.toggle(HIDDEN_CLASS);
        document.querySelector('#main-content')
            .classList.toggle(HIDDEN_CLASS, !hiddenDetails);
      });

  if (safebrowsing) {
    document.querySelector('#proceed-link')
        .addEventListener('click', function(event) {
          sendCommand(SecurityInterstitialCommandId.CMD_PROCEED);
        });
  }

  window.addEventListener('resize', onResize);
}

document.addEventListener('DOMContentLoaded', initPage);
//# sourceMappingURL=interstitial_webview_quiet.rollup.js.map
