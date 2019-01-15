import { ChannelsActionsTypes } from "../actions/channelsActions";
import { ChannelData } from "../types";
import { AllActions } from "./rootReducer";

export interface ChannelsState {
  channels: ChannelData[];
  isLoading: boolean;
  errorMessage: string | null;
}

export function createChannelsInitialState(): ChannelsState {
  return { channels: [], isLoading: false, errorMessage: null };
}

function channelsReducer(
  state = createChannelsInitialState(),
  action: AllActions
): ChannelsState {
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
}

export default channelsReducer;
