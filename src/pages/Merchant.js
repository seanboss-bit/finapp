import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import { useEffect } from "react";
import { useState } from "react";
import { publicRequest } from "../request";

const Merchant = () => {
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
    <div>
      <div className="page navbar">
        <div className="container">
          <Link to="/" className="back-to">
            <ArrowBackIosIcon />
          </Link>
          <div className="other-page-title">merchants</div>
          <div className="other-needed-things">
            <Link to="/notification" className="notify">
              <span>4</span>
              <NotificationsNoneIcon />
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="merchant-whole">
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
      </div>
    </div>
  );
};

export default Merchant;
