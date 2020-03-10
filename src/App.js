import React,{useState} from "react";
import styled from "styled-components" ;
import { createGlobalStyle } from 'styled-components';
import avatar from './images/avatar.png';
import menu from './images/menu.png';
import gesture from './images/gesture.jpg';
import portfolio from './images/portfolio.png';
import undercontruction from './images/undercontruction.jpg';
import cpp from './images/c++.png'; 
import js from './images/js.png';
import sql from './images/sql.png';
import react from './images/react.png';

import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardIcon,
  CardFieldset,
  CardInput,
  CardOptionsItem,
  CardOptions,
  CardOptionsNote,
  CardButton,
  CardLink,
  CardImage
} from "./Card.js";

//===============================================
// This is my name written on top i.e on header
//===============================================

const KK = styled.h1`
color:white ;
display: flex;
justify-content:flex-start;
margin-right:auto;
font-size:30px;

font-family: "Varela Round"; 
font-size: 30px; 
font-style: normal; 
font-variant: normal; 
font-weight: 1000; 
line-height: 26.4px; 
@media screen and (max-width: 768px)  {
  font-size:20px;
}

` ;

//====================================================
// This is for titles like "Projects", "About Me" . 
//====================================================

const Titles = styled.h1`
color:white ;
display: flex;
justify-content:flex-start;
margin-right:auto;
font-size:30px;

font-family: "Varela Round"; 
font-size: 28px; 
font-style: normal; 
font-variant: normal; 
font-weight: 500; 
line-height: 26.4px; 

margin-left:20px;
margin-top:30px;
margin-bottom:10px;

text-shadow: -3px 2px 0.15em #f2471f ;

@media screen and (max-width: 768px)  {
  font-size:20px;
}

` ;



//========================
// This is Navbar Wrapper
//========================

const Navbar = styled.div`
  display: flex;
  
  justify-content: flex-end;
  align-items: center;  
  background-color: #424651;
  height: 3rem;
  background-image: linear-gradient(260deg, #2376ae 0%, #c16ecf 100%);
  -webkit-box-shadow:0 0 50px #c16ecf; 
  -moz-box-shadow: 0 0 50px #c16ecf; 
  box-shadow:0 0 50px linear-gradient(260deg, # 0%, #c16ecf 100%);
`;


//==================================================================
// This is for Navbar items links like "Blog", "Resumè", "Contacts"
//==================================================================
const NavbarItem = styled.a`
  font-size: 1rem;
  margin-right: 1rem;
  color: white;
  margin:0 0 1 0 ;
  padding:0;
  font-family: "Varela Round"; font-size: 24px; font-style: normal; font-variant: normal; font-weight: 700; line-height: 26.4px; 
  font-size:20px;
  font-weight:900;
  

  &:hover {
    opacity: 0.7;
    color: rgba(255, 255, 255, 1);
    cursor: pointer;
    
    
  } ;

  @media (max-width: 768px) {
    display:none;

  }

`;


//======================================
// This is for global styles like <body>
//=======================================
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    @import url('https://fonts.googleapis.com/css?family=Varela+Round');
font-family: "Varela Round"; font-size: 24px; font-style: normal; font-variant: normal; font-weight: 700; line-height: 26.4px; 
  };
  html {
    background-color: #1e1a1f;
  }
` ;


//===================================
// This is for paragraphs, (if any)
//===================================

const Para = styled.p`
font-family: "Varela Round";
text-align:left;
font-size: 17px;
font-weight:100;
color: #a29ba3	;
line-height: 1.6;
margin-left:18px;
`;
//=======================================
// This is for Logo on top left corner. 
//=======================================

const Logo = styled.img`
  width:60px;
  height: 55px;
  margin-right: 0px;

  @media screen and (max-width: 768px){
    width:47px;
    height: 45px;
    
  }

`;

//=======================================
// This is for programming lanhuege icons. 
//=======================================

const Language = styled.img`
  width:80px;
  height: 80px;
  margin-right: 50px;

  @media screen and (max-width: 768px){
    width:40px;
    height: 40px;
    
  }

`;


//==================================================================
// This is for Hamberger icon on right corner when viewed on mobile
//==================================================================

const Hamberger = styled.img`
@media screen and (min-width: 768px){
  display:none;
  
}
 
  @media screen and (max-width: 768px){
    width:50px;
    height: 50px;
    filter:brightness(200%);
    
  }

`;



const SideCard = styled.div`

  @media screen and (max-width:768px){
  display: ${prop=>prop.showsidebar ?'relative':'none'}; 
  overflow: hidden;
  padding: 0 0 32px;
  margin-left: auto;
  margin-bottom: -5000px;
  padding-bottom: 5000px;
  flex-direction:column;
  z-index:1;
  position:fixed;
  right:0%;
  
  backdrop-filter: blur(6px);

  transition: background 0.5s linear;
  -moz-transition: background 0.5s linear; /* Firefox 4 */
  -webkit-transition: background 0.5s linear; /* Safari and Chrome */
  -o-transition: background 0.5s linear; /* Opera */
  -ms-transition: background 0.5s linear; /* Explorer 10 */

  height:100%;
  width:260px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
  border-radius: 5px;
  }
` ;


//:::::::::::::::::





const SideButton = styled.button`
display:none;
@media screen and (max-width:768px){
  display: block;
  width: 100%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  background-color: #e5195f;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, .08);
  cursor: pointer;
  background-image: linear-gradient(260deg, #2376ae 0%, #c16ecf 100%);
  margin-top: 14%;

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, .16);
    transform: translate(0, -5px);
  }
}
`



//:::::::::::::::

const CardHolder = styled.div`
margin:'20px';
 display:"flex";

`;




export default function App() {

  const [isDrawer, setDrawer] = useState(false) ; 

  const flipDrawer = function () {
    setDrawer (!isDrawer) ;
    console.log(isDrawer);
  };


  return (
    <div>

      <GlobalStyle greenColor />
      <Navbar>
      <Logo src={avatar} >
      </Logo>
      <KK>Krishankant Ray</KK>
      <Hamberger src={menu} onClick={flipDrawer} />
        <NavbarItem>Blog</NavbarItem>
        <NavbarItem>Resumè</NavbarItem>
        <NavbarItem>Contact</NavbarItem>
      </Navbar>
      <SideCard showsidebar={isDrawer}> 
        
          <SideButton type='button'>Blogs</SideButton>
          <SideButton type='button'>Resumè</SideButton>
          <SideButton type='button'>Contact</SideButton>
       
      </SideCard>
      <Titles>About Me</Titles>
      <Para>
        Working as an Application Support Engineer at <b><font color='#389dd7'>C</font>VENT</b>, Gurgaon. 
        Here, I works on SQL, noSQL and RESTful API based reporting framework and responsible for finding troubleshooting appication bugs.
        <br />
        Just in case if you are intrested in knowing a little about my background, then here it is. Starting from school, during primary
        schooling days I used to be among top three rankers of my class. And my secondary schooling was spent mostly preparing for engineering
        entrance exams ( JEE Mains and Advance). Unfortunately, I could not even the clear the cutoff for IITs, but luckily I got admission in 
        a private college, Galgotias University, and I persued my engineering in Computer Science from there. After completing from graduation, I got 
        a job at Cvent as an Application Support Engineer. I learnt many things at Cvent, like how code is pushed to production and how its rolled back 
        in case of high severity issues. And I am currently working at this company. 
        <br/>
        And that's it about me. 😊
      </Para>
      <div>
      <Language src={cpp} />
      <Language src={js} />
      <Language src={react} />
      <Language src={sql} />
      </div>
      <Titles>Projects</Titles>
      <br />

      <div style={{margin:'20px', display:"flex", overflow:"auto", scrollbarColor:'red'}}>
        
      <CardWrapper>
        <CardHeader>
          <CardHeading>Virtual Mouse</CardHeading>
        </CardHeader>
<CardImage src={gesture} />
        <CardBody>
          <CardFieldset>
            <CardOptionsNote>This Project is blah blah</CardOptionsNote>
          </CardFieldset>
          <CardFieldset>
            <CardButton type="button">See Project</CardButton>
          </CardFieldset>
        </CardBody>
      </CardWrapper>
      <CardWrapper>
        <CardHeader>
          <CardHeading>Portfolio Site</CardHeading>
        </CardHeader>
        <CardImage src={portfolio} /> 
        <CardBody>
          <CardFieldset>
            <CardOptionsNote>This Project is blah blah</CardOptionsNote>
          </CardFieldset>
          <CardFieldset>
            <CardButton type="button">See Project</CardButton>
          </CardFieldset>
        </CardBody>
      </CardWrapper>
      <CardWrapper>
        <CardHeader>
          <CardHeading>YouTube Downloader</CardHeading>
        </CardHeader>
<CardImage src={undercontruction} />
        <CardBody>
          <CardFieldset>
            <CardOptionsNote>This Project is blah blah</CardOptionsNote>
          </CardFieldset>
          <CardFieldset>
            <CardButton type="button">See Project</CardButton>
          </CardFieldset>
        </CardBody>
      </CardWrapper>
      <CardWrapper>
        <CardHeader>
          <CardHeading>Blogging Site</CardHeading>
        </CardHeader>
<CardImage src={undercontruction} />
        <CardBody>
          <CardFieldset>
            <CardOptionsNote>This Project is blah blah</CardOptionsNote>
          </CardFieldset>
          <CardFieldset>
            <CardButton type="button">See Project</CardButton>
          </CardFieldset>
        </CardBody>
      </CardWrapper>
  
      <CardWrapper>
        <CardHeader>
          <CardHeading>Resumè Parser</CardHeading>
        </CardHeader>
<CardImage src={undercontruction} />
        <CardBody>
          <CardFieldset>
            <CardOptionsNote>This Project is blah blah</CardOptionsNote>
          </CardFieldset>
          <CardFieldset>
            <CardButton type="button">See Project</CardButton>
          </CardFieldset>
        </CardBody>
      </CardWrapper>
      
        </div>
      <h1>happen!</h1>
    </div>
  );
}
