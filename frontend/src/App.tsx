import React, { Component } from "react";
import { Route, RouteComponentProps, Switch } from "react-router";
import styled from "styled-components";
import ConnectedChannelslist from "./components/ChannelsList/ChannelsListContainer";
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
    const activeChannel = this.props.location.pathname.substr(1);
    return (
      <PageWrapper>
        <Sidebar>
          <ConnectedChannelslist activeChannel={activeChannel} />
        </Sidebar>
        <MainContent>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/:channelName" exact component={VideoPage} />
          </Switch>
        </MainContent>
      </PageWrapper>
    );
  }
}

export default App;
