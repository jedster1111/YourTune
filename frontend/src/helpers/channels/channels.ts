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

export function getIndexOfChannelName(
  channels: ChannelData[],
  channelName: string | undefined
): number | undefined {
  const index = channels.findIndex(
    channelData => channelData.username === channelName
  );

  if (index === -1) {
    return undefined;
  }

  return index;
}
