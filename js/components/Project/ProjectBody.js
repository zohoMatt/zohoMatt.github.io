/**
 * Created by Zoho on 16/9/16.
 */
import React from 'react';
import { connect } from 'react-redux';

import SearchBar from '../Project/ProjectBody/SearchBar';
import StatusBar from '../Project/ProjectBody/StatusBar';
import Table from '../Project/ProjectBody/Table';

import { searchProjectAction } from '../../model/actions/filterAction';


@connect(() => {
    return {};
})
export default class ProjectBody extends React.Component {

    render() {
        return (
            <div class="project-body">
                <SearchBar placeHolder="project name search"
                           onInputHandler={this.onInputHandler.bind(this)}/>
                <StatusBar type="project"/>
                <Table/>
            </div>
        );
    }

    /******************** SearchBar *******************/
    onInputHandler(event) {
        this.props.dispatch(searchProjectAction(event.target.value));
    }
}
