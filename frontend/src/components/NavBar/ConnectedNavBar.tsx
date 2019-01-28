import React, { Component } from "react";
import { connect } from "react-redux";
import { RootState } from "../../reducers/rootReducer";
import NavBar from "./NavBar";

type NavBarContainerProps = StateProps;

interface StateProps {
  isLoggedIn: boolean;
}

function mapStateToProps(state: RootState): StateProps {
  return {
    isLoggedIn: !!state.userState.data
  };
}

class NavBarContainer extends Component<NavBarContainerProps> {
  render() {
    return <NavBar isLoggedIn={this.props.isLoggedIn} />;
  }
}

const ConnectedNavBar = connect(mapStateToProps)(NavBarContainer);

export default ConnectedNavBar;
