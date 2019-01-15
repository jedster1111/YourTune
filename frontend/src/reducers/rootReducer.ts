import { combineReducers } from "redux";
import { ChannelsActions } from "../actions/channelsActions";
import channelsReducer, { ChannelsState } from "./channelsReducer";

export type AllActions = ChannelsActions;

interface RootState {
  channelsState: ChannelsState;
}

// function createInitialState(): RootState {
//   return {
//     channelsState: createChannelsInitialState()
//   };
// }

const rootReducer = combineReducers<RootState>({
  channelsState: channelsReducer
});

export default rootReducer;
