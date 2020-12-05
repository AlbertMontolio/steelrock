import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import BlurryImg from '../../../images/hamburg.jpg'

const StyledGallery = styled.div`
  display: flex;
  align-items: center;
  background-image: url(${BlurryImg});
  background-size: 100% auto;
  height: 80vh;
  position: relative;
`

const Left = styled.div`
  color: white;
  width: 50%;
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
  return (
    <StyledGallery>
      <Left>
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
