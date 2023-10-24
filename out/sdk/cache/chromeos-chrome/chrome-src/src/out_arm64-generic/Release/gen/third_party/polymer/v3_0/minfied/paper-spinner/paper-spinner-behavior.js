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
import"../polymer/polymer_bundled.min.js";export const PaperSpinnerBehavior={properties:{active:{type:Boolean,value:false,reflectToAttribute:true,observer:"__activeChanged"},alt:{type:String,value:"loading",observer:"__altChanged"},__coolingDown:{type:Boolean,value:false}},__computeContainerClasses:function(active,coolingDown){return[active||coolingDown?"active":"",coolingDown?"cooldown":""].join(" ")},__activeChanged:function(active,old){this.__setAriaHidden(!active);this.__coolingDown=!active&&old},__altChanged:function(alt){if(alt==="loading"){this.alt=this.getAttribute("aria-label")||alt}else{this.__setAriaHidden(alt==="");this.setAttribute("aria-label",alt)}},__setAriaHidden:function(hidden){var attr="aria-hidden";if(hidden){this.setAttribute(attr,"true")}else{this.removeAttribute(attr)}},__reset:function(){this.active=false;this.__coolingDown=false}};