/**
 * Created by Zoho on 16/9/14.
 */
/**
 * @props:
 * url          {string} Play site URL.
 */
export default class PlayIcon extends React.Component {
  render() {
    const { url } = this.props;
    let icon,
      text,
      style;
    if (url) {
      icon = <i className="fa fa-play-circle" aria-hidden="true" />;
      text = 'play';
      style = {};
    } else {
      icon = <i className="fa fa-exclamation" aria-hidden="true" />;
      text = 'no play';
      style = {
        cursor: 'auto',
        borderColor: 'grey',
        color: 'grey',
      };
    }
    return (
      <div
        className="play-icon"
        style={style}
        onClick={this._openNewTab.bind(this, url)}
      >
        {icon} {text}
      </div>
    );
  }

  /** ************************************** */
  _openNewTab(url) {
    if (url === null) return;
    window.open(url);
  }
}
