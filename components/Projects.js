import React from 'react'
import styled, {css} from 'styled-components'
import { Techs } from '@component/techs'
import Image from 'next/image'

const Projects = () => {
  return (
    <Container>
      <Grid>
      <Title>PROJECTS</Title>
      <Flexbox>
        {Techs.map((i) => {
          return(
            <Skill key={i.id}>
              <Image src={i.src} id='img' width={100} height={100} draggable="false"/>
              <div id='flex'>
                <div id='title'>{i.name}</div>
                <div id='desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</div>
              </div>
            </Skill>
          )
        })}
        
      </Flexbox>
      </Grid>
    </Container>
  )
}

export default Projects

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

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
  gap: 20px;
  width: 40%;
  min-width: 250px;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px 1px rgba(0, 0, 0, 0.2);
  transition: transform .2s;
  user-select: none;
  :hover {
    transform: scale(1.05);
  }

  #title {
    font-family: SofiaBold;
    font-size: 20px;
    margin-bottom: 5px;
  }
  #desc {
    text-align: justify;
  }

  #img {
    width: 48px;
    height: auto;
    object-fit: contain;
  }
`