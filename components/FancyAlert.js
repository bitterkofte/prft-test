import React from 'react'
import styled from 'styled-components'

const FancyAlert = ({text}) => {
  return (
    <AlertContainer>
      <div className='text'>{text}</div>
    </AlertContainer>
  )
}

export default FancyAlert

const AlertContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #00000068;
  display: flex;
  justify-content: center;
  align-items: center;
  .text {
    display: inline-block;
    padding: 8px 16px;
    z-index: 1;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 1px 2px 10px -3px rgb(0 0 0 / 70%);
    -webkit-box-shadow: 1px 2px 10px -3px rgb(0 0 0 / 70%);
    -moz-box-shadow: 1px 2px 10px -3px rgb(0 0 0 / 70%);
  }
`