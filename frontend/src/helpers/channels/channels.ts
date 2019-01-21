import { ChannelData } from "../../types";

export function createChannelData(
  id: number,
  username: string,
  isLive: boolean
): ChannelData {
  return {
    id,
    username,
    isLive
  };
}

export function createChannelsDataFromNames(
  usernames: string[]
): ChannelData[] {
  return usernames.map((username, index) =>
    createChannelData(index + 1, username, false)
  );
}
