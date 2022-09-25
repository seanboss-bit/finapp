import React, { useEffect, useState } from "react";
import Homenav from "../components/Homenav";
import Hometransactions from "../components/Hometransactions";
import SendMoney from "../components/SendMoney";

const Home = ({ transactions, setAdmin }) => {
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
          <Homenav setAdmin={setAdmin}/>
          <Hometransactions transactions={transactions} />
          <SendMoney />
          <footer className="footer">
            <div className="container">
              <p>Copyright © SafePAY 2021. All Rights Reserved.</p>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
};

export default Home;
