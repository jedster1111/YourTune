import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, RouteComponentProps } from "react-router";
import { createGetChannelsLoadingAction } from "./actions/channelsActions";
import ChannelsList from "./components/ChannelsList/ChannelsListContainer";
import ResponsivePlayer from "./components/ResponsivePlayer/ResponsivePlayer";

interface AppOwnProps extends RouteComponentProps {}

interface DispatchProps {
  dispatchGetChannels: typeof createGetChannelsLoadingAction;
}

type AppProps = AppOwnProps & DispatchProps;

const mapDispatchToProps: DispatchProps = {
  dispatchGetChannels: createGetChannelsLoadingAction
};

class App extends Component<AppProps> {
  componentDidMount() {
    this.props.dispatchGetChannels();
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <ChannelsList />
        <Route
          path="/:channelName"
          exact
          render={(props: RouteComponentProps<{ channelName: string }>) => {
            const channelName = props.match.params.channelName;
            return (
              <ResponsivePlayer channelName={channelName} key={channelName} />
            );
          }}
        />
      </div>
    );
  }
}

const ConnectedApp = connect(
  null,
  mapDispatchToProps
)(App);

export default ConnectedApp;
