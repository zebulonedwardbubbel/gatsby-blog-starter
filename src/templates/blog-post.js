import React from "react";
import Container from "../components/container";
import { Link, graphql } from "gatsby";
import LinkList from "../components/nav";

export default function Template({ data, pageContext }) {
    const {next, prev} = pageContext;
    const { markdownRemark } = data; // data.markdownRemark holds our post data
    const { frontmatter, html } = markdownRemark;
    return (
        <Container>
        <LinkList />
        <div className="blog-post-container">
            <h2>{frontmatter.title}</h2>
            <span>{frontmatter.date}</span>
            <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
            />
            <span>{frontmatter.author}</span>
            <div>{frontmatter.tags}</div>

            <div style={{marginBottom: '1rem'}}>
                { next &&
                    <Link to={next.frontmatter.path}>
                        Next: {`${next.frontmatter.title}`}
                    </Link>
                }
            </div>
            <div>
                { prev &&
                    <Link to={prev.frontmatter.path}>
                        Prev: {`${prev.frontmatter.title}`}
                    </Link>
                }
            </div>
        </div>
        </Container>
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
