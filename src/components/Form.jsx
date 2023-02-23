import React from "react";
import { Form } from "react-router-dom";

const FormComponent = ({ method, children }) => {
  return (
    <>
      <Form method={method}>{children}</Form>
    </>
  );
};

export default FormComponent;
