import "./App.css";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Detail from "./pages/Detail";
import TransactionAll from "./pages/TransactionAll";
import CardAll from "./pages/CardAll";
import MonthlyBills from "./pages/MonthlyBills";
import SavingAll from "./pages/SavingAll";
import LatestNews from "./pages/LatestNews";
import BottomNavbar from "./components/BottomNavbar";
import Pages from "./components/Pages";
import Component from "./components/Component";
import Settings from "./components/Settings";
import Notification from "./pages/Notification";
import NotificationDetail from "./components/NotificationDetail";
import { useState, useEffect } from "react";
import LatestNewsInfo from "./components/LatestNewsInfo";
import Login from "./pages/Login";
import MerchantSingle from "./pages/MerchantSingle";
import { publicRequest } from "./request";
function App() {
  const [admin, setAdmin] = useState(true);
  const [transactions, setTransaction] = useState([]);
  const LOCAL_STORAGE_KEY = "sean-boss";
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const facts = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    setDarkMode(JSON.parse(facts));
    const getAllTransaction = async () => {
      try {
        const res = await publicRequest.post(
          "/safepay/admin2/report/alltransactions"
        );
        console.log(res);
        setTransaction(res.data.data)
      } catch (error) {
        console.log(error)
      }
    };
    getAllTransaction();
  }, []);
  console.log(transactions)
  useEffect(() => {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(darkMode));
  });
  return (
    <div className={darkMode ? "App dark" : "App light"}>
      <Router>
        <Switch>
          <Route exact path="/">
            {admin ? (
              <Redirect to="/dashboard" />
            ) : (
              <Login setAdmin={setAdmin} />
            )}
          </Route>
          {admin && (
            <>
              <Route exact path="/dashboard">
                <Home transactions={transactions}/>
              </Route>
              <Route exact path="/detail">
                <Detail />
              </Route>
              <Route exact path="/transactions/all">
                <TransactionAll transactions={transactions}/>
              </Route>
              <Route exact path="/merchant/:id">
                <MerchantSingle />
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
              <Route exact path="/latest-news/detail">
                <LatestNewsInfo />
              </Route>
            </>
          )}
        </Switch>
        {admin && <BottomNavbar />}
      </Router>
    </div>
  );
}

export default App;
