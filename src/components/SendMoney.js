import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { publicRequest } from "../request";

const SendMoney = () => {
  const [merchant, setMerchant] = useState([]);

  useEffect(() => {
    const getMerchant = async () => {
      try {
        const res = await publicRequest.get("/coralpay/pos/user/allmerchants");

        setMerchant(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMerchant();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container">
      <div className="trans-title">
        <p>Send Money</p>
        <Link to="/">Add New</Link>
      </div>
      <div className="card-body">
        {merchant.map((item) => (
          <Link
            to={`/merchant/${item.merchant_id}`}
            className="money-content"
            key={item.merchant_id}
          >
            <img
              src="https://i.insider.com/56016278bd86ef1c008bc175?width=1136&format=jpeg"
              alt="#"
            />
            <p>{item.business_name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SendMoney;
