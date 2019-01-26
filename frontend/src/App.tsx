import React, { Component } from "react";
import { Route, RouteComponentProps, Switch } from "react-router";
import styled from "styled-components";
import ConnectedChannelsList from "./components/ChannelsList/ChannelsListContainer";
import NavBar from "./components/NavBar/NavBar";
import {
  getActiveChannelFromUrl,
  getChannelUrl,
  urls
} from "./helpers/urls/urls";
import ChannelPage from "./pages/ChannelsPage";
import HomePage from "./pages/HomePage";
import VideoPage from "./pages/VideoPage";

interface AppOwnProps extends RouteComponentProps {}

type AppProps = AppOwnProps;

const PageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Sidebar = styled.div`
  flex: 1 1 175px;
`;

const MainContent = styled.div`
  flex: 10 1 500px;

  display: flex;
  justify-content: center;

  border: solid 1px black;
`;

class App extends Component<AppProps> {
  render() {
    const activeChannel = getActiveChannelFromUrl(this.props.location.pathname);
    return (
      <div>
        <NavBar />
        <PageWrapper>
          <Sidebar>
            <ConnectedChannelsList activeChannel={activeChannel} />
          </Sidebar>
          <MainContent>
            <Switch>
              <Route path={urls.home} exact component={HomePage} />
              <Route path={urls.channels} component={ChannelPage} />
              <Route
                path={getChannelUrl(":channelName")}
                exact
                component={VideoPage}
              />
            </Switch>
          </MainContent>
        </PageWrapper>
      </div>
    );
  }
}

export default App;
