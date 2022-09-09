import React from "react";
import "./App.css";
import Modal from "./Modal";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
  }

  handleShow = () => {
    this.setState({
      showModal: true,
    });
  };
  handleclose = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    const affichModal =
      this.state.showModal === true ? <Modal close={this.handleclose} /> : null; //Condition d'affiche du modal
    return (
      <div className="App">
        <button onClick={this.handleShow}>Affichier le modal</button>
        {affichModal}
      </div>
    );
  }
}

export default App;
