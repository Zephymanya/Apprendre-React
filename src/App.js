import React from "react";
import "./App.css";
import Mycars from "./components/Mycars";
class App extends React.Component {
    state = {
        title: "Yo keba",
    };

    // MOdification du titre
    render() {
        return (
            <div className="App">
                <Mycars title={this.state.title} />
            </div>
        );
    }
}

export default App;
