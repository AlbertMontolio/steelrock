import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'

import { FormattedMessage } from 'react-intl'

const StyledContact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;
  min-height: ${({isDesktopOrLaptop}) => isDesktopOrLaptop ? '500px' : '20px'};
  padding: ${({isDesktopOrLaptop}) => isDesktopOrLaptop ? '0px' : '100px 20px'};
`

const Content = styled.div`
  width: ${({isDesktopOrLaptop}) => isDesktopOrLaptop ? '50%' : '100%'};
`

const Text = styled.div`
  font-size: 20px;
`

const Email = styled.div`
  font-weight: bold;
  font-size: 30px;
  margin-top: 20px;
`

const Phone = styled.div`
  font-weight: bold;
  font-size: 23px;
  margin-top: 20px;
`

const AddressWrapper = styled.div`
  margin-top: 40px;
`

const AddressItem = styled.div`
  font-size: 16px;
  margin-top: 5px;
`

export const Contact = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })

  return (
    <StyledContact>
      <Content isDesktopOrLaptop={isDesktopOrLaptop}>
        <Text>
          <FormattedMessage id = "contact.text" />
        </Text>
        <Email>
          info@steelrock.de
        </Email>
        <Phone>
          +49 (0) 40 300882223
        </Phone>
        <AddressWrapper>
          <AddressItem>
            Borselstraße 16a 
          </AddressItem>
          <AddressItem>
            22675 Hamburg
          </AddressItem> 
          <AddressItem>
            Germany
          </AddressItem>
        </AddressWrapper>
      </Content>
    </StyledContact>
  )
}
