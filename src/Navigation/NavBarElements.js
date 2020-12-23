import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';


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
