import React from 'react';
import {Link, graphql} from 'gatsby';
import Container from '../components/container'
import LinkList from '../components/nav';
import Header from '../components/header';

export default ({data}) => {
    return (
        <Container>
            <LinkList />
            {/* <Header headerText='Hello World' /> */}
            <Header />
            <p>What a world.</p>
            <img src="https://source.unsplash.com/random/400x200" alt="" />
            <h3>{data.allMarkdownRemark.totalCount} Posts</h3>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.id}>
                    <Link
                        to={node.frontmatter.path}
                        style={{textDecoration: `none`}}
                    >
                        <h3>
                            {node.frontmatter.title}{" "}
                            <span>
                                — {node.frontmatter.date}
                            </span>
                        </h3>
                        <p>{node.excerpt}</p>
                    </Link>
                </div>
            ))}
            <div>
                <Link to='/tags'>Browse by Tag</Link>
            </div>
        </Container>
    )
}

export const query = graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        path
                        title
                        date(formatString: "DD MMMM, YYYY")
                    }
                    excerpt
                }
            }
        }
    }
`