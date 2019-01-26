import React, { Component } from "react";
import { connect } from "react-redux";
import { Key } from "ts-key-enum";
import {
  createSetIsLoginFormShowingAction,
  createSetLoginFormValueAction
} from "../../actions/loginFormActions";
import { LoginFormValues } from "../../reducers/loginFormReducer";
import { RootState } from "../../reducers/rootReducer";
import LoginForm from "./LoginForm";

interface StateProps {
  values: LoginFormValues;
}

interface DispatchProps {
  setLoginFormValue: typeof createSetLoginFormValueAction;
  setIsShowingLoginForm: typeof createSetIsLoginFormShowingAction;
}

type LoginFormContainerProps = StateProps & DispatchProps;

interface LoginFormContainerState {
  isMouseInForm: boolean;
}

function mapStateToProps(state: RootState): StateProps {
  return {
    values: state.loginFormState.values
  };
}

const mapDispatchToProps: DispatchProps = {
  setLoginFormValue: createSetLoginFormValueAction,
  setIsShowingLoginForm: createSetIsLoginFormShowingAction
};

class LoginFormContainer extends Component<
  LoginFormContainerProps,
  LoginFormContainerState
> {
  state = {
    isMouseInForm: false
  };

  handleMouseCloseLoginForm = (e: Event) => {
    if (!this.state.isMouseInForm) {
      this.props.setIsShowingLoginForm(false);
    }
  };

  handleEscapeCloseLoginForm = (e: KeyboardEvent) => {
    if (e.key === Key.Escape) {
      this.props.setIsShowingLoginForm(false);
    }
  };

  componentDidMount() {
    window.addEventListener("mouseup", this.handleMouseCloseLoginForm, false);
    window.addEventListener("keydown", this.handleEscapeCloseLoginForm, false);
  }

  componentWillUnmount() {
    window.removeEventListener(
      "mouseup",
      this.handleMouseCloseLoginForm,
      false
    );
    window.removeEventListener(
      "keydown",
      this.handleEscapeCloseLoginForm,
      false
    );
  }

  render() {
    return (
      <LoginForm
        values={this.props.values}
        onChange={this.props.setLoginFormValue}
        onMouseEnter={() => this.setState({ isMouseInForm: true })}
        onMouseLeave={() => this.setState({ isMouseInForm: false })}
      />
    );
  }
}

const ConnectedLoginForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormContainer);

export default ConnectedLoginForm;
