/**
 * Created by Zoho on 16/8/29.
 */
import InfoCard from './Contact/InfoCard';
import TopNavBar from './assets/nav/TopNavBar';

const Contact = () => (
    <div id="contact-page">
        <TopNavBar links={[
            {path: 'blog', text: 'Blog'},
            {path: 'project', text: 'Project'},
            {path: 'gallery', text: 'Gallery'},
            {path: 'contact', text: 'Contact'},
        ]} activeLink={3}/>
        <InfoCard/>
        <div id="contact-footer">
            <div className="prompt-text eng">
                <p>Redux & React dev-tool/extension is able to work on this
                    site(temporarily) for revealing the details of development
                    process.</p>
            </div>
            <div className="prompt-text chn">
                <p>Redux和React开发工具/插件在本站(暂时)可以工作,以展示开发细节。</p>
            </div>
        </div>
    </div>
);

export default Contact;