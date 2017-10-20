/**
 * Created by Zoho on 16/9/2.
 */
import {connect} from 'react-redux'

// action functions
import {flipBackAction} from '$actions/contact/flipCardAction'

/**
 * @props:
 * // origin
 * iconName             {string} Name string to describe what this icon represents. Also the name related with FontAwesome icon.
 */
@connect()
export default class IconButton extends React.Component {
  constructor() {
    super()
    this.data = {}
  }

  componentWillMount() {
    this.data.name = this.props.iconName
  }

  render() {
    return (
        <i className={`fa ${this.data.name}`}
           onClick={this.triggerManager.bind(this)}></i>
    )
  }

  /*****************************************/
  triggerManager() {
    this._triggerFlip()
  }

  /*****************************************/
  _triggerFlip() {
    const name = this.data.name.split('-')[1]          // get the * part of fa-*
    this.props.dispatch(flipBackAction(name))
  }

}
