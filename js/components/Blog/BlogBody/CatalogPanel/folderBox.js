/**
 * Created by hao.zuo on 2017/8/17.
 */
import React from 'react';

export default class FolderBox extends React.Component {

  render() {
    return (
        <div className="folder-box">
          <i class="fa fa-folder-open" aria-hidden="true"></i>
          <div class="folder-name">Folder Example</div>
        </div>
    );
  }
}