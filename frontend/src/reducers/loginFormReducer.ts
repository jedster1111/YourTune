import {
  LoginFormActions,
  LoginFormActionsTypes
} from "../actions/loginFormActions";

export interface LoginFormValues {
  username: string;
  password: string;
}

export interface LoginFormState {
  isLoginFormShowing: boolean;
  values: LoginFormValues;
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

    case LoginFormActionsTypes.setLoginFormValue: {
      const { field, value } = action.payload;
      return {
        ...state,
        values: {
          ...state.values,
          [field]: value
        }
      };
    }

    default:
      return state;
  }
}
