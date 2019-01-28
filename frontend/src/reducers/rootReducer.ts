import {
  connectRouter,
  LocationChangeAction,
  RouterState
} from "connected-react-router";
import { History } from "history";
import { combineReducers, Reducer } from "redux";
import { ChannelsActions } from "../actions/channelsActions";
import { channelsReducer, ChannelsState } from "./channelsReducer";
import { loginFormReducer, LoginFormState } from "./loginFormReducer";
import { signUpFormReducer, SignUpFormState } from "./signUpFormReducer";
import { userReducer, UserState } from "./userReducer";

export type AllActions = ChannelsActions & LocationChangeAction;

export interface RootState {
  router: RouterState;
  channelsState: ChannelsState;
  userState: UserState;
  loginFormState: LoginFormState;
  signUpFormState: SignUpFormState;
}

function createRootReducer(history: History): Reducer<RootState, AllActions> {
  return combineReducers({
    router: connectRouter(history),
    channelsState: channelsReducer,
    userState: userReducer,
    loginFormState: loginFormReducer,
    signUpFormState: signUpFormReducer
  });
}

export default createRootReducer;
