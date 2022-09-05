import React, { Component } from "react";

class Form extends Component {
  state = {
    userName: "",
    color: "",
    colors: ["", "noire", "rouge", "vert", "pink", "mauve"],
    comment: "",
  };
  handlePseudo = (e) => {
    this.setState({ userName: e.target.value });
  };

  handleColor = (e) => {
    this.setState({ color: e.target.value });
  };

  handleComment = (e) => {
    this.setState({ comment: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `username: ${this.state.userName}, color : ${this.state.color}, comment: ${this.state.comment}`
    );
  };

  render() {
    return (
      <div>
        <form
          style={{ textAlign: "center", marginTop: "10%" }}
          onSubmit={this.handleSubmit}
        >
          <label>Pseudo</label>
          <input
            type="text"
            value={this.state.userName}
            onChange={this.handlePseudo}
          />
          <p>{this.state.userName} </p>

          <div>
            <label>couleur</label>
            <select onChange={this.handleColor} value={this.state.color}>
              {this.state.colors.map((color, index) => {
                return (
                  <option key={index} value={color}>
                    {color}{" "}
                  </option>
                );
              })}
            </select>

            <p>{this.state.color} </p>
          </div>

          <div>
            <textarea
              value={this.state.comment}
              onChange={this.handleComment}
            ></textarea>
            <p>{this.state.comment} </p>
          </div>

          <button type="submit">Envoyer</button>
        </form>
      </div>
    );
  }
}

export default Form;
