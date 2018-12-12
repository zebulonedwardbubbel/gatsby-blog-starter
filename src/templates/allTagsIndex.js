import React from 'react';
import { Link } from 'gatsby';
import Container from '../components/container'
import Navigation from '../components/nav';
import Header from '../components/header';
import Footer from '../components/footer';
import { Helmet } from 'react-helmet';

const AllTagsTemplate = ({ pageContext }) => {
    const { tags } = pageContext
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
                <ul>
                    {tags.map((tagName, index) => {
                        return (
                            <li key={index}>
                                <Link to={`/tags/${tagName}`}>
                                    {tagName}
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

export default AllTagsTemplate