import React from 'react'
import styled from 'styled-components'
import { COLORS } from 'styles/variables'
import { ReactComponent as SearchIcon } from 'assets/search.svg'

const Container = styled.div`
  position: relative;
`

const StyledInput = styled.input`
  outline: 0;
  padding: 7px 40px 7px 12px;
  border-radius: 2rem;
  color: ${COLORS.primary};
  border: 1px solid ${COLORS.primary};

  &::placeholder {
    color: ${COLORS.primary};
  }
`

const Icon = styled(SearchIcon)`
  fill: ${COLORS.primary};
  height: 1.5rem;
  right: 5px;
  top: 7px;
  position: absolute;
`

const Input: React.FC<{ placeholder: string }> = ({ placeholder }) => {
  return (
    <Container>
      <StyledInput type='text' placeholder={placeholder} />
      <Icon />
    </Container>
  )
}

export default Input
