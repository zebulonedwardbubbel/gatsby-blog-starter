import React from 'react'
import Container from '../components/container'
import LinkList from '../components/nav'
import Header from '../components/header'

export default () => (
  <Container style={{ color: `teal` }}>
    <LinkList />
    {/* <Header headerText='Contact' /> */}
    <Header />
    <p>Send us a message!</p>
  </Container>
)