import React, { Component } from "react";

interface StateType {
  email: string;
  result: string;
}

export default class Bai11 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      email: "",
      result: "",
    };
  }

  handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: event.target.value });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.setState({ result: this.state.email });
    console.log({ email: this.state.email });
  };

  render() {
    return (
      <>
        <h2>Form</h2>
        <form onSubmit={this.handleSubmit}>
          <p>Email</p>
          <input
            type="email"
            placeholder="abc@gmail.com"
            value={this.state.email}
            onChange={this.handleInput}
          />
          <br />
          <button type="submit">Submit</button>
        </form>

    
      </>
    );
  }
}
