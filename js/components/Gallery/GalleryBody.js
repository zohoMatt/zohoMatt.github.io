/**
 * Created by hao.zuo on 2017/8/15.
 */
import React from 'react';
import {connect} from 'react-redux';

import SearchBar from '../Project/ProjectBody/SearchBar';
import MediaCardContainer from './GalleryBody/MediaCardContainer';
import {searchGalleryAction} from '../../model/actions/filterAction';

@connect(() => {
  return {};
})
export default class GalleryBody extends React.Component {

  render() {
    return (
        <div className="gallery-body">
          <SearchBar placeHolder="image keyword"
                     onInputHandler={this.onInputHandler.bind(this)}/>
          <MediaCardContainer/>
        </div>
    );
  }

  /******************** SearchBar Dispatcher *******************/
  onInputHandler(event) {
    this.props.dispatch(searchGalleryAction(event.target.value));
  }
}
