import React from "react";
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
  return (
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
  );
};

export default Home;
