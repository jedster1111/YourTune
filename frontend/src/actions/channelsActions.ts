import { Action } from "redux";
import { ChannelData } from "../types";

export type ChannelsActions =
  | GetChannelsLoadingAction
  | GetChannelsSuccessAction
  | GetChannelsErrorAction;

export enum ChannelsActionsTypes {
  getChannelsLoading = "GET_CHANNELS_LOADING",
  getChannelsSuccess = "GET_CHANNELS_SUCCESS",
  getChannelsError = "GET_CHANNELS_ERROR"
}

export interface GetChannelsLoadingAction
  extends Action<ChannelsActionsTypes.getChannelsLoading> {}

interface GetChannelsSuccessAction
  extends Action<ChannelsActionsTypes.getChannelsSuccess> {
  payload: { channels: ChannelData[] };
}

interface GetChannelsErrorAction
  extends Action<ChannelsActionsTypes.getChannelsError> {
  payload: { errorMessage: string };
}

export function createGetChannelsLoadingAction(): GetChannelsLoadingAction {
  return {
    type: ChannelsActionsTypes.getChannelsLoading
  };
}

export function createGetChannelsSuccessAction(
  channels: ChannelData[]
): GetChannelsSuccessAction {
  return {
    type: ChannelsActionsTypes.getChannelsSuccess,
    payload: { channels }
  };
}

export function createGetChannelsErrorAction(
  errorMessage: string
): GetChannelsErrorAction {
  return {
    type: ChannelsActionsTypes.getChannelsError,
    payload: { errorMessage }
  };
}
