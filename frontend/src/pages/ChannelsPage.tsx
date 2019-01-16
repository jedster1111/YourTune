import React, { FC } from "react";
import { Route, RouteComponentProps } from "react-router";
import ConnectedChannelsList from "../components/ChannelsList/ChannelsListContainer";
import ResponsivePlayer from "../components/ResponsivePlayer/ResponsivePlayer";

interface ChannelsPagesProps extends RouteComponentProps {}

const ChannelsPages: FC<ChannelsPagesProps> = props => {
  const urlPath = props.match.path;
  return (
    <>
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
            <ResponsivePlayer channelName={channelName} key={channelName} />
          );
        }}
      />
    </>
  );
};

export default ChannelsPages;
