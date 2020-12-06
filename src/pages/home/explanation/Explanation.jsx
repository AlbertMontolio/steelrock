import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { useMediaQuery } from 'react-responsive'

const StyledExplanation = styled.div`
  margin-top: ${({isDesktopOrLaptop}) => isDesktopOrLaptop ? '40px' : '0px'};
  margin-bottom: ${({isDesktopOrLaptop}) => isDesktopOrLaptop ? '100px' : '60px'};
  padding: 0px ${({isDesktopOrLaptop}) => isDesktopOrLaptop ? '300px' : '20px'};
`

const Company = styled.div`
  font-weight: bold;
  color: #083D77;
  margin-bottom: 20px;
  font-size: 24px;
`

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const Text = styled.div`
  line-height: 1.5;
  font-size: ${({isDesktopOrLaptop}) => isDesktopOrLaptop ? '20px' : '16px'};
`

export const Explanation = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })

  return (
    <StyledExplanation isDesktopOrLaptop={isDesktopOrLaptop}>
      <Company>
        STEELROCK Family Office
      </Company>
      <TextWrapper>
        <Text isDesktopOrLaptop={isDesktopOrLaptop}>
          <FormattedMessage id = "home.explanation" />
        </Text>
      </TextWrapper>
    </StyledExplanation>
  )
}
