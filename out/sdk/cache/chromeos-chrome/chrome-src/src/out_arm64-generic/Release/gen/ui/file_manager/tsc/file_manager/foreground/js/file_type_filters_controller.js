// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import { createChild } from '../../common/js/dom_utils.js';
import { isSameEntry } from '../../common/js/entry_utils.js';
import { recordEnum } from '../../common/js/metrics.js';
import { str, strf } from '../../common/js/translations.js';
import { FakeEntry } from '../../externs/files_app_entry_interfaces.js';
import { State } from '../../externs/ts/state.js';
import { getStore } from '../../state/store.js';
import { DirectoryModel } from './directory_model.js';
/**
 * This class controls wires file-type filter UI and the filter settings in
 * Recents view.
 */
export class FileTypeFiltersController {
    constructor(container_, directoryModel_, recentEntry_, a11y_) {
        this.container_ = container_;
        this.directoryModel_ = directoryModel_;
        this.recentEntry_ = recentEntry_;
        this.a11y_ = a11y_;
        this.filterTypeToTranslationKeyMap_ = new Map([
            [
                chrome.fileManagerPrivate.FileCategory.ALL,
                'MEDIA_VIEW_ALL_ROOT_LABEL',
            ],
            [
                chrome.fileManagerPrivate.FileCategory.AUDIO,
                'MEDIA_VIEW_AUDIO_ROOT_LABEL',
            ],
            [
                chrome.fileManagerPrivate.FileCategory.IMAGE,
                'MEDIA_VIEW_IMAGES_ROOT_LABEL',
            ],
            [
                chrome.fileManagerPrivate.FileCategory.VIDEO,
                'MEDIA_VIEW_VIDEOS_ROOT_LABEL',
            ],
            [
                chrome.fileManagerPrivate.FileCategory.DOCUMENT,
                'MEDIA_VIEW_DOCUMENTS_ROOT_LABEL',
            ],
        ]);
        this.inRecent_ = false;
        this.allFilterButton_ =
            this.createFilterButton_(chrome.fileManagerPrivate.FileCategory.ALL);
        this.audioFilterButton_ =
            this.createFilterButton_(chrome.fileManagerPrivate.FileCategory.AUDIO);
        this.documentFilterButton_ = this.createFilterButton_(chrome.fileManagerPrivate.FileCategory.DOCUMENT);
        this.imageFilterButton_ =
            this.createFilterButton_(chrome.fileManagerPrivate.FileCategory.IMAGE);
        this.videoFilterButton_ =
            this.createFilterButton_(chrome.fileManagerPrivate.FileCategory.VIDEO);
        this.directoryModel_.addEventListener('directory-changed', this.onCurrentDirectoryChanged_.bind(this));
        this.updateButtonActiveStates_();
        getStore().subscribe(this);
    }
    /** @param state latest state from the store. */
    onStateChanged(state) {
        if (this.inRecent_) {
            const search = state.search;
            this.container_.hidden = !!(search?.query);
        }
    }
    /**
     * @param fileCategory File category
     *     filter which needs to be recorded.
     */
    recordFileCategoryFilterUma_(fileCategory) {
        /**
         * Keep the order of this in sync with FileManagerRecentFilterType in
         * tools/metrics/histograms/enums.xml.
         * The array indices will be recorded in UMA as enum values. The index for
         * each filter type should never be renumbered nor reused in this array.
         */
        const FileTypeFiltersForUMA = ([
            chrome.fileManagerPrivate.FileCategory.ALL, // 0
            chrome.fileManagerPrivate.FileCategory.AUDIO, // 1
            chrome.fileManagerPrivate.FileCategory.IMAGE, // 2
            chrome.fileManagerPrivate.FileCategory.VIDEO, // 3
            chrome.fileManagerPrivate.FileCategory.DOCUMENT, // 4
        ]);
        Object.freeze(FileTypeFiltersForUMA);
        recordEnum('Recent.FilterByType', fileCategory, FileTypeFiltersForUMA);
    }
    /**
     * Speak voice message in screen recording mode depends on the existing
     * filter and the new filter type.
     *
     */
    speakA11yMessage(currentFilter, newFilter) {
        /**
         * When changing button active/inactive states, the common voice message is
         * "AAA filter is off. BBB filter is on.", i.e. the "off" message first
         * then the "on" message. However there are some exceptions:
         *  * If the active filter changes from "All" to others, no need to say
         * the off message.
         *  * If the active filter changes from others to "All", the on message will
         * be a filter reset message.
         */
        const isFromAllToOthers = currentFilter === chrome.fileManagerPrivate.FileCategory.ALL;
        const isFromOthersToAll = newFilter === chrome.fileManagerPrivate.FileCategory.ALL;
        let offMessage = strf('RECENT_VIEW_FILTER_OFF', str(this.filterTypeToTranslationKeyMap_.get(currentFilter)));
        let onMessage = strf('RECENT_VIEW_FILTER_ON', str(this.filterTypeToTranslationKeyMap_.get(newFilter)));
        if (isFromAllToOthers) {
            offMessage = '';
        }
        if (isFromOthersToAll) {
            onMessage = str('RECENT_VIEW_FILTER_RESET');
        }
        this.a11y_.speakA11yMessage(offMessage ? `${offMessage} ${onMessage}` : onMessage);
    }
    /**
     * Creates filter button's UI element.
     *
     * @param fileCategory File category
     *     for the filter button.
     */
    createFilterButton_(fileCategory) {
        const label = str(this.filterTypeToTranslationKeyMap_.get(fileCategory));
        const button = createChild(this.container_, 'file-type-filter-button', 'cr-button');
        button.textContent = label;
        button.setAttribute('aria-label', label);
        // Store the "FileCategory" on the button element so we know the mapping
        // between the DOM element and its corresponding "FileCategory", which
        // will make it easier to trigger UI change based on "FileCategory" or
        // vice versa.
        button.setAttribute('file-type-filter', fileCategory);
        button.onclick = this.onFilterButtonClicked_.bind(this);
        return button;
    }
    /**
     * Updates the UI when the current directory changes.
     * @param event Event.
     */
    onCurrentDirectoryChanged_(event) {
        const directoryChangeEvent = event;
        const isEnteringRecentEntry = isSameEntry(directoryChangeEvent.detail.newDirEntry, this.recentEntry_);
        const isLeavingRecentEntry = !isEnteringRecentEntry &&
            isSameEntry(directoryChangeEvent.detail.previousDirEntry, this.recentEntry_);
        // We show filter buttons only in Recents view at this moment.
        this.container_.hidden = !isEnteringRecentEntry;
        // Reset the filter back to "All" on leaving Recents view.
        if (isLeavingRecentEntry) {
            this.recentEntry_.fileCategory =
                chrome.fileManagerPrivate.FileCategory.ALL;
            this.updateButtonActiveStates_();
        }
        this.inRecent_ = isEnteringRecentEntry;
    }
    /**
     * Updates the UI when one of the filter buttons is clicked.
     * @param event Event.
     */
    onFilterButtonClicked_(event) {
        const target = event.target;
        const isButtonActive = target.classList.contains('active');
        const buttonFilter = target.getAttribute('file-type-filter');
        // Do nothing if "All" button is active and being clicked again.
        if (isButtonActive &&
            buttonFilter === chrome.fileManagerPrivate.FileCategory.ALL) {
            return;
        }
        const currentFilter = this.recentEntry_.fileCategory ||
            chrome.fileManagerPrivate.FileCategory.ALL;
        // Clicking an active button will make it inactive and make "All"
        // button active.
        const newFilter = isButtonActive ?
            chrome.fileManagerPrivate.FileCategory.ALL :
            buttonFilter;
        this.recentEntry_.fileCategory = newFilter;
        this.updateButtonActiveStates_();
        if (isButtonActive) {
            this.allFilterButton_.focus();
        }
        // Clear and scan the current directory with the updated Recent setting.
        this.directoryModel_.clearCurrentDirAndScan();
        this.speakA11yMessage(currentFilter, newFilter);
        this.recordFileCategoryFilterUma_(newFilter);
    }
    /**
     * Update the filter button active states based on current `fileCategory`.
     * Every time `fileCategory` is changed (including the initialization),
     * this method needs to be called to render the UI to reflect the file
     * type filter change.
     */
    updateButtonActiveStates_() {
        const currentFilter = this.recentEntry_.fileCategory;
        const buttons = [
            this.allFilterButton_,
            this.audioFilterButton_,
            this.imageFilterButton_,
            this.videoFilterButton_,
        ];
        if (this.documentFilterButton_) {
            buttons.push(this.documentFilterButton_);
        }
        buttons.forEach(button => {
            const fileCategoryFilter = button.getAttribute('file-type-filter');
            button.classList.toggle('active', currentFilter === fileCategoryFilter);
            button.setAttribute('aria-pressed', currentFilter === fileCategoryFilter ? 'true' : 'false');
        });
    }
}
