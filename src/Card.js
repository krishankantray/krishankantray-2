import React from "react";
import styled, { css } from "styled-components";


export const CardImage = styled.img`
height:200px;
width:300px;
background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius:0px;
  filter: contrast(70%);
  //filter: saturate(180%);
  overflow: hidden;
  position: relative;
  transition: filter 0.5s cubic-bezier(.43,.41,.22,.91);;
  &::before {
    content: "";
	  display: block;
    padding-top: 56.25%; // 16:9 aspect ratio
  }
  @media(min-width: 40rem) {
    &::before {
      padding-top: 66.6%; // 3:2 aspect ratio
    }
  }`;

export const CardWrapper = styled.div`
  overflow: visible;
  padding: 0 0 32px;
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  
  border-radius: 5px;
  background-color: #3b3c4066;
  font-family: "Varela Round"; 
  &:hover {
    transform: translate(0, -5px);
  }
  
`;



export const CardHeader = styled.header`
 
`;

export const CardHeading = styled.h1`
color:white ;
font-size:24px;
font-family: "Varela Round"; 
font-weight: 500; 
text-align:center;
text-shadow: -1px 1px 0.15em #ff0000 ;

@media screen and (max-width: 768px)  {
  font-size:16px;
}
`;

export const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`;

export const CardFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 24px;
  }

  &:nth-last-of-type(2) {
    margin-top: 32px;
  }

  &:last-of-type {
    text-align: center;
  }
`;

export const CardInput = styled.input`
  padding: 7px 0;
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color 0.25s ease-in;

  &:focus {
    border-bottom-color: #e5195f;
    outline: 0;
  }
`;

export const CardIcon = styled.span`
  color: #666;
  cursor: pointer;
  opacity: .25;
  transition: opacity .25s ease-in;

  &:hover {
    opacity: .95;
  }

  ${props =>
    props.big &&
    css`
      font-size: 26px;
    `}

  ${props =>
    props.eye &&
    css`
      position: absolute;
      top: 8px;
      right: 0;
    `}

  ${props =>
    props.small &&
    css`
      font-size: 14px;
    `}
`;

export const CardOptionsNote = styled.small`
  padding-top: 8px;
  display: block;
  width: 100%;
  font-size: 12px;
  text-align: center;
  color: #ffffff
  
`;

export const CardOptions = styled.ul`
  padding: 0;
  margin: 16px 0 8px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  list-style-type: none;
`;

export const CardOptionsItem = styled.li`
  &:nth-of-type(n + 2) {
    margin-left: 16px;
  }
`;

export const CardButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  background: rgb(255,79,0);
  background: linear-gradient(90deg, rgba(255,79,0,1) 0%, rgba(255,0,123,1) 85%);
  
  &:hover {
    box-shadow: 0 10px 10px #ae23a0;
    transform: translate(0, -5px);
  }
  &:focus {
    outline: 0 !important;
}

`;


export const CardLink = styled.a`
  display: inline-block;
  font-size: 12px;
  text-decoration: none;
  color: #aaa;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  transition: color 0.25s ease-in;

  &:hover {
    color: #777;
  }
`;
