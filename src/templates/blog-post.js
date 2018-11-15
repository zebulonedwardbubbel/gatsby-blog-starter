import React from "react";
import Container from "../components/container";
import { graphql } from "gatsby";
import LinkList from "../components/nav";

export default function Template({ data }) {
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
            <div>{frontmatter.tag}</div>
        </div>
        </Container>
    );
}

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
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
