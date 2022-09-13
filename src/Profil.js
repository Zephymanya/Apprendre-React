import React from "react";
import ProfilData from "./profilData";
import woman from "./woman.jpg";

class Profil extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>{this.props.nom.name} </h1>
        <img
          src={woman}
          alt=""
          style={{ height: "150px", width: "140px" }}
        ></img>

        <ProfilData wel={this.props.nom} />
      </div>
    );
  }
}
export default Profil;
