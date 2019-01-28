import { createSelector } from "reselect";
import { getActiveChannelFromUrl } from "../helpers/urls/urls";
import { RootState } from "../reducers/rootReducer";
import { urlSelector, userDataSelector } from "./baseSelectors";

export function isLoggedInSelector(state: RootState): boolean {
  return !!userDataSelector(state);
}

export const activeChannelSelector = createSelector(
  urlSelector,
  url => getActiveChannelFromUrl(url)
);
