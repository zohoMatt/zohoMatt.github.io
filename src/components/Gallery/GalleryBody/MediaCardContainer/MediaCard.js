/**
 * Created by hao.zuo on 2017/8/15.
 */

import InfoBanner from './InfoBanner';

// todo
export default class MediaCard extends React.Component {

    render () {
        // todo Make it only three pictures displayed in one row
        // todo Is it necessary to display in the above way??
        const style = {
            width: Math.random() * 160 + 360,

            // NOTE To do as following is neither effective nor elegant.
            // NOTE Try to send request to backend and let Node generate the thumbnails.
            // backgroundImage:
            //     `url(http://ours87otf.bkt.clouddn.com/photo/2017/newzealand/${photoList[Math.floor(Math.random() * photoList.length)]})`
        };
        return (
            <div className="media-card" style={style}>
                <InfoBanner/>
            </div>
        );
    }
}
