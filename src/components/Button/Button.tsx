import React from 'react'
import styled from 'styled-components'
import { COLORS } from 'styles/variables'

const Container = styled.button`
  border: 0;
  color: #fff;
  cursor: pointer;
  padding: 1rem 3rem;
  transition: 0.2s all;
  border-radius: 2rem;
  background: ${COLORS.primaryLight};

  &:hover {
    background: ${COLORS.primary};
  }
`

const Button: React.FC = ({ children }) => {
  return <Container>{children}</Container>
}

export { Button }
