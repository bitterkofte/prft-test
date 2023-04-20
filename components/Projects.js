import React from 'react'
import styled, {css} from 'styled-components'
import { Projs } from '@component/proj'
import Image from 'next/image'
import FancyNavigate from './FancyNavigate'
import Link from 'next/link'

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
                  <div id='desc'>{i.desc}</div>
                </div>
                <Materials>
                  {i.mats.map((m, index) => {
                    return (
                      <Mat key={index}>{m}</Mat>
                    )
                  })}
                </Materials>
              </div>
              <div className='overlay'>
                <h1>{i.name}</h1>
                <div className='flex-row'>
                  <Link id='link' href={i.link}>See the Code</Link>
                  {i.visit && <Link id='link' href={i.visit}>Visit</Link>}
                </div>
              </div>
            </Project>
          )
        })}
        
      </Flexbox>
      <FancyNavigate type="a" href="https://github.com/bitterkofte?tab=repositories">And Much More On Github</FancyNavigate>
      </Grid>
    </Container>
  )
}

export default Projects

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  margin-bottom: 90px;
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
  max-width: 800px;
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

  overflow:hidden;
  position:relative;
  .overlay{
    width:100%;
    height:100%;
    position:absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 35px;
    overflow:hidden;
    top:0;
    left:0;
    opacity:0;
    background-color:rgba(0,0,0,0.5);
    color: #ffffff;
    -webkit-transition:all .2s ease-in-out;
    transition:all .4s ease-in-out;
    :hover {
      opacity:1;
      filter:alpha(opacity=100);
      backdrop-filter: blur(5px);
    }
    .flex-row{
      display: flex;
      gap: 20px;
    }
    h1 {
      font-size: 50px;
    }
    #link {
      padding: 7px;
      border: 3px solid #ffffff;
      text-decoration: none;
      color: #ffffff;
      transition: 700ms;
      :hover{
        background-color: #57575782;
        border-radius: 10px;
      }
    }
  }

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
    min-width: 200px;
    height: auto;
    max-height: 200px;
    object-fit: cover;
    border-radius: 14px;
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
  margin-top: 30px;
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
  border-radius: 8px;
  border: 1.5px solid #3f3f3f;
  font-size: 13px;
`