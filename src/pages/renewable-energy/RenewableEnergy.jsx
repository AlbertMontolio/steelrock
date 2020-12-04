import React from 'react'
import styled from 'styled-components'
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
            Due to the 100 percent stake in the Milvio Energy Group, the family office is invested in renewable energies. With this investment the investors commit themselves to a sustainable strategy. Renewable energy sources are particularly interesting because of their secure returns and the increasing demand for ecological electricity. Milvio deals with photovoltaic roof plants, photovoltaic ground field plant and wind power plants regardless of their size.
          </Text>
        </GrayBox>
      </StyledBanner>
    </StyledRenewableEnergy>
  )
}
