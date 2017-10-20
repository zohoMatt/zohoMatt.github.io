/**
 * Tags filter actions
 */
import { ProjectActions } from 'actions/types';

export function addProjectTagFilter (tagName) {
    return {
        type: ProjectActions.ADD_TAG_FILTER,
        payload: tagName,
    };
}

export function removeProjectTagFilter (tagName) {
    return {
        type: ProjectActions.REMOVE_TAG_FILTER,
        payload: tagName,
    };
}
