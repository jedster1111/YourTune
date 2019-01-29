import React, { FC, memo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { urls } from "../../helpers/urls/urls";
import ConnectedAuthButton from "../AuthButton/ConnectedAuthButton";
import ConnectedLoginForm from "../LoginForm/ConnectedLoginForm";
import ConnectedSignUpForm from "../SignUpForm/ConnectedSignUpForm";

interface NavBarProps {
  isLoggedIn: boolean;
  isLoginFormShowing: boolean;
  isSignUpFormShowing: boolean;
}

const StyledNavBar = styled.nav`
  position: static;
  box-sizing: border-box;
  width: 100%;
  border: solid 1px black;

  margin-bottom: 8px;
`;

const Ul = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 5px 3px;
`;

const Li = styled.li`
  /* position: static; */

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

  color: black;
  text-decoration: none;
`;

const NavBar: FC<NavBarProps> = ({
  isLoggedIn,
  isLoginFormShowing,
  isSignUpFormShowing
}) => {
  return (
    <StyledNavBar>
      <Ul>
        <Li>
          <StyledLink to={urls.home}>Home</StyledLink>
        </Li>
        <Li>
          <StyledLink to={urls.channels}>Channels</StyledLink>
        </Li>
        <Li>
          <ConnectedAuthButton type={isLoggedIn ? "logout" : "login"} />
          {isLoginFormShowing && <ConnectedLoginForm />}
        </Li>
        {!isLoggedIn && (
          <Li>
            <ConnectedAuthButton type="signup" />
            {isSignUpFormShowing && <ConnectedSignUpForm />}
          </Li>
        )}
      </Ul>
    </StyledNavBar>
  );
};

export default memo(NavBar);
