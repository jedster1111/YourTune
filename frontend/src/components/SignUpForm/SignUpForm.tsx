import React, { FormEvent, forwardRef, memo } from "react";
import { SignUpFormValues } from "../../reducers/signUpFormReducer";
import Button from "../Button/Button";
import { FormWrapper, InputWrapper, StyledForm } from "../Form/Form";
import { InputTypes, LabelledInput } from "../LoginForm/LabelledInput";

interface SignUpFormProps {
  values: SignUpFormValues;
  onChange: (field: keyof SignUpFormValues, value: string) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

type InputData = {
  [key in keyof SignUpFormValues]: {
    id: string;
    labelText: string;
    autoFocus?: boolean;
    type?: InputTypes;
  }
};

// [key in keyof SignUpFormValues]: {id: string, labelText: string, value: string, onChange: (e: ChangeEvent<HTMLInputElement>) => void, type?: InputTypes, autoFocus?: boolean}}

const inputData: InputData = {
  username: {
    id: "username",
    labelText: "Username",
    autoFocus: true
  },
  password: {
    id: "password",
    labelText: "Password",
    type: "password"
  },
  confirmPassword: {
    id: "confirm-password",
    labelText: "Confirm Password",
    type: "password"
  },
  email: {
    id: "email",
    labelText: "Email",
    type: "email"
  }
};

const SignUpForm = forwardRef<HTMLFormElement, SignUpFormProps>(
  (props, ref) => {
    const { username, email, password, confirmPassword } = props.values;

    return (
      <FormWrapper>
        <StyledForm onSubmit={props.onSubmit} ref={ref}>
          <InputWrapper>
            <LabelledInput
              {...inputData.username}
              value={username}
              onChange={e => props.onChange("username", e.target.value)}
            />
            <LabelledInput
              {...inputData.email}
              value={email}
              onChange={e => props.onChange("email", e.target.value)}
            />
            <LabelledInput
              {...inputData.password}
              value={password}
              onChange={e => props.onChange("password", e.target.value)}
            />
            <LabelledInput
              {...inputData.confirmPassword}
              value={confirmPassword}
              onChange={e => props.onChange("confirmPassword", e.target.value)}
            />
          </InputWrapper>
          <Button>Sign Up</Button>
        </StyledForm>
      </FormWrapper>
    );
  }
);

export default memo(SignUpForm);
