/**
 * Created by hao.zuo on 2017/8/15.
 */
// todo
export default class InfoBanner extends React.Component {
  render() {
    const { location, date } = this.props;
    return (
      <div className="info-banner">
        <div className="image-location">
          <i className="fa fa-map-marker" aria-hidden="true" />
          <div className="image-location-name">{location}</div>
        </div>
        <div className="image-date">
          <i className="fa fa-calendar" aria-hidden="true" />
          <div className="image-location-name">{date}</div>
        </div>
        <div className="image-likes">
          <i className="fa fa-heart" aria-hidden="true" />
        </div>
        <div className="image-sharing">
          <i className="fa fa-share-square-o" aria-hidden="true" />
        </div>
      </div>
    );
  }
}
