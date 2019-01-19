import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, RouteComponentProps, Switch } from "react-router";
import styled from "styled-components";
import { createGetChannelsLoadingAction } from "./actions/channelsActions";
import ConnectedChannelslist from "./components/ChannelsList/ChannelsListContainer";
import ChannelsPages from "./pages/ChannelsPage";
import HomePage from "./pages/HomePage";

interface AppOwnProps extends RouteComponentProps {}

interface DispatchProps {
  dispatchGetChannels: typeof createGetChannelsLoadingAction;
}

type AppProps = AppOwnProps & DispatchProps;

const mapDispatchToProps: DispatchProps = {
  dispatchGetChannels: createGetChannelsLoadingAction
};

const PageWrapper = styled.div`
  display: flex;
`;

class App extends Component<AppProps> {
  componentDidMount() {
    this.props.dispatchGetChannels();
  }

  render() {
    const activeChannel = this.props.location.pathname.substr(1);
    return (
      <PageWrapper>
        <ConnectedChannelslist activeChannel={activeChannel} />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/:channelName" exact component={ChannelsPages} />
        </Switch>
      </PageWrapper>
    );
  }
}

const ConnectedApp = connect(
  null,
  mapDispatchToProps
)(App);

export default ConnectedApp;
