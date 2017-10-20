/**
 * Created by hao.zuo on 2017/8/17.
 */
// todo
import React from 'react';

/******************** Component *******************/
const CollapseHandler = ({arrow}) => {
    return (
        <div className="collapse-handler">
            <div class="arrow-icon">
                <i class={`fa fa-angle-double-${arrow || 'right'}`}
                   aria-hidden="true"></i>
            </div>
        </div>
    );
};

/******************** Exports *******************/
export default CollapseHandler;