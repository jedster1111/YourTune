import React, { FC } from "react";
import { RouteComponentProps } from "react-router";

interface AppProps extends RouteComponentProps {}

const App: FC<AppProps> = props => {
  return <h1>Hello</h1>;
};

export default App;
