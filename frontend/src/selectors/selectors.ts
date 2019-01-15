import { RootState } from "../reducers/rootReducer";

export function channelsDataSelector(state: RootState) {
  return state.channelsState.channels;
}

export function channelsIsLoadingSelector(state: RootState) {
  return state.channelsState.isLoading;
}

export function channelsErrorSelector(state: RootState) {
  return state.channelsState.errorMessage;
}
