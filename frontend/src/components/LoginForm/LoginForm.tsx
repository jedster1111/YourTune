import React, { FC } from "react";
import { LoginFormValues } from "../../reducers/loginFormReducer";

interface LoginFormProps {
  values: LoginFormValues;
  onChange: (field: keyof LoginFormValues, value: string) => void;
}

const LoginForm: FC<LoginFormProps> = props => {
  const { username, password } = props.values;
  return (
    <form>
      <input
        value={username}
        onChange={e => props.onChange("username", e.target.value)}
      />
      <input
        value={password}
        onChange={e => props.onChange("password", e.target.value)}
      />
    </form>
  );
};

export default LoginForm;
