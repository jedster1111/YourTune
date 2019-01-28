import React, { FC, MouseEvent } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  transition: width 0.3s;

  width: 80px;
  height: 30px;

  margin-left: auto;
  border: none;

  &:hover {
    width: 90px;
  }
`;

interface ButtonProps {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<ButtonProps> = props => (
  <StyledButton onClick={props.onClick}>{props.children}</StyledButton>
);

export default Button;
