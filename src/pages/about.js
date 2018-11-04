import React from 'react'
import {graphql} from 'gatsby'
import Header from '../components/header'
import Container from '../components/container'
import ListLink from '../components/nav'

export default ({data}) => (
  <Container style={{ color: `teal` }}>
    <h1>About {data.site.siteMetadata.title}</h1>
    <ListLink />
    {/* <Header headerText='About Gatsby' phrase='phrase asdf'/> */}
    <Header />
    <p>Such wow. Very React.</p>
  </Container>
)

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`