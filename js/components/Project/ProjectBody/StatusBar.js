/**
 * Created by Zoho on 16/9/6.
 */
import React from 'react';
import { connect } from 'react-redux';


@connect((store) => {
    const keyword = store.searchKeyword.project;
    return {
        keyword
    }
})
export default class StatusBar extends React.Component {
    constructor() {
        super();
    }

    render() {
        const { keyword } = this.props;

        const text = (keyword && true) ?
            'filter: ' + `'${keyword}'` :
            'no filter'
        return (
            <div className="status-text"><p>{text}</p></div>
        );
    }
}
