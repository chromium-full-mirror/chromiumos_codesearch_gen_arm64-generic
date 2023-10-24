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
import"../polymer/polymer_bundled.min.js";import{IronA11yKeysBehavior}from"../iron-a11y-keys-behavior/iron-a11y-keys-behavior.js";import{IronControlState}from"../iron-behaviors/iron-control-state.js";import{IronOverlayBehavior,IronOverlayBehaviorImpl}from"../iron-overlay-behavior/iron-overlay-behavior.js";import{NeonAnimationRunnerBehavior}from"../neon-animation/neon-animation-runner-behavior.js";import{Polymer}from"../polymer/polymer_bundled.min.js";import{dom}from"../polymer/polymer_bundled.min.js";import{html}from"../polymer/polymer_bundled.min.js";Polymer({_template:html`
    <style>
      :host {
        position: fixed;
      }

      #contentWrapper ::slotted(*) {
        overflow: auto;
      }

      #contentWrapper.animating ::slotted(*) {
        overflow: hidden;
        pointer-events: none;
      }
    </style>

    <div id="contentWrapper">
      <slot id="content" name="dropdown-content"></slot>
    </div>
`,is:"iron-dropdown",behaviors:[IronControlState,IronA11yKeysBehavior,IronOverlayBehavior,NeonAnimationRunnerBehavior],properties:{horizontalAlign:{type:String,value:"left",reflectToAttribute:true},verticalAlign:{type:String,value:"top",reflectToAttribute:true},openAnimationConfig:{type:Object},closeAnimationConfig:{type:Object},focusTarget:{type:Object},noAnimations:{type:Boolean,value:false},allowOutsideScroll:{type:Boolean,value:false,observer:"_allowOutsideScrollChanged"}},listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},observers:["_updateOverlayPosition(positionTarget, verticalAlign, horizontalAlign, verticalOffset, horizontalOffset)"],get containedElement(){var nodes=dom(this.$.content).getDistributedNodes();for(var i=0,l=nodes.length;i<l;i++){if(nodes[i].nodeType===Node.ELEMENT_NODE){return nodes[i]}}},ready:function(){if(!this.scrollAction){this.scrollAction=this.allowOutsideScroll?"refit":"lock"}this._readied=true},attached:function(){if(!this.sizingTarget||this.sizingTarget===this){this.sizingTarget=this.containedElement||this}},detached:function(){this.cancelAnimation()},_openedChanged:function(){if(this.opened&&this.disabled){this.cancel()}else{this.cancelAnimation();this._updateAnimationConfig();IronOverlayBehaviorImpl._openedChanged.apply(this,arguments)}},_renderOpened:function(){if(!this.noAnimations&&this.animationConfig.open){this.$.contentWrapper.classList.add("animating");this.playAnimation("open")}else{IronOverlayBehaviorImpl._renderOpened.apply(this,arguments)}},_renderClosed:function(){if(!this.noAnimations&&this.animationConfig.close){this.$.contentWrapper.classList.add("animating");this.playAnimation("close")}else{IronOverlayBehaviorImpl._renderClosed.apply(this,arguments)}},_onNeonAnimationFinish:function(){this.$.contentWrapper.classList.remove("animating");if(this.opened){this._finishRenderOpened()}else{this._finishRenderClosed()}},_updateAnimationConfig:function(){var animationNode=this.containedElement;var animations=[].concat(this.openAnimationConfig||[]).concat(this.closeAnimationConfig||[]);for(var i=0;i<animations.length;i++){animations[i].node=animationNode}this.animationConfig={open:this.openAnimationConfig,close:this.closeAnimationConfig}},_updateOverlayPosition:function(){if(this.isAttached){this.notifyResize()}},_allowOutsideScrollChanged:function(allowOutsideScroll){if(!this._readied){return}if(!allowOutsideScroll){this.scrollAction="lock"}else if(!this.scrollAction||this.scrollAction==="lock"){this.scrollAction="refit"}},_applyFocus:function(){var focusTarget=this.focusTarget||this.containedElement;if(focusTarget&&this.opened&&!this.noAutoFocus){focusTarget.focus()}else{IronOverlayBehaviorImpl._applyFocus.apply(this,arguments)}}});