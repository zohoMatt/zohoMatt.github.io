/**
 * Created by Zoho on 16/9/5.
 */
// betterdo Refactor

import { Link } from 'react-router';
import { connect } from 'react-redux';

import { ContactActions } from '$actions/types';

@connect()
export default class CenterNavButton extends React.Component {

    render () {
        const {path, text} = this.props;
        return (
            <Link to={path} onClick={this.triggerManager.bind(this)}>
                {text}
            </Link>
        );
    }

    /*****************************************/
    triggerManager () {
        if (this.props.text.toLowerCase() == 'contact') {
            this._triggerFlipFront();
        }
    }

    /*****************************************/
    _triggerFlipFront () {
        this.props.dispatch({
            type: ContactActions.FLIP_CARD_FRONT,
            payload: null,
        });
    }
}
