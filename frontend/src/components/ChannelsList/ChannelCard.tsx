import React, { FC } from "react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import styled from "styled-components";
import { ChannelData } from "../../types";
import LiveIndicator from "./LiveIndicator";

interface ChannelCardProps extends RouteComponentProps {
  channelData: ChannelData;
  isActiveChannel: boolean;
}

const StyledLi = styled.li<{ isActiveChannel: boolean }>`
  background-color: #a9bcd0;
  border: ${({ isActiveChannel }) =>
    `solid ${isActiveChannel ? "black" : "lightgrey"} 1px`};

  margin: 3px 0;
  padding: 9px 6px;
`;

const ChannelCard: FC<ChannelCardProps> = ({
  channelData,
  isActiveChannel,
  match
}) => (
  <StyledLi isActiveChannel={isActiveChannel}>
    <Link to={`/channels/${channelData.username}`}>
      <div>
        <span>{channelData.username}</span>
        <LiveIndicator isLive={channelData.isLive} />
      </div>
    </Link>
  </StyledLi>
);

export default withRouter(ChannelCard);
