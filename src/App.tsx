import React from "react";
import "./App.css";
import HotelsPage from "./components/hotel/HotelsPage";
import { Route, Switch } from "react-router";
import PageNotFound from "../src/components/common/PageNotFound";
import ManageHotel from "./components/hotel/ManageHotel";
import Header from "./components/common/Header";

const App: React.FC = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HotelsPage} />
        <Route path="/hotels" component={HotelsPage} />
        <Route path="/hotel/:id" component={ManageHotel} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default App;
