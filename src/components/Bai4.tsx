import React, { Component } from "react";

interface StateType {
  progress: number;
  submitted: number;
}

export default class Bai4 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      progress: 0,   
      submitted: 0,
    };
  }

  handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ progress: parseInt(event.target.value) });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.setState({ submitted: this.state.progress });
  };

  render() {
    return (
      <>
        <h3>
          Tiến độ hoàn thành:{" "}
          {this.state.submitted +" %"}
        </h3>

        <h2>Form</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="range"
            min="0"
            max="100"
            value={this.state.progress}
            onChange={this.handleInput}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}
