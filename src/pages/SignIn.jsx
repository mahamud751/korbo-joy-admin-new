import React, { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useToken from "../hooks/useToken";

import img from "../img/home/Rectangle 999.png";
import "./Signin.css";
const SignIn = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginUserEmail(data.email);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };
  return (
    <div>
      <div className="wrapper">
        <div
          className="content-wrapper"
          style={{ background: "unset", height: 600 }}
        >
          <div className="sign_main">
            <div>
              <div>
                {/* /.card-header */}
                <div className="card-body">
                  <div>
                    <h2 className="sign_h2">SIGN IN TO MAIN ADMIN</h2>
                    <div className="registration_div">
                      <form
                        className="row g-3"
                        onSubmit={handleSubmit(handleLogin)}
                      >
                        <div className="col-md-12 form2">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Enter Username"
                            {...register("email", {
                              required: true,
                            })}
                          />
                          {errors.email && (
                            <p className="text-red-500">
                              {errors.email.message}
                            </p>
                          )}
                        </div>
                        <div className="col-md-12 form2">
                          <input
                            type="password"
                            className="form-control"
                            name="password"
                            placeholder="Enter Password"
                            {...register("password", {
                              required: "Password is required",
                              minLength: {
                                value: 6,
                                message: "Password must be 6 characters long",
                              },
                              pattern: {
                                value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                                message:
                                  "Password must have uppercase, number and special characters",
                              },
                            })}
                          />
                          {errors.password && (
                            <p className="text-red-500">
                              {errors.password.message}
                            </p>
                          )}
                        </div>
                        <div style={{ display: "flex", textAlign: "left" }}>
                          <a href=""></a> <img src={img} alt="" />
                          <span className="ms-3">Keep me signed In</span>
                        </div>
                        <div className="mb-5">
                          <button type="submit" className="form2_btn">
                            Enter Password
                          </button>
                        </div>
                        <h6 style={{ color: "#939198" }}>
                          Forgot your password?
                        </h6>
                      </form>
                    </div>
                  </div>
                  <div className="mt-5">
                    <p>username: name2@gmail.com</p>
                    <p>password: password</p>
                  </div>
                </div>
                {/* /.card-body */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
