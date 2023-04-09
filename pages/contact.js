import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { BiMailSend } from "react-icons/bi";
// import { Techs } from '@component/techs'

const contact = () => {
  return (
    <Container>
      <A
        href='mailto:hasantalhahtc@gmail.com'
        target='_blank'
        rel='noreferrer'>
        <span>Mail Me</span>
        <BiMailSend size={30} id='ico'/>
      </A>
    </Container>
  )
}

export default contact

const Container = styled.div`
  /* margin-top: 100px; */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const A = styled.a`
  /* display: block;
  vertical-align: middle; */
  display: flex;
  align-items: center;
  gap: 20px;
  color: #000000;
  border: 5px solid #000000;
  border-radius: 20px;
  font-family: SofiaBlack;
  font-size: 30px;
  padding: 20px;
  text-decoration: none;

  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  #ico {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  :hover #ico, :focus #ico, :active #ico{
    -webkit-transform: translateX(4px);
    transform: translateX(4px);
  }
  :hover {
    color: #8501e1;
    border-color: #8501e1;
    transition: 700ms;
  }
`

// .hvr-icon-forward {
//   display: inline-block;
//   vertical-align: middle;
//   -webkit-transform: perspective(1px) translateZ(0);
//   transform: perspective(1px) translateZ(0);
//   box-shadow: 0 0 1px rgba(0, 0, 0, 0);
//   -webkit-transition-duration: 0.1s;
//   transition-duration: 0.1s;
// }


// .hvr-icon-forward .hvr-icon {
//   -webkit-transform: translateZ(0);
//   transform: translateZ(0);
//   -webkit-transition-duration: 0.1s;
//   transition-duration: 0.1s;
//   -webkit-transition-property: transform;
//   transition-property: transform;
//   -webkit-transition-timing-function: ease-out;
//   transition-timing-function: ease-out;
// }


// .hvr-icon-forward:hover .hvr-icon, .hvr-icon-forward:focus .hvr-icon, .hvr-icon-forward:active .hvr-icon {
//   -webkit-transform: translateX(4px);
//   transform: translateX(4px);
// }