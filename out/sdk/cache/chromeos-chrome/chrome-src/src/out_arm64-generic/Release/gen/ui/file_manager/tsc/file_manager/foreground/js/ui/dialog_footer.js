// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/ash/common/cr_elements/cr_input/cr_input.js';
import { CrInputElement } from 'chrome://resources/ash/common/cr_elements/cr_input/cr_input.js';
import { getKeyModifiers, queryRequiredElement } from '../../../common/js/dom_utils.js';
import { getFileTypeForName } from '../../../common/js/file_types_base.js';
import { str } from '../../../common/js/translations.js';
import { DialogType } from '../../../state/state.js';
import { FileListModel } from '../file_list_model.js';
/**
 * Obtains the label of OK button for the dialog type.
 * @param dialogType Dialog type.
 * @return OK button label.
 */
function getOkButtonLabel(dialogType) {
    switch (dialogType) {
        case DialogType.SELECT_UPLOAD_FOLDER:
            return str('UPLOAD_LABEL');
        case DialogType.SELECT_SAVEAS_FILE:
            return str('SAVE_LABEL');
        case DialogType.SELECT_FOLDER:
        case DialogType.SELECT_OPEN_FILE:
        case DialogType.SELECT_OPEN_MULTI_FILE:
        case DialogType.FULL_PAGE:
            return str('OPEN_LABEL');
        default:
            throw new Error('Unknown dialog type: ' + dialogType);
    }
}
/**
 * Footer shown when the Files app is opened as a file/folder selecting dialog.
 */
export class DialogFooter {
    /**
     * @param dialogType The type of the dialog (folder select, save-as, etc.)
     * @param element The element that holds the dialog footer.
     * @param filenameInput Filename input element.
     */
    constructor(dialogType_, element, filenameInput) {
        this.dialogType_ = dialogType_;
        this.element = element;
        this.filenameInput = filenameInput;
        this.okButton = this.element.querySelector('.ok');
        this.okButtonLabel = this.okButton.querySelector('span');
        this.cancelButton =
            this.element.querySelector('.cancel');
        this.newFolderButton =
            this.element.querySelector('#new-folder-button');
        this.fileTypeSelector =
            this.element.querySelector('div.file-type');
        const footer = this;
        Object.defineProperty(this.fileTypeSelector, 'value', {
            get() {
                return footer.getSelectValue_();
            },
            enumerable: true,
            configurable: true,
        });
        this.fileTypeSelector.addEventListener('activate', this.onActivate_.bind(this));
        this.fileTypeSelector.addEventListener('click', this.onActivate_.bind(this));
        this.fileTypeSelector.addEventListener('blur', this.onBlur_.bind(this));
        this.fileTypeSelector.addEventListener('keydown', this.onKeyDown_.bind(this));
        this.fileTypeSelectorText =
            this.fileTypeSelector.querySelector('span');
        // Initialize the element styles.
        this.element.classList.add('button-panel');
        // Set initial label for OK button. The label can be updated dynamically
        // depending on dialog types.
        this.okButtonLabel.textContent = getOkButtonLabel(this.dialogType_);
        // Register event handlers.
        this.filenameInput.addEventListener('keydown', this.onFilenameInputKeyDown_.bind(this));
        this.filenameInput.addEventListener('focus', this.onFilenameInputFocus_.bind(this));
    }
    /**
     * @return Selected filter index. The index is 1 based and 0 means
     *     'any file types'. Keep the meaniing consistent with the index passed to
     *     chrome.fileManagerPrivate.selectFile.
     */
    get selectedFilterIndex() {
        return ~~this.fileTypeSelector.value;
    }
    /**
     * Get the 'value' property from the file type selector.
     * @return containing the value attribute of the selected type.
     */
    getSelectValue_() {
        const selected = this.element.querySelector('.selected');
        return selected?.getAttribute('value') || '0';
    }
    /**
     * Open (expand) the fake select drop down.
     */
    selectShowDropDown(options) {
        options.setAttribute('expanded', 'expanded');
        this.fileTypeSelector.setAttribute('aria-expanded', 'true');
        const selectedOption = options.querySelector('.selected');
        if (selectedOption) {
            this.fileTypeSelector.setAttribute('aria-activedescendant', selectedOption.id);
        }
    }
    /**
     * Hide (collapse) the fake select drop down.
     */
    selectHideDropDown(options) {
        // TODO: Unify to use only aria-expanded.
        options.removeAttribute('expanded');
        this.fileTypeSelector.setAttribute('aria-expanded', 'false');
        this.fileTypeSelector.removeAttribute('aria-activedescendant');
    }
    getRequiredOptions_() {
        return this.element.querySelector('.options');
    }
    /**
     * Event handler for an activation or click.
     */
    onActivate_(evt) {
        const options = this.getRequiredOptions_();
        if (evt.target instanceof HTMLOptionElement) {
            this.setOptionSelected(evt.target);
            this.selectHideDropDown(options);
            const changeEvent = new Event('change');
            this.fileTypeSelector.dispatchEvent(changeEvent);
        }
        else {
            const target = evt.target;
            const ancestor = target instanceof Element ? target.closest('div') : null;
            if (ancestor && ancestor.classList.contains('select')) {
                if (options.getAttribute('expanded') === 'expanded') {
                    this.selectHideDropDown(options);
                }
                else {
                    this.selectShowDropDown(options);
                }
            }
        }
    }
    /**
     * Event handler for a blur.
     */
    onBlur_() {
        const options = this.getRequiredOptions_();
        if (options.getAttribute('expanded') === 'expanded') {
            this.selectHideDropDown(options);
        }
    }
    /**
     * Event handler for a key down.
     */
    onKeyDown_(evt) {
        const options = this.getRequiredOptions_();
        const selectedItem = options.querySelector('.selected');
        const isExpanded = options.getAttribute('expanded') === 'expanded';
        const fireChangeEvent = () => {
            this.fileTypeSelector.dispatchEvent(new Event('change'));
        };
        const changeSelection = (element) => {
            this.setOptionSelected(element);
            if (!isExpanded) {
                fireChangeEvent(); // crbug.com/1002410
            }
        };
        switch (evt.key) {
            case 'Escape':
                // If options are open, stop the window from closing.
                if (isExpanded) {
                    evt.stopPropagation();
                    evt.preventDefault();
                }
            // fall through
            case 'Tab':
                this.selectHideDropDown(options);
                break;
            case 'Enter':
            case ' ':
                if (isExpanded) {
                    fireChangeEvent();
                    this.selectHideDropDown(options);
                }
                else {
                    this.selectShowDropDown(options);
                }
                break;
            case 'ArrowRight':
                if (isExpanded) {
                    break;
                }
            // fall through
            case 'ArrowDown':
                if (selectedItem &&
                    selectedItem.nextSibling instanceof HTMLOptionElement) {
                    changeSelection(selectedItem.nextSibling);
                }
                break;
            case 'ArrowLeft':
                if (isExpanded) {
                    break;
                }
            // fall through
            case 'ArrowUp':
                if (selectedItem &&
                    selectedItem.previousSibling instanceof HTMLOptionElement) {
                    changeSelection(selectedItem.previousSibling);
                }
                break;
        }
    }
    /**
     * Finds the dialog footer element for the dialog type.
     * @param dialogType Dialog type.
     * @param document Document.
     * @return Dialog footer created with the found element.
     */
    static findDialogFooter(dialogType, _document) {
        return new DialogFooter(dialogType, queryRequiredElement('.dialog-footer'), queryRequiredElement('#filename-input-box cr-input'));
    }
    /**
     * Helper to set the option as the selected one.
     * @param option Element being set as selected.
     */
    setOptionSelected(option) {
        option.selected = true;
        // Update our fake 'select' HTMLDivElement.
        const existingSelected = this.fileTypeSelector.querySelector('.options .selected');
        if (existingSelected) {
            existingSelected.removeAttribute('class');
        }
        option.setAttribute('class', 'selected');
        this.fileTypeSelectorText.innerText = option.innerText;
        this.fileTypeSelectorText.parentElement.setAttribute('aria-activedescendant', option.id);
        // Force the width of the file-type selector div to be the width
        // of the options area to stop it jittering on selection change.
        if (option.parentNode instanceof Element) {
            let optionsWidth = option.parentNode.getBoundingClientRect().width;
            optionsWidth -= 16 + 12; // Padding of 16 + 12 px.
            this.fileTypeSelector.setAttribute('style', 'width: ' + optionsWidth + 'px');
        }
    }
    /**
     * Fills the file type list or hides it.
     * @param fileTypes List of file type.
     * @param includeAllFiles Whether the filter includes the 'all
     *     files' item or not.
     */
    initFileTypeFilter(fileTypes, includeAllFiles) {
        const optionHost = this.getRequiredOptions_();
        for (const [i, fileType] of fileTypes.entries()) {
            const option = document.createElement('option');
            let description = fileType.description;
            if (!description) {
                // See if all the extensions in the group have the same description.
                for (const extension of fileType.extensions) {
                    const currentDescription = FileListModel.getFileTypeString(getFileTypeForName('.' + extension));
                    if (!description) {
                        // Set the first time.
                        description = currentDescription;
                    }
                    else if (description !== currentDescription) {
                        // No single description, fall through to the extension list.
                        description = null;
                        break;
                    }
                }
                if (!description) {
                    // Convert ['jpg', 'png'] to '*.jpg, *.png'.
                    description = fileType.extensions
                        .map((s) => {
                        return '*.' + s;
                    })
                        .join(', ');
                }
            }
            option.innerText = description;
            option.value = String(i + 1);
            option.id = 'file-type-option-' + (i + 1);
            if (fileType.selected) {
                this.setOptionSelected(option);
            }
            optionHost.appendChild(option);
        }
        if (includeAllFiles) {
            const option = document.createElement('option');
            option.innerText = str('ALL_FILES_FILTER');
            option.value = '0';
            if (this.dialogType_ === DialogType.SELECT_SAVEAS_FILE) {
                this.setOptionSelected(option);
            }
            optionHost.appendChild(option);
        }
        const options = this.fileTypeSelector.querySelectorAll('option');
        if (options.length > 0) {
            // Make sure one of the options is selected to match real <select>.
            let selectedOption = this.fileTypeSelector.querySelector('.options .selected');
            if (!selectedOption) {
                selectedOption =
                    this.fileTypeSelector.querySelector('.options option');
                this.setOptionSelected(selectedOption);
            }
        }
        // Hide the UI if there is actually no choice to be made (0 or 1 option).
        this.fileTypeSelector.hidden = options.length < 2;
    }
    /**
     * @param event Focus event.
     */
    onFilenameInputFocus_() {
        // On focus we want to select everything but the extension, but
        // Chrome will select-all after the focus event completes.  We
        // schedule a timeout to alter the focus after that happens.
        setTimeout(() => {
            this.selectTargetNameInFilenameInput();
        }, 0);
    }
    /**
     * @param event Key event.
     */
    onFilenameInputKeyDown_(event) {
        if ((getKeyModifiers(event) + event.keyCode) === '13' /* Enter */) {
            this.okButton.click();
        }
    }
    selectTargetNameInFilenameInput() {
        const selectionEnd = this.filenameInput.value.lastIndexOf('.');
        if (selectionEnd === -1) {
            this.filenameInput.select();
        }
        else {
            this.filenameInput.select(0, selectionEnd);
        }
    }
}
