import React, { FC } from "react";
import { Link } from "react-router-dom";
import { ChannelData } from "../../types";

interface ChannelCardProps {
  channelData: ChannelData;
}

const ChannelCard: FC<ChannelCardProps> = props => (
  <li>
    <Link to={`/${props.channelData.username}`}>
      {props.channelData.username}
    </Link>
  </li>
);

export default ChannelCard;
