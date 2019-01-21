import React, { FC } from "react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import styled from "styled-components";
import { getChannelUrl } from "../../helpers/urls/urls";
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
  padding: 0 6px;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: start;
  align-items: center;

  height: 75px;
  padding: 0 15px;

  color: black;
  text-decoration: none;
`;

const ChannelCard: FC<ChannelCardProps> = ({
  channelData,
  isActiveChannel,
  match
}) => (
  <StyledLi isActiveChannel={isActiveChannel}>
    <StyledLink to={getChannelUrl(channelData.username)}>
      <span>{channelData.username}</span>
      <LiveIndicator isLive={channelData.isLive} />
    </StyledLink>
  </StyledLi>
);

export default withRouter(ChannelCard);
