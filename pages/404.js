import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import FoF from '../public/assets/404.svg'

const Blank = () => {
  return (
    <Img>
      <Image src={FoF} alt='404' id='img' />
    </Img>
  )
}

export default Blank

const Img = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  #img {
    width: 50%;
    height: auto;
    -webkit-user-drag: none;
    @media (max-width: 768px){
      width: 70%;
    }
  }
`
