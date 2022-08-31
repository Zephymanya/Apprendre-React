import React from "react";
import { Component } from "react";
import Cars from "./Cars";

class Mycars extends Component {
    state = {
        voiture: [
            { name: "Ford", color: "yellow", year: 2010 },
            { name: "lambourghini", color: "yellow", year: 2022 },
            { name: "Ferrari", color: "red", year: 2000 },
        ],
    };

    handleClick = () => {
        const count = this.state.voiture.map((param) => {
            param.year -= 10;
        });
        this.setState({
            count,
        });
    };

    render() {
        let annee = new Date().getFullYear();
        return (
            <div>
                <h1>{this.props.title} </h1>

                <button onClick={this.handleClick}>
                    Incrémenter de 10 ans
                </button>

                {this.state.voiture.map((voitures, index) => {
                    return (
                        <div key={index}>
                            <Cars
                                nom={voitures.name}
                                color={voitures.color}
                                year={annee - voitures.year}
                            />
                        </div>
                    );
                })}
            </div>
        );
    }
}
export default Mycars;
