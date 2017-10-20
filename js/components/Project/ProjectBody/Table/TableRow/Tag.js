/**
 * Created by Zoho on 16/9/14.
 */
import { connect } from 'react-redux';

import {
    addProjectTagFilter,
    removeProjectTagFilter,
} from '$actions/shared/tagFilter';

/**
 * @props:
 * name             {string} Tag text.
 */
@connect()
export default class Tag extends React.Component {

    render () {
        const {name, bgColor} = this.props;
        return (
            <div className="tag" style={{backgroundColor: bgColor}}
                 onClick={this.clickHandler.bind(this)}>{name}</div>
        );
    }

    /******************** Click handler *******************/
    clickHandler (event) {
        const {name, clickToRemove, dispatch} = this.props;
        if (clickToRemove == 'remove' || clickToRemove == 'true' ||
            clickToRemove == 'yes') {
            dispatch(removeProjectTagFilter(name));
        } else {
            dispatch(addProjectTagFilter(name));
        }
    }
}
