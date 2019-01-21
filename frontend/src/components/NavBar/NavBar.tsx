import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { urls } from "../../helpers/urls/urls";

interface NavBarProps {
  username?: string;
}

const StyledNavBar = styled.nav`
  box-sizing: border-box;
  width: 100%;
  border: solid 1px black;

  margin-bottom: 8px;
`;

const StyledUl = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 5px 3px;
`;

const StyledLi = styled.li`
  margin: 0 8px;
  border: solid 1px black;
  width: 70px;
  height: 30px;

  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavBar: FC<NavBarProps> = props => (
  <StyledNavBar>
    <StyledUl>
      <StyledLi>
        <StyledLink to={urls.home}>Home</StyledLink>
      </StyledLi>
      <StyledLi>
        <StyledLink to={urls.channels}>Channels</StyledLink>
      </StyledLi>
    </StyledUl>
  </StyledNavBar>
);

export default NavBar;
