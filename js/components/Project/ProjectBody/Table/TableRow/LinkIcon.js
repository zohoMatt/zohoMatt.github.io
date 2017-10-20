/**
 * Created by Zoho on 16/9/14.
 */
/**
 * @props:
 * url          {string} Link URL.
 */
export default class LinkIcon extends React.Component {

    render () {
        const host = 'github';
        const url = 'http://github.io/zohomatt';
        const icon = <i class={`fa fa-${host}`} aria-hidden="true"></i>;
        return (
            <div className="repo-link" href={url}
                 onClick={this._openNewTab.bind(this, url)}>
                {icon} {host}
            </div>
        );
    }

    /*****************************************/
    _openNewTab (url) {
        window.open(url);
    }
}
