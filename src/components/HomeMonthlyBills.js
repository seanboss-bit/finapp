import React from "react";
import { Link } from "react-router-dom";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
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
            <CalendarTodayIcon />
          </div>
          <p className="month-price"><span className="naira">N</span> 9</p>
          <p className="month-desc">prime monthy subscription</p>
          <button>pay now</button>
        </div>
        <div className="monthly-bill-contnent">
          <div className="img-cont">
            <MusicNoteIcon />
          </div>
          <p className="month-price"><span className="naira">N</span> 9</p>
          <p className="month-desc">music monthy subscription</p>
          <button>pay now</button>
        </div>
        <div className="monthly-bill-contnent">
          <div className="img-cont">
            <LocalHospitalIcon />
          </div>
          <p className="month-price"><span className="naira">N</span> 299</p>
          <p className="month-desc">monthly health insurance</p>
          <button>pay now</button>
        </div>
        <div className="monthly-bill-contnent">
          <div className="img-cont">
            <CreditCardIcon />
          </div>
          <p className="month-price"><span className="naira">N</span> 963</p>
          <p className="month-desc">credit card statement</p>
          <button>pay now</button>
        </div>
        <div className="monthly-bill-contnent">
          <div className="img-cont">
            <CreditCardIcon />
          </div>
          <p className="month-price"><span className="naira">N</span> 963</p>
          <p className="month-desc">credit card statement</p>
          <button>pay now</button>
        </div>
        <div className="monthly-bill-contnent">
          <div className="img-cont">
            <CreditCardIcon />
          </div>
          <p className="month-price"><span className="naira">N</span> 963</p>
          <p className="month-desc">credit card statement</p>
          <button>pay now</button>
        </div>
        <div className="monthly-bill-contnent">
          <div className="img-cont">
            <CreditCardIcon />
          </div>
          <p className="month-price"><span className="naira">N</span> 963</p>
          <p className="month-desc">credit card statement</p>
          <button>pay now</button>
        </div>
        <div className="monthly-bill-contnent">
          <div className="img-cont">
            <CreditCardIcon />
          </div>
          <p className="month-price"><span className="naira">N</span> 963</p>
          <p className="month-desc">credit card statement</p>
          <button>pay now</button>
        </div>
        <div className="monthly-bill-contnent">
          <div className="img-cont">
            <CreditCardIcon />
          </div>
          <p className="month-price"><span className="naira">N</span> 963</p>
          <p className="month-desc">credit card statement</p>
          <button>pay now</button>
        </div>
      </div>
    </div>
  );
};

export default HomeMonthlyBills;
