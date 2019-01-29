import React, { FormEvent, forwardRef, memo } from "react";
import { LoginFormValues } from "../../reducers/loginFormReducer";
import Button from "../Button/Button";
import { FormWrapper, InputWrapper, StyledForm } from "../Form/Form";
import { LabelledInput } from "./LabelledInput";

interface LoginFormProps {
  values: LoginFormValues;
  onChange: (field: keyof LoginFormValues, value: string) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const LoginForm = forwardRef<HTMLFormElement, LoginFormProps>((props, ref) => {
  const { username, password } = props.values;
  return (
    <FormWrapper>
      <StyledForm onSubmit={props.onSubmit} ref={ref}>
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
});

export default memo(LoginForm);
