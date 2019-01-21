import React, { Component } from "react";
import { connect } from "react-redux";
import { RootState } from "../../reducers/rootReducer";
import { AuthButton } from "./AuthButton";

interface StateProps {
  isLoggedIn: boolean;
}

// interface DispatchProps {
//   dispatch
// }

type AuthButtonContainerProps = StateProps;

function mapStateToProps(state: RootState): StateProps {
  return {
    isLoggedIn: !!state.userState.data
  };
}

class AuthButtonContainer extends Component<AuthButtonContainerProps> {
  handleLoginClick = () => console.log("Login Click");
  handleLogoutClick = () => console.log("Logout Click");

  render() {
    return (
      <AuthButton
        isLoggedIn={this.props.isLoggedIn}
        handleLoginClick={this.handleLoginClick}
        handleLogoutClick={this.handleLogoutClick}
      />
    );
  }
}

const ConnectedAuthButton = connect(mapStateToProps)(AuthButtonContainer);

export default ConnectedAuthButton;
