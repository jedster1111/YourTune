import {
  LoginFormActions,
  LoginFormActionsTypes
} from "../actions/loginFormActions";

export interface LoginFormState {
  isLoginFormShowing: boolean;
  values: {
    username: string;
    password: string;
  };
}

export function createLoginFormInitialState(): LoginFormState {
  return { isLoginFormShowing: false, values: { username: "", password: "" } };
}

export function loginFormReducer(
  state = createLoginFormInitialState(),
  action: LoginFormActions
): LoginFormState {
  switch (action.type) {
    case LoginFormActionsTypes.setIsLoginFormShowing: {
      return {
        ...state,
        isLoginFormShowing: action.payload.isShowing
      };
    }

    default:
      return state;
  }
}
