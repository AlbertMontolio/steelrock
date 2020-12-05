import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import SolarImg from '../../../images/banner.jpg'

const StyledBanner = styled.div`
  background-image: url(${SolarImg});
  background-size: cover;
  width: 100%;
  height: calc(90vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledText = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: #083D77;
`

export const Banner = () => {
  return (
    <StyledBanner>
      <StyledText>
        <FormattedMessage id = "home.banner" />
      </StyledText>
    </StyledBanner>
  )
}
