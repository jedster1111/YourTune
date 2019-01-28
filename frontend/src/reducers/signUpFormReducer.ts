import {
  SignUpFormActions,
  SignUpFormActionsTypes
} from "../actions/signupFormActions";

export interface SignUpFormValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface SignUpFormState {
  isSignUpFormShowing: boolean;
  values: SignUpFormValues;
}

export function createSignUpFormInitialState(): SignUpFormState {
  return {
    isSignUpFormShowing: false,
    values: { username: "", email: "", password: "", confirmPassword: "" }
  };
}

export function signUpFormReducer(
  state = createSignUpFormInitialState(),
  action: SignUpFormActions
): SignUpFormState {
  switch (action.type) {
    case SignUpFormActionsTypes.setIsSignUpFormShowing: {
      return {
        ...state,
        isSignUpFormShowing: action.payload.isShowing
      };
    }

    case SignUpFormActionsTypes.setSignUpFormValue: {
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
