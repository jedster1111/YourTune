import React, { ChangeEvent, FC, FormEvent, MouseEvent } from "react";
import styled from "styled-components";
import { LoginFormValues } from "../../reducers/loginFormReducer";
import Button from "../Button/Button";

interface LoginFormProps {
  values: LoginFormValues;
  onChange: (field: keyof LoginFormValues, value: string) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onMouseEnter: (e: MouseEvent<HTMLElement>) => void;
  onMouseLeave: (e: MouseEvent<HTMLElement>) => void;
}

const FormWrapper = styled.div`
  position: absolute;
  top: 55px;

  border: solid 1px black;
  padding: 10px 6px;

  background-color: white;

  z-index: 2;

  width: 40vw;
  min-width: 200px;
  max-width: 400px;
`;

const StyledForm = styled.form``;

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: min-content auto;
  grid-row-gap: 8px;

  padding: 5px 2px;
`;

const StyledLabel = styled.label`
  margin-right: 4px;
  text-align: end;

  &:after {
    content: ":";
  }
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
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
  // <InputWrapper>
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
  // </InputWrapper>
);

const LoginForm: FC<LoginFormProps> = props => {
  const { username, password } = props.values;
  return (
    <FormWrapper
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      <StyledForm onSubmit={props.onSubmit}>
        <InputWrapper>
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
        </InputWrapper>
        <Button>Login</Button>
      </StyledForm>
    </FormWrapper>
  );
};

export default LoginForm;
