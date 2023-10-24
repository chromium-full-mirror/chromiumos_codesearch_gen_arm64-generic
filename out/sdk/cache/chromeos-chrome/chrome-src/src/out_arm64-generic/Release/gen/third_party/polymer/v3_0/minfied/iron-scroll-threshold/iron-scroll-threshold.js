/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
import"../polymer/polymer_bundled.min.js";import{IronScrollTargetBehavior}from"../iron-scroll-target-behavior/iron-scroll-target-behavior.js";import{Polymer}from"../polymer/polymer_bundled.min.js";import{html}from"../polymer/polymer_bundled.min.js";Polymer({_template:html`
    <style>
      :host {
        display: block;
      }
    </style>

    <slot></slot>
`,is:"iron-scroll-threshold",properties:{upperThreshold:{type:Number,value:100},lowerThreshold:{type:Number,value:100},upperTriggered:{type:Boolean,value:false,notify:true,readOnly:true},lowerTriggered:{type:Boolean,value:false,notify:true,readOnly:true},horizontal:{type:Boolean,value:false}},behaviors:[IronScrollTargetBehavior],observers:["_setOverflow(scrollTarget)","_initCheck(horizontal, isAttached)"],get _defaultScrollTarget(){return this},_setOverflow:function(scrollTarget){this.style.overflow=scrollTarget===this?"auto":"";this.style.webkitOverflowScrolling=scrollTarget===this?"touch":""},_scrollHandler:function(){var THROTTLE_THRESHOLD=200;if(!this.isDebouncerActive("_checkTheshold")){this.debounce("_checkTheshold",(function(){this.checkScrollThresholds()}),THROTTLE_THRESHOLD)}},_initCheck:function(horizontal,isAttached){if(isAttached){this.debounce("_init",(function(){this.clearTriggers();this.checkScrollThresholds()}))}},checkScrollThresholds:function(){if(!this.scrollTarget||this.lowerTriggered&&this.upperTriggered){return}var upperScrollValue=this.horizontal?this._scrollLeft:this._scrollTop;var lowerScrollValue=this.horizontal?this.scrollTarget.scrollWidth-this._scrollTargetWidth-this._scrollLeft:this.scrollTarget.scrollHeight-this._scrollTargetHeight-this._scrollTop;if(upperScrollValue<=this.upperThreshold&&!this.upperTriggered){this._setUpperTriggered(true);this.fire("upper-threshold")}if(lowerScrollValue<=this.lowerThreshold&&!this.lowerTriggered){this._setLowerTriggered(true);this.fire("lower-threshold")}},checkScrollThesholds:function(){this.checkScrollThresholds()},clearTriggers:function(){this._setUpperTriggered(false);this._setLowerTriggered(false)}});