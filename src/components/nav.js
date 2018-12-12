import React from 'react'
import { Link } from 'gatsby'

const Navigation = props => (
    <li style={{ display: `inline-block`, margin: `1rem` }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default () => (
    <nav style={{ marginBottom: `1.5rem`, display: `flex`, alignItems: `center`, justifyContent: `flex-end` }}>
        <ul style={{ display: `flex`, alignItems: `center`, justifyContent: `space-between`, width: `50%`, padding: `0`}}>
            <Navigation to="/">Home</Navigation>
            <Navigation to="/about/">About</Navigation>
            <Navigation to="/team-css-module/">Team</Navigation>
            <Navigation to="/files/">Files</Navigation>
        </ul>
    </nav>
)
