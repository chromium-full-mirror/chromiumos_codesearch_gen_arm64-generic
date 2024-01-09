import { Polymer, dom, html, PolymerElement, Base, mixinBehaviors, beforeNextRender, dedupingMixin, afterNextRender } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { mojo } from 'chrome://resources/mojo/mojo/public/js/bindings.js';
import Fuse from './fuse.js';

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

class IronMeta {
  /**
   * @param {{
   *   type: (string|null|undefined),
   *   key: (string|null|undefined),
   *   value: *,
   * }=} options
   */
  constructor(options) {
    IronMeta[' '](options);

    /** @type {string} */
    this.type = (options && options.type) || 'default';
    /** @type {string|null|undefined} */
    this.key = options && options.key;
    if (options && 'value' in options) {
      /** @type {*} */
      this.value = options.value;
    }
  }

  /** @return {*} */
  get value() {
    var type = this.type;
    var key = this.key;

    if (type && key) {
      return IronMeta.types[type] && IronMeta.types[type][key];
    }
  }

  /** @param {*} value */
  set value(value) {
    var type = this.type;
    var key = this.key;

    if (type && key) {
      type = IronMeta.types[type] = IronMeta.types[type] || {};
      if (value == null) {
        delete type[key];
      } else {
        type[key] = value;
      }
    }
  }

  /** @return {!Array<*>} */
  get list() {
    var type = this.type;

    if (type) {
      var items = IronMeta.types[this.type];
      if (!items) {
        return [];
      }

      return Object.keys(items).map(function(key) {
        return metaDatas[this.type][key];
      }, this);
    }
  }

  /**
   * @param {string} key
   * @return {*}
   */
  byKey(key) {
    this.key = key;
    return this.value;
  }
}
// This function is used to convince Closure not to remove constructor calls
// for instances that are not held anywhere. For example, when
// `new IronMeta({...})` is used only for the side effect of adding a value.
IronMeta[' '] = function() {};

IronMeta.types = {};

var metaDatas = IronMeta.types;

/**
`iron-meta` is a generic element you can use for sharing information across the
DOM tree. It uses [monostate pattern](http://c2.com/cgi/wiki?MonostatePattern)
such that any instance of iron-meta has access to the shared information. You
can use `iron-meta` to share whatever you want (or create an extension [like
x-meta] for enhancements).

The `iron-meta` instances containing your actual data can be loaded in an
import, or constructed in any way you see fit. The only requirement is that you
create them before you try to access them.

Examples:

If I create an instance like this:

    <iron-meta key="info" value="foo/bar"></iron-meta>

Note that value="foo/bar" is the metadata I've defined. I could define more
attributes or use child nodes to define additional metadata.

Now I can access that element (and it's metadata) from any iron-meta instance
via the byKey method, e.g.

    meta.byKey('info');

Pure imperative form would be like:

    document.createElement('iron-meta').byKey('info');

Or, in a Polymer element, you can include a meta in your template:

    <iron-meta id="meta"></iron-meta>
    ...
    this.$.meta.byKey('info');

@group Iron Elements
@demo demo/index.html
@element iron-meta
*/
Polymer({

  is: 'iron-meta',

  properties: {

    /**
     * The type of meta-data.  All meta-data of the same type is stored
     * together.
     * @type {string}
     */
    type: {
      type: String,
      value: 'default',
    },

    /**
     * The key used to store `value` under the `type` namespace.
     * @type {?string}
     */
    key: {
      type: String,
    },

    /**
     * The meta-data to store or retrieve.
     * @type {*}
     */
    value: {
      type: String,
      notify: true,
    },

    /**
     * If true, `value` is set to the iron-meta instance itself.
     */
    self: {type: Boolean, observer: '_selfChanged'},

    __meta: {type: Boolean, computed: '__computeMeta(type, key, value)'}
  },

  hostAttributes: {hidden: true},

  __computeMeta: function(type, key, value) {
    var meta = new IronMeta({type: type, key: key});

    if (value !== undefined && value !== meta.value) {
      meta.value = value;
    } else if (this.value !== meta.value) {
      this.value = meta.value;
    }

    return meta;
  },

  get list() {
    return this.__meta && this.__meta.list;
  },

  _selfChanged: function(self) {
    if (self) {
      this.value = this;
    }
  },

  /**
   * Retrieves meta data value by key.
   *
   * @method byKey
   * @param {string} key The key of the meta-data to be returned.
   * @return {*}
   */
  byKey: function(key) {
    return new IronMeta({type: this.type, key: key}).value;
  }
});

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
/**
 * The `iron-iconset-svg` element allows users to define their own icon sets
 * that contain svg icons. The svg icon elements should be children of the
 * `iron-iconset-svg` element. Multiple icons should be given distinct id's.
 *
 * Using svg elements to create icons has a few advantages over traditional
 * bitmap graphics like jpg or png. Icons that use svg are vector based so
 * they are resolution independent and should look good on any device. They
 * are stylable via css. Icons can be themed, colorized, and even animated.
 *
 * Example:
 *
 *     <iron-iconset-svg name="my-svg-icons" size="24">
 *       <svg>
 *         <defs>
 *           <g id="shape">
 *             <rect x="12" y="0" width="12" height="24" />
 *             <circle cx="12" cy="12" r="12" />
 *           </g>
 *         </defs>
 *       </svg>
 *     </iron-iconset-svg>
 *
 * This will automatically register the icon set "my-svg-icons" to the iconset
 * database.  To use these icons from within another element, make a
 * `iron-iconset` element and call the `byId` method
 * to retrieve a given iconset. To apply a particular icon inside an
 * element use the `applyIcon` method. For example:
 *
 *     iconset.applyIcon(iconNode, 'car');
 *
 * @element iron-iconset-svg
 * @demo demo/index.html
 * @implements {Polymer.Iconset}
 */
Polymer({
  is: 'iron-iconset-svg',

  properties: {

    /**
     * The name of the iconset.
     */
    name: {type: String, observer: '_nameChanged'},

    /**
     * The size of an individual icon. Note that icons must be square.
     */
    size: {type: Number, value: 24},

    /**
     * Set to true to enable mirroring of icons where specified when they are
     * stamped. Icons that should be mirrored should be decorated with a
     * `mirror-in-rtl` attribute.
     *
     * NOTE: For performance reasons, direction will be resolved once per
     * document per iconset, so moving icons in and out of RTL subtrees will
     * not cause their mirrored state to change.
     */
    rtlMirroring: {type: Boolean, value: false},

    /**
     * Set to true to measure RTL based on the dir attribute on the body or
     * html elements (measured on document.body or document.documentElement as
     * available).
     */
    useGlobalRtlAttribute: {type: Boolean, value: false}
  },

  created: function() {
    this._meta = new IronMeta({type: 'iconset', key: null, value: null});
  },

  attached: function() {
    this.style.display = 'none';
  },

  /**
   * Construct an array of all icon names in this iconset.
   *
   * @return {!Array} Array of icon names.
   */
  getIconNames: function() {
    this._icons = this._createIconMap();
    return Object.keys(this._icons).map(function(n) {
      return this.name + ':' + n;
    }, this);
  },

  /**
   * Applies an icon to the given element.
   *
   * An svg icon is prepended to the element's shadowRoot if it exists,
   * otherwise to the element itself.
   *
   * If RTL mirroring is enabled, and the icon is marked to be mirrored in
   * RTL, the element will be tested (once and only once ever for each
   * iconset) to determine the direction of the subtree the element is in.
   * This direction will apply to all future icon applications, although only
   * icons marked to be mirrored will be affected.
   *
   * @method applyIcon
   * @param {Element} element Element to which the icon is applied.
   * @param {string} iconName Name of the icon to apply.
   * @return {?Element} The svg element which renders the icon.
   */
  applyIcon: function(element, iconName) {
    // Remove old svg element
    this.removeIcon(element);
    // install new svg element
    var svg = this._cloneIcon(
        iconName, this.rtlMirroring && this._targetIsRTL(element));
    if (svg) {
      // insert svg element into shadow root, if it exists
      var pde = dom(element.root || element);
      pde.insertBefore(svg, pde.childNodes[0]);
      return element._svgIcon = svg;
    }
    return null;
  },

  /**
   * Produce installable clone of the SVG element matching `id` in this
   * iconset, or `undefined` if there is no matching element.
   * @param {string} iconName Name of the icon to apply.
   * @param {boolean} targetIsRTL Whether the target element is RTL.
   * @return {Element} Returns an installable clone of the SVG element
   *     matching `id`.
   */
  createIcon: function(iconName, targetIsRTL) {
    return this._cloneIcon(iconName, this.rtlMirroring && targetIsRTL);
  },

  /**
   * Remove an icon from the given element by undoing the changes effected
   * by `applyIcon`.
   *
   * @param {Element} element The element from which the icon is removed.
   */
  removeIcon: function(element) {
    // Remove old svg element
    if (element._svgIcon) {
      dom(element.root || element).removeChild(element._svgIcon);
      element._svgIcon = null;
    }
  },

  /**
   * Measures and memoizes the direction of the element. Note that this
   * measurement is only done once and the result is memoized for future
   * invocations.
   */
  _targetIsRTL: function(target) {
    if (this.__targetIsRTL == null) {
      if (this.useGlobalRtlAttribute) {
        var globalElement =
            (document.body && document.body.hasAttribute('dir')) ?
            document.body :
            document.documentElement;

        this.__targetIsRTL = globalElement.getAttribute('dir') === 'rtl';
      } else {
        if (target && target.nodeType !== Node.ELEMENT_NODE) {
          target = target.host;
        }

        this.__targetIsRTL =
            target && window.getComputedStyle(target)['direction'] === 'rtl';
      }
    }

    return this.__targetIsRTL;
  },

  /**
   *
   * When name is changed, register iconset metadata
   *
   */
  _nameChanged: function() {
    this._meta.value = null;
    this._meta.key = this.name;
    this._meta.value = this;

    this.async(function() {
      this.fire('iron-iconset-added', this, {node: window});
    });
  },

  /**
   * Create a map of child SVG elements by id.
   *
   * @return {!Object} Map of id's to SVG elements.
   */
  _createIconMap: function() {
    // Objects chained to Object.prototype (`{}`) have members. Specifically,
    // on FF there is a `watch` method that confuses the icon map, so we
    // need to use a null-based object here.
    var icons = Object.create(null);
    dom(this).querySelectorAll('[id]').forEach(function(icon) {
      icons[icon.id] = icon;
    });
    return icons;
  },

  /**
   * Produce installable clone of the SVG element matching `id` in this
   * iconset, or `undefined` if there is no matching element.
   *
   * @return {Element} Returns an installable clone of the SVG element
   * matching `id`.
   */
  _cloneIcon: function(id, mirrorAllowed) {
    // create the icon map on-demand, since the iconset itself has no discrete
    // signal to know when it's children are fully parsed
    this._icons = this._icons || this._createIconMap();
    return this._prepareSvgClone(this._icons[id], this.size, mirrorAllowed);
  },

  /**
   * @param {Element} sourceSvg
   * @param {number} size
   * @param {Boolean} mirrorAllowed
   * @return {Element}
   */
  _prepareSvgClone: function(sourceSvg, size, mirrorAllowed) {
    if (sourceSvg) {
      var content = sourceSvg.cloneNode(true),
          svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
          viewBox =
              content.getAttribute('viewBox') || '0 0 ' + size + ' ' + size,
          cssText =
              'pointer-events: none; display: block; width: 100%; height: 100%;';

      if (mirrorAllowed && content.hasAttribute('mirror-in-rtl')) {
        cssText +=
            '-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;';
      }

      svg.setAttribute('viewBox', viewBox);
      svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
      svg.setAttribute('focusable', 'false');
      // TODO(dfreedm): `pointer-events: none` works around
      // https://crbug.com/370136
      // TODO(sjmiles): inline style may not be ideal, but avoids requiring a
      // shadow-root
      svg.style.cssText = cssText;
      svg.appendChild(content).removeAttribute('id');
      return svg;
    }
    return null;
  }

});

const template$3 = html `<iron-iconset-svg name="emoji_picker" size="24">
  <defs>
    
    <svg id="emoji_events" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 0011 15.9V19H7v2h10v-2h-4v-3.1a5.01 5.01 0 003.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg>
    <svg id="emoji_food_beverage" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M20 3H9v2.4l1.81 1.45c.12.09.19.24.19.39v4.26c0 .28-.22.5-.5.5h-4c-.28 0-.5-.22-.5-.5V7.24c0-.15.07-.3.19-.39L8 5.4V3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2a2 2 0 002-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z"/></svg>
    <svg id="emoji_nature" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M21.94 4.88A1.32 1.32 0 0020.68 4H19.6l-.31-.97C19.15 2.43 18.61 2 18 2s-1.15.43-1.29 1.04L16.4 4h-1.07c-.57 0-1.08.35-1.26.88-.19.56.04 1.17.56 1.48l.87.52-.4 1.24c-.23.58-.04 1.25.45 1.62.23.17.51.26.78.26.31 0 .61-.11.86-.32l.81-.7.81.7c.25.21.55.32.86.32.27 0 .55-.09.78-.26.5-.37.68-1.04.45-1.62l-.39-1.24.87-.52c.51-.31.74-.92.56-1.48zM18 7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM13.49 10.51c-.43-.43-.94-.73-1.49-.93V8h-1v1.38c-.11-.01-.23-.03-.34-.03-1.02 0-2.05.39-2.83 1.17-.16.16-.3.34-.43.53L6 10.52a3.01 3.01 0 00-3.83 1.82c-.27.75-.23 1.57.12 2.29.23.48.58.87 1 1.16-.38 1.35-.06 2.85 1 3.91a3.981 3.981 0 003.91 1c.29.42.68.77 1.16 1 .42.2.85.3 1.29.3.34 0 .68-.06 1.01-.17a3.007 3.007 0 001.82-3.85l-.52-1.37c.18-.13.36-.27.53-.43.87-.87 1.24-2.04 1.14-3.17H16v-1h-1.59c-.19-.55-.49-1.06-.92-1.5zm-8.82 3.78c-.25-.09-.45-.27-.57-.51s-.13-.51-.04-.76c.19-.52.76-.79 1.26-.61l3.16 1.19c-1.15.6-2.63 1.11-3.81.69zm6.32 5.65c-.25.09-.52.08-.76-.04a.989.989 0 01-.51-.57c-.42-1.18.09-2.65.7-3.8l1.18 3.13c.18.52-.09 1.1-.61 1.28zm1.21-5.34l-.61-1.61c0-.01-.01-.02-.02-.03l-.06-.12a.673.673 0 00-.07-.11l-.09-.09-.09-.09c-.03-.03-.07-.05-.11-.07-.04-.02-.07-.05-.12-.06-.01 0-.02-.01-.03-.02l-1.6-.6a1.966 1.966 0 012.67.13c.73.73.77 1.88.13 2.67z"/></svg>
    <svg id="emoji_objects" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 3c-.46 0-.93.04-1.4.14-2.76.53-4.96 2.76-5.48 5.52-.48 2.61.48 5.01 2.22 6.56.43.38.66.91.66 1.47V19c0 1.1.9 2 2 2h.28a1.98 1.98 0 003.44 0H14c1.1 0 2-.9 2-2v-2.31c0-.55.22-1.09.64-1.46A6.956 6.956 0 0019 10c0-3.87-3.13-7-7-7zm2 16h-4v-1h4v1zm0-2h-4v-1h4v1zm-1.5-5.59V14h-1v-2.59L9.67 9.59l.71-.71L12 10.5l1.62-1.62.71.71-1.83 1.82z"/></svg>
    <svg id="emoji_people" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path fill="none" d="M0 0h24v24H0z"/><circle cx="12" cy="4" r="2"/><path d="M15.89 8.11C15.5 7.72 14.83 7 13.53 7h-2.54C8.24 6.99 6 4.75 6 2H4c0 3.16 2.11 5.84 5 6.71V22h2v-6h2v6h2V10.05L18.95 14l1.41-1.41-4.47-4.48z"/></svg>
    <svg id="emoji_symbols" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 2h8v2H3zM6 11h2V7h3V5H3v2h3z"/><path transform="rotate(-45.001 17 17)" d="M11.5 16h11v2h-11z"/><circle cx="14.5" cy="14.5" r="1.5"/><circle cx="19.5" cy="19.5" r="1.5"/><path d="M15.5 11A2.5 2.5 0 0018 8.5V4h3V2h-4v4.51c-.42-.32-.93-.51-1.5-.51a2.5 2.5 0 000 5zM9.74 15.96l-1.41 1.41-.71-.71.35-.35a2.499 2.499 0 00-1.77-4.27 2.499 2.499 0 00-1.77 4.27l.35.35-1.06 1.06c-.98.98-.98 2.56 0 3.54.5.5 1.14.74 1.78.74s1.28-.24 1.77-.73l1.06-1.06 1.41 1.41 1.41-1.41-1.41-1.41 1.41-1.41-1.41-1.43zM5.85 14.2c.12-.12.26-.15.35-.15s.23.03.35.15c.19.2.19.51 0 .71l-.35.35-.35-.36a.501.501 0 010-.7zm0 5.65c-.12.12-.26.15-.35.15s-.23-.03-.35-.15a.513.513 0 010-.71l1.06-1.06.71.71-1.07 1.06z"/></svg>
    <svg id="emoji_transportation" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M20.57 10.66c-.14-.4-.52-.66-.97-.66h-7.19c-.46 0-.83.26-.98.66L10 14.77l.01 5.51c0 .38.31.72.69.72h.62c.38 0 .68-.38.68-.76V19h8v1.24c0 .38.31.76.69.76h.61c.38 0 .69-.34.69-.72l.01-1.37v-4.14l-1.43-4.11zm-8.16.34h7.19l1.03 3h-9.25l1.03-3zM12 17c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm8 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/><path d="M14 9h1V3H7v5H2v13h1V9h5V4h6z"/><path d="M5 11h2v2H5zM10 5h2v2h-2zM5 15h2v2H5zM5 19h2v2H5z"/></svg>
    <svg id="flag" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/></svg>
    <svg id="insert_emoticon" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg>
    <svg id="keyboard_arrow_left" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/></svg>
    <svg id="keyboard_arrow_right" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
    <svg id="more_horizontal" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
    <svg id="schedule" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z"></path></svg>
  </defs>
</iron-iconset-svg>

<iron-iconset-svg name="emoji_picker_v2" size="24">
  <defs>
    
    
    <svg id="emoji_recent" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12S17.5 2 12 2M16.3 15.2L11 12.3V7H12.5V11.4L17 13.9L16.3 15.2Z"></path></svg>
    <svg id="emoji_emojis_filled" xmlns="http://www.w3.org/2000/svg"><path d="M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M15.5,8A1.5,1.5 0 0,1 17,9.5A1.5,1.5 0 0,1 15.5,11A1.5,1.5 0 0,1 14,9.5A1.5,1.5 0 0,1 15.5,8M8.5,8A1.5,1.5 0 0,1 10,9.5A1.5,1.5 0 0,1 8.5,11A1.5,1.5 0 0,1 7,9.5A1.5,1.5 0 0,1 8.5,8M12,17.5C9.67,17.5 7.69,16.04 6.89,14H17.11C16.3,16.04 14.33,17.5 12,17.5Z"></path></svg>
    <svg id="emoji_emojis_outlined" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M15.5 11c.433 0 .792-.142 1.075-.425.283-.283.425-.642.425-1.075 0-.433-.142-.792-.425-1.075C16.292 8.142 15.933 8 15.5 8c-.433 0-.792.142-1.075.425-.283.283-.425.642-.425 1.075 0 .433.142.792.425 1.075.283.283.642.425 1.075.425Zm-7 0c.433 0 .792-.142 1.075-.425.283-.283.425-.642.425-1.075 0-.433-.142-.792-.425-1.075C9.292 8.142 8.933 8 8.5 8c-.433 0-.792.142-1.075.425C7.142 8.708 7 9.067 7 9.5c0 .433.142.792.425 1.075.283.283.642.425 1.075.425Zm3.5 6.5c1.183 0 2.229-.325 3.137-.975A5.473 5.473 0 0 0 17.1 14h-1.65c-.35.6-.825 1.083-1.425 1.45-.6.367-1.275.55-2.025.55s-1.425-.183-2.025-.55A4.094 4.094 0 0 1 8.55 14H6.9a5.473 5.473 0 0 0 1.963 2.525c.908.65 1.954.975 3.137.975Zm0 4.5a9.733 9.733 0 0 1-3.9-.788 10.092 10.092 0 0 1-3.175-2.137c-.9-.9-1.612-1.958-2.137-3.175A9.733 9.733 0 0 1 2 12c0-1.383.263-2.683.788-3.9a10.092 10.092 0 0 1 2.137-3.175c.9-.9 1.958-1.613 3.175-2.138A9.743 9.743 0 0 1 12 2c1.383 0 2.683.262 3.9.787a10.105 10.105 0 0 1 3.175 2.138c.9.9 1.612 1.958 2.137 3.175A9.733 9.733 0 0 1 22 12a9.733 9.733 0 0 1-.788 3.9 10.092 10.092 0 0 1-2.137 3.175c-.9.9-1.958 1.612-3.175 2.137A9.733 9.733 0 0 1 12 22Zm0-2c2.217 0 4.104-.779 5.663-2.337C19.221 16.104 20 14.217 20 12s-.779-4.104-2.337-5.663C16.104 4.779 14.217 4 12 4s-4.104.779-5.662 2.337C4.779 7.896 4 9.783 4 12s.78 4.104 2.338 5.663C7.896 19.221 9.783 20 12 20Z"></path></svg>
    <svg id="emoji_emoticons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" mlns="http://www.w3.org/2000/svg"><path d="M4.857 11.398c-.384 0-.708-.132-.972-.396a1.3 1.3 0 0 1-.396-.954c0-.384.132-.702.396-.954.264-.264.588-.396.972-.396.372 0 .69.132.954.396.264.252.396.57.396.954a1.3 1.3 0 0 1-.396.954 1.3 1.3 0 0 1-.954.396Zm0 6.75c-.384 0-.708-.132-.972-.396a1.321 1.321 0 0 1-.396-.972c0-.36.132-.672.396-.936s.588-.396.972-.396c.372 0 .69.132.954.396s.396.576.396.936c0 .384-.132.708-.396.972a1.3 1.3 0 0 1-.954.396ZM8.326 13.288v-1.656h5.904v1.656H8.326ZM17.166 20.488l-1.44-1.008c.504-.624.96-1.314 1.368-2.07.42-.768.744-1.584.972-2.448.24-.876.36-1.782.36-2.718 0-.936-.12-1.836-.36-2.7a10.772 10.772 0 0 0-.972-2.466 12.38 12.38 0 0 0-1.368-2.07L17.166 4c.48.54.966 1.23 1.458 2.07.492.84.9 1.782 1.224 2.826.336 1.032.504 2.148.504 3.348 0 .9-.096 1.758-.288 2.574-.192.804-.444 1.56-.756 2.268a12.69 12.69 0 0 1-1.044 1.926 12.42 12.42 0 0 1-1.098 1.476Z"></path></svg>
    <svg id="emoji_gif" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17V7h2v10h-2Zm-8.543 0c-.428 0-.778-.132-1.05-.396C2.136 16.34 2 16 2 15.584V8.416c0-.417.136-.757.407-1.021C2.68 7.132 3.03 7 3.457 7h5.086c.428 0 .778.132 1.05.396.271.264.407.604.407 1.02V9H4v6h4v-3h2v3.583c0 .417-.136.757-.407 1.021-.272.264-.622.396-1.05.396H3.457ZM16 17V7h7v2h-5v2.5h3v2h-3V17h-2Z"></path></svg>
    <svg id="emoji_symbols" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.6 17.485c1.418-1.242 2.4-3.222 2.4-5.63C18 7.684 15.055 4.8 12 4.8c-3.054 0-6 2.884-6 7.055 0 2.408.982 4.388 2.4 5.63V20.4c-2.838-1.517-4.8-4.773-4.8-8.545C3.6 6.633 7.361 2.4 12 2.4c4.64 0 8.4 4.233 8.4 9.455 0 3.772-1.962 7.027-4.8 8.545v-2.915Z"/><path d="M1.2 18h7.2v2.4H1.2V18ZM15.6 18h7.2v2.4h-7.2V18Z"/></svg>
  </defs>
</iron-iconset-svg>
`;
document.head.appendChild(template$3.content);

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// height and width should match the dialog size in EmojiPickerDialog.
const EMOJI_NUM_TABS_IN_FIRST_PAGE = 8;
const EMOJI_HIGHLIGHTER_WIDTH = 24;
const EMOJI_PICKER_TOP_PADDING = 20;
const EMOJI_PICKER_HEIGHT = 480;
const EMOJI_PICKER_WIDTH = 420;
const EMOJI_PICKER_SIDE_PADDING = 20;
const EMOJI_PER_ROW = 9;
const GROUP_ICON_SIZE = (EMOJI_PICKER_WIDTH - 2 * EMOJI_PICKER_SIDE_PADDING) / EMOJI_PER_ROW;
const EMOJI_ICON_SIZE = 32;
const VISUAL_CONTENT_PADDING = 8;
const VISUAL_CONTENT_WIDTH = (EMOJI_PICKER_WIDTH - 2 * EMOJI_PICKER_SIDE_PADDING) / 2 -
    VISUAL_CONTENT_PADDING / 2;
const EMOJI_SPACING = (EMOJI_PICKER_WIDTH - 2 * EMOJI_PICKER_SIDE_PADDING -
    EMOJI_PER_ROW * EMOJI_ICON_SIZE) /
    (EMOJI_PER_ROW - 1);
const EMOJI_HIGHLIGHTER_WIDTH_PX = `${EMOJI_HIGHLIGHTER_WIDTH}px`;
const EMOJI_PICKER_HEIGHT_PX = `${EMOJI_PICKER_HEIGHT}px`;
const EMOJI_PICKER_WIDTH_PX = `${EMOJI_PICKER_WIDTH}px`;
const EMOJI_SIZE_PX = `${EMOJI_ICON_SIZE}px`;
const EMOJI_SPACING_PX = `${EMOJI_SPACING}px`;
const EMOJI_GROUP_SIZE_PX = `${GROUP_ICON_SIZE}px`;
const EMOJI_PICKER_SIDE_PADDING_PX = `${EMOJI_PICKER_SIDE_PADDING}px`;
const EMOJI_PICKER_TOP_PADDING_PX = `${EMOJI_PICKER_TOP_PADDING}px`;
const VISUAL_CONTENT_PADDING_PX = `${VISUAL_CONTENT_PADDING}px`;
const VISUAL_CONTENT_WIDTH_PX = `${VISUAL_CONTENT_WIDTH}px`;
const GROUP_PER_ROW = 10;
const EMOJI_GROUP_SPACING = (EMOJI_PICKER_WIDTH - 2 * EMOJI_PICKER_SIDE_PADDING -
    GROUP_PER_ROW * EMOJI_ICON_SIZE) /
    (GROUP_PER_ROW - 1);
const EMOJI_PICKER_TOTAL_EMOJI_WIDTH = EMOJI_ICON_SIZE + EMOJI_GROUP_SPACING;
const TAB_BUTTON_MARGIN = 5;
const TEXT_GROUP_BUTTON_PADDING = 4;
const EMOJI_GROUP_SPACING_PX = `${EMOJI_GROUP_SPACING}px`;
const EMOJI_PICKER_TOTAL_EMOJI_WIDTH_PX = `${EMOJI_PICKER_TOTAL_EMOJI_WIDTH}px`;
const TAB_BUTTON_MARGIN_PX = `${TAB_BUTTON_MARGIN}px`;
const TEXT_GROUP_BUTTON_PADDING_PX = `${TEXT_GROUP_BUTTON_PADDING}px`;
const TRENDING = 'Trending';
const RECENTLY_USED = 'Recently used';
// If more groups are added to emoji, symbol or emoticon this number will change
const TRENDING_GROUP_ID = '30'; // TODO(b/266024083): Make this dynamic
const NO_INTERNET_VIEW_ERROR_MSG = 'Connect to the internet to view GIFs';
const NO_INTERNET_SEARCH_ERROR_MSG = 'Connect to the internet to search for GIFs';
const SOMETHING_WENT_WRONG_ERROR_MSG = 'Something went wrong';
// 24 hours is equivalent to 86400000 milliseconds.
const TWENTY_FOUR_HOURS = 86400000;
const GIF_VALIDATION_DATE = 'gifValidationDate';
const V2_5_EMOJI_CATEGORY_SIZE = 36;
const V2_5_EMOJI_PICKER_SIDE_PADDING = 18;
const V2_5_EMOJI_PICKER_SEARCH_SIDE_PADDING = 16;
const V2_5_GROUP_ICON_SIZE = (EMOJI_PICKER_WIDTH - 2 * V2_5_EMOJI_PICKER_SIDE_PADDING) / EMOJI_PER_ROW;
const V2_5_VISUAL_CONTENT_WIDTH = (EMOJI_PICKER_WIDTH - 2 * V2_5_EMOJI_PICKER_SIDE_PADDING) / 2 -
    VISUAL_CONTENT_PADDING / 2;
const V2_5_EMOJI_SPACING = (EMOJI_PICKER_WIDTH - 2 * V2_5_EMOJI_PICKER_SIDE_PADDING -
    EMOJI_PER_ROW * EMOJI_ICON_SIZE) /
    (EMOJI_PER_ROW - 1);
const V2_5_EMOJI_SPACING_PX = `${V2_5_EMOJI_SPACING}px`;
const V2_5_EMOJI_GROUP_SIZE_PX = `${V2_5_GROUP_ICON_SIZE}px`;
const V2_5_EMOJI_CATEGORY_SIZE_PX = `${V2_5_EMOJI_CATEGORY_SIZE}px`;
const V2_5_EMOJI_PICKER_SEARCH_SIDE_PADDING_PX = `${V2_5_EMOJI_PICKER_SEARCH_SIDE_PADDING}px`;
const V2_5_EMOJI_PICKER_SIDE_PADDING_PX = `${V2_5_EMOJI_PICKER_SIDE_PADDING}px`;
const V2_5_VISUAL_CONTENT_WIDTH_PX = `${V2_5_VISUAL_CONTENT_WIDTH}px`;
const V2_5_EMOJI_GROUP_SPACING = (EMOJI_PICKER_WIDTH - 2 * V2_5_EMOJI_PICKER_SIDE_PADDING -
    GROUP_PER_ROW * EMOJI_ICON_SIZE) /
    (GROUP_PER_ROW - 1);
const V2_5_EMOJI_PICKER_TOTAL_EMOJI_WIDTH = EMOJI_ICON_SIZE + V2_5_EMOJI_GROUP_SPACING;
const V2_5_EMOJI_GROUP_SPACING_PX = `${V2_5_EMOJI_GROUP_SPACING}px`;
const JELLY_EMOJI_PICKER_TOP_PADDING = 10;
const JELLY_EMOJI_PICKER_SEARCH_SIDE_PADDING = 16;
const JELLY_EMOJI_PICKER_TOP_PADDING_PX = `${JELLY_EMOJI_PICKER_TOP_PADDING}px`;
const JELLY_EMOJI_PICKER_SEARCH_SIDE_PADDING_PX = `${JELLY_EMOJI_PICKER_SEARCH_SIDE_PADDING}px`;

function getTemplate$f() {
    return html `<!--_html_template_start_--><style>.emoji-image-container{position:relative}.emoji-image{background-color:var(--cros-button-stroke-color-secondary-disabled);border:none;border-radius:8px;cursor:pointer;display:block;height:var(--visual-content-height);margin-bottom:var(--visual-content-padding);width:var(--visual-content-width)}.emoji-image:active,.emoji-image:focus{outline-color:var(--emoji-picker-focus-ring-color);outline-style:solid;outline-width:2px}.emoji-image:hover{background-color:var(--emoji-hover-background)}.emoji-image.loading{animation:loading-rect-loop 1.5s;animation-iteration-count:infinite}@keyframes loading-rect-loop{0%{opacity:1}50%{opacity:.5}100%{opacity:1}}.emoji-image-clear{background-color:var(--emoji-picker-container-color);border:2px solid transparent;border-radius:4px;box-shadow:var(--cros-elevation-1-shadow,--cr-elevation-1);color:var(--cros-text-color-secondary);cursor:pointer;font:var(--cros-button-2-font);outline:0;padding:7px 11px 7px 11px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);white-space:nowrap;width:fit-content;z-index:200}.emoji-image-clear:active,.emoji-image-clear:focus{border:2px solid var(--cros-toggle-color)}</style>

<div class="emoji-image-container" on-contextmenu="handleContextMenu" on-mouseleave="handleMouseLeave" style$="[[getStyles(item)]]">

  <img data-index$="[[index]]" class$="[[getImageClassName(loading)]]" is="cr-auto-img" auto-src="[[getUrl(item)]]" alt$="[[item.base.name]]" load="lazy" on-mouseenter="handleMouseEnter" on-focus="handleFocus" on-click="handleClick" on-keydown="handleKeydown" on-load="handleLoad" role="button" tabindex="0">

  <template is="dom-if" if="[[showClearButton]]">
    <button class="emoji-image-clear" on-click="handleClear">
      Remove from recently used GIFs
    </button>
  </template>
</div><!--_html_template_end_-->`;
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CATEGORY_BUTTON_CLICK = 'category-button-click';
const GROUP_BUTTON_CLICK = 'group-button-click';
const EMOJI_TEXT_BUTTON_CLICK = 'emoji-text-button-click';
const EMOJI_IMG_BUTTON_CLICK = 'emoji-img-button-click';
const EMOJI_VARIANTS_SHOWN = 'emoji-variants-shown';
/**
 * The event that data of a category is fetched and processed for rendering.
 * Note: this event does not indicate if rendering of the category data is
 * completed or not.
 */
const CATEGORY_DATA_LOADED = 'category-data-loaded';
/**
 * The event that the user clicks try again when there is either a network or
 * http error when trying to fetch for gifs.
 */
const GIF_ERROR_TRY_AGAIN = 'gif-error-try-again';
/**
 * The event that all the data are loaded and rendered and all the
 * emoji-picker functionalities are ready to use.
 */
const EMOJI_PICKER_READY = 'emoji-picker-ready';
const EMOJI_CLEAR_RECENTS_CLICK = 'emoji-clear-recents-click';
/**
 * Constructs a CustomEvent with the given event type and details.
 * The event will bubble up through elements and components.
 */
function createCustomEvent(type, detail) {
    return new CustomEvent(type, { bubbles: true, composed: true, detail });
}

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// LINT.IfChange
// `DEFAULT` is not defined in tools/emoji_data.py for `Tone` and `Gender`
// because it is only relevant for frontend persistence.
var Tone;
(function (Tone) {
    Tone[Tone["DEFAULT"] = 0] = "DEFAULT";
    Tone[Tone["LIGHT"] = 1] = "LIGHT";
    Tone[Tone["MEDIUM_LIGHT"] = 2] = "MEDIUM_LIGHT";
    Tone[Tone["MEDIUM"] = 3] = "MEDIUM";
    Tone[Tone["MEDIUM_DARK"] = 4] = "MEDIUM_DARK";
    Tone[Tone["DARK"] = 5] = "DARK";
})(Tone || (Tone = {}));
var Gender;
(function (Gender) {
    Gender[Gender["DEFAULT"] = 0] = "DEFAULT";
    Gender[Gender["WOMAN"] = 1] = "WOMAN";
    Gender[Gender["MAN"] = 2] = "MAN";
})(Gender || (Gender = {}));
var CategoryEnum;
(function (CategoryEnum) {
    CategoryEnum["EMOJI"] = "emoji";
    CategoryEnum["EMOTICON"] = "emoticon";
    CategoryEnum["SYMBOL"] = "symbol";
    CategoryEnum["GIF"] = "gif";
})(CategoryEnum || (CategoryEnum = {}));

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class EmojiImageComponent extends PolymerElement {
    constructor() {
        super(...arguments);
        this.loading = true;
    }
    static get is() {
        return 'emoji-image';
    }
    static get template() {
        return getTemplate$f();
    }
    static get properties() {
        return {
            index: Number,
            item: Object,
            showTooltip: Object,
            emojiClick: Object,
            clearable: { type: Boolean, value: false },
            showClearButton: { type: Boolean, value: false },
        };
    }
    handleMouseEnter(event) {
        this.showTooltip(event);
    }
    handleFocus(event) {
        this.showTooltip(event);
    }
    handleClick(event) {
        this.emojiClick(event);
    }
    findSiblingEmojiImageByIndex(index) {
        // The shadow root of emoji-group.
        const parentShadowRoot = this.shadowRoot.host.getRootNode();
        for (const emojiImage of parentShadowRoot.querySelectorAll('emoji-image')) {
            if (emojiImage.index === index) {
                return emojiImage;
            }
        }
        return null;
    }
    handleKeydown(event) {
        // The img element where the keyboard event is triggered.
        const target = event.target;
        // Triggers click event to insert the current GIF image.
        if (event.code === 'Enter') {
            event.stopPropagation();
            target.click();
            return;
        }
        // Moves focus to the correct sibling.
        if (event.code === 'Tab') {
            const siblingIndex = this.index + (event.shiftKey ? -1 : +1);
            const sibling = this.findSiblingEmojiImageByIndex(siblingIndex);
            if (sibling !== null) {
                event.preventDefault();
                event.stopPropagation();
                sibling.focus();
                return;
            }
        }
    }
    focus() {
        this.shadowRoot?.querySelector('img')?.focus();
    }
    handleLoad() {
        this.loading = false;
    }
    handleContextMenu(evt) {
        if (this.clearable) {
            evt.preventDefault();
            evt.stopPropagation();
            this.showClearButton = true;
        }
    }
    handleMouseLeave() {
        if (this.showClearButton) {
            this.showClearButton = false;
        }
    }
    handleClear(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.showClearButton = false;
        this.dispatchEvent(createCustomEvent(EMOJI_CLEAR_RECENTS_CLICK, {
            category: CategoryEnum.GIF,
            item: this.item,
        }));
    }
    getImageClassName(loading) {
        return loading ? 'emoji-image loading' : 'emoji-image';
    }
    /**
     * Returns visual content preview url.
     */
    getUrl(item) {
        return item.base.visualContent?.url.preview.url;
    }
    getStyles(item) {
        const { visualContent } = item.base;
        if (visualContent === undefined) {
            return;
        }
        const { height, width } = visualContent.previewSize;
        const visualContentHeight = height / width * VISUAL_CONTENT_WIDTH;
        return `--visual-content-height: ${visualContentHeight}px`;
    }
}
customElements.define(EmojiImageComponent.is, EmojiImageComponent);

function getTemplate$e() {
    return html `<!--_html_template_start_--><style>:host{--bubble-padding-top:8px;--bubble-padding-bottom:8px;--bubble-padding-left:16px;--bubble-padding-right:16px;--bubble-position-top:72px;--bubble-position-right:10px;--bubble-radius:16px;--bubble-line-height:20px;--dot-position-right:21px;--dot-position-top:-15px;--dot-size:8px;--icon-size:20px;--icon-margin-right:12px}.overlay{position:fixed;top:0;left:0;width:var(--emoji-picker-width);height:var(--emoji-picker-height)}.bubble{top:var(--bubble-position-top);right:var(--bubble-position-right);position:absolute;line-height:var(--bubble-line-height);border-radius:var(--bubble-radius);padding-left:var(--bubble-padding-left);padding-right:var(--bubble-padding-right);padding-top:var(--bubble-padding-top);padding-bottom:var(--bubble-padding-bottom);background-color:var(--emoji-picker-nudge-background-color);color:var(--emoji-picker-nudge-icon-color);font:var(--cros-body-1-font);box-sizing:border-box;display:flex}.bubble>.dot{position:absolute;display:inline-block;width:var(--dot-size);height:var(--dot-size);border-radius:calc(var(--dot-size) * 2);background-color:var(--emoji-picker-nudge-background-color);right:var(--dot-position-right);top:var(--dot-position-top)}.bubble>.icon{-webkit-mask-image:url(/nudge_icon.svg);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;background-color:currentColor;height:var(--icons-size);width:var(--icon-size);padding-top:var(--bubble-padding-top);margin-right:var(--icon-margin-right)}.bubble a{color:var(--emoji-picker-nudge-icon-color)}</style>

<div aria-hidden="true" class="overlay" on-click="onClickOverlay">
    <div class="bubble" on-click="onClickTooltip">
        <div class="dot"></div>
        <span class="icon"></span>
        <span>
            GIFs are available. <a on-click="onClickLink" href="#">Learn more</a>
        </span>
    </div>
</div>

<!--_html_template_end_-->`;
}

// ui/gfx/geometry/mojom/geometry.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PointSpec = { $: {} };
const PointFSpec = { $: {} };
const Point3FSpec = { $: {} };
const SizeSpec = { $: {} };
const SizeFSpec = { $: {} };
const RectSpec = { $: {} };
const RectFSpec = { $: {} };
const InsetsSpec = { $: {} };
const InsetsFSpec = { $: {} };
const Vector2dSpec = { $: {} };
const Vector2dFSpec = { $: {} };
const Vector3dFSpec = { $: {} };
const QuaternionSpec = { $: {} };
const QuadFSpec = { $: {} };
mojo.internal.Struct(PointSpec.$, 'Point', [
    mojo.internal.StructField('x', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
    mojo.internal.StructField('y', 4, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(PointFSpec.$, 'PointF', [
    mojo.internal.StructField('x', 0, 0, mojo.internal.Float, 0, false /* nullable */, 0),
    mojo.internal.StructField('y', 4, 0, mojo.internal.Float, 0, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(Point3FSpec.$, 'Point3F', [
    mojo.internal.StructField('x', 0, 0, mojo.internal.Float, 0, false /* nullable */, 0),
    mojo.internal.StructField('y', 4, 0, mojo.internal.Float, 0, false /* nullable */, 0),
    mojo.internal.StructField('z', 8, 0, mojo.internal.Float, 0, false /* nullable */, 0),
], [[0, 24],]);
mojo.internal.Struct(SizeSpec.$, 'Size', [
    mojo.internal.StructField('width', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
    mojo.internal.StructField('height', 4, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(SizeFSpec.$, 'SizeF', [
    mojo.internal.StructField('width', 0, 0, mojo.internal.Float, 0, false /* nullable */, 0),
    mojo.internal.StructField('height', 4, 0, mojo.internal.Float, 0, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(RectSpec.$, 'Rect', [
    mojo.internal.StructField('x', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
    mojo.internal.StructField('y', 4, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
    mojo.internal.StructField('width', 8, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
    mojo.internal.StructField('height', 12, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
], [[0, 24],]);
mojo.internal.Struct(RectFSpec.$, 'RectF', [
    mojo.internal.StructField('x', 0, 0, mojo.internal.Float, 0, false /* nullable */, 0),
    mojo.internal.StructField('y', 4, 0, mojo.internal.Float, 0, false /* nullable */, 0),
    mojo.internal.StructField('width', 8, 0, mojo.internal.Float, 0, false /* nullable */, 0),
    mojo.internal.StructField('height', 12, 0, mojo.internal.Float, 0, false /* nullable */, 0),
], [[0, 24],]);
mojo.internal.Struct(InsetsSpec.$, 'Insets', [
    mojo.internal.StructField('top', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
    mojo.internal.StructField('left', 4, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
    mojo.internal.StructField('bottom', 8, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
    mojo.internal.StructField('right', 12, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
], [[0, 24],]);
mojo.internal.Struct(InsetsFSpec.$, 'InsetsF', [
    mojo.internal.StructField('top', 0, 0, mojo.internal.Float, 0, false /* nullable */, 0),
    mojo.internal.StructField('left', 4, 0, mojo.internal.Float, 0, false /* nullable */, 0),
    mojo.internal.StructField('bottom', 8, 0, mojo.internal.Float, 0, false /* nullable */, 0),
    mojo.internal.StructField('right', 12, 0, mojo.internal.Float, 0, false /* nullable */, 0),
], [[0, 24],]);
mojo.internal.Struct(Vector2dSpec.$, 'Vector2d', [
    mojo.internal.StructField('x', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
    mojo.internal.StructField('y', 4, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(Vector2dFSpec.$, 'Vector2dF', [
    mojo.internal.StructField('x', 0, 0, mojo.internal.Float, 0, false /* nullable */, 0),
    mojo.internal.StructField('y', 4, 0, mojo.internal.Float, 0, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(Vector3dFSpec.$, 'Vector3dF', [
    mojo.internal.StructField('x', 0, 0, mojo.internal.Float, 0, false /* nullable */, 0),
    mojo.internal.StructField('y', 4, 0, mojo.internal.Float, 0, false /* nullable */, 0),
    mojo.internal.StructField('z', 8, 0, mojo.internal.Float, 0, false /* nullable */, 0),
], [[0, 24],]);
mojo.internal.Struct(QuaternionSpec.$, 'Quaternion', [
    mojo.internal.StructField('x', 0, 0, mojo.internal.Double, 0, false /* nullable */, 0),
    mojo.internal.StructField('y', 8, 0, mojo.internal.Double, 0, false /* nullable */, 0),
    mojo.internal.StructField('z', 16, 0, mojo.internal.Double, 0, false /* nullable */, 0),
    mojo.internal.StructField('w', 24, 0, mojo.internal.Double, 0, false /* nullable */, 0),
], [[0, 40],]);
mojo.internal.Struct(QuadFSpec.$, 'QuadF', [
    mojo.internal.StructField('p1', 0, 0, PointFSpec.$, null, false /* nullable */, 0),
    mojo.internal.StructField('p2', 8, 0, PointFSpec.$, null, false /* nullable */, 0),
    mojo.internal.StructField('p3', 16, 0, PointFSpec.$, null, false /* nullable */, 0),
    mojo.internal.StructField('p4', 24, 0, PointFSpec.$, null, false /* nullable */, 0),
], [[0, 40],]);

// mojom-webui/url/mojom/url.mojom-webui.js is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const UrlSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
mojo.internal.Struct(UrlSpec.$, 'Url', [
    mojo.internal.StructField('url', 0, 0, mojo.internal.String, null, false /* nullable */, 0),
], [[0, 16],]);

// chrome/browser/ui/webui/ash/emoji/emoji_picker.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const FeatureSpec = { $: mojo.internal.Enum() };
var Feature;
(function (Feature) {
    Feature[Feature["MIN_VALUE"] = 0] = "MIN_VALUE";
    Feature[Feature["MAX_VALUE"] = 5] = "MAX_VALUE";
    Feature[Feature["EMOJI_PICKER_EXTENSION"] = 0] = "EMOJI_PICKER_EXTENSION";
    Feature[Feature["EMOJI_PICKER_SEARCH_EXTENSION"] = 1] = "EMOJI_PICKER_SEARCH_EXTENSION";
    Feature[Feature["EMOJI_PICKER_GIF_SUPPORT"] = 2] = "EMOJI_PICKER_GIF_SUPPORT";
    Feature[Feature["EMOJI_PICKER_JELLY_SUPPORT"] = 3] = "EMOJI_PICKER_JELLY_SUPPORT";
    Feature[Feature["EMOJI_PICKER_SEAL_SUPPORT"] = 4] = "EMOJI_PICKER_SEAL_SUPPORT";
    Feature[Feature["EMOJI_PICKER_VARIANT_GROUPING_SUPPORT"] = 5] = "EMOJI_PICKER_VARIANT_GROUPING_SUPPORT";
})(Feature || (Feature = {}));
const StatusSpec = { $: mojo.internal.Enum() };
var Status;
(function (Status) {
    Status[Status["MIN_VALUE"] = 0] = "MIN_VALUE";
    Status[Status["MAX_VALUE"] = 2] = "MAX_VALUE";
    Status[Status["kHttpOk"] = 0] = "kHttpOk";
    Status[Status["kNetError"] = 1] = "kNetError";
    Status[Status["kHttpError"] = 2] = "kHttpError";
})(Status || (Status = {}));
class PageHandlerFactoryPendingReceiver {
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'emoji_picker.mojom.PageHandlerFactory', scope);
    }
}
class PageHandlerFactoryRemote {
    constructor(handle) {
        this.proxy =
            new mojo.internal.interfaceSupport.InterfaceRemoteBase(PageHandlerFactoryPendingReceiver, handle);
        this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);
        this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
    }
    createPageHandler(handler) {
        this.proxy.sendMessage(0, PageHandlerFactory_CreatePageHandler_ParamsSpec.$, null, [
            handler
        ]);
    }
}
class PageHandlerFactory {
    static get $interfaceName() {
        return "emoji_picker.mojom.PageHandlerFactory";
    }
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote() {
        let remote = new PageHandlerFactoryRemote;
        remote.$.bindNewPipeAndPassReceiver().bindInBrowser();
        return remote;
    }
}
let PageHandlerPendingReceiver$1 = class PageHandlerPendingReceiver {
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'emoji_picker.mojom.PageHandler', scope);
    }
};
let PageHandlerRemote$1 = class PageHandlerRemote {
    constructor(handle) {
        this.proxy =
            new mojo.internal.interfaceSupport.InterfaceRemoteBase(PageHandlerPendingReceiver$1, handle);
        this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);
        this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
    }
    showUI() {
        this.proxy.sendMessage(0, PageHandler_ShowUI_ParamsSpec.$, null, []);
    }
    insertEmoji(emoji, isVariant, searchLength) {
        this.proxy.sendMessage(1, PageHandler_InsertEmoji_ParamsSpec.$, null, [
            emoji,
            isVariant,
            searchLength
        ]);
    }
    insertGif(gif) {
        this.proxy.sendMessage(2, PageHandler_InsertGif_ParamsSpec.$, null, [
            gif
        ]);
    }
    isIncognitoTextField() {
        return this.proxy.sendMessage(3, PageHandler_IsIncognitoTextField_ParamsSpec.$, PageHandler_IsIncognitoTextField_ResponseParamsSpec.$, []);
    }
    getFeatureList() {
        return this.proxy.sendMessage(4, PageHandler_GetFeatureList_ParamsSpec.$, PageHandler_GetFeatureList_ResponseParamsSpec.$, []);
    }
    getCategories() {
        return this.proxy.sendMessage(5, PageHandler_GetCategories_ParamsSpec.$, PageHandler_GetCategories_ResponseParamsSpec.$, []);
    }
    getFeaturedGifs(pos) {
        return this.proxy.sendMessage(6, PageHandler_GetFeaturedGifs_ParamsSpec.$, PageHandler_GetFeaturedGifs_ResponseParamsSpec.$, [
            pos
        ]);
    }
    searchGifs(query, pos) {
        return this.proxy.sendMessage(7, PageHandler_SearchGifs_ParamsSpec.$, PageHandler_SearchGifs_ResponseParamsSpec.$, [
            query,
            pos
        ]);
    }
    getGifsByIds(ids) {
        return this.proxy.sendMessage(8, PageHandler_GetGifsByIds_ParamsSpec.$, PageHandler_GetGifsByIds_ResponseParamsSpec.$, [
            ids
        ]);
    }
    onUiFullyLoaded() {
        this.proxy.sendMessage(9, PageHandler_OnUiFullyLoaded_ParamsSpec.$, null, []);
    }
};
const TenorGifResponseSpec = { $: {} };
const GifResponseSpec = { $: {} };
const GifUrlsSpec = { $: {} };
const PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
const PageHandler_ShowUI_ParamsSpec = { $: {} };
const PageHandler_InsertEmoji_ParamsSpec = { $: {} };
const PageHandler_InsertGif_ParamsSpec = { $: {} };
const PageHandler_IsIncognitoTextField_ParamsSpec = { $: {} };
const PageHandler_IsIncognitoTextField_ResponseParamsSpec = { $: {} };
const PageHandler_GetFeatureList_ParamsSpec = { $: {} };
const PageHandler_GetFeatureList_ResponseParamsSpec = { $: {} };
const PageHandler_GetCategories_ParamsSpec = { $: {} };
const PageHandler_GetCategories_ResponseParamsSpec = { $: {} };
const PageHandler_GetFeaturedGifs_ParamsSpec = { $: {} };
const PageHandler_GetFeaturedGifs_ResponseParamsSpec = { $: {} };
const PageHandler_SearchGifs_ParamsSpec = { $: {} };
const PageHandler_SearchGifs_ResponseParamsSpec = { $: {} };
const PageHandler_GetGifsByIds_ParamsSpec = { $: {} };
const PageHandler_GetGifsByIds_ResponseParamsSpec = { $: {} };
const PageHandler_OnUiFullyLoaded_ParamsSpec = { $: {} };
mojo.internal.Struct(TenorGifResponseSpec.$, 'TenorGifResponse', [
    mojo.internal.StructField('next', 0, 0, mojo.internal.String, null, false /* nullable */, 0),
    mojo.internal.StructField('results', 8, 0, mojo.internal.Array(GifResponseSpec.$, false), null, false /* nullable */, 0),
], [[0, 24],]);
mojo.internal.Struct(GifResponseSpec.$, 'GifResponse', [
    mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false /* nullable */, 0),
    mojo.internal.StructField('contentDescription', 8, 0, mojo.internal.String, null, false /* nullable */, 0),
    mojo.internal.StructField('url', 16, 0, GifUrlsSpec.$, null, false /* nullable */, 0),
    mojo.internal.StructField('previewSize', 24, 0, SizeSpec.$, null, false /* nullable */, 0),
], [[0, 40],]);
mojo.internal.Struct(GifUrlsSpec.$, 'GifUrls', [
    mojo.internal.StructField('full', 0, 0, UrlSpec.$, null, false /* nullable */, 0),
    mojo.internal.StructField('preview', 8, 0, UrlSpec.$, null, false /* nullable */, 0),
], [[0, 24],]);
mojo.internal.Struct(PageHandlerFactory_CreatePageHandler_ParamsSpec.$, 'PageHandlerFactory_CreatePageHandler_Params', [
    mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(PageHandlerPendingReceiver$1), null, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_ShowUI_ParamsSpec.$, 'PageHandler_ShowUI_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_InsertEmoji_ParamsSpec.$, 'PageHandler_InsertEmoji_Params', [
    mojo.internal.StructField('emoji', 0, 0, mojo.internal.String, null, false /* nullable */, 0),
    mojo.internal.StructField('isVariant', 8, 0, mojo.internal.Bool, false, false /* nullable */, 0),
    mojo.internal.StructField('searchLength', 10, 0, mojo.internal.Int16, 0, false /* nullable */, 0),
], [[0, 24],]);
mojo.internal.Struct(PageHandler_InsertGif_ParamsSpec.$, 'PageHandler_InsertGif_Params', [
    mojo.internal.StructField('gif', 0, 0, UrlSpec.$, null, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_IsIncognitoTextField_ParamsSpec.$, 'PageHandler_IsIncognitoTextField_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_IsIncognitoTextField_ResponseParamsSpec.$, 'PageHandler_IsIncognitoTextField_ResponseParams', [
    mojo.internal.StructField('incognito', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_GetFeatureList_ParamsSpec.$, 'PageHandler_GetFeatureList_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_GetFeatureList_ResponseParamsSpec.$, 'PageHandler_GetFeatureList_ResponseParams', [
    mojo.internal.StructField('featureList', 0, 0, mojo.internal.Array(FeatureSpec.$, false), null, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_GetCategories_ParamsSpec.$, 'PageHandler_GetCategories_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_GetCategories_ResponseParamsSpec.$, 'PageHandler_GetCategories_ResponseParams', [
    mojo.internal.StructField('status', 0, 0, StatusSpec.$, 0, false /* nullable */, 0),
    mojo.internal.StructField('gifCategories', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false /* nullable */, 0),
], [[0, 24],]);
mojo.internal.Struct(PageHandler_GetFeaturedGifs_ParamsSpec.$, 'PageHandler_GetFeaturedGifs_Params', [
    mojo.internal.StructField('pos', 0, 0, mojo.internal.String, null, true /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_GetFeaturedGifs_ResponseParamsSpec.$, 'PageHandler_GetFeaturedGifs_ResponseParams', [
    mojo.internal.StructField('status', 0, 0, StatusSpec.$, 0, false /* nullable */, 0),
    mojo.internal.StructField('featuredGifs', 8, 0, TenorGifResponseSpec.$, null, false /* nullable */, 0),
], [[0, 24],]);
mojo.internal.Struct(PageHandler_SearchGifs_ParamsSpec.$, 'PageHandler_SearchGifs_Params', [
    mojo.internal.StructField('query', 0, 0, mojo.internal.String, null, false /* nullable */, 0),
    mojo.internal.StructField('pos', 8, 0, mojo.internal.String, null, true /* nullable */, 0),
], [[0, 24],]);
mojo.internal.Struct(PageHandler_SearchGifs_ResponseParamsSpec.$, 'PageHandler_SearchGifs_ResponseParams', [
    mojo.internal.StructField('status', 0, 0, StatusSpec.$, 0, false /* nullable */, 0),
    mojo.internal.StructField('searchGifs', 8, 0, TenorGifResponseSpec.$, null, false /* nullable */, 0),
], [[0, 24],]);
mojo.internal.Struct(PageHandler_GetGifsByIds_ParamsSpec.$, 'PageHandler_GetGifsByIds_Params', [
    mojo.internal.StructField('ids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_GetGifsByIds_ResponseParamsSpec.$, 'PageHandler_GetGifsByIds_ResponseParams', [
    mojo.internal.StructField('status', 0, 0, StatusSpec.$, 0, false /* nullable */, 0),
    mojo.internal.StructField('selectedGifs', 8, 0, mojo.internal.Array(GifResponseSpec.$, false), null, false /* nullable */, 0),
], [[0, 24],]);
mojo.internal.Struct(PageHandler_OnUiFullyLoaded_ParamsSpec.$, 'PageHandler_OnUiFullyLoaded_Params', [], [[0, 8],]);

// chrome/browser/ui/webui/ash/emoji/new_window_proxy.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class NewWindowProxyPendingReceiver {
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'new_window_proxy.mojom.NewWindowProxy', scope);
    }
}
class NewWindowProxyRemote {
    constructor(handle) {
        this.proxy =
            new mojo.internal.interfaceSupport.InterfaceRemoteBase(NewWindowProxyPendingReceiver, handle);
        this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);
        this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
    }
    openUrl(url) {
        this.proxy.sendMessage(0, NewWindowProxy_OpenUrl_ParamsSpec.$, null, [
            url
        ]);
    }
}
class NewWindowProxy {
    static get $interfaceName() {
        return "new_window_proxy.mojom.NewWindowProxy";
    }
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote() {
        let remote = new NewWindowProxyRemote;
        remote.$.bindNewPipeAndPassReceiver().bindInBrowser();
        return remote;
    }
}
const NewWindowProxy_OpenUrl_ParamsSpec = { $: {} };
mojo.internal.Struct(NewWindowProxy_OpenUrl_ParamsSpec.$, 'NewWindowProxy_OpenUrl_Params', [
    mojo.internal.StructField('url', 0, 0, UrlSpec.$, null, false /* nullable */, 0),
], [[0, 16],]);

const HELP_CENTRE_URL = 'https://support.google.com/chrome?p=palette';
class EmojiPickerApiProxyImpl {
    static { this.instance = null; }
    constructor() {
        this.handler = new PageHandlerRemote$1();
        this.newWindowProxy = NewWindowProxy.getRemote();
        const factory = PageHandlerFactory.getRemote();
        factory.createPageHandler(this.handler.$.bindNewPipeAndPassReceiver());
    }
    /** @override */
    showUi() {
        this.handler.showUI();
    }
    /** @override */
    insertEmoji(emoji, isVariant, searchLength) {
        this.handler.insertEmoji(emoji, isVariant, searchLength);
    }
    /** @override */
    insertGif(gif) {
        this.handler.insertGif(gif);
    }
    /** @override */
    isIncognitoTextField() {
        return this.handler.isIncognitoTextField();
    }
    /** @override */
    getFeatureList() {
        return this.handler.getFeatureList();
    }
    /** @override */
    async getCategories() {
        const { gifCategories } = await this.handler.getCategories();
        return {
            gifCategories: gifCategories.map((category) => ({ name: category })),
        };
    }
    /** @override */
    getFeaturedGifs(pos) {
        if (!navigator.onLine) {
            return Promise.resolve({
                status: Status.kNetError,
                featuredGifs: {
                    next: '',
                    results: [],
                },
            });
        }
        return this.handler.getFeaturedGifs(pos || null);
    }
    /** @override */
    searchGifs(query, pos) {
        if (!navigator.onLine) {
            return Promise.resolve({
                status: Status.kNetError,
                searchGifs: {
                    next: '',
                    results: [],
                },
            });
        }
        // Avoid sending blank queries to the backend.
        if (query.trim().length === 0) {
            return Promise.resolve({
                status: Status.kHttpOk,
                searchGifs: {
                    next: '',
                    results: [],
                },
            });
        }
        return this.handler.searchGifs(query, pos || null);
    }
    /** @override */
    getGifsByIds(ids) {
        return this.handler.getGifsByIds(ids);
    }
    /** @override */
    openHelpCentreArticle() {
        this.newWindowProxy.openUrl({
            url: HELP_CENTRE_URL,
        });
    }
    onUiFullyLoaded() {
        this.handler.onUiFullyLoaded();
    }
    convertTenorGifsToEmoji(gifs) {
        return gifs.results.map(({ id, url, previewSize, contentDescription, }) => ({
            base: {
                visualContent: {
                    id,
                    url,
                    previewSize,
                },
                name: contentDescription,
            },
            alternates: [],
        }));
    }
    static getInstance() {
        if (EmojiPickerApiProxyImpl.instance === null) {
            EmojiPickerApiProxyImpl.instance = new EmojiPickerApiProxyImpl();
        }
        return EmojiPickerApiProxyImpl.instance;
    }
    static setInstance(instance) {
        EmojiPickerApiProxyImpl.instance = instance;
    }
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class EmojiGifNudgeOverlay extends PolymerElement {
    static get is() {
        return 'emoji-gif-nudge-overlay';
    }
    static get template() {
        return getTemplate$e();
    }
    static get properties() {
        return {
            closeOverlay: Object,
        };
    }
    onClickLink() {
        EmojiPickerApiProxyImpl.getInstance().openHelpCentreArticle();
    }
    onClickTooltip(event) {
        // If user clicks the tooltip (rather than the background of overlay),
        // we should not close the overlay.
        event.stopPropagation();
    }
    onClickOverlay() {
        this.closeOverlay();
    }
}
customElements.define(EmojiGifNudgeOverlay.is, EmojiGifNudgeOverlay);

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

const template$2 = html`
<custom-style>
  <style is="custom-style">
    html {

      /* Material Design color palette for Google products */

      --google-red-100-rgb: 244, 199, 195;  /* #f4c7c3 */
      --google-red-100: rgb(var(--google-red-100-rgb));
      --google-red-300-rgb: 230, 124, 115;  /* #e67c73 */
      --google-red-300: rgb(var(--google-red-300-rgb));
      --google-red-500-rgb: 219, 68, 55;  /* #db4437 */
      --google-red-500: rgb(var(--google-red-500-rgb));
      --google-red-700-rgb: 197, 57, 41;  /* #c53929 */
      --google-red-700: rgb(var(--google-red-700-rgb));

      --google-blue-100-rgb: 198, 218, 252;  /* #c6dafc */
      --google-blue-100: rgb(var(--google-blue-100-rgb));
      --google-blue-300-rgb: 123, 170, 247;  /* #7baaf7 */
      --google-blue-300: rgb(var(--google-blue-300-rgb));
      --google-blue-500-rgb: 66, 133, 244;  /* #4285f4 */
      --google-blue-500: rgb(var(--google-blue-500-rgb));
      --google-blue-700-rgb: 51, 103, 214;  /* #3367d6 */
      --google-blue-700: rgb(var(--google-blue-700-rgb));

      --google-green-100-rgb: 183, 225, 205;  /* #b7e1cd */
      --google-green-100: rgb(var(--google-green-100-rgb));
      --google-green-300-rgb: 87, 187, 138;  /* #57bb8a */
      --google-green-300: rgb(var(--google-green-300-rgb));
      --google-green-500-rgb: 15, 157, 88;  /* #0f9d58 */
      --google-green-500: rgb(var(--google-green-500-rgb));
      --google-green-700-rgb: 11, 128, 67;  /* #0b8043 */
      --google-green-700: rgb(var(--google-green-700-rgb));

      --google-yellow-100-rgb: 252, 232, 178;  /* #fce8b2 */
      --google-yellow-100: rgb(var(--google-yellow-100-rgb));
      --google-yellow-300-rgb: 247, 203, 77;  /* #f7cb4d */
      --google-yellow-300: rgb(var(--google-yellow-300-rgb));
      --google-yellow-500-rgb: 244, 180, 0;  /* #f4b400 */
      --google-yellow-500: rgb(var(--google-yellow-500-rgb));
      --google-yellow-700-rgb: 240, 147, 0;  /* #f09300 */
      --google-yellow-700: rgb(var(--google-yellow-700-rgb));

      --google-grey-100-rgb: 245, 245, 245;  /* #f5f5f5 */
      --google-grey-100: rgb(var(--google-grey-100-rgb));
      --google-grey-300-rgb: 224, 224, 224;  /* #e0e0e0 */
      --google-grey-300: rgb(var(--google-grey-300-rgb));
      --google-grey-500-rgb: 158, 158, 158;  /* #9e9e9e */
      --google-grey-500: rgb(var(--google-grey-500-rgb));
      --google-grey-700-rgb: 97, 97, 97;  /* #616161 */
      --google-grey-700: rgb(var(--google-grey-700-rgb));

      /* Material Design color palette from online spec document */

      --paper-red-50: #ffebee;
      --paper-red-100: #ffcdd2;
      --paper-red-200: #ef9a9a;
      --paper-red-300: #e57373;
      --paper-red-400: #ef5350;
      --paper-red-500: #f44336;
      --paper-red-600: #e53935;
      --paper-red-700: #d32f2f;
      --paper-red-800: #c62828;
      --paper-red-900: #b71c1c;
      --paper-red-a100: #ff8a80;
      --paper-red-a200: #ff5252;
      --paper-red-a400: #ff1744;
      --paper-red-a700: #d50000;

      --paper-light-blue-50: #e1f5fe;
      --paper-light-blue-100: #b3e5fc;
      --paper-light-blue-200: #81d4fa;
      --paper-light-blue-300: #4fc3f7;
      --paper-light-blue-400: #29b6f6;
      --paper-light-blue-500: #03a9f4;
      --paper-light-blue-600: #039be5;
      --paper-light-blue-700: #0288d1;
      --paper-light-blue-800: #0277bd;
      --paper-light-blue-900: #01579b;
      --paper-light-blue-a100: #80d8ff;
      --paper-light-blue-a200: #40c4ff;
      --paper-light-blue-a400: #00b0ff;
      --paper-light-blue-a700: #0091ea;

      --paper-yellow-50: #fffde7;
      --paper-yellow-100: #fff9c4;
      --paper-yellow-200: #fff59d;
      --paper-yellow-300: #fff176;
      --paper-yellow-400: #ffee58;
      --paper-yellow-500: #ffeb3b;
      --paper-yellow-600: #fdd835;
      --paper-yellow-700: #fbc02d;
      --paper-yellow-800: #f9a825;
      --paper-yellow-900: #f57f17;
      --paper-yellow-a100: #ffff8d;
      --paper-yellow-a200: #ffff00;
      --paper-yellow-a400: #ffea00;
      --paper-yellow-a700: #ffd600;

      --paper-orange-50: #fff3e0;
      --paper-orange-100: #ffe0b2;
      --paper-orange-200: #ffcc80;
      --paper-orange-300: #ffb74d;
      --paper-orange-400: #ffa726;
      --paper-orange-500: #ff9800;
      --paper-orange-600: #fb8c00;
      --paper-orange-700: #f57c00;
      --paper-orange-800: #ef6c00;
      --paper-orange-900: #e65100;
      --paper-orange-a100: #ffd180;
      --paper-orange-a200: #ffab40;
      --paper-orange-a400: #ff9100;
      --paper-orange-a700: #ff6500;

      --paper-grey-50: #fafafa;
      --paper-grey-100: #f5f5f5;
      --paper-grey-200: #eeeeee;
      --paper-grey-300: #e0e0e0;
      --paper-grey-400: #bdbdbd;
      --paper-grey-500: #9e9e9e;
      --paper-grey-600: #757575;
      --paper-grey-700: #616161;
      --paper-grey-800: #424242;
      --paper-grey-900: #212121;

      --paper-blue-grey-50: #eceff1;
      --paper-blue-grey-100: #cfd8dc;
      --paper-blue-grey-200: #b0bec5;
      --paper-blue-grey-300: #90a4ae;
      --paper-blue-grey-400: #78909c;
      --paper-blue-grey-500: #607d8b;
      --paper-blue-grey-600: #546e7a;
      --paper-blue-grey-700: #455a64;
      --paper-blue-grey-800: #37474f;
      --paper-blue-grey-900: #263238;

      /* opacity for dark text on a light background */
      --dark-divider-opacity: 0.12;
      --dark-disabled-opacity: 0.38; /* or hint text or icon */
      --dark-secondary-opacity: 0.54;
      --dark-primary-opacity: 0.87;

      /* opacity for light text on a dark background */
      --light-divider-opacity: 0.12;
      --light-disabled-opacity: 0.3; /* or hint text or icon */
      --light-secondary-opacity: 0.7;
      --light-primary-opacity: 1.0;

    }

  </style>
</custom-style>
`;
template$2.setAttribute('style', 'display: none;');
document.head.appendChild(template$2.content);

const template$1 = html `
<style>
html{--google-blue-50-rgb:232,240,254;--google-blue-50:rgb(var(--google-blue-50-rgb));--google-blue-100-rgb:210,227,252;--google-blue-100:rgb(var(--google-blue-100-rgb));--google-blue-200-rgb:174,203,250;--google-blue-200:rgb(var(--google-blue-200-rgb));--google-blue-300-rgb:138,180,248;--google-blue-300:rgb(var(--google-blue-300-rgb));--google-blue-400-rgb:102,157,246;--google-blue-400:rgb(var(--google-blue-400-rgb));--google-blue-500-rgb:66,133,244;--google-blue-500:rgb(var(--google-blue-500-rgb));--google-blue-600-rgb:26,115,232;--google-blue-600:rgb(var(--google-blue-600-rgb));--google-blue-700-rgb:25,103,210;--google-blue-700:rgb(var(--google-blue-700-rgb));--google-blue-800-rgb:24,90,188;--google-blue-800:rgb(var(--google-blue-800-rgb));--google-blue-900-rgb:23,78,166;--google-blue-900:rgb(var(--google-blue-900-rgb));--google-green-50-rgb:230,244,234;--google-green-50:rgb(var(--google-green-50-rgb));--google-green-200-rgb:168,218,181;--google-green-200:rgb(var(--google-green-200-rgb));--google-green-300-rgb:129,201,149;--google-green-300:rgb(var(--google-green-300-rgb));--google-green-400-rgb:91,185,116;--google-green-400:rgb(var(--google-green-400-rgb));--google-green-500-rgb:52,168,83;--google-green-500:rgb(var(--google-green-500-rgb));--google-green-600-rgb:30,142,62;--google-green-600:rgb(var(--google-green-600-rgb));--google-green-700-rgb:24,128,56;--google-green-700:rgb(var(--google-green-700-rgb));--google-green-800-rgb:19,115,51;--google-green-800:rgb(var(--google-green-800-rgb));--google-green-900-rgb:13,101,45;--google-green-900:rgb(var(--google-green-900-rgb));--google-grey-50-rgb:248,249,250;--google-grey-50:rgb(var(--google-grey-50-rgb));--google-grey-100-rgb:241,243,244;--google-grey-100:rgb(var(--google-grey-100-rgb));--google-grey-200-rgb:232,234,237;--google-grey-200:rgb(var(--google-grey-200-rgb));--google-grey-300-rgb:218,220,224;--google-grey-300:rgb(var(--google-grey-300-rgb));--google-grey-400-rgb:189,193,198;--google-grey-400:rgb(var(--google-grey-400-rgb));--google-grey-500-rgb:154,160,166;--google-grey-500:rgb(var(--google-grey-500-rgb));--google-grey-600-rgb:128,134,139;--google-grey-600:rgb(var(--google-grey-600-rgb));--google-grey-700-rgb:95,99,104;--google-grey-700:rgb(var(--google-grey-700-rgb));--google-grey-800-rgb:60,64,67;--google-grey-800:rgb(var(--google-grey-800-rgb));--google-grey-900-rgb:32,33,36;--google-grey-900:rgb(var(--google-grey-900-rgb));--google-grey-900-white-4-percent:#292a2d;--google-purple-200-rgb:215,174,251;--google-purple-200:rgb(var(--google-purple-200-rgb));--google-purple-900-rgb:104,29,168;--google-purple-900:rgb(var(--google-purple-900-rgb));--google-red-300-rgb:242,139,130;--google-red-300:rgb(var(--google-red-300-rgb));--google-red-500-rgb:234,67,53;--google-red-500:rgb(var(--google-red-500-rgb));--google-red-600-rgb:217,48,37;--google-red-600:rgb(var(--google-red-600-rgb));--google-yellow-50-rgb:254,247,224;--google-yellow-50:rgb(var(--google-yellow-50-rgb));--google-yellow-100-rgb:254,239,195;--google-yellow-100:rgb(var(--google-yellow-100-rgb));--google-yellow-200-rgb:253,226,147;--google-yellow-200:rgb(var(--google-yellow-200-rgb));--google-yellow-300-rgb:253,214,51;--google-yellow-300:rgb(var(--google-yellow-300-rgb));--google-yellow-400-rgb:252,201,52;--google-yellow-400:rgb(var(--google-yellow-400-rgb));--google-yellow-500-rgb:251,188,4;--google-yellow-500:rgb(var(--google-yellow-500-rgb));--cr-primary-text-color:var(--google-grey-900);--cr-secondary-text-color:var(--google-grey-700);--cr-card-background-color:white;--cr-shadow-color:var(--google-grey-800);--cr-shadow-key-color_:color-mix(in srgb, var(--cr-shadow-color) 30%, transparent);--cr-shadow-ambient-color_:color-mix(in srgb, var(--cr-shadow-color) 15%, transparent);--cr-elevation-1:var(--cr-shadow-key-color_) 0 1px 2px 0,var(--cr-shadow-ambient-color_) 0 1px 3px 1px;--cr-elevation-2:var(--cr-shadow-key-color_) 0 1px 2px 0,var(--cr-shadow-ambient-color_) 0 2px 6px 2px;--cr-elevation-3:var(--cr-shadow-key-color_) 0 1px 3px 0,var(--cr-shadow-ambient-color_) 0 4px 8px 3px;--cr-elevation-4:var(--cr-shadow-key-color_) 0 2px 3px 0,var(--cr-shadow-ambient-color_) 0 6px 10px 4px;--cr-elevation-5:var(--cr-shadow-key-color_) 0 4px 4px 0,var(--cr-shadow-ambient-color_) 0 8px 12px 6px;--cr-card-shadow:var(--cr-elevation-2);--cr-checked-color:var(--google-blue-600);--cr-focused-item-color:var(--google-grey-300);--cr-form-field-label-color:var(--google-grey-700);--cr-hairline-rgb:0,0,0;--cr-iph-anchor-highlight-color:rgba(var(--google-blue-600-rgb), 0.1);--cr-link-color:var(--google-blue-700);--cr-menu-background-color:white;--cr-menu-background-focus-color:var(--google-grey-400);--cr-menu-shadow:0 2px 6px var(--paper-grey-500);--cr-separator-color:rgba(0, 0, 0, .06);--cr-title-text-color:rgb(90, 90, 90);--cr-toolbar-background-color:white;--cr-hover-background-color:rgba(var(--google-grey-900-rgb), .1);--cr-active-background-color:rgba(var(--google-grey-900-rgb), .16);--cr-focus-outline-color:rgba(var(--google-blue-600-rgb), .4)}@media (prefers-color-scheme:dark){html{--cr-primary-text-color:var(--google-grey-200);--cr-secondary-text-color:var(--google-grey-500);--cr-card-background-color:var(--google-grey-900-white-4-percent);--cr-card-shadow-color-rgb:0,0,0;--cr-checked-color:var(--google-blue-300);--cr-focused-item-color:var(--google-grey-800);--cr-form-field-label-color:var(--dark-secondary-color);--cr-hairline-rgb:255,255,255;--cr-iph-anchor-highlight-color:rgba(var(--google-grey-100-rgb), 0.1);--cr-link-color:var(--google-blue-300);--cr-menu-background-color:var(--google-grey-900);--cr-menu-background-focus-color:var(--google-grey-700);--cr-menu-background-sheen:rgba(255, 255, 255, .06);--cr-menu-shadow:rgba(0, 0, 0, .3) 0 1px 2px 0,rgba(0, 0, 0, .15) 0 3px 6px 2px;--cr-separator-color:rgba(255, 255, 255, .1);--cr-title-text-color:var(--cr-primary-text-color);--cr-toolbar-background-color:var(--google-grey-900-white-4-percent);--cr-hover-background-color:rgba(255, 255, 255, .1);--cr-active-background-color:rgba(var(--google-grey-200-rgb), .16);--cr-focus-outline-color:rgba(var(--google-blue-300-rgb), .4)}}@media (forced-colors:active){html{--cr-focus-outline-hcm:2px solid transparent;--cr-border-hcm:2px solid transparent}}html{--cr-button-edge-spacing:12px;--cr-button-height:32px;--cr-controlled-by-spacing:24px;--cr-default-input-max-width:264px;--cr-icon-ripple-size:36px;--cr-icon-ripple-padding:8px;--cr-icon-size:20px;--cr-icon-button-margin-start:16px;--cr-icon-ripple-margin:calc(var(--cr-icon-ripple-padding) * -1);--cr-section-min-height:48px;--cr-section-two-line-min-height:64px;--cr-section-padding:20px;--cr-section-vertical-padding:12px;--cr-section-indent-width:40px;--cr-section-indent-padding:calc(
      var(--cr-section-padding) + var(--cr-section-indent-width));--cr-section-vertical-margin:21px;--cr-centered-card-max-width:680px;--cr-centered-card-width-percentage:0.96;--cr-hairline:1px solid rgba(var(--cr-hairline-rgb), .14);--cr-separator-height:1px;--cr-separator-line:var(--cr-separator-height) solid var(--cr-separator-color);--cr-toolbar-overlay-animation-duration:150ms;--cr-toolbar-height:56px;--cr-container-shadow-height:6px;--cr-container-shadow-margin:calc(-1 * var(--cr-container-shadow-height));--cr-container-shadow-max-opacity:1;--cr-card-border-radius:8px;--cr-disabled-opacity:.38;--cr-form-field-bottom-spacing:16px;--cr-form-field-label-font-size:.625rem;--cr-form-field-label-height:1em;--cr-form-field-label-line-height:1}html[chrome-refresh-2023]{--cr-fallback-color-outline:rgb(116, 119, 117);--cr-fallback-color-primary:rgb(11, 87, 208);--cr-fallback-color-on-primary:rgb(255, 255, 255);--cr-fallback-color-primary-container:rgb(211, 227, 253);--cr-fallback-color-on-primary-container:rgb(4, 30, 73);--cr-fallback-color-secondary-container:rgb(194, 231, 255);--cr-fallback-color-on-secondary-container:rgb(0, 29, 53);--cr-fallback-color-neutral-container:rgb(242, 242, 242);--cr-fallback-color-neutral-outline:rgb(199, 199, 199);--cr-fallback-color-surface:rgb(255, 255, 255);--cr-fallback-color-on-surface-rgb:31,31,31;--cr-fallback-color-on-surface:rgb(var(--cr-fallback-color-on-surface-rgb));--cr-fallback-color-surface-variant:rgb(225, 227, 225);--cr-fallback-color-on-surface-variant:rgb(68, 71, 70);--cr-fallback-color-on-surface-subtle:rgb(71, 71, 71);--cr-fallback-color-inverse-primary:rgb(168, 199, 250);--cr-fallback-color-inverse-surface:rgb(48, 48, 48);--cr-fallback-color-inverse-on-surface:rgb(242, 242, 242);--cr-fallback-color-tonal-container:rgb(211, 227, 253);--cr-fallback-color-on-tonal-container:rgb(4, 30, 73);--cr-fallback-color-tonal-outline:rgb(168, 199, 250);--cr-fallback-color-error:rgb(179, 38, 30);--cr-fallback-color-divider:rgb(211, 227, 253);--cr-fallback-color-state-hover-on-prominent_:rgba(253, 252, 251, .1);--cr-fallback-color-state-on-subtle-rgb_:31,31,31;--cr-fallback-color-state-hover-on-subtle_:rgba(
      var(--cr-fallback-color-state-on-subtle-rgb_), .06);--cr-fallback-color-state-ripple-neutral-on-subtle_:rgba(
      var(--cr-fallback-color-state-on-subtle-rgb_), .08);--cr-fallback-color-state-ripple-primary-rgb_:124,172,248;--cr-fallback-color-state-ripple-primary_:rgba(
      var(--cr-fallback-color-state-ripple-primary-rgb_), 0.32);--cr-fallback-color-base-container:rgba(105, 145, 214, .12);--cr-fallback-color-disabled-background:rgba(
      var(--cr-fallback-color-on-surface-rgb), .12);--cr-fallback-color-disabled-foreground:rgba(
      var(--cr-fallback-color-on-surface-rgb), var(--cr-disabled-opacity));--cr-hover-background-color:var(--color-sys-state-hover,
      rgba(var(--cr-fallback-color-on-surface-rgb), .08));--cr-hover-on-prominent-background-color:var(
      --color-sys-state-hover-on-prominent,
      var(--cr-fallback-color-state-hover-on-prominent_));--cr-hover-on-subtle-background-color:var(
      --color-sys-state-hover-on-subtle,
      var(--cr-fallback-color-state-hover-on-subtle_));--cr-active-background-color:var(--color-sys-state-pressed,
      rgba(var(--cr-fallback-color-on-surface-rgb), .12));--cr-active-on-primary-background-color:var(
      --color-sys-state-ripple-primary,
      var(--cr-fallback-color-state-ripple-primary_));--cr-active-neutral-on-subtle-background-color:var(
      --color-sys-state-ripple-neutral-on-subtle,
      var(--cr-fallback-color-state-ripple-neutral-on-subtle_));--cr-focus-outline-color:var(--color-sys-state-focus-ring,
      var(--cr-fallback-color-primary));--cr-primary-text-color:var(--color-primary-foreground,
      var(--cr-fallback-color-on-surface));--cr-secondary-text-color:var(--color-secondary-foreground,
      var(--cr-fallback-color-on-surface-variant));--cr-link-color:var(--color-link-foreground-default,
      var(--cr-fallback-color-primary));--cr-button-height:36px;--cr-shadow-color:var(--color-sys-shadow, rgb(0, 0, 0))}@media (prefers-color-scheme:dark){html[chrome-refresh-2023]{--cr-fallback-color-outline:rgb(142, 145, 143);--cr-fallback-color-primary:rgb(168, 199, 250);--cr-fallback-color-on-primary:rgb(6, 46, 111);--cr-fallback-color-primary-container:rgb(8, 66, 160);--cr-fallback-color-on-primary-container:rgb(211, 227, 253);--cr-fallback-color-secondary-container:rgb(0, 74, 119);--cr-fallback-color-on-secondary-container:rgb(194, 231, 255);--cr-fallback-color-neutral-container:rgb(42, 42, 42);--cr-fallback-color-neutral-outline:rgb(117, 117, 117);--cr-fallback-color-surface:rgb(26, 27, 30);--cr-fallback-color-on-surface-rgb:227,227,227;--cr-fallback-color-surface-variant:rgb(68, 71, 70);--cr-fallback-color-on-surface-variant:rgb(196, 199, 197);--cr-fallback-color-on-surface-subtle:rgb(199, 199, 199);--cr-fallback-color-inverse-primary:rgb(11, 87, 208);--cr-fallback-color-inverse-surface:rgb(227, 227, 227);--cr-fallback-color-inverse-on-surface:rgb(31, 31, 31);--cr-fallback-color-tonal-container:rgb(0, 74, 119);--cr-fallback-color-on-tonal-container:rgb(194, 231, 255);--cr-fallback-color-tonal-outline:rgb(0, 99, 155);--cr-fallback-color-error:rgb(242, 184, 181);--cr-fallback-color-divider:rgb(71, 71, 71);--cr-fallback-color-state-hover-on-prominent_:rgba(31, 31, 31, .06);--cr-fallback-color-state-on-subtle-rgb_:253,252,251;--cr-fallback-color-state-hover-on-subtle_:rgba(
        var(--cr-fallback-color-state-on-subtle-rgb_), .10);--cr-fallback-color-state-ripple-neutral-on-subtle_:rgba(
        var(--cr-fallback-color-state-on-subtle-rgb_), .16);--cr-fallback-color-state-ripple-primary-rgb_:76,141,246;--cr-fallback-color-base-container:rgba(40, 40, 40, 1)}}@media (forced-colors:active){html[chrome-refresh-2023]{--cr-fallback-color-disabled-background:Canvas;--cr-fallback-color-disabled-foreground:GrayText}}
</style>
`;
document.head.appendChild(template$1.content);

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/**

The `iron-icon` element displays an icon. By default an icon renders as a 24px
square.

Example using src:

    <iron-icon src="star.png"></iron-icon>

Example setting size to 32px x 32px:

    <iron-icon class="big" src="big_star.png"></iron-icon>

    <style is="custom-style">
      .big {
        --iron-icon-height: 32px;
        --iron-icon-width: 32px;
      }
    </style>

The iron elements include several sets of icons. To use the default set of
icons, import `iron-icons.js` and use the `icon` attribute to specify an icon:

    <script type="module">
      import "../iron-icons/iron-icons.js";
    </script>

    <iron-icon icon="menu"></iron-icon>

To use a different built-in set of icons, import the specific
`iron-icons/<iconset>-icons.js`, and specify the icon as `<iconset>:<icon>`.
For example, to use a communication icon, you would use:

    <script type="module">
      import "../iron-icons/communication-icons.js";
    </script>

    <iron-icon icon="communication:email"></iron-icon>

You can also create custom icon sets of bitmap or SVG icons.

Example of using an icon named `cherry` from a custom iconset with the ID
`fruit`:

    <iron-icon icon="fruit:cherry"></iron-icon>

See `<iron-iconset>` and `<iron-iconset-svg>` for more information about how to
create a custom iconset.

See the `iron-icons` demo to see the icons available in the various iconsets.

### Styling

The following custom properties are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--iron-icon` | Mixin applied to the icon | {}
`--iron-icon-width` | Width of the icon | `24px`
`--iron-icon-height` | Height of the icon | `24px`
`--iron-icon-fill-color` | Fill color of the svg icon | `currentcolor`
`--iron-icon-stroke-color` | Stroke color of the svg icon | none

@group Iron Elements
@element iron-icon
@demo demo/index.html
@hero hero.svg
@homepage polymer.github.io
*/
Polymer({
  _template: html`
    <style>
      :host {
        align-items: center;
        display: inline-flex;
        justify-content: center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,

  is: 'iron-icon',

  properties: {

    /**
     * The name of the icon to use. The name should be of the form:
     * `iconset_name:icon_name`.
     */
    icon: {type: String},

    /**
     * The name of the theme to used, if one is specified by the
     * iconset.
     */
    theme: {type: String},

    /**
     * If using iron-icon without an iconset, you can set the src to be
     * the URL of an individual icon image file. Note that this will take
     * precedence over a given icon attribute.
     */
    src: {type: String},

    /**
     * @type {!IronMeta}
     */
    _meta: {value: Base.create('iron-meta', {type: 'iconset'})}

  },

  observers: [
    '_updateIcon(_meta, isAttached)',
    '_updateIcon(theme, isAttached)',
    '_srcChanged(src, isAttached)',
    '_iconChanged(icon, isAttached)'
  ],

  _DEFAULT_ICONSET: 'icons',

  _iconChanged: function(icon) {
    var parts = (icon || '').split(':');
    this._iconName = parts.pop();
    this._iconsetName = parts.pop() || this._DEFAULT_ICONSET;
    this._updateIcon();
  },

  _srcChanged: function(src) {
    this._updateIcon();
  },

  _usesIconset: function() {
    return this.icon || !this.src;
  },

  /** @suppress {visibility} */
  _updateIcon: function() {
    if (this._usesIconset()) {
      if (this._img && this._img.parentNode) {
        dom(this.root).removeChild(this._img);
      }
      if (this._iconName === '') {
        if (this._iconset) {
          this._iconset.removeIcon(this);
        }
      } else if (this._iconsetName && this._meta) {
        this._iconset = /** @type {?Polymer.Iconset} */ (
            this._meta.byKey(this._iconsetName));
        if (this._iconset) {
          this._iconset.applyIcon(this, this._iconName, this.theme);
          this.unlisten(window, 'iron-iconset-added', '_updateIcon');
        } else {
          this.listen(window, 'iron-iconset-added', '_updateIcon');
        }
      }
    } else {
      if (this._iconset) {
        this._iconset.removeIcon(this);
      }
      if (!this._img) {
        this._img = document.createElement('img');
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.draggable = false;
      }
      this._img.src = this.src;
      dom(this.root).appendChild(this._img);
    }
  }
});

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/**
 * Chrome uses an older version of DOM Level 3 Keyboard Events
 *
 * Most keys are labeled as text, but some are Unicode codepoints.
 * Values taken from:
 * http://www.w3.org/TR/2007/WD-DOM-Level-3-Events-20071221/keyset.html#KeySet-Set
 */
var KEY_IDENTIFIER = {
  'U+0008': 'backspace',
  'U+0009': 'tab',
  'U+001B': 'esc',
  'U+0020': 'space',
  'U+007F': 'del'
};

/**
 * Special table for KeyboardEvent.keyCode.
 * KeyboardEvent.keyIdentifier is better, and KeyBoardEvent.key is even better
 * than that.
 *
 * Values from:
 * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent.keyCode#Value_of_keyCode
 */
var KEY_CODE = {
  8: 'backspace',
  9: 'tab',
  13: 'enter',
  27: 'esc',
  33: 'pageup',
  34: 'pagedown',
  35: 'end',
  36: 'home',
  32: 'space',
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  46: 'del',
  106: '*'
};

/**
 * MODIFIER_KEYS maps the short name for modifier keys used in a key
 * combo string to the property name that references those same keys
 * in a KeyboardEvent instance.
 */
var MODIFIER_KEYS = {
  'shift': 'shiftKey',
  'ctrl': 'ctrlKey',
  'alt': 'altKey',
  'meta': 'metaKey'
};

/**
 * KeyboardEvent.key is mostly represented by printable character made by
 * the keyboard, with unprintable keys labeled nicely.
 *
 * However, on OS X, Alt+char can make a Unicode character that follows an
 * Apple-specific mapping. In this case, we fall back to .keyCode.
 */
var KEY_CHAR = /[a-z0-9*]/;

/**
 * Matches a keyIdentifier string.
 */
var IDENT_CHAR = /U\+/;

/**
 * Matches arrow keys in Gecko 27.0+
 */
var ARROW_KEY = /^arrow/;

/**
 * Matches space keys everywhere (notably including IE10's exceptional name
 * `spacebar`).
 */
var SPACE_KEY = /^space(bar)?/;

/**
 * Matches ESC key.
 *
 * Value from: http://w3c.github.io/uievents-key/#key-Escape
 */
var ESC_KEY = /^escape$/;

/**
 * Transforms the key.
 * @param {string} key The KeyBoardEvent.key
 * @param {Boolean} [noSpecialChars] Limits the transformation to
 * alpha-numeric characters.
 */
function transformKey(key, noSpecialChars) {
  var validKey = '';
  if (key) {
    var lKey = key.toLowerCase();
    if (lKey === ' ' || SPACE_KEY.test(lKey)) {
      validKey = 'space';
    } else if (ESC_KEY.test(lKey)) {
      validKey = 'esc';
    } else if (lKey.length == 1) {
      if (!noSpecialChars || KEY_CHAR.test(lKey)) {
        validKey = lKey;
      }
    } else if (ARROW_KEY.test(lKey)) {
      validKey = lKey.replace('arrow', '');
    } else if (lKey == 'multiply') {
      // numpad '*' can map to Multiply on IE/Windows
      validKey = '*';
    } else {
      validKey = lKey;
    }
  }
  return validKey;
}

function transformKeyIdentifier(keyIdent) {
  var validKey = '';
  if (keyIdent) {
    if (keyIdent in KEY_IDENTIFIER) {
      validKey = KEY_IDENTIFIER[keyIdent];
    } else if (IDENT_CHAR.test(keyIdent)) {
      keyIdent = parseInt(keyIdent.replace('U+', '0x'), 16);
      validKey = String.fromCharCode(keyIdent).toLowerCase();
    } else {
      validKey = keyIdent.toLowerCase();
    }
  }
  return validKey;
}

function transformKeyCode(keyCode) {
  var validKey = '';
  if (Number(keyCode)) {
    if (keyCode >= 65 && keyCode <= 90) {
      // ascii a-z
      // lowercase is 32 offset from uppercase
      validKey = String.fromCharCode(32 + keyCode);
    } else if (keyCode >= 112 && keyCode <= 123) {
      // function keys f1-f12
      validKey = 'f' + (keyCode - 112 + 1);
    } else if (keyCode >= 48 && keyCode <= 57) {
      // top 0-9 keys
      validKey = String(keyCode - 48);
    } else if (keyCode >= 96 && keyCode <= 105) {
      // num pad 0-9
      validKey = String(keyCode - 96);
    } else {
      validKey = KEY_CODE[keyCode];
    }
  }
  return validKey;
}

/**
 * Calculates the normalized key for a KeyboardEvent.
 * @param {KeyboardEvent} keyEvent
 * @param {Boolean} [noSpecialChars] Set to true to limit keyEvent.key
 * transformation to alpha-numeric chars. This is useful with key
 * combinations like shift + 2, which on FF for MacOS produces
 * keyEvent.key = @
 * To get 2 returned, set noSpecialChars = true
 * To get @ returned, set noSpecialChars = false
 */
function normalizedKeyForEvent(keyEvent, noSpecialChars) {
  // Fall back from .key, to .detail.key for artifical keyboard events,
  // and then to deprecated .keyIdentifier and .keyCode.
  if (keyEvent.key) {
    return transformKey(keyEvent.key, noSpecialChars);
  }
  if (keyEvent.detail && keyEvent.detail.key) {
    return transformKey(keyEvent.detail.key, noSpecialChars);
  }
  return transformKeyIdentifier(keyEvent.keyIdentifier) ||
      transformKeyCode(keyEvent.keyCode) || '';
}

function keyComboMatchesEvent(keyCombo, event) {
  // For combos with modifiers we support only alpha-numeric keys
  var keyEvent = normalizedKeyForEvent(event, keyCombo.hasModifiers);
  return keyEvent === keyCombo.key &&
      (!keyCombo.hasModifiers ||
       (!!event.shiftKey === !!keyCombo.shiftKey &&
        !!event.ctrlKey === !!keyCombo.ctrlKey &&
        !!event.altKey === !!keyCombo.altKey &&
        !!event.metaKey === !!keyCombo.metaKey));
}

function parseKeyComboString(keyComboString) {
  if (keyComboString.length === 1) {
    return {combo: keyComboString, key: keyComboString, event: 'keydown'};
  }
  return keyComboString.split('+')
      .reduce(function(parsedKeyCombo, keyComboPart) {
        var eventParts = keyComboPart.split(':');
        var keyName = eventParts[0];
        var event = eventParts[1];

        if (keyName in MODIFIER_KEYS) {
          parsedKeyCombo[MODIFIER_KEYS[keyName]] = true;
          parsedKeyCombo.hasModifiers = true;
        } else {
          parsedKeyCombo.key = keyName;
          parsedKeyCombo.event = event || 'keydown';
        }

        return parsedKeyCombo;
      }, {combo: keyComboString.split(':').shift()});
}

function parseEventString(eventString) {
  return eventString.trim().split(' ').map(function(keyComboString) {
    return parseKeyComboString(keyComboString);
  });
}

/**
 * `Polymer.IronA11yKeysBehavior` provides a normalized interface for processing
 * keyboard commands that pertain to [WAI-ARIA best
 * practices](http://www.w3.org/TR/wai-aria-practices/#kbd_general_binding). The
 * element takes care of browser differences with respect to Keyboard events and
 * uses an expressive syntax to filter key presses.
 *
 * Use the `keyBindings` prototype property to express what combination of keys
 * will trigger the callback. A key binding has the format
 * `"KEY+MODIFIER:EVENT": "callback"` (`"KEY": "callback"` or
 * `"KEY:EVENT": "callback"` are valid as well). Some examples:
 *
 *      keyBindings: {
 *        'space': '_onKeydown', // same as 'space:keydown'
 *        'shift+tab': '_onKeydown',
 *        'enter:keypress': '_onKeypress',
 *        'esc:keyup': '_onKeyup'
 *      }
 *
 * The callback will receive with an event containing the following information
 * in `event.detail`:
 *
 *      _onKeydown: function(event) {
 *        console.log(event.detail.combo); // KEY+MODIFIER, e.g. "shift+tab"
 *        console.log(event.detail.key); // KEY only, e.g. "tab"
 *        console.log(event.detail.event); // EVENT, e.g. "keydown"
 *        console.log(event.detail.keyboardEvent); // the original KeyboardEvent
 *      }
 *
 * Use the `keyEventTarget` attribute to set up event handlers on a specific
 * node.
 *
 * See the [demo source
 * code](https://github.com/PolymerElements/iron-a11y-keys-behavior/blob/master/demo/x-key-aware.html)
 * for an example.
 *
 * @demo demo/index.html
 * @polymerBehavior
 */
const IronA11yKeysBehavior = {
  properties: {
    /**
     * The EventTarget that will be firing relevant KeyboardEvents. Set it to
     * `null` to disable the listeners.
     * @type {?EventTarget}
     */
    keyEventTarget: {
      type: Object,
      value: function() {
        return this;
      }
    },

    /**
     * If true, this property will cause the implementing element to
     * automatically stop propagation on any handled KeyboardEvents.
     */
    stopKeyboardEventPropagation: {type: Boolean, value: false},

    _boundKeyHandlers: {
      type: Array,
      value: function() {
        return [];
      }
    },

    // We use this due to a limitation in IE10 where instances will have
    // own properties of everything on the "prototype".
    _imperativeKeyBindings: {
      type: Object,
      value: function() {
        return {};
      }
    }
  },

  observers: ['_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)'],


  /**
   * To be used to express what combination of keys  will trigger the relative
   * callback. e.g. `keyBindings: { 'esc': '_onEscPressed'}`
   * @type {!Object}
   */
  keyBindings: {},

  registered: function() {
    this._prepKeyBindings();
  },

  attached: function() {
    this._listenKeyEventListeners();
  },

  detached: function() {
    this._unlistenKeyEventListeners();
  },

  /**
   * Can be used to imperatively add a key binding to the implementing
   * element. This is the imperative equivalent of declaring a keybinding
   * in the `keyBindings` prototype property.
   *
   * @param {string} eventString
   * @param {string} handlerName
   */
  addOwnKeyBinding: function(eventString, handlerName) {
    this._imperativeKeyBindings[eventString] = handlerName;
    this._prepKeyBindings();
    this._resetKeyEventListeners();
  },

  /**
   * When called, will remove all imperatively-added key bindings.
   */
  removeOwnKeyBindings: function() {
    this._imperativeKeyBindings = {};
    this._prepKeyBindings();
    this._resetKeyEventListeners();
  },

  /**
   * Returns true if a keyboard event matches `eventString`.
   *
   * @param {KeyboardEvent} event
   * @param {string} eventString
   * @return {boolean}
   */
  keyboardEventMatchesKeys: function(event, eventString) {
    var keyCombos = parseEventString(eventString);
    for (var i = 0; i < keyCombos.length; ++i) {
      if (keyComboMatchesEvent(keyCombos[i], event)) {
        return true;
      }
    }
    return false;
  },

  _collectKeyBindings: function() {
    var keyBindings = this.behaviors.map(function(behavior) {
      return behavior.keyBindings;
    });

    if (keyBindings.indexOf(this.keyBindings) === -1) {
      keyBindings.push(this.keyBindings);
    }

    return keyBindings;
  },

  _prepKeyBindings: function() {
    this._keyBindings = {};

    this._collectKeyBindings().forEach(function(keyBindings) {
      for (var eventString in keyBindings) {
        this._addKeyBinding(eventString, keyBindings[eventString]);
      }
    }, this);

    for (var eventString in this._imperativeKeyBindings) {
      this._addKeyBinding(
          eventString, this._imperativeKeyBindings[eventString]);
    }

    // Give precedence to combos with modifiers to be checked first.
    for (var eventName in this._keyBindings) {
      this._keyBindings[eventName].sort(function(kb1, kb2) {
        var b1 = kb1[0].hasModifiers;
        var b2 = kb2[0].hasModifiers;
        return (b1 === b2) ? 0 : b1 ? -1 : 1;
      });
    }
  },

  _addKeyBinding: function(eventString, handlerName) {
    parseEventString(eventString).forEach(function(keyCombo) {
      this._keyBindings[keyCombo.event] =
          this._keyBindings[keyCombo.event] || [];

      this._keyBindings[keyCombo.event].push([keyCombo, handlerName]);
    }, this);
  },

  _resetKeyEventListeners: function() {
    this._unlistenKeyEventListeners();

    if (this.isAttached) {
      this._listenKeyEventListeners();
    }
  },

  _listenKeyEventListeners: function() {
    if (!this.keyEventTarget) {
      return;
    }
    Object.keys(this._keyBindings).forEach(function(eventName) {
      var keyBindings = this._keyBindings[eventName];
      var boundKeyHandler = this._onKeyBindingEvent.bind(this, keyBindings);

      this._boundKeyHandlers.push(
          [this.keyEventTarget, eventName, boundKeyHandler]);

      this.keyEventTarget.addEventListener(eventName, boundKeyHandler);
    }, this);
  },

  _unlistenKeyEventListeners: function() {
    var keyHandlerTuple;
    var keyEventTarget;
    var eventName;
    var boundKeyHandler;

    while (this._boundKeyHandlers.length) {
      // My kingdom for block-scope binding and destructuring assignment..
      keyHandlerTuple = this._boundKeyHandlers.pop();
      keyEventTarget = keyHandlerTuple[0];
      eventName = keyHandlerTuple[1];
      boundKeyHandler = keyHandlerTuple[2];

      keyEventTarget.removeEventListener(eventName, boundKeyHandler);
    }
  },

  _onKeyBindingEvent: function(keyBindings, event) {
    if (this.stopKeyboardEventPropagation) {
      event.stopPropagation();
    }

    // if event has been already prevented, don't do anything
    if (event.defaultPrevented) {
      return;
    }

    for (var i = 0; i < keyBindings.length; i++) {
      var keyCombo = keyBindings[i][0];
      var handlerName = keyBindings[i][1];
      if (keyComboMatchesEvent(keyCombo, event)) {
        this._triggerKeyHandler(keyCombo, handlerName, event);
        // exit the loop if eventDefault was prevented
        if (event.defaultPrevented) {
          return;
        }
      }
    }
  },

  _triggerKeyHandler: function(keyCombo, handlerName, keyboardEvent) {
    var detail = Object.create(keyCombo);
    detail.keyboardEvent = keyboardEvent;
    var event =
        new CustomEvent(keyCombo.event, {detail: detail, cancelable: true});
    this[handlerName].call(this, event);
    if (event.defaultPrevented) {
      keyboardEvent.preventDefault();
    }
  }
};

var MAX_RADIUS_PX = 300;
var MIN_DURATION_MS = 800;

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {number} The distance between (x1, y1) and (x2, y2).
 */
var distance = function(x1, y1, x2, y2) {
  var xDelta = x1 - x2;
  var yDelta = y1 - y2;
  return Math.sqrt(xDelta * xDelta + yDelta * yDelta);
};

Polymer({
  _template: html`
    <style>
      :host {
        bottom: 0;
        display: block;
        left: 0;
        overflow: hidden;
        pointer-events: none;
        position: absolute;
        right: 0;
        top: 0;
        /* For rounded corners: http://jsbin.com/temexa/4. */
        transform: translate3d(0, 0, 0);
      }

      .ripple {
        background-color: currentcolor;
        left: 0;
        opacity: var(--paper-ripple-opacity, 0.25);
        pointer-events: none;
        position: absolute;
        will-change: height, transform, width;
      }

      .ripple,
      :host(.circle) {
        border-radius: 50%;
      }
    </style>
`,

  is: 'paper-ripple',
  behaviors: [IronA11yKeysBehavior],

  properties: {
    center: {type: Boolean, value: false},
    holdDown: {type: Boolean, value: false, observer: '_holdDownChanged'},
    recenters: {type: Boolean, value: false},
    noink: {type: Boolean, value: false},
  },

  keyBindings: {
    'enter:keydown': '_onEnterKeydown',
    'space:keydown': '_onSpaceKeydown',
    'space:keyup': '_onSpaceKeyup',
  },

  /** @override */
  created: function() {
    /** @type {Array<!Element>} */
    this.ripples = [];
  },

  /** @override */
  attached: function() {
    this.keyEventTarget = this.parentNode.nodeType == 11 ?
        dom(this).getOwnerRoot().host : this.parentNode;
    this.keyEventTarget = /** @type {!EventTarget} */ (this.keyEventTarget);
    this.listen(this.keyEventTarget, 'up', 'uiUpAction');
    this.listen(this.keyEventTarget, 'down', 'uiDownAction');
  },

  /** @override */
  detached: function() {
    this.unlisten(this.keyEventTarget, 'up', 'uiUpAction');
    this.unlisten(this.keyEventTarget, 'down', 'uiDownAction');
    this.keyEventTarget = null;
  },

  simulatedRipple: function() {
    this.downAction();
    // Using a 1ms delay ensures a macro-task.
    this.async(function() { this.upAction(); }.bind(this), 1);
  },

  /** @param {Event=} e */
  uiDownAction: function(e) {
    if (!this.noink)
      this.downAction(e);
  },

  /** @param {Event=} e */
  downAction: function(e) {
    if (this.ripples.length && this.holdDown)
      return;
    // TODO(dbeam): some things (i.e. paper-icon-button-light) dynamically
    // create ripples on 'up', Ripples register an event listener on their
    // parent (or shadow DOM host) when attached().  This sometimes causes
    // duplicate events to fire on us.
    this.debounce('show ripple', function() { this.__showRipple(e); }, 1);
  },

  clear: function() {
    this.__hideRipple();
    this.holdDown = false;
  },

  showAndHoldDown: function() {
    this.ripples.forEach(ripple => {
      ripple.remove();
    });
    this.ripples = [];
    this.holdDown = true;
  },

  /**
   * @param {Event=} e
   * @private
   * @suppress {checkTypes}
   */
  __showRipple: function(e) {
    var rect = this.getBoundingClientRect();

    var roundedCenterX = function() { return Math.round(rect.width / 2); };
    var roundedCenterY = function() { return Math.round(rect.height / 2); };

    var centered = !e || this.center;
    if (centered) {
      var x = roundedCenterX();
      var y = roundedCenterY();
    } else {
      var sourceEvent = e.detail.sourceEvent;
      var x = Math.round(sourceEvent.clientX - rect.left);
      var y = Math.round(sourceEvent.clientY - rect.top);
    }

    var corners = [
      {x: 0, y: 0},
      {x: rect.width, y: 0},
      {x: 0, y: rect.height},
      {x: rect.width, y: rect.height},
    ];

    var cornerDistances = corners.map(function(corner) {
      return Math.round(distance(x, y, corner.x, corner.y));
    });

    var radius = Math.min(MAX_RADIUS_PX, Math.max.apply(Math, cornerDistances));

    var startTranslate = (x - radius) + 'px, ' + (y - radius) + 'px';
    if (this.recenters && !centered) {
      var endTranslate = (roundedCenterX() - radius) + 'px, ' +
                         (roundedCenterY() - radius) + 'px';
    } else {
      var endTranslate = startTranslate;
    }

    var ripple = document.createElement('div');
    ripple.classList.add('ripple');
    ripple.style.height = ripple.style.width = (2 * radius) + 'px';

    this.ripples.push(ripple);
    this.shadowRoot.appendChild(ripple);

    ripple.animate({
      // TODO(dbeam): scale to 90% of radius at .75 offset?
      transform: ['translate(' + startTranslate + ') scale(0)',
                  'translate(' + endTranslate + ') scale(1)'],
    }, {
      duration: Math.max(MIN_DURATION_MS, Math.log(radius) * radius) || 0,
      easing: 'cubic-bezier(.2, .9, .1, .9)',
      fill: 'forwards',
    });
  },

  /** @param {Event=} e */
  uiUpAction: function(e) {
    if (!this.noink)
      this.upAction();
  },

  /** @param {Event=} e */
  upAction: function(e) {
    if (!this.holdDown)
      this.debounce('hide ripple', function() { this.__hideRipple(); }, 1);
  },

  /**
   * @private
   * @suppress {checkTypes}
   */
  __hideRipple: function() {
    Promise.all(this.ripples.map(function(ripple) {
      return new Promise(function(resolve) {
        var removeRipple = function() {
          ripple.remove();
          resolve();
        };
        var opacity = getComputedStyle(ripple).opacity;
        if (!opacity.length) {
          removeRipple();
        } else {
          var animation = ripple.animate({
            opacity: [opacity, 0],
          }, {
            duration: 150,
            fill: 'forwards',
          });
          animation.addEventListener('finish', removeRipple);
          animation.addEventListener('cancel', removeRipple);
        }
      });
    })).then(function() { this.fire('transitionend'); }.bind(this));
    this.ripples = [];
  },

  /** @protected */
  _onEnterKeydown: function() {
    this.uiDownAction();
    this.async(this.uiUpAction, 1);
  },

  /** @protected */
  _onSpaceKeydown: function() {
    this.uiDownAction();
  },

  /** @protected */
  _onSpaceKeyup: function() {
    this.uiUpAction();
  },

  /** @protected */
  _holdDownChanged: function(newHoldDown, oldHoldDown) {
    if (oldHoldDown === undefined)
      return;
    if (newHoldDown)
      this.downAction();
    else
      this.upAction();
  },
});

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/**
 * @demo demo/index.html
 * @polymerBehavior IronButtonState
 */
const IronButtonStateImpl = {

  properties: {

    /**
     * If true, the user is currently holding down the button.
     */
    pressed: {
      type: Boolean,
      readOnly: true,
      value: false,
      reflectToAttribute: true,
      observer: '_pressedChanged'
    },

    /**
     * If true, the button toggles the active state with each tap or press
     * of the spacebar.
     */
    toggles: {type: Boolean, value: false, reflectToAttribute: true},

    /**
     * If true, the button is a toggle and is currently in the active state.
     */
    active:
        {type: Boolean, value: false, notify: true, reflectToAttribute: true},

    /**
     * True if the element is currently being pressed by a "pointer," which
     * is loosely defined as mouse or touch input (but specifically excluding
     * keyboard input).
     */
    pointerDown: {type: Boolean, readOnly: true, value: false},

    /**
     * True if the input device that caused the element to receive focus
     * was a keyboard.
     */
    receivedFocusFromKeyboard: {type: Boolean, readOnly: true},

    /**
     * The aria attribute to be set if the button is a toggle and in the
     * active state.
     */
    ariaActiveAttribute: {
      type: String,
      value: 'aria-pressed',
      observer: '_ariaActiveAttributeChanged'
    }
  },

  listeners: {down: '_downHandler', up: '_upHandler', tap: '_tapHandler'},

  observers:
      ['_focusChanged(focused)', '_activeChanged(active, ariaActiveAttribute)'],

  /**
   * @type {!Object}
   */
  keyBindings: {
    'enter:keydown': '_asyncClick',
    'space:keydown': '_spaceKeyDownHandler',
    'space:keyup': '_spaceKeyUpHandler',
  },

  _mouseEventRe: /^mouse/,

  _tapHandler: function() {
    if (this.toggles) {
      // a tap is needed to toggle the active state
      this._userActivate(!this.active);
    } else {
      this.active = false;
    }
  },

  _focusChanged: function(focused) {
    this._detectKeyboardFocus(focused);

    if (!focused) {
      this._setPressed(false);
    }
  },

  _detectKeyboardFocus: function(focused) {
    this._setReceivedFocusFromKeyboard(!this.pointerDown && focused);
  },

  // to emulate native checkbox, (de-)activations from a user interaction fire
  // 'change' events
  _userActivate: function(active) {
    if (this.active !== active) {
      this.active = active;
      this.fire('change');
    }
  },

  _downHandler: function(event) {
    this._setPointerDown(true);
    this._setPressed(true);
    this._setReceivedFocusFromKeyboard(false);
  },

  _upHandler: function() {
    this._setPointerDown(false);
    this._setPressed(false);
  },

  /**
   * @param {!KeyboardEvent} event .
   */
  _spaceKeyDownHandler: function(event) {
    var keyboardEvent = event.detail.keyboardEvent;
    var target = dom(keyboardEvent).localTarget;

    // Ignore the event if this is coming from a focused light child, since that
    // element will deal with it.
    if (this.isLightDescendant(/** @type {Node} */ (target)))
      return;

    keyboardEvent.preventDefault();
    keyboardEvent.stopImmediatePropagation();
    this._setPressed(true);
  },

  /**
   * @param {!KeyboardEvent} event .
   */
  _spaceKeyUpHandler: function(event) {
    var keyboardEvent = event.detail.keyboardEvent;
    var target = dom(keyboardEvent).localTarget;

    // Ignore the event if this is coming from a focused light child, since that
    // element will deal with it.
    if (this.isLightDescendant(/** @type {Node} */ (target)))
      return;

    if (this.pressed) {
      this._asyncClick();
    }
    this._setPressed(false);
  },

  // trigger click asynchronously, the asynchrony is useful to allow one
  // event handler to unwind before triggering another event
  _asyncClick: function() {
    this.async(function() {
      this.click();
    }, 1);
  },

  // any of these changes are considered a change to button state

  _pressedChanged: function(pressed) {
    this._changedButtonState();
  },

  _ariaActiveAttributeChanged: function(value, oldValue) {
    if (oldValue && oldValue != value && this.hasAttribute(oldValue)) {
      this.removeAttribute(oldValue);
    }
  },

  _activeChanged: function(active, ariaActiveAttribute) {
    if (this.toggles) {
      this.setAttribute(this.ariaActiveAttribute, active ? 'true' : 'false');
    } else {
      this.removeAttribute(this.ariaActiveAttribute);
    }
    this._changedButtonState();
  },

  _controlStateChanged: function() {
    if (this.disabled) {
      this._setPressed(false);
    } else {
      this._changedButtonState();
    }
  },

  // provide hook for follow-on behaviors to react to button-state

  _changedButtonState: function() {
    if (this._buttonStateChanged) {
      this._buttonStateChanged();  // abstract
    }
  }

};

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/**
 * `PaperRippleBehavior` dynamically implements a ripple when the element has
 * focus via pointer or keyboard.
 *
 * NOTE: This behavior is intended to be used in conjunction with and after
 * `IronButtonState` and `IronControlState`.
 *
 * @polymerBehavior PaperRippleBehavior
 */
const PaperRippleBehavior = {
  properties: {
    /**
     * If true, the element will not produce a ripple effect when interacted
     * with via the pointer.
     */
    noink: {type: Boolean, observer: '_noinkChanged'},

    /**
     * @type {Element|undefined}
     */
    _rippleContainer: {
      type: Object,
    }
  },

  /**
   * Ensures a `<paper-ripple>` element is available when the element is
   * focused.
   */
  _buttonStateChanged: function() {
    if (this.focused) {
      this.ensureRipple();
    }
  },

  /**
   * In addition to the functionality provided in `IronButtonState`, ensures
   * a ripple effect is created when the element is in a `pressed` state.
   */
  _downHandler: function(event) {
    IronButtonStateImpl._downHandler.call(this, event);
    if (this.pressed) {
      this.ensureRipple(event);
    }
  },

  /**
   * Ensures this element contains a ripple effect. For startup efficiency
   * the ripple effect is dynamically on demand when needed.
   * @param {!Event=} optTriggeringEvent (optional) event that triggered the
   * ripple.
   */
  ensureRipple: function(optTriggeringEvent) {
    if (!this.hasRipple()) {
      this._ripple = this._createRipple();
      this._ripple.noink = this.noink;
      var rippleContainer = this._rippleContainer || this.root;
      if (rippleContainer) {
        dom(rippleContainer).appendChild(this._ripple);
      }
      if (optTriggeringEvent) {
        // Check if the event happened inside of the ripple container
        // Fall back to host instead of the root because distributed text
        // nodes are not valid event targets
        var domContainer = dom(this._rippleContainer || this);
        var target = dom(optTriggeringEvent).rootTarget;
        if (domContainer.deepContains(/** @type {Node} */ (target))) {
          this._ripple.uiDownAction(optTriggeringEvent);
        }
      }
    }
  },

  /**
   * Returns the `<paper-ripple>` element used by this element to create
   * ripple effects. The element's ripple is created on demand, when
   * necessary, and calling this method will force the
   * ripple to be created.
   */
  getRipple: function() {
    this.ensureRipple();
    return this._ripple;
  },

  /**
   * Returns true if this element currently contains a ripple effect.
   * @return {boolean}
   */
  hasRipple: function() {
    return Boolean(this._ripple);
  },

  /**
   * Create the element's ripple effect via creating a `<paper-ripple>`.
   * Override this method to customize the ripple element.
   * @return {!PaperRippleElement} Returns a `<paper-ripple>` element.
   */
  _createRipple: function() {
    var element = /** @type {!PaperRippleElement} */ (
        document.createElement('paper-ripple'));
    return element;
  },

  _noinkChanged: function(noink) {
    if (this.hasRipple()) {
      this._ripple.noink = noink;
    }
  }
};

function getTemplate$d() {
    return html `<!--_html_template_start_-->    <style>:host{--cr-icon-button-fill-color:var(--google-grey-700);--cr-icon-button-icon-start-offset:0;--cr-icon-button-icon-size:20px;--cr-icon-button-size:36px;--cr-icon-button-height:var(--cr-icon-button-size);--cr-icon-button-transition:150ms ease-in-out;--cr-icon-button-width:var(--cr-icon-button-size);-webkit-tap-highlight-color:transparent;border-radius:50%;color:var(--cr-icon-button-stroke-color,var(--cr-icon-button-fill-color));cursor:pointer;display:inline-flex;flex-shrink:0;height:var(--cr-icon-button-height);margin-inline-end:var(--cr-icon-button-margin-end,var(--cr-icon-ripple-margin));margin-inline-start:var(--cr-icon-button-margin-start);outline:0;overflow:hidden;user-select:none;vertical-align:middle;width:var(--cr-icon-button-width)}:host-context([chrome-refresh-2023]):host{--cr-icon-button-fill-color:currentColor;--cr-icon-button-size:32px;position:relative}:host(:hover){background-color:var(--cr-icon-button-hover-background-color,var(--cr-hover-background-color))}:host(:focus-visible:focus){box-shadow:inset 0 0 0 2px var(--cr-icon-button-focus-outline-color,var(--cr-focus-outline-color))}@media (forced-colors:active){:host(:focus-visible:focus){outline:var(--cr-focus-outline-hcm)}}:host-context(html:not([chrome-refresh-2023])) :host(:active){background-color:var(--cr-icon-button-active-background-color,var(--cr-active-background-color))}paper-ripple{display:none}:host-context([chrome-refresh-2023]) paper-ripple{--paper-ripple-opacity:1;color:var(--cr-active-background-color);display:block}:host([disabled]){cursor:initial;opacity:var(--cr-disabled-opacity);pointer-events:none}:host(.no-overlap){--cr-icon-button-margin-end:0;--cr-icon-button-margin-start:0}:host-context([dir=rtl]):host(:not([dir=ltr]):not([multiple-icons_])){transform:scaleX(-1)}:host-context([dir=rtl]):host(:not([dir=ltr])[multiple-icons_]) iron-icon{transform:scaleX(-1)}:host(:not([iron-icon])) #maskedImage{-webkit-mask-image:var(--cr-icon-image);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--cr-icon-button-icon-size);-webkit-transform:var(--cr-icon-image-transform,none);background-color:var(--cr-icon-button-fill-color);height:100%;transition:background-color var(--cr-icon-button-transition);width:100%}@media (forced-colors:active){:host(:not([iron-icon])) #maskedImage{background-color:ButtonText}}#icon{align-items:center;border-radius:4px;display:flex;height:100%;justify-content:center;padding-inline-start:var(--cr-icon-button-icon-start-offset);position:relative;width:100%}iron-icon{--iron-icon-fill-color:var(--cr-icon-button-fill-color);--iron-icon-stroke-color:var(--cr-icon-button-stroke-color, none);--iron-icon-height:var(--cr-icon-button-icon-size);--iron-icon-width:var(--cr-icon-button-icon-size);transition:fill var(--cr-icon-button-transition),stroke var(--cr-icon-button-transition)}@media (prefers-color-scheme:dark){:host{--cr-icon-button-fill-color:var(--google-grey-500)}}</style>
    <div id="icon">
      <div id="maskedImage"></div>
    </div>
<!--_html_template_end_-->`;
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'cr-icon-button' is a button which displays an icon with a
 * ripple. It can be interacted with like a normal button using click as well as
 * space and enter to effectively click the button and fire a 'click' event.
 *
 * There are two sources to icons, cr-icons and iron-iconset-svg. The cr-icon's
 * are defined as background images with a reference to a resource file
 * associated with a CSS class name. The iron-icon's are defined as inline SVG's
 * under a key that is stored in a global map that is accessible to the
 * iron-icon element.
 *
 * Example of using a cr-icon:
 * <link rel="import" href="chrome://resources/cr_elements/cr_icons.css.html">
 * <dom-module id="module">
 *   <template>
 *     <style includes="cr-icons"></style>
 *     <cr-icon-button class="icon-class-name"></cr-icon-button>
 *   </template>
 * </dom-module>
 *
 * In general when an icon is specified using a class, the expectation is the
 * class will set an image to the --cr-icon-image variable.
 *
 * Example of using an iron-icon:
 * In the TS file:
 * import 'chrome://resources/cr_elements/icons.html.js';
 *
 * In the HTML template file:
 * <cr-icon-button iron-icon="cr:icon-key"></cr-icon-button>
 *
 * The color of the icon can be overridden using CSS variables. When using
 * iron-icon both the fill and stroke can be overridden the variables:
 * --cr-icon-button-fill-color
 * --cr-icon-button-stroke-color
 *
 * When not using iron-icon (ie. specifying --cr-icon-image), the icons support
 * one color and the 'stroke' variables are ignored.
 *
 * When using iron-icon's, more than one icon can be specified by setting
 * the |ironIcon| property to a comma-delimited list of keys.
 */
const CrIconbuttonElementBase = mixinBehaviors([PaperRippleBehavior], PolymerElement);
class CrIconButtonElement extends CrIconbuttonElementBase {
    static get is() {
        return 'cr-icon-button';
    }
    static get template() {
        return getTemplate$d();
    }
    static get properties() {
        return {
            disabled: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
                observer: 'disabledChanged_',
            },
            /**
             * Use this property in order to configure the "tabindex" attribute.
             */
            customTabIndex: {
                type: Number,
                observer: 'applyTabIndex_',
            },
            ironIcon: {
                type: String,
                observer: 'onIronIconChanged_',
                reflectToAttribute: true,
            },
            multipleIcons_: {
                type: Boolean,
                reflectToAttribute: true,
            },
        };
    }
    constructor() {
        super();
        /**
         * It is possible to activate a tab when the space key is pressed down. When
         * this element has focus, the keyup event for the space key should not
         * perform a 'click'. |spaceKeyDown_| tracks when a space pressed and
         * handled by this element. Space keyup will only result in a 'click' when
         * |spaceKeyDown_| is true. |spaceKeyDown_| is set to false when element
         * loses focus.
         */
        this.spaceKeyDown_ = false;
        this.addEventListener('blur', this.onBlur_.bind(this));
        this.addEventListener('click', this.onClick_.bind(this));
        this.addEventListener('keydown', this.onKeyDown_.bind(this));
        this.addEventListener('keyup', this.onKeyUp_.bind(this));
        if (document.documentElement.hasAttribute('chrome-refresh-2023')) {
            this.addEventListener('pointerdown', this.onPointerDown_.bind(this));
        }
    }
    ready() {
        super.ready();
        this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
        if (!this.hasAttribute('role')) {
            this.setAttribute('role', 'button');
        }
        if (!this.hasAttribute('tabindex')) {
            this.setAttribute('tabindex', '0');
        }
    }
    toggleClass(className) {
        this.classList.toggle(className);
    }
    disabledChanged_(newValue, oldValue) {
        if (!newValue && oldValue === undefined) {
            return;
        }
        if (this.disabled) {
            this.blur();
        }
        this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
        this.applyTabIndex_();
    }
    /**
     * Updates the tabindex HTML attribute to the actual value.
     */
    applyTabIndex_() {
        let value = this.customTabIndex;
        if (value === undefined) {
            value = this.disabled ? -1 : 0;
        }
        this.setAttribute('tabindex', value.toString());
    }
    onBlur_() {
        this.spaceKeyDown_ = false;
    }
    onClick_(e) {
        if (this.disabled) {
            e.stopImmediatePropagation();
        }
    }
    onIronIconChanged_() {
        this.shadowRoot.querySelectorAll('iron-icon').forEach(el => el.remove());
        if (!this.ironIcon) {
            return;
        }
        const icons = (this.ironIcon || '').split(',');
        this.multipleIcons_ = icons.length > 1;
        icons.forEach(icon => {
            const ironIcon = document.createElement('iron-icon');
            ironIcon.icon = icon;
            this.$.icon.appendChild(ironIcon);
            if (ironIcon.shadowRoot) {
                ironIcon.shadowRoot.querySelectorAll('svg, img')
                    .forEach(child => child.setAttribute('role', 'none'));
            }
        });
    }
    onKeyDown_(e) {
        if (e.key !== ' ' && e.key !== 'Enter') {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        if (e.repeat) {
            return;
        }
        if (e.key === 'Enter') {
            this.click();
        }
        else if (e.key === ' ') {
            this.spaceKeyDown_ = true;
        }
    }
    onKeyUp_(e) {
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            e.stopPropagation();
        }
        if (this.spaceKeyDown_ && e.key === ' ') {
            this.spaceKeyDown_ = false;
            this.click();
        }
    }
    onPointerDown_() {
        this.ensureRipple();
    }
}
customElements.define(CrIconButtonElement.is, CrIconButtonElement);

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/**
Material design:
[Tooltips](https://www.google.com/design/spec/components/tooltips.html)
`<paper-tooltip>` is a label that appears on hover and focus when the user
hovers over an element with the cursor or with the keyboard. It will be centered
to an anchor element specified in the `for` attribute, or, if that doesn't
exist, centered to the parent node containing it.
Example:
    <div style="display:inline-block">
      <button>Click me!</button>
      <paper-tooltip>Tooltip text</paper-tooltip>
    </div>
    <div>
      <button id="btn">Click me!</button>
      <paper-tooltip for="btn">Tooltip text</paper-tooltip>
    </div>
The tooltip can be positioned on the top|bottom|left|right of the anchor using
the `position` attribute. The default position is bottom.
    <paper-tooltip for="btn" position="left">Tooltip text</paper-tooltip>
    <paper-tooltip for="btn" position="top">Tooltip text</paper-tooltip>

### Styling
The following custom properties and mixins are available for styling:
Custom property | Description | Default
----------------|-------------|----------
`--paper-tooltip-background` | The background color of the tooltip | `#616161`
`--paper-tooltip-opacity` | The opacity of the tooltip | `0.9`
`--paper-tooltip-text-color` | The text color of the tooltip | `white`
`--paper-tooltip-delay-in` | Delay before tooltip starts to fade in | `500`
`--paper-tooltip-delay-out` | Delay before tooltip starts to fade out | `0`
`--paper-tooltip-duration-in` | Timing for animation when showing tooltip | `500`
`--paper-tooltip-duration-out` | Timing for animation when hiding tooltip | `0`

Also prefer using the exposed CSS part as follows where possible
paper-tooltip::part(tooltip) {...}

@group Paper Elements
@element paper-tooltip
@demo demo/index.html
*/
Polymer({
  _template: html`
    <style>
      :host {
        display: block;
        position: absolute;
        outline: none;
        z-index: 1002;
        user-select: none;
        cursor: default;
      }

      #tooltip {
        display: block;
        outline: none;
        font-size: 10px;
        line-height: 1;
        background-color: var(--paper-tooltip-background, #616161);
        color: var(--paper-tooltip-text-color, white);
        padding: 8px;
        border-radius: 2px;
      }

      @keyframes keyFrameScaleUp {
        0% {
          transform: scale(0.0);
        }
        100% {
          transform: scale(1.0);
        }
      }

      @keyframes keyFrameScaleDown {
        0% {
          transform: scale(1.0);
        }
        100% {
          transform: scale(0.0);
        }
      }

      @keyframes keyFrameFadeInOpacity {
        0% {
          opacity: 0;
        }
        100% {
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
      }

      @keyframes keyFrameFadeOutOpacity {
        0% {
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
        100% {
          opacity: 0;
        }
      }

      @keyframes keyFrameSlideDownIn {
        0% {
          transform: translateY(-2000px);
          opacity: 0;
        }
        10% {
          opacity: 0.2;
        }
        100% {
          transform: translateY(0);
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
      }

      @keyframes keyFrameSlideDownOut {
        0% {
          transform: translateY(0);
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
        10% {
          opacity: 0.2;
        }
        100% {
          transform: translateY(-2000px);
          opacity: 0;
        }
      }

      .fade-in-animation {
        opacity: 0;
        animation-delay: var(--paper-tooltip-delay-in, 500ms);
        animation-name: keyFrameFadeInOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-in, 500ms);
        animation-fill-mode: forwards;
      }

      .fade-out-animation {
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 0ms);
        animation-name: keyFrameFadeOutOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
      }

      .scale-up-animation {
        transform: scale(0);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-in, 500ms);
        animation-name: keyFrameScaleUp;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-in, 500ms);
        animation-fill-mode: forwards;
      }

      .scale-down-animation {
        transform: scale(1);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameScaleDown;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
      }

      .slide-down-animation {
        transform: translateY(-2000px);
        opacity: 0;
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameSlideDownIn;
        animation-iteration-count: 1;
        animation-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
      }

      .slide-down-animation-out {
        transform: translateY(0);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameSlideDownOut;
        animation-iteration-count: 1;
        animation-timing-function: cubic-bezier(0.4, 0.0, 1, 1);
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
      }

      .cancel-animation {
        animation-delay: -30s !important;
      }

      /* Thanks IE 10. */

      .hidden {
        display: none !important;
      }
    </style>

    <div id="tooltip" class="hidden" part="tooltip">
      <slot></slot>
    </div>
`,

  is: 'paper-tooltip',
  hostAttributes: {role: 'tooltip', tabindex: -1},

  properties: {
    /**
     * The id of the element that the tooltip is anchored to. This element
     * must be a sibling of the tooltip. If this property is not set,
     * then the tooltip will be centered to the parent node containing it.
     */
    for: {type: String, observer: '_findTarget'},
    /**
     * Set this to true if you want to manually control when the tooltip
     * is shown or hidden.
     */
    manualMode: {type: Boolean, value: false, observer: '_manualModeChanged'},
    /**
     * Positions the tooltip to the top, right, bottom, left of its content.
     */
    position: {type: String, value: 'bottom'},
    /**
     * If true, no parts of the tooltip will ever be shown offscreen.
     */
    fitToVisibleBounds: {type: Boolean, value: false},
    /**
     * The spacing between the top of the tooltip and the element it is
     * anchored to.
     */
    offset: {type: Number, value: 14},
    /**
     * This property is deprecated, but left over so that it doesn't
     * break exiting code. Please use `offset` instead. If both `offset` and
     * `marginTop` are provided, `marginTop` will be ignored.
     * @deprecated since version 1.0.3
     */
    marginTop: {type: Number, value: 14},
    /**
     * The delay that will be applied before the `entry` animation is
     * played when showing the tooltip.
     */
    animationDelay: {type: Number, value: 500, observer: '_delayChange'},
    /**
     * The animation that will be played on entry.  This replaces the
     * deprecated animationConfig.  Entries here will override the
     * animationConfig settings.  You can enter your own animation
     * by setting it to the css class name.
     */
    animationEntry: {type: String, value: ''},
    /**
     * The animation that will be played on exit.  This replaces the
     * deprecated animationConfig.  Entries here will override the
     * animationConfig settings.  You can enter your own animation
     * by setting it to the css class name.
     */
    animationExit: {type: String, value: ''},
    /**
     * This property is deprecated.
     * The entry and exit animations that will be played when showing
     * and hiding the tooltip. If you want to override this, you must ensure
     * that your animationConfig has the exact format below.
     * @deprecated since version
     *
     * The entry and exit animations that will be played when showing and
     * hiding the tooltip. If you want to override this, you must ensure
     * that your animationConfig has the exact format below.
     */
    animationConfig: {
      type: Object,
      value: function() {
        return {
          'entry':
              [{name: 'fade-in-animation', node: this, timing: {delay: 0}}],
              'exit': [{name: 'fade-out-animation', node: this}]
        }
      }
    },
    _showing: {type: Boolean, value: false}
  },

  listeners: {
    'webkitAnimationEnd': '_onAnimationEnd',
  },

  /**
   * Returns the target element that this tooltip is anchored to. It is
   * either the element given by the `for` attribute, the element manually
   * specified through the `target` attribute, or the immediate parent of
   * the tooltip.
   *
   * @type {Node}
   */
  get target() {
    if (this._manualTarget)
      return this._manualTarget;

    var parentNode = dom(this).parentNode;
    // If the parentNode is a document fragment, then we need to use the host.
    var ownerRoot = dom(this).getOwnerRoot();
    var target;
    if (this.for) {
      target = dom(ownerRoot).querySelector('#' + this.for);
    } else {
      target = parentNode.nodeType == Node.DOCUMENT_FRAGMENT_NODE ?
          ownerRoot.host :
          parentNode;
    }
    return target;
  },

  /**
   * Sets the target element that this tooltip will be anchored to.
   * @param {Node} target
   */
  set target(target) {
    this._manualTarget = target;
    this._findTarget();
  },

  /**
   * @return {void}
   */
  attached: function() {
    this._findTarget();
  },

  /**
   * @return {void}
   */
  detached: function() {
    if (!this.manualMode)
      this._removeListeners();
  },

  /**
   * Replaces Neon-Animation playAnimation - just calls show and hide.
   * @deprecated Use show and hide instead.
   * @param {string} type Either `entry` or `exit`
   */
  playAnimation: function(type) {
    if (type === 'entry') {
      this.show();
    } else if (type === 'exit') {
      this.hide();
    }
  },

  /**
   * Cancels the animation and either fully shows or fully hides tooltip
   */
  cancelAnimation: function() {
    // Short-cut and cancel all animations and hide
    this.$.tooltip.classList.add('cancel-animation');
  },

  /**
   * Shows the tooltip programatically
   * @return {void}
   */
  show: function() {
    // If the tooltip is already showing, there's nothing to do.
    if (this._showing)
      return;

    if (dom(this).textContent.trim() === '') {
      // Check if effective children are also empty
      var allChildrenEmpty = true;
      var effectiveChildren = dom(this).getEffectiveChildNodes();
      for (var i = 0; i < effectiveChildren.length; i++) {
        if (effectiveChildren[i].textContent.trim() !== '') {
          allChildrenEmpty = false;
          break;
        }
      }
      if (allChildrenEmpty) {
        return;
      }
    }

    this._showing = true;
    this.$.tooltip.classList.remove('hidden');
    this.$.tooltip.classList.remove('cancel-animation');
    this.$.tooltip.classList.remove(this._getAnimationType('exit'));
    this.updatePosition();
    this._animationPlaying = true;
    this.$.tooltip.classList.add(this._getAnimationType('entry'));
  },

  /**
   * Hides the tooltip programatically
   * @return {void}
   */
  hide: function() {
    // If the tooltip is already hidden, there's nothing to do.
    if (!this._showing) {
      return;
    }

    // If the entry animation is still playing, don't try to play the exit
    // animation since this will reset the opacity to 1. Just end the animation.
    if (this._animationPlaying) {
      this._showing = false;
      this._cancelAnimation();
      return;
    } else {
      // Play Exit Animation
      this._onAnimationFinish();
    }

    this._showing = false;
    this._animationPlaying = true;
  },

  /**
   * @return {void}
   */
  updatePosition: function() {
    if (!this._target)
      return;
    var offsetParent = this._composedOffsetParent();
    if (!offsetParent)
      return;
    var offset = this.offset;
    // If a marginTop has been provided by the user (pre 1.0.3), use it.
    if (this.marginTop != 14 && this.offset == 14)
      offset = this.marginTop;
    var parentRect = offsetParent.getBoundingClientRect();
    var targetRect = this._target.getBoundingClientRect();
    var thisRect = this.getBoundingClientRect();
    var horizontalCenterOffset = (targetRect.width - thisRect.width) / 2;
    var verticalCenterOffset = (targetRect.height - thisRect.height) / 2;
    var targetLeft = targetRect.left - parentRect.left;
    var targetTop = targetRect.top - parentRect.top;
    var tooltipLeft, tooltipTop;
    switch (this.position) {
      case 'top':
        tooltipLeft = targetLeft + horizontalCenterOffset;
        tooltipTop = targetTop - thisRect.height - offset;
        break;
      case 'bottom':
        tooltipLeft = targetLeft + horizontalCenterOffset;
        tooltipTop = targetTop + targetRect.height + offset;
        break;
      case 'left':
        tooltipLeft = targetLeft - thisRect.width - offset;
        tooltipTop = targetTop + verticalCenterOffset;
        break;
      case 'right':
        tooltipLeft = targetLeft + targetRect.width + offset;
        tooltipTop = targetTop + verticalCenterOffset;
        break;
    }
    // TODO(noms): This should use IronFitBehavior if possible.
    if (this.fitToVisibleBounds) {
      // Clip the left/right side
      if (parentRect.left + tooltipLeft + thisRect.width > window.innerWidth) {
        this.style.right = '0px';
        this.style.left = 'auto';
      } else {
        this.style.left = Math.max(0, tooltipLeft) + 'px';
        this.style.right = 'auto';
      }
      // Clip the top/bottom side.
      if (parentRect.top + tooltipTop + thisRect.height > window.innerHeight) {
        this.style.bottom = (parentRect.height - targetTop + offset) + 'px';
        this.style.top = 'auto';
      } else {
        this.style.top = Math.max(-parentRect.top, tooltipTop) + 'px';
        this.style.bottom = 'auto';
      }
    } else {
      this.style.left = tooltipLeft + 'px';
      this.style.top = tooltipTop + 'px';
    }
  },

  _addListeners: function() {
    if (this._target) {
      this.listen(this._target, 'mouseenter', 'show');
      this.listen(this._target, 'focus', 'show');
      this.listen(this._target, 'mouseleave', 'hide');
      this.listen(this._target, 'blur', 'hide');
      this.listen(this._target, 'tap', 'hide');
    }
    this.listen(this.$.tooltip, 'animationend', '_onAnimationEnd');
    this.listen(this, 'mouseenter', 'hide');
  },

  _findTarget: function() {
    if (!this.manualMode)
      this._removeListeners();
    this._target = this.target;
    if (!this.manualMode)
      this._addListeners();
  },

  _delayChange: function(newValue) {
    // Only Update delay if different value set
    if (newValue !== 500) {
      this.updateStyles({'--paper-tooltip-delay-in': newValue + 'ms'});
    }
  },

  _manualModeChanged: function() {
    if (this.manualMode)
      this._removeListeners();
    else
      this._addListeners();
  },

  _cancelAnimation: function() {
    // Short-cut and cancel all animations and hide
    this.$.tooltip.classList.remove(this._getAnimationType('entry'));
    this.$.tooltip.classList.remove(this._getAnimationType('exit'));
    this.$.tooltip.classList.remove('cancel-animation');
    this.$.tooltip.classList.add('hidden');
  },

  _onAnimationFinish: function() {
    if (this._showing) {
      this.$.tooltip.classList.remove(this._getAnimationType('entry'));
      this.$.tooltip.classList.remove('cancel-animation');
      this.$.tooltip.classList.add(this._getAnimationType('exit'));
    }
  },

  _onAnimationEnd: function() {
    // If no longer showing add class hidden to completely hide tooltip
    this._animationPlaying = false;
    if (!this._showing) {
      this.$.tooltip.classList.remove(this._getAnimationType('exit'));
      this.$.tooltip.classList.add('hidden');
    }
  },

  _getAnimationType: function(type) {
    // These properties have priority over animationConfig values
    if ((type === 'entry') && (this.animationEntry !== '')) {
      return this.animationEntry;
    }
    if ((type === 'exit') && (this.animationExit !== '')) {
      return this.animationExit;
    }
    // If no results then return the legacy value from animationConfig
    if (this.animationConfig[type] &&
        typeof this.animationConfig[type][0].name === 'string') {
      // Checking Timing and Update if necessary - Legacy for animationConfig
      if (this.animationConfig[type][0].timing &&
          this.animationConfig[type][0].timing.delay &&
          this.animationConfig[type][0].timing.delay !== 0) {
        var timingDelay = this.animationConfig[type][0].timing.delay;
        // Has Timing Change - Update CSS
        if (type === 'entry') {
          this.updateStyles({'--paper-tooltip-delay-in': timingDelay + 'ms'});
        } else if (type === 'exit') {
          this.updateStyles({'--paper-tooltip-delay-out': timingDelay + 'ms'});
        }
      }
      return this.animationConfig[type][0].name;
    }
  },

  _removeListeners: function() {
    if (this._target) {
      this.unlisten(this._target, 'mouseenter', 'show');
      this.unlisten(this._target, 'focus', 'show');
      this.unlisten(this._target, 'mouseleave', 'hide');
      this.unlisten(this._target, 'blur', 'hide');
      this.unlisten(this._target, 'tap', 'hide');
    }
    this.unlisten(this.$.tooltip, 'animationend', '_onAnimationEnd');
    this.unlisten(this, 'mouseenter', 'hide');
  },

  /**
   * Polyfills the old offsetParent behavior from before the spec was changed:
   * https://github.com/w3c/csswg-drafts/issues/159
   */
  _composedOffsetParent: function() {
    // Do an initial walk to check for display:none ancestors.
    for (let ancestor = this; ancestor; ancestor = flatTreeParent(ancestor)) {
      if (!(ancestor instanceof Element))
        continue;
      if (getComputedStyle(ancestor).display === 'none')
        return null;
    }

    for (let ancestor = flatTreeParent(this); ancestor; ancestor = flatTreeParent(ancestor)) {
      if (!(ancestor instanceof Element))
        continue;
      const style = getComputedStyle(ancestor);
      if (style.display === 'contents') {
        // display:contents nodes aren't in the layout tree so they should be skipped.
        continue;
      }
      if (style.position !== 'static') {
        return ancestor;
      }
      if (ancestor.tagName === 'BODY')
        return ancestor;
    }
    return null;

    function flatTreeParent(element) {
      if (element.assignedSlot) {
        return element.assignedSlot;
      }
      if (element.parentNode instanceof ShadowRoot) {
        return element.parentNode.host;
      }
      return element.parentNode;
    }
  }
});

function getTemplate$c() {
    return html `<!--_html_template_start_--><style>:host{--emoji-background:transparent;height:var(--emoji-size);position:relative;width:var(--emoji-size)}#emoji-button{background:var(--emoji-background);border:none;border-radius:50%;cursor:pointer;display:block;font-family:'Noto Color Emoji';font-size:19px;height:100%;line-height:var(--emoji-size);outline:0;padding:0;text-align:center;user-select:none;width:100%}#emoji-button:active,#emoji-button:focus{outline-color:var(--emoji-picker-focus-ring-color);outline-style:solid;outline-width:2px}#emoji-button:disabled{color:red;cursor:default}#emoji-button:hover{background-color:var(--emoji-hover-background)}.has-variants::after{background:linear-gradient(315deg,var(--google-grey-500) 4px,var(--emoji-background) 4px,var(--emoji-background));content:'';display:block;height:var(--emoji-size);position:relative;top:calc(0 - var(--emoji-size));width:var(--emoji-size)}#tooltip{--paper-tooltip-background:var(--cros-tooltip-background-color);--paper-tooltip-delay-in:var(--emoji-tooltip-delay-in);--paper-tooltip-delay-out:var(--emoji-tooltip-delay-out);--paper-tooltip-duration-in:0;--paper-tooltip-duration-out:0;--paper-tooltip-opacity:1;--paper-tooltip-text-color:var(--cros-tooltip-label-color)}#tooltip::part(tooltip){box-shadow:var(--cros-elevation-1-shadow,--cr-elevation-1);font:var(--cros-annotation-1-font);margin:4px;padding:4px 8px 4px 8px;white-space:nowrap}</style>

<button id="emoji-button" on-click="onClick" disabled="[[disabled]]" aria-label="[[getLabel()]]">
  [[emoji]]
</button>
<template is="dom-if" if="[[!variant]]">
  <paper-tooltip id="tooltip" for="emoji-button" fit-to-visible-bounds part="tooltip" offset="8">
    [[tooltip]]
  </paper-tooltip>
</template>
<!--_html_template_end_-->`;
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// TODO(b/264211466): This is only used by emoji_variants.html. The only props
// that are set seem to be emoji, variant, base, all-variants, tooltip  and
// disabled.  I can delete the others in a follow up, but not changing this file
// to make the revert simpler to review.
// https://source.chromium.org/chromium/chromium/src/+/main:chrome/browser/resources/chromeos/emoji_picker/emoji_variants.html
class EmojiButton extends PolymerElement {
    constructor() {
        super(...arguments);
        this.groupedTone = false;
        this.groupedGender = false;
    }
    static get is() {
        return 'emoji-button';
    }
    static get template() {
        return getTemplate$c();
    }
    static get properties() {
        return {
            emoji: { type: String, readonly: true },
            variant: { type: Boolean, value: false, readonly: true },
            tone: { type: Number, readonly: true },
            gender: { type: Number, readonly: true },
            groupedTone: { type: Boolean, readonly: true },
            groupedGender: { type: Boolean, readonly: true },
            disabled: { type: Boolean, value: false, readonly: true },
            base: { type: String },
            allVariants: { type: Array, readonly: true },
            tooltip: { type: String, readonly: true },
        };
    }
    onClick() {
        if (this.disabled) {
            return;
        }
        this.dispatchEvent(createCustomEvent(EMOJI_TEXT_BUTTON_CLICK, {
            name: this.tooltip,
            category: CategoryEnum.EMOJI,
            text: this.emoji,
            baseEmoji: this.base,
            isVariant: this.variant,
            tone: this.tone,
            gender: this.gender,
            groupedTone: this.groupedTone,
            groupedGender: this.groupedGender,
            alternates: this.allVariants ?? [],
        }));
    }
    getLabel() {
        // TODO(crbug/1227852): Just use emoji as the tooltip once ChromeVox can
        // announce them properly.
        return (navigator.languages.some(lang => lang.startsWith('en')) &&
            this.tooltip) ?
            this.tooltip :
            this.emoji;
    }
}
customElements.define(EmojiButton.is, EmojiButton);

function getTemplate$b() {
    return html `<!--_html_template_start_--><style>:host{background:var(--emoji-picker-container-color);border-radius:8px;box-shadow:var(--cros-elevation-2-shadow,--cr-elevation-2);display:grid;grid-template-columns:max-content max-content max-content;grid-template-rows:max-content max-content;height:fit-content;padding:4px;position:relative;width:fit-content;z-index:100}#grid-base-emoji{display:flex;flex-direction:column-reverse;grid-column:1;grid-row:1/span 2}#grid-skin-tone-top{display:flex;flex-direction:row;gap:var(--emoji-spacing);grid-column:3;grid-row:1}#grid-skin-tone-left{display:flex;flex-direction:column;grid-column:2;grid-row:2}.skin-tone>emoji-button{clip-path:circle(4px)}#grid-variants{display:flex;flex-direction:column;grid-column:3;grid-row:2;width:fit-content}.variant-row{display:flex;flex-direction:row;gap:var(--emoji-spacing);height:var(--emoji-size)}</style>



<div id="grid-base-emoji">
  <template is="dom-if" if="[[showBaseEmoji]]">
    <emoji-button emoji="[[baseEmoji]]"></emoji-button>
  </template>
</div>

<div id="grid-skin-tone-top" class="skin-tone">
  <template is="dom-if" if="[[showSkinTones]]">
    
    <emoji-button emoji="&#x1F3FB;" disabled="disabled"></emoji-button>
    <emoji-button emoji="&#x1F3FC;" disabled="disabled"></emoji-button>
    <emoji-button emoji="&#x1F3FD;" disabled="disabled"></emoji-button>
    <emoji-button emoji="&#x1F3FE;" disabled="disabled"></emoji-button>
    <emoji-button emoji="&#x1F3FF;" disabled="disabled"></emoji-button>
  </template>
</div>

<div id="grid-skin-tone-left" class="skin-tone">
  <template is="dom-if" if="[[showSkinTones]]">
    <emoji-button emoji="&#x1F3FB;" disabled="disabled"></emoji-button>
    <emoji-button emoji="&#x1F3FC;" disabled="disabled"></emoji-button>
    <emoji-button emoji="&#x1F3FD;" disabled="disabled"></emoji-button>
    <emoji-button emoji="&#x1F3FE;" disabled="disabled"></emoji-button>
    <emoji-button emoji="&#x1F3FF;" disabled="disabled"></emoji-button>
  </template>
</div>

<div id="grid-variants">
  <div id="fakeFocusTarget" tabindex="-1"></div>
  <template is="dom-repeat" items="[[computeVariantRows(showBaseEmoji, variants)]]" as="row">
    <div class="variant-row">
      <template is="dom-repeat" items="[[row]]" as="emoji">
        <emoji-button emoji="[[emoji.string]]" variant tone="[[emoji.tone]]" gender="[[emoji.gender]]" base="[[baseEmoji]]" grouped-tone="[[groupedTone]]" grouped-gender="[[groupedGender]]" all-variants="[[variants]]" tooltip="[[tooltip]]">
        </emoji-button>
      </template>
    </div>
  </template>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SKIN_TONE_MEDIUM = '🏽'; // U+1F3FD EMOJI MODIFIER FITZPATRICK TYPE-4
const FAMILY = '👪'; // U+1F46A FAMILY
/**
 * Determines if the given list of variants has any variant which contains
 * the given codepoint.
 */
function hasVariation(variants, codepoint) {
    return variants.findIndex(x => x.string?.includes(codepoint)) !== -1;
}
/**
 * Partitions source array into array of arrays, where each subarray's
 * length is determined by the corresponding value of subarrayLengths.
 * A negative length indicates skip that many items.
 */
function partitionArray(array, subarrayLengths) {
    const subarrays = [];
    let used = 0;
    for (const len of subarrayLengths) {
        if (len < 0) {
            used += -len;
            continue;
        }
        subarrays.push(array.slice(used, used + len));
        used += len;
    }
    return subarrays;
}
class EmojiVariants extends PolymerElement {
    constructor() {
        super(...arguments);
        this.groupedTone = false;
        this.groupedGender = false;
    }
    static get is() {
        return 'emoji-variants';
    }
    static get template() {
        return getTemplate$b();
    }
    static get properties() {
        return {
            variants: { type: Array, readonly: true },
            groupedTone: { type: Boolean, readonly: true },
            groupedGender: { type: Boolean, readonly: true },
            baseEmoji: { type: Array },
            showSkinTones: { type: Boolean },
            showBaseEmoji: { type: Boolean },
            tooltip: { type: String },
        };
    }
    ready() {
        super.ready();
        // family picker is basic 5x5 grid.
        const isFamily = this.variants.length === 26 && this.variants[0]?.string === FAMILY;
        // two people is 5x5 grid with 5 skin tones per person.
        const isTwoPeople = this.variants.length === 26 &&
            hasVariation(this.variants, SKIN_TONE_MEDIUM);
        this.showBaseEmoji = isFamily || isTwoPeople;
        this.baseEmoji = this.variants[0]?.string ?? '';
        this.showSkinTones = isTwoPeople;
        this.addEventListener('keydown', (ev) => this.onKeyDown(ev));
    }
    connectedCallback() {
        beforeNextRender(this, () => this.$.fakeFocusTarget.focus());
    }
    computeVariantRows(showBaseEmoji, variants) {
        // if we are showing a base emoji separately, omit it from the main grid.
        const gridEmoji = showBaseEmoji ? variants.slice(1) : variants;
        const rowLengths = this.computeVariantRowLengths(gridEmoji);
        return partitionArray(gridEmoji, rowLengths);
    }
    computeVariantRowLengths(variants) {
        if (!variants.length) {
            return [];
        }
        if (variants.length <= 6) {
            // one row of gender or skin tone variants.
            return [variants.length];
        }
        else if (variants.length === 18) {
            // three rows of skin tone and gender variants.
            return [6, 6, 6];
        }
        else if (variants.length === 25) {
            // 5x5 grid of family or skin tone options.
            return [5, 5, 5, 5, 5];
        }
        return [];
    }
    onKeyDown(ev) {
        if (ev.key !== 'Escape') {
            return;
        }
        // hide visible variants when escape is pressed.
        // TODO(crbug.com/1177020): does not work (whole dialog is closed instead).
        ev.preventDefault();
        ev.stopPropagation();
        this.dispatchEvent(createCustomEvent(EMOJI_VARIANTS_SHOWN, {
            baseEmoji: this.baseEmoji,
        }));
    }
}
customElements.define(EmojiVariants.is, EmojiVariants);

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
function assertInstanceof(value, type, message) {
    if (value instanceof type) {
        return;
    }
    throw new Error(message || `Value ${value} is not of type ${type.name || typeof type}`);
}
/**
 * Call this from places in the code that should never be reached.
 *
 * For example, handling all the values of enum with a switch() like this:
 *
 *   function getValueFromEnum(enum) {
 *     switch (enum) {
 *       case ENUM_FIRST_OF_TWO:
 *         return first
 *       case ENUM_LAST_OF_TWO:
 *         return last;
 *     }
 *     assertNotReached();
 *   }
 *
 * This code should only be hit in the case of serious programmer error or
 * unexpected input.
 */
function assertNotReached(message = 'Unreachable code hit') {
    assert(false, message);
}

function getTemplate$a() {
    return html `<!--_html_template_start_--><style>:host{margin-top:10px;position:relative;--emoji-background:transparent}:host([category=emoticon][jelly-support]),:host([category=symbol][jelly-support]){--emoji-button-border-radius:4px}.emoji-button{background:var(--emoji-background);border:none;cursor:pointer;height:100%}.emoji-button-container{height:var(--emoji-size);position:relative;width:var(--emoji-size)}.grid-layout{display:grid;gap:var(--emoji-spacing);grid-auto-rows:max-content;grid-template-columns:repeat(var(--emoji-per-row),1fr);justify-items:center}.grid-layout .emoji-button{border-radius:var(--emoji-button-border-radius,50%);display:block;font-family:'Noto Color Emoji';font-size:19px;line-height:var(--emoji-size);outline:0;padding:0;text-align:center;user-select:none;width:100%}.flex-layout{display:flex;flex-wrap:wrap;gap:12px 20px}.flex-layout .emoji-button-container{width:max-content}.flex-layout .emoji-button{border-radius:var(--emoji-button-border-radius,0);color:var(--emoji-picker-symbol-color);font-family:'Noto Sans CJK JP';font-size:13px;padding:6px;width:max-content}.two-column-layout{display:flex}.two-column-layout .left-column{flex:50%}.two-column-layout .right-column{align-items:flex-end;display:flex;flex:50%;flex-direction:column}#heading{color:var(--emoji-picker-category-header-color);display:flex;font-size:13px;padding-bottom:var(--emoji-group-heading-padding-bottom);padding-top:var(--emoji-group-heading-padding-top)}#heading:active,#heading:focus{outline-color:var(--emoji-picker-focus-ring-color);outline-width:2px}#heading-left{height:var(--emoji-group-heading-size);line-height:var(--emoji-group-heading-size);user-select:none;width:100%}#palette{padding-bottom:16px}#show-clear{--cr-icon-button-fill-color:var(--emoji-picker-icon-button-icon-color);--cr-icon-button-focus-outline-color:var(--emoji-picker-focus-ring-color);height:var(--emoji-group-heading-size);left:var(--emoji-picker-last-emoji-left);margin:0;width:var(--emoji-group-heading-size)}#clear-recents-container{position:absolute;right:0;top:calc(var(--emoji-group-heading-padding-top) + var(--emoji-group-heading-padding-bottom) + var(--emoji-group-heading-size));box-shadow:var(--cros-elevation-1-shadow,--cr-elevation-1);border-radius:4px;overflow:hidden;z-index:300}#clear-recents,#help{background-color:var(--emoji-picker-container-color);border:2px solid transparent;color:var(--cros-text-color-secondary);cursor:pointer;font-family:Roboto,sans-serif;font-size:12px;height:var(--emoji-size);outline:0;padding:0;white-space:nowrap;width:100%;z-index:200;display:block;text-align:left}#clear-recents:active,#clear-recents:focus,#help:active,#help:focus{border:2px solid var(--cros-toggle-color)}#fake-focus-target{position:absolute}#clear-recents-hover{border:2px solid transparent;margin:-2px;padding:7px 11px 7px 11px}#clear-recents-hover:hover{background-color:var(--cros-button-background-color-secondary-hover);border:2px solid var(--cros-button-background-color-secondary-hover)}.emoji-button:active,.emoji-button:focus{outline-color:var(--emoji-picker-focus-ring-color);outline-style:solid;outline-width:2px}.emoji-button:disabled{color:red;cursor:default}.emoji-button:hover{background-color:var(--emoji-hover-background)}.has-variants::after{background:linear-gradient(315deg,var(--google-grey-500) 4px,var(--emoji-background) 4px,var(--emoji-background));content:'';display:block;height:var(--emoji-size);position:relative;top:calc(0px - var(--emoji-size));width:var(--emoji-size)}paper-tooltip{--paper-tooltip-background:var(--cros-tooltip-background-color);--paper-tooltip-delay-in:var(--emoji-tooltip-delay-in);--paper-tooltip-delay-out:var(--emoji-tooltip-delay-out);--paper-tooltip-duration-in:0;--paper-tooltip-duration-out:0;--paper-tooltip-opacity:1;--paper-tooltip-text-color:var(--cros-tooltip-label-color)}paper-tooltip::part(tooltip){box-shadow:var(--cros-elevation-1-shadow,--cr-elevation-1);font-family:Roboto,sans-serif;font-size:12px;margin:4px;padding:4px 8px 4px 8px;white-space:nowrap}</style>


<template is="dom-if" if="[[group]]">
  <div id="heading" role="heading" aria-level="2" tabindex="-1">
    <div id="heading-left">[[group]]</div>
    <template is="dom-if" if="[[clearable]]">
      <cr-icon-button id="show-clear" iron-icon="emoji_picker:more_horizontal" on-click="onClearClick" aria-label$="[[getMoreOptionsAriaLabel(gifSupport)]]">
      </cr-icon-button>
    </template>
  </div>
</template>
<template is="dom-if" if="[[showClearRecents]]">
  <div id="clear-recents-container">
    <button id="clear-recents" on-click="onClearRecentsClick">
      <div id="clear-recents-hover">
        Clear recently used [[formatCategory(category)]]s
      </div>
    </button>

    <button id="help" on-click="onHelpClick">
      <div id="clear-recents-hover">
        Help
      </div>
    </button>
</div>
</template>


<div id="palette" class$="[[getLayoutClassName(layoutType, category)]]" on-click="onEmojiClick" on-contextmenu="onEmojiContextMenu">
  <div id="fake-focus-target" tabindex="-1"></div>
  <template is="dom-if" if="[[isVisual(category)]]">
    <div class="left-column">
      <template is="dom-repeat" items="[[filterColumn(data, 'left', data.length)]]">
        <emoji-image index="[[getIndex(item)]]" item="[[item]]" show-tooltip="[[showTooltip]]" emoji-click="[[onEmojiClick]]" clearable="[[clearable]]">
        </emoji-image>
      </template>
    </div>
    <div class="right-column">
      <template is="dom-repeat" items="[[filterColumn(data, 'right', data.length)]]">
        <emoji-image index="[[getIndex(item)]]" item="[[item]]" show-tooltip="[[showTooltip]]" emoji-click="[[onEmojiClick]]" clearable="[[clearable]]">
        </emoji-image>
      </template>
    </div>
  </template>
  <template is="dom-if" if="[[!isVisual(category)]]">
    <template is="dom-if" if="[[hasVariants(data)]]">
      <template is="dom-repeat" items="[[data]]">
        <div class="emoji-button-container">
        <button id="emoji-[[index]]" data-index$="[[index]]" class$="emoji-button [[getEmojiButtonClassName(item)]]" on-mouseenter="showTooltip" on-focus="showTooltip" aria-label="[[getEmojiAriaLabel(item)]]">
          [[getDisplayEmojiForEmoji(item.base.string)]]
        </button>
        <template is="dom-if" if="[[isEmojiVariantVisible(index,shownEmojiVariantIndex)]]">
          <emoji-variants id="emoji-variant-[[index]]" variants="[[item.alternates]]" grouped-tone="[[item.groupedTone]]" grouped-gender="[[item.groupedGender]]" tooltip="[[item.base.name]]">
          </emoji-variants>
        </template>
        </div>
      </template>
    </template>
    <template is="dom-if" if="[[!hasVariants(data)]]">
      <template is="dom-repeat" items="[[data]]">
        <div class="emoji-button-container">
        <button id="emoji-[[index]]" data-index$="[[index]]" class$="emoji-button [[getEmojiButtonClassName(item)]]" on-mouseenter="showTooltip" on-focus="showTooltip" aria-label="[[getEmojiAriaLabel(item)]]">
          [[getDisplayEmojiForEmoji(item.base.string)]]
        </button>
        </div>
      </template>
    </template>
  </template>
  <paper-tooltip id="tooltip" fit-to-visible-bounds offset="8">
    [[focusedEmoji.base.name]]
  </paper-tooltip>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Note - grid-layout and flex-layout names are used directly in CSS.
var EmojiGroupLayoutType;
(function (EmojiGroupLayoutType) {
    EmojiGroupLayoutType["GRID_LAYOUT"] = "grid-layout";
    EmojiGroupLayoutType["FLEX_LAYOUT"] = "flex-layout";
    EmojiGroupLayoutType["TWO_COLUMN_LAYOUT"] = "two-column-layout";
})(EmojiGroupLayoutType || (EmojiGroupLayoutType = {}));
var SideEnum;
(function (SideEnum) {
    SideEnum["LEFT"] = "left";
    SideEnum["RIGHT"] = "right";
})(SideEnum || (SideEnum = {}));
const DEFAULT_CATEGORY_LAYOUTS = {
    [CategoryEnum.EMOJI]: EmojiGroupLayoutType.GRID_LAYOUT,
    [CategoryEnum.EMOTICON]: EmojiGroupLayoutType.FLEX_LAYOUT,
    [CategoryEnum.SYMBOL]: EmojiGroupLayoutType.GRID_LAYOUT,
    [CategoryEnum.GIF]: EmojiGroupLayoutType.TWO_COLUMN_LAYOUT,
};
class EmojiGroupComponent extends PolymerElement {
    static get is() {
        return 'emoji-group';
    }
    static get template() {
        return getTemplate$a();
    }
    static get properties() {
        return {
            data: { type: Array, readonly: true },
            group: { type: String, value: null, readonly: true },
            globalTone: { type: Number, value: null, readonly: true },
            globalGender: { type: Number, value: null, readonly: true },
            preferred: { type: Object, value: () => ({}) },
            clearable: { type: Boolean, value: false },
            category: {
                type: String,
                value: CategoryEnum.EMOJI,
                readonly: true,
            },
            layoutType: {
                type: String,
                value: null,
            },
            showClearRecents: { type: Boolean, value: false },
            focusedEmoji: { type: Object, value: null },
            shownEmojiVariantIndex: { type: Number, value: null },
            isLangEnglish: { type: Boolean, value: false },
            gifSupport: { type: Boolean, value: false },
        };
    }
    constructor() {
        super();
        this.globalTone = null;
        this.globalGender = null;
        // TODO(crbug/1227852): Remove after setting arial label to emoji.
        this.isLangEnglish =
            navigator.languages.some(lang => lang.startsWith('en'));
        // Some methods will be passed down to child elements and thus we need
        // `bind(this)`.
        this.onEmojiClick = this.onEmojiClick.bind(this);
        this.showTooltip = this.showTooltip.bind(this);
    }
    /**
     * Handles the click event for show-clear button which results
     * in showing "clear recently used emojis" button.
     */
    onClearClick(ev) {
        ev.preventDefault();
        ev.stopPropagation();
        this.showClearRecents = true;
    }
    /**
     * Handles the event for clicking on the "clear recently used" button.
     * It makes "show-clear" button disappear and fires an event
     * indicating that the "clear recently used" is clicked.
     */
    onClearRecentsClick(ev) {
        ev.preventDefault();
        ev.stopPropagation();
        this.showClearRecents = false;
        this.dispatchEvent(createCustomEvent(EMOJI_CLEAR_RECENTS_CLICK, { category: this.category }));
    }
    /**
     * Sets and shows tooltips for an emoji button based on a mouse/focus event.
     * By handling the on-focus and on-mouseenter events using this function,
     * one single paper-tool is reused for all emojis in the emoji-group.
     *
     */
    showTooltip(event) {
        // Target must always exist since this is triggered by a mouse/focus on an
        // element.
        const emoji = this.findEmojiOfEmojiButton(event.target);
        // If the event is for an emoji button that is not already
        // focused, then replace the target of paper-tooltip with the new
        // emoji button.
        if (emoji && this.focusedEmoji !== emoji) {
            this.focusedEmoji = emoji;
            // Set the target of paper-tooltip to the focused emoji button.
            // Paper-tooltip will un-listen the events of the previous target and
            // starts listening the events for the focused emoji button to hide and
            // show the tooltip at the right time.
            this.$.tooltip.target = event.target;
            this.$.tooltip.show();
        }
    }
    /**
     * Handles event of clicking on an emoji button. It finds the emoji details
     * for the clicked emoji and fires another event including these the details.
     * Note: Initially, it validates and returns if the event is not for an
     * emoji button.
     *
     */
    onEmojiClick(event) {
        const emoji = this.findEmojiOfEmojiButton(event.target);
        // Ensure target is an emoji button.
        if (!emoji) {
            return;
        }
        // Text-based emoji clicked
        if (emoji.base.string) {
            const text = this.getDisplayEmojiForEmoji(emoji.base.string);
            this.dispatchEvent(createCustomEvent(EMOJI_TEXT_BUTTON_CLICK, {
                name: emoji.base.name,
                category: this.category,
                text,
                baseEmoji: emoji.base.string,
                isVariant: text !== emoji.base.string,
                groupedTone: false,
                groupedGender: false,
                alternates: emoji.alternates ?? [],
            }));
        }
        else {
            if (emoji.base.visualContent) {
                // Visual-based emoji clicked
                this.dispatchEvent(createCustomEvent(EMOJI_IMG_BUTTON_CLICK, {
                    name: emoji.base.name,
                    visualContent: emoji.base.visualContent,
                    category: this.category,
                }));
            }
        }
    }
    onHelpClick() {
        EmojiPickerApiProxyImpl.getInstance().openHelpCentreArticle();
    }
    /**
     * Handles event of opening context menu of an emoji button. Emoji variants
     * are shown as the context menu.
     * Note: Initially, it validates and returns if the event is not for an
     * emoji button.
     */
    onEmojiContextMenu(event) {
        const emoji = this.findEmojiOfEmojiButton(event.target);
        // Ensure target is an emoji button.
        if (!emoji) {
            return;
        }
        event.preventDefault();
        assertInstanceof(event.target, HTMLElement);
        const dataIndex = Number(
        // This assert is safe as this can only be triggered via right click on
        // an html element.
        event.target.getAttribute('data-index'));
        // If the variants of the emoji is already shown, then hide it.
        // Otherwise, show the variants if there are some.
        if (emoji.alternates && emoji.alternates.length &&
            dataIndex !== this.shownEmojiVariantIndex) {
            this.shownEmojiVariantIndex = dataIndex;
        }
        else {
            this.shownEmojiVariantIndex = null;
        }
        // Send event so emoji-picker knows to close other variants.
        // need to defer this until <emoji-variants> is created and sized by
        // Polymer.
        beforeNextRender(this, () => {
            const variants = this.shownEmojiVariantIndex ?
                this.shadowRoot.getElementById(`emoji-variant-${dataIndex}`) ??
                    undefined :
                undefined;
            this.dispatchEvent(createCustomEvent(EMOJI_VARIANTS_SHOWN, {
                owner: this,
                variants: variants,
                baseEmoji: emoji.base.string,
            }));
        });
    }
    /**
     * Returns HTML class attribute of an emoji button.
     */
    getEmojiButtonClassName(emoji) {
        return emoji.alternates && emoji.alternates.length > 0 ? 'has-variants' :
            '';
    }
    /**
     * Returns HTML class attribute of an emoji groups.
     */
    getLayoutClassName(layoutType, category) {
        if (layoutType) {
            return layoutType;
        }
        // If layout type is not provided then choose a default value based
        // on the category.
        return DEFAULT_CATEGORY_LAYOUTS[category] ||
            EmojiGroupLayoutType.GRID_LAYOUT;
    }
    /**
     * Returns the arial label of an emoji.
     */
    getEmojiAriaLabel(emoji) {
        // TODO(crbug/1227852): Just use emoji as the tooltip once ChromeVox can
        // announce them properly.
        if (emoji.base.string) {
            const emojiLabel = this.isLangEnglish ?
                emoji.base.name :
                this.getDisplayEmojiForEmoji(emoji.base.string);
            if (emoji.alternates && emoji.alternates.length > 0) {
                return emojiLabel + ' with variants.';
            }
            else {
                return emojiLabel ?? '';
            }
        }
        return '';
    }
    /**
     * Returns the character to be shown for the emoji.
     */
    getDisplayEmojiForEmoji(baseEmoji) {
        return this.preferred[baseEmoji] || baseEmoji;
    }
    /**
     * Return whether variants of an emoji is visible or not.
     */
    isEmojiVariantVisible(emojiIndex, shownEmojiVariantIndex) {
        return emojiIndex === shownEmojiVariantIndex;
    }
    /**
     * Hides emoji variants if any is visible.
     */
    hideEmojiVariants() {
        this.shownEmojiVariantIndex = null;
    }
    /**
     * Finds emoji details for an HTML button based on the attribute of
     * data-index and event target information.
     * The result will be null if the target is not for a button element
     * or it does not have data-index attribute.
     */
    findEmojiOfEmojiButton(target) {
        const dataIndex = target?.getAttribute('data-index');
        if (!(target?.nodeName === 'BUTTON' || target?.nodeName === 'IMG') ||
            !dataIndex) {
            return undefined;
        }
        return this.data[Number(dataIndex)];
    }
    /**
     * Returns the first emoji button in the group.
     */
    firstEmojiButton() {
        // !. is safe for shadowRoot as it always exists
        const elem = this.shadowRoot.querySelector('.emoji-button, emoji-image');
        if (elem instanceof EmojiImageComponent) {
            return elem.shadowRoot.querySelector('img');
        }
        return elem;
    }
    /**
     * Returns whether the given element group is visual or not.
     */
    isVisual(category) {
        return category === CategoryEnum.GIF;
    }
    hasVariants(data) {
        return data.some(t => !(t.alternates === undefined || t.alternates.length === 0));
    }
    /**
     * Filters visual content to be displayed in the given column based on '
     * the height of the given column.
     */
    filterColumn(data, columnSide, _dataLength) {
        let leftColHeight = 0;
        let rightColHeight = 0;
        const colData = data.filter((item) => {
            if (item.base.visualContent) {
                const contentHeight = item.base.visualContent.previewSize.height *
                    VISUAL_CONTENT_WIDTH / item.base.visualContent.previewSize.width;
                // Filter visual content to be displayed in the given column if it's
                // currently the shortest
                if (leftColHeight <= rightColHeight) {
                    leftColHeight += contentHeight;
                    return columnSide === SideEnum.LEFT;
                }
                else {
                    rightColHeight += contentHeight;
                    return columnSide === SideEnum.RIGHT;
                }
            }
            return false;
        });
        return colData;
    }
    /**
     * Returns the index of a visual based EmojiVariant.
     */
    getIndex(item) {
        return this.data.indexOf(item);
    }
    formatCategory(category) {
        return category === CategoryEnum.GIF ? 'GIF' : category;
    }
    getMoreOptionsAriaLabel(gifSupport) {
        // TODO(b/281609806): Remove this condition once GIF support is fully
        // launched; make sure related node finder in tast test is updated before
        // removing this condition.
        return gifSupport ? 'More options' : undefined;
    }
}
customElements.define(EmojiGroupComponent.is, EmojiGroupComponent);

function getTemplate$9() {
    return html `<!--_html_template_start_--><style>:host{display:flex;height:calc(var(--emoji-size) + 2 * var(--emoji-picker-group-button-padding));justify-content:center;scroll-snap-align:none;width:var(--emoji-size)}#group-button{--cr-icon-button-size:var(--emoji-size);--cr-icon-button-icon-size:var(--emoji-picker-group-button-icon-size, 20px);font-size:20px;margin:0;padding-left:0;padding-right:0;padding-top:var(--emoji-picker-group-button-padding,0);padding-bottom:var(--emoji-picker-group-button-padding,0);border-radius:var(--emoji-picker-group-button-border-radius,0)}#group-button:not(.emoji-group-active){--cr-icon-button-fill-color:var(--emoji-picker-tab-unselected-color)}#group-button.emoji-group-active{--cr-icon-button-fill-color:var(--emoji-picker-tab-selected-color)}cr-icon-button{--cr-icon-button-focus-outline-color:var(--emoji-picker-focus-ring-color)}</style>

<cr-icon-button id="group-button" iron-icon="[[icon]]" class$="[[calculateClassName(active)]]" on-click="handleClick" aria-label="[[name]]" aria-pressed$="[[getAriaPressedState(active)]]" disabled="[[disabled]]" custom-tab-index="[[customTabIndex]]">
</cr-icon-button>
<!--_html_template_end_-->`;
}

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class EmojiGroupButton extends PolymerElement {
    static get is() {
        return 'emoji-group-button';
    }
    static get template() {
        return getTemplate$9();
    }
    static get properties() {
        return {
            active: { type: Boolean, value: false },
            customTabIndex: { type: Number, value: -1 },
            disabled: { type: Boolean, value: false },
            groupId: { type: String, readonly: true },
            icon: { type: String, readonly: true },
            name: { type: String, readonly: true },
        };
    }
    handleClick() {
        this.dispatchEvent(createCustomEvent(GROUP_BUTTON_CLICK, { group: this.groupId }));
    }
    calculateClassName(active) {
        return active ? 'emoji-group-active' : '';
    }
    getAriaPressedState(active) {
        return active ? 'true' : 'false';
    }
}
customElements.define(EmojiGroupButton.is, EmojiGroupButton);

const styleMod$3 = document.createElement('dom-module');
styleMod$3.appendChild(html `
  <template>
    <style>
:host([hidden]),[hidden]{display:none!important}
    </style>
  </template>
`.content);
styleMod$3.register('cr-hidden-style');

const styleMod$2 = document.createElement('dom-module');
styleMod$2.appendChild(html `
  <template>
    <style>
.icon-arrow-back{--cr-icon-image:url(chrome://resources/images/icon_arrow_back.svg)}.icon-arrow-dropdown{--cr-icon-image:url(chrome://resources/images/icon_arrow_dropdown.svg)}.icon-arrow-drop-down-cr23{--cr-icon-image:url(chrome://resources/images/icon_arrow_drop_down_cr23.svg)}.icon-arrow-drop-up-cr23{--cr-icon-image:url(chrome://resources/images/icon_arrow_drop_up_cr23.svg)}.icon-cancel{--cr-icon-image:url(chrome://resources/images/icon_cancel.svg)}.icon-clear{--cr-icon-image:url(chrome://resources/images/icon_clear.svg)}.icon-copy-content{--cr-icon-image:url(chrome://resources/images/icon_copy_content.svg)}.icon-delete-gray{--cr-icon-image:url(chrome://resources/images/icon_delete_gray.svg)}.icon-edit{--cr-icon-image:url(chrome://resources/images/icon_edit.svg)}.icon-file{--cr-icon-image:url(chrome://resources/images/icon_filetype_generic.svg)}.icon-folder-open{--cr-icon-image:url(chrome://resources/images/icon_folder_open.svg)}.icon-picture-delete{--cr-icon-image:url(chrome://resources/images/icon_picture_delete.svg)}.icon-expand-less{--cr-icon-image:url(chrome://resources/images/icon_expand_less.svg)}.icon-expand-more{--cr-icon-image:url(chrome://resources/images/icon_expand_more.svg)}.icon-external{--cr-icon-image:url(chrome://resources/images/open_in_new.svg)}.icon-more-vert{--cr-icon-image:url(chrome://resources/images/icon_more_vert.svg)}.icon-refresh{--cr-icon-image:url(chrome://resources/images/icon_refresh.svg)}.icon-search{--cr-icon-image:url(chrome://resources/images/icon_search.svg)}.icon-settings{--cr-icon-image:url(chrome://resources/images/icon_settings.svg)}.icon-visibility{--cr-icon-image:url(chrome://resources/images/icon_visibility.svg)}.icon-visibility-off{--cr-icon-image:url(chrome://resources/images/icon_visibility_off.svg)}.subpage-arrow{--cr-icon-image:url(chrome://resources/images/arrow_right.svg)}.cr-icon{-webkit-mask-image:var(--cr-icon-image);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--cr-icon-size);background-color:var(--cr-icon-color,var(--google-grey-700));flex-shrink:0;height:var(--cr-icon-ripple-size);margin-inline-end:var(--cr-icon-ripple-margin);margin-inline-start:var(--cr-icon-button-margin-start);user-select:none;width:var(--cr-icon-ripple-size)}:host-context([dir=rtl]) .cr-icon{transform:scaleX(-1)}.cr-icon.no-overlap{margin-inline-end:0;margin-inline-start:0}@media (prefers-color-scheme:dark){.cr-icon{background-color:var(--cr-icon-color,var(--google-grey-500))}}
    </style>
  </template>
`.content);
styleMod$2.register('cr-icons');

const styleMod$1 = document.createElement('dom-module');
styleMod$1.appendChild(html `
  <template>
    <style include="cr-hidden-style cr-icons">
:host,html{--scrollable-border-color:var(--google-grey-300)}@media (prefers-color-scheme:dark){:host,html{--scrollable-border-color:var(--google-grey-700)}}[actionable]{cursor:pointer}.hr{border-top:var(--cr-separator-line)}iron-list.cr-separators>:not([first]){border-top:var(--cr-separator-line)}[scrollable]{border-color:transparent;border-style:solid;border-width:1px 0;overflow-y:auto}[scrollable].is-scrolled{border-top-color:var(--scrollable-border-color)}[scrollable].can-scroll:not(.scrolled-to-bottom){border-bottom-color:var(--scrollable-border-color)}[scrollable] iron-list>:not(.no-outline):focus,[selectable]:focus,[selectable]>:focus{background-color:var(--cr-focused-item-color);outline:0}.scroll-container{display:flex;flex-direction:column;min-height:1px}[selectable]>*{cursor:pointer}.cr-centered-card-container{box-sizing:border-box;display:block;height:inherit;margin:0 auto;max-width:var(--cr-centered-card-max-width);min-width:550px;position:relative;width:calc(100% * var(--cr-centered-card-width-percentage))}.cr-container-shadow{box-shadow:inset 0 5px 6px -3px rgba(0,0,0,.4);height:var(--cr-container-shadow-height);left:0;margin:0 0 var(--cr-container-shadow-margin);opacity:0;pointer-events:none;position:relative;right:0;top:0;transition:opacity .5s;z-index:1}#cr-container-shadow-bottom{margin-bottom:0;margin-top:var(--cr-container-shadow-margin);transform:scaleY(-1)}#cr-container-shadow-bottom.has-shadow,#cr-container-shadow-top.has-shadow{opacity:var(--cr-container-shadow-max-opacity)}.cr-row{align-items:center;border-top:var(--cr-separator-line);display:flex;min-height:var(--cr-section-min-height);padding:0 var(--cr-section-padding)}.cr-row.continuation,.cr-row.first{border-top:none}.cr-row-gap{padding-inline-start:16px}.cr-button-gap{margin-inline-start:8px}paper-tooltip::part(tooltip){border-radius:var(--paper-tooltip-border-radius,2px);font-size:92.31%;font-weight:500;max-width:330px;min-width:var(--paper-tooltip-min-width,200px);padding:var(--paper-tooltip-padding,10px 8px)}.cr-padded-text{padding-block-end:var(--cr-section-vertical-padding);padding-block-start:var(--cr-section-vertical-padding)}.cr-title-text{color:var(--cr-title-text-color);font-size:107.6923%;font-weight:500}.cr-secondary-text{color:var(--cr-secondary-text-color);font-weight:400}.cr-form-field-label{color:var(--cr-form-field-label-color);display:block;font-size:var(--cr-form-field-label-font-size);font-weight:500;letter-spacing:.4px;line-height:var(--cr-form-field-label-line-height);margin-bottom:8px}.cr-vertical-tab{align-items:center;display:flex}.cr-vertical-tab::before{border-radius:0 3px 3px 0;content:'';display:block;flex-shrink:0;height:var(--cr-vertical-tab-height,100%);width:4px}.cr-vertical-tab.selected::before{background:var(--cr-vertical-tab-selected-color,var(--cr-checked-color))}:host-context([dir=rtl]) .cr-vertical-tab::before{transform:scaleX(-1)}.iph-anchor-highlight{background-color:var(--cr-iph-anchor-highlight-color)}
    </style>
  </template>
`.content);
styleMod$1.register('cr-shared-style');

const styleMod = document.createElement('dom-module');
styleMod.appendChild(html `
  <template>
    <style>
:host{--cr-input-background-color:var(--google-grey-100);--cr-input-color:var(--cr-primary-text-color);--cr-input-error-color:var(--google-red-600);--cr-input-focus-color:var(--google-blue-600);display:block;outline:0}:host-context([chrome-refresh-2023]):host{--cr-input-background-color:var(--color-textfield-filled-background,
            var(--cr-fallback-color-surface-variant));--cr-input-border-bottom:1px solid var(--color-textfield-filled-underline,
                var(--cr-fallback-color-outline));--cr-input-border-radius:8px 8px 0 0;--cr-input-error-color:var(--color-textfield-filled-error,
            var(--cr-fallback-color-error));--cr-input-focus-color:var(--color-textfield-filled-underline-focused,
            var(--cr-fallback-color-primary));--cr-input-hover-background-color:var(--cr-hover-background-color);--cr-input-label-color:var(--color-textfield-foreground-label,
            var(--cr-fallback-color-on-surface-subtle));--cr-input-padding-bottom:10px;--cr-input-padding-end:10px;--cr-input-padding-start:10px;--cr-input-padding-top:10px;--cr-input-placeholder-color:var(--color-textfield-foreground-placeholder,
                var(--cr-fallback-on-surface-subtle));isolation:isolate}:host-context([chrome-refresh-2023]):host([readonly]){--cr-input-border-radius:8px 8px}@media (prefers-color-scheme:dark){:host{--cr-input-background-color:rgba(0, 0, 0, .3);--cr-input-error-color:var(--google-red-300);--cr-input-focus-color:var(--google-blue-300)}}:host-context(html:not([chrome-refresh-2023])):host([focused_]:not([readonly]):not([invalid])) #label{color:var(--cr-input-focus-color)}:host-context([chrome-refresh-2023]) #label{color:var(--cr-input-label-color);font-size:11px;line-height:16px}:host-context([chrome-refresh-2023]):host([focused_]:not([readonly]):not([invalid])) #label{color:var(--cr-input-focus-label-color,var(--cr-input-label-color))}#input-container{border-radius:var(--cr-input-border-radius,4px);overflow:hidden;position:relative;width:var(--cr-input-width,100%)}:host-context([chrome-refresh-2023]):host([focused_]) #input-container{outline:var(--cr-input-focus-outline,none)}#inner-input-container{background-color:var(--cr-input-background-color);box-sizing:border-box;padding:0}:host-context([chrome-refresh-2023]) #inner-input-content ::slotted(*){--cr-icon-button-fill-color:var(--color-textfield-foreground-icon,
            var(--cr-fallback-color-on-surface-subtle));--cr-icon-button-icon-size:16px;--cr-icon-button-size:24px;--cr-icon-button-margin-start:0;--cr-icon-color:var(--color-textfield-foreground-icon,
            var(--cr-fallback-color-on-surface-subtle))}:host-context([chrome-refresh-2023]) #inner-input-content ::slotted([slot=inline-prefix]){--cr-icon-button-margin-start:-8px}:host-context([chrome-refresh-2023]) #inner-input-content ::slotted([slot=inline-suffix]){--cr-icon-button-margin-end:-4px}:host-context([chrome-refresh-2023]):host([invalid]) #inner-input-content ::slotted(*){--cr-icon-color:var(--cr-input-error-color);--cr-icon-button-fill-color:var(--cr-input-error-color)}#hover-layer{display:none}:host-context([chrome-refresh-2023]) #hover-layer{background-color:var(--cr-input-hover-background-color);inset:0;pointer-events:none;position:absolute;z-index:0}:host-context([chrome-refresh-2023]):host(:not([readonly]):not([disabled])) #input-container:hover #hover-layer{display:block}#input{-webkit-appearance:none;background-color:transparent;border:none;box-sizing:border-box;caret-color:var(--cr-input-focus-color);color:var(--cr-input-color);font-family:inherit;font-size:inherit;font-weight:inherit;line-height:inherit;min-height:var(--cr-input-min-height,auto);outline:0;padding-bottom:var(--cr-input-padding-bottom,6px);padding-inline-end:var(--cr-input-padding-end,8px);padding-inline-start:var(--cr-input-padding-start,8px);padding-top:var(--cr-input-padding-top,6px);text-align:inherit;text-overflow:ellipsis;width:100%}:host-context([chrome-refresh-2023]) #input{font-size:12px;line-height:16px;padding:0}:host-context([chrome-refresh-2023]) #inner-input-content{padding-bottom:var(--cr-input-padding-bottom);padding-inline-end:var(--cr-input-padding-end);padding-inline-start:var(--cr-input-padding-start);padding-top:var(--cr-input-padding-top)}#underline{border-bottom:2px solid var(--cr-input-focus-color);border-radius:var(--cr-input-underline-border-radius,0);bottom:0;box-sizing:border-box;display:var(--cr-input-underline-display);height:var(--cr-input-underline-height,0);left:0;margin:auto;opacity:0;position:absolute;right:0;transition:opacity 120ms ease-out,width 0s linear 180ms;width:0}:host([focused_]) #underline,:host([force-underline]) #underline,:host([invalid]) #underline{opacity:1;transition:opacity 120ms ease-in,width 180ms ease-out;width:100%}#underline-base{display:none}:host-context([chrome-refresh-2023]):host([readonly]) #underline{display:none}:host-context([chrome-refresh-2023]):host(:not([readonly])) #underline-base{border-bottom:var(--cr-input-border-bottom);bottom:0;display:block;left:0;position:absolute;right:0}:host-context([chrome-refresh-2023]):host([disabled]){color:var(--color-textfield-foreground-disabled,var(--cr-fallback-color-disabled-foreground));--cr-input-border-bottom:1px solid currentColor;--cr-input-placeholder-color:currentColor;--cr-input-color:currentColor;--cr-input-background-color:var(--color-textfield-background-disabled,
            var(--cr-fallback-color-disabled-background))}:host-context([chrome-refresh-2023]):host([disabled]) #inner-input-content ::slotted(*){--cr-icon-color:currentColor;--cr-icon-button-fill-color:currentColor}
    </style>
  </template>
`.content);
styleMod.register('cr-input-style');

function getTemplate$8() {
    return html `<!--_html_template_start_-->    <style include="cr-hidden-style cr-input-style cr-shared-style">:host([disabled]) :-webkit-any(#label,#error,#input-container){opacity:var(--cr-disabled-opacity);pointer-events:none}:host-context([chrome-refresh-2023]):host([disabled]) :is(#label,#error,#input-container){opacity:1}:host ::slotted(cr-button[slot=suffix]){margin-inline-start:var(--cr-button-edge-spacing)!important}:host([invalid]) #label{color:var(--cr-input-error-color)}#input{border-bottom:var(--cr-input-border-bottom,none);letter-spacing:var(--cr-input-letter-spacing)}:host-context([chrome-refresh-2023]) #input{border-bottom:none}:host-context([chrome-refresh-2023]) #input-container{border:var(--cr-input-border,none)}#input::placeholder{color:var(--cr-input-placeholder-color,var(--cr-secondary-text-color));letter-spacing:var(--cr-input-placeholder-letter-spacing)}:host([invalid]) #input{caret-color:var(--cr-input-error-color)}:host([readonly]) #input{opacity:var(--cr-input-readonly-opacity,.6)}:host([invalid]) #underline{border-color:var(--cr-input-error-color)}#error{color:var(--cr-input-error-color);display:var(--cr-input-error-display,block);font-size:var(--cr-form-field-label-font-size);height:var(--cr-form-field-label-height);line-height:var(--cr-form-field-label-line-height);margin:8px 0;visibility:hidden;white-space:var(--cr-input-error-white-space)}:host-context([chrome-refresh-2023]) #error{font-size:11px;line-height:16px;margin:4px 10px}:host([invalid]) #error{visibility:visible}#inner-input-content,#row-container{align-items:center;display:flex;justify-content:space-between;position:relative}:host-context([chrome-refresh-2023]) #inner-input-content{gap:4px;height:16px;z-index:1}#input[type=search]::-webkit-search-cancel-button{display:none}:host-context([dir=rtl]) #input[type=url]{text-align:right}#input[type=url]{direction:ltr}</style>
    <div id="label" class="cr-form-field-label" hidden="[[!label]]" aria-hidden="true">
      [[label]]
    </div>
    <div id="row-container" part="row-container">
      <div id="input-container">
        <div id="inner-input-container">
          <div id="hover-layer"></div>
          <div id="inner-input-content">
            <slot name="inline-prefix"></slot>
            
            <input id="input" disabled="[[disabled]]" autofocus="[[autofocus]]" value="{{value::input}}" tabindex$="[[inputTabindex]]" type="[[type]]" readonly$="[[readonly]]" maxlength$="[[maxlength]]" pattern$="[[pattern]]" required="[[required]]" minlength$="[[minlength]]" inputmode$="[[inputmode]]" aria-description$="[[ariaDescription]]" aria-label$="[[getAriaLabel_(ariaLabel, label, placeholder)]]" aria-invalid$="[[getAriaInvalid_(invalid)]]" max="[[max]]" min="[[min]]" on-focus="onInputFocus_" on-blur="onInputBlur_" on-change="onInputChange_" part="input" autocomplete="off">
            <slot name="inline-suffix"></slot>
          </div>
        </div>
        <div id="underline-base"></div>
        <div id="underline"></div>
      </div>
      <slot name="suffix"></slot>
    </div>
    <div id="error" aria-live="assertive">[[displayErrorMessage_]]</div>
<!--_html_template_end_-->`;
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Input types supported by cr-input.
 */
const SUPPORTED_INPUT_TYPES = new Set([
    'number',
    'password',
    'search',
    'text',
    'url',
]);
class CrInputElement extends PolymerElement {
    static get is() {
        return 'cr-input';
    }
    static get template() {
        return getTemplate$8();
    }
    static get properties() {
        return {
            ariaDescription: {
                type: String,
            },
            ariaLabel: {
                type: String,
                value: '',
            },
            autofocus: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            autoValidate: Boolean,
            disabled: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            errorMessage: {
                type: String,
                value: '',
                observer: 'onInvalidOrErrorMessageChanged_',
            },
            displayErrorMessage_: {
                type: String,
                value: '',
            },
            /**
             * This is strictly used internally for styling, do not attempt to use
             * this to set focus.
             */
            focused_: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            invalid: {
                type: Boolean,
                value: false,
                notify: true,
                reflectToAttribute: true,
                observer: 'onInvalidOrErrorMessageChanged_',
            },
            max: {
                type: Number,
                reflectToAttribute: true,
            },
            min: {
                type: Number,
                reflectToAttribute: true,
            },
            maxlength: {
                type: Number,
                reflectToAttribute: true,
            },
            minlength: {
                type: Number,
                reflectToAttribute: true,
            },
            pattern: {
                type: String,
                reflectToAttribute: true,
            },
            inputmode: String,
            label: {
                type: String,
                value: '',
            },
            placeholder: {
                type: String,
                value: null,
                observer: 'placeholderChanged_',
            },
            readonly: {
                type: Boolean,
                reflectToAttribute: true,
            },
            required: {
                type: Boolean,
                reflectToAttribute: true,
            },
            inputTabindex: {
                type: Number,
                value: 0,
                observer: 'onInputTabindexChanged_',
            },
            type: {
                type: String,
                value: 'text',
                observer: 'onTypeChanged_',
            },
            value: {
                type: String,
                value: '',
                notify: true,
                observer: 'onValueChanged_',
            },
        };
    }
    ready() {
        super.ready();
        // Use inputTabindex instead.
        assert(!this.hasAttribute('tabindex'));
    }
    onInputTabindexChanged_() {
        // CrInput only supports 0 or -1 values for the input's tabindex to allow
        // having the input in tab order or not. Values greater than 0 will not work
        // as the shadow root encapsulates tabindices.
        assert(this.inputTabindex === 0 || this.inputTabindex === -1);
    }
    onTypeChanged_() {
        // Check that the 'type' is one of the supported types.
        assert(SUPPORTED_INPUT_TYPES.has(this.type));
    }
    get inputElement() {
        return this.$.input;
    }
    /**
     * Returns the aria label to be used with the input element.
     */
    getAriaLabel_(ariaLabel, label, placeholder) {
        return ariaLabel || label || placeholder;
    }
    /**
     * Returns 'true' or 'false' as a string for the aria-invalid attribute.
     */
    getAriaInvalid_(invalid) {
        return invalid ? 'true' : 'false';
    }
    onInvalidOrErrorMessageChanged_() {
        this.displayErrorMessage_ = this.invalid ? this.errorMessage : '';
        // On VoiceOver role="alert" is not consistently announced when its content
        // changes. Adding and removing the |role| attribute every time there
        // is an error, triggers VoiceOver to consistently announce.
        const ERROR_ID = 'error';
        const errorElement = this.shadowRoot.querySelector(`#${ERROR_ID}`);
        assert(errorElement);
        if (this.invalid) {
            errorElement.setAttribute('role', 'alert');
            this.inputElement.setAttribute('aria-errormessage', ERROR_ID);
        }
        else {
            errorElement.removeAttribute('role');
            this.inputElement.removeAttribute('aria-errormessage');
        }
    }
    /**
     * This is necessary instead of doing <input placeholder="[[placeholder]]">
     * because if this.placeholder is set to a truthy value then removed, it
     * would show "null" as placeholder.
     */
    placeholderChanged_() {
        if (this.placeholder || this.placeholder === '') {
            this.inputElement.setAttribute('placeholder', this.placeholder);
        }
        else {
            this.inputElement.removeAttribute('placeholder');
        }
    }
    focus() {
        this.focusInput();
    }
    /**
     * Focuses the input element.
     * TODO(crbug.com/882612): Replace this with focus() after resolving the text
     * selection issue described in onFocus_().
     * @return Whether the <input> element was focused.
     */
    focusInput() {
        if (this.shadowRoot.activeElement === this.inputElement) {
            return false;
        }
        this.inputElement.focus();
        return true;
    }
    onValueChanged_(newValue, oldValue) {
        if (!newValue && !oldValue) {
            return;
        }
        if (this.autoValidate) {
            this.validate();
        }
    }
    /**
     * 'change' event fires when <input> value changes and user presses 'Enter'.
     * This function helps propagate it to host since change events don't
     * propagate across Shadow DOM boundary by default.
     */
    onInputChange_(e) {
        this.dispatchEvent(new CustomEvent('change', { bubbles: true, composed: true, detail: { sourceEvent: e } }));
    }
    onInputFocus_() {
        this.focused_ = true;
    }
    onInputBlur_() {
        this.focused_ = false;
    }
    /**
     * Selects the text within the input. If no parameters are passed, it will
     * select the entire string. Either no params or both params should be passed.
     * Publicly, this function should be used instead of inputElement.select() or
     * manipulating inputElement.selectionStart/selectionEnd because the order of
     * execution between focus() and select() is sensitive.
     */
    select(start, end) {
        this.inputElement.focus();
        if (start !== undefined && end !== undefined) {
            this.inputElement.setSelectionRange(start, end);
        }
        else {
            // Can't just pass one param.
            assert(start === undefined && end === undefined);
            this.inputElement.select();
        }
    }
    validate() {
        this.invalid = !this.inputElement.checkValidity();
        return !this.invalid;
    }
}
customElements.define(CrInputElement.is, CrInputElement);

const template = html `
<iron-iconset-svg name="cr20" size="20">
  <svg>
    <defs>
      
      <g id="block">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM2 10C2 5.58 5.58 2 10 2C11.85 2 13.55 2.63 14.9 3.69L3.69 14.9C2.63 13.55 2 11.85 2 10ZM5.1 16.31C6.45 17.37 8.15 18 10 18C14.42 18 18 14.42 18 10C18 8.15 17.37 6.45 16.31 5.1L5.1 16.31Z">
        </path>
      </g>
      <g id="cloud-off">
        <path d="M16 18.125L13.875 16H5C3.88889 16 2.94444 15.6111 2.16667 14.8333C1.38889 14.0556 1 13.1111 1 12C1 10.9444 1.36111 10.0347 2.08333 9.27083C2.80556 8.50694 3.6875 8.09028 4.72917 8.02083C4.77083 7.86805 4.8125 7.72222 4.85417 7.58333C4.90972 7.44444 4.97222 7.30555 5.04167 7.16667L1.875 4L2.9375 2.9375L17.0625 17.0625L16 18.125ZM5 14.5H12.375L6.20833 8.33333C6.15278 8.51389 6.09722 8.70139 6.04167 8.89583C6 9.07639 5.95139 9.25694 5.89583 9.4375L4.83333 9.52083C4.16667 9.57639 3.61111 9.84028 3.16667 10.3125C2.72222 10.7708 2.5 11.3333 2.5 12C2.5 12.6944 2.74306 13.2847 3.22917 13.7708C3.71528 14.2569 4.30556 14.5 5 14.5ZM17.5 15.375L16.3958 14.2917C16.7153 14.125 16.9792 13.8819 17.1875 13.5625C17.3958 13.2431 17.5 12.8889 17.5 12.5C17.5 11.9444 17.3056 11.4722 16.9167 11.0833C16.5278 10.6944 16.0556 10.5 15.5 10.5H14.125L14 9.14583C13.9028 8.11806 13.4722 7.25694 12.7083 6.5625C11.9444 5.85417 11.0417 5.5 10 5.5C9.65278 5.5 9.31944 5.54167 9 5.625C8.69444 5.70833 8.39583 5.82639 8.10417 5.97917L7.02083 4.89583C7.46528 4.61806 7.93056 4.40278 8.41667 4.25C8.91667 4.08333 9.44444 4 10 4C11.4306 4 12.6736 4.48611 13.7292 5.45833C14.7847 6.41667 15.375 7.59722 15.5 9C16.4722 9 17.2986 9.34028 17.9792 10.0208C18.6597 10.7014 19 11.5278 19 12.5C19 13.0972 18.8611 13.6458 18.5833 14.1458C18.3194 14.6458 17.9583 15.0556 17.5 15.375Z">
        </path>
      </g>
      <g id="domain">
        <path d="M2,3 L2,17 L11.8267655,17 L13.7904799,17 L18,17 L18,7 L12,7 L12,3 L2,3 Z M8,13 L10,13 L10,15 L8,15 L8,13 Z M4,13 L6,13 L6,15 L4,15 L4,13 Z M8,9 L10,9 L10,11 L8,11 L8,9 Z M4,9 L6,9 L6,11 L4,11 L4,9 Z M12,9 L16,9 L16,15 L12,15 L12,9 Z M12,11 L14,11 L14,13 L12,13 L12,11 Z M8,5 L10,5 L10,7 L8,7 L8,5 Z M4,5 L6,5 L6,7 L4,7 L4,5 Z">
        </path>
      </g>
      <g id="kite">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.6327 8.00094L10.3199 2L16 8.00094L10.1848 16.8673C10.0995 16.9873 10.0071 17.1074 9.90047 17.2199C9.42417 17.7225 8.79147 18 8.11611 18C7.44076 18 6.80806 17.7225 6.33175 17.2199C5.85545 16.7173 5.59242 16.0497 5.59242 15.3371C5.59242 14.977 5.46445 14.647 5.22275 14.3919C4.98104 14.1369 4.66825 14.0019 4.32701 14.0019H4V12.6667H4.32701C5.00237 12.6667 5.63507 12.9442 6.11137 13.4468C6.58768 13.9494 6.85071 14.617 6.85071 15.3296C6.85071 15.6896 6.97867 16.0197 7.22038 16.2747C7.46209 16.5298 7.77488 16.6648 8.11611 16.6648C8.45735 16.6648 8.77014 16.5223 9.01185 16.2747C9.02396 16.2601 9.03607 16.246 9.04808 16.2319C9.08541 16.1883 9.12176 16.1458 9.15403 16.0947L9.55213 15.4946L4.6327 8.00094ZM10.3199 13.9371L6.53802 8.17116L10.3199 4.1814L14.0963 8.17103L10.3199 13.9371Z">
        </path>
      </g>
      <g id="menu">
        <path d="M2 4h16v2H2zM2 9h16v2H2zM2 14h16v2H2z"></path>
      </g>
      
        <g id="banner-warning">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.13177 1.50386C9.51566 0.832046 10.4844 0.832046 10.8683 1.50386L18.8683 15.5039C19.2492 16.1705 18.7678 17 18 17H2.00001C1.23219 17 0.750823 16.1705 1.13177 15.5039L9.13177 1.50386ZM10 4.01556L3.72321 15H16.2768L10 4.01556ZM9 11H11V7H9V11ZM11 14H9V12H11V14Z">
          </path>
        </g>
        <g id="warning">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.13177 1.50386C9.51566 0.832046 10.4844 0.832046 10.8683 1.50386L18.8683 15.5039C19.2492 16.1705 18.7678 17 18 17H2.00001C1.23219 17 0.750823 16.1705 1.13177 15.5039L9.13177 1.50386ZM10 4.01556L3.72321 15H16.2768L10 4.01556ZM9 11H11V7H9V11ZM11 14H9V12H11V14Z">
          </path>
        </g>
      
  </defs></svg>
</iron-iconset-svg>


<iron-iconset-svg name="cr" size="24">
  <svg>
    <defs>
      
      <g id="account-child-invert" viewBox="0 0 48 48">
        <path d="M24 4c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6z"></path>
        <path fill="none" d="M0 0h48v48H0V0z"></path>
        <circle fill="none" cx="24" cy="26" r="4"></circle>
        <path d="M24 18c-6.16 0-13 3.12-13 7.23v11.54c0 2.32 2.19 4.33 5.2 5.63 2.32 1 5.12 1.59 7.8 1.59.66 0 1.33-.06 2-.14v-5.2c-.67.08-1.34.14-2 .14-2.63 0-5.39-.57-7.68-1.55.67-2.12 4.34-3.65 7.68-3.65.86 0 1.75.11 2.6.29 2.79.62 5.2 2.15 5.2 4.04v4.47c3.01-1.31 5.2-3.31 5.2-5.63V25.23C37 21.12 30.16 18 24 18zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z">
        </path>
      </g>
      <g id="add">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
      </g>
      <g id="arrow-back">
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z">
        </path>
      </g>
      <g id="arrow-drop-up">
        <path d="M7 14l5-5 5 5z"></path>
      </g>
      <g id="arrow-drop-down">
        <path d="M7 10l5 5 5-5z"></path>
      </g>
      <g id="arrow-forward">
        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
        </path>
      </g>
      <g id="arrow-right">
        <path d="M10 7l5 5-5 5z"></path>
      </g>
      
        <g id="bluetooth">
          <path d="M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z">
          </path>
        </g>
        <g id="camera-alt">
          <circle cx="12" cy="12" r="3.2"></circle>
          <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z">
          </path>
        </g>
        <g id="work">
          <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z">
          </path>
        </g>
      
      <g id="cancel">
        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z">
        </path>
      </g>
      <g id="check">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
      </g>
      <g id="check-circle">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z">
        </path>
      </g>
      <g id="chevron-left">
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
      </g>
      <g id="chevron-right">
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
      </g>
      <g id="clear">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
        </path>
      </g>
      <g id="close">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
        </path>
      </g>
      <g id="computer">
        <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z">
        </path>
      </g>
      <g id="create">
        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z">
        </path>
      </g>
      <g id="delete">
        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z">
        </path>
      </g>
      <g id="domain">
        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z">
        </path>
      </g>
      <g id="error">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z">
        </path>
      </g>
      <g id="error-outline">
        <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z">
        </path>
      </g>
      <g id="expand-less">
        <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
      </g>
      <g id="expand-more">
        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
      </g>
      <g id="extension">
        <path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z">
        </path>
      </g>
      <g id="file-download">
        <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path>
      </g>
      
        <g id="folder-filled">
          <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z">
          </path>
        </g>
      
      <g id="fullscreen">
        <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z">
        </path>
      </g>
      <g id="group">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z">
        </path>
      </g>
      <g id="help-outline">
        <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
        </path>
      </g>
      <g id="history">
        <path d="M12.945312 22.75 C 10.320312 22.75 8.074219 21.839844 6.207031 20.019531 C 4.335938 18.199219 3.359375 15.972656 3.269531 13.34375 L 5.089844 13.34375 C 5.175781 15.472656 5.972656 17.273438 7.480469 18.742188 C 8.988281 20.210938 10.808594 20.945312 12.945312 20.945312 C 15.179688 20.945312 17.070312 20.164062 18.621094 18.601562 C 20.167969 17.039062 20.945312 15.144531 20.945312 12.910156 C 20.945312 10.714844 20.164062 8.855469 18.601562 7.335938 C 17.039062 5.816406 15.15625 5.054688 12.945312 5.054688 C 11.710938 5.054688 10.554688 5.339844 9.480469 5.902344 C 8.402344 6.46875 7.476562 7.226562 6.699219 8.179688 L 9.585938 8.179688 L 9.585938 9.984375 L 3.648438 9.984375 L 3.648438 4.0625 L 5.453125 4.0625 L 5.453125 6.824219 C 6.386719 5.707031 7.503906 4.828125 8.804688 4.199219 C 10.109375 3.566406 11.488281 3.25 12.945312 3.25 C 14.300781 3.25 15.570312 3.503906 16.761719 4.011719 C 17.949219 4.519531 18.988281 5.214844 19.875 6.089844 C 20.761719 6.964844 21.464844 7.992188 21.976562 9.167969 C 22.492188 10.34375 22.75 11.609375 22.75 12.964844 C 22.75 14.316406 22.492188 15.589844 21.976562 16.777344 C 21.464844 17.964844 20.761719 19.003906 19.875 19.882812 C 18.988281 20.765625 17.949219 21.464844 16.761719 21.976562 C 15.570312 22.492188 14.300781 22.75 12.945312 22.75 Z M 16.269531 17.460938 L 12.117188 13.34375 L 12.117188 7.527344 L 13.921875 7.527344 L 13.921875 12.601562 L 17.550781 16.179688 Z M 16.269531 17.460938">
        </path>
      </g>
      <g id="info">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z">
        </path>
      </g>
      <g id="info-outline">
        <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z">
        </path>
      </g>
      <g id="insert-drive-file">
        <path d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z">
        </path>
      </g>
      <g id="location-on">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z">
        </path>
      </g>
      <g id="mic">
        <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z">
        </path>
      </g>
      <g id="more-vert">
        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z">
        </path>
      </g>
      <g id="open-in-new">
        <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z">
        </path>
      </g>
      <g id="person">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z">
        </path>
      </g>
      <g id="phonelink">
        <path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z">
        </path>
      </g>
      <g id="print">
        <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z">
        </path>
      </g>
      <g id="schedule">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z">
        </path>
      </g>
      <g id="search">
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
        </path>
      </g>
      <g id="security">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z">
        </path>
      </g>
      
        <g id="sim-card-alert">
          <path d="M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 15h-2v-2h2v2zm0-4h-2V8h2v5z">
          </path>
        </g>
        <g id="sim-lock">
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z">
          </path>
        </g>
        <g id="sms-connect">
          <path d="M20,2C21.1,2 22,2.9 22,4L22,16C22,17.1 21.1,18 20,18L6,18L2,22L2.01,4C2.01,2.9 2.9,2 4,2L20,2ZM8,8L4,12L8,16L8,13L14,13L14,11L8,11L8,8ZM19.666,7.872L16.038,4.372L16.038,6.997L10,6.997L10,9L16.038,9L16.038,11.372L19.666,7.872Z">
          </path>
        </g>
      
      
      <g id="settings_icon">
        <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z">
        </path>
      </g>
      <g id="star">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
        </path>
      </g>
      <g id="sync">
        <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z">
        </path>
      </g>
      <g id="thumbs-down">
        <path d="M6 3h11v13l-7 7-1.25-1.25a1.454 1.454 0 0 1-.3-.475c-.067-.2-.1-.392-.1-.575v-.35L9.45 16H3c-.533 0-1-.2-1.4-.6-.4-.4-.6-.867-.6-1.4v-2c0-.117.017-.242.05-.375s.067-.258.1-.375l3-7.05c.15-.333.4-.617.75-.85C5.25 3.117 5.617 3 6 3Zm9 2H6l-3 7v2h9l-1.35 5.5L15 15.15V5Zm0 10.15V5v10.15Zm2 .85v-2h3V5h-3V3h5v13h-5Z">
        </path>
      </g>
      <g id="thumbs-down-filled">
        <path d="M6 3h10v13l-7 7-1.25-1.25a1.336 1.336 0 0 1-.29-.477 1.66 1.66 0 0 1-.108-.574v-.347L8.449 16H3c-.535 0-1-.2-1.398-.602C1.199 15 1 14.535 1 14v-2c0-.117.012-.242.04-.375.022-.133.062-.258.108-.375l3-7.05c.153-.333.403-.618.75-.848A1.957 1.957 0 0 1 6 3Zm12 13V3h4v13Zm0 0">
        </path>
      </g>
      <g id="thumbs-up">
        <path d="M18 21H7V8l7-7 1.25 1.25c.117.117.208.275.275.475.083.2.125.392.125.575v.35L14.55 8H21c.533 0 1 .2 1.4.6.4.4.6.867.6 1.4v2c0 .117-.017.242-.05.375s-.067.258-.1.375l-3 7.05c-.15.333-.4.617-.75.85-.35.233-.717.35-1.1.35Zm-9-2h9l3-7v-2h-9l1.35-5.5L9 8.85V19ZM9 8.85V19 8.85ZM7 8v2H4v9h3v2H2V8h5Z">
        </path>
      </g>
      <g id="thumbs-up-filled">
        <path d="M18 21H8V8l7-7 1.25 1.25c.117.117.21.273.29.477.073.199.108.39.108.574v.347L15.551 8H21c.535 0 1 .2 1.398.602C22.801 9 23 9.465 23 10v2c0 .117-.012.242-.04.375a1.897 1.897 0 0 1-.108.375l-3 7.05a2.037 2.037 0 0 1-.75.848A1.957 1.957 0 0 1 18 21ZM6 8v13H2V8Zm0 0">
      </path></g>
      <g id="videocam">
        <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z">
        </path>
      </g>
      <g id="warning">
        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path>
      </g>
    </defs>
  </svg>
</iron-iconset-svg>
`;
document.head.appendChild(template.content);

function getTemplate$7() {
    return html `<!--_html_template_start_-->    <style include="cr-shared-style cr-input-style">:host{display:flex;user-select:none;--cr-search-field-clear-icon-fill:var(--google-grey-700);--cr-search-field-clear-icon-margin-end:-4px;--cr-search-field-input-border-bottom:1px solid var(--cr-secondary-text-color)}#searchIcon{align-self:center;display:var(--cr-search-field-search-icon-display,inherit);height:16px;padding:4px;vertical-align:middle;width:16px}#searchIconInline{--iron-icon-fill-color:var(--cr-search-field-search-icon-fill, inherit);display:var(--cr-search-field-search-icon-inline-display,none);margin-inline-start:var(--cr-search-field-search-icon-inline-margin-start,0)}#searchInput{--cr-input-background-color:transparent;--cr-input-border-bottom:var(--cr-search-field-input-border-bottom);--cr-input-border-radius:0;--cr-input-error-display:none;--cr-input-min-height:var(--cr-search-field-input-min-height, 24px);--cr-input-padding-end:0;--cr-input-padding-start:var(--cr-search-field-input-padding-start, 0);--cr-input-padding-bottom:var(--cr-search-field-input-padding-bottom, 2px);--cr-input-padding-top:var(--cr-search-field-input-padding-top, 2px);--cr-input-placeholder-color:var(--cr-search-field-placeholder-color);--cr-input-underline-display:var(--cr-search-field-underline-display);--cr-input-underline-border-radius:var(--cr-search-field-input-underline-border-radius, 0);--cr-input-underline-height:var(--cr-search-field-input-underline-height, 0);align-self:stretch;color:var(--cr-primary-text-color);display:block;font-size:92.3076923%;width:var(--cr-search-field-input-width,160px)}:host([has-search-text]) #searchInput{--cr-input-padding-end:calc(24px +
          var(--cr-search-field-clear-icon-margin-end))}#clearSearch{--cr-icon-button-fill-color:var(--cr-search-field-clear-icon-fill);--cr-icon-button-icon-size:var(--cr-search-field-clear-icon-size, 16px);--cr-icon-button-size:var(--cr-search-field-clear-button-size, 24px);margin-inline-end:var(--cr-search-field-clear-icon-margin-end);margin-inline-start:4px;position:absolute;right:0}:host-context([chrome-refresh-2023]) #clearSearch{z-index:1}:host-context([dir=rtl]) #clearSearch{left:0;right:auto}</style>
    <iron-icon id="searchIcon" icon="cr:search" part="searchIcon"></iron-icon>
    <cr-input id="searchInput" part="searchInput" on-search="onSearchTermSearch" on-input="onSearchTermInput" aria-label$="[[label]]" type="search" autofocus="[[autofocus]]" placeholder="[[label]]" spellcheck="false">
      <iron-icon id="searchIconInline" slot="inline-prefix" icon="cr:search"></iron-icon>
      <cr-icon-button id="clearSearch" class="icon-cancel" hidden$="[[!hasSearchText]]" slot="suffix" on-click="onTapClear_" title="[[clearLabel]]">
      </cr-icon-button>
    </cr-input>
<!--_html_template_end_-->`;
}

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Helper functions for implementing an incremental search field. See
 * <settings-subpage-search> for a simple implementation.
 */
const CrSearchFieldMixin = dedupingMixin((superClass) => {
    class CrSearchFieldMixin extends superClass {
        constructor() {
            super(...arguments);
            this.effectiveValue_ = '';
            this.searchDelayTimer_ = -1;
        }
        static get properties() {
            return {
                // Prompt text to display in the search field.
                label: {
                    type: String,
                    value: '',
                },
                // Tooltip to display on the clear search button.
                clearLabel: {
                    type: String,
                    value: '',
                },
                hasSearchText: {
                    type: Boolean,
                    reflectToAttribute: true,
                    value: false,
                },
            };
        }
        /**
         * @return The input field element the behavior should use.
         */
        getSearchInput() {
            assertNotReached();
        }
        /**
         * @return The value of the search field.
         */
        getValue() {
            return this.getSearchInput().value;
        }
        fire_(eventName, detail) {
            this.dispatchEvent(new CustomEvent(eventName, { bubbles: true, composed: true, detail }));
        }
        /**
         * Sets the value of the search field.
         * @param noEvent Whether to prevent a 'search-changed' event
         *     firing for this change.
         */
        setValue(value, noEvent) {
            const updated = this.updateEffectiveValue_(value);
            this.getSearchInput().value = this.effectiveValue_;
            if (!updated) {
                // If the input is only whitespace and value is empty,
                // |hasSearchText| needs to be updated.
                if (value === '' && this.hasSearchText) {
                    this.hasSearchText = false;
                }
                return;
            }
            this.onSearchTermInput();
            if (!noEvent) {
                this.fire_('search-changed', this.effectiveValue_);
            }
        }
        scheduleSearch_() {
            if (this.searchDelayTimer_ >= 0) {
                clearTimeout(this.searchDelayTimer_);
            }
            // Dispatch 'search' event after:
            //    0ms if the value is empty
            //  500ms if the value length is 1
            //  400ms if the value length is 2
            //  300ms if the value length is 3
            //  200ms if the value length is 4 or greater.
            // The logic here was copied from WebKit's native 'search' event.
            const length = this.getValue().length;
            const timeoutMs = length > 0 ? (500 - 100 * (Math.min(length, 4) - 1)) : 0;
            this.searchDelayTimer_ = setTimeout(() => {
                this.getSearchInput().dispatchEvent(new CustomEvent('search', { composed: true, detail: this.getValue() }));
                this.searchDelayTimer_ = -1;
            }, timeoutMs);
        }
        onSearchTermSearch() {
            this.onValueChanged_(this.getValue(), false);
        }
        /**
         * Update the state of the search field whenever the underlying input
         * value changes. Unlike onsearch or onkeypress, this is reliably called
         * immediately after any change, whether the result of user input or JS
         * modification.
         */
        onSearchTermInput() {
            this.hasSearchText = this.getSearchInput().value !== '';
            this.scheduleSearch_();
        }
        /**
         * Updates the internal state of the search field based on a change that
         * has already happened.
         * @param noEvent Whether to prevent a 'search-changed' event
         *     firing for this change.
         */
        onValueChanged_(newValue, noEvent) {
            const updated = this.updateEffectiveValue_(newValue);
            if (updated && !noEvent) {
                this.fire_('search-changed', this.effectiveValue_);
            }
        }
        /**
         * Trim leading whitespace and replace consecutive whitespace with
         * single space. This will prevent empty string searches and searches
         * for effectively the same query.
         */
        updateEffectiveValue_(value) {
            const effectiveValue = value.replace(/\s+/g, ' ').replace(/^\s/, '');
            if (effectiveValue === this.effectiveValue_) {
                return false;
            }
            this.effectiveValue_ = effectiveValue;
            return true;
        }
    }
    return CrSearchFieldMixin;
});

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'cr-search-field' is a simple implementation of a polymer component that
 * uses CrSearchFieldMixin.
 */
const CrSearchFieldElementBase = CrSearchFieldMixin(PolymerElement);
class CrSearchFieldElement extends CrSearchFieldElementBase {
    static get is() {
        return 'cr-search-field';
    }
    static get template() {
        return getTemplate$7();
    }
    static get properties() {
        return {
            autofocus: {
                type: Boolean,
                value: false,
            },
        };
    }
    getSearchInput() {
        return this.$.searchInput;
    }
    onTapClear_() {
        this.setValue('');
        setTimeout(() => {
            this.$.searchInput.focus();
        });
    }
}
customElements.define(CrSearchFieldElement.is, CrSearchFieldElement);

function getTemplate$6() {
    return html `<!--_html_template_start_--><style>:host{height:var(--emoji-size);width:var(--emoji-size)}:host([gif-support]){height:var(--emoji-category-size);width:var(--emoji-category-size)}#category-button{--cr-icon-button-fill-color:var(--emoji-picker-icon-toggle-unselected-color);border-radius:50%;display:block;height:100%;margin:0;width:100%}:host([gif-support]) #category-button{--cr-icon-button-icon-size:24px}#category-button.category-button-active{--cr-icon-button-fill-color:var(--emoji-picker-icon-toggle-selected-color);background-color:var(--emoji-picker-icon-toggle-selected-container-color)}cr-icon-button{--cr-icon-button-focus-outline-color:var(--emoji-picker-focus-ring-color)}</style>


<cr-icon-button id="category-button" class$="[[calculateClassName(active, searchActive)]]" iron-icon="[[icon]]" on-click="handleClick" aria-label$="[[getAriaLabel(name, gifSupport)]]" aria-pressed$="[[getAriaPressedState(active)]]">
</cr-icon-button>
<!--_html_template_end_-->`;
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ARIA_LABELS_WITH_GIF_SUPPORT = {
    [CategoryEnum.EMOJI]: 'Emoji category',
    [CategoryEnum.SYMBOL]: 'Symbol category',
    [CategoryEnum.EMOTICON]: 'Emoticon category',
    [CategoryEnum.GIF]: 'GIF category',
};
class EmojiCategoryButton extends PolymerElement {
    static get is() {
        return 'emoji-category-button';
    }
    static get template() {
        return getTemplate$6();
    }
    static get properties() {
        return {
            name: { type: CategoryEnum, readonly: true },
            icon: { type: String, readonly: true },
            active: { type: Boolean, value: false },
            searchActive: { type: Boolean, value: false },
            gifSupport: { type: Boolean, value: false },
        };
    }
    handleClick() {
        this.dispatchEvent(createCustomEvent(CATEGORY_BUTTON_CLICK, { categoryName: this.name }));
    }
    calculateClassName(active, searchActive) {
        // Show un-selected category button if user is searching.
        if (searchActive) {
            return '';
        }
        return active ? 'category-button-active' : '';
    }
    getAriaLabel(name, gifSupport) {
        // TODO(b/281609806): Remove this condition once GIF support is fully
        // launched.
        if (!gifSupport) {
            return name;
        }
        return ARIA_LABELS_WITH_GIF_SUPPORT[name] ?? name;
    }
    getAriaPressedState(active) {
        return active ? 'true' : 'false';
    }
}
customElements.define(EmojiCategoryButton.is, EmojiCategoryButton);

function getTemplate$5() {
    return html `<!--_html_template_start_--><style>:host{--emoji-picker-search-margins:14px;--emoji-picker-search-height:40px;--emoji-picker-top-bar-bottom-padding:16px;--search-content-width:calc(var(--emoji-picker-width) - 2*var(--emoji-picker-side-padding));display:flex;flex-direction:column;overflow-y:scroll;min-height:var(--min-height)}:host([gif-support]){--emoji-picker-search-height:36px;--emoji-picker-top-bar-bottom-padding:20px;--search-content-width:calc(var(--emoji-picker-width) - 2*var(--emoji-picker-search-side-padding))}:host([jelly-support]){--emoji-picker-top-bar-bottom-padding:10px}cr-search-field{--cr-search-field-clear-icon-fill:var(--emoji-picker-search-field-clear-icon-color);--cr-search-field-clear-icon-margin-end:var(--emoji-picker-search-margins);--cr-search-field-clear-icon-size:20px;--cr-search-field-clear-button-size:32px;--cr-search-field-input-border-bottom:none;--cr-search-field-input-min-height:var(--emoji-picker-search-height);--cr-search-field-input-padding-bottom:0;--cr-search-field-input-padding-start:8px;--cr-search-field-input-padding-top:0;--cr-search-field-input-width:100%;--cr-search-field-placeholder-color:var(--emoji-picker-search-field-placeholder-color);--cr-search-field-search-icon-display:none;--cr-search-field-search-icon-fill:var(--emoji-picker-search-field-search-icon-color);--cr-search-field-search-icon-inline-display:block;--cr-search-field-search-icon-inline-margin-start:var(--emoji-picker-search-margins);--cr-search-field-underline-display:none;--cr-icon-button-focus-outline-color:var(--emoji-picker-focus-ring-color);align-items:center;background-color:var(--emoji-picker-search-field-container-color);border:2px solid transparent;font-size:13px;height:var(--emoji-picker-search-height)}cr-search-field.jelly{border-radius:8px}cr-search-field:not(.jelly){border-radius:40px}cr-search-field:focus-within{border:2px solid var(--emoji-picker-focus-ring-color)}.result{border:2px solid transparent;border-radius:40px;display:flex;margin-inline-end:var(--emoji-picker-search-margins)}.result:active,.result:focus{border-color:var(--emoji-picker-focus-ring-color);border-style:solid;border-width:2px;outline-style:none}.result:hover{background-color:var(--cros-ripple-color)}.name{color:var(--cr-primary-text-color);font-size:13px;line-height:var(--emoji-size);user-select:none}.sr-only{color:transparent;position:absolute;user-select:none;z-index:-2}.no-result{color:var(--emoji-picker-illustration-text-color);font:var(--cros-headline-1-font);left:50%;line-height:24px;position:absolute;text-align:center;--emoji-header-height:calc(
      var(--emoji-picker-top-padding) +
      var(--emoji-picker-search-height) +
      var(--emoji-picker-top-bar-bottom-padding));top:calc(50% + var(--emoji-header-height)/ 2);transform:translate(-50%,-50%);width:100vw}#searchShadow{background-color:var(--emoji-picker-container-color);box-shadow:var(--cros-elevation-2-shadow,--cr-elevation-2);display:flex;margin-bottom:7px;margin-inline-end:calc(0px - var(--emoji-picker-side-padding));margin-inline-start:calc(0px - var(--emoji-picker-side-padding));padding-bottom:var(--emoji-picker-top-bar-bottom-padding);padding-inline-end:var(--emoji-picker-side-padding);padding-inline-start:var(--emoji-picker-side-padding);position:sticky;top:0}:host([gif-support]) #searchShadow{margin-inline-end:calc(0px - var(--emoji-picker-search-side-padding));margin-inline-start:calc(0px - var(--emoji-picker-search-side-padding));padding-inline-end:var(--emoji-picker-search-side-padding);padding-inline-start:var(--emoji-picker-search-side-padding)}#results{flex-grow:1;margin-inline-end:var(--emoji-picker-side-padding);overflow-y:scroll;padding:13px 2px 2px 2px;margin-top:-6px;padding-top:6px}#no-emoji-image{display:block;margin:auto}#category-button-group{align-items:center;display:flex;justify-content:space-between;margin-inline-start:20px;width:120px}:host([gif-support]) #category-button-group{margin-inline-start:var(--emoji-picker-search-side-padding);width:168px}#search{width:240px}:host([gif-support]) #search{width:200px}#search-results{width:var(--search-content-width)}</style>

<div id="searchShadow">
  <cr-search-field id="search" class$="[[computeCrSearchFieldClass(jellySupport)]]" label="[[getSearchPlaceholderLabel(gifSupport)]]" autofocus="true">
  </cr-search-field>
  <div id="category-button-group">
    <template is="dom-repeat" items="[[categoryMetadata]]">
        <emoji-category-button active="[[item.active]]" name="[[item.name]]" icon="[[item.icon]]" search-active="[[searchNotEmpty(searchResults)]]" gif-support$="[[gifSupport]]">
        </emoji-category-button>
    </template>
  </div>
</div>

<template is="dom-if" if="[[searchNotEmpty(searchResults)]]">
  <div id="results" on-scroll="onSearchScroll">
    <div class="sr-only" role="heading" aria-level="1">
      Emoji Search Results
    </div>
    <div id="search-results">
      <template is="dom-repeat" items="[[searchResults]]">
        <emoji-group data="[[item.emoji]]" category$="[[item.category]]" gif-support$="[[gifSupport]]" jelly-support$="[[jellySupport]]" global-tone="[[globalTone]]" global-gender="[[globalGender]]">
        </emoji-group>
      </template>
    </div>
    <div class="no-result">
      <template is="dom-if" if="[[noResults(status, searchResults)]]">
        <template is="dom-if" if="[[jellySupport]]">
          <svg id="no-emoji-image" xmlns="http://www.w3.org/2000/svg" width="224" height="168" viewBox="0 0 224 168" fill="none">
            <path d="M183 71.5103C183 70.6172 183.782 69.9474 184.675 70.0032C192.21 70.8405 198.071 77.2038 198.071 84.9068C198.071 92.6656 192.266 99.0289 184.731 99.8662C183.838 99.9778 183.056 99.2522 183.056 98.3591L183 71.5103Z" fill="var(--cros-sys-illo-secondary)"/>
            <path d="M123.572 74.0606C121.841 74.7862 120.167 75.7351 118.548 76.6282C116.259 77.8562 113.58 78.1353 111.124 77.4097C109.729 77.019 108.389 76.5166 106.938 76.2375C101.97 75.3444 97.1704 78.9168 97.0024 84.0521C96.8904 88.6292 100.742 92.704 105.375 92.4807C107.496 92.3691 109.561 91.5318 111.627 91.2527C113.915 90.9736 116.148 91.3643 118.101 92.5365C119.776 93.5413 121.339 94.7134 123.125 95.5507C124.856 96.3322 126.753 96.6671 128.707 96.5555C134.456 96.1647 139.145 91.5876 139.647 85.8383C140.261 78.9726 134.959 73.1675 128.205 73C126.586 73.0558 125.023 73.4466 123.572 74.0606Z" stroke="var(--cros-sys-illo-secondary)" stroke-width="1.65922" stroke-miterlimit="10"/>
            <path d="M68.0816 87.1182L82.2037 95.491C83.655 96.3283 85.497 95.3236 85.5528 93.649L85.7761 77.2384C85.7761 75.5638 83.9899 74.4474 82.4828 75.2847L68.1374 83.3226C66.6303 84.104 66.6303 86.2251 68.0816 87.1182Z" fill="var(--cros-sys-illo-color1-2)"/>
            <path d="M214.247 90.4939C217.145 90.4939 219.494 88.1448 219.494 85.247C219.494 82.3492 217.145 80 214.247 80C211.349 80 209 82.3492 209 85.247C209 88.1448 211.349 90.4939 214.247 90.4939Z" fill="var(--cros-sys-illo-color1-1)"/>
            <path d="M31.9604 97.1109C44.9697 97.1109 55.5158 86.5648 55.5158 73.5555C55.5158 60.5462 44.9697 50 31.9604 50C18.9511 50 8.40491 60.5462 8.40491 73.5555C8.40491 86.5648 18.9511 97.1109 31.9604 97.1109Z" stroke="var(--cros-sys-illo-color1)" stroke-width="1.65922" stroke-miterlimit="10"/>
            <path d="M19.9036 93.8184L5 118.825" stroke="var(--cros-sys-illo-color1)" stroke-width="5.94044" stroke-miterlimit="10"/>
            <path d="M170.717 88.1871L164.187 94.7179C162.68 96.225 160.168 96.225 158.661 94.7179L152.13 88.1871C150.623 86.68 150.623 84.1682 152.13 82.6611L158.661 76.1303C160.168 74.6232 162.68 74.6232 164.187 76.1303L170.717 82.6611C172.225 84.1682 172.225 86.6242 170.717 88.1871Z" fill="var(--cros-sys-illo-color1)"/>
          </svg>
        </template>
        <template is="dom-if" if="[[!jellySupport]]">
          <picture>
            <source srcset="no_results_dark.svg" media="(prefers-color-scheme: dark)">
            <img src="no_results.svg" id="no-emoji-image">
          </picture>
        </template>
        No result found
      </template>
      <template is="dom-if" if="[[isGifInErrorState(status, searchResults)]]">
        <emoji-error status="[[status]]" error-message="[[errorMessage]]" jelly-support$="[[jellySupport]]">
        </emoji-error>
      </template>
    </div>
  </div>
</template>
<!--_html_template_end_-->`;
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class EmojiSearch extends PolymerElement {
    constructor() {
        super(...arguments);
        this.globalTone = null;
        this.globalGender = null;
        // TODO(b/235419647): Update the config to use extended search.
        this.fuseConfig = {
            threshold: 0.0, // Exact match only.
            ignoreLocation: true, // Match in all locations.
            keys: [
                { name: 'base.name', weight: 10 }, // Increase scoring of emoji name.
                'base.keywords',
            ],
        };
        this.fuseInstances = new Map();
    }
    static get is() {
        return 'emoji-search';
    }
    static get template() {
        return getTemplate$5();
    }
    static get properties() {
        return {
            categoriesData: { type: Array, readonly: true },
            categoryMetadata: { type: Array, readonly: true },
            lazyIndexing: { type: Boolean, value: true },
            searchResults: { type: Array },
            needIndexing: { type: Boolean, value: false },
            gifSupport: { type: Boolean, value: false },
            jellySupport: { type: Boolean, value: false },
            status: { type: Status, value: null },
            searchQuery: { type: String, value: '' },
            nextGifPos: { type: String, value: '' },
            errorMessage: { type: String, value: NO_INTERNET_SEARCH_ERROR_MSG },
            closeGifNudgeOverlay: { type: Object },
            globalTone: { type: Number, value: null, readonly: true },
            globalGender: { type: Number, value: null, readonly: true },
        };
    }
    static get observers() {
        return [
            'categoriesDataChanged(categoriesData.splices,lazyIndexing)',
        ];
    }
    ready() {
        super.ready();
        // Cast here is safe since that is the spec from the cr search field mixin.
        this.addEventListener('search', (ev) => this.onSearch(ev.detail));
        this.$.search.getSearchInput().addEventListener('keydown', (ev) => this.onSearchKeyDown(ev));
        this.addEventListener(GIF_ERROR_TRY_AGAIN, this.onClickTryAgain);
    }
    onSearch(newSearch) {
        const localSearchResults = this.computeLocalSearchResults(newSearch);
        if (!this.gifSupport) {
            this.set('searchResults', localSearchResults);
        }
        else {
            // With GIF support, we will progressively show local search results first
            // and more online GIFs after. To avoid displaying a "no results" screen in
            // the middle, we only do this update when local search results are not
            // empty.
            if (localSearchResults.length > 0) {
                this.set('searchResults', localSearchResults);
            }
            this.computeInitialGifSearchResults(newSearch).then((searchResults) => {
                this.set('searchResults', [...localSearchResults, ...searchResults]);
            });
        }
        // If the user is searching, to ensure emoji tooltip or variants popup can
        // be full displayed, we need to specify the minimum height as 100%.
        this.updateStyles({
            '--min-height': (newSearch.length > 0 ? '100%' : 'unset'),
        });
    }
    // TODO(b/281609806): Remove this compatibility logic once gif support is
    // turned on by default
    getSearchPlaceholderLabel(gifSupport) {
        return gifSupport ? 'Search' : 'Search emojis';
    }
    /**
     * Processes the changes to the data and determines whether indexing is
     * needed or not. It also triggers indexing if mode is not lazy and there
     * are new changes.
     *
     */
    categoriesDataChanged(changedRecords, lazyIndexing) {
        if (!changedRecords && lazyIndexing) {
            return;
        }
        // Indexing is needed if there are new changes.
        this.needIndexing = this.needIndexing ||
            changedRecords.indexSplices.some((s) => s.removed.length + s.addedCount > 0);
        // Trigger indexing if mode is not lazy and indexing is needed.
        if (!lazyIndexing && this.needIndexing) {
            this.createSearchIndices();
        }
    }
    /**
     * Event handler for keydown on the search input. Used to switch focus to the
     * results list on down arrow or enter key presses.
     */
    onSearchKeyDown(ev) {
        // If GIF support is enabled, we may have an overlay for the GIF nudge. Need
        // to ensure the overlay is closed before searching for anything.
        this.closeGifNudgeOverlay();
        const resultsCount = this.getNumSearchResults();
        // if not searching or no results, do nothing.
        if (!this.$.search.getValue() || resultsCount === 0) {
            return;
        }
        const isDown = ev.key === 'ArrowDown';
        const isEnter = ev.key === 'Enter';
        const isTab = ev.key === 'Tab';
        if (isDown || isEnter || isTab) {
            ev.preventDefault();
            ev.stopPropagation();
            if (resultsCount === 0) {
                return;
            }
            const firstResultButton = this.findFirstResultButton();
            if (!firstResultButton) {
                throw new Error('Cannot find search result buttons.');
            }
            if (isEnter && resultsCount === 1) {
                firstResultButton.click();
            }
            else {
                firstResultButton.focus();
            }
        }
    }
    /**
     * Format the emoji data for search:
     * 1) Remove duplicates.
     * 2) Remove groupings.
     */
    preprocessDataForIndexing(emojiData) {
        // TODO(b/235419647): Remove addition of extra space.
        return Array.from(new Map(emojiData.map(group => group.emoji).flat(1).map(emoji => {
            // The Fuse search library in ChromeOS doesn't support prefix
            // matching. A workaround is appending a space before all name and
            // keyword labels. This allows us to force a prefix matching by
            // prepending a space on users' searches. E.g. for the Emoji "smile
            // face", we store " smile face", if the user searches for "fa", the
            // search will be " fa" and will match " smile face", but not "
            // infant".
            emoji.base.name = ' ' + emoji.base.name;
            if (emoji.base.keywords && emoji.base.keywords.length > 0) {
                emoji.base.keywords =
                    emoji.base.keywords.map(keyword => ' ' + keyword);
            }
            return [emoji.base.string, emoji];
        })).values());
    }
    /**
     * Indexes category data for search.
     *
     * Note: The indexing is done for all data from scratch, it is possible
     * to index only the new changes with the cost of increasing logic
     * complexity.
     */
    createSearchIndices() {
        if (!this.categoriesData || this.categoriesData.length === 0) {
            return;
        }
        // Get the list of unique categories in the order they appeared
        // in the data.
        const categories = [...new Set(this.categoriesData.map(item => item.category))];
        // Remove existing indices.
        this.fuseInstances.clear();
        for (const category of categories) {
            // Filter records for the category and preprocess them.
            const indexableEmojis = this.preprocessDataForIndexing(this.categoriesData.filter(emojiGroup => emojiGroup.category === category));
            // Create a new index for the category.
            this.fuseInstances.set(category, new Fuse(indexableEmojis, this.fuseConfig));
        }
        this.needIndexing = false;
    }
    /**
     * Computes search results for a keyword.
     *
     */
    computeLocalSearchResults(search) {
        if (!search) {
            return [];
        }
        // Index data if needed (for lazy mode).
        if (this.needIndexing) {
            this.createSearchIndices();
        }
        // TODO(b/235419647): Use `^${search}|'" ${search}"'` for extended search.
        // Add an initial space to force prefix matching only.
        const prefixSearchTerm = ` ${search}`;
        const searchResults = [];
        // Search the keyword in the fuse instance of each category.
        for (const [category, fuseInstance] of this.fuseInstances.entries()) {
            const categorySearchResult = fuseInstance.search(prefixSearchTerm).map(item => item.item);
            // Add the category results if not empty.
            if (categorySearchResult.length !== 0) {
                searchResults.push({
                    'category': category,
                    'group': '',
                    'emoji': categorySearchResult,
                    'searchOnly': false,
                });
            }
        }
        return searchResults;
    }
    onSearchScroll() {
        if (this.gifSupport) {
            if (this.scrollTimeout) {
                clearTimeout(this.scrollTimeout);
            }
            this.scrollTimeout = setTimeout(() => {
                this.checkScrollPosition();
            }, 100);
        }
    }
    /**
     * Checks the current scroll position and decides if new GIF elements need to
     * be fetched and displayed.
     */
    checkScrollPosition() {
        const thisRect = this.shadowRoot?.getElementById('results');
        const searchResultRect = this.shadowRoot?.getElementById('search-results');
        if (!thisRect || !searchResultRect) {
            return;
        }
        // No need to append more GIFs if the first set of GIFs is still rendering.
        if (searchResultRect.getBoundingClientRect().height <=
            thisRect.getBoundingClientRect().height) {
            return;
        }
        // Append more GIFs to show if user is near the bottom of the currently
        // rendered GIFs (300px is around the average height of 2 GIFs).
        if (searchResultRect.getBoundingClientRect().bottom -
            thisRect.getBoundingClientRect().bottom <=
            300) {
            const gifIndex = this.searchResults.findIndex(group => group.category === CategoryEnum.GIF);
            if (gifIndex === -1) {
                return;
            }
            this.computeFollowingGifSearchResults(this.$.search.getValue())
                .then((searchResults) => {
                this.push(['searchResults', gifIndex, 'emoji'], ...searchResults);
            });
        }
    }
    async computeInitialGifSearchResults(search) {
        if (!search) {
            return [];
        }
        const searchResults = [];
        const apiProxy = EmojiPickerApiProxyImpl.getInstance();
        const { status, searchGifs } = await apiProxy.searchGifs(search);
        this.status = status;
        this.nextGifPos = searchGifs.next;
        if (searchGifs.results.length > 0) {
            searchResults.push({
                'category': CategoryEnum.GIF,
                'group': '',
                'emoji': apiProxy.convertTenorGifsToEmoji(searchGifs),
                'searchOnly': false,
            });
        }
        return searchResults;
    }
    async computeFollowingGifSearchResults(search) {
        if (!search) {
            return [];
        }
        const apiProxy = EmojiPickerApiProxyImpl.getInstance();
        const { searchGifs } = await apiProxy.searchGifs(search, this.nextGifPos);
        this.nextGifPos = searchGifs.next;
        return apiProxy.convertTenorGifsToEmoji(searchGifs);
    }
    onResultClick(ev) {
        // If the click is on elements except emoji-button, trigger the click on
        // the emoji-button.
        if (ev.target?.nodeName !== 'EMOJI-BUTTON') {
            // Using ! here, since if we use ! we should at least get a crash (and
            // nothing would happen if we fall through via ?. )
            ev.currentTarget.querySelector('emoji-button')
                .shadowRoot.querySelector('button').click();
        }
    }
    /**
     * Finds the first button in the search result page.
     *
     */
    findFirstResultButton() {
        const results = this.shadowRoot.querySelector('#search-results')
            ?.querySelectorAll('emoji-group');
        if (results) {
            for (const result of results) {
                const button = result.firstEmojiButton();
                if (button) {
                    return button;
                }
            }
        }
        return null;
    }
    /**
     * Calculates the total number of items in the search results.
     *
     */
    getNumSearchResults() {
        return this.searchResults ?
            this.searchResults.reduce((acc, item) => acc + item.emoji.length, 0) :
            0;
    }
    /**
     * Checks if the search query is empty
     *
     */
    searchNotEmpty() {
        return this.$.search.getValue() !== '';
    }
    noResults(status, searchResults) {
        return (!this.gifSupport || status === Status.kHttpOk) &&
            searchResults.length === 0;
    }
    isGifInErrorState(status, searchResults) {
        return this.gifSupport && status !== Status.kHttpOk &&
            searchResults.length === 0;
    }
    onClickTryAgain() {
        this.onSearch(this.$.search.getValue());
    }
    /**
     * Sets the search query
     */
    setSearchQuery(value) {
        this.$.search.setValue(value);
    }
    computeCrSearchFieldClass(jellySupport) {
        return jellySupport ? 'jelly' : '';
    }
}
customElements.define(EmojiSearch.is, EmojiSearch);

function getTemplate$4() {
    return html `<!--_html_template_start_--><style>:host{--emoji-picker-no-internet-icon-bounding-box:48px}.gif-error-container{align-items:center;display:flex;flex-direction:column;height:100%;justify-content:center}.error-text{font:var(--cros-headline-1-font);line-height:22px;margin:8px 0;color:var(--emoji-picker-illustration-text-color)}.try-again-button{color:var(--emoji-picker-illustration-link-color);cursor:pointer;font:var(--cros-body-1-font);line-height:20px}#no-internet-icon{color:var(--cros-icon-color-secondary);height:var(--emoji-picker-no-internet-icon-bounding-box);width:var(--emoji-picker-no-internet-icon-bounding-box)}</style>

<div class="gif-error-container">
  <template is="dom-if" if="[[isGifInHttpErrorState(status)]]">
    <template is="dom-if" if="[[jellySupport]]">
      <svg xmlns="http://www.w3.org/2000/svg" width="224" height="72" viewBox="0 0 224 72" fill="none">
        <g clip-path="url(#clip0_1219_58731)">
        <path d="M206 45.999C209.314 45.999 212 43.3127 212 39.999C212 36.6853 209.314 33.999 206 33.999C202.686 33.999 200 36.6853 200 39.999C200 43.3127 202.686 45.999 206 45.999Z" fill="var(--cros-sys-illo-color3)"/>
        <path d="M25.6256 0.578691L12.7803 10.2144C12.1638 10.6769 12.2788 11.5796 12.9523 11.8351L27.2622 17.5317C27.9357 17.7872 28.655 17.2476 28.5981 16.5296L27.1334 1.19723C27.04 0.430515 26.1907 0.154718 25.6256 0.578691Z" fill="var(--cros-sys-illo-color1-2)"/>
        <path d="M203.634 13.9104C205.064 12.9585 205.244 11.0326 204.153 9.78079C197.227 2.09106 185.69 0.394099 176.768 6.24445C167.946 12.1147 164.86 23.3705 169.183 32.7062C169.917 34.196 171.763 34.7733 173.075 33.9007L203.634 13.9104Z" fill="var(--cros-sys-illo-color1-2)"/>
        <path d="M164.949 18.9237C176.944 18.8539 186.629 28.7498 186.561 40.9214L186.6 41.2391C186.453 53.2915 176.655 62.9932 164.6 62.8445C152.545 62.6959 142.84 52.8993 142.988 40.8469L142.948 40.5292C142.977 28.5561 152.874 18.8744 164.949 18.9237Z" stroke="var(--cros-sys-illo-color1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3.61 3.61"/>
        <path d="M118.118 55.206C117.603 53.1357 117.548 51.3247 117.954 49.773C118.391 48.1696 119.412 46.1789 121.019 43.8008C122.264 41.9087 123.109 40.3575 123.556 39.1474C124.033 37.8855 124.087 36.5093 123.716 35.0187C123.222 33.0312 122.184 31.5966 120.602 30.715C119.009 29.792 117.074 29.6136 114.797 30.1799C112.727 30.6946 111.24 31.7017 110.338 33.201C109.426 34.659 108.875 36.3347 108.686 38.2281L103.27 37.3986C103.501 34.7911 104.446 32.3139 106.105 29.967C107.753 27.5787 110.234 25.9727 113.546 25.149C116.03 24.5313 118.354 24.5032 120.516 25.0648C122.709 25.5746 124.544 26.5911 126.022 28.1142C127.541 29.6269 128.574 31.4806 129.12 33.6751C129.511 35.2485 129.545 36.8008 129.222 38.3319C128.889 39.8216 128.437 41.0991 127.867 42.1642C127.328 43.1776 126.596 44.3926 125.674 45.8091C124.616 47.3911 123.895 48.8234 123.511 50.1061C123.167 51.3785 123.181 52.76 123.552 54.2506L124.2 56.8591L118.859 58.1872L118.118 55.206ZM124.881 71.0008C123.804 71.2685 122.78 71.1275 121.808 70.5778C120.867 69.9764 120.258 69.1167 119.98 67.9988C119.712 66.9222 119.858 65.9186 120.418 64.988C121.009 64.0057 121.843 63.3807 122.92 63.113C124.038 62.835 125.067 62.9967 126.008 63.5981C126.98 64.1478 127.6 64.9609 127.868 66.0375C128.146 67.1554 127.989 68.2056 127.398 69.1879C126.838 70.1185 125.999 70.7228 124.881 71.0008Z" fill="var(--cros-sys-illo-color1-2)"/>
        <path d="M69.3399 63.4977L64.2765 48.8173C63.3651 46.1849 64.7828 43.2488 67.4158 42.3376L82.0996 37.2754C84.7325 36.3642 87.6693 37.7817 88.5807 40.414L93.6441 55.0944C94.5555 57.7268 93.1378 60.6629 90.5048 61.5741L75.821 66.6363C73.188 67.5475 70.2513 66.1301 69.3399 63.4977Z" fill="var(--cros-sys-illo-color1)"/>
        <path d="M48.8435 12.2944L34.4635 21.8114C32.1343 23.3301 30.8179 25.9624 31.0204 28.696L32.0331 45.9076C32.2356 48.6412 33.8559 51.071 36.2863 52.286L51.679 59.9805C54.1094 61.1954 57.0462 60.993 59.3754 59.4743L73.7553 49.9573C76.0845 48.4387 77.401 45.8063 77.1984 43.0727L76.1858 25.8612C75.9832 23.1276 74.363 20.6977 71.9325 19.4828L56.5398 11.7882C54.0081 10.5733 51.0714 10.7758 48.8435 12.2944Z" stroke="var(--cros-sys-illo-secondary)" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_1219_58731">
        <rect width="224" height="72" fill="var(--cros-sys-illo-base)"/>
        </clipPath>
        </defs>
      </svg>
    </template>
    <template is="dom-if" if="[[!jellySupport]]">
      <picture>
        <source srcset="generic_error_dark.svg" media="(prefers-color-scheme: dark)">
        <img src="generic_error.svg">
      </picture>
    </template>
  </template>
  <template is="dom-if" if="[[isGifInNetworkErrorState(status)]]">
    <template is="dom-if" if="[[jellySupport]]">
      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="72" viewBox="0 0 200 72" fill="none">
        <path d="M69.9043 55.1479L68.5888 51.3154C68.349 50.617 67.5873 50.2447 66.8875 50.484L63.0474 51.7969C62.3475 52.0362 61.9746 52.7963 62.2143 53.4947L63.5298 57.3272C63.7696 58.0256 64.5312 58.3979 65.2311 58.1586L69.0712 56.8457C69.771 56.6064 70.144 55.8463 69.9043 55.1479Z" fill="var(--cros-sys-illo-color1)"/>
        <path d="M50.3433 30.8118C49.8983 30.6909 49.4409 30.6213 48.98 30.6044L47.5111 30.3799C46.2916 30.1791 45.1856 29.5463 44.3959 28.5975C43.2542 27.2982 42.4975 25.7029 40.6468 25.3219C39.9277 25.1721 39.1818 25.213 38.4833 25.4403C37.7849 25.6677 37.1583 26.0737 36.666 26.6179C36.6149 26.6723 36.5638 26.7335 36.516 26.7913C36.1413 27.2691 35.8746 27.8221 35.7345 28.4125C35.5943 29.0029 35.584 29.6165 35.7041 30.2113C35.8243 30.806 36.0721 31.3677 36.4305 31.8578C36.789 32.3478 37.2495 32.7545 37.7805 33.05C38.4247 33.4106 39.1438 33.6691 39.8016 33.965C41.0035 34.4897 41.9483 35.4681 42.4294 36.6861L42.9713 38.0671C43.2364 39.0793 43.7637 40.0041 44.5003 40.7486C45.2369 41.4931 46.1568 42.031 47.1676 42.3084C48.1784 42.5858 49.2446 42.5929 50.259 42.329C51.2734 42.065 52.2004 41.5393 52.9468 40.8047C53.6933 40.0701 54.2329 39.1524 54.5115 38.1438C54.7901 37.1352 54.7979 36.0712 54.5341 35.0586C54.2703 34.046 53.7442 33.1206 53.0086 32.3751C52.273 31.6297 51.3538 31.0906 50.3433 30.8118V30.8118Z" stroke="var(--cros-sys-illo-secondary)" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M187.529 30.8935C188.894 30.8935 190 29.7894 190 28.4275C190 27.0655 188.894 25.9614 187.529 25.9614C186.164 25.9614 185.058 27.0655 185.058 28.4275C185.058 29.7894 186.164 30.8935 187.529 30.8935Z" fill="var(--cros-sys-illo-secondary)"/>
        <path d="M156.811 51.2135C157.635 51.2135 158.303 50.5465 158.303 49.7237C158.303 48.9009 157.635 48.2339 156.811 48.2339C155.986 48.2339 155.318 48.9009 155.318 49.7237C155.318 50.5465 155.986 51.2135 156.811 51.2135Z" fill="var(--cros-sys-illo-color1)"/>
        <path d="M12.0867 23.1225C13.2391 23.1225 14.1734 22.1902 14.1734 21.04C14.1734 19.8899 13.2391 18.9575 12.0867 18.9575C10.9342 18.9575 10 19.8899 10 21.04C10 22.1902 10.9342 23.1225 12.0867 23.1225Z" fill="var(--cros-sys-illo-color1)"/>
        <path d="M132.918 45.788L129.169 48.271C128.869 48.4658 128.627 48.7366 128.466 49.0558C128.306 49.375 128.233 49.731 128.256 50.0874L128.529 54.5807C128.55 54.933 128.664 55.2734 128.859 55.5677C129.054 55.8621 129.323 56.1 129.64 56.2576L133.678 58.2509C133.995 58.4092 134.347 58.4816 134.7 58.4607C135.053 58.4398 135.394 58.3264 135.689 58.1318L139.438 55.6488C139.733 55.4536 139.971 55.1847 140.129 54.869C140.287 54.5532 140.359 54.2017 140.338 53.8494L140.066 49.3527C140.043 49.0006 139.929 48.6605 139.734 48.3662C139.539 48.072 139.27 47.8339 138.954 47.6758L134.929 45.6655C134.613 45.508 134.26 45.4363 133.907 45.4578C133.554 45.4793 133.213 45.5932 132.918 45.788V45.788Z" stroke="var(--cros-sys-illo-secondary)" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22.9887 39.3359H16.3562C16.2857 39.3369 16.2167 39.3563 16.1562 39.3922C16.0956 39.4282 16.0455 39.4794 16.011 39.5407C15.9765 39.602 15.9587 39.6713 15.9595 39.7416C15.9603 39.8119 15.9795 39.8808 16.0154 39.9414L19.3282 45.666C19.3637 45.7244 19.4138 45.7727 19.4735 45.8063C19.5332 45.8398 19.6005 45.8574 19.669 45.8574C19.7375 45.8574 19.8049 45.8398 19.8645 45.8063C19.9242 45.7727 19.9743 45.7244 20.0098 45.666L23.3261 39.9346C23.3601 39.8745 23.3781 39.8066 23.3781 39.7375C23.3782 39.6684 23.3604 39.6005 23.3265 39.5403C23.2925 39.4801 23.2436 39.4297 23.1844 39.3939C23.1253 39.3581 23.0578 39.3381 22.9887 39.3359Z" fill="var(--cros-sys-illo-color1-2)"/>
        <path d="M152.622 33.6144C152.55 33.6866 152.494 33.7735 152.458 33.8692C152.422 33.9649 152.408 34.0672 152.416 34.169C152.424 34.2707 152.453 34.3697 152.503 34.4589C152.553 34.5481 152.621 34.6256 152.704 34.6859C153.765 35.4778 155.076 35.8634 156.398 35.7727C157.72 35.682 158.965 35.1211 159.908 34.1918C160.85 33.2625 161.428 32.0265 161.535 30.7084C161.642 29.3904 161.272 28.0777 160.492 27.0089C160.432 26.926 160.355 26.857 160.266 26.8065C160.177 26.756 160.078 26.7252 159.977 26.7162C159.875 26.7071 159.772 26.7201 159.676 26.7542C159.579 26.7882 159.491 26.8426 159.418 26.9136L152.622 33.6144Z" fill="var(--cros-sys-illo-color1-2)"/>
        <circle cx="163.5" cy="26.5" r="5.5" stroke="var(--cros-sys-illo-color1)" stroke-linecap="round" stroke-dasharray="2 2"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M81.8614 18.0259C79.3692 19.5124 77.0488 21.3099 74.9612 23.3931L70.9429 27.4068C70.6351 27.7139 70.3909 28.0784 70.2243 28.4797C70.0577 28.8809 69.9719 29.311 69.9719 29.7453C69.9719 30.1797 70.0577 30.6097 70.2243 31.011C70.3909 31.4122 70.6351 31.7768 70.9429 32.0838L77.848 38.9785C77.9408 38.8423 78.0457 38.7148 78.1616 38.5976L81.1847 35.5805C84.5762 32.1968 88.7841 29.8154 93.3462 28.6273L81.8614 18.0259ZM97.0115 27.941C98.0318 27.8227 99.0631 27.7625 100.101 27.7625C107.195 27.7625 113.999 30.5747 119.016 35.5805L122.039 38.5976C122.155 38.7148 122.26 38.8423 122.353 38.9785L129.258 32.0838C129.566 31.7772 129.811 31.413 129.978 31.012C130.145 30.611 130.232 30.1811 130.232 29.7467C130.233 29.3124 130.148 28.8822 129.982 28.4807C129.816 28.0792 129.572 27.7143 129.265 27.4068L125.247 23.3931C118.578 16.7385 109.534 13 100.104 13C94.7001 13 89.4232 14.2276 84.6474 16.528L97.0115 27.941Z" fill="var(--cros-sys-illo-color1-2)"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M93.3479 28.6289C88.7878 29.8174 84.5818 32.1982 81.1917 35.5806L78.1685 38.5977C78.0527 38.715 77.9477 38.8425 77.855 38.9787L87.2618 48.3871L88.0457 47.6047C89.6284 46.023 91.5081 44.7681 93.5772 43.9119C95.6462 43.0557 97.8642 42.615 100.104 42.615C102.344 42.615 104.562 43.0557 106.631 43.9119C108.7 44.7681 110.58 46.023 112.162 47.6047L112.946 48.3871L113.814 47.5209L93.3479 28.6289ZM115.933 45.4067L122.36 38.9923C122.267 38.8561 122.162 38.7286 122.046 38.6113L119.023 35.5806C114.006 30.5748 107.202 27.7627 100.107 27.7627C99.068 27.7627 98.0347 27.8231 97.0124 27.9419L115.933 45.4067Z" fill="var(--cros-sys-illo-color1-1)"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M112.947 48.3731L102.449 58.8495C101.827 59.4702 100.984 59.8188 100.104 59.8188C99.2247 59.8188 98.3812 59.4702 97.7593 58.8495L87.2619 48.3731L88.0458 47.5908C89.6285 46.009 91.5082 44.7541 93.5773 43.8979C95.6464 43.0418 97.8643 42.6011 100.104 42.6011C102.344 42.6011 104.562 43.0418 106.631 43.8979C108.7 44.7541 110.58 46.009 112.163 47.5908L112.947 48.3731Z" fill="var(--cros-sys-illo-color1)"/>
        <path d="M73.2043 12L121.917 56.9652" stroke="var(--cros-sys-illo-base)" stroke-width="3" stroke-linecap="round"/>
        <path d="M73.2043 12L121.917 56.9652" stroke="var(--cros-sys-illo-color1-1)" stroke-width="3" stroke-linecap="round"/>
      </svg>
    </template>
    <template is="dom-if" if="[[!jellySupport]]">
      <picture>
        <source srcset="network_error_dark.svg" media="(prefers-color-scheme: dark)">
        <img src="network_error.svg">
      </picture>
    </template>
  </template>
  <span class="error-text">[[getErrorMessage(status)]]</span>
  <a class="try-again-button" onclick="[[onClickTryAgain]]">Try again</a>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class EmojiErrorComponent extends PolymerElement {
    static get is() {
        return 'emoji-error';
    }
    static get template() {
        return getTemplate$4();
    }
    static get properties() {
        return {
            status: { type: Status },
            errorMessage: { type: String },
            jellySupport: { type: Boolean, value: false },
        };
    }
    isGifInHttpErrorState(status) {
        return status === Status.kHttpError;
    }
    isGifInNetworkErrorState(status) {
        return status === Status.kNetError;
    }
    getErrorMessage(status) {
        return status === Status.kNetError ? this.errorMessage :
            SOMETHING_WENT_WRONG_ERROR_MSG;
    }
    onClickTryAgain() {
        this.dispatchEvent(createCustomEvent(GIF_ERROR_TRY_AGAIN, {}));
    }
}
customElements.define(EmojiErrorComponent.is, EmojiErrorComponent);

// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * The class name to set on the document element.
 */
const CLASS_NAME = 'focus-outline-visible';
const docsToManager = new Map();
/**
 * This class sets a CSS class name on the HTML element of |doc| when the user
 * presses a key. It removes the class name when the user clicks anywhere.
 *
 * This allows you to write CSS like this:
 *
 * html.focus-outline-visible my-element:focus {
 *   outline: 5px auto -webkit-focus-ring-color;
 * }
 *
 * And the outline will only be shown if the user uses the keyboard to get to
 * it.
 *
 */
class FocusOutlineManager {
    // Whether focus change is triggered by a keyboard event.
    focusByKeyboard_ = true;
    classList_;
    /**
     * @param doc The document to attach the focus outline manager to.
     */
    constructor(doc) {
        this.classList_ = doc.documentElement.classList;
        doc.addEventListener('keydown', (e) => this.onEvent_(true, e), true);
        doc.addEventListener('mousedown', (e) => this.onEvent_(false, e), true);
        this.updateVisibility();
    }
    onEvent_(focusByKeyboard, e) {
        if (this.focusByKeyboard_ === focusByKeyboard) {
            return;
        }
        if (e instanceof KeyboardEvent && e.repeat) {
            // A repeated keydown should not trigger the focus state. For example,
            // there is a repeated ALT keydown if ALT+CLICK is used to open the
            // context menu and ALT is not released.
            return;
        }
        this.focusByKeyboard_ = focusByKeyboard;
        this.updateVisibility();
    }
    updateVisibility() {
        this.visible = this.focusByKeyboard_;
    }
    /**
     * Whether the focus outline should be visible.
     */
    set visible(visible) {
        this.classList_.toggle(CLASS_NAME, visible);
    }
    get visible() {
        return this.classList_.contains(CLASS_NAME);
    }
    /**
     * Gets a per document singleton focus outline manager.
     * @param doc The document to get the |FocusOutlineManager| for.
     * @return The per document singleton focus outline manager.
     */
    static forDocument(doc) {
        let manager = docsToManager.get(doc);
        if (!manager) {
            manager = new FocusOutlineManager(doc);
            docsToManager.set(doc, manager);
        }
        return manager;
    }
}

function getTemplate$3() {
    return html `<!--_html_template_start_-->    <style include="cr-hidden-style">:host{--active-shadow-rgb:var(--google-grey-800-rgb);--active-shadow-action-rgb:var(--google-blue-500-rgb);--bg-action:var(--google-blue-600);--border-color:var(--google-grey-300);--disabled-bg-action:var(--google-grey-100);--disabled-bg:white;--disabled-border-color:var(--google-grey-100);--disabled-text-color:var(--google-grey-600);--focus-shadow-color:rgba(var(--google-blue-600-rgb), .4);--hover-bg-action:rgba(var(--google-blue-600-rgb), .9);--hover-bg-color:rgba(var(--google-blue-500-rgb), .04);--hover-border-color:var(--google-blue-100);--hover-shadow-action-rgb:var(--google-blue-500-rgb);--ink-color-action:white;--ink-color:var(--google-blue-600);--ripple-opacity-action:.32;--ripple-opacity:.1;--text-color-action:white;--text-color:var(--google-blue-600)}@media (prefers-color-scheme:dark){:host{--active-bg:black linear-gradient(rgba(255, 255, 255, .06),
                                             rgba(255, 255, 255, .06));--active-shadow-rgb:0,0,0;--active-shadow-action-rgb:var(--google-blue-500-rgb);--bg-action:var(--google-blue-300);--border-color:var(--google-grey-700);--disabled-bg-action:var(--google-grey-800);--disabled-bg:transparent;--disabled-border-color:var(--google-grey-800);--disabled-text-color:var(--google-grey-500);--focus-shadow-color:rgba(var(--google-blue-300-rgb), .5);--hover-bg-action:var(--bg-action) linear-gradient(rgba(0, 0, 0, .08), rgba(0, 0, 0, .08));--hover-bg-color:rgba(var(--google-blue-300-rgb), .08);--ink-color-action:black;--ink-color:var(--google-blue-300);--ripple-opacity-action:.16;--ripple-opacity:.16;--text-color-action:var(--google-grey-900);--text-color:var(--google-blue-300)}}:host{--paper-ripple-opacity:var(--ripple-opacity);-webkit-tap-highlight-color:transparent;align-items:center;border:1px solid var(--border-color);border-radius:4px;box-sizing:border-box;color:var(--text-color);cursor:pointer;display:inline-flex;flex-shrink:0;font-weight:500;height:var(--cr-button-height);justify-content:center;min-width:5.14em;outline-width:0;overflow:hidden;padding:8px 16px;position:relative;user-select:none}:host-context([chrome-refresh-2023]):host{--border-color:var(--color-button-border,
            var(--cr-fallback-color-tonal-outline));--text-color:var(--color-button-foreground,
            var(--cr-fallback-color-primary));--hover-bg-color:transparent;--hover-border-color:var(--border-color);--active-bg:transparent;--active-shadow:none;--ink-color:var(--cr-active-background-color);--ripple-opacity:1;--disabled-bg:transparent;--disabled-border-color:var(--color-button-border-disabled,
            var(--cr-fallback-color-disabled-background));--disabled-text-color:var(--color-button-foreground-disabled,
            var(--cr-fallback-color-disabled-foreground));--bg-action:var(--color-button-background-prominent,
            var(--cr-fallback-color-primary));--text-color-action:var(--color-button-foreground-prominent,
            var(--cr-fallback-color-on-primary));--hover-bg-action:var(--bg-action);--active-shadow-action:none;--ink-color-action:var(--cr-active-background-color);--ripple-opacity-action:1;--disabled-bg-action:var(--color-button-background-prominent-disabled,
            var(--cr-fallback-color-disabled-background));background:0 0;border-radius:100px;isolation:isolate;line-height:20px}:host([has-prefix-icon_]),:host([has-suffix-icon_]){--iron-icon-height:16px;--iron-icon-width:16px;gap:8px;padding:8px}:host-context([chrome-refresh-2023]):host([has-prefix-icon_]),:host-context([chrome-refresh-2023]):host([has-suffix-icon_]){--iron-icon-height:20px;--iron-icon-width:20px;--icon-block-padding-large:16px;--icon-block-padding-small:12px;padding-block-end:8px;padding-block-start:8px}:host-context([chrome-refresh-2023]):host([has-prefix-icon_]){padding-inline-end:var(--icon-block-padding-large);padding-inline-start:var(--icon-block-padding-small)}:host-context([chrome-refresh-2023]):host([has-suffix-icon_]){padding-inline-end:var(--icon-block-padding-small);padding-inline-start:var(--icon-block-padding-large)}:host-context(.focus-outline-visible):host(:focus){box-shadow:0 0 0 2px var(--focus-shadow-color)}@media (forced-colors:active){:host-context(.focus-outline-visible):host(:focus){outline:var(--cr-focus-outline-hcm)}:host-context([chrome-refresh-2023]):host{forced-color-adjust:none}}:host-context([chrome-refresh-2023].focus-outline-visible):host(:focus){box-shadow:none;outline:2px solid var(--cr-focus-outline-color);outline-offset:2px}:host(:active){background:var(--active-bg);box-shadow:var(--active-shadow,0 1px 2px 0 rgba(var(--active-shadow-rgb),.3),0 3px 6px 2px rgba(var(--active-shadow-rgb),.15))}:host(:hover){background-color:var(--hover-bg-color)}@media (prefers-color-scheme:light){:host(:hover){border-color:var(--hover-border-color)}}#background{border-radius:inherit;inset:0;pointer-events:none;position:absolute;z-index:0}:host-context([chrome-refresh-2023]):host(:hover) #background{background-color:var(--hover-bg-color)}:host-context([chrome-refresh-2023].focus-outline-visible):host(:focus) #background{background-clip:padding-box}:host-context([chrome-refresh-2023]):host(.action-button) #background{background-color:var(--bg-action)}:host-context([chrome-refresh-2023]):host([disabled]) #background{background-color:var(--disabled-bg)}:host-context([chrome-refresh-2023]):host(.action-button[disabled]) #background{background-color:var(--disabled-bg-action)}:host-context([chrome-refresh-2023]):host(.floating-button) #background,:host-context([chrome-refresh-2023]):host(.tonal-button) #background{background-color:var(--color-button-background-tonal,var(--cr-fallback-color-secondary-container))}:host-context([chrome-refresh-2023]):host([disabled].floating-button) #background,:host-context([chrome-refresh-2023]):host([disabled].tonal-button) #background{background-color:var(--color-button-background-tonal-disabled,var(--cr-fallback-color-disabled-background))}#content{display:contents}:host-context([chrome-refresh-2023]) #content{display:inline;z-index:2}:host-context([chrome-refresh-2023]) ::slotted(*){z-index:2}#hoverBackground{content:'';display:none;inset:0;pointer-events:none;position:absolute;z-index:1}:host-context([chrome-refresh-2023]):host(:hover) #hoverBackground{background:var(--cr-hover-background-color);display:block}:host-context([chrome-refresh-2023]):host(.action-button:hover) #hoverBackground{background:var(--cr-hover-on-prominent-background-color)}:host(.action-button){--ink-color:var(--ink-color-action);--paper-ripple-opacity:var(--ripple-opacity-action);background-color:var(--bg-action);border:none;color:var(--text-color-action)}:host-context([chrome-refresh-2023]):host(.action-button){--ink-color:var(--cr-active-on-primary-background-color);background-color:transparent}:host(.action-button:active){box-shadow:var(--active-shadow-action,0 1px 2px 0 rgba(var(--active-shadow-action-rgb),.3),0 3px 6px 2px rgba(var(--active-shadow-action-rgb),.15))}:host(.action-button:hover){background:var(--hover-bg-action)}@media (prefers-color-scheme:light){:host(.action-button:not(:active):hover){box-shadow:0 1px 2px 0 rgba(var(--hover-shadow-action-rgb),.3),0 1px 3px 1px rgba(var(--hover-shadow-action-rgb),.15)}:host-context([chrome-refresh-2023]):host(.action-button:not(:active):hover){box-shadow:none}}:host([disabled]){background-color:var(--disabled-bg);border-color:var(--disabled-border-color);color:var(--disabled-text-color);cursor:auto;pointer-events:none}:host(.action-button[disabled]){background-color:var(--disabled-bg-action);border-color:transparent}:host(.cancel-button){margin-inline-end:8px}:host(.action-button),:host(.cancel-button){line-height:154%}:host-context([chrome-refresh-2023]):host(.floating-button),:host-context([chrome-refresh-2023]):host(.tonal-button){border:none;color:var(--color-button-foreground-tonal,var(--cr-fallback-color-on-tonal-container))}:host-context([chrome-refresh-2023]):host(.floating-button[disabled]),:host-context([chrome-refresh-2023]):host(.tonal-button[disabled]){border:none;color:var(--disabled-text-color)}:host-context([chrome-refresh-2023]):host(.floating-button){border-radius:8px;height:40px;transition:box-shadow 80ms linear}:host-context([chrome-refresh-2023]):host(.floating-button:hover){box-shadow:var(--cr-elevation-3)}paper-ripple{color:var(--ink-color);height:var(--paper-ripple-height);left:var(--paper-ripple-left,0);top:var(--paper-ripple-top,0);width:var(--paper-ripple-width)}:host-context([chrome-refresh-2023]) paper-ripple{z-index:1}</style>

    <div id="background"></div>
    <slot id="prefixIcon" name="prefix-icon" on-slotchange="onPrefixIconSlotChanged_">
    </slot>
    <span id="content"><slot></slot></span>
    <slot id="suffixIcon" name="suffix-icon" on-slotchange="onSuffixIconSlotChanged_">
    </slot>
    <div id="hoverBackground" part="hoverBackground"></div>
<!--_html_template_end_-->`;
}

// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'cr-button' is a button which displays slotted elements. It can
 * be interacted with like a normal button using click as well as space and
 * enter to effectively click the button and fire a 'click' event. It can also
 * style an icon inside of the button with the [has-icon] attribute.
 */
const CrButtonElementBase = mixinBehaviors([PaperRippleBehavior], PolymerElement);
class CrButtonElement extends CrButtonElementBase {
    static get is() {
        return 'cr-button';
    }
    static get template() {
        return getTemplate$3();
    }
    static get properties() {
        return {
            disabled: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
                observer: 'disabledChanged_',
            },
            /**
             * Use this property in order to configure the "tabindex" attribute.
             */
            customTabIndex: {
                type: Number,
                observer: 'applyTabIndex_',
            },
            /**
             * Flag used for formatting ripples on circle shaped cr-buttons.
             * @private
             */
            circleRipple: {
                type: Boolean,
                value: false,
            },
            hasPrefixIcon_: {
                type: Boolean,
                reflectToAttribute: true,
                value: false,
            },
            hasSuffixIcon_: {
                type: Boolean,
                reflectToAttribute: true,
                value: false,
            },
        };
    }
    constructor() {
        super();
        /**
         * It is possible to activate a tab when the space key is pressed down. When
         * this element has focus, the keyup event for the space key should not
         * perform a 'click'. |spaceKeyDown_| tracks when a space pressed and
         * handled by this element. Space keyup will only result in a 'click' when
         * |spaceKeyDown_| is true. |spaceKeyDown_| is set to false when element
         * loses focus.
         */
        this.spaceKeyDown_ = false;
        this.timeoutIds_ = new Set();
        this.addEventListener('blur', this.onBlur_.bind(this));
        // Must be added in constructor so that stopImmediatePropagation() works as
        // expected.
        this.addEventListener('click', this.onClick_.bind(this));
        this.addEventListener('keydown', this.onKeyDown_.bind(this));
        this.addEventListener('keyup', this.onKeyUp_.bind(this));
        this.addEventListener('pointerdown', this.onPointerDown_.bind(this));
    }
    ready() {
        super.ready();
        if (!this.hasAttribute('role')) {
            this.setAttribute('role', 'button');
        }
        if (!this.hasAttribute('tabindex')) {
            this.setAttribute('tabindex', '0');
        }
        if (!this.hasAttribute('aria-disabled')) {
            this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
        }
        FocusOutlineManager.forDocument(document);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.timeoutIds_.forEach(clearTimeout);
        this.timeoutIds_.clear();
    }
    setTimeout_(fn, delay) {
        if (!this.isConnected) {
            return;
        }
        const id = setTimeout(() => {
            this.timeoutIds_.delete(id);
            fn();
        }, delay);
        this.timeoutIds_.add(id);
    }
    disabledChanged_(newValue, oldValue) {
        if (!newValue && oldValue === undefined) {
            return;
        }
        if (this.disabled) {
            this.blur();
        }
        this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
        this.applyTabIndex_();
    }
    /**
     * Updates the tabindex HTML attribute to the actual value.
     */
    applyTabIndex_() {
        let value = this.customTabIndex;
        if (value === undefined) {
            value = this.disabled ? -1 : 0;
        }
        this.setAttribute('tabindex', value.toString());
    }
    onBlur_() {
        this.spaceKeyDown_ = false;
        // If a keyup event is never fired (e.g. after keydown the focus is moved to
        // another element), we need to clear the ripple here. 100ms delay was
        // chosen manually as a good time period for the ripple to be visible.
        this.setTimeout_(() => this.getRipple().uiUpAction(), 100);
    }
    onClick_(e) {
        if (this.disabled) {
            e.stopImmediatePropagation();
        }
    }
    onPrefixIconSlotChanged_() {
        this.hasPrefixIcon_ = this.$.prefixIcon.assignedElements().length > 0;
    }
    onSuffixIconSlotChanged_() {
        this.hasSuffixIcon_ = this.$.suffixIcon.assignedElements().length > 0;
    }
    onKeyDown_(e) {
        if (e.key !== ' ' && e.key !== 'Enter') {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        if (e.repeat) {
            return;
        }
        this.getRipple().uiDownAction();
        if (e.key === 'Enter') {
            this.click();
            // Delay was chosen manually as a good time period for the ripple to be
            // visible.
            this.setTimeout_(() => this.getRipple().uiUpAction(), 100);
        }
        else if (e.key === ' ') {
            this.spaceKeyDown_ = true;
        }
    }
    onKeyUp_(e) {
        if (e.key !== ' ' && e.key !== 'Enter') {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        if (this.spaceKeyDown_ && e.key === ' ') {
            this.spaceKeyDown_ = false;
            this.click();
            this.getRipple().uiUpAction();
        }
    }
    onPointerDown_() {
        this.ensureRipple();
    }
    /**
     * Customize the element's ripple. Overriding the '_createRipple' function
     * from PaperRippleBehavior.
     */
    /* eslint-disable-next-line @typescript-eslint/naming-convention */
    _createRipple() {
        const ripple = super._createRipple();
        if (this.circleRipple) {
            ripple.setAttribute('center', '');
            ripple.classList.add('circle');
        }
        return ripple;
    }
}
customElements.define(CrButtonElement.is, CrButtonElement);

function getTemplate$2() {
    return html `<!--_html_template_start_--><style>#group-button{--hover-bg-color:var(--cr-hover-background-color);border:none;border-radius:0;color:var(--emoji-picker-tab-unselected-color);font-size:12px;font:var(--cros-button-1-font);margin:0;margin-inline:var(--tab-button-margin);min-width:unset;width:max-content;--cr-button-height:var(--emoji-picker-group-button-height, 32px);padding-left:var(--emoji-picker-group-button-padding,0);padding-right:var(--emoji-picker-group-button-padding,0);border-radius:var(--emoji-picker-group-button-border-radius,0)}#group-button:hover{box-shadow:none}#group-button:active{box-shadow:none}#group-button.text-group-active{--cr-icon-button-fill-color:var(--emoji-picker-tab-selected-color);color:var(--emoji-picker-tab-selected-color)}cr-button{--focus-shadow-color:var(--emoji-picker-focus-ring-color)}</style>

<cr-button id="group-button" class$="[[calculateClassName(active)]]" on-click="handleClick" custom-tab-index="[[customTabIndex]]" aria-pressed$="[[getAriaPressedState(active)]]">
  [[maybeToUpperCase(name, jellySupport)]]
</cr-button>
<!--_html_template_end_-->`;
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class TextGroupButton extends PolymerElement {
    static get is() {
        return 'text-group-button';
    }
    static get template() {
        return getTemplate$2();
    }
    static get properties() {
        return {
            name: { type: String, readonly: true },
            groupId: { type: String, readonly: true },
            active: { type: Boolean, value: false },
            disabled: { type: Boolean, value: false },
            jellySupport: { type: Boolean, value: false },
            customTabIndex: { type: Number, value: -1 },
        };
    }
    constructor() {
        super();
    }
    handleClick() {
        this.dispatchEvent(createCustomEvent(GROUP_BUTTON_CLICK, { group: this.groupId }));
    }
    calculateClassName(active) {
        return active ? 'text-group-active' : '';
    }
    maybeToUpperCase(text, jellySupport) {
        // With Jelly flag on, we do not capitalize texts here.
        // TODO(b/263055563): Remove this flag once Jelly is default on.
        if (jellySupport) {
            return text;
        }
        return text.toUpperCase();
    }
    getAriaPressedState(active) {
        return active ? 'true' : 'false';
    }
}
customElements.define(TextGroupButton.is, TextGroupButton);

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview <cr-auto-img> is a specialized <img> that facilitates embedding
 * images into WebUIs via its auto-src attribute. <cr-auto-img> automatically
 * determines if the image is local (e.g. data: or chrome://) or external (e.g.
 * https://), and embeds the image directly or via the chrome://image data
 * source accordingly. Usage:
 *
 *   1. In C++ register |SanitizedImageSource| for your WebUI.
 *
 *   2. In HTML instantiate
 *
 *      <img is="cr-auto-img" auto-src="https://foo.com/bar.png">
 *
 *      If your image URL points to Google Photos storage, meaning it needs an
 *      auth token, you can use the is-google-photos attribute as follows:
 *
 *      <img is="cr-auto-img" auto-src="https://foo.com/bar.png"
 *          is-google-photos>
 *
 *      If you want the image to reset to an empty state when auto-src changes
 *      and the new image is still loading, set the clear-src attribute:
 *
 *      <img is="cr-auto-img" auto-src="[[calculateSrc()]]" clear-src>
 *
 *      If you want your image to be always encoded as a static image (even if
 *      the source image is animated), set the static-encode attribute:
 *
 *      <img is="cr-auto-img" auto-src="https://foo.com/bar.png"
 *          static-encode>
 *
 *      Static images are encoded as PNG by default. If you want your image to
 *      be encoded as a Webp image, set the encode-type attribute to "webp".
 *
 *      <img is="cr-auto-img" auto-src="https://foo.com/bar.png"
 *          static-encode encode-type="webp">
 *
 * NOTE: Since <cr-auto-img> may use the chrome://image data source some images
 * may be transcoded to PNG.
 */
const AUTO_SRC = 'auto-src';
const CLEAR_SRC = 'clear-src';
const IS_GOOGLE_PHOTOS = 'is-google-photos';
const STATIC_ENCODE = 'static-encode';
const ENCODE_TYPE = 'encode-type';
class CrAutoImgElement extends HTMLImageElement {
    static get observedAttributes() {
        return [AUTO_SRC, IS_GOOGLE_PHOTOS, STATIC_ENCODE, ENCODE_TYPE];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name !== AUTO_SRC && name !== IS_GOOGLE_PHOTOS &&
            name !== STATIC_ENCODE && name !== ENCODE_TYPE) {
            return;
        }
        // Changes to |IS_GOOGLE_PHOTOS| are only interesting when the attribute is
        // being added or removed.
        if (name === IS_GOOGLE_PHOTOS &&
            ((oldValue === null) === (newValue === null))) {
            return;
        }
        if (this.hasAttribute(CLEAR_SRC)) {
            // Remove the src attribute so that the old image is not shown while the
            // new one is loading.
            this.removeAttribute('src');
        }
        let url = null;
        try {
            url = new URL(this.getAttribute(AUTO_SRC) || '');
        }
        catch (_) {
        }
        if (!url || url.protocol === 'chrome-untrusted:') {
            // Loading chrome-untrusted:// directly kills the renderer process.
            // Loading chrome-untrusted:// via the chrome://image data source
            // results in a broken image.
            this.removeAttribute('src');
            return;
        }
        if (url.protocol === 'data:' || url.protocol === 'chrome:') {
            this.src = url.href;
            return;
        }
        if (!this.hasAttribute(IS_GOOGLE_PHOTOS) &&
            !this.hasAttribute(STATIC_ENCODE) && !this.hasAttribute(ENCODE_TYPE)) {
            this.src = 'chrome://image?' + url.href;
            return;
        }
        this.src = `chrome://image?url=${encodeURIComponent(url.href)}`;
        if (this.hasAttribute(IS_GOOGLE_PHOTOS)) {
            this.src += `&isGooglePhotos=true`;
        }
        if (this.hasAttribute(STATIC_ENCODE)) {
            this.src += `&staticEncode=true`;
        }
        if (this.hasAttribute(ENCODE_TYPE)) {
            this.src += `&encodeType=${this.getAttribute(ENCODE_TYPE)}`;
        }
    }
    set autoSrc(src) {
        this.setAttribute(AUTO_SRC, src);
    }
    get autoSrc() {
        return this.getAttribute(AUTO_SRC) || '';
    }
    set clearSrc(_) {
        this.setAttribute(CLEAR_SRC, '');
    }
    get clearSrc() {
        return this.getAttribute(CLEAR_SRC) || '';
    }
    set isGooglePhotos(enabled) {
        if (enabled) {
            this.setAttribute(IS_GOOGLE_PHOTOS, '');
        }
        else {
            this.removeAttribute(IS_GOOGLE_PHOTOS);
        }
    }
    get isGooglePhotos() {
        return this.hasAttribute(IS_GOOGLE_PHOTOS);
    }
    set staticEncode(enabled) {
        if (enabled) {
            this.setAttribute(STATIC_ENCODE, '');
        }
        else {
            this.removeAttribute(STATIC_ENCODE);
        }
    }
    get staticEncode() {
        return this.hasAttribute(STATIC_ENCODE);
    }
    set encodeType(type) {
        if (type) {
            this.setAttribute(ENCODE_TYPE, type);
        }
        else {
            this.removeAttribute(ENCODE_TYPE);
        }
    }
    get encodeType() {
        return this.getAttribute(ENCODE_TYPE) || '';
    }
}
customElements.define('cr-auto-img', CrAutoImgElement, { extends: 'img' });

// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Base class for Web Components that don't use Polymer.
 * See the following file for usage:
 * chrome/test/data/webui/js/custom_element_test.js
 */
function emptyHTML() {
    return window.trustedTypes ? window.trustedTypes.emptyHTML : '';
}
class CustomElement extends HTMLElement {
    static get template() {
        return emptyHTML();
    }
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');
        template.innerHTML =
            this.constructor.template || emptyHTML();
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    $(query) {
        return this.shadowRoot.querySelector(query);
    }
    $all(query) {
        return this.shadowRoot.querySelectorAll(query);
    }
    getRequiredElement(query) {
        const el = this.shadowRoot.querySelector(query);
        assert(el);
        assert(el instanceof HTMLElement);
        return el;
    }
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @return Whether the passed tagged template literal is a valid array.
 */
function isValidArray(arr) {
    if (arr instanceof Array && Object.isFrozen(arr)) {
        return true;
    }
    return false;
}
/**
 * Checks if the passed tagged template literal only contains static string.
 * And return the string in the literal if so.
 * Throws an Error if the passed argument is not supported literals.
 */
function getStaticString(literal) {
    const isStaticString = isValidArray(literal) && !!literal.raw &&
        isValidArray(literal.raw) && literal.length === literal.raw.length &&
        literal.length === 1;
    assert(isStaticString, 'static_types.js only allows static strings');
    return literal.join('');
}
function createTypes(_ignore, literal) {
    return getStaticString(literal);
}
/**
 * Rules used to enforce static literal checks.
 */
const rules = {
    createHTML: createTypes,
    createScript: createTypes,
    createScriptURL: createTypes,
};
/**
 * This policy returns Trusted Types if the passed literal is static.
 */
let staticPolicy;
if (window.trustedTypes) {
    staticPolicy = window.trustedTypes.createPolicy('static-types', rules);
}
else {
    staticPolicy = rules;
}
/**
 * Returns TrustedHTML if the passed literal is static.
 */
function getTrustedHTML(literal) {
    return staticPolicy.createHTML('', literal);
}

function getTemplate$1() {
    return getTrustedHTML `<!--_html_template_start_--><style>:host{clip:rect(0 0 0 0);height:1px;overflow:hidden;position:fixed;width:1px}</style>

<div id="messages" role="alert" aria-live="polite" aria-relevant="additions">
</div>
<!--_html_template_end_-->`;
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * 150ms seems to be around the minimum time required for screen readers to
 * read out consecutively queued messages.
 */
const TIMEOUT_MS = 150;
/**
 * A map of an HTML element to its corresponding CrA11yAnnouncerElement. There
 * may be multiple CrA11yAnnouncerElements on a page, especially for cases in
 * which the DocumentElement's CrA11yAnnouncerElement becomes hidden or
 * deactivated (eg. when a modal dialog causes the CrA11yAnnouncerElement to
 * become inaccessible).
 */
const instances = new Map();
function getInstance(container = document.body) {
    if (instances.has(container)) {
        return instances.get(container);
    }
    assert(container.isConnected);
    const instance = new CrA11yAnnouncerElement();
    container.appendChild(instance);
    instances.set(container, instance);
    return instance;
}
class CrA11yAnnouncerElement extends CustomElement {
    constructor() {
        super(...arguments);
        this.currentTimeout_ = null;
        this.messages_ = [];
    }
    static get is() {
        return 'cr-a11y-announcer';
    }
    static get template() {
        return getTemplate$1();
    }
    disconnectedCallback() {
        if (this.currentTimeout_ !== null) {
            clearTimeout(this.currentTimeout_);
            this.currentTimeout_ = null;
        }
        for (const [parent, instance] of instances) {
            if (instance === this) {
                instances.delete(parent);
                break;
            }
        }
    }
    announce(message) {
        if (this.currentTimeout_ !== null) {
            clearTimeout(this.currentTimeout_);
            this.currentTimeout_ = null;
        }
        this.messages_.push(message);
        this.currentTimeout_ = setTimeout(() => {
            const messagesDiv = this.shadowRoot.querySelector('#messages');
            messagesDiv.innerHTML = window.trustedTypes.emptyHTML;
            // 
            for (const message of this.messages_) {
                const div = document.createElement('div');
                div.textContent = message;
                messagesDiv.appendChild(div);
            }
            // Dispatch a custom event to allow consumers to know when certain alerts
            // have been sent to the screen reader.
            this.dispatchEvent(new CustomEvent('cr-a11y-announcer-messages-sent', { bubbles: true, detail: { messages: this.messages_.slice() } }));
            this.messages_.length = 0;
            this.currentTimeout_ = null;
        }, TIMEOUT_MS);
    }
}
customElements.define(CrA11yAnnouncerElement.is, CrA11yAnnouncerElement);

// ui/webui/resources/cr_components/color_change_listener/color_change_listener.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class PageHandlerPendingReceiver {
    handle;
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'color_change_listener.mojom.PageHandler', scope);
    }
}
class PageHandlerRemote {
    proxy;
    $;
    onConnectionError;
    constructor(handle) {
        this.proxy =
            new mojo.internal.interfaceSupport.InterfaceRemoteBase(PageHandlerPendingReceiver, handle);
        this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);
        this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
    }
    setPage(page) {
        this.proxy.sendMessage(0, PageHandler_SetPage_ParamsSpec.$, null, [
            page
        ]);
    }
}
class PageHandler {
    static get $interfaceName() {
        return "color_change_listener.mojom.PageHandler";
    }
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote() {
        let remote = new PageHandlerRemote;
        remote.$.bindNewPipeAndPassReceiver().bindInBrowser();
        return remote;
    }
}
class PagePendingReceiver {
    handle;
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'color_change_listener.mojom.Page', scope);
    }
}
class PageRemote {
    proxy;
    $;
    onConnectionError;
    constructor(handle) {
        this.proxy =
            new mojo.internal.interfaceSupport.InterfaceRemoteBase(PagePendingReceiver, handle);
        this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);
        this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
    }
    onColorProviderChanged() {
        this.proxy.sendMessage(0, Page_OnColorProviderChanged_ParamsSpec.$, null, []);
    }
}
/**
 * An object which receives request messages for the Page
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
class PageCallbackRouter {
    helper_internal_;
    $;
    router_;
    onColorProviderChanged;
    onConnectionError;
    constructor() {
        this.helper_internal_ = new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(PageRemote);
        this.$ = new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);
        this.router_ = new mojo.internal.interfaceSupport.CallbackRouter;
        this.onColorProviderChanged =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(0, Page_OnColorProviderChanged_ParamsSpec.$, null, this.onColorProviderChanged.createReceiverHandler(false /* expectsResponse */));
        this.onConnectionError = this.helper_internal_.getConnectionErrorEventRouter();
    }
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id) {
        return this.router_.removeListener(id);
    }
}
const PageHandler_SetPage_ParamsSpec = { $: {} };
const Page_OnColorProviderChanged_ParamsSpec = { $: {} };
mojo.internal.Struct(PageHandler_SetPage_ParamsSpec.$, 'PageHandler_SetPage_Params', [
    mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(PageRemote), null, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(Page_OnColorProviderChanged_ParamsSpec.$, 'Page_OnColorProviderChanged_Params', [], [[0, 8],]);

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview This file provides a singleton class that exposes the Mojo
 * handler interface used for one way communication between the JS and the
 * browser.
 * TODO(tluk): Convert this into typescript once all dependencies have been
 * fully migrated.
 */
let instance = null;
class BrowserProxy {
    callbackRouter;
    constructor() {
        this.callbackRouter = new PageCallbackRouter();
        const pageHandlerRemote = PageHandler.getRemote();
        pageHandlerRemote.setPage(this.callbackRouter.$.bindNewPipeAndPassRemote());
    }
    static getInstance() {
        return instance || (instance = new BrowserProxy());
    }
    static setInstance(newInstance) {
        instance = newInstance;
    }
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview This file holds the functions that allow WebUI to update its
 * colors CSS stylesheet when a ColorProvider change in the browser is detected.
 */
/**
 * The CSS selector used to get the <link> node with the colors.css stylesheet.
 * The wildcard is needed since the URL ends with a timestamp.
 */
const COLORS_CSS_SELECTOR = 'link[href*=\'//theme/colors.css\']';
let documentInstance = null;
// 
// Event fired after updated colors have been fetched and applied.
const COLOR_PROVIDER_CHANGED = 'color-provider-changed';
// 
class ColorChangeUpdater {
    listenerId_ = null;
    root_;
    // 
    eventTarget = new EventTarget();
    // 
    constructor(root) {
        assert(documentInstance === null || root !== document);
        this.root_ = root;
    }
    /**
     * Starts listening for ColorProvider changes from the browser and updates the
     * `root_` whenever changes occur.
     */
    start() {
        if (this.listenerId_ !== null) {
            return;
        }
        this.listenerId_ = BrowserProxy.getInstance()
            .callbackRouter.onColorProviderChanged.addListener(this.onColorProviderChanged.bind(this));
    }
    // TODO(dpapad): Figure out how to properly trigger
    // `callbackRouter.onColorProviderChanged` listeners from tests and make this
    // method private.
    async onColorProviderChanged() {
        await this.refreshColorsCss();
        // 
        this.eventTarget.dispatchEvent(new CustomEvent(COLOR_PROVIDER_CHANGED));
        // 
    }
    /**
     * Forces `root_` to refresh its colors.css stylesheet. This is used to
     * fetch an updated stylesheet when the ColorProvider associated with the
     * WebUI has changed.
     * @return A promise which resolves to true once the new colors are loaded and
     *     installed into the DOM. In the case of an error returns false. When a
     *     new colors.css is loaded, this will always freshly query the existing
     *     colors.css, allowing multiple calls to successfully remove existing,
     *     outdated CSS.
     */
    async refreshColorsCss() {
        const colorCssNode = this.root_.querySelector(COLORS_CSS_SELECTOR);
        if (!colorCssNode) {
            return false;
        }
        const href = colorCssNode.getAttribute('href');
        if (!href) {
            return false;
        }
        const hrefURL = new URL(href, location.href);
        const params = new URLSearchParams(hrefURL.search);
        params.set('version', new Date().getTime().toString());
        const newHref = `${hrefURL.origin}${hrefURL.pathname}?${params.toString()}`;
        // A flickering effect may take place when setting the href property of
        // the existing color css node with a new value. In order to avoid
        // flickering, we create a new link element and once it is loaded we
        // remove the old one. See crbug.com/1365320 for additional details.
        const newColorsCssLink = document.createElement('link');
        newColorsCssLink.setAttribute('href', newHref);
        newColorsCssLink.rel = 'stylesheet';
        newColorsCssLink.type = 'text/css';
        const newColorsLoaded = new Promise(resolve => {
            newColorsCssLink.onload = resolve;
        });
        if (this.root_ === document) {
            document.getElementsByTagName('body')[0].appendChild(newColorsCssLink);
        }
        else {
            this.root_.appendChild(newColorsCssLink);
        }
        await newColorsLoaded;
        const oldColorCssNode = document.querySelector(COLORS_CSS_SELECTOR);
        if (oldColorCssNode) {
            oldColorCssNode.remove();
        }
        return true;
    }
    static forDocument() {
        return documentInstance ||
            (documentInstance = new ColorChangeUpdater(document));
    }
}

function getTemplate() {
    return html `<!--_html_template_start_--><style>:host{--emoji-group-button-size:0;--emoji-picker-height:0;--emoji-picker-side-padding:0;--emoji-picker-top-padding:0;--emoji-picker-width:0;--emoji-size:0;--emoji-spacing:0;--emoji-per-row:0;--emoji-group-clear-recents-icon-size:16px;--emoji-group-heading-padding-bottom:6px;--emoji-group-heading-padding-top:10px;--emoji-group-heading-size:32px;--emoji-group-tabs-left:0;--emoji-hover-background:var(--cros-ripple-color);--emoji-picker-bottom-padding:14px;--emoji-picker-last-emoji-left:calc(var(--emoji-picker-side-padding)
            + var(--emoji-size) * (var(--emoji-per-row) - 1)
            + var(--emoji-spacing) * (var(--emoji-per-row) - 1));--emoji-picker-group-highlight-bar-width:24px;--emoji-picker-subcategory-bar-inline-margin:18px;--emoji-tooltip-delay-in:500ms;--emoji-tooltip-delay-out:500ms;--emoji-picker-category-header-color:var(--cros-sys-on_surface_variant,
                                          var(--cros-text-color-secondary));--emoji-picker-container-color:var(--cros-sys-base_elevated,
                                    var(--cros-bg-color));--emoji-picker-focus-ring-color:var(--cros-sys-focus_ring,
                                     var(--cros-focus-ring-color));--emoji-picker-icon-button-icon-color:var(--cros-sys-on_surface,
                                           var(--cros-icon-color-primary));--emoji-picker-icon-toggle-unselected-color:var(--cros-sys-on_surface,
                                                 var(--cros-icon-color-secondary));--emoji-picker-icon-toggle-selected-color:var(--cros-sys-primary,
                                               var(--cros-icon-color-prominent));--emoji-picker-icon-toggle-selected-container-color:var(--cros-sys-app_base_shaded,
                                                         var(--cros-highlight-color));--emoji-picker-illustration-text-color:var(--cros-sys-on_surface_variant,
                                     var(--cros-button-label-color-secondary-disabled));--emoji-picker-illustration-link-color:var(--cros-sys-primary,
                                     var(--cros-icon-color-prominent));--emoji-picker-nudge-background-color:var(--cros-sys-primary,
                                           var(--cros-nudge-background-color));--emoji-picker-nudge-icon-color:var(--cros-sys-on_primary,
                                     var(--cros-button-icon-color-primary));--emoji-picker-search-field-clear-icon-color:var(--cros-sys-secondary,
                                                  var(--cros-icon-color-primary));--emoji-picker-search-field-placeholder-color:var(--cros-sys-secondary,
                                                   var(--cros-text-color-disabled));--emoji-picker-search-field-search-icon-color:var(--cros-sys-secondary,
                                                   var(--cros-text-color-secondary));--emoji-picker-search-field-container-color:var(--cros-sys-input_field_on_base,
                                                 var(--cros-toolbar-search-bg-color));--emoji-picker-symbol-color:var(--cros-sys-on_surface,
                                 var(--cros-text-color-primary));--emoji-picker-tab-selected-color:var(--cros-sys-primary,
                                       var(--cros-icon-color-prominent));--emoji-picker-tab-unselected-color:var(--cros-sys-on_surface_variant,
                                         var(--cros-icon-color-secondary));background-color:var(--emoji-picker-container-color);display:flex;flex-direction:column;font:var(--cros-body-2-font);height:calc(var(--emoji-picker-height) - var(--emoji-picker-top-padding));margin-top:0;padding-top:var(--emoji-picker-top-padding);width:var(--emoji-picker-width)}.search-side-padding,.side-padding{flex-grow:0;flex-shrink:0;max-height:100%;overflow-y:scroll}.search-side-padding{padding-inline-end:var(--emoji-picker-search-side-padding);padding-inline-start:var(--emoji-picker-search-side-padding)}.side-padding{padding-inline-end:var(--emoji-picker-side-padding);padding-inline-start:var(--emoji-picker-side-padding)}#list-container,#search-container{display:flex;flex-direction:column;overflow-y:clip}#list-container{margin-top:-6px}#search-container{flex-grow:0}#tabs{display:grid;grid-gap:var(--emoji-spacing);grid-template-columns:repeat(100,1fr);left:var(--emoji-group-tabs-left);overflow-x:hidden;padding-top:var(--emoji-picker-tabs-vertical-padding,6px);padding-bottom:var(--emoji-picker-tabs-vertical-padding,6px);scroll-behavior:smooth;scroll-padding:var(--emoji-size);scroll-snap-type:x mandatory;width:100%}#tabs::-webkit-scrollbar{display:none}#tabs::-webkit-scrollbar{display:none}#groups{flex-grow:1;flex-shrink:1;overflow-y:scroll;padding-bottom:var(--emoji-picker-bottom-padding)}.chevron{--cr-icon-button-fill-color:var(--emoji-picker-icon-button-icon-color);--cr-icon-button-focus-outline-color:var(--emoji-picker-focus-ring-color);--cr-icon-button-icon-size:20px;--cr-icon-button-size:28px;background-color:var(--emoji-picker-container-color);border-radius:0;margin:0;padding:0;position:absolute;width:var(--emoji-size);z-index:2}#right-chevron{left:var(--emoji-picker-last-emoji-left);padding-inline-end:var(--emoji-picker-side-padding)}#left-chevron{display:none;left:var(--emoji-picker-side-padding)}.divider{border-top:1px solid var(--cros-separator-color);margin-inline:var(--emoji-picker-divider-inline-margin,var(--emoji-picker-subcategory-bar-inline-margin))}.sr-only{color:transparent;position:absolute;z-index:-2}.hidden{display:none}#bar-container[jelly-support]{margin-top:-4px}#bar-container[jelly-support]>#bar{height:4px;border-top-left-radius:4px;border-top-right-radius:4px}#bar{background-color:var(--emoji-picker-tab-selected-color);border-top-left-radius:2px;border-top-right-radius:2px;display:none;flex-shrink:0;height:2px;left:0;padding-inline-end:calc((var(--emoji-size) - var(--emoji-picker-group-highlight-bar-width))/ 2);padding-inline-start:calc((var(--emoji-size) - var(--emoji-picker-group-highlight-bar-width))/ 2);position:relative;width:var(--emoji-picker-group-highlight-bar-width)}.fake{flex-shrink:0;width:var(--emoji-size)}#dummyTab{border:0;height:1em;line-height:0;margin:0;padding:0;position:absolute;visibility:hidden}.sr-only{user-select:none}.pagination{align-items:center;display:flex;width:var(--emoji-picker-width)}:host(:not([text-subcategory-bar-enabled])) #tabs{grid-gap:var(--emoji-group-spacing)}:host(:not([text-subcategory-bar-enabled])) #left-chevron{display:none}:host(:not([text-subcategory-bar-enabled])) #right-chevron{display:none}:host([text-subcategory-bar-enabled]) .chevron{--cr-icon-button-size:var(--emoji-size);width:var(--emoji-size)}:host([text-subcategory-bar-enabled]) #left-chevron{left:var(--emoji-picker-subcategory-bar-inline-margin);margin-inline-end:var(--tab-button-margin);border-radius:var(--emoji-picker-group-button-border-radius,0)}:host([text-subcategory-bar-enabled]) #right-chevron{left:calc(var(--emoji-picker-width) - var(--emoji-size) - var(--emoji-picker-subcategory-bar-inline-margin));padding-inline-end:0;--cr-icon-button-fill-color:var(--emoji-picker-icon-button-icon-color);border-radius:var(--emoji-picker-group-button-border-radius,0)}:host([text-subcategory-bar-enabled]) #tabs{align-items:center;grid-gap:unset}:host([text-subcategory-bar-enabled]) #bar{margin-inline:9px;padding-inline:0}:host(:not([text-subcategory-bar-enabled])) #bar{margin-inline:4px;padding-inline:0}.category-gap{height:16px}#list-container.error-only{flex:1}#list-container.error-only>:not(#groups,#dummyTab){display:none}#list-container.error-only>#groups{display:block;flex-grow:0;margin:auto}#list-container.error-only>#groups>:not(emoji-error){display:none}#list-container.error-only emoji-error{display:block}#list-container.no-gif emoji-group[category=gif]{display:none}</style>

<div class="sr-only" aria-live="polite">
  Insert emoji by activating them. Close with escape.
  Some emoji have variants which can be opened with context menu.
  Use the emoji group buttons or headings to jump to emoji groups.
</div>

<div id="message" class="sr-only" aria-live="polite"></div>
  <emoji-search class="search-side-padding" id="search-container" categories-data="[[categoriesData]]" lazy-indexing="[[searchLazyIndexing]]" on-scroll="onSearchScroll" category-metadata="[[getCategoryMetadata(gifSupport, category)]]" gif-support$="[[gifSupport]]" jelly-support$="[[jellySupport]]" close-gif-nudge-overlay="[[closeGifNudgeOverlay]]" global-tone="[[getGlobalTone()]]" global-gender="[[getGlobalGender()]]">
  </emoji-search>

<div id="list-container" class$="[[computeListContainerClass(category, status)]]">
  <div class="sr-only" role="heading" aria-level="1">Emoji Group Buttons</div>
  <div class="side-padding">
    <div id="tabs" on-scroll="onGroupsScroll">
      <cr-icon-button id="left-chevron" class="chevron" aria-label$="[[getLeftChevronAriaLabel(gifSupport)]]" on-click="onLeftChevronClick" iron-icon="emoji_picker:keyboard_arrow_left">
      </cr-icon-button>
      <template is="dom-if" if="[[!textSubcategoryBarEnabled]]">
        <template is="dom-repeat" items="[[emojiGroupTabs]]">
          <emoji-group-button data-group$="[[item.groupId]]" group-id="[[item.groupId]]" active="[[item.active]]" disabled="[[item.disabled]]" icon="[[item.icon]]" name="[[item.name]]" on-focus="preventV2TabScrolling" custom-tab-index="[[getTabIndex(item.pagination,pagination)]]">>
          </emoji-group-button>
        </template>
        
        <div class="fake" tabindex="-1">
        </div>
        <div class="fake" tabindex="-1">
        </div>
        <div class="fake" tabindex="-1">
        </div>
        <div class="fake" tabindex="-1">
        </div>
        <div class="fake" tabindex="-1">
        </div>
        <div class="fake" id="RightChevronScrollTarget" tabindex="-1">
        </div>
      </template>
      <template is="dom-if" if="[[textSubcategoryBarEnabled]]">
        <div class="pagination">
          
          <emoji-group-button data-group$="[[emojiGroupTabs.0.groupId]]" group-id="[[emojiGroupTabs.0.groupId]]" active="[[emojiGroupTabs.0.active]]" disabled="[[emojiGroupTabs.0.disabled]]" icon="[[emojiGroupTabs.0.icon]]" name="[[emojiGroupTabs.0.name]]" class="tab" on-focus="preventV2TabScrolling" custom-tab-index="[[getTabIndex(item.pagination,pagination)]]">
          </emoji-group-button>
          
          
          <template is="dom-repeat" items="[[emojiGroupTabs]]" filter="[[filterGroupTabByPagination(1)]]">
            <text-group-button data-group$="[[item.groupId]]" group-id="[[item.groupId]]" active="[[item.active]]" disabled="[[item.disabled]]" jelly-support$="[[jellySupport]]" name="[[item.name]]" class="tab" on-focus="preventV2TabScrolling" custom-tab-index="[[getTabIndex(item.pagination,pagination)]]">
            </text-group-button>
          </template>
        </div>
        <template is="dom-repeat" as="pageNumber" filter="isNotFirstPage" items="[[getPaginationArray(emojiGroupTabs)]]">
          <div class="pagination">
            <template is="dom-repeat" items="[[emojiGroupTabs]]" filter="[[filterGroupTabByPagination(pageNumber)]]">
              <text-group-button data-group$="[[item.groupId]]" group-id="[[item.groupId]]" active="[[item.active]]" disabled="[[item.disabled]]" jelly-support$="[[jellySupport]]" name="[[item.name]]" class="tab" on-focus="preventV2TabScrolling" custom-tab-index="[[getTabIndex(item.pagination,pagination)]]">
              </text-group-button>
            </template>
          </div>
        </template>
      </template>
      <cr-icon-button id="right-chevron" class="chevron" aria-label$="[[getRightChevronAriaLabel(gifSupport)]]" on-click="onRightChevronClick" on-keydown="onRightChevronKeyDown" iron-icon="emoji_picker:keyboard_arrow_right">
      </cr-icon-button>
    </div>
  </div>
  <div class="sr-only" role="heading" aria-level="1">Emoji Groups</div>
  <div class="side-padding" id="bar-container" jelly-support$="[[jellySupport]]">
    <div id="bar" on-transitionend="onBarTransitionEnd" on-transitionstart="onBarTransitionStart"></div>
  </div>
  <div class="divider"></div>
  <div class="side-padding" id="groups" on-scroll="onEmojiScroll">
    <template is="dom-repeat" items="[[categoriesGroupElements]]">
      <div data-group$="[[item.groupId]]">
        <emoji-group data="[[item.emoji]]" gif-support$="[[gifSupport]]" jelly-support$="[[jellySupport]]" group="[[item.name]]" global-tone="[[getGlobalTone()]]" global-gender="[[getGlobalGender()]]" preferred="[[item.preferences]]" clearable$="[[item.isHistory]]" category$="[[item.category]]" class$="[[getEmojiGroupClassNames(item.emoji,item,category,activeInfiniteGroupId)]]">
        </emoji-group>
      </div>
    </template>
    <template is="dom-if" if="[[isGifInErrorState(status)]]">
      <emoji-error status="[[status]]" error-message="[[errorMessage]]" jelly-support$="[[jellySupport]]">
      </emoji-error>
    </template>
  </div>
  
  <div id="dummyTab">
    <text-group-button data-group$="[[dummyTab]]" group-id="[[dummyTab.groupId]]" active="[[dummyTab.active]]" disabled="[[dummyTab.disabled]]" jelly-support$="[[jellySupport]]" name="[[dummyTab.name]]" class="tab" on-focus="preventV2TabScrolling" custom-tab-index="[[getTabIndex(dummyTab.pagination,pagination)]]">
    </text-group-button>
  </div>
</div>

<template is="dom-if" if="[[showGifNudgeOverlay]]">
  <emoji-gif-nudge-overlay close-overlay="[[closeGifNudgeOverlay]]">
</emoji-gif-nudge-overlay></template>
<!--_html_template_end_-->`;
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * TODO(b/233271528): Remove metadata_extension module.
 * This module includes tab details which is better to be extracted dynamically
 * from the emoji group data directly.
 */
const RECENTLY_USED_NAME = 'Recently used';
/**
 * Creates a list of tabs with all required information for rendering given
 * category orders and basic info of each tab. It also adds tabs for "Recently
 * used" group as the first tab of each category.
 */
function makeGroupTabs(categories, categoryBaseEmojis) {
    const groupTabs = [];
    let groupId = 0;
    // TODO(b/216190190): Change groupId to number type.
    for (const category of categories) {
        // Add recently used tab.
        groupTabs.push({
            name: RECENTLY_USED_NAME,
            icon: 'emoji_picker_v2:emoji_recent',
            category: category,
            groupId: `${category}-history`,
            active: false,
            disabled: true,
            pagination: 1,
        });
        let pagination = 1;
        categoryBaseEmojis[category]?.forEach(tab => {
            // Update pagination if provided.
            pagination = tab.pagination || pagination;
            // Add new tab.
            groupTabs.push({
                name: tab.name,
                icon: tab.icon,
                category: category,
                pagination: pagination,
                groupId: groupId.toString(),
                active: false,
                disabled: false,
            });
            groupId++;
        });
    }
    return groupTabs;
}
const CATEGORY_METADATA = [
    {
        name: CategoryEnum.EMOJI,
        icon: 'emoji_picker_v2:emoji_emojis_outlined',
        active: true,
    },
    {
        name: CategoryEnum.SYMBOL,
        icon: 'emoji_picker_v2:emoji_symbols',
        active: false,
    },
    {
        name: CategoryEnum.EMOTICON,
        icon: 'emoji_picker_v2:emoji_emoticons',
        active: false,
    },
];
const GIF_CATEGORY_METADATA = [
    ...CATEGORY_METADATA,
    {
        name: CategoryEnum.GIF,
        icon: 'emoji_picker_v2:emoji_gif',
        active: false,
    },
];
const CATEGORY_TABS = {
    'emoji': [
        {
            name: 'Smileys & Emotions',
            icon: 'emoji_picker_v2:emoji_emojis_filled',
            pagination: 1,
        },
        {
            name: 'People',
            icon: 'emoji_picker:emoji_people',
        },
        {
            name: 'Animals & Nature',
            icon: 'emoji_picker:emoji_nature',
        },
        {
            name: 'Food & Drink',
            icon: 'emoji_picker:emoji_food_beverage',
        },
        {
            name: 'Travel & Places',
            icon: 'emoji_picker:emoji_transportation',
        },
        {
            name: 'Activities & Events',
            icon: 'emoji_picker:emoji_events',
        },
        {
            name: 'Objects',
            icon: 'emoji_picker:emoji_objects',
        },
        {
            name: 'Symbols',
            icon: 'emoji_picker:emoji_symbols',
        },
        {
            name: 'Flags',
            icon: 'emoji_picker:flag',
        },
    ],
    'emoticon': [
        { name: 'Classic', pagination: 1 },
        { name: 'Smiling' },
        { name: 'Love' },
        { name: 'Hugging' },
        { name: 'Flexing' },
        { name: 'Animals', pagination: 2 },
        { name: 'Surprising' },
        { name: 'Dancing' },
        { name: 'Shrugging' },
        { name: 'Table Flipping', pagination: 3 },
        { name: 'Disapproving' },
        { name: 'Crying' },
        { name: 'Worrying', pagination: 4 },
        { name: 'Pointing' },
        { name: 'Sparkling' },
    ],
    'symbol': [
        { name: 'Arrows', pagination: 1 },
        { name: 'Bullet/Stars' },
        { name: 'Currency' },
        { name: 'Letterlike', pagination: 2 },
        { name: 'Math' },
        { name: 'Miscellaneous' },
    ],
};
// TODO(b/233271528): Remove the list and load it from the input data.
/**
 * The list of tabs based on the order of category buttons and basic tab info
 * of each category.
 */
const SUBCATEGORY_TABS = makeGroupTabs(CATEGORY_METADATA.map(item => item.name), CATEGORY_TABS);
const SUBCATEGORY_TABS_GIF_SUPPORT = makeGroupTabs(GIF_CATEGORY_METADATA.map(item => item.name), CATEGORY_TABS);
const gifCategoryTabs = (categories) => makeGroupTabs(GIF_CATEGORY_METADATA.map(item => item.name), categories);
// A mapping from each category to the index of their first tab.
const TABS_CATEGORY_START_INDEX = new Map(SUBCATEGORY_TABS.map((item, index) => [item.category, index])
    .reverse());
const TABS_CATEGORY_START_INDEX_GIF_SUPPORT = new Map(SUBCATEGORY_TABS_GIF_SUPPORT
    .map((item, index) => [item.category, index])
    .reverse());
const EMOJI_GROUP_TABS = makeGroupTabs([CategoryEnum.EMOJI], CATEGORY_TABS);

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const MAX_RECENTS = 10;
class Store {
    /**
     * @param storageKey The key to use in local storage.
     * @param defaultData The initial data for this store. A new copy should
     *     be passed for each `Store` instance.
     */
    constructor(storageKey, defaultData) {
        this.storageKey = storageKey;
        this.data = this.load(defaultData);
    }
    /**
     * @param defaultData The initial data for this store. A new copy should
     *     be passed each time this is called.
     * @return The data from local storage if it exists, otherwise a reference
     *     to `defaultData`.
     */
    load(defaultData) {
        const stored = window.localStorage.getItem(this.storageKey);
        if (!stored) {
            return defaultData;
        }
        const parsed = JSON.parse(stored);
        // Checking for null because values of type 'object' can still be null.
        if (typeof defaultData !== 'object' || defaultData === null ||
            typeof parsed !== 'object' || parsed === null) {
            return parsed;
        }
        // Throw out any old data.
        const filteredEntries = Object.entries(parsed).filter(([key, _]) => key in defaultData);
        return { ...defaultData, ...Object.fromEntries(filteredEntries) };
    }
    /**
     * Saves the existing data to local storage.
     */
    save() {
        window.localStorage.setItem(this.storageKey, JSON.stringify(this.data));
    }
}
class RecentlyUsedStore {
    constructor(name) {
        this.store = new Store(name, { history: [], preference: {} });
    }
    /**
     * Saves preferences for a base emoji.
     * returns True if any preferences are updated and false
     *    otherwise.
     */
    savePreferredVariant(variant, baseEmoji) {
        // If `baseEmoji == undefined`, then variant itself is a base emoji.
        if (!baseEmoji) {
            baseEmoji = variant;
        }
        const preference = this.store.data.preference;
        // Base emoji must not be set as preference. So, store it only
        // if variant and baseEmoji are different and remove it from preference
        // otherwise.
        if (baseEmoji !== variant && variant) {
            preference[baseEmoji] = variant;
        }
        else if (baseEmoji in preference) {
            delete preference[baseEmoji];
        }
        else {
            return false;
        }
        this.store.save();
        return true;
    }
    getHistory() {
        return this.store.data.history;
    }
    isHistoryEmpty() {
        return this.store.data.history.length === 0;
    }
    getPreferenceMapping() {
        return this.store.data.preference;
    }
    clearRecents() {
        this.store.data.history = [];
        this.store.save();
    }
    clearItem(category, item) {
        const history = this.store.data.history;
        if (category === CategoryEnum.GIF) {
            this.store.data.history = history.filter(x => (x.base.visualContent &&
                x.base.visualContent.id !== item.base.visualContent?.id));
        }
        else {
            this.store.data.history = history.filter(x => (x.base.string && x.base.string !== item.base.string));
        }
        this.store.save();
    }
    /**
     * Moves the given item to the front of the MRU list, inserting it if
     * it did not previously exist.
     */
    bumpItem(category, newItem) {
        const history = this.store.data.history;
        // Find and remove newItem from array if it previously existed.
        // Note, this explicitly allows for multiple recent item entries for the
        // same "base" emoji just with a different variant.
        let oldIndex;
        if (category === CategoryEnum.GIF) {
            oldIndex = history.findIndex(x => (x.base.visualContent &&
                x.base.visualContent.id === newItem.base.visualContent?.id));
        }
        else {
            oldIndex = history.findIndex(x => (x.base.string && x.base.string === newItem.base.string));
        }
        if (oldIndex !== -1) {
            history.splice(oldIndex, 1);
        }
        // insert newItem to the front of the array.
        history.unshift(newItem);
        // slice from end of array if it exceeds MAX_RECENTS.
        if (history.length > MAX_RECENTS) {
            // setting length is sufficient to truncate an array.
            history.length = MAX_RECENTS;
        }
        this.store.save();
    }
    /**
     * Fills any gaps in the variant and grouping information for emojis with the
     * given name, because existing store data may not have the information.
     */
    fillEmojiVariantAttributes(name, alternates, groupedTone = false, groupedGender = false) {
        const matchingEmojis = this.store.data.history.filter(emoji => emoji.base.name === ' ' + name);
        if (matchingEmojis.length == 0) {
            return;
        }
        matchingEmojis.forEach(emoji => {
            emoji.alternates = alternates;
            emoji.groupedTone = groupedTone;
            emoji.groupedGender = groupedGender;
        });
        this.store.save();
    }
    /**
     * Removes invalid GIFs from history.
     */
    async validate(apiProxy) {
        const history = this.store.data.history;
        if (history.length === 0) {
            // No GIFs to validate.
            return false;
        }
        // This function is only called on history items with visual content (i.e.
        // GIFs) so we can be confident an id will always exist.
        const ids = history.map(x => x.base.visualContent.id);
        const { selectedGifs } = await apiProxy.getGifsByIds(ids);
        const map = new Map();
        selectedGifs.forEach(gif => {
            map.set(gif.id, gif);
        });
        const validGifHistory = history.filter(item => map.has(item.base.visualContent.id));
        const updated = (validGifHistory.length !== history.length);
        if (updated) {
            this.store.data.history = validGifHistory;
            this.store.save();
        }
        return updated;
    }
}
class EmojiPreferencesStore {
    constructor() {
        this.store = new Store('emoji-preferences', { tone: null, gender: null });
    }
    getTone() {
        return this.store.data.tone;
    }
    setTone(tone) {
        this.store.data.tone = tone;
        this.store.save();
    }
    getGender() {
        return this.store.data.gender;
    }
    setGender(gender) {
        this.store.data.gender = gender;
        this.store.save();
    }
}
class GifNudgeHistoryStore {
    static { this.store = new Store('emoji-picker-gif-nudge-shown', false); }
    static hasNudgeShown() {
        return GifNudgeHistoryStore.store.data;
    }
    static setNudgeShown(value) {
        GifNudgeHistoryStore.store.data = value;
        GifNudgeHistoryStore.store.save();
    }
}

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class EmojiPickerApp extends PolymerElement {
    static get is() {
        return 'emoji-picker-app';
    }
    static get template() {
        return getTemplate();
    }
    static configs() {
        return {
            'dataUrls': {
                [CategoryEnum.EMOJI]: [
                    '/emoji_15_0_ordering_start.json',
                    '/emoji_15_0_ordering_remaining.json',
                ],
                [CategoryEnum.EMOTICON]: ['/emoticon_ordering.json'],
                [CategoryEnum.SYMBOL]: ['/symbol_ordering.json'],
                // GIFs are not preloaded hence the empty data url.
                [CategoryEnum.GIF]: [''],
            },
        };
    }
    static get properties() {
        return {
            category: { type: String, value: 'emoji', observer: 'onCategoryChanged' },
            emojiGroupTabs: { type: Array },
            dummyTab: {
                type: Object,
                value: () => ({
                    name: '',
                    groupId: '-1',
                    active: false,
                    disabled: false,
                    category: CategoryEnum.GIF,
                }),
            },
            categoriesData: { type: Array, value: () => ([]) },
            categoriesGroupElements: { type: Array, value: () => ([]) },
            activeInfiniteGroupId: { type: String, value: null },
            categoriesHistory: { type: Object, value: () => ({}) },
            pagination: { type: Number, value: 1, observer: 'onPaginationChanged' },
            searchLazyIndexing: { type: Boolean, value: true },
            textSubcategoryBarEnabled: {
                type: Boolean,
                value: false,
                computed: 'isTextSubcategoryBarEnabled(category)',
                reflectToAttribute: true,
            },
            searchExtensionEnabled: { type: Boolean, value: false },
            incognito: { type: Boolean, value: true },
            gifSupport: { type: Boolean, value: false },
            // TODO(b/297297441): Remove this property once jelly in emoji picker is
            // fully launched.
            jellySupport: { type: Boolean, value: false },
            sealSupport: { type: Boolean, value: false },
            variantGroupingSupport: { type: Boolean, value: false },
            showGifNudgeOverlay: { type: Boolean, value: false },
            nextGifPos: { type: Object, value: () => ({}) },
            status: { type: Status, value: null },
            errorMessage: { type: String, value: NO_INTERNET_VIEW_ERROR_MSG },
        };
    }
    constructor() {
        super();
        this.emojiGroupTabs = EMOJI_GROUP_TABS;
        this.allCategoryTabs = SUBCATEGORY_TABS;
        this.emojiPreferences = new EmojiPreferencesStore();
        this.activeVariant = null;
        this.apiProxy = EmojiPickerApiProxyImpl.getInstance();
        this.autoScrollingToGroup = false;
        this.highlightBarMoving = false;
        // Incognito mode is set based on the default value.
        this.updateIncognitoState(this.incognito);
        this.previousGifValidation = this.loadPreviousGifValidationTime();
        this.addEventListener(GROUP_BUTTON_CLICK, (ev) => this.selectGroup(ev.detail.group));
        this.addEventListener(EMOJI_TEXT_BUTTON_CLICK, (ev) => this.onEmojiTextButtonClick(ev));
        this.addEventListener(EMOJI_IMG_BUTTON_CLICK, (ev) => this.onEmojiImgButtonClick(ev));
        this.addEventListener(EMOJI_CLEAR_RECENTS_CLICK, (ev) => this.clearRecentEmoji(ev));
        // variant popup related handlers
        this.addEventListener(EMOJI_VARIANTS_SHOWN, (ev) => this.onShowEmojiVariants(ev));
        this.addEventListener('click', () => this.hideDialogs());
        this.addEventListener(CATEGORY_BUTTON_CLICK, (ev) => this.onCategoryButtonClick(ev.detail.categoryName));
        this.addEventListener('search', ev => this.onSearchChanged(ev.detail));
        this.addEventListener(GIF_ERROR_TRY_AGAIN, this.onClickTryAgain);
        // This function will be passed down to some child element, thus we need
        // `bind(this)`.
        this.closeGifNudgeOverlay = this.closeGifNudgeOverlay.bind(this);
    }
    filterGroupTabByPagination(pageNumber) {
        return function (tab) {
            return tab.pagination === pageNumber && !tab.groupId.includes('history');
        };
    }
    initHistoryUi(incognito) {
        if (incognito !== this.incognito) {
            this.updateIncognitoState(incognito);
        }
        this.updateHistoryTabDisabledProperty();
        // Make highlight bar visible (now we know where it should be) and
        // add smooth sliding.
        this.updateActiveGroup();
        this.$.bar.style.display = 'block';
        this.$.bar.style.transition = 'left 200ms';
    }
    ready() {
        super.ready();
        const METADATA = this.gifSupport ? GIF_CATEGORY_METADATA : CATEGORY_METADATA;
        // Ensure first category is emoji for compatibility with V1.
        if (METADATA[0]?.name !== CategoryEnum.EMOJI) {
            throw new Error(`First category is ${METADATA[0]?.name} but must be 'emoji'.`);
        }
        const dataUrls = EmojiPickerApp.configs().dataUrls;
        // Create an ordered list of category and urls based on the order that
        // categories need to appear in the UIs.
        const categoryDataUrls = METADATA.filter((item) => dataUrls[item.name])
            .map(item => ({ 'category': item.name, 'urls': dataUrls[item.name] }));
        // Fetch and process all the data.
        this.fetchAndProcessDataPromise = this.fetchAndProcessData(categoryDataUrls);
        this.updateStyles({
            '--emoji-group-button-size': EMOJI_GROUP_SIZE_PX,
            '--emoji-picker-width': EMOJI_PICKER_WIDTH_PX,
            '--emoji-picker-height': EMOJI_PICKER_HEIGHT_PX,
            '--emoji-size': EMOJI_SIZE_PX,
            '--emoji-per-row': EMOJI_PER_ROW,
            '--emoji-picker-search-side-padding': EMOJI_PICKER_SIDE_PADDING_PX,
            '--emoji-picker-side-padding': EMOJI_PICKER_SIDE_PADDING_PX,
            '--emoji-picker-top-padding': EMOJI_PICKER_TOP_PADDING_PX,
            '--emoji-spacing': EMOJI_SPACING_PX,
            '--emoji-group-spacing': EMOJI_GROUP_SPACING_PX,
            '--visual-content-padding': VISUAL_CONTENT_PADDING_PX,
            '--visual-content-width': VISUAL_CONTENT_WIDTH_PX,
            '--tab-button-margin': TAB_BUTTON_MARGIN_PX,
            '--text-group-button-padding': TEXT_GROUP_BUTTON_PADDING_PX,
        });
    }
    async ensureFetchAndProcessDataFinished() {
        if (this.fetchAndProcessDataPromise !== null) {
            await this.fetchAndProcessDataPromise;
        }
    }
    /**
     * Fetches data and updates all the variables that are required to render
     * EmojiPicker UI. This function serves as the main entry for creating and
     * managing async calls dealing with fetching data and rendering UI in the
     * correct order. These include:
     *   * Feature list
     *   * Incognito state
     *   * Category data (emoji, emoticon, etc.)
     */
    async fetchAndProcessData(categoryDataUrls) {
        // Create a flat list of urls (with details) that need to be fetched and
        // rendered sequentially.
        const dataUrls = categoryDataUrls.flatMap(item => 
        // Create url details of the category.
        item.urls.map((url, index) => ({
            'category': item.category,
            'url': url,
            'categoryLastPartition': index === item.urls.length - 1,
        })));
        const firstResult = dataUrls[0];
        if (!firstResult) {
            return;
        }
        // Update feature list, incognito state and fetch data of first url.
        const initialData = await Promise
            .all([
            this.fetchOrderingData(firstResult.url),
            this.apiProxy.getFeatureList().then((response) => this.setActiveFeatures(response.featureList)),
            this.apiProxy.isIncognitoTextField().then((response) => this.initHistoryUi(response.incognito)),
        ])
            .then(values => values[0]); // Map to the fetched data only.
        if (this.jellySupport) {
            await this.loadJellyColorStylesheet();
            await this.loadJellyTypographyStylesheet();
        }
        // After initial data is loaded, if the GIF nudge is not shown before, show
        // the GIF nudge.
        if (this.gifSupport && !GifNudgeHistoryStore.hasNudgeShown()) {
            this.showGifNudgeOverlay = true;
        }
        if (this.gifSupport) {
            this.updateStyles({
                '--emoji-category-size': V2_5_EMOJI_CATEGORY_SIZE_PX,
                '--emoji-group-button-size': V2_5_EMOJI_GROUP_SIZE_PX,
                '--emoji-picker-side-padding': V2_5_EMOJI_PICKER_SIDE_PADDING_PX,
                '--emoji-picker-search-side-padding': V2_5_EMOJI_PICKER_SEARCH_SIDE_PADDING_PX,
                '--emoji-spacing': V2_5_EMOJI_SPACING_PX,
                '--emoji-group-spacing': V2_5_EMOJI_GROUP_SPACING_PX,
                '--visual-content-width': V2_5_VISUAL_CONTENT_WIDTH_PX,
            });
        }
        if (this.jellySupport) {
            this.updateStyles({
                '--emoji-picker-top-padding': JELLY_EMOJI_PICKER_TOP_PADDING_PX,
                '--emoji-picker-search-side-padding': JELLY_EMOJI_PICKER_SEARCH_SIDE_PADDING_PX,
                // The keyline should expand all the way with jelly flag on.
                '--emoji-picker-divider-inline-margin': 0,
                '--emoji-picker-tabs-vertical-padding': '0px',
                '--emoji-picker-group-button-padding': '8px',
                '--emoji-picker-group-button-border-radius': '4px',
                '--emoji-picker-group-button-icon-size': '24px',
                '--emoji-picker-group-button-height': '48px',
            });
        }
        // Update UI and relevant features based on the initial data.
        this.updateCategoryData(
        // If we don't have 1 data URL, a crash probably isn't a bad idea
        initialData, dataUrls[0].category, dataUrls[0].categoryLastPartition, false);
        // Show the UI after the initial data is rendered.
        afterNextRender(this, () => {
            this.apiProxy.showUi();
        });
        // Filter data, remove the first url as it is
        // already added and shown.
        const remainingData = dataUrls.slice(1);
        let prevFetchPromise = Promise.resolve([]);
        let prevRenderPromise = Promise.resolve();
        // Create a chain of promises for fetching and rendering data of
        // different categories in the correct order.
        remainingData.forEach((dataUrl, index) => {
            // Fetch the url only after the previous url is fetched.
            prevFetchPromise =
                prevFetchPromise.then(() => this.fetchOrderingData(dataUrl.url));
            // Update category data after the data is fetched and the previous
            // category data update/rendering completed successfully.
            prevRenderPromise = Promise
                .all([prevRenderPromise, prevFetchPromise])
                // Hacky cast below, but should be safe
                .then((values) => values[1])
                .then((data) => this.updateCategoryData(data, dataUrl.category, dataUrl.categoryLastPartition, index === remainingData.length - 1));
        });
        if (this.gifSupport) {
            await this.fetchAndProcessGifData(prevFetchPromise, prevRenderPromise);
        }
    }
    loadJellyColorStylesheet() {
        return new Promise((resolve) => {
            const linkElement = document.createElement('link');
            linkElement.rel = 'stylesheet';
            linkElement.href = 'chrome://theme/colors.css?sets=sys';
            linkElement.addEventListener('load', () => {
                ColorChangeUpdater.forDocument().start();
                resolve();
            });
            document.head.appendChild(linkElement);
        });
    }
    // TODO(b/263055563): Move this stylesheet to `index.html` and drop the legacy
    // stylesheet once Jelly is fully launched in Emoji Picker.
    loadJellyTypographyStylesheet() {
        return new Promise((resolve) => {
            const linkElement = document.createElement('link');
            linkElement.rel = 'stylesheet';
            linkElement.href = 'chrome://theme/typography.css';
            linkElement.addEventListener('load', () => {
                ColorChangeUpdater.forDocument().start();
                resolve();
            });
            document.head.appendChild(linkElement);
        });
    }
    fetchAndProcessGifData(prevFetchPromise = Promise.resolve([]), prevRenderPromise = Promise.resolve()) {
        this.validateRecentlyUsedGifs();
        // Set Recently Used and Trending in the GIF tabs first before fetching
        // Tenor API data
        const trendingGifData = { name: TRENDING };
        const initialCategoryTabs = {
            ...CATEGORY_TABS,
            gif: this.setGifGroupsPagination([trendingGifData]),
        };
        this.allCategoryTabs = gifCategoryTabs(initialCategoryTabs);
        // Fetch Tenor API category groups
        const categoriesFetchPromise = prevFetchPromise.then(() => this.apiProxy.getCategories());
        const categoriesRenderPromise = Promise.all([prevRenderPromise, categoriesFetchPromise])
            .then((values) => {
            const { gifCategories } = values[1];
            const categoryTabs = {
                ...CATEGORY_TABS,
                gif: this.setGifGroupsPagination([trendingGifData, ...gifCategories]),
            };
            gifCategories.map(category => this.nextGifPos[category.name] = '');
            this.allCategoryTabs = gifCategoryTabs(categoryTabs);
            // If user is on GIF category, update emojiGroupTabs to
            // re-render emoji picker and display newly fetched GIF tabs
            if (this.category === CategoryEnum.GIF) {
                const gifTabs = this.allCategoryTabs.filter(tab => tab.category === CategoryEnum.GIF);
                this.set('emojiGroupTabs', gifTabs);
                this.updateActiveGroup();
            }
        });
        const featuredGifFetchPromise = categoriesFetchPromise.then(() => this.apiProxy.getFeaturedGifs());
        return Promise.all([categoriesRenderPromise, featuredGifFetchPromise])
            .then((values) => {
            const { status, featuredGifs } = values[1];
            this.status = status;
            const trendingGifsElement = this.apiProxy.convertTenorGifsToEmoji(featuredGifs);
            const trendingGifs = [{
                    group: TRENDING,
                    category: CategoryEnum.GIF,
                    emoji: trendingGifsElement,
                }];
            this.nextGifPos[TRENDING] = featuredGifs.next;
            this.updateCategoryData(trendingGifs, CategoryEnum.GIF);
            this.activeInfiniteGroupId =
                this.allCategoryTabs.find(tab => tab.name === TRENDING)
                    ?.groupId;
        });
    }
    onClickTryAgain() {
        // The network error illustration only displays in GIF panel under offline
        // mode; in this case, after reloading data, we should switch back to GIF
        // panel (if it is successful).
        this.fetchAndProcessGifData().then(() => {
            this.onCategoryButtonClick(CategoryEnum.GIF);
        });
    }
    canScrollToGroup(category, groupId) {
        if (!this.isInfiniteCategory(category)) {
            return true;
        }
        // There will always be a trending GIF group (initialised at beginning),
        // hence it is safe to cast as SubcategoryData
        const trendingGifGroup = this.allCategoryTabs.find(tab => (tab.category === CategoryEnum.GIF &&
            tab.name === TRENDING));
        const historyGifGroup = this.categoriesGroupElements.find(group => group.category === CategoryEnum.GIF && group.isHistory);
        return [trendingGifGroup.groupId, historyGifGroup?.groupId].includes(groupId);
    }
    isInfiniteCategory(category) {
        return category === CategoryEnum.GIF;
    }
    setActiveFeatures(featureList) {
        this.searchExtensionEnabled =
            featureList.includes(Feature.EMOJI_PICKER_SEARCH_EXTENSION);
        this.gifSupport = featureList.includes(Feature.EMOJI_PICKER_GIF_SUPPORT);
        this.jellySupport =
            featureList.includes(Feature.EMOJI_PICKER_JELLY_SUPPORT);
        this.sealSupport = featureList.includes(Feature.EMOJI_PICKER_SEAL_SUPPORT);
        this.variantGroupingSupport =
            featureList.includes(Feature.EMOJI_PICKER_VARIANT_GROUPING_SUPPORT);
    }
    fetchOrderingData(url) {
        return new Promise((resolve) => {
            const xhr = new XMLHttpRequest();
            xhr.onloadend = () => resolve(JSON.parse(xhr.responseText));
            xhr.open('GET', url);
            xhr.send();
        });
    }
    /**
     * Processes a new category data and updates any needed variables and UIs
     * accordingly.
     *
     * @param data The category data to be processes.
     *    Note: category field will be added to the each EmojiGroup in data.
     * @param category Category of the data.
     * @param categoryLastPartition True if no future data updates are expected
     *     for the given category.
     * @param lastPartition True if no future data updates are expected.
     */
    updateCategoryData(data, category, categoryLastPartition = false, lastPartition = false) {
        // TODO(b/233270589): Add category to the underlying data.
        // Add category field to the data.
        data.forEach((emojiGroup) => {
            emojiGroup.category = category;
        });
        // Create recently used emoji group for the category as its first
        // group element.
        const startIndexes = this.gifSupport ?
            TABS_CATEGORY_START_INDEX_GIF_SUPPORT :
            TABS_CATEGORY_START_INDEX;
        const startIndex = startIndexes.get(category);
        if (startIndex === this.categoriesGroupElements.length) {
            const historyGroupElement = this.createEmojiGroupElement(this.getHistoryEmojis(category), {}, true, startIndex);
            this.push('categoriesGroupElements', historyGroupElement);
        }
        // Convert the emoji group data to elements.
        const baseIndex = this.categoriesGroupElements.length;
        const categoriesGroupElements = [];
        data.filter(item => !item.searchOnly).forEach((emojiGroup, index) => {
            if (emojiGroup.category === CategoryEnum.GIF &&
                emojiGroup.emoji.length === 0) {
                // EmojiGroup.emoji will be empty if and only if it is a gif category
                // and there's an error when trying to fetch gifs.
                return;
            }
            if (this.variantGroupingSupport && category === CategoryEnum.EMOJI) {
                emojiGroup.emoji.forEach((emoji) => {
                    this.fillEmojiVariantAttributes(emoji);
                });
                this.categoryHistoryUpdated(CategoryEnum.EMOJI);
            }
            const tabIndex = baseIndex + index;
            const tabCategory = this.allCategoryTabs[tabIndex]?.category;
            categoriesGroupElements.push(this.createEmojiGroupElement(emojiGroup.emoji, this.getEmojiGroupPreference(category), false, tabIndex));
            // TODO(b/233271528): Remove assert after removing metadata.
            // Ensure category of emoji groups match tab entries.
            console.assert(tabCategory === category, `Tab category at index ${tabIndex} is ${tabCategory} ` +
                `but corresponding group category in data is ${category}.`);
        });
        // Update emoji data for other features such as search.
        if (category !== CategoryEnum.GIF) {
            this.push('categoriesData', ...data);
        }
        // Update group elements for the emoji picker.
        this.push('categoriesGroupElements', ...categoriesGroupElements);
        if (categoryLastPartition) {
            this.dispatchEvent(createCustomEvent(CATEGORY_DATA_LOADED, { 'category': category }));
        }
        if (lastPartition) {
            // If all data is fetched, trigger search index.
            this.searchLazyIndexing = false;
            // TODO(b/233271528): Remove the following after removing metadata.
            const numEmojiGroups = this.categoriesGroupElements.length;
            const dataMatchSubcategoryTabs = numEmojiGroups === this.allCategoryTabs.length;
            // Ensure hard-coded tabs match the loaded data.
            if (!this.gifSupport) {
                console.assert(dataMatchSubcategoryTabs, `The Number of tabs "${this.allCategoryTabs.length}" does not match ` +
                    ` the number of loaded groups "${numEmojiGroups}".`);
            }
            afterNextRender(this, () => {
                this.apiProxy.onUiFullyLoaded();
                this.dispatchEvent(createCustomEvent(EMOJI_PICKER_READY, {}));
            });
        }
    }
    /**
     * Fills any gaps in the tone and gender information for variants of the
     * emoji; the build script omits this information in some cases to reduce
     * build size. Variant and grouping information is also copied to the
     * corresponding history emoji, if it exists, because existing store data
     * may not have the information.
     */
    fillEmojiVariantAttributes(emoji) {
        const { base, alternates, groupedTone, groupedGender } = emoji;
        if (!base.name || !alternates || !(groupedTone || groupedGender)) {
            return;
        }
        alternates.forEach((variant) => {
            if (groupedTone) {
                variant.tone ??= Tone.DEFAULT;
            }
            if (groupedGender) {
                variant.gender ??= Gender.DEFAULT;
            }
        });
        this.categoriesHistory[CategoryEnum.EMOJI]?.fillEmojiVariantAttributes(base.name, alternates, groupedTone, groupedGender);
    }
    onSearchChanged(newValue) {
        this.$['list-container'].style.display = newValue ? 'none' : '';
    }
    onBarTransitionStart() {
        this.highlightBarMoving = true;
    }
    onBarTransitionEnd() {
        this.highlightBarMoving = false;
    }
    onEmojiTextButtonClick(ev) {
        const category = ev.detail.category;
        this.insertText(category, ev.detail);
    }
    onEmojiImgButtonClick(ev) {
        const category = ev.detail.category;
        this.insertVisualContent(category, ev.detail);
    }
    async insertText(category, item) {
        const { text, isVariant } = item;
        this.$.message.textContent = text + ' inserted.';
        this.insertHistoryTextItem(category, item);
        const searchLength = this.$['search-container']
            .shadowRoot.querySelector('cr-search-field')
            ?.getSearchInput()
            ?.value?.length ??
            0;
        // TODO(b/217276960): change to a more generic name
        this.apiProxy.insertEmoji(text, isVariant, searchLength);
    }
    insertVisualContent(category, item) {
        this.apiProxy.insertGif(item.visualContent.url.full);
        this.insertHistoryVisualContentItem(category, item);
    }
    isGifInErrorState(status) {
        return this.gifSupport && status !== Status.kHttpOk;
    }
    clearRecentEmoji(event) {
        const category = event.detail.category;
        const item = event.detail.item;
        this.clearHistoryData(category, item);
        afterNextRender(this, () => {
            this.updateActiveGroup();
            this.updateHistoryTabDisabledProperty();
        });
    }
    async setGifGroupElements(activeGroupId) {
        // Check if GIFs have already been previously fetched and cached
        let gifGroupElements = this.categoriesGroupElements.find(group => group.groupId === activeGroupId);
        const isCached = !!gifGroupElements;
        // Call API only if the GIF elements for this search query has not been
        // cached
        if (!gifGroupElements) {
            // searchQuery will never be undefined
            const searchQuery = this.allCategoryTabs
                .find(element => element.groupId === activeGroupId)
                ?.name;
            const { searchGifs } = await this.apiProxy.searchGifs(searchQuery);
            const gifElements = this.apiProxy.convertTenorGifsToEmoji(searchGifs);
            this.nextGifPos[searchQuery] = searchGifs.next;
            const activeCategoryIndex = this.allCategoryTabs.findIndex(tab => tab.groupId === activeGroupId);
            gifGroupElements = this.createEmojiGroupElement(gifElements, {}, false, activeCategoryIndex);
        }
        this.setActiveInfiniteGroup(activeGroupId);
        if (!isCached) {
            this.categoriesGroupElements =
                [...this.categoriesGroupElements, gifGroupElements];
        }
    }
    setActiveInfiniteGroup(activeGroupId) {
        this.updateActiveGroup(activeGroupId);
        this.activeInfiniteGroupId = activeGroupId;
    }
    async selectGroup(newGroup) {
        await this.ensureFetchAndProcessDataFinished();
        if (this.category === CategoryEnum.GIF) {
            await this.setGifGroupElements(newGroup);
        }
        // focus and scroll to selected group's first emoji.
        const group = this.shadowRoot?.querySelector(`div[data-group="${newGroup}"]`);
        if (group) {
            const target = (group.querySelector('.group')?.shadowRoot?.querySelector('#fake-focus-target'));
            target?.focus();
            group.scrollIntoView();
        }
    }
    onEmojiScroll() {
        // The scroll event is fired very frequently while scrolling.
        // Thus we wrap it with `requestAnimationFrame`
        requestAnimationFrame(() => {
            this.updateActiveCategory();
            this.updateActiveGroup();
            // Using ! here as this.status will always exist when GIF support is on.
            if (this.category === CategoryEnum.GIF &&
                !this.isGifInErrorState(this.status)) {
                this.checkScrollPosition();
            }
        });
    }
    onRightChevronClick() {
        if (!this.textSubcategoryBarEnabled) {
            // ! safe due to &&
            this.$.tabs.scrollLeft = EMOJI_PICKER_TOTAL_EMOJI_WIDTH *
                EMOJI_NUM_TABS_IN_FIRST_PAGE;
            this.scrollToGroup(EMOJI_GROUP_TABS[GROUP_PER_ROW - 1]?.groupId);
            this.$.bar.style.left = EMOJI_PICKER_TOTAL_EMOJI_WIDTH_PX;
        }
        else {
            const maxPagination = this.getPaginationArray(this.emojiGroupTabs).pop() ?? 0;
            this.pagination = Math.min(this.pagination + 1, maxPagination);
            this.updateCurrentGroupTabs();
        }
    }
    onRightChevronKeyDown(event) {
        // Moves focus to the first button under the group of current category if
        // user tries to move to the next element from right chevron button in a11y
        // mode.
        if (event.code === 'Tab' && !event.shiftKey) {
            const currentGroups = this.shadowRoot
                .querySelectorAll(`emoji-group[category='${this.category}'`);
            // The first group might be a history group. If the user has no history
            // item, we should continue to check the second group.
            for (const group of currentGroups) {
                const button = group.firstEmojiButton();
                if (button) {
                    button.focus();
                    event.preventDefault();
                    return;
                }
            }
        }
        // Announcement for a11y.
        getInstance().announce('New sections available');
    }
    onLeftChevronClick() {
        this.pagination = Math.max(this.pagination - 1, 1);
        this.updateCurrentGroupTabs();
        // Announcement for a11y.
        getInstance().announce('New sections available');
    }
    updateCurrentGroupTabs() {
        const nextTab = this.emojiGroupTabs.find((tab) => tab.pagination === this.pagination);
        if (this.category === CategoryEnum.GIF && nextTab) {
            this.setGifGroupElements(nextTab.groupId);
        }
        this.scrollToGroup(nextTab?.groupId);
    }
    scrollToGroup(newGroup) {
        // TODO(crbug/1152237): This should use behaviour:'smooth', but when you do
        // that it doesn't scroll.
        if (newGroup) {
            this.shadowRoot.querySelector(`div[data-group="${newGroup}"]`)
                ?.scrollIntoView();
        }
    }
    onGroupsScroll() {
        this.updateChevrons();
        // This stops the GIF group tabs bar from bouncing back
        // when clicking on left/right chevron.
        if (this.category === CategoryEnum.GIF) {
            return;
        }
        requestAnimationFrame(() => this.updateActiveGroup());
    }
    updateChevrons() {
        const leftChevron = this.$['left-chevron'];
        const rightChevron = this.$['right-chevron'];
        // bail early if required elements don't exist
        if (!leftChevron || !rightChevron) {
            return;
        }
        if (!this.textSubcategoryBarEnabled) {
            leftChevron.style.display = 'none';
            rightChevron.style.display = 'none';
        }
        else {
            leftChevron.style.display = this.pagination >= 2 ? 'flex' : 'none';
            rightChevron.style.display = this.pagination <
                (this.getPaginationArray(this.emojiGroupTabs).pop() ?? 0) ?
                'flex' :
                'none';
        }
    }
    /**
     * @returns the id of the emoji or emoticon group currently in view.
     * This does not apply to GIFs, since each infinite set of GIF elements for
     * the GIF categories are displayed on a separate page, and cannot be
     * accessible from other categories via scrolling.
     */
    getActiveGroupIdFromScrollPosition() {
        // get bounding rect of scrollable emoji region.
        const thisRect = this.$.groups.getBoundingClientRect();
        return this.getActiveGroupAndId(thisRect).id;
    }
    getActiveGroupAndId(thisRect) {
        const groupElements = Array.from(this.$['groups']?.querySelectorAll('[data-group]') ?? []);
        // activate the first group which is visible for at least 20 pixels,
        // i.e. whose bottom edge is at least 20px below the top edge of the
        // scrollable region.
        const activeGroup = groupElements.find(el => el.getBoundingClientRect().bottom - thisRect.top >= 20);
        let activeGroupId;
        if (activeGroup === undefined) {
            if (this.status && this.isGifInErrorState(this.status)) {
                // If there's an error Trending gifs will be empty, so activeGroup
                // cannot be found from scroll position, have to set it manually.
                activeGroupId = TRENDING_GROUP_ID;
            }
            else {
                activeGroupId = 'emoji-history';
            }
        }
        else {
            activeGroupId = activeGroup.dataset['group'] ?? '';
        }
        return { group: activeGroup, id: activeGroupId };
    }
    async checkScrollPosition() {
        if (this.activeInfiniteGroupId === null) {
            return;
        }
        // get bounding rect of scrollable emoji region.
        const thisRect = this.$.groups.getBoundingClientRect();
        const activeGroupInfo = this.getActiveGroupAndId(thisRect);
        if (!activeGroupInfo.group) {
            return;
        }
        // Don't append new GIFs if the initial set is still rendering.
        if (activeGroupInfo.group.getBoundingClientRect().height <=
            thisRect.height) {
            return;
        }
        // If there's less than 300px until the end of the GIF category, load more
        // GIFs.
        if (activeGroupInfo.group.getBoundingClientRect().bottom -
            thisRect.bottom <=
            300) {
            // Using ! here as you can only scroll on a GIF category after the first
            // set of fetched GIFs have been pushed to this.categoriesGroupElements,
            // i.e. There will always be an element group that matches with the
            // current activeInfiniteGroupId.
            const searchQuery = this.categoriesGroupElements
                .find(group => group.groupId === this.activeInfiniteGroupId).name;
            // No need to append to history group.
            if (searchQuery === RECENTLY_USED) {
                return;
            }
            let gifElements;
            if (searchQuery === TRENDING) {
                const { featuredGifs } = await this.apiProxy.getFeaturedGifs(this.nextGifPos[searchQuery]);
                gifElements = featuredGifs;
            }
            else {
                const { searchGifs } = await this.apiProxy.searchGifs(searchQuery, this.nextGifPos[searchQuery]);
                gifElements = searchGifs;
            }
            this.nextGifPos[searchQuery] = gifElements.next;
            const gifs = this.apiProxy.convertTenorGifsToEmoji(gifElements);
            this.appendGifElements(searchQuery, gifs);
        }
    }
    appendGifElements(subcategory, gifs) {
        const categoryIndex = this.categoriesGroupElements.findIndex(tab => tab.name === subcategory);
        if (categoryIndex === -1) {
            return;
        }
        this.push(['categoriesGroupElements', categoryIndex, 'emoji'], ...gifs);
    }
    /*
     * Active group is updated with scroll position for emoji types with finite
     * elements (emojis, emoticons, symbols). However, active groups for emoji
     * types with infinite will be passed through a groupId because they cannot be
     * determined with scroll position.
     */
    updateActiveGroup(groupId) {
        let activeGroupId = groupId;
        if (groupId == null) {
            activeGroupId = this.getActiveGroupIdFromScrollPosition();
        }
        if (this.category === CategoryEnum.GIF) {
            this.set('activeInfiniteGroupId', activeGroupId);
        }
        this.set('pagination', this.getPaginationFromGroupId(activeGroupId));
        this.updateChevrons();
        const bar = this.$.bar;
        let index = 0;
        // set active to true for selected group and false for others.
        this.emojiGroupTabs.forEach((g, i) => {
            const isActive = g.groupId === activeGroupId;
            if (isActive) {
                index = i;
            }
            this.set(['emojiGroupTabs', i, 'active'], isActive);
        });
        // Ensure that the history tab is not set as active if it is empty.
        if (index === 0 && this.isCategoryHistoryEmpty(this.category)) {
            this.set(['emojiGroupTabs', 0, 'active'], false);
            this.set(['emojiGroupTabs', 1, 'active'], true);
            index = 1;
        }
        // Once tab scroll is updated, update the position of the highlight bar.
        if (!this.highlightBarMoving) {
            // Update the scroll position of the emoji groups so that active group is
            // visible.
            if (!this.textSubcategoryBarEnabled) {
                // The value here means the width of an emoji tab button + extra right
                // side spacing. It's different between the versions before GIF support
                // and after.
                const totalWidth = this.gifSupport ?
                    V2_5_EMOJI_PICKER_TOTAL_EMOJI_WIDTH :
                    EMOJI_PICKER_TOTAL_EMOJI_WIDTH;
                bar.style.width = EMOJI_HIGHLIGHTER_WIDTH_PX;
                bar.style.left = `${index * totalWidth}px`;
            }
            else {
                // Cast below should be safe as worst case array is empty.
                const subcategoryTabs = Array.from(this.$.tabs.querySelectorAll('.tab'));
                // for text group button, the highlight bar only spans its inner width,
                // which excludes both padding and margin.
                if (index < subcategoryTabs.length) {
                    const padding = this.gifSupport ?
                        V2_5_EMOJI_PICKER_SIDE_PADDING :
                        EMOJI_PICKER_SIDE_PADDING;
                    const barInlineGap = TAB_BUTTON_MARGIN + TEXT_GROUP_BUTTON_PADDING;
                    const currentTab = subcategoryTabs[index];
                    bar.style.left = `${(currentTab?.offsetLeft ?? 0) - padding -
                        this.calculateTabScrollLeftPosition(this.pagination)}px`;
                    bar.style.width = `${(subcategoryTabs[index]?.clientWidth ?? 0) - barInlineGap * 2}px`;
                }
                else {
                    bar.style.left = '0px';
                    bar.style.width = '0px';
                }
            }
        }
    }
    /**
     * Update active category by using vertical scroll position.
     */
    updateActiveCategory() {
        const activeGroupId = this.getActiveGroupIdFromScrollPosition();
        const currentCategory = this.allCategoryTabs.find((tab) => tab.groupId === activeGroupId)
            ?.category;
        this.set('category', currentCategory);
    }
    preventV2TabScrolling() {
        this.$.tabs.scrollLeft =
            this.calculateTabScrollLeftPosition(this.pagination);
    }
    hideDialogs() {
        this.hideEmojiVariants();
        for (const category of Object.values(CategoryEnum)) {
            if (!this.isCategoryHistoryEmpty(category)) {
                const historyButton = this.shadowRoot.querySelector(`emoji-group.history[category=${category}]`);
                if (historyButton) {
                    historyButton.showClearRecents = false;
                }
            }
        }
    }
    hideEmojiVariants() {
        if (this.activeVariant) {
            this.activeVariant.hideEmojiVariants();
            this.activeVariant = null;
        }
    }
    /**
     * Disables the history tab when there is no usage history for the
     * selected category and enables it otherwise.
     */
    updateHistoryTabDisabledProperty() {
        this.set(['emojiGroupTabs', 0, 'disabled'], this.isCategoryHistoryEmpty(this.category));
    }
    /**
     * Gets recently used emojis for a category. It gets the history items
     * and convert them to emojis.
     */
    getHistoryEmojis(category) {
        if (this.incognito) {
            return [];
        }
        return this.categoriesHistory[category]?.getHistory().map(emoji => ({
            base: {
                string: emoji.base.string,
                name: emoji.base.name,
                visualContent: emoji.base.visualContent,
                keywords: [],
                tone: emoji.base.tone,
                gender: emoji.base.gender,
            },
            alternates: emoji.alternates?.map((alternate) => {
                return {
                    string: alternate.string,
                    name: alternate.name,
                    keywords: [...(alternate.keywords ?? [])],
                    tone: alternate.tone,
                    gender: alternate.gender,
                };
            }) ??
                [],
            groupedTone: emoji.groupedTone,
            groupedGender: emoji.groupedGender,
        })) ??
            [];
    }
    /**
     * Gets the global emoji skin tone preference.
     */
    getGlobalTone() {
        return this.emojiPreferences.getTone();
    }
    /**
     * Gets the global emoji gender preference.
     */
    getGlobalGender() {
        return this.emojiPreferences.getGender();
    }
    /**
     * Handles the event where history or preferences are modified for a
     * category.
     *
     */
    categoryHistoryUpdated(category, historyUpdated = true, _preferenceUpdated = true) {
        // History item is assumed to be the first item of each category.
        const historyIndexes = this.gifSupport ?
            TABS_CATEGORY_START_INDEX_GIF_SUPPORT :
            TABS_CATEGORY_START_INDEX;
        const historyIndex = historyIndexes.get(category);
        // If history group is already added, then update it.
        if (historyUpdated && (historyIndex !== undefined) &&
            historyIndex < this.categoriesGroupElements.length) {
            this.set(['categoriesGroupElements', historyIndex, 'emoji'], this.getHistoryEmojis(category));
        }
        // Note: preference update is not handled because it is an expensive
        // operation and adds no value to the current version.
        // If needed in the future, its addition requires iterating over all
        // categoriesGroupElement of the category and setting their preferences
        // here.
    }
    /**
     * Updates incognito state and variables that needs to be updated by the
     * change of incognito state.
     *
     */
    updateIncognitoState(incognito) {
        this.incognito = incognito;
        // Load the history item for each category.
        for (const category of Object.values(CategoryEnum)) {
            this.categoriesHistory[category] =
                incognito ? null : new RecentlyUsedStore(`${category}-recently-used`);
            this.categoryHistoryUpdated(category);
        }
    }
    /**
     * Inserts a new item to the history of a category. It will do nothing during
     * incognito state.
     *
     */
    insertHistoryTextItem(category, item) {
        if (this.incognito) {
            return;
        }
        const { text, baseEmoji, alternates, name, tone, gender, groupedTone, groupedGender, } = item;
        this.categoriesHistory[category]?.bumpItem(category, {
            base: { string: text, name, tone, gender },
            alternates,
            groupedTone,
            groupedGender,
        });
        let preferenceUpdated = false;
        if (!this.variantGroupingSupport || !(groupedTone || groupedGender)) {
            preferenceUpdated =
                !!this.categoriesHistory[category]?.savePreferredVariant(text, baseEmoji);
        }
        this.categoryHistoryUpdated(category, true, preferenceUpdated);
        if (!this.variantGroupingSupport) {
            return;
        }
        if (tone !== undefined) {
            this.emojiPreferences.setTone(tone);
        }
        if (gender !== undefined) {
            this.emojiPreferences.setGender(gender);
        }
    }
    /**
     * Inserts a new item to the history of a visual content category. It will do
     * nothing during incognito state.
     */
    insertHistoryVisualContentItem(category, item) {
        if (this.incognito) {
            return;
        }
        const { name, visualContent } = item;
        this.categoriesHistory[category]?.bumpItem(category, { base: { visualContent: visualContent, name: name }, alternates: [] });
        this.categoryHistoryUpdated(category, true, undefined);
    }
    /**
     * Clears history item(s) for a category.
     */
    clearHistoryData(category, item) {
        if (this.incognito) {
            return;
        }
        if (item === undefined) {
            this.categoriesHistory[category]?.clearRecents();
        }
        else {
            this.categoriesHistory[category]?.clearItem(category, item);
        }
        this.categoryHistoryUpdated(category, true, false);
    }
    /**
     * Check if the history items of a category is empty.
     *
     * @returns {boolean} True for empty history.
     */
    isCategoryHistoryEmpty(category) {
        return this.incognito || this.categoriesHistory[category]?.isHistoryEmpty();
    }
    /**
     * Gets HTML classes for an emoji group element.
     *
     * The emojis need to be passed in directly so Polymer registers changes
     * e.g. when clearing history emojis.
     * The currEmojiGroup is passed in for additional attribute info.
     *
     * @returns {string} HTML element class attribute.
     */
    getEmojiGroupClassNames(emojis, currEmojiGroup, activeCategory, activeInfiniteGroupId) {
        const baseClassNames = currEmojiGroup.isHistory ? 'group history' : 'group';
        // Make emoji hidden if it is empty.
        // Note: Filtering empty groups in dom-repeat is expensive due to
        // re-rendering, so making it hidden is more efficient.
        if (!emojis || emojis.length === 0) {
            return baseClassNames + ' hidden';
        }
        if (!this.gifSupport) {
            return baseClassNames;
        }
        // If the active group can be reached via scrolling (i.e. emojis, emoticons,
        // symbols, recently used GIFs, trending GIFs), whereas the current group
        // being rendered cannot, the current group should be hidden, and vice
        // versa. i.e. When on an emoji group, you can scroll down to other emoticon
        // or symbol groups, or recently used or trending GIFs, but cannot scroll
        // past trending GIFs to view #tag GIF groups.
        const canScrollToActiveGroup = this.canScrollToGroup(activeCategory, activeInfiniteGroupId);
        const canScrollToCurrGroup = this.canScrollToGroup(currEmojiGroup.category, currEmojiGroup.groupId);
        const canScrollToCurrGroupFromActive = (canScrollToCurrGroup && canScrollToActiveGroup);
        // For GIF category groups (not including history or recently used), only
        // the currently active group should be displayed and all other groups
        // should be hidden.
        const currGroupIsActiveInfiniteGroup = currEmojiGroup.groupId === activeInfiniteGroupId;
        if (!canScrollToCurrGroupFromActive && !currGroupIsActiveInfiniteGroup) {
            return baseClassNames + ' hidden';
        }
        return baseClassNames;
    }
    /**
     * Create an instance of emoji group element.
     */
    createEmojiGroupElement(emoji, preferences, isHistory, subcategoryIndex) {
        const baseDetails = {
            'emoji': emoji,
            'preferences': preferences,
            'isHistory': isHistory,
        };
        return (Object.assign({}, baseDetails, this.allCategoryTabs[subcategoryIndex]));
    }
    /**
     * Gets preferences for an emoji group.
     *
     */
    getEmojiGroupPreference(category) {
        return this.incognito ? {} :
            // ! is safe as categories history must contain
            // entries for all categories.
            this.categoriesHistory[category].getPreferenceMapping();
    }
    onShowEmojiVariants(ev) {
        // Hide the currently shown emoji variants if the new one belongs
        // to a different emoji group.
        if (this.activeVariant && ev.detail.owner !== this.activeVariant) {
            this.hideEmojiVariants();
        }
        this.activeVariant = ev.detail.owner;
        // Updates the UI if a variant is shown.
        if (ev.detail.variants) {
            this.$.message.textContent = ev.detail.baseEmoji + ' variants shown.';
            this.positionEmojiVariants(ev.detail.variants);
        }
    }
    positionEmojiVariants(variants) {
        // TODO(crbug.com/1174311): currently positions horizontally within page.
        // ideal UI would be overflowing the bounds of the page.
        // also need to account for vertical positioning.
        // compute width required for the variant popup as: SIZE * columns + 10.
        // SIZE is emoji width in pixels. number of columns is determined by width
        // of variantRows, then one column each for the base emoji and skin tone
        // indicators if present. 10 pixels are added for padding and the shadow.
        // Reset any existing left margin before calculating a new position.
        variants.style.marginLeft = '0';
        // get size of emoji picker
        const pickerRect = this.getBoundingClientRect();
        // determine how much overflows the right edge of the window.
        const rect = variants.getBoundingClientRect();
        const overflowWidth = rect.x + rect.width - pickerRect.width;
        // shift left by overflowWidth rounded up to next multiple of EMOJI_SIZE.
        const shift = EMOJI_ICON_SIZE *
            Math.ceil(overflowWidth / EMOJI_ICON_SIZE);
        // negative value means we are already within bounds, so no shift needed.
        variants.style.marginLeft = `-${Math.max(shift, 0)}px`;
        // Now, examine vertical scrolling and scroll if needed. Not quire sure why
        // we need listcontainer.offsetTop, but it makes things work.
        const groups = this.$.groups;
        const scrollTop = groups.scrollTop;
        const variantTop = variants.offsetTop;
        const variantBottom = variantTop + variants.offsetHeight;
        const listTop = this.$['list-container'].offsetTop;
        if (variantBottom > scrollTop + (groups.offsetHeight) + listTop) {
            groups.scrollTo({
                top: variantBottom - (groups.offsetHeight) - listTop,
                left: 0,
                behavior: 'smooth',
            });
        }
    }
    /**
     * Triggers when category property changes
     */
    onCategoryChanged(newCategoryName) {
        const categoryTabs = this.allCategoryTabs.filter(tab => tab.category === newCategoryName);
        this.set('emojiGroupTabs', categoryTabs);
        this.updateActiveGroup();
        this.updateHistoryTabDisabledProperty();
        this.$.tabs.scrollLeft =
            this.calculateTabScrollLeftPosition(this.pagination);
    }
    async onCategoryButtonClick(newCategory) {
        await this.ensureFetchAndProcessDataFinished();
        this.set('category', newCategory);
        this.set('pagination', 1);
        if (newCategory === CategoryEnum.GIF) {
            this.set('activeInfiniteGroupId', this.emojiGroupTabs[0]?.groupId);
        }
        if (this.$['search-container'].searchNotEmpty()) {
            this.$['search-container'].setSearchQuery('');
            afterNextRender(this, () => {
                this.scrollToGroup(this.emojiGroupTabs[0]?.groupId);
            });
        }
        else {
            this.scrollToGroup(this.emojiGroupTabs[0]?.groupId);
        }
    }
    /**
     * Trigger when pagination changes
     */
    onPaginationChanged(newPage) {
        // Left chevron has the same margin as the text subcategory button.
        this.$.tabs.scrollLeft = this.calculateTabScrollLeftPosition(newPage);
    }
    /**
     * Returns true if the subcategory bar requires text group buttons.
     */
    isTextSubcategoryBarEnabled(category) {
        // Categories that require its subcategory bar to be labelled by text.
        const textCategories = ['symbol', 'emoticon', 'gif'];
        return textCategories.includes(category);
    }
    /**
     * Returns the array of page numbers which starts at 1 and finishes at the
     * last pagination.
     */
    getPaginationArray(tabs) {
        // cast safe here since it is the result of filter.
        const paginations = tabs.map(tab => tab.pagination).filter(num => num);
        const lastPagination = Math.max(...paginations);
        return Array.from(Array(lastPagination), (_, idx) => idx + 1);
    }
    /**
     * Dynamically calculate the pagination for the GIF category groups tabs to
     * determine the number of tabs that can fit in each page. Existing
     * emoji/emoticon/symbol tabs pagination is hardcoded since the tabs remain
     * consistent, but GIF tabs change after every API call.
     */
    setGifGroupsPagination(gifGroupTabs) {
        const gifCategoriesGroupData = gifGroupTabs;
        // Max tabs bar width accounts for the chevron clicks and/or history button
        const maxTabsWidth = EMOJI_PICKER_WIDTH -
            2 * EMOJI_PICKER_SIDE_PADDING - 2 * EMOJI_ICON_SIZE;
        let totalTabsWidth = 0;
        let pagination = 1;
        for (const tabData of gifCategoriesGroupData) {
            // Calculate maximum number of tabs that can fit within the tabs bar width
            // to set pagination
            const tabWidth = this.getTabElementWidth(tabData.name);
            if (totalTabsWidth + tabWidth > maxTabsWidth) {
                pagination += 1;
                totalTabsWidth = 0;
            }
            totalTabsWidth += tabWidth;
            tabData.pagination = pagination;
        }
        return gifCategoriesGroupData;
    }
    /**
     * Calculate the width of the specific tab element before it
     * is rendered by customising the dummy element with the tab name
     * and finding width.
     */
    getTabElementWidth(tabName) {
        this.dummyTab = {
            name: tabName,
            groupId: '-1',
            active: false,
            disabled: false,
            category: CategoryEnum.GIF,
        };
        return this.$.dummyTab.clientWidth;
    }
    /**
     * Returns true if the page is not the first.
     */
    isNotFirstPage(pageNumber) {
        return pageNumber !== 1;
    }
    getPaginationFromGroupId(groupId) {
        const tab = this.allCategoryTabs.find((tab) => tab.groupId === groupId);
        if (tab) {
            return tab.pagination;
        }
        else {
            throw new Error('Tab not found.');
        }
    }
    calculateTabScrollLeftPosition(page) {
        const chevronMargin = TAB_BUTTON_MARGIN;
        const offsetByLeftChevron = EMOJI_ICON_SIZE + chevronMargin;
        return (page === 1) ?
            0 :
            (page - 1) * EMOJI_PICKER_WIDTH - offsetByLeftChevron;
    }
    getTabIndex(itemPagination, currentPagination) {
        return itemPagination === currentPagination ? 0 : -1;
    }
    // The gifSupport field ensures that this function gets called when
    // gifSupport is updated, allowing the correct categories to be shown
    getCategoryMetadata(gifSupport, category) {
        // This determines whether the GIF category button will appear
        const METADATA = gifSupport ? GIF_CATEGORY_METADATA : CATEGORY_METADATA;
        return METADATA.map(data => ({
            name: data.name,
            icon: data.icon,
            active: data.name === category,
        }));
    }
    /**
     * Checks if recently used GIFs are still valid if we open the emoji picker
     * and it has been 24 hours since the last validation.
     */
    async validateRecentlyUsedGifs() {
        // This check ensures that we don't try and validate recently used GIFs
        // if the validating process is already currently happening.
        const currentTime = new Date();
        if ((currentTime.getTime() - this.previousGifValidation.getTime()) >
            TWENTY_FOUR_HOURS) {
            const updated = await this.categoriesHistory[CategoryEnum.GIF]?.validate(this.apiProxy);
            this.previousGifValidation = currentTime;
            window.localStorage.setItem(GIF_VALIDATION_DATE, currentTime.toJSON());
            if (updated) {
                this.categoryHistoryUpdated(CategoryEnum.GIF);
            }
        }
    }
    loadPreviousGifValidationTime() {
        const stored = window.localStorage.getItem(GIF_VALIDATION_DATE);
        if (!stored) {
            // First time opening the Emoji Picker so there should be no recently used
            // GIFs to render.
            return new Date();
        }
        return new Date(stored);
    }
    computeListContainerClass(category, status) {
        // Only displays emoji-error if there is no internet connection and we are in GIF category.
        if (category === CategoryEnum.GIF && status !== Status.kHttpOk) {
            return 'error-only';
        }
        // Do not display GIF emoji groups if there is no internet connection and we are in non-GIF
        // category.
        if (category !== CategoryEnum.GIF && status !== Status.kHttpOk) {
            return 'no-gif';
        }
        return '';
    }
    getLeftChevronAriaLabel(gifSupport) {
        return gifSupport ? 'Previous' : undefined;
    }
    getRightChevronAriaLabel(gifSupport) {
        return gifSupport ? 'Next' : undefined;
    }
    closeGifNudgeOverlay() {
        if (this.showGifNudgeOverlay) {
            this.showGifNudgeOverlay = false;
        }
        GifNudgeHistoryStore.setNudgeShown(true);
    }
}
customElements.define(EmojiPickerApp.is, EmojiPickerApp);

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class Trie {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
    add(key) {
        let node = this;
        for (const curChar of key) {
            const newNode = node.children[curChar];
            if (newNode === undefined) {
                node.children[curChar] = new Trie();
            }
            // ! is safe here since we created the node above.
            node = node.children[curChar];
        }
        node.isEndOfWord = true;
    }
    /**
     *  returns the node at the end of the term, or
     *  returns undefined if the node for the path does not exist.
     */
    getChildNode(path) {
        let node = this;
        for (const curChar of path) {
            const newnode = node.children[curChar];
            if (newnode !== undefined) {
                node = newnode;
            }
            else {
                return undefined;
            }
        }
        return node;
    }
    /**
     * returns all keys that share the same given prefix.
     */
    getKeys(prefix) {
        const allKeys = [];
        if (prefix !== undefined) {
            const prefixNode = this.getChildNode(prefix);
            if (prefixNode === undefined) {
                return [];
            }
            prefixNode.getKeysInternal(prefix, allKeys);
        }
        else {
            this.getKeysInternal('', allKeys);
        }
        return allKeys;
    }
    /**
     * Collects all keys in the trie that has 'curKey' as the prefix.
     */
    getKeysInternal(curKey, allKeys) {
        if (this.isEndOfWord) {
            allKeys.push(curKey);
        }
        for (const char in this.children) {
            this.children[char]?.getKeysInternal(`${curKey}${char}`, allKeys);
        }
    }
    containsKey(key) {
        return !!this.getChildNode(key)?.isEndOfWord;
    }
    hasChildren() {
        return Object.keys(this.children).length > 0;
    }
    /**
     * Erase all content of the trie.
     */
    clear() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Preprocess a phrase by the following operations:
 *  (1) remove white whitespace at both ends of the phrase.
 *  (2) convert all letters into lowercase.
 */
function sanitize(phrase) {
    return phrase.trim().toLowerCase();
}
class EmojiPrefixSearch {
    constructor() {
        this.tokenTrie = new Trie();
        this.wordToEmojisMap = new Map();
        this.emojiMap = new Map();
    }
    setCollection(collection) {
        this.clear();
        for (const record of collection) {
            if (!record.base.string || !record.base.name) {
                continue;
            }
            const string = record.base.string;
            const name = record.base.name;
            const terms = this.tokenize(name).map(term => sanitize(term));
            terms.forEach(term => {
                if (!this.wordToEmojisMap.has(term)) {
                    this.wordToEmojisMap.set(term, new Set());
                }
                this.wordToEmojisMap.get(term)?.add(string);
                this.emojiMap.set(string, record);
                this.tokenTrie.add(term);
            });
        }
    }
    /**
     * Returns all items whose name contains the prefix.
     */
    matchPrefixToEmojis(prefix) {
        const results = new Set();
        const terms = this.tokenTrie.getKeys(prefix);
        for (const term of terms) {
            const matchedItems = this.wordToEmojisMap.get(term);
            if (matchedItems !== undefined) {
                matchedItems.forEach(item => {
                    results.add(item);
                });
            }
        }
        return Array.from(results);
    }
    /**
     * Clear trie and lookup table.
     */
    clear() {
        this.tokenTrie.clear();
        this.wordToEmojisMap.clear();
        this.emojiMap.clear();
    }
    tokenize(phrase) {
        return phrase.split(' ').filter(token => token.length > 0);
    }
    /**
     * Fetch all words from the emoji data that have 'term' has prefix and attach
     * matching metadata for each word.
     */
    getMatchedKeywords(emoji, term) {
        if (!emoji.base.name) {
            return [];
        }
        const PRIMARY_NAME_WEIGHT = 1;
        return this.tokenize(sanitize(emoji.base.name))
            .map((token, pos) => ({
            pos,
            isMatched: token.startsWith(term),
            token,
            weight: PRIMARY_NAME_WEIGHT,
        }))
            .filter(item => item.isMatched);
    }
    /**
     * Calculate the matching score of a term against a given emoji.
     */
    scoreTermAgainstEmoji(emoji, term) {
        let score = 0;
        for (const item of this.getMatchedKeywords(emoji, term)) {
            if (item.token.length === 0) {
                throw new Error('Token can not be empty.');
            }
            // Link to single-word match score formula:
            // https://docs.google.com/document/d/1Ub89xsElqVyRaq8tldhligd29-iXsSMWlAdL6Q-Xpr8/edit#
            score +=
                (item.weight / (1 + item.pos)) * (term.length / item.token.length);
        }
        return score;
    }
    /**
     * Search for all items that match with the given query
     */
    search(query) {
        const queryScores = new Map();
        const sanitizedQuery = sanitize(query);
        this.tokenize(sanitizedQuery).forEach((term, idx) => {
            // For each token
            const termScores = new Map();
            const candidateEmojis = this.matchPrefixToEmojis(term);
            for (const emoji of candidateEmojis) {
                const emojiRecord = this.emojiMap.get(emoji);
                if (emojiRecord) {
                    termScores.set(emoji, this.scoreTermAgainstEmoji(emojiRecord, term));
                }
            }
            for (const emoji of termScores.keys()) {
                // If it is the first term in the query phrase, we apply the
                // normalization factor.
                if (idx === 0) {
                    const emojiName = this.emojiMap.get(emoji)?.base?.name ?? ' ';
                    queryScores.set(emoji, sanitizedQuery.length / emojiName.length);
                }
                if (queryScores.has(emoji)) {
                    queryScores.set(emoji, queryScores.get(emoji) * termScores.get(emoji));
                }
            }
            // Remove any emoji at query level if it does not match at term level.
            for (const emoji of queryScores.keys()) {
                if (!termScores.has(emoji)) {
                    queryScores.delete(emoji);
                }
            }
        });
        const results = Array.from(queryScores.keys()).map(emoji => ({
            item: this.emojiMap.get(emoji),
            score: queryScores.get(emoji),
        }));
        return this.sort(results);
    }
    /**
     * Sort the array of Emoji objects by relevance score in descending order
     */
    sort(results) {
        return results.sort((emoji1, emoji2) => emoji2.score - emoji1.score);
    }
}

export { EMOJI_IMG_BUTTON_CLICK, EMOJI_PICKER_READY, EMOJI_PICKER_TOTAL_EMOJI_WIDTH, EMOJI_TEXT_BUTTON_CLICK, EMOJI_VARIANTS_SHOWN, EmojiButton, EmojiGroupComponent, EmojiPickerApiProxyImpl, EmojiPickerApp, EmojiPrefixSearch, EmojiSearch, GIF_VALIDATION_DATE, Status, TRENDING, TRENDING_GROUP_ID, Trie };
//# sourceMappingURL=emoji_picker.rollup.js.map
