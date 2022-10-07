import React, { useEffect, useState } from "react";
import SettingsIcon from "@material-ui/icons/Settings";
import { useLocation, Link } from "react-router-dom";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PersonIcon from "@mui/icons-material/Person";

const BottomNavbar = ({ merchant, loggedInMerchant }) => {
  // eslint-disable-next-line
  const [overView, setOverView] = useState(true);
  // eslint-disable-next-line
  const [set, setSet] = useState(false);
  const [trans, setTrans] = useState(false);
  const history = useLocation();

  useEffect(() => {
    const checkLinks = () => {
      if (history.pathname === "/settings") {
        setOverView(false);
        setSet(true);
        setTrans(false);
      } else if (history.pathname === "/dashboard") {
        setOverView(true);
        setSet(false);
        setTrans(false);
      } else if (history.pathname === "/transactions/all") {
        setOverView(false);
        setSet(false);
        setTrans(true);
      } else {
        setOverView(false);
        setSet(false);
        setTrans(false);
      }
    };
    checkLinks();
    // eslint-disable-next-line
  }, [history]);

  return (
    <div className="bottom navbar">
      <div className="container">
        <Link
          to={merchant ? `/merchant/${loggedInMerchant}` : `/dashboard`}
          className={overView ? "pain active" : "pain"}
        >
          <i className="fas fa-chart-pie"></i>
          <p>overview</p>
        </Link>
        <Link to="/transactions/all" className={trans ? "pain active" : "pain"}>
          <TrendingUpIcon />
          <p>transaction</p>
        </Link>
        {merchant ? null : (
          <Link
            to={"/merchants"}
            className={
              history.pathname === "/merchants" ? "pain active" : "pain"
            }
          >
            <PersonIcon />
            <p>merchants</p>
          </Link>
        )}
        {merchant ? (
          <Link to={"/settings"} className={set ? "pain active" : "pain"}>
            <SettingsIcon />
            <p>settings</p>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default BottomNavbar;
