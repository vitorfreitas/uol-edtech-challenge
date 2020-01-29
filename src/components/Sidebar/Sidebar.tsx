import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { COLORS } from 'styles/variables'
import { ReactComponent as ChartIcon } from 'assets/stats-bars.svg'
import { ReactComponent as HistoryIcon } from 'assets/history.svg'
import { ReactComponent as StarIcon } from 'assets/star-empty.svg'
import { ReactComponent as MailIcon } from 'assets/envelop.svg'
import { ReactComponent as ArrowDown } from 'assets/chevron-down.svg'

const Container = styled.nav<{ open?: boolean }>(
  props => css`
    top: 0;
    left: 0;
    height: 100%;
    width: 25rem;
    position: fixed;
    transition: 0.5s all;
    transform: translateX(${props.open ? 0 : '-25rem'});
    background: ${COLORS.primary};

    display: flex;
    align-items: center;
    flex-direction: column;

    @media only screen and (max-width: 768px) {
      transform: translateX(-25rem);
    }
  `
)

const Heading = styled.header`
  width: 100%;
  height: 6rem;
  background: ${COLORS.primaryDark};
`

const MenuList = styled.ul`
  list-style: none;
  margin-top: 4rem;
`

const MenuListItem = styled.li<{ selected?: boolean }>(
  props => css`
    cursor: pointer;
    font-size: 1.25rem;
    text-transform: uppercase;

    display: flex;
    align-items: center;

    &:not(:last-of-type) {
      margin-bottom: 2rem;
    }

    /* Menu icon */
    & > svg:first-of-type {
      width: 2.2rem;
      margin-right: 1rem;
    }

    /* Arrow down */
    & > svg:nth-child(2) {
      width: 2.2rem;
      margin-left: 1rem;
    }

    /* Default color */
    &,
    & > svg:first-of-type,
    & > svg:nth-child(2) {
      fill: ${props.selected ? COLORS.cyan : COLORS.opaque};
      color: ${props.selected ? COLORS.cyan : COLORS.opaque};
    }
  `
)

const Dropdown = styled.div<{ open: boolean }>(
  props => css`
    width: 100%;
    padding-left: 4rem;
    transition: 0.2s all;
    height: ${props.open ? 'min-content' : '0'};
    visibility: ${props.open ? 'visible' : 'hidden'};

    & > * {
      transition: 0.1s all;
      opacity: ${props.open ? 1 : 0};
      visibility: ${props.open ? 'visible' : 'hidden'};
    }

    ${props.open &&
      css`
        margin-top: -1rem;
        margin-bottom: 1rem;
      `}
  `
)

const DropdownList = styled.ul`
  list-style: none;
`

const DropdownListItem = styled.li<{ selected?: boolean }>(
  props => css`
    text-transform: uppercase;
    padding: 1rem;
    border-left: 1px solid ${COLORS.cyan};
    color: ${props.selected ? COLORS.white : COLORS.opaque};
  `
)

const Sidebar: React.FC<{ open: boolean }> = ({ open }) => {
  const [highlightDropdownIsOpen, setHighlightDropdownIsOpen] = useState(false)

  return (
    <Container open={open}>
      <Heading></Heading>

      <MenuList>
        <MenuListItem>
          <ChartIcon />
          Grupos colaborativos
        </MenuListItem>

        <MenuListItem>
          <MailIcon />
          Central de mensagens
        </MenuListItem>

        <MenuListItem
          selected={highlightDropdownIsOpen}
          onClick={() => setHighlightDropdownIsOpen(!highlightDropdownIsOpen)}
        >
          <StarIcon />
          Cursos em destaque
          <ArrowDown />
        </MenuListItem>

        <Dropdown open={highlightDropdownIsOpen}>
          <DropdownList>
            <DropdownListItem>Relatórios</DropdownListItem>
            <DropdownListItem selected>Painel de cursos</DropdownListItem>
            <DropdownListItem>Categorias</DropdownListItem>
          </DropdownList>
        </Dropdown>

        <MenuListItem>
          <HistoryIcon />
          Histórico
        </MenuListItem>
      </MenuList>
    </Container>
  )
}

export { Sidebar }
