/**
 * Created by Zoho on 16/9/5.
 */
// betterdo Refactor

import { Link } from 'react-router';
import { connect } from 'react-redux';

import { ContactActions } from '$actions/types';

/**
 * @props:
 * // origin
 * active               {boolean} Whether this navigator button is active.
 * path                 {string} The router path.
 * text                 {string} Text to display.
 */
@connect()
export default class TopNavButton extends React.Component {

    render () {
        const {active, path, text} = this.props;
        return (
            <Link class={active} to={path}
                  onClick={this.triggerManager.bind(this)}>
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
