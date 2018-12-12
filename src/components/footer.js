import React from 'react';
import Container from '../components/container'
import { StaticQuery, graphql } from 'gatsby'

export default ({children}) => (
    <StaticQuery
        query={graphql`
            query {
                site {
                    siteMetadata {
                        copy
                    }
                }
            }
        `}
        render={data => (
            <footer>
                <Container>
                    <span>{data.site.siteMetadata.copy}</span>
                    {children}
                </Container>
            </footer>
        )}
    />
)