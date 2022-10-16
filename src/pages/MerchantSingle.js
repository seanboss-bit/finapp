import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { publicRequest } from "../request";
import Table from "@mui/material/Table";
import Moment from "react-moment";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const MerchantSingle = () => {
  const history = useLocation();
  const navigate = useNavigate();
  const id = history?.pathname?.split("/")[2];
  const [merchant, setMerchant] = useState([]);
  const [rows, setInflowData] = useState([]);
  const [outflowData, setOutflowData] = useState([]);
  const [change, setChange] = useState(false);
  const [balance, setBalance] = useState({});
  useEffect(() => {
    const getSingleMerchant = async () => {
      try {
        const info = await publicRequest.get("/coralpay/pos/user/allmerchants");
        setMerchant(info.data.data);
        const res = await publicRequest(
          `/coralpay/pos/queryalltransaction/phone/${id}`
        );
        const bal = await publicRequest(
          `https://safe-payy.herokuapp.com/coralpay/pos/wallet/checkbalance/${id}`
        );
        setBalance(bal.data.data);
        setInflowData(res.data.inflow);
        setOutflowData(res.data.outflow);
      } catch (error) {
        console.log(error);
      }
    };
    getSingleMerchant();
  }, [id]);
  // eslint-disable-next-line
  let match = merchant?.find((item) => {
    if (item.merchant_id === id) {
      return item;
    }
  });
  function numberWithCommas(x) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <div>
      <div className="container">
        <div className="backtoHo">
          <ArrowBackIcon onClick={() => navigate("/dashboard")} />
        </div>
        <div className="four-box">
          <div className="four-box-content">
            <h6>business name</h6>
            <span>{match?.business_name}</span>
          </div>
          <div className="four-box-content">
            <h6>business phone</h6>
            <span>{match?.merchant_phone}</span>
          </div>
          <div className="four-box-content">
            <h6>business category</h6>
            <span>{match?.business_category}</span>
          </div>
          <div className="four-box-content">
            <h6>book balance</h6>
            <span>{balance.book_balance}</span>
          </div>
          <div className="four-box-content">
            <h6>available balance</h6>
            <span>{balance.available_balance}</span>
          </div>
        </div>
        <div className="table-side">
          <div className="switchTable">
            <button
              className={!change ? "active" : ""}
              onClick={() => setChange(false)}
            >
              inflow
            </button>
            <button
              className={change ? "active" : ""}
              onClick={() => setChange(true)}
            >
              outflow
            </button>
          </div>
          {!change && (
            <TableContainer component={Paper} className="table-material">
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Payment Ref.</TableCell>
                    <TableCell align="left">Description</TableCell>
                    <TableCell align="left">Amount</TableCell>
                    <TableCell align="left">Service Fee</TableCell>
                    <TableCell align="left">Total</TableCell>
                    <TableCell align="left">Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows?.map((row) => (
                    <TableRow
                      key={row?.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row" width={150}>
                        {row?.paymentref}
                      </TableCell>
                      <TableCell align="left" width={800} className="aling-tst">{row.display_message}</TableCell>
                      <TableCell align="left" width={800}>
                        NGN {numberWithCommas(row?.paid_amount)}
                      </TableCell>
                      <TableCell align="left" width={650}>
                        {row?.service_fee}
                      </TableCell>
                      <TableCell align="left" width={1500}>
                        NGN {numberWithCommas(row?.total_amount)}
                      </TableCell>
                      <TableCell align="left" width={200}>
                        {
                          <Moment
                            date={row?.transaction_date}
                            format="DD/mm/yyyy"
                          />
                        }
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
          {change && (
            <TableContainer component={Paper} className="table-material">
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Transaction Ref.</TableCell>
                    <TableCell align="left">Destination</TableCell>
                    <TableCell align="left">Amount</TableCell>
                    <TableCell align="left">Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {outflowData.map((row) => (
                    <TableRow
                      key={row?.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row" >
                        {row.TransactionRef}
                      </TableCell>
                      <TableCell align="left" className="aling-tst" width={250}>
                        {row.BeneficiaryName},{row.BeneficiaryAccount},{" "}
                        {row.BeneficiaryBankName}
                      </TableCell>
                      <TableCell align="left" width={150}>
                        NGN {numberWithCommas(row.Amount)}
                      </TableCell>
                      <TableCell align="left">
                        {
                          <Moment
                            date={row.transaction_date}
                            format="DD/mm/yyyy"
                          />
                        }
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </div>
      </div>
    </div>
  );
};

export default MerchantSingle;
