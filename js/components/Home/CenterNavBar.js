/**
 * Created by Zoho on 16/9/1.
 */
import React from 'react';

import uuid from 'uuid';

import CenterNavButton from './CenterNavBar/CenterNavButton';

export default class CenterNavBar extends React.Component {
  constructor() {
    super();
    this.data = {};
  }

  componentWillMount() {
    this.setChildren();
  }

  render() {
    return (
        <nav className="c-nav">
          <ul>
            {this.data.elements}
          </ul>
        </nav>
    );
  }

  /*****************************************/
  setChildren() {
    const {links} = this.props;
    const linkArray = links.map((link, i) => {
      const {path, text} = link;
      return (
          <CenterNavButton key={uuid.v1()} path={path} text={text}/>
      );
    });
    this.data.elements = linkArray;
  }
}
