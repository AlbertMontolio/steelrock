import React from 'react'
import styled from 'styled-components'

import SolarImg from '../../../images/solar.jpg'

const StyledBanner = styled.div`
  background-image: url(${SolarImg});
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledText = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #083D77;
`

export const Banner = () => {
  return (
    <StyledBanner>
      <StyledText>
        Investing in a sustainable future for the next generations.
      </StyledText>
    </StyledBanner>
  )
}
