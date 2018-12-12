import React from 'react';
import {Link, graphql} from 'gatsby';
import Container from '../components/container'
import Navigation from '../components/nav';
import Header from '../components/header';
import Footer from '../components/footer';
import { Helmet } from 'react-helmet';

export default ({data}) => {
    return (
        <div>
            <Helmet>
                <title>Gatsby blog with Netlify CMS integration</title>
                <meta name="description" content="description for the index page"></meta>
            </Helmet>

            <Header>
                <Container>
                    <Navigation />
                </Container>
            </Header>

            <main>
                <Container>

                    <img src="https://source.unsplash.com/random/400x200" alt="" />

                    {/* link list for blog posts */}
                    <p style={{padding: `2rem 0 1rem`}}>{data.allMarkdownRemark.totalCount} Posts</p>
                    {data.allMarkdownRemark.edges.map(({ node }) => (
                        <div key={node.id}>
                            <Link
                                to={node.frontmatter.path}
                                style={{display: `inline-block`, textDecoration: `none`, marginBottom: `1rem`}}
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
                    {/* end of link list for blog posts */}

                    <div style={{padding: `2rem 0 1rem`}}>
                        <Link to='/tags'>Browse posts by Tag</Link>
                    </div>

                </Container>
            </main>

            <Footer />
        </div>
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