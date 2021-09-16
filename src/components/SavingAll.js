import React, { useState, useEffect } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import AddSharpIcon from "@material-ui/icons/AddSharp";
import { Link } from "react-router-dom";

const SavingAll = () => {
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
      {loading ? <div className="loading">
          <img src="/images/loading-icon.png" alt="#" />
        </div> : (
        <div className="saving-all">
          <div className="page navbar">
            <div className="container">
              <Link to="/" className="back-to">
                <ArrowBackIosIcon />
              </Link>
              <div className="other-page-title">my savings</div>
              <div className="other-needed-things">
                <AddSharpIcon />
              </div>
            </div>
          </div>
          <div className="saving-body container page-list mb-s2">
            <div className="saving-container">
              <div className="saving-top">
                <div className="saving-text">
                  <p>gaming console</p>
                  <p>gaming</p>
                </div>
                <p>$499</p>
              </div>
              <div className="saving-progress">
                <div className="savebar">85%</div>
              </div>
            </div>
            <div className="saving-container">
              <div className="saving-top">
                <div className="saving-text">
                  <p>new house</p>
                  <p>living</p>
                </div>
                <p>$ 100,000</p>
              </div>
              <div className="saving-progress">
                <div className="savebar">55%</div>
              </div>
            </div>
            <div className="saving-container">
              <div className="saving-top">
                <div className="saving-text">
                  <p>sport car</p>
                  <p>livestyle</p>
                </div>
                <p>$ 42,500</p>
              </div>
              <div className="saving-progress">
                <div className="savebar">15%</div>
              </div>
            </div>
            <div className="saving-container">
              <div className="saving-top">
                <div className="saving-text">
                  <p>education</p>
                  <p>livestyle</p>
                </div>
                <p>$ 25,200</p>
              </div>
              <div className="saving-progress">
                <div className="savebar">35%</div>
              </div>
            </div>
            <div className="saving-container">
              <div className="saving-top">
                <div className="saving-text">
                  <p>computer</p>
                  <p>livestyle</p>
                </div>
                <p>$ 1,500</p>
              </div>
              <div className="saving-progress">
                <div className="savebar">60%</div>
              </div>
            </div>
            <div className="saving-container">
              <div className="saving-top">
                <div className="saving-text">
                  <p>world tour</p>
                  <p>travel</p>
                </div>
                <p>$ 10,000</p>
              </div>
              <div className="saving-progress">
                <div className="savebar">55%</div>
              </div>
            </div>
            <div className="saving-container">
              <div className="saving-top">
                <div className="saving-text">
                  <p>birthday gift</p>
                  <p>gift</p>
                </div>
                <p>$ 500</p>
              </div>
              <div className="saving-progress">
                <div className="savebar">90%</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SavingAll;
