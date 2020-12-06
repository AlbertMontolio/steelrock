import React from 'react'
import styled from 'styled-components'

const StyledSquareLogo = styled.div`
  width: ${({size}) => size};
  height: ${({size}) => size};
  border: 5px solid;
`

export const SquareLogo = ({size = '40px'}) => {
  return (
    <StyledSquareLogo size={size}>
    </StyledSquareLogo>
  )
}
