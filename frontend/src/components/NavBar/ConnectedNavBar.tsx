import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { RootState } from "../../reducers/rootReducer";
import { isLoginFormShowingSelector } from "../../selectors/baseSelectors";
import { isLoggedInSelector } from "../../selectors/combinedSelectors";
import { isSignUpFormShowingSelector } from "../../selectors/signUpFormSelectors";
import NavBar from "./NavBar";

type NavBarContainerProps = StateProps;

interface StateProps {
  isLoggedIn: boolean;
  isLoginFormShowing: boolean;
  isSignUpFormShowing: boolean;
}

function mapStateToProps(state: RootState): StateProps {
  return {
    isLoggedIn: isLoggedInSelector(state),
    isLoginFormShowing: isLoginFormShowingSelector(state),
    isSignUpFormShowing: isSignUpFormShowingSelector(state)
  };
}

class NavBarContainer extends PureComponent<NavBarContainerProps> {
  render() {
    const { isLoggedIn, isLoginFormShowing, isSignUpFormShowing } = this.props;
    return (
      <NavBar
        isLoggedIn={isLoggedIn}
        isLoginFormShowing={isLoginFormShowing}
        isSignUpFormShowing={isSignUpFormShowing}
      />
    );
  }
}

const ConnectedNavBar = connect(mapStateToProps)(NavBarContainer);

export default ConnectedNavBar;
