/**
 * Created by hao.zuo on 2017/8/17.
 */
// todo
import React from 'react';

export default class CollapseHandler extends React.Component {

  render() {
    const arrow = this.props.arrow || 'right';
    return (
        <div className="collapse-handler">
          <div class="arrow-icon">
            <i class={`fa fa-angle-double-${arrow}`} aria-hidden="true"></i>
          </div>
        </div>
    );
  }
}