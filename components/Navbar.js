import Link from 'next/link';
import React, { useState } from 'react'
import styled from "styled-components";
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
          <NavLink href={"/"} font={"SofiaBlack"} size={"30px"}>bitterkofte</NavLink>
        </NavLeft>

        <NavRight>
          <NavLink href={"/"}>Contact Me</NavLink>
          <NavLink href={"/"} bgc={"#cdcd00"} >Download CV</NavLink>
        </NavRight>

        <NavMenu>
          <ImMenu onClick={handleNav} className='icon' size={40} color={"#ffffff"}/>
        </NavMenu>

      </NavbarCont>
      <ExtendedContainer visible={navMenu}>
      <Extended>
        <ExtHead>
          <span style={{color: '#ffffff', fontSize: '30px'}}>Hasan</span>
          <ImCross onClick={handleNav} className='icon' size={32} color={"#ffffff"}/>
        </ExtHead>
        <ExtLinks>
          <NavLink href={"/"}>Home</NavLink>
          <NavLink href={"/"}>About</NavLink>
          <NavLink href={"/"}>Contact Me</NavLink>
          <NavLink href={"/"}>Download CV</NavLink>
        </ExtLinks>
        <ExtFoot>
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
        </ExtFoot>
      </Extended>
      </ExtendedContainer>
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
const ExtendedContainer = styled.div`
  display: ${({visible}) => visible ? "flex" : "none"};
  /* flex-direction: column; */
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 50%;
  /* padding: 20px; */
  background-color: #006d83;
  /* border: 10px solid red; */
  /* justify-content: space-between; */
`
const Extended = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* height: 100%; */
  margin: 20px;
  justify-content: space-between;
`
const ExtHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ff0000;
  .icon {
    cursor: pointer;
  }
`
const ExtLinks = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ff0000;

`
const ExtFoot = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid #ff0000;

`

const NavLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  background-color: ${({bgc}) => bgc || "#ffffff00"};
  font-family: ${({font}) => font || "Sofia"};
  font-size: ${({size}) => size || "20px"};
  padding: 10px;
  
`