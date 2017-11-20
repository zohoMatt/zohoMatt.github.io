/**
 * Created by Zoho on 16/9/14.
 */
import { ProjectActions, BlogActions, GalleryActions } from 'actions/types';

export function searchProjectAction(keyword) {
    return {
        type: ProjectActions.SEARCH,
        payload: keyword,
    };
}

export function searchBlogAction(keyword) {
    return {
        type: BlogActions.SEARCH,
        payload: keyword,
    };
}

export function searchGalleryAction(keyword) {
    return {
        type: GalleryActions.SEARCH,
        payload: keyword,
    };
}
