export enum urls {
  home = "/",
  channels = "/channels"
}

export function getChannelUrl(channelName: string): string {
  return `/${channelName}`;
}

/**
 * Will return active channel name from either a full or relative url
 * @example
 * "/channelName" => "channelName"
 * "/channelName/testing" => "channelName"
 * "yourtune.co.uk/channelName/testing" => "channelName"
 */
export function getActiveChannelFromUrl(url: string): string | undefined {
  const match = url.match(/(?:\/)(.*?)(?:\/|$)/);
  return match ? match[1] : undefined;
}
