/**
 * Created by Zoho on 16/8/29.
 */
import React from 'react';
import { Link } from "react-router";

export default class Navbar extends React.Component {
    render() {
        return (
            <nav id="navbar">
                <ul>
                    <Link to="blog">
                        <li>Blog</li>
                    </Link>
                    <Link to="project">
                        <li>Project</li>
                    </Link>
                    <Link to="gallery">
                        <li>Gallery</li>
                    </Link>
                    <Link to="contact">
                        <li>Contact</li>
                    </Link>
                </ul>
            </nav>
        );
    }
}