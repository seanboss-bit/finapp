import React from "react";
import AddIcon from "@material-ui/icons/Add";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import ImportExportIcon from "@material-ui/icons/ImportExport";

const Homeshow = () => {
  return (
    <div className="home-show">
      <div className="homeshow">
        <div className="container">
          <div className="homeshow-inner">
            <div className="container">
              <div className="top">
                <div className="top-left">
                  <p>total balance</p>
                  <p>$2,456.90</p>
                </div>
                <div className="top-right">
                  <AddIcon />
                </div>
              </div>
              <div className="bottom">
                <div className="transctions-options">
                  <div className="back">
                    <ArrowDownwardIcon />
                  </div>
                  <p>withdraw</p>
                </div>
                <div className="transctions-options">
                  <div className="back">
                    <ArrowForwardIcon />
                  </div>
                  <p>send</p>
                </div>
                <div className="transctions-options">
                  <div className="back">
                    <CreditCardIcon />
                  </div>
                  <p>cards</p>
                </div>
                <div className="transctions-options">
                  <div className="back">
                    <ImportExportIcon />
                  </div>
                  <p>exchange</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homeshow;
