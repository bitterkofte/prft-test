import React from 'react'
import styled from 'styled-components'
import { Techs } from '@component/techs'

const contact = () => {
  return (
    <Container>
      <div>{Techs[0].name}</div>
    </Container>
  )
}

export default contact

const Container = styled.div`
  /* margin-top: 100px; */
  display: flex;
  justify-content: center;
  align-items: center;
`