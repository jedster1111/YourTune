import React, { Component } from "react";
import { connect } from "react-redux";
import { createSetIsLoginFormShowingAction } from "../../actions/loginFormActions";
import { RootState } from "../../reducers/rootReducer";
import { AuthButton } from "./AuthButton";

interface StateProps {
  isLoggedIn: boolean;
  isLoginFormShowing: boolean;
}

interface DispatchProps {
  setIsShowingLoginForm: typeof createSetIsLoginFormShowingAction;
}

type AuthButtonContainerProps = StateProps & DispatchProps;

function mapStateToProps(state: RootState): StateProps {
  return {
    isLoggedIn: !!state.userState.data,
    isLoginFormShowing: state.loginFormState.isLoginFormShowing
  };
}

const mapDispatchToProps: DispatchProps = {
  setIsShowingLoginForm: createSetIsLoginFormShowingAction
};

class AuthButtonContainer extends Component<AuthButtonContainerProps> {
  handleLoginClick = () => this.props.setIsShowingLoginForm(true);
  handleLogoutClick = () => console.log("Logout Click");

  render() {
    return (
      <AuthButton
        isLoggedIn={this.props.isLoggedIn}
        isLogginFormShowing={this.props.isLoginFormShowing}
        handleLoginClick={this.handleLoginClick}
        handleLogoutClick={this.handleLogoutClick}
      />
    );
  }
}

const ConnectedAuthButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthButtonContainer);

export default ConnectedAuthButton;
