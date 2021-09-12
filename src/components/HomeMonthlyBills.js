import React from "react";
import { Link } from "react-router-dom";

const HomeMonthlyBills = () => {
  return (
    <div className="container">
      <div className="trans-title">
        <p>Monthly Bills</p>
        <Link to="/monthlybills/all">View All</Link>
      </div>
      <div className="card-body">
        <div className="monthly-bill-contnent">
          <div className="img-cont">
            <img src="/images/avatar1.jpg" alt="#" />
          </div>
          <p className="month-price">$ 9</p>
          <p className="month-desc">prime monthy subscription</p>
          <button>pay now</button>
        </div>
        <div className="monthly-bill-contnent">
          <div className="img-cont">
            <img src="/images/avatar1.jpg" alt="#" />
          </div>
          <p className="month-price">$ 9</p>
          <p className="month-desc">music monthy subscription</p>
          <button>pay now</button>
        </div>
        <div className="monthly-bill-contnent">
          <div className="img-cont">
            <img src="/images/avatar1.jpg" alt="#" />
          </div>
          <p className="month-price">$ 299</p>
          <p className="month-desc">monthly health insurance</p>
          <button>pay now</button>
        </div>
        <div className="monthly-bill-contnent">
          <div className="img-cont">
            <img src="/images/avatar1.jpg" alt="#" />
          </div>
          <p className="month-price">$ 963</p>
          <p className="month-desc">credit card statement</p>
          <button>pay now</button>
        </div>
        <div className="monthly-bill-contnent">
          <div className="img-cont">
            <img src="/images/avatar1.jpg" alt="#" />
          </div>
          <p className="month-price">$ 963</p>
          <p className="month-desc">credit card statement</p>
          <button>pay now</button>
        </div>
        <div className="monthly-bill-contnent">
          <div className="img-cont">
            <img src="/images/avatar1.jpg" alt="#" />
          </div>
          <p className="month-price">$ 963</p>
          <p className="month-desc">credit card statement</p>
          <button>pay now</button>
        </div>
        <div className="monthly-bill-contnent">
          <div className="img-cont">
            <img src="/images/avatar1.jpg" alt="#" />
          </div>
          <p className="month-price">$ 963</p>
          <p className="month-desc">credit card statement</p>
          <button>pay now</button>
        </div>
        <div className="monthly-bill-contnent">
          <div className="img-cont">
            <img src="/images/avatar1.jpg" alt="#" />
          </div>
          <p className="month-price">$ 963</p>
          <p className="month-desc">credit card statement</p>
          <button>pay now</button>
        </div>
        <div className="monthly-bill-contnent">
          <div className="img-cont">
            <img src="/images/avatar1.jpg" alt="#" />
          </div>
          <p className="month-price">$ 963</p>
          <p className="month-desc">credit card statement</p>
          <button>pay now</button>
        </div>
      </div>
    </div>
  );
};

export default HomeMonthlyBills;
