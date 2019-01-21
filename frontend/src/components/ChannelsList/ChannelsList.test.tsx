import { createChannelsDataFromNames } from "../../helpers/channels/channels";
import { getIndexOfChannelName } from "./ChannelsList";

describe("Testing getIndexOfChannelName", () => {
  const channels = createChannelsDataFromNames(["a", "b", "c", "d", "e"]);

  it("should return the index of the specified channel", () => {
    expect(getIndexOfChannelName(channels, channels[0].username)).toBe(0);
  });

  it("should return undefined if no match is found", () => {
    expect(getIndexOfChannelName(channels, "random name")).toBeUndefined();
  });
});
