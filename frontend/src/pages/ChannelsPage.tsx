import React, { FC } from "react";
import { Route, RouteComponentProps } from "react-router";
import styled from "styled-components";
import ConnectedChannelsList from "../components/ChannelsList/ChannelsListContainer";
import ResponsivePlayer from "../components/ResponsivePlayer/ResponsivePlayer";

interface ChannelsPagesProps extends RouteComponentProps {}

const ChannelsPageWrapper = styled.div`
  display: flex;
`;

const ResponsivePlayerWrapper = styled.div`
  flex: 5;
`;

const ChannelsPages: FC<ChannelsPagesProps> = props => {
  const urlPath = props.match.path;
  return (
    <ChannelsPageWrapper>
      <Route path={urlPath} exact component={ConnectedChannelsList} />

      <Route
        path={`${urlPath}/:channelName`}
        render={({
          match: {
            params: { channelName }
          }
        }: RouteComponentProps<{ channelName: string }>) => (
          <ConnectedChannelsList activeChannel={channelName} />
        )}
      />

      <Route
        path={`${urlPath}/:channelName`}
        exact
        render={({
          match: {
            params: { channelName }
          }
        }: RouteComponentProps<{ channelName: string }>) => {
          return (
            <ResponsivePlayerWrapper>
              <ResponsivePlayer channelName={channelName} key={channelName} />
            </ResponsivePlayerWrapper>
          );
        }}
      />
    </ChannelsPageWrapper>
  );
};

export default ChannelsPages;
