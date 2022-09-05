import React, { Component } from "react";
import Singers from "./Singers";
class Display extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Singers name="Manya" age="26" />
        <Singers name="Kabongo" age="25" />
        <Singers name="Makinda" age="27" />
        <Singers name="Onema" age="26" />
        <Singers name="Ambele" age="25" />
      </div>
    );
  }
}

export default Display;
