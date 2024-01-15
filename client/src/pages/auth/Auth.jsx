import React from "react";
import { Link } from "react-router-dom";
import "./Auth.scss";
import MainButton from "../../components/MainButton/MainButton";
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton";
import MainInput from "../../components/MainInput/MainInput";

const Auth = () => {
  const handleLoginClick = () => {
    const container = document.getElementById("container");
    container.classList.remove("active");
  };

  const handleRegisterClick = () => {
    const container = document.getElementById("container");
    container.classList.add("active");
  };

  return (
    <div className="authWrapper">
      <div className="container" id="container">
        <div className="formContainer signUp">
          <form>
            <h1>Create Account</h1>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="formContainer signIn">
          <form>
            <h1>Sign In</h1>
            <span>or use your email password</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forget Your Password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="toggleContainer">
          <div className="toggle">
            <div className="togglePanel toggleLeft">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
              <button className="hidden" id="login" onClick={handleLoginClick}>
                Sign In
              </button>
            </div>
            <div className="togglePanel toggleRight">
              <h1>Hello, Friend!</h1>
              <p>
                Register with your personal details to use all of site features
              </p>
              <button
                className="hidden"
                id="register"
                onClick={handleRegisterClick}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
