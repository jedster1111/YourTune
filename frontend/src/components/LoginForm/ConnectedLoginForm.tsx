import React, { createRef, FormEvent, PureComponent } from "react";
import { connect } from "react-redux";
import { Key } from "ts-key-enum";
import {
  createSetIsLoginFormShowingAction,
  createSetLoginFormValueAction
} from "../../actions/loginFormActions";
import { LoginFormValues } from "../../reducers/loginFormReducer";
import { RootState } from "../../reducers/rootReducer";
import {
  isLoginFormShowingSelector,
  loginFormValuesSelector
} from "../../selectors/baseSelectors";
import LoginForm from "./LoginForm";

interface StateProps {
  values: LoginFormValues;
  isLoginFormShowing: boolean;
}

interface DispatchProps {
  setLoginFormValue: typeof createSetLoginFormValueAction;
  setIsLoginFormShowing: typeof createSetIsLoginFormShowingAction;
}

type LoginFormContainerProps = StateProps & DispatchProps;

function mapStateToProps(state: RootState): StateProps {
  return {
    values: loginFormValuesSelector(state),
    isLoginFormShowing: isLoginFormShowingSelector(state)
  };
}

const mapDispatchToProps: DispatchProps = {
  setLoginFormValue: createSetLoginFormValueAction,
  setIsLoginFormShowing: createSetIsLoginFormShowingAction
};

class LoginFormContainer extends PureComponent<LoginFormContainerProps> {
  formRef = createRef<HTMLFormElement>();

  handleMouseCloseLoginForm = (e: MouseEvent) => {
    const formNode = this.formRef.current;
    const { isLoginFormShowing, setIsLoginFormShowing } = this.props;
    const isClickInsideForm =
      formNode && formNode.contains(e.target as Node | null);

    if (isLoginFormShowing && !isClickInsideForm) {
      setIsLoginFormShowing(false);
    }
  };

  handleKeyboardCloseLoginForm = (e: KeyboardEvent) => {
    if (this.props.isLoginFormShowing && e.key === Key.Escape) {
      this.props.setIsLoginFormShowing(false);
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
          ref={this.formRef}
          values={this.props.values}
          onChange={this.props.setLoginFormValue}
          onSubmit={(e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            console.log("Submitted");
          }}
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
