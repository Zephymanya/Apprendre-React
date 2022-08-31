import React from "react";

const Cars = ({ children, color, year }) => {
    const valueCol = color ? (
        <p>la couleur :{color} </p>
    ) : (
        <>couleur : manquante</>
    );

    return (
        <div>
            <div
                style={{
                    backgroundColor: "red",
                    width: "200px",
                    marginLeft: "40%",
                }}
            >
                <p>La marque :{children} </p>
                <p>Année : {year}</p>
                {valueCol}
            </div>
        </div>
    );
};

export default Cars;
