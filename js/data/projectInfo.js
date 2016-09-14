/**
 * Created by Zoho on 16/9/6.
 */
const url = require('url');

export const ProjectInfoData = {
    author: 'zoho',
    mtime: '2016-09-06-20-10',
    entry: [
        {
            id: 'p01',
            title: 'Hum',
            tags: ['library', 'framework', 'canvas', 'web app'],
            description: 'A simple mvc framework.',
            link: 'https://github.com/zohoFrank/hum',
            play: null
        },
        {
            id: 'p02',
            title: 'frogger-game',
            tags: ['web app', 'game'],
            description: 'A simple game.',
            link: 'https://github.com/zohoFrank/frogger-game',
            play: 'https://zohoFrank.github.io/frogger-game'
        },
        {
            id: 'p03',
            title: 'canvas-tree',
            tags: ['canvas'],
            description: 'Draw a tree!',
            link: 'https://github.com/zohoFrank/canvas-tree',
            play: 'https://zohoFrank.github.io/canvas-tree'
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
        return entry.playable != null;
    });
}

/**
 *
 * @param linkUrl {string} Full link path.
 * @returns {string} The host name of the path.
 */
export function whichRepoHost(linkUrl) {
    return url.parse(linkUrl).host.slice(0, -4);
}
