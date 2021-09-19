import React, { useState, useEffect } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import { Link } from "react-router-dom";
const TransactionAll = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      {loading ? (
        <div className="loading">
          <img src="/images/loading-icon.png" alt="#" />
        </div>
      ) : (
        <div className="transaction-all-page">
          <div className="page navbar">
            <div className="container">
              <Link to="/" className="back-to">
                <ArrowBackIosIcon />
              </Link>
              <div className="other-page-title">transactions</div>
              <div className="other-needed-things">
                <Link to="/notification" className="notify">
                  <span>4</span>
                  <NotificationsNoneIcon />
                </Link>
              </div>
            </div>
          </div>
          <div className="trans-list page-list container">
            <label>today</label>
            <Link to="/detail">
              <div className="for-flexing">
                <div className="name">
                  <img
                    src="https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg"
                    alt="#"
                  />
                  <div className="trans-text">
                    <p>amazon</p>
                    <p>shopping</p>
                  </div>
                </div>
                <p className="text-red">
                  - <span className="naira">N</span>150
                </p>
              </div>
            </Link>
            <Link to="/detail">
              <div className="for-flexing">
                <div className="name">
                  <img
                    src="https://e7.pngegg.com/pngimages/394/395/png-clipart-computer-icons-apple-logo-apple-computer-logo.png"
                    alt="#"
                  />
                  <div className="trans-text">
                    <p>apple</p>
                    <p>apple store purchase</p>
                  </div>
                </div>
                <p className="text-red">
                  - <span className="naira">N</span>29
                </p>
              </div>
            </Link>
            <Link to="/detail">
              <div className="for-flexing">
                <div className="name">
                  <img
                    src="https://i.insider.com/5cb8b133b8342c1b45130629?width=700"
                    alt="#"
                  />
                  <div className="trans-text">
                    <p>alex ljuang</p>
                    <p>transfer</p>
                  </div>
                </div>
                <p className="text-green">
                  + <span className="naira">N</span>1,000
                </p>
              </div>
            </Link>
            <Link to="/detail">
              <div className="for-flexing">
                <div className="name">
                  <img
                    src="https://i.insider.com/56016278bd86ef1c008bc175?width=1136&format=jpeg"
                    alt="#"
                  />
                  <div className="trans-text">
                    <p>beatriz brito</p>
                    <p>transfer</p>
                  </div>
                </div>
                <p className="text-green">
                  - <span className="naira">N</span>186
                </p>
              </div>
            </Link>
          </div>
          <div className="trans-list container">
            <label>yesterday</label>
            <Link to="/detail">
              <div className="for-flexing">
                <div className="name">
                  <img
                    src="https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg"
                    alt="#"
                  />
                  <div className="trans-text">
                    <p>amazon</p>
                    <p>shopping</p>
                  </div>
                </div>
                <p className="text-red">
                  - <span className="naira">N</span>150
                </p>
              </div>
            </Link>
            <Link to="/detail">
              <div className="for-flexing">
                <div className="name">
                  <img
                    src="https://e7.pngegg.com/pngimages/394/395/png-clipart-computer-icons-apple-logo-apple-computer-logo.png"
                    alt="#"
                  />
                  <div className="trans-text">
                    <p>apple</p>
                    <p>apple store purchase</p>
                  </div>
                </div>
                <p className="text-red">
                  - <span className="naira">N</span>29
                </p>
              </div>
            </Link>
          </div>
          <div className="trans-list container">
            <label>sept 20, 2020</label>
            <Link to="/detail">
              <div className="for-flexing">
                <div className="name">
                  <img
                    src="https://brandslogo.net/wp-content/uploads/2015/11/envato-logo-vector-download.jpg"
                    alt="#"
                  />
                  <div className="trans-text">
                    <p>envato</p>
                    <p>shopping</p>
                  </div>
                </div>
                <p className="text-red">
                  - <span className="naira">N</span>24
                </p>
              </div>
            </Link>
          </div>
          <div className="trans-list container mb-s2">
            <label>sept 14, 2020</label>
            <Link to="/detail">
              <div className="for-flexing">
                <div className="name">
                  <img
                    src="https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg"
                    alt="#"
                  />
                  <div className="trans-text">
                    <p>amazon</p>
                    <p>shopping</p>
                  </div>
                </div>
                <p className="text-red">
                  - <span className="naira">N</span>1,500
                </p>
              </div>
            </Link>
            <Link to="/detail">
              <div className="for-flexing">
                <div className="name">
                  <img
                    src="https://e7.pngegg.com/pngimages/394/395/png-clipart-computer-icons-apple-logo-apple-computer-logo.png"
                    alt="#"
                  />
                  <div className="trans-text">
                    <p>apple</p>
                    <p>shopping</p>
                  </div>
                </div>
                <p className="text-red">
                  - <span className="naira">N</span>150
                </p>
              </div>
            </Link>
            <Link to="/detail">
              <div className="for-flexing">
                <div className="name">
                  <img
                    src="https://i.insider.com/5cb8b133b8342c1b45130629?width=700"
                    alt="#"
                  />
                  <div className="trans-text">
                    <p>lara mardigal</p>
                    <p>transfer</p>
                  </div>
                </div>
                <p className="text-red">
                  - <span className="naira">N</span>550
                </p>
              </div>
            </Link>
            <Link to="/detail">
              <div className="for-flexing">
                <div className="name">
                  <img
                    src="https://i.insider.com/56016278bd86ef1c008bc175?width=1136&format=jpeg"
                    alt="#"
                  />
                  <div className="trans-text">
                    <p>dina glen</p>
                    <p>shopping</p>
                  </div>
                </div>
                <p className="text-red">
                  - <span className="naira">N</span>620
                </p>
              </div>
            </Link>
            <button>load more</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionAll;
