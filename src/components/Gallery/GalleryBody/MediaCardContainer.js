/**
 * Created by hao.zuo on 2017/8/15.
 */
import MediaCard from './MediaCardContainer/MediaCard';

// todo

export default class MediaCardContainer extends React.Component {

    render () {
        const mediaCard = <MediaCard/>;
        return (
            <div className="media-card-container">
                {Array(19).fill(mediaCard)}
            </div>
        );
    }
}
