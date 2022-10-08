import "./App.css";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Detail from "./pages/Detail";
import TransactionAll from "./pages/TransactionAll";
import BottomNavbar from "./components/BottomNavbar";
import Settings from "./components/Settings";
import Notification from "./pages/Notification";
import NotificationDetail from "./components/NotificationDetail";
import { useState, useEffect } from "react";
import Login from "./pages/Login";
import MerchantSingle from "./pages/MerchantSingle";
import { publicRequest } from "./request";
import Merchant from "./pages/Merchant";
import MerchantHome from "./pages/MerchantHome";
function App() {
  const [admin, setAdmin] = useState(false);
  const [mechant, setMerchant] = useState(false);
  const [transactions, setTransaction] = useState([]);
  const LOCAL_STORAGE_KEY = "sean-boss";
  const Admin_Key = "admin";
  const Mechant_key = "mechant";
  const [loggedInMerchant, setLoggedInMerchant] = useState("");
  const loggedInMerchant_key = "loggedinmerchant";
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const isLogin = window.localStorage.getItem(Admin_Key);
    const facts = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    const merchIsLogin = window.localStorage.getItem(Mechant_key);
    const identifyMerchant = window.localStorage.getItem(loggedInMerchant_key);
    setDarkMode(JSON.parse(facts));
    setAdmin(JSON.parse(isLogin));
    setMerchant(JSON.parse(merchIsLogin));
    setLoggedInMerchant(JSON.parse(identifyMerchant));
    const getAllTransaction = async () => {
      try {
        const res = await publicRequest.post(
          "/safepay/admin2/report/alltransactions"
        );
        setTransaction(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllTransaction();
  }, []);
  useEffect(() => {
    window.localStorage.setItem(
      loggedInMerchant_key,
      JSON.stringify(loggedInMerchant)
    );
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(darkMode));
    window.localStorage.setItem(Admin_Key, JSON.stringify(admin));
    window.localStorage.setItem(Mechant_key, JSON.stringify(mechant));
  });
  return (
    <div className={darkMode ? "App dark" : "App light"}>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              admin ? (
                <Navigate to="/dashboard" />
              ) : mechant ? (
                <Navigate to={`/merchant/${loggedInMerchant}`} />
              ) : (
                <Login
                  setAdmin={setAdmin}
                  setMerchant={setMerchant}
                  setLoggedInMerchant={setLoggedInMerchant}
                />
              )
            }
          />

          {admin ? (
            <>
              <Route
                exact
                path="/dashboard"
                element={
                  <Home
                    transactions={transactions}
                    setAdmin={setAdmin}
                    setMerchant={setMerchant}
                    merchant={mechant}
                    loggedInMerchant={loggedInMerchant}
                  />
                }
              />
              <Route exact path="/detail" element={<Detail />} />
              <Route
                exact
                path="/transactions/all"
                element={<TransactionAll transactions={transactions} />}
              />
              <Route exact path="/merchants/:id" element={<MerchantSingle />} />
              <Route exact path="/merchants" element={<Merchant />} />
              <Route
                exact
                path="/settings"
                element={
                  <Settings darkMode={darkMode} setDarkMode={setDarkMode} />
                }
              />
              <Route exact path="/notification" element={<Notification />} />
              <Route
                exact
                path="/notification-detail"
                element={<NotificationDetail />}
              />
            </>
          ) : (
            <>
              <Route exact path="/detail" element={<Detail />} />
              <Route
                exact
                path="/transactions/all"
                element={<TransactionAll transactions={transactions}  merchant={mechant} loggedInMerchant={loggedInMerchant}/>}
              />
              <Route
                exact
                path="/merchant/:id"
                element={
                  <MerchantHome
                    setMerchant={setMerchant}
                    setAdmin={setAdmin}
                    merchant={mechant}
                    loggedInMerchant={loggedInMerchant}
                  />
                }
              />
              <Route exact path="/merchants" element={<Merchant />} />
              <Route
                exact
                path="/settings"
                element={
                  <Settings darkMode={darkMode} setDarkMode={setDarkMode} />
                }
              />
              <Route exact path="/notification" element={<Notification />} />
              <Route
                exact
                path="/notification-detail"
                element={<NotificationDetail />}
              />
            </>
          )}
        </Routes>
        {admin ? (
          <BottomNavbar
            merchant={mechant}
            loggedInMerchant={loggedInMerchant}
          />
        ) : mechant ? (
          <BottomNavbar
            merchant={mechant}
            loggedInMerchant={loggedInMerchant}
          />
        ) : null}
      </Router>
    </div>
  );
}

export default App;
