/**
 * Created by Zoho on 16/9/1.
 */
import EmailDetail from './DetailPanel/EmailDetail';
import FlipFrontButton from './DetailPanel/FlipFrontButton';
import GitHubDetail from './DetailPanel/GitHubDetail';
import LinkedInDetail from './DetailPanel/LinkedInDetail';
import ResumeDetail from './DetailPanel/ResumeDetail';

/******************** Component *******************/
const DetailPanel = ({ component }) => {
  const supposedComp = selectComponent(component);
  return (
    <div className="back-content">
      {supposedComp}
      <FlipFrontButton/>
    </div>
  );
}

/******************** Helpers *******************/
const selectComponent = (componentName) => {
  const standard = {
    'archive': <ResumeDetail/>,
    'github': <GitHubDetail/>,
    'envelope': <EmailDetail/>,
    'linkedin': <LinkedInDetail/>
  }
  const defaultCase = <div/>

  return prop(componentName, standard) || defaultCase
}


/******************** Exports *******************/
export default DetailPanel

