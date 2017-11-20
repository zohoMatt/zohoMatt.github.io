/**
 * Created by Zoho on 16/9/9.
 */
export default class TableHeader extends React.Component {
  render() {
    return (
      <div className="table-header table-row">
        <div className="table-box table-header name-column">
          <i className="fa fa-code" aria-hidden="true" />
                    Name
        </div>
        <div className="table-box table-header tags-column">
          <i className="fa fa-tags" aria-hidden="true" />
                    Tags
        </div>
        <div className="table-box table-header description-column">
          <i className="fa fa-info" aria-hidden="true" />
                    Description
        </div>
        <div className="table-box table-header link-column">
          <i className="fa fa-code-fork" aria-hidden="true" />
                    Repo
        </div>
        <div className="table-box table-header play-column">
          <i className="fa fa-play" aria-hidden="true" />
                    Play
        </div>
      </div>
    );
  }
}
