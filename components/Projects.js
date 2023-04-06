import React from 'react'
import styled, {css} from 'styled-components'
import { Projs } from '@component/proj'
import Image from 'next/image'
import FancyNavigate from './FancyNavigate'

const Projects = () => {
  return (
    <Container id='projects'>
      <Grid>
      <Title>PROJECTS</Title>
      <Flexbox>
        {Projs.map((i) => {
          return(
            <Project key={i.id}>
              <Image alt='project' src={i.src} id='img' width={400} height={400} draggable="false"/>
              <div id='flex'>
                <div>
                  <div id='title'>{i.name}</div>
                  <div id='desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</div>
                </div>
                <Materials>
                  {i.mats.map((m, index) => {
                    return (
                      <Mat key={index}>{m}</Mat>
                    )
                  })}
                </Materials>
              </div>
            </Project>
          )
        })}
        
      </Flexbox>
      <FancyNavigate>And Much More On Github</FancyNavigate>
      </Grid>
    </Container>
  )
}

export default Projects

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  /* background-color: #ff7979; */
  @media (max-width: 768px){
    margin: 90px 0px;
    margin-top: 150px;
  }
`
const Grid = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
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
const Project = styled.div`
  display: flex;
  /* position: relative; */
  justify-content: space-between;
  /* align-items: center; */
  gap: 20px;
  /* width: 40%; */
  min-width: 250px;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px 1px rgba(0, 0, 0, 0.2);
  transition: transform .2s;
  user-select: none;
  :hover {
    transform: scale(1.01);
  }
  #flex {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  #title {
    font-family: SofiaBold;
    font-size: 25px;
    margin-bottom: 5px;
  }
  #desc {
    text-align: justify;
  }

  #img {
    width: 200px;
    height: auto;
    object-fit: contain;
  }

  @media (max-width: 768px){
    flex-direction: column;
    #img{align-self:center;}
    #flex{gap: 20px;}
  }
`

const Materials = styled.div`
  display: flex;
  /* justify-content: space-evenly; */
  align-self: flex-end;
  gap: 10px;
  @media (max-width: 768px){
    /* justify-content: ; */
    flex-wrap: wrap;
    justify-content: flex-end;
  }
`
const Mat = styled.div`
  padding: 3px 5px;
  color: #3f3f3f;
  background-color: #e8e8e8;
  border-radius: 10px;
  border: 1.5px solid #3f3f3f;
`