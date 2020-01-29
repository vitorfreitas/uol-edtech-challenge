import React from 'react'
import styled from 'styled-components'
import { COLORS } from 'styles/variables'

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
`

const Line = styled.span`
  width: 2rem;
  height: 2px;
  background: ${COLORS.primary};

  &:not(:last-of-type) {
    margin-bottom: 3px;
  }
`

const Hamburger: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <Container onClick={onClick}>
    <Line />
    <Line />
    <Line />
  </Container>
)

export default Hamburger
