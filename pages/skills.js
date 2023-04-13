import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import {ProgLangs, WebTechs, MobTechs, DesTools} from '@component/techs'

const skills = () => {
  return (
    <SC>
      <Section>
        <div className='title'>Programming Languages</div>
        <Flexbox>
          {ProgLangs.map((i) => {
            return(
              <Skill key={i.id}>
                <Image alt='skill' src={i.src} class='img' width={100} height={100} draggable="false"/>
                <div>{i.name}</div>
              </Skill>
            )
          })}
        </Flexbox>
      </Section>

      <Section>
        <div className='title'>Web Technologies</div>
        <Flexbox>
          {WebTechs.map((i) => {
            return(
              <Skill key={i.id}>
                <Image alt='skill' src={i.src} class='img' width={100} height={100} draggable="false"/>
                <div>{i.name}</div>
              </Skill>
            )
          })}
        </Flexbox>
      </Section>

      <Section>
        <div className='title'>Mobile Technologies</div>
        <Flexbox>
          {MobTechs.map((i) => {
            return(
              <Skill key={i.id}>
                <Image alt='skill' src={i.src} class='img' width={100} height={100} draggable="false"/>
                <div>{i.name}</div>
              </Skill>
            )
          })}
        </Flexbox>
      </Section>

      <Section>
        <div className='title'>Design Tools</div>
        <Flexbox>
          {DesTools.map((i) => {
            return(
              <Skill key={i.id}>
                <Image alt='skill' src={i.src} class='img' width={100} height={100} draggable="false"/>
                <div>{i.name}</div>
              </Skill>
            )
          })}
        </Flexbox>
      </Section>
    </SC>
  )
}

export default skills

const SC = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin-top: 150px;
  /* margin: 100px 0px; */
`

const Section = styled.div`
  margin-bottom: 80px;
  /* border: 2px solid #8501e1;
  border-radius: 20px; */
  .title{
    font-size: 25px;
    font-family: SofiaBold;
    margin-bottom: 10px;
    text-align: center;
    color: #8501e1;
  }
`

const Flexbox = styled.div`
  /* background-color: #d14058; */
  padding: 20px;
  /* width: 80%; */
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
  /* width: 30%; */
  max-width: 350px;
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

  .img {
    width: 48px;
    max-width: 48px;
    max-height: 48px;
    min-height: 48px;
    height: auto;
    object-fit: contain;
  }
`