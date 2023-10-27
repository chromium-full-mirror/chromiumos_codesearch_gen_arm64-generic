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

// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


let mobileNav = false;

/**
 * For small screen mobile the navigation buttons are moved
 * below the advanced text.
 */
function onResize() {
  const helpOuterBox = document.querySelector('#details');
  const mainContent = document.querySelector('#main-content');
  const mediaQuery = '(min-width: 240px) and (max-width: 420px) and ' +
      '(min-height: 401px), ' +
      '(max-height: 560px) and (min-height: 240px) and ' +
      '(min-width: 421px)';

  const detailsHidden = helpOuterBox.classList.contains(HIDDEN_CLASS);
  const runnerContainer = document.querySelector('.runner-container');

  // Check for change in nav status.
  if (mobileNav !== window.matchMedia(mediaQuery).matches) {
    mobileNav = !mobileNav;

    // Handle showing the top content / details sections according to state.
    if (mobileNav) {
      mainContent.classList.toggle(HIDDEN_CLASS, !detailsHidden);
      helpOuterBox.classList.toggle(HIDDEN_CLASS, detailsHidden);
      if (runnerContainer) {
        runnerContainer.classList.toggle(HIDDEN_CLASS, !detailsHidden);
      }
    } else if (!detailsHidden) {
      // Non mobile nav with visible details.
      mainContent.classList.remove(HIDDEN_CLASS);
      helpOuterBox.classList.remove(HIDDEN_CLASS);
      if (runnerContainer) {
        runnerContainer.classList.remove(HIDDEN_CLASS);
      }
    }
  }
}

function setupMobileNav() {
  window.addEventListener('resize', onResize);
  onResize();
}

document.addEventListener('DOMContentLoaded', setupMobileNav);

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
    constructor() {
        this.data_ = null;
    }
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

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


// Other constants defined in security_interstitial_page.h.
const SB_DISPLAY_ENHANCED_PROTECTION_MESSAGE =
    'displayEnhancedProtectionMessage';

// This sets up the enhanced protection message.
function setupEnhancedProtectionMessage() {
  const interstitialType = loadTimeData.getString('type');
  if (interstitialType !== 'SAFEBROWSING' && interstitialType !== 'SSL' &&
      interstitialType !== 'CAPTIVE_PORTAL') {
    return;
  }

  if (!loadTimeData.getBoolean(SB_DISPLAY_ENHANCED_PROTECTION_MESSAGE)) {
    return;
  }

  const enhancedProtectionLink =
      document.querySelector('#enhanced-protection-link');
  const enhancedProtectionMessage =
      document.querySelector('#enhanced-protection-message');
  if (enhancedProtectionLink) {
    if (mobileNav) {
      // To make sure the touch area of the link is larger than the
      // minimum touch area for accessibility, make the whole block tappable.
      enhancedProtectionMessage.addEventListener('click', function() {
        sendCommand(SecurityInterstitialCommandId
                        .CMD_OPEN_ENHANCED_PROTECTION_SETTINGS);
        return false;
      });
    } else {
      enhancedProtectionLink.addEventListener('click', function() {
        sendCommand(SecurityInterstitialCommandId
                        .CMD_OPEN_ENHANCED_PROTECTION_SETTINGS);
        return false;
      });
    }
  }
  enhancedProtectionMessage.classList.remove('hidden');

  const billing =
      interstitialType === 'SAFEBROWSING' && loadTimeData.getBoolean('billing');

  let className = 'ssl-enhanced-protection-message';
  if (interstitialType === 'SAFEBROWSING' && !billing) {
    className = 'safe-browsing-enhanced-protection-message';
  }

  enhancedProtectionMessage.classList.add(className);
}

// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


// Other constants defined in security_interstitial_page.h.
const SB_BOX_CHECKED = 'boxchecked';
const SB_DISPLAY_CHECK_BOX = 'displaycheckbox';

// This sets up the Extended Safe Browsing Reporting opt-in, either for
// reporting malware or invalid certificate chains. Does nothing if the
// interstitial type is not SAFEBROWSING or SSL or CAPTIVE_PORTAL.
function setupExtendedReportingCheckbox() {
  const interstitialType = loadTimeData.getString('type');
  if (interstitialType !== 'SAFEBROWSING' && interstitialType !== 'SSL' &&
      interstitialType !== 'CAPTIVE_PORTAL') {
    return;
  }

  if (!loadTimeData.getBoolean(SB_DISPLAY_CHECK_BOX)) {
    return;
  }

  const privacyLink = document.querySelector('#privacy-link');
  if (privacyLink) {
    privacyLink.addEventListener('click', function() {
      sendCommand(SecurityInterstitialCommandId.CMD_OPEN_REPORTING_PRIVACY);
      return false;
    });
    privacyLink.addEventListener('mousedown', function() {
      return false;
    });
  }
  document.querySelector('#opt-in-checkbox').checked =
      loadTimeData.getBoolean(SB_BOX_CHECKED);
  document.querySelector('#extended-reporting-opt-in')
      .classList.remove('hidden');

  const billing =
      interstitialType === 'SAFEBROWSING' && loadTimeData.getBoolean('billing');

  let className = 'ssl-opt-in';
  if (interstitialType === 'SAFEBROWSING' && !billing) {
    className = 'safe-browsing-opt-in';
  }

  document.querySelector('#extended-reporting-opt-in').classList.add(className);

  document.querySelector('#body').classList.add(
      'extended-reporting-has-checkbox');

  const whitepaperLink = document.querySelector('#whitepaper-link');
  if (whitepaperLink) {
    whitepaperLink.addEventListener('click', function(event) {
      sendCommand(SecurityInterstitialCommandId.CMD_OPEN_WHITEPAPER);
    });
  }

  const optInCheckbox = document.querySelector('#opt-in-checkbox');
  optInCheckbox.addEventListener('click', function() {
    sendCommand(
        optInCheckbox.checked ? SecurityInterstitialCommandId.CMD_DO_REPORT :
                                SecurityInterstitialCommandId.CMD_DONT_REPORT);
  });
}

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


/**
 * This appends a piece of debugging information to the end of the warning.
 * When complete, the caller must also make the debugging div
 * (error-debugging-info) visible.
 * @param {string} title  The name of this debugging field.
 * @param {string} value  The value of the debugging field.
 * @param {boolean=} fixedWidth If true, the value field is displayed fixed
 *                              width.
 */
function appendDebuggingField(title, value, fixedWidth) {
  // The values input here are not trusted. Never use innerHTML on these
  // values!
  const spanTitle = document.createElement('span');
  spanTitle.classList.add('debugging-title');
  spanTitle.innerText = title + ': ';

  const spanValue = document.createElement('span');
  spanValue.classList.add('debugging-content');
  if (fixedWidth) {
    spanValue.classList.add('debugging-content-fixed-width');
  }
  spanValue.innerText = value;

  const pElem = document.createElement('p');
  pElem.classList.add('debugging-content');
  pElem.appendChild(spanTitle);
  pElem.appendChild(spanValue);
  document.querySelector('#error-debugging-info').appendChild(pElem);
}

function toggleDebuggingInfo() {
  const hiddenDebug = document.querySelector('#error-debugging-info')
                          .classList.toggle(HIDDEN_CLASS);
  document.querySelector('#error-code')
      .setAttribute('aria-expanded', !hiddenDebug);
}

function setupSSLDebuggingInfo() {
  if (loadTimeData.getString('type') !== 'SSL') {
    return;
  }

  // The titles are not internationalized because this is debugging information
  // for bug reports, help center posts, etc.
  appendDebuggingField('Subject', loadTimeData.getString('subject'));
  appendDebuggingField('Issuer', loadTimeData.getString('issuer'));
  appendDebuggingField('Expires on', loadTimeData.getString('expirationDate'));
  appendDebuggingField('Current date', loadTimeData.getString('currentDate'));
  appendDebuggingField('PEM encoded chain', loadTimeData.getString('pem'),
                       true);
  const ctInfo = loadTimeData.getString('ct');
  if (ctInfo) {
    appendDebuggingField('Certificate Transparency', ctInfo);
  }

  const errorCode = document.querySelector('#error-code');
  errorCode.addEventListener('click', toggleDebuggingInfo);
  errorCode.setAttribute('role', 'button');
  errorCode.setAttribute('aria-expanded', false);
}

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


// This is the shared code for the new (Chrome 37) security interstitials. It is
// used for both SSL interstitials and Safe Browsing interstitials.

let expandedDetails = false;
let keyPressState = 0;

// Only begin clickjacking delay tracking when the DOM contents have
// fully loaded.
let timePageLastFocused = null;

// The amount of delay (in ms) before the proceed button accepts
// a "click" event.
const PROCEED_CLICKJACKING_DELAY = 500;

/**
 * This checks whether the clickjacking delay has been passed
 * since page was first loaded or last focused.
 * @return {boolean} Whether the clickjacking delay has passed or not.
 */
function clickjackingDelayHasPassed() {
  return (
      timePageLastFocused != null &&
      (window.performance.now() - timePageLastFocused >=
       PROCEED_CLICKJACKING_DELAY));
}

/**
 * This allows errors to be skippped by typing a secret phrase into the page.
 * @param {string} e The key that was just pressed.
 */
function handleKeypress(e) {
  // HTTPS errors are serious and should not be ignored. For testing purposes,
  // other approaches are both safer and have fewer side-effects.
  // See https://goo.gl/ZcZixP for more details.
  const BYPASS_SEQUENCE = window.atob('dGhpc2lzdW5zYWZl');
  if (BYPASS_SEQUENCE.charCodeAt(keyPressState) === e.keyCode) {
    keyPressState++;
    if (keyPressState === BYPASS_SEQUENCE.length) {
      sendCommand(SecurityInterstitialCommandId.CMD_PROCEED);
      keyPressState = 0;
    }
  } else {
    keyPressState = 0;
  }
}

function setupEvents() {
  // `loadTimeDataRaw` is injected to the `window` scope from C++.
  loadTimeData.data = window.loadTimeDataRaw;

  const overridable = loadTimeData.getBoolean('overridable');
  const interstitialType = loadTimeData.getString('type');
  const ssl = interstitialType === 'SSL';
  const captivePortal = interstitialType === 'CAPTIVE_PORTAL';
  const badClock = ssl && loadTimeData.getBoolean('bad_clock');
  const lookalike = interstitialType === 'LOOKALIKE';
  const billing =
      interstitialType === 'SAFEBROWSING' && loadTimeData.getBoolean('billing');
  const blockedInterception = interstitialType === 'BLOCKED_INTERCEPTION';
  const insecureForm = interstitialType == 'INSECURE_FORM';
  const httpsOnly = interstitialType == 'HTTPS_ONLY';
  const enterpriseBlock = interstitialType === 'ENTERPRISE_BLOCK';
  const enterpriseWarn = interstitialType === 'ENTERPRISE_WARN';
  const hidePrimaryButton = loadTimeData.getBoolean('hide_primary_button');
  const showRecurrentErrorParagraph =
      loadTimeData.getBoolean('show_recurrent_error_paragraph');
  const shouldUseNewDangerIcon =
      loadTimeData.valueExists('shouldUseNewDangerIcon') ?
      loadTimeData.getBoolean('shouldUseNewDangerIcon') :
      false;

  const body = document.querySelector('#body');
  if (ssl || blockedInterception) {
    body.classList.add(badClock ? 'bad-clock' : 'ssl');
    if (loadTimeData.valueExists('errorCode')) {
      const errorCode = document.querySelector('#error-code');
      errorCode.textContent = loadTimeData.getString('errorCode');
      errorCode.classList.remove(HIDDEN_CLASS);
    }
  } else if (captivePortal) {
    body.classList.add('captive-portal');
  } else if (billing) {
    body.classList.add('safe-browsing-billing');
  } else if (lookalike) {
    body.classList.add('lookalike-url');
  } else if (insecureForm) {
    body.classList.add('insecure-form');
  } else if (httpsOnly) {
    body.classList.add('https-only');
  } else if (enterpriseBlock) {
    body.classList.add('enterprise-block');
  } else if (enterpriseWarn) {
    body.classList.add('enterprise-warn');
  } else {
    body.classList.add('safe-browsing');
    // Override the default theme color.
    document.querySelector('meta[name=theme-color]')
        .setAttribute('content', 'rgb(217, 48, 37)');
  }

  document.querySelector('#icon').classList.add('icon');

  const primaryButton = document.querySelector('#primary-button');
  if (hidePrimaryButton) {
    primaryButton.classList.add(HIDDEN_CLASS);
  } else {
    primaryButton.addEventListener('click', function() {
      switch (interstitialType) {
        case 'CAPTIVE_PORTAL':
          sendCommand(SecurityInterstitialCommandId.CMD_OPEN_LOGIN);
          break;

        case 'SSL':
          if (badClock) {
            sendCommand(SecurityInterstitialCommandId.CMD_OPEN_DATE_SETTINGS);
          } else if (overridable) {
            sendCommand(SecurityInterstitialCommandId.CMD_DONT_PROCEED);
          } else {
            sendCommand(SecurityInterstitialCommandId.CMD_RELOAD);
          }
          break;

        case 'SAFEBROWSING':
        case 'ENTERPRISE_BLOCK':
        case 'ENTERPRISE_WARN':
        case 'ORIGIN_POLICY':
          sendCommand(SecurityInterstitialCommandId.CMD_DONT_PROCEED);
          break;
        case 'HTTPS_ONLY':
        case 'INSECURE_FORM':
        case 'LOOKALIKE':
          sendCommand(SecurityInterstitialCommandId.CMD_DONT_PROCEED);
          break;

        default:
          throw new Error('Invalid interstitial type');
      }
    });
  }

  if (lookalike || insecureForm || httpsOnly || enterpriseWarn) {
    const proceedButton = document.querySelector('#proceed-button');
    proceedButton.classList.remove(HIDDEN_CLASS);
    proceedButton.textContent = loadTimeData.getString('proceedButtonText');
    proceedButton.addEventListener('click', function(event) {
      if (clickjackingDelayHasPassed()) {
        sendCommand(SecurityInterstitialCommandId.CMD_PROCEED);
      }
    });
  }
  if (lookalike) {
    // Lookalike interstitials with a suggested URL have a link in the title:
    // "Did you mean <link>example.com</link>?". Handle those clicks. Lookalike
    // interstitails without a suggested URL don't have this link.
    const dontProceedLink = document.querySelector('#dont-proceed-link');
    if (dontProceedLink) {
      dontProceedLink.addEventListener('click', function(event) {
        sendCommand(SecurityInterstitialCommandId.CMD_DONT_PROCEED);
      });
    }
  }

  if (overridable) {
    const overrideElement =
        document.querySelector(billing ? '#proceed-button' : '#proceed-link');
    // Captive portal page isn't overridable.
    overrideElement.addEventListener('click', function(event) {
      if (!billing || clickjackingDelayHasPassed()) {
        sendCommand(SecurityInterstitialCommandId.CMD_PROCEED);
      }
    });

    if (ssl) {
      overrideElement.classList.add('small-link');
    } else if (billing) {
      overrideElement.classList.remove(HIDDEN_CLASS);
      overrideElement.textContent = loadTimeData.getString('proceedButtonText');
    }
  } else if (!ssl) {
    document.querySelector('#final-paragraph').classList.add(HIDDEN_CLASS);
  }


  if (!ssl || !showRecurrentErrorParagraph) {
    document.querySelector('#recurrent-error-message')
        .classList.add(HIDDEN_CLASS);
  } else {
    body.classList.add('showing-recurrent-error-message');
  }

  const diagnosticLink = document.querySelector('#diagnostic-link');
  if (diagnosticLink) {
    diagnosticLink.addEventListener('click', function(event) {
      sendCommand(SecurityInterstitialCommandId.CMD_OPEN_DIAGNOSTIC);
    });
  }

  const learnMoreLink = document.querySelector('#learn-more-link');
  if (learnMoreLink) {
    learnMoreLink.addEventListener('click', function(event) {
      sendCommand(SecurityInterstitialCommandId.CMD_OPEN_HELP_CENTER);
    });
  }

  const detailsButton = document.querySelector('#details-button');
  if (captivePortal || billing || lookalike || insecureForm || httpsOnly ||
      enterpriseWarn || enterpriseBlock) {
    // Captive portal, billing, lookalike pages, insecure form, enterprise warn,
    // enterprise block, and HTTPS only mode interstitials don't
    // have details buttons.
    detailsButton.classList.add('hidden');
  } else {
    detailsButton.setAttribute(
        'aria-expanded',
        !document.querySelector('#details').classList.contains(HIDDEN_CLASS));
    detailsButton.addEventListener('click', function(event) {
      const hiddenDetails =
          document.querySelector('#details').classList.toggle(HIDDEN_CLASS);
      detailsButton.setAttribute('aria-expanded', !hiddenDetails);

      const mainContent = document.querySelector('#main-content');
      if (mobileNav) {
        // Details appear over the main content on small screens.
        mainContent.classList.toggle(HIDDEN_CLASS, !hiddenDetails);
      } else {
        mainContent.classList.remove(HIDDEN_CLASS);
      }

      detailsButton.innerText = hiddenDetails ?
          loadTimeData.getString('openDetails') :
          loadTimeData.getString('closeDetails');
      if (!expandedDetails) {
        // Record a histogram entry only the first time that details is opened.
        sendCommand(SecurityInterstitialCommandId.CMD_SHOW_MORE_SECTION);
        expandedDetails = true;
      }
    });
  }

  const reportErrorLink = document.querySelector('#report-error-link');
  if (reportErrorLink) {
    reportErrorLink.addEventListener('click', function(event) {
      sendCommand(SecurityInterstitialCommandId.CMD_REPORT_PHISHING_ERROR);
    });
  }

  if (lookalike) {
    console.warn(loadTimeData.getString('lookalikeConsoleMessage'));
  }

  if (shouldUseNewDangerIcon) {
    // If red interstitial facelift is enabled, use new stop sign icons.
    if (document.getElementById('icon')) {
      document.getElementById('icon').classList.add('new-icon');
    }
  }

  preventDefaultOnPoundLinkClicks();
  setupExtendedReportingCheckbox();
  setupEnhancedProtectionMessage();
  setupSSLDebuggingInfo();
  document.addEventListener('keypress', handleKeypress);

  // Begin tracking for the clickjacking delay.
  timePageLastFocused = window.performance.now();
  window.addEventListener(
      'focus', () => timePageLastFocused = window.performance.now());
}

document.addEventListener('DOMContentLoaded', setupEvents);
//# sourceMappingURL=interstitial_large.rollup.js.map
