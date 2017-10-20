/**
 * Created by Zoho on 16/9/1.
 */
import { Link } from 'react-router';

/******************** Component *******************/
const BackHome = () => (
    <Link className="home-t-nav" to="/">
        <i className="fa fa-home" aria-hidden="true"></i>
    </Link>
);

/******************** Exports *******************/
export default BackHome;