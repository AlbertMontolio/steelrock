import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { useMediaQuery } from 'react-responsive'

import BlurryDesktopImg from '../../../images/hamburg.jpg'
import BlurryMobileImg from '../../../images/hamburg_vertical.jpg'

const StyledGallery = styled.div`
  display: flex;
  align-items: center;
  background-image: url(${({isDesktopOrLaptop}) => isDesktopOrLaptop ? BlurryDesktopImg : BlurryMobileImg});
  background-size: 100% auto;
  height: 80vh;
  position: relative;
`

const Left = styled.div`
  color: white;
  width: ${({isDesktopOrLaptop}) => isDesktopOrLaptop ? '50%' : '100%'};
  background-color: rgb(8,61,119, 0.7);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledText = styled.div`
  padding: 40px;
  padding-bottom: 0px;
  line-height: 1.5;
  font-weight: bold;
  font-size: 20px;
`
const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 40px;
`
const StyledIcon = styled.div`
`

export const Blurry = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })

  return (
    <StyledGallery isDesktopOrLaptop={isDesktopOrLaptop}>
      <Left isDesktopOrLaptop={isDesktopOrLaptop}>
        <IconWrapper>
          <StyledIcon>
            icon
          </StyledIcon>
        </IconWrapper>
        <StyledText>
          <FormattedMessage id = "home.blurry" />
        </StyledText>
      </Left>
    </StyledGallery>
  )
}
