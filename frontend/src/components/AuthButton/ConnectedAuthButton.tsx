import React, { Component } from "react";
import { connect } from "react-redux";
import { createSetIsLoginFormShowingAction } from "../../actions/loginFormActions";
import { RootState } from "../../reducers/rootReducer";
import { isLoginFormShowingSelector } from "../../selectors/baseSelectors";
import { isLoggedInSelector } from "../../selectors/combinedSelectors";
import { AuthButton } from "./AuthButton";

export type AuthButtonTypes = "login" | "signup" | "logout";

interface StateProps {
  isLoggedIn: boolean;
  isLoginFormShowing: boolean;
}

interface DispatchProps {
  setIsShowingLoginForm: typeof createSetIsLoginFormShowingAction;
}

interface OwnProps {
  type: AuthButtonTypes;
}

type AuthButtonContainerProps = StateProps & DispatchProps & OwnProps;

function mapStateToProps(state: RootState): StateProps {
  return {
    isLoggedIn: isLoggedInSelector(state),
    isLoginFormShowing: isLoginFormShowingSelector(state)
  };
}

const mapDispatchToProps: DispatchProps = {
  setIsShowingLoginForm: createSetIsLoginFormShowingAction
};

class AuthButtonContainer extends Component<AuthButtonContainerProps> {
  handleLoginClick = () => {
    if (!this.props.isLoginFormShowing) {
      this.props.setIsShowingLoginForm(true);
    }
  };
  handleLogoutClick = () => console.log("Logout Click");
  handleSignUpClick = () => console.log("Sign Up Clicked");

  render() {
    return (
      <AuthButton
        type={this.props.type}
        isLoggedIn={this.props.isLoggedIn}
        handleLoginClick={this.handleLoginClick}
        handleLogoutClick={this.handleLogoutClick}
        handleSignUpClick={this.handleSignUpClick}
      />
    );
  }
}

const ConnectedAuthButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthButtonContainer);

export default ConnectedAuthButton;
