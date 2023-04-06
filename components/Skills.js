import React from 'react'
import styled, {css} from 'styled-components'
import { Techs } from '@component/techs'
import Image from 'next/image'
import FancyNavigate from './FancyNavigate'

const Skills = () => {
  return (
    <Container id='skills'>
      <Grid>
      <Title>SKILLS</Title>
      <Flexbox>
        {Techs.map((i) => {
          return(
            <Skill key={i.id}>
              <Image alt='skill' src={i.src} id='img' width={100} height={100} draggable="false"/>
              <div>{i.name}</div>
            </Skill>
          )
        })}
      </Flexbox>
      <FancyNavigate>See More</FancyNavigate>
      </Grid>
    </Container>
  )
}

export default Skills

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #97ff97; */

  @media (min-width: 768px){
    height: 100vh;
  }
`
const Grid = styled.div`
  max-width: 1240px;
  /* height: 100%;
  background-color: #f8b4f8; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`
const Title = styled.div`
  letter-spacing: 3px;
  text-transform: uppercase;
  font-size: 30px;
  color:  #8501e1;
`
const Flexbox = styled.div`
  /* background-color: #d14058; */
  padding: 20px;
  width: 80%;
  display: flex;
  /* flex-flow: column; */
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 22px;
`
const Skill = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  min-width: 250px;
  padding: 20px;
  border-radius: 20px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px 1px rgba(0, 0, 0, 0.2);
  transition: transform .2s;
  user-select: none;
  :hover {
    transform: scale(1.03);
  }

  #img {
    width: 48px;
    height: auto;
    object-fit: contain;
  }
`