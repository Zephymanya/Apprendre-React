import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profil from "./Profil";
import { Mycontext } from "./MyContext";
class App extends React.Component {
  state = {
    user: {
      name: "Lisa",
      age: 8,
    },
  };
  render() {
    return (
      <Mycontext.Provider value={this.state.user}>
        <Profil nom={this.state.user} />
      </Mycontext.Provider>
    );
  }
}

export default App;
