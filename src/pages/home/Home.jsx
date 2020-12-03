import React from 'react'
import styled from 'styled-components'

import { Banner } from './banner/Banner'
import { Explanation } from './explanation/Explanation'
import { Gallery } from './gallery/Gallery'

const StyledHome = styled.div`
`

export const Home = () => {
  return (
    <StyledHome>
      <div>
        top navbar
      </div>
      <Banner />
      <Explanation />
      <Gallery />
      <div>
        Footer
      </div>
    </StyledHome>
  )
}
