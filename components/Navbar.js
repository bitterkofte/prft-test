import Link from 'next/link';
import React, { useState } from 'react'
import styled from "styled-components";
// import CV from '../public/assets/HasanTalhaCelik.pdf'
import { ImCross, ImMenu, ImLinkedin, ImGithub, ImMail4 } from "react-icons/im";

const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);
  function handleNav(){
    setNavMenu(!navMenu);
  }
  return (
    <div>
      <NavbarCont>

        <NavLeft>
          <NavLink href={"/"} font={"SofiaBlack"} size={"30px"} pad={"10px"}>bitterkofte</NavLink>
        </NavLeft>

        <NavRight>
          <NavLink href={"/"} pad={"10px"}>Contact Me</NavLink>
          <GoTo href="assets/HasanTalhaCelik.pdf" 
                alt="download"
                target="_blank"
                rel="noopener noreferrer"
                bgc={"#cdcd00"}
                pad={"10px"}>
                Download CV
          </GoTo>
        </NavRight>

        <NavMenu>
          <ImMenu onClick={handleNav} className='icon' size={40} color={"#ffffff"}/>
        </NavMenu>

      </NavbarCont>

      <DarkBG visible={navMenu}>
        <ExtendedContainer visible={navMenu}>
        <Extended>
          <ExtHead>
            <span style={{color: '#ffffff', fontSize: '30px'}}>Hasan</span>
            <ImCross onClick={handleNav} className='icon' size={32} color={"#ffffff"}/>
          </ExtHead>
          <ExtLinks>
            <NavLink href={"/"} font={"SofiaBold"} onClick={() => setNavMenu(false)}>Home</NavLink>
            <NavLink href={"/about"} font={"SofiaBold"} onClick={() => setNavMenu(false)}>About</NavLink>
            <NavLink href={"/contact"} font={"SofiaBold"} onClick={() => setNavMenu(false)}>Contact Me</NavLink>
            <GoTo href="assets/HasanTalhaCelik.pdf" 
                  alt="alt text"
                  target="_blank"
                  rel="noopener noreferrer"
                  bgc={"#cdcd00"}
                  pad={"10px"}
                  font={"SofiaBold"}>
                  Download CV
            </GoTo>
          </ExtLinks>
          <ExtFoot>
            <div className='flex'>
            <a
              href='https://github.com/bitterkofte'
              target='_blank'
              rel='noreferrer'>
              <ImLinkedin size={32} color={"#ffffff"}/>
            </a>
            <a
              href='https://github.com/bitterkofte'
              target='_blank'
              rel='noreferrer'>
              <ImGithub size={32} color={"#ffffff"}/>
            </a>
            <a
              href='hasantalhahtc@gmail.com'
              target='_blank'
              rel='noreferrer'>
              <ImMail4 size={32} color={"#ffffff"}/>
            </a>
            </div>
            <div className='copy'>&copy; Copyright 2023 Hasan Çelik. All rights reserved. • Privacy Policy</div>
          </ExtFoot>
        </Extended>
        </ExtendedContainer>
      </DarkBG>
    </div>
  )
}

export default Navbar

const NavbarCont = styled.div`
  width: 100%;
  display: flex;
  background-color: #282828;
  justify-content: space-between;
  align-items: center;  
`
const NavLeft = styled.div`
  display: flex;
  /* background-color: #007c5b; */
  padding: 10px;

  `
const NavRight = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px;
  @media(max-width: 700.001px){
    display: none;
  }
  `
const NavMenu = styled.div`
  padding: 10px;
  padding-right: 20px;
  .icon {
    cursor: pointer;
  }
  @media(min-width: 700.001px){
    display: none;
  }
`
const DarkBG = styled.div`
  /* display: ${({visible}) => visible ? "block" : "none"}; */
  /* position: fixed;
  width: 100%;
  top: 0;
  background-color: #00000094;
  height: 100vh; */
`
const ExtendedContainer = styled.div`
  /* display: inline-flex; */
  position: fixed;
  top: 0;
  right: ${({visible}) => visible ? "0" : "-100%"};
  height: 100vh;
  width: 80%;
  background-color: #006d83;
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  transition-duration: 500ms;
`
const Extended = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  /* padding: 20px; */
  justify-content: space-between;
  background-color: #5e2a7b;
`
const ExtHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  /* border: 1px solid #ff0000; */
  .icon {
    cursor: pointer;
  }
`
const ExtLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
  height: 50%;
`
const ExtFoot = styled.div`
  padding: 20px;
  .flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .copy {
    margin-top: 10px;
    color: #ffffff;
    font-size: 10px;
    text-align: center;
  }
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  background-color: ${({bgc}) => bgc || "#ffffff00"};
  font-family: ${({font}) => font || "Sofia"};
  font-size: ${({size}) => size || "20px"};
  padding: ${({pad}) => pad || "0px"};
  :link {
    transition: 400ms;
  }
  :hover {
    color: #666666;
    transition: 200ms;
  }
`
const GoTo = styled.a`
  text-decoration: none;
  color: #ffffff;
  background-color: ${({bgc}) => bgc || "#ffffff00"};
  font-family: ${({font}) => font || "Sofia"};
  font-size: ${({size}) => size || "20px"};
  padding: ${({pad}) => pad || "0px"};
`