import React, { FC } from "react";
import { RouteComponentProps } from "react-router";
import styled from "styled-components";
import ResponsivePlayer from "../components/ResponsivePlayer/ResponsivePlayer";

interface VideoPageProps extends RouteComponentProps<{ channelName: string }> {}

const ResponsivePlayerWrapper = styled.div`
  flex: 1;
  /* max-width: 480px; */
`;

const VideoPage: FC<VideoPageProps> = props => {
  const channelName = props.match.params.channelName;
  return (
    <ResponsivePlayerWrapper>
      <ResponsivePlayer channelName={channelName} key={channelName} />
    </ResponsivePlayerWrapper>
  );
};

export default VideoPage;
