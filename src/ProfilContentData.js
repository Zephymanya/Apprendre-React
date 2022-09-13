import React from "react";
import { Mycontext } from "./MyContext";
export default function ProfilContentData() {
  return (
    <Mycontext.Consumer>
      {(data) => {
        return (
          <div style={{ marginLeft: "5%" }}>
            <ul
              style={{
                border: "1px solid black",
                borderRadius: "10px",
              }}
            >
              <li>
                {" "}
                <strong>Nom :</strong> {data.name}
              </li>
              <hr />
              <li>
                <strong>Age :</strong> {data.age}
              </li>
            </ul>
          </div>
        );
      }}
    </Mycontext.Consumer>
  );
}
