import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { useMediaQuery } from 'react-responsive'
import { NavLink } from 'react-router-dom'

import { SquareLogo } from '../../components/square-logo/SquareLogo'

import { routes } from '../../config'

const StyledFooter = styled.div`
  background-color: black;
  color: white;
  display: flex;
  flex-direction: ${({isDesktopOrLaptop}) => isDesktopOrLaptop ? 'row' : 'column'};
  align-items: center;
`

const Block = styled.div`
  width: 50%;
  padding: 80px 90px 80px 45px;
`

const Left = styled(Block)`
`

const Right = styled(Block)`
  padding-top: ${({isDesktopOrLaptop}) => isDesktopOrLaptop ? '80px' : '0px'};
`

const Company = styled.div`
  display: flex;
  align-items: center;
`

const Name = styled.div`
  font-size: 18px;
  margin-left: 10px;
`

const AddressWrapper = styled.div`
  margin-top: 40px;
`

const AddressItem = styled.div`
  margin-bottom: 5px;
`

const PhoneWrapper = styled.div`
  margin-top: 10px;
`

const PhoneItem = styled.div`
  margin-botom: 5px;
`

const SendMessageWrapper = styled.div`
`

const SendMessage = styled.div`
  margin-bottom: 10px;
  margin-top: 30px;
`

const Email = styled.a`
  font-size: 20px;
  font-weight: bold;
  color: white;
`

const  StyledLinks = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  margin-bottom: 10px;
  &:hover {
    color: rgb(150,150,150);
  }
`

export const Footer = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })

  const logoSize = isDesktopOrLaptop ? '16px' : '22px'

  return (
    <StyledFooter isDesktopOrLaptop={isDesktopOrLaptop}>
      <Left>
        <Company>
          <SquareLogo size={logoSize} />
          <Name>
            STEELROCK Family Office
          </Name>
        </Company>
        <AddressWrapper>
          <AddressItem>
            Borselstraße 16a
          </AddressItem>
          <AddressItem>
            22675 Hamburg
          </AddressItem>
          <AddressItem>
            Germany
          </AddressItem>
        </AddressWrapper>
        <PhoneWrapper>
          <PhoneItem>
            +49 (0) 40 300882223
          </PhoneItem>
        </PhoneWrapper>
      </Left>
      <Right isDesktopOrLaptop={isDesktopOrLaptop}>
        <SendMessageWrapper>
          <StyledLinks>
            <StyledLink to={routes.impressum}>
              Impressum
            </StyledLink>
            <StyledLink to={routes.datenSchutz}>
              Datenschutz
            </StyledLink>
          </StyledLinks>
          <SendMessage>
            <FormattedMessage id = "footer.sendUs" />
          </SendMessage>
          <Email href="mailto:info@steelrock.de">
            info@steelrock.de
          </Email>
        </SendMessageWrapper>
      </Right>
    </StyledFooter>
  )
}
