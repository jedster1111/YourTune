import React, { FC } from "react";
import styled from "styled-components";

export const NavButton = styled.button`
  width: 100%;
  height: 100%;

  background-color: white;

  border: none;
`;

export interface AuthButtonProps {
  isLoggedIn: boolean;
  handleLoginClick: () => void;
  handleLogoutClick: () => void;
}

export const AuthButton: FC<AuthButtonProps> = ({
  isLoggedIn,
  handleLoginClick: handleLogin,
  handleLogoutClick: handleLogout
}) => {
  return isLoggedIn ? (
    <NavButton onClick={handleLogout}>Logout</NavButton>
  ) : (
    <NavButton onClick={handleLogin}>Login</NavButton>
  );
};
