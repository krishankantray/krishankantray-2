import React,{useState} from "react";
import  avatar from './images/avatar.png';
import  menu from './images/menu.png';
import styled from "styled-components" ; 

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
  


export default function NavbarComplete(){

    
    const [isDrawer, setDrawer] = useState(false) ; 
  
    const flipDrawer = function () {
      setDrawer (!isDrawer) ;
      console.log(isDrawer);
    };

   console.log(avatar);
  

    return(
        <div>
            <Navbar>
      <Logo src={avatar} />
      
      <KK>Krishankant Ray</KK>
      <Hamberger src={menu} onClick={flipDrawer} />
        <NavbarItem>Home</NavbarItem>
        <NavbarItem>Blog</NavbarItem>
        <NavbarItem>Resumè</NavbarItem>
        <NavbarItem>Contact</NavbarItem>
      </Navbar>
      <SideCard showsidebar={isDrawer}> 
          <SideButton type='button'>Home</SideButton>
          <SideButton type='button'>Blogs</SideButton>
          <SideButton type='button'>Resumè</SideButton>
          <SideButton type='button'>Contact</SideButton>
       
      </SideCard>
        </div>
    );
}

