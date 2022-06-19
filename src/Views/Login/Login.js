import React from 'react';
import './Login.scss';
import FormWrapper from "../../components/Shared/FormWrapper/FormWrapper";
import { Controller } from "react-hook-form";

const Login = () => {
    return (
        <div className="login-view h-100 flex items-center justify-center">
          <div className="login-form p-24">
            <p className="text-lg bold">The weather API</p>
            <div>
              <FormWrapper>
                <>
                  <Controller
                    name="email"
                    defaultValue=""
                    render={
                      ({ field: { ref, ...field }}) =>
                        <input {...field} />} />
                </>
              </FormWrapper>
            </div>
          </div>
        </div>
    );
};

export default Login;
