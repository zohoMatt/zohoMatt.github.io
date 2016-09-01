/**
 * Created by Zoho on 16/9/1.
 */
import React from 'react';
import { Link } from 'react-router';

import uuid from 'uuid';

export default class TopNavBar extends React.Component {
    
    render() {
        const {members, selected} = this.props;
        const LinkArray = members.map((m, i) => {
            const {path, text} = m;
            const active = (i == selected) ? 'active' : '';
            return (
                <Link key={uuid.v1()} class={active} to={path}>
                    <li>{text}</li>
                </Link>
            );
        });
        return (
            <nav className="top-nav">
                <ul>
                    {LinkArray}
                </ul>
            </nav>
        );
    }
}