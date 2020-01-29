import React, { useState } from 'react'
import Sidebar from 'components/Sidebar'
import styled, { css } from 'styled-components'
import Courses from './Courses'
import Navbar from 'components/Navbar'

const Container = styled.main<{ sidebarIsOpen?: boolean }>(
  props => css`
    transition: padding-left 0.2s;
    padding-left: ${props.sidebarIsOpen ? '25rem' : 0};
  `
)

const Root = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(true)

  const toggleSidebar = () => setSidebarIsOpen(!sidebarIsOpen)

  return (
    <div>
      <Sidebar open={sidebarIsOpen} />

      <Container sidebarIsOpen={sidebarIsOpen}>
        <Navbar onToggle={toggleSidebar} />
        <Courses />
      </Container>
    </div>
  )
}

export default Root
