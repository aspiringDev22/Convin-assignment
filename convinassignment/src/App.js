import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import UserDetails from "./components/UserDetails";
import UserLists from "./components/UserLists";

const App = () => {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/users" element={<UserLists/>}/>
          <Route path="/:userId" element={<UserDetails/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
