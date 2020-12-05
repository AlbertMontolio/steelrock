import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

const StyledExplanation = styled.div`
  margin-bottom: 60px;
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
  font-size: 20px;
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
          <FormattedMessage id = "home.explanation" />
        </Text>
      </TextWrapper>
    </StyledExplanation>
  )
}
