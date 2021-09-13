import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import AddSharpIcon from "@material-ui/icons/AddSharp";


const SavingAll = () => {
  return (
    <div className="saving-all">
      <div className="page navbar">
        <div className="container">
          <div className="back-to">
            <ArrowBackIosIcon />
          </div>
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
  );
};

export default SavingAll;
