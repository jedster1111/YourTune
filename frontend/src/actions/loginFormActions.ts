import { Action } from "redux";
import { LoginFormValues } from "../reducers/loginFormReducer";

export type LoginFormActions =
  | SetIsLoginFormShowingAction
  | SetLoginFormValueAction;

export enum LoginFormActionsTypes {
  setIsLoginFormShowing = "SET_IS_LOGIN_FORM_SHOWING",
  setLoginFormValue = "SET_LOGIN_FORM_VALUE"
}

export interface SetIsLoginFormShowingAction
  extends Action<LoginFormActionsTypes.setIsLoginFormShowing> {
  payload: { isShowing: boolean };
}

export function createSetIsLoginFormShowingAction(
  isShowing: boolean
): SetIsLoginFormShowingAction {
  return {
    type: LoginFormActionsTypes.setIsLoginFormShowing,
    payload: { isShowing }
  };
}

export interface SetLoginFormValueAction
  extends Action<LoginFormActionsTypes.setLoginFormValue> {
  payload: { field: keyof LoginFormValues; value: string };
}

export function createSetLoginFormValueAction(
  field: keyof LoginFormValues,
  value: string
): SetLoginFormValueAction {
  return {
    type: LoginFormActionsTypes.setLoginFormValue,
    payload: { field, value }
  };
}
