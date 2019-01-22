import { Action } from "redux";

export type LoginFormActions = SetIsLoginFormShowingAction;

export enum LoginFormActionsTypes {
  setIsLoginFormShowing = "SET_IS_LOGIN_FORM_SHOWING"
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
