/**
 * Created by Zoho on 16/9/1.
 */
// todo

import React from 'react';

import EmailDetail from './DetailPanel/EmailDetail';
import FlipFrontButton from './DetailPanel/FlipFrontButton';
import GitHubDetail from './DetailPanel/GitHubDetail';
import LinkedInDetail from './DetailPanel/LinkedInDetail';
import ResumeDetail from './DetailPanel/ResumeDetail';

export default class DetailPanel extends React.Component {

    render() {
        const supposedComp = this.selectComponent(this.props.component);
        return (
            <div className="back-content">
                {supposedComp}
                <FlipFrontButton/>
            </div>
        );
    }

    /*****************************************/
    selectComponent(componentName) {
        switch (componentName) {
            case 'archive':
                return <ResumeDetail/>;
            case 'github':
                return <GitHubDetail/>;
            case 'envelope':
                return <EmailDetail/>;
            case 'linkedin':
                return <LinkedInDetail/>;
            default:
                return <div/>;
        }
    }
}
