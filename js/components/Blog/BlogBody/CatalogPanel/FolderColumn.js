/**
 * Created by hao.zuo on 2017/8/17.
 */
import React from 'react';
import uuid from 'uuid';

import FolderBox from './FolderBox';

export default class FolderColumn extends React.Component {

  render() {
    return (
        <div className="folder-column">
          <FolderBox key={uuid.v1()}/>
          <FolderBox key={uuid.v1()}/>
          <FolderBox key={uuid.v1()}/>
          <FolderBox key={uuid.v1()}/>
        </div>
    );
  }
}