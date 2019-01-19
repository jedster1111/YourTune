import React, { FC } from "react";
import { RouteComponentProps } from "react-router";
import styled from "styled-components";
import ResponsivePlayer from "../components/ResponsivePlayer/ResponsivePlayer";

interface ChannelsPagesProps
  extends RouteComponentProps<{ channelName: string }> {}

const ResponsivePlayerWrapper = styled.div`
  flex: 5;
`;

const ChannelsPages: FC<ChannelsPagesProps> = props => {
  const channelName = props.match.params.channelName;
  return (
    <ResponsivePlayerWrapper>
      <ResponsivePlayer channelName={channelName} key={channelName} />
    </ResponsivePlayerWrapper>
  );
};

export default ChannelsPages;
