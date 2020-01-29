import React from 'react'
import styled from 'styled-components'
import { COLORS } from 'styles/variables'

const Container = styled.header`
  width: 100%;
  height: 6rem;
  background: ${COLORS.light};
`

const Navbar = () => {
  return <Container></Container>
}

export { Navbar }
