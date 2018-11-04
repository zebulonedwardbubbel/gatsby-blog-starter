import React from 'react'
import {Link} from 'gatsby'

const LinkList = props => (
    <li style={{ display: `inline-block`, marginLeft: `1rem` }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default ({children}) => (
    <div style={{ padding: `1rem 0` }}>
        <header style={{ marginBottom: `1.5rem`, display: `flex`, alignItems: `center`, justifyContent: `space-between` }}>
            <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`, textDecoration: `none` }}>
                <h2 style={{ display: `inline` }}>Site</h2>
            </Link>
            <ul style={{ listStyle: `none`, float: `right` }}>
                <LinkList to="/">Home</LinkList>
                <LinkList to="/about/">About</LinkList>
                <LinkList to="/team-css-module/">Team</LinkList>
                <LinkList to="/files/">Files</LinkList>
                <LinkList to="/contact/">Contact</LinkList>
            </ul>
        </header>
        {children}
    </div>
)
