// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
import { ArrayDataModel } from '../../common/js/array_data_model.js';
import { compareLabel, compareName } from '../../common/js/entry_utils.js';
import { FileExtensionType, getType, isImage, isRaw } from '../../common/js/file_type.js';
import { getRecentDateBucket, getTranslationKeyForDateBucket } from '../../common/js/recent_date_bucket.js';
import { collator, str, strf } from '../../common/js/translations.js';
import { MetadataItem } from './metadata/metadata_item.js';
import { MetadataModel } from './metadata/metadata_model.js';
export const GROUP_BY_FIELD_MODIFICATION_TIME = 'modificationTime';
export const GROUP_BY_FIELD_DIRECTORY = 'isDirectory';
const FIELDS_SUPPORT_GROUP_BY = new Set([
    GROUP_BY_FIELD_MODIFICATION_TIME,
    GROUP_BY_FIELD_DIRECTORY,
]);
/**
 * File list.
 */
export class FileListModel extends ArrayDataModel {
    constructor(metadataModel_) {
        super([]);
        this.metadataModel_ = metadataModel_;
        /**
         * Whether this file list is sorted in descending order.
         */
        this.isDescendingOrder_ = false;
        /**
         * The number of folders in the list.
         */
        this.numFolders_ = 0;
        /**
         * The number of files in the list.
         */
        this.numFiles_ = 0;
        /**
         * The number of image files in the list.
         */
        this.numImageFiles_ = 0;
        /**
         * Whether to use modificationByMeTime as "Last Modified" time.
         */
        this.useModificationByMeTime_ = false;
        /**
         * The volume manager.
         */
        this.volumeManager_ = null;
        /**
         * Used to get the label for entries when
         * sorting by label.
         */
        this.locationInfo_ = null;
        this.hasGroupHeadingBeforeSort = false;
        /**
         * The field to do group by on.
         */
        this.groupByField_ = null;
        /**
         * The key is the field name which is used by groupBy. The value is a
         * object with type GroupBySnapshot.
         *
         */
        this.groupBySnapshot_ = Array.from(FIELDS_SUPPORT_GROUP_BY)
            .reduce((acc, field) => {
            acc[field] = {
                sortDirection: 'asc',
                groups: [],
            };
            return acc;
        }, {});
        // Initialize compare functions.
        this.setCompareFunction('name', this.compareName_.bind(this));
        this.setCompareFunction('modificationTime', this.compareMtime_.bind(this));
        this.setCompareFunction('size', this.compareSize_.bind(this));
        this.setCompareFunction('type', this.compareType_.bind(this));
    }
    /**
     * @param fileType Type object returned by getType().
     * @return Localized string representation of file type.
     */
    static getFileTypeString(fileType) {
        // Partitions on removable volumes are treated separately, they don't
        // have translatable names.
        if (fileType.type === 'partition') {
            return fileType.subtype;
        }
        if (fileType.subtype) {
            return strf(fileType.translationKey, fileType.subtype);
        }
        else {
            return str(fileType.translationKey);
        }
    }
    /**
     * Sorts data model according to given field and direction and dispatches
     * sorted event.
     * @param field Sort field.
     * @param direction Sort direction.
     */
    sort(field, direction) {
        this.hasGroupHeadingBeforeSort = this.shouldShowGroupHeading();
        this.isDescendingOrder_ = direction === 'desc';
        ArrayDataModel.prototype.sort.call(this, field, direction);
    }
    /**
     * Removes and adds items to the model.
     *
     * The implementation is similar to ArrayDataModel.splice(), but this
     * has a Files app specific optimization, which sorts only the new items and
     * merge sorted lists.
     * Note that this implementation assumes that the list is always sorted.
     *
     * @param index The index of the item to update.
     * @param deleteCount The number of items to remove.
     * @param args The items to add.
     * @return An array with the removed items.
     */
    splice(index, deleteCount, ...args) {
        const insertPos = Math.max(0, Math.min(index, this.indexes_.length));
        deleteCount = Math.min(deleteCount, this.indexes_.length - insertPos);
        for (let i = insertPos; i < insertPos + deleteCount; i++) {
            this.onRemoveEntryFromList_(this.array_[this.indexes_[i]]);
        }
        for (const arg of args) {
            this.onAddEntryToList_(arg);
        }
        // Prepare a comparison function to sort the list.
        let comp = null;
        if (this.sortStatus.field && this.compareFunctions_) {
            const compareFunction = this.compareFunctions_[this.sortStatus.field];
            if (compareFunction) {
                const dirMultiplier = this.sortStatus.direction === 'desc' ? -1 : 1;
                comp = (a, b) => {
                    return compareFunction(a, b) * dirMultiplier;
                };
            }
        }
        // Store the given new items in |newItems| and sort it before marge them to
        // the existing list.
        const newItems = [];
        for (const arg of args) {
            newItems.push(arg);
        }
        if (comp) {
            newItems.sort(comp);
        }
        // Creating a list of existing items.
        // This doesn't include items which should be deleted by this splice() call.
        const deletedItems = [];
        const currentItems = [];
        for (let i = 0; i < this.indexes_.length; i++) {
            const item = this.array_[this.indexes_[i]];
            if (insertPos <= i && i < insertPos + deleteCount) {
                deletedItems.push(item);
            }
            else {
                currentItems.push(item);
            }
        }
        // Initialize splice permutation with -1s.
        // Values of undeleted items will be filled in following merge step.
        const permutation = new Array(this.indexes_.length);
        for (let i = 0; i < permutation.length; i++) {
            permutation[i] = -1;
        }
        // Merge the list of existing item and the list of new items.
        this.indexes_ = [];
        this.array_ = [];
        let p = 0;
        let q = 0;
        while (p < currentItems.length || q < newItems.length) {
            const currentIndex = p + q;
            this.indexes_.push(currentIndex);
            // Determine which should be inserted to the resulting list earlier, the
            // smallest item of unused current items or the smallest item of unused
            // new items.
            let shouldPushCurrentItem;
            if (q === newItems.length) {
                shouldPushCurrentItem = true;
            }
            else if (p === currentItems.length) {
                shouldPushCurrentItem = false;
            }
            else {
                if (comp) {
                    shouldPushCurrentItem = comp(currentItems[p], newItems[q]) <= 0;
                }
                else {
                    // If the comparator is not defined, new items should be inserted to
                    // the insertion position. That is, the current items before insertion
                    // position should be pushed to the resulting list earlier.
                    shouldPushCurrentItem = p < insertPos;
                }
            }
            if (shouldPushCurrentItem) {
                this.array_.push(currentItems[p]);
                if (p < insertPos) {
                    permutation[p] = currentIndex;
                }
                else {
                    permutation[p + deleteCount] = currentIndex;
                }
                p++;
            }
            else {
                this.array_.push(newItems[q]);
                q++;
            }
        }
        // Calculate the index property of splice event.
        // If no item is inserted, it is simply the insertion/deletion position.
        // If at least one item is inserted, it should be the resulting index of the
        // item which is inserted first.
        let spliceIndex = insertPos;
        if (args.length > 0) {
            for (let i = 0; i < this.indexes_.length; i++) {
                if (this.array_[this.indexes_[i]] === args[0]) {
                    spliceIndex = i;
                    break;
                }
            }
        }
        // Dispatch permute/splice event.
        this.dispatchPermutedEvent_(permutation);
        // TODO(arv): Maybe unify splice and change events?
        const spliceEvent = new CustomEvent('splice', {
            detail: {
                removed: deletedItems,
                added: args,
                index: spliceIndex,
            },
        });
        this.dispatchEvent(spliceEvent);
        this.updateGroupBySnapshot_();
        return deletedItems;
    }
    /**
     */
    replaceItem(oldItem, newItem) {
        this.onRemoveEntryFromList_(oldItem);
        this.onAddEntryToList_(newItem);
        super.replaceItem(oldItem, newItem);
    }
    /**
     * Returns the number of files in this file list.
     * @return The number of files.
     */
    getFileCount() {
        return this.numFiles_;
    }
    /**
     * Returns the number of folders in this file list.
     * @return The number of folders.
     */
    getFolderCount() {
        return this.numFolders_;
    }
    /**
     * Sets whether to use modificationByMeTime as "Last Modified" time.
     */
    setUseModificationByMeTime(useModificationByMeTime) {
        this.useModificationByMeTime_ = useModificationByMeTime;
    }
    /**
     * Updates the statistics about contents when new entry is about to be added.
     * @param entry Entry of the new item.
     */
    onAddEntryToList_(entry) {
        if (entry.isDirectory) {
            this.numFolders_++;
        }
        else {
            this.numFiles_++;
        }
        const mimeType = this.metadataModel_.getCache([entry], ['contentMimeType'])[0]
            ?.contentMimeType;
        if (isImage(entry, mimeType) || isRaw(entry, mimeType)) {
            this.numImageFiles_++;
        }
    }
    /**
     * Updates the statistics about contents when an entry is about to be removed.
     * @param entry Entry of the item to be removed.
     */
    onRemoveEntryFromList_(entry) {
        if (entry.isDirectory) {
            this.numFolders_--;
        }
        else {
            this.numFiles_--;
        }
        const mimeType = this.metadataModel_.getCache([entry], ['contentMimeType'])[0]
            ?.contentMimeType;
        if (isImage(entry, mimeType) || isRaw(entry, mimeType)) {
            this.numImageFiles_--;
        }
    }
    /**
     * Compares entries by name.
     * @param a First entry.
     * @param b Second entry.
     * @return Compare result.
     */
    compareName_(a, b) {
        // Directories always precede files.
        if (a.isDirectory !== b.isDirectory) {
            return a.isDirectory === this.isDescendingOrder_ ? 1 : -1;
        }
        return compareName(a, b);
    }
    /**
     * Compares entries by label (i18n name).
     * @param a First entry.
     * @param b Second entry.
     * @return Compare result.
     */
    compareLabel_(a, b) {
        // Set locationInfo once because we only compare within the same volume.
        if (!this.locationInfo_ && this.volumeManager_) {
            this.locationInfo_ = this.volumeManager_.getLocationInfo(a);
        }
        // Directories always precede files.
        if (a.isDirectory !== b.isDirectory) {
            return a.isDirectory === this.isDescendingOrder_ ? 1 : -1;
        }
        return compareLabel(this.locationInfo_, a, b);
    }
    /**
     * Compares entries by mtime first, then by name.
     * @param a First entry.
     * @param b Second entry.
     * @return Compare result.
     */
    compareMtime_(a, b) {
        // Directories always precede files.
        if (a.isDirectory !== b.isDirectory) {
            return a.isDirectory === this.isDescendingOrder_ ? 1 : -1;
        }
        const properties = this.metadataModel_.getCache([a, b], ['modificationTime', 'modificationByMeTime']);
        const aTime = this.getMtime_(properties[0]);
        const bTime = this.getMtime_(properties[1]);
        if (aTime > bTime) {
            return 1;
        }
        if (aTime < bTime) {
            return -1;
        }
        return compareName(a, b);
    }
    /**
     * Returns the modification time from a properties object.
     * "Modification time" can be modificationTime or modificationByMeTime
     * depending on this.useModificationByMeTime_.
     * @param properties Properties object.
     * @return Modification time.
     */
    getMtime_(properties) {
        if (this.useModificationByMeTime_) {
            return properties.modificationByMeTime || properties.modificationTime ||
                0;
        }
        return properties.modificationTime || 0;
    }
    /**
     * Compares entries by size first, then by name.
     * @param a First entry.
     * @param b Second entry.
     * @return Compare result.
     */
    compareSize_(a, b) {
        // Directories always precede files.
        if (a.isDirectory !== b.isDirectory) {
            return a.isDirectory === this.isDescendingOrder_ ? 1 : -1;
        }
        const properties = this.metadataModel_.getCache([a, b], ['size']);
        const aSize = properties[0].size || 0;
        const bSize = properties[1].size || 0;
        return aSize !== bSize ? aSize - bSize : compareName(a, b);
    }
    /**
     * Compares entries by type first, then by subtype and then by name.
     * @param a First entry.
     * @param b Second entry.
     * @return Compare result.
     */
    compareType_(a, b) {
        // Directories always precede files.
        if (a.isDirectory !== b.isDirectory) {
            return a.isDirectory === this.isDescendingOrder_ ? 1 : -1;
        }
        const properties = this.metadataModel_.getCache([a, b], ['contentMimeType']);
        const aType = FileListModel.getFileTypeString(getType(a, properties[0].contentMimeType));
        const bType = FileListModel.getFileTypeString(getType(b, properties[1].contentMimeType));
        const result = collator.compare(aType, bType);
        return result !== 0 ? result : compareName(a, b);
    }
    initNewDirContents(volumeManager) {
        this.volumeManager_ = volumeManager;
        // Clear the location info, it's reset by compareLabel_ when needed.
        this.locationInfo_ = null;
        // Initialize compare function based on Labels.
        this.setCompareFunction('name', this.compareLabel_.bind(this));
    }
    get groupByField() {
        return this.groupByField_;
    }
    /**
     * @param field the field to group by.
     */
    set groupByField(field) {
        this.groupByField_ = field;
        if (!field || this.groupBySnapshot_[field]?.groups.length === 0) {
            this.updateGroupBySnapshot_();
        }
    }
    /**
     * Should the current list model show group heading or not.
     */
    shouldShowGroupHeading() {
        if (!this.groupByField_) {
            return false;
        }
        // GroupBy modification time is only valid when the current sort field is
        // modification time.
        if (this.groupByField_ === GROUP_BY_FIELD_MODIFICATION_TIME) {
            return this.sortStatus.field === this.groupByField_;
        }
        return FIELDS_SUPPORT_GROUP_BY.has(this.groupByField_);
    }
    /**
     * @param item Item in the file list model.
     * @param now Timestamp represents now.
     */
    getGroupForModificationTime_(item, now) {
        const properties = this.metadataModel_.getCache([item], ['modificationTime', 'modificationByMeTime']);
        return getRecentDateBucket(new Date(this.getMtime_(properties[0])), new Date(now));
    }
    /**
     * @param item Item in the file list model.
     */
    getGroupForDirectory_(item) {
        return item.isDirectory;
    }
    getGroupLabel_(value) {
        switch (this.groupByField_) {
            case GROUP_BY_FIELD_MODIFICATION_TIME:
                const dateBucket = value;
                return str(getTranslationKeyForDateBucket(dateBucket));
            case GROUP_BY_FIELD_DIRECTORY:
                const isDirectory = value;
                return isDirectory ? str('GRID_VIEW_FOLDERS_TITLE') :
                    str('GRID_VIEW_FILES_TITLE');
            default:
                return '';
        }
    }
    /**
     * Update the GroupBy snapshot by the existing sort field.
     */
    updateGroupBySnapshot_() {
        if (!this.shouldShowGroupHeading()) {
            return;
        }
        assert(this.groupByField_);
        const snapshot = this.groupBySnapshot_[this.groupByField_];
        assert(snapshot);
        snapshot.sortDirection = this.sortStatus.direction;
        snapshot.groups = [];
        const now = Date.now();
        let prevItemGroup = null;
        for (let i = 0; i < this.length; i++) {
            const item = this.item(i);
            let curItemGroup;
            if (this.groupByField_ === GROUP_BY_FIELD_MODIFICATION_TIME) {
                curItemGroup = this.getGroupForModificationTime_(item, now);
            }
            else if (this.groupByField_ === GROUP_BY_FIELD_DIRECTORY) {
                curItemGroup = this.getGroupForDirectory_(item);
            }
            if (prevItemGroup !== curItemGroup) {
                if (i > 0) {
                    snapshot.groups[snapshot.groups.length - 1].endIndex = i - 1;
                }
                snapshot.groups.push({
                    startIndex: i,
                    endIndex: -1,
                    group: curItemGroup,
                    label: this.getGroupLabel_(curItemGroup),
                });
            }
            prevItemGroup = curItemGroup;
        }
        if (snapshot.groups.length > 0) {
            // The last element is always the end of the last group.
            snapshot.groups[snapshot.groups.length - 1].endIndex = this.length - 1;
        }
    }
    /**
     * Refresh the group by data, e.g. when date modified changes due to
     * timezone change.
     */
    refreshGroupBySnapshot() {
        if (this.groupByField_ === GROUP_BY_FIELD_MODIFICATION_TIME) {
            this.updateGroupBySnapshot_();
        }
    }
    /**
     * Return the groupBy snapshot.
     */
    getGroupBySnapshot() {
        if (!this.shouldShowGroupHeading()) {
            return [];
        }
        assert(this.groupByField_);
        const snapshot = this.groupBySnapshot_[this.groupByField_];
        if (this.groupByField_ === GROUP_BY_FIELD_MODIFICATION_TIME) {
            if (this.sortStatus.direction === snapshot.sortDirection) {
                return snapshot.groups;
            }
            // Why are we calculating reverse order data in the snapshot instead
            // of calculating it inside sort() function? It's because redraw can
            // happen before sort() finishes, if we generate reverse order data
            // at the end of sort(), that might be too late for redraw.
            const reversedGroups = Array.from(snapshot.groups);
            reversedGroups.reverse();
            return reversedGroups.map(group => {
                return {
                    startIndex: this.length - 1 - group.endIndex,
                    endIndex: this.length - 1 - group.startIndex,
                    group: group.group,
                    label: group.label,
                };
            });
        }
        // Grid view Folders/Files group order never changes, e.g. Folders group
        // always shows first, and then Files group.
        if (this.groupByField_ === GROUP_BY_FIELD_DIRECTORY) {
            return snapshot.groups;
        }
        return [];
    }
}
