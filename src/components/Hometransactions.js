import React from "react";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Moment from "react-moment";

const Hometransactions = ({ transactions, merchant }) => {
  function numberWithCommas(x) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <div className="container">
      <div className="trans-title">
        <p>Transactions</p>
        <Link to="/transactions/all">View all</Link>
      </div>
      <div className="trans-list">
        <TableContainer component={Paper} className='table-material'>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            {merchant ? (
              <TableHead>
                <TableRow>
                  <TableCell>Amount</TableCell>
                  <TableCell align="left">Description</TableCell>
                  <TableCell align="left">Alert</TableCell>
                  <TableCell align="left">Date</TableCell>
                </TableRow>
              </TableHead>
            ) : (
              <TableHead>
                <TableRow>
                  <TableCell>Ref. Number</TableCell>
                  <TableCell align="left">Description</TableCell>
                  <TableCell align="left">Amount</TableCell>
                  <TableCell align="left">Date</TableCell>
                </TableRow>
              </TableHead>
            )}
            {merchant ? (
              <TableBody>
                {transactions?.slice(0, 10)?.map((row) => (
                  <TableRow
                    key={row.paymentref}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row"  width={110}>
                      NGN {numberWithCommas(row.total_amount || row.Amount)}
                    </TableCell>
                    <TableCell align="left" className="aling-tst">
                      {row.display_message ||
                        `Transfer of ${row.Amount} to ${row.BeneficiaryName} A/C:${row.BeneficiaryAccount} TRNFREF:${row.TransactionRef}`}
                    </TableCell>
                    <TableCell align="left" width={150}>
                      {row.response ? "Outflow" : "Inflow"}
                    </TableCell>
                    <TableCell align="left" width={150}>
                      {<Moment date={row.date} format="dddd-MM-YYYY" />}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            ) : (
              <TableBody>
                {transactions?.slice(0, 4).map((row) => (
                  <TableRow
                    key={row.paymentref}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.paymentref}
                    </TableCell>
                    <TableCell align="left"  className="aling-tst">{row.description}</TableCell>
                    <TableCell align="left" width={150}>
                      NGN {numberWithCommas(row.transaction_amount)}
                    </TableCell>
                    <TableCell align="left" width={150}>
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
  );
};

export default Hometransactions;
