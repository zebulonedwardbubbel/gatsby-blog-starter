import React from 'react';
import Container from '../components/container';
import {graphql} from 'gatsby';
import LinkList from '../components/nav';

export default ({data}) => {
    const post = data.markdownRemark
    return (
        <Container>
            <LinkList />
            <div>
                <h2>{post.frontmatter.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Container>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`