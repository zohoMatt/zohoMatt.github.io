/**
 * Created by hao.zuo on 2017/8/15.
 */
// todo
export default class InfoBanner extends React.Component {

    render () {
        const {location, date} = this.props;
        return (
            <div className="info-banner">
                <div class="image-location">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <div class="image-location-name">{location}</div>
                </div>
                <div class="image-date">
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                    <div class="image-location-name">{date}</div>
                </div>
                <div class="image-likes">
                    <i class="fa fa-heart" aria-hidden="true"></i>
                </div>
                <div class="image-sharing">
                    <i class="fa fa-share-square-o" aria-hidden="true"></i>
                </div>
            </div>
        );
    }
}
