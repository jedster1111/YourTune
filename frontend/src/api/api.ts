import axios from "axios";
import { ChannelData } from "../types";

export interface GetChannelsReturn {
  channels: ChannelData[];
}

export async function getChannels() {
  return axios.get<GetChannelsReturn>("/api/channels");
}
