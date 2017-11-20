/**
 * Created by Zoho on 16/9/1.
 */
import ProjectBody from './Project/ProjectBody';
import TopNavBar from './assets/nav/TopNavBar';

/** ****************** Component ****************** */
const Project = () =>
  (<div id="project-page">
    <TopNavBar
      links={[
            { path: 'blog', text: 'Blog' },
            { path: 'project', text: 'Project' },
            { path: 'gallery', text: 'Gallery' },
            { path: 'contact', text: 'Contact' },
        ]}
      activeLink={1}
    />
    <ProjectBody />
   </div>);

/** ****************** Exports ****************** */
export default Project;
