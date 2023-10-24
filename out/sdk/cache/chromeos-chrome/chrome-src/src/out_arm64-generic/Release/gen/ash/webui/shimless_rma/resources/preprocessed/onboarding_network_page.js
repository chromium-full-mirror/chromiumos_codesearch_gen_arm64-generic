// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import './base_page.js';
import './icons.js';
import './shimless_rma_shared_css.js';
import './strings.m.js';
import 'chrome://resources/ash/common/network/network_config.js';
import 'chrome://resources/ash/common/network/network_list.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';

import {HTMLEscape} from '//resources/ash/common/util.js';
import {assert} from 'chrome://resources/ash/common/assert.js';
import {I18nBehavior, I18nBehaviorInterface} from 'chrome://resources/ash/common/i18n_behavior.js';
import {NetworkListenerBehavior, NetworkListenerBehaviorInterface} from 'chrome://resources/ash/common/network/network_listener_behavior.js';
import {OncMojo} from 'chrome://resources/ash/common/network/onc_mojo.js';
import {loadTimeData} from 'chrome://resources/js/load_time_data.js';
import {FilterType, NetworkStateProperties, NO_LIMIT, StartConnectResult} from 'chrome://resources/mojo/chromeos/services/network_config/public/mojom/cros_network_config.mojom-webui.js';
import {ConnectionStateType, NetworkType} from 'chrome://resources/mojo/chromeos/services/network_config/public/mojom/network_types.mojom-webui.js';
import {html, mixinBehaviors, PolymerElement} from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {getNetworkConfigService, getShimlessRmaService} from './mojo_interface_provider.js';
import {NetworkConfigServiceInterface, ShimlessRmaServiceInterface, StateResult} from './shimless_rma_types.js';
import {enableNextButton, focusPageTitle} from './shimless_rma_util.js';

/**
 * @fileoverview
 * 'onboarding-network-page' is the page where the user can choose to join a
 * network.
 */


/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {I18nBehaviorInterface}
 * @implements {NetworkListenerBehaviorInterface}
 */
const OnboardingNetworkPageBase =
    mixinBehaviors([I18nBehavior, NetworkListenerBehavior], PolymerElement);

/** @polymer */
export class OnboardingNetworkPage extends OnboardingNetworkPageBase {
  static get is() {
    return 'onboarding-network-page';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<style include="cr-shared-style shimless-rma-shared">
  :host {
    display: inline-flex;
  }

  .error {
    color: var(--cros-text-color-alert);
    font-weight: 500;
  }

  #networkList {
    --cros-icon-color-primary: grey;
    flex: 1;
  }
</style>

<base-page>
  <div slot="left-pane">
    <h1 tabindex="-1">[[i18n('connectNetworkTitleText')]]</h1>
    <div class="instructions">[[i18n('connectNetworkDescriptionText')]]</div>
  </div>
  <div id="container" slot="right-pane">
    <div class="scroll-container">
      <network-list id="networkList" show-technology-badge
          networks="[[networks_]]" on-selected="onNetworkSelected_"
          disabled="[[allButtonsDisabled]]">
      </network-list>
    </div>
    <div class="gradient unequal-panes"></div>
  </div>
</base-page>

<cr-dialog id="dialog" close-text="close">
  <div slot="title">
    [[getDialogTitle_(networkName_, networkType_, networkShowConnect_)]]
  </div>
  <div slot="body">
    <network-config id="networkConfig" enable-connect="{{enableConnect_}}"
      error="{{error_}}" on-close="onConfigClose_" name="{{networkName_}}"
      on-properties-set="onPropertiesSet_" type="{{networkType_}}"
      connect-on-enter="[[networkShowConnect_]]" guid="[[guid_]]">
    </network-config>
  </div>
  <div class="dialog-footer" slot="button-container">
    <template is="dom-if" if="[[error_]]" restamp>
      <div class="flex error">[[getError_(error_)]]</div>
    </template>
    <cr-button id="cancelButton" on-click="closeConfig_">
        [[i18n('connectNetworkDialogCancelButtonText')]]
    </cr-button>
    <cr-button id="connectButton" class="action-button"
        on-click="connectNetwork_" disabled="[[!enableConnect_]]"
        hidden$="[[!networkShowConnect_]]">
      [[i18n('connectNetworkDialogConnectButtonText')]]
    </cr-button>
    <cr-button id="disconnectButton" class="action-button"
      on-click="disconnectNetwork_"  hidden$="[[networkShowConnect_]]">
      [[i18n('connectNetworkDialogDisconnectButtonText')]]
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
  }

  static get properties() {
    return {
      /**
       * Set by shimless_rma.js.
       * @type {boolean}
       */
      allButtonsDisabled: Boolean,

      /**
       * Array of available networks
       * @protected
       * @type {!Array<NetworkStateProperties>}
       */
      networks_: {
        type: Array,
        value: [],
      },

      /**
       * Tracks whether network has configuration to be connected
       * @protected
       */
      enableConnect_: {
        type: Boolean,
      },

      /**
       * The type of network to be configured as a string. May be set initially
       * or updated by network-config.
       * @protected
       */
      networkType_: {
        type: String,
        value: '',
      },

      /**
       * WARNING: This string may contain malicious HTML and should not be used
       * for Polymer bindings in CSS code. For additional information see
       * b/286254915.
       *
       * The name of the network. May be set initially or updated by
       * network-config.
       * @protected
       */
      networkName_: {
        type: String,
        value: '',
      },

      /**
       * The GUID when an existing network is being configured. This will be
       * empty when configuring a new network.
       * @protected
       */
      guid_: {
        type: String,
        value: '',
      },

      /**
       * Tracks whether network shows connect button or disconnect button.
       * @protected
       */
      networkShowConnect_: {
        type: Boolean,
      },

      /**
       * Set by network-config when a configuration error occurs.
       * @private
       */
      error_: {
        type: String,
        value: '',
      },

      /**
       * Set to true to when connected to at least one active network.
       * @protected
       */
      isOnline_: {
        type: Boolean,
        value: false,
        observer: OnboardingNetworkPage.prototype.onIsOnlineChange_,
      },
    };
  }

  constructor() {
    super();
    /** @private {ShimlessRmaServiceInterface} */
    this.shimlessRmaService_ = getShimlessRmaService();
    /** @private {?NetworkConfigServiceInterface} */
    this.networkConfig_ = getNetworkConfigService();
  }

  /** @override */
  ready() {
    super.ready();

    // Before displaying the available networks, track the pre-existing
    // configured networks.
    this.shimlessRmaService_.trackConfiguredNetworks();
    this.refreshNetworks();
    enableNextButton(this);

    focusPageTitle(this);
  }

  /** CrosNetworkConfigObserver impl */
  onNetworkStateListChanged() {
    this.refreshNetworks();
  }

  refreshNetworks() {
    const networkFilter = {
      filter: FilterType.kVisible,
      networkType: NetworkType.kAll,
      limit: NO_LIMIT,
    };

    this.networkConfig_.getNetworkStateList(networkFilter).then(res => {
      // Filter again since networkFilter above doesn't take two network types.
      this.networks_ = res.result.filter(
          (network) => [NetworkType.kWiFi,
                        NetworkType.kEthernet,
      ].includes(network.type));

      this.isOnline_ = this.networks_.some(function(network) {
        return OncMojo.connectionStateIsConnected(network.connectionState);
      });
    });
  }

  /**
   * Event triggered when a network list item is selected.
   * @param {!{target: HTMLElement, detail: !OncMojo.NetworkStateProperties}}
   *     event
   * @protected
   */
  onNetworkSelected_(event) {
    const networkState = event.detail;
    const type = networkState.type;
    const displayName = OncMojo.getNetworkStateDisplayNameUnsafe(networkState);

    this.networkShowConnect_ =
        (networkState.connectionState === ConnectionStateType.kNotConnected);

    if (!this.canAttemptConnection_(networkState)) {
      this.showConfig_(type, networkState.guid, displayName);
      return;
    }

    this.networkConfig_.startConnect(networkState.guid).then(response => {
      this.refreshNetworks();
      if (response.result === StartConnectResult.kUnknown) {
        console.error(
            'startConnect failed for: ' + networkState.guid +
            ' Error: ' + response.message);
        return;
      }
    });
  }

  /**
   * Determines whether or not it is possible to attempt a connection to the
   * provided network (e.g., whether it's possible to connect or configure the
   * network for connection).
   * @param {!OncMojo.NetworkStateProperties} state The network state.
   * @private
   */
  canAttemptConnection_(state) {
    if (state.connectionState !== ConnectionStateType.kNotConnected) {
      return false;
    }

    if (OncMojo.networkTypeHasConfigurationFlow(state.type) &&
        (!OncMojo.isNetworkConnectable(state) || !!state.errorState)) {
      return false;
    }

    return true;
  }

  /**
   * @param {NetworkType} type
   * @param {string} guid
   * @param {string} name
   * @private
   */
  showConfig_(type, guid, name) {
    assert(type !== NetworkType.kCellular && type !== NetworkType.kTether);

    this.networkType_ = OncMojo.getNetworkTypeString(type);
    this.networkName_ = name || '';
    this.guid_ = guid || '';

    const networkConfig =
        /** @type {!NetworkConfigElement} */ (
            this.shadowRoot.querySelector('#networkConfig'));
    networkConfig.init();

    const dialog = /** @type {!CrDialogElement} */ (
        this.shadowRoot.querySelector('#dialog'));
    if (!dialog.open) {
      dialog.showModal();
    }
  }

  /** @protected */
  closeConfig_() {
    const dialog = /** @type {!CrDialogElement} */ (
        this.shadowRoot.querySelector('#dialog'));
    if (dialog.open) {
      dialog.close();
    }

    // Reset the network state properties.
    this.networkType_ = '';
    this.networkName_ = '';
    this.guid_ = '';
  }

  /** @protected */
  connectNetwork_() {
    const networkConfig =
        /** @type {!NetworkConfigElement} */ (
            this.shadowRoot.querySelector('#networkConfig'));
    networkConfig.connect();
  }

  /** @protected */
  disconnectNetwork_() {
    this.networkConfig_.startDisconnect(this.guid_).then(response => {
      if (!response.success) {
        console.error('Disconnect failed for: ' + this.guid_);
      }
    });
    this.closeConfig_();
  }

  /**
   * @return {string}
   * @private
   */
  getError_() {
    if (this.i18nExists(this.error_)) {
      return this.i18n(this.error_);
    }
    return this.i18n('networkErrorUnknown');
  }

  /**
   * @protected
   */
  onPropertiesSet_() {
    this.refreshNetworks();
  }

  /** @private */
  onConfigClose_() {
    this.closeConfig_();
    this.refreshNetworks();
  }

  /**
   * @return {string}
   * @protected
   */
  getDialogTitle_() {
    if (this.networkName_ && !this.networkShowConnect_) {
      return loadTimeData.getStringF('internetConfigName', this.networkName_);
    }
    const type = this.i18n('OncType' + this.networkType_);
    return this.i18n('internetJoinType', type);
  }

  /** @return {!Promise<{stateResult: !StateResult}>} */
  onNextButtonClick() {
    return this.shimlessRmaService_.networkSelectionComplete();
  }

  /** @private */
  onIsOnlineChange_() {
    this.dispatchEvent(new CustomEvent(
        'set-next-button-label',
        {
          bubbles: true,
          composed: true,
          detail: this.isOnline_ ? 'nextButtonLabel' : 'skipButtonLabel',
        },
        ));
  }
}

customElements.define(OnboardingNetworkPage.is, OnboardingNetworkPage);
