import React from "react";
import FormComponent from "../components/Form";
import LabelWithInput from "../components/LabelWithInput";
import Button from "../components/Button";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

const Login = ({ onChange, onClick }) => {
  return (
    <>
      <FormComponent method="POST">
        <LabelWithInput
          type="email"
          id="username"
          name="username"
          onChange={onChange}
          placeholder="e.g. someone@example.com"
        >
          Email
        </LabelWithInput>
        <LabelWithInput
          type="password"
          id="password"
          name="password"
          onChange={onChange}
        >
          password
        </LabelWithInput>
        <div className="form-group">
          <Button type="submit" onClick={onClick}>
            Login
          </Button>
        </div>
      </FormComponent>

      <fieldset>
        <legend>or</legend>
        <Button>
          <FaGoogle width={50} hanging={50} />
          Login with Google
        </Button>
        <Button>
          {" "}
          <FaFacebookF width={50} height={50} />
          Login with Facebook
        </Button>
      </fieldset>
    </>
  );
};

export default Login;
