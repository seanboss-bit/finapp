import React, { useEffect, useState } from "react";
import Homecard from "../components/Homecard";
import Homeexpinc from "../components/Homeexpinc";
import HomeLatestNews from "../components/HomeLatestNews";
import HomeMonthlyBills from "../components/HomeMonthlyBills";
import Homenav from "../components/Homenav";
import HomeSaving from "../components/HomeSaving";
import Homeshow from "../components/Homeshow";
import Hometransactions from "../components/Hometransactions";
import SendMoney from "../components/SendMoney";

const Home = ({ transactions }) => {
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
        <div>
          <Homenav />
          <Homeshow />
          <Homeexpinc />
          <Hometransactions transactions={transactions} />
          <Homecard />
          <SendMoney />
          <HomeMonthlyBills />
          <HomeSaving />
          <HomeLatestNews />
          <footer className="footer">
            <div className="container">
              <p>Copyright © Finapp 2021. All Rights Reserved.</p>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
};

export default Home;
