import React, { createRef, FormEvent, PureComponent } from "react";
import { connect } from "react-redux";
import { Key } from "ts-key-enum";
import {
  createSetIsSignUpFormShowingAction,
  createSetSignUpFormValueAction
} from "../../actions/signupFormActions";
import { RootState } from "../../reducers/rootReducer";
import { SignUpFormValues } from "../../reducers/signUpFormReducer";
import {
  isSignUpFormShowingSelector,
  signUpFormValuesSelector
} from "../../selectors/signUpFormSelectors";
import SignUpForm from "./SignUpForm";

interface StateProps {
  values: SignUpFormValues;
  isSignUpFormShowing: boolean;
}

interface DispatchProps {
  setSignUpFormValue: typeof createSetSignUpFormValueAction;
  setIsSignUpFormShowing: typeof createSetIsSignUpFormShowingAction;
}

type SignUpFormContainerProps = StateProps & DispatchProps;

function mapStateToProps(state: RootState): StateProps {
  return {
    isSignUpFormShowing: isSignUpFormShowingSelector(state),
    values: signUpFormValuesSelector(state)
  };
}

const mapDispatchToProps: DispatchProps = {
  setSignUpFormValue: createSetSignUpFormValueAction,
  setIsSignUpFormShowing: createSetIsSignUpFormShowingAction
};

class SignUpFormContainer extends PureComponent<SignUpFormContainerProps> {
  formRef = createRef<HTMLFormElement>();

  handleMouseCloseSignUpForm = (e: MouseEvent) => {
    const formNode = this.formRef.current;
    const { isSignUpFormShowing, setIsSignUpFormShowing } = this.props;
    const isClickInsideForm =
      formNode && formNode.contains(e.target as Node | null);

    if (isSignUpFormShowing && !isClickInsideForm) {
      setIsSignUpFormShowing(false);
    }
  };

  handleKeyboardCloseSignUpForm = (e: KeyboardEvent) => {
    if (this.props.isSignUpFormShowing && e.key === Key.Escape) {
      this.props.setIsSignUpFormShowing(false);
    }
  };

  componentDidMount() {
    window.addEventListener("mouseup", this.handleMouseCloseSignUpForm);
    window.addEventListener("keydown", this.handleKeyboardCloseSignUpForm);
  }

  componentWillUnmount() {
    window.removeEventListener("mouseup", this.handleMouseCloseSignUpForm);
    window.removeEventListener("keydown", this.handleKeyboardCloseSignUpForm);
  }

  render() {
    const { setSignUpFormValue, values } = this.props;
    return (
      <SignUpForm
        ref={this.formRef}
        values={values}
        onChange={setSignUpFormValue}
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          console.log("Submitted");
        }}
      />
    );
  }
}

const ConnectedSignUpForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpFormContainer);

export default ConnectedSignUpForm;
