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
  width: 100%
`

const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 5px;
  padding-bottom: 15px;
`

const Link = styled(NavLink)`
  color: black;
  text-decoration: none;
  &:hover {
    color: rgb(150,150,150);
  }
`

const LogoLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  position: relative;
`

const StyledLogo = styled.img`
  height: 40px;
`

const Languages = styled.div`
  margin-left: 20px;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 20px;
`

const StyledLanguage = styled.img`
  height: 20px;
  margin-left: 10px;
  &:hover {
    cursor: pointer;
  }
`

const Separator = styled.div`
  border-left: 1px solid black;
  height: 15px;
  margin: 0px 30px;
`

export const TopNavbar = () => {
  const { setLocale } = useLang()
  return (
    <StyledTopNavbar>
      <LogoLine>
        <NavLink to='/'>
          <StyledLogo src={SteelrockLogo} />
        </NavLink>
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
      </LogoLine>
      <Links>
        <Link to='/'>
          <FormattedMessage id = "topNavbar.home" />
        </Link>
        <Separator />
        <Link to={routes.realState}>
          <FormattedMessage id = "topNavbar.realState" />
        </Link>
        <Separator />
        <Link to={routes.renewableEnergy}>
          <FormattedMessage id = "topNavbar.renewableEnergy" />
        </Link>
        <Separator />
        <Link to={routes.contact}>
          <FormattedMessage id = "topNavbar.contact" />
        </Link>
      </Links>
    </StyledTopNavbar>
  )
}
