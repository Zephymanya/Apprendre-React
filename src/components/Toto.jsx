import React from "react";

export default function Toto(props) {
  console.log();
  return (
    <>
      <h1>{props.name} </h1>

      {props.leStateM ? (
        <button onClick={props.reponseFils}>Réponse</button>
      ) : (
        <button disabled>Réponse</button>
      )}
      <p>{props.lEtat.messageFils} </p>
    </>
  );
}
