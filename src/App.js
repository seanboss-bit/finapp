import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./components/Detail";
import TransactionAll from "./components/TransactionAll";
import CardAll from "./components/CardAll";
import MonthlyBills from "./components/MonthlyBills";
import SavingAll from "./components/SavingAll";
import LatestNews from "./components/LatestNews";
import BottomNavbar from "./components/BottomNavbar";
import Pages from "./components/Pages";
import Component from "./components/Component";
import Settings from "./components/Settings";
import Notification from "./components/Notification";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/detail">
          <Detail />
        </Route>
        <Route exact path="/transactions/all">
          <TransactionAll />
        </Route>
        <Route exact path="/cards/all">
          <CardAll />
        </Route>
        <Route exact path="/monthlybills/all">
          <MonthlyBills />
        </Route>
        <Route exact path="/saving/all">
          <SavingAll />
        </Route>
        <Route exact path="/latest-news/all">
          <LatestNews />
        </Route>
        <Route exact path="/pages">
          <Pages />
        </Route>
        <Route exact path="/components">
          <Component />
        </Route>
        <Route exact path="/settings">
          <Settings />
        </Route>
        <Route exact path="/notification">
          <Notification />
        </Route>
      </Switch>
      <BottomNavbar />
    </Router>
  );
}

export default App;
