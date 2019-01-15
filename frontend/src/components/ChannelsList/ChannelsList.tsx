import React, { FC } from "react";
import { ChannelData } from "../../types";
import ChannelCard from "./ChannelCard";

interface ChannelsListProps {
  channels: ChannelData[];
}

const ChannelsList: FC<ChannelsListProps> = props => (
  <ul>
    {props.channels.map(channelData => (
      <ChannelCard channelData={channelData} key={channelData.id} />
    ))}
  </ul>
);

export default ChannelsList;
