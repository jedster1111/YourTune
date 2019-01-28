import React, { Component, FormEvent } from "react";
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
  isLoginFormShowing: boolean;
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
    values: state.loginFormState.values,
    isLoginFormShowing: state.loginFormState.isLoginFormShowing
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
    if (this.props.isLoginFormShowing && !this.state.isMouseInForm) {
      this.props.setIsShowingLoginForm(false);
    }
  };

  handleKeyboardCloseLoginForm = (e: KeyboardEvent) => {
    if (this.props.isLoginFormShowing && e.key === Key.Escape) {
      this.props.setIsShowingLoginForm(false);
    }
  };

  componentDidMount() {
    window.addEventListener("mouseup", this.handleMouseCloseLoginForm);
    window.addEventListener("keydown", this.handleKeyboardCloseLoginForm);
  }

  componentWillUnmount() {
    window.removeEventListener("mouseup", this.handleMouseCloseLoginForm);
    window.removeEventListener("keydown", this.handleKeyboardCloseLoginForm);
  }

  render() {
    return (
      this.props.isLoginFormShowing && (
        <LoginForm
          values={this.props.values}
          onChange={this.props.setLoginFormValue}
          onSubmit={(e: FormEvent<HTMLFormElement>) => {
            console.log("Submitted");
            e.preventDefault();
          }}
          onMouseEnter={() => this.setState({ isMouseInForm: true })}
          onMouseLeave={() => this.setState({ isMouseInForm: false })}
        />
      )
    );
  }
}

const ConnectedLoginForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormContainer);

export default ConnectedLoginForm;