import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HotelsPage from "./components/hotel/HotelsPage";
import { Hotel, City } from "../src/models/Hotel";
import { db } from "./firebaseconfig";
import { Route, Switch } from "react-router";
import PageNotFound from "../src/components/common/PageNotFound";
import ManageHotel from "./components/hotel/ManageHotel";
import Header from "./components/common/Header";
// const citiesRef = db.collection("cities");
// let setSf = citiesRef.doc("SF").set({
//   name: "San Francisco",
//   state: "CA",
//   country: "USA",
//   capital: false,
//   population: 860000
// });
// let setLa = citiesRef.doc("LA").set({
//   name: "Los Angeles",
//   state: "CA",
//   country: "USA",
//   capital: false,
//   population: 3900000
// });
// let setDc = citiesRef.doc("DC").set({
//   name: "Washington, D.C.",
//   state: null,
//   country: "USA",
//   capital: true,
//   population: 680000
// });
// let setTok = citiesRef.doc("TOK").set({
//   name: "Tokyo",
//   state: null,
//   country: "Japan",
//   capital: true,
//   population: 9000000
// });
// let setBj = citiesRef.doc("BJ").set({
//   name: "Beijing",
//   state: null,
//   country: "China",
//   capital: true,
//   population: 21500000
// });
// citiesRef
//   .get()
//   .then(snapshot => snapshot.forEach(doc => console.log(doc.data())));

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
