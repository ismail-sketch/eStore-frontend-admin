import React from 'react'
import { Header } from '../Header/Header'
import Container from 'react-bootstrap/esm/Container'

export const Layout = (props) => {
  return (
    <div>
        <Header/>
        <Container>
          {props.children}
        </Container>

    </div>
  )
}
