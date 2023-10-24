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
import"../polymer/polymer_bundled.min.js";import{IronResizableBehavior}from"../iron-resizable-behavior/iron-resizable-behavior.js";import{IronSelectableBehavior}from"../iron-selector/iron-selectable.js";import{Polymer}from"../polymer/polymer_bundled.min.js";import{dom}from"../polymer/polymer_bundled.min.js";import{html}from"../polymer/polymer_bundled.min.js";import{NeonAnimationRunnerBehavior}from"./neon-animation-runner-behavior.js";Polymer({_template:html`
    <style>
      :host {
        display: block;
        position: relative;
      }

      :host > ::slotted(*) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
      }

      :host > ::slotted(:not(.iron-selected):not(.neon-animating))
       {
        display: none !important;
      }

      :host > ::slotted(.neon-animating) {
        pointer-events: none;
      }
    </style>

    <slot id="content"></slot>
  `,is:"neon-animated-pages",behaviors:[IronResizableBehavior,IronSelectableBehavior,NeonAnimationRunnerBehavior],properties:{activateEvent:{type:String,value:""},animateInitialSelection:{type:Boolean,value:false}},listeners:{"iron-select":"_onIronSelect","neon-animation-finish":"_onNeonAnimationFinish"},_onIronSelect:function(event){var selectedPage=event.detail.item;if(this.items.indexOf(selectedPage)<0){return}var oldPage=this._valueToItem(this._prevSelected)||false;this._prevSelected=this.selected;if(!oldPage&&!this.animateInitialSelection){this._completeSelectedChanged();return}this.animationConfig=[];if(this.entryAnimation){this.animationConfig.push({name:this.entryAnimation,node:selectedPage})}else{if(selectedPage.getAnimationConfig){this.animationConfig.push({animatable:selectedPage,type:"entry"})}}if(oldPage){if(oldPage.classList.contains("neon-animating")){this._squelchNextFinishEvent=true;this.cancelAnimation();this._completeSelectedChanged();this._squelchNextFinishEvent=false}if(this.exitAnimation){this.animationConfig.push({name:this.exitAnimation,node:oldPage})}else{if(oldPage.getAnimationConfig){this.animationConfig.push({animatable:oldPage,type:"exit"})}}oldPage.classList.add("neon-animating")}selectedPage.classList.add("neon-animating");if(this.animationConfig.length>=1){if(!this.isAttached){this.async((function(){this.playAnimation(undefined,{fromPage:null,toPage:selectedPage})}))}else{this.playAnimation(undefined,{fromPage:oldPage,toPage:selectedPage})}}else{this._completeSelectedChanged(oldPage,selectedPage)}},_completeSelectedChanged:function(oldPage,selectedPage){if(selectedPage){selectedPage.classList.remove("neon-animating")}if(oldPage){oldPage.classList.remove("neon-animating")}if(!selectedPage||!oldPage){var nodes=dom(this.$.content).getDistributedNodes();for(var node,index=0;node=nodes[index];index++){node.classList&&node.classList.remove("neon-animating")}}this.async(this._notifyPageResize)},_onNeonAnimationFinish:function(event){if(this._squelchNextFinishEvent){this._squelchNextFinishEvent=false;return}this._completeSelectedChanged(event.detail.fromPage,event.detail.toPage)},_notifyPageResize:function(){var selectedPage=this.selectedItem||this._valueToItem(this.selected);this.resizerShouldNotify=function(element){return element==selectedPage};this.notifyResize()}});