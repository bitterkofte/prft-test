import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import styled from "styled-components";
import gif1 from '../public/assets/giphy.webp'
import gif2 from '../public/assets/giphy2.webp'
import gif4 from '../public/assets/giphy4.webp'
import gif3 from '../public/assets/giphy3.gif'
// const gif1 = "../public/assets/giphy.webp"

const MainMenu = () => {
  return (
    <FlexBox>
    <MenuContainer>
      <GifDiv grow={3}>
        <ImgCont className='theone'>
          <Img src={gif1} fill />
        </ImgCont>
        {/* <ImgCont>
          <Img src={gif1} fill />
        </ImgCont> */}
      </GifDiv>

      <GifLink href={"/about"} grow={9}>
        <ImgCont>
          <Img src={gif2} fill />
        </ImgCont>
        <Header>About</Header>
      </GifLink>

      <GifDiv grow={5}>
        <ImgCont>
          <Img src={gif3} fill />
        </ImgCont>
      </GifDiv>

      <GifLink href={"/contact"} grow={20}>
        <ImgCont>
          <Img src={gif4} fill />
        </ImgCont>
        <Header>Projects</Header>
      </GifLink>

      <GifDiv grow={5}>
        <ImgCont>
          <Img src={gif3} fill />
        </ImgCont>
      </GifDiv>

      <GifDiv grow={50}>
        <ImgCont>
          <Img src={gif1} fill />
        </ImgCont>
      </GifDiv>

      <GifLink href={"/about"} grow={30}>
        <ImgCont>
          <Img src={gif2} fill />
        </ImgCont>
        <Header>Contact</Header>
      </GifLink>

      <GifDiv grow={10}>
        <ImgCont>
          <Img src={gif3} fill />
        </ImgCont>
      </GifDiv>

      <GifLink href={"/contact"} grow={30}>
        <ImgCont>
          <Img src={gif4} fill />
        </ImgCont>
        <Header>Download CV</Header>
      </GifLink>
      
      <GifDiv grow={30}>
        <ImgCont>
          <Img src={gif2} fill />
        </ImgCont>
      </GifDiv>
    </MenuContainer>
    </FlexBox>
  )
}

export default MainMenu

const FlexBox = styled.div`
  display: flex;
  height: 100vh;
  background-color: #4b4b4b;
  /* padding: 20px; */
  justify-content: center;
  align-items: center;
`;
const MenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 1000px;
  padding: 40px;
  /* align-content: stretch; */
  /* height: 80vh; */
`;

const GifLink = styled(Link)`
  display: flex;
  background-color: orange;
  /* flex-grow: ${({grow}) => grow || "1"}; */
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: 20px;
  overflow: hidden;
  :hover {
    color: #006fdd;
    transition: 400ms;
  }
`
const GifDiv = styled.div`
  display: flex;
  background-color: green;
  /* flex-grow: ${({grow}) => grow || "1"}; */
  flex-grow: 1;
  border-radius: 20px;
  overflow: hidden;
`
const ImgCont = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  /* height: 100%; */
  padding: 60px;
  /* background-color: red; */
`
const Img = styled(Image)`
  /* width: 100%; */
  object-fit: cover;
  /* opacity: 0.5;
  .theone {
    position: absolute;
    :hover {
      opacity: 0;
    }
  } */
`
const Header = styled.div`
  position: absolute;
  font-size: 20px;
  font-family: SG-Black25;
  /* text-shadow: #ffcc00 0 0 4px; */
  /* filter: drop-shadow(0 0 2px white); */
  -webkit-text-stroke: 0.3px white;
`