import React, { Component } from "react";
import { connect } from "react-redux";
import { createSetIsLoginFormShowingAction } from "../../actions/loginFormActions";
import { createSetIsSignUpFormShowingAction } from "../../actions/signupFormActions";
import { RootState } from "../../reducers/rootReducer";
import { isLoginFormShowingSelector } from "../../selectors/baseSelectors";
import { isLoggedInSelector } from "../../selectors/combinedSelectors";
import { isSignUpFormShowingSelector } from "../../selectors/signUpFormSelectors";
import { AuthButton } from "./AuthButton";

export type AuthButtonTypes = "login" | "signup" | "logout";

interface StateProps {
  isLoggedIn: boolean;
  isLoginFormShowing: boolean;
  isSignUpFormShowing: boolean;
}

interface DispatchProps {
  setIsShowingLoginForm: typeof createSetIsLoginFormShowingAction;
  setIsShowingSignUpForm: typeof createSetIsSignUpFormShowingAction;
}

interface OwnProps {
  type: AuthButtonTypes;
}

type AuthButtonContainerProps = StateProps & DispatchProps & OwnProps;

function mapStateToProps(state: RootState): StateProps {
  return {
    isLoggedIn: isLoggedInSelector(state),
    isLoginFormShowing: isLoginFormShowingSelector(state),
    isSignUpFormShowing: isSignUpFormShowingSelector(state)
  };
}

const mapDispatchToProps: DispatchProps = {
  setIsShowingLoginForm: createSetIsLoginFormShowingAction,
  setIsShowingSignUpForm: createSetIsSignUpFormShowingAction
};

class AuthButtonContainer extends Component<AuthButtonContainerProps> {
  handleLoginClick = () => {
    const {
      isSignUpFormShowing,
      setIsShowingSignUpForm,
      isLoginFormShowing,
      setIsShowingLoginForm
    } = this.props;

    if (isSignUpFormShowing) {
      setIsShowingSignUpForm(false);
    }
    if (!isLoginFormShowing) {
      setIsShowingLoginForm(true);
    }
  };
  handleLogoutClick = () => console.log("Logout Click");
  handleSignUpClick = () => {
    const {
      isSignUpFormShowing,
      setIsShowingSignUpForm,
      isLoginFormShowing,
      setIsShowingLoginForm
    } = this.props;

    if (isLoginFormShowing) {
      setIsShowingLoginForm(false);
    }
    if (!isSignUpFormShowing) {
      setIsShowingSignUpForm(true);
    }
  };

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
