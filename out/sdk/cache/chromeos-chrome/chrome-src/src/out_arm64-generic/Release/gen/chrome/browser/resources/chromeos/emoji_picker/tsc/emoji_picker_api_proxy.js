import { PageHandlerFactory, PageHandlerRemote, Status } from './emoji_picker.mojom-webui.js';
import { NewWindowProxy } from './new_window_proxy.mojom-webui.js';
const HELP_CENTRE_URL = 'https://support.google.com/chrome?p=palette';
export class EmojiPickerApiProxyImpl {
    static { this.instance = null; }
    constructor() {
        this.handler = new PageHandlerRemote();
        this.newWindowProxy = NewWindowProxy.getRemote();
        const factory = PageHandlerFactory.getRemote();
        factory.createPageHandler(this.handler.$.bindNewPipeAndPassReceiver());
    }
    /** @override */
    showUi() {
        this.handler.showUI();
    }
    /** @override */
    insertEmoji(emoji, isVariant, searchLength) {
        this.handler.insertEmoji(emoji, isVariant, searchLength);
    }
    /** @override */
    insertGif(gif) {
        this.handler.insertGif(gif);
    }
    /** @override */
    isIncognitoTextField() {
        return this.handler.isIncognitoTextField();
    }
    /** @override */
    getFeatureList() {
        return this.handler.getFeatureList();
    }
    /** @override */
    async getCategories() {
        const { gifCategories } = await this.handler.getCategories();
        return {
            gifCategories: gifCategories.map((category) => ({ name: category })),
        };
    }
    /** @override */
    getFeaturedGifs(pos) {
        if (!navigator.onLine) {
            return Promise.resolve({
                status: Status.kNetError,
                featuredGifs: {
                    next: '',
                    results: [],
                },
            });
        }
        return this.handler.getFeaturedGifs(pos || null);
    }
    /** @override */
    searchGifs(query, pos) {
        if (!navigator.onLine) {
            return Promise.resolve({
                status: Status.kNetError,
                searchGifs: {
                    next: '',
                    results: [],
                },
            });
        }
        // Avoid sending blank queries to the backend.
        if (query.trim().length === 0) {
            return Promise.resolve({
                status: Status.kHttpOk,
                searchGifs: {
                    next: '',
                    results: [],
                },
            });
        }
        return this.handler.searchGifs(query, pos || null);
    }
    /** @override */
    getGifsByIds(ids) {
        return this.handler.getGifsByIds(ids);
    }
    /** @override */
    openHelpCentreArticle() {
        this.newWindowProxy.openUrl({
            url: HELP_CENTRE_URL,
        });
    }
    onUiFullyLoaded() {
        this.handler.onUiFullyLoaded();
    }
    convertTenorGifsToEmoji(gifs) {
        return gifs.results.map(({ id, url, previewSize, contentDescription, }) => ({
            base: {
                visualContent: {
                    id,
                    url,
                    previewSize,
                },
                name: contentDescription,
            },
            alternates: [],
        }));
    }
    static getInstance() {
        if (EmojiPickerApiProxyImpl.instance === null) {
            EmojiPickerApiProxyImpl.instance = new EmojiPickerApiProxyImpl();
        }
        return EmojiPickerApiProxyImpl.instance;
    }
    static setInstance(instance) {
        EmojiPickerApiProxyImpl.instance = instance;
    }
}
