import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, RouteComponentProps, Switch } from "react-router";
import { createGetChannelsLoadingAction } from "./actions/channelsActions";
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

class App extends Component<AppProps> {
  componentDidMount() {
    this.props.dispatchGetChannels();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/channels" component={ChannelsPages} />
        </Switch>
      </div>
    );
  }
}

const ConnectedApp = connect(
  null,
  mapDispatchToProps
)(App);

export default ConnectedApp;
