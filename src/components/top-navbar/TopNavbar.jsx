import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import { routes } from '../../config'

const StyledTopNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const IconWrapper = styled.div`

`

const Links = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
`

const Link = styled(NavLink)`
  margin-left: 30px;
`

export const TopNavbar = () => {
  return (
    <StyledTopNavbar>
      <IconWrapper>
        icon
      </IconWrapper>
      <Links>
        <Link to='/'>
          Home
        </Link>
        <Link to={routes.realState}>
          Real State
        </Link>
        <Link to={routes.renewableEnergy}>
          Renewable Energy
        </Link>
      </Links>
    </StyledTopNavbar>
  )
}