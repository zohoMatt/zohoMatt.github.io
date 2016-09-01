/**
 * Created by Zoho on 16/9/1.
 */
// todo

import React from 'react';
import { Link } from 'react-router';

import uuid from 'uuid';

export default class TopNavBar extends React.Component {
    componentWillMount() {
        this.setElements();
    }

    render() {
        return (
            <nav className="t-nav">
                <ul>
                    <Link className="home-t-nav" to="/">
                        <i className="fa fa-home" aria-hidden="true"></i>
                    </Link>
                    {this.state.elements}
                </ul>
            </nav>
        );
    }

    /*****************************************/
    setElements() {
        const {links, activeLink} = this.props;
        const linkArray = links.map((link, i) => {
            const {path, text} = link;
            const active = (i == activeLink) ? 'active-t-nav' : '';
            return (
                <Link key={uuid.v1()} class={active} to={path}>{text}</Link>
            );
        });
        this.setState({
            elements: linkArray
        });
    }
}

