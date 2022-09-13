import React from "react";
import ProfilContentData from "./ProfilContentData";
import { Mycontext } from "./MyContext";
export default function ProfilData(props) {
  return (
    <Mycontext.Consumer>
      {(data) => {
        return (
          <div
            style={{
              display: "flex",
              // fleDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                width: "100px",
                heigth: "20px",
                backgroundColor: "blue",
                borderRadius: "10px",
              }}
            >
              <a href="/" style={{ color: "white", textDecoration: "none" }}>
                information sur {data.name}
              </a>
            </p>
            <ProfilContentData />
          </div>
        );
      }}
    </Mycontext.Consumer>
  );
}
