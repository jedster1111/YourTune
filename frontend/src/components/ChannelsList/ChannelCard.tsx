import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ChannelData } from "../../types";
import LiveIndicator from "./LiveIndicator";

interface ChannelCardProps {
  channelData: ChannelData;
}

const StyledLi = styled.li`
  background-color: #a9bcd0;
  border: solid lightgrey 1px;

  margin: 3px 0;
  padding: 9px 6px;
`;

const ChannelCard: FC<ChannelCardProps> = props => (
  <StyledLi>
    <Link to={`/${props.channelData.username}`}>
      <div>
        <span>{props.channelData.username}</span>
        <LiveIndicator isLive={props.channelData.isLive} />
      </div>
    </Link>
  </StyledLi>
);

export default ChannelCard;
