/**
 * Created by Zoho on 16/8/29.
 */
import Logo from './Home/Logo';
import CenterNavBar from './Home/CenterNavBar';

/** ****************** Component ****************** */
const Home = () => (
    <div id="home-container">
        <Logo />
        <CenterNavBar
            id="navbar"
            links={[
                {path: 'blog', text: 'Blog'},
                {path: 'project', text: 'Project'},
                {path: 'gallery', text: 'Gallery'},
                {path: 'contact', text: 'Contact'}
            ]}
        />
    </div>
);


/** ****************** Exports ****************** */
export default Home;

