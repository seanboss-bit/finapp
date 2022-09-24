import React from "react";
import { Link, useHistory } from "react-router-dom";

const Login = ({setAdmin}) => {
  const history = useHistory();
  const logUserIn = (e) => {
    e.preventDefault();
    setAdmin(true);
    history.push("/dashboard");
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
                  <input type="email" placeholder="Your Email" />
                  <span>e-mail</span>
                </div>
                <div className="mainInput">
                  <input type="password" placeholder="Your Password" />
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
