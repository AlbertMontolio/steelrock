import React from 'react'
import styled from 'styled-components'

const StyledExplanation = styled.div`
`

const Header = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
`

const Company = styled.div`
  font-weight: bold;
  color: #083D77;
`

const About = styled.div`

`

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const Text = styled.div`
  padding: 10px;
  width: 400px;
  line-height: 1.5;
`

export const Explanation = () => {
  return (
    <StyledExplanation>
      <Header>
        <Company>
          STEELROCK Family Office
        </Company>
        <About>
          - About
        </About>
      </Header>
      <TextWrapper>
        <Text>
          Our core shareholdings are in conservative companies in sectors such as real estate development, real estate management and the development and management of power plants driven by renewable energies. We do not shy away from new concepts and emerging markets! While we dive deeper and deeper into the world of cryptocurrencies, we support our own start-up ideas as well as new founders in their efforts with experience and financial means. 
        </Text>
      </TextWrapper>
    </StyledExplanation>
  )
}
