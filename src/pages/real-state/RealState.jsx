import React from 'react'
import styled from 'styled-components'
import CraneImg from '../../images/crane.jpg'
import { FormattedMessage } from 'react-intl'

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
            <FormattedMessage id = "realState.text" />
          </Text>
        </Content>

      </StyledBanner>
    </StyledRealState>
  )
}
