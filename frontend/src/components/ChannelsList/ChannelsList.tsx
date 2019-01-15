import React, { FC } from "react";
import styled from "styled-components";
import { ChannelData } from "../../types";
import ChannelCard from "./ChannelCard";

interface ChannelsListProps {
  channels: ChannelData[];
}

const StyledUl = styled.ul`
  list-style-type: none;
  margin: 4px 0;
  padding: 5px 8px;

  background-color: #d8dbe2;
  border: solid 1px black;
  border-radius: 4px;

  width: 200px;
`;

const ChannelsList: FC<ChannelsListProps> = props => (
  <StyledUl>
    {props.channels.map(channelData => (
      <ChannelCard channelData={channelData} key={channelData.id} />
    ))}
  </StyledUl>
);

export default ChannelsList;
