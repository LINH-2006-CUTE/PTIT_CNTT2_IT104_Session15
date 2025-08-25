import React, { Component } from "react";

interface StateType {
  birthday: string;
  submitted: string;
}

export default class Bai3 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      birthday: "",
      submitted: "",
    };
  }

  handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ birthday: event.target.value });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.setState({ submitted: this.state.birthday });
  };

  render() {
    return (
      <>
      
          <h3>Ngày sinh: {this.state.submitted}</h3>
        

        <h2>Form</h2>
        <form onSubmit={this.handleSubmit}>
          <p>Ngày sinh:</p>
          <input
            type="date"
            value={this.state.birthday}
            onChange={this.handleInput}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}
