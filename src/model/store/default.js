/******************** Common *******************/
export const sharedStore = {
    searchKeyword: {
        project: '',
        blog: '',
        gallery: '',
    },
    tagFilter: {
        project: [],
        blog: [],
        gallery: [],
    },
};

/******************** Project *******************/
export const projectStore = {};

/******************** Contact *******************/
export const contactStore = {
    flipCard: {
        faceUp: true,
        backComponentType: 'div',
    },
};

/******************** Data Structure of Store *******************/
// Using spread operator to reduce level depth
export const DEFAULT_STORE = {
    ...sharedStore,
    ...projectStore,
    ...contactStore
};
