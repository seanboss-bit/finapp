import React, { useEffect } from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../request";

const CurrentMerchant = () => {
  const [credit, setCredit] = useState("");
  const [debit, setDebit] = useState("");
  const [bookBal, setBookBal] = useState("");
  const [avaBal, setAvaBal] = useState("");
  const location = useLocation();
  const merchantDetailKey = "merchantdetailall";
  const exit = 
    JSON.parse(window.localStorage.getItem(merchantDetailKey))
  

  const loggedMerchant = location.pathname.split("/")[2];
  useEffect(() => {
    const CurrentMerch = async () => {
      try {
        const cred = await publicRequest.get(
          `https://safe-payy.herokuapp.com/coralpay/pos/totalearning/merchantid/${loggedMerchant}`
        );
        setCredit(cred.data.data);
        const debt = await publicRequest.get(
          `https://safe-payy.herokuapp.com/coralpay/pos/totalwithdrawal/merchantid/${loggedMerchant}`
        );
        setDebit(debt.data.data);

        const bal = await publicRequest.get(
          `https://safe-payy.herokuapp.com/coralpay/pos/wallet/checkbalance/${loggedMerchant}`
        );
        setBookBal(bal.data.data.book_balance);
        setAvaBal(bal.data.data.available_balance);
      } catch (error) {
        console.log(error);
      }
    };
    CurrentMerch();
  }, [loggedMerchant]);

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => {
        return word[0];
      })
      .join("");
  };
  return (
    <div className="mercant-current">
      <div className="container">
        <div className="current-merchant-box-slide">
          <div className="current-merchant-box">
            <div className="current-merchant-icon-name">
              {getInitials(`${exit.account_name}`)}
            </div>
            <h4>{exit.account_name}</h4>
          </div>
          <div className="current-merchant-box">
            <div className="current-merchant-icon-name">
              {getInitials(`${exit.business_name}`)}
            </div>
            <h4>{exit.business_name}</h4>
          </div>
          <div className="current-merchant-box">
            <div className="current-merchant-icon">
              <TrendingUpIcon />
            </div>
            <h4>total credit</h4>
            <p>NGN {credit}</p>
          </div>
          <div className="current-merchant-box">
            <div className="current-merchant-icon">
              <TrendingDownIcon />
            </div>
            <h4>total debit</h4>
            <p>NGN {debit}</p>
          </div>
          <div className="current-merchant-box">
            <div className="current-merchant-icon">
              <AccountBalanceWalletIcon />
            </div>
            <h4>available balance</h4>
            <p>NGN {avaBal}</p>
          </div>
          <div className="current-merchant-box">
            <div className="current-merchant-icon">
              <AccountBalanceWalletIcon />
            </div>
            <h4>book balance</h4>
            <p>NGN {bookBal}</p>
          </div>
          <div className="current-merchant-box">
            <p>email: {exit.merchant_email}</p>
            {exit.POS_phone?.map(item => (
              <p>phone number: {item}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentMerchant;
