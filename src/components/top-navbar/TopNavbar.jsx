import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

import { useLang } from '../../providers/language-provider/LanguageProvider'
import SteelrockLogo from '../../images/steel_rock_jpg.jpg'
import GermanLogo from '../../images/german_icon.png'
import EnglishLogo from '../../images/english_icon.png'

import { routes } from '../../config'

const StyledTopNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right :30px;
  height: 60px;
`

const Links = styled.div`
  display: flex;
  align-items: center;
`

const Link = styled(NavLink)`
  margin-left: 30px;
  color: black;
  text-decoration: none;
  &:hover {
    color: rgb(150,150,150);
  }
`

const Language = styled.div`
  margin-left: 20px;
  font-size: 14px;
  &:hover {
    cursor: pointer;
    color: rgb(150,150,150);
  }
`

const LinkLogo = styled(NavLink)`

`

const StyledLogo = styled.img`
  height: 40px;
`

const Languages = styled.div`
  margin-left: 20px;
`

const StyledLanguage = styled.img`
  height: 20px;
  margin-left: 10px;
  &:hover {
    cursor: pointer;
  }
`

export const TopNavbar = () => {
  const { setLocale } = useLang()
  return (
    <StyledTopNavbar>
      <NavLink to='/'>
        <StyledLogo src={SteelrockLogo} />
      </NavLink>
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
        <Link to={routes.contact}>
          <FormattedMessage id = "topNavbar.contact" />
        </Link>
        <Languages>
          <StyledLanguage
            onClick={() => setLocale('de-DE')}
            src={GermanLogo} 
          />
          <StyledLanguage 
            onClick={() => setLocale('en-EN')}
            src={EnglishLogo} 
          />
        </Languages>
      </Links>
    </StyledTopNavbar>
  )
}
