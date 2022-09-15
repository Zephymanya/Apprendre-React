import React, { useState } from "react";
import { v1 as uuid, v1 } from "uuid";
import AddtodoListe from "./AddtodoListe";

export default function Todo() {
  const [liste, setListe] = useState([
    { id: 1, todo: "du lait" },
    { id: 2, todo: "mangue" },
    { id: 3, todo: "chocolat" },
    { id: 4, todo: "Boudin" },
  ]);

  const newTodo = (newListe, index) => {
    setListe([
      ...liste,
      {
        id: v1(),
        todo: newListe,
      },
    ]);
  };

  const todoList = liste.map((data) => {
    return (
      <li
        style={{
          border: "1px solid black",
          width: "90%",
          height: "3%",
          padding: "2%",
        }}
      >
        {" "}
        {data.id}
        {data.todo}{" "}
      </li>
    );
  });
  return (
    <div>
      <div>
        <p>Hello world {todoList} </p>
      </div>
      <hr style={{ marginLeft: "-4em" }} />
      <AddtodoListe ajoutListe={newTodo} />
    </div>
  );
}
