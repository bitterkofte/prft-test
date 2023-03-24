import Link from 'next/link';
import React from 'react'
import styled from "styled-components";

const MainMenu = () => {
  return (
    <FlexBox>
    <MenuContainer>
      <GifDiv></GifDiv>
      <GifLink href={"/about"}>About</GifLink>
      <GifDiv></GifDiv>
      <GifLink href={"/contact"}>Contact Me</GifLink>
      <GifDiv></GifDiv>
      <GifLink href={"/about"}>Projects</GifLink>
      <GifDiv></GifDiv>
      <GifLink href={"/contact"}>Send Me</GifLink>
      <GifDiv></GifDiv>
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
  max-width: 600px;
  /* align-content: stretch; */
  /* height: 80vh; */
`;

const GifLink = styled(Link)`
  display: flex;
  padding: 60px;
  background-color: orange;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 20px;
  font-family: SofiaBold;
`
const GifDiv = styled.div`
  display: flex;
  padding: 60px;
  background-color: green;
  flex-grow: 1;

`