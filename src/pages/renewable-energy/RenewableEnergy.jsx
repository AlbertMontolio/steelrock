import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import PhotovoltaicImg from '../../images/photovoltaic.jpg'

const StyledRenewableEnergy = styled.div`
`

const StyledBanner = styled.div`
  background-image: linear-gradient(rgba(255,255,255,.3),rgba(255,255,255,0.3)), url(${PhotovoltaicImg});
  background-image: linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,0.4)), url(${PhotovoltaicImg});
  background-size: cover;

  width: 100%;
  height: calc(90vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`

const GrayBox = styled.div`
  background-color: rgba(230,230,230,0.8);
  width: 400px;
  padding: 40px 20px;
`

const CompanyWrapper = styled.div`
  font-weight: bold;
  font-size: 30px;
`

const Text = styled.div`
  line-height: 1.5;
  margin-top: 20px;
`

export const RenewableEnergy = () => {
  return (
    <StyledRenewableEnergy>
      <StyledBanner>
        <GrayBox>
          <CompanyWrapper>
            Name Company
          </CompanyWrapper>
          <Text>
            <FormattedMessage id = "renewableEnergy.text" />
          </Text>
        </GrayBox>
      </StyledBanner>
    </StyledRenewableEnergy>
  )
}
