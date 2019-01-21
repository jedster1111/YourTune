import { getActiveChannelFromUrl } from "./urls";
describe("Testing url parser", () => {
  const channelName = "jed";

  it("should return active channel from getChannelMethod", () => {
    const urlToTest = `/${channelName}`;

    expect(getActiveChannelFromUrl(urlToTest)).toBe(channelName);
  });

  it("should handle /channelName/testing", () => {
    const urlToTest = `/${channelName}/testing`;

    expect(getActiveChannelFromUrl(urlToTest)).toBe(channelName);
  });

  it("should handle yourtune.co.uk/channelName/testing", () => {
    const urlToTest = `yourtune.co.uk/${channelName}/testing`;
    expect(getActiveChannelFromUrl(urlToTest)).toBe(channelName);
  });
});
