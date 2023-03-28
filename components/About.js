import Image from 'next/image'
import React from 'react'
import styled, {css} from "styled-components";

import Me from '../public/assets/me.jpg'

const About = () => {
  return (
    <Container id='about'>
      <Grid>
        <Title>About</Title>

        <ImageCon>
          <Image src={Me} alt='/' id='img'/>
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
      </Grid>
    </Container>
  )
}

export default About

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  /* padding: 16px 20px; */
  @media (min-width: 768px){
    height: 100vh;
  }
`
const Grid = styled.div`
  max-width: 1240px;
  /* margin: auto; */
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 10px;
  @media (min-width: 768px){
    /* display: grid; */
  }

`
const Title = styled.div`
  letter-spacing: 3px;
  text-transform: uppercase;
  font-size: 30px;
  color:  #8501e1;
  border: 2px solid #ff0000;
`
const ImageCon = styled.div`
  border: 2px solid #ff0000;
  /* width: 100%; */
  /* height: auto; */
  border-radius: 20px;
  display: flex;
  /* align-items: center;
  justify-content: center; */
  padding: 10px;
  /* --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); */
   #img {
    border-radius: 50px;
    border: 2px solid #ff0000;
    width: 50%;
    height: auto;
  }
`
const Desc = styled.div`
  border: 2px solid #ff0000;
`