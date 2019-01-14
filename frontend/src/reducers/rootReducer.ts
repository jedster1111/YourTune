import { Action, Reducer } from "redux";
import { ChannelData } from "../types";

enum ChannelsActionsTypes {
  getChannelsLoading = "GET_CHANNELS_LOADING",
  getChannelsSuccess = "GET_CHANNELS_SUCCESS",
  getChannelsError = "GET_CHANNELS_ERROR"
}

interface GetChannelsLoadingAction
  extends Action<ChannelsActionsTypes.getChannelsLoading> {}

interface GetChannelsSuccessAction
  extends Action<ChannelsActionsTypes.getChannelsSuccess> {
  payload: { channels: ChannelData[] };
}

interface GetChannelsErrorAction
  extends Action<ChannelsActionsTypes.getChannelsError> {
  payload: { errorMessage: string };
}

type ChannelsActions =
  | GetChannelsLoadingAction
  | GetChannelsSuccessAction
  | GetChannelsErrorAction;

type AllActions = ChannelsActions;

interface RootState {
  channels: ChannelData[];
  isLoading: boolean;
  errorMessage: string | null;
}

function createInitialState(): RootState {
  return {
    channels: [],
    isLoading: false,
    errorMessage: null
  };
}

const rootReducer: Reducer<RootState, AllActions> = (
  state = createInitialState(),
  action
) => {
  switch (action.type) {
    case ChannelsActionsTypes.getChannelsLoading: {
      return {
        ...state,
        isLoading: true,
        errorMessage: null
      };
    }

    case ChannelsActionsTypes.getChannelsSuccess: {
      return {
        ...state,
        channels: action.payload.channels,
        isLoading: false
      };
    }

    case ChannelsActionsTypes.getChannelsError: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload.errorMessage
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
