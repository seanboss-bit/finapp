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
const TransactionAll = ({ transactions }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
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
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Ref. Number</TableCell>
                    <TableCell align="left">Description</TableCell>
                    <TableCell align="left">Amount</TableCell>
                    <TableCell align="left">Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {transactions?.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.paymentref}
                      </TableCell>
                      <TableCell align="left">{row.description}</TableCell>
                      <TableCell align="left" width={150}>
                        NGN {numberWithCommas(row.transaction_amount)}
                      </TableCell>
                      <TableCell align="left" width={170}>
                        {<Moment date={row.date} format="dddd-MM-YYYY" />}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionAll;
