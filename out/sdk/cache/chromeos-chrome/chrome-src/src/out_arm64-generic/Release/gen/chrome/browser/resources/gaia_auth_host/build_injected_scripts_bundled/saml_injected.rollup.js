// Copyright 2013 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const INTERNAL_REQUEST_MESSAGE = 'internal-request-message';

const INTERNAL_REPLY_MESSAGE = 'internal-reply-message';

/**
 * Channel to the background script.
 */
class Channel {
  constructor() {
    // Message port to use to communicate with background script.
    this.port_ = null;

    // Registered message callbacks.
    this.messageCallbacks_ = {};

    // Internal request id to track pending requests.
    this.nextInternalRequestId_ = 0;

    // Pending internal request callbacks.
    this.internalRequestCallbacks_ = {};
  }

  /**
   * Initialize the channel with given port for the background script.
   */
  init(port) {
    this.port_ = port;
    this.port_.onMessage.addListener(this.onMessage_.bind(this));
  }

  /**
   * Connects to the background script with the given name.
   */
  connect(name) {
    this.port_ = chrome.runtime.connect({name: name});
    this.port_.onMessage.addListener(this.onMessage_.bind(this));
  }

  /**
   * Associates a message name with a callback. When a message with the name
   * is received, the callback will be invoked with the message as its arg.
   * Note only the last registered callback will be invoked.
   */
  registerMessage(name, callback) {
    this.messageCallbacks_[name] = callback;
  }

  /**
   * Sends a message to the other side of the channel.
   */
  send(msg) {
    this.port_.postMessage(msg);
  }

  /**
   * Sends a message to the other side and invokes the callback with
   * the replied object. Useful for message that expects a returned result.
   */
  sendWithCallback(msg, callback) {
    const requestId = this.nextInternalRequestId_++;
    this.internalRequestCallbacks_[requestId] = callback;
    this.send({
      name: INTERNAL_REQUEST_MESSAGE,
      requestId: requestId,
      payload: msg,
    });
  }

  /**
   * Invokes message callback using given message.
   * @return {*} The return value of the message callback or null.
   */
  invokeMessageCallbacks_(msg) {
    const name = msg.name;
    if (this.messageCallbacks_[name]) {
      return this.messageCallbacks_[name](msg);
    }

    console.error('Error: Unexpected message, name=' + name);
    return null;
  }

  /**
   * Invoked when a message is received.
   */
  onMessage_(msg) {
    const name = msg.name;
    if (name === INTERNAL_REQUEST_MESSAGE) {
      const payload = msg.payload;
      const result = this.invokeMessageCallbacks_(payload);
      this.send({
        name: INTERNAL_REPLY_MESSAGE,
        requestId: msg.requestId,
        result: result,
      });
    } else if (name === INTERNAL_REPLY_MESSAGE) {
      const callback = this.internalRequestCallbacks_[msg.requestId];
      delete this.internalRequestCallbacks_[msg.requestId];
      if (callback) {
        callback(msg.result);
      }
    } else {
      this.invokeMessageCallbacks_(msg);
    }
  }
}

// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


/**
 * Allowed origins of the hosting page.
 * @type {Array<string>}
 */
const ALLOWED_ORIGINS = [
  'chrome://oobe',
  'chrome://chrome-signin',
  'chrome://password-change',
  'chrome://lock-reauth',
];

/** @const */
const PORT_MESSAGE = 'post-message-port-message';

/** @const */
const CHANNEL_INIT_MESSAGE = 'post-message-channel-init';

/** @const */
const CHANNEL_CONNECT_MESSAGE = 'post-message-channel-connect';

/**
 * Whether the script runs in a top level window.
 */
function isTopLevelWindow() {
  return window === window.top;
}

/**
 * A simple event target.
 */
class EventTarget {
  constructor() {
    this.listeners_ = [];
  }

  /**
   * Add an event listener.
   */
  addListener(listener) {
    this.listeners_.push(listener);
  }

  /**
   * Dispatches a given event to all listeners.
   */
  dispatch(e) {
    for (let i = 0; i < this.listeners_.length; ++i) {
      this.listeners_[i].call(undefined, e);
    }
  }
}

/**
 * A HTML5 postMessage based port that provides the same port interface
 * as the messaging API port.
 */
class PostMessagePort {
  /**
   * @param {number} channelId
   * @param {string} name
   */
  constructor(channelId, name) {
    this.channelId = channelId;
    this.name = name;
    this.targetWindow = null;
    this.targetOrigin = '';
    this.deferredMessages_ = [];
    this.onMessage = new EventTarget();
  }

  /**
   * Sets the target window and origin.
   * @param {Object} targetWindow
   * @param {string} targetOrigin
   */
  setTarget(targetWindow, targetOrigin) {
    this.targetWindow = targetWindow;
    this.targetOrigin = targetOrigin;

    for (let i = 0; i < this.deferredMessages_.length; ++i) {
      this.postMessage(this.deferredMessages_[i]);
    }
    this.deferredMessages_ = [];
  }

  postMessage(msg) {
    if (!this.targetWindow) {
      this.deferredMessages_.push(msg);
      return;
    }

    this.targetWindow.postMessage(
        {
          type: PORT_MESSAGE,
          channelId: this.channelId,
          payload: msg,
        },
        this.targetOrigin);
  }

  handleWindowMessage(e) {
    this.onMessage.dispatch(e.data.payload);
  }
}

/**
 * ChannelManager handles window message events by dispatching them to
 * PostMessagePorts or forwarding to other windows (up/down the hierarchy).
 */
class ChannelManager {
  constructor() {
    /**
     * Window and origin to forward message up the hierarchy. For subframes,
     * they defaults to window.parent and any origin. For top level window,
     * this would be set to the hosting webview on CHANNEL_INIT_MESSAGE.
     */
    this.upperWindow = isTopLevelWindow() ? null : window.parent;
    this.upperOrigin = isTopLevelWindow() ? '' : '*';

    /**
     * Channle Id to port map.
     * @type {Object<number, PostMessagePort>}
     */
    this.channels_ = {};

    /**
     * Deferred messages to be posted to |upperWindow|.
     * @type {Array}
     */
    this.deferredUpperWindowMessages_ = [];

    /**
     * Ports that depend on upperWindow and need to be setup when its available.
     */
    this.deferredUpperWindowPorts_ = [];

    /**
     * Whether the ChannelManager runs in daemon mode and accepts connections.
     */
    this.isDaemon = false;

    /**
     * Fires when ChannelManager is in listening mode and a
     * CHANNEL_CONNECT_MESSAGE is received.
     */
    this.onConnect = new EventTarget();

    window.addEventListener('message', this.onMessage_.bind(this));
  }

  /**
   * Gets a global unique id to use.
   * @return {number}
   */
  createChannelId_() {
    return (new Date()).getTime();
  }

  /**
   * Posts data to upperWindow. Queue it if upperWindow is not available.
   */
  postToUpperWindow(data) {
    if (this.upperWindow == null) {
      this.deferredUpperWindowMessages_.push(data);
      return;
    }

    this.upperWindow.postMessage(data, this.upperOrigin);
  }

  /**
   * Creates a port and register it in |channels_|.
   * @param {number} channelId
   * @param {string} channelName
   * @param {Object=} opt_targetWindow
   * @param {string=} opt_targetOrigin
   */
  createPort(channelId, channelName, opt_targetWindow, opt_targetOrigin) {
    const port = new PostMessagePort(channelId, channelName);
    if (opt_targetWindow) {
      port.setTarget(
          opt_targetWindow, /** @type {string} */ (opt_targetOrigin));
    }
    this.channels_[channelId] = port;
    return port;
  }

  /*
   * Returns a message forward handler for the given proxy port.
   * @private
   */
  getProxyPortForwardHandler_(proxyPort) {
    return function(msg) {
      proxyPort.postMessage(msg);
    };
  }

  /**
   * Creates a forwarding porxy port.
   * @param {number} channelId
   * @param {string} channelName
   * @param {!Object} targetWindow
   * @param {!string} targetOrigin
   */
  createProxyPort(channelId, channelName, targetWindow, targetOrigin) {
    const port =
        this.createPort(channelId, channelName, targetWindow, targetOrigin);
    port.onMessage.addListener(this.getProxyPortForwardHandler_(port));
    return port;
  }

  /**
   * Creates a connecting port to the daemon and request connection.
   * @param {string} name
   * @return {?PostMessagePort}
   */
  connectToDaemon(name) {
    if (this.isDaemon) {
      console.error('Error: Connecting from the daemon page is not supported.');
      return null;
    }

    const port = this.createPort(this.createChannelId_(), name);
    if (this.upperWindow) {
      port.setTarget(this.upperWindow, this.upperOrigin);
    } else {
      this.deferredUpperWindowPorts_.push(port);
    }

    this.postToUpperWindow({
      type: CHANNEL_CONNECT_MESSAGE,
      channelId: port.channelId,
      channelName: port.name,
    });
    return port;
  }

  /**
   * Dispatches a 'message' event to port.
   * @private
   */
  dispatchMessageToPort_(e) {
    const channelId = e.data.channelId;
    const port = this.channels_[channelId];
    if (!port) {
      console.error('Error: Unable to dispatch message. Unknown channel.');
      return;
    }

    port.handleWindowMessage(e);
  }

  /**
   * Window 'message' handler.
   * @private
   */
  onMessage_(e) {
    if (typeof e.data !== 'object' || !e.data.hasOwnProperty('type')) {
      return;
    }

    if (e.data.type === PORT_MESSAGE) {
      // Dispatch port message to ports if this is the daemon page or
      // the message is from upperWindow. In case of null upperWindow,
      // the message is assumed to be forwarded to upperWindow and queued.
      if (this.isDaemon ||
          (this.upperWindow && e.source === this.upperWindow)) {
        this.dispatchMessageToPort_(e);
      } else {
        this.postToUpperWindow(e.data);
      }
    } else if (e.data.type === CHANNEL_CONNECT_MESSAGE) {
      const channelId = e.data.channelId;
      const channelName = e.data.channelName;

      if (this.isDaemon) {
        const port =
            this.createPort(channelId, channelName, e.source, e.origin);
        this.onConnect.dispatch(port);
      } else {
        this.createProxyPort(channelId, channelName, e.source, e.origin);
        this.postToUpperWindow(e.data);
      }
    } else if (e.data.type === CHANNEL_INIT_MESSAGE) {
      if (ALLOWED_ORIGINS.indexOf(e.origin) === -1) {
        return;
      }

      this.upperWindow = e.source;
      this.upperOrigin = e.origin;

      for (let i = 0; i < this.deferredUpperWindowMessages_.length; ++i) {
        this.upperWindow.postMessage(
            this.deferredUpperWindowMessages_[i], this.upperOrigin);
      }
      this.deferredUpperWindowMessages_ = [];

      for (let i = 0; i < this.deferredUpperWindowPorts_.length; ++i) {
        this.deferredUpperWindowPorts_[i].setTarget(
            this.upperWindow, this.upperOrigin);
      }
      this.deferredUpperWindowPorts_ = [];
    }
  }
}

/**
 * A message channel based on PostMessagePort.
 * @extends {Channel}
 */
class PostMessageChannel extends Channel {
  /**
   * Singleton instance of ChannelManager.
   * @returns {ChannelManager}
   */
  static channelManager() {
    if (!PostMessageChannel._channelManager) {
      PostMessageChannel._channelManager = new ChannelManager();
    }
    return PostMessageChannel._channelManager;
  }

  /**
   * Whether the script runs in a top level window.
   */
  isTopLevel() {
    return isTopLevelWindow();
  }

  /** @override */
  connect(name) {
    this.port_ = PostMessageChannel.channelManager().connectToDaemon(name);
    this.port_.onMessage.addListener(this.onMessage_.bind(this));
  }

  /**
   * Initialize webview content window for postMessage channel.
   * @param {Object} webViewContentWindow Content window of the webview.
   */
  static init(webViewContentWindow) {
    webViewContentWindow.postMessage({type: CHANNEL_INIT_MESSAGE}, '*');
  }

  /**
   * Run in daemon mode and listen for incoming connections. Note that the
   * current implementation assumes the daemon runs in the hosting page
   * at the upper layer of the DOM tree. That is, all connect requests go
   * up the DOM tree instead of going into sub frames.
   * @param {function(PostMessagePort)} callback Invoked when a connection is
   *     made.
   */
  static runAsDaemon(callback) {
    PostMessageChannel.channelManager().isDaemon = true;

    const onConnect = function(port) {
      callback(port);
    };
    PostMessageChannel.channelManager().onConnect.addListener(onConnect);
  }
}

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview
 * -- WebviewScrollShadowsHelper --
 *
 *  Sends scroll information from within the webview. This information is used
 *  to appropriately add classes to the webview in order to display shadows on
 *  top of it. The shadows show to the user if there is content hidden that
 *  could be seen if the user would scroll up/down.
 */

const WebviewScrollShadowsHelper = (function() {
  function WebviewScrollShadowsHelper() {}

  WebviewScrollShadowsHelper.prototype = {
    init(channel) {
      this.channel_ = channel;

      window.addEventListener('scroll', this.sendScrollInfo_.bind(this));
      window.addEventListener('resize', this.sendScrollInfo_.bind(this));
      this.boundAttachResizeObserver_ = this.attachResizeObserver_.bind(this);
      window.addEventListener('load', this.boundAttachResizeObserver_);
      this.resizeObserver = new ResizeObserver(() => {
        this.sendScrollInfo_();
      });
    },

    // Observe when document.body changes in size.
    attachResizeObserver_(event) {
      this.resizeObserver.observe(document.body);
      window.removeEventListener(event.type, this.boundAttachResizeObserver_);
    },

    sendScrollInfo_(event) {
      this.channel_.send({
        name: 'scrollInfo',
        scrollTop: window.scrollY,
        scrollHeight: document.body.scrollHeight,
      });
    },
  };

  return WebviewScrollShadowsHelper;
})();

const WebviewScrollShadowsHelperConstructor = function() {
  return new WebviewScrollShadowsHelper();
};

// Copyright 2013 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


/**
 * @fileoverview
 * Script to be injected into SAML provider pages, serving three main purposes:
 * 1. Signal hosting extension that an external page is loaded so that the
 *    UI around it should be changed accordingly;
 * 2. Provide an API via which the SAML provider can pass user credentials to
 *    Chrome OS, allowing the password to be used for encrypting user data and
 *    offline login.
 * 3. Scrape password fields, making the password available to Chrome OS even if
 *    the SAML provider does not support the credential passing API.
 */

(function() {
function APICallForwarder() {}

/**
 * The credential passing API is used by sending messages to the SAML page's
 * |window| object. This class forwards API calls from the SAML page to a
 * background script and API responses from the background script to the SAML
 * page. Communication with the background script occurs via a |Channel|.
 */
APICallForwarder.prototype = {
  // Channel to which API calls are forwarded.
  channel_: null,

  /**
   * Initialize the API call forwarder.
   * @param {!Channel} channel Channel to which API calls should be forwarded.
   */
  init(channel) {
    this.channel_ = channel;
    this.channel_.registerMessage(
        'apiResponse', this.onAPIResponse_.bind(this));

    window.addEventListener('message', this.onMessage_.bind(this));
  },

  onMessage_(event) {
    if (event.source !== window || typeof event.data !== 'object' ||
        !event.data.hasOwnProperty('type') ||
        event.data.type !== 'gaia_saml_api') {
      return;
    }
    // Forward API calls to the background script.
    this.channel_.send({name: 'apiCall', call: event.data.call});
  },

  onAPIResponse_(msg) {
    // Forward API responses to the SAML page.
    window.postMessage(
        {type: 'gaia_saml_api_reply', response: msg.response}, '/');
  },
};

/**
 * A class to scrape password from type=password input elements under a given
 * docRoot and send them back via a Channel.
 */
function PasswordInputScraper() {}

PasswordInputScraper.prototype = {
  // URL of the page.
  pageURL_: null,

  // Channel to send back changed password.
  channel_: null,

  // An array to hold password fields.
  passwordFields_: null,

  // An array to hold cached password values.
  passwordValues_: null,

  // A MutationObserver to watch for dynamic password field creation.
  passwordFieldsObserver: null,

  /**
   * Initialize the scraper with given channel and docRoot. Note that the
   * scanning for password fields happens inside the function and does not
   * handle DOM tree changes after the call returns.
   * @param {!Object} channel The channel to send back password.
   * @param {!string} pageURL URL of the page.
   * @param {!HTMLElement} docRoot The root element of the DOM tree that
   *     contains the password fields of interest.
   */
  init(channel, pageURL, docRoot) {
    this.pageURL_ = pageURL;
    this.channel_ = channel;

    this.passwordFields_ = [];
    this.passwordValues_ = [];

    this.findAndTrackChildren(docRoot);

    this.passwordFieldsObserver = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        Array.prototype.forEach.call(mutation.addedNodes, function(addedNode) {
          if (addedNode.nodeType !== Node.ELEMENT_NODE) {
            return;
          }

          if (addedNode.matches('input[type=password]')) {
            this.trackPasswordField(addedNode);
          } else {
            this.findAndTrackChildren(addedNode);
          }
        }.bind(this));
      }.bind(this));
    }.bind(this));
    this.passwordFieldsObserver.observe(
        docRoot, {subtree: true, childList: true});
  },

  /**
   * Find and track password fields that are descendants of the given element.
   * @param {!HTMLElement} element The parent element to search from.
   */
  findAndTrackChildren(element) {
    Array.prototype.forEach.call(
        element.querySelectorAll('input[type=password]'), function(field) {
          this.trackPasswordField(field);
        }.bind(this));
  },

  /**
   * Start tracking value changes of the given password field if it is
   * not being tracked yet.
   * @param {!HTMLInputElement} passworField The password field to track.
   */
  trackPasswordField(passwordField) {
    const existing = this.passwordFields_.filter(function(element) {
      return element === passwordField;
    });
    if (existing.length !== 0) {
      return;
    }

    const index = this.passwordFields_.length;
    const fieldId = passwordField.id || passwordField.name || '';
    passwordField.addEventListener(
        'input', this.onPasswordChanged_.bind(this, index, fieldId));
    this.passwordFields_.push(passwordField);
    this.passwordValues_.push(passwordField.value);
  },

  /**
   * Check if the password field at |index| has changed. If so, sends back
   * the updated value.
   */
  maybeSendUpdatedPassword(index, fieldId) {
    const newValue = this.passwordFields_[index].value;
    if (newValue === this.passwordValues_[index]) {
      return;
    }

    this.passwordValues_[index] = newValue;

    // Use an invalid char for URL as delimiter to concatenate page url,
    // password field index and id to construct a unique ID for the password
    // field.
    const passwordId =
        this.pageURL_.split('#')[0].split('?')[0] + '|' + index + '|' + fieldId;
    this.channel_.send(
        {name: 'updatePassword', id: passwordId, password: newValue});
  },

  /**
   * Handles 'change' event in the scraped password fields.
   * @param {number} index The index of the password fields in
   *     |passwordFields_|.
   * @param {string} fieldId The id or name of the password field or blank.
   */
  onPasswordChanged_(index, fieldId) {
    this.maybeSendUpdatedPassword(index, fieldId);
  },
};

function onGetSAMLFlag(channel, isSAMLPage) {
  if (!isSAMLPage) {
    return;
  }
  const pageURL = window.location.href;

  channel.send({name: 'pageLoaded', url: pageURL});

  const initPasswordScraper = function() {
    const passwordScraper = new PasswordInputScraper();
    passwordScraper.init(channel, pageURL, document.documentElement);
  };

  if (document.readyState === 'loading') {
    window.addEventListener('readystatechange', function listener(event) {
      if (document.readyState === 'loading') {
        return;
      }
      initPasswordScraper();
      window.removeEventListener(event.type, listener, true);
    }, true);
  } else {
    initPasswordScraper();
  }
}

const channel = new PostMessageChannel();
channel.connect('injected');
channel.sendWithCallback(
    {name: 'getSAMLFlag'}, onGetSAMLFlag.bind(undefined, channel));

const apiCallForwarder = new APICallForwarder();
apiCallForwarder.init(channel);

// Send scroll information from the topmost frame.
if (window.top === window.self) {
  const scrollHelper = WebviewScrollShadowsHelperConstructor();
  scrollHelper.init(channel);
}

})();
//# sourceMappingURL=saml_injected.rollup.js.map
