import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CurrentMerchant from "../components/CurrentMerchant";
import Homenav from "../components/Homenav";
import Hometransactions from "../components/Hometransactions";
import { publicRequest } from "../request";

const MerchantHome = ({
  setMerchant,
  setAdmin,
  merchant,
  loggedInMerchant,
  setMerchantDetailsAll,
}) => {
  const history = useLocation();
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const id = history?.pathname?.split("/")[2];
  useEffect(() => {
    const getTransForSingMerchant = async () => {
      try {
        const res = await publicRequest.get(
          `https://safe-payy.herokuapp.com/coralpay/pos/queryalltransaction/phone/${id}`
        );
        const inflow = res.data.inflow.concat(res.data.outflow);

        setTransactions(inflow);
      } catch (error) {
        console.log(error);
      }
    };
    getTransForSingMerchant();
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
          <Homenav
            setMerchant={setMerchant}
            setAdmin={setAdmin}
            merchant={merchant}
            loggedInMerchant={loggedInMerchant}
            setMerchantDetailsAll={setMerchantDetailsAll}
          />
          <CurrentMerchant />
          <Hometransactions transactions={transactions} merchant={merchant} />
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

export default MerchantHome;
