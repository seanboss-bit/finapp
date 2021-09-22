import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./components/Detail";
import TransactionAll from "./components/TransactionAll";
import CardAll from "./components/CardAll";
import MonthlyBills from "./components/MonthlyBills";
import SavingAll from "./components/SavingAll";
import LatestNews from "./components/LatestNews";
import BottomNavbar from "./components/BottomNavbar";
import Pages from "./components/Pages";
import Component from "./components/Component";
import Settings from "./components/Settings";
import Notification from "./components/Notification";
import NotificationDetail from "./components/NotificationDetail";
import { useState, useEffect } from "react";
import LatestNewsInfo from "./components/LatestNewsInfo";
function App() {
  const LOCAL_STORAGE_KEY = "sean-boss";
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const facts = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    setDarkMode(JSON.parse(facts));
  }, []);
  useEffect(() => {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(darkMode));
  });
  return (
    <div className={darkMode ? "App dark" : "App light"}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/detail">
            <Detail />
          </Route>
          <Route exact path="/transactions/all">
            <TransactionAll />
          </Route>
          <Route exact path="/cards/all">
            <CardAll />
          </Route>
          <Route exact path="/monthlybills/all">
            <MonthlyBills />
          </Route>
          <Route exact path="/saving/all">
            <SavingAll />
          </Route>
          <Route exact path="/latest-news/all">
            <LatestNews />
          </Route>
          <Route exact path="/pages">
            <Pages darkMode={darkMode} setDarkMode={setDarkMode} />
          </Route>
          <Route exact path="/components">
            <Component darkMode={darkMode} setDarkMode={setDarkMode} />
          </Route>
          <Route exact path="/settings">
            <Settings darkMode={darkMode} setDarkMode={setDarkMode} />
          </Route>
          <Route exact path="/notification">
            <Notification />
          </Route>
          <Route exact path="/notification-detail">
            <NotificationDetail />
          </Route>
          <Route eaxct path="/latest-news/detail">
            <LatestNewsInfo />
          </Route>
        </Switch>
        <BottomNavbar />
      </Router>
    </div>
  );
}

export default App;
