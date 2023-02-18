import React from "react"
import {ReactComponent as Logo} from "./logo.svg"
import styled from 'styled-components';

const StyledNav = styled.nav`
  font-weight: 600;
  height: 60px;
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Navbar = () => {
  return (
    <StyledNav>
      <Logo />
      <span>Planned test</span>
    </StyledNav>
  )
}