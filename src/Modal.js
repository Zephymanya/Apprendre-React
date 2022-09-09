import React, { Component } from "react";
import "./index.css";
import ReactDOM from "react-dom";

class Modal extends Component {
  render(props) {
    console.log(this.props);
    return ReactDOM.createPortal(
      <div className="modal" onClick={this.props.close}>
        <div>
          <h1>Bonjour le monde</h1>
          <button>Fermer</button>
        </div>
      </div>,
      document.getElementById("second-root")
    );
  }
}
export default Modal;
