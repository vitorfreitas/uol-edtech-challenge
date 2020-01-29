import React from 'react'
import styled from 'styled-components'
import { COLORS } from 'styles/variables'
import Hamburger from './Hamburger'

const Container = styled.header`
  width: 100%;
  height: 6rem;
  padding: 0 2rem;
  background: ${COLORS.light};

  display: flex;
  align-items: center;
`

const Navbar: React.FC<{ onToggle: () => void }> = ({ onToggle }) => {
  return (
    <Container>
      <Hamburger onClick={onToggle} />
    </Container>
  )
}

export { Navbar }
