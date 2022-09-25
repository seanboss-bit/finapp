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
function App() {
  const [admin, setAdmin] = useState(false);
  const [transactions, setTransaction] = useState([]);
  const LOCAL_STORAGE_KEY = "sean-boss";
  const Admin_Key = "admin";
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const isLogin = window.localStorage.getItem(Admin_Key);
    const facts = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    setDarkMode(JSON.parse(facts));
    setAdmin(JSON.parse(isLogin));
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
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(darkMode));
    window.localStorage.setItem(Admin_Key, JSON.stringify(admin));
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
              ) : (
                <Login setAdmin={setAdmin} />
              )
            }
          />
          {admin && (
            <>
              <Route
                exact
                path="/dashboard"
                element={<Home transactions={transactions} setAdmin={setAdmin}/>}
              />
              <Route exact path="/detail" element={<Detail />} />
              <Route
                exact
                path="/transactions/all"
                element={<TransactionAll transactions={transactions} />}
              />
              <Route exact path="/merchant/:id" element={<MerchantSingle />} />
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
        {admin && <BottomNavbar />}
      </Router>
    </div>
  );
}

export default App;
