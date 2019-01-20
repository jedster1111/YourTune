import React, { FC } from "react";
import styled from "styled-components";
import { ChannelData } from "../../types";
import ChannelCard from "./ChannelCard";

interface ChannelsListProps {
  channels: ChannelData[];
  activeChannelName: string | undefined;
}

const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 5px 8px;

  background-color: #d8dbe2;
  border: solid 1px black;
  border-radius: 4px;
`;

const ChannelsList: FC<ChannelsListProps> = props => {
  const indexOfActiveChannel = getIndexOfChannelName(
    props.channels,
    props.activeChannelName
  );
  return (
    <StyledUl>
      {props.channels.map((channelData, index) => {
        const isActiveChannel = indexOfActiveChannel === index;
        return (
          <ChannelCard
            channelData={channelData}
            key={channelData.id}
            isActiveChannel={isActiveChannel}
          />
        );
      })}
    </StyledUl>
  );
};

export default ChannelsList;

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
