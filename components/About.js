import Image from 'next/image'
import React from 'react'
import styled, {css} from "styled-components";

import Me from '../public/assets/me.jpg'

const About = () => {
  return (
    <Container id='about'>
      <Grid>
        <Title>About</Title>
        <Flex>

        <ImageCon>
          <div id='frame'>
          <Image src={Me} alt='/' id='img'/>
          </div>
        </ImageCon>

        <Desc>
          <p>I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
        </Desc>
        </Flex>
      </Grid>
    </Container>
  )
}

export default About

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 16px 20px; */
  height: 100vh;
  @media (min-width: 768px){
    height: 100vh;
  }
`
const Grid = styled.div`
  max-width: 1240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`
const Flex = styled.div`
  /* max-width: 1240px; */
  /* margin: auto; */
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 10px;
  @media (max-width: 750px){
    flex-direction: column;
  }

`
const Title = styled.div`
  letter-spacing: 3px;
  text-transform: uppercase;
  font-size: 30px;
  color:  #8501e1;
`
const ImageCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  #frame {
    display: flex;
    justify-content: center;
    align-items: center;    
  }
  #img {
    /* border-radius: 50px; */
    border: 2px solid #bcbcbc;
    background-color: #e3e3e3;
    padding: 10px;
    width: 60%;
    height: auto;

    box-shadow: 0 4px 8px 1px rgba(0, 0, 0, 0.2);
  }
`
const Desc = styled.div`
  width: 70%;
  padding: 25px 40px;
  box-shadow: 0 4px 8px 1px rgba(0, 0, 0, 0.2);
  /* background-color: #ed9d9d; */
  p{
    text-align: justify;
  }
`