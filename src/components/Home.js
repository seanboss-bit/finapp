import React, { useEffect, useState } from "react";
import Homecard from "./Homecard";
import Homeexpinc from "./Homeexpinc";
import HomeLatestNews from "./HomeLatestNews";
import HomeMonthlyBills from "./HomeMonthlyBills";
import Homenav from "./Homenav";
import HomeSaving from "./HomeSaving";
import Homeshow from "./Homeshow";
import Hometransactions from "./Hometransactions";
import SendMoney from "./SendMoney";

const Home = () => {
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
          <Hometransactions />
          <Homecard />
          <SendMoney />
          <HomeMonthlyBills />
          <HomeSaving />
          <HomeLatestNews />
          <footer>
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
