import React from 'react';
import { Link } from 'gatsby';
import Container from '../components/container'
import Navigation from '../components/nav';
import Header from '../components/header';
import Footer from '../components/footer';
import { Helmet } from 'react-helmet';

const SingleTagTemplate = ({ pageContext }) => {
    const { posts, tagName } = pageContext
    return (
        <div>
            <Helmet>
                <title>All tags of aou Gatsby blog</title>
                <meta name="description" content="description for the tag browser page"></meta>
            </Helmet>

            <Header>
                <Container>
                    <Navigation />
                </Container>
            </Header>

            <main>
                <Container>
                <h2>
                    Posts about {`${tagName}`}
                </h2>
                <ul>
                    {posts.map((post, index) => {
                        return (
                            <li key={index}>
                                <Link to={post.frontmatter.path}>
                                    {post.frontmatter.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                </Container>
            </main>
            <Footer />
        </div>
    )
}

export default SingleTagTemplate