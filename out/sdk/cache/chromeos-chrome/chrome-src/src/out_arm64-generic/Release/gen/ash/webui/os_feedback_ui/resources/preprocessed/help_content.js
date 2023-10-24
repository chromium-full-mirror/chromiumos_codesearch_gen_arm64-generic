// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import './help_resources_icons.js';
import './strings.m.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '//resources/polymer/v3_0/iron-media-query/iron-media-query.js';
import '//resources/cr_elements/cr_icons.css.js';
import '//resources/cr_elements/cr_hidden_style.css.js';
import '//resources/cr_elements/icons.html.js';
import '//resources/cr_elements/policy/cr_tooltip_icon.js';
import '//resources/cr_elements/cr_shared_vars.css.js';

import {I18nBehavior, I18nBehaviorInterface} from '//resources/ash/common/i18n_behavior.js';
import {loadTimeData} from '//resources/ash/common/load_time_data.m.js';
import {mojoString16ToString} from '//resources/js/mojo_type_util.js';
import {html, mixinBehaviors, PolymerElement} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {HelpContent, HelpContentList, HelpContentType, SearchResult} from './feedback_types.js';


/**
 * The host of trusted parent page.
 * @type {string}
 */
export const OS_FEEDBACK_TRUSTED_ORIGIN = 'chrome://os-feedback';

/**
 * @const {string}
 */
const ICON_NAME_FOR_ARTICLE = 'content-type:article';

/**
 * @const {string}
 */
const ICON_NAME_FOR_FORUM = 'content-type:forum';

/**
 * @fileoverview
 * 'help-content' displays list of help contents.
 */

/**
 * @constructor
 * @implements {I18nBehaviorInterface}
 * @extends {PolymerElement}
 */
const HelpContentElementBase = mixinBehaviors([I18nBehavior], PolymerElement);

/**
 * @polymer
 */
export class HelpContentElement extends HelpContentElementBase {
  static get is() {
    return 'help-content';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<style>
  :host-context(body.jelly-enabled) .help-content-label {
    font: var(--cros-headline-1-font);
  }

  :host-context(body.jelly-enabled) .help-item a {
    font: var(--cros-body-1-font);
  }

  :host-context(body.jelly-enabled) paper-tooltip::part(tooltip) {
    font: var(--cros-annotation-2-font);
  }

  [class~='help-item']:last-of-type  {
    padding-bottom: 3px;
  }

  /* Special attribute to hide elements. */
  [hidden] {
    display: none !important;
  }

  .help-content-label {
    color: var(--cros-text-color-secondary);
    font-size: 15px;
    font-weight: 500;
    line-height: 22px;
    margin: 0;
  }

  .help-item {
    display: flex;
    margin:  12px 0 0;
    padding: 0 4px 0 4px;
  }

  .help-item a {
    align-items: center;
    color: var(--cros-text-color-primary);
    display: flex;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    overflow: hidden;
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .help-item a:focus-visible {
    outline: 2px solid var(--cros-focus-ring-color);
  }

  .help-item-icon {
    padding-inline-end: 12px;
  }

  .no-help-content-details {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 16px;
  }

  .no-help-content-text {
    color: var(--cros-text-color-secondary);
    line-height: 18px;
    max-width: 200px;
    text-align: center;
  }

  #helpContentLabelContainer {
    align-items: center;
    display: inline-flex;
  }

  #helpContentIcon {
    --cr-tooltip-icon-fill-color: var(--cros-icon-color-secondary);
    margin-inline-start: 6px;
  }

  #helpContentIcon:focus-visible {
    border-radius: 4px;
    outline: 2px solid var(--cros-focus-ring-color);
  }

  #helpContentContainer {
    overflow: visible;
    padding-top: 32px;
  }

  iron-icon {
    --iron-icon-fill-color: var(--cros-text-color-secondary);
    --iron-icon-height: 20px;
    --iron-icon-width: 20px;
  }

  paper-tooltip::part(tooltip) {
    border-radius: 2px;
    font-family: Roboto, sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    margin-top: -36px;
    padding: 3px 8px;
  }

  paper-tooltip {
    --paper-tooltip-background: var(--cros-tooltip-background-color);
    --paper-tooltip-delay-in: 100ms;
    --paper-tooltip-text-color: var(--cros-tooltip-label-color);
  }

  svg {
    /* Max height before SVG causes scrolling in page. */
    height: 158px;
  }
</style>
<iron-media-query query="(prefers-color-scheme: dark)"
  query-matches="{{isDarkModeEnabled_}}">
</iron-media-query>
<div id="helpContentContainer">
  <div id="helpContentLabelContainer">
    <h2 class="help-content-label">[[getLabel_(searchResult, isOnline_)]]</h2>
    <iron-icon icon="os-feedback:info" id="helpContentIcon" tabindex="0"
        hidden$="[[!hasSuggestedHelpContent_(searchResult, isOnline_)]]"
        aria-labelledby="helpContentLabelTooltip">
    </iron-icon>
    <paper-tooltip for="helpContentIcon" position="right" offset="-20">
      <div id="helpContentLabelTooltip">
        [[i18n('helpContentLabelTooltip')]]
      </div>
    </paper-tooltip>
  </div>
  <template is="dom-if" if="[[!isOnline_]]">
    <div class="no-help-content-details">
      <!-- TODO(b/276493287): After the Jelly experiment is launched, remove
                              unused image elements and SVGs. -->
      <template is="dom-if" if="[[isJellyEnabled_]]">
        <svg id="offlineSvg" preserveAspectRatio="xMidYMid meet" role="img"
            viewBox="0 0 400 168">
          <title>[[i18n('helpContentOfflineAltText')]]</title>
          <use href=
              "//os-feedback/illustrations/illo_network_unavailable.svg#offline">
          </use>
        </svg>
      </template>
      <template is="dom-if" if="[[!isJellyEnabled_]]">
        <img src="[[getOfflineIllustrationSrc_(isDarkModeEnabled_)]]"
            alt="[[i18n('helpContentOfflineAltText')]]">
      </template>
      <div class="no-help-content-text">
        [[i18n('helpContentOfflineMessage')]]
      </div>
    </div>
  </template>
  <template is="dom-if" if="[[isOnline_]]">
    <dom-repeat items="[[searchResult.contentList]]">
      <template>
        <div class="help-item">
          <a href="[[getUrl_(item)]]" target="_blank"
              on-click="handleHelpContentClicked_">
            <iron-icon icon="[[getIcon_(item.contentType)]]"
                class="help-item-icon">
            </iron-icon>
            [[getTitle_(item)]]
          </a>
        </div>
      </template>
    </dom-repeat>
    <div class="no-help-content-details"
        hidden$="[[!showHelpContentNotAvailableMsg_(searchResult)]]">
      <!-- TODO(b/276493287): After the Jelly experiment is launched, remove
                              unused image elements and SVGs. -->
      <template is="dom-if" if="[[isJellyEnabled_]]">
        <svg id="noContentSvg" preserveAspectRatio="xMidYMid meet" role="img"
            viewBox="0 0 400 168">
          <title>[[i18n('helpContentNotAvailableAltText')]]</title>
          <use href=
              "//os-feedback/illustrations/illo_load_content_error.svg#error">
          </use>
        </svg>
      </template>
      <template is="dom-if" if="[[!isJellyEnabled_]]">
        <img src="[[getContentNotAvailableIllustrationSrc_(isDarkModeEnabled_)]]"
            alt="[[i18n('helpContentNotAvailableAltText')]]">
      </template>
      <div class="no-help-content-text">
        [[i18n('helpContentNotAvailableMessage')]]
      </div>
    </div>
  </template>
</div>
<!--_html_template_end_-->`;
  }

  static get properties() {
    return {
      searchResult: {type: SearchResult},
      isDarkModeEnabled_: {type: Boolean},
      isJellyEnabled_: {
        type: Boolean,
        value: () => {
          return loadTimeData.getBoolean('isJellyEnabledForOsFeedback');
        },
      },
      isOnline_: {type: Boolean},
    };
  }

  constructor() {
    super();

    /**
     * @type {!SearchResult}
     */
    this.searchResult = {
      contentList: [],
      isQueryEmpty: true,
      isPopularContent: true,
    };

    /** @type {boolean} */
    this.isDarkModeEnabled_ = false;

    /** @type {boolean} */
    this.isOnline_ = navigator.onLine;
  }

  /** @override */
  ready() {
    super.ready();

    window.addEventListener('online', () => {
      this.isOnline_ = true;
    });

    window.addEventListener('offline', () => {
      this.isOnline_ = false;
    });

    // Send the height of the content to the parent window so that it can set
    // the height of the iframe correctly.
    const helpContent = this.shadowRoot.querySelector('#helpContentContainer');
    const resizeObserver = new ResizeObserver(() => {
      window.parent.postMessage(
          {iframeHeight: helpContent.scrollHeight}, OS_FEEDBACK_TRUSTED_ORIGIN);
    });
    if (helpContent) {
      resizeObserver.observe(helpContent);
    }
  }

  notifyParent() {}

  /**
   * Compute the label to use.
   * @return {string}
   * @protected
   */
  getLabel_() {
    if (!this.isOnline_) {
      return this.i18n('popularHelpContent');
    }
    if (!this.searchResult.isPopularContent) {
      return this.i18n('suggestedHelpContent');
    }
    if (this.searchResult.isQueryEmpty) {
      return this.i18n('popularHelpContent');
    }
    return this.i18n('noMatchedResults');
  }

  /**
   * Returns true if there are suggested help content displayed.
   * @return {boolean}
   * @protected
   */
  hasSuggestedHelpContent_() {
    return (this.isOnline_ && !this.searchResult.isPopularContent);
  }

  /**
   * When there isn't available help content to display, display such a message
   * with an image.
   * @return {boolean}
   * @protected
   */
  showHelpContentNotAvailableMsg_() {
    return this.searchResult.contentList.length === 0;
  }

  /**
   * Find the icon name to be used for a help content type.
   * @param {!HelpContentType} contentType
   * @return {string}
   * @protected
   */
  getIcon_(contentType) {
    switch (contentType) {
      case HelpContentType.kForum:
        return ICON_NAME_FOR_FORUM;
      case HelpContentType.kArticle:
        return ICON_NAME_FOR_ARTICLE;
      case HelpContentType.kUnknown:
        return ICON_NAME_FOR_ARTICLE;
      default:
        return ICON_NAME_FOR_ARTICLE;
    }
  }

  /**
   * Extract the url string from help content.
   * @param {!HelpContent} helpContent
   * @return {string}
   * @protected
   */
  getUrl_(helpContent) {
    return helpContent.url.url;
  }

  /**
   * Extract the title as JS string from help content.
   * @param {!HelpContent} helpContent
   * @return {string}
   * @protected
   */
  getTitle_(helpContent) {
    return mojoString16ToString(helpContent.title);
  }

  /**
   * Gets the relative source path to the "help content is offline"
   * illustration.
   * @return {string}
   * @protected
   */
  getOfflineIllustrationSrc_() {
    if (this.isDarkModeEnabled_) {
      return 'illustrations/network_unavailable_darkmode.svg';
    } else {
      return 'illustrations/network_unavailable_lightmode.svg';
    }
  }

  /**
   * Gets the relative source path to the "help content isn't available"
   * illustration.
   * @return {string}
   * @protected
   */
  getContentNotAvailableIllustrationSrc_() {
    if (this.isDarkModeEnabled_) {
      return 'illustrations/load_content_error_darkmode.svg';
    } else {
      return 'illustrations/load_content_error_lightmode.svg';
    }
  }

  /**
   * @param {!Event} e
   * @protected
   */
  handleHelpContentClicked_(e) {
    e.stopPropagation();
    window.parent.postMessage(
        {
          id: 'help-content-clicked',
        },
        OS_FEEDBACK_TRUSTED_ORIGIN);
  }
}

customElements.define(HelpContentElement.is, HelpContentElement);
