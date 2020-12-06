import React, {useState, useEffect} from 'react'
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

const LinkWrapper = styled.div`
  color: ${({isActive}) => isActive ? '#00adff' : 'black'};
`

const Link = styled(NavLink)`
  text-decoration: none;
  color: inherit;
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

  const [activeUrl, setActiveUrl] = useState(window.location.pathname)

  console.log('activeUrl', activeUrl)

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
        <LinkWrapper isActive={activeUrl==='/'}>
          <Link 
            to='/' 
            onClick={() => setActiveUrl('/')}
          >
            <FormattedMessage id = "topNavbar.home" />
          </Link>
        </LinkWrapper>
        <Separator />
        <LinkWrapper isActive={activeUrl==='/real-state'}>
          <Link
            to={routes.realState} 
            onClick={() => setActiveUrl('/real-state')}
          >
            <FormattedMessage id = "topNavbar.realState" />
          </Link>
        </LinkWrapper>
        <Separator />
        <LinkWrapper isActive={activeUrl==='/renewable-energy'}>
          <Link 
            to={routes.renewableEnergy} 
            onClick={() => setActiveUrl('/renewable-energy')}
          >
            <FormattedMessage id = "topNavbar.renewableEnergy" />
          </Link>
        </LinkWrapper>
        <Separator />
        <LinkWrapper isActive={activeUrl==='/contact'}>
          <Link 
            to={routes.contact} 
            onClick={() => setActiveUrl('/contact')}
          >
            <FormattedMessage id = "topNavbar.contact" />
          </Link>
        </LinkWrapper>
      </Links>
    </StyledTopNavbar>
  )
}
