import React, { FC } from "react";
import styled from "styled-components";
import ConnectedLoginForm from "../LoginForm/ConnectedLoginForm";

export const NavButton = styled.button`
  width: 100%;
  height: 100%;

  background-color: white;

  border: none;
`;

export interface AuthButtonProps {
  isLoggedIn: boolean;
  isLogginFormShowing: boolean;
  handleLoginClick: () => void;
  handleLogoutClick: () => void;
}

export const AuthButton: FC<AuthButtonProps> = ({
  isLoggedIn,
  isLogginFormShowing,
  handleLoginClick: handleLogin,
  handleLogoutClick: handleLogout
}) => {
  return isLoggedIn ? (
    <NavButton onClick={handleLogout}>Logout</NavButton>
  ) : (
    <NavButton onClick={handleLogin}>
      <span>Login</span>
      {isLogginFormShowing && <ConnectedLoginForm />}
    </NavButton>
  );
};
