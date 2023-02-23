import React from "react";
import { Form } from "react-router-dom";

const FormComponent = ({ children }) => {
  return (
    <>
      <Form>{children}</Form>
    </>
  );
};

export default FormComponent;
