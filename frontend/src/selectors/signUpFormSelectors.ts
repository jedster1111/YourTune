import { RootState } from "../reducers/rootReducer";

export function isSignUpFormShowingSelector(state: RootState) {
  return state.signUpFormState.isSignUpFormShowing;
}

export function signUpFormValuesSelector(state: RootState) {
  return state.signUpFormState.values;
}
