import React from "react";
import FormComponent from "../components/Form";
import LabelWithInput from "../components/LabelWithInput";
import Button from "../components/Button";

const Login = ({ onChange }) => {
  return (
    <>
      <FormComponent>
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
        >
          login
        </Button>
      </FormComponent>
    </>
  );
};

export default Login;
