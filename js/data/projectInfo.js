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
            tags: ['framework'],
            description: 'A simple mvc framework.',
            link: 'https://github.com/zohoFrank/hum',
            play: null,
            rate: 3.5
        },
        {
            id: 'p02',
            title: 'frogger-game',
            tags: ['game', 'canvas'],
            description: 'A simple game.',
            link: 'https://github.com/zohoFrank/frogger-game',
            play: 'https://zohoFrank.github.io/frogger-game',
            rate: 5.5
        },
        {
            id: 'p03',
            title: 'canvas-tree',
            tags: ['canvas'],
            description: 'Draw a tree!',
            link: 'https://github.com/zohoFrank/canvas-tree',
            play: 'https://zohoFrank.github.io/canvas-tree',
            rate: 6.5
        },
        {
            id: 'p04',
            title: 'homepage',
            tags: ['page'],
            description: 'Just the site you are visiting!',
            link: 'https://github.com/zohoFrank/zohoFrank.github.io',
            play: 'https://zohofrank.github.io/',
            rate: 7.0
        },
        {
            id: 'p05',
            title: 'everlink-md',
            tags: ['node', 'app'],
            description: 'A desktop markdown editor linked with evernote.',
            link: 'https://github.com/zohoFrank/everlink-md',
            play: null,
            rate: 8.0
        }
    ]
};

export function getProjectData() {
    return ProjectInfoData.entry.sort((a, b) => {
        return b.rate - a.rate;
    });
}

export function getProjectNames() {
    return ProjectInfoData.entry.map((entry) => {
        return entry.title;
    });
}

/**
 * @param id            {string}
 * @returns             {Array.<Object>}
 */
export function getProjectById(id) {
    return ProjectInfoData.entry.filter((entry) => {
        return entry.id == id;
    });
}

/**
 *
 * @param titlePiece    {string}
 * @returns             {Array.<Object>}
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
 * @param isPlayable    {boolean}
 * @returns             {Array.<Object>}
 */
export function getPlayableProjects(isPlayable) {
    return ProjectInfoData.entry.filter((entry) => {
        return entry.playable != null;
    });
}

/**
 *
 * @param linkUrl       {string} Full link path.
 * @returns             {string} The host name of the path.
 */
export function whichRepoHost(linkUrl) {
    return url.parse(linkUrl).host.slice(0, -4);
}
