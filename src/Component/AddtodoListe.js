import React, { useState } from "react";

export default function AddtodoListe({ ajoutListe }) {
  const [even, setEven] = useState("");
  const handlechange = (e) => {
    e.preventDefault();
    setEven(e.target.value);
  };

  const handleTodo = (e) => {
    e.preventDefault();
    ajoutListe(even);
    setEven("");
  };

  return (
    <div>
      <form onSubmit={handleTodo}>
        <label>Ajout Info</label>
        <input type="text" value={even.target} onChange={handlechange} />
        <input type="submit" />
      </form>

      <p>{even} </p>
    </div>
  );
}
