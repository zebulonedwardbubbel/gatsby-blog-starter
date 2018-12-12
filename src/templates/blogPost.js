import React from "react";
import Container from "../components/container";
import { Link, graphql } from "gatsby";
import Header from '../components/header';
import Footer from '../components/footer';
import Navigation from "../components/nav";
import { Helmet } from "react-helmet"

export default function Template({ data, pageContext }) {
    const {next, prev} = pageContext;
    const { markdownRemark } = data; // data.markdownRemark holds our post data
    const { frontmatter, html } = markdownRemark;
    return (
        <div>
            <Helmet>
                <title>{frontmatter.title}</title>
                <meta name="description" content={frontmatter.title}></meta>
            </Helmet>

            <Header>
                <Container>
                    <Navigation />
                </Container>
            </Header>
            <main>
                <Container>
                    <article
                        className="blog-post-container"
                        style={{padding:`2rem 0.5rem`}}
                    >
                        <h2>{frontmatter.title}</h2>
                        <span>{frontmatter.date}</span>
                        <div
                            className="blog-post-content"
                            dangerouslySetInnerHTML={{ __html: html }}
                        />
                        <span>{frontmatter.author}</span>
                        <div>{frontmatter.tags}</div>
                    </article>

                    <nav style={{display: `flex`, justifyContent: `space-between`}}>
                        <div>
                            { prev &&
                                <Link to={prev.frontmatter.path}>
                                    &#8592; {`${prev.frontmatter.title}`}
                                </Link>
                            }
                        </div>
                        <div style={{marginBottom: '1rem'}}>
                            { next &&
                                <Link to={next.frontmatter.path}>
                                    {`${next.frontmatter.title}`} &#8594;
                                </Link>
                            }
                        </div>
                    </nav>

                </Container>
            </main>
            <Footer />
        </div>
    );
}

export const pageQuery = graphql`
    query($pathSlug: String!) {
        markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                author
                tags
            }
        }
    }
`
