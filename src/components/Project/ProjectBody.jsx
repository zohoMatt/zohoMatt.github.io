/**
 * Created by Zoho on 16/9/16.
 */
import { connect } from 'react-redux';

import SearchBar from '../assets/searchBar/SearchBar';
import StatusBar from './ProjectBody/StatusBar';
import Table from './ProjectBody/Table';

import { searchProjectAction } from 'actions/shared/searchAction';

@connect()
export default class ProjectBody extends React.Component {

    render () {
        return (
            <div class="project-body">
                <SearchBar placeHolder="description or name"
                           onInputHandler={this.onInputHandler.bind(this)}/>
                <StatusBar type="project"/>
                <Table/>
            </div>
        );
    }

    /******************** SearchBar *******************/
    onInputHandler (event) {
        this.props.dispatch(searchProjectAction(event.target.value));
    }
}
