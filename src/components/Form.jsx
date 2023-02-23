import React from "react";
import { Form } from "react-router-dom";

const FormComponent = ({ method, children }) => {
  return (
    <>
      <Form method={method} aria-label="login form">{children}</Form>
    </>
  );
};

export default FormComponent;
