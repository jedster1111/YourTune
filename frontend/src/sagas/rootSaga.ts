import { AxiosError, AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  ChannelsActionsTypes,
  createGetChannelsErrorAction,
  createGetChannelsSuccessAction,
  GetChannelsLoadingAction
} from "../actions/channelsActions";
import * as api from "../api/api";

function* getChannelsSaga(action: GetChannelsLoadingAction) {
  try {
    const response: AxiosResponse<api.GetChannelsReturn> = yield call(
      api.getChannels
    );
    const { channels } = response.data;

    yield put(createGetChannelsSuccessAction(channels));
  } catch (unTypedError) {
    const error: AxiosError = unTypedError;
    yield put(createGetChannelsErrorAction(error.message));
  }
}

function* rootSaga() {
  yield all([
    takeLatest(ChannelsActionsTypes.getChannelsLoading, getChannelsSaga)
  ]);
}

export default rootSaga;
