/**
 * Created by Zoho on 16/8/30.
 */
import {IndexLink} from 'react-router';

/******************** Component *******************/
const Avatar = () =>
  <div class="avatar">
    <IndexLink to="/">
      <img src={this.props.imgSource} alt="GitHub: zohoFrank"/>
    </IndexLink>
  </div>

/******************** Exports *******************/
export default Avatar