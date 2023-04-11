import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Thumbnail from '../../public/assets/bk-wide.png'

const index = () => {
  return (
    <Container>
      <Image alt='logo' src={Thumbnail} id='tn' priority />
      <Image alt='logo2' src={Thumbnail} id='lg' priority />
    </Container>
  )
}

export default index

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  height: 100vh;
  width: 100%;
  margin: 120px 0;

  #tn {
    width: 70%;
    height: auto;
  }
  #lg {
    width: 450px;
    /* height: 600px; */
    object-fit: cover;
  }
`