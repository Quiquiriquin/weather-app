import React from 'react';
import {useForm, FormProvider} from "react-hook-form";

const FormWrapper = ({ children, ...otherProps}) => {
  const form = useForm();
  return (
    <FormProvider {...form} {...otherProps}>
      {children}
    </FormProvider>
  );
};

export default FormWrapper;
