import React from 'react';
import { StaticQuery, Link, graphql } from 'gatsby'
// export default props => <h2>{props.headerText} {props.phrase}</h2>

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
            <div>
                <Link to={`/`}>
                    <h3>{data.site.siteMetadata.title}</h3>
                </Link>
                {children}
            </div>
        )}
    />
)

