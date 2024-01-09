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

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Verify |value| is truthy.
 * @param value A value to check for truthiness. Note that this
 *     may be used to test whether |value| is defined or not, and we don't want
 *     to force a cast to boolean.
 */
function assert(value, message) {
    if (value) {
        return;
    }
    throw new Error('Assertion failed' + (message ? `: ${message}` : ''));
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview This file defines a singleton which provides access to all data
 * that is available as soon as the page's resources are loaded (before DOM
 * content has finished loading). This data includes both localized strings and
 * any data that is important to have ready from a very early stage (e.g. things
 * that must be displayed right away).
 *
 * Note that loadTimeData is not guaranteed to be consistent between page
 * refreshes (https://crbug.com/740629) and should not contain values that might
 * change if the page is re-opened later.
 */
class LoadTimeData {
    data_ = null;
    /**
     * Sets the backing object.
     *
     * Note that there is no getter for |data_| to discourage abuse of the form:
     *
     *     var value = loadTimeData.data()['key'];
     */
    set data(value) {
        assert(!this.data_, 'Re-setting data.');
        this.data_ = value;
    }
    /**
     * @param id An ID of a value that might exist.
     * @return True if |id| is a key in the dictionary.
     */
    valueExists(id) {
        assert(this.data_, 'No data. Did you remember to include strings.js?');
        return id in this.data_;
    }
    /**
     * Fetches a value, expecting that it exists.
     * @param id The key that identifies the desired value.
     * @return The corresponding value.
     */
    getValue(id) {
        assert(this.data_, 'No data. Did you remember to include strings.js?');
        const value = this.data_[id];
        assert(typeof value !== 'undefined', 'Could not find value for ' + id);
        return value;
    }
    /**
     * As above, but also makes sure that the value is a string.
     * @param id The key that identifies the desired string.
     * @return The corresponding string value.
     */
    getString(id) {
        const value = this.getValue(id);
        assert(typeof value === 'string', `[${value}] (${id}) is not a string`);
        return value;
    }
    /**
     * Returns a formatted localized string where $1 to $9 are replaced by the
     * second to the tenth argument.
     * @param id The ID of the string we want.
     * @param args The extra values to include in the formatted output.
     * @return The formatted string.
     */
    getStringF(id, ...args) {
        const value = this.getString(id);
        if (!value) {
            return '';
        }
        return this.substituteString(value, ...args);
    }
    /**
     * Returns a formatted localized string where $1 to $9 are replaced by the
     * second to the tenth argument. Any standalone $ signs must be escaped as
     * $$.
     * @param label The label to substitute through. This is not an resource ID.
     * @param args The extra values to include in the formatted output.
     * @return The formatted string.
     */
    substituteString(label, ...args) {
        return label.replace(/\$(.|$|\n)/g, function (m) {
            assert(m.match(/\$[$1-9]/), 'Unescaped $ found in localized string.');
            if (m === '$$') {
                return '$';
            }
            const substitute = args[Number(m[1]) - 1];
            if (substitute === undefined || substitute === null) {
                // Not all callers actually provide values for all substitutes. Return
                // an empty value for this case.
                return '';
            }
            return substitute.toString();
        });
    }
    /**
     * Returns a formatted string where $1 to $9 are replaced by the second to
     * tenth argument, split apart into a list of pieces describing how the
     * substitution was performed. Any standalone $ signs must be escaped as $$.
     * @param label A localized string to substitute through.
     *     This is not an resource ID.
     * @param args The extra values to include in the formatted output.
     * @return The formatted string pieces.
     */
    getSubstitutedStringPieces(label, ...args) {
        // Split the string by separately matching all occurrences of $1-9 and of
        // non $1-9 pieces.
        const pieces = (label.match(/(\$[1-9])|(([^$]|\$([^1-9]|$))+)/g) ||
            []).map(function (p) {
            // Pieces that are not $1-9 should be returned after replacing $$
            // with $.
            if (!p.match(/^\$[1-9]$/)) {
                assert((p.match(/\$/g) || []).length % 2 === 0, 'Unescaped $ found in localized string.');
                return { value: p.replace(/\$\$/g, '$'), arg: null };
            }
            // Otherwise, return the substitution value.
            const substitute = args[Number(p[1]) - 1];
            if (substitute === undefined || substitute === null) {
                // Not all callers actually provide values for all substitutes. Return
                // an empty value for this case.
                return { value: '', arg: p };
            }
            return { value: substitute.toString(), arg: p };
        });
        return pieces;
    }
    /**
     * As above, but also makes sure that the value is a boolean.
     * @param id The key that identifies the desired boolean.
     * @return The corresponding boolean value.
     */
    getBoolean(id) {
        const value = this.getValue(id);
        assert(typeof value === 'boolean', `[${value}] (${id}) is not a boolean`);
        return value;
    }
    /**
     * As above, but also makes sure that the value is an integer.
     * @param id The key that identifies the desired number.
     * @return The corresponding number value.
     */
    getInteger(id) {
        const value = this.getValue(id);
        assert(typeof value === 'number', `[${value}] (${id}) is not a number`);
        assert(value === Math.floor(value), 'Number isn\'t integer: ' + value);
        return value;
    }
    /**
     * Override values in loadTimeData with the values found in |replacements|.
     * @param replacements The dictionary object of keys to replace.
     */
    overrideValues(replacements) {
        assert(typeof replacements === 'object', 'Replacements must be a dictionary object.');
        assert(this.data_, 'Data must exist before being overridden');
        for (const key in replacements) {
            this.data_[key] = replacements[key];
        }
    }
    /**
     * Reset loadTimeData's data. Should only be used in tests.
     * @param newData The data to restore to, when null restores to unset state.
     */
    resetForTesting(newData = null) {
        this.data_ = newData;
    }
    /**
     * @return Whether loadTimeData.data has been set.
     */
    isInitialized() {
        return this.data_ !== null;
    }
}
const loadTimeData = new LoadTimeData();

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
  // `loadTimeDataRaw` is injected to the `window` scope from C++.
  loadTimeData.data = window.loadTimeDataRaw;

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
