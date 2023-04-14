import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import { RxDoubleArrowUp } from 'react-icons/rx';

const Footer = () => {
  return (
    <Wrapper>
      <FooterCard>
        <div id='flex'>
          <Image id='logo' alt='BK' src={'/../public/assets/bk-low.png'} width={400} height={400} />
          <div id='mid'>
            <div>Hasan Talha Çelik</div>
            <div id='light'>İstanbul, TR</div>
          </div>
          <div id='right'>
            <Link href={'/'}>
              <RxDoubleArrowUp id='up' size={25} />
            </Link>
          </div>
        </div>
      </FooterCard>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.div`
  position:fixed;
  bottom: 0px;
  width: 100%;
  /* backdrop-filter: blur(10px); */
  background-color: #eeeeee00;
  filter: drop-shadow(0px 6px 3px rgba(50, 50, 0, 0.5));

  @media (max-width: 700px){
    display: none;
  }
`

const FooterCard = styled.div`
  display: flex;
  align-items: center;
  position:fixed;
  bottom: 0px;
  width: 100%;
  
  clip-path: circle(45px at 58px 56px);
  background-color:#000000;
  /* backdrop-filter: blur(10px); */
  transition: all ease-in-out .5s;
  box-shadow: 0px 3px 9px rgb(0, 0, 0);

  &:hover, &:focus{
    clip-path: circle(75%);
    border-top-left-radius:20px;
    border-top-right-radius:20px;
    background:#000000cb;
  }

  #logo {
    width: 60px;
    height: auto;
  }

  #flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:30px 30px;
    color: #ffffff;

    #mid {
      font-family: SofiaBlack;
      text-align: center;
      #light {
        font-family: SofiaExtraLight;
        margin-top: 5px;
      }
    }

    #right {
      #up{
        color: #ffffff;
        :active{
          color: #8501e1;
        }
      }
    }
  }
`