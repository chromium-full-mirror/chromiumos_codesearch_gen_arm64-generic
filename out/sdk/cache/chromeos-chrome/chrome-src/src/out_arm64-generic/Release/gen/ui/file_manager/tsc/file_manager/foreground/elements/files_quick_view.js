// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/ash/common/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import './files_metadata_box.js';
import './files_safe_media.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { toSandboxedURL } from '../../common/js/url_constants.js';
import { getTemplate } from './files_quick_view.html.js';
export class FilesQuickView extends PolymerElement {
    static get is() {
        return 'files-quick-view';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            // File media type, e.g. image, video.
            type: String,
            subtype: String,
            filePath: String,
            // True if there is a file task that can open the file type.
            hasTask: Boolean,
            /**
             * True if the entry shown in Quick View can be deleted.
             */
            canDelete: Boolean,
            /**
             * Preview content to be sent rendered in a sandboxed environment.
             */
            sourceContent: {
                type: Object,
                observer: 'refreshUntrustedIframe',
            },
            videoPoster: String,
            audioArtwork: String,
            // Autoplay property for audio, video.
            autoplay: Boolean,
            // True if this file is not image, audio, video or HTML, but is
            // supported by Chrome - content that is directly preview-able in
            // Chrome by setting the untrusted <iframe> src attribute. Examples:
            // pdf, text.
            browsable: Boolean,
            // The metadata-box-active-changed event is fired on attribute change.
            metadataBoxActive: {
                value: true,
                type: Boolean,
                notify: true,
            },
            // Text shown when there is no playback/preview available.
            noPlaybackText: String,
            noPreviewText: String,
            /**
             * True if the Files app window is a dialog, e.g. save-as or
             * open-with.
             */
            isModal: Boolean,
        };
    }
    ready() {
        super.ready();
        this.$.dialog.addEventListener('files-safe-media-tap-inside', this.clickInside.bind(this));
        this.$.dialog.addEventListener('files-safe-media-tap-outside', this.close.bind(this));
        this.$.dialog.addEventListener('files-safe-media-load-error', this.loaderror.bind(this));
        this.$.contentPanel.addEventListener('click', this.onContentPanelClick.bind(this));
    }
    /**
     * Send browsable preview content (i.e. content that can be displayed by the
     * browser directly e.g. PDF/text) to the chrome-untrusted:// <iframe>.
     */
    refreshUntrustedIframe() {
        if (!this.browsable) {
            return;
        }
        const iframe = this.shadowRoot.querySelector('#untrusted');
        if (!iframe) {
            return;
        }
        const data = {
            browsable: this.browsable,
            subtype: this.subtype,
            sourceContent: this.sourceContent,
        };
        iframe.contentWindow?.postMessage(data, toSandboxedURL().origin);
    }
    // Clears fields.
    clear() {
        this.setProperties({
            type: '',
            subtype: '',
            filePath: '',
            hasTask: false,
            canDelete: false,
            sourceContent: {
                data: null,
                dataType: '',
            },
            videoPoster: '',
            audioArtwork: '',
            autoplay: false,
            browsable: false,
        });
        // Remove the video's untrusted <iframe> child. The <iframe> contains the
        // <video> element. Removing the <iframe> removes the <video>: that stops
        // the video and its audio track playing: crbug.com/970192
        const video = this.$.contentPanel.querySelector('#videoSafeMedia');
        if (video) {
            video.src = {
                data: null,
                dataType: '',
            };
        }
        this.removeAttribute('load-error');
    }
    // Handle load error from the files-safe-media container.
    loaderror() {
        this.setAttribute('load-error', '');
        this.sourceContent = {
            data: null,
            dataType: '',
        };
    }
    isOpened() {
        return this.$.dialog?.open;
    }
    // Opens the dialog.
    open() {
        if (!this.isOpened()) {
            this.$.dialog.showModal();
            // Make dialog focusable and set focus to a dialog. This is how we can
            // prevent default behaviour of a dialog which by default sets focus to
            // the first input inside itself. When a dialog gains focus we remove
            // focusability to prevent selecting dialog when moving with a keyboard.
            this.$.dialog.setAttribute('tabindex', '0');
            this.$.dialog.focus();
            this.$.dialog.setAttribute('tabindex', '-1');
        }
    }
    // Closes the dialog.
    close() {
        if (this.isOpened()) {
            this.$.dialog.close();
        }
    }
    clickInside() {
        if (this.type === 'image') {
            const dialog = this.shadowRoot.querySelector('#dialog');
            dialog?.focus();
        }
    }
    getFilesMetadataBox() {
        return this.$['metadata-box'];
    }
    /**
     * Client should assign the function to open the file.
     */
    onOpenInNewButtonClick(_) { }
    shouldShowOpenButton(hasTask, isModal) {
        return hasTask && !isModal;
    }
    /**
     * Client should assign the function to delete the file.
     */
    onDeleteButtonClick(_) { }
    shouldShowDeleteButton(canDelete, isModal) {
        return canDelete && !isModal;
    }
    /**
     * See the changes on crbug.com/641587, but crbug.com/779044#c11 later undid
     * that work. So the focus remains on the metadata button when clicked after
     * the crbug.com/779044 "ghost focus" fix.
     *
     * crbug.com/641587 mentions a different UI behavior, that was wanted to fix
     * that bug. TODO(files-ng): UX to resolve the correct behavior needed here.
     */
    onMetadataButtonClick(_) {
        this.metadataBoxActive = !this.metadataBoxActive;
    }
    /**
     * Close Quick View unless the clicked target or its ancestor contains
     * 'no-close-on-click' class.
     */
    onContentPanelClick(event) {
        let target = event.target;
        while (target) {
            if (target.classList.contains('no-close-on-click')) {
                return;
            }
            target = target.parentElement;
        }
        this.close();
    }
    hasContent(sourceContent) {
        return sourceContent.dataType !== '';
    }
    isHtml(type, subtype) {
        return type === 'document' && subtype === 'HTML';
    }
    isImage(type) {
        return type === 'image';
    }
    isVideo(type) {
        return type === 'video';
    }
    isAudio(type) {
        return type === 'audio';
    }
    audioContent(sourceContent, type) {
        if (this.isAudio(type)) {
            return sourceContent;
        }
        return {
            data: null,
            dataType: '',
        };
    }
    isUnsupported(type, subtype, browsable) {
        return !this.isImage(type) && !this.isVideo(type) && !this.isAudio(type) &&
            !this.isHtml(type, subtype) && !browsable;
    }
    onDialogClose(e) {
        if (e.target !== this.$.dialog) {
            return;
        }
        this.clear();
        // Catch and re-fire the 'close' event such that it bubbles across Shadow
        // DOM v1.
        this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
    }
}
customElements.define(FilesQuickView.is, FilesQuickView);
