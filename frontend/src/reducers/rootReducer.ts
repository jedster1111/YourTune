import {
  connectRouter,
  LocationChangeAction,
  RouterState
} from "connected-react-router";
import { History } from "history";
import { combineReducers, Reducer } from "redux";
import { ChannelsActions } from "../actions/channelsActions";
import channelsReducer, { ChannelsState } from "./channelsReducer";

export type AllActions = ChannelsActions & LocationChangeAction;

export interface RootState {
  router: RouterState;
  channelsState: ChannelsState;
}

function createRootReducer(history: History): Reducer<RootState, AllActions> {
  return combineReducers({
    router: connectRouter(history),
    channelsState: channelsReducer
  });
}

export default createRootReducer;
