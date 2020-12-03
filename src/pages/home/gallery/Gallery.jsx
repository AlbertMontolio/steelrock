import React from 'react'
import styled from 'styled-components'

const StyledGallery = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: orange;
`

const Left = styled.div`
  color: white;
  width: 300px;
  background-color: #083D77;
`

const StyledText = styled.div`
  padding: 10px;
`
const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 40px 0px;
`
const StyledIcon = styled.div`

`

export const Gallery = () => {
  return (
    <StyledGallery>
      <Left>
        <IconWrapper>
          <StyledIcon>
            icon
          </StyledIcon>
        </IconWrapper>
        <StyledText>
          Our company convinces with many years of experience in real estate investment, key knowledge in the photovoltaic industry and identifying new investment opportunities for further value development.
        </StyledText>
      </Left>
    </StyledGallery>
  )
}
