import React, { Component } from "react";
import { connect } from "react-redux";
import { createSetLoginFormValueAction } from "../../actions/loginFormActions";
import { LoginFormValues } from "../../reducers/loginFormReducer";
import { RootState } from "../../reducers/rootReducer";
import LoginForm from "./LoginForm";

interface StateProps {
  values: LoginFormValues;
}

interface DispatchProps {
  setLoginFormValue: typeof createSetLoginFormValueAction;
}

type LoginFormContainerProps = StateProps & DispatchProps;

function mapStateToProps(state: RootState): StateProps {
  return {
    values: state.loginFormState.values
  };
}

const mapDispatchToProps: DispatchProps = {
  setLoginFormValue: createSetLoginFormValueAction
};

class LoginFormContainer extends Component<LoginFormContainerProps> {
  render() {
    return (
      <LoginForm
        values={this.props.values}
        onChange={this.props.setLoginFormValue}
      />
    );
  }
}

const ConnectedLoginForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormContainer);

export default ConnectedLoginForm;
