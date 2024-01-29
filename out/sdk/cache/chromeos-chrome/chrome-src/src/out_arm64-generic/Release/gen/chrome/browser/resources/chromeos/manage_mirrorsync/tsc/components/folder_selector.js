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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9sZGVyX3NlbGVjdG9yLmpzIiwic291cmNlUm9vdCI6Ii92YXIvY2FjaGUvY2hyb21lb3MtY2hyb21lL2Nocm9tZS1zcmMvc3JjL291dF9hcm02NC1nZW5lcmljL1JlbGVhc2UvZ2VuL2Nocm9tZS9icm93c2VyL3Jlc291cmNlcy9jaHJvbWVvcy9tYW5hZ2VfbWlycm9yc3luYy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9sZGVyX3NlbGVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNDQUFzQztBQUN0Qyx5RUFBeUU7QUFDekUsNkJBQTZCO0FBRTdCLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUV0RDs7O0dBR0c7QUFDSCxTQUFTLGFBQWEsQ0FBQyxVQUFrQjtJQUN2QyxNQUFNLFdBQVcsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLE1BQU0sVUFBVSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFFLElBQUksVUFBVSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUUsQ0FBQztRQUM1QixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFDRCxPQUFPLFVBQVUsQ0FBQztBQUNwQixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLGFBQWEsQ0FBQyxVQUFrQjtJQUN2QyxNQUFNLFdBQVcsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLE9BQU8sV0FBVyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFFLENBQUM7QUFDOUMsQ0FBQztBQUVEOzs7R0FHRztBQUNILFNBQVMsZ0JBQWdCLENBQUMsVUFBa0I7SUFDMUMsT0FBTyx5QkFBeUIsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFD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QUMsRUFBRTtZQUN0QyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLGlCQUFpQixDQUFDO0lBQzNCLENBQUM7Q0FDRjtBQUVEOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHLGlCQUFpQixDQUFDO0FBb0JqRCxjQUFjLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLGNBQWMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IDIwMjIgVGhlIENocm9taXVtIEF1dGhvcnNcbi8vIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgQlNELXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbi8vIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUuXG5cbmltcG9ydCB7Z2V0VGVtcGxhdGV9IGZyb20gJy4vZm9sZGVyX3NlbGVjdG9yLmh0bWwuanMnO1xuXG4vKipcbiAqIFJldHJpZXZlcyB0aGUgcGFyZW50IGZvbGRlciBwYXRoIG9mIHRoZSBzdXBwbGllZCBgZm9sZGVyUGF0aGAuIFVzZWZ1bCB0b1xuICogaWRlbnRpZnkgdGhlIGxpc3QgY29udGFpbmVyIHRvIHBsYWNlIHRoZSBmb2xkZXIgZWxlbWVudC5cbiAqL1xuZnVuY3Rpb24gZ2V0UGFyZW50UGF0aChmb2xkZXJQYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBmb2xkZXJQYXJ0cyA9IGZvbGRlclBhdGguc3BsaXQoJy8nKTtcbiAgY29uc3QgcGFyZW50UGF0aCA9IGZvbGRlclBhcnRzLnNsaWNlKDAsIGZvbGRlclBhcnRzLmxlbmd0aCAtIDEpLmpvaW4oJy8nKTtcbiAgaWYgKHBhcmVudFBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuICcvJztcbiAgfVxuICByZXR1cm4gcGFyZW50UGF0aDtcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgdGhlIGZvbGRlciBuYW1lIGFzIHRoZSBmaW5hbCBlbGVtZW50IG9mIGFuIGFic29sdXRlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGdldEZvbGRlck5hbWUoZm9sZGVyUGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgZm9sZGVyUGFydHMgPSBmb2xkZXJQYXRoLnNwbGl0KCcvJyk7XG4gIHJldHVybiBmb2xkZXJQYXJ0c1tmb2xkZXJQYXJ0cy5sZW5ndGggLSAxXSE7XG59XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIGNvbnZlcnQgYSBzdXBwbGllZCBmb2xkZXIgcGF0aCB0byBpdCdzIHF1ZXJ5U2VsZWN0b3JcbiAqIHZhcmlhbnQgdXNpbmcgdGhlIGRhdGEtZnVsbC1wYXRoIGtleSBhbmQgZXNjYXBpbmcgZG91YmxlIHF1b3Rlcy5cbiAqL1xuZnVuY3Rpb24gc2VsZWN0b3JGcm9tUGF0aChmb2xkZXJQYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gYGlucHV0W2RhdGEtZnVsbC1wYXRoPVwiJHtmb2xkZXJQYXRoLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKX1cIl1gO1xufVxuXG4vKipcbiAqIEZvbGRlclNlbGVjdG9yIHByZXNlbnRzIGEgZm9sZGVyIGhpZXJhcmNoeSBvZiBjaGVja2JveGVzIHJlcHJlc2VudGluZyB0aGVcbiAqIHVuZGVybHlpbmcgZm9sZGVyIHN0cnVjdHVyZS4gVGhlIGl0ZW1zIGFyZSBsYXppbHkgbG9hZGVkIGFzIHJlcXVpcmVkLlxuICovXG5leHBvcnQgY2xhc3MgRm9sZGVyU2VsZWN0b3IgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIC8qIFRoZSA8dGVtcGxhdGU+IGZyYWdtZW50IHVzZWQgdG8gY3JlYXRlIG5ldyBlbGVtZW50cy4gKi9cbiAgcHJpdmF0ZSBmb2xkZXJTZWxlY3RvclRlbXBsYXRlOiBIVE1MVGVtcGxhdGVFbGVtZW50O1xuXG4gIC8qIEEgU2V0IG9mIGN1cnJlbnRseSBzZWxlY3RlZCBmb2xkZXJzLiAqL1xuICBwcml2YXRlIHNlbGVjdGVkRm9sZGVyczogU2V0PHN0cmluZz4gPSBuZXcgU2V0KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTogJ29wZW4nfSlcbiAgICAgICAgLmFwcGVuZENoaWxkKGdldFRlbXBsYXRlKCkuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuXG4gICAgdGhpcy5mb2xkZXJTZWxlY3RvclRlbXBsYXRlID1cbiAgICAgICAgdGhpcy5zaGFkb3dSb290IS5nZXRFbGVtZW50QnlJZCgnZm9sZGVyLXNlbGVjdG9yLXRlbXBsYXRlJykgYXNcbiAgICAgICAgSFRNTFRlbXBsYXRlRWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbmNlIHRoZSA8Zm9sZGVyLXNlbGVjdG9yPiBjb21wb25lbnQgaGFzIGJlZW4gY29ubmVjdGVkIHRvIHRoZSBET00sIHRoaXNcbiAgICogbGlmZWN5Y2xlIGNhbGxiYWNrIGlzIGludm9rZWQuXG4gICAqL1xuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAvLyBSZWdpc3RlciBldmVudCBsaXN0ZW5lcnMgb24gdGhlIHJvb3QgbGlzdCBlbGVtZW50LlxuICAgIGNvbnN0IGxpID0gdGhpcy5zaGFkb3dSb290Py5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0LWZvbGRlcnMgPiB1bCA+IGxpJykgYXNcbiAgICAgICAgSFRNTExJRWxlbWVudDtcbiAgICBsaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4gdGhpcy5vblBhdGhFeHBhbmRlZChldmVudCwgJy8nKSk7XG5cbiAgICBjb25zdCBzZWxlY3RvciA9IHNlbGVjdG9yRnJvbVBhdGgoJy8nKTtcbiAgICBjb25zdCBpbnB1dCA9IHRoaXMuc2hhZG93Um9vdD8ucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgIC8vIFRoZSA8bGk+IGVuY2xvc2luZyB0aGUgPGlucHV0PiBhbHNvIGhhcyBhbiBldmVudCBsaXN0ZW5lciBzbyBkb24ndFxuICAgICAgLy8gcHJvcGFnYXRlIG9uY2UgdGhlIGNsaWNrIGhhcyBiZWVuIHJlY2VpdmVkLlxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLm9uUGF0aFNlbGVjdGVkKGV2ZW50LCAnLycpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhbiBhcnJheSBvZiBwYXRocyB0byB0aGUgRE9NLiBUaGVzZSBwYXRocyBtdXN0IGFsbCBzaGFyZSB0aGUgc2FtZVxuICAgKiBwYXJlbnQuXG4gICAqL1xuICBhc3luYyBhZGRDaGlsZEZvbGRlcnMoZm9sZGVyUGF0aHM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgcGFyZW50RWxlbWVudHM6IE1hcDxzdHJpbmcsIEhUTUxJbnB1dEVsZW1lbnQ+ID0gbmV3IE1hcCgpO1xuICAgIGxldCBwYXJlbnRTZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIEdldCB0aGUgcGFyZW50IGNvbnRhaW5lciBhbmQgaW4gdGhlIHByb2Nlc3MgY2FjaGUgdGhlIHBhcmVudCBlbGVtZW50LiBBbGxcbiAgICAgKiBmb2xkZXJzIGNvbWluZyBpbiB2aWEgYWRkQ2hpbGRGb2xkZXJzIHNoYXJlIHRoZSBzYW1lIHBhcmVudC5cbiAgICAgKiBAcGFyYW0gZm9sZGVyUGF0aFxuICAgICAqL1xuICAgIGNvbnN0IGdldFBhcmVudENvbnRhaW5lciA9IChmb2xkZXJQYXRoOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IHBhcmVudFBhdGggPSBnZXRQYXJlbnRQYXRoKGZvbGRlclBhdGgpO1xuICAgICAgaWYgKCFwYXJlbnRFbGVtZW50cy5oYXMocGFyZW50UGF0aCkpIHtcbiAgICAgICAgY29uc3QgcGFyZW50U2VsZWN0b3IgPSBzZWxlY3RvckZyb21QYXRoKHBhcmVudFBhdGgpO1xuICAgICAgICBjb25zdCBwYXJlbnRFbGVtZW50ID1cbiAgICAgICAgICAgIHRoaXMuc2hhZG93Um9vdCEucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihwYXJlbnRTZWxlY3RvcikhO1xuICAgICAgICBwYXJlbnRFbGVtZW50cy5zZXQocGFyZW50UGF0aCwgcGFyZW50RWxlbWVudCk7XG4gICAgICAgIHBhcmVudFNlbGVjdGVkID0gcGFyZW50RWxlbWVudC5jaGVja2VkO1xuICAgICAgfVxuICAgICAgcGFyZW50U2VsZWN0ZWQgPSBwYXJlbnRFbGVtZW50cy5nZXQocGFyZW50UGF0aCkhLmNoZWNrZWQ7XG4gICAgICByZXR1cm4gcGFyZW50RWxlbWVudHMuZ2V0KHBhcmVudFBhdGgpIS5wYXJlbnRFbGVtZW50IS5uZXh0RWxlbWVudFNpYmxpbmchO1xuICAgIH07XG5cbiAgICBmb3IgKGNvbnN0IHBhdGggb2YgZm9sZGVyUGF0aHMpIHtcbiAgICAgIGlmICh0aGlzLnNoYWRvd1Jvb3Q/LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JGcm9tUGF0aChwYXRoKSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBjb25zdCB1bENvbnRhaW5lciA9IGdldFBhcmVudENvbnRhaW5lcihwYXRoKTtcbiAgICAgIGNvbnN0IG5ld0VsZW1lbnQgPSB0aGlzLmNyZWF0ZU5ld0ZvbGRlclNlbGVjdGlvbihwYXRoLCBwYXJlbnRTZWxlY3RlZCk7XG4gICAgICB1bENvbnRhaW5lcj8uYXBwZW5kQ2hpbGQobmV3RWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxpc3Qgb2YgcGF0aHMgdGhhdCBhcmUgY3VycmVudGx5IHNlbGVjdGVkLlxuICAgKi9cbiAgZ2V0IHNlbGVjdGVkUGF0aHMoKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5zZWxlY3RlZEZvbGRlcnMudmFsdWVzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50IGxpc3RlbmVyIGZvciB3aGVuIGEgY2hlY2tib3ggZm9yIGEgcGF0aCBpcyBzZWxlY3RlZC4gV2Ugd2FudCB0b1xuICAgKiB1cGRhdGUgYWxsIGRlc2NlbmRhbnRzIHRvIGJlIGRpc2FibGVkIGFuZCBjaGVja2VkIGFuZCBlbnN1cmUgdGhlIHNlbGVjdGVkXG4gICAqIHBhdGggaXMgYmVpbmcga2VwdCB0cmFjayBvZi5cbiAgICovXG4gIHByaXZhdGUgb25QYXRoU2VsZWN0ZWQoZXZlbnQ6IEV2ZW50LCBwYXRoOiBzdHJpbmcpIHtcbiAgICBjb25zdCBpbnB1dCA9IChldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpO1xuICAgIGNvbnN0IHtjaGVja2VkfSA9IGlucHV0O1xuICAgIGlmIChjaGVja2VkKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkRm9sZGVycy5hZGQocGF0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRGb2xkZXJzLmRlbGV0ZShwYXRoKTtcbiAgICB9XG4gICAgY29uc3QgY2hpbGRyZW4gPVxuICAgICAgICBpbnB1dC5wYXJlbnRFbGVtZW50IS5uZXh0RWxlbWVudFNpYmxpbmchLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgY2hpbGQudG9nZ2xlQXR0cmlidXRlKCdkaXNhYmxlZCcsIGNoZWNrZWQpO1xuICAgICAgY2hpbGQudG9nZ2xlQXR0cmlidXRlKCdjaGVja2VkJywgY2hlY2tlZCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50IGxpc3RlbmVyIGZvciB3aGVuIGEgcGF0aCBoYXMgYmVlbiBjbGlja2VkIChleGNsdWRpbmcgdGhlIGNoZWNrYm94KS5cbiAgICogRGlzcGF0Y2hlcyBhbiBldmVudCB0byBlbmFibGUgdGhlIDxtYW5hZ2UtbWlycm9yc3luYz4gdG8gZmV0Y2ggdGhlIGNoaWxkcmVuXG4gICAqIGZvbGRlcnMuXG4gICAqL1xuICBwcml2YXRlIG9uUGF0aEV4cGFuZGVkKGV2ZW50OiBFdmVudCwgcGF0aDogc3RyaW5nKSB7XG4gICAgY29uc3QgbGkgPSAoZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MRWxlbWVudCkgYXMgSFRNTExJRWxlbWVudDtcbiAgICBsaS50b2dnbGVBdHRyaWJ1dGUoJ2V4cGFuZGVkJyk7XG4gICAgaWYgKGxpLmhhc0F0dHJpYnV0ZSgncmV0cmlldmVkJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcbiAgICAgICAgRk9MREVSX0VYUEFOREVELCB7YnViYmxlczogdHJ1ZSwgY29tcG9zZWQ6IHRydWUsIGRldGFpbDogcGF0aH0pKTtcbiAgICBsaS50b2dnbGVBdHRyaWJ1dGUoJ3JldHJpZXZlZCcsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgZm9sZGVyIHNlbGVjdGlvbiBhbmQgYXNzaWducyB0aGUgcmVxdWlzaXRlIGV2ZW50IGxpc3RlbmVycy5cbiAgICogVXNlcyB0aGUgc2hhZG93Um9vdCA8dGVtcGxhdGU+IGZyYWdtZW50IHRoYXQgY29udGFpbnMgYSBtaW5pbWFsXG4gICAqIHJlcHJlc2VudGF0aW9uIGFuZCBidWlsZHMgb24gdG9wIG9mIHRoYXQuXG4gICAqL1xuICBwcml2YXRlIGNyZWF0ZU5ld0ZvbGRlclNlbGVjdGlvbihmb2xkZXJQYXRoOiBzdHJpbmcsIHNlbGVjdGVkOiBib29sZWFuKTpcbiAgICAgIEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBuZXdGb2xkZXJUZW1wbGF0ZSA9XG4gICAgICAgIHRoaXMuZm9sZGVyU2VsZWN0b3JUZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGdldEZvbGRlck5hbWUoZm9sZGVyUGF0aCkpO1xuXG4gICAgY29uc3QgbGkgPSBuZXdGb2xkZXJUZW1wbGF0ZS5xdWVyeVNlbGVjdG9yKCdsaScpITtcbiAgICBsaS5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSk7XG4gICAgbGkuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ2NsaWNrJywgKGV2ZW50KSA9PiB0aGlzLm9uUGF0aEV4cGFuZGVkKGV2ZW50LCBmb2xkZXJQYXRoKSk7XG5cbiAgICBjb25zdCBpbnB1dCA9IG5ld0ZvbGRlclRlbXBsYXRlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJmb2xkZXJzXCJdJykhO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnZGF0YS1mdWxsLXBhdGgnLCBmb2xkZXJQYXRoKTtcbiAgICBpbnB1dC50b2dnbGVBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgc2VsZWN0ZWQpO1xuICAgIGlucHV0LnRvZ2dsZUF0dHJpYnV0ZSgnY2hlY2tlZCcsIHNlbGVjdGVkKTtcblxuICAgIC8vIFRPRE8oYi8yMzcwNjYzMjUpOiBBZGQgb25lIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSA8Zm9sZGVyLXNlbGVjdG9yPiBhbmRcbiAgICAvLyBzd2l0Y2ggb24gdGhlIGVsZW1lbnQgY2xpY2tlZCB0byBpZGVudGlmeSB3aGV0aGVyIGl0IGlzIGV4cGFuZGVkIG9yXG4gICAgLy8gc2VsZWN0ZWQgdG8gYXZvaWQgdG9vIG1hbnkgZXZlbnQgbGlzdGVuZXJzLlxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLm9uUGF0aFNlbGVjdGVkKGV2ZW50LCBmb2xkZXJQYXRoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXdGb2xkZXJUZW1wbGF0ZTtcbiAgfVxufVxuXG4vKipcbiAqIFRoZSBhdmFpbGFibGUgZXZlbnRzIHRoYXQgb2NjdXIgZnJvbSB0aGlzIHdlYiBjb21wb25lbnQuXG4gKi9cbmV4cG9ydCBjb25zdCBGT0xERVJfRVhQQU5ERUQgPSAnZm9sZGVyX3NlbGVjdGVkJztcblxuLyoqXG4gKiBDdXN0b20gZXZlbnQgYWxpYXMsIHRoZSBldmVudC5kZXRhaWwga2V5IGhhcyB0aGUgZm9sZGVyIHBhdGggdGhhdCBpbmRpY2F0ZXNcbiAqIHRoZSBmb2xkZXIgdG8gZXhwYW5kLlxuICovXG5leHBvcnQgdHlwZSBGb2xkZXJFeHBhbmRlZEV2ZW50ID0gQ3VzdG9tRXZlbnQ8c3RyaW5nPjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRFdmVudE1hcCB7XG4gICAgW0ZPTERFUl9FWFBBTkRFRF06IEZvbGRlckV4cGFuZGVkRXZlbnQ7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICAnZm9sZGVyLXNlbGVjdG9yJzogRm9sZGVyU2VsZWN0b3I7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdmb2xkZXItc2VsZWN0b3InLCBGb2xkZXJTZWxlY3Rvcik7XG4iXX0=