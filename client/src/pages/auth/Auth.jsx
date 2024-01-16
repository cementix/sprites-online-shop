import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Auth.scss";
import MainButton from "../../components/MainButton/MainButton";
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton";
import MainInput from "../../components/MainInput/MainInput";
import Lottie from "lottie-react";
import login from "../../assets/animations/login.json";
import register from "../../assets/animations/register.json";

const Auth = () => {
  const handleRegisterClick = () => {
    const loginWrapper = document.getElementById("loginWrapper");
    const registrationWrapper = document.getElementById("registrationWrapper");
    loginWrapper.classList.remove("loginHidden");
    registrationWrapper.classList.add("registrationHidden");
  };

  const handleLoginClick = () => {
    const loginWrapper = document.getElementById("loginWrapper");
    const registrationWrapper = document.getElementById("registrationWrapper");
    registrationWrapper.classList.remove("registrationHidden");
    loginWrapper.classList.add("loginHidden");
  };

  return (
    <div className="authWrapper">
      <div className="formWrapper loginWrapper loginHidden" id="loginWrapper">
        <Lottie animationData={login} className="formAnimation" />
        <form action="#">
          <h2>Login</h2>
          <div className="inputBlock">
            <i className="material-icons">email</i>
            <MainInput type="text" placeholder="Email" />
          </div>

          <div className="inputBlock">
            <i className="material-icons">lock</i>
            <MainInput type="password" placeholder="Password" />
          </div>

          <Link className="loginLink">Forgot your password?</Link>
          <MainButton className="formButton" width="200px">
            LOGIN
          </MainButton>
          <p>
            Don't have an account?{" "}
            <span onClick={handleLoginClick} className="toggleSpan loginSpan">
              Sign Up
            </span>
          </p>
        </form>
      </div>

      <div className="formWrapper registrationWrapper" id="registrationWrapper">
        <Lottie animationData={register} className="formAnimation" />
        <form action="#">
          <h2>Register</h2>
          <div className="inputBlock">
            <i className="material-icons">email</i>
            <MainInput type="text" placeholder="Email" />
          </div>

          <div className="inputBlock">
            <i className="material-icons">lock</i>
            <MainInput type="password" placeholder="Password" />
          </div>

          <div className="inputBlock">
            <i className="material-icons">lock_outline</i>
            <MainInput type="password" placeholder="Confirm password" />
          </div>
          <MainButton className="formButton" width="200px">
            REGISTER
          </MainButton>
          <p>
            Already have an account?{" "}
            <span
              onClick={handleRegisterClick}
              className="toggleSpan registerSpan"
            >
              Sign In
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Auth;
