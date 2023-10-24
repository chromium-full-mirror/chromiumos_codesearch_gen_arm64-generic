export class BookmarkManagerApiProxyImpl {
    constructor() {
        this.onDragEnter = chrome.bookmarkManagerPrivate.onDragEnter;
    }
    drop(parentId, index) {
        return chrome.bookmarkManagerPrivate.drop(parentId, index);
    }
    startDrag(idList, dragNodeIndex, isFromTouch, x, y) {
        return chrome.bookmarkManagerPrivate.startDrag(idList, dragNodeIndex, isFromTouch, x, y);
    }
    removeTrees(idList) {
        return chrome.bookmarkManagerPrivate.removeTrees(idList);
    }
    canPaste(parentId) {
        return chrome.bookmarkManagerPrivate.canPaste(parentId);
    }
    openInNewWindow(idList, incognito) {
        return chrome.bookmarkManagerPrivate.openInNewWindow(idList, incognito);
    }
    openInNewTab(id, active) {
        return chrome.bookmarkManagerPrivate.openInNewTab(id, active);
    }
    cut(idList) {
        return chrome.bookmarkManagerPrivate.cut(idList);
    }
    paste(parentId, selectedIdList) {
        return chrome.bookmarkManagerPrivate.paste(parentId, selectedIdList);
    }
    copy(idList) {
        return chrome.bookmarkManagerPrivate.copy(idList);
    }
    static getInstance() {
        return instance || (instance = new BookmarkManagerApiProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
