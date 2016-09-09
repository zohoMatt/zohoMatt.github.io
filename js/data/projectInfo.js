/**
 * Created by Zoho on 16/9/6.
 */

export const ProjectInfoData = {
    author: 'zoho',
    mtime: '2016-09-06-20-10',
    entry: [
        {
            id: 'p01',
            title: 'Hum',
            tags: ['library', 'framework', 'canvas', 'web app'],
            description: 'A library that everyone likes',
            link: 'https://github.com/zohoFrank/hum',
            playable: true
        },
        {
            id: 'p02',
            title: 'frogger-game',
            tags: ['web app'],
            description: 'A simple game that everyone likes',
            link: 'https://github.com/zohoFrank/frogger-game',
            playable: true
        }
    ]
};

export function getProjectData() {
    return ProjectInfoData.entry;
}

export function getProjectNames() {
    return ProjectInfoData.entry.map((entry) => {
        return entry.title;
    });
}

/**
 * @param id {string}
 * @returns {Array.<Object>}
 */
export function getProjectById(id) {
    return ProjectInfoData.entry.filter((entry) => {
        return entry.id == id;
    });
}

/**
 *
 * @param titlePiece {string}
 * @returns {Array.<Object>}
 */
export function getProjectByTitle(titlePiece) {
    var pattern = new RegExp(titlePiece, 'g');
    return ProjectInfoData.entry.filter((entry) => {
        return pattern.test(entry.title);
    });
}

export function getProjectByTags(tagArray) {
    // todo
}

/**
 * @param isPlayable {boolean}
 * @returns {Array.<Object>}
 */
export function getPlayableProjects(isPlayable) {
    return ProjectInfoData.entry.filter((entry) => {
        return entry.playable == isPlayable;
    });
}
