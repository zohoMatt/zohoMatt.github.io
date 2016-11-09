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

/**
 * Tags filter actions
 */
export function addProjectTagFilter(id, tagName) {
    return {
        type: 'ADD_PROJECT_FILTER_TAGS',
        payload: {
            tagId: id,
            content, tagName
        }
    }
}

export function removeProjectTagFilter(id, tagName) {
    return {
        type: 'REMOVE_PROJECT_FILTER_TAGS',
        payload: {
            tagId: id,
            content: tagName
        }
    }
}
