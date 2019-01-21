import { UserActions, UserActionsTypes } from "../actions/userActions";
import { UserData } from "../types";

export interface UserState {
  data?: UserData;
}

export function createUserInitialState(): UserState {
  return {};
}

export function userReducer(
  state = createUserInitialState(),
  action: UserActions
): UserState {
  switch (action.type) {
    case UserActionsTypes.setUserData: {
      return {
        ...state,
        data: action.payload.data
      };
    }

    default:
      return state;
  }
}
