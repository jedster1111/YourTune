import React, { ChangeEvent, FC } from "react";

import styled from "styled-components";

export const StyledLabel = styled.label`
  margin-right: 4px;
  text-align: end;

  &:after {
    content: ":";
  }
`;

export const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
`;

export type InputTypes = "text" | "password" | "number" | "email";

export interface LabelledInputProps {
  type?: InputTypes;
  labelText: string;
  id: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
}

export const LabelledInput: FC<LabelledInputProps> = props => (
  <>
    <StyledLabel htmlFor={props.id}>{props.labelText}</StyledLabel>
    <StyledInput
      id={props.id}
      type={props.type || "text"}
      value={props.value}
      onChange={props.onChange}
      autoFocus={props.autoFocus}
    />
  </>
);
