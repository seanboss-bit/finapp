import React, { useState } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import AddSharpIcon from "@material-ui/icons/AddSharp";

const MonthlyBills = () => {
  const [paid, setPaid] = useState(0);
  return (
    <div className="monthly-bill-all">
      <div className="page navbar">
        <div className="container">
          <div className="back-to">
            <ArrowBackIosIcon />
          </div>
          <div className="other-page-title">monthly bills</div>
          <div className="other-needed-things">
            <AddSharpIcon />
          </div>
        </div>
        <div className="paid-awaiting container">
          <p
            className={paid === 0 ? "first-state" : ""}
            onClick={() => setPaid(0)}
          >
            waiting
          </p>
          <p
            className={paid === 1 ? "first-state" : ""}
            onClick={() => setPaid(1)}
          >
            paid
          </p>
        </div>
      </div>
      {paid === 0 ? (
        <div className="homeincexp container page-list pt-11 mb-s2">
          <div className="monthly-bill-contnent">
            <div className="img-cont">
              <img src="/images/avatar1.jpg" alt="#" />
            </div>
            <p className="month-price">$ 14</p>
            <p className="month-desc">prime monthy subscription</p>
            <button>pay now</button>
          </div>
          <div className="monthly-bill-contnent">
            <div className="img-cont">
              <img src="/images/avatar1.jpg" alt="#" />
            </div>
            <p className="month-price">$ 8</p>
            <p className="month-desc">monthly payment</p>
            <button>pay now</button>
          </div>
          <div className="monthly-bill-contnent">
            <div className="img-cont">
              <img src="/images/avatar1.jpg" alt="#" />
            </div>
            <p className="month-price">$ 15</p>
            <p className="month-desc">envato subscription</p>
            <button>pay now</button>
          </div>
          <div className="monthly-bill-contnent">
            <div className="img-cont">
              <img src="/images/avatar1.jpg" alt="#" />
            </div>
            <p className="month-price">$ 49</p>
            <p className="month-desc">subscription fee</p>
            <button>pay now</button>
          </div>
          <div className="monthly-bill-contnent">
            <div className="img-cont">
              <img src="/images/avatar1.jpg" alt="#" />
            </div>
            <p className="month-price">$ 12</p>
            <p className="month-desc">pro membership</p>
            <button>pay now</button>
          </div>
          <div className="monthly-bill-contnent">
            <div className="img-cont">
              <img src="/images/avatar1.jpg" alt="#" />
            </div>
            <p className="month-price">$ 14</p>
            <p className="month-desc">prime monthly subscription</p>
            <button>pay now</button>
          </div>
          <div className="monthly-bill-contnent">
            <div className="img-cont">
              <img src="/images/avatar1.jpg" alt="#" />
            </div>
            <p className="month-price">$ 8</p>
            <p className="month-desc">monthly payment</p>
            <button>pay now</button>
          </div>
          <div className="monthly-bill-contnent">
            <div className="img-cont">
              <img src="/images/avatar1.jpg" alt="#" />
            </div>
            <p className="month-price">$ 15</p>
            <p className="month-desc">Envato Elements Subscription</p>
            <button>pay now</button>
          </div>
        </div>
      ) : null}
      {paid === 1 ? (
        <div className="homeincexp container page-list pt-11 mb-s2">
          <div className="monthly-bill-contnent">
            <div className="img-cont">
              <img src="/images/avatar1.jpg" alt="#" />
            </div>
            <p className="month-price">$ 14</p>
            <p className="month-desc">Prime Monthly Subscription</p>
            <button>pay now</button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MonthlyBills;
