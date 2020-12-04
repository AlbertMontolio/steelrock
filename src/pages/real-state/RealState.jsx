import React from 'react'
import styled from 'styled-components'
import CraneImg from '../../images/crane.jpg'

const StyledRealState = styled.div`
`

const StyledBanner = styled.div`
  background-image: linear-gradient(rgba(255,255,255,.3),rgba(255,255,255,0.3)), url(${CraneImg});
  background-image: linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,0.4)), url(${CraneImg});
  background-size: cover;

  width: 100%;
  height: calc(90vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  box-sizing: border-box;
`

const Content = styled.div`

`

const Text = styled.div`
  // color: black;
  color: white;
  line-height: 1.5;
  font-size: 20px;
`

const NameCompany = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 30px;
  color: white;
`

export const RealState = () => {
  return (
    <StyledRealState>
      <StyledBanner>
        <Content>
          <NameCompany>
            Name company
          </NameCompany>
          <Text>
          Due to the 100 percent
          stake in the Connaught
          Capital Group, the family 
          office is significantly invested in
          real estate development and 
          management. In the past years the
          focus of the company was on the
          construction of residential properties in
          Northern Germany. The real estate types are
          diverse, ranging from terraced houses, micro
          apartments to vacation homes. Connaught has
          been able to position itself through various projects 
          such as hotels or gas stations with connected
          gastronomy along freeways across Europe.
          </Text>
        </Content>

      </StyledBanner>
    </StyledRealState>
  )
}
