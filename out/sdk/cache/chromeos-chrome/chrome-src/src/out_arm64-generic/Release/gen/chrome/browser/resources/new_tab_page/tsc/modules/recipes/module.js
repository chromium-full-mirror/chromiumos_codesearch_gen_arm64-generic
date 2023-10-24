// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '../module_header.js';
import 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render.js';
import 'chrome://resources/cr_elements/cr_auto_img/cr_auto_img.js';
import 'chrome://resources/cr_elements/cr_hidden_style.css.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { I18nMixin, loadTimeData } from '../../i18n_setup.js';
import { ModuleDescriptor } from '../module_descriptor.js';
import { getTemplate } from './module.html.js';
import { RecipesHandlerProxy } from './recipes_handler_proxy.js';
/**
 * Implements the UI of a recipe module. This module shows a currently active
 * recipe search journey and provides a way for the user to continue that search
 * journey.
 */
export class RecipesModuleElement extends I18nMixin(PolymerElement) {
    constructor() {
        super(...arguments);
        this.intersectionObserver_ = null;
    }
    static get is() {
        return 'ntp-recipe-module';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            task: Object,
            showRelatedSearches_: {
                type: Boolean,
                computed: 'computeShowRelatedSearches_(task)',
            },
            title_: {
                type: String,
                computed: 'computeTitle_()',
            },
            dismissName_: {
                type: String,
                computed: 'computeDismissName_()',
            },
            disableName_: {
                type: String,
                computed: 'computeDisableName_()',
            },
            info_: {
                type: String,
                computed: 'computeInfo_()',
            },
            overflowScroll_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('modulesOverflowScrollbarEnabled'),
                reflectToAttribute: true,
            },
            wideModulesEnabled_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('wideModulesEnabled'),
                reflectToAttribute: true,
            },
        };
    }
    computeTitle_() {
        return loadTimeData.getBoolean('modulesRecipeHistoricalExperimentEnabled') ?
            loadTimeData.getString('modulesRecipeViewedTasksSentence') :
            loadTimeData.getString('modulesRecipeTasksSentence');
    }
    computeDismissName_() {
        return loadTimeData.getBoolean('modulesRecipeHistoricalExperimentEnabled') ?
            loadTimeData.getString('modulesRecipeViewedTasksLowerThese') :
            loadTimeData.getString('modulesRecipeTasksLowerThese');
    }
    computeDisableName_() {
        return loadTimeData.getBoolean('modulesRecipeHistoricalExperimentEnabled') ?
            loadTimeData.getString('modulesRecipeViewedTasksLower') :
            loadTimeData.getString('modulesRecipeTasksLower');
    }
    computeInfo_() {
        return loadTimeData.getBoolean('moduleRecipeExtendedExperimentEnabled') ?
            this.i18nAdvanced('modulesRecipeExtendedInfo') :
            this.i18nAdvanced('modulesRecipeInfo');
    }
    getRecipes_() {
        return this.task.recipes.slice(0, this.wideModulesEnabled_ ? 4 : 3);
    }
    computeShowRelatedSearches_() {
        return this.task.relatedSearches && this.task.relatedSearches.length > 0;
    }
    onRecipeClick_(e) {
        const index = e.model.index;
        RecipesHandlerProxy.getHandler().onRecipeClicked(index);
        this.dispatchEvent(new Event('usage', { bubbles: true, composed: true }));
    }
    onPillClick_(e) {
        const index = e.model.index;
        RecipesHandlerProxy.getHandler().onRelatedSearchClicked(index);
        this.dispatchEvent(new Event('usage', { bubbles: true, composed: true }));
    }
    onInfoButtonClick_() {
        this.$.infoDialogRender.get().showModal();
    }
    onDismissButtonClick_() {
        RecipesHandlerProxy.getHandler().dismissTask(this.task.name);
        this.dispatchEvent(new CustomEvent('dismiss-module', {
            bubbles: true,
            composed: true,
            detail: {
                message: loadTimeData.getStringF('dismissModuleToastMessage', this.title_),
                restoreCallback: this.onRestore_.bind(this),
            },
        }));
    }
    onDisableButtonClick_() {
        this.dispatchEvent(new CustomEvent('disable-module', {
            bubbles: true,
            composed: true,
            detail: {
                message: loadTimeData.getStringF('disableModuleToastMessage', this.disableName_),
            },
        }));
    }
    onRestore_() {
        RecipesHandlerProxy.getHandler().restoreTask(this.task.name);
    }
    onDomChange_() {
        if (!this.intersectionObserver_) {
            this.intersectionObserver_ = new IntersectionObserver(entries => {
                entries.forEach(({ intersectionRatio, target }) => {
                    if (this.overflowScroll_) {
                        target.style.display =
                            (intersectionRatio < 1) ? 'none' : 'flex';
                    }
                    else {
                        target.style.visibility =
                            intersectionRatio < 1 ? 'hidden' : 'visible';
                    }
                });
                if (this.overflowScroll_) {
                    // Disconnect the intersection observer for a11y reasons so that
                    // subsequent viewport changes do not remove items from display.
                    this.intersectionObserver_.disconnect();
                }
                this.dispatchEvent(new Event('visibility-update'));
            }, { root: this, threshold: 1 });
        }
        else {
            this.intersectionObserver_.disconnect();
        }
        const observeClasses = ['.pill'];
        if (!this.overflowScroll_) {
            observeClasses.push('.recipe');
        }
        this.shadowRoot.querySelectorAll(observeClasses.join(','))
            .forEach(el => this.intersectionObserver_.observe(el));
    }
}
customElements.define(RecipesModuleElement.is, RecipesModuleElement);
async function createModule() {
    const { task } = await RecipesHandlerProxy.getHandler().getPrimaryTask();
    if (!task) {
        return null;
    }
    const element = new RecipesModuleElement();
    element.task = task;
    return element;
}
export const recipeTasksDescriptor = new ModuleDescriptor(/*id=*/ 'recipe_tasks', createModule);
