import React from 'react'
import styled from 'styled-components'

import { Banner } from './banner/Banner'
import { Explanation } from './explanation/Explanation'
import { Blurry } from './blurry/Blurry'

const StyledHome = styled.div`
`

export const Home = () => {
  return (
    <StyledHome>
      <Banner />
      <Explanation />
      <Blurry />
      <Footer />
    </StyledHome>
  )
}
