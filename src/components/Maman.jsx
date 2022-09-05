import React, { Component, Fragment } from "react";
import Toto from "./Toto";
class Maman extends Component {
  state = {
    messageMaman: null,
    messageFils: null,
  };

  mamanOrdone = () => {
    this.setState({
      messageMaman: "Va manger les haricots",
    });
  };

  reponseToto = () => {
    this.setState({
      messageFils: "Merci maman j'y vais",
    });
  };

  render() {
    return (
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h1>Maman</h1>
        <p>{this.state.messageMaman} </p>
        <button onClick={this.mamanOrdone}>Ordre de Maman</button>
        <hr />
        <Toto
          name="Je suis Toto"
          leStateM={this.state.messageMaman}
          reponseFils={this.reponseToto}
          lEtat={this.state}
        />
      </div>
    );
  }
}

export default Maman;
