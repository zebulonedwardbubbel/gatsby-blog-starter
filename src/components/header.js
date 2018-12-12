import React from 'react';
import { StaticQuery, Link, graphql } from 'gatsby'

export default ({children}) => (
    <StaticQuery
        query={graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={data => (
            <header>
                <Link to={`/`}>
                    <h1 className="visually-hidden">{data.site.siteMetadata.title}</h1>
                </Link>
                {children}
            </header>
        )}
    />
)
