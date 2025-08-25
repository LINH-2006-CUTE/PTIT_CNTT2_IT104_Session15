import React, { Component } from "react";

interface StateType {
  color: string;
}

export default class BaiColor extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      color: "#000",
    };
  }

  handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ color: event.target.value });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  render() {
    return (
      <>
        <h2>Color: {this.state.color}</h2>
        <h3>Form</h3>
        <form onSubmit={this.handleSubmit}>
          <p>Màu sắc</p>
          <input
            type="color"
            value={this.state.color}
            onChange={this.handleInput}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}
