import React from 'react'
import Link from 'next/link'
import styled, {css} from 'styled-components'

const FancyNavigate = ({children}) => {
  return (
    <Container href="/">
      {children}
    </Container>
  )
}

export default FancyNavigate

const Container = styled(Link)`
  padding: 15px 20px;
  color: #ffffff;
  background: linear-gradient(45deg ,#0077ff, 70%, #6600ff);
  border-radius: 20px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  transition: transform .2s;
  /* transition-duration: 200ms; */
  :hover {
    transform: scale(1.02);
    /* outline: 5px solid #ffffff; */
    /* transition-duration: 200ms; */
    
  }
`