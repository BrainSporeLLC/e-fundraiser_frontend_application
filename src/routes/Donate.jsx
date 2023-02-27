import React from "react";
import FormComponent from "../components/Form";
import LabelWithInput from "../components/LabelWithInput";
import Button from "../components/Button";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

const Donate = ({ onChange, onClick }) => {
  return (
    <>
      <FormComponent method="POST">
        <LabelWithInput
          type="text"
          id="firstName"
          name="firstName"
          onChange={onChange}
        >
          First name
        </LabelWithInput>
        <LabelWithInput
          type="text"
          id="lastName"
          name="lastName"
          onChange={onChange}
        >
          Last name
        </LabelWithInput>
        <LabelWithInput
          type="email"
          id="email"
          name="email"
          placeholder="e.g. someone@example.com"
          onChange={onChange}
        >
          Email
        </LabelWithInput>
        <LabelWithInput
          type="password"
          id="password"
          name="password"
          onChange={onChange}
        >
          Password
        </LabelWithInput>

        <LabelWithInput
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          onChange={onChange}
        >
          Confrim password
        </LabelWithInput>
        <div className="form-group">
          <Button type="submit" onClick={onClick}>
            Create account
          </Button>
        </div>
      </FormComponent>
      <fieldset>
        <legend>or</legend>
        <Button>
          <FaGoogle width={50} hanging={50} />
          Create account with Google
        </Button>
        <Button>
          <FaFacebookF width={50} height={50} />
          Create account with Facebook
        </Button>
      </fieldset>
      
    </>
  );
};

export default Donate;
