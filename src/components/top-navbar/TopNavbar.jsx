import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

import { useLang } from '../../providers/language-provider/LanguageProvider'

import { routes } from '../../config'

const StyledTopNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 30px;
  height: 60px;
`

const IconWrapper = styled.div`
`

const Links = styled.div`
  display: flex;
  align-items: center;
`

const Link = styled(NavLink)`
  margin-left: 30px;
  color: black;
  text-decoration: none;
`

const Language = styled.div`
  margin-left: 20px;
  font-size: 16px;
`

export const TopNavbar = () => {
  const { setLocale } = useLang()
  return (
    <StyledTopNavbar>
      
      <IconWrapper>
        icon
      </IconWrapper>
      <Links>
        <Link to='/'>
          <FormattedMessage id = "topNavbar.home" />
        </Link>
        <Link to={routes.realState}>
          <FormattedMessage id = "topNavbar.realState" />
        </Link>
        <Link to={routes.renewableEnergy}>
          <FormattedMessage id = "topNavbar.renewableEnergy" />
        </Link>
        <Language onClick={() => setLocale('en-EN')}>
          English
        </Language>
        <Language onClick={() => setLocale('de-DE')}>
          German
        </Language>
      </Links>
    </StyledTopNavbar>
  )
}
