import React from 'react'
import styled, { css } from 'styled-components'
import * as T from 'styles/typography'

const DarkBackground = styled.div<{ open: boolean }>(
  props => css`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    transition: 0.2s all;
    background: rgba(0, 0, 0, 0.2);

    visibility: ${props.open ? 'visible' : 'hidden'};
    opacity: ${props.open ? 1 : 0};
  `
)

const Container = styled.article<{ open: boolean }>(
  props => css`
    top: 50%;
    left: 50%;
    width: 40vw;
    position: fixed;
    transform: translate(-50%, -50%);

    transition: 0.2s all;
    background: #fff;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

    visibility: ${props.open ? 'visible' : 'hidden'};
    opacity: ${props.open ? 1 : 0};
  `
)

const Heading = styled.header`
  display: flex;
  padding: 1rem 2rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
`

const Title = styled.h1`
  ${T.Title};
  font-size: 1.75rem;
`

const CloseButton = styled.button`
  color: #ccc;
  cursor: pointer;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
`

const Content = styled.section`
  padding: 2rem;
  color: #999;
  font-size: 1.25rem;
  line-height: 1.7;
`

const Dialog: React.FC<{
  open: boolean
  content: string
  onClose: () => void
}> = ({ open, onClose, content }) => {
  return (
    <DarkBackground aria-hidden={open} open={open}>
      <Container aria-hidden={open} open={open}>
        <Heading>
          <Title>My amazing modal</Title>
          <CloseButton onClick={onClose}>Fechar</CloseButton>
        </Heading>

        <Content>
          <p>{content}</p>
        </Content>
      </Container>
    </DarkBackground>
  )
}

export { Dialog }
