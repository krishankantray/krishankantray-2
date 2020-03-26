import React,{useState} from 'react' ;
import styled from "styled-components" ;


//===============================================
// This is my name written on top i.e on header
//===============================================

export const KK = styled.h1`
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

export const Titles = styled.h1`
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

text-shadow: -1px 1px 0.15em #ff0000 ;

@media screen and (max-width: 768px)  {
  font-size:20px;
}

` ;



//========================
// This is Navbar Wrapper
//========================

export const Navbar = styled.div`
  display: flex;
  
  justify-content: flex-end;
  align-items: center;  

  height: 3rem;
  background: rgb(255,79,0);
  background: linear-gradient(90deg, rgba(255,79,0,0.87) 0%, rgba(255,0,123,0.87) 85%);
  
  -webkit-box-shadow:0 0 20px #FD00B4; 
  -moz-box-shadow: 0 0 20px #FD00B4; 
  box-shadow:0 0 50px linear-gradient(260deg, # 0%, #FD00B4 100%);
`;


//==================================================================
// This is for Navbar items links like "Blog", "Resumè", "Contacts"
//==================================================================
export const NavbarItem = styled.a`
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



//===================================
// This is for paragraphs, (if any)
//===================================

export const Para = styled.p`
font-family: "Varela Round";
text-align:left;
font-size: 17px;
font-weight:100;
color: #a29ba3	;
line-height: 1.6;
margin-left:18px;
margin-right:18px;
`;
//=======================================
// This is for Logo on top left corner. 
//=======================================

export const Logo = styled.img`
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

export const Language = styled.img`
  width:80px;
  height: 80px;
  display: block;
    margin-left: auto;
    margin-right: auto;
  

  @media screen and (max-width: 768px){
    width:30px;
    height: 30px;
    
  }

`;
// 

export const LanguageCaption = styled.p`
font-family: "Varela Round";
text-align:center;
font-size: 17px;
font-weight:600;
color: #a29ba3	;
@media screen and (max-width: 768px){
  font-size: 13px;
  
}


`;


//

//==================================================================
// This is for Hamberger icon on right corner when viewed on mobile
//==================================================================

export const Hamberger = styled.img`
@media screen and (min-width: 768px){
  display:none;
  
}
 
  @media screen and (max-width: 768px){
    width:50px;
    height: 50px;
    filter:brightness(200%);
    
  }

`;



export const SideCard = styled.div`

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





export const SideButton = styled.button`
display:none;
@media screen and (max-width:768px){
  display: block;
  width: 100%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  background-color: #e5195f;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, .08);
  cursor: pointer;
  background: rgb(255,79,0);
  background: linear-gradient(90deg, rgba(255,79,0,1) 0%, rgba(255,0,123,1) 85%);
  margin-top: 14%;

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, .16);
    transform: translate(0, -5px);
  }
}
`



//:::::::::::::::

export const CardHolder = styled.div`
margin:'20px';
 display:"flex";

`;




