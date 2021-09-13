import React, { useEffect, useState } from "react";
import AppsIcon from "@material-ui/icons/Apps";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import SettingsIcon from "@material-ui/icons/Settings";
import { useHistory } from "react-router-dom";

const BottomNavbar = () => {
  const [overView, setOverView] = useState(true);
  const [pages, setPages] = useState(false);
  const [component, setComponent] = useState(false);
  const [card, setCard] = useState(false);
  const [set, setSet] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (history.location.pathname === "/settings") {
      setOverView(false);
      setPages(false);
      setComponent(false);
      setCard(false);
      setSet(true);
    } else if (history.location.pathname === "/") {
      setOverView(true);
      setPages(false);
      setComponent(false);
      setCard(false);
      setSet(false);
    } else if (history.location.pathname === "/pages") {
      setOverView(false);
      setPages(true);
      setComponent(false);
      setCard(false);
      setSet(false);
    } else if (history.location.pathname === "/components") {
      setOverView(false);
      setPages(false);
      setComponent(true);
      setCard(false);
      setSet(false);
    } else if (history.location.pathname === "/cards/all") {
      setOverView(false);
      setPages(false);
      setComponent(false);
      setCard(true);
      setSet(false);
    } else {
      setOverView(false);
      setPages(false);
      setComponent(false);
      setCard(false);
      setSet(false);
    }
    // eslint-disable-next-line
  }, []);
  const toHome = () => {
    history.push("/");
    setOverView(true);
    setPages(false);
    setComponent(false);
    setCard(false);
    setSet(false);
  };
  const toPages = () => {
    history.push("/pages");
    setOverView(false);
    setPages(true);
    setComponent(false);
    setCard(false);
    setSet(false);
  };
  const toComponent = () => {
    history.push("/components");
    setOverView(false);
    setPages(false);
    setComponent(true);
    setCard(false);
    setSet(false);
  };
  const toCards = () => {
    history.push("/cards/all");
    setOverView(false);
    setPages(false);
    setComponent(false);
    setCard(true);
    setSet(false);
  };
  const toSettings = () => {
    history.push("/settings");
    setOverView(false);
    setPages(false);
    setComponent(false);
    setCard(false);
    setSet(true);
  };

  return (
    <div className="bottom navbar">
      <div className="container">
        <div
          className={overView ? "pain active" : "pain"}
          onClick={() => toHome()}
        >
          <i className="fas fa-chart-pie"></i>
          <p>overview</p>
        </div>
        <div
          className={pages ? "pain active" : "pain"}
          onClick={() => toPages()}
        >
          <i className="far fa-file"></i>
          <p>pages</p>
        </div>
        <div
          className={component ? "pain active" : "pain"}
          onClick={() => toComponent()}
        >
          <AppsIcon />
          <p>components</p>
        </div>
        <div
          className={card ? "pain active" : "pain"}
          onClick={() => toCards()}
        >
          <CreditCardIcon />
          <p>my cards</p>
        </div>
        <div
          className={set ? "pain active" : "pain"}
          onClick={() => toSettings()}
        >
          <SettingsIcon />
          <p>settings</p>
        </div>
      </div>
    </div>
  );
};

export default BottomNavbar;
