import { kDefaultImageSymbol } from './constants.js';
export var DailyRefreshType;
(function (DailyRefreshType) {
    DailyRefreshType["GOOGLE_PHOTOS"] = "daily_refresh_google_photos";
    DailyRefreshType["BACKDROP"] = "daily_refresh_backdrop";
})(DailyRefreshType || (DailyRefreshType = {}));
export function emptyState() {
    return {
        backdrop: { collections: null, images: {} },
        loading: {
            collections: true,
            images: {},
            local: { images: false, data: { [kDefaultImageSymbol]: false } },
            refreshWallpaper: false,
            selected: {
                attribution: false,
                image: false,
            },
            setImage: 0,
            googlePhotos: {
                enabled: false,
                albums: false,
                albumsShared: false,
                photos: false,
                photosByAlbumId: {},
            },
        },
        local: { images: null, data: { [kDefaultImageSymbol]: { url: '' } } },
        attribution: null,
        currentSelected: null,
        pendingSelected: null,
        dailyRefresh: null,
        fullscreen: false,
        googlePhotos: {
            enabled: undefined,
            albums: undefined,
            albumsShared: undefined,
            photos: undefined,
            photosByAlbumId: {},
            resumeTokens: { albums: null, albumsShared: null, photos: null, photosByAlbumId: {} },
        },
        seaPen: {
            query: null,
            thumbnails: null,
            thumbnailsLoading: false,
        },
    };
}
