import React, { FC } from "react";
import { NavButton } from "../NavButton/NavButton";
import { AuthButtonTypes } from "./ConnectedAuthButton";

export interface AuthButtonProps {
  isLoggedIn: boolean;
  type: AuthButtonTypes;
  handleLoginClick: () => void;
  handleLogoutClick: () => void;
  handleSignUpClick: () => void;
}

export const AuthButton: FC<AuthButtonProps> = ({
  type,
  handleLoginClick,
  handleLogoutClick,
  handleSignUpClick
}) => {
  return type === "login" ? (
    <NavButton onClick={handleLoginClick}>Login</NavButton>
  ) : type === "logout" ? (
    <NavButton onClick={handleLogoutClick}>Logout</NavButton>
  ) : (
    <NavButton onClick={handleSignUpClick}>Sign Up</NavButton>
  );
};
