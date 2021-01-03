import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';


export const Nav = styled.nav`
  background:pink;
  height:80px;
  display:flex;
  justify-content:space-between;
  padding:0.5rem calc(100vw-1000x)/2; 
  z-index:10;
`
export const NavLink = styled(Link)`
  color:#000;
  display:flex;
  padding:0 2;
  height:100%;
  align-items:center;
  text-decoration:none;
  cursor:pointer;
`
export const Bars = styled(FaBars)`
  display:none;
  color:#fff;

  @media screen and(max-width:768px){
    display:block;
    position:absolute;
    top:0;
    right:0;
    transform:translate(-100%, 75%);
    font-size:1.8rem;
    cursor:pointer;
  }
`
export const NavMenu = styled.div`
   display:flex;
   align-items:center;
   margin-right:24px;

   @media screen and (max-width:768px){
     display:none;

   }
`