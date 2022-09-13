import React from "react";
import SignupForm from "./SignupForm";
import Page from "../../shared/components/Page/Page";

const SignUp = () => {
  return (
    <Page pageTitle='Signup' centered >
       <SignupForm/>
      </Page>
  );
};

export default SignUp;
