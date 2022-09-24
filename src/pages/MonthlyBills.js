import React, { useState, useEffect } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import AddSharpIcon from "@material-ui/icons/AddSharp";
import { Link } from "react-router-dom";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import GrassIcon from "@mui/icons-material/Grass";
import GroupIcon from "@mui/icons-material/Group";

const MonthlyBills = () => {
  const [paid, setPaid] = useState(0);
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
      {loading ? (
        <div className="loading">
          <img src="/images/loading-icon.png" alt="#" />
        </div>
      ) : (
        <div className="monthly-bill-all">
          <div className="page navbar">
            <div className="container">
              <Link to="/" className="back-to">
                <ArrowBackIosIcon />
              </Link>
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
                  <CalendarTodayIcon />
                </div>
                <p className="month-price">
                  <span className="naira">N</span> 14
                </p>
                <p className="month-desc">prime monthy subscription</p>
                <button>pay now</button>
              </div>
              <div className="monthly-bill-contnent">
                <div className="img-cont">
                  <MusicNoteIcon />
                </div>
                <p className="month-price">
                  <span className="naira">N</span> 8
                </p>
                <p className="month-desc">monthly payment</p>
                <button>pay now</button>
              </div>
              <div className="monthly-bill-contnent">
                <div className="img-cont">
                  <GrassIcon />
                </div>
                <p className="month-price">
                  <span className="naira">N</span> 15
                </p>
                <p className="month-desc">envato subscription</p>
                <button>pay now</button>
              </div>
              <div className="monthly-bill-contnent">
                <div className="img-cont">
                  <CreditCardIcon />
                </div>
                <p className="month-price">
                  <span className="naira">N</span> 49
                </p>
                <p className="month-desc">subscription fee</p>
                <button>pay now</button>
              </div>
              <div className="monthly-bill-contnent">
                <div className="img-cont bg-red">
                  <GroupIcon />
                </div>
                <p className="month-price">
                  <span className="naira">N</span> 12
                </p>
                <p className="month-desc">pro membership</p>
                <button>pay now</button>
              </div>
              <div className="monthly-bill-contnent">
                <div className="img-cont">
                  <LocalHospitalIcon />
                </div>
                <p className="month-price">
                  <span className="naira">N</span> 14
                </p>
                <p className="month-desc">prime monthly subscription</p>
                <button>pay now</button>
              </div>
              <div className="monthly-bill-contnent">
                <div className="img-cont bg-teal">
                  <CreditCardIcon />
                </div>
                <p className="month-price">
                  <span className="naira">N</span> 8
                </p>
                <p className="month-desc">monthly payment</p>
                <button>pay now</button>
              </div>
              <div className="monthly-bill-contnent">
                <div className="img-cont bg-purple">
                  <GrassIcon />
                </div>
                <p className="month-price">
                  <span className="naira">N</span> 15
                </p>
                <p className="month-desc">Envato Elements Subscription</p>
                <button>pay now</button>
              </div>
            </div>
          ) : null}
          {paid === 1 ? (
            <div className="homeincexp container page-list pt-11 mb-s2">
              <div className="monthly-bill-contnent">
                <div className="img-cont bg-teal">
                  <CalendarTodayIcon />
                </div>
                <p className="month-price">
                  <span className="naira">N</span> 14
                </p>
                <p className="month-desc">Prime Monthly Subscription</p>
                <button>pay now</button>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default MonthlyBills;
