/**
 * Created by Zoho on 16/9/6.
 */

/**======================================================**/
/**                      InfoCard                        **/
/**======================================================**/
/********** Back detail button **********/
export const BTN_COLOR = '#D95360';
export const BTN_WIDTH = '100px';
export const BTN_HEIGHT = '40px';

/**======================================================**/
/**                    Tag -> Color                      **/
/**======================================================**/
export const TAG_TO_COLOR = {
  application: 'Fuchsia',
  canvas: 'purple',
  electron: 'darkgreen',
  express: 'violet',
  framework: 'lightgreen',
  game: 'orange',
  mongodb: 'brown',
  node: 'yellow',
  react: 'goldenrod',
  redux: 'gold',
  webpack: 'lightblue',
  'web-app': 'wheat',
};

export function tagToColor(rawText) {
  return TAG_TO_COLOR[rawText.replace(' ', '_')];
}
