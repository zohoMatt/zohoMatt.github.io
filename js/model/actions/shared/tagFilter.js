/**
 * Tags filter actions
 */
export function addProjectTagFilter(tagName) {
  return {
    type: 'ADD_PROJECT_FILTER_TAGS',
    payload: tagName,
  };
}

export function removeProjectTagFilter(tagName) {
  return {
    type: 'REMOVE_PROJECT_FILTER_TAGS',
    payload: tagName,
  };
}
