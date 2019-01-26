import React, { ChangeEvent, FC, MouseEvent } from "react";
import styled from "styled-components";
import { LoginFormValues } from "../../reducers/loginFormReducer";

interface LoginFormProps {
  values: LoginFormValues;
  onChange: (field: keyof LoginFormValues, value: string) => void;
  onMouseEnter: (e: MouseEvent<HTMLElement>) => void;
  onMouseLeave: (e: MouseEvent<HTMLElement>) => void;
}

const FormWrapper = styled.div`
  position: absolute;

  border: solid 1px black;
  padding: 4px;

  background-color: white;

  z-index: 2;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const StyledLabel = styled.label`
  margin-right: 4px;

  &:after {
    content: ":";
  }
`;

const StyledInput = styled.input`
  flex: 1 1;
`;

interface LabelledInputProps {
  type?: "text" | "password" | "number";
  labelText: string;
  id: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
}

const LabelledInput: FC<LabelledInputProps> = props => (
  <InputWrapper>
    <StyledLabel htmlFor={props.id}>{props.labelText}</StyledLabel>
    <StyledInput
      id={props.id}
      type={props.type || "text"}
      value={props.value}
      onChange={props.onChange}
      autoFocus={props.autoFocus}
    />
  </InputWrapper>
);

const LoginForm: FC<LoginFormProps> = props => {
  const { username, password } = props.values;
  return (
    <FormWrapper
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      <StyledForm>
        <LabelledInput
          id="username"
          labelText="Username"
          value={username}
          onChange={e => props.onChange("username", e.target.value)}
          autoFocus={true}
        />
        <LabelledInput
          id="password"
          type="password"
          labelText="Password"
          value={password}
          onChange={e => props.onChange("password", e.target.value)}
        />
      </StyledForm>
    </FormWrapper>
  );
};

export default LoginForm;
