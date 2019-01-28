import { RootState } from "../reducers/rootReducer";
import { userDataSelector } from "./baseSelectors";

export function isLoggedInSelector(state: RootState): boolean {
  return !!userDataSelector(state);
}
