import React from 'react'
import styled from 'styled-components'
import CraneImg from '../../images/crane.jpg'
import { FormattedMessage } from 'react-intl'
import { useMediaQuery } from 'react-responsive'

const StyledRealState = styled.div`
`

const StyledBanner = styled.div`
  background-image: linear-gradient(rgba(255,255,255,.3),rgba(255,255,255,0.3)), url(${CraneImg});
  background-image: linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,0.4)), url(${CraneImg});
  background-size: cover;

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({isDesktopOrLaptop}) => isDesktopOrLaptop ? '60px 0px' : '60px 20px'};
  box-sizing: border-box;
`

const Content = styled.div`
  width: ${({isDesktopOrLaptop}) => isDesktopOrLaptop ? '400px' : '100%'};
`

const Text = styled.div`
  // color: black;
  color: white;
  line-height: 1.5;
  font-size: 20px;
`

const NameCompany = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 30px;
  color: white;
`

export const RealState = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })

  return (
    <StyledRealState>
      <StyledBanner>
        <Content isDesktopOrLaptop={isDesktopOrLaptop}>
          <NameCompany>
          <FormattedMessage id = "topNavbar.realState" />
          </NameCompany>
          <Text>
            <FormattedMessage id = "realState.text" />
          </Text>
        </Content>
      </StyledBanner>
    </StyledRealState>
  )
}
