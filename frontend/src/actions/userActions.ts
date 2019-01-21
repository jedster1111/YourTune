import { Action } from "redux";
import { UserData } from "../types";

export type UserActions = SetUserDataAction;

export enum UserActionsTypes {
  setUserData = "SET_USER_DATA"
}

export interface SetUserDataAction
  extends Action<UserActionsTypes.setUserData> {
  payload: { data: UserData };
}

export function createSetUserDataAction(data: UserData): SetUserDataAction {
  return {
    type: UserActionsTypes.setUserData,
    payload: { data }
  };
}
