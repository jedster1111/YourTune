import { LoginFormValues } from "../reducers/loginFormReducer";
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

export function userDataSelector(state: RootState) {
  return state.userState.data;
}

export function isLoginFormShowingSelector(state: RootState): boolean {
  return state.loginFormState.isLoginFormShowing;
}

export function loginFormValuesSelector(state: RootState): LoginFormValues {
  return state.loginFormState.values;
}
