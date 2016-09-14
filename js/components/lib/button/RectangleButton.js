/**
 * Created by Zoho on 16/9/5.
 */
/**
 * Just a normal button. Shrinks while clicking.
 *
 * The best part is that, wherever placed, the button shrinks without affecting
 * positions of other components.
 */
import React from 'react';

const BTN_COLOR = 'yellow';
const BTN_WIDTH = '100px';
const BTN_HEIGHT = '40px';

/**
 * @props
 * btnWidth                 {string} '100px' default
 * btnHeight                {string} '40px' default
 * btnColor                 {string} 'yellow' default
 * text                     {string} '' default
 * clickHandler             {function}
 */
export default class RectangleButton extends React.Component {
    constructor() {
        super();
        this.data = {};
    }

    componentWillMount() {
        // assign basic parameter
        let { btnWidth, btnHeight, btnColor } = this.props;
        btnWidth = btnWidth || BTN_WIDTH;
        btnHeight = btnHeight || BTN_HEIGHT;
        btnColor = btnColor || BTN_COLOR;

        // basic size for container and original state
        this.data.basicSize = {
            width: btnWidth,
            height: btnHeight
        };
        // style for original state
        this.setState({
            style: {
                ...this.data.basicSize,
                backgroundColor: btnColor
            }
        });
    }

    render() {
        return (
            // add a container to keep the position stable
            <div className="rec-btn-container" style={this.data.basicSize}>
                <div className="rec-btn"
                     style={this.state.style}
                     onClick={this.clickHandler.bind(this)}>{this.props.text}</div>
            </div>
        );
    }

    /*****************************************/
    clickHandler() {
        const propsHandler = this.props.clickHandler;
        if (propsHandler) {
            propsHandler();
        }
        // clicking animation
        this._changeStyleWhileClicked();
    }

    /*****************************************/
    _changeStyleWhileClicked() {
        const curStyle = this.state.style;
        const { width, height } = curStyle;
        // origin -> smaller
        this.setState({
            style: {
                ...curStyle,
                width: `${Number(width.slice(0, -2)) / 1.2}px`,
                height: `${Number(height.slice(0, -2)) / 1.2}px`
            }
        });

        // -> origin
        setTimeout(() => {
            this.setState({
                style: curStyle
            })
        }, 100);
    }
}
