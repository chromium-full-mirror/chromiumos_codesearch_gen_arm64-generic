// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '../../elements/icons.html.js';
import { assertInstanceof } from 'chrome://resources/js/assert.js';
import { crInjectTypeAndInit } from '../../../common/js/cr_ui.js';
import { queryDecoratedElement, queryRequiredElement } from '../../../common/js/dom_utils.js';
import { isDlpEnabled, isNewDirectoryTreeEnabled } from '../../../common/js/flags.js';
import { str, strf } from '../../../common/js/translations.js';
import { AllowedPaths } from '../../../common/js/volume_manager_types.js';
import { BreadcrumbContainer } from '../../../containers/breadcrumb_container.js';
import { CloudPanelContainer } from '../../../containers/cloud_panel_container.js';
import { DirectoryTreeContainer } from '../../../containers/directory_tree_container.js';
import { NudgeContainer } from '../../../containers/nudge_container.js';
import { SearchContainer } from '../../../containers/search_container.js';
import { FilesAppEntry } from '../../../externs/files_app_entry_interfaces.js';
import { DialogType } from '../../../externs/ts/state.js';
import { XfCloudPanel } from '../../../widgets/xf_cloud_panel.js';
import { XfConflictDialog } from '../../../widgets/xf_conflict_dialog.js';
import { XfDlpRestrictionDetailsDialog } from '../../../widgets/xf_dlp_restriction_details_dialog.js';
import { XfPasswordDialog } from '../../../widgets/xf_password_dialog.js';
import { XfSplitter } from '../../../widgets/xf_splitter.js';
import { XfTree } from '../../../widgets/xf_tree.js';
import { BannerController } from '../banner_controller.js';
import { LaunchParam } from '../launch_param.js';
import { ProvidersModel } from '../providers_model.js';
import { ActionsSubmenu } from './actions_submenu.js';
import { ComboButton } from './combobutton.js';
import { contextMenuHandler } from './context_menu_handler.js';
import { DefaultTaskDialog } from './default_task_dialog.js';
import { DialogFooter } from './dialog_footer.js';
import { BaseDialog } from './dialogs.js';
import { DirectoryTree } from './directory_tree.js';
import { FileGrid } from './file_grid.js';
import { FileTable } from './file_table.js';
import { FilesAlertDialog } from './files_alert_dialog.js';
import { FilesConfirmDialog } from './files_confirm_dialog.js';
import { FilesMenuItem } from './files_menu.js';
import { GearMenu } from './gear_menu.js';
import { ImportCrostiniImageDialog } from './import_crostini_image_dialog.js';
import { InstallLinuxPackageDialog } from './install_linux_package_dialog.js';
import { ListContainer, ListType } from './list_container.js';
import { Menu } from './menu.js';
import { MenuItem } from './menu_item.js';
import { MultiMenu } from './multi_menu.js';
import { MultiMenuButton } from './multi_menu_button.js';
import { ProgressCenterPanel } from './progress_center_panel.js';
import { ProvidersMenu } from './providers_menu.js';
/**
 * The root of the file manager's view managing the DOM of the Files app.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export class FileManagerUI {
    /**
     * @param providersModel Model for providers.
     * @param element Top level element of the Files app.
     * @param launchParam Launch param.
     */
    constructor(providersModel, element, launchParam) {
        this.element = element;
        /**
         * List container. Overrides ActionModelUI declaration.
         */
        this.listContainer_ = null;
        /**
         * Dialog for password prompt
         */
        this.passwordDialog_ = null;
        /**
         * Dialog for resolving file conflicts.
         */
        this.xfConflictDialog_ = null;
        /**
         * Dialog for DLP (Data Leak Prevention) restriction details.
         */
        this.dlpRestrictionDetailsDialog_ = null;
        this.cloudPanelContainer_ = null;
        /**
         * Breadcrumb controller.
         */
        this.breadcrumbContainer_ = null;
        this.directoryTreeContainer = null;
        /**
         * Directory tree.
         */
        this.directoryTree = null;
        /**
         * Banners in the file list.
         */
        this.banners = null;
        this.searchContainer = null;
        this.a11yAnnounces = null;
        /**
         * True while FilesApp is in the process of a drag and drop. Set to true on
         * 'dragstart', set to false on 'dragend'. If CrostiniEvent
         * 'drop_failed_plugin_vm_directory_not_shared' is received during drag, we
         * show the move-to-windows-files dialog.
         */
        this.dragInProcess = false;
        // Initialize the dialog label. This should be done before constructing
        // dialog instances.
        BaseDialog.okLabel = str('OK_LABEL');
        BaseDialog.cancelLabel = str('CANCEL_LABEL');
        this.dialogType_ = launchParam.type;
        this.alertDialog = new FilesAlertDialog(this.element);
        this.confirmDialog = new FilesConfirmDialog(this.element);
        this.deleteConfirmDialog = new FilesConfirmDialog(this.element);
        this.deleteConfirmDialog.setOkLabel(str('DELETE_BUTTON_LABEL'));
        this.deleteConfirmDialog.focusCancelButton = true;
        this.emptyTrashConfirmDialog = new FilesConfirmDialog(this.element);
        this.emptyTrashConfirmDialog.setOkLabel(str('EMPTY_TRASH_DELETE_FOREVER'));
        this.restoreConfirmDialog = new FilesConfirmDialog(this.element);
        this.restoreConfirmDialog.setOkLabel(str('RESTORE_ACTION_LABEL'));
        this.moveConfirmDialog = new FilesConfirmDialog(this.element);
        this.moveConfirmDialog.setOkLabel(str('CONFIRM_MOVE_BUTTON_LABEL'));
        this.copyConfirmDialog = new FilesConfirmDialog(this.element);
        this.copyConfirmDialog.setOkLabel(str('CONFIRM_COPY_BUTTON_LABEL'));
        this.defaultTaskPicker = new DefaultTaskDialog(this.element);
        this.installLinuxPackageDialog =
            new InstallLinuxPackageDialog(this.element);
        this.importCrostiniImageDialog =
            new ImportCrostiniImageDialog(this.element);
        this.formatDialog =
            queryRequiredElement('#format-dialog');
        this.dialogContainer =
            queryRequiredElement('.dialog-container', this.element);
        this.textContextMenu = queryDecoratedElement('#text-context-menu', Menu);
        this.toolbar = queryRequiredElement('.dialog-header', this.element);
        this.filesTooltip = document.querySelector('files-tooltip');
        this.actionbar = queryRequiredElement('#action-bar', this.toolbar);
        this.dialogNavigationList =
            queryRequiredElement('.dialog-navigation-list', this.element);
        this.toggleViewButton = queryRequiredElement('#view-button', this.element);
        this.sortButton = queryDecoratedElement('#sort-button', MultiMenuButton);
        this.gearButton = queryDecoratedElement('#gear-button', MultiMenuButton);
        this.gearMenu = new GearMenu(this.gearButton.menu);
        this.selectionMenuButton =
            queryDecoratedElement('#selection-menu-button', MultiMenuButton);
        this.progressCenterPanel = new ProgressCenterPanel();
        this.activityProgressPanel =
            queryRequiredElement('#progress-panel', this.element);
        this.fileContextMenu =
            queryDecoratedElement('#file-context-menu', MultiMenu);
        this.defaultTaskMenuItem =
            queryRequiredElement('#default-task-menu-item', this.fileContextMenu);
        this.tasksSeparator =
            queryRequiredElement('#tasks-separator', this.fileContextMenu);
        this.taskMenuButton = queryDecoratedElement('#tasks', ComboButton);
        this.taskMenuButton.showMenu = function (shouldSetFocus) {
            // Prevent the empty menu from opening.
            if (!this.menu?.length) {
                return;
            }
            ComboButton.prototype.showMenu.call(this, shouldSetFocus);
        };
        this.dialogFooter = DialogFooter.findDialogFooter(this.dialogType_, this.element.ownerDocument);
        this.providersMenu = new ProvidersMenu(providersModel, queryDecoratedElement('#providers-menu', Menu));
        this.actionsSubmenu = new ActionsSubmenu(this.fileContextMenu);
        this.nudgeContainer = new NudgeContainer();
        this.toast = document.querySelector('files-toast');
        this.fileTypeFilterContainer =
            queryRequiredElement('#file-type-filter-container', this.element);
        this.emptyFolder = queryRequiredElement('#empty-folder', this.element);
        this.a11yMessage_ = queryRequiredElement('#a11y-msg', this.element);
        if (window.IN_TEST) {
            this.a11yAnnounces = [];
        }
        // Initialize attributes.
        this.element.setAttribute('type', this.dialogType_);
        if (launchParam.allowedPaths !== AllowedPaths.ANY_PATH_OR_URL) {
            this.element.setAttribute('block-hosted-docs', '');
            this.element.setAttribute('block-encrypted', '');
        }
        // Modify UI default behavior.
        this.element.addEventListener('click', this.onExternalLinkClick_.bind(this));
        this.element.addEventListener('drop', e => {
            e.preventDefault();
        });
        this.element.addEventListener('contextmenu', e => {
            e.preventDefault();
        });
    }
    get listContainer() {
        return this.listContainer_;
    }
    /**
     * Gets password dialog.
     */
    get passwordDialog() {
        if (this.passwordDialog_) {
            return this.passwordDialog_;
        }
        this.passwordDialog_ = document.createElement('xf-password-dialog');
        this.element.appendChild(this.passwordDialog_);
        return this.passwordDialog_;
    }
    /**
     * Gets conflict dialog.
     */
    get conflictDialog() {
        if (this.xfConflictDialog_) {
            return this.xfConflictDialog_;
        }
        this.xfConflictDialog_ = document.createElement('xf-conflict-dialog');
        this.element.appendChild(this.xfConflictDialog_);
        return this.xfConflictDialog_;
    }
    /**
     * Gets the DlpRestrictionDetails dialog.
     */
    get dlpRestrictionDetailsDialog() {
        if (!isDlpEnabled()) {
            return null;
        }
        if (this.dlpRestrictionDetailsDialog_) {
            return this.dlpRestrictionDetailsDialog_;
        }
        this.dlpRestrictionDetailsDialog_ =
            document.createElement('xf-dlp-restriction-details-dialog');
        this.element.appendChild(this.dlpRestrictionDetailsDialog_);
        return this.dlpRestrictionDetailsDialog_;
    }
    /**
     * Initializes here elements, which are expensive or hidden in the beginning.
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    initAdditionalUI(table, grid, volumeManager) {
        // List container.
        this.listContainer_ = new ListContainer(queryRequiredElement('#list-container', this.element), table, grid, this.dialogType_);
        // Breadcrumb container.
        this.breadcrumbContainer_ = new BreadcrumbContainer(queryRequiredElement('#location-breadcrumbs', this.element));
        // Splitter.
        const splitterContainer = queryRequiredElement('#navigation-list-splitter', this.element);
        splitterContainer.addEventListener(XfSplitter.events.SPLITTER_DRAGMOVE, this.relayout.bind(this));
        /**
         * Search container, which controls search UI elements.
         */
        this.searchContainer = new SearchContainer(volumeManager, queryRequiredElement('#search-wrapper', this.element), queryRequiredElement('#search-options-container', this.element), queryRequiredElement('#path-display-container', this.element), 
        /*a11y=*/ this);
        this.cloudPanelContainer_ = new CloudPanelContainer(queryRequiredElement('xf-cloud-panel', this.element));
        // Init context menus.
        contextMenuHandler.setContextMenu(grid, this.fileContextMenu);
        contextMenuHandler.setContextMenu(table.list, this.fileContextMenu);
        contextMenuHandler.setContextMenu(queryRequiredElement('.drive-welcome.page'), this.fileContextMenu);
        // Add window resize handler.
        document.defaultView?.addEventListener('resize', this.relayout.bind(this));
        // Add global pointer-active handler.
        const rootElement = document.documentElement;
        let pointerActive = ['pointerdown', 'pointerup', 'dragend', 'touchend'];
        if (window.IN_TEST) {
            pointerActive = pointerActive.concat(['mousedown', 'mouseup']);
        }
        pointerActive.forEach((eventType) => {
            document.addEventListener(eventType, (e) => {
                if (/down$/.test(e.type) === false) {
                    rootElement.classList.toggle('pointer-active', false);
                }
                else if (e.pointerType !== 'touch') {
                    // http://crbug.com/1311472
                    rootElement.classList.toggle('pointer-active', true);
                }
            }, true);
        });
        // Add global drag-drop-active handler.
        let activeDropTarget = null;
        ['dragenter', 'dragleave', 'drop'].forEach((eventType) => {
            document.addEventListener(eventType, (event) => {
                const dragDropActive = 'drag-drop-active';
                if (event.type === 'dragenter') {
                    rootElement.classList.add(dragDropActive);
                    activeDropTarget = event.target;
                }
                else if (activeDropTarget === event.target) {
                    rootElement.classList.remove(dragDropActive);
                    activeDropTarget = null;
                }
            });
        });
        document.addEventListener('dragstart', () => {
            this.dragInProcess = true;
        });
        document.addEventListener('dragend', () => {
            this.dragInProcess = false;
        });
    }
    /**
     * Initializes the focus.
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    initUIFocus() {
        // Set the initial focus. When there is no focus, the active element is the
        // <body>.
        let targetElement = null;
        if (this.dialogType_ == DialogType.SELECT_SAVEAS_FILE) {
            targetElement = this.dialogFooter.filenameInput;
        }
        else if (this.listContainer.currentListType !== ListType.UNINITIALIZED) {
            targetElement = this.listContainer.currentList;
        }
        if (targetElement) {
            targetElement.focus();
        }
    }
    /**
     * TODO(hirono): Merge the method into initAdditionalUI.
     */
    initDirectoryTree(directoryTree) {
        if (isNewDirectoryTreeEnabled()) {
            this.directoryTreeContainer = directoryTree;
            this.directoryTree = this.directoryTreeContainer.tree;
            this.directoryTreeContainer.contextMenuForRootItems =
                queryDecoratedElement('#roots-context-menu', Menu);
            this.directoryTreeContainer.contextMenuForSubitems =
                queryDecoratedElement('#directory-tree-context-menu', Menu);
            this.directoryTreeContainer.contextMenuForDisabledItems =
                queryDecoratedElement('#disabled-context-menu', Menu);
        }
        else {
            this.directoryTree = directoryTree;
            // Set up the context menu for the volume/shortcut items in directory
            // tree.
            this.directoryTree.contextMenuForRootItems =
                queryDecoratedElement('#roots-context-menu', Menu);
            this.directoryTree.contextMenuForSubitems =
                queryDecoratedElement('#directory-tree-context-menu', Menu);
            this.directoryTree.disabledContextMenu =
                queryDecoratedElement('#disabled-context-menu', Menu);
            // The context menu event that is created via keyboard navigation is
            // dispatched to the `directoryTree` however the tree items actually have
            // the context menu handlers. To ensure they receive the event, recompute
            // their location and re-dispatch the "contextmenu" event to the item that
            // is selected.
            this.directoryTree.addEventListener('contextmenu', e => {
                const selectedItem = this.directoryTree?.selectedItem?.rowElement;
                if (!selectedItem) {
                    return;
                }
                const domRect = selectedItem.getBoundingClientRect();
                const x = domRect.x + (domRect.width / 2);
                const y = domRect.y + (domRect.height / 2);
                this.directoryTree.selectedItem.dispatchEvent(new PointerEvent(e.type, { ...e, clientX: x, clientY: y }));
            });
        }
    }
    /**
     * TODO(mtomasz): Merge the method into initAdditionalUI if possible.
     */
    initBanners(banners) {
        this.banners = banners;
        this.banners.addEventListener('relayout', this.relayout.bind(this));
    }
    /**
     * Attaches files tooltip.
     */
    attachFilesTooltip() {
        this.filesTooltip.addTargets(document.querySelectorAll('[has-tooltip]'));
    }
    /**
     * Initialize files menu items. This method must be called after all files
     * menu items are decorated as MenuItem.
     */
    decorateFilesMenuItems() {
        const filesMenuItems = document.querySelectorAll('cr-menu.files-menu > cr-menu-item');
        for (const filesMenuItem of filesMenuItems) {
            assertInstanceof(filesMenuItem, MenuItem);
            crInjectTypeAndInit(filesMenuItem, FilesMenuItem);
        }
    }
    /**
     * Relayouts the UI.
     */
    relayout() {
        // May not be available during initialization.
        if (this.listContainer.currentListType !== ListType.UNINITIALIZED) {
            this.listContainer.currentView.relayout();
        }
        if (!isNewDirectoryTreeEnabled() && this.directoryTree) {
            this.directoryTree.relayout();
        }
    }
    /**
     * Sets the current list type.
     * @param listType New list type.
     */
    setCurrentListType(listType) {
        this.listContainer.setCurrentListType(listType);
        const isListView = (listType === ListType.DETAIL);
        this.toggleViewButton.classList.toggle('thumbnail', isListView);
        const label = isListView ? str('CHANGE_TO_THUMBNAILVIEW_BUTTON_LABEL') :
            str('CHANGE_TO_LISTVIEW_BUTTON_LABEL');
        this.toggleViewButton.setAttribute('aria-label', label);
        this.relayout();
    }
    /**
     * Overrides default handling for clicks on hyperlinks.
     * In a packaged apps links with target='_blank' open in a new tab by
     * default, other links do not open at all.
     *
     * @param event Click event.
     */
    onExternalLinkClick_(event) {
        const target = event.target;
        if (!(target instanceof HTMLElement) || target.tagName !== 'A' ||
            !('href' in target)) {
            return;
        }
        if (this.dialogType_ !== DialogType.FULL_PAGE) {
            this.dialogFooter.cancelButton.click();
        }
    }
    /**
     * Mark |element| with "loaded" attribute to indicate that File Manager has
     * finished loading.
     */
    addLoadedAttribute() {
        this.element.setAttribute('loaded', '');
    }
    /**
     * Sets up and shows the alert to inform a user the task is opened in the
     * desktop of the running profile.
     *
     * @param entries List of opened entries.
     */
    showOpenInOtherDesktopAlert(entries) {
        if (!entries.length) {
            return;
        }
        chrome.fileManagerPrivate.getProfiles((response) => {
            //  Find strings.
            let displayName;
            for (const profile of response.profiles) {
                if (profile.profileId === response.currentProfileId) {
                    displayName = profile.displayName;
                    break;
                }
            }
            if (!displayName) {
                console.warn('Display name is not found.');
                return;
            }
            const title = entries.length > 1 ?
                entries[0].name + '\u2026' /* ellipsis */ :
                entries[0].name;
            const message = strf(entries.length > 1 ? 'OPEN_IN_OTHER_DESKTOP_MESSAGE_PLURAL' :
                'OPEN_IN_OTHER_DESKTOP_MESSAGE', displayName, response.currentProfileId);
            // Show the dialog.
            this.alertDialog.showWithTitle(title, message);
        });
    }
    /**
     * Shows confirmation dialog and handles user interaction.
     * @param isMove true if the operation is move. false if copy.
     * @param messages The messages to show in the dialog.
     *     box.
     */
    showConfirmationDialog(isMove, messages) {
        const dialog = isMove ? this.moveConfirmDialog : this.copyConfirmDialog;
        return new Promise((resolve) => {
            dialog.show(messages.join(' '), () => {
                resolve(true);
            }, () => {
                resolve(false);
            });
        });
    }
    /**
     * Send a text to screen reader/Chromevox without displaying the text in the
     * UI.
     * @param text Text to be announced by screen reader, which should be
     * already translated.
     */
    speakA11yMessage(text) {
        // Screen reader only reads if the content changes, so clear the content
        // first.
        this.a11yMessage_.textContent = '';
        this.a11yMessage_.textContent = text;
        // this.a11yAnnounces is not null only during tests; see constructor.
        if (this.a11yAnnounces) {
            this.a11yAnnounces.push(text);
        }
    }
}
