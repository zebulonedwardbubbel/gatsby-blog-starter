import React from 'react'
import Container from '../components/container'
import Header from '../components/header'
import Navigation from '../components/nav'
import Footer from '../components/footer';

export default ({ data }) => (
    <div>
        <Container>
            <Header>
                <Navigation />
            </Header>
            <p>The about page</p>
        </Container>
        <Footer />
    </div>
)
