import React, { useState, useEffect } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { publicRequest } from "../request";
const TransactionAll = ({ transactions, merchant, loggedInMerchant }) => {
  const [loading, setLoading] = useState(false);
  const [transactionss, setTransactions] = useState([]);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    const getTransForSingMerchant = async () => {
      try {
        const res = await publicRequest.get(
          `https://safe-payy.herokuapp.com/coralpay/pos/queryalltransaction/phone/${loggedInMerchant}`
        );
        const inflow = res.data.inflow.concat(res.data.outflow);

        console.log(res);
        setTransactions(inflow);
      } catch (error) {
        console.log(error);
      }
    };
    getTransForSingMerchant();
    // eslint-disable-next-line
  }, []);
  function numberWithCommas(x) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <div>
      {loading ? (
        <div className="loading">
          <img src="/images/loading-icon.png" alt="#" />
        </div>
      ) : (
        <div className="transaction-all-page">
          <div className="page navbar">
            <div className="container">
              <Link to="/" className="back-to">
                <ArrowBackIosIcon />
              </Link>
              <div className="other-page-title">transactions</div>
              <div className="other-needed-things">
                <Link to="/notification" className="notify">
                  <span>4</span>
                  <NotificationsNoneIcon />
                </Link>
              </div>
            </div>
          </div>
          <div className="trans-list page-list container">
            <TableContainer component={Paper} className="table-material">
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  {merchant ? (
                    <TableRow>
                      <TableCell>Amount</TableCell>
                      <TableCell align="left">Description</TableCell>
                      <TableCell align="left">Alert</TableCell>
                      <TableCell align="left">Date</TableCell>
                    </TableRow>
                  ) : (
                    <TableRow>
                      <TableCell>Ref. Number</TableCell>
                      <TableCell align="left">Description</TableCell>
                      <TableCell align="left">Amount</TableCell>
                      <TableCell align="left">Date</TableCell>
                    </TableRow>
                  )}
                </TableHead>
                {merchant ? (
                  <TableBody>
                    {transactionss?.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row" width={110}>
                          NGN {numberWithCommas(row.total_amount || row.Amount)}
                        </TableCell>
                        <TableCell align="left" className="aling-tst">
                          {" "}
                          {row.display_message ||
                            `Transfer of ${row.Amount} to ${row.BeneficiaryName} A/C:${row.BeneficiaryAccount} TRNFREF:${row.TransactionRef}`}
                        </TableCell>
                        <TableCell align="left" width={150}>
                          {row.response ? "Outflow" : "Inflow"}
                        </TableCell>
                        <TableCell align="left" width={170}>
                          {<Moment date={row.date} format="dddd-MM-YYYY" />}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                ) : (
                  <TableBody>
                    {transactions?.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.paymentref}
                        </TableCell>
                        <TableCell
                          align="left"
                          width={250}
                          className="aling-tst"
                        >
                          {row.description}
                        </TableCell>
                        <TableCell align="left" width={350}>
                          NGN {numberWithCommas(row.transaction_amount)}
                        </TableCell>
                        <TableCell align="left" width={270}>
                          {<Moment date={row.date} format="dddd-MM-YYYY" />}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionAll;
