import { Action } from "redux";
import { SignUpFormValues } from "../reducers/signUpFormReducer";

export type SignUpFormActions =
  | SetIsSignUpFormShowingAction
  | SetSignUpFormValueAction;

export enum SignUpFormActionsTypes {
  setIsSignUpFormShowing = "SET_IS_SIGN_UP_FORM_SHOWING",
  setSignUpFormValue = "SET_SIGN_UP_FORM_VALUE"
}

export interface SetIsSignUpFormShowingAction
  extends Action<SignUpFormActionsTypes.setIsSignUpFormShowing> {
  payload: { isShowing: boolean };
}

export function createSetIsSignUpFormShowingAction(
  isShowing: boolean
): SetIsSignUpFormShowingAction {
  return {
    type: SignUpFormActionsTypes.setIsSignUpFormShowing,
    payload: { isShowing }
  };
}

export interface SetSignUpFormValueAction
  extends Action<SignUpFormActionsTypes.setSignUpFormValue> {
  payload: { field: keyof SignUpFormValues; value: string };
}

export function createSetSignUpFormValueAction(
  field: keyof SignUpFormValues,
  value: string
): SetSignUpFormValueAction {
  return {
    type: SignUpFormActionsTypes.setSignUpFormValue,
    payload: { field, value }
  };
}
