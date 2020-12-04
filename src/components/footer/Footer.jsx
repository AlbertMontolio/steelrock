import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
`

const Block = styled.div`
  width: 50%;
  padding: 80px 90px 80px 45px;
`

const Left = styled(Block)`
`

const Right = styled(Block)`
`

const Company = styled.div`
  display: flex;
  align-items: center;
`

const Name = styled.div`
  font-size: 18px;
  margin-left: 20px;
`

const AddressWrapper = styled.div`
  margin-top: 40px;
`

const AddressItem = styled.div`
  margin-bottom: 5px;
`

const PhoneWrapper = styled.div`
  margin-top: 10px;
`

const PhoneItem = styled.div`
  margin-botom: 5px;
`

const SendMessageWrapper = styled.div`
`

const SendMessage = styled.div`
  margin-bottom: 10px;
`

const Email = styled.a`
  font-size: 20px;
  font-weight: bold;
  color: white;
`

export const Footer = () => {
  return (
    <StyledFooter>
      <Left>
        <Company>
          <div>
            icon
          </div>
          <Name>
            STEELROCK Family Office
          </Name>
        </Company>
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
        <PhoneWrapper>
          <PhoneItem>
            +49 (0) 40 300882223
          </PhoneItem>
        </PhoneWrapper>
      </Left>
      <Right>
        <SendMessageWrapper>
          <SendMessage>
            Send us a message:
          </SendMessage>
          <Email href="mailto:info@steelrock.de">
            info@steelrock.de
          </Email>
        </SendMessageWrapper>
      </Right>
    </StyledFooter>
  )
}
