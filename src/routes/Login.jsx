import React from "react";
import FormComponent from "../components/Form";
import LabelWithInput from "../components/LabelWithInput";
import Button from "../components/Button";

const Login = ({ onChange, onClick }) => {
  return (
    <>
      <FormComponent method="POST">
        <LabelWithInput
          type="email"
          id="username"
          name="username"
          onChange={onChange}
        >
          Username
        </LabelWithInput>
        <LabelWithInput
          type="password"
          id="password"
          name="password"
          onChange={onChange}
        >
          password
        </LabelWithInput>
        <Button
        type="submit"
        onClick={onClick}
        >
          Login
        </Button>
      </FormComponent>

      <fieldset>
        <legend>or</legend>
        <Button>Login with <Google>Google</Google></Button>
        <Button>Login with <Facebook>Facebook</Facebook></Button>
      </fieldset>

    </>
  );
};

export default Login;
