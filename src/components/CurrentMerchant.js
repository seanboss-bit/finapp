import React from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const CurrentMerchant = () => {
  return (
    <div className="mercant-current">
      <div className="container">
        <div className="current-merchant-box-slide">
          <div className="current-merchant-box">
            <div className="current-merchant-icon">
              <TrendingUpIcon />
              <TrendingDownIcon />
              <AccountBalanceWalletIcon />
            </div>
            <h4>total credit</h4>
            <p>NGN 400</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentMerchant;
