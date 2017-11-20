/**
 * Created by Zoho on 16/8/30.
 */
import { Link } from 'react-router-dom';

/** ****************** Component ****************** */
const Avatar = ({ imgSource }) =>
  (<div className="avatar">
    <Link to="/">
      <img src={imgSource} alt="GitHub: zohoFrank" />
    </Link>
  </div>);

/** ****************** Exports ****************** */
export default Avatar;
