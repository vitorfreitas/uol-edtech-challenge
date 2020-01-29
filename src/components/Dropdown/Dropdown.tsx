import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { COLORS } from 'styles/variables'

const Container = styled.div`
  color: #000;
  display: inline-block;
  position: relative;
`

const Button = styled.button(
  ({ color }) => css`
    color: ${color || COLORS.primary};
    border: 1px solid ${COLORS.primary};
    cursor: pointer;
    font-size: 0.85rem;
    border-radius: 2rem;
    transition: 0.2s all;
    padding: 8px 2rem;
    background: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  `
)

const OptionsContainer = styled.div<{ visible: boolean }>(
  ({ visible }) => css`
    display: ${visible ? 'block' : 'none'};

    right: 0;
    top: 3.5rem;
    background: #fff;
    border-radius: 3px;
    position: absolute;
    width: 100%;
    border: 1px solid #ccc;
  `
)

const OptionsList = styled.ul`
  list-style: none;
`

const Option = styled.li`
  cursor: pointer;
  transition: 0.1s all;
  padding: 0.8rem;

  &:hover {
    background: rgba(0, 0, 0, 0.07);
  }

  &:active {
    background: rgba(0, 0, 0, 0.1);
  }
`

const Hoverable = styled.div`
  width: 100%;
  height: 0.5rem;
  background: transparent;
  position: absolute;
`

const Title = styled.h3``

const Dropdown: React.FC<{
  title: string
  options: any[]
  color?: string
}> = ({ title, options, color }) => {
  const [isVisible, setVisibility] = useState(false)

  const toggleVisibility = () => setVisibility(!isVisible)

  return (
    <Container onMouseEnter={toggleVisibility} onMouseLeave={toggleVisibility}>
      <Button color={color}>
        <Title>{title}</Title>
      </Button>

      <Hoverable />

      <OptionsContainer visible={isVisible}>
        <OptionsList>
          {options.map(option => (
            <Option key={option.label}>{option.label}</Option>
          ))}
        </OptionsList>
      </OptionsContainer>
    </Container>
  )
}

export default Dropdown
