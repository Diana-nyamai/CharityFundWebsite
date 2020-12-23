import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import {FaBars} from 'react-icons';

export const Nav = styled.nav`
  background:pink;
  height:80px;
  display:flex;
  justify-content:space-between;
  padding:0.5rem calc(100vw-1000x)/2;
  z-index:10;
`
export const NavLink = styled(Link)`
  color:#fff;
  display:flex;
  padding:0 1;
  height:100%;
  align-items:center;
  text-decoration:none;
  cursor:pointer;
`
export const Bars = styled(FaBars)`
display:none;
color:#fff;

@media screen and (max-width:768px){
    display:block;
    position:absolute;
    top:0;
    right:0;
    transform:translate(-100% 70%);
    font-size:1.8rem;
    cursor:pointer;
    
}
`