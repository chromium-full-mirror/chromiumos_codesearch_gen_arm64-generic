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
import"../polymer/polymer_bundled.min.js";import{dom}from"../polymer/polymer_bundled.min.js";export const IronControlState={properties:{focused:{type:Boolean,value:false,notify:true,readOnly:true,reflectToAttribute:true},disabled:{type:Boolean,value:false,notify:true,observer:"_disabledChanged",reflectToAttribute:true},_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function(){return this._focusBlurHandler.bind(this)}}},observers:["_changedControlState(focused, disabled)"],ready:function(){this.addEventListener("focus",this._boundFocusBlurHandler,true);this.addEventListener("blur",this._boundFocusBlurHandler,true)},_focusBlurHandler:function(event){this._setFocused(event.type==="focus");return},_disabledChanged:function(disabled,old){this.setAttribute("aria-disabled",disabled?"true":"false");this.style.pointerEvents=disabled?"none":"";if(disabled){this._oldTabIndex=this.getAttribute("tabindex");this._setFocused(false);this.tabIndex=-1;this.blur()}else if(this._oldTabIndex!==undefined){if(this._oldTabIndex===null){this.removeAttribute("tabindex")}else{this.setAttribute("tabindex",this._oldTabIndex)}}},_changedControlState:function(){if(this._controlStateChanged){this._controlStateChanged()}}};