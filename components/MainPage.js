import React, { useState } from 'react'
import styled, {css} from "styled-components";
import { ImCross, ImMenu, ImLinkedin, ImGithub, ImMail4, ImStackoverflow } from "react-icons/im";
import { FaTelegram, FaTelegramPlane, FaPhoneAlt } from "react-icons/fa";
import FancyAlert from './FancyAlert';

const MainPage = () => {
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const handleCopyAlert = () => {
    setIsAlertVisible(true);
    navigator.clipboard.writeText('+905054539566');
    console.log('COPIED');
    setTimeout(() => {
      setIsAlertVisible(false);
    }, 2000);
  }

  return (
    <Container id='home'>
      <Entry>
        <div>
          <Par>LET'S BUILD SOMETHING TOGETHER</Par>
          <H1>Hi I'm <Span>Hasan</Span></H1>
          <H1>A Front-End Web Developer</H1>
          <Par $alt>
            I’m focused on building responsive front-end web
            applications integrating back-end technologies.
          </Par>
          <Contact>
            <A
              href='https://www.linkedin.com/in/hasantalhacelik/'
              target='_blank'
              rel='noreferrer'>
              <ImLinkedin size={32}/>
            </A>
            <A
              href='https://github.com/bitterkofte'
              target='_blank'
              rel='noreferrer'>
              <ImGithub size={32} />
            </A>
            <A
              href='https://stackoverflow.com/users/21045770/bitterkofte'
              target='_blank'
              rel='noreferrer'>
              <ImStackoverflow size={32} />
            </A>
            <A
              href='tel:+905054539566'
              target='_blank'
              rel='noreferrer'
              id='phone'>
              <FaPhoneAlt size={32} />
            </A>
            <FaPhoneAlt id='desktop-phone' size={32} onClick={handleCopyAlert}/>
            <A
              href='https://t.me/bitterkofte'
              target='_blank'
              rel='noreferrer'>
              <FaTelegramPlane size={32} />
            </A>
            <A
              href='mailto:hasantalhahtc@gmail.com'
              target='_blank'
              rel='noreferrer'>
              <ImMail4 size={32}/>
            </A>
          </Contact>
          {isAlertVisible && <FancyAlert text={"Phone Number is Copied"}/>}
        </div>
      </Entry>
    </Container>
  )
}

export default MainPage

const Container = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Entry = styled.div`
  display: flex;
  /* max-width: 1240px; */
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  @media(max-width: 750px){
      width: 80%;
  }
`;

const Par = styled.p`
  padding: 20px 0;
  font-size: 20px;
  letter-spacing: 3px;
  color: #616161;
  ${props => props.$alt && css`
    color: #616161;
    margin: auto;
    @media(min-width: 640px){
      max-width: 70%;
    }
  `}
`;

const H1 = styled.h1`
  padding: 5px 0;
  font-size: 50px;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  max-width: 500px;
  margin: auto;
  padding: 15px 0;
  #phone {
    @media(min-width: 640px){
      display: none;
    }
  }
  #desktop-phone {
    @media(max-width: 640px){
      display: none;
    }
    :hover{
      color: #8501e1;
      transition: 400ms;
      cursor: pointer;
  }
  }
`;
const A = styled.a`
  color: black;
  :link{
    /* background-color: aqua ; */
    transition: 600ms;
  }
  :visited{
    color: black;
  }
  :hover{
    color: #8501e1;
    transition: 400ms;
  }
`

const Span = styled.span`
  color: #8501e1;
`;
