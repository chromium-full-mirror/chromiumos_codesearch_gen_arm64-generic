// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { getTemplate } from './folder_selector.html.js';
/**
 * Retrieves the parent folder path of the supplied `folderPath`. Useful to
 * identify the list container to place the folder element.
 */
function getParentPath(folderPath) {
    const folderParts = folderPath.split('/');
    const parentPath = folderParts.slice(0, folderParts.length - 1).join('/');
    if (parentPath.length === 0) {
        return '/';
    }
    return parentPath;
}
/**
 * Retrieves the folder name as the final element of an absolute path.
 */
function getFolderName(folderPath) {
    const folderParts = folderPath.split('/');
    return folderParts[folderParts.length - 1];
}
/**
 * Helper function to convert a supplied folder path to it's querySelector
 * variant using the data-full-path key and escaping double quotes.
 */
function selectorFromPath(folderPath) {
    return `input[data-full-path="${folderPath.replace(/"/g, '\\"')}"]`;
}
/**
 * FolderSelector presents a folder hierarchy of checkboxes representing the
 * underlying folder structure. The items are lazily loaded as required.
 */
export class FolderSelector extends HTMLElement {
    /* The <template> fragment used to create new elements. */
    folderSelectorTemplate;
    /* A Set of currently selected folders. */
    selectedFolders = new Set();
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
            .appendChild(getTemplate().content.cloneNode(true));
        this.folderSelectorTemplate =
            this.shadowRoot.getElementById('folder-selector-template');
    }
    /**
     * Once the <folder-selector> component has been connected to the DOM, this
     * lifecycle callback is invoked.
     */
    connectedCallback() {
        // Register event listeners on the root list element.
        const li = this.shadowRoot?.querySelector('#select-folders > ul > li');
        li.addEventListener('click', (event) => this.onPathExpanded(event, '/'));
        const selector = selectorFromPath('/');
        const input = this.shadowRoot?.querySelector(selector);
        input.addEventListener('click', event => {
            // The <li> enclosing the <input> also has an event listener so don't
            // propagate once the click has been received.
            event.stopPropagation();
            this.onPathSelected(event, '/');
        });
    }
    /**
     * Add an array of paths to the DOM. These paths must all share the same
     * parent.
     */
    async addChildFolders(folderPaths) {
        const parentElements = new Map();
        let parentSelected = false;
        /**
         * Get the parent container and in the process cache the parent element. All
         * folders coming in via addChildFolders share the same parent.
         * @param folderPath
         */
        const getParentContainer = (folderPath) => {
            const parentPath = getParentPath(folderPath);
            if (!parentElements.has(parentPath)) {
                const parentSelector = selectorFromPath(parentPath);
                const parentElement = this.shadowRoot.querySelector(parentSelector);
                parentElements.set(parentPath, parentElement);
                parentSelected = parentElement.checked;
            }
            parentSelected = parentElements.get(parentPath).checked;
            return parentElements.get(parentPath).parentElement.nextElementSibling;
        };
        for (const path of folderPaths) {
            if (this.shadowRoot?.querySelector(selectorFromPath(path))) {
                continue;
            }
            const ulContainer = getParentContainer(path);
            const newElement = this.createNewFolderSelection(path, parentSelected);
            ulContainer?.appendChild(newElement);
        }
    }
    /**
     * Returns the list of paths that are currently selected.
     */
    get selectedPaths() {
        return Array.from(this.selectedFolders.values());
    }
    /**
     * Event listener for when a checkbox for a path is selected. We want to
     * update all descendants to be disabled and checked and ensure the selected
     * path is being kept track of.
     */
    onPathSelected(event, path) {
        const input = event.currentTarget;
        const { checked } = input;
        if (checked) {
            this.selectedFolders.add(path);
        }
        else {
            this.selectedFolders.delete(path);
        }
        const children = input.parentElement.nextElementSibling.querySelectorAll('input');
        for (const child of children) {
            child.toggleAttribute('disabled', checked);
            child.toggleAttribute('checked', checked);
        }
    }
    /**
     * Event listener for when a path has been clicked (excluding the checkbox).
     * Dispatches an event to enable the <manage-mirrorsync> to fetch the children
     * folders.
     */
    onPathExpanded(event, path) {
        const li = event.currentTarget;
        li.toggleAttribute('expanded');
        if (li.hasAttribute('retrieved')) {
            return;
        }
        this.dispatchEvent(new CustomEvent(FOLDER_EXPANDED, { bubbles: true, composed: true, detail: path }));
        li.toggleAttribute('retrieved', true);
    }
    /**
     * Creates a new folder selection and assigns the requisite event listeners.
     * Uses the shadowRoot <template> fragment that contains a minimal
     * representation and builds on top of that.
     */
    createNewFolderSelection(folderPath, selected) {
        const newFolderTemplate = this.folderSelectorTemplate.content.cloneNode(true);
        const textNode = document.createTextNode(getFolderName(folderPath));
        const li = newFolderTemplate.querySelector('li');
        li.appendChild(textNode);
        li.addEventListener('click', (event) => this.onPathExpanded(event, folderPath));
        const input = newFolderTemplate.querySelector('input[name="folders"]');
        input.setAttribute('data-full-path', folderPath);
        input.toggleAttribute('disabled', selected);
        input.toggleAttribute('checked', selected);
        // TODO(b/237066325): Add one event listener to the <folder-selector> and
        // switch on the element clicked to identify whether it is expanded or
        // selected to avoid too many event listeners.
        input.addEventListener('click', event => {
            event.stopPropagation();
            this.onPathSelected(event, folderPath);
        });
        return newFolderTemplate;
    }
}
/**
 * The available events that occur from this web component.
 */
export const FOLDER_EXPANDED = 'folder_selected';
customElements.define('folder-selector', FolderSelector);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9sZGVyX3NlbGVjdG9yLmpzIiwic291cmNlUm9vdCI6Ii92YXIvY2FjaGUvY2hyb21lb3MtY2hyb21lL2Nocm9tZS1zcmMvc3JjL291dF9hcm02NC1nZW5lcmljL1JlbGVhc2UvZ2VuL2Nocm9tZS9icm93c2VyL3Jlc291cmNlcy9jaHJvbWVvcy9tYW5hZ2VfbWlycm9yc3luYy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9sZGVyX3NlbGVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNDQUFzQztBQUN0Qyx5RUFBeUU7QUFDekUsNkJBQTZCO0FBRTdCLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUV0RDs7O0dBR0c7QUFDSCxTQUFTLGFBQWEsQ0FBQyxVQUFrQjtJQUN2QyxNQUFNLFdBQVcsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLE1BQU0sVUFBVSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFFLElBQUksVUFBVSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUUsQ0FBQztRQUM1QixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFDRCxPQUFPLFVBQVUsQ0FBQztBQUNwQixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLGFBQWEsQ0FBQyxVQUFrQjtJQUN2QyxNQUFNLFdBQVcsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLE9BQU8sV0FBVyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFFLENBQUM7QUFDOUMsQ0FBQztBQUVEOzs7R0FHRztBQUNILFNBQVMsZ0JBQWdCLENBQUMsVUFBa0I7SUFDMUMsT0FBTyx5QkFBeUIsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFD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QUFDLEVBQUU7WUFDdEMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxpQkFBaUIsQ0FBQztJQUMzQixDQUFDO0NBQ0Y7QUFFRDs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBRyxpQkFBaUIsQ0FBQztBQWNqRCxjQUFjLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLGNBQWMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IDIwMjIgVGhlIENocm9taXVtIEF1dGhvcnNcbi8vIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgQlNELXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbi8vIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUuXG5cbmltcG9ydCB7Z2V0VGVtcGxhdGV9IGZyb20gJy4vZm9sZGVyX3NlbGVjdG9yLmh0bWwuanMnO1xuXG4vKipcbiAqIFJldHJpZXZlcyB0aGUgcGFyZW50IGZvbGRlciBwYXRoIG9mIHRoZSBzdXBwbGllZCBgZm9sZGVyUGF0aGAuIFVzZWZ1bCB0b1xuICogaWRlbnRpZnkgdGhlIGxpc3QgY29udGFpbmVyIHRvIHBsYWNlIHRoZSBmb2xkZXIgZWxlbWVudC5cbiAqL1xuZnVuY3Rpb24gZ2V0UGFyZW50UGF0aChmb2xkZXJQYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBmb2xkZXJQYXJ0cyA9IGZvbGRlclBhdGguc3BsaXQoJy8nKTtcbiAgY29uc3QgcGFyZW50UGF0aCA9IGZvbGRlclBhcnRzLnNsaWNlKDAsIGZvbGRlclBhcnRzLmxlbmd0aCAtIDEpLmpvaW4oJy8nKTtcbiAgaWYgKHBhcmVudFBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuICcvJztcbiAgfVxuICByZXR1cm4gcGFyZW50UGF0aDtcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgdGhlIGZvbGRlciBuYW1lIGFzIHRoZSBmaW5hbCBlbGVtZW50IG9mIGFuIGFic29sdXRlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGdldEZvbGRlck5hbWUoZm9sZGVyUGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgZm9sZGVyUGFydHMgPSBmb2xkZXJQYXRoLnNwbGl0KCcvJyk7XG4gIHJldHVybiBmb2xkZXJQYXJ0c1tmb2xkZXJQYXJ0cy5sZW5ndGggLSAxXSE7XG59XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIGNvbnZlcnQgYSBzdXBwbGllZCBmb2xkZXIgcGF0aCB0byBpdCdzIHF1ZXJ5U2VsZWN0b3JcbiAqIHZhcmlhbnQgdXNpbmcgdGhlIGRhdGEtZnVsbC1wYXRoIGtleSBhbmQgZXNjYXBpbmcgZG91YmxlIHF1b3Rlcy5cbiAqL1xuZnVuY3Rpb24gc2VsZWN0b3JGcm9tUGF0aChmb2xkZXJQYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gYGlucHV0W2RhdGEtZnVsbC1wYXRoPVwiJHtmb2xkZXJQYXRoLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKX1cIl1gO1xufVxuXG4vKipcbiAqIEZvbGRlclNlbGVjdG9yIHByZXNlbnRzIGEgZm9sZGVyIGhpZXJhcmNoeSBvZiBjaGVja2JveGVzIHJlcHJlc2VudGluZyB0aGVcbiAqIHVuZGVybHlpbmcgZm9sZGVyIHN0cnVjdHVyZS4gVGhlIGl0ZW1zIGFyZSBsYXppbHkgbG9hZGVkIGFzIHJlcXVpcmVkLlxuICovXG5leHBvcnQgY2xhc3MgRm9sZGVyU2VsZWN0b3IgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIC8qIFRoZSA8dGVtcGxhdGU+IGZyYWdtZW50IHVzZWQgdG8gY3JlYXRlIG5ldyBlbGVtZW50cy4gKi9cbiAgcHJpdmF0ZSBmb2xkZXJTZWxlY3RvclRlbXBsYXRlOiBIVE1MVGVtcGxhdGVFbGVtZW50O1xuXG4gIC8qIEEgU2V0IG9mIGN1cnJlbnRseSBzZWxlY3RlZCBmb2xkZXJzLiAqL1xuICBwcml2YXRlIHNlbGVjdGVkRm9sZGVyczogU2V0PHN0cmluZz4gPSBuZXcgU2V0KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTogJ29wZW4nfSlcbiAgICAgICAgLmFwcGVuZENoaWxkKGdldFRlbXBsYXRlKCkuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuXG4gICAgdGhpcy5mb2xkZXJTZWxlY3RvclRlbXBsYXRlID1cbiAgICAgICAgdGhpcy5zaGFkb3dSb290IS5nZXRFbGVtZW50QnlJZCgnZm9sZGVyLXNlbGVjdG9yLXRlbXBsYXRlJykgYXNcbiAgICAgICAgSFRNTFRlbXBsYXRlRWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbmNlIHRoZSA8Zm9sZGVyLXNlbGVjdG9yPiBjb21wb25lbnQgaGFzIGJlZW4gY29ubmVjdGVkIHRvIHRoZSBET00sIHRoaXNcbiAgICogbGlmZWN5Y2xlIGNhbGxiYWNrIGlzIGludm9rZWQuXG4gICAqL1xuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAvLyBSZWdpc3RlciBldmVudCBsaXN0ZW5lcnMgb24gdGhlIHJvb3QgbGlzdCBlbGVtZW50LlxuICAgIGNvbnN0IGxpID0gdGhpcy5zaGFkb3dSb290Py5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0LWZvbGRlcnMgPiB1bCA+IGxpJykgYXNcbiAgICAgICAgSFRNTExJRWxlbWVudDtcbiAgICBsaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4gdGhpcy5vblBhdGhFeHBhbmRlZChldmVudCwgJy8nKSk7XG5cbiAgICBjb25zdCBzZWxlY3RvciA9IHNlbGVjdG9yRnJvbVBhdGgoJy8nKTtcbiAgICBjb25zdCBpbnB1dCA9IHRoaXMuc2hhZG93Um9vdD8ucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgIC8vIFRoZSA8bGk+IGVuY2xvc2luZyB0aGUgPGlucHV0PiBhbHNvIGhhcyBhbiBldmVudCBsaXN0ZW5lciBzbyBkb24ndFxuICAgICAgLy8gcHJvcGFnYXRlIG9uY2UgdGhlIGNsaWNrIGhhcyBiZWVuIHJlY2VpdmVkLlxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLm9uUGF0aFNlbGVjdGVkKGV2ZW50LCAnLycpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhbiBhcnJheSBvZiBwYXRocyB0byB0aGUgRE9NLiBUaGVzZSBwYXRocyBtdXN0IGFsbCBzaGFyZSB0aGUgc2FtZVxuICAgKiBwYXJlbnQuXG4gICAqL1xuICBhc3luYyBhZGRDaGlsZEZvbGRlcnMoZm9sZGVyUGF0aHM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgcGFyZW50RWxlbWVudHM6IE1hcDxzdHJpbmcsIEhUTUxJbnB1dEVsZW1lbnQ+ID0gbmV3IE1hcCgpO1xuICAgIGxldCBwYXJlbnRTZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIEdldCB0aGUgcGFyZW50IGNvbnRhaW5lciBhbmQgaW4gdGhlIHByb2Nlc3MgY2FjaGUgdGhlIHBhcmVudCBlbGVtZW50LiBBbGxcbiAgICAgKiBmb2xkZXJzIGNvbWluZyBpbiB2aWEgYWRkQ2hpbGRGb2xkZXJzIHNoYXJlIHRoZSBzYW1lIHBhcmVudC5cbiAgICAgKiBAcGFyYW0gZm9sZGVyUGF0aFxuICAgICAqL1xuICAgIGNvbnN0IGdldFBhcmVudENvbnRhaW5lciA9IChmb2xkZXJQYXRoOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IHBhcmVudFBhdGggPSBnZXRQYXJlbnRQYXRoKGZvbGRlclBhdGgpO1xuICAgICAgaWYgKCFwYXJlbnRFbGVtZW50cy5oYXMocGFyZW50UGF0aCkpIHtcbiAgICAgICAgY29uc3QgcGFyZW50U2VsZWN0b3IgPSBzZWxlY3RvckZyb21QYXRoKHBhcmVudFBhdGgpO1xuICAgICAgICBjb25zdCBwYXJlbnRFbGVtZW50ID1cbiAgICAgICAgICAgIHRoaXMuc2hhZG93Um9vdCEucXVlcnlTZWxlY3RvcihwYXJlbnRTZWxlY3RvcikgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgcGFyZW50RWxlbWVudHMuc2V0KHBhcmVudFBhdGgsIHBhcmVudEVsZW1lbnQpO1xuICAgICAgICBwYXJlbnRTZWxlY3RlZCA9IHBhcmVudEVsZW1lbnQuY2hlY2tlZDtcbiAgICAgIH1cbiAgICAgIHBhcmVudFNlbGVjdGVkID0gcGFyZW50RWxlbWVudHMuZ2V0KHBhcmVudFBhdGgpIS5jaGVja2VkO1xuICAgICAgcmV0dXJuIHBhcmVudEVsZW1lbnRzLmdldChwYXJlbnRQYXRoKSEucGFyZW50RWxlbWVudCEubmV4dEVsZW1lbnRTaWJsaW5nITtcbiAgICB9O1xuXG4gICAgZm9yIChjb25zdCBwYXRoIG9mIGZvbGRlclBhdGhzKSB7XG4gICAgICBpZiAodGhpcy5zaGFkb3dSb290Py5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yRnJvbVBhdGgocGF0aCkpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgY29uc3QgdWxDb250YWluZXIgPSBnZXRQYXJlbnRDb250YWluZXIocGF0aCk7XG4gICAgICBjb25zdCBuZXdFbGVtZW50ID0gdGhpcy5jcmVhdGVOZXdGb2xkZXJTZWxlY3Rpb24ocGF0aCwgcGFyZW50U2VsZWN0ZWQpO1xuICAgICAgdWxDb250YWluZXI/LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBsaXN0IG9mIHBhdGhzIHRoYXQgYXJlIGN1cnJlbnRseSBzZWxlY3RlZC5cbiAgICovXG4gIGdldCBzZWxlY3RlZFBhdGhzKCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuc2VsZWN0ZWRGb2xkZXJzLnZhbHVlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudCBsaXN0ZW5lciBmb3Igd2hlbiBhIGNoZWNrYm94IGZvciBhIHBhdGggaXMgc2VsZWN0ZWQuIFdlIHdhbnQgdG9cbiAgICogdXBkYXRlIGFsbCBkZXNjZW5kYW50cyB0byBiZSBkaXNhYmxlZCBhbmQgY2hlY2tlZCBhbmQgZW5zdXJlIHRoZSBzZWxlY3RlZFxuICAgKiBwYXRoIGlzIGJlaW5nIGtlcHQgdHJhY2sgb2YuXG4gICAqL1xuICBwcml2YXRlIG9uUGF0aFNlbGVjdGVkKGV2ZW50OiBFdmVudCwgcGF0aDogc3RyaW5nKSB7XG4gICAgY29uc3QgaW5wdXQgPSAoZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KTtcbiAgICBjb25zdCB7Y2hlY2tlZH0gPSBpbnB1dDtcbiAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgdGhpcy5zZWxlY3RlZEZvbGRlcnMuYWRkKHBhdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdGVkRm9sZGVycy5kZWxldGUocGF0aCk7XG4gICAgfVxuICAgIGNvbnN0IGNoaWxkcmVuID1cbiAgICAgICAgaW5wdXQucGFyZW50RWxlbWVudCEubmV4dEVsZW1lbnRTaWJsaW5nIS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuICAgIGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcbiAgICAgIGNoaWxkLnRvZ2dsZUF0dHJpYnV0ZSgnZGlzYWJsZWQnLCBjaGVja2VkKTtcbiAgICAgIGNoaWxkLnRvZ2dsZUF0dHJpYnV0ZSgnY2hlY2tlZCcsIGNoZWNrZWQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudCBsaXN0ZW5lciBmb3Igd2hlbiBhIHBhdGggaGFzIGJlZW4gY2xpY2tlZCAoZXhjbHVkaW5nIHRoZSBjaGVja2JveCkuXG4gICAqIERpc3BhdGNoZXMgYW4gZXZlbnQgdG8gZW5hYmxlIHRoZSA8bWFuYWdlLW1pcnJvcnN5bmM+IHRvIGZldGNoIHRoZSBjaGlsZHJlblxuICAgKiBmb2xkZXJzLlxuICAgKi9cbiAgcHJpdmF0ZSBvblBhdGhFeHBhbmRlZChldmVudDogRXZlbnQsIHBhdGg6IHN0cmluZykge1xuICAgIGNvbnN0IGxpID0gKGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQpIGFzIEhUTUxMSUVsZW1lbnQ7XG4gICAgbGkudG9nZ2xlQXR0cmlidXRlKCdleHBhbmRlZCcpO1xuICAgIGlmIChsaS5oYXNBdHRyaWJ1dGUoJ3JldHJpZXZlZCcpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXG4gICAgICAgIEZPTERFUl9FWFBBTkRFRCwge2J1YmJsZXM6IHRydWUsIGNvbXBvc2VkOiB0cnVlLCBkZXRhaWw6IHBhdGh9KSk7XG4gICAgbGkudG9nZ2xlQXR0cmlidXRlKCdyZXRyaWV2ZWQnLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGZvbGRlciBzZWxlY3Rpb24gYW5kIGFzc2lnbnMgdGhlIHJlcXVpc2l0ZSBldmVudCBsaXN0ZW5lcnMuXG4gICAqIFVzZXMgdGhlIHNoYWRvd1Jvb3QgPHRlbXBsYXRlPiBmcmFnbWVudCB0aGF0IGNvbnRhaW5zIGEgbWluaW1hbFxuICAgKiByZXByZXNlbnRhdGlvbiBhbmQgYnVpbGRzIG9uIHRvcCBvZiB0aGF0LlxuICAgKi9cbiAgcHJpdmF0ZSBjcmVhdGVOZXdGb2xkZXJTZWxlY3Rpb24oZm9sZGVyUGF0aDogc3RyaW5nLCBzZWxlY3RlZDogYm9vbGVhbik6XG4gICAgICBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgbmV3Rm9sZGVyVGVtcGxhdGUgPVxuICAgICAgICB0aGlzLmZvbGRlclNlbGVjdG9yVGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShnZXRGb2xkZXJOYW1lKGZvbGRlclBhdGgpKTtcblxuICAgIGNvbnN0IGxpID0gbmV3Rm9sZGVyVGVtcGxhdGUucXVlcnlTZWxlY3RvcignbGknKSBhcyBIVE1MTElFbGVtZW50O1xuICAgIGxpLmFwcGVuZENoaWxkKHRleHROb2RlKTtcbiAgICBsaS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAnY2xpY2snLCAoZXZlbnQpID0+IHRoaXMub25QYXRoRXhwYW5kZWQoZXZlbnQsIGZvbGRlclBhdGgpKTtcblxuICAgIGNvbnN0IGlucHV0ID0gbmV3Rm9sZGVyVGVtcGxhdGUucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImZvbGRlcnNcIl0nKSE7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdkYXRhLWZ1bGwtcGF0aCcsIGZvbGRlclBhdGgpO1xuICAgIGlucHV0LnRvZ2dsZUF0dHJpYnV0ZSgnZGlzYWJsZWQnLCBzZWxlY3RlZCk7XG4gICAgaW5wdXQudG9nZ2xlQXR0cmlidXRlKCdjaGVja2VkJywgc2VsZWN0ZWQpO1xuXG4gICAgLy8gVE9ETyhiLzIzNzA2NjMyNSk6IEFkZCBvbmUgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIDxmb2xkZXItc2VsZWN0b3I+IGFuZFxuICAgIC8vIHN3aXRjaCBvbiB0aGUgZWxlbWVudCBjbGlja2VkIHRvIGlkZW50aWZ5IHdoZXRoZXIgaXQgaXMgZXhwYW5kZWQgb3JcbiAgICAvLyBzZWxlY3RlZCB0byBhdm9pZCB0b28gbWFueSBldmVudCBsaXN0ZW5lcnMuXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMub25QYXRoU2VsZWN0ZWQoZXZlbnQsIGZvbGRlclBhdGgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ld0ZvbGRlclRlbXBsYXRlO1xuICB9XG59XG5cbi8qKlxuICogVGhlIGF2YWlsYWJsZSBldmVudHMgdGhhdCBvY2N1ciBmcm9tIHRoaXMgd2ViIGNvbXBvbmVudC5cbiAqL1xuZXhwb3J0IGNvbnN0IEZPTERFUl9FWFBBTkRFRCA9ICdmb2xkZXJfc2VsZWN0ZWQnO1xuXG4vKipcbiAqIEN1c3RvbSBldmVudCBhbGlhcywgdGhlIGV2ZW50LmRldGFpbCBrZXkgaGFzIHRoZSBmb2xkZXIgcGF0aCB0aGF0IGluZGljYXRlc1xuICogdGhlIGZvbGRlciB0byBleHBhbmQuXG4gKi9cbmV4cG9ydCB0eXBlIEZvbGRlckV4cGFuZGVkRXZlbnQgPSBDdXN0b21FdmVudDxzdHJpbmc+O1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudEV2ZW50TWFwIHtcbiAgICBbRk9MREVSX0VYUEFOREVEXTogRm9sZGVyRXhwYW5kZWRFdmVudDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2ZvbGRlci1zZWxlY3RvcicsIEZvbGRlclNlbGVjdG9yKTtcbiJdfQ==