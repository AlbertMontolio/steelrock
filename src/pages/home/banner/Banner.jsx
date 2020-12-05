import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { useMediaQuery } from 'react-responsive'

import SolarImg from '../../../images/banner.jpg'

const StyledBanner = styled.div`
  background-size: cover;
  background-image: linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,0.8)), url(${SolarImg});
  background-image: linear-gradient(rgba(255,255,255,.1),rgba(255,255,255,1)), url(${SolarImg});
  width: 100%;
  height: calc(90vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledText = styled.div`
  font-size: ${({isDesktopOrLaptop}) => isDesktopOrLaptop ? '40px' : '30px'};
  font-weight: bold;
  color: #083D77;
  padding: 0px ${({isDesktopOrLaptop}) => isDesktopOrLaptop ? '100px' : '20px'};
`

export const Banner = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })

  return (
    <StyledBanner>
      <StyledText isDesktopOrLaptop={isDesktopOrLaptop}>
        <FormattedMessage id = "home.banner" />
      </StyledText>
    </StyledBanner>
  )
}
