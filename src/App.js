import React,{useState} from "react";
import NavbarComplete from './NavbarComplete.js' ;
import { createGlobalStyle } from 'styled-components';

import gesture from './images/gesture.jpg';
import portfolio from './images/portfolio.png';
import undercontruction from './images/undercontruction.jpg';
import cpp from './images/c++.png'; 
import js from './images/js.png';
import sql from './images/sql.png';
import react from './images/react.png';
import nodejs from './images/nodejs.png';

import {
  KK, 
  Titles, 
  Navbar, 
  NavbarItem, 
  Para, 
  Logo, 
  Language, 
  Hamberger, 
  SideCard, 
  SideButton, 
  CardHolder 
} from "./Navbar.js" ; 

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




export default function App(){

  return (
    <div>

      <GlobalStyle greenColor />
      <NavbarComplete />
      <Titles>About Me</Titles>
      <Para>
        Working as an Application Support Engineer at <b><font color='#389dd7'>C</font>VENT</b>, Gurgaon. 
        Here, I works on SQL, noSQL and RESTful API based reporting framework and responsible for finding troubleshooting application bugs.
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
      <br/>
      <Titles>Language worked on</Titles>
      <div style={{marginLeft:'20px'}}>
      <Language src={cpp} />
      <Language src={js} />
      <Language src={react} />
      <Language src={sql} />
      <Language src={nodejs} />
      </div>
      <br/><br/>
      <Titles>Projects</Titles>
      

      <div style={{margin:'20px', display:"flex", overflow:"auto", scrollbarColor:'red'}}>
        
      <CardWrapper>
        <CardHeader>
          <CardHeading>Virtual Mouse</CardHeading>
        </CardHeader>
          <CardImage src={gesture} />
        <CardBody>
          <CardFieldset>
            <CardOptionsNote>This projects aims at detecting hand gestures and use it as a virtual mouse</CardOptionsNote>
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
            <CardOptionsNote>This Project is same webiste which you are currently viewing</CardOptionsNote>
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
            <CardOptionsNote>The aim of this project is to allow users to download youtube videos and even entire playlist.</CardOptionsNote>
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
            <CardOptionsNote>This Project is currently available at https://krishankantray.blogspot.com/ </CardOptionsNote>
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
            <CardOptionsNote>This is a simple application that reads your resume in json format and converts it into selected template pdf.</CardOptionsNote>
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
