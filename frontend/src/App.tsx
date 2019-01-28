import React, { PureComponent } from "react";
import { Route, Switch } from "react-router";
import styled from "styled-components";
import ConnectedChannelsList from "./components/ChannelsList/ConnectedChannelsList";
import ConnectedNavBar from "./components/NavBar/ConnectedNavBar";
import { getChannelUrl, urls } from "./helpers/urls/urls";
import ChannelPage from "./pages/ChannelsPage";
import HomePage from "./pages/HomePage";
import VideoPage from "./pages/VideoPage";

interface AppProps {}

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

class App extends PureComponent<AppProps> {
  componentDidUpdate() {
    console.log("App updated");
  }
  render() {
    return (
      <div>
        <ConnectedNavBar />
        <PageWrapper>
          <Sidebar>
            <ConnectedChannelsList />
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
