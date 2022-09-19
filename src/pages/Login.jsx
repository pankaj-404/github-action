import React from "react";
import { useRef, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useFormik } from "formik";
import { classNames } from "primereact/utils";
import { Password } from "primereact/password";
// import axios from "../api/axios";
import "./login.css";

// const LOGIN_URL = "/auth";

const Login = ({ authenticate }) => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});

  //auth button handler
  // const handleLogin = () => {
  //   authenticate();
  //   navigate("/");
  // };

  // useEffect(() => {
  //   userRef.current.focus();
  // }, []);

  // useEffect(() => {
  //   setErrMsg("");
  // }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const response = await axios.post(LOGIN_URL, JSON.stringify({ user, pwd }), {
      //   headers: { "Content-Type": "application/json" },
      //   withCredentials: true,
      // });
      // console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      // const accessToken = response?.data?.accessToken;
      const accessToken = "abcdefghi";
      // const roles = response?.data?.roles;
      const roles = [2001, 1984];
      setAuth({ user, pwd, roles, accessToken });
      setUser("");
      setPwd("");
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    validate: (data) => {
      let errors = {};

      if (!data.name) {
        errors.name = "Name is required.";
      }

      if (!data.password) {
        errors.password = "Password is required.";
      }

      return errors;
    },
    onSubmit: (data) => {
      setFormData(data);
      setShowMessage(true);
      formik.resetForm();
    },
  });

  const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
  const getFormErrorMessage = (name) => {
    return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
  };

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <section className="login100-form validate-form text-gray-600">
            {/* <div className="flex justify-content-center"> */}
            <div className="card">
              <h5 className="text-center">Login</h5>
              <form onSubmit={handleSubmit} className="p-fluid">
                <div className="field">
                  <span className="p-float-label">
                    <InputText
                      id="name"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      autoFocus
                      className={classNames({ "p-invalid": isFormFieldValid("name") })}
                    />
                    <label htmlFor="name" className={classNames({ "p-error": isFormFieldValid("name") })}>
                      User Name*
                    </label>
                  </span>
                  {getFormErrorMessage("name")}
                </div>
                <div className="field">
                  <span className="p-float-label">
                    <Password
                      id="password"
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      toggleMask
                      className={classNames({ "p-invalid": isFormFieldValid("password") })}
                    />
                    <label htmlFor="password" className={classNames({ "p-error": isFormFieldValid("password") })}>
                      Password*
                    </label>
                  </span>
                  {getFormErrorMessage("password")}
                </div>
                <Button type="submit" label="Submit" className="mt-2" />
              </form>
            </div>
            {/* </div> */}
            <p>
              Need an Account?
              <br />
              <span className="line">
                <Link to="/register">
                  <Button>Sign Up</Button>
                </Link>
              </span>
            </p>
          </section>
          <div className="login100-more"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
