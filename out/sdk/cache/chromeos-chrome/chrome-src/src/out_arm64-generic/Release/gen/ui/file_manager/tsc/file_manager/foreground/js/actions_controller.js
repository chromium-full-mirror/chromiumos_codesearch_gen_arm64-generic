// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { getFocusedTreeItem } from '../../common/js/dom_utils.js';
import { getTreeItemEntry } from '../../common/js/entry_utils.js';
import { isNewDirectoryTreeEnabled } from '../../common/js/flags.js';
import { XfTree } from '../../widgets/xf_tree.js';
import { Action, ActionsModel } from './actions_model.js';
import { EventType, FileSelectionHandler } from './file_selection.js';
import { FolderShortcutsDataModel } from './folder_shortcuts_data_model.js';
import { MetadataSetEvent } from './metadata/metadata_cache_set.js';
import { MetadataModel } from './metadata/metadata_model.js';
import { contextMenuHandler } from './ui/context_menu_handler.js';
import { DirectoryTree } from './ui/directory_tree.js';
import { FileManagerUI } from './ui/file_manager_ui.js';
/**
 * Manages actions for the current selection.
 */
export class ActionsController {
    constructor(volumeManager_, metadataModel_, shortcutsModel_, selectionHandler_, ui_) {
        this.volumeManager_ = volumeManager_;
        this.metadataModel_ = metadataModel_;
        this.shortcutsModel_ = shortcutsModel_;
        this.selectionHandler_ = selectionHandler_;
        this.ui_ = ui_;
        this.readyModels_ = new Map();
        this.initializingModels_ = new Map();
        /**
         * Id for an UI update, when an async update happens we only send the state
         * to the DOM if the sequence hasn't changed since its start.
         */
        this.updateUiSequence_ = 0;
        // Attach listeners to non-user events which will only update the in-memory
        // ActionsModel.
        if (isNewDirectoryTreeEnabled()) {
            this.ui_.directoryTree.addEventListener(XfTree.events.TREE_SELECTION_CHANGED, this.onNavigationListSelectionChanged_.bind(this), true);
        }
        else {
            this.ui_.directoryTree.addEventListener('change', this.onNavigationListSelectionChanged_.bind(this), true);
        }
        this.selectionHandler_.addEventListener(EventType.CHANGE_THROTTLED, this.onSelectionChanged_.bind(this));
        // Attach listeners to events based on user action to show the menu, which
        // updates the DOM.
        contextMenuHandler.addEventListener('show', this.onContextMenuShow_.bind(this));
        this.ui_.selectionMenuButton.addEventListener('menushow', this.onMenuShow_.bind(this));
        this.ui_.gearButton.addEventListener('menushow', this.onMenuShow_.bind(this));
        this.metadataModel_.addEventListener('update', this.onMetadataUpdated_.bind(this));
    }
    getEntriesFor_(element) {
        // Element can be null, eg. when invoking a command via a keyboard shortcut.
        if (!element) {
            return [];
        }
        if (this.ui_.listContainer.element.contains(element) ||
            this.ui_.toolbar.contains(element) ||
            this.ui_.fileContextMenu.contains(element) ||
            document.body === element) {
            return this.selectionHandler_.selection.entries;
        }
        const contextMenuForRootItems = isNewDirectoryTreeEnabled() ?
            this.ui_.directoryTreeContainer.contextMenuForRootItems :
            this.ui_.directoryTree.contextMenuForRootItems;
        const contextMenuForSubitems = isNewDirectoryTreeEnabled() ?
            this.ui_.directoryTreeContainer.contextMenuForSubitems :
            this.ui_.directoryTree.contextMenuForSubitems;
        if (this.ui_.directoryTree.contains(element) ||
            contextMenuForRootItems.contains(element) ||
            contextMenuForSubitems.contains(element)) {
            const entry = 'entry' in element ? element.entry : null;
            if (entry) {
                return [entry];
            }
            // DirectoryTree has the focused item.
            const focusedItem = getFocusedTreeItem(element);
            const focusedEntry = getTreeItemEntry(focusedItem);
            if (focusedEntry) {
                return [focusedEntry];
            }
        }
        return [];
    }
    getEntriesKey_(entries) {
        return entries.map(entry => entry.toURL()).join(';');
    }
    /**
     * Clears data associated with the given `key`.
     */
    clearLocalCache_(key) {
        this.readyModels_.delete(key);
        this.initializingModels_.delete(key);
    }
    updateView_(element) {
        const entries = this.getEntriesFor_(element);
        // Try to update synchronously.
        const actionsModel = this.getInitializedActionsForEntries(entries);
        if (actionsModel) {
            this.ui_.actionsSubmenu.setActionsModel(actionsModel, element);
            return;
        }
        // Asynchronously update the UI, after fetching actions from the backend.
        const sequence = ++this.updateUiSequence_;
        this.getActionsForEntries(entries).then((actionsModel) => {
            // Only update if there wasn't another UI update started while the promise
            // was resolving, which could be for different entries and avoids multiple
            // updates for the same entries.
            if (sequence === this.updateUiSequence_) {
                this.ui_.actionsSubmenu.setActionsModel(actionsModel, element);
            }
        });
    }
    onContextMenuShow_(event) {
        this.updateView_(event.detail.element);
    }
    onMenuShow_(event) {
        this.updateView_(event.target);
    }
    onSelectionChanged_() {
        const entries = this.selectionHandler_.selection.entries;
        if (!entries.length) {
            return;
        }
        // To avoid the menu flickering, make this call to start the caching
        // process. We do not return the result on purpose.
        this.getActionsForEntries(entries);
    }
    onNavigationListSelectionChanged_() {
        const focusedItem = getFocusedTreeItem(this.ui_.directoryTree);
        const entry = focusedItem && 'entry' in focusedItem ? focusedItem.entry : null;
        if (!entry) {
            return;
        }
        // Force to recalculate for the new current directory.
        const fileEntry = entry;
        const key = this.getEntriesKey_([fileEntry]);
        this.clearLocalCache_(key);
        // To avoid the menu flickering, make this call to start the caching
        // process. We do not return the result on purpose.
        this.getActionsForEntries([fileEntry]);
    }
    onMetadataUpdated_(event) {
        if (!event) {
            return;
        }
        const evt = event;
        if (!evt.names.has('pinned')) {
            return;
        }
        const entriesMap = evt.entriesMap;
        for (const key of this.readyModels_.keys()) {
            if (key.split(';').some(url => entriesMap.has(url))) {
                this.readyModels_.delete(key);
            }
        }
        for (const key of this.initializingModels_.keys()) {
            if (key.split(';').some(url => entriesMap.has(url))) {
                this.initializingModels_.delete(key);
            }
        }
    }
    getInitializedActionsForEntries(entries) {
        const key = this.getEntriesKey_(entries);
        return this.readyModels_.get(key) || null;
    }
    getActionsForEntries(entries) {
        const key = this.getEntriesKey_(entries);
        if (!key) {
            return Promise.resolve();
        }
        // If it's still initializing, return the cached promise.
        const promise = this.initializingModels_.get(key);
        if (promise) {
            return promise;
        }
        // If it's already initialized, resolve with the model.
        const readyModel = this.readyModels_.get(key);
        if (readyModel) {
            return Promise.resolve(readyModel);
        }
        const freshModel = new ActionsModel(this.volumeManager_, this.metadataModel_, this.shortcutsModel_, this.ui_, entries);
        freshModel.addEventListener('invalidated', () => {
            this.clearLocalCache_(key);
            this.selectionHandler_.onFileSelectionChanged();
        }, { once: true });
        // Once it's initialized, move to readyModels_ so we don't have to construct
        // and initialized again.
        freshModel.initialize().then(() => {
            this.initializingModels_.delete(key);
            this.readyModels_.set(key, freshModel);
        });
        // Cache in the waiting initialization map.
        this.initializingModels_.set(key, Promise.resolve(freshModel));
        return Promise.resolve(freshModel);
    }
    executeAction(action) {
        const entries = action.getEntries();
        const key = this.getEntriesKey_(entries);
        // Invalidate the model early so new UI has to refresh it.
        this.readyModels_.delete(key);
        action.execute();
    }
}
