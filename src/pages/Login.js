import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Login = ({ setAdmin }) => {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const logUserIn = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      Swal.fire({
        title: "Empty Fields",
        text: "Please Enter All Fields",
        icon: "error",
      });
    } else if (email === "micheal@gmail.com" && password === "12345") {
      Swal.fire({
        icon: "success",
        title: "Login Success",
        timer: 2000,
      });
      setAdmin(true);
      setTimeout(() => {
        history("/dashboard");
      }, 3000);
    } else {
      Swal.fire({
        title: "Wrong Login Details",
        text: "Please Make Sure Your Details Are Correct",
        icon: "error",
      });
    }
  };
  return (
    <div>
      <div className="container">
        <div className="login-inner">
          <div className="top-name">
            <h3>login</h3>
            <p>fill the form to login</p>
          </div>
          <div className="bottom-inputs">
            <div>
              <div className="main-form">
                <div className="mainInput">
                  <input
                    type="email"
                    placeholder="Your Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <span>e-mail</span>
                </div>
                <div className="mainInput">
                  <input
                    type="password"
                    placeholder="Your Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span>password</span>
                </div>
              </div>
              <div className="reg-fog">
                <Link to="/forgot">forgot password?</Link>
              </div>
            </div>
            <div className="btn-for-form">
              <button onClick={(e) => logUserIn(e)}>login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;