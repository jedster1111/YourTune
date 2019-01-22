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
import { userReducer, UserState } from "./userReducer";

export type AllActions = ChannelsActions & LocationChangeAction;

export interface RootState {
  router: RouterState;
  channelsState: ChannelsState;
  userState: UserState;
  loginFormState: LoginFormState;
}

function createRootReducer(history: History): Reducer<RootState, AllActions> {
  return combineReducers({
    router: connectRouter(history),
    channelsState: channelsReducer,
    userState: userReducer,
    loginFormState: loginFormReducer
  });
}

export default createRootReducer;
