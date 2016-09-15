/**
 * Created by Zoho on 16/9/14.
 */
export function searchProjectAction(keyword) {
    return {
        type: 'SEARCH_PROJECT',
        payload: keyword
    };
}

export function searchBlogAction(keyword) {
    return {
        type: 'SEARCH_BLOG',
        payload: keyword
    };
}

export function searchGalleryAction(keyword) {
    return {
        type: 'SEARCH_GALLERY',
        payload: keyword
    };
}
