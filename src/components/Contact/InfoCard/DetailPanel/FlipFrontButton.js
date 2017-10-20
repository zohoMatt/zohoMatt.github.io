/**
 * Created by Zoho on 16/9/5.
 */
import { connect } from 'react-redux';

import { flipFrontAction } from 'actions/contact/flipCardAction';

@connect()
export default class FlipFrontButton extends React.Component {

    render () {
        return (
            <div className="flip-front-btn">
                <i class="fa fa-arrow-circle-left" aria-hidden="true"
                   onClick={this.triggerManager.bind(this)}></i>
            </div>
        );
    }

    /*****************************************/
    triggerManager () {
        this._triggerFlipFront();
    }

    /*****************************************/
    _triggerFlipFront () {
        this.props.dispatch(flipFrontAction());
    }
}
