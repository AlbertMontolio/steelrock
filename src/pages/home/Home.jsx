import React from 'react'
import styled from 'styled-components'

import { Explanation } from './explanation/Explanation'

const StyledHome = styled.div`
  background-color: orange;
`

export const Home = () => {
  return (
    <StyledHome>
      <div>
        Home
      </div>
      <Explanation />
      <div>
        Footer
      </div>
    </StyledHome>
  )
}
