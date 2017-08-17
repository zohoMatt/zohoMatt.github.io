/**
 * Created by Zoho on 16/9/16.
 */
// todo

import React from 'react';

import FolderColumn from './CatalogPanel/FolderColumn';
import CollapseHandler from './CatalogPanel/CollapseHandler';

export default class CatalogPanel extends React.Component {

  render() {
    return (
        <div className="catalog-panel">
          <CollapseHandler arrow="right"/>
          <FolderColumn/>
        </div>
    );
  }
}
