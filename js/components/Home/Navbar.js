/**
 * Created by Zoho on 16/8/29.
 */
import React from 'react';

export default class Navbar extends React.Component {
    render() {
        return (
            <nav id="navbar">
                <ul>
                    <li>Blog</li>
                    <li>Project</li>
                    <li>Gallery</li>
                    <li>Contact</li>
                </ul>
            </nav>
        );
    }
}